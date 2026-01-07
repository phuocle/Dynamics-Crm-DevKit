# DevKitJs UnitTest - JavaScript DevKit Testing Project

> **Source of Truth**: [ClientCode.md](../.github/copilot-instructions.md)

## Overview

This project provides unit testing and code coverage for the DevKit JavaScript library used in Dynamics CRM web resources.

## Project Structure

```
01.DevKitJs-UnitTest/
├── lib/
│   └── devkit.js          # Core DevKit JavaScript library
├── entities/
│   ├── devkit.d.ts        # TypeScript definitions
│   ├── Account.d.ts       # Account entity TypeScript definition
│   ├── Account.form.js    # Form implementation
│   └── Account.webapi.js  # WebAPI implementation
├── test/
│   └── devkit.test.js     # Unit tests
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

# 5. Run checks, builds, and tests
.\05.Check-Build-Test.ps1
```

## PowerShell Scripts

| Script | Purpose |
|--------|---------|
| `01.Clean-All.ps1` | Clean all generated files |
| `02.Install-All.ps1` | Install npm packages for all 6 folders |
| `03.Generate-All.ps1` | Run CLI to generate entity form/webapi files |
| `04.Sync-All.ps1` | Sync all source of truth files |
| `05.Check-Build-Test.ps1` | Run checks, builds, and tests |

## NPM Scripts

| Command | Description |
|---------|-------------|
| `npm test` | Run unit tests |
| `npm run coverage` | Run tests with coverage report |

## Source of Truth

Files synced from `DynamicsCrm.DevKit.Shared\Resources\`:
- `js\devkit.js` → `lib\devkit.js`
- `js\devkit.d.ts` → `entities\devkit.d.ts`

## Architecture

- Uses **ES Modules** (`type: "module"` in package.json)
- Uses **`loadFormV2`** pattern (factory-based)
- Exposes global **`devKit`** object via IIFE
- Accesses global **`Xrm`** directly

## Dependencies

- **jest** - Testing framework
- **xrm-mock** - Mock library for Xrm object
