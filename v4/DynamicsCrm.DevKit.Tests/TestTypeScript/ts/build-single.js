/**
 * Build single entity file script
 * Usage: node build-single.js <EntityName> [debug|release]
 * Example: node build-single.js Account debug
 */

const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

// Arguments
const entityName = process.argv[2];
const mode = process.argv[3] || 'debug';
const isDebug = mode === 'debug';

if (!entityName) {
    console.error('Usage: node build-single.js <EntityName> [debug|release]');
    console.error('Example: node build-single.js Account debug');
    process.exit(1);
}

const tsDir = __dirname;
const entitiesDir = path.join(tsDir, 'entities');
const buildDir = path.join(tsDir, 'build');

async function buildSingle() {
    const entryPoint = path.join(entitiesDir, `${entityName}.ts`);

    // Check if file exists
    if (!fs.existsSync(entryPoint)) {
        console.error(`File not found: ${entryPoint}`);
        process.exit(1);
    }

    // Create build folder if not exists
    if (!fs.existsSync(buildDir)) {
        fs.mkdirSync(buildDir, { recursive: true });
    }

    const outFile = path.join(buildDir, `${entityName}.js`);
    const globalName = `IIFE${entityName}`;

    // Footer: Auto-assign default export to window
    const footerCode = `(function(){if(typeof ${globalName}!=='undefined'&&${globalName}.default)window['form${entityName}']=${globalName}.default;})();`;

    console.log(`Building ${entityName}.ts in ${isDebug ? 'DEBUG' : 'RELEASE'} mode...`);

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
        console.log(`OK: ${entityName}.js (${sizeKb} KB)`);
        console.log(`Output: ${outFile}`);
        process.exit(0);
    } catch (error) {
        console.error(`FAILED: ${entityName}.ts - ${error.message}`);
        process.exit(1);
    }
}

buildSingle().catch(err => {
    console.error(err);
    process.exit(1);
});
