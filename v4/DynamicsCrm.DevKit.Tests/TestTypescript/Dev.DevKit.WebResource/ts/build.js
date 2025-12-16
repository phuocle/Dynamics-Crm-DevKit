/**
 * Build script - Tự động build tất cả entity .ts files
 * Usage: node build.js [debug|release]
 */

const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

const mode = process.argv[2] || 'debug';
const isDebug = mode === 'debug';

// Tìm tất cả các file .ts ở root (không bao gồm trong generator, node_modules, build)
const tsDir = __dirname;
const excludeDirs = ['generator', 'node_modules', 'build'];

function getEntityFiles() {
    const files = fs.readdirSync(tsDir);
    return files.filter(file => {
        // Chỉ lấy file .ts
        if (!file.endsWith('.ts')) return false;

        // Bỏ qua các file config
        if (file === 'build.ts') return false;

        const filePath = path.join(tsDir, file);
        const stat = fs.statSync(filePath);

        // Chỉ lấy file, không lấy directory
        return stat.isFile();
    });
}

async function build() {
    const entityFiles = getEntityFiles();

    if (entityFiles.length === 0) {
        console.log('No entity .ts files found to build.');
        return;
    }

    console.log(`\n=== Building in ${isDebug ? 'DEBUG' : 'RELEASE'} mode ===\n`);

    // Tạo folder build nếu chưa có
    const buildDir = path.join(tsDir, 'build');
    if (!fs.existsSync(buildDir)) {
        fs.mkdirSync(buildDir, { recursive: true });
    }

    // Build từng file
    for (const file of entityFiles) {
        const entityName = path.basename(file, '.ts');
        const entryPoint = path.join(tsDir, file);
        const outFile = path.join(buildDir, `${entityName}.js`);

        // Convention: IIFE[filename without .ts]
        // Ví dụ: Account.ts -> IIFEAccount
        // Ví dụ: Contact.ts -> IIFEContact
        const globalName = `IIFE${entityName}`;

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
            });

            const stats = fs.statSync(outFile);
            const sizeKb = (stats.size / 1024).toFixed(1);
            console.log(`  ✓ ${entityName}.js (${sizeKb} KB) - ${globalName}`);
        } catch (error) {
            console.error(`  ✗ ${entityName}.ts - Build failed:`, error.message);
        }
    }

    console.log(`\nBuild completed. Output: build/\n`);
}

build().catch(console.error);
