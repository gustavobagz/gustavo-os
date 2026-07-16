# Redesign Site GSO Advogados — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Aplicar ao site single-file o conceito "cartografia de risco" com a copy aprovada no spec (`docs/superpowers/specs/2026-07-16-site-gso-redesign-design.md`), adicionar FAQ e redeployar em produção.

**Architecture:** Um único arquivo `Escritorio/Site/index.html` editado em place — CSS embutido ganha a cor oliva, marcadores de rota e escala tipográfica; HTML ganha copy nova e seção FAQ (`<details>`); JS existente (IntersectionObserver) é reaproveitado para "desenhar" a linha de rota. Zero dependências novas.

**Tech Stack:** HTML/CSS/JS vanilla · Vercel (projeto `gso-advogados`, team `team_xKhQFzbhNnOOyy482gJ4rrH1`).

**Sem testes automatizados:** site estático sem toolchain — verificação é estrutural (greps de conteúdo obrigatório/proibido) + servir localmente + conferir produção após deploy.

---

### Task 1: Copy nova em todas as seções existentes

**Files:**
- Modify: `Escritorio/Site/index.html` (blocos hero, áreas, método, contato)

- [ ] **Step 1: Hero** — substituir eyebrow, H1, sub, CTA e linha OAB:

```html
<p class="hero-eyebrow">Advocacia empresarial · Goiânia · Atuação em todo o Brasil</p>
<h1>Antes de decidir, <span class="q">saiba onde cada caminho leva</span><span class="fim" aria-hidden="true"></span></h1>
<p class="hero-sub">Assessoria a empresas e empresários em direito societário,
trabalhista, consumerista e recuperação de crédito — com o risco de cada decisão
mapeado antes de você assumi-lo.</p>
<div class="hero-acoes">
  <a class="btn btn-cheio" href="#contato">Agendar diagnóstico</a>
  <a class="btn btn-linha" href="#areas">Áreas de atuação</a>
</div>
<p class="hero-oab">Gustavo G. Santos de Oliveira · OAB/GO 66.404 · <span class="coord">16°41′S · 49°16′W</span></p>
```

- [ ] **Step 2: Áreas** — H2 vira `Quatro territórios, uma única bússola<span class="fim">`; cada card ganha micro-linha de escopo após o `<p>`:

```html
<!-- Empresarial -->  <p class="area-rota">Do aperto de mão ao acordo assinado</p>
<!-- Trabalhista -->  <p class="area-rota">Da rotina de RH à defesa em juízo</p>
<!-- Consumidor -->   <p class="area-rota">Da demanda isolada à gestão do contencioso</p>
<!-- Crédito -->      <p class="area-rota">Da inadimplência ao título executado</p>
```

- [ ] **Step 3: Método** — H2 `As sete coordenadas de toda análise`; intro "Nenhum parecer sai do escritório sem cumprir as sete etapas abaixo — nesta ordem. É o que separa uma opinião de uma recomendação."; passo 3:

```html
<li class="passo reveal">
  <span class="passo-nome">Prevenção</span>
  <span class="passo-desc">Os movimentos prováveis da outra parte, antecipados — para que a estratégia não dependa de reação.</span>
</li>
```

- [ ] **Step 4: Contato** — H2 vira `Primeiro o diagnóstico. Depois a estratégia<span class="fim">`. Sub e lista mantidas. Garantir que "Traga o caso" não existe mais em nenhum lugar do arquivo.

### Task 2: Sistema visual — oliva, coordenadas, escala, rota

**Files:**
- Modify: `Escritorio/Site/index.html` (bloco `<style>`)

- [ ] **Step 1:** adicionar `--oliva:#4A4E3A;` ao `:root` e subir escala do H2 para `clamp(2rem,4.6vw,3.6rem)`.

- [ ] **Step 2:** estilos novos:

```css
.coord{color:var(--ouro);letter-spacing:.2em}
.area-rota{
  margin-top:1.2rem;font-family:var(--display);font-weight:600;font-size:.7rem;
  letter-spacing:.14em;text-transform:uppercase;color:var(--oliva);
  display:flex;align-items:center;gap:.6rem;
}
.area-rota::before{content:"";width:1.4rem;height:1px;background:var(--oliva)}
```

- [ ] **Step 3:** linha de rota no método (desenha ao entrar na viewport; morre junto com o kill-switch global de `prefers-reduced-motion` já existente):

