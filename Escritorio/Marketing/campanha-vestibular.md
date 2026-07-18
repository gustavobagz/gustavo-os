---
tags: [escritorio, marketing, vestibular, google-ads]
tipo: procedimento
frente: Escritorio
---

# Campanha — Matrícula negada / aprovado no 3º ano

> ⬅️ [[00-Mapa-Escritorio|⚖️ Escritório]] · [[00-Home|🏠 Home]] — [[honorarios|Honorários]] · [[google-meu-negocio|Google Meu Negócio]]

> Frente: Escritório (GO Advogados). Criado em 2026-07-16.
> Landing: `Escritorio/Site/vestibular/index.html`
> Tese: aluno do 3º ano do ensino médio aprovado no vestibular → conclusão
> antecipada (avanço escolar / certificação) + medida judicial com urgência.
> Orçamento aprovado: **R$ 50/dia** (teste de 3-4 semanas).

## 1. Domínio e publicação

- Recomendação: domínio próprio no registro.br (~R$ 40/ano). Sugestões a
  verificar disponibilidade: `vestibularno3ano.com.br` · `matriculanegada.com.br`
  · `aprovadono3ano.com.br`.
- Publicada na Vercel em 2026-07-16: **https://gso-vestibular.vercel.app**
  (projeto `gso-vestibular`). Quando o domínio próprio sair, apontar no painel
  da Vercel, sem refazer nada.
- Após publicar no domínio definitivo: adicionar `og:image` (URL absoluta) no
  `<head>` da landing.

## 2. Google Ads — estrutura (canal principal)

**Campanha:** Pesquisa · "Vestibular 3º ano" · R$ 50/dia · Brasil (ajuste de
lance +20% em GO) · conversão = clique no WhatsApp.

### Grupo A — Dor literal (prioridade máxima, maior intenção)
- "passei no vestibular mas estou no 3 ano"
- "passei no vestibular e não terminei o ensino médio"
- "aprovado no vestibular sem concluir ensino médio"
- "fazer faculdade sem terminar o ensino médio"
- "matrícula negada certificado ensino médio"

### Grupo B — Busca pela solução
- "concluir ensino médio antecipado"
- "certificado de conclusão do ensino médio antecipado"
- "avanço escolar 3º ano"
- "supletivo menor de 18 anos"
- "eliminar o 3º ano para fazer faculdade"

### Grupo C — Busca jurídica (CPC mais alto, converte mais)
- "advogado matrícula faculdade negada"
- "liminar para matrícula vestibular"
- "advogado vestibular ensino médio incompleto"
- "ação judicial supletivo menor de idade"

### Negativas (essencial para não queimar verba)
grátis · gratuito · encceja datas · eja inscrição · apostila · curso preparatório
· como estudar · nota de corte · gabarito · resultado vestibular · simulado

### Anúncios (RSA) — títulos aprovados (compliance OAB)
- Aprovado no Vestibular no 3º Ano?
- Matrícula Negada na Faculdade?
- Sem o Certificado do Ensino Médio?
- Entenda os Caminhos Jurídicos
- Análise do Seu Caso no WhatsApp
- Advocacia · OAB/GO 66.404
- Atendimento em Todo o Brasil
- Prazo de Matrícula Curto? Fale Já

Descrições:
- "A falta do certificado do ensino médio pode travar sua matrícula. A legislação prevê caminhos — entenda os possíveis no seu caso."
- "Triagem rápida e sem custo pelo WhatsApp. Análise do edital e da situação escolar antes de qualquer contratação."

**PROIBIDO em qualquer anúncio/página:** garantir resultado, "garanta sua
vaga", percentuais de êxito, prints de decisões, casos de clientes, "promoção".

### Extensões
- Chamada: (62) 99366-4193
- Local: endereço QS Tower (vincular ao Google Meu Negócio)
- Sitelinks: Como funciona · Perguntas frequentes · Quem atende · WhatsApp

## 3. Meta Ads (canal secundário — ativar só se sobrar verba ou no pico)

- Público: pais/mães 38-60, GO + DF, interesses: vestibular, Enem, faculdades locais.
- Criativo: card estático com a pergunta do hero ("Aprovado no vestibular, mas
  ainda no 3º ano?") + CTA "Saiba mais". Tom informativo, sem promessa.
- No meio do ano o Google sozinho basta; Meta faz mais sentido em nov-jan.

## 4. Rastreamento de origem (WhatsApp não carrega UTM)

Diferenciar pela mensagem pré-preenchida do `wa.me`:
- Landing (orgânico/direto): "...Quero uma análise do meu caso." (atual)
- Anúncio Google: adicionar variante "...Vi o anúncio e quero uma análise do meu caso."
  (trocar o `?text=` na URL final do anúncio, apontando para a mesma landing com
  parâmetro `?src=gads` — e no futuro, se quiser precisão, duplicar o botão via JS
  lendo o `src`).

## 5. Roteiro de triagem — WhatsApp (responder em minutos, não horas)

1. **Abertura:** "Olá! Aqui é do escritório Gustavo de Oliveira Advogados. Para eu analisar seu caso, me
   responde rapidinho: você é o(a) candidato(a) ou responsável?"
2. **Dados-chave (uma mensagem só):**
   - Idade e série atual do aluno
   - Instituição e curso em que foi aprovado(a)
   - **Data-limite da matrícula** (a pergunta mais importante)
   - Cidade/estado e escola atual (pública/particular)
   - Já tentou algo? (pedido na escola, supletivo, contato com a faculdade)
3. **Classificar urgência:** matrícula em <7 dias = prioridade máxima →
   ligar/chamar para call de 20min no mesmo dia.
4. **Call de diagnóstico (20min):** confirmar viabilidade, explicar caminhos
   (administrativo/judicial), SEM prometer resultado.
5. **Proposta no mesmo dia** via `/proposta-honorarios` (velocidade fecha).
6. **Fechou:** `/novo-cliente` + `/novo-caso` (registrar prazo da matrícula
   como prazo do caso).

## 6. Calendário

| Período | Ação |
|---------|------|
| 2026-07 → 2026-08 | Teste: R$ 50/dia, só Google Grupo A+C. Meta: ≥1 caso fechado ou ≥10 leads qualificados |
| 2026-09 → 2026-10 | Hibernar (pausar campanha, manter página no ar indexando) |
| 2026-11 → 2027-02 | PICO (Enem/SISU/UFG): reativar com verba maior, adicionar Grupo B e Meta Ads |

## 7. Métricas do teste (revisar semanalmente no /fechamento-semanal)

- Custo por lead (clique no WhatsApp que virou conversa): alvo < R$ 50
- Lead → caso fechado: alvo ≥ 10%
- Conta simples: caso de R$ 2.000 com CAC de até R$ 400 fecha a conta com folga

## Gatilhos de revisão
- 2 semanas sem nenhum lead → revisar palavras-chave/anúncio antes de matar
- CPC médio > R$ 8 → cortar Grupo C e concentrar no A
- Lead de fora da tese (outra dor de vestibular) aparecendo com frequência →
  considerar segunda landing (ex.: lista de espera)
