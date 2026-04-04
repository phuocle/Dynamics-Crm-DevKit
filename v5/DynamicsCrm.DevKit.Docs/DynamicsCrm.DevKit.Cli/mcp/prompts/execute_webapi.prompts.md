# execute_webapi -- Prompt Validation

## Before Optimization

> 10 user prompts based on the original (verbose) tool description with WHEN TO USE, BLOCKED OPERATIONS (9 items), URL PARAMETER, and EXAMPLES.

1. "Query the OneToManyRelationshipMetadata for the account entity to see all its 1:N relationships"
2. "Get the display name and collection name for the contact entity from EntityDefinitions"
3. "Call the WhoAmI function using the Web API to check my current user"
4. "Can I update a system form using execute_webapi or is that blocked?"
5. "Execute a custom unbound action called new_ProcessOrder with a JSON body"
6. "Fetch the $metadata CSDL document to understand the full schema"
7. "Update a ManyToManyRelationshipMetadata using PUT with MSCRM.MergeLabels header"
8. "I want to publish customizations via execute_webapi -- is PublishXml allowed?"
9. "Query EntityDefinitions for account and select only LogicalName and DisplayName"
10. "Delete an environment variable value record -- is that blocked or can I use execute_webapi?"

## After Optimization

> 10 user prompts based on the optimized description with first sentence + WHEN TO USE + BLOCKED OPERATIONS (kept full) + 2 EXAMPLES.

1. "Get the 1:N relationship metadata for the account entity via Web API"
2. "Fetch the DisplayName and DisplayCollectionName from EntityDefinitions for lead"
3. "Is updating a system form via execute_webapi blocked? I need to update formxml"
4. "Call a custom action new_ApproveOrder via POST using execute_webapi"
5. "Query the $metadata endpoint to inspect the Dataverse schema"
6. "Update a relationship definition using PUT with the MergeLabels header"
7. "Can I use execute_webapi to call PublishXml or do I need a different tool?"
8. "GET the RelationshipDefinitions filtered by ReferencedEntity eq opportunity"
9. "Is deleting an environmentvariablevalue record blocked by execute_webapi?"
10. "Create a new global option set using POST to GlobalOptionSetDefinitions"
