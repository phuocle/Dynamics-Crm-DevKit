# Plan: Merge `build_sitemap_xml` into `manage_sitemap`

## Mục tiêu

Xóa hoàn toàn tool `build_sitemap_xml` (MCP-exposed), tích hợp toàn bộ logic vào `manage_sitemap`.
Tool count: **36 → 35** (build_form_xml chưa merge, sẽ xử lý riêng).

> **Lưu ý:** Plan này độc lập với `plan_merge_build_form_xml_into_manage_form.md` — có thể làm song song hoặc tuần tự đều OK.

---

## Vấn đề hiện tại

| Bước | Tool | Tác dụng |
|------|------|----------|
| 1 | `build_sitemap_xml` | Resolve app, retrieve current SiteMap XML, apply ops, save ra file temp `.devkit/modified_sitemaps/{appModuleId}.sitemap` |
| 2 | `manage_sitemap(action='update', sitemapxml=<path>)` | Đọc file đó, validate XSD, backup, import vào Dataverse, publish |

→ **2 tool calls + 1 file tạm** → giống pattern `build_form_xml` / `build_ribbon_xml`. AI agent dễ "quên" gọi bước 2.

`build_sitemap_xml` chỉ là **sub-tool** — không bao giờ dùng độc lập.

---

## Giải pháp

Gộp thành **1 tool call duy nhất**:

```
manage_sitemap(action='update', app='Sales Hub', operations=[...])
```

Tool `manage_sitemap` sẽ:
1. Resolve app name/GUID → `appModuleId`
2. Retrieve current SiteMap XML
3. Apply operations (inline, dưới dạng private methods)
4. Backup → Validate XSD → Update → Publish

**Không** cần file tạm, **không** cần tool call trung gian.

---

## Thay đổi cần thực hiện

### 1. `ManageSiteMapTool.cs`

**Thêm parameter `operations`** vào tool signature:

```csharp
[Description(
    "For 'update'/'create' (recommended): JSON array of SiteMap operations from build-sitemap-xml schema (auto-builds + imports). " +
    "Read schema://sitemapxml for format.")]
string operations = "",
```

**Cập nhật logic `action='update'` và `action='create'`:**

Có 2 chế độ (mutually exclusive):

| Input | Hành động |
|-------|-----------|
| `operations` (JSON array) | Build SiteMap XML inline từ operations → backup → validate → update → publish |
| `sitemapxml` (raw XML string hoặc backup file path) | Giữ nguyên flow cũ — chỉ dùng cho `undo` hoặc khi user có sẵn XML |
| Cả hai empty (cho update/create) | Báo lỗi: "Provide 'operations' (recommended) or 'sitemapxml'." |
| Cả hai có giá trị | Báo lỗi: "Provide either 'operations' or 'sitemapxml', not both." |

**Logic mới khi `operations` được cung cấp (cho `update`):**

```
1. Resolve app → appModuleId, appName
2. Retrieve current SiteMap XML từ Dataverse (via appmodulecomponent → sitemap)
3. Parse operations JSON → List<JsonElement>
4. Parse current SiteMap XML thành XDocument
5. Apply mỗi op → switch theo action (12 actions: add_area/group/subarea, remove_*, update_*, move_*)
6. Serialize lại modifiedSiteMapXml
7. → tiếp tục flow cũ: backup → validate XSD → update → publish
```

**Logic mới khi `operations` được cung cấp cho `create`:**

```
1. Resolve app → appModuleId, appName
2. Build BASE empty SiteMap XML (<SiteMap><SiteMap>...</SiteMap></SiteMap> shell)
3. Parse operations → apply lên base XML
4. Serialize → validate XSD → create sitemap → link vào appmodulecomponent → publish
```

**Chuyển toàn bộ private methods từ `BuildSiteMapXmlTool` sang `ManageSiteMapTool`** (hoặc tách helper class):

- 12 operation executors:
  - `ExecuteAddArea`, `ExecuteAddGroup`, `ExecuteAddSubArea`
  - `ExecuteRemoveArea`, `ExecuteRemoveGroup`, `ExecuteRemoveSubArea`
  - `ExecuteUpdateArea`, `ExecuteUpdateGroup`, `ExecuteUpdateSubArea`
  - `ExecuteMoveArea`, `ExecuteMoveGroup`, `ExecuteMoveSubArea`
