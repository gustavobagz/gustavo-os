---
name: Claude Desktop config (Microsoft Store install) — caminho sandboxado
description: Onde fica o claude_desktop_config.json no Claude Desktop instalado via Microsoft Store
type: reference
originSessionId: 6d0e734b-8c1e-42a9-9bef-31ecc7797d1f
---
O Gustavo usa **Claude Desktop instalado pela Microsoft Store** (package id `Claude_pzs8sxrjxfjjc`). Apps da Store usam sandbox, então o `claude_desktop_config.json` real fica em:

`C:\Users\Gustavo\AppData\Local\Packages\Claude_pzs8sxrjxfjjc\LocalCache\Roaming\Claude\claude_desktop_config.json`

**NÃO** em `C:\Users\Gustavo\AppData\Roaming\Claude\` (esse path é ignorado pelo install da Store).

Também existe um arquivo paralelo do canal beta em `...\LocalCache\Roaming\Claude-3p\claude_desktop_config.json` — só conta o sem o sufixo `-3p`.

**Como aplicar:** sempre que mexer em MCP servers do Claude Desktop dele, editar o arquivo na pasta sandboxada acima. Preservar a chave `preferences` que já existe (config pessoal dele) e adicionar/atualizar apenas `mcpServers`.
