# Review phase 2 — full re-review sau batch sửa

## Phạm vi và phương pháp

Review lại source hiện tại của toàn bộ 16 READONLY tools `2, 4, 7-20`, DTO/helper trực tiếp, redirect liên quan trong `ExecuteWebApiTool`, và các artifact `DynamicsCrm.DevKit.Docs/testcall/{N}.{tool}.md`.

Theo yêu cầu của task này, review chỉ là static review. Không chạy build, không reinstall CLI, không restart connector, không gọi MCP và không dùng `Program.cs`. Vì vậy kết luận `PASSED` vẫn yêu cầu test-call khớp source/build hiện tại; artifact stale hoặc có output “rút gọn” không đủ để approve.

Trạng thái dùng trong tài liệu:

- `FAILED`: còn lỗi correctness, security hoặc public contract nghiêm trọng.
- `NEED UPDATE`: còn lỗi code hoặc output semantics cần sửa.
- `NEED TEST-CALL UPDATE`: code review hiện không thấy blocker đã biết, nhưng evidence chưa khớp source/rule 8.
- `NEED SECURITY + TEST-CALL UPDATE`: feature nhạy cảm cần quyết định policy rõ và regenerate evidence an toàn.
- `PASSED`: code và evidence đều đạt. Review này chưa có tool nào đạt trạng thái này.

# 2. execute_fetchxml

## Đã sửa đúng

- Description đã theo `WHEN TO USE`/`RELATED TOOLS`; Content một dòng và dùng đúng `Success`/`Error`/`ThrowException`.
- Đã reject `top`, `count`, `page`, `paging-cookie` ở opening `<fetch>` thay vì âm thầm ghi đè.
- DTO đã null-aware hơn và không còn echo input FetchXML vào structured output.

## Còn lại

- Validation XML chỉ kiểm tra chuỗi bắt đầu `<fetch` và kết thúc `</fetch>`. XML sai cấu trúc ở giữa vẫn đi vào `XDocument.Parse` trong `FetchXmlPagingHelper` và trở thành unexpected exception thay vì validation `Error`.
- Test-call vẫn chứa description cũ, chưa test các paging attributes mới bị cấm hoặc malformed XML, và có structured output ghi “rút gọn”.

## Kết luận — NEED UPDATE

Core paging đã tốt hơn, nhưng malformed FetchXML và evidence stale chưa đạt checklist.

# 4. get_tables

## Đã sửa đúng

- List mode đã có `max_records`; label rỗng được normalize về null.
- Contract `formulaDefinition` đã được document rõ là source reference `entity:attribute` để `upsert_column` resolve server-side, không còn giả vờ đây là raw formula.
- Description và DTO hiện tại nhất quán hơn với compact/standard/full.

## Còn lại

- List mode `Take(maxRecords)` nhưng không trả `hasMore`, tổng số match hoặc warning khi bị cắt; câu `[Success] N entities returned` có thể bị hiểu là danh sách đầy đủ.
- Test-call được tạo trước parameter `max_records` và trước khi rút gọn parameter description; artifact không khớp source hiện tại.

## Kết luận — NEED UPDATE

Cần làm truncation explicit và regenerate test-call từ source hiện tại.

# 7. parse_record_url

## Đã sửa đúng

- Content đã thành một dòng `[Success]`; validation không còn tạo `Error: Error:`.
- Description đã theo template; helper không catch lỗi metadata.

## Còn lại

- Regex maker/admin dùng `[0-9a-fA-F-]+` và không `Guid.TryParse` environment/flow/run IDs, nên chuỗi malformed vẫn có thể được trả như identifier hợp lệ.
- Web API unresolved vẫn đặt entity-set name vào `entityName`; DTO chưa có `entitySetName` để phân biệt semantic.
- Test-call chỉ có một happy path và một error path, đồng thời description trong file vẫn là bản cũ. Chưa có Web API, maker/admin, raw GUID, no-GUID và malformed maker-ID cases.

## Kết luận — NEED UPDATE

Lỗi Content cũ đã đóng, nhưng parser contract và coverage chưa đủ.

# 8. search_records

## Đã sửa đúng

- Đã bỏ compatibility formatter có silent catch; class chỉ còn main catch.
- HTTP failure và payload `Error` được trả qua `Error(...)` với `IsError=true`; không còn `Success("[Error] ...")`.
- Entity display/logical name được resolve trước request; object type code lấy đúng từ `@search.objecttypecode` khi có.

