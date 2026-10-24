# I.3 — JsWebApi Item Template (webapi JavaScript cho entity)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/I.3.JsWebApi.md`
> **Điều kiện tiên quyết:** `0.md`, `I.2.JsForm.md` (đối xứng).
> **Trạng thái:** ☐ Chưa làm

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ItemTemplates/JsWebApi.cs` |
| Payload | `ItemTemplates/CSharp/03.JsWebApiItemTemplate/` — `Javascript.js`, `Javascript.webapi.js`, `Javascript.d.ts` |
| Codegen (Shared sẵn) | `Shared/Logic/JsWebApi.cs` (`GetJsWebApiCodeAsync`), `CodeGenService.GetDefaultWebApiFileAsync` |

## 2. Template tạo ra gì

Với entity: `{Entity}.js` (stub chung với form — không đè), `{Entity}.webapi.js` (CRUD + action/function webapi code sinh), `{Entity}.d.ts` (typing). Nhận biết `{Entity}.form.js` tồn tại để phối hợp stub.

## 3. Logic wizard hiện tại

Đọc `JsWebApi.cs` khi làm. Đối xứng I.2.

## 4. Thiết kế source of truth

- Handler `JsWebApiItemTemplateHandler`; idempotency như I.2 (`{Entity}.js` không đè; `.webapi.js`/`.d.ts` update).

## 5. Việc phải làm (CLI)

- [ ] Handler + manifest (id `JsWebApi`, order I.3) + embed payload.
- [ ] Prompt entity; target `entities/` của WebResource project.

## 6. CLI surface

```
devkit new --kind item --type JsWebApi --entity account --out <dir>
```

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_item` `itemType="JsWebApi"`.

## 8. Test & nghiệm thu

- [ ] Unit test đối xứng I.2 (stub/webapi/d.ts; rerun behavior; phối hợp form.js).
- [ ] Build CLI 0/0; test pass.

## 9. Bàn giao

- [ ] Báo cáo + user duyệt → qua `I.4.Plugin.md`.
