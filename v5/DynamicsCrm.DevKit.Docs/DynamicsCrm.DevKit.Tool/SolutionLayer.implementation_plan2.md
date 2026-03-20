# Implementation Plan v2: Add `solutionlayer` Command to DynamicsCrm.DevKit.Tool

**Document Type:** Implementation Plan
**Status:** Reviewed & Corrected
**Reviewed by:** GitHub Copilot (Claude Sonnet 4.6)
**Previous plan:** `SolutionLayer.implementation_plan.md`

---

## Goal

Add a `solutionlayer` command to `devkit-tool` that detects **unmanaged "Active" solution layers** across specified Dataverse solutions, generalized from reference code `SolutionLayer.cs`.

---

## Background

### Reference Code

`D:\azure\huutoangroup\CRM-HTG_ABIZ\Abiz.Ht.Console.Tools\Task\SolutionLayer.cs` — project-specific implementation using old SDK (`CrmServiceClient`). Task: **generalize it** for DevKit Tool using `ServiceClient` (.NET 10 target).

### Tech Stack in DynamicsCrm.DevKit.Tool

| Dependency | Version |
|-----------|---------|
| Target framework | .NET 10.0 |
| `Microsoft.PowerPlatform.Dataverse.Client` | latest (`*`) |
| `Newtonsoft.Json` | latest (`*`) |
| `Spectre.Console` | 0.54.0 |
| `Spectre.Console.Cli` | 0.53.1 |

> [!NOTE]
> `Microsoft.Xrm.Sdk`, `Microsoft.Xrm.Sdk.Messages`, `Microsoft.Xrm.Sdk.Metadata`, `Microsoft.Xrm.Sdk.Query` are all included transitively via `Microsoft.PowerPlatform.Dataverse.Client`. No separate package references needed.

---

## Confirmed Bugs in Reference Code to Fix

| # | Bug | Location | Fix |
|---|-----|----------|-----|
| **1** | `ManyToManyRelationships` added **twice** — second block should be `ManyToOneRelationships` | `LoadComponents()` | Replace second `ManyToManyRelationships` with `ManyToOneRelationships` |
| **2** | Metadata query requests `"DisplayName"` but code accesses `found2.LogicalName` (returns null) | `CheckResultV2()` | Change to `MetadataPropertiesExpression("MetadataId", "LogicalName")` |
| **3** | `rootcomponentbehavior` `.Value` called without null check | `LoadComponents()` | Use `?.Value == 0` pattern |

---

## Files to Create/Modify

### File 1: [NEW] `Commands/SolutionLayerCommand.cs`

**Pattern:** Follow existing `CreateEntityCommand.cs`.

```csharp
using System.ComponentModel;
using System.Threading;
using DynamicsCrm.DevKit.Tool.Tasks;
using Spectre.Console;
using Spectre.Console.Cli;

namespace DynamicsCrm.DevKit.Tool.Commands
{
    internal sealed class SolutionLayerSettings : CommandSettings
    {
        [CommandOption("--conn <CONNECTION>")]
        [Description("Dataverse connection string")]
        public string Connection { get; set; }

        [CommandOption("--solutions <SOLUTIONS>")]
        [Description("Comma-separated solution unique names to check")]
        public string Solutions { get; set; }

        [CommandOption("--output <OUTPUT>")]
        [Description("Output file path (optional). Default: console only")]
        public string Output { get; set; }

        public override ValidationResult Validate()
        {
            if (string.IsNullOrWhiteSpace(Connection))
                return ValidationResult.Error("--conn is required");
            if (string.IsNullOrWhiteSpace(Solutions))
                return ValidationResult.Error("--solutions is required");
            return ValidationResult.Success();
        }
    }

    internal sealed class SolutionLayerCommand : Command<SolutionLayerSettings>
    {
        public override int Execute(CommandContext context, SolutionLayerSettings settings, CancellationToken cancellation)
        {
            try
            {
                var solutionNames = settings.Solutions
                    .Split(',', System.StringSplitOptions.RemoveEmptyEntries | System.StringSplitOptions.TrimEntries);
                TaskSolutionLayer.Run(settings.Connection, solutionNames, settings.Output);
                return 0;
            }
            catch (System.Exception ex)
            {
                AnsiConsole.MarkupLine($"[red]Error:[/] {Markup.Escape(ex.Message)}");
                return 1;
            }
        }
    }
}
```

