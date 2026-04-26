# PRE-TASK: Refactor `BuildRibbonXmlTool.cs` trước khi merge vào `manage_ribbon`

## Mục đích

File `BuildRibbonXmlTool.cs` hiện có **2409 dòng**. Nếu merge thẳng logic vào
`ManageRibbonTool.cs` (1028 dòng), file kết quả sẽ **~3400+ dòng** — vượt quá
giới hạn context window đáng tin cậy của AI và gây ra các lỗi copy/paste.

**Phải chạy task này TRƯỚC khi chạy `plan_merge_build_ribbon_into_manage_ribbon.md`.**

---

## Chiến lược tách file

Tách toàn bộ logic trong `BuildRibbonXmlTool.cs` thành **5 file helper nội bộ**
(không expose MCP, không `[McpServerToolType]`). Sau đó `ManageRibbonTool.cs` sẽ
gọi các helper này thay vì inline toàn bộ code.

| File | Trước | Sau |
|------|-------|-----|
| `BuildRibbonXmlTool.cs` | 2409 dòng | **≤ 120 dòng** |
| `ManageRibbonTool.cs` | 1028 dòng | 1028 dòng (chưa thay đổi) |
| `Ribbon/RibbonXmlHelpers.cs` | (mới) | ~150 dòng |
| `Ribbon/RibbonValidation.cs` | (mới) | ~150 dòng |
| `Ribbon/RibbonSolutionFetcher.cs` | (mới) | ~80 dòng |
| `Ribbon/RibbonButtonOperations.cs` | (mới) | ~550 dòng |
| `Ribbon/RibbonFlyoutOperations.cs` | (mới) | ~700 dòng |

Tổng: **~1750 dòng** phân bố vào **6 file** (shell thu gọn + 5 helper) thay vì **1 file 2409 dòng**.

---

## File cần tạo

### File 1: `RibbonXmlHelpers.cs` (~150 dòng)

**Path:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/Ribbon/RibbonXmlHelpers.cs`

**Nội dung:** Tất cả static helper methods thuần XML/string — KHÔNG phụ thuộc
`ServiceClient`:

| Method | Dòng hiện tại |
|--------|--------------|
| `GetOrCreateElement(XElement, string)` | ~2306 |
| `RemoveById(XElement, string, string, string)` | ~2317 |
| `RemoveCustomActionByInnerElementId(XElement, string)` | ~2327 |
| `RemoveByIdInChild(XElement, string, string, string)` | ~2348 |
| `SortChildrenById(XElement, string)` | ~2338 |
| `GenerateSlug(string)` | ~2358 |
| `GetJsonString(JsonElement, string)` | ~2374 |
| `GetJsonBool(JsonElement, string, bool)` | ~2381 |
| `GetJsonInt(JsonElement, string, int)` | ~2391 |
| `EscapeXml(string)` | ~2398 |
| `GetEmptyRibbonDiffXml()` | ~456 |
| `CountExistingButtons(XDocument)` | ~475 |
| `BuildButtonElement(...)` | ~2262 |
| `SurfaceLocationMap` (static readonly dict) | — |
| `UpsertLocLabel(XElement, int lcid, string label)` | — |

**Khai báo class:**
```csharp
namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Ribbon
{
    internal static class RibbonXmlHelpers { ... }
}
```

> **`UpsertLocLabel`:** Nếu hiện tại nhận `ServiceClient` để gọi `McpHelper.GetBaseLanguageCode`, đổi signature thành nhận `int lcid` — caller resolve lcid 1 lần và truyền xuống. Giữ method `internal static`.

> **`SurfaceLocationMap`:** Đặt trong file này vì nhiều method dùng nó nhất. Sau khi tách, grep `SurfaceLocationMap` để confirm không còn reference trong `BuildRibbonXmlTool.cs`.

---

### File 2: `RibbonValidation.cs` (~150 dòng)

**Path:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/Ribbon/RibbonValidation.cs`

**Nội dung:** Validation logic — phụ thuộc `ServiceClient` cho entity/webresource
check, và XSD schema cache:

| Method | Dòng hiện tại |
|--------|--------------|
| `ValidateEntityExists(string)` | ~271 |
| `ValidateWebResourceExists(string)` | ~294 |
| `ValidateRibbonXml(string)` | ~323 |
| `GetRibbonSchemaSet()` | ~370 |
| `IsOobButton(string, string)` | ~2211 |
| `DetectRibbonFilter(string)` | ~2245 |

