# I.18 — Report Item Template (file .rdl cho SSRS — item ĐẶC BIỆT)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/I.18.Report.md`
> **Điều kiện tiên quyết:** `0.md`; liên quan `P.12.Report` (project Report) và lệnh CLI `devkit downloadreport`/`uploadreport`.
> **Trạng thái:** ☐ Chưa làm
> **Lưu ý:** đây là item **khác cơ chế nhất** — KHÔNG dùng `.vstemplate` mà dùng `.vsz`/`.vsdir` (VS wizard cũ); file cuối của toàn danh mục.

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ItemTemplates/ReportItemWizard.cs` |
| "Payload" | `ItemTemplates/CSharp/18.ReportItemTemplate/` — `DevKitReport.ico`, `DevKitReport.vsz`, `DevKitReportItems.vsdir` (không có payload .vstemplate như item khác) |
| Resource | `Shared/Resources/ReportTemplate.rdl` (khung .rdl), `Resources/ReportProjectTemplate.rptproj` |
| Form đặc thù | `Lib/Forms/FormReportDatasets.xaml(.cs)` (chọn dataset/fetchxml), `FormReportMapping.xaml(.cs)` (map cột) |

## 2. Template tạo ra gì

File **`{Name}.rdl`** (SSRS report definition) dựng từ `ReportTemplate.rdl`, với **dataset FetchXml lấy từ Dataverse** (user chọn entity/view hoặc dán FetchXml) và mapping cột — sau đó report được upload bằng `devkit uploadreport`.

## 3. Logic wizard hiện tại

Đọc `ReportItemWizard.cs` + 2 form Report khi làm. Luồng: chọn dataset (query savedview/fetchxml qua metadata) → map trường → render .rdl (thay node Dataset/Fields trong XML khung). Cơ chế `.vsz/.vsdir` chỉ là cách đăng ký item vào VS — **không cần port**, CLI gọi handler trực tiếp.

## 4. Thiết kế source of truth

- Handler `ReportItemTemplateHandler` trong Shared:
  - Đọc khung `ReportTemplate.rdl` (resource sẵn trong Shared), chèn dataset + fields bằng `XDocument`/string theo đúng node mà wizard hiện tại tạo (so sánh với output thật của VSIX — test vàng).
  - FetchXml: nhận trực tiếp từ input HOẶC lấy từ Dataverse (saved view) khi có connection.
- Đây là item duy nhất **render XML .rdl thủ công** — phần còn lại dùng T4/resource có sẵn.

## 5. Việc phải làm (CLI)

- [ ] Handler + manifest (id `Report`, order I.18; chú ý trùng tên type với project P.12 `Report` — phân biệt qua `--kind`) + dùng resource rdl có sẵn.
- [ ] Prompt: report name → nguồn dataset (dán FetchXml / chọn saved view khi online) → (online) map fields.
- [ ] `.sh`/hint cho `devkit uploadreport` sau khi sinh.

## 6. CLI surface

```
devkit new --kind item --type Report --name AccountReport --out <dir> [--offline]
```
(offline: bắt buộc dán FetchXml hoặc dùng khung rỗng)

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_item` `itemType="Report"` (+ `fetchXml` optional). Lưu ý tool schema cần phân biệt với `scaffold_project projectType="Report"`.

## 8. Test & nghiệm thu

- [ ] Unit test: .rdl sinh ra well-formed XML, có node Dataset/Fields đúng input; so sánh cấu trúc với mẫu VSIX tạo (snapshot).
- [ ] Test offline path (không connection vẫn sinh được khung đúng).
- [ ] Build CLI 0/0; test pass.

## 9. Bàn giao — KẾT THÚC TOÀN DANH MỤC

- [ ] Báo cáo + user duyệt.
- [ ] Khi I.18 xong: cả 13 P + 17 I đã chạy được qua `devkit new` → **mở phase 🤖 MCP** (xem mục 6 của `0.md`: `get_templates` + `scaffold_project` + `scaffold_item` trong `Mcp/Tools/ManageTemplateTool.cs`, đăng ký `McpServerHost.cs`) và phase hội nhập VSIX (tùy chọn, từng wizard gọi lại core).
