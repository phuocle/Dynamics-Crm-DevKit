# P.2 — Console Project Template (net462)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/P.2.Console.md`
> **Điều kiện tiên quyết:** `0.md` + `P.1.Shared.md` (dùng `$SharedProject$`, `$SharedNameSpace$`…).
> **Trạng thái:** ✅ **HOÀN THÀNH 2026-10-25 — ĐÃ ĐƯỢC USER DUYỆT 2026-10-25** (CLI 0 err/0 warn, VSIX net48 build pass, 21/21 test Templates mới, full Cli.UnitTests **4750/4750** — baseline 4729 + 21, global devkit released + demo thật TestAllInOneCli theo từng AuthType + project sinh ra `dotnet build` pass). Chi tiết: xem "Kết quả thực thi" bên dưới.
> **Làm xong file này mới được qua:** `P.3.ConsoleCore.md` (chờ user duyệt)

## Kết quả thực thi (cập nhật sau khi làm xong — 2026-10-25)

### Đã giao những gì

| Hạng mục | Kết quả |
|---|---|
| Handler | `DynamicsCrm.DevKit.Shared/Templates/Handlers/ConsoleProjectTemplateHandler.cs` — 7 payload file theo `.vstemplate` (csproj/README/App.cs/Program.cs/App.config/Lib Helper+TracingServiceFake), chọn biến thể `App.cs`/`App.config` theo connectionType, enforce restriction net462, đăng ký vào `TemplateHandlers.RegisterAll()` (id `Console`, order 2) |
| Manifest + embed | `.projitems` thêm 1 EmbeddedResource: `README.md` của template Console (110 → 111; 6 file kia đã embed sẵn từ bước 0, LogicalName `Resources.templates.project.console.*`) |
| Connection | Nhánh Console của `Replacement.SetEmbeddedResourceAsync` **đã có sẵn trong TokenEngine từ bước 0** — P.2 chỉ tách thành 2 public method `SetConsoleResourceTokensAsync`/`SetConsoleCoreResourceTokensAsync` (P.3 dùng luôn) + normalize connectionType qua `ConnectionTypeRegistry` (resource lookup phân biệt hoa/thường) |
| CLI prompt | `DynamicsCrm.DevKit.Cli/Tasks/ConnectionPrompter.cs` — AuthType SelectionPrompt (lọc theo `SupportedConnectionTypes` của template, type từ `.env` đưa lên đầu làm default) → câu hỏi theo AuthType **đọc từ `IConnectionTypeMetadata.Fields`** (label/order/required giống FormConnection; secret prompt masked; URL validate http/https; default Url/ClientId/Username gợi ý từ `.env`) → câu hỏi "Use the project .env values?" (default Y khi .env đủ giá trị) cho ra marker connection y như checkbox UseProjectEnvironment của VSIX. FromPac chọn PAC profile qua `PacProfileHelper`. `TaskNew` gọi cho Console khi TTY + không `--offline` |
| Fallback non-interactive | Handler tự resolve khi `CrmConnection == null`: marker từ `.env` (`SolutionMutator.ConnectionFromProjectEnvironment` — P.1 private → public) → nếu không có `.env` thì bake placeholder `ClientSecret` (giá trị rỗng). Validation DeviceCode/FromPac chạy cho MỌI nguồn (port message FormProject) |
| SolutionMutator | `AddProjectToSolutionAsync` thêm tham số `sharedProjectFile` (optional): thêm **consumer line** `{path}.projitems*{project-guid-lowercase}*SharedItemsImports = 5` vào `GlobalSection(SharedMSBuildProjectFiles)` (bằng chứng v4 TestPluginPackage/Dev.DevKit.sln); GUID của consumer line = GUID entry sln (đọc entry có sẵn qua `ReadProjectGuidFromSolution`, mint khi mới — không sinh GUID lệch khi project đã tồn tại); tách `EnsureSharedMsBuildProjectFileEntry` dùng chung cho owner (=13) lẫn consumer (=5). `.slnx` không có section này (đúng format thật) |
| WorkspaceScanner | `WorkspaceContext` thêm `SharedProjectFile` (đường dẫn đầy đủ shproj — scanner trả file thay vì chỉ tên) để handler truyền consumer line; `SharedProjectName` suy từ nó |
| Test | `ConsoleProjectTemplateHandlerTests.cs` mới (21 test: manifest 7 file + ReplaceParameters flags; DataRow 4 AuthType so App.cs/App.config **đúng byte với resource + token** + payload chung; explicit values thay App.config thật + không comment; null connection → .env marker; .env DeviceCode/Bogus → error; unknown type → `NotSupportedException` như VSIX; sln entry + 4 config entries + consumer line cùng GUID; Console-trước-Shared → rerun gắn consumer line vào GUID entry cũ; không Shared → không consumer line + không tạo Cli.json/DevKit.json (đúng Console.cs VSIX); .slnx entry Path-only; BOM theo payload từng file; rerun skip + `--force`) |
| Build/Test | `dotnet build` CLI **0 err / 0 warn**; VSIX build VS MSBuild 18 Enterprise **pass** (net48 OK); Templates 21/21 mới, full Cli.UnitTests **4750/4750** (~26s) — không regression (baseline 4729) |
| Release + demo | `Release.DynamicsCrm.DevKit.Cli.ps1` OK — devkit global `4.44.44.44 Build: 25.10.2026 12:26:18`, SHA `D0A713EB…`, nupkg + manifest dưới `Published/4.44.44.44/`, Const.cs restore `xxxx.yy.zz HH.mm.ss`. Demo thật vào `TestAllInOneCli` (non-interactive → .env ClientSecret marker của aP): 7 file + slnx entry **IDENTICAL format với reference** `TestAllInOne/Dev.AllInOne.slnx`; `.env` md5 `52cfb0b7…` KHÔNG ĐỔI qua 2 lần chạy; rerun 8 skipped exit 0. Demo per-AuthType bằng global tool (temp .sln + .env mỗi loại): Interactive/OAuth/AD sinh đúng biến thể App.cs + đúng keys + comments App.config; owner + consumer line đúng format v4; **GUID entry = GUID consumer (6/6 occurrences)**; **không sót `$token$`**; **project sinh ra `dotnet build` PASS** (net462 thật, import Shared projitems + restore NuGet) |
| Docs | `DynamicsCrm.DevKit.Docs/Cli/new.md` thêm Console (Ready) vào Hiện trạng + Synopsis + Examples |

