// Cliente HTTP da API Publica do DataJud (CNJ).
//
// A API e um Elasticsearch somente-leitura exposto pelo CNJ. Autenticacao por
// chave PUBLICA, publicada em https://datajud-wiki.cnj.jus.br/api-publica/acesso/
// (o CNJ pode trocar a chave a qualquer momento — nesse caso, definir
// DATAJUD_API_KEY no ambiente sobrescreve o valor embutido).

const BASE = 'https://api-publica.datajud.cnj.jus.br';

const CHAVE_PUBLICA_CNJ =
  'cDZHYzlZa0JadVREZDJCendQbXY6SkJlTzNjLV9TRENyQk1RdnFKZGRQdw==';

const TIMEOUT_MS = 45_000;
const TENTATIVAS = 3;
const ESPERA_BASE_MS = 1_500;

const dormir = (ms) => new Promise((r) => setTimeout(r, ms));

export class DataJudError extends Error {
  constructor(mensagem, { status, corpo } = {}) {
    super(mensagem);
    this.name = 'DataJudError';
    this.status = status;
    this.corpo = corpo;
  }
}

function chave() {
  return process.env.DATAJUD_API_KEY?.trim() || CHAVE_PUBLICA_CNJ;
}

/**
 * POST /_search no indice de um tribunal, com retentativa.
 * O CNJ limita requisicoes (429) e indices grandes as vezes estouram o timeout
 * na primeira chamada — os dois casos valem uma nova tentativa.
 * `alias` ja deve vir normalizado.
 */
export async function buscar(alias, query) {
  let ultimoErro;
  for (let tentativa = 1; tentativa <= TENTATIVAS; tentativa++) {
    try {
      return await buscarUmaVez(alias, query);
    } catch (erro) {
      ultimoErro = erro;
      const valeRepetir =
        erro instanceof DataJudError &&
        (erro.status === 429 || erro.status === undefined || erro.status >= 500);
      if (!valeRepetir || tentativa === TENTATIVAS) throw erro;
      await dormir(ESPERA_BASE_MS * 2 ** (tentativa - 1));
    }
  }
  throw ultimoErro;
}

async function buscarUmaVez(alias, query) {
  const url = `${BASE}/api_publica_${alias}/_search`;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  let resposta;
  try {
    resposta = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `APIKey ${chave()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(query),
      signal: controller.signal,
    });
  } catch (erro) {
    if (erro.name === 'AbortError') {
      throw new DataJudError(`Timeout (${TIMEOUT_MS / 1000}s) consultando ${alias}.`);
    }
    throw new DataJudError(`Falha de rede consultando ${alias}: ${erro.message}`);
  } finally {
    clearTimeout(timer);
  }

  const texto = await resposta.text();

  if (!resposta.ok) {
    const dica =
      resposta.status === 401 || resposta.status === 403
        ? ' A chave publica do CNJ pode ter sido trocada — conferir em https://datajud-wiki.cnj.jus.br/api-publica/acesso/ e definir DATAJUD_API_KEY.'
        : resposta.status === 404
          ? ` O alias "${alias}" nao existe na API publica.`
          : resposta.status === 429
            ? ' Limite de requisicoes do CNJ atingido — aguardar e repetir.'
            : '';
    throw new DataJudError(`DataJud respondeu ${resposta.status} para ${alias}.${dica}`, {
      status: resposta.status,
      corpo: texto.slice(0, 500),
    });
  }

  try {
    return JSON.parse(texto);
  } catch {
    throw new DataJudError(`Resposta nao-JSON de ${alias}: ${texto.slice(0, 200)}`);
  }
}

/** Extrai os _source dos hits, com o total encontrado. */
export function extrairHits(resposta) {
  const hits = resposta?.hits?.hits ?? [];
  return {
    total: resposta?.hits?.total?.value ?? hits.length,
    itens: hits.map((h) => h._source).filter(Boolean),
  };
}

/** "20240628000000" ou ISO -> "2024-06-28". Devolve o original se nao reconhecer. */
export function formatarData(valor) {
  if (!valor) return '—';
  const s = String(valor);
  if (/^\d{14}$/.test(s)) return `${s.slice(0, 4)}-${s.slice(4, 6)}-${s.slice(6, 8)}`;
  if (/^\d{4}-\d{2}-\d{2}/.test(s)) return s.slice(0, 10);
  return s;
}

/** Data-hora ISO -> "2025-03-31 17:29". */
export function formatarDataHora(valor) {
  if (!valor) return '—';
  const s = String(valor);
  const m = s.match(/^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2})/);
  return m ? `${m[1]} ${m[2]}` : formatarData(s);
}

export { BASE };
