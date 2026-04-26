# Review: 3 PRE-plan files

> Reviewer: Claude Code | Ngày: 2026-04-26

Các file được review:
- `PRE-plan_merge_build_form_xml_into_manage_form.md` → **Form**
- `PRE-plan_merge_build_ribbon_into_manage_ribbon.md` → **Ribbon**
- `PRE-plan_merge_build_sitemap_xml_into_manage_sitemap.md` → **Sitemap**

---

## Verdict tổng thể

| File | Convention | Consistency | Verdict |
|------|-----------|-------------|---------|
| **Form** | ✅ Tốt | ✅ Reference baseline | OK |
| **Ribbon** | ⚠️ Thiếu 2 section quan trọng | ❌ Lệch với Form/Sitemap | Cần sửa |
| **Sitemap** | ✅ Tốt (tốt nhất về cấu trúc) | ⚠️ Khác tiêu đề, khác số section | Nhỏ |

---

## 1. Vấn đề nghiêm trọng — Ribbon thiếu section

Ribbon là file **duy nhất** thiếu 2 section có trong cả Form lẫn Sitemap:

### 1.1. Thiếu `Risks` table

Form (có):
```
| Risk | Mitigation |
|---|---|
| Đổi behavior do quên copy 1 đoạn | Diff từng executor side-by-side; ... |
| Method non-static gọi _serviceClient mất context ... | ... |
| Quên copy using → build fail | ... |
| FormXmlOperationsException chưa được handle ... | ... |
| Encoding/line-ending khác ... | ... |
| Circular dependency giữa các helper | ... |
```

Sitemap (có): section `## 9. Risks` với 4 risks.

Ribbon: **Không có risks nào được nêu.** File kết thúc ở bảng "Ước tính kích thước". Ribbon thực ra có nhiều rủi ro cụ thể cần ghi: `_cachedSchemaSet`/`_schemaLock` static state khi tách class, `UpsertLocLabel` cần `ServiceClient` hay nhận `int lcid`, `SurfaceLocationMap` placement, `RibbonLocationFilters` enum placement.

### 1.2. Thiếu `Acceptance Criteria`

Form (có, cuối file):
```
- [ ] Folder Mcp/Tools/Form/ tồn tại, chứa đủ 5 file helper với đúng namespace
- [ ] BuildFormXMLTool.cs ≤ 250 LOC (gốc 2093)
- [ ] /claude-build-cli pass, 0 error, không phát sinh warning mới
- [ ] build_form_xml smoke test trả output cùng cấu trúc text + đúng đường dẫn temp file
- [ ] Tool count vẫn = 36
- [ ] git diff --stat chỉ thấy 6 file ...
```

Sitemap (có): `## 8. Acceptance Criteria` với 6 items.

Ribbon: chỉ có `## Kiểm tra sau khi tách` với 5 checklist items — ít hơn Form/Sitemap và thiếu
`git diff --stat`, `smoke test`, `tool count`. Đây là section tương đương nhưng không đủ
tiêu chí để dùng như AC.

---

## 2. Vấn đề convention — Title format không nhất quán

| File | Title |
|------|-------|
| Form | `# PRE-TASK: Refactor \`BuildFormXMLTool.cs\` trước khi merge vào \`manage_form\`` |
| Ribbon | `# PRE-TASK: Refactor \`BuildRibbonXmlTool.cs\` trước khi merge vào \`manage_ribbon\`` |
| Sitemap | `# PRE-Plan: Tổ chức lại SiteMap tools → \`Mcp/Tools/Sitemap/\`` |

Form và Ribbon dùng `PRE-TASK` + động từ `Refactor`. Sitemap dùng `PRE-Plan` + động từ `Tổ chức lại`.

Sitemap cũng dùng `→` thay vì `` trước khi merge vào ``. Đây là 3 file cùng loại
(pre-refactor plan) nên title nên theo cùng 1 pattern.

**Đề xuất:** Sitemap đổi thành  
`# PRE-TASK: Refactor \`BuildSiteMapXmlTool.cs\` trước khi merge vào \`manage_sitemap\``

---

## 3. Vấn đề consistency — Section numbering

| File | Sections có số không? |
|------|----------------------|
| Form | Không (`## Mục đích`, `## Chiến lược tách file`, ...) |
| Ribbon | Không (cùng pattern với Form) |
| Sitemap | **Có** (`## 0. Bối cảnh`, `## 1. Mục tiêu`, ..., `## 10. Out of Scope`) |

Sitemap là file duy nhất dùng số section. Đây không sai nhưng không nhất quán với 2 file kia.
Nếu 3 file là bộ tài liệu cùng loại, nên chọn 1 convention và áp dụng đều.

---

## 4. Vấn đề consistency — Vị trí bảng Before/After

