# Migration Guide: spkl  DynamicsCrm.DevKit.Cli

## Overview

This guide helps teams migrate from **spkl** to **DynamicsCrm.DevKit.Cli** with comprehensive step-by-step instructions for all 9 task types.

---

## Prerequisites

### Install DynamicsCrm.DevKit.Cli

```powershell
# Install via NuGet
dotnet tool install --global DynamicsCrm.DevKit.Cli

# Or add to .csproj
<PackageReference Include="DynamicsCrm.DevKit.Cli" Version="*" />
```

### Install Required SDK Tools

```powershell
# Install CoreTools (for CrmSvcUtil and SolutionPackager)
Install-Package Microsoft.CrmSdk.CoreTools
```

---

## Migration Roadmap

### Feature Parity Status

| Feature | spkl | DevKit.Cli | Migration Complexity |
|---------|------|-----------|---------------------|
| Plugin Deployment |  |  |  Medium |
| Workflow Deployment |  |  |  Medium |
| Web Resources |  |  |  Medium-High |
| Early-Bound |  |  |  Easy |
| Solution Packaging |  |  |  Easy |
| Reports |  |  |  Easy (new feature) |
| Data Sources |  |  |  Easy (new feature) |
| Code Generation | Partial |  |  Easy (new feature) |

---

## Step 1: Plugin & Workflow Migration

### spkl Configuration (spkl.json)

```json
{
  "plugins": [
    {
      "profile": "default",
      "solution": "YourSolution",
      "assemblypath": "bin\\Release\\YourPlugin.dll"
    }
  ]
}
```

### DevKit.Cli Configuration (DynamicsCrm.DevKit.Cli.json)

```json
{
  "solution": "YourSolution",
  "type": "servers",
  "profile": "default",
  "servers": [
    {
      "profile": "default",
      "solution": "YourSolution",
      "folder": "..\\..\\YourProject\\bin\\Release"
    }
  ]
}
```

### Attribute Changes

#### spkl Attribute
```csharp
[CrmPluginRegistration(
    "Update",
    "account",
    StageEnum.PostOperation,
    ExecutionModeEnum.Synchronous,
    "name,address1_city",
    "Account Update",
    1,
    IsolationModeEnum.Sandbox,
    Id = "12345678-1234-1234-1234-123456789012",
    Image1Type = ImageTypeEnum.PreImage,
    Image1Name = "PreImage",
    Image1Attributes = "name,accountnumber"
)]
public class AccountUpdate : IPlugin
{
    // Implementation
}
```

#### DevKit.Cli Attribute
```csharp
[CrmPluginRegistration(
    Message = "Update",
    EntityLogicalName = "account",
    Stage = StageEnum.PostOperation,
    ExecutionMode = ExecutionModeEnum.Synchronous,
    FilteringAttributes = "name,address1_city",
    Name = "Account Update",
    ExecutionOrder = 1,
    IsolationMode = IsolationModeEnum.Sandbox,
    // NOTE: DevKit.Cli doesn't have Id property yet - feature gap!
    Image1Type = ImageTypeEnum.PreImage,
    Image1Name = "PreImage",
    Image1Alias = "PreImage", // Separate alias property
    Image1Attributes = "name,accountnumber"
)]
public class AccountUpdate : IPlugin
{
    // Implementation
}
```

### Key Differences

1. **Image Alias**: DevKit.Cli has separate Image1Alias through Image4Alias properties
2. **4 Images Support**: DevKit.Cli supports Image3 and Image4
3. **No Id Property**: DevKit.Cli doesn't have step ID tracking yet (feature request needed)
4. **New Properties**: Unregister, RunAs, SourceType, PluginType, DataSource

### Deploy Plugins

```powershell
# DevKit.Cli command
DynamicsCrm.DevKit.Cli /conn:"YourConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:servers /profile:default
```

---

## Step 2: Web Resource Migration

### spkl Configuration

