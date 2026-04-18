# Plan: upsert_column — Prefix Resolution & Naming Fix

> **Date**: 2026-04-18  
> **Scope**: `UpsertColumnTool.cs` (CREATE path only)  
> **Status**: PLAN — no code changes yet  
> **Related**: `plan-upsert-table-create-validation.md` (same pattern)

---

## Problem Analysis

### Issue 1 — Không có logic resolve prefix từ `solution_name`

**Code hiện tại** (line 122-128):
```csharp
var underscoreIndex = attribute_name.IndexOf('_');
if (underscoreIndex < 1 || underscoreIndex >= attribute_name.Length - 1)
    return ErrorResult(
        $"Error: attribute_name must include a publisher prefix (e.g., 'new_priority')...");
```

**Vấn đề**: Nếu AI nhận yêu cầu "tạo column Priority" và chỉ có `solution_name="DEVKITMCP"`, không biết prefix → phải tự đặt `attribute_name="new_priority"` theo kinh nghiệm, có thể sai prefix.

Khác với `upsert_table` đã có `ResolveSolution()` → lấy prefix từ publisher của solution.  
`upsert_column` **không có** `ResolveSolution()` — chỉ extract prefix từ `attribute_name.Split('_')[0]`.

---

### Issue 2 — SchemaName derivation sai (thiếu PascalCase)

**Code hiện tại** (line 130-134):
```csharp
var prefix = attribute_name.Substring(0, underscoreIndex);
var schemaNamePart = display_name.Trim().Replace(" ", "").Replace("-", "");
schemaNamePart = new string(schemaNamePart.Where(c => char.IsLetterOrDigit(c)).ToArray());
var schemaName = prefix + "_" + schemaNamePart;
```

**Vấn đề**: Chỉ strip spaces/dashes, **không PascalCase** → casing phụ thuộc hoàn toàn vào `display_name`.

| display_name | Kết quả hiện tại | Kết quả đúng |
|---|---|---|
| `"priority level"` | `new_prioritylevel` | `new_PriorityLevel` |
| `"Order Date"` | `new_OrderDate` | `new_OrderDate` ✅ |
| `"TOTAL AMOUNT"` | `new_TOTALAMOUNT` | `new_TotalAmount` |
| `"my-field #1"` | `new_myfield1` | `new_MyField1` |

→ `DataverseNamer.Resolve()` đã có trong Shared project, cần dùng ở đây.

---

### Issue 3 — Không có prefix confirmation flow

Giống `upsert_table`, khi prefix resolve xong (từ solution hoặc từ `attribute_name`) không có bước AI xác nhận với user trước khi tạo column.

---

### Issue 4 — `solution_name` có nhưng không dùng để resolve prefix

`solution_name` hiện chỉ được pass vào `ExecuteCreateAttribute()` để set `SolutionUniqueName`. Không ai dùng nó để resolve publisher prefix — trong khi đây là thông tin đủ để lấy prefix.

---

## Root Cause Summary

| # | Vấn đề | Hậu quả |
|---|--------|---------|
| 1 | Không có `ResolveSolution()` trong `UpsertColumnTool` | AI phải tự đoán prefix → sai prefix → column tạo với prefix sai |
| 2 | SchemaName không PascalCase | SchemaName casing không đúng Dataverse convention |
| 3 | Không có `confirmed_prefix` param | Không có cơ chế AI hỏi user confirm trước khi CREATE |
| 4 | Không có integration với `DataverseNamer` | Logic SchemaName sẽ tiếp tục không nhất quán giữa `upsert_table` và `upsert_column` |

---

## Changes Planned

### Change 1 — Copy `ResolveSolution()` pattern vào `UpsertColumnTool`

**Vấn đề**: `ResolveSolution()` hiện chỉ tồn tại trong `UpsertTableTool`. Cả 2 tool đều cần logic này.

**Hướng giải quyết**: Tách `ResolveSolution()` ra **Shared helper** để tránh duplicate code.

**File mới**: `DynamicsCrm.DevKit.Shared\DataverseSolutionResolver.cs`

```csharp
public static class DataverseSolutionResolver
{
    public static (string Prefix, string UniqueName, string Error) ResolveSolution(
        IOrganizationService service, string solutionInput)
}
```

Logic giữ nguyên như trong `UpsertTableTool.ResolveSolution()`:
1. Exact match by `uniquename`
2. Exact match by `friendlyname`
3. Contains match by `friendlyname` (fuzzy)
4. 0 match → error
5. >1 match → error với list các solution tìm thấy

→ Sau đó refactor `UpsertTableTool` để gọi `DataverseSolutionResolver.ResolveSolution()` thay vì private method.  
→ `UpsertColumnTool` cũng gọi cùng method.

> **Cần thêm vào `.projitems`** giống như đã làm với `DataverseNamer.cs`.

---

### Change 2 — Thêm `confirmed_prefix` parameter vào `upsert_column`

Cùng pattern với `upsert_table`:

```csharp
[Description("Confirmed publisher prefix. Leave empty on first call — tool returns [PrefixConfirmationRequired] with preview. Re-call with this set to proceed.")]
string confirmed_prefix = ""
```

**Flow trong CREATE mode** (sau khi có `solution_name` hoặc `attribute_name` có prefix):

