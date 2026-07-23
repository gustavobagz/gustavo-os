---
tags: [escritorio, casos, registro]
tipo: registro
frente: Escritorio
---

# Registro de Casos — Prática Independente

> ⬅️ [[00-Mapa-Escritorio|⚖️ Escritório]] · [[00-Home|🏠 Home]] — Clientes: [[CL-001-lucas-andrade-gomes|Lucas]] · [[CL-002-jair|Jair]] · [[CL-003-marciel|Marciel]] · [[CL-004-auris-ltda|Auris]] · [[CL-005-irmao-ana-laura-brasil-sucatas|Brasil Sucatas]] · Dossiê [[C-002-jair-instituto-cem|C-002]] · [[honorarios|Honorários]]

> **Como usar (Claude):** toda entrada de caso novo (via `/novo-caso`) adiciona uma linha aqui.
> Prazos ficam na tabela de prazos. O `/briefing` lê este arquivo diariamente e alerta
> prazos a vencer em 7 dias. Datas sempre em formato AAAA-MM-DD.

## Casos ativos

| ID | Cliente | Tipo | Comarca/Vara | Nº processo | Valor da causa | Fase atual | Status |
|----|---------|------|--------------|-------------|----------------|------------|--------|
| C-001 | Lucas Andrade Gomes (Villa B / Garage 1000) | societário (distrato) | não registrado | não registrado | não registrado | Distrato assinado; faltam cláusulas de execução 4.3 e 4.4; confissão de dívida conferida | ativo |
| C-002 | Jair Rodrigues de Oliveira Junior × Instituto CEM | trabalhista (IDPJ — polo passivo) | TRT-18 Goiânia (6ª, 9ª, 11ª, 15ª, 16ª, 17ª, 18ª VTs) | 8 processos ativos + 1 ganho — ver dossiê `C-002-jair-instituto-cem.md` | execuções de R$ 27.601,21 a R$ 45.019,67 | Todas as defesas apresentadas (última: Renata, protocolada 2026-07-13) | ativo — acompanhar |
| C-003 | Marciel | trabalhista | não registrado | não registrado | não registrado | Análise em andamento | ativo |
| C-004 | Auris Ltda. | execução | Juizados Especiais Cíveis de Anápolis/GO (3º JEC: Gracielle; 1º JEC: Ronilda) | **4 processos** · 5915324-96.2025.8.09.0007 (× Gracielle Aparecida da Silva Moura Lemos) · 5414689-41.2026.8.09.0007 (× Ronilda Lemes) · **5942640-84 (× Gislane da Silva Moura)** · **5468605-87 (× Gislane da Silva Moura)** | Gracielle: R$ 48.059,94 (base 07/04/2026; − R$ 1.758,53 levantados) | Gracielle: acordo homologado descumprido (mov. 24) → cumprimento de sentença; alvará R$ 1.761,12 levantado (mov. 56); juíza intimou exequente p/ indicar bens sob pena de extinção (mov. 58, 13/07); manifestação SISBAJUD teimosinha + subsidiário (suspensão art. 921, III / extinção com ressalva do crédito e reingresso pelo acordo) gerada 2026-07-17. Ronilda: dados bancários informados p/ alvará (2026-07-16) | ativo |
| C-005 | Locador/locatário — imóvel Jardim do Campo (SP) | consumidor/locação | SP | não registrado | não registrado | Disputa de locação residencial | ativo |
| C-006 | Brasil Sucatas (irmão de Ana Laura) | cobrança | não registrado | **5397222-4 — Brasil Sucatas e Ferro Velho Ltda (polo ativo) × Ivanildo Rosa da Silva Filho** (consulta 2026-07-22) | não registrado | ⚠️ **Conflito de registro:** consta "a reprotocolar por ilegitimidade", mas há processo ATIVO com a PJ no polo ativo. Confirmar se (a) é o refile já feito com a PJ como parte legítima, ou (b) é ação distinta | **verificar** |
| C-007 | Cliente do nicho vestibular | vestibular | não registrado | não registrado | R$ 2.000 (ticket padrão) | 1 caso já ganho; nicho validado e escalável (sazonal) | ativo/recorrente |
| C-011 | Bruno Meireles Silvestre | cível — obrigação de fazer | não registrado | não registrado | não registrado | não registrado | ativo |
| C-009 | Cliente a identificar | tributário — DIFAL | não registrado | não registrado | R$ 40.000 (proveito estimado) | êxito projetado (10% = R$ 4.000) | ativo |
| C-010 | Instituto Bel Fiore de Estética Avançada Ltda. (**requerida**) × Ana Carla Oliveira da Silva Vilarins | cível — indenização (danos materiais, morais e estéticos) | UPJ das Varas Cíveis de Anápolis/GO | 5075206-17.2025.8.09.0006 | ~R$ 70.000 | ✅ **GANHO em 1º grau — improcedência total do pedido da requerente**. Contrarrazões apresentadas (a parte contrária apelou) → aguardando julgamento em 2ª instância | ativo — em grau de recurso |
| C-008 | Brasil Sucatas e Ferro Velho LTDA / Lucas Andrade Gomes (venda Troller OHQ-5267/GO a Solon Pereira Filho + Vinicius Palluan) | contratual (confissão de dívida + transf. de posse) | Anápolis/GO (foro eleito) | extrajudicial | R$ 104.000 (104 parc. semanais de R$ 1.000, 1ª 2026-07-24) | Drafts gerados — credora/cessionária = Brasil Sucatas (CNPJ 46.933.884/0001-38, PIX; sócia-adm. Ana Laura Andrade Gomes). Cadeia Eilton→Brasil Sucatas→compradores em `Escritorio/Peticoes/2026-07-21_troller_*`. Causa: Eilton cede posse p/ quitar dívida c/ Lucas (Lucas anuente/quitante no Doc 1). Chassi confirmado (TTT). Dados completos — pronto p/ render DOCX+PDF e assinatura | ativo — finalizado, aguardando assinatura |
| C-012 | Júlio Bastos Colle (CPF 111.527.018-43) × massa falida American Labs | IDPJ falimentar | Vara de Falências do DF | 0752794-63.2025.8.07.0016 | não registrado | Contestação pronta (tese completa) — **confirmar protocolo** | ativo |
| C-013 | Júlio Bastos Colle — baixa de RENAJUD | execução (incidente) | 1ª Vara Federal de Anápolis/GO | 0002121-25.2008.4.01.3502 | não registrado | Pedido de baixa de restrição RENAJUD sobre 4 veículos | ativo |
| C-014 | João Pedro Silva Gomes × FAMP — ProUni | mandado de segurança | a definir | **protocolado** (nº a registrar) | não registrado | Indeferimento 2026-04-17 (Edital 2/2026, medicina). Procuração de 2026-04-22 c/ poderes p/ MS com liminar; DOC.01–16. **MS protocolado — confirmado 2026-07-22** | ativo — aguardando apreciação da liminar |
| C-015 | Ferreira Almeida × Bradesco | exceção de pré-executividade | Anápolis/GO | 0076548-32.2017.8.09.0006 | não registrado | Tese: nulidade de aval sem outorga uxória | ativo |
| C-016 | Tercília Pereira da Silva e Paulo Sergio Santana — RHC ao STJ | criminal (RHC) | STJ (via TRF1) | HC 1012203-98.2026.4.01.0000 · originário 0005550-23.2014.4.01.3200 | — | Acórdão denegatório do TRF1 em 2026-04-28. **DECISÃO 2026-07-22: não recorrer.** Minuta elaborada mas não protocolada, por opção. Patrono: Chrystiano Silva Martins (OAB/GO 21.204) — Gustavo fez a análise técnica | **encerrado — sem recurso (decisão)** |
| C-017 | Reinaldo Braga Montalvão Junior | consumidor/leilão | TJDFT | não registrado | não registrado | Toyota Corolla — irregularidade em leilão | confirmar situação |
| C-018 | JF Machado | societário/patrimonial | extrajudicial | — | não registrado | Holding familiar / proteção patrimonial | confirmar situação |
| C-019 | Cliente a identificar — porte de drogas | criminal | não registrado | não registrado | — | Tese STF RE 635.659 (Tema 506) | confirmar situação |

