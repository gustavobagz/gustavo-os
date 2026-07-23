---
name: cashdoc
description: >
  Skill operacional da CashDoc Gestão de Créditos Ltda. (CNPJ 60.510.242/0001-57).
  Usar SEMPRE que Gustavo enviar dados de plantões médicos para antecipação — mesmo
  que ele diga apenas "hospital X, setor Y, data Z" sem mencionar CashDoc explicitamente.
  Também usar quando ele pedir cálculo de deságio, geração de mensagem WhatsApp de
  antecipação, ou quando mencionar termos como "antecipar", "plantão", "SDN", "SN",
  "SD", "FDS" em contexto de pagamento médico. Gera automaticamente a mensagem
  formatada com bruto, líquido e taxa de 6,5%, pronta para copiar e enviar no WhatsApp.
---

# CashDoc — Skill de Antecipação de Plantões

## Contexto

A **CashDoc Gestão de Créditos Ltda.** opera antecipação de pagamentos de plantões médicos.
Gustavo envia os dados do médico/plantão e Claude gera a mensagem formatada para WhatsApp.

**Taxa padrão:** 6,5% sobre o valor bruto  
**Prazo de PIX:** até 60 minutos após confirmação com "OK"

---

## Abreviações e Terminologia

| Sigla | Significado |
|---|---|
| SN | Serviço Noturno (12h) |
| SD | Serviço Diurno (12h) |
| SDN | Serviço Diurno + Noturno (24h = 2 blocos de 12h) |
| FDS | Fim de semana (Sexta noturno, Sábado e Domingo) |
| SPA | Setor de Pronto Atendimento |
| NIR | Núcleo Interno de Regulação |
| TRR | Transfer e Remoção Regulada |
| ALCON | Alojamento Conjunto |

---

## Fluxo de Trabalho

### 1. Receber input do Gustavo

O input vem em formato livre. Exemplos:
- `"HRCM 29/06 12h"`
- `"2 plantões SDN UPA Pinhais emergência julho"`
- `"NHRP: UTI 01/07 12h, Hospitalista 5x, TRR 18h 03 e 06/07"`
- `"a pessoa quer receber R$5.000 líquido"`

### 2. Identificar e preencher os dados

Para cada plantão, extrair:
- **Hospital/Unidade** → buscar na tabela de valores (ver `references/tabela-valores.md`)
- **Setor** → buscar valor correspondente
- **Duração** → 12h, 18h, 24h (SDN = 2×12h)
- **Quantidade** → número de plantões
- **Data(s)**
- **Saudação** → usar "Bom dia", "Boa tarde" ou "Bom dia" como padrão se não informado

Se o valor não estiver na tabela, perguntar ao Gustavo antes de calcular.

### 3. Calcular

```
Bruto = valor_unitário × quantidade_plantões
Taxa  = Bruto × 0,065
Líquido = Bruto - Taxa
```

**Cálculo reverso** (quando Gustavo informa o líquido desejado):
```
Bruto = Líquido_desejado / 0,935
Taxa  = Bruto × 0,065
```

O valor com antecipação imediata (líquido) é sempre arredondado para **baixo**, sem deixar centavos quebrados (floor) — não usar arredondamento normal.

### 4. Gerar a mensagem WhatsApp

Usar o template abaixo. Adaptar a saudação ao contexto (se Gustavo indicar "bom dia", "boa tarde" etc. na mensagem recebida do médico, replicar):

```
[Saudação]! 👋

Segue o resumo da sua antecipação:

📋 Plantões – [Hospital Nome Completo] ([SIGLA]):
• [Setor] – [Nº] plantão(ões) – [Xh] ([data(s)]) – R$ [valor unitário] x [Nº] = R$ [subtotal]
[repetir linha acima para cada setor/tipo diferente dentro do mesmo hospital]

📋 Plantões – [Hospital 2 Nome Completo] ([SIGLA]):
• [Setor] – [Nº] plantão(ões) – [Xh] ([data(s)]) – R$ [valor unitário] x [Nº] = R$ [subtotal]

💵 Valor normal de recebimento: R$ [bruto total]
💰 Valor com antecipação imediata: R$ [líquido total]

Confirmando com um *OK*, o PIX será realizado em até *60 minutos*!
_Ao confirmar, você declara que os plantões informados são verídicos e de sua efetiva realização._
```

**Regras de formatação:**
- WhatsApp bold: `*texto*`
- WhatsApp itálico: `_texto_`
- Sempre usar nome completo do hospital + sigla entre parênteses na linha do 📋
- Múltiplos setores da mesma unidade → mesma seção 📋, linhas separadas por setor
- Múltiplas unidades → múltiplas seções 📋 na mesma mensagem, um único total no final
- Plantões sem data → omitir a data da linha, não deixar campo vazio
- Quando apenas 1 plantão de uma linha → "1 plantão" (singular), e a linha vira só "R$ [valor] (1 plantão)" sem multiplicação
- Valores monetários: sempre `R$ X.XXX,XX` (ponto milhar, vírgula decimal)
- Saudação: replicar a do médico se informada (Bom dia/Boa tarde/Boa noite); padrão = "Olá"

### 5. Usar a ferramenta `message_compose_v1`

Sempre gerar a mensagem via `message_compose_v1` com `kind: "other"` para que Gustavo possa copiar facilmente.

---

## Regras de Negócio

- **Taxa padrão:** 6,5% — não alterar sem instrução explícita de Gustavo
- **Sem nome:** Gustavo frequentemente não informa o nome do médico — não pedir, não é necessário
- **Valores da tabela:** consultar sempre `references/tabela-valores.md`. Se não encontrar, perguntar o valor bruto
- **Múltiplas unidades:** consolidar tudo em uma mensagem só com seções 📋 separadas por hospital e um único total. Gustavo pode pedir mensagens separadas — respeitar
- **Memória de valores:** guardar novos valores que Gustavo fornecer durante a conversa para reuso imediato
- **Duração proporcional:** se a duração não for 12h, calcular proporcional ao valor de 12h. Ex: 6h = valor_12h / 2 | 9h = valor_12h × 9/12 | 18h = valor_12h × 18/12
- **SDN (24h):** sempre = 2 × valor de 12h, independente de como estiver na tabela
- **TRR NHRP 18h:** valor confirmado = R$1.800,00 (não proporcional)
- **HRCM 6h:** R$625,00 (metade de R$1.250)
- **Imagens de escala (PegaPlantão etc.):** ler as datas e durações diretamente da imagem, identificar o médico solicitado por Gustavo e extrair apenas os plantões dele
- **Datas sem mês explícito:** inferir pelo contexto da conversa (mês corrente ou mencionado anteriormente)
- **Competência/mês futuro:** quando Gustavo informar "competência X para receber em Y", registrar isso na mensagem

---

## Perguntas a fazer (somente se necessário)

Perguntar **apenas** o que estiver faltando e não puder ser inferido:
1. Valor bruto do plantão (se unidade/setor não estiver na tabela)
2. Data(s) do(s) plantão(ões)
3. Quantidade (se ambíguo)

**Nunca perguntar** nome do médico, taxa (usar 6,5% padrão) ou hospital (inferir do contexto).

---

## Referências

- `references/tabela-valores.md` — Tabela completa de valores por unidade e setor. Carregar sempre ao iniciar um cálculo.
