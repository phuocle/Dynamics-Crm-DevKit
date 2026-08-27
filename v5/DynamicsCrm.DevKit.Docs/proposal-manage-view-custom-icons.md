# Proposal: manage_view — Custom Icons (imageproviderwebresource) + Dual Backup revert

Ngày: 2026-08-27 · Trạng thái: **TẤT CẢ Q1–Q6 ĐÃ aP CHỐT (mục 6) — CHỜ aP DUYỆT TRIỂN KHAI — CHƯA CODE**

Nguồn tham chiếu:
- MS Learn: https://learn.microsoft.com/en-us/power-apps/maker/data-platform/display-custom-icons-instead
- Production tool (đang chạy): `D:\azure\phuocle\d365icons\D365Icons\src2\PL.D365IconsAndTooltips.CustomAction\Save.cs`
- Schema: `DynamicsCrm.DevKit.Shared/Resources/xsd/LayoutXml.xsd`

---

## 1. Cơ chế Custom Icons (tổng hợp MS docs + production Save.cs)

Icon hiển thị trong grid view qua **2 thuộc tính trên `<cell>` trong LayoutXML**:

```xml
<cell name="opportunityratingcode" width="125"
      imageproviderwebresource="$webresource:new_/js/ratingicons.js"
      imageproviderfunctionname="displayIconTooltip" />
```

- `LayoutXml.xsd` (Shared Resource) **đã khai báo sẵn** 2 attribute này ở cell level (`LayoutXml.xsd:38-39`). Grid level còn có `iconrenderer` (chưa dùng tới).
- **View config chỉ chứa 2 giá trị: tên JS webresource + tên function** (aP nhấn mạnh). **Icon images KHÔNG nằm trong view/layoutxml** — chúng do JS function return theo tên (`[imgName, tooltip]`) lúc runtime. manage_view không truyền, không validate icon images; P6 fast-fail chỉ check **JS webresource** tồn tại.
- **`$webresource:` prefix**: production Save.cs (đang chạy production) luôn ghi `imageproviderwebresource="$webresource:{js_webresource_name}"`. → **aP chốt: Save.cs = source of truth (production-proven), KHÔNG probe** → format LƯU TRỮ là `$webresource:{name}`. Nhưng `$webresource:` là khái niệm AI dễ hiểu sai → **AI-facing contract = truyền tên webresource plain** (`new_/js/ratingicons.js`); tool tự `StartsWith` check và add prefix khi lưu (xem P6). Instructions KHÔNG yêu cầu AI viết prefix.
- **JS contract** (MS docs):
  - Signature: `function f(rowData, userLCID)` → return **array** `[imgName, tooltip]`.
  - `rowData` là **JSON string** → `JSON.parse(rowData)` → field value ở key `{logicalname}_Value` (vd `str.opportunityratingcode_Value`).
  - Option set: so sánh **integer value**, không so label (tránh localization issue).
  - Unified Interface cho phép return **Promise** (async retrieve OK); **cấm sync XHR**.
  - `imgName` = **tên image web resource** (không phải URL). Icon khuyến nghị **16x16** (ảnh lớn bị scale down), type PNG/JPEG/GIF.
  - Icon render trên model-driven app, mobile, App for Outlook; **không** khi mobile offline.
  - Primary column: icon **thay** icon mặc định của row; column khác: icon phụ đi kèm.
- **Save.cs flow** (production-proven): retrieve layoutxml hiện tại → parse XDocument → cleanup pass (gỡ attr icon cũ cùng webresource prefix trên mọi cell) → set attr lên cell theo `name` → strip attr rỗng → update **cả layoutxml lẫn fetchxml** → PublishAll. Hỗ trợ cả savedquery (admin ctx) lẫn userquery (owner ctx).

---

## 2. Hiện trạng manage_view — đã support một phần

| Đã có | Vị trí |
|---|---|
| `cell_updates_json` set/remove **bất kỳ** cell attr — gồm `imageproviderwebresource`/`imageproviderfunctionname` | `ViewXmlHelper.ApplyCellAttributeUpdates` (`ViewXmlHelper.cs:263`) |
| Warning khi cell có 1 trong 2 attr icon mà thiếu attr kia (pair check) | `ViewXmlHelper.cs:309-319` |
| `detail` output expose `imageProviderWebResource`/`imageProviderFunctionName` per column | `ParseViewColumns` (`ManageViewTool.cs:889-890`), `ViewColumnEntry` |
| Instructions đã có section "Custom Icons in Views" (JS sample + rules + workflow) | `InstructionResources.cs:562-577` |
| Param description của `cell_updates_json` đã nhắc `imageproviderwebresource` | `ManageViewTool.cs:63` |

