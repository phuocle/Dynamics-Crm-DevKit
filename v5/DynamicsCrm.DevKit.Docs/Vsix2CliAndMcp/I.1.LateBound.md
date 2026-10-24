# I.1 — LateBound Item Template (entity class late-bound)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/I.1.LateBound.md`
> **Điều kiện tiên quyết:** `0.md` hoàn tất (T4/TokenEngine/Engine). Làm sau khi xong nhóm P.
> **Trạng thái:** ☐ Chưa làm
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

- [ ] Handler + manifest (id `LateBound`, order I.1) + embed 2 payload.
- [ ] Câu hỏi tương tác: chọn entity — `SelectionPrompt` searchable từ `RetrieveAllEntities` (cache qua MetadataService); cho phép gõ tên trực tiếp khi `--offline` (bỏ validate).
- [ ] Báo cáo created/updated/skipped rõ ràng từng file.

## 6. CLI surface

```
devkit new --kind item --type LateBound --entity account --out <dir project> [--offline] [--force]
```
Hỏi–đáp: entity (search box) → (offline thì TextPrompt tự do).

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_item` `itemType="LateBound"`, `entity`, `outputDirectory`, `force`. Trả `createdFiles`/`updatedFiles`/`skippedFiles`.

## 8. Test & nghiệm thu

- [ ] Unit test (mock `EntityMetadata`): tạo đủ 2 file; chạy lần 2: `{Entity}.cs` skipped (giữ nguyên edit giả của user), `.generated.cs` update khi metadata đổi.
- [ ] Test normalize `public partial` → `internal partial`.
- [ ] Build CLI 0/0; test pass.

## 9. Bàn giao

- [ ] Báo cáo + user duyệt → qua `I.2.JsForm.md`.
