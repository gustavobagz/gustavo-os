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
| C-004 | Auris Ltda. | execução | Juizados Especiais Cíveis de Anápolis/GO (3º JEC: Gracielle; 1º JEC: Ronilda) | 5915324-96.2025.8.09.0007 (× Gracielle Aparecida da Silva Moura Lemos) · 5414689-41.2026.8.09.0007 (× Ronilda Lemes) | Gracielle: R$ 48.059,94 (base 07/04/2026; − R$ 1.758,53 levantados) | Gracielle: acordo homologado descumprido (mov. 24) → cumprimento de sentença; alvará R$ 1.761,12 levantado (mov. 56); juíza intimou exequente p/ indicar bens sob pena de extinção (mov. 58, 13/07); manifestação SISBAJUD teimosinha + subsidiário (suspensão art. 921, III / extinção com ressalva do crédito e reingresso pelo acordo) gerada 2026-07-17. Ronilda: dados bancários informados p/ alvará (2026-07-16) | ativo |
| C-005 | Locador/locatário — imóvel Jardim do Campo (SP) | consumidor/locação | SP | não registrado | não registrado | Disputa de locação residencial | ativo |
| C-006 | Brasil Sucatas (irmão de Ana Laura) | cobrança | não registrado | não registrado | não registrado | Desistência por ilegitimidade — refile pelo irmão de Ana Laura | a reprotocolar |
| C-007 | Cliente do nicho vestibular | vestibular | não registrado | não registrado | R$ 2.000 (ticket padrão) | 1 caso já ganho; nicho validado e escalável (sazonal) | ativo/recorrente |
| C-008 | Brasil Sucatas e Ferro Velho LTDA / Lucas Andrade Gomes (venda Troller OHQ-5267/GO a Solon Pereira Filho + Vinicius Palluan) | contratual (confissão de dívida + transf. de posse) | Anápolis/GO (foro eleito) | extrajudicial | R$ 104.000 (104 parc. semanais de R$ 1.000, 1ª 2026-07-24) | Drafts gerados — credora/cessionária = Brasil Sucatas (CNPJ 46.933.884/0001-38, PIX; sócia-adm. Ana Laura Andrade Gomes). Cadeia Eilton→Brasil Sucatas→compradores em `Escritorio/Peticoes/2026-07-21_troller_*`. Causa: Eilton cede posse p/ quitar dívida c/ Lucas (Lucas anuente/quitante no Doc 1). Chassi confirmado (TTT). Dados completos — pronto p/ render DOCX+PDF e assinatura | ativo — finalizado, aguardando assinatura |

## Prazos

| ID caso | Prazo | Data-limite | Providência | Feito? |
|---------|-------|-------------|-------------|--------|
| C-001 | Ajuste do distrato | não registrado | Complementar cláusulas de execução 4.3 e 4.4 | não |
| C-002 | Contestações (todos os IDPJs) | — | Elaborar e protocolar defesas | **sim — todas apresentadas (última 2026-07-13)** |
| C-002 | Acompanhamento | contínuo | Monitorar impugnações da exequente e decisões dos IDPJs; acompanhar precatória Renata (Frutal/MG, 0010661-41.2026.5.03.0156) | não |
| C-002 | Esclarecer | — | ~~Confirmar nº 0010535-88.2026.5.03.0156 (TRT-3)~~ → confirmado: carta precatória (MG) do cluster; vincular ao processo principal ao acompanhar | **sim (2026-07-16)** |
| C-004 | Manifestação mov. 58 (indicar bens sob pena de extinção) — Gracielle | 2026-07-17 | Protocolar manifestação: SISBAJUD teimosinha (principal) + subsidiário (suspensão art. 921, III, CPC / extinção com ressalva do crédito e reingresso pelo acordo homologado). DOCX+PDF gerados em `Escritorio/Peticoes/2026-07-17_auris_x_gracielle_manifestacao_prosseguimento.*` | **gerada — protocolar hoje** |
| C-006 | Reprotocolo | não registrado | Reajuizar com o irmão de Ana Laura como parte legítima | não |

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