---

### File 2: [NEW] `Tasks/TaskSolutionLayer.cs`

**Pattern:** Follow `TaskCreateEntity.cs` for connection + Spectre.Console usage.

**Namespace:** `DynamicsCrm.DevKit.Tool.Tasks`

#### Required usings

```csharp
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Metadata.Query;
using Microsoft.Xrm.Sdk.Query;
using Newtonsoft.Json.Linq;
using Spectre.Console;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
```

---

#### Private Enum: `SolutionComponentType`

> [!IMPORTANT]
> The reference code uses a **project-specific generated enum** (`Abiz.Ht.Shared.Entities.SolutionComponentOptionSets.ComponentType`). DevKit Tool has no such enum. Define a minimal private enum covering the values actually used in the logic:

```csharp
private enum SolutionComponentType
{
    Entity = 1,
    Attribute = 2,
    Relationship = 3,
    // ... other types not directly switch-cased but needed for naming
    Saved_Query = 26,
    System_Form = 60,
    Saved_Query_Visualization = 59
}
```

> [!TIP]
> Only the values actually used in `switch`/comparison logic need entries. The `GetSolutionComponentName()` method receives the enum string representation (e.g. `"Attribute"`, `"Saved_Query"`) — so enum names must match the expected Dataverse API names after transformation.

---

#### Field

```csharp
private static List<Tuple<int, string>> componentDefs;
```

---

#### Method 1: `Run` (Entry Point)

```csharp
internal static void Run(string connectionString, string[] solutions, string outputFile)
```

**Logic:**

1. Connect to Dataverse:
   ```csharp
   AnsiConsole.MarkupLine("[cyan]Connecting to Dataverse...[/]");
   var serviceClient = new ServiceClient(connectionString);
   if (!serviceClient.IsReady)
       throw new Exception($"Cannot connect to Dataverse: {serviceClient.LastError}");
   AnsiConsole.MarkupLine("[green]Connected![/]");
   ```
2. Start `Stopwatch`
3. Call `LoadComponentDefinitions(serviceClient)`
4. Initialize `var result = new StringBuilder()`
5. For each solution name in `solutions`:
   - Append `CheckSolution(serviceClient, solutionName)` to `result`
   - If `outputFile != null`, write intermediate result to file (UTF-8 encoding, no BOM)
6. Stop stopwatch, append `$"\r\nTake: {stopwatch.Elapsed.TotalMinutes:F2} minutes\r\n"` to result
7. If `outputFile != null`:
   - Final write to file with UTF-8
   - `AnsiConsole.MarkupLine($"[green]Report saved to:[/] {Markup.Escape(outputFile)}")`
8. Else: `AnsiConsole.WriteLine(result.ToString())`

---

#### Method 2: `LoadComponentDefinitions`

```csharp
private static void LoadComponentDefinitions(ServiceClient serviceClient)
```

**Logic:**

1. `componentDefs = new List<Tuple<int, string>>()`
2. Query `solutioncomponentdefinition` — all records, `ColumnSet("solutioncomponenttype", "name")`, `NoLock=true`
   - Add: `Tuple<int, string>(d.GetAttributeValue<int>("solutioncomponenttype"), d.GetAttributeValue<string>("name"))`
