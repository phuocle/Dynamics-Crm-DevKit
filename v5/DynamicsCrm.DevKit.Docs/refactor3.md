# Refactor MCP tools — phase 3

## 1. Mục tiêu và phạm vi

Tiếp tục toàn bộ tinh thần của [refactor2.md](refactor2.md), đồng thời áp dụng kết quả [full re-review phase 2](testcall/review-phase-2.md). Phạm vi review bao gồm toàn bộ 16 READONLY tools đã làm qua phase 1 và phase 2 (`2, 4, 7-20`), không chỉ nhóm 11-20. Batch sửa đã đóng phần lớn lỗi exception/description/DTO, nhưng chưa đủ để approve: còn 3 `FAILED`, 6 `NEED UPDATE`, 5 `NEED TEST-CALL UPDATE` và 2 `NEED SECURITY + TEST-CALL UPDATE`. Phase 3 phải đóng các blocker còn lại rồi mới dùng các read tools này làm dependency tin cậy.

Không làm unit test trong phase này. Không stage, commit hoặc push. Chỉ sửa đúng CLI/MCP, model/helper liên quan, redirect bắt buộc và test-call của tool đang làm.

Số thứ tự tool là dữ liệu động. Luôn lấy lại từ `devkit mcp --tools` sau build; không dùng số cũ trong `refactor2.md`. Với danh sách source hiện tại, các tool còn lại dự kiến là:

- Basic: `1 create_records`, `3 generate_demo_data`, `5 manage_choice`, `6 manage_record`.
- Standard: `21 manage_chart`, `22 manage_deleted_records`, `23 manage_environment_variable`, `24 manage_form`, `25 manage_role`, `26 manage_view`, `27 manage_webresource`, `28 publish_customizations`.
- Advanced: `29 execute_webapi`, `30 manage_app`, `31 manage_command`, `32 manage_ribbon`, `33 upsert_column`, `34 upsert_relationship`, `35 upsert_table`.

Nếu runtime trả numbering khác, runtime thắng và tên file test-call phải dùng numbering mới. Ghi chú cũ “execute_webapi tool #32” đã stale; theo source hiện tại nó dự kiến là #29.

## 2. Rules bắt buộc kế thừa từ phase 2

1. Bỏ qua toàn bộ unit tests. Build/reinstall CLI theo workflow `build-cli` và chỉ chạy verification cần cho MCP runtime.
2. Toàn bộ class chỉ có một `try-catch`, bao trọn entry point của tool. Không `try-catch` trong helper, không catch rỗng, không đổi network/permission/metadata fault thành “not found”.
3. Main catch chỉ `return base.ThrowException(ex)` (hoặc `ThrowException(ex)` theo convention hiện hữu). Validation/business failure dùng `Error`; unhandled fault dùng `ThrowException`.
4. Không tạo wrapper chỉ để bọc `Success`/`Error`/`DryRun`; gọi trực tiếp result helpers. Helper parse/query/map thực sự vẫn được phép.
5. Structured DTO null-aware: mọi property có thể null phải có `JsonIgnore(WhenWritingNull)`; list rỗng nên thành null nếu không mang ý nghĩa riêng. Không đổi null thành `""` chỉ để né serializer.
6. `Content` đúng một dòng, ngắn, có `[Success]`, `[Error]` hoặc `[DRY-RUN]`. Chi tiết nằm trong structured content.
7. Tool description chỉ gồm một câu tóm tắt/modes, `WHEN TO USE`, `RELATED TOOLS`; không chép lại parameter schema và không hứa capability code không có.
8. Mỗi tool có test-call `DynamicsCrm.DevKit.Docs/testcall/{N}.{tool_name}.md` với bốn section H1: Tool description, Input tool call, Output tool call, Kết quả AI tổng hợp. Có ít nhất một happy path khác và 2-3 validation/error paths; lưu raw output đầy đủ, không ghi “rút gọn”.
9. Dùng `logicalName`, `entityName`, `recordId` nhất quán; không dùng `field` thay cho logical name.
10. Field-level values phải ưu tiên `FormattedValues`; nếu cần metadata thì fetch một lần/request, cache display names và option labels. Metadata fail phải có semantics rõ, không silent catch.
11. Không đoán response/metadata format. Phải có evidence từ MCP query hoặc probe trước khi code mapping, filter, option value, lookup type và sequence/order.
12. Tool mới/chỉnh sửa có đường đi tương đương qua raw Web API phải cập nhật redirect/block trong `ExecuteWebApiTool` cùng build. Không để raw endpoint bypass safety/UX của dedicated tool.
13. Preserve public tool names, JSON keys và error text/output shape trừ khi chính bug contract yêu cầu thay đổi; nếu đổi semantic key như `solutionId` chứa name, document migration rõ.
14. `ToolCategoryMap` tiếp tục dùng `nameof()` và phải khớp tool classes. Kiểm tra lại comment/count vì source hiện có là 9 Basic + 19 Standard + 7 Advanced = 35.

