# I.4 — Plugin Item Template (plugin step C#)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/I.4.Plugin.md`
> **Điều kiện tiên quyết:** `0.md` (T4 abstraction bắt buộc); target: project Server (P.4).
> **Trạng thái:** ✅ **COMPARE CHỐT 2/2 BYTE-IDENTICAL** (aP tạo VSIX-side 22.57–22.58: PreAccountUpdateSynchronous 3312 bytes + PostAccountCreateAsynchronous 3343 bytes — cmp thuần bằng nhau sau khi mirror sort-usings của VS T4 host). Chờ aP gõ lệnh duyệt → `commit.md` (5 lô, KHÔNG push).
> **Ghi chú:** wizard đã đọc nguyên văn; đại diện cho cả nhóm T4 (I.4–I.9).

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ItemTemplates/Plugin.cs` |
| Payload | `ItemTemplates/CSharp/04.PluginItemTemplate/Class.cs` (chứa token `$plugin$`, `$Class$`, `$PluginOrder$`) |
| T4 | `Shared/Resources/tt/Plugin.tt` (+ `Plugin.pac.tt`); custom T4 từ `DynamicsCrm.DevKit.Cli.json` |
| T4 pipeline | `Lib/T4Helper.cs` — `GetT4CodeAsync`, `BuildPluginContextAsync`/`BuildContextAsync`, `ProcessTemplateAsync` |
| Form input | `Lib/Forms/FormPlugin.xaml(.cs)` (chọn entity, message, stage, execution, order, class, comment, custom template) |

## 2. Template tạo ra gì

1 file `{Class}.cs` trong project Server: class plugin đầy đủ `[CrmPluginRegistration]` attribute — nội dung do **T4 render** với `T4Context`, sau đó được dán vào payload qua token `$plugin$` (VS thay token khi copy).

## 3. Logic wizard hiện tại (Plugin.cs)

1. `FormPlugin(ItemType.Plugin, $rootnamespace$)` — tất cả câu hỏi plugin.
2. `t4Code = T4Helper.GetT4CodeAsync(Plugin, form.CustomTemplate)` (default → resource; custom → từ Cli.json, giải nén).
3. Context: custom title ≠ "Default" → `BuildContextAsync` (đầy đủ); ngược lại `BuildPluginContextAsync`.
4. `code = ProcessTemplateAsync(t4Code, t4Context)` (VS COM T4).
5. Token: `$plugin$` = code; `$Class$`; `$PluginOrder$` (rỗng nếu =1).

## 4. Thiết kế source of truth

- Handler `PluginItemTemplateHandler` trong Shared:
  - Dùng `T4TemplateResolver` + `T4ContextFactory` (port ở bước 0) + `ITextTransformer` (Mono impl) — **không phụ thuộc VS**.
  - Kết quả render + tên class → ghi file `{Class}.cs` trực tiếp (không cần token $plugin$ trung gian như VS — engine CLI tự thay).
- **Quan trọng:** `Plugin.pac.tt` (bản pac) — kiểm tra wizard nào dùng nó và bảo đảm resolver hỗ trợ `subType` (tham số thứ 3 của `GetT4CodeAsync`).
  - **KẾT LUẬN (đã verify):** `Plugin.pac.tt` **không wizard nào dùng** — chỉ `Vsix.UnitTests/T4/*` (diagnostic) nhắc tên. `GetDefaultCustomTemplateBodyAsync(Plugin)` chỉ trả `tt.Plugin.tt`; `subType` chỉ có DataProvider dùng. Resolver bước 0 đã hỗ trợ `subType` đủ (mirror 1-1) → không phải sửa gì.
- **ITextTransformer inject qua input** (deviation đã phê bước 0: Mono ở CLI, VSIX net48 không có package): `ItemTemplateInput.Transformer` — `TaskNew` gán `new MonoTextTransformer()`; handler Shared chỉ gọi qua contract.

## 5. Việc phải làm (CLI)

- [x] Handler + manifest (id `Plugin`, order I.4) + embed payload `Class.cs` (làm template token) — payload đã embed sẵn từ bước 0 (`Resources.templates.item.plugin.Class.cs`, projitems 430; chỉ thêm Compile entry handler vào .projitems — gotcha P.1).
- [x] Prompt hỏi–đáp mô phỏng FormPlugin: entity (search metadata) → message (danh sách message chuẩn + custom) → stage (PreValidation/PreOperation/PostOperation) → execution (Sync/Async) → order (default 1) → class name (gợi ý `{Message}{Entity}...`) → comment → custom template (Default + danh sách từ Cli.json).
  - **Đã sửa theo wizard thật:** message = `GetSdkMessagesAsync(entityLogicalName)` — **CHỈ message chuẩn** của entity (fetch loại `CustomOperation`/`CustomApi` — chúng thuộc item CustomAction/CustomApi); work file ghi "+ custom" nhưng wizard Plugin không làm vậy → làm theo wizard.
  - **Thứ tự prompt (ruling aP sau COMPARE — theo đúng thứ tự field FormPlugin):** entity → message → stage → execution → class → custom template. **KHÔNG prompt order** (form wizard không có field order) — `--order` flag-only, default 1.
  - Class gợi ý thật: `{Stage}{SchemaName}{Message}{Execution}` với `.Replace("Operation","")` — `PreOperation`→`Pre`, `PostOperation`→`Post`, `PreValidation` giữ nguyên.
  - Execution: `PreValidation`/`PreOperation` **khóa `Synchronous`** (FormPlugin disable combo); `--execution Asynchronous` + stage Pre* → lỗi. `PostOperation` mới prompt/chọn được.
  - Comment: KHÔNG prompt — tự đọc org (`GetPluginCommentAsync` = doc InputParameters/OutputParameters của message); offline → rỗng.
  - Order: KHÔNG auto-bump như wizard (wizard scan `{Class}{n}.cs` siblings) — CLI dùng `--order` tường minh, default 1 (theo đúng spec §6). File tồn tại → Skipped (user file, an toàn).
- [x] Offline mode: cho phép gõ tay toàn bộ (không validate metadata) — cảnh báo trong result. Carve-out `RequiresConnection && --offline` trong TaskNew chỉ cho `Plugin` (LateBound/JsForm/JsWebApi giữ nguyên bị chặn).
- [x] Đăng ký `[CrmPluginRegistration]` đúng format (so sánh byte với output VSIX trên cùng input — test vàng). *(test vàng unit đã chốt shape + Roslyn parse 0 lỗi; so byte 1-1 với wizard do aP chạy — xem §9)*

## 6. CLI surface

```
devkit new --kind item --type Plugin --name PreAccountUpdate --entity account --message Update \
  --stage PreOperation --execution Synchronous --order 1 --out <server dir> [--template Default] [--offline]
```

Mới trong I.4 (theo yêu cầu aP giữa session — LÔ 3 rules required/interactive):
- **`--project <tên>` REQUIRED cho TẤT CẢ item templates** — CLI surface PHẢI truyền tường minh: thiếu → lỗi và dừng ("--project: required for item templates — pass --project <name>."); interactive thiếu → prompt **gợi ý** nearest project (walk-up từ `--out`, user xác nhận — CLI không tự đoán); sai tên → lỗi. Engine `ScaffoldingEngine.ScaffoldItemAsync` giữ gate + `ScaffoldRequest.ProjectFile` + fallback nearest cho caller lập trình (MCP/tests); namespace `$rootnamespace$` đọc từ file project (RootNamespace element/tên file). `--out` trống + `--project` → output = thư mục project.
- **`--solution` REQUIRED cho TẤT CẢ project templates** (ruling aP — ĐẢO ruling "opt-in" 2026-10-26): thiếu → lỗi ("--solution: required for project templates — pass --solution <file.sln|.slnx>."); interactive thiếu → prompt gợi ý nearest `.slnx`/`.sln`.
- **BỎ flag `-i/--interactive`** (ruling aP: prompts tự trigger theo TTY khi thiếu giá trị — giống dialog VSIX; redirected/plain không bao giờ prompt, thiếu required → lỗi rõ ràng).
- **Prompt chain Plugin theo thứ tự field FormPlugin (screenshot aP): Entity → Message → Stage → Execution → Class → Template — KHÔNG prompt order** (form không có field order; `--order` flag-only default 1).
- `--t4 <đường-dẫn-.tt>`: custom plugin T4 từ file trực tiếp; **không cung cấp → default như VSIX** (resource `Plugin.tt` hoặc title từ Cli.json qua `--template`). `--t4` + `--template` ≠ Default cùng lúc → lỗi "use one custom T4 source". Custom T4 (cả 2 đường) render qua context ĐẦY ĐỦ `BuildContext` (title-based, đúng Plugin.cs).

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_item` `itemType="Plugin"` + đầy đủ tham số như flag trên.

## 8. Test & nghiệm thu

- [x] Unit test: render `Plugin.tt` bằng MonoTextTransformer với T4Context mẫu → output compile được (Roslyn `CSharpSyntaxTree.ParseText` 0 lỗi) + chứa `[CrmPluginRegistration(` đúng tham số. — 19 tests `PluginItemTemplateHandlerTests` (Cli.UnitTests): manifest mirror vstemplate, golden render (BOM + attribute + namespace + using Shared + parse 0 lỗi), order=1 không suffix / order=2 suffix file+class, Delete/PostOperation/Async (`DeleteAsyncOperation = true` + PreImage — **post-image list KHÔNG có "delete"**), Create target, rerun Skipped / `--force` Updated, custom T4 Cli.json (nén/giải nén `Helper.Compress/Decompress`) + `--t4` path + cả hai → lỗi + title lạ fallback default body (vẫn full context), thiếu/`--project` không thấy → lỗi, `--project` + subfolder → `ns.steps`, thiếu Transformer → lỗi, 6 validation lỗi, token `$PluginOrder$` rỗng khi order=1.
- [x] Test custom T4 từ Cli.json (nén/giải nén `Helper.Compress/Decompress`).
- [x] Test `$PluginOrder$` rỗng khi order=1.
- [x] Build CLI 0/0; test pass. **Full suites: Cli 5066** (+24: 19 Plugin + 3 engine gate + 2 usings-sort) **/ Tool 253 / Vsix 571 / Analyzers 310 / Vsix.2019 48 — tất cả Pass.**
- [x] Release refresh installed devkit (`Release.DynamicsCrm.DevKit.Cli.ps1` x4 — cuối: Build 28.10.2026 23:34:18); **build-release-only xong sau đó** (annual `31.12.2026 23.59.59`, 4 artifacts `Published/4.44.44.44/` fresh 23.36–23.37, 21 date-replacement restored, sweep nguồn sạch).
- [x] Live demo lô required/interactive: item thiếu `--project` → lỗi ✓; project thiếu `--solution` → lỗi ✓; lệnh đủ args → Skipped ✓; help hiện REQUIRED + không còn `-i` ✓.

