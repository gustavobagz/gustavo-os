import { parseNumeroCNJ } from './tribunais.js';
import { buscar, extrairHits } from './datajud.js';
import { ficha } from './formatar.js';
for (const num of ['5075206-17.2025.8.09.0006','0002121-25.2008.4.01.3502']) {
  const c = parseNumeroCNJ(num);
  try {
    const r = extrairHits(await buscar(c.alias, { size: 10, query: { match: { numeroProcesso: c.digitos } } }));
    console.log(`\n[${c.alias}] ${r.total} hit(s)`);
    for (const p of r.itens) console.log(ficha(p, { limiteMovimentos: 3 }) + '\n');
  } catch (e) { console.log(`\n[${c.alias}] ERRO ${e.message}`); }
}
