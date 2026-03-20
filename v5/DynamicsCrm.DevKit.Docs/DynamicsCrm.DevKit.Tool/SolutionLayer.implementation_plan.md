# Add `solutionlayer` Command to DynamicsCrm.DevKit.Tool

## Goal

Add a `solutionlayer` command to `devkit-tool` that detects **unmanaged "Active" solution layers** across specified Dataverse solutions. Inspired by similar functionality in XrmToolBox plugins (Solution Layers Explorer, Unmanaged Active Layer Bulk Remover) and adapted from a project-specific implementation.

---

## Background

### What Are Solution Layers?

Every Dataverse component has a **layer stack**. The "Active" layer = unmanaged customizations NOT in any solution. These are risky because they won't migrate with solutions and can override managed changes.

### Reference Code

[SolutionLayer.cs](file:///D:/azure/huutoangroup/CRM-HTG_ABIZ/Abiz.Ht.Console.Tools/Task/SolutionLayer.cs) (454 lines) — project-specific implementation. Our task: **generalize it** for DevKit Tool.

### XrmToolBox Plugins (For Context)

| Plugin | Feature | Our Equivalent |
|--------|---------|----------------|
| **Solution Layers Explorer** | List all active layers per component | ✅ We do this |
| **Unmanaged Active Layer Bulk Remover** | Remove active layers in bulk | ❌ Out of scope (future) |

---

## Bugs in Reference Code to Fix

| Bug | Location | Fix |
|-----|----------|-----|
| `ManyToManyRelationships` added **twice** (lines 227-241) | `LoadComponents()` | Second block should be `ManyToOneRelationships` |
| `ManyToOneRelationships` never added | `LoadComponents()` | Add them instead of duplicate M:N |

---

## Entity Full vs Container Behavior (CRITICAL)

The `rootcomponentbehavior` field on `solutioncomponent` controls this:

| Value | Name | Behavior in Our Tool |
|-------|------|---------------------|
| **0** | Include Subcomponents | **Expand**: Query metadata for ALL managed attributes, relationships, forms, views, charts under this entity → check each for Active layer |
| **1** | Do not include subcomponents | **No expansion**: Only check what's explicitly in `solutioncomponent` table |
| **2** | Include as Shell Only | **No expansion**: Same as 1 |

When `rootcomponentbehavior=0`, the entity was added to the solution as a "full entity". The `solutioncomponent` table does NOT contain individual rows for each attribute/form/view/chart — those are **implicitly included**. We must expand them via metadata queries.

When `rootcomponentbehavior=1` or `2`, the entity was added as a "container" — only explicitly selected sub-components appear in `solutioncomponent`.

---

## Files to Create/Modify

### File 1: [NEW] `Commands/SolutionLayerCommand.cs`

**Pattern**: Follow [CreateEntityCommand.cs](file:///D:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Tool/Commands/CreateEntityCommand.cs)

```csharp
// Namespace: DynamicsCrm.DevKit.Tool.Commands
// References: System.ComponentModel, System.Threading, Spectre.Console, Spectre.Console.Cli

// CLASS 1: SolutionLayerSettings : CommandSettings
//   Properties:
//     --conn <CONNECTION>     [Required] Dataverse connection string
//     --solutions <SOLUTIONS> [Required] Comma-separated solution unique names
//     --output <OUTPUT>       [Optional] Output file path (default: console only)
//
//   Validate():
//     - Error if conn is empty
//     - Error if solutions is empty

// CLASS 2: SolutionLayerCommand : Command<SolutionLayerSettings>
//   Execute():
//     - Parse solutions string → string[] by splitting on ','
//     - Call TaskSolutionLayer.Run(settings.Connection, solutionNames, settings.Output)
//     - Catch exceptions → AnsiConsole.MarkupLine red error
//     - Return 0 on success, 1 on failure
```

---

### File 2: [NEW] `Tasks/TaskSolutionLayer.cs`

**Pattern**: Follow [TaskCreateEntity.cs](file:///D:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Tool/Tasks/TaskCreateEntity.cs) for connection and Spectre.Console usage.

**Namespace**: `DynamicsCrm.DevKit.Tool.Tasks`

**References needed**:
```
Microsoft.PowerPlatform.Dataverse.Client (ServiceClient)
Microsoft.Xrm.Sdk (Entity, EntityReference, OptionSetValue, IOrganizationService)
Microsoft.Xrm.Sdk.Messages (ExecuteMultipleRequest/Response, RetrieveMultipleRequest/Response, RetrieveOptionSetRequest/Response)
Microsoft.Xrm.Sdk.Metadata (EntityMetadata, EntityQueryExpression, MetadataFilterExpression, etc.)
Microsoft.Xrm.Sdk.Metadata.Query (MetadataConditionExpression, MetadataConditionOperator)
Microsoft.Xrm.Sdk.Query (QueryExpression, FetchExpression, ColumnSet, FilterExpression, ConditionExpression, ConditionOperator)
Newtonsoft.Json.Linq (JObject, JArray)
Spectre.Console (AnsiConsole)
System, System.Collections.Generic, System.Diagnostics, System.Linq, System.Text
```

#### Class: `internal class TaskSolutionLayer`

##### Field

```csharp
private static List<Tuple<int, string>> componentDefs;
```

---

##### Method 1: `Run` (Entry Point)

```csharp
internal static void Run(string connectionString, string[] solutions, string outputFile)
```

**Logic**:
1. Connect to Dataverse:
   ```csharp
   AnsiConsole.MarkupLine("[cyan]Connecting to Dataverse...[/]");
   var serviceClient = new ServiceClient(connectionString);
   if (!serviceClient.IsReady) throw new Exception($"Cannot connect: {serviceClient.LastError}");
   AnsiConsole.MarkupLine("[green]Connected![/]");
   ```
2. Start stopwatch
3. Call `LoadComponentDefinitions(serviceClient)`
4. Initialize `var result = new StringBuilder()`
5. For each solution name in `solutions`:
   - Call `result.Append(CheckSolution(serviceClient, solutionName.Trim()))`
   - If `outputFile` is not null, write intermediate result to file (UTF-8)
6. Stop stopwatch, append `$"Take: {stopwatch.Elapsed.TotalMinutes:F2} minutes"`
7. If `outputFile` is not null, write final result to file (UTF-8), print `[green]Report saved to {outputFile}[/]`
8. If `outputFile` is null, write result to console

---

##### Method 2: `LoadComponentDefinitions`

```csharp
private static void LoadComponentDefinitions(ServiceClient serviceClient)
```

**Logic**:
1. Initialize `componentDefs = new List<Tuple<int, string>>()`
2. Query `solutioncomponentdefinition` table (get all records, `ColumnSet(true)`, `NoLock=true`)
3. Query `componenttype` global optionset:
   ```csharp
   var response = (RetrieveOptionSetResponse)serviceClient.Execute(
       new RetrieveOptionSetRequest { Name = "componenttype" });
   var options = ((OptionSetMetadata)response.OptionSetMetadata).Options;
   ```
4. Add definitions from step 2: `Tuple(d["solutioncomponenttype"], d["name"])`
5. Add options from step 3: `Tuple(o.Value.Value, o.Label?.UserLocalizedLabel?.Label ?? "")`
6. Add hardcoded: `Tuple(80, "Model driven app")` (not in either source)

---

##### Method 3: `GetSolutionId`

```csharp
private static Guid GetSolutionId(ServiceClient serviceClient, string solutionName)
```

**Logic**:
1. FetchXml query on `solution` table where `uniquename = solutionName`
2. Return `.Id` of the single result
3. Throw if not found: `$"Solution: {solutionName} not found"`

---

##### Method 4: `LoadComponents`

```csharp
private static List<Entity> LoadComponents(ServiceClient serviceClient, Guid solutionId)
```

**This is the most complex method. Follow these steps exactly:**

**Step 4a**: Load all `solutioncomponent` records for the solution
```csharp
var allComponents = serviceClient.RetrieveMultiple(new QueryExpression("solutioncomponent") {
    NoLock = true,
    ColumnSet = new ColumnSet(true),
    Criteria = { Conditions = { new ConditionExpression("solutionid", ConditionOperator.Equal, solutionId) } }
}).Entities.ToList();
var components = allComponents.ToList(); // working copy
```

**Step 4b**: Filter out auto-generated Activity `regardingobjectid` relationships (componenttype=10)
```csharp
var relationships = allComponents.Where(c => c.GetAttributeValue<OptionSetValue>("componenttype")?.Value == 10).ToList();
if (relationships.Count > 0)
{
    // Get all activity entities
    var activityQuery = new EntityQueryExpression {
        Criteria = new MetadataFilterExpression(LogicalOperator.And) {
            Conditions = { new MetadataConditionExpression("IsActivity", MetadataConditionOperator.Equals, true) }
        },
        Properties = new MetadataPropertiesExpression("MetadataId", "LogicalName", "ManyToOneRelationships")
    };
    var activityEntities = ((RetrieveMetadataChangesResponse)serviceClient.Execute(
        new RetrieveMetadataChangesRequest { Query = activityQuery })).EntityMetadata.ToList();

    // Collect MetadataIds of regardingobjectid relationships
    var excludeIds = activityEntities
        .SelectMany(e => e.ManyToOneRelationships)
        .Where(r => r.ReferencingAttribute == "regardingobjectid")
        .Select(r => r.MetadataId).ToList();

    // Remove them from components
    components = components.Except(allComponents.Where(c => excludeIds.Contains(c.GetAttributeValue<Guid>("objectid")))).ToList();
}
```

**Step 4c**: Expand FULL entities (rootcomponentbehavior=0, componenttype=1)
```csharp
var fullEntities = allComponents.Where(c =>
    c.GetAttributeValue<OptionSetValue>("componenttype")?.Value == 1 &&
    c.GetAttributeValue<OptionSetValue>("rootcomponentbehavior")?.Value == 0).ToList();

if (fullEntities.Any())
{
    // Query entity metadata for full entities — only managed attributes & relationships
    var entityQuery = new EntityQueryExpression {
        Criteria = new MetadataFilterExpression(LogicalOperator.And) {
            Conditions = { new MetadataConditionExpression("MetadataId", MetadataConditionOperator.In,
                fullEntities.Select(fe => fe.GetAttributeValue<Guid>("objectid")).ToArray()) }
        },
        Properties = new MetadataPropertiesExpression(
            "LogicalName", "Attributes", "OneToManyRelationships", "ManyToOneRelationships", "ManyToManyRelationships"),
        AttributeQuery = new AttributeQueryExpression {
            Properties = new MetadataPropertiesExpression("MetadataId"),
            Criteria = new MetadataFilterExpression {
                Conditions = { new MetadataConditionExpression("IsManaged", MetadataConditionOperator.Equals, true) }
            }
        },
        RelationshipQuery = new RelationshipQueryExpression {
            Properties = new MetadataPropertiesExpression("MetadataId"),
            Criteria = new MetadataFilterExpression {
                Conditions = { new MetadataConditionExpression("IsManaged", MetadataConditionOperator.Equals, true) }
            }
        }
    };
    var entityMetadatas = ((RetrieveMetadataChangesResponse)serviceClient.Execute(
        new RetrieveMetadataChangesRequest { Query = entityQuery })).EntityMetadata.ToList();

    // Add Attributes (componenttype=2)
    components.AddRange(entityMetadatas.SelectMany(e => e.Attributes).Select(a => new Entity("solutioncomponent") {
        ["objectid"] = a.MetadataId,
        ["componenttype"] = new OptionSetValue(2)
    }));

    // Add ManyToManyRelationships (componenttype=3)
    components.AddRange(entityMetadatas.SelectMany(e => e.ManyToManyRelationships).Select(r => new Entity("solutioncomponent") {
        ["objectid"] = r.MetadataId,
        ["componenttype"] = new OptionSetValue(3)
    }));

    // Add OneToManyRelationships (componenttype=3)
    components.AddRange(entityMetadatas.SelectMany(e => e.OneToManyRelationships).Select(r => new Entity("solutioncomponent") {
        ["objectid"] = r.MetadataId,
        ["componenttype"] = new OptionSetValue(3)
    }));

    // ⚠️ BUG FIX: Add ManyToOneRelationships (reference code had ManyToMany duplicated here)
    components.AddRange(entityMetadatas.SelectMany(e => e.ManyToOneRelationships).Select(r => new Entity("solutioncomponent") {
        ["objectid"] = r.MetadataId,
        ["componenttype"] = new OptionSetValue(3)
    }));

    // Add System Forms (componenttype=60)
    var forms = serviceClient.RetrieveMultiple(new QueryExpression("systemform") {
        NoLock = true, ColumnSet = new ColumnSet("name"),
        Criteria = { Conditions = {
            new ConditionExpression("objecttypecode", ConditionOperator.In,
                entityMetadatas.Select(e => e.LogicalName).ToArray()) } }
    });
    components.AddRange(forms.Entities.Select(f => new Entity("solutioncomponent") {
        ["objectid"] = f.Id,
        ["componenttype"] = new OptionSetValue(60)
    }));

    // Add Saved Queries / Views (componenttype=26)
    var views = serviceClient.RetrieveMultiple(new QueryExpression("savedquery") {
        NoLock = true, ColumnSet = new ColumnSet("name"),
        Criteria = { Conditions = {
            new ConditionExpression("returnedtypecode", ConditionOperator.In,
                entityMetadatas.Select(e => e.LogicalName).ToArray()) } }
    });
    components.AddRange(views.Entities.Select(v => new Entity("solutioncomponent") {
        ["objectid"] = v.Id,
        ["componenttype"] = new OptionSetValue(26)
    }));

    // Add Charts (componenttype=59)
    var charts = serviceClient.RetrieveMultiple(new QueryExpression("savedqueryvisualization") {
        NoLock = true, ColumnSet = new ColumnSet("name"),
        Criteria = { Conditions = {
            new ConditionExpression("primaryentitytypecode", ConditionOperator.In,
                entityMetadatas.Select(e => e.LogicalName).ToArray()) } }
    });
    components.AddRange(charts.Entities.Select(c => new Entity("solutioncomponent") {
        ["objectid"] = c.Id,
        ["componenttype"] = new OptionSetValue(59)
    }));
}
```

Return `components`.

---

##### Method 5: `CheckSolution`

```csharp
private static string CheckSolution(ServiceClient serviceClient, string solutionName)
```

**Logic**:
1. Log: `AnsiConsole.MarkupLine($"[cyan]Checking solution:[/] [yellow]{solutionName}[/]")`
2. `var solutionId = GetSolutionId(serviceClient, solutionName)`
3. `var components = LoadComponents(serviceClient, solutionId)`
4. Group components by `componenttype` value
5. Build result string starting with `$"SOLUTION: {solutionName}\r\n"`
6. For each group (ordered by key):
   - Skip null groups
   - Find component type name from `componentDefs`
   - Append `\t{typeName} ({count})\r\n`
   - Log progress via AnsiConsole
   - Call `CheckActiveLayers(serviceClient, groupEntities)` and append result
7. Return result

---

##### Method 6: `CheckActiveLayers`

```csharp
private static string CheckActiveLayers(ServiceClient serviceClient, List<Entity> entities)
```

**Logic**:
1. Initialize `result = ""`
2. Create `ExecuteMultipleRequest` with `ContinueOnError=true`, `ReturnResponses=true`
3. For each entity in `entities`:
   - Get componenttype value, convert to component API name via `GetSolutionComponentName()`
   - Special case: if name == `"418"`, set to `"msdyn_dataflow"`
   - Create `RetrieveMultipleRequest` querying `msdyn_componentlayer`:
     - Filter: `msdyn_solutioncomponentname = componentApiName` AND `msdyn_componentid = objectid`
     - Tag the request with componenttype value: `request["tag"] = componentTypeValue`
   - Add to bulk request
   - **When batch reaches 200**: execute, call `ProcessBatchResults()`, clear batch
4. Process remaining batch if > 0
5. Return result

---

##### Method 7: `ProcessBatchResults`

```csharp
private static string ProcessBatchResults(ServiceClient serviceClient, string result,
    ExecuteMultipleRequest bulk, ExecuteMultipleResponse bulkResponse)
```

**Logic** (parse each response, look for `msdyn_solutionname == "Active"`):

1. Collect `entityIds` for attribute lookups
2. For each response in `bulkResponse.Responses`:
   - Skip if `Fault != null`
   - Get entities from response
   - Find entity where `msdyn_solutionname == "Active"`
   - If found:
     - Get componenttype from request tag
     - **Switch on componenttype**:
       - **Attribute (2)**: Parse `msdyn_componentjson` → get `entityid` → collect for batch metadata lookup
       - **Saved Query (26)**: Parse `msdyn_componentjson` → get `returnedtypecode` → output `[typecode].[name] - [id]`
       - **Chart (59)**: Parse `msdyn_componentjson` → get `primaryentitytypecode` → output `[typecode].[name] - [id]`
       - **Others**: Try parse `objecttypecode` from json, fallback to just name → output `[name] - [id]`

3. **For collected attribute entityIds** (batch metadata lookup):
   - Query entity metadata by MetadataId to get `LogicalName`
   - Re-iterate responses, for Attribute type, resolve entity name + attribute logical name
   - Output: `[entityLogicalName].[attributeLogicalName] - [id]`

**JSON parsing pattern** (from `msdyn_componentjson`):
```csharp
var json = JObject.Parse(found.GetAttributeValue<string>("msdyn_componentjson"));
var attributes = (JArray)json["Attributes"];
var value = ((JObject)attributes.First(o => ((JObject)o).Value<string>("Key") == "keyname")).Value<string>("Value");
```

---

##### Method 8: `GetSolutionComponentName`

```csharp
private static string GetSolutionComponentName(string enumName)
```

**Logic**: Convert C# enum-style name to Dataverse API name:
```csharp
value = value.Replace("_", "");
value = value.Replace("SDK", "Sdk").Replace("SLA", "Sla").Replace("KB", "Kb").Replace("AI", "Ai");
return value;
```

---

### File 3: [MODIFY] `Program.cs`

Add to `config` block (line ~47):
```csharp
config.AddCommand<SolutionLayerCommand>("solutionlayer")
      .WithDescription("Check unmanaged active solution layers in Dataverse solutions");
```

Add to `WriteHelp()` method (line ~86):
```csharp
"  [cyan]solutionlayer[/]          Check unmanaged active solution layers\n" +
```

Add `using DynamicsCrm.DevKit.Tool.Commands;` if not already present (it is).

---

### File 4: [MODIFY] `SolutionLayer.md` (Docs)

Already created at [SolutionLayer.md](file:///D:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit.Tool/SolutionLayer.md). Will update with XrmToolBox reference and full/container entity explanation.

---

## Verification Plan

```powershell
# Build
dotnet build --configuration Debug "DynamicsCrm.DevKit.Tool\DynamicsCrm.DevKit.Tool.csproj"

# Verify help
dotnet run --project "DynamicsCrm.DevKit.Tool\DynamicsCrm.DevKit.Tool.csproj" -- solutionlayer --help

# Manual test (requires connection)
devkit-tool solutionlayer --conn "AuthType=ClientSecret;..." --solutions "Sol1,Sol2" --output "./report.txt"
```
