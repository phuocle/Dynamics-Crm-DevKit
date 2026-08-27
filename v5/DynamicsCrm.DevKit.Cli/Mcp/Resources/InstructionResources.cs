using ModelContextProtocol.Server;
using System.ComponentModel;

namespace DynamicsCrm.DevKit.Cli.Mcp.Resources
{
    [McpServerResourceType]
    public class InstructionResources
    {
        [McpServerResource(
            MimeType = "text/markdown",
            Name = "instructions_for_manage_app",
            Title = "Instructions for manage_app",
            UriTemplate = "docs://instructions_for_manage_app"),
        Description(
            "Rules and examples for managing model-driven apps and app navigation through manage_app. " +
            "Read this before creating or modifying model-driven apps, sitemaps, or app navigation.")]
        public static string ManageAppInstructions() => @"
# Instructions for manage_app

Use `manage_app` for model-driven app metadata and app navigation. Never use `execute_webapi` to create or update model-driven apps, sitemaps, or app module components.

## Golden Rules

- Always read the app first with `manage_app(action='detail', app='...')` before changing metadata or navigation.
- Create requires `solution_name` and `display_name`.
- Create automatically creates a starter sitemap with an Account item so Dataverse app validation can pass.
- Every mutating action (`create`, `update`, `update_navigation`, `undo`) publishes the app automatically so changes take effect immediately; `published: true` in the result confirms it. `no_changes` results skip publish.
- `unique_name` on create always gets the solution publisher prefix prepended (e.g. 'MyApp' in a solution with prefix 'all' becomes 'all_MyApp').
- Do not delete appmodule records.
- Do not delete sitemap records.
- `remove_area`, `remove_group`, and `remove_item` only remove navigation nodes from sitemap XML.
- Item operations support entity items only in v1.
- All move/order positions are 1-based when numeric. Visual order is left-to-right, then top-to-bottom.

## Read Before Write Workflow

1. Inspect the app:

```json
{
  ""action"": ""detail"",
  ""app"": ""Sales App""
}
```

2. Apply metadata update or navigation operations.
3. Check validation warnings or errors.
4. Publish happens automatically on every mutation — no separate `publish_customizations` call is needed.

## Create App

```json
{
  ""action"": ""create"",
  ""solution_name"": ""TESTMCP"",
  ""display_name"": ""TEST MCP App"",
  ""description"": ""Model-driven app for MCP testing""
}
```

## Update App Metadata

```json
{
  ""action"": ""update"",
  ""app"": ""TEST MCP App"",
  ""description"": ""Updated description"",
  ""icon_webresource"": ""v5_/icons/app.svg""
}
```

## Navigation Position Values

`position` supports `first`, `last`, `before:<target>`, `after:<target>`, `index:<n>`, or a plain 1-based number.

## Navigation Examples

```json
[
  {
    ""action"": ""add_area"",
    ""label"": ""Invoicing"",
    ""id"": ""area_invoicing"",
    ""show_groups"": true,
    ""position"": ""last""
  },
  {
    ""action"": ""add_group"",
    ""area"": ""Invoicing"",
    ""label"": ""Transactions"",
    ""id"": ""group_transactions"",
    ""position"": ""last""
  },
  {
    ""action"": ""add_item"",
    ""area"": ""Invoicing"",
    ""group"": ""Transactions"",
    ""entity"": ""v5_invoice"",
    ""label"": ""Invoices"",
    ""id"": ""sa_v5_invoice"",
    ""position"": ""last""
  }
]
```

Move item:

```json
[
  {
    ""action"": ""move_item"",
    ""item"": ""v5_invoice"",
    ""from_area"": ""Invoicing"",
    ""from_group"": ""Transactions"",
    ""to_area"": ""Sales"",
    ""to_group"": ""Customers"",
    ""position"": ""after:account""
  }
]
```

Undo:

```json
{
  ""action"": ""undo"",
  ""app"": ""TEST MCP App"",
  ""operations"": "".devkit/manage_app/test_mcp_app/...app.json""
}
```
";

