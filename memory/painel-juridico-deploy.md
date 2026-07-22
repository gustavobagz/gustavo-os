---
name: painel-juridico-deploy
description: Onde vive o código do Painel do Pilar Jurídico H2 e como ele publica na Vercel
metadata: 
  node_type: memory
  type: reference
  originSessionId: d8ec9942-9ea2-4ff7-ae03-30401db19705
  modified: 2026-07-20T15:09:37.907Z
---

O **Painel do Pilar Jurídico** (`paineljuridicoh2.vercel.app`) é um app Next.js 14.

- **Fonte da verdade:** GitHub `gustavobagz/paineldopilarjuridico` (privado). NÃO está no repo `gustavo-os`. A pasta local `OneDrive/Projetos/paineldopilarjuridico` só tem `.next` (build), sem fonte — clonar do GitHub para editar.
- **Deploy:** integração Git da Vercel (sem `vercel.json`, sem GitHub Actions). `git push` na `main` publica direto em produção.
- **Atenção:** a conta Vercel conectada pelo MCP (`team gustavobagzs-projects`) está VAZIA — este painel e os outros apps H2 vivem em outra conta/escopo Vercel, fora do alcance do MCP. Não dá para controlar/monitorar o deploy pelo MCP; validar buildando local (`npm run build`) antes de dar push.
- Stack: Next 14 + Vercel Blob (persistência num JSON) + Geist. Abas: Hoje, Trilha, Demandas, Contratos, CRM & CNPJ, Editais, Obrigações, Pilar Jurídico, Contencioso, Matriz de Riscos.
