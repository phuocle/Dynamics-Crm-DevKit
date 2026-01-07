/**
 * Build script - Build entity .ts files
 * Usage:
 *   npm run release           - Build ALL entities (minified)
 *   npm run release Account   - Build SINGLE entity (minified)
 *   npm run debug             - Build ALL entities (debug with sourcemap, devkit.ts always minified)
 *   npm run debug Account     - Build SINGLE entity (debug with sourcemap, devkit.ts always minified)
 *
 * Output: All built files are placed in the 'build/' folder
 * Note: devkit.ts is ALWAYS minified (no need to debug framework)
 * 
 * Architecture:
 *   - devkit.ts is pre-compiled to minified code
 *   - Entity files import devkit functions which get bundled with the minified devkit code
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
const libDir = path.join(tsDir, 'lib');
const buildDir = path.join(tsDir, 'build');
const devkitPath = path.join(libDir, 'devkit.ts');

// Cache for minified devkit code
let minifiedDevkitCode = null;

function getEntityFiles() {
    if (!fs.existsSync(entitiesDir)) {
        console.log('entities folder not found.');
        return [];
    }

    const files = fs.readdirSync(entitiesDir);
    return files.filter(file => {
        if (!file.endsWith('.ts')) return false;
        // Skip .form.ts, .webapi.ts and OptionSet.ts files - they are imported by main .ts files
        if (file.endsWith('.form.ts')) return false;
        if (file.endsWith('.webapi.ts')) return false;
        if (file === 'OptionSet.ts') return false;
        const filePath = path.join(entitiesDir, file);
        const stat = fs.statSync(filePath);
        return stat.isFile();
    });
}

/**
 * Build devkit.ts to minified code (always minified, no sourcemap)
 * Returns the minified code as a string for injection
 */
async function buildDevkitMinified() {
    if (!fs.existsSync(devkitPath)) {
        console.log('  ⚠ lib/devkit.ts not found, skipping...');
        return null;
    }

    try {
        // Build devkit.ts to minified code
        const result = await esbuild.build({
            entryPoints: [devkitPath],
            bundle: true,
            write: false,           // Don't write to file, return code
            format: 'esm',          // ESM format so it can be tree-shaken
            target: 'es2020',
            sourcemap: false,       // No sourcemap for devkit
            sourcesContent: false,
            minify: true,           // Always minified
            treeShaking: true,
        });

        const code = result.outputFiles[0].text;
        const sizeKb = (code.length / 1024).toFixed(1);
        console.log(`  ✓ devkit.ts pre-compiled (${sizeKb} KB) [MINIFIED]`);
        return code;
    } catch (error) {
        console.error(`  ✗ devkit.ts - Build failed:`, error.message);
        return null;
    }
}

/**
 * Create an esbuild plugin that replaces devkit imports with minified code
 */
function createDevkitPlugin(minifiedCode) {
    return {
        name: 'devkit-minify-plugin',
        setup(build) {
            // Intercept imports from lib/devkit.ts or ../lib/devkit
            build.onResolve({ filter: /devkit/ }, args => {
                if (args.path.includes('devkit')) {
                    return {
                        path: args.path,
                        namespace: 'devkit-minified',
                    };
                }
            });

            // Return the pre-minified devkit code
            build.onLoad({ filter: /.*/, namespace: 'devkit-minified' }, () => {
                return {
                    contents: minifiedCode,
                    loader: 'js',
                };
            });
        },
    };
}

async function buildEntity(file, devkitCode) {
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
    const footerParts = exportedNames.map(exportedName =>
        `if(typeof ${globalName}!=='undefined'&&${globalName}.${exportedName})window['${exportedName}']=${globalName}.${exportedName};`
    );
    const footerCode = `(function(){${footerParts.join('')}})();`;

    try {
        const buildOptions = {
            entryPoints: [entryPoint],
            bundle: true,
            outfile: outFile,
            format: 'iife',
            globalName: globalName,
            target: 'es2020',
            footer: { js: footerCode },
            plugins: devkitCode ? [createDevkitPlugin(devkitCode)] : [],
        };

        if (isDebug) {
            // Debug mode: entity code is readable with sourcemap, but devkit is already minified via plugin
            buildOptions.sourcemap = 'inline';
            buildOptions.sourcesContent = true;
            buildOptions.minify = false;
        } else {
            // Release mode: everything minified
            buildOptions.sourcemap = false;
            buildOptions.sourcesContent = false;
            buildOptions.minify = true;
        }

        await esbuild.build(buildOptions);

        const stats = fs.statSync(outFile);
        const sizeKb = (stats.size / 1024).toFixed(1);
        const exportList = exportedNames.map(n => `window['${n}']`).join(', ');
        const modeLabel = isDebug ? 'DEBUG' : 'MINIFIED';
        const devkitNote = devkitCode ? ' (devkit: MINIFIED)' : '';
        console.log(`  ✓ ${name}.js (${sizeKb} KB) [${modeLabel}]${devkitNote} → ${exportList}`);
        return true;
    } catch (error) {
        console.error(`  ✗ ${name}.ts - Build failed:`, error.message);
        return false;
    }
}

/**
 * Cleanup: Delete devkit.js and OptionSet.js from build folder if exists
 */
function cleanupBuildFolder() {
    const filesToClean = ['devkit.js', 'OptionSet.js'];
    filesToClean.forEach(fileName => {
        const filePath = path.join(buildDir, fileName);
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            console.log(`  ✓ Cleaned up ${fileName} from build folder`);
        }
    });
}

async function build() {
    // Create build folder if not exists
    if (!fs.existsSync(buildDir)) {
        fs.mkdirSync(buildDir, { recursive: true });
    }

    console.log(`\n=== Building in ${isDebug ? 'DEBUG' : 'RELEASE'} mode ===`);
    console.log(`Output folder: build/\n`);

    // Step 1: Pre-compile devkit.ts to minified code
    console.log('Step 1: Pre-compiling devkit.ts (always minified):');
    minifiedDevkitCode = await buildDevkitMinified();

    console.log('');

    // Step 2: Build entity files
    if (entityName) {
        // Build single entity
        const file = `${entityName}.ts`;
        const entryPoint = path.join(entitiesDir, file);

        if (!fs.existsSync(entryPoint)) {
            console.error(`File not found: ${entryPoint}`);
            process.exit(1);
        }

        console.log(`Step 2: Building entity: ${entityName}`);
        const success = await buildEntity(file, minifiedDevkitCode);
        cleanupBuildFolder();
        console.log(`\nBuild completed. Output: build/\n`);
        process.exit(success ? 0 : 1);
    } else {
        // Build all entities
        const entityFiles = getEntityFiles();

        if (entityFiles.length === 0) {
            console.log('No entity .ts files found to build.');
            return;
        }

        console.log(`Step 2: Building ${entityFiles.length} entity file(s):`);
        for (const file of entityFiles) {
            await buildEntity(file, minifiedDevkitCode);
        }

        cleanupBuildFolder();
        console.log(`\nBuild completed. Output: build/\n`);
    }
}

build().catch(err => {
    console.error(err);
    process.exit(1);
});
