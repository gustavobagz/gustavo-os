---
name: fechamento-semanal
description: Fechamento semanal das duas frentes de Gustavo — varre todos os registros do OS, totaliza honorários, cobra pendências paradas, projeta a semana seguinte e grava um snapshot versionado. Usar quando Gustavo pedir "fechamento", "fechamento da semana", "como foi a semana", ou via rotina agendada de sexta-feira.
---

# /fechamento-semanal — revisão e projeção

## Fluxo

1. **Varrer** todos os registros:
   - `Escritorio/Peticoes/casos.md` — casos ativos, prazos da semana que passou (feitos?) e da próxima
   - `Escritorio/Financeiro/honorarios.md` — recebido na semana, a receber vencido, propostas paradas
   - `H2/Operacoes/contratos.md` — movimentação de contratos/licitações/propostas
   - `H2/Governanca/pendencias.md` — o que andou e o que está parado há mais de 2 semanas
   - `git log --since="7 days ago" --oneline` no repo do OS — o que foi produzido

2. **Gerar o relatório** no formato:

```
# Fechamento — semana de DD/MM a DD/MM

## Números da semana
(recebido, a receber vencido, casos novos, prazos cumpridos/pendentes)

## ⚖️ Escritório — o que andou / o que travou
## 🏥 H2 — o que andou / o que travou

## 🔴 Paradas há 2+ semanas
(itens sem movimento — exigem decisão ou descarte)

## Próxima semana — 3 prioridades
(escolher as 3 maiores alavancas; decidir a ordem, não apresentar menu)
```

3. **Gravar snapshot** em `Relatorios/AAAA/fechamento-AAAA-MM-DD.md` (criar pasta se não existir).

4. **Commit**: `git add -A && git commit -m "fechamento semanal AAAA-MM-DD"`.

## Regras
- As 3 prioridades da próxima semana são decisão minha (Claude), seguindo a preferência
  de Gustavo por receber a ordem já escolhida — justificar cada uma em uma linha.
- Se a semana não teve movimento em uma frente, dizer isso explicitamente em vez de omitir.
