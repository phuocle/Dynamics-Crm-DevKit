/**
 * Build script - Build entity .ts files
 * Usage:
 *   node build.js [debug|release]           - Build ALL entities
 *   node build.js [debug|release] <Entity>  - Build SINGLE entity
 *
 * Examples:
 *   node build.js debug           - Build all in debug mode
 *   node build.js release         - Build all in release mode
 *   node build.js debug Account   - Build only Account.ts in debug mode
 *   node build.js Account         - Build only Account.ts in debug mode (default)
 */

const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

// Parse arguments
const args = process.argv.slice(2);
let mode = 'debug';
let entityName = null;

// Parse mode and entity name from arguments
for (const arg of args) {
    if (arg === 'debug' || arg === 'release') {
        mode = arg;
    } else {
        entityName = arg;
    }
}

const isDebug = mode === 'debug';
const tsDir = __dirname;
const entitiesDir = path.join(tsDir, 'entities');
const buildDir = path.join(tsDir, 'build');

function getEntityFiles() {
    if (!fs.existsSync(entitiesDir)) {
        console.log('entities folder not found.');
        return [];
    }

    const files = fs.readdirSync(entitiesDir);
    return files.filter(file => {
        if (!file.endsWith('.ts')) return false;
        // Skip .form.ts files - they are imported by main .ts files
        if (file.endsWith('.form.ts')) return false;
        const filePath = path.join(entitiesDir, file);
        const stat = fs.statSync(filePath);
        return stat.isFile();
    });
}

async function buildEntity(file) {
    const name = path.basename(file, '.ts');
    const entryPoint = path.join(entitiesDir, file);
    const outFile = path.join(buildDir, `${name}.js`);
    const globalName = `IIFE${name}`;

    // Read the TypeScript file to extract all exported variable names from "export { ... }" statement
    let exportedNames = [];
    try {
        const content = fs.readFileSync(entryPoint, 'utf8');
        // Find pattern: export { name1, name2, ... };
        const regex = /^export\s*\{\s*([^}]+)\s*\}\s*;?\s*$/gm;
        let match;
        while ((match = regex.exec(content)) !== null) {
            // Split by comma and trim whitespace
            const names = match[1].split(',').map(n => n.trim()).filter(n => n.length > 0);
            exportedNames.push(...names);
        }
        // Fallback if no matches found
        if (exportedNames.length === 0) {
            exportedNames.push(`form${name}`);
        }
    } catch (readError) {
        exportedNames.push(`form${name}`);
    }

    // Create footer code that exposes all named exports to window
    // IIFEAccount.formAccount_DevKitV4 and IIFEAccount.formAccount both need to be exposed
    const footerParts = exportedNames.map(exportedName =>
        `if(typeof ${globalName}!=='undefined'&&${globalName}.${exportedName})window['${exportedName}']=${globalName}.${exportedName};`
    );
    const footerCode = `(function(){${footerParts.join('')}})();`;

    try {
        await esbuild.build({
            entryPoints: [entryPoint],
            bundle: true,
            outfile: outFile,
            format: 'iife',
            globalName: globalName,
            target: 'es2020',
            sourcemap: isDebug ? 'inline' : false,
            sourcesContent: isDebug,
            minify: !isDebug,
            footer: { js: footerCode },
        });

        const stats = fs.statSync(outFile);
        const sizeKb = (stats.size / 1024).toFixed(1);
        const exportList = exportedNames.map(n => `window['${n}']`).join(', ');
        console.log(`  ✓ ${name}.js (${sizeKb} KB) → ${exportList}`);
        return true;
    } catch (error) {
        console.error(`  ✗ ${name}.ts - Build failed:`, error.message);
        return false;
    }
}

async function build() {
    // Create build folder if not exists
    if (!fs.existsSync(buildDir)) {
        fs.mkdirSync(buildDir, { recursive: true });
    }

    console.log(`\n=== Building in ${isDebug ? 'DEBUG' : 'RELEASE'} mode ===\n`);

    if (entityName) {
        // Build single entity
        const file = `${entityName}.ts`;
        const entryPoint = path.join(entitiesDir, file);

        if (!fs.existsSync(entryPoint)) {
            console.error(`File not found: ${entryPoint}`);
            process.exit(1);
        }

        const success = await buildEntity(file);
        console.log(`\nOutput: build/${entityName}.js\n`);
        process.exit(success ? 0 : 1);
    } else {
        // Build all entities
        const entityFiles = getEntityFiles();

        if (entityFiles.length === 0) {
            console.log('No entity .ts files found to build.');
            return;
        }

        for (const file of entityFiles) {
            await buildEntity(file);
        }

        console.log(`\nBuild completed. Output: build/\n`);
    }
}

build().catch(err => {
    console.error(err);
    process.exit(1);
});