## Còn lại

- Test-call vẫn dùng description cũ và có nhiều structured output “rút gọn”, nên không chứng minh source hiện tại.
- Chưa có regression evidence cho HTTP-success/payload-error và malformed status/statistics payload. Comment gọi statistics “optional” nhưng implementation vẫn để mọi lỗi endpoint này làm toàn action thất bại; cần document hoặc chốt semantics rõ.

## Kết luận — NEED TEST-CALL UPDATE

Static code review không còn blocker cũ, nhưng chưa đủ evidence để PASSED.

# 9. whoami

## Đã sửa đúng

- Content có `[Success]`, DTO strings đã null-aware hơn, runtime version/build/process/SHA vẫn được trả đầy đủ.
- Khi caller chủ động `include_token=true`, structured output có warning nhạy cảm.

## Còn lại

- `Roles` và `Warnings` được khởi tạo bằng list rỗng nên vẫn serialize `[]`, trái rule list rỗng nên null khi không mang nghĩa riêng.
- Comment nói token getter lỗi thì để null, nhưng không có code thực hiện fallback; exception hiện bubble qua main catch.
- Bearer token vẫn được trả nguyên văn qua structured output. Theo rule 28, feature này cần safety decision riêng; test-call tuyệt đối không được ghi token.
- Test-call description vẫn là bản cũ, chỉ có default happy path và còn hướng dẫn gọi `include_token=true` mà chưa ghi rõ cơ chế redaction/evidence an toàn.

## Kết luận — NEED SECURITY + TEST-CALL UPDATE

Lỗi prefix/source mismatch cũ đã sửa, nhưng token contract chưa đủ để approve.

# 10. get_audit_history

## Đã sửa đúng

- Silent metadata catch đã bỏ; metadata fault đi qua main `ThrowException` thay vì báo success partial.
- Description đã theo template; formatted values/display labels và detail DTO vẫn giữ đúng event + `changes[]` shape.
- Đã bỏ `top=max_records` trước client-side user filtering.

## Còn lại

- Khi có `user_filter`, query không có `top` nhưng chỉ gọi một lần `RetrieveMultiple`; Dataverse vẫn chỉ trả một page. Match ở page sau vẫn có thể bị bỏ và trả false zero/count thấp.
- Email được resolve về full name rồi client-filter theo tên; không tận dụng user ID để server-filter chính xác và tránh trùng tên.
- Test-call còn structured output “rút gọn” và chưa chứng minh paging/filter regression.

## Kết luận — NEED UPDATE

Đã đóng silent catch nhưng chưa đóng triệt để post-filter/paging bug.

# 11. get_business_process_flows

## Đã sửa đúng

- Đã bỏ sort sai theo `stagecategory`; category giờ chỉ còn là label.
- Description/Content/DTO được chuẩn hóa; valid GUID not-found dùng business `Error`.

## Còn lại

- `GetStages()` không có nguồn order thật và FetchXML cũng không có `<order>`; array stages hiện là unordered. Nếu consumer cần sequence, tool vẫn chưa cung cấp sequence đã prove.
- `entity_name` filter lấy trước tối đa 250 BPF rồi mới client-filter; match ngoài 250 có thể bị bỏ. Đây vẫn là biến thể fetch-before-filter.
- Test-call chỉ có `# Test calls`, thiếu bốn H1 chuẩn và thiếu 2-3 validation/error paths.

## Kết luận — NEED UPDATE

Sort sai đã bỏ nhưng stage order, filter completeness và evidence chưa đạt.

# 12. get_business_rules

## Đã sửa đúng

- `entity_name` contract đã khớp implementation: bắt buộc và ownership-validated ở detail mode.
- Valid GUID không tồn tại dùng query/top 1 và trả business `Error`.
- `scope`/`status` null-aware; parser công khai `xamlParseStatus="best-effort parsed"` thay vì khẳng định parse đầy đủ.

## Còn lại

- Test-call không theo bốn H1 chuẩn. Nó là artifact của description/parameter wording cũ và chưa có case valid GUID không tồn tại.
- Regex parser vẫn ghép field/operator/constant theo index; `best-effort` đã làm semantics an toàn hơn, nhưng consumer không được xem `conditions` là lossless representation.

## Kết luận — NEED TEST-CALL UPDATE

Các blocker code cũ đã đóng; cần chuẩn hóa và regenerate evidence.

# 13. get_custom_apis

## Đã sửa đúng

