---
name: briefing
description: Briefing diário de Gustavo — lê os registros do OS (casos, prazos, honorários, contratos H2, pendências de governança), o Gmail e o Google Calendar, e entrega o dia em um painel único. Usar quando Gustavo pedir "briefing", "meu dia", "o que tenho hoje", "resumo do dia", ou toda manhã via rotina agendada.
---

# /briefing — o dia de Gustavo em 30 segundos

## Fontes (ler nesta ordem; se uma falhar, seguir com as demais e avisar no final)

1. **Registros locais** (sempre disponíveis):
   - `Escritorio/Peticoes/casos.md` → prazos com data-limite nos próximos **7 dias** (destacar vencendo hoje/amanhã)
   - `Escritorio/Financeiro/honorarios.md` → parcelas vencidas ou vencendo em 7 dias; propostas em aberto há mais de 7 dias
   - `H2/Operacoes/contratos.md` → vigências vencendo em 30 dias; licitações com sessão nos próximos 7 dias
   - `H2/Governanca/pendencias.md` → itens de prioridade Alta com status "pendente"
2. **Google Calendar** (`list_events` do dia): compromissos de hoje com horário
3. **Gmail** (`search_threads`, últimas 24h, não lidos ou importantes): sinalizar apenas o que exige ação — intimações, prazos, contrapartes, diretoria H2. Ignorar newsletters/notificações automáticas.

## Formato de saída (sempre este, nesta ordem)

```
# Briefing — [dia da semana], DD/MM/AAAA

## ⚠️ Urgente hoje
(prazos vencendo hoje/amanhã, compromissos, e-mails que exigem ação — se nada: "Nada urgente.")

## 📅 Agenda
(compromissos do dia com horário)

## ⚖️ Escritório
(prazos da semana, honorários a cobrar, propostas paradas)

## 🏥 H2
(contratos/licitações, pendências de governança em curso)

## 📬 E-mails que pedem ação
(máx. 5, com uma linha de contexto cada)
```

## Regras
- Máximo de ~30 linhas. Sem introdução nem fecho — direto ao painel.
- Se um registro estiver vazio (tabelas só com "—"), omitir a seção em vez de mostrar tabela vazia.
- Se Gmail/Calendar estiverem indisponíveis (sessão sem MCP autenticado), gerar o briefing só com os registros locais e avisar em uma linha ao final.
- Nunca inventar prazo ou compromisso: só o que está nas fontes.
