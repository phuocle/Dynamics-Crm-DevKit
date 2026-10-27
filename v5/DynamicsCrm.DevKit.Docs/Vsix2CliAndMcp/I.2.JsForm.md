# I.2 — JsForm Item Template (form JavaScript cho entity)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/I.2.JsForm.md`
> **Điều kiện tiên quyết:** `0.md`, `I.1.LateBound.md` (pattern metadata item).
> **Trạng thái:** ✅ **HOÀN THÀNH + USER DUYỆT 2026-10-28 — ĐÃ COMMIT** (CLI 0 err/0 warn, VSIX net48 pass, focused 12/12, full suite **5029/253/571/310/48**, release build-release-only EXIT=0, demo live global tool 3 Created → rerun 3 skipped, **COMPARE CHỐT: 3/3 file BYTE-IDENTICAL — sạch nhất track**; lệch duy nhất = csproj VSIX-side housekeeping (Folder entities + DependentUpon ×2) — chi tiết mục "Kết quả thực thi" cuối file).

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

- [x] Handler + manifest (id `JsForm`, order I.2) + embed payload.
- [x] Prompt chọn entity như I.1.
- [x] Target mặc định: project WebResource (P.6) — `--out` trỏ folder `entities/`.

## 6. CLI surface

```
devkit new --kind item --type JsForm --entity account --out <dir>
```
Hỏi–đáp: entity.

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_item` `itemType="JsForm"`.

## 8. Test & nghiệm thu

- [x] Unit test: 3 file đúng; rerun: stub skipped, generated updated; nhận biết đúng `.webapi.js` có mặt.
- [x] Build CLI 0/0; test pass.

## 9. Bàn giao

- [x] Báo cáo + user duyệt → qua `I.3.JsWebApi.md`. *(aP duyệt 2026-10-28 sau compare 3/3 byte-identical — "update lại file I2.md và run commit.md all tất cả các files")*

## Kết quả thực thi (2026-10-28)

### Đã giao

| Hạng mục | Kết quả |
|---|---|
| Handler | `Shared/Templates/Handlers/JsFormItemTemplateHandler.cs` — `ITemplateHandler`, manifest **3 file đúng vstemplate order** (`$SchemaName$.js` user-file + `$SchemaName$.d.ts` + `$SchemaName$.form.js` cả 2 `IsGenerated=true`), CreateManifest set `Kind=Item` tường minh; embeds payload 3 file đã có sẵn từ bước 0 (projitems 422-424) — chỉ thêm Compile entry handler + đăng ký `RegisterHandler(TemplateKind.Item, new JsFormItemTemplateHandler())` |
| Codegen | Dùng đúng source of truth Shared: `CodeGenService.GetDefaultJsFormFileAsync` (stub `$Javascript$`) + `Logic.JsForm.GetJsFormCodeAsync` (`$Javascript.form.js$`/`$Javascript.d.ts$`) — render qua payload stub BOM + 1 token (ApplyReplacements), `ForceWriteAllTextAsync` giữ BOM như VSIX |
| Metadata | Lookup `XrmHelper.EntitiesMetadata` (SchemaName HOẶC LogicalName, case-insensitive — parity I.1); cache rỗng + service → `ReadEntitiesMetadataAsync(EntityFilters.Attributes)`; **upgrade per-entity `FetchEntityMetadataAsync` (All) khi có service — mirror wizard** (GetJsFormCodeAsync/JsTypeScriptDeclaration tự fetch All khi `Attributes == null`); `isJsWebApiExist` = `File.Exists({SchemaName}.webapi.js)` trong thư mục đích (mirror `IsJsWebApiExistAsync` + TaskGenerator) |
| Forms/BPF | Codegen consume lazy caches `EntitiesFormXml`/`EntitiesProcessForm` (AddIfNotExistAsync tự fetch per-entity khi có service) — **pre-check khi `service == null`: cả 2 cache phải có entity** (chặn NPE `MetadataService(null)`) → error "requires a Dataverse connection to read entity forms" |
| Idempotency | `{Entity}.js` không đè trừ `--force`; `.form.js`/`.d.ts` **so FULL content** `Helper.IsTheSame` (whitespace-tolerant — cùng precedent TaskGenerator dùng cho chính `.form.js`; **không line-6 vì codegen JsForm không có timestamp header**) — tương đương wizard `WriteTargetFileIfChangedAsync` (Ordinal) nhưng tolerant VS-reformat; compare/rewrite **độc lập từng file** như wizard RunFinished |
| No-forms | Entity không có Main/QuickCreate form → stub `.js` vẫn sinh (fallback webapi-style 2 dòng — `GetDefaultJsFormFileAsync` tự xử, mirror wizard `$Javascript$`), `.form.js`/`.d.ts` **skip + warning "(no forms)"** (tiền lệ TaskGenerator `DO_NOTHING "(no forms)"`); wizard gốc để token null (hành vi undefined) |
| rootnamespace | = scanner RootNamespace + folder đích dưới project root (VD `Dev.AllInOne.WebResource.entities` → JS namespace `AllInOne` = GetNameSpace parts[1]) — REF parity cách VS compose |
| CLI | TaskNew/NewCommand **KHÔNG sửa** — flow item generic có sẵn (SelectionPrompt searchable + guard `--offline` RequiresConnection); catalog JsForm có sẵn Order 2/Conn yes — register handler xong `devkit new list` Ready=yes tự động |
| Tests | 12 `JsFormItemTemplateHandlerTests` (`[DoNotParallelize]`, pre-seed cả 3 static caches EntitiesMetadata/EntitiesFormXml/EntitiesProcessForm — KHÔNG cần service): manifest 3 file, Ready=yes, create 3 file + BOM + nội dung (body/tab/header/OptionSet/enum), logical-name lookup, rerun skip/unchanged, form-change → Updated (d.ts Unchanged độc lập), --force, **webapi sibling → section `AccountApi` trong d.ts**, no-forms → skip + warning, cold-form-cache error, empty-metadata error, unknown-entity error. Full suite: **Cli 5029 (baseline 5017 + 12) / Tool 253 / Vsix 571 / Analyzers 310 / Vsix.2019 48 — all Pass** |
| Build/Release | CLI 0 err/0 warn (--no-incremental); VSIX net48 VS-MSBuild pass; release build-release-only **EXIT=0** (annual `31.12.2026 23.59.59`, 4 artifacts 05:49 28-10, Const.cs placeholder restored, sweep OK) |
| Demo live | Global tool `4.44.44.44 Build: 31.12.2026 23.59.59` chạy từ `DynamicsCrm.DevKit.Tests/TestAllInOne2` (`.env` md5 `5bd73218`; TestAllInOneCli/.env `52cfb0b7` cũ — KHÔNG đụng) `--out ../TestAllInOneCli/Dev.AllInOne.WebResource/entities`: Connected → **`3 Created`** (Account.js 6.2KB + Account.d.ts 44KB + Account.form.js 9.9KB); **rerun: Skipped/Unchanged/Unchanged — `0 created, 0 updated, 3 skipped`**; namespace `AllInOne`, BPF thật (`AccountBPF___IndustryCode`…), BOM giữ nguyên; cả 2 `.env` guard nguyên vẹn xuyên suốt |
| Docs | `DynamicsCrm.DevKit.Docs/Cli/new.md`: thêm bullet Item `JsForm` (Ready — I.2), đổi "còn lại (I.2..I.18)" → "I.3..I.18", connection note + thêm 1 example lệnh |

### Các lệch so với work file (chờ aP phê khi compare/duyệt)

1. **No-forms flow**: work file không nói; wizard gốc để token null (VS sẽ viết payload literal-token hoặc lỗi — hành vi undefined). CLI làm explicit: stub `.js` fallback webapi-style + 2 generated skip + warning — theo tiền lệ TaskGenerator "(no forms)".
2. **Generated compare full-content `Helper.IsTheSame`** (wizard `WriteTargetFileIfChangedAsync` dùng Ordinal): chọn IsTheSame vì (a) TaskGenerator đã dùng nó cho chính `.form.js`, (b) tolerant với VS-reformat (tab→space) — filed content thật vẫn Unchanged. Không có timestamp header nên không cần so-từ-dòng-N như LateBound.
3. **`--offline` BỊ CHẶN tuyệt đối** (khác LateBound chỉ chặn khi cache lạnh): JsForm cần forms + processes cache — không service thì stub cũng không sinh được (stub phụ thuộc form list). Catalog RequiresConnection=true + guard sớm TaskNew + pre-check riêng trong handler.
4. So sánh d.ts `.webapi.js`: check bằng `File.Exists` case-insensitive trên Windows — parity wizard (cũng File.Exists trên Windows).

### Bài học

- **net10 `Label(string, int)` KHÔNG set `UserLocalizedLabel`** (chỉ add `LocalizedLabels`) — extension `OptionSetValues()` (Shared) đọc `Label.UserLocalizedLabel.Label` → fixture phải `option.Label.UserLocalizedLabel = new LocalizedLabel(name, 1033)` tường minh. `GeneratorIntegrationTests` fixture cùng lỗi tiềm ẩn nhưng không assert option names nên không lộ.
- **OptionSet fixture pattern đúng**: `var os = new OptionSetMetadata(); os.Options.Add(option)` — ctor `OptionSetMetadata(OptionMetadataCollection{...})` tạo ra collection rỗng lúc đọc (đã chứng minh bằng diag test).
- SDK fixture: `PicklistAttributeMetadata.OptionSet` + reflection `AttributeType` (pattern GeneratorIntegrationTests).
- Fixture vị trí: `DynamicsCrm.DevKit.Tests/TestAllInOne2` + `TestAllInOneCli` (KHÔNG phải repo root) — tìm bằng `find E:/src -maxdepth 7`.
- `unit-test.md` workflow drift: ghi `Professional` + dll `DynamicsCrm.DevKit.2019.UnitTests.dll` — thực tế máy là **Enterprise** + dll `DynamicsCrm.DevKit.Vsix.2019.UnitTests.dll` (đã chạy bằng path thực; **flag aP, chưa sửa file workflow** — rule update-only-specified-file).
- Wizard JsForm: RunFinished chỉ update `.form.js`/`.d.ts` (stub không đụng), DependentUpon nest 2 generated dưới `.js` — CLI không đụng project file (csproj SDK glob) → DependentUpon là cosmetic gap chung của I.* (đã khai báo từ I.1 lệch #3).

### COMPARE TestAllInOne2 (VSIX wizard) vs TestAllInOneCli (CLI) — CHỐT 2026-10-28

- **VSIX side**: aP tạo Account item bằng wizard vào `Dev.AllInOne.WebResource/entities` lúc 05:54 (2 phút sau CLI side 05:52 — trong lúc session đang chạy). CLI side: global tool scaffold 05:52 từ TestAllInOne2.
- **3/3 file `cmp` thuần = BYTE-IDENTICAL** — `Account.js` 6198, `Account.d.ts` 44367, `Account.form.js` 9930 bytes hai bên y hệt. **Sạch nhất toàn track** (I.1 còn 1 dòng Last Modified by-design; P.8 5/5 byte-same; I.2 3/3). Không có timestamp diff (đúng dự đoán — codegen JsForm không stamp ngày), không VS-reformat (aP chưa mở file), namespace `AllInOne` + BPF thật + OptionSet khớp 100%.
- **Lệch duy nhất = csproj VSIX-side housekeeping** (VS project system tự làm khi file vào folder, KHÔNG phải template output): (1) xóa `<Folder Include="entities\" />`; (2) thêm 2 `<None Update="entities\Account.{d.ts,form.js}"><DependentUpon>Account.js</DependentUpon>` — đúng DependentUpon cosmetic family đã khai báo từ I.1 lệch #3; CLI không đụng csproj (SDK glob tự include). Chờ aP phê cùng lô DependentUpon của I.1.
- `.env` guards nguyên vẹn xuyên suốt: TestAllInOne2 `5bd73218`, TestAllInOneCli `52cfb0b7` (không đụng).
- **Gate → `I.3.JsWebApi.md`** (pair: JsForm handler nhận biết `{Entity}.webapi.js` — JsWebApi sinh file đó nên rerun JsForm sau JsWebApi phải bật section Api trong `.d.ts`).