## 3. Gaps

- **G1 — Update với fetchxml mới làm MẤT icon config**: branch regen (`ManageViewTool.cs:398-435`) gọi `BuildLayoutXmlFromFetch` → `BuildCell` chỉ sinh `name/width/disableSorting` (`ManageViewTool.cs:1745-1753`) → mọi cell attr hiện hữu (`imageproviderwebresource`, `imageproviderfunctionname`, `ishidden`, `label`, width custom...) bị xóa sạch. Đây chính là task #3 của aP: regen phải đọc layoutxml hiện tại mà giữ lại icon/function.
- **G2 — Backup chỉ có FetchXML → undo mất icon**: `ViewBackupHelper.SaveBackup` chỉ ghi 1 file `.fetchxml.xml` (`ViewBackupHelper.cs:9-32`); undo regen LayoutXML từ fetch backup (`ManageViewTool.cs:743-748`) → icon config mất vĩnh viễn sau undo. Task #2: revert về cặp backup fetchxml + layoutxml.
- **G3 — Undo chỉ nhận 1 đường dẫn**: `fetchxml` param nhận `.fetchxml.xml` path; chưa có chỗ nhận `.layoutxml.xml` path để restore nguyên văn.
- **G4 — fetchxml + cell_updates_json loại trừ nhau**: truyền cả hai thì nhánh `else` không chạy → `cell_updates_json` bị **bỏ qua lặng lẽ** (`ManageViewTool.cs:398` vs `437`). Sau khi có merge-carry-over, combo này trở nên có nghĩa (regen → merge → patch).
- **G5 — `$webresource:` prefix**: format lưu trữ cần prefix (Save.cs source of truth), nhưng AI-facing contract là plain name. Tool hiện không normalize → AI truyền plain name sẽ lưu thiếu prefix. Fix bằng auto-prefix trong tool (P6) — không đẩy gánh nặng prefix cho AI.

---

## 3.5. Trả lời câu hỏi aP: flow "tạo webresource B + function C → add icon cho column" có chạy đúng không?

**Bước 1** — user: *"tạo webresource B với function C support icons và tooltips"*:
- AI gọi `manage_webresource` action='create' (name=B, type=js, file_path=...). Tool description của manage_webresource (`ManageWebResourceTool.cs:67-83`) **không nhắc gì** tới icon contract → AI chỉ viết đúng function nếu đã đọc `docs://instructions_for_views`.
- (Icon images mà function C return theo tên — nếu cần tạo — cũng qua `manage_webresource`, nhưng đó là chuyện của bước 1, **không liên quan manage_view**.)

**Bước 2** — user: *"add icon cho column X với webresource B và function C"*:
```
manage_view(action='update', view_id='...', cell_updates_json='[{
  "cell_name": "X",
  "set_attributes": {
    "imageproviderwebresource": "B",
    "imageproviderfunctionname": "C"
  }
}]')
```
(AI truyền **tên plain** — tool tự thêm `$webresource:` khi lưu, xem P6.)
- **Đã có** (không cần code mới): `update` + `cell_updates_json` set_attributes ghi đúng 2 attr lên đúng cell; pair warning bắt thiếu cặp; `detail` đọc lại verify được.
- **Sẽ SAI nếu không sửa** — 3 điểm AI có thể vấp:
  1. **Prefix**: format lưu trữ cần `$webresource:` (Save.cs) nhưng AI chỉ truyền plain name → tool auto-prefix (P6). Instructions giữ ví dụ plain name + 1 rule ngắn "pass the plain web resource name — the tool adds the storage prefix" (P5.2).
  2. **Thứ tự workflow**: nếu user yêu cầu add icon khi webresource chưa có, AI phải tự biết tạo webresource trước — instructions có Workflow section nhưng cần 1 dòng nhấn "icon config trỏ tới webresource theo TÊN — webresource phải tồn tại trước khi gắn".
  3. **JS contract ở bước 1**: manage_webresource không trỏ tới icon contract → thêm 1 dòng pointer (P5.3).

