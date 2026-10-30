# I.9 — Test Item Template (unit test cho plugin/workflow)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/I.9.Test.md`
> **Điều kiện tiên quyết:** `0.md`, `I.4.Plugin.md` (pipeline T4).
> **Trạng thái:** ☑ ĐÓNG+COMMITTED 2026-10-30 — **aP compare: `PreAccountUpdateSynchronousTest.cs` BYTE-IDENTICAL** (cmp thuần, vòng fix 2 theo feedback aP) — 6 commits split feat/DevKitJson/test/fixtures/docs/build bắt đầu `a69029210`, tree CLEAN, đã push. → `I.10.UiTest.md`.

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ItemTemplates/Test.cs` |
| Payload | `ItemTemplates/CSharp/09.TestItemTemplate/Class.cs` |
| T4 | `Shared/Resources/tt/Test.tt` |
| Context | `T4Helper.BuildTestContextAsync` (gồm `TestTargetFullClassName`) |
| Discovery | `DynamicsCrm.DevKit.Vsix/Lib/PluginTestDiscovery.cs` |

## 2. Template tạo ra gì

`{Class}Test.cs` — MSTest class test cho 1 class plugin/workflow đích (FakeXrmEasy), `[TestClass]`, tham chiếu class đích qua `using TargetPlugin = …` khi guard. 2 nhánh render của `Test.tt`: **guard** (candidate khớp shape plugin mặc định của DevKit — `using TargetPlugin` + 4 hằng `PLUGIN_*` + `AssertInvalidPluginContext`) và **skeleton trơn** (`Assert.IsTrue(true)` + comment `YourPlugin`).

## 3. Logic wizard hiện tại (đã verify khi làm)

1. `Wizard/ItemTemplates/Test.cs` — `RunStarted` mở **FormPlugin(ItemType.Test)** (form chung, không form riêng); combo **test-plugin** + textbox class (auto-fill tên candidate, preview `{Class}Test`) + TemplatePanel HIỆN (custom T4 hỗ trợ). Entity/message/stage/execution combos ẨN — giá trị đi theo candidate. OK → title `Default` render qua `BuildTestContextAsync(form)`, custom title qua `BuildContextAsync(form)`.
2. Combo fill từ `PluginTestDiscovery.GetTestCandidatesAsync(TestProject)` — **regex thuần** (không Roslyn): quét `*.cs` các folder `ProjectReference` của project Test (loại bin/obj/.vs/packages), class non-abstract inherit (bắc cầu) `IPlugin`/`CodeActivity` có `[CrmPluginRegistration]`, **loại class đã có `{ClassName}Test` trong project Test** (combo filter — `HasConventionTestClass`), sắp theo FullClassName.
3. Candidate: message = string arg 0, entity = string arg 1, stage = `StageEnum.X`, execution = `ExecutionModeEnum.Y`; `SupportsGuardTest` = đủ 4 + shape plugin mặc định (ctor public + `Execute(IServiceProvider)` + 4 chuỗi guard "…does not equals" của `Plugin.tt` sau strip-comment). Chọn candidate → **textbox class tự fill** (`ApplySelectedTestPluginToForm` → `SuggestedTestClassBaseName` = ClassName) → file mặc định `{ClassName}Test.cs` (aP screenshot: chọn `Dev.AllInOne.Server.PreAccountUpdateSynchronous` → class `PreAccountUpdateSynchronous` → file `PreAccountUpdateSynchronousTest`).
4. Class gõ đuôi `Test` bị strip 1 lần (`GetClassBaseName`). IsValid: candidates tồn tại → phải chọn 1; combo rỗng → gõ tay class.
5. **Output wizard (ground truth, file `PreAccountUpdateSynchronousTest.cs` aP tạo 2026-10-30): KHÔNG BOM** (khác Plugin/Workflow — cùng payload BOM nhưng output Test không BOM; cơ chế nội bộ VS không trace được — mirror output) + **1 dòng trắng giữa `using TargetPlugin…` và `namespace`** (VS T4 host GIỮ newline của dòng `<#}#>` khi if-block emit text; khi construct không emit gì (Plugin.tt false-image blocks — I.4) thì remove cả dòng).

## 4. Thiết kế source of truth

