# 📚 DynamicsCrm.DevKit v4 - Complete Documentation Index

This directory contains comprehensive documentation for all DynamicsCrm.DevKit v4 components.

## 🗂️ Documentation Files

### Core Documentation
- **[Home.md](wiki/Home.md)** - Main overview and getting started
- **[Projects-Template.md](wiki/Projects-Template.md)** - All 12 project templates with quick reference
- **[Items-Template.md](wiki/Items-Template.md)** - All 13 item templates with quick reference
- **[Install-DynamicsCrm-DevKit.md](wiki/Install-DynamicsCrm-DevKit.md)** - Installation guide
- **[FAQ.md](wiki/FAQ.md)** - Frequently asked questions

### Component-Specific Documentation
- **[CLI Documentation](../DynamicsCrm.DevKit.Cli/docs/README.md)** - Complete CLI reference
- **[Analyzers Documentation](../DynamicsCrm.DevKit.Analyzers/docs/README.md)** - All 19 analyzer rules
- **[Tool Documentation](../DynamicsCrm.DevKit.Tool/docs/README.md)** - Development utilities

## 📦 Project Templates (12 Types)

All project templates are documented with:
- ✅ Description and purpose
- ✅ Visual Studio location
- ✅ Naming conventions with examples
- ✅ Key features
- ✅ Getting started steps
- ✅ Best practices

### Template List
1. **Shared Project** - Foundation for all solutions
2. **Console Project** - .NET Framework console apps
3. **Console Core Project** - .NET Core console apps
4. **Server Project** - Plugins, Workflows, Custom Actions, Custom APIs
5. **Package Project** - Package Deployer
6. **WebResource Project** - JavaScript, HTML, CSS
7. **Shared Test Project** - Shared test utilities
8. **ProxyTypes Project** - Early-bound classes
9. **Test Project** - Unit tests
10. **Ui Test Project** - UI automation
11. **Solution Packager Project** - Solution packaging
12. **Report Project** - SSRS Reports

📖 **[View all project templates →](wiki/Projects-Template.md)**

## 📝 Item Templates (13 Types)

All item templates are documented with:
- ✅ Purpose and usage scenarios
- ✅ Generated code structure
- ✅ Complete code examples
- ✅ Best practices and tips
- ✅ Analyzer integration (where applicable)

### Template List
1. **C# Late Bound Class** - Entity helpers without ProxyTypes
2. **JavaScript Form** - Form scripts with IntelliSense
3. **JavaScript WebApi** - Type-safe Web API
4. **C# Plugin Class** - Plugin implementations
5. **C# Custom Action Class** - Custom action handlers
6. **C# Custom Api Class** - Custom API implementations
7. **C# Workflow Class** - Workflow activities
8. **C# Data Provider Class** - Virtual entity providers
9. **C# Test Class** - Unit tests with FakeXrmEasy
10. **C# Test Ui Class** - UI automation tests
11. **Resource String** - Localization resources
12. **JavaScript devkit.js** - JavaScript utilities
13. **Bat File** - Automation scripts

📖 **[View all item templates →](wiki/Items-Template.md)**

## 🚀 Quick Access by Role

