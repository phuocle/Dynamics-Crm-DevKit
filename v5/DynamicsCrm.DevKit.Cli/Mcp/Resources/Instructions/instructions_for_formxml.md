
# FormXML Manipulation Rules

## CRITICAL: Backup Before Modifying an Existing Form
- ALWAYS retrieve the current FormXML using manage_form with action='detail' and the specific form_id FIRST
- `manage_form` automatically saves the current FormXML before update or rename and returns `backupPath`. Keep that path for rollback.
- Backup file naming (manage_form update/rename auto-backup): {form_id}_{yyyyMMddHHmmss}.formxml.json
  Example: 8448b78f8f42e61180ff001dd8a1c3f9_20260329180000.formxml.json
- Backup location: {working_directory}/.devkit/manage_form/{entity}/
- A corrupted FormXML can break the entire entity form -- without backup, you must restore the environment

## Rollback Procedure (If Form Breaks)
1. Call `manage_form(action='undo', entity_name='...', form_id='...', formxml='<backupPath>')` using the backup path returned by the update or rename.
2. Check the result's publish status and verify the form loads correctly.
- Undo restores FormXML; to restore a changed form name, use `manage_form(action='rename', ...)` separately.

## CRITICAL: Verify Field Names Before Modifying Forms
- Before adding ANY field to a form, you MUST call `get_tables` first to verify the field's logical name exists on the entity.
- Do NOT guess or assume field names. User-provided names may not match the actual logical name (e.g., "fpt site" could be "ftpsiteurl", "websiteurl", or a custom field with a publisher prefix).
- After calling `get_tables`, search the attributes list for the field by display name or logical name to find the exact match.
- If the field does not exist, inform the user and list similar fields as suggestions.

## Before Making Changes
- When editing an existing form, read its FormXML using manage_form with action='detail' and the specific form_id
- Understand the existing structure before modifying
- Validate changes against schema://formxml XSD before writing

## Create a Quick Create Form

1. Read the source Quick Create form with `manage_form(action='detail', entity_name=..., form_id=...)` in the source environment.
2. In the target environment, call `manage_form(action='create', entity_name=..., form_type=7, form_name=..., formxml=...)`. Pass the source `formXml` or a path to a FormXML file.
3. Use the returned `formId` to inspect the new form. If `status` is `created_publish_failed`, publish the target table with `publish_customizations`.

The target table and the fields and web resources referenced by the form must already exist. Enable Quick Create on the target table to use the form in the app.

## System Dashboards

Call `manage_form(action='list', form_type=0)` with `entity_name` omitted to discover system dashboard IDs. Use `form_name` to filter by a substring and `include_formxml=true` to include the XML in each matching entry.

Call `manage_form(action='detail', form_type=0, form_id=...)` to inspect one dashboard. You can pass `form_name` instead when the substring identifies a single dashboard. If several match, use a candidate `formId` from the response.

