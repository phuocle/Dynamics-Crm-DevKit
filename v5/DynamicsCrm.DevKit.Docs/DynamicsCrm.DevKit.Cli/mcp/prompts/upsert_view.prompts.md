# upsert_view -- Prompt Validation

## Before Optimization

> 10 user prompts based on the original (verbose) tool description with FOUR ACTIONS, PARAMETERS, detailed WORKFLOW FOR each action, SYNC VALIDATION, and TIPS.

1. "Create a new Public view for the account entity that shows name, revenue, and primarycontactid"
2. "Update the Active Accounts view to add the telephone1 column"
3. "Rename the My Active Contacts view to Contacts I Own"
4. "Undo the last view change on opportunity using the backup files"
5. "Does upsert_view check that the LayoutXML columns match the FetchXML attributes?"
6. "Create a view for leads that filters by leadsourcecode eq 1 and shows fullname and emailaddress1"
7. "Update the All Cases view to sort by createdon descending instead of title"
8. "I want to update the view but not publish yet -- can I set auto_publish to false?"
9. "What happens if my LayoutXML has a column that is not in the FetchXML? Will the tool catch that?"
10. "Restore the Active Opportunities view from the backup at .devkit/backups/views/opportunity_layout.bak"

## After Optimization

> 10 user prompts based on the optimized description with FOUR ACTIONS + WORKFLOW compressed + SYNC VALIDATION + 2 TIPS.

1. "Create a new view for accounts showing name, revenue, and createdon"
2. "Update the Active Accounts view to include the emailaddress1 column"
3. "Rename the All Contacts view to All Active Contacts"
4. "Undo the last change to the opportunity view using the backup file"
5. "Will upsert_view validate that my LayoutXML and FetchXML are in sync?"
6. "Create a leads view filtered by statecode eq 0 with columns fullname and telephone1"
7. "Update the default case view to sort by modifiedon descending"
8. "Update the contact view but delay publishing until I finish all changes"
9. "What sync validation does upsert_view perform on LayoutXML vs FetchXML?"
10. "Restore the account view from .devkit/backups/views/account_layout.bak and account_fetch.bak"
