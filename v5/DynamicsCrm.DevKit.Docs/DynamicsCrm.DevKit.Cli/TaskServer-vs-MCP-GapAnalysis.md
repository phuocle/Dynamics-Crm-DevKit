# TaskServer.cs vs MCP Tools — Gap Analysis

> **Goal**: Compare what `TaskServer.cs` knows/does with what the 4 MCP tools (`get_plugins`, `get_custom_apis`, `get_messages`, `get_workflows`) expose — and identify missing capabilities.

---

## 1. Executive Summary

`TaskServer.cs` is the **deployment engine** — it reads .NET assemblies, extracts `CrmPluginRegistrationAttribute` metadata, and registers/updates/unregisters everything in Dataverse. It has deep knowledge of **6 plugin types**, **3 deployment formats**, **managed identity**, **code signing**, **NuGet packages**, and the full step/image/secure-config lifecycle.

The 4 MCP tools are **read-only inspection tools**. They query Dataverse to report what's already registered. The gap analysis below reveals what data/concepts TaskServer understands that the MCP tools cannot currently surface.

---

## 2. PluginType Coverage

`TaskServer.cs` handles **6 PluginTypes** (from `CrmPluginRegistrationAttribute`):

| PluginType | TaskServer | get_plugins | get_custom_apis | get_messages | get_workflows |
|---|:---:|:---:|:---:|:---:|:---:|
| **Plugin** (0) | ✅ Full deploy | ✅ Steps + images | ❌ | ✅ Counts steps | ❌ |
| **Workflow** (1) | ✅ Full deploy | ⚠️ Detects via `workflowactivitygroupname` | ❌ | ❌ | ✅ Classic workflows (category=0) |
| **CustomAction** (2) | ✅ Full deploy | ✅ Shown as steps | ❌ | ✅ Detail + params | ❌ |
| **DataProvider** (3) | ✅ Full deploy + DataSource | ❌ **MISSING** | ❌ | ❌ | ❌ |
| **CustomApi** (4) | ✅ Bind plugintypeid | ⚠️ Steps only | ✅ Full detail | ❌ | ❌ |
| **DataSource** (5) | ✅ entitydataprovider | ❌ **MISSING** | ❌ | ❌ | ❌ |

> [!WARNING]
> **DataProvider & DataSource** — `TaskServer` registers `entitydataprovider` records linking Retrieve/RetrieveMultiple/Create/Update/Delete plugin types to virtual table data sources. **No MCP tool surfaces this data at all.**

---

## 3. Detailed Gaps per MCP Tool

### 3.1 `get_plugins` — Gaps

| Feature in TaskServer | Status in get_plugins | Notes |
|---|---|---|
| **Plugin Assembly** (pluginassembly) | ✅ Listed | name, version, isolationMode, sourceType, isManaged, managedIdentityId |
| **Plugin Type** (plugintype) | ✅ Listed | typename, name, friendlyname, description, workflowactivitygroupname |
| **Plugin Step** (sdkmessageprocessingstep) | ✅ Listed | All key fields |
| **Plugin Image** (sdkmessageprocessingstepimage) | ✅ Listed | name, entityalias, attributes, imagetype |
| **Secure Configuration** content | ⚠️ Partial | Exposes `sdkmessageprocessingstepsecureconfigid` but NOT the actual `secureconfig` value |
| **Unsecure Configuration** | ✅ Via `include_config` | `configuration` field |
| **IsolationMode: External (3)** | ✅ Mapped | Map includes value 3 |
| **SourceType: FileStore (4)** | ✅ Mapped | Map includes value 4 |
| **Step `supporteddeployment`** (Server/Offline/Both) | ❌ **MISSING** | TaskServer sets this from `attribute.Server` + `attribute.Offline` |
| **Step `asyncautodelete`** | ✅ Exposed | |
| **Step `description`** | ✅ Exposed | |
| **Step `impersonatinguserid`** | ✅ Exposed | |
| **Plugin Package** (pluginpackage) | ❌ **MISSING** | TaskServer deploys NuGet packages as `pluginpackage` entity. get_plugins has NO concept of plugin packages |
| **Managed Identity** binding | ⚠️ Partial | Shows `hasManagedIdentity` boolean, but NOT the `managedidentity` record details (TenantId, ApplicationId, CredentialSource, Version) |
| **Code Signing** status | ❌ **MISSING** | TaskServer signs DLLs with certificates. MCP has no visibility |
| **DataProvider plugintype** | ❌ **MISSING** | No awareness DataProvider types exist |
| **Unregister** capability | ❌ **MISSING** | TaskServer can unregister plugin types. get_plugins is read-only |
| **Step Activate/Deactivate** state changes | ❌ **MISSING** | TaskServer toggles statecode/statuscode. get_plugins only reads |
| **Filtering by PluginType** (Plugin vs Workflow vs CustomAction vs DataProvider) | ❌ **MISSING** | get_plugins shows `isWorkflow` boolean but cannot filter/show CustomAction vs Plugin vs DataProvider |
| **Step `Id` for idempotent matching** | ❌ **MISSING** | TaskServer supports `attribute.Id` for deterministic step GUIDs. get_plugins doesn't expose this concept |

