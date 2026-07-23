# Memória do Claude — OS Gustavo

> Fonte da verdade da memória, versionada no repo e sincronizada entre
> computadores (ver [os-memoria-sincronizada](os-memoria-sincronizada.md)).
> Consolidada de 11 pastas de projeto em 2026-07-22.

## 🔧 OS / infraestrutura
- [Memória sincronizada](os-memoria-sincronizada.md) — memory/ é a fonte da verdade; sync bidirecional via sync-os.ps1; consolidação em 2026-07-22
- [Hierarquia de fontes: repo × painel](hierarquia-fontes-repo-painel.md) — o repo gustavo-os é a fonte da verdade; o painel jurídico complementa (SLA/workflow/trilha); onde divergirem, o repo prevalece
- [CashDoc — taxa é 6,5%](cashdoc-taxa-6-5.md) — confirmado por Gustavo; documentos com 7,5% ou valor fixo por plantão são legado e não devem alterar a skill

## 👤 Usuário / perfil
- [Perfil H2](user-profile-h2.md) — Gustavo, gestor/dev interno da H2 (Goiânia/GO); pt-BR, respostas curtas e diretas
- [Perfil advocacia](user-profile-advocacia.md) — Gustavo Gabryel Santos de Oliveira, OAB/GO 66.404, CPF 703.336.971-97; cível cobrança/execução no TJGO/PROJUDI
- [Perfil gerente jurídico](user-profile-gerente-juridico.md) — advogado interno + conselheiro estratégico H2; framework Diagnóstico→Risco→Impacto→Solução; paleta advocacia navy, nunca verde H2
- [Perfil H2 administrativo](user-profile-h2-admin.md) — não-dev; prefere múltipla escolha e que eu conduza o técnico ponta a ponta
- [Papel — advogado TJGO](user-role-advogado-tjgo.md) — litigância cível (Projudi), clientes PJ em cobrança/execução
- [Idioma e estilo](user-language.md) — pt-BR; respostas curtas (às vezes só uma letra); oferecer múltipla escolha
- [Hardware do PC](user-hardware.md) — Ryzen 5 5500 + RTX 5060 + 16GB + NVMe; tokens de certificado (Valid/ePass/SafeNet) no startup — não desabilitar

## 🛠️ Como trabalhar comigo (feedback/estilo)
- [Deploy sempre autorizado antes](feedback-deploy-autorizacao.md) — publicar em produção / migrar banco só depois de perguntar; autorização vale só para aquela entrega
- [PowerShell corrompe UTF-8](feedback-powershell-encoding.md) — nunca editar código com acento via Get-Content/Set-Content; usar a ferramenta Edit
- [Estilo de execução](feedback-execution-style.md) — em auto mode, executar inline e consolidar commits para projetos pequenos
- [Quer reformulação, não maquiagem](feedback-ambicao-estrutural.md) — "mais profissional" ≠ CSS; ler o modelo de dados antes de propor UI
- [Dado ausente não é zero](feedback-dado-ausente-nao-e-zero.md) — nunca exibir R$ 0,00 para valor não cadastrado (use "—"); zero legítimo continua zero
- [Evitar monitória com WhatsApp](feedback-monitoria-whatsapp.md) — juízo local não aceita print de WhatsApp no rito monitório; preferir procedimento comum
- [Evitar tutela de urgência em cobrança](feedback-tutela-urgencia.md) — juízo local indefere; reservar constrição para cumprimento de sentença

## 🏥 H2 — estratégia e governança
- [Modelo de contratação médica](project-h2-modelo-contratacao.md) — intermediária MG/DF/BA+GO; S.A. acionista frágil; Cremesp 397/2026 veda SCP e intermediação; rumo = PJ direta + H2 prestadora institucional
- [Dados institucionais H2](reference-h2-dados.md) — razões sociais, CNPJs (S.A. 53.304.656/0001-64, Ltda. 04.189.941/0001-76), sede QS Tower, signatário Dr. Guilherme
- [Identidade visual H2](reference-h2-brand-identity.md) — verde-pinho #1A4945, turquesa #32ACA2; visual arredondado/leve

