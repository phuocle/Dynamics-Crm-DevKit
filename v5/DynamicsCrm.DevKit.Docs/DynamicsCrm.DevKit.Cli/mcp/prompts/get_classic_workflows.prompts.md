# get_classic_workflows -- Prompt Validation

## Before Optimization

> 10 user prompts based on the original (verbose) tool description.
> Original had: PARAMETERS (entity_name, mode, active_only, trigger_field, name_filter, max_records), RETURNS (table + summary), KEY FIELDS EXPLAINED (triggeronupdateattributelist, mode, createstage/updatestage/deletestage, scope, runas, rank), WHEN TO USE (7 bullets), SCOPE note, RELATIONSHIP TO OTHER TOOLS.

1. "What classic workflows are registered on the account entity?"
2. "Show me all real-time (synchronous) workflows on the contact entity"
3. "Are there any workflows that trigger when the 'revenue' field changes on opportunity?"
4. "List all background workflows across all entities"
5. "Which workflows fire when a record's status changes? Check for statecode triggers"
6. "Show me workflows that trigger on record assignment -- look for ownerid in the trigger fields"
7. "Are there any workflows that run in pre-operation stage on the lead entity?"
8. "List all deactivated/draft workflows on the incident entity"
9. "What automation runs before a contact record is saved? Show me real-time pre-operation workflows"
10. "Show me all workflows named 'approval' across all entities with their trigger configuration"

## After Optimization

> 10 user prompts based on the optimized (compressed) tool description.
> After: First sentence + KEY FIELDS (triggeronupdateattributelist, mode, stage, scope) + SCOPE note + 2 WHEN TO USE.

1. "What classic workflows exist on the account entity?"
2. "Show me real-time workflows on contacts"
3. "Are there any workflows triggered by a change to the 'revenue' field on opportunity?"
4. "List all background workflows in the environment"
5. "Which workflows fire on a status change? Filter by statecode trigger"
6. "Do any workflows trigger when an account record is assigned?"
7. "Show me pre-operation real-time workflows on leads"
8. "List inactive workflows on the incident entity"
9. "What runs before a contact save? Check real-time workflow triggers"
10. "Find all workflows with 'sync' in the name and show their trigger fields"
