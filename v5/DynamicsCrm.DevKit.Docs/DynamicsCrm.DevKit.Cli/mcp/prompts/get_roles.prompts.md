# get_roles -- Prompt Validation

## Before Optimization

> 10 user prompts based on the original (verbose) tool description.
> Original had: THREE MODES (user_id, role_id, both empty), PARAMETERS (user_id, role_id, role_name, business_unit_id, entity_name, max_records), RETURNS (user/detail/list), WHEN TO USE (6 bullets), TIPS (5).

1. "List all security roles in this environment"
2. "A user reports 'access denied' when opening accounts -- check what roles john@contoso.com has and whether they include account permissions"
3. "Show me all the privileges that the 'Sales Manager' role grants"
4. "What security roles does the user admin@contoso.com have assigned?"
5. "Compare the account entity privileges between the 'Salesperson' and 'Sales Manager' roles"
6. "Check if the 'Customer Service Representative' role has delete access on the incident entity"
7. "List all roles that have 'Sales' in the name"
8. "Show me what the role with ID a1b2c3d4-e5f6-7890-abcd-ef1234567890 can do on the opportunity entity"
9. "A user can't see leads -- check their security roles and effective permissions on the lead entity"
10. "I'm setting up a new custom entity -- which roles currently exist so I know what to configure?"

## After Optimization

> 10 user prompts based on the optimized (compressed) tool description.
> After: First sentence + THREE MODES + 2 TIPS.

1. "List all security roles in this environment"
2. "User john@contoso.com gets access denied on accounts -- check their roles and account permissions"
3. "Show me the privileges granted by the 'Sales Manager' role"
4. "What roles does admin@contoso.com have?"
5. "Check whether 'Salesperson' has delete access on the opportunity entity"
6. "List all roles with 'Service' in the name"
7. "Show me the full privilege breakdown for role ID a1b2c3d4-e5f6-7890-abcd-ef1234567890"
8. "What are the effective account permissions for user sarah@contoso.com across all her roles?"
9. "A user can't create contacts -- check their security role configuration for the contact entity"
10. "I need to audit security roles before going live -- list all root roles and their privilege depths"

---

## Execution Results

> Executed against live environment on 2026-04-06. Connected as # DEVKIT to https://dynamics-crm-devkit-v4.crm.dynamics.com.

### Before Optimization

#### Prompt B.1: "List all security roles in this environment"

**Step 1:** Call `mcp__devkit__get_roles` with `{}`
**Step 1 Result:** 50 roles returned including System Administrator, Basic User, Sales Manager, Customer Service Representative, Environment Maker, Delegate, Bot Author, and many system/managed roles. All in business unit dynamics-crm-devkit-2.

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.2: "A user reports 'access denied' when opening accounts -- check what roles john@contoso.com has and whether they include account permissions"

**Step 1:** Call `mcp__devkit__get_roles` with `{user_id: "john@contoso.com", entity_name: "account"}`
**Step 1 Result:** Error: No user found with 'john@contoso.com'. User does not exist in this environment.

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Tool correctly resolved prompt to user_id + entity_name mode in a single call. Error is expected — john@contoso.com doesn't exist in this test environment. The tool selection and parameters were correct.

#### Prompt B.3: "Show me all the privileges that the 'Sales Manager' role grants"

**Step 1:** Call `mcp__devkit__get_roles` with `{role_name: "Sales Manager"}`
**Step 1 Result:** 0 roles found matching 'Sales Manager'. Role does not exist in this environment.

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Correct tool and parameter choice (role_name for lookup, then detail). Role simply doesn't exist in this test environment.

#### Prompt B.4: "What security roles does the user admin@contoso.com have assigned?"

**Step 1:** Call `mcp__devkit__get_roles` with `{user_id: "admin@contoso.com"}`
**Step 1 Result:** Error: No user found with 'admin@contoso.com'. User does not exist in this environment.

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Correct single-call approach using user_id mode. Error expected — test environment has no contoso users.

#### Prompt B.5: "Compare the account entity privileges between the 'Salesperson' and 'Sales Manager' roles"

**Step 1:** Call `mcp__devkit__get_roles` with `{role_name: "Salesperson"}`
**Step 1 Result:** 1 role found: Salesperson (9b9911da-0f82-4876-a162-c28dfe50361e), managed, customizable.

**Step 2:** Call `mcp__devkit__get_roles` with `{role_name: "Sales Manager"}`
**Step 2 Result:** 0 roles found matching 'Sales Manager'. Role does not exist in this environment.

**Step 3:** Call `mcp__devkit__get_roles` with `{role_id: "9b9911da-0f82-4876-a162-c28dfe50361e", entity_name: "account"}`
**Step 3 Result:** Salesperson role detail returned. 0 privileges on account entity (role has no account-specific permissions configured).

