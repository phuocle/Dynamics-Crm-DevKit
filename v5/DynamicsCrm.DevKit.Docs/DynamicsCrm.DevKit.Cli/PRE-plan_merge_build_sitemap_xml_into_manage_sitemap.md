# PRE-TASK: Refactor `BuildSiteMapXmlTool.cs` trước khi merge vào `manage_sitemap`

> **Phạm vi của file này:** CHƯA MERGE gì cả. Chỉ:
> 1. Tạo helper class `SiteMapXmlOperationsHelper.cs` trong folder mới `Mcp/Tools/SiteMap/`
> 2. Refactor `BuildSiteMapXmlTool` để gọi helper thay vì tự xử lý
>
> **Không move tool files** (`BuildSiteMapXmlTool.cs`, `ManageSiteMapTool.cs` giữ nguyên tại `Mcp/Tools/`) — nhất quán với Form PRE và Ribbon PRE.
>
> Sau PRE này: build pass, behavior identical, lần merge chính chỉ cần gọi helper từ `ManageSiteMapTool`.

---

## 0. Bối cảnh

| File hiện tại | LOC | Vấn đề |
|---|---|---|
| `Mcp/Tools/BuildSiteMapXmlTool.cs` | ~817 | Chứa MCP shell + 12 executors + ~10 XML helpers |
| `Mcp/Tools/ManageSiteMapTool.cs` | ~1125 | Chứa MCP shell + backup/validate/publish logic |

→ Khi merge plan chính, ManageSiteMapTool sẽ phình lên ~1943 LOC nếu dán thẳng.
→ Giải pháp: tách XML ops ra helper class, đặt cùng nhau trong subfolder `SiteMap/`.

---

## 1. Mục tiêu

| Chỉ tiêu | Trước | Sau PRE |
|---|---|---|
| Vị trí tool files | `Mcp/Tools/*.cs` (flat) | **Giữ nguyên** `Mcp/Tools/*.cs` — không move |
| `BuildSiteMapXmlTool.cs` LOC | ~817 | **≤ 200 LOC** (chỉ MCP shell + Dataverse calls) |
| `SiteMapXmlOperationsHelper.cs` | không có | **~650 LOC** tại `Mcp/Tools/SiteMap/`, pure XML logic, không có MCP attribute |
| `ManageSiteMapTool.cs` | `Mcp/Tools/` | **Giữ nguyên** `Mcp/Tools/` — không move |
| Namespace tool files | `Mcp.Tools` | **`Mcp.Tools`** — giữ nguyên (McpServerHost.cs không đổi) |
| Namespace helper | (chưa có) | **`Mcp.Tools.SiteMap`** — nhất quán với `Tools.Form` / `Tools.Ribbon` |
| Số tool MCP | 36 | **36** (không xóa tool) |
| Build `/claude-build-cli` | pass | **pass** |
| Behavior `build_sitemap_xml` | — | **Identical** (input → output giống hệt, kể cả exact error text) |

---

## 2. Cấu trúc sau PRE

```
Mcp/Tools/
├── BuildSiteMapXmlTool.cs            ← giữ nguyên vị trí, refactor nội bộ (gọi helper)
├── ManageSiteMapTool.cs              ← không đụng
├── SiteMap/
│   └── SiteMapXmlOperationsHelper.cs ← tạo mới
├── Helper/
│   ├── McpHelper.cs                  ← không đụng
│   └── ... (10 helpers khác)
├── Form/                             ← không đụng
└── Ribbon/                           ← không đụng
```

**Namespace convention:**
- `BuildSiteMapXmlTool.cs` và `ManageSiteMapTool.cs` → namespace `DynamicsCrm.DevKit.Cli.Mcp.Tools` (giữ nguyên — McpServerHost.cs không cần sửa)
- `SiteMapXmlOperationsHelper.cs` → namespace `DynamicsCrm.DevKit.Cli.Mcp.Tools.SiteMap` (nhất quán với `Tools.Form` / `Tools.Ribbon`)
- `BuildSiteMapXmlTool.cs` thêm `using DynamicsCrm.DevKit.Cli.Mcp.Tools.SiteMap;` để gọi helper

---

