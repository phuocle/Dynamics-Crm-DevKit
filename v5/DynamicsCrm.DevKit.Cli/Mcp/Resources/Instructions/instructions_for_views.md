
# View (SavedQuery) Manipulation Rules

## CRITICAL: Auto Backup
- update/rename/undo auto-back-up the current FetchXML AND LayoutXML (one pair, same timestamp) to {workspace}/.devkit/manage_view/{entity}/ BEFORE overwrite (workspace auto-resolved from MCP roots or server cwd — no parameter needed)
- A broken FetchXML hides ALL data from users. A broken LayoutXML crashes the grid — without backup you may need to restore the entire environment.

## Rollback (If View Breaks)
1. Call manage_view action='undo' with view_id + fetchxml=<.fetchxml.xml path> AND layoutxml=<.layoutxml.xml path> — BOTH files of one backup pair from the update/rename response (fetchXmlBackupPath + layoutXmlBackupPath)
2. Tool auto-handles: read both backups > validate > restore both fields verbatim > publish; pre-restore state is backed up again as a new pair

## CRITICAL: Verify Field Names Before Modifying Views
- Before adding ANY field to a view (FetchXML attributes/conditions, Quick Find columns), you MUST call `get_tables` first to verify the field's logical name exists on the entity.
- Do NOT guess or assume field names. User-provided names like "fpt site" may not match the actual logical name (e.g., it could be "ftpsiteurl", "websiteurl", or a custom field with a publisher prefix).
- After calling `get_tables`, search the attributes list for the field by display name or logical name to find the exact match.
- If the field does not exist, inform the user and list similar fields as suggestions.

## Structure
A view has TWO XML parts:

1. **FetchXML** -- WHICH records/columns to retrieve (you supply this)
2. **LayoutXML** -- HOW columns appear in the grid (AUTO-GENERATED from FetchXML: columns follow attribute order, width by data type)

## FetchXML (Query)
```xml
<fetch version="1.0" output-format="xml-platform" mapping="logical">
  <entity name="account">
    <attribute name="name" />
    <attribute name="primarycontactid" />
    <attribute name="telephone1" />
    <attribute name="accountid" />
    <order attribute="name" descending="false" />
    <filter type="and">
      <condition attribute="statecode" operator="eq" value="0" />
    </filter>
  </entity>
</fetch>
```

## LayoutXML (auto-generated — do NOT author it)
The tool builds LayoutXML from FetchXML: one `<cell>` per `<attribute>` (same order), `row id` = primary key, `jump` = primary name column, `object` = entity type code (auto-populated). Widths in pixels by data type (100 narrow .. 300 extra wide). You only touch individual cell attributes via `cell_updates_json` (see below).

## Quick Find Views (querytype=4) -- Find Columns

Quick Find views have THREE types of columns:
1. **View columns** -- `<attribute>` elements in FetchXML -> shown in grid results
2. **Find columns** -- `<filter isquickfindfields="1">` -> searched when user types in search bar
3. **Filter columns** -- `<filter type="and">` -> pre-filter records (e.g., statecode=Active)

Find columns and View columns are INDEPENDENT. A field can be a Find column without being a View column.

### Find Column Structure (isquickfindfields)
```xml
<filter type="or" isquickfindfields="1">
  <condition attribute="name" operator="like" value="{0}" />
  <condition attribute="emailaddress1" operator="like" value="{0}" />
  <condition attribute="telephone1" operator="like" value="{0}" />
</filter>
```

### Quick Find Rules
- Find columns use `operator="like"` with `value="{0}"` (placeholder for user input)
- The filter MUST have `type="or"` and `isquickfindfields="1"` — sits alongside the normal `<filter type="and">` in the same `<entity>`
- NEVER remove the `isquickfindfields` filter -- it disables search entirely
- Add/remove Find columns by adding/removing `<condition>` inside that filter (keep at least one)
- Any field type is allowed as a Find column; keep only essential fields for search performance

Source: https://learn.microsoft.com/en-us/power-apps/developer/data-platform/quick-find

## Hidden Columns (ishidden)
- Use `ishidden="1"` on a `<cell>` to include a column in the query but hide it from the grid
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
  `<cell name="opportunityratingcode" width="100" imageproviderwebresource="new_/js/ratingicons.js" imageproviderfunctionname="displayIconTooltip" />`

### JavaScript Function Signature
```javascript
function displayIconTooltip(rowData, userLCID) {
    var str = JSON.parse(rowData);
    var coldata = str.opportunityratingcode_Value;
    // Return: [imageWebResourceName, tooltipText]
    return ["new_Hot", "Opportunity is Hot"];
}
```

### Rules
- The JS function receives the row as JSON + user locale (LCID); values via `{columnname}_Value` (integer for option sets); return `[imageWebResourceName, tooltipText]` — imageWebResourceName is the image **web resource name** (not a URL); async OK (may return a Promise), never sync XHR
- The view references only the **JS web resource + function name** (the function returns image names at runtime) — create the JS web resource FIRST (`manage_webresource`), then attach it to the cell (`manage_view`)
- Pass the plain web resource name for `imageproviderwebresource` — the tool stores it with the required `$webresource:` prefix automatically (a value already prefixed is kept as-is)
- Both attributes must be set on the same `<cell>`; `imageproviderwebresource` is the JS logic file, NOT the icon image (icons are separate 16x16 web resources named in the JS return value)
- Works on primary (replaces default icon) and non-primary columns; use a hidden cell for extra data
- update with a new fetchxml keeps cell attributes (icon, width, ishidden, ...) on surviving columns; columns dropped from the fetchxml lose their cell config

### Cell Attribute Patching (cell_updates_json)
Use `cell_updates_json` parameter with `action='update'` to patch cell attributes on the current layout without changing the FetchXML:
```json
[{"cell_name":"statuscode","set_attributes":{"imageproviderwebresource":"new_/js/viewIcons.js","imageproviderfunctionname":"displayIconTooltip"}}]
```

Detach attributes with `remove_attributes` (JSON array of attribute names) — each item must carry `set_attributes`, `remove_attributes`, or both. Example (detach a custom icon from a cell):
```json
[{"cell_name":"statuscode","remove_attributes":["imageproviderwebresource","imageproviderfunctionname"]}]
```

Rules:
- `cell_name` must match an existing `<cell name="...">` in the LayoutXML (case-insensitive)
- Each item must have at least one of `set_attributes` or `remove_attributes`
- Protected attributes (`name`) cannot be set or removed
- `width` cannot be removed but can be set (to resize)
- Unknown/custom attributes are allowed
- Backup + validation still enforced

### Workflow
1. Create icon image web resources (16x16 PNG) — use `manage_webresource` action='create'
2. Create JS web resource with the icon logic function — use `manage_webresource` action='create'
3. Attach to the target cell via `manage_view` action='update' with `cell_updates_json` (do NOT pass fetchxml in the same call)

Source: https://learn.microsoft.com/en-us/power-apps/maker/data-platform/display-custom-icons-instead

## After Making Changes
- manage_view auto-handles: backup > validate > sync-check > update > publish
- If something breaks: action='undo' with BOTH paths (fetchXmlBackupPath + layoutXmlBackupPath) from the response
- Verify the view loads correctly in the browser
