# P.1 — Shared Project Template (shproj — nền của mọi project DevKit)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/P.1.Shared.md`
> **Điều kiện tiên quyết:** `0.md` hoàn tất (engine + catalog + SolutionMutator sẵn sàng).
> **Trạng thái:** ✅ **HOÀN THÀNH 2026-10-25 — ĐÃ ĐƯỢC USER DUYỆT 2026-10-25** (CLI 0 err/0 warn, VSIX net48 build pass, 46/46 test Templates, full Cli.UnitTests 4722/4722, global devkit released + demo thật). Chi tiết: xem "Kết quả thực thi" bên dưới.
> **Làm xong file này mới được qua:** `P.2.Console.md`

## Kết quả thực thi (cập nhật sau khi làm xong — 2026-10-25)

### Đã giao những gì

| Hạng mục | Kết quả |
|---|---|
| Handler | `DynamicsCrm.DevKit.Shared/Templates/Handlers/SharedProjectTemplateHandler.cs` (thư mục `Handlers/` mới — quy ước cho mọi handler P.*/I.* sau này) + `Handlers/TemplateHandlers.cs` (`RegisterAll()` — host gọi 1 lần, đăng ký cả handler lẫn manifest) |
| Manifest | `CreateManifest()` khai báo đúng 11 file payload theo `.vstemplate` (TargetFileName `$SafeProjectName$.shproj`, `$NameSpace$.projitems`, `Lib/*.cs`, `Entities/generator.bat`… + ReplaceParameters từng file) |
| Embed | `.projitems` thêm `README.md` của template Shared (109 → 110 EmbeddedResource) vì `.vstemplate` khai báo nó là payload |
| SolutionMutator | `AddSharedProjectToSolutionAsync` viết lại theo format VS THẬT (xác minh từ `v4/.../TestAllInOne/Dev.DevKit.sln`): Project entry dùng lại ProjectGuid của shproj (uppercase + ngoặc), KHÔNG có ProjectConfigurationPlatforms entries cho shproj, GlobalSection(SharedMSBuildProjectFiles) dòng owner `{path}.projitems*{guid-lowercase}*SharedItemsImports = 13`; `EnsureDevKitCliJsonAsync(directory, solutionName = null)` port đầy đủ bản VSIX (thay `???` + `ProjectEnvironment.EnsureFile` tạo .env/.env.example) |
| Token | Handler sinh `$guid1$` (lowercase, không ngoặc — đúng format v4 thật) dùng chung cho ProjectGuid (shproj) + SharedGUID (projitems) + GUID entry trong sln |
| CLI | `devkit new --kind project --type Shared --name Contoso.Shared --out <dir>` chạy thật; prompt tương tác hỏi tên project với **mặc định `{SolutionName}.{Type}`** theo FormProject (SharedTest → `{SolutionName}.Shared.Test`); `TaskNew` gọi `TemplateHandlers.RegisterAll()` |
| Test | `SharedProjectTemplateHandlerTests.cs` mới (7 test: manifest 11 file, scaffold đủ file/token/GUID/sln/Cli.json, rerun skip không đụng file user, --force ghi đè, thiếu .sln lỗi, tên sai lỗi, port IsValidProjectName) + SolutionMutatorTests thêm 4 test (slnx format, entry-from-guid, idempotent, Cli.json bind tên) + `ScaffoldingEngine.ClearHandlers()` mới để test fallback-path |
| Build/Test | `dotnet build` CLI **0 err / 0 warn**; VSIX build VS MSBuild 18 Enterprise **pass** (net48 OK); Templates 48/48, full Cli.UnitTests **4724/4724** (~26s) — không regression (baseline 4712) |
| Release + demo | `Release.DynamicsCrm.DevKit.Cli.ps1` OK — devkit global `4.44.44.44 Build: 25.10.2026 08:09:26`, SHA `A6B45241…`, nupkg + manifest dưới `Published/4.44.44.44/`, Const.cs restore `xxxx.yy.zz HH.mm.ss`; demo scaffold `Contoso.Shared` vào folder có `Contoso.sln`: 11 payload + Cli.json + sln entry + GlobalSection đúng format, `dotnet sln list` nhận ra shproj, rerun 13 skipped exit 0 |
| **Test real-time (TestAllInOneCli)** | aP chỉ định folder `DynamicsCrm.DevKit.Tests/TestAllInOneCli` (đã có `.env` thật — **nguyên vẹn**, md5 khớp trước/sau). Đã tạo `Dev.AllInOne.slnx` (mirror reference) + `devkit new --kind project --type Shared --name Dev.AllInOne.Shared`. **Kết quả: 100% file sinh ra IDENTICAL với payload nguồn sau khi áp token** (byte-đúng kể cả BOM); so với reference VSIX `TestAllInOne/Dev.AllInOne.Shared`: 6/10 SAME, 4 DIFF đều do reference cũ hơn payload (30.06.2026: tab/space, Extension thiếu GetExecutionContext7, DevKitJson public→internal, projitems thiếu Compile entities do generator chạy thêm). Từ P.2: mỗi P.*/I.* xong sẽ scaffold thật vào đây trước khi bàn giao |
| **`DynamicsCrm.DevKit.json` (vòng 3, theo yêu cầu aP)** | Scaffold Shared giờ tạo **cả 2** file: `DynamicsCrm.DevKit.Cli.json` + `DynamicsCrm.DevKit.json` (connections store của VSIX) — mục tiêu: mở solution bằng VS là **có connection dùng được liền**. `SolutionMutator.EnsureDevKitJsonAsync(dir, crmConnection=null)`: nếu file chưa có → sinh 1 connection từ `.env` (`DEVKIT_AUTH_TYPE`, Name=Type, `UseProjectEnvironment=true`, **không lưu secret** — runtime đọc .env như chính file connections của aP trong TestAllInOne); connection truyền vào rõ ràng thì secret được `Helper.EncryptString` (AES passphrase cố định — VSIX decrypt được); không có .env → store rỗng `{"CrmConnections": []}`; file có sẵn thì KHÔNG đụng. Serialize bằng System.Text.Json (WriteIndented + WhenWritingNull) khớp `VsixHelper.SaveDevKitConnectionsAsync`. Verified trên TestAllInOneCli: sinh đúng connection `ClientSecret` từ .env của aP, không lộ secret/clientId, `.env` nguyên vẹn; build 08:25:30, full suite **4727/4727** (+3 test EnsureDevKitJsonAsync) |
| **Generator runner cross-platform (vòng 4, theo yêu cầu aP)** | `Entities/generator.bat` (Windows) **hoặc** `Entities/generator.sh` (macOS/Linux — bash + executable bit qua `ScaffoldingEngine.MarkExecutable`, `#if NET10_0_OR_GREATER` nên net48 VSIX compile rỗng) — handler chọn theo `RuntimeInformation.IsOSPlatform`. Resource mới `Resources/sh/generator.latebound.sh` (LF-only!) + payload `generator.sh` (1 dòng `$generator.latebound.sh$`) + token tương ứng trong TokenEngine (null-safe). **Dọn resource `bat/generator.latebound.bat`**: bỏ block "Check if devkit is installed" (where/echo/clip/pause) — đây là **source of truth chung nên output VSIX cũng gọn như CLI** (aP duyệt). Còn 12 bat resource khác cũng có block này (deploy/form/webapi/run/download/upload/pack) — thuộc P.4/P.6/P.8+, xử lý khi đến. Build 11:11:05, full suite **4728/4728**; verify thật: bat sinh ra chỉ còn `@echo off` + 1 lệnh devkit |
| **Help discovery cho AI + user (vòng 5, theo yêu cầu aP)** | Audit phát hiện: fancy `devkit --help` **THIẾU** lệnh `new` (bản plain có — 2 bản help trong `SpectreLog.WriteHelp` lệch nhau), và AI không biết type nào dùng được. Fixed: thêm `new` vào Commands + Examples của fancy help (plain đã có, thêm example đồng bộ); **`devkit new list` thêm cột Ready** (yes/no từ handler/manifest registry — AI + user nhìn 1 chỗ biết scaffold được gì, `--plain` machine-readable); docs tham khảo đầy đủ cho AI: **`DynamicsCrm.DevKit.Docs/Cli/new.md`** (convention Docs/{Component}). **Vòng 5b (aP báo "sau mỗi option có 1 dòng xuống hàng")**: không phải chuẩn — Spectre.Console.Cli pad mọi dòng option về độ dài dòng description dài nhất; `--type` của `new` (liệt kê 30 type, 270+ chars) làm mọi dòng pad 327 cột → terminal thật wrap thành dòng trắng. Fix: rút gọn description dài (`--type` → trỏ tới `devkit new list`; mcp: `--as-user`, `[name]`, `--category`, command description). Kết quả: mọi lệnh ≤ 117 cột (new/mcp/generator/server/solution/webresource/modelbuilder) — không wrap ở terminal ≥ 120. Build 11:24:44, full suite 4728/4728 |

