```text
  ____                              _           ____                  ____             _  ___ _   _____           _
 |  _ \ _   _ _ __   __ _ _ __ ___ (_) ___ ___ / ___|_ __ _ __ ___   |  _ \  _____   _| |/ (_) |_|_   _|__   ___ | |
 | | | | | | | '_ \ / _` | '_ ` _ \| |/ __/ __| |   | '__| '_ ` _ \  | | | |/ _ \ \ / / ' /| | __| | |/ _ \ / _ \| |
 | |_| | |_| | | | | (_| | | | | | | | (__\__ \ |___| |  | | | | | |_| |_| |  __/\ V /| . \| | |_ _| | (_) | (_) | |
 |____/ \__, |_| |_|\__,_|_| |_| |_|_|\___|___/\____|_|  |_| |_| |_(_)____/ \___| \_/ |_|\_\_|\__(_)_|\___/ \___/|_|
        |___/                   https://github.com/phuocle/Dynamics-Crm-DevKit 4.12.34.56 Build: xxxx.yy.zz HH.mm.ss
```
# 🧰 DynamicsCrm.DevKit Tool

DynamicsCrm.DevKit Tool is the `devkit-tool` .NET global tool for Dataverse documentation, server-code documentation, minification, coverage conversion, password decryption, entity scaffolding, and solution layer inspection.

[![NuGet](https://img.shields.io/nuget/v/DynamicsCrm.DevKit.Tool?label=NuGet)](https://www.nuget.org/packages/DynamicsCrm.DevKit.Tool)
[![NuGet Downloads](https://img.shields.io/nuget/dt/DynamicsCrm.DevKit.Tool)](https://www.nuget.org/packages/DynamicsCrm.DevKit.Tool)

## ✨ Highlights

- Generates Dataverse entity documentation as Markdown from live metadata.
- Generates server-side code documentation by scanning compiled assemblies for `DocumentMethodAttribute`.
- Converts Visual Studio coverage files to XML.
- Minifies HTML, CSS, and JavaScript with NUglify.
- Creates standard Dataverse entities with forms and supporting attributes.
- Checks unmanaged active solution layers for selected solutions.

## 📦 Install

```powershell
dotnet tool install --global DynamicsCrm.DevKit.Tool
```

Update an existing installation:

```powershell
dotnet tool update --global DynamicsCrm.DevKit.Tool
```

## 🧭 Commands

| Command | Purpose |
|---|---|
| `documentgenerator` | Generate Dataverse entity documentation as Markdown. |
| `documentcodegenerator` | Generate server-side code documentation from compiled assemblies. |
| `coveragetoxml` | Convert Visual Studio `.coverage` files to XML. |
| `nuglify` | Minify HTML, CSS, or JavaScript. |
| `decrypt` | Decrypt an encrypted password string. |
| `createentity` | Create a Dataverse entity with standard forms and attributes. |
| `solutionlayer` | Check unmanaged active solution layers in Dataverse solutions. |

## 🚀 Usage

```powershell
devkit-tool documentgenerator --conn "AuthType=..." --folder ".\docs" --solution "MySolution"
devkit-tool documentcodegenerator --folder ".\bin\Debug" --output ".\docs"
devkit-tool coveragetoxml --coverage ".\coverage.coverage" --xml ".\coverage.xml" --dlls "a.dll;b.dll"
devkit-tool nuglify --source ".\app.js" --destination ".\app.min.js"
devkit-tool decrypt --password "encrypted-string"
devkit-tool createentity --conn "AuthType=..." --solution "MySolution" --entity "My Entity" --type UserOwned
devkit-tool solutionlayer --conn "AuthType=..." --solutions "SolutionA,SolutionB" --output ".\layers.md"
```

## ⚙️ Command Options

| Command | Required options | Optional options |
|---|---|---|
| `documentgenerator` | `--conn`, `--folder`, `--solution` | `--timezone` |
| `documentcodegenerator` | `--folder`, `--output` | `--devops`, `--org`, `--project` |
| `coveragetoxml` | `--coverage`, `--xml`, `--dlls` | |
| `nuglify` | `--source`, `--destination` | |
| `decrypt` | `--password` | |
| `createentity` | `--conn`, `--solution`, `--entity`, `--type` | |
| `solutionlayer` | `--conn`, `--solutions` | `--output` |

## 🏗️ Entity Types

`createentity` supports the following entity types:

| Type | Purpose |
|---|---|
| `UserOwned` | Standard user-owned Dataverse table. |
| `OrganizationOwned` | Organization-owned Dataverse table. |
| `Activity` | Activity table with activity-specific behavior. |
| `Elastic_UserOwned` | Elastic user-owned table. |
| `Elastic_OrganizationOwned` | Elastic organization-owned table. |

## 🔗 Links

- [Repository README](../../README.md)
- [NuGet package](https://www.nuget.org/packages/DynamicsCrm.DevKit.Tool)
- [CLI](../DynamicsCrm.DevKit.Cli/README.md)
- [Visual Studio extension](../DynamicsCrm.DevKit/README.md)
- [Analyzers](../DynamicsCrm.DevKit.Analyzers/README.md)
- [Issues](https://github.com/phuocle/Dynamics-Crm-DevKit/issues)
