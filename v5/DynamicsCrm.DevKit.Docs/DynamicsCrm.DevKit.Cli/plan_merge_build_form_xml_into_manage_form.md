# Plan: Merge `build_form_xml` into `manage_form`

## Mục tiêu

Xóa hoàn toàn tool `build_form_xml` (MCP-exposed), tích hợp toàn bộ logic vào `manage_form`.
Tool count: **36 → 35**.

---

## Vấn đề hiện tại

| Bước | Tool | Tác dụng |
|------|------|----------|
| 1 | `build_form_xml` | Retrieve current FormXML, apply ops, save ra file temp `.devkit/modified_forms/{entity}_{formId}.formxml` |
| 2 | `manage_form(action='update', formxml=<path>)` | Đọc file đó, validate XSD, backup, import vào Dataverse, publish |

→ **2 tool calls + 1 file tạm** → lãng phí token, tăng độ phức tạp, AI agent dễ "quên" gọi bước 2.

Ngoài ra `build_form_xml` chỉ là **sub-tool** — không bao giờ được dùng độc lập, luôn phải call kèm `manage_form(action='update')`.

---

## Giải pháp

Gộp thành **1 tool call duy nhất**:

```
manage_form(action='update', entity_name='account', form_id='<guid>', operations=[...])
```

Tool `manage_form` sẽ:
1. Retrieve current FormXML từ Dataverse
2. Validate field names
3. Apply operations (inline, dưới dạng private methods)
4. Backup → Validate XSD → Update → Publish

**Không** cần file tạm, **không** cần tool call trung gian.

---

## Thay đổi cần thực hiện

### 1. `ManageFormTool.cs`

**Thêm parameter `operations`** vào tool signature:

```csharp
[Description(
    "For 'update' (recommended): JSON array of operations from build-form-xml schema (auto-builds + imports). " +
    "Read docs://instructions_for_formxml for format.")]
string operations = "",
```

**Cập nhật logic `action='update'`:**

Có 2 chế độ (mutually exclusive):

| Input | Hành động |
|-------|-----------|
| `operations` (JSON array) | Build FormXML inline từ operations → backup → validate → update → publish |
| `formxml` (raw XML string hoặc backup file path .formxml.json) | Giữ nguyên flow cũ — chỉ dùng cho `undo` hoặc khi user có sẵn XML |
| Cả hai empty | Báo lỗi: "Provide 'operations' (recommended) or 'formxml'." |
| Cả hai có giá trị | Báo lỗi: "Provide either 'operations' or 'formxml', not both." |

**Logic mới khi `operations` được cung cấp:**

```
1. Parse operations JSON → List<JsonElement>
2. Retrieve current systemform (formxml, name, objecttypecode, type)
3. Verify entity_name khớp objecttypecode
4. Collect all field names referenced trong operations
5. RetrieveEntityRequest → lấy attribute metadata cho entity
6. Validate fields tồn tại; auto-correct image backing fields
7. Parse current FormXML thành XDocument
8. Apply mỗi op → switch theo (action, manage_action)
9. Serialize lại modifiedFormXml
10. → tiếp tục flow cũ: backup → validate XSD → update → publish
```

**Chuyển toàn bộ private methods từ `BuildFormXMLTool` sang `ManageFormTool`** (hoặc tách ra một helper class):

- Operation executors (manage_tab/section/fields/library/event với add/update/move/remove):
  - `ExecuteAddTab`, `ExecuteUpdateTab`, `ExecuteMoveTab`, `ExecuteRemoveTab`
  - `ExecuteAddSection`, `ExecuteUpdateSection`, `ExecuteMoveSection`, `ExecuteRemoveSection`
  - `ExecuteAddFields`, `ExecuteUpdateFields`, `ExecuteRemoveFields`
  - `ExecuteAddHeaderFields`, `ExecuteUpdateHeaderFields`, `ExecuteRemoveHeaderFields`
  - `ExecuteAddLibrary`, `ExecuteRemoveLibrary`
  - `ExecuteAddEvent`, `ExecuteRemoveEvent`
