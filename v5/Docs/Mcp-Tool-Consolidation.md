# DevKit MCP — kế hoạch gộp 40 tool, giữ chức năng

> **TRẠNG THÁI: ĐỀ XUẤT, CHƯA TRIỂN KHAI.** Ngày 14/11/2026 (Asia/Saigon). Hai tài liệu này là đầu ra của tác vụ phân tích; không phải lệnh tự động sửa MCP. Khi được giao triển khai, AI dùng các bước và tiêu chí dưới đây.
>
> Bản cho người đọc: [Mcp-Tool-Consolidation.html](Mcp-Tool-Consolidation.html). Đặt tại `v5/Docs/` theo yêu cầu trực tiếp của người dùng; không di chuyển tài liệu sản phẩm hiện có.

> **Review 2 — 14/11/2026:** (1) Reuse và chạy lại test cũ, **không sửa bất kỳ test cũ nào, chỉ thêm file test mới**; thiết kế registration được điều chỉnh để đáp ứng điều này. (2) `structuredContent` được model đọc vẫn tốn **input token ở lượt tiếp theo**; không phải model output token. Xem §9 về test bất biến và §10.1–10.5 về token của dữ liệu trả về.

## 1. Quyết định đề xuất

**Có thể làm: 40 → 10 tool (giảm 75% số tool), nhưng không được suy ra giảm 75% token mỗi request.**

Gộp **bề mặt MCP** thành 8 router theo nghiệp vụ + giữ `whoami` và `read_instruction`. Giữ 40 tên cũ làm mã operation và giữ handler hiện có. Tải input/output contract chi tiết theo nhu cầu, thay vì quảng bá toàn bộ 348 tham số và toàn bộ output schema mỗi lần liệt kê tool.

Phạm vi component: **CLI / MCP, net10.0**, SDK ModelContextProtocol **2.4.0**. Không cần thay đổi nghiệp vụ Shared, VSIX, Analyzer hay Tool chỉ để gộp catalog. Đọc lại AGENTS.md và skill liên quan ở thời điểm triển khai.

“Không mất chức năng” trong đề xuất nghĩa là giữ khả năng thực thi, tham số/default/null, dữ liệu trả về, validation/error, quyền, file và side effect của từng handler. **Compact là API MCP mới**: tên tool gọi trực tiếp thay đổi; input schema và output schema công bố sẵn trở nên tổng quát. Contract đầy đủ vẫn đọc được theo nhu cầu và kiểm tra ở server. Client dùng static schema/autocomplete sẽ có đánh đổi thật. Chế độ legacy giữ API hiện tại cho client đó.

## 2. Bằng chứng và giới hạn

### 2.1 Mốc khảo sát

- Git HEAD: `c1e64343bb26e27a51020f93a843fdb9ac257655`.
- Trạng thái đầu tác vụ: 4 artifact Analyzer/CLI/Tool/VSIX dưới Published/4.44.44.44 đã modified; giữ nguyên.
- Bản cài dùng để đo: `4.44.44.44 Build: 14.11.2026 07:51:43`, lấy từ `devkit --version`.
- SHA256 assembly cài: `9C2532ADDB70F831F7ED146FD786D70C1608EA96AED5AAAB9E9517F823CB456A`.
- Đã mở một tiến trình stdio riêng, gửi initialize → notifications/initialized → tools/list, nhận đủ 40 tool, nextCursor absent/null, rồi kết thúc đúng tiến trình đó. **Không gọi mutation tool.**
- Protocol được negotiate: `2025-11-25`. Đây là phiên bản thực tế của phép đo; không tuyên bố đó là specification mới nhất.
- Manifest release hiện có ghi build **12/11/2026 15:28:59**, SHA khác. Manifest này **không chứng minh** catalog đang cài là cùng build. Không sửa manifest hoặc rebuild trong tác vụ tài liệu này.
- Đã đối chiếu entry point/annotation/signature/dispatch của 40 tool, host/resource discovery và test liên quan; đọc sâu contract của dry-run, function, report, view, chart, command, file. **Không chạy unit tests trong tác vụ chỉ tạo tài liệu.**

### 2.2 Đo kích thước thực, chưa đo token model

Chuẩn hóa riêng object `result` của tools/list bằng Python `json.dumps(ensure_ascii=False, separators=(',', ':'))`, không tính JSON-RPC envelope.

| Hạng mục | Kết quả đo |
|---|---:|
| Tool | 40 |
| ReadOnly=true / false | 18 / 22 |
| Tổng properties input, cộng theo từng tool | 348 |
| Catalog chuẩn hóa | 171.583 ký tự Unicode |
| Catalog UTF-8 | 172.009 byte |
| Tổng inputSchema chuẩn hóa | 52.376 ký tự (30,5%) |
| Tổng outputSchema chuẩn hóa | 74.000 ký tự (43,1%) |
| Tool description, văn bản đã decode | 34.732 ký tự (20,2%) |
| Mô tả parameter nằm **bên trong inputSchema** | 28.880 ký tự |
| Server instructions trong initialize của tiến trình đo | 768 ký tự |
| SHA256 catalog chuẩn hóa của lần đo | `3843fda3427b7724c26e30c3ce4927960dfab369bf4389e941b6ae0ffe996af1` |

Không cộng parameter description thêm vào inputSchema: sẽ đếm trùng. Phần còn lại gồm name/title/annotations/cú pháp JSON/escape. SHA phụ thuộc thứ tự tool/properties của lần đo; benchmark hồi quy cần sort ổn định trước khi so hash.

Trong metadata connector của **một instance đang kết nối trong chat**, tổng description + khai báo TypeScript do host trình bày là **138.428 UTF-16 code units**, trong đó server instructions được lặp **30.280** code units (757 × 40). Đây là lớp host chuyển đổi, **khác** JSON tools/list và **không phải usage token**. Có hai instance DevKit trong phiên này, mỗi instance 40 tool; chưa đo tổng token của hai instance và không coi hai môi trường là dư thừa để tự tắt.

**Phát hiện chính:** outputSchema lớn hơn inputSchema. Ba outputSchema của get_workflows/get_messages/get_business_rules cộng **23.045 ký tự**, khoảng 31,1% tổng outputSchema. Chỉ viết ngắn Description sẽ không xử lý phần này.

### 2.3 Không được viết thành cam kết

- Chưa có compact implementation hay số token/latency/độ chính xác sau gộp.
- Chưa đo billing/cached input tokens; không mặc định host đưa đủ 40 schema vào mọi model request.
- MCP tools/list là discovery, không phải quy tắc tính phí hay quy tắc đưa schema vào model context. Resource cũng do host quyết định khi nào tải.
- Không dùng tỷ lệ ký tự/4 như token thực. Nếu dùng ước lượng để lập ngân sách, ghi rõ tokenizer giả định và tách khỏi kết quả đo.
- Không suy diễn version giống nhau thành build/source giống nhau; source version dự án cố định 4.44.44.44.

## 3. Các phương án

| Phương án | Số tool | Được gì | Đánh đổi / quyết định |
|---|---:|---|---|
| Rút gọn descriptions + server instructions | 40 | Ít thay đổi, giữ typed contract | Nên làm bước đầu; không xử lý 74.000 ký tự outputSchema. |
| Gộp theo domain nhưng giữ mọi input/output union | khoảng 16–20, cần thiết kế riêng | Còn nhiều schema tĩnh | Số tool giảm nhưng tổng schema có thể gần như cũ; không chọn chỉ vì số lượng. |
| **10 tool + contract theo nhu cầu** | **10** | Domain rõ, schema khởi tạo nhỏ, reuse 40 handler | **Khuyến nghị**; phải bổ sung binder/validation/discovery và kiểm thử client. |
| 2–3 gateway chung với operation bất kỳ | 2–3 | Catalog tối thiểu | Mất tín hiệu domain, quyền/approval quá rộng, dễ đoán args; không chọn ở vòng đầu. |

Server instructions hiện được host lặp theo tool trong snapshot này. Có thể thử rút còn mục tiêu 150–200 ký tự, giữ nhận diện instance/org/category và chỉ dẫn lấy contract; đưa thông tin runtime đầy đủ vào whoami. Đây là ngân sách đề xuất, không phải số đã triển khai. Không xóa thông tin phân biệt môi trường chỉ để tiết kiệm token.

## 4. Catalog 10 tool

