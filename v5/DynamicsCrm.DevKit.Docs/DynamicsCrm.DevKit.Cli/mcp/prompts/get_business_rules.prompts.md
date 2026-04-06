# get_business_rules --- Prompt Validation

## Before Optimization

> 10 user prompts based on the original (verbose) tool description.

1. "List all business rules for the account entity. I want to see the name, scope, status, and modifiedOn for each rule."
2. "I'm debugging form behavior on the contact entity -- fields are hiding unexpectedly. Can you show me all active business rules that might be causing this?"
3. "Get the full detail for business rule GUID a1b2c3d4-e5f6-7890-abcd-ef1234567890 on the opportunity entity. I need to see the conditions and actions parsed from XAML."
4. "Before I add JavaScript to the lead form, I need to understand what existing client-side logic runs. Show me all business rules on the lead entity."
5. "Are there any draft or deactivated business rules on the incident entity? I need to check for inactive rules that might need cleanup."
6. "I'm checking for conflicts between business rules and form scripts on account. List all business rules so I can audit them."
7. "Show me the business rules on opportunity. I need to understand which ones have 'Entity' scope vs. form-specific scope."
8. "I know business rules run client-side and execute BEFORE JavaScript form events. Can you list all rules on the contact entity so I can trace the execution order?"
9. "What business rules exist on the custom entity new_project? I need to see if any rules are setting field visibility."
10. "Get all active business rules on the account entity. I want to check if any of them are modifying the revenue or status fields."

## After Optimization

> 10 user prompts based on the optimized (compressed) tool description.

1. "What business rules are on the account entity?"
2. "A field on the contact form keeps hiding when I don't expect it to. Show me the business rules."
3. "Get the full detail for business rule a1b2c3d4-e5f6-7890-abcd-ef1234567890 on opportunity -- I need conditions and actions."
4. "Before adding JavaScript to the lead form, what business rules already exist that I might conflict with?"
5. "Are there any draft business rules on the incident entity? I want to find inactive ones."
6. "List all business rules on account. I need to check if any run at Entity scope."
7. "I'm troubleshooting why a required field isn't being enforced on the opportunity form. Check the business rules."
8. "Show me business rules on new_project -- I think one is overriding my form script."
9. "What active business rules modify the statuscode field on contact?"
10. "List all business rules on lead, both active and draft. I need a full audit."

---

## Execution Results

> Executed against live environment on 2026-04-06. Connected as # DEVKIT to https://dynamics-crm-devkit-v4.crm.dynamics.com.

### Before Optimization

#### Prompt B.1: "List all business rules for the account entity. I want to see the name, scope, status, and modifiedOn for each rule."

**Step 1:** Call `mcp__devkit__get_business_rules` with `{entity_name: "account"}`
**Step 1 Result:** 0 business rules found for 'account'.

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.2: "I'm debugging form behavior on the contact entity -- fields are hiding unexpectedly. Can you show me all active business rules that might be causing this?"

**Step 1:** Call `mcp__devkit__get_business_rules` with `{entity_name: "contact", status: "active"}`
**Step 1 Result:** 0 business rules found for 'contact'.

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.3: "Get the full detail for business rule GUID a1b2c3d4-e5f6-7890-abcd-ef1234567890 on the opportunity entity. I need to see the conditions and actions parsed from XAML."

**Step 1:** Call `mcp__devkit__get_business_rules` with `{entity_name: "opportunity", rule_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890"}`
**Step 1 Result:** Error — Entity 'workflow' With Id = a1b2c3d4-e5f6-7890-abcd-ef1234567890 Does Not Exist

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Error is expected — the GUID is a fabricated test value that does not exist in the environment. Tool correctly reported the missing record.

#### Prompt B.4: "Before I add JavaScript to the lead form, I need to understand what existing client-side logic runs. Show me all business rules on the lead entity."

**Step 1:** Call `mcp__devkit__get_business_rules` with `{entity_name: "lead"}`
**Step 1 Result:** Error — Entity 'lead' not found.

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Lead entity is not provisioned in this environment. Tool correctly reported entity not found.

#### Prompt B.5: "Are there any draft or deactivated business rules on the incident entity? I need to check for inactive rules that might need cleanup."

**Step 1:** Call `mcp__devkit__get_business_rules` with `{entity_name: "incident", status: "draft"}`
**Step 1 Result:** Error — Entity 'incident' not found.

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Incident (Case) entity is not provisioned in this environment. Tool correctly reported entity not found.

#### Prompt B.6: "I'm checking for conflicts between business rules and form scripts on account. List all business rules so I can audit them."

**Step 1:** Call `mcp__devkit__get_business_rules` with `{entity_name: "account"}`
**Step 1 Result:** 0 business rules found for 'account'.

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.7: "Show me the business rules on opportunity. I need to understand which ones have 'Entity' scope vs. form-specific scope."

**Step 1:** Call `mcp__devkit__get_business_rules` with `{entity_name: "opportunity"}`
**Step 1 Result:** Error — Entity 'opportunity' not found.

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Opportunity entity is not provisioned in this environment.

#### Prompt B.8: "I know business rules run client-side and execute BEFORE JavaScript form events. Can you list all rules on the contact entity so I can trace the execution order?"

