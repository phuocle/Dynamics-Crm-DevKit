# P.11 — SolutionPackager Project Template

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/P.11.SolutionPackager.md`
> **Điều kiện tiên quyết:** `0.md`.
> **Trạng thái:** ✅ HOÀN THÀNH 2026-10-26 (aP duyệt + compare chốt 5/5 byte-same)
> **Liên hệ CLI sẵn có:** `devkit solution` (`Tasks/TaskPacSolutionPackager.cs`) — bat trong template gọi đúng lệnh này.

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ProjectTemplates/SolutionPackager.cs` |
| Payload | `ProjectTemplates/CSharp/11.SolutionPackagerProjectTemplate/` — `ProjectTemplate.csproj.template`, `Extract-Both.bat`, `Pack-Both.bat`, `mapping.xml`, `Properties/AssemblyInfo.cs`, `README.md` |
| Manifest VS | `CSharpSolutionPackagerProjectTemplate.vstemplate` |
| Token | `$Extract-Both.bat$`, `$Pack-Both.bat$` ← resource `bat.solutionpackager.*.bat` |

## 2. Template tạo ra gì

Project SolutionPackager: `Extract-Both.bat`/`Pack-Both.bat` (goi `devkit solution` extract/pack cả managed + unmanaged, nhúng `$CliConnectionArgs$`) + `mapping.xml` (map webresource/file vào solution).

## 3. Logic wizard hiện tại

Pattern chuẩn `FormProject(ProjectType.SolutionPackager)`: chỉ check trùng tên project, không SigningHelper, không AddDynamicsCrmDevKitCliJsonAsync; `RunFinished` chỉ `FixProjectFolder`. FormProject không filter connection type cho SolutionPackager → đủ 6 AuthType.

## 4. Thiết kế source of truth

- Handler `SolutionPackagerProjectTemplateHandler`; manifest id `SolutionPackager`, order 11.
- **Mở rộng đa nền tảng:** `Extract-Both.sh`/`Pack-Both.sh` (`devkit solution` chạy được cross-platform — pac là tool dotnet).

## 5. Việc phải làm (CLI)

- [x] Handler + manifest + embed payload.
- [x] `.sh` tương đương 2 bat.

## 6. CLI surface

```
devkit new --kind project --type SolutionPackager --name Contoso.SolutionPackager --out <dir>
```
Hỏi–đáp: project name → connection (cho bat).

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_project` `projectType="SolutionPackager"`.

## 8. Test & nghiệm thu

- [x] Unit test: đủ file; bat/sh đúng args; mapping.xml nguyên vẹn.
- [x] Build CLI 0/0; test pass.

**Kết quả 2026-10-26:**

- Handler `DynamicsCrm.DevKit.Shared/Templates/Handlers/SolutionPackagerProjectTemplateHandler.cs` — manifest 5 file đúng thứ tự vstemplate (`$SafeProjectName$.csproj` RP=true, `README.md` RP=false, `mapping.xml` RP=false, 2 packager scripts RP=true; Windows bat / non-Windows sh); register trong `TemplateHandlers.RegisterAll` sau UiTest; TaskNew thêm condition + branch `SupportedConnectionTypes` (đủ 6).
- Payload mới: stub `Extract-Both.sh`/`Pack-Both.sh` (token-only, LF, không trailing newline) + `Resources/sh/solutionpackager.{extract,pack}.both.sh` (lean 2 dòng: shebang + `devkit solution $CliConnectionArgs$ …`, LF) + embed `README.md` (bẫy thiếu-embed LẦN 7 đã né). `TokenEngine` thêm 2 token `.sh` set-only-when-exists (pattern `$deploy.debug.sh$`); `MarkExecutable` ×2.
- Bẫy AssignCulture kiểm chứng bằng reflection dll build thật (P.8 method): "both"/"reports" KHÔNG phải culture — cả 8 resource mới (`Resources.sh.*` + `Resources.templates.project.{solutionpackager,report}.*`) đều embed đủ, không cần `WithCulture="false"`.
- Tests `SolutionPackagerProjectTemplateHandlerTests` 24/24 pass (pattern `WebResourceTsProjectTemplateHandlerTests`, hết `Offline=true`): manifest mirror vstemplate, create-only, `--solution` (.sln + .slnx, entry thường), đủ 6 AuthType, marker `.env`, ClientSecret fallback, bat/sh nhúng args + marker rỗng, mapping.xml/README verbatim, BOM state (mapping.xml CÓ BOM, còn lại BOM-less), idempotency, `--force`, golden `dotnet build` net462.
- Build: CLI csproj 0 error 0 warning; full suite Cli.UnitTests **5002/5002** (baseline 4952 + 50 test mới P.11+P.12); VSIX MSBuild sạch (Shared đổi).
- Fixture: `devkit new` NON-INTERACTIVE chạy thẳng (đủ 6 AuthType nên nhận marker ClientSecret của `.env` — không cần scratch runner như P.10): `Dev.AllInOne.SolutionPackager` 5 created + slnx Updated; `.env` md5 giữ nguyên `52cfb0b7…`; bat args rỗng (marker); mapping.xml BOM.
- Release: gộp **1 lượt chung P.12** (deviation khỏi per-unit-release theo lệnh aP — xem `P.12.Report.md` mục 8).

## 9. Bàn giao

- [x] Báo cáo + user duyệt → P.11 xong; P.12 làm liền trong cùng session → sau đó ĐÓNG track 13 project templates (P.1..P.13).
- [x] **COMPARE CHỐT 2026-10-26 (aP tạo `Dev.AllInOne.SolutionPackager` bằng VSIX vào TestAllInOne2): 5/5 file BYTE-IDENTICAL** (cmp thuần: csproj / Extract-Both.bat / Pack-Both.bat / mapping.xml / README.md) — không hit GUID/NuGet/using-sort/DevKitVersion (cả 2 binary cùng release annual 31.12.2026 23.59.59); bats byte-same = aP chạy wizard với marker connection (precedent P.6/P.8). Sạch nhất toàn track. aP confirm OK → commit.
