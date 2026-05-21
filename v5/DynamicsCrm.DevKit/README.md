```text
  ____                              _           ____                  ____             _  ___ _ __     __   _
 |  _ \ _   _ _ __   __ _ _ __ ___ (_) ___ ___ / ___|_ __ _ __ ___   |  _ \  _____   _| |/ (_) |\ \   / /__(_)_  __
 | | | | | | | '_ \ / _` | '_ ` _ \| |/ __/ __| |   | '__| '_ ` _ \  | | | |/ _ \ \ / / ' /| | __\ \ / / __| \ \/ /
 | |_| | |_| | | | | (_| | | | | | | | (__\__ \ |___| |  | | | | | |_| |_| |  __/\ V /| . \| | |_ \ V /\__ \ |>  <
 |____/ \__, |_| |_|\__,_|_| |_| |_|_|\___|___/\____|_|  |_| |_| |_(_)____/ \___| \_/ |_|\_\_|\__(_)_/ |___/_/_/\_\
        |___/                  https://github.com/phuocle/Dynamics-Crm-DevKit 4.99.99.99 Build: xxxx.yy.zz HH.mm.ss
```
# DynamicsCrm.DevKit.Vsix

[![Visual Studio Marketplace](https://img.shields.io/visual-studio-marketplace/v/phuocle.DynamicsCrmDevKit?label=VS%20Marketplace&logo=visualstudio)](https://marketplace.visualstudio.com/items?itemName=phuocle.DynamicsCrmDevKit)

Visual Studio extension (VSIX) for Microsoft Dynamics 365 / Power Platform / Dataverse development.

## Features

- **13 Project Templates**: Create plugin, workflow, custom action, custom API, data provider, console, web resource, proxy types, test, and solution packager projects
- **16 Item Templates**: Generate forms, web resources, tests, and proxy types
- **Integrated Wizards**: Step-by-step guidance for creating CRM components
- **Connection Management**: Support for OAuth, ClientSecret, AD, Interactive, DeviceCode, and FromPac (PAC CLI Profile)

## Project Templates

| # | Template | Description |
|---|----------|-------------|
| 01 | SharedProject | Shared code library |
| 02 | Console | .NET Framework console app |
| 03 | ConsoleCore | .NET Core console app |
| 04 | Server | Plugin/Workflow/CustomAction/DataProvider |
| 05 | Package | NuGet package project |
| 06 | WebResource | JavaScript web resources |
| 07 | SharedTest | Shared test library |
| 08 | ProxyTypes | Early-bound entity classes |
| 09 | Test | Unit testing project |
| 10 | TestUi | UI testing project |
| 11 | SolutionPackager | Solution pack/unpack |
| 12 | Report | SSRS Reports |
| 13 | WebResourceTs | TypeScript web resources |

## Item Templates (17 Total)

| # | Template | Description |
|---|----------|-------------|
| 01 | LateBound | Late-bound entity class |
| 02 | JsForm | JavaScript form script |
| 03 | JsWebApi | JavaScript WebAPI script |
| 04 | Plugin | Plugin class |
| 05 | CustomAction | Custom action class |
| 06 | CustomApi | Custom API class |
| 07 | Workflow | Workflow activity class |
| 08 | DataProvider | Data provider class |
| 09 | Test | Unit test class |
| 10 | UiTest | UI test class |
| 11 | ResourceString | Resource string file |
| 12 | JsDevkit | DevKit JavaScript helper |
| 13 | BatFile | Batch file for CLI commands |
| 14 | TsForm | TypeScript form script |
| 15 | TsWebApi | TypeScript WebAPI script |
| 16 | TsDialog | TypeScript dialog script |
| 17 | JsDialog | JavaScript dialog script |

## Requirements

- Visual Studio 2026 or later
- .NET Framework 4.6.2+ or .NET Standard 2.0
- Microsoft Dynamics 365 / Power Platform environment

## Getting Started

1. Install the extension from Visual Studio Marketplace
2. Create a new project using DynamicsCrm.DevKit templates
3. Configure your connection in `DynamicsCrm.DevKit.json`
4. Start developing!

## Related Packages

| Package | Deploy To | Description |
|---------|-----------|-------------|
| [CLI Tool](../DynamicsCrm.DevKit.Cli/README.md) | NuGet | Command-line automation (15 commands + MCP server) |
| [Analyzers](../DynamicsCrm.DevKit.Analyzers/README.md) | NuGet | Roslyn code analysis (21 rules) |
| [Tool](../DynamicsCrm.DevKit.Tool/README.md) | NuGet | Utility tools (minify, docs, decrypt) |

## Support

- GitHub: https://github.com/phuocle/Dynamics-Crm-DevKit
- Issues: https://github.com/phuocle/Dynamics-Crm-DevKit/issues
