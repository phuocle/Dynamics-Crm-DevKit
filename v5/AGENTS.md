# DynamicsCrm.DevKit - AI Agent Instructions

> **Purpose**: This file provides instructions for AI coding agents (GitHub Copilot, OpenCode, Cursor, etc.) working with this codebase.

## Project Overview

**DynamicsCrm.DevKit** is a development toolkit for Microsoft Dynamics 365 / Power Platform / Dataverse. It includes:

| Component | Path | Description |
|-----------|------|-------------|
| **VSIX** | `DynamicsCrm.DevKit/` | Visual Studio 2026 extension with 13 project templates, 16 item templates |
| **CLI** | `DynamicsCrm.DevKit.Cli/` | .NET global tool for CI/CD automation (12 commands) |
| **Analyzers** | `DynamicsCrm.DevKit.Analyzers/` | 21 Roslyn analyzers (DEVKIT1001-1021) |
| **Shared** | `DynamicsCrm.DevKit.Shared/` | Common logic, XrmHelper, client-side resources |
| **Tool** | `DynamicsCrm.DevKit.Tool/` | Utility package |

---

## Response Format

- **Start with**: `"Xin chào anh Phước, rất vui được giúp anh"`
- **End with**: `"Công việc đã xong, vui lòng kiểm tra lại những gì tôi đã làm nhé anh Phước"`

---

## Critical Constraints

> [!IMPORTANT]
> AI agents MUST use **DEBUG mode** for all builds. Release mode requires PFX signing key password (human only).

### Build Tool

| Setting | Value |
|---------|-------|
| **Tool** | MSBuild (NOT `dotnet build` for VSIX) |
| **Path** | `C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe` |
| **Mode** | DEBUG only |

### Target Frameworks

- .NET Framework 4.6.2, 4.8
- .NET Standard 2.0

### Naming Conventions

- `serviceClient` for `ServiceClient` type
- `crmService` for `IOrganizationService` type

---

## Build Commands

### Build All Projects (DEBUG)

```powershell
$msbuild = "C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe"
& $msbuild "DynamicsCrm.DevKit.AllInOne.slnx" /t:Build /p:Configuration=Debug /v:m
```

### Build Individual Components

```powershell
# VSIX
& $msbuild "DynamicsCrm.DevKit.slnx" /t:Build /p:Configuration=Debug /v:m

# CLI
& $msbuild "DynamicsCrm.DevKit.Cli.slnx" /t:Build /p:Configuration=Debug /v:m

# Analyzers
dotnet build "DynamicsCrm.DevKit.Analyzers\DynamicsCrm.DevKit.Analyzers.csproj" --configuration Debug
```

---

## Release Scripts

| Script | Mode | PFX Required | Use Case |
|--------|------|--------------|----------|
| `Release-DynamicsCrm-DevKit-Debug.ps1` | DEBUG | No | AI Agent sessions |
| `Release-DynamicsCrm-DevKit-CurrentDate.ps1` | RELEASE | Yes | Human testing |
| `Release-DynamicsCrm-DevKit.ps1` | RELEASE | Yes | Official release |

---

## CLI Commands

The CLI (`devkit`) provides these commands:

| Command | Task File | Description |
|---------|-----------|-------------|
| `generator` | `TaskGenerator.cs` | Generate form/webapi code |
| `server` | `TaskServer.cs` | Deploy plugins, workflows, custom actions |
| `plugin` | `TaskServer.cs` | Deploy plugins only |
| `workflow` | `TaskServer.cs` | Deploy workflows only |
| `dataprovider` | `TaskServer.cs` | Deploy data providers |
| `webresource` | `TaskWebResource.cs` | Deploy web resources |
| `proxytype` | `TaskProxyType.cs` | Generate proxy types |
| `solution` | `TaskSolutionPackager.cs` | Extract/pack solutions |
| `downloadreport` | `TaskDownloadReport.cs` | Download reports |
| `uploadreport` | `TaskUploadReport.cs` | Upload reports |
| `downloadwebresource` | `TaskDownloadWebResource.cs` | Download web resources |
| `datasource` | `TaskDataSource.cs` | Create data sources |

### Run CLI with Profile

```powershell
# Read launchSettings.json for profile configuration
cd "[workingDirectory from profile]"
& "DynamicsCrm.DevKit.Cli\bin\Debug\net48\DynamicsCrm.DevKit.Cli.exe" [commandLineArgs from profile]
```

---

## Analyzer Development

### Unit Tests

```powershell
cd DynamicsCrm.DevKit.Analyzers
.\Run-Analyzer-Coverage.ps1
```

### VS Integration Tests

```powershell
# 1. Build analyzer
dotnet build DynamicsCrm.DevKit.Analyzers\DynamicsCrm.DevKit.Analyzers.csproj --configuration Debug --no-incremental

# 2. Copy to packages folder
Copy-Item -Path "DynamicsCrm.DevKit.Analyzers\bin\Debug\netstandard2.0\DynamicsCrm.DevKit.Analyzers.dll" `
  -Destination "DynamicsCrm.DevKit.Analyzers.Test.Vs\packages\DynamicsCrm.DevKit.Analyzers.4.0.0\analyzers\dotnet\cs\" -Force

# 3. Rebuild VS test project
& $msbuild "DynamicsCrm.DevKit.Analyzers.Test.Vs\DynamicsCrm.DevKit.Analyzers.Test.Vs.csproj" /t:Rebuild /p:Configuration=Debug /v:n
```

> [!NOTE]
> Close and reopen VS after copying DLL - VS caches analyzers aggressively.

---

## File Patterns

| Search Term | Look For |
|-------------|----------|
| `helper` | `*Helper.cs` (XrmHelper, FileHelper, JsonHelper) |
| `config` | `DynamicsCrm.DevKit.json`, `DynamicsCrm.DevKit.Cli.json` |
| `task` | `Tasks/*.cs` in CLI project |
| `wizard` | `Wizard/*.cs` in VSIX project |
| `analyzer` | `CrmAnalyzers/*.cs` in Analyzers project |

---

## Key Files

| File | Purpose |
|------|---------|
| `Const.cs` | Version and build info |
| `XrmHelper.cs` | Dataverse operations (1800+ lines) |
| `Helper.cs` | Code generation utilities |
| `DevKitPackage.cs` | VSIX entry point |
| `Program.cs` (CLI) | CLI entry point with Spectre.Console |

---

## Security

> [!CAUTION]
> Never commit connection strings or credentials. Use environment variables or Azure Key Vault.

- PFX key file (`DynamicsCrm.DevKit.pfx`) requires password for signing
- Connection strings should use OAuth/MFA when possible

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| VSIX won't build | Ensure "VSIX development workload" is installed |
| Analyzers silent | Check .editorconfig severity settings |
| Templates missing | Reinstall VSIX in experimental instance |
| Assembly not found | Check VSIX assembly loading in `DevKitPackage.cs` |