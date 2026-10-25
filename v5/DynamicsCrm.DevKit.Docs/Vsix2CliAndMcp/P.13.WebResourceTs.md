# P.13 — WebResourceTs Project Template (TypeScript)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/P.13.WebResourceTs.md`
> **Điều kiện tiên quyết:** `0.md`; cùng family với `P.6.WebResource`.
> **Trạng thái:** ✅ HOÀN THÀNH 2026-10-26 — aP duyệt (kill glyph từ gốc; so sánh 11/12 identical + csproj Analyzers = class live-vs-local đã chấp nhận từ P.9; việc tạo lại VSIX-side fixture được aP bỏ qua — output build.js dự kiến khớp do resource giờ ASCII thuần, cơ chế đã pin bằng counter-example).
> **Liên hệ CLI sẵn có:** `devkit webresource` (build TS qua `npm run build`/`node build.js` — đã có logic cross-platform trong `TaskWebResource.cs`).

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ProjectTemplates/WebResourceTs.cs` |
| Payload | `ProjectTemplates/CSharp/13.WebResourceTsProjectTemplate/` — `ProjectTemplate.csproj.template`, `package.json`, `tsconfig.json`, `.eslintrc.json`, `build.js`, `devkit.ts`, `devkitts.d.ts`, `generator.form.bat`, `generator.webapi.bat`, `deploy.debug.bat`, `deploy.release.bat`, `Properties/AssemblyInfo.cs`, `README.md` |
| Manifest VS | `CSharpWebResourceTsProjectTemplate.vstemplate` |
| Token | `$devkit.ts$`, `$devkitts.d.ts$`, `$build.js$`, `$package.json$`, `$generator.form.ts.bat$`, `$generator.webapi.ts.bat$`, `$webresource.deploy.debug.ts.bat$`, `$webresource.deploy.release.ts.bat$` |

## 2. Template tạo ra gì

Project webresource **TypeScript** hoàn chỉnh: toolchain build (`build.js` + `tsconfig` + eslint + jest qua package.json), thư viện `lib/devkit.ts` + `devkit.d.ts`, bat generator (sinh form/webapi TS — family với I.14/I.15), bat deploy debug/release (`devkit webresource`).

## 3. Logic wizard hiện tại

`WebResourceTs.cs` = pattern P.6 y hệt: FormProject(ProjectType.WebResourceTs), check trùng tên, KHÔNG SigningHelper, KHÔNG AddDynamicsCrmDevKitCliJsonAsync. FormProject **không lọc connection type** cho WebResourceTs (chỉ Console/ConsoleCore/UiTest bị lọc) → đủ 6 AuthType, vào nhóm prompt connection trong TaskNew như WebResource.

## 4. Thiết kế source of truth

- Handler `WebResourceTsProjectTemplateHandler`; manifest id `WebResourceTs`, order 13 — ✅ đã làm.
- Resource `Resources/ts/*` (build.js, devkit.ts, devkit.d.ts — đã embed từ bước 0) là nguồn token; payload 13 chỉ mang stub `$token$` — không nguồn kép, giống P.6. ✅
- `.sh` cho deploy + generator — ✅ đã tạo 4 file mới (xem §5).

## 5. Việc phải làm (CLI)

- [x] Handler + manifest + embed payload. (`WebResourceTsProjectTemplateHandler.cs` mới + Compile entry projitems; manifest 12 file đúng thứ tự vstemplate; register cuối `TemplateHandlers.RegisterAll`)
- [x] Thư mục rỗng theo vstemplate — **deviation**: vstemplate KHÔNG declare `src/`; nó declare **7 folder**: `lib`, `entities`, `build`, `images`, `resources`, `html`, `css` (handoff nói "chỉ 2 folder" đã cũ — theo vstemplate thật). Handler tạo đủ 7 vật lý, không .gitkeep.
- [x] `.sh` tương đương 4 bat. 4 stub payload mới `13/*.sh` (LF, chỉ token, không trailing newline) + 4 resource mới `Resources/sh/*.sh` (LF, lean 2 dòng shebang + devkit call, KHÔNG block check — lean contract aP 2026-10-25) + TokenEngine 4 token set-only-when-exists + MarkExecutable ×4 + embed projitems có `WithCulture="false"` (bẫy AssignCulture, xem §10). Tên resource: `sh.webresource.deploy.debug.ts.sh`, `sh.webresource.deploy.release.ts.sh`, `sh.generator.form.ts.sh`, `sh.generator.webapi.ts.sh`.
- [x] Hint sau scaffold: `npm install` trước khi build — channel `result.AddWarning(...)` (kênh duy nhất có sẵn; in vàng qua ActionWarning, không đụng success text). Deploy scripts tự `npm install` khi thiếu `node_modules` nên hint chỉ nhắc build đầu tiên.

## 6. CLI surface

```
devkit new --kind project --type WebResourceTs --name Contoso.WebResourceTs --out <dir>
```
Hỏi–đáp: project name → connection (cho bat). TaskNew đã thêm `WebResourceTs` vào điều kiện prompt + `WebResourceTsProjectTemplateHandler.SupportedConnectionTypes` (đủ 6). `devkit new list`: order 13, RequiresConnection=false, Ready=yes sau khi register.

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_project` `projectType="WebResourceTs"`.

## 8. Test & nghiệm thu

- [x] Unit test `WebResourceTsProjectTemplateHandlerTests` (28 test, pattern P.6, Offline=true hết): manifest 12 file theo platform (bat Windows / sh Unix), RP=false verbatim cho README.md + .eslintrc.json, create-only, `--solution` (.sln/.slnx, entry thường không consumer line), đủ 6 connection types, env marker, ClientSecret placeholder, không .snk, scripts nhúng args + profile (DEBUGTS/TS-FORM/TS-WEBAPI), marker connection rỗng args, 4 resource sh lean + 4 stub, 7 folder, lib/* = resource `ts.*` (+ trailing CRLF của stub — xem §10), BOM-less toàn bộ, idempotency, `--force`, hint npm install, golden `dotnet build` net462 (drain both pipes).
- [x] Build CLI 0/0; test pass. Full suite **4929/4929** (baseline 4901 + 28 mới); VSIX build VS MSBuild Debug sạch. `ScaffoldingEngineTests.NotImplemented` fixture đổi `WebResourceTs` → `Report` (handler đã sống).

## 9. Bàn giao

- [x] Compare trực diện 2026-10-26 (aP tạo VSIX side `Dev.AllInOne.WebResourceTs` vào TestAllInOne2 00:21, CLI scaffold vào TestAllInOneCli 00:22, .env md5 giữ nguyên 52cfb0b7…): **11/12 file byte-identical** (README, 2 deploy bats, package.json, .eslintrc.json, tsconfig.json, lib/devkit.d.ts, lib/devkit.ts, 2 generator bats + build.js sau fix), 7/7 folder rỗng khớp. Diff còn lại: csproj Analyzers 4.44.44.44 (VSIX) vs 4.12.34.56 (CLI online) — cùng class P.9 "live-vs-local" đã chấp nhận. slnx: thứ tự VS-alphabetical vs CLI-append + GUID khác — class chuẩn.
- [x] **Kill BOM từ gốc (aP chốt 2026-10-26)**: thay ⚠✓✗ bằng `[WARN]`/`[OK]`/`[X]` trong `Resources/ts/build.js` (7 dòng log — các glyph không nằm trong Windows-1252, VS host thêm UTF-8 BOM khi ghi file có ký tự ngoài codepage; csproj có © nhưng © nằm trong 1252 nên không bao giờ dính). Resource giờ ASCII thuần → cả VSIX lẫn CLI output không BOM, không còn diff class này. Đã build lại CLI (0/0) + VSIX + full suite **4929/4929** + release lại 4 artifacts (00:32) + re-scaffold fixture `--force` (build.js Updated, 11 file khác Unchanged, .env md5 nguyên). **Còn lại: aP tạo lại project WebResourceTs trong VS (TestAllInOne2) để lấy build.js mới rồi compare chốt.**
- [x] Báo cáo + user duyệt (aP duyệt 2026-10-26) → work-unit P.13 ĐÓNG; tiếp theo P.10.UiTest → P.11.SolutionPackager → P.12.Report theo thứ tự aP chỉ.

## 10. Deviation / Lesson (ghi nhận cho aP)

1. **Vstemplate declare 7 folder** (lib, entities, build, images, resources, html, css) — handoff/work file ghi "chỉ 2 folder" và "src/" đã cũ; theo vstemplate thật. csproj.template mirror đủ 7 (`Folder Include`).
2. **Bẫy AssignCulture tái xuất (P.8)**: handoff đoán `"ts" không phải culture` — SAI, **`ts` = Tsonga, culture ICU hợp lệ**. 4 resource `Resources/sh/*.ts.sh` không LogicalName bị drop âm thầm khỏi assembly net10; test `IsNotNull` bắt được ngay. Fix `WithCulture="false"` + comment XML trong projitems (precedent `proxytypes.run.bat`/`proxytypes.run.sh`). 4 stub payload không dính vì đều có LogicalName tường minh.
3. **Stub trailing CRLF**: payload stub `devkit.ts`/`devkitts.d.ts`/`build.js` (và `deploy.release.bat`) trong folder 13 có trailing CRLF (VSIX gốc) — file render = resource + `\r\n`. Test assert theo byte-faithful (resource + `\r\n`), không "sửa" payload. Stub `deploy.debug.bat`/`generator.*.bat` không có trailing.
4. **Profile DEBUGTS cho release**: bat `webresource.deploy.release.ts_bat` chạy `npm run release` rồi deploy `--profile "DEBUGTS"` — đây KHÔNG phải bug: Cli.json chỉ có 1 profile TS webresource là `DEBUGTS` (không có RELEASETS). sh twin mirror verbatim. Nếu aP muốn profile `RELEASETS` riêng thì phải sửa cả VSIX resource + Cli.json (ngoài scope P.13).
4b. **BOM build.js — đã kill từ gốc (aP chốt)**: VS template host tự thêm UTF-8 BOM khi ghi file output có ký tự NẰM NGOÀI Windows-1252 (⚠✓✗ của build.js log; © thì nằm trong 1252 nên csproj không bao giờ dính). Fix: thay glyphs bằng `[WARN]`/`[OK]`/`[X]` trong `Resources/ts/build.js` — resource ASCII thuần, không còn BOM 2 bên. Lưu ý fix BOM bằng cách thêm BOM vào stub/resource KHÔNG hiệu quả bên CLI (ReadContentAsync strip BOM, cờ HasBom thuộc stub) — kill glyph là đường duy nhất sạch. `Resources/ts/README.md` (6 dòng non-ASCII) KHÔNG được embed + payload README là file thật RP=false → không chảy vào output, để nguyên. Scan toàn bộ ItemTemplates 01–18: thuần ASCII → I.14/I.15 tương lai an toàn.
5. **`Properties/AssemblyInfo.cs`** trong payload KHÔNG nằm trong vstemplate và không được csproj.template tham chiếu (SDK-style) — file chết của payload, manifest không đưa vào (giống P.6).
6. **`.eslintrc.json` có thật** trong payload (handoff nghi thiếu — đã verify). RP=false, embed có sẵn từ bước 0 với LogicalName `Resources.templates.project.webresourcets..eslintrc.json` (double dot — EndsWith match ok).
7. **embed README.md 13 thiếu từ bước 0** (bẫy lặp lần 5 đúng như dự đoán) — đã thêm `Resources.templates.project.webresourcets.README.md`.
8. NuGet: csproj.template 13 chỉ có `DynamicsCrm.DevKit.Analyzers` → không đụng NuGet rule (DefaultVersions/NuGetVersionCache không đổi). Golden build offline qua cache.
