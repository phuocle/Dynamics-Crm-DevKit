# P.10 — UiTest Project Template (UI automation test — Selenium)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/P.10.UiTest.md`
> **Điều kiện tiên quyết:** `0.md`.
> **Trạng thái:** ✅ HOÀN THÀNH 2026-10-26 — aP duyệt (round 2: chốt bắt-lỗi ClientSecret + bump package; compare 5/6 file byte-same, csproj chỉ khác class Analyzers live-vs-local).

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ProjectTemplates/UiTest.cs` |
| Payload | `ProjectTemplates/CSharp/10.TestUiProjectTemplate/` — `ProjectTemplate.csproj.template`, `App.config`, `App.cs`, `TestSettings.cs`, `UiTest.runsettings`, `Properties/AssemblyInfo.cs`, `README.md` |
| Manifest VS | `CSharpTestUiProjectTemplate.vstemplate` |

## 2. Template tạo ra gì

Project **UiTest** (net462): Selenium + `Dynamics365.UIAutomation.Api` — `App.config` (cấu hình browser/user), `TestSettings.cs` (đọc config), `UiTest.runsettings`. NuGet: Selenium.WebDriver/ChromeDriver/Support, Bogus, MSTest.

## 3. Logic wizard hiện tại

`UiTest.cs` = pattern chuẩn P.6/P.13: FormProject(ProjectType.UiTest), chỉ check trùng tên, KHÔNG SigningHelper, KHÔNG AddDynamicsCrmDevKitCliJsonAsync. Filter OAuth-only nằm ở `FormProject.ButtonOK_ClickAsync` (KHÔNG phải trong wizard class): connection khác OAuth → error dialog "…requires OAuth username/password credentials…Please select an OAuth connection."; connection null thì KHÔNG bị chặn (render placeholder rỗng). `App.config` chỉ có `$UrlValue$/$UserNameValue$/$PasswordValue$` — **work-file claim cũ "App.config … + comment `.env`" là SAI**: payload KHÔNG có ConfigComment tokens (grep verify 2026-10-26; các comment `.env` chỉ xuất hiện ở payload Console qua `$AppConfigComment*$`).

## 4. Thiết kế source of truth

- Handler `UiTestProjectTemplateHandler`; manifest id `UiTest`, order 10 — ✅ đã làm.
- Token connection điền vào App.config — dùng chung `TokenEngine.SetConnectionValues` — ✅ (chỉ token values; payload không nhúng script nên KHÔNG cần `SetEmbeddedResourceTokensAsync`/`$CliConnectionArgs$`).

## 5. Việc phải làm (CLI)

- [x] Handler + manifest + embed payload. (`UiTestProjectTemplateHandler.cs` mới + Compile entry projitems sau Test; manifest **6 file đúng thứ tự vstemplate** — csproj→`$SafeProjectName$.csproj`, README.md RP=false, TestSettings.cs, UiTest.runsettings→`$SafeProjectName$.runsettings` (target có token, RenderManifestFilesAsync hỗ trợ sẵn), App.cs, App.config; `Properties/AssemblyInfo.cs` + `icon.png` payload-only không vào manifest; register giữa Test và WebResourceTs trong `TemplateHandlers.RegisterAll`; embed `README.md` 10 thiếu từ bước 0 — bẫy lặp lần 6 đúng dự đoán — đã thêm `Resources.templates.project.uitest.README.md`.)
- [x] App.config đúng theo connectionType — **wizard KHÔNG có nhánh theo type** (1 biến thể App.config duy nhất); filter duy nhất là OAuth-only ValidateConnection mirror FormProject (single-line, kèm `Supported types: OAuth`).

## 6. CLI surface

```
devkit new --kind project --type UiTest --name Contoso.UiTest --out <dir>
```
Hỏi–đáp: project name → connection (prompt CHỈ hiện OAuth — `UiTestProjectTemplateHandler.SupportedConnectionTypes` 1 phần tử; TaskNew đã thêm `UiTest` vào điều kiện prompt + branch ternary trước fallback Server). `devkit new list`: order 10, RequiresConnection=false (vẫn prompt như WebResource), **Ready=yes** sau khi register. `GetDefaultProjectName` generic `{Sol}.UiTest`.

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_project` `projectType="UiTest"`.

