# WebResource & Report CLI — Phân tích & Đề xuất

## 1. Tổng quan hiện trạng

### Kiến trúc tổng thể

- **VSIX (VS 2022/2026)**: WebResource có 4 commands (Deploy/New/TS Debug/Release). Report chỉ có Project Template, delegates deploy qua `.bat` → CLI.
- **VSIX 2019**: Report Upload context menu trực tiếp trên `.rdl` với `FormReportMapping`.
- **devkit CLI**: WebResource full-featured (898 dòng), Report cơ bản (215 dòng).
- **MCP Tools**: WebResource có `manage_webresource` (5 actions). Report chưa có MCP tool.
- **Shared**: `DeploymentService` serve cả hai nhưng Report API ít hơn.

---

## 2. CLI WebResource — Hiện trạng chi tiết

### 2.1 Commands đã có

| Command | File | Mô tả |
|---|---|---|
| `devkit webresource` | `Commands/WebResourceCommand.cs` | Deploy batch (profile) hoặc single file (`--file` + `--webresource`) |
| `devkit downloadwebresource` | `Commands/DownloadWebResourceCommand.cs` | Download tất cả WR từ solution |

### 2.2 TaskWebResource — 898 dòng, full-featured

`Tasks/TaskWebResource.cs` bao gồm:

| Feature | Chi tiết |
|---|---|
| Solution validation | `IsExistSolutionAsync()` — kiểm tra solution tồn tại, lấy publisher prefix |
| File pattern matching | `includefiles` / `excludefiles` globbing từ `rootfolder` |
| Diff detection | So sánh base64 hash local vs Dataverse `content` → skip nếu giống |
| 12 file types | HTML, CSS, JS, XML, PNG, JPG, GIF, XAP, XSL, ICO, SVG, RESX |
| RESX language | Parse language code từ filename, validate `RetrieveProvisionedLanguagesRequest` |
| Managed check | Kiểm tra `iscustomizable.Value` trước khi update managed resources |
| TypeScript build | Detect `.ts` → `npm run debug` → resolve compiled `.js` from `build/` |
| Create + Update | Tạo mới hoặc update existing web resource |
| Add to solution | `AddSolutionComponentRequest` (componenttype = 61) |
| Batch publish | Accumulate changed GUIDs → single `PublishXmlRequest` |
| Dependencies | Version >= 9.0: `[entity]` placeholder → metadata resolution → `dependencyxml` |
| Config persistence | Lưu mapping vào `DynamicsCrm.DevKit.Config.json` |
| Single-file override | `--file` + `--webresource` bypass profile/json |

### 2.3 TaskDownloadWebResource — 93 dòng

- Validate solution, ensure target folder empty
- Query via `GetWebResourcesBySolutionAsync`
- Base64 decode → write bytes

### 2.4 MCP Tool — `manage_webresource`

`Mcp/Tools/ManageWebResourceTool.cs`:
- Actions: `list`, `detail`, `create`, `update`, `delete`
- Filter by name, type, solution
- DryRun support
- Auto-publish after create/update

---

## 3. CLI Report — Hiện trạng chi tiết

### 3.1 Commands đã có

| Command | File | Mô tả |
|---|---|---|
| `devkit downloadreport` | `Commands/DownloadReportCommand.cs` | Download reports từ solution |
| `devkit uploadreport` | `Commands/UploadReportCommand.cs` | Upload reports lên solution |

### 3.2 TaskUploadReport — 115 dòng, cơ bản

`Tasks/TaskUploadReport.cs`:

| Feature | Status |
|---|---|
| Solution validation | YES — `IsExistSolutionAsync()` |
| Language folder scan | YES — Duyệt `languages[]` → scan `*.rdl` |
| Diff detection | YES — `Helper.IsTheSame()` whitespace-normalized comparison |
| Match by filename + language | YES — Tìm report trùng filename + language trong solution |
| Single-file deploy | NO |
| Config persistence | NO |
| Managed check | NO |
| Error recovery | NO — không handle multi-match gracefully |

### 3.3 TaskDownloadReport — 101 dòng

`Tasks/TaskDownloadReport.cs`:

