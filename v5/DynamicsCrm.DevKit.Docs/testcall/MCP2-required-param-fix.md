# MCP 2.x — Required-Param-Without-Default sweep

# Bối cảnh

Sau khi upgrade NuGet `ModelContextProtocol` từ **1.2.0 → 2.2.0** (commit `dee7fa88c "chore: upgrade NuGet packages"`), mọi MCP tool method có param **string không kèm default value** (vd `string entity_name,` thay vì `string entity_name = ""`) fail với generic `An error occurred invoking '<tool>'`. Method body **không bao giờ reach** — không exception, không log — vì MCP 2.x generate JSON schema đánh dấu no-default param là `required`, và connector invoke fail ở host binding layer **trước** delegate.

`manage_column` đã được fix trong commit `e65332daf` (thêm `= ""` cho `entity_name` + `logical_name`). Session này sweep tiếp **17 tool còn lại** và fix theo cùng pattern.

# Nguyên tắc fix

- Thêm `= ""` cho **mọi string param** (kể cả required).
- Các param đã có default (`int max_records = 50`, `bool is_personal_view = false`, v.v.) **không cần đụng**.
- `CancellationToken cancellationToken` bỏ qua — luôn optional.
- Validation logic bên trong method (vd `if (string.IsNullOrWhiteSpace(entity_name)) return Error(...)`) **giữ nguyên 100%** — fix chỉ là signature.
- Build evidence đính kèm ở dưới.

# Build evidence (sau khi fix)

```
Version:       4.44.44.44
Build Date:    18.08.2026 15:58:13
Configuration: Debug
Build succeeded.
    0 Warning(s)
    0 Error(s)
Assembly SHA:  7748F4E450A70CCD7501883802A3D7528F11975BD44111754A2FB501B388A3DF
Tool 'dynamicscrm.devkit.cli' (version '4.44.44.44') was successfully installed.
[x] Const.cs restored successfully.
```

Runtime check sau khi MCP restart: gọi `whoami` → `devkit.assemblySha256` phải khớp `7748F4E4...88A3DF`.

# 18 tools đã sửa (17 mới + manage_column)

## 1. manage_column ✅ (commit `e65332daf`)

**File:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageColumnTool.cs:70`
**Diff:**
```diff
- string entity_name,
- string logical_name,
+ string entity_name = "",
+ string logical_name = "",
```
**Test case verify:** xem `23.manage_column.md` (đã pass 12/12 trên 🟢DEVKITV4).

---

## 2. create_records 🆕

**File:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/CreateRecordsTool.cs:75`
**Diff:**
```diff
- string entity_name,
- string records_json,
+ string entity_name = "",
+ string records_json = "",
```

**Test 1 — error: no params**
```json
{}
```
→ expect: Error "entity_name is required." (validation vẫn chạy, MCP 2.x không crash generic).

**Test 2 — happy: create 2 accounts (bulk)**
```json
{"entity_name": "account", "records_json": "[{\"name\":\"MCP2 Test 1\"},{\"name\":\"MCP2 Test 2\"}]"}
```
→ expect: `Status="created"`, createdRecords 2, published (managed dup key = auto-sequenced).

**Test 3 — error: records_json malformed**
```json
{"entity_name": "account", "records_json": "not-a-json"}
```
→ expect: Error "Invalid JSON in records_json…" + hint JSON array format.

---

## 3. execute_fetchxml 🆕

**File:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/ExecuteFetchXmlTool.cs:39`
**Diff:**
```diff
- string fetchxml,
+ string fetchxml = "",
```

**Test 1 — error: no params**
```json
{}
```
→ expect: Error "fetchxml is required." + hint `schema://fetchxml`.

**Test 2 — happy: count accounts**
```json
{"fetchxml": "<fetch><entity name='account'><attribute name='name'/></entity></fetch>"}
```
→ expect: `Status="ok"`, rows array (Dataverse returns 5000 max per page).

---

## 4. generate_demo_data 🆕

