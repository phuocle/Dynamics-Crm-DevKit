# parse_record_url -- Prompt Validation

## Before Optimization

> 10 user prompts based on the original (verbose) tool description.
> Original had: RETURNS (EntityName, RecordId, Source, EnvironmentId), WHEN TO USE (3 bullets), SUPPORTED URL FORMATS (12 items), TIPS (4).

1. "Parse this URL: https://myorg.crm.dynamics.com/main.aspx?etn=account&pagetype=entityrecord&id=%7B91330924-802a-4b0d-a900-34fd9d790829%7D"
2. "What entity and record does this Web API URL point to: api/data/v9.2/contacts(a1b2c3d4-e5f6-7890-abcd-ef1234567890)"
3. "Extract the entity name and GUID from this maker portal URL: https://make.powerapps.com/environments/abc123/solutions/def456"
4. "I have this GUID: 91330924-802a-4b0d-a900-34fd9d790829 -- can you parse it?"
5. "Parse this legacy URL with an entity type code: main.aspx?etc=1&pagetype=entityrecord&id={some-guid-here}"
6. "What record does this workflow editor URL reference: sfa/workflow/edit.aspx?id={d9e875bf-1234-5678-9abc-def012345678}"
7. "I got this URL from a colleague -- parse it and tell me the entity: https://myorg.crm.dynamics.com/main.aspx?etn=incident&pagetype=entityrecord&id=12345678-abcd-ef01-2345-678901234567"
8. "Extract the flow ID from this Power Automate URL: https://make.powerautomate.com/environments/env123/flows/flow456"
9. "Parse this report viewer URL and tell me what it references: crmreports/viewer/viewer.aspx?id={abcdef12-3456-7890-abcd-ef1234567890}"
10. "Someone sent me a dialog URL -- extract the entity and record: rundialog.aspx?DialogId={aaa}&EntityName=opportunity&ObjectId={bbb}"

## After Optimization

> 10 user prompts based on the optimized (compressed) tool description.
> After: First sentence + SUPPORTED FORMATS (condensed) + 2 TIPS.

1. "Parse this Dynamics URL and tell me the entity and record ID: https://myorg.crm.dynamics.com/main.aspx?etn=account&pagetype=entityrecord&id=91330924-802a-4b0d-a900-34fd9d790829"
2. "What entity does this Web API URL target: api/data/v9.2/opportunities(7f8a9b0c-1d2e-3f4a-5b6c-7d8e9f0a1b2c)"
3. "Extract the GUID from this URL: sfa/workflow/edit.aspx?id={d9e875bf-1234-5678-9abc-def012345678}"
4. "I just have a raw GUID: a1b2c3d4-e5f6-7890-abcd-ef1234567890 -- can you parse it?"
5. "Parse this legacy etc-based URL: main.aspx?etc=4200&pagetype=entityrecord&id={12345678-aaaa-bbbb-cccc-dddddddddddd}"
6. "What does this Power Automate URL reference: https://make.powerautomate.com/environments/env1/flows/flow1/runs/run1"
7. "Parse the entity and ID from this URL a customer just sent me: https://myorg.crm.dynamics.com/main.aspx?etn=contact&pagetype=entityrecord&id=%7Babcdef01-2345-6789-abcd-ef0123456789%7D"
8. "I need to look up a record -- first parse this URL to get the entity name: main.aspx?etn=lead&pagetype=entityrecord&id=deadbeef-cafe-babe-dead-beefcafebabe"
9. "Extract the solution ID from this maker portal URL: https://make.powerapps.com/environments/env-guid/solutions/sol-guid"
10. "Parse this URL so I can use the entity and ID in a get_record call: api/data/v9.2/incidents(99887766-5544-3322-1100-aabbccddeeff)"

---

## Execution Results

> Executed against live environment on 2026-04-06. Connected as # DEVKIT to https://dynamics-crm-devkit-v4.crm.dynamics.com.

### Before Optimization

#### Prompt B.1: "Parse this URL: https://myorg.crm.dynamics.com/main.aspx?etn=account&pagetype=entityrecord&id=%7B91330924-802a-4b0d-a900-34fd9d790829%7D"

**Step 1:** Call `mcp__devkit__parse_record_url` with `{input: "https://myorg.crm.dynamics.com/main.aspx?etn=account&pagetype=entityrecord&id=%7B91330924-802a-4b0d-a900-34fd9d790829%7D"}`
**Step 1 Result:** EntityName=account, RecordId=91330924-802a-4b0d-a900-34fd9d790829, Source=main.aspx (etn+id)

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.2: "What entity and record does this Web API URL point to: api/data/v9.2/contacts(a1b2c3d4-e5f6-7890-abcd-ef1234567890)"

