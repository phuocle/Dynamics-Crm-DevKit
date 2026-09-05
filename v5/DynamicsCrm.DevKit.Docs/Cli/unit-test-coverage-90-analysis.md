# Phân tích: Đưa unit test coverage của CLI lên ≥ 90%

> Ngày phân tích: 2026-09-04 · Phạm vi: `DynamicsCrm.DevKit.Cli` (net10.0, gồm cả code link từ `DynamicsCrm.DevKit.Shared`) · **Không thay đổi code production nào** — đây chỉ là phân tích + đề xuất.

---

## 1. Tóm tắt (TL;DR)

Trả lời trực tiếp 2 giả thuyết:

| Giả thuyết | Kết luận |
|---|---|
| **"FakeXrmEasy không inject được `ServiceClient`"** | ✅ **ĐÚNG — và đây là blocker #1**, chiếm phần lớn vùng chưa test được. Nhưng **có lối thoát sạch**: `ServiceClient` implement 3 interface chuẩn, và FakeXrmEasy v9 cũng tạo được 3 interface đó → chỉ cần đổi kiểu dependency từ class concrete sang interface. |
| **"Quá nhiều private static method"** | ✅ **ĐÚNG nhưng chỉ là vấn đề thứ yếu** (636 `private static` trong 75 file). Nó khiến test phải dùng reflection (dễ gãy), nhưng **không ngăn** test được như `ServiceClient`. |

**Con số hiện tại (đo thật, 2026-09-04):**
- `dotnet test -f net10.0 --collect:"XPlat Code Coverage"`: **2674 passed / 0 failed / 4 skipped** (2m07s)
- **Line coverage toàn assembly: 56.5%** (28,645 / 50,671 dòng)
- Để đạt **90%** cần cover thêm **~16,959 dòng** nữa (mục tiêu ≥ 45,604 dòng).

**Lộ trình khả thi (4 phase):** seam `ServiceClient` → interface (mở khóa ~18k dòng) → tách pure logic khỏi private static (InternalsVisibleTo đã có sẵn) → seam cho console/file/process/network → gán coverage gate. Chi tiết ở §5.

---

## 2. Hiện trạng đo lường

### 2.1. Lệnh đo đã chạy

```powershell
cd DynamicsCrm.DevKit.UnitTests
dotnet test -f net10.0 --collect:"XPlat Code Coverage" --results-directory ./TestResults
# Kết quả: Passed: 2674, Failed: 0, Skipped: 4, Total: 2678
# Report: TestResults/<guid>/coverage.cobertura.xml
```

### 2.2. Coverage theo khu vực (đã gộp compiler-generated state machine vào class gốc)

| Khu vực | Covered | % | Dòng thiếu | Ghi chú |
|---|---|---|---|---|
| `Cli.Mcp` (38 tools + helpers) | 19,483 / 33,033 | **59.0%** | 13,550 | Miếng bánh lớn nhất |
| `Cli.Tasks` (TaskServer, TaskWebResource, ...) | 984 / 3,999 | **24.6%** | 3,015 | TaskServer thiếu 1,590 dòng |
| `Cli.Commands` | 351 / 1,024 | 34.3% | 673 | Phần lớn là connect/validation |
| `Cli.CodeSigning` | 6 / 143 | 4.2% | 137 | External signing tool |
| `Cli.Program` | 0 / 102 | 0% | 102 | `Main` — không test được |
| `Shared.Services` (`DeploymentService`, `MetadataService`) | 254 / 1,712 | **14.8%** | 1,458 | `DeploymentService` **0%** (457 dòng) |
| `Shared.ConnectionBuilder` | 136 / 886 | 15.3% | 750 | MSAL/PAC auth — cần network thật |
| `Shared.Logic` (JsForm/TsForm/CSharpLateBound...) | 4,459 / 5,650 | 78.9% | 1,191 | Pure codegen — dễ nâng |
| `Shared.Helper` / `FileHelper` / `JsonHelper` | ~tốt | 74–100% | ~170 | |
| `Microsoft.Xrm.Sdk.DevKitJson` | 620 / 930 | 66.7% | 310 | |
| `Shared.XrmHelper` | 21 / 112 | 18.8% | 91 | Static counters + cache |
| **TỔNG** | **28,645 / 50,671** | **56.5%** | **22,026** | |

