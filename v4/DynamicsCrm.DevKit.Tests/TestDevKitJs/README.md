# TestDevKitJs - JavaScript DevKit Testing Project

> **Source of Truth** for JavaScript DevKit Implementation

## Overview

This project provides unit testing and development environment for the DevKit JavaScript library used in Dynamics CRM web resources.

## Project Structure

```
TestDevKitJs/
├── lib/
│   └── devkit.js          # Core DevKit JavaScript library
├── entities/
│   ├── devkit.d.ts        # TypeScript definitions
│   ├── Account.js         # Entity implementation sample
│   ├── Account.form.js    # Form implementation sample
│   └── Account.webapi.js  # WebAPI implementation sample
├── test/
│   ├── devkit.test.js     # Unit tests
│   ├── sync-devkit.js     # Sync helper script
│   └── restore-devkit.js  # Restore helper script
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

# 2. Copy devkit.js from shared resources (converts to ES module)
.\2.CopyDevKitJs.ps1

# 3. Install dependencies & run tests
.\3.Install.ps1

# 4. Run code coverage
.\4.RunCodeCoverage.ps1
```

## NPM Scripts

| Command | Description |
|---------|-------------|
| `npm test` | Run unit tests |
| `npm run coverage` | Run tests with coverage report |
| `npm run test:debug` | Run tests in debug mode |

## PowerShell Scripts

| Script | Purpose |
|--------|---------|
| `1.Clean.ps1` | Clean `node_modules`, `coverage`, `.vs`, `.vscode`, `package-lock.json` |
| `2.CopyDevKitJs.ps1` | Copy `devkit.js` from shared source, convert to ES module |
| `3.Install.ps1` | Install npm dependencies and run tests |
| `4.RunCodeCoverage.ps1` | Run coverage and open HTML report |

## Deployment

To deploy the JavaScript DevKit files to TestWebResource:

```cmd
deploy.devkitjs.bat
```

This script:
1. Runs unit tests with coverage
2. Copies files to `../TestWebResource/Dev.DevKit.WebResource/`:
   - `lib/devkit.js` → `lib/devkit.js`
   - `entities/devkit.d.ts` → `entities/devkit.d.ts`
   - `entities/Account.js` → `entities/Account.js`
   - `entities/Account.form.js` → `entities/Account.form.js`
   - `entities/Account.webapi.js` → `entities/Account.webapi.js`

## Architecture

- Uses **ES Modules** (`type: "module"` in package.json)
- Uses `loadFormV2` pattern (factory-based)
- Exposes global `devKit` object via IIFE
- Accesses global `Xrm` directly

## Dependencies

- **jest** - Testing framework
- **xrm-mock** - Mock library for Xrm object
