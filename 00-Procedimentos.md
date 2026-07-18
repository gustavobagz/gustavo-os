---
aliases: [Procedimentos]
tags: [moc, procedimentos, os]
tipo: mapa
atualizado: 2026-07-17
---

# 🧭 Procedimentos & Skills do OS

> Como o sistema opera. As skills são comandos `/nome` no Claude Code (a pasta
> `.claude/` não aparece no Obsidian, então aqui elas ficam **descritas**, não linkadas).
> Voltar ao [[00-Home\|Home]].

## Arquitetura em 4 camadas
1. **Núcleo** — [[CLAUDE]] + [[H2/CLAUDE\|CLAUDE H2]] + [[Escritorio/CLAUDE\|CLAUDE Escritório]] + memória + skills
2. **Registros vivos** (fonte da verdade) — [[casos]], [[INDEX]], [[honorarios]], [[contratos]], [[pendencias]], [[sistemas]]
3. **Skills de operação** — ver abaixo
4. **Automação na nuvem** — rotinas que rodam com o PC desligado (ver abaixo)

## Skills — operação (as duas frentes)
| Comando | O que faz |
|---------|-----------|
| `/briefing` | O dia em 30s: registros + Gmail + Calendar. Filtros: `/briefing h2`, `/briefing escritorio` |
| `/fechamento-semanal` | Revisão da semana, uma seção por frente + snapshot + commit |

## Skills — Escritório (só [[Mapa-Escritorio\|frente 2]])
| Comando | O que faz |
|---------|-----------|
| `/novo-caso` | Intake de caso novo → grava em [[casos]] + vincula cliente + prazos |
| `/novo-cliente` | Cria arquivo de cliente a partir do template + atualiza [[INDEX]] |
| `peticao-execucao` | Minuta de ação de cobrança/execução (requerente/requerida, ao Juízo) |
| `proposta-honorarios` | Proposta comercial (diagnóstico + escopo + honorários mistos) |
| `acordo-socios` | Checklist + minuta-base de acordo de sócios |

## Skills — H2 (só [[Mapa-H2\|frente 1]])
| Comando | O que faz |
|---------|-----------|
| `proposta-h2-tradicional` | Proposta operacional (Word/DOCX, 9 seções, tabelas). **Normativa** — valores exatos |
| `proposta-h2-editorial` | Proposta institucional (PDF premium, capa faixa verde). **Normativa** |
| `cashdoc` | Mensagem de antecipação de plantões (CashDoc, taxa 6,5%) — gera texto pronto p/ WhatsApp |

## Automação na nuvem (BRT — roda mesmo com o PC desligado)
Rotinas em claude.ai/code/routines · espelho: github.com/gustavobagz/gustavo-os (privado)

| Rotina | Quando | Faz |
|--------|--------|-----|
| Briefing Jurídico Diário | seg–sex 06:30 | Notícias jurídicas BR → DOCX no Drive + rascunho no Gmail |
| Briefing Operacional Diário | seg–sex 07:00 | `/briefing` → `Relatorios/briefings/` + push + rascunho no Gmail |
| Fechamento Semanal | sexta 16:00 | `/fechamento-semanal` → snapshot em `Relatorios/AAAA/` + push + rascunho |

Sincronização local: tarefa `GustavoOS-Sync` (logon) roda `scripts/sync-os.ps1` (pull --rebase + push).

## Framework analítico (QUALQUER análise, as duas frentes)
Diagnóstico → Premissas explícitas → Movimento Contrário → Risco ponderado →
Impacto → Soluções no plural → Gatilhos de revisão

## Convenções de redação jurídica (sempre)
- Endereçar ao **Juízo** — nunca "Excelência"/"Vossa Excelência".
- 1ª instância: **requerente/requerida** · 2ª instância: **apelante/apelada**.
- Escritório: **papel timbrado GO obrigatório** em toda produção documental.

## Regra de ouro
Cada frente tem seus registros e skills. **Nunca misturar dados** entre H2 e escritório.
Todo dado operacional novo (caso, prazo, honorário, contrato) → registrar no arquivo
da frente certa, nunca deixar só na conversa. Datas em AAAA-MM-DD.