→ **Kết luận: CÓ cần vá instruction phần view** — nhưng chỉ vá ngắn 3 điểm trên, không viết lại toàn bộ (section Custom Icons hiện có đã đủ nền: JS sample, `{col}_Value`, int optionset, LCID, workflow 4 bước).

---

## 4. Đề xuất thay đổi

### P1 — Revert dual backup: `BackupPath` → `FetchXmlBackupPath` + `LayoutXmlBackupPath`

**`ViewBackupHelper.SaveBackup`** — đổi signature:

```csharp
// hiện tại
SaveBackup(entityName, viewId, viewName, currentFetchXml, workspaceFolder) -> string (1 path)
// đề xuất
SaveBackup(entityName, viewId, viewName, currentFetchXml, currentLayoutXml, workspaceFolder)
    -> (string FetchBackupPath, string LayoutBackupPath)
```

- Ghi 2 file cùng timestamp: `{viewId:N}_{yyyyMMddHHmmss}.fetchxml.xml` + `{viewId:N}_{yyyyMMddHHmmss}.layoutxml.xml` (cùng folder `.devkit/manage_view/{entity}/`, giữ convention hiện tại: không prefix entity, dry-run skip backup).
- Header comment của từng file cập nhật hướng dẫn restore bằng **cặp** path.
- Callers: `HandleUpdate` (`:524`), `HandleRename` (`:608`), `HandleUndo` pre-restore (`:809`) — rename giữ backup đồng nhất (ghi cả 2 file dù chỉ đổi name).

**`UpsertViewResult`** — đổi DTO:

```csharp
// xóa
[JsonPropertyName("backupPath")] public string BackupPath { get; set; }
// thêm
[JsonPropertyName("fetchXmlBackupPath")] public string FetchXmlBackupPath { get; set; }
[JsonPropertyName("layoutXmlBackupPath")] public string LayoutXmlBackupPath { get; set; }
```

### P2 — Undo restore nguyên văn cả cặp (không regen) — ✅ aP chốt Q2

- **aP: undo BUỘC truyền cả 2 file đã backup** — convention `{viewId}_{timestamp}.fetchxml.xml` + `{viewId}_{timestamp}.layoutxml.xml`.
- Param mới: `layoutxml` (string, default `""`) — "undo: .layoutxml.xml backup file path". Param `fetchxml` giữ nguyên vai trò (.fetchxml.xml path).
- Thiếu 1 trong 2 → error ngay, hint trỏ tới cặp backup trong `.devkit/manage_view/{entity}/`. Backup cũ 1-file (ghi trước revert) không restore được layout — hint nói rõ.
- `HandleUndo`:
  - Bắt buộc cả 2 path; check extension đúng (`.fetchxml.xml` / `.layoutxml.xml`), file tồn tại, non-empty sau strip comments.
  - **Xóa** `EnsureLayoutBuildableFetchXml` + `BuildLayoutXmlFromFetch` khỏi undo — restore `layoutxml` nguyên văn từ backup → icon config sống lại.
  - Giữ validation: `ValidateLayoutXml` + `ValidateFetchXml` + `ValidateSync` + server `ValidateFetchXmlExpression` (schema XSD đã có 2 attr icon nên backup có icon vẫn pass).
  - Error text/hint cập nhật: bỏ "LayoutXML is regenerated from the FetchXML backup", đổi thành hướng dẫn cặp file. Test 17 hiện tại ("undo rejects .layoutxml.xml") sẽ **đổi ngữ nghĩa**: `.layoutxml.xml` giờ là input hợp lệ của param `layoutxml` — reject chỉ khi truyền sai param.

### P3 — Regen LayoutXML giữ lại cell attrs hiện hữu (task #3) — ✅ aP chốt Q1: carry TẤT CẢ

Trong `HandleUpdate` nhánh fetchxml mới: sau khi regen, **merge carry-over** từ `currentLayoutXml` — với mỗi cell mới có `name` trùng cell cũ (case-insensitive, gồm cả `alias.field`), copy **TẤT CẢ attr của cell cũ (trừ `name`)** sang cell mới, ghi đè giá trị regen.

Lý do phạm vi "tất cả" (theo hướng aP): `label`, `desc`, `ishidden`, `width`, 2 attr icon **đều là thứ user set được** qua `cell_updates_json` hôm nay (patch generic) → regen mà xóa = mất dữ liệu người dùng. Cell mới (không có trong layout cũ) giữ default của regen (width theo data type, disableSorting cho link-entity). Implement trong `ViewXmlHelper` (vd `MergeCellAttributes(regeneratedXml, currentLayoutXml)` — copy mọi attr trừ `name`) để unit test độc lập.

