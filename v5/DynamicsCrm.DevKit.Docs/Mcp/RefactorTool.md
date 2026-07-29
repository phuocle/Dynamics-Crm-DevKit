# MCP Tool Refactor Playbook

Reusable checklist for reviewing and refactoring any MCP tool under
`DynamicsCrm.DevKit.Cli/Mcp/Tools/`. Invoke by mentioning this file
plus the tool name, e.g. _"apply RefactorTool.md to GetBusinessProcessFlowsTool.cs"_.

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
- Add a "documented exception" carve-out for helpers that "return a value and use
  exception type to discriminate". **There is no carve-out.** If a helper needs to
  distinguish "entity not found" from other failures, do it without try/catch —
  e.g. check the response, use a typed result, or let the exception propagate and
  classify it in the main catch.

**Audit command** (run after editing):

```bash
grep -nE "try\s*\{|catch\s*\(" DynamicsCrm.DevKit.Cli/Mcp/Tools/<Tool>.cs
```

Expect exactly 2 matches: the `try {` and `catch (Exception ex) {` of the main method.

**ZERO TOLERANCE — ABSOLUTE RULE.** Every other `try/catch` in the file is a
Step-1 violation, no matter how well-commented. The whole point of the rule is
that exceptions must surface at the main catch so `ThrowException` can format
them with full context (Dataverse error code, inner exception, stack frame,
actionable hint). Swallowing them in helpers — even with a "best-effort"
comment — hides the real cause from the caller and silently returns wrong
results downstream (e.g. zero matches, null values, misleading "not found"
messages, or a generic "unable to parse" string that masks a regex bug).

If a helper genuinely cannot let an exception propagate (e.g. it parses
untrusted input where a malformed shape is expected, not exceptional), the
fix is to make the helper's logic defensive — guard the regex, validate the
input shape, return a typed result — **not** to wrap it in try/catch.

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

#### Token Optimization Philosophy (2026-07-29)

**Core principle**: _"Guide AI correctly the first time"_ — keep format examples,
conventions, resource paths, and edge-case behaviors that AI cannot infer. Remove
what AI already knows or can derive from `OutputSchemaType`.

**What to KEEP** (AI cannot infer these):

- Format examples: `'Draft;Confirmed'`, `'OldLabel:NewLabel;...'`, `'Label:#RRGGBB'`
- Conventions: `customerid@account`, `v4_ApiEndpoint`, `.devkit/backups/views/`
- Edge-case behaviors: `add_options` skip on existing label, value collision error
- Resource references: `docs://instructions_for_views`, `schema://layoutxml`
- Safety warnings: `IRREVERSIBLE`, `no backup`, `destructive — confirm first`

**What to REMOVE** (AI already knows or can derive):

- `OUTPUT` section — `OutputSchemaType` provides full JSON schema to MCP client
- `RELATED TOOLS` long lists — keep only 1-line cross-references when critical
- `FUZZY/AMBIGUITY` repeated patterns — `DisplayNameFirstResolver` behavior is
  consistent across all tools; mention once in the tool if it has fuzzy params
- `WHEN NOT TO USE` obvious redirects — only keep when the distinction is subtle
- `COMMON MISTAKES` that are already in param descriptions

**Result**: 60-75% token reduction while preserving correctness.

---

#### How to choose

| Tool has...                                                                                                             | Use template                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `Destructive = false`, `Idempotent = true`, returns metadata only                                                       | **Read template**                                                            |
| `Destructive = true`, multiple actions (`list`/`detail`/`create`/`update`/`delete`/`rename`/etc.), mutates server state | **CRUD template**                                                            |
| Mixed (some modes destructive, some not — e.g. `manage_view` lists + creates)                                           | **CRUD template** (CRUD template covers read-only modes via ACTIONS section) |

If unsure, default to **CRUD template** — it's a superset. The read template
is just CRUD with the dangerous sections removed.

---

#### Template A — Read template (use for `get_*` and inspection tools)

Tools in this family: `get_messages`, `get_custom_apis`, `get_plugin_trace_logs`,
`whoami`, `parse_record_url`, `execute_fetchxml`, `get_business_rules`, `get_plugins`,
`get_audit_history`.

