# Merge Analysis: Developer/Automation Tools

**Document Type:** MCP Tool Consolidation Analysis
**Scope:** 6 tools -> merge options
**Date:** 2026-04-06

---

## 1. Current State: 6 Separate Tools

| Tool | Params | LOC | Modes | Dataverse Entity | Domain |
|------|--------|-----|-------|------------------|--------|
| `get_custom_apis` | 5 | 455 | List, Detail | `customapi` | Developer extensibility |
| `get_flows` | 8 | 522 | List, Detail, Runs | `workflow` (cat=5) + `flowsession` | Power Automate |
| `get_messages` | 3 | 654 | List, Detail (async) | `sdkmessage` + `workflow` (cat=3) | SDK messaging |
| `get_business_process_flows` | 6 | 440 | List, Detail | `workflow` (cat=4) + `processstage` | BPF |
| `get_business_rules` | 4 | 376 | List, Detail | `workflow` (cat=2) | Client-side logic |
| `get_workflows` | 7 | 492 | List, Detail | `workflow` (cat=0) | Classic automation |
| **Total** | **33** | **2,939** | - | - | - |

---

## 2. Option A: Single `get_developer_tools` (All 6 Merged)

### Design

```
get_developer_tools(
    type: "custom_apis" | "flows" | "messages" | "bpfs" | "business_rules" | "workflows",
    action: "list" | "detail" | "runs",   // "runs" only for flows
    id: string,                            // record GUID for detail
    name: string,                          // name filter / exact match
    entity_name: string,                   // entity filter
    status: string,                        // active/draft/all
    mode: string,                          // workflows: background/realtime
    trigger_field: string,                 // workflows only
    active_only: bool,                     // workflows only
    include_stages: bool,                  // BPFs only
    include_microsoft: bool,               // custom_apis only
    include_custom_actions: bool,          // messages only
    owner_filter: string,                  // flows only
    status_filter: string,                 // flow runs only
    minutes_ago: int,                      // flow runs only
    max_records: int
)
```

### Pros

| # | Pro | Impact |
|---|-----|--------|
| 1 | **Tool count: 30 -> 25** | 5 fewer tool definitions in system prompt |
| 2 | **Single entry point** | AI learns one tool name for all "process/automation" queries |
| 3 | **Consistent pattern** | Matches `manage_record`, `manage_view`, `manage_environment_variable` pattern |

### Cons

| # | Con | Severity | Detail |
|---|-----|----------|--------|
| 1 | **16 parameters** | **CRITICAL** | AI must choose from 16 params where ~10 are type-specific. High hallucination risk |
| 2 | **Conflicting param semantics** | **HIGH** | `status` means different things: workflows (active_only bool), flows (active/draft/suspended/all), BPFs (active/draft/all), business_rules (active/draft/empty) |
| 3 | **Mandatory `type` dispatcher** | **HIGH** | Every call requires extra cognitive step. AI must know `type` before knowing which params apply |
| 4 | **Mixed async/sync** | **HIGH** | `get_messages` is async (MetadataService). Others are sync. Merging forces unified handler with branching async patterns |
| 5 | **Monolithic file: ~3,000+ LOC** | **MEDIUM** | Single file becomes unmaintainable. Debugging one type affects all |
| 6 | **Tool description explosion** | **MEDIUM** | Description must explain 6 sub-types, their params, and interactions. Likely 400+ tokens just for description |
| 7 | **"runs" action unique to flows** | **LOW** | Only flows have 3 modes. Others have 2. Creates asymmetric behavior |
| 8 | **Testing complexity** | **MEDIUM** | Unit tests must cover 6x type combinations with cross-type validation |

### Token Analysis (Tool Definition)

| Metric | 6 Separate Tools | 1 Merged Tool |
|--------|-------------------|---------------|
| Tool definitions | ~1,800 tokens | ~650 tokens |
| Description clarity | HIGH (each tool self-contained) | LOW (must describe 6 sub-types) |
| Parameter noise per call | LOW (3-8 relevant) | HIGH (16 params, ~10 irrelevant) |
| **Net token savings** | - | **~1,150 tokens** |

### Verdict: NOT RECOMMENDED

The 16-parameter merged tool violates the principle that tools should have focused, predictable interfaces. The token savings (~1,150) are offset by increased hallucination risk and worse AI accuracy.

---

## 3. Option B: Two Groups by Domain Cohesion

### Group 1: `get_workflows` (Merge 4 workflow-entity tools)

These 4 tools ALL query the same `workflow` entity, just filtered by category:

| Current Tool | workflow.category | Can share params |
|--------------|-------------------|------------------|
| `get_workflows` | 0 (Classic) | entity, status, name, mode, trigger_field |
| `get_business_rules` | 2 (Rules) | entity, status, name |
| `get_business_process_flows` | 4 (BPFs) | entity, status, name, include_stages |
| `get_flows` | 5 (Cloud flows) | status, name, owner, runs |

