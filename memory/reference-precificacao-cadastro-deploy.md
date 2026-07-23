---
name: cadastro-e-deploy-workflow
description: "Como cadastrar hospitais (seed scripts), fazer deploy e as pegadinhas de ambiente (Neon db push, Git Bash) do Precificação H2"
metadata: 
  node_type: memory
  type: reference
  originSessionId: 892e32d6-0fcf-40af-a25d-b21e84facb23
---

Workflow recorrente do [[precificacao-h2-project]] (rodar da pasta `app-precificacao-h2/`).

**Cadastrar hospital a partir de planilha:** criar `scripts/<nome>.mjs` (PrismaClient direto, idempotente:
`db.proposta.deleteMany({ where: { nomeUnidade } })` antes de `create`). Uma Proposta = hospital;
Escopos = setores; Linhas = especialidades. Convenções acordadas com o usuário:
- **Reproduzir a coluna "Resultado Final"** de cada linha — é a verdade. Os rodapés "Contrato total"
  às vezes divergem (alíquota diferente ou custo extra não lançado nas linhas → vai no campo Custos).
- Imposto **varia por planilha/setor** (10%, 12% ou 15%): escolher o % que reproduz o Resultado Final.
- Coluna "Plantonistas" é **informativa**: `numProfissionais=1`, `qtdUnidades=Quantitativo`
  (Valor total = Quantitativo × Valor Bruto, NÃO multiplica plantonistas); contagem vai na `funcao`.
- Linhas por hora/plantão → unidade PLANTAO (operação × qtd); "DEMANDA"/pacote → PACOTE (operação fixa).
- Linhas "sob demanda"/sem valor → `qtdUnidades=0` (entram como referência, não somam).
Rodar: `node scripts/<nome>.mjs`. Cada script imprime os totais p/ conferência antes de gravar.

**Deploy:** `npx vercel --prod --yes` da pasta `app-precificacao-h2`. Publica em
https://precificacao-valores-h2.vercel.app (banco Neon é o mesmo de dev e prod — cadastro aparece ao vivo).

**Pegadinhas de ambiente (Windows):**
- **`prisma db push` FALHA** contra o pooler do Neon (erro P1001). Para alterar schema: editar
  `schema.prisma`, aplicar a coluna via SQL num script (`db.$executeRawUnsafe('ALTER TABLE "Proposta"
  ADD COLUMN IF NOT EXISTS "x" ... DEFAULT 0')`) e rodar `npx prisma generate`. A conexão do app
  (@prisma/client) funciona; só o `db push` que não.
- **Git Bash** precisa de caminho com barra normal: `cd "/c/Users/Gustavo/Downloads/APP PROPOSTA H2/app-precificacao-h2"`.
  Com `C:\...` o `cd` falha e roda na pasta errada.
