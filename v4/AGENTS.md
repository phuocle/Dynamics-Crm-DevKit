# AGENTS.md

A development toolkit for Microsoft Dynamics 365 / Power Platform / Dataverse. This repository contains a Visual Studio 2026 extension (VSIX), CLI tools, and Roslyn analyzers for accelerating CRM development.

## Project Overview

**DynamicsCrm.DevKit** is a collection of:
- **VSIX Extension**: Project/item templates and wizards for Visual Studio 2026
- **CLI Tool**: NuGet package for deployment automation (`DynamicsCrm.DevKit.Cli`)
- **Roslyn Analyzers**: Code analysis for CRM-specific patterns (`DynamicsCrm.DevKit.Analyzers`)
- **Tool Package**: Additional utilities (`DynamicsCrm.DevKit.Tool`)

## Build Commands

> [!IMPORTANT]
> Use MSBuild, NOT `dotnet build`. The VSIX project requires MSBuild.

### Build All Projects
```powershell
# MSBuild path (VS 2026)
$msbuild = "C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe"

# Build everything
& $msbuild "DynamicsCrm.DevKit.AllInOne.slnx" /t:Build /p:Configuration=Release /v:m
```

### Build Individual Components
```powershell
# VSIX Extension
& $msbuild "DynamicsCrm.DevKit.slnx" /t:Build /p:Configuration=Release

# CLI Tool
& $msbuild "DynamicsCrm.DevKit.Cli.slnx" /t:Build /p:Configuration=Release

# Analyzers
& $msbuild "DynamicsCrm.DevKit.Analyzers.slnx" /t:Build /p:Configuration=Release
```

### Final Release
```powershell
.\Release-DynamicsCrm-DevKit.ps1
```

### Release Today
```powershell
.\Release-DynamicsCrm-DevKit-CurrentDate.ps1
```

### Run Tests
```powershell
# Analyzer unit tests with coverage
cd DynamicsCrm.DevKit.Analyzers
.\Run-Analyzer-Coverage.ps1
```

### Analyzer Development Workflow

When developing/fixing/adding a new analyzer:

#### Step 1: Run Unit Tests
```powershell
cd DynamicsCrm.DevKit.Analyzers
dotnet test ..\DynamicsCrm.DevKit.Analyzers.Test\DynamicsCrm.DevKit.Analyzers.Test.csproj
```

#### Step 2: Run VS Integration Tests (after unit tests pass)
```powershell
# Build analyzer DLL in Debug mode
dotnet build DynamicsCrm.DevKit.Analyzers\DynamicsCrm.DevKit.Analyzers.csproj --configuration Debug --no-incremental

# Copy DLL to VS test project packages folder
Copy-Item -Path "DynamicsCrm.DevKit.Analyzers\bin\Debug\netstandard2.0\DynamicsCrm.DevKit.Analyzers.dll" `
  -Destination "DynamicsCrm.DevKit.Analyzers.Test.Vs\packages\DynamicsCrm.DevKit.Analyzers.4.0.0\analyzers\dotnet\cs\" -Force

# Build VS test project (must close VS first to reload analyzer)
$msbuild = "C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe"
& $msbuild "DynamicsCrm.DevKit.Analyzers.Test.Vs\DynamicsCrm.DevKit.Analyzers.Test.Vs.csproj" /t:Rebuild /p:Configuration=Debug /v:n

# Verify output contains all DEVKIT warnings (DEVKIT1001-DEVKIT1019)
```

> [!IMPORTANT]
> Close and reopen VS after copying DLL - VS caches analyzers aggressively.

## Solution Structure

```
v4/
├── DynamicsCrm.DevKit/              # VSIX Extension (main VS extension)
│   ├── Commands/                    # VS menu commands
│   ├── Wizard/                      # Project/Item template wizards
│   └── Lib/                         # Dependencies
├── DynamicsCrm.DevKit.Shared/       # Shared code (shared project)
│   ├── Models/                      # Data models
│   ├── Logic/                       # Business logic
│   ├── Resources/                   # Embedded resources
│   └── XrmHelper.cs                 # CRM SDK helper methods
├── DynamicsCrm.DevKit.Cli/          # CLI tool (NuGet package)
│   └── Tasks/                       # CLI task implementations
│       ├── TaskServer.cs            # Plugin/Workflow deployment
│       ├── TaskWebResource.cs       # Web resource deployment
│       ├── TaskGenerator.cs         # Code generation
│       ├── TaskProxyType.cs         # Proxy type generation
│       ├── TaskSolutionPackager.cs  # Solution packager wrapper
│       ├── TaskDataSource.cs        # Data source operations
│       ├── TaskDownloadReport.cs    # Download reports from CRM
│       ├── TaskUploadReport.cs      # Upload reports to CRM
│       └── TaskDownloadWebResource.cs # Download web resources
├── DynamicsCrm.DevKit.Tool/         # Tool package
├── DynamicsCrm.DevKit.Analyzers/    # Roslyn analyzers (DEVKIT1001-1019)
│   ├── CrmAnalyzers/                # 19 analyzer implementations
│   └── docs/                        # Analyzer documentation
├── DynamicsCrm.DevKit.Analyzers.Test/ # Analyzer unit tests (xUnit)
├── DynamicsCrm.DevKit.Analyzers.Test.Vs/ # VS integration tests (real build verification)
├── DynamicsCrm.DevKit.CrmSvcUtilExtensions/ # CrmSvcUtil extensions
├── ProjectTemplates/CSharp/         # VS Project Templates (01-12)
├── ItemTemplates/CSharp/            # VS Item Templates (01-13)
├── DynamicsCrm.DevKit.Wiki/         # GitHub wiki documentation
└── Published/                       # Release output folder
```

## Code Style

### C# Conventions
- Use `async/await` for async operations
- Variable naming: `serviceClient` for ServiceClient type, `crmService` for IOrganizationService
- Target frameworks: .NET Framework 4.6.2, 4.8, and .NET Standard 2.0
- Always build in Release mode after changes
- Use `FaultException<OrganizationServiceFault>` for CRM error handling

### Key Patterns
- **Helper classes**: Logic is organized in `*Helper.cs` files (e.g., `XrmHelper.cs`, `FileHelper.cs`)
- **Shared project**: Common code lives in `DynamicsCrm.DevKit.Shared`
- **Config files**: `DynamicsCrm.DevKit.json`, `DynamicsCrm.DevKit.Cli.json`

## CLI Usage

The CLI tool (`DynamicsCrm.DevKit.Cli`) uses a JSON configuration file.

### Common Tasks
```bash
# Deploy plugins/workflows
DynamicsCrm.DevKit.Cli.exe conn "AuthType=OAuth;..." json "DynamicsCrm.DevKit.Cli.json" type "servers" profile "DEBUG"

