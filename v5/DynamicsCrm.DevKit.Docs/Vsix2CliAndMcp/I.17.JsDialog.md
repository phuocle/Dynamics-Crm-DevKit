# I.17 — JsDialog Item Template (dialog JavaScript)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/I.17.JsDialog.md`
> **Điều kiện tiên quyết:** `0.md`.
> **Trạng thái:** ☐ Chưa làm

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ItemTemplates/JsDialog.cs` |
| Payload | `ItemTemplates/CSharp/17.JsDialogItemTemplate/` — `JavaScript.js` (stub), `JavaScript.dialog.js` (sinh), `JavaScript.d.ts` (typing) |
| Codegen (Shared sẵn) | `Shared/Logic/JsDialog.cs` (`GetJsDialogCodeAsync`) |

## 2. Template tạo ra gì

Với **tên dialog** user đặt (không cần entity/metadata): `{Name}.js` (stub — không đè) + `{Name}.dialog.js` (class dialog JS theo pattern DevKit dialog) + `{Name}.d.ts` (typing). Target: project WebResource JS (P.6).

## 3. Logic wizard hiện tại

Đọc `JsDialog.cs` khi làm. Hỏi tên dialog; không cần kết nối Dataverse — thuần offline.

## 4. Thiết kế source of truth

- Handler `JsDialogItemTemplateHandler` — gọi `Logic/JsDialog` (đã Shared); idempotency: stub không đè; `.dialog.js`/`.d.ts` update-if-changed.

## 5. Việc phải làm (CLI)

- [ ] Handler + manifest (id `JsDialog`, order I.17) + embed payload.
- [ ] Prompt: dialog name → project đích (`--out`).

## 6. CLI surface

```
devkit new --kind item --type JsDialog --name ConfirmDialog --out <dir>
```

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_item` `itemType="JsDialog"`.

## 8. Test & nghiệm thu

- [ ] Unit test: 3 file đúng tên; rerun giữ stub, update generated; typing `.d.ts` đúng.
- [ ] Build CLI 0/0; test pass.

## 9. Bàn giao

- [ ] Báo cáo + user duyệt → qua `I.18.Report.md`.
