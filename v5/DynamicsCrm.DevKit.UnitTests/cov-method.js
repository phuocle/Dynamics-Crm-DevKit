const fs = require('fs');
const path = 'D:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.UnitTests/TestResults/9aced0a9-b349-4c3e-b77e-99915b7f4471/coverage.cobertura.xml';
const fileFilter = process.argv[2]; // substring of filename
const s = fs.readFileSync(path, 'utf8');
const cls = [...s.matchAll(/<class[^>]*name="([^"]+)"[^>]*filename="([^"]+)"[^>]*line-rate="([0-9.]+)"[^>]*branch-rate="[0-9.]+"[^>]*>/g)];
for (const c of cls) {
  if (!c[2].includes(fileFilter)) continue;
  const ci = s.indexOf(c[0]);
  const ce = s.indexOf('</class>', ci);
  const cb = s.slice(ci, ce);
  console.log('== ' + c[2] + '  ' + (100 * +c[3]).toFixed(0) + '%');
  for (const m of cb.matchAll(/<method name="([^"]+)"[^>]*line-rate="([0-9.]+)"/g)) {
    // count lines in this method block
    const mi = cb.indexOf(m[0]);
    const me = cb.indexOf('</method>', mi);
    const mb = cb.slice(mi, me);
    let v = 0, cv = 0;
    for (const l of mb.matchAll(/<line number="[0-9]+" hits="([0-9]+)"/g)) { v++; if (+l[1] > 0) cv++; }
    if (v - cv > 0) console.log(String(v - cv).padStart(5), (100 * +m[2]).toFixed(0).padStart(4) + '%', m[1]);
  }
}
