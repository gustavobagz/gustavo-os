# Sincroniza o OS com o GitHub — executado no logon (e pode ser rodado à mão).
# Puxa o que as rotinas na nuvem commitaram (briefings, fechamentos, registros).

$ErrorActionPreference = "Continue"
$os = "C:\Users\Dell\gustavo"
Set-Location $os

# Envia o que houver de commit local ainda não publicado, depois puxa a nuvem
git pull --rebase origin main 2>&1 | Out-File (Join-Path $os "Relatorios\sync-log.txt") -Encoding utf8
git push origin main 2>&1 | Out-File (Join-Path $os "Relatorios\sync-log.txt") -Append -Encoding utf8
