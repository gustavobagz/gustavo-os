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
- `/vigilancia` — **camada de detecção** (criada 2026-07-22). Enquanto o
  `/briefing` mostra o dia a partir do que ESTÁ registrado, a `/vigilancia`
  caça o que DEVERIA estar e não está: vencimentos, paralisia, divergência
  entre fontes e documentos que entraram sem registro. Existe porque uma
  varredura em 2026-07-22 achou ~40 fatos críticos que nenhum registro
  continha — todos por falha de detecção, nenhum por falha de geração.
- `/novo-caso` e `/novo-cliente` — intake (SÓ escritório)
- `/fechamento-semanal` — revisão semanal, uma seção por frente + snapshot + commit
- Skills H2: `proposta-h2-tradicional`, `proposta-h2-editorial`, `cashdoc`
- Skills escritório: `peticao-execucao`, `proposta-honorarios`, `acordo-socios`

### Camada 4 — Automação (TUDO NA NUVEM — roda mesmo com o PC desligado)
O repo está espelhado em **github.com/gustavobagz/gustavo-os** (privado). As
rotinas rodam em claude.ai/code/routines, clonam o repo, gravam os resultados
e fazem push no main. Horários em BRT:

| Rotina | Quando | Id | Faz |
|--------|--------|----|-----|
| Briefing Juridico Diario | seg–sex 06:30 | `trig_01WScY77LR1WLdZUJ5RaCYXK` | Notícias jurídicas BR (WebSearch) → DOCX na pasta "Briefings Juridicos" do Drive + rascunho no Gmail |
| Briefing Operacional Diario | seg–sex 07:00 | `trig_01RH9Mr3HeoZx5BSyYf8wMLo` | Skill `/briefing` (registros + Gmail + Calendar) → `Relatorios/briefings/` + push + rascunho no Gmail |
| Fechamento Semanal | sexta 16:00 | `trig_01LwvmDrAimSaZPfdHxmmned` | Skill `/fechamento-semanal` → snapshot em `Relatorios/AAAA/` + push + rascunho no Gmail |
| **Vigilância Semanal do OS** | segunda 07:20 | `trig_01EKtT45vA5ew5NN7ALuSP57` | Skill `/vigilancia` → vencimentos, paralisia, divergência entre fontes e ingestão do delta → `Relatorios/vigilancia/AAAA-MM-DD.md` + push. Conectores: Google Drive + Gmail |

> ⚠️ **Limite das rotinas na nuvem:** o servidor **h2-mcp é LOCAL** — não existe
> no ambiente cloud. Rotinas não podem usar `mcp__h2__*` (inventario_drive,
> ocr_pdf, dados_societarios). Na nuvem, usar os conectores Google Drive/Gmail
> como substituto parcial. OCR de PDF escaneado só roda localmente.

- Sincronização local: tarefa `GustavoOS-Sync` (logon) roda `scripts/sync-os.ps1`
  (git pull --rebase + push). Em qualquer outro computador: clonar o repo privado
  e criar a mesma tarefa.
- Tarefas locais antigas `GustavoOS-BriefingDiario` e `GustavoOS-FechamentoSemanal`
  ficaram DESATIVADAS no Agendador (reativar só se sair da nuvem, para não duplicar).
- Gerenciar/pausar rotinas: https://claude.ai/code/routines

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
