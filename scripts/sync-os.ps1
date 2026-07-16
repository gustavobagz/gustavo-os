# Sincroniza o OS com o GitHub — executado no logon (e pode ser rodado à mão).
# Portátil: descobre a raiz do repo a partir da própria localização (pai de scripts/).
# Puxa o que as rotinas na nuvem commitaram e publica commits locais pendentes.

$ErrorActionPreference = "Continue"
$os = Split-Path -Parent $PSScriptRoot
Set-Location $os

git pull --rebase origin main 2>&1 | Out-File (Join-Path $os "Relatorios\sync-log.txt") -Encoding utf8
git push origin main 2>&1 | Out-File (Join-Path $os "Relatorios\sync-log.txt") -Append -Encoding utf8
