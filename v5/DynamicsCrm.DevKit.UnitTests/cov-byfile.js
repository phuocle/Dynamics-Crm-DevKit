const fs = require('fs');
const path = process.argv[2] || 'D:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.UnitTests/TestResults/9aced0a9-b349-4c3e-b77e-99915b7f4471/coverage.cobertura.xml';
const top = +(process.argv[3] || 40);
const s = fs.readFileSync(path, 'utf8');
const cls = [...s.matchAll(/<class[^>]*name="([^"]+)"[^>]*filename="([^"]+)"[^>]*line-rate="([0-9.]+)"[^>]*branch-rate="[0-9.]+"[^>]*>/g)];
const perFile = {};
for (const c of cls) {
  const ci = s.indexOf(c[0]);
  const ce = s.indexOf('</class>', ci);
  const cb = s.slice(ci, ce);
  let v = 0, cv = 0;
  for (const l of cb.matchAll(/<line number="[0-9]+" hits="([0-9]+)"/g)) { v++; if (+l[1] > 0) cv++; }
  const k = c[2].replace(/\\/g, '/');
  if (!perFile[k]) perFile[k] = { v: 0, cv: 0 };
  perFile[k].v += v; perFile[k].cv += cv;
}
const rows = Object.entries(perFile).map(([f, d]) => ({ f, missed: d.v - d.cv, pct: d.v ? 100 * d.cv / d.v : 100, v: d.v }));
rows.sort((a, b) => b.missed - a.missed);
let tv = 0, tcv = 0;
for (const r of rows) { tv += r.v; tcv += r.v - r.missed; }
console.log('total: ' + (100 * tcv / tv).toFixed(1) + '% files=' + rows.length);
for (const r of rows.slice(0, top)) console.log(String(r.missed).padStart(6), (r.pct.toFixed(0) + '%').padStart(4), r.f.split('/').slice(-2).join('/'));
const dirs = {};
for (const r of rows) {
  const parts = r.f.split('/');
  const d = parts.slice(0, -1).join('/');
  if (!dirs[d]) dirs[d] = { m: 0, v: 0 };
  dirs[d].m += r.missed; dirs[d].v += r.v;
}
console.log('--- by dir (missed lines) ---');
for (const [d, x] of Object.entries(dirs).sort((a, b) => b[1].m - a[1].m).slice(0, 25)) console.log(String(x.m).padStart(6), (100 * (1 - x.m / x.v)).toFixed(0) + '%', d, '(' + x.v + ')');
