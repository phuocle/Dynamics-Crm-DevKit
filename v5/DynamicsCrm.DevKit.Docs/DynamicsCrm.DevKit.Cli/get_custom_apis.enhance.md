# Enhancement Spec: `get_custom_apis` MCP Tool

> **Source**: [GetCustomApisTool.cs](file:///d:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Cli/Mcp/Tools/GetCustomApisTool.cs)
> **Models**: [StructuredResults.cs](file:///d:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Cli/Mcp/Tools/Models/StructuredResults.cs) (lines 657–753)
> **Reference**: [TaskServer.cs](file:///d:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Cli/Tasks/TaskServer.cs) — `DeployCustomApiStepAsync()` line 1183

---

## Enhancement 1: Custom API → Plugin Type → Assembly Detail

### Current Behavior

When viewing a Custom API detail, the tool shows `pluginType` as **just the name** of the plugin type record. It does NOT show which assembly the plugin type belongs to, nor the full type name.

**Code location** — `GetCustomApisTool.cs` line 342:
```csharp
PluginType = GetLookupName(e, "plugintypeid"),
```

This calls `GetLookupName()` (line 358–365) which only returns `EntityReference.Name` — that is the "name" field of the plugin type, NOT the fully-qualified C# type name.

### Dataverse Schema

The relationship chain is:
```
customapi.plugintypeid → plugintype.plugintypeid → pluginassembly.pluginassemblyid
```

`plugintype` attributes we need:
| Attribute | Description |
|---|---|
| `plugintypeid` | GUID |
| `typename` | Fully-qualified C# type name (e.g. `MyNamespace.Plugins.MyCustomApiHandler`) |
| `name` | Friendly name |
| `friendlyname` | Friendly name (different from name) |
| `description` | Description |

`pluginassembly` attributes we need:
| Attribute | Description |
|---|---|
| `name` | Assembly name (e.g. `MyProject.Server`) |
| `version` | Assembly version |
| `isolationmode` | OptionSetValue: 1=None, 2=Sandbox, 3=External |

### Required Change

#### Step A: Update `GetDetail()` FetchXml (line 197–204)

Current:
```xml
<fetch>
  <entity name='customapi'>
    <all-attributes/>
    <filter>
      <condition attribute='uniquename' operator='eq' value='{apiName}'/>
    </filter>
  </entity>
</fetch>
```

Change to add a link-entity to get plugin type and assembly details:
```xml
<fetch>
  <entity name='customapi'>
    <all-attributes/>
    <link-entity name='plugintype' from='plugintypeid' to='plugintypeid' link-type='outer' alias='pt'>
      <attribute name='typename'/>
      <attribute name='name'/>
      <attribute name='friendlyname'/>
      <attribute name='description'/>
      <link-entity name='pluginassembly' from='pluginassemblyid' to='pluginassemblyid' link-type='outer' alias='pa'>
        <attribute name='name'/>
        <attribute name='version'/>
        <attribute name='isolationmode'/>
      </link-entity>
    </link-entity>
    <filter>
      <condition attribute='uniquename' operator='eq' value='{EscapeXml(apiName)}'/>
    </filter>
  </entity>
</fetch>
```

#### Step B: Update `CustomApiEntry` model in `StructuredResults.cs` (after line 704)

Add new properties:

```csharp
[JsonPropertyName("pluginTypeName")]
[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
public string PluginTypeName { get; set; }

[JsonPropertyName("pluginTypeFullName")]
[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
public string PluginTypeFullName { get; set; }

[JsonPropertyName("pluginAssemblyName")]
[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
public string PluginAssemblyName { get; set; }

[JsonPropertyName("pluginAssemblyVersion")]
[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
public string PluginAssemblyVersion { get; set; }

[JsonPropertyName("pluginIsolationMode")]
[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
public string PluginIsolationMode { get; set; }
```

#### Step C: Update `MapDetailEntry()` (line 347–356)

After existing mapping, add:

```csharp
// Plugin type detail
entry.PluginTypeName = NullIfEmpty(GetAliasedString(e, "pt.name"));
entry.PluginTypeFullName = NullIfEmpty(GetAliasedString(e, "pt.typename"));
entry.PluginAssemblyName = NullIfEmpty(GetAliasedString(e, "pa.name"));
entry.PluginAssemblyVersion = NullIfEmpty(GetAliasedString(e, "pa.version"));
var isoValue = GetAliasedValue<int?>(e, "pa.isolationmode");
if (isoValue.HasValue)
{
    entry.PluginIsolationMode = isoValue.Value switch
    {
        1 => "None",
        2 => "Sandbox",
        3 => "External",
        _ => isoValue.Value.ToString()
    };
}
```

You need to add helper methods:

```csharp
private static string GetAliasedString(Entity e, string alias)
{
    var aliased = e.GetAttributeValue<AliasedValue>(alias);
    return aliased?.Value?.ToString() ?? "";
}

private static T GetAliasedValue<T>(Entity e, string alias)
{
    var aliased = e.GetAttributeValue<AliasedValue>(alias);
    if (aliased?.Value is T val) return val;
    return default;
}
```

#### Step D: Update detail text output (line 251–324)

After `pluginType: {entry.PluginType ?? "(none)"}` (line 267), add:

```csharp
if (!string.IsNullOrEmpty(entry.PluginTypeFullName))
    sb.AppendLine($"pluginTypeFullName: {entry.PluginTypeFullName}");
if (!string.IsNullOrEmpty(entry.PluginAssemblyName))
    sb.AppendLine($"pluginAssembly: {entry.PluginAssemblyName} ({entry.PluginAssemblyVersion})");
if (!string.IsNullOrEmpty(entry.PluginIsolationMode))
    sb.AppendLine($"isolationMode: {entry.PluginIsolationMode}");
```

---

## Enhancement 2: Verify Input/Output Parameters Already Work

### Current Behavior — ALREADY IMPLEMENTED ✅

The tool ALREADY returns `RequestParameters` and `ResponseProperties` in detail mode. See:

- `GetDetail()` method lines 213–249: queries `customapirequestparameter` and `customapiresponseproperty`
- Text output lines 281–311: shows `[Request Parameters]` and `[Response Properties]` sections
- Model: `CustomApiParameter` class at line 734–753 of StructuredResults.cs

**Fields returned for each parameter**:
- `name` (uniquename)
- `type` (mapped from OptionSetValue via `ParameterTypeMap`)
- `isOptional` (boolean)
- `logicalEntityName` (for Entity/EntityReference types)
- `description`

### Verification

This enhancement is **already done**. No changes needed.

When calling `get_custom_apis(api_name="MyCustomApi")`, the detail output includes:

```
[Request Parameters] 3 total

name	type	required	entity	description
Param1	String	Yes	-	First parameter
Param2	EntityReference	No	account	Account reference

[Response Properties] 1 total

name	type	entity	description
Result	Boolean	-	Success flag
```

---

## Files To Modify (Summary)

| File | Changes |
|---|---|
| `DynamicsCrm.DevKit.Cli/Mcp/Tools/GetCustomApisTool.cs` | FetchXml join to plugintype+pluginassembly, `MapDetailEntry()` enhancement, text output additions, new helper methods |
| `DynamicsCrm.DevKit.Cli/Mcp/Tools/Models/StructuredResults.cs` | New properties on `CustomApiEntry` (`PluginTypeName`, `PluginTypeFullName`, `PluginAssemblyName`, `PluginAssemblyVersion`, `PluginIsolationMode`) |

## Build & Test

After changes, run `/build-cli` workflow. Then test with:
1. A Custom API that has a bound plugin type (should show full type detail)
2. A Custom API that has NO bound plugin type (should show `pluginType: (none)` with no extra fields)
3. Verify request parameters and response properties still work correctly in detail mode