### Các lệch so với thiết kế gốc của file này (đã được user thông báo khi bàn giao)

1. **Interface là `ITemplateHandler`** (bước 0 xây), không phải `IProjectTemplateHandler`/`IItemTemplateHandler` như mục 4/0.md 3.8 phác thảo — giữ nguyên interface thật của engine, không refactor ngoài phạm vi.
2. **Không hỏi connection khi prompt** (mục 6): CLI P.1 bỏ qua connection — `generator.bat` sinh ra không có connection args và dựa vào `.env` fallback (file `.env`/`.env.example` do `EnsureDevKitCliJsonAsync` tạo như VSIX). Lý do: chưa có connection-prompter dùng chung (FormConnection là WPF); sẽ xây khi P.2+ cần. `--offline` được chấp nhận.
3. **Thiếu .sln → lỗi cứng** `--out '...': no .sln/.slnx found...`: spec không nói rõ; shproj là hạ tầng solution nên bắt buộc có solution (VSIX luôn mở trong solution). Cảnh báo mềm chỉ áp dụng cho "shproj đã tồn tại" (rerun → warning + skip, đúng mục 5).
4. **Tên project chỉ là gợi ý mặc định**, không khóa cứng như VSIX (VSIX khóa `{SolutionName}.Shared`) — đúng nguyên văn mục 6 ("gợi ý mặc định"); mapping default áp dụng cho mọi project type theo FormProject.
5. **Sửa format `GlobalSection(SharedMSBuildProjectFiles)` của bước 0** (bước 0 viết `{guid}*{name}*{path} = {path}` — không đúng VS): P.1 đổi sang format thật `{path}*{guid-lowercase}*SharedItemsImports = 13` + entry dùng ProjectGuid của shproj + bỏ config entries cho shproj. `SolutionMutatorTests` cũ cập nhật theo (tách 2 kịch bản: entry có sẵn / sln sạch).
6. **Port `???` replacement verbatim**: các pattern `???.Plugin.*.dll`… của VsixHelper giữ nguyên dù hiện KHÔNG khớp resource (resource dùng `???.Plugin*.dll` không chấm) — chỉ `???.*.Test.dll` có tác dụng thật; giữ parity với VSIX, không "sửa" resource ngoài phạm vi.
7. **VSIX hội nhập (mục 4, optional)**: chưa làm — đúng spec (để sau).
8. **BOM fidelity (fix sau test real-time)**: bước 0/P.1-round-1 ghi mọi file UTF-8 BOM; test thực tế phát hiện VSIX copy payload giữ nguyên BOM từng file (đa số không BOM, `PluginExecutionContext7Wrapper.cs` có BOM). Đã fix: `TemplatePayload.ReadContentAsync` trả kèm HasBom, engine ghi qua `ForceWriteAllTextWithoutUTF8Async` khi nguồn không BOM. Riêng **Cli.json GIỮ BOM** (resource không BOM nhưng output VSIX có BOM — VsixHelper dùng ForceWriteAllTextAsync).
9. **`.slnx` format (fix sau test real-time)**: aP chỉ ra reference thật là `TestAllInOne/Dev.AllInOne.slnx` (file `.2019.sln` chỉ sót lại 1 project Report). Format thật: csproj = `<Project Path="…"/>` (không Type/Id), shproj thêm `Id="{projectguid-lowercase}"`, không có SharedMSBuildProjectFiles. `AddProjectToSlnx` viết lại + giữ nguyên declaration/BOM của file gốc (reference không có cả hai). Lưu ý `.NET 10 dotnet new sln` mặc định tạo `.slnx` — muốn `.sln` phải `--format sln`.

