// Formatacao dos metadados do DataJud em texto compacto.
// O _source de um processo traz o historico inteiro de movimentos (pode passar
// de 100 itens), entao aqui sempre se corta o que nao foi pedido.

import { formatarData, formatarDataHora } from './datajud.js';
import { parseNumeroCNJ } from './tribunais.js';

/** Movimentos ordenados do mais recente para o mais antigo. */
export function movimentosOrdenados(processo) {
  return [...(processo?.movimentos ?? [])].sort((a, b) =>
    String(b?.dataHora ?? '').localeCompare(String(a?.dataHora ?? '')),
  );
}

function complementos(mov) {
  const lista = (mov?.complementosTabelados ?? [])
    .map((c) => c?.nome)
    .filter(Boolean);
  return lista.length ? ` (${lista.join('; ')})` : '';
}

/** Uma linha por movimento: "2025-03-31 17:29 · Nao-Acolhimento de Embargos". */
export function linhasMovimentos(movimentos) {
  return movimentos.map(
    (m) => `- ${formatarDataHora(m?.dataHora)} · ${m?.nome ?? '(sem nome)'}${complementos(m)}`,
  );
}

/** Cabecalho do processo: identificacao, classe, orgao, assuntos. */
export function cabecalho(processo) {
  const numero = parseNumeroCNJ(processo?.numeroProcesso);
  const assuntos = (processo?.assuntos ?? [])
    .map((a) => a?.nome?.trim())
    .filter(Boolean)
    .join('; ');

  const linhas = [
    `**${numero?.formatado ?? processo?.numeroProcesso ?? '(sem numero)'}** — ${processo?.tribunal ?? '?'} ${processo?.grau ?? ''}`.trim(),
    `- Classe: ${processo?.classe?.nome ?? '—'} (cod. ${processo?.classe?.codigo ?? '—'})`,
    `- Orgao julgador: ${processo?.orgaoJulgador?.nome ?? '—'}`,
    `- Ajuizamento: ${formatarData(processo?.dataAjuizamento)}`,
    `- Ultima atualizacao no DataJud: ${formatarDataHora(processo?.dataHoraUltimaAtualizacao)}`,
    `- Sistema: ${processo?.sistema?.nome ?? '—'} · formato: ${processo?.formato?.nome ?? '—'} · sigilo: ${processo?.nivelSigilo ?? 0}`,
  ];
  if (assuntos) linhas.push(`- Assuntos: ${assuntos}`);
  return linhas.join('\n');
}

/** Ficha completa de um processo, com os N movimentos mais recentes. */
export function ficha(processo, { limiteMovimentos = 15 } = {}) {
  const todos = movimentosOrdenados(processo);
  const recortados = limiteMovimentos > 0 ? todos.slice(0, limiteMovimentos) : todos;

  const partes = [cabecalho(processo)];
  if (recortados.length) {
    const titulo =
      recortados.length < todos.length
        ? `\n**Movimentacoes (${recortados.length} mais recentes de ${todos.length}):**`
        : `\n**Movimentacoes (${todos.length}):**`;
    partes.push(titulo, linhasMovimentos(recortados).join('\n'));
  } else {
    partes.push('\n_Sem movimentacoes registradas no DataJud._');
  }
  return partes.join('\n');
}

/** Linha por processo, para resultados de busca. */
export function resumoLinha(processo) {
  const ultimo = movimentosOrdenados(processo)[0];
  return [
    `- **${processo?.numeroProcesso ?? '?'}** · ${processo?.classe?.nome ?? '—'}`,
    `  ${processo?.tribunal ?? '?'} ${processo?.grau ?? ''} · ${processo?.orgaoJulgador?.nome ?? '—'} · ajuiz. ${formatarData(processo?.dataAjuizamento)}`,
    ultimo ? `  ultimo mov.: ${formatarDataHora(ultimo.dataHora)} — ${ultimo.nome}` : '  sem movimentos',
  ].join('\n');
}

/** Nota padrao sobre o que a base do CNJ nao contem. */
export const AVISO_ESCOPO =
  '_Fonte: API Publica do DataJud/CNJ — apenas metadados publicos. Nao traz nomes de partes, ' +
  'advogados nem teor de decisoes, e processos em segredo de justica sao omitidos. ' +
  'A base e alimentada pelos tribunais com defasagem — conferir no sistema do tribunal antes de agir sobre prazo._';