| Tool compact | ReadOnly | Số operation cũ | Operation |
|---|---:|---:|---|
| `whoami` | true | 1 | `whoami` |
| `read_instruction` | true | 1 | `read_instruction` |
| `query_data` | true | 4 | `execute_fetchxml`, `execute_sql`, `search_records`, `parse_record_url` |
| `inspect_metadata` | true | 2 | `get_tables`, `get_solution_components` |
| `inspect_logic` | true | 7 | `get_plugins`, `get_workflows`, `get_flows`, `get_business_process_flows`, `get_business_rules`, `get_custom_apis`, `get_messages` |
| `inspect_diagnostics` | true | 3 | `get_audit_history`, `get_plugin_trace_logs`, `get_system_jobs` |
| `manage_data` | false | 5 | `manage_record`, `create_records`, `generate_demo_data`, `manage_record_file`, `manage_deleted_records` |
| `manage_schema` | false | 4 | `manage_table`, `manage_column`, `manage_relationship`, `manage_choice` |
| `manage_ui` | false | 8 | `manage_form`, `manage_view`, `manage_chart`, `manage_app`, `manage_ribbon`, `manage_command`, `manage_webresource`, `manage_report` |
| `manage_platform` | false | 5 | `manage_role`, `manage_environment_variable`, `manage_function`, `publish_customizations`, `execute_webapi` |

- Compact + all: **10**. Compact + readonly: **6**, vẫn cung cấp đúng 18 operation cũ có ReadOnly=true.
- Legacy + all: **40**. Legacy + readonly: **18**.
- Những action đọc nằm trong mixed tool (ví dụ manage_record/read, execute_webapi/GET) tiếp tục thuộc mixed facade. Không mở rộng category readonly trong cùng thay đổi.
- Descriptor của router mixed: ReadOnly=false; Destructive=true và Idempotent=false theo hợp nhất bảo thủ. Router read: ReadOnly=true, Destructive=false, Idempotent=true, tính từ flags của operation thành viên. Giữ utility flags hiện có.
- Membership category tiếp tục suy ra từ **[McpServerTool(ReadOnly=...)] của method legacy**. Compact factory tính annotation tổng hợp từ nguồn này, không thêm bảng category thủ công hoặc basic/standard/advanced. Không thêm compact entry vào phạm vi assembly scan legacy (§6.1).
- Router không được dispatch sang operation ngoài nhóm hoặc operation bị disable, kể cả khi client tự gửi tên ngoài enum. Xác minh ở server.

## 5. Contract gọi compact

### 5.1 API

Tám router có đúng hai tham số model nhập:

```json
{
  "operation": "manage_view",
  "arguments": {
    "action": "list",
    "entity_name": "account"
  }
}
```

- `operation`: enum hữu hạn, chính là tên tool cũ trong nhóm.
- `arguments`: object JSON chứa **nguyên tên và kiểu tham số cũ**. Bắt buộc object; dùng {} khi muốn mọi default.
- Không chuyển action thành tên mới; action vẫn ở trong arguments. Không tự chuẩn hóa lại identifier/action khác handler hiện tại.
- Không biến `arguments` thành chuỗi JSON: tránh thêm một lớp escape. Các field vốn là string JSON (`operations`, `records_json`, `fields_json`, …) vẫn giữ string.
- Các array native, đặc biệt `record_ids`, vẫn là array; `auto_number_seed` vẫn nullable Int64; không làm mất precision/default/null.
- McpServer, cancellation, IOrganizationService, execution context và DI services là tham số hệ thống; không xuất vào schema, không lấy từ arguments.

Schema mẫu của query_data (đề xuất, phải kiểm chứng SDK/client):

```json
{
  "type": "object",
  "properties": {
    "operation": {
      "type": "string",
      "enum": ["execute_fetchxml", "execute_sql", "search_records", "parse_record_url"]
    },
    "arguments": {
      "type": "object",
      "description": "Original operation parameters. Read its contract before first use.",
      "additionalProperties": true
    }
  },
  "required": ["operation", "arguments"],
  "additionalProperties": false
}
```

Generic arguments làm mất kiểm tra tĩnh từng field ở phía client. Đây là đánh đổi được nêu rõ, không phải “không còn schema”. Runtime phải bind/validate theo contract thật của operation; không được cast toàn bộ thành string hay bỏ qua lỗi.

### 5.2 Contract theo nhu cầu

Mở rộng read_instruction **cùng tham số name hiện có**:

- `name=""`: giữ catalog 13 resource hiện tại; legacy giữ ý nghĩa/kết quả cũ. Compact remap referencedBy về tên facade hợp lệ.
- `name="operations"`: catalog ngắn operation → facade + mô tả một dòng, chỉ operation được phép của surface/category hiện tại.
- `name="contract://manage_view"`: trả một contract, gồm inputSchema, outputSchema, defaults, điều kiện bắt buộc theo action, constraints, side effects/local paths, ví dụ và URI hướng dẫn liên quan.
- Cung cấp resource template `contract://{operation}` dùng **cùng provider** với read_instruction. Không đòi client phải hỗ trợ resources.
- Reuse envelope ReadInstructionResult: nội dung contract JSON/Markdown nằm trong Content; Kind có thể là "contract"; giữ các field cũ. Không trả toàn bộ 40 schema khi gọi catalog.
- Contract có version/hash từ descriptor + hướng dẫn; cache theo instance, build/SHA và hash. Khi compact schema hoặc contract thay đổi, refresh tương ứng; không dùng cache giữa hai org theo giả định.
- Call pattern: xác định operation từ enum → đọc contract khi chưa biết → gọi facade. Không bắt model đọc lại nếu đã có đúng contract trong context.
- Full guide chỉ đọc khi action cần; đừng tự đưa cả 13 resource vào server instructions.

Method signature/SDK schema là nguồn cho kiểu/default/output; quy tắc action phụ thuộc nghiệp vụ cần tài liệu có cấu trúc và test để tránh drift. Không tuyên bố reflection tự suy ra được mọi required-if/action constraint.

### 5.3 Output và lỗi

- Trong đợt gộp catalog, router trả **nguyên CallToolResult** từ handler: Content, StructuredContent, IsError, blocks, metadata đang có. Không bọc thêm `{operation,data}`, không đổi field JSON, không cắt text để đạt token target. Tối ưu result trước hết bằng các tham số hiện có; nếu cần một result view mới thì đó là hạng mục opt-in riêng theo §10.4, không được âm thầm thay output mặc định.
- Compact outputSchema có thể là object tổng quát, miễn mọi result hiện tại hợp lệ; contract-specific outputSchema được cung cấp on demand và server/test kiểm tra. Không khai báo một DTO riêng rồi trả payload không khớp.
- Nếu cần loại schema generic này bị client từ chối, giữ legacy hoặc thiết kế schema tương thích đã kiểm thử; không âm thầm đổi result payload.
- Không tự động retry mutation/invoke khi timeout hay lỗi parse output: action có thể đã chạy. Lỗi sau mutation không được biến thành tín hiệu retry.
- Error của handler giữ nguyên, kể cả hướng dẫn nhắc tên tool cũ. Compact hướng dẫn rằng tên cũ là operation, tránh thay hàng loạt error text.
- Lỗi mới ở lớp route/binder phải phân biệt “chưa dispatch” với lỗi handler; không claim thành công nếu route không có.
- Kiểm tra thực tế hành vi extra/unknown argument của SDK hiện tại; giữ tương thích. Không tự thêm chính sách reject nội dung từng operation nếu legacy đang chấp nhận/ignore và chưa có quyết định đổi contract.

## 6. Kiến trúc triển khai

Luồng: compact facade → OperationCatalog (allowlist) → binder SDK/adapter tương đương → handler cũ → CallToolResult nguyên trạng.

