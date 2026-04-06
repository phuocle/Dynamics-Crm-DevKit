# Analysis: MCP Tool Optimization — Naming, Merging & Token Efficiency

**Date:** 2026-04-06
**Status:** Research / Analysis
**Scope:** All 31 MCP tools — naming audit, merge candidates, token optimization, AI context retention
**Context:** 4 merges completed, 7 renames completed. Goal: reduce tools to minimize token overhead per prompt.

---

## Table of Contents

1. [Tool Count Thresholds & Actions-per-Tool Limits](#1-tool-count-thresholds--actions-per-tool-limits)
2. [Singular vs Plural Naming Analysis](#2-singular-vs-plural-naming-analysis)
3. [Current State: 31 Tools](#3-current-state-31-tools)
4. [Merge Candidates (Ordered by Feasibility)](#4-merge-candidates-ordered-by-feasibility)
5. [Token Impact Analysis](#5-token-impact-analysis)
6. [AI Context Retention Strategies](#6-ai-context-retention-strategies)
7. [Cross-Reference](#7-cross-reference)

---

## 1. Tool Count Thresholds & Actions-per-Tool Limits

### 1.1 How Many Tools per MCP Server?

| Tool Count | Performance | Source |
|:----------:|-------------|--------|
| **1-15** | Optimal — AI picks the right tool accurately | Anthropic: Tool Design Guide |
| **15-30** | Viable — audit for near-duplicates, description quality matters | Anthropic: Tool Design Guide |
| **30-50** | **Performance cliff** — AI accuracy degrades significantly | Anthropic: Tool Search Tool docs |
| **50+** | Requires dynamic loading or search+execute pattern | Anthropic internal testing (49% → 74% with tool search) |

> **Key data point:** Anthropic built a "Tool Search Tool" specifically because Opus 4 accuracy dropped from ~74% to ~49% when all tools were loaded simultaneously vs. using search-based selection. Source: [Anthropic Tool Search Tool](https://docs.anthropic.com/en/docs/build-with-claude/tool-use/tool-search-tool)

**DevKit's 31 tools sit right at the performance cliff.** Every tool removed improves AI selection accuracy.

### 1.2 How Many Actions per Multi-Action Tool?

| Actions | Quality | Notes |
|:-------:|---------|-------|
| **2-3** | Excellent — simple, hard to misuse | e.g., `manage_record(create\|read\|update\|delete)` |
| **4-6** | Sweet spot — proven pattern | DevKit's `manage_view` (6 actions), `manage_environment_variable` (6 actions) work well |
| **7-8** | Risky — description gets long, parameter collisions likely | Only if actions share 60%+ parameters |
| **9+** | Avoid — AI confuses actions, description bloat negates token savings | Consider splitting into 2 tools |

> **Why 6?** Beyond 6 actions, the tool description typically exceeds ~2,500 chars. At that point, description token cost offsets the savings from removing a tool. Also, more actions = more conditional parameters = higher chance AI passes wrong params for the action.

### 1.3 Token Cost per Tool Schema

| Component | Tokens | Notes |
|-----------|:------:|-------|
| Base tool-use overhead | ~346 | Fixed cost, regardless of tool count |
| Simple tool (2-3 params) | ~100-200 | e.g., `whoami`, `parse_record_url` |
| Medium tool (5-10 params) | ~400-800 | e.g., `get_forms`, `get_roles` |
| Complex tool (15+ params) | ~1,000-2,500 | e.g., `upsert_column` (24 params), `manage_view` (12 params) |

**DevKit's 31 tools with rich descriptions ≈ 25,000-40,000 tokens/prompt** (loaded every turn, cached across turns with prompt caching).

> **Rule of thumb:** Removing 1 medium tool saves ~500-800 tokens/prompt. But if the merged tool's description grows by 500+ tokens, the net saving is minimal.

---

## 2. Singular vs Plural Naming Analysis

### 2.1 What the Industry Does

| MCP Server | Plural (collections) | Singular (single resource) |
|------------|---------------------|---------------------------|
| **GitHub MCP** | `list_issues`, `list_pulls`, `search_issues` | `get_commit`, `create_branch`, `issue_read` |
| **Supabase MCP** | `list_tables`, `list_extensions`, `list_projects` | `create_project`, `get_project`, `execute_sql` |
| **Filesystem MCP** | `search_files`, `list_allowed_directories` | `read_text_file`, `write_file`, `edit_file` |
| **Memory MCP** | `create_entities`, `delete_relations` | `read_graph`, `open_nodes` |

**Dominant convention:**
- **Plural** for `list`/`search` operations returning **collections** → `list_issues`, `get_tables`
- **Singular** for operations on **a single resource** → `manage_record`, `upsert_form`

> Source: [GitHub MCP Server](https://github.com/github/github-mcp-server), [Supabase MCP](https://github.com/supabase-community/supabase-mcp), [MCP Reference Servers](https://github.com/modelcontextprotocol/servers)

### 2.2 DevKit's Current State

| Pattern | Tools | Count | Consistent? |
|---------|-------|:-----:|:-----------:|
| `get_` + **plural** | `get_tables`, `get_choices`, `get_forms`, `get_roles`, `get_messages`, `get_workflows`, `get_flows`, `get_business_process_flows`, `get_business_rules`, `get_custom_apis`, `get_plugins`, `get_plugin_trace_logs`, `get_system_jobs`, `get_solution_components`, `get_dataverse_commands` | 15 | Yes |
| `get_` + **singular** (uncountable) | `get_audit_history` | 1 | Yes — "history" is uncountable |
| `manage_` + **singular** | `manage_record`, `manage_view`, `manage_webresource`, `manage_environment_variable` | 4 | Yes |
| `upsert_` + **singular** | `upsert_form`, `manage_sitemap`, `upsert_table`, `upsert_column` | 4 | Yes |
| `execute_` | `execute_fetchxml`, `execute_webapi` | 2 | Yes |
| Other `verb_noun` | `whoami`, `search_records`, `parse_record_url`, `publish_customizations`, `build_form_xml` | 5 | Yes |

### 2.3 Verdict & Recommendation

**DevKit's naming is actually consistent and correct.** The pattern follows the industry convention:

| Prefix | Noun Form | Reason | Example |
|--------|:---------:|--------|---------|
| `get_` | **Plural** | Returns a collection (list mode) or detail of one item | `get_tables` (list all OR detail one) |
| `manage_` | **Singular** | CRUD on a **single resource type** | `manage_record` (1 record at a time) |
| `upsert_` | **Singular** | Creates/updates a **single resource** | `upsert_form` (1 form at a time) |
| `execute_` | **Singular** | Executes a **single query/request** | `execute_fetchxml` (1 query) |
| `search_` | **Plural** | Returns **multiple matching records** | `search_records` |
| `build_` | **Singular** | Transforms a **single artifact** | `build_form_xml` (1 FormXML) |

**No changes needed.** The apparent "inconsistency" (`get_tables` plural vs `manage_record` singular) is actually the correct convention — `get_` returns collections, `manage_` operates on singles.

---

## 3. Current State: 31 Tools

| # | Tool Name | Category | Prefix | Noun Form |
|---|-----------|----------|--------|:---------:|
| 1 | `whoami` | Basic | — | — |
| 2 | `get_tables` | Basic | `get_` | Plural |
| 3 | `get_choices` | Basic | `get_` | Plural |
| 4 | `manage_record` | Basic | `manage_` | Singular |
| 5 | `execute_fetchxml` | Basic | `execute_` | Singular |
| 6 | `search_records` | Basic | `search_` | Plural |
| 7 | `parse_record_url` | Basic | `parse_` | Singular |
| 8 | `publish_customizations` | Standard | `publish_` | Plural |
| 9 | `get_forms` | Standard | `get_` | Plural |
| 10 | `get_roles` | Standard | `get_` | Plural |
| 11 | `get_messages` | Standard | `get_` | Plural |
| 12 | `manage_environment_variable` | Standard | `manage_` | Singular |
| 13 | `manage_view` | Standard | `manage_` | Singular |
| 14 | `manage_webresource` | Standard | `manage_` | Singular |
| 15 | `get_workflows` | Standard | `get_` | Plural |
| 16 | `get_flows` | Standard | `get_` | Plural |
| 17 | `get_business_process_flows` | Standard | `get_` | Plural |
| 18 | `get_business_rules` | Standard | `get_` | Plural |
| 19 | `get_custom_apis` | Standard | `get_` | Plural |
| 20 | `get_audit_history` | Standard | `get_` | Singular (uncountable) |
| 21 | `get_solution_components` | Standard | `get_` | Plural |
| 22 | `get_plugin_trace_logs` | Standard | `get_` | Plural |
| 23 | `get_system_jobs` | Standard | `get_` | Plural |
| 24 | `get_plugins` | Standard | `get_` | Plural |
| 25 | `get_dataverse_commands` | Standard | `get_` | Plural |
| 26 | `build_form_xml` | Standard | `build_` | Singular |
| 27 | `execute_webapi` | Advanced | `execute_` | Singular |
| 28 | `upsert_column` | Advanced | `upsert_` | Singular |
| 29 | `upsert_form` | Advanced | `upsert_` | Singular |
| 30 | `manage_sitemap` | Advanced | `upsert_` | Singular |
| 31 | `upsert_table` | Advanced | `upsert_` | Singular |

### Already Completed

| Type | Items | Status |
|------|-------|--------|
| **Merges (4)** | `manage_record`, `manage_environment_variable`, `manage_webresource`, `manage_view` | Done — saved 6 tool slots |
| **Renames (7)** | `get_tables`, `get_choices`, `get_messages`, `search_records`, `get_workflows`, `get_flows`, `get_business_process_flows`, `get_system_jobs`, `get_dataverse_commands` | Done |

---

## 4. Merge Candidates (Ordered by Feasibility)

### Legend

| Metric | Good | OK | Bad |
|--------|------|----|-----|
| Description size | < 1,500 chars | 1,500-2,500 chars | > 2,500 chars |
| Shared parameters | > 60% | 30-60% | < 30% |
| Actions count | 2-4 | 5-6 | 7+ |
| Token net saving | > 500 tokens | 200-500 tokens | < 200 tokens (or negative) |

---

### Rank 1: `get_automations` — Merge `get_workflows` + `get_business_process_flows` + `get_flows`

| Metric | Value | Rating |
|--------|-------|:------:|
| **Tools merged** | 3 → 1 | |
| **Net reduction** | **-2 tools** | |
| **Actions** | 4 (`classic`, `bpfs`, `cloud`, `runs`) | Good |
| **Shared parameters** | `entity_name`, `name_filter`, `max_records` (3 of 14) | OK |
| **Description size** | ~2,000 chars | OK |
| **Feasibility** | HIGH | |

**Why merge:** All three query the **same `workflow` Dataverse entity** (category 0, 4, 5). Same admin persona. Natural question: "What automations run on Account?" covers all three.

**Token math:**
- 3 separate tools ≈ 3 × 600 = ~1,800 tokens
- 1 merged tool ≈ ~1,100 tokens (larger description + more params)
- **Net saving: ~700 tokens/prompt**

**Why NOT include `get_business_rules`:** Different persona (form debugger vs automation admin), XAML parsing (10+ regex), required `entity_name`, client-side execution. See [Section 8 of original analysis](#8-detailed-design-c2--get_automations) for full rationale.

---

### Rank 2: `get_apis` — Merge `get_custom_apis` + `get_messages`

| Metric | Value | Rating |
|--------|-------|:------:|
| **Tools merged** | 2 → 1 | |
| **Net reduction** | **-1 tool** | |
| **Actions** | 4 (`custom`, `custom_detail`, `messages`, `message_detail`) | Good |
| **Shared parameters** | `entity_name` | OK |
| **Description size** | ~1,000 chars | Good |
| **Feasibility** | HIGH | |

**Why merge:** Both answer "What APIs/messages are available?" — Custom APIs (modern) and SDK Messages (classic) are two sides of the same coin. Low parameter count (7 unique), short description.

**Token math:**
- 2 separate tools ≈ 2 × 500 = ~1,000 tokens
- 1 merged tool ≈ ~600 tokens
- **Net saving: ~400 tokens/prompt**

---

### Rank 3: `manage_form` — Merge `get_forms` + `upsert_form` (2-in-1 only)

| Metric | Value | Rating |
|--------|-------|:------:|
| **Tools merged** | 2 → 1 | |
| **Net reduction** | **-1 tool** | |
| **Actions** | 5 (`list`, `detail`, `update`, `rename`, `undo`) | Good |
| **Shared parameters** | `entity_name`, `form_id` | High |
| **Description size** | ~2,100 chars | OK |
| **Feasibility** | MEDIUM-HIGH | |

**Why merge:** Same pattern as `manage_view` (already done). Natural workflow: list → detail → update.

**Token math:**
- 2 separate tools ≈ ~1,000 tokens
- 1 merged tool ≈ ~750 tokens
- **Net saving: ~250 tokens/prompt**

**Why NOT include `build_form_xml`:** It's a read-only transformer (returns XML, doesn't write to Dataverse). Its `operations` parameter is a complex JSON array with 5 sub-operations — completely different from simple CRUD. Combined description would exceed ~3,400 chars (Bad). Keep `build_form_xml` separate.

---

### Rank 4: `get_debugging` — Merge `get_plugin_trace_logs` + `get_system_jobs`

| Metric | Value | Rating |
|--------|-------|:------:|
| **Tools merged** | 2 → 1 | |
| **Net reduction** | **-1 tool** | |
| **Actions** | 4 (`traces`, `trace_detail`, `jobs`, `job_detail`) | Good |
| **Shared parameters** | `correlation_id`, `minutes_ago`, `max_records` (3 of 12) | OK |
| **Description size** | ~2,000 chars | OK |
| **Feasibility** | MEDIUM | |

**Why merge:** Both are debugging tools. `correlation_id` bridges them — trace a request across plugin logs AND async jobs. Same developer persona.

**Token math:**
- 2 separate tools ≈ 2 × 600 = ~1,200 tokens
- 1 merged tool ≈ ~850 tokens
- **Net saving: ~350 tokens/prompt**

**Risk:** Different Dataverse entities (`plugintracelogbase` vs `asyncoperationbase`). Only 3 shared params of 12.

---

### Rank 5 (NOT RECOMMENDED): `manage_form` 3-in-1 (with `build_form_xml`)

| Metric | Value | Rating |
|--------|-------|:------:|
| **Description size** | ~3,400+ chars | **Bad** |
| **Feasibility** | LOW | |

`build_form_xml`'s `operations` JSON (5 sub-operations: `add_fields`, `add_section`, `add_tab`, `add_library`, `add_event`) is fundamentally different from CRUD. Description bloat negates token savings. **Net token saving likely negative.**

---

### Rank 6 (NOT RECOMMENDED): `manage_schema` — Merge `upsert_table` + `upsert_column`

| Metric | Value | Rating |
|--------|-------|:------:|
| **Shared parameters** | 3 of 35+ | **Bad** |
| **Description size** | ~3,300+ chars | **Bad** |
| **Feasibility** | LOW | |

`upsert_column` alone has 24 parameters. Combined tool would have 35+ unique parameters. Description bloat exceeds 3,300 chars. **Net token saving is negative.** Intent is never ambiguous — "create table" and "add column" are clearly different tasks.

---

### Summary Table

| Rank | Merge | New Name | Reduction | Token Saving | Feasibility | Recommended? |
|:----:|-------|----------|:---------:|:------------:|:-----------:|:------------:|
| 1 | workflows + bpfs + flows | `get_automations` | **-2** | ~700/prompt | HIGH | **YES** |
| 2 | custom_apis + messages | `get_apis` | **-1** | ~400/prompt | HIGH | **YES** |
| 3 | forms + upsert_form | `manage_form` | **-1** | ~250/prompt | MEDIUM-HIGH | MAYBE |
| 4 | plugin_trace_logs + system_jobs | `get_debugging` | **-1** | ~350/prompt | MEDIUM | **Done** |
| 5 | forms + build_form_xml + upsert_form | — | -2 | **Negative** | LOW | **NO** |
| 6 | upsert_table + upsert_column | — | -1 | **Negative** | LOW | **NO** |

### Projected Tool Count

| Phase | Tools | Change |
|-------|:-----:|:------:|
| Current | 31 | — |
| + Rank 1 + 2 (safe merges) | **28** | -3 |
| + Rank 3 + 4 (optional merges) | **26** | -5 total |

---

## 5. Token Impact Analysis

### 5.1 Token Savings by Strategy

| Strategy | Token Saving/Prompt | Effort | Risk | One-Time? |
|----------|:-------------------:|--------|------|:---------:|
| **Category filtering** (`--category basic` = 7 tools) | ~5,950 | Low | None | Per-session |
| **Rank 1+2 merges** (31→28) | ~1,100 | Medium | Low | Permanent |
| **Rank 1-4 merges** (31→26) | ~1,700 | High | Medium | Permanent |
| **Description optimization** | ~variable | Low | None | Permanent |
| **MCP Resources for docs** (already done) | ~0 (demand-loaded) | Done | None | Done |

### 5.2 When Merge Saves Tokens vs When It Doesn't

**Merge SAVES tokens when:**
- Source tools' combined descriptions > merged tool's single description
- Shared parameters are high (reduces duplicate param schemas)
- Actions are conceptually related (short description suffices)

**Merge COSTS tokens when:**
- Merged description must explain each action's unique behavior in detail
- Parameter count explodes (each param ~30-50 tokens in JSON Schema)
- Conditional logic ("if action=X, then param Y is required") adds description complexity

**Formula:**
```
Token saving = (Tool_A_tokens + Tool_B_tokens) - Merged_tool_tokens
If negative → DON'T MERGE
```

### 5.3 Real Numbers for DevKit

| Merge | Before (tokens) | After (tokens) | Net Saving |
|-------|:---------------:|:--------------:|:----------:|
| `get_automations` (3→1) | ~1,800 | ~1,100 | **+700** |
| `get_apis` (2→1) | ~1,000 | ~600 | **+400** |
| `manage_form` (2→1) | ~1,000 | ~750 | **+250** |
| `get_debugging` (2→1) | ~1,200 | ~850 | **+350** |
| ~~`manage_form` 3-in-1~~ | ~1,600 | ~1,700 | **-100** |
| ~~`manage_schema`~~ | ~1,400 | ~1,600 | **-200** |

---

## 6. AI Context Retention Strategies

### 6.1 Why AI "Forgets" Tools

| Cause | Impact | Mitigation |
|-------|--------|------------|
| **Too many tools** | AI attention spread thin across 30+ schemas | Reduce tool count, use category filtering |
| **Poor descriptions** | AI can't distinguish similar tools | Rich descriptions with "when to use" + "when NOT to use" |
| **Long context** | "Context rot" — accuracy decreases as conversation grows | Keep tool descriptions concise; move reference docs to Resources |
| **Similar names** | AI confuses `get_workflows` vs `get_flows` vs `get_business_process_flows` | Merge into `get_automations` with distinct actions |
| **Missing cross-references** | AI doesn't know related tools exist | Add "Related:" hints in descriptions |

### 6.2 Description Best Practices (Anthropic-Recommended)

Anthropic says tool descriptions are **"by far the most important factor"** for AI tool selection. Minimum 3-4 sentences per tool.

**Structure each description with:**

```
1. WHAT it does (1 sentence)
2. WHEN to use it (1-2 sentences, with concrete examples)
3. WHEN NOT to use it (1 sentence, with pointer to the correct tool)
4. Related: sibling_tool_1, sibling_tool_2
```

**Example — `get_business_rules`:**
```
List business rules (client-side logic) for a Dataverse entity.
Use this to debug form behavior (fields hiding/showing unexpectedly).
NOT for server-side automation — use get_automations instead.
Related: get_forms, build_form_xml
```

### 6.3 The "Sibling Hints" Pattern

Adding `Related:` or `See also:` lines in descriptions helps AI navigate between tools. This is Anthropic's recommended pattern from their tool design guide.

**Before (AI gets lost):**
```
get_forms: "Get form definitions for an entity"
build_form_xml: "Build modified FormXML with fields, sections, or tabs"
upsert_form: "Update a form with backup, validation & publish"
```

**After (AI navigates):**
```
get_forms: "... Related: build_form_xml (modify), upsert_form (save)"
build_form_xml: "... Workflow: get_forms → build_form_xml → upsert_form"
upsert_form: "... Requires FormXML from get_forms or build_form_xml"
```

### 6.4 MCP Resources vs Tool Descriptions

| Content Type | Put In | Why |
|-------------|--------|-----|
| **"When to use this tool"** | Tool description | Loaded every turn — AI needs this for selection |
| **Parameter docs** | Tool `inputSchema` | JSON Schema, loaded every turn |
| **XSD schemas** | MCP Resource (`schema://`) | Loaded on-demand — zero cost until requested |
| **Detailed instructions** | MCP Resource (`docs://`) | Large text, only needed during execution |
| **Cross-references** | Tool description (brief) | 1-line hint, not full docs |

**Rule of thumb:**
- Tool description: **< 200 tokens** of "when/why to use"
- MCP Resource: **500+ tokens** of "how to use in detail"
- AI can request Resources when needed — no upfront cost

**DevKit already does this well** with 6 Resources for XSD schemas and FormXML/View instructions.

### 6.5 Category Filtering (Highest Impact)

DevKit's `--category` flag is the **single most impactful** optimization:

| Mode | Tools Loaded | Token Cost | Use Case |
|------|:------------:|:----------:|----------|
| `basic` | 7 | ~2,500 | Simple queries, record CRUD |
| `standard` | 26 | ~18,000 | Most development work |
| `all` | 31 | ~25,000+ | Full platform admin |

Loading only `basic` (7 tools) saves **~22,500 tokens** vs `all`. This dwarfs any merge optimization.

**Recommendation:** Default MCP config should use `--category standard` unless user explicitly needs advanced tools.

---

## 7. Cross-Reference

| Document | Location |
|----------|----------|
| Developer tools merge research | [merge-developer-tools-research.md](./merge-developer-tools-research.md) |
| Tool categories | [tools.category.md](./tools.category.md) |
| Token optimization plan | [PLAN-token-optimization.md](./PLAN-token-optimization.md) |
| Token analysis | [token.md](./token.md) |
| Roadmap index | [0.ROADMAP-INDEX.md](./0.ROADMAP-INDEX.md) |

### External Sources

| Source | URL |
|--------|-----|
| MCP Spec: Tool Name Format (SEP-986) | https://modelcontextprotocol.io/seps/986-specify-format-for-tool-names |
| Anthropic: Building Effective Agents | https://www.anthropic.com/engineering/building-effective-agents |
| Anthropic: Tool Search Tool | https://docs.anthropic.com/en/docs/build-with-claude/tool-use/tool-search-tool |
| MCP Design Principles | https://modelcontextprotocol.io/community/design-principles |
| Tool Bloat Discussion #2036 | https://github.com/modelcontextprotocol/modelcontextprotocol/discussions/2036 |
| GitHub MCP Server | https://github.com/github/github-mcp-server |
| Supabase MCP Server | https://github.com/supabase-community/supabase-mcp |
| MCP Reference Servers | https://github.com/modelcontextprotocol/servers |
