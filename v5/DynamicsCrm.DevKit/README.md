# DynamicsCrm.DevKit

Visual Studio extension (VSIX) for Microsoft Dynamics 365 / Power Platform / Dataverse development.

## Features

- **13 Project Templates**: Create plugin, workflow, custom action, custom API, data provider, console, web resource, proxy types, test, and solution packager projects
- **16 Item Templates**: Generate forms, web resources, tests, and proxy types
- **Integrated Wizards**: Step-by-step guidance for creating CRM components
- **Connection Management**: Support for OAuth, Client Secret, Certificate, Managed Identity, FromPac, and more

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

## Item Templates (16 Total)

- Plugin, Workflow, CustomAction, CustomApi, DataProvider
- JsForm, JsWebApi, TsForm, TsWebApi
- LateBound, Test, UiTest, ResourceString, JsDevkit
- And more...

## Requirements

- Visual Studio 2026 or later
- .NET Framework 4.6.2+ or .NET Standard 2.0
- Microsoft Dynamics 365 / Power Platform environment

## Getting Started

1. Install the extension from Visual Studio Marketplace
2. Create a new project using DynamicsCrm.DevKit templates
3. Configure your connection in `DynamicsCrm.DevKit.json`
4. Start developing!

## Related Tools

| Tool | Description |
|------|-------------|
| [CLI Tool](../DynamicsCrm.DevKit.Cli/README.md) | Command-line automation |
| [Analyzers](../DynamicsCrm.DevKit.Analyzers/README.md) | Roslyn code analysis |

## Support

- GitHub: https://github.com/phuocle/Dynamics-Crm-DevKit
- Issues: https://github.com/phuocle/Dynamics-Crm-DevKit/issues