```
<one-line "what it returns; mention key behavior">

MODES:                                              [skip if single mode]
- list (default): <what list returns + filters/caps>
- detail: <what detail requires + returns; which params are ignored>

WHEN TO USE:                                        [REQUIRED — 1-3 concrete cases]
- <concrete use case 1>
- <concrete use case 2>
- <redirect to related tool> (if applicable)

COMMON MISTAKES:                                    [optional — only non-obvious traps]
- <pitfall + correct call>

FUZZY/AMBIGUITY:                                    [REQUIRED if any param is fuzzy]
- <param>: resolves Display Name contains first, then <other> contains
- 0 or 2+ matches returns a disambiguation list — call again with exact GUID/name
```

**Section guidance**:

- **`MODES`**: explicit about which params are ignored in which mode. Example:
  `entity_name is ignored in detail mode`.
- **`WHEN TO USE`**: concrete scenarios, not fluff. _"Find SDK messages for
  plugin registration"_ yes, _"useful for debugging"_ no.
- **`COMMON MISTAKES`**: only for tools with non-obvious parameter traps
  (case sensitivity, attribute misuse). Skip if the params are straightforward.
- **`FUZZY/AMBIGUITY`**: required if the tool resolves names. Always mention
  the disambiguation-list behavior on 0/2+ matches — `DisplayNameFirstResolver`
  returns candidates, not a silent error.

**REMOVED sections** (previously required, now optional or removed):

- ~~`OUTPUT`~~ — `OutputSchemaType` provides structured schema to MCP client.
  Only document if the text shape is non-obvious.
- ~~`WHEN NOT TO USE`~~ — only keep when the alternative tool distinction is
  subtle (e.g. `get_plugin_trace_logs` vs `get_system_jobs`).
- ~~`RELATED TOOLS`~~ — only keep 1-line cross-references when chaining is
  common (e.g. `parse_record_url` → `manage_record`).

#### Template B — CRUD template (use for `manage_*` and multi-action tools)

Tools in this family: `manage_choice`, `manage_view`, `manage_app`, `manage_form`,
`manage_chart`, `manage_ribbon`, `manage_command`, `manage_environment_variable`,
`manage_role`, `manage_webresource`, `upsert_table`, `upsert_column`,
`upsert_relationship`, `create_records`.

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

**REMOVED sections** (previously required, now optional or removed):

- ~~`WHEN NOT TO USE`~~ — only keep when the alternative tool distinction is
  subtle.
- ~~`RELATED TOOLS`~~ — only keep 1-line cross-references when chaining is
  common.

**Per-parameter descriptions** (`[Description(...)]` on each parameter) apply to
both templates and should:

- State the default value explicitly (`Default false (managed APIs hidden)`).
- State the valid set if it's an enum-like string (`'active' / 'inactive' / 'all'`).
- Use null-safe phrasing for nullable inputs.
- Keep format examples in param descriptions when the format is non-obvious
  (e.g. `'Draft;Confirmed'`, `'OldLabel:NewLabel;...'`).

---

### Step 4: Eliminate redundant private result-builder wrappers

**Rule**: Call `Error(...)`, `Success(...)`, `ThrowException(...)` from
[McpToolBase.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/McpToolBase.cs) **directly**. Do
**not** define private helpers that wrap them.

**Known offenders in the codebase** (rename-flexible, but all equivalent):

| Local helper                                                                                       | Equivalent base call        | Action                        |
| -------------------------------------------------------------------------------------------------- | --------------------------- | ----------------------------- |
| `private CallToolResult ErrorResult(string msg) => Error(msg);`                                    | `Error(msg)`                | Delete helper, switch callers |
| `private CallToolResult SuccessResult(string text, T structured) => Success(text, structured);`    | `Success(text, structured)` | Delete helper, switch callers |
| `private CallToolResult StructuredResult(string text, T structured) => Success(text, structured);` | `Success(text, structured)` | Delete helper, switch callers |
| `private CallToolResult ShowError(string msg) => Error(msg);`                                      | `Error(msg)`                | Delete helper, switch callers |
| `private CallToolResult ErrorMessage(string msg) => Error(msg);`                                   | `Error(msg)`                | Delete helper, switch callers |

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

