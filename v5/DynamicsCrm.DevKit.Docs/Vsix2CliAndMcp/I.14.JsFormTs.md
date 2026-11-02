# I.14 — JsFormTs Item Template (form TypeScript — wizard class `TsForm`)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/I.14.JsFormTs.md`
> **Điều kiện tiên quyết:** `0.md`, `I.2.JsForm.md` (đối xứng bản TS).
> **Trạng thái:** ✅ HOÀN THÀNH + ĐÃ COMMIT 2026-10-31 — code + tests + release + demo live + **COMPARE CHỐT 3/3 BYTE-IDENTICAL với wizard VSIX** (wizard aP `TestAllInOne2/Dev.AllInOne.WebResourceTs/entities` = CLI `TestAllInOneCli/Dev.AllInOne.WebResourceTs/src`, identical NGAY lần đầu, 0 fix); commit split feat/test/fixtures/docs/build, c1 worktree-verify, sweep 21/21, KHÔNG push (aP tự Sync).
> **Lưu ý tên:** folder VSIX gọi là `14.JsFormTsItemTemplate` nhưng **wizard class là `TsForm.cs`** và type dùng chung toàn hệ thống là `TsForm` — giữ `TsForm` làm `--type` để khớp spec/CLI hiện hữu.

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ItemTemplates/TsForm.cs` |
| Payload | `ItemTemplates/CSharp/14.JsFormTsItemTemplate/` — `TypeScript.ts` (stub), `TypeScript.form.ts` (sinh) |
| Codegen (Shared sẵn) | `Shared/Logic/TsForm.cs` (`GetTsFormCodeAsync`), `Shared/Logic/TsOptionSet.cs`, `CodeGenService.GetDefaultTsFormFileAsync` |

## 2. Template tạo ra gì

Với entity: `{Entity}.ts` (stub user — không đè) + `{Entity}.form.ts` (code form events TS sinh từ metadata) **+ `OptionSet.ts` refresh (wizard RunFinished LUÔN chạy — merge entity block có sẵn, CÓ BOM)**. Target: project WebResourceTs (P.13), thư mục `src/`.

## 3. Logic wizard hiện tại (đã đọc kỹ)

- `RunStarted`: FormItem dialog → `ItemName` = entity SchemaName; `EnsureEntityMetadataAsync` (FetchEntityMetadataAsync khi cache thiếu attributes); stub `$TypeScript$` = `GetDefaultTsFormFileAsync`; form `$TypeScriptForm$` = `Logic.TsForm.GetTsFormCodeAsync`. KHÔNG có token `$rootnamespace$` (codegen TS không nhận namespace).
- `ShouldAddProjectItem`: cả 2 file — tồn tại → không add (stub không đè; form chuyển sang nhánh write-if-changed ở RunFinished).
- `RunFinished`: form file `WriteTargetFileIfChangedAsync` (compare **Ordinal** trên read strip-BOM, viết `ForceWriteAllTextAsync` = **BOM**) + `DependentUpon` (form.ts → .ts, VSIX-only) + `RefreshOptionSetAsync` — **OptionSet.ts CÙNG folder target** (không phải project root), `TsOptionSet.GetTsOptionSetCodeAsync(ServiceClient, [entity], existingContent)` merge, write-if-changed (Ordinal), `AddTargetFileToProjectAsync` (VSIX-only).
- Codegen đọc lazy caches `XrmHelper` (EntitiesFormXml qua `GetEntityFormsAsync` filter Main/QuickCreate, EntitiesProcessForm qua `GetProcessFieldsAsync`, EntitiesMetadata) — mọi org call đều `AddIfNotExistAsync` cache-first → offline test seed cache được (như I.2).

## 4. Thiết kế source of truth (đã implement)

- Handler `TsFormItemTemplateHandler` (`Shared/Templates/Handlers/`, Compile entry projitems sau BatFile handler): manifest đúng 2 payload file vstemplate (OptionSet.ts KHÔNG phải payload — wizard viết từ code); idempotency: stub Skipped (user file, `--force` đè), `.form.ts` Unchanged/Updated theo **Ordinal compare** (khác JsForm dùng `IsTheSame` — vì không có CLI generator tiền lệ cho form.ts, wizard TsForm dùng Ordinal), OptionSet.ts Created/Unchanged/Updated, **luôn viết BOM** (`ForceWriteAllTextAsync` — đúng wizard).
- Stub: `payload.HasBom` quyết định BOM — payload `.ts` KHÔNG BOM (khác JsForm payload có BOM) → output không BOM. OptionSet.ts là path riêng luôn BOM.
- No-forms: warning + `{Entity}.form.ts` Skipped, stub = file rỗng (`GetDefaultTsFormFileAsync` trả `string.Empty`), OptionSet.ts vẫn sinh (wizard refresh luôn chạy). (Wizard thật với formCode null là path lỗi bị nuốt — không port.)
- Guard offline: ServiceClient null + cache Forms/ProcessForm thiếu entity → lỗi connection (mirror JsForm).
- `TaskNewItem`: gate `--entity` thêm `TsForm` vào nhóm LateBound/JsForm/JsWebApi; entity prompt searchable dùng chung đã tự phủ (TsForm không nằm trong danh sách loại trừ); không prompt name. KHÔNG đụng DevKitCommand.cs (ruling I.13).
- Register sau BatFile trong `TemplateHandlers.RegisterAll`. Catalog row `TsForm` có sẵn — không đụng.

## 5. Việc phải làm (CLI)

- [x] Handler + manifest (id `TsForm`, displayName catalog "TsForm (JsFormTs)" có sẵn) + embed payload (projitems embed có sẵn dòng 462-463, chỉ thêm Compile handler).
- [x] Prompt entity như I.2 (prompt generic có sẵn + gate thêm TsForm).

## 6. CLI surface (đã đổi cú pháp theo refactor new-project/new-item)

```
devkit new-item --type TsForm --entity account --project Dev.AllInOne.WebResourceTs --out <project>/src
```

Chú ý: `--out` folder phải TỒN TẠI trước (workspace scan của engine đọc folder trước khi handler tạo dir — trong VS wizard luôn add vào folder có sẵn trong Solution Explorer nên không lệch bản chất; demo đã `mkdir src` trước).

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_item` `itemType="TsForm"`.