# Deploy web resources
DynamicsCrm.DevKit.Cli.exe conn "AuthType=OAuth;..." json "DynamicsCrm.DevKit.Cli.json" type "webresources" profile "DEBUG"

# Generate late-bound classes
DynamicsCrm.DevKit.Cli.exe conn "AuthType=OAuth;..." json "DynamicsCrm.DevKit.Cli.json" type "generators" profile "LATEBOUND"

# Extract/Pack solution
DynamicsCrm.DevKit.Cli.exe conn "AuthType=OAuth;..." json "DynamicsCrm.DevKit.Cli.json" type "solutionpackagers" profile "Extract-Unmanaged"
```

### CLI Configuration Sections
| Section | Purpose |
|---------|---------|
| `servers` | Deploy plugins, workflows, custom APIs |
| `webresources` | Deploy JavaScript, CSS, HTML, images |
| `generators` | Generate C# late-bound or JS form/webapi code |
| `solutionpackagers` | Extract/Pack CRM solutions |
| `proxytypes` | Generate proxy types (early-bound) |
| `downloadwebresources` | Download web resources from CRM |
| `downloadreports` / `uploadreports` | Report management |
| `datasources` | Data source operations |

## Templates

### Project Templates (12 types)
| # | Template | Description |
|---|----------|-------------|
| 01 | SharedProjectTemplate | Shared code project |
| 02 | ConsoleProjectTemplate | Console app for tools |
| 03 | ConsoleCoreProjectTemplate | .NET Core console |
| 04 | ServerProjectTemplate | Plugins/Workflows/Custom APIs |
| 05 | PackageProjectTemplate | Package Deployer |
| 06 | WebResourceProjectTemplate | JavaScript/HTML resources |
| 07 | SharedTestProjectTemplate | Shared test code |
| 08 | ProxyTypesProjectTemplate | Early-bound entities |
| 09 | TestProjectTemplate | Unit tests |
| 10 | TestUiProjectTemplate | UI automation tests |
| 11 | SolutionPackagerProjectTemplate | Solution packager |
| 12 | ReportProjectTemplate | SSRS Reports |

### Item Templates (13 types)
Plugins, Custom Actions, Custom APIs, Workflows, Data Providers, Late-bound classes, JS Form, JS WebApi, Tests, UI Tests, Resource Strings, Devkit JS, Bat files.

## Debugging

### Debug VSIX Extension
1. Run `ImportKey.bat` to import signing key
2. Open solution in VS, set `DynamicsCrm.DevKit` as startup project
3. F5 to launch experimental VS instance

### Debug Analyzers
1. Open `DynamicsCrm.DevKit.Analyzers.slnx` in VS instance #1
2. Open `DynamicsCrm.DevKit.slnx` in VS instance #2
3. Attach debugger from #1 to #2

### Debug CLI
Check `DynamicsCrm.DevKit.Cli\Properties\launchSettings.json` for debug profiles.

## Important Files

| File | Purpose |
|------|---------|
| `version.txt` | Current version (e.g., `4.00.00.00`) |
| `date.txt` | Build date placeholder |
| `DynamicsCrm.DevKit.Shared\Const.cs` | Version constants |
| `source.extension.vsixmanifest` | VSIX metadata |
| `DynamicsCrm.DevKit.Cli.json` | CLI configuration schema |

## Dependencies

### Required SDKs/Tools
- Visual Studio 2026 with VSIX development workload
- .NET Framework 4.6.2, 4.8 SDK
- .NET Standard 2.0
- MSBuild (do NOT use `dotnet build`)

### Key NuGet Packages
- `Microsoft.PowerPlatform.Dataverse.Client` - Dataverse connection
- `Microsoft.CrmSdk.CoreAssemblies` - CRM SDK
- `Microsoft.CodeAnalysis` - Roslyn analyzers

## Security

> [!CAUTION]
> Never commit connection strings or credentials. Use environment variables or Azure Key Vault.

- PFX key file (`DynamicsCrm.DevKit.pfx`) requires password for signing
- Connection strings should use OAuth/MFA when possible
- Example format: `AuthType=OAuth;Url=https://org.crm.dynamics.com;...`

## Troubleshooting

| Issue | Solution |
|-------|----------|
| VSIX won't build | Ensure VSIX development workload is installed |
| Analyzers not triggering | Check `.editorconfig` severity settings |
| CLI connection fails | Verify OAuth settings and permissions |
| Template not visible | Rebuild and reinstall VSIX in experimental instance |
