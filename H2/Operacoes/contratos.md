---
tags: [h2, contratos, licitacoes, registro]
tipo: registro
frente: H2
---

# Contratos e Operações — H2 Soluções em Saúde

> ⬅️ [[00-Mapa-H2|🩺 H2]] · [[00-Home|🏠 Home]] — [[pendencias|Governança]] · [[sistemas|Sistemas]] · [[dados-cadastrais|Dados cadastrais]] · [[casos-disciplinares|Disciplinares]]

> **Como usar (Claude):** registro central de contratos, licitações e propostas da H2.
> O `/briefing` alerta vigências a vencer em 30 dias e certames com sessão marcada.
>
> **⚖️ Hierarquia de fontes (decidida em 2026-07-22):** este repositório é a
> **FONTE DA VERDADE**. O painel jurídico (paineljuridicoh2.vercel.app) é camada
> **operacional complementar** — vale pelo que ele calcula e exibe (SLA das
> demandas, workflow, trilha de auditoria, visão para a diretoria), não pelo
> cadastro-mestre. **Onde os dois divergirem, o repo prevalece** e o painel deve
> ser atualizado a partir daqui — nunca o contrário.
>
> ⚠️ Inverte o sentido anterior: o inventário abaixo foi originalmente *derivado*
> do `data/seed.json` do painel em 2026-07-17. A varredura de 2026-07-22 mostrou
> que o repo passou a ter mais informação (MHC Salvador, Mirassol, Manaus sem
> contrato, S3 corrigido por OCR) — daí a inversão. **Próximo passo: regerar o
> `seed.json` do painel a partir deste arquivo.**

## Contratos vigentes

> **Inventário sincronizado do painel jurídico (`data/seed.json`) em 2026-07-17.**
> A fonte viva e as vigências contratuais reais continuam sendo o painel
> (paineljuridicoh2.vercel.app). As datas abaixo vêm do documento do contrato
> (heurísticas de importação, não a vigência jurídica exata); aditivos/distratos
> conforme a importação. 28 operações. Status: 🟢 ativo · 🟡 atenção · 🔴 crítico.

