---
name: proposta-h2-tradicional
description: Gera propostas comerciais da H2 no MODELO TRADICIONAL (documento Word/DOCX + PDF com 9 seções numeradas e tabelas de dimensionamento com faixas teal). Usar SEMPRE que Gustavo pedir uma proposta H2 "tradicional", "no modelo padrão", "em Word/DOCX", ou uma proposta operacional de plantões/escalas médicas com tabelas extensas de valores por unidade — mesmo que ele diga apenas "faz a proposta para [hospital/cliente]" sem especificar modelo. Se houver dúvida entre tradicional e editorial, perguntar a Gustavo antes de gerar. Esta skill é NORMATIVA — seguir os valores exatos, nunca improvisar formatação.
---

# Proposta H2 — Modelo Tradicional (DOCX/PDF)

Especificação normativa consolidada a partir dos gabaritos aprovados (Hapvida jun/2026; revisões HEMNSL e HRSDA), com correções validadas por Gustavo. Em caso de dúvida, seguir o valor exato descrito aqui. Não interpretar, não "melhorar", não variar.

## PASSO 0 — OBRIGATÓRIO ANTES DE QUALQUER COISA

1. Ler a skill pública `docx` (/mnt/skills/public/docx/SKILL.md) e criar o documento com docx-js conforme ela manda.
2. **Logo**: usar PNG já recortado (**170 × 42 px**). Se precisar baixar do zero: `Google Drive:download_file_content` com fileId `1r3DZA-xkeye5K771ZDjbyCcu6UvoKby1` ("Logotipo H2Saude - horizontal 2 - colorido", conta h2servicosmedicos@gmail.com) — esse arquivo é o **ORIGINAL 1080×1080 px com espaço em branco ao redor**: **SEMPRE recortar com PIL antes de usar**, nunca inserir sem recorte. Se falhar o download, PARAR e pedir a Gustavo que anexe o arquivo. Nunca entregar proposta sem logo ou com logo substituto.
3. Confirmar com Gustavo (se não informado): entidade proponente (S.A. ou Ltda.), cliente, unidades, escopo, valores e regime de remuneração.

## 1. PÁGINA E TIPOGRAFIA GLOBAL

| Item | Valor exato |
|---|---|
| Papel | A4 |
| Margens | top/bottom **1418 DXA (2,5 cm)** · left/right **1701 DXA (3,0 cm)** |
| Largura de conteúdo | **8504 DXA** |
| Distância header/footer | 708 DXA |
| Fonte | **Arial em TODOS os runs** (nunca Times, nunca Calibri) |
| Idioma | pt-BR |
| Corpo de texto | **9 pt**, justificado |

### Escala tipográfica completa
| Elemento | Especificação |
|---|---|
| Título da capa | **16 pt bold #238078**, caixa alta |
| Linha de objeto (capa) | 11 pt #555555 |
| Nome do cliente (capa) | **12 pt bold #333333** |
| Linha de contexto (capa) | 9 pt itálico #888888, spacing after 400 |
| Títulos de seção | **13 pt bold #238078**, borda inferior sz 12 space=0, spacing before 320 / after 120 |
| Corpo, checklist, tabelas, assinatura | 9 pt |
| Header (texto) | 7 pt #888888 |
| Footer | 9 pt #888888 |

## 2. PALETA (NUNCA usar outras cores)

| Uso | HEX |
|---|---|
| Teal primário (títulos, bordas, valores, labels) | **#238078** |
| Teal escuro (faixas de unidade e de especialidade nas tabelas) | **#1A5C54** |
| Teal claro (células de rótulo das tabelas de dados) | **#D0EDEA** |
| Bordas internas de tabela | **#CCCCCC** (single, sz 4 = 0,5 pt) |
| Subtítulo da capa #555555 · Nome do cliente #333333 · Contexto/header/footer #888888 | |
| Texto comum | #000000 |

**SEM ZEBRA** nas linhas de dados — fundo branco uniforme.

## 3. HEADER E FOOTER (todas as páginas)

- **Um único parágrafo cada (NÃO tabela)**: logo inline + tab + texto, via tab stop em **8504 DXA**; a borda fica **no próprio parágrafo**.
- **Header**: logo H2 recortado (170×42 px) à esquerda · à direita, 7 pt #888888: `Proposta Técnica e Comercial – [Nome do Cliente]` · borda inferior single sz 12 #238078.
- **Footer**: 9 pt #888888 — esquerda `Confidencial – Uso restrito` · direita `Página {PAGE} de {NUMPAGES}` (campos dinâmicos, nunca número fixo) · borda superior single sz 12 #238078.

