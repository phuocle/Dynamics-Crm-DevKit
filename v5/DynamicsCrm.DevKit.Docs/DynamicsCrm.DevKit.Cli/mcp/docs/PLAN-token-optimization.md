# PLAN: MCP Tool Token Optimization

**Date**: 2026-04-04
**Status**: Draft — Pending Review
**Goal**: Reduce ~21K tokens consumed by 28 MCP tool definitions per AI request

---

## Current State

| Metric | Value |
|---|---|
| Total MCP tools | 28 |
| Total parameters | 157 |
| Total description characters | ~83,700 |
| **Est. tokens per request** | **~20,900** |
| Top 5 tools (32% of total) | upsert_view (1,695), upsert_attribute (1,474), upsert_form (1,196), build_formxml (1,168), upsert_sitemap (1,122) |
| Bottom 5 tools | delete_record (238), whoami (319), get_record (330), get_variables (360), get_rules (370) |

### Full Token Cost Table

| # | Tool | Est. Tokens | Params |
|---|---|---|---|
| 1 | upsert_view | 1,695 | 9 |
| 2 | upsert_attribute | 1,474 | 24 |
| 3 | upsert_form | 1,196 | 8 |
| 4 | build_formxml | 1,168 | 3 |
| 5 | upsert_sitemap | 1,122 | 6 |
| 6 | get_histories | 998 | 9 |
| 7 | upsert_variable | 908 | 9 |
| 8 | upsert_entity | 905 | 18 |
| 9 | execute_webapi | 895 | 6 |
| 10 | execute_fetchxml | 858 | 3 |
| 11 | get_metadata_entities | 833 | 4 |
| 12 | get_workflows | 821 | 6 |
| 13 | upsert_record | 752 | 3 |
| 14 | get_roles | 732 | 6 |
| 15 | get_forms | 727 | 5 |
| 16 | get_views | 696 | 5 |
| 17 | get_logs | 678 | 7 |
| 18 | parse_record_url | 569 | 1 |
| 19 | get_components | 545 | 1 |
| 20 | search | 534 | 4 |
| 21 | get_messages | 417 | 3 |
| 22 | publish | 409 | 3 |
| 23 | get_global_optionsets | 386 | 1 |
| 24 | get_rules | 370 | 4 |
| 25 | get_variables | 360 | 3 |
| 26 | get_record | 330 | 3 |
| 27 | whoami | 319 | 1 |
| 28 | delete_record | 238 | 2 |

---

## Research Findings

### 1. Anthropic's Tool Search Tool (a.k.a. "Tool Index")

Anthropic has a **first-party feature** called **Tool Search Tool** that implements exactly the "Tool Index" pattern.

**How it works:**

