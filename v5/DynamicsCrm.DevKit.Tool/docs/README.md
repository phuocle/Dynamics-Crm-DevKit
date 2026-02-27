# DynamicsCrm.DevKit.Tool

Utility tools for Dynamics 365 / Dataverse development automation.

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
DynamicsCrm.DevKit.Tool <command> [options]
```

Use `<command> --help` for details on each command.

### documentgenerator

Generate Dataverse entity documentation as markdown files.

```
DynamicsCrm.DevKit.Tool documentgenerator --conn "AuthType=..." --folder ./docs --solution MySolution [--timezone +7]
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
DynamicsCrm.DevKit.Tool documentcodegenerator --folder ./bin/Debug --output ./docs [--devops AzureDevOps --org myorg --project MyProject]
```

| Option | Required | Description |
|---|---|---|
| `--folder` | Yes | Folder containing compiled DLL assemblies to scan |
| `--output` | Yes | Output folder for generated markdown files |
| `--devops` | No | DevOps platform: `AzureDevOps`, `GitHub`, `Jira`, `Custom` |
| `--org` | No | DevOps organization name |
| `--project` | No | DevOps project name |

### coveragetoxml

```
DynamicsCrm.DevKit.Tool coveragetoxml --coverage file.coverage --xml output.xml --dlls "a.dll;b.dll"
```

| Option | Required | Description |
|---|---|---|
| `--coverage` | Yes | Coverage file path |
| `--xml` | Yes | Output XML file path |
| `--dlls` | Yes | DLL files separated by `;` |

### nuglify

```
DynamicsCrm.DevKit.Tool nuglify --source input.js --destination output.min.js
```

| Option | Required | Description |
|---|---|---|
| `--source` | Yes | Source file path (`.html`, `.css`, `.js`) |
| `--destination` | Yes | Destination file path |

### decrypt

```
DynamicsCrm.DevKit.Tool decrypt --password "encrypted_string"
```

| Option | Required | Description |
|---|---|---|
| `--password` | Yes | The encrypted password string to decrypt |

## Links

- [GitHub](https://github.com/phuocle/Dynamics-Crm-DevKit)
