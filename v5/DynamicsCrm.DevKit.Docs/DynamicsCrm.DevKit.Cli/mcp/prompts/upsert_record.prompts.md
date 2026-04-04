# upsert_record -- Prompt Validation

## Before Optimization

> 10 user prompts based on the original (verbose) tool description with BEHAVIOR, PARAMETERS, 10 FIELD VALUE TYPES, 3 EXAMPLES, and 4 TIPS.

1. "Create a new account record with the name Contoso Ltd and revenue of 1000000"
2. "Update the phone number on contact a1b2c3d4-e5f6-7890-abcd-ef1234567890 to 555-0123"
3. "Set the primarycontactid lookup on account xyz to point to contact abc"
4. "How do I set a polymorphic Customer lookup? I need to set customerid on an opportunity to an account"
5. "Create a new lead with firstname John, lastname Smith, and emailaddress1 john@example.com"
6. "Update the statuscode picklist field on case 12345 to the integer value 2"
7. "Set the scheduledend datetime field on a task record to 2026-06-15T14:00:00"
8. "I want to upsert -- create the account if it does not exist or update it if it does, using a specific GUID"
9. "Clear the description field on opportunity xyz by setting it to null"
10. "Create a record on the custom entity new_project with a multi-select picklist field new_tags set to values 100000001 and 100000003"

## After Optimization

> 10 user prompts based on the optimized description with BEHAVIOR + FIELD VALUE TYPES + 2 EXAMPLES + 2 TIPS.

1. "Create a new account named Fabrikam Inc with revenue 500000"
2. "Update the emailaddress1 on contact e7f8a9b0-1234-5678-9abc-def012345678"
3. "Set the primarycontactid lookup on this account to point to contact guid abc123"
4. "Set a Customer lookup: customerid on opportunity should point to account a1b2c3d4"
5. "Create a lead with firstname Jane, lastname Doe, and companyname Northwind"
6. "Change the statuscode on incident record xyz to 100000001"
7. "Set scheduledstart on task to 2026-07-01 and the boolean new_urgent to true"
8. "Upsert account with GUID 11111111-2222-3333-4444-555555555555 -- create if missing, update if exists"
9. "Set the description field to null on this opportunity to clear it"
10. "Create a new_project record with new_categories multi-select set to [100000000, 100000002]"