1. Mark tools with `defer_loading: true` — these are **excluded from the system prompt**
2. Include a `tool_search_tool` (regex or BM25 variant)
3. AI only sees non-deferred tools + the search tool
4. When AI needs a deferred tool → it searches → API expands 3-5 matching tools inline
5. Prompt cache is preserved (deferred tools don't affect cache key)

**Measured results from Anthropic:**

| Metric | Before | After | Improvement |
|---|---|---|---|
| Token usage (58 tools) | ~55K | ~8.7K | **85% reduction** |
| Tool selection accuracy (Opus 4) | 49% | 74% | +25% |
| Tool selection accuracy (Opus 4.5) | 79.5% | 88.1% | +8.6% |

### 2. Claude Code Support Status (as of 2026-04)

| Layer | `defer_loading` Support | Per-Tool Control | Notes |
|---|---|---|---|
| **Anthropic Messages API** | YES (GA) | YES | Full per-tool control |
| **Anthropic MCP Connector** (`mcp_toolset`) | YES (Beta) | YES | Via `default_config` + per-tool `configs` |
| **Claude Code CLI / VS Code** | YES (global only) | **NO** | Via `ENABLE_TOOL_SEARCH` env var |
| **MCP Protocol spec** | **NO** | N/A | Not part of MCP protocol |

**Claude Code specifics:**

| `ENABLE_TOOL_SEARCH` | Behavior |
|---|---|
| (default) | All MCP tools deferred, loaded on demand via tool search |
| `true` | Force enable (including non-Anthropic API URLs) |
| `auto` | Threshold: defer only if tools exceed 10% of context window |
| `auto:<N>` | Custom threshold (e.g., `auto:5` = 5% of context) |
| `false` | Disable — all tools loaded upfront |

**Known issues:**
- Per-tool `defer_loading` in `.claude.json` is silently **ignored** ([#26844](https://github.com/anthropics/claude-code/issues/26844))
- HTTP/Streamable HTTP MCP tools are **NOT deferred** even with `ENABLE_TOOL_SEARCH=true` — only stdio works ([#40314](https://github.com/anthropics/claude-code/issues/40314))
- Our DevKit MCP uses **stdio** transport → tool search **should already work** by default

### 3. Implications for DevKit

Since Claude Code already defers **all** stdio MCP tools by default, our 28 tools may already be deferred. However:

- We have **no control** over which tools stay always-loaded vs deferred
- Claude Code treats all MCP tools identically — no priority system
- The AI must search every time it needs any DevKit tool (even `whoami`)
- Tool descriptions still matter for search accuracy (BM25/regex matching)

---

## Proposed Actions

### Phase 1: Verify Current Behavior (Effort: Low)

**Goal**: Confirm whether tool search is already active for DevKit MCP tools.

| Step | Action |
|---|---|
| 1.1 | Start a Claude Code session with DevKit MCP connected |
| 1.2 | Run `/context` to check how tools are loaded (deferred vs upfront) |
| 1.3 | Check `ENABLE_TOOL_SEARCH` setting in current config |
| 1.4 | Document actual token usage per request (before optimization) |

### Phase 2: Optimize Tool Descriptions (Effort: Medium, Impact: ~25-40% reduction)

**Goal**: Reduce description size without losing AI accuracy.

| Step | Action | Target Savings |
|---|---|---|
| 2.1 | Remove repeated phrases across tools (e.g., "If unsure, call get_metadata_entities first" appears in 15+ tools) | ~500-1,000 tokens |
| 2.2 | Move detailed examples from descriptions to MCP resources (docs://) | ~3,000-5,000 tokens |
| 2.3 | Shorten WHEN TO USE / TIPS sections — keep 2-3 most important points | ~2,000-3,000 tokens |
| 2.4 | Reduce parameter descriptions — remove obvious info (e.g., "Leave empty to..." for every optional param) | ~1,000-2,000 tokens |

**Principle**: Descriptions need to be good enough for **tool search matching** (name + first line), while detailed guidance can live in resources that are loaded on-demand.

**Risk**: Over-shortening descriptions may reduce AI's ability to find the right tool via search. Need to test accuracy after changes.

### Phase 3: Restructure for Tool Search Optimization (Effort: Medium)

**Goal**: Make tool names and descriptions optimal for BM25/regex search matching.

| Step | Action |
|---|---|
| 3.1 | Ensure first sentence of each description is a clear, keyword-rich summary |
| 3.2 | Add canonical use-case keywords to descriptions (e.g., "audit trail" in get_histories) |
| 3.3 | Review tool names for searchability — current naming is already good (`get_*`, `upsert_*`, `execute_*`) |

### Phase 4: Description-to-Resource Migration (Effort: Medium-High)

**Goal**: Move bulk of tool guidance from descriptions to on-demand MCP resources.

| Current | Proposed |
|---|---|
| 4,619 chars in upsert_view description | ~500 chars description + `docs://instructions_for_views` resource (already exists) |
| 3,468 chars in build_formxml description | ~500 chars description + `docs://instructions_for_formxml` resource (already exists) |
| 2,804 chars in execute_fetchxml description | ~500 chars description + `schema://fetchxml` resource (already exists) |

**We already have 6 MCP resources** — we should leverage them more aggressively and move detailed tool guidance into resources.

### Phase 5 (Future): Custom Tool Categories for Agent SDK Users (Effort: High)

If DevKit MCP is used via Anthropic's Messages API directly (Agent SDK), we could provide recommended `defer_loading` configuration:

**Always loaded (core tools — ~2,500 tokens):**
- `whoami` (319) — session start
- `execute_fetchxml` (858) — most common query tool
- `get_metadata_entities` (833) — entity discovery
- `search` (534) — record lookup

**Deferred (all others — ~18,400 tokens):**
- All `upsert_*`, `get_forms/views/roles/logs/...`, `build_formxml`, `execute_webapi`, etc.

**Estimated result**: ~2,500 tokens always-loaded + tool_search overhead ≈ **~3,000-4,000 tokens** vs current ~21,000

---

## Expected Results Summary

| Phase | Action | Token Savings | Effort |
|---|---|---|---|
| 1 | Verify current behavior | 0 (baseline) | Low |
| 2 | Optimize descriptions | **~5,000-8,000** (~25-40%) | Medium |
| 3 | Search optimization | Accuracy improvement, not token savings | Medium |
| 4 | Description-to-resource migration | **~3,000-5,000** additional | Medium-High |
| 5 | Agent SDK defer_loading config | **~17,000** (85%) | High |

**Phase 2+4 combined**: ~21K → ~8-13K tokens (**40-60% reduction**)
**Phase 5 (API users)**: ~21K → ~3-4K tokens (**85% reduction**)

---

## References

| Source | URL |
|---|---|
| Tool Search Tool (Anthropic) | https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-search-tool |
| MCP Connector | https://platform.claude.com/docs/en/agents-and-tools/mcp-connector |
| Writing Tools for Agents | https://www.anthropic.com/engineering/writing-tools-for-agents |
| Effective Context Engineering | https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents |
| Define Tools Best Practices | https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools |
| Claude Code #26844 (defer_loading no-op) | https://github.com/anthropics/claude-code/issues/26844 |
| Claude Code #40314 (HTTP tools not deferred) | https://github.com/anthropics/claude-code/issues/40314 |

---

## Decision Needed

1. **Start with Phase 1** (verify) rồi Phase 2 (optimize descriptions)?
2. **Bao nhiêu % description có thể cắt** mà vẫn giữ accuracy tốt? Cần test.
3. **Phase 5** có cần thiết không? (Chỉ relevant nếu DevKit MCP được dùng qua Agent SDK)