### 3.2 `get_custom_apis` — Gaps

| Feature in TaskServer | Status in get_custom_apis | Notes |
|---|---|---|
| **Custom API definition** | ✅ Full detail | uniquename, bindingtype, boundentity, isfunction, isprivate, processingtype |
| **Request Parameters** | ✅ Listed | name, type, isoptional, logicalentityname, description |
| **Response Properties** | ✅ Listed | name, type, logicalentityname, description |
| **Plugin binding** (plugintypeid) | ✅ Shown | Which plugin type is bound |
| **Custom API → Plugin Assembly** relationship | ❌ **MISSING** | TaskServer resolves plugintypeid → pluginassemblyid. get_custom_apis only shows plugintypeid name |
| **Activate/Deactivate plugin binding** | ❌ **MISSING** | TaskServer can set `plugintypeid = null` to deactivate. get_custom_apis is read-only |
| **Solution context** | ⚠️ Partial | Shows solutionId but TaskServer deploys with `SolutionUniqueName` parameter |
| **isManaged filter** | ✅ Has `include_microsoft` | |

### 3.3 `get_messages` — Gaps

| Feature in TaskServer | Status in get_messages | Notes |
|---|---|---|
| **SDK Messages list** | ✅ Full list | Entity-scoped or global |
| **Custom Actions (workflow category=3)** | ✅ Detail with params | Input/output parameters from XAML |
| **SDK Message Filters** (sdkmessagefilter) | ✅ Lists supported entities | primaryobjecttypecode |
| **SdkMessageFilter ID resolution** | ❌ **MISSING** | TaskServer resolves `sdkmessagefilterid` for each entity+message combination. get_messages only shows primaryobjecttypecode strings |
| **ObjectTypeCode mapping** | ❌ **MISSING** | TaskServer has `_ObjectTypeCodesCache` mapping entity names → OTC numbers. get_messages uses `RetrieveEntityRequest` one-at-a-time |
| **Plugin step count per message** | ✅ Counted | |
| **SDK Message pair → Request/Response fields** | ⚠️ Partial | Attempts but falls back to XAML parsing for Custom Actions |

### 3.4 `get_workflows` — Gaps

> [!NOTE]
> `get_workflows` covers **classic workflows** (category=0), which is a different concept from `TaskServer`'s handling of **Workflow Activities** (PluginType.Workflow = custom code extending `CodeActivity`). These are related but distinct.

| Feature in TaskServer | Status in get_workflows | Notes |
|---|---|---|
| **Classic Workflow definitions** | ✅ Full detail | Triggers, mode, scope, stages |
| **Workflow Activity deployment** (PluginType.Workflow) | ❌ **NOT APPLICABLE** | get_workflows lists workflow definitions, NOT custom workflow activity code |
| **Workflow Activity group name** | ❌ **MISSING** | TaskServer manages `workflowactivitygroupname` on plugintype. get_workflows doesn't show workflow activities |
| **Workflow rejected from NuGet packages** | ❌ **MISSING** | TaskServer validates workflow types are NOT in .nupkg. No MCP tool surfaces this constraint |

---

## 4. Deployment-Only Concepts (No MCP Equivalent)

These are **core TaskServer capabilities** that have **zero MCP coverage**:

| Concept | TaskServer Location | Description |
|---|---|---|
| **Plugin Packages** (pluginpackage) | `DeployPackageAsync()` L197-305 | NuGet-based deployment, version tracking, content comparison |
| **Entity Data Provider** (entitydataprovider) | `RegisterDataProviderAsync()` L1088-1182 | Maps plugin types to virtual table CRUD operations |
| **Data Source validation** | `IsValidDataProviderAsync()` L1045-1087 | Validates data source exists and events are unique |
| **Code Signing** | `CodeSigner.SignDllAsync/SignNugetAsync` | PFX certificate-based signing for managed identity |
| **Managed Identity** (managedidentity) | `DeployManagedIdentityAsync()` L484-541 | TenantId, ApplicationId, CredentialSource registration |
| **Assembly content comparison** | `Helper.IsEqualsContent()` | Base64 diff to skip unchanged assemblies |
| **Assembly reflection** | `GetTypes()`, `LoadAssemblyIntoCache()` | Extracts types and attributes from .NET assemblies |
| **Supported deployment mode** | `attribute.Server/Offline` | Server-only, Offline-only, or Both |
| **Secure config lifecycle** | L1422-1521 | Create/update/delete secure configurations |
| **Type validation against CDS** | `IsValidTypesWithCDSAsync()` L1866-1899 | Prevents deploying when registered types are missing |

---

## 5. Data That MCP Tools COULD Expose

> [!IMPORTANT]
> These are **read-only queries** that could enhance MCP tools without any deployment capability:

### Priority 1 — High Impact, Easy

| Enhancement | Target Tool | Effort |
|---|---|---|
| **Plugin Packages** listing (`pluginpackage` entity) | `get_plugins` | Low — simple FetchXml query |
| **Supported Deployment** (Server/Offline/Both) on steps | `get_plugins` | Low — add `supporteddeployment` attribute to step query |
| **PluginType classification** (Plugin vs CustomAction vs DataProvider vs Workflow vs CustomApi) | `get_plugins` | Medium — need to cross-reference with customapi/entitydataprovider |
| **Secure Config value** (full text, not just ID) | `get_plugins` | Low — join to `sdkmessageprocessingstepsecureconfig`, gated behind `include_config=true` |

### Priority 2 — Medium Impact

| Enhancement | Target Tool | Effort |
|---|---|---|
| **Entity Data Provider** listing | New tool or `get_plugins` | Medium — query `entitydataprovider` entity |
| **Managed Identity details** (tenantId, applicationIds) | `get_plugins` | Medium — join to `managedidentity` entity |
| **Custom API → Assembly** relationship | `get_custom_apis` | Low — follow `plugintypeid` → `pluginassemblyid` |
| **Workflow Activity types** vs classic workflows | `get_plugins` or `get_workflows` | Medium — distinguish PluginType.Workflow from category=0 workflows |

### Priority 3 — Nice to Have

| Enhancement | Target Tool | Effort |
|---|---|---|
| **Virtual table CRUD support** check | New tool | Medium — query org capabilities + entitydataprovider |
| **SdkMessageFilter IDs** in detail view | `get_messages` | Low — return filter IDs for plugin registration guidance |
| **Content hash** for unchanged assembly detection | `get_plugins` | Low — expose assembly content hash |

---

## 6. Summary Table

| Category | TaskServer Concepts | MCP Coverage | Gap Level |
|---|:---:|:---:|:---:|
| Plugin Assembly | 11 fields | 8 fields | 🟡 Minor |
| Plugin Type | 6 fields | 5 fields | 🟢 Good |
| Plugin Step | 14 fields | 12 fields | 🟡 Minor (missing supporteddeployment) |
| Plugin Image | 6 fields | 5 fields | 🟢 Good |
| Secure Config | Full CRUD | ID only | 🟠 Moderate |
| Plugin Package | Full CRUD | ❌ None | 🔴 **Critical** |
| Managed Identity | Full CRUD | Boolean only | 🔴 **Critical** |
| Entity Data Provider | Full CRUD | ❌ None | 🔴 **Critical** |
| Data Source | Full validation | ❌ None | 🔴 **Critical** |
| Code Signing | Full lifecycle | ❌ None | 🟡 Minor (deployment-only) |
| PluginType classification | 6 types | 2 types (Plugin/Workflow) | 🟠 Moderate |
| Step Activate/Deactivate | Full | Read-only | 🟡 Minor (by design) |
