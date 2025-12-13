# 📚 DynamicsCrm.DevKit v4 Documentation

Complete documentation for DynamicsCrm.DevKit v4 - A comprehensive development toolkit for Microsoft Dynamics 365 / Power Platform / Dataverse.

## 📖 Documentation Structure

### 🏠 Getting Started
- **[Home](wiki/Home.md)** - Overview and quick start guide
- **[Installation Guide](wiki/Install-DynamicsCrm-DevKit.md)** - How to install all components
- **[FAQ](wiki/FAQ.md)** - Frequently asked questions

### 🏗️ Project & Item Templates
- **[Projects Template](wiki/Projects-Template.md)** - 12 project template types
- **[Items Template](wiki/Items-Template.md)** - 13 item template types

### 🛠️ Component Documentation
- **[CLI Documentation](../DynamicsCrm.DevKit.Cli/docs/README.md)** - Command-line interface
- **[Analyzers Documentation](../DynamicsCrm.DevKit.Analyzers/docs/README.md)** - Code quality rules
- **[Tool Documentation](../DynamicsCrm.DevKit.Tool/docs/README.md)** - Additional utilities

## 🚀 Quick Links

### For New Users
1. [What is DynamicsCrm.DevKit?](wiki/Home.md#-what-is-dynamicscrm devkit)
2. [Installation Guide](wiki/Install-DynamicsCrm-DevKit.md)
3. [Your First Project](wiki/Projects-Template.md)
4. [FAQ](wiki/FAQ.md)

### For Developers
- [C# Plugin Template](wiki/items/CSharp-Plugin-Item-Template.md)
- [JavaScript Form Template](wiki/items/JavaScript-Form-Item-Template.md)
- [C# Test Template](wiki/items/CSharp-Test-Item-Template.md)
- [CLI Commands](../DynamicsCrm.DevKit.Cli/docs/README.md)

### For DevOps
- [CLI Automation](../DynamicsCrm.DevKit.Cli/docs/README.md)
- [Analyzers (CI/CD)](../DynamicsCrm.DevKit.Analyzers/docs/README.md)
- [Package Deployment](wiki/Package-Project-Template.md)

## 📦 What's Included

### Visual Studio Extension (VSIX)
The main Visual Studio extension provides:
- **12 Project Templates** for different development scenarios
- **13 Item Templates** for rapid code scaffolding
- Integrated deployment tools
- Wizards for project/item creation

### NuGet Packages

#### DynamicsCrm.DevKit.Cli
Command-line interface for deployment automation and code generation.

[📖 Full CLI Documentation](../DynamicsCrm.DevKit.Cli/docs/README.md)

#### DynamicsCrm.DevKit.Analyzers
Roslyn-based code analyzers for Dynamics 365 best practices.

[📖 Full Analyzers Documentation](../DynamicsCrm.DevKit.Analyzers/docs/README.md)

#### DynamicsCrm.DevKit.Tool
Additional development utilities.

[📖 Full Tool Documentation](../DynamicsCrm.DevKit.Tool/docs/README.md)

## 🎯 Key Features

### Project & Code Generation
- 12 Visual Studio project templates
- 13 Visual Studio item templates
- Early-bound class generation
- JavaScript/TypeScript IntelliSense
- Late-bound entity helpers

### Deployment & Automation
- Deploy plugins, workflows, custom APIs
- Deploy web resources from Visual Studio
- Upload/download SSRS reports
- Solution packaging (Extract/Pack)
- Automated CI/CD via CLI

### Code Quality
- 19 Roslyn analyzers (DEVKIT1001-DEVKIT1019)
- Real-time code analysis
- Compile-time error detection
- Microsoft best practices enforcement

## 📋 Project Templates (12 Types)

| Template | Purpose |
|----------|---------|
| Shared Project | Shared code across projects |
| Console Project | Console applications (.NET Framework) |
| Console Core Project | Console applications (.NET Core) |
| Server Project | Plugins, Workflows, Custom Actions, Custom APIs |
| Package Project | Package Deployer projects |
| WebResource Project | JavaScript, HTML, CSS, images |
| Shared Test Project | Shared test code |
| ProxyTypes Project | Early-bound entity classes |
| Test Project | Unit tests |
| Ui Test Project | UI automation tests |
| Solution Packager Project | Solution packaging |
| Report Project | SSRS Reports |

[📖 See full details](wiki/Projects-Template.md)

## 📝 Item Templates (13 Types)

| Template | Purpose |
|----------|---------|
| C# Late Bound Class | Late-bound entity helpers |
| JavaScript Form | Form scripts with IntelliSense |
| JavaScript WebApi | Type-safe Web API calls |
| C# Plugin Class | Plugin implementations |
| C# Custom Action Class | Custom action handlers |
| C# Custom Api Class | Custom API implementations |
| C# Workflow Class | Custom workflow activities |
| C# Data Provider Class | Virtual entity data providers |
| C# Test Class | Unit test classes |
| C# Test Ui Class | UI test classes |
| Resource String | Localization resources |
| JavaScript devkit.js | DevKit JavaScript utilities |
| Bat File | Batch scripts |

[📖 See full details](wiki/Items-Template.md)

## 🔧 Installation

### Visual Studio Extension
```
Download from Visual Studio Marketplace
Extensions > Manage Extensions > Search "DynamicsCrm.DevKit"
```

### CLI Tool
```powershell
Install-Package DynamicsCrm.DevKit.Cli
```

### Analyzers
```xml
<PackageReference Include="DynamicsCrm.DevKit.Analyzers" Version="*" PrivateAssets="all" />
```

[📖 Full Installation Guide](wiki/Install-DynamicsCrm-DevKit.md)

## 🆘 Support

- 📖 [FAQ](wiki/FAQ.md) - Common questions and answers
- 🐛 [Report Issues](https://github.com/phuocle/Dynamics-Crm-DevKit/issues)
- 💬 [Discussions](https://github.com/phuocle/Dynamics-Crm-DevKit/discussions)

## 🔗 Resources

- **Visual Studio Marketplace**: [DynamicsCrm.DevKit Extension](https://marketplace.visualstudio.com/items?itemName=PhuocLe.DynamicsCrm-DevKit)
- **NuGet - CLI**: [DynamicsCrm.DevKit.Cli](https://www.nuget.org/packages/DynamicsCrm.DevKit.Cli)
- **NuGet - Analyzers**: [DynamicsCrm.DevKit.Analyzers](https://www.nuget.org/packages/DynamicsCrm.DevKit.Analyzers)
- **NuGet - Tool**: [DynamicsCrm.DevKit.Tool](https://www.nuget.org/packages/DynamicsCrm.DevKit.Tool)
- **GitHub**: [Repository](https://github.com/phuocle/Dynamics-Crm-DevKit)

---

**Built with ❤️ for the Dynamics 365 / Power Platform community**