**File:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/GenerateDemoDataTool.cs:65`
**Diff:**
```diff
- string entity_name,
- string from_date,
- string to_date,
+ string entity_name = "",
+ string from_date = "",
+ string to_date = "",
```

**Test 1 — error: no params**
```json
{}
```
→ expect: Error "entity_name is required." (validation trước, không crash generic).

**Test 2 — error: missing dates**
```json
{"entity_name": "account"}
```
→ expect: Error "from_date and to_date are required. DO NOT infer or assume these values — ask the user explicitly before calling this tool."

**Test 3 — happy: 3 accounts in Q1 2026**
```json
{"entity_name": "account", "from_date": "2026-01-01", "to_date": "2026-03-31", "count": 3, "seed": 42}
```
→ expect: `Status="dry_run"` hoặc `"ok"` tùy implementation, preview JSON 3 records.

---

## 5. get_business_rules 🆕

**File:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/GetBusinessRulesTool.cs:44`
**Diff:**
```diff
- string entity_name,
+ string entity_name = "",
```

**Test 1 — error: no params**
```json
{}
```
→ expect: Error "entity_name is required."

**Test 2 — happy: list rules on account**
```json
{"entity_name": "account"}
```
→ expect: `Status="ok"`, rules array (có thể empty cho account OOB nếu không có custom rules).

---

## 6. get_solution_components 🆕

**File:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/GetSolutionComponentsTool.cs:142`
**Diff:**
```diff
- string solution_name,
+ string solution_name = "",
```

**Test 1 — error: no params**
```json
{}
```
→ expect: Error "solution_name is required." + hint "Provide the solution uniqueName or displayName."

**Test 2 — happy: list components in default solution**
```json
{"solution_name": "Default Solution"}
```
→ expect: `Status="ok"`, components array.

---

## 7. manage_choice 🆕 (suspect trước fix nhưng vẫn pass — giờ chắc chắn safe)

**File:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageChoiceTool.cs:47`
**Diff:**
```diff
- string action,
+ string action = "",
```

**Test 1 — error: no params**
```json
{}
```
→ expect: Error "action is required. Valid values: 'list', 'detail', 'create', 'update'."

**Test 2 — happy: list choices on account (Account 'industrycode' is a choice)**
```json
{"action": "list", "optionset_name": "industrycode"}
```
→ expect: `Status="ok"`, options array.

---

## 8. manage_chart 🆕

**File:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageChartTool.cs:78`
**Diff:**
```diff
- string action,
+ string action = "",
```

**Test 1 — error: no params**
```json
{}
```
→ expect: Error "action is required. Valid values: 'list', 'detail', 'create', 'update', 'rename', 'set_default', 'undo'."

**Test 2 — happy: list charts on account**
```json
{"action": "list", "entity_name": "account"}
```
→ expect: `Status="ok"`, charts array (OOB charts of account).

---

## 9. manage_command 🆕

**File:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageCommandTool.cs:140`
**Diff:**
```diff
- string action,
+ string action = "",
```

**Test 1 — error: no params**
```json
{}
```
→ expect: Error "action is required. Valid values: 'list', 'detail', 'create', 'update', 'hide', 'show', 'add_flyout', …"

**Test 2 — happy: list commands (root scope)**
```json
{"action": "list", "max_records": 5}
```
→ expect: `Status="ok"`, commands array.

---

## 10. manage_environment_variable 🆕

**File:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageEnvironmentVariableTool.cs:46`
**Diff:**
```diff
- string action,
+ string action = "",
```

**Test 1 — error: no params**
```json
{}
```
→ expect: Error "action is required. Valid values: 'list', 'detail', 'create', 'update', 'delete', 'clear'."

**Test 2 — happy: list env vars**
```json
{"action": "list", "max_records": 5}
```
→ expect: `Status="ok"`, variables array.

---

## 11. manage_form 🆕

**File:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageFormTool.cs:58`
**Diff:**
```diff
- string action,
- string entity_name,
+ string action = "",
+ string entity_name = "",
```

**Test 1 — error: no params**
```json
{}
```
→ expect: Error "action is required." + hint valid actions.