| Feature | Status |
|---|---|
| Solution validation | YES |
| Empty folder check | YES — Prevents overwrite |
| Language subfolder | YES — Saves to `{solution}/{language}/{filename}` |
| Duplicate handling | YES — `FileHelper.GeNextFileName()` |
| Incremental download | NO |
| Overwrite option | NO — Yêu cầu folder trống |

### 3.4 DeploymentService — Report methods

`Shared/Services/DeploymentService.cs`:

| Method | Mô tả |
|---|---|
| `GetReportsBySolutionAsync(solution)` | FetchXML: report → solutioncomponent (type 31) → solution. Returns `List<DownloadFile>` with `bodytext`, `filename`, `language` |
| `DeployReportAsync(reportId, fullFileName)` | Update `report.bodytext` with file content |

**Thiếu**: Không có `GetReportsAsync(fileName)` để fuzzy-search report (tương tự `GetWebResourcesAsync`), không có `DeployNewReportAsync`, không có `AddReportToSolutionAsync`.

---

## 4. Gap Analysis — Report CLI vs WebResource CLI

| # | Feature | WebResource CLI | Report CLI | Gap |
|---|---|---|---|---|
| 1 | Single-file deploy (`--file`) | YES `--file` + `--webresource` | NO | **Cần thêm** |
| 2 | Config persistence | YES `DynamicsCrm.DevKit.Config.json` | NO | **Cần thêm** |
| 3 | Managed check | YES kiểm tra `iscustomizable` | NO | **Nên thêm** |
| 4 | Incremental download | NO | NO | Cả 2 thiếu |
| 5 | Overwrite option for download | NO — Yêu cầu folder trống | NO — Yêu cầu folder trống | Cả 2 thiếu |
| 6 | Batch publish | YES Selective `PublishXmlRequest` | N/A (reports không cần publish) | — |
| 7 | MCP tool | YES `manage_webresource` (5 actions) | NO | **Cần thêm** |
| 8 | Single-file download | NO | NO | Cả 2 thiếu |
| 9 | Create new report from file | N/A (via MCP create) | NO | Xem xét thêm |
| 10 | Report name/description update | N/A | NO | Có thể bổ sung |
| 11 | Report format validation | N/A | NO — Không validate `.rdl` XML | Nên thêm |
| 12 | Progress counting | YES `{i}/{total}` | NO — Biến `i` có nhưng không dùng | **Bug** |

---

## 5. Đề xuất bổ sung

### 5.1 WebResource CLI — 5 enhancements

WebResource CLI đã khá hoàn thiện. Các đề xuất dưới đây là nice-to-have.

| # | Enhancement | Mô tả | Priority |
|---|---|---|---|
| W1 | `--force` option cho download | Cho phép overwrite files đã tồn tại thay vì yêu cầu folder trống | Low |
| W2 | Incremental download | Thêm `--changed-only` — so sánh hash trước khi download | Low |
| W3 | Single-file download | `devkit downloadwebresource --name "prefix_/path/file.js"` | Low |
| W4 | Progress display | Thêm progress bar hoặc counter `[3/25]` khi download | Low |
| W5 | Verify mode | `--verify` — chỉ report diff mà không deploy (dry-run nhẹ cho CLI) | Low |

### 5.2 Report CLI — Implementation Plan

Report CLI cần nâng cấp đáng kể để bắt kịp WebResource CLI.

#### Phase 1: Single-file deploy (tương đương WebResource `--file` mode)

**Mục tiêu**: Cho phép `devkit uploadreport --file "path/to/report.rdl"` deploy 1 file mà không cần json/profile.

Cần thay đổi:

##### [MODIFY] `Models/UploadReportCommandArgs.cs`
- Thêm `[CommandOption("--file|-f")] public string File { get; set; }`
- Thêm `[CommandOption("--report|-r")] public string Report { get; set; }` (report name in Dataverse)

##### [MODIFY] `Commands/UploadReportCommand.cs`
- Override `IsProfileRequired` / `IsJsonRequired` (return false when `--file` provided)
- Add single-file path khi không có json/profile (giống `WebResourceCommand`)

##### [MODIFY] `Tasks/TaskUploadReport.cs`
- Thêm single-file bypass logic trong `IsValidAsync()`
- Thêm `GetReportsAsync(fileName)` fuzzy-search để tìm report target
- Thêm managed check trước khi deploy

