# Research: MCP Tool Naming & Consolidation Best Practices

**Date:** 2026-04-06
**Purpose:** Research findings for DevKit MCP tool refactor (35 -> fewer tools)
**Sources:** MCP Spec, Anthropic Docs, Anthropic Engineering Blog, SEP-986, MCP Design Principles

---

## 1. Official Sources Summary

### Source A: Anthropic Engineering Blog — "Writing Tools for Agents"

> URL: https://www.anthropic.com/engineering/writing-tools-for-agents

**Key finding — Tool Consolidation is OFFICIALLY RECOMMENDED:**

> "Rather than wrapping every API endpoint as a separate tool, consolidate multiple operations into unified, task-focused tools."

**Specific examples from Anthropic:**

| Instead of... | Use... |
|---------------|--------|
| `list_users` + `list_events` + `create_event` | Single `schedule_event` tool |
| `read_logs` | `search_logs` (returns relevant + context) |
| `get_customer_by_id` + `list_transactions` + `list_notes` | Single `get_customer_context` tool |

**Critical quote:**
> **"More tools don't always lead to better outcomes."** Excessive or overlapping tools can distract agents from efficient problem-solving strategies.

**On naming:**
> "Selecting between prefix- and suffix-based namespacing has **non-trivial effects** on tool-use evaluations."

**On identifiers:**
> Human-readable identifiers outperform cryptic ones. Converting UUIDs to semantic identifiers **"significantly improves Claude's precision in retrieval tasks by reducing hallucinations."**

---

### Source B: Anthropic Docs — "Define Tools"

> URL: https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools

**OFFICIAL best practice — Consolidate related operations:**

> **"Consolidate related operations into fewer tools."** Rather than creating a separate tool for every action (`create_pr`, `review_pr`, `merge_pr`), group them into a single tool with an `action` parameter. Fewer, more capable tools reduce selection ambiguity and make your tool surface easier for Claude to navigate.

**Other official best practices:**

| Practice | Detail |
|----------|--------|
| **Detailed descriptions** | "This is by far the most important factor in tool performance." Aim for 3-4+ sentences |
| **Meaningful namespacing** | Prefix names with service: `github_list_prs`, `slack_send_message` |
| **High-signal responses** | Return semantic identifiers, only fields AI needs |
| **Name format** | Must match regex `^[a-zA-Z0-9_-]{1,64}$` |

---

### Source C: MCP Spec — SEP-986 (Tool Name Format, Status: Final)

> URL: https://modelcontextprotocol.io/seps/986-specify-format-for-tool-names

**Official naming rules:**

| Rule | Detail |
|------|--------|
| Length | 1-64 characters (SHOULD) |
| Case | Case-sensitive |
| Allowed chars | `a-z A-Z 0-9 _ - . /` |
| Forbidden | Spaces, commas, special characters |
| Uniqueness | Must be unique within namespace |
| Hierarchy | `.` and `/` allowed for namespacing |

**Valid name examples from spec:**
- `getUser`
- `user-profile/update`
- `DATA_EXPORT_v2`
- `admin.tools.list`

---

### Source D: MCP Design Principles

> URL: https://modelcontextprotocol.io/community/design-principles

**Key principles that support consolidation:**

| Principle | Application |
|-----------|-------------|
| **"Composability over specificity"** | Don't add features for use cases that can be built from existing primitives |
| **"Convergence over choice"** | "There should be one way to solve a problem. Rather than supporting multiple approaches that fragment the ecosystem" |
| **"Stability over velocity"** | "Every addition is a permanent commitment and a cost for client implementers" |
| **"Pragmatism over purity"** | Accept practical tradeoffs for adoption and usability |

---

### Source E: Token Cost Data (Anthropic Docs)

| Cost Item | Tokens |
|-----------|--------|
| Tool use system prompt (Claude Opus 4.6) | 346 tokens (fixed, if any tool provided) |
| Each tool definition | ~50-200 tokens (name + description + schema) |
| `input_examples` per tool | ~20-200 tokens per example |

> Every tool is sent in EVERY request. 35 tools with descriptions = ~3,500-7,000 tokens just for tool definitions.

---

## 2. Tool Naming Analysis for DevKit

### Current naming convention: `verb_noun`

```
get_record, upsert_record, delete_record
get_forms, upsert_form, build_formxml
get_views, upsert_view
get_variables, upsert_variable
```

### Problem: `get_` prefix proliferation

DevKit has **15 tools** starting with `get_`:
```
get_record, get_metadata_entities, get_forms, get_views, get_roles,
get_audit_history, get_global_optionsets, get_variables, get_business_rules,
get_sdk_messages, get_classic_workflows, get_custom_apis, get_cloud_flows,
get_bpfs, get_jobs, get_plugins, get_commands, get_webresources,
get_solution_components, get_plugin_trace_logs
```

When AI sees 15+ tools with `get_` prefix, it must read descriptions to disambiguate. This is the **"selection ambiguity"** Anthropic warns about.

### Naming options for merged tool

