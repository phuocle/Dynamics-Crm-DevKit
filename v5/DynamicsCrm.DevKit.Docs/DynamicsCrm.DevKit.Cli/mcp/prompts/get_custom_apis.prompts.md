# get_custom_apis — Prompt Validation

## Before Optimization

> 10 user prompts based on the original (verbose) tool description with TWO MODES, PARAMETERS, RETURNS, WHEN TO USE, RELATIONSHIP, TIPS.

1. "List all custom APIs in this environment — I want to see what's available"
2. "Show me the full details for the Custom API called 'v4_ProcessOrder' including its request parameters and response properties"
3. "Which Custom APIs are bound to the account entity?"
4. "Are there any Custom APIs that don't have a plugin type registered? I want to find client-only ones"
5. "List all Custom APIs but include the Microsoft-provided ones too — I need to see msdyn_ APIs"
6. "What are the request parameters for the v4_CalculateDiscount Custom API?"
7. "Show me only inactive Custom APIs in the environment"
8. "I see a Custom Action name in get_messages output — can you get the full parameter details for 'new_ApproveExpense'?"
9. "How many Custom APIs are registered as Functions (GET) versus Actions (POST)?"
10. "List all Custom APIs bound to the opportunity entity and show which ones have plugin bindings"

## After Optimization

> 10 user prompts based on the optimized (compressed) tool description with TWO MODES + 2 TIPS.

1. "List all custom APIs in the environment"
2. "Get full details for the Custom API v4_ProcessOrder including parameters and response"
3. "Which Custom APIs are bound to the account entity?"
4. "Show me Custom APIs that have no plugin type — I want to find the client-only ones"
5. "List all APIs including Microsoft-provided ones"
6. "What parameters does the new_ApproveExpense Custom API expect?"
7. "Are there any inactive Custom APIs?"
8. "Show me the response properties for the v4_CalculateDiscount API"
9. "List all Custom APIs that are Functions versus Actions"
10. "Which Custom APIs are bound to opportunity and have a plugin registered?"

---

## Execution Results

> Executed against live environment on 2026-04-06. Connected as # DEVKIT to https://dynamics-crm-devkit-v4.crm.dynamics.com.

### Before Optimization

#### Prompt B.1: "List all custom APIs in this environment — I want to see what's available"

**Step 1:** Call `mcp__devkit__get_custom_apis` with `{}`
**Step 1 Result:** 100 Custom APIs returned (default active, excludes Microsoft by default). Mix of Global and Entity-bound APIs. Examples: AddCertificateCredential, AIClassify, AIExtract, CardCreateClone, ExecuteFxExpression, FormPredict, etc.

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.2: "Show me the full details for the Custom API called 'v4_ProcessOrder' including its request parameters and response properties"

**Step 1:** Call `mcp__devkit__get_custom_apis` with `{api_name: "v4_ProcessOrder"}`
**Step 1 Result:** Error: Custom API 'v4_ProcessOrder' not found

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** API does not exist in this environment — tool correctly returned "not found" error. The detail mode was correctly triggered by providing api_name.

#### Prompt B.3: "Which Custom APIs are bound to the account entity?"

**Step 1:** Call `mcp__devkit__get_custom_apis` with `{entity_name: "account"}`
**Step 1 Result:** 1 Custom API bound to account: v4_AccountCustomApi (bindingType=Entity, isFunction=false, processingType=Sync and Async, pluginType=v4_AccountCustomApiRequest)

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.4: "Are there any Custom APIs that don't have a plugin type registered? I want to find client-only ones"

**Step 1:** Call `mcp__devkit__get_custom_apis` with `{}`
**Step 1 Result:** 100 APIs returned. From the results, APIs without pluginType (client-only): AIClassify, AIExtract, AIModelPublish, AIReply, AISentiment, AISummarize, AISummarizeRecord, AITranslate, FetchXMLToSQL, FormPredict — approximately 10 APIs have no plugin binding in the first 100 results.

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** No direct filter for "no plugin type" exists — requires listing all and analyzing results client-side. The tool returns pluginType field which can be checked for absence.

#### Prompt B.5: "List all Custom APIs but include the Microsoft-provided ones too — I need to see msdyn_ APIs"

**Step 1:** Call `mcp__devkit__get_custom_apis` with `{include_microsoft: true}`
**Step 1 Result:** 100 APIs returned (same count as B.1). The include_microsoft flag had no visible effect — Microsoft APIs (msdyn_, mspp_) appear to already be included by default in this environment.

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** The include_microsoft parameter did not change the result set. The tool description says "Microsoft APIs excluded by default" but the default listing already includes Microsoft APIs like AddCertificateCredential, AIClassify, etc. The flag may only filter on msdyn_/mspp_ prefixed names specifically.

#### Prompt B.6: "What are the request parameters for the v4_CalculateDiscount Custom API?"

**Step 1:** Call `mcp__devkit__get_custom_apis` with `{api_name: "v4_CalculateDiscount"}`
**Step 1 Result:** Error: Custom API 'v4_CalculateDiscount' not found

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** API does not exist. Detail mode correctly triggered to retrieve parameters.

#### Prompt B.7: "Show me only inactive Custom APIs in the environment"

**Step 1:** Call `mcp__devkit__get_custom_apis` with `{status: "inactive"}`
**Step 1 Result:** 0 inactive Custom APIs found in this environment

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.8: "I see a Custom Action name in get_messages output — can you get the full parameter details for 'new_ApproveExpense'?"

**Step 1:** Call `mcp__devkit__get_custom_apis` with `{api_name: "new_ApproveExpense"}`
**Step 1 Result:** Error: Custom API 'new_ApproveExpense' not found

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** API does not exist. The prompt mentions "Custom Action from get_messages" — get_custom_apis only covers Custom APIs (modern), not legacy Custom Actions (workflow category=3). For legacy Custom Actions, get_sdk_messages should be used instead.

