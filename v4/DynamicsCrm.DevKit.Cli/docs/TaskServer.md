# Task: Server (Plugins, Workflows, Custom Actions, Custom APIs, Data Providers)

## Overview

The Server task deploys server-side assemblies to Dynamics 365/Dataverse, including Plugins, Workflows, Custom Actions, Custom APIs, and Data Providers. It automatically registers assemblies, plugin types, and plugin steps based on `CrmPluginRegistration` attributes in your code. The task supports advanced features like 4 images, managed identity, batch processing, and fast deployment options. It can deploy from DLL files or nuget packages and handles signing for managed identity scenarios.

---

## Task Type

**CLI Types:** `servers`, `plugins`, `workflows`, `dataproviders`

**Used in command line:**
```powershell
# Deploy all server components (plugins, workflows, custom APIs, data providers)
DynamicsCrm.DevKit.Cli /conn:"ConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:servers /profile:DEBUG

# Deploy only plugins
DynamicsCrm.DevKit.Cli /conn:"ConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:plugins /profile:DEBUG

# Deploy only workflows
DynamicsCrm.DevKit.Cli /conn:"ConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:workflows /profile:DEBUG

# Deploy only data providers
DynamicsCrm.DevKit.Cli /conn:"ConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:dataproviders /profile:DEBUG
```

---

## Command Line Parameters

### Required Parameters

| Parameter | Description | Example |
|-----------|-------------|---------|
| `/json` | Path to CLI configuration file | `/json:"DynamicsCrm.DevKit.Cli.json"` |
| `/type` | Task type to execute | `/type:servers` |
| `/profile` | Configuration profile name | `/profile:DEBUG` |

### Authentication Parameters

#### Option 1: Connection String
```powershell
/conn:"AuthType=OAuth;Username=user@org.onmicrosoft.com;******;Url=https://org.crm.dynamics.com"
```

#### Option 2: SDK Login (OAuth Browser)
```powershell
/sdklogin:yes /url:"https://org.crm.dynamics.com"
```

### Optional Parameters

| Parameter | Description | Default | Example |
|-----------|-------------|---------|---------|
| `/version` | Version number for tools | `1.0.0.0` | `/version:9.1.0.82` |
| `/onlyupdateassembly` | Fast deploy (assembly only) | `""` | `/onlyupdateassembly:yes` |
| `/command` | Additional commands | `""` | `/command:"extra"` |

---

## JSON Configuration

### JSON Schema

```json
{
  "servers": [
    {
      "profile": "string",
      "solution": "string",
      "folder": "string",
      "includefiles": ["array", "of", "patterns"],
      "excludefiles": ["array", "of", "patterns"]
    }
  ],
  "plugins": [ /* same structure */ ],
  "workflows": [ /* same structure */ ],
  "dataproviders": [ /* same structure */ ]
}
```

### JSON Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `profile` | string | Yes | - | Profile identifier matching CLI `/profile` parameter |
| `solution` | string | Yes | `"???"` | Solution unique name in Dynamics 365 |
| `folder` | string | Yes | `"???"` | Folder containing assemblies (relative path) |
| `includefiles` | array | Yes | `[]` | File patterns to include (supports wildcards) |
| `excludefiles` | array | No | `[]` | File patterns to exclude (supports wildcards) |

### Parameter Details

#### `solution`
The unique name of the solution where assemblies will be registered.

- **Required:** Yes
- **Validation:** Cannot be empty or `"???"`
- **Example:** `"MyCompanySolution"`, `"DEVKITV4"`
- **Error if missing:** `'solution' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.`

#### `folder`
Folder path (relative to current directory) containing assembly files to deploy.

- **Required:** Yes
- **Format:** Relative path from current directory
- **Example:** `"bin\\Debug"`, `"bin\\Release"`, `"..\\MyProject\\bin\\Debug"`
- **Common paths:** 
  - Development: `"bin\\Debug"`
  - Production: `"bin\\Release"`, `"Release\\dll"`

#### `includefiles`
Array of file patterns to include in deployment. Supports wildcards (`*`, `**`).

