import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const jsPath = path.resolve(__dirname, '../lib/devkit.js');

const content = fs.readFileSync(jsPath, 'utf8');
if (!content.includes('export { devKit, OptionSet };')) {
    fs.appendFileSync(jsPath, '\nexport { devKit, OptionSet };\n');
    console.log('Appended exports to lib/devkit.js for testing.');
}
