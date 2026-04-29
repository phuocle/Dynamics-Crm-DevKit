# Plan: Add `manage_subgrid` operation to `manage_form`

**Status:** Ready to implement  
**Target component:** `DynamicsCrm.DevKit.Cli`  
**Build workflow:** `/claude-build-cli`

**Confirmed gap:** yes. Current `FormXmlOperationsRunner` only dispatches
`manage_tab | manage_section | manage_fields | manage_library | manage_event`.
There is no operation that creates a Dataverse subgrid control. During the Invoice
form prompt run, the agent had to replace raw FormXML to add the Invoice Lines
subgrid, which is the risky workaround this plan is meant to remove.

---

## Context

### Why this is needed

`manage_form` operations currently only support:
`manage_tab | manage_section | manage_fields | manage_library | manage_event`

There is **no `manage_subgrid` operation**. When an AI agent is asked to add a subgrid to a form, it falls back to rewriting the entire raw FormXML — risky because it can overwrite existing customizations and requires the AI to correctly guess `ViewId`, `RelationshipName`, and the subgrid `classId`.

### Real FormXML example (from `v4_invoice` — form "Information")

The existing subgrid control in `tab_lines` looks like this:

```xml
<cell id="{0b8a717b-53ec-4289-994e-5be626cb44b6}" showlabel="true" locklevel="0"
      rowspan="10" colspan="1" auto="false">
  <labels>
    <label description="Invoice Lines" languagecode="1033" />
  </labels>
  <control id="v4_invoice_invoiceline" classid="{E7A81278-8635-4d9e-8D4D-59480B391C5B}">
    <parameters>
      <TargetEntityType>v4_invoiceline</TargetEntityType>
      <ViewId>{15b9a1e7-9c8c-475d-a775-2318d7a5e275}</ViewId>
      <ViewIds>{15b9a1e7-9c8c-475d-a775-2318d7a5e275}</ViewIds>
      <RelationshipName>v4_invoice_invoiceline</RelationshipName>
      <EnableViewPicker>false</EnableViewPicker>
      <EnableQuickFind>false</EnableQuickFind>
      <RecordsPerPage>10</RecordsPerPage>
      <AutoExpand>Fixed</AutoExpand>
      <ChartGridMode>Grid</ChartGridMode>
    </parameters>
  </control>
</cell>
```

**Key differences from a regular field cell:**
- No `datafieldname` attribute on `<control>`
- `classid` is always `{E7A81278-8635-4d9e-8D4D-59480B391C5B}` (SubGrid)
- Has `<parameters>` child element with subgrid-specific config
- Cell typically uses `rowspan` (default 10) to give the grid visual height
- `auto="false"` on the cell

---

## Design: `manage_subgrid` operation

### Sub-actions

| `manage_action` | Description |
|---|---|
| `add` | Add a new subgrid control to an existing section |
| `update` | Update label, visible, rows_per_page, enable_view_picker, enable_quick_find |
| `remove` | Remove a subgrid control by its `control_id` |

---

### `add` — parameters

| Parameter | Type | Required | Default | Notes |
|---|---|---|---|---|
| `action` | string | yes | — | `"manage_subgrid"` |
| `manage_action` | string | yes | — | `"add"` |
| `tab` | string | yes | — | Tab name or label, resolved with existing `FormXmlHelpers.FindTab()` |
| `section` | string | yes | — | Section name or label, resolved with existing `FormXmlHelpers.FindSection()` |
| `label` | string | yes | — | Label shown on the cell |
| `control_id` | string | yes | — | Unique control id, e.g. `"v4_invoice_invoiceline"`. Must be unique in the form. |
| `relationship_name` | string | yes | — | 1:N or N:N relationship schema name, e.g. `"v4_invoice_invoiceline"` |
| `target_entity` | string | yes | — | Related entity logical name, e.g. `"v4_invoiceline"` |
| `view_id` | string | no | auto-resolved | GUID of the default view. If omitted, tool resolves the first active public view of `target_entity`. Wrapped in `{}` if not already. |
| `rows_per_page` | int | no | `10` | RecordsPerPage parameter |
| `rowspan` | int | no | `10` | Cell rowspan (visual height) |
| `enable_view_picker` | bool | no | `false` | EnableViewPicker parameter |
| `enable_quick_find` | bool | no | `false` | EnableQuickFind parameter |
| `position` | string | no | `"last"` | `"first"`, `"last"`, `"after:<control_id_or_field>"`, `"before:<control_id_or_field>"` — within the section's rows |

