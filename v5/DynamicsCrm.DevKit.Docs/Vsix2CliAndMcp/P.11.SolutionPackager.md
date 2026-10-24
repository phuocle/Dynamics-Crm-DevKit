# P.11 — SolutionPackager Project Template

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/P.11.SolutionPackager.md`
> **Điều kiện tiên quyết:** `0.md`.
> **Trạng thái:** ☐ Chưa làm
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

Đọc `SolutionPackager.cs` khi làm. Pattern chuẩn.

## 4. Thiết kế source of truth

- Handler `SolutionPackagerProjectTemplateHandler`; manifest id `SolutionPackager`, order 11.
- **Mở rộng đa nền tảng:** `Extract-Both.sh`/`Pack-Both.sh` (`devkit solution` chạy được cross-platform — pac là tool dotnet).

## 5. Việc phải làm (CLI)

- [ ] Handler + manifest + embed payload.
- [ ] `.sh` tương đương 2 bat.

## 6. CLI surface

```
devkit new --kind project --type SolutionPackager --name Contoso.SolutionPackager --out <dir>
```
Hỏi–đáp: project name → connection (cho bat).

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_project` `projectType="SolutionPackager"`.

## 8. Test & nghiệm thu

- [ ] Unit test: đủ file; bat/sh đúng args; mapping.xml nguyên vẹn.
- [ ] Build CLI 0/0; test pass.

## 9. Bàn giao

- [ ] Báo cáo + user duyệt → qua `P.12.Report.md`.
