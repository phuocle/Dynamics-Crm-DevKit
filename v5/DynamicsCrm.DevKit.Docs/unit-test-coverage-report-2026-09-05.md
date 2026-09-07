# Unit Test + Code Coverage Report — 2026-09-05

## Cách chạy lại (AI tiếp theo đọc kỹ)

```powershell
dotnet test D:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Vsix.UnitTests/DynamicsCrm.DevKit.Vsix.UnitTests.csproj -f net10.0 --collect:"XPlat Code Coverage" --nologo -v q
```

- Chỉ chạy `-f net10.0` (net48 không có MSTest/FakeXrmEasy packages).
- Thời gian chạy: ~4m30s (2895 tests). Nên chạy background, output file nằm ở `%TEMP%\claude\...\tasks\*.output`.
- Sau khi xong, coverage XML nằm ở `DynamicsCrm.DevKit.Vsix.UnitTests/TestResults/{GUID}/coverage.cobertura.xml` — lấy folder **mới nhất** (`ls -t | head -1`).

### Report script có sẵn

```powershell
node DynamicsCrm.DevKit.Vsix.UnitTests/cov-byfile.js "<đường-dẫn-coverage.cobertura.xml>" 40
```

- `cov-byfile.js`: top N file missed-lines nhiều nhất + breakdown theo thư mục.
- `cov-method.js`: breakdown theo method (cùng cách gọi, xem file để biết args).

## Kết quả lần này

### Test run
```
Passed!  - Failed: 0, Passed: 2895, Skipped: 0, Total: 2895, Duration: 4m33s
```
✅ 2895/2895 PASS — **0 failure**

### Coverage tổng: 64.6% (324 files có instrument)

Coverage XML: `TestResults/ae29c07e-ba40-4b42-9397-83b382d927d8/coverage.cobertura.xml`

## Top files missed lines nhiều nhất (ưu tiên test tiếp theo)

| Missed | % | File |
|---:|---:|---|
| 1900 | 49% | `Cli/Tasks/TaskServer.cs` |
| 1418 | 50% | `Cli/Mcp/Tools/ManageViewTool.cs` |
| 1206 | 41% | `Cli/Mcp/Tools/ManageChartTool.cs` |
| 1206 | 39% | `Cli/Mcp/Tools/ManageReportTool.cs` |
| 982 | 38% | `Cli/Mcp/Tools/ManageFormTool.cs` |
| 962 | 23% | `Cli/Mcp/Tools/Command/CommandFlyout.cs` |
| 958 | 76% | `Cli/Mcp/Tools/ManageColumnTool.cs` |
| 956 | 49% | `Cli/Services/MetadataService.cs` |
| 942 | 68% | `Shared/Logic/TsForm.cs` |
| 846 | 29% | `Cli/Mcp/Tools/ManageDeletedRecordsTool.cs` |
| 812 | 32% | `Cli/Mcp/Tools/ManageRelationshipTool.cs` |
| 734 | 71% | `Shared/Logic/CSharpLateBound.cs` |
| 676 | 38% | `Cli/Mcp/Tools/ManageEnvironmentVariableTool.cs` |
| 646 | 32% | `Cli/Mcp/Tools/ManageWebResourceTool.cs` |
| 620 | 67% | `Shared/DevKitJson.cs` |
| 584 | 42% | `Cli/Mcp/Tools/CreateRecordsTool.cs` |
| 560 | 57% | `Cli/Mcp/Tools/GetSolutionComponentsTool.cs` |
| 522 | 47% | `Cli/Mcp/Tools/GetAuditHistoryTool.cs` |
| 508 | 53% | `Cli/Mcp/Tools/GetPluginsTool.cs` |
| 486 | 41% | `Cli/Mcp/Tools/ManageTableTool.cs` |
| 466 | 33% | `Cli/Mcp/Tools/ManageRecordFileTool.cs` |
| 464 | 0% | `Shared/ConnectionBuilder/FromPacConnectionBuilder.cs` |
| 438 | 22% | `Cli/Tasks/TaskPacSolutionPackager.cs` |
| 414 | 47% | `Cli/Mcp/Tools/Command/CommandListDetail.cs` |
| 414 | 83% | `Cli/Mcp/Tools/ManageRoleTool.cs` |
| 382 | 60% | `Cli/Mcp/Tools/GetTablesTool.cs` |
| 380 | 41% | `Cli/Mcp/Tools/Ribbon/RibbonMutateActions.cs` |
| 364 | 75% | `Shared/Helper.cs` |
| 364 | 36% | `Cli/Mcp/Tools/WhoAmITool.cs` |
| 364 | 21% | `Cli/Commands/DevKitCommand.cs` |
| 360 | 76% | `Cli/Tasks/TaskWebResource.cs` |
| 360 | 82% | `Cli/Mcp/Tools/Ribbon/RibbonFlyoutOperations.cs` |
| 350 | 86% | `Cli/Mcp/Tools/ManageAppTool.cs` |
| 348 | 19% | `Cli/Mcp/Tools/Command/CommandCreateUpdate.cs` |
| 342 | 56% | `Cli/Mcp/Tools/GetMessagesTool.cs` |
| 326 | 48% | `Cli/Mcp/Tools/GetFlowsTool.cs` |
| 310 | 61% | `Cli/Commands/McpCommand.cs` |
| 302 | 40% | `Cli/Mcp/Tools/PublishCustomizationsTool.cs` |
| 300 | 75% | `Cli/Mcp/Tools/GenerateDemoDataTool.cs` |
| 298 | 16% | `Cli/Tasks/TaskDataSource.cs` |

