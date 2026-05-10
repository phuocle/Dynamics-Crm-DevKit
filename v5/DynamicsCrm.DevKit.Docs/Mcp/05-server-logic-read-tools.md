# 05 - Server Logic And Read Tool Plan

Depends on:

- `00-resolution-contract.md`
- `01-shared-resolvers.md`
- Entity and attribute resolvers from `02-schema-tools.md`

## Tools In Scope

- `get_custom_apis`
- `get_messages`
- `get_workflows`
- `get_business_process_flows`
- `get_business_rules`
- `get_plugins`
- `get_flows`

Most tools here are read-only. The main goal is to make discovery natural without silently choosing wrong objects.

## SchemaName / LogicalName Impact

These tools do not create metadata names. They should resolve user-entered entity or field Display Names to existing canonical `LogicalName` values for filtering and lookup only.

Workflow, Custom API, BPF, plugin assembly, flow, and message names are not Dataverse table/column `SchemaName` values; keep each tool's documented display/unique-name resolver behavior for those objects.

## `get_custom_apis`

File:

- `DynamicsCrm.DevKit.Cli/Mcp/Tools/GetCustomApisTool.cs`

Inputs:

- `api_name`
- `entity_name`

Target:

- Resolve `entity_name` Display Name first.
- For `api_name`, use Custom API Display Name first:
  - display fields: `displayname` and possibly `name`
  - logical/unique field: `uniquename`
- Detail mode should resolve one API or return ambiguity.
- List mode with empty `api_name` can return many rows.

## `get_messages`

File:

- `DynamicsCrm.DevKit.Cli/Mcp/Tools/GetMessagesTool.cs`
- helper `MessageDiscoveryHelper.cs`

Inputs:

- `entity_name`
- `message_name`

Target:

- Resolve `entity_name` Display Name first unless scope is `none`/`global`.
- SDK message names such as `Create`, `Update`, `Delete` can remain exact because they are platform message names.
- Custom Action detail should use workflow display `name` first, then `uniquename`.

## `get_workflows`

File:

- `DynamicsCrm.DevKit.Cli/Mcp/Tools/GetWorkflowsTool.cs`

Inputs:

- `entity_name`
- `trigger_field`
- `name_filter`

Target:

- Resolve `entity_name` Display Name first.
- If `trigger_field` is supplied, resolve it as an attribute Display Name first before matching `triggeronupdateattributelist`.
- `name_filter` is a list filter. If exactly one match triggers auto-detail, ambiguity handling is already list-like.

## `get_business_process_flows`

File:

- `DynamicsCrm.DevKit.Cli/Mcp/Tools/GetBusinessProcessFlowsTool.cs`

Inputs:

- `bpf_name`
- `entity_name`

Target:

- Resolve `entity_name` Display Name first.
- `bpf_name` currently searches workflow display `name` contains.
- Add fallback to `uniquename` contains only if display name has zero matches.
- If display contains is ambiguous with one exact display winner, resolve that one.

## `get_business_rules`

File:

- `DynamicsCrm.DevKit.Cli/Mcp/Tools/GetBusinessRulesTool.cs`

Inputs:

- `entity_name`

Target:

- Resolve `entity_name` Display Name first before object type code lookup.

## `get_plugins`

File:

- `DynamicsCrm.DevKit.Cli/Mcp/Tools/GetPluginsTool.cs`

Inputs:

- `entity_name`
- `assembly_name`
- `message_name`

Target:

- Resolve `entity_name` Display Name first.
- Plugin assembly `name` is not a Dataverse Display vs Logical pair. Current contains behavior can remain.
- SDK `message_name` can remain platform exact/contains behavior unless future tests show ambiguity.

## `get_flows`

File:

- `DynamicsCrm.DevKit.Cli/Mcp/Tools/GetFlowsTool.cs`

Inputs:

- `name_filter`
- `owner_filter`
- `flow_id`

Target:

- `flow_id` remains GUID.
- `name_filter` is list filter today. Multiple rows are not an error in list mode.
- If later adding detail-by-name, resolve workflow display `name` first, then `uniquename`.

## Acceptance Checks

- Entity-scoped tools accept `Account` and resolve `account`.
- BPF detail by exact display winner resolves when display contains returns multiple.
- Custom API detail by Display Name resolves before `uniquename`.
- Ambiguous detail requests return `IsError = true`.
- List/filter requests still return multiple rows normally.
