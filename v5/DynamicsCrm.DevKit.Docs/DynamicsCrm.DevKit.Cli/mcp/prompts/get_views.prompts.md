# get_views -- Prompt Validation

## Before Optimization

> 10 user prompts based on the original (verbose) tool description.
> Original had: TWO MODES, PARAMETERS (entity_name, view_id, query_type, include_fetchxml, include_personal), RETURNS (list/detail), WHEN TO USE (5 bullets), TIPS (6).

1. "List all views for the account entity"
2. "Show me the FetchXML query behind the 'Active Accounts' view"
3. "What is the default public view for the contact entity?"
4. "Get the LayoutXML for the Quick Find view on the opportunity entity"
5. "I need to see which columns are displayed in the 'My Active Cases' view on incident"
6. "List all views for the lead entity including their FetchXML definitions"
7. "Show me the personal views for the account entity as well as system views"
8. "Get the full definition of view ID a1b2c3d4-e5f6-7890-abcd-ef1234567890 on the account entity"
9. "What SubGrid views are available for the contact entity?"
10. "Before I modify the 'Active Contacts' view, show me its current FetchXML and LayoutXML"

## After Optimization

> 10 user prompts based on the optimized (compressed) tool description.
> After: First sentence + TWO MODES + 3 TIPS.

1. "List all views on the account entity"
2. "Show me the FetchXML behind the 'Active Accounts' view"
3. "What is the default view for contacts?"
4. "Get the Quick Find view definition for opportunities"
5. "Which columns does the default account grid view show?"
6. "List all public views for leads with their FetchXML"
7. "Show me both system and personal views for accounts"
8. "Get the full LayoutXML and FetchXML for view a1b2c3d4-e5f6-7890-abcd-ef1234567890"
9. "What SubGrid views exist for the contact entity?"
10. "Before I update the 'All Cases' view, show me its current layout and query"
