# Gustavo OS — Claude Code como centro de operações

Sistema operacional pessoal rodando sobre o Claude Code: registros vivos,
skills de operação e rotinas para as duas frentes (H2 Soluções em Saúde +
prática independente).

## Como usar

```
cd C:\Users\Dell\gustavo
claude
```

Todo `claude` rodado nesta pasta carrega o `CLAUDE.md` automaticamente.

## Comandos do dia a dia

| Comando | O que faz |
|---------|-----------|
| `/briefing` | O dia em 30s: prazos, agenda, e-mails, pendências H2 |
| `/novo-caso` | Intake de caso novo (registra tudo de uma vez) |
| `/novo-cliente` | Cadastro de cliente |
| `/fechamento-semanal` | Revisão da semana + 3 prioridades da próxima |
| `/peticao-execucao` | Minuta de cobrança/execução |
| `/proposta-honorarios` | Proposta comercial do escritório |
| `/acordo-socios` | Checklist + minuta de acordo de sócios |
| `/proposta-h2-tradicional` | Proposta H2 operacional (DOCX) |
| `/proposta-h2-editorial` | Proposta H2 institucional (PDF premium) |
| `/cashdoc` | Mensagem de antecipação de plantões |

## Onde está cada coisa

Ver seção "SISTEMA OPERACIONAL" no `CLAUDE.md` — registros vivos em
`Escritorio/` e `H2/`, snapshots em `Relatorios/`.

## Automação

`scripts/briefing-diario.ps1` — briefing automático via Agendador de Tarefas
do Windows (seg–sex 07:00). Grava em `Relatorios/briefings/AAAA-MM-DD.md`.

## Pendências de construção

- [ ] Completar `peticao-execucao`, `proposta-honorarios` e `acordo-socios`
      com os modelos reais de Gustavo (hoje têm seção TODO — entregar uma
      peça/proposta real de referência para o Claude absorver)
- [ ] Registrar a tarefa agendada do briefing (requer autorização explícita)
