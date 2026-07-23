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

## Descobertos em 2026-07-22

| Sistema | URL / local | Função | Status |
|---------|-------------|--------|--------|
| Landing S.A. | sociedadeanonimah2.netlify.app | captação de médicos para o modelo de acionista | produção — não constava no inventário |
| contagem-plantoes | `OneDrive/Projetos/contagem-plantoes` (local) | conta plantões do PEGAPLANTÃO/HEMU via Claude Haiku Vision e gera XLSX (Resumo/Detalhamento/Por Setor/Exceções) | rodou de verdade (saída de 03/2026 + 32 respostas em cache); git local **sem remote**, último commit 2026-05-07; validação end-to-end em aberto |

### h2-mcp — conectado ao Claude Code em 2026-07-22
17 tools: `listar_contratos`, `buscar_contrato`, `dados_societarios`,
`riscos_estruturais`, `status_juridico`, `inventario_drive`, **`ocr_pdf`**,
`buscar_cliente`, `carregar_template`, `salvar_texto_drive`, `criar_pasta_drive`,
`atualizar_caso`, `registrar_valor`, `valores_referencia`, `contexto_h2`,
`documentos_internos`. Config em `.mcp.json` na raiz do repo.
- **Acesso ao Drive testado e VIVO** (Service Account, token permanente) — lê as 14 pastas da raiz H2.
- ⚠️ O `index.ts` usa `dotenv/config`, que lê o `.env` do diretório de trabalho — por isso a chave é passada por variável no `.mcp.json`. Sem isso, as tools de Drive falham em silêncio.
- ⚠️ `data/valores_referencia.json` está **vazio** — a tabela de referência (plantonista/coordenação/horizontal/sobreaviso) nunca foi populada.

## 🔴 Exposição de credenciais (2026-07-22) — rotacionar

1. **Chave de API da Anthropic em texto puro** em `config.txt` do projeto
   `contagem-plantoes`, dentro do **OneDrive** (sincronizada na nuvem).
2. **Chave privada da Service Account do Google** duplicada em
   `h2-mcp/intense-grove-497101-b9-baa670da6f2c.json` (raiz do projeto, no
   OneDrive). A cópia correta é `h2-mcp/.secrets/h2-sa-key.json` — a da raiz é
   redundante e deve ser removida.

Ambas dão acesso a dados reais. Rotacionar as duas e mover para variável de ambiente.

## Pendências técnicas
- Precificador: rodar Contrato 101/2024 (Marabá); DATABASE_URL sensível vem vazio
  (bug sem registro detalhado no histórico — documentar quando resolver)
