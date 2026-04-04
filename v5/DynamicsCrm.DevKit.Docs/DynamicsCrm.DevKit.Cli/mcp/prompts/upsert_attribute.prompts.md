# upsert_attribute — Prompt Validation

## Before Optimization

> 10 user prompts based on the original (verbose) tool description with CREATE MODE, UPDATE MODE, PARAMETERS (24 items!), RETURNS, TIPS.

1. "Add a new string column called new_projectcode to the account entity with a max length of 50 characters"
2. "Create a lookup field new_primarycontactid on the opportunity entity that points to the contact table"
3. "Add a picklist column new_priority to the incident entity with options: Low (100000000), Medium (100000001), High (100000002)"
4. "Update the existing new_priority picklist on incident to add a new option 'Critical' with value 100000003"
5. "Create a money field new_budget on the opportunity entity with 2 decimal places and min value 0"
6. "Change the requirement level of the new_projectcode field on account from None to Required"
7. "Add a boolean column new_isactive to the new_project entity with labels 'Active' and 'Inactive'"
8. "Create a datetime column new_duedate on the task entity with DateOnly format"
9. "Remove the option value 100000002 from the new_priority picklist on the incident entity"
10. "Add a customer lookup field new_billingcustomer to the new_invoice entity that can reference both account and contact"

## After Optimization

> 10 user prompts based on the optimized (compressed) tool description with CREATE MODE + UPDATE MODE + 2 TIPS.

1. "Add a string column new_projectcode to account with max length 50"
2. "Create a lookup new_managerid on new_project pointing to the systemuser entity"
3. "Add a picklist new_status to new_timeentry with options: Draft, Submitted, Approved, Rejected"
4. "Update the new_status picklist on new_timeentry — add a new option 'Cancelled'"
5. "Create a money column new_estimatedcost on opportunity with precision 2"
6. "Make the new_projectcode field on account required instead of optional"
7. "Add a boolean field new_billable to new_timeentry with labels 'Billable' and 'Non-Billable'"
8. "Create a DateOnly field new_startdate on the new_project entity"
9. "Rename the option label from 'Draft' to 'New' on the new_status picklist on new_timeentry"
10. "Delete option values 100000003 and 100000004 from the new_priority field on incident"

