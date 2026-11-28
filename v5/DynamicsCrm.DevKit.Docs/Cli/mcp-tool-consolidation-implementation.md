# MCP Tool Consolidation — Step-by-Step AI Implementation Blueprint (42 → 14 Tools)

> **Companion review document (Vietnamese, for approval):** [mcp-tool-consolidation-proposal.html](./mcp-tool-consolidation-proposal.html)
> **Target component:** `DynamicsCrm.DevKit.Cli/Mcp/` (.NET 10.0) and `DynamicsCrm.DevKit.Cli.UnitTests/`
> **Execution order:** Complete and verify **Phase 1 (19 RO → 6 RO; total 42 → 29)** first, then execute **Phase 2 (23 RW → 8 RW; total 29 → 14)**.

---

## 0. Non-Negotiable Invariants & Verified MCP SDK 2.x Rules

Before writing any code, enforce every invariant below:

1. **Zero-Rewrite Facade Strategy (Preserve 100% Business Logic):**
   - Do **NOT** delete or rewrite the business logic inside the 42 existing tool classes (`GetTablesTool.get_tables(...)`, `ManageColumnTool.manage_column(...)`, `ManageFormTool.manage_form(...)`, etc.).
   - Remove `[McpServerToolType]` and `[McpServerTool(...)]` from the absorbed classes so the MCP SDK stops registering them as top-level tools, while keeping their `public` constructors and business-logic methods intact.
   - All existing unit tests that directly call `new ManageXxxTool(...).manage_xxx(...)` MUST keep compiling and passing untouched.
   - Preserve 100% of:
     - Structured result DTOs (`WhoAmIResult`, `GetTablesResult`, `UpsertFormResult`, `UpsertViewResult`, etc.) — note `McpToolResults.FormatAntigravitySuccessDetail` checks `structured is UpsertViewResult` and `structured is UpsertFormResult`, which keeps working automatically!
     - `McpExecutionContext.AssertMutationAllowed(...)` fail-closed dry-run guards.
     - `RoleGateHelper.EnsureSystemAdministrator(...)` gates.
     - Workspace backup/output paths under `.devkit/<legacy_tool_name>/` (`manage_form`, `manage_view`, `manage_chart`, `manage_app`, `manage_column`, `manage_role`, `manage_report`, `manage_webresource`, `manage_record_file`, `generate_demo_data`, `search_records`, `get_plugins`).
     - Error semantics (`[Error]` / `[Hint]` / `[Detail]`) and `McpToolInvocation.Attribute(...)` multi-env attribution (`| env <selector>`).

2. **Repository Conventions (`AGENTS.md`):**
   - Apply `[McpServerToolType]` **ONLY** to the exposed MCP tool classes (the 14 facade/entry classes), **NEVER** to handlers or helpers.
   - Keep all `[McpServerToolType]` entry classes in namespace `DynamicsCrm.DevKit.Cli.Mcp.Tools`.
   - Put routing helpers in subnamespace `DynamicsCrm.DevKit.Cli.Mcp.Tools.Routing` (folder `DynamicsCrm.DevKit.Cli/Mcp/Tools/Routing/`).
   - Keep `DisabledToolSet` and `ToolResourceMap` in `McpServerHost.cs` updated using `nameof(...)`.
   - Keep source version `4.44.44.44`; never leave `xxxx.yy.zz HH.mm.ss` modified.
   - Never stage, commit, or push unless explicitly requested by the user.

3. **Empirically Verified MCP SDK 2.x Constraints (DO NOT VIOLATE):**
   - **Rule A — Nullable Optional Parameters Only (`csharp-sdk#830`):**
     Every optional parameter on every `[McpServerTool]` method MUST be nullable with default `null`: `string? param = null`, `int? param = null`, `bool? param = null`, `JsonObject? options = null`, `JsonObject? payload = null`. Never use `string param = ""` on an optional MCP entry parameter (MCP SDK 2.x marks non-nullable `string` params as `required` in JSON Schema).
   - **Rule B — Polymorphic Router `OutputSchemaType`:**
     Never set `UseStructuredContent = true` **without** `OutputSchemaType` on a `Task<CallToolResult>` method (MCP SDK 2.x generates an invalid `CallToolResult` wrapper schema).
     - On all **polymorphic domain routers** (12 routers), set:
       ```csharp
       UseStructuredContent = true, OutputSchemaType = typeof(JsonObject)
       ```
       This emits a valid 32-byte `"outputSchema":{"type":"object"}` and passes every handler's `CallToolResult.StructuredContent` verbatim.
     - On single-DTO standalone tools (`read_instruction`, `execute_webapi`), keep their tiny existing `OutputSchemaType` (`typeof(ReadInstructionResult)`, `typeof(WebApiResult)`).
   - **Rule C — `McpServer` Injection:**
     Any router delegating to a handler that calls `WorkspaceFolderHelper.GetAsync(server)` MUST accept `McpServer? server = null` on its `[McpServerTool]` `InvokeAsync` method (the SDK injects it without exposing it in `inputSchema`) and pass it to the handler.
   - **Rule D — `ReadInstructionTool.GetReferences()` Auto-Discovery:**
     `ReadInstructionTool.GetReferences()` scans `[Description]` of every `[McpServerToolType]` for `docs://...` and `schema://...` URIs. Every consolidated router MUST mention the `docs://` and `schema://` URIs belonging to its absorbed handlers in its `[Description]` so the catalog stays 100% accurate.

4. **Measured Baseline vs Target Budget:**
   - Baseline: **42 tools**, **441 params**, **215,375 bytes** (`tools/list` full JSON; 135,195 bytes without `outputSchema`).
   - Phase 1 exit gate: **29 tools** (6 new RO + 23 existing RW), Phase-1 6 RO tools total **≤ 17,000 bytes** (down from 80,571 bytes).
   - Phase 2 exit gate: **14 tools** (6 RO + 8 RW), full `tools/list` total **≤ 45,000 bytes** (target ~38,400 bytes; down from 215,375 bytes — >79% reduction).

---

## 1. Shared Routing Infrastructure (Build First)

### Step 1.1 — Create `DynamicsCrm.DevKit.Cli/Mcp/Tools/Routing/McpPayload.cs`

Namespace: `DynamicsCrm.DevKit.Cli.Mcp.Tools.Routing`

Purpose: Centralize `options` / `payload` (`JsonObject?`) extraction with:
1. **Dual-case lookup (`snake_case` + `camelCase` + case-insensitive)** so LLM calls using either `max_length` or `maxLength` succeed seamlessly.
2. **Strict unknown-key validation** returning a structured `CallToolResult` error listing exact allowed keys and the relevant `docs://` URI.
3. **Flexible JSON-string coercion**: Many legacy handlers accept serialized JSON strings (`fields_json`, `operations`, `records_json`, `cell_updates_json`, `privileges`, `request_parameters`, `response_properties`, `definition_json`, `arguments_json`, `field_overrides`, `items`, `options`, `add_options`, `update_options`, `delete_options`). If the caller passes a native JSON array/object inside `payload` (e.g. `payload.operations = [...]`) OR a JSON string (e.g. `payload.operations = "[...]"`), `GetJsonString(...)` MUST accept BOTH and return the serialized JSON string expected by the handler!

Implement `McpPayload` with this exact API contract:

