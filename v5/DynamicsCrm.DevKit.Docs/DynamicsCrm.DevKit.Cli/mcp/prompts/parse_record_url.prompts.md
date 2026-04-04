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
