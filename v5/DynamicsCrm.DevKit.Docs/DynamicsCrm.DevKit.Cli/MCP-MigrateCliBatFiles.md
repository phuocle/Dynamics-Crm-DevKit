# MCP Tool: migrate_bat_files (v4 → v5)

## Overview

MCP tool that helps AI agents migrate DynamicsCrm.DevKit v4 batch files to v5 .NET global tool syntax.

| Tool | Description |
|------|-------------|
| `migrate_bat_files` | Scan (dry_run=true) or migrate (dry_run=false) v4 .bat files to v5 |

## User Prompts That Trigger This Tool

- "hãy migrate toàn bộ file .bat từ devkit cli packages qua dot net tool"
- "migrate cli qua dot net tool"
- "migrate bat files from v4 to v5"
- "convert bat files to use devkit global tool"
- "migrate from devkit packages to dotnet tool"

## AI Agent Workflow

```
Step 1: User asks to migrate
    ↓
Step 2: AI calls migrate_bat_files(folder_path, recurse=true, dry_run=true)
    ↓
Step 3: AI shows scan results to user (which files, what commands, what changes)
    ↓
Step 4: User confirms
    ↓
Step 5: AI calls migrate_bat_files(folder_path, recurse=true, dry_run=false)
    ↓
Step 6: AI shows migration results and post-migration steps
```

## What Changes

### v4 Format (Before)

```bat
@echo off & setlocal enabledelayedexpansion
for /f "tokens=*" %%a in ('dir /b /s "packages\DynamicsCrm.DevKit.Cli.*"') do (
    set DynamicsCrmDevKitCli=%%a
)
set ConnectionString=AuthType=ClientSecret;Url=https://org.crm.dynamics.com;ClientId=xxx;ClientSecret=yyy
"%DynamicsCrmDevKitCli%\tools\DynamicsCrm.DevKit.Cli.exe" /type:"servers" /conn:"%ConnectionString%" /json:"..\DynamicsCrm.DevKit.Cli.json" /profile:"DEBUG"
```

### v5 Format (After)

```bat
@echo off
REM Check if devkit is installed
where devkit >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo.
    echo ===============================================
    echo ERROR: DynamicsCrm.DevKit.Cli is not installed
    echo ===============================================
    echo.
    echo Please install the CLI tool first:
    echo.
    echo     dotnet tool install -g DynamicsCrm.DevKit.Cli
    echo.
    echo The command above has been COPIED to your clipboard.
    echo Just paste [Ctrl+V] and run it!
    echo.
    echo dotnet tool install -g DynamicsCrm.DevKit.Cli | clip
    pause
    exit /b 1
)

devkit server --auth "ClientSecret" --url "https://org.crm.dynamics.com" --clientid "xxx" --clientsecret "yyy" --json "..\DynamicsCrm.DevKit.Cli.json" --profile "DEBUG"
```

## Conversions Performed

| v4 Pattern | v5 Replacement |
|------------|----------------|
| `for /f ... DynamicsCrm.DevKit.Cli` loop | Removed (replaced by `where devkit` check) |
| `set ConnectionString=AuthType=...;Url=...` | Parsed into `--auth`, `--url`, `--clientid`, `--clientsecret` |
| `DynamicsCrm.DevKit.Cli.exe /type:"servers"` | `devkit server` |
| `/json:"..."` | `--json "..."` |
| `/profile:"..."` | `--profile "..."` |
| `/version:"..."` | `--version "..."` |
| `/onlyupdateassembly` | `--onlyupdateassembly` |
| `setlocal enabledelayedexpansion` | Removed |
| `goto :break`, `:break` labels | Removed |
| Version parsing lines | Removed |
| CoreTools detection | Removed |

## Type → Command Mapping

| v4 /type value | v5 devkit command |
|----------------|-------------------|
| `servers` | `server` |
| `generators` | `generator` |
| `webresources` | `webresource` |
| `plugins` | `plugin` |
| `workflows` | `workflow` |
| `dataproviders` | `dataprovider` |
| `proxytypes` | `proxytype` |
| `solutionpackagers` | `solution` |
| `downloadreports` | `downloadreport` |
| `uploadreports` | `uploadreport` |
| `downloadwebresources` | `downloadwebresource` |
| `datasources` | `datasource` |

## Connection String → Auth Args Mapping

| v4 Connection String Key | v5 CLI Argument |
|--------------------------|-----------------|
| `AuthType=ClientSecret` | `--auth "ClientSecret"` |
| `Url=https://...` | `--url "https://..."` |
| `ClientId=xxx` | `--clientid "xxx"` |
| `ClientSecret=yyy` | `--clientsecret "yyy"` |
| `Username=user` | `--username "user"` |
| `Password=pass` | `--password "pass"` |

## Tool Parameters

### migrate_bat_files

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `folder_path` | string | Yes | — | Folder containing bat files (typically solution root) |
| `recurse` | bool | No | true | Scan subfolders recursively |
| `dry_run` | bool | No | true | true=preview only, false=apply migration |

## Post-Migration Steps

1. Ensure `devkit` is installed: `dotnet tool install -g DynamicsCrm.DevKit.Cli`
2. Verify: `devkit --version`
3. Test each migrated .bat file
4. Update `$CliConnectionArgs$` placeholders if present
5. Remove NuGet package `DynamicsCrm.DevKit.Cli` from packages.config or .csproj
6. **Optional**: Set `DEVKIT_*` environment variables and remove connection args from batch files (see below)

## Environment Variable Fallback (Optional Simplification)

After migration, you can further simplify batch files by using environment variables instead of hardcoded connection args. Set env vars once:

```powershell
[Environment]::SetEnvironmentVariable("DEVKIT_AUTH_TYPE", "ClientSecret", "User")
[Environment]::SetEnvironmentVariable("DEVKIT_URL", "https://org.crm.dynamics.com", "User")
[Environment]::SetEnvironmentVariable("DEVKIT_CLIENT_ID", "your-app-id", "User")
[Environment]::SetEnvironmentVariable("DEVKIT_CLIENT_SECRET", "your-secret", "User")
```

Then batch files become:

```batch
devkit server --json "..\DynamicsCrm.DevKit.Cli.json" --profile "DEBUG"
```

## Source

Implementation: `DynamicsCrm.DevKit.Cli/Mcp/Tools/MigrateCliBatFilesTool.cs`
Original PowerShell script: `DynamicsCrm.DevKit.Scripts/Migrate-DevKit-V4-to-V5.ps1`
