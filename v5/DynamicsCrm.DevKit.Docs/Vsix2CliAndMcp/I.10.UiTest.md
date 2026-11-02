# I.10 — UiTest Item Template (UI automation test class)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/I.10.UiTest.md`
> **Điều kiện tiên quyết:** `0.md`, `I.4.Plugin.md` (pipeline T4).
> **Trạng thái:** ✅ Hoàn thành + **COMPARE CHỐT BYTE-IDENTICAL** (aP duyệt 2026-10-30) — commit theo lệnh aP.

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ItemTemplates/UiTest.cs` |
| Payload | `ItemTemplates/CSharp/10.UiTestItemTemplate/Class.cs` |
| T4 | `Shared/Resources/tt/UiTest.tt` |
| Context | `T4Helper.BuildClassContextAsync` (chỉ cần namespace/class/shared) |

## 2. Template tạo ra gì

`{Class}{Order}Test.cs` — Selenium test class (login app, thao tác UI theo `App.cs`/`TestSettings` của project UiTest P.10). *(Sửa 2026-10-30: tên file thật là `$Class$$PluginOrder$Test.cs` theo vstemplate — đuôi `Test` là của vstemplate, KHÔNG phải `UiTest` như ghi đầu việc; PluginOrder=1 → suffix rỗng.)*

## 3. Logic wizard hiện tại (đã verify 2026-10-30)

- `UiTest.cs` RunStarted = bản sao cấu trúc của `Test.cs`/`Plugin.cs`: `FormPlugin(ItemType.UiTest, $rootnamespace$)` (KHÔNG có tham số thứ 3 TestProject), title Default → `BuildClassContextAsync`, custom title → `BuildContextAsync`; token `$uitest$` + `$Class$` + `$PluginOrder$` (1 → rỗng).
- `FormPlugin.UiTestItem()`: ẩn hết 4 combo org (entity/message/stage/execution), class textbox hiện, `LabelTestClassPreview` hiện (`{name}Test`), **TemplatePanel HIỆN** → custom T4 được hỗ trợ (catalog `SupportsCustomT4=true` đúng). KHÔNG combo test-plugin (chỉ Test có), KHÔNG auto-fill class (UpdateClassName chỉ chạy cho Plugin/CustomAction/CustomApi).
- `IsTestClassItem` bao gồm **UiTest** → `GetClassBaseName` strip đuôi `Test` của tên gõ vào (giống Test item).
- `BuildClassContextAsync` = namespace + order + class + shared-ns, **KHÔNG đọc org**. Comment custom-title = `GetPluginCommentAsync("", "")` = rỗng (entity combo collapsed → `PluginLogicalName` rỗng).
- `PluginOrder` = `VsixHelper.PluginOrderAsync` quét file `{Class}.cs`/`{Class}{N}.cs` trong selection → N+1 (default 1) — CLI mirror bằng `--order` (default 1, không prompt).
- **BOM output = KHÔNG** (chốt bằng wizard FRESH: aP cài VSIX mới rồi tạo `TestAllInOne2/Dev.AllInOne.UiTest/LoginTest.cs` 2026-10-30 07:40 — bắt đầu thẳng `using`, 1314 bytes). File wizard cũ ở `TestAllInOne` original (1317 bytes, CÓ BOM) là ground truth CŨ từ VSIX version cũ — KHÔNG dùng làm chuẩn. Giống Test (I.9); Plugin/Workflow vẫn giữ BOM payload.
- `UiTest.tt` = **T4 thuần text**: 2 expression holes (`Context.PluginNameSpace`, `Context.ClassWithOrder`), KHÔNG block construct → không cần inject `Write("\r\n")` nào (khác Test.tt guard block).
- Wizard output sắp usings theo ns prefix-first (VS T4 host) — `MonoTextTransformer` đã mirror sẵn (bài học I.4).

## 4. Thiết kế source of truth

- Handler `UiTestItemTemplateHandler` — render `UiTest.tt` (mirror Workflow handler: class-only context, custom title → context đầy đủ, `Comment = string.Empty`) + **ghi KHÔNG BOM** (mirror Test handler — byte-faithful wizard OUTPUT, không phải payload marker) + strip đuôi `Test` (mirror Test handler, guard length > 4).

## 5. Việc phải làm (CLI)

- [x] Handler + manifest (id `UiTest`, order I.10) + embed payload (embed **đã có sẵn từ P.10** — projitems dòng `Resources.templates.item.uitest.Class.cs`; chỉ thêm Compile entry handler).
- [x] Prompt: class name → namespace (tự suy từ project đích); custom T4 combo khi có titles.

## 6. CLI surface

```
devkit new-item --type UiTest --name Login --project Contoso.UiTest --out Contoso.UiTest
```

Gate keeper: `--name` (dialog ẩn hết 4 combo org, class là input duy nhất). `RequiresConnection=false` nhưng connect vẫn bắt buộc ở mức lệnh (ruling 2026-10-29); guard `!isUiTest` chặn generic prompt `Name:` để chain sở hữu prompt "Class name" riêng (như Workflow).

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_item` `itemType="UiTest"`.

