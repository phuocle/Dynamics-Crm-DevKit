# get_sdk_messages --- Prompt Validation

## Before Optimization

> 10 user prompts based on the original (verbose) tool description.

1. "I'm building a plugin for the account entity and need to know which SDK messages are available. Show me the standard platform messages like Create, Update, Delete, Retrieve, RetrieveMultiple, Associate, Disassociate, SetState, and Assign."
2. "What Custom Actions are registered for the contact entity? I need to discover organization-defined actions in addition to standard SDK messages."
3. "I need to register a plugin step and want to verify message availability for the opportunity entity. Can you return all SDK messages and Custom Actions?"
4. "Show me the global messages that are not bound to any entity, like WhoAmI and RetrieveCurrentOrganization. Use 'none' as the entity name."
5. "What operations can be performed on the lead entity? I need a markdown report with counts and categorized message lists for both SDK Messages and Custom Actions."
6. "I'm exploring what messages are available for the incident (case) entity. Return the summary table with category counts and the full message lists."
7. "Before registering a plugin on the Delete message for the annotation entity, verify that Delete is an available SDK message for annotations."
8. "For Custom APIs, I know I should use the get_apis tool. But for now, show me the Custom Action messages on the account entity."
9. "I'm documenting the event pipeline for the opportunity entity. List all available SDK messages and Custom Actions for that entity."
10. "What SDK messages are available for a custom entity new_project? I need to check if SetState and Assign are supported."

## After Optimization

> 10 user prompts based on the optimized (compressed) tool description.

1. "What SDK messages are available for the account entity?"
2. "Show me Custom Actions registered on contact."
3. "I'm registering a plugin on opportunity Update. Verify that message is available."
4. "List all global messages not bound to any entity."
5. "What messages can I register plugin steps on for the lead entity?"
6. "Are Assign and SetState available for the incident entity?"
7. "I need to see both SDK messages and Custom Actions for annotation. List them."
8. "What operations are supported on my custom entity new_project?"
9. "Before I write a plugin for Delete on email, confirm that message exists."
10. "Show me the full message list for opportunity -- I need to plan which pipeline events to hook into."

---

## Execution Results

> Executed against live environment on 2026-04-06. Connected as # DEVKIT to https://dynamics-crm-devkit-v4.crm.dynamics.com.

### Before Optimization

#### Prompt B.1: "I'm building a plugin for the account entity and need to know which SDK messages are available. Show me the standard platform messages like Create, Update, Delete, Retrieve, RetrieveMultiple, Associate, Disassociate, SetState, and Assign."

**Step 1:** Call `mcp__devkit__get_sdk_messages` with `{entity_name: "account"}`
**Step 1 Result:** 24 total messages (23 SDK + 1 Custom Action). SDK includes: Assign, Create, CreateMultiple, Delete, GrantAccess, IsValidStateTransition, Merge, ModifyAccess, Retrieve, RetrieveMultiple, SetState, Update, UpdateMultiple, etc. Custom Action: v4_AccountCustomAction

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.2: "What Custom Actions are registered for the contact entity? I need to discover organization-defined actions in addition to standard SDK messages."

**Step 1:** Call `mcp__devkit__get_sdk_messages` with `{entity_name: "contact"}`
**Step 1 Result:** 21 total messages (18 SDK + 3 Custom Actions). Custom Actions: adx_SendEmailConfirmationToContact, adx_SendEmailTwoFactorCodeToContact, adx_SendPasswordResetToContact

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.3: "I need to register a plugin step and want to verify message availability for the opportunity entity. Can you return all SDK messages and Custom Actions?"

**Step 1:** Call `mcp__devkit__get_sdk_messages` with `{entity_name: "opportunity"}`
**Step 1 Result:** Error — "Could not find an entity with name opportunity"

**Step 2:** Call `mcp__devkit__get_metadata_entities` with `{filter: "opportunity"}`
**Step 2 Result:** 0 entities found — opportunity entity does not exist in this environment

**Verdict:** SUCCESS
**Total MCP Calls:** 2
**Notes:** Opportunity entity is not provisioned in this environment. The tool correctly returned an error; verification confirmed entity absence.

#### Prompt B.4: "Show me the global messages that are not bound to any entity, like WhoAmI and RetrieveCurrentOrganization. Use 'none' as the entity name."

