# Analysis: MCP Tool Merge Opportunities

**Date:** 2026-04-06
**Status:** Research / Analysis
**Scope:** All 32 MCP tools — identify merge candidates to reduce tool count
**Context:** 3 tools already merged (manage_record, manage_variable, manage_webresource)

---

## 1. Current State: 32 Tools

| Category | Tools | Count |
|----------|-------|-------|
| **Basic** | whoami, get_metadata_entities, get_global_optionsets, manage_record, execute_fetchxml, relevance_search, parse_record_url | 7 |
| **Standard** | publish_customizations, get_forms, get_views, get_roles, get_sdk_messages, manage_variable, get_classic_workflows, get_cloud_flows, get_bpfs, get_business_rules, get_custom_apis, get_audit_history, get_solution_components, get_plugin_trace_logs, get_jobs, get_plugins, get_commands, build_formxml, manage_webresource | 19 |
| **Advanced** | upsert_form, upsert_view, upsert_sitemap, upsert_entity, upsert_attribute, execute_webapi | 6 |

### Already Merged (3 tools, saved 5 tools)

| Merged Tool | Source Tools | Actions | Status |
|-------------|-------------|---------|--------|
| `manage_record` | get_record + upsert_record + delete_record | create, read, update, delete | Done |
| `manage_variable` | get_variables + upsert_variable | list, detail, create, update, delete, clear | Done |
| `manage_webresource` | get_webresources + upsert_webresources | list, detail, create, update, delete | Done |

### Successful Merge Pattern

All 3 merges share a common pattern:

1. **Same entity domain** — CRUD on the same Dataverse entity
2. **Action parameter** — `action` string dispatches to internal handlers
3. **Shared parameters** — entity_name, record_id reused across actions
4. **Clean separation** — each action has its own validation logic
5. **Token efficient** — 1 tool description replaces 2-3 descriptions

---

## 2. Merge Candidates Analysis

### Candidate A: `manage_form` (get_forms + build_formxml + upsert_form)

**Proposed actions:**
```
action = "list" | "detail" | "build" | "update" | "rename" | "undo"
```

**Parameter mapping:**

| Parameter | list | detail | build | update | rename | undo |
|-----------|------|--------|-------|--------|--------|------|
| entity_name | Y | Y | Y | Y | - | - |
| form_id | - | Y | Y | Y | Y | Y |
| form_name | Y | - | - | - | Y | - |
| form_type | Y | - | - | - | - | - |
| include_formxml | Y | - | - | - | - | - |
| operations | - | - | Y | - | - | - |
| formxml | - | - | - | Y | - | Y |
| validate | - | - | - | Y | - | - |
| backup | - | - | - | Y | - | - |
| auto_publish | - | - | - | Y | - | - |
| **Total params per action** | 4 | 2 | 3 | 4 | 2 | 2 |
| **Combined unique params** | **10** |

**Pros:**
- Reduces 3 tools to 1 (net -2)
- Natural workflow: list -> detail -> build -> update (all about forms)
- User intent is always "I want to work with forms"
- Consistent with manage_record/manage_variable pattern

**Cons:**
- `build_formxml` is fundamentally different from get/upsert:
  - It's a **read-only builder** that returns modified XML (doesn't write to Dataverse)
  - Its `operations` parameter is a complex JSON array with 5 sub-operations (add_tab, add_section, add_fields, add_library, add_event)
  - Description is the longest of all tools (~2,077 chars) due to operation examples
- **Description bloat**: Combined description would be ~3,400+ chars (get_forms ~925 + build_formxml ~2,077 + upsert_form ~1,204 = 4,206, optimized to ~3,400)
- **Mixed safety levels**: get_forms is read-only (standard), build_formxml is read-only (standard), upsert_form is destructive (advanced). Merging them forces the merged tool into the "advanced" category
- **AI confusion risk**: The `build` action's `operations` JSON parameter is complex and unrelated to the CRUD pattern. AI may struggle with the dual nature (simple list/detail vs complex build operations)