```csharp
#nullable enable
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Nodes;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Routing
{
    internal sealed class McpPayload
    {
        private readonly Dictionary<string, (string RawKey, JsonNode? Value)> _byNormalizedKey;
        private readonly List<string> _rawKeys;

        private McpPayload(JsonObject? source)
        {
            _byNormalizedKey = new Dictionary<string, (string, JsonNode?)>(StringComparer.OrdinalIgnoreCase);
            _rawKeys = new List<string>();
            if (source == null) return;

            foreach (var kvp in source)
            {
                _rawKeys.Add(kvp.Key);
                var norm = NormalizeKey(kvp.Key);
                _byNormalizedKey[norm] = (kvp.Key, kvp.Value);
            }
        }

        internal static McpPayload From(JsonObject? source) => new(source);

        internal static string NormalizeKey(string key) =>
            string.IsNullOrEmpty(key) ? "" : key.Replace("_", "", StringComparison.Ordinal).ToLowerInvariant();

        internal bool HasKey(string snakeKey) => _byNormalizedKey.ContainsKey(NormalizeKey(snakeKey));

        /// <summary>
        /// Rejects any key in payload not present in allowedSnakeKeys (compared via NormalizeKey).
        /// Returns null if valid, or an actionable CallToolResult error naming unknown + valid keys.
        /// </summary>
        internal CallToolResult? ValidateAllowedKeys(
            IEnumerable<string> allowedSnakeKeys,
            string contextLabel,
            string? docUri = null)
        {
            if (_rawKeys.Count == 0) return null;

            var allowedList = allowedSnakeKeys.Distinct(StringComparer.OrdinalIgnoreCase).ToArray();
            var allowedNorm = allowedList.Select(NormalizeKey).ToHashSet(StringComparer.OrdinalIgnoreCase);
            var unknown = _rawKeys.Where(k => !allowedNorm.Contains(NormalizeKey(k))).ToArray();
            if (unknown.Length == 0) return null;

            var allowedText = allowedList.Length > 0
                ? string.Join(", ", allowedList)
                : "(none — this resource/action takes no payload keys)";
            var docHint = string.IsNullOrWhiteSpace(docUri)
                ? ""
                : $" Read {docUri} (or call read_instruction) for full contract.";

            return McpToolResults.Error(
                $"Unknown option/payload key(s) for {contextLabel}: {string.Join(", ", unknown)}.",
                $"Allowed keys: {allowedText}.{docHint}");
        }

        internal string GetString(string key, string defaultValue = "")
        {
            if (!TryGetNode(key, out var node) || node == null) return defaultValue;
            if (node is JsonValue v && v.TryGetValue<string>(out var s)) return s ?? defaultValue;
            return node.ToJsonString();
        }

        internal string? GetNullableString(string key, string? defaultValue = null)
        {
            if (!TryGetNode(key, out var node) || node == null) return defaultValue;
            if (node is JsonValue v && v.TryGetValue<string>(out var s)) return s;
            return node.ToJsonString();
        }

        /// <summary>
        /// Accepts either a JSON string OR a native JsonObject/JsonArray and returns a JSON string
        /// compatible with legacy handlers expecting serialized JSON parameters.
        /// </summary>
        internal string GetJsonString(string key, string defaultValue = "")
        {
            if (!TryGetNode(key, out var node) || node == null) return defaultValue;
            if (node is JsonValue v && v.TryGetValue<string>(out var s)) return s ?? defaultValue;
            return node.ToJsonString();
        }

        internal int GetInt(string key, int defaultValue)
        {
            if (!TryGetNode(key, out var node) || node == null) return defaultValue;
            if (node is JsonValue v)
            {
                if (v.TryGetValue<int>(out var i)) return i;
                if (v.TryGetValue<long>(out var l)) return (int)l;
                if (v.TryGetValue<string>(out var s) && int.TryParse(s, NumberStyles.Integer, CultureInfo.InvariantCulture, out var parsed))
                    return parsed;
            }
            throw new ArgumentException($"Parameter '{key}' must be an integer.");
        }

        internal long? GetNullableLong(string key, long? defaultValue = null)
        {
            if (!TryGetNode(key, out var node) || node == null) return defaultValue;
            if (node is JsonValue v)
            {
                if (v.TryGetValue<long>(out var l)) return l;
                if (v.TryGetValue<int>(out var i)) return i;
                if (v.TryGetValue<string>(out var s) && long.TryParse(s, NumberStyles.Integer, CultureInfo.InvariantCulture, out var parsed))
                    return parsed;
            }
            throw new ArgumentException($"Parameter '{key}' must be an integer.");
        }

        internal double? GetNullableDouble(string key, double? defaultValue = null)
        {
            if (!TryGetNode(key, out var node) || node == null) return defaultValue;
            if (node is JsonValue v)
            {
                if (v.TryGetValue<double>(out var d)) return d;
                if (v.TryGetValue<string>(out var s) && double.TryParse(s, NumberStyles.Float, CultureInfo.InvariantCulture, out var parsed))
                    return parsed;
            }
            throw new ArgumentException($"Parameter '{key}' must be a number.");
        }

        internal bool GetBool(string key, bool defaultValue)
        {
            if (!TryGetNode(key, out var node) || node == null) return defaultValue;
            if (node is JsonValue v)
            {
                if (v.TryGetValue<bool>(out var b)) return b;
                if (v.TryGetValue<string>(out var s) && bool.TryParse(s, out var parsed)) return parsed;
            }
            throw new ArgumentException($"Parameter '{key}' must be a boolean.");
        }

        internal bool? GetNullableBool(string key, bool? defaultValue = null)
        {
            if (!TryGetNode(key, out var node) || node == null) return defaultValue;
            return GetBool(key, false);
        }

        internal string[]? GetStringArray(string key)
        {
            if (!TryGetNode(key, out var node) || node == null) return null;
            if (node is JsonArray arr)
                return arr.Select(item => item is JsonValue v && v.TryGetValue<string>(out var s) ? s : item?.ToJsonString() ?? "").ToArray();
            if (node is JsonValue sv && sv.TryGetValue<string>(out var single) && !string.IsNullOrWhiteSpace(single))
                return [single];
            throw new ArgumentException($"Parameter '{key}' must be an array of strings.");
        }

        internal JsonElement? GetJsonElement(string key)
        {
            if (!TryGetNode(key, out var node) || node == null) return null;
            return JsonSerializer.SerializeToElement(node);
        }

        private bool TryGetNode(string key, out JsonNode? node)
        {
            if (_byNormalizedKey.TryGetValue(NormalizeKey(key), out var entry))
            {
                node = entry.Value;
                return true;
            }
            node = null;
            return false;
        }
    }
}
```

> **Important error handling rule:** Wrap router payload extraction inside `try { ... } catch (ArgumentException ex) { return Error(ex.Message, "Check option/payload types and retry."); }` so malformed payload types return clean `[Error]` results instead of unhandled exceptions.

---

## 2. PHASE 1 — Consolidate 19 Read-Only Tools → 6 Read-Only Tools

> **Outcome of Phase 1:** Server exposes **29 tools** (6 new RO + 23 existing RW). All 6 Phase 1 tools MUST declare:
> `ReadOnly = true, Idempotent = true, Destructive = false`.

### Step 1.2 — De-expose the 18 Absorbed Read-Only Tool Classes

In each of the **18** files below, remove `[McpServerToolType]` from the class AND remove `[McpServerTool(...)]` + `[Description(...)]` from `InvokeAsync(...)` (keeping the class `public`, keeping constructors and the business-logic method `public` so unit tests stay 100% green):

| # | File in `DynamicsCrm.DevKit.Cli/Mcp/Tools/` | Business Method Kept | Absorbed Into |
|---|---|---|---|
| 1 | `WhoAmITool.cs` | `whoami()` (+ `RoutingEnvId`) | `GetContextTool` |
| 2 | `ConnectionListTool.cs` | `connection_list()` | `GetContextTool` |
| 3 | `ParseRecordUrlTool.cs` | `parse_record_url(string input)` | `GetContextTool` |
| 4 | `ExecuteFetchXmlTool.cs` | `execute_fetchxml(string fetchxml, int max_records, bool get_all)` | `QueryDataTool` |
| 5 | `ExecuteSqlTool.cs` | `execute_sql(string sql, int max_records, bool get_all)` | `QueryDataTool` |
| 6 | `SearchRecordsTool.cs` | `search_records(McpServer server, string action, string search_term, string entities, int top, string filter, string detail_level)` | `QueryDataTool` |
| 7 | `GetTablesTool.cs` | `get_tables(string entity_name, string filter, bool custom_only, bool include_intersect, string names, string detail_level, int max_records)` | `InspectMetadataTool` |
| 8 | `GetSolutionComponentsTool.cs` | `get_solution_components(string solution_name, bool include_active_layers, bool active_layers_only)` | `InspectMetadataTool` |
| 9 | `GetCustomControlsTool.cs` | `get_custom_controls(string name, string name_match, string kind, string data_type)` | `InspectMetadataTool` |
| 10 | `GetPluginsTool.cs` | `get_plugins(...)` (14 args + `McpServer`) | `InspectAutomationTool` |
| 11 | `GetWorkflowsTool.cs` | `get_workflows(...)` (7 args) | `InspectAutomationTool` |
| 12 | `GetFlowsTool.cs` | `get_flows(...)` (8 args) | `InspectAutomationTool` |
| 13 | `GetBusinessProcessFlowsTool.cs` | `get_business_process_flows(...)` (6 args) | `InspectAutomationTool` |
| 14 | `GetBusinessRulesTool.cs` | `get_business_rules(...)` (4 args) | `InspectAutomationTool` |
| 15 | `GetMessagesTool.cs` | `get_messages(...)` (4 args) | `InspectAutomationTool` |
| 16 | `GetAuditHistoryTool.cs` | `get_audit_history(...)` (9 args) | `InspectDiagnosticsTool` |
| 17 | `GetPluginTraceLogsTool.cs` | `get_plugin_trace_logs(...)` (8 args) | `InspectDiagnosticsTool` |
| 18 | `GetSystemJobsTool.cs` | `get_system_jobs(...)` (8 args) | `InspectDiagnosticsTool` |

