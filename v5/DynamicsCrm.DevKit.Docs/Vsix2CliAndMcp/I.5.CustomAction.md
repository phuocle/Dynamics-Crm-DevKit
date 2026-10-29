# I.5 — CustomAction Item Template

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/I.5.CustomAction.md`
> **Điều kiện tiên quyết:** `0.md`, `I.4.Plugin.md` (pipeline T4 đã chạy).
> **Trạng thái:** ✅ Đã implement + test + release + demo live (2026-10-29) — CHỜ aP compare VSIX wizard → duyệt → commit

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ItemTemplates/CustomAction.cs` |
| Payload | `ItemTemplates/CSharp/05.CustomActionItemTemplate/Class.cs` |
| T4 | `Shared/Resources/tt/CustomAction.tt` |
| Form | `FormPlugin.xaml(.cs)` với `ItemType.CustomAction` (validate message phải là custom action) |

## 2. Template tạo ra gì

`{Class}.cs` — class xử lý custom action (kế thừa pattern plugin, message là custom action name đã đăng ký trong Dataverse).

## 3. Logic wizard hiện tại

Đã đọc đủ khi làm (2026-10-29). CustomAction.cs = Plugin.cs y hệt (FormPlugin(ItemType.CustomAction) → GetT4CodeAsync → title=="Default" ? BuildPluginContextAsync : BuildContextAsync → ProcessTemplateAsync → tokens $customaction$/$Class$/$PluginOrder$). Khác biệt nằm ở **FormPlugin**:

- `CustomActionItem()` chỉ đổi HELP text — KHÔNG ẩn combo nào (recon handoff ghi "combo execution bị ẩn" là SAI — CustomApiItem mới ẩn stage+execution; CustomAction giữ cả hai combo, stage/execution hoạt động y Plugin).
- Entity combo chèn **"None"** lên đầu (`XrmEntity { Name="None", SchemaName="None", LogicalName="none" }`) — insert SAU khi OrderBy(LogicalName).
- Message combo = `MetadataService.GetCustomActionsAsync()` (unbound, khi None) / `GetCustomActionsAsync(logicalName)` (bound) — custom operations, KHÔNG phải GetSdkMessagesAsync.
- Stage→execution lock y Plugin: PreValidation/PreOperation → Synchronous + disable; PostOperation → Synchronous nhưng combo enabled (chọn được Asynchronous).
- `UpdateClassName` y Plugin: `{Stage.Replace("Operation","")}{SchemaName}{Message}{Execution}` — với None, SchemaName="None" nên gợi ý dạng `PreNone...` (đã verify, đúng như vậy).
- Comment = `GetPluginCommentAsync(PluginLogicalName, PluginMessage)` — với None, logicalName="none"; fetch khớp `name == message` OR `name == message+entity` nên doc Input/OutputParameters vẫn đầy đủ cho custom action.

## 4. Thiết kế source of truth

- Handler `CustomActionItemTemplateHandler` (`DynamicsCrm.DevKit.Shared/Templates/Handlers/`) — copy pattern `PluginItemTemplateHandler` (I.4), khác: id `CustomAction`, message validate qua `GetCustomActionsAsync`, entity "none" đặc biệt (schema "None"/logical "none"), resource prefix `Resources.templates.item.customaction.Class.cs` (embed CÓ SẴN trong projitems từ trước, không cần thêm).
- `SuggestClassName` + `IsNoneEntity` static public (prompt chain CLI dùng).
- Register trong `TemplateHandlers.RegisterAll` + Compile entry `DynamicsCrm.DevKit.Shared.projitems` (gotcha P.1).
- CLI: `TaskNewItem` — gate keeper bổ sung required set CustomAction, carve-out offline mở cho CustomAction, `PromptCustomActionItemAsync` (entity None-first → custom action radio → stage → execution lock → class gợi ý → template combo).

## 5. Việc phải làm (CLI)

- [x] Handler + manifest (id `CustomAction`, order I.5) + embed payload (embed có sẵn, chỉ thêm Compile entry).
- [x] Prompt: message custom action (radio từ `GetCustomActionsAsync` — unbound khi None, bound theo entity) → còn lại như I.4.
- [x] Offline: bỏ validate, warning "template 'CustomAction': offline mode — entity and message were not validated against the connected instance."

## 6. CLI surface

```
devkit new-item --type CustomAction --entity account --message v4_AccountCustomAction --stage PreOperation --name PreAccountv4_AccountCustomActionSynchronous --project Dev.AllInOne.Server
devkit new-item --type CustomAction --entity none --message Archive --stage PostOperation --execution Asynchronous --name PostNoneArchiveAsynchronous --project Dev.AllInOne.Server
```