## 4. BLOCO DE TÍTULO (página 1, tudo centralizado, nesta ordem)

1. `PROPOSTA TÉCNICA E COMERCIAL` — 16 pt bold #238078, caixa alta
2. Linha de objeto — 11 pt #555555
3. **Nome do cliente** — 12 pt bold #333333
4. `Unidade A · Unidade B  |  Mês / Ano` — 9 pt itálico #888888, spacing after 400

## 5. AS 9 SEÇÕES OBRIGATÓRIAS (ordem fixa, nunca omitir nem reordenar)

Entre seções: **parágrafo vazio (spacer)**. Depois da seção 9: frase de cortesia + local e data ("Goiânia/GO, DD de mês de AAAA.") + bloco de assinatura, **tudo com keepNext** (nunca deixar título ou assinatura órfã).

1. **DADOS DA PROPONENTE** — tabela 2 colunas **2377 + 6127 DXA** · margens de célula top/bottom 60, left/right 100 · rótulo fill #D0EDEA bold #238078 / valor fundo branco. Campos: Razão Social, CNPJ, Endereço (Matriz), Filial (SP), Representante Legal, Contato (telefone + e-mail separados por `  |  `).
2. **APRESENTAÇÃO INSTITUCIONAL** — texto canônico literal (abaixo), nunca reescrever.
3. **OBJETO DA PROPOSTA** — objeto + referência ao edital/contrato + parágrafo de ciência/concordância ou de início de serviço.
4. **ESCOPO DOS SERVIÇOS** — checklist ✓; **sem H2 Academy por padrão** (só incluir se Gustavo pedir).
5. **DIMENSIONAMENTO TÉCNICO E VALORES** — tabela (estrutura na seção 7 desta skill).
6. **RESPONSABILIDADES DA PROPONENTE** — checklist ✓.
7. **DOS ENCARGOS E CUSTOS INCLUSOS** — abertura + checklist; **NUNCA incluir frase de exclusão de deslocamento/hospedagem/diárias**.
8. **VALIDADE DA PROPOSTA** — 60 dias padrão, salvo edital/instrução diversa.
9. **DADOS BANCÁRIOS PARA PAGAMENTO** — Favorecido, CNPJ, Banco, Agência, Conta Corrente.

### Texto canônico — Seção 2 (literal, nunca reescrever)

> "A H2 Soluções em Saúde S.A. é uma gestora de serviços médicos especializada na linha de cuidado do paciente crítico, com atuação em hospitais públicos e privados em múltiplos estados brasileiros. Oferecemos um ecossistema plug & play de gestão médica que integra dimensionamento técnico, governança assistencial, educação continuada e comunicação institucional, proporcionando ao hospital contratante segurança jurídica, qualidade assistencial e eficiência operacional."
>
> "Além disso, a H2 conta com corpo clínico qualificado, processos padronizados de escalonamento e protocolos de substituição que asseguram cobertura contínua e previsibilidade na gestão de escalas [em X]."

Só o final do 2º parágrafo ("[em X]") adapta ao serviço. **Não citar "H2 Talk" nem H2 Academy** neste texto.

### Texto padrão — Seção 7 (abertura)

> "Os valores propostos são globais e incluem todos os custos diretos e indiretos necessários à execução dos serviços, notadamente:"

seguido do checklist.

### Texto padrão — Seção 8

> "A presente proposta tem validade de 60 (sessenta) dias a contar da data de sua emissão. Após esse prazo, os valores poderão ser revistos em função de variações nos custos operacionais e condições de mercado."

## 6. DADOS CANÔNICOS POR ENTIDADE (nunca misturar)

### H2 Soluções em Saúde S.A.
| Campo | Valor |
|---|---|
| CNPJ | 53.304.656/0001-64 |
| Endereço (Matriz) | Edifício QS Tower Office, R. 72, nº 223, Salas 1901/1902 – Jardim Goiás, Goiânia/GO – CEP 74.805-480 |
| Filial (SP) | Av. Açocê, 50 – 1º andar – Indianópolis, São Paulo/SP – CEP 04075-020 |
| Representante Legal | Dr. Guilherme Ferreira de Almeida – Diretor |
| CPF do representante | 024.802.861-85 |
| Contato | (11) 93292-4187  \|  contato@h2saude.com.br |
| Banco | SICOOB – Cód. 756 · Agência 5004 · CC **1.149.889-7** |

### H2 Ltda.
| Campo | Valor |
|---|---|
| CNPJ | 04.189.941/0001-76 |
| Banco | SICOOB – Cód. 756 · Agência 5004 · CC **1.063.991-8** |

