```text
  ____                              _           ____                  ____             _  ___ _     ____ _ _
 |  _ \ _   _ _ __   __ _ _ __ ___ (_) ___ ___ / ___|_ __ _ __ ___   |  _ \  _____   _| |/ (_) |_  / ___| (_)
 | | | | | | | '_ \ / _` | '_ ` _ \| |/ __/ __| |   | '__| '_ ` _ \  | | | |/ _ \ \ / / ' /| | __|| |   | | |
 | |_| | |_| | | | | (_| | | | | | | | (__\__ \ |___| |  | | | | | |_| |_| |  __/\ V /| . \| | |_ | |___| | |
 |____/ \__, |_| |_|\__,_|_| |_| |_|_|\___|___/\____|_|  |_| |_| |_(_)____/ \___| \_/ |_|\_\_|\__(_)____|_|_|
        |___/            https://github.com/phuocle/Dynamics-Crm-DevKit x.xx.xx.xx Build: xxxx.yy.zz HH.mm.ss

```
## DynamicsCrm.DevKit.Cli - Command Line Interface

A comprehensive CLI tool for Dynamics 365/Dataverse deployment automation and code generation.

---

## Overview

**DynamicsCrm.DevKit.Cli** is a modern, feature-rich command-line tool for automating Dynamics 365 CE / Dataverse development tasks including:
- Plugin & Workflow deployment
- Web Resource management
- Solution packaging
- Code generation (JavaScript, TypeScript, C#)
- Report management
- Virtual Entity/Data Source creation
- Early-bound class generation

---

## Installation

### NuGet Package
```powershell
dotnet tool install --global DynamicsCrm.DevKit.Cli
```

### Prerequisites
- .NET Framework 4.8
- Microsoft.CrmSdk.CoreTools (for CrmSvcUtil and SolutionPackager)

---

## Command-Line Arguments

### Required Arguments
| Argument | Description | Example |
|----------|-------------|---------|
| `/json` | Path to configuration file | `/json:"DynamicsCrm.DevKit.Cli.json"` |
| `/type` | Task type to execute | `/type:servers` |
| `/profile` | Configuration profile | `/profile:default` |

### Authentication Arguments

#### Option 1: Connection String
```powershell
/conn:"AuthType=OAuth;Username=user@org.onmicrosoft.com;Password=****;Url=https://org.crm.dynamics.com"
```

#### Option 2: SDK Login (OAuth Browser)
```powershell
/sdklogin:yes /url:"https://org.crm.dynamics.com"
```

### Optional Arguments
| Argument | Description | Default |
|----------|-------------|---------|
| `/version` | Version number | `1.0.0.0` |
| `/command` | Additional commands | `""` |
| `/onlyupdateassembly` | Fast deploy (assembly only) | `""` |

---

## Task Types

| Type | Description | Task File |
|------|-------------|-----------|
| `servers` | Deploy plugins/workflows/custom APIs/data providers | TaskServer.cs |
| `plugins` | Deploy plugins only | TaskServer.cs |
| `workflows` | Deploy workflows only | TaskServer.cs |
| `dataproviders` | Deploy data providers only | TaskServer.cs |
| `webresources` | Deploy web resources | TaskWebResource.cs |
| `downloadwebresources` | Download web resources from instance | TaskDownloadWebResource.cs |
| `proxytypes` | Generate early-bound classes | TaskProxyType.cs |
| `generators` | Generate code (JS/TypeScript/C#) | TaskGenerator.cs |
| `solutionpackagers` | Extract/Pack solutions | TaskSolutionPackager.cs |
| `uploadreports` | Upload reports | TaskUploadReport.cs |
| `downloadreports` | Download reports from instance | TaskDownloadReport.cs |
| `datasources` | Create virtual entities/data sources | TaskDataSource.cs |

---

## Configuration File

Create `DynamicsCrm.DevKit.Cli.json` in your project root:

```json
{
  "solution": "YourSolution",
  "type": "servers",
  "profile": "default",
  "servers": [
    {
      "profile": "default",
      "solution": "YourSolution",
      "folder": "..\\..\\YourProject\\bin\\Release",
      "includefiles": ["*.dll"],
      "excludefiles": ["Microsoft.*.dll", "System.*.dll"]
    }
  ]
}
```

---

## Usage Examples

### 1. Deploy Plugins
```powershell
DynamicsCrm.DevKit.Cli /conn:"ConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:servers /profile:default
```

### 2. Deploy Web Resources
```powershell
DynamicsCrm.DevKit.Cli /conn:"ConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:webresources /profile:default
```

### 3. Generate Early-Bound Classes
```powershell
DynamicsCrm.DevKit.Cli /conn:"ConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:proxytypes /profile:default
```

### 4. Extract Solution
```powershell
DynamicsCrm.DevKit.Cli /conn:"ConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:solutionpackagers /profile:default
```

### 5. SDK Login (OAuth)
```powershell
DynamicsCrm.DevKit.Cli /sdklogin:yes /url:"https://org.crm.dynamics.com" /json:"DynamicsCrm.DevKit.Cli.json" /type:servers /profile:default
```

---

## Key Features

### Plugin & Workflow Deployment
- ✅ **4 Images** support (Image1-4)
- ✅ **Managed Identity** support
- ✅ **Custom API** registration
- ✅ **Data Provider** registration
- ✅ **Step ID tracking** (Id property for idempotent deployments)
- ✅ **RunAs** user impersonation
- ✅ **Multiple source types**: Database, Disk, AzureWebApp, FileStore
- ✅ **Batch processing** (50 operations per batch)
- ✅ **Unregister** support
- ✅ **Fast deploy** option (assembly only)

### Web Resource Management
- ✅ 15+ file types (HTML, CSS, JS, PNG, SVG, RESX, etc.)
- ✅ **Dependency management** with XML generation
- ✅ **Pattern matching** (include/exclude)
- ✅ **Entity token replacement** ([entity] pattern)
- ✅ **Download** from instance
- ✅ **Batch publish**

### Code Generation
- ✅ **JavaScript Form** (JsForm) - IntelliSense for form scripting
- ✅ **JavaScript WebAPI** (JsWebApi) - Type-safe WebAPI calls
- ✅ **C# Late-Bound** - Entity helpers
- ✅ **TypeScript** definitions (.d.ts)

### Solution Packaging
- ✅ **Direct export** from instance before extraction
- ✅ **Both managed/unmanaged** in single operation
- ✅ **Auto-version formatting**
- ✅ **Map file** support

### Report Management
- ✅ **Upload/Download** RDL files
- ✅ **Multi-language** support
- ✅ **Solution integration**

### Virtual Entity Support
- ✅ **Data Source** creation
- ✅ **External name** mapping
- ✅ **Entity metadata** validation

---

## CrmPluginRegistrationAttribute Properties

### Core Properties
- `Id` - Step GUID for idempotent deployments ✨
- `Message` - SDK message name
- `EntityLogicalName` - Target entity
- `Stage` - PreValidation/PreOperation/PostOperation
- `ExecutionMode` - Synchronous/Asynchronous
- `FilteringAttributes` - Comma-separated attributes
- `Name` - Step name
- `ExecutionOrder` - Step execution order
- `IsolationMode` - Sandbox/None/External

### Advanced Properties
- `Unregister` - Unregister plugin step
- `RunAs` - Impersonate user GUID
- `SourceType` - Database/Disk/AzureWebApp/FileStore
- `PluginType` - Plugin/Workflow/CustomAction/CustomApi/DataProvider
- `DataSource` - Data provider data source name
- `DeleteAsyncOperation` - Auto-delete async jobs
- `Offline` - Offline execution
- `Server` - Server execution

### Image Support (4 Images)
- `Image1Name`, `Image1Alias`, `Image1Type`, `Image1Attributes`
- `Image2Name`, `Image2Alias`, `Image2Type`, `Image2Attributes`
- `Image3Name`, `Image3Alias`, `Image3Type`, `Image3Attributes`
- `Image4Name`, `Image4Alias`, `Image4Type`, `Image4Attributes`

---

## Advanced Scenarios

### Managed Identity Plugin
```csharp
[assembly: DynamcisCrmDevKitPluginManagedIdentityAssembly("YourClientId")]

[CrmPluginRegistration(
    Message = "Update",
    EntityLogicalName = "account",
    Stage = StageEnum.PostOperation,
    ExecutionMode = ExecutionModeEnum.Synchronous,
    Name = "Account Update",
    Id = "12345678-1234-1234-1234-123456789012"
)]
public class AccountUpdate : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        // Implementation
    }
}
```

### Custom API Registration
```csharp
[CrmPluginRegistration(
    Message = "prefix_CustomApiName",
    Stage = StageEnum.PostOperation,
    ExecutionMode = ExecutionModeEnum.Synchronous,
    PluginType = PluginType.CustomApi,
    Name = "Custom API Handler",
    Id = "87654321-4321-4321-4321-210987654321"
)]
public class CustomApiHandler : IPlugin
{
    // Implementation
}
```

### Data Provider Registration
```csharp
[CrmPluginRegistration(
    Message = "Retrieve",
    Stage = StageEnum.PostOperation,
    ExecutionMode = ExecutionModeEnum.Synchronous,
    PluginType = PluginType.DataProvider,
    DataSource = "prefix_datasource",
    Name = "Data Provider Retrieve"
)]
public class DataProviderRetrieve : IPlugin
{
    // Implementation
}
```

---

## CI/CD Integration

### Azure DevOps Pipeline
```yaml
steps:
- task: PowerShell@2
  displayName: 'Deploy Plugins'
  inputs:
    targetType: 'inline'
    script: |
      DynamicsCrm.DevKit.Cli /conn:"$(ConnectionString)" /json:"DynamicsCrm.DevKit.Cli.json" /type:servers /profile:$(Environment)