- XML building helpers: `BuildSectionElement`, `BuildCellElement`, `CreateSpacerCell`, `BuildRows`, `EnsureLibrary`, `FindEvent`
- Resolution helpers: `ResolveClassId`, `CorrectFieldName`, `CollectFieldNames`, `CollectFieldsFromArray`
- Navigation helpers: `FindTab`, `FindSection`, `GetTabNames`, `GetSectionNames`, `FindRowByFieldName`, `InsertElement`, `InsertFieldRows`, `CollectExistingControlIds`, `DeduplicateControlId`
- Naming helpers: `AutoTabName`, `AutoSectionName`, `Sanitize`, `NewGuid`, `GetTabColumnWidths`
- JSON helpers: `GetStringProp`, `GetIntProp`, `GetBoolProp`, `LevenshteinClose`, `ParseFieldSpec`

> **Đề xuất:** Tách thành **helper class riêng** `FormXmlOperationsHelper.cs` (đặt trong `Mcp/Tools/Helper/`) để giữ `ManageFormTool.cs` không quá dài (~2000 LOC). Class này chỉ cần một method public:
>
> ```csharp
> public static (string ModifiedFormXml, List<string> OperationSummaries, Dictionary<string, string> ClassIdMap, int FieldsResolved)
>     ApplyOperations(string currentFormXml, string entityName, ServiceClient serviceClient, List<JsonElement> operations);
> ```
>
> Tất cả helpers còn lại để private/internal.

**Cập nhật `[Description]` của tool** để phản ánh flow mới:

```
ACTIONS:
- action='list': List active forms.
- action='detail': Full FormXML + metadata.
- action='update' (recommended): Build + import in one call. Required: form_id + operations.
- action='update' (advanced): Provide raw FormXML directly. Required: form_id + formxml.
- action='rename': Change display name.
- action='undo': Restore from backup.

WORKFLOW (recommended):
manage_form(action='update', entity_name=..., form_id=..., operations=[...])
→ auto-builds FormXML + backup + validate + import + publish

OPERATIONS (5 action groups, each with manage_action):
- manage_tab: add | update | move | remove
- manage_section: add | update | move | remove
- manage_fields: add | update | remove | add_header | update_header | remove_header
- manage_library: add | remove
- manage_event: add | remove

Read docs://instructions_for_formxml for full format and examples.
```

**Bỏ "WORKFLOW: build_form_xml → manage_form(action='update')"** — không còn đúng.

**Result type:** Dùng thẳng `UpsertFormResult`. Bổ sung 2 fields optional:

```csharp
[JsonPropertyName("operationsCount")]
[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
public int? OperationsCount { get; set; }

[JsonPropertyName("fieldsResolved")]
[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
public int? FieldsResolved { get; set; }
```

---

### 2. `BuildFormXMLTool.cs`

**Xóa hoàn toàn** file này (không còn `[McpServerToolType]`, không còn expose `build_form_xml`).

Logic được chuyển sang `FormXmlOperationsHelper.cs` (helper class) — không còn là MCP tool.

---

### 3. `StructuredResults.cs`

**Xóa class `BuildFormXMLResult`** (lines 189–213) — không còn dùng.

Bổ sung 2 fields vào `UpsertFormResult` như mô tả ở trên.

---

### 4. `McpServerHost.cs`

**Xóa entry** `[nameof(BuildFormXMLTool)] = "standard"` (line 56).

Tool count tự động giảm: 36 → 35.

---

### 5. `InstructionResources.cs` (FormXML instructions)

Cập nhật `docs://instructions_for_formxml`:

- Thay `build_form_xml + manage_form` → `manage_form(action='update', operations=[...])`
- Cập nhật phần "Post-Create Workflow" tại line 370:
  - **Cũ:** `3. build_form_xml + manage_form -- customize the form`
  - **Mới:** `3. manage_form(action='update', operations=[...]) -- customize the form`
- Cập nhật examples để dùng `operations` thay vì 2 bước riêng

---

### 6. `README.md` (CLI)

Tìm và update tất cả mention của `build_form_xml`:
- Tools count: 36 → 35
- Tool list: bỏ `build_form_xml`
- Examples / workflows: dùng `manage_form` 1 bước

---

### 7. `AGENTS.md` / `CLAUDE.md` (root)

Tìm dòng:
```
`whoami`, ..., `manage_form`, `manage_view`, ..., `build_form_xml`, `build_sitemap_xml`, `build_ribbon_xml`, ...
```

→ Bỏ `build_form_xml` khỏi danh sách. Tools count 36 → 35.

---

## Lợi ích

