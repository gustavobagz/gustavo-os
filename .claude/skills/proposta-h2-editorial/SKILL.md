---
name: proposta-h2-editorial
description: Gera propostas comerciais da H2 no MODELO EDITORIAL (PDF premium com capa de faixa verde vertical, título tipográfico grande, card de destinatário e régua emissão/validade/investimento). Usar SEMPRE que Gustavo pedir proposta H2 "editorial", "premium", "nova proposta", "modelo bonito/institucional", ou propostas de produtos H2 (H2 Academy, telemedicina) e primeiras abordagens a clientes estratégicos — mesmo que ele diga apenas "faz a proposta para [cliente]" em contexto institucional. Se houver dúvida entre editorial e tradicional, perguntar a Gustavo antes de gerar. Esta skill é NORMATIVA — seguir os valores exatos, nunca improvisar formatação.
---

# Proposta H2 — Modelo Editorial (PDF premium)

Especificação normativa extraída do gabarito H2 Academy / SBCD Castelo do Piauí (jun/2026). Rege o DESIGN; para dados fixos da H2 vale SEMPRE a seção "Dados Canônicos" — o gabarito de origem contém erros de dados e NÃO deve ser copiado nesses pontos.

## PASSO 0 — OBRIGATÓRIO ANTES DE QUALQUER COISA

1. Ler a skill pública `pdf` (/mnt/skills/public/pdf/SKILL.md) e gerar o PDF conforme ela manda (HTML → PDF é o caminho usual para este modelo).
2. **Baixar o logo do Drive**: `Google Drive:download_file_content` com fileId `1r3DZA-xkeye5K771ZDjbyCcu6UvoKby1` (colorido — páginas internas). Para a CAPA é necessária a **versão branca/negativa**: se não houver arquivo próprio no Drive, pedir a Gustavo. **Nunca recolorir o logo por conta própria.** Se qualquer download falhar, PARAR e pedir o arquivo. O base64 do JPEG vem no campo `content` do JSON retornado.
3. Confirmar com Gustavo (se não informado): entidade proponente (S.A. ou Ltda.), cliente/unidade, produto/frente (Academy etc.), escopo, valores, regime de faturamento.

## 1. PALETA E TIPOGRAFIA

| Uso | Valor |
|---|---|
| Verde institucional escuro (faixa da capa, blocos sólidos, faixa de unidade) | **#1A5C54** |
| Teal primário (palavra-destaque do título, numerais de seção, valores, eyebrows, linha de total) | **#238078** |
| Fundo creme (capa e páginas) | **#F2EFE8** (off-white quente; nunca branco puro na capa) |
| Rótulos/microcópia | cinza #888888, CAIXA ALTA, letterspacing aumentado |
| Texto corrido | #333333, justificado |
| Fonte | Helvetica/Arial. Hierarquia por peso e tamanho, não por troca de família |

## 2. CAPA (página 1) — 9 elementos obrigatórios

1. **Faixa vertical** #1A5C54 na coluna esquerda (~1/3 da largura), sangrando até as bordas.
2. **Logo H2 branco** (negativo) no topo da faixa.
3. **Texto vertical** (rotacionado 90°, leitura de baixo para cima) na borda da faixa: `PROPOSTA TÉCNICA E COMERCIAL · MÊS / ANO`, branco, caps, letterspaced.
4. **Eyebrow** teal caps bold letterspaced (linha de produto/frente, ex.: `EDUCAÇÃO CONTINUADA · H2 ACADEMY`).
5. **Título em 3 linhas**: `Proposta / Técnica e / Comercial` — ±48pt, bold, #1A1A1A, ÚLTIMA palavra em **#238078**.
6. **Card do destinatário**: caixa branca com **barra de acento teal à esquerda**; rótulo `DESTINATÁRIO` (micro, cinza, caps), nome do cliente bold, linhas de unidade e endereço.
7. **Apresentação institucional** com eyebrow próprio: texto canônico H2 adaptado à frente/produto, justificado.
8. **Régua inferior em 3 colunas**: `EMISSÃO` · `VALIDADE` · `INVESTIMENTO` — filete superior em cada coluna, rótulo teal micro caps, valor bold #1A1A1A. Investimento = valor global.
9. **Numeral-marca d'água gigante** (ano, ex. "26") no canto inferior direito, tom creme levemente mais escuro, atrás do conteúdo.

Qualquer elemento faltando = capa fora do padrão. Refazer.

## 3. PÁGINAS INTERNAS