### 2.3. Top class thiếu coverage (sắp xếp theo số dòng miss)

| Miss | % hiện tại | Class |
|---|---|---|
| 1,590 | 15.0% | `Tasks.TaskServer` |
| 1,120 | 41.1% | `Mcp.Tools.ManageCommandTool` |
| 907 | 2.6% | `Shared.Services.MetadataService` |
| 861 | 56.3% | `Mcp.Tools.ManageColumnTool` |
| 809 | 32.8% | `Mcp.Tools.ManageRoleTool` |
| 713 | 41.3% | `Mcp.Tools.ManageAppTool` |
| 709 | 50.0% | `Mcp.Tools.ManageViewTool` |
| 603 | 41.5% | `Mcp.Tools.ManageChartTool` |
| 603 | 39.2% | `Mcp.Tools.ManageReportTool` |
| 597 | 19.2% | `Tasks.TaskWebResource` |
| 491 | 37.9% | `Mcp.Tools.ManageFormTool` |
| 471 | 67.6% | `Shared.Logic.TsForm` |
| 457 | **0.0%** | `Shared.Services.DeploymentService` |
| 448 | 51.7% | `Mcp.Tools.ManageRibbonTool` |
| 428 | 42.9% | `Mcp.Tools.ManageChoiceTool` |
| 423 | 29.1% | `Mcp.Tools.ManageDeletedRecordsTool` |
| 406 | 32.1% | `Mcp.Tools.ManageRelationshipTool` |
| 232 | 0.0% | `Shared.ConnectionBuilder.FromPacConnectionBuilder` |
| 219 | 21.5% | `Tasks.TaskPacSolutionPackager` |

**Nhận xét:** 3 khu vực `Mcp` + `Tasks` + `Shared.Services` chiếm **18,023 / 22,026 dòng thiếu (~82%)**. Cả 3 đều bị khóa bởi **cùng 1 nguyên nhân gốc: dependency vào concrete `ServiceClient`**.

---

## 3. Phân tích nguyên nhân gốc

### 3.1. Blocker #1: Concrete `ServiceClient` ở khắp nơi (giả thuyết 1 — ĐÚNG)

**Hiện trạng:**
- Cả 38 MCP tool đều nhận concrete class trong constructor: `ManageRoleTool(ServiceClient serviceClient, ...)`, `ExecuteFetchXmlTool(ServiceClient)`, ...
- `McpServerHost` đăng ký DI bằng concrete type: `builder.Services.AddSingleton(_serviceClient);` (`Mcp/McpServerHost.cs:65`)
- `Shared`: `DeploymentService(ServiceClient)`, `MetadataService(ServiceClient)`
- `Tasks`: `TaskServer.ServiceClient { get; set; }` public property, gán từ `CommandLineArgs`
- **FakeXrmEasy v9 KHÔNG tạo được `ServiceClient`** — nó chỉ cho `context.GetOrganizationService()` (kiểu `IOrganizationService`).

**Đã verify bằng reflection trên đúng package `Microsoft.PowerPlatform.Dataverse.Client 1.2.26`:**

```
ServiceClient implements: IOrganizationService, IOrganizationServiceAsync, IOrganizationServiceAsync2, IDisposable
RetrieveMultiple/Execute/Create/Update/Delete: virtual=True final=True   ← sealed-override, KHÔNG override được
```

- Class **không sealed** nhưng các CRUD method là **`final virtual`** → không thể subclass-override để giả lập. (Đã có test tài liệu hóa điều này: `DynamicsCrm.DevKit.UnitTests/Cli/ServiceClientTestDoubleViabilityTests.cs`.)
- Có 1 **seam ẩn**: property **internal** `_testOrgSvcInterface : IOrganizationService` (Microsoft dùng cho test nội bộ của họ). Experiment `ManageRoleFakeXrmEasyExperimentTests.cs` đã chứng minh set được qua reflection (`RuntimeHelpers.GetUninitializedObject` + ghi backing field) nhưng test đang `[Ignore]` vì: internal API không document (gãy khi upgrade package), `GetUninitializedObject` bỏ qua mọi init, và **chưa verify** async path (`RetrieveMultipleAsync`, `ExecuteAsync` — vốn là path chính của `TaskServer`) có đi qua hook này không. → Không nên dùng làm chiến lược chính.

