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
- ✅ Fast deployment mode (`/onlyupdateassembly`)
- ✅ NuGet package deployment support
- ✅ Step ID tracking for idempotent deployments

**Quick Example:**
```powershell
DynamicsCrm.DevKit.Cli /conn:"ConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:servers /profile:DEBUG
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
DynamicsCrm.DevKit.Cli /conn:"ConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:webresources /profile:DEBUG
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
DynamicsCrm.DevKit.Cli /conn:"ConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:downloadwebresources /profile:DEBUG
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
DynamicsCrm.DevKit.Cli /conn:"ConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:generators /profile:JS-FORM

# C# Late-Bound Classes
DynamicsCrm.DevKit.Cli /conn:"ConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:generators /profile:LATEBOUND
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

### [Proxy Types (Early-Bound Classes)](TaskProxyType.md)

Generate early-bound entity classes using CrmSvcUtil.

**Task Type:** `proxytypes`

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
DynamicsCrm.DevKit.Cli /conn:"ConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:proxytypes /profile:ALL
```

**JSON Configuration:**
```json
{
  "proxytypes": [
    {
      "profile": "ALL",
      "namespace": "MyCompany.ProxyTypes",
      "output": "GeneratedCode.cs",
      "entities": "account,contact,lead"
    }
  ]
}
```

[📖 Full Documentation](TaskProxyType.md)

---

## Solution Tasks

### [Solution Packager](TaskSolutionPackager.md)

Extract and pack Dynamics 365 solutions.

**Task Type:** `solutionpackagers`

**Operation Types:**
- **Extract** - Export from D365 and extract to files
- **Pack** - Pack files into solution zip

**Use Cases:**
- Source control integration
- Solution versioning
- ALM processes
- Automated builds

**Key Features:**
- ✅ Direct export from Dynamics 365
- ✅ Extract managed and unmanaged
- ✅ Mapping file support
- ✅ Automatic version formatting

**Quick Example:**
```powershell
# Extract Solution
DynamicsCrm.DevKit.Cli /conn:"ConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:solutionpackagers /profile:Extract-Both

# Pack Solution
DynamicsCrm.DevKit.Cli /json:"DynamicsCrm.DevKit.Cli.json" /type:solutionpackagers /profile:Pack-Both
```

**JSON Configuration:**
```json
{
  "solutionpackagers": [
    {
      "profile": "Extract-Both",
      "solution": "MyCompanySolution",
      "rootfolder": "",
      "solutiontype": "Both",
      "folder": "MyCompanySolution",
      "type": "Extract",
      "mapfile": ""
    }
  ]
}
```

[📖 Full Documentation](TaskSolutionPackager.md)

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
DynamicsCrm.DevKit.Cli /conn:"ConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:uploadreports /profile:DEBUG
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
DynamicsCrm.DevKit.Cli /conn:"ConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:downloadreports /profile:DEBUG
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
DynamicsCrm.DevKit.Cli /conn:"ConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:datasources /profile:DEBUG
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

### Task Types Summary

