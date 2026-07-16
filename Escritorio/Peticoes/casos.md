# Registro de Casos — Prática Independente

> **Como usar (Claude):** toda entrada de caso novo (via `/novo-caso`) adiciona uma linha aqui.
> Prazos ficam na tabela de prazos. O `/briefing` lê este arquivo diariamente e alerta
> prazos a vencer em 7 dias. Datas sempre em formato AAAA-MM-DD.

## Casos ativos

| ID | Cliente | Tipo | Comarca/Vara | Nº processo | Valor da causa | Fase atual | Status |
|----|---------|------|--------------|-------------|----------------|------------|--------|
| C-001 | Lucas Andrade Gomes (Villa B / Garage 1000) | societário (distrato) | não registrado | não registrado | não registrado | Distrato assinado; faltam cláusulas de execução 4.3 e 4.4; confissão de dívida conferida | ativo |
| C-002 | Jair (réu: Magno Alves da Silva) | trabalhista | TRT3 | 0010535-88.2026.5.03.0156 | não registrado | Contestação a elaborar | ativo — prioridade |
| C-003 | Marciel | trabalhista | não registrado | não registrado | não registrado | Análise em andamento | ativo |
| C-004 | Auris Ltda. | execução | não registrado | não registrado | não registrado | Matérias de execução em andamento | ativo |
| C-005 | Locador/locatário — imóvel Jardim do Campo (SP) | consumidor/locação | SP | não registrado | não registrado | Disputa de locação residencial | ativo |
| C-006 | Brasil Sucatas (irmão de Ana Laura) | cobrança | não registrado | não registrado | não registrado | Desistência por ilegitimidade — refile pelo irmão de Ana Laura | a reprotocolar |
| C-007 | Cliente do nicho vestibular | vestibular | não registrado | não registrado | R$ 2.000 (ticket padrão) | 1 caso já ganho; nicho validado e escalável (sazonal) | ativo/recorrente |

## Prazos

| ID caso | Prazo | Data-limite | Providência | Feito? |
|---------|-------|-------------|-------------|--------|
| C-001 | Ajuste do distrato | não registrado | Complementar cláusulas de execução 4.3 e 4.4 | não |
| C-002 | Contestação | **não registrado — confirmar no PJe (prioridade ativa)** | Elaborar e protocolar contestação | não |
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
