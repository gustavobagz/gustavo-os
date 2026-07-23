#!/usr/bin/env node
// Hook PreToolUse (Write|Edit) — trava de frente.
// Regra de ouro do CLAUDE.md: caso do escritorio nao entra em registro H2 e
// vice-versa. Este hook grava a primeira frente tocada na sessao; se um write
// posterior mirar a outra frente, devolve "ask" para Gustavo confirmar.
// Nao bloqueia: so obriga uma confirmacao consciente.
const fs = require('fs')
const os = require('os')
const path = require('path')

let bruto = ''
process.stdin.on('data', d => (bruto += d))
process.stdin.on('end', () => {
  let entrada
  try {
    entrada = JSON.parse(bruto || '{}')
  } catch {
    process.exit(0)
  }

  const alvo = entrada.tool_input && (entrada.tool_input.file_path || entrada.tool_input.notebook_path)
  if (!alvo) process.exit(0)

  const norm = String(alvo).replace(/\\/g, '/')
  const frente = /\/H2\//.test(norm) ? 'H2' : /\/Escritorio\//.test(norm) ? 'Escritorio' : null
  if (!frente) process.exit(0)

  const sessao = entrada.session_id || 'sem-sessao'
  const estado = path.join(os.tmpdir(), `claude-frente-${sessao}.txt`)

  let anterior = null
  try {
    anterior = fs.readFileSync(estado, 'utf8').trim()
  } catch {
    /* primeira escrita da sessao */
  }

  if (!anterior) {
    try {
      fs.writeFileSync(estado, frente)
    } catch {
      /* sem estado, segue sem travar */
    }
    process.exit(0)
  }

  if (anterior === frente) process.exit(0)

  process.stdout.write(
    JSON.stringify({
      hookSpecificOutput: {
        hookEventName: 'PreToolUse',
        permissionDecision: 'ask',
        permissionDecisionReason:
          `Trava de frente: esta sessao ja escreveu em ${anterior} e agora vai escrever em ${frente} ` +
          `(${norm.split('/').slice(-2).join('/')}). O CLAUDE.md proibe misturar dados entre as frentes. ` +
          `Confirme so se a escrita for mesmo da frente ${frente}.`,
      },
    })
  )
})
