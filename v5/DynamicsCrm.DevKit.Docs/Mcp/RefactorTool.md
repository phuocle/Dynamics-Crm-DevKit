# MCP Tool Refactor Playbook

Reusable checklist for reviewing and refactoring any MCP tool under
`DynamicsCrm.DevKit.Cli/Mcp/Tools/`. Invoke by mentioning this file
plus the tool name, e.g. *"apply RefactorTool.md to GetBusinessProcessFlowsTool.cs"*.

---

## When to use

Run this playbook when:
- Adding a new MCP tool (apply rules from the start).
- Reviewing an existing tool for consistency with the rest of the suite.
- Merging a tool from another branch that has drifted from current conventions.

If the tool was already reviewed and is listed in [ReviewTools.md](ReviewTools.md),
skip — only re-review when behavior or description actually changes.

---

## Workflow — 4 steps, in order

### Step 1: Consolidate try/catch

**Rule**: Exactly **one** `try` block in the **main public method only**. It must wrap
the entire method body — open immediately after the `{` of the method signature, close
before the method's closing `}`.

```csharp
public CallToolResult my_tool(/* params */)
{
    try
    {
        // ALL logic here: validation, dispatch, helper calls
        return GetList(...);
    }
    catch (Exception ex)
    {
        return ThrowException(ex);
    }
}
```

**Do NOT**:
- Add `try` blocks inside helper methods (`GetList`, `GetDetail`, `FindXxx`, `ResolveXxx`).
  Let exceptions propagate to the single top-level catch.
- Use `catch { return null; }` or `catch { /* swallow */ }` — these hide Dataverse
  errors from the caller. The original `ex.Message` value is rarely informative enough
  on its own; `ThrowException` returns the full exception context.
- Catch specific exception types (`catch (DataException)`, etc.) at the tool level.
  The Dataverse SDK throws `FaultException<T>` and similar — let them surface.

**Audit command** (run after editing):
```bash
grep -nE "try\s*\{|catch\s*\(" DynamicsCrm.DevKit.Cli/Mcp/Tools/<Tool>.cs
```
Expect exactly 2 matches: the `try {` and `catch (Exception ex) {` of the main method.

**Rule 3.1 — Contract helpers are exempt from the single-try rule.** A helper method
whose declared contract is a value type (e.g. `string?`, `bool`, `OptionSetMetadata?`)
rather than "throw on failure" is allowed to contain its own `try/catch` blocks.
The "single top-level catch" rule applies only to the **main public method**;
contract helpers that translate exceptions into return values are exempt.

Example (from `ManageViewTool.cs`):
```csharp
// ValidateFetchXmlExpression is a contract helper: returns string?.
// null  -> FetchXML is valid.
// non-null -> human-readable error message.
// It is allowed to contain inner try/catch blocks for HttpOperationException
// and JSON parse failure fallback.
private string? ValidateFetchXmlExpression(string fetchXml)
{
    try { /* call Dataverse */ } catch (Exception ex) { return ex.Message; }
    try { /* parse JSON */ } catch { return null; }   // safe fallback
    return null;
}
```

Without this exemption, every contract helper would be misclassified as a Step-1
violation. See [ToolAnalysis2026-07-27.md § 3.2](ToolAnalysis2026-07-27.md) for the
audit pass that surfaced this rule.

---

### Step 2: Use ThrowException in the catch

**Rule**: The single catch must return `ThrowException(ex)`. Never wrap the exception
yourself.

```csharp
catch (Exception ex)
{
    return ThrowException(ex);   // ✅
    // return Error($"Error: ... {ex.Message}");   // ❌
}
```

`ThrowException` is defined in [McpToolBase.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/McpToolBase.cs)
and returns a `CallToolResult` with the exception class name, message, and (for
Dataverse faults) the error code. Users get actionable detail instead of a vague
single-line summary.

