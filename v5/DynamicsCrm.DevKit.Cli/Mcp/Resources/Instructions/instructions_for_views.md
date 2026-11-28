> **Consolidated MCP Routing:** View operations use manage_ui(resource='view', action='list'|'detail'|'create'|'update'|'rename'|'set_default'|'undo', entity_name=..., id=..., name=..., solution_name=..., payload={is_personal_view, fetchxml, layoutxml, cell_updates_json, include_layoutjson, description}).


# View (SavedQuery) Manipulation Rules

## CRITICAL: Auto Backup
- update/rename/undo auto-back-up the current FetchXML AND LayoutXML (one pair, same timestamp) to {workspace}/.devkit/manage_view/{entity}/ BEFORE overwrite (workspace auto-resolved from MCP roots or server cwd — no parameter needed)
- A broken FetchXML hides ALL data from users. A broken LayoutXML crashes the grid — without backup you may need to restore the entire environment.

## Rollback (If View Breaks)
1. Call manage_ui(resource='view') action='undo' with view_id + fetchxml=<.fetchxml.xml path> AND layoutxml=<.layoutxml.xml path> — BOTH files of one backup pair from the update/rename response (fetchXmlBackupPath + layoutXmlBackupPath)
2. The tool reads both backups, validates them, restores both fields, and publishes. It saves a new backup pair before restoring. The FetchXML validator accepts Dataverse's `savedqueryid` on `<fetch>` and validates `distinct` as a boolean.
3. To revert a description change, call `update` with the previous description. The XML backups cover FetchXML and LayoutXML.

## System View Names

- `create` and `rename` accept a name already used by another system view on the same table. A create returns a new `viewId`, and a rename changes the view identified by `view_id`.
- Use `list` to find views that share a name, then pass the intended `view_id` in your next call. Each system view has its own `savedqueryid`.
- List summaries include `modifiedOn` when Dataverse returns a modification timestamp for the view.

## System View Description and Solution Membership

- Pass `description` on `create` or `update` to write the system view's description. Omitting it or passing `null` on `update` keeps the current description. Pass an empty string to remove the description.
- For a description-only edit, call `update` with `entity_name`, `view_id` (or a unique `view_name`), and `description`. You can also include `description` with a FetchXML rebuild or a cell patch.
- Pass `solution_name` on `create`, `update`, `rename`, or `set_default` to add the system view to an unmanaged solution. Use the solution display name or unique name. The tool adds the view as component type 26 using `AddSolutionComponentRequest`.
- To add an existing view to a solution, call `update` with the view identifier and `solution_name`. Add it to a model-driven app separately with `manage_ui(resource='app', action='add_components')`.
- Check `isAddToSolution` for the result and `addToSolutionMethod` for the method used. If the add request fails, `addToSolutionWarning` describes the failure and any changes to the view have already been saved. A dry run previews the request and reports `isAddToSolution: false`.

## CRITICAL: Verify Field Names Before Modifying Views
- Before adding ANY field to a view (FetchXML attributes/conditions, Quick Find columns), you MUST call `inspect_metadata(resource='tables')` first to verify the field's logical name exists on the entity.
- Do NOT guess or assume field names. User-provided names like "fpt site" may not match the actual logical name (e.g., it could be "ftpsiteurl", "websiteurl", or a custom field with a publisher prefix).
- After calling `inspect_metadata(resource='tables')`, search the attributes list for the field by display name or logical name to find the exact match.
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
- The view references only the **JS web resource + function name** (the function returns image names at runtime) — create the JS web resource FIRST (`manage_assets(resource='webresource')`), then attach it to the cell (`manage_ui(resource='view')`)
- Pass the plain web resource name for `imageproviderwebresource` — the tool stores it with the required `$webresource:` prefix automatically (a value already prefixed is kept as-is)
- Both attributes must be set on the same `<cell>`; `imageproviderwebresource` is the JS logic file, NOT the icon image (icons are separate 16x16 web resources named in the JS return value)
- Works on primary (replaces default icon) and non-primary columns; use a hidden cell for extra data
- An update with new `fetchxml` keeps cell attributes on surviving columns. A `cell_updates_json` patch in the same call runs after the layout is rebuilt and can override those attributes or set attributes on new columns.

### Cell Attribute Patching (cell_updates_json)
Use `cell_updates_json` with `action='update'` to patch cell attributes on the current layout, or combine it with `fetchxml` to patch the regenerated layout. `layoutxml` is reserved for the backup path used by `undo`.

To add a column and set its width in one call, pass the complete FetchXML and a serialized JSON array:

```json
{
  "action": "update",
  "entity_name": "account",
  "view_name": "Active Accounts",
  "fetchxml": "<fetch><entity name='account'><attribute name='name'/><attribute name='telephone1'/><filter><condition attribute='statecode' operator='eq' value='0'/></filter></entity></fetch>",
  "cell_updates_json": "[{\"cell_name\":\"telephone1\",\"set_attributes\":{\"width\":\"125\"}}]"
}
```

The following cell patch sets a custom icon:

```json
[{"cell_name":"statuscode","set_attributes":{"imageproviderwebresource":"new_/js/viewIcons.js","imageproviderfunctionname":"displayIconTooltip"}}]
```

Detach attributes with `remove_attributes` (JSON array of attribute names) — each item must carry `set_attributes`, `remove_attributes`, or both. Example (detach a custom icon from a cell):
```json
[{"cell_name":"statuscode","remove_attributes":["imageproviderwebresource","imageproviderfunctionname"]}]
```

Rules:
- `cell_name` must match a cell in the layout being patched. With `fetchxml`, that means the regenerated layout, including any new columns.
- Each item must have at least one of `set_attributes` or `remove_attributes`
- Protected attributes (`name`) cannot be set or removed
- `width` cannot be removed but can be set (to resize)
- Unknown/custom attributes are allowed
- Backup + validation still enforced

### Workflow
1. Create icon image web resources (16x16 PNG) — use `manage_assets(resource='webresource')` action='create'
2. Create JS web resource with the icon logic function — use `manage_assets(resource='webresource')` action='create'
3. Attach to the target cell via `manage_ui(resource='view')` action='update' with `cell_updates_json`. Include `fetchxml` if the same update adds the target column.

Source: https://learn.microsoft.com/en-us/power-apps/maker/data-platform/display-custom-icons-instead

## After Making Changes
- manage_ui(resource='view') auto-handles: backup > validate > sync-check > update > publish
- If something breaks: action='undo' with BOTH paths (fetchXmlBackupPath + layoutXmlBackupPath) from the response
- Verify the view loads correctly in the browser