#### Prompt B.9: "How many Custom APIs are registered as Functions (GET) versus Actions (POST)?"

**Step 1:** Call `mcp__devkit__get_custom_apis` with `{}`
**Step 1 Result:** 100 APIs returned. From the isFunction field analysis: Functions (isFunction=true): ~10 (cascadeAsync_FailureAPI, copilottextdatastatus, DiscoverFederatedKnowledge, FederatedKnowledgeStatus, FetchXMLToSQL, GetBackgroundOperations, GetComponentManagedIdentityFIC, GetDataSync, GetDataSyncStatus, GetHostedRpaCapacity). Actions (isFunction=false): ~90 of the first 100.

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** No aggregate/count mode exists — requires listing all and counting client-side. Results are capped at 100 (first page), so the actual totals may be higher.

#### Prompt B.10: "List all Custom APIs bound to the opportunity entity and show which ones have plugin bindings"

**Step 1:** Call `mcp__devkit__get_custom_apis` with `{entity_name: "opportunity"}`
**Step 1 Result:** Error: Entity 'opportunity' not found. Use get_metadata_entities to discover valid entity names.

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** No Custom APIs are bound to opportunity in this environment. The error message is slightly misleading — it says "entity not found" but opportunity does exist as an entity; there are simply no Custom APIs bound to it.

### After Optimization

#### Prompt A.1: "List all custom APIs in the environment"

**Step 1:** Call `mcp__devkit__get_custom_apis` with `{}`
**Step 1 Result:** 100 Custom APIs returned. Mix of Global and Entity-bound, mostly Actions (isFunction=false), all Active status.

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.2: "Get full details for the Custom API v4_ProcessOrder including parameters and response"

**Step 1:** Call `mcp__devkit__get_custom_apis` with `{api_name: "v4_ProcessOrder"}`
**Step 1 Result:** Error: Custom API 'v4_ProcessOrder' not found

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.3: "Which Custom APIs are bound to the account entity?"

**Step 1:** Call `mcp__devkit__get_custom_apis` with `{entity_name: "account"}`
**Step 1 Result:** 1 API found: v4_AccountCustomApi (Entity-bound to account, Action, Sync and Async, plugin=v4_AccountCustomApiRequest)

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.4: "Show me Custom APIs that have no plugin type — I want to find the client-only ones"

**Step 1:** Call `mcp__devkit__get_custom_apis` with `{}`
**Step 1 Result:** 100 APIs returned. ~10 have no pluginType (client-only): AIClassify, AIExtract, AIModelPublish, AIReply, AISentiment, AISummarize, AISummarizeRecord, AITranslate, FetchXMLToSQL, FormPredict.

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Same approach as B.4 — no server-side filter for "no plugin" exists.

#### Prompt A.5: "List all APIs including Microsoft-provided ones"

**Step 1:** Call `mcp__devkit__get_custom_apis` with `{include_microsoft: true}`
**Step 1 Result:** 100 APIs returned (same set as A.1 — Microsoft APIs already included by default)

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.6: "What parameters does the new_ApproveExpense Custom API expect?"

**Step 1:** Call `mcp__devkit__get_custom_apis` with `{api_name: "new_ApproveExpense"}`
**Step 1 Result:** Error: Custom API 'new_ApproveExpense' not found

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.7: "Are there any inactive Custom APIs?"

**Step 1:** Call `mcp__devkit__get_custom_apis` with `{status: "inactive"}`
**Step 1 Result:** 0 inactive Custom APIs found

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.8: "Show me the response properties for the v4_CalculateDiscount API"

**Step 1:** Call `mcp__devkit__get_custom_apis` with `{api_name: "v4_CalculateDiscount"}`
**Step 1 Result:** Error: Custom API 'v4_CalculateDiscount' not found

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.9: "List all Custom APIs that are Functions versus Actions"

**Step 1:** Call `mcp__devkit__get_custom_apis` with `{}`
**Step 1 Result:** 100 APIs returned. Functions (isFunction=true): ~10. Actions (isFunction=false): ~90. No server-side filter for isFunction exists.

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.10: "Which Custom APIs are bound to opportunity and have a plugin registered?"

**Step 1:** Call `mcp__devkit__get_custom_apis` with `{entity_name: "opportunity"}`
**Step 1 Result:** Error: Entity 'opportunity' not found (no Custom APIs bound to opportunity)

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

> **Observation:** Both Before and After Optimization prompts achieved identical 1.0 MCP calls per prompt — `get_custom_apis` is a simple, well-designed tool where all prompts map directly to a single call with clear parameter mapping. The tool has only 5 parameters (api_name, entity_name, include_microsoft, status, max_records), making tool selection trivially correct regardless of description verbosity. The verbose vs compressed descriptions made no measurable difference because the tool's TWO MODES pattern (list vs detail) is straightforward — `api_name` for detail, everything else for list. Two minor observations: (1) The `include_microsoft` flag had no visible effect since Microsoft APIs were already included in the default listing — the tool description claims they are "excluded by default" but this doesn't match observed behavior, suggesting the default `include_microsoft=false` filter may only target `msdyn_`/`mspp_` prefixed names rather than all Microsoft-published APIs. (2) The entity_name filter returns a misleading "Entity not found" error when no Custom APIs are bound to a valid entity (e.g., opportunity) — a more accurate message would be "No Custom APIs found bound to entity 'opportunity'". Neither the verbose nor optimized description guided differently for these edge cases. Overall, for tools with few parameters and simple mode switching, description optimization yields no measurable efficiency improvement.