| Trước | Sau |
|-------|-----|
| 2 tool calls + 1 file tạm | 1 tool call |
| ~3000+ tokens cho mỗi update | ~1500 tokens |
| AI agent đôi khi quên gọi `manage_form` sau `build_form_xml` | Không thể quên |
| Tool count: 36 | Tool count: 35 |
| Tool surface phức tạp (sub-tool ẩn) | Tool surface đơn giản, mỗi tool đứng độc lập |

**Backward-compat:** giữ nguyên flow `formxml=<path>` cho `undo` và trường hợp user tự build XML thủ công.

---

## Migration / Rollout

- **Breaking change** với AI agents đang dùng `build_form_xml`. Vì đây là MCP tool (chạy local), không có user nào "phụ thuộc" trực tiếp — chỉ là LLM call pattern.
- Sau khi build & restart MCP server, AI tự nhiên sẽ thấy tool list mới (không có `build_form_xml`) và dùng `operations` parameter của `manage_form`.
- Không cần "deprecation period" — xóa thẳng.

---

## Tasks

- [ ] Đọc lại 1 lần `ManageFormTool.cs` + `BuildFormXMLTool.cs` để đảm bảo nắm đủ
- [ ] Tạo `FormXmlOperationsHelper.cs` trong `Mcp/Tools/Helper/`, copy toàn bộ private methods + executors từ `BuildFormXMLTool` qua, expose đúng 1 method `ApplyOperations(...)`
- [ ] Cập nhật `ManageFormTool.cs`:
  - Thêm param `operations`
  - Branching: operations vs formxml vs both-empty/both-set
  - Khi `operations` có giá trị → gọi `FormXmlOperationsHelper.ApplyOperations(...)` → tiếp tục flow update cũ
  - Cập nhật `[Description]` của tool và params
- [ ] Cập nhật `StructuredResults.cs`:
  - Xóa `BuildFormXMLResult`
  - Thêm `OperationsCount`, `FieldsResolved` (nullable) vào `UpsertFormResult`
- [ ] Xóa file `BuildFormXMLTool.cs`
- [ ] Xóa entry trong `McpServerHost.cs` line 56
- [ ] Cập nhật `InstructionResources.cs` (`docs://instructions_for_formxml`)
- [ ] Cập nhật `README.md` (CLI)
- [ ] Cập nhật `AGENTS.md` / `CLAUDE.md` (tool list 36 → 35, bỏ `build_form_xml`)
- [ ] Run `/claude-build-cli` để rebuild
- [ ] Restart MCP process: `Get-Process | Where-Object { $_.CommandLine -like "*devkit*mcp*" } | Stop-Process -Force`
- [ ] Smoke test: gọi `manage_form(action='update', operations=[...])` trên 1 form thật

---

## Risks

| Risk | Mức | Mitigation |
|------|-----|------------|
| `ManageFormTool.cs` quá dài sau khi merge | Trung bình | Tách helper class `FormXmlOperationsHelper.cs` ra riêng |
| Breaking AI agents đang dùng `build_form_xml` | Thấp | MCP tool list refresh tự động sau restart; AI sẽ thấy schema mới |
| Backup không tương thích sau merge | Thấp | Flow `undo` vẫn dùng `formxml=<backup_path>`, không thay đổi |
| Validation field names không hoạt động sau merge | Trung bình | Đảm bảo bước 4–6 (collect → fetch metadata → validate) chạy TRƯỚC khi backup, để fail-fast và không tạo backup vô ích |
| Performance: 1 thêm RetrieveEntityRequest cho metadata | Rất thấp | Trước đây đã có 1 call này trong `build_form_xml` rồi — không tệ hơn |

---

## Acceptance Criteria

- [ ] Tool `build_form_xml` không còn xuất hiện trong tool list khi connect MCP
- [ ] Tool count khi `category=all` là **35** (không phải 36)
- [ ] `manage_form(action='update', operations=[...])` hoạt động end-to-end: build + backup + validate + import + publish
- [ ] `manage_form(action='update', formxml=<path>)` vẫn hoạt động (backward-compat)
- [ ] `manage_form(action='undo', formxml=<backup_path>)` vẫn hoạt động
- [ ] Field validation báo lỗi rõ ràng khi field không tồn tại (giống behavior cũ)
- [ ] Error messages không còn nhắc tới `build_form_xml`
- [ ] Build pass: `/claude-build-cli`
- [ ] Smoke test pass trên 1 form thật của entity bất kỳ
