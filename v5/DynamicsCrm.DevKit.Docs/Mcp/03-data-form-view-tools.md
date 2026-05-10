# 03 - Data, Form, And View Tool Plan

Depends on:

- `00-resolution-contract.md`
- `01-shared-resolvers.md`
- Entity and attribute resolvers from `02-schema-tools.md`

## Tools In Scope

- `manage_record`
- `create_records`
- `generate_demo_data`
- `manage_form`
- `manage_view`
- helper `EntityParserHelper`
- helper `FormFieldMetadata`

## SchemaName / LogicalName Impact

These tools do not create table or column metadata names. They should not derive new `SchemaName` values.

For existing Dataverse fields, resolve user-entered Display Names / Schema Names / Logical Names to the canonical field `LogicalName`, then use that logical name in records, FormXML, FetchXML, and LayoutXML.

## `manage_record`

File:

- `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageRecordTool.cs`
- `DynamicsCrm.DevKit.Cli/Mcp/Tools/Helper/EntityParserHelper.cs`

Inputs:

- `entity_name`
- `fields_json` keys
- polymorphic `field@targetentity`
- `columns`

Target:

- Resolve `entity_name` Display Name first.
- Resolve every field key Display Name first.
- For polymorphic syntax:
  - Resolve field name before `@`.
  - Resolve target entity after `@`.
- Resolve read `columns` too, unless columns is empty/all.
- Preserve JSON keys in user input but write Dataverse `Entity` attributes using canonical logical names.

Implementation hint:

`EntityParserHelper.ParseFieldsToEntity(...)` currently builds an attribute map keyed only by logical name. Replace or extend this map with resolver calls:

```csharp
var fieldResolve = DisplayNameFirstResolver.ResolveAttribute(serviceClient, entityLogicalName, userFieldName, "manage_record");
if (!fieldResolve.IsSuccess) throw new ArgumentException(fieldResolve.Error);
var logicalFieldName = fieldResolve.Value.LogicalName;
```

Avoid repeated metadata calls by loading attributes once and resolving in-memory.

## `create_records`

File:

- `DynamicsCrm.DevKit.Cli/Mcp/Tools/CreateRecordsTool.cs`

Inputs:

- `entity_name`
- JSON keys in `records_json`
- CSV headers
- lookup target names when polymorphic syntax is used

Target:

- Resolve `entity_name` Display Name first.
- JSON input should resolve keys like `manage_record`.
- CSV headers:
  - Display Name contains first.
  - exact Display Name winner can resolve if multiple contains.
  - if no display match, logical contains.
  - ambiguity should skip the column with a clear warning or error depending current tool contract.

Current CSV behavior:

- Exact Display Name only.
- No logical fallback.

Recommended behavior:

- For bulk migration, partial failures are expected. If a CSV column is ambiguous, skip that column with warning unless it makes every row empty.
- For JSON inline, ambiguity should be an error because user expects exact field mapping.

## `generate_demo_data`

File:

- `DynamicsCrm.DevKit.Cli/Mcp/Tools/GenerateDemoDataTool.cs`

Inputs:

- `entity_name`
- `fields`
- `field_overrides[].logicalname`
- lookup targets

Target:

- Resolve entity Display Name first.
- Resolve requested fields Display Name first.
- Consider renaming JSON contract later, but for now keep `logicalname` key and allow its value to be either display or logical input.
- Resolve lookup target entity names Display Name first.

Do not infer dates. Preserve existing date requirement.

## `manage_form`

Files:

- `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageFormTool.cs`
- `DynamicsCrm.DevKit.Cli/Mcp/Tools/Form/FormFieldMetadata.cs`
- `DynamicsCrm.DevKit.Cli/Mcp/Tools/Form/*`

Inputs:

- `entity_name`
- operation fields
- event target `field:<name>`
- tab/section references are FormXML labels/names, not Dataverse metadata fields

Target:

- Resolve `entity_name` Display Name first.
- Before applying operations, collect all field references and resolve them to canonical logical names.
- Rewrite the operation field names in-memory or maintain a map from original input to canonical logical name.
- Preserve existing image backing-field correction.
- Do not apply FormXML changes until all referenced fields resolve unambiguously.

Important distinction:

- Tab/section labels are FormXML object labels and should use existing FormXML matching logic.
- Dataverse field references must use Display Name first resolver.

## `manage_view`

File:

- `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageViewTool.cs`

Inputs:

- `entity_name`
- FetchXML attributes
- LayoutXML cells
- Quick Find fields
- link-entity names and link attributes
- `cell_updates_json.cell_name`

Target:

- Resolve `entity_name` Display Name first.
- For generated or edited FetchXML/LayoutXML:
  - Resolve main entity attributes.
  - Resolve linked entity names.
  - Resolve linked entity attributes.
  - Resolve `cell_updates_json.cell_name`.
- Keep sync validation after resolution.

Implementation suggestion:

- Add a pre-validation normalization step:
  - Parse FetchXML with `XDocument`.
  - For each `<attribute name="...">`, replace with canonical logical name.
  - For each `<order attribute="...">`, replace with canonical logical name.
  - For `<condition attribute="...">`, resolve when it is an attribute reference.
  - For `<link-entity name="...">`, resolve entity.
  - For LayoutXML `<cell name="...">`, resolve field against the appropriate entity context where possible.

Do not resolve raw `execute_fetchxml`; this applies only to `manage_view` because it owns the view metadata.

## Acceptance Checks

- `manage_form` adding field `Invoice Date` resolves existing field display name.
- `manage_form` adding ambiguous field stops before backup/import.
- `manage_view` with `Invoice Date` in FetchXML is normalized before validation.
- `manage_record` create with JSON key `Invoice Date` writes canonical logical field.
- CSV import can use Display Name headers and logical-name headers.
