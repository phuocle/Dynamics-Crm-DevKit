# manage_view — Custom Icon & Cell Attribute Patching (v2)

## Context

Reference: [Display custom icons alongside values in list views](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/display-custom-icons-instead)

Dataverse supports custom icons in list views via two LayoutXML `<cell>` attributes:
- `imageproviderwebresource` — JS web resource name (e.g., `new_/js/viewIcons.js`)
- `imageproviderfunctionname` — JS function name (e.g., `displayIconTooltip`)

The JS function receives `(rowData, userLCID)` and returns `[imageWebResourceName, tooltipText]`.

### Current State

| Area | Status |
|------|--------|
| **LayoutXml.xsd** | Already has `imageproviderwebresource` and `imageproviderfunctionname` on `<cell>` (lines 38-39) |
| **XSD validation** | Works — these attributes pass validation |
| **View detail output** | Does NOT show icon attributes in the `[Columns]` summary section |
| **Instructions resource** | Mentions icon attributes briefly in hidden column use case but no dedicated section |
| **Sync validation** | No change needed — cell patching doesn't add/remove cells |
| **manage_webresource** | Already exists — can list/create/update web resources |

---

## Goal

1. Add a `cell_updates_json` parameter to `manage_view action='update'` so users can **patch cell attributes** (icon config, ishidden, etc.) without rebuilding full LayoutXML.
2. Show icon/custom attributes in `manage_view action='detail'` output.
3. Update `docs://instructions_for_views` with complete custom icon documentation.

## Non-Goals

- Do not create/manage JavaScript web resources (use `manage_webresource` for that).
- Do not validate runtime correctness of JavaScript function body.
- Do not change behavior of create/rename/undo/list actions.

---

## Files to Modify

| File | Change |
|------|--------|
| `DynamicsCrm.DevKit.Cli/Mcp/Tools/Models/StructuredResults.cs` | Add `CellUpdateInstruction` DTO |
| `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageViewTool.cs` | Add parameter, parse/validate, wire into update flow, improve detail output |
| `DynamicsCrm.DevKit.Cli/Mcp/Tools/Helper/ViewXmlHelper.cs` | Add `ApplyCellAttributeUpdates()` patching method |
| `DynamicsCrm.DevKit.Cli/Mcp/Resources/InstructionResources.cs` | Add custom icons section to `docs://instructions_for_views` |

### Files that MUST NOT change

- `ViewBackupHelper.cs` — backup/restore unchanged
- `LayoutXml.xsd` — already supports icon attributes
- `ViewXmlHelper.ValidateSync()` — cell patches don't add/remove cells, sync unaffected

---

## Implementation Tasks

### Task 1: CellUpdateInstruction DTO

**File:** `StructuredResults.cs`

```csharp
internal sealed class CellUpdateInstruction
{
    [JsonPropertyName("cell_name")]
    public string CellName { get; set; }

    [JsonPropertyName("set_attributes")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public Dictionary<string, string> SetAttributes { get; set; }

    [JsonPropertyName("remove_attributes")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public List<string> RemoveAttributes { get; set; }
}
```

### Task 2: ParseCellUpdates Helper

**File:** `ManageViewTool.cs`

Add static method:
```csharp
private static (List<CellUpdateInstruction> Instructions, string Error) ParseCellUpdates(string cellUpdatesJson)
```

Validation rules:
- Invalid JSON → `"Error: cell_updates_json is not valid JSON — {detail}"`
- Missing `cell_name` → `"Error: cell_updates_json item at index {i} is missing required 'cell_name'"`
- Neither `set_attributes` nor `remove_attributes` → error
- Duplicate `cell_name` → error
- Protected: `name` cannot be set or removed; `width` cannot be removed (but CAN be set)

### Task 3: ApplyCellAttributeUpdates

**File:** `ViewXmlHelper.cs`

```csharp
public static (string PatchedXml, List<string> Errors, List<string> Warnings) ApplyCellAttributeUpdates(
    string layoutXml, IReadOnlyList<CellUpdateInstruction> updates)
```