⚠️ **Matriz = Goiânia (QS Tower)**, **Filial = São Paulo (Av. Açocê)** — gabaritos antigos traziam invertido; NÃO copiar de gabarito. **Favorecido, CNPJ e conta SEMPRE da MESMA entidade.**

## 7. TABELA DE DIMENSIONAMENTO/VALORES (Seção 5)

- **5 ou 6 colunas somando 8504 DXA** — adaptar ao regime de remuneração informado por Gustavo (por hora, por plantão 12h/24h, mensal fixo, global; com ou sem coluna de quantidade). A anatomia visual NUNCA varia.
- **Faixa da unidade**: célula única (gridSpan total), fill #1A5C54, **UMA LINHA SÓ**: `Nome – Descrição | Endereço · Contrato nº` (nunca dividir em 2 linhas).
- **Cabeçalho de colunas**: fill #238078, branco bold.
- **Faixas de especialidade** (CLÍNICA MÉDICA, PEDIATRIA…): gridSpan total, fill #1A5C54, caixa alta, branco bold, **alinhadas à esquerda**.
- **Linhas de dados**: fundo branco (sem zebra) · coluna de valor bold #238078 centralizada, formato `R$ N.NNN,00` · demais células preto 9 pt, 1ª coluna à esquerda, demais centralizadas.
- **Linha de total**: **célula única mesclada** (nunca dividida em 2 células), alinhada à direita: `TOTAL MENSAL ESTIMADO: R$ N.NNN,00`.
- Nota itálica opcional abaixo da tabela ("valores por hora fixos e independentes do volume", "faturamento segue a produção efetiva").
- Uma tabela POR UNIDADE; coordenações em linhas próprias com Turno "—" e Carga "Mensal".

## 8. LISTAS DE CHECAGEM (Seções 4, 6 e 7)

- NÃO usar numeração/bullet nativos do Word. Cada item:
  - Caractere literal **✓** em **bold #238078** no início
  - Recuo: left 360, hanging 360 DXA · spacing after 100
  - Texto 9 pt preto

## 9. BLOCO DE ASSINATURA

```
GUILHERME FERREIRA DE ALMEIDA                      ← bold preto
Diretor – H2 Soluções em Saúde S.A.
CPF: 024.802.861-85 · CNPJ: 53.304.656/0001-64
```

Tudo 9 pt, com keepNext junto da cortesia e data.

**REGRA DE CARGO:** **S.A. → Diretor** (não existe "Sócio Administrador" em S.A.). **Ltda. → Sócio Administrador.** Cargo, entidade e CNPJ coerentes na Seção 1 E na assinatura.

## 10. REGRAS DE CONTEÚDO (anti-erro)

- **NUNCA inventar valores, qualificações, endereços ou prazos** — dado ausente vira placeholder `[DEFINIR]` + aviso a Gustavo.
- Entidade proponente confirmada por Gustavo a cada proposta; ela determina CNPJ, conta e assinatura.
- Validade padrão: 60 dias, salvo edital/instrução diversa (ex.: HRSDA saiu com 90 dias por exceção autorizada).

## 11. ERROS JÁ CORRIGIDOS (nunca reintroduzir)

Margens 2 cm iguais nos 4 lados · corpo 8 pt / capa 18 pt · logo sem recortar · zebra nas linhas de dados · total dividido em 2 células · faixa da unidade em 2 linhas · menção a "H2 Talk" · H2 Academy no escopo padrão · frase de exclusão de deslocamento/hospedagem/diárias · título de seção ou assinatura órfã no fim de página.

## 12. PROPOSTAS JÁ GERADAS (referência)

- HEMNSL — R$ 319.789,00/mês
- HRSDA — R$ 478.050,00/mês (validade 90 dias, exceção)

## 13. CHECKLIST FINAL (executar SEMPRE antes de entregar)

1. Logo recortado (170×42 px) presente no header de todas as páginas?
2. Todas as 9 seções, na ordem, numeração correta?
3. Cores conferem com a paleta? Sem zebra?
4. Entidade × CNPJ × conta × cargo × assinatura coerentes? (S.A. = Diretor; Ltda. = Sócio Administrador)
5. Matriz = Goiânia (QS Tower) e Filial = São Paulo (Av. Açocê)?
6. Faixa da unidade em 1 linha só? Total em célula única mesclada à direita?
7. Coluna de valores bold #238078 centralizada?
8. Campos PAGE/NUMPAGES dinâmicos?
9. Texto canônico da Seção 2 literal, sem "H2 Talk" e sem H2 Academy?
10. Nenhum valor inventado? Nenhuma frase de exclusão de deslocamento/hospedagem/diárias?
11. Converter para PDF e inspecionar visualmente página a página. Entregar DOCX + PDF.
