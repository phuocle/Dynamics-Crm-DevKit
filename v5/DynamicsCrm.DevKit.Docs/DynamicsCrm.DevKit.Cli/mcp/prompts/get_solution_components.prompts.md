# get_solution_components -- Prompt Validation

## Before Optimization

> 10 user prompts based on the original (verbose) tool description.
> Original had: RETURNS (solution info, component summary, full component detail, active layers), FUZZY MATCH BEHAVIOR (3 scenarios), FULL ENTITY (Include All Components) BEHAVIOR, ACTIVE LAYER CHECKING, WHEN TO USE.

1. "List all components inside the 'DevKit_Core' solution"
2. "Show me what's in the solution named 'Customer Portal' -- I'm not sure of the exact unique name"
3. "Check which components in the 'SalesAutomation' solution have active customization layers"
4. "Before I deploy the 'FieldServiceExtensions' solution to production, show me everything it contains"
5. "I added the Account entity as 'Include All Components' to my solution -- what does that mean for the component list?"
6. "List only the components with unmanaged active layers in 'ContosoSales' for a cleanup audit"
7. "How many entity components vs. web resource components are in the 'MarketingHub' solution?"
8. "Show me the full component breakdown of a solution -- I think it's called something like 'DevKit'"
9. "I need to verify that my custom API and plugin steps are included in the 'Integration_v2' solution before export"
10. "Compare what's in the 'CoreCustomizations' solution -- are there any components with active layers that shouldn't be there?"

## After Optimization

> 10 user prompts based on the optimized (compressed) tool description.
> After: First sentence + FUZZY MATCH + 2 TIPS.

1. "What components are in the 'DevKit_Core' solution?"
2. "List everything inside a solution called 'Field Service' -- I don't know the exact name"
3. "Show me active layer components in 'SalesAutomation' for cleanup"
4. "Check the 'ContosoPortal' solution components before I export it"
5. "I have a solution with the account entity added as full -- show me its components"
6. "How many different component types are in the 'MarketingHub' solution?"
7. "Filter 'Integration_v2' solution to show only components with unmanaged customizations"
8. "List the solution components for anything matching 'DevKit' in the name"
9. "Show me all entities, web resources, and plugin assemblies in the 'CoreExtensions' solution"
10. "I need a pre-deployment audit of the 'HRModule' solution -- list all components and check for active layers"