### 👨‍💻 Plugin Developer
- [C# Plugin Item Template](wiki/items/CSharp-Plugin-Item-Template.md) - Create plugins
- [Server Project Template](wiki/projects/Server-Project-Template.md) - Plugin project setup
- [C# Test Template](wiki/items/CSharp-Test-Item-Template.md) - Unit testing
- [Analyzers](../DynamicsCrm.DevKit.Analyzers/docs/README.md) - Code quality (DEVKIT rules)

### 🌐 JavaScript Developer
- [JavaScript Form Template](wiki/items/JavaScript-Form-Item-Template.md) - Form scripts
- [JavaScript WebApi Template](wiki/items/JavaScript-WebApi-Item-Template.md) - API calls
- [WebResource Project](wiki/projects/WebResource-Project-Template.md) - Web resource setup

### 🧪 Test Engineer
- [Test Project Template](wiki/projects/Test-Project-Template.md) - Test project setup
- [C# Test Template](wiki/items/CSharp-Test-Item-Template.md) - Unit tests
- [UI Test Template](wiki/items/CSharp-Ui-Test-Item-Template.md) - UI automation

### 🚢 DevOps Engineer
- [CLI Documentation](../DynamicsCrm.DevKit.Cli/docs/README.md) - Automation commands
- [Package Project](wiki/projects/Package-Project-Template.md) - Package Deployer
- [Solution Packager](wiki/projects/Solution-Packager-Project-Template.md) - Source control
- [Bat File Template](wiki/items/Bat-File-Item-Template.md) - Automation scripts

## 🎯 Learning Path

### Beginner
1. Read [Home.md](wiki/Home.md) - Understand what DynamicsCrm.DevKit offers
2. Follow [Installation Guide](wiki/Install-DynamicsCrm-DevKit.md) - Install components
3. Review [Projects Template](wiki/Projects-Template.md) - Learn project types
4. Check [FAQ](wiki/FAQ.md) - Common questions

### Intermediate
1. [C# Plugin Template](wiki/items/CSharp-Plugin-Item-Template.md) - Create first plugin
2. [Server Project](wiki/projects/Server-Project-Template.md) - Understand server projects
3. [Analyzers](../DynamicsCrm.DevKit.Analyzers/docs/README.md) - Code quality rules
4. [CLI Basics](../DynamicsCrm.DevKit.Cli/docs/README.md) - Deployment automation

### Advanced
1. [Custom API Template](wiki/items/CSharp-Custom-Api-Item-Template.md) - Build APIs
2. [Data Provider](wiki/items/CSharp-Data-Provider-Item-Template.md) - Virtual entities
3. [Advanced CLI](../DynamicsCrm.DevKit.Cli/docs/README.md) - Full automation
4. [Testing Guide](wiki/items/CSharp-Test-Item-Template.md) - Complete testing

## 📊 Documentation Stats

- **Total Pages**: 25+ comprehensive documentation files
- **Code Examples**: 100+ ready-to-use code samples
- **Templates**: 12 project + 13 item templates documented
- **Best Practices**: Included in every template page
- **Cross-References**: Extensive linking between related topics

## 🔗 External Links

- **Visual Studio Marketplace**: [Extension](https://marketplace.visualstudio.com/items?itemName=PhuocLe.DynamicsCrm-DevKit)
- **NuGet CLI**: [DynamicsCrm.DevKit.Cli](https://www.nuget.org/packages/DynamicsCrm.DevKit.Cli)
- **NuGet Analyzers**: [DynamicsCrm.DevKit.Analyzers](https://www.nuget.org/packages/DynamicsCrm.DevKit.Analyzers)
- **GitHub Repository**: [Main Repo](https://github.com/phuocle/Dynamics-Crm-DevKit)
- **Issue Tracker**: [Report Bugs](https://github.com/phuocle/Dynamics-Crm-DevKit/issues)

## 📝 Documentation Notes

### File Organization
```
v4/docs/
├── README.md (this file)
├── INDEX.md (complete index)
└── wiki/
    ├── Home.md
    ├── Projects-Template.md
    ├── Items-Template.md
    ├── Install-DynamicsCrm-DevKit.md
    ├── FAQ.md
    ├── items/ (item template docs)
    └── projects/ (project template docs)
```

### Wiki Synchronization
The documentation in this directory can be synchronized with the GitHub wiki:
- All markdown files are wiki-compatible
- URLs are preserved for backward compatibility
- Content can be copied to wiki repository as needed

## 🆘 Support

Need help? 
- Check **[FAQ](wiki/FAQ.md)** for common questions
- Review **[Installation Guide](wiki/Install-DynamicsCrm-DevKit.md)** for setup issues
- Report bugs on **[GitHub Issues](https://github.com/phuocle/Dynamics-Crm-DevKit/issues)**

---

📖 **Start here**: [Home.md](wiki/Home.md) | **Install**: [Installation Guide](wiki/Install-DynamicsCrm-DevKit.md) | **Questions**: [FAQ](wiki/FAQ.md)
