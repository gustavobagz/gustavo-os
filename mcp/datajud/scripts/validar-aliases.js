#!/usr/bin/env node
// Confere se todos os aliases mapeados ainda existem na API publica do CNJ.
// Rodar depois de qualquer noticia de mudanca no DataJud: `npm run check`.
// Tambem serve de teste de fumaca da chave publica: se TUDO falhar com 401/403,
// o CNJ trocou a chave.

import { buscar, DataJudError } from '../datajud.js';
import { todosAliases } from '../tribunais.js';

const LOTE = 4;
const aliases = todosAliases();
const falhas = [];

async function checar(alias) {
  try {
    const r = await buscar(alias, { size: 0, query: { match_all: {} } });
    const total = r?.hits?.total?.value ?? 0;
    process.stdout.write(`ok   ${alias.padEnd(10)} ${total} docs\n`);
  } catch (e) {
    const detalhe = e instanceof DataJudError ? `${e.status ?? '—'} ${e.message}` : e.message;
    falhas.push({ alias, detalhe });
    process.stdout.write(`FALHA ${alias.padEnd(10)} ${detalhe}\n`);
  }
}

for (let i = 0; i < aliases.length; i += LOTE) {
  await Promise.all(aliases.slice(i, i + LOTE).map(checar));
}

console.log(`\n${aliases.length - falhas.length}/${aliases.length} aliases responderam.`);
if (falhas.length) {
  console.log('\nFalhas:');
  for (const f of falhas) console.log(`  ${f.alias}: ${f.detalhe}`);
  process.exitCode = 1;
}