## 3. Files cần thay đổi

| File | Thao tác |
|------|----------|
| `Mcp/Tools/BuildSiteMapXmlTool.cs` | **Refactor** tại chỗ — xóa XML private methods, thêm LCID resolve + gọi helper. Giữ nguyên vị trí. |
| `Mcp/Tools/SiteMap/SiteMapXmlOperationsHelper.cs` | **Tạo mới** — chứa 12 executors + XML helpers, expose 1 method `ApplyOperations` |

**Không đụng:**
- `Mcp/Tools/ManageSiteMapTool.cs` — giữ nguyên vị trí, không sửa gì
- `Mcp/Tools/Models/StructuredResults.cs`
- `Mcp/McpServerHost.cs`
- `Mcp/Tools/Helper/McpHelper.cs`
- `Mcp/Tools/Form/` và mọi tool file khác
- `README.md`, `AGENTS.md`, `CLAUDE.md`

---

## 4. Thiết kế `SiteMapXmlOperationsHelper.cs`

**Path:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/SiteMap/SiteMapXmlOperationsHelper.cs`

### 4.1. Usings

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Text.RegularExpressions;
using System.Xml.Linq;
```

**Không cần:** `Microsoft.PowerPlatform.Dataverse.Client`, `Microsoft.Xrm.Sdk`, `ModelContextProtocol.*`, `DynamicsCrm.DevKit.Cli.Mcp.Tools.Models`

### 4.2. Namespace và class

```csharp
namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.SiteMap
{
    internal static class SiteMapXmlOperationsHelper
    {
        // ...
    }

    // Used to carry action name back to shell for exact error text: "Error in operation '{action}': ..."
    internal sealed class SiteMapOperationException : Exception
    {
        public string Action { get; }
        public string InnerMessage { get; }
        public SiteMapOperationException(string action, string message)
            : base($"Error in operation '{action}': {message}")
        {
            Action = action;
            InnerMessage = message;
        }
    }
}
```

### 4.3. Public API — duy nhất 1 method

```csharp
/// <summary>
/// Apply all operations to currentSiteMapXml. Returns modified XML + per-op summaries.
/// Throws InvalidOperationException on parse error or per-operation error.
/// IMPORTANT: Caller is responsible for wrapping errors with exact original error text.
/// </summary>
/// <param name="doc">Pre-parsed XDocument (caller parses to preserve exact error text).</param>
/// <param name="lcid">Base language code (e.g. 1033). Caller resolves via McpHelper.GetBaseLanguageCode.</param>
internal static (string ModifiedSiteMapXml, List<string> OperationSummaries)
    ApplyOperations(XDocument doc, List<JsonElement> operations, int lcid)
{
    var summaries = new List<string>();
    foreach (var op in operations)
    {
        if (!op.TryGetProperty("action", out var actionProp))
            throw new InvalidOperationException(
                "Each operation must have an 'action' field. " +
                "Valid actions: add_area, add_group, add_subarea, remove_area, remove_group, " +
                "remove_subarea, update_area, update_group, update_subarea, " +
                "move_area, move_group, move_subarea.");
        var action = actionProp.GetString()?.ToLowerInvariant();
        try
        {
            summaries.Add(DispatchOperation(doc, action, op, lcid));
        }
        catch (InvalidOperationException ex)
        {
            // Wrap with action name so caller can emit: "Error in operation '{action}': ..."
            throw new SiteMapOperationException(action, ex.Message);
        }
    }
    return (doc.ToString(SaveOptions.None), summaries);
}
```

### 4.4. Private methods — copy từ `BuildSiteMapXmlTool.cs`

#### `DispatchOperation` — thêm `int lcid`, đổi thành `private static`

