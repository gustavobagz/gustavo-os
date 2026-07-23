---
name: h2-deploy-workflow
description: Como migrar e deployar o H2 Administrativo (Vercel + Neon) sem quebrar produção
metadata: 
  node_type: memory
  type: project
  originSessionId: 26c11f3a-1039-4d63-8fd4-7acfbd039bf5
---

Projeto Vercel `h2-administrativo` (team gustavobagzs-projects), produção em https://h2-administrativo.vercel.app. Repo GitHub: gustavobagz/administrativoh2 (main = produção; push NÃO dispara deploy — usar `npx vercel --prod --yes`).

**Why:** o site é estático em `public/` (raiz de deploy do Vercel) + serverless em `/api` + Neon Postgres; migrações novas precisam rodar ANTES do deploy ou login/painel dão 500.

**How to apply:** (1) `npx vercel env pull .env.production.local --environment=production --yes` (com autorização do Gustavo); (2) carregar DATABASE_URL/SESSION_SECRET e `npm run db:migrate` (idempotente); (3) `npx vercel --prod --yes`; (4) smoke test: login visitante + GET /api/painel; (5) apagar os .env*.local. A suíte `scripts/testa-plataforma.js` escreve em produção — só rodar com autorização explícita. `scripts/testa-api.js` está obsoleto (testa fluxo removido). Em 2026-07-16 a plataforma redesign (spec/plano em docs/superpowers/) foi ao ar; pendências menores anotadas no review final: payload morto do painel (playbooks/marcos/etapas), duplicidade se colaboradores criarem login, CSP ainda com unsafe-inline.
