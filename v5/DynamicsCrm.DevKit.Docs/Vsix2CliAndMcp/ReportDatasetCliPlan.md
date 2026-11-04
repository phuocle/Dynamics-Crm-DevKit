# Work-unit Plan: `devkit reportdataset` — Port "Manage Datasets" từ VSIX sang CLI

> Status: **PLAN — CHỜ REVIEW APhước** (2026-11-04, soạn trên branch v5.5)
> Nguồn phân tích: 3 agent đọc đầy đủ VSIX dialog stack + CLI command patterns + MCP surface.
> Quyết định đã chốt với APhước: (1) **Move** logic sang Shared — 1 implementation duy nhất; (2) command **luôn connect** org như các report command khác, không đụng `DevKitCommand<T>`; (3) làm ngay trên **v5.5**; (4) **không đụng MCP** trong work-unit này (align là follow-up).

---

## 1. Hiện trạng (tại sao cần port)

### 1.1 VSIX — "Manage Datasets..." (đầy đủ, là chuẩn tham chiếu)
- Menu: `DevKitPackageVsct.vsct:94-102` — Button `CommandManageReportDatasets`, text **"Manage Datasets..."**, visible chỉ khi chọn đúng 1 file `.rdl` trong Solution Explorer.
- Command: `DynamicsCrm.DevKit.Vsix/Commands/CommandManageReportDatasets.cs` — save file đang mở → validate contract → mở dialog modal với `ServiceClient` cache (60 phút, ping `RetrieveMultiple systemuser top 1`).
- Dialog WPF: `Lib/Forms/FormReportDatasets.xaml(.cs)` — list dataset (combo), New (auto-suggest `Dataset1`, `Dataset2`…), Edit/rename, **Validate & Refresh Fields**, editor FetchXML (Format XML), **Pre-filter grid** per entity (enable/disable), tab Fields/Parameters, Save RDL (backup + atomic), Close (confirm discard).
- Service (pure logic, **không phụ thuộc WPF/VS** — chỉ Dataverse client + System.Xml): `Lib/ReportDatasetService.cs` (1.257 dòng):
  - `List()` / `ValidateSyntax()` / `ValidateAsync(ServiceClient, fetchXml, prefilterSelections, existingName)` / `Add()` / `Update()` / `Delete()` / `SaveAsync(solutionFolder)`
  - Delete **có sẵn trong service nhưng dialog chưa expose** (CLI sẽ expose luôn).
- Models: `ReportDatasetInfo`, `ReportDatasetFieldInfo`, `ReportDatasetParameterInfo`, `ReportDatasetValidationResult`, `ReportFetchEntityInfo` (đầy đủ properties ở §5).
- Validation pipeline (quan trọng nhất): parse FetchXML → validate entity graph (mọi entity/link-entity cần `name`, non-root cần `alias`, không trùng alias, kèm số dòng lỗi) → `RetrieveEntityRequest {LogicalName, EntityFilters.Attributes}` per entity (cache theo logical name) → sinh Fields (explicit attribute / `all-attributes` / aggregate, kèm companion `XValue` + `XEntityName` cho Lookup/Customer/Owner; **reject** MultiSelectPicklist/File/Image) → validate link `from`/`to`, `order`, `condition`, `valueof` cross-reference → `DiscoverParameters` (token `@xxx` trong condition value + page/count) → **server probe** `RetrieveMultiple(FetchExpression)` với `top="1"`, bỏ filter/page/prefilter.
- Pre-filter đầy đủ (hơn MCP): `enableprefiltering="1"` + `prefilterparametername` (bắt đầu `CRM_`) trên **mọi entity/link-entity** + bộ ba report-level artifacts: hidden `ReportParameter` (default filter fetch) + `ReportParametersLayout` cell + MSCRM `CustomProperties` `ReportFilter`/`ReportEntity`.
- Save: SHA-256 conflict detection ("The RDL changed outside this dialog.") + backup `.devkit/manage_report/backups/<file>_<timestamp>.rdl` + atomic write (`File.Replace`) + giữ nguyên encoding/BOM/newline gốc.

