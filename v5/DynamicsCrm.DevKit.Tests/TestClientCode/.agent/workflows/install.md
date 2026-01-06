---
description: Install all NPM packages in TestClientCode folders for development
---

# Install TestClientCode Workflow

This workflow installs NPM packages for all 6 TestClientCode folders to prepare the development environment.

## Package Locations

The following folders contain `package.json`:

| Folder | Path |
|--------|------|
| 01.DevKitJs-UnitTest | `01.DevKitJs-UnitTest/` |
| 02.DevKitTs-UnitTest | `02.DevKitTs-UnitTest/` |
| 03.DevKitJs-AICode | `03.DevKitJs-AICode/Dev.DevKit.WebResource/` |
| 04.DevKitTs-AICode | `04.DevKitTs-AICode/Dev.DevKit.WebResourceTs/` |
| 05.DevKitJs-Vsix | `05.DevKitJs-Vsix/Dev.DevKit.WebResource/` |
| 06.DevKitTs-Vsix | `06.DevKitTs-Vsix/Dev.DevKit.WebResourceTs/` |

## Run Install Script

// turbo
```powershell
cd D:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Tests\TestClientCode
.\Install-All.ps1
```

## What Gets Installed

Each folder installs its own dependencies:

### UnitTest folders (01, 02):
- `jest` - Testing framework
- `typescript` - TypeScript compiler
- `@types/jest`, `@types/xrm` - Type definitions

### AICode & Vsix folders (03-06):
- `esbuild` - Build bundler
- `typescript` - TypeScript compiler
- `@types/xrm` - Xrm type definitions

## Verify Installation

After running, check each folder has `node_modules/`:

```powershell
# Quick check
Get-ChildItem -Path . -Recurse -Directory -Filter "node_modules" | Select-Object FullName
```
