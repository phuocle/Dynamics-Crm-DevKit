# MCP Tool Return Format Analysis

> Date: 2026-07-23  
> Scope: All 34 MCP tools in `DynamicsCrm.DevKit.Cli/Mcp/Tools`  
> Question: Why do tools return both `Content` (text) and `StructuredContent`? Is this necessary? Should we move to structured-only?

---

## 1. Executive Summary

**All 34 MCP tools currently return both `Content` (text) and `StructuredContent` (JSON).**

- Every tool is decorated with `UseStructuredContent = true` and an `OutputSchemaType`.
- Every tool's success path builds a `CallToolResult` that contains:
  - `Content = [new TextContentBlock { Text = ... }]`
  - `StructuredContent = JsonSerializer.SerializeToElement(structured)`

This dual-return pattern is **not inherently wrong**, but it is **inconsistent in cost**:

- Most "Get" tools return a **short text summary** plus the full structured payload. The text is cheap (~1–2 lines).
- `whoami` is an outlier: it builds a **full formatted text dump** of every field that is also present in `WhoAmIResult`. This duplicates the structured payload in plain text and burns tokens for no benefit when the consumer is an AI.

**Recommendation:**

- Keep the dual-return pattern for client compatibility.
- Standardize the text `Content` to a **brief, human-readable summary** (like `get_tables` does: `"59 attributes returned for 'all_in_one' (detail=compact)"`).
- Refactor `whoami` so its text output is a short summary, not a full field dump.
- For AI-to-AI tool chaining, rely on `StructuredContent`; the text summary is only a fallback for clients that cannot render structured results.

---

## 2. Why Two Return Forms Exist

### 2.1 MCP Protocol Requirements

`CallToolResult` has two relevant properties:

| Property            | Required | Purpose                                                                                           |
| ------------------- | -------- | ------------------------------------------------------------------------------------------------- |
| `Content`           | **Yes**  | Primary content shown by the client. Must contain at least one `TextContentBlock` or other block. |
| `StructuredContent` | Optional | Machine-readable JSON schema result. Used by clients that understand `OutputSchemaType`.          |

Because `Content` is required, a tool **cannot** return structured-only. It must always provide some text.

### 2.2 Design Intent

The original design appears to have two goals:

1. **Human readability**: A user looking at raw tool output in a simple MCP client sees formatted text.
2. **Machine precision**: An AI client (or another tool) parses `StructuredContent` to avoid ambiguity.

This is a reasonable compromise **if** the text is a summary. It becomes wasteful when the text repeats the entire structured payload.

### 2.3 AI Token Cost

When an AI reads the tool result, it typically sees:

- The `Content` text (rendered in the conversation).
- Sometimes the `StructuredContent` as well, depending on the client.

If `Content` is a 50-line formatted dump plus `StructuredContent` is a 2 KB JSON object, the AI may consume both. For inter-tool calls, only `StructuredContent` matters, but the text is still serialized and transmitted.

---

## 3. `whoami` Deep Dive

### 3.1 Current Implementation

File: `DynamicsCrm.DevKit.Cli/Mcp/Tools/WhoAmITool.cs`

The tool builds a `WhoAmIResult` object with:

- User info (`UserId`, `FullName`, `DomainName`, `Email`, `BusinessUnitId`)
- Organization info (`OrganizationId`, `EnvironmentUrl`, `Version`, `OrgFriendlyName`, `OrgUniqueName`, `TenantId`, `EnvironmentId`, `Language`, `Currency`, `FiscalStart`, `AuditEnabled`)
- Optional access token
- DevKit runtime info (`Version`, `Build`, `AssemblyVersion`, `FileVersion`, `InformationalVersion`, `ProcessId`, `ProcessStartTime`, `AssemblyPath`, `AssemblySha256`)
- Security roles

Then it calls `BuildCompactText(structured)` to produce a **full plain-text rendering** of every one of those fields, e.g.:

```text
[User]
UserId: 791882ab-...
FullName: # DEVKIT
DomainName: DEVKIT_...com
Email: DEVKIT_...com

[Environment]
Url: https://dynamics-crm-devkit-v4.crm.dynamics.com
Version: 9.2.26072.132
OrgName: 🟢DEVKITV4 (unq...)
...
```

Finally it returns:

```csharp
return new CallToolResult
{
    Content = [new TextContentBlock { Text = text }],
    StructuredContent = JsonSerializer.SerializeToElement(structured)
};
```

### 3.2 Problem

The text was **not compact**. It was a line-by-line mirror of the JSON object. For an AI consumer, this meant:

