# I.7 — Workflow Item Template (custom workflow activity)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/I.7.Workflow.md`
> **Điều kiện tiên quyết:** `0.md`, `I.4.Plugin.md` (pipeline T4).
> **Trạng thái:** ☐ Chưa làm

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ItemTemplates/Workflow.cs` |
| Payload | `ItemTemplates/CSharp/07.WorkflowItemTemplate/Class.cs` |
| T4 | `Shared/Resources/tt/Workflow.tt` |
| Form | `FormPlugin.xaml(.cs)` với `ItemType.Workflow` (input/output parameters) |

## 2. Template tạo ra gì

`{Class}.cs` — `CodeActivity` (custom workflow activity) với `[CrmPluginRegistration]` + input/output `InArgument`/`OutArgument` theo form.

## 3. Logic wizard hiện tại

Đọc `Workflow.cs` khi làm. Pipeline T4 như I.4 (context builder tương ứng — xem `T4Helper.BuildContextAsync`).

## 4. Thiết kế source of truth

- Handler `WorkflowItemTemplateHandler` — render `Workflow.tt`, ghi `{Class}.cs`.

## 5. Việc phải làm (CLI)

- [ ] Handler + manifest (id `Workflow`, order I.7) + embed payload.
- [ ] Prompt: class name → input/output parameters (câu hỏi lặp — Spectre prompt hỗ trợ thêm mục động) → comment.

## 6. CLI surface

```
devkit new --kind item --type Workflow --name MyWorkflow --out <dir> [--offline]
```

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_item` `itemType="Workflow"`.

## 8. Test & nghiệm thu

- [ ] Unit test: render `Workflow.tt` compile được (Roslyn 0 lỗi).
- [ ] Build CLI 0/0; test pass.

## 9. Bàn giao

- [ ] Báo cáo + user duyệt → qua `I.8.DataProvider.md`.
