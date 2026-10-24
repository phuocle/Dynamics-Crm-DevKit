# I.9 — Test Item Template (unit test cho plugin/workflow)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/I.9.Test.md`
> **Điều kiện tiên quyết:** `0.md`, `I.4.Plugin.md` (pipeline T4).
> **Trạng thái:** ☐ Chưa làm

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ItemTemplates/Test.cs` |
| Payload | `ItemTemplates/CSharp/09.TestItemTemplate/Class.cs` |
| T4 | `Shared/Resources/tt/Test.tt` |
| Context | `T4Helper.BuildTestContextAsync` (gồm `TestTargetFullClassName`) |

## 2. Template tạo ra gì

`{Class}Test.cs` — MSTest class test cho 1 class plugin/workflow đích (FakeXrmEasy), `[TestClass]`, mock `ITracingService` (SharedTest), tham chiếu class đích qua `TestTargetFullClassName`.

## 3. Logic wizard hiện tại

Đọc `Test.cs` khi làm. Form chọn **class đích** (scan các class plugin trong solution/project Server) + entity/message/stage để dựng context test.

## 4. Thiết kế source of truth

- Handler `TestItemTemplateHandler` — render `Test.tt`; **tìm class đích**: quét file `.cs` của project Server trong `--out` (regex/Roslyn) lấy danh sách class gợi ý (thay cho DTE reflection của VSIX).

## 5. Việc phải làm (CLI)

- [ ] Handler + manifest (id `Test`, order I.9) + embed payload.
- [ ] Prompt: chọn class đích (danh sách scan được; cho gõ tay khi offline) → các field còn lại.

## 6. CLI surface

```
devkit new --kind item --type Test --name PreAccountUpdateTest --out <dir> [--offline]
```

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_item` `itemType="Test"`.

## 8. Test & nghiệm thu

- [ ] Unit test: render `Test.tt` compile được; scan class đích tìm đúng class trong folder mẫu.
- [ ] Build CLI 0/0; test pass.

## 9. Bàn giao

- [ ] Báo cáo + user duyệt → qua `I.10.UiTest.md`.
