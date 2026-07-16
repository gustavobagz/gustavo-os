---
name: peticao-execucao
description: Gera minuta de ação de cobrança/execução de valores inadimplentes, aplicando as convenções de nomenclatura do CLAUDE.md (requerente/requerida, endereçamento ao Juízo). Usar quando Gustavo informar dados de um caso de cobrança/execução (valor, devedor, título executivo).
---

# Skill: Petição de Execução / Cobrança

## Quando usar
Gustavo fornece dados de um caso de cobrança ou execução (nome do devedor,
valor, título executivo, comarca) e pede a minuta da petição inicial.

## Convenções obrigatórias (herdadas do CLAUDE.md)
- Nunca usar "Excelência"/"Vossa Excelência" — sempre endereçar ao Juízo
  (ex.: "Ao Juízo da [vara/comarca]").
- Nomenclatura: "requerente" / "requerida" (1ª instância).

## Fluxo
1. Coletar: nome completo das partes, valor da dívida, natureza do título
   executivo (nota promissória, contrato, cheque, etc.), comarca/vara.
2. Montar a peça com: endereçamento, qualificação das partes, dos fatos,
   do direito (fundamentação do título executivo), do pedido, valor da causa.
3. Salvar em `Escritorio/Peticoes/[nome-do-caso]/`.

## TODO
Preencher com o modelo de petição de execução que Gustavo já usa (estrutura,
fundamentação padrão, cláusulas recorrentes) para a skill reproduzir o estilo
exato dele.
