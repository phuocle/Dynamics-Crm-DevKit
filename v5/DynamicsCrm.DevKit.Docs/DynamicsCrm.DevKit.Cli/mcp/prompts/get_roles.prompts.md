# get_roles -- Prompt Validation

## Before Optimization

> 10 user prompts based on the original (verbose) tool description.
> Original had: THREE MODES (user_id, role_id, both empty), PARAMETERS (user_id, role_id, role_name, business_unit_id, entity_name, max_records), RETURNS (user/detail/list), WHEN TO USE (6 bullets), TIPS (5).

1. "List all security roles in this environment"
2. "A user reports 'access denied' when opening accounts -- check what roles john@contoso.com has and whether they include account permissions"
3. "Show me all the privileges that the 'Sales Manager' role grants"
4. "What security roles does the user admin@contoso.com have assigned?"
5. "Compare the account entity privileges between the 'Salesperson' and 'Sales Manager' roles"
6. "Check if the 'Customer Service Representative' role has delete access on the incident entity"
7. "List all roles that have 'Sales' in the name"
8. "Show me what the role with ID a1b2c3d4-e5f6-7890-abcd-ef1234567890 can do on the opportunity entity"
9. "A user can't see leads -- check their security roles and effective permissions on the lead entity"
10. "I'm setting up a new custom entity -- which roles currently exist so I know what to configure?"

## After Optimization

> 10 user prompts based on the optimized (compressed) tool description.
> After: First sentence + THREE MODES + 2 TIPS.

1. "List all security roles in this environment"
2. "User john@contoso.com gets access denied on accounts -- check their roles and account permissions"
3. "Show me the privileges granted by the 'Sales Manager' role"
4. "What roles does admin@contoso.com have?"
5. "Check whether 'Salesperson' has delete access on the opportunity entity"
6. "List all roles with 'Service' in the name"
7. "Show me the full privilege breakdown for role ID a1b2c3d4-e5f6-7890-abcd-ef1234567890"
8. "What are the effective account permissions for user sarah@contoso.com across all her roles?"
9. "A user can't create contacts -- check their security role configuration for the contact entity"
10. "I need to audit security roles before going live -- list all root roles and their privilege depths"
