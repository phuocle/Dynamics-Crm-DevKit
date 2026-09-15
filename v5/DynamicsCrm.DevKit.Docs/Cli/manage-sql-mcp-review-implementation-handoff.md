# Review MCP SQL — tài liệu bàn giao triển khai

Ngày review: **2026-09-15**. Baseline: `ebf702a50f9396b77ec6ad4f9fc3211227c0d85a`.

**Bản rà soát lại theo phản hồi người dùng:** lấy trang SQL Microsoft được chỉ định làm **Source of truth cho khả năng SQL**. Các guard giới hạn SQL hiện có là đúng về mục đích. F03 được thu hẹp thành lỗi nhận nhầm keyword trong string literal; rút yêu cầu mở hỗ trợ comment/quoted identifier và thay toàn bộ regex bằng parser. Các thay đổi này đã được áp dụng xuyên suốt đặc tả và ma trận test bên dưới.

**Kết luận: cần sửa implementation, cập nhật hướng dẫn và thêm test hành vi. Giữ tool hiện tại.**

Người dùng gọi tool là `manage_sql`; nguồn hiện tại đăng ký **`execute_sql`** qua `ExecuteSqlTool`. Không tìm thấy `manage_sql` trong nguồn tracked đã kiểm tra. Tài liệu này review `execute_sql`, không đề xuất đổi tên hay tạo một tool SQL thứ hai.

Đây là kết quả review và đặc tả cho AI triển khai tiếp. **Lượt review này chỉ tạo file Markdown; chưa sửa code, chưa build/test, chưa gọi Dataverse, chưa reinstall/restart MCP.** Các tình huống bên dưới là suy luận trực tiếp từ nguồn hoặc fixture cần tạo, không phải kết quả live đã chạy.

## 1. Phạm vi và quyết định

- Component: **CLI / MCP (.NET 10.0)**. Shared chỉ được đọc để tìm nguyên nhân và helper có thể tái sử dụng. Không cần thay đổi VSIX, Analyzer hay CLI command.
- Thực hiện các mục **F01–F06** và ma trận test tương ứng khi nhận nhiệm vụ triển khai. F07 là cải thiện độ bền có phạm vi riêng, ưu tiên sau các lỗi chính.
- Giữ tên `execute_sql`; giữ `sql`, `max_records`, `get_all`, default `""`, `5000`, `false` và miền `max_records` 1–50000.
- Giữ `ReadOnly=true`, `Idempotent=true`, `Destructive=false`, structured output, resource `docs://instructions_for_sql` và mapping hiện tại.
- Giữ tám JSON key: `row_count`, `max_records`, `get_all`, `result_truncated`, `executed_sql`, `request_url`, `rows`, `summary`.
- Các thay đổi contract được đề xuất rõ trong review: sửa ý nghĩa cờ truncation và suffix summary; sửa các message/hint được chỉ định tại F04–F06 (TOP, lời gọi metadata và metadata fault). F03 giữ các guard/error hiện có, chỉ loại false positive trong literal. Phần HAVING chỉ bổ sung giải thích ngữ nghĩa, không kết luận guard/hint lọc đầu vào hiện tại trái tài liệu.
- Không thêm CRUD SQL, TDS connection, `action`, file input/output, export, pagination token public hoặc SQL-to-FetchXML translator trong đợt sửa này.

## 2. Bản đồ nguồn

Các số dòng là tại baseline review; dùng tên method/field để tìm lại nếu code dịch chuyển.

| Ký hiệu | File / vị trí | Vai trò |
|---|---|---|
| SQL | [ExecuteSqlTool.cs](D:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Cli/Mcp/Tools/ExecuteSqlTool.cs:28) | Registration, validation, TOP, metadata, HTTP, paging |
| DTO | [SqlQueryResult.cs](D:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Cli/Mcp/Tools/Models/SqlQueryResult.cs:9) | JSON schema, summary, các regex |
| INS | [InstructionResources.cs](D:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Cli/Mcp/Resources/InstructionResources.cs:1100) | `SqlInstructions()` |
| META | [MetadataService.cs](D:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Shared/Services/MetadataService.cs:101) | Metadata cache, batch faults, helper fetch trực tiếp |
| HTTP | [WebApiExecutor.cs](D:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Shared/Services/WebApiExecutor.cs:16) | `IWebApiExecutor` và adapter ServiceClient |
| TABLE | [GetTablesTool.cs](D:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Cli/Mcp/Tools/GetTablesTool.cs:40) | Chữ ký thật của `get_tables` |
| ERROR | [McpToolResults.cs](D:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Cli/Mcp/Tools/Helper/McpToolResults.cs:195) | Error envelope và thông tin lỗi gốc |
| HOST | [McpServerHost.cs](D:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Cli/Mcp/McpServerHost.cs:37) | Mapping SQL tool → resource |
| MANUAL | [2.execute_sql.md](D:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Docs/testcall/2.execute_sql.md:25) | 15 ca testcall đã ghi trước lượt review |

### Source of truth và cách phân loại kết luận

