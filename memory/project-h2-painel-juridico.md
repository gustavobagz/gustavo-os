---
name: project-h2-painel-juridico
description: Painel Jurídico H2 — Next.js na Vercel; dados no Blob (rodar local mostra só o seed); agenda temporal + ficha 360º; pendências abertas
metadata: 
  node_type: memory
  type: project
  originSessionId: df7c27be-9a44-40ef-a5c4-508ec14062c5
---

Painel Jurídico da H2: contratos, editais, demandas, obrigações, contencioso e matriz de riscos. **Ferramenta de trabalho interna, acompanhada por diretoria e pares** — densidade e velocidade primeiro, mas nada que envergonhe quando um diretor abre.

## Onde fica

- **Código:** `C:\Users\Gustavo\OneDrive\Documentos\claude\painel contratos\painel-contratos`. Next.js 14.2.5 + Tailwind + Geist. Sob git desde 12/07/2026. `npm test` (vitest), `npm run dev`, deploy com `vercel --prod`.
- **Produção:** `paineljuridicoh2.vercel.app` (projeto Vercel `paineldopilarjuridico`).
- **Spec e plano:** `docs/superpowers/specs/2026-07-12-*.md` e `docs/superpowers/plans/2026-07-12-*.md` no repo.

## A armadilha que engana todo mundo

**Os dados NÃO estão no código — estão no Vercel Blob.** `lib/storage.ts` escolhe o driver por `BLOB_READ_WRITE_TOKEN`: com token → dados reais; sem token → driver `memory` populado pelos `SEED_*` do código. Consequência: **rodar local mostra o painel quase vazio, e isso não é perda de dado.** Já causou susto. Backups do snapshot de produção em `painel contratos\_backups_snapshot\`; para ler o estado real basta um GET em `/api/snapshot`.

## Armadilha de domínio

O prazo real de uma **Demanda** é o **SLA** — `data_entrada` + 2/5/10 dias úteis conforme o `risco`, via `dataVencimentoSLA()` em `lib/demandas.ts`. **Não é `prazo_solicitado`**, que é apenas o que o solicitante pediu. Usar o campo errado faz a agenda mentir sobre o que vence. Foi um bug real, pego antes de chegar à tela.

## Arquitetura (reformulação de 12/07/2026)

O painel deixou de ser oito tabelas CRUD desconectadas. Telas novas: **Hoje** (agenda dos próximos 90 dias unificando as 6 entidades — substituiu a Visão Geral), **Ficha da Operação** (raio-X 360º, seguindo `Edital.operacao_id` e `Demanda.vinculo_operacao_id`), **Trilha** (auditoria), **Ctrl+K** e **tema escuro + densidade**.

Regra de ouro: **toda derivação vive em funções puras em `lib/`** (`agenda.ts`, `ficha.ts`, `trilha.ts`) que recebem `hoje: Date` como parâmetro — nunca `new Date()` interno, senão viram intestáveis. Componentes só consomem.

## O painel está SEM autenticação, por decisão (13/07/2026)

Em 13/07/2026 existiam 3 commits locais não enviados que fechavam a porta: login por senha única (`PAINEL_SENHA`), blob privado e campos de autoria. **Gustavo mandou apagá-los, ciente da consequência** — não foi descuido, foi escolha. Reset para `origin/main`; os commits ficaram na branch local `backup/login-auth` (`8a86ed0`).

Estado que isso deixa: `GET /api/snapshot` em produção devolve contratos, CNPJs, valores de causa e provisões para quem tiver a URL, e o `PUT` aceita escrita (inclusive reset). **Não reintroduzir login sem ele pedir.** Se o assunto voltar, a saída sem fricção é o Vercel Authentication (SSO da conta, zero código), não uma senha na env.

## Pendências abertas (em 12/07/2026)

- **`valorMensal` dos contratos está vazio.** Por isso "receita em risco" mostra `—` ("valor não cadastrado") em vez de um número. Não é bug: o componente `Valor` distingue **dado ausente** (`—`) de **zero legítimo** (`R$ 0,00`), e apagar essa diferença faria o painel afirmar com confiança um número que não tem. É o número que a diretoria vai cobrar.
- **A Trilha nasce vazia** e ganha corpo com o uso. E ela **não sabe "quem"**: o modelo não tem campo de usuário e o painel não tem login. Mostrar autoria completa exigiria mudar o modelo e adicionar autenticação — está fora de escopo e a tela avisa isso explicitamente.
- **Ctrl+K nunca foi testado por um humano** — a automação do Chrome intercepta o atalho antes da página. O handler foi verificado via DOM, mas falta uso real.
- Achados que a agenda expôs no dia do deploy: uma proposta de edital vencendo **naquele dia** e três SLAs estourados havia 9 dias — dados que já existiam e nenhuma tela mostrava.

Ver [[feedback_powershell_encoding]] (nunca editar esses .tsx via PowerShell) e [[feedback_deploy_autorizacao]].