**Example:**
```json
{
  "action": "manage_subgrid",
  "manage_action": "add",
  "tab": "tab_lines",
  "section": "lines_sec_invoice_lines",
  "label": "Invoice Lines",
  "control_id": "v4_invoice_invoiceline",
  "relationship_name": "v4_invoice_invoiceline",
  "target_entity": "v4_invoiceline",
  "rows_per_page": 10,
  "rowspan": 10
}
```

---

### `update` — parameters

| Parameter | Type | Required | Notes |
|---|---|---|---|
| `control_id` | string | yes | Identifies the subgrid to update |
| `label` | string | no | New label text (updates `<labels>`) |
| `visible` | bool | no | Sets/removes `visible="false"` on cell |
| `rows_per_page` | int | no | Updates `<RecordsPerPage>` |
| `enable_view_picker` | bool | no | Updates `<EnableViewPicker>` |
| `enable_quick_find` | bool | no | Updates `<EnableQuickFind>` |

**Example:**
```json
{
  "action": "manage_subgrid",
  "manage_action": "update",
  "control_id": "v4_invoice_invoiceline",
  "rows_per_page": 25,
  "enable_quick_find": true
}
```

---

### `remove` — parameters

| Parameter | Type | Required | Notes |
|---|---|---|---|
| `control_id` | string | yes | Removes the `<cell>` containing this control from the form |

**Example:**
```json
{
  "action": "manage_subgrid",
  "manage_action": "remove",
  "control_id": "v4_invoice_invoiceline"
}
```

---

## Implementation plan

### Files to create

| File | Purpose |
|---|---|
| `Cli/Mcp/Tools/Form/FormSubgridOperations.cs` | New class — implements `ExecuteAddSubgrid`, `ExecuteUpdateSubgrid`, `ExecuteRemoveSubgrid` |

### Files to edit

| File | Change |
|---|---|
| `Cli/Mcp/Tools/Form/FormXmlOperationsRunner.cs` | Add `case "manage_subgrid":` in `Run()` switch (lines 76–137) |
| `Cli/Mcp/Tools/Form/FormFieldMetadata.cs` | No change expected. `CollectFieldNames()` only collects `"fields"` arrays; `manage_subgrid` should not use `"fields"`, so no false field validation should occur. |
| `DynamicsCrm.DevKit.Shared/Models/ControlClassId.cs` | `SUB_GRID` already exists. Use `ControlClassId.SUB_GRID` instead of introducing a duplicate constant. |
| `Cli/Mcp/Tools/ManageFormTool.cs` | Update tool description string to mention `manage_subgrid` |
| `DynamicsCrm.DevKit.Docs/` | Update `instructions_for_formxml` MCP resource if it exists (search for it) |

### Files to edit (tests)

| File | Change |
|---|---|
| `DynamicsCrm.DevKit.UnitTests/Cli/Mcp/ManageFormToolTests.cs` | Add test cases for `manage_subgrid` add/update/remove |

---

## Implementation detail: `FormSubgridOperations`

```csharp
internal sealed class FormSubgridOperations
{
    private readonly ServiceClient _serviceClient;

    public FormSubgridOperations(ServiceClient serviceClient)
    {
        _serviceClient = serviceClient;
    }

    public string ExecuteAddSubgrid(XDocument formDoc, JsonElement op)
    {
        // 1. Read params from op
        // 2. Find tab → section → rows element
        // 3. If view_id omitted → call Dataverse to get first active public view of target_entity
        // 4. Build <cell> + <control classid={ControlClassId.SUB_GRID}> + <parameters>
        // 5. Insert into rows per position param
        // 6. Return summary string
    }

    public static string ExecuteUpdateSubgrid(XDocument formDoc, JsonElement op)
    {
        // 1. Find control by control_id (no datafieldname, match on control id attr)
        // 2. Apply label / visible / rows_per_page / enable_view_picker / enable_quick_find
        // 3. Return summary string
    }

    public static string ExecuteRemoveSubgrid(XDocument formDoc, JsonElement op)
    {
        // 1. Find control by control_id
        // 2. Walk up to parent <cell> and remove it
        // 3. Return summary string
    }
}
```

### View auto-resolution (when `view_id` is omitted)

Use `savedquery` entity via FetchXML or Web API.

Important: `savedquery.returnedtypecode` can be queried with the target entity
logical name in the Dataverse Web API (for example `v4_invoiceline`). Do not assume
it must be the numeric ObjectTypeCode unless the SDK path being used proves otherwise.

