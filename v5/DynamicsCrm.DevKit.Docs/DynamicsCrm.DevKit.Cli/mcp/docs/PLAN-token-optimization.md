# PLAN: Optimize MCP Tool Descriptions & Rename Tools

**Date**: 2026-04-04
**Status**: Draft — Ready for Execution
**Scope**: (1) Rename 10 tools for clarity, (2) Rewrite `Description(...)` text in all 33 MCP tool `.cs` files to reduce token cost
**Location**: `DynamicsCrm.DevKit.Cli\Mcp\Tools\`

---

## Part 1: Rename 10 Tools for Clarity

### Why Rename?

Current names are too generic, causing AI to pick the wrong tool — especially with 33 tools available. Example: `get_logs` could mean audit logs, system logs, or plugin trace logs. Renaming to `get_plugin_trace_logs` eliminates ambiguity.

### Rename Table

| # | Current Name | New Name | Reason |
|---|---|---|---|
| 1 | `get_logs` | `get_plugin_trace_logs` | "logs" is ambiguous — this tool only queries **plugin trace logs**, not system/audit logs |
| 2 | `get_histories` | `get_audit_history` | "histories" is vague — this is specifically **audit history** (who changed what, when) |
| 3 | `get_rules` | `get_business_rules` | "rules" could mean security roles or validation — this is **business rules** (XAML client-side logic) |
| 4 | `get_messages` | `get_sdk_messages` | "messages" could mean email/chat — this is **SDK messages** (Create, Update, Delete, custom actions) |
| 5 | `get_components` | `get_solution_components` | "components" could mean UI/form components — this is components **inside a solution** |
| 6 | `get_workflows` | `get_classic_workflows` | Distinguishes from Power Automate cloud flows — this only queries **classic workflows** (category=0) |
| 7 | `get_apis` | `get_custom_apis` | "apis" is too broad — this is specifically **Custom API** definitions in Dataverse |
| 8 | `search` | `relevance_search` | Distinguishes from FetchXML queries — this is **Dataverse Relevance Search** (full-text) |
| 9 | `publish` | `publish_customizations` | Clarifies **what** is published — Dataverse metadata customizations |
| 10 | `get_flows` | `get_cloud_flows` | "flows" could mean any flow type — this specifically queries **Power Automate cloud flows** (category=5) |

### Tools That Keep Their Name (23)

| Tool | Reason |
|---|---|
| `whoami` | Standard Dataverse convention (`WhoAmI` SDK request) |
| `get_metadata_entities` | Already specific enough |
| `execute_fetchxml` | Standard Dataverse terminology |
| `execute_webapi` | Standard Dataverse terminology |
| `get_record` | CRUD pattern — clear in context |
| `delete_record` | CRUD pattern — clear in context |
| `upsert_record` | CRUD pattern — clear in context |
| `get_forms` | Unambiguous in Dataverse context |
| `get_views` | Unambiguous in Dataverse context |
| `get_roles` | Unambiguous — always means security roles |
| `get_variables` | Implicitly understood as environment variables |
| `get_global_optionsets` | Already very specific |
| `get_bpfs` | Already specific — "BPF" is a well-known Dataverse abbreviation for Business Process Flow |
| `get_jobs` | Unambiguous — clearly refers to system jobs (asyncoperation) in Dataverse context |
| `get_plugins` | Unambiguous — always means plugin registrations in Dataverse |
| `upsert_form` | Consistent `upsert_*` pattern |
| `upsert_view` | Consistent `upsert_*` pattern |
| `upsert_entity` | Consistent `upsert_*` pattern |
| `upsert_attribute` | Consistent `upsert_*` pattern |
| `upsert_sitemap` | Consistent `upsert_*` pattern |
| `upsert_variable` | Consistent `upsert_*` pattern |
| `build_formxml` | Already specific |
| `parse_record_url` | Already descriptive |

### Rename Execution Checklist

For each renamed tool, update ALL of these locations:

- [ ] Tool class file name: `GetLogsTool.cs` → `GetPluginTraceLogsTool.cs`
- [ ] `[McpServerTool]` attribute name: `get_logs` → `get_plugin_trace_logs`
- [ ] Class name: `GetLogsTool` → `GetPluginTraceLogsTool`
- [ ] `Description(...)` text — update any self-references
- [ ] Cross-references in OTHER tools' descriptions (e.g., "use get_logs to..." → "use get_plugin_trace_logs to...")
- [ ] `AGENTS.md` — MCP Tools list
- [ ] MCP tool spec docs in `DynamicsCrm.DevKit.Docs\DynamicsCrm.DevKit.Cli\mcp\`
- [ ] Unit tests (if any reference tool names)

---

## Part 2: Optimize Tool Descriptions

## Instructions for Executing AI

> **READ THIS FIRST before modifying any tool.**

### Golden Rule

**Do NOT remove meaning.** Every optimization must preserve the tool's intent, mode distinctions, safety rules, and MCP resource references. If in doubt, keep the original text.

### When a New Tool is Created

1. Read the new tool's `Description(...)` in its `.cs` file
2. Apply the **7 Common Patterns** below
3. Add an H2 section for the new tool in this plan with specific keypoints
4. Execute the optimization on the source code

### 7 Common Patterns (Apply to Every Tool)

| # | Pattern | Action | Why |
|---|---------|--------|-----|
| 1 | **PARAMETERS section duplicates param `[Description]` attributes** | **Delete the entire PARAMETERS section** from tool `Description`. Each C# parameter already has its own `[Description("...")]` attribute — the MCP SDK sends both to the AI, so the PARAMETERS section is 100% redundant text. | Biggest single savings. Affects 20+ tools. |
| 2 | **Repeated boilerplate phrases** | Delete these phrases from tool `Description` (keep them ONLY in param `[Description]` where they belong): `"If unsure, call get_metadata_entities first"`, `"Entity logical name (always lowercase)"`, `"Examples: 'account', 'contact', 'lead', 'opportunity', 'incident'"`, `"GUID format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"` | These phrases exist in 15+ tools. Param descriptions already contain them. |
| 3 | **WHEN TO USE has too many bullets** | Max 3 bullets. Remove obvious/redundant ones. | AI understands from tool name + first sentence when to use it. |
| 4 | **TIPS section is too long** | Max 3 tips. Remove tips that repeat param descriptions. | Same info is already in param `[Description]`. |
| 5 | **EXAMPLES in description** | Max 2 short inline examples. | AI can infer usage from param descriptions. |
| 6 | **RETURNS section** | Remove if return is obvious from tool name/title. | "get_forms returns forms" is obvious. |
| 7 | **Verbose WORKFLOW sections** | Compress each workflow to one sentence. Example: `"'update': read via get_forms -> modify per docs://instructions_for_formxml -> call upsert_form"` | Numbered steps waste tokens when the flow is linear. |

### What to NEVER Remove

- Mode distinctions (e.g., "detail mode" vs "browse mode")
- Safety-critical text (e.g., BLOCKED OPERATIONS in `execute_webapi`)
- MCP resource references (e.g., `schema://fetchxml`, `docs://instructions_for_formxml`)
- Action definitions (e.g., `'update'`, `'create'`, `'rename'`, `'undo'`)
- First sentence (must be keyword-rich for tool search matching)

