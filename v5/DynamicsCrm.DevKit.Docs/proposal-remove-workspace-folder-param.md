# Proposal: Bỏ param `workspace_folder` — resolve tự động qua MCP roots/list

> Status: **PENDING REVIEW** (aP) — chưa code
> Date: 2026-08-27
> Proof: `mcp-probe` tool `probe_roots` (SDK ModelContextProtocol 2.2.0) → `rootsCapability=True`, `roots=[{Uri:"file:///D:/github/Dynamics-Crm-DevKit/v5"}]`, `cwd=D:\github\Dynamics-Crm-DevKit\v5`

## 1. Bài toán

AI caller (Claude Code, Cline, Copilot, Codex App…) phải tự truyền `workspace_folder` cho mọi tool ghi file ra `.devkit/`. Caller thường chọn sai (vd: Temp folder) vì MCP server là process riêng, không biết working folder của client.

## 2. Giải pháp đã PROVE

MCP spec có **roots capability**: server chủ động hỏi client `roots/list` → nhận workspace roots (`file://` URIs). SDK C# 2.2.0 có sẵn:

```csharp
// inject McpServer (abstract class — 2.x không còn IMcpServer) vào tool method
if (server.ClientCapabilities?.Roots != null)
{
    var result = await server.RequestRootsAsync(new ListRootsRequestParams(), ct);
    var folder = new Uri(result.Roots[0].Uri).LocalPath;
}
```

Client support đã khảo sát:
- **Claude Code/CLI**: ✅ roots/list (launch dir + `--add-dir`, có `list_changed` từ v2.1.203)
- **Codex CLI/App**: ❌ roots, nhưng spawn stdio server với `cwd` = project root
- **VS Code/Copilot, Cline**: chưa xác nhận — fallback cwd cover

## 3. Resolution chain (aP quyết định)

```
workspaceFolder =
  1. roots/list → root ĐẦU TIÊN (nếu client declare Roots capability)
  2. Environment.CurrentDirectory   ← LUÔN có value → KHÔNG cần case error
```

- Không có bước 3 (error). `Environment.CurrentDirectory` luôn tồn tại nên chain không bao giờ fail.
- Vẫn giữ nguyên convention path: `{workspaceFolder}/.devkit/{tool}/{entity}/` (đổi chỗ lấy `workspaceFolder`, không đổi layout).

## 4. Thay đổi trên tools

**Nguyên tắc chung (aP):**
1. **Remove param `workspace_folder`** khỏi signature + description của mọi tool
2. Khi cần → gọi helper, **KHÔNG check required** nữa (xóa mọi `Error("workspace_folder is required...")` + hint kèm theo)

**Helper mới:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/Helper/WorkspaceFolderHelper.cs`

```csharp
public static class WorkspaceFolderHelper
{
    // Chain: roots/list (root đầu tiên) → Environment.CurrentDirectory
    public static string Get(McpServer server);
}
```

**Decision point — async:** `RequestRootsAsync` là async; tool methods hiện là sync `CallToolResult`. 2 lựa chọn:
- **(A — đề xuất)** Convert 8 tool method sang `async Task<CallToolResult>` (SDK support sẵn)
- (B) Helper block sync-over-async (`.GetAwaiter().GetResult()`) — rủi ro deadlock trên stdio transport

**8 tools bị ảnh hưởng** (grep `workspace_folder`):

| # | Tool | File | Param condition hiện tại |
|---|------|------|--------------------------|
| 1 | `search_records` | SearchRecordsTool.cs | required khi `detail_level='full'` |
| 2 | `generate_demo_data` | GenerateDemoDataTool.cs | required luôn |
| 3 | `manage_app` | ManageAppTool.cs | required khi update/update_navigation/undo |
| 4 | `manage_chart` | ManageChartTool.cs | required khi update |
| 5 | `manage_form` | ManageFormTool.cs | required khi update/rename |
| 6 | `manage_ribbon` | ManageRibbonTool.cs | required khi update |
| 7 | `manage_view` | ManageViewTool.cs | required khi update/rename/undo |
| 8 | `manage_record_file` | ManageRecordFileTool.cs | required khi download; + resolve relative `file_path` khi upload |

**File phụ thuộc bị ảnh hưởng** (grep `.devkit`):
- `Mcp/Tools/Helper/ViewBackupHelper.cs:12` — nhận `workspaceFolder` từ manage_view/manage_form callers → đổi sang nhận giá trị đã resolve
- `Mcp/Tools/Ribbon/RibbonMutateActions.cs:410` — dùng `_workspaceFolder` field từ ManageRibbonTool
- `Mcp/Resources/InstructionResources.cs` — 3 chỗ: `:128` (`.devkit/manage_app/...` example), `:149` (`{working_directory}/.devkit/manage_form/`), `:458-459` (section "CRITICAL: workspace_folder + Auto Backup") → rewrite: không còn param, backup vẫn auto theo roots-resolved folder
- `Mcp/Resources/SchemaResources.cs:74` — `{working_directory}/.devkit/manage_app/{app}/` → update wording
- Tool descriptions: bỏ `{workspace_folder}` placeholder, thay bằng mô tả "workspace folder (auto-resolved from MCP roots or server cwd)"

## 5. Testcall bị ảnh hưởng (Docs/testcall/)

- `16.search_records.md` — bỏ param ở Test 6/7/15; Test 15 (thiếu workspace_folder) **không còn là error** → phải xóa/thay test case
- Testcall của `generate_demo_data`, `manage_app`, `manage_chart`, `manage_form`, `manage_ribbon`, `manage_view`, `manage_record_file` — cập nhật input + bỏ các error case required
- Số test thay đổi → renumber theo rule (`devkit mcp --tools`)

## 6. Workflow thực hiện (sau khi aP duyệt)

1. Code `WorkspaceFolderHelper` + pilot `search_records` (tool nhỏ nhất, đã có testcall 16 mới nhất)
2. `build cli` (Release script) → aP `/mcp` reconnect → real test `search_records` (path phải ra `D:\github\Dynamics-Crm-DevKit\v5\.devkit\search_records\` khi gọi từ session này — KHÔNG truyền param)
3. aP duyệt pilot → sweep 7 tools còn lại (từng tool: code → build → reconnect → test → update testcall)
4. Update `InstructionResources.cs`
5. Update memory `workspace-folder-convention-pending` → RESOLVED

## 7. Out of scope

- Không đổi `.devkit/{tool}/{entity}/` layout, timestamp `yyyyMMddHHmmss`, path DTO-only
- Không thêm cache roots/list_changed (roots gọi mỗi lần — roundtrip local rẻ; cache là optimization sau nếu cần)
- Không đụng `all_in_one` table khi test (refactor3 §0)
