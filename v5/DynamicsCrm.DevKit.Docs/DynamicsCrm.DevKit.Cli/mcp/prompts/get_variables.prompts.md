# get_variables --- Prompt Validation

## Before Optimization

> 10 user prompts based on the original (verbose) tool description.

1. "List all environment variables in this Dataverse environment with their name, type, default value, and current value."
2. "Get detailed info for the environment variable named 'new_ApiEndpoint'. I need to see both the default value and the current value override."
3. "I'm debugging a Power Automate flow that uses an environment variable for the API endpoint. Can you check what value 'cr_IntegrationUrl' is set to?"
4. "Show me all environment variables filtered by the solution 'DevKit_Core'. I need to verify the connection strings between environments."
5. "I need to verify that the environment variable 'new_MaxRetries' has the correct current value. Retrieve its detailed info."
6. "What environment variables exist in this org? I want the full list to audit our configuration."
7. "Check the environment variable 'msdyn_EnableFeatureX'. I want to know if there's a current value overriding the default."
8. "List all environment variables. I need to document which ones have current values set vs. just defaults."
9. "I'm migrating between environments and need to check if connection strings are configured correctly. Show me all variables of type 'datasource'."
10. "Get the environment variable 'new_WebhookSecret'. I need to verify it has the right current value for this environment."

## After Optimization

> 10 user prompts based on the optimized (compressed) tool description.

1. "List all environment variables in this org."
2. "What's the value of 'new_ApiEndpoint'?"
3. "My flow is failing because of a bad connection string. Check the environment variable 'cr_IntegrationUrl'."
4. "Show all environment variables in the DevKit_Core solution."
5. "Does 'new_MaxRetries' have a current value override or is it using the default?"
6. "I'm setting up a new environment. List all env vars so I know what needs to be configured."
7. "Check if 'msdyn_EnableFeatureX' is set to true or false in this environment."
8. "Which environment variables have current values set? I need to know what's been customized."
9. "Get the details for 'new_WebhookSecret' -- I need to verify the value after our last deployment."
10. "Are there any environment variables for API endpoints in this org? List everything so I can check."