- Handler `TestItemTemplateHandler` (Shared `Templates/Handlers/`) — mirror Plugin/Workflow: render `Test.tt` built-in (default) hoặc context đầy đủ (custom title / `--t4`), ghi 1 file `{ClassWithOrder}Test.cs`, **ghi KHÔNG BOM** (wizard ground truth), user-file idempotent.
- **`PluginTestDiscovery` port 1:1** vào Shared `Templates/PluginTestDiscovery.cs` — 2 API: `GetTestCandidatesAsync` (combo wizard — filter `{Class}Test` tồn tại) + `GetAllTestCandidatesAsync` (đầy đủ — resolution `--test-target`/flag rerun: test đã tồn tại chỉ biến mất khỏi combo, không bao giờ chặn rerun). Gate keeper + prompt combo dùng API 1; chain flag-lookup + handler dùng API 2.
- `ItemTemplateInput` thêm **`TestTarget`**; `T4ContextFactory.BuildContext` + `BuildTestContext` sửa `TestTargetFullClassName = input.TestTarget` (trước = `input.Class` — bug chưa từng có consumer).
- Handler resolve `TestTarget` qua scan ĐẦY ĐỦ: thấy → tự fill message/stage/execution/entity khi thiếu (flag thắng) + **default class name = `candidate.ClassName` khi `--name` bỏ trống** (wizard auto-fill); `TestTarget` thành rỗng nếu candidate không guard-capable; scan có candidates mà không thấy target → lỗi; scan rỗng → tin giá trị gõ tay.
- **VS-parity render**: body `Test.tt` built-in được inject (in-memory, CLI-only — KHÔNG đụng file .tt dùng chung với VSIX) `<#Write("\r\n");#>` trước `<#}#>` của if-guard → Mono nhánh guard emit thêm dòng trắng đúng wizard; nhánh guard-less không chạy Write → giữ shape collapsed (VS remove construct khi không emit gì).

## 5. Việc phải làm (CLI)

- [x] Handler + manifest (id `Test`, payload stub embed sẵn) + register sau DataProvider + 2 Compile entries projitems.
- [x] Gate keeper nhánh Test: `--test-target` có sẵn → không đòi gì thêm (class tự default); thiếu target → scan project (từ `--project`): candidates > 0 → đòi `--test-target`; scan rỗng → đòi `--name`.
- [x] `PromptTestItemAsync`: combo = `SelectionPrompt` theo `DisplayName` (searchable, default đầu); `--name` prompt với default `SuggestedTestClassBaseName` (non-TTY nhận default trực tiếp); scan rỗng → chỉ hỏi `--name`; custom template prompt như các item T4. Exclude Test khỏi generic entity prompt.
- [x] `NewItemCommandArgs` thêm `--test-target`. Engine gate thêm `TestTarget` vào điều kiện `--name (or --entity): required`.

## 6. CLI surface

```
devkit new-item --type Test --test-target <plugin-or-workflow-full-class-name> --project <test-project> [--name <test-class-name>] [--out DIR]
```

