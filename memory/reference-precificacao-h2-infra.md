---
name: reference-precificacao-h2-infra
description: "Infra do app de precificação — URL, projeto Vercel, banco Neon e como publicar"
metadata: 
  node_type: memory
  type: reference
  originSessionId: c2361d6d-22c8-4ab6-939b-01c872893284
---

Infra da plataforma de precificação ([[project_precificacao_h2]]).

- **Produção:** https://precificacao-valores-h2.vercel.app
- **Projeto Vercel:** `precificacao-valores-h2` (team `team_xKhQFzbhNnOOyy482gJ4rrH1`)
- **Repositório:** github.com/gustavobagz/precificacaoevaloresh2 (privado). O código
  vive na subpasta `app-precificacao-h2/` do repo.
- **Banco:** Neon (`neondb`), **um só** — o `.env` local aponta para o mesmo banco de
  produção. Não existe ambiente de staging: rodar local mexe nos dados reais.

**Deploy: `git push origin main` basta.** O Root Directory do projeto na Vercel foi
configurado (para `app-precificacao-h2`) em 2026-07-13; antes disso *todo* deploy via
Git falhava com `missing_pages_app` e só o CLI (`vercel --prod` de dentro da pasta do
app) funcionava. Se voltar a falhar com esse erro, é o Root Directory de novo.

Migrações: `npx prisma migrate deploy` (nunca `migrate dev` — pode propor reset contra
o banco real). Sempre pedir autorização antes: ver [[feedback_deploy_autorizacao]].
