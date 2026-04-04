# get_business_rules --- Prompt Validation

## Before Optimization

> 10 user prompts based on the original (verbose) tool description.

1. "List all business rules for the account entity. I want to see the name, scope, status, and modifiedOn for each rule."
2. "I'm debugging form behavior on the contact entity -- fields are hiding unexpectedly. Can you show me all active business rules that might be causing this?"
3. "Get the full detail for business rule GUID a1b2c3d4-e5f6-7890-abcd-ef1234567890 on the opportunity entity. I need to see the conditions and actions parsed from XAML."
4. "Before I add JavaScript to the lead form, I need to understand what existing client-side logic runs. Show me all business rules on the lead entity."
5. "Are there any draft or deactivated business rules on the incident entity? I need to check for inactive rules that might need cleanup."
6. "I'm checking for conflicts between business rules and form scripts on account. List all business rules so I can audit them."
7. "Show me the business rules on opportunity. I need to understand which ones have 'Entity' scope vs. form-specific scope."
8. "I know business rules run client-side and execute BEFORE JavaScript form events. Can you list all rules on the contact entity so I can trace the execution order?"
9. "What business rules exist on the custom entity new_project? I need to see if any rules are setting field visibility."
10. "Get all active business rules on the account entity. I want to check if any of them are modifying the revenue or status fields."

## After Optimization

> 10 user prompts based on the optimized (compressed) tool description.

1. "What business rules are on the account entity?"
2. "A field on the contact form keeps hiding when I don't expect it to. Show me the business rules."
3. "Get the full detail for business rule a1b2c3d4-e5f6-7890-abcd-ef1234567890 on opportunity -- I need conditions and actions."
4. "Before adding JavaScript to the lead form, what business rules already exist that I might conflict with?"
5. "Are there any draft business rules on the incident entity? I want to find inactive ones."
6. "List all business rules on account. I need to check if any run at Entity scope."
7. "I'm troubleshooting why a required field isn't being enforced on the opportunity form. Check the business rules."
8. "Show me business rules on new_project -- I think one is overriding my form script."
9. "What active business rules modify the statuscode field on contact?"
10. "List all business rules on lead, both active and draft. I need a full audit."
