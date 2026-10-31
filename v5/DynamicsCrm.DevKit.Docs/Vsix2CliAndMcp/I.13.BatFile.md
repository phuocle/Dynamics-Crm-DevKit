# I.13 — BatFile Item Template (file tiện ích: deploy bat, devkit.js/.d.ts, Managed Identity…)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/I.13.BatFile.md`
> **Điều kiện tiên quyết:** `0.md`.
> **Trạng thái:** ✅ HOÀN THÀNH — **COMPARE CHỐT 9/9 BYTE-IDENTICAL với wizard VSIX** (aP tạo wizard vào `TestAllInOne2/Dev.AllInOne.WebResource/bat/`) — **aP đã duyệt 2026-10-31** → commit theo `commit.md` (split feat/test/fixtures/docs/build)
> **Lưu ý đánh số:** không có I.12 — folder gốc của VSIX nhảy từ 11 sang 13; giữ nguyên số 13 cho khớp VSIX.

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ItemTemplates/BatFile.cs` |
| Payload | `ItemTemplates/CSharp/13.BatFileItemTemplate/` — `batfile.bat`, `devkit.js`, `devkit.d.ts`, `Plugin-Managed-Identity-Config.json`, `Plugin-Managed-Identity.md` |
| Resource | `Shared/Resources/bat/*`, `Resources/js/*`, `Resources/ts/*`, `Resources/ManagedIdentity/*` |
| Token | `Replacement.ApplyCliConnectionArgs` |

## 2. Template tạo ra gì

Menu chọn 1/nhiều file tiện ích thả vào project hiện tại: các bat deploy/generator (nhúng `$CliConnectionArgs$`), `devkit.js`/`devkit.d.ts` (thư viện webresource JS), bộ Managed Identity cho plugin (config + hướng dẫn).

**Thực tế wizard (verify I.13):** combo **CHỌN 1 file** (không phải multi-select như dự đoán dưới đây) — payload 5 placeholder 1 token, wizard `ShouldAddProjectItem` chỉ ghi subset theo pick.

## 3. Logic wizard hiện tại

~~Đọc `BatFile.cs` khi làm. Hình thức: FormCustom/FormInput dạng **danh sách chọn nhiều** file muốn thêm; nội dung lấy từ resource nhúng (không phải payload folder — payload chỉ là placeholder).~~

**Đã verify — dự đoán §3 SAI (đã report aP):**
- `FormPlugin.BatFileItem()`: ẩn execution/stage/message/class textbox + TemplatePanel, `LabelEntity` → **"File"**; combo `ComboBoxEntity` **đơn chọn**, fill CỨNG **6 items tĩnh** trong `Connection_Connected` nhánh BatFile (KHÔNG LockUi, KHÔNG org call): `devkit.js`, `download.reports.bat`, **`upload.reports.bat`**, `download.webresources.bat`, `deploy.datasource.bat`, `Plugin-Managed-Identity.ps1` (handoff dự đoán 5 items — thiếu upload.reports.bat, thực tế 6).
- `BatFile.RunStarted`: token `$batfilename$` = pick; switch theo pick:
  - `devkit.js` → `$devkit.js$` = `js.devkit.js`, `$devkit.d.ts$` = `js.devkit.d.ts` (raw);
  - 4 bat → `$batfile.bat$` = `bat.<pick>` qua `Replacement.ReadBatResourceAsync` (= `ApplyCliConnectionArgs`, `CliArgsBuilder.Build(connection, true)`);
  - `Plugin-Managed-Identity.ps1` → `$batfile.bat$` = ps1 resource, `$config.json$` = config json, `$mdfile$` = readme md (đều raw; 2 self-replace `content.Replace("$batfile.bat$", content)` là **no-op** — resource không chứa literal đó, không replicate).
- `ShouldAddProjectItem`: batfile.bat ghi trừ khi IsDevkitJs; devkit.js/devkit.d.ts chỉ khi IsDevkitJs; config json/.md chỉ khi IsPluginManagedIdentity → **subset theo pick**: 4 bat = 1 file (batfile.bat đổi tên `$batfilename$`), devkit.js = 2 file, MI = 3 file (batfile.bat → `Plugin-Managed-Identity.ps1`).
- vstemplate: `batfile.bat` TargetFileName `$batfilename$` (ReplaceParameters), 4 file còn lại tên cố định.
- **BOM:** cả 5 placeholder **KHÔNG BOM** (`$batfile.bat$` 13B, js/d.ts/md có `\r\n` đuôi, bat + config json không) → output không BOM (kể cả config json/md mà RESOURCE có BOM — wizard ghi theo encoding payload). Payload `\r\n` đuôi được GIỮ sau replace → js/d.ts/md kết thúc thêm 1 newline.

## 4. Thiết kế source of truth

- Handler `BatFileItemTemplateHandler` — danh sách file chọn lấy từ **manifest** (liệt kê resource khả dụng + nhãn hiển thị); nội dung đọc từ Shared Resources; bat qua `ApplyCliConnectionArgs`.
- ~~**Mở rộng đa nền tảng:** mỗi bat chọn thêm sinh kèm bản `.sh` (tùy chọn prompt "Sinh cả bản .sh?" default theo OS).~~ — **KHÔNG làm (đề xuất §4 không có trong wizard)**: wizard chỉ ghi đúng subset payload; `Shared/Resources/sh/download.reports.sh` + `upload.reports.sh` có tồn tại nhưng wizard KHÔNG dùng → chờ aP chốt nếu muốn thêm (deviation, không làm ba).

**Thực hiện:** handler replicate đúng cơ chế wizard — payload replacement qua `TokenEngine.ApplyReplacements` trên subset theo pick, bat qua `TokenEngine.ApplyCliConnectionArgs` (mirror VSIX `Replacement.ApplyCliConnectionArgs`, đã đối chiếu code 2 bên giống hệt), connection lấy từ `ItemTemplateInput.CrmConnection` (mới stash từ command connect: `DevKitCommand.ConnectWithModernAuthAsync` + `NewItemCommand` legacy `--conn` gán `settings.CrmConnection` — CliArgsBuilder tự decrypt/encrypt, AES-CBC fixed IV → deterministic, byte-compare được).

## 5. Việc phải làm (CLI)

- [x] Handler + manifest (id `BatFile`, order I.13) + danh sách resource. — `DynamicsCrm.DevKit.Shared/Templates/Handlers/BatFileItemTemplateHandler.cs` (6 tên tĩnh `UtilityFiles` đúng thứ tự combo; `CreateManifest` 5 entries mirror vstemplate; đăng ký sau ResourceString trong `TemplateHandlers.RegisterAll`; thêm Compile entry `.projitems`).
- [x] Prompt: ~~multi-select~~ **SelectionPrompt 1 chọn** (`Select a file (--name):`) 6 choices — combo đơn của wizard; `--name` truyền sẵn → pass-through, handler validate qua cùng list tĩnh (lạ → lỗi kèm 6 tên; case-insensitive chuẩn hóa). Gate keeper: `--name <utility-file>` (non-TTY thiếu → 1 lỗi chuẩn aP); loại BatFile khỏi generic Name prompt (như UiTest).
- [x] Idempotency: file đã tồn tại → skipped (trừ `--force`), **từng file** — rerun补 file thiếu.

## 6. CLI surface

```
devkit new-item --type BatFile --name <utility-file> --project <project-name> [--out <dir>]
```
(interactive chính là luồng chính của item này; `--name` = pick = tên file output; KHÔNG prompt class/message/stage/execution/order/custom T4)

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_item` `itemType="BatFile"` + `files: string[]` (tên resource từ `get_templates`).

## 8. Test & nghiệm thu

- [x] Unit test 13/13 (`DynamicsCrm.DevKit.Cli.UnitTests/Templates/BatFileItemTemplateHandlerTests.cs`): manifest mirror vstemplate 5 entries; combo 6 tên; catalog RequiresConnection=false + SupportsCustomT4=false + Order 13; bat pick + connection args (`--auth ClientSecret`, `--url`, `--clientid`, không còn token, không BOM); bat không connection → token strip; devkit.js pick 2 file (nội dung = resource + `\r\n` payload); MI pick 3 file (ps1 raw, config json/md KHÔNG BOM dù resource có); tên case-insensitive chuẩn hóa; tên lạ → lỗi; thiếu name → engine gate; thiếu project → lỗi `--project: required for item template 'BatFile'`; rerun Skipped + `--force` Updated; không cần Transformer.
- [x] Build CLI 0/0; **full 5 suites green: Cli 5209 (5196+13) / Tool 253 / Vsix 571 / Analyzers 310 / Vsix.2019 48** (MSB3277 Vsix.2019 = warning có sẵn).
- [x] build-release-only: `devkit --version` = 4.44.44.44 Build **31.12.2026 23.59.59**; 4 artifacts trong `Published/4.44.44.44/`; Const.cs placeholder `xxxx.yy.zz HH.mm.ss` restored; sweep 21/21; installed dll SHA == nupkg dll SHA (`e720fdc179e38547…` lần 1, `7340f7dff3e0a74a…` lần 2 sau fix compare, `50506173728835a3…` lần 3 sau khi dời logic connection vào NewItemCommand); build-manifest.json stale (bình thường).
- [x] Demo live từ `TestAllInOne2` (CWD = .env source of truth, connect `dynamics-crm-devkit-v4.crm.dynamics.com`) → `TestAllInOneCli/Dev.AllInOne.WebResource/bat/` (cùng cấu trúc folder `bat\` như aP tạo wizard): cả **6 pick** chạy thật — 4 bat, `devkit.js` (2 file), `Plugin-Managed-Identity.ps1` (3 file) = **9 Created**; rerun → Skipped; non-TTY thiếu `--name` → `required arguments missing: --name <utility-file>.`; `new-item list` hiện row BatFile Order 13.

### COMPARE CHỐT với wizard (2026-10-31) — 9/9 BYTE-IDENTICAL
- aP tạo **9 file bằng VSIX wizard** vào `TestAllInOne2/Dev.AllInOne.WebResource/bat/`; CLI (release rebuild sau fix) tạo vào `TestAllInOneCli/Dev.AllInOne.WebResource/bat/` (demo root cũ đã chuyển/xóa theo đúng folder của aP).
- Vòng 1 (trước fix): **4 lệch** → 2 root cause, 2 fix:
  1. **4 bat DIFF — wizard KHÔNG nhúng connection args** (`devkit downloadreport --json … --profile "DEBUG"`, token bị strip): wizard connection của aP = connection `.env`-based từ `DynamicsCrm.DevKit.json` (`UseProjectEnvironment=true` — `SolutionMutator` tạo đúng shape này) → `CliArgsBuilder.Build` trả rỗng → `ApplyCliConnectionArgs` strip token. **Fix:** `DevKitCommandArgs.ConnectionFromProjectEnvironment` (flag runtime, set trong `ResolveDefaults` khi CẢ 9 connection args đều rỗng trước khi resolve .env) → gán `connection.UseProjectEnvironment` trong **`NewItemCommand.ConnectAsync`** → CLI chạy từ .env-only sinh bat KHÔNG args (nhưng bat chạy thật vẫn connect được qua .env walk-up của project chứa nó); explicit CLI args (`--auth/--conn/…`) → nhúng như trước. **RULING aP 2026-10-31: `DevKitCommand.cs` (flow connect dùng chung) KHÔNG ĐƯỢC SỬA** — stash connection + gán UseProjectEnvironment nằm trong `NewItemCommand.ConnectAsync` (file của new-item, `GetConnectionUserName` replicate cục bộ); flag nội bộ `ConnectionFromProjectEnvironment` (`get; private set;` — Spectre không bind, **0 `[CommandOption]` mới, `--help` nguyên trạng**) được aP duyệt sau giải thích "I.13 = item ĐẦU TIÊN đưa connection args vào file sinh ra + new-item không có dialog connection (always-connect ruling) nên nguồn gốc connection phải chụp trước khi resolve .env merge đè mất dấu".
  2. **`Plugin-Managed-Identity.md` DIFF 3 bytes — wizard output CÓ BOM** (EF BB BF), 4 file kia không: VS save output `.md` với UTF-8 signature (payload trong VSIX zip đều KHÔNG BOM — đã bóc zip kiểm; resource md/json có BOM nhưng đọc đã strip). **Fix:** `UtilityFile.WriteWithBom` cho đúng file md (wizard ground truth fresh 2026-10-31 — bài học chỉ tin wizard fresh lặp lần 4).
- Vòng 2 (sau fix + release rebuild): **9/9 BYTE-IDENTICAL** — md5 từng cặp: bat `233995269e32` / `a963e26bc6ac` / `183e7a9128df` / `423761cd27ad`; `devkit.js` `0333d46c51e7`; `devkit.d.ts` `c34dfd05b112`; ps1 `4b124c2996fc`; config json `cf1498b9a121`; md `54fe78cc5d5a`.
- Vòng 3 (sau khi dời logic connection ra khỏi `DevKitCommand.cs` theo ruling aP — behavior không đổi): **9/9 BYTE-IDENTICAL giữ nguyên**, full 5 suites **5210/253/571/310/48**, release rebuild lần 3 (`devkit --version` annual 31.12.2026 23.59.59, installed==nupkg dll SHA `50506173728835a3…`, Const restored, sweep 21). Lần "0/9" giữa chừng là **sai relative path trong lệnh compare** (đứng trong TestAllInOne2 rồi prepend `TestAllInOne2/` nữa) — files không hề mất, cả 2 folder đều đủ 9.
- Tests sau fix: **14/14 focused, full Cli 5210** (+1 test `UseProjectEnvironment strips token`); suites còn lại 253/571/310/48.

## 9. Bàn giao

- [x] **COMPARE CHỐT 9/9 BYTE-IDENTICAL** (chi tiết §8) — **aP đã duyệt 2026-10-31** (sau vòng giải thích `UseProjectEnvironment` = cơ chế có sẵn, CLI chỉ gán field; aP chốt: "nếu dòng này đúng thì tôi ok").
- [x] **ĐÃ COMMIT** theo `commit.md` (split feat / test / fixtures / docs / build; c1 worktree-verify; KHÔNG push trừ khi aP ra lệnh). NEXT = `I.14.JsFormTs.md`.

### Deviations / cần aP chốt
1. **§3 dự đoán multi-select SAI** — wizard là combo ĐƠN chọn (6 items, gồm `upload.reports.bat` mà handoff thiếu). Đã implement theo wizard thật.
2. **§4 ".sh sinh kèm" KHÔNG làm** — đề xuất không có trong wizard; resource `sh/download.reports.sh` + `upload.reports.sh` tồn tại nhưng wizard không dùng. Nếu aP muốn multi-platform twin → việc mới, không thuộc parity I.13.
3. **`RequiresConnection` giữ `false`** — combo tĩnh không cần org (khác I.11); CLI vẫn always-connect theo ruling chung 2026-10-29 (connect ở command layer, không phụ thuộc catalog flag).
4. **Cẩm nang connection mới:** `DevKitCommandArgs.CrmConnection` (runtime carrier) — modern-auth stash trong `DevKitCommand.ConnectWithModernAuthAsync`, legacy `--conn` stash trong `NewItemCommand.ConnectAsync`; `TaskNewItem` truyền vào `ItemTemplateInput.CrmConnection`. Engine offline (tests/MCP) để null → token bị strip (parity wizard không connection). **`ConnectionFromProjectEnvironment`**: CẢ 9 connection args rỗng trước resolve → connection = project .env → `UseProjectEnvironment=true` → bats KHÔNG nhúng args (wizard .env-connection parity — proven 9/9); explicit args → nhúng (BuildClientSecretArgs AES fixed IV deterministic).
5. **BOM wizard ground truth (bài học lặp lần 4):** md output CÓ BOM (VS save .md với signature), 4 file còn lại không — payload trong zip đều không BOM, resource md/json có BOM nhưng đã strip lúc đọc.