### Param `[Description]` Optimization

Also shorten param descriptions where possible:

| Current | Optimized |
|---------|-----------|
| `"Entity logical name (always lowercase). Examples: 'account', 'contact', 'lead', 'opportunity', 'incident'. If unsure, call get_metadata_entities first."` | `"Entity logical name (lowercase). Use get_metadata_entities to discover names."` |
| `"GUID of the record. Format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx."` | `"GUID of the record."` |

---

### Prompt Validation: Before & After Optimization

> **Purpose**: Validate that the optimized description still enables AI to generate correct, diverse prompts. This ensures no critical context was lost during optimization.

**For each tool**, the executing AI must perform this validation workflow:

#### Step 1: Generate "Before" Prompts

1. Connect to the **live MCP server** and read the tool's current `Description(...)` from the `.cs` file
2. Based on the **current (before optimization) description**, generate **at least 10 realistic user prompts** that would trigger this tool
3. Prompts must cover: basic usage, advanced filters, edge cases, multi-tool workflows, and error scenarios
4. Save to: `DynamicsCrm.DevKit.Docs\DynamicsCrm.DevKit.Cli\mcp\prompts\{tool_name}.prompts.md`
5. Format:

```markdown
# Before Optimization

1. {prompt 1}
2. {prompt 2}
...
10. {prompt 10}
```