### Bài học kỹ thuật (cho các file P.*/I.* sau)

- **Shared là .shproj**: file `.cs` mới phải khai báo `<Compile Include="$(MSBuildThisFileDirectory)Templates\Handlers\...">` trong `DynamicsCrm.DevKit.Shared.projitems` thì CLI/VSIX mới thấy — lỗi "namespace Handlers does not exist" là dấu hiệu quên bước này.
- **Format sln cho shproj (bằng chứng v4)**: entry `Project("{D954291E-2A0B-460D-934E-DC6B0785DB48}") = "X", "Rel\X.shproj", "{GUID-UPPER}"` với GUID = ProjectGuid trong shproj; shproj **không có** dòng ProjectConfigurationPlatforms; GlobalSection(SharedMSBuildProjectFiles) dòng owner `{rel-path}.projitems*{guid-lowercase}*SharedItemsImports = 13` (consumer = `5`, thêm ở P.4+ khi project khác import projitems).
- **`$guid1$` do handler sinh**: VS tự thay $guidX$ khi chạy template; engine không có host service → mỗi handler tự đưa GUID vào token dict (format v4: lowercase không ngoặc, GUID dùng chung shproj/projitems/sln).
- **Handler thắng manifest trong dispatch** (`FindHandler` trước `TemplateManifests.TryGet`): khi 1 template có handler thật, các test fallback-path của engine phải gọi `ScaffoldingEngine.ClearHandlers()` (method mới của P.1) nếu không sẽ route nhầm vào handler.
- **`AddSharedProjectToSolutionAsync` trả true nếu CÓ thay đổi nào** (entry mới HOẶC section mới) — test fixture sln có sẵn entry shproj cũ phải tách kịch bản riêng so với sln sạch.
- **BOM phải theo payload nguồn từng file** (VS copy giữ encoding; `PluginExecutionContext7Wrapper.cs` có BOM, còn lại không) — chuẩn đối chiếu khi test là **CLI output == payload nguồn + token**, KHÔNG phải so với folder reference cũ (reference `TestAllInOne` sinh 30.06.2026, cũ hơn payload hiện tại: tab/space, thiếu method mới…).
- **`.slnx` thật (VS 2026)**: csproj chỉ có `Path`; shproj thêm `Id="{guid-lowercase}"` = ProjectGuid của shproj; không declaration, không BOM; đường dẫn dùng `/`. MSYS gotcha khi so file: sed Git Bash strip CRLF + `\$token\$` phải single-quote (`$` là anchor của sed) — dùng `cmp` cho file không token, `diff --strip-trailing-cr` cho file có token.
- **TestAllInOneCli = nơi test real-time cho mọi P.*/I.* sau này**: scaffold bằng devkit global vào `Dev.AllInOne.slnx`, không bao giờ đụng `.env` của aP (check md5 trước/sau).

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ProjectTemplates/Shared.cs` |
| Payload | `ProjectTemplates/CSharp/01.SharedProjectTemplate/` — `Shared.shproj`, `Shared.projitems`, `Date.cs`, `DevKitJson.cs`, `DocumentMethodAttribute.cs`, `EntityBase.cs`, `Extension.cs`, `PluginCore.cs`, `PluginExecutionContext7Wrapper.cs`, `Properties/AssemblyInfo.cs`, `generator.bat`, `README.md` |
| Manifest VS | `ProjectTemplates/CSharp/01.SharedProjectTemplate/CSharpSharedProjectTemplate.vstemplate` |
| Form input | `DynamicsCrm.DevKit.Vsix/Lib/Forms/FormProject.xaml(.cs)` (với `ProjectType.Shared`) |
| Token | `DynamicsCrm.DevKit.Vsix/Lib/Replacement.cs` — `SetAsync(Dictionary, FormProject)` |
| Tiện ích DTE | `VsixHelper.AddDynamicsCrmDevKitCliJsonAsync()`, `FixProjectFolder()`, `GetSharedProjectAsync()` |

## 2. Template tạo ra gì (hiện tại)

Project **Shared** (.shproj — không sinh DLL, source được import vào các project khác): class nền cho toàn solution DevKit (`PluginCore`, `EntityBase`, `Extension`, `DevKitJson`…) + đảm bảo file cấu hình **`DynamicsCrm.DevKit.Cli.json`** tồn tại ở solution root (từ resource `DynamicsCrm.DevKit.Shared/Resources/DynamicsCrm.DevKit.Cli.json`).

Điểm đặc biệt so với các P khác:
- Đây là **shproj** nên VS cần `GlobalSection(SharedMSBuildProjectFiles)` trong `.sln` và các project phụ thuộc phải có `<Import ... .projitems Label="Shared" />`.
- `generator.bat` nhúng tham số kết nối CLI (`$CliConnectionArgs$`) — xem `Replacement.ApplyCliConnectionArgs`.
- Token dùng chính: `$ProjectName$`, `$SafeProjectName$`, `$NameSpace$` (= `Helper.SafeNamespace`), `$SharedNameSpace$`, `$SharedProject$`, `$CliConnectionArgs$`, `$DevKitVersion$`.

## 3. Logic wizard hiện tại (Shared.cs)

1. `RunStarted`: mở `FormProject(ProjectType.Shared)` — hỏi tên project + kết nối; hủy → `WizardCancelledException`.
2. Kiểm tra project trùng tên (`IsProjectExistAsync`) → lỗi nếu tồn tại.
3. `Replacement.SetAsync(dictionary, form)` điền token; `AddDynamicsCrmDevKitCliJsonAsync()` tạo Cli.json nếu chưa có.
4. `ProjectFinishedGenerating`: đổi tên project thành `ProjectName`; `RunFinished`: `FixProjectFolder`.

## 4. Thiết kế source of truth

- Handler **`SharedProjectTemplateHandler : IProjectTemplateHandler`** đặt trong `DynamicsCrm.DevKit.Shared/Templates/Handlers/` (mới — quy ước đặt tất cả handler ở đây).
- Manifest (mục 3.1 của `0.md`) cho `ProjectType.Shared`: mọi file payload trên, `ReplaceParameters=true` với `.projitems`, `generator.bat`, `README.md`; file `.shproj` gần như tĩnh.
- Việc shproj-đặc-thù nằm trong handler: gọi `SolutionMutator.AddSharedProjectToSolutionAsync` (chèn entry + GlobalSection, `dotnet sln add` không hỗ trợ shproj) và `EnsureDevKitCliJsonAsync` (port từ `VsixHelper`).
- **VSIX hội nhập (optional, sau):** `Wizard/ProjectTemplates/Shared.cs` thay phần tự làm bằng gọi handler; VS vẫn tự copy payload từ zip.

## 5. Việc phải làm (CLI)

- [x] Viết `SharedProjectTemplateHandler` trong Shared (net48+net10 compile).
- [x] Đăng ký vào `TemplateCatalog` (id `Shared`, order 1) + manifest payload + embed resource (mục 3.2 `0.md`).
- [x] Đổi tên đích: `{ProjectName}.shproj`, `{ProjectName}.projitems` (pattern lấy từ `.vstemplate`); nội dung `.projitems` thay token đúng.
- [x] `EnsureDevKitCliJsonAsync` trong `SolutionMutator` (tạo từ resource nếu thiếu).
- [x] Cảnh báo nếu shproj đã tồn tại trong solution (tương đương `IsProjectExistAsync`) — không lỗi cứng, cho `--force` ghi đè phần quản lý (không đụng file user).

## 6. CLI surface

```
devkit new --kind project --type Shared --name Contoso.Shared --out <thư mục>
```
Hỏi–đáp khi thiếu flag (theo `FormProject`):
1. Project name (gợi ý mặc định `{SolutionName}.Shared` từ `WorkspaceScanner`).
2. (Connection chỉ cần cho token bat — cho phép bỏ qua / `--offline`; đọc `FormProject.xaml.cs` để giữ đúng tập câu hỏi).

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
Tool `scaffold_project` với `projectType="Shared"` — chỉ map tham số, engine đã lo. Trả `ScaffoldResult` JSON (createdFiles, solutionUpdated, warnings).

## 8. Test & nghiệm thu

- [x] Unit test trong `DynamicsCrm.DevKit.Cli.UnitTests/Templates/`: scaffold vào temp dir có sẵn `.sln` trống → đủ file payload (đã thay token), `.sln` có entry + GlobalSection đúng format VS, `DynamicsCrm.DevKit.Cli.json` tồn tại, không còn `$...$` nào sót trong file sinh ra.
- [x] Test idempotency: chạy lần 2 → skipped, không đụng file user.
- [x] `dotnet build` CLI 0 err/0 warn; test net10 pass.
- [x] Smoke thật: scaffold `Contoso.Shared` vào folder có `.sln` → mở kiểm tra bằng mắt + `dotnet sln list` (nếu được).

## 9. Bàn giao

- [x] Báo cáo file tạo/sửa + kết quả build/test + output smoke.
- [x] User duyệt → mới qua `P.2.Console.md`. *(Đã duyệt 2026-10-25 — aP review xong cả 5 vòng P.1, gate mở cho P.2)*