| # | Instituto | Unidade/Operação | Data no contrato | Aditivos (último) | Distratos | Status |
|---|-----------|------------------|------------------|-------------------|-----------|--------|
| 1 | ALSF | UTI Mirassol | 14/11/2025 | 0 | 0 | 🟢 |
| 2 | HMTJ | HEAL — Hospital Estadual de Águas Lindas | 17/06/2024 | 4 (17/06/2024) | 0 | 🟢 |
| 3 | HMTJ | HEAPA — Hospital Estadual de Aparecida de Goiânia | 30/09/2025 | 0 | 0 | 🟢 |
| 4 | HMTJ | HEI — Hospital Estadual de Itumbiara | 04/08/2025 | 11 (01/05/2026) | 0 | 🟢 |
| 5 | HMTJ | HEMU — Hospital Estadual da Mulher | 15/02/2025 | 10 (08/01/2026) | 0 | 🟢 |
| 6 | HMTJ | UPA Putim — São José dos Campos | 13/11/2025 | 1 (19/02/2026) | 0 | 🟢 *(apuração Dr. Vitor Migatão em curso)* |
| 7 | IGH | HEMNSL — Mat. Nossa Senhora de Lourdes | 01/04/2024 | 1 (01/04/2025) | 0 | 🟢 *(proposta Pediatria/Neonatologia em aberto)* |
| 8 | IGH | HRDLEM — Reg. Dep. Luiz Eduardo Magalhães | 29/04/2024 | 1 (29/04/2025) | 0 | 🟢 |
| 9 | IGH | **HRE — Hospital Regional de Eunápolis** | 24/02/2025 | 0 | **7** | 🔴 contrato de 24/02/2025 sem aditivo e com 7 distratos — revisar situação |
| 10 | IGH | HSM — Hospital Santa Maria | 05/12/2024 | 2 (27/03/2026) | 0 | 🟢 |
| 11 | IGH | UPA Alfredo Bureau — BA | 01/08/2025 | 0 | 0 | 🟢 |
| 12 | IDEAS | SCROO — Santa Casa de Rondonópolis | 10/11/2024 | 0 | 0 | 🟢 |
| 13 | S3 | HMA — Hospital Municipal de Araucária | 01/02/2026 | 1 (01/02/2026) | 0 | 🟢 |
| 14 | S3 | **UPA Pinhais** | 01/07/2025 | 2 (19/02/2026) | **1** | 🟡 renovação em andamento (1 distrato) |
| 15 | SBCD | HMC — Hospital Municipal de Cubatão | 04/04/2028 | 2 (05/10/2028) | 0 | 🟢 *(objetos: Médico Intensivista Adulto e Hospitalista/Infectologista — início operacional 2024)* |
| 16 | SBCD | HRCM — Hospital Regional de Campo Maior | 27/03/2026 | 0 | 0 | 🟢 *(constava "renovação em andamento" no registro anterior — conferir no painel)* |
| 17 | SBCD | **HRSCF — Hospital Regional Senador Cândido Ferraz (São Raimundo)** | 01/01/2026 | 0 | 0 | 🟢 **vinculado à vitória no Edital 020/2026 (comunicado 15/07/2026)** |
| 18 | SBCD | HREP — Hospital Regional Eustáquio Portela — Valença/PI | 26/09/2026 | 0 | 0 | 🟢 |
| 19 | SBCD | HRJL — Hospital Regional Justino Luz | 28/03/2030 | 0 | 0 | 🟢 |
| 20 | SBCD | HMDAB — Delfina Alves Barbosa — Iturama | 16/02/2029 | 2 (15/02/2024) | 0 | 🟢 |
| 21 | SBCD | HMOC — UISM Mocambinho | 01/07/2028 | 0 | 0 | 🟢 |
| 22 | SBCD | CDP — Central de Exames de Picos | 15/12/2029 | 0 | 0 | 🟢 |
| 23 | SBCD | NHRP — Picos | 14/06/2029 | 1 (01/12/2025) | 0 | 🟢 |
| 24 | SBCD | UPA Picos | 19/04/2029 | 0 | 0 | 🟢 |
| 25 | SBCD | UPA São Raimundo Nonato — PI | 22/08/2025 | 0 | 0 | 🟢 |
| 26 | SBCD | UPA 24H São Vicente de Paulo — Tobias Barreto/SE | 27/04/2026 | 0 | 0 | 🟢 |
| 27 | SBCD | Hospital Municipal São José de Itapuí/SP | 27/02/2026 | 1 (28/04/2026) | 0 | 🟢 |
| 28 | SBCD | ZN São Paulo | 09/09/2024 | 0 | 0 | 🟢 |

> **Fora do inventário do painel:** Contrato **101/2024 — Marabá** — pendente rodar no
> precificador; sem registro no histórico, detalhar via painel jurídico.
>
> **Nota de leitura:** várias unidades SBCD trazem "data no contrato" em 2028–2030 —
> provável extração da vigência/termo final do documento, não do início operacional.
> Confirmar caso a caso no painel antes de usar como data de vigência.

## Licitações em andamento

| Certame | Órgão | Objeto | Sessão/Entrega | Status |
|---------|-------|--------|----------------|--------|
| Edital 020/2026 | SBCD | não registrado | não registrado | em andamento |
| Edital 002/2026 | Uruçuí | não registrado | não registrado | em andamento |
| Edital 021/2026 | HMTJ (HEAPA) | Infectologia clínica + SCIH, 20h/sem, teto R$ 237.000,00/ano | **31/07/2026 23h59** (portal Fluig) | **em análise — RT com RQE em infectologia e certidões fiscais a levantar** |
| — | HEMNSL | Pediatria | prazo próximo (data exata não registrada) | monitorado — **prazo se aproximando** |

## Propostas comerciais H2 em aberto

| Destinatário | Modelo (tradicional/editorial) | Enviada em | Valor | Status |
|--------------|-------------------------------|------------|-------|--------|
| HEMNSL (HMTJ) — Pediatria/Neonatologia | tradicional | 2026-07 | R$ 319.789,00/mês | enviada |
| HRSDA (SBCD) — Clínica/UTI/Especialidades (Concorrência 002/2026) | tradicional | não registrado | R$ 478.050,00/mês | enviada — validade 90 dias (exigência do edital) |
| HEAPA (HMTJ) — Infectologia Clínica e SCIH (Edital 021/2026) | tradicional | 2026-07-22 | R$ 19.750,00/mês (R$ 237.000,00/ano — teto do edital) | gerada — validade 60 dias — **pendente envio via portal Fluig até 31/07/2026 23h59, condicionado a RT com RQE em infectologia + certidões fiscais** |

