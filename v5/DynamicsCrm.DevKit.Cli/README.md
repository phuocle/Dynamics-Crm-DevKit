# DynamicsCrm.DevKit.Cli

A comprehensive CLI tool for Dynamics 365/Dataverse deployment automation and code generation.

---

## Installation

```powershell
dotnet tool install --global DynamicsCrm.DevKit.Cli
```

---

## Commands

| Command | Description | Legacy `/type:` |
|---------|-------------|-----------------|
| `server` | Deploy plugins, workflows, packages to Dataverse | `servers` |
| `plugin` | Deploy plugins only | `plugins` |
| `workflow` | Deploy workflows only | `workflows` |
| `dataprovider` | Deploy data providers | `dataproviders` |
| `generator` | Generate JS/TS/C# code from entity metadata | `generators` |
| `webresource` | Deploy web resources | `webresources` |
| `proxytype` | Generate proxy types using CrmSvcUtil | `proxytypes` |
| `solution` | Extract/Pack solutions using SolutionPackager | `solutionpackagers` |
| `downloadreport` | Download reports from a solution | `downloadreports` |
| `uploadreport` | Upload reports to a solution | `uploadreports` |
| `downloadwebresource` | Download web resources from a solution | `downloadwebresources` |
| `datasource` | Create data source entities | `datasources` |

---

## Usage

### Basic Syntax
```powershell
devkit <command> --conn "<connection-string>" --json "<path-to-json>" --profile "<profile-name>"
```

### Examples

```powershell
# Deploy server (plugins, workflows, packages)
devkit server --conn "AuthType=ClientSecret;..." --json ".\DynamicsCrm.DevKit.Cli.json" --profile "DEBUG"

# Deploy with --onlyupdateassembly (skip step registration)
devkit server --conn "..." --json "..." --profile "DEBUG" --onlyupdateassembly

# Generate TypeScript forms
devkit generator --conn "..." --json "..." --profile "Account"

# Generate proxy types (auto-detect CrmSdk.CoreTools version)
devkit proxytype --conn "..." --json "..." --profile "ALL"

# Specify explicit version
devkit proxytype --conn "..." --json "..." --profile "ALL" --version "9.1.0.179"

# Extract solution
devkit solution --conn "..." --json "..." --profile "Extract-Both" --version "9.1.0.179"

# Pack solution
devkit solution --conn "..." --json "..." --profile "Pack-Both"

# Download reports
devkit downloadreport --conn "..." --json "..." --profile "DEBUG"

# Upload reports
devkit uploadreport --conn "..." --json "..." --profile "DEBUG"

# Deploy web resources
devkit webresource --conn "..." --json "..." --profile "DEBUG"

# Create data source entity
devkit datasource --conn "..." --json "..." --profile "DEBUG"
```

### Legacy Syntax (100% Compatible)
```powershell
DynamicsCrm.DevKit.Cli /conn:"..." /json:"..." /type:servers /profile:DEBUG /onlyupdateassembly:"true"
DynamicsCrm.DevKit.Cli /conn:"..." /json:"..." /type:generators /profile:Account
```

---

## Command Options

| Option | Description |
|--------|-------------|
| `--conn` | Dynamics 365 connection string |
| `--json` | Path to `DynamicsCrm.DevKit.Cli.json` configuration file |
| `--profile` | Profile name defined in the JSON file |
| `--version` | CoreTools version (optional, auto-detected) |
| `--onlyupdateassembly` | Skip step registration, update assembly only |

---

## Features

### Server Deployment (server/plugin/workflow/dataprovider)
- **4 Pre/Post Images** support (Image1-4)
- **Managed Identity** support with auto-signing
- **Custom API** registration
- **Data Provider** registration
- **Package Deployment** (.nupkg)
- **Step ID tracking** for idempotent deployments
- **RunAs** user impersonation
- **Source types**: Database, Disk, AzureWebApp, FileStore
- **OnlyUpdateAssembly**: Skip step registration for faster deployment

### Code Generation (generator)
- **JsForm** - JavaScript form IntelliSense
- **JsWebApi** - JavaScript WebAPI client
- **TsForm** - TypeScript form definitions
- **TsWebApi** - TypeScript WebAPI client
- **CSharp** - C# late-bound helpers

### Proxy Types (proxytype)
- **CrmSvcUtil** integration
- **Version auto-detect** from packages folder
- **Entity filtering** support

### Solution Packager (solution)
- **Extract** - Export and extract solution to source control
- **Pack** - Pack solution from source for import
- **Solution types**: Managed, Unmanaged, Both
- **Version auto-detect** from packages folder
- **Map file** support

### Web Resources (webresource)
- **Pattern-based deployment** with include/exclude filters
- **Dependency management** for web resource libraries
- **Auto-publish** after deployment
- **All file types**: JS, CSS, HTML, images, XML, RESX, SVG

### Reports (downloadreport/uploadreport)
- **Solution-based download/upload**
- **Multi-language support**
- **RDL file handling**

### Download Web Resources (downloadwebresource)
- **Solution-based download**
- **Preserves folder structure**
- **Binary file support**

### Data Source (datasource)
- **Create virtual entities** for external data
- **Auto-naming** with solution prefix
- **Full metadata configuration**

---

## Configuration File

Create `DynamicsCrm.DevKit.Cli.json` in your project:

```json
{
  "servers": [
    {
      "profile": "DEBUG",
      "solution": "YourSolution",
      "folder": "bin\\Debug",
      "includefiles": ["*.dll"],
      "excludefiles": []
    }
  ],
  "generators": [
    {
      "profile": "Account",
      "type": "JsForm",
      "rootfolder": "WebResources",
      "rootnamespace": "YourNamespace",
      "entities": "Account,Contact"
    }
  ],
  "proxytypes": [
    {
      "profile": "ALL",
      "namespace": "YourNamespace",
      "output": "ProxyTypes.cs",
      "entities": "*"
    }
  ],
  "solutionpackagers": [
    {
      "profile": "Extract-Both",
      "solution": "YourSolution",
      "solutiontype": "Both",
      "folder": "Solutions",
      "type": "Extract"
    }
  ],
  "webresources": [
    {
      "profile": "DEBUG",
      "solution": "YourSolution",
      "rootfolder": "WebResources",
      "includefiles": ["**/*.js", "**/*.css"],
      "excludefiles": ["**/*.ts"]
    }
  ]
}
```

---

## Support

- GitHub: https://github.com/phuocle/Dynamics-Crm-DevKit
- Issues: https://github.com/phuocle/Dynamics-Crm-DevKit/issues