```csharp
private static string DispatchOperation(XDocument doc, string action, JsonElement op, int lcid)
{
    return action switch
    {
        "add_area"       => ExecuteAddArea(doc, op, lcid),
        "add_group"      => ExecuteAddGroup(doc, op, lcid),
        "add_subarea"    => ExecuteAddSubArea(doc, op, lcid),
        "remove_area"    => ExecuteRemoveArea(doc, op),
        "remove_group"   => ExecuteRemoveGroup(doc, op),
        "remove_subarea" => ExecuteRemoveSubArea(doc, op),
        "update_area"    => ExecuteUpdateArea(doc, op, lcid),
        "update_group"   => ExecuteUpdateGroup(doc, op, lcid),
        "update_subarea" => ExecuteUpdateSubArea(doc, op, lcid),
        "move_area"      => ExecuteMoveArea(doc, op),
        "move_group"     => ExecuteMoveGroup(doc, op),
        "move_subarea"   => ExecuteMoveSubArea(doc, op),
        _ => throw new InvalidOperationException(
            $"Unknown action '{action}'. Valid actions: add_area, add_group, add_subarea, " +
            "remove_area, remove_group, remove_subarea, update_area, update_group, update_subarea, " +
            "move_area, move_group, move_subarea")
    };
}
```

#### Operations cần `int lcid` — thêm param, đổi thành `private static`

Copy thân method từ `BuildSiteMapXmlTool.cs`, chỉ thay:
- `BuildTitlesElement(label)` → `BuildTitlesElement(label, lcid)`
- `BuildSubAreaElement(sa)` → `BuildSubAreaElement(sa, lcid)`

| Method | Source lines |
|--------|-------------|
| `ExecuteAddArea(XDocument doc, JsonElement op, int lcid)` | 189–231 |
| `ExecuteAddGroup(XDocument doc, JsonElement op, int lcid)` | 232–263 |
| `ExecuteAddSubArea(XDocument doc, JsonElement op, int lcid)` | 264–290 |
| `ExecuteUpdateArea(XDocument doc, JsonElement op, int lcid)` | 339–361 |
| `ExecuteUpdateGroup(XDocument doc, JsonElement op, int lcid)` | 362–387 |
| `ExecuteUpdateSubArea(XDocument doc, JsonElement op, int lcid)` | 388–430 |

#### Operations KHÔNG cần `lcid` — copy nguyên, đổi thành `private static`

| Method | Source lines |
|--------|-------------|
| `ExecuteRemoveArea(XDocument doc, JsonElement op)` | 291–300 |
| `ExecuteRemoveGroup(XDocument doc, JsonElement op)` | 302–317 |
| `ExecuteRemoveSubArea(XDocument doc, JsonElement op)` | 318–338 |
| `ExecuteMoveArea(XDocument doc, JsonElement op)` | 431–445 |
| `ExecuteMoveGroup(XDocument doc, JsonElement op)` | 446–465 |
| `ExecuteMoveSubArea(XDocument doc, JsonElement op)` | 466–490 |

#### `BuildTitlesElement` — đổi `_serviceClient` thành `int lcid`

```csharp
// Trước: private XElement BuildTitlesElement(string label)
//   McpHelper.GetBaseLanguageCode(_serviceClient).ToString()
// Sau:
private static XElement BuildTitlesElement(string label, int lcid)
{
    return new XElement("Titles",
        new XElement("Title",
            new XAttribute("LCID", lcid.ToString()),
            new XAttribute("Title", label)));
}
```

#### `BuildSubAreaElement` — thêm `int lcid`

```csharp
// Trước: private XElement BuildSubAreaElement(JsonElement sa)
// Sau:
private static XElement BuildSubAreaElement(JsonElement sa, int lcid)
{
    // Copy lines 753–782 nguyên xi
    // Chỉ thay: BuildTitlesElement(saLabel) → BuildTitlesElement(saLabel, lcid)
}
```

#### Helpers thuần — copy nguyên, đổi thành `private static`

| Method | Source lines |
|--------|-------------|
| `InsertElement(XElement, XElement, string, string)` | 784–815 |
| `FindArea(XDocument, string)` | 647–669 |
| `FindGroup(XElement, string)` | 671–690 |
| `FindSubArea(XElement, string)` | 692–717 |
| `GetAreaLabel(XElement)` | 719–724 |
| `GetGroupLabel(XElement)` | 726–731 |
| `GetSubAreaLabel(XElement)` | 733–739 |
| `GetStringProp(JsonElement, string)` | 621–629 |
| `NormalizeBoolProp(JsonElement, string)` | 631–640 |
| `Sanitize(string)` | 642–643 |

---