- `solutionId` giờ chứa GUID thật; `solutionName` là property riêng.
- Description đã rút gọn theo template; list filters chạy server-side trước `top`.
- DTO request/response/plugin binding vẫn null-aware và có ambiguity handling.

## Còn lại

- Test-call chưa theo bốn H1 và vẫn phản ánh output cũ nơi `solutionId` chứa friendly name; chưa chứng minh migration sang `solutionName`.

## Kết luận — NEED TEST-CALL UPDATE

Static code review đạt, nhưng artifact contract đang stale.

# 14. get_flows

## Đã sửa đúng

- Đã xóa lời hứa fuzzy auto-detail/disambiguation không có implementation.
- Validation nằm trong main catch; owner filtering không còn bị `top=max_records` cắt trước.
- Detail/runs valid GUID not-found dùng `Error`; Content và DTO đã chuẩn hóa.

## Còn lại

- Owner-filter path vẫn chỉ gọi một page `RetrieveMultiple` rồi client-filter; match ở page sau có thể bị bỏ.
- Test-call không theo bốn H1 và không test `name_filter`/`owner_filter`, tức chưa có regression evidence cho lỗi chính trước đây.

## Kết luận — NEED UPDATE

Public description đã sửa, nhưng paging của owner filter chưa complete.

# 15. get_messages

## Đã sửa đúng

- `InOutArgument` giờ xuất hiện ở cả inputs và outputs.
- Custom API exclusion dùng comparer case-insensitive.
- List mode có `max_records` cho từng category; description đã theo template.

## Còn lại

- File `15.get_messages.md` vẫn có title `# 11. get_messages`, description chưa có `max_records`, nên không khớp source hiện tại.
- Test-call chưa có regression case riêng cho `InOutArgument` và case-insensitive Custom API exclusion.

## Kết luận — NEED TEST-CALL UPDATE

Các lỗi code cũ đã đóng; cần sửa numbering và regenerate evidence.

# 16. get_plugin_trace_logs

## Đã sửa đúng

- Detail không còn `Retrieve`/`ColumnSet(true)`; dùng query/top 1 với các cột DTO cần và valid GUID not-found trả `Error`.
- Description theo template; Content/DTO vẫn gọn và null-aware.

## Còn lại

- Test-call không theo bốn H1 và vẫn thiếu valid GUID không tồn tại, chính là regression case của thay đổi này.

## Kết luận — NEED TEST-CALL UPDATE

Static code review đạt, evidence chưa đủ.

# 17. get_plugins

## Đã sửa đúng

- `max_records` đã áp cho assemblies, types, steps và packages.
- `message_name` không tồn tại trả validation `Error` thay vì success zero.
- Description theo template; helper catch đã được loại bỏ.

## Còn lại

- `include_config=true` trả cả unsecure và secure config nguyên văn. Parameter đã ghi security-sensitive và default false, nhưng output không có warning/redaction metadata; cần safety decision rõ trước khi approve.
- Test-call không theo bốn H1, có nhiều structured output “rút gọn”, và không có safe evidence cho config behavior.

## Kết luận — NEED SECURITY + TEST-CALL UPDATE

Limit/error semantics đã sửa, nhưng sensitive-output contract và evidence chưa đóng.

# 18. get_solution_components

## Đã sửa đúng

- Các helper catch/silent catch đã bỏ; batch fault và metadata fault không còn bị đổi thành success partial.
- Component type label ưu tiên `FormattedValues`; unknown type có fallback rõ.
- Ambiguity vẫn trả structured candidates và Content một dòng.

## Đã sửa (phase 3)

- `LoadComponents()` giờ dùng paging loop (`PageInfo` + `PagingCookie`, page size 5000) cho đến khi `MoreRecords=false`; solution trên 5.000 direct components không còn bị trả partial.
- Name resolution cho type 381 (`environmentvariablevalue`) giờ dùng method riêng `ResolveEnvironmentVariableValueNames`: query `environmentvariablevalue` join `environmentvariabledefinition` qua `environmentvariabledefinitionid`, lấy `schemaname`/`displayname` từ definition. Không còn query hay trả `value` field — loại bỏ hoàn toàn nguy cơ leak secret.

## Còn lại

- Component maps vẫn hard-code; fallback label đã an toàn hơn nhưng provenance/version chưa explicit.
- Test-call chỉ có hai H1 và nhiều đoạn “rút gọn”, không đủ chứng minh full output hoặc active-layer failure semantics.

