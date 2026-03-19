---
description: "Install all NPM packages in TestClientCode folders for development"
mode: agent
---

# Install TestClientCode Workflow

This workflow installs NPM packages for all 6 TestClientCode folders to prepare the development environment.

## Package Locations

| Folder | Path |
|--------|------|
| 01.DevKitJs-UnitTest | `01.DevKitJs-UnitTest/` |
| 02.DevKitTs-UnitTest | `02.DevKitTs-UnitTest/` |
| 03.DevKitJs-AICode | `03.DevKitJs-AICode/Dev.DevKit.WebResource/` |
| 04.DevKitTs-AICode | `04.DevKitTs-AICode/Dev.DevKit.WebResourceTs/` |
| 05.DevKitJs-Vsix | `05.DevKitJs-Vsix/Dev.DevKit.WebResource/` |
| 06.DevKitTs-Vsix | `06.DevKitTs-Vsix/Dev.DevKit.WebResourceTs/` |

## Run Install Script

```powershell
cd D:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Tests\TestClientCode
.\02.Install-All.ps1
```

## What Gets Installed

### UnitTest folders (01, 02)

- `jest` - Testing framework
- `typescript` - TypeScript compiler
- `@types/jest`, `@types/xrm` - Type definitions

### AICode and Vsix folders (03-06)

- `esbuild` - Build bundler
- `typescript` - TypeScript compiler
- `@types/xrm` - Xrm type definitions

## Verify Installation

```powershell
Get-ChildItem -Path . -Recurse -Directory -Filter "node_modules" | Select-Object FullName
```
