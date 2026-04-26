using ModelContextProtocol.Server;
using System.ComponentModel;

namespace DynamicsCrm.DevKit.Cli.Mcp.Resources
{
    [McpServerResourceType]
    public class InstructionResources
    {
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
- Backup file naming: {entity_name}_{form_id}_{yyyyMMddHHmmss}.formxml.bak
  Example: account_abc123_20260329180000.formxml.bak
- Backup location: {working_directory}/.devkit/backups/forms/
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

## Naming Conventions
- Tab names: `tab_$label` (lowercase, no spaces/special chars)
  Example: tab_general, tab_details, tab_address
- Section names: `$tablabel_sec_$label`
  Example: general_sec_contact_info, details_sec_timeline

## Placement Rules
- New tabs: add as the LAST tab (unless user specifies otherwise)
- New sections: add as the LAST section in the first tab (unless user specifies)
- New fields: add to the last row in the target section

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

## CRITICAL: Backup Before ANY Modification
- ALWAYS retrieve the current FetchXML + LayoutXML using manage_view with action='detail' and the specific view_id FIRST
- Save BOTH XMLs to local backup files BEFORE making any changes
- Backup file naming:
  - {entity_name}_{view_id}_{yyyyMMddHHmmss}.fetchxml.bak
  - {entity_name}_{view_id}_{yyyyMMddHHmmss}.layoutxml.bak
- Backup location: {working_directory}/.devkit/backups/views/
- A broken FetchXML hides ALL data from users. A broken LayoutXML crashes the grid.
  Without backup, you may need to restore the entire environment.

## Rollback Procedure (If View Breaks)
1. Call manage_view with action='undo', view_id, layoutxml=<layout backup file path>, fetchxml=<fetch backup file path>
2. Tool auto-handles: read backups > validate > restore > publish (no new backup created)
3. The backup file paths are returned in every update/rename response
4. Backup files are at: {working_directory}/.devkit/backups/views/

## CRITICAL: Verify Field Names Before Modifying Views
- Before adding ANY field to a view (FetchXML, LayoutXML, or Quick Find columns), you MUST call `get_tables` first to verify the field's logical name exists on the entity.
- Do NOT guess or assume field names. User-provided names like ""fpt site"" may not match the actual logical name (e.g., it could be ""ftpsiteurl"", ""websiteurl"", or a custom field with a publisher prefix).
- After calling `get_tables`, search the attributes list for the field by display name or logical name to find the exact match.
- If the field does not exist, inform the user and list similar fields as suggestions.
- This prevents failed updates due to invalid field names and avoids wasting backup/restore cycles.

## Structure
A view has TWO XML parts that must be kept in sync:

1. **FetchXML** -- defines WHICH records and columns to retrieve
2. **LayoutXML** -- defines HOW columns appear in the grid

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

## LayoutXML (Columns)
```xml
<grid name=""resultset"" object=""1"" jump=""name"" select=""1"" icon=""1"" preview=""1"">
  <row name=""result"" id=""accountid"">
    <cell name=""name"" width=""300"" />
    <cell name=""primarycontactid"" width=""150"" />
    <cell name=""telephone1"" width=""100"" />
  </row>
</grid>
```

## Rules
- Every `<attribute>` in FetchXML MUST have a corresponding `<cell>` in LayoutXML
- The `id` attribute in `<row>` must be the primary key field (e.g., accountid)
- The `jump` attribute in `<grid>` is the column that becomes a clickable link
- The `object` attribute in `<grid>` is the entity's Object Type Code (integer, e.g., 1=account, 2=contact). The tool auto-populates it if omitted
- Column widths are in pixels
- Standard column widths: 100 (narrow), 150 (medium), 200 (wide), 300 (extra wide)

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

### Supported Find Column Types
Any field type can be added as a Quick Find Find Column. Dataverse does NOT restrict column types
for the isquickfindfields filter. All column types (String, Memo, Lookup, Picklist, Integer, Money,
DateTime, Boolean, etc.) can be used as Find Columns.

### Quick Find Rules
- Find columns use `operator=""like""` with `value=""{0}""` (placeholder for user input)
- The filter MUST have `type=""or""` and `isquickfindfields=""1""`
- NEVER remove the `isquickfindfields` filter -- it disables search entirely
- To add a Find column: add a `<condition>` inside the `isquickfindfields` filter
- To remove a Find column: remove the `<condition>` (keep at least one)
- Keep only essential fields as Find columns for better search performance

### Quick Find FetchXML Example
```xml
<fetch version=""1.0"" output-format=""xml-platform"" mapping=""logical"">
  <entity name=""account"">
    <attribute name=""name"" />
    <attribute name=""accountnumber"" />
    <attribute name=""telephone1"" />
    <attribute name=""accountid"" />
    <order attribute=""name"" descending=""false"" />
    <filter type=""and"">
      <condition attribute=""statecode"" operator=""eq"" value=""0"" />
    </filter>
    <filter type=""or"" isquickfindfields=""1"">
      <condition attribute=""name"" operator=""like"" value=""{0}"" />
      <condition attribute=""accountnumber"" operator=""like"" value=""{0}"" />
      <condition attribute=""emailaddress1"" operator=""like"" value=""{0}"" />
      <condition attribute=""telephone1"" operator=""like"" value=""{0}"" />
    </filter>
  </entity>
</fetch>
```

Source: https://learn.microsoft.com/en-us/power-apps/developer/data-platform/quick-find

## Hidden Columns (ishidden)
- Use `ishidden=""1""` on a `<cell>` to include a column in the query but hide it from the grid
- The column's `<attribute>` MUST still be in FetchXML (sync rule still applies)
- Valid values: `0` or omitted = visible, `1` = hidden
- Common use cases:
  - Custom icon rendering — hidden column provides data for `imageproviderwebresource`/`imageproviderfunctionname`
  - JavaScript web resource data — column fetched for client-side logic but not displayed
  - Sort/filter support — column used in `<order>` or `<filter>` but not shown to users

### Hidden Column Example
```xml
<grid name=""resultset"" object=""1"" jump=""name"" select=""1"" icon=""1"" preview=""1"">
  <row name=""result"" id=""accountid"">
    <cell name=""name"" width=""300"" />
    <cell name=""primarycontactid"" width=""150"" />
    <cell name=""statuscode"" width=""100"" ishidden=""1"" />
  </row>
</grid>
```
In this example, `statuscode` is fetched but not displayed in the grid.

## Custom Icons in Views (imageproviderwebresource / imageproviderfunctionname)

Dataverse supports custom icon graphics alongside cell values in list views.

### LayoutXML Attributes
- `imageproviderwebresource` — JS web resource name (e.g., `new_/js/ratingicons.js`)
- `imageproviderfunctionname` — JS function name (e.g., `MyNamespace.displayIconTooltip`)

### LayoutXML Example
```xml
<grid name=""resultset"" object=""3"" jump=""name"" select=""1"" icon=""1"" preview=""1"">
  <row name=""result"" id=""opportunityid"">
    <cell name=""name"" width=""300"" />
    <cell name=""opportunityratingcode"" width=""100""
          imageproviderwebresource=""new_/js/ratingicons.js""
          imageproviderfunctionname=""displayIconTooltip"" />
    <cell name=""estimatedvalue"" width=""150"" />
  </row>
</grid>
```

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
- The JS function receives the entire row as JSON + user locale (LCID)
- Access column values via `{columnname}_Value` (integer for option sets)
- Return an array: `[imageWebResourceName, tooltipText]`
- Image web resources should be 16x16 PNG/JPG/GIF
- `imageproviderwebresource` is the JS logic file, NOT the icon image file
- Icon images are separate web resources referenced by name in the JS return value
- Both attributes must be set on the same `<cell>` element
- Works on primary column (replaces default icon) and non-primary columns (adds secondary icon)
- To use data from another column for icon logic, add that column as hidden: `<cell name=""statuscode"" ishidden=""1"" />`
- Returning a JS Promise is supported in Unified Interface (for async data retrieval)
- Do NOT use synchronous XMLHttpRequest in the icon function

### Cell Attribute Patching (cell_updates_json)
Use `cell_updates_json` parameter with `action='update'` to patch cell attributes without rebuilding full LayoutXML:
```json
[{""cell_name"":""statuscode"",""set_attributes"":{""imageproviderwebresource"":""new_/js/viewIcons.js"",""imageproviderfunctionname"":""displayIconTooltip""}}]
```

Usage modes:
1. **Patch only**: pass `cell_updates_json` without `layoutxml` — patches current view in Dataverse
2. **Combined**: pass both `layoutxml` + `cell_updates_json` — patch applied on supplied layout
3. **Full replace**: pass only `layoutxml` (existing behavior, unchanged)

Rules:
- `cell_name` must match an existing `<cell name=""..."">` in the LayoutXML (case-insensitive)
- Protected attributes (`name`) cannot be set or removed
- `width` cannot be removed but can be set (to resize)
- Unknown/custom attributes are allowed
- Backup + validation still enforced

### Workflow
1. Create icon image web resources (16x16 PNG) — use `manage_webresource` action='create'
2. Create JS web resource with the icon logic function — use `manage_webresource` action='create'
3. Use `cell_updates_json` to add icon attributes to target cell, or include them in full LayoutXML
4. Update the view via `manage_view` action='update'

Source: https://learn.microsoft.com/en-us/power-apps/maker/data-platform/display-custom-icons-instead

## After Making Changes
- Use the dedicated manage_view tool to apply changes
- manage_view auto-handles: backup > validate > sync-check > update > publish
- If something breaks: use action='undo' with the backup file paths from the response
- Verify the view loads correctly in the browser
";