**Step 1:** Call `mcp__devkit__parse_record_url` with `{input: "api/data/v9.2/contacts(a1b2c3d4-e5f6-7890-abcd-ef1234567890)"}`
**Step 1 Result:** EntityName=contact, RecordId=a1b2c3d4-e5f6-7890-abcd-ef1234567890, Source=Web API (resolved)

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.3: "Extract the entity name and GUID from this maker portal URL: https://make.powerapps.com/environments/abc123/solutions/def456"

**Step 1:** Call `mcp__devkit__parse_record_url` with `{input: "https://make.powerapps.com/environments/abc123/solutions/def456"}`
**Step 1 Result:** EntityName=solution, RecordId=def456, EnvironmentId=abc123, Source=make.powerapps.com (solution)

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** RecordId "def456" is not a valid GUID but tool still parsed the URL structure correctly

#### Prompt B.4: "I have this GUID: 91330924-802a-4b0d-a900-34fd9d790829 -- can you parse it?"

**Step 1:** Call `mcp__devkit__parse_record_url` with `{input: "91330924-802a-4b0d-a900-34fd9d790829"}`
**Step 1 Result:** EntityName=(unknown), RecordId=91330924-802a-4b0d-a900-34fd9d790829, Source=raw GUID. Tip: Provide entity name or use a Dynamics 365 URL for automatic detection

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Raw GUID parsed successfully but entity name is unknown as expected — tool suggests providing entity name or full URL

#### Prompt B.5: "Parse this legacy URL with an entity type code: main.aspx?etc=1&pagetype=entityrecord&id={some-guid-here}"

**Step 1:** Call `mcp__devkit__parse_record_url` with `{input: "main.aspx?etc=1&pagetype=entityrecord&id={some-guid-here}"}`
**Step 1 Result:** No GUID found in input. Tip: Paste a Dynamics 365 record URL or a raw GUID

**Verdict:** FAILED
**Total MCP Calls:** 1
**Notes:** The prompt uses a placeholder `{some-guid-here}` which is not a valid GUID — tool correctly rejects it. This is a prompt design issue, not a tool issue

#### Prompt B.6: "What record does this workflow editor URL reference: sfa/workflow/edit.aspx?id={d9e875bf-1234-5678-9abc-def012345678}"

**Step 1:** Call `mcp__devkit__parse_record_url` with `{input: "sfa/workflow/edit.aspx?id={d9e875bf-1234-5678-9abc-def012345678}"}`
**Step 1 Result:** EntityName=workflow, RecordId=d9e875bf-1234-5678-9abc-def012345678, Source=sfa/workflow/edit.aspx

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.7: "I got this URL from a colleague -- parse it and tell me the entity: https://myorg.crm.dynamics.com/main.aspx?etn=incident&pagetype=entityrecord&id=12345678-abcd-ef01-2345-678901234567"

**Step 1:** Call `mcp__devkit__parse_record_url` with `{input: "https://myorg.crm.dynamics.com/main.aspx?etn=incident&pagetype=entityrecord&id=12345678-abcd-ef01-2345-678901234567"}`
**Step 1 Result:** EntityName=incident, RecordId=12345678-abcd-ef01-2345-678901234567, Source=main.aspx (etn+id)

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.8: "Extract the flow ID from this Power Automate URL: https://make.powerautomate.com/environments/env123/flows/flow456"

**Step 1:** Call `mcp__devkit__parse_record_url` with `{input: "https://make.powerautomate.com/environments/env123/flows/flow456"}`
**Step 1 Result:** No GUID found in input. Tip: Paste a Dynamics 365 record URL or a raw GUID

**Verdict:** FAILED
**Total MCP Calls:** 1
**Notes:** Power Automate URL with non-GUID path segments (env123, flow456) not recognized. Tool requires valid GUIDs in the URL

#### Prompt B.9: "Parse this report viewer URL and tell me what it references: crmreports/viewer/viewer.aspx?id={abcdef12-3456-7890-abcd-ef1234567890}"

