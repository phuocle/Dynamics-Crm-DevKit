---
description: ""Rewrite an MCP tool doc to match the spec template format""
mode: agent
---

# Create MCP Doc

Rewrite an MCP tool `.md` file to match the standard spec template.

> [!CAUTION]
> **REQUIRED ARGUMENT (1):**
> 1. **File path** — path to a `.md` file containing raw/natural-language MCP tool description
>
> If the argument is missing, **STOP IMMEDIATELY** and show this error:
> ```
> Error: /create-mcp-doc requires 1 argument:
>   File path (e.g. "DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit.Cli/mcp/29.my_tool.md")
>
> Usage: /create-mcp-doc <file_path>
> ```

---

## Step 1: Validate Input

1. Verify the file exists — if not, stop and report error
2. Read the input file content

---

## Step 2: Read the Template

Read the template file at:
```
DynamicsCrm.DevKit.Docs\DynamicsCrm.DevKit.Cli\mcp\docs\mcp.spec.template.md
```

---

## Step 3: Call the Live MCP Tool

> [!IMPORTANT]
> This step is MANDATORY for generating accurate Example Prompts.

1. Verify the MCP server is connected by calling `mcp__devkit__whoami` — confirm the URL is `https://dynamics-crm-devkit-v4.crm.dynamics.com`
2. Call the actual MCP tool (`mcp__devkit__{tool_name}`) with 2-3 sample inputs to see real output
   - Use different parameter combinations to understand the tool's behavior
   - Note real entity names, field names, record data from the output
3. Use this real data to craft grounded, accurate Example Prompts in the next step

**Example:** For `get_metadata_entities`, call:
- `mcp__devkit__get_metadata_entities` with `filter="account"` — see real entity names
- `mcp__devkit__get_metadata_entities` with `custom_only=true` — see custom entities with prefixes

---

## Step 4: Analyze and Extract

From the input file (which may be written in natural language, rough notes, or any format), extract:

| Field | How to Determine |
|-------|-----------------|
| `tool_name` | Look for snake_case name, MCP tool name, or derive from context |
| `number` | Look for tool number, or leave as `{number}` if not specified |
| `category` | Classify as one of: Metadata Discovery, Query & Read, Data Operations, Schema Management, UI Customization, Security & Audit, Solution Management, Utility |
| `Purpose` | Summarize the core purpose in 1-2 sentences |
| `Parameters` | Extract all parameters with type, required, default, description |
| `Returns` | Summarize what the tool returns |
| `When to Use` | Extract or infer 3-6 use-case scenarios |
| `Tips` | Extract or infer practical tips, related tools, pitfalls |
| `Example Prompts` | Extract or generate 5-7 natural-language prompts a user would say to trigger this tool |
| `Implementation` | Extract File path, ReadOnly, Destructive, Idempotent flags |

**If information is missing or ambiguous:**
- For `Purpose`: synthesize from available context
- For `Parameters`: if the file mentions fields/inputs but not in table format, convert them
- For `Returns`: infer from purpose and parameters
- For `When to Use` / `Tips`: generate sensible defaults based on the tool's purpose
- For `Example Prompts`: use real data from Step 3 (live MCP tool calls) to craft 5-7 grounded, conversational prompts referencing actual entity names, fields, or data from the environment
- For `Implementation`: derive `{ToolName}Tool.cs` from tool_name (snake_case to PascalCase), set ReadOnly/Destructive/Idempotent based on tool behavior

---

## Step 5: Apply Template and Overwrite

1. Fill in the template with all extracted fields
2. Remove the `<!-- TEMPLATE INSTRUCTIONS -->` comment block from the output
3. **Overwrite** the input file with the formatted result
4. Report what was done

---

## Rules

- The output MUST follow the exact section order from the template: Title, Tool #, Status, Purpose, Parameters, Returns, When to Use, Tips, Example Prompts, Implementation
- Do NOT add extra sections (no Competitor Analysis, no Dataverse API code, no McpServerTool Attribute, no Execution Flow diagrams)
- Keep it SHORT and factual — this is a reference spec, not a proposal
- If the input file is already in the correct format, still normalize it to match the template exactly