```css
.passos{position:relative}
.passos::before{
  content:"";position:absolute;top:0;bottom:0;left:.42rem;width:1px;
  background:var(--bronze);transform:scaleY(0);transform-origin:top;
  transition:transform 1.8s cubic-bezier(.22,.6,.2,1) .2s;
}
.passos.on::before{transform:scaleY(1)}
.passo{grid-template-columns:8.5rem 1fr 2fr;padding-left:2rem;position:relative}
.passo::after{ /* ponto de rota */
  content:"";position:absolute;left:0;top:2.45rem;width:.85rem;height:.85rem;
  border-radius:50%;border:1px solid var(--ouro);background:var(--grafite);
}
.passo::before{
  content:"COORDENADA 0" counter(passo);
  font-family:var(--display);font-weight:600;font-size:.62rem;
  letter-spacing:.22em;color:var(--bronze);
}
@media(max-width:760px){
  .passos::before,.passo::after{display:none}
  .passo{padding-left:0;grid-template-columns:6.5rem 1fr;grid-template-rows:auto auto}
}
```

- [ ] **Step 4:** JS — incluir `.passos` no observer para receber a classe `on` (mesma mecânica dos `.reveal`):

```js
document.querySelectorAll('.reveal, .passos').forEach((el) => io.observe(el));
```

### Task 3: Seção FAQ

**Files:**
- Modify: `Escritorio/Site/index.html` (nova `<section id="faq">` entre Sobre e Contato + CSS)

- [ ] **Step 1:** HTML (padrão sec-head das outras seções):

```html
<section id="faq" aria-labelledby="faq-titulo">
  <div class="wrap">
    <div class="sec-head reveal">
      <p class="sec-eyebrow">Perguntas</p>
      <h2 id="faq-titulo">Antes de entrar em contato<span class="fim" aria-hidden="true"></span></h2>
    </div>
    <div class="faq-lista reveal">
      <details><summary>Como funciona a primeira conversa?</summary>
        <p>É um diagnóstico: você apresenta o problema, nós devolvemos uma leitura honesta — inclusive quando a recomendação é não litigar.</p></details>
      <details><summary>Como são definidos os honorários?</summary>
        <p>Depois do diagnóstico, em proposta fechada por escrito. Sem surpresa no meio do caminho.</p></details>
      <details><summary>Atendem fora de Goiânia?</summary>
        <p>Sim. Com processo eletrônico, atuamos em todo o país.</p></details>
      <details><summary>Que tipo de cliente o escritório atende?</summary>
        <p>Empresas e empresários — de sociedades em estruturação a operações com contencioso recorrente.</p></details>
    </div>
  </div>
</section>
```

- [ ] **Step 2:** CSS:

```css
.faq-lista{max-width:46rem;border-top:1px solid var(--linha)}
.faq-lista details{border-bottom:1px solid var(--linha)}
.faq-lista summary{
  cursor:pointer;list-style:none;display:flex;justify-content:space-between;
  align-items:baseline;gap:2rem;padding:1.5rem 0;
  font-family:var(--display);font-weight:700;font-size:1.05rem;
}
.faq-lista summary::-webkit-details-marker{display:none}
.faq-lista summary::after{content:"+";color:var(--oliva);font-weight:600;font-size:1.3rem}
.faq-lista details[open] summary::after{content:"–"}
.faq-lista details p{color:var(--cinza);padding:0 0 1.6rem;max-width:60ch}
```

### Task 4: Verificação estrutural + commit

- [ ] **Step 1:** greps de gate (PowerShell/Grep):
  - PROIBIDO no arquivo: `Traga o caso`, `Saia com um mapa`, `Movimento contrário`, `exatamente onde`, `Excelência`
  - OBRIGATÓRIO no arquivo: `Agendar diagnóstico`, `Quatro territórios`, `sete coordenadas`, `Prevenção`, `Primeiro o diagnóstico`, `16°41′S`, `--oliva`, `id="faq"`
- [ ] **Step 2:** servir local (`python -m http.server` no diretório do site ou abrir o arquivo) e conferir render/console.
- [ ] **Step 3:** commit no estilo do repo (português, frase direta):

```bash
git add Escritorio/Site/index.html docs/superpowers/plans/2026-07-16-site-gso-redesign.md
git commit -m "Redesign do site GSO: cartografia de risco, copy nova, FAQ e cor oliva"
```

### Task 5: Deploy produção + verificação live

- [ ] **Step 1:** `deploy_to_vercel` com o `index.html` novo → projeto `gso-advogados`, target `production`, team `team_xKhQFzbhNnOOyy482gJ4rrH1`.
- [ ] **Step 2:** poll `get_deployment` até `READY`; conferir alias `gso-advogados.vercel.app`.
- [ ] **Step 3:** fetch da URL de produção e confirmar presença de `Agendar diagnóstico` e ausência de `Traga o caso`.
- [ ] **Step 4:** push do repo (`git push`) para manter GitHub espelhado.
