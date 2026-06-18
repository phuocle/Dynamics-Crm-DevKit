```text
  ____                              _           ____                  ____             _  ___ _ __     __   _
 |  _ \ _   _ _ __   __ _ _ __ ___ (_) ___ ___ / ___|_ __ _ __ ___   |  _ \  _____   _| |/ (_) |\ \   / /__(_)_  __
 | | | | | | | '_ \ / _` | '_ ` _ \| |/ __/ __| |   | '__| '_ ` _ \  | | | |/ _ \ \ / / ' /| | __\ \ / / __| \ \/ /
 | |_| | |_| | | | | (_| | | | | | | | (__\__ \ |___| |  | | | | | |_| |_| |  __/\ V /| . \| | |_ \ V /\__ \ |>  <
 |____/ \__, |_| |_|\__,_|_| |_| |_|_|\___|___/\____|_|  |_| |_| |_(_)____/ \___| \_/ |_|\_\_|\__(_)_/ |___/_/_/\_\
        |___/                  https://github.com/phuocle/Dynamics-Crm-DevKit 4.12.34.56 Build: xxxx.yy.zz HH.mm.ss
```
# 🧩 DynamicsCrm.DevKit Visual Studio Extension

DynamicsCrm.DevKit Visual Studio Extension is the VSIX package for Dataverse, Dynamics 365, and Power Platform development inside Visual Studio. It provides project templates, item templates, guided wizards, and context-menu commands for generating, registering, and deploying Dataverse components without leaving the IDE.

[![Visual Studio Marketplace](https://img.shields.io/visual-studio-marketplace/v/PhuocLe.DynamicsCrmDevKit?label=VS%20Marketplace&logo=visualstudio)](https://marketplace.visualstudio.com/items?itemName=PhuocLe.DynamicsCrmDevKit)

## ✨ Highlights

- 13 Visual Studio project templates for server-side, client-side, ALM, report, test, and utility projects.
- 16 Visual Studio item templates for plugins, workflows, custom APIs, data providers, JavaScript, TypeScript, dialogs, resources, and support files.
- Wizard-driven project and item creation with Dataverse-specific metadata prompts.
- Context-menu commands for deploying web resources, new web resources, TypeScript release output, and plugin registration attributes.
- Connection UI and shared DevKit configuration support for deployment and generation workflows.

## 📦 Install

Install the extension from Visual Studio Marketplace:

[Download DynamicsCrm.DevKit](https://marketplace.visualstudio.com/items?itemName=PhuocLe.DynamicsCrmDevKit)

You can also install it from Visual Studio through `Extensions` > `Manage Extensions`, then search for `DynamicsCrm.DevKit`.

## 🧱 Project Templates

The template names below match the display names shown by Visual Studio.

| Visual Studio display name | Purpose | Wiki |
|---|---|---|
| 01. Shared Project | Shared Dataverse code, generated entity helpers, and reusable project items. | [Shared Project Template](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Shared-Project-Template) |
| 02. Console Project | .NET Framework console utility project for Dataverse operations. | [Console Project Template](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Console-Project-Template) |
| 03. Console Core Project | .NET console utility project using `Microsoft.PowerPlatform.Dataverse.Client`. | [Console Core Project Template](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Console-Core-Project-Template) |
| 04. Server Project | Plugins, workflows, custom actions, custom APIs, and data providers. | [Server Project Template](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Server-Project-Template) |
| 05. Package Project | Dataverse plugin package project with NuGet dependency support. | [Package Project Template](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Package-Project-Template) |
| 06. WebResource Project | JavaScript, HTML, CSS, image, resource, and helper web resources. | [WebResource Project Template](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/WebResource-Project-Template) |
| 07. Shared Test Project | Shared test support project with Dataverse test helpers. | [Shared Test Project Template](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Shared-Test-Project-Template) |
| 08. ProxyTypes Project | Early-bound proxy type generation project. | [ProxyTypes Project Template](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/ProxyTypes-Project-Template) |
| 09. Test Project | Unit test project for Dataverse server-side code. | [Test Project Template](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Test-Project-Template) |
| 10. Ui Test Project | UI automation project using Dataverse UI test patterns. | [Ui Test Project Template](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Ui-Test-Project-Template) |
| 11. Solution Packager Project | Dataverse solution extract/pack automation. | [Solution Packager Project Template](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Solution-Packager-Project-Template) |
| 12. Report Project | Dataverse SSRS report project. | [Report Project Template](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Report-Project-Template) |
| 13. WebResource TypeScript Project | TypeScript web resource project with generated typings and build output. | [WebResource TypeScript Project Template](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/WebResource-TypeScript-Project-Template) |

Project template catalog: [Projects Template](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Projects-Template)

## 🧩 Item Templates

The item template names below match the display names shown by Visual Studio.

| Visual Studio display name | Purpose | Wiki |
|---|---|---|
| 01. C# Late Bound Class | Late-bound Dataverse entity class scaffold. | [CSharp Late Bound Class Item Template](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Late-Bound-Class-Item-Template) |
| 02. Javascript Form | JavaScript form script, typings, and form helper file. | [JavaScript Form Item Template](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/JavaScript-Form-Item-Template) |
| 03. Javascript WebApi | JavaScript Web API script, typings, and Web API helper file. | [JavaScript WebApi Item Template](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/JavaScript-WebApi-Item-Template) |
| 04. C# Plugin Class | Dataverse `IPlugin` class scaffold. | [CSharp Plugin Item Template](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Plugin-Item-Template) |
| 05. C# Custom Action Class | Custom action handler scaffold. | [CSharp Custom Action Item Template](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Custom-Action-Item-Template) |
| 06. C# Custom Api Class | Custom API handler scaffold. | [CSharp Custom Api Item Template](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Custom-Api-Item-Template) |
| 07. C# Workflow Class | Custom workflow activity scaffold. | [CSharp Workflow Item Template](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Workflow-Item-Template) |
| 08. C# Data Provider Class | Virtual table data provider operations: retrieve, retrieve multiple, create, update, delete. | [CSharp Data Provider Item Template](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Data-Provider-Item-Template) |
| 09. C# Test Class | Server-side unit test scaffold. | [CSharp Test Item Template](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Test-Item-Template) |
| 10. C# Ui Test Class | UI automation test scaffold. | [CSharp Ui Test Item Template](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Ui-Test-Item-Template) |
| 11. Resource String | Dataverse localization resource file. | [Resource String Item Template](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Resource-String-Item-Template) |
| 12. DevKit files | DevKit support files, batch files, helpers, and managed identity setup files. | [Bat File Item Template](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Bat-File-Item-Template) |
| 13. TypeScript Form | TypeScript form script with generated form typings. | [TypeScript Form Item Template](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/TypeScript-Form-Item-Template) |
| 14. TypeScript WebApi | TypeScript Web API script with typed interfaces. | [TypeScript WebApi Item Template](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/TypeScript-WebApi-Item-Template) |
| 15. TypeScript Dialog | TypeScript dialog script with typed dialog interfaces. | [TypeScript Dialog Item Template](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/TypeScript-Dialog-Item-Template) |
| 16. JavaScript Dialog | JavaScript dialog script with typed dialog interfaces. | [JavaScript Dialog Item Template](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/JavaScript-Dialog-Item-Template) |

Item template catalog: [Items Template](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Items-Template)

## 🖥️ Visual Studio Commands

| Command | Available from |
|---|---|
| Deploy WebResource | Solution Explorer, code editor, HTML editor, CSS editor |
| Deploy New WebResource | Solution Explorer |
| Deploy TypeScript (Release) | Solution Explorer, code editor |
| Deploy New TypeScript (Release) | Solution Explorer |
| Add CrmPluginRegistration | Code editor |

## 🔗 Links

- [Repository README](../../README.md)
- [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=PhuocLe.DynamicsCrmDevKit)
- [Project template docs](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Projects-Template)
- [Item template docs](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Items-Template)
- [Issues](https://github.com/phuocle/Dynamics-Crm-DevKit/issues)