- task: PowerShell@2
  displayName: 'Deploy Web Resources'
  inputs:
    targetType: 'inline'
    script: |
      DynamicsCrm.DevKit.Cli /conn:"$(ConnectionString)" /json:"DynamicsCrm.DevKit.Cli.json" /type:webresources /profile:$(Environment)
```

---

## Comparison with spkl

| Feature | spkl | DevKit.Cli |
|---------|------|-----------|
| **Plugin/Workflow** | ✅ 2 images | ✅ **4 images** |
| **Managed Identity** | ❌ | ✅ |
| **Custom API** | ❌ | ✅ |
| **Data Provider** | ❌ | ✅ |
| **Step ID Tracking** | ✅ | ✅ |
| **Report Management** | ❌ | ✅ |
| **Virtual Entities** | ❌ | ✅ |
| **Code Generation** | ❌ | ✅ 3 types |
| **Download Capabilities** | ❌ | ✅ |
| **Instrument Command** | ✅ | ❌ (planned) |

---

## Documentation

- [spkl Comparison](spkl-comparison.md) - Detailed feature comparison
- [Feature Gap Analysis](feature-gap-analysis.md) - Gap analysis with spkl
- [Migration from spkl](migration-from-spkl.md) - Step-by-step migration guide

---

## Support

- GitHub: https://github.com/phuocle/Dynamics-Crm-DevKit
- Issues: https://github.com/phuocle/Dynamics-Crm-DevKit/issues

---

Generated: 2025-11-10

````
