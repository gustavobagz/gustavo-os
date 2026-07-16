# CLAUDE.md — Escritório Próprio / Prática Independente (Frente 2)

> Contexto exclusivo da prática independente. Vale para tudo dentro de
> `Escritorio/`. Não misturar com a H2 (`H2/`) — contratos, propostas e
> pendências da H2 NUNCA entram nos registros do escritório, e vice-versa.

## A prática
Advocacia empresarial com carteira própria, fora da H2: empresarial,
trabalhista, consumidor, eleitoral e regulatório em saúde. Mais de 300
casos ajuizados. E-mail da frente: ggsoliveira35@gmail.com.

## Escopo e prioridades
- Cobrança / execução de valores inadimplentes — priorizada como porta de
  entrada do "motor empresarial"
- Acordo de sócios
- Proteção patrimonial
- Ações de aprovação em vestibular (nicho validado, ticket ~R$2.000/ação,
  sazonal — pico em período de vestibulares)

Modelo de receita: misto — diagnóstico como porta de entrada, combinando
projeto pontual com recorrência. Nicho prioritário em definição entre
clínicas/prestadores de saúde, PMEs em crescimento e contencioso trabalhista
recorrente.

## Registros vivos desta frente
| Registro | Arquivo |
|----------|---------|
| Casos e prazos | `Escritorio/Peticoes/casos.md` |
| Clientes (1 arquivo/cliente + índice) | `Escritorio/Clientes/` |
| Honorários e propostas | `Escritorio/Financeiro/honorarios.md` |
| Propostas geradas | `Escritorio/Propostas/` |

## Skills desta frente
- `peticao-execucao` — minuta de ação de cobrança/execução (valor, devedor,
  título executivo), com as convenções de nomenclatura do CLAUDE.md raiz
- `proposta-honorarios` — proposta comercial padrão (diagnóstico + escopo +
  honorários mistos)
- `acordo-socios` — checklist e minuta-base para acordos de sócios
- `/novo-caso` e `/novo-cliente` — intake (registram SOMENTE nesta frente)

## Lembrete de redação (reforço do CLAUDE.md raiz)
- Petições endereçadas ao Juízo — nunca "Excelência"/"Vossa Excelência"
- 1ª instância: "requerente"/"requerida" · 2ª instância: "apelante"/"apelada"

## Papel timbrado (OBRIGATÓRIO em toda produção documental desta frente)
- **Toda petição, manifestação, notificação ou documento do escritório sai no
  papel timbrado GSO Advogados** — nunca gerar DOCX/PDF "limpo".
- Modelo oficial versionado: `Escritorio/Modelos/timbrado-gso.docx` (placeholders
  `[ENDEREÇAMENTO]`, `[NÚMERO DO PROCESSO]`, `[PARTE]`, `[CORPO DA PETIÇÃO]`,
  `[DIA]`/`[MÊS]`/`[ANO]`). Identidade visual: `Escritorio/Institucional/`.
- É DOCX nativo (header: logo GSO + fio bronze; footer: endereço QS Tower +
  contatos). Para gerar documento novo, descompactar o modelo (skill docx),
  editar só o `word/document.xml` e repackar — cabeçalho/rodapé ficam intactos.
  Script gerador do modelo: `scripts/build-timbrado-gso.js` (docx-js).
- Legado: `timbrado-base.docx` ("Gustavo de Oliveira Advocacia", JPEG de página
  inteira no header) — não usar em documentos novos.
- Formatação do corpo: Calibri 12 (sz 24), entrelinha 1,5 (line 360), recuo de
  1ª linha 1701, justificado, A4, margens laterais 3cm.
- Assinatura padrão: GUSTAVO G. SANTOS DE OLIVEIRA · OAB/GO 66.404 ·
  (Assinado digitalmente). Data no formato "Goiânia/GO, DD de mês de AAAA."
- Entregar sempre DOCX + PDF em `Escritorio/Peticoes/` (ou pasta do caso).