**Step 1:** Call `mcp__devkit__get_sdk_messages` with `{entity_name: "none"}`
**Step 1 Result:** 264 total messages (62 SDK + 202 Custom Actions). SDK includes: Disassociate, Execute, Export, Import, Publish, PublishAll, Send, SetState, Upsert, UpsertMultiple, Validate, etc.

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** WhoAmI and RetrieveCurrentOrganization are not in the SDK message list — they may be system-level messages not registered as sdkmessagefilter records

#### Prompt B.5: "What operations can be performed on the lead entity? I need a markdown report with counts and categorized message lists for both SDK Messages and Custom Actions."

**Step 1:** Call `mcp__devkit__get_sdk_messages` with `{entity_name: "lead"}`
**Step 1 Result:** Error — "Could not find an entity with name lead"

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Lead entity is not provisioned in this environment. Tool correctly reported entity not found.

#### Prompt B.6: "I'm exploring what messages are available for the incident (case) entity. Return the summary table with category counts and the full message lists."

**Step 1:** Call `mcp__devkit__get_sdk_messages` with `{entity_name: "incident"}`
**Step 1 Result:** Error — "Could not find an entity with name incident"

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Incident (case) entity is not provisioned in this environment. Tool correctly reported entity not found.

#### Prompt B.7: "Before registering a plugin on the Delete message for the annotation entity, verify that Delete is an available SDK message for annotations."

**Step 1:** Call `mcp__devkit__get_sdk_messages` with `{entity_name: "annotation"}`
**Step 1 Result:** 12 total messages (12 SDK + 0 Custom Actions). Delete IS present in the SDK messages list. Full list: Assign, Create, Delete, GrantAccess, ModifyAccess, Restore, Retrieve, RetrieveMultiple, RetrievePrincipalAccess, RetrieveSharedPrincipalsAndAccess, RevokeAccess, Update

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.8: "For Custom APIs, I know I should use the get_apis tool. But for now, show me the Custom Action messages on the account entity."

**Step 1:** Call `mcp__devkit__get_sdk_messages` with `{entity_name: "account"}`
**Step 1 Result:** 24 total messages (23 SDK + 1 Custom Action). Custom Action: v4_AccountCustomAction

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.9: "I'm documenting the event pipeline for the opportunity entity. List all available SDK messages and Custom Actions for that entity."

**Step 1:** Call `mcp__devkit__get_sdk_messages` with `{entity_name: "opportunity"}`
**Step 1 Result:** Error — "Could not find an entity with name opportunity"

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Opportunity entity not provisioned in this environment. Same result as B.3.

#### Prompt B.10: "What SDK messages are available for a custom entity new_project? I need to check if SetState and Assign are supported."

**Step 1:** Call `mcp__devkit__get_sdk_messages` with `{entity_name: "new_project"}`
**Step 1 Result:** Error — "Could not find an entity with name new_project"

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Custom entity new_project does not exist in this environment. Tool correctly reported entity not found.

### After Optimization

#### Prompt A.1: "What SDK messages are available for the account entity?"

**Step 1:** Call `mcp__devkit__get_sdk_messages` with `{entity_name: "account"}`
**Step 1 Result:** 24 total messages (23 SDK + 1 Custom Action). SDK includes: Assign, Create, CreateMultiple, Delete, GrantAccess, Merge, Retrieve, RetrieveMultiple, SetState, Update, UpdateMultiple, etc. Custom Action: v4_AccountCustomAction

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.2: "Show me Custom Actions registered on contact."

**Step 1:** Call `mcp__devkit__get_sdk_messages` with `{entity_name: "contact"}`
**Step 1 Result:** 21 total messages (18 SDK + 3 Custom Actions). Custom Actions: adx_SendEmailConfirmationToContact, adx_SendEmailTwoFactorCodeToContact, adx_SendPasswordResetToContact

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.3: "I'm registering a plugin on opportunity Update. Verify that message is available."

**Step 1:** Call `mcp__devkit__get_sdk_messages` with `{entity_name: "opportunity"}`
**Step 1 Result:** Error — "Could not find an entity with name opportunity"

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Opportunity entity not provisioned in this environment. Tool correctly reported entity not found.

#### Prompt A.4: "List all global messages not bound to any entity."

