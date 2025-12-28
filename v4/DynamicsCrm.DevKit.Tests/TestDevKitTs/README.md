# TestDevKitTs - TypeScript DevKit Testing Project

> **Source of Truth** for TypeScript DevKit Implementation

## Overview

This project provides unit testing and development environment for the DevKit TypeScript library used in Dynamics CRM web resources.

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
│   └── OptionSet.ts       # OptionSet definitions
├── test/
│   ├── devkit/            # DevKit core tests (11 files)
│   │   ├── devkit.getXrm.test.ts
│   │   ├── devkit.loadFormV3.test.ts
│   │   ├── devkit.loadWebApi.test.ts
│   │   └── ...
│   └── account/           # Account entity tests (13 files)
│       ├── Account.Test00.devkit.test.ts
│       ├── Account.Test01.form.test.ts
│       └── ...
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

# 3. Build TypeScript (release mode)
.\3.RunBuildRelease.ps1

# 4. Run code coverage
.\4.RunCodeCoverage.ps1
```

## NPM Scripts

| Command | Description |
|---------|-------------|
| `npm run check` | TypeScript type checking |
| `npm run debug` | Build with sourcemaps |
| `npm run release` | Production build (minified) |
| `npm run devkit-test` | Run DevKit tests with coverage |
| `npm run account-test` | Run Account tests with coverage |

## Jest Configurations

| Config | Tests | Coverage For |
|--------|-------|--------------|
| `jest.config.js` | `test/devkit/*.test.ts` | `lib/devkit.ts` |
| `jest.account.config.js` | `test/account/*.test.ts` + devkit | DevKit + Account entities |

## PowerShell Scripts

| Script | Purpose |
|--------|---------|
| `1.Clean.ps1` | Clean `node_modules`, `coverage`, `build`, `package-lock.json` |
| `2.Install.ps1` | Install npm dependencies and run tests |
| `3.RunBuildRelease.ps1` | Build TypeScript in release mode |
| `4.RunCodeCoverage.ps1` | Run coverage and open HTML report |

## Deployment

To deploy the TypeScript DevKit files to TestWebResourceTs:

```cmd
deploy.devkitts.bat
```

This script:
1. Runs `npm run devkit-test` (with coverage)
2. Runs `npm run account-test` (with coverage)
3. Builds TypeScript files (`npm run debug`)
4. Copies files to `../TestWebResourceTs/Dev.DevKit.WebResourceTs/`:
   - TypeScript source files → `entities/` and `lib/`
   - Built JavaScript → `build/`

## Architecture

- Uses **TypeScript** with strict typing
- Uses `loadFormV3` pattern (Generic, class-based)
- Returns strongly typed `FormBase` class instance
- Accesses global `Xrm` via `getXrm()` helper

## Dependencies

- **typescript** - TypeScript compiler
- **esbuild** - Fast bundler
- **jest** + **ts-jest** - Testing framework
- **xrm-mock** - Mock library for Xrm object
- **jsdom** - DOM simulation for testing