(§6 cũ viết `devkit new --kind item ...` — STALE sau refactor 2026-10-28; `devkit new` đã xoá, list = `devkit new-item list`.)

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_item` `itemType="CustomAction"`.

## 8. Test & nghiệm thu

- [x] Unit test: 20 tests trong `DynamicsCrm.DevKit.Cli.UnitTests/Templates/CustomActionItemTemplateHandlerTests.cs` (mirror PluginItemTemplateHandlerTests): manifest mirror vstemplate, catalog Ready, SuggestClassName (gồm None→"PreNone…"), IsNoneEntity casing, $PluginOrder$ rỗng khi order=1, offline render + BOM + registration `PluginType.CustomAction` + Roslyn ParseText 0 lỗi, None-entity → logical "none", order 2 suffix, PostOperation+Asynchronous → `DeleteAsyncOperation = true`, rerun skip-trừ-force, custom T4 Cli.json (--template) + --t4 + both-fail + ghost-title fallback, no-project/named-project/namespace-suffix, missing transformer, validation failures.
- [x] Build CLI 0 err/0 warn (sau MỖI edit).
- [x] Full suites: **Cli 5086** (baseline 5066 + 20) / **Tool 253** / **Vsix 571** / **Analyzers 310** / **Vsix.2019 48** — tất cả Pass.
- [x] Release: `Release.DynamicsCrm.DevKit.Cli.ps1` (Build 29.10.2026 07:13:09, SHA 2352F852…71734, Const.cs restored) + `build-release-only` full script — 4 artifacts `Published/4.44.44.44/` (07:13), CLI nupkg bake **annual 31.12.2026 23.59.59** (verify bằng extract dll), 21 date-replacement restored, `git status` sạch.
- [x] Demo live từ `TestAllInOne2` (kết nối 🟢DEVKITV4, .env còn hạn): gate keeper 1-lỗi-đủ 4 args; connected bound `--entity account --message v4_AccountCustomAction` (custom action duy nhất bound account trong org) → Created `PreAccountv4_AccountCustomActionSynchronous.cs` (TestAllInOneCli) với registration + comment block Input/OutputParameters thật từ org; rerun → Skipped; `--message new_Ghost` → lỗi rõ ràng; `--entity none --message Archive --stage PostOperation --execution Asynchronous` → Created với `"none"` + `DeleteAsyncOperation = true`.

## 9. Bàn giao

- [x] **COMPARE CHỐT 2026-10-29: 2/2 BYTE-IDENTICAL** (sạch nhất track) — aP tạo CustomAction item bằng VSIX wizard vào `TestAllInOne2/Dev.AllInOne.Server`, so `cmp` byte-for-byte với 2 file CLI ở `TestAllInOneCli/Dev.AllInOne.Server`: `PreAccountv4_AccountCustomActionSynchronous.cs` 3390 bytes md5 `7330d262…` (bound account) + `PostNoneArchiveAsynchronous.cs` 3180 bytes md5 `61ff486a…` (unbound Archive + Asynchronous) — 0 khác biệt, không cần diff -w (usings-sort mirror hoạt động, comment org trùng, BOM trùng).
- [ ] aP duyệt → lệnh `commit.md` (sweep 21, explicit paths, split feat/test/fixtures…/docs/build, c1 worktree-verify, KHÔNG push).

## Deviations & lessons

- **Recon handoff lệch 1 chỗ**: "COMBO EXECUTION BỊ ẨN" là SAI — `CustomActionItem()` chỉ đổi HELP; CustomAction giữ nguyên stage+execution combo y Plugin (CustomApi mới ẩn). Đã code theo form thật (lock Pre*→Synchronous, cho phép Asynchronous ở PostOperation) — khớp cả handoff mục (4) lẫn form.
- **Gợi ý class None**: `PreNone{message}{execution}` trông lạ nhưng ĐÚNG wizard (SchemaName của item None là "None") — test chốt hành vi này.
- **Message bound/unbound khác list**: unbound = `GetCustomActionsAsync()` (sdkmessagerequest customizationlevel=1 + endpoint api/data, lọc primaryobjecttypecode none); bound = `GetCustomActionsAsync(logicalName)` (sdkmessage categoryname CustomOperation + sdkmessagefilter theo ObjectTypeCode). Error text 2 nhánh giống nhau ("not a valid custom action for entity 'X'") với X = logical/`none`.
- **Manifest build-manifest.json stale sau build-release-only**: `Release.Cli.ps1` (chạy trước) install build 29.10 07:13 + viết manifest SHA 2352F852; full release script build lại + reinstall bằng annual-date build (SHA 3B5AD0CD — whoami xác nhận build 31.12.2026 23.59.59). Manifest không được full script ghi lại → lệch. Trạng thái tương tự I.4; installed tool == Published nupkg (annual) nên demo chạy đúng artifact release.
- **new.md stale 2 chỗ đã sửa luôn** (trong phạm vi file được chỉ định): bộ required CustomAction + offline rule + examples; dòng cuối `devkit new list --plain` → `devkit new-project list` / `devkit new-item list` (mâu thuẫn với chính header new.md).
