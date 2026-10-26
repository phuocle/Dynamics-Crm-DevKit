# P.4 — Server Project Template (plugin assembly — template quan trọng nhất)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/P.4.Server.md`
> **Điều kiện tiên quyết:** `0.md` + `P.1.Shared.md` (Server bắt buộc có Shared project trước).
> **Trạng thái:** ✅ **HOÀN THÀNH + ĐÃ DUYỆT 2026-10-25** (aP confirm sau 3 vòng: P.4 core → lean deploy bats → solution opt-in `--solution`. CLI 0 err/0 warn, VSIX net48 build pass, full Cli.UnitTests **4800/4800** — baseline 4773 + 27 net, global devkit released theo build-release-only + demo thật TestAllInOneCli + **kiểm chứng vàng: `dotnet build` project net462 SignAssembly PASS thật — DLL có PublicKeyToken `35f81e790bbd2343`**). Chi tiết: xem "Kết quả thực thi" bên dưới.
> **Làm xong file này mới được qua:** `P.5.Package.md` *(GATE OPEN)*
> **Ghi chú:** đây là wizard tôi đã đọc nguyên văn — các file P khác mô phỏng pattern này.

## Kết quả thực thi (cập nhật sau khi làm xong — 2026-10-25)

### Đã giao những gì

