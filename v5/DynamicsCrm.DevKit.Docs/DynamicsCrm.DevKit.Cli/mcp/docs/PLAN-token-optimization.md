# PLAN: Optimize MCP Tool Descriptions & Rename Tools

**Date**: 2026-04-04
**Status**: DONE
**Scope**: (1) Rename 10 tools for clarity, (2) Rewrite `Description(...)` text in all 35 MCP tool `.cs` files to reduce token cost
**Location**: `DynamicsCrm.DevKit.Cli\Mcp\Tools\`
**Commits**: Phase 1 = `bd6544792`, Phase 2 = `f1c15fa4c`

---

## Part 1: Rename 10 Tools for Clarity - DONE

### Rename Table

| # | Old Name | New Name | Status |
|---|---|---|---|
| 1 | `get_logs` | `get_plugin_trace_logs` | DONE |
| 2 | `get_histories` | `get_audit_history` | DONE |
| 3 | `get_rules` | `get_business_rules` | DONE |
| 4 | `get_messages` | `get_sdk_messages` | DONE |
| 5 | `get_components` | `get_solution_components` | DONE |
| 6 | `get_workflows` | `get_classic_workflows` | DONE |
| 7 | `get_apis` | `get_custom_apis` | DONE |
| 8 | `search` | `relevance_search` | DONE |
| 9 | `publish` | `publish_customizations` | DONE |
| 10 | `get_flows` | `get_cloud_flows` | DONE |

### Rename Execution Checklist

- [x] Tool class file name
- [x] `[McpServerTool]` attribute name
- [x] Class name
- [x] `Description(...)` text — self-references
- [x] Cross-references in OTHER tools' descriptions
- [x] `AGENTS.md` — MCP Tools list
- [x] MCP tool spec docs in `DynamicsCrm.DevKit.Docs\DynamicsCrm.DevKit.Cli\mcp\`

---

## Part 2: Optimize Tool Descriptions - DONE

### 7 Common Patterns Applied

| # | Pattern | Status |
|---|---------|--------|
| 1 | Delete PARAMETERS sections (duplicates param `[Description]`) | DONE — all 34 tools |
| 2 | Delete boilerplate phrases (entity_name examples, GUID format) | DONE — all 34 tools |
| 3 | WHEN TO USE max 3 bullets | DONE — all 34 tools |
| 4 | TIPS max 3 | DONE — all 34 tools |
| 5 | EXAMPLES max 2 inline | DONE — all 34 tools |
| 6 | Remove obvious RETURNS | DONE — all 34 tools |
| 7 | Compress WORKFLOW to one sentence | DONE — all 34 tools |

### Prompt Validation Files - DONE

33 `.prompts.md` files created at `DynamicsCrm.DevKit.Docs\DynamicsCrm.DevKit.Cli\mcp\prompts\`.
Each file has `# Before Optimization` (10 prompts) and `# After Optimization` (10 prompts).

---

## Per-Tool Results

