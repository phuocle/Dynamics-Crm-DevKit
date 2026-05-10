# 01 - Shared Resolver Implementation Plan

Depends on: `00-resolution-contract.md`
Primary goal: create shared MCP resolver helpers before modifying individual tools.

## Files To Touch

Likely new file:

- `DynamicsCrm.DevKit.Cli/Mcp/Tools/Helper/DisplayNameFirstResolver.cs`

Likely existing file:

- `DynamicsCrm.DevKit.Cli/Mcp/Tools/Helper/SolutionResolverHelper.cs`

Do not modify:

- `DynamicsCrm.DevKit.Shared/Helper.cs`
- `DynamicsCrm.DevKit.Shared/XrmHelper.cs`

Those shared files are large by design and should not be refactored for this MCP-only behavior.

## Resolver Families

Implement these first, even if not all tools are migrated in the same PR:

- Solution: `friendlyname` -> `uniquename`
- Entity/table: `DisplayName.UserLocalizedLabel.Label` -> `LogicalName`
- Attribute/field: `DisplayName.UserLocalizedLabel.Label` -> `LogicalName`
- Global option set/choice: display label -> `Name`
- Model-driven app: `name` -> `uniquename`
- Web resource: `displayname` -> `name`
- Environment variable: `displayname` -> `schemaname`

## Solution Resolver

Current problem:

- `SolutionResolverHelper.Resolve(...)` tries exact `uniquename` first.

Target behavior:

```text
friendlyname contains input
  1 match -> ok
  >1 with one exact friendlyname -> ok
  >1 otherwise -> ambiguous

uniquename contains input
  1 match -> ok
  >1 -> ambiguous
  0 -> not found
```

Keep returned fields:

- `Prefix`
- `OptionValuePrefix`
- `PublisherId`
- `UniqueName`
- `FriendlyName`
- `Error`

If changing `SolutionResolveResult` is risky, keep it and add candidate text to `Error`.

## Entity Resolver

Metadata path:

- Use `RetrieveAllEntitiesRequest`
- `EntityFilters.Entity` is enough for entity display/logical names.
- Include unpublished metadata with `RetrieveAsIfPublished = true`.

Candidate fields:

- Display: `EntityMetadata.DisplayName?.UserLocalizedLabel?.Label`
- Logical: `EntityMetadata.LogicalName`
- Schema: `EntityMetadata.SchemaName`
- Id: `EntityMetadata.MetadataId`
- Other useful fields: `ObjectTypeCode`, `EntitySetName`

Recommended method signature:

```csharp
internal static ResolveResult<EntityMetadata> ResolveEntity(
    ServiceClient serviceClient,
    string input,
    string callerToolName)
```

Never lowercase the input before Display Name search. Trim only. Lowercase canonical logical name after resolution if needed.

## Attribute Resolver

Requires resolved entity first.

Metadata path:

- `RetrieveEntityRequest`
- `EntityFilters.Attributes`
- `RetrieveAsIfPublished = true`

Candidate fields:

- Display: `AttributeMetadata.DisplayName?.UserLocalizedLabel?.Label`
- Logical: `AttributeMetadata.LogicalName`
- Schema: `AttributeMetadata.SchemaName`
- Id: `AttributeMetadata.MetadataId`

Special case:

- Preserve existing image backing-field behavior from `FormFieldMetadata`.
- If an image backing id field maps to the image field, the resolver can return the image attribute as canonical.

Recommended method signature:

```csharp
internal static ResolveResult<AttributeMetadata> ResolveAttribute(
    ServiceClient serviceClient,
    string entityLogicalName,
    string input,
    string callerToolName)
```

## Global Choice Resolver

Metadata path:

- `RetrieveAllOptionSetsRequest`

Candidate fields:

- Display: `OptionSetMetadataBase.DisplayName?.UserLocalizedLabel?.Label`
- Logical: `OptionSetMetadataBase.Name`

Do not call `RetrieveOptionSetRequest { Name = input }` first.

## App Resolver

Dataverse table:

- `appmodule`

Candidate fields:

- Display: `name`
- Unique: `uniquename`
- Id: `appmoduleid`
- Unique id: `appmoduleidunique`

Existing `manage_app` also reads unpublished app modules. Keep that behavior if possible.

## Web Resource Resolver

Dataverse table:

- `webresource`

Candidate fields:

- Display: `displayname`
- Logical/unique: `name`
- Id: `webresourceid`

For create actions:

- `name` can be a new unique name. Use smart resolution only when the action needs an existing web resource, such as icon lookup, update by name, or detail by name.

## Environment Variable Resolver

Dataverse table:

- `environmentvariabledefinition`

Candidate fields:

- Display: `displayname`
- Logical/schema: `schemaname`
- Id: `environmentvariabledefinitionid`

Use for:

- detail
- update
- delete
- clear

Create still derives new `schemaname` after no existing definition resolves.

## Error Formatting Helper

Add a common formatter so tools do not invent different ambiguity text:

```csharp
internal static string FormatAmbiguous(
    string tag,
    string input,
    string phase,
    IEnumerable<ResolveCandidate> candidates,
    string retryParameterName)
```

Candidate table should include:

- DisplayName
- LogicalName / UniqueName / SchemaName
- Id when available

## Implementation Notes

- Use `StringComparison.OrdinalIgnoreCase` for in-memory matching.
- Escape FetchXML and QueryExpression LIKE inputs when querying Dataverse directly.
- Keep resolver helpers side-effect free.
- Do not publish, create backups, or mutate records inside resolver helpers.
- Resolver helpers should not catch and hide all exceptions. Return `Error` with enough detail for the calling tool.

## Acceptance Checks

- A Display Name match beats an exact logical name match.
- Multiple display contains with one exact display resolves.
- Multiple display contains with no exact display returns `IsError = true`.
- No display match then one logical contains resolves.
- No display match then multiple logical contains returns `IsError = true`.
- No matches returns not found.

