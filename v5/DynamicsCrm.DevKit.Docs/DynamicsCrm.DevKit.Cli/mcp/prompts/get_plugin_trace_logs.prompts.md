# get_plugin_trace_logs -- Prompt Validation

## Before Optimization

> 10 user prompts based on the original (verbose) tool description.
> Original had: PARAMETERS (record_id, type_name, minutes_ago, correlation_id, message_name, mode, max_records), RETURNS (with/without record_id), WHEN TO USE (5 bullets), TIPS (4).

1. "Show me all plugin trace logs from the last hour"
2. "My AccountPlugin is failing -- show me the recent trace logs for it"
3. "I need the full error details for plugin trace log d9e875bf-1234-5678-9abc-def012345678"
4. "What plugins executed for correlation ID a1b2c3d4-e5f6-7890-abcd-ef1234567890?"
5. "Show me all trace logs for Create message on the contact entity in the last 30 minutes"
6. "Are there any synchronous plugin failures in the last 2 hours?"
7. "I just deployed my plugin -- show me if it executed correctly by checking recent trace logs"
8. "Filter trace logs to show only async plugin executions from the last 24 hours"
9. "A user reports getting an error when updating an account -- show me plugin traces for the Update message on account"
10. "Get the full messageblock and exception details for this specific trace log entry: 12345678-abcd-ef01-2345-678901234567"

## After Optimization

> 10 user prompts based on the optimized (compressed) tool description.
> After: First sentence + TWO MODES (browse vs. detail) + 2 TIPS.

1. "Show me recent plugin trace logs from the last hour"
2. "My PreValidateAccountPlugin is throwing errors -- find its trace logs"
3. "Get the full trace output for plugin log ID d9e875bf-1234-5678-9abc-def012345678"
4. "Trace all plugins that fired for correlation ID a1b2c3d4-e5f6-7890-abcd-ef1234567890"
5. "Show me plugin traces for Create operations in the last 15 minutes"
6. "Are there any plugin failures? Check the last 4 hours"
7. "I just registered a new plugin step -- check if it's executing by looking at trace logs"
8. "Find async plugin trace logs for the Update message"
9. "Someone pasted this plugin trace URL -- parse it and show me the full details: https://myorg.crm.dynamics.com/main.aspx?etn=plugintracelog&pagetype=entityrecord&id=abcdef01-2345-6789-abcd-ef0123456789"
10. "Browse recent plugin logs first, then I'll pick one to see the full exception stack trace"

---

## Execution Results

> Executed against live environment on 2026-04-06. Connected as # DEVKIT to https://dynamics-crm-devkit-v4.crm.dynamics.com.

### Before Optimization

#### Prompt B.1: "Show me all plugin trace logs from the last hour"

**Step 1:** Call `mcp__devkit__get_plugin_trace_logs` with `{minutes_ago: 60}`
**Step 1 Result:** 0 logs found in last 60 minutes

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.2: "My AccountPlugin is failing -- show me the recent trace logs for it"

**Step 1:** Call `mcp__devkit__get_plugin_trace_logs` with `{type_name: "AccountPlugin"}`
**Step 1 Result:** 0 logs found matching typename "AccountPlugin" in last 60 minutes

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.3: "I need the full error details for plugin trace log d9e875bf-1234-5678-9abc-def012345678"

**Step 1:** Call `mcp__devkit__get_plugin_trace_logs` with `{record_id: "d9e875bf-1234-5678-9abc-def012345678"}`
**Step 1 Result:** Error — entity with that ID does not exist (expected: fake test ID)

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Tool correctly used detail mode with record_id. Error is expected since the GUID is fictitious

#### Prompt B.4: "What plugins executed for correlation ID a1b2c3d4-e5f6-7890-abcd-ef1234567890?"

**Step 1:** Call `mcp__devkit__get_plugin_trace_logs` with `{correlation_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890"}`
**Step 1 Result:** 0 logs found for that correlation ID in last 60 minutes

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.5: "Show me all trace logs for Create message on the contact entity in the last 30 minutes"

**Step 1:** Call `mcp__devkit__get_plugin_trace_logs` with `{message_name: "Create", minutes_ago: 30}`
**Step 1 Result:** 0 logs found for Create message in last 30 minutes

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Tool does not support entity-level filtering — only message_name was applied. The "contact entity" part of the prompt could not be filtered server-side