**Lối thoát sạch (đã verify):**

```
FakeXrmEasy v9 XrmFakedContext:
  GetOrganizationService()       → IOrganizationService          (sync CRUD + Execute)
  GetAsyncOrganizationService()  → IOrganizationServiceAsync     (async CRUD + Execute)
  GetAsyncOrganizationService2() → IOrganizationServiceAsync2    (async, gồm CreateAndReturnAsync)
```

`ServiceClient` và FakeXrmEasy **cùng implement 3 interface này** → nếu tool/task phụ thuộc interface thay vì concrete class, FakeXrmEasy inject được **trực tiếp, không hack**.

**Điểm cần xử lý thêm:** code còn dùng vài member riêng của `ServiceClient` không nằm trong interface — đếm được ~19 site trong Cli: `CallerId` (impersonation), `ConnectedOrgFriendlyName/UniqueName/Version/ConnectedOrgUriActual` (banner), `IsReady/LastError` (connect check), `MaxConnectionTimeout` (static). Những cái này thuộc **tầng kết nối** (`DevKitCommand`, `McpCommand`, `McpServerHost`), không thuộc business logic của tool → giữ `ServiceClient` ở tầng đó, tool chỉ nhận interface. `CallerId` có thể đưa vào `McpExecutionContext`/wrapper nhỏ.

### 3.2. Vấn đề #2: private static quá nhiều (giả thuyết 2 — ĐÚNG nhưng thứ yếu)

- **636 `private static` trong 75 file** của Cli.
- Hệ quả đang thấy trong test suite hiện tại: test phải reflection nặng —
  `ManageWebResourceToolTests` lấy `TypeFilterMap`, `EscapeXml`, `NullIfEmpty` qua `BindingFlags.NonPublic | Static`; `GetTablesToolTests` invoke `FormatEntityDetail`/`FormatOptionsWithLimit` qua reflection, thậm chí truyền `null!` cho `MetadataService` và bắt `NullReferenceException` để "test gián tiếp".
- Reflection test **rất dễ gãy** (đổi tên private method = test fail dù behavior không đổi) và viết chậm.
- **Nhưng**: private static **không phải** lý do khiến 43% code không test được — phần lớn vùng thiếu là các method **gọi `serviceClient.*`** (bị chặn bởi §3.1), hoặc static **có side-effect** (`PublishHelper`, `RoleBackupHelper` ghi file, `Helper` file-IO/encrypt).
- May là `DynamicsCrm.DevKit.Cli.csproj` **đã có `InternalsVisibleTo("DynamicsCrm.DevKit.UnitTests")`** → chỉ cần nới `private static` → `internal static` là test được trực tiếp, không cần reflection. Chi phí thấp, rủi ro thấp.

### 3.3. Các coupling còn lại (theo thứ tự ảnh hưởng)

