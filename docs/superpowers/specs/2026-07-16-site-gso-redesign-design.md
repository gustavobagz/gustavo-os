# Spec — Redesign site GSO Advogados (cartografia de risco)

Data: 2026-07-16 · Status: aprovado em conversa (escopo, paleta, CTA e títulos escolhidos por Gustavo)

## Objetivo
Reformular o site institucional (`Escritorio/Site/index.html`, single-file, deployado em
https://gso-advogados.vercel.app) aplicando o conceito "cartografia de risco", copy nova
e uma seção de FAQ — **estritamente OAB-safe** (Provimento 205/2021).

## Decisões tomadas
- **Escopo:** redesign completo OAB-safe. SEM depoimentos, SEM números/percentuais de
  resultado, SEM fotos (não há material). Insights/artigos, retrato do fundador e domínio
  próprio ficam para fase 2.
- **Abordagem:** evoluir o `index.html` atual em place (não reescrever, não migrar para framework).
  Continua single-file, zero dependências externas além do Google Fonts já usado.
- **Paleta:** grafite/creme/dourado atuais + nova cor de apoio `--oliva: #4A4E3A`
  (micro-linhas dos cards, marcadores do FAQ, hovers secundários).
- **A frase "Traga o caso. Saia com um mapa" SAI do site inteiro** (decisão de Gustavo).
- **Fio condutor comercial:** diagnóstico como porta de entrada (alinhado ao posicionamento
  do escritório em `Escritorio/CLAUDE.md`).

## Conceito visual — cartografia de risco
1. **Linha de rota dourada** no Método: SVG vertical fino conectando os 7 passos como pontos
   de rota, desenhando-se no scroll (`stroke-dashoffset` + IntersectionObserver existente).
   Desativada com `prefers-reduced-motion`; discreta/simplificada no mobile.
2. **Marcadores de ponto de rota** nos passos (círculo com anel dourado); numeração vira
   "Coordenada 01…07".
3. **Coordenadas de Goiânia** (`16°41′S · 49°16′W`) como detalhe tipográfico na linha da OAB do hero.
4. Hierarquia mais cinematográfica: H2 até ~3.6rem; corpo permanece leve.

## Copy final (aprovada)

### Hero
- Selo: `ADVOCACIA EMPRESARIAL · GOIÂNIA · ATUAÇÃO EM TODO O BRASIL`
- H1: **Antes de decidir, saiba onde cada caminho leva.** (sem "exatamente" — risco OAB)
- Sub: Assessoria a empresas e empresários em direito societário, trabalhista, consumerista
  e recuperação de crédito — com o risco de cada decisão mapeado antes de você assumi-lo.
- CTA primário: **Agendar diagnóstico** (→ #contato) · CTA secundário: Áreas de atuação
- Linha OAB: Gustavo G. Santos de Oliveira · OAB/GO 66.404 · 16°41′S · 49°16′W

### Atuação
- H2: **Quatro territórios, uma única bússola.**
- Micro-linhas de escopo por card (descrevem serviço, nunca resultado):
  - Empresarial: Do aperto de mão ao acordo assinado
  - Trabalhista: Da rotina de RH à defesa em juízo
  - Consumidor: Da demanda isolada à gestão do contencioso
  - Recuperação de crédito: Da inadimplência ao título executado

### Método
- H2: **As sete coordenadas de toda análise.**
- Intro: Nenhum parecer sai do escritório sem cumprir as sete etapas abaixo — nesta ordem.
  É o que separa uma opinião de uma recomendação.
- Passo 3 "Movimento contrário" → **Prevenção**: "Os movimentos prováveis da outra parte,
  antecipados — para que a estratégia não dependa de reação."
- Demais 6 passos: texto mantido.

### Sobre
- Mantido como está (o "300+ ações ajuizadas" já é factual e integrado). Sem depoimentos.

### FAQ (seção nova, entre Sobre e Contato)
1. Como funciona a primeira conversa? → É um diagnóstico: você apresenta o problema, nós
   devolvemos uma leitura honesta — inclusive quando a recomendação é não litigar.
2. Como são definidos os honorários? → Depois do diagnóstico, em proposta fechada por
   escrito. Sem surpresa no meio do caminho. (processo, sem valores — permitido pela OAB)
3. Atendem fora de Goiânia? → Sim. Com processo eletrônico, atuamos em todo o país.
4. Que tipo de cliente o escritório atende? → Empresas e empresários — de sociedades em
   estruturação a operações com contencioso recorrente.

### Contato
- H2: **Primeiro o diagnóstico. Depois a estratégia.**
- Sub mantida: A primeira conversa serve para entender o problema e dizer, com franqueza,
  se e como podemos ajudar.
- CTA "WhatsApp direto" e lista de contatos mantidos.

## Restrições OAB (gate de conteúdo)
- Proibido: promessa/insinuação de resultado, percentuais de êxito, valores recuperados,
  depoimentos de clientes, casos concretos com desfecho, valores de honorários.
- Permitido (e usado): áreas de atuação, descrição de método/processo, dado factual de
  volume (300+ ações ajuizadas), explicação de como honorários são definidos.

## Técnica
- Um arquivo: `Escritorio/Site/index.html`. Sem build, sem libs.
- Acessibilidade preservada: aria-labels, contraste, `prefers-reduced-motion` (linha de
  rota e reveals desligados), navegação por âncora.
- FAQ com `<details>/<summary>` nativo (zero JS novo além da animação da linha).

## Entrega e verificação
1. Editar `index.html` → conferir no navegador local (desktop + largura mobile).
2. Commit no repo (`main`).
3. Redeploy produção no projeto Vercel existente `gso-advogados`
   (team `team_xKhQFzbhNnOOyy482gJ4rrH1`) → conferir https://gso-advogados.vercel.app.

## Fora de escopo (fase 2)
Insights/artigos, retrato ambientado do fundador, domínio próprio, analytics.