**Verdict: NOT RECOMMENDED**

> The `build_formxml` tool is too different from get/upsert. Its complex `operations` parameter and read-only nature don't fit the CRUD pattern. The merged description would be ~3,400+ chars — well above the ~1,500 char threshold where AI accuracy degrades.

### Candidate A2: `manage_form` (get_forms + upsert_form only, keep build_formxml separate)

**Proposed actions:**
```
action = "list" | "detail" | "update" | "rename" | "undo"
```

| Parameter | list | detail | update | rename | undo |
|-----------|------|--------|--------|--------|------|
| entity_name | Y | Y | Y | - | - |
| form_id | - | Y | Y | Y | Y |
| form_name | Y | - | - | Y | - |
| form_type | Y | - | - | - | - |
| include_formxml | Y | - | - | - | - |
| formxml | - | - | Y | - | Y |
| validate | - | - | Y | - | - |
| backup | - | - | Y | - | - |
| auto_publish | - | - | Y | - | - |
| **Combined unique params** | **9** |

**Pros:**
- Reduces 2 tools to 1 (net -1)
- Clean CRUD-like pattern: list, detail, update, rename, undo
- Description ~2,100 chars (925 + 1,204 optimized)
- Consistent with manage_variable pattern (list + detail + write actions)

**Cons:**
- Only saves 1 tool (vs 2 for full merge)
- Mixes read-only (standard) with destructive (advanced) category
- Description still long at ~2,100 chars

**Verdict: POSSIBLE but marginal benefit**

---

### Candidate B: `manage_view` (get_views + upsert_view)

**Proposed actions:**
```
action = "list" | "detail" | "create" | "update" | "rename" | "undo"
```

| Parameter | list | detail | create | update | rename | undo |
|-----------|------|--------|--------|--------|--------|------|
| entity_name | Y | - | Y | - | - | - |
| view_id | - | Y | - | Y | Y | Y |
| view_name | - | - | Y | - | Y | - |
| query_type | Y | - | - | - | - | - |
| include_fetchxml | Y | - | - | - | - | - |
| include_personal | Y | - | - | - | - | - |
| layoutxml | - | - | Y | Y | - | Y |
| fetchxml | - | - | Y | Y | - | Y |
| validate | - | - | Y | Y | - | - |
| backup | - | - | - | Y | - | - |
| auto_publish | - | - | Y | Y | - | - |
| **Combined unique params** | **11** |

**Pros:**
- Same benefits as manage_form (list + detail + write)
- Natural workflow: list views -> get detail -> modify -> upsert

**Cons:**
- Same cons: mixed safety levels, only saves 1 tool
- Description ~2,500 chars (866 + 1,674 optimized)

**Verdict: POSSIBLE but marginal benefit**

---

### Candidate C: `get_automations` (all 4 workflow-category tools)

All 4 tools query the **same `workflow` entity** with different `category` values:

| Tool | Category | Secondary Entity | Special Logic |
|------|----------|-----------------|---------------|
| `get_classic_workflows` | category=0 | RetrieveEntityRequest | mode, trigger_field, stages |
| `get_business_rules` | category=2 | — | **XAML regex parsing** (conditions, actions, visibility, required) |
| `get_bpfs` | category=4 | `processstage` | stage category mapping, multi-entity BPFs |
| `get_cloud_flows` | category=5 | `flowsession` | run history, flow status codes |

#### Option C1: Merge all 4 into `get_automations`

**Proposed actions:**
```
action = "classic" | "rules" | "bpfs" | "cloud" | "runs"
```

**Full parameter mapping:**

