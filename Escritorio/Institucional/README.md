# Identidade visual — GO Advogados (Gustavo de Oliveira Advogados)

Logomarca oficial do escritório: conceito "contemporâneo — GO ponto"
(rebrand aprovado em 2026-07-16; evolução do lockup GSO de mesma data,
com remoção do S). Texto convertido em curvas nos SVGs — renderiza
idêntico em qualquer máquina, sem depender de fonte instalada.

Nome por extenso: **Gustavo de Oliveira Advogados** · Sigla: **GO·**
E-mail institucional: **gustavodeoliveira@goadvogados.com.br**

## Paleta
| Uso | Cor | Hex |
|-----|-----|-----|
| Sigla (fundo claro) | Grafite | `#1C2127` |
| Ponto (fundo claro) | Bronze | `#A57B45` |
| Sigla (fundo escuro) | Marfim frio | `#EDEAE3` |
| Ponto (fundo escuro) | Ouro envelhecido | `#C29A63` |
| Fundo claro de referência | Papel | `#FAFAF8` |

Tipografia de origem: Segoe UI Black (sigla) + Segoe UI Semibold (ADVOGADOS).

## Arquivos
| Arquivo | Quando usar |
|---------|-------------|
| `logo-go-principal.svg/.png` | Padrão — documentos, site, propostas (fundo claro; PNG transparente 1589×1094) |
| `logo-go-fundo-escuro.svg/.png` | Sobre fundos escuros (slides, rodapé de site) |
| `logo-go-mono-preto.svg` | Impressão P&B, carimbo, fax judicial |
| `logo-go-mono-branco.svg` | Sobreposição em foto/fundo colorido escuro |
| `simbolo-go.svg` | Sigla isolada GO· sem "ADVOGADOS", transparente |
| `avatar-go-escuro-1024.png` | Avatar WhatsApp/LinkedIn/Instagram (preferencial) |
| `avatar-go-claro-1024.png` | Avatar em contextos que exigem fundo claro |
| `retrato do fundador` | Repo público github.com/gustavobagz/go-advogados-assets (versão web 800px) |

## Regras de uso
- Não esticar, não rotacionar, não trocar as cores fora da paleta.
- Área de respiro mínima: a altura do ponto bronze em todos os lados.
- Tamanho mínimo do lockup completo: ~110 px de largura; abaixo disso,
  usar só a sigla (`simbolo-go.svg`).
- Regeneração: os SVGs derivam dos paths em curvas do lockup original
  (G e O reaproveitados; O e ponto deslocados via `transform`). Pedir ao
  Claude Code, que reconstrói a partir de `logo-go-principal.svg`.
- Papel timbrado: `Escritorio/Modelos/timbrado-go.docx` (gerador:
  `scripts/build-timbrado-go.js`).

## Legado (removido do repo em 2026-07-16, recuperável no git)
Versões GSO: `logo-gso-*`, `simbolo-gso.svg`, `avatar-gso-*`,
`timbrado-gso.docx/pdf`, `scripts/build-timbrado-gso.js`.
