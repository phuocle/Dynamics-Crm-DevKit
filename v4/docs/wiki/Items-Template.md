# 📝 Item Templates

DynamicsCrm.DevKit provides **13 item templates** for rapid code scaffolding within your projects.

## 📋 Quick Reference

| # | Template | Purpose | Emoji |
|---|----------|---------|-------|
| 01 | [C# Late Bound Class](items/CSharp-Late-Bound-Class-Item-Template.md) | Late-bound entity helpers | 📄 |
| 02 | [JavaScript Form](items/JavaScript-Form-Item-Template.md) | Form scripts with IntelliSense | 📋 |
| 03 | [JavaScript WebApi](items/JavaScript-WebApi-Item-Template.md) | Type-safe Web API calls | 🌐 |
| 04 | [C# Plugin Class](items/CSharp-Plugin-Item-Template.md) | Plugin implementations | 🔌 |
| 05 | [C# Custom Action Class](items/CSharp-Custom-Action-Item-Template.md) | Custom action handlers | ⚡ |
| 06 | [C# Custom Api Class](items/CSharp-Custom-Api-Item-Template.md) | Custom API implementations | 🔗 |
| 07 | [C# Workflow Class](items/CSharp-Workflow-Item-Template.md) | Custom workflow activities | 🔄 |
| 08 | [C# Data Provider Class](items/CSharp-Data-Provider-Item-Template.md) | Virtual entity data providers | 📊 |
| 09 | [C# Test Class](items/CSharp-Test-Item-Template.md) | Unit test classes | ✅ |
| 10 | [C# Test Ui Class](items/CSharp-Ui-Test-Item-Template.md) | UI test classes | 🖱️ |
| 11 | [Resource String](items/Resource-String-Item-Template.md) | Localization resources | 🌍 |
| 12 | [JavaScript devkit.js](items/JavaScript-devkit-js-Item-Template.md) | DevKit JavaScript utilities | 🛠️ |
| 13 | [Bat File](items/Bat-File-Item-Template.md) | Batch scripts | 📜 |

## 📖 Item Templates Details

### 🔧 C# Server-Side Templates

#### 📄 [01. C# Late Bound Class](items/CSharp-Late-Bound-Class-Item-Template.md)
Create late-bound entity helper classes without generating ProxyTypes.

#### 🔌 [04. C# Plugin Class](items/CSharp-Plugin-Item-Template.md)
Generate plugin class with proper structure and attributes.

#### ⚡ [05. C# Custom Action Class](items/CSharp-Custom-Action-Item-Template.md)
Custom action handler implementation.

#### 🔗 [06. C# Custom Api Class](items/CSharp-Custom-Api-Item-Template.md)
Custom API implementation for Power Platform.

#### 🔄 [07. C# Workflow Class](items/CSharp-Workflow-Item-Template.md)
Custom workflow activity implementation.

#### 📊 [08. C# Data Provider Class](items/CSharp-Data-Provider-Item-Template.md)
Virtual entity data provider implementation.

### 🌐 JavaScript Templates

#### 📋 [02. JavaScript Form](items/JavaScript-Form-Item-Template.md)
Form script with full IntelliSense support.

#### 🌐 [03. JavaScript WebApi](items/JavaScript-WebApi-Item-Template.md)
Type-safe Web API client code.

#### 🛠️ [12. JavaScript devkit.js](items/JavaScript-devkit-js-Item-Template.md)
DevKit JavaScript utilities and helpers.

### ✅ Testing Templates

#### ✅ [09. C# Test Class](items/CSharp-Test-Item-Template.md)
Unit test class for plugins and workflows.

#### 🖱️ [10. C# Test Ui Class](items/CSharp-Ui-Test-Item-Template.md)
UI automation test class.

### 🌍 Other Templates

#### 🌍 [11. Resource String](items/Resource-String-Item-Template.md)
Localization resource strings.

#### 📜 [13. Bat File](items/Bat-File-Item-Template.md)
Batch script template for automation.

## 🎯 Common Usage Patterns

### Plugin Development
```
1. Add C# Plugin Class (04)
2. Add C# Late Bound Class (01) for entities
3. Add C# Test Class (09) for unit tests
```

### Form Development
```
1. Add JavaScript Form (02) for form logic
2. Add JavaScript WebApi (03) for API calls
```

### Custom API Development
```
1. Add C# Custom Api Class (06)
2. Add C# Test Class (09)
3. Add JavaScript WebApi (03) for client-side calls
```

## 💡 Tips
- Use **Late Bound Classes** (01) for quick development
- Combine **JavaScript Form** (02) with **JavaScript WebApi** (03) for rich UI
- Always add **Test Classes** (09) for quality assurance
- Use **Resource Strings** (11) for multi-language support

---

📖 **Next Steps**: Follow our [Tutorials](Tutorials.md) to learn how to use these templates effectively.
