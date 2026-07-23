---
name: precificacao-h2-project
description: Precificação H2 — plataforma web para criar e controlar precificações de propostas de equipes médicas
metadata: 
  node_type: memory
  type: project
  originSessionId: c90bfec6-12c3-4957-9f43-2ce80aa04068
---

**Precificação H2** — plataforma web (Next.js na Vercel, Postgres/Prisma, Auth.js) para a
H2 Soluções em Saúde criar, calcular e **controlar** precificações de propostas de gestão
de equipes médicas para hospitais. Substitui 51 planilhas Excel inconsistentes.

Nome do app: **Precificação H2** (só isso — não "controlar propostas" nem "blueprint").

Modelo: Proposta (hospital) → Escopo (setor: UTI, Clínica, Pediatria…) → Linha
(especialidade, função, unidade hora/plantão/pacote, qtd, valor unidade, nº profissionais,
imposto% configurável, operação + H2 opcional). Fórmulas verificadas contra as planilhas:
Valor bruto = qtd×valor_un×nº_prof; Imposto = bruto×imp%; **Resultado = bruto−imposto−operação
(NÃO multiplica por nº_prof — já embutido no bruto)**; Margem% = Resultado÷bruto. Imposto
padrão 10% (editável). Rodapé fixo: resultado do contrato + margem%.

Features v1: editor padronizado, dashboard/controle, proposto×executado, catálogo de
especialidades, importação das 51 planilhas (resumo automático + revisão linha-a-linha),
login (email/senha + Google). Fora do v1: PDF pro cliente. Tudo em R$ (pt-BR). Requisito:
fácil de usar (equipe opera).

Spec: `docs/superpowers/specs/2026-07-01-precificacao-h2-design.md`. Ver [[h2-brand-identity]].

**Estado (2026-07-02):** app construído em `app-precificacao-h2/` (Next 16, Prisma 6, banco Neon).
No ar: **https://precificacao-valores-h2.vercel.app** (Vercel, projeto `precificacao-valores-h2`,
conta gustavobagz). GitHub: github.com/gustavobagz/precificacaoevaloresh2 (branch main).
Login admin: ggsoliveira35@gmail.com / senha h2saude2026 (trocável em /config).
Cadastro controlado por código de acesso (env CODIGO_ACESSO = "H2diretoria2026").

Fórmula: Operação multiplica pela Qtd em hora/plantão; em **pacote NÃO multiplica**.
Feito: editor formato planilha (Total Op., zoom), export Word/Excel/PDF, dashboard
analítico (busca/ordenar/filtro/ranking/excluir), importação das 51 (best-effort, "revisar"),
proposto×executado, catálogo especialidades, análise financeira (DRE/margem contrib./viabilidade),
Demonstrativos (DRE consolidada), plataforma (senha/usuários/histórico/cadastro).
Deploy: `vercel --prod` da pasta app; env vars DATABASE_URL/AUTH_SECRET/AUTH_TRUST_HOST/CODIGO_ACESSO.

**Update 2026-07 (sessão 2):** cadastradas 9 unidades reais via seed scripts (Estância, Urucuí,
Valença-HREP, UPA Picos, HRJL, HEMU, HEI, HRCM-Campo Maior, HMC-Cubatão). Novas features:
campo **Meta de margem** (`margemAlvo`) e campo **Custos** (reaproveita `custosFixos`, abatido do
resultado — reflete na Análise); **DRE consolidada exporta Excel+Word+PDF** (`/demonstrativos/{excel,word,imprimir}`);
**export consolidado** de todas as propostas (`/propostas/exportar/{word,imprimir}`); **comparativo
lado a lado** (`/propostas/comparar?a=&b=`); dashboard com cabeçalhos clicáveis (ordenar ↑↓),
cards com ícone/animação/cor por faixa de margem, hover-preview por setor, KPI "abaixo da meta";
**modo claro/escuro** (toggle no Topbar, classe `.dark` no html, persist localStorage);
abas do topo destacadas (`btnNav`). Correção do bug da DRE: páginas agregadoras precisam de
`export const dynamic = "force-dynamic"` + `revalidatePath` nas mutations (senão o Full Route Cache
mostra dados excluídos). Ver [[cadastro-e-deploy-workflow]].
