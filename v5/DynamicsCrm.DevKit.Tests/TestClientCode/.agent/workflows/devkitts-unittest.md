---
description: Run DevKitTs UnitTest with sync and code coverage report
---

# DevKitTs UnitTest Workflow

This workflow syncs source files and runs unit tests with code coverage for DevKitTs.

## Steps

// turbo
1. **Sync Source of Truth files** - Copy core files from ts/ folder:
   ```powershell
   # Sync 3 core files from ts/ folder
   cd d:\github\Dynamics-Crm-DevKit\v5
   Copy-Item -Path "DynamicsCrm.DevKit.Shared\Resources\ts\devkit.ts" -Destination "DynamicsCrm.DevKit.Tests\TestClientCode\02.DevKitTs-UnitTest\lib\devkit.ts" -Force
   Copy-Item -Path "DynamicsCrm.DevKit.Shared\Resources\ts\devkit.ts" -Destination "DynamicsCrm.DevKit.Tests\TestClientCode\02.DevKitTs-UnitTest\lib\devkit.d.ts" -Force
   Copy-Item -Path "DynamicsCrm.DevKit.Shared\Resources\ts\build.js" -Destination "DynamicsCrm.DevKit.Tests\TestClientCode\02.DevKitTs-UnitTest\build.js" -Force
   ```

// turbo
2. **Run 2.Sync.ps1** - Sync from Source of Truth:
   ```powershell
   cd d:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Tests\TestClientCode\02.DevKitTs-UnitTest
   powershell -ExecutionPolicy Bypass -File ".\2.Sync.ps1"
   ```

// turbo
3. **Run 3.RunCodeCoverage.ps1** - Run unit tests with coverage:
   ```powershell
   cd d:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Tests\TestClientCode\02.DevKitTs-UnitTest
   powershell -ExecutionPolicy Bypass -File ".\3.RunCodeCoverage.ps1"
   ```

4. **Report Coverage** - After running, extract and report the coverage results:
   - Parse the Jest output for coverage percentages
   - Report to user: Statements %, Branches %, Functions %, Lines %
   - Expected format:
     ```
     Code Coverage Report:
     | File      | Stmts | Branch | Funcs | Lines |
     |-----------|-------|--------|-------|-------|
     | devkit.ts |  XX%  |  XX%   |  XX%  |  XX%  |
     ```

## Expected Output

After running this workflow, you should report to the user:
- Whether all tests passed
- Code coverage percentages for each metric
- Any test failures if they occur