- **Cabeçalho**: logo H2 colorido pequeno à esquerda; à direita, título corrido micro caps cinza `PROPOSTA · [PRODUTO] · [UNIDADE]`.
- **Rodapé**: filete fino; esquerda `Confidencial · Uso restrito`; direita `[Entidade] · CNPJ [...]` conforme a entidade do engajamento.
- **Seções numeradas**: numeral grande **bold #238078** com zero à esquerda (`01`, `02`…) + título bold escuro na mesma linha + **filete horizontal** de largura total abaixo.
- **Listas de dados** (Proponente, Unidade Contratante): estilo editorial, SEM caixa de tabela — rótulo micro caps cinza à esquerda, valor à direita, filetes hairline entre linhas.
- **Texto corrido** justificado, negrito pontual em conceitos-chave.
- **Listas**: bullets simples (•). NUNCA usar ✓ — o checkmark é assinatura do modelo tradicional.

## 4. TABELA DE DIMENSIONAMENTO

- Cabeçalho: fundo **#1A5C54**, branco caps. Colunas conforme o regime (padrão: DESCRIÇÃO · QTD · VALOR UNITÁRIO · VALOR TOTAL — **pode variar por engajamento**: hora, plantão, mensal, global).
- Corpo: fundo branco, bordas hairline; coluna(s) de valor **bold #238078** centralizadas.
- **Linha de total**: fundo **#238078**, branco bold (`VALOR TOTAL MENSAL` ou equivalente + valor).
- Nota de faturamento logo abaixo.

## 5. BLOCO DADOS BANCÁRIOS

- **Bloco sólido #1A5C54** de largura total: rótulos em teal claro micro caps, valores em branco.

## 6. FECHAMENTO

- Parágrafo de declaração ("Declaramos pleno conhecimento e integral concordância…" + cláusula de revisão por alteração de escopo).
- Local e data **centralizados** — local = **Goiânia/GO** (salvo instrução diversa).
- Assinatura centralizada com filete: nome bold caps, cargo · entidade, CPF · CNPJ.

## 7. ESTRUTURA DE SEÇÕES (editorial — mais enxuta)

01 Proponente · 02 Unidade Contratante · 03 Objeto da Proposta · 04 Dimensionamento e Valores · 05 Responsabilidades (com parágrafo de encargos ao final) · 06 Validade · 07 Dados Bancários → declaração → data → assinatura.
(A capa concentra apresentação institucional, emissão, validade e investimento.)

## 8. DADOS CANÔNICOS (sobrepõem QUALQUER gabarito)

- **Matriz**: Edifício QS Tower Office, R. 72, nº 223, Salas 1901/1902 – Jardim Goiás, **Goiânia/GO** – CEP 74.805-480.
- **Filial (SP)**: Av. Açocê, 50 – 1º andar – Indianópolis, São Paulo/SP – CEP 04075-020.
- **Cargo**: **S.A. → Diretor**. **Ltda. → Sócio Administrador.** Nunca "Sócio Administrador" em documento da S.A.
- **Representante**: Dr. Guilherme Ferreira de Almeida · CPF 024.802.861-85.
- **Contato**: (11) 93292-4187 · contato@h2saude.com.br.
- **Contas SICOOB (cód. 756, ag. 5004)**: S.A. (CNPJ 53.304.656/0001-64) → CC **1.149.889-7** · Ltda. (CNPJ 04.189.941/0001-76) → CC **1.063.991-8**. **Favorecido, CNPJ e conta SEMPRE da MESMA entidade.** O gabarito de origem misturou S.A. com conta da Ltda. — erro grave (receita de uma entidade no caixa da outra); não repetir.
- **Local da assinatura**: Goiânia/GO.
- **Validade padrão**: 60 dias corridos da emissão.
- Nunca inventar valores/escopo — placeholder `[DEFINIR]` + aviso a Gustavo.

## 9. CHECKLIST FINAL (executar SEMPRE antes de entregar)

1. Logo correto (branco na faixa da capa, colorido nas internas)?
2. Capa com os 9 elementos: faixa, logo branco, texto vertical, eyebrow, título com última palavra teal, card destinatário, apresentação, régua tripla, marca d'água do ano?
3. Entidade × CNPJ × favorecido × conta × cargo × assinatura — TODOS da mesma entidade?
4. Matriz Goiânia / Filial SP?
5. Numerais de seção com zero à esquerda e filete?
6. Valores bold teal; linha de total #238078; bloco bancário #1A5C54?
7. Local/data = Goiânia/GO?
8. Nenhum dado inventado?
9. Inspeção visual do PDF página a página antes de entregar.