| # | Coupling | Vị trí | Ảnh hưởng |
|---|---|---|---|
| 1 | **Static mutable state** | `XrmHelper.COUNT_*`, `XrmHelper.EntitiesMetadata` (static, shared toàn process) | Test chạy song song dẫm nhau; phải reset thủ công. Cũng đang là "feature" để test offline (Walkthrough.md) — tức test phụ thuộc vào global cache, rất mong manh. |
| 2 | **Console static** | `SpectreLog` static — 254 chỗ `Console.`/`AnsiConsole.`/`Process.` trong Cli | Không capture/assert output được trừ khi redirect. Spectre.Console có sẵn seam `IAnsiConsole`/`TestConsole` nhưng chưa dùng. |
| 3 | **External process** | `TaskPacSolutionPackager`/`TaskModelBuilder` (PAC CLI), `CodeSigner` (sign tool), `Helper.SignAssemblyAsync/SignPackageAsync` (0–9% covered) | Không unit test được — cần abstraction `IProcessRunner` hoặc tách phần build command-line (pure) ra test, phần exec giữ mỏng. |
| 4 | **Network/MSAL auth** | `Shared.ConnectionBuilder.*` (15.3% covered), `UpdateChecker` (HTTP nuget.org) | Interactive/DeviceCode/FromPac cần user + network thật → vùng này nên **exclude khỏi mục tiêu 90%** hoặc chỉ test phần build connection string (pure). |
| 5 | **Validation trộn side-effect** | `DevKitCommand.IsValidAsync()` vừa validate vừa **connect** (176–216) | Không test validation được mà không connect thật. |
| 6 | **File system trực tiếp** | `Helper.GetFiles`, `FileHelper`, backup helpers ghi `.devkit/` | Test được nhưng chậm/dơ; nên giới hạn ở integration-style tests với temp dir. |
| 7 | **`Program.Main`** | 102 dòng, 0% | Entry point — bỏ qua hoặc smoke-test bằng `--help`. |

---

## 4. Toán học của mục tiêu 90%

- Mục tiêu: `0.90 × 50,671 = 45,604` dòng covered → thiếu **16,959** dòng.
- Nguồn dòng khả dụng sau khi mở seam §3.1:

| Hành động | Dòng mở khóa (ước tính) |
|---|---|
| Đổi ctor 38 MCP tools sang interface + test bằng FakeXrmEasy | ~12,000–13,000 (trong 13,550 miss của Mcp) |
| `DeploymentService` + `MetadataService` sang interface | ~1,300 (trong 1,458 miss) |
| `TaskServer` + `TaskWebResource` sang interface | ~2,200 (trong 3,015 miss của Tasks) |
| Nới private static → internal + bỏ reflection tests | ~1,000 (nằm rải rác trong Mcp/Logic) |
| TestConsole + tách validation khỏi connect | ~600 (Commands + SpectreLog) |
| **Tổng khả quan** | **~17,000–18,000** ✅ đủ để chạm 90% |

- Vùng đề xuất **exclude** khỏi denominator (không thể/không nên unit test): `Program` (102), `ConnectionBuilder` phần auth thật (~600 trong 750), `CodeSigning` exec (137), `UpdateChecker.GetLatestVersionFromNuGetAsync`. Nếu exclude ~900 dòng này, mục tiêu thực tế dễ hơn nữa (90% của 49,771 = 44,794 → thiếu ~16,150).

---

## 5. Lộ trình đề xuất (chưa thực hiện — chờ quyết định)

### Phase 1 — Seam `ServiceClient` → interface (ROI cao nhất, mở ~15k dòng)

1. Định nghĩa cách dùng: ưu tiên **`IOrganizationServiceAsync2`** (có đủ `CreateAsync/RetrieveAsync/RetrieveMultipleAsync/UpdateAsync/DeleteAsync/ExecuteAsync/CreateAndReturnAsync`) + `IOrganizationService` khi cần sync `Execute`.
2. Đổi signature ctor 38 tools + `DeploymentService`/`MetadataService`/`TaskServer`: `ServiceClient` → interface. `ServiceClient` thỏa mãn sẵn nên **callsite production không đổi behavior**.
3. `McpServerHost` DI: `AddSingleton<ServiceClient>` + `AddSingleton<IOrganizationServiceAsync2>(sp => sp.GetRequiredService<ServiceClient>())` (và tương tự).
4. Member riêng của `ServiceClient` (CallerId, ConnectedOrg*, IsReady) gom về tầng Command/Host; cái nào tool thật sự cần (CallerId impersonation) → đưa vào `McpExecutionContext` hoặc interface wrapper nhỏ `IConnectionInfo`.
5. Test: mỗi tool 1 base test class dựng `XrmFakedContext` → `GetAsyncOrganizationService2()` → new tool → gọi method → assert trên data in-memory. FakeXrmEasy v9 hỗ trợ FetchXml, QueryExpression, metadata (InitializeMetadata), fake messages — đủ cho hầu hết tool.

