---
name: feedback-dado-ausente-nao-e-zero
description: "Nunca exibir R$ 0,00 (ou 0) para dado que não foi cadastrado — ausente e zero são fatos diferentes"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: df7c27be-9a44-40ef-a5c4-508ec14062c5
---

Em telas com números — painéis, KPIs, relatórios, propostas — **nunca exibir `R$ 0,00` ou `0` para um dado que simplesmente não foi preenchido.** Mostrar `—` com uma legenda do tipo "valor não cadastrado".

**Why:** Um zero grande e confiante afirma um fato: "a receita em risco é zero". Se o dado apenas não foi cadastrado, a verdade é outra: ela é *desconhecida*. Quem lê não distingue "está tudo bem" de "ninguém preencheu" — e as duas situações exigem reações opostas. Para um diretor abrindo o painel, um zero em destaque lê como sistema quebrado, e custa credibilidade. Gustavo confirmou em 12/07/2026 que os zeros do Painel Jurídico eram dados faltando, não cálculo errado.

**How to apply:** No código, a distinção é `valor == null` (não sabemos → travessão) versus `valor === 0` (sabemos, e é zero → `R$ 0,00`). Ver `components/Valor.tsx` no [[project_h2_painel_juridico]].

**A pegadinha:** um zero legítimo continua sendo zero. Se a provisão é realmente R$ 0,00 porque não há processo classificado como provável, isso é um fato e deve aparecer como `R$ 0,00`. Transformar todo zero em `—` só troca uma mentira por outra. Cuidado com funções de soma que tratam ausente como 0 e devolvem `number` — elas apagam a diferença silenciosamente (foi o caso de `receitaEmRisco` em `lib/calc.ts`; a correção foi devolver `null` quando nenhum item tinha valor).
