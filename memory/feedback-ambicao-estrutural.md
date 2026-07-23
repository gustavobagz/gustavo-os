---
name: feedback-ambicao-estrutural
description: "Gustavo quer reformulação estrutural, não maquiagem — ler o modelo de dados antes de propor melhoria de UI"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: df7c27be-9a44-40ef-a5c4-508ec14062c5
---

Quando o Gustavo pede para "deixar mais profissional/melhor", ele **não quer polimento incremental**. Em 12/07/2026, apresentei tipografia, contraste, espaçamento e hierarquia de cards — e a resposta foi: *"to achando essas mudanças básicas ainda, quero q vc reformulasse mais coisas."*

**Why:** Ele já enxerga o produto por dentro (é gestor e dev do próprio painel). Ajuste de CSS é o que ele faria sozinho. O que ele não tem tempo de fazer é o diagnóstico estrutural — descobrir que o produto está organizado errado.

**How to apply:** Antes de propor qualquer melhoria de interface, **ler o modelo de dados** (`types.ts`, os `lib/*.ts`). Foi ali que apareceu a proposta que ele quis: no Painel Jurídico, todas as entidades tinham um campo de "próxima data" e nenhuma linha do tempo; havia chaves estrangeiras (`operacao_id`) que ninguém usava para navegar; e o histórico era gravado e nunca exibido. O diagnóstico bom não veio de olhar a tela — veio de ver a distância entre o que o dado sabia e o que a interface mostrava.

Perguntar cedo **quem abre a tela e para quê** ("trabalho interno, acompanhado por diretoria e pares") — isso decide entre densidade e narrativa. E entregar o diagnóstico pronto em vez de perguntar o que ele acha que está errado: ele pediu a análise, não um questionário.

Ver [[project_h2_painel_juridico]].
