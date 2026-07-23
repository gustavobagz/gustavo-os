#!/usr/bin/env node
// Hook PostToolUse (Write|Edit) — rastro de auditoria dos arquivos do OS.
//
// Grava uma linha em Relatorios/audit.log a cada alteração em Escritorio/, H2/
// ou Relatorios/. Responde "quando esse dado entrou no registro e em que sessão"
// — útil quando um número de processo ou valor de honorário diverge entre fontes
// e ninguém lembra a origem (ver as correções de varredura em casos.md).
//
// Silencioso por design: nunca escreve em stdout, nunca bloqueia.
// O log é local (gitignored): não entra no versionamento para não conflitar com
// as rotinas da nuvem que fazem push no main.
const fs = require('fs')
const path = require('path')

const repo = process.env.CLAUDE_PROJECT_DIR || process.cwd()

let bruto = ''
process.stdin.on('data', d => (bruto += d))
process.stdin.on('end', () => {
  let entrada
  try {
    entrada = JSON.parse(bruto || '{}')
  } catch {
    process.exit(0)
  }

  const alvo = entrada.tool_input && entrada.tool_input.file_path
  if (!alvo) process.exit(0)

  const norm = String(alvo).replace(/\\/g, '/')
  if (!/\/(Escritorio|H2|Relatorios)\//.test(norm)) process.exit(0)

  const raiz = repo.replace(/\\/g, '/').replace(/\/$/, '')
  const rel = norm.toLowerCase().startsWith(raiz.toLowerCase())
    ? norm.slice(raiz.length).replace(/^\//, '')
    : norm

  // Relógio LOCAL nas duas metades: toISOString() daria a data em UTC e, depois
  // das 21h em Goiânia (UTC-3), carimbaria o dia seguinte junto de uma hora local.
  const agora = new Date()
  const pad = n => String(n).padStart(2, '0')
  const carimbo =
    `${agora.getFullYear()}-${pad(agora.getMonth() + 1)}-${pad(agora.getDate())} ` +
    agora.toTimeString().slice(0, 8)
  const sessao = String(entrada.session_id || '--------').slice(0, 8)
  const acao = (entrada.tool_name || '?').padEnd(6)

  try {
    const destino = path.join(repo, 'Relatorios', 'audit.log')
    fs.mkdirSync(path.dirname(destino), { recursive: true })
    fs.appendFileSync(destino, `${carimbo} | ${acao} | ${rel} | sess ${sessao}\n`, 'utf8')
  } catch {
    /* auditoria nunca pode atrapalhar o trabalho */
  }
  process.exit(0)
})
