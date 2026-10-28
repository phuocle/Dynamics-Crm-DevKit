# I.3 — JsWebApi Item Template (webapi JavaScript cho entity)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/I.3.JsWebApi.md`
> **Điều kiện tiên quyết:** `0.md`, `I.2.JsForm.md` (đối xứng).
> **Trạng thái:** ☑ HOÀN THÀNH + USER DUYỆT 2026-10-28 (COMPARE CHỐT 4/4 BYTE-IDENTICAL — sạch nhất track)

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ItemTemplates/JsWebApi.cs` |
| Payload | `ItemTemplates/CSharp/03.JsWebApiItemTemplate/` — `Javascript.js`, `Javascript.webapi.js`, `Javascript.d.ts` (đều có BOM, single $token$) |
| Codegen (Shared sẵn) | `Shared/Logic/JsWebApi.cs` (`GetJsWebApiCodeAsync`), `CodeGenService.GetDefaultWebApiFileAsync`, `Shared/Logic/JsTypeScriptDeclaration.cs` (dts: `isJsFormExist`, `isJsWebApiExist`) |

## 2. Template tạo ra gì

Với entity: `{Entity}.js` (stub user 2 dòng `//@ts-check` + reference `.d.ts` — chung shape với webapi fallback của JsForm, không đè), `{Entity}.webapi.js` (CRUD + action/function webapi code sinh từ attributes, kèm `OptionSet.{Entity}`), `{Entity}.d.ts` (typing: section `{Entity}Api` LUÔN bật; section Form khi `{Entity}.form.js` tồn tại). Vstemplate order: `.js` → `.d.ts` → `.webapi.js`.

## 3. Logic wizard hiện tại

`JsWebApi.cs`: `GetDefaultWebApiFileAsync(ItemName)` → `$Javascript$`; `JsWebApi.GetJsWebApiCodeAsync(serviceClient, EntityMetadata, rootnamespace, IsJsFormExistAsync())` → `$Javascript.webapi.js$`/`$Javascript.d.ts$`; `IsJsFormExistAsync` = `File.Exists({ItemName}.form.js)` trong folder đích; `ShouldAddProjectItem` map `Javascript.js`→`{ItemName}.js`, `Javascript.d.ts`→`{ItemName}.d.ts`, default→`{ItemName}.webapi.js`.

## 4. Thiết kế source of truth

- Handler `JsWebApiItemTemplateHandler` (self-contained như I.1/I.2 — private helpers copy, không extract base class); idempotency như I.2: `{Entity}.js` skip-trừ-force; `.webapi.js`/`.d.ts` so FULL content `Helper.IsTheSame` (không timestamp header), compare/rewrite độc lập từng file; BOM ghi đúng payload.
- **Pre-check offline 2 tầng** (service==null):
  1. metadata.Attributes == null **hoặc** có lookup mà Targets null/rỗng-hiếu target trong `XrmHelper.EntitiesMetadata` → chặn "read entity metadata" (codegen `AddIfNotExistAsync(null)` sẽ NPE với target lạnh);
  2. `{Entity}.form.js` tồn tại mà **EntitiesFormXml HOẶC EntitiesProcessForm** lạnh cho entity → chặn "read entity forms".
- `isJsFormExist` = `File.Exists({SchemaName}.form.js)` trong out-dir (đối xứng `isJsWebApiExist` của I.2).
- Catalog `TemplateCatalog` đã có sẵn descriptor `JsWebApi` (Order 3) từ bước 0; embeds projitems 426-428 có sẵn — chỉ thêm handler + Compile entry (projitems 309) + register `TemplateHandlers.RegisterAll`.
- TaskNew/NewCommand KHÔNG sửa (flow item generic + RequiresConnection=true catalog có sẵn).

## 5. Việc phải làm (CLI)

- [x] Handler + manifest (id `JsWebApi`, order vstemplate: .js/.d.ts/.webapi.js; `.d.ts`+`.webapi.js` IsGenerated) + embed payload (có sẵn).
- [x] Prompt entity; target `entities/` của WebResource project (flow generic có sẵn).

## 6. CLI surface

