# SolutionLayer Command

**Document Type:** Technical Specification + Review
**Status:** Reviewed & Corrected (v2)
**Reviewed by:** GitHub Copilot (Claude Sonnet 4.6)
**Reference code file:** `D:\azure\huutoangroup\CRM-HTG_ABIZ\Abiz.Ht.Console.Tools\Task\SolutionLayer.cs`
**PAC CLI docs verified:** https://learn.microsoft.com/en-us/power-platform/developer/cli/reference/solution

---

## Overview

The `solutionlayer` command checks for **unmanaged "Active" solution layers** across specified Dataverse solutions. Similar to XrmToolBox plugins like **Solution Layers Explorer** and **Unmanaged Active Layer Bulk Remover**, but as a CLI tool for automation and CI/CD pipelines.

**Use cases:**

- **ALM hygiene** — ensure all customizations are in managed solutions
- **Pre-deployment validation** — detect unmanaged changes before deploying
- **Environment health checks** — identify drift between environments

---

## What Are Solution Layers?

```
┌─────────────────────────┐
│  Active (Unmanaged)     │  <-- customizations NOT in any solution [WARNING]
├─────────────────────────┤
│  Solution C (Managed)   │
├─────────────────────────┤
│  Solution B (Managed)   │
├─────────────────────────┤
│  System (Base)          │
└─────────────────────────┘
```

The **Active layer** contains "loose" customizations that won't migrate with solutions and can silently override managed layer values.

---

## Full Entity vs Container Entity

When an entity is added to a solution, `rootcomponentbehavior` on `solutioncomponent` controls sub-component inclusion:

| Value | Name | What Gets Checked |
|-------|------|-------------------|
| **0** | Include Subcomponents | ALL managed attributes, relationships, forms, views, charts are expanded and individually checked |
| **1** | Do not include | Only explicitly added sub-components in `solutioncomponent` |
| **2** | Shell Only | Same as 1 — only explicit sub-components |

> [!IMPORTANT]
> When `rootcomponentbehavior = 0`, the `solutioncomponent` table does NOT contain rows for each attribute/form/view/chart — they are **implicitly included**. The code must expand them via separate metadata and table queries.

---

## Usage

```powershell
devkit-tool solutionlayer --conn <CONNECTION> --solutions <SOLUTIONS> [--output <FILE>]
```

| Argument | Required | Description |
|----------|----------|-------------|
| `--conn` | Yes | Dataverse connection string (AuthType=ClientSecret;...) |
| `--solutions` | Yes | Comma-separated solution unique names |
| `--output` | No | Output file path (default: console output only) |

### Examples

```powershell
# Single solution
devkit-tool solutionlayer --conn "AuthType=ClientSecret;..." --solutions "MySolution"

# Multiple solutions, save to file
devkit-tool solutionlayer --conn "AuthType=ClientSecret;..." --solutions "Core,Client,Server" --output "report.txt"
```

---

## Output Format

```
SOLUTION: MySolution_Core
    Entity (3)
        [account].[new_customfield] - [guid]
    System Form (1)
        [account].[Account - Custom Form] - [guid]
    Saved Query (2)
        [contact].[Active Contacts Custom] - [guid]

Take: 2.35 minutes
```

---

## How It Works

1. **Connect** to Dataverse using `ServiceClient` (Microsoft.PowerPlatform.Dataverse.Client)
2. **Load Component Definitions** — from `solutioncomponentdefinition` table + `componenttype` global optionset (60+ types), plus hardcoded `{80, "Model driven app"}`
3. **For each solution**:
   a. Resolve solution name → ID via `solution` table FetchXML
   b. Load all `solutioncomponent` records for that solution
   c. **Filter Activity relationships** — exclude auto-generated `regardingobjectid` relationships (componenttype=10) on activity entities
   d. **Expand full entities** — for entities with `rootcomponentbehavior=0`, query metadata + tables to add all managed: attributes (type 2), relationships (type 3 — M:N, 1:N, N:1), forms (type 60), views (type 26), charts (type 59)
4. **Check Active Layers** — batch query `msdyn_componentlayer` (200/batch via `ExecuteMultiple`) looking for `msdyn_solutionname == "Active"`
5. **Format Results** — parse `msdyn_componentjson` for display-friendly entity names

---

## Comparison with XrmToolBox

| Feature | DevKit Tool (`devkit-tool solutionlayer`) | XrmToolBox: Solution Layers Explorer | XrmToolBox: Unmanaged Active Layer Bulk Remover |
|---------|-------------------------------------------|-------------------------------------|------------------------------------------------|
| Detect active layers | Yes | Yes | Yes |
| Remove active layers | No (out of scope) | No | Yes |
| CLI / automation / CI-CD | Yes | No (GUI only) | No (GUI only) |
| Multiple solutions in one run | Yes | Per-solution manually | Per-solution manually |
| File output / report | Yes | No | No |
| Batch query (ExecuteMultiple) | Yes (200/batch) | Yes | Yes |