#### Step 2: Optimize Description

1. Apply the **7 Common Patterns** and tool-specific keypoints from this plan
2. Update the `.cs` file with the optimized description
3. Update param `[Description]` attributes as needed

#### Step 3: Generate "After" Prompts

1. Read the **optimized description** from the updated `.cs` file
2. Generate **at least 10 realistic user prompts** based on the optimized description
3. Append to the **same file** under a new H1 header
4. Format:

```markdown
# After Optimization

1. {prompt 1}
2. {prompt 2}
...
10. {prompt 10}
```

#### Step 4: Compare & Validate

- If the "After" prompts cover the same breadth as "Before" → optimization is valid
- If any scenario from "Before" is no longer possible with "After" → **description lost critical context** → revise the optimization before proceeding

#### Prompt File Location

```
DynamicsCrm.DevKit.Docs\DynamicsCrm.DevKit.Cli\mcp\prompts\
├── whoami.prompts.md
├── delete_record.prompts.md
├── get_record.prompts.md
├── get_forms.prompts.md
├── get_apis.prompts.md
├── get_flows.prompts.md
├── get_bpfs.prompts.md
├── get_jobs.prompts.md
├── get_plugins.prompts.md
├── execute_fetchxml.prompts.md
├── ...
└── upsert_attribute.prompts.md
```

> **Total**: One `.prompts.md` file per tool (33 files). Each file has two H1 sections: `# Before Optimization` and `# After Optimization`.

---

## whoami

**Current**: ~1,107 chars | 1 param | **Target**: ~500 chars

- WHEN TO USE has 7 bullets — **cut to 3**: verify connection, check permissions, get org info
- Remove bullets "switching environments", "debugging auth issues", "verifying token" — all variations of "verify connection"
- Remove `"include_token defaults to false"` — already in param `[Description]`
- Keep output format summary (org name, user, roles, URL)

---

## delete_record

**Current**: ~672 chars | 2 params | **Target**: ~350 chars

- Remove GUID format text — already in param description
- Remove `"If unsure, call get_metadata_entities first"` — already in entity_name param
- Keep permanent deletion warning
- Keep cascading deletes note

---

## get_record

**Current**: ~744 chars | 3 params | **Target**: ~400 chars

- Remove repeated entity_name boilerplate
- Remove GUID format text
- Remove `"If unsure, call get_metadata_entities first"`
- Keep columns behavior explanation (specific vs all columns)

---

## get_global_optionsets

**Current**: ~1,210 chars | 1 param | **Target**: ~700 chars

- Two modes (list all vs detail) are correctly documented — keep both but shorten
- Remove verbose examples — one inline example suffices
- Compress WHEN TO USE to 2 bullets

---

## get_variables

**Current**: ~1,016 chars | 3 params | **Target**: ~400 chars

- **Delete entire PARAMETERS section** — all 3 params duplicate `[Description]`
- Keep two modes (list vs detail)
- Keep environment variable definitions vs values distinction

---

## get_rules

**Current**: ~964 chars | 4 params | **Target**: ~400 chars

- **Delete entire PARAMETERS section** — all 4 params duplicate `[Description]`
- Keep explanation of what business rules are
- Keep two modes (list vs detail by rule_id)

