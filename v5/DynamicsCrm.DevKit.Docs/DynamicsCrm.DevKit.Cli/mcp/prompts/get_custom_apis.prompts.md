# get_custom_apis — Prompt Validation

## Before Optimization

> 10 user prompts based on the original (verbose) tool description with TWO MODES, PARAMETERS, RETURNS, WHEN TO USE, RELATIONSHIP, TIPS.

1. "List all custom APIs in this environment — I want to see what's available"
2. "Show me the full details for the Custom API called 'v4_ProcessOrder' including its request parameters and response properties"
3. "Which Custom APIs are bound to the account entity?"
4. "Are there any Custom APIs that don't have a plugin type registered? I want to find client-only ones"
5. "List all Custom APIs but include the Microsoft-provided ones too — I need to see msdyn_ APIs"
6. "What are the request parameters for the v4_CalculateDiscount Custom API?"
7. "Show me only inactive Custom APIs in the environment"
8. "I see a Custom Action name in get_messages output — can you get the full parameter details for 'new_ApproveExpense'?"
9. "How many Custom APIs are registered as Functions (GET) versus Actions (POST)?"
10. "List all Custom APIs bound to the opportunity entity and show which ones have plugin bindings"

## After Optimization

> 10 user prompts based on the optimized (compressed) tool description with TWO MODES + 2 TIPS.

1. "List all custom APIs in the environment"
2. "Get full details for the Custom API v4_ProcessOrder including parameters and response"
3. "Which Custom APIs are bound to the account entity?"
4. "Show me Custom APIs that have no plugin type — I want to find the client-only ones"
5. "List all APIs including Microsoft-provided ones"
6. "What parameters does the new_ApproveExpense Custom API expect?"
7. "Are there any inactive Custom APIs?"
8. "Show me the response properties for the v4_CalculateDiscount API"
9. "List all Custom APIs that are Functions versus Actions"
10. "Which Custom APIs are bound to opportunity and have a plugin registered?"

