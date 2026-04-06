# get_system_jobs — Prompt Validation

## Before Optimization

> 10 user prompts based on the original (verbose) tool description with TWO MODES, PARAMETERS, RETURNS, WHEN TO USE, RELATIONSHIP, TIPS.

1. "What system jobs failed in the last 24 hours?"
2. "Show me the error details for system job d9e875bf-1234-5678-abcd-ef1234567890 — I need the full stack trace"
3. "Are there any failed async plugin jobs on the account entity?"
4. "My plugin is failing asynchronously — show me the recent error messages"
5. "What workflow jobs are currently waiting in the queue?"
6. "Show me all failed bulk delete operations this week"
7. "What jobs ran for correlation ID abc12345-6789-0abc-def0-123456789abc? I want to trace the full request"
8. "Are there any solution import jobs in progress right now?"
9. "List all failed jobs on the contact entity from the last 7 days"
10. "Show me succeeded plugin jobs from the last hour — I want to verify my deployment worked"

## After Optimization

> 10 user prompts based on the optimized (compressed) tool description with TWO MODES + 2 TIPS.

1. "What system jobs failed in the last 24 hours?"
2. "Show error details and stack trace for job d9e875bf-1234-5678-abcd-ef1234567890"
3. "Any failed plugin jobs on the account entity?"
4. "Show me recent async plugin failures"
5. "What workflow jobs are currently waiting?"
6. "List failed bulk delete operations from the last 7 days"
7. "Trace all jobs for correlation ID abc12345-6789-0abc-def0-123456789abc"
8. "Are there any solution import jobs in progress?"
9. "Show failed jobs on the contact entity from the past week"
10. "List succeeded plugin jobs from the last hour to verify my deployment"

---

## Execution Results

> Executed against live environment on 2026-04-06. Connected as # DEVKIT to https://dynamics-crm-devkit-v4.crm.dynamics.com.

### Before Optimization

#### Prompt B.1: "What system jobs failed in the last 24 hours?"

**Step 1:** Call `mcp__devkit__get_jobs` with `{}`
**Step 1 Result:** 1 failed job: RoleAutoExpanderPlugin on CreateEntity (2026-04-05 07:40, error -2147187357 "database session was disconnected"). Summary: plugin=1

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.2: "Show me the error details for system job d9e875bf-1234-5678-abcd-ef1234567890 — I need the full stack trace"

**Step 1:** Call `mcp__devkit__get_jobs` with `{job_id: "d9e875bf-1234-5678-abcd-ef1234567890"}`
**Step 1 Result:** Error — system job not found (test GUID does not exist in environment)

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Tool correctly returned "not found" for non-existent GUID. Detail mode with job_id was correctly selected

#### Prompt B.3: "Are there any failed async plugin jobs on the account entity?"

**Step 1:** Call `mcp__devkit__get_jobs` with `{entity_name: "account", operation_type: "plugin"}`
**Step 1 Result:** 0 jobs found. No failed plugin jobs on account entity

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.4: "My plugin is failing asynchronously — show me the recent error messages"

**Step 1:** Call `mcp__devkit__get_jobs` with `{operation_type: "plugin"}`
**Step 1 Result:** 1 failed plugin job: RoleAutoExpanderPlugin on CreateEntity (2026-04-05 07:40, error "database session was disconnected")

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.5: "What workflow jobs are currently waiting in the queue?"

**Step 1:** Call `mcp__devkit__get_jobs` with `{operation_type: "workflow", status: "waiting"}`
**Step 1 Result:** 0 jobs found. No workflow jobs currently waiting

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.6: "Show me all failed bulk delete operations this week"

**Step 1:** Call `mcp__devkit__get_jobs` with `{minutes_ago: 10080, operation_type: "bulk_delete"}`
**Step 1 Result:** 0 jobs found. No failed bulk delete operations in the last 7 days

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.7: "What jobs ran for correlation ID abc12345-6789-0abc-def0-123456789abc? I want to trace the full request"

**Step 1:** Call `mcp__devkit__get_jobs` with `{correlation_id: "abc12345-6789-0abc-def0-123456789abc", status: "all"}`
**Step 1 Result:** 0 jobs found. No jobs with that correlation ID

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Used status="all" to search across all job statuses for the correlation trace

#### Prompt B.8: "Are there any solution import jobs in progress right now?"

**Step 1:** Call `mcp__devkit__get_jobs` with `{operation_type: "solution", status: "in_progress"}`
**Step 1 Result:** 0 jobs found. No solution import jobs currently in progress

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.9: "List all failed jobs on the contact entity from the last 7 days"

**Step 1:** Call `mcp__devkit__get_jobs` with `{entity_name: "contact", minutes_ago: 10080}`
**Step 1 Result:** 0 jobs found. No failed jobs on contact entity in the last 7 days

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.10: "Show me succeeded plugin jobs from the last hour — I want to verify my deployment worked"

