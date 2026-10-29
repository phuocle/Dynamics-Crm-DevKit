# I.7 — Workflow Item Template (custom workflow activity)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/I.7.Workflow.md`
> **Điều kiện tiên quyết:** `0.md`, `I.4.Plugin.md` (pipeline T4).
> **Trạng thái:** ✅ Hoàn thành 2026-10-29 — handler + tests + release + demo xong, **CHỜ aP compare VSIX wizard rồi ra lệnh commit.md** (chưa commit).

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ItemTemplates/Workflow.cs` |
| Payload | `ItemTemplates/CSharp/07.WorkflowItemTemplate/Class.cs` |
| T4 | `Shared/Resources/tt/Workflow.tt` |
| Form | `FormPlugin.xaml.cs` `WorkflowItem()` (~line 200) |

## 2. Template tạo ra gì

`{Class}.cs` — `CodeActivity` (custom workflow activity) với `[CrmPluginRegistration]` param đầu `ClassWithOrder` trần, param 4 namespace đầy đủ, `PluginType = PluginType.Workflow`. File kèm **comment mẫu** hướng dẫn thêm `InArgument`/`OutArgument` (input/output parameters — wizard KHÔNG prompt, tự viết tay).

## 3. Logic wizard (đã verify 2026-10-29)

- `FormPlugin(ItemType.Workflow)` → `WorkflowItem()`: ẨN HẾT 4 combo (execution/stage/entity/message) — form còn **class name** (+ template combo + connection). IsValid chỉ bắt class non-empty.
- **KHÔNG đọc gì từ org**: `FormPlugin.Connection_Connected` không có nhánh Workflow (không fill combo nào), `PluginComment` = `GetPluginCommentAsync("", "")` → guard trả `""` ngay không gọi org.
- Pipeline: `GetT4CodeAsync(ItemType.Workflow, title)` → title `Default` → **`T4Helper.BuildClassContextAsync(form)`** (context class-only: PluginNameSpace/PluginOrder/Class/PluginSharedNameSpace — KHÔNG PluginComment); custom title → `BuildContextAsync(form)` (đầy đủ); → `ProcessTemplateAsync`.
- Token: `$workflow$` (toàn bộ nội dung = T4 render), `$Class$`, `$PluginOrder$` (rỗng khi order 1 — payload chỉ dùng `$workflow$` nhưng wizard vẫn add đủ 3).
- `PluginOrder` tự derive từ project scan (`VsixHelper.PluginOrderAsync` — đếm `.cs` cùng base name trong folder đang chọn); CLI: `--order` (default 1) như I.4–I.6.

## 4. Thiết kế source of truth

- Handler `WorkflowItemTemplateHandler` (`Shared/Templates/Handlers/`, registered trong `TemplateHandlers.RegisterAll` sau CustomApi; Compile entry line 313 `.projitems` — gotcha P.1).
- Default → `T4ContextFactory.BuildClassContext` (đã có sẵn từ before — trước đây note cho UiTest); custom title/`--t4` → `BuildContext` (quy ước CLI như I.5/I.6).
- `input.Comment = string.Empty` trước build context (mirror `GetPluginCommentAsync("","")` = `""` — custom template tham chiếu `Context.PluginComment` render rỗng, KHÔNG fallback Name).
- Payload embed `Resources.templates.item.workflow.Class.cs` + `tt.Workflow.tt` CÓ SẴN từ bước 0 (projitems line 204/436); catalog descriptor Workflow order 7 có sẵn.

## 5. Việc phải làm (CLI) — ✅ xong

- [x] Handler + manifest (id `Workflow`, file duy nhất `$Class$$PluginOrder$.cs`, ReplaceParameters=true) + embed payload (đã có từ bước 0).
- [x] Prompt: **class name (KHÔNG có input/output parameters — work file cũ ghi sai, wizard không hỏi, tt chỉ sinh comment mẫu) → custom template combo**. KHÔNG gợi ý class (form không có suggestion). KHÔNG prompt order — `--order`.
- [x] Gate keeper: nhánh Workflow chỉ bắt `--name` (`--project` chung mọi item); loại Workflow khỏi generic entity prompt (dialog ẩn entity combo).

## 6. CLI surface (cập nhật 2026-10-29 — cú pháp `devkit new` cũ đã xoá)

```
devkit new-item --type Workflow --name MyWorkflow --project <project> [--out <dir>] [--order N] [--template <title> | --t4 <path>] [--force]
```

Bắt buộc: `--name` (class) + `--project` (mọi item). **KHÔNG có `--offline`** — mọi item luôn connect (ruling aP 2026-10-29); Workflow không đọc gì từ org nên connected/offline render giống hệt nhau, không có offline warning.

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_item` `itemType="Workflow"`.

