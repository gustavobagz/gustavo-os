---
name: hierarquia-fontes-repo-painel
description: O repo gustavo-os é a fonte da verdade; o painel jurídico H2 é camada operacional complementar. Onde divergirem, o repo prevalece
metadata:
  type: project
---

Decidido por Gustavo em 2026-07-22: **o repositório `gustavo-os` é a fonte da
verdade**. O painel jurídico (paineljuridicoh2.vercel.app) **complementa**, não
substitui. Onde os dois divergirem, **o repo prevalece** e o painel é atualizado
a partir dele — nunca o inverso.

**Why:** os dois disputavam a primazia. `H2/Operacoes/contratos.md` chegou a
declarar o painel como "fonte primária", e o inventário de contratos foi
*derivado* do `data/seed.json` do painel em 2026-07-17. A varredura documental de
2026-07-22 provou que o repo tem mais informação: o painel não continha o
contrato **MHC Salvador (IGH nº 13607, R$ 1.596.654/mês — o maior do acervo)**,
nem Mirassol, nem a operação de **Manaus sem contrato**, e trazia os contratos S3
errados (286/2025 = UPA Pinhais e 287/2025 = HMNSLP, ambos com a S.A. como
contratada — só legíveis após OCR). Ambiguidade de fonte foi a causa de boa parte
das divergências encontradas.

**Divisão de domínio (para não voltar a sobrepor):**
- **Repo é dono de:** casos e prazos do escritório, clientes, honorários,
  inventário de contratos e licitações H2, governança/pendências, memória e
  decisões estratégicas.
- **Painel é dono de:** cálculo de SLA das demandas (`data_entrada` + 2/5/10 dias
  úteis conforme risco — ver [[project-h2-painel-juridico]]), workflow de
  demandas, trilha de auditoria e a visão de acompanhamento para diretoria/pares.

**How to apply:** ao encontrar divergência entre painel e registros do repo,
corrigir o painel, não o repo. Ao atualizar contratos, atualizar aqui primeiro.
**Pendente:** regerar o `seed.json` do painel a partir de
`H2/Operacoes/contratos.md`.

**Bônus de segurança:** o painel está **sem autenticação por decisão de Gustavo**
e seu `GET /api/snapshot` devolve contratos, CNPJs e valores a quem tiver a URL
(ver [[project-h2-painel-juridico]]). Com o repo privado como fonte-mestra, o
dado sensível passa a viver no lugar fechado e o painel exibe uma visão derivada
— o que reforça a escolha.
