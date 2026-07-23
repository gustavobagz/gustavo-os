---
name: os-memoria-sincronizada
description: A memória do Claude é versionada em memory/ no repo gustavo-os e sincroniza entre computadores via git; memory/ é a fonte da verdade
metadata:
  type: project
---

A partir de 2026-07-22, a memória do Claude deixou de viver só fora do repo
(em `~/.claude/projects/<slug>/memory/`) e passou a ser **versionada dentro do
OS**, na pasta `memory/` do repositório `gustavo-os`.

**Why:** as memórias eram locais de cada máquina e não viajavam por git — ao
trabalhar em outro computador, o que era criado lá se perdia. Consolidar tudo
em `memory/` no repo faz a memória viajar junto com o resto do OS.

**How to apply:**
- `memory/` no repo é a **fonte da verdade** da memória. Ao criar/editar uma
  memória, ela acaba aqui (a pasta viva do Claude é espelhada para cá).
- O `scripts/sync-os.ps1` roda no logon e espelha `pasta-viva-do-Claude ↔ memory/`
  nos dois sentidos (captura memória local → commita → pull/rebase → push →
  reflete de volta na pasta viva). Não foi usada junction porque o harness
  protege `.claude` de alteração.
- A consolidação inicial (40+ arquivos espalhados em 11 pastas de projeto desta
  máquina) foi feita pelo `scripts/importar-memoria-claude.ps1`.
- ⚠️ `reference-h2-mcp-credentials.md` guarda e-mail de service account e caminhos
  de chave (não a chave em si). O repo é privado, mas ter isso em mente.