| Parameter | classic | rules | bpfs | cloud | runs |
|-----------|---------|-------|------|-------|------|
| entity_name | Y | Y (req) | Y | - | - |
| workflow_id | Y (detail) | - | - | - | - |
| rule_id | - | Y (detail) | - | - | - |
| bpf_id | - | - | Y (detail) | - | - |
| flow_id | - | - | - | Y (detail) | Y (req) |
| name_filter | Y | - | Y | Y | - |
| status | - | Y | Y | Y | - |
| active_only | Y | - | - | - | - |
| mode | Y | - | - | - | - |
| trigger_field | Y | - | - | - | - |
| include_stages | - | - | Y | - | - |
| owner_filter | - | - | - | Y | - |
| status_filter | - | - | - | - | Y |
| minutes_ago | - | - | - | - | Y |
| max_records | Y | Y | Y | Y | Y |
| **Params per action** | 7 | 4 | 5 | 5 | 4 |
| **Combined unique** | **15** |

**Pros:**
- All 4 query the **same Dataverse entity** (`workflow`) — strongest merge justification
- Reduces 4 tools to 1 (net **-3**, biggest single merge)
- One mental model: "I want to see automations/logic in this environment"
- Consistent with manage_record pattern (1 entity, multiple operations)
- Combined description ~2,200 chars (manageable)

**Cons:**
- **15 combined params** — only 4-7 relevant per action (67-73% unused per call)
- **`get_business_rules` is fundamentally different** from the other 3:
  - It has unique **XAML regex parsing** (extracts conditions, SetVisibility, SetRequired, SetAttributeValue, ShowError, LockField, etc.)
  - Its detail mode returns parsed business rule logic, not workflow metadata
  - User persona is different: form debugger vs automation admin
  - `entity_name` is **required** (not optional like in other actions)
- 4 different detail ID params (workflow_id, rule_id, bpf_id, flow_id) — could be unified into a single `id` param but then AI must know which type
- `get_bpfs` has unique `include_stages` and queries `processstage` entity
- `get_cloud_flows` has unique `flowsession` run history
- Description must explain 5 actions clearly — risk of AI confusion

**Verdict: RISKY — strong entity justification but business_rules is too different**

#### Option C2: Merge 3 without business_rules: `get_automations`

**Proposed actions:**
```
action = "classic" | "bpfs" | "cloud" | "runs"
```

| Parameter | classic | bpfs | cloud | runs |
|-----------|---------|------|-------|------|
| entity_name | Y | Y | - | - |
| workflow_id | Y (detail) | - | - | - |
| bpf_id | - | Y (detail) | - | - |
| flow_id | - | - | Y (detail) | Y (req) |
| name_filter | Y | Y | Y | - |
| status | - | Y | Y | - |
| active_only | Y | - | - | - |
| mode | Y | - | - | - |
| trigger_field | Y | - | - | - |
| include_stages | - | Y | - | - |
| owner_filter | - | - | Y | - |
| status_filter | - | - | - | Y |
| minutes_ago | - | - | - | Y |
| max_records | Y | Y | Y | Y |
| **Params per action** | 7 | 5 | 5 | 4 |
| **Combined unique** | **14** |

