# MCP Tools — List/Detail Pattern Audit

**Date**: 2026-04-05
**Status**: Implemented
**Purpose**: Audit all 18 `get_*` tools for list/detail pattern compliance, fix gaps

---

## Pattern Definition

Every `get_*` tool SHOULD follow:

```
List mode:  no ID/name → compact table of records
Detail mode: ID or name provided → full record with all fields, nested data, related records
```

This is the standard pattern across the toolkit: `get_forms`, `get_views`, `get_plugins`, `get_custom_apis`, `get_bpfs`, `get_business_rules`, `get_jobs`, `get_plugin_trace_logs`, `get_commands`, `get_roles`, `get_audit_history`, etc.

---

## Audit Results (18 tools)

### Compliant (15 tools)

| # | Tool | List trigger | Detail trigger | Notes |
|---|------|-------------|----------------|-------|
| 1 | `get_metadata_entities` | `entity_name` empty | `entity_name` provided | Full attributes + relationships |
| 2 | `get_global_optionsets` | `optionset_name` empty | `optionset_name` provided | Value/label pairs in detail |
| 3 | `get_forms` | `form_id` empty | `form_id` OR `form_name` (1 match) | Auto-detail on name match |
| 4 | `get_views` | `view_id` empty | `view_id` provided | FetchXML + LayoutXML in detail |
| 5 | `get_roles` | both empty | `role_id` OR `user_id` | 3 modes: list, role detail, user detail |
| 6 | `get_variables` | `variable_name` empty | `variable_name` provided | Definition + current value |
| 7 | `get_bpfs` | `bpf_id` empty | `bpf_id` OR `bpf_name` (1 match) | Auto-detail + stages |
| 8 | `get_business_rules` | `rule_id` empty | `rule_id` provided | XAML parsed to conditions/actions |
| 9 | `get_custom_apis` | `api_name` empty | `api_name` provided | Params + response + binding |
| 10 | `get_audit_history` | `record_id` empty | `record_id` + `entity_name` | Field-level old/new values |
| 11 | `get_plugin_trace_logs` | `record_id` empty | `record_id` provided | Full messageblock + exception |
| 12 | `get_jobs` | `job_id` empty | `job_id` provided | Error message + stack trace |
| 13 | `get_plugins` | no filters | `assembly_name` (1 match) OR `entity_name` | 3 modes |
| 14 | `get_commands` | `command_id` empty | `command_id` provided | Children + rules + library |
| 15 | `get_cloud_flows` | `flow_id` empty | `flow_id` + `action` | 3 modes: list, detail+runs, runs |

### Non-Compliant (3 tools)

| # | Tool | Issue | Severity |
|---|------|-------|----------|
| 1 | **`get_sdk_messages`** | List-only — no detail mode at all | **HIGH** |
| 2 | **`get_classic_workflows`** | List-only — no `workflow_id` param for detail | **MEDIUM** |
| 3 | **`get_solution_components`** | List-only — by design (delegates to other tools) | **LOW** (acceptable) |

---

## Detailed Analysis of Non-Compliant Tools

### 1. `get_sdk_messages` — HIGH priority

**Current state:**
- Parameters: `entity_name`, `include_custom_actions`
- Returns: flat list of message names (SDK + Custom Action names)
- No detail parameter, no way to drill into a specific message or action
- Delegates to `MessageDiscoveryHelper` → `CompactFormatter.FormatMessages()`
- Output: just name strings, no metadata

**Problem:**
- Breaks list/detail pattern — only tool with no detail mode
- Custom Actions (workflow category=3) have NO detail tool anywhere:
  - `get_custom_apis` covers Custom APIs (customapi entity) only
  - `get_sdk_messages` lists Custom Action names but no detail
  - Gap: legacy Custom Actions input/output parameters are unreachable
- Description says "use get_custom_apis for detail" but that only works for Custom APIs, NOT Custom Actions

**What detail mode should return for SDK Messages:**

| Field | Source |
|-------|--------|
| MessageId | `sdkmessage.sdkmessageid` |
| Name | `sdkmessage.name` |
| IsCustomAction | `sdkmessage.iscustomaction` (or derive from workflow) |
| Availability | `sdkmessage.availability` (0=Both, 1=Server, 2=Client) |
| Expand | `sdkmessage.expand` |
| IsActive | `sdkmessage.isactive` |
| Supported entities | `sdkmessagefilter` → list of `primaryobjecttypecode` |
| Registered plugin steps | Count from `sdkmessageprocessingstep` |

**What detail mode should return for Custom Actions (workflow category=3):**

| Field | Source |
|-------|--------|
| WorkflowId | `workflow.workflowid` |
| Name / UniqueName | `workflow.name` / `workflow.uniquename` |
| PrimaryEntity | `workflow.primaryentity` |
| Scope | `workflow.scope` (1=User, 2=BU, 3=Parent:ChildBU, 4=Org) |
| IsManaged | `workflow.ismanaged` |
| Status | `workflow.statecode` |
| Input Parameters | `workflowdependency` where `type=1` (Input) |
| Output Parameters | `workflowdependency` where `type=2` (Output) |
| Parameter Types | `workflowdependency.type`, `workflowdependency.entitylogicalname` |

**Plan:**