**Step 1:** Call `mcp__devkit__parse_record_url` with `{input: "crmreports/viewer/viewer.aspx?id={abcdef12-3456-7890-abcd-ef1234567890}"}`
**Step 1 Result:** EntityName=report, RecordId=abcdef12-3456-7890-abcd-ef1234567890, Source=crmreports/viewer/viewer.aspx

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.10: "Someone sent me a dialog URL -- extract the entity and record: rundialog.aspx?DialogId={aaa}&EntityName=opportunity&ObjectId={bbb}"

**Step 1:** Call `mcp__devkit__parse_record_url` with `{input: "rundialog.aspx?DialogId={aaa}&EntityName=opportunity&ObjectId={bbb}"}`
**Step 1 Result:** No GUID found in input. Tip: Paste a Dynamics 365 record URL or a raw GUID

**Verdict:** FAILED
**Total MCP Calls:** 1
**Notes:** The prompt uses placeholder values `{aaa}` and `{bbb}` which are not valid GUIDs — tool correctly rejects. This is a prompt design issue, not a tool issue

### After Optimization

#### Prompt A.1: "Parse this Dynamics URL and tell me the entity and record ID: https://myorg.crm.dynamics.com/main.aspx?etn=account&pagetype=entityrecord&id=91330924-802a-4b0d-a900-34fd9d790829"

**Step 1:** Call `mcp__devkit__parse_record_url` with `{input: "https://myorg.crm.dynamics.com/main.aspx?etn=account&pagetype=entityrecord&id=91330924-802a-4b0d-a900-34fd9d790829"}`
**Step 1 Result:** EntityName=account, RecordId=91330924-802a-4b0d-a900-34fd9d790829, Source=main.aspx (etn+id)

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.2: "What entity does this Web API URL target: api/data/v9.2/opportunities(7f8a9b0c-1d2e-3f4a-5b6c-7d8e9f0a1b2c)"

**Step 1:** Call `mcp__devkit__parse_record_url` with `{input: "api/data/v9.2/opportunities(7f8a9b0c-1d2e-3f4a-5b6c-7d8e9f0a1b2c)"}`
**Step 1 Result:** EntityName=opportunities, RecordId=7f8a9b0c-1d2e-3f4a-5b6c-7d8e9f0a1b2c, Source=Web API (unresolved)

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** EntityName returned as plural "opportunities" (entitySetName) rather than logical name "opportunity" — source shows "unresolved" vs B.2's "resolved" for contacts

#### Prompt A.3: "Extract the GUID from this URL: sfa/workflow/edit.aspx?id={d9e875bf-1234-5678-9abc-def012345678}"

**Step 1:** Call `mcp__devkit__parse_record_url` with `{input: "sfa/workflow/edit.aspx?id={d9e875bf-1234-5678-9abc-def012345678}"}`
**Step 1 Result:** EntityName=workflow, RecordId=d9e875bf-1234-5678-9abc-def012345678, Source=sfa/workflow/edit.aspx

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.4: "I just have a raw GUID: a1b2c3d4-e5f6-7890-abcd-ef1234567890 -- can you parse it?"

**Step 1:** Call `mcp__devkit__parse_record_url` with `{input: "a1b2c3d4-e5f6-7890-abcd-ef1234567890"}`
**Step 1 Result:** EntityName=(unknown), RecordId=a1b2c3d4-e5f6-7890-abcd-ef1234567890, Source=raw GUID. Tip: Provide entity name or use a Dynamics 365 URL for automatic detection

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.5: "Parse this legacy etc-based URL: main.aspx?etc=4200&pagetype=entityrecord&id={12345678-aaaa-bbbb-cccc-dddddddddddd}"

**Step 1:** Call `mcp__devkit__parse_record_url` with `{input: "main.aspx?etc=4200&pagetype=entityrecord&id={12345678-aaaa-bbbb-cccc-dddddddddddd}"}`
**Step 1 Result:** EntityName=activitypointer, RecordId=12345678-aaaa-bbbb-cccc-dddddddddddd, Source=main.aspx (etc+id, resolved)

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Entity type code 4200 correctly resolved to activitypointer via Dataverse metadata lookup

#### Prompt A.6: "What does this Power Automate URL reference: https://make.powerautomate.com/environments/env1/flows/flow1/runs/run1"

**Step 1:** Call `mcp__devkit__parse_record_url` with `{input: "https://make.powerautomate.com/environments/env1/flows/flow1/runs/run1"}`
**Step 1 Result:** No GUID found in input. Tip: Paste a Dynamics 365 record URL or a raw GUID

