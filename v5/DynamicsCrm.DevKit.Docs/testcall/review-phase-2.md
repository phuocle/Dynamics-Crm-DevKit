# 2. execute_fetchxml

## Điểm đúng

- Một main `try-catch`, helper không bắt exception, trực tiếp dùng `Success`/`Error`/`ThrowException`.
- Có giới hạn 5.000, single-page/auto-page, formatted values và structured result; test-call có join, aggregate, paging và validation.
- Content trên các đường đã test là một dòng và có prefix đúng.

## Điểm sai

- Description không theo mẫu `WHEN TO USE`/`RELATED TOOLS`, đồng thời lặp rules của parameters.
- Description cấm `top/count/page`, nhưng `FetchXmlPagingHelper` âm thầm xóa `top` và ghi đè paging thay vì trả validation `Error`; query có thể chạy khác ý người gọi.
- FetchXML malformed là input validation có thể đoán trước, nhưng hiện exception parse bubble thành unexpected `ThrowException`.
- Test-call phụ dùng “structured content rút gọn” ở một số case, không phải raw output đầy đủ theo rule 8.

## Điểm cần chú ý

- Mọi value bị chuyển thành `Dictionary<string,string>`; phải document rõ structured output đã mất JSON type gốc và aliases/lookup labels phụ thuộc formatter.

## Tối ưu

- Validate XML và các thuộc tính paging trước execute; thống nhất policy reject hay override, không vừa cấm vừa silently rewrite.
- Rút description theo template và lưu raw result cho các ví dụ.

## Kết luận — NEED UPDATE

Core query/paging tốt, nhưng validation semantics và documentation chưa đạt rule phase 2.

# 4. get_tables

## Điểm đúng

- Một main `try-catch`, metadata được lấy qua service, display-name-first resolution và structured tiers compact/standard/full khá đầy đủ.
- Có logical/schema/display names, relationship, alternate key, lookup targets, option labels và null-aware fields; test-call có happy/error/filter cases.
- Filter nhiều giá trị tránh substring false-positive tốt hơn filter đơn.

## Điểm sai

- List mode không có `max_records`/paging và có thể trả toàn bộ entity metadata, tạo payload rất lớn.
- `DisplayName`, `OwnershipType` và vài labels bị ép thành chuỗi rỗng thay vì null, giảm hiệu quả token rule.
- `formulaDefinition` ở full mode thực tế chứa source reference `entity:attribute`, không phải formula definition; tên JSON và description “pass unchanged” dễ gây hiểu sai semantic.
- Test-call có structured outputs rút gọn, nên chưa đáp ứng raw-output evidence đầy đủ.

## Điểm cần chú ý

- Comment khẳng định `SourceType=null` tương đương Simple là một normalization policy, không phải metadata fact; client cần biết đây là inference.
- Single-value filter chỉ prefix logical name, trong khi multi-value có behavior khác đáng kể; description phải đủ rõ mà không quá dài.

## Tối ưu

- Thêm limit/paging hoặc summary-first list; dùng key như `formulaSourceReference` nếu không trả formula thật; normalize empty labels thành null.

## Kết luận — NEED UPDATE

Metadata detail hữu ích, nhưng list size và JSON semantic cần sửa trước PASSED.

# 7. parse_record_url

## Điểm đúng

- Parser bao phủ main.aspx, Web API, maker/admin portal, legacy URL và raw GUID; metadata resolution nằm dưới một main catch.
- Structured DTO có entity/record/environment/flow context.

## Điểm sai

- Source hiện tại `BuildCompactText()` tạo nhiều dòng với prefix `[ParsedUrl]`, vi phạm trực tiếp rule Content một dòng + `[Success]`. Test-call lại ghi một dòng `[Success]`, chứng tỏ artifact không khớp code hiện tại.
- Validation gọi `Error("Error: ...")`, có nguy cơ tạo `[Error] Error: ...`; test-call ghi phiên bản không lặp, tiếp tục cho thấy runtime/source mismatch.
- Description không có `WHEN TO USE`/`RELATED TOOLS` và lặp input behavior.
- Test-call chỉ có một happy path và một error path, thiếu ít nhất một alternate happy path cùng 2-3 validation paths.