> **Correções de 2026-07-22 (varredura documental):**
> - **C-006** — nº correto é **5397322-04.2026.8.09.0007** (o registro traz "5397222-4"); valor **R$ 43.700,78**. Há impugnação e desistência coexistindo na pasta — confirmar o que foi efetivamente protocolado.
> - **C-010 Bel Fiore** — valor da causa é **R$ 88.300** (constava ~R$ 70.000), o que eleva o êxito de 10% para **~R$ 8.830**.
> - **C-002** — processo não listado: **0000370-61.2025.5.18.0006** (6ª VT Goiânia, reclamante Carla Michelle da Silva Melo). Outros IDPJs sem nome no OS: Joyce Luana (0000549-56.2025.5.18.0018) e Andreza Dayane (0001265-22.2025.5.18.0006). ⚠️ Petição de 2026-03-12 com **protocolo equivocado** (item pertencente a outro processo) — se não houver deferimento, a defesa pode ser tida por não apresentada.
> - ✅ **RESOLVIDO (DataJud/CNJ, 2026-07-22):** **0010535-88.2026.5.03.0156** é mesmo **Carta Precatória Cível** (classe 261, assunto "Atos executórios"), TRT-3, Vara do Trabalho de Frutal, ajuizada em 2026-06-11 — **o registro do OS estava certo e a varredura errou** (não é reclamação autônoma do Magno Alves). Já houve **remessa por devolução ao deprecante em 2026-06-30**, com movimento "Definitivo" na mesma data: a diligência em Frutal terminou e voltou ao juízo deprecante. Acompanhar o desdobramento no processo principal.

