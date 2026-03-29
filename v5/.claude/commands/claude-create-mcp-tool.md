---
description: "Create a new MCP tool for the DevKit CLI"
---

# Create New MCP Tool

This workflow guides you through creating a new MCP tool for `devkit mcp`.

> [!CAUTION]
> **REQUIRED ARGUMENTS (2):**
> 1. **Tool name** — natural language (e.g. "execute web api", "get user roles") → you convert to snake_case (e.g. `execute_webapi`, `get_user_roles`)
> 2. **Spec file** — path to a `.md` file describing the tool behavior and parameters
>
> If EITHER argument is missing, **STOP IMMEDIATELY** and show this error:
> ```
> Error: /create-mcp-tool requires 2 arguments:
>   1. Tool name (natural language, e.g. "execute web api")
>   2. Spec file path (e.g. "docs/my-tool-spec.md")
>
> Usage: /create-mcp-tool <tool_name> <spec_file>
> ```

---

## Pre-flight: Validate Arguments

1. Convert tool name from natural language to `snake_case` (lowercase, underscores). Example: "Execute Web API" → `execute_webapi`
2. Verify the spec file exists — if not, stop and report error
3. Read the spec file to understand the tool's purpose, parameters, and expected output
4. Verify no existing tool has the same name — check all files in `DynamicsCrm.DevKit.Cli\Mcp\Tools\*Tool.cs` for duplicate `Name = "..."` in `[McpServerTool]`

---

## Step 1: Read Existing Patterns

Before writing any code, read these reference files to understand the established patterns:

| File | Why |
|------|-----|
| `DynamicsCrm.DevKit.Cli\Mcp\Tools\GetRecordTool.cs` | Read-only tool pattern (returns `string`) |
| `DynamicsCrm.DevKit.Cli\Mcp\Tools\CreateRecordTool.cs` | Write tool pattern (returns `CallToolResult` with `StructuredContent`) |
| `DynamicsCrm.DevKit.Cli\Mcp\Tools\WhoAmITool.cs` | Complex tool with structured output model |
| `DynamicsCrm.DevKit.Cli\Mcp\Tools\Helper\CompactFormatter.cs` | Compact output formatting helpers |
| `DynamicsCrm.DevKit.Cli\Mcp\Tools\Models\StructuredResults.cs` | Structured output model classes |

---

## Step 2: Create the Tool Class

Create file: `DynamicsCrm.DevKit.Cli\Mcp\Tools\{ToolName}Tool.cs`

**MANDATORY patterns to follow:**

### Class Structure
```csharp
using Microsoft.PowerPlatform.Dataverse.Client;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.ComponentModel;
// ... other using statements as needed

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class {ToolName}Tool
    {
        private readonly ServiceClient _serviceClient;

        public {ToolName}Tool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "{snake_case_name}", ...),
        Description("...")]
        public ... {snake_case_name}(...)
        {
            // implementation
        }
    }
}
```

### McpServerTool Attribute Rules

| Property | When to use |
|----------|-------------|
| `Idempotent = true` | Read-only tools that return the same result for same input |
| `Destructive = true` | Tools that delete data (e.g. delete_record) |
| `ReadOnly = true` | Tools that only read data |
| `ReadOnly = false` | Tools that create/update/delete data |
| `UseStructuredContent = true` | Tools that return `CallToolResult` with structured JSON |
| `OutputSchemaType = typeof(Model)` | Pair with `UseStructuredContent` — specify the model class |

### Return Type Rules

| Tool Type | Return Type | When |
|-----------|-------------|------|
| Read-only, text output | `string` | Simple text output (most read tools) |
| Write/structured output | `CallToolResult` | CRUD tools or tools needing structured JSON output |

### Description Rules (CRITICAL for AI consumption)

The `[Description]` attribute is what AI agents read to decide when and how to call the tool. It MUST include:

1. **One-line summary** — what the tool does
2. **PARAMETERS section** — list each parameter with type and purpose
3. **RETURNS section** — what the output contains
4. **WHEN TO USE section** — scenarios where this tool is appropriate
5. **EXAMPLES section** — concrete usage examples
6. **TIPS section** — common pitfalls, related tools to call first

### Parameter Description Rules

Each parameter MUST have a `[Description("...")]` with:
- What the parameter is
- Format/type expected
- Examples of valid values
- What to call if unsure (e.g. "call get_entity_metadata first")

---

## Step 3: Output Format (CRITICAL — Token Optimization)

> [!CAUTION]
> **ALL tool output MUST use the Compact format, NOT Markdown.**
> This is critical for token optimization (~44% savings).

### Compact Format Rules

| Data Type | Format | Example |
|-----------|--------|---------|
| Single record | Key-Value (`key: value`) | `UserId: abc-123` |
| Table/list | TSV (tab-separated) | `Name\tType\tRequired` |
| Section headers | `[Section Name]` | `[User]`, `[Attributes] 164 total` |
| Counts | Inline in header | `[Roles] 3 total` |

### Use CompactFormatter Helpers