### 1.2 CLI — chưa có gì
- `DynamicsCrm.DevKit.Cli/Tasks/` không task nào parse dataset/FetchXML trong `.rdl`.
- Pattern tham chiếu cho lệnh mới: `DownloadReportCommand` (json/profile) và `UploadReportCommand` (`--file` direct mode, override `IsProfileRequired`/`IsJsonRequired`).

### 1.3 MCP — có 1 phần, logic khác
- `Mcp/Tools/ManageReportTool.cs` (1.350 dòng): tool `manage_report` có actions `add_dataset` / `update_dataset` (FetchXML hoặc system view, backup, **prefilter chỉ root entity**, không có report-parameter artifacts, model MSCRMFETCH).
- → 2 implementation khác nhau tồn tại song song. Work-unit này đưa VSIX service thành **1 implementation chung** (Shared); MCP align sau (follow-up).

---

## 2. Kiến trúc — Move sang Shared (single source of truth)

Move 6 file, **giữ nguyên namespace** `DynamicsCrm.DevKit.Lib` / `DynamicsCrm.DevKit.Lib.Models` để VSIX không phải sửa bất kỳ chỗ gọi nào:

| Từ (Vsix) | Đến (Shared) |
|---|---|
| `Lib/ReportDatasetService.cs` | `ReportDataset/ReportDatasetService.cs` |
| `Lib/Models/ReportDatasetInfo.cs` | `ReportDataset/Models/ReportDatasetInfo.cs` |
| `Lib/Models/ReportDatasetFieldInfo.cs` | `ReportDataset/Models/ReportDatasetFieldInfo.cs` |
| `Lib/Models/ReportDatasetParameterInfo.cs` | `ReportDataset/Models/ReportDatasetParameterInfo.cs` |
| `Lib/Models/ReportDatasetValidationResult.cs` | `ReportDataset/Models/ReportDatasetValidationResult.cs` |
| `Lib/Models/ReportFetchEntityInfo.cs` | `ReportDataset/Models/ReportFetchEntityInfo.cs` |

- Thêm `<Compile Include>` cho 6 file vào `DynamicsCrm.DevKit.Shared/DynamicsCrm.DevKit.Shared.projitems` (gotcha P.1: Shared project KHÔNG globbing).
- Xóa entry tương ứng khỏi `DynamicsCrm.DevKit.Vsix.csproj` nếu csproj dùng explicit `<Compile Include>` (kiểm tra style khi làm; SDK-globbing thì chỉ cần xóa file cũ).
- Đã verify: service chỉ phụ thuộc Dataverse client + System.Xml — compile sạch trên cả net48 (VSIX) lẫn net10 (CLI). Signature `ValidateAsync(ServiceClient, ...)` giữ nguyên (cả 2 consumer đều reference type này).

---

## 3. Thiết kế lệnh `devkit reportdataset`

### 3.1 Options

| Option | Bắt buộc | Ý nghĩa |
|---|---|---|
| `--file`, `-f` | ✅ | Đường dẫn file `.rdl` (validate qua `ValidateFileForDatasetManagement`) |
| `--action`, `-a` | ✅ (default `list`) | `list` \| `validate` \| `add` \| `update` \| `delete` |
| `--name` | add/update/delete | Tên dataset |
| `--new-name` | tùy chọn (update) | Đổi tên dataset (service tự rename references) |
| `--fetchxml` | validate/add; update tùy chọn | **FetchXML truyền inline (trực tiếp)** |
| `--fetchxml-file` | thay thế `--fetchxml` | **FetchXML qua file (gián tiếp)** — `FileHelper` đọc, trim BOM/whitespace |
| `--prefilter` | tùy chọn | `"account=on,ctry=off"` — key = logical name \| alias \| path; key không khai báo giữ trạng thái hiện tại trong file; key lạ → error kèm danh sách path hợp lệ |
| `--force` | tùy chọn | Thay các confirm Yes/No của dialog (update có field bị xóa; delete có references) |

**Quy tắc FetchXML source (yêu cầu chính của APhước):**
- `--fetchxml` inline > `--fetchxml-file` file — **đưa cả hai → validation error "use only one"**.
- `add`/`validate`: bắt buộc có một trong hai.
- `update`: nếu không đưa → dùng CommandText hiện tại của dataset (= parity flow "Validate & Refresh Fields" của dialog).