| Hạng mục | Kết quả |
|---|---|
| Handler | `DynamicsCrm.DevKit.Shared/Templates/Handlers/ServerProjectTemplateHandler.cs` — manifest 4 file theo `CSharpServerProjectTemplate.vstemplate` (csproj RP=true, `README.md` RP=false, 2 deploy scripts theo OS), **sinh `.snk` MỚI bằng `SigningService`** (không copy payload `key.snk` 596 bytes → key riêng 1172 bytes header RSA2), **yêu cầu Shared project tồn tại** (đúng wizard VSIX — thiếu → error kèm hint `devkit new --kind project --type Shared --name {sln}.Shared`, không tạo file rác), ValidateConnection chỉ chặn unknown type — **FormProject KHÔNG lọc AuthType nào cho Server** (đủ 6: Interactive, DeviceCode, ClientSecret, FromPac, OAuth, AD) |
| Deploy .sh (Mac/Linux) | **QUYẾT ĐỊNH: OS-conditional giống P.1** (không sinh cả hai): Windows → `.bat` (trùng khớp VSIX để compare), macOS/Linux → `.sh` twins + `MarkExecutable`. Payload stubs `ProjectTemplates/CSharp/04.ServerProjectTemplate/deploy.debug(.only).sh` (chứa `$deploy.debug.sh$`/`$deploy.debug.only.sh$`, LF) **KHÔNG thêm vào packaging csproj None list → không lọt zip VSIX** (đúng ghi chú "không có trong VSIX"); nội dung bash thật ở `DynamicsCrm.DevKit.Shared/Resources/sh/plugin.deploy.debug(.only).sh` (`#!/usr/bin/env bash` + `devkit server $CliConnectionArgs$ --json … --profile "DEBUG"` [+ `--onlyupdateassembly`]) |
| Deploy bats LEAN (aP yêu cầu sau review đầu) | **Bỏ block "Check if devkit is installed"** (`where devkit`/echo/clip/pause) khỏi `Resources/bat/plugin.deploy.debug(.only).bat` — bats giờ chỉ `@echo off` + dòng `devkit server …`; mirror cả 2 `.sh` twins (bỏ `command -v devkit`). Đúng precedent P.1 ROUND 4 (generator.latebound.bat) — shared source of truth nên output VSIX cũng lean như CLI. Test cập nhật: bats/sh KHÔNG chứa `where devkit`/`command -v devkit`. Đã re-release + tái tạo `TestAllInOneCli/Dev.AllInOne.Server` (bats lean, `.snk` mới RSA2, slnx Unchanged, `.env` md5 `52cfb0b7…` không đổi) |
| TokenEngine | Thêm `$deploy.debug.sh$` / `$deploy.debug.only.sh$` — set-only-when-exists (pattern `$generator.latebound.sh$`), conn args áp qua `ApplyCliConnectionArgs` |
| `.projitems` | +1 Compile (handler) + 3 EmbeddedResource server (`README.md`, 2 stub `.sh` — bats + csproj.template có sẵn từ bước 0) + 2 EmbeddedResource `Resources/sh/plugin.deploy.debug(.only).sh` |
| CLI prompt | `TaskNew`: Server vào cụm prompt connection (`ServerProjectTemplateHandler.SupportedConnectionTypes` = đủ 6 loại) + khi thiếu Shared trong workspace (interactive) → Confirm "Scaffold {sln}.Shared now?" → gọi handler P.1 ngay (dùng connection đã prompt) rồi mới scaffold Server; non-interactive không hỏi — handler tự error kèm hint |
| TemplateCatalog | KHÔNG đổi — entry `Server` order 4 `RequiresConnection=false` có sẵn từ bước 0 (đúng §5: scaffold offline được) |
| Idempotency `.snk` | Rerun giữ nguyên key cũ (`Skipped`) — regenerate bằng `--force` (lý do: đổi key = đổi assembly identity của plugin đã deploy); đây là chủ ý khác wizard VSIX (VSIX regenerate mỗi lần chạy) |
| Test | `ServerProjectTemplateHandlerTests.cs` mới (23 test khi bàn giao — **đính chính 2026-10-26 sau review: hiện 24 case**, ROUND 3 thêm `SolutionFileNotFound`; manifest 4 file OS-aware + flags; thiếu Shared → error có hint + không tạo thư mục; DataRow **đủ 6 AuthType**; null connection → `.env` marker; `.env` Bogus → error danh sách 6 loại; unknown type → `NotSupportedException` như VSIX; `.snk` 1172 bytes header `RSA2` + action `Created` (chứng minh sinh mới, không copy payload 596 bytes); deploy bats nhúng `--auth …` explicit (secret encrypt, không có plain) + marker → không args + không double-space; `.sh` resources có `#!/usr/bin/env bash` + stub payload resolve; sln entry + consumer line `SharedItemsImports = 5` cùng GUID + owner `= 13`; `.slnx` Path-only; BOM (không file nào có BOM); rerun skip + giữ `.snk` byte-identical; force regenerate `.snk`; **golden `dotnet build` net462 SignAssembly PASS**) |
| Build/Test | `dotnet build` CLI **0 err / 0 warn**; VSIX build VS MSBuild 18 Enterprise `/t:Build /p:Configuration=Debug /p:DeployExtension=false` **pass** (net48 OK); Templates 23/23 mới; full Cli.UnitTests **4796/4796** (~29s) — không regression (baseline 4773) |
| Release + demo | `Release-DynamicsCrm-DevKit.ps1` theo `build-release-only.md` EXIT=0 — devkit/devkit-tool `4.44.44.44 Build: 31.12.2026 23.59.59` (annual date từ ReleaseConfig), 4 artifacts + Vsix.2019 dưới `Published/4.44.44.44/`, Const.cs restore `xxxx.yy.zz HH.mm.ss`, git status sạch placeholder. Demo thật: `devkit new --kind project --type Server --name Dev.AllInOne.Server --out .` vào `TestAllInOneCli` (non-interactive → `.env` marker) → **5 created + slnx updated**; csproj SignAssembly + CrmSdk 9.0.2.60 + **Analyzers 4.12.34.56 = live nuget.org (đúng live-first online)**; bats rỗng conn args (đúng `.env` marker); `.env` md5 `52cfb0b7…` KHÔNG ĐỔI; `dotnet build` scaffold → **0 err/0 warn**, DLL **strong-name signed PublicKeyToken `35f81e790bbd2343`** |
| So sánh VSIX (compare protocol) | Cây CLI sẵn sàng: `TestAllInOneCli/Dev.AllInOne.Server/`. **Chờ aP tạo `Dev.AllInOne.Server` bằng VSIX vào `TestAllInOne2`** rồi diff trực diện. Expected diff classes: VS-reformat, DevKitVersion (annual vs release timestamp), NuGet online-vs-offline, GUID/slnx order/README date, **`.snk` khác nhau mỗi bên (key sinh riêng)**, CLI không sinh `Properties/AssemblyInfo.cs` (đã verify: không có trong vstemplate lẫn packaging csproj None list — VSIX cũng không sinh) |

### Lệch & quyết định implementation

