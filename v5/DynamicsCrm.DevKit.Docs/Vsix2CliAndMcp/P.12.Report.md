# P.12 — Report Project Template (SSRS)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/P.12.Report.md`
> **Điều kiện tiên quyết:** `0.md`.
> **Trạng thái:** ✅ HOÀN THÀNH 2026-10-26 (aP duyệt; ROUND 2 fix theo ruling aP + compare chốt 4/4 byte-same)
> **Liên hệ CLI sẵn có:** `devkit downloadreport` / `devkit uploadreport` — bat trong template gọi 2 lệnh này.

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ProjectTemplates/Report.cs` |
| Payload | `ProjectTemplates/CSharp/12.ReportProjectTemplate/` — `ProjectTemplate.csproj` (lưu ý: không phải `.template`), `download.reports.bat`, `upload.reports.bat`, `Properties/AssemblyInfo.cs`, `README.md` |
| Manifest VS | `CSharpReportProjectTemplate.vstemplate` |
| Resource liên quan | `DynamicsCrm.DevKit.Shared/Resources/ReportProjectTemplate.rptproj`, `Resources/ReportTemplate.rdl` |

## 2. Template tạo ra gì

Project Report: `.rptproj` (SSRS report project) + `download.reports.bat`/`upload.reports.bat` gọi `devkit downloadreport`/`uploadreport` (token `$download.reports.bat$`/`$upload.reports.bat$`).

## 3. Logic wizard hiện tại

FormProject chuẩn, NHƯNG `RunFinished` ĐẶC BIỆT: viết `{ProjectName}.rptproj` từ embedded resource `ReportProjectTemplate.rptproj` (CHỈ token `$DevKitVersion$` → `Const.VersionBuild`) bằng `FileHelper.ForceWriteAllTextAsync` (→ output CÓ BOM), rồi DTE remove csproj khỏi solution + `AddFromFile(.rptproj)` qua Reporting Services project factory + `TryDeleteFile(csproj)` khi factory load OK (factory fail → giữ csproj làm fallback).

## 4. Thiết kế source of truth

- Handler `ReportProjectTemplateHandler`; manifest id `Report`, order 12.
- `.sh` cho download/upload reports.

## 5. Việc phải làm (CLI)

- [x] Handler + manifest + embed payload.
- [x] `.sh` tương đương.

## 6. CLI surface

```
devkit new --kind project --type Report --name Contoso.Report --out <dir>
```
Hỏi–đáp: project name → connection.

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_project` `projectType="Report"`.

## 8. Test & nghiệm thu

- [x] Unit test: đủ file, bat/sh đúng, token hết.
- [x] Build CLI 0/0; test pass.

**Kết quả 2026-10-26:**

- Handler `DynamicsCrm.DevKit.Shared/Templates/Handlers/ReportProjectTemplateHandler.cs` — manifest 4 file (`$SafeProjectName$.csproj` từ `ProjectTemplate.csproj` KHÔNG `.template`, `README.md` **RP=TRUE** — template duy nhất trong catalog, 2 report scripts RP=true; Windows bat / non-Windows sh); register trong `TemplateHandlers.RegisterAll` sau SolutionPackager (trước WebResourceTs); TaskNew thêm branch `SupportedConnectionTypes` (đủ 6).
- **Diff class khai báo trước với aP:** CLI KHÔNG có DTE/factory → handler GIỮ bootstrap csproj + THÊM viết `{ProjectName}.rptproj` (content = `ReadSharedResourceAsync("ReportProjectTemplate.rptproj")` + replace `$DevKitVersion$` → `Const.VersionBuild` — mirroring RunFinished line-for-line; ghi bằng `FileHelper.ForceWriteAllTextAsync` → **CÓ BOM** khớp VSIX dù resource BOM-less). KHÔNG xóa csproj. VSIX side (máy aP có RS factory) sẽ KHÔNG còn `.csproj`, CLI side GIỮ. **→ ROUND 2 (2026-10-26, ruling aP): KHÔNG CHẤP NHẬN diff class này** — aP thấy prj CLI là "prj C# chứ có phải prj report đâu". Fix: handler **BỎ csproj khỏi manifest** (không sinh file nào), bỏ mint `$guid1$`/`$year$` (hết consumer), đăng ký thẳng **entry `.rptproj`** vào solution — end-state GIỐNG VSIX (xem ROUND 2 dưới).
- Rerun `.rptproj` là user file (reports/datasets/datasources đăng ký trong đó): không đè khi khác nội dung (Skipped), `--force` mới sinh lại (Updated); giống nội dung → Unchanged.
- Handler mint `$guid1$` (ProjectGuid csproj old-style, pattern Shared/SharedTest) + `$year$`; re-run CẢ `SetConnectionValues` LẪN `SetEmbeddedResourceTokensAsync` khi connection null (bats có `$CliConnectionArgs$`).
- Payload mới: stub `download.reports.sh`/`upload.reports.sh` (token-only, LF, không trailing newline) + `Resources/sh/{download,upload}.reports.sh` (lean 2 dòng: shebang + `devkit {downloadreport,uploadreport} $CliConnectionArgs$ … --profile "DEBUG"`, LF) + embed `README.md` (bẫy thiếu-embed LẦN 8 đã né). `TokenEngine` thêm 2 token `.sh` set-only-when-exists; `MarkExecutable` ×2.
- Tests `ReportProjectTemplateHandlerTests` 26/26 pass: manifest mirror vstemplate (README RP=true asserted KHÔNG verbatim-flag), rptproj tồn tại + CÓ BOM + `$DevKitVersion$` thay bằng `Const.VersionBuild` + content khớp resource-đã-stamp, rerun giữ edit user + `--force` regenerate, csproj old-style còn nguyên (`ProjectGuid`, v4.8, không `$guid1$` sót), bat/sh, đủ 6 AuthType, marker, create-only, `--solution` .sln/.slnx, BOM state (chỉ rptproj có BOM), idempotency, `--force`. **KHÔNG golden build** (csproj old-style net48 — precedent P.7, content asserts + demo thật qua fixture).
- Fixture: `devkit new` NON-INTERACTIVE: `Dev.AllInOne.Report` 5 created (csproj + README + 2 bat + rptproj) + slnx Updated → slnx **13 entries**; `.env` md5 giữ nguyên; `Dev.AllInOne.Report.rptproj` CÓ BOM + stamp `<!-- v.4.44.44.44 - Build: 31.12.2026 23.59.59 -->`; bat args rỗng (marker).
- Build: CLI csproj 0 error 0 warning; full suite **5002/5002**; VSIX MSBuild sạch.
- Release: gộp **1 lượt chung P.11** (deviation khỏi per-unit-release theo lệnh aP "MỘT SESSION LÀM LIỀN CẢ HAI"): `Release-DynamicsCrm-DevKit.ps1` 2026-10-26 05:23 — `devkit --version` = `4.44.44.44 Build: 31.12.2026 23.59.59`, 4 artifacts mới dưới `Published/4.44.44.44/`, `Const.cs` placeholder restore, sweep 21 dateReplacement sạch.
- Fixture NotImplemented của `ScaffoldingEngineTests` dời "SolutionPackager" → "Report" + comment "all 13 project templates ported" (TestInitialize `ClearHandlers` nên fallback path vẫn được exercise).

