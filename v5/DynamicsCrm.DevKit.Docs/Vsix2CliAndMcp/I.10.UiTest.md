# I.10 — UiTest Item Template (UI automation test class)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/I.10.UiTest.md`
> **Điều kiện tiên quyết:** `0.md`, `I.4.Plugin.md` (pipeline T4).
> **Trạng thái:** ☐ Chưa làm

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ItemTemplates/UiTest.cs` |
| Payload | `ItemTemplates/CSharp/10.UiTestItemTemplate/Class.cs` |
| T4 | `Shared/Resources/tt/UiTest.tt` |
| Context | `T4Helper.BuildClassContextAsync` (chỉ cần namespace/class/shared) |

## 2. Template tạo ra gì

`{Class}UiTest.cs` — Selenium test class (login app, thao tác UI theo `App.cs`/`TestSettings` của project UiTest P.10).

## 3. Logic wizard hiện tại

Đọc `UiTest.cs` khi làm. Pipeline T4 với context nhẹ (BuildClassContextAsync) — không cần metadata Dataverse.

## 4. Thiết kế source of truth

- Handler `UiTestItemTemplateHandler` — render `UiTest.tt`.

## 5. Việc phải làm (CLI)

- [ ] Handler + manifest (id `UiTest`, order I.10) + embed payload.
- [ ] Prompt: class name → namespace (tự suy từ project đích).

## 6. CLI surface

```
devkit new --kind item --type UiTest --name LoginFlow --out <dir>
```

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_item` `itemType="UiTest"`.

## 8. Test & nghiệm thu

- [ ] Unit test: render `UiTest.tt` compile được; tên file `{Class}UiTest.cs` đúng.
- [ ] Build CLI 0/0; test pass.

## 9. Bàn giao

- [ ] Báo cáo + user duyệt → qua `I.11.ResourceString.md`.
