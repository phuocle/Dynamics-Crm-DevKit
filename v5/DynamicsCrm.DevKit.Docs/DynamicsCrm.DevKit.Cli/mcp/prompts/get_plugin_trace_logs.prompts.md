# get_plugin_trace_logs -- Prompt Validation

## Before Optimization

> 10 user prompts based on the original (verbose) tool description.
> Original had: PARAMETERS (record_id, type_name, minutes_ago, correlation_id, message_name, mode, max_records), RETURNS (with/without record_id), WHEN TO USE (5 bullets), TIPS (4).

1. "Show me all plugin trace logs from the last hour"
2. "My AccountPlugin is failing -- show me the recent trace logs for it"
3. "I need the full error details for plugin trace log d9e875bf-1234-5678-9abc-def012345678"
4. "What plugins executed for correlation ID a1b2c3d4-e5f6-7890-abcd-ef1234567890?"
5. "Show me all trace logs for Create message on the contact entity in the last 30 minutes"
6. "Are there any synchronous plugin failures in the last 2 hours?"
7. "I just deployed my plugin -- show me if it executed correctly by checking recent trace logs"
8. "Filter trace logs to show only async plugin executions from the last 24 hours"
9. "A user reports getting an error when updating an account -- show me plugin traces for the Update message on account"
10. "Get the full messageblock and exception details for this specific trace log entry: 12345678-abcd-ef01-2345-678901234567"

## After Optimization

> 10 user prompts based on the optimized (compressed) tool description.
> After: First sentence + TWO MODES (browse vs. detail) + 2 TIPS.

1. "Show me recent plugin trace logs from the last hour"
2. "My PreValidateAccountPlugin is throwing errors -- find its trace logs"
3. "Get the full trace output for plugin log ID d9e875bf-1234-5678-9abc-def012345678"
4. "Trace all plugins that fired for correlation ID a1b2c3d4-e5f6-7890-abcd-ef1234567890"
5. "Show me plugin traces for Create operations in the last 15 minutes"
6. "Are there any plugin failures? Check the last 4 hours"
7. "I just registered a new plugin step -- check if it's executing by looking at trace logs"
8. "Find async plugin trace logs for the Update message"
9. "Someone pasted this plugin trace URL -- parse it and show me the full details: https://myorg.crm.dynamics.com/main.aspx?etn=plugintracelog&pagetype=entityrecord&id=abcdef01-2345-6789-abcd-ef0123456789"
10. "Browse recent plugin logs first, then I'll pick one to see the full exception stack trace"
