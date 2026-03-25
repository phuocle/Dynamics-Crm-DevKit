---
description: "Run checks, release builds, and tests for all TestClientCode projects"
---

# Check, Build, and Test Workflow

This workflow runs comprehensive checks, builds, and tests across all 6 TestClientCode projects.

## Scope

| Project | Steps |
|---------|-------|
| 01.DevKitJs-UnitTest | `npm test`, `npm run coverage` |
| 02.DevKitTs-UnitTest | `npm run check`, `npm run release`, `npm run devkit-test` |
| 04.DevKitTs-AICode | `npm run check`, `npm run release` |
| 06.DevKitTs-Vsix | `npm run check`, `npm run release` |

> Projects 03 and 05 are JS-only without specific build/test steps in this script.

## Run Script

```powershell
cd D:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Tests\TestClientCode
.\05.Check-Build-Test.ps1
```

## Success Criteria

- All 6 projects must be processed
- If any step fails, the script exits with an error
- Success requires all checks, builds, and tests to pass
