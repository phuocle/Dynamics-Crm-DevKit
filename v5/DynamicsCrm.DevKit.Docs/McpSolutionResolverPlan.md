# MCP Solution Resolver — Standardization Plan

> **✅ COMPLETED** — Implemented on 2026-04-30. Build: 0 errors, 0 warnings.

## Problem Statement

Hiện tại có **6 tools** sử dụng `solution_name` parameter, nhưng logic resolve solution → publisher prefix bị **phân tán** ở nhiều nơi:

| # | Tool | File | Resolve Method | Trả về gì |
|---|------|------|----------------|-----------|
| 1 | `upsert_table` | UpsertTableTool.cs | `DataverseSolutionResolver.ResolveSolution()` (Shared) | `(string Prefix, string UniqueName, string Error)` |
| 2 | `upsert_column` | UpsertColumnTool.cs | `DataverseSolutionResolver.ResolveSolution()` (Shared) | `(string Prefix, string UniqueName, string Error)` |
| 3 | `upsert_relationship` | UpsertRelationshipTool.cs | **Private** `ResolveSolution()` (duplicate code) | `(string Prefix, string UniqueName, string Error)` |
| 4 | `manage_webresource` | ManageWebResourceTool.cs | `DataverseSolutionResolver.ResolveSolution()` (Shared) | `(string Prefix, string UniqueName, string Error)` |
| 5 | `manage_environment_variable` | ManageEnvironmentVariableTool.cs | `DataverseSolutionResolver.ResolveSolution()` (Shared) | `(string Prefix, string UniqueName, string Error)` |
| 6 | `manage_choice` | ManageChoiceTool.cs | **Private** `ResolveSolutionOptionValuePrefix()` | `(int Prefix, string UniqueName, string Error)` — returns `customizationoptionvalueprefix` (int) |

### Vấn đề cụ thể

1. **Code trùng lặp**: `UpsertRelationshipTool` có private `ResolveSolution()` (~60 lines) duplicate gần y hệt `DataverseSolutionResolver.ResolveSolution()` trong Shared project.

2. **Logic resolve chưa đầy đủ**: `DataverseSolutionResolver.ResolveSolution()` hiện chỉ search theo thứ tự:
   - Step 1: Exact match `uniquename`
   - Step 2: Exact match `friendlyname` (display name)  
   - Step 3: Fuzzy `friendlyname LIKE %input%`
   
   **Thiếu**: Không search fuzzy trên `uniquename` (logical name). Nếu user nhập "devkit" và friendlyname không match nhưng uniquename chứa "devkit", hiện tại sẽ trả về "not found".

3. **Thiếu publisher prefix validation**: Khi user nhập `v4_abcdef` (có ký tự `_` → ám chỉ publisher prefix), hiện tại không có logic kiểm tra prefix match. Nếu solution resolve ra prefix `v5_` mà user gửi `v4_`, cần dừng lại và hỏi user confirm.

4. **`ManageChoiceTool` cần riêng `customizationoptionvalueprefix`** (int): Hiện tại có private method `ResolveSolutionOptionValuePrefix()` trả về int prefix. Cần tích hợp vào resolver chung.

5. **Không có publisher value trả về**: Hiện tại chỉ trả về `customizationprefix` (string). Một số tool (ManageChoiceTool) cần cả `customizationoptionvalueprefix` (int). Nên resolver mới trả về cả hai.

---

## Proposed Solution

### [NEW] `DynamicsCrm.DevKit.Cli\Mcp\Tools\Helper\SolutionResolverHelper.cs`

Helper mới thay thế toàn bộ logic resolve hiện tại, đặt trong folder MCP CLI.

#### Class design

```csharp
namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    public static class SolutionResolverHelper
    {
        /// <summary>
        /// Result object chứa đầy đủ thông tin publisher
        /// </summary>
        public class SolutionResolveResult
        {
            public string PublisherPrefix { get; set; }          // customizationprefix (e.g. "v4")
            public int PublisherOptionValuePrefix { get; set; }   // customizationoptionvalueprefix (e.g. 10000)
            public string SolutionUniqueName { get; set; }        // unique name of the matched solution
            public string SolutionDisplayName { get; set; }       // friendly name
            public string Error { get; set; }                     // null = success
            public bool IsAmbiguous { get; set; }                 // true = multiple matches
            public string AmbiguousMessage { get; set; }          // disambiguation list for AI
        }

        /// <summary>
        /// Resolve solution từ user input theo quy tắc chuẩn hóa.
        /// </summary>
        public static SolutionResolveResult Resolve(
            IOrganizationService service, string solutionInput)
        { ... }
    }
}
```