## Điểm cần chú ý

- Maker regex cho environment/flow/run dùng `[0-9a-fA-F-]+` nhưng không validate GUID; malformed ID có thể được trả như record hợp lệ.
- Web API unresolved trả entity set name trong field `entityName`, dù entity set không phải logical name.

## Tối ưu

- Dùng một dòng `[Success] ...`, bỏ `Error:` khỏi message, tách `entitySetName` khỏi `entityName`, thêm tests Web API/maker/raw GUID/malformed URL.

## Kết luận — FAILED

Source hiện tại vi phạm Content contract và không khớp chính test-call dùng để approve.

# 8. search_records

## Điểm đúng

- Hai action search/status, entity resolution, Web API payload, structured status/results và input validation khá rõ.
- Test-call có search, entity scope, status và hai validation paths.

## Điểm sai

- Class còn nhiều helper `try-catch` (`FormatSearchResults`, `FormatStatusResults`) trái rule một catch; đây là dead/compatibility code và không được miễn rule.
- HTTP 200 chứa `Error` hoặc status parse ra null vẫn được truyền vào `Success(...)` với Content bắt đầu `[Error]`, làm `IsError=false` nhưng text báo lỗi.
- Tool description chỉ một câu, thiếu `WHEN TO USE`/`RELATED TOOLS`.
- Test-call ghi structured outputs “rút gọn”, không phải raw evidence.

## Điểm cần chú ý

- `ObjectTypeCode` top-level đã được comment là server luôn trả 0, nhưng mapper vẫn expose nó như field bình thường thay vì dùng `@search.objecttypecode` hoặc cảnh báo rõ.
- Các compatibility formatters không có caller nên vừa tăng surface vừa giữ silent catches.

## Tối ưu

- Xóa dead formatters/catches; biến payload-level error thành `Error` result; map OTC từ nguồn đã probe hoặc omit top-level 0.

## Kết luận — FAILED

Error result semantics có thể mâu thuẫn `Content`/`IsError`, là lỗi contract nghiêm trọng.

# 9. whoami

## Điểm đúng

- Một main catch, thu thập user/org/runtime/SHA và structured DTO; thông tin runtime hữu ích để verify MCP process.
- Token là opt-in, DTO có null-ignore cho phần lớn optional fields.

## Điểm sai

- `BuildCompactText()` trong source không thêm `[Success]`; test-call lại có prefix và wording khác (`role(s)` so với `security role(s)`), nên artifact đã stale so với code.
- Description thiếu `WHEN TO USE`/`RELATED TOOLS`.
- Test-call không có alternate happy path hoặc validation/security path; chưa test `include_token` và không được đưa token thật vào docs.
- `FullName`, `DomainName`, `Email` bị đổi thành chuỗi rỗng thay vì null.

## Điểm cần chú ý

- `include_token=true` trả OAuth access token trong structured content. Đây là dữ liệu cực nhạy cảm: không được lưu vào test-call/log và nên cân nhắc loại capability hoặc thêm safety gate rõ.
- Roles query chỉ lấy role gán trực tiếp qua `systemuserroles`; không nên mô tả đó là toàn bộ effective privileges nếu chưa tính team roles.

## Tối ưu

- Thêm prefix đúng trong source, regenerate test-call từ build hiện tại, redaction bắt buộc và document direct roles/effective roles chính xác.

## Kết luận — FAILED

Evidence không khớp source và Content hiện tại thiếu prefix bắt buộc; token exposure cần hardening.

# 10. get_audit_history

## Điểm đúng

- DTO đúng mô hình một audit event chứa `changes[]`, dùng `logicalName`, display name và option labels theo tinh thần rules 9-11.
- Detail/browse, date range, user/operation/attribute filters và test-call thật khá đầy đủ; bốn H1 chính có mặt.
- Content chính ngắn và structured null-aware.

## Điểm sai

