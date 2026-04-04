# get_metadata_entities -- Prompt Validation

## Before Optimization

> 10 user prompts based on the original (verbose) tool description with TWO MODES, PARAMETERS, HOW TO USE RELATIONSHIPS IN FETCHXML, COMMON NAME MAPPINGS, and WHEN TO USE.

1. "List all custom entities in this Dataverse environment"
2. "Show me the full metadata for the account entity including all attributes and relationships"
3. "What is the logical name for the Case entity in Dataverse?"
4. "I need to write a FetchXML join from account to contact -- what columns do I use for the link-entity?"
5. "Show me all N:N relationships on the opportunity entity"
6. "What are the picklist options for the statuscode field on the lead entity?"
7. "Is the annotation entity the same as Notes in Dynamics 365?"
8. "Filter the entity list to show only entities with the msdyn_ prefix"
9. "What is the primary name attribute and primary ID attribute for the incident entity?"
10. "Show me all lookup fields on the contact entity and what entities they point to"

## After Optimization

> 10 user prompts based on the optimized description with first sentence + TWO MODES + HOW TO USE RELATIONSHIPS + COMMON MAPPINGS + 2 WHEN TO USE.

1. "List all entities in this environment -- just the summary table"
2. "Show me the full detail for the account entity with attributes and relationships"
3. "What is the logical name for Case in Dynamics 365?"
4. "How do I join account to contact in FetchXML? What are the from and to columns?"
5. "Show me all relationships on the opportunity entity"
6. "What picklist options does the statuscode field have on lead?"
7. "List all custom entities with the new_ prefix"
8. "What are the alternate keys defined on the contact entity?"
9. "Show me the lookup targets for all lookup fields on incident"
10. "I need the entitySetName for account to build a Web API URL"