- **Required:** Yes (must have at least one pattern)
- **Supports:** `.dll` and `.nupkg` files
- **Wildcards:** `*` for single level, `**` for recursive
- **Examples:**
  ```json
  "includefiles": [
    "MyCompany.Plugin.*.dll",
    "MyCompany.Workflow.*.dll",
    "MyCompany.CustomApi.*.dll",
    "MyCompany.DataProvider.*.dll",
    "MyCompany.Server.dll",
    "MyCompany.Package.nupkg"
  ]
  ```

#### `excludefiles`
Array of file patterns to exclude from deployment. Applied after `includefiles`.

- **Required:** No
- **Default:** `[]` (empty array)
- **Use case:** Exclude test assemblies, third-party DLLs, or system assemblies
- **Examples:**
  ```json
  "excludefiles": [
    "*.Test.dll",
    "Microsoft.*.dll",
    "System.*.dll",
    "Newtonsoft.*.dll"
  ]
  ```

---

## CrmPluginRegistration Attribute Properties

### Core Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `Id` | string/Guid | Recommended | Step GUID for idempotent deployments |
| `Message` | string | Yes | SDK message name (e.g., Create, Update, Delete) |
| `EntityLogicalName` | string | Conditional | Target entity (required for entity messages) |
| `Stage` | StageEnum | Yes | PreValidation, PreOperation, or PostOperation |
| `ExecutionMode` | ExecutionModeEnum | Yes | Synchronous or Asynchronous |
| `Name` | string | Yes | Step name (unique identifier) |
| `ExecutionOrder` | int | No | Step execution order (default: 1) |

### Advanced Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `FilteringAttributes` | string | `""` | Comma-separated attribute list |
| `IsolationMode` | IsolationModeEnum | `Sandbox` | Sandbox, None, or External |
| `Unregister` | bool | `false` | Set true to unregister step |
| `RunAs` | string | `""` | User GUID for impersonation |
| `SourceType` | SourceTypeEnum | `Database` | Database, Disk, AzureWebApp, FileStore |
| `PluginType` | PluginTypeEnum | `Plugin` | Plugin, Workflow, CustomApi, DataProvider |
| `DataSource` | string | `""` | Data source name for data providers |
| `DeleteAsyncOperation` | bool | `false` | Auto-delete async operation jobs |
| `Offline` | bool | `false` | Enable offline execution |
| `Server` | bool | `true` | Enable server execution |

### Image Support: 4 Images

**Image1:**
- `Image1Name` - Image entity alias
- `Image1Alias` - Image alias for code
- `Image1Type` | ImageTypeEnum | PreImage, PostImage, or Both
- `Image1Attributes` - Comma-separated attributes

**Image2, Image3, Image4:** Same properties as Image1

---

## Configuration Examples

### Example 1: Basic Plugin Deployment (DEBUG)

**Description:** Deploy all plugin assemblies from Debug folder to DEV environment.

**JSON Configuration:**
```json
{
  "servers": [
    {
      "profile": "DEBUG",
      "solution": "MyCompanySolution",
      "folder": "bin\\Debug",
      "includefiles": [
        "MyCompany.Plugin.*.dll",
        "MyCompany.Workflow.*.dll",
        "MyCompany.CustomApi.*.dll"
      ],
      "excludefiles": [
        "*.Test.dll"
      ]
    }
  ]
}
```

**Command Line:**
```powershell
DynamicsCrm.DevKit.Cli /conn:"AuthType=OAuth;Username=dev@company.com;******;Url=https://dev.crm.dynamics.com" /json:"DynamicsCrm.DevKit.Cli.json" /type:servers /profile:DEBUG
```

### Example 2: Production Deployment with NuGet Packages

**Description:** Deploy server components from Release folder including NuGet packages.

**JSON Configuration:**
```json
{
  "servers": [
    {
      "profile": "RELEASE",
      "solution": "MyCompanySolution",
      "folder": "Release\\dll",
      "includefiles": [
        "MyCompany.Server.dll",
        "MyCompany.Server.*.dll",
        "MyCompany.Package.nupkg",
        "MyCompany.Package.*.nupkg"
      ],
      "excludefiles": [
        "Microsoft.*.dll",
        "System.*.dll"
      ]
    }
  ]
}
```

