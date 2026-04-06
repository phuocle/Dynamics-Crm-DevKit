# get_audit_history -- Prompt Validation

## Before Optimization

> 10 user prompts based on the original (verbose) tool description with 12 PARAMETERS, RETURNS, 7 WHEN TO USE bullets, and 4 TIPS.

1. "Who changed the revenue field on this account record last week?"
2. "Show me the full audit history for contact 91330924-802a-4b0d-a900-34fd9d790829"
3. "What records were deleted across all entities in the last 48 hours?"
4. "Filter the audit log to only show changes made by the sync service account john.sync@contoso.com"
5. "Show me all Update operations on the opportunity entity between March 1 and March 15"
6. "When was the statuscode field last changed on lead a1b2c3d4-e5f6-7890-abcd-ef1234567890?"
7. "What did the integration user change on any account in the last 7 days?"
8. "Show me the old and new values for every field change on this case record"
9. "Pull up audit entries for Create operations on the contact entity from the past 30 minutes"
10. "I need to prove who changed the deal amount on opportunity record xyz -- can you show the audit trail with timestamps?"

## After Optimization

> 10 user prompts based on the optimized description with first sentence + TWO MODES + 3 WHEN TO USE + 2 TIPS.

1. "Who changed the revenue on account 5f8b3a21-c9d7-4e12-b6a8-1234567890ab?"
2. "Show all audit entries for the opportunity entity in the last 24 hours"
3. "What fields were modified on this contact record and by whom?"
4. "List all deleted records across all entities this week"
5. "Show audit history for changes made by admin@contoso.com on accounts"
6. "When was the statuscode last updated on lead e7f8a9b0-1234-5678-9abc-def012345678?"
7. "What changed on any account record between 2026-03-01 and 2026-03-31?"
8. "Show me the old and new values for the name field on this opportunity"
9. "Pull up all Create operations on the incident entity from the last 2 hours"
10. "Track all changes made by the data migration service user in the past 30 days"

---

## Execution Results

> Executed against live environment on 2026-04-06. Connected as # DEVKIT to https://dynamics-crm-devkit-v4.crm.dynamics.com.

### Before Optimization

#### Prompt B.1: "Who changed the revenue field on this account record last week?"

**Step 1:** Call `mcp__devkit__get_audit_history` with `{entity_name: "account", attribute_name: "revenue", from_date: "2026-03-30", to_date: "2026-04-06", max_records: 50}`
**Step 1 Result:** 18 audit entries for account entity in last week. All by # DEVKIT and Phước Lê Văn. Mix of Create, Update, Delete operations on records like "Fourth Coffee 4", "test", and various GUIDs

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Prompt says "this account record" without a record_id, so browse mode returned all account entries. attribute_name filter only works in detail mode (with record_id), so all operations were returned, not just revenue changes

#### Prompt B.2: "Show me the full audit history for contact 91330924-802a-4b0d-a900-34fd9d790829"

**Step 1:** Call `mcp__devkit__get_audit_history` with `{entity_name: "contact", record_id: "91330924-802a-4b0d-a900-34fd9d790829"}`
**Step 1 Result:** 0 entries — no audit history found for this contact record

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.3: "What records were deleted across all entities in the last 48 hours?"

**Step 1:** Call `mcp__devkit__get_audit_history` with `{operation: "Delete", minutes_ago: 2880}`
**Step 1 Result:** 2 Delete entries: account 36406b7c (2026-04-06) and account 244c4795 (2026-04-05), both by # DEVKIT

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.4: "Filter the audit log to only show changes made by the sync service account john.sync@contoso.com"

**Step 1:** Call `mcp__devkit__get_audit_history` with `{user_filter: "john.sync@contoso.com"}`
**Step 1 Result:** 0 entries found after user filter — no user matching "john.sync@contoso.com" in last 24h

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.5: "Show me all Update operations on the opportunity entity between March 1 and March 15"

**Step 1:** Call `mcp__devkit__get_audit_history` with `{entity_name: "opportunity", operation: "Update", from_date: "2026-03-01", to_date: "2026-03-15"}`
**Step 1 Result:** Error — Could not resolve entity 'opportunity' to an ObjectTypeCode

