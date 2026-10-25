# P.8 — ProxyTypes Project Template (early-bound types)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/P.8.ProxyTypes.md`
> **Điều kiện tiên quyết:** `0.md`.
> **Trạng thái:** ✅ **HOÀN THÀNH + COMPARE CHỐT + aP DUYỆT 2026-10-25** — aP tạo lại `Dev.AllInOne.ProxyTypes` bằng VSIX (build 22:40 lean) vào TestAllInOne2 → **compare 5/5 file BYTE-SAME** (compare tốt nhất từ P.1). CLI 0 err/0 warn, full suite **4886/4886**, VSIX MSBuild pass, build-release-only 4 artifacts OK (22:40), demo fixture TestAllInOneCli OK, `.env` md5 nguyên vẹn. Chi tiết: "Kết quả thực thi" + "Compare P.8" + lệch + bài học bên dưới.
> **Làm xong file này mới được qua:** `P.9.Test.md`.
> **Liên hệ CLI sẵn có:** lệnh `devkit modelbuilder` (`Tasks/TaskModelBuilder.cs`) chính là công cụ mà template này bao bọc.

## Kết quả thực thi (cập nhật sau khi làm xong — 2026-10-25)

### Đã giao những gì

| Hạng mục | Kết quả |
|---|---|
| Handler | `DynamicsCrm.DevKit.Shared/Templates/Handlers/ProxyTypesProjectTemplateHandler.cs` (ITemplateHandler, **Compile entry đã thêm vào projitems** — né bẫy lần 4). Manifest **5 file** đúng thứ tự vstemplate: `$SafeProjectName$.csproj` (RP=true) → `README.md` (RP=**false**) → `run.bat`/`run.sh` theo platform → `GeneratedCode.cs` → `ProxyTypesAssembly.cs` (cả 2 RP=true). `Properties/AssemblyInfo.cs` payload-only (không thuộc vstemplate) → không embed, không scaffold (đúng pattern 06/07). RegisterAll sau SharedTest (order 8) |
| Wizard parity | `ProxyTypes.cs` chỉ check trùng tên; KHÔNG gọi SigningHelper (csproj.template không `SignAssembly`) → **không sinh .snk**; KHÔNG gọi AddDynamicsCrmDevKitCliJsonAsync → **không tạo Cli.json/DevKit.json** (khác Shared/SharedTest); FormProject `ProxyTypesProjectAsync` không filter connection type → **đủ 6 AuthType**, chỉ chặn unknown (thông qua registry, giống P.4/P.5/P.6). FormProject khóa tên `{solutionName}.ProxyTypes` (textbox disabled) — CLI dùng default `{SolutionName}.ProxyTypes` của GetDefaultProjectName generic |
| run.sh twin | Stub payload `08.ProxyTypesProjectTemplate/run.sh` = `$run.sh$` thuần (LF, không BOM/trailing newline — khớp byte-pattern stub 06) + resource `Resources/sh/proxytypes.run.sh` lean (`#!/usr/bin/env bash` + `devkit modelbuilder $CliConnectionArgs$ --json "DynamicsCrm.DevKit.Cli.json" --profile "ALL"`, KHÔNG block check) + TokenEngine `$run.sh$` **set-only-when-exists** ← `sh.proxytypes.run.sh` + `MarkExecutable` trong handler. Stub KHÔNG thêm vào packaging csproj 08 (không lọt zip VSIX). **run.bat resource ĐÃ LEAN (cập nhật 2026-10-25 tối): aP test VSIX gặp block → ra lệnh bỏ "thấy đâu nữa thì bỏ luôn" → em xóa block check khỏi CẢ 14 bat resources còn lại (proxytypes.run + 3 webresource/generator của P.6 + 10 bat Report/SolutionPackager/ts cho các P sau), mirror P.4 Round 2 precedent — chi tiết lệch #3** |
| Embed projitems | Thêm **3** (handoff ghi 2 — xem lệch #1): `Resources.templates.project.proxytypes.README.md` (bẫy P.6/P.7 lặp **lần 3** — thiếu từ bước 0), `…proxytypes.run.sh` (stub), + resource `Resources\sh\proxytypes.run.sh` (nhóm riêng cạnh bat group) |
| Hint sau scaffold (mục 5) | `result.AddWarning("Run run.bat — or 'devkit modelbuilder' — to generate the early-bound types.")` (platform-aware `./run.sh` trên Unix). Quyết: **ScaffoldResult.Warnings** — kênh structured duy nhất cross-host (CLI `WriteResult` in qua `ActionWarning`; MCP JSON có `warnings`); Server dùng AddError vì thiếu-Shared là blocking, còn ProxyTypes scaffold thành công nên warning là đúng mức |
| Tests | `ProxyTypesProjectTemplateHandlerTests.cs` — **27/27**: manifest 5 file + RP flags, create-only, `--solution` missing error trước khi tạo file, invalid name, unknown type qua CliArgsBuilder throw, unknown .env AuthType → supported list, 6 DataRow AuthType, .env marker, ClientSecret placeholder, no snk, run.bat args explicit-vs-marker (không double space, không plain-secret), sh resource lean + stub `$run.sh$`, **không Folder** (08 không khai báo Folder), plain .sln/.slnx entry (kèm/không Shared — không consumer line), BOM (2 placeholder .cs CÓ BOM, còn lại không), idempotency, force, hint, **golden `dotnet build` net462 PASS** (mẫu P.5/P.6 — csproj SDK-style build-được-riêng). Toàn bộ `Offline=true` |
| Build & release | CLI 0 err/0 warn; full suite Cli.UnitTests **4886/4886** (baseline 4859 + 27); VSIX build pass (VS MSBuild 18 Enterprise), resource names VSIX giữ nguyên sau fix. `Release-DynamicsCrm-DevKit.ps1` xong: `devkit --version` = `4.44.44.44 Build: 31.12.2026 23.59.59`; 4 artifacts `Published/4.44.44.44/` timestamp 22:26; `Const.cs` còn `xxxx.yy.zz HH.mm.ss`; git status sạch build-date |
| Demo real-time (TestAllInOneCli) | Global tool 4.44.44.44: temp create-only `Contoso.ProxyTypes` (5 created, không đụng sln, placeholder ClientSecret); **fixture** `devkit new --kind project --type ProxyTypes --name Dev.AllInOne.ProxyTypes --out . --solution Dev.AllInOne.slnx` → 5 created + slnx Updated → **8 entry** (`Dev.AllInOne.ProxyTypes/Dev.AllInOne.ProxyTypes.csproj`, entry thường không Id); run.bat fixture = `devkit modelbuilder --json "DynamicsCrm.DevKit.Cli.json" --profile "ALL"` KHÔNG conn args (marker `.env` → `UseProjectEnvironment` → `CliArgsBuilder` rỗng — ĐÚNG rule); csproj stamp `v.4.44.44.44 - Build: 31.12.2026 23.59.59` + CoreAssemblies 9.0.2.60; **`.env` md5 `52cfb0b7e647ae37d65ef6a501fec358` NGUYÊN VẶN**; không build trong fixture. `devkit new list`: ProxyTypes order 8, Ready=yes |
| Docs | `DynamicsCrm.DevKit.Docs/Cli/new.md`: row `ProxyTypes` (mục Hiện trạng) + example + cập nhật mục Connection (thêm ProxyTypes vào nhóm nhúng args) |

### ⚠️ Phát hiện lớn — bug có sẵn từ bước 0 (bẫy MSBuild AssignCulture `.run`)

`bat.proxytypes.run.bat` **từng KHÔNG nằm trong dll CLI** (kể cả release cũ trước P.8) dù projitems có entry từ trước: MSBuild `AssignCulture` trên .NET SDK (ICU) đọc tên `proxytypes.run.bat` theo pattern `name.culture.extension` với **"run" là culture hợp lệ** trên .NET 10 (`CultureInfo("run")` = "Unknown Language (run)") → item bị gắn `WithCulture=true`, rơi vào nhánh naming culture-specific và **bị loại âm thầm khỏi assembly chính**. VSIX net48 (flow naming khác) không dính — nên VS chạy đúng trong khi CLI sẽ scaffold `run.bat` chứa literal `$run.bat$`. **Fix:** metadata `WithCulture="false"` trên 2 entry `proxytypes.run.bat` + `proxytypes.run.sh` trong projitems (AssignCulture không đè metadata tường minh — verify bằng repro tối thiểu + reflection cả 2 dll). KHÔNG đụng file payload dùng chung. Bẫy này applies cho **mọi** EmbeddedResource không LogicalName tên `*.run.*` trong project SDK-style net5+ (CLI/Tool).

### Các lệch so với handoff / thiết kế (đã ghi rõ để aP review)

1. **Embed projitems là 3, handoff ghi "embed 2 file mới"** — README.md payload + run.sh stub + resource `sh/proxytypes.run.sh` (embed nhóm riêng cạnh bat group); cộng 1 Compile entry cho handler.
2. **Bẫy `.run` culture (phát hiện mới ngoài handoff)** — fix bằng metadata `WithCulture="false"` tại projitems, không đổi tên file, không đụng payload dùng chung; chi tiết ở mục "Phát hiện lớn" trên.
3. **Block check `where devkit` — ĐÃ LEAN HÓA theo lệnh aP 2026-10-25 tối** (ban đầu giữ nguyên theo rule CONFIRM bat dùng chung; aP test VSIX gặp block trong run.bat → "cần bỏ … thấy đâu nữa thì bỏ luôn đi"). Thực hiện: xóa block khỏi **14 bat resources** còn lại trong `DynamicsCrm.DevKit.Shared/Resources/bat/` (12 dạng simple `@echo off` + block + call; 2 ts_bat giữ node/npm checks, chỉ bỏ block devkit) — mirror chính xác P.4 Round 2 precedent, CRLF + trailing-byte state giữ nguyên (diff = đúng 20 dòng xóa mỗi file, 21 cho ts_bat). Re-release 22:40 (full suite 4886/4886 lại, không test nào assert block). Fixture TestAllInOneCli: ProxyTypes `--force` re-scaffold (run.bat Updated, còn lại Unchanged) + patch 3 bat WebResource bằng cùng block-replace (giữ nguyên csproj aP đã sync) → **ZERO `where devkit` trong fixture**, `.env` md5 `52cfb0b7…` nguyên. Lưu ý: các bat của template chưa port (Report/SolutionPackager/WebResourceTs) giờ cũng lean sẵn từ nguồn.
4. **Golden `dotnet build` net462 CÓ** (handoff ghi "nếu csproj build-được-riêng như P.5/P.6" — csproj SDK-style 1 package nên build-được): pass.
5. **NuGet không đụng gì**: `$Microsoft.CrmSdk.CoreAssemblies.Version$` đã có trong `TokenEngine.NuGetPackages` + `DefaultVersions` (9.0.2.60 net462) từ trước — không thêm package mới, không sửa NuGetVersionCache. Live query fixture trả đúng 9.0.2.60.
6. **`build-manifest.json` dưới `Published/` không được full-release refresh** (nó thuộc `Release.DynamicsCrm.DevKit.Cli.ps1` — build-cli.md flow): vẫn là manifest build 13:59 chiều nay (P.7). SHA dll CLI cài hiện tại `9D5E8ECD…`. P.8 không đụng MCP nên whoami-flow không bắt buộc.

### Compare P.8 (chốt 2026-10-25 — aP tạo lại `Dev.AllInOne.ProxyTypes` bằng VSIX build 22:40 lean vào TestAllInOne2)

| Kiểm chứng | Kết quả |
|---|---|
| Cấu trúc | **IDENTICAL 100%** — 5/5 file cùng tên cùng vị trí (bin/obj bên VSIX = build output của aP trong VS, không phải template output) |
| Byte-compare (`cmp`) | **5/5 BYTE-SAME** — compare tốt nhất từ P.1 (P.6 còn 1 dòng csproj, P.7 còn GUID + using-sort): `Dev.AllInOne.ProxyTypes.csproj`, `README.md`, `run.bat`, `GeneratedCode.cs`, `ProxyTypesAssembly.cs` |
| run.bat | Lean 2 dòng (`@echo off` + `devkit modelbuilder --json "DynamicsCrm.DevKit.Cli.json" --profile "ALL"`) — aP chạy wizard với marker connection, 2 bên byte-same sau khi lean |
| csproj | Annual stamp `v.4.44.44.44 - Build: 31.12.2026 23.59.59` + CoreAssemblies **9.0.2.60** — live nuget.org lần này = bảng DefaultVersions nên không còn diff online-vs-table (khác P.6: csproj P.8 không tham chiếu Analyzers) |
| GeneratedCode.cs / ProxyTypesAssembly.cs | Byte-same kèm BOM — engine preserve per-file encoding khớp VS |
| .slnx | Cùng format entry thường (`<Project Path="..." />` không Id); **khác THỨ TỰ**: VS sort alphabetically (ProxyTypes chen giữa Package và Server), CLI append theo thứ tự scaffold (ProxyTypes cuối) — diff class đã biết từ P.3 #5 |

### Bài học kỹ thuật

- **Nghi resource → verify bằng reflection trên dll build thật** (`GetManifestResourceNames`): preprocess + metadata giống hệt vẫn có thể mất ở task `AssignCulture` — listing static không đủ.
- **Bẫy MSBuild AssignCulture `*.run.*` trên .NET SDK (ICU)**: `run` là culture hợp lệ trên .NET 10 → file `name.run.ext` bị coi culture-specific và loại khỏi dll chính, không có warning. Fix: `WithCulture="false"` metadata. Cần nhớ khi thêm resource mới cho CLI/Tool (file bat/sh đặt tên tránh segment `.run.`).
- File mới trong Shared cần đủ 3 loại entry projitems: `Compile` (handler .cs), `EmbeddedResource` payload (LogicalName `Resources.templates.project.*`), `EmbeddedResource` legacy resource (nhóm bat/sh, không LogicalName).
- Hint sau scaffold = `ScaffoldResult.AddWarning` — kênh structured cross-host duy nhất; AddError chỉ cho blocking (Server thiếu-Shared).
- Đếm manifest bằng parse `.vstemplate` trực tiếp (P.7 lesson, áp dụng thành công: 5 file = 1 Project + 4 ProjectItem).

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ProjectTemplates/ProxyTypes.cs` |
| Payload | `ProjectTemplates/CSharp/08.ProxyTypesProjectTemplate/` — `ProjectTemplate.csproj.template`, `run.bat`, `GeneratedCode.cs`, `ProxyTypesAssembly.cs`, `Properties/AssemblyInfo.cs`, `README.md` |
| Manifest VS | `CSharpProxyTypesProjectTemplate.vstemplate` |
| Token | `Replacement.cs` — `$run.bat$` ← resource `bat.proxytypes.run.bat` |

## 2. Template tạo ra gì

Project **ProxyTypes** (net462): csproj trống sẵn slot + `GeneratedCode.cs` + **`run.bat`** gọi `devkit modelbuilder` sinh early-bound types (nhúng `$CliConnectionArgs$`). `$ProjectProxyTypes$` = `{Solution}.ProxyTypes` là token chung mà template khác (Test/Shared) tham chiếu.

## 3. Logic wizard hiện tại

Đọc `ProxyTypes.cs` khi làm. Pattern chuẩn; snk: kiểm tra wizard có gọi SigningHelper không (payload folder không có `key.snk`).

## 4. Thiết kế source of truth

- Handler `ProxyTypesProjectTemplateHandler`; manifest id `ProxyTypes`, order 8.
- **Mở rộng đa nền tảng:** `run.sh` tương đương gọi `devkit modelbuilder` (lệnh CLI đã chạy cross-platform).

## 5. Việc phải làm (CLI)

- [x] Handler + manifest + embed payload.
- [x] `run.sh` + token bat resource `bat.proxytypes.run.bat`.
- [x] In hint sau khi scaffold: "chạy run.bat/run.sh hoặc `devkit modelbuilder` để sinh types".

## 6. CLI surface

```
devkit new --kind project --type ProxyTypes --name Contoso.ProxyTypes --out <dir>
```
Hỏi–đáp: project name → connection (cho run.bat; `--offline` được).

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_project` `projectType="ProxyTypes"`.

## 8. Test & nghiệm thu

- [x] Unit test: đủ file, run.bat/run.sh đúng args, token thay hết.
- [x] Build CLI 0/0; test pass.

## 9. Bàn giao

- [x] Báo cáo (xem "Kết quả thực thi" + lệch + bài học ở đầu file).
- [x] Báo cáo + user duyệt (aP duyệt 2026-10-25 sau compare chốt 5/5 BYTE-SAME) → qua `P.9.Test.md`.
