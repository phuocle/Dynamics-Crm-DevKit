# I.1 — LateBound Item Template (entity class late-bound)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/I.1.LateBound.md`
> **Điều kiện tiên quyết:** `0.md` hoàn tất (T4/TokenEngine/Engine). Làm sau khi xong nhóm P.
> **Trạng thái:** ✅ **HOÀN THÀNH + USER DUYỆT 2026-10-28 — ĐÃ COMMIT** (build CLI 0 err/0 warn, VSIX net48 pass, focused 11/11, full suite **5017/5017**, release build-release-only EXIT=0, demo live bằng global tool, **compare chốt: content-identical — `Account.cs` diff -w = 0, `Account.generated.cs` diff -w = đúng 1 dòng `Last Modified` by-design; còn lại VS-reformat + DependentUpon chờ phê** — chi tiết mục "Kết quả thực thi" cuối file).
> **Ghi chú:** đây là wizard tôi đã đọc nguyên văn — các file I khác mô phỏng pattern này.

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ItemTemplates/LateBound.cs` |
| Payload | `ItemTemplates/CSharp/01.LateBoundItemTemplate/` — `Class.cs` (stub user), `GeneratedClass.cs` (code sinh) |
| Manifest VS | `CSharpLateBoundItemTemplate.vstemplate` |
| Codegen (Shared sẵn) | `DynamicsCrm.DevKit.Shared/Logic/CSharpLateBound.cs` (`GetCsCode`), `Helper.GetDefaultFileWithCs` |
| Base class | `Wizard/ItemTemplates/ItemTemplateBase.cs` (ShouldAddProjectItemAsync, WriteTargetFileIfChangedAsync…) |

## 2. Template tạo ra gì

Với entity user chọn (từ metadata Dataverse): `{Entity}.cs` (class partial user chỉnh sửa — chỉ tạo khi chưa có) + `{Entity}.generated.cs` (code sinh từ attributes/relationships — luôn cập nhật). Có nest `.generated.cs` dưới `.cs` trong Solution Explorer (chỉ VS — CLI bỏ qua bước nest này).

## 3. Logic wizard hiện tại (LateBound.cs)

1. `FormItem(ItemType.LateBound)` — chọn entity (form query metadata: `XrmHelper.EntitiesMetadata`).
2. `RunStarted`: `_Class_ = Helper.GetDefaultFileWithCs(metadata, $rootnamespace$)`; `_GeneratedClass_ = CSharpLateBound.GetCsCode(serviceClient, metadata, $rootnamespace$, sharedNamespace)`; điển token `$Class$`, `$GeneratedClass$` + `Replacement.SetAsync(form)`.
3. `ShouldAddProjectItem("Class.cs")` → target `{Entity}.cs`; chỉ add nếu **chưa tồn tại** (không bao giờ đè file user).
4. `RunFinished`: nếu `.generated.cs` đã tồn tại → so nội dung từ dòng 6 (`ReadAllTextFromLine6Async`), khác thì ghi mới; normalize `{Entity}.cs` cũ (`public partial` → `internal partial`) nếu cần.

## 4. Thiết kế source of truth

- Handler `LateBoundItemTemplateHandler : IItemTemplateHandler` trong `Shared/Templates/Handlers/`:
  - Input: `ItemTemplateInput { Name = entitySchemaName, RootNamespace }` + service (lấy metadata qua `MetadataService`/`XrmHelper` sẵn có trong Shared).
  - Sinh 2 nội dung bằng chính 2 hàm Shared trên (source of truth codegen đã đúng chỗ).
- **Luật idempotency bắt buộc** (kế thừa ItemTemplateBase): `{Entity}.cs` không đè (trừ `--force`); `{Entity}.generated.cs` luôn update-if-changed. So sánh "từ dòng 6" giữ nguyên ngữ nghĩa (`Helper.IsTheSame` + `ReadContentFromLine6Async`).
- Nếu target là shproj → `SolutionMutator.AddCompileItemToProjitemsAsync`.

## 5. Việc phải làm (CLI)

- [x] Handler + manifest (id `LateBound`, order I.1) + embed 2 payload. *(embeds 2 file đã có từ bước 0 — projitems 419/420; thêm Compile handler + đăng ký `RegisterHandler(TemplateKind.Item, …)`, CreateManifest set `Kind=Item` tường minh)*
- [x] Câu hỏi tương tác: chọn entity — `SelectionPrompt` searchable từ `RetrieveAllEntities` (cache qua MetadataService); cho phép gõ tên trực tiếp khi `--offline` (bỏ validate). *(đính chính 2026-10-27: `--offline` BỊ CHẶN — xem lệch #2; SelectionPrompt `.EnableSearch()` đọc từ `MetadataService.ReadEntitiesMetadataAsync(EntityFilters.Attributes)` fill XrmHelper cache, non-interactive truyền `--entity` — nhận cả logical lẫn schema name)*
- [x] Báo cáo created/updated/skipped rõ ràng từng file.

## 6. CLI surface

```
devkit new --kind item --type LateBound --entity account --out <dir project> [--offline] [--force]
```
Hỏi–đáp: entity (search box) → (offline thì TextPrompt tự do).

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_item` `itemType="LateBound"`, `entity`, `outputDirectory`, `force`. Trả `createdFiles`/`updatedFiles`/`skippedFiles`.

