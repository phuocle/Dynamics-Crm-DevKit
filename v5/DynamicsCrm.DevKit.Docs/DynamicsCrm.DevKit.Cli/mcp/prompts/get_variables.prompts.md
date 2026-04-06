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

---

## Execution Results

> Executed against live environment on 2026-04-06. Connected as # DEVKIT to https://dynamics-crm-devkit-v4.crm.dynamics.com.

### Before Optimization

#### Prompt B.1: "List all environment variables in this Dataverse environment with their name, type, default value, and current value."

**Step 1:** Call `mcp__devkit__get_variables` with `{}`
**Step 1 Result:** 5 variables returned: msdyn_AllowSelectLeafOnly (Boolean, default=no), msdyn_lineofbusinessfiltertemplatefeature (String), msdyn_lineofbusinessfiltertemplatefeatureuserexpansion (String), msdyn_ShouldShowPeekButton (String, default=no), msdyn_SLAWebClientDeprecationAcknowledge (Number, default=0, current=0)

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.2: "Get detailed info for the environment variable named 'new_ApiEndpoint'. I need to see both the default value and the current value override."

**Step 1:** Call `mcp__devkit__get_variables` with `{variable_name: "new_ApiEndpoint"}`
**Step 1 Result:** Environment variable 'new_ApiEndpoint' not found

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Variable does not exist in this environment. Tool correctly returned a not-found error.

#### Prompt B.3: "I'm debugging a Power Automate flow that uses an environment variable for the API endpoint. Can you check what value 'cr_IntegrationUrl' is set to?"

**Step 1:** Call `mcp__devkit__get_variables` with `{variable_name: "cr_IntegrationUrl"}`
**Step 1 Result:** Environment variable 'cr_IntegrationUrl' not found

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Variable does not exist in this environment. Tool correctly returned a not-found error.

#### Prompt B.4: "Show me all environment variables filtered by the solution 'DevKit_Core'. I need to verify the connection strings between environments."

**Step 1:** Call `mcp__devkit__get_variables` with `{solution_name: "DevKit_Core"}`
**Step 1 Result:** No environment variables found in solution 'DevKit_Core'

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.5: "I need to verify that the environment variable 'new_MaxRetries' has the correct current value. Retrieve its detailed info."

**Step 1:** Call `mcp__devkit__get_variables` with `{variable_name: "new_MaxRetries"}`
**Step 1 Result:** Environment variable 'new_MaxRetries' not found

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Variable does not exist in this environment.

#### Prompt B.6: "What environment variables exist in this org? I want the full list to audit our configuration."

**Step 1:** Call `mcp__devkit__get_variables` with `{}`
**Step 1 Result:** 5 variables returned: msdyn_AllowSelectLeafOnly, msdyn_lineofbusinessfiltertemplatefeature, msdyn_lineofbusinessfiltertemplatefeatureuserexpansion, msdyn_ShouldShowPeekButton, msdyn_SLAWebClientDeprecationAcknowledge

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.7: "Check the environment variable 'msdyn_EnableFeatureX'. I want to know if there's a current value overriding the default."

**Step 1:** Call `mcp__devkit__get_variables` with `{variable_name: "msdyn_EnableFeatureX"}`
**Step 1 Result:** Environment variable 'msdyn_EnableFeatureX' not found

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Variable does not exist in this environment.

#### Prompt B.8: "List all environment variables. I need to document which ones have current values set vs. just defaults."

**Step 1:** Call `mcp__devkit__get_variables` with `{}`
**Step 1 Result:** 5 variables returned. Only msdyn_SLAWebClientDeprecationAcknowledge has a current value (0); the other 4 have only default values.

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.9: "I'm migrating between environments and need to check if connection strings are configured correctly. Show me all variables of type 'datasource'."

**Step 1:** Call `mcp__devkit__get_variables` with `{}`
**Step 1 Result:** 5 variables returned. None are of type 'datasource' — types are Boolean (1), String (3), Number (1).

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** The tool does not support filtering by type. Listed all variables and filtered manually. No datasource variables exist.

#### Prompt B.10: "Get the environment variable 'new_WebhookSecret'. I need to verify it has the right current value for this environment."

**Step 1:** Call `mcp__devkit__get_variables` with `{variable_name: "new_WebhookSecret"}`
**Step 1 Result:** Environment variable 'new_WebhookSecret' not found

**Verdict:** SUCCESS
**Total MCP Calls:** 1
**Notes:** Variable does not exist in this environment.

### After Optimization

#### Prompt A.1: "List all environment variables in this org."