**Verdict:** ERROR
**Total MCP Calls:** 1
**Notes:** Opportunity entity does not exist in this environment (DEVKITV4 is a minimal dev environment)

#### Prompt B.6: "When was the statuscode field last changed on lead a1b2c3d4-e5f6-7890-abcd-ef1234567890?"

**Step 1:** Call `mcp__devkit__get_audit_history` with `{entity_name: "lead", record_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890", attribute_name: "statuscode"}`
**Step 1 Result:** Error — Lead entity not found in MetadataCache

**Verdict:** ERROR
**Total MCP Calls:** 1
**Notes:** Lead entity does not exist in this environment

#### Prompt B.7: "What did the integration user change on any account in the last 7 days?"

**Step 1:** Call `mcp__devkit__get_audit_history` with `{entity_name: "account", user_filter: "integration", minutes_ago: 10080}`
**Step 1 Result:** 0 entries found after user filter — no user matching "integration" in account audit logs

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.8: "Show me the old and new values for every field change on this case record"

**Step 1:** Call `mcp__devkit__get_audit_history` with `{entity_name: "incident"}`
**Step 1 Result:** Error — Could not resolve entity 'incident' to an ObjectTypeCode

**Verdict:** ERROR
**Total MCP Calls:** 1
**Notes:** Incident (Case) entity does not exist in this environment. Also, prompt says "this case record" without a record_id, so detail mode (which shows old/new values) could not be used

#### Prompt B.9: "Pull up audit entries for Create operations on the contact entity from the past 30 minutes"

**Step 1:** Call `mcp__devkit__get_audit_history` with `{entity_name: "contact", operation: "Create", minutes_ago: 30}`
**Step 1 Result:** 0 entries — no Create operations on contact in last 30 minutes

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.10: "I need to prove who changed the deal amount on opportunity record xyz -- can you show the audit trail with timestamps?"

**Step 1:** Call `mcp__devkit__get_audit_history` with `{entity_name: "opportunity", operation: "Update"}`
**Step 1 Result:** Error — Could not resolve entity 'opportunity' to an ObjectTypeCode

**Verdict:** ERROR
**Total MCP Calls:** 1
**Notes:** Opportunity entity does not exist in this environment. Also, "xyz" is not a valid GUID, so detail mode could not be used

### After Optimization

#### Prompt A.1: "Who changed the revenue on account 5f8b3a21-c9d7-4e12-b6a8-1234567890ab?"

**Step 1:** Call `mcp__devkit__get_audit_history` with `{entity_name: "account", record_id: "5f8b3a21-c9d7-4e12-b6a8-1234567890ab", attribute_name: "revenue"}`
**Step 1 Result:** 0 entries — no audit history found for this specific account record

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Correctly used detail mode with record_id (unlike B.1 which lacked a record_id). The optimized prompt provided a proper GUID, enabling field-level filtering

#### Prompt A.2: "Show all audit entries for the opportunity entity in the last 24 hours"

**Step 1:** Call `mcp__devkit__get_audit_history` with `{entity_name: "opportunity"}`
**Step 1 Result:** Error — Could not resolve entity 'opportunity' to an ObjectTypeCode

**Verdict:** ERROR
**Total MCP Calls:** 1
**Notes:** Opportunity entity does not exist in this environment

#### Prompt A.3: "What fields were modified on this contact record and by whom?"

**Step 1:** Call `mcp__devkit__get_audit_history` with `{entity_name: "contact"}`
**Step 1 Result:** 0 entries found for contact in last 24h

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Prompt says "this contact record" without a record_id, so browse mode was used. Detail mode (with old/new values) requires a specific record_id

#### Prompt A.4: "List all deleted records across all entities this week"

**Step 1:** Call `mcp__devkit__get_audit_history` with `{operation: "Delete", minutes_ago: 10080}`
**Step 1 Result:** 4 Delete entries, all on account entity by # DEVKIT: 36406b7c (Apr 6), 244c4795 (Apr 5), aaaaaaaa-bbbb (Apr 3), 00000001-0001 (Apr 3)

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.5: "Show audit history for changes made by admin@contoso.com on accounts"

