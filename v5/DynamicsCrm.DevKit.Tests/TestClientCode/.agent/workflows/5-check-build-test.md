---
description: Run checks, release builds, and tests for all TestClientCode projects
---

# Check, Build, and Test Workflow

This workflow runs the `05.Check-Build-Test.ps1` script to execute a comprehensive set of checks, builds, and tests across all 6 TestClientCode projects.

## Scope

This script covers:
- **01.DevKitJs-UnitTest**: `npm test`, `npm run coverage`
- **02.DevKitTs-UnitTest**: `npm run check`, `npm run release`, `npm run devkit-test`
- **04.DevKitTs-AICode**: `npm run check`, `npm run release`
- **06.DevKitTs-Vsix**: `npm run check`, `npm run release`

(Projects 03 and 05 are JS-only without specific build/test steps in this script)

## Run Script

// turbo
```powershell
cd D:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Tests\TestClientCode
.\05.Check-Build-Test.ps1
```

## Success Criteria

The script will produce a summary at the end. All 6 projects must be processed.
- If any step fails, the script exits with an error.
- Success requires all checks, builds, and tests to pass.
