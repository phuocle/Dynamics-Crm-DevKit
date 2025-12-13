# 🏗️ Project Templates

DynamicsCrm.DevKit provides **12 specialized project templates** to accelerate your Dynamics 365 / Dataverse development.

## 📋 Quick Reference

| # | Template | Purpose | Emoji |
|---|----------|---------|-------|
| 01 | [Shared Project](Shared-Project-Template.md) | Shared code across projects | 🔗 |
| 02 | [Console Project](Console-Project-Template.md) | Console applications (.NET Framework) | 🖥️ |
| 03 | [Console Core Project](Console-Core-Project-Template.md) | Console applications (.NET Core) | 🖥️ |
| 04 | [Server Project](Server-Project-Template.md) | Plugins, Workflows, Custom Actions, Custom APIs | 🔌 |
| 05 | [Package Project](Package-Project-Template.md) | Package Deployer projects | 📦 |
| 06 | [WebResource Project](WebResource-Project-Template.md) | JavaScript, HTML, CSS, images | 🌐 |
| 07 | [Shared Test Project](Shared-Test-Project-Template.md) | Shared test code | 🧪 |
| 08 | [ProxyTypes Project](ProxyTypes-Project-Template.md) | Early-bound entity classes | 📋 |
| 09 | [Test Project](Test-Project-Template.md) | Unit tests | ✅ |
| 10 | [Ui Test Project](Ui-Test-Project-Template.md) | UI automation tests | 🖱️ |
| 11 | [Solution Packager Project](Solution-Packager-Project-Template.md) | Solution packaging | 📦 |
| 12 | [Report Project](Report-Project-Template.md) | SSRS Reports | 📊 |

## 📖 Project Templates Details

### 🔗 [01. Shared Project](Shared-Project-Template.md)
**Required project for DynamicsCrm.DevKit**

Shared code compiled directly into main assemblies. Perfect for:
- Common entity classes
- Utility functions
- Constants and enums
- Shared business logic

### 🖥️ [02. Console Project](Console-Project-Template.md)
Console applications for utilities and tools (.NET Framework)

### 🖥️ [03. Console Core Project](Console-Core-Project-Template.md)
Console applications for utilities and tools (.NET Core)

### 🔌 [04. Server Project](Server-Project-Template.md)
Server-side development for:
- Plugins
- Custom Workflow Activities
- Custom Actions
- Custom APIs
- Data Providers

### 📦 [05. Package Project](Package-Project-Template.md)
Package Deployer for automated solution deployment

### 🌐 [06. WebResource Project](WebResource-Project-Template.md)
Client-side development:
- JavaScript files
- TypeScript files
- HTML pages
- CSS stylesheets
- Images and other resources

### 🧪 [07. Shared Test Project](Shared-Test-Project-Template.md)
Shared test utilities and helpers

### 📋 [08. ProxyTypes Project](ProxyTypes-Project-Template.md)
Generate early-bound entity classes for type-safe development

### ✅ [09. Test Project](Test-Project-Template.md)
Unit testing for:
- Plugins
- Workflows
- Custom Actions
- Business logic

### 🖱️ [10. Ui Test Project](Ui-Test-Project-Template.md)
Automated UI testing with browser automation

### 📦 [11. Solution Packager Project](Solution-Packager-Project-Template.md)
Solution packaging for version control:
- Extract solutions
- Pack solutions
- Source control integration

### 📊 [12. Report Project](Report-Project-Template.md)
SSRS Report development and deployment

## 🎯 Common Project Structures

### Typical Plugin Development
```
MySolution/
├── MySolution.Shared (01)
├── MySolution.Plugin.Account (04)
├── MySolution.Plugin.Contact (04)
├── MySolution.Test (09)
└── MySolution.ProxyTypes (08)
```

### Typical WebResource Development
```
MySolution/
├── MySolution.Shared (01)
├── MySolution.WebResource (06)
└── MySolution.Test (09)
```

## 💡 Tips
- Always start with a **Shared Project** (01)
- Use **naming conventions** as shown in each template
- Combine **ProxyTypes** (08) with **Server Projects** (04) for type-safety
- Add **Test Projects** (09) for quality assurance

---

📖 **Next Steps**: Explore [Items Template](Items-Template.md) for code scaffolding within projects.
