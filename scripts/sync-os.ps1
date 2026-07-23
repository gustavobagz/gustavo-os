# Sincroniza o OS com o GitHub — executado no logon (e pode ser rodado à mão).
# Portátil: descobre a raiz do repo a partir da própria localização (pai de scripts/).
# Puxa o que as rotinas na nuvem commitaram e publica commits locais pendentes.
#
# Também espelha a MEMÓRIA do Claude (que vive fora do repo, em
# ~/.claude/projects/<slug>/memory) para dentro de `memory/` no repo, nos dois
# sentidos, para que ela viaje junto com o OS entre computadores.

$ErrorActionPreference = "Continue"
$os = Split-Path -Parent $PSScriptRoot
Set-Location $os
$log = Join-Path $os "Relatorios\sync-log.txt"

# --- Descobre a pasta viva de memória do Claude (slug derivado do path do repo) ---
# Ex.: C:\Users\Gustavo\gustavo-os  ->  c--Users-Gustavo-gustavo-os
$slug = $os -replace '[:\\/]', '-'
$slug = $slug.Substring(0, 1).ToLower() + $slug.Substring(1)
$liveMem = Join-Path $env:USERPROFILE ".claude\projects\$slug\memory"
$repoMem = Join-Path $os "memory"

function Mirror($src, $dst) {
    if (-not (Test-Path $src)) { return }
    New-Item -ItemType Directory -Force -Path $dst | Out-Null
    robocopy $src $dst /MIR /NFL /NDL /NJH /NJS /NP | Out-Null
    # robocopy: código < 8 = sucesso (0=nada, 1=copiou, etc.)
    if ($LASTEXITCODE -ge 8) {
        "[$(Get-Date -Format s)] ERRO robocopy $src -> $dst (exit $LASTEXITCODE)" |
            Out-File $log -Append -Encoding utf8
    }
}

# 1) Captura a memória local (fonte da verdade = pasta viva) para dentro do repo
#    e commita, para que o pull/rebase a seguir preserve as edições locais.
Mirror $liveMem $repoMem
git add memory 2>&1 | Out-Null
if (-not (git diff --cached --quiet 2>$null; $?)) {
    git commit -m "chore: sincroniza memória local do Claude" 2>&1 | Out-File $log -Encoding utf8
}

# 2) Puxa o que as rotinas/outros computadores commitaram e publica os locais.
git pull --rebase origin main 2>&1 | Out-File $log -Append -Encoding utf8
git push origin main 2>&1 | Out-File $log -Append -Encoding utf8

# 3) Reflete o resultado mesclado de volta na pasta viva do Claude.
Mirror $repoMem $liveMem