1. Tạo catalog bất biến chứa operation name, owner type/method, exposed facade, attribute flags, SDK-generated schema, default values, guide refs và invoker.
2. Dùng nameof() cho type references. Entry classes vẫn ở DynamicsCrm.DevKit.Cli.Mcp.Tools; catalog/helper vào subnamespace. Giữ nguyên attributes của 40 tool legacy. Compact entries đăng ký tường minh qua factory, không gắn thêm [McpServerToolType] khiến chúng lọt vào scan legacy; helper không có attribute này.
3. Không dispatch bằng tên method tùy ý hoặc eval/reflection không allowlist. Mapping domain là presentation mapping, không phải bản sao category mapping.
4. Spike API thực tế SDK 2.4.0: dựng compact descriptor tường minh và gọi bằng SDK binder để giữ service injection, McpServer, cancellation và default/null. Descriptor compact có descriptions ngắn riêng; không sửa DescriptionAttribute/parameter metadata legacy chỉ để giảm catalog. Nếu SDK không hỗ trợ invoke nội bộ phù hợp, dùng typed adapter có parity tests mới. Không đoán tên API SDK trong code.
5. Handler đang có mutable instance state (ví dụ ManageFunctionTool._resolvedApi; ManageAppTool._workspaceFolder): giữ lifetime hiện tại hoặc tạo instance riêng theo invocation. Không cache instance mutable vào registry singleton; kiểm thử concurrent calls.
6. Chính sách mutation vẫn qua McpExecutionPolicy/McpExecutionContext và mutation executors; wrapper không tạo context mới với mutationsBlocked=false.
7. Không đưa dry_run/dry-run/--dry-run/dryrun vào pre-invocation tool descriptions/parameters/schema/resource/server instructions. Đây là invariant hiện tại trong DryRunGatewayContractTests; flag CLI do người vận hành đặt vẫn giữ. Không thêm tham số để AI override.
8. Giữ tất cả file path .devkit hiện có, root resolution từ McpServer/working directory, backup trước thay đổi, undo semantics, role/admin checks, publish timing và lỗi partial success.
9. Không dùng execute_webapi thay các specialized handler: sẽ mất validation, backup, publish, file và output contract.

### 6.1 Surface legacy/compact

Đề xuất option mới: `--tool-surface legacy|compact`, độc lập `--category readonly|all`.

- Giai đoạn đầu default legacy, opt-in compact; sau khi đạt nghiệm thu mới chuyển mặc định trong một quyết định migration rõ ràng.
- Không quảng bá legacy và compact cùng lúc: 40 legacy + 8 router mới = **48 tool**, phản tác dụng. Không coi hidden/unlisted alias là cơ chế tương thích MCP đáng tin.
- Giữ nguyên attributes, signatures và metadata legacy mà test cũ quan sát. Không thêm 8 annotated tool classes vào cùng assembly scan: test inventory 22 mixed sẽ thấy thêm tool và fail dù runtime có lọc đi.
- Tạo factory/registration path riêng cho compact, đăng ký programmatically từ operation allowlist. Spike SDK 2.4.0 phải chứng minh cách này không làm thay đổi scan legacy; không sửa test để chấp nhận một cách đăng ký làm vỡ baseline.
- Giữ overload/API legacy của GetToolCount/GetFilteredToolTypeNames và hành vi mặc định 40/18. Thêm API chọn surface riêng (tên dự kiến BuildExposedCatalog); compact count lấy từ catalog đó. CLI compact `--tools`, initialize instructions và tools/list dùng cùng catalog mới, không gọi helper legacy rồi sửa số hiển thị.
- Giữ BuildServerInstructions legacy và lỗi category cũ đang được test. Thêm builder compact cho instructions ngắn. Mọi filter phải chạy đúng **all + compact**, không chỉ readonly; không cần đăng ký đồng thời 48 tool rồi hy vọng filter sẽ sửa được cả reflection tests.
- DisabledToolSet vẫn kiểm tra owner type của operation. Cập nhật ToolResourceMap để resource dùng chung không bị xóa khi compact không advertise legacy owner. Xóa một tool khỏi surface không đồng nghĩa disable năng lực.
- Giữ nguyên ReadInstructionTool legacy, 13 resource và referencedBy đang được test. Compact descriptor cùng tên public `read_instruction` dùng adapter/provider mới để phục vụ contracts và remap referencedBy; hai surface không đăng ký trùng tên. Dùng nội dung resource legacy làm nguồn, không sửa Description legacy để remap references.
- Legacy client/tool permissions phải được giữ cho legacy profile. Compact có tên tool mới và quyền theo nhóm rộng hơn; host có thể cần cấu hình lại quyền. Không giả định approval cho tên cũ tự chuyển sang wrapper.
- Nếu có code khác dùng reflection tool classes, kiểm tra bằng rg trước khi thay. Đã thấy McpCommand.cs khoảng dòng 814 scan attributes; comment RegisterSharedServices nhắc ToolServices không đủ bằng chứng có dependency đang hoạt động.

## 7. Ma trận đủ 40 operation

Số tham số dưới đây là inputSchema thực đo, không tính DI. Bảng là inventory để kiểm chứng bao phủ; mô tả không thay thế contract đầy đủ từ nguồn.