- `DispatchOperation` (switch theo action)
- XML helpers: `BuildAreaElement`, `BuildGroupElement`, `BuildSubAreaElement`
- Navigation: `FindArea`, `FindGroup`, `FindSubArea`, `InsertElement` (theo position)
- Naming: `Sanitize`, `AutoAreaId`, `AutoGroupId`, `AutoSubAreaId`
- JSON helpers: `GetStringProp`, `GetBoolProp`, etc.

> **Đề xuất:** Tách thành **helper class riêng** `SiteMapXmlOperationsHelper.cs` (đặt trong `Mcp/Tools/SiteMap/`, namespace `Mcp.Tools.SiteMap`) để giữ `ManageSiteMapTool.cs` không phình to (~1125 + ~817 = ~1900 LOC nếu gộp thẳng).
>
> Class này expose đúng 1 method:
>
> ```csharp
> public static (string ModifiedSiteMapXml, List<string> OperationSummaries)
>     ApplyOperations(string currentSiteMapXml, List<JsonElement> operations);
> ```
>
> Nó **không cần `ServiceClient`** — chỉ thao tác XML thuần, đơn giản hơn `FormXmlOperationsHelper` (vì SiteMap không cần fetch entity metadata).

**Cập nhật `[Description]` của tool** để phản ánh flow mới:

```
ACTIONS:
- 'list': List all Model-Driven Apps with SiteMap info.
- 'detail': Show current SiteMap XML.
- 'update' (recommended): Build + import in one call. Required: app + operations.
- 'update' (advanced): Provide raw SiteMap XML directly. Required: app + sitemapxml.
- 'create' (recommended): Create with operations. Required: app + operations.
- 'create' (advanced): Create with raw XML. Required: app + sitemapxml.
- 'undo': Restore from backup. Required: app + sitemapxml (= backup file path).

WORKFLOW (recommended):
manage_sitemap(action='update', app=..., operations=[...])
→ auto-builds SiteMap XML + backup + validate + import + publish

OPERATIONS (12 actions):
- add_area | add_group | add_subarea
- remove_area | remove_group | remove_subarea
- update_area | update_group | update_subarea
- move_area | move_group | move_subarea

Read schema://sitemapxml for SiteMap XML structure and operation format.
```

**Bỏ "Use build_sitemap_xml to build XML, pass result to sitemapxml..."** trong TIPS — không còn đúng.

**Result type:** Dùng thẳng `ManageSiteMapResult`. Bổ sung 2 fields optional:

```csharp
[JsonPropertyName("operationsCount")]
[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
public int? OperationsCount { get; set; }

[JsonPropertyName("operationSummaries")]
[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
public List<string> OperationSummaries { get; set; }
```

---

### 2. `BuildSiteMapXmlTool.cs`

**Xóa hoàn toàn** file này (không còn `[McpServerToolType]`, không còn expose `build_sitemap_xml`).

Logic được chuyển sang `SiteMapXmlOperationsHelper.cs` (helper class) — không còn là MCP tool.

---

### 3. `StructuredResults.cs`

**Xóa class `BuildSiteMapXmlResult`** (lines 285–307) — không còn dùng.

Bổ sung 2 fields vào `ManageSiteMapResult` như mô tả ở trên.

---

### 4. `McpServerHost.cs`

**Xóa entry** `[nameof(BuildSiteMapXmlTool)] = "standard"` (line 57).

Tool count tự động giảm: 35 → 34 (giả định đã merge `build_form_xml` trước đó).

---

### 5. `InstructionResources.cs` / Schema docs

Cập nhật `schema://sitemapxml` resource (nếu có note về workflow):

- Thay reference từ `build_sitemap_xml + manage_sitemap` → `manage_sitemap(action='update', operations=[...])`
- Examples dùng 1 bước thay vì 2

---

### 6. `README.md` (CLI)

Tìm và update tất cả mention của `build_sitemap_xml`:
- Tools count (sau khi merge cả 3 build_*: 36 → 33)
- Tool list: bỏ `build_sitemap_xml`
- Examples / workflows: dùng `manage_sitemap` 1 bước

---

### 7. `AGENTS.md` / `CLAUDE.md` (root)

Tìm dòng MCP Tools list:
```
... `manage_form`, ..., `build_form_xml`, `build_sitemap_xml`, `build_ribbon_xml`, ...
```

→ Bỏ `build_sitemap_xml`. Tools count xuống tương ứng.

---

## Lợi ích

