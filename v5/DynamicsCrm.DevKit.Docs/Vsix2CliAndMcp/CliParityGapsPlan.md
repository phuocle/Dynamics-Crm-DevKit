# CLI Parity Gaps — Đề xuất lấp khoảng trống CLI so với VSIX

> **Status: CHỜ REVIEW aP — CHƯA EXECUTE.** AI thực hiện ĐỌC ĐỦ file này rồi mới làm.
> - Ngày lập: 2026-11-08 · Branch gốc: v5.5 (commit 3da1ed086) · Version nguồn: 4.44.44.44
> - Căn cứ: quét toàn bộ VSIX (72 .cs + 30 template payloads) và CLI (57 .cs, **không tính Mcp/**) — kết quả so sánh đầy đủ tại `../vsix-vs-cli-comparison.html`.
> - Mục tiêu: **functional parity** — mọi *năng lực* của VSIX đều chạy được bằng `devkit` CLI trên Windows/macOS/Linux. **Không nhắm UX parity** (dialog VS, context menu là VS-only by design, xem §5 Non-goals).

---

## 1. Trả lời câu hỏi: có cần làm phần thiếu để CLI trên Mac/Linux "giống VSIX"?

**CÓ — nhưng chỉ 4 work-unit, không phải toàn bộ danh sách "chỉ VSIX có".**

Suy luận:
- Phần lớn các luồng deploy runtime VSIX **từ đầu đã ủy thác cho CLI** (template sinh `*.bat`/`*.sh` gọi `devkit`) → không phải làm gì thêm; rule `.bat`/`.sh` OS-correct cũng đã xử lý xong 2026-11-03 (commit 8e6669b5d…).
- Regenerate code sinh sẵn (VSIX re-add item) — CLI **đã có đường tương đương** qua `devkit generator` (regen riêng file generated); chỉ thiếu flag **an toàn** cho `new-item` (WU3).
- Custom T4: CLI **đã đọc được** template đặt tên do VSIX lưu trong `DynamicsCrm.DevKit.Config.json` (`T4TemplateResolver.GetCustomTemplateTitles`, TaskNewItem.cs:603/788/915/955/1122/1161) → parity về sử dụng đã có; chỉ còn CRUD quản lý (WU5, optional).
- **Gap thật duy nhất lớn** = chiều CRM → code của CrmPluginRegistration (WU1) — đúng như aP nghi ngờ.
- 2 item còn lại mang giá trị thật trên Mac/Linux: build TS trước khi deploy (WU2) và interactive picker cho `new-item` (WU4).

Sau WU1–WU4: **CLI chạy trên Mac/Linux đạt functional parity với VSIX** (mọi việc VSIX làm được đều có lệnh CLI làm được); những gì còn lại của VSIX là UX của Visual Studio, không thể và không nên port (§5).

---

## 2. Bảng tổng hợp work-unit

| WU | Gap | Đề xuất | Ưu tiên | Ước lượng |
|---|---|---|---|---|
| **WU1** | CRM → code: Add/Update `[CrmPluginRegistration]` (chỉ VSIX có) | Lệnh mới `devkit registration --type plugin\|workflow` | **P1** | lớn nhất (~1.5–2 ngày AI) |
| **WU2** | Build TypeScript trước khi deploy (chỉ VSIX có) | `devkit webresource upload --build debug\|release` | P2 | 0.5–1 ngày |
| **WU3** | Regen an toàn khi re-add item (VSIX idempotent, CLI `--force` ghi đè cả file tay) | `devkit new-item --regen` | P3 | 0.5 ngày |
| **WU4** | Interactive picker thay dialog VSIX (entity/message/stage/language) | Prompt khi terminal interactive, không đổi hành vi CI | P4 | ~1 ngày |
| **WU5** | Quản lý custom T4 template CRUD (VSIX FormCustom UI) | `devkit template --action …` vào cùng Config.json | P5 optional — **hỏi aP trước** | 0.25–0.5 ngày |

---

## 3. Chi tiết từng work-unit

### WU1 — `devkit registration` : Add/Update CrmPluginRegistration từ CRM (CRM → code)

**Hiện trạng 2 bên:**
- VSIX: menu chuột phải trong code window khi cursor nằm trong class `IPlugin`/`CodeActivity`; quét CRM rồi **viết attribute vào file .cs đang mở** hoặc **inject `Id`** vào attribute sẵn có; ẩn khi mọi attribute đã có `Id`; nếu chưa có bước đăng ký nào → ghi attribute placeholder `"???", "???", StageEnum.PostOperation…`.
  - Evidence: `DynamicsCrm.DevKit.Vsix/Commands/CommandAddCrmPluginRegistration.cs` — FetchXML step:323–435 (sdkmessageprocessingstep join sdkmessage/plugintype/pluginassembly/sdkmessagefilter + secure config), images:437–480 (sdkmessageprocessingstepimage), workflow:255–303 (plugintype isworkflowactivity=1), add attribute:91–141, inject Id:143–189 (`UpdateAttributesWithIdAsync`), visibility:204–240, thêm using namespace Shared:492–508, side-effect sinh `deploy.debug.bat`/`deploy.debug.only.bat`:305–321 (`AddDeployBatFilesAsync`).
  - Tham số attribute VSIX sinh đủ: `StageEnum, ExecutionModeEnum, IsolationModeEnum, Id, DeleteAsyncOperation, Description, Server/Offline, Action = PluginStepOperationEnum.Deactivate, UnSecureConfiguration, SecureConfiguration, RunAs, Image1..4*` (:391–433).
- CLI: **không có** chiều này. Chỉ có: sinh attribute lúc `new-item --type Plugin` (T4) và deploy attribute → CRM lúc `devkit server` (`TaskServer.cs:1962–2010` đọc attribute từ dll, đăng ký assembly/step/image/custom-api/unregister).

**Đề xuất command shape (KHÔNG làm nếu aP đổi ý ở §4-Q1):**

```text
devkit registration --type plugin --file "Plugins\AccountPlugin.cs" [--class AccountPlugin] [--solution <sln>] [connection args…]
devkit registration --type workflow --file "Workflows\MyActivity.cs" [--class MyActivity]
devkit registration list --type plugin --file <cs> [--class <name>]   # dry-run: in attribute sẽ được ghi, KHÔNG sửa file
```

- `--type` `plugin` (default) | `workflow` — quyết định bộ query như VSIX (plugin = sdkmessageprocessingstep; workflow = plugintype isworkflowactivity=1, không stage/entity).
- `--file` **bắt buộc** (file .cs); `--class` tùy chọn — bắt buộc khi file chứa **nhiều** class; phát hiện class qua text scan (khai báo `class X : … IPlugin` / `… CodeActivity`, loại bỏ `abstract`); nhiều ứng viên không phân biệt được → `[Error]` + candidates trong `[Detail]` JSON (chuẩn pattern hiện hành).
- Connect-first gate: lệnh kết nối CRM trước khi chạy (mirror aP ruling 2026-10-29 cho new-item — `TaskNewItem.cs:235–237`); ConnectionError khi không kết nối được.
- **Hành vi** (mirror VSIX, 3 nhánh):
  1. Class **chưa có** attribute nào → chèn block `[CrmPluginRegistration(...)]` **ngay trên dòng khai báo class**, đủ tham số như VSIX (:391–433); đồng thời thêm `using <namespace Shared>;` nếu thiếu (:492–508 tương đương — Shared namespace suy từ project tham chiếu trong .csproj của file, hoặc `--shared-namespace` override).
  2. Class **đã có** attribute (một hoặc nhiều) và còn attribute thiếu `Id` → chỉ **inject `Id = "..."`** vào attribute khớp (match message+entity+stage+execution với step tìm được) — parse text-level, hỗ trợ attribute multi-line; KHÔNG đụng phần còn lại của attribute (giữ comment/format của người dùng).
  3. Tìm **không ra step nào** trên CRM → ghi attribute placeholder `???` + `[Warning]` trong output (giữ hành vi VSIX :98–106/138–141 để người dùng có khung sửa tay).
- Mọi attribute đã có `Id` → KHÔNG sửa file, output thông báo "nothing to update" (VSIX ẩn menu — CLI không ẩn được nên nói rõ).
- Side-effect parity: nếu file thuộc project Server mà project **chưa có** `deploy.debug.bat`/`deploy.debug.only.bat` (+`.sh` twin theo rule OS-correct 2026-11-03) → sinh thêm từ shared resource `Resources\bat\*` (giống `AddDeployBatFilesAsync`). Nếu đã có → giữ nguyên.
- Ghi file **chỉ khi nội dung đổi** (pattern `WriteTargetFileIfChangedAsync` — ItemTemplateBase.cs:88–103); output bảng Created/Updated/Unchanged per file (pattern TaskNewShared.cs:109–133).
- **Không dùng Roslyn/FileCodeModel** — CLI xử lý text thuần (như ScaffoldingEngine đang làm); giữ CLI thuần .NET 10 cross-platform.

**Implementation gợi ý (AI thực hiện tự xác minh lại đường dẫn trước khi sửa):**
- Mới: `Commands/RegistrationCommand.cs`, `Models/RegistrationCommandArgs.cs`, `Tasks/TaskRegistration.cs` (ITask), đăng ký trong `Program.cs` (sau `new-item`, trước `mcp`); thêm vào `SpectreLog.WriteHelp` (Logging/SpectreLog.cs:61–130).
- FetchXML: kiểm tra **helper có sẵn trước khi viết mới** (AGENTS.md rule) — TaskServer.cs:645–926 đã có cache plugin types/steps/images; Mcp/Tools có query sdkmessageprocessingstep (đọc tham khảo, KHÔNG import code Mcp).
- Parse/inject attribute: viết class nhỏ trong `Tasks/` hoặc `Services/` (vd `CrmRegistrationInjector`): định vị `[CrmPluginRegistration(` cân bằng ngoặc đơn (attribute này là list đối số thường, KHÔNG có ngoặc nhọn lồng), tìm argument `Id` hiện hữu, chèn `Id = "<guid>"` đúng vị trí (giữ nguyên thứ tự arg còn lại — convention hiện tại: Id đứng sau các arg chính).
- Dry-run `list`: in attribute text sẽ ghi, exit 0, không ghi file — hữu ích cho test + AI agent.

**Tests (Cli.UnitTests, MSTest 4):**
- Class detection: 1 class IPlugin / 1 class CodeActivity / nhiều class → lỗi candidates / class abstract bị loại.
- Injector: chèn block mới (có/không using Shared); inject Id vào attribute multi-line; attribute đã có Id → không đổi; placeholder khi 0 step.
- FetchXML builder: query plugin vs workflow khác nhau đúng.
- Validation: thiếu `--file`, `--class` mâu thuẫn, `--type` sai, chưa connect → block.
- Hook Process/seam: tái dùng pattern connect-first của NewItemCommand tests.

**DoD WU1:** build CLI 0 lỗi 0 warning; focused tests xanh; full Cli.UnitTests xanh; smoke thật trên DEVKITV4: tạo plugin class mới chưa deploy → `registration` sinh attribute placeholder; plugin đã deploy bằng `devkit server` → `registration` inject đúng `Id` (so với attribute mà VSIX sinh ra phải KHỚP văn bản các tham số chính); release-only 4 artifacts; commits split feat/test/docs/build.

---

### WU2 — `devkit webresource --type upload --build debug|release` (build TS trước deploy)

**Hiện trạng:**
- VSIX: deploy .ts chạy `npm run debug|release {file}` tại package.json gần nhất trước, stream output vào FormBuildOutput, rồi deploy file output đã build. Evidence: `Commands/CommandTypeScriptRelease.cs` (release:21–119), `Lib/TypeScriptBuildHelper.cs:28–100`; rule "deployable TS" loại `*.form.ts`/`*.webapi.ts` (CommandWebResource.cs:117–145).
- CLI: `webresource upload` chỉ upload nội dung file hiện có (TaskWebResource.cs:17…), không build.

**Đề xuất:**
- Thêm option `--build <debug|release>` (chỉ hợp lệ với `--type upload`).
- Flow: nếu `--file` là `.ts` deployable → tìm package.json gần nhất (walk-up từ thư mục file) → chạy `npm run debug {file}` hoặc `npm run release {file}` (đối chiếu script trong template WebResourceTs: `ProjectTemplates/CSharp/13.WebResourceTsProjectTemplate` package.json + build.js esbuild — **AI thực hiện đọc template để xác nhận tên script và đường dẫn output**, ví dụ `dist/<name>.js`) → upload **file output đã build** (tự thay `--file` thành output path; giữ nguyên mapping/`--webresource`/`--webresourceid` cho file output: hậu tố `.ts` → `.js`).
- `.form.ts`/`.webapi.ts` + `--build` → `[Error]` kèm Hint dùng `devkit generator` (những file này do generator sinh).
- npm fail → `[Error]` kèm vài dòng cuối output build + Hint xem `npm run …` thủ công.
- Cross-platform: spawn `npm` qua Process không qua shell-specific (Windows vẫn `npm.cmd` resolution như hiện có — tham khảo cách TaskServer chạy pac CLI: TaskPacSolutionPackager.cs:97 auto-install pattern).
- Validation matrix cập nhật trong `WebResourceCommand.cs:40–64`: `--build` + download = lỗi; `--build` + file không phải .ts deployable = lỗi; thiếu npm/package.json = lỗi có Hint.

**Tests:** validation rules; resolve output path (.ts → output theo build.js); deployable filter; không chạy npm thật trong unit test (seam interface cho Process — pattern tương tự Tool UnitTests).

**DoD WU2:** như WU1 (build/tests/release); smoke thật: WebResourceTs project trên Windows `devkit webresource upload --build release --file X.ts --webresource X` upload đúng file dist.

---

### WU3 — `devkit new-item --regen` (regen an toàn, mirror re-add của VSIX)

**Hiện trạng:**
- VSIX: re-add item = regen **chỉ phần generated** (`{Entity}.generated.cs`, `{Entity}.form.js`, `.d.ts`…), giữ nguyên file tay người dùng; chỉ ghi khi nội dung đổi. Evidence: `ItemTemplateBase.cs:44–103`; riêng LateBound còn normalize phần partial class (`Wizard/ItemTemplates/LateBound.cs:35–70,120–154`).
- CLI: `new-item` skip file tồn tại (Created/Updated/Skipped report — TaskNewShared.cs:109–133); `--force` ghi đè **toàn bộ** → nguy cơ mất nội dung người dùng tự sửa trong `{Entity}.cs` / `{Entity}.js`.

**Đề xuất:**
- `--regen` trên `new-item`: chỉ ghi đè **file generated-companion** theo bảng per-type (giữ file tay):
  | Type | Regen | Giữ nguyên |
  |---|---|---|
  | LateBound | `{Entity}.generated.cs` | `{Entity}.cs` |
  | JsForm | `{Entity}.form.js`, `{Entity}.d.ts` | `{Entity}.js` |
  | JsWebApi | `{Entity}.d.ts` (và `.webapi.js` nếu template coi là generated — AI đối chiếu handler I.3) | `{Entity}.webapi.js` nếu template gốc ghi nó là file wrapper tay |
  | TsForm | `{Entity}.form.ts` | `{Entity}.ts` |
  | TsWebApi | `{Entity}.ts` wrapper tùy handler I.15 | `{Entity}.webapi.ts` |
  | Report | `.rdl` | — (regen rdl là main purpose) |
- Bảng trên **do AI thực hiện đối chiếu lại từng handler I.1–I.18 trong TaskNewItem.cs:49–196 + payload template** trước khi chốt (file nào là "hand" vs "generated" quyết định trong handler, không đoán).
- `--regen` + `--entity` bắt buộc như thường; tiện thêm: nếu bỏ `--entity` và trong project tồn tại đúng 1 cặp `{Entity}.generated.cs` → dùng entity đó; nhiều hơn → `[Error]` + candidates.
- `--regen` + `--force` → `[Error]` mâu thuẫn (Hint chọn 1).
- Write-if-changed như VSIX; report Unchanged cho file giống hệt.

**Tests:** bảng regen per-type (không đụng file tay); write-if-changed; mâu thuẫn --force; infer entity 1/nhiều/0.

**DoD WU3:** build/tests/release theo chuẩn; smoke: tạo LateBound Account → sửa tay `{Entity}.cs` → `--regen` → file tay giữ nguyên + `.generated.cs` mới.

---

### WU4 — Interactive picker cho `new-item` khi thiếu tham số (thay dialog VSIX)

**Hiện trạng:**
- VSIX: FormItem pick entity từ **toàn bộ metadata org** (FormItem.xaml.cs:206–237), FormPlugin lọc **Message theo entity** (:178–199, 364–390), Stage/Execution enum, ngôn ngữ provisioned (ResourceString), Data Source picker (DataProvider).
- CLI: thiếu `--entity`/`--message`/`--stage`… hiện báo lỗi required-args (report tất cả cùng lúc, pattern TaskNewProject.cs:44–51); có sẵn interactive prompting cho type/name/solution (TaskNewShared.cs:18–33, 95–108) và connection (ConnectionPrompter.cs:24–48).

**Đề xuất (CLI-native, không bắt chước UI):**
- Khi terminal **interactive** (không `--plain`, không redirected — tái dùng đúng gate hiện có):
  - `--entity` thiếu → prompt danh sách entity SchemaName từ metadata (đã connect sẵn theo connect-first gate), có prefix filter + paging; default gợi ý từ tên project/folder.
  - `--message` thiếu → prompt SDK message **lọc theo entity đã chọn** (qua sdkmessagefilter — VSIX cũng lọc vậy); cho phép "Other…" nhập tay.
  - `--stage`/`--execution` → SelectionPrompt 3/2 lựa chọn, default PreOperation/Synchronous.
  - `--language` (ResourceString) → prompt ngôn ngữ provisioned từ CRM.
  - `--datasource` (DataProvider) → prompt data source tồn tại của org.
- Terminal **non-interactive**: hành vi hiện tại KHÔNG ĐỔI (lỗi liệt kê đủ args thiếu một lần) — CI/AI agent không bị phá.
- Sau prompt xong chạy tiếp pipeline như khi có args (validation backend dùng chung).

**Tests:** gate interactive vs non-interactive (redirected stream → vẫn lỗi required); pipeline nhận giá trị prompt như args (test với stream giả — pattern có sẵn trong Cli.UnitTests cho prompt paths).

**DoD WU4:** build/tests/release; smoke tương tác từng picker 1 lần trên DEVKITV4.

---

### WU5 (OPTIONAL — hỏi aP) — `devkit template` CRUD cho custom T4

- Parity *sử dụng* đã có: CLI `--template <tên>` đã resolve từ `DynamicsCrm.DevKit.Config.json` (T4TemplateResolver — cùng nguồn VSIX FormCustom lưu). Chỉ thiếu **quản lý CRUD** bằng CLI (`--action list|save|delete|rename|default` + `--item-type --name --t4-file`).
- Giá trị thấp (VS/X-Windows user sửa Config.json tay được) → **chỉ làm khi aP OK**; nếu làm, thao tác đúng schema section `CustomTemplates` hiện có (TaskUploadReport.cs:234, TaskWebResource.cs:580 đã dùng `configJson.CustomTemplates`).

---

## 4. Câu hỏi mở — aP chốt trước khi execute

- **Q1 (WU1):** Tên lệnh — đề xuất `devkit registration --type plugin|workflow`. Phương án khác: gom vào `devkit server --type registration` (không khuyến nghị: server là chiều deploy, registration là chiều code-gen). Nếu aP thích tên khác, giữ nguyên phần còn lại của spec.
- **Q2 (WU1):** Có bổ sung mode batch (`--project` xử lý mọi plugin class của project) ngay trong WU1 không? Đề xuất: KHÔNG — phase 2 nếu cần.
- **Q3 (WU4):** Làm cả **dialog picker** (TsDialog/JsDialog liệt kê dialog forms từ CRM như VSIX `MetadataService.GetEntityDialogFormsAsync`)? Đề xuất: làm nếu query đơn giản; nếu phức tạp tách WU4b.
- **Q4:** MCP exposure — có thêm tool MCP cho `registration` không? Mặc định: **chỉ CLI**, MCP chờ lệnh riêng của aP.
- **Q5:** WU5 có làm không (xem trên).

## 5. Non-goals — KHÔNG port và lý do

| Item VSIX | Lý do không port |
|---|---|
| FormConnection lưu connection mã hóa AES trong `DynamicsCrm.DevKit.json` | CLI cố tình stateless: args > `.env` walk-up, **không đọc OS env** (ruling aP 2026-11-04); lưu secret file không phải hướng CLI |
| Context menu VS / status bar / auto-save selected item / cache 60' | UX của Visual Studio, vô nghĩa ngoài VS |
| FormBuildOutput (cửa sổ streaming npm) | CLI stream ra console là đủ (WU2) |
| Mở .rdl trong Report Designer sau khi tạo | Cần VS |
| PluginTestDiscovery cho item Test | CLI đã tương đương: scan logic `--test-target`/`--name` (TaskNewItem.cs:100–129) |
| NuGet version pinning | Parity sẵn (VSIX `Replacement.AddNuGetAsync` ↔ CLI `TokenEngine.AddNuGetTokensAsync` — cả hai stamp live nuget.org, CLI có fallback offline) |

## 6. Quy ước thực thi cho AI thực hiện (BẮT BUỘC ĐỌC)

1. **Đọc trước khi làm:** `AGENTS.md` (repo root) + skills `devkit-skill-build-cli` (sau MỖI lần edit CLI: build 0 lỗi 0 warning), `devkit-skill-unit-test`, `devkit-skill-build-release-only` (KHI XONG mỗi work-unit — standing rule 2026-10-25: release-only 4 artifacts + verify Const.Build placeholder restored), `devkit-skill-commit` (source of truth duy nhất cho commit).
2. **Branch:** aP ra tên branch từng work-unit (per-task branch off v5.5, tên verbatim — KHÔNG tự đặt/đổi).
3. **Commit split:** mỗi WU ≥ 4 commits theo loại `feat` / `test` / `docs` / `build(release)` (pattern commit-splitting-workflow; verify intermediate commit compile bằng temp worktree nếu split phức tạp). **Không** `git add .`/`-A`; không stage phần không liên quan; **không push** nếu aP không bảo.
4. **Build gate:** `dotnet build DynamicsCrm.DevKit.Cli/DynamicsCrm.DevKit.Cli.csproj` 0 errors 0 warnings sau mọi edit.
5. **Version:** giữ source version `4.44.44.44`; chỉ script release được thay `Const.Build` placeholder `xxxx.yy.zz HH.mm.ss` — restore trong `finally`, kiểm tra working tree trước commit.
6. **Error output pattern (đã aP duyệt, vẫn confirm lại khi review):** `[Error]/[Hint]/[Detail]`; KHÔNG tag/bảng trong text lỗi; candidates liệt kê trong `[Detail]` JSON; hint redirect luôn dạng `Use {tool} instead.`.
7. **Tests:** Cli.UnitTests (MSTest 4 — `ThrowsExactly`, `HasCount`, `CollectionAssert` cho byte[], **KHÔNG có** `StringAssert.DoesNotContain`); MethodLevel parallel — class dùng shared state đánh `[DoNotParallelize]`; giữ `WaitScalePercent` cho path chờ metadata.
8. **Preserve:** không refactor file lớn (`Helper.cs`, `XrmHelper.cs`), không đụng `Mcp/**` (trừ khi aP ra lệnh riêng — Q4), giữ public command names/JSON keys.
9. **Cross-platform:** mọi script reference sinh thêm phải OS-correct (`.bat` Windows / `.sh` elsewhere — ruling 2026-11-03, helper `RewritePlatformScriptReferences` có sẵn); không dùng path hard-code `\`.
10. **Docs:** sau mỗi WU cập nhật `DynamicsCrm.DevKit.Docs/Cli/*.md` + Wiki `wiki/cli` (submodule) cho lệnh mới/thay đổi help; output doc = **paste-verbatim log chạy thật**, NEVER cook (rule never-cook-output).
11. **Khi làm xong WU cuối:** quay lại cập nhật trạng thái các dòng tương ứng trong `../vsix-vs-cli-comparison.html` (chip ⚠️/🔶 → ✅) + mục này (Status → DONE từng WU).

## 7. Thứ tự thực hiện đề xuất

**WU1 → WU2 → WU3 → WU4 → (WU5 nếu aP OK).** WU1 độc lập, làm trước vì là gap chính aP nêu; WU2–WU4 độc lập nhau, có thể song song nếu aP muốn chia AI.

---

*File này là plan-review cho aP; số liệu lấy từ quét code 2026-11-08 tại commit 3da1ed086. Sau review, aP tick các mục đã chốt ở §4 và giao AI thực hiện từng WU.*