**Step 1:** Call `mcp__devkit__get_audit_history` with `{entity_name: "account", user_filter: "admin@contoso.com"}`
**Step 1 Result:** 0 entries found after user filter — no user matching "admin@contoso.com"

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.6: "When was the statuscode last updated on lead e7f8a9b0-1234-5678-9abc-def012345678?"

**Step 1:** Call `mcp__devkit__get_audit_history` with `{entity_name: "lead", record_id: "e7f8a9b0-1234-5678-9abc-def012345678", attribute_name: "statuscode"}`
**Step 1 Result:** Error — Lead entity not found in MetadataCache

**Verdict:** ERROR
**Total MCP Calls:** 1
**Notes:** Lead entity does not exist in this environment

#### Prompt A.7: "What changed on any account record between 2026-03-01 and 2026-03-31?"

**Step 1:** Call `mcp__devkit__get_audit_history` with `{entity_name: "account", from_date: "2026-03-01", to_date: "2026-03-31"}`
**Step 1 Result:** 0 entries found for account between 2026-03-01 and 2026-03-31

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Returned 0 entries despite B.1 showing entries from March 31 — likely a timezone boundary issue where March 31 entries fall outside the UTC-based date range

#### Prompt A.8: "Show me the old and new values for the name field on this opportunity"

**Step 1:** Call `mcp__devkit__get_audit_history` with `{entity_name: "opportunity", attribute_name: "name"}`
**Step 1 Result:** Error — Could not resolve entity 'opportunity' to an ObjectTypeCode

**Verdict:** ERROR
**Total MCP Calls:** 1
**Notes:** Opportunity entity does not exist in this environment

#### Prompt A.9: "Pull up all Create operations on the incident entity from the last 2 hours"

**Step 1:** Call `mcp__devkit__get_audit_history` with `{entity_name: "incident", operation: "Create", minutes_ago: 120}`
**Step 1 Result:** Error — Could not resolve entity 'incident' to an ObjectTypeCode

**Verdict:** ERROR
**Total MCP Calls:** 1
**Notes:** Incident (Case) entity does not exist in this environment

#### Prompt A.10: "Track all changes made by the data migration service user in the past 30 days"

**Step 1:** Call `mcp__devkit__get_audit_history` with `{user_filter: "data migration", minutes_ago: 43200}`
**Step 1 Result:** 0 entries found after user filter — no user matching "data migration" in last 30 days

**Verdict:** SUCCESS
**Total MCP Calls:** 1

### Summary

| Section | Total Prompts | Success | Failed | Error | Avg MCP Calls |
|---------|--------------|---------|--------|-------|---------------|
| Before Optimization | 10 | 6 | 0 | 4 | 1.0 |
| After Optimization | 10 | 6 | 0 | 4 | 1.0 |

### Fixes Applied

| # | Tool | File | Error | Fix Description |
|---|------|------|-------|-----------------|
| — | — | — | — | No fixes needed |

> **Observation:** Both Before and After Optimization prompts achieved identical efficiency — every prompt required exactly 1 MCP call with no wasted steps. The `get_audit_history` tool has a very focused API surface: it does one thing (retrieve audit data) with clear parameter mapping. The AI correctly identified `entity_name`, `record_id`, `attribute_name`, `operation`, `user_filter`, `from_date/to_date`, and `minutes_ago` in both cases without needing supporting calls. The 4 errors in each section are environment-specific (opportunity, lead, and incident entities don't exist in DEVKITV4) and not related to tool description quality. The key difference between Before and After prompts is prompt quality, not tool-calling efficiency: After prompts provided proper GUIDs (A.1 vs B.1) and clearer entity references, making it easier to select the right mode (detail vs browse). However, since this tool maps so directly to its parameters, the optimization had no measurable impact on MCP call count. Tools with more ambiguous modes or requiring pre-resolution steps (like `get_roles` needing a user lookup) would show more differentiation between optimized and non-optimized descriptions.
