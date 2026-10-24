# I.16 — TsDialog Item Template (dialog TypeScript)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/I.16.TsDialog.md`
> **Điều kiện tiên quyết:** `0.md`.
> **Trạng thái:** ☐ Chưa làm

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ItemTemplates/TsDialog.cs` |
| Payload | `ItemTemplates/CSharp/16.TsDialogItemTemplate/` — `TypeScript.ts`, `TypeScript.dialog.ts` |
| Codegen (Shared sẵn) | `Shared/Logic/TsDialog.cs` (`GetTsDialogCodeAsync`), `CodeGenService.GetDefaultTsDialogFileAsync` |

## 2. Template tạo ra gì

Với **tên dialog** user đặt (không cần entity/metadata): `{Name}.ts` (stub) + `{Name}.dialog.ts` (class dialog TS theo pattern DevKit dialog).

## 3. Logic wizard hiện tại

Đọc `TsDialog.cs` khi làm. Form hỏi tên dialog; không cần kết nối Dataverse.

## 4. Thiết kế source of truth

- Handler `TsDialogItemTemplateHandler` — thuần offline.

## 5. Việc phải làm (CLI)

- [ ] Handler + manifest (id `TsDialog`, order I.16) + embed payload.
- [ ] Prompt: dialog name → namespace/project đích.

## 6. CLI surface

```
devkit new --kind item --type TsDialog --name ConfirmDialog --out <dir/src>
```

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_item` `itemType="TsDialog"`.

## 8. Test & nghiệm thu

- [ ] Unit test: 2 file đúng tên; rerun giữ stub.
- [ ] Build CLI 0/0; test pass.

## 9. Bàn giao

- [ ] Báo cáo + user duyệt → qua `I.17.JsDialog.md`.