---

## publish

**Current**: ~1,285 chars | 3 params | **Target**: ~500 chars

- **Delete entire PARAMETERS section** — all 3 params duplicate `[Description]`
- Keep 3 publish modes (specific entity, specific components, all)
- Remove verbose component_xml format — keep one-line example only
- Keep PublishAll slowness warning

---

## get_messages

**Current**: ~1,161 chars | 2 params | **Target**: ~600 chars

- Keep SDK message explanation (what messages are in Dataverse)
- Shorten output format description
- Remove verbose examples — entity_name param already has examples
- Keep include_custom_actions note

---

## search

**Current**: ~1,343 chars | 4 params | **Target**: ~700 chars

- SEARCH SYNTAX section is useful but verbose — compress to 3 key rules
- Remove `"If unsure about entity names, call get_metadata_entities"` — in param description
- Keep Dataverse Search vs Relevance Search distinction
- Keep max_records default note

---

## get_components

**Current**: ~1,875 chars | 1 param | **Target**: ~900 chars

- FUZZY MATCH and FULL ENTITY behaviors are important — keep but shorten
- Remove verbose component type list — summarize as "all customizable components (forms, views, roles, plugins, workflows, etc.)"
- Keep solution-aware note
- Remove entity_name boilerplate

---

## parse_record_url

**Current**: ~1,994 chars | 1 param | **Target**: ~800 chars

- SUPPORTED URL FORMATS lists 12 formats — **cut to 4 categories**: model-driven app URL, classic form URL, Web API URL, Power Apps maker URL
- Remove individual format examples — the tool parses them automatically
- Keep return description (entity_name, record_id, form_id, app_id)

---

## get_logs

**Current**: ~1,798 chars | 7 params | **Target**: ~600 chars

- **Delete entire PARAMETERS section** — all 7 params duplicate `[Description]`
- Keep plugin trace log explanation
- Keep two modes (list vs detail by log_id)
- Shorten WHEN TO USE to 2 bullets: debugging plugin errors, monitoring integrations
- Delete TIPS section — param descriptions cover it

---

## get_forms

**Current**: ~2,000 chars | 5 params | **Target**: ~700 chars

- **Delete entire PARAMETERS section** — all 5 params duplicate `[Description]`
- Keep modes (list vs detail with FormXML)
- Keep form_type values: main, mobile, quickCreate, quickView, dialog, card
- Shorten TIPS from 6 bullets to 2: use form_id for detail, reference `docs://instructions_for_formxml`
- Delete RETURNS — obvious from tool name

---

## get_views

**Current**: ~1,898 chars | 5 params | **Target**: ~700 chars

- **Delete entire PARAMETERS section** — all 5 params duplicate `[Description]`
- Same structure as get_forms — apply same optimizations
- Keep mode distinction (list vs detail with LayoutXML + FetchXML)
- Keep reference to `docs://instructions_for_views`
- Shorten TIPS to 2 bullets

---

## get_roles

**Current**: ~2,017 chars | 6 params | **Target**: ~800 chars

- **Delete entire PARAMETERS section** — all 6 params duplicate `[Description]`
- THREE MODES (list roles, role detail, user roles) — keep but compress to one line each
- Remove verbose output format descriptions
- Shorten TIPS to 2 bullets

---

## get_workflows

**Current**: ~2,562 chars | 6 params | **Target**: ~900 chars

- **Delete entire PARAMETERS section** — all 6 params duplicate `[Description]`
- KEY FIELDS EXPLAINED (~500 chars) explains workflow types/categories — **compress to 3-line table**
- Keep mode distinction (list vs detail)
- Shorten WHEN TO USE to 2 bullets
- Delete TIPS that repeat param descriptions

---

## get_histories

**Current**: ~2,422 chars | 9 params | **Target**: ~700 chars

