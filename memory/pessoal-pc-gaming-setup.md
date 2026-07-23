---
name: PC gaming setup do Gustavo
description: Hardware do PC do Gustavo, gargalos identificados e contexto de jogos
type: project
originSessionId: 90d6bde4-8928-4bd4-a175-409647692291
---
Hardware do Gustavo (verificado em 2026-04-26):
- CPU: AMD Ryzen 5 5500 (6c/12t, 3.6 GHz) — PCIe 3.0, sem 3D V-Cache, é gargalo em jogos modernos
- GPU: NVIDIA RTX 5060 8GB
- RAM: **16GB DDR4 single-channel** (1 pente só) rodando a 2666 MHz sem XMP — DOIS gargalos: single-channel + velocidade baixa
- Placa-mãe: Gigabyte B550M K (suporta PCIe 4.0 mas CPU limita; suporta Ryzen 5000 com BIOS recente — está na FD de mar/2024)
- SSD: NVMe 512GB (em 2026-04-26 estava com 117GB livres antes da limpeza, depois 173GB)
- Windows: 11 Pro 22H2 build 22621.4317 — desatualizado (24H2 disponível)
- Monitor: 1440p (resolução nativa detectada)

Quer jogar Crimson Desert (Pearl Abyss, engine BlackSpace, muito pesado).

**Why:** entender o sistema dele permite recomendar otimizações sem refazer diagnóstico em conversas futuras.

**How to apply:**
- Em qualquer conversa sobre desempenho de jogos / PC dele, lembre que CPU é o elo fraco e RAM single-channel 2666 é o gargalo prioritário.
- Recomendações de upgrade por ordem: (1) +16GB DDR4 3200 pra dual-channel ~R$ 250, (2) Ryzen 5 5600 ou 5700X3D na mesma placa, (3) SSD maior.
- Antes de re-recomendar tweaks já aplicados (Game Bar OFF, animações reduzidas, NVIDIA cache limpo), confirme se ainda valem — uma reinstalação do Windows reverteria tudo.
- Ele usa PJeOffice/Valid Agent (certificado digital) no startup — não recomendar desativar, é trabalho.
