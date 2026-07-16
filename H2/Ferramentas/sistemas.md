# Sistemas H2 em Produção (Vercel)

> **Como usar (Claude):** inventário das ferramentas internas mantidas por Gustavo.
> Stack padrão: Next.js / Vercel / Neon / Supabase · Claude API · MCP h2-mcp.

| Sistema | URL | Função | Status |
|---------|-----|--------|--------|
| Painel jurídico | paineljuridicoh2.vercel.app | gestão jurídica H2 | produção |
| Termos de adesão | h2-termos-web.vercel.app | termos médicos | produção |
| Gerador de declarações | geradordedeclaracoes.vercel.app | declarações médicas | produção |
| Gerador de contratos | geradorcontratos-five.vercel.app | contratos médicos | produção |
| Precificador | (precificacao-valores-h2) | precificação de contratos | seeds em scripts/; Contrato 101/2024 Marabá pendente |
| Painel administrativo | — | hub linkando os 4 sistemas | em avaliação/estruturação |

## Pendências técnicas
- Painel administrativo: definir se vai adiante; deve linkar os 4 sistemas de produção
- Precificador: rodar Contrato 101/2024 (Marabá); DATABASE_URL sensível vem vazio
