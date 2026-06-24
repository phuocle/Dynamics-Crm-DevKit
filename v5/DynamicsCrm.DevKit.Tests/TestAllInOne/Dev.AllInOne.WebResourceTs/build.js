/**
 * Build script - Build entry .ts files
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
 *   - Entry files import devkit functions which get bundled with the minified devkit code
 */

const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

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
const libDir = path.join(tsDir, 'lib');
const buildDir = path.join(tsDir, 'build');
const devkitPath = path.join(libDir, 'devkit.ts');
// Default: ['entities']. Add folders here when more TypeScript entry folders are needed.
const buildFolders = ['entities', 'dialogs'];

// Cache for minified devkit code
let minifiedDevkitCode = null;

function getEntryFilesFromFolder(folder) {
    const dir = path.join(tsDir, folder);
    if (!fs.existsSync(dir)) {
        console.log(`${folder} folder not found, skipping.`);
        return [];
    }

    return getEntryFiles(dir);
}

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
        // Skip generated/import-only files; they are bundled through the main entry .ts files.
        if (entry.name.endsWith('.form.ts')) continue;
        if (entry.name.endsWith('.webapi.ts')) continue;
        if (entry.name.endsWith('.dialog.ts')) continue;
        if (entry.name === 'OptionSet.ts') continue;

        files.push(relativePath);
    }

    return files;
}

function getBuildFiles() {
    return buildFolders.flatMap(folder => getEntryFilesFromFolder(folder));
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

/**
 * Check TypeScript errors using tsc --noEmit
 * esbuild doesn't do type checking, so we need to run tsc separately
 * Uses the project's tsconfig.json for proper configuration
 * @param {string} file - The entry file path (e.g., 'entities/Account.ts')
 * @returns {boolean} - true if no errors, false if errors found
 */
function checkTypeScript(file) {
    const name = path.basename(file, '.ts');

    try {
        // Run tsc --noEmit using the project's tsconfig.json
        // This ensures proper lib and target settings are used
        execSync(`npx tsc --noEmit --project tsconfig.json`, {
            cwd: tsDir,
            stdio: 'pipe',
            encoding: 'utf8'
        });
        return true;
    } catch (error) {
        // tsc returns exit code 1 when there are errors
        console.error(`  ✗ ${name}.ts - TypeScript errors:`);
        if (error.stdout) {
            console.error(error.stdout);
        }
        if (error.stderr) {
            console.error(error.stderr);
        }
        return false;
    }
}

async function buildEntry(file, devkitCode) {
    const name = path.basename(file, '.ts');
    const entryPoint = path.join(tsDir, file);
    const relativeOutputFile = file.replace(/\.ts$/i, '.js');
    const outFile = path.join(buildDir, relativeOutputFile);
    const globalName = `IIFE${name}`;

    // Step 1: Check TypeScript errors first (esbuild doesn't do type checking)
    console.log(`  Checking ${name}.ts for TypeScript errors...`);
    if (!checkTypeScript(file)) {
        return false; // TypeScript errors found, stop build
    }

    // Read the TypeScript file to extract all exported variable names from "export { ... }" statement
    let exportedNames = [];
    try {
        const content = fs.readFileSync(entryPoint, 'utf8');
        // Find pattern: export { name1, name2, ... };
        const regex = /^export\s*\{\s*([^}]+)\s*\}\s*;?\s*$/gm;
        let match;
        while ((match = regex.exec(content)) !== null) {
            // Remove block comments
            const cleanContent = match[1].replace(/\/\*[\s\S]*?\*\//g, '');
            // Split by comma and trim whitespace
            const names = cleanContent.split(',').map(n => n.trim()).filter(n => n.length > 0);
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
        const modeLabel = isDebug ? 'DEBUG' : 'MINIFIED';
        const devkitNote = devkitCode ? ' (devkit: MINIFIED)' : '';
        console.log(`  ✓ ${relativeOutputFile} (${sizeKb} KB) [${modeLabel}]${devkitNote}`);
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
        // Build single entry by file name without extension.
        const file = getBuildFiles().find(entryFile =>
            path.basename(entryFile, '.ts').toLowerCase() === entityName.toLowerCase()
        );

        if (!file) {
            console.error(`Entry file not found: ${entityName}.ts`);
            process.exit(1);
        }

        console.log(`Step 2: Building entry: ${file}`);
        const success = await buildEntry(file, minifiedDevkitCode);
        cleanupBuildFolder();
        console.log(`\nBuild completed. Output: build/\n`);
        process.exit(success ? 0 : 1);
    } else {
        // Build all entry files
        const entryFiles = getBuildFiles();

        if (entryFiles.length === 0) {
            console.log('No entry .ts files found to build.');
            return;
        }

        console.log(`Step 2: Building ${entryFiles.length} entry file(s):`);
        let success = true;
        for (const file of entryFiles) {
            success = await buildEntry(file, minifiedDevkitCode) && success;
        }

        cleanupBuildFolder();
        console.log(`\nBuild completed. Output: build/\n`);
        process.exit(success ? 0 : 1);
    }
}

build().catch(err => {
    console.error(err);
    process.exit(1);
});