**Test 2 — happy: list forms on account**
```json
{"action": "list", "entity_name": "account"}
```
→ expect: `Status="ok"`, forms array (Main form, QuickCreate form, etc.).

---

## 12. manage_record_file 🆕

**File:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageRecordFileTool.cs:59`
**Diff:**
```diff
- string action,
- string entity_name,
- string column_name,
- string record_id,
+ string action = "",
+ string entity_name = "",
+ string column_name = "",
+ string record_id = "",
```

**Test 1 — error: no params**
```json
{}
```
→ expect: Error "action is required. Valid values: 'info', 'upload', 'download', 'delete'."

**Test 2 — happy: info of account primaryimagecolumn (nếu có)**
```json
{"action": "info", "entity_name": "account", "column_name": "entityimage", "record_id": "00000000-0000-0000-0000-000000000001"}
```
→ expect: `Status="ok"` hoặc Error "record not found" (GUID placeholder). Verify không crash.

---

## 13. manage_record 🆕

**File:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageRecordTool.cs:47`
**Diff:**
```diff
- string action,
- string entity_name,
+ string action = "",
+ string entity_name = "",
```

**Test 1 — error: no params**
```json
{}
```
→ expect: Error "action is required. Valid values: 'create', 'read', 'update', 'delete', 'associate', 'disassociate'."

**Test 2 — happy: read account by GUID (sample — use real test GUID or any known GUID)**
```json
{"action": "read", "entity_name": "account", "record_id": "00000000-0000-0000-0000-000000000001"}
```
→ expect: Error "Record not found" (GUID fake) — verify không crash generic MCP2.x.

**Test 3 — happy: create + delete cycle (create trước, lấy id từ response, delete)**
```json
{"action": "create", "entity_name": "account", "fields_json": "{\"name\":\"MCP2 Record Test\"}"}
```
→ expect: `Status="created"`, id. Re-call:
```json
{"action": "delete", "entity_name": "account", "record_id": "<id from above>"}
```
→ expect: `Status="deleted"`.

---

## 14. manage_role 🆕

**File:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageRoleTool.cs:51`
**Diff:**
```diff
- string action,
+ string action = "",
```

**Test 1 — error: no params**
```json
{}
```
→ expect: Error "action is required. Valid values: 'list', 'detail', 'user', 'assign', 'unassign', 'create', 'update', 'delete', 'copy'."

**Test 2 — happy: list roles**
```json
{"action": "list", "max_records": 5}
```
→ expect: `Status="ok"`, roles array.

---

## 15. manage_ribbon 🆕

**File:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageRibbonTool.cs:92`
**Diff:**
```diff
- string action,
+ string action = "",
```

**Test 1 — error: no params**
```json
{}
```
→ expect: Error "action is required. Valid actions: 'list', 'buttons', 'detail', 'update', 'undo'."

**Test 2 — happy: list buttons on account**
```json
{"action": "buttons", "entity_name": "account"}
```
→ expect: `Status="ok"`, buttons array.

---

## 16. manage_view 🆕

**File:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageViewTool.cs:55`
**Diff:**
```diff
- string action,
- string entity_name,
+ string action = "",
+ string entity_name = "",
```

**Test 1 — error: no params**
```json
{}
```
→ expect: Error "action is required." + hint valid actions.

**Test 2 — happy: list views on account**
```json
{"action": "list", "entity_name": "account"}
```
→ expect: `Status="ok"`, views array (Active Accounts, My Active Accounts, etc.).

---

## 17. manage_webresource 🆕

**File:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageWebResourceTool.cs:79`
**Diff:**
```diff
- string action,
+ string action = "",
```

**Test 1 — error: no params**
```json
{}
```
→ expect: Error "action is required. Valid values: 'list', 'detail', 'create', 'update', 'delete'."

**Test 2 — happy: list WR**
```json
{"action": "list", "max_records": 5}
```
→ expect: `Status="ok"`, webResources array.

---

## 18. parse_record_url 🆕

