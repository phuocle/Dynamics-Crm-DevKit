# get_cloud_flows — Prompt Validation

## Before Optimization

> 10 user prompts based on the original (verbose) tool description with THREE MODES, PARAMETERS, RETURNS, WHEN TO USE, RELATIONSHIP, TIPS.

1. "List all active Power Automate cloud flows in this environment"
2. "Show me the details of the cloud flow named 'Sync Accounts to SharePoint' including its last 5 runs"
3. "What cloud flows failed in the last 24 hours? I need to investigate errors"
4. "Show me the run history for flow d9e875bf-1234-5678-abcd-ef1234567890 — filter to only failed runs"
5. "Which cloud flows are owned by John Smith?"
6. "Are there any suspended cloud flows that need attention?"
7. "List all draft (turned off) cloud flows so I can decide which to delete or reactivate"
8. "Show me all flow runs from the last 7 days for the account sync flow"
9. "How many flows succeeded versus failed in the last 48 hours for flow abc-123?"
10. "I want to see flows with 'approval' in the name — can you filter the list?"

## After Optimization

> 10 user prompts based on the optimized (compressed) tool description with THREE MODES + 2 TIPS.

1. "List all active cloud flows in the environment"
2. "Show details and recent runs for the flow named 'Sync Accounts to SharePoint'"
3. "What flows failed in the last 24 hours?"
4. "Show run history for flow d9e875bf-1234-5678-abcd-ef1234567890 — only failed runs"
5. "Which flows are owned by John Smith?"
6. "Are there any suspended flows?"
7. "List all draft flows that are currently turned off"
8. "Show flow runs from the last 7 days for the account sync flow"
9. "How many runs succeeded vs failed in the last 48 hours for this flow?"
10. "Find all flows with 'approval' in the name"

