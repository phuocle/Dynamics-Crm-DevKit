# DynamicsCrm.DevKit VSIX Documentation

> **Version:** 4.00.00.00 | **Build:** xxxx.yy.zz HH.mm.ss

This folder contains documentation for the **DynamicsCrm.DevKit** Visual Studio Extension (VSIX).

---

## 📚 Documentation Index

| Document | Description |
|----------|-------------|
| [T4.md](T4.md) | T4 Template Engine technical documentation for developers |
| [T4EndUser.md](T4EndUser.md) | Custom Templates user guide for end users |

---

## Overview

**DynamicsCrm.DevKit VSIX** is a Visual Studio extension that provides:

- **Project Templates** - Create Dynamics 365/Dataverse projects
- **Item Templates** - Generate plugins, workflows, custom actions, custom APIs
- **T4 Templates** - Customizable code generation engine
- **Wizards** - Step-by-step dialogs for creating items

---

## T4 Template System

The extension uses **T4 (Text Template Transformation Toolkit)** for code generation:

### For Developers
- See [T4.md](T4.md) for architecture, APIs, and extending the template system

### For Users
- See [T4EndUser.md](T4EndUser.md) for creating and customizing templates

### Supported Template Types

| Type | Description |
|------|-------------|
| Plugin | Standard CRM plugin |
| Workflow | Custom workflow activity |
| Custom Action | Custom action plugin |
| Custom API | Custom API plugin |
| Test | Unit test templates |
| UI Test | UI automation test |
| Data Provider | Virtual entity operations |

---

## Related Documentation

- **CLI Tool**: [DynamicsCrm.DevKit.Cli/docs](../../DynamicsCrm.DevKit.Cli/docs/README.md)
- **Analyzers**: [DynamicsCrm.DevKit.Analyzers/docs](../../DynamicsCrm.DevKit.Analyzers/docs/README.md)

---

## Quick Links

- 🏠 [GitHub Repository](https://github.com/phuocle/Dynamics-Crm-DevKit)
- 📦 [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=phuocle.DynamicsCrmDevKit)
- 📖 [Wiki](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki)