## Theo thư mục (missed lines)

| Missed | % | Thư mục (tổng lines instrumented) |
|---:|---:|---|
| 16848 | 58% | `Cli/Mcp/Tools` (40500) — vùng lớn nhất cần test |
| 3916 | 51% | `Cli/Tasks` (7998) |
| 2382 | 79% | `Shared/Logic` (11300) |
| 2236 | 38% | `Cli/Mcp/Tools/Command` (3586) |
| 1724 | 69% | `Cli/Mcp/Tools/Ribbon` (5560) |
| 1346 | 34% | `Cli/Commands` (2048) |
| 1206 | 18% | `Shared/ConnectionBuilder` (1478) |
| 1176 | 66% | `Shared/Services` (3438) |
| 1140 | 81% | `Cli/Mcp/Tools/Helper` (5992) |
| 1028 | 73% | `Shared` (3744) |
| 620 | 67% | `ProjectTemplates/CSharp/01.SharedProjectTemplate` (1860) |
| 620 | 86% | `Cli/Mcp/Tools/Form` (4282) |
| 294 | 0% | `Shared/ConnectionBuilder/Metadata` (294) |
| 274 | 4% | `Cli/CodeSigning` (286) |
| 260 | 50% | `Cli/Services` (522) |
| 204 | 0% | `Cli` root (204) |
| 188 | 83% | `Cli/Logging` (1100) |
| 170 | 43% | `Cli/Mcp` root (298) |
| 134 | 71% | `Cli/Mcp/Tools/SiteMap` (462) |
| 66 | 89% | `Cli/Mcp/Tools/App` (628) |
| 42 | 82% | `Cli/Models` (234) |
| 8 | 99% | `Shared/Models` (768) |
| 4 | 100% | `Cli/Mcp/Tools/Models` (2558) |
| 0 | 100% | `Cli/Exceptions` (16) |
| 0 | 100% | `Cli/Mcp/Resources` (2242) |

## Điểm sáng (đã cover tốt)

- 100%: `Mcp/Tools/Models`, `Mcp/Resources`, `Exceptions`
- 82–86%: `ManageRoleTool`, `ManageAppTool`, `RibbonFlyoutOperations`, `TaskWebResource`, `Form/`
- `Mcp/Tools/Helper` 81%, `Shared/Services` 66% và cải thiện liên tục qua các đợt sweep

## Context cho AI tiếp theo (2026-09-06+)

- Đợt sweep refactor + coverage CLI/Shared đang diễn ra: các tool manage_* đã được test full qua FakeXrmEasy (xem `DynamicsCrm.DevKit.Vsix.UnitTests/Cli/Mcp/` — mới nhất là `ManageColumn/`, `ManageChoice/`, `ManageRole/`).
- Gotcha đã biết (từ memory):
  - KHÔNG dùng Agent tool/fork/Workflow (aP cấm) — làm trực tiếp session chính.
  - Coverage runner chậm (~4m30s) → chạy background + `sleep`, không poll liên tục.
  - TestResults folder GUID thay đổi mỗi lần chạy → luôn lấy mới nhất.
  - Lệnh chỉ build/test đúng csproj UnitTests, KHÔNG build full solution (CLAUDE.md rule).
- Ưu tiên kế hoạch đề xuất (theo missed lines + khả thi với FakeXrmEasy):
  1. `Cli/Mcp/Tools/Command/` (38%, 2236 missed) — CommandFlyout/CommandCreateUpdate/CommandListDetail
  2. `ManageViewTool`, `ManageChartTool`, `ManageReportTool`, `ManageFormTool` (các tool lớn 39–50%)
  3. `Cli/Tasks/` (TaskServer 49%, TaskDataSource 16%, TaskPacSolutionPackager 22%) — khó hơn vì side-effect disk/network, cân nhắc interface seam như các tool đã refactor
  4. `Shared/ConnectionBuilder/` (18%) — phụ thuộc PAC CLI, cần fake/mock
