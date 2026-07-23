---
name: MJ Control project context
description: Personal sales-control app being migrated from Manus platform to Netlify + Turso
type: project
originSessionId: fcfee090-3e43-4068-80ba-f5d90bdcb944
---
MJ Control is a personal sales-management app (clients, orders, stock by dosage 2.5mg–15mg) at `C:\Users\Gustavo\Downloads\mj-control`. Originally generated on the Manus platform with React 19 + tRPC + Drizzle + MySQL + Manus OAuth + S3.

**Why:** Migrating to user-hosted Netlify + Turso (libSQL) because Manus auth is proprietary and they want full ownership. Solo use (1 user), no auth needed (secret URL approach).

**How to apply:** Design spec at `docs/superpowers/specs/2026-05-19-mj-control-redesign-design.md`, implementation plan at `docs/superpowers/plans/2026-05-19-mj-control-redesign.md`. Scope v1: Dashboard + Pedidos + Clientes + Estoque only. Cut financeiro, relatórios, lotes, movimentações. Stock simplified to 6 fixed rows (one per dosagem) with manual adjustments. Region filter is UF/cidade-based.