##### [MODIFY] `Shared/Services/DeploymentService.cs`
- Thêm `GetReportsAsync(string fullFileName)` — FetchXML fuzzy-search tương tự `GetWebResourcesAsync`

#### Phase 2: Config persistence

##### [MODIFY] `Tasks/TaskUploadReport.cs`
- Lưu report mapping (`File`, `ReportId`, `ReportName`, `Language`) vào `DynamicsCrm.DevKit.Config.json` → section `Reports`

Lưu ý: `ConfigJson.cs` đã có `public List<DeployReport> Reports { get; set; }` — infrastructure sẵn rồi.

#### Phase 3: Download enhancements

##### [MODIFY] `Models/DownloadReportCommandArgs.cs`
- Thêm `[CommandOption("--force")] public bool Force { get; set; }`

##### [MODIFY] `Tasks/TaskDownloadReport.cs`
- Khi `--force`, cho phép overwrite files đã tồn tại
- Fix progress counter: sử dụng biến `i` đã khai báo nhưng chưa log

#### Phase 4: Bug fixes

##### [MODIFY] `Tasks/TaskDownloadReport.cs`
- Line 92: biến `i` tăng nhưng không hiển thị trong log → thêm `[{i}/{totalDownloadFiles}]` vào SpectreLog

##### [MODIFY] `Tasks/TaskUploadReport.cs`
- Handle case `reports.Count() > 1` better — hiện chỉ log error nhưng không suggest action

---

## 6. So sánh VSIX vs CLI — Ma trận tính năng

### WebResource

| Feature | VSIX | CLI | MCP |
|---|---|---|---|
| Deploy existing | YES Context menu | YES `devkit webresource` | YES `manage_webresource update` |
| Deploy new | YES Context menu | YES Auto-create in batch | YES `manage_webresource create` |
| TS Debug build | YES `npm run debug` | YES `npm run debug` | NO |
| TS Release build | YES `npm run release` | NO | NO |
| Solution picker | YES GUI modal | YES via profile json | YES via `solution_name` param |
| Mapping GUI | YES `FormWebResource` | NO Profile-based | NO |
| Download | YES via .bat → CLI | YES `devkit downloadwebresource` | NO |
| Delete | NO | NO | YES `manage_webresource delete` |
| List/Detail | NO | NO | YES `manage_webresource list/detail` |
| Dependencies | NO | YES `dependencyxml` management | NO |

### Report

| Feature | VSIX | VSIX 2019 | CLI | MCP |
|---|---|---|---|---|
| Project template | YES `12.Report` | NO | NO | NO |
| Deploy existing | NO (via .bat → CLI) | YES Context menu on `.rdl` | YES `devkit uploadreport` | NO |
| Deploy new | NO | NO | NO | NO |
| Mapping GUI | NO | YES `FormReportMapping` | NO | NO |
| Download | NO (via .bat → CLI) | NO | YES `devkit downloadreport` | NO |
| Single-file deploy | NO | YES Right-click `.rdl` | NO **GAP** | NO |
| Config persistence | NO | YES `DynamicsCrm.DevKit.Config.json` | NO **GAP** | NO |
| Diff detection | NO | YES `string.Equals` | YES `Helper.IsTheSame` | NO |
| Managed check | NO | NO | NO **GAP** | NO |
| MCP tool | NO | NO | NO | NO **GAP** |

---

## 7. Kết luận & Ưu tiên

| Priority | Task | Effort |
|---|---|---|
| HIGH | Report CLI: Single-file deploy (`--file` + `--report`) | Medium |
| HIGH | Report CLI: Fix progress counter bug | Small |
| MEDIUM | Report CLI: Config persistence (`DynamicsCrm.DevKit.Config.json`) | Medium |
| MEDIUM | Report CLI: Download `--force` option | Small |
| MEDIUM | Report CLI: Managed check before deploy | Small |
| LOW | Report CLI: Better multi-match error handling | Small |
| LOW | WebResource CLI: `--force` download option | Small |
| LOW | WebResource CLI: Progress counter for download | Small |
| FUTURE | MCP `manage_report` tool (list/detail/update) | Large |
| FUTURE | Report CLI: `.rdl` XML validation | Medium |