- **Delete entire PARAMETERS section** — all 9 params duplicate `[Description]` (biggest PARAMETERS duplication)
- Keep TWO MODES: detail (with record_id) vs browse (without)
- Shorten WHEN TO USE from 7 to 3 bullets
- Shorten TIPS from 6 to 2: audit must be enabled, browse first then detail
- Delete RETURNS — covered in mode descriptions

---

## get_metadata_entities

**Current**: ~2,498 chars | 4 params | **Target**: ~1,000 chars

- HOW TO USE RELATIONSHIPS section — compress to 3 lines
- COMMON NAME MAPPINGS (display → logical) — compress to smaller table, keep only top 5 most confusing mappings
- Remove verbose mode explanations — one line per mode
- This is the **foundational tool** — allow slightly more detail than others
- Remove `"If entity_name is empty"` type text — in param description

---

## execute_fetchxml

**Current**: ~2,804 chars | 3 params | **Target**: ~1,200 chars

- FETCHXML STRUCTURE — compress to 4 key lines: root, entity, columns, order
- FILTERING — keep operator list, remove verbose syntax. One-line examples only
- JOINS — compress to 2 lines: basic syntax + N:N note
- AGGREGATION — compress to 2 lines: `aggregate='true'` + groupby
- IMPORTANT RULES — keep "use logical names" and "don't use top/count". Remove "retry on error"
- EXAMPLES — cut from 3 to 2: count + filter
- Keep reference to `schema://fetchxml`

---

## execute_webapi

**Current**: ~2,415 chars | 6 params | **Target**: ~1,200 chars

- WHEN TO USE — compress to one sentence: "Use for Dataverse Web API operations not covered by other tools"
- **BLOCKED OPERATIONS is SAFETY-CRITICAL — KEEP IN FULL. Do NOT shorten this section.** It prevents AI from bypassing safe tools (forms, views, sitemaps, variables, publish)
- Delete URL PARAMETER section — already in url param `[Description]`
- EXAMPLES — cut from 5 to 2: GET relationship + POST custom action
- Delete trailing CAUTION — implied by BLOCKED OPERATIONS

---

## upsert_record

**Current**: ~2,392 chars | 3 params | **Target**: ~900 chars

- **Delete entire PARAMETERS section** — all 3 params duplicate `[Description]`
- BEHAVIOR (create vs upsert) — keep but merge "This means" paragraph into the BEHAVIOR bullets
- FIELD VALUE TYPES — **keep but compress to compact list** (type: format, one per line, no verbose explanations)
- EXAMPLES — cut to 2: create + update
- TIPS — cut from 8 to 3: use get_metadata_entities, polymorphic lookup `@` syntax, partial update supported

---

## upsert_form

**Current**: ~3,265 chars | 8 params | **Target**: ~1,200 chars

- **Delete entire PARAMETERS section** — all 8 params duplicate `[Description]`
- THREE ACTIONS — keep but one line each
- **Compress 3 WORKFLOW sections to 3 one-line sentences**: `"'update': read form via get_forms -> modify per docs://instructions_for_formxml -> call upsert_form"`, etc.
- Delete SAFETY section — redundant with backup/validate param defaults
- Keep reference to `docs://instructions_for_formxml`

---

## upsert_view

**Current**: ~4,619 chars (HIGHEST) | 9 params | **Target**: ~1,500 chars

- **Delete entire PARAMETERS section** — all 9 params duplicate `[Description]`. **Saves ~800 chars alone.**
- FOUR ACTIONS — keep but one line each
- **Compress 4 WORKFLOW sections to 4 one-line sentences**
- Keep CRITICAL SYNC RULE (LayoutXML/FetchXML column sync) if present
- Delete SAFETY and TIPS — redundant with param defaults
- Keep reference to `docs://instructions_for_views`

---

## build_formxml

**Current**: ~3,468 chars | 3 params | **Target**: ~1,300 chars