| # | Tool | Before (chars) | Target (chars) | Actual (chars) | Reduction | Status |
|---|------|---------------|----------------|----------------|-----------|--------|
| 1 | `whoami` | 1,107 | 500 | 624 | -44% | DONE |
| 2 | `delete_record` | 672 | 350 | 448 | -33% | DONE |
| 3 | `get_record` | 744 | 400 | 572 | -23% | DONE |
| 4 | `get_global_optionsets` | 1,210 | 700 | 709 | -41% | DONE |
| 5 | `get_variables` | 1,016 | 400 | 724 | -29% | DONE |
| 6 | `get_business_rules` | 964 | 400 | 824 | -15% | DONE |
| 7 | `publish_customizations` | 1,285 | 500 | 893 | -31% | DONE |
| 8 | `get_sdk_messages` | 1,161 | 600 | 696 | -40% | DONE |
| 9 | `relevance_search` | 1,343 | 700 | 1,342 | 0% | DONE |
| 10 | `get_solution_components` | 1,875 | 900 | 1,600 | -15% | DONE |
| 11 | `parse_record_url` | 1,994 | 800 | 633 | -68% | DONE |
| 12 | `get_plugin_trace_logs` | 1,798 | 600 | 1,137 | -37% | DONE |
| 13 | `get_forms` | 2,000 | 700 | 925 | -54% | DONE |
| 14 | `get_views` | 1,898 | 700 | 866 | -54% | DONE |
| 15 | `get_roles` | 2,017 | 800 | 863 | -57% | DONE |
| 16 | `get_classic_workflows` | 2,562 | 900 | 1,051 | -59% | DONE |
| 17 | `get_audit_history` | 2,422 | 700 | 1,076 | -56% | DONE |
| 18 | `get_metadata_entities` | 2,498 | 1,000 | 992 | -60% | DONE |
| 19 | `execute_fetchxml` | 2,804 | 1,200 | 1,148 | -59% | DONE |
| 20 | `execute_webapi` | 2,415 | 1,200 | 1,279 | -47% | DONE |
| 21 | `upsert_record` | 2,392 | 900 | 856 | -64% | DONE |
| 22 | `upsert_form` | 3,265 | 1,200 | 1,204 | -63% | DONE |
| 23 | `upsert_view` | 4,619 | 1,500 | 1,674 | -64% | DONE |
| 24 | `build_formxml` | 3,468 | 1,300 | 2,077 | -40% | DONE |
| 25 | `upsert_sitemap` | 3,175 | 1,100 | 1,126 | -65% | DONE |
| 26 | `upsert_entity` | 2,138 | 800 | 1,076 | -50% | DONE |
| 27 | `upsert_variable` | 2,455 | 800 | 990 | -60% | DONE |
| 28 | `upsert_attribute` | 2,806 | 900 | 2,259 | -19% | DONE |
| 29 | `get_custom_apis` | 2,100 | 800 | 755 | -64% | DONE |
| 30 | `get_cloud_flows` | 2,350 | 800 | 935 | -60% | DONE |
| 31 | `get_bpfs` | 2,350 | 800 | 801 | -66% | DONE |
| 32 | `get_jobs` | 2,400 | 800 | 880 | -63% | DONE |
| 33 | `get_plugins` | 2,600 | 900 | 1,027 | -60% | DONE |
| 34 | `get_commands` | — | 900 | 880 | — | DONE |
| 35 | `get_webresources` | — | 800 | — | — | NEW |

---

## Overall Summary

| Metric | Before | Target | Actual | vs Before | vs Target |
|--------|--------|--------|--------|-----------|-----------|
| **Total chars (tool + params)** | 69,800 | 26,300 | 33,209 | **-52.4%** | +26% over target |
| **Estimated tokens** (~4 chars/token) | 17,450 | 6,575 | 8,302 | **-52.4%** | - |
| **Tool description chars only** | - | - | 19,320 | - | - |
| **Param description chars only** | - | - | 13,889 | - | - |
| **Net lines changed (git diff)** | - | - | -406 lines | 1,876 deleted, 1,470 added | - |

### Analysis

- **Overall 52.4% reduction** — less than the 62% target because:
  - Some tools needed more context retained than estimated (e.g., `relevance_search` kept full SEARCH SYNTAX, `upsert_attribute` has 24 params with necessary type info, `build_formxml` has 5 operations with column layout info)
  - Param descriptions were optimized but still need meaningful content (not just "see tool description")
  - Safety-critical sections kept in full (BLOCKED OPERATIONS in `execute_webapi`, deletion warnings, backup notes)

- **Top performers** (>60% reduction): `parse_record_url` (-68%), `get_bpfs` (-66%), `upsert_sitemap` (-65%), `upsert_record` (-64%), `get_custom_apis` (-64%), `upsert_view` (-64%), `upsert_form` (-63%), `get_jobs` (-63%)

- **Lowest reduction**: `relevance_search` (0%), `get_business_rules` (-15%), `get_solution_components` (-15%), `upsert_attribute` (-19%) — these tools have unique content that couldn't be safely removed

### Recommendations for Further Optimization

1. **`relevance_search`**: SEARCH SYNTAX section is large but critical — no further optimization recommended
2. **`upsert_attribute`**: 24 params each need type-specific info — consider splitting into `create_attribute` and `update_attribute` if token budget is tight
3. **`build_formxml`**: 5 operation types each need examples — consider moving examples to a `docs://` resource
4. **`get_solution_components`**: Active layer checking docs are verbose but necessary — no further optimization recommended

---

## Appendix: Reference Materials

### Instructions for Executing AI

> The patterns below were used to guide the optimization. Kept for reference.

#### Golden Rule

**Do NOT remove meaning.** Every optimization must preserve the tool's intent, mode distinctions, safety rules, and MCP resource references.

#### What was NEVER Removed

- Mode distinctions (e.g., "detail mode" vs "browse mode")
- Safety-critical text (e.g., BLOCKED OPERATIONS in `execute_webapi`)
- MCP resource references (e.g., `schema://fetchxml`, `docs://instructions_for_formxml`)
- Action definitions (e.g., `'update'`, `'create'`, `'rename'`, `'undo'`)
- First sentence (keyword-rich for tool search matching)
