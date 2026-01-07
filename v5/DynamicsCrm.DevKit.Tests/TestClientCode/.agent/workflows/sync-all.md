---
description: Sync all 5 core files and generator files
---

# Sync Source of Truth Workflow

This workflow syncs all source of truth files to the 6 TestClientCode folders.

## Files Synced

### JavaScript (JS) Projects:
- `devkit.js` → `lib/devkit.js`
- `devkit.d.ts` → `entities/devkit.d.ts`

### TypeScript (TS) Projects:
- `devkit.ts` → `lib/devkit.ts`
- `devkit.ts` → `lib/devkit.d.ts`
- `build.js` → `build.js`
- `tsconfig.json` → `tsconfig.json`

## Run Sync Script

// turbo
```powershell
cd D:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Tests\TestClientCode
.\03.Sync-All.ps1
```