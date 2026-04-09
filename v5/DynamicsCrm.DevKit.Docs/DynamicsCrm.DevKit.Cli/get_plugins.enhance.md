# Enhancement Spec: `get_plugins` MCP Tool

> **Source**: [GetPluginsTool.cs](file:///d:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Cli/Mcp/Tools/GetPluginsTool.cs)
> **Models**: [StructuredResults.cs](file:///d:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Cli/Mcp/Tools/Models/StructuredResults.cs) (lines 875–1048)
> **Reference**: [TaskServer.cs](file:///d:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Cli/Tasks/TaskServer.cs) — the deployment engine that knows all these concepts

---

## Enhancement 1: Return Secure Config VALUE (not just ID)

### Current Behavior

When `include_config=true`, the tool returns:
- `UnsecureConfig` → the actual `configuration` text value ✅
- `SecureConfigId` → **only the GUID** of `sdkmessageprocessingstepsecureconfigid` ❌

**Code location** — `GetPluginsTool.cs` line 710–715:
```csharp
if (includeConfig)
{
    entry.UnsecureConfig = NullIfEmpty(e.GetAttributeValue<string>("configuration"));
    var secureRef = e.GetAttributeValue<EntityReference>("sdkmessageprocessingstepsecureconfigid");
    entry.SecureConfigId = secureRef?.Id.ToString();
}
```

### Required Change

When `include_config=true`, join to `sdkmessageprocessingstepsecureconfig` entity and return the actual `secureconfig` text value.

#### Step A: Update FetchXml in `GetSteps()` method (line 479–481)

Current:
```csharp
var configAttributes = includeConfig
    ? "\n    <attribute name='configuration'/>\n    <attribute name='sdkmessageprocessingstepsecureconfigid'/>"
    : "";
```

Change to add a `link-entity` join:
```csharp
var configAttributes = includeConfig
    ? "\n    <attribute name='configuration'/>\n    <attribute name='sdkmessageprocessingstepsecureconfigid'/>"
    : "";

var secureConfigJoin = includeConfig
    ? @"
    <link-entity name='sdkmessageprocessingstepsecureconfig' from='sdkmessageprocessingstepsecureconfigid' to='sdkmessageprocessingstepsecureconfigid' link-type='outer' alias='sc'>
      <attribute name='secureconfig'/>
    </link-entity>"
    : "";
```

Then insert `{secureConfigJoin}` in the FetchXml string after the `sdkmessagefilter` link-entity (line 509ish).

#### Step B: Update `MapStepEntry()` method (line 710–715)

```csharp
if (includeConfig)
{
    entry.UnsecureConfig = NullIfEmpty(e.GetAttributeValue<string>("configuration"));
    var secureRef = e.GetAttributeValue<EntityReference>("sdkmessageprocessingstepsecureconfigid");
    entry.SecureConfigId = secureRef?.Id.ToString();
    // NEW: get the actual secure config text value
    entry.SecureConfig = NullIfEmpty(GetAliasedString(e, "sc.secureconfig"));
}
```

#### Step C: Update `PluginStepEntry` model in `StructuredResults.cs` (after line 992)

Add new property:
```csharp
[JsonPropertyName("secureConfig")]
[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
public string SecureConfig { get; set; }
```

#### Step D: Update text output

In `GetAssemblyDetail()` (around line 332) and `GetStepsByEntity()` (around line 399), when outputting the tab-separated step lines, add `secureConfig` and `unsecureConfig` columns **only when** `include_config=true`.

---

## Enhancement 2: Return `supporteddeployment` on Steps

### Current Behavior

The step FetchXml does NOT request `supporteddeployment` attribute. This field tells whether the step runs on Server, Offline, or Both.

### Dataverse Schema

Entity: `sdkmessageprocessingstep`
Attribute: `supporteddeployment` (OptionSetValue)

| Value | Label |
|---|---|
| 0 | Server Only |
| 1 | Microsoft Dynamics 365 Client for Outlook Only |
| 2 | Both |

### Required Change

#### Step A: Add static map in `GetPluginsTool.cs` (after line 64)

```csharp
private static readonly Dictionary<int, string> SupportedDeploymentMap = new()
{
    [0] = "ServerOnly",
    [1] = "OfflineOnly",
    [2] = "Both"
};
```

#### Step B: Add attribute to FetchXml in `GetSteps()` (line 483–494)

Add `<attribute name='supporteddeployment'/>` to the `sdkmessageprocessingstep` attributes list (after `description` on line 494).

#### Step C: Update `MapStepEntry()` (line 686–718)

```csharp
var deploymentValue = e.GetAttributeValue<OptionSetValue>("supporteddeployment")?.Value ?? 0;
entry.SupportedDeployment = SupportedDeploymentMap.TryGetValue(deploymentValue, out var dep) ? dep : deploymentValue.ToString();
```

#### Step D: Update `PluginStepEntry` model in `StructuredResults.cs` (after line 1003)

```csharp
[JsonPropertyName("supportedDeployment")]
[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
public string SupportedDeployment { get; set; }
```

#### Step E: Update text output columns

Add `supportedDeployment` column to the tab-separated header and data lines in both `GetAssemblyDetail()` and `GetStepsByEntity()`.

---

## Enhancement 3: Plugin Package Support

### Current Behavior

The tool has **zero** awareness of Plugin Packages (`pluginpackage` entity). This is the NuGet-based deployment format for Dataverse plugins with dependent assemblies.

### Dataverse Schema

Entity: `pluginpackage`

| Attribute | Type | Description |
|---|---|---|
| `pluginpackageid` | Guid | Primary key |
| `name` | String | Package name (prefixed with solution prefix) |
| `version` | String | NuGet package version |
| `content` | String | Base64-encoded .nupkg content (DO NOT return this — too large) |
| `managedidentityid` | EntityReference | Link to managed identity (if applicable) |
| `ismanaged` | Boolean | Is managed |
| `modifiedon` | DateTime | Last modified |

Relationship: A plugin package contains plugin assemblies. The relationship is:
- `pluginpackage` → 1:N → `pluginassembly` (via `pluginassembly.packageid`)

### Required Change

#### Step A: Add new model classes in `StructuredResults.cs`

```csharp
internal sealed class PluginPackageEntry
{
    [JsonPropertyName("packageId")]
    public string PackageId { get; set; }

    [JsonPropertyName("name")]
    public string Name { get; set; }

    [JsonPropertyName("version")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public string Version { get; set; }

    [JsonPropertyName("isManaged")]
    public bool IsManaged { get; set; }

    [JsonPropertyName("hasManagedIdentity")]
    public bool HasManagedIdentity { get; set; }

    [JsonPropertyName("modifiedOn")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public string ModifiedOn { get; set; }

    [JsonPropertyName("assemblies")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public List<string> Assemblies { get; set; }
}
```

#### Step B: Add `Packages` property to `GetPluginsResult`

```csharp
[JsonPropertyName("packages")]
[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
public List<PluginPackageEntry> Packages { get; set; }
```

#### Step C: Add `PackageName` property to `PluginAssemblyEntry`

The assembly list mode should show which package (if any) an assembly belongs to:

```csharp
[JsonPropertyName("packageName")]
[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
public string PackageName { get; set; }
```

#### Step D: Update `GetAssemblyList()` (line 144–201)

In the assembly list FetchXml, add an outer join to `pluginpackage`:

```xml
<link-entity name='pluginpackage' from='pluginpackageid' to='packageid' link-type='outer' alias='pkg'>
  <attribute name='name'/>
  <attribute name='version'/>
</link-entity>
```

Note: the `pluginassembly` entity has a `packageid` field that links to `pluginpackage.pluginpackageid`.

Update `MapAssemblyEntry()` to extract:
```csharp
entry.PackageName = NullIfEmpty(GetAliasedString(e, "pkg.name"));
```

#### Step E: Update `GetAssemblyDetail()` (line 203–352)

When showing detail for a single assembly, if the assembly has a `packageid`, also query the `pluginpackage` entity to show package info.

#### Step F: Add text output for packages

In assembly list mode, add `packageName` column to header:
```
#	name	version	isolationMode	sourceType	typeCount	isManaged	packageName
```

#### Step G: Consider a "packages" sub-mode

When `assembly_name` is empty and no filters are set, the tool could also list all packages alongside assemblies. Or add a simple query for packages at the bottom of the assembly list output:

```csharp
private List<PluginPackageEntry> GetPackages()
{
    var fetchXml = @"<fetch>
  <entity name='pluginpackage'>
    <attribute name='pluginpackageid'/>
    <attribute name='name'/>
    <attribute name='version'/>
    <attribute name='ismanaged'/>
    <attribute name='managedidentityid'/>
    <attribute name='modifiedon'/>
    <filter>
      <condition attribute='ishidden' operator='ne' value='true'/>
    </filter>
    <order attribute='name'/>
  </entity>
</fetch>";
    // ... execute and map
}
```

---

## Enhancement 4: Managed Identity Details

### Current Behavior

`PluginAssemblyEntry` has `HasManagedIdentity` (boolean). This only tells "yes it has one" but NOT what it is.

**Code location** — `MapAssemblyEntry()` line 668:
```csharp
HasManagedIdentity = e.GetAttributeValue<EntityReference>("managedidentityid") != null,
```

### Dataverse Schema

Entity: `managedidentity`

| Attribute | Type | Description |
|---|---|---|
| `managedidentityid` | Guid | Primary key |
| `name` | String | Display name (format: `{AssemblyName}-{ApplicationId}`) |
| `applicationid` | Guid | Entra ID Application (Client) ID |
| `tenantid` | Guid | Entra ID Tenant ID |
| `credentialsource` | OptionSetValue | 2 = Certificate |
| `subjectscope` | OptionSetValue | 1 = Default |
| `version` | Int | 1 = v1 format (uses login.microsoftonline.com issuer) |

Relationship:
- `pluginassembly.managedidentityid` → `managedidentity.managedidentityid`
- `pluginpackage.managedidentityid` → `managedidentity.managedidentityid`

### Required Change

#### Step A: Add model class in `StructuredResults.cs`

```csharp
internal sealed class ManagedIdentityEntry
{
    [JsonPropertyName("managedIdentityId")]
    public string ManagedIdentityId { get; set; }

    [JsonPropertyName("name")]
    public string Name { get; set; }

    [JsonPropertyName("applicationId")]
    public string ApplicationId { get; set; }

    [JsonPropertyName("tenantId")]
    public string TenantId { get; set; }

    [JsonPropertyName("credentialSource")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public string CredentialSource { get; set; }
}
```

#### Step B: Update `PluginAssemblyEntry` model

Replace `HasManagedIdentity` boolean with full object:

```csharp
// Keep boolean for backward compat in list mode
[JsonPropertyName("hasManagedIdentity")]
public bool HasManagedIdentity { get; set; }

// NEW: full details, populated in detail mode
[JsonPropertyName("managedIdentity")]
[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
public ManagedIdentityEntry ManagedIdentity { get; set; }
```

#### Step C: Update assembly FetchXml queries

In both `GetAssemblyList()` (line 146–160) and `GetAssemblyDetail()` (line 206–221), add an outer join:

```xml
<link-entity name='managedidentity' from='managedidentityid' to='managedidentityid' link-type='outer' alias='mi'>
  <attribute name='name'/>
  <attribute name='applicationid'/>
  <attribute name='tenantid'/>
  <attribute name='credentialsource'/>
</link-entity>
```

#### Step D: Update `MapAssemblyEntry()`

```csharp
HasManagedIdentity = e.GetAttributeValue<EntityReference>("managedidentityid") != null,
```

Add after this line:
```csharp
// Populate managed identity detail when available
var miName = NullIfEmpty(GetAliasedString(e, "mi.name"));
if (miName != null)
{
    entry.ManagedIdentity = new ManagedIdentityEntry
    {
        ManagedIdentityId = e.GetAttributeValue<EntityReference>("managedidentityid")?.Id.ToString(),
        Name = miName,
        ApplicationId = GetAliasedValue<Guid?>(e, "mi.applicationid")?.ToString(),
        TenantId = GetAliasedValue<Guid?>(e, "mi.tenantid")?.ToString(),
        CredentialSource = GetAliasedValue<int?>(e, "mi.credentialsource") == 2 ? "Certificate" : GetAliasedValue<int?>(e, "mi.credentialsource")?.ToString()
    };
}
```

Note: You may need a helper `GetAliasedValue<T>` method:
```csharp
private static T GetAliasedValue<T>(Entity e, string alias)
{
    var aliased = e.GetAttributeValue<AliasedValue>(alias);
    if (aliased?.Value is T val) return val;
    return default;
}
```

#### Step E: Update text output

In **detail mode** for a single assembly (around line 298–306), if `HasManagedIdentity`, show:

```
managedIdentity:
  applicationId: {guid}
  tenantId: {guid}
  credentialSource: Certificate
```

In **list mode**, keep the `hasManagedIdentity` boolean column as `Yes/No`.

---

## Files To Modify (Summary)

| File | Changes |
|---|---|
| `DynamicsCrm.DevKit.Cli/Mcp/Tools/GetPluginsTool.cs` | FetchXml updates, new maps, `MapStepEntry` + `MapAssemblyEntry` changes, new `GetPackages()` method |
| `DynamicsCrm.DevKit.Cli/Mcp/Tools/Models/StructuredResults.cs` | New classes (`PluginPackageEntry`, `ManagedIdentityEntry`), new properties on existing classes (`SecureConfig`, `SupportedDeployment`, `PackageName`, `ManagedIdentity`) |

## Build & Test

After all changes, run `/build-cli` workflow to verify compilation. Then test against a live Dataverse environment with:
1. An assembly with secure/unsecure configs
2. An assembly deployed via NuGet plugin package
3. An assembly with managed identity binding
4. Steps with different `supporteddeployment` values