### Resolution Algorithm (Chi tiết)

```
Input: solutionInput = "abcdef" (hoặc "v4_abcdef")

Step 0: Detect prefix hint
  - Nếu solutionInput chứa '_' → tách: userPrefix = "v4", searchTerm = "v4_abcdef"
  - Nếu không có '_' → userPrefix = null, searchTerm = solutionInput
  - Lưu ý: searchTerm luôn là full input, userPrefix chỉ dùng để validate sau

Step 1: Search by Display Name (friendlyname)
  1a. Exact match: friendlyname = solutionInput
      → count == 1 → resolve publisher → goto Step 4
  1b. Fuzzy contains: friendlyname LIKE %solutionInput%
      → count == 1 → resolve publisher → goto Step 4
      → count > 1 → set IsAmbiguous=true, list candidates → STOP
  1c. count == 0 → continue to Step 2

Step 2: Search by Logical Name (uniquename) 
  2a. Exact match: uniquename = solutionInput
      → count == 1 → resolve publisher → goto Step 4
  2b. Fuzzy contains: uniquename LIKE %solutionInput%
      → count == 1 → resolve publisher → goto Step 4
      → count > 1 → set IsAmbiguous=true, list candidates → STOP
  2c. count == 0 → goto Step 3

Step 3: Cả display name và logical name đều = 0
  → Error: "Solution '{solutionInput}' not found. Please provide a valid solution name."
  → STOP

Step 4: Publisher Prefix Validation
  - Resolve publisher → get customizationprefix, customizationoptionvalueprefix
  - Nếu userPrefix != null && userPrefix != resolvedPrefix (case-insensitive):
      → Return warning: "User-provided prefix '{userPrefix}' differs from solution publisher 
         prefix '{resolvedPrefix}'. Confirm: use '{resolvedPrefix}' or check if you meant 
         a different solution."
      → Set Error với nội dung confirm (IsAmbiguous = false)
  - Nếu match hoặc userPrefix == null → return success
```

---

## Proposed Changes

### [DELETE] `DynamicsCrm.DevKit.Shared\DataverseSolutionResolver.cs`

Xóa file này. Hiện tại chỉ có MCP tools sử dụng (confirmed: 4 call sites), không có non-MCP component nào dùng. Toàn bộ logic sẽ được thay thế bằng `SolutionResolverHelper`.

---

### [NEW] `DynamicsCrm.DevKit.Cli\Mcp\Tools\Helper\SolutionResolverHelper.cs`

Tạo helper mới với:
- `SolutionResolveResult` class — chứa đầy đủ: `PublisherPrefix`, `PublisherOptionValuePrefix`, `SolutionUniqueName`, `SolutionDisplayName`, `Error`, `IsAmbiguous`, `AmbiguousMessage`
- `Resolve()` method — implement algorithm ở trên (4 steps)
- Private `GetPublisherInfo()` — fetch cả `customizationprefix` (string) và `customizationoptionvalueprefix` (int) trong cùng 1 query

---

### [MODIFY] `UpsertTableTool.cs`

- Thay `DataverseSolutionResolver.ResolveSolution()` → `SolutionResolverHelper.Resolve()`
- Xóa `using DynamicsCrm.DevKit.Shared` nếu không dùng gì khác
- Adapt result: `result.PublisherPrefix` thay cho `solPrefix`, `result.SolutionUniqueName` thay cho `uniqueName`

---

### [MODIFY] `UpsertColumnTool.cs`

- Tương tự UpsertTableTool — thay `DataverseSolutionResolver.ResolveSolution()` → `SolutionResolverHelper.Resolve()`
- Xóa using Shared nếu không cần

---

### [MODIFY] `UpsertRelationshipTool.cs`

- **Xóa** private `ResolveSolution()` method (~lines 790–852)
- **Xóa** private `GetPrefixFromSolution()` method (~lines 854–867)
- Thay bằng `SolutionResolverHelper.Resolve()` tại 3 call sites (HandleCreate1N, HandleCreateNN, HandleAddTarget)
- Giảm ~80 lines duplicate code

