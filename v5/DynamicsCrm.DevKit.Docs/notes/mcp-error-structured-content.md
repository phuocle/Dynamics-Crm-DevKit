# MCP Error: Structured Content Investigation

> **Goal of this file:** let another AI / MCP client (e.g. GitHub Copilot in VS Code,
> Claude Desktop, MCP Inspector) run the test call below and tell us whether it can
> read the **structured content** of an **error** result (`isError: true`).
> If your client exposes structured content on errors, paste what you receive into the
> "Your findings" section at the bottom.

## Context — why this matters

This project ships a custom MCP server (`devkit-claude`, a Dataverse CLI). Every tool
result is built through a shared factory `McpToolResults` and returns a standard MCP
`CallToolResult` with **three** fields:

| Field | JSON key | Purpose |
|-------|----------|---------|
| `Content` | `content` | `TextContentBlock` — human/AI-readable plain text |
| `StructuredContent` | `structuredContent` | machine-readable JSON (the tool's DTO) |
| `IsError` | `isError` | `true` = tool execution failed, `false` = success |

The C# SDK is `ModelContextProtocol` 2.2.0
([source](https://github.com/modelcontextprotocol/csharp-sdk/blob/main/src/ModelContextProtocol.Core/Protocol/CallToolResult.cs)).
Per the [MCP spec (2025-06-18)](https://modelcontextprotocol.io/specification/2025-06-18/server/tools),
tool execution errors are reported with `isError: true` and details inside `content`.
The spec does **not** forbid `structuredContent` when `isError: true`.

Our `Error()` factory always sets all three fields:

```csharp
internal static CallToolResult Error(string message, string? hint = null, object? details = null)
{
    var clean = StripPrefix(message, ErrorPrefix);
    var normalizedHint = NormalizeHint(hint);
    var text = $"{ErrorPrefix} {clean}";
    if (normalizedHint != null)
        text += $"\n{HintLabel}: {normalizedHint}";

    var structured = new McpErrorResult
    {
        Error = clean,
        Details = details
    };

    return new CallToolResult
    {
        Content = [new TextContentBlock { Text = text }],
        StructuredContent = JsonSerializer.SerializeToElement(structured),
        IsError = true
    };
}
```

So on the wire, an error result looks like:

```json
{
  "content": [
    { "type": "text", "text": "[Error] Business rule '00000000-0000-0000-0000-000000000001' not found.\nHint: Use get_business_rules in list mode to find a valid ruleId." }
  ],
  "structuredContent": {
    "error": "Business rule '00000000-0000-0000-0000-000000000001' not found."
  },
  "isError": true
}
```

## The problem

When the server is driven from **Claude Code CLI**, an error call surfaces to the AI
**only** the `content` text block — the `structuredContent` object is dropped when
`isError: true`. A success call (`isError: false`) surfaces the structured JSON object
normally. We verified this empirically:

- Success call `get_business_rules { entity_name: "Teams chat" }` → AI receives
  `{"mode":"list","entityName":"chat","count":8,"rules":[...]}` ✅
- Error call `get_business_rules { entity_name: "account", rule_id: "00000000-0000-0000-0000-000000000001" }`
  → AI receives only the string
  `"[Error] Business rule '...' not found.\nHint: Use get_business_rules in list mode..."` ❌
  (no `structuredContent`).

We also confirmed `isError` is the trigger: temporarily setting `IsError = false` in
`Error()` made the structured JSON appear to the AI again.

We need to know whether this is a **Claude Code CLI client behavior** specifically, or
whether other MCP clients (Copilot, Claude Desktop, Inspector) also drop
`structuredContent` on errors.

## Test call for you (the reading AI)

You are likely using a different MCP client (GitHub Copilot in VS Code, Claude Desktop,
MCP Inspector, etc.). Please run this exact tool call against the `devkit-claude` MCP
server and report what you receive.

### Tool

`get_business_rules` — description:
> Business rules (client-side logic) for an entity. rule_id empty = list; set = detail
> (conditions+actions from XAML). Rules run BEFORE form JS. Scope 'Entity' = all forms.

### Input (an error case: valid GUID, no matching record)

```json
{
  "entity_name": "account",
  "rule_id": "00000000-0000-0000-0000-000000000001"
}
```

### What we expect on the wire (server-side)

Text content:
```
[Error] Business rule '00000000-0000-0000-0000-000000000001' not found.
Hint: Use get_business_rules in list mode to find a valid ruleId.
```

Structured content (the `structuredContent` field):
```json
{
  "error": "Business rule '00000000-0000-0000-0000-000000000001' not found."
}
```

`isError`: `true`

### What to report

After running the call, tell us:

1. **Which MCP client are you?** (Copilot / Claude Desktop / Inspector / other + version)
2. **Did you receive the `structuredContent` object**, or only the text string?
3. **Paste verbatim** what your client handed you for this error call.
4. If you can inspect the raw JSON-RPC response, paste the full `result` object
   (it should contain `content`, `structuredContent`, and `isError`).

### Optional second test (a success case, for comparison)

```json
{
  "entity_name": "Teams chat"
}
```

Expected: success, `isError: false`, structured content with `{"mode":"list","entityName":"chat","count":8,...}`.
This confirms your client reads structured content on success — so any difference on the
error call is purely about the `isError: true` path.

## Your findings

<!-- Paste your results below this line. Keep the raw output verbatim. -->

-

## Reference files in this repo

- `DynamicsCrm.DevKit.Cli/Mcp/Tools/Helper/McpToolResults.cs` — the `Error()` / `Success()`
  / `ThrowException()` factory (single source of truth for all tool results).
- `DynamicsCrm.DevKit.Cli/Mcp/Tools/Models/McpErrorResult.cs` — the DTO serialized into
  `structuredContent` on errors (`error`, `details`).
- `DynamicsCrm.DevKit.Cli/Mcp/Tools/GetBusinessRulesTool.cs` — the tool used in the test
  call above.
- `DynamicsCrm.DevKit.Docs/testcall/2.get_audit_history.md` — approved reference for the
  testcall file format (happy case with full structured output).
- `DynamicsCrm.DevKit.Docs/testcall/31.manage_ribbon.md` Test 23 — an error case whose
  file contains a `{"isError":true,"error":"..."}` block; that block was captured as a
  raw wire dump, not as AI-surfaced output.
