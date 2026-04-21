# MCP Tool Description Optimization - Detailed Review

Date: 2026-04-21
Scope: DynamicsCrm.DevKit.Cli MCP tools metadata (tool description + parameter description + resource guidance)

## 1) Current Snapshot

- Current MCP tools in code: 34 tools.
- Current docs inventory in AGENTS.md: 32 tools.
- Current long-form audit doc still references 31 tools.
- Approx metadata payload size in tool declarations:
  - ~39,954 chars (~9,988 tokens, rough 4 chars/token estimate).
- 15 tools have metadata blocks >= 1200 chars.

Top heavy tools by metadata length:
1. upsert_relationship (1979)
2. manage_role (1773)
3. upsert_column (1713)
4. build_sitemap_xml (1707)
5. manage_view (1628)
6. upsert_table (1570)
7. manage_choice (1501)
8. manage_form (1483)
9. build_form_xml (1423)
10. manage_webresource (1414)

## 2) Optimization Objective (Practical)

Goal should be split into 3 measurable KPIs instead of a single generic "reduce tokens":

1. Metadata size KPI:
- Reduce total tool metadata payload by 25-35% without changing runtime behavior.

2. First-call correctness KPI:
- Keep or improve first-call success rate for sensitive tools:
  - build_form_xml
  - manage_view
  - manage_record
  - execute_fetchxml
  - upsert_column

3. Recovery KPI:
- Validation errors must include actionable "what is wrong + valid values + next reference" guidance.

## 3) What Should Stay Inline vs Move Out

Keep inline in tool descriptions (must stay):
- Action names and mode switches.
- Required parameter combinations per action.
- Safety-critical constraints (blocked operations, destructive warnings).
- One-line workflow guardrails (for example: build first, then apply).

Move to resources (can be externalized):
- Long examples.
- Deep option matrices and full enum explanations.
- Background rationale and implementation details.
- Advanced troubleshooting playbooks.

## 4) Tool-by-Tool Priority Bands

### Band A - High Impact, High Priority

Tools:
- upsert_relationship
- upsert_column
- upsert_table
- manage_view
- build_sitemap_xml
- manage_role

Why:
- Very long descriptions with dense option explanations.
- High risk of AI confusion if action/required params are not prominent.

Optimization pattern:
- Compress prose.
- Keep strict action contract table inline.
- Move enum deep-dive to resources.
- Ensure every validation error returns valid values and resource hint.

### Band B - Medium Impact, Low/Medium Risk

Tools:
- manage_form
- build_form_xml
- manage_choice
- manage_webresource
- manage_environment_variable
- get_workflows
- get_messages
- manage_sitemap
- execute_webapi

Why:
- Can be reduced significantly, but still needs clear operation contract.

Optimization pattern:
- Remove redundant "WHEN TO USE" and repeated tips.
- Keep destructive warnings and update flow notes.
- Keep one canonical workflow line.

### Band C - Low Impact

Tools:
- whoami
- execute_fetchxml
- parse_record_url
- get_* read-only explorer tools with already short descriptions.

Why:
- Limited token savings; avoid churn unless consistency cleanup is needed.

## 5) Specific Content Issues To Fix During Optimization

1. Inventory drift:
- AGENTS.md and MCP audit docs should be updated to match 34 tools.

2. Contract drift prevention:
- Add a lightweight check (script or test) that validates every tool description action list against runtime action handlers for tools that use action switches.

3. Resource terminology consistency:
- Ensure resource docs only mention current tool names.
- Avoid stale aliases in instructional text.

4. Error style consistency:
- Standardize validation error format:
  - Error: [problem]
  - Valid: [accepted values]
  - Next: [resource/tool hint]

## 6) Recommended Rollout Plan

Phase 1 (safe and immediate):
- Fix all contract mismatch and stale naming issues.
- Update inventory docs to 34 tools.
- No behavioral changes.

Phase 2 (high ROI compression):
- Apply optimization to Band A only.
- Measure metadata size delta and first-call success on a fixed prompt suite.

Phase 3 (expand carefully):
- Apply to Band B if Phase 2 metrics pass.
- Keep Band C mostly unchanged unless needed for consistency.

## 7) Validation Checklist For Each Batch

- Build tool list still exposes expected names.
- Action names in description exactly match runtime accepted values.
- Required parameter pairs are explicitly listed.
- At least one canonical next-step line for multi-tool workflows.
- Validation errors include valid values and next reference.
- No stale tool names in resources/docs.

## 8) Suggested Prompt Regression Set

Use these prompt classes to validate first-call quality after each batch:

1. Form mutation flow (build then apply)
2. View update with sync constraints
3. Relevance search status and query flow
4. Schema create/update (table/column/relationship)
5. Web API blocked-vs-allowed decision
6. Role privilege operations with depth/scope

Pass target:
- No drop in first-call correctness.
- No increase in avoidable retries due to missing action/param clarity.

## 9) Immediate Next Changes (if approved)

1. Sync AGENTS.md and MCP audit docs to 34 tools.
2. Start Phase 2 with Band A top 3:
- upsert_relationship
- upsert_column
- upsert_table
3. Produce before/after token-size report per tool.
