#!/usr/bin/env node
// Hook Stop — commita e envia os REGISTROS alterados na sessao.
// CLAUDE.md: "sempre que um dado operacional surgir em conversa, registrar no
// arquivo correspondente — nunca deixar so na conversa". Este hook fecha o
// ciclo: o que virou arquivo vai para o GitHub, e as rotinas da nuvem enxergam.
//
// Escopo deliberadamente estreito: so .md dentro de Escritorio/, H2/,
// Relatorios/ e memory/. Codigo, scripts, skills e config continuam com commit
// manual — auto-commitar codigo esconde trabalho pela metade.
const { execFileSync } = require('child_process')
const fs = require('fs')
const path = require('path')

const repo = process.env.CLAUDE_PROJECT_DIR || process.cwd()
const REGISTROS = /^(Escritorio|H2|Relatorios|memory)\/.*\.md$/

function git(...args) {
  return execFileSync('git', ['-C', repo, ...args], {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
    timeout: 40000,
  }).trim()
}

function saida(msg) {
  process.stdout.write(JSON.stringify({ systemMessage: msg, suppressOutput: true }))
}

try {
  const emConflito = ['MERGE_HEAD', 'rebase-merge', 'rebase-apply', 'CHERRY_PICK_HEAD'].some(f =>
    fs.existsSync(path.join(repo, '.git', f))
  )
  if (emConflito) process.exit(0)

  // --porcelain: XY <caminho>, com renomeacao em "orig -> novo"
  const alterados = git('status', '--porcelain')
    .split('\n')
    .filter(Boolean)
    .map(l => l.slice(3).trim().replace(/^.* -> /, '').replace(/^"|"$/g, ''))
    .filter(p => REGISTROS.test(p))

  if (alterados.length === 0) process.exit(0)

  git('add', '--', ...alterados)

  // Commit COM pathspec: sem isso o commit levaria junto qualquer coisa que ja
  // estivesse no indice — inclusive trabalho de outra sessao rodando no mesmo
  // repo. O pathspec limita o commit exatamente aos registros filtrados.
  const staged = git('diff', '--cached', '--name-only', '--', ...alterados).split('\n').filter(Boolean)
  if (staged.length === 0) process.exit(0)

  const hoje = new Date().toISOString().slice(0, 10)
  const frentes = [...new Set(staged.map(p => p.split('/')[0]))].join(', ')
  git('commit', '-m', `Registros: sync automatico de sessao (${frentes}) — ${hoje}`, '--', ...staged)

  let empurrou = true
  let erroPush = ''
  try {
    git('push')
  } catch (e) {
    empurrou = false
    erroPush = (e.stderr || e.message || '').toString().split('\n').filter(Boolean).pop() || ''
  }

  saida(
    `Registros commitados (${staged.length} arquivo(s)): ${staged.join(', ')}` +
      (empurrou ? ' — enviados ao GitHub.' : ` — push falhou: ${erroPush}. Rode "git push" quando puder.`)
  )
} catch (e) {
  saida(`Falha ao sincronizar registros: ${(e.stderr || e.message || '').toString().split('\n')[0]}`)
}
