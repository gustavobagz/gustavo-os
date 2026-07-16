# Fechamento semanal — executado pelo Agendador de Tarefas (sexta 16:00)
# Roda o Claude Code em modo headless na pasta do OS. A skill /fechamento-semanal
# grava o snapshot em Relatorios\AAAA\fechamento-AAAA-MM-DD.md e commita.

$ErrorActionPreference = "Continue"
$os = "C:\Users\Dell\gustavo"
$hoje = Get-Date -Format "yyyy-MM-dd"
$ano = Get-Date -Format "yyyy"
$dir = Join-Path $os "Relatorios\$ano"
if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Force $dir | Out-Null }
$log = Join-Path $os "Relatorios\fechamento-log.md"

Set-Location $os
$claude = "C:\Users\Dell\AppData\Roaming\npm\claude.ps1"
& $claude -p "/fechamento-semanal" --output-format text `
    --permission-mode acceptEdits `
    --allowedTools "Bash(git add:*)" "Bash(git commit:*)" "Bash(git log:*)" "Bash(git status:*)" "Bash(git diff:*)" `
    2>> (Join-Path $os "Relatorios\erros-fechamento.log") |
    Out-File -FilePath $log -Encoding utf8

# Abre o snapshot gerado pela skill (fallback: o log da execução)
$snapshot = Join-Path $dir "fechamento-$hoje.md"
if (Test-Path $snapshot) {
    Start-Process notepad.exe $snapshot
} elseif ((Test-Path $log) -and ((Get-Item $log).Length -gt 0)) {
    Start-Process notepad.exe $log
}
