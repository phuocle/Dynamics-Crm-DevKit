# P.3 — ConsoleCore Project Template (net10 — console đa nền tảng)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/P.3.ConsoleCore.md`
> **Điều kiện tiên quyết:** `0.md`, `P.2.Console.md` (cùng family, tái dùng token resource ConsoleCore).
> **Trạng thái:** ✅ **HOÀN THÀNH 2026-10-25 — chờ user duyệt** (CLI 0 err/0 warn, VSIX net48 build pass, 23/23 test Templates mới, full Cli.UnitTests **4773/4773** — baseline 4750 + 23, global devkit released + demo thật TestAllInOneCli + **kiểm chứng vàng `dotnet build` project net10 sinh ra PASS thật**). Chi tiết: xem "Kết quả thực thi" bên dưới.
> **Làm xong file này mới được qua:** `P.4.Server.md` (chờ user duyệt)

## Kết quả thực thi (cập nhật sau khi làm xong — 2026-10-25)

### Đã giao những gì

| Hạng mục | Kết quả |
|---|---|
| Handler | `DynamicsCrm.DevKit.Shared/Templates/Handlers/ConsoleCoreProjectTemplateHandler.cs` — 7 payload file theo `.vstemplate` (csproj/README/App.cs/AppSettings.json/Program.cs/Lib Helper+TracingServiceFake), chọn biến thể `App.cs`/`AppSettings.json` theo connectionType (token payload `App.cs` chứa `$AppCore.cs$` — KHÔNG phải `$App.cs$`), enforce restriction net10 (chặn `AD` — ngược P.2), đăng ký vào `TemplateHandlers.RegisterAll()` (id `ConsoleCore`, order 3) |
| Manifest + embed | `.projitems` thêm 1 EmbeddedResource: `README.md` của template ConsoleCore (6 file kia đã embed sẵn từ bước 0, LogicalName `Resources.templates.project.consolecore.*`) + 1 Compile entry cho handler mới |
| Connection | `TokenEngine.SetConsoleCoreResourceTokensAsync` **đã có sẵn public từ P.2** — P.3 chỉ gọi lại sau khi resolve connection null (giống P.2: `.env` marker → placeholder `ClientSecret`) |
| CLI prompt | `TaskNew` gọi `ConnectionPrompter.Prompt` cho ConsoleCore với `ConsoleCoreProjectTemplateHandler.SupportedConnectionTypes` = `Interactive, DeviceCode, ClientSecret, FromPac, OAuth` (AD bị loại khỏi SelectionPrompt — ngược P.2); FromPac chọn PAC profile qua `PacProfileHelper` nhờ hạ tầng generic của P.2 |
| Fallback non-interactive | Handler tự resolve khi `CrmConnection == null`: marker từ `.env` → không có `.env` thì bake placeholder `ClientSecret`. Validation AD chạy cho MỌI nguồn (port message FormProject) |
| SolutionMutator | Tái dùng nguyên hạ tầng P.2: `AddProjectToSolutionAsync(sln, csproj, sharedProjectFile)` thêm entry + config entries + consumer line `SharedItemsImports = 5` (GUID = GUID entry sln); `.slnx` Path-only |
| Test | `ConsoleCoreProjectTemplateHandlerTests.cs` mới (23 test: manifest 7 file + ReplaceParameters flags; DataRow **5 AuthType** so App.cs/AppSettings.json **đúng byte với resource + token** + payload chung; explicit values thay AppSettings.json thật; null connection → .env marker; .env AD/Bogus → error; unknown type → `NotSupportedException` như VSIX; sln entry + 4 config entries + consumer line cùng GUID; ConsoleCore-trước-Shared → rerun gắn consumer line vào GUID entry cũ; không Shared → không consumer line + không tạo Cli.json/DevKit.json; .slnx entry Path-only; BOM theo payload từng file (AppSettings.json KHÔNG BOM); rerun skip + `--force`; **`dotnet build` project sinh ra PASS**) |
| Build/Test | `dotnet build` CLI **0 err / 0 warn**; VSIX build VS MSBuild 18 Enterprise **pass** (net48 OK); Templates 23/23 mới, full Cli.UnitTests **4773/4773** (~28s) — không regression (baseline 4750) |
| Release + demo | `Release.DynamicsCrm.DevKit.Cli.ps1` OK — devkit global `4.44.44.44 Build: 25.10.2026 13:59:11`, SHA `F23B5642…`, nupkg + manifest dưới `Published/4.44.44.44/`, Const.cs restore `xxxx.yy.zz HH.mm.ss`. **Kiểm chứng vàng**: temp dir scaffold Shared + ConsoleCore bằng global tool → `dotnet build Demo.ConsoleCore.csproj` → **0 error** (45 warnings DEVKIT1005 là chính DevKit Analyzers phân tích Shared code — đúng thiết kế). Demo thật vào `TestAllInOneCli` (non-interactive → .env ClientSecret marker của aP): 7 file + slnx entry; **App.cs/AppSettings.json/Program.cs/Lib 5 file IDENTICAL từng byte với REF** `TestAllInOne/Dev.AllInOne.ConsoleCore/` (BOM 7/7 giống REF — lần này REF nguyên vẹn nên so trực tiếp được); `.env` md5 `52cfb0b7…` KHÔNG ĐỔI; rerun 8 skipped exit 0. Demo per-AuthType (temp .sln + .env mỗi loại): 5 loại sinh đúng biến thể App.cs + AppSettings.json (**IDENTICAL resource+token**, không `$token$` sót), AD exit 1 đúng message FormProject |
| Docs | `DynamicsCrm.DevKit.Docs/Cli/new.md` thêm ConsoleCore (Ready) vào Hiện trạng + Hành vi connection + Examples |
| Fixture infra | `TestAllInOneCli/.editorconfig` (theo yêu cầu aP sau review): tắt toàn bộ 21 rule DEVKIT1001–DEVKIT1021 (`dotnet_diagnostic.*.severity = none`, không set `root` để .editorconfig repo vẫn cascade) — build project trong fixture từ 45 warnings DEVKIT1005 về **0 DEVKIT** (28 warnings còn lại là NU1903 audit lỗ hổng transitive `System.Security.Cryptography.Xml 8.0.2` — KHÔNG phải DevKit analyzer, để aP quyết có tắt thêm không) |

