import { parseNumeroCNJ, normalizarAlias } from './tribunais.js';
import { buscar, extrairHits } from './datajud.js';
import { ficha, resumoLinha } from './formatar.js';

const casos = [
  ['C-010 Bel Fiore', '5075206-17.2025.8.09.0006'],
  ['C-012 Julio/DF', '0752794-63.2025.8.07.0016'],
  ['C-013 TRF1', '0002121-25.2008.4.01.3502'],
  ['C-002 TRT18', '0000370-61.2025.5.18.0006'],
  ['C-002 precatoria TRT3', '0010535-88.2026.5.03.0156'],
  ['C-004 Gracielle', '5915324-96.2025.8.09.0007'],
  ['C-015 Bradesco', '0076548-32.2017.8.09.0006'],
];

console.log('--- deducao de alias ---');
for (const [nome, num] of casos) {
  const c = parseNumeroCNJ(num);
  console.log(`${nome.padEnd(24)} ${c.formatado} -> ${c.alias} (${c.segmentoNome})`);
}
console.log('normalizar:', ['TJGO', 'api_publica_trt18', 'TRE-GO', 'trego', 'xx'].map(normalizarAlias).join(' | '));

console.log('\n--- consulta real ---');
for (const [nome, num] of casos) {
  const c = parseNumeroCNJ(num);
  try {
    const r = extrairHits(await buscar(c.alias, { size: 10, query: { match: { numeroProcesso: c.digitos } } }));
    console.log(`\n[${nome}] ${c.alias}: ${r.total} hit(s)`);
    if (r.itens.length) console.log(ficha(r.itens[0], { limiteMovimentos: 3 }));
  } catch (e) {
    console.log(`\n[${nome}] ${c.alias}: ERRO ${e.message}`);
  }
}