*(Tool #19, `ReadInstructionTool.cs`, stays `[McpServerToolType]`.)*

---

### Step 1.3 — Create `DynamicsCrm.DevKit.Cli/Mcp/Tools/GetContextTool.cs`

- **Tool attribute:**
  ```csharp
  [McpServerTool(Name = "get_context", Title = "Inspect connection identity, .env groups, or parse Dataverse URL",
      ReadOnly = true, Idempotent = true, Destructive = false,
      UseStructuredContent = true, OutputSchemaType = typeof(JsonObject))]
  ```
- **Constructor:**
  `public GetContextTool(IMcpConnectionResolver connections)` (plus optional direct-test ctor if needed).
- **Parameters (3):**
  1. `string? action = "whoami"` — `'whoami' (default: live user, org, roles, DevKit runtime SHA/version), 'connections' (offline list of .env groups, aliases, dry-run/impersonation policy), or 'parse_url' (parse D365/Web API/Maker/Admin URL or GUID into entity + recordId).`
  2. `string? input = null` — `Required for action='parse_url': Dynamics 365 URL, Web API URL, maker portal URL, or raw GUID.`
  3. `string? env = null` — `[Description(McpToolInvocation.EnvDescription)]` (used by `whoami` and `parse_url`; ignored/rejected if passed to `connections`? **Behavior rule:** if `action == "connections"` and `!string.IsNullOrWhiteSpace(env)`, return clean error `"env is not used for action='connections'."` or ignore cleanly — prefer clean error consistent with existing `connection_list` contract, or note offline behavior).
- **Dispatch:**
  - Normalize `var act = string.IsNullOrWhiteSpace(action) ? "whoami" : action.Trim().ToLowerInvariant();`
  - `"connections"` → `Task.FromResult(new ConnectionListTool(_connections).connection_list())` *(NOTE: do NOT call `McpToolInvocation.InvokeAsync` so it works offline without authenticating!)*
  - `"whoami"` → `McpToolInvocation.InvokeAsync(_connections, env, conn => { var w = new WhoAmITool(conn.OrgService, conn.Context, conn.ConnectionInfo) { RoutingEnvId = conn.EnvId }; return Task.FromResult(w.whoami()); }, cancellationToken)`
  - `"parse_url"` → `McpToolInvocation.InvokeAsync(_connections, env, conn => Task.FromResult(new ParseRecordUrlTool(conn.OrgService).parse_record_url(input ?? "")), cancellationToken)`
  - Any other `act` → `Error($"Invalid action '{action}'.", "Valid values: 'whoami', 'connections', 'parse_url'.")`

---

### Step 1.4 — Update `DynamicsCrm.DevKit.Cli/Mcp/Tools/ReadInstructionTool.cs`

- Keep `[McpServerTool(Name = "read_instruction", ..., OutputSchemaType = typeof(ReadInstructionResult))]`.
- Make `string? name = null` (nullable, MCP SDK 2.x rule!). Treat `null` or whitespace identically to `""` (returns catalog).
- Update `CatalogEntries` titles for Phase 1 tools (e.g. `data_operations_guide` mentions `query_data`, `server_logic_guide` mentions `inspect_automation`).
- Fix line 66 hardcoded string bug: replace `"13 available resources (9 docs:// instructions, 4 schema:// schemas)"` with dynamic counts from `CatalogEntries` (`14 available resources (10 docs:// instructions, 4 schema:// schemas)`).

---

### Step 1.5 — Create `DynamicsCrm.DevKit.Cli/Mcp/Tools/QueryDataTool.cs`

- **Tool attribute:**
  ```csharp
  [McpServerTool(Name = "query_data", Title = "Query Dataverse records (FetchXML, SQL, or Relevance Search)",
      ReadOnly = true, Idempotent = true, Destructive = false,
      UseStructuredContent = true, OutputSchemaType = typeof(JsonObject))]
  ```
- **Description MUST reference:** `docs://data_operations_guide`, `docs://instructions_for_sql`, `schema://fetchxml`.
- **Parameters (8 — all typed, NO JSON bag needed):**
  1. `McpServer? server = null` *(SDK-injected, hidden from schema)*
  2. `string? mode = null` — `Required: 'fetchxml', 'sql', 'search', or 'search_status'.`
  3. `string? query = null` — `Required for fetchxml (<fetch>...), sql (SELECT ..., no SELECT *), and search (1-100 chars keyword query). Omit for search_status.`
  4. `int? max_records = null` — `Max rows. Defaults: fetchxml 5000 (1-5000), sql 5000 (1-50000), search 50 (1-100).`
  5. `bool? get_all = null` — `fetchxml/sql only: true = auto-page up to max_records; false (default) = first page only.`
  6. `string? entities = null` — `search only: comma-separated Display Names or logical names. Empty = all searchable.`
  7. `string? filter = null` — `search only: OData filter applied after search, e.g. 'statecode eq 0'.`
  8. `string? detail_level = null` — `search/search_status only: 'compact' (default) or 'full' (writes raw API payload to .devkit/search_records/).`
  9. `string? env = null` — `[Description(McpToolInvocation.EnvDescription)]`
  10. `CancellationToken cancellationToken = default`
- **Dispatch (inside `McpToolInvocation.InvokeAsync`):**
  - `"fetchxml"` → `Task.FromResult(new ExecuteFetchXmlTool(conn.OrgService).execute_fetchxml(query ?? "", max_records ?? 5000, get_all ?? false))`
  - `"sql"` → `new ExecuteSqlTool(conn.WebApi, conn.Metadata).execute_sql(query ?? "", max_records ?? 5000, get_all ?? false)`
  - `"search"` → `new SearchRecordsTool(conn.OrgService, conn.Options, conn.WebApi).search_records(server, "search", query ?? "", entities ?? "", max_records ?? 50, filter ?? "", detail_level ?? "compact")`
  - `"search_status"` → `new SearchRecordsTool(conn.OrgService, conn.Options, conn.WebApi).search_records(server, "status", "", "", 50, "", detail_level ?? "compact")`
  - Invalid/empty `mode` → `Error("mode is required.", "Valid values: 'fetchxml', 'sql', 'search', 'search_status'.")`

---

### Step 1.6 — Create `DynamicsCrm.DevKit.Cli/Mcp/Tools/InspectMetadataTool.cs`

- **Tool attribute:**
  ```csharp
  [McpServerTool(Name = "inspect_metadata", Title = "Inspect tables, solution components, or installed PCF controls",
      ReadOnly = true, Idempotent = true, Destructive = false,
      UseStructuredContent = true, OutputSchemaType = typeof(JsonObject))]
  ```
- **Description MUST state:** AI MUST use `inspect_metadata(resource='tables')` for entity/attribute metadata (do NOT use `execute_webapi` with `EntityDefinitions`), and reference `docs://schema_tools_guide`.
- **Parameters (7):**
  1. `string? resource = "tables"` — `'tables' (default: entity list or table detail with attributes/relationships/keys/formulas), 'solution_components' (solution info + components + optional active layers), or 'custom_controls' (installed PCF field/dataset controls).`
  2. `string? name = null` — `tables: entity logical/display name (empty = list all tables). solution_components: required solution unique/display name. custom_controls: optional PCF name filter.`
  3. `string? filter = null` — `tables only: list = keyword filter; detail = attribute prefix/word-boundary filter.`
  4. `string? detail_level = null` — `tables detail only: 'compact' (default), 'standard', or 'full' (includes formula clone metadata & cascade/menu/hierarchy).`
  5. `int? max_records = null` — `tables list only: 1-500 (default 100).`
  6. `JsonObject? options = null` — `Resource-specific options. tables: {custom_only, include_intersect, names}. solution_components: {include_active_layers, active_layers_only}. custom_controls: {name_match ('contains'|'prefix'|'exact'), kind ('field'|'dataset'), data_type}.`
  7. `string? env = null`
  8. `CancellationToken cancellationToken = default`
- **Dispatch & `AllowedKeys`:**
  - `"tables"`:
    - `AllowedKeys = ["custom_only", "include_intersect", "names"]`
    - Calls `new GetTablesTool(conn.Metadata).get_tables(name ?? "", filter ?? "", p.GetBool("custom_only", false), p.GetBool("include_intersect", false), p.GetString("names", ""), detail_level ?? "compact", max_records ?? 100)`
  - `"solution_components"`:
    - `AllowedKeys = ["include_active_layers", "active_layers_only"]`
    - Calls `Task.FromResult(new GetSolutionComponentsTool(conn.OrgService).get_solution_components(name ?? "", p.GetBool("include_active_layers", false), p.GetBool("active_layers_only", false)))`
  - `"custom_controls"`:
    - `AllowedKeys = ["name_match", "kind", "data_type"]`
    - Calls `Task.FromResult(new GetCustomControlsTool(conn.OrgService).get_custom_controls(name ?? "", p.GetString("name_match", "contains"), p.GetString("kind", ""), p.GetString("data_type", "")))`

---

### Step 1.7 — Create `DynamicsCrm.DevKit.Cli/Mcp/Tools/InspectAutomationTool.cs`

- **Tool attribute:**
  ```csharp
  [McpServerTool(Name = "inspect_automation", Title = "Inspect plugins, workflows, cloud flows, BPFs, business rules, and SDK messages",
      ReadOnly = true, Idempotent = true, Destructive = false,
      UseStructuredContent = true, OutputSchemaType = typeof(JsonObject))]
  ```
- **Description MUST reference:** `docs://server_logic_guide` and retain the strict Custom Action migration rule (`Inspect and convert ONE custom action at a time in detail mode`).
- **Parameters (8):**
  1. `McpServer? server = null` *(SDK-injected; forwarded to `GetPluginsTool` for DLL/`.nupkg` download)*
  2. `string? resource = null` — `Required: 'plugins', 'workflows', 'flows', 'bpfs', 'business_rules', or 'messages'.`
  3. `string? entity_name = null` — `Entity Display/logical name filter (plugins, workflows, bpfs, business_rules [required], messages ['none'/empty=global]).`
  4. `string? id = null` — `GUID for detail mode (workflow_id, flow_id, bpf_id, rule_id; or assembly_id for plugins download).`
  5. `string? name = null` — `Name filter/selector (plugins: assembly_name; workflows/flows: name_filter; bpfs: bpf_name; messages: message_name → detail).`
  6. `string? status = null` — `State filter. Defaults per resource: workflows='active', flows='active', bpfs='all', business_rules='' (all).`
  7. `int? max_records = null` — `List cap. Defaults: plugins/messages=100, others=50.`
  8. `JsonObject? options = null` — `Resource-specific options: plugins {message_name, type_name, stage, mode, active_only, include_images, include_config, download, assembly_id, package_id, package_name}; workflows {mode ('background'|'realtime'), trigger_field}; flows {action ('list'|'runs'), owner_filter, status_filter, minutes_ago}; bpfs {include_stages}; messages {include_custom_actions}.`
  9. `string? env = null`
  10. `CancellationToken cancellationToken = default`
- **Dispatch & `AllowedKeys`:**
  - `"plugins"`:
    - `AllowedKeys = ["message_name", "type_name", "stage", "mode", "active_only", "include_images", "include_config", "download", "assembly_id", "package_id", "package_name"]`
    - Note: `assemblyId = p.GetString("assembly_id", id ?? "")` (accepts either top-level `id` or `options.assembly_id`!).
    - Calls `new GetPluginsTool(conn.OrgService).get_plugins(name ?? "", entity_name ?? "", p.GetString("message_name"), p.GetString("type_name"), p.GetBool("include_images", true), p.GetBool("include_config", false), p.GetString("stage"), p.GetString("mode"), p.GetBool("active_only", true), max_records ?? 100, p.GetBool("download", false), assemblyId, server, p.GetString("package_id"), p.GetString("package_name"))`
  - `"workflows"`:
    - `AllowedKeys = ["mode", "trigger_field"]`
    - Calls `Task.FromResult(new GetWorkflowsTool(conn.OrgService).get_workflows(id ?? "", entity_name ?? "", p.GetString("mode"), status ?? "active", p.GetString("trigger_field"), name ?? "", max_records ?? 50))`
  - `"flows"`:
    - `AllowedKeys = ["action", "owner_filter", "status_filter", "minutes_ago"]`
    - Calls `Task.FromResult(new GetFlowsTool(conn.OrgService).get_flows(id ?? "", p.GetString("action", "list"), name ?? "", p.GetString("owner_filter"), status ?? "active", p.GetString("status_filter"), p.GetInt("minutes_ago", 1440), max_records ?? 50))`
  - `"bpfs"`:
    - `AllowedKeys = ["include_stages"]`
    - Calls `Task.FromResult(new GetBusinessProcessFlowsTool(conn.OrgService).get_business_process_flows(id, name, entity_name, status ?? "all", p.GetBool("include_stages", false), max_records ?? 50))`
  - `"business_rules"`:
    - `AllowedKeys = []`
    - Calls `Task.FromResult(new GetBusinessRulesTool(conn.OrgService).get_business_rules(entity_name ?? "", id ?? "", status ?? "", max_records ?? 50))`
  - `"messages"`:
    - `AllowedKeys = ["include_custom_actions"]`
    - Calls `new GetMessagesTool(conn.Metadata, conn.OrgService).get_messages(string.IsNullOrWhiteSpace(entity_name) ? "none" : entity_name, name ?? "", p.GetBool("include_custom_actions", true), max_records ?? 100)`

---

### Step 1.8 — Create `DynamicsCrm.DevKit.Cli/Mcp/Tools/InspectDiagnosticsTool.cs`

- **Tool attribute:**
  ```csharp
  [McpServerTool(Name = "inspect_diagnostics", Title = "Inspect audit history, plugin trace logs, and async system jobs",
      ReadOnly = true, Idempotent = true, Destructive = false,
      UseStructuredContent = true, OutputSchemaType = typeof(JsonObject))]
  ```
- **Parameters (8):**
  1. `string? resource = null` — `Required: 'audit', 'plugin_traces', or 'system_jobs'.`
  2. `string? record_id = null` — `GUID → detail mode (audit record GUID [requires entity_name], plugintracelog GUID, or asyncoperation GUID). Empty = list.`
  3. `string? entity_name = null` — `Entity Display/logical name filter (required with record_id for audit).`
  4. `int? minutes_ago = null` — `Lookback minutes (max 43200). Defaults: audit=1440, plugin_traces=60, system_jobs=1440.`
  5. `int? max_records = null` — `List cap (default 50; max: audit/system_jobs=500, plugin_traces=200).`
  6. `string? correlation_id = null` — `GUID to trace one request across plugin_traces or system_jobs.`
  7. `JsonObject? options = null` — `Resource-specific filters: audit {user_filter, operation, attribute_name, from_date, to_date}; plugin_traces {type_name, message_name, mode ('sync'|'async')}; system_jobs {status ('failed'|'succeeded'|'waiting'|'in_progress'|'canceled'|'all'), operation_type, name_filter}.`
  8. `string? env = null`
  9. `CancellationToken cancellationToken = default`
- **Dispatch & `AllowedKeys`:**
  - `"audit"`:
    - `AllowedKeys = ["user_filter", "operation", "attribute_name", "from_date", "to_date"]`
    - Calls `Task.FromResult(new GetAuditHistoryTool(conn.OrgService).get_audit_history(entity_name ?? "", record_id ?? "", minutes_ago ?? 1440, p.GetString("user_filter"), p.GetString("operation"), p.GetString("attribute_name"), max_records ?? 50, p.GetString("from_date"), p.GetString("to_date")))`
  - `"plugin_traces"`:
    - `AllowedKeys = ["type_name", "message_name", "mode"]`
    - Calls `Task.FromResult(new GetPluginTraceLogsTool(conn.OrgService).get_plugin_trace_logs(record_id ?? "", p.GetString("type_name"), entity_name ?? "", p.GetString("message_name"), p.GetString("mode"), correlation_id ?? "", minutes_ago ?? 0, max_records ?? 50))`
  - `"system_jobs"`:
    - `AllowedKeys = ["status", "operation_type", "name_filter"]`
    - Calls `Task.FromResult(new GetSystemJobsTool(conn.OrgService).get_system_jobs(record_id ?? "", entity_name ?? "", p.GetString("status", "failed"), p.GetString("operation_type"), p.GetString("name_filter"), correlation_id ?? "", minutes_ago ?? 0, max_records ?? 50))`

---

### Step 1.9 — Cross-Cutting Phase 1 Updates

Update references to the 18 absorbed RO tool names in these exact files:
1. `Mcp/McpServerHost.cs`:
   - `ToolResourceMap`: replace `[nameof(Tools.ExecuteSqlTool)] = new[] { "instructions_for_sql" }` with `[nameof(Tools.QueryDataTool)] = new[] { "instructions_for_sql" }` (in Phase 1).
   - `BuildConnectionInstructions(...)`: replace `connection_list` with `get_context(action='connections')`.
2. `Mcp/McpToolInvocation.cs`:
   - Update `EnvDescription` to concise wording referencing `get_context(action='connections')`:
     `"Optional .env connection group (numeric id, alias, or 'default'). Omit for startup connection. Call get_context(action='connections') to list groups."`
3. `Mcp/McpConnectionRegistry.cs` (line ~125): update `connection_list` hint → `get_context(action='connections')`.
4. `Commands/McpCommand.cs` (lines ~371–463 `--setup-guide`): update `connection_list` / `whoami` examples to `get_context`.
5. `Mcp/Tools/ExecuteWebApiTool.cs`: update redirects pointing to `whoami`, `execute_sql`, `get_tables` → `get_context(action='whoami')`, `query_data(mode='sql')`, `inspect_metadata(resource='tables')`.
6. `Mcp/Tools/Helper/`: update `[Hint]` strings mentioning `get_tables` and `get_solution_components` in `DisplayNameFirstResolver.cs`, `EntityParserHelper.cs`, `McpToolResults.cs`, `SolutionResolverHelper.cs`.
7. `Mcp/Resources/Instructions/`: update Phase 1 tool call examples in `instructions_for_sql.md`, `data_operations_guide.md`, `server_logic_guide.md`.

---

### Step 1.10 — Phase 1 Unit Tests & Verification Gate

1. Update `DynamicsCrm.DevKit.Cli.UnitTests/Cli/Mcp/Infrastructure/McpServerHostCoverageTests.cs`:
   - Update expected tool count `42` → `29`.
   - Assert catalog contains: `get_context`, `read_instruction`, `query_data`, `inspect_metadata`, `inspect_automation`, `inspect_diagnostics`.
   - Assert catalog does NOT contain any of the 18 retired RO tool names.
2. Update `McpServerHostGapWave2CoverageTests.cs`:
   - Switch `DisabledToolSet.Add(nameof(ExecuteSqlTool))` → `nameof(QueryDataTool)` (asserts `query_data` excluded & `instructions_for_sql` resource excluded).
3. Update `McpToolEntryRoutingCoverageTests.cs`:
   - Replace the 18 absorbed RO tool entries with the 6 Phase-1 entries (`GetContextTool`, `QueryDataTool`, `InspectMetadataTool`, `InspectAutomationTool`, `InspectDiagnosticsTool`; keep `ReadInstructionTool` check).
   - Update `Entry_With_NonStartup_Env_Attributes_Result` to invoke `GetContextTool` (`get_context`) with `env = "2"`.
4. Create `DynamicsCrm.DevKit.Cli.UnitTests/Cli/Mcp/CrossTool/Phase1RouterTests.cs`:
   - Test `McpPayload` (`snake_case`, `camelCase`, `GetJsonString` with native array/object vs string, `ValidateAllowedKeys` unknown key rejection with doc hint, invalid int/bool/double type error).
   - Test EVERY `(tool, resource/mode/action)` route across all 6 Phase 1 tools (valid dispatch, invalid discriminator error, unknown option key error, `ReadOnly == true && Destructive == false && Idempotent == true`, `OutputSchemaType == typeof(JsonObject)` on polymorphic routers).
   - Test `ReadInstructionTool.read_instruction("")` returns all 14 resources and `ReferencedBy` maps to the new Phase-1 tool names.
5. **Run Phase 1 Verification Commands (stop and fix any failure before Phase 2):**
   ```powershell
   dotnet build DynamicsCrm.DevKit.Cli/DynamicsCrm.DevKit.Cli.csproj
   dotnet test DynamicsCrm.DevKit.Cli.UnitTests/DynamicsCrm.DevKit.Cli.UnitTests.csproj --filter "FullyQualifiedName~Mcp"
   .\.agents\skills\devkit-skill-shared\scripts\Release.DynamicsCrm.DevKit.Cli.ps1 -Configuration Release
   devkit mcp --tools
   git diff -- DynamicsCrm.DevKit.Shared/Const.cs
   ```
   Confirm `devkit mcp --tools` lists **29 tools**, all tests pass, and `xxxx.yy.zz HH.mm.ss` is restored.

---

## 3. PHASE 2 — Consolidate 23 Remaining Tools → 8 Domain Tools

> **Outcome of Phase 2:** Server exposes **14 tools total** (6 RO + 8 RW). Full `tools/list` drops from **215,375 bytes → ~38,400 bytes (~-82%)**.

### Step 2.1 — De-expose the 22 Absorbed Mutating/Mixed Tool Classes

Remove `[McpServerToolType]` from the class and `[McpServerTool(...)]` + `[Description(...)]` from `InvokeAsync(...)` on all 22 classes below (keep `public` constructors + business methods untouched):

| Group | Absorbed Classes | Router Tool |
|---|---|---|
| Data (5) | `ManageRecordTool`, `UpsertRecordsTool`, `ManageRecordFileTool`, `ManageDeletedRecordsTool`, `GenerateDemoDataTool` | `ManageDataTool` (`manage_data`) |
| Schema (4) | `ManageTableTool`, `ManageColumnTool`, `ManageRelationshipTool`, `ManageChoiceTool` | `ManageSchemaTool` (`manage_schema`) |
| UI (4) | `ManageFormTool`, `ManageViewTool`, `ManageChartTool`, `ManageAppTool` | `ManageUiTool` (`manage_ui`) |
| Commanding (2) | `ManageRibbonTool`, `ManageCommandTool` | `ManageCommandingTool` (`manage_commanding`) |
| Logic (2) | `ManageCustomApiTool`, `ManageFunctionTool` | `ManageLogicTool` (`manage_logic`) |
| Assets (2) | `ManageWebResourceTool`, `ManageReportTool` | `ManageAssetsTool` (`manage_assets`) |
| Admin (3) | `ManageRoleTool`, `ManageEnvironmentVariableTool`, `PublishCustomizationsTool` | `ManageAdminTool` (`manage_admin`) |

*(Tool #23, `ExecuteWebApiTool.cs`, remains `[McpServerToolType]` as standalone `execute_webapi`.)*

> **Special note on `ManageColumnTool` & `ManageWebResourceTool` internal fields:**
> Check lines 129–131 of `ManageColumnTool.cs` (`worker._workspaceFolder = await WorkspaceFolderHelper.GetAsync(...)`) and lines 116–119 of `ManageWebResourceTool.cs` (`worker._envId = conn.EnvId; worker._workspaceFolder = ...`). Add a thin `internal Task<CallToolResult> ExecuteForRouterAsync(McpServer? server, string envId, ..., CancellationToken ct)` helper on those two classes (or set `internal` properties) so the router preserves exact `_workspaceFolder` and `_envId` behavior!

---

### Step 2.2 — Create `ManageDataTool.cs` (`manage_data`)

- **Attributes:** `Name = "manage_data", Destructive = true, ReadOnly = false, Idempotent = false, UseStructuredContent = true, OutputSchemaType = typeof(JsonObject)`
- **Docs referenced in description:** `docs://data_operations_guide`
- **Parameters (7 + injected `server`, `ct`):**
  - `McpServer? server = null`
  - `string? resource = null` — `Required: 'record', 'bulk', 'file', 'deleted', or 'demo'.`
  - `string? action = null` — `record: create|read|update|delete|associate|disassociate|add_to_solution|remove_from_solution|list_solutions|add_solution_component; bulk: upsert (default); file: info|upload|download|delete; deleted: list|detail|restore|status|turn; demo: generate (default).`
  - `string? entity_name = null`
  - `string? record_id = null`
  - `string? solution_name = null`
  - `JsonObject? payload = null`
  - `string? env = null`
- **Exact Handler Wiring & `AllowedKeys`:**
  1. `"record"` → `new ManageRecordTool(conn.OrgService, conn.Options, conn.Context).manage_record(...)`
     - `AllowedKeys = ["fields_json", "columns", "related_entity_name", "related_record_id", "relationship_name", "component_type"]`
     - Map: `action ?? ""`, `entity_name ?? ""`, `record_id ?? ""`, `p.GetJsonString("fields_json")`, `p.GetString("columns")`, `p.GetString("related_entity_name")`, `p.GetString("related_record_id")`, `p.GetString("relationship_name")`, `solution_name`, `p.GetJsonElement("component_type")`
  2. `"bulk"` (default `action = "upsert"`; reject other actions) → `new UpsertRecordsTool(conn.Client, conn.Options, conn.Context).upsert_records(...)`
     - `AllowedKeys = ["records_json", "max_parallelism", "bypass_custom_logic", "key_fields"]`
     - Map: `entity_name ?? ""`, `p.GetJsonString("records_json")`, `p.GetInt("max_parallelism", 0)`, `p.GetBool("bypass_custom_logic", false)`, `p.GetJsonString("key_fields")`
  3. `"file"` → `new ManageRecordFileTool(conn.OrgService, conn.Options, conn.Context).manage_record_file(...)`
     - `AllowedKeys = ["column_name", "file_path", "content_base64", "file_name", "full_size"]`
     - Map: `server`, `action ?? ""`, `entity_name ?? ""`, `p.GetString("column_name")`, `record_id ?? ""`, `p.GetString("file_path")`, `p.GetString("content_base64")`, `p.GetString("file_name")`, `p.GetBool("full_size", false)`
  4. `"deleted"` → `new ManageDeletedRecordsTool(conn.OrgService, conn.Options, conn.Context, conn.WebApi).manage_deleted_records(...)`
     - `AllowedKeys = ["record_ids", "name_filter", "max_records", "turn", "retention_days", "name_prefix"]`
     - Map: `string.IsNullOrWhiteSpace(action) ? "list" : action`, `entity_name ?? ""`, `record_id ?? ""`, `p.GetStringArray("record_ids")`, `p.GetString("name_filter")`, `p.GetInt("max_records", 100)`, `p.GetString("turn")`, `p.GetInt("retention_days", 30)`, `p.GetString("name_prefix", "[RESTORE] ")`
  5. `"demo"` (default `action = "generate"`; reject other actions) → `new GenerateDemoDataTool(conn.OrgService, conn.Options).generate_demo_data(...)`
     - `AllowedKeys = ["from_date", "to_date", "count", "fields", "seed", "field_overrides"]`
     - Map: `server`, `entity_name ?? ""`, `p.GetString("from_date")`, `p.GetString("to_date")`, `p.GetInt("count", 10)`, `p.GetString("fields")`, `p.GetInt("seed", 0)`, `p.GetJsonString("field_overrides")`

---

### Step 2.3 — Create `ManageSchemaTool.cs` (`manage_schema`)

- **Attributes:** `Name = "manage_schema", Destructive = true, ReadOnly = false, Idempotent = false, UseStructuredContent = true, OutputSchemaType = typeof(JsonObject)`
- **Docs referenced in description:** `docs://schema_tools_guide`
- **Parameters (7 + `server`, `ct`):**
  - `McpServer? server = null`
  - `string? resource = null` — `Required: 'table', 'column', 'relationship', or 'choice'.`
  - `string? action = null` — `table/column: 'upsert' (default, auto-detects create vs update), 'create', or 'update'; relationship: 'create_1n'|'create_nn'|'update'|'delete'|'add_target'|'remove_target'; choice: 'list'|'detail'|'create'|'update'.`
  - `string? entity_name = null` — `Table logical/display name (required for column; optional for table/relationship polymorphic).`
  - `string? name = null` — `Target name: table logical_name, column logical_name, relationship_name, or global choice optionset_name.`
  - `string? solution_name = null` — `Unmanaged solution unique/display name (required for creates and label-only choice adds).`
  - `JsonObject? payload = null` — `Action-specific metadata properties. See docs://schema_tools_guide.`
  - `string? env = null`
- **Exact Handler Wiring & `AllowedKeys`:**
  1. `"table"` (accept `action` in `null | "" | "upsert" | "create" | "update"`) → `new ManageTableTool(conn.OrgService, conn.Options, conn.Context).manage_table(...)`
     - `AllowedKeys` (all 28 non-env/non-solution/non-logical_name params, plus allow `logical_name` fallback if caller put it in payload):
       `display_name, display_collection_name, description, primary_attribute_name, primary_attribute_display_name, ownership_type, table_type, is_quick_create_enabled, is_audit_enabled, is_search_enabled, primary_attribute_max_length, schema_name, logical_name, primary_attribute_schema_name, icon_vector_name, is_duplicate_detection_enabled, is_access_teams_enabled, is_document_management_enabled, is_onenote_integration_enabled, is_mail_merge_enabled, is_custom_help_enabled, custom_help_url, is_mobile_offline_enabled, is_available_offline, is_visible_in_mobile, is_visible_in_mobile_client, is_read_only_in_mobile_client, is_retention_enabled`
     - Effective `logicalName`: `!string.IsNullOrWhiteSpace(name) ? name : (!string.IsNullOrWhiteSpace(entity_name) ? entity_name : p.GetString("logical_name"))`
  2. `"column"` (accept `action` in `null | "" | "upsert" | "create" | "update"`) → `new ManageColumnTool(conn.OrgService, conn.Options, conn.Context, conn.WebApi, _connections)` with `_workspaceFolder = await WorkspaceFolderHelper.GetAsync(server, ct)` → `.manage_column(...)`
     - `AllowedKeys` (all 36 non-env/non-entity/non-solution params):
       `logical_name, attribute_type, display_name, description, required_level, max_length, min_value, max_value, precision, format, behavior, precision_source, options, global_optionset_name, lookup_target, lookup_relationship_name, true_label, false_label, add_options, update_options, delete_options, is_audit_enabled, is_valid_for_advanced_find, is_secured, is_sortable, default_value, schema_name, formula_definition, formula_source_type, can_store_full_image, auto_number_format, clear_auto_number, auto_number_seed, is_alternate_key, formula_expression, raw_formula_definition`
     - Use `p.GetJsonString` for `options`, `add_options`, `update_options`, `delete_options`; preserve exact defaults (`max_length: 0`, `precision: -1`, `precision_source: -1`).
     - Effective `logicalName`: `!string.IsNullOrWhiteSpace(name) ? name : p.GetString("logical_name")`.
  3. `"relationship"` → `new ManageRelationshipTool(conn.OrgService, conn.Options, conn.Context).manage_relationship(...)`
     - `AllowedKeys`: `relationship_name, referenced_entity, referencing_entity, entity1, entity2, intersect_entity_name, attribute_name, cascade_preset, cascade_assign, cascade_delete, cascade_merge, cascade_reparent, cascade_share, cascade_unshare, menu_behavior, menu_group, menu_order, lookup_display_name, is_hierarchical`
     - Effective `relationshipName`: `!string.IsNullOrWhiteSpace(name) ? name : p.GetString("relationship_name")`; default `menu_order = 10000`.
  4. `"choice"` → `new ManageChoiceTool(conn.OrgService, conn.Options, conn.Context).manage_choice(...)`
     - `AllowedKeys`: `optionset_name, display_name, filter, description, options, add_options, update_options, remove_options, option_colors`
     - Effective `optionsetName`: `!string.IsNullOrWhiteSpace(name) ? name : p.GetString("optionset_name")`.

---

### Step 2.4 — Create `ManageUiTool.cs` (`manage_ui`)

- **Attributes:** `Name = "manage_ui", Destructive = true, ReadOnly = false, Idempotent = false, UseStructuredContent = true, OutputSchemaType = typeof(JsonObject)`
- **Docs referenced in description:** `docs://instructions_for_formxml`, `docs://instructions_for_views`, `docs://instructions_for_manage_app`, `docs://schema_tools_guide`, `schema://formxml`, `schema://layoutxml`, `schema://sitemapxml`
- **Parameters (8 + `server`, `ct`):**
  - `McpServer? server = null`
  - `string? resource = null` — `Required: 'form', 'view', 'chart', or 'app'.`
  - `string? action = null` — `form: list|detail|navigation_list|create|update|rename|undo; view/chart: list|detail|create|update|rename|set_default|undo; app: list|detail|create|update|update_navigation|add_components|remove_components|validate|undo.`
  - `string? entity_name = null` — `Entity Display/logical name (omit for system dashboard form_type=0 or app list/create).`
  - `string? id = null` — `GUID (form_id, view_id, chart_id, or app GUID).`
  - `string? name = null` — `Name/filter (form_name, view_name, chart_name, or app name/unique_name).`
  - `string? solution_name = null`
  - `JsonObject? payload = null`
  - `string? env = null`
- **Exact Handler Wiring & `AllowedKeys`:**
  1. `"form"` → `new ManageFormTool(conn.OrgService, conn.Options, conn.Context).manage_form(...)`
     - `AllowedKeys`: `form_type, include_formxml, formxml, operations`
     - Map: `server`, `action ?? ""`, `entity_name ?? ""`, `id ?? ""`, `name ?? ""`, `p.GetInt("form_type", 0)`, `p.GetBool("include_formxml", false)`, `p.GetString("formxml")`, `p.GetJsonString("operations")`, `solution_name ?? ""`
  2. `"view"` → `new ManageViewTool(conn.OrgService, conn.Options, conn.Context, conn.WebApi).manage_view(...)`
     - `AllowedKeys`: `is_personal_view, fetchxml, layoutxml, cell_updates_json, include_layoutjson, description`
     - Map: `server`, `action ?? ""`, `entity_name ?? ""`, `id ?? ""`, `name ?? ""`, `p.GetBool("is_personal_view", false)`, `p.GetString("fetchxml")`, `p.GetString("layoutxml")`, `p.GetJsonString("cell_updates_json")`, `p.GetBool("include_layoutjson", false)`, `p.GetNullableString("description")`, `solution_name`
  3. `"chart"` → `new ManageChartTool(conn.OrgService, conn.Options, conn.Context).manage_chart(...)`
     - `AllowedKeys`: `chart_type, group_by_column, aggregate_column, aggregate_type, measures, filter, presentationdescription, description, validate, publish, confirmed`
     - Map: `server`, `action ?? ""`, `entity_name ?? ""`, `id ?? ""`, `name ?? ""`, `p.GetString("chart_type")`, `p.GetString("group_by_column")`, `p.GetString("aggregate_column")`, `p.GetString("aggregate_type")`, `p.GetString("measures")`, `p.GetString("filter")`, `p.GetString("presentationdescription")`, `p.GetString("description")`, `solution_name ?? ""`, `p.GetBool("validate", true)`, `p.GetBool("publish", true)`, `p.GetBool("confirmed", false)`
  4. `"app"` → `new ManageAppTool(conn.OrgService, conn.Options, conn.Context).manage_app(...)`
     - `AllowedKeys`: `app, app_name, display_name, unique_name, description, icon_webresource, operations, max_records, view_ids, form_ids, dashboard_ids, chart_ids`
     - Effective `appSelector`: `!string.IsNullOrWhiteSpace(id) ? id : (!string.IsNullOrWhiteSpace(name) ? name : p.GetString("app"))`
     - Effective `appNameFilter`: `p.HasKey("app_name") ? p.GetString("app_name") : (name ?? "")`
     - Map: `server`, `string.IsNullOrWhiteSpace(action) ? "detail" : action`, `appSelector`, `appNameFilter`, `solution_name ?? ""`, `p.GetString("display_name")`, `p.GetString("unique_name")`, `p.GetString("description")`, `p.GetString("icon_webresource")`, `p.GetJsonString("operations")`, `p.GetInt("max_records", 100)`, `entity_name ?? ""`, `p.GetStringArray("view_ids")`, `p.GetStringArray("form_ids")`, `p.GetStringArray("dashboard_ids")`, `p.GetStringArray("chart_ids")`

---

### Step 2.5 — Create `ManageCommandingTool.cs` (`manage_commanding`)

- **Attributes:** `Name = "manage_commanding", Destructive = true, ReadOnly = false, Idempotent = false, UseStructuredContent = true, OutputSchemaType = typeof(JsonObject)`
- **CRITICAL Description Guardrail (MUST KEEP PROMINENT):**
  - Default to `resource='ribbon'` (classic RibbonDiffXml via `devkit-ribbon` solution) for any generic/classic/JavaScript button request.
  - Use `resource='command'` (modern Power Fx `appaction`) **ONLY** when the user explicitly requests modern command bar / Power Fx / appaction / command designer. When in doubt → `ribbon`.
  - MUST reference: `docs://instructions_for_manage_ribbon`, `docs://instructions_for_manage_command`.
- **Parameters (7 + `server`, `ct`):**
  - `McpServer? server = null`
  - `string? resource = null` — `Required: 'ribbon' (classic RibbonDiffXml — use by default for buttons) or 'command' (modern Power Fx appaction ONLY when explicitly requested).`
  - `string? action = null` — `ribbon: list|buttons|detail|update|undo; command: list|detail|create|update|delete|hide|show|add_flyout|update_flyout|add_flyout_item|remove_flyout_item|add_split_button|update_split_button.`
  - `string? entity_name = null`
  - `string? id = null` — `command: appaction GUID (command_id).`
  - `string? solution_name = null` — `command: solution unique/display name.`
  - `JsonObject? payload = null`
  - `string? env = null`
- **Exact Handler Wiring & `AllowedKeys`:**
  1. `"ribbon"` → `new ManageRibbonTool(conn.OrgService, conn.Options, conn.Context).manage_ribbon(...)`
     - `AllowedKeys`: `operations, ribbonxml`
     - Map: `server`, `action ?? ""`, `entity_name ?? ""`, `p.GetJsonString("operations")`, `p.GetString("ribbonxml")`
  2. `"command"` → `new ManageCommandTool(conn.OrgService, conn.Options, conn.Context).manage_command(...)`
     - `AllowedKeys` (all 23 remaining params of `manage_command`):
       `location, app_id, label, onclick_type, javascript_webresource, javascript_function, font_icon, icon_webresource, tooltip_title, tooltip_description, sequence, hidden, app_name, origin, action_type, name_filter, include_rules, include_children, max_records, items, flyout_command_id, scope, uniquename`
     - Map all 27 parameters verbatim (`p.GetJsonString("items")`, `p.GetInt("sequence", 0)`, `p.GetInt("max_records", 50)`, `p.GetBool("hidden", false)`, `p.GetBool("include_rules", false)`, `p.GetBool("include_children", false)`).

---

### Step 2.6 — Create `ManageLogicTool.cs` (`manage_logic`)

- **Attributes:** `Name = "manage_logic", Destructive = true, ReadOnly = false, Idempotent = false, UseStructuredContent = true, OutputSchemaType = typeof(JsonObject)`
- **Docs referenced in description:** `docs://server_logic_guide`
- **Parameters (7 + `ct`):**
  - `string? resource = null` — `Required: 'custom_api' or 'function' (Power Fx functions).`
  - `string? action = null` — `custom_api: list|detail|create|update|delete; function: list|detail|validate|invoke (create/update/delete gated).`
  - `string? name = null` — `api_name or function_name (Display Name, unique name, or GUID).`
  - `string? entity_name = null` — `custom_api: bound entity filter/target.`
  - `string? solution_name = null`
  - `JsonObject? payload = null`
  - `string? env = null`
- **Exact Handler Wiring & `AllowedKeys`:**
  1. `"custom_api"` → `new ManageCustomApiTool(conn.OrgService, conn.Options, conn.Context).manage_custom_api(...)`
     - `AllowedKeys`: `display_name, description, binding_type, is_function, is_private, allowed_custom_processing_step_type, workflow_sdk_step_enabled, execute_privilege_name, request_parameters, response_properties, include_microsoft, status, max_records`
     - Use `p.GetJsonString` for `request_parameters`, `response_properties`; defaults `status = "active"`, `max_records = 100`.
  2. `"function"` → `new ManageFunctionTool(conn.OrgService, conn.Options, conn.Context).manage_function(...)`
     - `AllowedKeys`: `definition_json, arguments_json, record_id, max_records, include_managed`
     - Use `p.GetJsonString` for `definition_json`, `arguments_json`; default `max_records = 50`.

---

### Step 2.7 — Create `ManageAssetsTool.cs` (`manage_assets`)

- **Attributes:** `Name = "manage_assets", Destructive = true, ReadOnly = false, Idempotent = false, UseStructuredContent = true, OutputSchemaType = typeof(JsonObject)`
- **Docs referenced in description:** `docs://instructions_for_manage_report`, `docs://instructions_for_views`
- **Parameters (7 + `server`, `ct`):**
  - `McpServer? server = null`
  - `string? resource = null` — `Required: 'webresource' (JS/HTML/CSS/SVG/RESX/...) or 'report' (SSRS reports & local RDL datasets).`
  - `string? action = null` — `webresource: list|detail|create|update|delete; report: list|detail|create|download|update|add_dataset|update_dataset.`
  - `string? id = null` — `web_resource_id or report_id (GUID, name, or .rdl filename).`
  - `string? name = null` — `webresource: unique name (create) or contains filter (list); report: new report name (create) or name_filter (list).`
  - `string? solution_name = null`
  - `JsonObject? payload = null`
  - `string? env = null`
- **Exact Handler Wiring & `AllowedKeys`:**
  1. `"webresource"` → `new ManageWebResourceTool(conn.OrgService, conn.Options, conn.Context)` (set `_envId = conn.EnvId` and `_workspaceFolder = await WorkspaceFolderHelper.GetAsync(server, ct)` when `include_content && action == "detail"`) → `.manage_webresource(...)`
     - `AllowedKeys`: `display_name, description, file_path, type, type_filter, max_records, include_content`
  2. `"report"` → `new ManageReportTool(conn.OrgServiceAsync, conn.Options, conn.Context, conn.ConnectionInfo).manage_report(...)`
     - `AllowedKeys`: `file_path, description, language, name_filter, max_records, dataset_name, fetchxml, entity_name, output_folder, prefilter`
     - Note: for `list`, `nameFilter = p.HasKey("name_filter") ? p.GetString("name_filter") : (name ?? "")`; default `prefilter = true`, `max_records = 50`.

---

### Step 2.8 — Create `ManageAdminTool.cs` (`manage_admin`)

- **Attributes:** `Name = "manage_admin", Destructive = true, ReadOnly = false, Idempotent = false, UseStructuredContent = true, OutputSchemaType = typeof(JsonObject)`
- **Parameters (7 + `server`, `ct`):**
  - `McpServer? server = null`
  - `string? resource = null` — `Required: 'role' (security roles), 'env_var' (environment variables), or 'publish' (PublishXml/PublishAll).`
  - `string? action = null` — `role: list|detail|user|assign|unassign|create|update|delete|copy|restore; env_var: list|detail|create|update|delete|clear; publish: publish (default).`
  - `string? target = null` — `role: role_id (GUID/name); env_var: variable_name; publish: comma-separated entities (empty with no payload targets = PublishAll).`
  - `string? entity_name = null` — `role: filter privileges by entity (detail/user).`
  - `string? solution_name = null` — `role (create/update/copy) or env_var (list/create).`
  - `JsonObject? payload = null`
  - `string? env = null`
- **Exact Handler Wiring & `AllowedKeys`:**
  1. `"role"` → `new ManageRoleTool(conn.OrgService, conn.Options, conn.Context).manage_role(...)`
     - `AllowedKeys`: `user_id, team_id, role_id, role_name, business_unit_id, privileges, backup_path, max_records`
     - Effective `roleId`: `!string.IsNullOrWhiteSpace(target) ? target : p.GetString("role_id")`; `privileges`: `p.GetJsonString("privileges")`.
  2. `"env_var"` → `new ManageEnvironmentVariableTool(conn.OrgService, conn.Options, conn.Context).manage_environment_variable(...)`
     - `AllowedKeys`: `variable_name, display_name, type, default_value, value, description, max_records`
     - Effective `varName`: `!string.IsNullOrWhiteSpace(target) ? target : p.GetString("variable_name")`.
  3. `"publish"` (accept `action` in `null | "" | "publish"`) → `new PublishCustomizationsTool(conn.OrgService, conn.Options, conn.Context).publish_customizations(...)`
     - `AllowedKeys`: `entities, optionset_names, include_ribbons, dashboards, webresources, include_global_optionset, include_sitemap, appmodules`
     - Effective `entities`: `!string.IsNullOrWhiteSpace(target) ? target : (!string.IsNullOrWhiteSpace(entity_name) ? entity_name : p.GetString("entities"))`.

---

### Step 2.9 — Update `ExecuteWebApiTool.cs` (`execute_webapi` — Keep Standalone)

1. Keep `[McpServerTool(Name = "execute_webapi", ..., OutputSchemaType = typeof(WebApiResult))]`.
2. Make optional parameters nullable (`string? method = "GET"`, `string? url = null`, `string? body = null`, `string? headers = null`, `bool? include_headers = null`, `int? max_response_lines = null`, `string? env = null`).
3. Update **EVERY** block/redirect hint string and `[Description]` `RELATED TOOLS` reference to the 14 consolidated tool names:

| Old Redirect Target | New Redirect Target |
|---|---|
| `whoami` | `get_context(action='whoami')` |
| `execute_sql` | `query_data(mode='sql')` |
| `get_tables` | `inspect_metadata(resource='tables')` |
| `manage_table` / `manage_column` / `manage_relationship` / `manage_choice` | `manage_schema(resource='table'\|'column'\|'relationship'\|'choice')` |
| `manage_form` / `manage_view` / `manage_chart` / `manage_app` | `manage_ui(resource='form'\|'view'\|'chart'\|'app')` |
| `manage_ribbon` / `manage_command` | `manage_commanding(resource='ribbon'\|'command')` |
| `manage_custom_api` / `manage_function` | `manage_logic(resource='custom_api'\|'function')` |
| `manage_webresource` / `manage_report` | `manage_assets(resource='webresource'\|'report')` |
| `manage_role` / `manage_environment_variable` / `publish_customizations` | `manage_admin(resource='role'\|'env_var'\|'publish')` |
| `manage_record` / `manage_record_file` / `manage_deleted_records` | `manage_data(resource='record'\|'file'\|'deleted')` |

---

### Step 2.10 — Cross-Cutting Phase 2 Updates

1. **`Mcp/McpServerHost.cs` (`ToolResourceMap`):**
   Update all entries using `nameof(...)`:
   ```csharp
   internal static readonly Dictionary<string, string[]> ToolResourceMap = new()
   {
       [nameof(Tools.QueryDataTool)] = new[] { "instructions_for_sql" },
       [nameof(Tools.ManageCommandingTool)] = new[] { "instructions_for_manage_ribbon", "instructions_for_manage_command" },
       [nameof(Tools.ManageAssetsTool)] = new[] { "instructions_for_manage_report" },
       [nameof(Tools.ManageUiTool)] = new[] { "formxml_instructions", "layoutxml_instructions", "instructions_for_manage_app" },
       [nameof(Tools.ManageSchemaTool)] = new[] { "schema_tools_guide" },
   };
   ```
   *(All resource names above match the exact `[McpServerResource(Name = ...)]` attributes in `InstructionResources.cs` — note that the existing `McpServerHost.cs` had `"instructions_for_formxml"`, whereas `InstructionResources.cs` line 56 declares `Name = "formxml_instructions"` and line 66 declares `Name = "layoutxml_instructions"`.)*
2. **`Mcp/Tools/ReadInstructionTool.cs`:** Update `CatalogEntries` titles to reflect the 14 new tool names.
3. **`Mcp/Tools/Helper/`:** Update remaining `[Hint]` strings (`manage_choice`, `manage_app`, `manage_webresource`, `manage_report`, `manage_environment_variable`, `manage_record`, `manage_view`) in `DisplayNameFirstResolver.cs`, `McpToolResults.cs`, `RoleBackupHelper.cs`, `ViewBackupHelper.cs`.
4. **`Mcp/Resources/Instructions/*.md` (all 10 embedded guides) & `SchemaResources.cs`:**
   - Update call examples to the 14 consolidated tool names.
   - Add concise **Payload Key Reference Tables** to `schema_tools_guide.md` (table/column/relationship/choice), `data_operations_guide.md` (record/bulk/file/deleted/demo), `instructions_for_manage_command.md`, `instructions_for_manage_app.md`, `instructions_for_manage_report.md`, `instructions_for_views.md`, `instructions_for_formxml.md`, `instructions_for_manage_ribbon.md`, `server_logic_guide.md`.

---

### Step 2.11 — Phase 2 Unit Tests & Automated Guardrails

1. Update `McpServerHostCoverageTests.cs`:
   - `Assert.AreEqual(14, names.Length);`
   - Assert exact 14 tool names: `get_context`, `read_instruction`, `query_data`, `inspect_metadata`, `inspect_automation`, `inspect_diagnostics`, `manage_data`, `manage_schema`, `manage_ui`, `manage_commanding`, `manage_logic`, `manage_assets`, `manage_admin`, `execute_webapi`.
2. Update `McpToolEntryRoutingCoverageTests.cs`:
   - Update `Tools` array to the exact 14 `[McpServerToolType]` classes.
3. Create `DynamicsCrm.DevKit.Cli.UnitTests/Cli/Mcp/CrossTool/Phase2RouterTests.cs`:
   - Verify EVERY `(router, resource, action)` dispatch path, unknown payload key rejection, dual `snake_case`/`camelCase` resolution, native JSON array/object coercion for JSON-string handler args, and `DryRun` preservation.
4. **Add Automated Governance & Token Budget Guard Tests (`McpToolBudgetGuardTests.cs`):**
   - `Assert.IsTrue(tools.Count <= 16, "MCP tool budget hard cap is 16. Add an action or resource to an existing domain router instead of adding a new top-level tool.");`
   - Serialize full `ToolCollection` via `AddMcpServer().WithToolsFromAssembly(typeof(McpServerHost).Assembly)` and assert:
     - Total compact JSON payload `< 48_000` bytes (down from 215,375 bytes).
     - Every optional parameter on every `[McpServerTool]` is absent from `inputSchema.required` (catches accidental non-nullable `string = ""` regressions!).
     - Every polymorphic router has `outputSchema == {"type":"object"}` (catches accidental omission of `OutputSchemaType`!).
     - All 6 Phase-1 RO tools have `readOnlyHint == true && destructiveHint == false`.

---

### Step 2.12 — Phase 2 Verification Checklist & Commands

```powershell
# 1. Build CLI
dotnet build DynamicsCrm.DevKit.Cli/DynamicsCrm.DevKit.Cli.csproj

# 2. Run ALL CLI unit tests (net10.0)
dotnet test DynamicsCrm.DevKit.Cli.UnitTests/DynamicsCrm.DevKit.Cli.UnitTests.csproj

# 3. Rebuild & reinstall devkit CLI in Release (per AGENTS.md / devkit-skill-build-release-cli)
.\.agents\skills\devkit-skill-shared\scripts\Release.DynamicsCrm.DevKit.Cli.ps1 -Configuration Release

# 4. Verify installed tool list shows exactly 14 tools
devkit mcp --tools

# 5. Verify build-date placeholder restored in DynamicsCrm.DevKit.Shared/Const.cs
git diff -- DynamicsCrm.DevKit.Shared/Const.cs
```

*(Note per `AGENTS.md`: Do NOT run live MCP verification unless explicitly asked by the user.)*

---

## 4. Future Extensibility Playbook (Tools #43, #44, #45...)

When anh P requests a brand-new MCP capability in the future, **follow this decision ladder strictly**:

1. **Tier 1 (Default — ~85%): Add a new `action` to an existing `(tool, resource)`.**
   - Example: delete table/column → `manage_schema(resource="table"|"column", action="delete")`.
2. **Tier 2 (Standard — ~14%): Add a new `resource` to one of the 14 existing domain routers:**
   - **Read-Only inspection:**
     - Connection/identity/URL/local utility → `get_context`
     - New query engine → `query_data`
     - Static metadata/catalog (solutions, publishers, canvas apps, business units, teams, connection references) → `inspect_metadata`
     - Automation/server logic (webhooks, service endpoints, AI prompts, dataflows) → `inspect_automation`
     - Logs/jobs/history (import jobs, bulk delete jobs, duplicate detection jobs) → `inspect_diagnostics`
   - **Mutations / Mixed lifecycle:**
     - Runtime row/file/bulk/demo data → `manage_data`
     - Schema (keys, table/column delete, schema properties) → `manage_schema`
     - UI (dialogs, custom pages, dashboards) → `manage_ui`
     - Buttons / command bars → `manage_commanding`
     - Server logic (plugin steps, workflow/flow activate/deactivate, webhooks) → `manage_logic`
     - File-backed templates/assets (email templates, Word/document templates) → `manage_assets`
     - Admin / security / config / ALM (solutions, teams, business units, field security profiles, connection references) → `manage_admin`
3. **Tier 3 (Exception Only — Hard Cap = 16 tools):**
   - Only create a new `[McpServerToolType]` if the capability does not belong to any of the 14 domains AND crosses a distinct security/execution boundary AND anh P explicitly approves bumping the tool count (never >16 without revisiting the budget).

### 6-Step Coding Checklist for Capability #43 (Zero New Top-Level Tools)
1. Create pure handler class `ManageXxxHandler : McpToolBase` (NO `[McpServerToolType]`, inject only required interfaces).
2. Add one `case "<new_resource>":` branch in the matching domain router with explicit `AllowedKeys` validation via `McpPayload`.
3. Add 1 concise line to the router's `[Description]` naming the new `resource` and its `action`s (~25 tokens).
4. Document the full `payload` contract and examples in the matching `Mcp/Resources/Instructions/*.md` guide (or add a new `docs://` guide + register in `InstructionResources.cs`, `ReadInstructionTool.cs`, and `McpServerHost.ToolResourceMap`).
5. Add a runtime block/redirect rule in `ExecuteWebApiTool.cs` if Dataverse exposes a dangerous raw endpoint for it.
6. Add handler unit tests + router dispatch test; verify `McpToolBudgetGuardTests` stays green.

---

## 5. Quick Variant Adjustments (Based on Anh P's Approval)

If anh P selects one of the alternative options in the HTML proposal:
- **Variant B (13 tools):** Merge `ManageLogicTool` + `ManageAssetsTool` into a single `ManageExtensionsTool` (`manage_extensions`, `resource = "custom_api" | "function" | "webresource" | "report"`). Update `McpServerHostCoverageTests` count `14 → 13`.
- **Variant C (12 tools):** Apply Variant B AND merge `ManageCommandingTool` into `ManageUiTool` (`resource = "form" | "view" | "chart" | "app" | "ribbon" | "command"`), preserving the classic-ribbon-first guardrail in `ManageUiTool`'s description. Update count `14 → 12`.
- **Keep `whoami` standalone (+1 tool = 15 tools):** Leave `[McpServerToolType]` / `[McpServerTool(Name="whoami")]` on `WhoAmITool.cs` (make `env` nullable), and keep `GetContextTool` for `connections` + `parse_url` (or `action = "connections" | "parse_url"`). Update Phase 1 count `29 → 30`, Phase 2 count `14 → 15`.