```
devkit new --kind item --type JsWebApi --entity account --out <dir>
```

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_item` `itemType="JsWebApi"`.

## 8. Test & nghiệm thu

- [x] Unit test đối xứng I.2: **13 `JsWebApiItemTemplateHandlerTests`** (Cli.UnitTests/Templates) — manifest/new-list/3 file + BOM + content từng nhánh codegen (plain/DateTime suffix `_TimezoneDateAndTime`/picklist `g:'Integer'`/lookup OData navigation `b`+`_x_value`+`c`+`d`)/logical-name input/rerun skip-unchanged/webapi-change update d.o. declaration/force/**form sibling bật section Form + webapi.js Unchanged**/4 case chặn offline (attributes-rỗng, lookup-target-missing, form+process-lạnh-khi-có-sibling, cache-rỗng)/unknown entity.
- [x] Build CLI 0 err/0 warn (main build; test project 2 warning CA2022 **pre-existing** ở SharedProjectTemplateHandlerTests — không phải của I.3).
- [x] Full suites ALL PASS: **Cli 5042** (baseline 5029 + 13) / Tool 253 / Vsix 571 / Analyzers 310 / **Vsix.2019 48** (VS MSBuild Enterprise + vstest.console).
- [x] Demo live (CLI install qua `Release.DynamicsCrm.DevKit.Cli.ps1`, Build 28.10.2026 06:18:25, SHA 0DAA36F6…):
  `devkit new --kind item --type JsWebApi --entity account --out ../TestAllInOneCli/Dev.AllInOne.WebResource/entities` (chạy TỪ TestAllInOne2)
  → **Skipped** Account.js / **Updated** Account.d.ts (bật section `AccountApi` — có sẵn .form.js từ I.2) / **Created** Account.webapi.js.
  Rerun → Skipped/Unchanged/Unchanged (0/0/3).
  Rerun **JsForm** sau đó → 3/3 Unchanged — **pairing chốt**: d.ts do JsWebApi ghi (Api+Form) == d.ts JsForm sinh khi thấy `.webapi.js` (cùng `JsTypeScriptDeclaration.GetCodeAsync(ns, true, true)`).
- [x] build-release-only EXIT=0: 4 artifacts fresh 06:20 (Analyzers/Cli/Tool/Vsix), `devkit --version` = 4.44.44.44 Build **31.12.2026 23.59.59** (annual), Const.cs placeholder restored, sweep sạch.

## 9. Kết quả so wizard VSIX (COMPARE — chờ aP)

- **COMPARE CHỐT 2026-10-28 (aP tạo item VSIX `03. Javascript WebApi` vào TestAllInOne2/entities 07:00): 4/4 file cmp thuần BYTE-IDENTICAL** — `Account.js` 6198 / `Account.form.js` 9930 (giữ nguyên từ I.2) / `Account.d.ts` 86128 (Form+Api sections) / `Account.webapi.js` 19759. **SẠCH NHẤT TOÀN TRACK** (I.2 3/3, I.1 còn 1 dòng Last Modified).
- Lệch duy nhất = csproj VSIX-side housekeeping: VS tự thêm `<None Update="entities\Account.webapi.js"><DependentUpon>Account.js` — project system nesting, KHÔNG phải template output, cùng family I.1/I.2 lệch #3 chờ phê chung lô.
- `.env` guards nguyên xuyên suốt (TestAllInOne2 `5bd73218` / TestAllInOneCli `52cfb0b7`).

## 10. Bài học / lệch ghi nhận

- **d.ts section Form đọc CẢ EntitiesProcessForm** (BPF) qua `GetForm_d_ts_ProcessAsync` → NPE khi service null + cache lạnh — phát hiện lúc test `FormSibling`; pre-check sửa thành chặn cả 2 cache (đối xứng I.2), fixture seed dummy mxswa process.
- `Helper.SafeIdentifier` **giữ nguyên case** ("account" → `account`, không Pascal) — assert webapi.js dùng `account.EntityName`, riêng `WebResource.{SchemaName}Api` theo SchemaName.
- Dòng attribute CUỐI (OrderBy SchemaName) bị `TrimEnd(",\r\n")` mất dấu phẩy — assert dòng cuối không có `,`.
- Unit test asserts bản đầu sai 2 chỗ (`Account` vs `account`) — sửa theo output thật của codegen, KHÔNG cook.

## 11. Bàn giao

- [x] Báo cáo + user duyệt (compare 4/4 byte-identical 2026-10-28) → commit 5 lô (feat/test/fixtures-2-bên/docs/build) → qua `I.4.Plugin.md`.