### 3.2 Semantics từng action

| Action | Connection | Hành vi |
|---|---|---|
| `list` | cần org (theo pattern chung) | Bảng: Name / Root Entity / Fields / Parameters / Pre-filter / References / Warnings — thuần đọc file |
| `validate` | ✅ (probe) | FetchXML từ source (hoặc `--name` = re-validate CommandText hiện tại) → in errors / warnings / Fields / Parameters / kết quả probe |
| `add` | ✅ | `--name` + fetchxml source → validate → `Add()` → `SaveAsync()` → in backup path + field summary |
| `update` | ✅ | `--name` (+ `--new-name`, + fetchxml tùy chọn); nếu có field sẽ bị xóa mà không `--force` → **exit 1** kèm danh sách field + hint chạy lại với `--force` |
| `delete` | cần org (theo pattern chung) | `--name`; không `--force` → **exit 1** kèm `ReferencePaths` + hint (expose action mà dialog chưa từng có) |

- Backup/atomic/conflict-detection: dùng nguyên logic của service (không thêm flag, mặc định luôn backup).
- Exit codes chuẩn repo: 0 ok / 1 validation (`SpectreLog.ActionError`) / 2 connection (`DevKitConnectionException`).
- Không thêm json section `--json/--profile` trong work-unit này (direct-file mode; nếu sau này cần profile cho bat script thì thêm follow-up).

### 3.3 Ví dụ sử dụng

```bat
devkit reportdataset --file Account.rdl --action list
devkit reportdataset --file Account.rdl --action validate --name Account --fetchxml "<fetch ...>...</fetch>"
devkit reportdataset --file Account.rdl --action validate --name Account --fetchxml-file filter.xml
devkit reportdataset --file Account.rdl --action add --name Dataset2 --fetchxml-file views/account-active.xml --prefilter "account=on"
devkit reportdataset --file Account.rdl --action update --name Account --fetchxml "<fetch ...>" --force
devkit reportdataset --file Account.rdl --action update --name Account --new-name AccountMain
devkit reportdataset --file Account.rdl --action delete --name Dataset2 --force
```

---

## 4. Files tạo / sửa

**Tạo (CLI):**
1. `DynamicsCrm.DevKit.Cli/Models/ReportDatasetCommandArgs.cs` — subclass `DevKitCommandArgs` (namespace `DynamicsCrm.DevKit.Shared.Models`, pattern `UploadReportCommandArgs.cs:9-22`)
2. `DynamicsCrm.DevKit.Cli/Commands/ReportDatasetCommand.cs` — `DevKitCommand<ReportDatasetCommandArgs>`; override `IsProfileRequired`/`IsJsonRequired` → false; `RunTaskAsync` theo pattern `DownloadReportCommand.cs:13-44`
3. `DynamicsCrm.DevKit.Cli/Tasks/TaskReportDataset.cs` — `ITask`, primary constructor `(CommandLineArgs, ...)`; members `Arg`, `CurrentDirectory`, `OrgServiceAsync = arg.ServiceClient`, `TaskType => "[REPORTDATASET]"`, `IsOk`, `IsValidAsync`, `RunAsync` (START/END + `WriteRequestCounts`)

**Move (Phần 2):** 6 file VSIX → Shared + `DynamicsCrm.DevKit.Shared.projitems` (+ xóa Compile entries VSIX nếu explicit).

**Sửa:**
4. `DynamicsCrm.DevKit.Cli/Program.cs` — `AddCommand<ReportDatasetCommand>("reportdataset").WithDescription(...)` + `.WithExample(...)` (vùng `Program.cs:117-151`)
5. `DynamicsCrm.DevKit.Shared/Enum.cs` — thêm member `reportdataset` vào `CliType` (:11-27)
6. `DynamicsCrm.DevKit.Cli/Logging/SpectreLog.cs` — `WriteHelp()` bản plain (~:61-126) **VÀ** bản Panel markup (~:136-158) — cả hai nơi
7. `DynamicsCrm.DevKit.Cli/README.md` — bảng lệnh (:38-53)
8. `AGENTS.md` — bảng CLI (:52-61)