Reference `DynamicsCrm.DevKit.Cli\Mcp\Tools\Helper\CompactFormatter.cs` for existing helpers:
- `CompactFormatter.FormatFetchXmlResults()` — for query results
- `CompactFormatter.FormatEntityMetadata()` — for metadata
- Add new static methods to CompactFormatter if needed for your tool's output

### DO NOT use:
- Markdown tables (`| col1 | col2 |`)
- Markdown headers (`## Section`)
- Markdown bold/italic (`**text**`)
- Horizontal rules (`---`)

---

## Step 4: Create Structured Output Model (if tool returns CallToolResult)

If the tool uses `UseStructuredContent = true`, add a model class to:
`DynamicsCrm.DevKit.Cli\Mcp\Tools\Models\StructuredResults.cs`

**Pattern:**
```csharp
internal sealed class YourToolResult
{
    [JsonPropertyName("fieldName")]
    public string FieldName { get; set; }

    [JsonPropertyName("optionalField")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public string OptionalField { get; set; }
}
```

**Return pattern:**
```csharp
return new CallToolResult
{
    Content = [new TextContentBlock { Text = compactText }],
    StructuredContent = JsonSerializer.SerializeToElement(structured)
};
```

**Error pattern:**
```csharp
private static CallToolResult ErrorResult(string message) => new()
{
    Content = [new TextContentBlock { Text = message }],
    IsError = true
};
```

---

## Step 5: Update Help Text and Tool Count

### 5a. Update tool count in `SpectreLog.cs`

File: `DynamicsCrm.DevKit.Cli\Logging\SpectreLog.cs`

Search for the current tool count (e.g. `12 tools`) and increment it. There are **2 occurrences** (plain text and Spectre markup):
- Line with `"12 tools: metadata, CRUD, FetchXML, search"` — update count and categories if needed

### 5b. Update `AGENTS.md`

File: `AGENTS.md`

Update these 2 locations:
1. `Mcp/ → MCP server (12 Dataverse tools)` — increment the count
2. `### MCP Tools (12)` section — increment count and add the new tool name to the list

---

## Step 6: Update `.vscode/mcp.json` (if needed)

Only update if the new tool requires new environment variables or connection parameters. Most tools reuse the existing `ServiceClient` and don't need config changes.

---

## Step 7: Build and Install CLI as Global Tool

> [!CAUTION]
> **NEVER** run `dotnet build` or `dotnet pack` directly.
> **ALWAYS** use `/claude-build-cli` to build the CLI. This protects `Const.cs` from being modified.

Run `/claude-build-cli` and verify:
- Build succeeded with 0 errors, 0 warnings
- `devkit --version` shows correct version
- `Const.cs` is NOT modified (still has `x.xx.xx.xx` placeholder)

---

## Step 8: Production Runtime Test (MANDATORY)

> [!CAUTION]
> **This step is MANDATORY — do NOT skip it.**
> The purpose is to verify the tool works in the **real installed `devkit` CLI** (the global tool installed by `/claude-build-cli` in Step 7), NOT just that the code compiles.
> This catches issues that a `dotnet build` alone cannot: DI registration, serialization, ServiceClient wiring, MCP protocol compliance, etc.

### How to test

Use the **installed `devkit` CLI** (global tool) to run the MCP server and invoke the new tool via MCP stdio protocol:

```json
{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"{snake_case_name}","arguments":{...}}}
```

### What to verify

- Tool executes without errors on the **installed global `devkit mcp`** runtime
- Output uses compact format (Key-Value or TSV, NOT Markdown)
- Structured content is present (if applicable)
- Error handling works (test with invalid parameters)

### Why this matters

`/claude-build-cli` builds, packs, and installs the CLI as a .NET global tool. This step ensures the new MCP tool works end-to-end in that installed runtime — the same runtime users and AI agents will use in production. A passing `dotnet build` only proves compilation; this step proves the tool actually works.

---

## Step 9: Save Spec File to Docs

Copy or move the spec file to: `DynamicsCrm.DevKit.Docs\DynamicsCrm.DevKit.Cli\mcp\`

This ensures the tool's design spec is preserved with the project documentation.

---

## Final Checklist

- [ ] Tool class created in `Mcp\Tools\{ToolName}Tool.cs`
- [ ] `[McpServerToolType]` class attribute present
- [ ] `[McpServerTool(Name = "...")]` with correct properties
- [ ] `[Description]` has PARAMETERS, RETURNS, WHEN TO USE, EXAMPLES, TIPS sections
- [ ] All parameters have `[Description]` attributes
- [ ] Constructor injects `ServiceClient` (variable name: `_serviceClient`)
- [ ] Output uses **Compact format** (Key-Value/TSV), NOT Markdown
- [ ] Structured output model added to `StructuredResults.cs` (if using `CallToolResult`)
- [ ] Tool count updated in `SpectreLog.cs` (2 places)
- [ ] Tool count and name updated in `AGENTS.md` (2 places)
- [ ] `/claude-build-cli` succeeded with 0 errors
- [ ] **Production runtime test**: tool tested via **installed `devkit mcp`** (global tool) and output verified
- [ ] Spec file saved to `DynamicsCrm.DevKit.Docs\DynamicsCrm.DevKit.Cli\mcp\`
- [ ] `Const.cs` is clean (still has `x.xx.xx.xx` placeholder)
