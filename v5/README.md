# DynamicsCrm.DevKit

```text
  ____                              _           ____                  ____             _  ___ _     ____ _ _
 |  _ \ _   _ _ __   __ _ _ __ ___ (_) ___ ___ / ___|_ __ _ __ ___   |  _ \  _____   _| |/ (_) |_  / ___| (_)
 | | | | | | | '_ \ / _` | '_ ` _ \| |/ __/ __| |   | '__| '_ ` _ \  | | | |/ _ \ \ / / ' /| | __|| |   | | |
 | |_| | |_| | | | | (_| | | | | | | | (__\__ \ |___| |  | | | | | |_| |_| |  __/\ V /| . \| | |_ | |___| | |
 |____/ \__, |_| |_|\__,_|_| |_| |_|_|\___|___/\____|_|  |_| |_| |_(_)____/ \___| \_/ |_|\_\_|\__(_)____|_|_|
        |___/            https://github.com/phuocle/Dynamics-Crm-DevKit x.xx.xx.xx Build: xxxx.yy.zz HH.mm.ss

```

A comprehensive development toolkit for **Microsoft Dynamics 365 / Power Platform / Dataverse** that accelerates CRM development with Visual Studio extensions, CLI tools, and Roslyn analyzers.

[![Visual Studio Marketplace](https://img.shields.io/visual-studio-marketplace/v/phuocle.DynamicsCrmDevKit?label=VS%20Marketplace&logo=visualstudio)](https://marketplace.visualstudio.com/items?itemName=phuocle.DynamicsCrmDevKit)
[![NuGet](https://img.shields.io/nuget/v/DynamicsCrm.DevKit.Cli?logo=nuget&label=CLI)](https://www.nuget.org/packages/DynamicsCrm.DevKit.Cli)
[![NuGet](https://img.shields.io/nuget/v/DynamicsCrm.DevKit.Analyzers?logo=nuget&label=Analyzers)](https://www.nuget.org/packages/DynamicsCrm.DevKit.Analyzers)

---

## 🚀 Features

### Visual Studio Extension (VSIX)

- **13 Project Templates**: Shared, Console, ConsoleCore, Server (Plugin/Workflow/CustomAction/DataProvider), Package, WebResource (JS), SharedTest, ProxyTypes, Test, TestUi, SolutionPackager, Report, WebResource (TS)
- **15 Item Templates**: LateBound, JsForm, JsWebApi, Plugin, CustomAction, CustomApi, Workflow, DataProvider, Test, UiTest, ResourceString, JsDevkit, BatFile, TsForm, TsWebApi
- **Integrated Wizards**: Step-by-step project and item creation with Dataverse connection

### CLI Tool (`devkit`)

A .NET global tool for CI/CD automation with **12 commands**:

| Command | Status | Description |
|---------|--------|-------------|
| `devkit generator` | ✅ Active | Generate TypeScript/JavaScript form and WebApi code |
| `devkit server` | ✅ Active | Deploy plugins, workflows, dataproviders (auto-detect) |
| `devkit plugin` | ⚠️ Deprecated | Use `devkit server` instead |
| `devkit workflow` | ⚠️ Deprecated | Use `devkit server` instead |
| `devkit dataprovider` | ⚠️ Deprecated | Use `devkit server` instead |
| `devkit webresource` | ✅ Active | Deploy web resources (JS/TS/HTML/CSS/images) |
| `devkit modelbuilder` | ✅ Active | Generate early-bound entity classes using PAC ModelBuilder |
| `devkit proxytype` | ⚠️ Deprecated | Use `devkit modelbuilder` instead |
| `devkit solution` | ✅ Active | Extract or pack solutions using PAC CLI |
| `devkit legacy-solution` | ⚠️ Deprecated | Use `devkit solution` instead |
| `devkit downloadreport` | ✅ Active | Download reports from Dataverse |
| `devkit uploadreport` | ✅ Active | Upload reports to Dataverse |
| `devkit downloadwebresource` | ✅ Active | Download web resources from a solution |
| `devkit datasource` | ✅ Active | Create virtual table data sources |

### Authentication Methods

| Auth Type | Description | MFA | Use Case |
|-----------|-------------|:---:|----------|
| `Interactive` | Browser-based OAuth login | ✅ | Development, debugging |
| `DeviceCode` | Device code flow | ✅ | Headless/SSH environments |
| `ClientSecret` | Service Principal with secret | ➖ | CI/CD pipelines |
| `FromPac` | PAC CLI cached tokens | ✅ | Use existing PAC auth |
| `OAuth` | Username/Password (Legacy) | ❌ | Legacy support |
| `AD` | Active Directory | ➖ | On-premises only |

### Roslyn Analyzers (21 Rules)

Static code analysis for Dataverse development best practices:

| Rule ID | Severity | Description |
|---------|:--------:|-------------|
| DEVKIT1001 | ❌ Error | Create/Update message should have filtering attributes |
| DEVKIT1002 | ⚠️ Warning | Don't use `ColumnSet(true)` |
| DEVKIT1003 | ❌ Error | Plugin image validation |
| DEVKIT1004 | ℹ️ Info | Use of deprecated SDK messages |
| DEVKIT1005 | ⚠️ Warning | EntityReference maybe null |
| DEVKIT1006 | ⚠️ Warning | Avoid batch requests in plugins |
| DEVKIT1007 | ❌ Error | IPlugin implementations should be stateless |
| DEVKIT1008 | ❌ Error | Avoid parallel execution in plugins |
| DEVKIT1009 | ⚠️ Warning | Set KeepAlive to false for HTTP calls |
| DEVKIT1010 | ⚠️ Warning | Set Timeout for HTTP calls |
| DEVKIT1011 | ⚠️ Warning | Use InvalidPluginExecutionException |
| DEVKIT1012 | ℹ️ Info | Use ITracingService in plugins |
| DEVKIT1013 | ℹ️ Info | Avoid Retrieve/RetrieveMultiple plugins |
| DEVKIT1014 | ❌ Error | Avoid AppDomain events in plugins |
| DEVKIT1015 | ℹ️ Info | Avoid blocking async patterns |
| DEVKIT1016 | ℹ️ Info | Avoid RetrieveAsIfPublished |
| DEVKIT1017 | ℹ️ Info | Avoid Console output in plugins |
| DEVKIT1018 | ❌ Error | Avoid File/IO operations in plugins |
| DEVKIT1019 | ⚠️ Warning | Check context.Depth for infinite loops |
| DEVKIT1020 | ❌ Error | DataProvider must have DataSource |
| DEVKIT1021 | ⚠️ Warning | Use ITracingService in catch blocks |

📚 [Full Analyzer Documentation](DynamicsCrm.DevKit.Analyzers/README.md)

### Client-Side Libraries

- **devkit.js / devkit.d.ts**: JavaScript runtime with full TypeScript definitions
- **devkit.ts**: TypeScript runtime for form scripts
- **build.js**: esbuild configuration for TypeScript projects

---

## 📦 Installation

### VSIX Extension

1. Download from [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=phuocle.DynamicsCrmDevKit)
2. Or build from source (see [Building](#-building))

### CLI Tool

```powershell
# Install globally
dotnet tool install -g DynamicsCrm.DevKit.Cli

# Verify installation
devkit --version
```

### Analyzers Package

```powershell
# Via dotnet CLI
dotnet add package DynamicsCrm.DevKit.Analyzers
```

Or add to your `.csproj`:

```xml
<PackageReference Include="DynamicsCrm.DevKit.Analyzers" Version="*" PrivateAssets="all" />
```

---

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
  "modelbuilders": [
    {
      "profile": "ALL",
      "namespace": "YourNamespace.ProxyTypes",
      "output": "GeneratedCode.cs",
      "entities": "*"
    }
  ],
  "solutions": [
    {
      "profile": "Extract-Both",
      "solution": "YourSolution",
      "solutiontype": "Both",
      "folder": "Solutions",
      "type": "Extract"
    }
  ],
  "webresources": [...],
  "servers": [...]
}
```

---

## 🏗️ Building

### Prerequisites

- Visual Studio 2026 with VSIX workload
- .NET Framework 4.6.2, 4.8, and .NET Standard 2.0 SDKs
- .NET 10.0 SDK (for CLI)
- MSBuild (via Visual Studio)

### Build Commands

```powershell
# Full DEBUG build (recommended for development)
.\DynamicsCrm.DevKit.Scripts\Debug-DynamicsCrm-DevKit.ps1

# Or manual build with MSBuild
$msbuild = "C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe"
& $msbuild "DynamicsCrm.DevKit.AllInOne.slnx" /t:Build /p:Configuration=Debug /v:m
```

> **⚠️ Note**: Release builds require PFX signing key password (human operators only).

---

## 📁 Project Structure

```
v5/
├── DynamicsCrm.DevKit/              # VSIX Extension (VS2026)
│   ├── Wizard/                      # Project/Item wizards
│   ├── Commands/                    # VS commands
│   └── Lib/                         # Core libraries
├── DynamicsCrm.DevKit.Cli/          # CLI Tool (.NET 10.0)
│   ├── Commands/                    # Spectre.Console commands
│   └── Tasks/                       # Task implementations
├── DynamicsCrm.DevKit.Analyzers/    # Roslyn Analyzers (netstandard2.0)
│   └── CrmAnalyzers/                # 21 analyzer rules
├── DynamicsCrm.DevKit.Shared/       # Common Logic
│   ├── Resources/                   # JS/TS templates
│   ├── Models/                      # JSON configuration models
│   └── XrmHelper.cs                 # Dataverse operations
├── DynamicsCrm.DevKit.Tool/         # Utility package
├── ProjectTemplates/                # 13 VS project templates
├── ItemTemplates/                   # 15 VS item templates
├── DynamicsCrm.DevKit.Tests/        # Integration tests
├── DynamicsCrm.DevKit.Analyzers.Test/ # Analyzer unit tests
├── DynamicsCrm.DevKit.Docs/         # Documentation
└── DynamicsCrm.DevKit.Scripts/      # Build & release scripts
```

---

## 🧪 Testing

### Analyzer Unit Tests

```powershell
cd DynamicsCrm.DevKit.Analyzers.Test
dotnet test
```

### CLI Integration Tests

```powershell
cd DynamicsCrm.DevKit.Tests
dotnet test
```

---

## 📝 License

MIT License - See [LICENSE](LICENSE) for details.

---

## 🤝 Contributing

Contributions are welcome! Please read the [Contributing Guidelines](CONTRIBUTING.md) before submitting PRs.

---

## 📚 Documentation

- [Wiki](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki)
- [Analyzer Documentation](DynamicsCrm.DevKit.Analyzers/README.md)
- [CLI Documentation](DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit.Cli/)
- [Migration Guide v4 → v5](DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit.Cli/CLI-Migration-Guide-v4-to-v5.md)

---

## 👤 Author

**Phuoc Le** - Senior Dynamics 365 Architect with 20+ years of experience in Power Platform development.

- GitHub: [@phuocle](https://github.com/phuocle)
- YouTube: [DynamicsCrm.DevKit Channel](https://www.youtube.com/@DynamicsCrmDevKit)

---

*Built with ❤️ for the Dynamics 365 community*
