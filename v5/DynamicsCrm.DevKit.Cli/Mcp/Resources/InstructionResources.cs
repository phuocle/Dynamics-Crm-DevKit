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
            "Read this before making any changes to FormXML via execute_webapi.")]
        public static string FormXmlInstructions() => @"
# FormXML Manipulation Rules

## CRITICAL: Backup Before ANY Modification
- ALWAYS retrieve the current FormXML using get_forms with the specific form_id FIRST
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
- Always read the current FormXML using get_forms with the specific form_id
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
- Use the dedicated upsert_form tool (NOT execute_webapi) to apply changes
- upsert_form auto-handles: backup > validate > update > publish
- Verify the form loads correctly in the browser
";

        [McpServerResource(
            MimeType = "text/markdown",
            Name = "layoutxml_instructions",
            Title = "Instructions for manipulating Dataverse View LayoutXML",
            UriTemplate = "docs://instructions_for_views"),
        Description(
            "Rules and best practices for modifying Dataverse view definitions. " +
            "Read this before creating or modifying views via execute_webapi.")]
        public static string ViewInstructions() => @"
# View (SavedQuery) Manipulation Rules

## CRITICAL: Backup Before ANY Modification
- ALWAYS retrieve the current FetchXML + LayoutXML using get_views with the specific view_id FIRST
- Save BOTH XMLs to local backup files BEFORE making any changes
- Backup file naming:
  - {entity_name}_{view_id}_{yyyyMMddHHmmss}.fetchxml.bak
  - {entity_name}_{view_id}_{yyyyMMddHHmmss}.layoutxml.bak
- Backup location: {working_directory}/.devkit/backups/views/
- A broken FetchXML hides ALL data from users. A broken LayoutXML crashes the grid.
  Without backup, you may need to restore the entire environment.

## Rollback Procedure (If View Breaks)
1. Call upsert_view with action='undo', view_id, layoutxml=<layout backup file path>, fetchxml=<fetch backup file path>
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
<grid name=""resultset"" jump=""name"" select=""1"" icon=""1"" preview=""1"">
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
<grid name=""resultset"" jump=""name"" select=""1"" icon=""1"" preview=""1"">
  <row name=""result"" id=""accountid"">
    <cell name=""name"" width=""300"" />
    <cell name=""primarycontactid"" width=""150"" />
    <cell name=""statuscode"" width=""100"" ishidden=""1"" />
  </row>
</grid>
```
In this example, `statuscode` is fetched but not displayed in the grid.

## After Making Changes
- Use the dedicated upsert_view tool (NOT execute_webapi) to apply changes
- upsert_view auto-handles: backup > validate > sync-check > update > publish
- If something breaks: use action='undo' with the backup file paths from the response
- Verify the view loads correctly in the browser
";
    }
}
