# whoami --- Prompt Validation

## Before Optimization

> 10 user prompts based on the original (verbose) tool description.

1. "Which user am I connected to right now? I need to see my UserId, FullName, DomainName, and Email."
2. "Can you show me the full environment details including OrganizationId, environment URL, version, friendly name, and unique name?"
3. "What security roles are assigned to my current user account? I need the role names and roleIds."
4. "I want to verify the connection is working before running other tools. Can you confirm which environment I'm connected to?"
5. "I need the current user's ID so I can use it in a FetchXML filter to find records owned by me."
6. "Show me the BusinessUnitId for my user and the TenantId and EnvironmentId for this org."
7. "I'm getting permission errors on the account entity. Can you check which security roles my user has so I can troubleshoot?"
8. "What Dataverse version is this environment running? I need to check feature compatibility for a new plugin."
9. "Can you get my OAuth access token? I need it for a direct Web API call outside of these tools."
10. "I need to troubleshoot a locale issue. Show me the base language, base currency, and fiscal settings for this environment."

## After Optimization

> 10 user prompts based on the optimized (compressed) tool description.

1. "Who am I connected as?"
2. "What environment is this and what version of Dataverse is it running?"
3. "Check my security roles -- I'm getting access denied on leads."
4. "I need my user ID to filter FetchXML by owner. What is it?"
5. "Get me an access token so I can call the Web API directly from Postman."
6. "Before I start making changes, verify the connection to this org is working."
7. "What roles does my account have? I need to know if I have System Administrator."
8. "Show me the environment URL and org unique name for this Dataverse instance."
9. "I'm about to register a plugin. First, confirm which user and environment I'm working with."
10. "Is audit enabled on this environment? Also show me the org currency."

---

## Execution Results

> Executed against live environment on 2026-04-05. Connected as # DEVKIT to https://dynamics-crm-devkit-v4.crm.dynamics.com.

### Before Optimization

#### Prompt B.1: "Which user am I connected to right now? I need to see my UserId, FullName, DomainName, and Email."

**Step 1:** Call `mcp__devkit__whoami` with `{}`
**Step 1 Result:** UserId=791882ab-20a7-f011-bbd2-0022480965a1, FullName=# DEVKIT, DomainName=DEVKIT_1a60a5c2-...@82131d86-...com, Email=DEVKIT_1a60a5c2-...@82131d86-...com

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.2: "Can you show me the full environment details including OrganizationId, environment URL, version, friendly name, and unique name?"

**Step 1:** Call `mcp__devkit__whoami` with `{}`
**Step 1 Result:** OrganizationId=82131d86-1aa7-f011-8706-00224806e819, URL=https://dynamics-crm-devkit-v4.crm.dynamics.com, Version=9.2.26034.145, FriendlyName=🟢DEVKITV4, UniqueName=unq82131d861aa7f011870600224806e

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.3: "What security roles are assigned to my current user account? I need the role names and roleIds."

**Step 1:** Call `mcp__devkit__whoami` with `{}`
**Step 1 Result:** Roles: System Administrator (roleId=9876ab54-d4a4-f011-bbd3-000d3a311238)

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.4: "I want to verify the connection is working before running other tools. Can you confirm which environment I'm connected to?"