- `LoadMetadataCache` có helper `try-catch` nuốt lỗi, vi phạm literal rule “chỉ một try-catch”. Dù phù hợp ý fallback metadata của rule 11, output không có warning để client biết display labels đang partial.
- Browse lấy `top=max_records` trước rồi mới client-filter `user_filter`; match nằm ngoài top có thể bị bỏ và trả false zero/count thấp.
- Description không theo `WHEN TO USE`/`RELATED TOOLS` và lặp hầu hết parameter interactions.
- Một số test phụ ghi structured content rút gọn.

## Điểm cần chú ý

- `FormatMultipleUsers` vẫn tạo bảng tab-separated nhiều dòng nội bộ; cần bảo đảm nó không lọt vào Content qua error path.
- Rule 2 và rule 11 của `refactor2.md` đang xung đột về metadata fallback; phase 3 phải chốt explicit warning/partial-result thay cho silent catch.

## Tối ưu

- Filter user server-side bằng join nếu khả thi, hoặc page trước khi áp max; thêm `warnings` khi metadata labels không lấy được.

## Kết luận — NEED UPDATE

Audit shape đúng, nhưng silent metadata failure và post-filter-after-top chưa an toàn để PASSED.

# 11. get_business_process_flows

## Điểm đúng

- Đúng khung chính: một `try-catch` ở entry point, exception đi qua `ThrowException`, helper không tự bắt lỗi, gọi trực tiếp `Success`/`Error`.
- Có list/detail/auto-detail, resolve display name sang logical name, `Content` một dòng và DTO phần lớn null-aware.
- Test-call dùng dữ liệu thật và cho thấy list, detail, entity filter, auto-detail, `include_stages` hoạt động.

## Điểm sai

- `GetStages()` sắp xếp bằng `StageCategoryValue`. Stage category (Qualify/Develop/...) là phân loại, không phải thứ tự thực thi; BPF tùy biến hoặc nhiều stage cùng category có thể trả sai sequence dù description hứa “stage sequence”. Cần lấy sequence đã probe từ metadata/process definition, không suy diễn từ category.
- File test-call không theo 4 section H1 bắt buộc và không có 2-3 validation error paths; phần lớn ví dụ cũng thiếu `IsError` và phần AI tổng hợp.

## Điểm cần chú ý

- `entity_name` hiện chỉ so với `workflow.primaryentity`; không được mô tả nó như bộ lọc mọi entity mà BPF đi qua nếu chưa kiểm tra stage entities.
- Các giá trị thiếu như owner/primary entity đang bị đổi thành chuỗi rỗng ở vài chỗ, làm giảm hiệu quả rule ẩn null.

## Tối ưu

- Probe và trả thêm một trường sequence/order đáng tin cậy; giữ category chỉ là label.
- Viết lại test-call đủ 4 H1 và thêm invalid GUID, invalid status, BPF không tồn tại.

## Kết luận — NEED UPDATE

Code chạy được nhưng chưa thể PASSED vì thứ tự stage có thể sai và test-call không đạt rule 8.

# 12. get_business_rules

## Điểm đúng

- Một `try-catch`, dùng `ThrowException`, list/detail rõ ràng, resolve entity và dùng metadata ObjectTypeCode thay vì đoán.
- Kết quả list/detail ngắn, các list rỗng được ẩn; test-call có happy paths và nhiều validation paths bằng dữ liệu thật.

## Điểm sai

- Schema parameter nói `entity_name` “Ignored in detail mode”, nhưng code bắt buộc, resolve và dùng nó để kiểm tra ownership trong detail mode. Contract và implementation mâu thuẫn.
- `BusinessRuleDetailEntry.Scope` và `Status` có thể null nhưng thiếu `JsonIgnore(WhenWritingNull)`.
- Detail dùng `Retrieve`; một GUID hợp lệ nhưng không tồn tại sẽ thành unexpected fault/`ThrowException` thay vì business `Error` “not found”.
- Parser ghép field/operator/constant theo cùng index từ các regex độc lập; XAML phức tạp có thể ghép sai điều kiện nhưng vẫn báo `parsed`.
- Test-call không có 4 section H1 như rule 8.

