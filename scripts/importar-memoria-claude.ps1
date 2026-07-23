# Importa (uma vez) toda a memória do Claude espalhada nos vários projetos desta
# máquina para dentro de `memory/` no repo, com nomes sem colisão. Verbatim
# (Copy-Item preserva bytes/encoding). Idempotente: pode rodar de novo sem estrago.
#
# Depois de rodar: revisar `git status`, então commit + push (o sync-os.ps1 já
# passa a manter memory/ <-> pasta viva do Claude sincronizada daqui pra frente).

$ErrorActionPreference = "Stop"
$repo = Split-Path -Parent $PSScriptRoot
$proj = Join-Path $env:USERPROFILE ".claude\projects"
$dst  = Join-Path $repo "memory"
New-Item -ItemType Directory -Force -Path $dst | Out-Null

# origem (relativa a .claude\projects\)  ->  nome de destino em memory\
$map = [ordered]@{
  # --- C--Users-Gustavo (home; memória mais rica) ---
  "C--Users-Gustavo\memory\feedback_ambicao_estrutural.md"    = "feedback-ambicao-estrutural.md"
  "C--Users-Gustavo\memory\feedback_dado_ausente_nao_e_zero.md" = "feedback-dado-ausente-nao-e-zero.md"
  "C--Users-Gustavo\memory\feedback_deploy_autorizacao.md"    = "feedback-deploy-autorizacao.md"
  "C--Users-Gustavo\memory\feedback_execution_style.md"       = "feedback-execution-style.md"
  "C--Users-Gustavo\memory\feedback_powershell_encoding.md"   = "feedback-powershell-encoding.md"
  "C--Users-Gustavo\memory\project_geradordetermo.md"         = "project-geradordetermo.md"
  "C--Users-Gustavo\memory\project_h2_modelo_contratacao.md"  = "project-h2-modelo-contratacao.md"
  "C--Users-Gustavo\memory\project_h2_painel_juridico.md"     = "project-h2-painel-juridico.md"
  "C--Users-Gustavo\memory\project_precificacao_h2.md"        = "project-precificacao-h2.md"
  "C--Users-Gustavo\memory\project_termosdah2sa.md"           = "project-termosdah2sa.md"
  "C--Users-Gustavo\memory\reference_h2_dados.md"             = "reference-h2-dados.md"
  "C--Users-Gustavo\memory\reference_precificacao_h2_infra.md" = "reference-precificacao-h2-infra.md"
  "C--Users-Gustavo\memory\user_hardware.md"                  = "user-hardware.md"
  "C--Users-Gustavo\memory\user_profile.md"                   = "user-profile-h2.md"
  # --- APP PROPOSTA H2 (precificação) ---
  "C--Users-Gustavo-Downloads-APP-PROPOSTA-H2\memory\cadastro-e-deploy-workflow.md" = "reference-precificacao-cadastro-deploy.md"
  "C--Users-Gustavo-Downloads-APP-PROPOSTA-H2\memory\h2-brand-identity.md"          = "reference-h2-brand-identity.md"
  "C--Users-Gustavo-Downloads-APP-PROPOSTA-H2\memory\precificacao-h2-project.md"    = "project-precificacao-h2-app.md"
  # --- h2-administrativo ---
  "C--Users-Gustavo-Downloads-h2-administrativo-vercel\memory\gustavo-perfil.md"    = "user-profile-h2-admin.md"
  "C--Users-Gustavo-Downloads-h2-administrativo-vercel\memory\h2-deploy-workflow.md" = "project-h2-administrativo.md"
  # --- mj-control (app pessoal de vendas) ---
  "C--Users-Gustavo-Downloads-mj-control\memory\project_mj_control.md"              = "project-mj-control.md"
  "C--Users-Gustavo-Downloads-mj-control\memory\user_language.md"                   = "user-language.md"
  # --- Nova pasta (cliente vereadora) ---
  "C--Users-Gustavo-Downloads-Nova-pasta\memory\client_vereadora.md"               = "escritorio-cliente-vereadora.md"
  # --- processo-sorv (escritório: casos + feedbacks de foro) ---
  "C--Users-Gustavo-Downloads-processo-sorv\memory\feedback_monitoria_whatsapp.md" = "feedback-monitoria-whatsapp.md"
  "C--Users-Gustavo-Downloads-processo-sorv\memory\feedback_tutela_urgencia.md"    = "feedback-tutela-urgencia.md"
  "C--Users-Gustavo-Downloads-processo-sorv\memory\project_sorvpan_x_duarte.md"    = "escritorio-caso-sorvpan-x-duarte.md"
  "C--Users-Gustavo-Downloads-processo-sorv\memory\project_villab_x_laiza.md"      = "escritorio-caso-villab-x-laiza.md"
  "C--Users-Gustavo-Downloads-processo-sorv\memory\user_profile.md"                = "user-profile-advocacia.md"
  # --- gaming (pessoal) ---
  "C--Users-Gustavo-OneDrive-Desktop-CLAUDE-git\memory\pc_gaming_setup.md"         = "pessoal-pc-gaming-setup.md"
  # --- claude-MCP (h2-mcp: server, credenciais, inventário Drive) ---
  "C--Users-Gustavo-OneDrive-Documentos-claude-MCP\memory\project_h2_mcp.md"       = "project-h2-mcp.md"
  "C--Users-Gustavo-OneDrive-Documentos-claude-MCP\memory\reference_claude_desktop_config_path.md" = "reference-claude-desktop-config-path.md"
  "C--Users-Gustavo-OneDrive-Documentos-claude-MCP\memory\reference_h2_drive_inventory.md" = "reference-h2-drive-inventory.md"
  "C--Users-Gustavo-OneDrive-Documentos-claude-MCP\memory\reference_h2_mcp_credentials.md" = "reference-h2-mcp-credentials.md"
  "C--Users-Gustavo-OneDrive-Documentos-claude-MCP\memory\user_gustavo.md"         = "user-profile-gerente-juridico.md"
  # --- processo (escritório: HC criminal TRF1) ---
  "C--Users-Gustavo-OneDrive-Documentos-processo\memory\caso_hc_trf1.md"           = "escritorio-caso-hc-trf1.md"
  # --- The-Riftbreaker (perfil advogado) ---
  "C--Users-Gustavo-OneDrive-Documentos-The-Riftbreaker\memory\user_role.md"       = "user-role-advogado-tjgo.md"
}

$ok = 0; $faltando = @()
foreach ($src in $map.Keys) {
  $s = Join-Path $proj $src
  $d = Join-Path $dst  $map[$src]
  if (Test-Path $s) {
    Copy-Item -Path $s -Destination $d -Force
    Write-Host "  OK  $($map[$src])"
    $ok++
  } else {
    Write-Host "  --  FALTA (origem nao encontrada): $src" -ForegroundColor Yellow
    $faltando += $src
  }
}

Write-Host ""
Write-Host "Importados: $ok de $($map.Count)"
if ($faltando.Count -gt 0) {
  Write-Host "Nao encontrados nesta maquina (ignorados):" -ForegroundColor Yellow
  $faltando | ForEach-Object { Write-Host "  $_" }
}
Write-Host ""
Write-Host "Total de .md em memory\ agora: $((Get-ChildItem $dst -Filter *.md).Count)"
Write-Host "Revise com 'git status' e depois faca commit + push."
