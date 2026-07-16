# Briefing diário — executado pelo Agendador de Tarefas (seg-sex 07:00)
# Roda o Claude Code em modo headless na pasta do OS e grava o briefing datado.

$ErrorActionPreference = "Continue"
$os = "C:\Users\Dell\gustavo"
$hoje = Get-Date -Format "yyyy-MM-dd"
$dir = Join-Path $os "Relatorios\briefings"
if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Force $dir | Out-Null }
$saida = Join-Path $dir "$hoje.md"

Set-Location $os
$claude = "C:\Users\Dell\AppData\Roaming\npm\claude.ps1"
& $claude -p "/briefing" --output-format text 2>> (Join-Path $dir "erros.log") |
    Out-File -FilePath $saida -Encoding utf8

# Abre o briefing no app padrão de .md se gerou conteúdo
if ((Test-Path $saida) -and ((Get-Item $saida).Length -gt 0)) {
    Start-Process notepad.exe $saida
}
