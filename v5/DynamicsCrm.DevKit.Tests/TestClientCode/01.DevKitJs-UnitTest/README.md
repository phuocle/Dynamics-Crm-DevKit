# DevKitJs UnitTest - JavaScript DevKit Testing Project

> **Source of Truth**: [ClientCode.md](../.agent/rules/ClientCode.md)

## Overview

This project provides unit testing and code coverage for the DevKit JavaScript library used in Dynamics CRM web resources.

## Project Structure

```
01.DevKitJs-UnitTest/
├── lib/
│   └── devkit.mjs         # Core DevKit JavaScript library (ES Module)
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

# 1. Install all dependencies (first time)
.\Install-All.ps1

# 2. Sync files from Source of Truth
.\Sync-All.ps1

# 3. Run tests with coverage (from this folder)
cd 01.DevKitJs-UnitTest
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
| `npm test` | Run unit tests |
| `npm run coverage` | Run tests with coverage report |
| `npm run test:debug` | Run tests in debug mode |

## Source of Truth

Files synced from `DynamicsCrm.DevKit.Shared\Resources\`:
- `js\devkit.js` → `lib\devkit.mjs` (converted to ES module)
- `ts\devkit.d.ts` → `entities\devkit.d.ts`

## Architecture

- Uses **ES Modules** (`type: "module"` in package.json)
- Uses **`loadFormV2`** pattern (factory-based)
- Exposes global **`devKit`** object via IIFE
- Accesses global **`Xrm`** directly

## Dependencies

- **jest** - Testing framework
- **xrm-mock** - Mock library for Xrm object