3. Query `componenttype` global optionset:
   ```csharp
   var response = (RetrieveOptionSetResponse)serviceClient.Execute(
       new RetrieveOptionSetRequest { Name = "componenttype" });
   var options = ((OptionSetMetadata)response.OptionSetMetadata).Options;
   ```
   - Add: `Tuple<int, string>(o.Value.Value, o.Label?.UserLocalizedLabel?.Label ?? "")`
4. Add hardcoded: `Tuple<int, string>(80, "Model driven app")` — not returned by either query

> [!NOTE]
> Duplicate entries may exist between `solutioncomponentdefinition` and the optionset. Use `FirstOrDefault` when looking up by key — the first match wins, which is fine.

---

#### Method 3: `GetSolutionId`

```csharp
private static Guid GetSolutionId(ServiceClient serviceClient, string solutionName)
```

**Logic:**

1. FetchXML query on `solution` table where `uniquename = solutionName`, retrieve `solutionid`
2. Return `rows.Entities[0].Id`
3. If `rows.Entities.Count != 1` → throw `new Exception($"Solution '{solutionName}' not found in this environment")`

---

#### Method 4: `LoadComponents`

```csharp
private static List<Entity> LoadComponents(ServiceClient serviceClient, Guid solutionId)
```

> [!IMPORTANT]
> This is the most complex method. Follow the steps exactly.

**Step 4a: Load all solutioncomponent records**

```csharp
var allComponents = serviceClient.RetrieveMultiple(new QueryExpression("solutioncomponent")
{
    NoLock = true,
    // Optimization: only load the 3 columns we actually need
    ColumnSet = new ColumnSet("objectid", "componenttype", "rootcomponentbehavior"),
    Criteria = new FilterExpression
    {
        Conditions = { new ConditionExpression("solutionid", ConditionOperator.Equal, solutionId) }
    }
}).Entities.ToList();

var components = allComponents.ToList(); // working copy to add expanded components
```

**Step 4b: Filter activity `regardingobjectid` relationships (componenttype=10)**

```csharp
var activityRelComponents = allComponents
    .Where(c => c.GetAttributeValue<OptionSetValue>("componenttype")?.Value == 10)
    .ToList();

if (activityRelComponents.Count > 0)
{
    var activityQuery = new EntityQueryExpression
    {
        Criteria = new MetadataFilterExpression(LogicalOperator.And)
        {
            Conditions = { new MetadataConditionExpression("IsActivity", MetadataConditionOperator.Equals, true) }
        },
        Properties = new MetadataPropertiesExpression("MetadataId", "LogicalName", "ManyToOneRelationships")
    };
    var activityMetadatas = ((RetrieveMetadataChangesResponse)serviceClient.Execute(
        new RetrieveMetadataChangesRequest { Query = activityQuery })).EntityMetadata.ToList();

    var excludeIds = activityMetadatas
        .SelectMany(e => e.ManyToOneRelationships)
        .Where(r => r.ReferencingAttribute == "regardingobjectid")
        .Select(r => r.MetadataId)
        .ToHashSet(); // HashSet for O(1) lookup

    components = components
        .Except(allComponents.Where(c => excludeIds.Contains(c.GetAttributeValue<Guid>("objectid"))))
        .ToList();
}
```

**Step 4c: Expand FULL entities (rootcomponentbehavior=0, componenttype=1)**

