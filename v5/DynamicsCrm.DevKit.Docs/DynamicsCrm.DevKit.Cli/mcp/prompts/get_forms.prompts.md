# get_forms -- Prompt Validation

## Before Optimization

> 10 user prompts based on the original (verbose) tool description.
> Original had: TWO MODES, PARAMETERS (entity_name, form_id, form_name, form_type, include_formxml), RETURNS (list/detail), WHEN TO USE (6 bullets), TIPS (6).

1. "List all forms for the account entity"
2. "Show me the FormXML for the default main form on the contact entity"
3. "What fields are on the main form of the opportunity entity?"
4. "Get the form named 'Information' on the lead entity"
5. "I need to see all quick create forms for the incident entity"
6. "Which form is the default main form for accounts? Show me its full layout"
7. "List the forms for the custom entity new_project -- include the FormXML"
8. "I want to add a field to the account form -- first show me the current form structure"
9. "How many forms does the contact entity have? List them by type"
10. "Get the full FormXML for form ID a1b2c3d4-e5f6-7890-abcd-ef1234567890 on the account entity"

## After Optimization

> 10 user prompts based on the optimized (compressed) tool description.
> After: First sentence + TWO MODES + 3 TIPS.

1. "List all forms on the account entity"
2. "Show me the main form layout for contacts"
3. "What's the default main form for the opportunity entity?"
4. "Get the FormXML for the form called 'Information' on leads"
5. "List quick create forms for the incident entity"
6. "I need to customize the account main form -- show me its current structure"
7. "Show me all form types for the new_project custom entity"
8. "Get full details for form a1b2c3d4-e5f6-7890-abcd-ef1234567890 on account"
9. "Which fields are in the General tab of the contact main form?"
10. "Before I add a new section to the lead form, show me the existing tabs and sections"
