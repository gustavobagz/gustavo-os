#!/usr/bin/env node
// Hook PostToolUse (Write|Edit) — guarda das convenções de redação jurídica.
//
// Aplica de forma determinística as regras do CLAUDE.md sobre qualquer .md
// gravado em Escritorio/Peticoes/:
//   - nunca endereçar o juiz pessoalmente (Excelência / Exmo. / Meritíssimo)
//   - 1ª instância: requerente / requerida  (nunca autor(a) / réu / ré)
//   - 2ª instância: apelante / apelada
//
// Linhas em blockquote markdown (">") são ignoradas: por convenção do repo elas
// carregam citação literal de lei, jurisprudência ou peça da parte contrária,
// onde os termos são legítimos.
//
// Bloqueia (decision: block) para que a correção aconteça antes da peça seguir.
const fs = require('fs')

// \w em JS é ASCII-only, então as fronteiras incluem a faixa acentuada À-ÿ —
// sem isso "maré" dispararia a regra de "ré".
const B0 = '(?<![\\wÀ-ÿ-])'
const B1 = '(?![\\wÀ-ÿ-])'

const REGRAS = [
  [`${B0}vossas?\\s+excel[eê]nci`, 'tratamento pessoal ao juiz ("Vossa Excelência")'],
  [`${B0}excelent[ií]ssim`, 'vocativo "Excelentíssimo(a)"'],
  [`${B0}ex\\.?m[oa]s?${B1}`, 'abreviação "Exmo./Exma."'],
  [`${B0}v\\.\\s*ex\\.?[aª]?${B1}`, 'abreviação "V. Exa."'],
  [`${B0}merit[ií]ssim`, '"Meritíssimo"'],
  [`${B0}MM\\.?\\s*ju[ií]z`, '"MM. Juiz"'],
  [`${B0}excel[eê]ncia${B1}`, '"Excelência"'],
  [`${B0}autor(?:a|es|as)?${B1}`, 'nomenclatura "autor(a)" — usar "requerente"'],
  [`${B0}(?:r[ée]us?|r[ée]s|ré)${B1}`, 'nomenclatura "réu/ré" — usar "requerida"'],
].map(([p, m]) => [new RegExp(p, 'i'), m])

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
  if (!/\/Escritorio\/Peticoes\//.test(norm)) process.exit(0)
  if (!/\.md$/i.test(norm)) process.exit(0)
  // casos.md mora em Peticoes/ mas é REGISTRO (Camada 2), não peça: descreve
  // processos de terceiros, onde "autor"/"réu" são descrição de fato.
  if (/\/casos\.md$/i.test(norm)) process.exit(0)

  let linhas
  try {
    linhas = fs.readFileSync(alvo, 'utf8').split(/\r?\n/)
  } catch {
    process.exit(0)
  }

  const achados = []
  linhas.forEach((linha, i) => {
    if (!linha.trim()) return
    if (/^\s*>/.test(linha)) return // blockquote = citação literal

    const naLinha = REGRAS.filter(([re]) => re.test(linha)).map(([, msg]) => msg)
    if (naLinha.length === 0) return

    const trecho = linha.trim().length > 70 ? linha.trim().slice(0, 70) + '...' : linha.trim()
    achados.push(`  linha ${i + 1}: ${naLinha.join('; ')}\n     > ${trecho}`)
  })

  if (achados.length === 0) process.exit(0)

  const nome = norm.split('/').pop()
  const lista = achados.slice(0, 15).join('\n')
  const resto = achados.length > 15 ? `\n  (+${achados.length - 15} outra(s) linha(s))` : ''

  process.stdout.write(
    JSON.stringify({
      decision: 'block',
      reason:
        `Convenções de redação jurídica do CLAUDE.md violadas em ${nome}:\n\n${lista}${resto}\n\n` +
        `Corrija antes de seguir:\n` +
        `  - Endereçar SEMPRE ao Juízo (ex.: "Ao Juízo da 3ª Vara Cível de Anápolis/GO").\n` +
        `    Nunca "Excelência", "Vossa Excelência", "Exmo. Sr. Dr. Juiz" ou similar.\n` +
        `  - 1ª instância: "requerente" / "requerida".\n` +
        `  - 2ª instância: "apelante" / "apelada" (feminino fixo para a parte recorrida,\n` +
        `    independentemente do gênero gramatical do nome da parte).\n\n` +
        `Exceção: se o trecho for citação literal de lei, jurisprudência ou peça da parte ` +
        `contrária, NÃO reescreva o texto citado — mova-o para blockquote markdown (">"), ` +
        `que o hook ignora, ou avise o Gustavo em vez de editar.`,
    })
  )
  process.exit(0)
})
