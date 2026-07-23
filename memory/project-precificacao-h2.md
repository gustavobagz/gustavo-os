---
name: project-precificacao-h2
description: "Plataforma de precificação da H2 (app-precificacao-h2) — onde vive, decisões de modelo e o que ficou pendente"
metadata: 
  node_type: memory
  type: project
  originSessionId: c2361d6d-22c8-4ab6-939b-01c872893284
---

Plataforma web que substitui as planilhas Excel de precificação de contratos de
gestão de equipes médicas da H2. Fica em
`C:\Users\Gustavo\Downloads\APP PROPOSTA H2\app-precificacao-h2` — **não** em
`~\Projetos`, ao contrário dos outros projetos dele.

Next.js 16 (App Router) + Prisma + Neon + Auth.js v5 + Tailwind v4. Infra e deploy
em [[reference_precificacao_h2_infra]].

**Decisões de modelo que não estão óbvias no código:**

- As linhas da planilha são **mensais**. A projeção anual é `×12` puro
  (`lib/contrato.ts`). A margem não muda no ano — é razão, não soma.
- As metas (margem %, faturamento R$, resultado R$) são **mensais**, e `0 = sem meta`.
- As sugestões de meta saem da **mediana** (nunca média — um outlier importado
  distorceria) das precificações que compartilham especialidade. Com menos de 3
  comparáveis, cai para a mediana geral e a UI diz qual é a base.
- O histórico é **recalculado pelo motor de cálculo**, não lido de um total gravado,
  para a sugestão nunca divergir da planilha.
- `lib/contrato.ts` é a fonte única do fechamento: tela, PDF, Word e Excel consomem
  ela. Antes o PDF somava só as linhas e ignorava os custos — papel e tela diziam
  resultados diferentes.

**Pendências conhecidas (2026-07-13):**

- O **dark mode funciona por hack**: `!important` sobrescrevendo `.bg-white` no
  `globals.css`. Cada componente novo com fundo branco pode escapar da regra. O certo
  seria tokens de superfície.
- A tabela **`Especialidade` (valorRefHora/valorRefPlantao) continua sem uso** além do
  autocomplete. Seria a base natural para sugerir valor por linha — ideia levantada
  pelo Gustavo e deixada fora de escopo.