| Operation cũ | Tool compact | Params | Tính năng phải giữ | Nguồn |
|---|---|---:|---|---|
| `whoami` | `whoami` | 0 | Identity, organization, direct roles, runtime version/build/process/SHA. | [source](../DynamicsCrm.DevKit.Cli/Mcp/Tools/WhoAmITool.cs) |
| `read_instruction` | `read_instruction` | 1 | Catalog 9 docs + 4 schema; tên ngắn/full URI, không phân biệt hoa thường; nội dung resource và tool phải đồng nhất. | [source](../DynamicsCrm.DevKit.Cli/Mcp/Tools/ReadInstructionTool.cs) |
| `execute_fetchxml` | `query_data` | 3 | FetchXML, aggregate/join, max_records, auto-page get_all; giữ kết quả và lỗi hiện có. | [source](../DynamicsCrm.DevKit.Cli/Mcp/Tools/ExecuteFetchXmlTool.cs) |
| `execute_sql` | `query_data` | 3 | SELECT, giới hạn bản ghi và get_all; giữ SQL riêng, không thay bằng Web API. | [source](../DynamicsCrm.DevKit.Cli/Mcp/Tools/ExecuteSqlTool.cs) |
| `search_records` | `query_data` | 6 | search/status; cú pháp tìm kiếm, entities/filter/top, compact/full và file raw payload. | [source](../DynamicsCrm.DevKit.Cli/Mcp/Tools/SearchRecordsTool.cs) |
| `parse_record_url` | `query_data` | 1 | URL/GUID/text, URL decode và thứ tự parser. | [source](../DynamicsCrm.DevKit.Cli/Mcp/Tools/ParseRecordUrlTool.cs) |
| `get_tables` | `inspect_metadata` | 7 | List/detail, filter/names/custom/intersect; compact/standard/full; full chứa metadata clone/formula. | [source](../DynamicsCrm.DevKit.Cli/Mcp/Tools/GetTablesTool.cs) |
| `get_solution_components` | `inspect_metadata` | 3 | Solution unique/display name; phân giải nhiều kết quả; include_active_layers/active_layers_only. | [source](../DynamicsCrm.DevKit.Cli/Mcp/Tools/GetSolutionComponentsTool.cs) |
| `get_plugins` | `inspect_logic` | 10 | Assembly/entity routing; steps, images/config, stage/mode/active filters; entity_name có ưu tiên. | [source](../DynamicsCrm.DevKit.Cli/Mcp/Tools/GetPluginsTool.cs) |
| `get_workflows` | `inspect_logic` | 7 | List/detail, tên khớp duy nhất tự detail, trigger_field, background/realtime và trạng thái. | [source](../DynamicsCrm.DevKit.Cli/Mcp/Tools/GetWorkflowsTool.cs) |
| `get_flows` | `inspect_logic` | 8 | List/detail và action=runs; owner/name/lifecycle/run-status, khoảng thời gian. | [source](../DynamicsCrm.DevKit.Cli/Mcp/Tools/GetFlowsTool.cs) |
| `get_business_process_flows` | `inspect_logic` | 6 | List/detail, bpf_id/bpf_name/entity; status mặc định all; stage detail luôn có. | [source](../DynamicsCrm.DevKit.Cli/Mcp/Tools/GetBusinessProcessFlowsTool.cs) |
| `get_business_rules` | `inspect_logic` | 4 | List/detail theo entity/rule_id; lifecycle; điều kiện/hành động đã parse và trạng thái parse. | [source](../DynamicsCrm.DevKit.Cli/Mcp/Tools/GetBusinessRulesTool.cs) |
| `get_custom_apis` | `inspect_logic` | 5 | List/detail, api_name, bound entity, managed/status và signature. | [source](../DynamicsCrm.DevKit.Cli/Mcp/Tools/GetCustomApisTool.cs) |
| `get_messages` | `inspect_logic` | 4 | SDK messages và Custom Actions; global/entity/detail, input/output parameters. | [source](../DynamicsCrm.DevKit.Cli/Mcp/Tools/GetMessagesTool.cs) |
| `get_audit_history` | `inspect_diagnostics` | 9 | Browse/detail theo record; user/operation/attribute/date filters và các dạng audit detail. | [source](../DynamicsCrm.DevKit.Cli/Mcp/Tools/GetAuditHistoryTool.cs) |
| `get_plugin_trace_logs` | `inspect_diagnostics` | 8 | List/detail; type/entity/message/mode/correlation/time; text lỗi/trace. | [source](../DynamicsCrm.DevKit.Cli/Mcp/Tools/GetPluginTraceLogsTool.cs) |
| `get_system_jobs` | `inspect_diagnostics` | 8 | List/detail; status/operation type/entity/name/correlation/time; mặc định failed. | [source](../DynamicsCrm.DevKit.Cli/Mcp/Tools/GetSystemJobsTool.cs) |
| `manage_record` | `manage_data` | 8 | create/read/update/delete/associate/disassociate; fields_json, lookup binding và quan hệ. | [source](../DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageRecordTool.cs) |
| `create_records` | `manage_data` | 4 | JSON inline hoặc file JSON/CSV; tối đa 5000; parallelism, partial failures và gate bypass_custom_logic. | [source](../DynamicsCrm.DevKit.Cli/Mcp/Tools/CreateRecordsTool.cs) |
| `generate_demo_data` | `manage_data` | 7 | Tạo dữ liệu mẫu theo entity/date/count/fields/seed; field_overrides sáu operator; không tự suy luận ngày. | [source](../DynamicsCrm.DevKit.Cli/Mcp/Tools/GenerateDemoDataTool.cs) |
| `manage_record_file` | `manage_data` | 8 | info/upload/download/delete; file/image, file_path/base64/full_size, block transfer và đường dẫn output. | [source](../DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageRecordFileTool.cs) |
| `manage_deleted_records` | `manage_data` | 9 | list/detail/restore/status/turn; record_id hoặc record_ids[], retention_days, name_prefix kể cả chuỗi rỗng. | [source](../DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageDeletedRecordsTool.cs) |
| `manage_table` | `manage_schema` | 16 | Tự nhận create/update; schema/logical name, publisher, immutable fields, audit/search/quick create. | [source](../DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageTableTool.cs) |
| `manage_column` | `manage_schema` | 35 | 35 tham số; create/update; lookup/customer/options/statuscode, formula clone, autonumber pattern/seed/clear, nullable flags. | [source](../DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageColumnTool.cs) |
| `manage_relationship` | `manage_schema` | 22 | create_1n/create_nn/update/delete/add_target/remove_target; cascade, menu, polymorphic lookup và hierarchy. | [source](../DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageRelationshipTool.cs) |
| `manage_choice` | `manage_schema` | 11 | list/detail/create/update; options/add/update/remove, màu option và solution. | [source](../DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageChoiceTool.cs) |
| `manage_form` | `manage_ui` | 8 | list/detail/update/rename/undo; FormXML hoặc operations, resolve tên, admin gate, validate/backup/publish. | [source](../DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageFormTool.cs) |
| `manage_view` | `manage_ui` | 8 | list/detail/create/update/rename/set_default/undo; system/personal, FetchXML→LayoutXML, cell patch và backup cặp XML. | [source](../DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageViewTool.cs) |
| `manage_chart` | `manage_ui` | 16 | list/detail/create/update/rename/set_default/undo; measures/filter/XML, validate/publish/confirmed và confirmation khi áp default. | [source](../DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageChartTool.cs) |
| `manage_app` | `manage_ui` | 10 | list/detail/create/update/update_navigation/validate/undo; sitemap operations, backup .app.json, validation và publish theo hành vi hiện tại. | [source](../DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageAppTool.cs) |
| `manage_ribbon` | `manage_ui` | 4 | list/buttons/detail/update/undo; classic RibbonDiffXml patch/operations, backup và restore. | [source](../DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageRibbonTool.cs) |
| `manage_command` | `manage_ui` | 24 | list/detail/create/update/hide/show/add_flyout/update_flyout/add_flyout_item/remove_flyout_item/add_split_button/update_split_button; modern appaction riêng classic ribbon. | [source](../DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageCommandTool.cs) |
| `manage_webresource` | `manage_ui` | 10 | list/detail/create/update/delete; resolve GUID/name, file→base64, type, publisher và solution. | [source](../DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageWebResourceTool.cs) |
| `manage_report` | `manage_ui` | 14 | list/detail/create/download/update/add_dataset/update_dataset; create/dataset local-only, update Dataverse; language/output_folder, .rptproj và backup. | [source](../DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageReportTool.cs) |
| `manage_role` | `manage_platform` | 10 | list/detail/user/assign/unassign/create/update/delete/copy/restore; user/team/BU, privilege depths và backup. | [source](../DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageRoleTool.cs) |
| `manage_environment_variable` | `manage_platform` | 9 | list/detail/create/update/delete/clear; definition/current/default value, type và solution. | [source](../DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageEnvironmentVariableTool.cs) |
| `manage_function` | `manage_platform` | 8 | list/detail/validate/invoke; validate chỉ structural+metadata; create/update/delete vẫn gated; typed arguments, entity binding, không tự retry invoke sau timeout. | [source](../DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageFunctionTool.cs) |
| `publish_customizations` | `manage_platform` | 8 | Targeted entities/optionsets/ribbon/dashboard/webresources/sitemap/apps; không target thì PublishAll theo contract hiện tại. | [source](../DynamicsCrm.DevKit.Cli/Mcp/Tools/PublishCustomizationsTool.cs) |
| `execute_webapi` | `manage_platform` | 6 | GET/POST/PUT/PATCH/DELETE; relative URL, body/header, response lines và response headers; vẫn là mixed tool. | [source](../DynamicsCrm.DevKit.Cli/Mcp/Tools/ExecuteWebApiTool.cs) |

Đối với function, “giữ tính năng” bao gồm giữ nguyên gate create/update/delete; không biến action bị chặn thành tính năng mới. Classic ribbon và modern command chỉ chung facade, không trộn engine hay tự suy đoán modern khi người dùng hỏi ribbon.

## 8. Các task AI thực hiện khi được giao triển khai

### P0 — baseline và spike, chưa thay default
- [ ] Đọc hướng dẫn repo và skill build CLI; ghi status, HEAD, version/build/hash.
- [ ] Chụp danh sách và SHA256 mọi file test hiện có; chạy baseline suite liên quan, lưu TRX, số discovered/executed/passed/failed/skipped. Không chỉ ghi "test xanh".
- [ ] Capture tools/list của legacy all/readonly và 13 resources; ghi signature/default/annotation/shape.
- [ ] Thử một router chỉ đọc query_data và contract provider với SDK 2.4.0.
- [ ] Xác minh object arguments không bị SDK bung thành union lớn; kiểm thử một client có resources và một client chỉ có tools.
- [ ] Đo schema/output thực serialize; nếu schema generic không tương thích, báo giới hạn và giữ legacy.
- [ ] Lập benchmark workflow trước thay đổi, không chỉ đếm số tool.

### P1 — compact catalog và adapter
- [ ] Thêm compact factory/8 router không đi vào scan legacy, OperationCatalog, binding/validation và compact contract provider.
- [ ] Giữ 40 handlers và payload; tách registration surface khỏi operation capability.
- [ ] Giữ category theo attribute; filter all+compact; xử lý DisabledToolSet/ToolResourceMap/resource references.
- [ ] Thêm option --tool-surface và cập nhật --tools/setup guide/counts. Không thêm category khác.
- [ ] Chỉ thêm **file test mới** dưới Cli.UnitTests/Cli/Mcp/; reuse helper/fixture cũ bằng cách tham chiếu nếu phù hợp, không chỉnh sửa chúng. Không tham số hóa hay bổ sung method vào file test cũ.

