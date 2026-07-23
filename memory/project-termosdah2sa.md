---
name: project-termosdah2sa
description: "Gerador de termos de cessão de ações da H2 S.A. — fonte no repo termodeadesaoATUAL, deploy via push na main, público em h2-termos-web.vercel.app"
metadata: 
  node_type: memory
  type: project
  originSessionId: de1b70a7-531b-4f93-a09a-c596767eb53c
---

Projeto Vercel **termosdah2sa** (gera termos de adesão/saída/alteração de ações da H2 S.A. a partir de .xlsx; Vite + tRPC + Drizzle + docx/pdfkit).

- Fonte: `C:\Users\Gustavo\OneDrive\Projetos\termodeadesaoATUAL` → github.com/gustavobagz/termodeadesaoATUAL (código foi recuperado em 16/07/2026 do deploy `dpl_Cy5fULBnhwYtaJJPQRBEYiCuR7wf` via API da Vercel — antes o repo só tinha README)
- Deploy = git push na main (repo conectado ao projeto Vercel); URL pública: **h2-termos-web.vercel.app** (não existe termosdah2sa.vercel.app)
- Alteração PJ→PF: marcador "PJ PARA PF" na célula do nome da planilha inverte cedente/cessionário; sem marcador sai PF→PJ
- 2 testes de PDF falham no Windows por falta de `pdftotext` (Poppler) — pré-existente, não é regressão
- A pasta `Projetos` inteira mora no OneDrive (`C:\Users\Gustavo\OneDrive\Projetos`), não mais em `C:\Users\Gustavo\Projetos`

Ver [[project-geradordetermo]] (app distinto, gera declarações .docx) e [[feedback-deploy-autorizacao]].
