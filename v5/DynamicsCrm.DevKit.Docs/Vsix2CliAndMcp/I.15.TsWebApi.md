# I.15 — TsWebApi Item Template (webapi TypeScript)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/I.15.TsWebApi.md`
> **Điều kiện tiên quyết:** `0.md`, `I.14.JsFormTs.md` (đối xứng).
> **Trạng thái:** ☐ Chưa làm

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ItemTemplates/TsWebApi.cs` |
| Payload | `ItemTemplates/CSharp/15.TsWebApiItemTemplate/` — `TypeScript.ts`, `TypeScript.webapi.ts` |
| Codegen (Shared sẵn) | `Shared/Logic/TsWebApi.cs` (`GetTsWebApiCodeAsync`), `CodeGenService.GetDefaultTsWebApiFileAsync` |

## 2. Template tạo ra gì

`{Entity}.ts` (stub chung — không đè) + `{Entity}.webapi.ts` (CRUD webapi TS sinh từ metadata). Nhận biết `{Entity}.form.ts` tồn tại.

## 3. Logic wizard hiện tại

Đọc `TsWebApi.cs` khi làm. Đối xứng I.14.

## 4. Thiết kế source of truth

- Handler `TsWebApiItemTemplateHandler`.

## 5. Việc phải làm (CLI)

- [ ] Handler + manifest (id `TsWebApi`, order I.15) + embed payload.
- [ ] Prompt entity.

## 6. CLI surface

```
devkit new --kind item --type TsWebApi --entity account --out <dir/src>
```

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_item` `itemType="TsWebApi"`.

## 8. Test & nghiệm thu

- [ ] Unit test đối xứng I.14.
- [ ] Build CLI 0/0; test pass.

## 9. Bàn giao

- [ ] Báo cáo + user duyệt → qua `I.16.TsDialog.md`.
