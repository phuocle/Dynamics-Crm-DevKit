/**
 * Fast test build for 02.DevKitTs-UnitTest.
 *
 * This keeps build.js unchanged for production-like verification, but avoids
 * running `tsc --noEmit` once per entry file during unit-test workflows.
 */

const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const args = process.argv.slice(2);
let mode = 'release';
let entityName = null;

for (const arg of args) {
    if (arg === 'debug' || arg === 'release') {
        mode = arg;
    } else {
        entityName = arg;
    }
}

const isDebug = mode === 'debug';
const tsDir = __dirname;
const libDir = path.join(tsDir, 'lib');
const buildDir = path.join(tsDir, 'build');
const devkitPath = path.join(libDir, 'devkit.ts');
const buildFolders = ['entities'];

function getEntryFiles(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const files = [];

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        const relativePath = path.relative(tsDir, fullPath);

        if (entry.isDirectory()) {
            files.push(...getEntryFiles(fullPath));
            continue;
        }

        if (!entry.isFile()) continue;
        if (!entry.name.endsWith('.ts')) continue;
        if (entry.name.endsWith('.d.ts')) continue;
        if (entry.name.endsWith('.form.ts')) continue;
        if (entry.name.endsWith('.webapi.ts')) continue;
        if (entry.name.endsWith('.dialog.ts')) continue;
        if (entry.name === 'OptionSet.ts') continue;

        files.push(relativePath);
    }

    return files;
}

function getBuildFiles() {
    return buildFolders.flatMap(folder => {
        const dir = path.join(tsDir, folder);
        return fs.existsSync(dir) ? getEntryFiles(dir) : [];
    });
}

function checkTypeScriptOnce() {
    console.log('Type checking project once...');
    execSync('npx tsc --noEmit --project tsconfig.json', {
        cwd: tsDir,
        stdio: 'inherit'
    });
}

async function buildDevkitMinified() {
    if (!fs.existsSync(devkitPath)) {
        console.log('  lib/devkit.ts not found, skipping...');
        return null;
    }

    const result = await esbuild.build({
        entryPoints: [devkitPath],
        bundle: true,
        write: false,
        format: 'esm',
        target: 'es2020',
        sourcemap: false,
        sourcesContent: false,
        minify: true,
        treeShaking: true
    });

    const code = result.outputFiles[0].text;
    const sizeKb = (code.length / 1024).toFixed(1);
    console.log(`  devkit.ts pre-compiled (${sizeKb} KB) [MINIFIED]`);
    return code;
}

function createDevkitPlugin(minifiedCode) {
    return {
        name: 'devkit-minify-plugin',
        setup(build) {
            build.onResolve({ filter: /devkit/ }, args => {
                if (args.path.includes('devkit')) {
                    return {
                        path: args.path,
                        namespace: 'devkit-minified'
                    };
                }
            });

            build.onLoad({ filter: /.*/, namespace: 'devkit-minified' }, () => ({
                contents: minifiedCode,
                loader: 'js'
            }));
        }
    };
}

function getExportedNames(entryPoint, name) {
    try {
        const content = fs.readFileSync(entryPoint, 'utf8');
        const regex = /^export\s*\{\s*([^}]+)\s*\}\s*;?\s*$/gm;
        const exportedNames = [];
        let match;

        while ((match = regex.exec(content)) !== null) {
            const cleanContent = match[1].replace(/\/\*[\s\S]*?\*\//g, '');
            exportedNames.push(...cleanContent.split(',').map(n => n.trim()).filter(Boolean));
        }

        return exportedNames.length > 0 ? exportedNames : [`form${name}`];
    } catch {
        return [`form${name}`];
    }
}

async function buildEntry(file, devkitCode) {
    const name = path.basename(file, '.ts');
    const entryPoint = path.join(tsDir, file);
    const relativeOutputFile = file.replace(/\.ts$/i, '.js');
    const outFile = path.join(buildDir, relativeOutputFile);
    const globalName = `IIFE${name}`;
    const exportedNames = getExportedNames(entryPoint, name);
    const footerParts = exportedNames.map(exportedName =>
        `if(typeof ${globalName}!=='undefined'&&${globalName}.${exportedName})window['${exportedName}']=${globalName}.${exportedName};`
    );

    await esbuild.build({
        entryPoints: [entryPoint],
        bundle: true,
        outfile: outFile,
        format: 'iife',
        globalName,
        target: 'es2020',
        footer: { js: `(function(){${footerParts.join('')}})();` },
        plugins: devkitCode ? [createDevkitPlugin(devkitCode)] : [],
        sourcemap: isDebug ? 'inline' : false,
        sourcesContent: isDebug,
        minify: !isDebug
    });

    const stats = fs.statSync(outFile);
    const sizeKb = (stats.size / 1024).toFixed(1);
    console.log(`  ${relativeOutputFile} (${sizeKb} KB) [${isDebug ? 'DEBUG' : 'MINIFIED'}]`);
}

function cleanupBuildFolder() {
    for (const fileName of ['devkit.js', 'OptionSet.js']) {
        const filePath = path.join(buildDir, fileName);
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
    }
}

async function build() {
    if (!fs.existsSync(buildDir)) {
        fs.mkdirSync(buildDir, { recursive: true });
    }

    console.log(`\n=== Fast test build in ${isDebug ? 'DEBUG' : 'RELEASE'} mode ===`);
    checkTypeScriptOnce();

    const devkitCode = await buildDevkitMinified();
    const entryFiles = getBuildFiles();
    const files = entityName
        ? entryFiles.filter(entryFile => path.basename(entryFile, '.ts').toLowerCase() === entityName.toLowerCase())
        : entryFiles;

    if (files.length === 0) {
        console.error(entityName ? `Entry file not found: ${entityName}.ts` : 'No entry .ts files found to build.');
        process.exit(1);
    }

    console.log(`Building ${files.length} entry file(s):`);
    for (const file of files) {
        await buildEntry(file, devkitCode);
    }

    cleanupBuildFolder();
    console.log('\nFast test build completed. Output: build/\n');
}

build().catch(err => {
    console.error(err);
    process.exit(1);
});