| File | Bảng before/after ở đâu? |
|------|--------------------------|
| Form | Trong `## Chiến lược tách file` — **đầu file**, sau Mục đích |
| Ribbon | `## Ước tính kích thước file sau PRE-task` — **cuối file** |
| Sitemap | Trong `## 1. Mục tiêu` — **gần đầu file** |

Ribbon là file duy nhất đẩy bảng before/after xuống cuối. Thông tin này quan trọng để
hiểu scope nên đặt đầu là hợp lý hơn.

---

## 5. Vấn đề consistency — Section "Files KHÔNG đụng"

| File | Xử lý thế nào? |
|------|----------------|
| Form | `## Files KHÔNG đụng` — bảng riêng với lý do rõ ràng |
| Ribbon | Không có section riêng. Chỉ nhắc `ManageRibbonTool.cs` trong `## Cập nhật ManageRibbonTool.cs` |
| Sitemap | Liệt kê dạng bullet "Không đụng:" trong `## 3. Files cần thay đổi` |

Form có explicit nhất. Ribbon thiếu hoàn toàn — không biết những file nào khác (README, McpServerHost, StructuredResults) có bị ảnh hưởng không.

---

## 6. Vấn đề consistency — Smoke test detail

| File | Smoke test |
|------|-----------|
| Form | 4 bước chi tiết với commands cụ thể + warning "KHÔNG gọi manage_form(action='update',...)" |
| Ribbon | Không có smoke test — `Kiểm tra sau khi tách` chỉ có 5 checkbox structural |
| Sitemap | T8: "Smoke test: gọi `build_sitemap_xml` với 1 operation đơn giản, verify response text" |

Ribbon hoàn toàn thiếu smoke test instruction. Đây là thiếu sót đáng kể vì không có cách
verify behavior identical sau refactor.

---

## 7. Nhỏ — Đặt tên intro section khác nhau

| File | Intro section |
|------|--------------|
| Form | `## Mục đích` |
| Ribbon | `## Mục đích` |
| Sitemap | `## 0. Bối cảnh` + `## 1. Mục tiêu` (tách làm 2) |

Sitemap tách intro thành 2 section, Form/Ribbon gộp vào 1. Không sai nhưng khác nhau.

---

## 8. Nhỏ — "Out of Scope" chỉ có ở Sitemap

Sitemap có `## 10. Out of Scope` rất hữu ích — liệt kê rõ những gì KHÔNG làm trong PRE này
(thêm param `operations`, xóa tool, cập nhật doc v.v.). Form và Ribbon không có section này
nhưng lại nhắc chúng rải rác trong text (Form có ở `## SAU KHI HOÀN THÀNH PRE-TASK`, Ribbon tương tự).

Sitemap cách làm tốt hơn — explicit Out of Scope tránh nhầm lẫn.

---

## 9. Nhỏ — Target LOC không nhất quán trong cùng file (Ribbon)

Ribbon nói:
- Body text: "thu gọn còn ~120 dòng"
- Checklist `Kiểm tra`: `BuildRibbonXmlTool.cs` còn ≤ 150 dòng"

2 con số khác nhau trong cùng 1 file. Form và Sitemap nhất quán về con số target.

---

## Tóm tắt — Danh sách lỗi cần sửa

### Ribbon (phải sửa)
1. **Thêm `Risks` table** — nêu ít nhất: `_cachedSchemaSet` static state, `UpsertLocLabel` dependency, `SurfaceLocationMap`/`RibbonLocationFilters` placement, circular dependency
2. **Thêm `Acceptance Criteria` section** — bổ sung `git diff --stat`, `smoke test`, `tool count = 36` vào checklist hiện có
3. **Thêm smoke test** vào `Kiểm tra sau khi tách` (hoặc thêm bước vào `Thứ tự thực hiện`)
4. **Thêm "Files KHÔNG đụng"** section (hoặc bổ sung vào section hiện có): McpServerHost.cs, StructuredResults.cs, README.md, AGENTS.md
5. **Di chuyển bảng before/after lên đầu** (sau Mục đích, trước File cần tạo)
6. **Đồng nhất con số LOC**: chọn `~120` hoặc `≤150`, dùng 1 con số nhất quán

### Sitemap (nhỏ, có thể sửa)
7. **Đổi title** từ `PRE-Plan` → `PRE-TASK` để đồng nhất với Form/Ribbon

### Tất cả 3 file (tùy chọn — nếu muốn thống nhất hoàn toàn)
8. **Chọn convention cho section numbering**: hoặc tất cả đánh số (như Sitemap) hoặc không ai đánh số (như Form/Ribbon). Nếu đánh số thì Form/Ribbon cần refactor headings; nếu không đánh số thì Sitemap cần bỏ số.
9. **Thêm "Out of Scope" section** vào Form và Ribbon (hoặc bỏ khỏi Sitemap). Sitemap cách làm tốt hơn — nên chuẩn hóa.
