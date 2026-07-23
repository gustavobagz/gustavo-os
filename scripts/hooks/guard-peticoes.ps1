# Hook PostToolUse (Write|Edit) — guarda das convencoes de redacao juridica.
#
# Aplica, de forma deterministica, as regras do CLAUDE.md (secao "Convencoes de
# redacao juridica") sobre qualquer .md gravado em Escritorio/Peticoes/:
#   - nunca enderecar o juiz pessoalmente (Excelencia / Vossa Excelencia / Exmo. ...)
#   - 1a instancia: requerente / requerida  (nunca autor(a) / reu / re)
#   - 2a instancia: apelante / apelada
#
# Linhas em blockquote markdown (">") sao ignoradas: por convencao do repo elas
# carregam citacao literal de lei, jurisprudencia ou peca da parte contraria,
# onde os termos sao legitimos.
#
# Saida: {"decision":"block","reason":"..."} quando encontra violacao.

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
if ($caminho -notmatch '[\\/]Escritorio[\\/]Peticoes[\\/]') { exit 0 }
if ($caminho -notmatch '\.md$') { exit 0 }
if (-not (Test-Path -LiteralPath $caminho -PathType Leaf)) { exit 0 }

try { $linhas = @(Get-Content -LiteralPath $caminho -Encoding UTF8) } catch { exit 0 }

$regras = @(
    @{ P = '(?i)(?<![\w-])vossas?\s+excel[eê]nci';        M = 'tratamento pessoal ao juiz ("Vossa Excelencia")' }
    @{ P = '(?i)(?<![\w-])excelent[ií]ssim';               M = 'vocativo "Excelentissimo(a)"' }
    @{ P = '(?i)(?<![\w-])ex\.?m[oa]s?(?![\w-])';          M = 'abreviacao "Exmo./Exma."' }
    @{ P = '(?i)(?<![\w-])v\.\s*ex\.?[aª]?(?![\w-])';      M = 'abreviacao "V. Exa."' }
    @{ P = '(?i)(?<![\w-])merit[ií]ssim';                  M = '"Meritissimo"' }
    @{ P = '(?i)(?<![\w-])MM\.?\s*ju[ií]z';                M = '"MM. Juiz"' }
    @{ P = '(?i)(?<![\w-])excel[eê]ncia(?![\w-])';         M = '"Excelencia"' }
    @{ P = '(?i)(?<![\w-])autor(?:a|es|as)?(?![\w-])';     M = 'nomenclatura "autor(a)" — usar "requerente"' }
    @{ P = '(?i)(?<![\w-])(?:r[ée]us?|r[ée]s|ré)(?![\w-])'; M = 'nomenclatura "reu/re" — usar "requerida"' }
)

$achados = New-Object System.Collections.ArrayList
for ($i = 0; $i -lt $linhas.Count; $i++) {
    $linha = $linhas[$i]
    if ($linha -match '^\s*>') { continue }          # blockquote = citacao literal
    if ([string]::IsNullOrWhiteSpace($linha)) { continue }
    foreach ($r in $regras) {
        $m = [regex]::Match($linha, $r.P)
        if ($m.Success) {
            [void]$achados.Add(("  - linha {0}: {1} -> «{2}»" -f ($i + 1), $r.M, $m.Value))
            break                                     # 1 achado por linha ja basta
        }
    }
}

if ($achados.Count -eq 0) { exit 0 }

$nome = Split-Path -Leaf $caminho
$lista = ($achados | Select-Object -First 20) -join "`n"

$motivo = @"
BLOQUEIO — convencoes de redacao juridica do CLAUDE.md violadas em ${nome}:

$lista

Corrija antes de seguir:
  - Enderecar SEMPRE ao Juizo (ex.: "Ao Juizo da 3a Vara Civel de Anapolis/GO").
    Nunca "Excelencia", "Vossa Excelencia", "Exmo. Sr. Dr. Juiz" ou similar.
  - 1a instancia: "requerente" / "requerida".
  - 2a instancia: "apelante" / "apelada" (feminino fixo para a parte recorrida,
    independentemente do genero gramatical do nome da parte).

Excecao: se o trecho for citacao literal de lei, jurisprudencia ou peca da parte
contraria, NAO reescreva o texto citado — mova-o para blockquote markdown (">"),
que o hook ignora, ou avise o Gustavo em vez de editar.
"@

Emit @{ decision = 'block'; reason = $motivo }