**Command Line:**
```powershell
DynamicsCrm.DevKit.Cli /conn:"$(ProdConnectionString)" /json:"DynamicsCrm.DevKit.Cli.json" /type:servers /profile:RELEASE
```

### Example 3: Fast Deployment (Assembly Only)

**Description:** Quick update of assembly without re-registering steps (for code changes only).

**JSON Configuration:**
```json
{
  "servers": [
    {
      "profile": "QUICK",
      "solution": "MyCompanySolution",
      "folder": "bin\\Debug",
      "includefiles": [
        "MyCompany.Plugin.dll"
      ],
      "excludefiles": []
    }
  ]
}
```

**Command Line:**
```powershell
DynamicsCrm.DevKit.Cli /conn:"ConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:servers /profile:QUICK /onlyupdateassembly:yes
```

### Example 4: Deploy Only Workflows

**Description:** Deploy only workflow assemblies, excluding plugins.

**JSON Configuration:**
```json
{
  "workflows": [
    {
      "profile": "WORKFLOWS-ONLY",
      "solution": "MyCompanySolution",
      "folder": "bin\\Release",
      "includefiles": [
        "MyCompany.Workflow.*.dll"
      ],
      "excludefiles": []
    }
  ]
}
```

**Command Line:**
```powershell
DynamicsCrm.DevKit.Cli /sdklogin:yes /url:"https://company.crm.dynamics.com" /json:"DynamicsCrm.DevKit.Cli.json" /type:workflows /profile:WORKFLOWS-ONLY
```

---

## Usage Workflow

1. **Build your project** - Compile plugins/workflows in Debug or Release mode
2. **Add CrmPluginRegistration attributes** - Decorate plugin classes with registration attributes
3. **Configure JSON** - Set up `servers` section with correct folder and file patterns
4. **Test connection** - Verify authentication to target environment
5. **Execute CLI command** - Run deployment command
6. **Verify deployment** - Check Plugin Registration Tool or solution components
7. **Test functionality** - Trigger plugins/workflows to verify behavior

---

## Validation Rules

The task validates the following before execution:

- ✅ **Profile exists:** The specified profile must exist in the JSON configuration
- ✅ **Solution exists:** Solution must exist in target Dynamics 365 environment
- ✅ **Solution name valid:** Cannot be empty or `"???"`
- ✅ **Folder valid:** Cannot be empty or `"???"`
- ✅ **Files found:** At least one file must match include patterns
- ✅ **Assembly signature:** Managed Identity assemblies must be signed
- ✅ **Attribute validation:** All required CrmPluginRegistration properties present

**Error Messages:**

| Error | Cause | Solution |
|-------|-------|----------|
| `'profile' not found: 'X'` | Profile doesn't exist in JSON | Add profile or use existing profile name |
| `'solution' 'empty' or '???'` | Solution name not configured | Set valid solution name in JSON |
| `solution 'X' not exist` | Solution not found in environment | Create solution or check name |
| `Not found any files to deploy` | No files match include patterns | Check folder path and file patterns |
| `Assembly not signed` | Managed Identity requires signature | Sign assembly with certificate |

---

## Best Practices

- ✅ **Use Step IDs:** Always set `Id` property for idempotent deployments
- ✅ **Filtering Attributes:** Specify filtering attributes to improve performance
- ✅ **Separate profiles:** Create distinct profiles for DEBUG, RELEASE, UAT, PROD
- ✅ **Exclude test assemblies:** Always exclude `*.Test.dll` files
- ✅ **Fast deployment for development:** Use `/onlyupdateassembly:yes` during active development
- ✅ **Batch operations:** CLI automatically batches 50 operations per request
- ✅ **Version control attributes:** Store CrmPluginRegistration in source control
- ✅ **Test in DEV first:** Always test deployments in non-production environment
- ✅ **Use meaningful names:** Name plugin steps clearly for maintenance

---

## Common Issues & Troubleshooting

### Issue 1: Files Not Found

**Symptoms:** Error message: `Not found any files to deploy`