## Auris Ltda. — carteira completa (descoberto em 2026-07-22)

> A Auris tem **5 execuções**. Cliente: AURIS LTDA, CNPJ 31.587.078/0001-88,
> sócia-adm. Aliny Carla da Silva Reis (CPF 961.640.001-06).

| Devedora | Processo | Valor | Situação |
|----------|----------|-------|----------|
| Gracielle Ap. da Silva Moura Lemos | 5915324-96.2025.8.09.0007 (3º JEC) | R$ 48.059,94 | cumprimento de sentença; manifestação protocolada 2026-07-21 |
| **Ronilda Lemes** (CPF 369.511.101-15) | 5414689-41.2026.8.09.0007 (1º JEC) | **R$ 64.840,00** (teto JEC) | **Acordo assinado 2026-06-22 (gov.br)**; origem: confissão de dívida de 2026-04-13. SISBAJUD retido até 2026-06-16 fica com a exequente; bloqueio posterior deve ser liberado. **Saldo em parcelas de R$ 4.885,67, todo dia 1º, desde 07/2026, por boleto.** Atraso > 10 dias = vencimento antecipado *(OCR 2026-07-22)* |
| Gislane da Silva Moura | 5942640-84 (4º JEC) · 5468605-87 · 5755643-90.2025 | ⚠️ divergente: R$ 15.330,85 · R$ 43.378 + cumprimento R$ 60.749,36 | **conferir no PROJUDI.** 2 veículos penhorados via RENAJUD (Strada ELS2487, Doblô OMY0B93); avaliação/leilão pedidos 2026-05-11 |
| Joana Darc | 5115024-36.2026.8.09.0007 | R$ 4.922,77 | ⚠️ peça com erro de cabeçalho: usa o nº da Gracielle com o valor da Joana |
| Henia Clezia | não registrado | R$ 7.841,13 | ativo |

## Prazos

