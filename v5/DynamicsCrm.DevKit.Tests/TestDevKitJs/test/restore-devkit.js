import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const jsPath = path.resolve(__dirname, '../lib/devkit.js');

let content = fs.readFileSync(jsPath, 'utf8');
content = content.replace('\nexport { devKit, OptionSet };\n', '');
fs.writeFileSync(jsPath, content);
console.log('Restored lib/devkit.js (removed exports).');
