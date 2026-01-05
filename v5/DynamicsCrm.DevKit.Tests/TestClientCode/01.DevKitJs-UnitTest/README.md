# DevKitJs UnitTest - JavaScript DevKit Testing Project

> **Source of Truth**: [ClientCode.md](.agent/rules/ClientCode.md)

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
# 1. Clean previous artifacts (node_modules, coverage, etc.)
.\1.Clean.ps1

# 2. Sync devkit.js + devkit.d.ts from Source of Truth (v5)
.\2.Sync.ps1

# 3. Install dependencies, run tests with coverage, open report
.\3.RunCodeCoverage.ps1
```

## PowerShell Scripts

| Script | Purpose |
|--------|---------|
| `1.Clean.ps1` | Clean `node_modules`, `coverage`, `.vs`, `.vscode`, `package-lock.json` |
| `2.Sync.ps1` | Sync `devkit.js` → `lib/devkit.mjs` and `devkit.d.ts` → `entities/devkit.d.ts` from Source of Truth |
| `3.RunCodeCoverage.ps1` | Install npm packages (if needed), run coverage, open HTML report |

## NPM Scripts

| Command | Description |
|---------|-------------|
| `npm test` | Run unit tests |
| `npm run coverage` | Run tests with coverage report |
| `npm run test:debug` | Run tests in debug mode |

## Source of Truth

Files synced from `DynamicsCrm.DevKit.Shared\Resources\`:
- `devkit.js` → `lib\devkit.mjs` (converted to ES module)
- `devkit.d.ts` → `entities\devkit.d.ts`

## Architecture

- Uses **ES Modules** (`type: "module"` in package.json)
- Uses **`loadFormV2`** pattern (factory-based)
- Exposes global **`devKit`** object via IIFE
- Accesses global **`Xrm`** directly

## Dependencies

- **jest** - Testing framework
- **xrm-mock** - Mock library for Xrm object
