# MCP Display Name First Resolution Audit

Date: 2026-05-10
Scope: `DynamicsCrm.DevKit.Cli/Mcp`
Status: analysis only, no tool code changes

## Required Rule

For any MCP argument where a user can reasonably type either a Display Name or a Logical Name / Unique Name / Schema Name, the tool must resolve in this exact order:

1. Treat the input as Display Name first.
   - Search by contains, case-insensitive.
   - If count = 1, resolve to the canonical logical / unique / schema name or id.
   - If count = 0, continue to logical-name search.
   - If count > 1, stop and return an ambiguity list. The AI must ask the user.
2. Treat the same input as Logical Name / Unique Name / Schema Name.
   - Search by contains, case-insensitive.
   - If count = 1, resolve.
   - If count = 0, stop with a not-found error and ask the user to enter again.
   - If count > 1, stop and return an ambiguity list. The AI must ask the user.

Important: do not shortcut to exact logical name first. If Display Name contains has multiple matches, stop even if one logical name is exact.

This applies to user phrases such as "Solution ABC", "Entity ABC", "Field ABC", "Choice ABC", "App ABC", and similar object references.

## Executive Summary

The current MCP tools are inconsistent. Most tools still assume logical names, or they combine display and logical matches in one query. A few tools have partial fuzzy logic, but the order is usually wrong.

Highest-risk shared problem:

- `DynamicsCrm.DevKit.Cli/Mcp/Tools/Helper/SolutionResolverHelper.cs` resolves exact `uniquename` before display name. This violates the new rule and affects many mutating tools.
- `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageChoiceTool.cs` was recently changed, but current diff still tries exact logical name first and does not perform logical-name contains after display-name miss.
- Entity and field resolution is not centralized. Many tools directly call `RetrieveEntityRequest(LogicalName=...)`, lowercase user input, or validate fields only against `AttributeMetadata.LogicalName`.

Recommended fix direction: create a shared MCP-only resolver helper, then migrate tool families in priority order.

## Implementation Packets

Use these smaller files to implement the audit without losing context:

- `00-resolution-contract.md` - approved resolver contract and edge-case decisions.
- `01-shared-resolvers.md` - shared helper design and C# guidance.
- `02-schema-tools.md` - high-risk metadata tools: choices, tables, columns, relationships, solutions.
- `03-data-form-view-tools.md` - data CRUD/import/demo generation, forms, and views.
- `04-app-command-ribbon-tools.md` - model-driven apps, modern commands, classic ribbon.
- `05-server-logic-read-tools.md` - workflows, flows, BPFs, business rules, plugins, Custom APIs/messages.
- `06-misc-and-docs.md` - audit/jobs/search/publish/web resources/env vars and docs.
- `07-test-matrix.md` - shared resolver test matrix and smoke scenarios.

## Current Shared Resolver Issues

| Area | File | Current behavior | Violation |
|---|---|---|---|
| Solution resolver | `DynamicsCrm.DevKit.Cli/Mcp/Tools/Helper/SolutionResolverHelper.cs` | exact `uniquename` -> exact `friendlyname` -> friendly contains -> unique contains | Must start with Display Name contains; exact unique first is not allowed |
| Solution components | `DynamicsCrm.DevKit.Cli/Mcp/Tools/GetSolutionComponentsTool.cs` | one OR query over `uniquename` and `friendlyname`, then exact `uniquename` wins if multiple | Must separate display phase from logical phase; exact unique priority is wrong |
| Entity resolver | `DynamicsCrm.DevKit.Cli/Mcp/Tools/UpsertColumnTool.cs` | exact logical first, then combined logical/display fuzzy, then always asks confirmation | Wrong order and wrong count behavior. One display match should resolve automatically |
| Field resolver | `DynamicsCrm.DevKit.Cli/Mcp/Tools/Form/FormFieldMetadata.cs` and `EntityParserHelper.cs` | metadata dictionaries keyed by logical name only | User-entered field display names are rejected instead of resolved |

