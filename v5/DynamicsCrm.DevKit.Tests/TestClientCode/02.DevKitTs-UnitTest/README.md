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
# From TestClientCode folder:

# 1. Install all dependencies (first time)
.\Install-All.ps1

# 2. Sync files from Source of Truth
.\Sync-All.ps1

# 3. Run tests with coverage (from this folder)
cd 02.DevKitTs-UnitTest
.\RunCodeCoverage.ps1
```

## PowerShell Scripts

| Script | Location | Purpose |
|--------|----------|---------|
| `Install-All.ps1` | TestClientCode | Install npm packages for all 6 folders |
| `Sync-All.ps1` | TestClientCode | Sync all source of truth files |
| `Clean-All.ps1` | TestClientCode | Clean all generated files |
| `RunCodeCoverage.ps1` | This folder | Run tests with coverage, open HTML report |

## NPM Scripts

| Command | Description |
|---------|-------------|
| `npm run check` | Run TypeScript type checking |
| `npm run devkit-test` | Run tests with coverage report |
| `npm run debug` | Build all entities in debug mode |
| `npm run release` | Build all entities in release mode |

## Source of Truth

Files synced from `DynamicsCrm.DevKit.Shared\Resources\`:
- `ts\devkit.ts` → `lib\devkit.ts`
- `ts\devkit.ts` → `lib\devkit.d.ts`
- `ts\build.js` → `build.js`

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