---

### [MODIFY] `ManageWebResourceTool.cs`

- Thay `DataverseSolutionResolver.ResolveSolution()` → `SolutionResolverHelper.Resolve()`
- Xóa `using DynamicsCrm.DevKit.Shared`

---

### [MODIFY] `ManageEnvironmentVariableTool.cs`

- Thay `DataverseSolutionResolver.ResolveSolution()` → `SolutionResolverHelper.Resolve()`
- Xóa `using DynamicsCrm.DevKit.Shared`

---

### [MODIFY] `ManageChoiceTool.cs`

- **Xóa** private `ResolveSolutionOptionValuePrefix()` method (~lines 435–486)
- Thay bằng `SolutionResolverHelper.Resolve()` → dùng `result.PublisherOptionValuePrefix`
- Giảm ~50 lines duplicate code

---

### File không thay đổi

| File | Lý do |
|------|-------|
| `GetSolutionComponentsTool.cs` | Dùng `solution_name` nhưng chỉ để filter, không resolve publisher prefix. Có resolve logic riêng cho fuzzy match solution name → display name. Không cần refactor. |
| `GetCustomApisTool.cs` | Có `ResolveSolutionName()` nhưng đây là reverse lookup (GUID → name), không liên quan. |

---

## Implementation Steps

### Phase 1: Tạo helper mới

- [ ] Tạo file `DynamicsCrm.DevKit.Cli\Mcp\Tools\Helper\SolutionResolverHelper.cs`
- [ ] Implement class `SolutionResolveResult` 
- [ ] Implement method `Resolve()` với algorithm 4 steps
- [ ] Implement private `GetPublisherInfo()` trả về cả `customizationprefix` và `customizationoptionvalueprefix`

### Phase 2: Refactor 6 tools

- [ ] `UpsertTableTool.cs` — thay `DataverseSolutionResolver` → `SolutionResolverHelper`
- [ ] `UpsertColumnTool.cs` — thay `DataverseSolutionResolver` → `SolutionResolverHelper`
- [ ] `UpsertRelationshipTool.cs` — xóa private `ResolveSolution()` + `GetPrefixFromSolution()`, thay bằng `SolutionResolverHelper`
- [ ] `ManageWebResourceTool.cs` — thay `DataverseSolutionResolver` → `SolutionResolverHelper`
- [ ] `ManageEnvironmentVariableTool.cs` — thay `DataverseSolutionResolver` → `SolutionResolverHelper`
- [ ] `ManageChoiceTool.cs` — xóa private `ResolveSolutionOptionValuePrefix()`, thay bằng `SolutionResolverHelper`, dùng `.PublisherOptionValuePrefix`

### Phase 3: Cleanup

- [ ] Xóa `DynamicsCrm.DevKit.Shared\DataverseSolutionResolver.cs`
- [ ] Xóa `using DynamicsCrm.DevKit.Shared` trong các tool nếu không còn reference nào khác

### Phase 4: Verify

- [ ] Build CLI: `/anti-build-cli`
- [ ] Kill MCP process để restart
- [ ] Test thực tế với các prompt:
  - Prompt "DevKitV4" → match display name → resolve prefix
  - Prompt "v4_mysolution" → detect user prefix `v4`, check match
  - Prompt "nonexistent" → error not found
  - Prompt "dev" → multiple matches → disambiguation

---

## Publisher Prefix Validation Flow — Examples

```
User prompt: solution_name = "v4_MySolution"

1. Detect '_' → userPrefix = "v4", fullInput = "v4_MySolution"
2. Search friendlyname: exact "v4_MySolution" → 0 matches
3. Search friendlyname LIKE "%v4_MySolution%" → 0 matches
4. Search uniquename: exact "v4_MySolution" → 1 match! 
5. Resolve publisher → customizationprefix = "v4"
6. userPrefix ("v4") == resolvedPrefix ("v4") → ✅ OK
7. Return success

---

User prompt: solution_name = "v4_MySolution"
(nhưng publisher prefix thực tế là "v5")

1-5. Tìm được solution, resolve publisher → prefix = "v5"
6. userPrefix ("v4") != resolvedPrefix ("v5")
7. Return: "[PrefixMismatch] User provided prefix 'v4' but solution publisher 
   uses 'v5'. Confirm which prefix to use."
```
