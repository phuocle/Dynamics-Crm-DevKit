---
description: "Clean all build artifacts, node_modules, and cache to reset repo to fresh state"
---

# Clean Repository Workflow

This workflow resets the repository to a "fresh git checkout" state by removing all build artifacts, caches, and temporary files.

---

## When to Use

- Before testing a fresh build from scratch
- When disk space is low (node_modules can be huge!)
- After major version changes
- Before creating a release build
- When encountering strange build errors

---

## Quick Clean (Standard)

1. Run the clean script from the v5 folder:
```powershell
.\DynamicsCrm.DevKit.Scripts\Clean-Repository.ps1
```

This removes:
- `node_modules/` - NPM packages
- `bin/`, `obj/` - Build output
- `packages/` - NuGet packages (old style)
- `.vs/` - Visual Studio cache
- `Release/`, `Debug/` - Build configurations
- `TestResults/`, `CoverageReport/` - Test output
- `dist/` - TypeScript output
- `*.user`, `*.suo`, `*.log` - VS user files

---

## Preview Mode (Dry Run)

To see what would be deleted WITHOUT actually deleting:

1. Run with -DryRun flag:
```powershell
.\DynamicsCrm.DevKit.Scripts\Clean-Repository.ps1 -DryRun
```

This shows all files/folders that would be removed and estimated space savings.

---

## Full Clean (Including Published Packages)

To also remove `.nupkg` and `.vsix` files from the `Published/` folder:

1. Run with -IncludePublished flag:
```powershell
.\DynamicsCrm.DevKit.Scripts\Clean-Repository.ps1 -IncludePublished
```

⚠️ **Warning**: This deletes your built packages! Only use if you want to rebuild everything.

---

## Alternative: Git Clean

For the most thorough clean (removes ALL untracked files):

```powershell
# Preview what would be removed
git clean -fdxn

# Actually remove (DANGEROUS - removes everything not in git!)
git clean -fdx
```

⚠️ **Warning**: `git clean -fdx` removes EVERYTHING not tracked by git, including:
- Your `DynamicsCrm.DevKit.Cli.json` connection settings
- Any local configuration files
- `.env` files

Use the PowerShell script instead for a safer clean.

---

## After Cleaning

After running the clean script:

1. Verify git status is clean:
```powershell
git status
```

2. Restore NuGet packages:
```powershell
dotnet restore DynamicsCrm.DevKit.sln
```

3. Rebuild the solution:
```powershell
dotnet build DynamicsCrm.DevKit.sln -c Debug
```

Or run the full build workflow:
```
/build-debug
```

---

## Space Savings

Typical space freed by cleaning:

| Component | Typical Size |
|-----------|--------------|
| `node_modules/` | 200-500 MB per project |
| `packages/` | 100-300 MB |
| `.vs/` | 50-200 MB |
| `bin/` + `obj/` | 50-100 MB per project |

Total: **500 MB - 2 GB** can be freed on a typical checkout!

---

## Troubleshooting

### "Access denied" errors
Some files may be locked by Visual Studio. Close VS and try again.

### Files still remain after clean
Run the script twice, or use:
```powershell
# Close all file handles first
.\DynamicsCrm.DevKit.Scripts\Clean-Repository.ps1
Start-Sleep -Seconds 2
.\DynamicsCrm.DevKit.Scripts\Clean-Repository.ps1
```

### Want to keep node_modules
Edit the script and remove `'node_modules'` from `$foldersToDelete` array.
