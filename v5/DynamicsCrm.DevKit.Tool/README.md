# DynamicsCrm.DevKit.Tool

Utility tools for Dynamics 365 / Dataverse development automation.

## Installation

Install as a .NET global tool:

```powershell
dotnet tool install -g DynamicsCrm.DevKit.Tool
```

After installation, the `devkit-tool` command is available globally.

## Commands

| Command | Description |
|---|---|
| `documentgenerator` | Generate Dataverse entity documentation (markdown) |
| `documentcodegenerator` | Generate server-side code documentation from assemblies |
| `coveragetoxml` | Convert Visual Studio coverage file to XML |
| `nuglify` | Minify HTML, CSS, or JS files |
| `decrypt` | Decrypt an encrypted password string |

## Usage

```
devkit-tool <command> [options]
```

Use `<command> --help` for details on each command.

### documentgenerator

Generate Dataverse entity documentation as markdown files.

```
devkit-tool documentgenerator --conn "AuthType=..." --folder ./docs --solution MySolution [--timezone +7]
```

| Option | Required | Description |
|---|---|---|
| `--conn` | Yes | Dataverse connection string |
| `--folder` | Yes | Output folder for generated markdown files |
| `--solution` | Yes | Dataverse solution unique name |
| `--timezone` | No | Timezone override (e.g. `+7`, `-6`, `SE Asia Standard Time`). Defaults to WhoAmI user timezone |

### documentcodegenerator

Scan compiled assemblies for `DocumentMethodAttribute` and generate server-side code documentation.

```
devkit-tool documentcodegenerator --folder ./bin/Debug --output ./docs [--devops AzureDevOps --org myorg --project MyProject]
```

| Option | Required | Description |
|---|---|---|
| `--folder` | Yes | Folder containing compiled DLL assemblies to scan |
| `--output` | Yes | Output folder for generated markdown files |
| `--devops` | No | DevOps platform: `AzureDevOps`, `GitHub`, `Jira`, `Custom` |
| `--org` | No | DevOps organization name |
| `--project` | No | DevOps project name |

### coveragetoxml

Convert Visual Studio coverage file to XML format. Requires [`dotnet-coverage`](https://learn.microsoft.com/en-us/dotnet/core/additional-tools/dotnet-coverage) to be installed.

```
devkit-tool coveragetoxml --coverage file.coverage --xml output.xml --dlls "a.dll;b.dll"
```

| Option | Required | Description |
|---|---|---|
| `--coverage` | Yes | Coverage file path |
| `--xml` | Yes | Output XML file path |
| `--dlls` | Yes | DLL files separated by `;` |

### nuglify

```
devkit-tool nuglify --source input.js --destination output.min.js
```

| Option | Required | Description |
|---|---|---|
| `--source` | Yes | Source file path (`.html`, `.css`, `.js`) |
| `--destination` | Yes | Destination file path |

### decrypt

```
devkit-tool decrypt --password "encrypted_string"
```

| Option | Required | Description |
|---|---|---|
| `--password` | Yes | The encrypted password string to decrypt |

## Related Packages

| Package | Description |
|---------|-------------|
| [DynamicsCrm.DevKit.Cli](https://www.nuget.org/packages/DynamicsCrm.DevKit.Cli) | .NET global CLI tool for code generation and deployment |
| [DynamicsCrm.DevKit.Analyzers](https://www.nuget.org/packages/DynamicsCrm.DevKit.Analyzers) | Roslyn analyzers for Dynamics 365 plugin development |

## Links

- [GitHub](https://github.com/phuocle/Dynamics-Crm-DevKit)
- [Issues](https://github.com/phuocle/Dynamics-Crm-DevKit/issues)