## 🏥 H2 — sistemas em produção
- [Painel Jurídico (produto)](project-h2-painel-juridico.md) — Next.js na Vercel; dados no Blob (local mostra só o seed); agenda temporal + ficha 360º; SLA ≠ prazo_solicitado; sem login por decisão
- [Painel Jurídico (código/deploy)](painel-juridico-deploy.md) — fonte no GitHub gustavobagz/paineldopilarjuridico; push na main publica; conta Vercel do MCP é outra (vazia)
- [Precificação H2 (projeto)](project-precificacao-h2.md) — substitui as planilhas; em Downloads\APP PROPOSTA H2; linhas mensais (×12), sugestão por mediana; dark mode e tabela Especialidade pendentes
- [Precificação H2 (app/features)](project-precificacao-h2-app.md) — detalhe de fórmulas, seed de 9 unidades, DRE consolidada, modo claro/escuro; substitui 51 planilhas
- [Precificação H2 (infra)](reference-precificacao-h2-infra.md) — precificacao-valores-h2.vercel.app; deploy = push na main; Neon único (local mexe em dados reais)
- [Precificação H2 (cadastro/deploy)](reference-precificacao-cadastro-deploy.md) — seed scripts de hospital; pegadinhas (prisma db push falha no Neon pooler, Git Bash paths)
- [Gerador de declarações](project-geradordetermo.md) — SPA estático interno da H2 (.docx); deploy Vercel; estado em localStorage; baixo volume, sem backend
- [Gerador de termos S.A.](project-termosdah2sa.md) — termos de cessão de ações; fonte em termodeadesaoATUAL; público em h2-termos-web.vercel.app; marcador "PJ PARA PF" inverte sentido
- [H2 Administrativo](project-h2-administrativo.md) — Vercel h2-administrativo + Neon; migrar ANTES do deploy; push NÃO dispara deploy (usar vercel --prod)
- [h2-mcp (servidor)](project-h2-mcp.md) — MCP local que dá conhecimento institucional da H2 ao Claude Desktop; Resources + Tools; JSON modular
- [h2-mcp (credenciais)](reference-h2-mcp-credentials.md) — Service Account (token permanente); e-mail SA e caminho de chave ⚠️ sensível
- [Inventário Drive H2](reference-h2-drive-inventory.md) — tool inventario_drive; ~500 arquivos em 24 classes; reindex via npm run reindex
- [Claude Desktop config (MS Store)](reference-claude-desktop-config-path.md) — config real fica no sandbox AppData\Local\Packages, não em Roaming\Claude

## ⚖️ Escritório — casos e clientes
- [Caso SORVPAN × Duarte](escritorio-caso-sorvpan-x-duarte.md) — proc. 5380538-23.2024.8.09.0006 (Goianópolis-GO); citações frustradas; próx. passo: pesquisa de endereço / edital
- [Caso Villa B × Laiza](escritorio-caso-villab-x-laiza.md) — Lucas Andrade Gomes × Laiza Lagares; R$ 18.998,62; ação de cobrança c/c indenização no JEC Anápolis
- [Caso HC TRF1](escritorio-caso-hc-trf1.md) — HC 1012203-98.2026.4.01.0000 denegado pela 4ª Turma TRF1 (28/04/2026); fase de RHC ao STJ
- [Cliente vereadora (CCJ Anápolis)](escritorio-cliente-vereadora.md) — vereadora presidente da CCJ, base do prefeito; análises de defesa dos projetos do Executivo

## 🎮 Pessoal
- [PC gaming setup](pessoal-pc-gaming-setup.md) — gargalos (CPU Ryzen 5 5500, RAM single-channel 2666); alvo Crimson Desert
- [MJ Control](project-mj-control.md) — app pessoal de vendas migrando de Manus → Netlify+Turso; uso solo, v1 = dashboard/pedidos/clientes/estoque
