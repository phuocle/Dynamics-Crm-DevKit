# P.9 — Test Project Template (unit test cho Server)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/P.9.Test.md`
> **Điều kiện tiên quyết:** `0.md`; liên quan chặt `P.4.Server` + `P.7.SharedTest` (references).
> **Trạng thái:** ☐ Chưa làm

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ProjectTemplates/Test.cs` |
| Payload | `ProjectTemplates/CSharp/09.TestProjectTemplate/` — `ProjectTemplate.csproj.template`, `Properties/AssemblyInfo.cs`, `README.md` |
| Manifest VS | `CSharpTestProjectTemplate.vstemplate` |

## 2. Template tạo ra gì

Project **Test** (net462, MSTest + FakeXrmEasy + NSubstitute + Bogus): csproj template references `Microsoft.CrmSdk.CoreAssemblies`, MSTest, project references tới Shared/SharedTest/Server theo token (`$SharedProject$`, `$SharedTestProject$`…), assembly info. Payload tối giản — phần lớn nội dung nằm trong `ProjectTemplate.csproj.template` (thay token nhiều).

## 3. Logic wizard hiện tại

Đọc `Test.cs` khi làm. Pattern chuẩn + có thể validate Shared/SharedTest tồn tại + snk (kiểm tra).

## 4. Thiết kế source of truth

- Handler `TestProjectTemplateHandler`; manifest id `Test`, order 9.
- Token liên project lấy từ `WorkspaceContext` (SharedProjectName, SharedTestProjectName) — không được hardcode.

## 5. Việc phải làm (CLI)

- [ ] Handler + manifest + embed payload.
- [ ] Kiểm tra project references trong csproj template trỏ đúng các project có thật trong solution (nếu thiếu → warning trong `ScaffoldResult`, vẫn tạo file).

## 6. CLI surface

```
devkit new --kind project --type Test --name Contoso.Plugin.Test --out <dir>
```
Hỏi–đáp: project name (gợi ý `{ServerName}.Test`) → các câu hỏi theo wizard gốc.

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_project` `projectType="Test"`.

## 8. Test & nghiệm thu

- [ ] Unit test: đủ file; csproj sinh ra chứa references với tên project thật; token thay hết.
- [ ] Build CLI 0/0; test pass.

## 9. Bàn giao

- [ ] Báo cáo + user duyệt → qua `P.10.UiTest.md`.
