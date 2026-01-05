# DevKitTs UnitTest - TypeScript DevKit Testing Project

> **Source of Truth**: [ClientCode.md](../.agent/rules/ClientCode.md)

## Overview

This project provides unit testing and code coverage for the DevKit TypeScript library used in Dynamics CRM web resources.

## Project Structure

```
02.DevKitTs-UnitTest/
├── lib/
│   ├── devkit.ts          # Core DevKit TypeScript library
│   └── devkit.d.ts        # TypeScript definitions (copy of devkit.ts)
├── entities/
│   ├── Account.form.ts    # Form implementation
│   ├── Account.webapi.ts  # WebAPI implementation
│   └── OptionSet.ts       # OptionSet definitions
├── test/
│   ├── devkit/            # DevKit core tests
│   └── account/           # Account entity tests
└── coverage/              # Jest coverage reports
```

## Quick Start

### Prerequisites
- Node.js (v18+)
- npm

### Setup & Run

```powershell
# 1. Clean previous artifacts (node_modules, coverage, etc.)
.\1.Clean.ps1

# 2. Sync devkit.ts + devkit.d.ts + build.js from Source of Truth (v5)
.\2.Sync.ps1

# 3. Install dependencies, run tests with coverage, open report
.\3.RunCodeCoverage.ps1
```

## PowerShell Scripts

| Script | Purpose |
|--------|---------|
| `1.Clean.ps1` | Clean `node_modules`, `coverage`, `.vs`, `.vscode`, `package-lock.json` |
| `2.Sync.ps1` | Sync `devkit.ts` → `lib/devkit.ts`, `lib/devkit.d.ts` and `build.js` from Source of Truth |
| `3.RunCodeCoverage.ps1` | Install npm packages (if needed), run coverage, open HTML report |

## NPM Scripts

| Command | Description |
|---------|-------------|
| `npm run check` | Run TypeScript type checking |
| `npm run devkit-test` | Run tests with coverage report |
| `npm run debug` | Build all entities in debug mode |
| `npm run release` | Build all entities in release mode |

## Source of Truth

Files synced from `DynamicsCrm.DevKit.Shared\Resources\`:
- `devkit.ts` → `lib\devkit.ts`
- `devkit.ts` → `lib\devkit.d.ts`
- `build.js` → `build.js`

## Architecture

- Uses **TypeScript** with strict typing
- Uses **`loadFormV3`** pattern (Generic, class-based)
- Returns strongly typed **`FormBase`** class instance
- Designed for module-based imports
- Accesses global **`Xrm`** via helper **`getXrm()`**

## Dependencies

- **typescript** - TypeScript compiler
- **esbuild** - Fast bundler
- **jest** + **ts-jest** - Testing framework
- **xrm-mock** - Mock library for Xrm object