Behavior:
1. Parse layoutXml as XDocument
2. For each update: find `<cell>` by name (case-insensitive), apply set/remove
3. If cell not found → error
4. Check icon attribute pairing: warn if only one of the pair is present
5. Return patched XML or errors

### Task 4: Wire into Update Flow

**File:** `ManageViewTool.cs`

**4a. Add parameter** to `manage_view` signature:
```csharp
[Description("JSON array of cell attribute updates. Each item: {cell_name, set_attributes, remove_attributes}. " +
    "Patch cell attributes (e.g., imageproviderwebresource, imageproviderfunctionname, ishidden) " +
    "without rebuilding full LayoutXML. Can be used alone or with layoutxml."
)] string cell_updates_json = "",
```

**4b. Update tool description:**
```
- action='update': Modify LayoutXML/FetchXML. Requires: view_id + (layoutxml and/or cell_updates_json)
```

**4c. Relax the current hard check:**
```csharp
// BEFORE:
if (string.IsNullOrWhiteSpace(layoutxml))
    return ErrorResult("Error: layoutxml is required for 'update' action.");

// AFTER:
if (string.IsNullOrWhiteSpace(layoutxml) && string.IsNullOrWhiteSpace(cell_updates_json))
    return ErrorResult("Error: at least one of layoutxml or cell_updates_json is required for 'update' action.");
```

**4d. Patch flow** — inserted after retrieving current view and before validation:
1. Determine base layout: if `layoutxml` provided → use it; else → use current view's layoutxml
2. If `cell_updates_json` provided: parse → validate → apply patches
3. Call `EnsureObjectTypeCode` on final layout (after patching, before validation)
4. Continue existing validation/backup/update/publish pipeline

**4e. UpdatedParts values:**
- Patch only: `"LayoutXML (cell patch)"`
- Patch + explicit layoutxml: `"LayoutXML (cell patch applied)"`
- Patch + fetchxml: `"LayoutXML (cell patch) + FetchXML"`
- Existing behavior unchanged when cell_updates_json empty

### Task 5: Improve Detail Output

**File:** `ManageViewTool.cs`, method `GetViewDetail()`, cell iteration loop (~line 891)

Add icon attribute display:
```csharp
var iconWr = cell.Attribute("imageproviderwebresource")?.Value;
var iconFn = cell.Attribute("imageproviderfunctionname")?.Value;
if (iconWr != null || iconFn != null)
{
    var iconParts = new List<string>();
    if (iconWr != null) iconParts.Add(iconWr);
    if (iconFn != null) iconParts.Add(iconFn);
    parts.Add($"icon: {string.Join(" → ", iconParts)}");
}
```

**Before:**
```
  statuscode (100px, hidden)
```

**After:**
```
  statuscode (100px, hidden, icon: new_/js/viewIcons.js → displayIconTooltip)
```

Also update `[Columns]` header:
```
[Columns] 5 columns (1 hidden, 1 with custom icon)
```

### Task 6: Update Instructions Resource

**File:** `InstructionResources.cs`, method `ViewInstructions()`

Add section after "Hidden Columns" and before "After Making Changes":

