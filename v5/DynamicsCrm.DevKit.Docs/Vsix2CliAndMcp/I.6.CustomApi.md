# I.6 — CustomApi Item Template

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/I.6.CustomApi.md`
> **Điều kiện tiên quyết:** `0.md`, `I.5.CustomAction.md` (đối xứng).
> **Trạng thái:** ☐ Chưa làm

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ItemTemplates/CustomApi.cs` |
| Payload | `ItemTemplates/CSharp/06.CustomApiItemTemplate/Class.cs` |
| T4 | `Shared/Resources/tt/CustomApi.tt` |
| Form | `FormPlugin.xaml(.cs)` với `ItemType.CustomApi` |

## 2. Template tạo ra gì

`{Class}.cs` — class xử lý Custom API (message = tên Custom API đã đăng ký; render bằng `CustomApi.tt`).

## 3. Logic wizard hiện tại

Đọc `CustomApi.cs` khi làm. Như I.5 (validate Custom API tồn tại thay vì custom action).

## 4. Thiết kế source of truth

- Handler `CustomApiItemTemplateHandler` — pipeline T4 + validate CustomApi (metadata `StoredPluginCustomApi`/message).

## 5. Việc phải làm (CLI)

- [ ] Handler + manifest (id `CustomApi`, order I.6) + embed payload.
- [ ] Prompt: chọn Custom API từ metadata → các câu hỏi như I.4.

## 6. CLI surface

```
devkit new --kind item --type CustomApi --name MyApi --message new_MyApi --out <dir> [--offline]
```

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_item` `itemType="CustomApi"`.

## 8. Test & nghiệm thu

- [ ] Unit test: render `CustomApi.tt` compile được; validate đúng/sai.
- [ ] Build CLI 0/0; test pass.

## 9. Bàn giao

- [ ] Báo cáo + user duyệt → qua `I.7.Workflow.md`.