#### Prompt B.6: "Are there any synchronous plugin failures in the last 2 hours?"

**Step 1:** Call `mcp__devkit__get_plugin_trace_logs` with `{minutes_ago: 120, mode: "sync"}`
**Step 1 Result:** 0 sync logs found in last 120 minutes

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.7: "I just deployed my plugin -- show me if it executed correctly by checking recent trace logs"

**Step 1:** Call `mcp__devkit__get_plugin_trace_logs` with `{minutes_ago: 60}`
**Step 1 Result:** 0 logs found in last 60 minutes

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.8: "Filter trace logs to show only async plugin executions from the last 24 hours"

**Step 1:** Call `mcp__devkit__get_plugin_trace_logs` with `{minutes_ago: 1440, mode: "async"}`
**Step 1 Result:** 5 async logs found — PostAccountCreateAsynchronous (Create/account, 3 entries), PostContactDeleteAsynchronous (Delete/contact, 1 entry), PostAccountDeleteAsynchronousPackage (Delete/account, 1 entry). Durations: 232ms–2686ms

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.9: "A user reports getting an error when updating an account -- show me plugin traces for the Update message on account"

**Step 1:** Call `mcp__devkit__get_plugin_trace_logs` with `{message_name: "Update", minutes_ago: 1440}`
**Step 1 Result:** 0 logs found for Update message in last 1440 minutes

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Tool does not support entity-level filtering — only message_name was applied. No Update traces existed in the environment

#### Prompt B.10: "Get the full messageblock and exception details for this specific trace log entry: 12345678-abcd-ef01-2345-678901234567"

**Step 1:** Call `mcp__devkit__get_plugin_trace_logs` with `{record_id: "12345678-abcd-ef01-2345-678901234567"}`
**Step 1 Result:** Error — entity with that ID does not exist (expected: fake test ID)

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Tool correctly used detail mode with record_id. Error is expected since the GUID is fictitious

### After Optimization

#### Prompt A.1: "Show me recent plugin trace logs from the last hour"

**Step 1:** Call `mcp__devkit__get_plugin_trace_logs` with `{minutes_ago: 60}`
**Step 1 Result:** 2 logs found — PostAccountDeleteAsynchronousPackage (Delete/account, 828ms) and PostAccountCreateAsynchronous (Create/account, 2686ms)

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.2: "My PreValidateAccountPlugin is throwing errors -- find its trace logs"

**Step 1:** Call `mcp__devkit__get_plugin_trace_logs` with `{type_name: "PreValidateAccountPlugin"}`
**Step 1 Result:** 0 logs found matching typename "PreValidateAccountPlugin" in last 60 minutes

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.3: "Get the full trace output for plugin log ID d9e875bf-1234-5678-9abc-def012345678"

**Step 1:** Call `mcp__devkit__get_plugin_trace_logs` with `{record_id: "d9e875bf-1234-5678-9abc-def012345678"}`
**Step 1 Result:** Error — entity with that ID does not exist (expected: fake test ID)

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Tool correctly used detail mode with record_id. Error is expected since the GUID is fictitious

#### Prompt A.4: "Trace all plugins that fired for correlation ID a1b2c3d4-e5f6-7890-abcd-ef1234567890"

**Step 1:** Call `mcp__devkit__get_plugin_trace_logs` with `{correlation_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890"}`
**Step 1 Result:** 0 logs found for that correlation ID in last 60 minutes

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.5: "Show me plugin traces for Create operations in the last 15 minutes"

**Step 1:** Call `mcp__devkit__get_plugin_trace_logs` with `{message_name: "Create", minutes_ago: 15}`
**Step 1 Result:** 1 log found — PostAccountCreateAsynchronous (Create/account, Async, 2686ms, 2026-04-06 02:45:05)

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.6: "Are there any plugin failures? Check the last 4 hours"

**Step 1:** Call `mcp__devkit__get_plugin_trace_logs` with `{minutes_ago: 240}`
**Step 1 Result:** 2 logs found — PostAccountDeleteAsynchronousPackage (Delete/account, 828ms) and PostAccountCreateAsynchronous (Create/account, 2686ms). No exceptions reported

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.7: "I just registered a new plugin step -- check if it's executing by looking at trace logs"