Danh sách carry (theo `LayoutXml.xsd:29-39`, cell level — copy tất cả trừ `name`):
`width`, `LabelId`, `label`, `desc`, `ishidden`, `disableSorting`, `disableMetaDataBinding`, `cellType`, `imageproviderwebresource`, `imageproviderfunctionname`.
(`name` = match key, không copy. Grid/row attrs — `object`, `jump`, `select`, `icon`, `preview`, `iconrenderer`, ... — do regen sinh mới, không carry.)

Org survey bổ sung (2026-08-27, DEVKITV4) — chứng minh carry-all là ĐÚNG, không thừa:
- `label=` / `desc=`: **0 view** dùng (legacy, schema-only).
- `cellType=`: **10+ views** dùng — vd `Email Templates Advanced Find View`: `<cell name="templatetypecode" cellType="Crm.EmailTemplateGlobal"/>`, `<cell name="languagecode" cellType="Crm.LanguageCodeFormat"/>` → **formatter/renderer hint** cho grid (render languagecode thành tên ngôn ngữ thay vì int thô). Không set được qua UI; chỉ có trên system views đặc biệt.
- `disableMetaDataBinding=`: **10+ views** dùng — vd `Sales Process Subgrid`: `disableMetaDataBinding="1"` đi kèm `LabelId="query.{viewid}.cell.{col}.label"` → nghĩa là **không bind header từ attribute metadata**, lấy label từ localized label của view thay thế.
→ Nếu regen xóa 2 attr này trên các view đó: languagecode hiển thị int thô, header subgrid mất label. Carry-all bảo vệ đúng cả các view system đặc biệt này.

### P4 — KHÔNG combo fetchxml + cell_updates_json — ✅ aP chốt Q4

- aP: **NO combo** — 1 call chỉ 1 hành động ("có thể tạo action mới, ko kết hợp").
- Fix G4: truyền **cả** `fetchxml` lẫn `cell_updates_json` → **error rõ ràng** ("pass either fetchxml (rebuild grid) or cell_updates_json (patch cells) — not both"), thay vì bỏ qua lặng lẽ như hiện nay.
- Icon update **không cần action mới**: `cell_updates_json` đã cover đủ (set/remove 2 attr icon + label/desc/ishidden...). Nếu sau này muốn action chuyên biệt (vd `set_icon`) thì tách riêng — ngoài scope đợt này.

### P5 — Instructions `docs://instructions_for_views` cập nhật (task #5, giữ ngắn gọn)

**P5.1 — Section Auto Backup + Rollback** viết lại cho cặp backup:
- "update/rename/undo auto-back-up FetchXML **and LayoutXML** to `.devkit/manage_view/{entity}/`"
- "undo: pass **both** `fetchxml`=<.fetchxml.xml path> and `layoutxml`=<.layoutxml.xml path> from the response"

**P5.2 — Section Custom Icons** vá 3 điểm (không viết lại):
1. Giữ ví dụ JSON với **plain name** (`"imageproviderwebresource": "new_/js/ratingicons.js"`) + thêm 1 rule: "Pass the plain web resource name — the tool stores it with the required `$webresource:` prefix automatically. A value already starting with `$webresource:` is kept as-is."
2. Thêm 2 rule ngắn vào Rules list:
   - "The view references only the **JS web resource + function name** (the function returns image names at runtime) — create the JS web resource FIRST (`manage_webresource`), then attach it to the cell (`manage_view`)."
   - "Return shape: `return [imgName, tooltip]` — imgName is the image **web resource name** (not a URL); async OK (may return a Promise), never sync XHR."
3. Thêm 1 rule về carry-over (sau P3): "update with a new fetchxml keeps icon attrs on surviving columns; columns dropped from the fetchxml lose their icon config."

Nguyên tắc: `$webresource:` **không xuất hiện** như thứ AI phải tự viết — chỉ nhắc 1 lần trong rule auto-prefix để AI hiểu khi đọc `detail` thấy format có prefix.

