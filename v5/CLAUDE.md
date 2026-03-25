# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**DynamicsCrm.DevKit** is a development toolkit for Microsoft Dynamics 365 / Power Platform / Dataverse. It provides a Visual Studio 2026 VSIX extension, a .NET global CLI tool (`devkit`), 21 Roslyn analyzers, and an MCP server for AI agent integration.

## Solution Files

| Solution | Purpose |
|----------|---------|
| `DynamicsCrm.DevKit.AllInOne.slnx` | Main development (all components) |
| `DynamicsCrm.DevKit.slnx` | VSIX only |
| `DynamicsCrm.DevKit.Cli.slnx` | CLI only |
| `DynamicsCrm.DevKit.Analyzers.slnx` | Analyzers only |

## Components & Frameworks

| Component | Path | Framework |
|-----------|------|-----------|
| VSIX | `DynamicsCrm.DevKit/` | .NET Framework 4.8 |
| CLI | `DynamicsCrm.DevKit.Cli/` | .NET 10.0 |
| Analyzers | `DynamicsCrm.DevKit.Analyzers/` | .NET Standard 2.0 |
| Shared | `DynamicsCrm.DevKit.Shared/` | Shared Project (.shproj) |
| Tool | `DynamicsCrm.DevKit.Tool/` | .NET Framework 4.8 |
| UnitTests | `DynamicsCrm.DevKit.UnitTests/` | net48 + net10.0 |

The Shared project is a `.shproj` linked into VSIX, CLI, and Tool — single-source code sharing across frameworks.

## Build Commands

**VSIX must use MSBuild** (not `dotnet build`):
```
"C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe" DynamicsCrm.DevKit\DynamicsCrm.DevKit.csproj /p:Configuration=Debug
```

**CLI**:
```
dotnet build DynamicsCrm.DevKit.Cli\DynamicsCrm.DevKit.Cli.csproj --configuration Debug
```

**Analyzers**:
```
dotnet build DynamicsCrm.DevKit.Analyzers\DynamicsCrm.DevKit.Analyzers.csproj --configuration Debug
```

**Install CLI locally** (after building Release):
```
dotnet tool install --global --add-source Published DynamicsCrm.DevKit.Cli --version 4.12.34.56
```

Use **DEBUG** configuration by default. Use RELEASE only when explicitly requested.

## Testing

**Run all unit tests**:
```
dotnet test DynamicsCrm.DevKit.UnitTests\DynamicsCrm.DevKit.UnitTests.csproj
```

**Analyzer tests only** (net48, xUnit):
```
dotnet test DynamicsCrm.DevKit.UnitTests\DynamicsCrm.DevKit.UnitTests.csproj --framework net48
```

**CLI tests only** (net10.0, MSTest):
```
dotnet test DynamicsCrm.DevKit.UnitTests\DynamicsCrm.DevKit.UnitTests.csproj --framework net10.0
```

Analyzer unit tests use `CSharpAnalyzerVerifier<T>` with `[|code|]` markers for expected diagnostics:
```csharp
var src = WrapInPlugin("[|new ColumnSet(true)|]");
await CSharpAnalyzerVerifier<NotUseColumnSetTrueAnalyzer>.VerifyAnalyzerAsync(src);
```

Integration tests are in `DynamicsCrm.DevKit.Tests/` (15+ scenarios) and require a live Dataverse connection.

## Architecture

### CLI Architecture (Spectre.Console.Cli)
```
Program.cs → Spectre.Console.Cli
  ├── Commands/   → DevKitCommand<T> base (handles connection, validation)
  ├── Tasks/      → ITask → TaskXxx implementations (business logic)
  ├── Models/     → DevKitCommandArgs (base) → specific args per command
  ├── Mcp/        → MCP server (13 Dataverse tools)
  └── Services/   → LegacyArgConverter, UpdateChecker, DeploymentValidator
```

Each CLI command follows: **Command class** → delegates to **Task class** → reads config from **`DynamicsCrm.DevKit.Cli.json`**.

### Shared Project Key Files
- `XrmHelper.cs` — Dataverse operations (metadata, CRUD, deployment)
- `Helper.cs` — Code generation (C# late-bound, JS/TS form scripts, WebAPI helpers)
- `Const.cs` — Version info (dynamically injected at release by PowerShell scripts)
- `ConnectionBuilder/` — 6 auth methods with factory pattern
- `Models/` — 41+ config/entity classes for JSON deserialization

### Analyzer Architecture
All 21 analyzers (DEVKIT1001–DEVKIT1021) inherit `BaseDiagnosticAnalyzer`. Core files in `DynamicsCrm.DevKit.Analyzers/Core/`:
- `DiagnosticIdentifiers.cs` — All analyzer IDs
- `DiagnosticDescriptors.cs` — Descriptors with severity/message
- `AnalyzerHelper.cs` — Utilities (`IsPluginOrWorkflowClass`, deprecated message lists)

## CLI Authentication

All 15 CLI commands support `DEVKIT_*` environment variable fallback (priority: CLI args > env vars > empty):

| CLI Arg | Env Var |
|---------|---------|
| `--auth` | `DEVKIT_AUTH_TYPE` |
| `--url` | `DEVKIT_URL` |
| `--clientid` | `DEVKIT_CLIENT_ID` |
| `--clientsecret` | `DEVKIT_CLIENT_SECRET` |
| `--pacprofile` | `DEVKIT_PAC_PROFILE` |

## Running CLI Profiles

Profiles are defined in `DynamicsCrm.DevKit.Cli\Properties\launchSettings.json`. To run:
1. Read the profile's `workingDirectory` and `commandLineArgs`
2. `cd` to `workingDirectory`
3. Run the CLI exe with `commandLineArgs`

## Naming Conventions

| Type | Variable Name |
|------|---------------|
| `ServiceClient` | `serviceClient` |
| `IOrganizationService` | `crmService` |

## Critical Constraints

- **No git operations** unless explicitly requested
- **MSBuild for VSIX** — never use `dotnet build` for the VSIX project
- **PowerShell on Windows** — this project runs on Windows; use PowerShell equivalents (no `grep`, `cat`, `find`, `&&` chaining)
- Documentation goes in `DynamicsCrm.DevKit.Docs/{ComponentName}/`

## Release Build

Full release uses PowerShell scripts in `DynamicsCrm.DevKit.Scripts/`:
- `Release-DynamicsCrm-DevKit-CurrentDate.ps1` — Release with current date version
- `Release-DynamicsCrm-DevKit.ps1` — Full release
- Output goes to `Published/` folder (VSIX, NuGet packages, CLI)
- Version is injected into `Const.cs` at build time