### P2 — parity và benchmark
- [ ] Chạy lại toàn bộ suite CLI UnitTests net10.0 hiện có, gồm MCP regression, rồi test mới. Dùng cùng điều kiện baseline; test cũ phải giữ nguyên và không có test bị bỏ khỏi discovery hoặc skip thêm.
- [ ] So sánh handler cũ và compact trên cùng fixture: args default/explicit/null, success/error, SDK calls, structured payload, output file bytes/path, publish/backup.
- [ ] Ghi nguồn/test/doc nào bất đồng; không tự suy ra behavior change. Manifest cũ nêu ở trên là discrepancy đã biết.
- [ ] Rút descriptions/instructions trên **descriptor compact riêng**, không chỉnh metadata/helper legacy đang được test; chuyển ví dụ dài sang contract, giữ routing cues và hướng dẫn cần thiết.
- [ ] Kiểm tra lại hash/diff của toàn bộ file test cũ; không sửa assert, fixture, snapshot, helper, project/runsettings, filter hay timeout để làm suite pass. Nếu baseline đã fail, báo đúng lỗi trước/sau và không claim tất cả pass.
- [ ] Đo byte/char/token thực, call count, task success, lỗi route/args, retry, latency và phần token help trong lịch sử hội thoại.
- [ ] Tài liệu migration operation mapping; giữ link docs:// và schema:// cũ. Tài liệu sản phẩm triển khai đặt tại DynamicsCrm.DevKit.Docs/Cli theo AGENTS.md; hai file phân tích này giữ ở Docs.

