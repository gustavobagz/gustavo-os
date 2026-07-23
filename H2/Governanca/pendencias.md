---
tags: [h2, governanca, societario, registro]
tipo: registro
frente: H2
---

# Governança H2 — Pendências do Pilar Jurídico

> ⬅️ [[00-Mapa-H2|🩺 H2]] · [[00-Home|🏠 Home]] — [[contratos|Contratos]] · [[sistemas|Sistemas]] · [[dados-cadastrais|Dados cadastrais]] · [[casos-disciplinares|Disciplinares]]

> **Como usar (Claude):** frentes do roadmap de 90 dias (decidido em 2026-05-05) e
> pendências de governança. O `/briefing` mostra itens da faixa em curso; o
> `/fechamento-semanal` cobra andamento.
> Casos disciplinares/regulatórios: ver `H2/Governanca/casos-disciplinares.md`.
> Dados cadastrais das empresas: ver `H2/Governanca/dados-cadastrais.md`.

## Estrutura societária
- S.A. (holding/operação) + LTDA1 + LTDA2 (em constituição — sem detalhes no
  histórico; confirmar escopo com Guilherme/SDBM)
- H2 S.A. com **1.600+ médicos-acionistas**
- Filiais ativas: Barueri/SP e Pinhais/PR · Em formalização: Araucária/PR e Salvador/BA
- Marca registrada no INPI · 6 CLTs
- Assessoria externa: SDBM / Gabriela Jardim · D&O: Sompo/Wiz (Jacqueline Gorgati)

## Gaps prioritários

| Frente | Prioridade | Status | Próximo passo |
|--------|-----------|--------|---------------|
| LGPD (adequação) | Alta | em coordenação com SDBM | definir escopo do diagnóstico |
| Código de Conduta | Alta | pendente | minuta-base |
| Mapeamento de contencioso | Alta | pendente | levantamento de passivo |
| Livros societários | Alta | **Reconstrução concluída em 2026-07-23**: 498 dos 533 CPF/CNPJ pendentes resolvidos (22 rodadas de busca individual); os 2 CPFs com dígito inválido (Jucelio Lima Martins, Phellipe Di Monaco Lima) corrigidos e validados; duplicidade RV Medcare resolvida (rodada 20). **Livro de Registro de Ações Nominativas fechado** com 2.197 acionistas / 22.820 ações em `H2/Governanca/2026-07-23-LIVRO-REGISTRO-ACOES-NOMINATIVAS-H2SA.xlsx`, com Termo de Abertura/Encerramento redigidos (`2026-07-23-TERMO-ABERTURA...docx` / `...ENCERRAMENTO...docx`) e Livro de Transferência de Ações Nominativas montado em `2026-07-23-LIVRO-TRANSFERENCIA-ACOES-NOMINATIVAS-H2SA.xlsx` (parcial — ver ressalva abaixo). 35 pendentes remanescentes isolados em `2026-07-23-PENDENTES-35-livro-acionistas.xlsx`. Detalhe completo: `H2/Governanca/livro-acionistas.md`, Rodada 23 | **Gustavo: (1) confirmar nome completo + CRC do contador (referência: Wellington, MedFiscal) e colher as 2 assinaturas (Guilherme + contador) para efetivamente fechar o livro; (2) CPF certo de Marta de Pinho Alcântara, Ianara Janaina de Araujo Tavares Xavier, Caroline Urzedo Severino, Kelly Vieira Prates, Julia Ceconello Coelho, Andrea dos Santos Carvalho, Leonardo Furno Petraglia (não tratado na rodada 23); (3) decidir se/quando retomar busca dos 35 pendentes remanescentes** |
| **Levantamento de Termos de Transferência/Cessão não catalogados** | Alta | Achado em 2026-07-23: 5 Termos de Transferência/Cessão localizados incidentalmente no Drive têm numeração sequencial nº 240, 577, 2972, 3011, 3075 — indicando que a H2 S.A. já emitiu ~3.075 termos, dos quais o Livro de Transferência do OS cataloga apenas 5. Há aparentemente ~2.400 termos emitidos entre jul/2024 (nº 577) e mai/2026 (nº 2972) sem registro neste governança | **Gustavo: avaliar levantamento completo (varredura do Drive por "TERMO DE TRANSFERÊNCIA"/"TERMO DE CESSÃO", extração cedente/cessionário/data/ações, numeração e reconciliação) antes de tratar o Livro de Transferência como completo** |
| Exposição CARF | Média | análise em andamento — Acórdão 2201-012.484 | memorando BVA em revisão pela Confirp e Amaral e Puga |
| NR-1 (risco psicossocial) | Alta | **vencido desde 2026-05-26** | regularizar compliance |