**Không đụng:** `TemplateHandlers.cs` / `ScaffoldingEngine.cs` (dataset management không phải template — dispatch là explicit registry, sai chỗ nếu nhét vào), `Mcp/**`, `DevKitCommand.cs` (không thêm hook connection).

---

## 5. Data contracts (models sẽ move, tham chiếu khi implement)

- **ReportDatasetInfo**: `Name`, `DataSourceName`, `CommandText`, `RootEntityName`, `List<ReportDatasetFieldInfo> Fields`, `List<ReportDatasetParameterInfo> Parameters`, `List<ReportFetchEntityInfo> FetchEntities`, `ReferenceCount`, `List<string> ReferencePaths`, `List<string> Warnings` + computed `FieldSummary`/`ParameterSummary`/`PreFilterSummary`/`ReferenceSummary`
- **ReportDatasetFieldInfo**: `Name`, `DataField`, `TypeName`, `SourceEntityPath`, `SourceAttribute`, `IsGeneratedCompanion`
- **ReportDatasetParameterInfo**: `FetchToken`, `QueryParameterName`, `ReportParameterName`, `ValueExpression`, `DataType`, `IsMultiValue`, `ExistsInReport`
- **ReportDatasetValidationResult**: `IsSuccess`, `Errors`, `Warnings`, `FetchXml`, `ProbeFetchXml`, `RootEntityName`, `Fields`, `Parameters`, `FetchEntities`
- **ReportFetchEntityInfo**: `Path` (vd `account/country[ctry]`), `LogicalName`, `Alias`, `IsRoot`, `IsPreFiltered`, `PrefilterParameterName`, computed `DisplayName`

---

## 6. Tests (MSTest 4, pattern có sẵn)

- `DynamicsCrm.DevKit.Cli.UnitTests/Cli/ReportDatasetCommandCoverageTests.cs` — probe pattern như `CommandSurfaceCoverageTests.cs:17-46`: `IsProfileRequired`/`IsJsonRequired` = false; các combo sai (thiếu file, thiếu fetchxml source, đưa cả 2, action lạ) → exit 1.
- `DynamicsCrm.DevKit.Cli.UnitTests/Shared/ReportDatasetServiceFakeSdkCoverageTests.cs` — `FakeSdkClient` (Harmony detours: `OnExecute` cho `RetrieveEntityRequest`, `OnRetrieveMultiple` cho probe): happy-path validate/add/update/delete/list trên fixture `.rdl` (copy `DynamicsCrm.DevKit.Tests/AllInOneWindow/Dev.AllInOne.Report/Account.rdl` làm test resource) + save-conflict + backup path.
- Convention: `Assert.HasCount`, `ThrowsExactlyAsync`, `StringAssert.Contains` (MSTest 4); validation phải fail **trước** mọi org call.

---

## 7. Verification

1. `dotnet build DynamicsCrm.DevKit.Cli/DynamicsCrm.DevKit.Cli.csproj --configuration Debug` → **0 error 0 warning** (rule build-verify-after-code; build theo batch sau khi APhước duyệt code nếu đang trong review).
2. VSIX build bằng **VS MSBuild** (không `dotnet build`) — bắt buộc vì file VSIX bị move (skill `devkit-skill-build-vsix`).
3. `dotnet test` Cli.UnitTests (net10) — suite mới + suite cũ không regress.
4. Live smoke: `devkit reportdataset --file <Account.rdl> --action list` rồi `--action validate --fetchxml-file ...` (thư mục có `.env` → DEVKITV4; chỉ metadata + probe read-only); thử cả inline lẫn file; thử `--fetchxml` + `--fetchxml-file` cùng lúc → phải exit 1.
5. Commit khi APhước ra lệnh — skill `devkit-skill-commit`, split feat/test/docs theo workflow commit-splitting.

---

## 8. Follow-up (ngoài scope work-unit này)

- Align MCP `manage_report` (`add_dataset`/`update_dataset`) dùng `ReportDatasetService` từ Shared (hệt gap: link-entity prefilter, report-parameter artifacts, conflict detection) — theo đúng ceremony MCP (rebuild + restart connector + whoami SHA).
- (Tùy APhước) json section `reportdatasets` cho `--json/--profile` nếu muốn chạy qua bat script.
