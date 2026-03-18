# CLI Migration Guide: v4 to v5

This comprehensive guide documents all changes required to migrate from **DynamicsCrm.DevKit v4** (Classic NuGet Package) to **DynamicsCrm.DevKit v5** (Modern .NET Global Tool).

---

## Table of Contents

1. [Architecture Overview](#1-architecture-overview)
2. [Installation](#2-installation)
3. [Command Mapping](#3-command-mapping)
4. [Argument Syntax](#4-argument-syntax)
5. [Authentication Methods](#5-authentication-methods)
6. [Batch File Migration](#6-batch-file-migration)
7. [JSON Configuration](#7-json-configuration)
8. [Legacy Compatibility](#8-legacy-compatibility)
9. [Troubleshooting](#9-troubleshooting)

---

## 1. Architecture Overview

### Core Changes

| Feature | v4 (Legacy) | v5 (Modern) |
| :--- | :--- | :--- |
| **Distribution** | NuGet Package (`packages\DynamicsCrm.DevKit.Cli.VERSION\tools\`) | .NET Global Tool (`devkit`) |
| **Installation** | Auto-restored via NuGet to `packages\` folder | Manual: `dotnet tool install -g DynamicsCrm.DevKit.Cli` |
| **Execution** | `DynamicsCrm.DevKit.Cli.exe` | `devkit` |
| **CLI Framework** | CmdLine library | Spectre.Console.Cli |
| **Target Framework** | .NET Framework 4.8 | .NET 10.0 |
| **Signing Key** | PFX certificate | SNK file |
| **Logging** | Console colors (CliLog) | Spectre.Console rich formatting |

### New Dependencies in v5

| Package | Purpose |
| :--- | :--- |
| `Spectre.Console` | Rich console UI with colors, tables, progress bars |
| `Spectre.Console.Cli` | Modern CLI framework with commands |
| `Azure.Identity` | Azure authentication chain |
| `System.Security.Cryptography.ProtectedData` | DPAPI encryption for secrets |
| `Microsoft.PowerPlatform.Dataverse.ModelBuilderLib` | PAC ModelBuilder integration |

---

## 2. Installation

### v4 (Legacy)
```powershell
# NuGet restore automatically places CLI in packages folder
# No manual installation required
```

### v5 (Modern)
```powershell
# Install as .NET Global Tool
dotnet tool install -g DynamicsCrm.DevKit.Cli

# Update to latest version
dotnet tool update -g DynamicsCrm.DevKit.Cli

# Verify installation
devkit --version
```

---

## 3. Command Mapping

v5 uses a command-based architecture. The `/type:` argument is replaced by explicit commands.

### Mapped Commands

| v4 `/type` Argument | v5 Command | Description |
| :--- | :--- | :--- |
| `generators` | `generator` | Generate JS/TS/C# code from entity metadata |
| `servers` | `server` | Deploy plugins, workflows, data providers |
| `webresources` | `webresource` | Deploy web resources |
| `proxytypes` | `proxytype` | Generate C# proxy types (Legacy CrmSvcUtil) |
| `solutionpackagers` | `legacy-solution` | Pack/Unpack solutions (Legacy SolutionPackager) |
| `downloadreports` | `downloadreport` | Download RDL files from solution |
| `uploadreports` | `uploadreport` | Upload RDL files to solution |
| `downloadwebresources` | `downloadwebresource` | Download web resources from solution |
| `datasources` | `datasource` | Create data source entities |

### New Commands in v5

| Command | Description |
| :--- | :--- |
| `modelbuilder` | Generate C# code using PAC ModelBuilder (Recommended) |
| `solution` | Pack/Unpack solutions using PAC CLI logic |

> **Note**: The `plugins`, `workflows`, and `dataproviders` types from older versions are consolidated into the `server` command in v5.

### Examples

```cmd
REM v4 - Deploy plugins
DynamicsCrm.DevKit.Cli.exe /conn:"..." /json:"..\..\cli.json" /type:"servers" /profile:"DEBUG"

REM v5 - Deploy plugins
devkit server --conn "..." --json "..\..\cli.json" --profile "DEBUG"
```

---

## 4. Argument Syntax

### Syntax Style Change

| v4 Syntax | v5 Syntax |
| :--- | :--- |
| `/arg:value` | `--arg value` or `--arg "value"` |
| `/arg:"value with spaces"` | `--arg "value with spaces"` |

### Argument Mapping

| v4 Argument | v5 Argument | Notes |
| :--- | :--- | :--- |
| `/conn` | `--conn` | Connection string (legacy but still supported) |
| `/json` | `--json` | Path to `DynamicsCrm.DevKit.Cli.json` |
| `/profile` | `--profile` | Profile name in JSON file |
| `/type` | *(removed)* | Replaced by command name |
| `/version` | `--version` | CoreTools version (auto-detected if omitted) |
| `/sdklogin:"yes"` | *(removed)* | Use `--auth Interactive` instead |
| `/url` | `--url` | Dynamics 365 URL (used with `--auth`) |
| `/onlyupdateassembly` | `--onlyupdateassembly` | Skip step registration |
| `/command` | `--command` | Additional commands (rarely used) |

### New v5 Arguments

| v5 Argument | Description |
| :--- | :--- |
| `--auth` | Authentication type (see [Authentication Methods](#5-authentication-methods)) |
| `--clientid` | Azure AD Application (Client) ID |
| `--clientsecret` | Client secret (plain text or DPAPI encrypted) |
| `--pacprofile` | PAC CLI profile name or index |
| `--username` | Username for OAuth/AD authentication |
| `--password` | Password for OAuth/AD authentication |
| `--domain` | Domain for AD authentication (on-premises) |

### Environment Variable Fallback (New in v5)

All connection arguments now support automatic fallback to `DEVKIT_*` environment variables. If a CLI argument is not provided, the CLI reads from the corresponding environment variable.

| v5 Argument | Environment Variable |
| :--- | :--- |
| `--conn` | `DEVKIT_CONNECTION` |
| `--auth` | `DEVKIT_AUTH_TYPE` |
| `--url` | `DEVKIT_URL` |
| `--clientid` | `DEVKIT_CLIENT_ID` |
| `--clientsecret` | `DEVKIT_CLIENT_SECRET` |
| `--pacprofile` | `DEVKIT_PAC_PROFILE` |
| `--username` | `DEVKIT_USERNAME` |
| `--password` | `DEVKIT_PASSWORD` |
| `--domain` | `DEVKIT_DOMAIN` |

Set env vars once, then all commands use them automatically:

```powershell
# One-time setup
[Environment]::SetEnvironmentVariable("DEVKIT_AUTH_TYPE", "ClientSecret", "User")
[Environment]::SetEnvironmentVariable("DEVKIT_URL", "https://org.crm.dynamics.com", "User")
[Environment]::SetEnvironmentVariable("DEVKIT_CLIENT_ID", "your-app-id", "User")
[Environment]::SetEnvironmentVariable("DEVKIT_CLIENT_SECRET", "your-secret", "User")

# Then just run commands without connection args
devkit server --json "cli.json" --profile "DEBUG"
```

---

## 5. Authentication Methods

### v4 Authentication

v4 supported only 2 authentication methods:

1. **Connection String** (`/conn:`) - Parsed by `Microsoft.PowerPlatform.Dataverse.Client`
2. **SDK Login Dialog** (`/sdklogin:"yes"`) - Out-of-browser OAuth popup

### v5 Authentication

v5 supports **6 authentication methods** via the `--auth` argument:

| Auth Type | Best For | v4 Equivalent |
| :--- | :--- | :--- |
| `Interactive` | Developers with MFA | `/sdklogin:"yes"` |
| `DeviceCode` | Headless, SSH, CI containers | *(new)* |
| `ClientSecret` | CI/CD pipelines | `/conn:"AuthType=ClientSecret;..."` |
| `OAuth` | Legacy username/password | `/conn:"AuthType=OAuth;..."` |
| `AD` | On-premise Active Directory | `/conn:"AuthType=AD;..."` |
| `FromPac` | Reuse PAC CLI tokens (zero login!) | *(new)* |

### Migration Examples

**Interactive Authentication (replacement for `/sdklogin`)**
```cmd
REM v4
DynamicsCrm.DevKit.Cli.exe /sdklogin:"yes" /url:"https://org.crm.dynamics.com" /json:"..." /type:"servers" /profile:"DEBUG"

REM v5
devkit server --auth Interactive --url "https://org.crm.dynamics.com" --json "..." --profile "DEBUG"
```

**ClientSecret Authentication**
```cmd
REM v4
DynamicsCrm.DevKit.Cli.exe /conn:"AuthType=ClientSecret;Url=https://org.crm.dynamics.com;ClientId=xxxx;ClientSecret=yyyy" /json:"..." /type:"servers" /profile:"DEBUG"

REM v5 (connection string still works)
devkit server --conn "AuthType=ClientSecret;Url=https://org.crm.dynamics.com;ClientId=xxxx;ClientSecret=yyyy" --json "..." --profile "DEBUG"

REM v5 (modern syntax - recommended)
devkit server --auth ClientSecret --url "https://org.crm.dynamics.com" --clientid "xxxx" --clientsecret "yyyy" --json "..." --profile "DEBUG"
```

**FromPac Authentication (NEW - Recommended for Developers)**
```cmd
REM v5 only - reuses existing PAC CLI tokens
devkit server --auth FromPac --pacprofile "DEVKITV4" --json "..." --profile "DEBUG"
```

---

## 6. Batch File Migration

### Template Placeholder Changes

| v4 Placeholder | v5 Placeholder | Description |
| :--- | :--- | :--- |
| `$ConnectionString$` | `$CliConnectionArgs$` | Connection arguments (replaced by VSIX wizard) |

### Structural Changes

| Feature | v4 | v5 |
| :--- | :--- | :--- |
| CLI Discovery | `for /f` loop to find `DynamicsCrm.DevKit.Cli.exe` in packages | `where devkit` check for global tool |
| Error Handling | None | Displays installation instructions if `devkit` not found |
| Clipboard | None | Copies install command to clipboard |

### Complete Migration Example

**v4 Pattern (Legacy)**
```bat
@echo off
for /f "delims=" %%d in ('dir /a:d /o:-n /s ..\packages\DynamicsCrm.DevKit.Cli.* /b') do if not defined DynamicsCrmDevKitCli set DynamicsCrmDevKitCli=%%d
set ConnectionString="$ConnectionString$"
"%DynamicsCrmDevKitCli%\tools\DynamicsCrm.DevKit.Cli.exe" /conn:%ConnectionString% /json:"..\DynamicsCrm.DevKit.Cli.json" /type:"servers" /profile:"DEBUG"
```

**v5 Pattern (Modern)**
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

devkit server $CliConnectionArgs$ --json "..\DynamicsCrm.DevKit.Cli.json" --profile "DEBUG"
```

### Command Mapping in Batch Files

| v4 | v5 |
| :--- | :--- |
| `/type:"servers" /profile:"DEBUG"` | `server ... --profile "DEBUG"` |
| `/type:"generators" /profile:"JS-FORM"` | `generator ... --profile "JS-FORM"` |
| `/type:"webresources" /profile:"DEBUG"` | `webresource ... --profile "DEBUG"` |
| `/type:"proxytypes" /profile:"ALL"` | `proxytype ... --profile "ALL"` |
| `/type:"solutionpackagers" /profile:"Extract"` | `legacy-solution ... --profile "Extract"` |
| `/type:"downloadreports" /profile:"DEBUG"` | `downloadreport ... --profile "DEBUG"` |
| `/type:"uploadreports" /profile:"DEBUG"` | `uploadreport ... --profile "DEBUG"` |
| `/type:"datasources" /profile:"DEBUG"` | `datasource ... --profile "DEBUG"` |


---

## 7. JSON Configuration

### No Changes Required

The `DynamicsCrm.DevKit.Cli.json` configuration file structure is **100% compatible** between v4 and v5. All profile arrays remain the same:

- `plugins`
- `workflows`
- `webresources`
- `dataproviders`
- `datasources`
- `solutionpackagers`
- `generators`
- `proxytypes`
- `downloadwebresources`
- `downloadreports`
- `servers`
- `uploadreports`

### Example Configuration

```json
{
  "servers": [
    {
      "profile": "DEBUG",
      "solution": "YourSolution",
      "folder": "bin\\Debug",
      "includefiles": ["*.dll"],
      "excludefiles": []
    }
  ],
  "generators": [
    {
      "profile": "JS-FORM",
      "type": "JsForm",
      "rootfolder": "entities",
      "rootnamespace": "YourNamespace",
      "entities": "Account,Contact"
    }
  ]
}
```

---

## 8. Legacy Compatibility

### Automatic Argument Conversion

v5 includes a `LegacyArgConverter` class that automatically converts v4 syntax to v5 syntax at runtime. This means **existing v4 scripts will work without modification**.

**The converter handles:**
- `/arg:value` → `--arg value`
- `/type:"generators"` → `generator` command
- `/sdklogin:"yes"` → `--sdk-login` flag (deprecated warning shown)
- `/onlyupdateassembly:"yes"` → `--onlyupdateassembly` flag

### Example

```cmd
REM This v4 syntax still works in v5!
devkit /conn:"AuthType=ClientSecret;..." /json:"..\..\cli.json" /type:"servers" /profile:"DEBUG"

REM Internally converted to:
devkit server --conn "AuthType=ClientSecret;..." --json "..\..\cli.json" --profile "DEBUG"
```

### Deprecated Features

| v4 Feature | v5 Status | Migration Path |
| :--- | :--- | :--- |
| `/sdklogin:"yes"` | Removed | Use `--auth Interactive` |
| `SimpleJson.cs` | Removed | Uses `System.Text.Json` internally |
| CmdLine library | Removed | Uses Spectre.Console.Cli |
| NuGet package distribution | Replaced | Use .NET Global Tool |

---

## 9. Troubleshooting

### "devkit is not recognized..."

```powershell
# Ensure the tool is installed
dotnet tool install -g DynamicsCrm.DevKit.Cli

# If already installed, you may need to restart your terminal or add to PATH
# The install command will show the exact path where the tool was installed
```

### Connection Errors

v5 enforces stricter connection string parsing. Ensure your connection string matches the format expected by `Microsoft.PowerPlatform.Dataverse.Client`.

```cmd
REM Valid connection string format
--conn "AuthType=ClientSecret;Url=https://org.crm.dynamics.com;ClientId=xxxx;ClientSecret=yyyy"
```

### Modern Auth Errors

```cmd
REM If Interactive auth fails, try DeviceCode instead
devkit server --auth DeviceCode --url "https://org.crm.dynamics.com" --json "..." --profile "DEBUG"

REM Check PAC profiles for FromPac auth
pac auth list
```

### JSON Config Errors

- Profile names are **case-sensitive** - ensure exact match
- Path separators: use `\\` in JSON, or use forward slashes `/`
- Check that all referenced files exist at the specified paths

### Version Mismatch

```powershell
# Update to latest version
dotnet tool update -g DynamicsCrm.DevKit.Cli

# Check current version
devkit --version
```

---

## Quick Reference Card

### v4 → v5 Command Examples

```cmd
REM v4: Deploy plugins with connection string
"%packages%\tools\DynamicsCrm.DevKit.Cli.exe" /conn:"AuthType=ClientSecret;..." /json:"..\cli.json" /type:"servers" /profile:"DEBUG"

REM v5: Same with new syntax
devkit server --conn "AuthType=ClientSecret;..." --json "..\cli.json" --profile "DEBUG"

REM v5: Better - use modern auth
devkit server --auth FromPac --pacprofile "MyProfile" --json "..\cli.json" --profile "DEBUG"
```

```cmd
REM v4: Generate TypeScript forms
"%packages%\tools\DynamicsCrm.DevKit.Cli.exe" /conn:"..." /json:"..\..\cli.json" /type:"generators" /profile:"TS-FORM"

REM v5: Same with new syntax
devkit generator --auth Interactive --url "https://org.crm.dynamics.com" --json "..\..\cli.json" --profile "TS-FORM"
```

```cmd
REM v4: Extract solution
"%packages%\tools\DynamicsCrm.DevKit.Cli.exe" /conn:"..." /json:"..\cli.json" /type:"solutionpackagers" /profile:"Extract"

REM v5: Same with new syntax
devkit solutionpackager --auth ClientSecret --url "..." --clientid "..." --clientsecret "..." --json "..\cli.json" --profile "Extract"
```

---

## Summary of Changes

| Category | v4 | v5 |
| :--- | :--- | :--- |
| **Installation** | NuGet restore | `dotnet tool install -g` |
| **Execution** | `DynamicsCrm.DevKit.Cli.exe` | `devkit` |
| **Syntax** | `/arg:value` | `--arg value` |
| **Command** | `/type:"..."` | Command name (lowercase) |
| **Auth Methods** | 2 (string + SDK login) | 6 (modern + legacy) |
| **Framework** | .NET Framework 4.8 | .NET 10.0 |
| **CLI Library** | CmdLine | Spectre.Console.Cli |
| **JSON Config** | 100% compatible | 100% compatible |
| **Legacy Support** | N/A | Full auto-conversion |
