# CLAUDE.md — Gustavo (contexto geral)

## Quem sou
Gustavo, advogado (OAB/GO nº 66.404), baseado em Goiânia/GO. Formado em
direito em 2023, passou na OAB no 9º semestre. Originalmente de Anápolis,
mudou-se para Goiânia. Atuo em duas frentes que convivem na mesma rotina:

1. **H2 Soluções em Saúde** — responsável jurídico-estratégico. Empresa de
   gestão/staffing médico, atuação multi-estadual. Funciono como advisor
   jurídico-negocial-estrutural (três lentes: jurídica, de negócio,
   estrutural). Também atuo como contador-consultor integrado (Lucro
   Presumido, equiparação hospitalar, matérias fiscais correlatas).
2. **Prática independente** — advocacia empresarial com carteira própria,
   fora da H2: empresarial, trabalhista, consumidor, eleitoral e regulatório
   em saúde. Mais de 300 casos ajuizados na prática independente.

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

## FRENTE 1 — H2 Soluções em Saúde

### Frentes ativas
- Governança corporativa: regime societário (S.A./Ltda.), exposição CARF,
  livros societários, articulação com assessoria jurídica externa (SDBM /
  Gabriela Jardim)
- Operações: licitações, contratos, propostas comerciais, compliance,
  documentos institucionais
- Ferramentas internas mantidas por mim (stack: Next.js/Vercel/Neon/Supabase,
  Claude API, MCP server h2-mcp)
- Casos disciplinares/regulatórios pontuais (ex.: eventos em hospitais)

### Sistemas em produção (Vercel)
- Painel jurídico: paineljuridicoh2.vercel.app
- Termos de adesão: h2-termos-web.vercel.app
- Gerador de declarações médicas: geradordedeclaracoes.vercel.app
- Gerador de contratos médicos: geradorcontratos-five.vercel.app
- Painel administrativo (em avaliação/estruturação) — deve linkar pros 4 sistemas acima

### Contatos-chave
- Guilherme Ferreira de Almeida — Diretor (S.A.) / Sócio Administrador (Ltda.)
- Gabriela Jardim (SDBM) — assessoria jurídica externa, governança
- Jacqueline Gorgati — seguro D&O (Sompo/Wiz)

### Skills já existentes
- `proposta-h2-tradicional` — propostas operacionais (Word/DOCX, 9 seções,
  tabelas de dimensionamento)
- `proposta-h2-editorial` — propostas institucionais (PDF premium, capa
  faixa verde)
- `cashdoc` — mensagens de antecipação de plantões médicos (CashDoc Gestão
  de Créditos Ltda., taxa 6,5%)

### Atenção operacional
Já houve caso de skill (proposta-h2-tradicional) voltar a gerar com erros
antigos em outra sessão mesmo após correção — ao ajustar uma skill, validar
se a correção persiste entre sessões/pastas antes de dar como resolvido.

---

## FRENTE 2 — Escritório Próprio (prática independente)

### Escopo e prioridades
- Cobrança / execução de valores inadimplentes — priorizada como porta de
  entrada do "motor empresarial"
- Acordo de sócios
- Proteção patrimonial
- Ações de aprovação em vestibular (nicho já validado, ticket ~R$2.000/ação,
  sazonal — pico em período de vestibulares)

Modelo de receita: misto — diagnóstico como porta de entrada, combinando
projeto pontual com recorrência. Nicho prioritário ainda em definição entre
clínicas/prestadores de saúde, PMEs em crescimento e contencioso trabalhista
recorrente.

### Skills do escritório
- `peticao-execucao` — minuta de ação de cobrança/execução (valor, devedor,
  título executivo), com as convenções de nomenclatura acima
- `proposta-honorarios` — proposta comercial padrão (diagnóstico + escopo +
  honorários mistos)
- `acordo-socios` — checklist e minuta-base para acordos de sócios

---

## SISTEMA OPERACIONAL (Claude Code OS)

Este repositório (`C:\Users\Dell\gustavo`) é o centro de operações das duas
frentes. Funciona em 4 camadas:

### Camada 1 — Núcleo
Este CLAUDE.md + memória persistente + skills.

### Camada 2 — Registros vivos (fonte da verdade operacional)
Arquivos-registro que as skills leem e escrevem. **Sempre que um dado
operacional surgir em conversa (caso novo, prazo, honorário, contrato H2),
registrar no arquivo correspondente — nunca deixar só na conversa:**

| Registro | Arquivo |
|----------|---------|
| Casos e prazos | `Escritorio/Peticoes/casos.md` |
| Clientes (1 arquivo/cliente + índice) | `Escritorio/Clientes/` |
| Honorários e propostas do escritório | `Escritorio/Financeiro/honorarios.md` |
| Contratos, licitações e propostas H2 | `H2/Operacoes/contratos.md` |
| Governança H2 / roadmap 90 dias | `H2/Governanca/pendencias.md` |
| Sistemas H2 em produção | `H2/Ferramentas/sistemas.md` |
| Snapshots semanais | `Relatorios/AAAA/` |

Datas nos registros sempre em AAAA-MM-DD. Alterações relevantes → commit.

### Camada 3 — Skills de operação
- `/briefing` — o dia em 30s (registros + Gmail + Calendar)
- `/novo-caso` — intake de caso (registra caso, prazos, honorários, cliente)
- `/novo-cliente` — cadastro de cliente
- `/fechamento-semanal` — revisão semanal das duas frentes + snapshot + commit
- Skills de produção: `proposta-h2-tradicional`, `proposta-h2-editorial`,
  `cashdoc`, `peticao-execucao`, `proposta-honorarios`, `acordo-socios`

### Camada 4 — Automação
- Briefing diário: Agendador de Tarefas do Windows roda
  `scripts/briefing-diario.ps1` (seg–sex 07:00), que executa `claude -p "/briefing"`
  e grava em `Relatorios/briefings/AAAA-MM-DD.md`
- Fechamento semanal: rodar `/fechamento-semanal` (sexta à tarde)

### Estrutura de pastas
```
gustavo/
├── CLAUDE.md                      # este arquivo
├── H2/
│   ├── Governanca/pendencias.md
│   ├── Operacoes/contratos.md
│   ├── Propostas/
│   └── Ferramentas/sistemas.md
├── Escritorio/
│   ├── Clientes/                  # INDEX.md + CL-xxx-*.md
│   ├── Peticoes/casos.md
│   ├── Propostas/
│   └── Financeiro/honorarios.md
├── Relatorios/                    # briefings/ + fechamentos AAAA/
├── scripts/                       # automação (briefing-diario.ps1)
└── .claude/skills/                # 10 skills (produção + operação)
```