## 8. Test & nghiệm thu

- [x] Unit test: **12 tests** mirror I.2 (`TsFormItemTemplateHandlerTests`) — 2 file + OptionSet; rerun giữ stub + Unchanged form/OptionSet; form change → Updated; `--force` đè stub; no-forms skip + warning; 2 lỗi connection; unknown entity; **OptionSet merge giữ entity block cũ** (test riêng với Contact). 12/12 pass.
- [x] Build CLI 0/0 (2 warnings CA2022 pre-existing ở UnitTests, không phải code mới).
- [x] Full 5 suites: **Cli 5222** (baseline mới = 5210 + 12) / Tool 253 / Vsix 571 / Analyzers 310 / Vsix.2019 48 — all Pass (Vsix.2019 qua VS MSBuild Enterprise + vstest, dll tên `DynamicsCrm.DevKit.Vsix.2019.UnitTests.dll` — workflow doc vẫn ghi tên dll cũ, drift đã biết).
- [x] build-release-only: `devkit --version` = 4.44.44.44 Build: **31.12.2026 23.59.59**; 4 artifacts đủ dưới `Published/4.44.44.44/`; Const.cs placeholder restored; sweep sạch (git status không có modification ngoài code I.14 + Published); **installed CLI dll SHA256 = nupkg dll SHA256** (`2C3F83CA707F53EF…`).
- [x] Demo live từ `TestAllInOneCli/Dev.AllInOne.WebResourceTs/src` (connected `dynamics-crm-devkit-v4`, .env walk-up TestAllInOneCli): 3 file **Created** — `Account.ts` (10,377 B, không BOM), `Account.form.ts` (63,322 B, không BOM), `OptionSet.ts` (22,682 B, **CÓ BOM efbbbf**); rerun → Skipped/Unchanged/Unchanged.

