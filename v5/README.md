# DynamicsCrm.DevKit

<p align="center">
  <img src="images/icon32.png" alt="DynamicsCrm.DevKit Logo" />
</p>

A comprehensive development toolkit for **Microsoft Dynamics 365 / Power Platform / Dataverse** that accelerates CRM development with Visual Studio extensions, CLI tools, and Roslyn analyzers.

## 🚀 Features

### Visual Studio Extension (VSIX)

- **13 Project Templates**: Shared, Console, Server (Plugin/Workflow/CustomAction/DataProvider), Package, WebResource (JS/TS), Test, ProxyTypes, SolutionPackager, Report
- **16 Item Templates**: Plugin, Workflow, CustomAction, CustomApi, DataProvider, JsForm, JsWebApi, TsForm, TsWebApi, LateBound, Test, UiTest, ResourceString, JsDevkit
- **Integrated Wizards**: Step-by-step project and item creation with Dataverse connection

### CLI Tool (`devkit`)

A .NET global tool for CI/CD automation:

| Command | Description |
|---------|-------------|
| `devkit generator` | Generate TypeScript/JavaScript form and WebApi code |
| `devkit server` | Deploy plugins, workflows, and custom actions |
| `devkit plugin` | Deploy plugins only |
| `devkit workflow` | Deploy workflows only |
| `devkit dataprovider` | Deploy data providers |
| `devkit webresource` | Deploy web resources (JS/TS/HTML/CSS/images) |
| `devkit proxytype` | Generate early-bound proxy types using CrmSvcUtil |
| `devkit solution` | Extract/pack solutions using SolutionPackager |
| `devkit downloadreport` | Download reports from Dataverse |
| `devkit uploadreport` | Upload reports to Dataverse |
| `devkit downloadwebresource` | Download web resources from a solution |
| `devkit datasource` | Create virtual table data sources |

### Roslyn Analyzers (21 Rules)

Static code analysis for Dataverse development best practices:

| Rule ID | Description |
|---------|-------------|
| DEVKIT1001 | Plugin must be thread-safe (stateless) |
| DEVKIT1002 | Avoid Console output in plugins |
| DEVKIT1003 | Avoid File I/O operations in plugins |
| DEVKIT1004 | Check IPluginExecutionContext.Depth |
| DEVKIT1005 | Avoid blocking async calls (.GetAwaiter().GetResult()) |
| DEVKIT1006 | Set HttpClient timeout |
| DEVKIT1007 | Use InvalidPluginExecutionException for errors |
| DEVKIT1008 | Check for null EntityReference before accessing |
| DEVKIT1009 | Avoid ColumnSet(true) - specify columns explicitly |
| DEVKIT1010 | RetrieveAsIfPublished parameter usage |
| DEVKIT1011 | Update message should have filtering attributes |
| DEVKIT1012 | RetrieveMultiple plugin performance |
| DEVKIT1013 | Avoid AppDomain events in plugins |
| DEVKIT1014 | Avoid deprecated APIs |
| DEVKIT1015 | Use ITracingService in catch blocks |
| DEVKIT1016 | Plugin image configuration |
| DEVKIT1017 | Avoid KeepAlive=false in HTTP requests |
| DEVKIT1018 | Avoid parallel execution in plugins |
| DEVKIT1019 | Avoid batch requests in plugins |
| DEVKIT1020 | Use ITracingService for logging |
| DEVKIT1021 | DataProvider/DataSource validation |

### Client-Side Libraries

- **devkit.js / devkit.d.ts**: JavaScript runtime with full TypeScript definitions
- **devkit.ts**: TypeScript runtime for form scripts
- **build.js**: esbuild configuration for TypeScript projects

## 📦 Installation

### VSIX Extension

1. Download from [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=phuocle.DynamicsCrmDevKit)
2. Or build from source (see [Building](#building))

### CLI Tool

```powershell
dotnet tool install -g DynamicsCrm.DevKit.Cli
```

## 🔧 Configuration

Create `DynamicsCrm.DevKit.Cli.json` in your project root:

```json
{
  "generators": [
    {
      "profile": "TS-FORM",
      "entities": ["account", "contact"],
      "type": "form"
    }
  ],
  "webresources": [...],
  "servers": [...]
}
```

## 🏗️ Building

### Prerequisites

- Visual Studio 2026 with VSIX workload
- .NET Framework 4.6.2, 4.8, and .NET Standard 2.0 SDKs
- MSBuild (via Visual Studio)

### Build Commands

```powershell
# Build all (DEBUG - for development)
$msbuild = "C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe"
& $msbuild "DynamicsCrm.DevKit.AllInOne.slnx" /t:Build /p:Configuration=Debug /v:m

# Build VSIX only
& $msbuild "DynamicsCrm.DevKit.slnx" /t:Build /p:Configuration=Debug /v:m

# Build CLI only
& $msbuild "DynamicsCrm.DevKit.Cli.slnx" /t:Build /p:Configuration=Debug /v:m
```

> **Note**: Release builds require PFX signing key password (human operators only).

## 📁 Project Structure

```
v5/
├── DynamicsCrm.DevKit/              # VSIX Extension
│   ├── Wizard/                      # Project/Item wizards
│   └── Commands/                    # VS commands
├── DynamicsCrm.DevKit.Cli/          # CLI Tool
│   ├── Commands/                    # Spectre.Console commands
│   └── Tasks/                       # Task implementations
├── DynamicsCrm.DevKit.Analyzers/    # Roslyn Analyzers
│   └── CrmAnalyzers/                # 21 analyzer rules
├── DynamicsCrm.DevKit.Shared/       # Common Logic
│   ├── Resources/                   # JS/TS templates
│   └── XrmHelper.cs                 # Dataverse operations
├── ProjectTemplates/                # VS project templates
├── ItemTemplates/                   # VS item templates
└── DynamicsCrm.DevKit.Tests/        # Test projects
```

## 🧪 Testing

### Analyzer Unit Tests

```powershell
cd DynamicsCrm.DevKit.Analyzers
.\Run-Analyzer-Coverage.ps1
```

### CLI Tests

```powershell
dotnet test DynamicsCrm.DevKit.Cli.Test\DynamicsCrm.DevKit.Cli.Test.csproj
```

## 📝 License

MIT License - See [LICENSE](LICENSE) for details.

## 🤝 Contributing

Contributions are welcome! Please read the [Contributing Guidelines](CONTRIBUTING.md) before submitting PRs.

## 📚 Documentation

- [Wiki](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki)
- [Analyzer Documentation](DynamicsCrm.DevKit.Analyzers/README.md)
- [CLI Documentation](DynamicsCrm.DevKit.Cli/README.md)

## 👤 Author

**Phuoc Le** - Senior Dynamics 365 Architect with 20+ years of experience in Power Platform development.

---

*Built with ❤️ for the Dynamics 365 community*