## Estatuto da H2 S.A. — dispositivos-chave (h2-mcp, 2026-07-22)

- S.A. de **capital fechado** sob Lei 6.404/76.
- **Arts. 30, §§ 1º e 2º — distribuição DESPROPORCIONAL de dividendos** prevista
  expressamente. ⚠️ É o dispositivo que o CARF ataca: dividendo desproporcional
  correlacionado a produção médica = remuneração disfarçada.
- **Arts. 13 e 16 — instrumentos bancários exigem assinatura CONJUNTA** de Jair
  (Diretor Presidente) + Guilherme (Diretor Financeiro). Na prática Guilherme
  assina PIX/TED sozinho por procuração bancária. ⚠️ Conferir se a procuração
  tem lastro societário — senão é achado de auditoria.
- **AGE de 12/11/2024** aprovou aumento de capital para **R$ 500.000,00**.
  ⚠️ **A deliberação NÃO foi refletida na contabilidade**: o balanço de
  31/12/2024 ainda registra capital subscrito de R$ 10.000 (R$ 9.000 a
  integralizar). Regularizar — é vulnerabilidade direta em habilitação
  econômico-financeira, sobretudo porque a S.A. figura como contratada em
  contratos de ~R$ 1,33 mi/mês (S3 286 e 287/2025).
- ⚠️ **Erro material na 15ª alteração contratual REGISTRADA**: linha "TOTAL"
  diz 100.900 quotas / R$ 100.000,00 quando a soma é 1.000.000 / R$ 1.000.000,00.
  Retificar — várias propostas declaram capital ≥10% do valor do edital.

## Riscos fiscais adicionais (h2-mcp, 2026-07-22)

| Risco | Descrição | Urgência |
|-------|-----------|----------|
| **LC 224/2025** | Acréscimo de 10% nas bases de presunção do Lucro Presumido para receita acima de R$ 5 mi/ano: IRPJ 8% → 8,8%, CSLL 12% → 13,2% sobre o excedente. Com ~R$ 104 mi de faturamento do grupo, é material | Média-Alta |
| Solução em estudo | Criação de **CNPJs regionais** (Nordeste, Centro-Oeste) mantendo receita individual abaixo do limite — **BVA deve avaliar substância econômica** antes | — |
| **Equiparação hospitalar (dimensionada)** | DRE 2024 da Ltda: IRPJ R$ 993.202,47 + CSLL R$ 549.289,33 batem com presunção 8%/12% sobre R$ 50,86 mi. Reclassificação para 32% levaria o par de ~R$ 1,54 mi para **~R$ 5,7 mi só em 2024** | Alta |
| Assinatura digitalizada (Anamnese) | Fac-símile vinculado ao login em prontuários. Lei 14.063/2020 (assinatura eletrônica simples) valida **desde que haja log de auditoria** | Baixa |

## Compliance — achados de 2026-07-22

- 🔴 **Exercício ilegal da medicina já consumado**: comunicado de 2026-01-09
  registra **acadêmicos sozinhos em consultório** após abandono de plantão
  (oftalmologia). Evento consumado, não hipótese.
- 🔴 **Sinistro sem cobertura**: evento adverso grave no **HRJL em 2026-06-30**
  (fio-guia perdido intravascular, Dr. Marcus Vinicius T. Cruz), notificado pela
  SBCD. É exatamente o risco de D&O + RC Médica descobertos, travado pelo
  balanço 2025 atrasado na Rissi.
- ⏰ **UPA Putim — prazo regulatório**: Ofício 0004/2026 compromete a H2 a **100%
  dos plantões pediátricos com RQE até 2026-09-30** (VISA São José dos Campos,
  Notificação 487426). Evolução 43% → 79% (jan–jun): faltam 21 p.p.
- **Certidões vencidas:** CRF/FGTS (2026-05-16) · CNDT · RT de Pediatria da Dra.
  Carla Amaral Vieira (2026-07-02). CRM PJ vence 2026-08-29.
