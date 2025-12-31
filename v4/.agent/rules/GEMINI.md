# DynamicsCrm.DevKit - Antigravity Rules

## Project Overview

**DynamicsCrm.DevKit** is a development toolkit for Microsoft Dynamics 365 / Power Platform / Dataverse, including Visual Studio 2026 extensions (VSIX), CLI tools, and Roslyn analyzers.

---

## Response Format

- **Start with**: "Xin chào anh Phước, rất vui được giúp anh"
- **End with**: "Công việc đã xong, vui lòng kiểm tra lại những gì tôi đã làm nhé anh Phước"

---

## AI Agent Build Rules

> [!IMPORTANT]
> AI agents MUST use **DEBUG mode** for all builds. Release mode requires PFX signing key password (human only).

### AI Build Command
```powershell
.\Release-DynamicsCrm-DevKit-Debug.ps1
```

### Build System
- **ALWAYS** use MSBuild, NOT `dotnet build`
- MSBuild Path: `C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe`

### Build All Projects (DEBUG)
```powershell
$msbuild = "C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe"
& $msbuild "DynamicsCrm.DevKit.AllInOne.slnx" /t:Build /p:Configuration=Debug /v:m
```

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
| **CLI** | `DynamicsCrm.DevKit.Cli.slnx` | Deployment automation tool |
| **VSIX** | `DynamicsCrm.DevKit.slnx` | Visual Studio extension |
| **Analyzers** | `DynamicsCrm.DevKit.Analyzers.csproj` | Roslyn code analyzers (DEVKIT1001-1019) |
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
| "helper" | `*Helper.cs` files (XrmHelper, FileHelper, JsonHelper) |
| "config" | `DynamicsCrm.DevKit.json`, `DynamicsCrm.DevKit.Cli.json` |
| "task" | `Tasks/*.cs` in CLI project |
| "wizard" | `Wizard/*.cs` in VSIX project |
| "analyzer" | `CrmAnalyzers/*.cs` in Analyzers project |

---

## Key Constants

Version and build info in `DynamicsCrm.DevKit.Shared\Const.cs`:
- `Version` = current version (e.g., "4.00.00.00")
- `Build` = build timestamp

---

## Security

> [!CAUTION]
> Never commit connection strings or credentials. Use environment variables or Azure Key Vault.

- PFX key file (`DynamicsCrm.DevKit.pfx`) requires password for signing
- Connection strings should use OAuth/MFA when possible
