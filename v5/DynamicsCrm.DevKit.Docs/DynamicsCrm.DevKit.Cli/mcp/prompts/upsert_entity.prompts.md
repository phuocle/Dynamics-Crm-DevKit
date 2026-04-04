# upsert_entity — Prompt Validation

## Before Optimization

> 10 user prompts based on the original (verbose) tool description with PARAMETERS (18 items), RETURNS, WHEN TO USE, TIPS.

1. "Create a new custom entity called 'Project' with the publisher prefix 'new_' in the DevKit solution"
2. "I need a user-owned custom table for tracking time entries — it should have notes and activities enabled"
3. "Create an organization-owned entity called 'Configuration Setting' that doesn't need notes or activities"
4. "Set up a new activity entity for tracking site visits — it should behave like a task or phone call"
5. "Create a custom entity with a primary name field that allows up to 200 characters instead of the default 100"
6. "I need a new table called 'Booking' with quick create enabled and duplicate detection turned on"
7. "Create a custom entity in the 'cr_' namespace with change tracking enabled for data sync scenarios"
8. "What parameters do I need to create a new entity? I want to make sure I set ownership type correctly"
9. "Create a table called 'Expense Report' with a custom color #FF6B35 and add it to my solution called 'FinanceModule'"
10. "I want to create two new entities: new_project and new_milestone — both user-owned with notes enabled"

## After Optimization

> 10 user prompts based on the optimized (compressed) tool description with First sentence + 2 TIPS.

1. "Create a custom table called new_project with display name 'Project' in the DevKit_Core solution"
2. "I need an organization-owned entity for storing global config settings — no notes or activities needed"
3. "Create a user-owned table new_timeentry for time tracking with notes and activities enabled"
4. "Set up a new activity entity new_sitevisit so users can track field visits like other CRM activities"
5. "Create a custom entity with the primary name attribute allowing 250 characters for long names"
6. "I want a new table in my solution — it should have quick create forms enabled from the start"
7. "Create new_booking with change tracking enabled so we can sync it with an external system"
8. "Create a simple custom table new_tag that is organization-owned — we just need a name field"
9. "Add a new entity called new_expense with color #4A90D9 to the FinanceApp solution"
10. "Create a custom entity for project milestones with duplicate detection and feedback enabled"

