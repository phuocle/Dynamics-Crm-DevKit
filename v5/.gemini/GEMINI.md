# DynamicsCrm.DevKit - Gemini/Antigravity Rules

## Project Overview

**DynamicsCrm.DevKit** is a development toolkit for Microsoft Dynamics 365 / Power Platform / Dataverse:

| Component | Description |
|-----------|-------------|
| **VSIX** | Visual Studio 2026 extension (13 project templates, 16 item templates) |
| **CLI** | .NET global tool for CI/CD (12 commands) |
| **Analyzers** | 21 Roslyn analyzers (DEVKIT1001-1021) |
| **Shared** | Common logic, XrmHelper, client-side JS/TS libraries |

---

## Response Format

- **Start with**: `"Xin chào anh Phước, rất vui được giúp anh"`
- **End with**: `"Công việc đã xong, vui lòng kiểm tra lại những gì tôi đã làm nhé anh Phước"`

---

## AI Agent Build Rules

> [!IMPORTANT]
> AI agents MUST use **DEBUG mode** for all builds. Release mode requires PFX signing key password (human only).

### Build System

- **ALWAYS** use MSBuild, NOT `dotnet build` for VSIX
- MSBuild Path: `C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe`

### Build All Projects (DEBUG)

```powershell
$msbuild = "C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe"
& $msbuild "DynamicsCrm.DevKit.AllInOne.slnx" /t:Build /p:Configuration=Debug /v:m
```

### AI Build Script

```powershell
.\Release-DynamicsCrm-DevKit-Debug.ps1
```

---

## CLI Run Profile

When user says **"CLI run profile [PROFILE_NAME]"**:

1. Read profile from: `DynamicsCrm.DevKit.Cli\Properties\launchSettings.json`
2. Extract `workingDirectory` and `commandLineArgs`
3. Run CLI:
   ```powershell
   cd "[workingDirectory]"
   & "DynamicsCrm.DevKit.Cli\bin\Debug\net48\DynamicsCrm.DevKit.Cli.exe" [commandLineArgs]
   ```

---

## CLI Commands

| Command | Task File | Description |
|---------|-----------|-------------|
| `generator` | `TaskGenerator.cs` | Generate form/webapi code (JS/TS) |
| `server` | `TaskServer.cs` | Deploy plugins, workflows, custom actions |
| `plugin` | `TaskServer.cs` | Deploy plugins only |
| `workflow` | `TaskServer.cs` | Deploy workflows only |
| `dataprovider` | `TaskServer.cs` | Deploy data providers |
| `webresource` | `TaskWebResource.cs` | Deploy web resources |
| `proxytype` | `TaskProxyType.cs` | Generate proxy types (CrmSvcUtil) |
| `solution` | `TaskSolutionPackager.cs` | Extract/pack solutions |
| `downloadreport` | `TaskDownloadReport.cs` | Download reports |
| `uploadreport` | `TaskUploadReport.cs` | Upload reports |
| `downloadwebresource` | `TaskDownloadWebResource.cs` | Download web resources |
| `datasource` | `TaskDataSource.cs` | Create virtual table data sources |

---

## Release Scripts

| Script | Mode | PFX Required | Use Case |
|--------|------|--------------|----------|
| `Release-DynamicsCrm-DevKit-Debug.ps1` | DEBUG | No | AI Agent sessions |
| `Release-DynamicsCrm-DevKit-CurrentDate.ps1` | RELEASE | Yes | Human testing |
| `Release-DynamicsCrm-DevKit.ps1` | RELEASE | Yes | Official annual release |

---

## C# Conventions

- Use `async/await` for async operations
- Variable naming: `serviceClient` for ServiceClient, `crmService` for IOrganizationService
- Target frameworks: .NET Framework 4.6.2, 4.8, and .NET Standard 2.0
- Use `FaultException<OrganizationServiceFault>` for CRM error handling

---

## Solution Structure

| Project | Solution | Purpose |
|---------|----------|---------|
| **VSIX** | `DynamicsCrm.DevKit.slnx` | Visual Studio extension |
| **CLI** | `DynamicsCrm.DevKit.Cli.slnx` | Deployment automation tool |
| **Analyzers** | `DynamicsCrm.DevKit.Analyzers.csproj` | Roslyn code analyzers |
| **Tools** | `DynamicsCrm.DevKit.Tools.slnx` | Utility package |
| **Shared** | (shared project) | Common logic |

---

## Analyzer Development Workflow

### Step 1: Run Unit Tests

```powershell
cd DynamicsCrm.DevKit.Analyzers
.\Run-Analyzer-Coverage.ps1
```

### Step 2: VS Integration Tests

```powershell
# Build analyzer DLL
dotnet build DynamicsCrm.DevKit.Analyzers\DynamicsCrm.DevKit.Analyzers.csproj --configuration Debug --no-incremental

# Copy to packages folder
Copy-Item -Path "DynamicsCrm.DevKit.Analyzers\bin\Debug\netstandard2.0\DynamicsCrm.DevKit.Analyzers.dll" `
  -Destination "DynamicsCrm.DevKit.Analyzers.Test.Vs\packages\DynamicsCrm.DevKit.Analyzers.4.0.0\analyzers\dotnet\cs\" -Force

# Rebuild VS test project
$msbuild = "C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe"
& $msbuild "DynamicsCrm.DevKit.Analyzers.Test.Vs\DynamicsCrm.DevKit.Analyzers.Test.Vs.csproj" /t:Rebuild /p:Configuration=Debug /v:n
```

> [!IMPORTANT]
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

## Key Constants

Version and build info in `DynamicsCrm.DevKit.Shared\Const.cs`:
- `Version` = current version (e.g., "4.00.00.00")
- `Build` = build timestamp

---

## Key Files Reference

| File | Purpose |
|------|---------|
| `DevKitPackage.cs` | VSIX entry point, assembly loading |
| `Program.cs` (CLI) | CLI entry point, Spectre.Console commands |
| `XrmHelper.cs` | Dataverse operations (1800+ lines) |
| `Helper.cs` | Code generation utilities |
| `Const.cs` | Version, constants, connection types |

---

## Security

> [!CAUTION]
> Never commit connection strings or credentials. Use environment variables or Azure Key Vault.

- PFX key file (`DynamicsCrm.DevKit.pfx`) requires password for signing
- Connection strings should use OAuth/MFA when possible

---

## VSIX Project Templates (13)

1. **SharedProjectTemplate** - Shared code library
2. **ConsoleProjectTemplate** - .NET Framework console app
3. **ConsoleCoreProjectTemplate** - .NET Core console app
4. **ServerProjectTemplate** - Plugin/Workflow/CustomAction/DataProvider
5. **PackageProjectTemplate** - Plugin Package
6. **WebResourceProjectTemplate** - JavaScript web resources
7. **SharedTestProjectTemplate** - Shared test library
8. **ProxyTypesProjectTemplate** - Early-bound entities
9. **TestProjectTemplate** - Unit tests
10. **TestUiProjectTemplate** - UI automation tests
11. **SolutionPackagerProjectTemplate** - Solution management
12. **ReportProjectTemplate** - SSRS reports
13. **WebResourceTsProjectTemplate** - TypeScript web resources

---

## VSIX Item Templates (16)

Plugin, Workflow, CustomAction, CustomApi, DataProvider, JsForm, JsWebApi, TsForm, TsWebApi, LateBound, Test, UiTest, ResourceString, JsDevkit, BatFile