```
get_workflows(
    type: "classic" | "business_rules" | "bpfs" | "flows",  // default: "classic"
    action: "list" | "detail" | "runs",
    id: string,
    name: string,
    entity_name: string,
    status: string,             // "active" | "draft" | "all"
    // Classic-specific
    mode: string,               // "background" | "realtime"
    trigger_field: string,
    active_only: bool,
    // BPF-specific
    include_stages: bool,
    // Flow-specific
    owner_filter: string,
    status_filter: string,
    minutes_ago: int,
    max_records: int
)
```

### Group 2: Keep `get_messages` and `get_custom_apis` separate

Rationale: These query DIFFERENT entities and have fundamentally different behavior.

| Tool | Entity | Behavior |
|------|--------|----------|
| `get_messages` | `sdkmessage` + XAML parsing | Async, metadata service, SDK + Custom Actions |
| `get_custom_apis` | `customapi` + params/responses | Sync, 3 related entities, type mapping |

### Pros

| # | Pro | Impact |
|---|-----|--------|
| 1 | **Tool count: 30 -> 27** | 3 fewer tools (moderate reduction) |
| 2 | **Domain-cohesive** | All 4 are workflow categories — natural grouping in Dataverse |
| 3 | **Shared base query** | FetchXML template reuse across 4 workflow categories |
| 4 | **Keeps messages/custom_apis focused** | Their unique complexity stays isolated |

### Cons

| # | Con | Severity | Detail |
|---|-----|----------|--------|
| 1 | **14 parameters** | **HIGH** | Still too many type-specific params |
| 2 | **Flows are fundamentally different** | **HIGH** | Cloud flows (cat=5) have runs, owner filtering, flowsession — very different from classic workflows |
| 3 | **Business rules need entity_name required** | **MEDIUM** | Other types make it optional. Merged tool must validate conditionally |
| 4 | **Still a dispatcher pattern** | **MEDIUM** | `type` param adds cognitive overhead |

### Verdict: PARTIAL IMPROVEMENT, BUT FLOWS DON'T FIT

Merging classic workflows + business_rules + BPFs is defensible (same entity, similar patterns). But flows are too different.

---

## 4. Option C (RECOMMENDED): Three Semantic Groups

### Observation: Natural Affinity Clusters

| Cluster | Tools | Shared Traits |
|---------|-------|---------------|
| **Process Automation** | `get_workflows` + `get_business_rules` | Both are `workflow` entity, both triggered by entity events, both have XAML, both scoped to entity |
| **Process Design** | `get_business_process_flows` + `get_flows` | Both are process orchestration (guided vs automated), both have stages/runs/status tracking |
| **Developer APIs** | `get_messages` + `get_custom_apis` | Both are developer extensibility points, both about API surface discovery |

### But wait — does merging actually help?

Let me evaluate whether ANY merge is worth doing:

| Merge Candidate | Param Overlap | Behavior Overlap | Shared Entity | Worth It? |
|-----------------|---------------|------------------|---------------|-----------|
| workflows + business_rules | 3/7 (entity, status, name) | LOW (XAML parsing totally different) | Yes (workflow) | **MAYBE** |
| workflows + BPFs | 3/7 (entity, status, name) | LOW (stages vs triggers) | Yes (workflow) | **NO** |
| BPFs + flows | 1/8 (status) | VERY LOW | Partly (workflow) | **NO** |
| messages + custom_apis | 1/5 (entity_name) | LOW (async vs sync, XAML vs API) | No | **NO** |
| workflows + business_rules + BPFs | 3 shared | LOW overall | Yes | **MARGINAL** |

### The Real Question: Is 30 Tools Actually a Problem?

Current: 30 tools. The scaling research (RESEARCH-mcp-tool-scaling-limits.md) showed:

| Tool Count | AI Accuracy | Degradation |
|------------|-------------|-------------|
| 1-15 | 95-98% | None |
| 16-30 | 88-95% | Minimal |
| 31-50 | 75-88% | Moderate |
| 50+ | <75% | Severe |

**At 30 tools, we're at the upper boundary of "minimal degradation."** Merging 6 into 1 (Option A) would take us to 25 — still in the same tier with almost no accuracy improvement.

---

## 5. Option D (ALTERNATIVE RECOMMENDED): Merge Only the True Siblings

### Merge: `get_workflows` + `get_business_rules` -> `get_workflows`

These are the ONLY two tools that genuinely overlap:

| Trait | `get_workflows` | `get_business_rules` |
|-------|-----------------|---------------------|
| Entity | `workflow` (cat=0) | `workflow` (cat=2) |
| Query pattern | FetchXML by category | FetchXML by category |
| Detail mode | Workflow metadata | XAML parsing |
| Entity scoping | Optional | Required |
| Both return | Conditions, triggers, scope | Conditions, actions, scope |

```
get_workflows(
    type: "classic" | "business_rules",  // default: "classic"
    workflow_id: string,                  // OR rule_id for business_rules
    entity_name: string,                 // required for business_rules
    mode: string,                        // classic only
    active_only: bool,
    trigger_field: string,               // classic only
    name_filter: string,
    status: string,
    max_records: int
)
```

