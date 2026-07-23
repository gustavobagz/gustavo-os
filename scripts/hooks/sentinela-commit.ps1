# Hook Stop — sentinela de registro nao commitado.
#
# Fecha o vazamento que o proprio CLAUDE.md aponta: "nunca deixar so na conversa".
# Ao fim de cada sessao, se algum arquivo-registro estiver alterado e nao commitado,
# avisa na tela. Nao bloqueia e nao commita nada sozinho — a decisao de versionar
# continua sendo do Gustavo.

$ErrorActionPreference = 'SilentlyContinue'
try { [Console]::OutputEncoding = [System.Text.Encoding]::UTF8 } catch {}

$raiz = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
if (-not $raiz -or -not (Test-Path -LiteralPath (Join-Path $raiz '.git'))) { exit 0 }

$git = (Get-Command git -ErrorAction SilentlyContinue).Source
if (-not $git) { exit 0 }

$saida = & $git -C $raiz status --porcelain -- Escritorio H2 Relatorios 2>$null
if (-not $saida) { exit 0 }

$arquivos = @($saida | ForEach-Object { ($_ -replace '^..\s+', '').Trim('"') } | Where-Object { $_ })
if ($arquivos.Count -eq 0) { exit 0 }

$mostra = ($arquivos | Select-Object -First 8) -join ', '
$resto  = if ($arquivos.Count -gt 8) { " (+$($arquivos.Count - 8))" } else { '' }

$msg = "[OS] {0} registro(s) alterado(s) e NAO commitado(s): {1}{2} — rode 'git add -A; git commit' antes de fechar." -f $arquivos.Count, $mostra, $resto

[Console]::Out.Write((@{ systemMessage = $msg } | ConvertTo-Json -Compress))
exit 0