### So sánh chuẩn đối chiếu (payload nguồn + token) — TestAllInOneCli

| File | Kết quả so payload+token | So reference VSIX (`TestAllInOne/Dev.AllInOne.ConsoleCore`) |
|---|---|---|
| `App.cs` | IDENTICAL (BOM + `$AppCore.cs$` → resource ClientSecret + `$NameSpace$`) | **IDENTICAL từng byte** (kể cả BOM — REF nguyên vẹn không bị aP sửa tay) |
| `AppSettings.json` | IDENTICAL (KHÔNG BOM + `$AppSettings.json$` → resource + giá trị rỗng marker) | **IDENTICAL từng byte** |
| `Program.cs`, `Lib/Helper.cs`, `Lib/TracingServiceFake.cs` | IDENTICAL (token chung resource Shared root + `$NameSpace$`) + BOM | **IDENTICAL từng byte** |
| `Dev.AllInOne.ConsoleCore.csproj` | **IDENTICAL bytes** (PowerShell so 12 token: namespace/project/year/DevKitVersion/SharedProject/7 NuGet — CRLF giữ nguyên) | chỉ khác build timestamp + NuGet version live 30.06.2026 (`Azure.Identity 1.21.0`, `M.E.Configuration 10.0.9`) + REF **thiếu dòng `Microsoft.Identity.Client.Extensions.Msal`** (REF sinh từ template cũ hơn trước khi thêm package — chuẩn vẫn là payload hiện tại) |
| `README.md` | IDENTICAL verbatim payload (`Build: xxxx.yy.zz HH.mm.ss` giữ nguyên — ReplaceParameters=false) | reference có build date thật vì VSIX release script thay placeholder (giống P.2) |
| `Dev.AllInOne.slnx` | entry `<Project Path="Dev.AllInOne.ConsoleCore/Dev.AllInOne.ConsoleCore.csproj" />` | IDENTICAL format (Path-only) |

