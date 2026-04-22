# manage_view — Implementation Plan for Custom Icon + User-Defined Cell Attributes

## Context
Extend MCP tool `manage_view` to support updating view column (`<cell>`) attributes without rebuilding the full LayoutXML.

Reference: https://learn.microsoft.com/en-us/power-apps/maker/data-platform/display-custom-icons-instead

Custom icon in list views relies on 2 LayoutXML cell attributes:
- `imageproviderwebresource`
- `imageproviderfunctionname`

### Files to modify
| File | Purpose |
|------|---------|
| `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageViewTool.cs` | Tool entry, update flow, detail formatter |
| `DynamicsCrm.DevKit.Cli/Mcp/Tools/Helper/ViewXmlHelper.cs` | XML patching helper |
| `DynamicsCrm.DevKit.Cli/Mcp/Tools/Models/StructuredResults.cs` | DTO for JSON parsing |
| `DynamicsCrm.DevKit.Cli/Mcp/Resources/InstructionResources.cs` | docs://instructions_for_views |

### Files that MUST NOT change
- `ViewBackupHelper.cs` — no modifications needed
- `ViewXmlHelper.ValidateSync()` — sync validation stays as-is (cell patches don't add/remove cells)

## Goal
Enable `manage_view` update flow to support:
1. Standard custom icon attributes (`imageproviderwebresource`, `imageproviderfunctionname`).
2. Arbitrary user-defined `<cell>` attributes (not hardcoded to only icon keys).
3. Backward compatibility with existing `layoutxml`-based update behavior.

## Non-Goals
- Do not create/manage JavaScript web resources themselves.
- Do not validate runtime correctness of JavaScript function body.
- Do not change semantics of create/rename/undo/list except where explicitly listed below.

## Design Principles
- Backward compatible first.
- Strict on malformed request shape; flexible on custom attributes.
- Keep existing safety pipeline: backup → validate → sync-check → update → publish.
- Fail with actionable error messages.

## Proposed API Extension

Add new optional parameter to `manage_view`:
- `cell_updates_json` (string, optional, default `""`)

### JSON shape
```json
[
  {
    "cell_name": "statuscode",
    "set_attributes": {
      "imageproviderwebresource": "new_/js/viewIcons.js",
      "imageproviderfunctionname": "displayIconTooltip",
      "ishidden": "1"
    },
    "remove_attributes": ["disableSorting"]
  }
]
```

### Rules
- `cell_name`: required, case-insensitive match to `<cell name="...">`.
- `set_attributes`: optional dictionary of `attributeName → stringValue`.
- `remove_attributes`: optional string array.
- At least one of `set_attributes` or `remove_attributes` must be provided per item.
- Unknown attributes are allowed (user-defined support).
- Protected attributes (`name`) cannot be set or removed via `set_attributes`/`remove_attributes` — return error if attempted. `width` cannot be removed but CAN be set (to resize a column).

## Action Behavior Matrix

### `action='update'`
Support 3 valid modes:
1. **Existing mode**: user passes full `layoutxml` (works as today, no breaking change).
2. **Patch mode**: user passes `cell_updates_json` only — tool loads current layoutxml from Dataverse, patches cells, then proceeds.
3. **Combined mode**: user passes `layoutxml` + `cell_updates_json` — apply patch on the supplied layoutxml.

**Critical change**: Current code at `HandleUpdate` line 368 has `if (string.IsNullOrWhiteSpace(layoutxml)) return ErrorResult(...)`. This check MUST be relaxed to: require at least one of `layoutxml` or `cell_updates_json`.

### Other actions
- `list`, `detail`, `create`, `rename`, `undo`: no breaking changes.
- `detail`: improve column output to surface icon/custom cell attributes (see Task 5).

---

## Implementation Tasks

### Task 1: DTO + Parsing

**File**: `DynamicsCrm.DevKit.Cli/Mcp/Tools/Models/StructuredResults.cs`

Add internal DTO class:
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

**File**: `ManageViewTool.cs`

Add static parse+validate helper method:
```csharp
private static (List<CellUpdateInstruction> Instructions, string Error) ParseCellUpdates(string cellUpdatesJson)
```

Validation errors to return:
- Invalid JSON → `"Error: cell_updates_json is not valid JSON — {parseError}"`
- Missing `cell_name` → `"Error: cell_updates_json item at index {i} is missing required 'cell_name'"`
- Neither `set_attributes` nor `remove_attributes` → `"Error: cell_updates_json item '{cellName}' must have at least one of 'set_attributes' or 'remove_attributes'"`
- Duplicate `cell_name` → `"Error: cell_updates_json has duplicate cell_name '{cellName}' at indices {i} and {j}"`
- `name` in `set_attributes` or `remove_attributes` → `"Error: cell_updates_json cannot set or remove protected attribute 'name' on cell '{cellName}'"`
- `width` in `remove_attributes` → `"Error: cell_updates_json cannot remove protected attribute 'width' from cell '{cellName}' (use set_attributes to resize)"`

### Task 2: LayoutXML Patching Helper

**File**: `DynamicsCrm.DevKit.Cli/Mcp/Tools/Helper/ViewXmlHelper.cs`

Add public static method:
```csharp
public static (string PatchedXml, List<string> Errors, List<string> Warnings) ApplyCellAttributeUpdates(
    string layoutXml, IReadOnlyList<CellUpdateInstruction> updates)
```

Behavior:
1. Parse `layoutXml` as `XDocument`.
2. For each `CellUpdateInstruction`:
   - Locate `<cell>` by `name` attribute (case-insensitive compare using `StringComparison.OrdinalIgnoreCase`).
   - If cell not found → add to errors: `"Cell '{cellName}' not found in LayoutXML"`.
   - For each `set_attributes` entry: set/overwrite the XML attribute value on the `<cell>` element.
   - For each `remove_attributes` entry: remove the XML attribute if it exists (no error if already absent).
3. After all updates applied, check icon pair warning:
   - If a cell has `imageproviderwebresource` but NOT `imageproviderfunctionname` → add warning.
   - If a cell has `imageproviderfunctionname` but NOT `imageproviderwebresource` → add warning.
4. If any errors → return errors (do not return patched XML).
5. Return patched XML using current project convention: `doc.Root.ToString(SaveOptions.DisableFormatting)`.

**Important**: This method only modifies attributes on existing `<cell>` elements. It does NOT add or remove cells. Therefore `ValidateSync` (which checks FetchXML `<attribute>` ↔ LayoutXML `<cell>` mapping) will pass without issues on patched output.

### Task 3: Wire into Update Flow

**File**: `ManageViewTool.cs`

**3a. Add parameter** to `manage_view` method signature:
```csharp
[Description("JSON array of cell attribute updates. Each item: {cell_name, set_attributes, remove_attributes}. " +
    "Use to patch cell attributes (e.g., imageproviderwebresource, imageproviderfunctionname, ishidden) " +
    "without rebuilding the full LayoutXML. Can be used alone (patch current view) or with layoutxml (patch supplied layout)."
)] string cell_updates_json = "",
```

**3b. Update tool description** on `[Description]` attribute of `manage_view`:
- Change `"- action='update': Modify LayoutXML/FetchXML. Requires: view_id + layoutxml\n"` to:
- `"- action='update': Modify LayoutXML/FetchXML. Requires: view_id + (layoutxml and/or cell_updates_json)\n"`

**3c. Update HandleUpdate** — replace the current hard check:
```csharp
// BEFORE (line 368):
if (string.IsNullOrWhiteSpace(layoutxml))
    return ErrorResult("Error: layoutxml is required for 'update' action.");

// AFTER:
if (string.IsNullOrWhiteSpace(layoutxml) && string.IsNullOrWhiteSpace(cell_updates_json))
    return ErrorResult("Error: at least one of layoutxml or cell_updates_json is required for 'update' action.");
```

**3d. Insert cell patch logic** in `HandleUpdate`, after retrieving the current view and before validation:

```
Step 1: Determine base layout XML
  - If layoutxml provided → use it (strip declaration only — do NOT call EnsureObjectTypeCode yet)
  - If layoutxml empty → use current view's layoutxml from Dataverse

Step 2: If cell_updates_json provided:
  a) Parse + validate JSON via ParseCellUpdates()
  b) If parse error → return ErrorResult
  c) Call ViewXmlHelper.ApplyCellAttributeUpdates(baseLayoutXml, instructions)
  d) If patch errors → return ErrorResult with cell names not found
  e) Collect warnings for icon pair issues
  f) Use patched XML as the new layout XML going forward

Step 3: Call EnsureObjectTypeCode on the final layout XML (after patching, before validation)
Step 4: Continue existing validation pipeline (RunValidation, ValidateFieldNames, ValidateFetchXmlExpression)
Step 5: Continue existing backup/update/publish flow
```

**3e. Pass cell_updates_json** through from `manage_view` to `HandleUpdate`:
```csharp
"update" => HandleUpdate(entityName, view_id, layoutxml, fetchxml, cell_updates_json, validate, backup, auto_publish),
```

Update `HandleUpdate` signature accordingly.

**3f. Include cell update warnings in result**: If `ApplyCellAttributeUpdates` returned warnings, append them to the success text output and include in `UpsertViewResult.ValidationWarnings`.

**3g. Update `UpdatedParts` value**: When patch mode is used, set `UpdatedParts` to include patch info:
- Patch only (no explicit layoutxml, no fetchxml): `"LayoutXML (cell patch)"`
- Patch + explicit layoutxml (no fetchxml): `"LayoutXML (cell patch applied)"`
- Patch + fetchxml: `"LayoutXML (cell patch) + FetchXML"`
- Existing behavior unchanged when cell_updates_json is empty.

### Task 4: Improve Detail Output

**File**: `ManageViewTool.cs` — method `GetViewDetail`, inside the cell iteration loop (around line 888–905).

Current code already shows `ishidden` and `width`. Extend the cell display to also show:
- `imageproviderwebresource` — if present on the `<cell>`
- `imageproviderfunctionname` — if present on the `<cell>`

Add these to the `parts` list, same pattern as `ishidden`:
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

Example output line:
```
  statuscode (100px, hidden, icon: new_/js/viewIcons.js → displayIconTooltip)
```

Also update `[Columns]` header when any cell has icon config:
```
[Columns] 5 columns (1 hidden, 1 with custom icon)
```

### Task 5: Update Docs Resource

**File**: `DynamicsCrm.DevKit.Cli/Mcp/Resources/InstructionResources.cs`

Add a new section to `ViewInstructions()` return value, after the "Hidden Columns" section and before "After Making Changes":

```markdown
## Custom Icons and Cell Attribute Patching (cell_updates_json)

You can modify cell-level attributes (e.g., custom icons) without rebuilding the full LayoutXML
by using the `cell_updates_json` parameter on `manage_view` with `action='update'`.

### JSON Format
```json
[
  {
    "cell_name": "statuscode",
    "set_attributes": {
      "imageproviderwebresource": "new_/js/viewIcons.js",
      "imageproviderfunctionname": "displayIconTooltip"
    }
  }
]
```

### Custom Icon Requirements
- Both `imageproviderwebresource` AND `imageproviderfunctionname` should be set together (tool emits a **warning** if only one is present, but does NOT block the update — the user may be setting them in stages)
- The web resource must exist (use manage_webresource to verify)
- The JavaScript function signature: `function(rowData, userLCID) { return [iconUrl, tooltip]; }`
- Source: https://learn.microsoft.com/en-us/power-apps/maker/data-platform/display-custom-icons-instead

### Usage Modes
1. **Patch only**: pass `cell_updates_json` without `layoutxml` — patches current view in Dataverse
2. **Combined**: pass both `layoutxml` + `cell_updates_json` — patch applied on supplied layout
3. **Full replace**: pass only `layoutxml` (existing behavior, unchanged)

### Rules
- `cell_name` must match an existing `<cell name="...">` in the LayoutXML (case-insensitive)
- Protected attributes (`name`, `width`) cannot be removed
- Unknown/custom attributes are allowed
- Backup + validation still enforced
```

### Task 6: Update UpsertViewResult (minimal)

**File**: `DynamicsCrm.DevKit.Cli/Mcp/Tools/Models/StructuredResults.cs`

No new fields needed. The existing `UpdatedParts` field will carry the patch info (e.g., `"LayoutXML (cell patch)"`), and `ValidationWarnings` will carry icon pair warnings. This keeps the schema backward compatible.

---

## Error/Warning Contract

Use these consistent messages in the update path:

| Type | Message |
|------|---------|
| Error | `Error: cell_updates_json is not valid JSON — {detail}` |
| Error | `Error: cell_updates_json item at index {i} is missing required 'cell_name'` |
| Error | `Error: cell_updates_json item '{name}' must have at least one of 'set_attributes' or 'remove_attributes'` |
| Error | `Error: cell_updates_json has duplicate cell_name '{name}' at indices {i} and {j}` |
| Error | `Error: cell_updates_json cannot set or remove protected attribute 'name' on cell '{name}'` |
| Error | `Error: cell_updates_json cannot remove protected attribute 'width' from cell '{name}' (use set_attributes to resize)` |
| Error | `Error: cell '{name}' not found in LayoutXML` |
| Error | `Error: at least one of layoutxml or cell_updates_json is required for 'update' action.` |
| Warning | `Warning: cell '{name}' has imageproviderwebresource without imageproviderfunctionname` |
| Warning | `Warning: cell '{name}' has imageproviderfunctionname without imageproviderwebresource` |

---

## Test Plan

Target: CLI unit tests (MSTest, net10.0) in `DynamicsCrm.DevKit.UnitTests/`.

| # | Test Case | Expected |
|---|-----------|----------|
| 1 | `ParseCellUpdates` — valid JSON with both set and remove | Parsed list, no error |
| 2 | `ParseCellUpdates` — invalid JSON | Error message returned |
| 3 | `ParseCellUpdates` — missing cell_name | Error message returned |
| 4 | `ParseCellUpdates` — neither set nor remove | Error message returned |
| 5 | `ParseCellUpdates` — duplicate cell_name | Error message returned |
| 6a | `ParseCellUpdates` — set `name` attribute | Error message returned |
| 6b | `ParseCellUpdates` — remove `name` attribute | Error message returned |
| 6c | `ParseCellUpdates` — remove `width` attribute | Error message returned |
| 6d | `ParseCellUpdates` — set `width` attribute | Allowed (resize) |
| 7 | `ApplyCellAttributeUpdates` — set icon attrs on existing cell | Patched XML correct |
| 8 | `ApplyCellAttributeUpdates` — remove attribute from cell | Attribute removed |
| 9 | `ApplyCellAttributeUpdates` — cell_name not found | Error returned |
| 10 | `ApplyCellAttributeUpdates` — one icon attr without pair | Warning returned |
| 11 | `ApplyCellAttributeUpdates` — case-insensitive cell match | Patched XML correct |
| 12 | Integration: patch mode (no layoutxml) | View updated, patched cells correct |
| 13 | Integration: combined mode (layoutxml + cell_updates_json) | Patch applied on supplied layout |
| 14 | Regression: update with full layoutxml, no cell_updates_json | Works as before |

---

## Acceptance Criteria
- User can update icon providers without rebuilding full layout xml manually.
- User can set arbitrary cell attributes by request.
- Existing `manage_view` flows remain functional and compatible.
- Validation/sync/backup safety still enforced.
- Docs clearly explain how to use new option.
- Detail output shows icon attributes on columns.

## Implementation Order
1. Add `CellUpdateInstruction` DTO to `StructuredResults.cs`
2. Add `ParseCellUpdates` to `ManageViewTool.cs`
3. Add `ApplyCellAttributeUpdates` to `ViewXmlHelper.cs`
4. Wire into `HandleUpdate` (relax layoutxml check, add patch logic)
5. Update tool description + parameter description
6. Improve detail output in `GetViewDetail`
7. Update `InstructionResources.cs` docs
8. Add unit tests
9. Run ``/build-cli` (use the IDE-appropriate prefix: `/claude-build-cli`, `/copilot-build-cli`, or `/anti-build-cli`)`

## Build/Verify Workflow
Per project rules:
- Do not run `dotnet build` directly.
- Run ``/build-cli` (use the IDE-appropriate prefix: `/claude-build-cli`, `/copilot-build-cli`, or `/anti-build-cli`)` after code changes under `DynamicsCrm.DevKit.Cli/**`.

## Notes for Implementer
- Preserve existing backup and publish behavior — `ViewBackupHelper` is NOT modified.
- `ViewBackupHelper.BuildSuccessText` is called with `fetchXmlUpdated` bool — pass `false` when only cell patching (no explicit fetchxml change).
- `ValidateSync` compares FetchXML `<attribute>` vs LayoutXML `<cell>` by `name` — cell attribute patching does NOT add/remove cells, so sync will pass automatically.
- Keep all new parameters optional with default `""`.
- Use `StringComparison.OrdinalIgnoreCase` for cell name matching.
- `EnsureObjectTypeCode` ordering is defined in Task 3 flow: runs AFTER cell patching, BEFORE validation (Step 3).