**Khai báo class:**
```csharp
namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Ribbon
{
    internal sealed class RibbonValidation
    {
        private readonly ServiceClient _serviceClient;
        private static XmlSchemaSet _cachedSchemaSet;      // giữ nguyên static
        private static readonly object _schemaLock = new(); // giữ nguyên static

        public RibbonValidation(ServiceClient serviceClient) { ... }
        public string ValidateEntityExists(string entityName) { ... }
        public string ValidateWebResourceExists(string webResourceName) { ... }
        public static (List<string> Errors, List<string> Warnings) ValidateRibbonXml(string ribbonXml) { ... }
        private static XmlSchemaSet GetRibbonSchemaSet() { ... }
        public bool IsOobButton(string entityName, string buttonId) { ... }
        // Return type là SDK enum Microsoft.Crm.Sdk.Messages.RibbonLocationFilters — KHÔNG tạo enum local cùng tên
        public static Microsoft.Crm.Sdk.Messages.RibbonLocationFilters DetectRibbonFilter(string buttonId) { ... }
    }
}
```

> **`RibbonLocationFilters`:** Đây là SDK enum trong `Microsoft.Crm.Sdk.Messages` — **KHÔNG tạo file local `RibbonLocationFilters.cs`** vì sẽ shadow SDK type và gây lỗi type-incompatibility khi gán vào `RetrieveEntityRibbonRequest.RibbonLocationFilter`. Giữ `using Microsoft.Crm.Sdk.Messages;` trong `RibbonValidation.cs`.

---

### File 3: `RibbonSolutionFetcher.cs` (~80 dòng)

**Path:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/Ribbon/RibbonSolutionFetcher.cs`

**Nội dung:** Fetch/parse RibbonDiffXml từ solution — phụ thuộc `ServiceClient`:

| Method | Dòng hiện tại |
|--------|--------------|
| `FetchExistingRibbonDiffXml(string)` | ~409 |

**Khai báo class:**
```csharp
namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Ribbon
{
    internal sealed class RibbonSolutionFetcher
    {
        private readonly ServiceClient _serviceClient;
        private const string SOLUTION_NAME = "devkit_ribbon";

        public RibbonSolutionFetcher(ServiceClient serviceClient) { ... }
        public string FetchExistingRibbonDiffXml(string entityName) { ... }
    }
}
```

---

### File 4: `RibbonButtonOperations.cs` (~550 dòng)

**Path:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/Ribbon/RibbonButtonOperations.cs`

**Nội dung:** 4 operations cho button đơn giản — phụ thuộc `RibbonValidation` và
`RibbonXmlHelpers`:

| Method | Dòng hiện tại |
|--------|--------------|
| `ExecuteAddButton(XDocument, string, JsonElement)` | ~484 |
| `ExecuteUpdateButton(XDocument, string, JsonElement)` | ~1895 |
| `ExecuteHideButton(XDocument, string, JsonElement)` | ~2052 |
| `ExecuteShowButton(XDocument, string, JsonElement)` | ~2137 |

**Khai báo class:**
```csharp
namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Ribbon
{
    internal sealed class RibbonButtonOperations
    {
        private readonly RibbonValidation _validation;
        private readonly int _lcid;

        // lcid resolved once in tool shell via McpHelper.GetBaseLanguageCode(_serviceClient)
        public RibbonButtonOperations(RibbonValidation validation, int lcid)
        {
            _validation = validation;
            _lcid = lcid;
        }

        public (string error, string summary) ExecuteAddButton(...) { ... }
        public (string error, string summary) ExecuteUpdateButton(...) { ... }
        public (string error, string summary) ExecuteHideButton(...) { ... }
        public (string error, string summary) ExecuteShowButton(...) { ... }
        // All methods call RibbonXmlHelpers.UpsertLocLabel(root, _lcid, locLabelId, description)
    }
}
```

---

### File 5: `RibbonFlyoutOperations.cs` (~700 dòng)

