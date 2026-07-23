#!/usr/bin/env node
// Servidor MCP da API Publica do DataJud (CNJ).
// Transporte: stdio. Registrado no repo em .mcp.json.

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';

import { buscar, extrairHits, DataJudError } from './datajud.js';
import { AVISO_ESCOPO, ficha, linhasMovimentos, movimentosOrdenados, resumoLinha } from './formatar.js';
import { normalizarAlias, parseNumeroCNJ, todosAliases } from './tribunais.js';

const texto = (t) => ({ content: [{ type: 'text', text: t }] });
const erro = (t) => ({ content: [{ type: 'text', text: t }], isError: true });

/**
 * Resolve o alias do tribunal: o informado pelo usuario tem prioridade;
 * senao, deduz do proprio numero CNJ.
 */
function resolverAlias(numero, tribunal) {
  if (tribunal) {
    const alias = normalizarAlias(tribunal);
    if (!alias) throw new Error(`Tribunal "${tribunal}" nao reconhecido. Use a ferramenta "tribunais" para ver os aliases validos.`);
    return { alias, cnj: parseNumeroCNJ(numero) };
  }
  const cnj = parseNumeroCNJ(numero);
  if (!cnj) throw new Error(`"${numero}" nao e um numero unico CNJ valido (precisa de 20 digitos). Informe o parametro "tribunal" para consultar assim mesmo.`);
  if (!cnj.alias) throw new Error(`O segmento ${cnj.segmento} (${cnj.segmentoNome}) do numero ${cnj.formatado} nao esta na API publica do DataJud.`);
  return { alias: cnj.alias, cnj };
}

/** Consulta um numero de processo e devolve todos os graus encontrados. */
async function buscarPorNumero(alias, cnj, numero) {
  const chave = cnj?.digitos ?? String(numero).replace(/\D/g, '');
  const resposta = await buscar(alias, {
    size: 10,
    query: { match: { numeroProcesso: chave } },
  });
  return extrairHits(resposta);
}

const server = new McpServer({ name: 'datajud', version: '1.0.0' });

server.registerTool(
  'consultar_processo',
  {
    title: 'Consultar processo no DataJud',
    description:
      'Consulta os metadados publicos de um processo pelo numero unico CNJ (com ou sem mascara). ' +
      'O tribunal e deduzido do proprio numero — so informe "tribunal" se a deducao falhar. ' +
      'Retorna classe, orgao julgador, assuntos, datas e as movimentacoes mais recentes de cada grau.',
    inputSchema: {
      numero: z.string().describe('Numero unico CNJ, ex.: 5075206-17.2025.8.09.0006'),
      tribunal: z.string().optional().describe('Alias do tribunal (tjgo, trt18, trf1...). Opcional.'),
      movimentos: z.number().int().min(0).max(500).default(15)
        .describe('Quantos movimentos recentes trazer por grau. 0 = nenhum.'),
    },
  },
  async ({ numero, tribunal, movimentos }) => {
    try {
      const { alias, cnj } = resolverAlias(numero, tribunal);
      const { itens } = await buscarPorNumero(alias, cnj, numero);
      if (!itens.length) {
        return texto(
          `Nenhum processo encontrado para ${cnj?.formatado ?? numero} em **${alias.toUpperCase()}**.\n\n` +
          'Causas possiveis: segredo de justica, processo ainda nao replicado para o DataJud, ' +
          'numero incorreto, ou tribunal diferente do deduzido.\n\n' + AVISO_ESCOPO,
        );
      }
      const fichas = itens.map((p) => ficha(p, { limiteMovimentos: movimentos }));
      const cabeca = itens.length > 1 ? `${itens.length} registros (graus distintos) em ${alias.toUpperCase()}:\n\n` : '';
      return texto(`${cabeca}${fichas.join('\n\n---\n\n')}\n\n${AVISO_ESCOPO}`);
    } catch (e) {
      return erro(e instanceof DataJudError ? e.message : `Erro: ${e.message}`);
    }
  },
);

server.registerTool(
  'movimentacoes',
  {
    title: 'Movimentacoes de um processo',
    description:
      'Lista so o andamento de um processo, do mais recente para o mais antigo. ' +
      'Use "desde" para ver o que mexeu depois de uma data — util para monitorar carteira.',
    inputSchema: {
      numero: z.string().describe('Numero unico CNJ'),
      tribunal: z.string().optional().describe('Alias do tribunal. Opcional — deduzido do numero.'),
      desde: z.string().optional().describe('Data AAAA-MM-DD: so movimentos a partir dela'),
      limite: z.number().int().min(1).max(500).default(30).describe('Maximo de movimentos'),
    },
  },
  async ({ numero, tribunal, desde, limite }) => {
    try {
      const { alias, cnj } = resolverAlias(numero, tribunal);
      const { itens } = await buscarPorNumero(alias, cnj, numero);
      if (!itens.length) return texto(`Nenhum processo encontrado para ${cnj?.formatado ?? numero} em ${alias.toUpperCase()}.\n\n${AVISO_ESCOPO}`);

      const blocos = itens.map((p) => {
        let movs = movimentosOrdenados(p);
        const totalBruto = movs.length;
        if (desde) movs = movs.filter((m) => String(m?.dataHora ?? '') >= desde);
        const corte = movs.slice(0, limite);
        const titulo = `**${p.numeroProcesso} — ${p.tribunal} ${p.grau}** (${p.orgaoJulgador?.nome ?? '—'})`;
        if (!corte.length) {
          return `${titulo}\n_Nenhum movimento${desde ? ` a partir de ${desde}` : ''} (total no processo: ${totalBruto})._`;
        }
        const nota = desde ? ` desde ${desde}` : '';
        return `${titulo}\n${corte.length} de ${totalBruto} movimentos${nota}:\n${linhasMovimentos(corte).join('\n')}`;
      });
      return texto(`${blocos.join('\n\n')}\n\n${AVISO_ESCOPO}`);
    } catch (e) {
      return erro(e instanceof DataJudError ? e.message : `Erro: ${e.message}`);
    }
  },
);