## Điểm cần chú ý

- Kết quả parse chỉ nên được coi là best-effort; không được khẳng định đầy đủ nếu chưa đối chiếu cấu trúc XAML thật.

## Tối ưu

- Đồng bộ contract `entity_name`; xử lý valid-but-not-found thành `Error`; bổ sung null-ignore.
- Dùng XML/XAML traversal hoặc trả warning/parse coverage thay vì zip các regex độc lập.

## Kết luận — NEED UPDATE

Happy path tốt, nhưng contract, null serialization và độ tin cậy parser cần sửa.

# 13. get_custom_apis

## Điểm đúng

- Cấu trúc exception/result đúng; resolve API và entity có ambiguity handling; list/detail tách rõ.
- Mapping binding/type/processing, request/response parameters và plugin binding có structured DTO null-aware.
- Test thật chứng minh `solutionId` được resolve thành friendly name, filters và validation hoạt động.

## Điểm sai

- Description lặp lại schema parameter (`api_name`, `include_microsoft`) thay vì chỉ tóm tắt mode/use case.
- Test-call không tổ chức theo 4 section H1 bắt buộc.

## Điểm cần chú ý

- Tên property `solutionId` thực tế chứa friendly name (`Active Solution`), không phải GUID. Đây là semantic mismatch dễ làm client hiểu sai; nên đổi thành `solutionName`, hoặc giữ ID thật và thêm `solutionName`.
- Detail bỏ qua các filter list nhưng parameter descriptions chưa nói nhất quán việc đó.

## Tối ưu

- Chuẩn hóa solution ID/name và rút description; bổ sung test global/entity-collection binding và API không có plugin type.

## Kết luận — NEED UPDATE

Implementation gần đạt, nhưng JSON semantic và tài liệu chưa đạt contract phase 2.

# 14. get_flows

## Điểm đúng

- List/detail/runs, validation, concise content và null-aware DTO được triển khai rõ.
- Run summary và time window hữu ích; test-call có nhiều success/error paths.

## Điểm sai

- Description khẳng định fuzzy `0/multi -> disambiguation`, `1 -> auto`, nhưng code list không có nhánh disambiguation hay auto-detail cho `name_filter`/`owner_filter`.
- `owner_filter` chạy client-side sau FetchXML `top=max_records`; match nằm sau top có thể bị bỏ và tool trả 0 sai.
- Validation nằm ngoài `try`, không đúng tinh thần toàn bộ entry point được bảo vệ bởi một main try-catch.
- Test-call không test hai fuzzy filters đang được quảng cáo và không có 4 section H1.

## Điểm cần chú ý

- `runduration` được retrieve nhưng mapper tự tính từ timestamps; cần xác nhận timezone/paused run trước khi bỏ giá trị Dataverse.

## Tối ưu

- Hoặc implement fuzzy contract thật, hoặc xóa lời hứa. Đưa owner filter vào server-side link/filter rồi mới áp top.

## Kết luận — FAILED

Public description hứa hành vi không tồn tại và owner filtering có thể trả sai kết quả.

# 15. get_messages

## Điểm đúng

- Async entry point có một `try-catch`, trực tiếp dùng result helpers; phân biệt SDK message, legacy Custom Action và modern Custom API.
- XAML samples thật chứng minh input/output/entity binding được parse; null lists được ẩn.

## Điểm sai

- `InOutArgument` được thêm vào inputs nhưng cố ý bị loại khỏi outputs, trái nghĩa InOut.
- Custom API exclusion tạo `HashSet<string>` phân biệt hoa/thường, trong khi các bước distinct khác dùng OrdinalIgnoreCase.
- List không có giới hạn/paging; test global trả hàng trăm dòng, đi ngược mục tiêu tiết kiệm token.
- Test-call ghi sai tiêu đề `# 11. get_messages` thay vì 15; cấu trúc H1 cũng không đúng mẫu chuẩn.

## Điểm cần chú ý

