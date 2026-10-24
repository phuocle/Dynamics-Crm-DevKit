# I.2 — JsForm Item Template (form JavaScript cho entity)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/I.2.JsForm.md`
> **Điều kiện tiên quyết:** `0.md`, `I.1.LateBound.md` (pattern metadata item).
> **Trạng thái:** ☐ Chưa làm

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ItemTemplates/JsForm.cs` |
| Payload | `ItemTemplates/CSharp/02.JsFormItemTemplate/` — `Javascript.js` (stub), `Javascript.form.js` (sinh), `Javascript.d.ts` (sinh) |
| Codegen (Shared sẵn) | `Shared/Logic/JsForm.cs` (`GetJsFormCodeAsync`), `Shared/Logic/JsTypeScriptDeclaration.cs`, `CodeGenService.GetDefaultJsFormFileAsync` |

## 2. Template tạo ra gì

Với entity: `{Entity}.js` (stub user — không đè), `{Entity}.form.js` (code form events sinh từ metadata: fields, tabs, sections… — luôn update), `{Entity}.d.ts` (typing devkit). Logic `GetJsFormCodeAsync` tự nhận biết file `{Entity}.webapi.js` tồn tại (phối hợp với I.3).

## 3. Logic wizard hiện tại

Đọc `JsForm.cs` khi làm. Pattern như I.1: FormItem chọn entity → sinh 3 nội dung → token (`$Class$`-like cho js) → `ShouldAddProjectItem` chỉ add file chưa có; generated update-if-changed.

## 4. Thiết kế source of truth

- Handler `JsFormItemTemplateHandler` — codegen gọi thẳng Logic/JsForm + CodeGenService (đã Shared).
- Idempotency: `{Entity}.js` không đè; `.form.js`/`.d.ts` update-if-changed.

## 5. Việc phải làm (CLI)

- [ ] Handler + manifest (id `JsForm`, order I.2) + embed payload.
- [ ] Prompt chọn entity như I.1.
- [ ] Target mặc định: project WebResource (P.6) — `--out` trỏ folder `entities/`.

## 6. CLI surface

```
devkit new --kind item --type JsForm --entity account --out <dir>
```
Hỏi–đáp: entity.

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_item` `itemType="JsForm"`.

## 8. Test & nghiệm thu

- [ ] Unit test: 3 file đúng; rerun: stub skipped, generated updated; nhận biết đúng `.webapi.js` có mặt.
- [ ] Build CLI 0/0; test pass.

## 9. Bàn giao

- [ ] Báo cáo + user duyệt → qua `I.3.JsWebApi.md`.
