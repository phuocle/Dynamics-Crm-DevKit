# upsert_variable — Prompt Validation

## Before Optimization

> 10 user prompts based on the original (verbose) tool description with BEHAVIOR, PARAMETERS, RETURNS, WHEN TO USE, EXAMPLES.

1. "Create a new environment variable called new_ApiEndpoint of type string with value 'https://api.contoso.com/v2'"
2. "Update the current value of the new_MaxRetries environment variable to '5'"
3. "Clear the current value of new_ApiEndpoint so it reverts back to the default value"
4. "Create a JSON environment variable for feature flags with a default value containing enableNewUI and enableBetaFeatures"
5. "I need a boolean environment variable called new_MaintenanceMode with a default of 'false'"
6. "What is the current value of the new_ConnectionString variable? And what's its default?"
7. "Create a number-type environment variable new_BatchSize with default value '100' and current value '250'"
8. "Update the description of the new_ApiEndpoint variable to say 'Production API endpoint for integration'"
9. "Create an environment variable for a data source connection in the FinanceModule solution"
10. "I changed the API endpoint for testing — now set it back by clearing the current value override"

## After Optimization

> 10 user prompts based on the optimized (compressed) tool description with BEHAVIOR + 2 TIPS.

1. "Create an environment variable new_ApiEndpoint with type string and value 'https://api.contoso.com'"
2. "Update the value of new_MaxRetries to '10'"
3. "Clear the current value of new_ApiEndpoint so it falls back to default"
4. "Create a JSON environment variable new_FeatureFlags with default '{\"enableNewUI\": false, \"betaMode\": false}'"
5. "Set up a boolean variable new_MaintenanceMode with display name 'Maintenance Mode' and default 'false'"
6. "Create a number variable new_BatchSize with default '100' in the DevKit_Core solution"
7. "Update the display name and description of the existing new_ConnectionTimeout variable"
8. "I need a secret-type environment variable new_ApiKey — create the definition without a value"
9. "Change the current value of new_FeatureFlags to enable the beta mode flag"
10. "The integration endpoint changed back — clear the override value on new_SyncUrl so it uses the default again"

