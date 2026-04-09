# Enhancement Spec: `get_workflows` MCP Tool

> **Source**: [GetWorkflowsTool.cs](file:///d:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Cli/Mcp/Tools/GetWorkflowsTool.cs)
> **Models**: [StructuredResults.cs](file:///d:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Cli/Mcp/Tools/Models/StructuredResults.cs) (lines 547–655)
> **Reference**: [TaskServer.cs](file:///d:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Cli/Tasks/TaskServer.cs) — handles Workflow Activity deployment with `workflowactivitygroupname`

---

## Context: Classic Workflows vs Workflow Activities

The `get_workflows` tool lists **classic workflows** (category=0) from the `workflow` entity. These are the declarative background/realtime workflows.

**Workflow Activities** are a separate concept — they are custom .NET code classes (extending `CodeActivity`) deployed as `plugintype` records with `workflowactivitygroupname`. TaskServer manages these in `DeployPluginTypeAsync()` (line 1803-1804):

```csharp
if (attribute.PluginType == PluginType.Workflow)
    pluginType["workflowactivitygroupname"] = attribute.GroupName;
```

The `get_workflows` tool currently does NOT show these Workflow Activities. However, `get_plugins` partially shows them— it sets `isWorkflow = true` when `workflowactivitygroupname` is not null (see `MapTypeEntry()` line 675-682 in GetPluginsTool.cs):

```csharp
var workflowGroup = e.GetAttributeValue<string>("workflowactivitygroupname");
return new PluginTypeEntry
{
    // ...
    IsWorkflow = !string.IsNullOrWhiteSpace(workflowGroup)
};
```

But it does NOT expose the `workflowactivitygroupname` value itself.

---

## Enhancement 1: Return Workflow Activity Group Name in `get_plugins`

### Current Behavior

In `GetPluginsTool.cs`, `MapTypeEntry()` only returns a boolean `IsWorkflow`. The actual group name is queried (line 670-671) but discarded:

```csharp
<attribute name='workflowactivitygroupname'/>
```

### Required Change

This change should be implemented in **`get_plugins`** (not `get_workflows`), since Workflow Activities are `plugintype` records shown by `get_plugins`.

#### Step A: Update `PluginTypeEntry` model in `StructuredResults.cs` (after line 943)

Add:
```csharp
[JsonPropertyName("workflowActivityGroupName")]
[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
public string WorkflowActivityGroupName { get; set; }
```

#### Step B: Update `MapTypeEntry()` in `GetPluginsTool.cs` (line 673–684)

```csharp
private static PluginTypeEntry MapTypeEntry(Entity e)
{
    var workflowGroup = e.GetAttributeValue<string>("workflowactivitygroupname");
    return new PluginTypeEntry
    {
        TypeId = e.Id.ToString(),
        TypeName = e.GetAttributeValue<string>("typename") ?? "",
        Name = e.GetAttributeValue<string>("name") ?? "",
        Description = NullIfEmpty(e.GetAttributeValue<string>("description")),
        IsWorkflow = !string.IsNullOrWhiteSpace(workflowGroup),
        WorkflowActivityGroupName = NullIfEmpty(workflowGroup)  // NEW
    };
}
```

#### Step C: Update text output in `GetAssemblyDetail()` (line 310–321)

Change the types table header and data:

Current:
```
#	typeName	pluginType	stepCount
```

New:
```
#	typeName	pluginType	groupName	stepCount
```

Update the loop:
```csharp
for (var i = 0; i < types.Count; i++)
{
    var t = types[i];
    var pluginType = t.IsWorkflow ? "Workflow" : "Plugin";
    var groupName = t.WorkflowActivityGroupName ?? "-";
    sb.AppendLine($"{i + 1}\t{EscapeTab(t.TypeName)}\t{pluginType}\t{EscapeTab(groupName)}\t{t.StepCount}");
}
```

---

## Files To Modify (Summary)

| File | Changes |
|---|---|
| `DynamicsCrm.DevKit.Cli/Mcp/Tools/GetPluginsTool.cs` | `MapTypeEntry()` — populate `WorkflowActivityGroupName`, update text output in `GetAssemblyDetail()` |
| `DynamicsCrm.DevKit.Cli/Mcp/Tools/Models/StructuredResults.cs` | Add `WorkflowActivityGroupName` property to `PluginTypeEntry` |

> [!NOTE]
> The `get_workflows` tool file (`GetWorkflowsTool.cs`) does NOT need to be modified. Workflow Activities are plugintype records, not workflow records, so they belong in `get_plugins`.

## Build & Test

After changes, run `/build-cli` workflow. Then test with:
1. An assembly that contains Workflow Activity types — verify `workflowActivityGroupName` shows the group name
2. An assembly with only Plugin types — verify `workflowActivityGroupName` is null/omitted
3. An assembly with both Plugin and Workflow Activity types — verify correct classification