## 3. Rules mới rút ra từ review phase 2

15. Description là executable contract: mọi câu “auto-detail”, “disambiguation”, “with XAML”, “stack trace” phải có code và test chứng minh. Nếu không, xóa lời hứa hoặc implement thật.
16. `max_records` phải áp dụng đúng mode được mô tả. Không Fetch `top=N` rồi client-filter vì có thể false zero; filter server-side trước top hoặc paging đến khi đủ N matches.
17. Valid GUID nhưng record không tồn tại là expected business error, không phải unexpected exception. Dùng query/top 1 hoặc API cho phép phân biệt not-found mà không thêm helper catch.
18. Không dùng category/status/type làm sequence. BPF stage, command order, ribbon order, form tab/section order phải lấy từ nguồn order thật đã prove.
19. Không match logical name bằng substring trên CSV/token list. Parse token hoặc dùng delimiter-safe condition rồi verify client-side.
20. Best-effort/partial result phải explicit: structured output có `warnings`/`partialResults`; tuyệt đối không silent catch rồi trả `[Success]` như dữ liệu đầy đủ.
21. Tên JSON phải đúng semantic. Property kết thúc `Id` phải là ID; label/name dùng property riêng. Không để `solutionId = "Active Solution"`.
22. Mutation tool bắt buộc có dry-run/safety semantics phù hợp `McpExecutionPolicy`: dry-run không ghi Dataverse; destructive action phải validate exact target và trả preview/evidence đủ để user kiểm tra.
23. Với bulk mutation, trả per-item status ngắn gọn, giới hạn output, không che partial failure; idempotency/destructive/read-only metadata phải đúng với từng tool.
24. Dữ liệu nhạy cảm (secure config, secrets, environment variable values, role/security data) mặc định không trả; không xuất vào Content, logs hoặc test-call. Chỉ expose khi parameter rõ ràng và policy cho phép.
25. Test-call phải được tạo từ đúng source/build đang review. Nếu wording/prefix/output shape không khớp source (như `parse_record_url` và `whoami` đã phát hiện), artifact cũ mất giá trị approve và phải regenerate sau release/SHA verification.
26. HTTP success không đồng nghĩa tool success. Nếu payload có `error`, parse status thất bại hoặc structured result mang error, phải trả `Error(...)` với `IsError=true`; cấm gọi `Success()` với Content bắt đầu `[Error]`.
27. Dead/compatibility method vẫn thuộc class và vẫn chịu rule một try-catch. Xóa formatter/helper không còn caller thay vì giữ silent catches.
28. Access token/OAuth token không được xuất vào test-call trong bất kỳ trường hợp nào. Nếu tool còn hỗ trợ token opt-in, test chỉ được verify bằng redacted/presence metadata và cần safety review riêng.

## 4. Program.cs — optional, không phải mặc định

Ưu tiên dùng MCP query metadata và dedicated read-only tools để prove table/column/relationship, option values, lookup types và đặc biệt là logical name.

`DynamicsCrm.DevKit.Tests/TestAllInOne/Dev.AllInOne.Console/Program.cs` là **optional fallback**. Chỉ dùng khi không thể prove chính xác bằng MCP metadata query. Nếu phải dùng, code probe qua `App.Service`, không hard-code credential, ghi rõ evidence thu được và restore/không để thay đổi ngoài phạm vi. AI không được lấy việc “không sửa được Program.cs” làm blocker nếu MCP query đã prove đủ metadata.

Trong task review phase 2, Program.cs đã được bỏ qua hoàn toàn; không lấy comment “đã probe” trong source làm evidence mới nếu không có artifact output tương ứng.

## 5. Trạng thái sau full re-review

| Trạng thái | Tools | Blocker chính |
|---|---|---|
| `FAILED` | `get_solution_components`, `get_system_jobs`, `get_workflows` | Sensitive-value leak/partial paging; stack-trace contract + time filter; stale XAML redirect + post-filter paging |
| `NEED UPDATE` | `execute_fetchxml`, `get_tables`, `parse_record_url`, `get_audit_history`, `get_business_process_flows`, `get_flows` | Validation, honest truncation, identifier semantics, hoặc paging trước client filter |
| `NEED TEST-CALL UPDATE` | `search_records`, `get_business_rules`, `get_custom_apis`, `get_messages`, `get_plugin_trace_logs` | Static code review đã đóng blocker cũ nhưng artifacts không khớp source/rule 8 |
| `NEED SECURITY + TEST-CALL UPDATE` | `whoami`, `get_plugins` | Bearer token và secure config cần policy/redaction contract rõ |

Không có tool nào được đưa vào danh sách hoàn thành cho đến khi đạt `PASSED` cả code lẫn evidence.

## 6. Thứ tự ưu tiên phase 3

