# I.5 — CustomAction Item Template

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/I.5.CustomAction.md`
> **Điều kiện tiên quyết:** `0.md`, `I.4.Plugin.md` (pipeline T4 đã chạy).
> **Trạng thái:** ☐ Chưa làm

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ItemTemplates/CustomAction.cs` |
| Payload | `ItemTemplates/CSharp/05.CustomActionItemTemplate/Class.cs` |
| T4 | `Shared/Resources/tt/CustomAction.tt` |
| Form | `FormPlugin.xaml(.cs)` với `ItemType.CustomAction` (validate message phải là custom action) |

## 2. Template tạo ra gì

`{Class}.cs` — class xử lý custom action (kế thừa pattern plugin, message là custom action name đã đăng ký trong Dataverse).

## 3. Logic wizard hiện tại

Đọc `CustomAction.cs` khi làm. Như I.4 nhưng thêm **validate message là CustomAction tồn tại** (query `SdkMessage`/custom action metadata) trước khi render T4.

## 4. Thiết kế source of truth

- Handler `CustomActionItemTemplateHandler` — tái dùng toàn bộ pipeline T4 của I.4; thêm bước validate message (qua MetadataService — logic validate đặt trong handler, Shared).

## 5. Việc phải làm (CLI)

- [ ] Handler + manifest (id `CustomAction`, order I.5) + embed payload.
- [ ] Prompt: message custom action (search từ metadata) → các câu hỏi còn lại như I.4.
- [ ] Offline: bỏ validate, warning.

## 6. CLI surface

```
devkit new --kind item --type CustomAction --name MyAction --message new_MyAction --entity account --out <dir> [--offline]
```

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_item` `itemType="CustomAction"`.

## 8. Test & nghiệm thu

- [ ] Unit test: render `CustomAction.tt` compile được; validate message đúng/sai (mock).
- [ ] Build CLI 0/0; test pass.

## 9. Bàn giao

- [ ] Báo cáo + user duyệt → qua `I.6.CustomApi.md`.
