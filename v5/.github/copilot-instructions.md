# GitHub Copilot Instructions

> **Purpose**: Instructions for GitHub Copilot when working with DynamicsCrm.DevKit.

## Project Overview

**DynamicsCrm.DevKit** is a development toolkit for Microsoft Dynamics 365 / Power Platform / Dataverse:

- **VSIX Extension**: 13 project templates, 16 item templates for Visual Studio 2026
- **CLI Tool**: 12 commands for CI/CD automation (`devkit` global tool)
- **Roslyn Analyzers**: 21 rules (DEVKIT1001-1021) for CRM development best practices
- **Client Libraries**: JavaScript and TypeScript runtime for form scripts

## Response Format

- Start with: `"Xin chào anh Phước, rất vui được giúp anh"`
- End with: `"Công việc đã xong, vui lòng kiểm tra lại những gì tôi đã làm nhé anh Phước"`

---

## AI Build Rules

> [!IMPORTANT]
> AI agents MUST use **DEBUG mode** for all builds. Release mode requires PFX signing key password (human only).

### Build Commands

```powershell
# Build all (DEBUG)
$msbuild = "C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe"
& $msbuild "DynamicsCrm.DevKit.AllInOne.slnx" /t:Build /p:Configuration=Debug /v:m

# Build VSIX only
& $msbuild "DynamicsCrm.DevKit.slnx" /t:Build /p:Configuration=Debug /v:m

# Build CLI only
& $msbuild "DynamicsCrm.DevKit.Cli.slnx" /t:Build /p:Configuration=Debug /v:m
```

> **IMPORTANT**: Use MSBuild, NOT `dotnet build` for VSIX projects.

### Release Scripts

| Script | Mode | PFX Required | Use Case |
|--------|------|--------------|----------|
| `Release-DynamicsCrm-DevKit-Debug.ps1` | DEBUG | No | AI Agent sessions |
| `Release-DynamicsCrm-DevKit-CurrentDate.ps1` | RELEASE | Yes | Human testing |
| `Release-DynamicsCrm-DevKit.ps1` | RELEASE | Yes | Official release |

---

## C# Conventions

- Use `async/await` for async operations
- Variable naming: `serviceClient` for `ServiceClient`, `crmService` for `IOrganizationService`
- Target frameworks: .NET Framework 4.6.2, 4.8, and .NET Standard 2.0
- Use `FaultException<OrganizationServiceFault>` for CRM error handling

---

## Project Structure

| Project | Solution | Purpose |
|---------|----------|---------|
| **VSIX** | `DynamicsCrm.DevKit.slnx` | Visual Studio extension |
| **CLI** | `DynamicsCrm.DevKit.Cli.slnx` | Deployment automation tool |
| **Analyzers** | `DynamicsCrm.DevKit.Analyzers.csproj` | Roslyn code analyzers |
| **Shared** | (shared project) | Common logic, XrmHelper |
| **Tool** | `DynamicsCrm.DevKit.Tools.slnx` | Utility package |

---

## CLI Commands

| Command | Description |
|---------|-------------|
| `devkit generator` | Generate form/webapi code |
| `devkit server` | Deploy plugins, workflows, custom actions |
| `devkit plugin` | Deploy plugins only |
| `devkit workflow` | Deploy workflows only |
| `devkit dataprovider` | Deploy data providers |
| `devkit webresource` | Deploy web resources |
| `devkit proxytype` | Generate proxy types |
| `devkit solution` | Extract/pack solutions |
| `devkit downloadreport` | Download reports |
| `devkit uploadreport` | Upload reports |
| `devkit downloadwebresource` | Download web resources |
| `devkit datasource` | Create data sources |

---

## Analyzer Development

```powershell
# Unit tests
cd DynamicsCrm.DevKit.Analyzers
.\Run-Analyzer-Coverage.ps1

# VS Integration tests
dotnet build DynamicsCrm.DevKit.Analyzers\DynamicsCrm.DevKit.Analyzers.csproj --configuration Debug --no-incremental

Copy-Item -Path "DynamicsCrm.DevKit.Analyzers\bin\Debug\netstandard2.0\DynamicsCrm.DevKit.Analyzers.dll" `
  -Destination "DynamicsCrm.DevKit.Analyzers.Test.Vs\packages\DynamicsCrm.DevKit.Analyzers.4.0.0\analyzers\dotnet\cs\" -Force

& $msbuild "DynamicsCrm.DevKit.Analyzers.Test.Vs\DynamicsCrm.DevKit.Analyzers.Test.Vs.csproj" /t:Rebuild /p:Configuration=Debug /v:n
```

> **Note**: Close and reopen VS after copying DLL - VS caches analyzers.

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

## DEVKIT Analyzers (21 Rules)

Roslyn analyzers for CRM-specific patterns:

- **Thread Safety**: DEVKIT1001 (stateless plugins), DEVKIT1018 (parallel execution)
- **I/O Restrictions**: DEVKIT1002 (console), DEVKIT1003 (file I/O)
- **Performance**: DEVKIT1009 (ColumnSet), DEVKIT1012 (RetrieveMultiple)
- **Best Practices**: DEVKIT1004 (Depth check), DEVKIT1007 (InvalidPluginExecutionException)
- **HTTP**: DEVKIT1006 (timeout), DEVKIT1017 (KeepAlive)
- **Plugin Images**: DEVKIT1011 (filtering attributes), DEVKIT1016 (image config)
- **Tracing**: DEVKIT1015 (catch blocks), DEVKIT1020 (ITracingService)

---

## Key Constants

Version and build info in `DynamicsCrm.DevKit.Shared\Const.cs`:
- `Version` = current version (e.g., "4.00.00.00")
- `Build` = build timestamp