## 5. `BuildSiteMapXmlTool.cs` sau khi refactor

File sau refactor giữ lại đúng các thành phần cần `_serviceClient`:

```csharp
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.SiteMap;   // ← thêm để gọi helper
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using System.Text;
using System.Text.Json;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools   // ← giữ nguyên — McpServerHost.cs không cần sửa
{
    [McpServerToolType]
    public class BuildSiteMapXmlTool
    {
        private readonly ServiceClient _serviceClient;

        public BuildSiteMapXmlTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "build_sitemap_xml", ...)]   // ← giữ nguyên toàn bộ Description
        public CallToolResult build_sitemap_xml(
            [Description("...")] string app,               // ← giữ nguyên
            [Description("...")] string operations)        // ← giữ nguyên
        {
            // Step 1: Validate inputs (giữ nguyên)
            // Step 2: Resolve app module → (appModuleId, appName, error) (giữ nguyên)
            // Step 3: Retrieve current SiteMap XML (giữ nguyên)
            // Step 4: Parse operations JSON (giữ nguyên)

            // Step 5: Parse XML in shell — preserves exact original error text
            XDocument siteMapDoc;
            try { siteMapDoc = XDocument.Parse(siteMapXml); }
            catch (Exception ex)
            {
                return ErrorResult($"Error: Failed to parse current SiteMap XML: {ex.Message}");
            }

            // Step 6: Resolve LCID — 1 lần, pass xuống helper
            var lcid = McpHelper.GetBaseLanguageCode(_serviceClient);

            // Step 7: Apply operations via helper — per-op error wraps action name exactly like original
            string modifiedXml;
            List<string> opSummaries;
            try
            {
                (modifiedXml, opSummaries) =
                    SiteMapXmlOperationsHelper.ApplyOperations(siteMapDoc, ops, lcid);
            }
            catch (SiteMapOperationException ex)   // action name already embedded by helper
            {
                return ErrorResult($"Error in operation '{ex.Action}': {ex.InnerMessage}");
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: Failed to apply operations: {ex.Message}");
            }

            // Step 7: Save to temp file — dùng modifiedXml (giữ nguyên path + encoding)
            var tempDir = Path.Combine(Directory.GetCurrentDirectory(), ".devkit", "modified_sitemaps");
            Directory.CreateDirectory(tempDir);
            var tempFileName = $"{appModuleId:N}.sitemap";
            var tempFilePath = Path.Combine(tempDir, tempFileName);
            File.WriteAllText(tempFilePath, modifiedXml, Encoding.UTF8);

            // Step 8: Build response (giữ nguyên text format)
            // ...

            return new CallToolResult { ... };  // ← giữ nguyên StructuredContent format
        }

        // Giữ lại 3 methods này (cần _serviceClient):
        private (Guid, string, string) ResolveAppModule(string app) { ... }
        private (string, string) RetrieveCurrentSiteMapXml(Guid appModuleId, string appName) { ... }
        private static CallToolResult ErrorResult(string message) { ... }
    }
}
```

**Methods bị xóa khỏi `BuildSiteMapXmlTool.cs`** (đã chuyển vào helper):

| Method | Lines |
|--------|-------|
| `DispatchOperation` | 164–185 |
| `ExecuteAddArea` | 189–231 |
| `ExecuteAddGroup` | 232–263 |
| `ExecuteAddSubArea` | 264–290 |
| `ExecuteRemoveArea` | 291–300 |
| `ExecuteRemoveGroup` | 302–317 |
| `ExecuteRemoveSubArea` | 318–338 |
| `ExecuteUpdateArea` | 339–361 |
| `ExecuteUpdateGroup` | 362–387 |
| `ExecuteUpdateSubArea` | 388–430 |
| `ExecuteMoveArea` | 431–445 |
| `ExecuteMoveGroup` | 446–465 |
| `ExecuteMoveSubArea` | 466–490 |
| `GetStringProp` | 621–629 |
| `NormalizeBoolProp` | 631–640 |
| `Sanitize` | 642–643 |
| `FindArea` | 647–669 |
| `FindGroup` | 671–690 |
| `FindSubArea` | 692–717 |
| `GetAreaLabel` | 719–724 |
| `GetGroupLabel` | 726–731 |
| `GetSubAreaLabel` | 733–739 |
| `BuildTitlesElement` | 743–749 |
| `BuildSubAreaElement` | 753–782 |
| `InsertElement` | 784–815 |

