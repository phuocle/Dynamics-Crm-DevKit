---
description: Build all TypeScript projects in release mode
---

# Build All TypeScript Workflow

This workflow builds all TypeScript projects in release mode for production deployment.

## Projects Built

- `02.DevKitTs-UnitTest`
- `04.DevKitTs-AICode\Dev.DevKit.WebResourceTs`
- `06.DevKitTs-Vsix\Dev.DevKit.WebResourceTs`

## Build Mode

- **Release**: All entity files are minified
- **devkit.ts**: Always minified (no debug needed for framework)
- **Output**: `build/` folder with minified `.js` files

## Run Build Script

// turbo
```powershell
cd D:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Tests\TestClientCode
.\Build-All.ps1
```