```markdown
## Custom Icons in Views (imageproviderwebresource / imageproviderfunctionname)

### LayoutXML Attributes
- `imageproviderwebresource` — JS web resource name (e.g., `new_/js/viewIcons.js`)
- `imageproviderfunctionname` — JS function name (e.g., `MyNamespace.displayIconTooltip`)

### LayoutXML Example
<grid name="resultset" object="3" jump="name" select="1" icon="1" preview="1">
  <row name="result" id="opportunityid">
    <cell name="name" width="300" />
    <cell name="opportunityratingcode" width="100"
          imageproviderwebresource="new_/js/ratingicons.js"
          imageproviderfunctionname="displayIconTooltip" />
  </row>
</grid>

### JavaScript Function Signature
function displayIconTooltip(rowData, userLCID) {
    var str = JSON.parse(rowData);
    var coldata = str.opportunityratingcode_Value;
    return ["new_Hot", "Opportunity is Hot"];
}

### Rules
- JS function receives entire row as JSON + user LCID
- Access column values via `{columnname}_Value` (integer for option sets)
- Return `[imageWebResourceName, tooltipText]`
- Image web resources: 16x16 PNG/JPG/GIF
- `imageproviderwebresource` is the JS logic file, NOT the icon image
- Both attributes should be on the same `<cell>` element
- Works on primary column (replaces icon) and non-primary (adds secondary icon)
- Use hidden columns to provide data for icon logic
- JS Promise supported in Unified Interface (async data retrieval)
- Do NOT use synchronous XMLHttpRequest

### Cell Attribute Patching (cell_updates_json)
Use `cell_updates_json` with `action='update'` to patch cell attributes without full LayoutXML:

[{"cell_name":"statuscode","set_attributes":{"imageproviderwebresource":"new_/js/viewIcons.js","imageproviderfunctionname":"displayIconTooltip"}}]

Modes:
1. Patch only: `cell_updates_json` without `layoutxml` — patches current view
2. Combined: both `layoutxml` + `cell_updates_json` — patch applied on supplied layout
3. Full replace: only `layoutxml` (existing behavior)

Source: https://learn.microsoft.com/en-us/power-apps/maker/data-platform/display-custom-icons-instead
```

---

## Error/Warning Contract

| Type | Message |
|------|---------|
| Error | `cell_updates_json is not valid JSON — {detail}` |
| Error | `cell_updates_json item at index {i} is missing required 'cell_name'` |
| Error | `cell_updates_json item '{name}' must have at least one of 'set_attributes' or 'remove_attributes'` |
| Error | `cell_updates_json has duplicate cell_name '{name}' at indices {i} and {j}` |
| Error | `cell_updates_json cannot set or remove protected attribute 'name' on cell '{name}'` |
| Error | `cell_updates_json cannot remove protected attribute 'width' from cell '{name}' (use set_attributes to resize)` |
| Error | `Cell '{name}' not found in LayoutXML` |
| Error | `At least one of layoutxml or cell_updates_json is required for 'update' action` |
| Warning | `Cell '{name}' has imageproviderwebresource without imageproviderfunctionname` |
| Warning | `Cell '{name}' has imageproviderfunctionname without imageproviderwebresource` |

---

## Test Plan

| # | Test Case | Expected |
|---|-----------|----------|
| 1 | `ParseCellUpdates` — valid JSON | Parsed, no error |
| 2 | `ParseCellUpdates` — invalid JSON | Error |
| 3 | `ParseCellUpdates` — missing cell_name | Error |
| 4 | `ParseCellUpdates` — no set/remove | Error |
| 5 | `ParseCellUpdates` — duplicate cell_name | Error |
| 6 | `ParseCellUpdates` — protected attributes | Error |
| 7 | `ApplyCellAttributeUpdates` — set icon attrs | Patched XML correct |
| 8 | `ApplyCellAttributeUpdates` — remove attribute | Attribute removed |
| 9 | `ApplyCellAttributeUpdates` — cell not found | Error |
| 10 | `ApplyCellAttributeUpdates` — incomplete icon pair | Warning |
| 11 | `ApplyCellAttributeUpdates` — case-insensitive match | Works |
| 12 | Integration: patch mode (no layoutxml) | View updated |
| 13 | Integration: combined mode | Patch applied on supplied layout |
| 14 | Regression: full layoutxml, no cell_updates | Works as before |

---

## Implementation Order

1. `CellUpdateInstruction` DTO → `StructuredResults.cs`
2. `ParseCellUpdates` → `ManageViewTool.cs`
3. `ApplyCellAttributeUpdates` → `ViewXmlHelper.cs`
4. Wire into `HandleUpdate` (relax check, add patch logic)
5. Update tool description + parameter
6. Improve detail output in `GetViewDetail`
7. Update `InstructionResources.cs` docs
8. Unit tests
9. `/claude-build-cli`

## Build/Verify

Per project rules — run `/claude-build-cli` after changes (never `dotnet build` directly).