```csharp
var fullEntities = allComponents
    .Where(c =>
        c.GetAttributeValue<OptionSetValue>("componenttype")?.Value == 1 &&
        c.GetAttributeValue<OptionSetValue>("rootcomponentbehavior")?.Value == 0)  // null-safe
    .ToList();

if (fullEntities.Any())
{
    // Query metadata for all full entities — only managed sub-components
    var entityQuery = new EntityQueryExpression
    {
        Criteria = new MetadataFilterExpression(LogicalOperator.And)
        {
            Conditions =
            {
                new MetadataConditionExpression("MetadataId", MetadataConditionOperator.In,
                    fullEntities.Select(fe => fe.GetAttributeValue<Guid>("objectid")).ToArray())
            }
        },
        Properties = new MetadataPropertiesExpression(
            "LogicalName", "Attributes",
            "OneToManyRelationships", "ManyToOneRelationships", "ManyToManyRelationships"),
        AttributeQuery = new AttributeQueryExpression
        {
            Properties = new MetadataPropertiesExpression("MetadataId"),
            Criteria = new MetadataFilterExpression
            {
                Conditions =
                {
                    new MetadataConditionExpression("IsManaged", MetadataConditionOperator.Equals, true)
                }
            }
        },
        RelationshipQuery = new RelationshipQueryExpression
        {
            Properties = new MetadataPropertiesExpression("MetadataId"),
            Criteria = new MetadataFilterExpression
            {
                Conditions =
                {
                    new MetadataConditionExpression("IsManaged", MetadataConditionOperator.Equals, true)
                }
            }
        }
    };
    var entityMetadatas = ((RetrieveMetadataChangesResponse)serviceClient.Execute(
        new RetrieveMetadataChangesRequest { Query = entityQuery })).EntityMetadata.ToList();

    var entityLogicalNames = entityMetadatas.Select(e => e.LogicalName).ToArray();

    // Add Attributes (componenttype=2)
    components.AddRange(entityMetadatas.SelectMany(e => e.Attributes)
        .Select(a => new Entity("solutioncomponent")
        {
            ["objectid"] = a.MetadataId,
            ["componenttype"] = new OptionSetValue(2)
        }));

    // Add ManyToManyRelationships (componenttype=3)
    components.AddRange(entityMetadatas.SelectMany(e => e.ManyToManyRelationships)
        .Select(r => new Entity("solutioncomponent")
        {
            ["objectid"] = r.MetadataId,
            ["componenttype"] = new OptionSetValue(3)
        }));

    // Add OneToManyRelationships (componenttype=3)
    components.AddRange(entityMetadatas.SelectMany(e => e.OneToManyRelationships)
        .Select(r => new Entity("solutioncomponent")
        {
            ["objectid"] = r.MetadataId,
            ["componenttype"] = new OptionSetValue(3)
        }));

    // Add ManyToOneRelationships (componenttype=3)
    // [BUG FIX from reference code: was ManyToManyRelationships again — wrong!]
    components.AddRange(entityMetadatas.SelectMany(e => e.ManyToOneRelationships)
        .Select(r => new Entity("solutioncomponent")
        {
            ["objectid"] = r.MetadataId,
            ["componenttype"] = new OptionSetValue(3)
        }));

    // Add System Forms (componenttype=60)
    var forms = serviceClient.RetrieveMultiple(new QueryExpression("systemform")
    {
        NoLock = true,
        ColumnSet = new ColumnSet("formid"),
        Criteria = new FilterExpression
        {
            Conditions =
            {
                new ConditionExpression("objecttypecode", ConditionOperator.In, entityLogicalNames)
            }
        }
    });
    components.AddRange(forms.Entities.Select(f => new Entity("solutioncomponent")
    {
        ["objectid"] = f.Id,
        ["componenttype"] = new OptionSetValue(60)
    }));

    // Add Saved Queries / Views (componenttype=26)
    var views = serviceClient.RetrieveMultiple(new QueryExpression("savedquery")
    {
        NoLock = true,
        ColumnSet = new ColumnSet("savedqueryid"),
        Criteria = new FilterExpression
        {
            Conditions =
            {
                new ConditionExpression("returnedtypecode", ConditionOperator.In, entityLogicalNames)
            }
        }
    });
    components.AddRange(views.Entities.Select(v => new Entity("solutioncomponent")
    {
        ["objectid"] = v.Id,
        ["componenttype"] = new OptionSetValue(26)
    }));

    // Add Charts (componenttype=59)
    var charts = serviceClient.RetrieveMultiple(new QueryExpression("savedqueryvisualization")
    {
        NoLock = true,
        ColumnSet = new ColumnSet("savedqueryvisualizationid"),
        Criteria = new FilterExpression
        {
            Conditions =
            {
                new ConditionExpression("primaryentitytypecode", ConditionOperator.In, entityLogicalNames)
            }
        }
    });
    components.AddRange(charts.Entities.Select(c => new Entity("solutioncomponent")
    {
        ["objectid"] = c.Id,
        ["componenttype"] = new OptionSetValue(59)
    }));
}

return components;
```

