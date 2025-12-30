# TestDevKitTs - TypeScript DevKit Testing Project

> **Source of Truth** for TypeScript DevKit Implementation

## Overview

This project provides unit testing and development environment for the DevKit TypeScript library used in Dynamics CRM web resources.

## AI Context

For detailed AI assistant context and project architecture documentation, see **[AIContext.md](./AIContext.md)**.

## Project Structure

```
TestDevKitTs/
├── lib/
│   ├── devkit.ts          # Core DevKit TypeScript library
│   └── devkit.d.ts        # TypeScript definitions
├── entities/
│   ├── Account.ts         # Entity implementation sample
│   ├── Account.form.ts    # Form implementation sample
│   ├── Account.webapi.ts  # WebAPI implementation sample
│   ├── Account.Test*.ts   # Test files for Account form
│   └── OptionSet.ts       # OptionSet definitions
├── test/
│   ├── devkit/            # DevKit core tests
│   └── account/           # Account entity tests
├── build/                 # Compiled JavaScript output
└── coverage/              # Jest coverage reports
```

## Quick Start

### Prerequisites
- Node.js (v18+)
- npm

### Setup & Run (Fresh Install)

```powershell
# 1. Clean previous artifacts
.\1.Clean.ps1

# 2. Install dependencies & run tests
.\2.Install.ps1

# 3. Build & Deploy
.\deploy.devkitts.bat
```

## Build Commands

You can build **all entities** or a **specific entity**:

| Command | Description | Output |
|---------|-------------|--------|
| `npm run debug` | Build **ALL** entities | Debug mode (Inline SourceMap) |
| `npm run release` | Build **ALL** entities | Release mode (Minified) |
| `npm run debug Account` | Build **ONLY** Account | Debug mode |
| `npm run release Account` | Build **ONLY** Account | Release mode |

## Test Commands

| Command | Description |
|---------|-------------|
| `npm run devkit-test` | Run **ALL** tests (DevKit + Account) with coverage |
| `npm run check` | Run TypeScript type checking |

## PowerShell Scripts

| Script | Purpose |
|--------|---------|
| `1.Clean.ps1` | Clean `node_modules`, `coverage`, `build` |
| `2.Install.ps1` | Install packages and run tests |
| `3.RunBuildRelease.ps1` | Build TypeScript in release mode |
| `4.RunCodeCoverage.ps1` | Run coverage and open HTML report |
| `deploy.devkitts.bat` | Run tests → Build → Deploy to TestWebResourceTs |

## Deployment

To deploy the TypeScript DevKit files to TestWebResourceTs:

```cmd
deploy.devkitts.bat
```

This script:
1. Runs `npm run devkit-test` (All tests with coverage)
2. Builds TypeScript files (`npm run debug`)
3. Copies files to `../TestWebResourceTs/Dev.DevKit.WebResourceTs/`:
   - `lib/devkit.ts` → `lib/devkit.ts`
   - `lib/devkit.d.ts` → `lib/devkit.d.ts`
   - `entities/Account.ts` → `entities/Account.ts`
   - `entities/Account.form.ts` → `entities/Account.form.ts`
   - `entities/Account.webapi.ts` → `entities/Account.webapi.ts`
4. Copies compiled JavaScript to `../TestWebResourceTs/build/`:
   - `build/Account.js` → `build/Account.js`

### Deployment Target

**TestWebResourceTs** (`../TestWebResourceTs/Dev.DevKit.WebResourceTs/`) is the deployment target for TypeScript DevKit. Do NOT edit files directly in TestWebResourceTs - always make changes in TestDevKitTs first, then deploy using the script.

## Architecture

> **Important**: This is the TypeScript implementation with a fundamentally different architecture from JavaScript.

- **TypeScript** based with strict typing
- Uses **`loadFormV3`** pattern (Generic, class-based)
- Returns a strongly typed **`FormBase`** class instance
- Designed for module-based imports
- Accesses global `Xrm` via helper **`getXrm()`** for safety

### Comparison with JavaScript (TestDevKitJs)

| Feature | TypeScript (TestDevKitTs) | JavaScript (TestDevKitJs) |
|---------|---------------------------|---------------------------|
| Pattern | `loadFormV3` (Generic) | `loadFormV2` (Factory) |
| Return Type | `FormBase` class instance | Plain JS object |
| Xrm Access | Helper `getXrm()` | Direct global `Xrm` |
| Module | ES Module imports | IIFE global `devKit` |

For detailed comparison, see **[AIContext.md](./AIContext.md)**.

## Dependencies

- **typescript**
- **esbuild**
- **jest** + **ts-jest**
- **xrm-mock**
