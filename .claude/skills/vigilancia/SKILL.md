---
name: vigilancia
description: Varredura de vigilância do OS — confere o que vence, o que está parado e o que divergiu entre as fontes, nas duas frentes. Usar quando Gustavo pedir "vigilância", "o que está vencendo", "o que passou batido", "auditoria", ou via rotina semanal. Diferente do /briefing (que mostra o dia), esta skill CAÇA o que ninguém viu.
---

# /vigilancia — o que ninguém está olhando

> **Por que esta skill existe.** Em 2026-07-22 uma varredura documental encontrou
> ~40 fatos críticos que nenhum registro continha: confissão de dívida assinada 13
> dias antes e não vista, revelia na OAB decretada em março descoberta em julho,
> R$ 611 mil faturados sem contrato, o maior contrato do acervo (R$ 1,6 mi/mês)
> ausente do inventário, seis certidões vencidas. **Nenhum foi falha de geração —
> todos foram falha de detecção.** Esta skill é a correção estrutural disso.
>
> `/briefing` mostra o dia a partir do que ESTÁ registrado.
> `/vigilancia` procura o que DEVERIA estar e não está.

## Filtro por frente
- `/vigilancia` — as duas (padrão) · `/vigilancia h2` · `/vigilancia escritorio`

## As 4 varreduras (executar nesta ordem)

### 1. Vencimentos
- `H2/Governanca/vencimentos.md` → vencidos + o que vence em 30/60/90 dias
- `Escritorio/Peticoes/casos.md` (tabela de Prazos) → prazos em 7 dias, destacando hoje/amanhã
- `Escritorio/Financeiro/honorarios.md` → parcelas vencidas; propostas paradas há mais de 30 dias
- `H2/Operacoes/contratos.md` → vigências e avisos de renovação em 30 dias; certames com sessão marcada

### 2. Paralisia (o que está parado tempo demais)
Sinalizar item cuja última movimentação registrada tenha mais de:
- **30 dias** para caso com prazo processual em curso
- **60 dias** para proposta comercial enviada e sem resposta
- **90 dias** para pendência de governança marcada "Alta"

Paralisia é sintoma de esquecimento, não de estratégia — perguntar, não presumir.

### 3. Divergência entre fontes
Confrontar e listar toda discordância (**não corrigir sozinho — reportar**):
- Registros do repo × **painel jurídico** — ⚠️ o repo é a fonte da verdade
  (ver `memory/hierarquia-fontes-repo-painel.md`); onde divergir, **o painel é que
  deve ser corrigido**
- Registros × **h2-mcp** (`listar_contratos`, `dados_societarios`, `riscos_estruturais`)
- Números de processo, valores de causa e CNPJ que apareçam diferentes em lugares diferentes
- Itens marcados com ⚠️ nos registros e ainda não resolvidos

### 4. Ingestão do delta (o que entrou e ninguém registrou)
- `mcp__h2__inventario_drive` → arquivos novos desde a última varredura, por classe
- Pastas locais de trabalho (`Downloads`, `OneDrive/Documentos/ADVOGADO`) → documentos
  mais recentes que o último registro do caso correspondente
- Para PDF escaneado sem texto, usar `mcp__h2__ocr_pdf` antes de descartar como ilegível
- **Todo documento novo relevante vira linha em registro** — nunca ficar só no relatório

## Formato de saída

```
# Vigilância — DD/MM/AAAA

## 🔴 Vencido / perdido
(o que já passou do prazo — o mais grave primeiro)

## ⏰ Vence em até 30 dias
(item · data · providência · dias restantes)

## 🕸️ Parado demais
(item · dias sem movimentação · última ação conhecida)

## ⚠️ Divergências entre fontes
(fato A na fonte X ≠ fato B na fonte Y — o que conferir)

## 📥 Entrou e não foi registrado
(documento · onde está · em que registro deveria entrar)

## ✅ Registrado nesta varredura
(o que a skill já gravou nos registros)
```

## Regras

- **Separar as frentes.** Achado da H2 nunca entra em registro do escritório e vice-versa.
  Se um documento estiver na pasta errada, reportar como problema de higiene.
- **Não inventar.** Se um dado não foi encontrado, escrever "não localizado".
  Ausência de comprovante é indício, **não** prova — dizer isso explicitamente
  (foi assim que se concluiu, corretamente, que peças não haviam sido protocoladas;
  mas em 2026-07-22 duas dessas conclusões estavam erradas — MS ProUni e RHC).
- **Gravar o que for certo, reportar o que for dúvida.** Fato confirmado por documento
  vai direto ao registro. Divergência entre fontes vira alerta para Gustavo decidir —
  nunca sobrescrever a fonte da verdade com base em palpite.
- **Datas em AAAA-MM-DD.** Alterações relevantes → commit.
- ⚠️ **Uma sessão por vez neste repo.** Em 2026-07-22 duas sessões concorrentes
  sobrescreveram o trabalho uma da outra.
