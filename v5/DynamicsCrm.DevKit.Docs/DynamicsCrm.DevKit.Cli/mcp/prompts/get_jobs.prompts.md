# get_jobs — Prompt Validation

## Before Optimization

> 10 user prompts based on the original (verbose) tool description with TWO MODES, PARAMETERS, RETURNS, WHEN TO USE, RELATIONSHIP, TIPS.

1. "What system jobs failed in the last 24 hours?"
2. "Show me the error details for system job d9e875bf-1234-5678-abcd-ef1234567890 — I need the full stack trace"
3. "Are there any failed async plugin jobs on the account entity?"
4. "My plugin is failing asynchronously — show me the recent error messages"
5. "What workflow jobs are currently waiting in the queue?"
6. "Show me all failed bulk delete operations this week"
7. "What jobs ran for correlation ID abc12345-6789-0abc-def0-123456789abc? I want to trace the full request"
8. "Are there any solution import jobs in progress right now?"
9. "List all failed jobs on the contact entity from the last 7 days"
10. "Show me succeeded plugin jobs from the last hour — I want to verify my deployment worked"

## After Optimization

> 10 user prompts based on the optimized (compressed) tool description with TWO MODES + 2 TIPS.

1. "What system jobs failed in the last 24 hours?"
2. "Show error details and stack trace for job d9e875bf-1234-5678-abcd-ef1234567890"
3. "Any failed plugin jobs on the account entity?"
4. "Show me recent async plugin failures"
5. "What workflow jobs are currently waiting?"
6. "List failed bulk delete operations from the last 7 days"
7. "Trace all jobs for correlation ID abc12345-6789-0abc-def0-123456789abc"
8. "Are there any solution import jobs in progress?"
9. "Show failed jobs on the contact entity from the past week"
10. "List succeeded plugin jobs from the last hour to verify my deployment"

