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

## Workflow — 3 steps, in order

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
clients see when deciding whether to call the tool. It must follow this structure:

```
<one-line "what it is" intro>

MODES:
- list (default): <what list returns + filters/caps>
- detail: <what detail requires + returns>

OUTPUT:
- list: <text shape> + structured {<field list>}
- detail: <text shape> + structured {<field list>}

WHEN TO USE:
- <use case 1>
- <use case 2>
- <use case 3>
- <redirect to related tool> (if applicable)

FUZZY/AMBIGUITY:
- <param>: resolves Display Name contains first, then <other> contains
- <param> default <value>; set/omit to <effect>
- 0 or 2+ matches returns a disambiguation list — call again with exact GUID/name
```

**Quality rules**:
- Open with **what the tool returns**, not implementation details. Save how for
  the OUTPUT section.
- **MODES** must explicitly say which params are ignored in which mode (e.g.
  `entity_name` is ignored in detail mode for `get_messages`).
- **OUTPUT** must document the structured fields — both top-level and per-item.
  Clients index on these.
- **WHEN TO USE** lists concrete scenarios a developer would actually search for.
  No fluff like "useful for debugging".
- **FUZZY/AMBIGUITY** documents resolution order and defaults. Always mention
  what happens on 0 or 2+ matches (the shared `DisplayNameFirstResolver` returns
  a disambiguation list — say so).
- Cross-link related tools explicitly. Don't make the reader guess.
  *"For legacy workflow-based Custom Actions use get_messages."*

**Per-parameter descriptions** (`[Description(...)]` on each parameter) should:
- State the default value explicitly (`Default false (managed APIs hidden)`).
- State the valid set if it's an enum-like string (`'active' / 'inactive' / 'all'`).
- Use null-safe phrasing for nullable inputs.

---

## Reference tools — current gold standard

| Tool | What it exemplifies | Path |
|---|---|---|
| `whoami` | Gold standard try/catch + ThrowException. Compact text + structured. | [WhoAmITool.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/WhoAmITool.cs) |
| `get_messages` | List vs detail modes, MODES/OUTPUT sections, FUZZY/AMBIGUITY pattern. | [GetMessagesTool.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/GetMessagesTool.cs) |
| `get_custom_apis` | Similar to `get_messages`; null-safe `EscapeTab`; 5-section description. | [GetCustomApisTool.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/GetCustomApisTool.cs) |
| `get_plugin_trace_logs` | Recent error-handling + output rewrite. | [GetPluginTraceLogsTool.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/GetPluginTraceLogsTool.cs) |
| `parse_record_url` | Concise description for a single-purpose tool. | [ParseRecordUrlTool.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/ParseRecordUrlTool.cs) |

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

- [ ] `grep -nE "try\s*\{|catch\s*\("` shows exactly one `try` + one `catch` in the tool file.
- [ ] That single catch returns `ThrowException(ex)`.
- [ ] No silent `catch { ... }` swallowers in helper methods.
- [ ] No redundant `ErrorResult`/`SuccessResult` local wrappers.
- [ ] Tool description has all 5 sections (intro + MODES + OUTPUT + WHEN TO USE + FUZZY/AMBIGUITY).
- [ ] Per-parameter descriptions state defaults and valid value sets.
- [ ] Tool added to [ReviewTools.md](ReviewTools.md).
- [ ] Build script ran clean, Const.cs restored to placeholders.
- [ ] MCP `whoami` SHA matches manifest SHA.
- [ ] Committed (not pushed).