```
1. Nếu có solution_name → gọi DataverseSolutionResolver.ResolveSolution() → lấy prefix
   - 0 match → ERROR
   - >1 match → ERROR
2. Nếu không có solution_name → extract từ attribute_name.Split('_')[0]
   - Không có prefix + không có solution → ERROR
3. Nếu confirmed_prefix == "" → trả về [PrefixConfirmationRequired] (non-error)
4. Nếu confirmed_prefix != "" → dùng confirmed_prefix, tiến hành CREATE
```

**Response khi cần confirm**:
```
[PrefixConfirmationRequired]
ResolvedPrefix: new
AttributeName (preview): new_prioritylevel  ← logical
SchemaName (preview): new_PriorityLevel     ← schema (PascalCase)
Entity: v4_order

→ Xác nhận đúng: gọi lại upsert_column với confirmed_prefix="new"
→ Sai prefix: gọi lại upsert_column với confirmed_prefix="<prefix đúng>"
```

---

### Change 3 — Thay SchemaName derivation bằng `DataverseNamer`

**Thay đoạn** (line 130-134):
```csharp
var schemaNamePart = display_name.Trim().Replace(" ", "").Replace("-", "");
schemaNamePart = new string(schemaNamePart.Where(c => char.IsLetterOrDigit(c)).ToArray());
var schemaName = prefix + "_" + schemaNamePart;
```

**Bằng**:
```csharp
string schemaName;
try
{
    (schemaName, _) = DataverseNamer.Resolve(display_name, prefix);
}
catch
{
    schemaName = prefix + "_" + display_name.Trim().Replace(" ", "");
}
```

---

### Change 4 — Refactor `UpsertTableTool` dùng `DataverseSolutionResolver`

Thay private method `ResolveSolution()` trong `UpsertTableTool` bằng call tới `DataverseSolutionResolver.ResolveSolution()`.

→ Giảm code duplication, đảm bảo behavior nhất quán giữa 2 tools.

---

### Change 5 — Update `.projitems` và Unit Tests

**Thêm vào `.projitems`**:
```xml
<Compile Include="$(MSBuildThisFileDirectory)DataverseSolutionResolver.cs" />
```

**Unit tests**: `DynamicsCrm.DevKit.UnitTests\Cli\Mcp\DataverseSolutionResolverTests.cs`

Test cases (mock `IOrganizationService`):
- Exact uniquename match → returns prefix
- Exact displayname match → returns prefix
- Contains/fuzzy match → returns prefix
- 0 match → returns error string
- >1 match → returns error string with list
- Publisher not found → returns error string

---

## Files Affected

| File | Action |
|------|--------|
| `DynamicsCrm.DevKit.Shared\DataverseSolutionResolver.cs` | **New** — shared solution resolver, used by both tools |
| `DynamicsCrm.DevKit.Shared\DynamicsCrm.DevKit.Shared.projitems` | Add `DataverseSolutionResolver.cs` entry |
| `DynamicsCrm.DevKit.Cli\Mcp\Tools\UpsertColumnTool.cs` | Modify — add `confirmed_prefix`, `DataverseSolutionResolver`, `DataverseNamer` |
| `DynamicsCrm.DevKit.Cli\Mcp\Tools\UpsertTableTool.cs` | Refactor — replace private `ResolveSolution()` with `DataverseSolutionResolver` |
| `DynamicsCrm.DevKit.UnitTests\Cli\Mcp\DataverseSolutionResolverTests.cs` | **New** — unit tests |

---

## Flow Diagram — CREATE mode (sau khi plan implemented)

```
upsert_column(entity_name, attribute_name, solution_name, confirmed_prefix, ...)
    │
    ├─ attribute_name có prefix (chứa '_') ?
    │   ├─ YES → extract prefix từ attribute_name.Split('_')[0]
    │   └─ NO  →
    │       ├─ solution_name cung cấp?
    │       │   ├─ YES → DataverseSolutionResolver.ResolveSolution()
    │       │   │         → 1 match → resolvedPrefix ✅
    │       │   │         → 0 match → ERROR ❌
    │       │   │         → >1 match → ERROR ❌
    │       │   └─ NO  → ERROR: attribute_name cần có prefix ❌
    │       └─ rebuild attribute_name = prefix + "_" + namePart
    │
    ├─ confirmed_prefix == "" ?
    │   ├─ YES → DataverseNamer.Resolve(display_name, prefix) → preview
    │   │        → trả về [PrefixConfirmationRequired] (non-error)
    │   └─ NO  → dùng confirmed_prefix
    │
    ├─ DataverseNamer.Resolve(display_name, confirmed_prefix)
    │   → schemaName, logicalName chính xác
    │
    └─ CreateAttributeRequest → publish → return success
```

---

## Notes

1. **`DataverseSolutionResolver` trong Shared**: Cùng lý do với `DataverseNamer` — cần dùng chung. `IOrganizationService` là interface chung, cả CLI và VSIX đều implement.

2. **Scope confirmation**: Chỉ áp dụng cho CREATE mode. UPDATE mode không cần (attribute đã tồn tại với prefix đúng).

3. **`UpsertTableTool` refactor**: Chỉ thay private method `ResolveSolution()` bằng call tới `DataverseSolutionResolver`. Không thay đổi logic hoặc behavior.

4. **`DataverseNamer` đã sẵn sàng**: Chỉ cần thêm `using DynamicsCrm.DevKit.Shared;` vào `UpsertColumnTool.cs`.
