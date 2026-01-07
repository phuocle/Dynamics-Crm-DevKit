# DevKitTs UnitTest - TypeScript DevKit Testing Project

> **Source of Truth**: [ClientCode.md](../.github/copilot-instructions.md)

## Overview

This project provides unit testing and code coverage for the DevKit TypeScript library used in Dynamics CRM web resources.

## Project Structure

```
02.DevKitTs-UnitTest/
├── lib/
│   ├── devkit.ts          # Core DevKit TypeScript library
│   └── devkit.d.ts        # TypeScript definitions
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

# 1. Clean (optional)
.\01.Clean-All.ps1

# 2. Install all dependencies
.\02.Install-All.ps1

# 3. Generate entity files from CRM
.\03.Generate-All.ps1

# 4. Sync files from Source of Truth
.\04.Sync-All.ps1

# 5. Build TypeScript projects
.\05.Build-All.ps1

# 6. Run tests
.\06.Test-All.ps1
```

## PowerShell Scripts

| Script | Purpose |
|--------|---------|
| `01.Clean-All.ps1` | Clean all generated files |
| `02.Install-All.ps1` | Install npm packages for all 6 folders |
| `03.Generate-All.ps1` | Run CLI to generate entity form/webapi files |
| `04.Sync-All.ps1` | Sync all source of truth files |
| `05.Build-All.ps1` | Build TypeScript projects |
| `06.Test-All.ps1` | Run all tests |

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