**Cause:** Folder path incorrect or file patterns don't match

**Solution:**
1. Verify folder exists: Check `{CurrentDirectory}\{folder}` exists
2. Check file patterns: Ensure wildcards match actual file names
3. Build project: Make sure assemblies are compiled
4. Verify path separators: Use `\\` for Windows paths in JSON

### Issue 2: Managed Identity Signing Errors

**Symptoms:** Error message: `Assembly not signed`

**Cause:** Managed Identity assemblies require certificate signing

**Solution:**
1. Add certificate file to project
2. Set certificate password in assembly attribute:
   ```csharp
   [assembly: DynamcisCrmDevKitPluginManagedIdentityAssembly("ClientId", 
       CertificateFileName = "cert.pfx", CertificatePassword = "password")]
   ```
3. Ensure SignTool.exe is available
4. Check certificate file path is correct

### Issue 3: Duplicate Plugin Steps

**Symptoms:** Multiple steps with same name/configuration

**Cause:** Not using `Id` property for idempotent deployments

**Solution:**
```csharp
[CrmPluginRegistration(
    Id = "12345678-1234-1234-1234-123456789012", // Set fixed GUID
    Message = "Update",
    EntityLogicalName = "account",
    Stage = StageEnum.PostOperation,
    ExecutionMode = ExecutionModeEnum.Synchronous,
    Name = "Account Update Handler"
)]
```

### Issue 4: Performance Issues - Too Many Steps

**Symptoms:** Deployment takes very long time

**Cause:** Too many plugin steps being registered/updated

**Solution:**
1. Use `/onlyupdateassembly:yes` for code-only changes
2. Deploy only changed assemblies using specific file patterns
3. Use separate profiles for different assembly groups
4. Consider splitting large assemblies

### Issue 5: Solution Not Found

**Symptoms:** Error message: `solution 'X' not exist`

**Cause:** Solution name doesn't match or doesn't exist

**Solution:**
1. Check solution exists: Settings > Solutions in Dynamics 365
2. Verify unique name: Use solution unique name, not display name
3. Check environment: Ensure connected to correct environment
4. Case sensitivity: Verify exact case of solution name

---

## Integration Examples

### CI/CD Pipeline (Azure DevOps)

```yaml
trigger:
  branches:
    include:
    - main
    - develop

variables:
  BuildConfiguration: 'Release'

steps:
- task: NuGetCommand@2
  displayName: 'Restore NuGet Packages'
  inputs:
    command: 'restore'
    restoreSolution: '**/*.sln'

- task: VSBuild@1
  displayName: 'Build Solution'
  inputs:
    solution: '**/*.sln'
    configuration: '$(BuildConfiguration)'
    platform: 'Any CPU'

- task: PowerShell@2
  displayName: 'Deploy Plugins to DEV'
  condition: eq(variables['Build.SourceBranch'], 'refs/heads/develop')
  inputs:
    targetType: 'inline'
    script: |
      $cliPath = "$(Build.SourcesDirectory)\packages\DynamicsCrm.DevKit.Cli\tools\DynamicsCrm.DevKit.Cli.exe"
      & $cliPath /conn:"$(DevConnectionString)" /json:"DynamicsCrm.DevKit.Cli.json" /type:servers /profile:DEBUG

- task: PowerShell@2
  displayName: 'Deploy Plugins to PROD'
  condition: eq(variables['Build.SourceBranch'], 'refs/heads/main')
  inputs:
    targetType: 'inline'
    script: |
      $cliPath = "$(Build.SourcesDirectory)\packages\DynamicsCrm.DevKit.Cli\tools\DynamicsCrm.DevKit.Cli.exe"
      & $cliPath /conn:"$(ProdConnectionString)" /json:"DynamicsCrm.DevKit.Cli.json" /type:servers /profile:RELEASE
```

### CI/CD Pipeline (GitHub Actions)