1. Sửa ba `FAILED` trước:
   - `get_solution_components`: không query/return environment-variable `value`; resolve tên qua definition hoặc để unresolved; page toàn bộ `solutioncomponent` hoặc trả partial warning explicit.
   - `get_system_jobs`: xóa lời hứa stack trace nếu không có field thật; sửa `status=all` để không mất waiting jobs và dùng order phù hợp.
   - `get_workflows`: sửa redirect alias `processes`; page đến khi đủ exact trigger-field matches.
2. Đóng các correctness gaps còn lại:
   - Parse malformed FetchXML thành validation `Error`.
   - Làm truncation của `get_tables` explicit (`hasMore`/matched count/warning).
   - Validate GUID thật cho maker/admin URLs và tách `entitySetName` khỏi `entityName` khi Web API unresolved.
   - Page trước client filter cho audit user, flow owner và BPF entity; chỉ trả BPF sequence khi có nguồn order thật đã prove.
3. Chốt sensitive-output policy:
   - `whoami.include_token`: ưu tiên bỏ token khỏi MCP output; nếu giữ compatibility thì cần opt-in policy, redaction/presence-only evidence và warning rõ.
   - `get_plugins.include_config`: không ghi secure config vào docs/logs; cân nhắc chỉ trả presence/ID hoặc require explicit policy gate.
4. Regenerate 16 test-call từ đúng source/build đang review. Mỗi file phải có title + bốn H1 chuẩn, raw output đầy đủ, không “rút gọn”, không token/secret, và regression cases đúng lỗi vừa sửa.
5. Chỉ sau khi 16 read tools đạt `PASSED`, refactor `execute_webapi` và tiếp tục mutation/Standard/Advanced tools còn lại.

Mỗi tool hoàn tất độc lập: code → build → release/restart → runtime/SHA verify → happy/error/dry-run calls → test-call → review checklist. Không gom nhiều tool rồi mới test.

## 7. Checklist approve cho từng tool

- [ ] Chỉ một main try-catch; không helper catch/silent catch; main catch dùng `ThrowException`.
- [ ] Validation/not-found dùng `Error`; unexpected fault không bị giả thành business error.
- [ ] Description khớp tuyệt đối code và không lặp parameter.
- [ ] DTO null-aware, semantic keys đúng, Content một dòng.
- [ ] Filter/limit/order/paging cho kết quả đúng, không false zero hoặc substring false positive.
- [ ] Mọi client-side filter page đến khi đủ `max_records` matches hoặc hết dữ liệu; bỏ `top` không được coi là đã giải quyết paging.
- [ ] Metadata/logical name/option/lookup/order đã prove; Program.cs chỉ optional fallback.
- [ ] Dry-run không mutate; destructive target và role/safety gate được kiểm tra.
- [ ] Sensitive values không leak; partial failures/warnings explicit.
- [ ] Access token, secure plugin config và environment-variable value không xuất hiện trong test-call; production output phải có explicit safety policy nếu vẫn hỗ trợ opt-in.
- [ ] `execute_webapi` redirect/block được cập nhật nếu endpoint overlap.
- [ ] Smallest relevant CLI build: 0 errors, 0 warnings.
- [ ] Release script hoàn tất và `Const.cs` trở về `xxxx.yy.zz HH.mm.ss`.
- [ ] MCP process mới có version/build/process start/SHA khớp manifest dưới `Published/<version>/`.
- [ ] Test thật trên org cấu hình: happy path, alternate mode, 2-3 invalid paths, và dry-run cho mutation.
- [ ] Test-call đúng bốn H1, raw output đầy đủ, numbering lấy từ runtime, không fake data/secrets.
- [ ] Test-call wording/prefix/shape khớp source của đúng assembly SHA; không dùng artifact stale để approve.
- [ ] Payload-level error trả `IsError=true`; không có `Success("[Error] ...")`.
- [ ] Git status chỉ có files thuộc tool đang làm và test-call; không stage/commit/push.

## 8. Definition of done cho toàn phase

Phase 3 chỉ hoàn tất khi:

- Mọi tool còn lại đạt checklist trên và các lỗi phase 2 đã đóng.
- Danh sách `devkit mcp --tools`, `ToolCategoryMap`, comments/count và test-call numbering đồng bộ.
- Không còn description hứa hành vi thiếu implementation.
- Không còn helper catch trong MCP tool classes, trừ khi có exception được user chấp thuận và document thành explicit partial-result contract; mặc định là không cho phép.
- Working tree chỉ chứa các thay đổi được user cho phép; không có date replacement, credential, token hoặc generated client adapters.

Trạng thái hợp lệ khi review: `PASSED`, `NEED UPDATE`, `FAILED`, hoặc một trạng thái `NEED <reason>` cụ thể. Chỉ `PASSED` mới được đưa vào danh sách hoàn thành.
