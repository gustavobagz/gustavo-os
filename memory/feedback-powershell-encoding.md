---
name: feedback-powershell-encoding
description: Nunca editar arquivos-fonte UTF-8 via PowerShell Get-Content/Set-Content — corrompe acentuação em pt-BR
metadata: 
  node_type: memory
  type: feedback
  originSessionId: df7c27be-9a44-40ef-a5c4-508ec14062c5
---

Nunca usar PowerShell (`Get-Content -Raw` + `Set-Content`) para editar arquivos de código com texto em português. Usar sempre a ferramenta Edit.

**Why:** O Windows PowerShell 5.1 lê arquivos UTF-8 *sem BOM* usando a codepage ANSI e regrava como UTF-8, corrompendo todo caractere acentuado (`ção` vira `Ã§Ã£o`, `jurídicas` vira `jurÃdicas`). Aconteceu em 12/07/2026 no [[project_h2_painel_juridico]]: corrompi 5 componentes .tsx de uma vez com um loop de replace em PowerShell. Só foi detectado no print da tela; o build passou sem reclamar, porque mojibake é texto válido.

**How to apply:** Para editar qualquer arquivo-fonte, usar Edit (preserva a codificação). Se for inevitável usar .NET no PowerShell, ler/escrever explicitamente com `[System.Text.Encoding]::UTF8` e `New-Object System.Text.UTF8Encoding $false` (sem BOM). Sempre fazer backup antes de edições em lote — foi o backup que salvou aqui. Depois de mexer em arquivos com pt-BR, conferir a tela renderizada, não só o build.