- Parser chuỗi thủ công vẫn là best-effort và `FindElementStart` không giới hạn dấu `:` trong đúng tag name.

## Tối ưu

- Sửa InOut, comparer, thêm `max_records`/paging hoặc summary-first mode; sửa số và bố cục test-call.

## Kết luận — NEED UPDATE

Các happy path chính đúng, nhưng còn lỗi direction và output quá lớn.

# 16. get_plugin_trace_logs

## Điểm đúng

- Một main try-catch, mapping dựa trên probe được ghi rõ, list/detail content ngắn và DTO null-aware.
- Filters thời gian/entity/mode/correlation hoạt động qua test thật.

## Điểm sai

- Description không có cấu trúc `WHEN TO USE`/`RELATED TOOLS`, đồng thời lặp parameter schema.
- Detail dùng `Retrieve`; GUID hợp lệ nhưng không tồn tại sẽ bị báo unexpected exception thay vì expected not-found `Error`.
- Test-call thiếu case valid GUID không tồn tại, thiếu phần AI tổng hợp cho các validation cases và không theo 4 H1.

## Điểm cần chú ý

- Detail `ColumnSet(true)` kéo toàn bộ record; chỉ nên lấy các cột DTO thực sự dùng.

## Tối ưu

- Dùng FetchXML/top 1 hoặc cơ chế not-found không cần helper catch; chọn cột cụ thể; chuẩn hóa description/test-call.

## Kết luận — NEED UPDATE

List mode tốt nhưng detail error semantics và documentation chưa đạt.

# 17. get_plugins

## Điểm đúng

- Một main try-catch, ba mode hữu ích, entity/display-name resolution, step/image/config DTO rõ.
- Filters stage/mode/message/type và disambiguation assembly có test thật khá đầy đủ.

## Điểm sai

- `max_records` chỉ giới hạn steps; default assembly list, disambiguation, types và packages đều không giới hạn. Contract `1-500` vì vậy không đúng và có thể tạo output lớn.
- Khi `message_name` không resolve được, helper trả list rỗng và tool báo success 0 thay vì validation/not-found có hint.
- Description lặp nhiều parameter và thiếu bố cục gọn theo rule 7; test-call không theo 4 H1 và các error cases cuối thiếu AI synthesis.

## Điểm cần chú ý

- `include_config` có thể trả secure config. Phải giữ default false và tránh echo trong content/log/docs.

## Tối ưu

- Áp limit/paging nhất quán, phân biệt invalid message với legitimate zero steps, tách mode summary/detail rõ trong totalCount.

## Kết luận — NEED UPDATE

Chức năng phong phú nhưng limit và error semantics chưa đúng contract.

# 18. get_solution_components

## Điểm đúng

- Resolution solution/ambiguity, structured candidates, component summary và active-layer modes hữu ích.
- Content ngắn, output có data thật và active-layer scenarios.

## Điểm sai

- Class có nhiều `try-catch` trong helpers (`LoadComponents`, nhiều nhánh `BuildNameMap`, `CheckActiveLayers`, kể cả catch từng record/batch), vi phạm trực tiếp rule “toàn bộ class chỉ một try-catch ở main”. Các catch rỗng có thể biến lỗi metadata thành `(unresolved)` hoặc false mà client không biết.
- Component type map hard-code có nguy cơ stale, trái tinh thần không đoán metadata; chưa có fallback label/metadata provenance đủ rõ.
- Test-call không có bốn H1 Input/Output/AI synthesis; ambiguity output còn ghi “rút gọn”, không phải raw result đầy đủ.

## Điểm cần chú ý

- Nếu cố ý best-effort, structured content phải có warnings/partialResults; không được silent catch.

## Tối ưu

- Bỏ helper catches theo rule 2, hoặc thiết kế explicit partial-result contract được user chấp thuận; probe component definitions thay vì mặc định map luôn đúng.

## Kết luận — FAILED

Vi phạm rule exception cốt lõi ở nhiều vị trí và có thể báo success với dữ liệu thiếu âm thầm.

# 19. get_system_jobs