**Total params: 9** (vs 7+4=11 currently). Actually REDUCES total params.

### Keep Separate: `get_flows`, `get_business_process_flows`, `get_messages`, `get_custom_apis`

Each has unique characteristics that don't benefit from merging:

| Tool | Why Keep Separate |
|------|-------------------|
| `get_flows` | Unique "runs" action, flowsession entity, owner filtering |
| `get_business_process_flows` | Unique stages, processstage entity, stage categories |
| `get_messages` | Async, MetadataService, XAML parsing, dual-strategy |
| `get_custom_apis` | 3 related entities, type mappings, Microsoft filtering |

### Pros

| # | Pro | Impact |
|---|-----|--------|
| 1 | **Tool count: 30 -> 29** | Modest but meaningful |
| 2 | **Minimal parameter growth** | 9 params (merged) vs 11 (separate). Net reduction! |
| 3 | **Natural fit** | Both are workflow entity, both entity-scoped, both have conditions/actions |
| 4 | **Low risk** | Only 2 tools merged. Minimal code disruption |
| 5 | **Fix inconsistency** | business_rules returns string (not CallToolResult). Merge fixes this |
| 6 | **Preserves clarity of other tools** | Each remaining tool stays focused and predictable |

### Cons

| # | Con | Severity | Detail |
|---|-----|----------|--------|
| 1 | **Only saves 1 tool** | LOW | Marginal tool count reduction |
| 2 | **entity_name conditionally required** | LOW | Must validate: required when type=business_rules |
| 3 | **Detail behavior diverges** | LOW | Classic shows triggers/scope. Rules shows XAML conditions/actions |

### Token Impact

| Metric | Before (2 tools) | After (1 tool) |
|--------|-------------------|-----------------|
| Tool definitions | ~600 tokens | ~380 tokens |
| Net savings | - | **~220 tokens** |

---

## 6. Comparison Matrix

| Criteria | A: All-in-One | B: Two Groups | C: Three Groups | D: Siblings Only |
|----------|---------------|---------------|-----------------|------------------|
| Tool count | 25 (-5) | 27 (-3) | 27-28 (-2 to -3) | 29 (-1) |
| Max params | 16 | 14 | 10-12 | 9 |
| AI accuracy risk | **HIGH** | **MEDIUM-HIGH** | **LOW-MEDIUM** | **MINIMAL** |
| Code complexity | **VERY HIGH** | **HIGH** | **MEDIUM** | **LOW** |
| Token savings | ~1,150 | ~750 | ~400-600 | ~220 |
| Implementation effort | 3-5 days | 2-3 days | 2 days | 0.5-1 day |
| Regression risk | **HIGH** | **MEDIUM** | **LOW** | **MINIMAL** |
| Semantic clarity | **LOW** | **MEDIUM** | **MEDIUM-HIGH** | **HIGH** |

---

## 7. Final Recommendation

### Primary: Option D (Merge Only Siblings)

**Merge `get_workflows` + `get_business_rules` -> `get_workflows`** with `type` parameter.

**Rationale:**
1. At 30 tools, we're still in the "minimal degradation" zone (88-95% accuracy)
2. Aggressive merging (Options A/B) creates parameter bloat that HURTS accuracy more than tool count reduction HELPS
3. The workflow + business_rules merge is the only one with genuine domain overlap
4. Low risk, low effort, fixes the string-return inconsistency in business_rules

### Secondary: Do Nothing (Keep 6 Separate)

If the goal is stability over optimization, keeping all 6 separate is also valid. Each tool is well-designed, focused, and predictable. The 30-tool count is not yet problematic.

### NOT Recommended: Options A or B

The parameter explosion (14-16 params) with type-specific semantics creates more problems than it solves. AI models perform worse with large parameter sets where most params are irrelevant to any given call.

---

## 8. If Proceeding with Option D

### Implementation Steps

1. Add `type` parameter to `GetWorkflowsTool`: `"classic"` (default) | `"business_rules"`
2. Move `GetBusinessRulesTool.ParseXaml()` logic into GetWorkflowsTool
3. Make `entity_name` required when `type=business_rules`
4. Return `CallToolResult` consistently (fix business_rules inconsistency)
5. Update tool description to cover both modes
6. Delete `GetBusinessRulesTool.cs`
7. Update AGENTS.md tool list (30 -> 29)
8. Update MCP registration

### Migration Guide for AI Callers

| Before | After |
|--------|-------|
| `get_business_rules(entity_name="account")` | `get_workflows(type="business_rules", entity_name="account")` |
| `get_business_rules(entity_name="account", rule_id="xxx")` | `get_workflows(type="business_rules", entity_name="account", workflow_id="xxx")` |
| `get_workflows(entity_name="account")` | `get_workflows(entity_name="account")` (unchanged) |
| `get_workflows(entity_name="account", mode="realtime")` | `get_workflows(entity_name="account", mode="realtime")` (unchanged) |