```json
{
  "webresources": [
    {
      "profile": "default",
      "solution": "YourSolution",
      "root": "WebResources",
      "files": [
        {
          "uniquename": "prefix_/js/**/*.js",
          "file": "**/*.js"
        }
      ]
    }
  ]
}
```

### DevKit.Cli Configuration

```json
{
  "solution": "YourSolution",
  "type": "webresources",
  "webresources": [
    {
      "profile": "default",
      "solution": "YourSolution",
      "rootfolder": "WebResources",
      "includefiles": [
        "**/*.js",
        "**/*.html",
        "**/*.css",
        "**/*.png"
      ],
      "excludefiles": [
        "**/*.min.js"
      ],
      "dependencies": [
        {
          "webresources": ["prefix_/js/[entity].form.js"],
          "dependencies": ["prefix_/js/common.js", "prefix_/js/[entity].webapi.js"]
        }
      ]
    }
  ]
}
```

### Deploy Web Resources

```powershell
DynamicsCrm.DevKit.Cli /conn:"YourConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:webresources /profile:default
```

### Download Web Resources

```powershell
# New feature not in spkl!
DynamicsCrm.DevKit.Cli /conn:"YourConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:downloadwebresources /profile:default
```

---

## Step 3: Early-Bound Class Migration

### spkl Configuration

```json
{
  "crmsvcutil": [
    {
      "profile": "default",
      "namespace": "YourNamespace.Entities",
      "out": "Entities.cs",
      "entities": "account,contact,lead"
    }
  ]
}
```

### DevKit.Cli Configuration

```json
{
  "solution": "YourSolution",
  "type": "proxytypes",
  "proxytypes": [
    {
      "profile": "default",
      "namespace": "YourNamespace.Entities",
      "output": "Entities.cs",
      "entities": "account,contact,lead"
    }
  ]
}
```

### Generate Early-Bound

```powershell
DynamicsCrm.DevKit.Cli /conn:"YourConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:proxytypes /profile:default
```

---

## Step 4: Solution Packaging Migration

### spkl Configuration

```json
{
  "solutions": [
    {
      "profile": "default",
      "solution_uniquename": "YourSolution",
      "packagetype": "Both",
      "increment_on_import": false
    }
  ]
}
```

### DevKit.Cli Configuration

```json
{
  "solution": "YourSolution",
  "type": "solutionpackagers",
  "solutionpackagers": [
    {
      "profile": "default",
      "solution": "YourSolution",
      "type": "Extract",
      "solutiontype": "Both",
      "folder": "Solutions",
      "mapfile": "map.xml"
    }
  ]
}
```

### Extract Solution

```powershell
# DevKit.Cli automatically exports from instance before extraction!
DynamicsCrm.DevKit.Cli /conn:"YourConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:solutionpackagers /profile:default
```

---

## Step 5: NEW FEATURES - Code Generation

### JavaScript Form Code Generation

```json
{
  "solution": "YourSolution",
  "type": "generators",
  "generators": [
    {
      "profile": "jsform",
      "type": "JsForm",
      "rootnamespace": "YourNamespace",
      "rootfolder": "WebResources/js",
      "entities": "account,contact"
    }
  ]
}
```

```powershell
DynamicsCrm.DevKit.Cli /conn:"YourConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:generators /profile:jsform
```

### JavaScript WebAPI Code Generation

```json
{
  "generators": [
    {
      "profile": "jswebapi",
      "type": "JsWebApi",
      "rootnamespace": "YourNamespace",
      "rootfolder": "WebResources/js",
      "entities": "account,contact"
    }
  ]
}
```

### C# Late-Bound Code Generation

```json
{
  "generators": [
    {
      "profile": "csharp",
      "type": "CSharp",
      "rootnamespace": "YourNamespace.Entities",
      "rootfolder": "Entities",
      "entities": "account,contact"
    }
  ]
}
```

---

## Step 6: NEW FEATURES - Report Management

### Upload Reports

