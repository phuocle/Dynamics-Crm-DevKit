# 06 - Misc Tools And Documentation Plan

Depends on:

- `00-resolution-contract.md`
- `01-shared-resolvers.md`

## Tools In Scope

- `get_audit_history`
- `get_system_jobs`
- `manage_role`
- `search_records`
- `publish_customizations`
- `manage_webresource`
- `manage_environment_variable`
- MCP resource docs and tool descriptions

## `get_audit_history`

File:

- `DynamicsCrm.DevKit.Cli/Mcp/Tools/GetAuditHistoryTool.cs`

Inputs:

- `entity_name`
- `attribute_name`
- `user_filter`

Target:

- Resolve `entity_name` Display Name first.
- Resolve `attribute_name` Display Name first in detail mode.
- Keep existing user filter behavior unless a separate user resolver is requested.

## `get_system_jobs`

File:

- `DynamicsCrm.DevKit.Cli/Mcp/Tools/GetSystemJobsTool.cs`

Inputs:

- `entity_name`

Target:

- Resolve `entity_name` Display Name first before object type code lookup.

## `manage_role`

File:

- `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageRoleTool.cs`

Inputs:

- `entity_name`
- `role_name`

Target:

- Resolve `entity_name` Display Name first for privilege filtering.
- Role names do not have a logical/display pair. Current role name contains behavior can remain.

## `search_records`

File:

- `DynamicsCrm.DevKit.Cli/Mcp/Tools/SearchRecordsTool.cs`

Inputs:

- `entities`

Target:

- Resolve each comma-separated entity token Display Name first before building Search API request.
- Empty `entities` still means all searchable entities.
- Search term stays raw search syntax.

## `publish_customizations`

File:

- `DynamicsCrm.DevKit.Cli/Mcp/Tools/PublishCustomizationsTool.cs`

Inputs:

- `entities`
- `appmodules`

Target:

- Resolve each entity token Display Name first before building publish XML.
- `appmodules` currently requires GUIDs. Either keep GUID-only or support app display/unique names using app resolver in a later change.
- Do not publish if any entity token is ambiguous or not found.

## `manage_webresource`

File:

- `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageWebResourceTool.cs`

Inputs:

- `solution_name`
- `name`
- `web_resource_id`

Target:

- Resolve `solution_name` Display Name first for create/list solution filtering.
- For detail/update/delete, consider allowing `name` or display name as an alternative to GUID in a later change. If added, use web resource Display Name first, then `name`.
- For create, `name` is the new web resource unique name. If no existing web resource resolves and create is intended, use the supplied name as the new name.

## `manage_environment_variable`

File:

- `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageEnvironmentVariableTool.cs`

Inputs:

- `variable_name`
- `solution_name`
- `display_name`

Target:

- Resolve `solution_name` Display Name first.
- For detail/update/delete/clear:
  - Resolve environment variable Display Name first, then `schemaname`.
- For create:
  - Resolve existing variable first from user-entered identity where available.
  - If not found, derive new schema name.
  - no prefix: solution prefix + PascalCase sanitized display text.
  - explicit prefix: trust user prefix.
  - do not require a second `confirmed_prefix` call when `solution_name` resolves a publisher prefix.
  - environment variable definitions expose `schemaname`; do not document or emit a separate logical name.

Create naming examples:

| Display Name | Publisher Prefix | Derived schemaname |
|---|---|---|
| `Invoice Production Mode` | `devkit` | `devkit_InvoiceProductionMode` |
| `New Environment Variable` | `devkit` | `devkit_NewEnvironmentVariable` |

## Documentation Updates

Files:

- `DynamicsCrm.DevKit.Cli/Mcp/Resources/InstructionResources.cs`
- tool `Description(...)` attributes
- docs under `DynamicsCrm.DevKit.Docs/Mcp/`

Update docs only after code behavior exists.

Replace older guidance like:

- "Use lowercase logical names for everything"
- "entity_name must be logical name"
- "solution_name resolves exact unique name first"
- "SchemaName should be lowercase"
- "Environment variables have both schema and logical names"

With:

- "User-entered names are resolved Display Name first, then Logical Name."
- "Ambiguous names return candidates and require re-call with a clearer value."
- "Raw tools stay strict."
- "`SchemaName` preserves portal/default casing; `LogicalName` is lowercase only when Dataverse exposes a logical name."
- "Environment variable definitions expose `schemaname`; global choices expose metadata `Name`."

## Acceptance Checks

- `search_records(entities: "Account")` sends `account` to Search API.
- `publish_customizations(entities: "Account")` publishes `account`.
- `manage_environment_variable(detail, variable_name: "API Endpoint")` resolves display name before schema name.
- `manage_webresource(list, solution_name: "Core")` resolves solution display name first.