`--test-target` required (non-TTY) khi scan combo thấy candidates; **`--name` TỰ ĐỘNG default từ candidate** (wizard auto-fill — aP ruling vòng 2: chọn candidate như screenshot thì file default là `PreAccountUpdateSynchronousTest`) — chỉ bắt buộc khi combo rỗng (project Test chuẩn chỉ reference ProxyTypes) hoặc scan rỗng. KHÔNG `--offline` (ruling chung). Custom T4 `--template`/`--t4` như Plugin. KHÔNG prompt order — `--order` (default 1).

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_item` `itemType="Test"`, `testTarget`.

## 8. Test & nghiệm thu

- [x] Unit test: **28 tests** — 23 `TestItemTemplateHandlerTests` (manifest, skeleton trơn + **no-BOM** + no-warning, strip đuôi Test, order 2 → `{Class}2Test.cs`, guard context + **dòng trắng** + no-BOM, **`--test-target` không `--name` → default class từ candidate**, fill fields từ candidate, flag thắng candidate, candidate không guard → skeleton, target lạ → lỗi, **target có test tồn tại vẫn resolve + `--force` Updated**, typed guard fields không target → skeleton, custom T4 Cli.json + `--t4` + cả hai → lỗi, missing name 2 tầng, no-project, named project, namespace suffix, rerun Skipped/force Updated, thiếu transformer) + 5 `PluginTestDiscoveryTests` (tìm IPlugin + CodeActivity, guard flag + DisplayName, abstract + combo-filter vs GetAllTestCandidates unfiltered, không ProjectReference → rỗng, file project không tồn tại → rỗng). Full 5 suites xanh: **Cli 5167 / Tool 253 / Vsix 571 / Analyzers 310 / Vsix.2019 48** (baseline mới sau I.9 = **5167**). 1 test cũ cập nhật đúng bản chất: `ScaffoldingEngineTests.ScaffoldItemAsync_ProjectIdCollision` — `"not implemented yet"` là marker I.4; giờ item Test có handler → assert `T4 transformer: required` + KHÔNG `input: required`.
- [x] Build CLI 0/0.

## 9. Kết quả + bàn giao

- [x] **aP feedback vòng 1 (2026-10-30)**: (1) Test proj chưa add ref Server → combo rỗng, user tự biết — **KHÔNG phải bug, bỏ qua**; (2) đã add ref + chọn candidate `Dev.AllInOne.Server.PreAccountUpdateSynchronous` → **file default phải là `PreAccountUpdateSynchronousTest`** (wizard auto-fill class) → fix: `--name` tự default từ candidate (gate + chain + handler + engine gate).
- [x] **aP compare CHỐT (2026-10-30)**: aP tạo `PreAccountUpdateSynchronousTest.cs` bằng VSIX wizard vào `TestAllInOne2/Dev.AllInOne.Test` (đã tự add ProjectReference Server vào csproj) → CLI render `--test-target Dev.AllInOne.Server.PreAccountUpdateSynchronous --name PreAccountUpdateSynchronous` vào `TestAllInOneCli/Dev.AllInOne.Test` (csproj CLI mirror thêm cùng reference) → vòng 1 diff 2 chỗ (BOM + dòng trắng) → fix → **cmp thuần BYTE-IDENTICAL** (md5 `62efa5db5926e734…` cả 2 bên).
- [x] Release: Release.Cli.ps1 (Build 30.10.2026 07:01:48, SHA `434D00AE…`) + build-release-only cuối (4 artifacts refresh `Published/4.44.44.44/`, `devkit --version` = `4.44.44.44 Build: 31.12.2026 23.59.59`, Const.cs restored 21 file, installed CLI dll SHA = nupkg dll SHA `56cb0a8b9a23c26f8f92…`).
- [x] Demo live từ `TestAllInOne2` (`.env` còn hạn): gate non-TTY thiếu name (scan rỗng) → MỘT lỗi `--name <test-class-name>`; Created `PreAccountUpdateTest.cs` skeleton (re-render lần cuối KHÔNG BOM sau khi tạm gỡ Server ref — render thật, không cook); rerun → Skipped; demo guard live fixture TEMP (đã dọn): gate liệt kê đủ `--name, --test-target`, guard context chuẩn; **phát hiện hành vi ĐÚNG wizard**: `{Class}Test.cs` tồn tại → candidate `{Class}` biến mất khỏi COMBO (GetTestCandidates) nhưng `--test-target` vẫn resolve (GetAllTestCandidates) → `--force` Updated.
- [x] `new.md`: flag `--test-target` + gate keeper Test + bullet Item `Test` (I.9) + examples.
- [x] **aP duyệt + ra lệnh commit.md 2026-10-30 ("bao gồm code tôi update luôn")** — 6 commits trên `vsix2cliandmcp_items` (bắt đầu `a69029210`): feat(templates) I.9 [9 files 1073+; c1 worktree-verified 0/0] → feat(templates) DevKitJson public [3 files — thay đổi aP internal→public, tách commit riêng] → test(templates) [23 handler + 5 discovery] → chore(tests) fixtures [csproj Test 2 bên + guard pair byte-identical + skeleton CLI demo] → docs [I.9.md + new.md] → build [5 Published gồm manifest]. Sweep 21 OK trước + sau commit; **tree CLEAN; đã push**. → `I.10.UiTest.md`.

## 10. Deviations + bài học

- `StripTestSuffix` chỉ strip khi tên dài hơn `"Test"` (input bệnh lý `"Test"` trần giữ nguyên — không bắt parity với class name rỗng của wizard).
- **BOM**: wizard viết output Test KHÔNG BOM dù payload có BOM (khác Plugin/Workflow/DataProvider — cơ chế VS không trace được từ source) → handler Test ghi không-BOM cả 2 nhánh, mirror OUTPUT wizard chứ không mirror payload marker. Skeleton wizard-side chưa có mẫu để đối chiếu (aP bỏ qua case đó) — giả định cùng cơ chế.
- **Dòng trắng guard**: VS T4 host giữ newline dòng `<#}#>` khi if-block emit text; Mono nuốt cả newlines quanh block-only line → inject `<#Write("\r\n");#>` vào block (in-memory, CLI-only, built-in body thôi — custom `--t4`/`--template` không inject).
- **Line endings của tt resource**: `git autocrlf=true` → working tree (và resource nhúng) là CRLF — pattern Replace phải match cả `\r\n` lẫn `\n` (probe `NS_PROBE_NO` bắt được — pattern `\n` thuần miss).
- **Discovery API tách 2**: combo filter (`{Class}Test` tồn tại) chỉ áp cho prompt/gate; resolution `--test-target` + handler dùng danh sách đầy đủ — nếu không, `--force` rerun mất target (file test tồn tại → candidate bị loại → "--test-target not found").
- Demo guard là fixture TẠM (TEMP) — đã dọn; unit tests lock cả 2 nhánh bằng fixture tự quản.
- Bài học tooling: `printf` với path Windows (`\v` = vertical tab hỏng file csproj fixture — ghi bằng Write tool); file tạo bằng Write tool là LF trong repo `autocrlf=true` (I.8 gotcha lặp — normalize trước commit).
- Bài học quy trình: `T4ContextFactory.BuildTestContext`/`BuildContext` map `TestTargetFullClassName = input.Class` từ P.* — sai bản chất nhưng vô hại vì chưa có consumer; sửa song song cả 2 khi thêm `TestTarget`. Kiểm tra mapping factory khi thêm field mới dù factory có sẵn từ trước.
