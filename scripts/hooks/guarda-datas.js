#!/usr/bin/env node
// Hook PostToolUse (Write|Edit) — guarda do formato de data nos arquivos-registro.
//
// CLAUDE.md, Camada 2: "Datas nos registros sempre em AAAA-MM-DD".
// As skills /briefing, /fechamento-semanal e /vigilancia fazem parse dessas
// datas; DD/MM/AAAA quebra o parse em silêncio — o prazo simplesmente não aparece.
//
// Confere apenas o conteúdo RECÉM-GRAVADO (new_string / content), não o arquivo
// inteiro: os registros têm histórico legado que não deve alertar a cada edição.
//
// Avisa (systemMessage) e devolve contexto ao modelo. Não bloqueia.

let bruto = ''
process.stdin.on('data', d => (bruto += d))
process.stdin.on('end', () => {
  let entrada
  try {
    entrada = JSON.parse(bruto || '{}')
  } catch {
    process.exit(0)
  }

  const ti = entrada.tool_input || {}
  const alvo = ti.file_path
  if (!alvo) process.exit(0)

  const norm = String(alvo).replace(/\\/g, '/')
  if (!/\.md$/i.test(norm)) process.exit(0)
  if (!/\/(Escritorio|H2)\//.test(norm)) process.exit(0)
  if (/\/CLAUDE\.md$/i.test(norm)) process.exit(0)
  // Peticoes/ e Propostas/ são entregáveis em prosa jurídica, onde DD/MM/AAAA é
  // correto. Exceção: casos.md mora em Peticoes/ mas é o registro central do OS.
  if (/\/(Peticoes|Propostas)\//.test(norm) && !/\/casos\.md$/i.test(norm)) process.exit(0)

  const novo = ti.new_string || ti.content
  if (!novo) process.exit(0)

  // (?<![\d/]) e (?![\d/]) evitam casar pedaços de numero de processo CNJ
  // (5075206-17.2025.8.09.0006) e de datas ja no formato correto.
  const achadas = String(novo).match(/(?<![\d/])[0-3]?\d\/[01]?\d\/\d{4}(?![\d/])/g)
  if (!achadas) process.exit(0)

  const datas = [...new Set(achadas)].slice(0, 10)
  const nome = norm.split('/').pop()
  const lista = datas.join(', ')

  process.stdout.write(
    JSON.stringify({
      systemMessage: `[OS] Data fora do padrão em ${nome}: ${lista} — registros usam AAAA-MM-DD.`,
      hookSpecificOutput: {
        hookEventName: 'PostToolUse',
        additionalContext:
          `O conteúdo gravado em ${nome} contém data(s) no formato DD/MM/AAAA: ${lista}. ` +
          `Os arquivos-registro do OS exigem AAAA-MM-DD (CLAUDE.md, Camada 2) porque as skills ` +
          `/briefing, /fechamento-semanal e /vigilancia fazem parse dessas datas. Converta agora — ` +
          `salvo se for citação literal de documento de terceiro, caso em que mantenha e sinalize.`,
      },
    })
  )
  process.exit(0)
})
