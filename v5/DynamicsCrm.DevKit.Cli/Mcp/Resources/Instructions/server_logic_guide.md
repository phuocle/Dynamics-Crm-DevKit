
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

These tools support list and detail modes, but their identifiers differ:

| Mode | When | What You Get |
|------|------|-------------|
| List | Omit the tool's detail identifier | Summary of matching items |
| Detail | Supply the tool's identifier or a supported name match | Details of one item |

For get_plugins: detail mode triggers when assembly_name matches exactly 1 assembly.
For get_workflows: detail mode also triggers when name_filter matches exactly 1 workflow.
For get_custom_apis use api_name; get_business_process_flows also supports bpf_name matching one result. get_business_rules requires entity_name for both modes.

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
| workflow_id | GUID for detail mode |
| status | active (default), draft, or all |
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
| status | active (default), inactive, or all |
| include_microsoft | Include managed APIs (default: false) |

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
| bpf_name | Name contains; one match triggers detail |
| entity_name | Primary entity logical name |
| status | active, draft, or all (default) |
| include_stages | Include stages in list mode; detail always includes them |

### Detail Includes
- Ordered stage IDs, names, categories, and primary entities
- Definition metadata, including status and primary entity

## get_business_rules

### Filter Parameters
| Parameter | Description |
|-----------|------------|
| entity_name | Entity logical name (REQUIRED) |
| rule_id | GUID for detail (shows parsed conditions and actions) |
| status | active, draft, inactivedraft, or canceled; empty returns all |

### Notes
- Business rules are entity-specific (no global list without entity_name)
- Detail mode reports parsed conditions, actions, and XAML parse status; read the workflow record's `xaml` field with `manage_record` when the raw definition is needed.
- Business rules execute client-side (form) or server-side depending on scope