## Kết luận — NEED TEST-CALL UPDATE

Partial paging và leak secret đã đóng; cần regenerate evidence từ source hiện tại.

# 19. get_system_jobs

## Đã sửa đúng

- Metadata helper catch đã bỏ; entity resolution fault không còn bị giả thành not-found.
- Status `waiting` dùng `createdon` thay vì `startedon`; DTO/Content/null semantics được cải thiện.

## Đã sửa (phase 3)

- Description đã đổi “detail for stack trace” thành “detail for message + friendlyMessage”; redirect `asyncoperations` trong `ExecuteWebApiTool` cũng đã đổi “error/stack trace” thành “message + friendlyMessage”. Contract giờ khớp DTO.
- `status='all'` giờ cũng dùng `createdon` làm time attribute (cùng logic với `waiting`), nên waiting job có `startedon=null` không còn bị loại khi filter `all`.
- Order attribute giờ động: `waiting`/`all` order theo `createdon`, các status khác order theo `startedon`.

## Còn lại

- Test-call description cũng vẫn hứa stack trace và không theo bốn H1.

## Kết luận — NEED TEST-CALL UPDATE

Public contract và time semantics đã sửa; cần regenerate evidence từ source hiện tại.

# 20. get_workflows

## Đã sửa đúng

- Scope fallback đã dùng `scopeValue`, không còn dùng nhầm `modeValue`.
- Trigger field được split CSV và exact-match, tránh substring false positive.
- Main tool description và redirect `workflows` đã bỏ lời hứa XAML; detail not-found dùng business `Error`.

## Đã sửa (phase 3)

- Redirect alias `processes` trong `ExecuteWebApiTool` đã đổi “detail with trigger fields + XAML” thành “detail with trigger fields and execution metadata”. Contract giữa dedicated tool và raw redirect giờ đồng bộ.
- Khi có `trigger_field`, query giờ luôn dùng `top=maxRecords` và thêm server-side `like` filter trên `triggeronupdateattributelist`. Không còn fetch-before-filter client-side post-filter; match ở page sau không còn bị bỏ.

## Còn lại

- Test-call không theo bốn H1 và chính redirect case đang chứng minh output từ source/build cũ.

## Kết luận — NEED TEST-CALL UPDATE

Redirect XAML stale và paging false-zero đã đóng; cần regenerate evidence từ source hiện tại.

# Tổng kết full re-review

## Kết quả

- `PASSED`: 0.
- `FAILED`: 0.
- `NEED UPDATE`: 6 — `execute_fetchxml`, `get_tables`, `parse_record_url`, `get_audit_history`, `get_business_process_flows`, `get_flows`.
- `NEED TEST-CALL UPDATE`: 8 — `search_records`, `get_business_rules`, `get_custom_apis`, `get_messages`, `get_plugin_trace_logs`, `get_solution_components`, `get_system_jobs`, `get_workflows`.
- `NEED SECURITY + TEST-CALL UPDATE`: 2 — `whoami`, `get_plugins`.

## So với review trước

- Đã đóng đúng phần lớn lỗi exception/description/DTO: helper catches của audit/system jobs/solution components đã bỏ; payload error của search đã sửa; Custom API solution ID, Business Rule not-found, Plugin Trace not-found, Message InOut và plugin limits đã sửa.
- Phase 3 đã đóng thêm 3 blocker `FAILED`: `get_solution_components` (paging + leak secret), `get_system_jobs` (stack-trace promise + `status=all` time semantics), `get_workflows` (redirect XAML stale + paging false-zero).
- Trong mười tool từng `NEED UPDATE`, bốn tool hiện chỉ còn thiếu evidence chuẩn (`get_business_rules`, `get_custom_apis`, `get_messages`, `get_plugin_trace_logs`); các tool khác vẫn còn code/contract/security issue.

## Ưu tiên tiếp theo

1. Đóng các post-filter paging paths: audit user, flow owner, BPF entity/stages.
2. Chốt policy cho bearer token và secure plugin config.
3. Regenerate toàn bộ test-call từ đúng build: đúng description/parameters, năm H1 gồm title + bốn section chuẩn, raw output đầy đủ, không “rút gọn”, không token/secret.

## Kết luận — PHASE 3 NEED TEST-CALL UPDATE

Batch sửa phase 3 đã đóng toàn bộ 3 blocker `FAILED`. Source code của 16 read tools không còn blocker correctness/security đã biết, nhưng evidence chưa đủ để `PASSED`.
