# P.6 — WebResource Project Template (JavaScript)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/P.6.WebResource.md`
> **Điều kiện tiên quyết:** `0.md`.
> **Trạng thái:** ✅ HOÀN THÀNH + aP DUYỆT 2026-10-25 (compare chốt, hardcode bump 2.14.1)
> **Kết quả:** Handler + manifest + 27 unit tests (27/27 PASS), full Cli.UnitTests **4851/4851**, build-release-only 4 artifacts OK, golden `dotnet build` net462 PASS. **Compare TestAllInOne2 (VSIX) vs TestAllInOneCli (CLI): cấu trúc IDENTICAL, 8/9 file byte-same, khác duy nhất 1 dòng csproj = Analyzers 4.44.44.44 (local feed của aP) vs 4.12.34.56 (live nuget.org — expected).** Kèm bump `Microsoft.PowerApps.MSBuild.Plugin` 2.8.1→2.14.1 theo yêu cầu aP.

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ProjectTemplates/WebResource.cs` |
| Payload | `ProjectTemplates/CSharp/06.WebResourceProjectTemplate/` — `ProjectTemplate.csproj.template`, `package.json`, `jsconfig.json`, `devkit.js`, `DevKit.d.ts`, `generator.form.bat`, `generator.webapi.bat`, `deploy.debug.bat`, `Properties/AssemblyInfo.cs`, `README.md` |
| Manifest VS | `CSharpWebResourceProjectTemplate.vstemplate` |
| Token resource | `Replacement.cs` — `$devkit.js$`, `$devkit.d.ts$`, `$package.json$`, `$jsconfig.json$`, `$generator.form.bat$`, `$generator.webapi.bat$`, `$webresource.deploy.debug.bat$` |

Đã xác minh khi làm: payload `devkit.js`/`DevKit.d.ts`/`package.json`/`jsconfig.json`/3 bat đều là **token stub** (nội dung thật nằm trong Shared `Resources/js/*` + `Resources/bat/*` — TokenEngine đã có sẵn đủ 7 tokens); `README.md` là nội dung thật, `ReplaceParameters=false` (copy verbatim, có placeholder `4.44.44.44 Build: xxxx.yy.zz HH.mm.ss` đứng yên); `Properties/AssemblyInfo.cs` không nằm trong vstemplate (chỉ dùng build template dll) → không scaffold; **chỉ `DevKit.d.ts` có BOM** (payload stub BOM + resource không BOM → file render giữ BOM như VS); csproj.template 06 indent SPACE 2, net462, OutputType Library, PackageReference duy nhất `DynamicsCrm.DevKit.Analyzers`, **KHÔNG import `.projitems`**, có 7 `<Folder Include>`.

## 2. Template tạo ra gì

Project webresource **JavaScript**: thư mục `entities/`, thư viện `lib/devkit.js` + `devkit.d.ts` (typing cho form/webapi), `package.json` + `jsconfig.json`, bat deploy (`devkit webresource` — đúng resource `bat.webresource.deploy.debug.bat`) và bat generator (`devkit generator` profile `JS-FORM`/`JS-WEBAPI` — đúng family với item I.2/I.3).

## 3. Logic wizard hiện tại

`WebResource.cs` dùng `FormProject(ProjectType.WebResource)`: chỉ check trùng tên project; **không filter connection type nào** (FormProject chỉ chặn DeviceCode/FromPac cho Console, AD cho ConsoleCore) → CLI chấp nhận đủ 6 AuthType như Server/Package; không gọi SigningHelper (không .snk), không GetSharedProjectAsync. Default tên = `{SolutionName}.WebResource`.

## 4. Thiết kế source of truth

- Handler `WebResourceProjectTemplateHandler`. Nội dung động lấy từ resource dùng chung (js/ts/json/bat) — **không tạo nguồn kép** (đúng mục 5: ưu tiên token resource như VSIX).
- Manifest: id `WebResource`, order 6 (TemplateCatalog có sẵn, RequiresConnection=false).
- **Mở rộng đa nền tảng:** sinh `.sh` cho deploy/generator; giữ nguyên bat cho Windows.

## 5. Việc phải làm (CLI)

- [x] Handler + manifest + embed payload — manifest 9 file mirror đúng thứ tự vstemplate: csproj (`$SafeProjectName$.csproj`), README.md (RP=false), deploy.debug (bat Windows / sh còn lại), `package.json`, `jsconfig.json`, `entities/devkit.d.ts`, `lib/devkit.js`, `entities/generator.form.*`, `entities/generator.webapi.*` (bat/sh theo nền tảng). Nội dung file động đi qua tokens có sẵn; `.sh` mới qua **set-only-when-exists** (`sh.webresource.deploy.debug.sh`, `sh.generator.form.sh`, `sh.generator.webapi.sh` trong `Resources/sh/` + 3 token mới trong TokenEngine).
- [x] Thư mục rỗng: handler tạo vật lý đủ **7 Folder của vstemplate** (`lib`, `entities`, `images`, `resources`, `html`, `css`, `js`) — VS parity với `<Folder>` elements, **KHÔNG `.gitkeep`** (payload gốc không có). ⚠️ Cần aP xác nhận lại khi compare VS-created (xem mục 11 — đây là điểm tự quyết vì aP không có mặt).
- [x] `.sh` cho deploy + generator — lean contract (shebang + devkit call, **không block check devkit**), LF-only + trailing LF (verify `file`/`od`), `MarkExecutable` cho cả 3 target trong handler. Payload folder 06 có 3 stub `.sh` mới (embed vào projitems, **không** thêm vào packaging csproj 06 → không lọt zip VSIX, đúng pattern P.4).

## 6. CLI surface

```
devkit new --kind project --type WebResource --name Contoso.WebResource --out <dir>
```
Hỏi–đáp: project name → connection (cho bat; `--offline` bỏ qua) — đã thêm WebResource vào nhóm prompt connection của TaskNew (pattern Package, dùng `WebResourceProjectTemplateHandler.SupportedConnectionTypes`).

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_project` `projectType="WebResource"`.

## 8. Test & nghiệm thu

- [x] Unit test: `WebResourceProjectTemplateHandlerTests.cs` — 27 tests theo pattern `PackageProjectTemplateHandlerTests`: manifest 9 file + RP flags; create-only không solution; `--solution` missing → lỗi trước khi tạo file; invalid name; unknown connection type → NotSupportedException (engine CliArgsBuilder); unknown `.env` AuthType → lỗi kèm supported list; đủ 6 AuthType (DataRow); null connection → marker `.env`; không connection + không `.env` → bake placeholder ClientSecret; **không .snk**; scripts nhúng CLI connection args (explicit/marker/placeholder); bash twins + stubs; 7 folder vật lý + không .gitkeep; `lib/devkit.js`/`entities/devkit.d.ts` == resource; `package.json` stamp `$LogicalProjectName$`; solution entry thường (có/không Shared đều **không** consumer line — csproj không import projitems); slnx entry thường; BOM state (chỉ devkit.d.ts có BOM); rerun skip; `--force` overwrite; **golden `dotnet build` net462 PASS**. Tất cả `ProjectTemplateInput` `Offline=true` (rule test).
- [x] Build CLI 0/0; test pass — full suite **4851/4851** (4824 + 27). VSIX build VS MSBuild OK (đụng Shared). Lưu ý: `Cli.UnitTests --no-incremental` hiện có **2 warning CA2022 pre-existing** tại `SolutionMutatorTests.cs:151` + `SharedProjectTemplateHandlerTests.cs:234` (pattern `stream.Read` 1 lần, committed từ trước, ngoài phạm vi P.6 — file mới dùng while-loop nên không warning).

## 9. Bàn giao

- [x] Báo cáo + user duyệt (aP duyệt 2026-10-25 sau compare chốt + bump 2.14.1) → qua `P.7.SharedTest.md`.

## 10. Release (build-release-only, 2026-10-25 — chạy 3 lần: 18:55, 20:56, 21:14)

- [x] `Release-DynamicsCrm-DevKit.ps1` chạy xong (lần cuối 21:14 sau bump 2.14.1); global `devkit`/`devkit-tool` 4.44.44.44; build date `31.12.2026 23.59.59` (annual từ ReleaseConfig — không phải bug).
- [x] 4 artifacts `Published/4.44.44.44/` (Analyzers/Cli/Tool nupkg + Vsix vsix, rebuilt 21:14); VSIX DLL chứa `WebResourceProjectTemplateHandler` (unzip + grep -a = 2 hits); **VSIX zip template + CLI embed đều `MSBuild.Plugin 2.14.1`** (grep verify 2 bên).
- [x] `Const.cs` còn `xxxx.yy.zz HH.mm.ss`; không còn file replacement sót.
- [x] Demo scaffold bằng **global tool**: temp dir create-only (9 files, Analyzers online 4.12.34.56) + **fixture thật TestAllInOneCli `--solution Dev.AllInOne.slnx`** (9 created + slnx Updated → 6 entry; `.env` md5 `52cfb0b7…` nguyên; không build trong fixture).

## 10b. Compare P.6 (TestAllInOne2 VSIX vs TestAllInOneCli CLI) — CHỐT 2026-10-25 ~21:20

aP tạo `Dev.AllInOne.WebResource` bằng VSIX wizard vào TestAllInOne2 (source of truth, kèm slnx entry); em scaffold CLI vào TestAllInOneCli `--solution`. Kết quả:

- **Cấu trúc thư mục: IDENTICAL 100%** (find 2 bên — 7 folder vật lý + 9 file, VS xác nhận đúng quyết định tạo 7 folder của handler).
- **8/9 file byte-same** (`cmp` thuần): README.md, deploy.debug.bat, package.json, jsconfig.json, entities/devkit.d.ts, entities/generator.form.bat, entities/generator.webapi.bat, lib/devkit.js. Kể cả deploy/generator bats byte-same → VSIX wizard của aP chạy với marker connection (args rỗng) giống CLI `.env` marker. **Diff class DevKitVersion biến mất** — cả 2 binary annual date 31.12.2026 23.59.59 (full release script stamp cả Const.cs lẫn payload READMEs).
- **1/9 khác — csproj đúng 1 dòng:** `DynamicsCrm.DevKit.Analyzers` **4.44.44.44 (aP update NuGet trong VS từ local feed)** vs **4.12.34.56 (CLI live nuget.org)** — expected class online-vs-local-feed, đúng như P.3/P.5 compare.
- aP đồng thời update TestAllInOne2: Package `MSBuild.Plugin` 2.8.1→2.14.1 + Analyzers 4.12.34.56→4.44.44.44 (Package + Server) — gốc của yêu cầu bump 2.14.1.

## 11. Lệch so với kế hoạch / cần aP quyết

1. **Folder rỗng tạo vật lý đủ 7** — kế hoạch ghi "thư mục `entities/` (tạo rỗng + `.gitkeep` nếu cần)". Quyết: tạo đủ 7 Folder của vstemplate (VS parity), không `.gitkeep`. Khi aP tạo prj WebResource bằng VSIX vào TestAllInOne2, so với CLI scaffold — nếu VS không tạo vật lý (hoặc ngược lại) thì sửa 1 dòng `Folders` trong handler.
2. **Không đụng 3 bat dùng chung** (`webresource.deploy.debug.bat`, `generator.form.bat`, `generator.webapi.bat`) — chúng vẫn còn block check `where devkit`, khác lean contract P.4 đã áp cho plugin bats. Rule bắt đầu phiên: "CONFIRM với aP trước khi sửa bat dùng chung" → để nguyên, cần aP phê lean hóa (sẽ đổi nội dung 3 bat này trong payload scaffold; test hiện không assert block check nên không phải sửa test).
3. **Consumer line không bao giờ thêm cho WebResource** — csproj 06 không import `.projitems` (khác Package có import `Condition Exists`) nên handler gọi `AddProjectToSolutionAsync` **không truyền** sharedProjectFile, kể cả khi workspace có Shared. Test `ScaffoldAsync_RegistersPlainSolutionEntry` chốt hành vi này.
4. **projitems thiếu embed README.md của 06** (handoff ghi "đã có từ bước 0" nhưng thực tế 01–05 có, 06 không) — đã thêm entry `Resources.templates.project.webresource.README.md`.
5. **Bài học lặp lại (lần 3):** file `.cs` mới trong Shared phải khai báo `<Compile>` trong projitems — quên lần đầu, build CLI lỗi CS0246 rồi thêm `Templates\Handlers\WebResourceProjectTemplateHandler.cs`.

## 12. Bài học kỹ thuật

- vstemplate thứ tự ProjectItems: csproj, README, deploy.debug, package.json, jsconfig.json, `entities\devkit.d.ts`, `lib\devkit.js`, generator.form, generator.webapi — manifest giữ đúng thứ tự để test assert index.
- `TargetFileName` lồng thư mục dùng dấu `/` (`entities/devkit.d.ts`) — cross-platform; `RenderManifestFilesAsync` tự tạo dir theo target.
- BOM từng file của 06: chỉ `DevKit.d.ts` (stub có BOM); bat stub 1 dòng không newline; bat resource CRLF không trailing newline; `package.json` resource CRLF không trailing newline — tất cả giữ nguyên byte qua pipeline (StreamWriter.Write không normalize).
- Token resource cho 06 đã có sẵn 7/7 trong TokenEngine từ trước (đặt từ các P trước) — P.6 chỉ bổ sung 3 sh tokens set-only-when-exists.
