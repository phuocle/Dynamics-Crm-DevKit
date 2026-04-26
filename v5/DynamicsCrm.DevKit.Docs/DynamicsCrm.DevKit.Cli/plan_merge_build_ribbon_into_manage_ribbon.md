# Plan: Merge `build_ribbon_xml` into `manage_ribbon`

## Mục tiêu

Xóa hoàn toàn tool `build_ribbon_xml` (MCP-exposed), tích hợp toàn bộ logic vào `manage_ribbon`.  
Tool count: 36 → 35.

---

## Vấn đề hiện tại

| Bước | Tool | Tác dụng |
|------|------|----------|
| 1 | `build_ribbon_xml` | Build RibbonDiffXml, lưu ra file temp `.devkit/modified_ribbons/` |
| 2 | `manage_ribbon(action='update', ribbonxml=<path>)` | Đọc file đó, import vào Dataverse |

→ 2 tool call + 1 file tạm → lãng phí token, phức tạp không cần thiết.

---

## Giải pháp

Gộp thành **1 tool call duy nhất**:

```
manage_ribbon(action='update', entity_name='account', operations=[...])
```

Tool `manage_ribbon` sẽ tự build XML nội bộ rồi import luôn, không cần file tạm, không cần tool call trung gian.

---

## Thay đổi cần thực hiện

### 1. `ManageRibbonTool.cs`

**Thêm parameter `operations`** vào tool signature:

```csharp
[Description("JSON array of ribbon operations...")]
string operations = ""
```

**Cập nhật logic `action='update'`:**
- Nếu `operations` có giá trị → chạy toàn bộ logic build từ `BuildRibbonXmlTool` (inline, dưới dạng private method) → import ngay
- Nếu `ribbonxml` có giá trị (file path) → giữ nguyên flow hiện tại (backward-compat cho `undo` và trường hợp người dùng tự cung cấp XML)
- Nếu cả hai đều empty → báo lỗi

**Chuyển các private method từ `BuildRibbonXmlTool` sang `ManageRibbonTool`:**
- `BuildRibbonXml(entity, operations, crmService)` → returns `string` (ribbonDiffXml)
- `FetchExistingRibbonDiffXml(entity, crmService)`
- `ApplyOperations(doc, operations, crmService)`
- `ValidateAgainstXsd(ribbonDiffXml)`
- `UpsertLocLabel(...)`, `GetRibbonSchemaSet()`, tất cả helper methods

**Cập nhật mô tả tool** để phản ánh flow mới (không còn nhắc đến `build_ribbon_xml`):

```
WORKFLOW: manage_ribbon(action='update', entity_name=..., operations=[...]) → auto-build + import + publish
```

**Xóa `ribbonxml` khỏi `action='update'`** — chỉ giữ cho `undo`.

**Result type:** Dùng thẳng `ManageRibbonResult`, không cần `BuildRibbonXmlResult`.

---

### 2. `BuildRibbonXmlTool.cs`

**Xóa hoàn toàn** file này (không còn `[McpServerToolType]`, không còn expose tool).

---

### 3. `StructuredResults.cs`

**Xóa class `BuildRibbonXmlResult`** (lines 352–376) — không còn dùng.  
Giữ nguyên `ManageRibbonResult`, `RibbonSurfaceButtons`, `RibbonButtonInfo`.

---

### 4. Cập nhật tool description trong `ManageRibbonTool.cs`

Tool description mới (summary):

```
Retrieve and modify RibbonDiffXml for Dataverse entities via solution import.

ACTIONS: list, buttons, detail, update, undo
- list: entities with ribbon customizations in solution 'devkit-ribbon'
- buttons: all ribbon buttons (OOB+custom) across form/main_grid/sub_grid. Required: entity_name
- detail: show current RibbonDiffXml. Required: entity_name
- update: build + apply ribbon changes. Required: entity_name + operations. Auto: backup → build → validate → import → publish
- undo: restore from backup file. Required: entity_name + ribbonxml (backup path)

SUPPORTED OPERATIONS (10): add_button, update_button, hide_button, show_button,
  add_split_button, update_split_button, add_flyout_static, update_flyout_static,
  hide_flyout_item, show_flyout_item

Auto-backup before update; backup failure blocks update.
NOTE: Ribbon requires PublishAll. auto_publish=true (default) runs PublishAll synchronously.
```

---

### 5. `AGENTS.md` — cập nhật danh sách MCP Tools

Xóa `build_ribbon_xml` khỏi danh sách 36 tools → còn 35 tools.

---

### 6. Codex docs

File: `DynamicsCrm.DevKit.Docs/codex/35.manage_ribbon.md`  
Cập nhật để mô tả flow mới (không còn bước `build_ribbon_xml` riêng lẻ).

---

## File thay đổi

| File | Loại thay đổi |
|------|--------------|
| `Cli/Mcp/Tools/ManageRibbonTool.cs` | Sửa (thêm `operations` param + merge logic) |
| `Cli/Mcp/Tools/BuildRibbonXmlTool.cs` | **Xóa** |
| `Cli/Mcp/Tools/Models/StructuredResults.cs` | Sửa (xóa `BuildRibbonXmlResult`) |
| `AGENTS.md` | Sửa (36 → 35, xóa `build_ribbon_xml`) |
| `DynamicsCrm.DevKit.Docs/codex/35.manage_ribbon.md` | Sửa |

---

## Flow sau khi merge

```
AI → manage_ribbon(action='update', entity_name='account', operations=[...])
       ↓ (nội bộ, không expose ra ngoài)
       1. Validate entity_name
       2. Fetch RibbonDiffXml từ devkit_ribbon solution
       3. Apply operations (10 loại)
       4. Validate XSD
       5. Backup ribbon hiện tại → .devkit/backups/ribbons/
       6. Build solution ZIP + import
       7. Cleanup stale entities
       8. PublishAll (nếu auto_publish=true)
       ↓
     ManageRibbonResult { Status, BackupPath, Published, ... }
```

---

## Điều KHÔNG thay đổi

- Logic build XML (10 operations) — giữ nguyên, chỉ chuyển vào `ManageRibbonTool` dưới dạng private methods
- XSD validation
- Backup/undo flow
- `action='undo'` vẫn nhận `ribbonxml` = backup file path
- `action='list'`, `action='buttons'`, `action='detail'` không thay đổi
- Embedded resources (ribbon.zip, XSD files)