**Usings bị xóa** sau khi xóa các XML methods:
- `using System.Text.RegularExpressions;` — `Regex` chỉ dùng trong `Sanitize` đã move sang helper
- `using System.Xml.Linq;` — `XDocument` chỉ dùng trong các methods đã move

---

## 6. `ManageSiteMapTool.cs` — không đụng

**Không sửa, không move.** File giữ nguyên tại `Mcp/Tools/ManageSiteMapTool.cs`.

Namespace `DynamicsCrm.DevKit.Cli.Mcp.Tools` giữ nguyên — `McpServerHost.cs` không cần sửa.

---

## 7. Tasks (thứ tự thực hiện)

- [ ] **T1.** Tạo folder `DynamicsCrm.DevKit.Cli/Mcp/Tools/SiteMap/` (chú ý casing `SiteMap` không phải `Sitemap`)
- [ ] **T2.** Đọc toàn bộ `Mcp/Tools/BuildSiteMapXmlTool.cs` (~817 LOC) để nắm đủ logic trước khi copy
- [ ] **T3.** Tạo `Mcp/Tools/SiteMap/SiteMapXmlOperationsHelper.cs`:
  - Namespace: `DynamicsCrm.DevKit.Cli.Mcp.Tools.SiteMap`
  - `internal static class SiteMapXmlOperationsHelper` + `internal sealed class SiteMapOperationException`
  - Method `ApplyOperations(XDocument doc, List<JsonElement> operations, int lcid)` — nhận `XDocument` (shell đã parse); wrap per-op errors thành `SiteMapOperationException`
  - 12 operation executors + 10 XML helpers (xem §4.4) — đổi thành `private static`
  - `BuildTitlesElement(label, lcid)` và `BuildSubAreaElement(sa, lcid)` với `int lcid` param
  - Verify: không có `[McpServerToolType]`, không có `ServiceClient`
- [ ] **T4.** Build sớm: `/claude-build-cli` sau T3 để verify namespace + using trước khi đi tiếp
- [ ] **T5.** Refactor `Mcp/Tools/BuildSiteMapXmlTool.cs` tại chỗ (KHÔNG move):
  - Thêm `using DynamicsCrm.DevKit.Cli.Mcp.Tools.SiteMap;`
  - Parse XML trong shell (try/catch với exact error text gốc: `"Error: Failed to parse current SiteMap XML: ..."`)
  - Resolve LCID + gọi `SiteMapXmlOperationsHelper.ApplyOperations(siteMapDoc, ops, lcid)`
  - Catch `SiteMapOperationException` → `ErrorResult($"Error in operation '{ex.Action}': {ex.InnerMessage}")`
  - Dùng `modifiedXml` từ helper thay vì `siteMapDoc.ToString(...)`
  - Xóa 25 private XML methods (xem bảng §5), xóa usings không còn cần
  - Giữ nguyên: `[McpServerTool]` attributes, `[Description]` strings, response format
- [ ] **T6.** Run `/claude-build-cli` — phải pass không có lỗi
- [ ] **T7.** Restart MCP + smoke test (xem §8)

---

## 8. Acceptance Criteria

- [ ] `Mcp/Tools/SiteMap/` chứa đúng **1 file**: `SiteMapXmlOperationsHelper.cs`
- [ ] `Mcp/Tools/BuildSiteMapXmlTool.cs` và `Mcp/Tools/ManageSiteMapTool.cs` **vẫn tồn tại tại vị trí cũ** (không move)
- [ ] `SiteMapXmlOperationsHelper.cs` namespace là `DynamicsCrm.DevKit.Cli.Mcp.Tools.SiteMap`, **không** có `[McpServerToolType]`
- [ ] Tool files namespace vẫn là `DynamicsCrm.DevKit.Cli.Mcp.Tools` — `McpServerHost.cs` **không thay đổi**
- [ ] Tool count khi list MCP vẫn là **36**
- [ ] `/claude-build-cli` pass, 0 error, không phát sinh warning mới
- [ ] Restart MCP process:
  ```powershell
  Get-Process | Where-Object { $_.CommandLine -like "*devkit*mcp*" } | Stop-Process -Force
  ```