### Các lệch so với thiết kế gốc của file này (đã được user thông báo khi bàn giao)

1. **Mục 5 "Sinh `.snk` nếu wizard hiện tại có" = KHÔNG có**: đã đọc `ConsoleCore.cs` — wizard không gọi `SigningHelper.GenerateKey`, payload không SignAssembly → không sinh `.snk` (giống P.2). Trong 13 project wizard của VSIX, duy nhất `Server.cs` gọi SigningHelper (P.4 sẽ dùng `SigningService` của core cho family đó); ConsoleCore/Console/Shared là app/tool không cần strong-name → sinh `.snk` sẽ là LỆCH với output VSIX (file thừa + csproj có SignAssembly mà template không khai báo).
2. **Mục 5 "TokenEngine nhánh ConsoleCore" đã có sẵn từ P.2** (public method `SetConsoleCoreResourceTokensAsync` tách sẵn) — P.3 chỉ gọi lại, không sửa TokenEngine.
3. **Interface là `ITemplateHandler`** như P.2 (bước 0 xây), không phải tên khác — giữ interface thật của engine.
4. **Smoke đa nền tảng**: làm trên máy dev Windows theo spec (net10 SDK có sẵn) — `dotnet build` PASS cả trong unit test lẫn demo bằng global tool; chưa chạy trên Linux/macOS thật (không có máy — template là net10 SDK-style nên khả thi, bằng chứng build này).
5. **REF csproj thiếu package `Microsoft.Identity.Client.Extensions.Msal`** hiện có trong payload (REF sinh 30.06.2026 từ bản template cũ hơn) — chuẩn đối chiếu vẫn là **payload + token** (khác version NuGet live vs DefaultVersions offline cũng là EXPECTED như P.2).
6. **README.md giữ build-date placeholder** — cùng lệch #7 của P.2 (CLI release không chạy dateReplacement của `DevKit.ReleaseConfig.json`).
7. **Golden `dotnet build` có 45 warnings DEVKIT1005** từ chính `DynamicsCrm.DevKit.Analyzers` phân tích Shared sources (`DevKitJson.cs` "Entity Reference maybe null") — **0 error**, exit 0; analyzer hoạt động đúng, không phải lỗi của template.

### Fix round 2 (2026-10-25, sau khi aP dùng VSIX tạo TestAllInOne2): NuGet version stale

aP mở solution `TestAllInOne2` (3 prj do VSIX tạo) bị lỗi NuGet ở `Microsoft.Identity.Client.Extensions.Msal` — VSIX đã ghi **4.83.1** (bảng `NuGetHelper.DefaultVersions`, fetch từ 19.03) trong khi 4 package khác lên live (preload cache có chúng). Hai defect đã fix:

1. **`NuGetVersionCache.Packages` preload list THIẾU Msal** — package duy nhất của family ConsoleCore không được preload → `SetReplacementAsync` lấy ngay bảng fallback (ưu tiên bảng hơn live query cho mọi package có trong bảng). Đã thêm Msal vào preload list.
2. **Bảng `DefaultVersions` stale**: Msal 4.83.1 kéo transitive `System.Security.Cryptography.Xml 8.0.2` có 7 advisory high-severity (NU1902/NU1903 — đúng 28 warnings từng thấy khi build fixture). Refresh 6 entry về latest nuget.org 25.10 (khớp bộ aP đã tự update + restore sạch): **Msal 4.91.1, Azure.Identity 1.21.0, M.E.Configuration/Json 10.0.13, Dataverse.Client 1.2.27, NSubstitute 6.2.0** (NSubstitute 6.2.0 restore sạch cả trên net462 Console — chứng minh bằng solution thật của aP). Test asserts cập nhật theo; full suite 4773/4773, golden `dotnet build` restore + build bộ mới PASS.

