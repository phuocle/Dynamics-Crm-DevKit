# get_record --- Prompt Validation

## Before Optimization

> 10 user prompts based on the original (verbose) tool description.

1. "I have an account record ID a1b2c3d4-e5f6-7890-abcd-ef1234567890 from a previous FetchXML query. Can you retrieve its full details including all fields?"
2. "Get the contact record 91330924-802a-4b0d-a900-34fd9d790829 but only return the fullname, emailaddress1, and telephone1 columns."
3. "I need to inspect a specific opportunity without writing FetchXML. The entity is 'opportunity' and the ID is b2c3d4e5-f6a7-8901-bcde-f12345678901."
4. "Before I update this lead, I want to verify it exists first. Can you retrieve lead c3d4e5f6-a7b8-9012-cdef-123456789012?"
5. "After my FetchXML returned a list of account IDs, I need the complete field values for account d4e5f6a7-b8c9-0123-defa-234567890123. Show me everything."
6. "Get the record details for incident (case) e5f6a7b8-c9d0-1234-efab-345678901234. I only want the title, ticketnumber, and statuscode fields."
7. "Retrieve the systemuser record f6a7b8c9-d0e1-2345-fabc-456789012345. I need to check their businessunitid and security roles."
8. "I need to look up what's stored in the custom entity new_project for record a7b8c9d0-e1f2-3456-abcd-567890123456. Return all columns."
9. "Can you pull the annotation record b8c9d0e1-f2a3-4567-bcde-678901234567? I want to see the subject, notetext, and objectid."
10. "I ran a search and found a matching contact. Now get the full record for contact 12345678-abcd-ef01-2345-6789abcdef01 with all available columns."

## After Optimization

> 10 user prompts based on the optimized (compressed) tool description.

1. "Get account a1b2c3d4-e5f6-7890-abcd-ef1234567890 -- show me all fields."
2. "Retrieve contact 91330924-802a-4b0d-a900-34fd9d790829, only name and email."
3. "My FetchXML returned this opportunity ID: b2c3d4e5-f6a7-8901-bcde-f12345678901. Pull the full record."
4. "Does lead c3d4e5f6-a7b8-9012-cdef-123456789012 exist? Get it so I can check before deleting."
5. "Show me the case details for incident e5f6a7b8-c9d0-1234-efab-345678901234. Just title and status."
6. "I need to check the owner of account d4e5f6a7-b8c9-0123-defa-234567890123. Get the ownerid column."
7. "Look up this user record: systemuser f6a7b8c9-d0e1-2345-fabc-456789012345."
8. "Get new_project a7b8c9d0-e1f2-3456-abcd-567890123456 with columns new_name, new_status, createdon."
9. "Retrieve the email activity record b8c9d0e1-f2a3-4567-bcde-678901234567 so I can see the subject and sender."
10. "I found a duplicate contact 12345678-abcd-ef01-2345-6789abcdef01. Pull its record so I can compare fields before merging."