## 9. Bàn giao

- [x] Báo cáo + bằng chứng output thật (trong session; chưa commit).
- [x] **COMPARE CHỐT 3/3 BYTE-IDENTICAL (2026-10-31, identical NGAY lần đầu — ngang I.5/I.8):** wizard aP tạo vào `TestAllInOne2/Dev.AllInOne.WebResourceTs/entities/` (folder aP chọn trong Solution Explorer — wizard ghi đúng nơi chọn; CLI demo ở `src/` — vị trí folder không vào nội dung vì codegen TS không mang `$rootnamespace$`); 2 file `generator.*.bat` cũ 26/10 trong folder không liên quan I.14. cmp + md5 từng cặp (absolute path):
  - `Account.ts` 10,377 B — md5 `8d323013ba43f97b35c3e57dbcc32f8e` cả 2 bên (không BOM — bắt đầu `import`)
  - `Account.form.ts` 63,322 B — md5 `fac648144193f5e156ee9c635b2a5275` cả 2 bên (không BOM — bắt đầu `/**`)
  - `OptionSet.ts` 22,682 B — md5 `d26ef0c453772b0389db79ec523b06e4` cả 2 bên (**CÓ BOM efbbbf** — đúng wizard `ForceWriteAllTextAsync`)
  - Không lệch csproj (SDK-style WebResourceTs — family I.4+ không xảy ra).
- [x] **ĐÃ COMMIT 2026-10-31 theo lệnh aP ("run commit.md hết các files") — 5 commits split**: feat(templates) [handler + register + projitems Compile + TaskNewItem gate; c1 worktree-verify CLI 0/0] → test(templates) [12 tests] → chore(tests) fixtures [6 file 2 bên: wizard `entities/` 3 file + CLI `src/` 3 file + csproj wizard-side housekeeping — VS xoá `<Folder entities\>` + thêm `<None Update="entities\Account.form.ts"><DependentUpon>Account.ts` — family I.1#3 đã phê; kiểm CLEAN không secret] → docs [I.14.md + new.md] → build [4 Published]. Sweep 21/21 trước commit; KHÔNG push.
- [ ] Qua `I.15.TsWebApi.md` (session mới — handoff delivered).

## 10. Lessons I.14

- **TsForm ≠ JsForm ở 3 điểm**: (1) KHÔNG `.d.ts` — chỉ 2 payload; (2) wizard có `RefreshOptionSetAsync` — OptionSet.ts merge, CÓ BOM, luôn chạy (JsForm wizard không có); (3) compare generated = Ordinal (wizard `WriteTargetFileIfChangedAsync`), không phải `IsTheSame`.
- Fixture test form XML: classid control phải đúng bảng `ControlClassId` (DATE_TIME = `5B773807-9FB2-42DB-97C3-7A91EFF8ADFF`) — TsForm `GetBodyFields` filter theo `CONTROLS`, sai classid → field bị drop âm thầm (test JS cũ dùng classid khác nhưng JsForm không filter nên không lộ).
- `TsOptionSet` sort option values theo tên (`Cold: 2, Warm: 1` — không phải insertion) + tự thêm block `RollupState` cho mỗi entity — assert test phải theo output thật.
- `--out` folder phải tồn tại trước (engine workspace scan trước handler); đã ghi chú trong new.md examples.
- BOM quyết bằng `payload.HasBom` như handoff dặn — payload `.ts` không BOM, OptionSet.ts là path riêng luôn BOM; chờ aP compare chốt.
