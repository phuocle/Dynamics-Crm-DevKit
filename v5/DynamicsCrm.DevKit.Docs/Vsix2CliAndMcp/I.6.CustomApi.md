# I.6 — CustomApi Item Template

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/I.6.CustomApi.md`
> **Điều kiện tiên quyết:** `0.md`, `I.5.CustomAction.md` (đối xứng).
> **Trạng thái:** ✅ Đã implement + test + release + demo live + **COMPARE CHỐT 2/2 BYTE-IDENTICAL** + COMMITTED (2026-10-29)

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ItemTemplates/CustomApi.cs` |
| Payload | `ItemTemplates/CSharp/06.CustomApiItemTemplate/Class.cs` |
| T4 | `Shared/Resources/tt/CustomApi.tt` |
| Form | `FormPlugin.xaml(.cs)` với `ItemType.CustomApi` (validate message phải là custom api đã đăng ký) |

## 2. Template tạo ra gì

`{Class}.cs` — class xử lý Custom API (message = tên Custom API đã đăng ký; render bằng `CustomApi.tt`).

## 3. Logic wizard hiện tại

Đã đọc đủ khi làm (2026-10-29). `CustomApi.cs` = `CustomAction.cs` y hệt (FormPlugin(ItemType.CustomApi) → GetT4CodeAsync → title=="Default" ? BuildPluginContextAsync : BuildContextAsync → ProcessTemplateAsync → tokens `$customapi$`/`$Class$`/`$PluginOrder$`). Khác biệt nằm ở **FormPlugin**:

- `CustomApiItem()` **ẨN cả 4 control** LabelStage/ComboBoxStage/LabelExecution/ComboBoxExecution (chỉ đổi HELP text) — CustomApi KHÔNG có stage/execution (khác Plugin và CustomAction).
- Entity combo chèn **"None"** lên đầu (cùng nhánh `CustomAction || CustomApi` trong `Connection_Connected` — `XrmEntity { Name="None", SchemaName="None", LogicalName="none" }`, insert SAU khi OrderBy(LogicalName)).
- Message combo = `MetadataService.GetCustomApisAsync(selectedEntity.LogicalName)` — **MỘT call cho cả 2 nhánh** (bảng `customapi` statecode=0 theo `boundentitylogicalname`; "none" → điều kiện `boundentitylogicalname null`); list lấy `sdkmessageid.Name` OrderBy(Name). KHÔNG phải `GetCustomActionsAsync`.
- `UpdateClassName()` nhánh CustomApi: `TextboxClass.Text = $"{PluginMessage}Request"` — gợi ý class = **{message}Request**, KHÔNG nhúng stage/schema (FormPlugin.xaml.cs:664).
- `ComboBoxStage_SelectionChanged` vẫn có nhánh CustomApi (lock Pre*) nhưng combo ẩn nên vô hình.
- `IsValid()`: entity/message/class bắt buộc; stage/execution chỉ validate khi Visible (CustomApi → bỏ qua).
- Comment = `GetPluginCommentAsync(PluginLogicalName, PluginMessage)` — với None logical="none" (fetch khớp `name == message` OR `name == message + entity` → doc vẫn đầy đủ cho custom api unbound).
- CustomApi.tt dùng Context: `PluginSharedNameSpace`, `PluginNameSpace`, `ClassWithOrder` (registration param đầu = tên class trần — khác Plugin.tt dùng FullClassName), `PluginMessage`, `EntityLogicalName` (computed từ `PluginLogicalName` = input.Entity lowercase; điều kiện `!="none"` quyết định attribute `EntityLogicalName` + guard `PrimaryEntityName`), `PluginComment`. KHÔNG dùng stage/execution/order nào ngoài ClassWithOrder.

## 4. Thiết kế source of truth

- Handler `CustomApiItemTemplateHandler` (`DynamicsCrm.DevKit.Shared/Templates/Handlers/`) — copy pattern `CustomActionItemTemplateHandler` (I.5, live-verified), khác: id `CustomApi`, message validate qua `GetCustomApisAsync(logicalName)` (MỘT call, "none" xử lý trong query), class gợi ý `SuggestClassName(message)` = `{message}Request`, KHÔNG stage/execution validation, resource prefix `Resources.templates.item.customapi.Class.cs` (embed CÓ SẴN trong projitems từ trước, chỉ thêm Compile entry handler).
- Register trong `TemplateHandlers.RegisterAll` + Compile entry `DynamicsCrm.DevKit.Shared.projitems` (gotcha P.1).
- CLI: `TaskNewItem` — gate keeper bổ sung required set CustomApi (`--entity <schema-name|none>, --message <custom-api>, --name <class-name>` — KHÔNG --stage/--execution), carve-out offline mở cho CustomApi, generic connected entity prompt exclude thêm CustomApi, `PromptCustomApiItemAsync` (entity None-first → custom api → class gợi ý {message}Request → template combo; KHÔNG prompt stage/execution).