| Name | Convention | AI Signal | Precedent |
|------|-----------|-----------|-----------|
| `crud_record` | acronym_noun | Weak — "CRUD" is jargon, not a verb | None in MCP ecosystem |
| `manage_record` | verb_noun | Medium — "manage" is generic but implies multi-operation | Common in enterprise tools |
| `record` | noun only | Weak — no verb, ambiguous | REST-like but unusual for MCP |
| `dataverse_record` | service_noun | Medium — clear namespacing | GitHub MCP: `github_*` pattern |
| `record_operation` | noun_noun | Weak — no verb | None |

### Recommendation based on research

**`manage_record`** is the best fit because:

1. **Anthropic's own recommendation** uses this exact pattern — consolidate `create_pr` + `review_pr` + `merge_pr` into one tool with `action` param
2. **`verb_noun` convention** matches DevKit's existing pattern
3. **"manage" is universally understood** by all LLMs as "CRUD-like operations"
4. **Extensible** — if future operations needed (e.g., "assign", "share"), "manage" covers them naturally
5. **Avoids jargon** — "CRUD" is developer-specific; "manage" is natural language

---

## 3. Full Consolidation Roadmap for DevKit

Based on Anthropic's guidance, here are ALL merge candidates:

### Tier 1: High-value merges (clearly related, same entity)

| Current Tools | Merged Name | Action Param | Net Savings |
|---------------|-------------|-------------|-------------|
| `get_record` + `upsert_record` + `delete_record` | `manage_record` | `create\|read\|update\|delete` | **-2 tools** |
| `get_variables` + `upsert_variable` | `manage_variable` | `list\|detail\|update\|create\|clear` | **-1 tool** |
| `get_forms` + `upsert_form` + `build_formxml` | `manage_form` | `list\|detail\|update\|rename\|undo\|add_fields\|add_section\|add_tab\|add_library\|add_event` | **-2 tools** |
| `get_views` + `upsert_view` | `manage_view` | `list\|detail\|create\|update\|rename\|undo` | **-1 tool** |

**Tier 1 total: 35 -> 29 tools (-6)**

### Tier 2: Medium-value merges (related but complex)

| Current Tools | Merged Name | Complexity | Net Savings |
|---------------|-------------|-----------|-------------|
| `upsert_entity` + `upsert_attribute` | `manage_schema` | High — very different params | **-1 tool** |
| `get_plugins` + `get_plugin_trace_logs` | `manage_plugins` | Medium — different queries | **-1 tool** |
| `get_classic_workflows` + `get_cloud_flows` | `manage_flows` | Medium — different engines | **-1 tool** |
| `upsert_sitemap` + (standalone) | Keep separate | N/A | **0** |

**Tier 2 total: 29 -> 26 tools (-3 more)**

### Tier 3: Questionable merges (NOT recommended)

| Current Tools | Why NOT merge |
|---------------|---------------|
| `execute_fetchxml` + `execute_webapi` | Completely different paradigms (query vs REST) |
| `whoami` + anything | Standalone utility, tiny description |
| `publish_customizations` + anything | Cross-cutting concern, not entity-specific |
| `relevance_search` + `execute_fetchxml` | Different search paradigms |
| `parse_record_url` + anything | Utility function, no related tool |

### Summary

| Tier | Tools After | Savings | Risk |
|------|------------|---------|------|
| Current | 35 | — | — |
| Tier 1 only | 29 | -6 tools, ~1,200+ tokens/request | Low |
| Tier 1 + 2 | 26 | -9 tools, ~1,800+ tokens/request | Medium |
| Aggressive | ~22 | -13 tools | High (description bloat, ambiguity) |

---

## 4. Key Takeaways

### DO (backed by Anthropic's official guidance)

1. **Consolidate related CRUD operations** into single tools with `action` parameter
2. **Use detailed descriptions** (3-4+ sentences) — most important factor
3. **Use meaningful namespacing** in tool names
4. **Return only high-signal information** in responses
5. **Use `verb_noun` naming** pattern (e.g., `manage_record`)

### DON'T

1. **Don't create one tool per API endpoint** — consolidate!
2. **Don't use cryptic names or acronyms** — `crud_record` < `manage_record`
3. **Don't over-merge** — if description becomes too long or actions too diverse, keep separate
4. **Don't ignore MCP annotations** — merged tools lose per-action annotation precision

### The "Sweet Spot" Rule

> **Merge when:** Tools share the same entity/resource AND have related parameters
> **Keep separate when:** Tools have completely different parameter sets OR serve different conceptual domains

---

## 5. Sources

| # | Source | URL |
|---|--------|-----|
| 1 | Anthropic Engineering Blog: Writing Tools for Agents | https://www.anthropic.com/engineering/writing-tools-for-agents |
| 2 | Anthropic Docs: Define Tools (Best Practices) | https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools |
| 3 | MCP Spec: SEP-986 Tool Name Format | https://modelcontextprotocol.io/seps/986-specify-format-for-tool-names |
| 4 | MCP Design Principles | https://modelcontextprotocol.io/community/design-principles |
| 5 | MCP Spec: Tools Concept | https://modelcontextprotocol.io/docs/concepts/tools |
| 6 | GitHub MCP Server | https://github.com/github/github-mcp-server |
| 7 | Supabase MCP Server | https://github.com/supabase-community/supabase-mcp |
