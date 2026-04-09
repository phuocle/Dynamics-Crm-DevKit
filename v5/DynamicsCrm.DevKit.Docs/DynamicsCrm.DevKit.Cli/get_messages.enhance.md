# Enhancement Spec: `get_messages` MCP Tool

> **Source**: [GetMessagesTool.cs](file:///d:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Cli/Mcp/Tools/GetMessagesTool.cs)
> **Models**: [StructuredResults.cs](file:///d:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Cli/Mcp/Tools/Models/StructuredResults.cs) (lines 1477–1608)
> **Reference**: [TaskServer.cs](file:///d:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Cli/Tasks/TaskServer.cs) — SDK message/filter resolution

---

## Enhancement 1: Improve Custom Action Input/Output Parameter Retrieval

### Current Behavior

The tool retrieves Custom Action parameters via XAML parsing from the `workflow` entity. This approach:
- Works on the `workflow.xaml` field
- Parses `<x:Property Name="..." Type="InArgument(...)" />` patterns
- Falls back when XAML is missing

**Code location** — `GetMessagesTool.cs`:
- `GetActionParameters()` line 435–485 — attempts SDK message pair approach, then falls back to XAML
- `GetActionParametersFromProcess()` line 487–561 — the XAML parser

### Problem

The XAML parsing approach is **fragile and incomplete**:
1. It only finds `<x:Property>` lines — may miss arguments in different XAML formats
2. Required/optional is not reliably parsed (the `IsRequired` attribute is not standard in the XAML)
3. Entity-specific type information is lost (e.g., `EntityReference(account)` parsing is handled but brittle)
4. The `sdkmessagerequest` / `sdkmessageresponse` approach in `GetActionParameters()` is attempted but incorrectly queries — it uses `sdkmessagepairid operator='in'` with the `sdkmessageid` value instead of querying the pair table properly

### Dataverse Schema for SDK Message Request/Response Fields

The correct relationship chain for Custom Action parameters:
```
sdkmessage → sdkmessagepair → sdkmessagerequest → sdkmessagerequestfield (input params)
sdkmessage → sdkmessagepair → sdkmessageresponse → sdkmessageresponsefield (output params)
```

Key entities:

**`sdkmessagepair`**:
| Attribute | Description |
|---|---|
| `sdkmessagepairid` | PK |
| `sdkmessageid` | FK to sdkmessage |
| `namespace` | Usually "http://schemas.microsoft.com/xrm/2011/Contracts/Services" |

**`sdkmessagerequest`**:
| Attribute | Description |
|---|---|
| `sdkmessagerequestid` | PK |
| `sdkmessagepairid` | FK to sdkmessagepair |
| `name` | Request class name |

**`sdkmessagerequestfield`**:
| Attribute | Description |
|---|---|
| `name` | Parameter name |
| `clrparser` | CLR type (e.g., `System.String`, `Microsoft.Xrm.Sdk.Entity`) |
| `optional` | Boolean — is parameter optional |
| `position` | Int — parameter order |

**`sdkmessageresponse`**:
| Attribute | Description |
|---|---|
| `sdkmessageresponseid` | PK |
| `sdkmessagerequestid` | FK to sdkmessagerequest |

**`sdkmessageresponsefield`**:
| Attribute | Description |
|---|---|
| `name` | Property name |
| `clrformatter` | CLR type |
| `position` | Int — property order |

### Required Change

#### Step A: Replace `GetActionParameters()` method (line 435–485)

Replace with a proper SDK message field query approach:

```csharp
private (List<ActionParameterEntry> inputs, List<ActionParameterEntry> outputs) GetActionParameters(Guid workflowId)
{
    var inputs = new List<ActionParameterEntry>();
    var outputs = new List<ActionParameterEntry>();

    var uniqueName = GetWorkflowUniqueName(workflowId);
    if (string.IsNullOrEmpty(uniqueName)) return (inputs, outputs);

    // Find the SDK message
    var sdkMsg = FindSdkMessage(uniqueName);
    if (sdkMsg == null) return (inputs, outputs);
    var msgId = sdkMsg.Id;

    // Query input parameters via sdkmessagepair → sdkmessagerequest → sdkmessagerequestfield
    try
    {
        var fetchInputs = $@"<fetch>
  <entity name='sdkmessagerequestfield'>
    <attribute name='name'/>
    <attribute name='clrparser'/>
    <attribute name='optional'/>
    <attribute name='position'/>
    <link-entity name='sdkmessagerequest' from='sdkmessagerequestid' to='sdkmessagerequestid'>
      <link-entity name='sdkmessagepair' from='sdkmessagepairid' to='sdkmessagepairid'>
        <filter>
          <condition attribute='sdkmessageid' operator='eq' value='{msgId}'/>
        </filter>
      </link-entity>
    </link-entity>
    <order attribute='position'/>
  </entity>
</fetch>";

        var inputResult = _serviceClient.RetrieveMultiple(new FetchExpression(fetchInputs));
        foreach (var e in inputResult.Entities)
        {
            var name = e.GetAttributeValue<string>("name") ?? "";
            // Skip system parameters that are always present
            if (name == "Target" || name == "EntityMoniker") continue;

            inputs.Add(new ActionParameterEntry
            {
                Name = name,
                Type = SimplifyClrType(e.GetAttributeValue<string>("clrparser")),
                IsRequired = !(e.GetAttributeValue<bool?>("optional") ?? false),
                EntityName = ExtractEntityFromClrType(e.GetAttributeValue<string>("clrparser"))
            });
        }
    }
    catch { }

    // Query output parameters via sdkmessagepair → sdkmessagerequest → sdkmessageresponse → sdkmessageresponsefield
    try
    {
        var fetchOutputs = $@"<fetch>
  <entity name='sdkmessageresponsefield'>
    <attribute name='name'/>
    <attribute name='clrformatter'/>
    <attribute name='position'/>
    <link-entity name='sdkmessageresponse' from='sdkmessageresponseid' to='sdkmessageresponseid'>
      <link-entity name='sdkmessagerequest' from='sdkmessagerequestid' to='sdkmessagerequestid'>
        <link-entity name='sdkmessagepair' from='sdkmessagepairid' to='sdkmessagepairid'>
          <filter>
            <condition attribute='sdkmessageid' operator='eq' value='{msgId}'/>
          </filter>
        </link-entity>
      </link-entity>
    </link-entity>
    <order attribute='position'/>
  </entity>
</fetch>";

        var outputResult = _serviceClient.RetrieveMultiple(new FetchExpression(fetchOutputs));
        foreach (var e in outputResult.Entities)
        {
            outputs.Add(new ActionParameterEntry
            {
                Name = e.GetAttributeValue<string>("name") ?? "",
                Type = SimplifyClrType(e.GetAttributeValue<string>("clrformatter")),
                EntityName = ExtractEntityFromClrType(e.GetAttributeValue<string>("clrformatter"))
            });
        }
    }
    catch { }

    // Fallback to XAML parsing if SDK fields returned nothing
    if (inputs.Count == 0 && outputs.Count == 0)
    {
        inputs = GetActionParametersFromProcess(workflowId, true);
        outputs = GetActionParametersFromProcess(workflowId, false);
    }

    return (inputs, outputs);
}
```

#### Step B: Add helper methods

```csharp
private static string SimplifyClrType(string clrType)
{
    if (string.IsNullOrEmpty(clrType)) return "Unknown";
    // Common CLR type mappings
    return clrType switch
    {
        "System.String" => "String",
        "System.Boolean" => "Boolean",
        "System.Int32" => "Integer",
        "System.Decimal" => "Decimal",
        "System.Double" => "Float",
        "System.DateTime" => "DateTime",
        "System.Guid" => "Guid",
        "Microsoft.Xrm.Sdk.Entity" => "Entity",
        "Microsoft.Xrm.Sdk.EntityCollection" => "EntityCollection",
        "Microsoft.Xrm.Sdk.EntityReference" => "EntityReference",
        "Microsoft.Xrm.Sdk.Money" => "Money",
        "Microsoft.Xrm.Sdk.OptionSetValue" => "Picklist",
        _ => clrType.Contains('.') ? clrType.Substring(clrType.LastIndexOf('.') + 1) : clrType
    };
}

private static string ExtractEntityFromClrType(string clrType)
{
    // CLR types don't typically contain entity name info
    // Return null — entity names come from the XAML or Custom API definition
    return null;
}
```

#### Step C: Keep XAML fallback

Keep the existing `GetActionParametersFromProcess()` method as-is (line 487–561). It acts as a fallback when the SDK message field tables don't have data (some older Custom Actions may not populate those tables).

---

## Files To Modify (Summary)

| File | Changes |
|---|---|
| `DynamicsCrm.DevKit.Cli/Mcp/Tools/GetMessagesTool.cs` | Replace `GetActionParameters()` with proper SDK message field chain query, add `SimplifyClrType()` and `ExtractEntityFromClrType()` helpers |

## Build & Test

After changes, run `/build-cli` workflow. Then test with:
1. A Custom Action that has input and output parameters defined — verify they show correctly
2. A Custom Action with no parameters — verify empty lists
3. A very old Custom Action (pre-Custom API era) — verify XAML fallback still works
4. Compare results with what Power Apps shows for the same Custom Action's parameters