## 8. Test & nghiệm thu — ✅ xong

- [x] Unit test: `WorkflowItemTemplateHandlerTests` (17 tests, mirror CustomApi) — render `Workflow.tt` parse Roslyn 0 lỗi; shape registration; BOM; order suffix; rerun skip/force; custom T4 Cli.json (comment render rỗng — parity) + `--t4` + ghost-title fallback; no-project/named-project; transformer; validation; entity/message/stage/execution không lọt.
- [x] Build CLI 0/0; full suites: **Cli 5124 / Tool 253 / Vsix 571 / Analyzers 310 / Vsix.2019 48 — ALL PASS** (baseline mới sau I.7 = 5124; sau I.6 là 5107).

## 9. Bàn giao

- [x] Release `build-release-only`: 4 artifacts `Published/4.44.44.44/` fresh (23.58), build date annual `31.12.2026 23.59.59`, Const.cs placeholder restored, 21 file build-date restore, installed dll SHA == nupkg dll SHA (`aac0c19b…`).
- [x] Demo live từ `TestAllInOne2` (file CLI: `TestAllInOneCli/Dev.AllInOne.Server/v4_WorkflowActivity.cs`): list có Workflow; gate keeper connect-trước rồi MỘT lỗi `--name <class-name>, --project <project-name>`; Created → rerun Skipped → `--force` Updated; `--type Ghost` lỗi unknown; `--template`+`--t4` lỗi use-one-source; từ folder không .env → `--conn or --auth: required (or a project .env) — adding an item always connects to Dataverse.`; 6 file demo cũ GIỮ NGUYÊN.
- [x] Work file + `Docs/Cli/new.md` (gate keeper/hiện trạng/examples + date 2026-10-29) + memory cập nhật.
- [x] **aP DUYỆT 2026-10-30**: aP tạo `v4_WorkflowActivity.cs` bằng VSIX wizard vào TestAllInOne2 (05:15) → cmp byte trực diện với file CLI TestAllInOneCli **1/1 BYTE-IDENTICAL** (2373 bytes, md5 `dc84c4a4…` cả 2 bên) — sạch nhất track, không cần fix; không lệch csproj (SDK-style, family I.4–I.6).

## 10. Deviations & lessons

- Work file gốc §5 ghi sai "prompt input/output parameters (câu hỏi lặp)" — wizard KHÔNG hỏi (form ẩn hết combo, tt chỉ sinh comment mẫu InArgument/OutArgument). Đã sửa đúng wizard.
- §6 gốc ghi cú pháp `devkit new --kind item --type Workflow ... [--offline]` — STALE (refactor 2026-10-28 + ruling bỏ --offline 2026-10-29). Đã đổi thành `devkit new-item`.
- Workflow KHÔNG cần org call nào trong handler (khác Plugin/CustomAction/CustomApi đều validate entity/message) — nên không có offline warning; nhánh `ServiceClient == null` của engine (tests/MCP) và connected cho output Y HỆT nhau.
- CS0103 quên Compile entry `.projitems` cho handler mới (gotcha P.1 lặp lại lần 2) — đã thêm line 313.
- Engine gate chặn trước handler khi thiếu name VÀ entity (`--name (or --entity): required`) — test cover cả 2 tầng gate.