- **6ª Alteração da Human e Health não registrada** — DARE JUCEG de R$ 356,00
  venceu em 2026-07-20.
- ⚠️ **Anexos V–X gerados em 2026-07-20 têm defeitos**: Anexo VI nomeia a SBCD em
  vez do HMTJ; Anexo IX ficou com `[CONTRATO DE GESTÃO A CONFIRMAR]` e
  `[MUNICÍPIO A CONFIRMAR]` em branco; em **todos**, o campo "RG" foi preenchido
  com o CPF. Corrigir e reenviar se já protocolados.

## Concentração e crédito (2026-07-22)

- **SBCD ≈ 50% do faturamento mensal** — concentração de receita.
- **IGH R$ 2,92 mi + Instituto Gennesis R$ 3,25 mi = 79% dos recebíveis de 2024.**
  ⚠️ Gennesis e Instituto Brasileiro de Gestão Compartilhada **não estão em nenhum
  registro do OS**.
- **~R$ 3,0 mi brutos em notas fiscais emitidas sem baixa** (planilha `VALORES EM ABERTO`).
- Faturamento do grupo 2025 ≈ **R$ 104 mi** (Ltda R$ 86,4 mi + S.A. R$ 17,6 mi), +70% sobre 2024.
- **Securitização Britain Securities**: modalidade "com responsável", **Jair como
  devedor solidário**, deságio 8,83%, reembolso em 48h com multa de 10%.
  ⚠️ Conflita com a **vedação expressa a factoring** no contrato SBCD/Picos.
  Parecer já recomendou não assinar no caso IGH.

## Filiais — divergência a resolver (2026-07-22)

O registro atual diz "filiais ativas Barueri/SP e Pinhais/PR; em formalização
Araucária/PR e Salvador/BA". A documentação societária da **Ltda** mostra outra
coisa: **Iturama/MG, Porto Seguro/BA, Teresina/PI, Barueri/SP e Picos/PI** — sem
Pinhais/PR, Araucária/PR ou Salvador/BA. Além disso, a AGE de 2025-09-17 aprovou
filial em **Pinhais/PR**, mas o CNPJ filial 0002-45 consta em **Barueri/SP**.
Conferir no cartão CNPJ de cada filial antes de usar em qualquer habilitação.

## Pendências societárias abertas

| Item | Status | Próximo passo |
|------|--------|---------------|
| Termo de Adesão H2 S.A. | em elaboração (não assinado) | finalizar com SDBM |
| Acordo de Acionistas H2 S.A. | em revisão | concluir revisão |
| AGE / Estatuto Social H2 S.A. | revisões com Guilherme (regime simplificado de S.A., autorização PIX, reconciliação de filiais) | **Gustavo: solicitar à contabilidade e enviar Estatuto atualizado ao Guilherme** |
| AGO + "governance wave 2" | combinado com SDBM | acompanhar |
| Filiais Araucária/PR e Salvador/BA | formalização em curso | concluir |
| D&O (Sompo/Wiz — Jacqueline Gorgati) | análise pendente do **balanço 2025, atrasado na Rissi Contabilidade** | cobrar Rissi — a mesma pendência trava o RC Profissional Médica |

## Reuniões agendadas

| Data | Assunto | Com | Onde |
|------|---------|-----|------|
| 2026-07-28, 14h | Governança e Compliance | SDBM (Vivian Camargo) | Teams — link no Google Calendar |

## Apurações internas em curso

| Data | Caso | Status | Prazo |
|------|------|--------|-------|
| 2026-07-16 | Apuração — Dr. Vitor Migatão (CRM 223523), UPA Putim/SJC: alegação de ofensa verbal a paciente (André Pereda Santos, atend. 2026-07-15, pront. S 32390, ep. 64004). Notificação emitida: `H2/Notificacoes/2026-07-16-notificacao-dr-vitor-migatao.docx` · **encaminhada ao médico em 2026-07-17** | notificação encaminhada — aguardando manifestação | 24h do recebimento (contar a partir de 2026-07-17) |

## Roadmap 90 dias (3 faixas)
- **Faixa 1 (0–30d):** —
- **Faixa 2 (30–60d):** —
- **Faixa 3 (60–90d):** —

*(Detalhamento por faixa não consta no histórico de conversas — recuperar do deck
apresentado à diretoria em 2026-05.)*