```yaml
name: Deploy Server Components

on:
  push:
    branches: [ main, develop ]
  workflow_dispatch:

jobs:
  deploy:
    runs-on: windows-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup MSBuild
      uses: microsoft/setup-msbuild@v1
      
    - name: Setup NuGet
      uses: nuget/setup-nuget@v1
      
    - name: Restore NuGet Packages
      run: nuget restore
      
    - name: Build Solution
      run: msbuild /p:Configuration=Release
      
    - name: Deploy to DEV
      if: github.ref == 'refs/heads/develop'
      run: |
        $cliPath = "packages\DynamicsCrm.DevKit.Cli\tools\DynamicsCrm.DevKit.Cli.exe"
        & $cliPath /conn:"${{ secrets.DEV_CONNECTION }}" /json:"DynamicsCrm.DevKit.Cli.json" /type:servers /profile:DEBUG
      shell: pwsh
      
    - name: Deploy to PROD
      if: github.ref == 'refs/heads/main'
      run: |
        $cliPath = "packages\DynamicsCrm.DevKit.Cli\tools\DynamicsCrm.DevKit.Cli.exe"
        & $cliPath /conn:"${{ secrets.PROD_CONNECTION }}" /json:"DynamicsCrm.DevKit.Cli.json" /type:servers /profile:RELEASE
      shell: pwsh
```

### PowerShell Script - Development Fast Deployment

```powershell
# Fast deployment script for active development
# Updates assembly only, no step re-registration

$connectionString = "AuthType=OAuth;Username=dev@company.com;******;Url=https://dev.crm.dynamics.com"
$cliPath = ".\packages\DynamicsCrm.DevKit.Cli\tools\DynamicsCrm.DevKit.Cli.exe"
$jsonFile = "DynamicsCrm.DevKit.Cli.json"

Write-Host "Building solution..." -ForegroundColor Green
msbuild /p:Configuration=Debug /v:minimal

if ($LASTEXITCODE -eq 0) {
    Write-Host "Deploying assembly (fast mode)..." -ForegroundColor Green
    & $cliPath /conn:"$connectionString" /json:"$jsonFile" /type:servers /profile:DEBUG /onlyupdateassembly:yes
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Deployment successful!" -ForegroundColor Green
    } else {
        Write-Host "Deployment failed!" -ForegroundColor Red
    }
} else {
    Write-Host "Build failed!" -ForegroundColor Red
}
```

### Batch Script - Multi-Environment Deployment

```batch
@echo off
setlocal

set CLI_PATH=packages\DynamicsCrm.DevKit.Cli\tools\DynamicsCrm.DevKit.Cli.exe
set JSON_FILE=DynamicsCrm.DevKit.Cli.json

echo ========================================
echo Multi-Environment Deployment
echo ========================================
echo.

echo Which environment to deploy?
echo 1. DEV
echo 2. UAT
echo 3. PROD
echo.
set /p ENV="Enter choice (1-3): "

if "%ENV%"=="1" (
    set PROFILE=DEBUG
    set CONNECTION=%DEV_CONNECTION%
    set ENV_NAME=DEV
) else if "%ENV%"=="2" (
    set PROFILE=UAT
    set CONNECTION=%UAT_CONNECTION%
    set ENV_NAME=UAT
) else if "%ENV%"=="3" (
    set PROFILE=RELEASE
    set CONNECTION=%PROD_CONNECTION%
    set ENV_NAME=PROD
) else (
    echo Invalid choice
    pause
    exit /b 1
)

echo.
echo Deploying to %ENV_NAME%...
echo Profile: %PROFILE%
echo.

%CLI_PATH% /conn:"%CONNECTION%" /json:"%JSON_FILE%" /type:servers /profile:%PROFILE%

echo.
echo Deployment completed!
pause
```

---

## Plugin Code Examples

### Example 1: Basic Plugin with Images

```csharp
using Microsoft.Xrm.Sdk;
using System;

namespace MyCompany.Plugins
{
    [CrmPluginRegistration(
        Id = "A1B2C3D4-1234-5678-90AB-CDEF12345678",
        Message = "Update",
        EntityLogicalName = "account",
        Stage = StageEnum.PostOperation,
        ExecutionMode = ExecutionModeEnum.Synchronous,
        FilteringAttributes = "name,address1_city",
        Name = "Account: Update - Post Operation",
        ExecutionOrder = 1,
        Image1Name = "PreImage",
        Image1Alias = "PreImage",
        Image1Type = ImageTypeEnum.PreImage,
        Image1Attributes = "name,address1_city,address1_state"
    )]
    public class AccountUpdate : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var service = serviceFactory.CreateOrganizationService(context.UserId);
            
            if (context.InputParameters.Contains("Target") && context.InputParameters["Target"] is Entity target)
            {
                var preImage = context.PreEntityImages["PreImage"];
                
                // Your logic here
            }
        }
    }
}
```