- **ROUND 3 — aP đổi kiến trúc solution (25.10 ~17:10): "Solution là opt-in (`--solution`)"**. aP: 1 folder có thể có nhiều solution → CLI không biết insert vào cái nào; VSIX biết vì solution đang mở nên add vào solution là đương nhiên; CLI chỉ làm trách nhiệm của CLI — user tự add existing project nếu muốn. Áp dụng CHO CẢ 4 template (Shared/Console/ConsoleCore/Server):
  - `NewCommandArgs` + `--solution <file>` (desc ≤70 chars) — engine validate tồn tại → error `--solution '...': solution file not found.` TRƯỚC khi tạo bất kỳ file nào.
  - `ProjectTemplateInput.SolutionFile` (null/empty = create-only); `WorkspaceScanner.FromSolution(solutionFile, startDirectory)` anchor workspace tại file chỉ định (không walk-up); Shared lookup không còn phụ thuộc solution (search root = solution dir khi có, = `--out` khi không).
  - 4 handlers: BỎ gate "no .sln/.slnx must be scaffolded into a solution folder" (create-only được phép), insert solution CHỈ khi `input.SolutionFile` non-empty.
  - Tên derived không leading-dot khi không có sln (`Shared.Test` không phải `.Shared.Test`) — `WorkspaceScanner.JoinNonEmpty` + `TokenEngine.Scoped`; 2 test assert hành vi cũ được sửa theo.
  - TaskNew: `input.SolutionFile = args.Solution`; prompt "Scaffold Shared now?" hoạt động cả create-only (sharedName fallback `{ProjectName}.Shared` khi không có sln).
  - Tests: 3 test `WithoutSolution_Fails` → `WithoutSolution_CreatesProjectOnly` (project tạo, solution không đụng) + 3 test `SolutionFileNotFound_FailsBeforeCreatingFiles` mới; helper `Input()` truyền `SolutionFile` tường minh; test Slnx retarget `_solutionFile` sau khi thay file. Full **4800/4800** (baseline 4796 + **4 net — đính chính 2026-10-26 sau review: 4 class cùng nhận rename + test mới là Console/ConsoleCore/Server/Shared**, câu chữ "3 test" ở trên đếm thiếu Shared).
  - Demo global tool: không `--solution` → 5 created, slnx md5 KHÔNG đổi; gỡ entry rồi scaffold có `--solution Dev.AllInOne.slnx` → entry quay lại (0 created 5 skipped idempotent, 1 updated slnx); `--solution Nope.sln` → `[ERROR] ... solution file not found.`; `.env` md5 `52cfb0b7…` không đổi xuyên suốt; `dotnet build` project demo 0/0. VSIX net48 build pass; re-release build-release-only EXIT=0 (checklist đạt).
- **ROUND 2 — aP yêu cầu bỏ block "Check if devkit is installed"** khỏi `Resources/bat/plugin.deploy.debug(.only).bat` (giờ chỉ `@echo off` + dòng `devkit server …`) + mirror 2 `.sh` twins (bỏ `command -v devkit`) — precedent P.1 ROUND 4; shared source of truth nên output VSIX cũng lean. Re-release + tái tạo test folder.
- **Sửa 1 dòng ngoài phạm vi P.4**: `ScaffoldingEngineTests.cs` `ScaffoldProjectAsync_NotImplemented_FailsGracefully` thêm `Offline = true`. Root cause: input này thiếu Offline (mặc định false) → engine query **live** nuget.org 18 package → static `NuGetVersionCache` dính Analyzers `4.12.34.56` → mọi test scaffold SAU đó (theo alphabet) dù `Offline=true` vẫn đọc cache trước bảng → 7 test Server fail lúc chạy full (chạy riêng pass vì cache lạnh). Console/ConsoleCore thoát vì xếp TRƯỚC polluter. Đây là vi phạm RULE TEST "Offline=true mọi ProjectTemplateInput" tồn tại sẵn — P.4 chỉ bật lại đúng rule.
- **`Properties/AssemblyInfo.cs` KHÔNG thuộc template** (payload folder có file nhưng vstemplate không liệt kê + packaging csproj None không include) → không embed, không sinh, không test.
- **`.snk` skip-existing khi rerun** (≠ VSIX regenerate mỗi lần) — chủ ý bảo vệ assembly identity; force để regenerate.
- **Deploy `.sh` OS-conditional** (giống P.1 generator) thay vì "luôn sinh cả hai": Windows output giữ nguyên vẹn VSIX (phục vụ compare protocol); csproj payload không sửa được (file dùng chung với VSIX).

