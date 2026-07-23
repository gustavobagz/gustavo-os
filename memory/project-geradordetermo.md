---
name: Projeto geradordetermo
description: Gerador de declarações em .docx da H2 Soluções em Saúde — contexto de uso, restrições e decisões arquiteturais
type: project
originSessionId: 8fcaeedc-2dad-4be9-9bc1-0cd46cf366f2
---
Projeto em `C:\Users\Gustavo\Projetos\geradordetermo` (clone de https://github.com/gustavobagz/geradordetermo, deploy automático em https://geradordetermo-nine.vercel.app via Vercel ao push em `main`).

Gera declarações em .docx para uso interno da H2 (assinadas pelo Dr. Guilherme Ferreira de Almeida, Sócio Administrador). Algumas pessoas do administrativo preenchem **poucas vezes por semana** — não é um sistema de alto volume.

**Why:** Sistema interno de baixa frequência, sem necessidade de backend/multiusuário/sync entre dispositivos. Estado mora em `localStorage` (chave `h2-gerador-v1`) com backup JSON manual via export/import. Médicos e unidades hospitalares ficam cadastrados localmente para evitar redigitação.

**How to apply:** Antes de propor sync entre máquinas, multi-usuário, backend ou framework SPA, lembrar que o volume não justifica complexidade — preserve a arquitetura estática (HTML+CSS+JS sem build, libs via CDN). Mudanças de conteúdo nos .docx devem preservar header com logo H2, footer com paginação e assinatura padronizada.
