# Proposal: manage_chart — advanced chart cases

> Review-only proposal, **không code**. Bối cảnh: refactor phase3 của `manage_chart` đã xong
> (single-try, factory prefix, 1-line Content, publish param, solutionWarning). Tool hiện tại đủ
> cho OOB chart đơn giản (10 loại: Column, Bar, Line, Pie, Doughnut/Donut, Funnel, Area, Bubble,
> Radar) nhưng chỉ **single-series**: 1 category (groupby) + 1 measure (aggregate). File này đề xuất
> các case nâng cao, theo thứ tự ưu tiên.

## 1. Hiện trạng — những gì tool chưa làm được

| # | Case thiếu | Ví dụ user cần | Ghi chú kỹ thuật |
|---|-----------|----------------|------------------|
| 1 | **Multi-series / multi-measure** | Column chart "Estimated vs Actual revenue" — 2 measures trên cùng category | `BuildDataDescriptionFromEntity` chỉ sinh 1 `<attribute aggregate>` + 1 `<attribute groupby>`; template chỉ bind 1 Series. Bubble/Radar thực tế cần ≥2 measures mới có nghĩa |
| 2 | **Filter trong datadescription** | "Chart chỉ tính record active" / "revenue > 0" | FetchXML hiện chỉ có `<entity><attribute .../></entity>` trần, chưa hỗ trợ `<filter>`/`<condition>` |
| 3 | **Order / Top-N** | "Top 10 accounts by revenue" | Cần `<order .../>` + `top="N"` trên fetch aggregate |
| 4 | **Date grouping** | "Cases created per month" — groupby createdon theo day/week/month/quarter/year/fiscal | FetchXML groupby date cần `daterrouping="month"` thay vì `groupby="true"`; detect `DateTimeType` attribute rồi sinh đúng shape |
| 5 | **Presentation tùy chỉnh qua param** | Đổi màu series, legend position, data label format mà không phải viết full XML | Hiện chỉ có 2 lựa chọn: template mặc định hoặc full `presentationdescription` override |
| 6 | **Series name tùy chỉnh** | Measure alias hiện hard-code `aggregate_column`; label hiển thị trên chart không đổi được qua param | Alias hiện là const trong builder |

## 2. Đề xuất thiết kế (theo ưu tiên)

### P1 — `measures` param (multi-series) — case 1 + 6

Thêm param mới, **không phá contract cũ** (`group_by_column`/`aggregate_column`/`aggregate_type` vẫn hoạt động như single-measure shortcut):

```
measures = "importsequencenumber:count:Số record; estimatedvalue:sum:Doanh thu"
           └─ column        :type :label tùy chọn (→ series alias/name)
```

- Parse thành list `(column, aggregateType, label)`; validate từng column qua metadata như hiện tại.
- `BuildDataDescriptionFromEntity` sinh N `<attribute alias="aggregate_column_i" .../>`.
- `BuildPresentationDescription` bind N `<Series>` (clone Series node từ template, set Name + màu vòng palette mặc định).
- `aggregate_column`/`aggregate_type` cũ + `measures` cùng lúc → `Error` (ambiguous).
- Confirmation summary (pie) liệt kê đủ N measures.

### P2 — `filter` param (case 2)

```
filter = "statecode=0; estimatedvalue>1000000"
```

- Format `field<op>value`, op ∈ `= != > >= < <= like in null not-null`; tối thiểu chỉ cần `=` và `null/not-null` cho MVP.
- Resolve field qua metadata (display name → logical), type-aware value (bool/int/optionset/guid/datetime string).
- Chèn `<filter type="and">` vào fetch trong datadescription.
- **Không** nhận raw FetchXML fragment (injection + khó validate) — chỉ format có cấu trúc.

### P3 — Date grouping (case 4)

```
group_by_column = "createdon" + group_by_date = "month"   // day|week|month|quarter|year|fiscalperiod
```

- Chỉ áp dụng khi group-by column là `DateTimeType`; sai type → `Error` rõ.
- Sinh `<attribute groupby="true" daterrouping="month" .../>` (đúng shape OOB date-grouped charts).

### P4 — Top-N + order (case 3)

```
top_count = 10
```

- `top="N"` trên fetch + `<order alias="aggregate_column_1" descending="true" />`.
- Chỉ hợp lệ khi có measure; N ∈ [1, 100].

### P5 — Presentation params tối thiểu (case 5)

```
legend_position = "top|bottom|left|right"
series_colors = "#FF0000,#00FF00"   // theo thứ tự series
show_data_labels = true|false
```

- Post-process XML sau `BuildPresentationDescription`: set `LegendLayout`/palette/`IsValueShownAsLabel`.
- Giới hạn 3 param này trước; mọi thứ phức tạp hơn vẫn dùng `presentationdescription` override.

## 3. Nguyên tắc giữ nguyên khi implement

- Tuân thủ refactor3.md §2+§3: single-try ở entry, prefix do factory sở hữu, Content 1 dòng, DTO null-aware, `dry_run` preview đủ measures/filter.
- Rule 9: **chỉ thêm** param/JSON key mới (`measures`, `filter`, `group_by_date`, `top_count`, `legend_position`, `series_colors`, `show_data_labels`, `undoSummary`...); không đổi/ xóa key hiện có, không đổi error text hiện có.
- Multi-series validate bằng metadata thật (probe trước bằng get_tables — rule 7), không hard-code shape theo chart type ngoài note pie/non-pie đã có.
- `upsert`/`update` path: khi `measures` truyền vào → rebuild datadescription như create; giữ phần còn lại.
- Confirmation flow (pie) mở rộng: summary list đủ N measures + filter + top_count trước khi tạo.
- Test-call `testcall/21.manage_chart.md` bổ sung case cho từng param mới + error paths (column không tồn tại, op sai, date-group trên non-date, measures + aggregate_column cùng lúc).

## 4. Câu hỏi cần anh Phước quyết trước khi code

1. **Scope release này**: làm hết P1–P5 hay chỉ P1 (+P2)? P1 là case được hỏi nhiều nhất (Bubble/Radar vô nghĩa nếu 1 measure).
2. **Filter syntax**: format `field op value` có cấu trúc (an toàn, dễ validate) hay cho phép raw condition XML (mạnh nhưng rủi ro)? Em đề xuất có cấu trúc.
3. **`measures` label**: có cần label tiếng Việt/đa ngôn ngữ không, hay alias ASCII là đủ?
4. Confirmation flow: mở rộng `needs_confirmation` cho **mọi** create có `measures`/`filter` (an toàn hơn) hay giữ chỉ Pie?
5. Chart type mặc định khi user truyền `measures` nhiều hơn 1: auto-suggest Column/Bar thay vì Pie mặc định?