### So sánh chuẩn đối chiếu (payload nguồn + token) — TestAllInOneCli

| File | Kết quả so payload+token | So reference VSIX (`TestAllInOne/Dev.AllInOne.Console`) |
|---|---|---|
| `App.cs` | IDENTICAL (resource ClientSecret + `$NameSpace$`) + BOM (payload App.cs có BOM) | SAME content; reference chỉ thêm 2 dòng aP sửa tay (`UseWebApi = false` khi probe Web API) |
| `App.config` | IDENTICAL (giá trị rỗng + 3 comment `.env` — marker UseProjectEnvironment) | IDENTICAL từng byte |
| `Program.cs` | IDENTICAL (resource + `$NameSpace$`) + BOM | reference bị aP **rewrite hoàn toàn** thành tool probe recycle-bin (không so được); BOM reference thiếu là do rewrite tay |
| `Lib/Helper.cs`, `Lib/TracingServiceFake.cs` | IDENTICAL + BOM (Helper: BOM từ payload — resource không BOM) | IDENTICAL (Helper/TracingService nguyên vẹn) |
| `Dev.AllInOne.Console.csproj` | IDENTICAL (template + 8 token: namespace/project/year/DevKitVersion/3 NuGet/SharedProject) | chỉ khác build timestamp + 2 `<Reference>` System.Windows.Forms aP thêm tay cho probe |
| `README.md` | IDENTICAL verbatim payload (`Build: xxxx.yy.zz HH.mm.ss` giữ nguyên — ReplaceParameters=false) | reference có build date thật vì **VSIX release script** thay placeholder trong payload README (`DevKit.ReleaseConfig.json` dateReplacement); CLI release chỉ thay Const.cs → giữ placeholder (giống P.1 Shared) |
| `Dev.AllInOne.slnx` | entry `<Project Path="Dev.AllInOne.Console/Dev.AllInOne.Console.csproj" />` | IDENTICAL format |

