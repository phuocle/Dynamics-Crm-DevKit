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
