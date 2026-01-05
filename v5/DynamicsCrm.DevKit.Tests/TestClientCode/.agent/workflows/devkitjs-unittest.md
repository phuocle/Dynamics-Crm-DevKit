---
description: Run DevKitJs UnitTest with sync and code coverage report
---

# DevKitJs UnitTest Workflow

This workflow syncs source files and runs unit tests with code coverage for DevKitJs.

## Steps

// turbo
1. **Sync Source of Truth files** - Run the sync workflow:
   ```powershell
   # Sync 5 core files
   cd d:\github\Dynamics-Crm-DevKit\v5
   Copy-Item -Path "DynamicsCrm.DevKit.Shared\Resources\devkit.js" -Destination "DynamicsCrm.DevKit.Tests\TestClientCode\01.DevKitJs-UnitTest\lib\devkit.js" -Force
   Copy-Item -Path "DynamicsCrm.DevKit.Shared\Resources\devkit.d.ts" -Destination "DynamicsCrm.DevKit.Tests\TestClientCode\01.DevKitJs-UnitTest\entities\devkit.d.ts" -Force
   ```

// turbo
2. **Run 2.Sync.ps1** - Sync and convert to ES module:
   ```powershell
   cd d:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Tests\TestClientCode\01.DevKitJs-UnitTest
   powershell -ExecutionPolicy Bypass -File ".\2.Sync.ps1"
   ```

// turbo
3. **Run 3.RunCodeCoverage.ps1** - Run unit tests with coverage:
   ```powershell
   cd d:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Tests\TestClientCode\01.DevKitJs-UnitTest
   powershell -ExecutionPolicy Bypass -File ".\3.RunCodeCoverage.ps1"
   ```

4. **Report Coverage** - After running, extract and report the coverage results:
   - Parse the Jest output for coverage percentages
   - Report to user: Statements %, Branches %, Functions %, Lines %
   - Expected format:
     ```
     Code Coverage Report:
     | File       | Stmts | Branch | Funcs | Lines |
     |------------|-------|--------|-------|-------|
     | devkit.js  |  XX%  |  XX%   |  XX%  |  XX%  |
     ```

## Expected Output

After running this workflow, you should report to the user:
- Whether all tests passed
- Code coverage percentages for each metric
- Any test failures if they occur