### Fix round 3 (2026-10-25, aP so TestAllInOne2 vs TestAllInOneCli): CLI stamp NuGet không latest

VSIX tạo TestAllInOne2 = mọi NuGet latest (preload cache live), còn CLI tạo TestAllInOneCli = phiên bản bảng offline — vì `SetReplacementAsync` ưu tiên bảng ngay khi cache trống và CLI không bao giờ chạy preload. Đã fix cho **parity**: `TokenEngine.AddNuGetTokensAsync` chuyển sang `NuGetHelper.SetReplacementsAsync(packages, offline)` mới — **online (mặc định) query nuget.org song song 18 package** (mỗi query timeout riêng + fallback bảng khi lỗi), `--offline` hoặc mất mạng thì stamp bảng instantly. Analyzers online ra **4.12.34.56** — version public latest trên nuget.org (4.44.44.44 chưa upload — aP xác nhận 4.12.34.56 là đúng). Unit tests giữ deterministic bằng `Offline = true` trên mọi project-scaffold input (assert bảng). TestAllInOneCli Console + ConsoleCore đã refresh bằng CLI mới: đủ bộ live versions khớp TestAllInOne2, `.env` + slnx nguyên vẹn. Phát hiện kèm: **CLI build bằng FULL release script nhúng payload READMEs ĐÃ thay build date thật** (31.12.2026 23.59:59 — giống VSIX); lệch "README giữ placeholder" chỉ đúng với CLI-only release script.

### Bài học kỹ thuật (cho các file P.*/I.* sau)