- **Delete entire PARAMETERS section** — 3 params duplicate `[Description]`
- FIVE OPERATIONS — keep all 5 (add_fields, add_section, add_tab, add_library, add_event) but one line each
- HOW IT WORKS (6 steps) — **compress to 1 sentence**: "Reads current FormXML, resolves classid from metadata, generates XML, returns modified FormXML."
- WORKFLOW — compress to 1 sentence: "Call build_formxml -> pass returned FormXML to upsert_form."
- WHY USE THIS (6 bullets) — compress to 2: auto-resolves classid, validates field names against metadata
- SECTION COLUMNS + TAB COLUMNS — **keep as compact reference** (unique info, no other place has this)
- EVENT OPERATIONS — keep 2 short examples: add_library + add_event

---

## upsert_sitemap

**Current**: ~3,175 chars | 6 params | **Target**: ~1,100 chars

- **Delete entire PARAMETERS section** — all 6 params duplicate `[Description]`
- THREE ACTIONS — keep but one line each
- **Compress 3 WORKFLOW sections to 3 one-line sentences**
- Remove "trilogy" text ("Forms -> Views -> SiteMap") — decorative, not functional
- Keep reference to `schema://sitemapxml`
- Delete SAFETY section — redundant with defaults

---

## upsert_entity

**Current**: ~2,138 chars | 18 params | **Target**: ~800 chars

- **Delete entire PARAMETERS section** — 18 params all have `[Description]`. This is a massive saving.
- Keep core explanation: creates or updates a Dataverse entity/table
- Keep create vs update mode distinction
- Shorten TIPS to 2: publisher prefix required, use get_metadata_entities to check existence

---

## upsert_variable

**Current**: ~2,455 chars | 9 params | **Target**: ~800 chars

- **Delete entire PARAMETERS section** — all 9 params duplicate `[Description]`
- BEHAVIOR section — keep create/update/set-value logic but compress
- Delete EXAMPLES section — behavior description is sufficient
- Keep environment variable definitions vs values note

---

## upsert_attribute

**Current**: ~2,806 chars | 24 params (MOST PARAMS) | **Target**: ~900 chars

- **Delete entire PARAMETERS section** — 24 params with `[Description]`. **Largest parameter section removal.**
- CREATE MODE and UPDATE MODE — keep but compress each to 2 lines
- Keep supported types list in first sentence
- Shorten TIPS to 3: publisher prefix required, use get_metadata_entities, cannot change type after creation
- Delete RETURNS — obvious

---

## get_apis

**Current**: ~2,100 chars | 5 params | **Target**: ~800 chars

- **Delete entire PARAMETERS section** — all 5 params duplicate `[Description]`
- Keep TWO MODES (list vs detail by api_name)
- Keep Custom API vs Custom Action distinction (first sentence)
- WHEN TO USE has 5 bullets — **cut to 3**: discover APIs, get parameters, check entity bindings
- RELATIONSHIP TO OTHER TOOLS — keep `get_messages` cross-reference (1 line)
- TIPS — **cut from 3 to 2**: Microsoft APIs excluded by default, isFunction=true means GET
- Delete RETURNS — obvious from mode descriptions

---

## get_flows

**Current**: ~2,350 chars | 8 params | **Target**: ~800 chars

- **Delete entire PARAMETERS section** — all 8 params duplicate `[Description]`
- Keep THREE MODES (list, detail + runs, extended runs) but compress to one line each
- WHEN TO USE has 6 bullets — **cut to 3**: list flows, check failures, show run history
- RELATIONSHIP TO OTHER TOOLS — keep `get_workflows` distinction (1 line)
- TIPS — **cut from 4 to 2**: category=5 distinction, run history in flowsession
- Delete RETURNS — covered in mode descriptions

---

## get_bpfs

**Current**: ~2,350 chars | 6 params | **Target**: ~800 chars