---

#### Method 5: `CheckSolution`

```csharp
private static string CheckSolution(ServiceClient serviceClient, string solutionName)
```

**Logic:**

1. `AnsiConsole.MarkupLine($"[cyan]Checking solution:[/] [yellow]{Markup.Escape(solutionName)}[/]")`
2. `var solutionId = GetSolutionId(serviceClient, solutionName)`
3. `var components = LoadComponents(serviceClient, solutionId)`
4. Group by componenttype value: `components.GroupBy(c => c.GetAttributeValue<OptionSetValue>("componenttype")?.Value)`
5. Build result starting with `$"SOLUTION: {solutionName}\r\n"`
6. For each group ordered by key:
   - `if (grp == null || grp.Key == null) continue`
   - Look up name: `var def = componentDefs.FirstOrDefault(d => d.Item1 == grp.Key.Value)`
   - `if (def == null) continue`
   - Append `$"\t{def.Item2} ({entities.Count})\r\n"`
   - Log: `AnsiConsole.MarkupLine($"  [dim]Checking:[/] {Markup.Escape(def.Item2)} ({entities.Count})")`
   - Append `CheckActiveLayers(serviceClient, entities)`
   - Append `"\r\n"`
7. `AnsiConsole.MarkupLine($"[green]Done:[/] [yellow]{Markup.Escape(solutionName)}[/]")`
8. Return result string

---

#### Method 6: `CheckActiveLayers`

```csharp
private static string CheckActiveLayers(ServiceClient serviceClient, List<Entity> entities)
```

**Logic:**

1. `var result = new StringBuilder()`
2. Create `ExecuteMultipleRequest` with `ContinueOnError=true`, `ReturnResponses=true`
3. For each entity in `entities`:
   - Get componenttype int value
   - Cast to enum: `var componentTypeEnum = (SolutionComponentType)componentTypeValue`
   - Get string name: `var componentApiName = GetSolutionComponentName(componentTypeEnum.ToString())`
   - Special override: `if (componentApiName == "418") componentApiName = "msdyn_dataflow"`
   - Build `RetrieveMultipleRequest`:
     ```csharp
     var req = new RetrieveMultipleRequest
     {
         Query = new QueryExpression("msdyn_componentlayer")
         {
             NoLock = true,
             ColumnSet = new ColumnSet(true),
             Criteria = new FilterExpression
             {
                 Conditions =
                 {
                     new ConditionExpression("msdyn_solutioncomponentname", ConditionOperator.Equal, componentApiName),
                     new ConditionExpression("msdyn_componentid", ConditionOperator.Equal,
                         entity.GetAttributeValue<Guid>("objectid"))
                 }
             }
         }
     };
     req["tag"] = componentTypeValue; // tag with int value for later lookup
     bulk.Requests.Add(req);
     ```
   - **When batch reaches 200:** execute, append `ProcessBatchResults(...)`, clear `bulk.Requests`
4. If remaining requests > 0: execute and process final batch
5. Return `result.ToString()`

---

#### Method 7: `ProcessBatchResults`

```csharp
private static string ProcessBatchResults(ServiceClient serviceClient,
    ExecuteMultipleRequest bulk, ExecuteMultipleResponse bulkResponse)
```

> [!IMPORTANT]
> Returns a **new string** with all found active-layer items. The caller appends this to its own StringBuilder.