## 5. Việc phải làm (CLI)

- [x] Handler + manifest (id `CustomApi`, order I.6) + embed payload (embed có sẵn, chỉ thêm Compile entry).
- [x] Prompt: custom api từ metadata (`GetCustomApisAsync(logicalName)` — "none" → query `boundentitylogicalname null`) → còn lại như I.5 trừ stage/execution.
- [x] Offline: **ĐÃ BỎ theo ruling aP 2026-10-29** (trong session I.6, sau demo) — flag `--offline` xoá khỏi `NewItemCommandArgs` hoàn toàn, `NewItemCommand` **LUÔN connect trước khi mở task** (VSIX-parity: wizard connect trước khi mở dialog item; `new-item list` là ngoại lệ); engine giữ Offline cho tests/MCP (handler giữ nhánh `ServiceClient == null` cho engine path). Lịch sử: implement đầu session theo carve-out mở (khuyến nghị handoff), aP chốt SIẾT cuối session.

## 6. CLI surface

```
devkit new-item --type CustomApi --entity account --message v4_AccountCustomApi --name v4_AccountCustomApiRequest --project Dev.AllInOne.Server
devkit new-item --type CustomApi --entity none --message v4_CustomApi --name v4_CustomApiRequest --project Dev.AllInOne.Server
```