## 9. Bàn giao

- [ ] Báo cáo + user duyệt → qua `I.5.CustomAction.md`.

### State chờ aP (2026-10-28)

- Branch `vsix2cliandmcp_items`, tree KHÔNG commit: 13 file sửa (NewCommandArgs, TaskNew, MonoTextTransformer, projitems, TemplateHandlers, TemplateModels, ScaffoldingEngine, T4ContextFactory, T4TemplateResolver, MonoTextTransformerTests, ScaffoldingEngineTests, new.md, I.4.md) + 2 file mới (PluginItemTemplateHandler.cs, PluginItemTemplateHandlerTests.cs) + 5 Published artifacts (release script).
- **COMPARE CHỐT (aP tạo VSIX-side 22.57–22.58, CLI re-render 23.17):**
  - `PreAccountUpdateSynchronous.cs` — **BYTE-IDENTICAL (cmp thuần, 3312 bytes)**.
  - `PostAccountCreateAsynchronous.cs` — **BYTE-IDENTICAL (cmp thuần, 3343 bytes)**.
  - Lệch family csproj I.1–I.3 KHÔNG xảy ra: Server csproj SDK-style, VS không đụng (git status TestAllInOne2 chỉ 2 untracked .cs).
  - Fix mang lại: **VS T4 host sort block `using` đầu file theo tên namespace alphabetically, prefix-first** — mirror ở `MonoTextTransformer.SortLeadingUsings` (regex block-leading, sort theo group tên, OrdinalIgnoreCase). 2 vòng sửa: (1) sort raw-line sai vì `;` (0x3B) > `.` (0x2E) → `Microsoft.Xrm.Sdk.Extensions` nhảy trước `Microsoft.Xrm.Sdk`; (2) sort theo TÊN namespace → khớp.