## 8. Test & nghiệm thu

- [x] Unit test `UiTestProjectTemplateHandlerTests` (23 test, pattern WebResourceTs, Offline=true hết): manifest 6 file + RP flags, create-only, `--solution` (.sln/.slnx entry thường không consumer line, có/không Shared), unknown type qua engine (NotSupportedException như VSIX), unknown `.env` AuthType reject kèm "Supported types: OAuth", **reject đủ 5 non-OAuth type** (ClientSecret/Interactive/DeviceCode/FromPac/AD — message mirror FormProject), OAuth accept, `.env` marker OAuth (placeholder rỗng — marker không mang values, App.cs đọc `DEVKIT_URL/USERNAME/PASSWORD` lúc runtime, giống VSIX render UseProjectEnvironment), no-connection → OAuth fallback placeholder rỗng, App.config mang values thật (Url/UserName/Password giải mã `Helper.EncryptString`), không .snk, BOM-less 6 file, idempotency + `--force`, golden `dotnet build` net462 (drain both pipes).
- [x] Build CLI 0/0; test pass. Full suite **4952/4952** (baseline 4929 + 23 mới); VSIX build VS MSBuild Debug sạch (đụng Shared). `ScaffoldingEngineTests.NotImplemented` fixture đổi `Report` → `SolutionPackager` (handler UiTest đã sống; fixture theo template chưa port tiếp theo = P.11).

## 9. Bàn giao

- [x] Compare trực diện 2026-10-26 — **kết quả sạch nhất từ P.8: 5/6 file BYTE-SAME** (`cmp` thuần: README.md, TestSettings.cs, Dev.AllInOne.UiTest.runsettings, App.cs, App.config), cấu trúc identical 6/6 (bin/obj VSIX side = build output aP, bỏ qua). **csproj khác ĐÚNG 1 DÒNG** = Analyzers 4.44.44.44 (feed local aP update tay sau khi tạo) vs 4.12.34.56 (CLI online live nuget.org) — class P.6/P.9 accepted; DevKitVersion/MSTest 4.5.1/Selenium 4.51.0/ChromeDriver 156.0.8078.4700 byte-same. slnx 2 bên cùng 11 entry cùng format (UiTest = entry thường không Id khớp VS): khác thứ tự (VS-alphabetical vs CLI-append) + 2 GUID shproj (mint mỗi lần) + CLI-side không trailing newline — 3 class đã biết. `.env` md5 `52cfb0b7…` nguyên xuyên suốt. **CLI side scaffold bằng runner gọi thẳng ENGINE của binary release 4.44.44.44** (global tool store, `$DevKitVersion$` annual stamp đúng) với connection = đúng object prompt trả về khi aP Enter qua 2 câu hỏi (marker `Type=OAuth, UseProjectEnvironment=true`) — harness không có TTY để trả lời prompt; flow interactive đã giải thích + aP confirm hiểu cơ chế.
- [x] Demo đã chạy thật bằng global tool 4.44.44.44 (release round 1 2026-10-26 00:52 + round 2 sau bump package): temp create-only `--offline` → 6 file Created đúng tên (`Contoso.UiTest.runsettings` retarget OK); temp `.env` ClientSecret → `[ERROR]` OAuth-only đúng message, 0 file; `devkit new list` project UiTest order 10 Ready=yes. Fixture TestAllInOneCli `.env` md5 52cfb0b7… nguyên, không build trong fixture.
- [x] Release fast (build-release-only.md) ×2: round 1 artifacts 2026-10-26 00:52; round 2 sau bump package (xem §10.8) — checklist đạt cả hai lần (annual stamp 31.12.2026 23.59.59, 4 artifacts mới, Const.cs placeholder nguyên, sweep 21 file restored, git status sạch). MCP `Mcp/**` không đổi → không cần restart connector/whoami.
- [x] Báo cáo + user duyệt (aP duyệt 2026-10-26 sau round 2 — chốt giữ behavior bắt-lỗi ClientSecret + yêu cầu bump package) → work-unit P.10 ĐÓNG; tiếp theo `P.11.SolutionPackager.md` theo thứ tự aP.