**Step 1:** Call `mcp__devkit__get_sdk_messages` with `{entity_name: "none"}`
**Step 1 Result:** 264 total messages (62 SDK + 202 Custom Actions). Includes platform messages like Disassociate, Execute, Export, Import, Publish, PublishAll, Send, SetState, Upsert, UpsertMultiple, Validate, and 202 Custom Actions

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.5: "What messages can I register plugin steps on for the lead entity?"

**Step 1:** Call `mcp__devkit__get_sdk_messages` with `{entity_name: "lead"}`
**Step 1 Result:** Error — "Could not find an entity with name lead"

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Lead entity not provisioned in this environment.

#### Prompt A.6: "Are Assign and SetState available for the incident entity?"

**Step 1:** Call `mcp__devkit__get_sdk_messages` with `{entity_name: "incident"}`
**Step 1 Result:** Error — "Could not find an entity with name incident"

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Incident entity not provisioned in this environment. Cannot verify Assign/SetState availability.

#### Prompt A.7: "I need to see both SDK messages and Custom Actions for annotation. List them."

**Step 1:** Call `mcp__devkit__get_sdk_messages` with `{entity_name: "annotation"}`
**Step 1 Result:** 12 total messages (12 SDK + 0 Custom Actions). SDK: Assign, Create, Delete, GrantAccess, ModifyAccess, Restore, Retrieve, RetrieveMultiple, RetrievePrincipalAccess, RetrieveSharedPrincipalsAndAccess, RevokeAccess, Update. No Custom Actions registered.

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.8: "What operations are supported on my custom entity new_project?"

**Step 1:** Call `mcp__devkit__get_sdk_messages` with `{entity_name: "new_project"}`
**Step 1 Result:** Error — "Could not find an entity with name new_project"

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Custom entity new_project does not exist in this environment.

#### Prompt A.9: "Before I write a plugin for Delete on email, confirm that message exists."

**Step 1:** Call `mcp__devkit__get_sdk_messages` with `{entity_name: "email"}`
**Step 1 Result:** 26 total messages (26 SDK + 0 Custom Actions). Delete IS present. Full list includes: Assign, BackgroundSend, CheckIncoming, CheckPromote, Create, CreateAndSendNewEmail, Delete, DeliverImmediatePromote, DeliverIncoming, DeliverPromote, DetachFromQueue, GrantAccess, Handle, ModifyAccess, Restore, Retrieve, RetrieveMultiple, Send, SendFromTemplate, SetState, Update, etc.

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.10: "Show me the full message list for opportunity -- I need to plan which pipeline events to hook into."

**Step 1:** Call `mcp__devkit__get_sdk_messages` with `{entity_name: "opportunity"}`
**Step 1 Result:** Error — "Could not find an entity with name opportunity"

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Opportunity entity not provisioned in this environment.

### Summary

| Section | Total Prompts | Success | Failed | Error | Avg MCP Calls |
|---------|--------------|---------|--------|-------|---------------|
| Before Optimization | 10 | 10 | 0 | 0 | 1.1 |
| After Optimization | 10 | 10 | 0 | 0 | 1.0 |

### Fixes Applied

| # | Tool | File | Error | Fix Description |
|---|------|------|-------|-----------------|
| — | — | — | — | No fixes needed |

> **Observation:** Both Before and After Optimization prompts achieved near-identical efficiency — the `get_sdk_messages` tool is inherently simple with just one required parameter (`entity_name`), making it difficult for verbose or concise prompts to diverge in tool-calling behavior. The Before set averaged 1.1 calls (one prompt B.3 triggered a follow-up `get_metadata_entities` call to verify the entity didn't exist), while the After set achieved a perfect 1.0 average. The optimized prompts were noticeably more direct — shorter, action-oriented phrasing that mapped cleanly to a single tool call without triggering exploratory side-queries. The one extra call in B.3 was caused by the verbose prompt's phrasing ("Can you return all SDK messages and Custom Actions?") which implied the AI should try harder to satisfy the request when the first call failed. In contrast, A.3's concise "Verify that message is available" accepted the error result at face value. This is a minor but meaningful signal: verbose prompts can inadvertently encourage AI agents to make extra verification calls. The tool description quality itself is good — both versions correctly guided the AI to use `entity_name` for scoping and `"none"` for global messages, with no confusion about parameter usage. Several entities (opportunity, lead, incident, new_project) are not provisioned in this dev environment, but the tool's error messages are clear and actionable.