**Step 1:** Call `mcp__devkit__get_jobs` with `{minutes_ago: 60, operation_type: "plugin", status: "succeeded"}`
**Step 1 Result:** 5 succeeded plugin jobs — all OnAppModulePublishCreateDataverseSkill (2026-04-06 03:53–03:55, execution times 31ms–1.4s, same correlationId)

**Verdict:** SUCCESS
**Total MCP Calls:** 1

### After Optimization

#### Prompt A.1: "What system jobs failed in the last 24 hours?"

**Step 1:** Call `mcp__devkit__get_jobs` with `{}`
**Step 1 Result:** 1 failed job: RoleAutoExpanderPlugin on CreateEntity (2026-04-05 07:40, error -2147187357 "database session was disconnected"). Summary: plugin=1

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.2: "Show error details and stack trace for job d9e875bf-1234-5678-abcd-ef1234567890"

**Step 1:** Call `mcp__devkit__get_jobs` with `{job_id: "d9e875bf-1234-5678-abcd-ef1234567890"}`
**Step 1 Result:** Error — system job not found (test GUID does not exist in environment)

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.3: "Any failed plugin jobs on the account entity?"

**Step 1:** Call `mcp__devkit__get_jobs` with `{entity_name: "account", operation_type: "plugin"}`
**Step 1 Result:** 0 jobs found. No failed plugin jobs on account entity

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.4: "Show me recent async plugin failures"

**Step 1:** Call `mcp__devkit__get_jobs` with `{operation_type: "plugin"}`
**Step 1 Result:** 1 failed plugin job: RoleAutoExpanderPlugin on CreateEntity (2026-04-05 07:40, error "database session was disconnected")

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.5: "What workflow jobs are currently waiting?"

**Step 1:** Call `mcp__devkit__get_jobs` with `{operation_type: "workflow", status: "waiting"}`
**Step 1 Result:** 0 jobs found. No workflow jobs currently waiting

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.6: "List failed bulk delete operations from the last 7 days"

**Step 1:** Call `mcp__devkit__get_jobs` with `{minutes_ago: 10080, operation_type: "bulk_delete"}`
**Step 1 Result:** 0 jobs found. No failed bulk delete operations in the last 7 days

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.7: "Trace all jobs for correlation ID abc12345-6789-0abc-def0-123456789abc"

**Step 1:** Call `mcp__devkit__get_jobs` with `{correlation_id: "abc12345-6789-0abc-def0-123456789abc", status: "all"}`
**Step 1 Result:** 0 jobs found. No jobs with that correlation ID

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Used status="all" to search across all job statuses for the correlation trace

#### Prompt A.8: "Are there any solution import jobs in progress?"

**Step 1:** Call `mcp__devkit__get_jobs` with `{operation_type: "solution", status: "in_progress"}`
**Step 1 Result:** 0 jobs found. No solution import jobs currently in progress

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.9: "Show failed jobs on the contact entity from the past week"

**Step 1:** Call `mcp__devkit__get_jobs` with `{entity_name: "contact", minutes_ago: 10080}`
**Step 1 Result:** 0 jobs found. No failed jobs on contact entity in the last 7 days

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.10: "List succeeded plugin jobs from the last hour to verify my deployment"

**Step 1:** Call `mcp__devkit__get_jobs` with `{minutes_ago: 60, operation_type: "plugin", status: "succeeded"}`
**Step 1 Result:** 5 succeeded plugin jobs — all OnAppModulePublishCreateDataverseSkill (2026-04-06 03:53–03:55, execution times 31ms–1.4s, same correlationId)

**Verdict:** SUCCESS
**Total MCP Calls:** 1

### Summary

| Section | Total Prompts | Success | Failed | Error | Avg MCP Calls |
|---------|--------------|---------|--------|-------|---------------|
| Before Optimization | 10 | 10 | 0 | 0 | 1.0 |
| After Optimization | 10 | 10 | 0 | 0 | 1.0 |

### Fixes Applied

| # | Tool | File | Error | Fix Description |
|---|------|------|-------|-----------------|
| — | — | — | — | No fixes needed |

> **Observation:** Both Before and After Optimization prompts achieved identical results — every prompt resolved in exactly 1 MCP call with correct parameter mapping. The `get_jobs` tool has an exceptionally well-designed parameter set that maps directly to natural language concepts: `operation_type` cleanly covers "plugin", "workflow", "bulk_delete", "solution"; `status` maps to "failed", "waiting", "in_progress", "succeeded"; `minutes_ago` handles time ranges; `entity_name` scopes by entity; `correlation_id` enables request tracing; and `job_id` enables detail mode. The tool's defaults (status="failed", minutes_ago=1440) are perfectly chosen — the most common use case ("what failed recently?") requires zero parameters. The verbose description didn't cause any extra calls because the tool's parameter names are already self-explanatory. The optimization had no measurable impact on call efficiency here, suggesting the original description was already well-structured for AI comprehension. This is a model example of tool design where parameter semantics align perfectly with user intent, making both verbose and compressed descriptions equally effective.