```json
{
  "solution": "YourSolution",
  "type": "uploadreports",
  "uploadreports": [
    {
      "profile": "default",
      "solution": "YourSolution",
      "languages": ["1033", "1036"]
    }
  ]
}
```

Folder structure:
```
YourSolution/
  1033/
    Report1.rdl
    Report2.rdl
  1036/
    Report1.rdl
    Report2.rdl
```

```powershell
DynamicsCrm.DevKit.Cli /conn:"YourConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:uploadreports /profile:default
```

### Download Reports

```json
{
  "downloadreports": [
    {
      "profile": "default",
      "solution": "YourSolution"
    }
  ]
}
```

```powershell
DynamicsCrm.DevKit.Cli /conn:"YourConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:downloadreports /profile:default
```

---

## Step 7: NEW FEATURES - Virtual Entity / Data Source

### Create Data Source

```json
{
  "solution": "YourSolution",
  "type": "datasources",
  "datasources": [
    {
      "profile": "default",
      "solution": "YourSolution",
      "name": "CustomDataSource",
      "displayname": "Custom Data Source",
      "pluralname": "Custom Data Sources"
    }
  ]
}
```

```powershell
DynamicsCrm.DevKit.Cli /conn:"YourConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:datasources /profile:default
```

---

## Critical Feature Gaps to Address

### 1. Missing Id Property

**spkl has** step ID tracking:
```csharp
Id = "12345678-1234-1234-1234-123456789012"
```

**DevKit.Cli lacks** this - **FEATURE REQUEST NEEDED!**

**Workaround**: Manual step tracking or database queries

### 2. Missing Instrument Command

**spkl has** instrument command to generate attributes from existing registrations:
```powershell
spkl instrument /url:YourOrgUrl /solution:YourSolution
```

**DevKit.Cli lacks** this - **FEATURE REQUEST NEEDED!**

**Workaround**: Manually add attributes to existing plugins

---

## Migration Checklist

- [ ] Install DynamicsCrm.DevKit.Cli
- [ ] Install Microsoft.CrmSdk.CoreTools
- [ ] Create DynamicsCrm.DevKit.Cli.json
- [ ] Migrate plugin attributes (add Image aliases)
- [ ] Update to 4 images if needed
- [ ] Test plugin deployment
- [ ] Migrate web resource configuration
- [ ] Test web resource deployment
- [ ] Migrate early-bound generation
- [ ] Migrate solution packaging
- [ ] (Optional) Add JavaScript code generation
- [ ] (Optional) Add report management
- [ ] (Optional) Add virtual entity/data source creation
- [ ] Update CI/CD pipelines
- [ ] Document Id property workaround
- [ ] Request Id property feature from DevKit team

---

## CI/CD Pipeline Migration

### spkl CI/CD

```yaml
- task: PowerShell@2
  inputs:
    targetType: 'inline'
    script: |
      spkl /deploy /conn:"" /json:"spkl.json"
```

### DevKit.Cli CI/CD

```yaml
- task: PowerShell@2
  inputs:
    targetType: 'inline'
    script: |
      DynamicsCrm.DevKit.Cli /conn:"" /json:"DynamicsCrm.DevKit.Cli.json" /type:servers /profile:
      DynamicsCrm.DevKit.Cli /conn:"" /json:"DynamicsCrm.DevKit.Cli.json" /type:webresources /profile:
      DynamicsCrm.DevKit.Cli /conn:"" /json:"DynamicsCrm.DevKit.Cli.json" /type:uploadreports /profile:
```

---

## Benefits After Migration

 **4 images** instead of 2
 **Managed Identity** support
 **Custom API** support
 **Data Provider** support  
 **Report management** (upload/download)
 **Virtual entity creation**
 **JavaScript/TypeScript** code generation
 **Download capabilities** (web resources, reports)
 **Direct solution export** from instance
 **Modern .NET** and active development

---

## Support

- GitHub Issues: https://github.com/phuocle/Dynamics-Crm-DevKit/issues
- Documentation: Check repository wiki

---

Generated: 2025-11-10 08:10:01