        [McpServerResource(
            MimeType = "text/markdown",
            Name = "schema_tools_guide",
            Title = "Guide for Dataverse schema tools (upsert_table, upsert_column, upsert_relationship)",
            UriTemplate = "docs://schema_tools_guide"),
        Description(
            "Rules, type matrices, and immutable property lists for schema tools. " +
            "Read this when upsert_table, upsert_column, or upsert_relationship returns an error.")]
        public static string SchemaToolsGuide() => @"
# Schema Tools Guide

Reference for `upsert_table`, `upsert_column`, and `upsert_relationship`.

## upsert_table

### Create Mode
- display_name, display_collection_name, solution_name are REQUIRED
- entity_name MUST include publisher prefix (e.g., 'new_project')
- If no prefix (no underscore), prefix auto-resolved from solution_name's publisher
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
- Only entity_name required to identify the entity
- Only provided params are updated; omitted ones keep current values
- Immutable properties are IGNORED with warnings if passed during update

### Irreversible Options (Manage via Power Apps UI Only)
Activities, Feedback, Change Tracking, Business Process Flows, Connections, Queues, Sending Email.
These CANNOT be turned off once enabled.

### Post-Create Workflow
1. `upsert_table` -- create entity
2. `upsert_column` -- add columns
3. `manage_form(action='update', operations=[...])` -- customize the form
4. `publish_customizations` -- publish (if auto_publish=false)

---

## upsert_column

### Attribute Type Matrix

| Type | Required Params (Create) | Optional Params | Defaults |
|------|-------------------------|-----------------|----------|
| string | entity_name, attribute_name, attribute_type, display_name | max_length, format, required_level | max_length=100, format='Text' |
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

---

## upsert_relationship

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
    }
}