Đã đọc lại toàn bộ [SQL Web API](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/query/sql), trang hiển thị cập nhật 2026-09-03. Đây là nguồn chuẩn cho subset của `?sql=`. T-SQL/SQL Server/TDS hỗ trợ một cú pháp không có nghĩa tool phải hỗ trợ nó. Cú pháp không được trang này xác nhận không trở thành yêu cầu mở rộng chỉ từ suy luận của reviewer.

| Đối chiếu | Kết luận cho AI triển khai |
|---|---|
| [Supported SQL](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/query/sql#supported-sql) | Giữ read-only, một SELECT; không mở CTE/UNION hoặc JOIN ngoài INNER/LEFT |
| [Select columns](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/query/sql#select-columns) | Giữ explicit columns; không mở SELECT-star, literal/expression projection |
| [Unsupported WHERE](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/query/sql#unsupported-where-clause-features) | Giữ hạn chế subquery/EXISTS; không suy ra hỗ trợ so sánh cột-cột/literal-literal |
| [Filter rows](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/query/sql#filter-rows) | Phân biệt hằng chuỗi trong WHERE với keyword cú pháp; F03 chỉ sửa chỗ phân biệt này |
| [Aggregate data](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/query/sql#aggregate-data) | HAVING vẫn bị cấm; COUNT(*) không phải SELECT-star |

Các guard cục bộ hiện chưa bao phủ hết giới hạn trên. Điều đó không đồng nghĩa endpoint hỗ trợ phần thiếu: Dataverse vẫn kiểm tra và trả lỗi. Review này không yêu cầu xây parser mô phỏng toàn bộ endpoint.

- [Supported SQL](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/query/sql#supported-sql) liệt kê TOP/OFFSET, nhưng [Page results](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/query/sql#page-results) phủ định chúng. **Chưa có bằng chứng live giải quyết mâu thuẫn.**
- Quyết định bảo thủ theo mục Page results: không gửi TOP/OFFSET native. Giữ chuyển đổi TOP hiện có của wrapper theo F04 và guard OFFSET/FETCH; không lấy bảng đầu trang để gỡ guard. Chuyển TOP thành cap là tiện ích của tool, không phải khả năng SQL được Microsoft xác nhận.
- Phần [DATEADD/GETUTCDATE](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/query/sql#using-dateadd-and-getutcdate-functions) là ngoại lệ của mô tả cấm function tổng quát. Tránh thêm bộ chặn mọi function.
- [Paging OData](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/query/page-results) yêu cầu giữ page-size preference và continuation query/cookie. F02 áp dụng quy tắc này.

F01/F04/F06 là lỗi xử lý của wrapper; F02 dựa trên trang paging được chính trang SQL dẫn tới; F05 gồm cả đối chiếu chữ ký repo và metadata reference. Các mục đó không bổ sung SQL dialect. Mức ưu tiên và thuật toán sửa là đề xuất của reviewer; unit fixture không chứng minh live endpoint chấp nhận một cú pháp.

## 3. Findings và đặc tả sửa

### F01 — P1 — `result_truncated` báo sai độ đầy đủ của dữ liệu

**Bằng chứng:** SQL:162 dừng ngay khi `get_all=false`, trước khi đọc nextLink. SQL:166 đặt `truncated=true` khi đủ cap, trước khi kiểm tra còn trang hay không. DTO:31 luôn diễn giải truncation là đạt `max_records`.

**Tình huống tái hiện bằng fake HTTP:**

| Input / response | Hiện tại | Mong muốn |
|---|---|---|
| `get_all=false`, cap 10000, 5000 rows + nextLink | false | true |
| `get_all=true`, cap 2, đúng 2 rows, không nextLink | true | false |
| `get_all=false`, cap 2, đúng 2 rows + nextLink | false | true |

**Cách sửa đã chốt:**

1. Đọc trạng thái continuation của response trước khi quyết định dừng.
2. Tách trạng thái “đã bỏ bớt rows trong response” khỏi “server còn trang”.
3. Khi dừng, `result_truncated=true` nếu đã bỏ rows hoặc còn nextLink chưa theo. Đủ cap tự nó không chứng minh truncation.
4. Không request thêm khi đã đủ cap; không gửi page size 0 và không cần một request dò chỉ để xác định cờ.
5. `result_truncated` mô tả mức đầy đủ của **SQL sau chuẩn hóa TOP**, không phải số bảng/records mà server đã quét.
6. Giữ summary khi đủ dữ liệu; khi thiếu dùng suffix trung tính ` (partial results)` thay cho ` (truncated at max_records=...)`. Text content và `summary` phải trùng nhau qua helper `Success`.
7. Giữ `request_url` là URL của request cuối đã thực hiện. Nó không trở thành continuation token public.

**Nghiệm thu:** T08–T15. Có nextLink ở chế độ một trang phải báo thiếu kể cả khi `row_count < max_records`.

### F02 — P2 — Page size thay đổi giữa các trang

**Bằng chứng:** SQL:137 tính `min(max_records - rows.Count, 5000)` mỗi vòng. Cap 8000 tạo header 5000 rồi 3000. Đây là sai lệch với [hướng dẫn continuation](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/query/page-results), dù một số truy vấn thực tế vẫn có thể trả được rows.

**Cách sửa đã chốt:**

- Sau validation/TOP, tính một lần `pageSize = min(effectiveMaxRecords, 5000)`; dùng đúng giá trị này trên mọi request trong lần gọi.
- Giới hạn tổng output bằng cách chỉ nhận số rows còn thiếu trên trang cuối. F01 phải đánh dấu thiếu nếu có rows bị bỏ.
- Cap 8000, responses 5000 + 5000: cả hai header đều 5000; trả 8000 rows; truncation true.
- Cap 8000, responses 5000 + 2345 và hết nextLink: trả 7345; truncation false.
- Theo continuation kể cả khi trang trước ngắn hơn pageSize. Không suy ra “hết dữ liệu” từ độ dài trang.
- Giữ nguyên phần query đã encoded của nextLink. Nếu adapter cần đường dẫn tương đối, chỉ bỏ prefix API đã xác định; không decode/re-encode cookie, không ghép lại SQL hoặc thêm query option.
- Không xuất server nextLink như một token resume mới: khi cắt giữa trang, nó sẽ bỏ qua các rows đã bị cắt.

**Nghiệm thu:** T12–T16. MANUAL:366 mô tả một lần lấy 7345 rows không chứng minh header thay đổi là đúng; giữ riêng bằng chứng cũ.

### F03 — P2 — Giữ guard SQL; chỉ sửa nhận nhầm keyword trong string literal

**Phần đang đúng, phải giữ:** SQL:83–102 từ chối non-SELECT, SELECT-star, HAVING, WHERE subquery/EXISTS và OFFSET/FETCH. Các hạn chế này phù hợp nguồn chuẩn và quyết định bảo thủ về paging ở mục 2. **Không gỡ các guard này, không biến tool thành SQL Server đầy đủ.**

**Lỗi hẹp còn lại:** SQL:87–100 áp regex lên toàn chuỗi; DTO:34–38 không phân biệt string literal trong WHERE. Theo mục Filter rows, cột có thể so sánh với hằng chuỗi. Sáu câu sau chỉ thay nội dung của hằng `name`; chúng không chứa mệnh đề HAVING, OFFSET hay subquery ở vị trí cú pháp:

```sql
SELECT name FROM account WHERE name = 'having'
SELECT name FROM account WHERE name = 'fetch'
SELECT name FROM account WHERE name = 'offset'
SELECT name FROM account WHERE name = 'exists ('
SELECT name FROM account WHERE name = 'select *'
SELECT name FROM account WHERE name = '(select test)'
```

Regex hiện tại sẽ reject các câu trên tại tool. Đây là **bằng chứng false positive từ code**, với dạng predicate được tài liệu mô tả; chưa gọi Dataverse để khẳng định cả sáu câu đã chạy live thành công.

| Phân biệt cần giữ | Kết quả |
|---|---|
| `SELECT name FROM account GROUP BY name HAVING COUNT(*) > 1` | Tiếp tục lỗi HAVING |
| `SELECT name FROM account WHERE name = 'having'` | Không bị lỗi HAVING chỉ vì nội dung literal |
| `SELECT name FROM account WHERE EXISTS (SELECT accountid FROM account)` | Tiếp tục lỗi subquery/EXISTS |
| `SELECT name FROM account WHERE name = 'exists ('` | Không được nhận thành toán tử EXISTS |
| `SELECT * FROM account` | Tiếp tục lỗi SELECT-star |
| `SELECT name FROM account WHERE name = 'select *'` | Không được nhận thành wildcard projection |
| `SELECT 'having' FROM account` | Không phải case được F03 cho phép: literal ở SELECT list bị tài liệu loại trừ |

**Cách sửa tối thiểu đã chốt:**

1. Giữ regex/guard và thông báo hiện có. Chỉ cho các kiểm tra keyword bị ảnh hưởng nhìn phần cú pháp bên ngoài string literal.
2. Có thể tạo một bản sao phục vụ validation, che nội dung `'...'` bằng khoảng trắng, giữ chiều dài và ranh giới literal. Không xóa literal làm dính các token hai bên. Dùng lại cách xử lý single quote/escape `''` đã có ở `ContainsSemicolonOutsideLiteral`; không bắt buộc viết tokenizer mới.
3. SQL gốc sau chuẩn hóa TOP/terminal semicolon vẫn dùng cho request và `executed_sql`. Không gửi bản che literal, không đổi giá trị dữ liệu để vượt guard.
4. Guard thật nằm ngoài literal vẫn phải chạy. Ví dụ WHERE có `name='having'` rồi thêm HAVING thật vẫn phải lỗi; không bỏ qua cả phần đuôi sau literal.
5. Không thêm API/cú pháp mới. SELECT literal, expression, CTE, subquery và các tính năng ngoài subset vẫn bị giới hạn như nguồn chuẩn. Không dùng fake success để khẳng định các tính năng này được hỗ trợ.

**Rút khỏi F03 so với bản trước:** yêu cầu hỗ trợ comment `--`/`/*...*/`, terminal semicolon trước comment, quoted/bracket table name, multipart name, parser ngoặc/FROM ngoài cùng, thay toàn bộ regex hoặc di chuyển regex ra DTO. Comment xuất hiện trong bài viết không tự xác nhận mọi kiểu comment là input được endpoint nhận. Không dùng F03 để thay behavior của những cú pháp chưa được xác minh.

**FROM là ghi chú riêng, không phải bằng chứng cần mở parser:** SQL:124 fallback accounts khi regex không nhận FROM. Trường hợp `SELECT name` thiếu FROM không thuộc truy vấn được trang SQL hướng dẫn, nên việc server reject nó không phải lý do buộc F03 mở hỗ trợ cú pháp. Đưa việc trả lỗi local rõ hơn vào backlog; không bắt buộc đổi FROM/fallback trong đợt sửa F03.

**Nghiệm thu:** T01–T07; T17–T19 bảo vệ đường dẫn/encoding đang có. Test cần chứng minh cả hai phía: literal không bị chặn nhầm **và** cú pháp bị Microsoft loại trừ vẫn không được mở. Chỉ kỳ vọng fake HTTP được gọi cho những case thuộc subset; không ghi thành live SQL pass.

### F04 — P2 — TOP không hợp lệ bị bỏ đi, làm mở rộng truy vấn

**Bằng chứng:** SQL:73–75 luôn xóa phần TOP khi regex match, kể cả parse lỗi hoặc TOP bằng 0. Validation cap lại nằm ở SQL:104. DTO:35 cho phép ngoặc mở/đóng độc lập.

| Input | Hành vi hiện tại đáng sửa |
|---|---|
| `SELECT TOP 0 name FROM account` | Xóa TOP; có thể lấy đến 5000 rows |
| `SELECT TOP 999999999999999999 name FROM account` | Overflow nhưng vẫn xóa TOP |
| TOP 1 + `max_records=100000` | Cap sai được đổi thành 1 và vượt qua validation |
| `SELECT TOP (2 name FROM account` | Regex có thể bỏ TOP cùng ngoặc chưa đóng |

**Policy cho AI triển khai:**

1. Kiểm tra `max_records` gốc trong miền 1–50000 trước khi đổi giá trị.
2. Giữ tiện ích tương thích sẵn có `TOP n`, `TOP (n)`, `DISTINCT TOP n` với n là integer dương parse được trong Int32, ngoặc cân bằng. Đây là input được wrapper chuyển đổi; không quảng cáo ba form này là native SQL support từ Microsoft.
3. `effectiveMaxRecords = min(max_records, n)`; TOP không bao giờ tăng cap của caller. Giá trị `max_records` trong output tiếp tục là effective cap như hiện tại.
4. TOP 0, số âm, overflow, biến/expression, ngoặc lỗi, PERCENT và WITH TIES trả error; không gọi metadata/HTTP, không bỏ riêng token để “sửa hộ”.
5. Thông báo mới đề xuất: `TOP must be a positive integer supported by execute_sql.` Hint giải thích hai form được chấp nhận và đề nghị dùng `max_records`.
6. Chỉ xóa TOP sau khi validate thành công. TOP 0 bị từ chối theo **policy của wrapper**; không diễn giải thành khẳng định native Dataverse cấm TOP 0.
7. Không thêm giới hạn TOP 5000 dựa trên bảng Microsoft đang mâu thuẫn: wrapper đã chuyển TOP thành cap output và có `get_all`; không gửi TOP native.

**Nghiệm thu:** T20–T24. Giữ `get_all=false` là một trang ngay cả khi TOP lớn hơn pageSize.

### F05 — P2 — Hướng dẫn dẫn AI đến lời gọi hoặc truy vấn sai

**Vị trí:** SQL:89,119; INS:1113–1141; MANUAL:599,674. TABLE:40–47 chứng minh `name`/`include_columns` không tồn tại trong chữ ký hiện tại.

**Nội dung thay cụ thể:**

| Nội dung hiện tại | Nội dung cần dùng |
|---|---|
| `get_tables(name='...', include_columns=true)` | `get_tables(entity_name='account', detail_level='standard')`, thay account bằng logical name thật |
| `get_tables(name='<table>')` | `get_tables(entity_name='<table>', detail_level='standard')`; list vẫn là `get_tables()` |
| Primary key luôn `{entity_logical_name}id` | Đọc `primaryIdAttribute` trong kết quả metadata; không suy đoán |
| “standard SQL SELECT syntax” | “Dataverse Web API SQL subset”; dẫn đến resource cho giới hạn |
| Hint HAVING đề nghị lọc WHERE trước aggregation | Giữ hướng dẫn này vì phù hợp nguồn; bổ sung rằng lọc nhóm theo aggregate phía client là thao tác khác |
| “redirected here” | Nói rõ execute_webapi trả hướng dẫn gọi execute_sql; nó không tự thực thi SQL thay caller |

Khóa chính của `email` là `activityid`, không phải `emailid`: [Email properties](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/reference/entities/email#properties). Field `primaryIdAttribute` đã có tại `TableDetailEntry.cs:30`, được TABLE:256 gán từ metadata; không cần API metadata mới.

INS:1126 cũng nói mọi ngày đều stored UTC. Thay bằng hướng dẫn đọc `DateTimeBehavior` trước khi dựng filter; phân biệt `UserLocal`, `DateOnly`, `TimeZoneIndependent`. Không tự convert mọi date value trong rows. [Microsoft date/time behavior](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/behavior-format-date-time-attribute).

**Sửa conversion cheat sheet về mặt ngữ nghĩa:**

- INS:1135 dùng `id` không phải tên khóa xác định và đổi thành `SELECT DISTINCT a.name`. Hai account khác nhau trùng tên có thể bị gộp. Ví dụ rewrite cần giữ `a.accountid` cùng `a.name`, đúng quan hệ lookup và điều kiện của truy vấn gốc. Không nói mọi EXISTS/NOT EXISTS đều đổi được thành INNER JOIN.
- SQL:93 đề nghị WHERE trước aggregation là đúng với mục Aggregate data; không cần sửa thành một tuyên bố đối lập. Chỉ làm rõ INS:1137: nếu mục tiêu là lọc nhóm theo `COUNT(*) > 5`, WHERE lọc đầu vào không bảo đảm cùng kết quả; lọc client phải kiểm tra F01 để tránh kết quả chưa đầy đủ.
- Không cấm toàn bộ DATEADD/GETUTCDATE. Nêu đúng vị trí sử dụng theo nguồn SQL đã liên kết. Trang này không liệt kê đầy đủ datepart; giữ ví dụ đã được tài liệu minh họa, không hứa hỗ trợ thêm datepart dựa trên SQL Server.

**Bổ sung ngắn vào resource:** chỉ dẫn JOIN/ON theo [mục Additional ON filters](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/query/sql#additional-on-filters); phân biệt cap output 50000 của tool với aggregate input limit 50000; mã lỗi aggregate `0x8004E023` không được giải quyết bằng giảm `max_records`. [Aggregate query record limits](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/query/sql#aggregate-query-record-limits).

Hướng dẫn paging phải nhắc `ORDER BY` có khóa phân biệt phù hợp. Không tự thêm khóa vào SELECT/ORDER BY vì có thể đổi DISTINCT hoặc grouping. [Ordering and paging](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/query/page-results#ordering-and-paging).

**Nghiệm thu:** T25–T27; chỉ cập nhật hướng dẫn thuộc SQL. Không thêm lại tham số cũ vào `get_tables`.

### F06 — P2 — Lỗi metadata bị báo nhầm thành bảng không tồn tại

**Bằng chứng:** META:134–144 chuyển mọi fault trong ExecuteMultiple response thành metadata stub không có EntitySetName. SQL:115–119 diễn giải stub đó thành `Table '<name>' was not found.`

Đây là lỗi có điều kiện khi metadata response có **item fault**. Không khẳng định mọi lỗi HTTP/SDK hiện đều bị mất: exception ở mức toàn request vẫn đi qua catch ngoài.

**Cách sửa đã chốt:**

- SQL dùng helper hiện có `FetchEntityMetadataAsync` (META:161–170), một RetrieveEntityRequest trả lỗi gốc, thay cho batch helper nuốt item fault. Không sửa behavior Shared globally trong đợt này.
- Chỉ ánh xạ lỗi được nhận diện là không có entity sang thông báo Table-not-found cũ, kèm hint mới ở F05. Mã đã xác minh: `QueryBuilderNoEntity`, `0x80041102` / `-2147217150`. [Microsoft error codes](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/reference/web-service-error-codes).
- Với fault code khác/chưa biết: đi qua `ThrowExceptionFriendly`; không dùng `EntitySetName == null` hoặc substring “entity” để đoán access error thành not-found.
- Successful response có metadata null/EntitySetName rỗng: trả lỗi metadata thiếu EntitySetName, không fallback accounts. Đây là nhánh response bất thường, khác fault xác nhận bảng không tồn tại.
- Dùng EntitySetName trả từ metadata, không tự thêm `s`. Lần fetch trực tiếp đang tải EntityFilters.All; chấp nhận helper hiện có trước, chưa mở refactor cache/metadata tối ưu hóa toàn repo.
- Metadata lỗi phải dừng trước SQL HTTP. Giữ error envelope/details của helper chung và thông tin lỗi server.

**Nghiệm thu:** T28–T31. Test missing entity với mã đã nêu và test mã khác để khóa việc không nuốt lỗi. Không đoán rằng mọi môi trường chỉ dùng duy nhất một mã not-found; các mã chưa nhận diện vẫn phải giữ nguyên lỗi gốc.

### F07 — P3 — Cải thiện độ bền của luồng response / cancellation

**Bằng chứng nguồn:** SQL:129 không dispose HttpResponseMessage; SQL:150 chỉ nhận `value` nếu là array nhưng vẫn success khi thiếu/sai kiểu; SQL:127–179 có thể lặp vô hạn nếu server lặp nextLink với các trang rỗng. HTTP:21 hỗ trợ cancellation, nhưng SQL không truyền token. Đối số `default` tại SQL:141 là **contentType**, không phải cancellation token.

Đây là các ca robustness cần fake để kiểm tra; chưa quan sát Dataverse live trả payload/link lỗi.

**Phạm vi đề xuất cho đợt tiếp theo:**

- Scoped dispose response mỗi vòng; vẫn clone JsonElement để output sống sau khi JsonDocument được dispose.
- Require response object có `value` array và rows là object; `{"value":[]}` hợp lệ, missing/wrong type trả error, không success 0 giả.
- Detect continuation URL đã request và báo lỗi chu kỳ trước request lặp; lỗi trang sau không chuyển thành success toàn bộ.
- Nhận MCP-injected CancellationToken, truyền bằng named argument qua HTTP và đọc body. Xác minh token không trở thành input JSON mới trong tool schema.
- Hardening nextLink phải reuse connection/URL validation hiện có nếu mở rộng. Không kết luận có SSRF đã khai thác chỉ từ xử lý substring v9.2; chưa kiểm tra chính sách URL của ServiceClient trong lượt này.

**Nghiệm thu nếu thực hiện:** T32–T34. T35 là regression test bắt buộc của đợt sửa chính để giữ nguyên dữ liệu output, đồng thời bảo vệ nhánh dispose nếu làm F07. Không thay generic error handling của mọi tool chỉ để bổ sung một hint SQL.

## 4. Ma trận test bàn giao

### Hạ tầng đã có

- [ExecuteSqlToolTests.cs](D:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Cli.UnitTests/Cli/Mcp/ExecuteSql/ExecuteSqlToolTests.cs:13): registration.
- [ExecuteSqlAdditionalCoverageTests.cs](D:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Cli.UnitTests/Cli/Mcp/ExecuteSql/ExecuteSqlAdditionalCoverageTests.cs:33): constructor/validation/semicolon, dùng uninitialized dependencies.
- [ExecuteSqlExtraCoverageTests.cs](D:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Cli.UnitTests/Cli/Mcp/ExecuteSqlExtraCoverageTests.cs:34): thêm validation.
- [InstructionResourcesTests.cs](D:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Cli.UnitTests/Cli/Mcp/Resources/InstructionResourcesTests.cs:178): chỉ kiểm tra vài keyword của resource.
- Mẫu fake executor: [ExecuteWebApiFakeExecutorCoverageTests.cs](D:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Cli.UnitTests/Cli/Mcp/ExecuteWebApi/ExecuteWebApiFakeExecutorCoverageTests.cs:29). Với SQL, fake method **async**.

Ba suite SQL hiện chưa kiểm tra successful HTTP, paging, headers hoặc serialization của kết quả. Tạo `ExecuteSqlBehaviorTests.cs` trong thư mục test ExecuteSql hiện có; fake IWebApiExecutor và SDK metadata, không dùng Dataverse thật trong unit tests. Assert IsError, StructuredContent, số request, URL và headers theo hành vi. Nếu chạm `XrmHelper` static state/counters/cache, dùng `[DoNotParallelize]` và restore trong cleanup.

Các fixture nhiều trang T13–T16, T33 và nhánh lỗi trang 2 của T31 phải truyền rõ `get_all=true`; default false sẽ không chạy continuation. T09 chủ động dùng `get_all=false` để kiểm tra dừng sau một trang.

| ID | Fixture / thao tác | Kết quả cần khóa |
|---|---|---|
| T01 | Sáu literal ở F03 | Qua local validation, literal nguyên vẹn tới fake HTTP |
| T02 | `name = 'Bob''s having account; fetch'` | Không tách statement/chặn keyword trong literal |
| T03 | HAVING, WHERE subquery/EXISTS/NOT EXISTS, OFFSET/FETCH thật, UPDATE | Giữ error cũ; không HTTP; không gỡ guard |
| T04 | SELECT-star/SELECT DISTINCT-star so với COUNT(*) | Hai wildcard giữ lỗi cũ; aggregate không bị chặn nhầm |
| T05 | Một terminal `;`; `;` trong literal; hai statement | Giữ behavior hiện có; không thêm case comment |
| T06 | Literal có keyword rồi HAVING thật ở ngoài literal; nhiều predicate cột so với hằng nối AND/OR | Không che mất cú pháp thật; guard vẫn bắt HAVING, các predicate cột so với hằng không bị false positive |
| T07 | SELECT thường, DISTINCT, COUNT(*), INNER/LEFT JOIN, alias | Không bị local guard nhận nhầm; không suy rộng thành mọi JOIN |
| T08 | Một trang không nextLink, rows nhỏ hơn cap | false, một request |
| T09 | Một trang có nextLink, `get_all=false`, cap lớn | true, chỉ một request |
| T10 | Đúng cap không nextLink, thử cả hai get_all | false ở cả hai |
| T11 | Đúng cap có nextLink, thử cả hai get_all | true; không request thêm |
| T12 | Response vượt cap | Trim đúng cap, true dù không nextLink |
| T13 | 5000 + 2345, cap 8000, hết continuation | 7345, false; hai header maxpagesize=5000 |
| T14 | 5000 + 5000, cap 8000 | 8000, true; hai header maxpagesize=5000 |
| T15 | Trang cuối đúng tổng cap, không nextLink | false; không có page-size=0 |
| T16 | Trang ngắn nhưng có nextLink; cookie chứa `%25`, `&` | Theo link; query/cookie không double-encode |
| T17 | FROM contact; custom table có EntitySetName bất quy tắc | URL từ metadata đúng, không pluralize |
| T18 | `SELECT fullname FROM contact WHERE fullname = 'having from account'` | Hết lỗi HAVING giả; URL vẫn contacts; không đổi logic FROM để hỗ trợ dialect mới |
| T19 | Unicode, `%`, `&`, `+`, quote trong literal | SQL parameter encode đúng một lần; round-trip giữ nguyên |
| T20 | TOP 1 / TOP (1) / DISTINCT TOP 1 | TOP được bỏ đúng chỗ, cap=1 |
| T21 | TOP thấp hơn/lớn hơn cap caller hợp lệ | Effective cap là min; giữ DISTINCT |
| T22 | TOP 0/âm/overflow/ngoặc lỗi/expression | Error; không metadata hoặc HTTP |
| T23 | TOP PERCENT/WITH TIES | Error; không truy vấn bị mở rộng |
| T24 | TOP 1 + max_records 0 hoặc 100000 | Lỗi max_records cũ; TOP không cứu validation |
| T25 | Resource/hint SQL | Dùng entity_name/detail_level; không name/include_columns |
| T26 | Resource primary key/date/HAVING | Không suy đoán PK; hướng dẫn metadata và lọc aggregate đúng |
| T27 | Name/flags/schema/defaults + success DTO | Contract giữ nguyên; 8 keys; text summary=JSON summary |
| T28 | RetrieveEntity success: metadata đầy đủ; null metadata; EntitySetName rỗng | Đầy đủ: URL đúng, SQL một lần. Hai response thiếu metadata: lỗi thiếu EntitySetName, không fallback/SQL HTTP |
| T29 | Metadata fault 0x80041102 | Table-not-found cũ + hint get_tables mới; không SQL HTTP |
| T30 | Metadata permission/transient/unknown fault | IsError, giữ lỗi gốc, không báo table-not-found |
| T31 | HTTP SDK exception ở trang 1 và trang 2 | Error envelope/details còn; không trả success toàn bộ |
| T32 | `value=[]`, thiếu value, value sai kiểu, JSON hỏng | Empty array success; payload lỗi trả IsError |
| T33 | URL continuation lặp, trang rỗng | Kết thúc bằng lỗi có giới hạn; không lặp vô hạn |
| T34 | Hủy request; response/body disposal | Cancellation được truyền; response disposed; schema không thêm token |
| T35 | Rows có null, bool, số, date/GUID string, alias, annotations | Types/keys giữ nguyên; serialize được sau dispose |

T01–T31 cùng T35 bảo vệ F01–F06; T32–T34 chỉ bắt buộc khi triển khai F07. Test resource tập trung hướng dẫn có tác động đến lời gọi, không khóa toàn bộ prose bằng snapshot lớn.

## 5. Thứ tự thực hiện cho AI tiếp theo

1. Đọc AGENTS.md, đối chiếu baseline và giữ working-tree changes của người dùng. Không stage/commit/push.
2. Thêm behavior fixtures để biểu diễn F01–F06; chứng minh lỗi trước sửa trên fake, không coi các test validation đang xanh là đủ.
3. Thực hiện F03 với xử lý literal tối thiểu, giữ các guard; F04 chỉ sửa validation trước rewrite TOP. Không bắt buộc token reader/parser chung. Tiếp F01/F02 trên paging loop.
4. Thực hiện F06 trong SQL path bằng helper có sẵn; tiếp F05 cập nhật SQL hints/resource/description.
5. Giữ public name/schema/flags. HOST mapping hiện đúng: không thêm category map hoặc tool class mới. Helper SQL không phải MCP tool.
6. Chạy focused checks bên dưới. Nếu nhận triển khai F07, thêm đúng các fixtures của F07 trước khi sửa.
7. Cập nhật MANUAL bằng **kết quả thật sau triển khai**, ghi version/build timestamp/date. Đánh dấu output cũ là historical; không sửa bool/hint cũ rồi ghi như thể đã chạy lại.

### File dự kiến thay đổi khi triển khai

- SQL, DTO, phần SqlInstructions trong INS.
- Chỉ thêm helper xử lý literal nhỏ nếu cần; nếu tách file thì đặt dưới `DynamicsCrm.DevKit.Cli/Mcp/Tools/Sql/`. Không tạo parser hoặc di chuyển regex chỉ để đáp ứng review.
- Các SQL tests và resource tests đã nêu; MANUAL sau runtime validation.
- F06 sử dụng META hiện có, không cần sửa Shared. Nếu gặp nhu cầu đổi Shared, dừng mở rộng scope đó và báo rõ, không refactor Helper.cs/XrmHelper.cs.

### Kiểm tra cho lượt triển khai, chưa thực hiện trong review

Đọc đầy đủ [build-cli workflow](D:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.AI/workflows/build-cli.md) và [unit-test workflow](D:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.AI/workflows/unit-test.md) trước khi thực hiện.

```powershell
dotnet build DynamicsCrm.DevKit.Cli/DynamicsCrm.DevKit.Cli.csproj
dotnet test DynamicsCrm.DevKit.Cli.UnitTests/DynamicsCrm.DevKit.Cli.UnitTests.csproj --framework net10.0 --filter "FullyQualifiedName~ExecuteSql|FullyQualifiedName~InstructionResourcesTests"
```

Nếu sửa helper contract chung, mở filter thêm đúng suite ảnh hưởng. Không yêu cầu full release/full coverage cho đợt sửa CLI này.

Theo AGENTS.md, sau sửa `Mcp/**` phải chạy `DynamicsCrm.DevKit.Scripts/Release.DynamicsCrm.DevKit.Cli.ps1`, chờ hoàn tất, restart connector MCP đang dùng và gọi `whoami`. Đối chiếu runtime version, build timestamp, process start time, assembly path/SHA với CLI build manifest dưới `Published/<version>/`. Xác nhận source version vẫn `4.44.44.44` và placeholder `xxxx.yy.zz HH.mm.ss` đã được phục hồi.

Smoke live sau restart: schema discovery và kiểm tra chữ ký hiện có; một SELECT có ORDER BY; một keyword literal; COUNT(*) với filter nhỏ; TOP hợp lệ và TOP 0; một pagination call có dữ liệu phù hợp. Chỉ đọc records hiện có, không tạo/xóa fixture Dataverse. Nếu không có đủ dữ liệu để đi qua trang 2, ghi “chưa xác minh live paging”; fake test không được gọi là live pass.

Không probe native TOP/OFFSET qua `execute_sql` để kết luận endpoint support: tool đã rewrite/chặn cú pháp. Việc probe native sau này cần test harness đọc trực tiếp Web API riêng, không gỡ guard `execute_webapi` chỉ để làm thử. Chưa cần probe này để thực hiện F01–F06.

## 6. Những gì giữ, thêm, sửa, xóa

| Hành động | Quyết định |
|---|---|
| Giữ | Tool execute_sql, guard giới hạn SQL, Web API transport, metadata EntitySetName, read-only contract, cap mặc định, annotation/JSON rows |
| Thêm | Behavior tests; xử lý literal tối thiểu nếu cần; hướng dẫn cap/truncation |
| Sửa | False positive trong literal, truncation, page-size stability, TOP validation, metadata fault fidelity, SQL hints/resource |
| Xóa | Hướng dẫn tham số cũ và primary-key “always”; không xóa guard/regex theo kiểu thay toàn bộ |
| Hoãn | FROM prevalidation/fallback cleanup, comment/quoted identifier support, native TOP/OFFSET change, public next_link/resume, export/file input, parser, TDS, CRUD SQL |

### Tiêu chí hoàn tất đợt sửa chính

- F01–F06 được thực hiện với behavior tests T01–T31 và T35 đạt; không chỉ thêm test để tăng coverage.
- Các test F03 giữ đúng giới hạn từ trang SQL Microsoft. Không đổi test để coi HAVING/subquery/SELECT-star hoặc cú pháp chưa được tài liệu xác nhận là thành công.
- Các delta contract đúng danh sách tại mục 1; không đổi public name/keys/flags hoặc scope Shared.
- Build/test CLI và reinstall/restart/runtime verification được báo bằng kết quả thực; phần bị chặn hoặc chưa chạy phải nêu riêng.
- MANUAL phân biệt kết quả historical, fixture mong muốn và kết quả live mới.
- Không thay đổi unrelated files, không stage/commit/push, không để lại timestamp source bị thay.

## 7. Dấu vết lượt review này

Đã đối chiếu source, tests, resource, metadata/error helpers và các trang Microsoft liên kết ở trên; có ba lượt audit độc lập bổ sung cho code, tests/contract và tài liệu Microsoft.

Sau phản hồi người dùng, đã mở lại đúng link SQL và rà từng đề xuất về dialect. Đã sửa F03, F04/F05 liên quan, T03–T07/T18, thứ tự triển khai và bảng thêm/sửa/xóa. Bản này thay thế đặc tả tokenizer/comment/quoted identifier của bản trước. Việc giữ nhận định false positive trong literal là kết luận hẹp có căn cứ; không phải khẳng định các giới hạn Dataverse sai.

Working tree trước review đã có thay đổi ở `DynamicsCrm.DevKit.Cli.UnitTests/coverlet.runsettings` và bốn artifact Analyzer/CLI/Tool/VSIX dưới `Published/4.44.44.44/`. Đây là thay đổi có sẵn; không phải output của review và không được hoàn nguyên/stage khi triển khai tiếp.

**Output duy nhất của lượt review: file Markdown này. Không có kết luận build/test/live pass mới.**
