# I.14 — JsFormTs Item Template (form TypeScript — wizard class `TsForm`)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/I.14.JsFormTs.md`
> **Điều kiện tiên quyết:** `0.md`, `I.2.JsForm.md` (đối xứng bản TS).
> **Trạng thái:** ☐ Chưa làm
> **Lưu ý tên:** folder VSIX gọi là `14.JsFormTsItemTemplate` nhưng **wizard class là `TsForm.cs`** và type dùng chung toàn hệ thống là `TsForm` — giữ `TsForm` làm `--type` để khớp spec/CLI hiện hữu.

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ItemTemplates/TsForm.cs` |
| Payload | `ItemTemplates/CSharp/14.JsFormTsItemTemplate/` — `TypeScript.ts` (stub), `TypeScript.form.ts` (sinh) |
| Codegen (Shared sẵn) | `Shared/Logic/TsForm.cs` (`GetTsFormCodeAsync`), `Shared/Logic/TsOptionSet.cs`, `CodeGenService.GetDefaultTsFormFileAsync` |

## 2. Template tạo ra gì

Với entity: `{Entity}.ts` (stub user — không đè) + `{Entity}.form.ts` (code form events TS sinh từ metadata, include option set enum). Target: project WebResourceTs (P.13), thư mục `src/`.

## 3. Logic wizard hiện tại

Đọc `TsForm.cs` khi làm. Như I.2 nhưng bản TS; nhận biết `{Entity}.webapi.ts` (I.15).

## 4. Thiết kế source of truth

- Handler `TsFormItemTemplateHandler`; idempotency: stub không đè; `.form.ts` update-if-changed.

## 5. Việc phải làm (CLI)

- [ ] Handler + manifest (id `TsForm`, order I.14, displayName ghi rõ "JsFormTs") + embed payload.
- [ ] Prompt entity như I.2.

## 6. CLI surface

```
devkit new --kind item --type TsForm --entity account --out <dir/src>
```

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_item` `itemType="TsForm"`.

## 8. Test & nghiệm thu

- [ ] Unit test: 2 file; rerun giữ stub, update form.ts; option set enum sinh đúng.
- [ ] Build CLI 0/0; test pass.

## 9. Bàn giao

- [ ] Báo cáo + user duyệt → qua `I.15.TsWebApi.md`.
