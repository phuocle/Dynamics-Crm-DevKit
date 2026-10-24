# P.12 — Report Project Template (SSRS)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/P.12.Report.md`
> **Điều kiện tiên quyết:** `0.md`.
> **Trạng thái:** ☐ Chưa làm
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

Đọc `Report.cs` khi làm. Pattern chuẩn; có thể có câu hỏi riêng qua `FormReport*` (kiểm tra).

## 4. Thiết kế source of truth

- Handler `ReportProjectTemplateHandler`; manifest id `Report`, order 12.
- `.sh` cho download/upload reports.

## 5. Việc phải làm (CLI)

- [ ] Handler + manifest + embed payload.
- [ ] `.sh` tương đương.

## 6. CLI surface

```
devkit new --kind project --type Report --name Contoso.Report --out <dir>
```
Hỏi–đáp: project name → connection.

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_project` `projectType="Report"`.

## 8. Test & nghiệm thu

- [ ] Unit test: đủ file, bat/sh đúng, token hết.
- [ ] Build CLI 0/0; test pass.

## 9. Bàn giao

- [ ] Báo cáo + user duyệt → qua `P.13.WebResourceTs.md`.