- **Payload ConsoleCore khác Console đúng 2 điểm**: token App là `$AppCore.cs$` (không phải `$App.cs$`), file config là `AppSettings.json` 1-token KHÔNG BOM (thay `App.config.template`). Lib/Program/TracingServiceFake dùng CHUNG resource Shared root — handler không cần thêm gì cho các file này.
- **AppSettings.json KHÔNG có token comment `.env`** như App.config của P.2 — resource có sẵn dòng `"__DevKit__": "Empty Dataverse values are read from project .env."` vô điều kiện; chỉ có value tokens (`$UrlValue$`…). Expected-builder đơn giản hơn P.2 (không nhánh Comment).
- **csproj ConsoleCore TAB indentation** (Console P.2 dùng space): file copy verbatim nên tự đúng; test khóa bằng assert `"\n\t<PropertyGroup>"` — nhớ payload CRLF, assertion có prefix `">` + `\n` sẽ KHÔNG match `">\r\n` (dính khi viết assert lần đầu).
- **So tokenized chuẩn phải dùng PowerShell, không dùng sed trong Git Bash**: MSYS sed strip CR khi đọc file Windows → diff toàn bộ dòng dù content đúng (đã dính; bytes ba bên payload/CLI/REF đều CRLF). Bài học P.1 "bash \\-collapse" mở rộng: cả CRLF cũng bị MSYS bẩn.
- **`CliArgsBuilder.Build` return rỗng ngay với marker connection** (`UseProjectEnvironment=true`) — test DataRow với mọi type marker không cần fields; chỉ explicit connection mới đi vào build args từng type.
- **Golden `dotnet build` trong unit test rẻ**: packages đã cache (DefaultVersions trùng bộ CLI/Shared dùng hằng ngày) — build project net10 + import Shared chỉ ~1-3s; drain both pipes trước WaitForExit (bài học pac-help-deadlock) để không treo CI.
- **Mỗi package template stamp PHẢI có mặt trong `NuGetVersionCache.Packages`** (preload) — `SetReplacementAsync` ưu tiên bảng `DefaultVersions` ngay khi cache chưa sẵn, nên package nào thiếu trong preload sẽ lấy version bảng (dễ stale). Khi P.4+ thêm package mới vào `DefaultVersions`: thêm ĐỒNG THỜI vào preload list + refresh bảng bằng latest thật (query flatcontainer nuget.org, bỏ prerelease) — version stale không chỉ cũ mà có thể kéo transitive có lỗ hổng (Msal 4.83.1 → Cryptography.Xml 8.0.2).

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ProjectTemplates/ConsoleCore.cs` |
| Payload | `ProjectTemplates/CSharp/03.ConsoleCoreProjectTemplate/` — `ProjectTemplate.csproj.template`, `App.cs`, `AppSettings.json`, `Helper.cs`, `Program.cs`, `TracingServiceFake.cs`, `Properties/AssemblyInfo.cs`, `README.md` |
| Manifest VS | `CSharpConsoleCoreProjectTemplate.vstemplate` |
| Token | `Replacement.cs` — nhánh ConsoleCore của `SetEmbeddedResourceAsync` |

## 2. Template tạo ra gì

Project console **net10.0** — bản "hiện đại" của P.2, thay `App.config` bằng **`AppSettings.json`**:
- `$AppCore.cs$` ← resource `cs.consolecore.App.{connectionType}.cs`.
- `$AppSettings.json$` ← resource `cs.consolecore.AppSettings.{connectionType}.json`.
- Cùng bộ token connection/NuGet như P.2.

**Đặc quyền của template này trong bối cảnh đa nền tảng:** project sinh ra là net10 + SDK-style → là project **build được thật sự trên Linux/macOS** bằng `dotnet build`. Nó là nơi chứng minh end-to-end rõ nhất của toàn bộ nỗ lực CLI hoá (scaffold bằng `devkit` xong build bằng `dotnet` luôn trên máy không Windows).

## 3. Logic wizard hiện tại

Giống P.2 (`FormProject(ProjectType.ConsoleCore)`), chỉ khác nhánh resource. Đọc `ConsoleCore.cs` trước khi làm.

## 4. Thiết kế source of truth

- Handler `ConsoleCoreProjectTemplateHandler` trong Shared; tái dùng toàn bộ hạ tầng token của P.2 (chỉ khác prefix resource `cs.consolecore.*`).
- Manifest: id `ConsoleCore`, order 3.

## 5. Việc phải làm (CLI)

- [x] Handler + manifest + embed payload. *(README.md embed thêm vào `.projitems` — 6 file kia có sẵn từ bước 0)*
- [x] `TokenEngine` nhánh ConsoleCore (`$AppCore.cs$`, `$AppSettings.json$`). *(đã có sẵn public từ P.2 — chỉ gọi lại)*
- [x] Sinh `.snk` nếu wizard hiện tại có (đọc `ConsoleCore.cs` — nếu có `SigningHelper.GenerateKey` thì dùng `SigningService` của core). *(KIỂM TRA: ConsoleCore.cs KHÔNG gọi SigningHelper → không sinh `.snk`)*
- [x] Smoke đa nền tảng: scaffold + `dotnet build` project sinh ra (bắt buộc pass trên Windows CI; nếu làm trên Linux/macOS càng tốt). *(Windows: unit test `ScaffoldAsync_GeneratedProject_BuildsWithDotnetBuild` + demo global tool vào temp → 0 error)*

## 6. CLI surface

```
devkit new --kind project --type ConsoleCore --name Contoso.ConsoleCore --out <dir>
```
Hỏi–đáp: như P.2 (project name → AuthType → chi tiết kết nối). *(AuthType list = 5 loại hỗ trợ, AD bị loại)*

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_project` với `projectType="ConsoleCore"`. Như P.2.

## 8. Test & nghiệm thu

- [x] Unit test từng AuthType (parameterized) như P.2. *(DataRow 5 loại: Interactive, DeviceCode, ClientSecret, FromPac, OAuth — FromPac marker kèm PacProfile)*
- [x] **Kiểm chứng vàng:** scaffold ConsoleCore vào temp → `dotnet build` project sinh ra → 0 error (trên máy dev Windows; net10 SDK có sẵn). *(PASS: unit test + demo global tool — 0 error, exit 0)*
- [x] Build CLI 0/0; test pass. *(0 err/0 warn; Templates 23/23; full 4773/4773)*

## 9. Bàn giao

- [ ] Báo cáo + user duyệt → qua `P.4.Server.md`. *(đã báo cáo — chờ aP duyệt)*
