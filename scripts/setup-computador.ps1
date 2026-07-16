# Setup do Claude Code OS em um computador novo (ou reparo no atual).
# Idempotente: pode rodar quantas vezes quiser.
# Uso: com o repo já clonado, rodar:
#   powershell -ExecutionPolicy Bypass -File .\scripts\setup-computador.ps1

$ErrorActionPreference = "Stop"
$os = Split-Path -Parent $PSScriptRoot   # raiz do repo (pai de scripts/)
$sync = Join-Path $os "scripts\sync-os.ps1"

Write-Host "== Claude Code OS — setup em: $os"

# 1) Pré-requisitos
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "ERRO: Git não encontrado. Instale em https://git-scm.com e rode de novo." -ForegroundColor Red
    exit 1
}
if (-not (Get-Command claude -ErrorAction SilentlyContinue)) {
    Write-Host "AVISO: Claude Code não encontrado no PATH. Instale com: npm install -g @anthropic-ai/claude-code" -ForegroundColor Yellow
    Write-Host "       (o sync via git funciona mesmo sem ele; o Claude é para trabalhar no OS)" -ForegroundColor Yellow
}

# 2) Tarefa agendada GustavoOS-Sync (git pull/push no logon)
$action = New-ScheduledTaskAction -Execute "powershell.exe" `
    -Argument "-NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File `"$sync`""
$trigger = New-ScheduledTaskTrigger -AtLogOn -User $env:USERNAME
$settings = New-ScheduledTaskSettingsSet -StartWhenAvailable `
    -ExecutionTimeLimit (New-TimeSpan -Minutes 5) -MultipleInstances IgnoreNew
Register-ScheduledTask -TaskName "GustavoOS-Sync" -Action $action -Trigger $trigger `
    -Settings $settings -Force `
    -Description "Sincroniza o Claude Code OS com o GitHub no logon" | Out-Null
Write-Host "OK: tarefa GustavoOS-Sync registrada (roda a cada logon)"

# 3) Sincroniza agora
& powershell -NoProfile -ExecutionPolicy Bypass -File $sync
Write-Host "OK: sincronizado com o GitHub agora"

Write-Host ""
Write-Host "Pronto. Abra a pasta $os no VS Code e use o Claude normalmente." -ForegroundColor Green