| Tool                    | What it exemplifies                                                                                | Path                                                                                          |
| ----------------------- | -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `get_messages`          | List vs detail modes, MODES section, FUZZY/AMBIGUITY pattern — closest to canonical Read template. | [GetMessagesTool.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/GetMessagesTool.cs)               |
| `get_custom_apis`       | Same template with null-safe `EscapeTab`; concise description.                                     | [GetCustomApisTool.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/GetCustomApisTool.cs)           |
| `get_plugin_trace_logs` | Read template with FILTERS + MODES sub-sections (multi-axis filter list).                          | [GetPluginTraceLogsTool.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/GetPluginTraceLogsTool.cs) |
| `whoami`                | Single-mode tool — minimal Read template (1-line description).                                     | [WhoAmITool.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/WhoAmITool.cs)                         |
| `execute_fetchxml`      | Read template + COMMON MISTAKES (error-prone param shape).                                         | [ExecuteFetchxmlTool.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/ExecuteFetchxmlTool.cs)       |
| `parse_record_url`      | Ultra-concise Read template (no modes, no fuzzy — single-purpose tool).                            | [ParseRecordUrlTool.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/ParseRecordUrlTool.cs)         |
| `get_business_rules`    | Read template with MODES + WHEN TO USE (client-side logic inspection).                             | [GetBusinessRulesTool.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/GetBusinessRulesTool.cs)     |
| `get_plugins`           | Read template with multi-mode behavior (assembly list vs detail vs entity steps).                  | [GetPluginsTool.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/GetPluginsTool.cs)                 |
| `get_audit_history`     | Read template with browse vs detail modes + audit-enable prerequisite.                             | [GetAuditHistoryTool.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/GetAuditHistoryTool.cs)       |

### CRUD template examples

| Tool                          | What it exemplifies                                                                   | Path                                                                                                        |
| ----------------------------- | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `manage_view`                 | Canonical CRUD template — ACTIONS + REQUIRED PARAMS + SYNC RULE + SAFETY + AMBIGUITY. | [ManageViewTool.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageViewTool.cs)                               |
| `manage_choice`               | CRUD template with OPTION VALUES + AMBIGUITY + SAFETY (irreversible remove).          | [ManageChoiceTool.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageChoiceTool.cs)                           |
| `manage_app`                  | CRUD template with update_navigation + undo, multi-surface actions.                   | [ManageAppTool.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageAppTool.cs)                                 |
| `manage_form`                 | CRUD template with operation-based updates (manage_tab/manage_section/etc.).          | [ManageFormTool.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageFormTool.cs)                               |
| `manage_environment_variable` | CRUD template with type immutability + prefix validation + delete/clear distinction.  | [ManageEnvironmentVariableTool.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageEnvironmentVariableTool.cs) |
| `create_records`              | CRUD template with bulk create + polymorphic lookup + activity party formats.         | [CreateRecordsTool.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/CreateRecordsTool.cs)                         |

When in doubt, match the most recently reviewed tool — newer commits reflect the
latest conventions.

---

## Helpers — where to find them

| Helper                                        | Purpose                                                      | Defined in                                                              |
| --------------------------------------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------- |
| `Success(summary, structured)`                | Return compact text + structured JSON.                       | [McpToolBase.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/McpToolBase.cs) |
| `Error(message, hint?, details?)`             | Return structured error with optional hint + details object. | [McpToolBase.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/McpToolBase.cs) |
| `ThrowException(ex)`                          | Convert an exception into a structured error result.         | [McpToolBase.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/McpToolBase.cs) |
| `DryRun(message)`                             | Return a dry-run notice (not commonly used).                 | [McpToolBase.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/McpToolBase.cs) |
| `DisplayNameFirstResolver.ResolveEntity(...)` | Entity name → logical name with disambiguation.              | `Mcp/Tools/Helper/`                                                     |
| `MessageDiscoveryHelper`                      | Shared FetchXML builders for SDK message queries.            | `Mcp/Tools/Helper/`                                                     |

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

- [ ] `grep -nE "try\s*\{|catch\s*\("` shows exactly one `try` + one `catch` in the main method of the tool file. **No other try/catch anywhere in the file.**
- [ ] That single catch returns `ThrowException(ex)`.
- [ ] No silent `catch { ... }` swallowers in helper methods. **No carve-outs.**
- [ ] `grep -nE "private\s+(static\s+)?CallToolResult\s+(ErrorResult|SuccessResult|StructuredResult|ShowError|ErrorMessage)"` returns zero hits in the tool file.
- [ ] Tool description matches the chosen template (Read or CRUD) — all REQUIRED sections present, optional sections included where helpful.
- [ ] Per-parameter descriptions state defaults and valid value sets.
- [ ] Tool added to [ReviewTools.md](ReviewTools.md).
- [ ] Build script ran clean, Const.cs restored to placeholders.
- [ ] MCP `whoami` SHA matches manifest SHA.
- [ ] Committed (not pushed).