### Các lệch so với thiết kế gốc của file này (đã được user thông báo khi bàn giao)

1. **Interface là `ITemplateHandler`** như P.1 (bước 0 xây), không phải `IProjectTemplateHandler` như mục 4 phác — giữ interface thật của engine.
2. **TokenEngine Console đã có sẵn từ bước 0** (nhánh connectionType trong `SetEmbeddedResourceTokensAsync`) — mục 5 "TokenEngine hỗ trợ nhánh resource Console" chỉ còn việc tách public method + normalize type, không port lại từ Replacement.cs.
3. **Connection prompt lọc AuthType theo template** thay vì hiện đủ 6 rồi báo lỗi như FormProject: Console chỉ hiện Interactive/ClientSecret/OAuth/AD (DeviceCode/FromPac bị loại khỏi SelectionPrompt vì net462 không hỗ trợ — enforcement error vẫn giữ cho nguồn không-prompt). UX tốt hơn, same restriction.
4. **Non-interactive / `--offline` không hỏi mà tự resolve**: `.env` có `DEVKIT_AUTH_TYPE` → marker connection (UseProjectEnvironment=true — đúng hình reference aP); không có → bake `ClientSecret` placeholder giá trị rỗng. Spec không định nghĩa hành vi non-interactive; cách này khớp auth-priority chuẩn của devkit (`.env` fallback) và cho AI/CI chạy deterministic được.
5. **Connection không lưu vào DynamicsCrm.DevKit.json**: Console wizard của VSIX **không** gọi `AddDynamicsCrmDevKitCliJsonAsync` (chỉ Shared.cs gọi) — handler port đúng, KHÔNG tạo Cli.json/DevKit.json (đã test). Cli.json/DevKit.json có trong TestAllInOneCli là do P.1 scaffold Shared.
6. **Unknown connection type throw `NotSupportedException` từ `CliArgsBuilder.Build`** (engine build token bat trước khi handler validate được) — **đúng parity VSIX** (Replacement.SetAsync cũng throw); message rõ ràng. Riêng đường `.env` marker thì handler bắt được và trả error sạch với danh sách Supported types (không qua CliArgsBuilder).
7. **README.md giữ build-date placeholder**: CLI release không chạy bước dateReplacement của `DevKit.ReleaseConfig.json` (chỉ thay Const.cs) — output = payload nguồn verbatim. Reference có date thật vì sinh từ VSIX release. Nếu muốn CLI cũng thay date thật → mở rộng release script sau (out of scope, báo aP).
8. **Không sinh `.snk`** (đã kiểm tra `Console.cs` — không có SigningHelper; đúng mục 2 "nếu có thì theo P.4") và **payload Console không có bat/sh** (mục 5 "kiểm tra lại" — đúng, không có gì phải sinh `.sh`).
9. **CA2022 pre-existing ở HEAD** (`FileStream.Read` inexact trong `AddProjectToSlnx` + 2 test cũ): do SDK analyzer mới, KHÔNG phải do P.2; site trong `SolutionMutator` đã fix luôn (file đang sửa) bằng read-loop netstandard2.0; 2 site trong test cũ giữ nguyên (báo aP, ngoài phạm vi).
10. **VSIX hội nhập** (handler được wizard VSIX gọi lại): chưa làm — đúng spec P.1 mục 4 "optional, sau".

### Bài học kỹ thuật (cho các file P.*/I.* sau)

