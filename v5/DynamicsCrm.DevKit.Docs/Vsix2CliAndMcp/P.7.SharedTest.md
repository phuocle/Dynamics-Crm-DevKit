# P.7 — SharedTest Project Template (shproj dùng chung cho test)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/P.7.SharedTest.md`
> **Điều kiện tiên quyết:** `0.md` + `P.1.Shared.md` (cùng cơ chế shproj).
> **Trạng thái:** ☐ Chưa làm

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ProjectTemplates/SharedTest.cs` |
| Payload | `ProjectTemplates/CSharp/07.SharedTestProjectTemplate/` — `Shared.shproj`, `Shared.projitems`, `CalculateRollupFieldRequestExecutor.cs`, `Extension.cs`, `FakeXrmEasyTestBase.cs`, `FakerHelper.cs`, `Guids.cs`, `PluginContextBuilder.cs`, `TestDataLoader.cs`, `TestHelper.cs`, `TestTracingService.cs`, `Properties/AssemblyInfo.cs`, `README.md` |
| Manifest VS | `CSharpSharedTestProjectTemplate.vstemplate` |

## 2. Template tạo ra gì

Project **Shared Test** (.shproj): hạ tầng test dùng chung cho các project Test (P.9) — FakeXrmEasy base, faker data (Bogus), builder PluginContext, tracing fake… Cùng cơ chế shproj như P.1 (đổi tên `.shproj`/`.projitems`, GlobalSection trong `.sln`).

## 3. Logic wizard hiện tại

Đọc `SharedTest.cs` khi làm. Pattern như P.1; lưu ý token `$SharedTestProject$` = `{Solution}.Shared.Test` được điền ở `AddCommonReplacementsAsync`.

## 4. Thiết kế source of truth

- Handler `SharedTestProjectTemplateHandler` — tái dùng `SolutionMutator.AddSharedProjectToSolutionAsync` của P.1.
- Manifest: id `SharedTest`, order 7. Payload nhiều file `.cs` thuần (ReplaceParameters theo `.vstemplate`).

## 5. Việc phải làm (CLI)

- [ ] Handler + manifest + embed payload (12+ file cs + shproj/projitems).
- [ ] Validate: nên có Shared project trước (cảnh báo, không chặn — xác nhận lại khi đọc wizard).
- [ ] Đổi tên đích `{ProjectName}.shproj/.projitems` + thay token trong `.projitems`.

## 6. CLI surface

```
devkit new --kind project --type SharedTest --name Contoso.Shared.Test --out <dir>
```
Hỏi–đáp: project name (gợi ý `{Solution}.Shared.Test`).

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_project` `projectType="SharedTest"`.

## 8. Test & nghiệm thu

- [ ] Unit test: đủ 12+ file, `.sln` có entry shproj, token thay hết.
- [ ] Build CLI 0/0; test pass.

## 9. Bàn giao

- [ ] Báo cáo + user duyệt → qua `P.8.ProxyTypes.md`.