| ID caso | Prazo | Data-limite | Providência | Feito? |
|---------|-------|-------------|-------------|--------|
| C-001 | 🔴 **Colher testemunhas na confissão de dívida** | **imediato** | Distrato e confissão **assinados em 2026-07-09** (estavam na pasta "brasil sucatas"). As vias digitalizadas estão **SEM TESTEMUNHAS** → sem as 2 testemunhas não há título executivo (art. 784, III, CPC). Verificar se existe via física assinada | **não** |
| C-001 | ⏰ 1ª parcela da confissão (R$ 341,07 de R$ 6.320) | **2026-07-25** | Acompanhar pagamento; há fiança | não |
| C-001 | Cláusula 4 — crédito contra Laiza | — | A "cláusula 4" pendente é o crédito contra **Laiza Maria Alves Lagares** (CPF 036.896.261-02), R$ 12.901,00, **50% do Lucas** | não |
| C-014 | ~~Protocolar MS ProUni — João Pedro~~ | ~~2026-08-15~~ | Decadência afastada — **MS protocolado (confirmado 2026-07-22)**. Próximo passo: registrar o nº do processo e acompanhar a liminar | **sim (2026-07-22)** |
| C-016 | ~~RHC / EDcl — Tercília e Paulo~~ | — | **Decisão de 2026-07-22: não recorrer.** Item encerrado por opção, não por perda de prazo | **sim — decidido não recorrer** |
| — | 🔴 **OAB — PED 202536815/2025 (Gustavo é 2º Representado)** | verificar | **Revelia decretada em 2026-03-18** (Despacho 452/2026-TED). Defesa prévia em causa própria de 2026-04-28 alega nulidade da notificação (Ofício 3618/2025-TED voltou fechado). **Sem comprovante de protocolo na pasta — confirmar** | **não** |
| C-004 | ⏰ Parcelas do acordo Ronilda (R$ 4.885,67, todo dia 1º) | mensal desde 07/2026 | Conferir pagamento de 01/07 e de 01/08. Atraso > 10 dias = vencimento antecipado do saldo | não |
| Villa B | Protocolar ação × Laiza Lagares | — | Minuta pronta; cálculo atualizado para **R$ 19.236,63** (a inicial traz R$ 18.998,62). Segue **sem protocolo** | não |
| C-001 | Ajuste do distrato | não registrado | Complementar cláusulas de execução 4.3 e 4.4 | não |
| C-002 | Contestações (todos os IDPJs) | — | Elaborar e protocolar defesas | **sim — todas apresentadas (última 2026-07-13)** |
| C-002 | Acompanhamento | contínuo | Monitorar impugnações da exequente e decisões dos IDPJs; acompanhar precatória Renata (Frutal/MG, 0010661-41.2026.5.03.0156) | não |
| C-002 | Esclarecer | — | ~~Confirmar nº 0010535-88.2026.5.03.0156 (TRT-3)~~ → confirmado: carta precatória (MG) do cluster; vincular ao processo principal ao acompanhar | **sim (2026-07-16)** |
| C-004 | Manifestação mov. 58 (indicar bens sob pena de extinção) — Gracielle | 2026-07-17 | Manifestação: SISBAJUD teimosinha (principal) + subsidiário (suspensão art. 921, III, CPC / extinção com ressalva do crédito e reingresso pelo acordo homologado). DOCX+PDF em `Escritorio/Peticoes/2026-07-17_auris_x_gracielle_manifestacao_prosseguimento.*` | **sim — protocolada (confirmado 2026-07-22)** |
| C-004 | Registrar fase das 2 ações contra Gislane da Silva Moura (5942640-84 e 5468605-87) | não registrado | Consultar andamento e registrar fase/valores | não |
| C-006 | Reprotocolo | não registrado | Reajuizar com o irmão de Ana Laura como parte legítima | não |
| C-010 | ~~Apelação própria~~ → **não aplicável** | — | ~~Definir se Bel Fiore é requerente ou requerida~~ → **confirmado 2026-07-22: requerida, e VENCEU** (improcedência total). Quem apelou foi a requerente; contrarrazões já apresentadas | **sim (2026-07-22)** |
| C-010 | 💰 **Cobrar êxito de 10%** do proveito econômico | a definir | Cliente deixou de pagar ~R$ 70.000 → êxito ~R$ 7.000. Confirmar se o contrato prevê cobrança na sentença de 1º grau ou só no trânsito em julgado (recurso pendente) | não |
| C-010 | Acompanhar julgamento da apelação (2ª instância) | contínuo | Nomenclatura: **apelante** (Ana Carla) / **apelada** (Bel Fiore) | não |
| C-009 | Acompanhamento | não registrado | Identificar cliente nominalmente e registrar nº do processo | não |

## Casos encerrados

| ID | Cliente | Tipo | Resultado | Encerrado em |
|----|---------|------|-----------|--------------|
| E-001 | IPOG | liminar | encerrado | não registrado |
| E-002 | Coworking Diniz | não registrado | resolvido | não registrado |
| E-003 | Jair — apartamento Cyrela | consumidor/imobiliário | assinado/resolvido | não registrado |

---
*Convenções: ID no formato `C-001`, `C-002`… Tipo: cobrança, execução, trabalhista,
consumidor, vestibular, societário, eleitoral, regulatório-saúde.*
*Fase pré-judicial: nenhuma notificação/negociação extrajudicial em andamento além do
próprio distrato C-001 (ainda não judicializado).*
