---
name: proposta-h2-tradicional
description: Gera propostas comerciais da H2 no MODELO TRADICIONAL (documento Word/DOCX + PDF com 9 seções numeradas, tabelas de dimensionamento com faixas teal e zebra). Usar SEMPRE que Gustavo pedir uma proposta H2 "tradicional", "no modelo padrão", "em Word/DOCX", ou uma proposta operacional de plantões/escalas médicas com tabelas extensas de valores por unidade — mesmo que ele diga apenas "faz a proposta para [hospital/cliente]" sem especificar modelo. Se houver dúvida entre tradicional e editorial, perguntar a Gustavo antes de gerar. Esta skill é NORMATIVA — seguir os valores exatos, nunca improvisar formatação.
---

# Proposta H2 — Modelo Tradicional (DOCX/PDF)

Especificação normativa extraída por engenharia reversa do gabarito aprovado (Hapvida, jun/2026), com correções de dados validadas por Gustavo. Em caso de dúvida, seguir o valor exato descrito aqui. Não interpretar, não "melhorar", não variar.

## PASSO 0 — OBRIGATÓRIO ANTES DE QUALQUER COISA

1. Ler a skill pública `docx` (/mnt/skills/public/docx/SKILL.md) e criar o documento com docx-js conforme ela manda.
2. **Baixar o logo do Drive**: `Google Drive:download_file_content` com fileId `1r3DZA-xkeye5K771ZDjbyCcu6UvoKby1` ("Logotipo H2Saude - horizontal 2 - colorido.jpg", conta h2servicosmedicos@gmail.com). O base64 do JPEG vem no campo `content` do JSON retornado — decodificar e salvar. Se falhar, PARAR e pedir a Gustavo que anexe o arquivo. Nunca entregar proposta sem logo ou com logo substituto.
3. Confirmar com Gustavo (se não informado): entidade proponente (S.A. ou Ltda.), cliente, unidades, escopo, valores e regime de remuneração.

## 1. PÁGINA E TIPOGRAFIA GLOBAL

| Item | Valor exato |
|---|---|
| Papel | A4 (11906 × 16838 DXA) |
| Margens | 1134 DXA (2,0 cm) nos 4 lados |
| Distância header/footer | 708 DXA |
| Fonte | **Arial em TODOS os runs** (nunca Times, nunca Calibri) |
| Idioma | pt-BR |
| Corpo de texto | **8 pt** (sz 16), justificado, spacing after 140 DXA |
| Notas explicativas | 8 pt **itálico**, justificado |

## 2. PALETA (NUNCA usar outras cores)

| Uso | HEX |
|---|---|
| Teal primário (títulos, bordas, valores, labels) | **#238078** |
| Teal escuro (faixas de unidade e de especialidade nas tabelas) | **#1A5C54** |
| Teal claro (células de rótulo das tabelas de dados) | **#D0EDEA** |
| Zebra das linhas de dados | **#EEF4FB** |
| Bordas internas de tabela | **#CCCCCC** (single, sz 4 = 0,5 pt) |
| Subtítulo da capa #555555 · Nome do cliente #333333 · Linha de contexto #888888 | |
| Texto comum | #000000 |

## 3. CABEÇALHO (todas as páginas)

- Logo H2 horizontal colorido à esquerda: **1,77" × 0,42"** (~170 × 40 px).
- À direita, texto pequeno cinza: `Proposta Técnica e Comercial – [Nome do Cliente]`.
- **Borda inferior**: single, sz 12 (1,5 pt), cor #238078.

## 4. RODAPÉ (todas as páginas)

- Esquerda: `Confidencial – Uso restrito` · Direita: `Página {PAGE} de {NUMPAGES}` (campos dinâmicos, nunca número fixo).
- **Borda superior**: single, sz 12, #238078. Texto 8 pt cinza.

## 5. BLOCO DE TÍTULO (página 1, tudo centralizado, nesta ordem)

1. `PROPOSTA TÉCNICA E COMERCIAL` — **18 pt, bold, #238078**, caixa alta
2. Linha de objeto — 12 pt, #555555
3. **Nome do cliente** — 14 pt, bold, #333333
4. `Unidade A · Unidade B  |  Mês / Ano` — **9 pt, itálico, #888888**

## 6. TÍTULOS DE SEÇÃO

- Formato: `N. TÍTULO EM CAIXA ALTA` — **13 pt, bold, #238078**
- **Borda inferior** do parágrafo: single, sz 12, #238078
- Spacing: before **320**, after **120** DXA

## 7. AS 9 SEÇÕES OBRIGATÓRIAS (ordem fixa, nunca omitir nem reordenar)

1. DADOS DA PROPONENTE
2. APRESENTAÇÃO INSTITUCIONAL
3. OBJETO DA PROPOSTA
4. ESCOPO DOS SERVIÇOS
5. DIMENSIONAMENTO TÉCNICO E VALORES
6. RESPONSABILIDADES DA PROPONENTE
7. DOS ENCARGOS E CUSTOS INCLUSOS
8. VALIDADE DA PROPOSTA
9. DADOS BANCÁRIOS PARA PAGAMENTO

Após a seção 9: frase de cortesia em itálico ("Ficamos à disposição…"), local e data ("Goiânia/GO, DD de mês de AAAA.") e bloco de assinatura.

## 8. TABELAS DE DADOS (Seções 1 e 9)

- 2 colunas: **2600 + 6700 DXA**
- Célula de rótulo: fill **#D0EDEA**, texto **bold #238078**, 8 pt
- Célula de valor: fundo branco, texto preto 8 pt
- Bordas #CCCCCC sz 4 · Margens de célula: top/bottom 60, left/right 100 DXA