## Detailed Findings

### P0 - Must Fix Before Broad Rollout

| Tool / helper | Inputs | Current behavior | Risk |
|---|---|---|---|
| `SolutionResolverHelper` | `solution_name` | exact unique first, display second | All tools using solution names can choose wrong solution when user typed display text |
| `get_solution_components` | `solution_name` | combined unique/display contains; exact unique overrides ambiguity | Directly violates the specified rule for "Solution ABC" |
| `manage_choice` | `optionset_name`, `solution_name` | detail tries exact logical first, then display contains; no logical contains fallback after display miss | "Choice ABC" can resolve to logical before display; partial fix is still not compliant |
| `get_tables` | `entity_name`, detail `filter` | entity detail requires exact logical; detail filter only checks attribute logical prefix | "Entity ABC" and "Field ABC" are not smart; this tool is the discovery path for many others |
| `upsert_column` | `entity_name`, `attribute_name`, `lookup_target`, `global_optionset_name`, `solution_name` | entity exact logical first; field exact logical only; lookup targets exact logical only; global choice name passed as-is | Very high risk because wrong/unknown display field can create a new field instead of updating existing field |
| `upsert_table` | `entity_name`, `solution_name` | update detection uses exact logical; otherwise create/prefix flow | "Entity ABC" can fail or create new metadata instead of updating the intended table |
| `upsert_relationship` | `referenced_entity`, `referencing_entity`, `entity1`, `entity2`, `entity_name`, `attribute_name`, `solution_name` | entity and field inputs are lowercased and used as exact logical names | Relationship operations are metadata-mutating, so ambiguous inputs must stop before changes |

### P1 - User-Facing Metadata Tools

| Tool | Inputs | Current behavior | Needed change |
|---|---|---|---|
| `manage_form` | `entity_name`, operation `fields`, event `field:<name>` | entity exact logical; field ops validate against logical-only map | Resolve entity and each field display-first before editing FormXML |
| `manage_view` | `entity_name`, FetchXML fields, LayoutXML cells, link-entity names | entity and fields are logical-only | Resolve entity first; for generated or patched XML, resolve field names display-first before validation |
| `manage_record` | `entity_name`, `fields_json` keys, polymorphic `@targetentity`, `columns` | entity and field keys are logical-only | Resolve entity, field keys, target entity names, and read columns display-first |
| `create_records` | `entity_name`, JSON keys, CSV headers | entity exact logical; CSV headers use exact Display Name only and ignore logical fallback | Resolve entity; for CSV headers use display contains first then logical contains; for JSON keys resolve field names |
| `generate_demo_data` | `entity_name`, `fields`, `field_overrides.logicalname`, lookup targets | entity and fields are logical-only | Resolve table and requested fields before data generation |
| `search_records` | `entities` | comma-separated logical names only | For user-entered entity list, resolve each token display-first before Search API call |
| `publish_customizations` | `entities`, `appmodules` | entity logical names and appmodule GUIDs only | Entity names should resolve display-first; appmodules may optionally accept app display/unique name through app resolver |

### P1 - App / Command / Ribbon

| Tool | Inputs | Current behavior | Needed change |
|---|---|---|---|
| `manage_app` | `app`, `app_name`, `solution_name`, `icon_webresource`, navigation `entity` | `ResolveApp` queries app display `name` and `uniquename` together; exact match can win; entity inputs exact logical; icon WR uses exact name/display | App should resolve display name contains first, then unique name contains. Navigation entity should resolve table display-first |
| `manage_command` | `app_name`, `entity_name`, JS/icon web resources | `app_name` searches app display name only; `entity_name` exact logical; web resources exact logical name only | Resolve entity display-first. Consider app unique-name fallback and WR display-first resolution |
| `manage_ribbon` | `entity_name`, operation labels | entity exact logical | Resolve entity display-first before retrieving or importing ribbon XML |

