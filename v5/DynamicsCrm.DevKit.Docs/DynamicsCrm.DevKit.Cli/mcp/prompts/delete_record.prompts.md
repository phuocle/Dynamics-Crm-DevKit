# delete_record --- Prompt Validation

## Before Optimization

> 10 user prompts based on the original (verbose) tool description.

1. "Delete the account record with GUID a1b2c3d4-e5f6-7890-abcd-ef1234567890 from the account table."
2. "I need to remove a contact record. The entity name is 'contact' and the record_id is 91330924-802a-4b0d-a900-34fd9d790829. Please delete it."
3. "Before deleting, can you first verify that the lead record b2c3d4e5-f6a7-8901-bcde-f12345678901 exists and confirm it's the right one?"
4. "Delete an opportunity record. Warning: I know this is permanent and cannot be undone. The ID is c3d4e5f6-a7b8-9012-cdef-123456789012."
5. "I want to delete a task record but I'm worried about dependencies. Can you check if there are child records first, then delete task d4e5f6a7-b8c9-0123-defa-234567890123?"
6. "Remove the annotation (note) with ID e5f6a7b8-c9d0-1234-efab-345678901234 from Dataverse."
7. "I have a test account I created by mistake. Entity: account, ID: f6a7b8c9-d0e1-2345-fabc-456789012345. Delete it permanently."
8. "Can you delete this email activity record? The record_id is a7b8c9d0-e1f2-3456-abcd-567890123456 and entity is email."
9. "I need to clean up some test data. Delete the custom entity record new_project with ID b8c9d0e1-f2a3-4567-bcde-678901234567."
10. "Delete the incident (case) record 12345678-abcd-ef01-2345-6789abcdef01. I understand this might cascade-delete child records depending on relationship configuration."

## After Optimization

> 10 user prompts based on the optimized (compressed) tool description.

1. "Delete account a1b2c3d4-e5f6-7890-abcd-ef1234567890."
2. "Remove this contact from Dataverse: 91330924-802a-4b0d-a900-34fd9d790829."
3. "I need to delete a lead but want to verify it's the right one first. ID is b2c3d4e5-f6a7-8901-bcde-f12345678901."
4. "Delete the opportunity c3d4e5f6-a7b8-9012-cdef-123456789012. Will this cascade to related quote records?"
5. "Clean up test data: delete new_project record d4e5f6a7-b8c9-0123-defa-234567890123."
6. "I accidentally created a duplicate case. Delete incident e5f6a7b8-c9d0-1234-efab-345678901234."
7. "Remove task f6a7b8c9-d0e1-2345-fabc-456789012345 from the system."
8. "Delete the phonecall activity a7b8c9d0-e1f2-3456-abcd-567890123456."
9. "First look up the account named 'Test Corp', then delete it if you find exactly one match."
10. "I need to delete an annotation. The GUID is b8c9d0e1-f2a3-4567-bcde-678901234567. Check for dependencies before proceeding."