### Dados canônicos — Seção 1 (proponente = H2 Soluções em Saúde S.A.)
| Razão Social | H2 SOLUÇÕES EM SAÚDE S.A. |
| CNPJ | 53.304.656/0001-64 |
| Endereço (Matriz) | Edifício QS Tower Office, R. 72, nº 223, Salas 1901/1902 – Jardim Goiás, Goiânia/GO – CEP 74.805-480 |
| Filial (SP) | Av. Açocê, 50 – 1º andar – Indianópolis, São Paulo/SP – CEP 04075-020 |
| Representante Legal | Dr. Guilherme Ferreira de Almeida – Diretor |
| Contato | (11) 93292-4187 | contato@h2saude.com.br |

⚠️ O gabarito de origem trazia Matriz/Filial INVERTIDAS e cargo errado. A regra correta é a desta tabela: **Matriz = Goiânia (QS Tower)**, **Filial = São Paulo (Av. Açocê)**. NÃO copiar do gabarito.

### Dados canônicos — Seção 9 (conta varia POR ENTIDADE — nunca misturar)
- **S.A.** (CNPJ 53.304.656/0001-64): SICOOB – Cód. 756 · Agência 5004 · CC **1.149.889-7**
- **Ltda.** (CNPJ 04.189.941/0001-76): SICOOB – Cód. 756 · Agência 5004 · CC **1.063.991-8**
- **Favorecido, CNPJ e conta SEMPRE da MESMA entidade.**

## 9. TABELAS DE DIMENSIONAMENTO/VALORES (Seção 5)

**A ESTRUTURA DE COLUNAS PODE VARIAR por engajamento** (valor por hora, por plantão 12h/24h, mensal fixo, global; com ou sem coluna de quantidade). O que NUNCA varia é a anatomia visual. Adaptar as colunas ao regime informado por Gustavo, mantendo a última coluna sempre como a de valor.

- Layout padrão (regime por hora), 4 colunas: **4200 / 2400 / 1300 / 1400 DXA** (Especialidade/Serviço · Turno/Função · Carga Horária · Valor por Hora). Em outros regimes, redistribuir mantendo coluna de valor ~1400 DXA.
- **Linha 0 — faixa da unidade**: gridSpan total, fill **#1A5C54**, 1ª linha bold branco (`Unidade NN  –  Nome`), 2ª linha menor branca (endereço · funcionamento)
- **Linha 1 — cabeçalho de colunas**: fill **#238078**, branco bold
- **Faixas de especialidade** (CLÍNICA MÉDICA, PEDIATRIA…): gridSpan total, fill **#1A5C54**, caixa alta, branco bold
- **Linhas de dados**: zebra branco/**#EEF4FB**, reiniciando em BRANCO após cada faixa de especialidade
- **Coluna de valor**: **bold, #238078, centralizado**, formato `R$ N.NNN,00`
- Demais células: preto 8 pt; 1ª coluna à esquerda, demais centralizadas
- Uma tabela POR UNIDADE; coordenações em linhas próprias com Turno "—" e Carga "Mensal"
- Notas itálicas padrão quando aplicável ("valores por hora fixos e independentes do volume", "faturamento segue a produção efetiva")

## 10. LISTAS DE CHECAGEM (Seções 4-Atribuições e 6)

- NÃO usar numeração nativa do Word. Cada item:
  - Caractere literal **✓** em **bold #238078** no início
  - Recuo: left 360, hanging 360 DXA · spacing after 100
  - Texto 8 pt preto

## 11. BLOCO DE ASSINATURA

```
GUILHERME FERREIRA DE ALMEIDA          ← 9 pt bold preto
Diretor – H2 Soluções em Saúde S.A.    ← 8 pt
CPF: 024.802.861-85 · CNPJ: 53.304.656/0001-64    ← 8 pt
```
**REGRA DE CARGO:** **S.A. → Diretor** (não existe "Sócio Administrador" em S.A.). **Ltda. → Sócio Administrador.** Cargo, entidade e CNPJ coerentes na Seção 1 E na assinatura.

## 12. REGRAS DE CONTEÚDO (anti-erro)

- **NUNCA inventar valores, qualificações, endereços ou prazos** — dado ausente vira placeholder `[DEFINIR]` + aviso a Gustavo.
- Entidade proponente confirmada por Gustavo a cada proposta; ela determina CNPJ, conta e assinatura.
- Validade padrão: 60 dias, salvo instrução diversa.
- Seção 2: usar o texto institucional canônico H2 ("gestora de serviços médicos especializada na linha de cuidado do paciente crítico… ecossistema plug & play… H2 Academy e H2 Talk") — não reescrever criativamente.

## 13. CHECKLIST FINAL (executar SEMPRE antes de entregar)

1. Logo baixado do Drive e presente no header de todas as páginas?
2. Todas as 9 seções, na ordem, numeração correta?
3. Cores conferem com a paleta?
4. Entidade × CNPJ × conta × cargo × assinatura coerentes? (S.A. = Diretor; Ltda. = Sócio Administrador)
5. Matriz = Goiânia (QS Tower) e Filial = São Paulo (Av. Açocê)?
6. Coluna de valores bold #238078 centralizada?
7. Zebra correta (reinicia em branco após faixa)?
8. Campos PAGE/NUMPAGES dinâmicos?
9. Nenhum valor inventado?
10. Converter para PDF e inspecionar visualmente página a página. Entregar DOCX + PDF.