- [ ] Smoke test (manual — báo cáo command + output):
  1. `manage_sitemap(action='list')` → lấy 1 app name làm reference
  2. `build_sitemap_xml(app='<app name>', operations='[{"action":"add_area","label":"DevKit Test Area"}]')`
  3. Kiểm tra: response text chứa `[BuildSiteMapXml]`, có `Operations performed:`, có đường dẫn file `.sitemap` trên đĩa
  4. **KHÔNG** gọi `manage_sitemap(action='update', …)` — chỉ test build, không apply
- [ ] Error text regression check: gọi với XML hỏng → response phải chứa `"Error: Failed to parse current SiteMap XML:"`, gọi với operation lỗi → response phải chứa `"Error in operation '<action>':"`
- [ ] `git diff --stat`: chỉ thấy **2 file** — `Mcp/Tools/BuildSiteMapXmlTool.cs` (shrink) + `Mcp/Tools/SiteMap/SiteMapXmlOperationsHelper.cs` (mới). Không thay đổi ở `ManageSiteMapTool.cs`, `McpServerHost.cs`, `StructuredResults.cs`, hay bất kỳ file `.md` nào

---

## 9. Risks

| Risk | Mitigation |
|------|------------|
| Folder casing sai (`Sitemap` thay vì `SiteMap`) → class name không khớp convention | Tạo folder với đúng casing `SiteMap` ngay T1; grep `SiteMap` để confirm |
| Error text regression: shell không còn emit `"Error in operation '{action}': ..."` với action name | Shell bắt `SiteMapOperationException` và dùng `ex.Action`/`ex.InnerMessage`; verify bằng acceptance test error text |
| Helper parse XML thay vì shell → `"Failed to parse..."` text bị đổi | Shell phải parse XML và catch trước khi gọi helper; helper nhận `XDocument`, không nhận `string` |
| Namespace helper sai → `BuildSiteMapXmlTool` không gọi được helper | Namespace `Tools.SiteMap` trong helper + `using DynamicsCrm.DevKit.Cli.Mcp.Tools.SiteMap;` trong tool file; build T4 sớm để phát hiện |
| Quên truyền `lcid` xuống 1 method nào đó | Sau T3, grep `BuildTitlesElement\|BuildSubAreaElement` trong helper — phải có `lcid` ở tất cả call sites |
| `using` thiếu trong helper → build fail | Build sớm sau T3 (bước T4) để fail nhanh, sửa nhanh |

---

## 10. Out of Scope (đợi plan merge chính)

- Thêm param `operations` cho `manage_sitemap`
- Xóa `BuildSiteMapXmlTool.cs` (chỉ move trong PRE, xóa trong merge chính)
- Xóa `BuildSiteMapXmlResult` khỏi `StructuredResults.cs`
- Cập nhật `Description` của `manage_sitemap`
- Tool count 36 → 35
- Cập nhật `InstructionResources.cs`, `README.md`, `AGENTS.md`, `CLAUDE.md`

> Sau khi PRE pass, plan merge chính chỉ cần: trong `ManageSiteMapTool` thêm param `operations`,
> nếu có thì gọi `SiteMapXmlOperationsHelper.ApplyOperations(...)` → tiếp tục flow update/create hiện có.
> Không cần động vào 12 executors hay 10 helpers nữa.

---

## SAU KHI HOÀN THÀNH PRE-TASK

> **⚠️ Trước khi chạy merge plan:** `plan_merge_build_sitemap_xml_into_manage_sitemap.md` hiện vẫn mô tả cách làm cũ (tạo `SiteMapXmlOperationsHelper.cs` trong `Mcp/Tools/Helper/`). File đó phải được update để reflect kiến trúc mới (helper nằm trong `Mcp/Tools/SiteMap/`, namespace `Tools.SiteMap`) — trước khi giao agent chạy.

Chạy tiếp `plan_merge_build_sitemap_xml_into_manage_sitemap.md`.