Create an organization-owned dashboard with `form_type=0` and omit `entity_name`. Supply a dashboard FormXML file or inline XML with a `<form>` root. For dashboard layout examples, see [Microsoft's dashboard samples](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/sample-dashboards).

```json
{
  "action": "create",
  "form_type": 0,
  "form_name": "Sales Overview",
  "formxml": "C:/customizations/sales-overview.xml",
  "solution_name": "sales_customizations"
}
```

To replace the FormXML, call `manage_form(action='update', form_type=0, form_id=..., formxml=...)` with the complete XML or its file path. Update saves a backup under `.devkit/manage_form/dashboard/`. Restore it with `action='undo'`, the same `form_id`, and the returned `backupPath` as `formxml`.

Create and update validate against `schema://formxml` and publish the dashboard by GUID. Optionally supply `solution_name` on either action to add the dashboard to that solution. Check `published` and `isAddToSolution` when a solution is supplied. If publish fails, call `publish_customizations(dashboards='<formId>')`.

## Operation JSON Contract
Call `manage_form` with tool-level `action='update'`. Inside the `operations` JSON array, each operation object uses:

| Field | Meaning | Example |
|-------|---------|---------|
| `action` | Operation family | `"manage_subgrid"`, `"manage_fields"`, `"manage_tab"`, `"manage_navigation"` |
| `manage_action` | Verb within that family | `"add"`, `"update"`, `"rename"`, `"move"`, `"remove"`, `"delete"` |

Do not put verbs like `"add"` or `"remove"` in operation `action`.

```json
[
  { "action": "manage_subgrid", "manage_action": "add", "label": "Invoice Lines" }
]
```

## `operations` is a string containing a JSON array
This tool declares `operations` as a string. Serialize the operation array once and pass the resulting text as that argument. When encoding the complete MCP arguments object as JSON, its serializer escapes inner quotes on the wire; do not add literal backslashes to the string value or serialize it twice. MCP can support array parameters, but this particular parameter is a string.

How to build it:
1. Write the operations as a normal JSON array first.
2. Serialize it to a string (`JSON.stringify` in JavaScript, `JsonSerializer.Serialize` in C#, `json.dumps` in Python).
3. Pass that string to the `operations` parameter.

Example — the array you want:
```json
[
  { "action": "manage_tab", "manage_action": "add", "label": "Main" }
]
```
Example complete tool arguments as JSON (the backslashes are JSON syntax, not characters to add to the string value):
```json
{"action":"update","entity_name":"account","form_id":"<form GUID>","operations":"[{\"action\":\"manage_tab\",\"manage_action\":\"add\",\"label\":\"Main\"}]"}
```
The parsed `operations` value is the array text beginning with `[` and containing ordinary double quotes.

## Naming Conventions
- Tab names: `tab_$label` (lowercase, no spaces/special chars)
  Example: tab_general, tab_details, tab_address
- Section names: `$tablabel_sec_$label`
  Example: general_sec_contact_info, details_sec_timeline

## Placement Rules
- New tabs: add as the LAST tab (unless user specifies otherwise)
- New sections: add as the LAST section in the first tab (unless user specifies)
- New fields: add to the last row in the target section

## Tab & Section Operations

Valid tab actions: `add`, `update`, `rename`, `move`, `remove`, `delete`.
Valid section actions: `add`, `update`, `rename`, `move`, `remove`, `delete`.

`rename` is an alias of `update`. Use `tab` to identify a tab and `section` to identify a section; `name` is also accepted for compatibility. Set `label` to rename the display label, or set `new_name` to rename the FormXML logical name.

`delete` is an alias of `remove`.

## Tab & Section Positioning

The `position` field controls where a tab or section is inserted/moved.
Accepted values:
- `"last"` (default) — append after all existing siblings
- `"first"` — insert before all existing siblings
- `"before:<name>"` — insert immediately before the sibling whose `name` attribute or label matches `<name>`
- `"after:<name>"` — insert immediately after the matching sibling

You may also split `position` and the reference into two fields:

| Field | Value |
|-------|-------|
| `position` | `"before"` or `"after"` |
| `reference_tab` | name or label of the target tab (for manage_tab) |
| `reference_section` | name or label of the target section (for manage_section) |

Both forms are equivalent. Use whichever is clearer in context.

If the reference name is not found, the operation throws an error listing all available names — it never silently falls back to appending at the end.

### Examples
```json
{ "action": "manage_tab", "manage_action": "add", "label": "Lines",
  "position": "before:tab_administrator" }

{ "action": "manage_tab", "manage_action": "add", "label": "Lines",
  "position": "before", "reference_tab": "tab_administrator" }

{ "action": "manage_tab", "manage_action": "move",
  "tab": "tab_lines", "position": "before:tab_administrator" }
```

## Structure Reference
```
<form>
  <tabs>
    <tab name="tab_general" id="{guid}" showlabel="true" locklevel="0">
      <labels><label description="General" languagecode="1033" /></labels>
      <columns>
        <column width="100%">
          <sections>
            <section name="general_sec_info" showlabel="true" columns="2">
              <labels><label description="Info" languagecode="1033" /></labels>
              <rows>
                <row>
                  <cell id="{guid}">
                    <labels><label description="Name" languagecode="1033" /></labels>
                    <control id="name" classid="{4273EDBD-AC1D-40d3-9FB2-095C621B552D}" datafieldname="name" />
                  </cell>
                </row>
              </rows>
            </section>
          </sections>
        </column>
      </columns>
    </tab>
  </tabs>
</form>
```

## Common Control ClassIds
- Text/String: {4273EDBD-AC1D-40d3-9FB2-095C621B552D}
- Lookup: {270BD3DB-D9AF-4782-9025-509E298DEC0A}
- OptionSet: {3EF39988-22BB-4f0b-BBBE-64B5A3748AEE}
- DateTime: {5B773807-9FB2-42db-97C3-7A91EFF8ADFF}
- Boolean: {B0C6723A-8503-4fd7-BB28-C8A06AC933C2}
- Money: {533B9E00-756B-4312-95A0-DC888637AC78}
- SubGrid: {E7A81278-8635-4d9e-8D4D-59480B391C5B}

## manage_fields — Header Operations

To add, update, or remove fields in the **form header** (the strip at the top of the form), use
`manage_action: "add_header"`, `"update_header"`, or `"remove_header"`.

**Do NOT use `"tab": "header"`** — the tool auto-routes `tab="header"` to `add_header`, but using
`manage_action: "add_header"` directly is clearer and always works.

### Add Header Fields
```json
{
  "action": "manage_fields",
  "manage_action": "add_header",
  "fields": [
    { "field": "v5_name" },
    { "field": "ownerid" },
    { "field": "statecode" },
    { "field": "statuscode" }
  ]
}
```

No `tab` or `section` required for header operations.

### Update Header Fields
```json
{
  "action": "manage_fields",
  "manage_action": "update_header",
  "fields": [{ "field": "ownerid", "visible": false }]
}
```

### Remove Header Fields
```json
{
  "action": "manage_fields",
  "manage_action": "remove_header",
  "fields": ["statecode", "statuscode"]
}
```

### Valid manage_action values for manage_fields
`add`, `update`, `move`, `remove`, `delete` (body fields — require `tab` + `section`)
`add_header`, `update_header`, `remove_header` (header fields — no `tab`/`section` needed)

`delete` is an alias of `remove`. For body field moves, use `target_tab` and/or `target_section` when moving to another location; omit them to move within the same section.

---

## manage_subgrid Operation
Use `manage_subgrid` instead of raw FormXML when adding, updating, or removing a subgrid.

### Add Subgrid
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
  "view_id": "{15b9a1e7-9c8c-475d-a775-2318d7a5e275}",
  "rows_per_page": 10,
  "rowspan": 10
}
```

Required: `tab`, `section`, `label`, `control_id`, `relationship_name`, `target_entity`.
Optional: `view_id` (auto-resolves the default active public view), `rows_per_page`, `rowspan`,
`enable_view_picker`, `enable_quick_find`, `position`.

### Update Subgrid
```json
{
  "action": "manage_subgrid",
  "manage_action": "update",
  "control_id": "v4_invoice_invoiceline",
  "view_id": "9e3cdca1-812a-4a10-9767-df0477649f24",
  "enable_view_picker": false,
  "rows_per_page": 25,
  "enable_quick_find": true
}
```

Pass `view_id` to change the default view. Update writes it to `ViewId` as an uppercase GUID in braces.
Pass `view_ids` as a JSON array of GUID strings or a comma-separated string to replace `ViewIds` explicitly.
When you disable the view picker or change the default view while the picker is disabled, omitting `view_ids` sets `ViewIds` to the effective default view.

### Remove Subgrid
```json
{
  "action": "manage_subgrid",
  "manage_action": "remove",
  "control_id": "v4_invoice_invoiceline"
}
```

## Related Navigation

Call `manage_form(action='navigation_list', entity_name='account', form_id='<form GUID>')` and use the `navigation` array in `structuredContent` to show the current items for confirmation before making changes. Each entry has `id`, `type` (`relationship` or `system`), `relationshipName`, `label`, `area`, `sequence`, and `visible`. `relationshipName` is null for system entries. `area` and `sequence` can be null when neither metadata nor FormXML supplies a value.

The list combines relationship menu settings, available built-in items, and the form's explicit `Navigation/NavBar` items. FormXML overrides take precedence. Inherited relationships use the table-side menu settings, with `Details` mapped to `Info` and the menu order used as the sequence. The `<entity>_connection1` relationship uses `navConnections`. Built-in entries include `navAudit`, `navAsyncOperations`, `navProcessSessions`, and `navSPDocuments` when supported by the entity metadata. Record access and app settings can also affect what users see in the app.

Use `manage_navigation` with `manage_form(action='update')`. Put `relationship_name` or `nav_id` directly on a single-item operation, or supply a non-empty `items` array of selector objects. Use the exact relationship schema name or ID from `navigation_list`. Each item in a batch uses the same `manage_action`.

| `manage_action` | Effect |
|---|---|
| `hide` / `show` | Set `Show` to `false` / `true`. If the item is inherited, create a FormXML override using its metadata defaults. |
| `update` | Set any supplied `area`, `sequence` (non-negative integer), `label`, or `visible` (boolean). A `label` updates one `Titles/Title` entry. Use `language_code` to select its LCID, or omit it to use the organization base language. |
| `remove` | Remove the item's explicit FormXML override. An inherited item can reappear with its default settings. Use `hide` to keep it out of the Related menu. |

Dataverse FormXML defines `Show` on `NavBarByRelationshipItem`. For inherited `navAudit`, `navAsyncOperations`, and `navProcessSessions`, `manage_navigation` creates `NavBarByRelationshipItem` overrides using the `hardcoded_` relationship names from Dataverse form exports. The items still appear as `type="system"` in `navigation_list`. An existing `NavBarByRelationshipItem` is edited in place.

Custom `NavBarItem` links support `update` for `area`, `sequence`, and `label`. `hide`, `show`, and `update` with `visible` return an error for these links. Use `remove` to delete a custom link. For an inherited built-in item without a supported override mapping, such as `navSPDocuments`, the tool reports an error when asked to create an override.

```json
[
  {
    "action": "manage_navigation",
    "manage_action": "hide",
    "items": [
      {"relationship_name": "account_employees"},
      {"nav_id": "navConnections"},
      {"nav_id": "navAudit"},
      {"nav_id": "navAsyncOperations"}
    ]
  },
  {
    "action": "manage_navigation",
    "manage_action": "update",
    "relationship_name": "account_employees",
    "area": "Info",
    "sequence": 120,
    "label": "Employees",
    "language_code": 1033
  }
]
```

## manage_library and manage_event Operations
Use `manage_event` to attach or remove JavaScript handlers. Adding an event automatically ensures the
referenced library exists in `<formLibraries>`.

The FormXML schema requires root `<events>` to appear before `<formLibraries>`. The tool maintains that
order automatically.

### Add OnLoad Handler
```json
{
  "action": "manage_event",
  "manage_action": "add",
  "event_name": "onload",
  "function_name": "Namespace.onLoad",
  "library_name": "new_/js/account.js",
  "pass_execution_context": true,
  "target": "form"
}
```

Required for add: `event_name`, `function_name`, `library_name`.
Optional: `pass_execution_context` (default `true`), `parameters`, `enabled`, `target`.

Valid `event_name` values are `onload`, `onsave`, `onchange`, `ontabstatechange`, `onrecordselect`.
The tool accepts casing like `OnLoad` but writes the normalized lowercase value used by the form designer.

Accepted aliases: `library`, `libraryName`; `function`, `functionName`; `event`, `eventName`;
`passExecutionContext`.

### Remove Event Handler
```json
{
  "action": "manage_event",
  "manage_action": "remove",
  "event_name": "onload",
  "function_name": "Namespace.onLoad",
  "library_name": "new_/js/account.js",
  "target": "form"
}
```

Omit `function_name` to remove the entire event entry.

### Add Library Only
```json
{
  "action": "manage_library",
  "manage_action": "add",
  "library_name": "new_/js/account.js"
}
```

## After Making Changes
- Use the dedicated manage_form tool to apply changes
- manage_form auto-handles: backup > validate > update > publish
- Verify the form loads correctly in the browser