**Path:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/Ribbon/RibbonFlyoutOperations.cs`

**Nội dung:** 6 operations cho split/flyout — phụ thuộc `RibbonValidation` và
`RibbonXmlHelpers`:

| Method | Dòng hiện tại |
|--------|--------------|
| `ExecuteAddSplitButton(XDocument, string, JsonElement)` | ~629 |
| `ExecuteUpdateSplitButton(XDocument, string, JsonElement)` | ~960 |
| `ExecuteAddFlyoutStatic(XDocument, string, JsonElement)` | ~1234 |
| `ExecuteUpdateFlyoutStatic(XDocument, string, JsonElement)` | ~1523 |
| `ExecuteHideFlyoutItem(XDocument, string, JsonElement)` | ~1758 |
| `ExecuteShowFlyoutItem(XDocument, string, JsonElement)` | ~1797 |
| `ResolveFlyoutItemIds(XDocument, string, JsonElement)` | ~1837 |

**Khai báo class:**
```csharp
namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Ribbon
{
    internal sealed class RibbonFlyoutOperations
    {
        private readonly RibbonValidation _validation;
        private readonly int _lcid;

        // lcid resolved once in tool shell via McpHelper.GetBaseLanguageCode(_serviceClient)
        public RibbonFlyoutOperations(RibbonValidation validation, int lcid)
        {
            _validation = validation;
            _lcid = lcid;
        }

        public (string error, string summary) ExecuteAddSplitButton(...) { ... }
        public (string error, string summary) ExecuteUpdateSplitButton(...) { ... }
        public (string error, string summary) ExecuteAddFlyoutStatic(...) { ... }
        public (string error, string summary) ExecuteUpdateFlyoutStatic(...) { ... }
        public (string error, string summary) ExecuteHideFlyoutItem(...) { ... }
        public (string error, string summary) ExecuteShowFlyoutItem(...) { ... }
        private (...) ResolveFlyoutItemIds(...) { ... }
        // All label-writing calls use RibbonXmlHelpers.UpsertLocLabel(root, _lcid, locLabelId, description)
    }
}
```

---

## Tạo folder mới

```
DynamicsCrm.DevKit.Cli/Mcp/Tools/Ribbon/
    RibbonXmlHelpers.cs
    RibbonValidation.cs
    RibbonSolutionFetcher.cs
    RibbonButtonOperations.cs
    RibbonFlyoutOperations.cs