- Live checks: connected Created ✓, rerun Skipped ✓, `--project` ✓, gate I.1/I.3 thiếu project lỗi ✓, `--project` sai tên lỗi ✓, validation async-Pre*/message-Bogus lỗi ✓, offline Created + WARNING ✓.

### Lệch/bài học ghi lại

1. `Plugin.pac.tt` chỉ là biến thể test/diagnostic — không wizard nào dùng (mục §4).
2. Work file ghi message "chuẩn + custom" — wizard thật chỉ message chuẩn của entity → làm theo wizard (§5).
3. Wizard auto-bump order (scan siblings) — CLI theo spec §5/§6: `--order` tường minh default 1, không auto; rerun Skipped là lớp bảo vệ.
4. `ItemTemplateInput.Comment`: `null` = legacy fallback (Name), `""` = comment rỗng CÓ Ý (offline) — sửa `T4ContextFactory.BuildComment` phân biệt null/rỗng.
5. Gotcha `GetRelativePath` khi `--out` == project root: trả về path tuyệt đối làm nổ namespace (`Dev.Contoso.Server.C:.Users…`) — đã fix trả rỗng khi cùng thư mục, null khi không nằm dưới project (không thêm suffix).
6. Xoá nhầm không — `projitems` cần Compile entry cho handler mới (gotcha P.1 lặp lại lần 3).
