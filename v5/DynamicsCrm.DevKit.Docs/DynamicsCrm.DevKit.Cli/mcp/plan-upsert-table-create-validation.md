# Plan: upsert_table — Create Mode Validation & Naming Helper

> **Date**: 2026-04-18  
> **Scope**: `UpsertTableTool.cs` (CREATE path only) + new helper `TableNameHelper.cs`  
> **Status**: PLAN — no code changes yet

---

## Background / Problem Statement

Khi AI gọi `upsert_table` với `action = create`, hiện tại có 2 vấn đề chính:

1. **Solution resolution**: đã có logic `ResolveSolution()` dùng fuzzy match (exact uniquename → exact displayname → contains), nhưng flow chưa tách biệt rõ ràng khi `solution_name` không được cung cấp → prefix không xác định được → SchemaName sai.

2. **Prefix confirmation**: khi prefix được resolve từ `entity_name` (tức user nhập tên kiểu `project` kèm `prefix="new"` hoặc `entity_name="new_project"`), không có bước AI xác nhận prefix với user trước khi tạo table.

3. **SchemaName / LogicalName derivation**: logic hiện tại tản mạn trong `upsert_table`, phức tạp, dễ sai với tên nhiều từ có ký tự đặc biệt.

---

## Changes Planned

### Change 1 — Solution Fuzzy Resolution (Point 1)

**File**: `UpsertTableTool.cs`  
**Where**: CREATE mode entry, trước khi validate `display_name` / `display_collection_name`

**Current behavior** (tóm tắt):
- Nếu có `solution_name` → gọi `ResolveSolution()` → đã có fuzzy logic ✅
- Nếu không có `solution_name` và entity_name không có prefix → lỗi rõ ràng ✅
- Vấn đề: khi `ResolveSolution` trả về 0 kết quả hoặc >1 kết quả → đã báo lỗi user ✅

**Kết luận**: Logic này **đã đúng** theo yêu cầu. Không cần thay đổi `ResolveSolution()`.

Chỉ cần **cải thiện error message** khi 0 hoặc >1 match để AI biết phải hỏi user nhập lại:

```
// 0 match:
"[Error] Solution '{input}' không tìm thấy.
Tip: Hãy cung cấp chính xác Unique Name hoặc Display Name của solution.
Dùng get_solution_components để xem danh sách solution."

// >1 match:
"[Error] Có nhiều solution khớp với '{input}': abc (My ABC), xyz (My XYZ).
Tip: Hãy cung cấp chính xác Unique Name để phân biệt."
```

> ✅ **No code change needed** - message hiện tại đã đủ rõ. Giữ nguyên.

---

### Change 2 — Prefix Confirmation Flow (Point 2)

**File**: `UpsertTableTool.cs`  
**Where**: CREATE mode, sau khi prefix đã được resolve (từ solution hoặc từ entity_name)

**Yêu cầu**: AI hỏi user xác nhận prefix trước khi CREATE.

**Cơ chế trong MCP**: Tool không thể "chờ" user input giữa chừng. Pattern đúng là:  
→ Tool trả về một **confirmation-required response** (không phải error, không phải success).  
→ AI đọc response, hỏi user "Prefix sẽ là `new`, có đúng không?"  
→ User xác nhận → AI gọi lại tool với `confirmed_prefix="new"` (hoặc prefix mới nếu sai).

**Thêm parameter mới vào `upsert_table`**:

```csharp
[Description("Confirmed publisher prefix for create. Leave empty on first call — tool will return the resolved prefix for confirmation. Re-call with this set to proceed.")]
string confirmed_prefix = ""
```

**Logic trong CREATE mode**:

```
1. Resolve prefix (from solution_name → publisher, hoặc từ entity_name.Split('_')[0])
2. Nếu confirmed_prefix == "" (chưa confirm):
   → Trả về ConfirmationRequiredResult với prefix đã resolve
   → AI sẽ hỏi user: "Prefix sẽ là '{prefix}', đúng không?"
3. Nếu confirmed_prefix != "":
   → So sánh confirmed_prefix với resolved prefix
   → Nếu khác → dùng confirmed_prefix (user đã override)
   → Tiếp tục create bình thường
```

**Response shape khi cần confirm**:
```
[PrefixConfirmationRequired]
ResolvedPrefix: new
EntityName (dự kiến): new_project
SchemaName (dự kiến): new_Project
LogicalName (dự kiến): new_project

→ Xác nhận đúng: gọi lại upsert_table với confirmed_prefix="new"
→ Sai prefix: gọi lại upsert_table với confirmed_prefix="<prefix đúng>"
```

**IsError = false** (đây không phải lỗi, là confirmation step).

---

### Change 3 — DataverseNamer (Nameer) (Point 3)

> ⚠️ **Vị trí thay đổi so với plan ban đầu**: Đặt trong **Shared project** thay vì `Mcp/Tools/Helper/`  
> **Lý do**: Helper này cần dùng chung cho nhiều components: `upsert_table`, `upsert_column`, VSIX wizards, CLI TaskGenerator, v.v. Shared project là nơi duy nhất tất cả components đều reference tới.

**File mới**: `DynamicsCrm.DevKit.Shared\DataverseNamer.cs`

**Namespace**: `DynamicsCrm.DevKit.Shared`

**Method**:
```csharp
public static class DataverseNamer
{
    public static (string SchemaName, string LogicalName) Resolve(string input, string prefix)
}
```

**Quy tắc**:

| Bước | Mô tả | Ví dụ |
|------|--------|-------|
| 1 | Trim input | `" Hello Xin Chao! "` → `"Hello Xin Chao!"` |
| 2 | Remove ký tự đặc biệt (giữ chữ cái, chữ số, khoảng trắng) | `"Hello Xin Chao!"` → `"Hello Xin Chao"` |
| 3 | Split theo khoảng trắng | `["Hello", "Xin", "Chao"]` |
| 4 | PascalCase từng từ (Upper first char, lower rest) | `["Hello", "Xin", "Chao"]` |
| 5 | Join | `"HelloXinChao"` |
| 6 | SchemaName = `prefix + "_" + joined` | `"new_HelloXinChao"` |
| 7 | LogicalName = SchemaName.ToLowerInvariant() | `"new_helloxinchao"` |

**Edge cases**:

| Input | Prefix | SchemaName | LogicalName |
|-------|--------|-----------|-------------|
| `"Hello Xin Chao"` | `new` | `new_HelloXinChao` | `new_helloxinchao` |
| `"sale order"` | `abc` | `abc_SaleOrder` | `abc_saleorder` |
| `"My-Table #1"` | `v4` | `v4_MyTable1` | `v4_mytable1` |
| `"PROJECT"` | `cr123` | `cr123_Project` | `cr123_project` |
| `"alreadyPascal"` | `new` | `new_Alreadypascal` | `new_alreadypascal` |
| `""` (empty) | `new` | throws ArgumentException | - |

> **Note**: Với input không có khoảng trắng (1 word), áp dụng `ToTitleCase` hoặc `UpperFirst + LowerRest`.

**Thay thế logic hiện tại** trong `UpsertTableTool.cs` tại đoạn "Auto-derive schema name" (dòng ~192-217) bằng call tới `TableNameHelper.Resolve()`.

---

### Change 4 — Unit Tests

**File**: `DynamicsCrm.DevKit.UnitTests\Cli\Mcp\DataverseNamerTests.cs` (mới)

Test cases cần cover:
- Multi-word với khoảng trắng
- Ký tự đặc biệt bị loại bỏ
- Số trong tên
- All UPPERCASE input → normalized
- Input rỗng → exception
- Input đã PascalCase → giữ UpperFirst

---

## Flow Diagram — CREATE mode (sau khi plan implemented)

```
upsert_table(entity_name, solution_name, ...)
    │
    ├─ solution_name cung cấp?
    │   ├─ YES → ResolveSolution() → 1 match → resolvedPrefix ✅
    │   │                          → 0 match → ERROR (ask user re-enter) ❌
    │   │                          → >1 match → ERROR (ask user pick exact) ❌
    │   └─ NO  → extract prefix từ entity_name.Split('_')[0]
    │            → không có prefix + không có solution → ERROR ❌
    │
    ├─ confirmed_prefix == "" ?
    │   ├─ YES → tính SchemaName/LogicalName dự kiến via DataverseNamer.Resolve()
    │   │        → trả về ConfirmationRequiredResult (non-error)
    │   │        → AI hỏi user confirm prefix
    │   └─ NO  → dùng confirmed_prefix (user đã xác nhận hoặc override)
    │
    ├─ validate display_name, display_collection_name (required)
    │
    ├─ DataverseNamer.Resolve(display_name hoặc namePart, prefix)
    │   → SchemaName, LogicalName chính xác
    │
    └─ CreateEntityRequest → publish → return success
```

---

## Files Affected

| File | Action |
|------|--------|
| `DynamicsCrm.DevKit.Shared\DataverseNamer.cs` | **New** — `Resolve(string input, string prefix)` — shared across all components |
| `DynamicsCrm.DevKit.Cli\Mcp\Tools\UpsertTableTool.cs` | Modify — add `confirmed_prefix` param, add confirmation flow, use `DataverseNamer` |
| `DynamicsCrm.DevKit.UnitTests\Cli\Mcp\DataverseNamerTests.cs` | **New** — unit tests for `DataverseNamer` |

> **Future consumers** (sẽ dùng `DataverseNamer` sau này):
> - `UpsertColumnTool.cs` — column schema/logical name derivation
> - VSIX Wizards — khi tạo entity/attribute từ UI
> - CLI `TaskGenerator` — khi generate code
> - Bất kỳ component nào cần normalize Dataverse name

---

## Notes / Decisions for Review

1. **`confirmed_prefix` parameter**: Thêm 1 optional param mới vào tool. Đây là pattern "2-step confirmation" phổ biến trong MCP. AI sẽ không set param này lần đầu, chỉ set khi user đã confirm.

2. **Scope của confirmation**: Chỉ áp dụng cho **CREATE mode**. UPDATE mode không cần confirm vì prefix đã có sẵn trên entity tồn tại.

3. **ResolveSolution() giữ nguyên**: Logic fuzzy đã đúng theo yêu cầu (display name → fuzzy → exact uniquename). Error messages đã đủ rõ.

4. **`DataverseNamer` trong Shared project**: Đặt tại `DynamicsCrm.DevKit.Shared\DataverseNamer.cs` để tất cả components (CLI MCP tools, VSIX, Tool, Analyzers) đều có thể reference. Không đặt trong `Mcp/Tools/Helper/` vì scope quá hẹp.

5. **Regex để remove special chars**: Dùng `Regex.Replace(input, @"[^a-zA-Z0-9\s]", "")` — giữ chữ, số, khoảng trắng; loại bỏ dấu gạch nối, hash, dấu chấm, etc.
