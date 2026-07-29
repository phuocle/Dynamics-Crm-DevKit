# MCP Tool Refactor Audit — 2026-07-27 (Updated 2026-07-29)

Audit of 13 MCP tools against [RefactorTool.md](RefactorTool.md) playbook.

**Update 2026-07-29**: Token optimization pass — descriptions refactored to concise
template. See "Token Optimization" section below.

---

## Summary

| Tool                          | Template | Step 1 (single try) | Step 2 (ThrowException) | Step 3 (description) | Step 4 (no wrappers) | ReviewTools |
| ----------------------------- | -------- | ------------------- | ----------------------- | -------------------- | -------------------- | ----------- |
| `execute_fetchxml`            | Read     | ✅                  | ✅                      | ✅ (concise)         | ✅                   | ✅          |
| `get_messages`                | Read     | ✅                  | ✅                      | ✅ (concise)         | ✅                   | ✅          |
| `get_custom_apis`             | Read     | ✅                  | ✅                      | ✅ (concise)         | ✅                   | ✅          |
| `whoami`                      | Read     | ✅                  | ✅                      | ✅ (concise)         | ✅                   | ✅          |
| `manage_choice`               | CRUD     | ✅                  | ✅                      | ✅ (concise)         | ✅                   | ✅          |
| `manage_view`                 | CRUD     | ✅                  | ✅                      | ✅ (concise)         | ✅                   | ✅          |
| `parse_record_url`            | Read     | ✅                  | ✅                      | ✅ (concise)         | ✅                   | ✅          |
| `get_plugin_trace_logs`       | Read     | ✅                  | ✅                      | ✅ (concise)         | ✅                   | ✅          |
| `create_records`              | CRUD     | ✅                  | ✅                      | ✅ (concise)         | ✅                   | ✅          |
| `get_business_rules`          | Read     | ✅                  | ✅                      | ✅ (concise)         | ✅                   | ✅          |
| `get_plugins`                 | Read     | ✅                  | ✅                      | ✅ (concise)         | ✅                   | ✅          |
| `manage_environment_variable` | CRUD     | ✅                  | ✅                      | ✅ (concise)         | ✅                   | ✅          |
| `get_audit_history`           | Read     | ✅                  | ✅                      | ✅ (concise)         | ✅                   | ✅          |

**Result: All 13 tools pass all 4 steps. No code changes required.**

---

## Token Optimization (2026-07-29)

### Philosophy

> _"Guide AI correctly the first time"_ — keep format examples, conventions,
> resource paths, and edge-case behaviors that AI cannot infer. Remove what AI
> already knows or can derive from `OutputSchemaType`.

### What was REMOVED (AI already knows or can derive)

| Section                                         | Reason                                                                     |
| ----------------------------------------------- | -------------------------------------------------------------------------- |
| `OUTPUT`                                        | `OutputSchemaType` provides full JSON schema to MCP client                 |
| `RELATED TOOLS` long lists                      | Only 1-line cross-references kept when critical                            |
| `FUZZY/AMBIGUITY` repeated patterns             | `DisplayNameFirstResolver` behavior is consistent; mentioned once per tool |
| `WHEN NOT TO USE` obvious redirects             | Only kept when distinction is subtle                                       |
| `COMMON MISTAKES` already in param descriptions | Redundant                                                                  |

### What was KEPT (AI cannot infer)

| Section             | Examples                                                          |
| ------------------- | ----------------------------------------------------------------- |
| Format examples     | `'Draft;Confirmed'`, `'OldLabel:NewLabel;...'`, `'Label:#RRGGBB'` |
| Conventions         | `customerid@account`, `v4_ApiEndpoint`, `.devkit/backups/views/`  |
| Edge-case behaviors | `add_options` skip on existing label, value collision error       |
| Resource references | `docs://instructions_for_views`, `schema://layoutxml`             |
| Safety warnings     | `IRREVERSIBLE`, `no backup`, `destructive — confirm first`        |

### Token Reduction

| Tool                          | Before (chars) | After (chars) | Reduction |
| ----------------------------- | -------------- | ------------- | --------- |
| `whoami`                      | ~1,100         | ~180          | **84%**   |
| `parse_record_url`            | ~700           | ~380          | **46%**   |
| `execute_fetchxml`            | ~1,300         | ~400          | **69%**   |
| `create_records`              | ~1,800         | ~500          | **72%**   |
| `get_business_rules`          | ~1,400         | ~400          | **71%**   |
| `get_plugin_trace_logs`       | ~1,300         | ~450          | **65%**   |
| `get_messages`                | ~1,200         | ~350          | **71%**   |
| `get_custom_apis`             | ~1,500         | ~400          | **73%**   |
| `get_plugins`                 | ~2,200         | ~500          | **77%**   |
| `manage_choice`               | ~2,500         | ~800          | **68%**   |
| `manage_view`                 | ~2,000         | ~700          | **65%**   |
| `manage_environment_variable` | ~2,000         | ~700          | **65%**   |
| `get_audit_history`           | ~2,000         | ~500          | **75%**   |

**Total: ~21,000 → ~6,260 chars (~70% reduction)**

---

## Detailed Findings

### 1. ExecuteFetchxmlTool.cs

- **Step 1**: Single `try`, single `catch (Exception ex)`. ✅
- **Step 2**: Catch returns `ThrowException(ex)`. ✅
- **Step 3**: Read template — concise. Kept: lowercase rule, no top/count/page, max_records guidance. Removed: OUTPUT, WHEN NOT TO USE, RELATED TOOLS. ✅
- **Step 4**: No redundant wrappers. ✅

### 2. GetMessagesTool.cs

