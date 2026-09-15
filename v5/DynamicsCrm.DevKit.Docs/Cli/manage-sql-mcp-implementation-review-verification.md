# execute_sql — rà soát implementation và xác minh lại

Ngày review: **2026-09-15**. HEAD trước review: `ce035a624`. Working tree ban đầu sạch.

Phạm vi: **CLI / MCP (.NET 10.0)**, đối chiếu [handoff](manage-sql-mcp-review-implementation-handoff.md) với implementation đã có. Không đổi Shared, public tool name, tham số, tám JSON keys, flags hay resource mapping. F07 vẫn là backlog tùy chọn.

## Kết luận review và sửa lỗi

Implementation trước lượt này **chưa đạt đầy đủ F01–F06**. F01/F02/F03 có logic phù hợp trong phạm vi đã chốt; F04/F05/F06 và bằng chứng kiểm thử còn thiếu.

| Mức | Phát hiện | Sửa trong lượt này |
|---|---|---|
| P2 | `TOP 1 + 1`, `TOP (1) + 1`, `TOP (1) )` bị cắt TOP và đi đến metadata/HTTP. | Chặn toán tử/ngoặc lỗi ở phần tiếp sau số trước khi rewrite. Giữ guard SELECT-star hiện có. |
| P2 | `SELECT top1 name FROM account` bị nhận nhầm là TOP 1, làm mất tên cột và giảm cap. | Thêm word boundary cho keyword TOP. |
| P2 | Fault có mã khác nhưng message chứa `QueryBuilderNoEntity` bị báo table-not-found và mất lỗi gốc. | Chỉ nhận diện mã đã xác minh `0x80041102`; các exception khác tiếp tục qua helper lỗi chung. |
| P2 | Hướng dẫn còn mô tả redirect tự động, ví dụ subquery sai logical key/quan hệ, HAVING dễ bị hiểu là tương đương WHERE, thiếu semantics cap/truncation và link nguồn. | Sửa description và SQL resource; ví dụ JOIN giữ khóa/điều kiện, lọc aggregate/date phía client yêu cầu kết quả đầy đủ; thêm giới hạn ON/date functions và link Microsoft. |
| P2 | Hướng dẫn đọc DateTimeBehavior sau `get_tables` standard không đủ: chế độ standard bỏ trường `behavior`. | Hướng dẫn gọi `get_tables(entity_name='account', filter='createdon', detail_level='full')`, thay bằng bảng/cột thật. |
| P2 | Behavior tests chưa phủ ma trận bắt buộc; testcall cũ chưa phân biệt historical với lần chạy mới. | Bổ sung regression/behavior/contract tests; gắn nhãn historical cho [các capture cũ](../testcall/2.execute_sql.md). |

Không thay guard SQL thành parser và không suy rộng dialect dựa vào fake HTTP. Nguồn SQL chính vẫn là [Microsoft Dataverse Web API SQL](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/query/sql).

## Bằng chứng kiểm thử

- Trước sửa production: chạy sáu ca regression mới, **5 failed / 1 passed**. Ba ca TOP expression/ngoặc cách khoảng, tên cột `top1`, và metadata fault có message gây nhầm thất bại đúng như dự đoán. Ngoặc sai liền nhau `(1))` đã bị chặn và pass.
- Build CLI trước và sau sửa production: **0 warning / 0 error**.
- TRX red: `C:\Users\p\AppData\Local\Temp\devkit-sql-review-red\sql-review-red.trx`.
- Sau sửa: focused SQL/resource suite **129 passed / 0 failed / 0 skipped**, target `net10.0`.
- TRX focused: `C:\Users\p\AppData\Local\Temp\devkit-sql-review-focused\sql-review-focused.trx`.

```powershell
dotnet build DynamicsCrm.DevKit.Cli/DynamicsCrm.DevKit.Cli.csproj
dotnet test DynamicsCrm.DevKit.Cli.UnitTests/DynamicsCrm.DevKit.Cli.UnitTests.csproj --framework net10.0 --filter "FullyQualifiedName~ExecuteSql|FullyQualifiedName~InstructionResourcesTests"
```

| Ma trận handoff | Bằng chứng mới |
|---|---|
| T01–T07 | Literal/escape/semicolon giữ nguyên; guard thật vẫn dừng trước metadata/HTTP; các SELECT trong subset đi qua local validation. |
| T08–T16 | Exact cap có/không nextLink ở cả hai mode; trim response; 5000 + 2345/5000/3000; header ổn định; trang ngắn vẫn theo continuation giữ nguyên cookie. |
| T17–T24 | EntitySetName từ metadata, encoding Unicode/ký tự đặc biệt, TOP hợp lệ và invalid, caller cap không bị TOP sửa hộ. |
| T25–T27 | Metadata hint/resource dùng tham số thật; primary key/date/HAVING; đúng flags/defaults/tám JSON keys; text summary bằng JSON summary. |
| T28–T31 | Metadata thiếu, fault không có entity và fault khác, HTTP SDK/network fault ở trang 1/2; giữ envelope/details, không báo success một phần khi request lỗi. |
| T35 | Null, bool, số nguyên lớn/thập phân, date/GUID string, alias, annotations còn nguyên và serialize được sau return/dispose tài nguyên fake. |

Các kết quả release, coverage và runtime bên dưới sẽ được ghi từ lần chạy thực tế trong lượt review này.