For **validation errors** (bad enum value, missing required input that the SDK
hasn't touched yet), use the `Error(message)` helper with a clear, actionable
message — those are not exceptions:

```csharp
if (!allowedStatuses.Contains(status))
    return Error($"Error: Invalid status '{status}'. Use one of: {string.Join(", ", allowedStatuses)}.");
```

---

### Step 3: Review the tool description

The `[Description(...)]` attribute on the `[McpServerTool]` method is what MCP
clients see when deciding whether to call the tool. Two template families —
pick the one that matches the tool's role.

#### How to choose

| Tool has... | Use template |
|---|---|
| `Destructive = false`, `Idempotent = true`, returns metadata only | **Read template** |
| `Destructive = true`, multiple actions (`list`/`detail`/`create`/`update`/`delete`/`rename`/etc.), mutates server state | **CRUD template** |
| Mixed (some modes destructive, some not — e.g. `manage_view` lists + creates) | **CRUD template** (CRUD template covers read-only modes via ACTIONS section) |

If unsure, default to **CRUD template** — it's a superset. The read template
is just CRUD with the dangerous sections removed.

---

#### Template A — Read template (use for `get_*` and inspection tools)

Tools in this family: `get_messages`, `get_custom_apis`, `get_plugin_trace_logs`,
`whoami`, `parse_record_url`, `execute_fetchxml`.

```
<one-line "what it returns">

MODES:                                              [skip if single mode]
- list (default): <what list returns + filters/caps>
- detail: <what detail requires + returns; which params are ignored>

OUTPUT:                                             [REQUIRED]
- list: <text shape> + structured {<field list>}
- detail: <text shape> + structured {<field list>}

WHEN TO USE:                                        [REQUIRED]
- <concrete use case 1>
- <concrete use case 2>
- <concrete use case 3>
- <redirect to related tool> (if applicable)

WHEN NOT TO USE:                                     [optional but encouraged]
- <alternative tool name> — <when to use that instead>

COMMON MISTAKES:                                    [optional]
- <pitfall + correct call>

RELATED TOOLS:                                      [optional]
- <tool> (<when to chain to it>)

FUZZY/AMBIGUITY:                                    [REQUIRED if any param is fuzzy]
- <param>: resolves Display Name contains first, then <other> contains
- <param> default <value>; set/omit to <effect>
- 0 or 2+ matches returns a disambiguation list — call again with exact GUID/name
```

**Section guidance**:
- **`MODES`**: explicit about which params are ignored in which mode. Example:
  `entity_name is ignored in detail mode`.
- **`OUTPUT`**: document both the human-readable text shape AND the structured
  field names. Clients index on the structured shape.
- **`WHEN TO USE`**: concrete scenarios, not fluff. *"Find SDK messages for
  plugin registration"* yes, *"useful for debugging"* no.
- **`WHEN NOT TO USE`**: redirect to the right tool. Saves users from
  trial-and-error.
- **`COMMON MISTAKES`**: only for tools with non-obvious parameter traps
  (case sensitivity, attribute misuse). Skip if the params are straightforward.
- **`FUZZY/AMBIGUITY`**: required if the tool resolves names. Always mention
  the disambiguation-list behavior on 0/2+ matches — `DisplayNameFirstResolver`
  returns candidates, not a silent error.
- **`RELATED TOOLS`**: cross-link when the user might reasonably chain to
  another tool.

#### Template B — CRUD template (use for `manage_*` and multi-action tools)

Tools in this family: `manage_choice`, `manage_view`, `manage_app`, `manage_form`,
`manage_chart`, `manage_ribbon`, `manage_command`, `manage_environment_variable`,
`manage_role`, `manage_webresource`, `upsert_table`, `upsert_column`,
`upsert_relationship`.

```
<one-line "what it manages; mention destructive create/update/delete">

ACTIONS + REQUIRED PARAMS:                          [REQUIRED]
- '<action>' — <param1> + <param2> [+ optional <param3>]
- '<action>' — ...

PARAM FORMATS:                                       [REQUIRED for any non-obvious format]
- <param>: <format example> — <default or auto-derive rule>

VALIDATION RULES:                                    [REQUIRED if any]
- <rule that will fail the action — e.g. sync rule, FK constraint, prefix match>

OPTION VALUES / NAMING / COLORS:                     [per-domain]
- <domain-specific guidance — only include relevant subsections>

AMBIGUITY:                                           [REQUIRED if any param is fuzzy]
- <param>: resolves Display Name contains first, then <other> contains
- <param> default <value>
- 0 or 2+ matches returns a disambiguation list — call again with exact GUID/name

WHEN TO USE:                                         [REQUIRED]
- <concrete use case 1>
- <concrete use case 2>
- <concrete use case 3>
- <redirect to related tool> (if applicable)

WHEN NOT TO USE:                                     [optional]
- <alternative tool>

SAFETY:                                              [REQUIRED for destructive actions]
- <irreversible operation> — <consequence>
- Destructive actions require user confirmation before invocation

RELATED TOOLS:                                       [optional]
- <tool> (<when to chain to it>)
```

**Section guidance**:
- **`ACTIONS + REQUIRED PARAMS`**: one line per action. State which params are
  required vs optional. Use `+` for required, `optional:` for optional. The
  reader should be able to construct a valid call from this section alone.
- **`PARAM FORMATS`**: non-obvious formats only (semicolon-separated labels,
  hex colors, JSON arrays). Skip if everything is plain strings.
- **`VALIDATION RULES`**: things that will silently fail the action (sync rules,
  prefix constraints, ID formats). Without this, users only learn by trial.
- **`AMBIGUITY`**: same rules as read template. Required if any name param
  resolves fuzzily.
- **`WHEN TO USE`**: concrete scenarios, including the read-only actions
  (e.g. `manage_view` action='list' IS a valid use case).
- **`SAFETY`**: call out irreversible operations explicitly. The MCP client
  must understand `remove_options`, `delete`, `drop_column` cannot be undone
  without a backup. Reference the auto-backup behavior when present
  (`update`/`update_navigation`/`manage_view.update`).
- **`RELATED TOOLS`**: cross-link when alternatives exist
  (`manage_choice` ↔ `manage_environment_variable` for value scoping,
  `manage_view` ↔ `manage_form` for layout changes).

**Per-parameter descriptions** (`[Description(...)]` on each parameter) apply to
both templates and should:
- State the default value explicitly (`Default false (managed APIs hidden)`).
- State the valid set if it's an enum-like string (`'active' / 'inactive' / 'all'`).
- Use null-safe phrasing for nullable inputs.

---

### Step 4: Eliminate redundant private result-builder wrappers

**Rule**: Call `Error(...)`, `Success(...)`, `ThrowException(...)` from
[McpToolBase.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/McpToolBase.cs) **directly**. Do
**not** define private helpers that wrap them.

**Known offenders in the codebase** (rename-flexible, but all equivalent):

| Local helper | Equivalent base call | Action |
|---|---|---|
| `private CallToolResult ErrorResult(string msg) => Error(msg);` | `Error(msg)` | Delete helper, switch callers |
| `private CallToolResult SuccessResult(string text, T structured) => Success(text, structured);` | `Success(text, structured)` | Delete helper, switch callers |
| `private CallToolResult StructuredResult(string text, T structured) => Success(text, structured);` | `Success(text, structured)` | Delete helper, switch callers |
| `private CallToolResult ShowError(string msg) => Error(msg);` | `Error(msg)` | Delete helper, switch callers |
| `private CallToolResult ErrorMessage(string msg) => Error(msg);` | `Error(msg)` | Delete helper, switch callers |

**Why these wrappers are harmful**:
- They hide the call from IDE jump-to-definition and refactoring tools — clicking
  `ErrorResult` from a call site doesn't show you the McpToolBase contract.
- They bloat the class file (every `Manage*Tool`/`Get*Tool` ships one or two of
  these for no reason).
- They drift over time — `SuccessResult(text, structured)` was added in a tool
  that wanted to set a default structured payload, then the default was removed
  but the helper stayed. Now it shadows the real `Success` from the base.

**Refactor procedure**:
1. Search for any private method whose body is just a one-liner forward to
   `Error(...)`, `Success(...)`, or `ThrowException(...)`.
2. Delete the helper.
3. Replace every call site with the base helper directly.
4. Re-run `grep` to confirm zero `ErrorResult`/`SuccessResult`/`ShowError`/
   `ErrorMessage` references remain in the file.

**Audit command**:
```bash
# Find redundant wrappers across all tools
grep -nE "private\s+(static\s+)?CallToolResult\s+(ErrorResult|SuccessResult|StructuredResult|ShowError|ErrorMessage)" DynamicsCrm.DevKit.Cli/Mcp/Tools/*.cs
```
Expected output: empty.

---

## Reference tools — current gold standard

### Read template examples

| Tool | What it exemplifies | Path |
|---|---|---|
| `get_messages` | List vs detail modes, MODES/OUTPUT sections, FUZZY/AMBIGUITY pattern — closest to canonical Read template. | [GetMessagesTool.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/GetMessagesTool.cs) |
| `get_custom_apis` | Same template with null-safe `EscapeTab`; full 5-section description. | [GetCustomApisTool.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/GetCustomApisTool.cs) |
| `get_plugin_trace_logs` | Read template with FILTERS + MODES sub-sections (multi-axis filter list). | [GetPluginTraceLogsTool.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/GetPluginTraceLogsTool.cs) |
| `whoami` | Single-mode tool — minimal Read template (OUTPUT + WHEN TO USE only). | [WhoAmITool.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/WhoAmITool.cs) |
| `execute_fetchxml` | Read template + WHEN NOT TO USE + COMMON MISTAKES + RELATED TOOLS (error-prone param shape). | [ExecuteFetchxmlTool.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/ExecuteFetchxmlTool.cs) |
| `parse_record_url` | Ultra-concise Read template (no modes, no fuzzy — single-purpose tool). | [ParseRecordUrlTool.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/ParseRecordUrlTool.cs) |

### CRUD template examples

| Tool | What it exemplifies | Path |
|---|---|---|
| `manage_view` | Canonical CRUD template — ACTIONS + REQUIRED PARAMS + SYNC RULE + SAFETY + AMBIGUITY. | [ManageViewTool.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageViewTool.cs) |
| `manage_choice` | CRUD template with OPTION VALUES + AMBIGUITY + SAFETY (irreversible remove). | [ManageChoiceTool.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageChoiceTool.cs) |
| `manage_app` | CRUD template with update_navigation + undo, multi-surface actions. | [ManageAppTool.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageAppTool.cs) |
| `manage_form` | CRUD template with operation-based updates (manage_tab/manage_section/etc.). | [ManageFormTool.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageFormTool.cs) |

When in doubt, match the most recently reviewed tool — newer commits reflect the
latest conventions.

---

## Helpers — where to find them

| Helper | Purpose | Defined in |
|---|---|---|
| `Success(summary, structured)` | Return compact text + structured JSON. | [McpToolBase.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/McpToolBase.cs) |
| `Error(message, hint?, details?)` | Return structured error with optional hint + details object. | [McpToolBase.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/McpToolBase.cs) |
| `ThrowException(ex)` | Convert an exception into a structured error result. | [McpToolBase.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/McpToolBase.cs) |
| `DryRun(message)` | Return a dry-run notice (not commonly used). | [McpToolBase.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/McpToolBase.cs) |
| `DisplayNameFirstResolver.ResolveEntity(...)` | Entity name → logical name with disambiguation. | `Mcp/Tools/Helper/` |
| `MessageDiscoveryHelper` | Shared FetchXML builders for SDK message queries. | `Mcp/Tools/Helper/` |

Do **not** create local helpers like `private CallToolResult ErrorResult(string msg) => Error(msg);`
or `private CallToolResult SuccessResult(string text) => Success(text, null);` —
use the base helpers directly.

---

## After the refactor

1. **Update [ReviewTools.md](ReviewTools.md)** — add the tool name to the alphabetical
   list so future maintainers know it follows current conventions.
2. **Run the build script** (not raw `dotnet build`):
   ```powershell
   .\DynamicsCrm.DevKit.Scripts\Release.DynamicsCrm.DevKit.Cli.ps1
   ```
   This protects `Const.cs` and kills running MCP processes before rebuilding.
3. **Verify MCP picks up the new DLL** by calling `whoami` and comparing
   `devkit.assemblySha256` against the build manifest. Mismatched SHA → MCP started
   a stale process, kill and retry.
4. **Commit** per `.codex/workflows/commit.md` (default workflow now runs end-to-end
   without asking for approval — stage explicit paths, write a conventional-commit
   title + brief why-focused body, report the hash).

---

## Definition of done

- [ ] `grep -nE "try\s*\{|catch\s*\("` shows exactly one `try` + one `catch` in the main method of the tool file.
- [ ] That single catch returns `ThrowException(ex)`.
- [ ] No silent `catch { ... }` swallowers in helper methods (exception: helpers that return `string` and use exception type to discriminate — must have a comment explaining why).
- [ ] `grep -nE "private\s+(static\s+)?CallToolResult\s+(ErrorResult|SuccessResult|StructuredResult|ShowError|ErrorMessage)"` returns zero hits in the tool file.
- [ ] Tool description matches the chosen template (Read or CRUD) — all REQUIRED sections present, optional sections included where helpful.
- [ ] Per-parameter descriptions state defaults and valid value sets.
- [ ] Tool added to [ReviewTools.md](ReviewTools.md).
- [ ] Build script ran clean, Const.cs restored to placeholders.
- [ ] MCP `whoami` SHA matches manifest SHA.
- [ ] Committed (not pushed).