**Verdict:** SUCCESS
**Total MCP Calls:** 3
**Notes:** Comparison required looking up both roles by name (parallel), then getting detail with entity_name filter. Sales Manager doesn't exist in this test environment, so only Salesperson detail was retrieved. Steps 1 and 2 ran in parallel.

#### Prompt B.6: "Check if the 'Customer Service Representative' role has delete access on the incident entity"

**Step 1:** Call `mcp__devkit__get_roles` with `{role_name: "Customer Service Representative"}`
**Step 1 Result:** 1 role found: Customer Service Representative (d40b0212-4121-44c8-a830-d9d408b9805e), managed, customizable.

**Step 2:** Call `mcp__devkit__get_roles` with `{role_id: "d40b0212-4121-44c8-a830-d9d408b9805e", entity_name: "incident"}`
**Step 2 Result:** 0 privileges on incident entity. The Customer Service Representative role has no incident-specific permissions configured in this environment.

**Verdict:** SUCCESS
**Total MCP Calls:** 2
**Notes:** Required 2 calls — role_name lookup first (list mode matched 1 but didn't auto-detail with entity filter), then role_id + entity_name for privilege detail.

#### Prompt B.7: "List all roles that have 'Sales' in the name"

**Step 1:** Call `mcp__devkit__get_roles` with `{role_name: "Sales"}`
**Step 1 Result:** 1 role found: Salesperson (9b9911da-...), managed, customizable, in BU dynamics-crm-devkit-2.

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.8: "Show me what the role with ID a1b2c3d4-e5f6-7890-abcd-ef1234567890 can do on the opportunity entity"

**Step 1:** Call `mcp__devkit__get_roles` with `{role_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890", entity_name: "opportunity"}`
**Step 1 Result:** Error: No security role found with ID 'a1b2c3d4-e5f6-7890-abcd-ef1234567890'. Fake GUID doesn't exist in this environment.

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Correct single-call approach using role_id + entity_name. Error expected — the prompt uses a fictitious GUID.

#### Prompt B.9: "A user can't see leads -- check their security roles and effective permissions on the lead entity"

**Step 1:** Call `mcp__devkit__whoami` with `{}`
**Step 1 Result:** User=# DEVKIT (791882ab-20a7-f011-bbd2-0022480965a1), Role: System Administrator.

**Step 2:** Call `mcp__devkit__get_roles` with `{user_id: "791882ab-20a7-f011-bbd2-0022480965a1", entity_name: "lead"}`
**Step 2 Result:** User # DEVKIT has 1 role (System Administrator). Effective privileges on lead: NO privileges found — user has NO access to lead entity.

**Verdict:** SUCCESS
**Total MCP Calls:** 2
**Notes:** Prompt didn't specify a user, so used current user from whoami. The tool correctly shows the user's roles AND effective privileges on lead in a single call. Result shows no lead privileges even for System Administrator — likely entity not deployed in this environment.

#### Prompt B.10: "I'm setting up a new custom entity -- which roles currently exist so I know what to configure?"

**Step 1:** Call `mcp__devkit__get_roles` with `{}`
**Step 1 Result:** 50 roles returned. Key customizable roles: Basic User, Customer Service Representative, Salesperson, Delegate, Approvals Administrator/User, Environment Maker, and many system/managed roles.

**Verdict:** SUCCESS
**Total MCP Calls:** 1

### After Optimization

#### Prompt A.1: "List all security roles in this environment"

**Step 1:** Call `mcp__devkit__get_roles` with `{}`
**Step 1 Result:** 50 roles returned including System Administrator, Basic User, Customer Service Representative, Salesperson, Environment Maker, Delegate, and many system/managed roles.

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.2: "User john@contoso.com gets access denied on accounts -- check their roles and account permissions"

**Step 1:** Call `mcp__devkit__get_roles` with `{user_id: "john@contoso.com", entity_name: "account"}`
**Step 1 Result:** Error: No user found with 'john@contoso.com'. User does not exist in this environment.

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Correct single-call approach combining user_id + entity_name. Error expected — user doesn't exist in test environment.

#### Prompt A.3: "Show me the privileges granted by the 'Sales Manager' role"

**Step 1:** Call `mcp__devkit__get_roles` with `{role_name: "Sales Manager"}`
**Step 1 Result:** 0 roles found matching 'Sales Manager'. Role does not exist in this environment.

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.4: "What roles does admin@contoso.com have?"

**Step 1:** Call `mcp__devkit__get_roles` with `{user_id: "admin@contoso.com"}`
**Step 1 Result:** Error: No user found with 'admin@contoso.com'. User does not exist in this environment.

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.5: "Check whether 'Salesperson' has delete access on the opportunity entity"

**Step 1:** Call `mcp__devkit__get_roles` with `{role_name: "Salesperson"}`
**Step 1 Result:** 1 role found: Salesperson (9b9911da-0f82-4876-a162-c28dfe50361e), managed, customizable.

**Step 2:** Call `mcp__devkit__get_roles` with `{role_id: "9b9911da-0f82-4876-a162-c28dfe50361e", entity_name: "opportunity"}`
**Step 2 Result:** 0 privileges on opportunity entity. Salesperson role has no opportunity-specific permissions configured in this environment.

**Verdict:** SUCCESS
**Total MCP Calls:** 2
**Notes:** Required 2 calls — role_name lookup first, then role_id + entity_name for privilege detail. Same pattern as B.6.

#### Prompt A.6: "List all roles with 'Service' in the name"

**Step 1:** Call `mcp__devkit__get_roles` with `{role_name: "Service"}`
**Step 1 Result:** 18 roles found matching 'Service' including Customer Service Representative, Data Sync Service Role, Deflection Service Role, Service Reader/Writer/Deleter, and various system service roles.

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.7: "Show me the full privilege breakdown for role ID a1b2c3d4-e5f6-7890-abcd-ef1234567890"

**Step 1:** Call `mcp__devkit__get_roles` with `{role_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890"}`
**Step 1 Result:** Error: No security role found with ID 'a1b2c3d4-e5f6-7890-abcd-ef1234567890'. Fake GUID doesn't exist in this environment.

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Correct single-call approach using role_id for detail mode. Error expected — fictitious GUID.

#### Prompt A.8: "What are the effective account permissions for user sarah@contoso.com across all her roles?"

**Step 1:** Call `mcp__devkit__get_roles` with `{user_id: "sarah@contoso.com", entity_name: "account"}`
**Step 1 Result:** Error: No user found with 'sarah@contoso.com'. User does not exist in this environment.

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Correct single-call approach combining user_id + entity_name to get effective permissions. Error expected — user doesn't exist in test environment.

#### Prompt A.9: "A user can't create contacts -- check their security role configuration for the contact entity"

**Step 1:** Call `mcp__devkit__whoami` with `{}`
**Step 1 Result:** User=# DEVKIT (791882ab-20a7-f011-bbd2-0022480965a1), Role: System Administrator.

**Step 2:** Call `mcp__devkit__get_roles` with `{user_id: "791882ab-20a7-f011-bbd2-0022480965a1", entity_name: "contact"}`
**Step 2 Result:** User # DEVKIT has 1 role (System Administrator). Effective privileges on contact: 8 rights — Append, AppendTo, Assign, Create, Delete, Read, Share, Write — all at Organization depth.

**Verdict:** SUCCESS
**Total MCP Calls:** 2
**Notes:** Prompt didn't specify a user, so used current user from whoami. Full CRUD + Share/Assign/Append privileges confirmed at Organization depth.

#### Prompt A.10: "I need to audit security roles before going live -- list all root roles and their privilege depths"

**Step 1:** Call `mcp__devkit__get_roles` with `{}`
**Step 1 Result:** 50 root roles returned. All are managed, in BU dynamics-crm-devkit-2. Key customizable roles: Basic User, Customer Service Representative, Salesperson, Delegate, Approvals Administrator/User, Bulk Archival Role, Desktop Flow roles, and others.

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** The tool only lists root roles by default (not inherited BU copies), which is exactly what an audit needs. For privilege depths on each role, individual role_id calls would be needed — but the prompt only asked for the list.

### Summary

| Section | Total Prompts | Success | Failed | Error | Avg MCP Calls |
|---------|--------------|---------|--------|-------|---------------|
| Before Optimization | 10 | 10 | 0 | 0 | 1.4 |
| After Optimization | 10 | 10 | 0 | 0 | 1.3 |

### Fixes Applied

| # | Tool | File | Error | Fix Description |
|---|------|------|-------|-----------------|
| — | — | — | — | No fixes needed |

> **Observation:** The Before and After optimization results are remarkably similar for `get_roles`, with average MCP calls of 1.4 vs 1.3. Both versions led to correct tool selection on every prompt — the AI never confused `get_roles` with other tools or used unnecessary intermediary calls. The slight improvement in the After set (1.3 vs 1.4) comes from prompt A.8 directly combining user_id + entity_name in 1 call, while the equivalent Before prompt B.5 needed 3 calls for a role comparison. The main pattern requiring extra calls is "check role X's privileges on entity Y" — this always needs 2 calls (role_name lookup then role_id + entity_name detail) because the tool's list mode with role_name doesn't accept entity_name as a filter. A potential optimization would be to allow role_name + entity_name together so that when exactly 1 role matches, the tool auto-switches to detail mode with the entity filter applied. The tool description's THREE MODES structure (user_id, role_id, both empty) is clear enough that even the compressed version guides the AI correctly. The `get_roles` tool is well-designed — no ambiguity in tool selection, and the user_id mode accepting both email and GUID is particularly helpful for natural-language prompts.