**Step 1:** Call `mcp__devkit__whoami` with `{}`
**Step 1 Result:** Connected to 🟢DEVKITV4 (https://dynamics-crm-devkit-v4.crm.dynamics.com), Version=9.2.26034.145, User=# DEVKIT

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.5: "I need the current user's ID so I can use it in a FetchXML filter to find records owned by me."

**Step 1:** Call `mcp__devkit__whoami` with `{}`
**Step 1 Result:** UserId=791882ab-20a7-f011-bbd2-0022480965a1 (use in FetchXML: `<condition attribute="ownerid" operator="eq" value="791882ab-20a7-f011-bbd2-0022480965a1"/>`)

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.6: "Show me the BusinessUnitId for my user and the TenantId and EnvironmentId for this org."

**Step 1:** Call `mcp__devkit__whoami` with `{}`
**Step 1 Result:** BusinessUnitId=9476ab54-d4a4-f011-bbd3-000d3a311238, TenantId=49528483-b79b-4b88-b86e-7d882ba68911, EnvironmentId=cbba8ce9-ea7c-e440-b083-0b9517496e17

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.7: "I'm getting permission errors on the account entity. Can you check which security roles my user has so I can troubleshoot?"

**Step 1:** Call `mcp__devkit__whoami` with `{}`
**Step 1 Result:** User=# DEVKIT, Roles: System Administrator (9876ab54-d4a4-f011-bbd3-000d3a311238)

**Step 2:** Call `mcp__devkit__get_roles` with `{user_id: "791882ab-20a7-f011-bbd2-0022480965a1", entity_name: "account"}`
**Step 2 Result:** 1 role (System Administrator). Effective privileges on account: Create/Read/Write/Delete/Append/AppendTo/Assign/Share — all at Organization depth

**Verdict:** SUCCESS
**Total MCP Calls:** 2
**Notes:** Used get_roles with entity_name to show effective privileges on account entity for troubleshooting

#### Prompt B.8: "What Dataverse version is this environment running? I need to check feature compatibility for a new plugin."

**Step 1:** Call `mcp__devkit__whoami` with `{}`
**Step 1 Result:** Version=9.2.26034.145

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.9: "Can you get my OAuth access token? I need it for a direct Web API call outside of these tools."

**Step 1:** Call `mcp__devkit__whoami` with `{include_token: true}`
**Step 1 Result:** accessToken returned (JWT, ~1200 chars). Token audience: https://dynamics-crm-devkit-v4.crm.dynamics.com

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Used include_token=true to retrieve the OAuth access token

#### Prompt B.10: "I need to troubleshoot a locale issue. Show me the base language, base currency, and fiscal settings for this environment."

**Step 1:** Call `mcp__devkit__whoami` with `{}`
**Step 1 Result:** Language=1033 (English), Currency=US Dollar, FiscalStart=2025-01-01

**Verdict:** SUCCESS
**Total MCP Calls:** 1

### After Optimization

#### Prompt A.1: "Who am I connected as?"

**Step 1:** Call `mcp__devkit__whoami` with `{}`
**Step 1 Result:** User=# DEVKIT (791882ab-20a7-f011-bbd2-0022480965a1), Env=🟢DEVKITV4

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.2: "What environment is this and what version of Dataverse is it running?"

**Step 1:** Call `mcp__devkit__whoami` with `{}`
**Step 1 Result:** Environment=🟢DEVKITV4 (https://dynamics-crm-devkit-v4.crm.dynamics.com), Version=9.2.26034.145

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.3: "Check my security roles -- I'm getting access denied on leads."

**Step 1:** Call `mcp__devkit__whoami` with `{}`
**Step 1 Result:** User=# DEVKIT, Role: System Administrator

**Step 2:** Call `mcp__devkit__get_roles` with `{user_id: "791882ab-20a7-f011-bbd2-0022480965a1", entity_name: "lead"}`
**Step 2 Result:** lead — NO privileges found. User has NO access to lead entity despite System Administrator role

**Verdict:** SUCCESS
**Total MCP Calls:** 2
**Notes:** Prompt triggered deeper investigation via get_roles. Result reveals no lead privileges — useful for troubleshooting

#### Prompt A.4: "I need my user ID to filter FetchXML by owner. What is it?"

**Step 1:** Call `mcp__devkit__whoami` with `{}`
**Step 1 Result:** UserId=791882ab-20a7-f011-bbd2-0022480965a1

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.5: "Get me an access token so I can call the Web API directly from Postman."

**Step 1:** Call `mcp__devkit__whoami` with `{include_token: true}`
**Step 1 Result:** accessToken returned (JWT, ~1200 chars), audience=https://dynamics-crm-devkit-v4.crm.dynamics.com

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Correctly used include_token=true

#### Prompt A.6: "Before I start making changes, verify the connection to this org is working."

**Step 1:** Call `mcp__devkit__whoami` with `{}`
**Step 1 Result:** Connection verified. User=# DEVKIT, Env=🟢DEVKITV4 (https://dynamics-crm-devkit-v4.crm.dynamics.com), Version=9.2.26034.145

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.7: "What roles does my account have? I need to know if I have System Administrator."

**Step 1:** Call `mcp__devkit__whoami` with `{}`
**Step 1 Result:** Roles: System Administrator (roleId=9876ab54-d4a4-f011-bbd3-000d3a311238). Yes, user has System Administrator.

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.8: "Show me the environment URL and org unique name for this Dataverse instance."

**Step 1:** Call `mcp__devkit__whoami` with `{}`
**Step 1 Result:** URL=https://dynamics-crm-devkit-v4.crm.dynamics.com, UniqueName=unq82131d861aa7f011870600224806e

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.9: "I'm about to register a plugin. First, confirm which user and environment I'm working with."

**Step 1:** Call `mcp__devkit__whoami` with `{}`
**Step 1 Result:** User=# DEVKIT (791882ab-20a7-f011-bbd2-0022480965a1), Env=🟢DEVKITV4 (https://dynamics-crm-devkit-v4.crm.dynamics.com), Version=9.2.26034.145, Role=System Administrator

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.10: "Is audit enabled on this environment? Also show me the org currency."

**Step 1:** Call `mcp__devkit__whoami` with `{}`
**Step 1 Result:** AuditEnabled=true, Currency=US Dollar

**Verdict:** SUCCESS
**Total MCP Calls:** 1

### Summary

| Section | Total Prompts | Success | Failed | Error | Avg MCP Calls |
|---------|--------------|---------|--------|-------|---------------|
| Before Optimization | 10 | 10 | 0 | 0 | 1.1 |
| After Optimization | 10 | 10 | 0 | 0 | 1.1 |

### Fixes Applied

| # | Tool | File | Error | Fix Description |
|---|------|------|-------|-----------------|
| — | — | — | — | No fixes needed |

> **Observation:** Both Before and After Optimization prompts achieved nearly identical MCP call counts (avg 1.1 each). The whoami tool is simple enough that verbose vs concise prompts make no difference in tool-calling efficiency — both map directly to a single `whoami` call. The only prompts requiring 2 calls were B.7 and A.3 (permission troubleshooting), where `get_roles` was additionally called to provide entity-specific privilege details. The optimized (After) prompts were more concise and direct but did not reduce MCP calls since the tool mapping is 1:1 for this tool.
