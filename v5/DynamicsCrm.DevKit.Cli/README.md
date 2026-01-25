# DynamicsCrm.DevKit.Cli

A comprehensive .NET global CLI tool for Dynamics 365/Dataverse deployment automation and code generation.

## Installation

```powershell
dotnet tool install --global DynamicsCrm.DevKit.Cli
```

## Commands (14 Total)

| Command | Status | Description |
|---------|--------|-------------|
| `generator` | Active | Generate JS/TS/C# code from entity metadata |
| `server` | Active | Deploy plugins, workflows, packages to Dataverse |
| `plugin` | Active | Deploy plugins only |
| `workflow` | Active | Deploy workflows only |
| `dataprovider` | Active | Deploy data providers |
| `webresource` | Active | Deploy web resources |
| `modelbuilder` | **New** | Generate early-bound using PAC ModelBuilder |
| `pacsolution` | **New** | Extract/Pack solutions using PAC CLI |
| `proxytype` | ⚠️ Deprecated | Use `modelbuilder` instead |
| `solution` | ⚠️ Deprecated | Use `pacsolution` instead |
| `downloadreport` | Active | Download reports from a solution |
| `uploadreport` | Active | Upload reports to a solution |
| `downloadwebresource` | Active | Download web resources from a solution |
| `datasource` | Active | Create data source entities |

## Usage

### Basic Syntax
```powershell
devkit <command> --url "<environment-url>" --auth <auth-type> [auth-options] --json "<path-to-json>" --profile "<profile-name>"
```

### Quick Examples

```powershell
# Deploy with Interactive authentication (browser login with MFA)
devkit server --url "https://org.crm.dynamics.com" --auth Interactive --json "cli.json" --profile "DEBUG"

# Deploy with FromPac (reuse PAC CLI tokens - zero login!)
devkit server --auth FromPac --pacprofile "DEVKITV4" --json "cli.json" --profile "DEBUG"

# Generate early-bound entity classes (NEW - recommended)
devkit modelbuilder --auth FromPac --pacprofile "DEV" --json "cli.json" --profile "ALL"

# Extract solution using PAC CLI (NEW - recommended)
devkit pacsolution --auth FromPac --json "cli.json" --profile "Extract-Both"

# Pack solution using PAC CLI (NEW - recommended)
devkit pacsolution --auth FromPac --json "cli.json" --profile "Pack-Both"

# Deploy with ClientSecret (for CI/CD pipelines)
devkit server --url "https://org.crm.dynamics.com" --auth ClientSecret --clientid "app-id" --clientsecret "secret" --json "cli.json" --profile "DEBUG"
```

## 🔐 Authentication Methods (9 Types)

| Auth Type | Best For | Recommended |
|-----------|----------|-------------|
| `FromPac` | Developers - Reuse PAC CLI tokens | ⭐ **Yes** |
| `Interactive` | Developers with MFA | ⭐ **Yes** |
| `DeviceCode` | Headless, SSH, CI containers | ✅ |
| `ClientSecret` | CI/CD pipelines, automation | ⭐ **Yes** |
| `ClientCertificate` | High-security production | ✅ |
| `ManagedIdentity` | Azure VMs, App Services, Functions | ⭐ **Yes** |
| `DefaultAzureCredential` | Flexible Azure SDK chain | ✅ |
| `OAuth` | Legacy username/password | ⚠️ Legacy |
| `AD` | On-premise Active Directory | ⚠️ On-prem |

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
  "modelbuilders": [
    {
      "profile": "ALL",
      "namespace": "YourNamespace.ProxyTypes",
      "output": "GeneratedCode.cs",
      "entities": "*"
    }
  ],
  "pacsolutionpackagers": [
    {
      "profile": "Extract-Both",
      "solution": "YourSolution",
      "solutiontype": "Both",
      "folder": "Solutions",
      "type": "Extract"
    },
    {
      "profile": "Pack-Both",
      "solution": "YourSolution",
      "solutiontype": "Both",
      "folder": "Solutions",
      "type": "Pack"
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

## Key Features

### Server Deployment
- 4 Pre/Post Images support
- Managed Identity support with auto-signing
- Custom API registration
- Package Deployment (.nupkg)
- Step ID tracking for idempotent deployments
- `--onlyupdateassembly` for faster deployment

### Code Generation
- JsForm, JsWebApi, TsForm, TsWebApi, CSharp late-bound

### ModelBuilder (New - Recommended)
- Uses **PAC ModelBuilder** (modern replacement for CrmSvcUtil)
- Entity filtering with `entities` parameter
- Generates early-bound proxy classes

### PAC Solution Packager (New - Recommended)
- Uses **PAC CLI** (modern replacement for SolutionPackager.exe)
- Extract/Pack solutions to source control
- Supports Managed, Unmanaged, and Both

### Web Resources
- Pattern-based deployment with include/exclude filters
- Dependency management
- Auto-publish after deployment

## Support

- GitHub: https://github.com/phuocle/Dynamics-Crm-DevKit
- Issues: https://github.com/phuocle/Dynamics-Crm-DevKit/issues
