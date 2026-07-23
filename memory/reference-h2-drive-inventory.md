---
name: Inventário do Drive H2 (gerado pelo h2-mcp)
description: Como o h2-mcp indexa e classifica os 500 arquivos do Drive H2, como reindexar
type: reference
originSessionId: 6d0e734b-8c1e-42a9-9bef-31ecc7797d1f
---
**Tool MCP:** `inventario_drive` — consulta `data/drive_index_completo.json` (~500 arquivos do Drive raiz da H2).

**Como o índice é construído:**
- Script: `scripts/build-drive-index.ts` (roda offline, hits Drive API com SA)
- Walker recursivo até max-depth=10
- Resolve shortcuts (`application/vnd.google-apps.shortcut`) seguindo o target
- Classifica cada arquivo por filename via regex (~24 classes ordenadas por especificidade)

**Reindex:** `npm run reindex` no diretório `h2-mcp/`. Leva ~3-4min. Substitui `data/drive_index_completo.json` (está no .gitignore).

**Classes disponíveis (em ordem de freq):** contrato_principal (89), aditivo (67), termo_transferencia_acoes (56), nota_fiscal (56), documento_juridico_emp (55), doc_pessoal_socio (54), atestado_capacidade (19), folha_pagamento (17), outro (16), estatuto_societario, distrato, balanco_financeiro, notificacao, manual_politica, ata, relatorio_parecer, proposta, imposto_renda, anexo_assinatura, livro_corporativo, logo_marca, apresentacao, escala_plantao, declaracao.

**Estrutura do Drive H2 (importante):**
- Pasta raiz: H2_ROOT (id `1qgBzv3JKB18MrgdiDx-KTm-o1wLXGcOj`)
- Nível 1 (campo `contratante` no índice): pastas de seção como `CONTRATOS`, `H2 SOLUCOES EM SAUDE S.A.`, `Notas Fiscais Emitidas`, `ATESTADOS DE CAPACIDADE TÉCNICA - H2`, etc.
- Nível 2 (campo `hospital_objeto`): para `CONTRATOS/`, é o nome do **contratante real** (SBCD, IGH, HMTJ, S3, IDEAS, ALSF, "CONTRATOS H2" = meta-pasta)
- Nível 3+ (`subpasta`): hospital específico ou subprojeto

**Why:** a pasta `CONTRATOS` é uma seção, não um contratante. Os contratantes reais estão no nível 2. A tool busca filtro `contratante` em todos os níveis para resolver isso. **How to apply:** ao perguntar sobre "HMTJ", "SBCD", "IGH" — chamar `inventario_drive` com `contratante` (ele busca cross-níveis). Para STATUS de negócio (ativo/prospecção), usar `listar_contratos` (data/contratos.json hardcoded).

**Filtros úteis:**
- `{ formato: "resumo" }` — totais gerais
- `{ formato: "arquivos", classe: "aditivo", contratante: "HMTJ" }` — 25 aditivos do HMTJ
- `{ formato: "arquivos", busca: "9-12582" }` — busca por número de processo
- `{ classe: "atestado_capacidade" }` — todos os atestados (19)