**Pros:**
- 3 tools with similar patterns (list/detail on workflow entity)
- Reduces 3 tools to 1 (net **-2**)
- All 3 are "server-side automation" tools — coherent domain
- `get_business_rules` stays separate (it's a form debugging tool with XAML parsing, different persona)
- Description ~2,000 chars (manageable)

**Cons:**
- 14 params, 3 different detail ID params
- Each action still has its own secondary queries (stages, flowsession, entity resolution)
- `get_bpfs` has unique `include_stages` param

**Verdict: GOOD CANDIDATE — clean grouping, keeps business_rules separate where it belongs**

#### Option C3: Merge only 2: `get_automations` (classic + cloud only)

Original analysis from [merge-developer-tools-research.md](./merge-developer-tools-research.md).

**Proposed actions:**
```
action = "classic" | "cloud" | "runs"
```

| Parameter | classic | cloud | runs |
|-----------|---------|-------|------|
| entity_name | Y | - | - |
| workflow_id | Y (detail) | - | - |
| flow_id | - | Y (detail) | Y (req) |
| name_filter | Y | Y | - |
| status | - | Y | - |
| active_only | Y | - | - |
| mode | Y | - | - |
| trigger_field | Y | - | - |
| owner_filter | - | Y | - |
| status_filter | - | - | Y |
| minutes_ago | - | - | Y |
| max_records | Y | Y | Y |
| **Combined unique** | **12** |

**Pros:**
- Simplest merge — only 2 tools with 3 actions
- Both are "workflow automation" tools (background/realtime processes)
- Reduces 2 to 1 (net -1)
- ~1,600 chars description

**Cons:**
- Only saves 1 tool — `get_bpfs` and `get_business_rules` stay separate
- Less impactful than C2

**Verdict: SAFE CANDIDATE — minimal risk, minimal reward**

#### Candidate C — Comparison Table

| Option | Tools Merged | Net Reduction | Combined Params | Desc Size | AI Risk | Score |
|--------|-------------|---------------|-----------------|-----------|---------|-------|
| **C1: All 4** | classic + rules + bpfs + cloud | **-3** | 15 | ~2,200 | HIGH (XAML different) | 5/10 |
| **C2: 3 without rules** | classic + bpfs + cloud | **-2** | 14 | ~2,000 | Medium | **7/10** |
| **C3: Only 2** | classic + cloud | -1 | 12 | ~1,600 | Low | 6/10 |

**Recommendation: C2** — best balance. Merges the 3 automation tools that share the same "show me server-side processes" persona. Keeps `get_business_rules` separate because:
1. It has unique XAML parsing logic (regex-heavy, completely different output)
2. Its user persona is "form debugger" not "automation admin"
3. `entity_name` is required (not optional)
4. Detail mode returns parsed conditions/actions, not workflow metadata

---

### Candidate D: `get_apis` (get_custom_apis + get_sdk_messages)

**Proposed actions:**
```
action = "custom_apis" | "sdk_messages" | "detail"
```

| Parameter | custom_apis | sdk_messages | detail |
|-----------|------------|-------------|--------|
| api_name | - | - | Y (custom_api detail) |
| message_name | - | - | Y (sdk_message detail) |
| entity_name | Y | Y | - |
| include_microsoft | Y | - | - |
| include_custom_actions | - | Y | - |
| status | Y | - | - |
| max_records | Y | - | - |
| **Combined unique params** | **7** |

**Pros:**
- Both deal with the API/message layer of Dataverse
- Low parameter count (7 combined)
- Reduces 2 tools to 1 (net -1)

**Cons:**
- Different underlying entities (customapi vs sdkmessage)
- Different user personas (API developer vs plugin developer)
- "detail" action is ambiguous — which kind of detail?
- Description ~1,450 chars (755 + 696 optimized)

**Verdict: MODERATE CANDIDATE — related domain but confusing detail mode**

---

### Candidate E: `manage_schema` (upsert_entity + upsert_attribute)

**Proposed actions:**
```
action = "create_entity" | "create_attribute" | "update_attribute"
```

| Shared Params | Entity-only | Attribute-only |
|---|---|---|
| entity_name, solution_name, auto_publish | display_name, display_collection_name, description, ownership_type, has_activities, has_notes, has_feedback, is_activity, ... (12 params) | attribute_name, attribute_type, display_name, required_level, max_length, precision, format, options, lookup_target, ... (20+ params) |

**Pros:**
- Both create Dataverse schema objects
- Reduces 2 tools to 1 (net -1)

**Cons:**
- **Massive parameter surface**: ~35+ unique parameters across 3 actions
- Only 3 shared parameters (entity_name, solution_name, auto_publish)
- `upsert_attribute` alone has 24 parameters — it's already the most complex tool
- Description would be ~3,300+ chars (1,076 + 2,259 optimized)
- No real benefit — AI already selects these correctly because the intent is clear ("create entity" vs "add column")

**Verdict: NOT RECOMMENDED — parameter explosion, no shared logic**

---

### Candidate F: `get_debugging` (get_plugin_trace_logs + get_jobs)

**Proposed actions:**
```
action = "trace_logs" | "trace_detail" | "jobs" | "job_detail"
```

| Parameter | trace_logs | trace_detail | jobs | job_detail |
|-----------|-----------|-------------|------|------------|
| record_id | - | Y | - | - |
| job_id | - | - | - | Y |
| entity_name | - | - | Y | - |
| type_name | Y | - | - | - |
| message_name | Y | - | - | - |
| correlation_id | Y | - | Y | - |
| mode | Y | - | - | - |
| status | - | - | Y | - |
| operation_type | - | - | Y | - |
| name_filter | - | - | Y | - |
| minutes_ago | Y | - | Y | - |
| max_records | Y | - | Y | - |
| **Combined unique params** | **12** |

**Pros:**
- Both are debugging/troubleshooting tools
- Correlation ID bridges them (trace a request across plugins and jobs)
- Reduces 2 tools to 1 (net -1)

**Cons:**
- Different entities (plugintracelogbase vs asyncoperationbase)
- Different personas: plugin developer (traces) vs admin (jobs)
- 12 params with minimal overlap (only correlation_id, minutes_ago, max_records shared)
- Description ~2,000 chars (1,137 + 880 optimized)

**Verdict: MODERATE CANDIDATE — debugging theme connects them, but weak overlap**

---

### Candidate G: `manage_sitemap` (get_sitemap + upsert_sitemap)

Currently there is **no `get_sitemap` tool** — SiteMap is read via `execute_webapi` or through the app module entity. Adding a `get_sitemap` action to `upsert_sitemap` would be a feature addition, not a merge.

**Verdict: N/A — no existing get_sitemap to merge**

---

### NOT Merge Candidates (Keep Separate)

| Tool | Reason to Keep Separate |
|------|------------------------|
| `whoami` | Singleton, no related tool |
| `get_metadata_entities` | Core metadata tool, unique domain |
| `get_global_optionsets` | Unique domain, simple |
| `execute_fetchxml` | Core query tool, unique domain |
| `relevance_search` | Unique search domain |
| `parse_record_url` | Utility, unique domain |
| `publish_customizations` | Singleton action, no related tool |
| `get_roles` | Security domain, unique |
| `get_business_rules` | Same `workflow` entity (category=2) but unique XAML parsing, "form debugger" persona, required entity_name — too different from automation tools |
| `get_solution_components` | ALM domain, unique |
| `get_commands` | Command bar domain, unique |
| `execute_webapi` | Escape hatch, must stay separate |
| `get_audit_history` | Compliance domain, unique |

---

## 3. Scoring Matrix

| Candidate | Tools Merged | Net Reduction | Shared Domain | Shared Params | Desc Size | AI Risk | Score |
|-----------|-------------|---------------|---------------|---------------|-----------|---------|-------|
| **A: manage_form (3-in-1)** | get_forms + build_formxml + upsert_form | -2 | Medium | 3/10 | ~3,400 (BAD) | HIGH | 3/10 |
| **A2: manage_form (2-in-1)** | get_forms + upsert_form | -1 | High | 5/9 | ~2,100 (OK) | Medium | 5/10 |
| **B: manage_view** | get_views + upsert_view | -1 | High | 4/11 | ~2,500 (OK) | Medium | 5/10 |
| **C1: get_automations (4-in-1)** | classic + rules + bpfs + cloud | **-3** | High (same entity) | 4/15 | ~2,200 (OK) | HIGH (XAML) | 5/10 |
| **C2: get_automations (3-in-1)** | classic + bpfs + cloud | **-2** | High (same entity) | 4/14 | ~2,000 (OK) | Medium | **7/10** |
| **C3: get_automations (2-in-1)** | classic + cloud | -1 | High (same entity) | 4/12 | ~1,600 (GOOD) | Low | 6/10 |
| **D: get_apis** | get_custom_apis + get_sdk_messages | -1 | Medium | 3/7 | ~1,450 (GOOD) | Medium | 6/10 |
| **E: manage_schema** | upsert_entity + upsert_attribute | -1 | Low | 3/35 | ~3,300 (BAD) | HIGH | 2/10 |
| **F: get_debugging** | get_plugin_trace_logs + get_jobs | -1 | Medium | 3/12 | ~2,000 (OK) | Medium | 5/10 |

**Scoring criteria:**
- Shared Domain: How naturally related are the tools?
- Shared Params: What % of params are reused across actions?
- Desc Size: <1,500 = GOOD, 1,500-2,500 = OK, >2,500 = BAD
- AI Risk: Will AI confuse parameters or pick wrong action?

---

## 4. Recommendations

### Tier 1: Recommended Merges

| Merge | Source Tools | New Tool | Net Reduction | Confidence |
|-------|-------------|----------|---------------|------------|
| **C2** | get_classic_workflows + get_bpfs + get_cloud_flows | `get_automations` | **-2** | HIGH |
| **D** | get_custom_apis + get_sdk_messages | `get_apis` | -1 | MEDIUM-HIGH |

**Result: 32 -> 29 tools (net -3)**

### Tier 2: Optional Merges (if further reduction needed)

| Merge | Source Tools | New Tool | Net Reduction | Confidence |
|-------|-------------|----------|---------------|------------|
| **A2** | get_forms + upsert_form | `manage_form` | -1 | MEDIUM |
| **B** | get_views + upsert_view | `manage_view` | -1 | MEDIUM |
| **F** | get_plugin_trace_logs + get_jobs | `get_debugging` | -1 | MEDIUM |

**Result: 29 -> 26 tools (net -3 additional, -6 total)**

### Tier 3: Not Recommended

| Merge | Reason |
|-------|--------|
| **A (3-in-1)** | build_formxml is too different, description bloat |
| **C1 (4-in-1)** | get_business_rules has unique XAML parsing, different persona (form debugger vs automation admin) |
| **E** | Parameter explosion (35+ params), no shared logic |

---

## 5. Impact Analysis

### If Tier 1 Only (Recommended)

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| Tool count | 32 | 29 | -3 (-9.4%) |
| Est. description tokens | ~8,300 | ~7,250 | -1,050 (-12.7%) |
| Tool-list context cost | ~8,300 tokens | ~7,250 tokens | Saved per MCP call |

### If Tier 1 + Tier 2 (Maximum)

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| Tool count | 32 | 26 | -6 (-18.8%) |
| Est. description tokens | ~8,300 | ~6,050 | -2,250 (-27.1%) |
| Tool-list context cost | ~8,300 tokens | ~6,050 tokens | Saved per MCP call |

### Comparison with Other Optimization Strategies

| Strategy | Token Savings | Effort | Risk |
|----------|--------------|--------|------|
| **Tool merging (Tier 1)** | ~700 tokens/call | Medium | Low |
| **Tool merging (Tier 1+2)** | ~1,900 tokens/call | High | Medium |
| **Category filtering** (--category basic) | ~5,950 tokens/call | Low | None |
| **Description optimization** (already done) | ~9,148 tokens/call | Done | None |
| **Output format optimization** (CompactFormatter) | ~11,350 tokens/session | Medium | Low |

> **Key insight:** Category filtering (`--category basic` = 7 tools) saves **8.5x more tokens** than merging all Tier 1+2 tools combined. Tool merging provides diminishing returns compared to other strategies already planned.

---

## 6. Detailed Design: Candidate C2 — `get_automations`

If proceeding with the recommended Tier 1 merge (3 tools: classic_workflows + bpfs + cloud_flows):

### Why NOT include `get_business_rules`?

| Aspect | classic/bpfs/cloud | business_rules |
|--------|-------------------|----------------|
| **Persona** | Automation admin, process owner | Form debugger, JS developer |
| **Detail output** | Workflow metadata (triggers, scope, mode) | **Parsed XAML** (conditions, SetVisibility, SetRequired, ShowError, LockField) |
| **Secondary entity** | processstage, flowsession | None (XAML regex parsing instead) |
| **entity_name** | Optional | **Required** |
| **Unique logic** | Standard FetchXML queries | 10+ regex patterns to parse XAML into human-readable conditions/actions |
| **Typical question** | "What automations run on account?" | "Why is this field hiding on the form?" |

### Actions

| Action | Maps to | Description |
|--------|---------|-------------|
| `classic` | get_classic_workflows list/detail | Classic workflows (category=0). Use workflow_id for detail. |
| `bpfs` | get_bpfs list/detail | Business Process Flows (category=4). Use bpf_id for detail with stages. |
| `cloud` | get_cloud_flows list/detail | Cloud flows (category=5). Use flow_id for detail + last 5 runs. |
| `runs` | get_cloud_flows runs | Cloud flow run history. Requires flow_id. |

### Combined Parameters

```
action         = "classic" | "bpfs" | "cloud" | "runs"  (required)
entity_name    = string                                  (classic, bpfs)
workflow_id    = GUID                                    (classic detail)
bpf_id         = GUID                                    (bpfs detail)
flow_id        = GUID                                    (cloud detail + runs)
name_filter    = string                                  (classic + bpfs + cloud list)
status         = string                                  (bpfs + cloud list)
active_only    = bool                                    (classic)
trigger_field  = string                                  (classic)
mode           = string                                  (classic)
include_stages = bool                                    (bpfs list)
owner_filter   = string                                  (cloud list)
status_filter  = string                                  (runs)
minutes_ago    = int                                     (runs)
max_records    = int                                     (all list modes)
```

### Description (~1,500 chars target)

```
List and inspect server-side automations stored in the workflow entity:
classic workflows (category=0), Business Process Flows (category=4), 
and Power Automate cloud flows (category=5) with run history.

FOUR ACTIONS:
- action='classic': Classic workflows (background/realtime). 
  Use workflow_id for detail. Params: entity_name, workflow_id, name_filter, mode, 
  active_only, trigger_field, max_records
- action='bpfs': Business Process Flows with stages.
  Use bpf_id for detail (includes all stages). Params: bpf_id, bpf_name (via name_filter), 
  entity_name, status, include_stages, max_records
- action='cloud': Cloud flows. Use flow_id for detail + last 5 runs.
  Params: flow_id, name_filter, owner_filter, status, max_records
- action='runs': Extended cloud flow run history. Requires flow_id.
  Params: flow_id, status_filter, minutes_ago, max_records

TIPS:
- Classic: mode='realtime' for sync, trigger_field to find what fires on update
- BPFs can span multiple entities (Lead → Opportunity). Each stage has its own primaryEntity
- Cloud: run history from flowsession entity
- Use get_business_rules for client-side rules (category=2, XAML-based)
```

---

## 7. Detailed Design: Candidate D — `get_apis`

### Actions

| Action | Maps to | Description |
|--------|---------|-------------|
| `custom_apis` | get_custom_apis list | Custom API definitions |
| `custom_api_detail` | get_custom_apis detail | Single Custom API with params/responses |
| `sdk_messages` | get_sdk_messages list | SDK messages for an entity |
| `sdk_message_detail` | get_sdk_messages detail | Single SDK message details |

### Combined Parameters

```
action                  = "custom_apis" | "custom_api_detail" | "sdk_messages" | "sdk_message_detail"
entity_name             = string              (custom_apis + sdk_messages)
api_name                = string              (custom_api_detail)
message_name            = string              (sdk_message_detail)
include_microsoft       = bool                (custom_apis)
include_custom_actions  = bool                (sdk_messages)
status                  = string              (custom_apis)
max_records             = int                 (custom_apis)
```

### Description (~1,000 chars target)

```
Discover APIs and SDK messages registered in Dataverse.

FOUR ACTIONS:
- action='custom_apis': List Custom API definitions. Filter by entity_name, status.
- action='custom_api_detail': Detail for one Custom API. Requires api_name. Shows request params + response properties + plugin binding.
- action='sdk_messages': List SDK messages + Custom Actions for an entity. Use entity_name='none' for global.
- action='sdk_message_detail': Detail for one message. Requires message_name.

TIPS:
- Custom APIs: modern replacement for Custom Actions (isFunction=true -> GET, false -> POST)
- SDK Messages: includes legacy Custom Actions (workflow category=3)
- Microsoft APIs excluded by default (set include_microsoft=true)
```

---

## 8. Conclusion

| Question | Answer |
|----------|--------|
| **Can we merge get_forms + build_formxml + upsert_form?** | **No** — build_formxml is too different (read-only builder with complex JSON operations). Description would be ~3,400 chars. |
| **Can we merge get_forms + upsert_form?** | **Possible** — natural CRUD pattern, but only saves 1 tool. Medium benefit. |
| **Can we merge all 4 workflow-category tools?** | **No** — `get_business_rules` (category=2) has unique XAML parsing and "form debugger" persona. Merge the other 3 (category=0,4,5). |
| **Can we merge 3 workflow tools (classic + bpfs + cloud)?** | **Yes, recommended** — all 3 are "server-side automation" tools querying same `workflow` entity. Net -2 tools. |
| **What merges are best?** | **C2: get_automations** (classic + bpfs + cloud, -2) and **D: get_apis** (custom_apis + sdk_messages, -1). Total -3 tools. |
| **Is merging the best optimization strategy?** | **No** — category filtering (--category) saves 8.5x more tokens. Merging provides diminishing returns. Focus on category filtering first, then merge Tier 1 tools if further reduction is needed. |
| **What's the maximum achievable?** | 32 -> 26 tools (Tier 1+2), saving ~2,250 tokens/call. But category filtering alone can save ~5,950 tokens/call with zero risk. |

---

## 9. Decision Matrix Summary

| Tool Group | Merge? | New Name | Savings | Risk | Priority |
|-----------|--------|----------|---------|------|----------|
| get_classic_workflows + get_bpfs + get_cloud_flows | **YES** | `get_automations` | **-2 tools**, ~700 tokens | Medium | **Tier 1** |
| get_custom_apis + get_sdk_messages | **YES** | `get_apis` | -1 tool, ~350 tokens | Low-Med | **Tier 1** |
| get_business_rules | **KEEP** | _(separate)_ | - | - | N/A (XAML parsing, different persona) |
| get_forms + upsert_form | MAYBE | `manage_form` | -1 tool, ~300 tokens | Medium | Tier 2 |
| get_views + upsert_view | MAYBE | `manage_view` | -1 tool, ~300 tokens | Medium | Tier 2 |
| get_plugin_trace_logs + get_jobs | MAYBE | `get_debugging` | -1 tool, ~300 tokens | Medium | Tier 2 |
| get_forms + build_formxml + upsert_form | **NO** | - | -2 tools but risky | HIGH | Not recommended |
| upsert_entity + upsert_attribute | **NO** | - | -1 tool but 35+ params | HIGH | Not recommended |
| All 4 workflow tools (incl. business_rules) | **NO** | - | -3 tools but XAML mismatch | HIGH | Not recommended |

---

## Cross-Reference

| Document | Location |
|----------|----------|
| Developer tools merge research | [merge-developer-tools-research.md](./merge-developer-tools-research.md) |
| Tool categories | [tools.category.md](./tools.category.md) |
| Token optimization plan | [PLAN-token-optimization.md](./PLAN-token-optimization.md) |
| Token analysis | [token.md](./token.md) |
| Roadmap index | [0.ROADMAP-INDEX.md](./0.ROADMAP-INDEX.md) |
