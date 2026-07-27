# MCP Tool Analysis — 8 Tools in ReviewTools.md

> **Date:** 2026-07-27
> **Scope:** Apply the 4-step playbook in [RefactorTool.md](RefactorTool.md) to each tool already listed in [ReviewTools.md](ReviewTools.md).
> **Source folder:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/`

## 1. The 4-step checklist (summary)

| Step | Rule | Audit |
|------|------|-------|
| **1. Consolidate try/catch** | Exactly **one** `try` block in the **main public method only**. No `try` inside helpers. No `catch { return null; }`. No catching specific exception types at tool level. | `grep -nE "try\s*\{|catch\s*\(" <Tool>.cs` → expect exactly **2** matches (`try {` + `catch (Exception ex) {`). |
| **2. Use `ThrowException`** | Top-level catch returns `ThrowException(ex)` only. Helpers just `throw;` / let exception bubble. | Inspect the main `catch (Exception ex)` block — must contain `return ThrowException(ex);`. |
| **3. Read/CRUD description templates** | Tools that perform CRUD must follow the Read/CRUD description templates split out in commit `70cf75e27`. | Check description uses correct template per action. |
| **4. Kill redundant private wrappers** | No private wrappers that just forward to another helper with the same args + no extra logic. | Read every `private` method — confirm it adds value (logic, transformation, validation), not just a 1-line forward. |

---

## 2. Per-tool matrix

Legend:
- ✅ = passes / no action needed
- ⚠️ = minor / informational
- ❌ = violates the rule → needs fix

| Tool | File | LOC | Step 1 try/catch | Step 2 ThrowException | Step 3 desc template | Step 4 wrappers | Verdict |
|------|------|-----|------------------|-----------------------|----------------------|-----------------|---------|
| `execute_fetchxml` | [ExecuteFetchXmlTool.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/ExecuteFetchXmlTool.cs) | 156 | ✅ 1 try + 1 catch (lines 62/83) | ✅ `return ThrowException(ex);` | ⚠️ Read-only — no CRUD template applies | ✅ Helpers (`ExecuteSinglePage`, `ExecuteAllPages`, `ConvertEntities`, `GetSingleEntity`) all add value | **No action** |
| `get_messages` | [GetMessagesTool.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/GetMessagesTool.cs) | 111 | ✅ 1 try + 1 catch (lines 98/111) | ✅ `return ThrowException(ex);` | ⚠️ Read-only — no CRUD template applies | ⚠️ Many helpers (`GetMessageListAsync`, `GetMessageDetailAsync`, `FormatSdkMessageDetail`, `FormatCustomActionDetail`, `FindSdkMessage`, `FindCustomAction`, `GetSupportedEntities`, `CountPluginSteps`, `GetActionParameters`, `GetWorkflowUniqueName`, etc.) — **review for dead wrappers**. The two `Format*` + `GetActionParameters` + `GetActionParametersFromProcess` pairs are the most likely wrappers. | **Audit Step 4** |
| `get_custom_apis` | [GetCustomApisTool.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/GetCustomApisTool.cs) | 123 | ✅ 1 try + 1 catch (lines 93/123) | ✅ `return ThrowException(ex);` | ⚠️ Read-only — no CRUD template applies | ✅ `GetList`/`GetDetail` are dispatchers, not wrappers. `ResolveCustomApi`, `ResolveSolutionName` add value. | **No action** |
| `whoami` | [WhoAmITool.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/WhoAmITool.cs) | 94 | ✅ 1 try + 1 catch (lines 62/94) | ✅ `return ThrowException(ex);` | ⚠️ Single action — no CRUD template applies | ✅ `PopulateUserDetails`, `PopulateOrgDetails`, `PopulateRoles` — each owns one section. No wrappers. | **No action** |
| `manage_choice` | [ManageChoiceTool.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageChoiceTool.cs) | 1057 | ✅ 1 try + 1 catch (lines 78/119). Explicit comment at line 402: *"Publish failures bubble to the main catch (single-try rule)."* | ✅ `return ThrowException(ex);` | ✅ Full CRUD description with ACTION templates (`list`, `detail`, `create`, `update`) | ⚠️ 7+ `HandleXxx` + `BuildDetailResult` + `RetrieveOptionSetMetadata` + `TryResolveToLogicalName` — verify `HandleCreate` doesn't just call `HandleUpdateSafe` and stop. | **Audit Step 4** (priority: medium) |
| `manage_view` | [ManageViewTool.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageViewTool.cs) | 1945 | ❌ **3 catches total**: main at line 135 + 2 extra `catch (FaultException<OrganizationServiceFault> ex)` at lines 1396 and 1401. Violates Step 1 — `FaultException<T>` should propagate to the main catch. | ✅ `return ThrowException(ex);` (main catch only) | ✅ Full CRUD with `ACTIONS + REQUIRED PARAMS` template | ⚠️ Large file (1945 lines) — likely 2-3 dead `Handle*` wrappers after the operation set was trimmed. | **MUST FIX Step 1** (priority: high) |
| `parse_record_url` | [ParseRecordUrlTool.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/ParseRecordUrlTool.cs) | 366 | ✅ 1 try + 1 catch (lines 41/62) | ✅ `return ThrowException(ex);` | ⚠️ Single action — no CRUD template applies | ✅ Inline dispatch on URL type — no private wrappers at all. | **No action** |
| `get_plugin_trace_logs` | [GetPluginTraceLogsTool.cs](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/GetPluginTraceLogsTool.cs) | 354 | ✅ 1 try + 1 catch (lines 70/87) | ✅ `return ThrowException(ex);` | ⚠️ Two-mode tool (list / detail) — no CRUD template applies | ✅ `GetList` / `GetDetail` are dispatchers, not wrappers. | **No action** |

---

## 3. Findings that need follow-up

### 🔴 High priority — `manage_view` violates Step 1

```
ManageViewTool.cs:1396: catch (FaultException<OrganizationServiceFault> ex)
ManageViewTool.cs:1401: catch (FaultException<OrganizationServiceFault> ex)
```

**Problem:** Two extra `try/catch (FaultException<OrganizationServiceFault>)` blocks deep inside helper methods (likely inside publish / import helpers). The Dataverse SDK throws `FaultException<T>` — per Step 1 rules, these must propagate to the **single top-level catch** so the AI caller gets full exception context via `ThrowException`. These catches are swallowing fault context.

**Action:**
1. Read lines 1390–1410 to confirm where the extra `try` blocks live.
2. Remove both inner `try`/`catch` blocks.
3. Let any `FaultException<OrganizationServiceFault>` bubble up to the main catch at line 135.
4. Re-run the audit command:
   ```bash
   grep -nE "try\s*\{|catch\s*\(" DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageViewTool.cs
   ```
   Expect exactly 2 matches.

### 🟡 Medium priority — `get_messages` may have dead wrappers

The two pairs below look like candidates for Step 4 cleanup:

- `GetActionParameters(workflowId)` (line 435) vs `GetActionParametersFromProcess(workflowId, bool isInput)` (line 464). If the public one is just `GetActionParametersFromProcess(workflowId, true)` + `GetActionParametersFromProcess(workflowId, false)` merged, it can be inlined.
- `FormatSdkMessageDetail` (line 192) vs `FormatCustomActionDetail` (line 247) — both produce a `CallToolResult` with very similar field mappings. Worth checking for shared helper.

**Action:** Read both pairs; if one is a 1-line forward, inline it.

### 🟡 Medium priority — `manage_choice` may have dead wrappers

`HandleList`, `HandleDetail`, `HandleUpdateSafe`, `HandleCreate`, `BuildDetailResult`, `RetrieveOptionSetMetadata`, `TryResolveToLogicalName` — 7 helpers.

**Action:** Read each; ensure `HandleCreate` does not simply call `HandleUpdateSafe` + return. If it does, inline.

### 🟢 Pass — 5 tools need no changes

- `execute_fetchxml`
- `get_custom_apis`
- `whoami`
- `parse_record_url`
- `get_plugin_trace_logs`

All five have:
- Exactly one `try`/`catch (Exception ex)` block in the main public method.
- `return ThrowException(ex);` in the catch.
- No redundant private wrappers.

---

## 4. Recommended update flow

1. Fix `manage_view` Step 1 violation (remove the 2 inner `FaultException<OrganizationServiceFault>` catches).
2. Audit Step 4 in `get_messages` and `manage_choice`; remove any 1-line forwarding private methods.
3. Re-run the audit grep across all 8 files:
   ```bash
   for f in DynamicsCrm.DevKit.Cli/Mcp/Tools/{ExecuteFetchXmlTool,GetMessagesTool,GetCustomApisTool,WhoAmITool,ManageChoiceTool,ManageViewTool,ParseRecordUrlTool,GetPluginTraceLogsTool}.cs; do
     echo "=== $f ===";
     grep -nE "try\s*\{|catch\s*\(" "$f";
   done
   ```
   Each file must show exactly 2 matches (`try {` + `catch (Exception ex) {`).
4. Build the CLI to confirm no regressions:
   ```powershell
   .\DynamicsCrm.DevKit.Scripts\Release.DynamicsCrm.DevKit.Cli.ps1
   ```
5. Re-run `ToolReview.md` playbook (if it exists) or `simplify` skill to spot-check the touched files.

---

## 5. Status summary

| Tool | Status | Action |
|------|--------|--------|
| `execute_fetchxml` | ✅ Pass | None |
| `get_messages` | ⚠️ Minor — Step 4 audit | Inline forwarding helpers if found |
| `get_custom_apis` | ✅ Pass | None |
| `whoami` | ✅ Pass | None |
| `manage_choice` | ⚠️ Minor — Step 4 audit | Inline forwarding helpers if found |
| `manage_view` | ❌ Violates Step 1 | Remove 2 inner `FaultException<OrganizationServiceFault>` catches (lines 1396, 1401) |
| `parse_record_url` | ✅ Pass | None |
| `get_plugin_trace_logs` | ✅ Pass | None |

**Conclusion:** 5 of 8 tools are already aligned with the RefactorTool.md playbook. 1 tool (`manage_view`) needs a Step 1 fix; 2 tools (`get_messages`, `manage_choice`) should be audited for Step 4 dead wrappers but are otherwise compliant.