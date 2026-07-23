# Hook PostToolUse (Write|Edit) — rastro de auditoria dos arquivos do OS.
#
# Grava uma linha em Relatorios/audit.log a cada alteracao em Escritorio/ ou H2/.
# Responde "quando esse dado entrou no registro e em que sessao" — util quando um
# numero de processo ou valor de honorario diverge e ninguem lembra a origem.
#
# Silencioso por design: nunca escreve em stdout, nunca bloqueia.
# O arquivo e local (gitignored) para nao conflitar com as rotinas da nuvem que
# fazem push no main.

$ErrorActionPreference = 'SilentlyContinue'

try {
    $bruto = [Console]::In.ReadToEnd()
    if ([string]::IsNullOrWhiteSpace($bruto)) { exit 0 }
    $payload = $bruto | ConvertFrom-Json
} catch { exit 0 }

$caminho = $payload.tool_input.file_path
if (-not $caminho) { exit 0 }
if ($caminho -notmatch '[\\/](Escritorio|H2|Relatorios)[\\/]') { exit 0 }

$raiz = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
if (-not $raiz) { exit 0 }

# caminho relativo a raiz do repo, com barras normais
$rel = $caminho
try {
    $full = (Resolve-Path -LiteralPath $caminho -ErrorAction Stop).Path
    if ($full.StartsWith($raiz, [System.StringComparison]::OrdinalIgnoreCase)) {
        $rel = $full.Substring($raiz.Length).TrimStart('\', '/')
    }
} catch {}
$rel = $rel -replace '\\', '/'

$sessao = if ($payload.session_id) { ([string]$payload.session_id).Substring(0, [Math]::Min(8, ([string]$payload.session_id).Length)) } else { '--------' }
$quando = Get-Date -Format 'yyyy-MM-dd HH:mm:ss'
$acao   = if ($payload.tool_name) { $payload.tool_name } else { '?' }

$destino = Join-Path $raiz 'Relatorios\audit.log'
$pasta   = Split-Path -Parent $destino
if (-not (Test-Path -LiteralPath $pasta)) { New-Item -ItemType Directory -Path $pasta -Force | Out-Null }

$linha = "{0} | {1,-6} | {2} | sess {3}" -f $quando, $acao, $rel, $sessao
Add-Content -LiteralPath $destino -Value $linha -Encoding UTF8

exit 0
