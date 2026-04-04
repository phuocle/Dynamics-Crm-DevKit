# build_formxml -- Prompt Validation

## Before Optimization

> 10 user prompts based on the original (verbose) tool description with FIVE OPERATIONS, PARAMETERS, HOW IT WORKS (6 steps), WORKFLOW, WHY USE THIS, and SECTION/TAB COLUMNS detail.

1. "Add the createdon and modifiedon fields to the General section on the account main form"
2. "Add a new tab called Audit Info with a section containing createdon, modifiedon, and createdby"
3. "Add a new section called Contact Details to the General tab on the contact form with emailaddress1 and telephone1"
4. "Register the web resource new_/js/account.js as a library on the account form"
5. "Add an onload event handler called accOnload from new_/js/account.js to the account form"
6. "Add an onchange event handler for the name field that calls onNameChange from new_/js/account.js"
7. "Why should I use build_formxml instead of editing the FormXML manually?"
8. "Add a 2-column section with revenue, telephone1, websiteurl, and fax fields to the account form"
9. "Add the description field to the existing Details section on the lead form"
10. "I want to add a tab with 3 sections -- each section has 2 fields. Can build_formxml handle that?"

## After Optimization

> 10 user prompts based on the optimized description with FIVE OPERATIONS + auto-resolves summary + SECTION/TAB compressed + 2 TIPS.

1. "Add the createdon field to the General section on the account form"
2. "Add a new tab called Audit with sections for dates and ownership fields"
3. "Add a new section called Extra Info to the Summary tab on the contact form"
4. "Register new_/js/account.js as a form library on the account form"
5. "Add an onload event handler accOnload from new_/js/account.js to the account form"
6. "Add an onchange event for the name field calling onNameChange from new_/js/account.js"
7. "Add a 2-column section with revenue, telephone1, websiteurl, fax to the account form"
8. "Add modifiedon and modifiedby fields to the existing Audit section on the lead form"
9. "Add a new tab with one section containing primarycontactid and parentaccountid"
10. "Add the description field as read-only to the Details section on the opportunity form"