### P1 - Environment Variables and Web Resources

| Tool | Inputs | Current behavior | Needed change |
|---|---|---|---|
| `manage_environment_variable` | `variable_name`, `solution_name` | variable is exact `schemaname`; solution uses violating helper | Resolve variable display name contains first, then schema name contains, before detail/update/delete/clear |
| `manage_webresource` | `solution_name`, `name`, `web_resource_id` | create/list mostly use web resource unique `name`; solution list join uses exact `uniquename`; solution create uses violating helper | For list solution filter, resolve solution display-first. For detail/update/delete, consider allowing name/display resolution in addition to GUID |

### P2 - Server Logic Discovery Tools

| Tool | Inputs | Current behavior | Notes |
|---|---|---|---|
| `get_custom_apis` | `api_name`, `entity_name` | detail uses exact `uniquename`; entity exact logical | Custom API has `displayname`, `name`, and `uniquename`; detail should resolve display-first |
| `get_messages` | `entity_name`, `message_name` | entity exact logical; SDK message exact name; custom action exact workflow name/uniquename | For Custom Actions, workflow display `name` should be display phase, then `uniquename` phase |
| `get_workflows` | `entity_name`, `trigger_field`, `name_filter` | entity exact logical; trigger field contains string only | Resolve entity display-first. If trigger_field is user-entered field display name, resolve field display-first |
| `get_business_process_flows` | `bpf_name`, `entity_name` | BPF name uses display-name contains; entity exact logical; no unique-name fallback | Entity must resolve display-first; BPF should add logical/unique fallback after display miss |
| `get_business_rules` | `entity_name` | exact logical via object type code | Resolve entity display-first |
| `get_plugins` | `entity_name`, `message_name` | entity exact logical; assembly name is plugin assembly name only | Resolve entity display-first |
| `get_flows` | `name_filter`, `owner_filter` | display-name filter only; no unique-name fallback | If used as resolver, add unique-name fallback; if pure list filter, current behavior is acceptable |

### P2 - Audit, Jobs, Roles

| Tool | Inputs | Current behavior | Notes |
|---|---|---|---|
| `get_audit_history` | `entity_name`, `attribute_name`, `user_filter` | entity exact logical; attribute name not resolved; user filter has email/name-specific logic | Resolve entity and field display-first for record audit detail |
| `get_system_jobs` | `entity_name` | exact logical -> object type code | Resolve entity display-first |
| `manage_role` | `entity_name` privilege filter | entity filter is string-only downstream | Resolve entity display-first if entity privilege filter is supplied |

### Lower-Level Tools To Probably Keep Strict

| Tool | Reason |
|---|---|
| `execute_fetchxml` | Raw FetchXML should stay raw; callers can use smart tools first |
| `execute_webapi` | Raw Web API should stay raw and not mutate user URLs |
| `parse_record_url` | Parses URLs/GUIDs/etc, not a display/logical resolver |
| `whoami` | No user-entered object name |
| `get_plugin_trace_logs` | Mostly trace log filters, type names, message names, GUIDs |

## Documentation / Prompt Conflicts

Some instructions currently train the AI to use logical names only. These should be updated after the resolver implementation:

- `InstructionResources.cs` field guidance says to call `get_tables` and manually search display or logical names before form/view edits.
- `schema_tools_guide` text says "Use lowercase logical names for everything".
- Tool descriptions for `solution_name` often document exact unique-name priority.
- Multiple entity parameters say "Entity logical name" only, which encourages the AI to pre-normalize user input instead of letting tools resolve it.

After code changes, docs should say: pass the user-entered term to the tool; the tool resolves Display Name first, then Logical Name, and returns ambiguity candidates when needed.

## Proposed Implementation Plan

