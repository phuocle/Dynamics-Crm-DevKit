# I.17 — JsDialog Item Template (dialog JavaScript)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/I.17.JsDialog.md`
> **Điều kiện tiên quyết:** `0.md`.
> **Trạng thái:** ☑ ĐÓNG+COMMITTED 2026-10-31 — aP duyệt sau COMPARE CHỐT **3/3
> BYTE-IDENTICAL NGAY lần đầu** (0 fix — sạch nhất track ngang I.5/I.8/I.14/I.16);
> 5 commits feat/test/fixtures/docs/build (c1 worktree-verified), NOT pushed
> (chờ lệnh push aP).

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ItemTemplates/JsDialog.cs` |
| Payload | `ItemTemplates/CSharp/17.JsDialogItemTemplate/` — `JavaScript.js` (`$JavaScript$`), `JavaScript.dialog.js` (`$JavaScriptDialog$`), `JavaScript.d.ts` (`$TypeScriptDialog$`) |
| Codegen (Shared sẵn) | `Shared/Logic/JsDialog.cs` (`GetJsDialogCodeAsync` → tuple `(code, dts)`), `Shared/Services/CodeGenService.cs` `GetDefaultJsDialogFileAsync` |

## 2. Template tạo ra gì

Với **dialog được chọn từ org** (không phải tên tự gõ tùy ý) — 3 file, TẤT CẢ tên từ
`SystemForm.UniqueName`: `{UniqueName}.js` (stub `GetDefaultJsDialogFileAsync` —
skeleton OnLoad/OkClick/CancelClick, `@ts-check`, reference
`./{UniqueName}.dialog.d.ts`) + `{UniqueName}.dialog.js` (codegen `GetJsDialogCodeAsync`
code — `@ts-nocheck` + IIFE `DevKitDialog.{UniqueName}` class `LoadFormDialog` nhận
mảng control id từ FormXml) + `{UniqueName}.dialog.d.ts` (cùng call — `dts` của
tuple: `declare namespace DevKitDialog` + interface `IDialog` + class declaration).
**File thứ 3 là `.dialog.d.ts`, KHÔNG phải `.d.ts`** (vstemplate `TargetFileName`
`$DialogName$.dialog.d.ts` + wizard RunFinished `declarationFileName` — handoff và
mô tả catalog cũ ghi `{Name}.d.ts` là SAI). VSIX thêm DependentUpon: cả dialog.js
lẫn dialog.d.ts lồng dưới .js — VSIX-only, CLI không có.

## 3. Logic wizard hiện tại (VERIFIED — work file §3 SAI lần thứ 2 liên tiếp)

- **Wizard CẦN kết nối Dataverse** (work file §3 ghi "thuần offline" — SAI, cùng
  lỗi hệt I.16): `FormItem(ItemType.JsDialog)` combo "Dialog" đổ trên
  `Connection_Connected` bằng `MetadataService.GetEntityDialogFormsAsync()`; user
  chọn theo display Name; `RunStarted` gọi `GetJsDialogCodeAsync(form.ServiceClient,
  SelectedDialogForm)` + `new CodeGenService(form.ServiceClient).GetDefaultJsDialogFileAsync(...)`.
- `DialogClassName = SelectedDialogForm.UniqueName` — cả 3 file (`$DialogName$`) và
  tên namespace/class trong codegen đều từ UniqueName.
- Tokens: `$JavaScriptDialog$` = code, `$TypeScriptDialog$` = dts (cùng một call),
  `$JavaScript$` = stub, `$DialogName$` = UniqueName. RunStarted tính codegen trước
  rồi mới stub (codegen fail → không ghi file nào).
- RunFinished: twin `.dialog.js` + `.dialog.d.ts` ghi qua `WriteTargetFileIfChangedAsync`
  (ordinal compare); stub `.js` chỉ ghi khi chưa tồn tại (`!IsDialogJsExisting` +
  `GetGeneratedProjectItem == null`). **KHÔNG có RefreshOptionSet** (như TsDialog I.16).
- `GetJsDialogCodeAsync` parse FormXml cục bộ (header/tabs/footer/querystringparameter;
  classid qua `ControlDialogClassId`, param qua `GetParameterControlType`) — org-call
  duy nhất là fetch danh sách dialog.

## 4. Thiết kế source of truth

- Handler `JsDialogItemTemplateHandler` (Shared/Templates/Handlers/, mirror
  TsDialogItemTemplateHandler I.16): resolve qua
  `MetadataService.GetEntityDialogFormsAsync` → match `--name` theo `SystemForm.Name`
  (OrdinalIgnoreCase, FirstOrDefault); **KHÔNG có cache dialog trong XrmHelper** →
  không service = lỗi dừng
  `template 'JsDialog': requires a Dataverse connection to read the org's dialogs. ...`.
  Seam test: `protected virtual GetDialogFormsAsync`.
- Compare cả 2 twin = **Ordinal** (đúng `WriteTargetFileIfChangedAsync` của wizard —
  không có CLI generator tiền lệ cho `.dialog.js`/`.dialog.d.ts`).
  Whitespace-only edit = changed → rewritten.
- Encoding: cả 3 payload không BOM → viết bằng `ForceWriteAllTextWithoutUTF8Async`.
- Manifest 3 file theo thứ tự vstemplate: `.js` (user, IsGenerated=false) →
  `.dialog.js` (generated) → `.dialog.d.ts` (generated; ResourceName
  `Resources.templates.item.jsdialog.JavaScript.d.ts`, TargetFileName
  `$DialogName$.dialog.d.ts`).
