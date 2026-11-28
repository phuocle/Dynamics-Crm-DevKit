# Tổ chức catalog MCP theo hai phase · Hướng dẫn triển khai cho AI

**Trạng thái ngày 28/11/2026 · Chờ chủ repo duyệt bản HTML cập nhật.** Phase 1 rà 19 tool công bố `ReadOnly=true`. Mục tiêu là gộp 14 tên thành 5 tool, thêm một cách đọc riêng cho cột và giữ 5 tên độc lập. Bắt đầu các bước 1–8 sau khi chủ repo duyệt Phase 1. Phase 2 rà 23 tool hiện công bố `ReadOnly=false` trên baseline sau Phase 1 và có quyết định triển khai riêng. [Bản review và quyết định](mcp-readonly-tools-review.html#decision)

**Quy tắc phân loại.** Đọc annotation trên method công khai và kiểm tra toàn bộ action mà tên tool có thể thực hiện. Tool có cả `list` và `update` được xếp vào Phase 2. Quyền của danh tính Dataverse và chính sách `--dry-run` ở kết nối đích tiếp tục được áp dụng trong từng action. Một client có thể chọn cùng tên tool ở cả hai chế độ. Với tác động cục bộ như ghi file, kiểm tra contract riêng của từng tool và từng chế độ.

## Phase 1 · Bước 1. Chốt phiên bản và lưu mốc đối chiếu

1. Làm việc từ thư mục `v5`, đọc [AGENTS.md](../../AGENTS.md), kiểm tra `git status --short` và ghi nhận những thay đổi có sẵn. Phần thực thi thuộc CLI .NET 10, tập trung vào [MCP](../../DynamicsCrm.DevKit.Cli/Mcp/). Giữ các thay đổi và trạng thái file đã xóa của người dùng.
2. Chạy `devkit --version` và `devkit mcp --tools`. Ghi lại phiên bản, build, tên tool và SHA-256 của DLL cài đặt. Kiểm tra mã đang sửa khớp danh sách công khai. Giữ DLL và dependencies cũ hoặc lưu số liệu **trước khi** script release thay thế bản cài.
3. Dùng phép đo ở bước 7 trên bản cũ. Baseline của bản review có **42 tool, 19 read-only, 23 tool cho phép thao tác ghi hoặc hỗn hợp**. Có 40 tool nhận `env`. `McpServerHost.GetToolCatalog()` tạo danh sách tên/title. Kích thước schema phải lấy từ descriptor SDK. [Kết quả đo](mcp-readonly-tools-review.html#tokens)

| Phạm vi | Số tool | Token của tên + mô tả + input schema | Token của descriptor đầy đủ |
|---|---:|---:|---:|
| Toàn catalog trước thay đổi | 42 | 26.504 | 47.894 |
| 14 tool được gộp, trước thay đổi | 14 | 5.568 | 15.873 |
| Catalog nghiệm thu Phase 1 | 33 | Đo thực tế, thấp hơn baseline toàn catalog | Đo thực tế, thấp hơn baseline toàn catalog |

Lệnh ở bước 7 đã tái lập cả bốn số token trên bản cài dùng cho review. Tính theo UTF-8, JSON chuẩn hóa của toàn catalog có 120.544 byte cho phép chiếu input và 208.781 byte cho descriptor đầy đủ. Riêng 14 tool có 24.950 và 67.398 byte tương ứng. JSON gốc do SDK serialize có 215.375 byte, SHA-256 `3aeb4683fc67adf33e0557333dd2ac2983a740a9eee20b7c9871dc26cfea64bc`. Đo cùng thứ tự tool, serializer, tokenizer và phiên bản SDK ở hai đầu. Khi baseline của checkout mới khác bản review, ghi cả hai baseline, giải thích delta và so kết quả mới với mốc được đo ngay trước thay đổi trên cùng revision.

Đã đo lại bản cài `4.44.44.44` build `28.11.2026 11:11:10`. Tập 42 tên, số token và hash **của JSON descriptor** ở trên đều khớp với lần đo build `27.11.2026 12:07:01`. Đo riêng `search_records` với một envelope `tools` cho kết quả 427 token phép chiếu input và 1.038 token descriptor đầy đủ. Cặp `manage_view` và `manage_chart` dùng 1.866 và 2.894 token tương ứng trên build hiện tại. Khi chạy đoạn mã ở bước 7, có thể thay danh sách của phạm vi `routes` bằng một trong hai tập này để tái lập.

## Phase 1 · Bước 2. Cố định tên và hợp đồng gọi

Đăng ký **5 entry** trong namespace `DynamicsCrm.DevKit.Cli.Mcp.Tools`. Chuyển **14 entry cũ** thành worker nội bộ hoặc giữ làm worker không mang attribute MCP. Khi cutover, 14 tên cũ rời danh sách và direct call bằng tên cũ trả lỗi unknown tool. Chi tiết đường dẫn tương đương nằm trong [bảng catalog của bản review](mcp-readonly-tools-review.html#catalog).

| Tool công khai | Chọn nhánh | Worker hiện tại |
|---|---|---|
| `query_records` | Có đúng một trong hai chuỗi có nội dung `fetchxml`, `sql` | `execute_fetchxml`, `execute_sql` |
| `inspect_customizations` | `topic=tables / columns / solution_components / custom_controls` | `get_tables` cho bảng và logic đọc cột dùng chung, `get_solution_components`, `get_custom_controls` |
| `inspect_extensions` | `topic=plugins / messages` | `get_plugins`, `get_messages` |
| `inspect_automation` | `topic=flows / workflows / business_rules / business_process_flows` | `get_flows`, `get_workflows`, `get_business_rules`, `get_business_process_flows` |
| `inspect_diagnostics` | `topic=plugin_trace_logs / system_jobs / audit_history` | `get_plugin_trace_logs`, `get_system_jobs`, `get_audit_history` |

Mỗi lời gọi dùng một object phẳng. Giữ tên snake_case và kiểu JSON hiện tại cho các trường nghiệp vụ. Bốn tool `inspect_*` yêu cầu `topic` có enum chuỗi như trong bảng. `query_records` suy ra nhánh từ nội dung trường truy vấn. Phát lỗi khi thiếu hoặc có đồng thời cả hai truy vấn có nội dung. Các tham số còn lại của `query_records` là `max_records`, `get_all`, `env`. Ví dụ đối chiếu input trước và sau:

| Trước | Sau |
|---|---|
| `execute_sql({"sql":"select top 5 name from account"})` | `query_records({"sql":"select top 5 name from account"})` |
| `get_flows({"action":"runs","flow_id":"<id>","env":"uat"})` | `inspect_automation({"topic":"flows","action":"runs","flow_id":"<id>","env":"uat"})` |
| `get_audit_history({"entity_name":"account","operation":"Update"})` | `inspect_diagnostics({"topic":"audit_history","entity_name":"account","operation":"Update"})` |
| `get_tables({"entity_name":"account","filter":"address1_","detail_level":"full"})` | Để giữ toàn bộ chi tiết bảng, dùng `inspect_customizations({"topic":"tables","entity_name":"account","filter":"address1_","detail_level":"full"})`. Để chỉ đọc nhóm cột địa chỉ, đổi `topic` thành `"columns"`. |

Giữ 5 read-only độc lập gồm `whoami`, `connection_list`, `read_instruction`, `parse_record_url`, `search_records`. Giữ nguyên 23 tên và quyền của nhóm còn lại, kể cả `execute_webapi` và các `manage_*` có nhánh đọc. Không thêm mode legacy, alias MCP hoặc bridge gọi ngầm tên cũ. Các tài liệu hướng dẫn di chuyển có thể nhắc tên cũ để người dùng tìm kiếm.

### Lựa chọn giữa tìm kiếm, truy vấn và metadata

Giữ `search_records` độc lập xuyên suốt hai phase. Khi tìm theo từ khóa, gọi `search_records({"search_term":"Contoso"})` để nhận kết quả theo độ liên quan, điểm số và đoạn khớp nếu Dataverse trả về. `action="status"` dành cho việc kiểm tra provisioning và chỉ mục theo bảng. Khi đã biết logic lọc, cột, JOIN hoặc cần phân trang, chọn `query_records`. Khi cần danh sách cột để soạn truy vấn, chọn `inspect_customizations(topic="columns")`. Gộp search vào query chỉ tiết kiệm thêm một tên và mở rộng quyền theo tên sang hai action phụ thuộc dịch vụ Dataverse Search.

Trong [SearchRecordsTool](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/SearchRecordsTool.cs), `searchquery` dùng HTTP POST để đọc. Với cả `search` và `status`, `detail_level="compact"` trả kết quả tóm tắt. `full` ở chế độ thường ghi payload đã xử lý vào `.devkit/search_records/`, trả `filePath` và thu gọn dữ liệu inline. Với `--dry-run`, hai action vẫn đọc, `full` trả attributes hoặc indexed fields inline và bỏ qua ghi file. Hướng dẫn phân biệt search theo hành vi thay vì động từ HTTP.

## Phase 1 · Bước 3. Chuyển tham số tới đúng worker

Đọc chữ ký entry và worker tương ứng trong [Mcp/Tools](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/). Ma trận dưới đây ghi tham số nghiệp vụ của mỗi route. Mỗi route đều nhận `env=null`. Giá trị mặc định của chuỗi viết không có dấu `=` trong bảng là `""`. Các trường ID, tên và bộ lọc là chuỗi, số đếm và số phút là số nguyên, các cờ là boolean. Với BPF, ba trường nullable được ghi riêng.

| Route | Tham số của worker và mặc định | Hành vi cần bảo toàn |
|---|---|---|
| FetchXML | `fetchxml, max_records=5000, get_all=false` | `max_records<=0` báo lỗi. Giá trị lớn hơn 5.000 được hạ xuống 5.000. Giữ phân trang, `records`, `totalReturned`, `hasMore`. |
| SQL | `sql, max_records=5000, get_all=false` | SQL SELECT và kiểm tra câu lệnh hiện có. Giá trị ngoài 1–50.000 báo lỗi. Giữ `TOP`, phân trang, `rows`, `row_count`, `result_truncated`. |
| tables | `entity_name, filter, custom_only=false, include_intersect=false, names, detail_level="compact", max_records=100` | Chế độ danh sách/chi tiết, ưu tiên `names`, lọc cột và mức `compact/standard/full`. |
| columns (mới) | `entity_name` bắt buộc, `filter=""`, `detail_level="compact"` | Đọc các cột của một bảng. Giữ nguyên bộ lọc và các mức `compact/standard/full` của chi tiết bảng. Cả ba mức chỉ trả phần thông tin bảng và cột, lược các danh sách quan hệ và alternate key. |
| solution_components | `solution_name, include_active_layers=false, active_layers_only=false` | Tên bắt buộc. Giữ cách phân giải nhiều kết quả, các lớp active và quan hệ giữa hai cờ. |
| custom_controls | `name, name_match="contains", kind, data_type` | `contains/prefix/exact`, lọc loại PCF và kiểu dữ liệu. |
| plugins | `assembly_name, entity_name, message_name, type_name, include_images=true, include_config=false, stage, mode, active_only=true, max_records=100, download=false, assembly_id, package_id, package_name` | Giữ list/detail, step filters và lựa chọn package hoặc assembly khi download. Giữ mặc định ẩn config nhạy cảm. |
| messages | `entity_name="none", message_name, include_custom_actions=true, max_records=100` | Giữ global/entity, SDK/custom action và chi tiết theo tên. |
| flows | `flow_id, action="list", name_filter, owner_filter, status="active", status_filter, minutes_ago=1440, max_records=50` | `flow_id` chọn chi tiết, `action="runs"` chọn lịch sử, `status_filter` là trạng thái run. |
| workflows | `workflow_id, entity_name, mode, status="active", trigger_field, name_filter, max_records=50` | Giữ tìm theo trigger, chế độ background/realtime và chuyển sang chi tiết khi lọc đúng một tên. |
| business_rules | `entity_name, rule_id, status, max_records=50` | Giữ filter lifecycle, chuỗi rỗng cho mọi trạng thái. Worker xử lý `max_records<=0` và detail. |
| business_process_flows | `bpf_id=null, bpf_name=null, entity_name=null, status="all", include_stages=false, max_records=50` | Không lọc trạng thái mặc định. Chi tiết có stage, danh sách tùy `include_stages`. |
| plugin_trace_logs | `record_id, type_name, entity_name, message_name, mode, correlation_id, minutes_ago=0, max_records=50` | Worker diễn giải 0 thành 60 phút. Lấy detail bằng GUID, giới hạn 200 ở danh sách. |
| system_jobs | `record_id, entity_name, status="failed", operation_type, name_filter, correlation_id, minutes_ago=0, max_records=50` | Worker diễn giải 0 thành 1.440 phút. Giữ phân loại job và correlation. |
| audit_history | `entity_name, record_id, minutes_ago=1440, user_filter, operation, attribute_name, max_records=50, from_date, to_date` | `from_date` ưu tiên hơn số phút. Detail cần entity và record ID. Filter theo attribute cần record ID. |

1. Dùng tham số có kiểu và xác định được sự hiện diện của trường khi kiểm tra tham số theo topic. Với trường dùng cho nhiều topic, giữ trạng thái chưa truyền cho đến khi đã chọn worker. Truyền `false`, `0`, `""` tường minh qua đúng nhánh. Dùng whitelist tên trường từ dòng tương ứng, cộng `topic` và `env`. Từ chối tham số của topic khác với thông báo chỉ rõ trường và topic. Với lỗi nghiệp vụ của nhánh hợp lệ, đi qua validation đang có của worker.
2. Trước khi gửi yêu cầu Dataverse, chọn một nhánh duy nhất. Mỗi entry mới sở hữu đúng một lần gọi [McpToolInvocation](../../DynamicsCrm.DevKit.Cli/Mcp/McpToolInvocation.cs) để lấy lease, chọn `ConnectionBundle` và giữ cancellation/impersonation. Bên trong invocation, tạo worker từ các dependency trong bundle như entry cũ và gọi thẳng method nghiệp vụ của nhánh. Giữ nguyên cách gắn `env` vào text và structured result khi chọn môi trường khác startup.
3. Khi `plugins.download=true`, chuyển tiếp `McpServer` để giải workspace và lưu DLL/package vào `.devkit/get_plugins/` như trước. `McpServer` và `CancellationToken` là dependency từ SDK. Chúng không xuất hiện trong input schema. Dùng fake và workspace tạm để thử. `search_records` duy trì cách xử lý file full payload và dry-run hiện có.

### Hợp đồng đọc cột

[GetTablesTool](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/GetTablesTool.cs) hiện phân giải bảng rồi dựng `table.attributes`. `manage_table` và `manage_column` là hai lối create/update có validation và quyền ghi khác nhau. Đưa việc đọc cột ra một giá trị `topic` có thể khám phá ngay từ enum. Catalog vẫn có đúng năm tên gộp. Có 14 nhánh tương thích với 14 tool cũ và một nhánh `columns` bổ sung.

1. Yêu cầu `entity_name` có nội dung trước khi chọn bảng. Dùng cùng cơ chế phân giải display name, logical name và schema name của `get_tables`. Với bảng không tìm thấy hoặc nhiều bảng cùng phù hợp, giữ lỗi và dữ liệu gợi ý hiện có. Từ chối các tham số riêng của chế độ liệt kê bảng gồm `names`, `custom_only`, `include_intersect` và `max_records` cho `topic="columns"`.
2. `filter` rỗng liệt kê các thuộc tính hiển thị của bảng. Một giá trị khớp tiền tố logical name, có thể trả nhiều cột. Khi phân tách bằng dấu phẩy, dấu gạch đứng hoặc dấu chấm phẩy, giữ word-boundary theo logical name hoặc khớp trọn display name, không phân biệt hoa thường. Dùng cùng quy tắc lọc cột phụ do Dataverse sinh, ngoại lệ ảnh, thứ tự logical name và gợi ý gần đúng khi không có kết quả.
3. Tái sử dụng bộ dựng `TableAttributeEntry` trên metadata đã phân giải cho cả `tables` và `columns`. Trả `GetTablesResult` với `mode="detail"`, `entityName` đã phân giải, `detailLevel`, `filter` khi có và `count=1` là số bảng. Cột nằm ở `table.attributes`. Khi không khớp, giữ quy ước field null được lược, summary báo 0 cột và `hint` nếu có filter. Dùng DTO hiện tại một lần trong `anyOf`. Giữ thông tin nhận dạng bảng, bỏ các danh sách quan hệ và định nghĩa key trên nhánh cột, kể cả mức `full`. Mức `full` vẫn tính `isAlternateKey` theo key của bảng và giữ `rawFormulaDefinition`, `formulaDefinition` cùng các trường khác theo đúng worker. Chọn nhánh trước khi dựng các danh sách quan hệ để tiết kiệm xử lý. Nhánh `tables` tiếp tục trả hợp đồng detail nguyên gốc.

## Phase 1 · Bước 4. Đăng ký schema, resource và tên gọi

1. Đặt `[McpServerToolType]` trên 5 entry. Với mỗi method mới, khai báo `ReadOnly=true`, `Idempotent=true`, `Destructive=false` và hỗ trợ structured content. Giữ contract của các error dùng chung. Xóa đăng ký MCP cũ ở cả type/method khi chuyển thành worker. Việc đăng ký qua `WithToolsFromAssembly()` phải cho cùng 33 tên với [GetToolCatalog](../../DynamicsCrm.DevKit.Cli/Mcp/McpServerHost.cs).
2. Xuất `outputSchema` dạng object có `anyOf` chứa schema SDK của từng DTO cũ theo đúng nhóm. Ví dụ `query_records` dùng `FetchXmlResult` và `SqlQueryResult`. Tận dụng schema từng route đã có, giữ JSON property names và chuyển các `$ref/$defs` tới đúng vị trí sau khi ghép. Tích hợp tạo descriptor vào đường đăng ký thực tế của SDK 2.4.0 và phép đo offline ở bước 7. Kiểm tra descriptor **sau mọi cấu hình**. Trả trực tiếp `CallToolResult` của worker, gồm `Content`, `StructuredContent`, `IsError`. Không thêm wrapper mang `topic` hoặc `data` vào payload.
3. Chuyển key `nameof(ExecuteSqlTool)` trong `ToolResourceMap` sang entry mới của `query_records`, nối đúng `instructions_for_sql`. Giữ `DisabledToolSet` phản ánh catalog chính thức. Giữ các URI cũ trong mô tả ngắn của những tool liên quan. Tận dụng các resource hiện hữu cho bảng tham số dài, ví dụ `docs://instructions_for_sql`, `docs://data_operations_guide`, `docs://schema_tools_guide`, `docs://server_logic_guide`. Chỉ ra tên resource mà AI có thể đọc khi cần.
4. Kiểm tra [ReadInstructionTool](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/ReadInstructionTool.cs). `GetReferences()` đọc literal URI trong description, còn lookup hiện hành lấy trực tiếp phần tử từ dictionary. Test từng resource công bố qua resource handler lẫn `read_instruction`, cả khi URI không có tham chiếu. Giữ `referencedBy` khớp tên công khai. Khi chạm thông báo đếm catalog, lấy số thực tế từ entry vì baseline hiện có văn bản “13” cho danh sách 14 resources.
5. Tìm 14 tên cũ trong source và tài liệu. Đổi lời gọi thực thi được trong description, actionable hint, `ExecuteWebApiTool` redirects, resource Markdown, CLI README và các ví dụ/suite `TestAllMcpCall`. Giữ nguyên phần lỗi nghiệp vụ, trường JSON và các literal đường dẫn file mà caller đang dùng. Tách rõ tên lịch sử trong tài liệu migration với chỉ dẫn thực thi trên bản mới.
6. Rà cấu hình client và hướng dẫn người dùng chuyển allowlist theo **từng nhóm**. Nếu policy cũ cho phép đủ mọi nhánh, người quản trị có thể thay nhóm cũ bằng tên mới. Nếu chỉ cho phép một phần, đổi một tên thành cả nhóm sẽ mở rộng quyền đọc, kể cả đọc cấu hình plugin hoặc audit. Ghi rõ các nhánh mới có thể truy cập và để chủ policy chọn cấp quyền. Thay tên trong prompt, automation và lời gọi đã kiểm soát theo bảng bước 2. Chỉ sửa cấu hình người dùng khi họ yêu cầu riêng.

## Phase 1 · Bước 5. Kiểm 14 nhánh cũ, nhánh columns và search

Chạy MSTest .NET 10 với resolver giả và các bộ `FakeXrmEasy`/fake Web API sẵn có. Cập nhật bảng entry trong [McpToolEntryRoutingCoverageTests](../../DynamicsCrm.DevKit.Cli.UnitTests/Cli/Mcp/CrossTool/McpToolEntryRoutingCoverageTests.cs) và bổ sung case tại đường gọi công khai mới khi test worker hiện tại chưa bao phủ.

[McpMultiConnectionTests](../../DynamicsCrm.DevKit.Cli.UnitTests/Cli/Mcp/Infrastructure/McpMultiConnectionTests.cs) còn chốt 41 tool, 18 read-only và 39 tool nhận `env`. [McpServerHostCoverageTests](../../DynamicsCrm.DevKit.Cli.UnitTests/Cli/Mcp/Infrastructure/McpServerHostCoverageTests.cs) và catalog thực tế cho thấy tổng hiện tại là 42. Ghi nhận chênh lệch đã có này ở mốc trước thay đổi. Sau khi gom nhóm, đối chiếu **tập tên cụ thể** với SDK trước khi kiểm các số 33/10/31.

| Nhóm test | Điều kiện thành công |
|---|---|
| Catalog và descriptor | Tập tên bằng tập 42 ban đầu trừ 14 cộng 5. 33 tool duy nhất, 10 read-only, 23 tool còn lại, 31 nhận `env`. Giữ hai ngoại lệ `read_instruction` và `connection_list`. Thử gọi tên đã bỏ bằng dispatcher offline để xác nhận unknown tool. |
| Bind và dispatch | Mỗi route có ca tối thiểu, list/detail hoặc biến thể chính, giá trị tường minh và lỗi nghiệp vụ. So sánh kết quả nhận từ facade với worker cũ bằng cùng fixture, gồm text, error/hint, structured fields và thứ tự content block. Kiểm tra thiếu/sai `topic`, field của topic khác, query thiếu hoặc có cả hai dialect. Không gọi fake Dataverse khi selector sai. |
| Routing và policy | Startup, alias chọn môi trường khác, ID không tồn tại, cancellation, invocation đồng thời trên hai env, cùng catalog khi bật dry-run. Xác nhận một lần resolve/attribution, đúng `env` tag. Giữ hành vi offline của `connection_list`, `read_instruction`. `execute_webapi`/nhánh ghi vẫn qua gate hiện có. |
| Ca nghiệp vụ dễ vỡ | SQL `max_records=5001` và giới hạn 50.000, FetchXML clamp 5.000. Table detail `full`; solution nhiều kết quả/active layer; PCF `kind`; plugins `include_config=false` và download .dll/.nupkg; messages global; flows `runs`; workflow một tên; BPF stages; rules status rỗng; trace/job/audit khác cửa sổ thời gian. |
| Output schema và resource | Mọi payload thành công mẫu hợp lệ với schema đã công bố và nhánh DTO tương ứng. Giữ hình dạng payload lỗi hiện có. Mọi topic enum, tham số và URI công bố dùng được. Catalog + nội dung `read_instruction` cung cấp tên gọi mới. Fake file writes giữ đường dẫn và nội dung nghiệp vụ. |

Kiểm tra riêng hai luồng người dùng đã review.

- **Đọc cột.** Dùng cùng fake metadata cho `tables` và `columns`. So sánh giá trị và thứ tự từng `table.attributes` ở cả ba mức. Kiểm tra entity rỗng, tên trùng, filter prefix/multi, không khớp, công thức, custom column và alternate key. Nhánh `tables(full)` vẫn trả quan hệ/key. Nhánh `columns(full)` bỏ các danh sách này và giữ metadata đầy đủ của cột. Đo byte/token trên cùng fixture có quan hệ trước và sau khi thu gọn response, ghi riêng với phép đo descriptor. [Test fixture bảng](../../DynamicsCrm.DevKit.Cli.UnitTests/Cli/Mcp/GetTables/GetTablesFakeSdkCoverageTests.cs) · [Test công thức](../../DynamicsCrm.DevKit.Cli.UnitTests/Cli/Mcp/GetTables/GetTablesRareBranchCoverageTests.cs)
- **Tìm kiếm.** Chạy cả `search` và `status` trên fake Web API ở `compact`, `full`, `full + --dry-run`. So sánh ranking và metadata trạng thái. Kiểm tra `filePath`, file của lần chạy và nơi chứa attributes/indexed fields theo từng chế độ. Xác nhận `search` thiếu `search_term` báo lỗi và `status` chạy được khi thiếu keyword. So sánh catalog và annotations ở dry-run và chế độ thường. [Test tìm kiếm](../../DynamicsCrm.DevKit.Cli.UnitTests/Cli/Mcp/SearchRecords/)

## Phase 1 · Bước 6. Build và chạy test CLI

Từ `v5`, chạy lệnh dưới đây. Bộ lọc bao phủ các suite MCP và các bài kiểm tra lệnh/cross-tool liên quan có `Mcp` trong tên đầy đủ. Bổ sung tên test ngoài bộ lọc nếu thay đổi đụng đến chúng. Ghi số test executed, passed, failed/skipped và exit code.

```powershell
dotnet build DynamicsCrm.DevKit.Cli/DynamicsCrm.DevKit.Cli.csproj
dotnet test DynamicsCrm.DevKit.Cli.UnitTests/DynamicsCrm.DevKit.Cli.UnitTests.csproj -f net10.0 --filter "FullyQualifiedName~Mcp"
```

## Phase 1 · Bước 7. Đo token trước và sau trên cùng descriptor

Chạy đoạn dưới trong **hai tiến trình PowerShell 7.6/.NET 10 riêng biệt** để tránh reuse assembly đã load. Dùng Python 3.11, `tiktoken 0.12.0`, `o200k_base` ở cả hai lần. Đặt `$dll` thành DLL cũ trước khi triển khai, sau đó thành DLL mới cùng thư mục dependencies. Đo từ SDK trong bộ nhớ, không cần chạy server hoặc đăng nhập. Bản cũ dùng `WithToolsFromAssembly` và `DisabledToolSet` rỗng. **Bản mới phải gọi cùng đường tạo descriptor cuối cùng như host** nếu bước 4 bổ sung post-configuration hoặc đăng ký tường minh. Đối chiếu tập tên với `--tools` và kiểm tra 5 output schema đã có `anyOf` trước khi ghi nhận kết quả.

```powershell
$ErrorActionPreference = 'Stop'
$dll = Get-Item "$env:USERPROFILE/.dotnet/tools/.store/dynamicscrm.devkit.cli/4.44.44.44/dynamicscrm.devkit.cli/4.44.44.44/tools/net10.0/any/DynamicsCrm.DevKit.Cli.dll"
$a = [Reflection.Assembly]::LoadFrom($dll.FullName)
foreach ($name in 'ModelContextProtocol.Core','ModelContextProtocol','Microsoft.Extensions.DependencyInjection','Microsoft.Extensions.DependencyInjection.Abstractions') {
    [void][Reflection.Assembly]::LoadFrom((Join-Path $dll.DirectoryName "$name.dll"))
}
$di = [Microsoft.Extensions.DependencyInjection.ServiceCollection]::new()
$b = [Microsoft.Extensions.DependencyInjection.McpServerServiceCollectionExtensions]::AddMcpServer($di,$null)
[void][Microsoft.Extensions.DependencyInjection.McpServerBuilderExtensions]::WithToolsFromAssembly($b,$a,$null)
# Bản mới: áp dụng thêm cấu hình descriptor dùng chung với host ở đây, nếu có.
$sp = [Microsoft.Extensions.DependencyInjection.ServiceCollectionContainerBuilderExtensions]::BuildServiceProvider($di)
$o = [Microsoft.Extensions.DependencyInjection.ServiceProviderServiceExtensions]::GetRequiredService($sp,[Microsoft.Extensions.Options.IOptions[ModelContextProtocol.Server.McpServerOptions]])
$list = [System.Collections.Generic.List[ModelContextProtocol.Protocol.Tool]]::new()
foreach ($tool in ($o.Value.ToolCollection | ForEach-Object ProtocolTool | Sort-Object Name -CaseSensitive)) {
    $list.Add($tool)
}
$result = [ModelContextProtocol.Protocol.ListToolsResult]::new()
$result.Tools = $list
$json = [Text.Json.JsonSerializer]::Serialize($result,[ModelContextProtocol.Protocol.ListToolsResult],[ModelContextProtocol.McpJsonUtilities]::DefaultOptions)
$sp.Dispose()
$meter = @'
import sys, json, hashlib, tiktoken
raw = sys.stdin.buffer.read().rstrip(b'\r\n')
tools = json.loads(raw)['tools']
enc = tiktoken.get_encoding('o200k_base')
before = set('execute_sql execute_fetchxml get_tables get_solution_components get_custom_controls get_plugins get_messages get_flows get_workflows get_business_rules get_business_process_flows get_plugin_trace_logs get_system_jobs get_audit_history'.split())
after = set('query_records inspect_customizations inspect_extensions inspect_automation inspect_diagnostics'.split())
print('SDK bytes/SHA256:', len(raw), hashlib.sha256(raw).hexdigest())
for scope, rows in [('all', tools), ('routes', [t for t in tools if t['name'] in before | after])]:
    for label, shape in [('full', rows), ('input', [{k:t[k] for k in ('name','description','inputSchema')} for t in rows])]:
        s = json.dumps({'tools':shape}, ensure_ascii=False, separators=(',',':'))
        print(scope, label, len(rows), 'tools,', len(s.encode('utf-8')), 'bytes,', len(enc.encode(s)), 'tokens')
'@
$OutputEncoding = [Text.UTF8Encoding]::new($false)
$json | python -c $meter
if ($LASTEXITCODE -ne 0) { throw 'Catalog measurement failed' }
```

Ghi UTF-8 bytes và token của **cả hai phạm vi** và **cả hai phép chiếu**. Nghiệm thu khi hai chỉ số token toàn catalog đều giảm và các bài kiểm tra schema/route qua. Chỉ tiêu không ấn định phần trăm. Khi một chỉ số tăng, kiểm tra mô tả lặp, schema tham số và `$defs` trùng, rồi đo lại sau khi tinh gọn. Nếu thiếu vocab, ghi bytes và “chưa đo token”, hoàn tất phép đo trước khi kết luận. Số token ở đây là kích thước descriptor chuẩn hóa theo `o200k_base`. Context thực tế còn phụ thuộc việc client tải tool, cắt trường hoặc cache.

## Phase 1 · Bước 8. Cài bản Release và giao kết quả

1. Đọc đầy đủ [devkit-skill-build-release-cli](../../.agents/skills/devkit-skill-build-release-cli/SKILL.md) và [devkit-skill-shared](../../.agents/skills/devkit-skill-shared/SKILL.md). Chạy script dưới đây và chờ exit code. Script dừng các tiến trình devkit/MCP đang giữ DLL, đóng gói và cài lại CLI.

   ```powershell
   & ".\.agents\skills\devkit-skill-shared\scripts\Release.DynamicsCrm.DevKit.Cli.ps1" -Configuration Release
   devkit --version
   devkit mcp --tools
   ```

2. Kiểm tra artifact `Published/<version>/DynamicsCrm.DevKit.Cli.<version>.nupkg` và manifest cùng tên đuôi `.build-manifest.json`. Đối chiếu `configuration=Release`, `packageSha256`, `installedAssemblyPath` và `installedAssemblySha256`. Phiên bản source vẫn là `4.44.44.44`. Kiểm tra `xxxx.yy.zz HH.mm.ss` đã trở về trong `DynamicsCrm.DevKit.Shared/Const.cs` và README của `ProjectTemplates/CSharp/14.DataverseTestProjectTemplate/`.
3. Xác nhận 33 tên trên bản cài mới, chạy lại phép đo ở bước 7 trên DLL từ manifest. Kiểm tra diff, `git status --short` và các file do release tạo. Nếu file bị xóa trong quá trình build, ghi rõ theo AGENTS.md. Repo giao việc kiểm thử Dataverse live cho AI khác. Chỉ restart connector, gọi live `whoami` hoặc tool live khi chủ repo yêu cầu riêng.
4. Báo cáo build + test, tập tên và số tool, bytes/token trước–sau, phần trăm giảm cho từng phép đo, kết quả verify manifest và ghi chú migration allowlist. Ghi rõ những phép kiểm chưa thực hiện. Chủ repo có thể đối chiếu với [tiêu chí nghiệm thu](mcp-readonly-tools-review.html#verification).

## Phase 2 · Bước 9. Rà 23 tool có khả năng ghi

Sau khi Phase 1 đã được nghiệm thu, dùng chính artifact đã cài ở bước 8 làm baseline mới. Bảng sau là danh mục review, mỗi tên xuất hiện đúng một lần. Việc duyệt Phase 1 chỉ cho phép triển khai các bước 1–8. [Chiến lược Phase 2](mcp-readonly-tools-review.html#phase2)

| Miền nghiệp vụ | Tên hiện tại | Đề xuất cho lần review đầu |
|---|---|---|
| Schema (4) | `manage_table`, `manage_column`, `manage_relationship`, `manage_choice` | Giữ từng tên. Tạo bảng, thay đổi cột, quan hệ và bộ lựa chọn có input và quy tắc cập nhật riêng. AI đọc bảng/cột qua `inspect_customizations` trước khi chọn thao tác ghi. |
| Bản ghi và dữ liệu (5) | `manage_record`, `upsert_records`, `manage_record_file`, `manage_deleted_records`, `generate_demo_data` | Giữ từng tên. Đối chiếu CRUD, xử lý hàng loạt, file, khôi phục và sinh dữ liệu như các quyền độc lập. |
| App và giao diện (7) | `manage_app`, `manage_form`, `manage_view`, `manage_chart`, `manage_ribbon`, `manage_command`, `manage_webresource` | Chỉ chọn cặp view/chart làm ứng viên đầu tiên. Giữ năm tên còn lại. |
| Mở rộng (2) | `manage_custom_api`, `manage_function` | Giữ từng tên và hợp đồng thực thi riêng. |
| Quyền, cấu hình và vận hành (5) | `manage_role`, `manage_environment_variable`, `manage_report`, `execute_webapi`, `publish_customizations` | Giữ từng tên. `execute_webapi` xử lý cả đọc và ghi tùy request. `publish_customizations` thay đổi trạng thái xuất bản. |

1. Lập ma trận theo action/request của mỗi tool. Ghi đọc Dataverse, ghi Dataverse, file cục bộ, điều kiện xác nhận và kết quả trong từng chế độ. Một tool hỗn hợp tiếp tục giữ `ReadOnly=false` ngay cả với caller chỉ định action đọc. Giữ các nhánh đọc gắn với workflow của tool hiện tại. Đề xuất đưa thêm action sang một tool chỉ đọc cần có quyền truy cập tương đương, output và migration rõ ràng.
2. Lấy tập tên thực từ SDK, đối chiếu danh mục 23 tool. Đọc các contract test kiểm tra mutation bị chặn trước transport/service và policy theo kết nối. Ghi lại những trường hợp vẫn chạy phần đọc/validation hoặc xử lý file khi bật dry-run. [DryRunGatewayContractTests](../../DynamicsCrm.DevKit.Cli.UnitTests/Cli/Mcp/CrossTool/DryRunGatewayContractTests.cs)
3. Ghi nhận nhu cầu allowlist theo tên trước khi dựng phương án gộp. Ví dụ, client chỉ được sửa view sẽ có thể sửa chart nếu được cấp tên chung ở một client chỉ lọc theo tool. Liệt kê từng quyền sẽ mở rộng để chủ policy review.

## Phase 2 · Bước 10. So sánh ứng viên view/chart và xin quyết định riêng

1. Trên fixture offline, đối chiếu bảy action trùng tên `list`, `detail`, `create`, `update`, `rename`, `set_default`, `undo` cho cả hai loại đối tượng. Lập descriptor thử nghiệm riêng với selector phân biệt view/chart, tham số có kiểu và validation tách theo loại. Dùng cùng serializer/tokenizer ở bước 7. Lưu số token trước/sau cho toàn bộ catalog và riêng cặp ứng viên. Bản thử nghiệm phục vụ review, chạy ngoài catalog đã cài.
2. Kiểm tra tương đương từng đường dẫn. View dùng FetchXML/LayoutXML và hai file backup của view, chart dùng chart XML, `presentationdescription` và file `.chart.json`. Giữ cách resolve ID/tên, xác nhận riêng khi tạo chart, `set_default`, publish, lỗi, dữ liệu có cấu trúc, đường dẫn và kiểm tra identity khi undo. Dùng fake trên môi trường mặc định và môi trường chọn bằng `env`. [ManageViewTool](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageViewTool.cs) · [ManageChartTool](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageChartTool.cs)
3. Thử `list/detail` và một ca ghi hợp lệ cho mỗi action ở chế độ thường và dry-run. So sánh số lần gọi SDK/Web API, tệp backup, đường dẫn và output với từng tool ban đầu trên cùng fixture. Ghi riêng các read phục vụ validation. Xác nhận mutation không đến backend khi bị chặn, annotation của descriptor hỗn hợp vẫn `ReadOnly=false` và catalog giống nhau ở cả hai chế độ.
4. Trình chủ repo so sánh token, quyền allowlist, khả năng AI chọn đúng loại/đúng action và kết quả parity. Chốt tên public, schema và migration cụ thể nếu chủ repo chọn phương án gộp. Chỉ triển khai thay đổi Phase 2 khi chủ repo duyệt đề xuất riêng này. Nếu giữ hai tool, catalog tiếp tục có 33 tên. Nếu duyệt thay đúng cặp view/chart bằng một tên, catalog dự kiến có 32 tên, gồm 10 read-only và 22 tool còn lại. 21 tên Phase 2 còn lại giữ độc lập. Lặp lại build, test, đo và kiểm tra artifact sau thay đổi thực tế.