```
Step 1: Add `message_name` parameter (optional)
        - EMPTY → list mode (current behavior)
        - PROVIDED → detail mode (new)

Step 2: Detail mode logic
        - First check sdkmessage for exact name match
        - If sdkmessage.iscustomaction or from workflow category=3:
          → Query workflow entity for Custom Action detail
          → Query workflowdependency for input/output parameters
        - Else (standard SDK message):
          → Show message metadata
          → Show supported entities (from sdkmessagefilter)
          → Show registered plugin step count

Step 3: Update return type
        - Current: async Task<string> (plain text)
        - Target: CallToolResult with StructuredContent (match other tools)
        - Create GetSdkMessagesResult model

Step 4: Update description
        - Add TWO MODES documentation
        - Remove misleading "use get_custom_apis" reference
```

**Files to modify:**
- `Mcp/Tools/GetSdkMessagesTool.cs` — add detail mode + structured output
- `Mcp/Tools/Helper/MessageDiscoveryHelper.cs` — may need detail helper
- `Mcp/Tools/Models/` — add `GetSdkMessagesResult` model
- Update tool description to document list/detail modes

---

### 2. `get_classic_workflows` — MEDIUM priority

**Current state:**
- Parameters: `entity_name`, `mode`, `active_only`, `trigger_field`, `name_filter`, `max_records`
- Returns: compact table of ALL matching workflows with summary stats
- No `workflow_id` parameter for single-record detail
- Already returns rich data in list mode (triggers, stages, scope, runAs, etc.)

**Problem:**
- No way to get detail for a single workflow by ID
- List mode already returns most fields, but missing:
  - `description` (full text, currently sanitized)
  - `xaml` or workflow definition structure
  - Child steps / actions
  - Related plugin steps registered on this workflow's message
- When `name_filter` returns 1 result, it still shows list format

**What detail mode should add beyond list:**

| Field | Source | Why useful |
|-------|--------|------------|
| Description | `workflow.description` (full, unsanitized) | Context |
| WorkflowIdUnique | `workflow.workflowidunique` | Cross-env reference |
| SolutionId | via `solutioncomponent` | Which solution owns it |
| InputParameters | `workflowdependency` (type=1) | For Custom Actions in disguise |
| CreatedOn/By | `workflow.createdon/createdby` | Audit |
| IsCustomizable | `workflow.iscustomizable` | Customization |
| BusinessProcessType | `workflow.businessprocesstype` | Categorization |
| CategoryValue | Confirm category=0 | Verification |

**Plan:**

```
Step 1: Add `workflow_id` parameter (optional)
        - EMPTY → list mode (current behavior)
        - PROVIDED → detail mode (new)

Step 2: Detail mode logic
        - Query workflow by ID with expanded column set
        - Include workflow dependencies (input/output params if Custom Action)
        - Show registered plugin steps on this workflow's sdkmessage (if any)

Step 3: Auto-detail on name match
        - If name_filter matches exactly 1 workflow → auto-detail
        - Pattern: same as get_bpfs, get_forms

Step 4: Update description
        - Add TWO MODES documentation
```

**Files to modify:**
- `Mcp/Tools/GetClassicWorkflowsTool.cs` — add `workflow_id` param + detail method
- `Mcp/Tools/Models/GetWorkflowsResult.cs` — extend if needed

---

### 3. `get_solution_components` — LOW priority (acceptable)

**Current state:**
- Parameters: `solution_name`, `include_active_layers`, `active_layers_only`
- Returns: solution info + component summary + full component table with resolved names
- No detail mode for individual components

**Assessment: This is acceptable by design.**

Reasons:
- Solution components are heterogeneous (entities, forms, views, plugins, web resources, etc.)
- Detail for a specific component = use the specialized tool (`get_forms`, `get_plugins`, etc.)
- The tool already resolves names via batch queries and provides objectIds
- Adding detail mode would duplicate functionality of 15+ other tools

**No action needed.** The description already guides users to appropriate tools:
> "Full Entity (rootComponentBehavior=0): listed as-is, use get_metadata_entities for sub-components"

---

## Implementation Order

| Priority | Tool | Effort | Dependencies |
|----------|------|--------|-------------|
| 1 | `get_sdk_messages` | **Large** — new detail mode, Custom Action params, structured output | New model class |
| 2 | `get_classic_workflows` | **Medium** — add workflow_id param, detail query, auto-detail | Extend existing model |
| 3 | `get_solution_components` | **None** — acceptable as-is | N/A |

---

## Checklist

- [x] `get_sdk_messages`: Add `message_name` param for detail mode
- [x] `get_sdk_messages`: Query Custom Action input/output params from workflow XAML
- [x] `get_sdk_messages`: Query SDK message metadata + supported entities
- [x] `get_sdk_messages`: Switch to `CallToolResult` with structured output
- [x] `get_sdk_messages`: Create `GetSdkMessagesResult` model
- [x] `get_sdk_messages`: Update description (TWO MODES + remove misleading cross-ref)
- [x] `get_classic_workflows`: Add `workflow_id` param for detail mode
- [x] `get_classic_workflows`: Auto-detail on `name_filter` exact 1 match
- [x] `get_classic_workflows`: Expand detail fields (description, uniquename, isCustomizable, createdBy/On, businessProcessType)
- [x] `get_classic_workflows`: Update description (TWO MODES)
- [x] `tools.category.md` — no count changes needed (same 34 tools)
- [x] Build + test with `/build-cli` — 0 warnings, 0 errors

---

## Cross-Reference

| Document | Location |
|----------|----------|
| Tool category plan | `tools.category.md` |
| Token optimization plan | `PLAN-token-optimization.md` |
| MCP roadmap index | `0.ROADMAP-INDEX.md` |