**Logic:**

1. `var result = new StringBuilder()`
2. `var entityIds = new List<Guid>()` — collect attribute entity IDs for batch metadata lookup
3. First pass — iterate `bulkResponse.Responses`:
   - Skip if `response.Fault != null`
   - Get `entities` from `((RetrieveMultipleResponse)response.Response).EntityCollection.Entities`
   - Find `found = entities.FirstOrDefault(x => x.GetAttributeValue<string>("msdyn_solutionname") == "Active")`
   - If `found != null`:
     - Get `componentTypeValue = int.Parse(bulk.Requests[response.RequestIndex].Parameters["tag"].ToString())`
     - Cast: `var componentType = (SolutionComponentType)componentTypeValue`
     - **Switch on `componentType`:**
       - `SolutionComponentType.Attribute (2)`:
         - Parse `msdyn_componentjson` → find key `"entityid"` → get entity GUID
         - Add to `entityIds` if not already present
         - *(deferred — will output in second pass)*
       - `SolutionComponentType.Saved_Query (26)`:
         - Parse json → find key `"returnedtypecode"` → get string value
         - Append `$"\t\t[{returnedtypecode}].[{Markup.Escape(found.GetAttributeValue<string>("msdyn_name")?.Trim())}] - [{found.GetAttributeValue<Guid>("msdyn_componentid")}]\r\n"`
       - `SolutionComponentType.Saved_Query_Visualization (59)`:
         - Parse json → find key `"primaryentitytypecode"` → get string value
         - Append `$"\t\t[{primaryentitytypecode}].[...name...] - [{...id...}]\r\n"`
       - **Default (all other types)**:
         - `try`: Parse json → find key `"objecttypecode"` → get string value
           - Append `$"\t\t[{objecttypecode}].[{...name...}] - [{...id...}]\r\n"`
         - `catch`: Append `$"\t\t[{...name...}] - [{...id...}]\r\n"` (no entity prefix)

4. **If `entityIds.Any()` — batch metadata lookup for attributes:**
   ```csharp
   // [BUG FIX from reference code: was MetadataPropertiesExpression("MetadataId", "DisplayName")
   //  but code accessed .LogicalName — fixed to request LogicalName]
   var entityQuery = new EntityQueryExpression
   {
       Criteria = new MetadataFilterExpression(LogicalOperator.Or),
       Properties = new MetadataPropertiesExpression("MetadataId", "LogicalName") // FIXED
   };
   entityIds.ForEach(id =>
       entityQuery.Criteria.Conditions.Add(
           new MetadataConditionExpression("MetadataId", MetadataConditionOperator.Equals, id)));
   var emds = ((RetrieveMetadataChangesResponse)serviceClient.Execute(
       new RetrieveMetadataChangesRequest { Query = entityQuery })).EntityMetadata.ToList();
   ```

5. Second pass (attributes only) — re-iterate `bulkResponse.Responses` again:
   - Same fault/found logic
   - For `SolutionComponentType.Attribute` only:
     - Resolve `entityId` from json (same as step 3)
     - Find `emd = emds.FirstOrDefault(x => x.MetadataId == entityId)`
     - If found: parse json for key `"logicalname"` → attribute logical name
     - Append `$"\t\t[{emd.LogicalName}].[{logicalname}] - [{found.GetAttributeValue<Guid>("msdyn_componentid")}]\r\n"`

6. Return `result.ToString()`

---

#### Method 8: `GetSolutionComponentName`

```csharp
private static string GetSolutionComponentName(string value)
```

**Logic** — converts the `SolutionComponentType` enum's `.ToString()` name to the Dataverse `msdyn_solutioncomponentname` API value:

```csharp
value = value.Replace("_", string.Empty);           // Saved_Query -> SavedQuery
value = value.Replace("SDK", "Sdk");
value = value.Replace("SLA", "Sla");
value = value.Replace("KB", "Kb");
value = value.Replace("AI", "Ai");
return value;
```

