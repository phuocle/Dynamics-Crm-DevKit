# get_global_optionsets --- Prompt Validation

## Before Optimization

> 10 user prompts based on the original (verbose) tool description.

1. "I need to know the valid values for a global choice column. Can you return a summary markdown table of ALL global option sets showing name, displayName, type, and isGlobal?"
2. "Show me the detailed options for the global option set named 'socialprofile_community'. I need the value (integer), label (display text), and description for each option."
3. "I'm building a FetchXML filter on an option set field and I need the integer values. What are the options for the 'componentstate' global option set?"
4. "I ran get_metadata_entities and it shows a column is PicklistType but the options are empty. This means it references a global option set. Can you retrieve the values for 'workflow_stage'?"
5. "I see an integer value 100000002 in my query results for a global picklist field. I need to map it to a label. Show me all global option sets so I can find the right one."
6. "List every global option set in this environment. I need the summary with name, displayName, and type columns."
7. "What are the available options for the global option set 'budgetstatus'? I need the integer values for my plugin code."
8. "I'm looking at an entity attribute that references a global option set but I don't know which one. Can you list all global option sets so I can search by display name?"
9. "Retrieve the global option set 'incident_caseorigincode'. I need to know all possible case origin values and their labels."
10. "NOTE: I know this retrieves GLOBAL option sets only. For entity-specific local picklists, I should use get_metadata_entities. But for now, show me all global option sets."

## After Optimization

> 10 user prompts based on the optimized (compressed) tool description.

1. "List all global option sets in this environment."
2. "What are the values for the 'socialprofile_community' global option set?"
3. "I need the integer codes for 'budgetstatus' to use in a FetchXML filter condition."
4. "A picklist column on lead came back with empty options from get_metadata_entities. It must be a global option set -- can you find it?"
5. "What does the integer value 3 mean in the 'componentstate' option set?"
6. "Show me all case origin codes from the global option set."
7. "I'm writing a plugin and need to know the valid choice values for workflow stage. Look up the global option set."
8. "Are there any global option sets related to 'priority' in this environment? List them all so I can search."
9. "Get the options for 'incident_caseorigincode' -- I need label and value for each."
10. "My FetchXML returns statecode as an integer. Is that a global option set or entity-specific? Check for me."