> [!NOTE]
> PAC CLI (`pac solution`) does **NOT** have a `list-layers` or any layer inspection command. The full set of `pac solution` subcommands (as of March 2026) is: `add-license`, `add-reference`, `add-solution-component`, `check`, `clone`, `create-settings`, `delete`, `export`, `import`, `init`, `list`, `online-version`, `pack`, `publish`, `sync`, `unpack`, `upgrade`, `version`. None of these provide Active layer detection.

---

## Key Dataverse Tables

| Table | Purpose |
|-------|---------|
| `solution` | Resolve unique name → solution ID |
| `solutioncomponent` | List components in solution |
| `solutioncomponentdefinition` | Component type definitions (name mapping) |
| `msdyn_componentlayer` | Layer information per component instance |
| `systemform` | Forms — expanded for full entities (rootcomponentbehavior=0) |
| `savedquery` | Views — expanded for full entities |
| `savedqueryvisualization` | Charts — expanded for full entities |

### Key Fields on `msdyn_componentlayer`

| Field | Purpose |
|-------|---------|
| `msdyn_solutionname` | Solution name — `"Active"` means unmanaged layer |
| `msdyn_componentid` | GUID of the component |
| `msdyn_solutioncomponentname` | API name of the component type (e.g. `"Attribute"`, `"SystemForm"`) |
| `msdyn_componentjson` | JSON blob with component metadata (name, entityid, logicalname, etc.) |
| `msdyn_name` | Display name of the component |

---

## Reference Code Analysis

The reference implementation is `SolutionLayer.cs` from the `Abiz.Ht.Console.Tools` project. It is project-specific (hardcoded solution names, uses `CrmServiceClient` from old SDK). Key observations:

| Item | Reference Code | DevKit Tool Target |
|------|---------------|-------------------|
| SDK connector | `CrmServiceClient` (old Microsoft.Xrm.Tooling.Connector) | `ServiceClient` (Microsoft.PowerPlatform.Dataverse.Client) |
| Target framework | .NET Framework | .NET 10.0 |
| ComponentType naming | Project-specific `ComponentType` enum (generated early-bound) | Must define a private enum or use int constants |
| Solutions | Hardcoded in code | Passed via `--solutions` CLI argument |
| Connection | Static `AppSettings.Service` | Passed via `--conn` CLI argument |

---

## Bugs in Reference Code (Confirmed)

### Bug 1: `ManyToManyRelationships` Added Twice Instead of `ManyToOneRelationships`

**Location:** `LoadComponents()` method, inside the full-entity expansion block.

```csharp
// CORRECT (lines 229-233)
_components.AddRange(emds.SelectMany(e => e.OneToManyRelationships).Select(...));

// BUG: This block (lines 234-241) should be ManyToOneRelationships, not ManyToMany again
_components.AddRange(emds.SelectMany(e => e.ManyToManyRelationships).Select(...)); // <-- WRONG
```

**Impact:** `ManyToOneRelationships` are **never checked** for Active layers. Any unmanaged N:1 relationship won't appear in the report.

**Fix:** Replace the second `ManyToManyRelationships` block with `ManyToOneRelationships`.

### Bug 2: Wrong Metadata Property in Attribute Entity Lookup

**Location:** `CheckResultV2()` method, inside the `if (entityIds.Any())` block.

```csharp
// BUG: Requests "DisplayName" but then accesses found2.LogicalName
Properties = new MetadataPropertiesExpression("MetadataId", "DisplayName")
```

**Impact:** `found2.LogicalName` will return `null` because `LogicalName` was never requested from the API.

**Fix:** Change to `MetadataPropertiesExpression("MetadataId", "LogicalName")`.

---

## Additional Issues to Address in Implementation

| # | Issue | Location | Fix |
|---|-------|----------|-----|
| 1 | `rootcomponentbehavior` `.Value` called without null check | `LoadComponents()` | Use `?.Value == 0` |
| 2 | ComponentType int values are used raw | `CheckActiveLayerV2()` | Define local `private enum SolutionComponentType` |
| 3 | `ColumnSet(true)` on `solutioncomponent` loads many unused columns | `LoadComponents()` | Use `ColumnSet("objectid", "componenttype", "rootcomponentbehavior")` |
| 4 | Form/view/chart expansion may produce duplicates across solutions | `LoadComponents()` | Use `.Distinct()` or add deduplication on objectid |
| 5 | No progress indication during batch execution | `CheckActiveLayerV2()` | Log `[i/total]` progress via AnsiConsole |
| 6 | `componentsDefs` uses wrong field type (`int` vs `OptionSetValue`) | `Load_componentsDefs()` | `GetAttributeValue<int>("solutioncomponenttype")` is correct for this field |
