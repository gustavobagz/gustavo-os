---
name: Projeto h2-mcp (servidor MCP local para Claude Desktop)
description: MCP server que dá ao Claude conhecimento institucional da H2 sem briefings repetidos
type: project
originSessionId: 6d0e734b-8c1e-42a9-9bef-31ecc7797d1f
---
Servidor MCP local TypeScript que elimina briefings repetitivos: ao ficar ativo no Claude Desktop, o Claude já conhece a H2 (institucional, jurídico, operacional) via Resources auto-expostos + Tools que consultam Google Drive e arquivos JSON modulares.

**Localização:** `C:\Users\Gustavo\OneDrive\Documentos\claude\MCP\h2-mcp\`

**Decisões arquiteturais tomadas (2026-05-21):**
- Resources + Tools (não só Tools) — identidade/entidades/pessoas vão como Resources auto-expostos
- JSON modular em `data/` (identidade, entidades, pessoas, contratos, casos, riscos, governança, etc.) em vez de um arquivo único
- Inclui tool de escrita `atualizar_caso` para manter `casos.json` vivo
- Templates lidos do Drive, não embutidos no JSON
- Cache em memória para chamadas Drive (10min default, 1h para PDFs de contrato)

**Why:** Gustavo decidiu por essas 4 escolhas após eu sugerir tradeoffs — quer reduzir briefing futuro ao máximo e manter o conhecimento vivo. **How to apply:** ao evoluir o MCP, manter knowledge modular, expor estática como Resources, e priorizar tools que reduzem reexplicação.

**Stack:** TypeScript, @modelcontextprotocol/sdk, googleapis v3 (OAuth2 refresh token), zod, dotenv, pdf-parse.

**Dados sensíveis:** `.env` + `data/casos.json` + `data/contratos.json` no `.gitignore` desde commit 1 (têm CRMs, CNPJs, valores pendentes do MP).
