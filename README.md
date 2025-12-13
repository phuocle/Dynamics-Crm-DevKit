# DynamicsCrm.DevKit v4.00.00.00

A comprehensive development toolkit for Microsoft Dynamics 365 / Power Platform / Dataverse. This repository contains Visual Studio extensions (VSIX), CLI tools, and Roslyn analyzers to accelerate CRM development.

## 📦 Installation

### Visual Studio Extension (VSIX)
The main Visual Studio extension provides project and item templates for Dynamics 365 development.

**[Download from Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=PhuocLe.DynamicsCrm-DevKit)**

[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/PhuocLe.DynamicsCrm-DevKit?label=VS%20Marketplace)](https://marketplace.visualstudio.com/items?itemName=PhuocLe.DynamicsCrm-DevKit)
[![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/PhuocLe.DynamicsCrm-DevKit)](https://marketplace.visualstudio.com/items?itemName=PhuocLe.DynamicsCrm-DevKit)
[![Visual Studio Marketplace Rating](https://img.shields.io/visual-studio-marketplace/r/PhuocLe.DynamicsCrm-DevKit)](https://marketplace.visualstudio.com/items?itemName=PhuocLe.DynamicsCrm-DevKit)

**Features:**
- 12 Visual Studio project templates
- 13 Visual Studio item templates
- Integrated deployment tools for WebResources and Reports
- Wizards for project/item creation

### NuGet Packages

#### DynamicsCrm.DevKit.Cli
Command-line interface for deployment automation and code generation.

**[Download from NuGet.org](https://www.nuget.org/packages/DynamicsCrm.DevKit.Cli)**

[![NuGet Version](https://img.shields.io/nuget/v/DynamicsCrm.DevKit.Cli?label=NuGet)](https://www.nuget.org/packages/DynamicsCrm.DevKit.Cli)
[![NuGet Downloads](https://img.shields.io/nuget/dt/DynamicsCrm.DevKit.Cli)](https://www.nuget.org/packages/DynamicsCrm.DevKit.Cli)

**Installation:**
```powershell
Install-Package DynamicsCrm.DevKit.Cli
```

**Features:**
- Deploy plugins, workflows, custom APIs, and data providers
- Deploy and download web resources
- Solution packaging (Extract/Pack)
- Code generation (JavaScript, TypeScript, C# late-bound classes)
- Report management (Upload/Download)
- Early-bound class generation (ProxyTypes)

[📖 Full CLI Documentation](v4/DynamicsCrm.DevKit.Cli/docs/README.md)

#### DynamicsCrm.DevKit.Analyzers
Roslyn-based code analyzers for Dynamics 365 best practices.

**[Download from NuGet.org](https://www.nuget.org/packages/DynamicsCrm.DevKit.Analyzers)**

[![NuGet Version](https://img.shields.io/nuget/v/DynamicsCrm.DevKit.Analyzers?label=NuGet)](https://www.nuget.org/packages/DynamicsCrm.DevKit.Analyzers)
[![NuGet Downloads](https://img.shields.io/nuget/dt/DynamicsCrm.DevKit.Analyzers)](https://www.nuget.org/packages/DynamicsCrm.DevKit.Analyzers)

**Installation:**
```xml
<PackageReference Include="DynamicsCrm.DevKit.Analyzers" Version="*" PrivateAssets="all" />
```

**Features:**
- 19 diagnostic rules (DEVKIT1001-DEVKIT1019)
- Enforces Microsoft best practices for plugins and workflows
- Real-time code analysis in Visual Studio
- Compile-time error detection

[📖 Full Analyzers Documentation](v4/DynamicsCrm.DevKit.Analyzers/docs/README.md)

#### DynamicsCrm.DevKit.Tool
Additional development utilities for Dynamics 365.

**[Download from NuGet.org](https://www.nuget.org/packages/DynamicsCrm.DevKit.Tool)**

[![NuGet Version](https://img.shields.io/nuget/v/DynamicsCrm.DevKit.Tool?label=NuGet)](https://www.nuget.org/packages/DynamicsCrm.DevKit.Tool)
[![NuGet Downloads](https://img.shields.io/nuget/dt/DynamicsCrm.DevKit.Tool)](https://www.nuget.org/packages/DynamicsCrm.DevKit.Tool)

**Installation:**
```powershell
Install-Package DynamicsCrm.DevKit.Tool
```

[📖 Full Tool Documentation](v4/DynamicsCrm.DevKit.Tool/docs/README.md)

---

## 🎯 What's Included

### Project Templates (12 Types)

The Visual Studio extension includes 12 project templates for different development scenarios:

1. **[Shared Project](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Shared-Project-Template)** - Shared code across projects
2. **[Console Project](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Console-Project-Template)** - Console applications for utilities
3. **[Console Core Project](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Console-Core-Project-Template)** - .NET Core console applications
4. **[Server Project](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Server-Project-Template)** - Plugins, Workflows, Custom Actions, Custom APIs
5. **[Package Project](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Package-Project-Template)** - Package Deployer projects
6. **[WebResource Project](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/WebResource-Project-Template)** - JavaScript, HTML, CSS, images
7. **[Shared Test Project](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Shared-Test-Project-Template)** - Shared test code
8. **[ProxyTypes Project](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/ProxyTypes-Project-Template)** - Early-bound entity classes
9. **[Test Project](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Test-Project-Template)** - Unit tests
10. **[Ui Test Project](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Ui-Test-Project-Template)** - UI automation tests
11. **[Solution Packager Project](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Solution-Packager-Project-Template)** - Solution packaging
12. **[Report Project](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Report-Project-Template)** - SSRS Reports

### Item Templates (13 Types)

The Visual Studio extension includes 13 item templates:

1. **[C# Late Bound Class](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Late-Bound-Class-Item-Template)** - Late-bound entity helpers
2. **[C# Plugin Class](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Plugin-Item-Template)** - Plugin implementations
3. **[C# Workflow Class](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Workflow-Item-Template)** - Custom workflow activities
4. **[C# Custom Action Class](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Custom-Action-Item-Template)** - Custom action handlers
5. **[C# Custom Api Class](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Custom-Api-Item-Template)** - Custom API implementations
6. **[C# Data Provider Class](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Data-Provider-Item-Template)** - Virtual entity data providers
7. **[C# Test Class](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Test-Item-Template)** - Unit test classes
8. **[C# Test Ui Class](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Test-Ui-Item-Template)** - UI test classes
9. **[JavaScript Form](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/JavaScript-Form-Item-Template)** - Form scripts with IntelliSense
10. **[JavaScript WebApi](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/JavaScript-WebApi-Item-Template)** - Type-safe WebAPI calls
11. **[JavaScript Test](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/JavaScript-Test-Item-Template)** - JavaScript unit tests
12. **[JavaScript devkit.js](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/JavaScript-devkit-js-Item-Template)** - DevKit JavaScript utilities
13. **[Resource String](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Resource-String-Item-Template)** - Resource strings

---

## 🚀 Key Features

### Deploy Server Projects (Plugins, Workflows, Custom APIs)
![Deploy Server](/v3/images/deploy.server.gif)

### Form IntelliSense
![Form IntelliSense](/v3/images/form.gif)

### Deploy WebResources from Visual Studio
![WebResource Deployment](/v3/images/webresource.gif)

### Deploy Reports from Visual Studio
![Report Deployment](/v3/images/report.gif)

---

## 📚 Documentation

Complete documentation is available in the [Wiki](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki):

- **[Installation Guide](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Install-DynamicsCrm-DevKit)** - How to install and set up DynamicsCrm.DevKit
- **[Project Templates](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Projects-Template)** - Overview of all project templates
- **[Item Templates](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Items-Template)** - Overview of all item templates
- **[Tutorials](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Tutorials)** - Step-by-step guides
- **[CLI Documentation](v4/DynamicsCrm.DevKit.Cli/docs/README.md)** - Command-line interface reference
- **[Analyzers Documentation](v4/DynamicsCrm.DevKit.Analyzers/docs/README.md)** - Code analyzer rules
- **[Integrated with Visual Studio](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Integrated-with-Visual-Studio)** - VS integration features

---

## 🔧 CLI Usage Examples

### Deploy Plugins
```powershell
DynamicsCrm.DevKit.Cli /conn:"AuthType=OAuth;..." /json:"DynamicsCrm.DevKit.Cli.json" /type:servers /profile:default
```

### Deploy Web Resources
```powershell
DynamicsCrm.DevKit.Cli /conn:"AuthType=OAuth;..." /json:"DynamicsCrm.DevKit.Cli.json" /type:webresources /profile:default
```

### Generate Early-Bound Classes
```powershell
DynamicsCrm.DevKit.Cli /conn:"AuthType=OAuth;..." /json:"DynamicsCrm.DevKit.Cli.json" /type:proxytypes /profile:default
```

### Extract Solution
```powershell
DynamicsCrm.DevKit.Cli /conn:"AuthType=OAuth;..." /json:"DynamicsCrm.DevKit.Cli.json" /type:solutionpackagers /profile:default
```

[📖 See more CLI examples](v4/DynamicsCrm.DevKit.Cli/docs/README.md)

---

## 🛡️ Code Quality with Analyzers

DynamicsCrm.DevKit.Analyzers provides 19 diagnostic rules to enforce best practices:

| Rule | Severity | Description |
|------|----------|-------------|
| [DEVKIT1001](v4/DynamicsCrm.DevKit.Analyzers/docs/DEVKIT1001.md) | Error | Create/Update should have filtering attributes |
| [DEVKIT1002](v4/DynamicsCrm.DevKit.Analyzers/docs/DEVKIT1002.md) | Warning | Don't use ColumnSet(true) |
| [DEVKIT1003](v4/DynamicsCrm.DevKit.Analyzers/docs/DEVKIT1003.md) | Error | Plugin image validation |
| [DEVKIT1004](v4/DynamicsCrm.DevKit.Analyzers/docs/DEVKIT1004.md) | Info | Use of deprecated SDK messages |
| [DEVKIT1005](v4/DynamicsCrm.DevKit.Analyzers/docs/DEVKIT1005.md) | Warning | EntityReference maybe null |
| [DEVKIT1006](v4/DynamicsCrm.DevKit.Analyzers/docs/DEVKIT1006.md) | Warning | Don't use batch requests in plugins |
| [DEVKIT1007](v4/DynamicsCrm.DevKit.Analyzers/docs/DEVKIT1007.md) | Error | IPlugin should be stateless |
| [DEVKIT1008](v4/DynamicsCrm.DevKit.Analyzers/docs/DEVKIT1008.md) | Error | Don't use parallel execution in plugins |
| [DEVKIT1009](v4/DynamicsCrm.DevKit.Analyzers/docs/DEVKIT1009.md) | Warning | Set KeepAlive to false for external HTTP calls |
| [DEVKIT1010](v4/DynamicsCrm.DevKit.Analyzers/docs/DEVKIT1010.md) | Warning | Set Timeout for external HTTP calls |
| [DEVKIT1011](v4/DynamicsCrm.DevKit.Analyzers/docs/DEVKIT1011.md) | Warning | Use InvalidPluginExecutionException for errors |
| [DEVKIT1012](v4/DynamicsCrm.DevKit.Analyzers/docs/DEVKIT1012.md) | Info | Consider using ITracingService in plugins |
| [DEVKIT1013](v4/DynamicsCrm.DevKit.Analyzers/docs/DEVKIT1013.md) | Info | Avoid registering plugins on Retrieve/RetrieveMultiple |
| [DEVKIT1014](v4/DynamicsCrm.DevKit.Analyzers/docs/DEVKIT1014.md) | Error | Avoid AppDomain event registration in plugins |
| [DEVKIT1015](v4/DynamicsCrm.DevKit.Analyzers/docs/DEVKIT1015.md) | Info | Avoid blocking async patterns in plugins |
| [DEVKIT1016](v4/DynamicsCrm.DevKit.Analyzers/docs/DEVKIT1016.md) | Info | Avoid retrieving unpublished metadata |
| [DEVKIT1017](v4/DynamicsCrm.DevKit.Analyzers/docs/DEVKIT1017.md) | Info | Avoid Console output in plugins |
| [DEVKIT1018](v4/DynamicsCrm.DevKit.Analyzers/docs/DEVKIT1018.md) | Error | Avoid File/IO operations in plugins |
| [DEVKIT1019](v4/DynamicsCrm.DevKit.Analyzers/docs/DEVKIT1019.md) | Warning | Consider checking context.Depth to prevent infinite loops |

[📖 See full documentation for all rules](v4/DynamicsCrm.DevKit.Analyzers/docs/README.md)

---

## 🏗️ Project Structure

```
v4/
├── DynamicsCrm.DevKit/              # Visual Studio VSIX Extension
├── DynamicsCrm.DevKit.Cli/          # CLI Tool (NuGet)
├── DynamicsCrm.DevKit.Analyzers/    # Roslyn Analyzers (NuGet)
├── DynamicsCrm.DevKit.Tool/         # Additional Tools (NuGet)
├── DynamicsCrm.DevKit.Shared/       # Shared code library
├── DynamicsCrm.DevKit.CrmSvcUtilExtensions/  # CrmSvcUtil extensions
├── ProjectTemplates/                # 12 VS Project Templates
├── ItemTemplates/                   # 13 VS Item Templates
├── DynamicsCrm.DevKit.Wiki/         # Documentation (Wiki submodule)
└── Published/                       # Release artifacts
```

---

## 🎓 Getting Started

1. **Install the Visual Studio Extension**
   - Download from [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=PhuocLe.DynamicsCrm-DevKit)
   - Or install directly from Visual Studio: Extensions → Manage Extensions → Search for "DynamicsCrm.DevKit"

2. **Add NuGet Packages to Your Projects**
   ```powershell
   # CLI Tool
   Install-Package DynamicsCrm.DevKit.Cli
   
   # Code Analyzers
   Install-Package DynamicsCrm.DevKit.Analyzers
   
   # Additional Tools
   Install-Package DynamicsCrm.DevKit.Tool
   ```

3. **Follow the Tutorials**
   - [Quick Start Tutorial](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Tutorials)
   - [Creating Your First Plugin](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Plugin-Project-Template)
   - [WebResource Development](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/WebResource-Project-Template)

---

## 📋 Requirements

- **Visual Studio 2022** (version 17.0 or later)
- **.NET Framework 4.6.2** or later
- **.NET Framework 4.8** (recommended)
- **Dynamics 365 / Power Platform / Dataverse** environment

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

---

## 📄 License

This project is licensed under the terms specified in the [LICENSE](LICENSE) file.

---

## 🔗 Links

- **GitHub Repository**: [https://github.com/phuocle/Dynamics-Crm-DevKit](https://github.com/phuocle/Dynamics-Crm-DevKit)
- **Visual Studio Marketplace**: [DynamicsCrm.DevKit Extension](https://marketplace.visualstudio.com/items?itemName=PhuocLe.DynamicsCrm-DevKit)
- **NuGet - CLI**: [DynamicsCrm.DevKit.Cli](https://www.nuget.org/packages/DynamicsCrm.DevKit.Cli)
- **NuGet - Analyzers**: [DynamicsCrm.DevKit.Analyzers](https://www.nuget.org/packages/DynamicsCrm.DevKit.Analyzers)
- **NuGet - Tool**: [DynamicsCrm.DevKit.Tool](https://www.nuget.org/packages/DynamicsCrm.DevKit.Tool)
- **Wiki**: [Documentation](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki)
- **Issues**: [Report Issues](https://github.com/phuocle/Dynamics-Crm-DevKit/issues)

---

## ⭐ Show Your Support

If you find this toolkit helpful, please consider:
- ⭐ Starring this repository
- 📢 Sharing with your colleagues
- 💬 Providing feedback or reporting issues
- 📝 Contributing to the documentation

---

**Built with ❤️ for the Dynamics 365 / Power Platform community**
