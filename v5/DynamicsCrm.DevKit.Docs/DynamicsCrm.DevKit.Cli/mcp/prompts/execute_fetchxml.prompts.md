# execute_fetchxml -- Prompt Validation

## Before Optimization

> 10 user prompts based on the original (verbose) tool description with detailed FETCHXML STRUCTURE, FILTERING, JOINS (link-entity), AGGREGATION, and IMPORTANT RULES sections.

1. "Query all active accounts and show me their name and revenue"
2. "Find all contacts where the email address ends with @contoso.com"
3. "Join the opportunity entity to account and show the account name alongside each opportunity"
4. "Count how many leads were created this year grouped by lead source"
5. "Get the top 10 accounts by revenue in descending order"
6. "Filter accounts created in the last 30 days with revenue greater than 1 million"
7. "Show me all cases where the status is Active and the priority is High"
8. "Run an aggregate query to get the average deal size for opportunities by owner"
9. "Query the N:N relationship between account and contact through the accountcontact intersect entity"
10. "Retrieve all records from the custom entity new_project where the new_status field is not null and sort by createdon descending"

## After Optimization

> 10 user prompts based on the optimized description with compressed STRUCTURE + FILTERING + JOINS + AGGREGATION + 3 RULES.

1. "Get all active accounts with name and revenue sorted by revenue descending"
2. "Find contacts where emailaddress1 ends with @contoso.com"
3. "Join opportunity to account and return the parent account name for each deal"
4. "Count all leads grouped by leadsourcecode"
5. "Show me accounts created in the last 30 days with revenue over 500000"
6. "Query active cases with priority eq 1 and show title plus createdon"
7. "Get the sum of estimatedvalue on opportunities grouped by ownerid"
8. "Fetch all contacts linked to account through the N:N relationship"
9. "Return all new_project records where new_deadline is not null, max 50 results"
10. "Get distinct values of the industrycode field across all accounts"
