---
name: Estilo de execução preferido
description: Quando em auto mode, executar agressivamente sem ceremônia de subagentes; consolidar commits lógicos em vez de seguir plano task-a-task rigorosamente para projetos pequenos
type: feedback
originSessionId: 8fcaeedc-2dad-4be9-9bc1-0cd46cf366f2
---
Quando o Gustavo está em "auto mode" ou pede para "publicar" / "rodar" / "manda bala", ele prefere execução direta sobre ceremônia. Para projetos pequenos (single-file SPA, scripts, ferramentas internas), inline execution + commits lógicos consolidados > subagent-driven com 50+ dispatches.

**Why:** Em um redesign single-file estático ele aprovou claramente que eu agrupasse 12 tasks do plano em 3 commits lógicos (app.js, styles.css, index.html). Subagent-driven seria overhead desproporcional para o ganho de isolamento de contexto num projeto desse porte.

**How to apply:** Para projetos pequenos / poucos arquivos / sem testes automatizados, ofereça execução inline como default. Reserve subagent-driven para projetos médios+ com múltiplos módulos independentes onde o ganho de contexto isolado supera o custo. Sempre commits incrementais frequentes mantendo PRs/diffs legíveis.