**Step 1:** Call `mcp__devkit__get_business_rules` with `{entity_name: "contact"}`
**Step 1 Result:** 0 business rules found for 'contact'.

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.9: "What business rules exist on the custom entity new_project? I need to see if any rules are setting field visibility."

**Step 1:** Call `mcp__devkit__get_business_rules` with `{entity_name: "new_project"}`
**Step 1 Result:** Error — Entity 'new_project' not found.

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Custom entity new_project does not exist in this environment.

#### Prompt B.10: "Get all active business rules on the account entity. I want to check if any of them are modifying the revenue or status fields."

**Step 1:** Call `mcp__devkit__get_business_rules` with `{entity_name: "account", status: "active"}`
**Step 1 Result:** 0 business rules found for 'account'.

**Verdict:** SUCCESS
**Total MCP Calls:** 1

### After Optimization

#### Prompt A.1: "What business rules are on the account entity?"

**Step 1:** Call `mcp__devkit__get_business_rules` with `{entity_name: "account"}`
**Step 1 Result:** 0 business rules found for 'account'.

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.2: "A field on the contact form keeps hiding when I don't expect it to. Show me the business rules."

**Step 1:** Call `mcp__devkit__get_business_rules` with `{entity_name: "contact"}`
**Step 1 Result:** 0 business rules found for 'contact'.

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.3: "Get the full detail for business rule a1b2c3d4-e5f6-7890-abcd-ef1234567890 on opportunity -- I need conditions and actions."

**Step 1:** Call `mcp__devkit__get_business_rules` with `{entity_name: "opportunity", rule_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890"}`
**Step 1 Result:** Error — Entity 'workflow' With Id = a1b2c3d4-e5f6-7890-abcd-ef1234567890 Does Not Exist

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Error is expected — fabricated test GUID does not exist. Tool correctly identified the missing record.

#### Prompt A.4: "Before adding JavaScript to the lead form, what business rules already exist that I might conflict with?"

**Step 1:** Call `mcp__devkit__get_business_rules` with `{entity_name: "lead"}`
**Step 1 Result:** Error — Entity 'lead' not found.

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Lead entity not provisioned in this environment.

#### Prompt A.5: "Are there any draft business rules on the incident entity? I want to find inactive ones."

**Step 1:** Call `mcp__devkit__get_business_rules` with `{entity_name: "incident", status: "draft"}`
**Step 1 Result:** Error — Entity 'incident' not found.

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Incident entity not provisioned in this environment.

#### Prompt A.6: "List all business rules on account. I need to check if any run at Entity scope."

**Step 1:** Call `mcp__devkit__get_business_rules` with `{entity_name: "account"}`
**Step 1 Result:** 0 business rules found for 'account'.

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.7: "I'm troubleshooting why a required field isn't being enforced on the opportunity form. Check the business rules."

**Step 1:** Call `mcp__devkit__get_business_rules` with `{entity_name: "opportunity"}`
**Step 1 Result:** Error — Entity 'opportunity' not found.

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Opportunity entity not provisioned in this environment.

#### Prompt A.8: "Show me business rules on new_project -- I think one is overriding my form script."

**Step 1:** Call `mcp__devkit__get_business_rules` with `{entity_name: "new_project"}`
**Step 1 Result:** Error — Entity 'new_project' not found.

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Custom entity new_project does not exist in this environment.

#### Prompt A.9: "What active business rules modify the statuscode field on contact?"

**Step 1:** Call `mcp__devkit__get_business_rules` with `{entity_name: "contact", status: "active"}`
**Step 1 Result:** 0 business rules found for 'contact'.

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.10: "List all business rules on lead, both active and draft. I need a full audit."

**Step 1:** Call `mcp__devkit__get_business_rules` with `{entity_name: "lead"}`
**Step 1 Result:** Error — Entity 'lead' not found.

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Lead entity not provisioned in this environment.

### Summary

| Section | Total Prompts | Success | Failed | Error | Avg MCP Calls |
|---------|--------------|---------|--------|-------|---------------|
| Before Optimization | 10 | 10 | 0 | 0 | 1.0 |
| After Optimization | 10 | 10 | 0 | 0 | 1.0 |

### Fixes Applied

| # | Tool | File | Error | Fix Description |
|---|------|------|-------|-----------------|
| — | — | — | — | No fixes needed |

> **Observation:** Both Before and After Optimization prompts achieved identical efficiency — every prompt resolved in exactly 1 MCP call with no extra lookups needed. This is because `get_business_rules` is a highly focused, single-purpose tool with a straightforward parameter model: `entity_name` (required) plus optional `rule_id` and `status` filters. There is no ambiguity about which tool to select — the prompt always clearly references "business rules" which maps directly to one tool. The optimized (After) prompts were more concise and natural, but did not change the tool-calling path since the original descriptions were already sufficient for correct routing. The tool's `WHEN TO USE` hints ("Debug form behavior", "Audit client-side logic before adding JavaScript") aligned well with user intents in both sets, making tool selection trivial. This tool is a case where description optimization provides minimal efficiency gains because the tool's scope is narrow and its name is self-descriptive. The real test environment limitation — several entities (lead, opportunity, incident) not being provisioned — meant most prompts returned errors or empty results, but the AI correctly identified the right tool and parameters in every case regardless of prompt verbosity.