(§6 cũ viết `devkit new --kind item ...` — STALE sau refactor 2026-10-28; `devkit new` đã xoá, list = `devkit new-item list`.)

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_item` `itemType="CustomApi"`.

## 8. Test & nghiệm thu

- [x] Unit test: 20 tests trong `DynamicsCrm.DevKit.Cli.UnitTests/Templates/CustomApiItemTemplateHandlerTests.cs` (mirror CustomActionItemTemplateHandlerTests) **+ 1 test `TransformAsync_CollapsesWhitespaceOnlyLinesLikeTheVsHost` trong `MonoTextTransformerTests`** (lech compare phát hiện — xem Deviations): manifest mirror vstemplate, catalog Ready, SuggestClassName ({message}Request), IsNoneEntity casing, $PluginOrder$ rỗng khi order=1, offline render + BOM + registration `PluginType.CustomApi` (bound có `EntityLogicalName = "account"`, none KHÔNG có attribute + KHÔNG guard) + Roslyn ParseText 0 lỗi, stage/execution đưa vào bị bỏ qua (wizard ẩn combo), order 2 suffix, rerun skip-trừ-force, custom T4 Cli.json (--template) + --t4 + both-fail + ghost-title fallback, no-project/named-project/namespace-suffix (registration param = tên class trần), missing transformer, validation failures.
- [x] Build CLI 0 err/0 warn (sau MỖI edit).
- [x] Full suites: **Cli 5107** (baseline 5086 + 20 CustomApi + 1 transformer) / **Tool 253** / **Vsix 571** / **Analyzers 310** / **Vsix.2019 48** — tất cả Pass (Cli chạy lại Pass sau ruling offline + whitespace fix).
- [x] Release: `Release.DynamicsCrm.DevKit.Cli.ps1` (cuối: Build 29.10.2026 23:22:22, SHA 7B793F56…AC414D, Const.cs restored) + `build-release-only` full script — 4 artifacts `Published/4.44.44.44/` (23:23), CLI nupkg bake **annual 31.12.2026 23.59.59** (`devkit --version` xác nhận), installed dll SHA == Published nupkg dll SHA `383C15E0…4316`, 21 date-replacement restored, `git status` sạch (chỉ source I.6 + Published refresh).
- [x] Demo live từ `TestAllInOne2` (kết nối 🟢DEVKITV4, .env còn hạn): `devkit tool call get_custom_apis` → 3 custom apis thật (`all_DevKitTestFunction` Global/function, `v4_AccountCustomApi` bound account, `v4_CustomApi` Global); gate keeper 1-lỗi-đủ (`--entity <schema-name|none>, --message <custom-api>, --name <class-name>, --project <project-name>`); connected bound `--entity account --message v4_AccountCustomApi` → Created `v4_AccountCustomApiRequest.cs` (registration `PluginType.CustomApi, EntityLogicalName = "account"` + guard PrimaryEntityName + comment block Input/OutputParameters thật từ org: Target/v4_account_request_input/v4_account_request_f → v4_account_response_output); rerun → Skipped; `--message new_Ghost` → lỗi rõ ràng; `--entity none --message v4_CustomApi` → Created với registration bare `PluginType.CustomApi` (không EntityLogicalName, không guard) + comment doc đầy đủ. **Verify ruling offline (cuối session)**: rerun connected → Skipped; `--offline` truyền vào → flag bị Spectre bỏ qua âm thầm, vẫn connect + Skipped; từ folder KHÔNG `.env`/args → lỗi `--conn or --auth: required (or a project .env) — adding an item always connects to Dataverse.`; `devkit new-item list` vẫn chạy không cần connection. 2 file demo I.5 giữ nguyên (md5 khớp `7330d262…`/`61ff486a…`).

## 9. Bàn giao

- [x] **COMPARE CHỐT 2026-10-29: 2/2 BYTE-IDENTICAL** (aP tạo 2 CustomApi item bằng VSIX wizard vào `TestAllInOne2/Dev.AllInOne.Server` 23:03–23:04, so `cmp` byte-for-byte với 2 file CLI ở `TestAllInOneCli/Dev.AllInOne.Server`): `v4_AccountCustomApiRequest.cs` md5 `1a6dd3d2…` (bound — byte-identical NGAY lần đầu) + `v4_CustomApiRequest.cs` md5 `31fb6f11…` (unbound — lệch 1 chỗ lần đầu: dòng whitespace-only của guard unbound, fix `MonoTextTransformer.CollapseWhitespaceOnlyLines` → re-render → byte-identical). Không lệch csproj (Server csproj SDK-style, VS không đụng — family I.1–I.3 không xảy ra).
- [x] aP duyệt → lệnh `commit.md` (sweep 21, explicit paths, split feat/test/fixtures/docs/build, c1 worktree-verify, KHÔNG push).

## Deviations & lessons

- **BÀI HỌC LỚN I.6 — VS T4 host REMOVE hẳn dòng block-only khi block không emit gì; Mono orphan-indent**: dòng tt `            <#if(...){#>guard<#}#>` (indent + block, không text nào ngoài block) khi điều kiện false — **VS**: dòng biến mất HOÀN TOÀN (indent + newline đều bỏ), dòng tt rỗng NGAY SAU nó giữ nguyên `\r\n`; **Mono**: emit orphan 12 spaces (newline của dòng block bị swallow) rồi dính với newline của dòng rỗng kế tiếp thành dòng `            \r\n`. Fix: `MonoTextTransformer.CollapseWhitespaceOnlyLines` (post-render: dòng whitespace-only → dòng rỗng) — re-render unbound → byte-identical. Bound không dính (guard emit text, cả 2 host đều swallow dòng rỗng kế block — byte-identical sẵn). Test mirror trong `MonoTextTransformerTests` với cấu trúc tt thật (có dòng rỗng sau dòng guard). Cùng họ bài học usings-sort I.4: cứ compare Wizard-vs-CLI là lộ khác biệt Mono/VS.
- **Offline carve-out — RULING aP 2026-10-29 (chốt trong session I.6)**: implement đầu session mở carve-out cho CustomApi theo khuyến nghị handoff (work file gốc không có dòng offline); aP chốt **SIẾT — bỏ `--offline` hoàn toàn khỏi `devkit new-item`** ("trên vsix, bất kể add item gì cũng cần connect đến dataverse"): flag xoá khỏi `NewItemCommandArgs`, `ItemConnectionRequired` xoá — `NewItemCommand.IsValidAsync` luôn connect (VSIX-parity connect-first), args table bớt row `--offline`, `TaskNewItem` bỏ carve-out + bỏ gán `ItemTemplateInput.Offline`. Engine/handler giữ nhánh offline cho tests/MCP (20 handler tests vẫn Offline=true qua engine — Pass nguyên). Truyền `--offline` sau khi bỏ flag bị Spectre drop âm thầm rồi vẫn connect (gotcha Relaxed parsing); folder không `.env`/args → lỗi connection rõ ràng. new.md cập nhật đồng bộ (options table, 5 bullets, Connection section).
- **Memory file mất + dựng lại (2026-10-29)**: `perl -pi` cross-device (C: target vs E: CWD) xoá `vsix2cliandmcp-templates.md` — đã dựng lại từ description verbatim + 4 section verbatim trong context (I.3/I.4×2/I.5) + MEMORY.md index; chi tiết P.1..P.13/I.1/I.2 canonical nằm trong repo work files. Bài học tooling ghi trong memory + index.
- **Registration param đầu = tên class trần** (`ClassWithOrder`) — khác Plugin.tt dùng `FullClassName`; test `NamedProject` lần đầu expect sai (namespaced name) → đã sửa theo template thật.
- **`GetCustomApisAsync` một call duy nhất** — khác CustomAction (2 method unbound/bound): form truyền thẳng `selectedEntity.LogicalName` ("none" → query điều kiện null), handler mirror đúng; error text 1 mẫu "not a valid custom api for entity 'X'" với X = logical/`none`.
- **Manifest build-manifest.json stale sau build-release-only** (tiền lệ I.4/I.5): installed dll SHA == Published nupkg dll SHA là truth (cuối session: `D1797ADA…`).
- **Demo org có custom api bound account sẵn** (`v4_AccountCustomApi`) — không cần fallback unbound-only như dự phòng handoff; 2 demo cover cả 2 nhánh render (bound/unbound). Phát hiện thêm: `.env` ở REPO ROOT có client secret EXPIRED (AADSTS7000222) — khác `.env` TestAllInOne2 (còn hạn); chưa đụng, báo aP.