**Step 1:** Call `mcp__devkit__get_variables` with `{}`
**Step 1 Result:** 5 variables returned: msdyn_AllowSelectLeafOnly (Boolean), msdyn_lineofbusinessfiltertemplatefeature (String), msdyn_lineofbusinessfiltertemplatefeatureuserexpansion (String), msdyn_ShouldShowPeekButton (String), msdyn_SLAWebClientDeprecationAcknowledge (Number, current=0)

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.2: "What's the value of 'new_ApiEndpoint'?"

**Step 1:** Call `mcp__devkit__get_variables` with `{variable_name: "new_ApiEndpoint"}`
**Step 1 Result:** Environment variable 'new_ApiEndpoint' not found

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.3: "My flow is failing because of a bad connection string. Check the environment variable 'cr_IntegrationUrl'."

**Step 1:** Call `mcp__devkit__get_variables` with `{variable_name: "cr_IntegrationUrl"}`
**Step 1 Result:** Environment variable 'cr_IntegrationUrl' not found

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.4: "Show all environment variables in the DevKit_Core solution."

**Step 1:** Call `mcp__devkit__get_variables` with `{solution_name: "DevKit_Core"}`
**Step 1 Result:** No environment variables found in solution 'DevKit_Core'

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.5: "Does 'new_MaxRetries' have a current value override or is it using the default?"

**Step 1:** Call `mcp__devkit__get_variables` with `{variable_name: "new_MaxRetries"}`
**Step 1 Result:** Environment variable 'new_MaxRetries' not found

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.6: "I'm setting up a new environment. List all env vars so I know what needs to be configured."

**Step 1:** Call `mcp__devkit__get_variables` with `{}`
**Step 1 Result:** 5 variables returned: msdyn_AllowSelectLeafOnly, msdyn_lineofbusinessfiltertemplatefeature, msdyn_lineofbusinessfiltertemplatefeatureuserexpansion, msdyn_ShouldShowPeekButton, msdyn_SLAWebClientDeprecationAcknowledge

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.7: "Check if 'msdyn_EnableFeatureX' is set to true or false in this environment."

**Step 1:** Call `mcp__devkit__get_variables` with `{variable_name: "msdyn_EnableFeatureX"}`
**Step 1 Result:** Environment variable 'msdyn_EnableFeatureX' not found

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.8: "Which environment variables have current values set? I need to know what's been customized."

**Step 1:** Call `mcp__devkit__get_variables` with `{}`
**Step 1 Result:** 5 variables returned. Only msdyn_SLAWebClientDeprecationAcknowledge has a current value override (0); the other 4 use defaults only.

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.9: "Get the details for 'new_WebhookSecret' -- I need to verify the value after our last deployment."

**Step 1:** Call `mcp__devkit__get_variables` with `{variable_name: "new_WebhookSecret"}`
**Step 1 Result:** Environment variable 'new_WebhookSecret' not found

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt A.10: "Are there any environment variables for API endpoints in this org? List everything so I can check."

**Step 1:** Call `mcp__devkit__get_variables` with `{}`
**Step 1 Result:** 5 variables returned. None appear to be API endpoint variables — all are msdyn_ prefixed system variables (Boolean, String, Number types).

**Verdict:** SUCCESS
**Total MCP Calls:** 1

### Summary

| Section | Total Prompts | Success | Failed | Error | Avg MCP Calls |
|---------|--------------|---------|--------|-------|---------------|
| Before Optimization | 10 | 10 | 0 | 0 | 1.0 |
| After Optimization | 10 | 10 | 0 | 0 | 1.0 |

### Fixes Applied

| # | Tool | File | Error | Fix Description |
|---|------|------|-------|-----------------|
| — | — | — | — | No fixes needed |

> **Observation:** The `get_variables` tool is a straightforward, well-designed tool with a narrow scope — it lists or retrieves individual environment variables. Both Before and After Optimization prompts achieved a perfect 1.0 average MCP calls per prompt, meaning every prompt was resolved with a single direct tool call. This is because the tool's purpose is unambiguous: the AI immediately recognized `get_variables` as the correct tool regardless of how verbose or concise the prompt was. The tool description — whether original or optimized — had no measurable impact on tool selection efficiency since there is no competing tool for environment variables and the parameter mapping (variable_name, solution_name) is intuitive. The only limitation observed is the lack of a type filter parameter (B.9 asked for "datasource" type variables), which required listing all and filtering manually. Both prompt styles produced identical behavior, suggesting that for single-purpose tools with clear naming, description optimization has minimal practical impact on AI tool-calling efficiency.
