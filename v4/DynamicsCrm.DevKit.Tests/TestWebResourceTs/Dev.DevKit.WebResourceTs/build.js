const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

const entitiesDir = path.join(__dirname, 'entities');
const buildDir = path.join(__dirname, 'build');

const mode = process.argv[2] || 'debug';
const isDebug = mode === 'debug';

async function build() {
    if (!fs.existsSync(entitiesDir)) {
        console.error('Entities directory not found:', entitiesDir);
        return;
    }

    if (!fs.existsSync(buildDir)) {
        fs.mkdirSync(buildDir, { recursive: true });
    }

    const targetEntity = process.argv[3];
    let tsFiles = [];

    if (targetEntity) {
        const targetFile = `${targetEntity}.ts`;
        const targetPath = path.join(entitiesDir, targetFile);
        if (fs.existsSync(targetPath)) {
            tsFiles = [targetFile];
        } else {
            console.error(`Entity file not found: ${targetPath}`);
            process.exit(1);
        }
    } else {
        const files = fs.readdirSync(entitiesDir);
        tsFiles = files.filter(file =>
            file.endsWith('.ts') &&
            !file.endsWith('.form.ts') &&
            !file.endsWith('.webapi.ts') &&
            file !== 'devkit.ts' &&
            file !== 'OptionSet.ts'
        );
    }

    console.log(`\n=== Building in ${isDebug ? 'DEBUG' : 'RELEASE'} mode ===\n`);
    console.log(`Found ${tsFiles.length} files to build...`);

    for (const file of tsFiles) {
        const entryPoint = path.join(entitiesDir, file);
        const entityName = path.basename(file, '.ts');
        const outFile = path.join(buildDir, `${entityName}.js`);

        console.log(`Building ${file} -> ${entityName}.js`);

        const globalName = `IIFE${entityName}`;
        const footerCode = `(function(){if(typeof ${globalName}!=='undefined'&&${globalName}.default)window['form${entityName}']=${globalName}.default;})();`;

        try {
            await esbuild.build({
                entryPoints: [entryPoint],
                bundle: true,
                outfile: outFile,
                format: 'iife',
                globalName: globalName,
                target: 'es2020',
                sourcemap: isDebug ? 'inline' : false,
                minify: !isDebug,
                footer: { js: footerCode },
            });

            const stats = fs.statSync(outFile);
            const sizeKb = (stats.size / 1024).toFixed(1);
            console.log(`  ✓ ${entityName}.js (${sizeKb} KB) built successfully.`);
        } catch (error) {
            console.error(`  ✗ ${entityName}.ts - Build failed:`, error.message);
        }
    }
}

build().catch(console.error);