## Điểm đúng

- List/detail rõ, filters/summary hữu ích, valid GUID not-found được trả `Error`, concise content và test thật tốt.
- Mapper ghi lại metadata types đã probe; DTO phần lớn null-aware.

## Điểm sai

- `ResolveEntityTypeCode` có helper `try-catch` nuốt lỗi và trả null, vi phạm rule một try-catch và làm network/permission fault bị đổi sai thành “Entity not found”.
- Time filter luôn dùng `startedon >= ...`; job Waiting chưa start có thể có `startedon` null và bị loại khỏi chính status `waiting`.
- Description nói detail có stack trace nhưng output contract chỉ có `message`/`friendlyMessage`; lời hứa này cần prove hoặc sửa.
- Test-call không theo 4 section H1.

## Điểm cần chú ý

- Cần phân biệt metadata not-found với metadata request failure; không quy cả hai thành validation error.

## Tối ưu

- Để metadata exception bubble; dùng `createdon` thích hợp cho waiting/all hoặc probe quy tắc thời gian theo status.

## Kết luận — NEED UPDATE

Core paths tốt, nhưng helper catch làm sai error semantics và waiting query có lỗ hổng.

# 20. get_workflows

## Điểm đúng

- Một main try-catch, list/detail, entity/field resolution, filters và redirect test đã được thực hiện.
- DTO null-aware phần lớn, content ngắn, validation errors rõ.

## Điểm sai

- `execute_webapi` redirect và test-call hứa “detail mode with XAML”, tool description nói inspect workflow steps, nhưng detail không retrieve/return `xaml` hay parsed steps. Đây là contract sai giữa hai tools.
- Fallback scope gọi `MapScope(modeValue)` thay vì scope value; khi FormattedValues thiếu, realtime có thể bị gán scope `User`, background thành null.
- Trigger field dùng substring `%field%` trên comma-separated list; có thể match nhầm logical name dài hơn.
- Test-call không theo 4 section H1 và không phát hiện lời hứa XAML sai.

## Điểm cần chú ý

- Không thêm raw XAML mặc định nếu làm output quá lớn; detail có thể trả parsed steps + optional raw mode.

## Tối ưu

- Đồng bộ redirect/description/DTO; sửa scope mapper; filter trigger theo token chính xác và thêm regression examples.

## Kết luận — FAILED

Tool và redirect công khai một capability XAML không tồn tại, kèm hai lỗi mapping/filter có thể trả sai dữ liệu.

# Tổng kết phase 2

## Điểm đúng

- Phạm vi đúng của review là toàn bộ 16 READONLY tools đã refactor qua phase 1 và phase 2: `2, 4, 7-20`, không chỉ nhóm được ghi `(phase 2)`.
- Nhiều tool đã tiến bộ rõ về structured content, display-name resolution và test thật; đặc biệt audit event shape, metadata detail và các list/detail modes.
- Không review unit tests và không đọc/dùng `Program.cs`, đúng phạm vi task.

## Điểm sai

- Không có tool nào đạt toàn bộ checklist `refactor2.md`: lỗi phổ biến là description sai template, helper catch, post-filter sau `top`, raw output bị rút gọn, và contract/source/test-call không đồng bộ.
- Kết quả: 0 PASSED, 10 NEED UPDATE, 6 FAILED (`parse_record_url`, `search_records`, `whoami`, `get_flows`, `get_solution_components`, `get_workflows`).

## Điểm cần chú ý

- Review này là static review cộng đối chiếu artifacts test-call đã có; không chạy unit test, build, release, MCP call hay Program probe mới. Vì vậy mọi mismatch giữa source và test-call được đánh dấu cần regenerate từ build hiện tại.

## Tối ưu

- Sửa sáu FAILED trước, sau đó xử lý mười NEED UPDATE theo batch: exception semantics, description, DTO null-aware, filter/limit và test-call evidence.

## Kết luận — PHASE 2 NEED UPDATE

Chưa nên coi danh sách phase 2 trong `refactor2.md` là đã approved hoàn toàn.
