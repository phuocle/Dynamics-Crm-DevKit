# upsert_form -- Prompt Validation

## Before Optimization

> 10 user prompts based on the original (verbose) tool description with THREE ACTIONS, PARAMETERS, detailed WORKFLOW FOR 'update'/rename/undo sections, SAFETY, and TIPS.

1. "Update the main form on the account entity to add a new tab with two sections"
2. "Rename the default account form from Information to Account Overview"
3. "I just broke the account form -- undo my last change using the backup file"
4. "What is the workflow for safely updating a form? I want to make sure I do not lose anything"
5. "Add the createdon field to the General tab on the contact main form"
6. "Does upsert_form automatically back up the form before making changes?"
7. "I want to update the lead form but skip publishing -- is that possible with auto_publish false?"
8. "Can I validate the FormXML against the XSD schema before writing it to Dataverse?"
9. "Rename the Quick Create form on opportunity from Quick Create to New Deal Form"
10. "Restore the contact form from the backup at .devkit/backups/forms/contact_abc123.formxml.json"

## After Optimization

> 10 user prompts based on the optimized description with THREE ACTIONS + WORKFLOW compressed to 1 sentence each + SAFETY + 2 TIPS.

1. "Update the account main form -- add the websiteurl field to the General section"
2. "Rename the account form from Information to Account Details"
3. "Undo the last form change on contact using the backup file"
4. "Add a new section with createdon and modifiedon fields to the lead main form"
5. "Does upsert_form create a backup automatically before overwriting?"
6. "Update the opportunity form but skip publishing for now"
7. "I need to restore the form from .devkit/backups/forms/account_xyz.formxml.json"
8. "Rename the Quick Create form on incident to New Case Entry"
9. "Validate my FormXML before writing it -- will upsert_form check the schema?"
10. "Update the contact form to remove a field and then publish immediately"
