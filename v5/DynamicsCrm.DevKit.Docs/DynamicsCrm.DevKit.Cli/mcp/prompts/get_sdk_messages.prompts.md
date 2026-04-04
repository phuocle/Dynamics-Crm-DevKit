# get_sdk_messages --- Prompt Validation

## Before Optimization

> 10 user prompts based on the original (verbose) tool description.

1. "I'm building a plugin for the account entity and need to know which SDK messages are available. Show me the standard platform messages like Create, Update, Delete, Retrieve, RetrieveMultiple, Associate, Disassociate, SetState, and Assign."
2. "What Custom Actions are registered for the contact entity? I need to discover organization-defined actions in addition to standard SDK messages."
3. "I need to register a plugin step and want to verify message availability for the opportunity entity. Can you return all SDK messages and Custom Actions?"
4. "Show me the global messages that are not bound to any entity, like WhoAmI and RetrieveCurrentOrganization. Use 'none' as the entity name."
5. "What operations can be performed on the lead entity? I need a markdown report with counts and categorized message lists for both SDK Messages and Custom Actions."
6. "I'm exploring what messages are available for the incident (case) entity. Return the summary table with category counts and the full message lists."
7. "Before registering a plugin on the Delete message for the annotation entity, verify that Delete is an available SDK message for annotations."
8. "For Custom APIs, I know I should use the get_apis tool. But for now, show me the Custom Action messages on the account entity."
9. "I'm documenting the event pipeline for the opportunity entity. List all available SDK messages and Custom Actions for that entity."
10. "What SDK messages are available for a custom entity new_project? I need to check if SetState and Assign are supported."

## After Optimization

> 10 user prompts based on the optimized (compressed) tool description.

1. "What SDK messages are available for the account entity?"
2. "Show me Custom Actions registered on contact."
3. "I'm registering a plugin on opportunity Update. Verify that message is available."
4. "List all global messages not bound to any entity."
5. "What messages can I register plugin steps on for the lead entity?"
6. "Are Assign and SetState available for the incident entity?"
7. "I need to see both SDK messages and Custom Actions for annotation. List them."
8. "What operations are supported on my custom entity new_project?"
9. "Before I write a plugin for Delete on email, confirm that message exists."
10. "Show me the full message list for opportunity -- I need to plan which pipeline events to hook into."
