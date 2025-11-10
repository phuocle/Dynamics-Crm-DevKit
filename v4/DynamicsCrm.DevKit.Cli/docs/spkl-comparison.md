# spkl vs DynamicsCrm.DevKit.Cli - Complete Project Comparison

## Executive Summary

After comprehensive analysis of both entire projects, this document compares **spkl** (by Scott Durow) and **DynamicsCrm.DevKit.Cli** for Dynamics 365/Dataverse deployment and development.

---

## 1. Tool Overview

| Characteristic | spkl | DynamicsCrm.DevKit.Cli |
|---------------|------|------------------------|
| **Repository** | [scottdurow/SparkleXrm](https://github.com/scottdurow/SparkleXrm) | [phuocle/Dynamics-Crm-DevKit](https://github.com/phuocle/Dynamics-Crm-DevKit) |
| **Latest Release** | v1.0.440 (Jan 30, 2021) | v4 (Active Development) |
| **License** | MIT | MIT |
| **Technology** | .NET Framework | Modern .NET |
| **NuGet Package** | spkl | DynamicsCrm.DevKit.Cli |

---

## 2. Complete Feature Matrix

### 2.1 Plugin & Workflow Deployment (TaskServer.cs)

| Feature | spkl | DevKit.Cli |
|---------|------|-----------|
| Plugin Registration |  |  |
| Workflow Registration |  |  |
| Step Images | 2 images max | **4 images** (Image1-4) |
| Image Alias |  |  Separate properties |
| Managed Identity |  |  |
| Custom API |  |  |
| Data Provider |  |  |
| Batch Processing |  |  50 per batch |
| Assembly Signing |  |  |
| Source Type | Database only |  Database/Disk/AzureWebApp/FileStore |
| RunAs Support |  |  |
| Unregister Support |  |  |

**Winner: DynamicsCrm.DevKit.Cli** - Advanced plugin features (4 images, Managed Identity, Custom API, Data Provider)

---

### 2.2 Web Resource Deployment

| Feature | spkl | DevKit.Cli (TaskWebResource.cs) |
|---------|------|-------------------------------|
| HTML/CSS/JS Deployment |  |  |
| Image Deployment (PNG/GIF/JPG/ICO/SVG) |  |  |
| XML/XSL/XSLT |  |  |
| RESX/XAP |  |  |
| Dependency Management |  |  Enhanced with XML generation |
| File Pattern Include/Exclude |  |  |
| TypeScript Support |  |  |
| Language Code Support |  |  RESX multi-language |
| Entity Token Replacement |  |  [entity] pattern |
| Download Web Resources |  |  TaskDownloadWebResource.cs |
| Dependency Requirements | Any version |  Version detection (v9.0+) |
| Publish After Deploy |  |  Batch publish |

**Winner: DynamicsCrm.DevKit.Cli** - Enhanced dependency management + download capability

---

### 2.3 Early-Bound & Code Generation

| Feature | spkl | DevKit.Cli |
|---------|------|-----------|
| **Proxy Type Generation** |  CrmSvcUtil |  TaskProxyType.cs (CrmSvcUtil) |
| Entity Filtering |  |  |
| Custom Namespace |  |  |
| Interactive Login |  |  |
| **JS Form Code Generation** |  |  TaskGenerator.cs (JsForm) |
| **JS WebAPI Code Generation** |  |  TaskGenerator.cs (JsWebApi) |
| **C# Late-Bound Generation** |  |  TaskGenerator.cs (CSharp) |
| **TypeScript Definitions** |  |  Auto-generate .d.ts files |
| Entity Metadata Caching |  |  |
| Form XML Processing |  |  |

**Winner: DynamicsCrm.DevKit.Cli** - Far more code generation capabilities (JavaScript, TypeScript, Late-Bound)

---

### 2.4 Solution Packaging

| Feature | spkl | DevKit.Cli (TaskSolutionPackager.cs) |
|---------|------|-------------------------------------|
| Extract Solution |  |  |
| Pack Solution |  |  |
| Managed Support |  |  |
| Unmanaged Support |  |  |
| Both in One Operation |  |  Extract/Pack both at once |
| Export from Instance | Manual |  Automatic before extract |
| Version Formatting | Basic |  Auto-format (SolutionName_1.0.0000.0.zip) |
| Map File Support |  |  |
| Logging |  |  Comprehensive |

**Winner: DynamicsCrm.DevKit.Cli** - Direct instance export + both managed/unmanaged in single operation

---

### 2.5 Report Management

| Feature | spkl | DevKit.Cli |
|---------|------|-----------|
| Upload Reports |  |  TaskUploadReport.cs |
| Download Reports |  |  TaskDownloadReport.cs |
| Multi-Language Reports |  |  Language folder support |
| RDL File Support |  |  |
| Report Duplicate Detection |  |  |
| Solution-based Filtering |  |  |

**Winner: DynamicsCrm.DevKit.Cli** - Only tool with report management

---

### 2.6 Data Source Management

| Feature | spkl | DevKit.Cli (TaskDataSource.cs) |
|---------|------|-------------------------------|
| Create Virtual Entities |  |  |
| Data Provider Integration |  |  |
| Custom Entity Metadata |  |  |
| External Name Mapping |  |  |
| Entity Name Validation |  |  Regex validation |
| Solution Integration |  |  Auto-add to solution |

**Winner: DynamicsCrm.DevKit.Cli** - Only tool with virtual entity/data source management

---

## 3. Task Files Breakdown - DynamicsCrm.DevKit.Cli

| Task File | Purpose | Key Features |
|-----------|---------|--------------|
| **TaskServer.cs** | Plugin/Workflow Deployment | 4 images, Managed Identity, Custom API, Data Provider, Batch processing |
| **TaskWebResource.cs** | Web Resource Deployment | Dependency management, Pattern matching, Publish, 15+ file types |
| **TaskDownloadWebResource.cs** | Download Web Resources | Download from solution, Preserve folder structure |
| **TaskProxyType.cs** | Early-Bound Generation | CrmSvcUtil integration, Entity filtering, Interactive login |
| **TaskGenerator.cs** | Code Generation | JsForm, JsWebApi, CSharp late-bound, TypeScript .d.ts |
| **TaskSolutionPackager.cs** | Solution Packaging | Extract/Pack, Export from instance, Both managed/unmanaged |
| **TaskUploadReport.cs** | Report Upload | Multi-language RDL, Solution integration |
| **TaskDownloadReport.cs** | Report Download | Multi-language, Duplicate detection |
| **TaskDataSource.cs** | Virtual Entity Creation | Data provider registration, External mapping |

---

## 4. CrmPluginRegistrationAttribute - Property Comparison

### Properties in Both Tools

| Property | spkl | DevKit.Cli | Notes |
|----------|------|-----------|-------|
| Message |  |  | SDK message name |
| EntityLogicalName |  |  | Target entity |
| Stage |  |  | PreValidation/PreOperation/PostOperation |
| ExecutionMode |  |  | Sync/Async |
| FilteringAttributes |  |  | Attribute filters |
| ExecutionOrder |  |  | Step order |
| Name |  |  | Step name |
| Description |  |  | Description |
| UnSecureConfiguration |  |  | Config string |
| SecureConfiguration |  |  | Secure config |
| IsolationMode |  |  | Sandbox/None |
| DeleteAsyncOperation |  |  | Auto-delete jobs |
| Offline |  |  | Offline execution |
| Server |  |  | Server execution |

### spkl Exclusive Properties

| Property | Purpose |
|----------|---------|
| **Id** | Step ID tracking for idempotent deployments |

### DevKit.Cli Exclusive Properties

| Property | Purpose |
|----------|---------|
| **Unregister** | Unregister plugin step |
| **RunAs** | Impersonate user GUID |
| **SourceType** | Database/Disk/AzureWebApp/FileStore |
| **Image1Alias** - **Image4Alias** | Separate alias properties (4 images) |
| **Image3Type/Name/Attributes** | Third image support |
| **Image4Type/Name/Attributes** | Fourth image support |
| **PluginType** | Plugin/Workflow/CustomAction/DataProvider/CustomApi |
| **DataSource** | Data provider data source name |

---

## 5. Tool Comparison Summary

### spkl Strengths
1.  Mature, stable, well-tested tool (since 2016)
2.  Large community support and documentation
3.  **Id property** for idempotent deployments
4.  **Instrument command** for attribute generation from existing steps
5.  Simple configuration and setup
6.  Well-established patterns

### DynamicsCrm.DevKit.Cli Strengths
1.  **Modern .NET** (Active development)
2.  **9 Task Types** vs spkl's 5-6 features
3.  **4 Images** vs spkl's 2
4.  **Managed Identity, Custom API, Data Provider** support
5.  **Report Management** (upload/download)
6.  **Virtual Entity/Data Source** management
7.  **Advanced Code Generation** (JS Form, JS WebAPI, TypeScript)
8.  **Batch Processing** and async/await patterns
9.  **Download capabilities** (web resources, reports)
10.  **Both managed/unmanaged** solution operations in one task

---

## 6. Feature Gap Analysis

### What spkl has that DevKit.Cli lacks:
1.  **Id property** - Critical for tracking plugin step IDs across deployments
2.  **Instrument command** - Generate attributes from existing registered plugins
3.  Longer track record and community support

### What DevKit.Cli has that spkl lacks:
1.  **Report Management** (upload/download)
2.  **Virtual Entity/Data Source** management
3.  **4 Images** instead of 2
4.  **Managed Identity** support
5.  **Custom API** support
6.  **Data Provider** support
7.  **Download Web Resources** from instance
8.  **JavaScript/TypeScript** code generation
9.  **Export solutions** directly from instance before packaging
10.  **Entity token replacement** in web resource dependencies

---

## 7. Recommendation

### Choose **spkl** if:
-  You need the **instrument command** to generate attributes from existing steps
-  You need **step ID tracking** (Id property) for idempotent deployments
-  You want a mature, battle-tested tool with large community
-  You only need plugins, workflows, web resources, early-bound

### Choose **DynamicsCrm.DevKit.Cli** if:
-  You need **modern features** (Managed Identity, Custom API, Data Provider)
-  You need **report management** capabilities
-  You need **virtual entity/data source** creation
-  You need **4 images** per plugin step
-  You need **JavaScript/TypeScript** code generation
-  You want **comprehensive tooling** (9 task types)
-  You need **download capabilities** (web resources, reports)
-  You prefer **modern .NET** and active development

---

## 8. Conclusion

**DynamicsCrm.DevKit.Cli is the more feature-rich and modern tool** with 9 task types covering far more scenarios than spkl. However, **spkl has two critical features** (Id property + instrument command) that DevKit.Cli should implement for full parity.

### Overall Winner: **DynamicsCrm.DevKit.Cli** (with noted gaps)

**Superiority Score:**
- **Features**: DevKit.Cli wins (9 tasks vs 5-6 features)
- **Modernity**: DevKit.Cli wins (modern .NET, active development)
- **Plugin Capabilities**: DevKit.Cli wins (4 images, Managed Identity, Custom API)
- **Code Generation**: DevKit.Cli wins significantly (3 types vs 1)
- **Report Management**: DevKit.Cli wins (spkl has none)
- **Solution Management**: DevKit.Cli wins (direct instance export)
- **Maturity**: spkl wins (longer track record)
- **Critical Features**: spkl wins (Id property + instrument command)

**Recommendation**: Use **DynamicsCrm.DevKit.Cli** for new projects, but request the Id property and instrument command features for full parity with spkl.

---

Generated: 2025-11-10 08:08:56