### Example 2: Custom API Handler

```csharp
[CrmPluginRegistration(
    Id = "E5F6G7H8-5678-9012-34AB-CDEF56789012",
    Message = "prefix_CustomApiName",
    Stage = StageEnum.PostOperation,
    ExecutionMode = ExecutionModeEnum.Synchronous,
    PluginType = PluginType.CustomApi,
    Name = "Custom API: prefix_CustomApiName"
)]
public class CustomApiHandler : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
        
        // Get input parameters
        var inputParam = context.InputParameters.Contains("InputParameter") 
            ? context.InputParameters["InputParameter"] 
            : null;
        
        // Set output parameters
        context.OutputParameters["OutputParameter"] = "result";
    }
}
```

### Example 3: Managed Identity Plugin

```csharp
using Microsoft.Xrm.Sdk;
using System;

[assembly: DynamicsCrmDevKitPluginManagedIdentityAssembly(
    "12345678-abcd-1234-abcd-123456789012",
    CertificateFileName = "MyCertificate.pfx",
    CertificatePassword = "P@ssw0rd"
)]

namespace MyCompany.Plugins
{
    [CrmPluginRegistration(
        Id = "I9J0K1L2-9012-3456-78AB-CDEF90123456",
        Message = "Create",
        EntityLogicalName = "contact",
        Stage = StageEnum.PostOperation,
        ExecutionMode = ExecutionModeEnum.Asynchronous,
        Name = "Contact: Create - Async Post Operation"
    )]
    public class ContactCreate : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            // Managed Identity allows calling external resources
            // Your logic here
        }
    }
}
```

### Example 4: Data Provider Plugin

```csharp
[CrmPluginRegistration(
    Id = "M3N4O5P6-3456-7890-12CD-EF1234567890",
    Message = "Retrieve",
    Stage = StageEnum.PostOperation,
    ExecutionMode = ExecutionModeEnum.Synchronous,
    PluginType = PluginType.DataProvider,
    DataSource = "prefix_externaldatasource",
    Name = "Data Provider: Retrieve"
)]
public class ExternalDataRetrieve : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
        
        // Retrieve data from external source
        // Map to virtual entity
    }
}
```

---

## Related Tasks

- **solutionpackagers** - Extract/Pack solutions containing plugins
- **webresources** - Deploy web resources that interact with plugins
- **generators** - Generate code for plugin development
- **proxytypes** - Generate early-bound classes for plugin use

---

## Additional Resources

- [Main CLI Documentation](README.md)
- [All Tasks Overview](cli.md)
- [CrmPluginRegistration Attribute Reference](https://github.com/phuocle/Dynamics-Crm-DevKit)
- [Plugin Development Guide](https://docs.microsoft.com/en-us/power-apps/developer/data-platform/plug-ins)
- [GitHub Repository](https://github.com/phuocle/Dynamics-Crm-DevKit)

---

## Notes

- **4 Images Support:** Unique feature supporting up to 4 images (PreImage, PostImage, Image3, Image4)
- **Managed Identity:** Full support with automatic certificate signing
- **Batch Processing:** Automatically batches 50 operations per request for performance
- **Fast Deployment:** `/onlyupdateassembly:yes` updates assembly without re-registering steps
- **NuGet Support:** Can deploy from `.nupkg` files for package-based deployments
- **Step ID Tracking:** Using `Id` property ensures idempotent deployments
- **Multiple Source Types:** Supports Database, Disk, AzureWebApp, FileStore
- **Unregister Support:** Set `Unregister = true` to remove plugin steps
- **RunAs Impersonation:** Support for user impersonation with `RunAs` property
