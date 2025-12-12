# Copilot Instructions

## About This Project

**DynamicsCrm.DevKit** is a development toolkit for Microsoft Dynamics 365 / Power Platform / Dataverse. It provides Visual Studio 2026 extensions, CLI tools, and Roslyn analyzers for accelerating CRM development.

## Response Format

- Start with: "Hi, I'm GitHub Copilot. I will help you with your prompt Phuoc Le"

## C# Conventions

- Use `async/await` for async operations
- Variable naming: `serviceClient` for ServiceClient, `crmService` for IOrganizationService
- Target frameworks: .NET Framework 4.6.2, 4.8, and .NET Standard 2.0
- Build after changes to verify no errors
- Use `try/catch` with specific CRM exceptions: `FaultException<OrganizationServiceFault>`

## Solution Structure

### Build All Projects
```powershell
$msbuild = "C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe"
& $msbuild "DynamicsCrm.DevKit.AllInOne.slnx" /t:Build /p:Configuration=Release /v:m
```

### Release All Projects
```powershell
.\Release-DynamicsCrm-DevKit-CurrentDate.ps1
# Or with specific date:
.\Release-DynamicsCrm-DevKit.ps1 -BuildDate "2025.12.12 10.00.00"
```

### Project Types

| Project | Solution | Purpose |
|---------|----------|---------|
| **CLI** | `DynamicsCrm.DevKit.Cli.slnx` | Deployment automation tool |
| **VSIX** | `DynamicsCrm.DevKit.slnx` | Visual Studio extension |
| **Analyzers** | `DynamicsCrm.DevKit.Analyzers.csproj` | Roslyn code analyzers |
| **Tools** | `DynamicsCrm.DevKit.Tools.slnx` | Utility package |
| **Shared** | (shared project) | Common logic |

### Run Analyzer Tests
```powershell
cd DynamicsCrm.DevKit.Analyzers
.\Run-Analyzer-Coverage.ps1
```

### Run Analyzer Tests for Visual Studio after run analyzer unit test
- Build DynamicsCrm.DevKit.Analyzers to dll in debug mode
- Copy DynamicsCrm.DevKit.Analyzers.dll to DynamicsCrm.DevKit.Analyzers.Test.Vs\packages\DynamicsCrm.DevKit.Analyzers.4.0.0\analyzers\dotnet\cs

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

This project includes 18 Roslyn analyzers (DEVKIT1001-DEVKIT1018) for CRM-specific patterns:
- Plugin thread safety (static fields, HttpClient)
- UseStrict patterns for JavaScript
- RetrieveMultiple bounded queries
- Avoid Console/File operations in plugins

## Key Constants

Version and build info in `DynamicsCrm.DevKit.Shared\Const.cs`:
- `Version` = current version (e.g., "4.00.00.00")
- `Build` = build timestamp