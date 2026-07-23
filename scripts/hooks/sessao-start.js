#!/usr/bin/env node
// Hook SessionStart — traz o que as rotinas da nuvem gravaram, sem NUNCA deixar
// o repo num estado quebrado.
//
// Versao anterior usava `git pull --rebase --autostash`. Rebase e uma operacao
// de varios passos: se o processo morre no meio (timeout do hook, rede lenta,
// PC dormindo), o repo fica em rebase pela metade, com HEAD destacado e as
// alteracoes presas numa stash. Aconteceu.
//
// Aqui: fetch + merge --ff-only. Fast-forward e uma unica atualizacao de ref —
// ou aplica inteira, ou nao aplica. Nao existe meio-termo, nao mexe na working
// tree se houver trabalho local, e nao cria stash. Se nao der para avancar
// direto (historia divergiu), so avisa e deixa a decisao com Gustavo.
const { execFileSync } = require('child_process')

const repo = process.env.CLAUDE_PROJECT_DIR || process.cwd()

function git(...args) {
  return execFileSync('git', ['-C', repo, ...args], {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
    timeout: 20000,
  }).trim()
}

function saida(msg) {
  process.stdout.write(JSON.stringify({ systemMessage: msg, suppressOutput: true }))
}

try {
  const branch = git('rev-parse', '--abbrev-ref', 'HEAD')
  if (branch === 'HEAD') {
    saida('Repo em HEAD destacado (rebase/bisect em curso?) — sync automatico ignorado.')
    process.exit(0)
  }

  let upstream
  try {
    upstream = git('rev-parse', '--abbrev-ref', '@{upstream}')
  } catch {
    process.exit(0) // branch sem upstream: nada a sincronizar
  }

  git('fetch', '--quiet')

  const [atras, frente] = git('rev-list', '--left-right', '--count', `${upstream}...HEAD`)
    .split(/\s+/)
    .map(Number)

  if (atras === 0) process.exit(0) // ja em dia

  if (frente > 0) {
    saida(
      `Historia divergiu de ${upstream}: ${frente} commit(s) local(is) e ${atras} remoto(s). ` +
        `Nao toquei no repo — resolva com "git pull --rebase" quando nenhuma outra sessao estiver escrevendo.`
    )
    process.exit(0)
  }

  // So aqui e seguro: nada local para preservar, e um fast-forward puro.
  git('merge', '--ff-only', upstream)
  const novos = git('log', '--oneline', `HEAD@{1}..HEAD`).split('\n').filter(Boolean)
  saida(`Repo sincronizado: ${novos.length} commit(s) da nuvem.\n` + novos.map(l => '  ' + l).join('\n'))
} catch (e) {
  const detalhe = (e.stderr || e.message || '').toString().split('\n').filter(Boolean)[0] || ''
  saida(`Sync automatico do repo falhou (repo intacto): ${detalhe}`)
}