**Step 1:** Call `mcp__devkit__get_plugin_trace_logs` with `{minutes_ago: 60}`
**Step 1 Result:** 2 logs found — PostAccountDeleteAsynchronousPackage and PostAccountCreateAsynchronous, both async on account entity

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.8: "Find async plugin trace logs for the Update message"

**Step 1:** Call `mcp__devkit__get_plugin_trace_logs` with `{message_name: "Update", mode: "async"}`
**Step 1 Result:** 0 logs found for Update + async in last 60 minutes

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.9: "Someone pasted this plugin trace URL -- parse it and show me the full details: https://myorg.crm.dynamics.com/main.aspx?etn=plugintracelog&pagetype=entityrecord&id=abcdef01-2345-6789-abcd-ef0123456789"

**Step 1:** Call `mcp__devkit__parse_record_url` with `{input: "https://myorg.crm.dynamics.com/main.aspx?etn=plugintracelog&pagetype=entityrecord&id=abcdef01-2345-6789-abcd-ef0123456789"}`
**Step 1 Result:** Parsed — EntityName: plugintracelog, RecordId: abcdef01-2345-6789-abcd-ef0123456789

**Step 2:** Call `mcp__devkit__get_plugin_trace_logs` with `{record_id: "abcdef01-2345-6789-abcd-ef0123456789"}`
**Step 2 Result:** Error — entity with that ID does not exist (expected: fake test ID)

**Verdict:** SUCCESS
**Total MCP Calls:** 2
**Notes:** Required parse_record_url to extract the GUID from the URL before calling detail mode. Error is expected since the GUID is fictitious

#### Prompt A.10: "Browse recent plugin logs first, then I'll pick one to see the full exception stack trace"

**Step 1:** Call `mcp__devkit__get_plugin_trace_logs` with `{minutes_ago: 1440}`
**Step 1 Result:** 6 logs found — PostAccountCreateAsynchronous (Create/account, 3 entries), PostContactDeleteAsynchronous (Delete/contact, 1 entry), PostAccountDeleteAsynchronousPackage (Delete/account, 2 entries)

**Step 2:** Call `mcp__devkit__get_plugin_trace_logs` with `{record_id: "54d0dc60-2d99-47a8-b7d4-0735bd83d92c"}`
**Step 2 Result:** Full detail for PostAccountCreateAsynchronous — Create on account, Async, depth 1, 2686ms, correlationId 6eec3c02-..., trace output contains compressed Helper.Decompress data, no exception

**Verdict:** SUCCESS
**Total MCP Calls:** 2
**Notes:** Two-step workflow as intended — browse first (list mode), then detail mode for a specific log

### Summary

| Section | Total Prompts | Success | Failed | Error | Avg MCP Calls |
|---------|--------------|---------|--------|-------|---------------|
| Before Optimization | 10 | 10 | 0 | 0 | 1.0 |
| After Optimization | 10 | 10 | 0 | 0 | 1.2 |

### Fixes Applied

| # | Tool | File | Error | Fix Description |
|---|------|------|-------|-----------------|
| — | — | — | — | No fixes needed |

> **Observation:** Both Before and After Optimization prompts achieved identical success rates (100%) with nearly identical average MCP calls (1.0 vs 1.2). The `get_plugin_trace_logs` tool description is clear and well-structured in both versions — the TWO MODES pattern (browse vs. detail with record_id) maps directly to the tool's parameters, making tool selection unambiguous regardless of description verbosity. The slight increase in After Optimization average (1.2) is due to two multi-step prompts: A.9 required `parse_record_url` to extract a GUID from a URL before calling detail mode, and A.10 explicitly tested the browse-then-detail workflow (2 calls). These are legitimate multi-step workflows, not inefficiencies caused by poor tool descriptions. The Before Optimization prompts were simpler and didn't include URL-parsing or explicit two-phase scenarios. Notably, neither version's description addresses entity-level filtering (B.5 and B.9 asked to filter by entity, but the tool only supports message_name, type_name, mode, and correlation_id filters) — this is a parameter gap, not a description optimization issue. The optimized description's concise TWO MODES format (browse vs. detail) is equally effective as the verbose original for guiding correct tool selection.
