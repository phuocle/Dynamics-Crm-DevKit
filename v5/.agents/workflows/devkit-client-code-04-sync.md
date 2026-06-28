---
description: Sync all 5 core source-of-truth files and generator files to TestClientCode folders
---

# Sync Source of Truth Workflow

This workflow syncs all source-of-truth files to the 6 TestClientCode folders.

## Files Synced

### JavaScript (JS) Projects

- `devkit.js` → `lib/devkit.js`
- `devkit.d.ts` → `entities/devkit.d.ts`

### TypeScript (TS) Projects

- `devkit.ts` → `lib/devkit.ts`
- `devkit.d.ts` → `lib/devkit.d.ts`
- `build.js` → `build.js`
- `tsconfig.json` → `tsconfig.json`

## Run Sync Script

```powershell
cd D:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Tests\TestClientCode
.\04.Sync-All.ps1
```