## 8. Test & nghiệm thu

- [x] Unit test (mock `EntityMetadata`): tạo đủ 2 file; chạy lần 2: `{Entity}.cs` skipped (giữ nguyên edit giả của user), `.generated.cs` update khi metadata đổi.
- [x] Test normalize `public partial` → `internal partial`.
- [x] Build CLI 0/0; test pass.

## 9. Bàn giao

- [x] Báo cáo + user duyệt → qua `I.2.JsForm.md`. *(aP duyệt 2026-10-28 sau compare chốt)*

## Kết quả thực thi (2026-10-27)

### Đã giao

| Hạng mục | Kết quả |
|---|---|
| Handler | `Shared/Templates/Handlers/LateBoundItemTemplateHandler.cs` — item handler ĐẦU TIÊN của track: `ITemplateHandler` (không phải IItemTemplateHandler — lệch #1), manifest 2 file đúng vstemplate (`$SchemaName$.cs` user-file + `$SchemaName$.generated.cs` `IsGenerated=true`), CreateManifest set `Kind=Item` tường minh (registry kind-scoped từ fix [P2] review) |
| Codegen | Dùng đúng source of truth Shared: `Helper.GetDefaultFileWithCs` + `CSharpLateBound.GetCsCode` — render qua payload stub `$Class$`/`$GeneratedClass$` (ApplyReplacements) → BOM giữ nguyên như VSIX (2 stub đều có BOM, `ForceWriteAllTextAsync`) |
| Metadata | Lookup `XrmHelper.EntitiesMetadata` (SchemaName HOẶC LogicalName, case-insensitive); cache rỗng + có service → `MetadataService.ReadEntitiesMetadataAsync(EntityFilters.Attributes)` (fill cache, cùng source TaskGenerator); **codegen metadata = per-entity `FetchEntityMetadataAsync` (EntityFilters.All) khi có service — mirror wizard** (FormItem fill cache bằng Entity-filter → GetCsCode tự fetch All; thiếu upgrade → Lookup docs mất segment `- Relationship: {name}` — bắt được ở compare đầu); file/class đặt theo `metadata.SchemaName` — token `$SchemaName$` override sau khi resolve (gõ `account` ra `Account.cs`) |
| Idempotency | Đúng wizard VSIX: `{Entity}.cs` không đè trừ `--force` + normalize `public partial`→`internal partial` (RunFinished/MigratePublicToInternal semantics); `{Entity}.generated.cs` so từ dòng 6 (`FileHelper.ReadAllTextFromLine6Async` + `Helper.ReadContentFromLine6Async` + `Helper.IsTheSame`) — header stamp ngày sinh KHÔNG gây update |
| shproj | Target nằm trong Shared project → 2 `<Compile>` entries vào `.projitems` qua `SolutionMutator.AddCompileItemToProjitems` (format `$(MSBuildThisFileDirectory)Entities\Account.cs` — REF parity); SDK-style csproj tự glob nên không đụng |
| `$rootnamespace$` | = scanner RootNamespace + folder đích dưới project root (VD `Dev.AllInOne.Shared.Entities` — REF parity, cách VS compose) |
| sharedNamespace | inside-Shared → null (EntityBase cùng assembly — wizard `IsAddToSharedProjectAsync`); khác → `workspace.SharedProjectNameSpace`; không có Shared project → warning "EntityBase unqualified" |
| CLI | `NewCommand.IsValidAsync` connect ĐIỀU KIỆN (kind=item + RequiresConnection + !--offline): `ConnectWithModernAuthAsync` (protected của base) / legacy `--conn` / `.env` fallback (base đã chạy `ResolveProjectEnvironmentDefaults`); không connection → `DevKitConnectionException "--conn or --auth: required …"`. `TaskNew`: guard `--offline` sớm cho RequiresConnection + entity `SelectionPrompt.EnableSearch()` (TTY, connected) + truyền `input.ServiceClient`. SpectreLog help +1 example item vào CẢ 2 bản (plain + fancy, ≤117 cols — audit 114) |
| Tests | 11 `LateBoundItemTemplateHandlerTests` (`[DoNotParallelize]`, mock metadata reflection-SetValue — KHÔNG cần service vì GetCsCode null-guard khi Attributes != null): create 2 file + BOM + projitems, logical-name lookup, rerun skip/unchanged, header-only-change → Unchanged, body-change → Updated, normalize partial, --force, empty-cache error, unknown-entity error + không tạo file rác. Full suite 5006 → **5017/5017** |
| Build/Release | CLI 0 err/0 warn; VSIX net48 VS-MSBuild pass; release build-release-only EXIT=0 (annual `31.12.2026 23.59.59`, 4 artifacts 23:50 27-10, Const.cs placeholder restored, sweep 21 dateReplacement OK) |
| Demo live | Global tool `4.44.44.44 Build: 31.12.2026 23.59.59` chạy từ TestAllInOne2 (`.env` md5 `5bd73218` — TestAllInOneCli/.env `52cfb0b7` là secret CŨ hết hạn AADSTS7000222, KHÔNG đụng) `--out ../TestAllInOneCli/Dev.AllInOne.Shared/Entities`: Connected → `2 Created` (Account.cs + Account.generated.cs) + `1 Updated` (projitems); **rerun: Skipped/Unchanged/Unchanged — `0 created, 0 updated, 3 skipped`**; generated = `internal partial class Account : EntityBase` (inside-Shared → unqualified đúng wizard); cả 2 `.env` guard nguyên vẹn xuyên suốt |

### Các lệch so với work file (đã nêu khi bàn giao)

1. **`IItemTemplateHandler` không tồn tại** — handler implements `ITemplateHandler` duy nhất (deviation P.1; `ScaffoldRequest` có cả `ProjectInput`/`ItemInput`).
2. **`--offline` BỊ CHẶN cho LateBound** (mục 5/6 gốc ghi "offline thì gõ tên trực tiếp / TextPrompt tự do" — SUPERSEDED): không connection thì không có metadata để sinh generated class (GetCsCode cần attributes); catalog `RequiresConnection=true` đúng nghĩa. TaskNew throw sớm; handler error riêng khi cache rỗng & không service.
3. **projitems Compile entries KHÔNG có `<DependentUpon>`** (REF có — VS nest `.generated.cs` dưới `.cs`): helper dùng chung thêm bare Compile — diff class cosmetic chờ aP phê khi compare (nest chỉ là nhóm file trong Solution Explorer, work file mục 2 nói CLI bỏ qua nest).
4. Embeds payload 2 file **đã có sẵn từ bước 0** (projitems dòng 419-420) — work file mục 5 ghi "embed 2 payload" coi như đã nằm sẵn; chỉ thêm Compile handler + đăng ký.
5. Chọn entity "từ RetrieveAllEntities" — thực hiện qua `MetadataService.ReadEntitiesMetadataAsync(EntityFilters.Attributes)` (fill XrmHelper cache); SelectionPrompt chỉ liệt kê `SchemaName` (sort alphabetically) không kèm DisplayName (đơn giản + parse an toàn).

### Bài học

- `EntityFilters` resolve bằng `using Microsoft.Xrm.Sdk.Metadata;` (+ Dataverse.Client) — `using Microsoft.Xrm.Sdk.Query;` trong TaskNew vẫn CS0103 dù MetadataService.cs (Shared, cùng compilation) dùng cùng using OK; mirror bộ using TaskGenerator mới build qua.
- net48: `File.ReadAllTextAsync` không tồn tại → `FileHelper.ReadAllTextAsync` (rule 0.md: Shared chỉ dùng API netstandard2.0).
- SDK `EntityMetadata` nhiều property read-only (ObjectTypeCode/Attributes/PrimaryIdAttribute/CollectionSchemaName…) → reflection `GetProperty().SetValue` (pattern `MetadataExtensionsTests`); GetCsCode null-guard relationships/keys nên mock tối thiểu là đủ.
- Test `File.Exists("account.cs")` trên Windows trả TRUE do FS case-insensitive dù chỉ tạo `Account.cs` → assert qua `Directory.GetFiles` + `CollectionAssert` (so tên case-sensitive).
- Git Bash nuốt switch `/p:` của MSBuild.exe (chỉ in help) → dùng `-p:` + `MSYS_NO_PATHCONV=1`.
- cwd của Bash không persist qua các lệnh có `cd` trong compound — verify fixture dùng absolute path.
- Compare P.11-style chờ aP: tạo item LateBound bằng VSIX (Add New Item vào `Dev.AllInOne.Shared/Entities` bên TestAllInOne2) rồi diff trực diện với CLI side. Expected diffs: `Last Modified` stamp (codegen thời gian thật), VS-reformat khi mở file, DependentUpon (lệch #3), codegen drift nếu REF/TestAllInOne2 sinh bằng payload cũ hơn (AlternateKey ctor thêm gần đây). **Gate → `I.2.JsForm.md`.**

### COMPARE TestAllInOne2 (VSIX wizard) vs TestAllInOneCli (CLI) — CHỐT 2026-10-28

- **VSIX side**: aP tạo Account item bằng wizard vào `Dev.AllInOne.Shared/Entities`. Lần 1 VS 2026 **treo** phải end-process — chẩn đoán: KHÔNG phải code I.1 (VSIX không gọi `TemplateHandlers.RegisterAll` — grep 0 call sites; Wizard/ không reference engine — grep 0 files; handler mới chỉ là dead code trong dll VSIX). Treo giữa "Account.cs ghi xong + token replaced" và "Account.generated.cs chưa tồn tại" + projitems chưa kịp có entry → nghi EnvDTE COM (`TrackGeneratedProjectItem`/`TryGetProjectItemFullPath`) trên item vừa-add trong SHARED project system — pre-existing, chưa từng test wizard item vào folder của shproj (REF entities = output `devkit generator`). Lần 2 aP tạo lại THÀNH CÔNG. CLI side: global tool scaffold (lệnh trong báo cáo).
- **`Account.cs`: diff -w = 0** — VSIX-side bị VS 2026 reformat tab→space (1538→1700 bytes, diff class VS-reformat đã phê P.3/P.7); trước reformat **BYTE-IDENTICAL** với CLI.
- **`Account.generated.cs` (188KB, ~200 attributes, 278 dòng doc cả 2 bên)**: đợt compare đầu diff -w = 38 dòng (1 timestamp + 37 Lookup docs thiếu segment `- Relationship: {name}`) → root cause: wizard-effective codegen metadata là **per-entity `EntityFilters.All`** (FormItem dùng `EntityFilters.Entity` → `GetCsCode` tự fetch All khi Attributes==null), CLI dùng bulk cache `EntityFilters.Attributes` (không relationships → GetCsCode null-guard in doc thiếu relationship). **Fix handler: upgrade metadata qua `MetadataService.FetchEntityMetadataAsync(logicalName)` (All) khi có service** — mirror đúng wizard. Re-release + re-scaffold: `Skipped / Updated / Unchanged` (user file không đè, generated update tự động qua line-6 compare, projitems không đụng lại). **Re-compare: diff -w = đúng 1 dòng `Last Modified` (by-design).**
- **`.projitems`**: VSIX có `<DependentUpon>Account.cs</DependentUpon>` cho entry `.generated.cs`, CLI bare Compile — diff class cosmetic đã khai báo (lệch #3), chờ aP phê.
- **Kết luận compare: content-identical; còn lại timestamp (by-design) + whitespace (VS-reformat) + DependentUpon (chờ phê). Full suite sau fix vẫn 5017/5017; CLI 0/0; VSIX pass; re-release EXIT=0.**