```
/savedqueries?$filter=returnedtypecode eq '<target_entity_logical_name>' 
              and querytype eq 0 
              and statecode eq 0
&$select=savedqueryid,name&$top=1
```

Or equivalently via `RetrieveMultiple` with FetchXML on `savedquery` where `returnedtypecode = <target_entity_logical_name>` and `querytype = 0` (Public) and `statecode = 0` (Active), order by `isdefault desc` then `name asc`.

---

## Validation notes

- `control_id` must be **unique** within the form — check existing control ids before adding (same pattern as `FormXmlHelpers.CollectExistingControlIds`)
- `relationship_name` is not validated against Dataverse metadata in the initial implementation (keep it simple)
- `target_entity` should be validated only when `view_id` is omitted, because auto-resolving a view requires querying `savedquery`
- `view_id` braces: normalize to `{GUID}` format before writing to XML
- `position` should locate rows by control id first, then by field `datafieldname`; existing `InsertFieldRows()` only handles field names, so subgrid code needs its own row insertion helper or a small generalized helper.

---

## Dispatcher change in `FormXmlOperationsRunner.Run()`

```csharp
case "manage_subgrid":
    opSummaries.Add(manageAction switch
    {
        "add"    => subgridOps.ExecuteAddSubgrid(formDoc, op),
        "update" => FormSubgridOperations.ExecuteUpdateSubgrid(formDoc, op),
        "remove" => FormSubgridOperations.ExecuteRemoveSubgrid(formDoc, op),
        _ => throw new InvalidOperationException(
            $"Unknown manage_action '{manageAction}' for manage_subgrid. Valid: add, update, remove")
    });
    break;
```

Also update the error message at lines 132–135 to include `manage_subgrid`.

---

## `FormFieldMetadata.CollectFieldNames` — no change needed

The current implementation in `FormFieldMetadata.CollectFieldNames()` collects field names from `"fields"` arrays inside operations. A `manage_subgrid` op has no `"fields"` array, so `CollectFieldNames` will return nothing for it — which is correct. `ValidateFieldsExist` will then have nothing to validate, so no false errors.

---

## `instructions_for_formxml` MCP resource

Search for this resource in `Cli/Mcp/Resources/`. If it is a static `.md` file, add a `manage_subgrid` section following the same format as the other operation docs.

---

## Test cases

### Unit test: `manage_subgrid add`
- Input FormXML: has `tab_lines` > `lines_sec_invoice_lines` with empty rows
- Op: add subgrid with `control_id = "v4_invoice_invoiceline"`, `relationship_name = "v4_invoice_invoiceline"`, `target_entity = "v4_invoiceline"`, `view_id = "{15b9a1e7-9c8c-475d-a775-2318d7a5e275}"`
- Assert: result XML contains `<control id="v4_invoice_invoiceline" classid="{E7A81278-8635-4d9e-8D4D-59480B391C5B}">` with correct `<parameters>`

### Unit test: `manage_subgrid update`
- Input FormXML: contains the subgrid above
- Op: update `rows_per_page = 25`, `enable_quick_find = true`
- Assert: `<RecordsPerPage>25</RecordsPerPage>` and `<EnableQuickFind>true</EnableQuickFind>` in result

### Unit test: `manage_subgrid remove`
- Input FormXML: contains the subgrid above
- Op: remove `control_id = "v4_invoice_invoiceline"`
- Assert: no `<control id="v4_invoice_invoiceline"` in result; parent `<cell>` is also removed

---

## Summary of changes

| # | File | Type | Description |
|---|---|---|---|
| 1 | `Form/FormSubgridOperations.cs` | **New** | All subgrid XML build/update/remove logic |
| 2 | `Form/FormXmlOperationsRunner.cs` | **Edit** | Add `manage_subgrid` case + update error message |
| 3 | `Form/FormXmlBuilder.cs` | **No change** | Does not need modification |
| 4 | `Form/FormFieldMetadata.cs` | **No change** | Already skips ops with no `"fields"` array |
| 5 | `DynamicsCrm.DevKit.Shared/Models/ControlClassId.cs` | **No change** | `SUB_GRID` constant already exists |
| 6 | `ManageFormTool.cs` | **Edit** | Update tool description |
| 7 | `Resources/instructions_for_formxml` | **Edit** | Add `manage_subgrid` docs |
| 8 | Unit tests | **Edit** | Add 3 test cases |
