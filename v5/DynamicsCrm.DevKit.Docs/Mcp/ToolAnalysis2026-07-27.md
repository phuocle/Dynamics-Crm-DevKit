# MCP Tool Refactor Audit — 2026-07-27

Audit of 8 MCP tools against [RefactorTool.md](RefactorTool.md) playbook.

---

## Summary

| Tool | Template | Step 1 (single try) | Step 2 (ThrowException) | Step 3 (description) | Step 4 (no wrappers) | ReviewTools |
|---|---|---|---|---|---|---|
| `execute_fetchxml` | Read | ✅ | ✅ | ✅ | ✅ | ✅ |
| `get_messages` | Read | ✅ | ✅ | ✅ | ✅ | ✅ |
| `get_custom_apis` | Read | ✅ | ✅ | ✅ | ✅ | ✅ |
| `whoami` | Read | ✅ | ✅ | ✅ | ✅ | ✅ |
| `manage_choice` | CRUD | ✅ | ✅ | ✅ | ✅ | ✅ |
| `manage_view` | CRUD | ✅ | ✅ | ✅ | ✅ | ✅ |
| `parse_record_url` | Read | ✅ | ✅ | ✅ | ✅ | ✅ |
| `get_plugin_trace_logs` | Read | ✅ | ✅ | ✅ | ✅ | ✅ |

**Result: All 8 tools pass all 4 steps. No code changes required.**

---

## Detailed Findings

### 1. ExecuteFetchxmlTool.cs (168 lines)

- **Step 1**: Single `try` at L62, single `catch (Exception ex)` at L83. ✅
- **Step 2**: Catch returns `ThrowException(ex)` at L85. ✅
- **Step 3**: Read template with OUTPUT, WHEN TO USE, WHEN NOT TO USE, COMMON MISTAKES, RELATED TOOLS. All REQUIRED sections present. ✅
- **Step 4**: No redundant wrappers. ✅

### 2. GetMessagesTool.cs (618 lines)

- **Step 1**: Single `try` at L98, single `catch (Exception ex)` at L111. ✅
- **Step 2**: Catch returns `ThrowException(ex)` at L113. ✅
- **Step 3**: Read template with MODES, OUTPUT, WHEN TO USE, FUZZY/AMBIGUITY. All REQUIRED sections present. ✅
- **Step 4**: No redundant wrappers. ✅

### 3. GetCustomApisTool.cs (507 lines)

- **Step 1**: Single `try` at L93, single `catch (Exception ex)` at L123. ✅
- **Step 2**: Catch returns `ThrowException(ex)` at L125. ✅
- **Step 3**: Read template with MODES, OUTPUT, WHEN TO USE, FUZZY/AMBIGUITY. All REQUIRED sections present. ✅
- **Step 4**: No redundant wrappers. ✅

### 4. WhoAmITool.cs (379 lines)

- **Step 1**: Single `try` at L57, single `catch (Exception ex)` at L94. ✅
- **Step 2**: Catch returns `ThrowException(ex)` at L96. ✅
- **Step 3**: Read template with OUTPUT, WHEN TO USE, WHEN NOT TO USE, RELATED TOOLS. All REQUIRED sections present. ✅
- **Step 4**: No redundant wrappers. ✅

### 5. ManageChoiceTool.cs (1058 lines)

- **Step 1**: Single `try` at L103, single `catch (Exception ex)` at L120. ✅
- **Step 2**: Catch returns `ThrowException(ex)` at L122. ✅
- **Step 3**: CRUD template with ACTIONS, OPTION VALUES, AMBIGUITY, WHEN TO USE, SAFETY, RELATED TOOLS. All REQUIRED sections present. ✅
- **Step 4**: No redundant wrappers. ✅

### 6. ManageViewTool.cs (2008 lines)

- **Step 1**: Main method has single `try` at L117, single `catch (Exception ex)` at L149. No inner try/catch blocks. ✅
- **Step 2**: Main catch returns `ThrowException(ex)` at L151. ✅
- **Step 3**: CRUD template with ACTIONS + REQUIRED PARAMS, SYNC RULE, QUICK FIND NOTE, NAME RESOLUTION, WHEN TO USE, COMMON MISTAKES, SAFETY, RELATED TOOLS. All REQUIRED sections present. ✅
- **Step 4**: No redundant wrappers. ✅

### 7. ParseRecordUrlTool.cs (367 lines)

- **Step 1**: Single `try` at L41, single `catch (Exception ex)` at L62. ✅
- **Step 2**: Catch returns `ThrowException(ex)` at L64. ✅
- **Step 3**: Ultra-concise Read template (no modes, no fuzzy — single-purpose tool). OUTPUT, WHEN TO USE implicit in description. ✅
- **Step 4**: No redundant wrappers. ✅

### 8. GetPluginTraceLogsTool.cs (355 lines)

- **Step 1**: Single `try` at L80, single `catch (Exception ex)` at L87. ✅
- **Step 2**: Catch returns `ThrowException(ex)` at L89. ✅
- **Step 3**: Read template with MODES, FILTERS, OUTPUT, WHEN TO USE, COMMON MISTAKES. All REQUIRED sections present. ✅
- **Step 4**: No redundant wrappers. ✅

---

## § 3.2 — Contract Helper Note

`ManageViewTool.ValidateFetchXmlExpression` returns `string?` (null = valid, non-null = error message).
Previously had an inner `try/catch` for JSON parse failures (Rule 3.1 exemption).
Removed on 2026-07-28 — JSON parse errors now propagate to the main `catch (Exception ex)`,
giving the user a clear error instead of silently skipping validation.

No contract helpers with inner `try/catch` remain across the 8 tools.

---

## Conclusion

All 8 tools are **compliant** with RefactorTool.md. No refactoring needed.
All 8 tools are already listed in [ReviewTools.md](ReviewTools.md).
