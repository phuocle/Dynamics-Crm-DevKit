# Copilot Instructions

## About This Project

**DynamicsCrm.DevKit** is a development toolkit for Microsoft Dynamics 365 / Power Platform / Dataverse. It provides Visual Studio 2026 extensions, CLI tools, and Roslyn analyzers for accelerating CRM development.

## Response Format

- Start with: "Xin chào anh Phước, rất vui được giúp anh"
- End with: "Công việc đã xong, vui lòng kiểm tra lại những gì tôi đã làm nhé anh Phước"

## AI Agent Actions

> [!IMPORTANT]
> When actions are performed by an AI agent, all projects and solutions should be built in **DEBUG mode** instead of Release mode.
> The Release mode requires PFX signing key password which is only available to human operators.

### AI Build Command
```powershell
.\Release-DynamicsCrm-DevKit-Debug.ps1
```
This script builds in DEBUG mode without requiring PFX password.

### Human Release Command (requires PFX password)
```powershell
.\Release-DynamicsCrm-DevKit.ps1
```

## C# Conventions

- Use `async/await` for async operations
- Variable naming: `serviceClient` for ServiceClient, `crmService` for IOrganizationService
- Target frameworks: .NET Framework 4.6.2, 4.8, and .NET Standard 2.0
- Build after changes to verify no errors
- Use `try/catch` with specific CRM exceptions: `FaultException<OrganizationServiceFault>`

## Solution Structure

### Build All Projects (DEBUG - for AI)
```powershell
$msbuild = "C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe"
& $msbuild "DynamicsCrm.DevKit.AllInOne.slnx" /t:Build /p:Configuration=Debug /v:m
```

### Release Scripts

| Script | Mode | PFX Required | Use Case |
|--------|------|--------------|----------|
| `Release-DynamicsCrm-DevKit-Debug.ps1` | DEBUG | No | AI Agent sessions |
| `Release-DynamicsCrm-DevKit-CurrentDate.ps1` | RELEASE | Yes | Human testing |
| `Release-DynamicsCrm-DevKit.ps1` | RELEASE | Yes | Official annual release |

### Project Types

| Project | Solution | Purpose |
|---------|----------|---------|
| **CLI** | `DynamicsCrm.DevKit.Cli.slnx` | Deployment automation tool |
| **VSIX** | `DynamicsCrm.DevKit.slnx` | Visual Studio extension |
| **Analyzers** | `DynamicsCrm.DevKit.Analyzers.csproj` | Roslyn code analyzers |
| **Tools** | `DynamicsCrm.DevKit.Tools.slnx` | Utility package |
| **Shared** | (shared project) | Common logic |

### Run Analyzer Unit Tests
```powershell
cd DynamicsCrm.DevKit.Analyzers
.\Run-Analyzer-Coverage.ps1
```

### Run Analyzer VS Integration Tests
After unit tests pass, verify analyzers work in real Visual Studio:

```powershell
# Step 1: Build analyzer DLL in Debug mode
dotnet build DynamicsCrm.DevKit.Analyzers\DynamicsCrm.DevKit.Analyzers.csproj --configuration Debug --no-incremental

# Step 2: Copy DLL to packages folder
Copy-Item -Path "DynamicsCrm.DevKit.Analyzers\bin\Debug\netstandard2.0\DynamicsCrm.DevKit.Analyzers.dll" `
  -Destination "DynamicsCrm.DevKit.Analyzers.Test.Vs\packages\DynamicsCrm.DevKit.Analyzers.4.0.0\analyzers\dotnet\cs\" -Force

# Step 3: Build VS test project and capture output
$msbuild = "C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe"
& $msbuild "DynamicsCrm.DevKit.Analyzers.Test.Vs\DynamicsCrm.DevKit.Analyzers.Test.Vs.csproj" /t:Rebuild /p:Configuration=Debug /v:n

# Step 4: Verify build output contains all DEVKIT warnings (DEVKIT1001-DEVKIT1019)
```

> **Note**: Close and reopen VS after copying DLL - VS caches analyzers.

## Build System

> **IMPORTANT**: Use MSBuild, NOT `dotnet build`. The VSIX project requires MSBuild.

- Path: `C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe`
- Always build in Release mode
- Debug CLI via `launchSettings.json` profiles

## File Patterns

| Search Term | Look For |
|-------------|----------|
| "helper" | `*Helper.cs` files (XrmHelper, FileHelper, JsonHelper) |
| "config" | `DynamicsCrm.DevKit.json`, `DynamicsCrm.DevKit.Cli.json` |
| "task" | `Tasks/*.cs` in CLI project |
| "wizard" | `Wizard/*.cs` in VSIX project |
| "analyzer" | `CrmAnalyzers/*.cs` in Analyzers project |

## DEVKIT Analyzers

This project includes 19 Roslyn analyzers (DEVKIT1001-DEVKIT1019) for CRM-specific patterns:
- Plugin thread safety (static fields, HttpClient)
- UseStrict patterns for JavaScript
- RetrieveMultiple bounded queries
- Avoid Console/File operations in plugins
- Context.Depth check for infinite loop prevention

## Key Constants

Version and build info in `DynamicsCrm.DevKit.Shared\Const.cs`:
- `Version` = current version (e.g., "4.00.00.00")
- `Build` = build timestamp