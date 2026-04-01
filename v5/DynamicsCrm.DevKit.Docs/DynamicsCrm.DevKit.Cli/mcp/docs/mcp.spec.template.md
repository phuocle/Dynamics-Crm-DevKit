# MCP Tool: {tool_name}

## Tool #{number} — {category}

## Status: IMPLEMENTED

## Purpose

{One or two sentences describing what the tool does and why it exists.}

## Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| {param_name} | {type} | {Yes/No} | {default_value or —} | {Description of the parameter} |

## Returns

- {Bullet list of what the tool returns to the AI caller.}

## When to Use

- {Bullet list of scenarios where this tool is the right choice.}

## Tips

- {Bullet list of practical tips: related tools to call first, common pitfalls, edge cases.}

## Example Prompts

> Natural-language prompts that would trigger this tool.

| # | Prompt |
|---|--------|
| 1 | "{Example natural-language prompt that a user would say to trigger this tool}" |
| 2 | "{Another example}" |
| 3 | "{Another example}" |
| 4 | "{Another example}" |
| 5 | "{Another example}" |

## Implementation

- **File**: `DynamicsCrm.DevKit.Cli/Mcp/Tools/{ToolName}Tool.cs`
- **ReadOnly**: {Yes/No}
- **Destructive**: {Yes/No}
- **Idempotent**: {Yes/No}

---

<!-- TEMPLATE INSTRUCTIONS (delete this section when using the template)

FIELD REFERENCE:
  {tool_name}    — snake_case tool name (e.g., get_record, execute_fetchxml)
  {number}       — tool number from `devkit mcp --tools` output
  {category}     — one of: Metadata Discovery, Query & Read, Data Operations,
                   Schema Management, UI Customization, Security & Audit,
                   Solution Management, Utility
  {ToolName}     — PascalCase class name (e.g., GetRecord, ExecuteFetchXml)

RULES:
  1. Keep the document SHORT and factual — this is a reference spec, not a proposal
  2. Purpose: 1-2 sentences max
  3. Parameters: one row per parameter, use the exact table format above
  4. Returns: bullet list of key outputs (not full response format)
  5. When to Use: 3-6 bullet points covering the main scenarios
  6. Tips: 3-6 bullet points — related tools, common mistakes, prerequisites
  7. Example Prompts: 5-7 natural-language prompts that a user would say to trigger
     the tool. These help AI understand the tool's intent and mapping from user language
     to tool invocation. Write them as if a real user is asking — conversational, specific.
     IMPORTANT: You MUST call the actual MCP tool (mcp__devkit__{tool_name}) with sample
     inputs to see real output from the live Dataverse environment, then use real entity
     names, field names, and data from the output to craft accurate, grounded prompts.
     Verify MCP server is connected to: https://dynamics-crm-devkit-v4.crm.dynamics.com
  8. Implementation: always include File, ReadOnly, Destructive, Idempotent
  9. Do NOT include: Competitor Analysis, Dataverse API code, Response Format examples,
     McpServerTool Attribute, Tool Description for AI, Pre-requisite,
     Dependency Chain, Execution Flow diagrams — those belong in the proposal/design phase
  10. Category must match one of the categories listed above

-->
