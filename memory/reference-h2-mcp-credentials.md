---
name: h2-mcp — credenciais Google (Service Account)
description: Autenticação atual do h2-mcp por Service Account, sem expiração de token
type: reference
originSessionId: 6d0e734b-8c1e-42a9-9bef-31ecc7797d1f
---
**Autenticação ativa:** Service Account (token permanente, não expira).

**SA e-mail:** `h2teste@intense-grove-497101-b9.iam.gserviceaccount.com`
**Projeto GCP:** `intense-grove-497101-b9` (Drive API habilitada)
**Arquivo de chave:** `C:\Users\Gustavo\OneDrive\Documentos\claude\MCP\h2-mcp\.secrets\h2-sa-key.json`

Caminho da chave está configurado em:
- `.env` → `GOOGLE_SERVICE_ACCOUNT_KEY_FILE=./.secrets/h2-sa-key.json`
- `C:\Users\Gustavo\AppData\Roaming\Claude\claude_desktop_config.json` → caminho absoluto

**Compartilhamento Drive:** pasta raiz da H2 (`1qgBzv3JKB18MrgdiDx-KTm-o1wLXGcOj`) compartilhada como "Leitor" com a SA. As 13 subpastas herdam automaticamente (validado: todas 14 pastas listadas com sucesso).

**Fallback OAuth2** disponível mas comentado em `.env` — refresh token expira em ~7 dias, só ativar se SA falhar.

**Helper:** `npm run sa-share <email>` re-lista as pastas com links diretos para compartilhar (útil se entrar uma pasta nova em `src/folders.ts`).

**Why:** SA elimina o problema de refresh token expirando semanalmente em apps OAuth "Em teste" com sensitive scope. **How to apply:** se uma nova pasta H2 for adicionada ao Drive ou ao `src/folders.ts`, compartilhar com `h2teste@intense-grove-497101-b9.iam.gserviceaccount.com` como Leitor antes de usar.
