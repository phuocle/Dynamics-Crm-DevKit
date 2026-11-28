> **Consolidated MCP Routing:** Read-only inspection → inspect_automation(resource='plugins'|'workflows'|'flows'|'bpfs'|'business_rules'|'messages', entity_name=..., id=..., name=..., status=..., max_records=..., options={...}). Mutations → manage_logic(resource='custom_api'|'function', action=..., name=..., entity_name=..., solution_name=..., payload={...}).


# Server-Side Logic Guide

Reference for all 6 server-logic inspection tools.

## Tool Overview

| Tool | What It Inspects | Dataverse Entity | Category Filter |
|------|-----------------|------------------|-----------------|
| inspect_automation(resource='plugins') | Plugin assemblies, types, steps, images | pluginassembly, plugintype, sdkmessageprocessingstep | N/A |
| inspect_automation(resource='workflows') | Classic workflows (background + realtime) | workflow | category=0 |
| manage_logic(resource='custom_api') | Custom API definitions, request parameters, response properties (list/detail/create/update/delete) | customapi | N/A |
| inspect_automation(resource='flows') | Power Automate cloud flows + run history | workflow + flowsession | category=5 |
| inspect_automation(resource='bpfs') | BPF definitions + stages | workflow | category=4 |
| inspect_automation(resource='business_rules') | Business rules | workflow | category=2 |

## Common Pattern: List vs Detail

These tools support list and detail modes, but their identifiers differ:

| Mode | When | What You Get |
|------|------|-------------|
| List | Omit the tool's detail identifier | Summary of matching items |
| Detail | Supply the tool's identifier or a supported name match | Details of one item |

For inspect_automation(resource='plugins'): detail mode triggers when assembly_name matches exactly 1 assembly.
For inspect_automation(resource='workflows'): detail mode also triggers when name_filter matches exactly 1 workflow.
For manage_logic(resource='custom_api') use action='list' or action='detail' with api_name (plus create/update/delete); inspect_automation(resource='bpfs') also supports bpf_name matching one result. inspect_automation(resource='business_rules') requires entity_name for both modes.

## inspect_automation(resource='plugins')

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

### Download a Plugin DLL

Call `inspect_automation(resource='plugins')` with `download=true` and either `assembly_name` (must match exactly one assembly) or `assembly_id` (the GUID from list mode). Do not combine these selectors or supply entity/step filters. `max_records` does not bypass download disambiguation.

The DLL is saved to `{workspace}/.devkit/get_plugins/{assemblyId:N}/{assemblyName}_{timestamp}.dll`. Workspace resolves from MCP roots, then the server working directory. Names are sanitized and previous downloads are never overwritten. The result has `mode="download"`, assembly metadata, `savedPath`, `fileName`, `sizeBytes`, and `sha256`; binary/Base64 content is not returned in the response.

Database assembly content is decoded directly. For package assemblies without direct content, the tool reads the related NuGet package (content or file storage) and copies only the matching DLL. Missing/inaccessible content or ambiguous package DLLs return an error. Disk/external/system assemblies may not expose a downloadable DLL. The tool remains read-only in Dataverse.

### Download the Original Plugin Package (.nupkg)

Use `download=true` with `package_name` (contains; exactly one match) or `package_id` (the `packageId` from `packages` in list mode). Choose exactly one selector; do not combine package and assembly selectors or supply entity/step filters. `max_records=1` cannot bypass disambiguation.

This downloads the original NuGet package bytes, including all DLLs, dependencies and NuGet metadata. It does not extract or repack the archive. Files are saved to `{workspace}/.devkit/get_plugins/packages/{packageId:N}/{packageName}_{timestamp}.nupkg`. The result has `mode="download"`, `packages`, `savedPath`, `fileName`, `sizeBytes`, and `sha256`. Missing content or an invalid archive returns an error before writing a file. For just one DLL, use an assembly selector instead.

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

## inspect_automation(resource='workflows')

### Filter Parameters
| Parameter | Description |
|-----------|------------|
| entity_name | Entity logical name (e.g., 'account') |
| mode | 'background' (async) or 'realtime' (sync) |
| workflow_id | GUID for detail mode |
| status | active (default), draft, or all |
| trigger_field | Filter by update trigger field (contains, e.g., 'statecode') |
| name_filter | Filter by workflow name (contains). 1 match -> auto-detail |

### Key Concepts
- mode: Background=async (always PostOperation), Realtime=sync (Pre or Post)
- scope: 1=User, 2=BusinessUnit, 3=Parent:ChildBU, 4=Organization
- runas: 0=Owner (of workflow), 1=Caller (triggering user)
- triggeronupdateattributelist: comma-separated field names that trigger on Update

## manage_logic(resource='custom_api')

### Actions
- `list`: Filter by `entity_name`, `status` (active/inactive/all), `include_microsoft` (default: false), `max_records` (1-500).
- `detail`: Pass `api_name` (Display Name, unique name, or GUID) to inspect metadata, plugin binding, request parameters, and response properties.
- `create`: Requires `solution_name` (unmanaged) and `display_name`; optional `api_name` (validated against publisher prefix or auto-derived), `binding_type`, `entity_name`, `is_function`, `is_private`, `allowed_custom_processing_step_type`, `workflow_sdk_step_enabled`, `execute_privilege_name`, `request_parameters` JSON array, `response_properties` JSON array.
- `update`: Pass `api_name` plus `display_name`, `description`, `is_private`, or `execute_privilege_name`, or change `request_parameters`/`response_properties` (`action`: add/update/remove). Optional `solution_name` applies to newly added parameters and properties.
- `delete`: Delete an unmanaged Custom API by `api_name`.

`update` and `delete` are blocked for managed APIs and APIs backing Power Fx functions. Set `allowed_custom_processing_step_type` and `workflow_sdk_step_enabled` when creating the API. Existing request parameters and response properties support updates to `display_name` and `description`. Set `type`, `logical_entity_name`, and request parameter `is_optional` when creating each item.

Changes involving multiple records run in one Dataverse transaction. Dry-run returns `status: "not_executed"` for the planned mutation.

### Key Fields Returned
- uniqueName, displayName, bindingType (Global, Entity, EntityCollection)
- isPrivate, processingType, workflowSdkStepEnabled, executePrivilegeName
- requestParameters, responseProperties (with type, isOptional)
- pluginType (backing implementation)

## inspect_automation(resource='flows')

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

## inspect_automation(resource='bpfs')

### Filter Parameters
| Parameter | Description |
|-----------|------------|
| bpf_id | GUID for detail mode |
| bpf_name | Name contains; one match triggers detail |
| entity_name | Primary entity logical name |
| status | active, draft, or all (default) |
| include_stages | Include stages in list mode; detail always includes them |

### Detail Includes
- Ordered stage IDs, names, categories, and primary entities
- Definition metadata, including status and primary entity

## inspect_automation(resource='business_rules')

### Filter Parameters
| Parameter | Description |
|-----------|------------|
| entity_name | Entity logical name (REQUIRED) |
| rule_id | GUID for detail (shows parsed conditions and actions) |
| status | active, draft, inactivedraft, or canceled; empty returns all |

### Notes
- Business rules are entity-specific (no global list without entity_name)
- Detail mode reports parsed conditions, actions, and XAML parse status; read the workflow record's `xaml` field with `manage_data(resource='record')` when the raw definition is needed.
- Business rules execute client-side (form) or server-side depending on scope
