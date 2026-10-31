# I.16 — TsDialog Item Template (dialog TypeScript)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/I.16.TsDialog.md`
> **Điều kiện tiên quyết:** `0.md`.
> **Trạng thái:** ☑ ĐÓNG 2026-10-31 — aP duyệt sau COMPARE CHỐT 2/2 BYTE-IDENTICAL
> NGAY lần đầu (0 fix — sạch nhất track ngang I.5/I.8/I.14); commit + push theo lệnh aP.

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ItemTemplates/TsDialog.cs` |
| Payload | `ItemTemplates/CSharp/16.TsDialogItemTemplate/` — `TypeScript.ts` (`$TypeScript$`), `TypeScript.dialog.ts` (`$TypeScriptDialog$`) |
| Codegen (Shared sẵn) | `Shared/Logic/TsDialog.cs` (`GetTsDialogCodeAsync`), `Shared/Services/CodeGenService.cs` `GetDefaultTsDialogFileAsync` |

## 2. Template tạo ra gì

Với **dialog được chọn từ org** (không phải tên tự gõ tùy ý): `{UniqueName}.ts` (stub
`GetDefaultTsDialogFileAsync` — skeleton OnLoad/OkClick/CancelClick import
`./{UniqueName}.dialog`) + `{UniqueName}.dialog.ts` (codegen `GetTsDialogCodeAsync` —
namespace `DevKitDialog.{UniqueName}` với interface `IDialog` + class
`DialogFormBase`, sinh từ FormXml của dialog). VSIX thêm DependentUpon (twin lồng
dưới user file) — VSIX-only, CLI không có.

## 3. Logic wizard hiện tại (VERIFIED — handoff dự đoán SAI 2 điểm)

- **Wizard CẦN kết nối Dataverse** (work file cũ ghi "không cần kết nối" — SAI):
  `FormItem(ItemType.TsDialog)` combo "Dialog" đổ trên `Connection_Connected` bằng
  `MetadataService.GetEntityDialogFormsAsync()` (systemform type=Dialog(8), active,
  unmanaged, order by Name); user chọn theo display Name.
- `DialogClassName = SelectedDialogForm.UniqueName` (KHÔNG phải Name) — cả 2 file
  (`$DialogName$` = `$DialogName$.ts` / `$DialogName$.dialog.ts` trong vstemplate) và
  tên namespace/class trong codegen đều từ UniqueName; header comment dùng display Name.
- RunFinished: twin `WriteTargetFileIfChangedAsync` (ordinal compare, BOM-stripped
  read); user stub chỉ ghi khi chưa tồn tại (`!IsDialogTsExisting`). **KHÔNG có
  RefreshOptionSet** (khác TsWebApi I.15).
- `GetTsDialogCodeAsync` parse FormXml cục bộ (header/tabs/footer/querystringparameter;
  classid qua `ControlDialogClassId`, param qua `GetParameterControlType`) — org-call
  duy nhất là fetch danh sách dialog.

## 4. Thiết kế source of truth

- Handler `TsDialogItemTemplateHandler` (Shared/Templates/Handlers/, pattern I.15):
  resolve qua `MetadataService.GetEntityDialogFormsAsync` → match `--name` theo
  `SystemForm.Name` (OrdinalIgnoreCase, FirstOrDefault); **KHÔNG có cache dialog trong
  XrmHelper** → không service = lỗi dừng
  `template 'TsDialog': requires a Dataverse connection to read the org's dialogs. ...`.
  Seam test: `protected virtual GetDialogFormsAsync` (fake seed trong tests; precedent
  seam IOrganizationService của VSIX 2019).
- Compare twin = **Ordinal** (đúng `WriteTargetFileIfChangedAsync` của wizard — khác
  `.webapi.ts` dùng `Helper.IsTheSame` vì có precedent TaskGenerator; `.dialog.ts`
  không có generator precedent). Whitespace-only edit = changed → rewritten.
- Encoding: cả 2 payload không BOM → viết bằng `ForceWriteAllTextWithoutUTF8Async`.
- Catalog: `RequiresConnection false→true` (như I.11) + Description sửa thành
  `Dialog TypeScript for a dialog ({Dialog}.ts + {Dialog}.dialog.ts)`.

## 5. Việc phải làm (CLI)