```

> **Không tạo `RibbonLocationFilters.cs`** — `RibbonLocationFilters` là SDK enum từ `Microsoft.Crm.Sdk.Messages`, không phải type nội bộ. Tạo enum local cùng tên sẽ shadow SDK type và gây lỗi compile/runtime.

---

## Cập nhật `BuildRibbonXmlTool.cs` sau khi tách

Sau khi tách xong, `BuildRibbonXmlTool.cs` sẽ được **thu gọn còn ~120 dòng**,
chỉ chứa:

1. `[McpServerToolType]` class với constructor
2. Method `build_ribbon_xml(entity_name, operations)` — MCP entry point
3. Khởi tạo các helper classes và gọi chúng:

```csharp
public CallToolResult build_ribbon_xml(string entity_name, string operations)
{
    // Validate inputs
    var validation = new RibbonValidation(_serviceClient);
    var fetcher = new RibbonSolutionFetcher(_serviceClient);
    // Resolve LCID once here — passed to operation classes so helpers stay ServiceClient-free
    var lcid = McpHelper.GetBaseLanguageCode(_serviceClient);
    var btnOps = new RibbonButtonOperations(validation, lcid);
    var flyoutOps = new RibbonFlyoutOperations(validation, lcid);

    // ... validate entity, parse ops, call helpers, build result ...
}
```

Mục tiêu: `BuildRibbonXmlTool.cs` **≤ 120 dòng** sau khi tách.

---

## Cập nhật `ManageRibbonTool.cs`

Hiện tại `ManageRibbonTool.cs` KHÔNG cần thay đổi gì trong bước PRE này. File này
chỉ thay đổi trong bước MERGE chính (xem `plan_merge_build_ribbon_into_manage_ribbon.md`).

---

## Files KHÔNG đụng

| File | Lý do |
|------|-------|
| `Mcp/Tools/ManageRibbonTool.cs` | Chỉ merge ở plan sau |
| `Mcp/Tools/Models/StructuredResults.cs` | `BuildRibbonXmlResult` giữ nguyên; chưa thêm field |
| `Mcp/McpServerHost.cs` | `BuildRibbonXmlTool` vẫn đăng ký, vẫn `"standard"` |
| `README.md`, `AGENTS.md`, `CLAUDE.md`, `.claude/rules/core-rule.md` | Tool count vẫn 36 |

---

## Quy tắc khi di chuyển code

1. **Không thay đổi logic** — chỉ di chuyển, không refactor behavior
2. **Giữ nguyên `SurfaceLocationMap`** trong `RibbonXmlHelpers.cs` (static readonly dict); grep confirm sau khi tách
3. **`UpsertLocLabel`** → đưa vào `RibbonXmlHelpers.cs`, signature: `internal static void UpsertLocLabel(XElement root, int lcid, string locLabelId, string description)`. Tool shell resolve `lcid` 1 lần rồi truyền vào constructor `RibbonButtonOperations(validation, lcid)` và `RibbonFlyoutOperations(validation, lcid)`; operation classes gọi `RibbonXmlHelpers.UpsertLocLabel(root, _lcid, ...)` thay vì gọi `_serviceClient` trực tiếp.
4. **`_cachedSchemaSet` và `_schemaLock`** → static fields trong `RibbonValidation.cs` — KHÔNG move sang class khác
5. **Namespace:** `DynamicsCrm.DevKit.Cli.Mcp.Tools.Ribbon` cho tất cả file mới
6. **Không thêm `[McpServerToolType]`** vào bất kỳ file nào trong folder `Ribbon/`

---

## Thứ tự thực hiện

```
Bước 1: Tạo RibbonXmlHelpers.cs       (static helpers, không dependency)
Bước 2: Tạo RibbonValidation.cs       (phụ thuộc ServiceClient + Assembly)
Bước 3: Tạo RibbonSolutionFetcher.cs  (phụ thuộc ServiceClient)
Bước 4: Tạo RibbonButtonOperations.cs (phụ thuộc RibbonValidation + RibbonXmlHelpers)
Bước 5: Tạo RibbonFlyoutOperations.cs (phụ thuộc RibbonValidation + RibbonXmlHelpers)
Bước 6: Thu gọn BuildRibbonXmlTool.cs (≤ 120 dòng)
Bước 7: /claude-build-cli + kiểm tra 0 error, 0 warning mới
Bước 8: Restart MCP + smoke test
```

> Build sớm — fail nhanh sửa nhanh. Sau bước 1 có thể `/claude-build-cli` để chắc namespace + using OK trước khi đi tiếp.

---

## Kiểm tra sau khi tách

- [ ] `BuildRibbonXmlTool.cs` còn ≤ 120 dòng
- [ ] Đúng 5 file helper trong `Mcp/Tools/Ribbon/` đã có đủ nội dung, đúng namespace `DynamicsCrm.DevKit.Cli.Mcp.Tools.Ribbon` (không có `RibbonLocationFilters.cs` — đây là SDK type)
- [ ] Không có file nào trong `Ribbon/` mang `[McpServerToolType]`
- [ ] Không có circular dependency giữa các helper
- [ ] `UpsertLocLabel` signature là `(XElement root, int lcid, string locLabelId, string description)` — không còn nhận `ServiceClient`
- [ ] `RibbonButtonOperations` và `RibbonFlyoutOperations` nhận `int lcid` qua constructor
- [ ] `_cachedSchemaSet` / `_schemaLock` vẫn là `private static` trong `RibbonValidation`
- [ ] Grep `RibbonLocationFilters` trong `Ribbon/` — chỉ có `using Microsoft.Crm.Sdk.Messages;`, không có local enum definition
- [ ] Build pass: `/claude-build-cli` (0 error, không phát sinh warning mới)
- [ ] Restart MCP process:
  ```powershell
  Get-Process | Where-Object { $_.CommandLine -like "*devkit*mcp*" } | Stop-Process -Force
  ```
- [ ] Smoke test (manual — báo cáo command + output):
  1. `manage_ribbon(action='buttons', entity_name='account')` → lấy 1 button id làm reference
  2. `build_ribbon_xml(entity_name='account', operations='[{"action":"add_button","surface":"form","label":"DevKit Test","library":"new_/test.js","function":"F.test","enable_library":"new_/test.js","enable_function":"F.isEnabled"}]')`
  3. Kiểm tra: response text chứa `[BuildRibbonXml]`, có `Operations performed:`, có đường dẫn file `.ribbonxml` trên đĩa
  4. **KHÔNG** gọi `manage_ribbon(action='update', …)` — chỉ test build, không apply
- [ ] Tool count khi list MCP vẫn là **36**
- [ ] `git diff --stat`: chỉ thấy 6 file thay đổi — `BuildRibbonXmlTool.cs` shrink + 5 file mới trong `Ribbon/`. **Không** thay đổi ở `ManageRibbonTool.cs`, `McpServerHost.cs`, `StructuredResults.cs`, hay file `.md` nào

---

## Risks

| Risk | Mitigation |
|------|------------|
| Đổi behavior do quên copy 1 đoạn | Diff từng executor side-by-side; không thêm/sửa logic, chỉ di dời |
| `_cachedSchemaSet` / `_schemaLock` static state mất khi tách class | Giữ cả 2 là `private static` field trong `RibbonValidation` — không di chuyển sang class khác |
| `UpsertLocLabel` mất `ServiceClient` khi trở thành static trong `RibbonXmlHelpers` | Đổi signature thành `(XElement root, int lcid, string locLabelId, string description)`; tool shell resolve lcid 1 lần, truyền vào constructor `RibbonButtonOperations(validation, lcid)` và `RibbonFlyoutOperations(validation, lcid)` |
| LCID không được thread xuống operation class → `UpsertLocLabel` thiếu lcid | Kiểm tra: constructor của cả 2 operation classes đều nhận `int lcid`; grep `UpsertLocLabel` trong `RibbonButtonOperations` và `RibbonFlyoutOperations` — phải gọi `_lcid`, không gọi `_serviceClient` |
| `SurfaceLocationMap` placement sai → compile error | Đặt trong `RibbonXmlHelpers.cs`; sau khi tách grep `SurfaceLocationMap` để confirm không còn reference thừa |
| Tạo nhầm enum local `RibbonLocationFilters` → shadow SDK type, build hoặc runtime fail | `RibbonLocationFilters` là SDK enum trong `Microsoft.Crm.Sdk.Messages` — **KHÔNG tạo file local cùng tên**; giữ `using Microsoft.Crm.Sdk.Messages;` trong `RibbonValidation.cs` |
| Quên copy `using` → build fail | Khi tạo file mới, dán nguyên block `using` của `BuildRibbonXmlTool.cs` rồi mới trim — build sớm để fail nhanh |
| Circular dependency giữa các helper | Đồ thị: `Helpers`/`LocationFilters` (lá) ← `Validation` ← `ButtonOps`/`FlyoutOps` ← shell; `Fetcher` ← shell. Không có chu trình. |
| Encoding/line-ending khác giữa file mới và file gốc | Save UTF-8 (no BOM), CRLF (Windows) — khớp `.editorconfig` |

---

## SAU KHI HOÀN THÀNH PRE-TASK

> **⚠️ Trước khi chạy merge plan:** `plan_merge_build_ribbon_into_manage_ribbon.md` hiện vẫn mô tả cách làm cũ (inline code trực tiếp vào `ManageRibbonTool`). File đó phải được update để gọi helper classes từ `Ribbon/` thay vì copy code — trước khi giao agent chạy.

Chạy tiếp `plan_merge_build_ribbon_into_manage_ribbon.md`:

- `ManageRibbonTool.cs` sẽ khởi tạo các helper classes từ `Ribbon/` thay vì
  copy toàn bộ code vào
- Kết quả: `ManageRibbonTool.cs` sau merge sẽ chỉ **~200 dòng tăng thêm**
  (thêm param `operations`, thêm routing logic), tổng ~1250 dòng — hoàn toàn
  trong tầm kiểm soát
- `BuildRibbonXmlTool.cs` → xoá file. `BuildRibbonXmlResult` → xoá. `McpServerHost.cs` → xoá entry. Tool count 36 → 35.

---

## Acceptance Criteria

- [ ] Folder `Mcp/Tools/Ribbon/` tồn tại, chứa đúng **5 file** helper với đúng namespace `DynamicsCrm.DevKit.Cli.Mcp.Tools.Ribbon` (không có `RibbonLocationFilters.cs`)
- [ ] `BuildRibbonXmlTool.cs` ≤ 120 LOC (gốc 2409)
- [ ] `/claude-build-cli` pass, 0 error, không phát sinh warning mới
- [ ] `build_ribbon_xml` smoke test trả output cùng cấu trúc text + đúng đường dẫn temp file
- [ ] Tool count vẫn = 36
- [ ] `git diff --stat` chỉ thấy **6 file** (`BuildRibbonXmlTool.cs` shrink + 5 file mới trong `Ribbon/`); KHÔNG đụng `ManageRibbonTool.cs` hay file `.md` nào
