const path = process.argv[2];
const top = parseInt(process.argv[3] || "20", 10);
const c = require(path);
for (const m of Object.keys(c)) {
  let lines = 0, covered = 0;
  const files = [];
  for (const [file, classes] of Object.entries(c[m])) {
    let fl = 0, fc = 0;
    for (const cls of Object.values(classes))
      for (const mth of Object.values(cls))
        for (const hits of Object.values(mth.Lines || {})) { fl++; if (hits > 0) fc++; }
    lines += fl; covered += fc;
    files.push({ file: file.replace(/\\/g, "/").split("/").slice(-2).join("/"), pct: fl ? 100 * fc / fl : 100, missed: fl - fc });
  }
  console.log(m, "=>", (lines ? (100 * covered / lines).toFixed(1) : "0") + "%", "(" + covered + "/" + lines + ")");
  files.sort((a, b) => b.missed - a.missed);
  console.log(files.slice(0, top).map(f => String(f.missed).padStart(5) + "  " + f.pct.toFixed(1).padStart(5) + "%  " + f.file).join("\n"));
  console.log("---");
}