| Task Type | Purpose | Documentation |
|-----------|---------|---------------|
| `servers` | Deploy all server components | [TaskServer.md](TaskServer.md) |
| `plugins` | Deploy plugins only | [TaskServer.md](TaskServer.md) |
| `workflows` | Deploy workflows only | [TaskServer.md](TaskServer.md) |
| `dataproviders` | Deploy data providers only | [TaskServer.md](TaskServer.md) |
| `webresources` | Deploy web resources | [TaskWebResource.md](TaskWebResource.md) |
| `downloadwebresources` | Download web resources | [TaskDownloadWebResource.md](TaskDownloadWebResource.md) |
| `generators` | Generate code (JS/C#) | [TaskGenerator.md](TaskGenerator.md) |
| `proxytypes` | Generate early-bound classes | [TaskProxyType.md](TaskProxyType.md) |
| `solutionpackagers` | Extract/Pack solutions | [TaskSolutionPackager.md](TaskSolutionPackager.md) |
| `uploadreports` | Deploy reports | [TaskUploadReport.md](TaskUploadReport.md) |
| `downloadreports` | Download reports | [TaskDownloadReport.md](TaskDownloadReport.md) |
| `datasources` | Create virtual entity data sources | [TaskDataSource.md](TaskDataSource.md) |

### Common Command Line Parameters

| Parameter | Required | Description | Example |
|-----------|----------|-------------|---------|
| `/json` | Yes | Path to CLI configuration file | `/json:"DynamicsCrm.DevKit.Cli.json"` |
| `/type` | Yes | Task type to execute | `/type:servers` |
| `/profile` | Yes | Configuration profile name | `/profile:DEBUG` |
| `/conn` | Yes* | Connection string (OAuth, ClientSecret, or AD) | `/conn:"AuthType=OAuth;..."` |
| `/sdklogin` | Yes* | Use SDK login dialog | `/sdklogin:yes` |
| `/url` | Conditional | URL for SDK login | `/url:"https://org.crm.dynamics.com"` |
| `/version` | No | Tool version | `/version:9.1.0.82` |
| `/onlyupdateassembly` | No | Fast deploy (servers only) | `/onlyupdateassembly:yes` |
| `/command` | No | Additional commands | `/command:"extra"` |

\* Either `/conn` or `/sdklogin` is required

### Supported Connection String Authentication Types

| AuthType | Use Case | Example |
|----------|----------|---------|
| `OAuth` | Username/Password | `AuthType=OAuth;Url=...;Username=user@domain.com;Password=****` |
| `ClientSecret` | Service Principal / CI-CD | `AuthType=ClientSecret;Url=...;ClientId=<AppId>;ClientSecret=<Secret>` |
| `AD` | On-Premises Active Directory | `AuthType=AD;Url=...;Domain=yourdomain;Username=user;Password=****` |

### Typical Development Workflow

1. **Setup**
   ```powershell
   # Install CLI via NuGet
   Install-Package DynamicsCrm.DevKit.Cli
   ```

2. **Generate Code**
   ```powershell
   # Generate early-bound classes
   DynamicsCrm.DevKit.Cli /conn:"..." /json:"..." /type:proxytypes /profile:ALL
   
   # Generate JavaScript helpers
   DynamicsCrm.DevKit.Cli /conn:"..." /json:"..." /type:generators /profile:JS-FORM
   ```

3. **Development**
   ```powershell
   # Deploy plugins (fast mode during development)
   DynamicsCrm.DevKit.Cli /conn:"..." /json:"..." /type:servers /profile:DEBUG /onlyupdateassembly:yes
   
   # Deploy web resources
   DynamicsCrm.DevKit.Cli /conn:"..." /json:"..." /type:webresources /profile:DEBUG
   ```

4. **Source Control**
   ```powershell
   # Extract solution for version control
   DynamicsCrm.DevKit.Cli /conn:"..." /json:"..." /type:solutionpackagers /profile:Extract-Both
   
   # Download web resources for backup
   DynamicsCrm.DevKit.Cli /conn:"..." /json:"..." /type:downloadwebresources /profile:DEBUG
   ```

5. **Deployment**
   ```powershell
   # Deploy to production
   DynamicsCrm.DevKit.Cli /conn:"$(ProdConnection)" /json:"..." /type:servers /profile:RELEASE
   DynamicsCrm.DevKit.Cli /conn:"$(ProdConnection)" /json:"..." /type:webresources /profile:RELEASE
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
      $cli = "packages\DynamicsCrm.DevKit.Cli\tools\DynamicsCrm.DevKit.Cli.exe"
      & $cli /conn:"$(ConnectionString)" /json:"DynamicsCrm.DevKit.Cli.json" /type:servers /profile:$(Environment)
```

**GitHub Actions Example:**
```yaml
- name: Deploy Web Resources
  run: |
    $cli = "packages\DynamicsCrm.DevKit.Cli\tools\DynamicsCrm.DevKit.Cli.exe"
    & $cli /conn:"${{ secrets.CONNECTION }}" /json:"DynamicsCrm.DevKit.Cli.json" /type:webresources /profile:RELEASE
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

- **Not a dotnet global tool:** Install via NuGet package manager, not `dotnet tool install`
- **Requires .NET Framework 4.8:** Ensure .NET Framework 4.8 is installed
- **CrmSdk.CoreTools dependency:** Some tasks require Microsoft.CrmSdk.CoreTools NuGet package
- **Configuration file:** All tasks use `DynamicsCrm.DevKit.Cli.json` for configuration
- **Profiles:** Use different profiles for different environments (DEBUG, RELEASE, UAT, PROD)
- **Batch operations:** Many tasks automatically batch operations for performance
- **Error handling:** CLI provides detailed error messages with solutions