- The same GUIDs, URLs, and role names appeared twice.
- Token usage was roughly doubled for this tool call.
- There was no additional information in the text that was not in `StructuredContent`.

### 3.3 What `whoami` Now Returns

After refactoring, `BuildCompactText` produces a concise text summary plus the full structured object:

```text
Connected to 🟢DEVKITV4 at https://dynamics-crm-devkit-v4.crm.dynamics.com as # DEVKIT. Dataverse 9.2.26072.132. DevKit 4.44.44.44 build 23.07.2026 14:11:36. 6 security role(s).
```

The structured JSON remains available for:

- FetchXML owner filters (`UserId`)
- Environment validation (`EnvironmentId`, `OrganizationId`)
- Build/runtime verification (`AssemblySha256`, `Build`)
- Security role checks (`Roles`)
- Access token (`AccessToken`) — now kept out of the text summary for safety

---

## 4. Scan of All 34 MCP Tools

### 4.1 Methodology

For every `.cs` file in `DynamicsCrm.DevKit.Cli/Mcp/Tools` that contains `[McpServerTool(Name = "..."`, we checked:

1. Does the `McpServerTool` attribute set `UseStructuredContent = true`?
2. Does the success path assign `Content = [new TextContentBlock { Text = ... }]`?
3. Does the success path assign `StructuredContent = ...`?

### 4.2 Results

| #   | Tool                          | File                               | UseStructuredContent | Text Content | Structured Content |
| --- | ----------------------------- | ---------------------------------- | -------------------- | ------------ | ------------------ |
| 1   | `create_records`              | `CreateRecordsTool.cs`             | true                 | true         | true               |
| 2   | `execute_fetchxml`            | `ExecuteFetchXmlTool.cs`           | true                 | true         | true               |
| 3   | `execute_webapi`              | `ExecuteWebApiTool.cs`             | true                 | true         | true               |
| 4   | `generate_demo_data`          | `GenerateDemoDataTool.cs`          | true                 | true         | true               |
| 5   | `get_audit_history`           | `GetAuditHistoryTool.cs`           | true                 | true         | true               |
| 6   | `get_business_process_flows`  | `GetBusinessProcessFlowsTool.cs`   | true                 | true         | true               |
| 7   | `get_business_rules`          | `GetBusinessRulesTool.cs`          | true                 | true         | true               |
| 8   | `get_custom_apis`             | `GetCustomApisTool.cs`             | true                 | true         | true               |
| 9   | `get_flows`                   | `GetFlowsTool.cs`                  | true                 | true         | true               |
| 10  | `get_messages`                | `GetMessagesTool.cs`               | true                 | true         | true               |
| 11  | `get_plugins`                 | `GetPluginsTool.cs`                | true                 | true         | true               |
| 12  | `get_plugin_trace_logs`       | `GetPluginTraceLogsTool.cs`        | true                 | true         | true               |
| 13  | `get_solution_components`     | `GetSolutionComponentsTool.cs`     | true                 | true         | true               |
| 14  | `get_system_jobs`             | `GetSystemJobsTool.cs`             | true                 | true         | true               |
| 15  | `get_tables`                  | `GetTablesTool.cs`                 | true                 | true         | true               |
| 16  | `get_workflows`               | `GetWorkflowsTool.cs`              | true                 | true         | true               |
| 17  | `manage_app`                  | `ManageAppTool.cs`                 | true                 | true         | true               |
| 18  | `manage_chart`                | `ManageChartTool.cs`               | true                 | true         | true               |
| 19  | `manage_choice`               | `ManageChoiceTool.cs`              | true                 | true         | true               |
| 20  | `manage_command`              | `ManageCommandTool.cs`             | true                 | true         | true               |
| 21  | `manage_environment_variable` | `ManageEnvironmentVariableTool.cs` | true                 | true         | true               |
| 22  | `manage_form`                 | `ManageFormTool.cs`                | true                 | true         | true               |
| 23  | `manage_record`               | `ManageRecordTool.cs`              | true                 | true         | true               |
| 24  | `manage_ribbon`               | `ManageRibbonTool.cs`              | true                 | true         | true               |
| 25  | `manage_role`                 | `ManageRoleTool.cs`                | true                 | true         | true               |
| 26  | `manage_view`                 | `ManageViewTool.cs`                | true                 | true         | true               |
| 27  | `manage_webresource`          | `ManageWebResourceTool.cs`         | true                 | true         | true               |
| 28  | `parse_record_url`            | `ParseRecordUrlTool.cs`            | true                 | true         | true               |
| 29  | `publish_customizations`      | `PublishCustomizationsTool.cs`     | true                 | true         | true               |
| 30  | `search_records`              | `SearchRecordsTool.cs`             | true                 | true         | true               |
| 31  | `upsert_column`               | `UpsertColumnTool.cs`              | true                 | true         | true               |
| 32  | `upsert_relationship`         | `UpsertRelationshipTool.cs`        | true                 | true         | true               |
| 33  | `upsert_table`                | `UpsertTableTool.cs`               | true                 | true         | true               |
| 34  | `whoami`                      | `WhoAmITool.cs`                    | true                 | true         | true               |