        [McpServerResource(
            MimeType = "text/markdown",
            Name = "formxml_instructions",
            Title = "Instructions for manipulating Dataverse FormXML",
            UriTemplate = "docs://instructions_for_formxml"),
        Description(
            "Rules and best practices for modifying Dataverse form XML definitions. " +
            "Read this before making any changes to FormXML via manage_form.")]
        public static string FormXmlInstructions() => @"
# FormXML Manipulation Rules

## CRITICAL: Backup Before ANY Modification
- ALWAYS retrieve the current FormXML using manage_form with action='detail' and the specific form_id FIRST
- Save the current FormXML to a local backup file BEFORE making any changes
- Backup file naming (manage_form update/rename auto-backup): {form_id}_{yyyyMMddHHmmss}.formxml.json
  Example: 8448b78f8f42e61180ff001dd8a1c3f9_20260329180000.formxml.json
- Backup location: {working_directory}/.devkit/manage_form/{entity}/
- A corrupted FormXML can break the entire entity form -- without backup, you must restore the environment

## Rollback Procedure (If Form Breaks)
1. Read the backup file content
2. PATCH /systemforms({formid}) with body: {""formxml"": ""<original XML from backup>""}
3. Call publish for the entity
4. Verify form loads correctly in the browser

## CRITICAL: Verify Field Names Before Modifying Forms
- Before adding ANY field to a form, you MUST call `get_tables` first to verify the field's logical name exists on the entity.
- Do NOT guess or assume field names. User-provided names may not match the actual logical name (e.g., ""fpt site"" could be ""ftpsiteurl"", ""websiteurl"", or a custom field with a publisher prefix).
- After calling `get_tables`, search the attributes list for the field by display name or logical name to find the exact match.
- If the field does not exist, inform the user and list similar fields as suggestions.

## Before Making Changes
- Always read the current FormXML using manage_form with action='detail' and the specific form_id
- Understand the existing structure before modifying
- Validate changes against schema://formxml XSD before writing

## Operation JSON Contract
Call `manage_form` with tool-level `action='update'`. Inside the `operations` JSON array, each operation object uses:

| Field | Meaning | Example |
|-------|---------|---------|
| `action` | Operation family | `""manage_subgrid""`, `""manage_fields""`, `""manage_tab""` |
| `manage_action` | Verb within that family | `""add""`, `""update""`, `""rename""`, `""move""`, `""remove""`, `""delete""` |

Do not put verbs like `""add""` or `""remove""` in operation `action`.

```json
[
  { ""action"": ""manage_subgrid"", ""manage_action"": ""add"", ""label"": ""Invoice Lines"" }
]
```

## CRITICAL: `operations` is a JSON string — escape inner quotes
The `operations` parameter is typed as a **string** (MCP has no JSON-array parameter type), so the entire JSON array must be passed as a single string value. Inside that string, every double-quote character of the JSON must be escaped as backslash-quote. If you pass raw (unescaped) JSON, the MCP call will FAIL with a JSON parse error.

How to build it:
1. Write the operations as a normal JSON array first.
2. Serialize it to a string (`JSON.stringify` in JavaScript, `JsonSerializer.Serialize` in C#, `json.dumps` in Python).
3. Pass that string to the `operations` parameter.

Example — the array you want:
```json
[
  { ""action"": ""manage_tab"", ""manage_action"": ""add"", ""label"": ""Main"" }
]
```
After serializing, the `operations` string value contains escaped quotes:
```
[{\""action\"":\""manage_tab\"",\""manage_action\"":\""add\"",\""label\"":\""Main\""}]
```
Pass that serialized string to `operations`. Do NOT hand-type the escaped form — always serialize.

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
- `""last""` (default) — append after all existing siblings
- `""first""` — insert before all existing siblings
- `""before:<name>""` — insert immediately before the sibling whose `name` attribute or label matches `<name>`
- `""after:<name>""` — insert immediately after the matching sibling

You may also split `position` and the reference into two fields:

| Field | Value |
|-------|-------|
| `position` | `""before""` or `""after""` |
| `reference_tab` | name or label of the target tab (for manage_tab) |
| `reference_section` | name or label of the target section (for manage_section) |

Both forms are equivalent. Use whichever is clearer in context.

If the reference name is not found, the operation throws an error listing all available names — it never silently falls back to appending at the end.

### Examples
```json
{ ""action"": ""manage_tab"", ""manage_action"": ""add"", ""label"": ""Lines"",
  ""position"": ""before:tab_administrator"" }

{ ""action"": ""manage_tab"", ""manage_action"": ""add"", ""label"": ""Lines"",
  ""position"": ""before"", ""reference_tab"": ""tab_administrator"" }

{ ""action"": ""manage_tab"", ""manage_action"": ""move"",
  ""tab"": ""tab_lines"", ""position"": ""before:tab_administrator"" }
```

## Structure Reference
```
<form>
  <tabs>
    <tab name=""tab_general"" id=""{guid}"" showlabel=""true"" locklevel=""0"">
      <labels><label description=""General"" languagecode=""1033"" /></labels>
      <columns>
        <column width=""100%"">
          <sections>
            <section name=""general_sec_info"" showlabel=""true"" columns=""2"">
              <labels><label description=""Info"" languagecode=""1033"" /></labels>
              <rows>
                <row>
                  <cell id=""{guid}"">
                    <labels><label description=""Name"" languagecode=""1033"" /></labels>
                    <control id=""name"" classid=""{4273EDBD-AC1D-40d3-9FB2-095C621B552D}"" datafieldname=""name"" />
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
`manage_action: ""add_header""`, `""update_header""`, or `""remove_header""`.

**Do NOT use `""tab"": ""header""`** — the tool auto-routes `tab=""header""` to `add_header`, but using
`manage_action: ""add_header""` directly is clearer and always works.

### Add Header Fields
```json
{
  ""action"": ""manage_fields"",
  ""manage_action"": ""add_header"",
  ""fields"": [
    { ""field"": ""v5_name"" },
    { ""field"": ""ownerid"" },
    { ""field"": ""statecode"" },
    { ""field"": ""statuscode"" }
  ]
}
```

No `tab` or `section` required for header operations.

### Update Header Fields
```json
{
  ""action"": ""manage_fields"",
  ""manage_action"": ""update_header"",
  ""fields"": [{ ""field"": ""ownerid"", ""visible"": false }]
}
```

### Remove Header Fields
```json
{
  ""action"": ""manage_fields"",
  ""manage_action"": ""remove_header"",
  ""fields"": [""statecode"", ""statuscode""]
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
  ""action"": ""manage_subgrid"",
  ""manage_action"": ""add"",
  ""tab"": ""tab_lines"",
  ""section"": ""lines_sec_invoice_lines"",
  ""label"": ""Invoice Lines"",
  ""control_id"": ""v4_invoice_invoiceline"",
  ""relationship_name"": ""v4_invoice_invoiceline"",
  ""target_entity"": ""v4_invoiceline"",
  ""view_id"": ""{15b9a1e7-9c8c-475d-a775-2318d7a5e275}"",
  ""rows_per_page"": 10,
  ""rowspan"": 10
}
```

Required: `tab`, `section`, `label`, `control_id`, `relationship_name`, `target_entity`.
Optional: `view_id` (auto-resolves the default active public view), `rows_per_page`, `rowspan`,
`enable_view_picker`, `enable_quick_find`, `position`.

### Update Subgrid
```json
{
  ""action"": ""manage_subgrid"",
  ""manage_action"": ""update"",
  ""control_id"": ""v4_invoice_invoiceline"",
  ""rows_per_page"": 25,
  ""enable_quick_find"": true
}
```

### Remove Subgrid
```json
{
  ""action"": ""manage_subgrid"",
  ""manage_action"": ""remove"",
  ""control_id"": ""v4_invoice_invoiceline""
}
```

## manage_library and manage_event Operations
Use `manage_event` to attach or remove JavaScript handlers. Adding an event automatically ensures the
referenced library exists in `<formLibraries>`.

The FormXML schema requires root `<events>` to appear before `<formLibraries>`. The tool maintains that
order automatically.

### Add OnLoad Handler
```json
{
  ""action"": ""manage_event"",
  ""manage_action"": ""add"",
  ""event_name"": ""onload"",
  ""function_name"": ""Namespace.onLoad"",
  ""library_name"": ""new_/js/account.js"",
  ""pass_execution_context"": true,
  ""target"": ""form""
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
  ""action"": ""manage_event"",
  ""manage_action"": ""remove"",
  ""event_name"": ""onload"",
  ""function_name"": ""Namespace.onLoad"",
  ""library_name"": ""new_/js/account.js"",
  ""target"": ""form""
}
```

Omit `function_name` to remove the entire event entry.

### Add Library Only
```json
{
  ""action"": ""manage_library"",
  ""manage_action"": ""add"",
  ""library_name"": ""new_/js/account.js""
}
```

## After Making Changes
- Use the dedicated manage_form tool to apply changes
- manage_form auto-handles: backup > validate > update > publish
- Verify the form loads correctly in the browser
";

        [McpServerResource(
            MimeType = "text/markdown",
            Name = "layoutxml_instructions",
            Title = "Instructions for manipulating Dataverse View LayoutXML",
            UriTemplate = "docs://instructions_for_views"),
        Description(
            "Rules and best practices for modifying Dataverse view definitions. " +
            "Read this before creating or modifying views via manage_view.")]
        public static string ViewInstructions() => @"
# View (SavedQuery) Manipulation Rules

## CRITICAL: Auto Backup
- update/rename/undo auto-back-up the current FetchXML to {workspace}/.devkit/manage_view/{entity}/ BEFORE overwrite (LayoutXML is regenerated from FetchXML on restore, so only the FetchXML is saved; workspace auto-resolved from MCP roots or server cwd — no parameter needed)
- A broken FetchXML hides ALL data from users. A broken LayoutXML crashes the grid — without backup you may need to restore the entire environment.

## Rollback (If View Breaks)
1. Call manage_view action='undo' with view_id + fetchxml=<.fetchxml.xml path from the update/rename response>
2. Tool auto-handles: read FetchXML backup > regenerate LayoutXML > validate > restore > publish; pre-restore state is backed up again

## CRITICAL: Verify Field Names Before Modifying Views
- Before adding ANY field to a view (FetchXML attributes/conditions, Quick Find columns), you MUST call `get_tables` first to verify the field's logical name exists on the entity.
- Do NOT guess or assume field names. User-provided names like ""fpt site"" may not match the actual logical name (e.g., it could be ""ftpsiteurl"", ""websiteurl"", or a custom field with a publisher prefix).
- After calling `get_tables`, search the attributes list for the field by display name or logical name to find the exact match.
- If the field does not exist, inform the user and list similar fields as suggestions.

## Structure
A view has TWO XML parts:

1. **FetchXML** -- WHICH records/columns to retrieve (you supply this)
2. **LayoutXML** -- HOW columns appear in the grid (AUTO-GENERATED from FetchXML: columns follow attribute order, width by data type)

## FetchXML (Query)
```xml
<fetch version=""1.0"" output-format=""xml-platform"" mapping=""logical"">
  <entity name=""account"">
    <attribute name=""name"" />
    <attribute name=""primarycontactid"" />
    <attribute name=""telephone1"" />
    <attribute name=""accountid"" />
    <order attribute=""name"" descending=""false"" />
    <filter type=""and"">
      <condition attribute=""statecode"" operator=""eq"" value=""0"" />
    </filter>
  </entity>
</fetch>
```

## LayoutXML (auto-generated — do NOT author it)
The tool builds LayoutXML from FetchXML: one `<cell>` per `<attribute>` (same order), `row id` = primary key, `jump` = primary name column, `object` = entity type code (auto-populated). Widths in pixels by data type (100 narrow .. 300 extra wide). You only touch individual cell attributes via `cell_updates_json` (see below).

## Quick Find Views (querytype=4) -- Find Columns

Quick Find views have THREE types of columns:
1. **View columns** -- `<attribute>` elements in FetchXML -> shown in grid results
2. **Find columns** -- `<filter isquickfindfields=""1"">` -> searched when user types in search bar
3. **Filter columns** -- `<filter type=""and"">` -> pre-filter records (e.g., statecode=Active)

Find columns and View columns are INDEPENDENT. A field can be a Find column without being a View column.

### Find Column Structure (isquickfindfields)
```xml
<filter type=""or"" isquickfindfields=""1"">
  <condition attribute=""name"" operator=""like"" value=""{0}"" />
  <condition attribute=""emailaddress1"" operator=""like"" value=""{0}"" />
  <condition attribute=""telephone1"" operator=""like"" value=""{0}"" />
</filter>
```

### Quick Find Rules
- Find columns use `operator=""like""` with `value=""{0}""` (placeholder for user input)
- The filter MUST have `type=""or""` and `isquickfindfields=""1""` — sits alongside the normal `<filter type=""and"">` in the same `<entity>`
- NEVER remove the `isquickfindfields` filter -- it disables search entirely
- Add/remove Find columns by adding/removing `<condition>` inside that filter (keep at least one)
- Any field type is allowed as a Find column; keep only essential fields for search performance

Source: https://learn.microsoft.com/en-us/power-apps/developer/data-platform/quick-find

## Hidden Columns (ishidden)
- Use `ishidden=""1""` on a `<cell>` to include a column in the query but hide it from the grid
- The column's `<attribute>` MUST still be in FetchXML (sync rule still applies)
- Valid values: `0` or omitted = visible, `1` = hidden
- Common use cases:
  - Custom icon rendering — hidden column provides data for `imageproviderwebresource`/`imageproviderfunctionname`
  - JavaScript web resource data — column fetched for client-side logic but not displayed
  - Sort/filter support — column used in `<order>` or `<filter>` but not shown to users

## Custom Icons in Views (imageproviderwebresource / imageproviderfunctionname)

Dataverse supports custom icon graphics alongside cell values in list views.

### Cell Attributes
- `imageproviderwebresource` — JS web resource name (e.g., `new_/js/ratingicons.js`)
- `imageproviderfunctionname` — JS function name (e.g., `displayIconTooltip`)
- Both are set via `cell_updates_json`; the resulting cell looks like:
  `<cell name=""opportunityratingcode"" width=""100"" imageproviderwebresource=""new_/js/ratingicons.js"" imageproviderfunctionname=""displayIconTooltip"" />`

### JavaScript Function Signature
```javascript
function displayIconTooltip(rowData, userLCID) {
    var str = JSON.parse(rowData);
    var coldata = str.opportunityratingcode_Value;
    // Return: [imageWebResourceName, tooltipText]
    return [""new_Hot"", ""Opportunity is Hot""];
}
```

### Rules
- The JS function receives the row as JSON + user locale (LCID); values via `{columnname}_Value` (integer for option sets); return `[imageWebResourceName, tooltipText]`
- Both attributes must be set on the same `<cell>`; `imageproviderwebresource` is the JS logic file, NOT the icon image (icons are separate 16x16 web resources named in the JS return value)
- Works on primary (replaces default icon) and non-primary columns; use a hidden cell for extra data; Promise return supported; never use synchronous XMLHttpRequest

### Cell Attribute Patching (cell_updates_json)
Use `cell_updates_json` parameter with `action='update'` to patch cell attributes on the current layout without changing the FetchXML:
```json
[{""cell_name"":""statuscode"",""set_attributes"":{""imageproviderwebresource"":""new_/js/viewIcons.js"",""imageproviderfunctionname"":""displayIconTooltip""}}]
```

Rules:
- `cell_name` must match an existing `<cell name=""..."">` in the LayoutXML (case-insensitive)
- Protected attributes (`name`) cannot be set or removed
- `width` cannot be removed but can be set (to resize)
- Unknown/custom attributes are allowed
- Backup + validation still enforced

### Workflow
1. Create icon image web resources (16x16 PNG) — use `manage_webresource` action='create'
2. Create JS web resource with the icon logic function — use `manage_webresource` action='create'
3. Use `cell_updates_json` to add icon attributes to the target cell
4. Update the view via `manage_view` action='update'

Source: https://learn.microsoft.com/en-us/power-apps/maker/data-platform/display-custom-icons-instead

## After Making Changes
- manage_view auto-handles: backup > validate > sync-check > update > publish
- If something breaks: action='undo' with the .fetchxml.xml path from the response
- Verify the view loads correctly in the browser
";

        [McpServerResource(
            MimeType = "text/markdown",
            Name = "schema_tools_guide",
            Title = "Guide for Dataverse schema tools (manage_table, manage_column, manage_relationship)",
            UriTemplate = "docs://schema_tools_guide"),
        Description(
            "Rules, type matrices, and immutable property lists for schema tools. " +
            "Read this when manage_table, manage_column, or manage_relationship returns an error.")]
        public static string SchemaToolsGuide() => @"
# Schema Tools Guide

Reference for `manage_table`, `manage_column`, and `manage_relationship`.

## manage_table

### Three-Field Name Model
- **display_name** / **display_collection_name** -- human labels (required for CREATE; mutable on UPDATE)
- **logical_name** -- lowercase logical name with publisher prefix; identifies an existing table for UPDATE; optional CREATE override (must be the lowercase form of schema_name)
- **schema_name** -- PascalCase schema name with publisher prefix; optional CREATE-only override of SchemaName (ignored on UPDATE)
- If schema_name/logical_name are omitted on CREATE, SchemaName is auto-derived from display_name via DataverseNamer and the logical name derives from it.
- Publisher prefix comes from solution_name (validated by confirmed_prefix). There is NO entity_name parameter.

### Create Mode
- display_name, display_collection_name, solution_name are REQUIRED
- Optional schema_name and/or logical_name override the auto-derived names (must start with the publisher prefix)
- Auto-creates primary name attribute (default: 'Name', max 100 chars)

### Create-Only Properties (Immutable After Creation)
| Property | Default | Notes |
|----------|---------|-------|
| ownership_type | 'User' | 'User' (supports sharing/assigning) or 'Organization' (no row-level security) |
| table_type | 'Standard' | 'Standard' or 'Elastic' (Cosmos DB, limited charting) |
| is_activity | false | When true: auto-sets User ownership, enables notes, uses 'Subject' as primary attr |
| has_notes | false | Cannot be disabled once enabled |
| primary_attribute_name | auto-derived | From display_name |
| primary_attribute_display_name | 'Name' | Display name of primary field |

### Update Mode
- Pass logical_name to identify the existing table
- Only provided params are updated; omitted ones keep current values
- Immutable properties are IGNORED with warnings if passed during update

### Irreversible Options (Manage via Power Apps UI Only)
Activities, Feedback, Change Tracking, Business Process Flows, Connections, Queues, Sending Email.
These CANNOT be turned off once enabled.

### Post-Create Workflow
1. `manage_table` -- create entity
2. `manage_column` -- add columns
3. `manage_form(action='update', operations=[...])` -- customize the form
4. `publish_customizations` -- publish (if auto_publish=false)

---

## manage_column

### Three-Field Name Model (same convention as manage_table)
- **display_name** -- human label (required for CREATE; mutable on UPDATE)
- **logical_name** -- lowercase logical name with publisher prefix; identifies an existing attribute for UPDATE; optional CREATE override (must be the lowercase form of schema_name)
- **schema_name** -- PascalCase schema name with publisher prefix; optional CREATE-only override of SchemaName (ignored on UPDATE)
- If schema_name/logical_name are omitted on CREATE, SchemaName is auto-derived from display_name via DataverseNamer and the logical name derives from it.
- Publisher prefix comes from solution_name (validated by confirmed_prefix). When solution_name is omitted, the prefix may be inherited from a prefixed schema_name/logical_name.
- There is NO attribute_name parameter. The column's technical names come ONLY from logical_name / schema_name (or are auto-derived from display_name).

### Attribute Type Matrix

| Type | Required Params (Create) | Optional Params | Defaults |
|------|-------------------------|-----------------|----------|
| string | entity_name, logical_name, attribute_type, display_name | max_length, format, required_level | max_length=100, format='Text' |
| memo | same | max_length, format | max_length=2000 |
| integer | same | min_value, max_value, format | format='None' |
| bigint | same | -- | No range limits |
| decimal | same | min_value, max_value, precision | precision=2 (max 10) |
| money | same | min_value, max_value, precision, precision_source | precision=2 (max 4), source=0 (Attribute) |
| float | same | min_value, max_value, precision | precision=2 (max 10) |
| boolean | same | true_label, false_label | 'Yes'/'No' |
| datetime | same | format, behavior | format='DateAndTime', behavior='UserLocal' |
| lookup | same + lookup_target | lookup_relationship_name | Auto-creates 1:N relationship |
| customer | same | -- | Polymorphic: account + contact |
| picklist | same + options OR global_optionset_name | -- | Local or global option set |
| multipicklist | same + options OR global_optionset_name | -- | Multi-select version of picklist |
| image | same | -- | -- |
| file | same | max_length | max_length=32768 (KB) |

### Format Values by Type

| Type | Valid Formats |
|------|-------------|
| string | Text (default), Email, Url, Phone, TextArea, RichText |
| memo | Text (default), Email, TextArea, RichText |
| integer | None (default), Duration, TimeZone, Language, Locale |
| datetime format | DateOnly, DateAndTime (default) |
| datetime behavior | UserLocal (default), DateOnly, TimeZoneIndependent |

### Money Precision Source
| Value | Meaning |
|-------|---------|
| 0 | Attribute (use column's precision setting) |
| 1 | Organization (use org-level pricing precision) |
| 2 | Currency (use currency record's precision) |

### Picklist Options Format (Create)
JSON array: [{""label"": ""Low"", ""value"": 100000000}, {""label"": ""Medium"", ""value"": 100000001}, {""label"": ""High"", ""value"": 100000002}]

### Picklist Options (Update)
- add_options: JSON array of options to add (same format as create)
- update_options: JSON array of options to rename: [{""value"": 100000000, ""label"": ""Very Low""}]
- delete_options: JSON array of integer values to remove: [100000002]

### Create-Only Properties (Cannot Change After Creation)
- attribute_type -- type is permanently set
- lookup_target -- target entity fixed
- global_optionset_name -- option set binding fixed

### StatusType (statuscode) Options
`statuscode` is a system attribute of type StatusType. Use `manage_column` with
`logical_name='statuscode'` and `add_options`/`update_options`/`delete_options`.

Each option in `add_options` can include a `""state""` field (integer) that links the
status to a `statecode` value (0=Active, 1=Inactive by default). Defaults to 0 if omitted.

add_options:    [{""label"":""Under Review"",""value"":100000001,""state"":0}]
update_options: [{""label"":""Renamed Status"",""value"":100000001}]
delete_options: [100000001]

`state` is required to control which statecode the new status appears under.
`statecode` column itself is read-only and cannot be managed via `manage_column`.

---

## manage_chart

Manage Dataverse System Charts (`savedqueryvisualization`).

### Overview
Charts are **not** bound to a View. FetchXML (`datadescription`) is built from the resolved entity logical name. No `view_name` parameter.

### Supported OOB Chart Types
Column, Bar, Line, Pie, Doughnut (Donut), Funnel, Area, Bubble, Radar.

### Defaults
- `chart_type` omitted → **Pie**
- Pie category (`group_by_column`) omitted → **statecode**
- Pie legend (`aggregate_column`) omitted → **importsequencenumber** + aggregate **count**

### User Interaction Pattern (Pie Chart Creation)
Required from user (error if missing):
1. `entity_name` (Display Name or logical name; resolved like other tools)
2. `chart_name`

Optional:
- `chart_type` (default Pie; defaults to **Column** when `measures` has 2+ entries and `chart_type` is omitted)
- `group_by_column` / category (default statecode)
- `aggregate_column` / legend (default importsequencenumber)
- `aggregate_type` (default count)
- `measures` (multi-series: `column:aggregate_type[:label]; ...`, e.g. `estimatedvalue:sum:Revenue; importsequencenumber:count`. Mutually exclusive with `aggregate_column`/`aggregate_type`. Optional label becomes the series legend name. Pie/Doughnut/Funnel reject 2+ measures.)
- `filter` (structured datadescription filter: `field op value; ...`; ops `=`, `!=`, `>`, `>=`, `<`, `<=`, `like`, `in` (comma list), `null`, `not-null`; e.g. `statecode=0; estimatedvalue>1000000`)
- `solution_name` (optional; null-check before add)

Workflow:
1. Call `manage_chart(action='create', entity_name=..., chart_name=..., ...)` with `confirmed=false` (default).
2. Tool returns `status=needs_confirmation` + full proposed plan (including defaults) — for Pie, and for **any** create with `measures` or `filter`. **Do not create yet.**
3. Show the plan to the user. If they want different category/legend, re-call with updated fields and `confirmed=false` again.
4. After user approves, re-call the same create with `confirmed=true`.
5. Tool builds entity-based aggregate FetchXML, presentation XML, creates chart, adds to solution when `solution_name` is non-empty, and publishes.

### Actions
- `list`: List system charts for an entity (`entity_name`).
- `detail`: Get full chart definition by `chart_id` or `chart_name`.
- `create`: Create a system chart (`entity_name`, `chart_name`, optional `chart_type`/`group_by_column`/`aggregate_column`/`aggregate_type`/`measures`/`filter`/`solution_name`, `confirmed` for pie or any create with `measures`/`filter`).
- `update`: Update chart type/data fields/description by `chart_id` or `chart_name` (also accepts `measures`/`filter` to rebuild the datadescription).
- `rename`: Change chart display name.
- `set_default`: Set a system chart as the default chart for an entity.
- `undo`: Rollback chart state from a `.chart.json` backup file path.

---

## manage_relationship

### Actions

| Action | Required Params | Description |
|--------|----------------|-------------|
| create_1n | referenced_entity, referencing_entity | Create 1:N + lookup column |
| create_nn | entity1, entity2 | Create N:N + intersect entity |
| update | relationship_name | Update cascade/menu config |
| delete | relationship_name | Delete relationship |
| add_target | entity_name, attribute_name, referenced_entity | Add target to polymorphic lookup |
| remove_target | entity_name, attribute_name, referenced_entity | Remove target (DATA LOSS!) |

### Cascade Presets

| Preset | Assign | Delete | Merge | Reparent | Share | Unshare |
|--------|--------|--------|-------|----------|-------|---------|
| Parental | Cascade | Cascade | Cascade | Cascade | Cascade | Cascade |
| Referential (default) | NoCascade | RemoveLink | NoCascade | NoCascade | NoCascade | NoCascade |
| ReferentialRestrictDelete | NoCascade | Restrict | NoCascade | NoCascade | NoCascade | NoCascade |

### Cascade Types (Individual Overrides)
Cascade, Active, UserOwned, NoCascade, RemoveLink, Restrict

### Menu Configuration
- menu_behavior: 'UseCollectionName' (default), 'UseLabel', 'DoNotDisplay'
- menu_group: 'Details' (default), 'Sales', 'Service', 'Marketing'
- menu_order: integer (default 10000)

### Hierarchy Relationship
- is_hierarchical: bool (default false). Only valid for self-referential 1:N (referenced_entity == referencing_entity).
- Only ONE hierarchy relationship per entity is allowed at a time.
- Enabling hierarchy unlocks OOB features: Hierarchy visualization chart, rollup columns (Sum/Count/Min/Max/Avg over children), position hierarchy security.
- Works with create_1n (set at creation time) and update (enable on existing self-referential relationship).
- Example: account entity uses 'account_parent_account' as its OOB hierarchy relationship.

### Polymorphic Lookup Notes
- add_target: Creates a new 1:N relationship pointing existing lookup to a new target entity
- remove_target: Deletes the relationship AND ALL DATA stored in that lookup target
- Only polymorphic lookups support add_target/remove_target -- regular lookups will error
";

        [McpServerResource(
            MimeType = "text/markdown",
            Name = "data_operations_guide",
            Title = "Guide for Dataverse data operations (manage_record, execute_fetchxml, search_records)",
            UriTemplate = "docs://data_operations_guide"),
        Description(
            "Field type formats, FetchXML relationship joins, and search syntax. " +
            "Read this when manage_record, execute_fetchxml, or search_records returns an error.")]
        public static string DataOperationsGuide() => @"
# Data Operations Guide

Reference for `manage_record`, `execute_fetchxml`, and `search_records`.

## manage_record -- Field Type Formats

### fields_json Format by Type

| Field Type | JSON Value Format | Example |
|-----------|------------------|---------|
| String/Memo | ""value"" | {""name"": ""Contoso Ltd""} |
| Integer | 42 | {""numberofemployees"": 250} |
| Decimal/Money | 99.50 | {""revenue"": 1000000.00} |
| Boolean | true or false | {""isprimary"": true} |
| DateTime | ""YYYY-MM-DD"" or ""YYYY-MM-DDTHH:mm:ssZ"" | {""createdon"": ""2025-01-15""} |
| Lookup | GUID string | {""primarycontactid"": ""a1b2c3d4-...""} |
| Picklist/Status | integer value | {""statuscode"": 1} |
| MultiSelect | [int, int, ...] | {""preferences"": [100000001, 100000002]} |
| Clear a field | null | {""fax"": null} |

### Polymorphic Lookup Syntax
For fields that can point to multiple entity types (e.g., customerid -> Account or Contact):

Key format: ""fieldname@targetentity"". Example: ""customerid@account"": ""a1b2c3d4-e5f6-7890-abcd-ef1234567890""

The @ separator tells the system which entity type the GUID belongs to.

Common polymorphic lookups:
- customerid -> account, contact
- regardingobjectid -> multiple entities (context-dependent)
- ownerid -> systemuser, team

### Delete Considerations
- Some records fail to delete due to dependencies (child records, required lookups)
- Deleting a parent record may cascade-delete child records depending on relationship cascade config
- Use get_tables with entity_name to check relationships before deleting parent records

---

## execute_fetchxml -- Curated Reference

### Basic Structure
<fetch [distinct='true'] [aggregate='true']>
  <entity name='account'>
    <attribute name='name' />
    <attribute name='accountid' />
    <filter type='and'>
      <condition attribute='statecode' operator='eq' value='0' />
    </filter>
    <order attribute='name' descending='false' />
  </entity>
</fetch>

### Common Operators
| Operator | Meaning | Example |
|----------|---------|---------|
| eq | Equals | value='0' |
| ne | Not equals | value='1' |
| gt, ge, lt, le | Greater/less than | value='2025-01-01' |
| like | Wildcard match | value='%contoso%' |
| null | Is null | (no value attr) |
| not-null | Is not null | (no value attr) |
| in | In list | <value>1</value><value>2</value> |
| between | Range | <value>1</value><value>100</value> |
| today | Today's date | (no value attr) |
| last-x-days | Last N days | value='30' |

### Relationship Joins (link-entity)

N:1 (Many-to-One): child -> parent
<link-entity name='contact' from='contactid' to='primarycontactid' link-type='inner' alias='c'>
  <attribute name='fullname' />
</link-entity>

1:N (One-to-Many): parent -> children
<link-entity name='contact' from='parentcustomerid' to='accountid' link-type='inner' alias='c'>
  <attribute name='fullname' />
</link-entity>

N:N (Many-to-Many): through intersect entity
<link-entity name='accountleads' from='accountid' to='accountid' link-type='inner'>
  <link-entity name='lead' from='leadid' to='leadid' link-type='inner' alias='l'>
    <attribute name='fullname' />
  </link-entity>
</link-entity>

### Aggregation
<fetch aggregate='true'>
  <entity name='opportunity'>
    <attribute name='estimatedvalue' alias='total_value' aggregate='sum' />
    <attribute name='statuscode' alias='status' groupby='true' />
  </entity>
</fetch>

Functions: count, sum, avg, min, max. Use groupby='true' for grouping.

### Rules
- Use lowercase logical names for everything
- Use get_tables to discover entity/attribute names if unsure
- DO NOT use top/count/page in <fetch> -- use the max_records parameter instead
- For advanced syntax, read schema://fetchxml

---

## search_records -- Search Syntax

### Search Operators
| Operator | Meaning | Example |
|----------|---------|---------|
| (default) | OR between words | john smith -> john OR smith |
| + | AND | hotel+wifi -> both required |
| | | OR (explicit) | wifi|luxury |
| - | NOT | -pool -> exclude pool |
| * | Trailing wildcard | Alp* -> Alpine, Alpha, etc. |
| (quotes) | Exact phrase | use double quotes around phrase |
| () | Grouping | hotel+(wifi|luxury) |

### Prerequisite
Relevance Search must be enabled in Power Platform admin center:
1. Go to https://admin.powerplatform.microsoft.com
2. Select environment -> Settings -> Product -> Features
3. Under 'Dataverse Search', select 'On'
4. Save and wait for indexing to complete

### Limitations
- Max 100 results per query
- For larger datasets or precise filtering, use execute_fetchxml
- Only searches fields indexed by Relevance Search (use action='status' to check)

### OData Filter Syntax
Use the filter parameter for pre-filtering:
- statecode eq 0 -- active records only
- createdon gt 2024-01-01 -- created after date
- Operators: eq, ne, gt, ge, lt, le, and, or, not
";

        [McpServerResource(
            MimeType = "text/markdown",
            Name = "server_logic_guide",
            Title = "Guide for server-side logic tools (plugins, workflows, flows, BPFs, business rules, custom APIs)",
            UriTemplate = "docs://server_logic_guide"),
        Description(
            "Filtering patterns, list/detail modes, and entity scoping for server-logic tools. " +
            "Read this when get_plugins, get_workflows, get_flows, etc. returns an error.")]
        public static string ServerLogicGuide() => @"
# Server-Side Logic Guide

Reference for all 6 server-logic inspection tools.

## Tool Overview

| Tool | What It Inspects | Dataverse Entity | Category Filter |
|------|-----------------|------------------|-----------------|
| get_plugins | Plugin assemblies, types, steps, images | pluginassembly, plugintype, sdkmessageprocessingstep | N/A |
| get_workflows | Classic workflows (background + realtime) | workflow | category=0 |
| get_custom_apis | Custom API definitions | customapi | N/A |
| get_flows | Power Automate cloud flows + run history | workflow + flowsession | category=5 |
| get_business_process_flows | BPF definitions + stages | workflow | category=4 |
| get_business_rules | Business rules | workflow | category=2 |

## Common Pattern: List vs Detail

All 6 tools share a list/detail pattern:

| Mode | When | What You Get |
|------|------|-------------|
| List | No ID provided | Summary table of all matching items |
| Detail | ID provided | Full detail for a single item |

For get_plugins: detail mode triggers when assembly_name matches exactly 1 assembly.
For get_workflows: detail mode also triggers when name_filter matches exactly 1 workflow.

## get_plugins

### Three Modes
1. No filters: List all plugin assemblies with type counts
2. assembly_name: Assembly detail with all types + steps + images
3. entity_name: All plugin steps on that entity across all assemblies

### Filter Parameters
| Parameter | Description | List Mode | Detail Mode |
|-----------|------------|-----------|-------------|
| assembly_name | Assembly name (contains) | Yes | Yes |
| entity_name | Entity logical name | No | Yes (shows all steps) |
| message_name | SDK message (Create, Update, Delete) | No | Yes |
| type_name | Plugin type name (contains) | No | Yes |
| stage | prevalidation, preoperation, postoperation, mainoperation | No | Yes |
| mode | sync or async | No | Yes |
| active_only | Only active steps (default: true) | No | Yes |

### Stage Values
| Stage | Value | When |
|-------|-------|------|
| PreValidation | 10 | Before validation, can cancel |
| PreOperation | 20 | Before DB write, can modify values |
| MainOperation | 30 | Custom API / DataProvider only |
| PostOperation | 40 | After DB write, most common |

### Image Types
| Type | Value | Content |
|------|-------|---------|
| PreImage | 0 | Record state BEFORE the operation |
| PostImage | 1 | Record state AFTER the operation |
| Both | 2 | Both pre and post states |

## get_workflows

### Filter Parameters
| Parameter | Description |
|-----------|------------|
| entity_name | Entity logical name (e.g., 'account') |
| mode | 'background' (async) or 'realtime' (sync) |
| active_only | Only activated workflows (default: true) |
| trigger_field | Filter by update trigger field (contains, e.g., 'statecode') |
| name_filter | Filter by workflow name (contains). 1 match -> auto-detail |

### Key Concepts
- mode: Background=async (always PostOperation), Realtime=sync (Pre or Post)
- scope: 1=User, 2=BusinessUnit, 3=Parent:ChildBU, 4=Organization
- runas: 0=Owner (of workflow), 1=Caller (triggering user)
- triggeronupdateattributelist: comma-separated field names that trigger on Update

## get_custom_apis

### Filter Parameters
| Parameter | Description |
|-----------|------------|
| api_name | Unique name or display name (contains) |
| entity_name | Bound entity logical name |
| active_only | Only active APIs (default: true) |

### Key Fields Returned
- unique_name, display_name, binding_type (Global, Entity, EntityCollection)
- is_private, allowed_custom_processing_step_type
- request_parameters, response_properties (with type, is_optional)
- plugin_type (backing implementation)

## get_flows

### Three Modes
1. flow_id EMPTY + action='list': List all cloud flows
2. flow_id PROVIDED + action='list': Flow detail + last 5 runs
3. flow_id PROVIDED + action='runs': Extended run history

### Filter Parameters
| Parameter | List Mode | Runs Mode |
|-----------|-----------|-----------|
| name_filter | Yes (contains) | No |
| owner_filter | Yes (contains) | No |
| status | active/draft/suspended/all | No |
| status_filter | No | succeeded/failed/running/cancelled/waiting/paused/skipped/suspended |
| minutes_ago | No | Last N minutes (default 1440 = 24h) |

### Run Status Values
NotSpecified(0), Paused(1), Running(2), Waiting(3), Succeeded(4), Skipped(5), Suspended(6), Cancelled(7), Failed(8)

## get_business_process_flows

### Filter Parameters
| Parameter | Description |
|-----------|------------|
| bpf_id | GUID for detail mode |
| entity_name | Primary entity logical name |
| active_only | Only active BPFs (default: true) |

### Detail Includes
- Stages (ordered), required fields per stage
- Primary entity, related entities
- Status (Active/Draft), owner

## get_business_rules

### Filter Parameters
| Parameter | Description |
|-----------|------------|
| entity_name | Entity logical name (REQUIRED) |
| rule_id | GUID for detail (shows conditions + actions + XAML) |
| active_only | Only active rules (default: true) |

### Notes
- Business rules are entity-specific (no global list without entity_name)
- Detail mode returns the full XAML definition which can be complex
- Business rules execute client-side (form) or server-side depending on scope
";

        [McpServerResource(
            MimeType = "text/markdown",
            Name = "instructions_for_sql",
            Title = "Instructions for Dataverse SQL queries",
            UriTemplate = "docs://instructions_for_sql"),
        Description(
            "Rules, supported operators, and T-SQL conversion cheat sheet for execute_sql. " +
            "Read this before writing complex SQL SELECT queries against Dataverse.")]
        public static string SqlInstructions() => @"
# Dataverse SQL Query Rules

## CRITICAL: Inspect Table Schema Before Composing SQL
- Never guess column names or publisher prefixes on custom tables (e.g. `new_`, `hs_`, `crm_`).
- ALWAYS call `get_tables(name='...', include_columns=true)` FIRST if you do not know the exact column logical names.
- `SELECT *` is STRICTLY UNSUPPORTED. You must explicitly specify every column you need.
- Primary Key is ALWAYS `{entity_logical_name}id` (e.g. `accountid`, `contactid`).

## Column Type Specifics
1. **Choice / OptionSet / StateCode / StatusCode**:
   - Compare with integer values, NOT strings (e.g. `WHERE a.statecode = 0`, NOT `WHERE a.statecode = 'Active'`).
   - Results provide integer values and formatted display labels via `@OData.Community.Display.V1.FormattedValue` annotations.
2. **Lookup Columns & JOINs**:
   - N (child) table uses lookup attribute (`parentcustomerid`).
   - 1 (parent) table uses primary key (`accountid`).
   - Example: `INNER JOIN account AS a ON c.parentcustomerid = a.accountid`
3. **Dates**:
   - Stored in UTC. Use ISO date literals `'2026-01-15'`.
   - Only `DATEADD(day/month/year, -N, GETUTCDATE())` or `DATEADD(..., 'literal')` are allowed in WHERE/ON.

## Conversion Cheat Sheet (Standard SQL -> Dataverse SQL)

| What you want to do (Standard SQL) | Dataverse SQL Equivalent | Why / Rule |
|-----------------------------------|--------------------------|------------|
| `SELECT * FROM account` | `SELECT a.name, a.telephone1 FROM account AS a` | `SELECT *` not supported. Name all columns explicitly. |
| `SELECT TOP 10 name FROM account` | Pass `max_records: 10` parameter (or write TOP — it is converted automatically) | Paging is controlled by the tool, not the SQL. |
| `SELECT name FROM account WHERE id IN (SELECT accountid FROM contact)` | `SELECT DISTINCT a.name FROM account AS a INNER JOIN contact AS c ON a.accountid = c.parentcustomerid` | Subqueries in `WHERE` are unsupported. Use `JOIN`. |
| `WHERE a.modifiedon > a.createdon` | Filter client-side or use `execute_fetchxml` | Column-to-column comparison unsupported. |
| `SELECT COUNT(*) ... HAVING COUNT(*) > 5` | Filter with `WHERE` prior to aggregation, or aggregate in client | `HAVING` clause is unsupported. |
| `SELECT YEAR(createdon), COUNT(*)` | Group by entity attribute only; process date parts in client | Functions in `SELECT` / `GROUP BY` are unsupported. |
| `WHERE createdon >= GETDATE() - 7` | `WHERE createdon >= DATEADD(day, -7, GETUTCDATE())` | Only `DATEADD` and `GETUTCDATE()` supported in WHERE. |
| `SELECT 'Total', COUNT(*)` | `SELECT COUNT(*) AS total_count` | Literal values in `SELECT` list unsupported. |
| `WHERE 1=1` | Omit dummy condition | Literal-to-literal comparisons unsupported. |
";
    }
}