### Bài học

- **`NuGetVersionCache` là static process-wide**: `SetReplacementAsync` (offline path) đọc `TryGetCached` TRƯỚC bảng `DefaultVersions` — bất kỳ test/host nào chạy online trước đó đều làm offline asserts của class sau lệch. Mọi test scaffold mới PHẢI `Offline = true` ở MỌI input (kể cả test "unknown type/not implemented" — engine vẫn chạy token NuGet trước khi validate).
- **File binary (`.snk`) phải skip khi scan `$token$` sót** — `File.ReadAllText` decode UTF-8 bừa có thể false-match regex `\$…\$` → test flaky theo nội dung key ngẫu nhiên.
- **`dotnet build` net462 SDK-style + SignAssembly hoạt động với plain dotnet CLI** khi có VS targeting pack (máy dev) + packages trong cache — signing dùng key `.snk` format CSP blob thuần .NET; PublicKeyToken trên DLL build là bằng chứng cuối blob SigningService hợp lệ (thay mscoree StrongNameKeyGen).
- **CliArgsBuilder marker connection (`UseProjectEnvironment=true`) → rỗng ngay** — deploy bats của scaffold `.env`-based không có conn args (đúng hành vi VSIX); chỉ explicit connection mới nhúng args (secrets đi qua `Helper.EncryptString`).
- **Payload stub `.sh` đặt trong folder template nhưng không thêm packaging csproj None** → không vào zip VSIX; embed LogicalName riêng cho CLI — pattern chuẩn cho các cặp .bat/.sh tiếp theo (P.5 Package, P.6 WebResource…).

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ProjectTemplates/Server.cs` (75 dòng) |
| Payload | `ProjectTemplates/CSharp/04.ServerProjectTemplate/` — `ProjectTemplate.csproj.template`, `deploy.debug.bat`, `deploy.debug.only.bat`, `key.snk`, `Properties/AssemblyInfo.cs`, `README.md` |
| Manifest VS | `CSharpServerProjectTemplate.vstemplate` — `<ProjectItem ReplaceParameters="false" TargetFileName="$ProjectName$.snk">key.snk</ProjectItem>`… |
| Sinh snk | `Lib/SigningHelper.cs` (P/Invoke `mscoree StrongNameKeyGen` — Windows-only) |
| Token bat | `Replacement.cs` — `$deploy.debug.bat$`, `$deploy.debug.only.bat$` (đã áp `$CliConnectionArgs$`) |

## 2. Template tạo ra gì

Project **net462 plugin/workflow/custom action/custom api/data provider** — nơi sinh sống của mọi item template nhóm I.4–I.9. Gồm: csproj (sign assembly + references CrmSdk + Shared import), `deploy.debug(.only).bat` (gọi `devkit server` deploy — nhúng tham số kết nối), `{ProjectName}.snk`, assembly info, README.

## 3. Logic wizard hiện tại (Server.cs)

1. Lấy `sharedProjectName = GetSharedProjectAsync()`; **nếu Shared chưa tồn tại → lỗi "Please add Shared project" + hủy wizard**.
2. `FormProject(ProjectType.Server)` → check trùng tên project → `Replacement.SetAsync(dictionary, form)`.
3. `ProjectFinishedGenerating`: đổi tên project + **`SigningHelper.GenerateKey(project, dir, $"{ProjectName}.snk")`** (P/Invoke; set `SignAssembly=true`, `AssemblyOriginatorKeyFile` qua DTE).
4. `RunFinished`: `FixProjectFolder`.

## 4. Thiết kế source of truth

- Handler `ServerProjectTemplateHandler` trong Shared:
  - Validate Shared tồn tại (qua `WorkspaceScanner`; nếu thiếu → **gợi ý chạy P.1 trước** hoặc tự scaffold tùy `--force`, mặc định: báo lỗi kèm hint).
  - Sinh `.snk` bằng `SigningService` (RSA thuần — xem 3.5 `0.md`), **thay hoàn toàn** SigningHelper P/Invoke.
  - Token bat `$deploy.debug.bat$`/`$deploy.debug.only.bat$` từ resource `bat.plugin.deploy.debug(.only).bat` + `ApplyCliConnectionArgs`.
- Csproj sinh ra phải có `<Import Project="..\{Shared}\{Shared}.projitems" Label="Shared" />` (SolutionMutator đảm bảo).
- **Mở rộng đa nền tảng (không có trong VSIX):** sinh thêm `deploy.debug.sh` / `deploy.debug.only.sh` (`#!/usr/bin/env bash`) với lệnh `devkit` tương đương — chọn sinh theo OS hoặc luôn sinh cả hai (quyết định khi implement, ghi rõ vào báo cáo).

