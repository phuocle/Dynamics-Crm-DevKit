# DynamicsCrm.DevKit.Cli - All Tasks Overview

Complete reference guide for all DynamicsCrm.DevKit.Cli tasks.

---

## Table of Contents

1. [Server Tasks](#server-tasks)
2. [Web Resource Tasks](#web-resource-tasks)
3. [Code Generation Tasks](#code-generation-tasks)
4. [Solution Tasks](#solution-tasks)
5. [Report Tasks](#report-tasks)
6. [Virtual Entity Tasks](#virtual-entity-tasks)
7. [Quick Reference](#quick-reference)

---

## Server Tasks

### [Servers / Plugins / Workflows / Data Providers](TaskServer.md)

Deploy server-side assemblies including plugins, workflows, custom APIs, and data providers.

**Task Types:** `servers`, `plugins`, `workflows`, `dataproviders`

**Use Cases:**
- Deploy plugins and workflows
- Register Custom APIs
- Deploy data provider plugins
- Update assemblies with Managed Identity support

**Key Features:**
- ✅ 4 Images support (unique feature)
- ✅ Managed Identity with automatic signing
- ✅ Batch processing (50 operations per batch)
- ✅ Fast deployment mode (`--onlyupdateassembly`)
- ✅ NuGet package deployment support
- ✅ Step ID tracking for idempotent deployments

**Quick Example:**
```powershell
devkit server --profile DEBUG --json "DynamicsCrm.DevKit.Cli.json" --auth Interactive --url "https://org.crm.dynamics.com"
```

**JSON Configuration:**
```json
{
  "servers": [
    {
      "profile": "DEBUG",
      "solution": "MyCompanySolution",
      "folder": "bin\\Debug",
      "includefiles": ["MyCompany.Plugin.*.dll"],
      "excludefiles": ["*.Test.dll"]
    }
  ]
}
```

[📖 Full Documentation](TaskServer.md)

---

## Web Resource Tasks

### [Web Resources](TaskWebResource.md)

Deploy web resources (HTML, CSS, JavaScript, images, etc.) to Dynamics 365.

**Task Type:** `webresources`

**Use Cases:**
- Deploy HTML pages, CSS styles, JavaScript files
- Upload images and other resources
- Manage web resource dependencies
- Deploy entity-specific web resources

**Key Features:**
- ✅ 15+ file types supported
- ✅ Pattern matching with wildcards
- ✅ Dependency management with XML generation
- ✅ Entity token replacement (`[entity]`)
- ✅ Automatic publishing
- ✅ Batch operations

**Quick Example:**
```powershell
devkit webresource --profile DEBUG --json "DynamicsCrm.DevKit.Cli.json" --auth Interactive --url "https://org.crm.dynamics.com"
```

**JSON Configuration:**
```json
{
  "webresources": [
    {
      "profile": "DEBUG",
      "solution": "MyCompanySolution",
      "rootfolder": "",
      "includefiles": ["css\\**.css", "js\\**.js", "html\\**.html"],
      "excludefiles": ["test\\**.js"],
      "dependencies": []
    }
  ]
}
```

[📖 Full Documentation](TaskWebResource.md)

### [Download Web Resources](TaskDownloadWebResource.md)

Download web resources from Dynamics 365 to local file system.

**Task Type:** `downloadwebresources`

**Use Cases:**
- Backup web resources
- Version control integration
- Environment migration
- Offline editing

**Quick Example:**
```powershell
devkit downloadwebresource --profile DEBUG --json "DynamicsCrm.DevKit.Cli.json" --auth Interactive --url "https://org.crm.dynamics.com"
```

[📖 Full Documentation](TaskDownloadWebResource.md)

---

## Code Generation Tasks

### [Generators (JsForm, JsWebApi, CSharp)](TaskGenerator.md)

Generate type-safe code for Dynamics 365 development.

**Task Type:** `generators`

**Generator Types:**
- **JsForm** - JavaScript form helpers with IntelliSense
- **JsWebApi** - JavaScript WebAPI wrappers
- **CSharp** - C# late-bound entity classes

**Use Cases:**
- Generate form scripting helpers
- Create WebAPI wrappers
- Build late-bound C# classes
- Enable IntelliSense support

**Key Features:**
- ✅ Type-safe code generation
- ✅ IntelliSense support
- ✅ Incremental generation with "folder" mode
- ✅ Metadata-driven
- ✅ Partial class support (C#)

**Quick Example:**
```powershell
# JavaScript Form Helpers
devkit generator --profile JS-FORM --json "DynamicsCrm.DevKit.Cli.json" --auth Interactive --url "https://org.crm.dynamics.com"

# C# Late-Bound Classes
devkit generator --profile LATEBOUND --json "DynamicsCrm.DevKit.Cli.json" --auth Interactive --url "https://org.crm.dynamics.com"
```

**JSON Configuration:**
```json
{
  "generators": [
    {
      "profile": "JS-FORM",
      "type": "JsForm",
      "rootnamespace": "MyCompany.WebResources",
      "namespace": "",
      "rootfolder": "",
      "entities": "folder"
    },
    {
      "profile": "LATEBOUND",
      "type": "CSharp",
      "rootnamespace": "MyCompany.Entities",
      "namespace": "",
      "rootfolder": "Entities",
      "entities": "account,contact,lead"
    }
  ]
}
```

[📖 Full Documentation](TaskGenerator.md)

### [Model Builder (Early-Bound Classes)](TaskModelBuilder.md)

Generate early-bound entity classes using PAC ModelBuilder.

**CLI Command:** `modelbuilder`

**Use Cases:**
- Generate strongly-typed entity classes
- Enable compile-time type safety
- Create early-bound plugin code
- IntelliSense for entities and attributes

**Key Features:**
- ✅ Full IntelliSense support
- ✅ Compile-time validation
- ✅ Option set enums
- ✅ Fields constants class
- ✅ Partial class support

**Quick Example:**
```powershell
devkit modelbuilder --profile ALL --json "DynamicsCrm.DevKit.Cli.json" --auth Interactive --url "https://org.crm.dynamics.com"
```

**JSON Configuration:**
```json
{
  "modelbuilders": [
    {
      "profile": "ALL",
      "namespace": "MyCompany.ProxyTypes",
      "output": "GeneratedCode.cs",
      "entities": "*"
    }
  ]
}
```

[📖 Full Documentation](TaskModelBuilder.md)

---

## Solution Tasks

### [Solution Packager](TaskPacSolutionPackager.md)

Extract and pack Dynamics 365 solutions using PAC CLI.

**CLI Command:** `solution`

**Operation Types:**
- **Extract** - Export from D365 and extract to files
- **Pack** - Pack files into solution zip

**Use Cases:**
- Source control integration
- Solution versioning
- ALM processes
- Automated builds

**Key Features:**
- ✅ Uses PAC CLI for modern solution management
- ✅ Extract managed and unmanaged
- ✅ Mapping file support
- ✅ Automatic version formatting

**Quick Example:**
```powershell
# Extract Solution
devkit solution --profile Extract-Both --json "DynamicsCrm.DevKit.Cli.json" --auth Interactive --url "https://org.crm.dynamics.com"

# Pack Solution (no connection needed)
devkit solution --profile Pack-Both --json "DynamicsCrm.DevKit.Cli.json"
```

**JSON Configuration:**
```json
{
  "pacsolutionpackagers": [
    {
      "profile": "Extract-Both",
      "solution": "MyCompanySolution",
      "solutiontype": "Both",
      "folder": "MyCompanySolution",
      "type": "Extract"
    }
  ]
}
```

[📖 Full Documentation](TaskPacSolutionPackager.md)

---

## Report Tasks

### [Upload Reports](TaskUploadReport.md)

Deploy SSRS reports (RDL files) to Dynamics 365.

**Task Type:** `uploadreports`

**Use Cases:**
- Deploy report updates
- Multi-language report deployment
- Report version management
- Automated report deployment

**Key Features:**
- ✅ Multi-language support
- ✅ Smart deployment (skips unchanged)
- ✅ File name matching
- ✅ Language folder organization

**Quick Example:**
```powershell
devkit uploadreport --profile DEBUG --json "DynamicsCrm.DevKit.Cli.json" --auth Interactive --url "https://org.crm.dynamics.com"
```

**JSON Configuration:**
```json
{
  "uploadreports": [
    {
      "profile": "DEBUG",
      "solution": "ReportingSolution",
      "language": ["1033", "1036"]
    }
  ]
}
```

**Folder Structure:**
```
ReportingSolution/
├── 1033/
│   └── SalesReport.rdl
└── 1036/
    └── SalesReport.rdl
```

[📖 Full Documentation](TaskUploadReport.md)

### [Download Reports](TaskDownloadReport.md)

Download SSRS reports from Dynamics 365.

**Task Type:** `downloadreports`

**Use Cases:**
- Backup reports
- Version control
- Offline editing
- Environment migration

**Quick Example:**
```powershell
devkit downloadreport --profile DEBUG --json "DynamicsCrm.DevKit.Cli.json" --auth Interactive --url "https://org.crm.dynamics.com"
```

[📖 Full Documentation](TaskDownloadReport.md)

---

## Virtual Entity Tasks

### [Data Sources](TaskDataSource.md)

Create virtual entity data sources in Dynamics 365.

**Task Type:** `datasources`

**Use Cases:**
- Create data sources for virtual entities
- External data integration
- OData service integration
- Custom API data providers

**Key Features:**
- ✅ Automatic publisher prefix handling
- ✅ Name validation
- ✅ Solution integration

**Quick Example:**
```powershell
devkit datasource --profile DEBUG --json "DynamicsCrm.DevKit.Cli.json" --auth Interactive --url "https://org.crm.dynamics.com"
```

**JSON Configuration:**
```json
{
  "datasources": [
    {
      "profile": "DEBUG",
      "solution": "MyCompanySolution",
      "displayname": "SQL DataSource",
      "pluralname": "SQL DataSources",
      "name": "Sql_DataSource"
    }
  ]
}
```

[📖 Full Documentation](TaskDataSource.md)

---

## Quick Reference

### Commands Summary

| Command | Purpose | Documentation |
|---------|---------|---------------|
| `devkit server` | Deploy plugins, workflows, custom APIs, data providers | [TaskServer.md](TaskServer.md) |
| `devkit webresource` | Deploy web resources | [TaskWebResource.md](TaskWebResource.md) |
| `devkit downloadwebresource` | Download web resources | [TaskDownloadWebResource.md](TaskDownloadWebResource.md) |
| `devkit generator` | Generate code (JS/TS/C#) | [TaskGenerator.md](TaskGenerator.md) |
| `devkit modelbuilder` | Generate early-bound classes (PAC ModelBuilder) | [TaskModelBuilder.md](TaskModelBuilder.md) |
| `devkit solution` | Extract/Pack solutions using PAC CLI | [TaskPacSolutionPackager.md](TaskPacSolutionPackager.md) |
| `devkit uploadreport` | Deploy reports | [TaskUploadReport.md](TaskUploadReport.md) |
| `devkit downloadreport` | Download reports | [TaskDownloadReport.md](TaskDownloadReport.md) |
| `devkit datasource` | Create virtual entity data sources | [TaskDataSource.md](TaskDataSource.md) |
| `devkit mcp` | Start MCP server for AI agent integration | — |
| `devkit proxytype` | *(Deprecated)* Use `devkit modelbuilder` | [TaskProxyType.md](TaskProxyType.md) |
| `devkit legacy-solution` | *(Deprecated)* Use `devkit solution` | [TaskSolutionPackager.md](TaskSolutionPackager.md) |

### Common Command Line Parameters

| Parameter | Required | Description | Example |
|-----------|----------|-------------|---------|
| `--json` | Yes | Path to CLI configuration file | `--json "DynamicsCrm.DevKit.Cli.json"` |
| `--profile` | Yes | Configuration profile name | `--profile DEBUG` |
| `--auth` | Yes* | Authentication type | `--auth Interactive` |
| `--url` | Conditional | Dynamics 365 URL | `--url "https://org.crm.dynamics.com"` |
| `--clientid` | Conditional | Azure AD Client ID | `--clientid "<AppId>"` |
| `--clientsecret` | Conditional | Azure AD Client Secret | `--clientsecret "<Secret>"` |
| `--username` | Conditional | Username (OAuth/AD) | `--username "user@domain.com"` |
| `--password` | Conditional | Password (OAuth/AD) | `--password "****"` |
| `--pacprofile` | Conditional | PAC CLI profile (FromPac) | `--pacprofile "MyProfile"` |
| `--onlyupdateassembly` | No | Fast deploy (server only) | `--onlyupdateassembly` |
| `--conn` | No | Legacy connection string | `--conn "AuthType=OAuth;..."` |

\* Or set `DEVKIT_AUTH_TYPE` environment variable

### Supported Authentication Types

| Auth Type | Best For | Required Args |
|-----------|----------|---------------|
| `Interactive` | Developers (MFA support) | `--url` |
| `DeviceCode` | Headless/Remote/SSH | `--url` |
| `ClientSecret` | CI/CD pipelines | `--url`, `--clientid`, `--clientsecret` |
| `OAuth` | Username/Password (legacy) | `--url`, `--username`, `--password` |
| `AD` | On-Premises Active Directory | `--url`, `--username`, `--password` |
| `FromPac` | Reuse PAC CLI tokens | `--pacprofile` (optional) |

### Typical Development Workflow

1. **Setup**
   ```powershell
   # Install CLI as .NET global tool
   dotnet tool install --global DynamicsCrm.DevKit.Cli
   ```

2. **Generate Code**
   ```powershell
   # Generate early-bound classes
   devkit modelbuilder --profile ALL --json "..." --auth Interactive --url "..."
   
   # Generate JavaScript helpers
   devkit generator --profile JS-FORM --json "..." --auth Interactive --url "..."
   ```

3. **Development**
   ```powershell
   # Deploy plugins (fast mode during development)
   devkit server --profile DEBUG --json "..." --auth Interactive --url "..." --onlyupdateassembly
   
   # Deploy web resources
   devkit webresource --profile DEBUG --json "..." --auth Interactive --url "..."
   ```

4. **Source Control**
   ```powershell
   # Extract solution for version control
   devkit solution --profile Extract-Both --json "..." --auth Interactive --url "..."
   
   # Download web resources for backup
   devkit downloadwebresource --profile DEBUG --json "..." --auth Interactive --url "..."
   ```

5. **Deployment**
   ```powershell
   # Deploy to production using ClientSecret
   devkit server --profile RELEASE --json "..." --auth ClientSecret --url "$(ProdUrl)" --clientid "$(ClientId)" --clientsecret "$(ClientSecret)"
   devkit webresource --profile RELEASE --json "..." --auth ClientSecret --url "$(ProdUrl)" --clientid "$(ClientId)" --clientsecret "$(ClientSecret)"
   ```

### CI/CD Integration

**Azure DevOps Example:**
```yaml
steps:
- task: PowerShell@2
  displayName: 'Deploy Plugins'
  inputs:
    targetType: 'inline'
    script: |
      devkit server --profile $(Environment) --json "DynamicsCrm.DevKit.Cli.json" --auth ClientSecret --url "$(Url)" --clientid "$(ClientId)" --clientsecret "$(ClientSecret)"
```

**GitHub Actions Example:**
```yaml
- name: Deploy Web Resources
  run: |
    devkit webresource --profile RELEASE --json "DynamicsCrm.DevKit.Cli.json" --auth ClientSecret --url "${{ secrets.URL }}" --clientid "${{ secrets.CLIENT_ID }}" --clientsecret "${{ secrets.CLIENT_SECRET }}"
  shell: pwsh
```

---

## Additional Resources

- **Main README:** [README.md](README.md) - Installation, overview, and getting started
- **Template:** [cli.task.template.md](cli.task.template.md) - Template for creating task documentation
- **GitHub Repository:** [phuocle/Dynamics-Crm-DevKit](https://github.com/phuocle/Dynamics-Crm-DevKit)
- **Issues & Support:** [GitHub Issues](https://github.com/phuocle/Dynamics-Crm-DevKit/issues)

---

## Notes

- **Dotnet global tool:** Install with `dotnet tool install --global DynamicsCrm.DevKit.Cli`
- **Requires .NET 10.0:** Ensure .NET 10 SDK is installed
- **Configuration file:** All tasks use `DynamicsCrm.DevKit.Cli.json` for configuration
- **Profiles:** Use different profiles for different environments (DEBUG, RELEASE, UAT, PROD)
- **Batch operations:** Many tasks automatically batch operations for performance
- **Error handling:** CLI provides detailed error messages with solutions