1. Add a central MCP resolver helper, likely under `DynamicsCrm.DevKit.Cli/Mcp/Tools/Helper/`.
   - `ResolveSolutionDisplayFirst`
   - `ResolveEntityDisplayFirst`
   - `ResolveAttributeDisplayFirst`
   - `ResolveOptionSetDisplayFirst`
   - `ResolveAppDisplayFirst`
   - `ResolveWebResourceDisplayFirst`
   - `ResolveEnvironmentVariableDisplayFirst`
2. Return a common resolver result shape.
   - `ResolvedLogicalName`
   - `ResolvedUniqueName`
   - `ResolvedId`
   - `DisplayName`
   - `Candidates`
   - `Status`: `ok`, `ambiguous`, `not_found`
3. Use stable error tags so AI behavior is predictable.
   - `[AmbiguousEntity]`
   - `[AmbiguousField]`
   - `[AmbiguousSolution]`
   - `[NotFoundEntity]`
4. Fix solution resolution first because it is shared by many mutating tools.
5. Fix entity resolution next and wire it into all tools that accept `entity_name` or entity-like parameters.
6. Fix field resolution and wire it into form, view, record, demo-data, column, and relationship paths.
7. Fix specialized resolvers: global choice, app, environment variable, web resource, Custom API / action / workflow.
8. Update tool descriptions and instruction resources after behavior is implemented.

## Suggested Test Matrix

For every resolver:

- Display contains = 1, logical contains also = 1 different record -> choose display match.
- Display contains > 1, logical exact = 1 -> stop ambiguous display.
- Display contains = 0, logical contains = 1 -> choose logical match.
- Display contains = 0, logical contains > 1 -> stop ambiguous logical.
- Display contains = 0, logical contains = 0 -> not found.
- Input casing differs -> still resolves.
- Display label missing/null -> logical phase still works.

For mutating tools:

- Ambiguous input must return before any create/update/delete/publish/backup.
- Dry-run must use the same resolver behavior as live mode.
- Structured content should include candidates where existing output contracts allow it.

## Open Questions Before Fixing

1. Should exact Display Name be allowed to win when Display Name contains returns multiple candidates?
   - Decision: YES. If Display Name contains returns multiple candidates but exactly one candidate has an exact Display Name match, resolve that exact Display Name candidate and continue.
2. How should create/update parameters behave when user input may be Display Name or Logical Name?
   - Decision: always try smart resolution first when the input refers to an existing metadata object, even if the command can create.
   - Step 1: treat user input as Display Name, search contains, and resolve according to the Display Name rule.
   - Step 2: if no Display Name match, treat the same input as Logical Name / Schema Name, search contains, and resolve according to the logical-name rule.
   - Step 3: only if the action is truly create and no existing object resolved, derive the new logical/schema name from the user input.
   - For create derivation: if input has no prefix, use the resolved solution publisher prefix plus sanitized display text, e.g. `Invoice Date` -> `{prefix}_InvoiceDate` / logical equivalent using the existing naming helper.
   - If the user provides a prefix, e.g. `ab_Invoice Date`, trust that prefix and use it as supplied after sanitizing the rest. If the solution prefix is actually `abc_`, the tool should not override it; any resulting mismatch/error is the user's input responsibility.
3. Should raw tools remain strict?
   - Decision: YES. Raw tools such as `execute_fetchxml` and `execute_webapi` stay strict and must not rewrite user input.
   - If a user needs Display Name / Logical Name resolution before raw execution, the AI should call resolver/discovery tools first, then pass the resolved logical names into the raw FetchXML or Web API request.
   - Reason: raw tools are often used to test exact XML/API behavior; automatic resolution would make them non-raw and could hide the real input or error.
4. Should ambiguity responses use `IsError = true`?
   - Decision: YES. Ambiguous resolution is an error whenever the tool needs one concrete object to continue.
   - If Display Name search is ambiguous and no exact Display Name winner exists, return `IsError = true` and candidates.
   - If Logical Name / Schema Name search is ambiguous, return `IsError = true` and candidates.
   - List/search actions can still return multiple rows normally because the user asked for a list, not for the tool to choose one.
