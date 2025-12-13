# 🚀 DynamicsCrm.DevKit v4

Welcome to **DynamicsCrm.DevKit** - A comprehensive development toolkit for Microsoft Dynamics 365 / Power Platform / Dataverse that accelerates your development workflow.

## 📖 What is DynamicsCrm.DevKit?

**DynamicsCrm.DevKit** is a complete development toolkit that provides:

✅ **Visual Studio Extensions (VSIX)** - 12 Project Templates + 13 Item Templates  
✅ **Command-Line Interface (CLI)** - Automation for deployment and code generation  
✅ **Roslyn Analyzers** - 19 diagnostic rules enforcing best practices  
✅ **Development Tools** - Utilities for enhanced productivity  

## 🎯 What Can DynamicsCrm.DevKit Do?

### 🏗️ Project & Code Generation
- **12 Project Templates** for different scenarios (Plugins, WebResources, Tests, etc.)
- **13 Item Templates** for quick code scaffolding
- **Early-bound class generation** with ProxyTypes
- **JavaScript/TypeScript IntelliSense** for form scripts and Web API
- **Late-bound entity helpers** for type-safe development

### 🚢 Deployment & Automation
- **Deploy Plugins, Workflows, Custom Actions, Custom APIs** to Dataverse
- **Deploy Web Resources** (JavaScript, HTML, CSS, images) from Visual Studio
- **Upload/Download SSRS Reports** with version control
- **Solution Packaging** - Extract and Pack solutions
- **Automated CI/CD** via CLI commands

### 🛡️ Code Quality & Best Practices
- **19 Roslyn Analyzers** (DEVKIT1001-DEVKIT1019)
- **Real-time code analysis** in Visual Studio
- **Compile-time error detection** for plugin best practices
- **Enforce Microsoft guidelines** automatically

### 🧪 Testing Support
- **Unit Test Templates** for plugins and workflows
- **UI Test Templates** for browser automation
- **Shared Test Projects** for reusable test code

### 🔌 Integration & Connectivity
- **Multiple connection types** (OAuth, Client Secret, Certificate)
- **Integrated with Visual Studio** for seamless workflow
- **NuGet packages** for easy installation
- **CLI support** for build automation

## 🆕 What's New in v4?

**[🎉 See all v4 features and improvements](Release-Notes-v4.md)**

## 🚀 Quick Start

### 1️⃣ Install Visual Studio Extension
Download from [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=PhuocLe.DynamicsCrm-DevKit)

### 2️⃣ Install CLI Tool
```powershell
Install-Package DynamicsCrm.DevKit.Cli
```

### 3️⃣ Install Analyzers
```xml
<PackageReference Include="DynamicsCrm.DevKit.Analyzers" Version="*" PrivateAssets="all" />
```

### 4️⃣ Start Developing
Follow our **[Tutorials](Tutorials.md)** to create your first plugin, web resource, or workflow.

## 📚 Documentation

### 🔧 Configuration
* **[Connection](Connection.md)** - Configure Dataverse connections
* **[DynamicsCrm.DevKit.json](DynamicsCrm.DevKit.json.md)** - Visual Studio configuration
* **[DynamicsCrm.DevKit.Cli.json](DynamicsCrm.DevKit.Cli.json.md)** - CLI configuration

### 🛠️ CLI & Tools
* **[DynamicsCrm.DevKit.Cli](DynamicsCrm.DevKit.Cli.md)** - CLI overview
* **[📋 All CLI Tasks](../DynamicsCrm.DevKit.Cli/docs/README.md)** - Complete task reference
* **[Analyzers](Analyzers.md)** - Code quality rules

### 📦 Templates
* **[Projects Template](Projects-Template.md)** - 12 project types
* **[Items Template](Items-Template.md)** - 13 item types

### 📖 Learning Resources
* **[Install Guide](Install-DynamicsCrm-DevKit.md)** - Installation instructions
* **[FAQ](FAQ.md)** - Frequently asked questions
* **[Tutorials](Tutorials.md)** - Step-by-step guides

## 🤝 Community & Support

📢 **Need Help?** Check our [FAQ](FAQ.md)  
🐛 **Found a Bug?** [Report Issues](https://github.com/phuocle/Dynamics-Crm-DevKit/issues)  
💡 **Have Ideas?** Share your feedback!

---

**Built with ❤️ for the Dynamics 365 / Power Platform community**