## Descobertos em 2026-07-22 (varredura documental + OCR)

| Instituto | Unidade/Operação | Valor | Observação |
|-----------|------------------|-------|------------|
| **IGH** | **MHC — Salvador/BA (contrato nº 13607)** | **R$ 1.596.654,00/mês** (GO R$ 893.116 + Neo R$ 703.538) | 🔴 **Maior contrato do acervo e ausente do inventário das 28 operações** |
| ALSF | Hospital São Pedro — UTI Mirassol/SP (10 leitos) | **R$ 139.500/mês** | Vigência desde 2025-10-20 · ⏰ **aviso de renovação até 2026-08-21** · foro Mirassol/SP · ⚠️ **cláusula 13.11 VEDA FACTORING** (conflita com a CashDoc) |
| — | **Manaus — Oftalmologia** (Hosp. João Lúcio + PS Criança Zona Leste) | R$ 611.111,58 faturados em 11/2025 | 🔴 **SEM CONTRATO** — o próprio relatório marca "Contrato Nº: Sem Contrato". Regularizar |

### S3 — corrigido por OCR dos contratos escaneados (2026-07-22)
- **Contratante real:** Associação de Proteção à Maternidade e Infância Ubaíra — "S3 Gestão em Saúde", CNPJ **14.284.483/0001-08**, Ubaíra/BA (repres. Yurgan Targe Passos de Santana).
- **Contratada: H2 Soluções em Saúde S.A.** — ⚠️ contraria o desenho societário, pelo qual a S.A. "não celebra contratos operacionais diretamente".
- **Contrato 286/2025 — UPA Pinhais: R$ 565.810,06/mês** (Aditivo 002/2025, assinado em Pinhais/PR, 01/09/2025, com 2 testemunhas).
- **Contrato 287/2025 — HMNSLP (Hosp. Mun. N. Sra. da Luz): R$ 763.156,56/mês** (Aditivo 001/2025). ⚠️ **Não existe "HMA Araucária"** — a linha 13 da tabela acima precisa ser corrigida.
- Base: Edital 001/2025. Valor-hora R$ 116,41 (plantão 12h = R$ 1.396,92).
- ⚠️ **4º endereço em circulação:** nos dois contratos a S.A. figura em **Av. Dep. Jamel Cecílio 2929, Ed. Brookfield Tower, Sala 13** — não no QS Tower.

### Licitações e propostas descobertas

| Certame/Proposta | Órgão/Unidade | Valor | Status |
|---|---|---|---|
| Edital 022/2026 | HMTJ — HEI, UTI | R$ 5.978.220 | vigência iniciada 2026-06-01 |
| Edital 031/2026 | HMTJ — HEI, Enfermaria Pediátrica | R$ 1.257.967,20 (proposta R$ 97.360/mês) | proposta feita · vigência 2026-07-01 |
| Edital 032/2026 | HMTJ — HEI, Lavanderia | R$ 3.308.918,88 | 🔴 **sem proposta** |
| Edital 039/2025 | HEAL | R$ 966.110/mês ⚠️ (outra versão: R$ 975.609,76) | divergência a resolver |
| Edital 086/2025 | HEMU | R$ 115.797 | — |
| Edital 018 | HEI | R$ 123.495 | 2026-01-22 |
| Concorrência 003/2026 | UPA São Raimundo Nonato | R$ 323.640 | 2026-01-30 |
| Edital 046/2025 | HEAPA | — | ✅ **H2 vencedora** — recursos de GAMA e RPC negados em 2025-09-23 |
| Contrato de Gestão 19/2025 | Itapuí/SP (contratante SBCD) | — | Anexos V–X assinados 2026-04-15 · nº do edital e sessão não constam |
| Proposta | **Hospital Geral do Grajaú — IRSSL** (UTI Adulto, 24 leitos) | a precificar | formulário de 2026-02-09 — **oportunidade não trabalhada** |
| Propostas | IDEAS Neuro R$ 1,32 mi · IDEAS Oftalmo ~R$ 612 mil/mês · INTECS · Health 360 | — | em aberto |

## Alertas operacionais

- ~~Renovar documentação no site da SBCD (contratante) — prazo 2026-07-20~~ **feito (confirmado 2026-07-23)**.
- SLAs de contratos vencidos com **cobranças em atraso** — detalhamento no painel jurídico.
- Compliance **NR-1 (risco psicossocial): vencido desde 2026-05-26**.