### P3 — build/install/runtime
- [ ] Build nhỏ nhất: dotnet build DynamicsCrm.DevKit.Cli/DynamicsCrm.DevKit.Cli.csproj; test net10.0.
- [ ] Sau khi sửa Mcp/**, **đọc và chạy devkit-skill-build-cli** (Release.DynamicsCrm.DevKit.Cli.ps1); không full release nếu không được yêu cầu.
- [ ] Restart connector MCP đang dùng; gọi whoami; đối chiếu version, build, process start, assembly SHA với manifest vừa tạo. Khi cả hai connector DevKit dùng bản mới, xác minh từng connector.
- [ ] Capture tools/list thật cho bốn surface/category combinations; xác nhận 40/18/10/6 và không còn legacy lẫn compact cùng catalog.
- [ ] Kiểm tra diff, placeholder xxxx.yy.zz HH.mm.ss đã phục hồi, source version vẫn 4.44.44.44; không restore file thiếu/deleted.
- [ ] Báo kết quả và giới hạn; chỉ sau nghiệm thu mới chọn default compact. Không stage/commit/push nếu không được yêu cầu.

## 9. Test và nghiệm thu — test cũ bất biến, chỉ thêm mới

**Đúng: phải reuse và chạy lại test cũ. Không được touch test cũ; chỉ được thêm file test mới.** Quy tắc bao gồm không sửa, xóa, rename, tham số hóa, đổi expected value, thêm Ignore/Skip hoặc thay helper/fixture/snapshot/cấu hình chạy để vô hiệu hóa kiểm tra cũ. Không thêm method vào file test cũ. Nếu test cũ bắt được lỗi thì sửa implementation tương thích; nếu không thể tương thích, báo xung đột thiết kế để review, không tự nới test.

Test cũ pass là bằng chứng regression cho phần đã được kiểm tra, **không chứng minh tuyệt đối mọi đường đi mới đều đúng**. Vì vậy cần thêm test compact, differential/parity test và kiểm tra connector thực tế. Không thay suite cũ bằng suite mới hoặc chỉ chạy filtered tests mới.

Các test hiện có chạy lại **nguyên trạng**:
- McpServerHostCoverageTests: giữ literal 18/40 và các assert/error text. Giữ API legacy; test 6/10 đặt trong file mới CompactCatalogTests.cs, gọi API surface-aware mới.
- McpServerHostGapWave2CoverageTests: disabled type và ToolResourceMap.
- DryRunGatewayContractTests: giữ inventory đúng 22 mixed legacy, fail-closed gateways và không leak policy. Test scan trực tiếp assembly theo [McpServerToolType], nên runtime filter không đủ; compact đăng ký riêng để scan cũ vẫn trả đúng tập cũ. Không đổi literal 22 thành 4/26 hoặc sửa expected set.
- ReadInstructionToolTests: 13 resources, aliases, schema content và referencedBy.
- ManageFunctionContractTests: flags, authoring gates, signature conversion; không tự sửa kỳ vọng thành CRUD thật.
- ManageViewFakeXrmEasyFullCoverageTests: system/personal view, backup cặp XML, undo.
- ManageReportFakeXrmEasyFullCoverageTests và ManageReportFakeSdkExtraCoverageTests: local files, dataset, language, output_folder/.rptproj, dry-run.
- ManageRecordFileFakeSdkCoverageTests: info/upload/download/file blocks; ManageChartFakeXrmEasyFullCoverageTests: confirmed/defaults.
- CommandFlyoutFakeXrmEasyFullCoverageTests; CreateRecordsMainPathCoverageTests; các folder MCP còn lại trong inventory.
- McpToolResultsCoverageTests và McpToolResultsThrowCoverageTests: giữ summary, [Detail], IsError và structured payload. Không sửa helper output legacy để xóa duplication rồi đổi expected test.

Các file mới dự kiến: CompactCatalogTests.cs, CompactRoutingParityTests.cs, CompactContractProviderTests.cs, CompactPolicyTests.cs, CompactStdioIntegrationTests.cs. Nếu mở hạng mục result view riêng, thêm CompactResultPresentationTests.cs. Đây là kế hoạch; tác vụ tài liệu này không tạo/chạy các test đó.

Bằng chứng phải kèm: (a) manifest hash test cũ không đổi; (b) TRX trước/sau, mọi test cũ vẫn được discover và execute; (c) pass/fail test mới riêng; (d) parity trên cùng deterministic fixture, đối chiếu cả SDK calls/side effects và result, không chỉ count; (e) tools/list/tools/call trên artifact vừa cài. Chỉ loại khỏi phép so sánh các giá trị bất định được nêu đích danh như thời gian, không loại errors/IDs/backup paths để che sai khác.

| Nhóm kiểm tra mới | Điều kiện đạt |
|---|---|
| Bao phủ | Set union = đúng 40 operation, không thiếu/trùng; mỗi operation có route khả dụng. |
| Test cũ | File/hash/expected/helper/config không đổi; không giảm discovery/execution hoặc tăng skip; suite cũ chạy lại và báo đầy đủ. |
| Category | Compact readonly chỉ expose 6 facade, route chỉ 18 operation ReadOnly=true; tên không hợp lệ không vượt allowlist. |
| Binding | Giữ omitted/null/empty string/0/false/nullable Int64/record_ids array; inject McpServer/cancellation đúng; không lộ DI args. |
| Kết quả | Handler payload/error text/IsError/metadata giữ nguyên; không đổi file paths, backup/undo/publish, partial errors. |
| Result view nếu có | Opt-in và contract riêng; full/default vẫn parity; thông tin quan trọng không bị giấu; mọi phần bỏ khỏi inline có cách đọc lại đã kiểm thử, không chạy lại mutation. |
| Quyền và concurrency | Dry-run/admin/impersonation giữ đúng; concurrent operation không chia sẻ state mutable; timeout không retry mutation. |
| Discovery | Contract resource và read_instruction cùng nội dung/hash; catalog không trả toàn bộ schema; disabled/category không bị bỏ qua. |
| Client | List và call chạy được ở từng client hỗ trợ; include case không có resources và generic args/output schema. |
| Kích thước | Mục tiêu ban đầu catalog compact ≤35% baseline (≤60.054 ký tự theo phép đo này); **target, chưa đo**. |
| Hiệu quả thực | Task success không giảm trên bộ đánh giá cố định; tổng token workflow và p95 latency được báo, kể cả help/retries/cached input. |
| Rollback | Chọn --tool-surface legacy trả lại 40/18 tool và contract hiện tại; không rollback dữ liệu nghiệp vụ. |

Bộ workflow tối thiểu: FetchXML+SQL+search/status; metadata full→clone column; bulk CSV+partial fail; plugin/workflow/flow runs; audit/trace/job; form/view/chart/app undo; classic/modern command; local RDL+dataset; file upload/download; role/variable/recycle; function validate/invoke/gates; targeted publish/raw Web API. Chạy mutation integration trên môi trường/test fixture phù hợp, giữ các confirmation nghiệp vụ hiện có.

Các lớp test net10.0 dùng shared mutable state phải [DoNotParallelize]. Giữ WaitScalePercent=0 trong metadata-wait tests. Chạy kiểm tra cần thiết theo skill, không full release/coverage toàn repo chỉ vì sửa catalog.

## 10. Đo token và tránh “tiết kiệm giả”

### 10.1 Trả lời trực tiếp: structuredContent có tốn token không?

**Có, nếu host đưa nội dung đó vào context để model đọc.** JSON keys, values và cấu trúc được tokenize theo representation host gửi. `structuredContent` là dữ liệu server trả, không phải một vùng dữ liệu miễn token. Nếu host chỉ hiển thị dữ liệu ở UI hoặc lưu server-side mà không gửi cho model, phần chưa gửi không trở thành model input.

Phải phân biệt **output của tool** với **output token của model**:

| Nội dung | Khi nào có mặt | Cách tính đối với model |
|---|---|---|
| Tool/parameter descriptions, inputSchema, outputSchema | Host nạp định nghĩa tool | Input token cho phần thực sự được host đưa vào model. |
| Tên tool và arguments do model sinh | Model yêu cầu thực thi | Thuộc model output; kết quả tool chưa tồn tại lúc này. |
| `content` / `structuredContent` của MCP | Tool chạy xong, host chuyển kết quả cho model | Thành model **input ở lượt tiếp theo**, không phải output token do model tạo JSON đó. |
| Câu trả lời và các phần output do model sinh sau khi đọc kết quả | Lượt tiếp theo | Model output token. |
| Tool result còn trong lịch sử | Những lượt sau có giữ/nạp lại nội dung | Tiếp tục có thể chiếm input/context; cache/compaction và cách host chuyển dữ liệu quyết định phần thực tế. |

Luồng: model sinh call → MCP thực thi → host chọn/serialize result → model đọc result và sinh câu trả lời. Tài liệu OpenAI minh họa đưa function result vào input của lượt kế tiếp, đồng thời tính function definitions là input. Đây là cơ sở cho phân loại trên; chưa phải phép đo host/Codex cụ thể. [OpenAI Function calling](https://developers.openai.com/api/docs/guides/function-calling)

API conversation state không làm lịch sử tự miễn phí; input từ chuỗi trước vẫn được tính theo cơ chế API. Không suy diễn giá/token của API thành hóa đơn hoặc quota gói Codex. [OpenAI Conversation state](https://developers.openai.com/api/docs/guides/conversation-state)

**43,1% trong §2 là outputSchema ở tools/list, không phải dữ liệu structuredContent của các lần gọi.** Giảm outputSchema không tự giảm độ dài bản ghi, XML hoặc log trả về. Chưa đo phân bố kích thước result của 40 operation; không gán tỷ lệ 43,1% cho result.

### 10.2 Nguồn hiện tại trả gì? Có chỗ bị lặp không?

Đã truy vết [McpToolResults.cs](../DynamicsCrm.DevKit.Cli/Mcp/Tools/Helper/McpToolResults.cs), [ExecuteWebApiTool.cs](../DynamicsCrm.DevKit.Cli/Mcp/Tools/ExecuteWebApiTool.cs), model DTO và test của chúng:

| Đường trả kết quả hiện tại | Content | StructuredContent | Hệ quả khi host đưa cả hai cho model |
|---|---|---|---|
| Success / DryRun helper | Text truyền vào với prefix | Payload + `summary` bằng đúng text | Summary lặp; helper không tự đảm bảo text luôn ngắn. |
| Partial / Failed | Prefix + `[Detail]` chứa serialized payload | Payload cùng dữ liệu | Chi tiết có thể lặp toàn bộ. |
| Error có details | Error + Hint + serialized Detail | error/hint/details | Có phần trùng để hỗ trợ client khác nhau. |
| execute_webapi success | Chuỗi text có cả response body | `responseBody` và `summary` chứa lại text/body | Ở object trả về, body có thể xuất hiện ba chỗ: Content text, responseBody, summary; nếu host chỉ dùng structured thì vẫn có thể hai. |

`execute_webapi` hiện đã giới hạn theo max_response_lines và 20.000 ký tự body, nhưng body sau giới hạn vẫn được đưa vào summary rồi qua Success helper. Đây là điểm **ưu tiên đo** khi đánh giá result size, không phải kết luận mọi client bị tính ba lần hay việc lặp là bug. Luồng lỗi đặc thù ThrowExceptionFriendly còn có rewrite riêng, không suy ra mọi lỗi có cùng độ dài.

McpToolResultsCoverageTests kiểm tra `summary`, `[Detail]`, IsError; các test cũ phải giữ nguyên. Duplication được code giải thích là tương thích text-only/structured clients. MCP cũng khuyến nghị có JSON text fallback cho structured result; chưa kiểm tra client thì không được đơn giản xóa Content hoặc StructuredContent. [MCP structured content](https://modelcontextprotocol.io/specification/2025-11-25/server/tools#structured-content)

Một số DTO đã có JsonIgnore(WhenWritingNull), ví dụ GetTablesResult/SearchRecordsResult. Không coi “bỏ mọi null/false/0/[]” là tối ưu an toàn: các giá trị đó có thể có ý nghĩa khác omitted; không thay serializer/helper legacy toàn cục.

### 10.3 Nên giảm result trước bằng tính năng đang có

**Có nên giảm không? Có khi result lớn hơn nhu cầu; không phải cứ structuredContent là phải cắt.** Ưu tiên giảm dữ liệu lấy về đúng mục đích, thay vì đổi contract:

| Nhóm | Cách dùng hiện có | Ràng buộc giữ đủ chức năng |
|---|---|---|
| execute_fetchxml / execute_sql | Chọn các attribute/cột cần; filter/aggregate; đặt max_records phù hợp, get_all=false khi chỉ xem mẫu | Khi người dùng cần toàn bộ phải lấy đủ hoặc báo còn dữ liệu; không gọi mẫu là toàn bộ. Không lấy 5.000 dòng để đếm nếu aggregate đáp ứng. |
| manage_record read / execute_webapi GET | `columns`; Web API `$select`, `$filter`, `$top` khi endpoint hỗ trợ | Giữ ID và field cần cho bước sau. max_response_lines chỉ là giới hạn hiển thị/body hiện có, không thay thế paging đúng. |
| get_tables | detail_level=compact/standard theo nhu cầu; filter entity/attribute | Khi clone formula/column cần full, không ép compact khiến thiếu metadata. |
| search_records | top/entities/filter, detail_level hiện có | Full mode đã có đường ghi payload ra .devkit/search_records; kiểm tra client đọc được file. Không giả định có đường dẫn nghĩa là model đã có nội dung. |
| Logic/diagnostics | List gọn, entity/name/time/status filters, max_records; detail đúng đối tượng | Lấy đầy đủ lỗi/log/parameters khi chẩn đoán cần; không giấu cảnh báo hoặc partial failure. |
| Form/view/ribbon/report | List rồi detail đúng ID; XML/RDL đầy đủ khi sửa/undo | Không truncate tài liệu đầu vào của chỉnh sửa; backup và dữ liệu phục hồi phải nguyên vẹn. |

Các lựa chọn này dùng tham số đã có trong handler; không đổi default của legacy hoặc tự thêm/truyền một tham số mà operation không hỗ trợ. Contract help hướng dẫn model dùng chúng theo tác vụ, không ép mọi yêu cầu xuống một giới hạn nhỏ tùy tiện.

### 10.4 Nếu cần giảm structuredContent hơn nữa: hạng mục riêng, opt-in

Đợt A gộp catalog giữ full/default result nguyên trạng và test cũ bất biến. Đợt B chỉ mở khi benchmark cho thấy result vẫn chiếm chi phí đáng kể; thiết kế **compact result view** trong lớp presentation mới, không sửa McpToolResults/DTO/handler legacy để bắt mọi client dùng output mới.

- Full/default vẫn trả nguyên CallToolResult. Summary/page là lựa chọn tường minh với schema riêng được công bố đúng; đây là API bổ sung cần review, chưa phải một field/flag đã chốt trong tám router hai tham số ở §5.
- Giữ structuredContent dạng JSON có key dễ hiểu; chỉ project các field phù hợp operation. Giữ identifiers, status, warnings, IsError, partial counts, side-effect outcome, backupPath/undo và publish failures cần cho bước tiếp theo.
- Với phần dữ liệu không inline: phải nói rõ `returnedCount`, trạng thái đầy đủ/chưa đầy đủ, `hasMore` hoặc continuation thích hợp. Tên field mới chỉ là thiết kế của view mới, không âm thầm thay keys legacy. Không suy đoán totalCount khi backend không trả tổng.
- Dùng detail theo ID hoặc paging hiện có khi đủ; nếu lưu full snapshot ở server/file/resource thì phải có đường đọc lại đã kiểm thử trên client có lẫn không có resources. URI/path không tự đảm bảo remote client truy cập được. Chưa có đường lấy đủ dữ liệu thì giữ full result, chưa bật view đó.
- Nếu cần cursor/full-result reference mới, bind vào đúng instance/org/user/query, kiểm tra lifetime/expiry và giới hạn kích thước; đọc lại một snapshot mutation không được thực thi lại mutation. Không tự rerun create/invoke để lấy kết quả dài hơn.
- Với duplication: ở client/adapter có khả năng chọn representation, có thể cho model đọc một bản đầy đủ và giữ display/fallback ngoài model input. Server không kiểm soát mọi host, nên phải đo ở client thực tế. Ở compact presentation, summary mới phải thật ngắn (nhất là Web API); text-only fallback vẫn phải có đủ thông tin cần thiết theo hợp đồng hỗ trợ client. Giữ cơ chế cũ khi chưa kiểm chứng.
- Không dùng gzip/base64 cho JSON mà mong model đọc trực tiếp; không đổi key thành a/b/c, bỏ errors/null có ý nghĩa hoặc giấu dữ liệu vào `_meta` như một cách tiết kiệm mặc định. Những cách đó không chứng minh đủ chức năng và dễ làm tăng lần gọi đọc lại.
- Nếu task cần full data, toàn bộ dữ liệu cuối cùng vẫn có thể được model đọc và tính token. Chia trang chỉ giảm token khi workflow không cần nạp tất cả, hoặc xử lý/aggregate phía server đáp ứng được yêu cầu.

Chỉ thêm CompactResultPresentationTests và test client/integration mới cho nhánh B; test legacy vẫn byte/hash-identical. Test mới phải chứng minh: full parity, summary không nói sai về độ đầy đủ, paging không rơi/trùng bản ghi, truy hồi full hoạt động, lỗi/backup/partial failure còn đủ, và không repeat side effect. Hạng mục B có thể chưa triển khai mà đợt A vẫn được nghiệm thu; báo riêng lợi ích của từng đợt.

### 10.5 Benchmark gồm cả catalog lẫn result

Ghi riêng ba tầng:
1. **Wire:** tools/list chuẩn hóa (có cả outputSchema), initialize instructions, resource catalog.
2. **Host/model:** đúng tool definitions host thực đưa vào model, sau chuyển schema/lazy discovery.
3. **Workflow:** toàn bộ request input/cached input/output/tool results/help/retry qua một tác vụ hoàn chỉnh.

Giữ cố định model, client version/config, enabled instances, prompt corpus và context ban đầu. Đo cold session và warm session riêng. Nếu client không đưa outputSchema vào model, 43,1% wire outputSchema không tự biến thành 43,1% model-token savings.

Mô hình cho từng model request i: `input_i = instructions_i + definitions_i + history_i + new_tool_results_i + other_input_i`, các nhóm không đếm trùng. Tool result cũ nếu được giữ ở history chỉ tính trong history; duplication Content/StructuredContent chỉ tính theo representation host thực gửi.

So sánh `Σ input_old_i − Σ input_new_i` và `Σ output_old_i − Σ output_new_i` trên cả workflow; không cộng “tool output tokens” thêm một lần vào input đã chứa result. Báo cached input riêng. Nếu giảm catalog nhưng tăng help/detail calls/retries/lịch sử, savings có thể nhỏ hơn kỳ vọng. Cache có thể giảm chi phí/latency nhưng không biến JSON thành dữ liệu miễn context.

Ghi kích thước Content, StructuredContent, phần trùng và model-visible representation riêng cho: success nhỏ/lớn, Web API body, partial bulk fail, error details, metadata full, XML/RDL, log và contract help. Dùng fixture không chứa dữ liệu nhạy cảm; các mutation dùng fake/test environment phù hợp. Chưa có token usage từ host thì báo bytes/chars + limitation, không giả lập usage chính xác.

Giảm catalog bằng cách giấu hết descriptions rồi buộc đọc 40 contract một lượt là không đạt mục tiêu. Trả help ngắn cho đúng operation, không bỏ output fields để đạt benchmark.

Để tái đo baseline: mở devkit mcp --category all qua stdio, gửi initialize protocol 2025-11-25, notifications/initialized rồi tools/list; đọc hết nextCursor nếu có. Chuẩn hóa result bằng Python như §2.2; cộng len(inputSchema), len(outputSchema), len(description) theo từng tool, đếm properties. Chỉ log schema/metrics, không log .env/token/kết quả dữ liệu thật. Tokenizer phải được nêu tên/version; model-specific usage từ host ưu tiên hơn heuristic ký tự.

## 11. Snapshot tham số/default để AI không làm rơi field

Snapshot lấy từ source ngày khảo sát, đối chiếu count 348 với installed tools/list. Bắt buộc regenerate từ SDK descriptor lúc triển khai để lấy đúng kiểu, nullable, enum và docs; danh sách dưới đây chỉ là checklist tên/default, không phải serializer.

- `create_records`: `entity_name=""`, `records_json=""`, `max_parallelism=0`, `bypass_custom_logic=false`
- `execute_fetchxml`: `fetchxml=""`, `max_records=5000`, `get_all=false`
- `execute_sql`: `sql=""`, `max_records=5000`, `get_all=false`
- `execute_webapi`: `method="GET"`, `url=""`, `body=""`, `headers=""`, `include_headers=false`, `max_response_lines=200`
- `generate_demo_data`: `entity_name=""`, `from_date=""`, `to_date=""`, `count=10`, `fields=""`, `seed=0`, `field_overrides=""`
- `get_audit_history`: `entity_name=""`, `record_id=""`, `minutes_ago=1440`, `user_filter=""`, `operation=""`, `attribute_name=""`, `max_records=50`, `from_date=""`, `to_date=""`
- `get_business_process_flows`: `bpf_id=null`, `bpf_name=null`, `entity_name=null`, `status="all"`, `include_stages=false`, `max_records=50`
- `get_business_rules`: `entity_name=""`, `rule_id=""`, `status=""`, `max_records=50`
- `get_custom_apis`: `api_name=""`, `entity_name=""`, `include_microsoft=false`, `status="active"`, `max_records=100`
- `get_flows`: `flow_id=""`, `action="list"`, `name_filter=""`, `owner_filter=""`, `status="active"`, `status_filter=""`, `minutes_ago=1440`, `max_records=50`
- `get_messages`: `entity_name="none"`, `message_name=""`, `include_custom_actions=true`, `max_records=100`
- `get_plugin_trace_logs`: `record_id=""`, `type_name=""`, `entity_name=""`, `message_name=""`, `mode=""`, `correlation_id=""`, `minutes_ago=0`, `max_records=50`
- `get_plugins`: `assembly_name=""`, `entity_name=""`, `message_name=""`, `type_name=""`, `include_images=true`, `include_config=false`, `stage=""`, `mode=""`, `active_only=true`, `max_records=100`
- `get_solution_components`: `solution_name=""`, `include_active_layers=false`, `active_layers_only=false`
- `get_system_jobs`: `record_id=""`, `entity_name=""`, `status="failed"`, `operation_type=""`, `name_filter=""`, `correlation_id=""`, `minutes_ago=0`, `max_records=50`
- `get_tables`: `entity_name=""`, `filter=""`, `custom_only=false`, `include_intersect=false`, `names=""`, `detail_level="compact"`, `max_records=100`
- `get_workflows`: `workflow_id=""`, `entity_name=""`, `mode=""`, `status="active"`, `trigger_field=""`, `name_filter=""`, `max_records=50`
- `manage_app`: `action="detail"`, `app=""`, `app_name=""`, `solution_name=""`, `display_name=""`, `unique_name=""`, `description=""`, `icon_webresource=""`, `operations=""`, `max_records=100`
- `manage_chart`: `action=""`, `entity_name=""`, `chart_id=""`, `chart_name=""`, `chart_type=""`, `group_by_column=""`, `aggregate_column=""`, `aggregate_type="count"`, `measures=""`, `filter=""`, `presentationdescription=""`, `description=""`, `solution_name=""`, `validate=true`, `publish=true`, `confirmed=false`
- `manage_choice`: `action=""`, `optionset_name=""`, `display_name=""`, `filter=""`, `description=""`, `options=""`, `add_options=""`, `update_options=""`, `remove_options=""`, `solution_name=""`, `option_colors=""`
- `manage_column`: `entity_name=""`, `logical_name=""`, `attribute_type=""`, `display_name=""`, `solution_name=""`, `description=""`, `required_level=""`, `max_length=0`, `min_value=null`, `max_value=null`, `precision=-1`, `format=""`, `behavior=""`, `precision_source=-1`, `options=""`, `global_optionset_name=""`, `lookup_target=""`, `lookup_relationship_name=""`, `true_label=""`, `false_label=""`, `add_options=""`, `update_options=""`, `delete_options=""`, `is_audit_enabled=null`, `is_valid_for_advanced_find=null`, `is_secured=null`, `is_sortable=null`, `default_value=""`, `schema_name=""`, `formula_definition=""`, `formula_source_type=""`, `can_store_full_image=null`, `auto_number_format=""`, `clear_auto_number=null`, `auto_number_seed=null`
- `manage_command`: `action=""`, `command_id=""`, `entity_name=""`, `location=""`, `app_id=""`, `label=""`, `onclick_type=""`, `javascript_webresource=""`, `javascript_function=""`, `font_icon=""`, `icon_webresource=""`, `tooltip_title=""`, `tooltip_description=""`, `sequence=0`, `hidden=false`, `app_name=""`, `origin=""`, `action_type=""`, `name_filter=""`, `include_rules=false`, `include_children=false`, `max_records=50`, `items=""`, `flyout_command_id=""`
- `manage_deleted_records`: `action="list"`, `entity_name=""`, `record_id=""`, `record_ids=null`, `name_filter=""`, `max_records=100`, `turn=""`, `retention_days=30`, `name_prefix="[RESTORE] "`
- `manage_environment_variable`: `action=""`, `variable_name=""`, `solution_name=""`, `max_records=50`, `display_name=""`, `type=""`, `default_value=""`, `value=""`, `description=""`
- `manage_form`: `action=""`, `entity_name=""`, `form_id=""`, `form_name=""`, `form_type=0`, `include_formxml=false`, `formxml=""`, `operations=""`
- `manage_function`: `action=""`, `function_name=""`, `solution_name=""`, `definition_json=""`, `arguments_json=""`, `record_id=""`, `max_records=50`, `include_managed=false`
- `manage_record`: `action=""`, `entity_name=""`, `record_id=""`, `fields_json=""`, `columns=""`, `related_entity_name=""`, `related_record_id=""`, `relationship_name=""`
- `manage_record_file`: `action=""`, `entity_name=""`, `column_name=""`, `record_id=""`, `file_path=""`, `content_base64=""`, `file_name=""`, `full_size=false`
- `manage_relationship`: `action=""`, `relationship_name=""`, `referenced_entity=""`, `referencing_entity=""`, `entity1=""`, `entity2=""`, `intersect_entity_name=""`, `entity_name=""`, `attribute_name=""`, `cascade_preset=""`, `cascade_assign=""`, `cascade_delete=""`, `cascade_merge=""`, `cascade_reparent=""`, `cascade_share=""`, `cascade_unshare=""`, `menu_behavior=""`, `menu_group=""`, `menu_order=10000`, `lookup_display_name=""`, `solution_name=""`, `is_hierarchical=false`
- `manage_report`: `action=""`, `report_id=""`, `file_path=""`, `name=""`, `description=""`, `language=""`, `solution_name=""`, `name_filter=""`, `max_records=50`, `dataset_name=""`, `fetchxml=""`, `entity_name=""`, `output_folder=""`, `prefilter=true`
- `manage_ribbon`: `action=""`, `entity_name=""`, `operations=""`, `ribbonxml=""`
- `manage_role`: `action=""`, `user_id=""`, `team_id=""`, `role_id=""`, `role_name=""`, `business_unit_id=""`, `entity_name=""`, `privileges=""`, `backup_path=""`, `max_records=50`
- `manage_table`: `display_name=""`, `display_collection_name=""`, `solution_name=""`, `description=""`, `primary_attribute_name=""`, `primary_attribute_display_name="Name"`, `ownership_type="User"`, `table_type="Standard"`, `is_activity=false`, `has_notes=false`, `is_quick_create_enabled=null`, `is_audit_enabled=null`, `is_search_enabled=null`, `primary_attribute_max_length=100`, `schema_name=""`, `logical_name=""`
- `manage_view`: `action=""`, `entity_name=""`, `view_id=""`, `view_name=""`, `is_personal_view=false`, `fetchxml=""`, `layoutxml=""`, `cell_updates_json=""`
- `manage_webresource`: `action=""`, `web_resource_id=""`, `name=""`, `display_name=""`, `description=""`, `file_path=""`, `type=""`, `solution_name=""`, `type_filter=""`, `max_records=50`
- `parse_record_url`: `input=""`
- `publish_customizations`: `entities=""`, `optionset_names=""`, `include_ribbons=false`, `dashboards=""`, `webresources=""`, `include_global_optionset=false`, `include_sitemap=false`, `appmodules=""`
- `read_instruction`: `name=""`
- `search_records`: `action="search"`, `search_term=""`, `entities=""`, `top=50`, `filter=""`, `detail_level="compact"`
- `whoami`: không có tham số do model truyền.

## 12. Nguồn

- [McpServerHost.cs](../DynamicsCrm.DevKit.Cli/Mcp/McpServerHost.cs): discovery, category, instructions, filtering.
- [McpCommand.cs](../DynamicsCrm.DevKit.Cli/Commands/McpCommand.cs) và [McpCommandArgs.cs](../DynamicsCrm.DevKit.Cli/Models/McpCommandArgs.cs): CLI --tools và option.
- [ReadInstructionTool.cs](../DynamicsCrm.DevKit.Cli/Mcp/Tools/ReadInstructionTool.cs): 13 resource, alias, references scan.
- [McpExecutionContext.cs](../DynamicsCrm.DevKit.Cli/Mcp/McpExecutionContext.cs) và [DryRunGatewayContractTests.cs](../DynamicsCrm.DevKit.Cli.UnitTests/Cli/Mcp/CrossTool/DryRunGatewayContractTests.cs): policy invariants.
- [McpServerHostCoverageTests.cs](../DynamicsCrm.DevKit.Cli.UnitTests/Cli/Mcp/Infrastructure/McpServerHostCoverageTests.cs): 18/40 baseline.
- [ManageFunctionContractTests.cs](../DynamicsCrm.DevKit.Cli.UnitTests/Cli/Mcp/ManageFunction/ManageFunctionContractTests.cs): shipped/gated actions.
- [McpToolResults.cs](../DynamicsCrm.DevKit.Cli/Mcp/Tools/Helper/McpToolResults.cs) và [McpToolResultsCoverageTests.cs](../DynamicsCrm.DevKit.Cli.UnitTests/Cli/McpToolResultsCoverageTests.cs): text/structured duplication và contract phải giữ.
- [ExecuteWebApiTool.cs](../DynamicsCrm.DevKit.Cli/Mcp/Tools/ExecuteWebApiTool.cs): response body trong summary và responseBody, giới hạn lines/chars.
- [OpenAI Function calling](https://developers.openai.com/api/docs/guides/function-calling): definitions là input; kết quả function đưa vào input lượt tiếp theo.
- [OpenAI Conversation state](https://developers.openai.com/api/docs/guides/conversation-state): lịch sử trong chuỗi response vẫn có input-token accounting.
- [MCP tools specification 2025-11-25](https://modelcontextprotocol.io/specification/2025-11-25/server/tools): discovery, schema và tool annotations; protocol này được negotiate khi đo.
- [MCP resources specification 2025-11-25](https://modelcontextprotocol.io/specification/2025-11-25/server/resources): resource URI/read và host quyết định cách đưa resource vào context.

Phần kiến trúc 10 tool, budget và migration là **đề xuất của tác giả dựa trên nguồn**, không phải tính năng MCP/DevKit đã có.


## 13. Kiểm tra chính hai tài liệu

Đã kiểm tra UTF-8, 40 operation duy nhất, phân loại 18/22, liên kết tương đối và anchor không hỏng, ID HTML không trùng, cú pháp JavaScript và 7 trường hợp tìm kiếm/lọc. Chỉ tạo hai file báo cáo trong Docs; không sửa source MCP. Chưa kiểm tra hình ảnh render hoặc layout mobile: Browser Use chặn protocol file://, nên không có screenshot xác nhận. Không tìm cách vượt chính sách trình duyệt.

Review 2 chỉ chỉnh hai báo cáo này. Đối chiếu SHA256 527 file đã tracked thuộc các thư mục UnitTests trước/sau để xác nhận test cũ không bị thay đổi; đây là kiểm tra tính toàn vẹn file, **không phải kết quả chạy unit test**. Kiểm tra lại liên kết/anchor, 40 operation và logic lọc sau cập nhật. Giới hạn chưa có screenshot render ở trên vẫn còn.
