# P.10 — UiTest Project Template (UI automation test — Selenium)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/P.10.UiTest.md`
> **Điều kiện tiên quyết:** `0.md`.
> **Trạng thái:** ☐ Chưa làm

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ProjectTemplates/UiTest.cs` |
| Payload | `ProjectTemplates/CSharp/10.TestUiProjectTemplate/` — `ProjectTemplate.csproj.template`, `App.config`, `App.cs`, `TestSettings.cs`, `UiTest.runsettings`, `Properties/AssemblyInfo.cs`, `README.md` |
| Manifest VS | `CSharpTestUiProjectTemplate.vstemplate` |

## 2. Template tạo ra gì

Project **UiTest** (net462): Selenium + `Dynamics365.UIAutomation.Api` — `App.config` (cấu hình browser/user), `TestSettings.cs` (đọc config), `UiTest.runsettings`. NuGet: Selenium.WebDriver/ChromeDriver/Support, Bogus, MSTest.

## 3. Logic wizard hiện tại

Đọc `UiTest.cs` khi làm. Pattern chuẩn; `App.config` dùng các token connection (`$UrlValue$`, `$UserNameValue$`… + comment `.env`).

## 4. Thiết kế source of truth

- Handler `UiTestProjectTemplateHandler`; manifest id `UiTest`, order 10.
- Token connection điền vào App.config — dùng chung `TokenEngine.SetConnectionValues` (đã port ở bước 0).

## 5. Việc phải làm (CLI)

- [ ] Handler + manifest + embed payload.
- [ ] App.config đúng theo connectionType (kiểm tra wizard có nhánh theo type không).

## 6. CLI surface

```
devkit new --kind project --type UiTest --name Contoso.UiTest --out <dir>
```
Hỏi–đáp: project name → connection (điền App.config).

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_project` `projectType="UiTest"`.

## 8. Test & nghiệm thu

- [ ] Unit test: đủ 6+ file, token connection thay đúng, không sót `$token$`.
- [ ] Build CLI 0/0; test pass.

## 9. Bàn giao

- [ ] Báo cáo + user duyệt → qua `P.11.SolutionPackager.md`.
