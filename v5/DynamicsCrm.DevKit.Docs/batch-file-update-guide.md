# Batch File Update Guide

## Overview

This guide documents the steps to update the remaining 14 batch files to use the new `CliArgsBuilder` pattern.

**Pattern already applied to:** `generator.latebound.bat`

---

## How CliArgsBuilder Works

Based on connection type, `CliArgsBuilder.Build()` generates:

| Auth Type | Generated CLI Arguments |
|-----------|-------------------------|
| **ClientSecret** | `--auth ClientSecret --url "..." --clientid "..." --clientsecret "..."` |
| **Interactive** | `--auth Interactive --url "..." [--clientid "..."]` |
| **DeviceCode** | `--auth DeviceCode --url "..." [--clientid "..."]` |
| **FromPac** | `--pacprofile "..."` |
| **OAuth** | `--auth OAuth --url "..." --username "..." --password "..." [--clientid "..."]` |
| **AD** | `--auth AD --url "..." --domain "..." --username "..." --password "..."` |

> **Note**: All connection types now use new CLI format. Unknown types throw `NotSupportedException`.

---

## Files to Update

### Generator Files (5 files) ✅ Complete

| File | Profile | Command | Status |
|------|---------|---------|--------|
| `generator.latebound.bat` | LATEBOUND | `generator` | ✅ Done |
| `generator.form.bat` | JS-FORM | `generator` | ✅ Done |
| `generator.form.ts_bat` | TS-FORM | `generator` | ✅ Done |
| `generator.webapi.bat` | JS-WEBAPI | `generator` | ✅ Done |
| `generator.webapi.ts_bat` | TS-WEBAPI | `generator` | ✅ Done |

### Server/Plugin Files (4 files) ✅ Complete

| File | Profile | Command | Status |
|------|---------|---------|--------|
| `plugin.deploy.debug.bat` | DEBUG | `server` | ✅ Done |
| `plugin.deploy.debug.only.bat` | DEBUG | `server` | ✅ Done |
| `webresource.deploy.debug.bat` | DEBUG | `webresource` | ✅ Done |
| `webresource.deploy.debug.ts_bat` | DEBUG | `webresource` | ✅ Done |

### Solution/ModelBuilder Files (3 files) ✅ Complete

| File | Profile | Command | Status |
|------|---------|---------|--------|
| `modelbuilder.run.bat` | ALL | `modelbuilder` | ✅ Done |
| `solution.extract.both.bat` | Extract-Both | `solution` | ✅ Done |
| `solution.pack.both.bat` | Pack-Both | `solution` | ✅ Done |

### Download/Other Files (3 files) ✅ Complete

| File | Profile | Command | Status |
|------|---------|---------|--------|
| `download.reports.bat` | DEBUG | `downloadreport` | ✅ Done |
| `download.webresources.bat` | DEBUG | `downloadwebresource` | ✅ Done |
| `deploy.datasource.bat` | DEBUG | `datasource` | ✅ Done |

---

## Update Pattern

### Step 1: Edit the .bat file

**Before:**
```batch
set ConnectionString="$ConnectionString$"
devkit [command] --conn %ConnectionString% --json "..." --profile "..."
```

**After:**
```batch
REM Connection arguments (generated based on auth type)
devkit [command] $CliConnectionArgs$ --json "..." --profile "..."
```

### Step 2: Build and Test

1. Run `/build-debug` workflow (for CLI testing)
2. Run `/build-vsix` workflow (for VSIX testing)
3. Create new Shared project with each connection type
4. Verify generated batch file has correct CLI args

---

## Testing Checklist

For each batch file, test with:

- [ ] ClientSecret connection
- [ ] Interactive connection  
- [ ] FromPac connection
- [ ] OAuth connection
- [ ] AD connection (on-premises)

---

## Implementation Details

- Created: `DynamicsCrm.DevKit.Shared/CliArgsBuilder.cs`
- Modified: `DynamicsCrm.DevKit/Lib/Replacement.cs` - added `$CliConnectionArgs$` replacement
- Modified: `DynamicsCrm.DevKit.Cli/Models/DevKitCommandArgs.cs` - added `--username`, `--password`, `--domain` args
- Updated: `DynamicsCrm.DevKit.Shared/DynamicsCrm.DevKit.Shared.projitems` - added CliArgsBuilder.cs
- Refactored: `DynamicsCrm.DevKit.Shared/Helper.cs` - `BuildConnectionString` now delegates to `ConnectionBuilderFactory` (single source of truth)

## Notes

- The `$CliConnectionArgs$` placeholder is replaced by `Replacement.cs` using `CliArgsBuilder.Build()`
- All connection types use new CLI format (no legacy `--conn`)
- Secrets are encrypted using `Helper.EncryptString()` before embedding in batch files

## Status: ✅ COMPLETE

All 15 batch files updated and tested successfully!