**P5.3 — Pointer ở manage_webresource** (1 dòng trong tool Description, `ManageWebResourceTool.cs:67-83`):
- "- Creating a JS web resource for **view icons/tooltips** → the function contract (rowData/`{col}_Value`, `[imgName, tooltip]` return) is in docs://instructions_for_views — read it first"
- Lý do: bước "tạo webresource B với function C" xảy ra trong context manage_webresource; AI cần biết phải đọc contract từ đâu.

**P5.4 — Tool description `manage_view`** (`ManageViewTool.cs:44-54`): sửa bullet undo ("result's fetchXmlBackupPath + layoutXmlBackupPath point to the pre-change backup; pass both to action='undo'") + param descriptions (`fetchxml` đổi undo note). `cell_updates_json` giữ ví dụ plain name — không đưa `$webresource:` vào param description.

### P6 — Normalize + validate giá trị icon attrs (trong ApplyCellAttributeUpdates)

- **Normalize `$webresource:` prefix — cơ chế chính, AI không cần biết prefix** (aP: "mặc định AI truyền tên webresource, StartsWith check: có thì giữ, không có thì tự add"):
  ```csharp
  // pseudo — set imageproviderwebresource
  if (!value.StartsWith("$webresource:", StringComparison.OrdinalIgnoreCase))
      value = "$webresource:" + value;
  ```
  Prefix rỗng (`"$webresource:"` → xóa attr, theo Save.cs cleanup).
- `imageproviderfunctionname`: non-empty, no whitespace → error (hiện chỉ có pair warning).
- **Verify webresource tồn tại — FAST FAIL** (✅ aP chốt Q6): trước khi patch, query `webresource` theo tên (đã strip prefix); **không tìm thấy → error ngay** ("Web resource '{name}' not found — create it first with manage_webresource action='create'"). Lưu ý kỹ thuật: check này cần `serviceClient` → đặt ở `ManageViewTool.HandleUpdate` TRƯỚC khi gọi `ViewXmlHelper.ApplyCellAttributeUpdates` (ViewXmlHelper là static, không có service access); chỉ check khi instruction set `imageproviderwebresource`. Normalize prefix (bước trên) chạy trong cùng chỗ này trước khi patch — hoặc đưa normalize vào `ParseCellUpdates`/`NormalizeCellUpdateNames` cho gọn.

---

## 5. Files bị ảnh hưởng

| File | Thay đổi |
|---|---|
| `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageViewTool.cs` | Undo signature + restore cặp (P2); update regen merge carry-over (P3); error khi truyền cả fetchxml+cell_updates_json (P4); normalize prefix + fast-fail webresource check (P6); DTO fields; tool/param descriptions |
| `DynamicsCrm.DevKit.Cli/Mcp/Tools/Helper/ViewBackupHelper.cs` | Dual file save, return 2 paths (P1) |
| `DynamicsCrm.DevKit.Cli/Mcp/Tools/Helper/ViewXmlHelper.cs` | `MergeCellAttributes` mới — copy ALL attrs trừ name (P3); validate `imageproviderfunctionname` whitespace (P6) |
| `DynamicsCrm.DevKit.Cli/Mcp/Tools/Models/UpsertViewResult.cs` | `backupPath` → `fetchXmlBackupPath` + `layoutXmlBackupPath` (P1) |
| `DynamicsCrm.DevKit.Cli/Mcp/Resources/InstructionResources.cs` | Backup/Rollback + Custom Icons sections (P5.1, P5.2) |
| `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageWebResourceTool.cs` | Tool description + pointer tới icon contract (P5.3) |
| `DynamicsCrm.DevKit.Wiki/mcp/mcp_manage_view.md` | Sync docs |
| `DynamicsCrm.DevKit.UnitTests/Cli/Mcp/ViewBackupHelperTests.cs` | Dual-file expectations |
| `DynamicsCrm.DevKit.UnitTests/Cli/Mcp/ViewAndRibbonHelperCoverageTests.cs` | MergeCellAttributes + undo mới |
| `DynamicsCrm.DevKit.Docs/testcall/35.manage_view.md` | Re-capture: undo tests (12, 13, 17), backup assertions (426, 466, 505, 620) + **test mới icon roundtrip** |

Lưu ý: memory ghi nhận **70 stale unit-test fails** từ refactor trước (chờ aP quyết) — đợt này sẽ đụng thêm ViewBackupHelperTests + UpsertViewResult usages.

### Test mới đề xuất cho testcall 35 (live)

