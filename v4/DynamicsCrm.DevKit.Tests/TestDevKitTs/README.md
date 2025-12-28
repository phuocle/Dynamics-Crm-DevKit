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

## Architecture

- **TypeScript** based
- **loadFormV3** pattern (Generic, class-based)
- **Jest** testing framework
- **esbuild** for high-performance builds

## Dependencies

- **typescript**
- **esbuild**
- **jest** + **ts-jest**
- **xrm-mock**
