# Implementation Plan: MCP Tool `manage_report` & CLI Fast Deploy

Ngày: 2026-08-28 · Trạng thái: **KẾ HOẠCH TRIỂN KHAI (MCP + CLI FAST DEPLOY) — CHỜ DUYỆT — CHƯA CODE**

Tài liệu nghiên cứu: [`manage-report-research.md`](file:///d:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Docs/Cli/manage-report-research.md)

---

## Mục tiêu

1. **MCP Tool `manage_report`**: Cung cấp 6 actions toàn diện (`list`, `detail`, `create`, `download`, `update`, `delete`) cho AI agents, hỗ trợ tạo mới report từ starter template nhúng `ReportTemplate.rdl`.
2. **CLI Fast Deploy cho Report**: Nâng cấp lệnh `devkit uploadreport` để hỗ trợ deploy nhanh từng file đơn lẻ (`--file "..." --report "..."`) tương tự `devkit webresource`, bypass profile/json và tự động lưu mapping vào `DynamicsCrm.DevKit.Config.json`.
3. **Embedded Template**: Nhúng `ReportTemplate.rdl` vào `DynamicsCrm.DevKit.Shared` để VSIX, CLI và MCP đều dùng chung.

---

## User Review & Key Decisions

> [!IMPORTANT]
> **1. Fast Deploy cho CLI (`devkit uploadreport`)**:
> - Hỗ trợ deploy 1 file `.rdl` mà không cần cấu hình `DynamicsCrm.DevKit.Cli.json` hay `--profile`.
> - Cú pháp: `devkit uploadreport --conn "..." --file "path/to/report.rdl" --report "Report Name"`.
> - Tự động lưu mapping vào `DynamicsCrm.DevKit.Config.json` (section `Reports`).

> [!IMPORTANT]
> **2. MCP Tool `manage_report` hỗ trợ `create` từ template**:
> - Nếu AI gọi `create` không truyền `file_path`: Tự sinh RDL từ template nhúng `ReportTemplate.rdl` (tùy biến theo `entity_name` nếu có).
> - Nếu truyền `file_path`: Đọc từ file local `.rdl`.

---

## Proposed Changes

### Component 1: Shared Project (`DynamicsCrm.DevKit.Shared`)

---

#### [NEW] `DynamicsCrm.DevKit.Shared/Resources/reports/ReportTemplate.rdl`
- Sao chép từ `ProjectTemplates/CSharp/12.ReportProjectTemplate/ReportTemplate.rdl`.
- Template RDL chuẩn với FetchXML data provider và standard CRM parameters.

#### [MODIFY] [`DynamicsCrm.DevKit.Shared.projitems`](file:///d:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Shared/DynamicsCrm.DevKit.Shared.projitems)
- Thêm khai báo:
  ```xml
  <ItemGroup>
    <EmbeddedResource Include="$(MSBuildThisFileDirectory)Resources\reports\ReportTemplate.rdl" />
  </ItemGroup>
  ```

#### [MODIFY] [`DeploymentService.cs`](file:///d:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Shared/Services/DeploymentService.cs)
- Bổ sung helper method `GetReportsAsync(string reportName, string language = null)` để tìm kiếm report theo tên/filename trong Dataverse khi chạy Fast Deploy.

---

### Component 2: CLI Fast Deploy (`DynamicsCrm.DevKit.Cli`)

---

#### [MODIFY] [`UploadReportCommandArgs.cs`](file:///d:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Cli/Models/UploadReportCommandArgs.cs)
- Thêm các command options:
  ```csharp
  [CommandOption("--file|-f")]
  [Description("Single .rdl report file to deploy")]
  public string File { get; set; }

  [CommandOption("--report|-r")]
  [Description("Name, filename, or GUID of the report in Dataverse")]
  public string Report { get; set; }

  [CommandOption("--language|-l")]
  [Description("Language name (e.g. 'English') or LCID (default: 1033)")]
  public string Language { get; set; }

  [CommandOption("--solution|-s")]
  [Description("Solution unique name")]
  public string Solution { get; set; }
  ```

#### [MODIFY] [`UploadReportCommand.cs`](file:///d:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Cli/Commands/UploadReportCommand.cs)
- Override `IsProfileRequired` và `IsJsonRequired`:
  ```csharp
  protected override bool IsProfileRequired(UploadReportCommandArgs settings) => string.IsNullOrEmpty(settings.File);
  protected override bool IsJsonRequired(UploadReportCommandArgs settings) => string.IsNullOrEmpty(settings.File);
  ```
- Thêm logic xử lý khi `--file` được cung cấp (bỏ qua đọc file JSON nếu không có).

#### [MODIFY] [`TaskUploadReport.cs`](file:///d:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Cli/Tasks/TaskUploadReport.cs)
- Bổ sung luồng xử lý Single-File Fast Deploy:
  1. Kiểm tra file `.rdl` local.
  2. Tìm report mapping trong `DynamicsCrm.DevKit.Config.json` hoặc tra cứu Dataverse theo tên/filename.
  3. Kiểm tra `ismanaged` + `iscustomizable`.
  4. So sánh diff `Helper.IsTheSame`.
  5. Deploy bằng `Deployment.DeployReportAsync(reportId, file)`.
  6. Lưu mapping vào `DynamicsCrm.DevKit.Config.json` (section `Reports`).

---

### Component 3: MCP Tool (`DynamicsCrm.DevKit.Cli/Mcp`)

---

#### [NEW] [`ManageReportTool.cs`](file:///d:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageReportTool.cs)
- Implement class `ManageReportTool : McpToolBase` (~500–600 LOC) hỗ trợ 6 actions:
  - `HandleList`: Query FetchXML với filter solution, name, language.
  - `HandleDetail`: Query full metadata, trích xuất summary dataSources/dataSets, trả về `bodyTextSize`.
  - `HandleCreate`: Tạo record `report` (từ file hoặc template nhúng), liên kết solution (type 31).
  - `HandleDownload`: Ghi `bodytext` ra file `.rdl` (temp hoặc chỉ định), trả về file path.
  - `HandleUpdate`: Diff check, cập nhật `bodytext` / `description` (không cần publish).
  - `HandleDelete`: Xóa report (chặn managed, hỗ trợ dry-run).

#### [NEW] [`ManageReportResult.cs`](file:///d:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Cli/Mcp/Tools/Models/ManageReportResult.cs)
- Structured output DTO (~45 LOC).

#### [NEW] [`ReportEntry.cs`](file:///d:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Cli/Mcp/Tools/Models/ReportEntry.cs)
- Model chi tiết từng report (~45 LOC).

#### [MODIFY] [`DisplayNameFirstResolver.cs`](file:///d:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Cli/Mcp/Tools/Helper/DisplayNameFirstResolver.cs)
- Bổ sung method `ResolveReport(ServiceClient, string identifier, string toolName, string language = null)`.

---

### Component 4: Test Documentation

---

#### [NEW] [`38.manage_report.md`](file:///d:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Docs/testcall/38.manage_report.md)
- Test call documentation (~250 LOC) bao gồm cả MCP test cases và CLI Fast Deploy test cases:
  1. MCP: `list` filter by solution
  2. MCP: `detail` view metadata & dataset summary
  3. MCP: `create` from template
  4. MCP: `create` from local file
  5. MCP: `download` to temp file
  6. MCP: `update` with diff / without diff
  7. MCP: `delete` report
  8. CLI: Fast deploy single file `devkit uploadreport --file ... --report ...`
  9. CLI: Fast deploy with auto config persistence

---

## File Summary

| Action | File | LOC ước tính |
|---|---|---|
| NEW | `Shared/Resources/reports/ReportTemplate.rdl` | ~500 (XML) |
| MODIFY | `Shared/DynamicsCrm.DevKit.Shared.projitems` | +3 |
| MODIFY | `Shared/Services/DeploymentService.cs` | +~40 |
| MODIFY | `Cli/Models/UploadReportCommandArgs.cs` | +~25 |
| MODIFY | `Cli/Commands/UploadReportCommand.cs` | +~35 |
| MODIFY | `Cli/Tasks/TaskUploadReport.cs` | +~120 |
| NEW | `Cli/Mcp/Tools/ManageReportTool.cs` | ~500–600 |
| NEW | `Cli/Mcp/Tools/Models/ManageReportResult.cs` | ~45 |
| NEW | `Cli/Mcp/Tools/Models/ReportEntry.cs` | ~45 |
| MODIFY | `Cli/Mcp/Tools/Helper/DisplayNameFirstResolver.cs` | +~60 |
| NEW | `Docs/testcall/38.manage_report.md` | ~250 |
| **Total** | **5 new + 6 modify** | **~1000–1200 LOC code/docs** |

---

## Verification Plan

### Automated Build Verification
```bash
dotnet build DynamicsCrm.DevKit.Cli/DynamicsCrm.DevKit.Cli.csproj
```

### Manual Verification Flow (Khi được phép thực thi)
1. Đóng gói & cài đặt CLI: `DynamicsCrm.DevKit.Scripts/Release.DynamicsCrm.DevKit.Cli.ps1`
2. **Kiểm tra CLI Fast Deploy**:
   - Chạy lệnh: `devkit uploadreport --conn "..." --file "path/to/Report.rdl" --report "Report Name"`
   - Kiểm tra log hiển thị `[DEPLOYED]` hoặc `[DO_NOTHING]`
   - Kiểm tra file `DynamicsCrm.DevKit.Config.json` có ghi nhận mapping trong section `Reports`
3. **Kiểm tra MCP Server**:
   - Chạy `devkit mcp devkit-codex`
   - Gọi `manage_report` với các actions `create`, `download`, `update`, `list`, `detail`, `delete`
   - Kiểm tra chế độ `--dry-run` ngăn chặn mutation