⚠️ Rủi ro cần spike trước (1–2 giờ): verify FakeXrmEasy v9.3.9.4 xử lý đủ các message đặc thù mà tools dùng (`PublishXmlRequest`, `RetrieveEntityRequest`/`RetrieveAttributeRequest` metadata, `ExecuteFetchRequest`, `WhoAmIRequest`, `DeleteAndPromoteRequest`...). Message nào FakeXrmEasy chưa có executor thì phải đăng ký custom executor — làm được nhưng tốn effort.

### Phase 2 — Pure logic ra khỏi private static (mở ~1k dòng + làm test bền)

- Nới `private static` → `internal static` cho các hàm pure (build XML, parse, format, validate input). `InternalsVisibleTo` đã có sẵn → **zero-risk**.
- Static helper có side-effect (`PublishHelper`, `RoleBackupHelper`, `ViewBackupHelper`) → instance class nhận interface từ Phase 1.
- `XrmHelper` static state → instance hoặc reset-hook rõ ràng cho test.

### Phase 3 — Seam môi trường (mở ~1.5k dòng)

- `SpectreLog` → inject `IAnsiConsole` (Spectre có `TestConsole` để assert output), hoặc tối thiểu giữ static facade nhưng đẩy logic format thành pure function trả string (test string, không test console).
- Process exec (`CodeSigner`, PAC) → `IProcessRunner`; test phần build args (pure), exec giữ mỏng.
- Tách `DevKitCommand.IsValidAsync`: validate (pure, test được) tách khỏi connect (side-effect).
- `UpdateChecker`/HTTP → interface nhỏ; hoặc exclude.

### Phase 4 — Gate & thứ tự làm

- Viết test theo thứ tự bảng §2.3 (miss nhiều nhất trước): `TaskServer` → `ManageCommandTool` → `MetadataService` → `ManageColumnTool` → ...
- Gán coverage gate trong CI: `--collect` + fail nếu line-rate < 0.90 (sau khi config exclude Program/auth/exec).

---

## 6. Quyết định cần chủ project duyệt

1. **Chiến lược seam**: (a) đổi ctor sang interface chuẩn — khuyến nghị; (b) reflection `_testOrgSvcInterface` — zero production change nhưng fragile, không khuyến nghị làm chiến lược chính; (c) wrapper `IServiceClient` tự định nghĩa — boilerplate lớn, chỉ chọn nếu cần giữ nguyên 100% signature.
2. **Phạm vi denominator 90%**: có exclude `Program` / auth builders / external exec không?
3. **Mức độ refactor chấp nhận được**: Phase 1 đụng ctor của 38 tools + 2 services + DI registration — đây là thay đổi production có chủ đích (không đổi behavior), cần xác nhận trước khi làm.

---

## 7. Phụ lục — Bằng chứng kỹ thuật đã verify trong phiên phân tích này

| Khẳng định | Cách verify | Kết quả |
|---|---|---|
| CRUD methods của `ServiceClient` là final virtual | Reflection trên package 1.2.26 | `virtual=True final=True` cho RetrieveMultiple/Execute/Create/Update/Delete |
| `ServiceClient` implement interface chuẩn | Reflection | `IOrganizationService, IOrganizationServiceAsync, IOrganizationServiceAsync2, IDisposable` |
| FakeXrmEasy v9 tạo được interface tương ứng | Reflection trên `FakeXrmEasy.Core.dll` 3.9.4 | `GetOrganizationService()`, `GetAsyncOrganizationService()`, `GetAsyncOrganizationService2()` |
| Seam ẩn `_testOrgSvcInterface` tồn tại | Reflection | internal property, setter internal — chỉ dùng được qua reflection |
| Coverage hiện tại | `dotnet test --collect` | 56.5% (28,645/50,671), 2674 passed / 0 failed / 4 skipped |
| Số `private static` | Grep | 636 occurrences / 75 files trong Cli |
| Member `ServiceClient`-specific ngoài interface | Grep | ~19 site trong Cli (CallerId, ConnectedOrg*, IsReady, MaxConnectionTimeout) |
