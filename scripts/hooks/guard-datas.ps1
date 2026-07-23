# Hook PostToolUse (Write|Edit) — guarda do formato de data nos arquivos-registro.
#
# CLAUDE.md, Camada 2: "Datas nos registros sempre em AAAA-MM-DD".
# As skills (/briefing, /fechamento-semanal, /vigilancia) fazem parse dessas datas;
# DD/MM/AAAA quebra o parse silenciosamente.
#
# Escopo: .md sob Escritorio/ ou H2/, EXCETO peticoes, propostas e os CLAUDE.md.
# Peticoes ficam de fora de proposito: em prosa juridica DD/MM/AAAA e correto.
#
# Confere apenas o conteudo RECEM-GRAVADO (new_string / content), nao o arquivo
# inteiro — os registros tem historico legado que nao deve disparar aviso a cada edicao.
#
# Saida: aviso na tela (systemMessage) + contexto de volta ao modelo. Nao bloqueia.

$ErrorActionPreference = 'Stop'
try { [Console]::OutputEncoding = [System.Text.Encoding]::UTF8 } catch {}

function Emit($obj) {
    [Console]::Out.Write(($obj | ConvertTo-Json -Compress -Depth 6))
    exit 0
}

try {
    $bruto = [Console]::In.ReadToEnd()
    if ([string]::IsNullOrWhiteSpace($bruto)) { exit 0 }
    $payload = $bruto | ConvertFrom-Json
} catch { exit 0 }

$caminho = $payload.tool_input.file_path
if (-not $caminho) { exit 0 }
if ($caminho -notmatch '\.md$') { exit 0 }
if ($caminho -notmatch '[\\/](Escritorio|H2)[\\/]') { exit 0 }
if ($caminho -match '[\\/](Peticoes|Propostas)[\\/]') { exit 0 }
if ($caminho -match '[\\/]CLAUDE\.md$') { exit 0 }

$novo = $payload.tool_input.new_string
if (-not $novo) { $novo = $payload.tool_input.content }
if ([string]::IsNullOrWhiteSpace($novo)) { exit 0 }

$datas = @([regex]::Matches($novo, '(?<![\d/])([0-3]?\d)/([01]?\d)/(\d{4})(?![\d/])') |
           ForEach-Object { $_.Value } | Select-Object -Unique)

if ($datas.Count -eq 0) { exit 0 }

$nome  = Split-Path -Leaf $caminho
$lista = ($datas | Select-Object -First 10) -join ', '

Emit @{
    systemMessage = "[OS] Data fora do padrao em ${nome}: $lista — registros usam AAAA-MM-DD."
    hookSpecificOutput = @{
        hookEventName = 'PostToolUse'
        additionalContext = @"
O conteudo gravado em $nome contem data(s) no formato DD/MM/AAAA: $lista.
Os arquivos-registro do OS exigem AAAA-MM-DD (CLAUDE.md, Camada 2) porque as skills
/briefing, /fechamento-semanal e /vigilancia fazem parse dessas datas.
Converta agora — salvo se for citacao literal de documento de terceiro, caso em que
mantenha e sinalize ao Gustavo.
"@
    }
}
