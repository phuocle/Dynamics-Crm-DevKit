# get_bpfs — Prompt Validation

## Before Optimization

> 10 user prompts based on the original (verbose) tool description with TWO MODES, PARAMETERS, RETURNS, WHEN TO USE, RELATIONSHIP, TIPS.

1. "What Business Process Flows are available in this environment?"
2. "Show me the stages of the Lead to Opportunity Sales Process"
3. "Which BPFs are configured for the opportunity entity?"
4. "Are there any draft or inactive BPFs I should know about?"
5. "List all BPFs with their stages included so I can see the full picture"
6. "What entities does the Phone to Case Process BPF span across its stages?"
7. "Show me the details of BPF with ID a1b2c3d4-e5f6-7890-abcd-ef1234567890"
8. "How many active BPFs are there in total across all entities?"
9. "I need to understand the Case Resolution BPF — show me its stages and which entity each stage belongs to"
10. "Are there any BPFs on the contact entity? I want to check before adding a new one"

## After Optimization

> 10 user prompts based on the optimized (compressed) tool description with TWO MODES + 2 TIPS.

1. "List all active Business Process Flows in the environment"
2. "Show me the stages of the Lead to Opportunity Sales Process"
3. "Which BPFs are on the opportunity entity?"
4. "Are there any draft BPFs?"
5. "List all BPFs and include their stages"
6. "What entities does the Phone to Case Process span?"
7. "Show details for BPF a1b2c3d4-e5f6-7890-abcd-ef1234567890"
8. "How many active BPFs exist in this environment?"
9. "Show me the Case Resolution BPF stages with the primary entity for each"
10. "Are there any BPFs configured on the contact entity?"

