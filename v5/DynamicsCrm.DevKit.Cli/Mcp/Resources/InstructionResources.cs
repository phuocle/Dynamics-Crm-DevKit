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
3. Call publish_customizations for the entity
4. Verify form loads correctly in the browser

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
- Use the dedicated update_form tool (NOT execute_webapi) to apply changes
- update_form auto-handles: backup > validate > update > publish
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
1. Read the backup file contents
2. PATCH /savedqueries({viewid}) with body: {""fetchxml"": ""<original>"", ""layoutxml"": ""<original>""}
3. Call publish_customizations for the entity
4. Verify view loads correctly in the browser

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

## After Making Changes
- Use the dedicated update_view tool (NOT execute_webapi) to apply changes
- update_view auto-handles: backup > validate > sync-check > update > publish
- Verify the view loads correctly in the browser
";
    }
}