## 8. Test & nghiệm thu

- [x] Unit test: `UiTestItemTemplateHandlerTests` 16 tests (mirror I.9) — render compile được (Roslyn 0 lỗi), tên file `{Class}{Order}Test.cs` đúng, **KHÔNG BOM** (bytes `u`,`s`), strip Test, order 2, custom T4 (Cli.json + --t4 + both-fails), missing name (2 tầng gate), no-project, namespace suffix subfolder, rerun skip/force, missing transformer, order 0.
- [x] Build CLI 0/0; test pass.
- [x] Full 5 suites (sau BOM flip): **Cli 5183** (baseline 5167 + 16) **/ Tool 253 / Vsix 571 / Analyzers 310 / Vsix.2019 48** — all Pass (MSB3277 có sẵn).
- [x] build-release-only EXIT 0 (chạy 2 lần — lần 2 sau BOM flip, 07:47): 4 artifacts `Published/4.44.44.44/`, `devkit --version` = `4.44.44.44 Build: 31.12.2026 23.59.59`, installed dll SHA == nupkg dll SHA, Const.cs placeholder restore, git tree sạch leftover.
- [x] **COMPARE CHỐT BYTE-IDENTICAL**: aP cài VSIX mới + tạo `LoginTest.cs` bằng wizard vào `TestAllInOne2/Dev.AllInOne.UiTest` → CLI (installed release `devkit`) `--type UiTest --name Login --project Dev.AllInOne.UiTest --out ../TestAllInOneCli/Dev.AllInOne.UiTest` → **cmp + md5 `d8a770b8a8bf5856941f8b624d4b2bc8` CẢ HAI BÊN** (wizard fresh vs CLI, KHÔNG BOM). Gate keeper verify: thiếu `--name` non-TTY → `required arguments missing: --name <class-name>.` (connect trước rồi MỘT lỗi).

## 9. Bàn giao

- [x] aP compare trực diện → **BYTE-IDENTICAL** → aP lệnh commit.md hết các file + handoff I.11.
- [ ] Qua `I.11.ResourceString.md`.

### Lessons I.10

- Tên file output nằm ở **vstemplate** (`TargetFileName`) — đọc vstemplate trước khi tin mô tả work file (§2 sai `{Class}UiTest.cs`).
- **BOM: chỉ tin wizard FRESH từ VSIX version hiện tại** — file wizard trong workspace original (TestAllInOne) sinh từ VSIX version cũ, còn sót BOM; phiên bản wizard hiện tại bỏ BOM cho CẢ 2 item test-class (Test + UiTest). Ground truth = file aP vừa tạo bằng VSIX cài mới.
- `IsTestClassItem` (strip đuôi Test) cover cả UiTest — đọc `GetClassBaseName`/`IsTestClassItem` thay vì đoán theo wizard item class.
- RequiresConnection=false → generic prompt `Name:` (TaskNewItem) sẽ chặn prompt "Class name" của chain → cần `!isUiTest` guard (Workflow không dính vì RequiresConnection=true).
- Payload + tt + catalog row + resolver mapping **đã có sẵn từ P.10** — I.10 chỉ thêm handler + register + Compile entry + TaskNewItem + tests.
- Bài học quy trình: demo pre-verify bằng file wizard CŨ có thể chốt nhầm chiều BOM — compare chốt chỉ đúng khi aP tạo item bằng VSIX mới cài (như mọi unit trước).