server.registerTool(
  'buscar_processos',
  {
    title: 'Buscar processos por filtros',
    description:
      'Busca processos num tribunal por classe, orgao julgador, ano de ajuizamento ou assunto. ' +
      'ATENCAO: o DataJud nao indexa nomes de partes nem de advogados — nao ha como buscar por pessoa. ' +
      'Para casos complexos, passe "query_bruta" com um corpo Elasticsearch.',
    inputSchema: {
      tribunal: z.string().describe('Alias do tribunal, ex.: tjgo, trt18, trf1'),
      classe_codigo: z.number().int().optional().describe('Codigo da classe processual (TPU/CNJ)'),
      orgao_julgador_codigo: z.number().int().optional().describe('Codigo do orgao julgador'),
      assunto_codigo: z.number().int().optional().describe('Codigo do assunto (TPU/CNJ)'),
      ano_ajuizamento: z.number().int().min(1990).max(2100).optional().describe('Ano de ajuizamento'),
      grau: z.string().optional().describe('G1, G2, JE...'),
      query_bruta: z.record(z.any()).optional().describe('Corpo Elasticsearch completo — ignora os demais filtros'),
      tamanho: z.number().int().min(1).max(50).default(10).describe('Quantos resultados'),
    },
  },
  async ({ tribunal, classe_codigo, orgao_julgador_codigo, assunto_codigo, ano_ajuizamento, grau, query_bruta, tamanho }) => {
    try {
      const alias = normalizarAlias(tribunal);
      if (!alias) return erro(`Tribunal "${tribunal}" nao reconhecido. Use a ferramenta "tribunais".`);

      let corpo;
      if (query_bruta) {
        corpo = query_bruta;
      } else {
        const must = [];
        if (classe_codigo !== undefined) must.push({ match: { 'classe.codigo': classe_codigo } });
        if (orgao_julgador_codigo !== undefined) must.push({ match: { 'orgaoJulgador.codigo': orgao_julgador_codigo } });
        if (assunto_codigo !== undefined) must.push({ match: { 'assuntos.codigo': assunto_codigo } });
        if (grau) must.push({ match: { grau } });
        if (ano_ajuizamento !== undefined) {
          must.push({ range: { dataAjuizamento: { gte: `${ano_ajuizamento}0101`, lte: `${ano_ajuizamento}1231235959` } } });
        }
        if (!must.length) return erro('Informe pelo menos um filtro (classe_codigo, orgao_julgador_codigo, assunto_codigo, ano_ajuizamento ou grau) ou use query_bruta.');
        corpo = { size: tamanho, query: { bool: { must } }, sort: [{ dataAjuizamento: { order: 'desc' } }] };
      }

      const { total, itens } = extrairHits(await buscar(alias, corpo));
      if (!itens.length) return texto(`Nenhum resultado em ${alias.toUpperCase()} para esses filtros.\n\n${AVISO_ESCOPO}`);
      return texto(
        `${itens.length} de ${total} resultados em **${alias.toUpperCase()}**:\n\n` +
        `${itens.map(resumoLinha).join('\n')}\n\n${AVISO_ESCOPO}`,
      );
    } catch (e) {
      return erro(e instanceof DataJudError ? e.message : `Erro: ${e.message}`);
    }
  },
);

server.registerTool(
  'tribunais',
  {
    title: 'Tribunais e aliases do DataJud',
    description:
      'Resolve o tribunal de um numero de processo CNJ, ou lista os aliases disponiveis na API publica. ' +
      'Use quando a consulta falhar por tribunal nao reconhecido.',
    inputSchema: {
      numero: z.string().optional().describe('Numero CNJ para descobrir a que tribunal pertence'),
      filtro: z.string().optional().describe('Texto para filtrar a lista de aliases, ex.: "trt" ou "tj"'),
    },
  },
  async ({ numero, filtro }) => {
    if (numero) {
      const cnj = parseNumeroCNJ(numero);
      if (!cnj) return erro(`"${numero}" nao tem 20 digitos — nao e um numero unico CNJ.`);
      return texto(
        [
          `**${cnj.formatado}**`,
          `- Segmento: ${cnj.segmento} — ${cnj.segmentoNome}`,
          `- Codigo do tribunal: ${cnj.codigoTribunal}`,
          `- Ano: ${cnj.ano} · unidade de origem: ${cnj.origem}`,
          `- Alias DataJud: ${cnj.alias ? `**${cnj.alias}** (api_publica_${cnj.alias})` : '— nao disponivel na API publica'}`,
        ].join('\n'),
      );
    }
    const lista = todosAliases().filter((a) => !filtro || a.includes(String(filtro).toLowerCase()));
    if (!lista.length) return texto(`Nenhum alias contem "${filtro}".`);
    return texto(`${lista.length} aliases:\n\n${lista.join(' · ')}`);
  },
);

await server.connect(new StdioServerTransport());
