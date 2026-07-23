#!/usr/bin/env node
// Hook SessionStart — sincroniza o repo com o que as rotinas da nuvem gravaram.
// As rotinas (briefing 06:30, fechamento sexta 16:00) commitam direto no main
// pelo claude.ai/code. Sem este pull, a sessao local comeca desatualizada e
// gera conflito na hora de commitar.
const { execFileSync } = require('child_process')

const repo = process.env.CLAUDE_PROJECT_DIR || process.cwd()

function git(...args) {
  return execFileSync('git', ['-C', repo, ...args], {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
    timeout: 25000,
  }).trim()
}

function saida(msg) {
  process.stdout.write(JSON.stringify({ systemMessage: msg, suppressOutput: true }))
}

try {
  // Nao mexer no repo se ja existe rebase/merge pela metade.
  const gitDir = require('path').join(repo, '.git')
  const emConflito = ['MERGE_HEAD', 'rebase-merge', 'rebase-apply', 'CHERRY_PICK_HEAD'].some(f =>
    require('fs').existsSync(require('path').join(gitDir, f))
  )
  if (emConflito) {
    saida('Repo com rebase/merge em andamento — pull automatico ignorado.')
    process.exit(0)
  }

  const antes = git('rev-parse', 'HEAD')
  git('pull', '--rebase', '--autostash')
  const depois = git('rev-parse', 'HEAD')

  if (antes !== depois) {
    const novos = git('log', '--oneline', `${antes}..${depois}`).split('\n').filter(Boolean)
    saida(`Repo sincronizado: ${novos.length} commit(s) novo(s) da nuvem.\n` + novos.map(l => '  ' + l).join('\n'))
  }
} catch (e) {
  const detalhe = (e.stderr || e.message || '').toString().split('\n')[0]
  saida(`Nao consegui sincronizar o repo no inicio da sessao: ${detalhe}`)
}
