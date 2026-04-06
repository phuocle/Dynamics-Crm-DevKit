# search_records -- Prompt Validation

## Before Optimization

> 10 user prompts based on the original (verbose) tool description.
> Original had: RETURNS, WHEN TO USE (4 bullets), SEARCH SYNTAX (boolean/wildcards/exact/precedence), IMPORTANT (4 bullets about enablement, column config, max 100, precise filtering).

1. "Find all accounts that contain the word Contoso"
2. "Search for contacts named John Smith across the entire environment"
3. "I need to find records mentioning 'Azure Migration' -- check accounts, contacts, and leads"
4. "Use a wildcard search to find all opportunities starting with 'Ren'"
5. "Find active records that mention 'premium support' using boolean search with +premium +support"
6. "Search across all entities for anything related to 'Fabrikam' and show me the top 10 results"
7. "I know there's a contact with an email containing 'alpine' -- can you search for it?"
8. "Find all leads that mention either 'cloud' or 'hybrid' using boolean OR syntax"
9. "Search for the exact phrase 'Annual Maintenance Contract' across opportunities and incidents"
10. "I need to quickly find a record by keyword but I don't know which entity it belongs to -- search for 'ProjectX-2025'"

## After Optimization

> 10 user prompts based on the optimized (compressed) tool description.
> After: First sentence + SEARCH SYNTAX + 3 WHEN TO USE + 2 IMPORTANT.

1. "Find records matching 'Northwind Traders' across accounts and contacts"
2. "Search for 'data migration' across all searchable entities"
3. "Use wildcard search to find leads starting with 'Micro*'"
4. "Find records containing both 'enterprise' and 'license' using boolean AND"
5. "I need to search for 'Contoso' but only in the opportunity and incident tables"
6. "Do a relevance search for the exact phrase 'Gold Tier Partner' and limit results to 5"
7. "Search for anything matching 'SAP integration' -- I don't know which entity has it"
8. "Find all records mentioning 'wifi' or 'ethernet' using boolean OR: wifi|ethernet"
9. "Quick search for a record named 'PRJ-00842' across the whole environment"
10. "Search for 'Adatum' excluding anything with 'inactive' in the results"