## 10. Deviation / Lesson (ghi nhận cho aP)

1. **Work-file claim sai (đã sửa §3)**: "App.config dùng … token connection + comment `.env`" — payload thật KHÔNG có ConfigComment tokens, chỉ `$UrlValue$/$UserNameValue$/$PasswordValue$` (handoff đã cảnh báo, grep xác nhận).
2. **Fallback connection = `OAuth`, KHÔNG phải `ClientSecret` như P.6/P.13**: copy nguyên fallback ClientSecret thì `ValidateConnection` OAuth-only tự bắn phá mọi scaffold non-interactive (fallback rơi đúng type bị cấm). Fallback OAuth render placeholder rỗng = đúng hành vi VSIX khi user bỏ qua connection (FormProject chỉ validate khi `CrmConnection != null`).
3. **Marker `.env` được validate như connection thường** (nhất quán precedent P.13 `UnknownEnvAuthType_Fails`): `.env` ClientSecret/Bogus → reject kèm "Supported types: OAuth"; `.env` OAuth → pass (marker không mang values → App.config rỗng). Hệ quả fixture: scaffold non-interactive trong TestAllInOneCli bị reject — interactive thì pass (prompt chỉ có OAuth + Enter dùng `.env` values).
4. **Golden build CHẠY THẬT, không bỏ** (dự phòng "cache thiếu → bỏ golden" không cần): toàn bộ package hardcode (Selenium.WebDriver/Support 3.141.0, ChromeDriver 149.0.7827.15500, UIAutomation 9.2.21084.148, MSTest 4.2.3) CÓ trong local NuGet cache → `ScaffoldAsync_GeneratedProject_BuildsNet462` pass offline (net462 restore từ cache, không network).
5. **Payload 7 file BOM-less CRLF, ASCII** (© trong csproj là byte UTF-8 C2 A9 nhưng nằm trong Windows-1252 nên VS không thêm BOM — lesson P.13.4b). `AssemblyInfo.cs` payload-only không vào manifest (pattern 06/07/08/13); `icon.png` idem.
6. **NuGet rule không đụng**: csproj.template có 2 package token (Analyzers + Dataverse.Client — đã có sẵn DefaultVersions 4.44.44.44 / 1.2.27) + 5 HARDCODED giữ nguyên VSIX parity (không tokenize). DefaultVersions từ bước 0 đã chứa sẵn toàn bộ package UiTest (UIAutomation/Selenium/Bogus) — không thêm gì.
7. **Token sweep LỚN của HasBom trong test**: copy tay từ P.13 dễ dính `read += read` (lặp vô hạn) — đã bắt và sửa thành `read += count` ngay khi viết.
8. **Round 2 (aP 2026-10-26): bump package hardcode theo NuGet-latest aP update tay bên VSIX** (`TestAllInOne2/Dev.AllInOne.UiTest.csproj`): MSTest.TestAdapter/TestFramework 4.2.3→**4.5.1**, Selenium.WebDriver/Support 3.141.0→**4.51.0**, Selenium.WebDriver.ChromeDriver 149.0.7827.15500→**156.0.8078.4700**; `Dynamics365.UIAutomation.Api` giữ **9.2.21084.148** (đã là latest — EasyRepro chưa release mới); 2 package token (Analyzers/Dataverse.Client) không đụng (aP bỏ qua). Sửa ĐÚNG 1 file payload dùng chung `10.TestUiProjectTemplate/ProjectTemplate.csproj.template` → cả VSIX zip lẫn CLI embed nhận (single source of truth, precedent P.6 bump MSBuild.Plugin). Toàn bộ versions mới CÓ trong local NuGet cache (aP restore từ VS) → golden `dotnet build` net462 PASS offline với Selenium 4.x + EasyRepro 9.2 (payload code không dùng trực tiếp OpenQA.Selenium — chỉ EasyRepro BrowserType). Full suite **4952/4952**, CLI 0/0, VSIX rebuilt, re-release EXIT sạch.
