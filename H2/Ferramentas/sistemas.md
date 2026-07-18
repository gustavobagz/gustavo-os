---
tags: [h2, sistemas, tecnologia, registro]
tipo: registro
frente: H2
---

# Sistemas H2 em Produção (Vercel)

> ⬅️ [[00-Mapa-H2|🩺 H2]] · [[00-Home|🏠 Home]] — [[contratos|Contratos]] · [[pendencias|Governança]] · [[dados-cadastrais|Dados cadastrais]]

> **Como usar (Claude):** inventário das ferramentas internas mantidas por Gustavo.
> Stack padrão: Next.js / Vercel / Neon / Supabase · Claude API · MCP h2-mcp.
> O painel jurídico é a **fonte primária do pilar jurídico H2** (contratos, SLAs,
> propostas, prazos).

| Sistema | URL | Função | Status |
|---------|-----|--------|--------|
| Painel jurídico | paineljuridicoh2.vercel.app | gestão jurídica H2 — SLAs vencidos, contratos, propostas | produção — ferramenta operacional central |
| Termos de adesão | h2-termos-web.vercel.app | termos médicos | produção |
| Gerador de declarações | geradordedeclaracoes.vercel.app | declarações médicas | produção |
| Gerador de contratos | geradorcontratos-five.vercel.app | contratos médicos | produção |
| Precificador | (precificacao-valores-h2) | dimensionamento/precificação de contratos de plantão | 51+ contratos importados; Contrato 101/2024 Marabá pendente |
| h2-mcp | — | servidor MCP interno | produção |
| Painel administrativo | — | hub operacional (ver requisitos abaixo) | em definição (2026-07) |

## Painel administrativo — decisões e requisitos (2026-07)

**Contexto/dor principal — financeiro:** perda de prazo, falta de recorrência e
de sistemas. Fechamentos mensais hoje em Word. Prazos reais do ciclo: envio ao
hospital até o 5º dia útil → NF até dia 20 → pagamento entre dia 20–25.

**Operação atual:**
- Conferência de execução: Setor de Escalas (Nicole faz o documento); zero glosas nos últimos 6 meses
- Erros recorrentes: documento fora do padrão, competência errada, documento não assinado, cálculo errado
- Ferramentas em uso: Pega Plantão (escalas, exporta XLS), CashDoc (documentação/NF dos médicos), Helena (mensagens automáticas em grupos)

**Decisões tomadas:**
- Painel deve linkar para o painel jurídico e para os geradores de documentos
- Acabamento profissional — não pode parecer "ferramenta interna improvisada"
- Sistema financeiro completo fica para depois — não é o foco agora
- Escalas/Pega Plantão NÃO são o eixo da plataforma
- Requisito de CRM interno: controlar documentos emitidos, destinatários e status de acompanhamento
- Refletir o Checklist de Implantação de Serviços Médicos **H2-CI-001 v2.0** (3 fases, 13 etapas, ~76 itens)

## Pendências técnicas
- Precificador: rodar Contrato 101/2024 (Marabá); DATABASE_URL sensível vem vazio
  (bug sem registro detalhado no histórico — documentar quando resolver)