- **Delete entire PARAMETERS section** — all 6 params duplicate `[Description]`
- Keep TWO MODES (list vs detail with stages)
- Keep BPF explanation (multi-stage business process, category=4, auto-creates entity)
- WHEN TO USE has 6 bullets — **cut to 3**: list BPFs, show stages, filter by entity
- RELATIONSHIP TO OTHER TOOLS — compress to 1 line: "Complements get_workflows (cat=0), get_rules (cat=2), get_flows (cat=5)"
- TIPS — **cut from 5 to 2**: BPFs span multiple entities, uniqueName = auto-created entity logical name
- Delete RETURNS — covered in mode descriptions

---

## get_jobs

**Current**: ~2,400 chars | 8 params | **Target**: ~800 chars

- **Delete entire PARAMETERS section** — all 8 params duplicate `[Description]`
- Keep TWO MODES (list vs detail with error message + stack trace)
- Keep purpose: debugging async failures (plugins, workflows, imports, solutions)
- WHEN TO USE has 8 bullets — **cut to 3**: failed jobs, error details, trace by correlation ID
- RELATIONSHIP TO OTHER TOOLS — keep `get_logs` cross-reference (1 line)
- TIPS — **cut from 4 to 2**: default status is 'failed', use get_logs for trace output
- Delete RETURNS — covered in mode descriptions

---

## get_plugins

**Current**: ~2,600 chars | 10 params | **Target**: ~900 chars

- **Delete entire PARAMETERS section** — all 10 params duplicate `[Description]`
- Keep THREE MODES (list assemblies, assembly detail, entity steps) but compress to one line each
- Keep read-only discovery emphasis (first sentence)
- WHEN TO USE has 7 bullets — **cut to 3**: plugins on entity, assembly details, step filters
- RELATIONSHIP TO OTHER TOOLS — keep `get_logs` and `get_apis` cross-references (2 lines)
- TIPS — **cut from 5 to 3**: stage values, ishidden filter, include_config defaults to false
- Delete RETURNS — covered in mode descriptions

---

## Estimated Impact Summary

| Tool | Current (chars) | Target (chars) | Savings |
|------|----------------|----------------|---------|
| whoami | 1,107 | 500 | -55% |
| delete_record | 672 | 350 | -48% |
| get_record | 744 | 400 | -46% |
| get_global_optionsets | 1,210 | 700 | -42% |
| get_variables | 1,016 | 400 | -61% |
| get_rules | 964 | 400 | -59% |
| publish | 1,285 | 500 | -61% |
| get_messages | 1,161 | 600 | -48% |
| search | 1,343 | 700 | -48% |
| get_components | 1,875 | 900 | -52% |
| parse_record_url | 1,994 | 800 | -60% |
| get_logs | 1,798 | 600 | -67% |
| get_forms | 2,000 | 700 | -65% |
| get_views | 1,898 | 700 | -63% |
| get_roles | 2,017 | 800 | -60% |
| get_workflows | 2,562 | 900 | -65% |
| get_histories | 2,422 | 700 | -71% |
| get_metadata_entities | 2,498 | 1,000 | -60% |
| execute_fetchxml | 2,804 | 1,200 | -57% |
| execute_webapi | 2,415 | 1,200 | -50% |
| upsert_record | 2,392 | 900 | -62% |
| upsert_form | 3,265 | 1,200 | -63% |
| upsert_view | 4,619 | 1,500 | -68% |
| build_formxml | 3,468 | 1,300 | -63% |
| upsert_sitemap | 3,175 | 1,100 | -65% |
| upsert_entity | 2,138 | 800 | -63% |
| upsert_variable | 2,455 | 800 | -67% |
| upsert_attribute | 2,806 | 900 | -68% |
| get_apis | 2,100 | 800 | -62% |
| get_flows | 2,350 | 800 | -66% |
| get_bpfs | 2,350 | 800 | -66% |
| get_jobs | 2,400 | 800 | -67% |
| get_plugins | 2,600 | 900 | -65% |
| **TOTAL** | **~69,800** | **~26,300** | **~62%** |

**Token equivalent**: ~17,450 tokens -> ~6,575 tokens (at ~4 chars/token)