- **Step 1**: Single `try`, single `catch (Exception ex)`. ✅
- **Step 2**: Catch returns `ThrowException(ex)`. ✅
- **Step 3**: Read template — concise. Kept: MODES, entity_name='none' global. Removed: OUTPUT, FUZZY/AMBIGUITY details. ✅
- **Step 4**: No redundant wrappers. ✅

### 3. GetCustomApisTool.cs

- **Step 1**: Single `try`, single `catch (Exception ex)`. ✅
- **Step 2**: Catch returns `ThrowException(ex)`. ✅
- **Step 3**: Read template — concise. Kept: MODES, isFunction → GET/POST. Removed: OUTPUT, FUZZY/AMBIGUITY details. ✅
- **Step 4**: No redundant wrappers. ✅

### 4. WhoAmITool.cs

- **Step 1**: Single `try`, single `catch (Exception ex)`. ✅
- **Step 2**: Catch returns `ThrowException(ex)`. ✅
- **Step 3**: Read template — ultra-concise (1 line). Kept: call once, cache userId. Removed: OUTPUT, WHEN TO USE, WHEN NOT TO USE, RELATED TOOLS. ✅
- **Step 4**: No redundant wrappers. ✅

### 5. ManageChoiceTool.cs

- **Step 1**: Single `try`, single `catch (Exception ex)`. ✅
- **Step 2**: Catch returns `ThrowException(ex)`. ✅
- **Step 3**: CRUD template — concise. Kept: ACTIONS, option formats, solution_name REQUIRED, add_options skip behavior, value collision error, needsWait. Removed: OUTPUT, WHEN TO USE, RELATED TOOLS. ✅
- **Step 4**: No redundant wrappers. ✅

### 6. ManageViewTool.cs

- **Step 1**: Single `try`, single `catch (Exception ex)`. ✅
- **Step 2**: Catch returns `ThrowException(ex)`. ✅
- **Step 3**: CRUD template — concise. Kept: ACTIONS, SYNC RULE, QuickFind note, backup path, resource references. Removed: OUTPUT, WHEN TO USE, COMMON MISTAKES, RELATED TOOLS. ✅
- **Step 4**: No redundant wrappers. ✅

### 7. ParseRecordUrlTool.cs

- **Step 1**: Single `try`, single `catch (Exception ex)`. ✅
- **Step 2**: Catch returns `ThrowException(ex)`. ✅
- **Step 3**: Read template — ultra-concise. Kept: parser list, EntityName='(unknown)' behavior, chain to manage_record. Removed: verbose parser descriptions. ✅
- **Step 4**: No redundant wrappers. ✅

### 8. GetPluginTraceLogsTool.cs

- **Step 1**: Single `try`, single `catch (Exception ex)`. ✅
- **Step 2**: Catch returns `ThrowException(ex)`. ✅
- **Step 3**: Read template — concise. Kept: MODES, type_name vs entity_name distinction, Plugin Trace Log prerequisite. Removed: OUTPUT, WHEN TO USE, COMMON MISTAKES. ✅
- **Step 4**: No redundant wrappers. ✅

### 9. CreateRecordsTool.cs

- **Step 1**: Single `try`, single `catch (Exception ex)`. ✅
- **Step 2**: Catch returns `ThrowException(ex)`. ✅
- **Step 3**: CRUD template — concise. Kept: max 5000, partial failures, records_json formats, polymorphic lookup example, activity party fields, CSV lookup-by-name behavior. Removed: OUTPUT, WHEN TO USE, SAFETY, RELATED TOOLS. ✅
- **Step 4**: No redundant wrappers. ✅

### 10. GetBusinessRulesTool.cs

- **Step 1**: Single `try`, single `catch (Exception ex)`. ✅
- **Step 2**: Catch returns `ThrowException(ex)`. ✅
- **Step 3**: Read template — concise. Kept: MODES, rules run BEFORE form JS, Scope 'Entity' = all forms. Removed: OUTPUT, WHEN TO USE, WHEN NOT TO USE, FUZZY/AMBIGUITY. ✅
- **Step 4**: No redundant wrappers. ✅

### 11. GetPluginsTool.cs

- **Step 1**: Single `try`, single `catch (Exception ex)`. ✅
- **Step 2**: Catch returns `ThrowException(ex)`. ✅
- **Step 3**: Read template — concise. Kept: multi-mode behavior, stages, include_config warning. Removed: OUTPUT, WHEN TO USE, WHEN NOT TO USE, FUZZY/AMBIGUITY. ✅
- **Step 4**: No redundant wrappers. ✅

### 12. ManageEnvironmentVariableTool.cs

- **Step 1**: Single `try`, single `catch (Exception ex)`. ✅
- **Step 2**: Catch returns `ThrowException(ex)`. ✅
- **Step 3**: CRUD template — concise. Kept: ACTIONS, type immutability, reserved prefix 'new', delete vs clear distinction, confirmed_prefix. Removed: OUTPUT, WHEN TO USE, SAFETY, RELATED TOOLS. ✅
- **Step 4**: No redundant wrappers. ✅

### 13. GetAuditHistoryTool.cs

- **Step 1**: Single `try`, single `catch (Exception ex)`. ✅
- **Step 2**: Catch returns `ThrowException(ex)`. ✅
- **Step 3**: Read template — concise. Kept: MODES, audit-enable prerequisite, from_date overrides minutes_ago, empty result troubleshooting. Removed: OUTPUT, WHEN TO USE, WHEN NOT TO USE, COMMON MISTAKES, RELATED TOOLS, FUZZY/AMBIGUITY. ✅
- **Step 4**: No redundant wrappers. ✅

---

## Notes

- All 13 tools follow the single-try/catch pattern correctly.
- All descriptions follow the concise template (Read or CRUD).
- No redundant wrapper methods found.
- All tools are already listed in [ReviewTools.md](ReviewTools.md).

**No action required.**