## 9. Bàn giao

### ROUND 2 — aP ruling "prj C# chứ có phải prj report đâu" (2026-10-26)

Sau compare đầu (9/9 payload file byte-same, csproj giữ lại = diff class khai báo trước), aP bác diff class: mở solution CLI thấy `Dev.AllInOne.Report` là **prj C#** trong khi AllInOne2 là **prj Report** thật. Fix:

- **Handler**: manifest còn **3 file** (README RP=true + 2 scripts) — **KHÔNG sinh csproj nào** (bootstrap csproj là wizard-artifact: VS xóa sau khi RS factory load .rptproj; `.rptproj` CHÍNH LÀ project). Bỏ mint `$guid1$`/`$year$` (hết consumer). Warning-exists check trên `.rptproj`. projitems bỏ embed `ProjectTemplate.csproj` (resource VSIX vẫn giữ nguyên payload gốc).
- **`SolutionMutator.AddReportProjectToSolutionAsync`** — entry Reporting Services đúng format VS (evidence: `TestAllInOne/Dev.AllInOne.2019.sln` chứa Report project + slnx TestAllInOne2):
  - `.slnx`: `<Project Path="…rptproj"><Deploy /></Project>` — không Id, child `<Deploy />` (counterpart của Deploy.0);
  - `.sln`: `Project("{F14B399A-7131-4C87-9E4B-1186C45EF12D}") = "{Name}", "{Name}\{Name}.rptproj", "{GUID minted}"` + 6 config lines platform `Debug`/`Release` (KHÔNG "Any CPU") kèm **`Deploy.0`**.
  - Refactor `SaveSlnxPreservingShape` dùng chung 2 path slnx.
- **Tests 26/26** cập nhật: manifest 3 file + assert không csproj; `DoesNotEmitBootstrapCsproj` thay `KeepsBootstrapCsproj`; entry .sln = RS GUID + Deploy.0; slnx = Deploy child; BOM/common bỏ csproj. Full suite **5002/5002**, CLI 0/0, VSIX MSBuild pass. Re-release EXIT sạch → re-scaffold fixture: slnx entry giờ là rptproj+Deploy khớp AllInOne2.
- Lệch còn lại sau ROUND 2: `.rptproj.rsuser` (VS Report Designer tạo khi LOAD project — user-state như `.vs`, KHÔNG phải template output; khuyến nghị không commit).
- [x] **COMPARE CHỐT sau ROUND 2 (2026-10-26): 4/4 file BYTE-IDENTICAL** (rptproj CÓ BOM + annual stamp cả 2 bên; bats; README) + **slnx entry Report của CLI giờ GIỐNG HỆT format VS** (`<Project Path="…rptproj"><Deploy /></Project>` — không Id); SolutionPackager 5/5 (xem P.11). Lệch duy nhất còn lại = `.rptproj.rsuser` (VS-user-state, không commit). aP confirm OK ("tôi confirm đã ok") → commit.


- [x] Báo cáo + user duyệt. *(sửa mục stale: trước đây ghi "→ qua P.13.WebResourceTs.md" nhưng P.13 đã xong TRƯỚC P.10 theo lệnh aP — P.12 xong = ĐÓNG track 13 project templates P.1..P.13; còn lại I.* item templates.)*