- **Payload Console = file 1-token** (`App.cs` chứa đúng `﻿$App.cs$`, `App.config.template` chứa `$App.config$`): BOM của OUTPUT theo **payload file** (App.cs có BOM → output có BOM), còn nội dung là resource (StreamReader strip BOM resource) → không bao giờ double-BOM. TracingServiceFake: cả payload lẫn resource đều có BOM nhưng vẫn ra đúng 1 BOM.
- **`$NameSpace$` resolve ở OUTER pass, không phải lúc nested**: `SetEmbeddedResourceTokensAsync` chạy trước khi `AddProjectTokensAsync` set `$NameSpace$` (mirror đúng thứ tự VSIX `Replacement.SetAsync`) — resource App.cs/App.config giữ `$NameSpace$` sót, thay tiếp ở pass render payload. Dictionary add-only giữ insertion order nên `$App.cs$` (set trước) luôn được thay trước `$NameSpace$` (set sau) — cùng giả định ngầm với pipeline VSIX.
- **`$year$` là host parameter của VS** (VS tự thay, không có trong Replacement.cs) — handler phải tự mint như `$guid1$` của P.1. Test dùng `DateTime.Now.Year` động.
- **Consumer line `.sln` (`SharedItemsImports = 5`) lấy GUID của ENTRY sln, không phải GUID trong csproj** (SDK-style csproj không có ProjectGuid — VS mint khi add vào solution). Vì vậy `AddProjectToSolutionAsync` phải đọc GUID entry có sẵn (`ReadProjectGuidFromSolution`) trước khi mint — kịch bản Console-scaffold-trước-Shared cần đường này để rerun không sinh GUID lệch.
- **`.slnx` KHÔNG có GlobalSection(SharedMSBuildProjectFiles)** — consumer line chỉ áp dụng `.sln`; reference `Dev.AllInOne.slnx` xác nhận csproj = Path-only, không Id.
- **TestAllInOne reference folder là test-bed bị sửa tay** (Program.cs rewrite thành probe tool, App.cs thêm `UseWebApi = false`, csproj thêm System.Windows.Forms references, probe files) — KHÔNG dùng làm chuẩn so byte; chuẩn vẫn là **payload nguồn + token**. Chỉ App.config + README + slnx + csproj (trừ phần sửa tay) nguyên vẹn để đối chiếu.
- **Sed so token `$X$` phải single-quote** (P.1 lesson vẫn đúng): `sed 's/\$NameSpace\$/.../g'` — double-quote làm `$` thành anchor → không match. So BOM: diff text sẽ hiện khác dòng 1 dù content đúng — kết luận BOM phải xem bytes (`xxd`), không qua diff.
- **NuGet version trong test = DefaultVersions deterministic** (không network): `NuGetHelper.SetReplacementAsync` dùng DefaultVersions khi cache trống — Analyzers 4.44.44.44 / Dataverse.Client 1.2.10 / NSubstitute 5.3.0 assert cứng được.
- **Spectre prompt từ chối terminal không TTY** ("Cannot show selection prompt") — `-i` ép prompt nhưng piped-stdin vẫn fail rõ ràng, không treo; interactive thật chỉ chạy trong terminal người dùng (aP tự chạy thử). Non-interactive path tự resolve qua `.env` nên AI/CI không cần TTY.

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ProjectTemplates/Console.cs` |
| Payload | `ProjectTemplates/CSharp/02.ConsoleProjectTemplate/` — `ProjectTemplate.csproj.template`, `App.cs`, `App.config.template`, `Helper.cs`, `Program.cs`, `TracingServiceFake.cs`, `Properties/AssemblyInfo.cs`, `README.md` |
| Manifest VS | `CSharpConsoleProjectTemplate.vstemplate` |
| Form input | `Lib/Forms/FormProject.xaml(.cs)` (`ProjectType.Console` — hỏi thêm loại kết nối) |
| Token | `Replacement.cs` — `SetEmbeddedResourceAsync` (nhánh Console) |

## 2. Template tạo ra gì

Project console **net462** (SDK-style csproj từ `ProjectTemplate.csproj.template`) kết nối Dataverse: `Program.cs`/`App.cs`/`Helper.cs` + `App.config`. Điểm quan trọng nhất: **nội dung `App.cs` + `App.config` phụ thuộc loại kết nối** (Interactive/ClientSecret/OAuth/AD/FromPac…):

- `$App.cs$` ← resource `cs.console.App.{connectionType}.cs` (đã áp token lồng — `ApplyReplacements`).
- `$App.config$` ← resource `cs.console.App.config.{connectionType}`.
- Token connection (`$AuthTypeValue$`, `$UrlValue$`, `$ClientIdValue$`… + 5 token comment `.env` `$UrlConfigComment$`…) điền giá trị thật từ form.
- NuGet versions (18 package trong `AddNuGetAsync`).
- Không sinh `.snk` (kiểm tra lại `Console.cs` — nếu có thì theo P.4).

Tất cả nằm trong `DynamicsCrm.DevKit.Shared/Resources/cs/` — **đã sẵn Shared, không cần di chuyển**.

## 3. Logic wizard hiện tại

Mở `FormProject(ProjectType.Console)` (chọn AuthType + URL + credential…) → check trùng tên project → `Replacement.SetAsync` (điền token + resource theo connectionType) → VS copy payload + thay token → `ProjectFinishedGenerating` đổi tên project. Chi tiết: đọc `Console.cs` trước khi làm.

## 4. Thiết kế source of truth

- Handler `ConsoleProjectTemplateHandler : IProjectTemplateHandler` trong `Shared/Templates/Handlers/`.
- Input DTO: `ProjectTemplateInput` + trường `CrmConnection` (type/url/username/password/clientid/secret/pacprofile/UseProjectEnvironment) — map 1-1 từ `CrmConnection` model sẵn có trong Shared.
- Token resource theo connectionType: đưa nguyên nhánh Console của `SetEmbeddedResourceAsync` vào `TokenEngine` (nhận DTO thay form) — **chung cho VSIX sau này**.

## 5. Việc phải làm (CLI)

- [x] Handler + manifest (id `Console`, order 2) + embed payload.
- [x] `TokenEngine` hỗ trợ nhánh resource Console (App.cs/App.config theo AuthType + token lồng) — *đã có sẵn từ bước 0; P.2 tách public + normalize*.
- [x] Sinh `App.config` đúng theo connectionType; sinh bản `.sh` tương đương nếu có script (Console payload gốc không có bat — kiểm tra lại: **đúng, không có**).
- [x] Câu hỏi connection trong CLI: dùng lại danh sách AuthType chuẩn của `devkit` (`Interactive`, `DeviceCode`, `ClientSecret`, `FromPac`, `OAuth`, `AD`) — *Console lọc còn 4 loại hỗ trợ; enforcement DeviceCode/FromPac giữ message FormProject*.

## 6. CLI surface

```
devkit new --kind project --type Console --name Contoso.Console --out <dir> [--offline]
```
Hỏi–đáp: project name → AuthType (SelectionPrompt) → các câu hỏi theo AuthType (URL/ClientId/Secret/…) — mô phỏng `FormConnection`.

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_project` với `projectType="Console"` + object `connection` (type/url/…). Password/secret không log ra kết quả.

## 8. Test & nghiệm thu

- [x] Unit test: scaffold với từng AuthType (parameterized) → `App.cs`/`App.config` đúng resource tương ứng, token đã thay, không `$token$` sót.
- [x] Test offline fallback NuGet (không network → version mặc định an toàn) — *DefaultVersions deterministic, assert cứng trong test csproj*.
- [x] `dotnet build` CLI 0/0; test pass. (Project sinh ra là net462 — chỉ build được trên máy có net462 targeting pack; trên Linux/mac chấp nhận "tạo file đúng", không bắt buộc build project sinh ra.) — *máy này CÓ targeting pack: project sinh ra `dotnet build` PASS thật.*

## 9. Bàn giao

- [x] Báo cáo + user duyệt → qua `P.3.ConsoleCore.md`. *(Đã duyệt 2026-10-25 — aP review xong P.2, gate mở cho P.3)*
