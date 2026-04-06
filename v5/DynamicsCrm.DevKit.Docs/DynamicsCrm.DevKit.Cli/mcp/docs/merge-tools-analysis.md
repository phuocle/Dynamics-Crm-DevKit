# Analysis: MCP Tool Merge Opportunities & Naming Audit

**Date:** 2026-04-06 (Updated)
**Status:** Research / Analysis
**Scope:** All 32 MCP tools — naming audit + identify merge candidates
**Context:** 3 tools already merged (manage_record, manage_variable, manage_webresource)

---

## 1. MCP Tool Naming — Official Best Practices

> Sources: [MCP Spec (2025-06-18)](https://modelcontextprotocol.io/specification/2025-06-18/server/tools), [Anthropic: Building Effective Agents](https://www.anthropic.com/engineering/building-effective-agents)

### 1.1 MCP Spec: Tool Fields

| Field | Purpose | Who reads it |
|-------|---------|-------------|
| `name` | **Machine identifier** — unique, used in tool calls | **LLM (AI model)** |
| `title` | Human-readable display name (optional) | UI only |
| `description` | Explains what the tool does, when to use it | **LLM (AI model)** |
| `inputSchema` | JSON Schema — parameter names and descriptions | **LLM (AI model)** |

> **Key insight:** The LLM never sees a human-readable UI. It selects tools using only `name`, `description`, and parameter names/descriptions. This makes naming quality critical.

### 1.2 Anthropic Best Practices (from "Prompt Engineering Your Tools")

1. **Put yourself in the model's shoes** — Can you tell what the tool does from the name + description without context? If not, the AI likely can't either.
2. **Description = docstring for a junior developer** — Include: what it does, when to use it, edge cases, input format requirements, and boundaries from similar tools.
3. **Poka-yoke design** — Make it hard to call the wrong tool or pass wrong args. Use descriptive parameter names.
4. **Consistent naming patterns** — When tools share a domain (`manage_record`, `manage_variable`, `manage_webresource`), consistent prefixes help the AI form a mental map.
5. **Avoid jargon as the name** — Names like `get_bpfs`, `get_sdk_messages` require the user to know internal Dataverse terminology before the AI can match intent correctly.

### 1.3 Naming Conventions for This Codebase

| Convention | Pattern | Examples |
|-----------|---------|---------|
| **Read-only, single entity** | `get_{noun}` | `get_forms`, `get_roles`, `get_plugins` |
| **CRUD on single entity** | `manage_{noun}` | `manage_record`, `manage_variable`, `manage_webresource` |
| **Write/upsert** | `upsert_{noun}` | `upsert_form`, `upsert_view`, `upsert_entity` |
| **Execute action** | `execute_{noun}` | `execute_fetchxml`, `execute_webapi` |
| **Build/transform** | `build_{noun}` | `build_formxml` |
| **Utility** | `{verb}_{noun}` | `parse_record_url`, `publish_customizations` |

All names use `snake_case` — this matches MCP spec convention and what LLMs are trained on.

---

## 2. Current State: 32 Tools

| # | Tool Name | Category | Title (Display) | Destructive? |
|---|-----------|----------|-----------------|--------------|
| 1 | `whoami` | Basic | Get current user identity & environment info | No |
| 2 | `get_metadata_entities` | Basic | Get entity/table metadata (list all or detail one) | No |
| 3 | `get_global_optionsets` | Basic | Get global choices/optionsets | No |
| 4 | `manage_record` | Basic | Create, read, update, or delete a single record | Yes |
| 5 | `execute_fetchxml` | Basic | Query data using FetchXML | No |
| 6 | `relevance_search` | Basic | Dataverse Relevance Search | No |
| 7 | `parse_record_url` | Basic | Parse a Dynamics 365 URL to extract entity name and record ID | No |
| 8 | `publish_customizations` | Standard | Publish metadata changes | Yes |
| 9 | `get_forms` | Standard | Get form definitions for an entity | No |
| 10 | `get_views` | Standard | Get view definitions for an entity | No |
| 11 | `get_roles` | Standard | List security roles and their privileges | No |
| 12 | `get_sdk_messages` | Standard | Discover SDK messages and Custom Actions for a Dataverse entity | No |
| 13 | `manage_variable` | Standard | List, get, create, update, delete, or clear environment variables | Yes |
| 14 | `get_classic_workflows` | Standard | List and inspect classic workflows (background and real-time) | No |
| 15 | `get_cloud_flows` | Standard | List and inspect Power Automate cloud flows and their run history | No |
| 16 | `get_bpfs` | Standard | List and inspect Business Process Flows and their stages | No |
| 17 | `get_business_rules` | Standard | List business rules for a Dataverse entity | No |
| 18 | `get_custom_apis` | Standard | List and inspect Custom APIs in Dataverse | No |
| 19 | `get_audit_history` | Standard | Retrieve audit history for Dataverse records (who changed what, when) | No |
| 20 | `get_solution_components` | Standard | List all components inside a solution | No |
| 21 | `get_plugin_trace_logs` | Standard | Query plugin execution trace logs | No |
| 22 | `get_jobs` | Standard | List and inspect system jobs (async operations) for debugging failures | No |
| 23 | `get_plugins` | Standard | List and inspect plugin registrations in Dataverse | No |
| 24 | `get_commands` | Standard | List and inspect modern command bar buttons (appaction) in Model-Driven Apps | No |
| 25 | `build_formxml` | Standard | Build modified FormXML with fields, sections, or tabs — returns XML for upsert_form | No |
| 26 | `manage_webresource` | Standard | List, inspect, create, update, or delete web resources | Yes |
| 27 | `upsert_form` | Advanced | Update, rename, or undo a form with backup, validation & publish | Yes |
| 28 | `upsert_view` | Advanced | Update, create, rename, or undo a view with backup, sync validation & publish | Yes |
| 29 | `upsert_sitemap` | Advanced | Create, update, or undo a Model-Driven App SiteMap | Yes |
| 30 | `upsert_entity` | Advanced | Create a new custom Dataverse table (entity) | Yes |
| 31 | `upsert_attribute` | Advanced | Create or update a column (attribute) on a Dataverse entity | Yes |
| 32 | `execute_webapi` | Advanced | Execute any Dataverse Web API request | Yes |

### Already Merged (3 tools — saved 5 tool slots)

| Merged Tool | Source Tools | Actions | Status |
|-------------|-------------|---------|--------|
| `manage_record` | get_record + upsert_record + delete_record | create, read, update, delete | Done |
| `manage_variable` | get_variables + upsert_variable | list, detail, create, update, delete, clear | Done |
| `manage_webresource` | get_webresources + upsert_webresources | list, detail, create, update, delete | Done |

---

## 3. Naming Audit: All 32 Tools

> **Rating scale:** Clear (AI picks correctly) | Ambiguous (AI may confuse with similar) | Problematic (jargon, misleading, or inconsistent)

| # | Tool Name | Rating | Issue | Suggested Name |
|---|-----------|--------|-------|----------------|
| 1 | `whoami` | Clear | — | Keep |
| 2 | `get_metadata_entities` | Ambiguous | "metadata_entities" is verbose. "entities" alone is ambiguous with `manage_record`'s entity_name. | `get_tables` or keep — title clarifies |
| 3 | `get_global_optionsets` | Ambiguous | "optionsets" is Dataverse jargon. Power Platform calls them "choices". Newer docs use both. | `get_global_choices` (or `get_choices`) |
| 4 | `manage_record` | Clear | — | Keep |
| 5 | `execute_fetchxml` | Clear | Clear action + format — LLMs know FetchXML from training | Keep |
| 6 | `relevance_search` | Ambiguous | Noun-first is inconsistent with `verb_noun` pattern. "Relevance" is an impl detail. | `search_records` |
| 7 | `parse_record_url` | Clear | — | Keep |
| 8 | `publish_customizations` | Clear | — | Keep |
| 9 | `get_forms` | Clear | — | Keep |
| 10 | `get_views` | Clear | — | Keep |
| 11 | `get_roles` | Clear | — | Keep |
| 12 | `get_sdk_messages` | **Problematic** | "SDK messages" is internal Dataverse developer jargon. Non-specialists won't know this means "what messages/events I can register a plugin on". | `get_messages` or `get_plugin_messages` |
| 13 | `manage_variable` | Ambiguous | "variable" alone sounds like code variable. Should be "environment_variable". But shorter is ergonomic. Description makes it clear. | `manage_env_variable` (optional) |
| 14 | `get_classic_workflows` | **Problematic** | "Classic" is Microsoft's product distinction (old Power Automate). AI may confuse with modern workflows. Better: `get_workflows` with note that these are synchronous/background processes. | `get_workflows` |
| 15 | `get_cloud_flows` | Ambiguous | "Cloud flows" is Power Automate marketing name. Not instantly obvious. However, this is the common term in Power Platform docs, so LLMs trained on MS documentation should recognize it. | `get_flows` (simpler) |
| 16 | `get_bpfs` | **Problematic** | Acronym only — very cryptic. Even Dataverse developers often type "business process flow" not "BPF". AI trained on natural language will not reliably match "show me the order process" to `get_bpfs`. | `get_business_process_flows` |
| 17 | `get_business_rules` | Clear | Clear, matches Power Platform UI term exactly | Keep |
| 18 | `get_custom_apis` | Clear | Clear — "Custom API" is the official term in Power Platform docs | Keep |
| 19 | `get_audit_history` | Clear | — | Keep |
| 20 | `get_solution_components` | Clear | — | Keep |
| 21 | `get_plugin_trace_logs` | Clear | — | Keep |
| 22 | `get_jobs` | **Problematic** | Too generic — "job" could mean anything. In Dataverse these are async system operations. AI may confuse with HR jobs, Jenkins jobs, etc. | `get_async_jobs` or `get_system_jobs` |
| 23 | `get_plugins` | Clear | — | Keep |
| 24 | `get_commands` | Ambiguous | "commands" is very generic (CLI commands, terminal commands, etc.). Should indicate it's UI/command bar related. | `get_command_bar` or `get_ribbon_buttons` |
| 25 | `build_formxml` | Ambiguous | Inconsistent: other tools use `verb_subject` (e.g., `upsert_form`), but this uses `verb_subjectformat` compressed. Also "FormXML" is internal jargon. The `title` field clarifies. | `build_form_xml` or keep — description makes intent clear |
| 26 | `manage_webresource` | Clear | — | Keep (`webresources` plural would be consistent but minor) |
| 27 | `upsert_form` | Clear | — | Keep |
| 28 | `upsert_view` | Clear | — | Keep |
| 29 | `upsert_sitemap` | Clear | — | Keep |
| 30 | `upsert_entity` | Ambiguous | "entity" is the classic Dataverse API term; Power Platform UI calls it "table". Developers know both. | `upsert_table` (optional — breaking change) |
| 31 | `upsert_attribute` | Ambiguous | "attribute" is classic API term; UI calls it "column". | `upsert_column` (optional — breaking change) |
| 32 | `execute_webapi` | Clear | Clear escape-hatch name | Keep |

### Naming Issues Summary

| Severity | Count | Tools |
|----------|-------|-------|
| **Problematic** | 4 | `get_sdk_messages`, `get_classic_workflows`, `get_bpfs`, `get_jobs` |
| **Ambiguous** | 8 | `get_metadata_entities`, `get_global_optionsets`, `relevance_search`, `manage_variable`, `get_cloud_flows`, `get_commands`, `build_formxml`, `upsert_entity`, `upsert_attribute` |
| **Clear** | 20 | All others |

### Priority Rename Recommendations (without requiring merges)

These renames improve AI tool-selection accuracy **without** requiring structural changes:

| Current Name | Recommended Name | Why |
|-------------|-----------------|-----|
| `get_bpfs` | `get_business_process_flows` | Acronym-only is cryptic; full name is used in all MS documentation |
| `get_classic_workflows` | `get_workflows` | "Classic" qualifier is confusing; `category=0` already in description |
| `get_sdk_messages` | `get_messages` | "SDK messages" is internal jargon; "messages" is the correct Dataverse term |
| `get_jobs` | `get_system_jobs` | Disambiguates from generic "job" concepts; matches Dataverse "system job" UI label |
| `relevance_search` | `search_records` | Follows `verb_noun` pattern; clearer intent |
| `get_commands` | `get_command_bar` | Specifies UI domain (command bar vs CLI commands) |

> **Note:** Renaming is a breaking change for existing MCP clients. Rename with a deprecation period or version bump. During transition, keep old names as aliases if the framework supports it.

---

## 4. Merge Candidates Analysis

### Successful Merge Pattern (from existing 3 merges)

All 3 successful merges share these traits:

1. **Same entity domain** — CRUD on the same Dataverse entity type
2. **Action parameter** — `action` string dispatches to internal handlers
3. **Shared parameters** — entity_name, record_id reused across actions
4. **Token efficient** — 1 description replaces 2–3 descriptions
5. **Clear action names** — `list`, `detail`, `create`, `update`, `delete` — universal CRUD vocabulary

---

### Candidate A: `manage_form` (get_forms + build_formxml + upsert_form — full 3-in-1)

**Proposed actions:** `list | detail | build | update | rename | undo`

**Combined parameter count:** 10 unique parameters

**Pros:**
- Reduces 3 tools to 1 (net -2)
- Natural workflow: list → detail → build → update (all form-related)

**Cons:**
- `build_formxml` is fundamentally different from get/upsert:
  - **Read-only builder** — returns modified XML, does NOT write to Dataverse
  - `operations` parameter is a complex JSON array with 5 sub-operations — unlike any other parameter in the toolset
  - Description would reach ~3,400+ chars (4,206 chars raw, optimized to ~3,400)
- Combining read-only (standard) + destructive (advanced) forces merged tool into "advanced" — hides read-only safety for list/build
- AI confusion: the `build` action's `operations` JSON is completely unlike simple list/detail/update patterns

**Verdict: NOT RECOMMENDED** — `build_formxml` is a transformer, not a CRUD op. Description bloat > ~3,400 chars.

---

### Candidate A2: `manage_form` (get_forms + upsert_form only — 2-in-1)

**Proposed actions:** `list | detail | update | rename | undo`

| Parameter | list | detail | update | rename | undo |
|-----------|:----:|:------:|:------:|:------:|:----:|
| entity_name | Y | Y | Y | — | — |
| form_id | — | Y | Y | Y | Y |
| form_name | Y | — | — | Y | — |
| form_type | Y | — | — | — | — |
| include_formxml | Y | — | — | — | — |
| formxml | — | — | Y | — | Y |
| validate | — | — | Y | — | — |
| backup | — | — | Y | — | — |
| auto_publish | — | — | Y | — | — |
| **Unique params total** | **9** |

**Description size:** ~2,100 chars (OK — under 2,500 threshold)

**Pros:**
- Clean CRUD-like pattern: list → detail → update/rename/undo
- Consistent with `manage_variable` (list + detail + write operations)
- Saves 1 tool slot

**Cons:**
- Only saves 1 tool — marginal benefit
- Mixes read-only (standard) with destructive (advanced) categories

**Verdict: POSSIBLE — marginal benefit, medium risk**

---

### Candidate B: `manage_view` (get_views + upsert_view — 2-in-1)

**Proposed actions:** `list | detail | create | update | rename | undo`

| Parameter | list | detail | create | update | rename | undo |
|-----------|:----:|:------:|:------:|:------:|:------:|:----:|
| entity_name | Y | — | Y | — | — | — |
| view_id | — | Y | — | Y | Y | Y |
| view_name | — | — | Y | — | Y | — |
| query_type | Y | — | — | — | — | — |
| include_fetchxml | Y | — | — | — | — | — |
| include_personal | Y | — | — | — | — | — |
| layoutxml | — | — | Y | Y | — | Y |
| fetchxml | — | — | Y | Y | — | Y |
| validate | — | — | Y | Y | — | — |
| backup | — | — | — | Y | — | — |
| auto_publish | — | — | Y | Y | — | — |
| **Unique params total** | **11** |

**Description size:** ~2,500 chars (OK — at threshold)

**Pros:**
- Same benefits as A2: natural workflow, saves 1 tool

**Cons:**
- Same mixed safety level issue
- 11 params is higher than other manage_* tools

**Verdict: POSSIBLE — same marginal benefit as A2**

---

### Candidate C: Automation Tools Merge (workflow entity, category 0/4/5)

All tools query the **same `workflow` Dataverse entity** with different `category` values:

| Tool | Category | Secondary Entity | Unique Logic |
|------|:--------:|-----------------|-------------|
| `get_classic_workflows` (rename: `get_workflows`) | 0 | EntityRequest for trigger fields | mode, active_only, trigger_field |
| `get_bpfs` (rename: `get_business_process_flows`) | 4 | `processstage` | include_stages, auto-detail by bpf_name |
| `get_cloud_flows` (rename: `get_flows`) | 5 | `flowsession` | run history, flow status codes |
| `get_business_rules` | 2 | None (XAML regex only) | XAML parsing (10+ patterns), required entity_name |

#### Option C1: Merge all 4 → `get_automations`

**Net reduction: -3 tools**

**Why NOT merge get_business_rules:**

| Aspect | classic / bpfs / cloud | business_rules |
|--------|:----------------------:|:--------------:|
| Persona | Automation admin / process owner | Form debugger / JS developer |
| Output | Workflow metadata (triggers, scope, mode) | **Parsed XAML** (conditions, SetVisibility, ShowError, LockField...) |
| Secondary entity | processstage, flowsession | None (XAML regex parsing) |
| entity_name param | Optional | **Required** |
| Unique logic | Standard FetchXML | 10+ regex patterns over XAML |
| Typical question | "What fires when I update an Account?" | "Why does this field hide on the form?" |

**Verdict: NOT RECOMMENDED** — business_rules is a form debugging tool (XAML analyzer), not an automation tool.

---

#### Option C2: Merge 3 (classic + bpfs + cloud) → `get_automations` — RECOMMENDED

**Net reduction: -2 tools**

**Proposed actions:** `classic | bpfs | cloud | runs`

| Parameter | classic | bpfs | cloud | runs |
|-----------|:-------:|:----:|:-----:|:----:|
| entity_name | Y | Y | — | — |
| workflow_id | Y (detail) | — | — | — |
| bpf_id | — | Y (detail) | — | — |
| flow_id | — | — | Y (detail) | Y (req) |
| name_filter | Y | Y | Y | — |
| status | — | Y | Y | — |
| active_only | Y | — | — | — |
| mode | Y | — | — | — |
| trigger_field | Y | — | — | — |
| include_stages | — | Y | — | — |
| owner_filter | — | — | Y | — |
| status_filter | — | — | — | Y |
| minutes_ago | — | — | — | Y |
| max_records | Y | Y | Y | Y |
| **Unique params total** | **14** |

**Description target:** ~2,000 chars (OK)

**AI comprehension:** The merged name `get_automations` is searchable for questions like:
- "Show me all automations on Account" → AI selects `get_automations`, action=classic+bpfs
- "List my Power Automate flows" → AI selects `get_automations`, action=cloud
- "Check flow run history" → AI selects `get_automations`, action=runs

**Verdict: RECOMMENDED** — same entity (workflow), coherent "server-side automation" persona, manageable description size.

---

#### Option C3: Merge only 2 (classic + cloud) → `get_automations`

**Proposed actions:** `classic | cloud | runs`

**Net reduction: -1 tool**

**Verdict: SAFE but minimal** — saves only 1 tool; BPFs stay separate. Only worthwhile if the 3-way merge proves too complex to implement.

---

### Candidate D: `get_apis` (get_custom_apis + get_sdk_messages) — RECOMMENDED

**Net reduction: -1 tool**

**Proposed actions:** `custom | custom_detail | messages | message_detail`

| Parameter | custom | custom_detail | messages | message_detail |
|-----------|:------:|:-------------:|:--------:|:--------------:|
| entity_name | Y | — | Y | — |
| api_name | — | Y (req) | — | — |
| message_name | — | — | — | Y (req) |
| include_microsoft | Y | — | — | — |
| include_custom_actions | — | — | Y | — |
| status | Y | — | — | — |
| max_records | Y | — | — | — |
| **Unique params total** | **7** |

**Description target:** ~1,000 chars (GOOD)

**AI comprehension:** `get_apis` with action=custom vs action=messages is intuitive:
- "List my Custom APIs" → `get_apis`, action=custom
- "What messages can I use for Account plugins?" → `get_apis`, action=messages

**Verdict: RECOMMENDED** — related domain, low parameter count, manageable description.

---

### Candidate E: `manage_schema` (upsert_entity + upsert_attribute) — NOT RECOMMENDED

**Net reduction: -1 tool**

**Why not:**
- ~35+ unique parameters across actions
- Only 3 shared parameters (entity_name, solution_name, auto_publish)
- `upsert_attribute` alone has 24 parameters — already the most complex tool
- Combined description ~3,300+ chars — above threshold for AI accuracy degradation
- Intent is always unambiguous: "create table" and "add column" are clearly different tasks

**Verdict: NOT RECOMMENDED** — parameter explosion, no shared semantic logic.

---

### Candidate F: `get_debugging` (get_plugin_trace_logs + get_jobs) — MODERATE

**Proposed actions:** `trace_logs | trace_detail | jobs | job_detail`

| Parameter | trace_logs | trace_detail | jobs | job_detail |
|-----------|:----------:|:------------:|:----:|:----------:|
| record_id | — | Y | — | — |
| job_id | — | — | — | Y |
| entity_name | — | — | Y | — |
| type_name | Y | — | — | — |
| message_name | Y | — | — | — |
| correlation_id | Y | — | Y | — |
| mode | Y | — | — | — |
| status | — | — | Y | — |
| operation_type | — | — | Y | — |
| name_filter | — | — | Y | — |
| minutes_ago | Y | — | Y | — |
| max_records | Y | — | Y | — |
| **Unique params total** | **12** |

**Description target:** ~2,000 chars (OK)

**Naming note:** `correlation_id` semantically bridges them — a developer can trace a single request across both plugin trace logs and async system jobs.

**Pros:**
- Both are debugging/troubleshooting tools
- Same developer persona (plugin/workflow debugger)
- `correlation_id` semantically bridges them

**Cons:**
- Different entities (`plugintracelogbase` vs `asyncoperationbase`)
- Only `correlation_id`, `minutes_ago`, `max_records` are shared
- 12 params with many action-specific ones

**Verdict: MODERATE CANDIDATE** — coherent "debugging" theme, but shared parameter surface is thin.

---

## 5. Scoring Matrix

| Candidate | Tools Merged | Net Reduction | Shared Domain | Desc Size | AI Risk | Score |
|-----------|-------------|:-------------:|---------------|-----------|---------|:-----:|
| **A: manage_form (3-in-1)** | get_forms + build_formxml + upsert_form | -2 | Medium | ~3,400 BAD | HIGH | 3/10 |
| **A2: manage_form (2-in-1)** | get_forms + upsert_form | -1 | High | ~2,100 OK | Medium | 5/10 |
| **B: manage_view** | get_views + upsert_view | -1 | High | ~2,500 OK | Medium | 5/10 |
| **C1: get_automations (4-in-1)** | classic + rules + bpfs + cloud | -3 | High (same entity) | ~2,200 OK | HIGH (XAML) | 5/10 |
| **C2: get_automations (3-in-1)** | classic + bpfs + cloud | **-2** | High (same entity) | ~2,000 OK | Medium | **7/10** |
| **C3: get_automations (2-in-1)** | classic + cloud | -1 | High (same entity) | ~1,600 Good | Low | 6/10 |
| **D: get_apis** | get_custom_apis + get_sdk_messages | **-1** | Medium-High | ~1,000 Good | Low-Med | **7/10** |
| **E: manage_schema** | upsert_entity + upsert_attribute | -1 | Low | ~3,300 BAD | HIGH | 2/10 |
| **F: get_debugging** | get_plugin_trace_logs + get_jobs | -1 | Medium | ~2,000 OK | Medium | 5/10 |

**Description size thresholds:**
- Good: < 1,500 chars
- OK: 1,500–2,500 chars
- BAD: > 2,500 chars (risk of AI accuracy degradation)

---

## 6. Tier Recommendations

### Tier 1: Recommended Merges

| Merge | New Name | Source Tools | Net Reduction | Confidence |
|-------|----------|-------------|:-------------:|-----------|
| **C2** | `get_automations` | get_classic_workflows + get_bpfs + get_cloud_flows | **-2** | HIGH |
| **D** | `get_apis` | get_custom_apis + get_sdk_messages | **-1** | MEDIUM-HIGH |

**Result: 32 → 29 tools (net -3)**

### Tier 1B: Rename Only (No merge — quick wins for AI comprehension)

*Only apply if NOT doing Tier 1 merges. If merging, the tools disappear into the new merged tool.*

| Current | Recommended | Impact |
|---------|------------|--------|
| `get_bpfs` | `get_business_process_flows` | HIGH — acronym removal |
| `get_classic_workflows` | `get_workflows` | HIGH — removes confusing qualifier |
| `get_sdk_messages` | `get_messages` | MEDIUM — removes jargon |
| `get_jobs` | `get_system_jobs` | MEDIUM — disambiguates |
| `relevance_search` | `search_records` | LOW — pattern consistency |
| `get_commands` | `get_command_bar` | LOW — domain scoping |

### Tier 2: Optional Merges (if further tool-count reduction needed)

| Merge | New Name | Source Tools | Net Reduction | Confidence |
|-------|----------|-------------|:-------------:|-----------|
| **A2** | `manage_form` | get_forms + upsert_form | -1 | MEDIUM |
| **B** | `manage_view` | get_views + upsert_view | -1 | MEDIUM |
| **F** | `get_debugging` | get_plugin_trace_logs + get_jobs | -1 | MEDIUM |

**Result: 29 → 26 tools (net -3 additional, -6 total from 32)**

### Tier 3: Not Recommended

| Merge | Reason |
|-------|--------|
| **A (3-in-1)** | build_formxml is a transformer (read-only), not CRUD. Description bloat ~3,400 chars. |
| **C1 (4-in-1)** | get_business_rules has unique XAML parsing — different persona (form debugger), required entity_name, completely different output format. |
| **E** | Parameter explosion (~35 params), 3 shared params of 35, description ~3,300 chars. No semantic relationship. |

---

## 7. Impact Analysis

### Token Savings Comparison

| Strategy | Tool Count | Token Savings/Call | Effort | Risk |
|----------|:----------:|:-----------------:|--------|------|
| **Current state** | 32 | Baseline | — | — |
| Tier 1 merges only | 29 | ~700 tokens/call | Medium | Low |
| Tier 1 + Tier 2 merges | 26 | ~2,250 tokens/call | High | Medium |
| **Category filtering** (`--category basic` = 7 tools) | 7 | ~5,950 tokens/call | Low | None |
| Description optimization (done) | 32 | ~9,148 tokens/session | Done | — |
| Output format (CompactFormatter) | 32 | ~11,350 tokens/session | Medium | Low |

> **Key insight:** Category filtering (`--category`) saves 8.5x more tokens than merging Tier 1+2 combined. Merging has diminishing returns vs. other optimizations.

### Tool Count Forecast

| Phase | Tools | Change |
|-------|:-----:|:------:|
| Current state | 32 | — |
| + Tier 1 (C2 + D) | 29 | -3 |
| + Tier 1B renames (no count change) | 29 | Quality improvement |
| + Tier 2 (A2 + B + F) | 26 | -3 |

---

## 8. Detailed Design: C2 — `get_automations`

### Why NOT include `get_business_rules`?

`get_business_rules` stays separate because:
- **Output is XAML-derived**: uses 10+ regex patterns to parse `processtriggercriteria` XML into human-readable conditions (SetVisibility, SetRequired, SetAttribute, ShowError, LockField, etc.)
- **entity_name is required** (not optional): form rules are always entity-scoped, unlike automation tools where entity is a filter
- **Client-side execution**: form rules fire in the browser before JS events — not a server-side process
- **User persona**: "Why does this field hide?" (form debugger) vs. "What automations run on Account?" (automation admin)

### New Tool: `get_automations`

**Tool name:** `get_automations`
**Title:** List and inspect server-side automations (workflows, BPFs, cloud flows)

**Description target (~2,000 chars):**

```
List and inspect server-side automations stored in the workflow entity:
classic workflows (category=0), Business Process Flows (category=4),
and Power Automate cloud flows (category=5) with run history.

FOUR ACTIONS:
- action='classic': Classic workflows (background/realtime processes).
  Use workflow_id for detail. Params: entity_name, workflow_id, name_filter,
  mode ('background'|'realtime'), active_only, trigger_field, max_records.
- action='bpfs': Business Process Flows with guided stages.
  Use bpf_id for detail (includes all stages). Params: bpf_id, name_filter,
  entity_name, status, include_stages, max_records.
- action='cloud': Power Automate cloud flows. Use flow_id for detail + last 5 runs.
  Params: flow_id, name_filter, owner_filter, status, max_records.
- action='runs': Extended cloud flow run history. Requires flow_id.
  Params: flow_id, status_filter, minutes_ago, max_records.

TIPS:
- Classic: mode='realtime' for sync, trigger_field to find what fires on Account update
- BPFs can span multiple entities (Lead to Opportunity). Each stage has its own entity.
- Cloud: run history from flowsession entity
- For client-side form rules (SetVisible, SetRequired): use get_business_rules instead
```

**Parameters:**

| Parameter | Type | Required | Used by |
|-----------|------|----------|---------|
| `action` | string | **Required** | all |
| `entity_name` | string | Optional | classic, bpfs (list) |
| `workflow_id` | string | Optional | classic (detail) |
| `bpf_id` | string | Optional | bpfs (detail) |
| `flow_id` | string | Optional | cloud (detail), runs (required) |
| `name_filter` | string | Optional | classic, bpfs, cloud (list) |
| `status` | string | Optional | bpfs, cloud |
| `active_only` | bool | Optional | classic |
| `mode` | string | Optional | classic |
| `trigger_field` | string | Optional | classic |
| `include_stages` | bool | Optional | bpfs |
| `owner_filter` | string | Optional | cloud |
| `status_filter` | string | Optional | runs |
| `minutes_ago` | int | Optional | runs |
| `max_records` | int | Optional | all list modes |

---

## 9. Detailed Design: D — `get_apis`

### New Tool: `get_apis`

**Tool name:** `get_apis`
**Title:** Discover Custom APIs and SDK messages in Dataverse

**Description target (~1,000 chars):**

```
Discover APIs and SDK messages registered in Dataverse.

FOUR ACTIONS:
- action='custom': List Custom API definitions.
  Filter by entity_name, status. Params: entity_name, include_microsoft, status, max_records.
- action='custom_detail': Full detail for one Custom API. Requires api_name.
  Shows request params + response properties + plugin binding.
  isFunction=true means GET; isFunction=false means POST Action.
- action='messages': List SDK messages + Custom Actions for an entity.
  Use entity_name='none' or empty for global messages.
  Also covers legacy Custom Actions (workflow category=3) not in 'custom' action.
  Params: entity_name, include_custom_actions.
- action='message_detail': Detail for one message. Requires message_name.
  Shows parameters, supported entities, and registered plugin steps.

TIPS:
- Custom APIs: modern replacement for Custom Actions (isFunction determines HTTP method)
- SDK Messages: includes ALL native messages (Create, Update, Delete, Associate, etc.)
- Microsoft APIs excluded by default. Set include_microsoft=true to see msdyn_/mspp_ APIs
```

**Parameters:**

| Parameter | Type | Required | Used by |
|-----------|------|----------|---------|
| `action` | string | **Required** | all |
| `entity_name` | string | Optional | custom, messages |
| `api_name` | string | Optional | custom_detail (required) |
| `message_name` | string | Optional | message_detail (required) |
| `include_microsoft` | bool | Optional | custom |
| `include_custom_actions` | bool | Optional | messages |
| `status` | string | Optional | custom |
| `max_records` | int | Optional | custom |

---

## 10. NOT Merge Candidates (Keep Separate)

| Tool | Reason |
|------|--------|
| `whoami` | Singleton, no related tool |
| `get_metadata_entities` | Core metadata tool, unique domain |
| `get_global_optionsets` | Unique domain, simple |
| `execute_fetchxml` | Core query tool, unique domain — escape hatch for complex queries |
| `relevance_search` | Unique full-text search — different from FetchXML |
| `parse_record_url` | Utility — unique parsing domain |
| `publish_customizations` | Singleton action, no related tool |
| `get_roles` | Security domain, unique |
| `get_business_rules` | XAML parser — form debugger persona. Different from automation tools even though same `workflow` entity (category=2 vs 0/4/5). |
| `get_solution_components` | ALM domain, unique |
| `get_plugins` | Plugin registration domain — distinct from plugin trace logs |
| `get_commands` | Command bar / Ribbon domain, unique |
| `get_audit_history` | Compliance/audit domain, unique |
| `execute_webapi` | Escape hatch — must stay separate, no domain to merge with |
| `build_formxml` | Read-only transformer — unique operation type (returns XML, doesn't write to Dataverse) |
| `upsert_sitemap` | SiteMap domain — no read-only counterpart to merge with |
| `upsert_entity` | Schema creation — distinct from `upsert_attribute` (different param surface) |
| `upsert_attribute` | Column creation/update — 24 params, keep atomic |

---

## 11. Decision Matrix Summary

| Tool Group | Merge? | New Name | Net Reduction | Risk | Priority |
|-----------|:------:|----------|:-------------:|------|----------|
| get_classic_workflows + get_bpfs + get_cloud_flows | **YES** | `get_automations` | **-2** | Medium | **Tier 1** |
| get_custom_apis + get_sdk_messages | **YES** | `get_apis` | **-1** | Low-Med | **Tier 1** |
| get_bpfs (rename only, if not merging) | Rename | `get_business_process_flows` | 0 | None | **Tier 1B** |
| get_classic_workflows (rename only) | Rename | `get_workflows` | 0 | None | **Tier 1B** |
| get_sdk_messages (rename only) | Rename | `get_messages` | 0 | None | **Tier 1B** |
| get_jobs (rename only) | Rename | `get_system_jobs` | 0 | None | **Tier 1B** |
| get_forms + upsert_form | MAYBE | `manage_form` | -1 | Medium | Tier 2 |
| get_views + upsert_view | MAYBE | `manage_view` | -1 | Medium | Tier 2 |
| get_plugin_trace_logs + get_jobs | MAYBE | `get_debugging` | -1 | Medium | Tier 2 |
| get_forms + build_formxml + upsert_form | **NO** | — | -2 potential | HIGH | Not recommended |
| upsert_entity + upsert_attribute | **NO** | — | -1 potential | HIGH | Not recommended |
| All 4 workflow tools (incl. business_rules) | **NO** | — | -3 potential | HIGH | Not recommended |

---

## Cross-Reference

| Document | Location |
|----------|----------|
| Developer tools merge research | [merge-developer-tools-research.md](./merge-developer-tools-research.md) |
| Tool categories | [tools.category.md](./tools.category.md) |
| Token optimization plan | [PLAN-token-optimization.md](./PLAN-token-optimization.md) |
| Token analysis | [token.md](./token.md) |
| Roadmap index | [0.ROADMAP-INDEX.md](./0.ROADMAP-INDEX.md) |

