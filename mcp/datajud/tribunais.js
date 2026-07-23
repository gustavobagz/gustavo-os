// Mapeamento de tribunais da API Publica do DataJud (CNJ).
//
// O numero unico CNJ (Res. 65/2008) tem 20 digitos: NNNNNNN-DD.AAAA.J.TR.OOOO
//   J  = segmento do Judiciario
//   TR = tribunal dentro do segmento
// A partir de J+TR da para deduzir o alias do endpoint sem perguntar nada.

const UF_POR_CODIGO = {
  '01': 'AC', '02': 'AL', '03': 'AP', '04': 'AM', '05': 'BA', '06': 'CE',
  '07': 'DF', '08': 'ES', '09': 'GO', '10': 'MA', '11': 'MT', '12': 'MS',
  '13': 'MG', '14': 'PA', '15': 'PB', '16': 'PR', '17': 'PE', '18': 'PI',
  '19': 'RJ', '20': 'RN', '21': 'RS', '22': 'RO', '23': 'RR', '24': 'SC',
  '25': 'SE', '26': 'SP', '27': 'TO',
};

const MILITAR_ESTADUAL = { '13': 'tjmmg', '21': 'tjmrs', '26': 'tjmsp' };

const SEGMENTOS = {
  '1': 'Supremo Tribunal Federal',
  '2': 'Conselho Nacional de Justica',
  '3': 'Tribunais superiores (STJ)',
  '4': 'Justica Federal',
  '5': 'Justica do Trabalho',
  '6': 'Justica Eleitoral',
  '7': 'Justica Militar da Uniao',
  '8': 'Justica Estadual',
  '9': 'Justica Militar Estadual',
};

/** Alias do endpoint (ex.: "tjgo") a partir do segmento e do codigo de tribunal. */
export function aliasDeSegmento(j, tr) {
  const n = Number(tr);
  switch (j) {
    case '3': return 'stj';
    case '4': return n >= 1 && n <= 6 ? `trf${n}` : null;
    case '5': return n >= 1 && n <= 24 ? `trt${n}` : null;
    case '6': return UF_POR_CODIGO[tr] ? `tre-${UF_POR_CODIGO[tr].toLowerCase()}` : null;
    case '7': return 'stm';
    case '8': {
      const uf = UF_POR_CODIGO[tr];
      if (!uf) return null;
      return uf === 'DF' ? 'tjdft' : `tj${uf.toLowerCase()}`;
    }
    case '9': return MILITAR_ESTADUAL[tr] ?? null;
    default: return null; // STF e CNJ nao estao na API publica
  }
}

/** Todos os aliases publicados pelo CNJ, para listagem e validacao. */
export function todosAliases() {
  const trts = Array.from({ length: 24 }, (_, i) => `trt${i + 1}`);
  const trfs = Array.from({ length: 6 }, (_, i) => `trf${i + 1}`);
  const estaduais = Object.values(UF_POR_CODIGO).map((uf) => (uf === 'DF' ? 'tjdft' : `tj${uf.toLowerCase()}`));
  const eleitorais = Object.values(UF_POR_CODIGO).map((uf) => `tre-${uf.toLowerCase()}`);
  return [
    ...['tst', 'tse', 'stj', 'stm'],
    ...trfs,
    ...estaduais.sort(),
    ...trts,
    ...eleitorais.sort(),
    ...Object.values(MILITAR_ESTADUAL),
  ];
}

/**
 * Decompoe um numero unico CNJ. Aceita com ou sem mascara.
 * Retorna null se nao tiver 20 digitos.
 */
export function parseNumeroCNJ(entrada) {
  const digitos = String(entrada ?? '').replace(/\D/g, '');
  if (digitos.length !== 20) return null;
  const j = digitos.slice(13, 14);
  const tr = digitos.slice(14, 16);
  return {
    digitos,
    formatado: `${digitos.slice(0, 7)}-${digitos.slice(7, 9)}.${digitos.slice(9, 13)}.${j}.${tr}.${digitos.slice(16)}`,
    ano: digitos.slice(9, 13),
    segmento: j,
    segmentoNome: SEGMENTOS[j] ?? 'desconhecido',
    codigoTribunal: tr,
    origem: digitos.slice(16),
    alias: aliasDeSegmento(j, tr),
  };
}

/**
 * Normaliza o que o usuario chamou de tribunal: aceita "TJGO", "tjgo",
 * "api_publica_tjgo" ou "TRE-GO". Retorna o alias canonico ou null.
 */
export function normalizarAlias(entrada) {
  if (!entrada) return null;
  const bruto = String(entrada).trim().toLowerCase().replace(/^api_publica_/, '');
  const candidato = bruto.replace(/\s+/g, '');
  const conhecidos = new Set(todosAliases());
  if (conhecidos.has(candidato)) return candidato;
  // "trego" -> "tre-go"
  const tre = candidato.match(/^tre-?([a-z]{2})$/);
  if (tre && conhecidos.has(`tre-${tre[1]}`)) return `tre-${tre[1]}`;
  return null;
}

export { SEGMENTOS, UF_POR_CODIGO };