**Examples:**

| SolutionComponentType enum | After transform | msdyn_solutioncomponentname |
|---------------------------|-----------------|----------------------------|
| `Attribute` | `Attribute` | `Attribute` |
| `System_Form` | `SystemForm` | `SystemForm` |
| `Saved_Query` | `SavedQuery` | `SavedQuery` |
| `Saved_Query_Visualization` | `SavedQueryVisualization` | `SavedQueryVisualization` |

> [!IMPORTANT]
> For enum value `418` (Dataflow), the reference code notes that the component type name from the enum resolves to `"418"` (not a named enum member). The special case handles this: `if (componentApiName == "418") componentApiName = "msdyn_dataflow"`. Consider adding value `418` to the enum as `Dataflow = 418` to make this cleaner, but the fallback is acceptable.

---

### File 3: [MODIFY] `Program.cs`

Add to `app.Configure(config => { ... })` block:

```csharp
config.AddCommand<SolutionLayerCommand>("solutionlayer")
      .WithDescription("Check unmanaged active solution layers in Dataverse solutions");
```

Update `WriteHelp()` method — add to the Commands section:

```csharp
"  [cyan]solutionlayer[/]           Check unmanaged active solution layers\n" +
```

Update `WriteHelp()` method — add to the Examples section:

```csharp
"  devkit-tool [cyan]solutionlayer[/] --conn [yellow]\"...\"[/] --solutions [yellow]\"Core,Client\"[/] --output [yellow]./report.txt[/]\n" +
```

---

## XrmToolBox Reference

XrmToolBox has two plugins relevant to this feature:

- **Solution Layers Explorer** — browse layers visually, no bulk removal
- **Unmanaged Active Layer Bulk Remover** — detect + remove active layers in bulk (GUI only)

Neither plugin supports CLI/automation use. Our `solutionlayer` command fills this gap.

> [!CAUTION]
> **`pac solution list-layers` does NOT exist.** Verified against official PAC CLI docs (https://learn.microsoft.com/en-us/power-platform/developer/cli/reference/solution, last updated 02/25/2026). The complete `pac solution` command list does NOT include any layer inspection capability.

---

## Verification Plan

```powershell
# 1. Build
dotnet build --configuration Debug "DynamicsCrm.DevKit.Tool\DynamicsCrm.DevKit.Tool.csproj"

# 2. Verify command appears in help
dotnet run --project "DynamicsCrm.DevKit.Tool\DynamicsCrm.DevKit.Tool.csproj" -- --help

# 3. Verify solutionlayer help
dotnet run --project "DynamicsCrm.DevKit.Tool\DynamicsCrm.DevKit.Tool.csproj" -- solutionlayer --help

# 4. Integration test (requires connection)
dotnet run --project "DynamicsCrm.DevKit.Tool\DynamicsCrm.DevKit.Tool.csproj" -- solutionlayer `
    --conn "AuthType=ClientSecret;..." `
    --solutions "Sol1,Sol2" `
    --output "./report.txt"
```

---

## Checklist for Implementing AI

- [ ] `SolutionComponentType` private enum defined with at minimum: `Entity=1, Attribute=2, Relationship=3, Saved_Query=26, Saved_Query_Visualization=59, System_Form=60`
- [ ] `ManyToOneRelationships` block added (NOT a second `ManyToManyRelationships`)
- [ ] Metadata query in attribute resolution uses `"LogicalName"` (NOT `"DisplayName"`)
- [ ] `rootcomponentbehavior?.Value == 0` with null-safe `?.` operator
- [ ] `ColumnSet` for `solutioncomponent` uses only needed columns
- [ ] `GetSolutionComponentName()` receives `enum.ToString()` as input, NOT an int
- [ ] `Program.cs` updated with new command + help text
- [ ] No `pac solution list-layers` reference anywhere