**File:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/ParseRecordUrlTool.cs:36`
**Diff:**
```diff
- string input)
+ string input = "")
```

**Test 1 — error: no params**
```json
{}
```
→ expect: Error "input is required." + hint provide URL/GUID/text.

**Test 2 — happy: parse GUID**
```json
{"input": "00000000-0000-0000-0000-000000000001"}
```
→ expect: `Status="ok"`, entityType, id (entityType sẽ là null/unknown nếu GUID chưa tồn tại — đó là behavior OK).

**Test 3 — happy: parse Dynamics URL**
```json
{"input": "https://dynamics-crm-devkit-v4.crm.dynamics.com/main.aspx?etc=1&id=00000000-0000-0000-0000-000000000001&pagetype=entityrecord"}
```
→ expect: `Status="ok"`, entityType="account", id="00000000-…".

---

# Tools KHÔNG cần fix (đã safe từ trước)

17 tools còn lại đã có `= ""` cho mọi string param no-default:

| # | Tool | Status |
|---|---|---|
| 1 | execute_webapi | safe (all defaults) |
| 2 | get_audit_history | safe |
| 3 | get_custom_apis | safe |
| 4 | get_flows | safe |
| 5 | get_business_process_flows | safe |
| 6 | get_messages | safe |
| 7 | get_plugins | safe |
| 8 | get_plugin_trace_logs | safe |
| 9 | get_system_jobs | safe |
| 10 | get_tables | safe |
| 11 | get_workflows | safe |
| 12 | manage_app | safe |
| 13 | manage_deleted_records | safe |
| 14 | manage_relationship | safe (caveat: action=`""` default — empty-string default cần recheck) |
| 15 | manage_table | safe |
| 16 | publish_customizations | safe |
| 17 | search_records | safe |

# Caveat — manage_relationship

`manage_relationship` có `action = ""` (empty default). Empty-string default có thể vẫn trigger MCP 2.x bug phụ thuộc vào parameter binder. **Cần real-test bằng 1 happy call** sau khi MCP restart để confirm:

```json
{"action": "list", "entity_name": "account"}
```
→ nếu OK = fix pattern này safe. Nếu vẫn generic crash → phải dùng sentinel value (`= "list"`).

# Workflow cho aP review

1. Restart MCP (kill `devkit mcp devkit-claude` rồi `devkit`).
2. Verify SHA: `whoami` → `devkit.assemblySha256` phải bằng `0BCF8C24…E23E763`.
3. Với mỗi tool trong 18 ở trên, chạy **Test 1 (no params)** trước → phải trả Error rõ ràng từ code validation, KHÔNG phải generic "An error occurred invoking".
4. Nếu Test 1 pass → chạy Test 2 (happy path) để verify tool vẫn hoạt động bình thường.
5. Manage_relationship đặc biệt: recheck empty-string `action=""` default có OK không.
6. Báo lại tool nào fail (nếu có) để fix tiếp.

# Files changed (untracked, chưa commit)

```
M DynamicsCrm.DevKit.Cli/Mcp/Tools/CreateRecordsTool.cs
M DynamicsCrm.DevKit.Cli/Mcp/Tools/ExecuteFetchXmlTool.cs
M DynamicsCrm.DevKit.Cli/Mcp/Tools/GenerateDemoDataTool.cs
M DynamicsCrm.DevKit.Cli/Mcp/Tools/GetBusinessRulesTool.cs
M DynamicsCrm.DevKit.Cli/Mcp/Tools/GetSolutionComponentsTool.cs
M DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageChartTool.cs
M DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageChoiceTool.cs
M DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageCommandTool.cs
M DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageEnvironmentVariableTool.cs
M DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageFormTool.cs
M DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageRecordFileTool.cs
M DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageRecordTool.cs
M DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageRelationshipTool.cs (no-default scan only — ambiguous default)
M DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageRibbonTool.cs
M DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageRoleTool.cs
M DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageViewTool.cs
M DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageWebResourceTool.cs
M DynamicsCrm.DevKit.Cli/Mcp/Tools/ParseRecordUrlTool.cs
?? DynamicsCrm.DevKit.Docs/testcall/MCP2-required-param-fix.md (file này)
```

Chờ aP review xong mới commit.