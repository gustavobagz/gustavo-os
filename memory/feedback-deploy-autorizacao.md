---
name: feedback-deploy-autorizacao
description: Deploy em produção e migração de banco são sempre perguntados antes — a autorização não se estende à próxima entrega
metadata: 
  node_type: memory
  type: feedback
  originSessionId: c2361d6d-22c8-4ab6-939b-01c872893284
---

Gustavo autoriza deploy de produção e migração de banco **caso a caso**. Uma
autorização vale para aquela entrega, não para a seguinte.

**Why:** os projetos dele publicam direto em produção e o banco Neon é único (sem
staging) — ver [[reference_precificacao_h2_infra]]. Um deploy ou migração sem aviso
mexe no que a empresa está usando naquele momento.

**How to apply:** terminar o trabalho, commitar local, mostrar o que mudou (de
preferência com a tela verificada no navegador) e **perguntar** antes de publicar. Ele
responde "sim" rápido; o custo de perguntar é baixo e o de publicar errado não é.
Vale também para migração aditiva: explicar que é aditiva e perguntar mesmo assim.