## 5. Việc phải làm (CLI)

- [x] Handler + manifest (id `Server`, order 4) + embed payload (`key.snk` nhúng làm binary resource; CLI **luôn sinh snk mới** bằng SigningService thay vì copy `key.snk` mẫu — giữ an toàn khóa). *(key.snk KHÔNG embed theo bước 0 — handler sinh key mới bằng SigningService; README + 2 stub .sh embed thêm vào .projitems, bats + csproj.template có sẵn từ bước 0)*
- [x] Csproj template: set `SignAssembly`, `AssemblyOriginatorKeyFile`, NuGet versions. *(payload csproj.template đã có đủ sẵn — dùng nguyên văn, không sửa file chung với VSIX; NuGet CrmSdk 9.0.2.60 đã có trong DefaultVersions + preload list)*
- [x] Sinh `.sh` deploy tương đương. *(OS-conditional giống P.1: Windows .bat / Mac-Linux .sh + chmod +x; stub payload không lọt zip VSIX)*
- [x] Cập nhật `TemplateCatalog`: `RequiresConnection=false` (scaffold offline được), nhưng cảnh báo nếu thiếu Shared. *(entry có sẵn từ bước 0 — không đổi; cảnh báo thiếu Shared = handler error có hint + TaskNew interactive confirm)*

## 6. CLI surface

```
devkit new --kind project --type Server --name Contoso.Plugin --out <dir>
```
Hỏi–đáp: project name → (nếu không tìm thấy Shared) prompt "Không tìm thấy Shared project. Scaffold Shared luôn? (y/n)" — nếu y: gọi handler P.1 trước rồi mới tiếp tục.

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_project` `projectType="Server"` + `generateShellScripts` (default true). Trả `projectFilePath`, `solutionUpdated`.

## 8. Test & nghiệm thu

- [x] Unit test: scaffold trong temp (đã có Shared từ P.1) → đủ file; `.snk` đúng header `RSA2` (0x…52 53 41 32); `dotnet build` project sinh ra pass (net462 targeting pack có trên máy dev). *(23/23; .snk 1172 bytes header RSA2; golden net462 SignAssembly build PASS — DLL demo PublicKeyToken 35f81e790bbd2343)*
- [x] Thiếu Shared → lỗi có hint, không tạo file rác. *(error chứa lệnh scaffold P.1; thư mục project không được tạo)*
- [x] Bat/sh deploy chứa đúng `--conn` args hoặc empty string nếu offline. *(explicit → `--auth …` đầy đủ, secret encrypt; marker/.env → không args, không double-space; .sh resources mang cùng lệnh devkit server; **aP 25.10 yêu cầu bỏ block check devkit-installed → bats/sh lean, re-release + tái tạo test folder**)*
- [x] Build CLI 0/0; test pass. *(0 err/0 warn; full 4800/4800 = baseline 4773 + 27 net sau 3 vòng)*

## 9. Bàn giao

- [x] Báo cáo + user duyệt → qua `P.5.Package.md`. *(aP duyệt 2026-10-25 sau prove cycle cuối: aP wipe TestAllInOneCli giữ .env/.editorconfig/slnx `<Solution />` → CLI scaffold lại 4 prj — CHỈ Shared có `--solution`, 3 prj kia create-only để aP tự test add-existing-project; slnx cuối = đúng 1 entry Shared; `.env` md5 `52cfb0b7…` nguyên. Compare TestAllInOne2-vs-TestAllInOne2 Server còn chờ aP tạo prj Server bằng VSIX — không chặn P.5)*