| Trước | Sau |
|-------|-----|
| 2 tool calls + 1 file tạm | 1 tool call |
| ~3000+ tokens cho mỗi update | ~1500 tokens |
| AI agent đôi khi quên gọi `manage_sitemap` sau `build_sitemap_xml` | Không thể quên |
| Tool count: 36 | Tool count: 35 |
| Tool surface phức tạp (sub-tool ẩn) | Tool surface đơn giản |

**Backward-compat:** giữ nguyên flow `sitemapxml=<path>` cho `undo` và trường hợp user tự build XML thủ công.

---

## Migration / Rollout

- **Breaking change** với AI agents đang dùng `build_sitemap_xml`. Vì đây là MCP tool (chạy local), không có user nào "phụ thuộc" trực tiếp.
- Sau khi build & restart MCP server, AI tự nhiên thấy tool list mới và dùng `operations` parameter.
- Không cần "deprecation period" — xóa thẳng.

---

## Tasks

- [ ] Đọc lại 1 lần `ManageSiteMapTool.cs` + `BuildSiteMapXmlTool.cs` để nắm đủ logic
- [ ] Tạo `SiteMapXmlOperationsHelper.cs` trong `Mcp/Tools/SiteMap/` (namespace `Mcp.Tools.SiteMap`), copy 12 operation executors + helpers từ `BuildSiteMapXmlTool` qua, expose 1 method `ApplyOperations(...)`
- [ ] Cập nhật `ManageSiteMapTool.cs`:
  - Thêm param `operations`
  - Branching: operations vs sitemapxml vs both-empty/both-set (cho `update` và `create`)
  - Khi `operations` có giá trị → gọi `SiteMapXmlOperationsHelper.ApplyOperations(...)` → tiếp tục flow update/create cũ
  - Cập nhật `[Description]` của tool và params
- [ ] Cập nhật `StructuredResults.cs`:
  - Xóa `BuildSiteMapXmlResult`
  - Thêm `OperationsCount`, `OperationSummaries` (nullable) vào `ManageSiteMapResult`
- [ ] Xóa file `BuildSiteMapXmlTool.cs`
- [ ] Xóa entry trong `McpServerHost.cs` line 57
- [ ] Cập nhật `InstructionResources.cs` (nếu có reference)
- [ ] Cập nhật `README.md` (CLI)
- [ ] Cập nhật `AGENTS.md` / `CLAUDE.md` (tool list, count)
- [ ] Run `/claude-build-cli` để rebuild
- [ ] Restart MCP process: `Get-Process | Where-Object { $_.CommandLine -like "*devkit*mcp*" } | Stop-Process -Force`
- [ ] Smoke test: gọi `manage_sitemap(action='update', operations=[...])` trên 1 app thật

---

## Risks

| Risk | Mức | Mitigation |
|------|-----|------------|
| `ManageSiteMapTool.cs` quá dài sau khi merge | Trung bình | Tách helper class `SiteMapXmlOperationsHelper.cs` ra riêng |
| Breaking AI agents đang dùng `build_sitemap_xml` | Thấp | MCP tool list refresh tự động sau restart |
| Backup không tương thích sau merge | Thấp | Flow `undo` vẫn dùng `sitemapxml=<backup_path>`, không thay đổi |
| Logic `create` phức tạp hơn `update` (cần build base shell) | Trung bình | Test riêng case `create` với app chưa có SiteMap |
| 2 chế độ (operations vs sitemapxml) trong cùng 1 action gây nhầm lẫn | Thấp | Validate sớm + error message rõ ràng ("Provide either X or Y, not both") |

---

## Acceptance Criteria

- [ ] Tool `build_sitemap_xml` không còn xuất hiện trong tool list khi connect MCP
- [ ] Tool count khi `category=all` giảm 1 (36 → 35)
- [ ] `manage_sitemap(action='update', operations=[...])` hoạt động end-to-end: build + backup + validate + import + publish
- [ ] `manage_sitemap(action='create', operations=[...])` hoạt động cho app chưa có SiteMap
- [ ] `manage_sitemap(action='update', sitemapxml=<path>)` vẫn hoạt động (backward-compat)
- [ ] `manage_sitemap(action='undo', sitemapxml=<backup_path>)` vẫn hoạt động
- [ ] Error messages không còn nhắc tới `build_sitemap_xml`
- [ ] Build pass: `/claude-build-cli`
- [ ] Smoke test pass: tạo 1 area + 1 group + 1 subarea trong 1 call duy nhất