1. **Icon setup**: `manage_webresource` tạo 1 JS web resource (chứa function theo sample; **không cần tạo icon images** — images do function return theo tên lúc runtime, ngoài phạm vi view config) → `update` với `cell_updates_json` set icon (truyền **plain name** JS webresource + function name, không prefix) → `detail` verify 2 attrs lưu đúng format `$webresource:{name}` (P6 normalize đã auto-add).
2. **Carry-over (P3)**: `update` với fetchxml mới (đổi thứ tự cột, giữ cột có icon) → `detail` verify icon attrs còn nguyên.
3. **Combo (P4)**: `update` fetchxml mới + `cell_updates_json` đổi icon function → verify cả hai áp dụng.
4. **Undo cặp (P1+P2)**: `undo` với cặp path từ backup trước khi set icon → `detail` verify icon attrs biến mất (về trạng thái cũ) → undo lần nữa bằng pre-restore backup → icon quay lại.
5. **Error**: undo thiếu `layoutxml`; undo truyền `.layoutxml.xml` vào param `fetchxml`; cell_updates_json set `imageproviderfunctionname` có whitespace.
6. **No-combo (P4)**: `update` truyền cả `fetchxml` + `cell_updates_json` → error rõ ràng (không bỏ qua lặng lẽ).
7. **Fast fail (P6)**: set icon với webresource **không tồn tại** → error ngay, không ghi gì lên view.
8. **Carry-over label/desc (P3)**: set `label`+`desc` qua cell_updates_json → update fetchxml mới → `detail` verify label/desc/width/icon của cell trùng tên còn nguyên.

---

## 6. Quyết định của aP (2026-08-27)

- **Q1 — Carry-over (P3)**: ✅ **Carry TẤT CẢ cell attrs** (trừ `name`) cho cell trùng tên. aP hỏi ngược "có khả năng update label/desc cho column à?" → CÓ: XSD khai báo `label`/`desc`/`LabelId` (`LayoutXml.xsd:31-33`) + `cell_updates_json` patch generic set được ngay hôm nay. Org survey (2026-08-27, savedquery toàn org): **0 view nào có `label=`** — system layoutxml chỉ mang name/width/disableSorting(+icon attrs) → label/desc tồn tại ở schema nhưng hiếm dùng. Quyết định carry-all giữ nguyên (cost=0, bảo vệ mọi attr user-set kể cả tương lai).
- **Q2 — Undo**: ✅ **Buộc cả 2 file** — `xxx.fetchxml.xml` + `xxx.layoutxml.xml` (cặp cùng timestamp). Không fallback regen.
- **Q3 — `$webresource:` prefix**: ✅ (chốt trước) — lưu trữ có prefix; AI truyền plain name, tool auto-add.
- **Q4 — Combo**: ✅ **NO combo** — truyền cả fetchxml + cell_updates_json → error; 1 call = 1 hành động. Icon update dùng cell_updates_json sẵn có, không cần action mới đợt này.
- **Q5 — Rename backup**: ✅ **RESOLVED** — aP: "rename thì rename thôi". Backup filename = `{viewId:N}_{timestamp}` (GUID, không phụ thuộc tên view) → rename không ảnh hưởng backup. Rename giữ nguyên hành vi hiện tại (vẫn backup trước khi đổi tên); khi `SaveBackup` chuyển dual (P1) thì rename tự động ghi cả cặp như update/undo — không có quyết định riêng.
- **Q6 — Webresource không tồn tại**: ✅ **FAST FAIL** — query webresource theo tên trước khi patch; không thấy → error liền ("create it first with manage_webresource"). Implement ở HandleUpdate (cần serviceClient), không ở ViewXmlHelper.

---

## 7. Thứ tự triển khai đề xuất (sau khi aP duyệt)

1. P1 (ViewBackupHelper + DTO + callers) → P2 (undo, require cặp — Q2) → compile + unit tests.
2. P3 (MergeCellAttributes carry ALL attrs trừ name — Q1) → unit tests.
3. P4 (error khi truyền cả fetchxml + cell_updates_json — Q4 no-combo).
4. P5 (instructions + tool descriptions, gồm P5.3 manage_webresource) + P6 (normalize + **fast fail** webresource check ở HandleUpdate — Q6).
5. Build CLI (`Release.DynamicsCrm.DevKit.Cli.ps1`) → `/mcp` reconnect → testcall 35 re-capture full (thêm 8 test mới mục 5) → wiki sync → commit.