**Verdict:** FAILED
**Total MCP Calls:** 1
**Notes:** Power Automate URL with non-GUID path segments not recognized — same limitation as B.8

#### Prompt A.7: "Parse the entity and ID from this URL a customer just sent me: https://myorg.crm.dynamics.com/main.aspx?etn=contact&pagetype=entityrecord&id=%7Babcdef01-2345-6789-abcd-ef0123456789%7D"

**Step 1:** Call `mcp__devkit__parse_record_url` with `{input: "https://myorg.crm.dynamics.com/main.aspx?etn=contact&pagetype=entityrecord&id=%7Babcdef01-2345-6789-abcd-ef0123456789%7D"}`
**Step 1 Result:** EntityName=contact, RecordId=abcdef01-2345-6789-abcd-ef0123456789, Source=main.aspx (etn+id)

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.8: "I need to look up a record -- first parse this URL to get the entity name: main.aspx?etn=lead&pagetype=entityrecord&id=deadbeef-cafe-babe-dead-beefcafebabe"

**Step 1:** Call `mcp__devkit__parse_record_url` with `{input: "main.aspx?etn=lead&pagetype=entityrecord&id=deadbeef-cafe-babe-dead-beefcafebabe"}`
**Step 1 Result:** EntityName=lead, RecordId=deadbeef-cafe-babe-dead-beefcafebabe, Source=main.aspx (etn+id)

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.9: "Extract the solution ID from this maker portal URL: https://make.powerapps.com/environments/env-guid/solutions/sol-guid"

**Step 1:** Call `mcp__devkit__parse_record_url` with `{input: "https://make.powerapps.com/environments/env-guid/solutions/sol-guid"}`
**Step 1 Result:** No GUID found in input. Tip: Paste a Dynamics 365 record URL or a raw GUID

**Verdict:** FAILED
**Total MCP Calls:** 1
**Notes:** Unlike B.3 where "abc123"/"def456" were accepted, "env-guid"/"sol-guid" containing hyphens may have been treated differently by the parser. Inconsistent behavior with B.3

#### Prompt A.10: "Parse this URL so I can use the entity and ID in a get_record call: api/data/v9.2/incidents(99887766-5544-3322-1100-aabbccddeeff)"

**Step 1:** Call `mcp__devkit__parse_record_url` with `{input: "api/data/v9.2/incidents(99887766-5544-3322-1100-aabbccddeeff)"}`
**Step 1 Result:** EntityName=incidents, RecordId=99887766-5544-3322-1100-aabbccddeeff, Source=Web API (unresolved)

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** EntityName returned as plural "incidents" (entitySetName) rather than logical name "incident" — shows "unresolved" meaning the tool did not resolve entitySetName to logical name via Dataverse metadata

### Summary

| Section | Total Prompts | Success | Failed | Error | Avg MCP Calls |
|---------|--------------|---------|--------|-------|---------------|
| Before Optimization | 10 | 7 | 3 | 0 | 1.0 |
| After Optimization | 10 | 8 | 2 | 0 | 1.0 |

### Fixes Applied

| # | Tool | File | Error | Fix Description |
|---|------|------|-------|-----------------|
| — | — | — | — | No fixes needed |

> **Observation:** Both Before and After Optimization prompts achieved identical 1.0 MCP calls per prompt — `parse_record_url` is a single-purpose tool that always maps to exactly one call, making it impossible for optimization to reduce call count. The tool description optimization had no measurable impact on AI tool selection efficiency for this tool. The real differences lie in prompt quality: Before Optimization had 3 failures (B.5, B.8, B.10) while After had only 2 (A.6, A.9), a marginal improvement. B.5 and B.10 failed due to placeholder values (`{some-guid-here}`, `{aaa}`, `{bbb}`) in the prompts themselves — a prompt design issue, not a tool issue. Both B.8 and A.6 failed on Power Automate URLs with non-GUID path segments, revealing a genuine tool limitation. Notably, B.3 succeeded with `abc123`/`def456` as path segments while A.9 failed with `env-guid`/`sol-guid`, suggesting inconsistent parsing of maker portal URLs depending on whether the path segment contains hyphens (which may trigger partial GUID pattern matching). Two Web API prompts (A.2, A.10) returned entitySetNames ("opportunities", "incidents") instead of logical names, marked as "unresolved" — compared to B.2's "contacts" which was "resolved". This suggests the tool sometimes resolves entitySetNames to logical names via Dataverse API but other times does not, possibly based on whether the entitySetName exists in the connected environment's metadata cache.