**Conclusion:** There are **no exceptions**. Every tool follows the dual-return pattern.

---

## 5. Text vs. Structured Content by Tool Category

### 5.1 "Get" Tools (Read-Only)

Most "Get" tools use a **short text summary** and put the real data in `StructuredContent`.

Example from `get_tables`:

```csharp
var summary = $"{attrCount} attributes returned for '{logicalName}' (detail={detailLevel})";
return StructuredResult(summary, structured);
```

This is the **ideal pattern**: cheap text, rich structured data.

### 5.2 "Manage" / Mutation Tools

These tools often return:

- A confirmation message: `"Created account record: <guid>"`
- The created/updated record in `StructuredContent`

Example pattern:

```csharp
return new CallToolResult
{
    Content = [new TextContentBlock { Text = $"Created {entity_name} record: {id}" }],
    StructuredContent = JsonSerializer.SerializeToElement(new { id, ... })
};
```

This is also efficient.

### 5.3 `whoami` (The Outlier)

`whoami` returns a **full formatted dump** of every field. It is the only tool where the text content is not a summary.

---

## 6. Recommendations

### 6.1 Short Term ✅ Done

Refactored `WhoAmITool.cs` so `BuildCompactText` now produces a **one-line summary** instead of a full field dump.

Example output:

```text
Connected to 🟢DEVKITV4 at https://dynamics-crm-devkit-v4.crm.dynamics.com as # DEVKIT. Dataverse 9.2.26072.132. DevKit 4.44.44.44 build 23.07.2026 14:11:36. 6 security role(s).
```

`WhoAmIResult` is unchanged; `StructuredContent` still contains all GUIDs, roles, runtime info, etc. The text summary also no longer exposes the access token, which is a minor security improvement.

### 6.2 Medium Term

Add a shared helper to enforce the "summary text + structured payload" pattern:

```csharp
internal static CallToolResult SummaryResult(string summary, object structured) => new()
{
    Content = [new TextContentBlock { Text = summary }],
    StructuredContent = JsonSerializer.SerializeToElement(structured)
};
```

Then audit each tool's text output and replace any full dumps with summaries.

### 6.3 Long Term

If the project ever targets only AI clients that consume `StructuredContent`, consider making the text content a **fixed short marker** such as `"See structuredContent for details."`. However, this reduces readability in basic MCP clients, so it should be a deliberate product decision.

---

## 7. Answers to Specific Questions

### Q: Why does `whoami` have two return forms?

A: Because the MCP protocol requires `Content` (text) to be present. The original author chose to make that text a full human-readable dump. The structured JSON is the part that is actually useful for AI tool chaining.

### Q: Is returning both a waste of tokens?

A: **Only when the text duplicates the structured data.** A short summary is cheap and acceptable. `whoami` is the main offender.

### Q: Should we return structured-only?

A: **Not possible under the current MCP protocol** — `Content` is required. But we can make `Content` a minimal summary so it is effectively structured-only for practical purposes.

### Q: Is structured content the right choice for AI-to-AI tool calls?

A: **Yes.** `StructuredContent` with a well-defined `OutputSchemaType` is the only reliable way for one tool to pass typed data to another. Text parsing is fragile and token-expensive.

---

## 8. Appendix: Scan Script

The following PowerShell script was used to produce the 34-tool matrix:

```powershell
$tools = Get-ChildItem -Path 'DynamicsCrm.DevKit.Cli/Mcp/Tools' -Filter '*.cs' -File |
    Where-Object { Select-String -Path $_.FullName -Pattern '\[McpServerTool\(Name = "' }

foreach ($t in $tools) {
    $content = Get-Content -Raw $t.FullName
    $name = [regex]::Match($content, '\[McpServerTool\(Name = "([^"]+)"').Groups[1].Value
    $structured = $content -match 'UseStructuredContent\s*=\s*true'
    $hasText = $content -match 'new TextContentBlock|Content\s*=\s*\['
    $hasStructured = $content -match 'StructuredContent\s*='
    [PSCustomObject]@{
        File = $t.Name
        Tool = $name
        UseStructuredContent = $structured
        HasTextContent = $hasText
        HasStructuredContent = $hasStructured
    }
}
```
