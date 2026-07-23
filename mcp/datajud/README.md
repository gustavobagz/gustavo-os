# datajud-mcp — API Pública do DataJud (CNJ) dentro do OS

Servidor MCP local que dá ao Claude acesso aos metadados processuais da
**API Pública do DataJud/CNJ**. Registrado em `.mcp.json` na raiz do repo, com
caminho relativo — funciona em qualquer máquina que clone o repositório.

## Instalação em máquina nova

```powershell
cd mcp/datajud
npm install
```

`node_modules/` não é versionado. Fora isso, nada a configurar: a chave de
acesso do DataJud é **pública** e vem embutida no código.

## Ferramentas

| Ferramenta | Para quê |
|---|---|
| `consultar_processo` | Ficha do processo pelo número CNJ: classe, órgão julgador, assuntos, datas e movimentações recentes. Traz **todos os graus** encontrados (G1, G2, JE). |
| `movimentacoes` | Só o andamento, do mais recente ao mais antigo. Aceita `desde` (AAAA-MM-DD) — é a ferramenta de monitoramento de carteira. |
| `buscar_processos` | Busca por classe, órgão julgador, assunto, ano ou `query_bruta` (Elasticsearch). |
| `tribunais` | Descobre a que tribunal pertence um número CNJ, ou lista os aliases. |

O tribunal **não precisa ser informado**: é deduzido dos dígitos `J.TR` do
número único CNJ (`tribunais.js`). Validado contra os processos reais do
registro — TJGO, TJDFT, TRF1, TRT18 e TRT3 resolvem corretamente.

## Limites da fonte (importante)

- **Não há busca por nome de parte, CPF/CNPJ ou advogado.** A base do CNJ só
  expõe metadados; não indexa partes. Consulta é sempre pelo número.
- Não traz teor de decisões, petições nem documentos.
- Processos em **segredo de justiça** não aparecem.
- Os tribunais alimentam a base com **defasagem** (dias a semanas). Nunca usar
  o DataJud como fonte única para prazo — conferir no PJe/Projudi/eproc.
- O CNJ aplica rate limit (HTTP 429); o cliente já repete com backoff.

## Manutenção

- `npm run check` — bate todos os ~90 aliases contra a API. Se **tudo** falhar
  com 401/403, o CNJ trocou a chave pública: pegar a nova em
  https://datajud-wiki.cnj.jus.br/api-publica/acesso/ e ou atualizar
  `CHAVE_PUBLICA_CNJ` em `datajud.js`, ou definir a variável de ambiente
  `DATAJUD_API_KEY` (que tem prioridade).

## Arquivos

- `server.js` — registro das 4 ferramentas MCP (stdio)
- `datajud.js` — cliente HTTP, chave, timeout e retentativa
- `tribunais.js` — parsing do número único CNJ e mapa de aliases
- `formatar.js` — formatação compacta dos resultados
- `scripts/validar-aliases.js` — verificação de saúde