- [x] Handler + manifest (id `TsDialog`, order I.16) + payload embed đã có sẵn từ
      bước 0 trong `.projitems` (dòng `Resources.templates.item.tsdialog.*`).
- [x] Prompt: entity prompt loại trừ TsDialog; prompt riêng "Select a dialog"
      (SelectionPrompt searchable trên danh sách dialog Name; list rỗng → lỗi
      `--name: required — the connected instance has no active dialogs to pick.` =
      OK disabled của wizard). Gate keeper: `--name <dialog-name>` required.

## 6. CLI surface

```
devkit new-item --type TsDialog --name <dialog-name> --project <project> --out <dir>
```

Demo live 2026-10-31 (TestAllInOneCli, `.env` client-credential, org có đúng 1 dialog):

```
║Action                      File
║Created                     ...\entities\pl_dataversedialogbuilder_demo.ts
║Created                     ...\entities\pl_dataversedialogbuilder_demo.dialog.ts
║
║Template 'TsDialog': 2 created, 0 updated, 0 skipped.
```
Rerun: `Skipped` (stub) + `Unchanged` (twin). Byte: stub 635B / twin 10,746B, cả hai
KHÔNG BOM; header `pl_dataversedialogbuilder_demo.dialog.ts - Dataverse Dialog Builder
Demo Dialog ...` (display Name), namespace `DevKitDialog.pl_dataversedialogbuilder_demo`
(UniqueName).

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_item` `itemType="TsDialog"`.

## 8. Test & nghiệm thu

- [x] Unit test: 11 tests (`TsDialogItemTemplateHandlerTests`) — manifest 2 file,
      catalog ready + RequiresConnection=true, happy path (stub skeleton + twin
      DevKitDialog), IDialog inventory theo thứ tự header/body/footer/params + super()
      args, rerun Skipped/Unchanged, twin Updated chỉ khi content đổi,
      whitespace-only → Updated (pin Ordinal), force overwrite stub, no-service
      connection error, unknown dialog `--name 'Nope': dialog not found...`,
      match name case-insensitive.
- [x] Build CLI 0/0 (2 warning CA2022 pre-existing ở test project, không phải file I.16).
- [x] Full 5 suites: **Cli 5245** (= 5234 + 11) / **Tool 253** / **Vsix 571** /
      **Analyzers 310** / **Vsix.2019 48** — tất cả Pass. Baseline sau I.16 = 5245.
- [x] build-release-only: `devkit --version` = 4.44.44.44 Build **31.12.2026 23.59.59**;
      4 artifacts trong `Published/4.44.44.44/`; Const.cs placeholder restored;
      restore 21 file chạy; sweep "31.12.2026 23.59.59" trong 4 source trees = 0 hit.
- [x] Demo live (trên).

## 9. Bàn giao

- [x] aP tạo wizard TsDialog từ VSIX (TestAllInOne2/WebResourceTs/entities) → `cmp`
      byte với CLI side: **COMPARE CHỐT 2026-10-31 — 2/2 BYTE-IDENTICAL NGAY lần đầu**
      (wizard `TestAllInOne2/Dev.AllInOne.WebResourceTs/entities/` = CLI
      `TestAllInOneCli/.../entities/`, cùng chỗ không lệch vị trí):
      `pl_dataversedialogbuilder_demo.ts` 635 B md5 `f9c0c801…` +
      `pl_dataversedialogbuilder_demo.dialog.ts` 10,746 B md5 `e22e5c33…` — cả 2 md5
      khớp 2 bên, không BOM, 0 fix (sạch nhất track ngang I.5/I.8/I.14).
- [x] aP duyệt + lệnh commit.md (split feat/test/fixtures/docs/build, c1 worktree-verify) + push.
- [x] Qua `I.17.JsDialog.md` (handoff cuối session I.16).

## 10. Lệch/khác biết (deviations)

- Work file gốc (§3/§4) giả định name-only + offline — **đã sửa** theo wizard thật:
  chọn dialog từ org, RequiresConnection=true, không offline fallback.
- Tên file/namespace từ **UniqueName** của SystemForm (không phải `--name`) — `--name`
  chỉ là chìa khóa tra cứu theo display Name (match case-insensitive, FirstOrDefault
  khi trùng).
- Interactive prompt đọc danh sách dialog một lần cho choices + handler đọc lại một
  lần khi resolve (không cache chung — wizard dùng selection từ form; CLI không có
  cache dialog để chia sẻ).
