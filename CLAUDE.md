# CLAUDE.md — Gustavo (núcleo comum)

## Quem sou
Gustavo, advogado (OAB/GO nº 66.404), baseado em Goiânia/GO. Formado em
direito em 2023, passou na OAB no 9º semestre. Originalmente de Anápolis,
mudou-se para Goiânia. Atuo em duas frentes SEPARADAS que convivem na mesma
rotina:

1. **H2 Soluções em Saúde** → contexto em `H2/CLAUDE.md`
2. **Escritório próprio (prática independente)** → contexto em `Escritorio/CLAUDE.md`

## Separação das frentes (regra de ouro)
- Cada frente tem seu CLAUDE.md, seus registros e suas skills. **Nunca
  misturar dados entre elas**: caso do escritório não entra em registro H2,
  contrato H2 não entra em registro do escritório.
- Ao trabalhar num assunto, identificar primeiro a frente e carregar/usar o
  contexto correspondente. Em dúvida sobre a qual frente pertence, perguntar.
- E-mails: ggsoliveira35@gmail.com (escritório/pessoal) ·
  controladoria@h2saude.com.br (H2).

## Framework analítico (aplicar em QUALQUER análise/parecer, nas duas frentes)
Diagnóstico → Premissas explícitas → Movimento Contrário → Risco ponderado →
Impacto → Soluções no plural → Gatilhos de revisão

## Convenções de redação jurídica (SEMPRE aplicar, nas duas frentes)
- Em petições: nunca usar "Excelência" / "Vossa Excelência" nem se dirigir
  pessoalmente ao juiz — sempre endereçar ao Juízo (ex.: "Ao Juízo da [vara/comarca]").
- Nomenclatura das partes:
  - 1ª instância: "requerente" / "requerida" (nunca "autor(a)"/"réu/ré")
  - 2ª instância: "apelante" / "apelada" (forma feminina fixa para a parte
    recorrida, independente do gênero gramatical do nome da parte)

---

## SISTEMA OPERACIONAL (Claude Code OS)

Este repositório (`C:\Users\Dell\gustavo`) é o centro de operações das duas
frentes. Funciona em 4 camadas:

### Camada 1 — Núcleo
Este CLAUDE.md (comum) + `H2/CLAUDE.md` + `Escritorio/CLAUDE.md` + memória
persistente + skills.

### Camada 2 — Registros vivos (fonte da verdade operacional)
Arquivos-registro que as skills leem e escrevem. **Sempre que um dado
operacional surgir em conversa (caso novo, prazo, honorário, contrato H2),
registrar no arquivo correspondente DA FRENTE CERTA — nunca deixar só na
conversa:**

| Frente | Registro | Arquivo |
|--------|----------|---------|
| Escritório | Casos e prazos | `Escritorio/Peticoes/casos.md` |
| Escritório | Clientes | `Escritorio/Clientes/` |
| Escritório | Honorários e propostas | `Escritorio/Financeiro/honorarios.md` |
| H2 | Contratos, licitações e propostas | `H2/Operacoes/contratos.md` |
| H2 | Governança / roadmap 90 dias | `H2/Governanca/pendencias.md` |
| H2 | Sistemas em produção | `H2/Ferramentas/sistemas.md` |
| Comum | Snapshots semanais | `Relatorios/AAAA/` |

Datas nos registros sempre em AAAA-MM-DD. Alterações relevantes → commit.

### Camada 3 — Skills de operação
- `/briefing` — o dia em 30s (registros + Gmail + Calendar), com seções
  separadas por frente. Filtros: `/briefing h2` e `/briefing escritorio`
- `/novo-caso` e `/novo-cliente` — intake (SÓ escritório)
- `/fechamento-semanal` — revisão semanal, uma seção por frente + snapshot + commit
- Skills H2: `proposta-h2-tradicional`, `proposta-h2-editorial`, `cashdoc`
- Skills escritório: `peticao-execucao`, `proposta-honorarios`, `acordo-socios`

### Camada 4 — Automação
- Briefing diário: Agendador de Tarefas do Windows roda
  `scripts/briefing-diario.ps1` (seg–sex 07:00), que executa `claude -p "/briefing"`
  e grava em `Relatorios/briefings/AAAA-MM-DD.md`
- Fechamento semanal: rodar `/fechamento-semanal` (sexta à tarde)

### Estrutura de pastas
```
gustavo/
├── CLAUDE.md                      # este arquivo (núcleo comum)
├── H2/
│   ├── CLAUDE.md                  # contexto da Frente 1
│   ├── Governanca/pendencias.md
│   ├── Operacoes/contratos.md
│   ├── Propostas/
│   └── Ferramentas/sistemas.md
├── Escritorio/
│   ├── CLAUDE.md                  # contexto da Frente 2
│   ├── Clientes/                  # INDEX.md + CL-xxx-*.md
│   ├── Peticoes/casos.md
│   ├── Propostas/
│   └── Financeiro/honorarios.md
├── Relatorios/                    # briefings/ + fechamentos AAAA/
├── scripts/                       # automação (briefing-diario.ps1)
└── .claude/skills/                # 10 skills (produção + operação)
```
