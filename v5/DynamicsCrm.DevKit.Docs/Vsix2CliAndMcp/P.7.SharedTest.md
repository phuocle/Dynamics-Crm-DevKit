# P.7 — SharedTest Project Template (shproj dùng chung cho test)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/P.7.SharedTest.md`
> **Điều kiện tiên quyết:** `0.md` + `P.1.Shared.md` (cùng cơ chế shproj).
> **Trạng thái:** ✅ **HOÀN THÀNH + aP DUYỆT 2026-10-25** (compare chốt — using-sort là expected diff class; CLI 0 err/0 warn, full suite 4859/4859, VSIX build pass, build-release-only 4 artifacts OK, demo fixture TestAllInOneCli OK, `.env` nguyên vẹn). Chi tiết: xem "Kết quả thực thi" + "10b. Compare".
> **Làm xong file này mới được qua:** `P.8.ProxyTypes.md`.

## Kết quả thực thi (cập nhật sau khi làm xong — 2026-10-25)

### Đã giao những gì

| Hạng mục | Kết quả |
|---|---|
| Handler | `DynamicsCrm.DevKit.Shared/Templates/Handlers/SharedTestProjectTemplateHandler.cs` — mirror P.1: mint `$guid1$` lowercase dùng chung ProjectGuid (shproj) + SharedGUID (projitems); validate tên qua `SharedProjectTemplateHandler.IsValidProjectName`; warning khi shproj tồn tại; `AddSharedProjectToSolutionAsync` khi có `--solution` (opt-in) |
| Manifest | `CreateManifest()` khai báo đúng **12 file** theo `.vstemplate` (1 Project + 11 ProjectItems — handoff ghi 11 là đếm thiếu, xem lệch #1): `Shared.shproj`→`$SafeProjectName$.shproj`, `Shared.projitems`→`$NameSpace$.projitems`, `README.md` (RP=false), 7 file `Lib/*.cs`, `FakeXrmEasyTestBase.cs` (root), `Executor/CalculateRollupFieldRequestExecutor.cs` |
| Wizard parity (đã đọc lại `SharedTest.cs` full) | **CÓ** gọi `VsixHelper.AddDynamicsCrmDevKitCliJsonAsync()` (dòng 52 — chỉ Shared + SharedTest gọi, Package/WebResource không) → handler ensure `DynamicsCrm.DevKit.Cli.json` + `DynamicsCrm.DevKit.json` (P.1 parity, ruling vòng 3). **KHÔNG** SigningHelper (không `.snk`), **KHÔNG** check Shared project trước, **KHÔNG** connection UI → không có logic connection trong handler; không script bat/sh → không `MarkExecutable`, không Folders loop (Lib/Executor tự tạo khi render file vì cả 2 đều nhận file) |
| Token | Payload chỉ dùng `$NameSpace$` (9 chỗ), `$ProjectProxyTypes$` (FakeXrmEasyTestBase.cs:8 `using $ProjectProxyTypes$;` — TokenEngine đã có sẵn = `{Solution}.ProxyTypes`), `$guid1$`, `$DevKitVersion$`, `$SafeProjectName$` — không token connection nào |
| Embed/Compile | `DynamicsCrm.DevKit.Shared.projitems`: thêm `<Compile>` handler mới + thêm embed `README.md` của template 07 (sharedtest 11 → 12 resources — **thiếu sẵn từ bước 0, bẫy P.6 lặp lại lần 2**, xem lệch #2) |
| Register | `TemplateHandlers.RegisterAll()` thêm SharedTest (handler + manifest). `TaskNew` **KHÔNG đổi**: special case default name `{Solution}.Shared.Test` có sẵn từ P.1; SharedTest không thuộc nhóm prompt connection; `devkit new list` tự nhận Ready=yes qua registry |
| Tests | `SharedTestProjectTemplateHandlerTests.cs` mới — **8 tests**: manifest 12 file + RP flags (chỉ README false; AssemblyInfo.cs payload-only không scaffold); scaffold đủ file/token/GUID pair/Cli.json/DevKit.json/sln entry + `SharedItemsImports = 13`/không config entries/`using Contoso.ProxyTypes;`; BOM state (`Shared.projitems` + `CalculateRollupFieldRequestExecutor.cs` có BOM, còn lại không); rerun skip không đụng file user; `--force` overwrite; create-only không solution; `--solution` missing lỗi trước khi tạo file; invalid name. Tất cả `Offline=true` (rule test) |
| Build/Test | `dotnet build` CLI **0 err / 0 warn**; full Cli.UnitTests **4859/4859** (~35s — baseline 4851 + 8); VSIX build VS MSBuild 18 Enterprise **pass** (đụng Shared). 2 warning CA2022 trong UnitTests là pre-existing (P.6 đã ghi — `SolutionMutatorTests.cs:151` + `SharedProjectTemplateHandlerTests.cs:234`, file mới dùng while-loop ReadHead nên không thêm) |
| Release (build-release-only) | `Release-DynamicsCrm-DevKit.ps1` xong 21:38; global `devkit` 4.44.44.44 Build: **31.12.2026 23.59.59** (annual từ ReleaseConfig); 4 artifacts `Published/4.44.44.44/` (Analyzers/Cli/Tool nupkg + Vsix vsix, 21:38); `Const.cs` restore `xxxx.yy.zz HH.mm.ss`; VSIX DLL chứa `SharedTestProjectTemplateHandler` (unzip + grep -a = 2 hits) |
| Golden scaffold | `.shproj` thuần **không build riêng được** (CodeSharing targets chỉ có trong VS MSBuild) → golden = assert nội dung trong tests + demo thật (đúng spec mục 8, không có golden dotnet build như P.5/P.6 — xem lệch #3). Demo CLI local build: create-only sln dir (14 created, sln NGUYÊN — opt-in OK); rerun `--solution Contoso.sln` (12 Skipped + sln Updated, entry `D954291E…` + `SharedItemsImports = 13` đúng format VS); `--solution Missing.sln` → `[ERROR] --solution 'Missing.sln': solution file not found.` trước khi tạo file; `dotnet sln list` nhận shproj |
| **Demo real-time (TestAllInOneCli)** | Global tool 4.44.44.44: temp create-only `Contoso.Shared.Test` (14 created = 12 payload + Cli.json + DevKit.json; +2 file `.env`/`.env.example` do EnsureDevKitCliJsonAsync); **fixture** `devkit new --kind project --type SharedTest --name Dev.AllInOne.Shared.Test --solution Dev.AllInOne.slnx` → 12 created + Cli.json/DevKit.json Unchanged + slnx Updated → **7 entry**; entry slnx format VS 2026 đúng (`<Project Path="Dev.AllInOne.Shared.Test/Dev.AllInOne.Shared.Test.shproj" Id="{guid-lowercase}" />`); `FakeXrmEasyTestBase.cs` sinh `using Dev.AllInOne.ProxyTypes;`; shproj footer `<!-- v.4.44.44.44 - Build: 31.12.2026 23.59.59 -->`; **`.env` md5 `52cfb0b7e647ae37d65ef6a501fec358` NGUYÊN VẶN**; không build trong fixture |
| Docs | `DynamicsCrm.DevKit.Docs/Cli/new.md`: thêm row `SharedTest` (mục Hiện trạng) + example |

### Các lệch so với handoff / thiết kế (đã ghi rõ để aP review)

1. **Manifest là 12 file, handoff ghi "manifest 11 file / 10 ProjectItems"** — đếm lại `.vstemplate`: 1 Project (shproj) + 11 ProjectItems (projitems, README.md, 7 Lib, FakeXrmEasyTestBase root, CalculateRollupFieldRequestExecutor) = 12. Work file mục 5/8 ("12+ file") khớp với 12; con số 11 trong handoff đếm thiếu. Test assert `Files.Count == 12`.
2. **Embed README.md của template 07 thiếu trong Shared.projitems từ bước 0** (11 entry có sẵn, thiếu README.md) — bẫy P.6 lặp lại nguyên văn lần 2; đã thêm entry `Resources.templates.project.sharedtest.README.md` (alphabetical giữa PluginContextBuilder.cs và Shared.projitems).
3. **Không có golden `dotnet build` test** (P.5/P.6 có): `.shproj` thuần không thể build standalone (imports CodeSharing targets chỉ có trong VS) — work file P.7 mục 8 không yêu cầu golden build; thay bằng assert nội dung trong tests + scaffold thật. Nếu aP muốn golden sln-level thì nói — sẽ thêm fixture build qua VS MSBuild.
4. **Non-interactive thiếu `--name` → lỗi `--name: required`** (lần đầu demo fixture quên passing --name qua pipe → `CanPrompt()` false): đúng thiết kế (P.6 cũng vậy), không phải bug — demo lại với `--name` explicit là OK.
5. **Fixture TestAllInOneCli thay đổi: `Dev.AllInOne.slnx` (6→7 entry) + folder `Dev.AllInOne.Shared.Test/` mới** — compare chốt 2026-10-25 (10b), fixtures commit theo P.6 pattern.

### Bài học kỹ thuật

- **Đếm manifest bằng cách parse `.vstemplate` trực tiếp** (1 `Project` + N `ProjectItem`), đừng tin con số trong handoff prompt — handoff P.7 ghi sai 11/12.
- **Đọc full wizard .cs trước khi viết handler**: SharedTest.cs gọi `AddDynamicsCrmDevKitCliJsonAsync` trong khi Package/WebResource không — ensure Cli.json/DevKit.json là wizard-parity, không phải rule chung cho mọi template.
- Payload .cs của 07 thuần nội dung thật (không token stub sang resource dùng chung như 06) — chỉ 2 file có BOM (`Shared.projitems`, `CalculateRollupFieldRequestExecutor.cs`), manifest RP=false duy nhất README.md.
- `Properties/AssemblyInfo.cs` nằm trong payload folder nhưng KHÔNG nằm trong vstemplate (chỉ build template dll) → không embed, không scaffold (đúng pattern 06).
- BOM check 12 file: `head -c 3 | od -An -tx1` nhanh hơn đọc tay.

## 10b. Compare P.7 (TestAllInOne2 VSIX vs TestAllInOneCli CLI) — CHỐT 2026-10-25

aP tạo `Dev.AllInOne.Shared.Test` bằng VSIX wizard vào TestAllInOne2 (source of truth); CLI side scaffold sẵn bằng global tool `--solution Dev.AllInOne.slnx`. Kết quả:

- **Cấu trúc: IDENTICAL 100%** (12/12 file, cùng cây — root: shproj/projitems/README/FakeXrmEasyTestBase.cs, `Lib/` 7 file, `Executor/` 1 file; slnx 2 bên đều 7 entry cùng format `<Project Path=... Id="{guid}" />`).
- **8/12 file byte-same** (`cmp` thuần, kể cả BOM file `Executor/CalculateRollupFieldRequestExecutor.cs` + README.md).
- **3/12 khác đúng GUID class**: shproj `ProjectGuid` + projitems `SharedGUID` — mỗi bên dùng GUID của mình NHẤT QUAN shproj = projitems = slnx Id (VSIX `283b5ee9…`, CLI `9bbcb6da…`); raw diff = no-CR diff → EOL identical, mỗi file chỉ khác 1 dòng GUID.
- **1/12 khác — diff class MỚI "VS sort usings"** *(aP PHÊ 2026-10-25 — expected diff, gia đình VS-reformat)*: `FakeXrmEasyTestBase.cs` — cùng dòng `using Dev.AllInOne.ProxyTypes;` nhưng VSIX đặt **dòng 1** (VS sort usings alphabetically khi instantiate template: `Dev…` < `Fake…`), CLI giữ **thứ tự payload (dòng 8)**. Payload không thể author trước để khớp mọi solution name (vị trí sort phụ thuộc tên solution) → CLI giữ byte-faithful payload.
- **DevKitVersion stamp IDENTICAL** (footer shproj không xuất hiện trong diff → annual date 31.12.2026 23.59.59 khớp 2 binary, đúng như P.6).
- slnx 2 bên 7/7 entry; `.env` md5 CLI side `52cfb0b7…` nguyên vẹn.

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ProjectTemplates/SharedTest.cs` |
| Payload | `ProjectTemplates/CSharp/07.SharedTestProjectTemplate/` — `Shared.shproj`, `Shared.projitems`, `CalculateRollupFieldRequestExecutor.cs`, `Extension.cs`, `FakeXrmEasyTestBase.cs`, `FakerHelper.cs`, `Guids.cs`, `PluginContextBuilder.cs`, `TestDataLoader.cs`, `TestHelper.cs`, `TestTracingService.cs`, `Properties/AssemblyInfo.cs`, `README.md` |
| Manifest VS | `CSharpSharedTestProjectTemplate.vstemplate` |

## 2. Template tạo ra gì

Project **Shared Test** (.shproj): hạ tầng test dùng chung cho các project Test (P.9) — FakeXrmEasy base, faker data (Bogus), builder PluginContext, tracing fake… Cùng cơ chế shproj như P.1 (đổi tên `.shproj`/`.projitems`, GlobalSection trong `.sln`).

## 3. Logic wizard hiện tại

Đọc `SharedTest.cs` khi làm. Pattern như P.1; lưu ý token `$SharedTestProject$` = `{Solution}.Shared.Test` được điền ở `AddCommonReplacementsAsync`. *(Đã đọc khi làm: wizard chỉ mở FormProject(SharedTest) + check trùng tên + SetAsync + AddDynamicsCrmDevKitCliJsonAsync; FormProject đặt tên khóa `{solutionName}.Shared.Test`, không hỏi gì thêm.)*

## 4. Thiết kế source of truth

- Handler `SharedTestProjectTemplateHandler` — tái dùng `SolutionMutator.AddSharedProjectToSolutionAsync` của P.1.
- Manifest: id `SharedTest`, order 7. Payload nhiều file `.cs` thuần (ReplaceParameters theo `.vstemplate`).

## 5. Việc phải làm (CLI)

- [x] Handler + manifest + embed payload (12 file: 9 cs + shproj/projitems + README.md).
- [x] Validate: nên có Shared project trước (cảnh báo, không chặn — xác nhận lại khi đọc wizard). *(Kết quả đọc wizard: KHÔNG có check Shared — handler cũng không check; FakeXrmEasyTestBase chỉ `using {Solution}.ProxyTypes` là tham chiếu project P.8)*
- [x] Đổi tên đích `{ProjectName}.shproj/.projitems` + thay token trong `.projitems`.

## 6. CLI surface

```
devkit new --kind project --type SharedTest --name Contoso.Shared.Test --out <dir>
```
Hỏi–đáp: project name (gợi ý `{Solution}.Shared.Test`).

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_project` `projectType="SharedTest"`.

## 8. Test & nghiệm thu

- [x] Unit test: đủ 12 file, `.sln` có entry shproj, token thay hết.
- [x] Build CLI 0/0; test pass (full suite 4859/4859).

## 9. Bàn giao

- [x] Báo cáo (xem "Kết quả thực thi" + lệch + bài học ở đầu file).
- [x] Báo cáo + user duyệt (aP duyệt 2026-10-25 sau compare chốt — using-sort là expected diff) → qua `P.8.ProxyTypes.md`.
