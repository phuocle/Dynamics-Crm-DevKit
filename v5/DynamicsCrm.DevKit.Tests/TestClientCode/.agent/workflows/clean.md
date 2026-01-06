---
description: Clean all generated files in TestClientCode folders to restore fresh checkout state
---

# Clean TestClientCode Workflow

This workflow cleans all 6 TestClientCode folders (01-06) to restore them to a fresh git checkout state.

## What Gets Deleted

- `node_modules/` - NPM dependencies
- `coverage/` - Test coverage reports
- `build/` - Compiled JavaScript output
- `.vs/` - Visual Studio cache
- `bin/` - Binary output
- `obj/` - Object files
- `Release/` - Release builds
- `Debug/` - Debug builds
- `packages/` - NuGet packages
- `package-lock.json` - NPM lock files

## Run Clean Script

// turbo
```powershell
cd D:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Tests\TestClientCode
.\Clean-All.ps1
```

## Verify Clean

After running, all folders should be clean:
- No `node_modules` directories
- No `coverage` directories
- No `build` directories
- No `.vs` directories

## Restore After Clean

To restore dependencies after cleaning:

```powershell
# For UnitTest folders
cd 01.DevKitJs-UnitTest && npm install
cd 02.DevKitTs-UnitTest && npm install

# For AICode folders
cd 03.DevKitJs-AICode\Dev.DevKit.WebResource && npm install
cd 04.DevKitTs-AICode\Dev.DevKit.WebResourceTs && npm install

# For Vsix folders
cd 05.DevKitJs-Vsix\Dev.DevKit.WebResource && npm install
cd 06.DevKitTs-Vsix\Dev.DevKit.WebResourceTs && npm install
```