- Catalog: `RequiresConnection false→true` + Description sửa thành
  `Dialog JavaScript for a dialog ({Dialog}.js + {Dialog}.dialog.js + {Dialog}.dialog.d.ts)`
  (mô tả cũ sai cả shape lẫn thiếu connection).

## 5. Việc phải làm (CLI)

- [x] Handler + manifest (id `JsDialog`, order I.17) + embed payload đã có sẵn trong
      `.projitems` (`Resources.templates.item.jsdialog.*` dòng 471-473); thêm
      `<Compile>` entry cho handler mới (quên là CS0246).
- [x] TaskNewItem: gate keeper `--name <dialog-name>` (nhánh riêng JsDialog cạnh
      TsDialog); `isJsDialog` loại khỏi entity prompt; prompt "Select a dialog"
      **GỘP chung** với TsDialog (điều kiện `(isTsDialog || isJsDialog)` — cùng list
      `GetEntityDialogFormsAsync`, không copy nhánh).
- [x] Register trong `TemplateHandlers.RegisterAll` (sau TsDialog).

## 6. CLI surface

```
devkit new-item --type JsDialog --name <dialog-name> --project <project> --out <dir>
```

Demo live 2026-10-31 (TestAllInOneCli, `.env` client-credential, org có đúng 1 dialog):

```
║Action                      File
║Created                     ...\entities\pl_dataversedialogbuilder_demo.js
║Created                     ...\entities\pl_dataversedialogbuilder_demo.dialog.js
║Created                     ...\entities\pl_dataversedialogbuilder_demo.dialog.d.ts
║
║Template 'JsDialog': 3 created, 0 updated, 0 skipped.
```
Rerun: `Skipped` (stub) + `Unchanged` + `Unchanged` (2 twin) — `0 created, 0 updated,
3 skipped`. Byte: stub 675 B / twin 2,493 B / d.ts 7,884 B, cả 3 KHÔNG BOM. Non-TTY
gate: `--type JsDialog` thiếu `--name` → MỘT lỗi
`required arguments missing: --name <dialog-name>.`

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_item` `itemType="JsDialog"`.

## 8. Test & nghiệm thu

- [x] Unit test: 11 tests (`JsDialogItemTemplateHandlerTests`) — manifest 3 file,
      catalog ready + RequiresConnection=true, happy path 3 file (stub skeleton +
      twin IIFE + typing IDialog) + BOM check từng file, IDialog inventory theo thứ tự
      header/body/footer/params + id-list `.dialog.js` cùng thứ tự, rerun
      Skipped/Unchanged/Unchanged, twin Updated chỉ khi content đổi (sibling
      Unchanged — per-file compare), whitespace-only → Updated (pin Ordinal), force
      overwrite stub, no-service connection error, unknown dialog
      `--name 'Nope': dialog not found...`, match name case-insensitive.
- [x] Build CLI 0/0 (2 warning CA2022 pre-existing ở test project, không phải file I.17).
- [x] Full 5 suites: **Cli 5256** (= 5245 + 11) / **Tool 253** / **Vsix 571** /
      **Analyzers 310** / **Vsix.2019 48** — tất cả Pass. Baseline sau I.17 = 5256.
- [x] build-release-only: `devkit --version` = 4.44.44.44 Build **31.12.2026 23.59.59**;
      4 artifacts trong `Published/4.44.44.44/`; Const.cs placeholder restored;
      restore 21 file chạy; sweep "31.12.2026 23.59.59" trong 5 source trees = 0 hit.
- [x] Demo live (trên).

## 9. Bàn giao

- [x] aP tạo wizard JsDialog từ VSIX → `cmp` byte với CLI side:
      **COMPARE CHỐT 2026-10-31 — 3/3 BYTE-IDENTICAL NGAY lần đầu, 0 fix**
      (wizard `TestAllInOne2/Dev.AllInOne.WebResource/entities/` — aP chọn
      project WebResource **JS** cho item JsDialog; CLI
      `TestAllInOneCli/Dev.AllInOne.WebResourceTs/entities/` — vị trí folder
      không vào nội dung vì codegen lấy tên từ UniqueName dialog):
      `pl_dataversedialogbuilder_demo.js` 675 B md5 `856f2767…` +
      `pl_dataversedialogbuilder_demo.dialog.js` 2,493 B md5 `c16e6de1…` +
      `pl_dataversedialogbuilder_demo.dialog.d.ts` 7,884 B md5 `efe9df4f…` —
      cả 3 md5 khớp 2 bên, không BOM.
      Wizard csproj housekeeping (family I.1#3): `<None Update>`
      `pl_dataversedialogbuilder_demo.dialog.d.ts` + `.dialog.js` cùng
      `<DependentUpon>pl_dataversedialogbuilder_demo.js` — đúng recon
      (cả 2 twin lồng dưới .js).
- [x] aP duyệt + lệnh commit.md (split feat/test/fixtures/docs/build, c1
      worktree-verify) — NOT pushed (chờ lệnh push aP).
- [ ] Qua `I.18.Report.md` (work unit cuối lộ trình I.*).

## 10. Lệch/khác biết (deviations)

- Work file gốc §2/§3 giả định name-only + offline + `{Name}.d.ts` — **đã sửa** theo
  wizard thật: chọn dialog từ org, RequiresConnection=true, file thứ 3 là
  `{Dialog}.dialog.d.ts` (3 file cùng từ UniqueName), `.d.ts` payload nhập token
  `$TypeScriptDialog$` (NHỊP token TS dù file JS-family).
- Lỗi connection work-file lặp lại lần thứ 2 liên tiếp (I.16 rồi I.17) — handoff
  đọc code wizard trước khi tin.
- Mô tả catalog cũ sai 2 điểm (shape `{Name}.d.ts` + RequiresConnection=false) —
  sửa theo bản chất wizard.
