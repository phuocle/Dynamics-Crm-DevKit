# Review dry-run MCP mutating tools — vòng audit 3

Tài liệu này là audit độc lập trên snapshot `7001f4358` của `DynamicsCrm.DevKit.Cli/Mcp/**`, ngày 2026-08-05. Không dùng các dòng “checkpoint đã hoàn thành” trong `review-dry-run2.md` làm bằng chứng; kết luận chỉ dựa trên source, MCP contract mà Codex App đang thấy, build và test chạy lại ở snapshot trên.

Phạm vi gồm đúng 18 tool có annotation `ReadOnly = false`. Thứ tự vẫn giữ quy ước của vòng 2: `1` là ưu tiên thấp nhất, `18` là cao nhất; khi triển khai phải làm mục `0` trước, sau đó đi từ `18` xuống `1`.

## Contract được dùng để kết luận

- Cấu hình dry-run do con người truyền lúc khởi động MCP, không phải input của AI.
- Trước invocation, AI không được thấy token `dry_run`, `dry-run`, `--dry-run`, `dryrun` hoặc `dry run` trong tool name, parameter, description, input/output schema, server instruction hay MCP resource.
- Sau invocation bị chặn, ngoại lệ duy nhất được chủ dự án yêu cầu là text prefix `[DryRun]` do `McpToolResults.DryRun(...)` tạo. Structured payload phải dùng DTO thật và trạng thái domain-neutral như `not_executed`; không được có field/value tiết lộ mode.
- Action-level `_options.DryRun` là lớp preview/UX. Mọi SDK/Web API mutation còn phải fail-closed ở mutation boundary qua `McpExecutionContext`, `DataverseMutationExecutor` hoặc helper dùng chung có assertion tương đương.
- Mọi constructor mutating tool phải nhận non-null `McpDryRunOptions` và `McpExecutionContext` từ DI. AI không được truyền hai dependency này.
- “Đang không thấy đường bypass” không đồng nghĩa với “đã fail-closed”. Một helper trực tiếp gọi SDK write mà không tự assert vẫn là vi phạm, dù caller hiện tại có guard.

## Kết luận tổng thể

| Hạng mục | Kết luận vòng 3 |
|---|---|
| Inventory | Đúng 18 tool `ReadOnly = false`; cả 18 constructor đều nhận và fail-fast với `McpExecutionContext` và `McpDryRunOptions`. |
| Contract trước invocation | Scan 18 descriptor mà Codex App đang thấy không tìm thấy token bị cấm trong tên, mô tả hoặc parameter. Source `Mcp/Resources/**` cũng không có token bị cấm. |
| Result contract | **Chưa đạt:** `manage_ribbon` còn hai preview sớm trả `Status = "dry_run"` tại `ManageRibbonTool.cs:144` và `:173`. |
| Mutation boundary | **Chưa đạt:** `manage_environment_variable`, `manage_view`, `manage_chart` và `manage_ribbon` còn SDK mutation trực tiếp không có assertion ngay tại boundary. |
| Web API boundary | `manage_deleted_records`, `execute_webapi` và `upsert_column` có assertion ngay trước write nên fail-closed trong call graph hiện tại, nhưng chưa có `DataverseWebApiMutationExecutor` dùng chung như thiết kế mục 0. |
| Build | `dotnet build DynamicsCrm.DevKit.Cli/DynamicsCrm.DevKit.Cli.csproj --no-incremental` pass, 0 warning, 0 error. |
| Focused dry-run tests | 29/29 pass cho `DryRunGatewayContractTests`, `CreateRecordsDryRunTests`, `UpsertColumnCreateDryRunTests`. Các test này không bao phủ zero-write matrix đủ 18 tool. |
| Toàn bộ MCP unit tests | 1.184/1.293 pass, **109 fail**. Có test reflection cũ, `ExecuteWebApiToolTests`, search/formatting và các test khác không còn khớp source. Không được ghi “test suite pass”. |
| Runtime SHA/live call | Chưa chứng minh cho HEAD này: `whoami` trả `Transport closed`. Descriptor cache có thể scan contract nhưng không chứng minh process/binary SHA. |

## Bốn blocker phải sửa trước khi tuyên bố hoàn thành

1. `manage_ribbon`: bỏ hai structured value `dry_run`; route `ImportSolutionRequest` và `PublishAllXmlAsyncRequest` qua gateway/helper fail-closed.
2. `manage_environment_variable`: route sáu Create/Update/Delete definition/value trực tiếp qua `DataverseMutationExecutor`.
3. `manage_view`: route Create và bốn Update trực tiếp qua executor; giữ Web API GET là read-only.
4. `manage_chart`: route `AddSolutionComponentRequest` trong `AddToSolutionIfRequested` qua `SolutionComponentCreateHelper` hoặc `DataverseMutationExecutor.Execute`; không swallow lỗi “mutation blocked”.

# 0 — Shared helpers và test infrastructure — phải làm/reuse trước tiên

> **Chỉ dẫn bắt buộc cho AI tiếp theo:** số 0 là nền tảng quan trọng nhất, không phải mức ưu tiên thấp. Không tạo guard/helper riêng lẻ nếu mục 0 đã có chức năng tương đương. Sửa mục 18 → 1 bằng cách reuse hoặc mở rộng helper tại đây.

**Đã có và dùng được:** `McpExecutionContext.AssertMutationAllowed`, `DataverseMutationExecutor` cho SDK CRUD/Associate/Disassociate/mutating request, `PublishHelper`, `SolutionComponentCreateHelper`, và `McpToolResults.DryRun` tự thêm đúng một prefix `[DryRun]`. `ExecuteReadOnly` dùng allow-list type và từ chối request ngoài danh sách. Cả 18 tool đã nhận context/options non-null.

**Chưa hoàn thành:** chưa có `DataverseWebApiMutationExecutor`; chưa có helper import solution; publish-all async của ribbon chưa đi qua `PublishHelper`; solution component mutation trong ribbon/chart còn gọi SDK trực tiếp; chưa có static rule ngăn direct write; chưa có safety matrix tự động bắt buộc đủ 18 tool.

**Việc phải làm:**

1. Thêm wrapper dùng chung cho Web API POST/PUT/PATCH/DELETE, nhận `McpExecutionContext`, assert ngay trước transport và hỗ trợ cả relative/absolute URL.
2. Mở rộng `PublishHelper` cho `PublishAllXmlAsyncRequest`; thêm `SolutionImportHelper` cho `ImportSolutionRequest`.
3. Chuẩn hóa Add/Remove solution component và AddAppComponents qua một helper/executor; assertion phải nằm bên trong helper.
4. Thêm source/architecture test fail nếu mutating tool/helper gọi trực tiếp `Create`, `Update`, `Delete`, `Associate`, `Disassociate`, mutating `Execute`, hoặc write `ExecuteWebRequest` mà không có ngoại lệ read-only đã review.
5. Thêm inventory test assert đúng tập tool `ReadOnly = false`; tool mới phải được đăng ký vào mutation test matrix, nếu không test fail.
6. Dùng fake `IOrganizationService`/transport hoặc adapter spy. Với blocked context, assert zero call cho từng mutation primitive và từng action của cả 18 tool. Test bằng `ServiceClient = null` chỉ chứng minh control flow cục bộ, không thay thế spy.
7. Serialize `initialize`, `tools/list`, `resources/list` từ server thực cho các category và scan token cấm; validate structured result với `OutputSchemaType`.

**Definition of done mục 0:** các helper tự fail-closed khi gọi trực tiếp; không còn mutation SDK/HTTP ngoài gateway được allow-list; inventory/matrix tự fail khi thêm tool/action mới; toàn bộ focused contract tests xanh.

# 1 — Tool `create_records` — PASS có test gap

**Source hiện tại:** `CreateAsync` đi qua `DataverseMutationExecutor.CreateAsync`; constructor/context fail-fast; preview dùng `McpToolResults.DryRun` với `BatchCreateResult`; dry-run không xóa input file.

**Không thấy vi phạm hiện tại:** không có direct Dataverse write trong tool. Contract descriptor không lộ mode.

**Còn thiếu:** `CreateRecordsDryRunTests` dùng blocked context và null service để chứng minh gateway ném trước SDK, nhưng chưa có spy cho inline JSON, JSON file và CSV để đếm chính xác zero `CreateAsync`. Reflection test `CreateRecordsInternalsCoverageTests.ResolveRecordsInput_InlineJsonAndJsonFile_ReturnContent` đang fail vì parameter count mismatch.

**AI cần làm:** cập nhật reflection test theo signature hiện tại; thêm matrix ba input source, giới hạn 5.000/5.001, partial failure normal mode và xác nhận file chỉ bị xóa theo contract normal mode.

# 2 — Tool `manage_record` — PASS có test gap

**Source hiện tại:** năm primitive create/update/delete/associate/disassociate đều qua `DataverseMutationExecutor`; năm preview đều dùng typed `CrudResult`; context/options fail-fast.

**Không thấy vi phạm boundary:** commit `7001f4358` đã route các SDK write qua gateway. Không còn direct CRUD call trong tool.

**Còn thiếu:** `CrudToolValidationTests` chủ yếu kiểm tra validation/preview với null service; chưa chứng minh zero call cho đủ năm primitives bằng spy.

**AI cần làm:** thêm blocked-context test cho đủ năm action, assert zero SDK calls; giữ validation GUID/entity/relationship/field trước preview ở mức có thể xác định bằng read-only lookup.

# 3 — Tool `publish_customizations` — PASS có test gap

**Source hiện tại:** publish-all async và targeted publish đã đi qua mutation executor/helper có context; preview dùng `PublishResult`; constructor fail-fast.

**Không thấy direct mutating Execute:** hai gateway calls bao phủ hai loại publish.

**Còn thiếu:** chưa có spy test bao phủ all, entity, webresource, option set, sitemap và app module combinations; `PublishToolTests` không phải bằng chứng zero Execute cho toàn bộ matrix.

**AI cần làm:** test request type/XML plan chính xác và zero Execute khi blocked; direct-call test cho mọi overload publish helper.

# 4 — Tool `manage_deleted_records` — PASS về safety, PARTIAL về chuẩn hóa helper

**Source hiện tại:** SDK mutations trong turn on/off/restore đã qua `DataverseMutationExecutor`. Web API restore POST còn gọi `_serviceClient.ExecuteWebRequest` trực tiếp tại `ManageDeletedRecordsTool.cs:600`, nhưng có `_context.AssertMutationAllowed(...)` ngay dòng 599.

**Kết luận:** fail-closed trong call graph hiện tại; không phải lỗ zero-mutation đã biết. Tuy nhiên transport write chưa reuse wrapper mục 0 nên dễ regression và không có spy chung.

**AI cần làm:** thay cặp assertion/direct transport bằng `DataverseWebApiMutationExecutor`; test batch restore, turn on/off, fallback paths, partial failures và read-only list/detail/status.

# 5 — Tool `manage_role` — PASS có test gap

**Source hiện tại:** create/update/delete/associate/disassociate và request add privileges đều qua `DataverseMutationExecutor` (7 gateway call sites). Sáu action preview dùng typed `ManageRoleResult`.

**Không thấy direct role mutation:** commit `7001f4358` đã migrate các write chính và copy-role multi-step.

**Còn thiếu:** nhiều validation tests tạo tool với null service/blocked context; chưa có fake service chứng minh copy role không Create role mới và không AddPrivileges khi blocked.

**AI cần làm:** spy đủ assign, unassign, create, update, delete, copy; đặc biệt assert zero partial write trong copy và giữ normal-mode partial failure semantics.

# 6 — Tool `manage_environment_variable` — FAIL boundary contract

**Vi phạm xác nhận từ source:** sáu write bỏ qua gateway:

- Create definition tại `ManageEnvironmentVariableTool.cs:332`.
- Update definition tại `:423`.
- Delete definition tại `:534`.
- Update current value tại `:643`.
- Create current value tại `:652`.
- Delete current value tại `:674`.

Action-level preview hiện có vẻ trả trước các call này và add-to-solution đã nhận context, nên chưa chứng minh được một dry-run call thực tế đang ghi Dataverse. Dù vậy, helper `UpsertCurrentValue`/`DeleteCurrentValue` và definition writes không tự fail-closed; caller mới hoặc guard regression có thể bypass policy.

**Cách sửa bắt buộc:** route toàn bộ sáu call qua `DataverseMutationExecutor`; không chỉ thêm assertion ở handler. Helper current-value phải nhận/reuse `_context`. Giữ `SolutionComponentCreateHelper` cho add-to-solution.

**Test bắt buộc:** create definition + value, update definition-only, update value-only, clear, delete cascade, add-to-solution; blocked mode zero Create/Update/Delete/Execute. Thêm direct-helper regression tests.

# 7 — Tool `manage_chart` — PARTIAL, còn solution mutation bypass

**Đã đạt:** record Create/Update và set-default loop đi qua `DataverseMutationExecutor` (6 call sites); publish dùng helper có context; preview typed.

**Vi phạm còn lại:** `AddToSolutionIfRequested` tạo `AddSolutionComponentRequest` rồi gọi `_serviceClient.Execute(request)` trực tiếp tại `ManageChartTool.cs:864`. Helper còn `catch` mọi exception và trả `false`, nên nếu chỉ thêm assertion bên trong mà vẫn catch chung, lỗi policy cũng có thể bị nuốt.

**Cách sửa bắt buộc:** dùng `SolutionComponentCreateHelper.AddExistingComponent` hoặc `DataverseMutationExecutor.Execute`; không catch/convert `InvalidOperationException` do blocked context thành warning bình thường.

**Test bắt buộc:** create/update/rename/set_default/undo với solution name; blocked mode zero record Update/Create, zero AddSolutionComponent và zero publish. Direct-call helper phải fail trước service.

# 8 — Tool `manage_view` — FAIL boundary contract

**Vi phạm xác nhận từ source:** Create view trực tiếp tại `ManageViewTool.cs:302`; Update tại `:488`, `:594`, `:675`, `:846`. Các call này không qua executor và không assert ngay tại boundary.

`ExecuteWebRequest(HttpMethod.Get, ...)` tại `:1415` và metadata retrieve là read-only, không được chặn bởi dry-run.

Action-level preview hiện nằm trước write, nhưng không đủ điều kiện fail-closed của tài liệu.

**Cách sửa bắt buộc:** route Create và bốn Update qua `DataverseMutationExecutor`; giữ `PublishHelper`; ghi chú/allow-list Web API GET readback. Quyết định rõ local backup có được tạo trong blocked mode hay không, vì đây là side effect ngoài Dataverse.

**Test bắt buộc:** create/update/rename/set_default/undo zero Create/Update/Publish; read/validation GET vẫn chạy; validate FetchXML/LayoutXML trước preview khi không cần mutation.

# 9 — Tool `manage_form` — PASS có test gap

**Source hiện tại:** bốn action operations/update/rename/undo dùng 8 gateway calls cho Update và publish helper; constructor/context fail-fast; preview dùng `UpsertFormResult`.

**Không thấy direct Dataverse mutation:** commit `7001f4358` đã migrate các write chính. Backup file vẫn là side effect local, không phải Dataverse mutation.

**Còn thiếu:** test hiện tại thiên về XML operations/validation, chưa dùng mutation spy bao phủ bốn action và direct publish-helper regression.

**AI cần làm:** thêm zero Update/Publish matrix; giữ XML validation; xác lập và test policy local backup trong blocked mode.

# 10 — Tool `manage_webresource` — PASS có test gap

**Source hiện tại:** Create/Update/Delete qua executor; add-to-solution và publish qua helper có context; ba preview typed; constructor fail-fast.

**Không thấy direct mutating SDK call.** Descriptor không lộ mode.

**Còn thiếu:** tests chủ yếu dùng null service/validation; cần spy cho solution/publish branches và file/base64/type failures.

**AI cần làm:** test create/update/delete với `solution_name` và publish=true, blocked mode zero record/solution/publish mutation.

# 11 — Tool `manage_choice` — PASS có test gap

**Source hiện tại:** create/update option set và insert/update/delete option requests qua executor (6 call sites), publish qua helper, retrieve option sets vẫn read-only. Preview dùng `ManageChoiceResult`.

**Không thấy direct metadata mutation.** Contract result không có token mode.

**Còn thiếu:** chưa có mutation spy cho tổ hợp rename/description/add/update/delete/color/default options; tests hiện tại phần lớn validation/format.

**AI cần làm:** matrix create và mọi update combination, zero Execute/Publish; invalid JSON/collision/value/color vẫn Error thay vì preview sai.

# 12 — Tool `upsert_table` — PASS có test gap

**Source hiện tại:** CreateEntity/UpdateEntity qua executor; publish qua helper; metadata retrieve read-only; context/options fail-fast.

**Không thấy direct metadata write.** Hai preview typed cho create/update.

**Còn thiếu:** chưa có spy chứng minh zero Execute/Publish và no-op update không publish.

**AI cần làm:** test create, update, no-op, primary-name/settings validation và structured schema.

# 13 — Tool `upsert_relationship` — PASS có test gap

**Source hiện tại:** CreateOneToMany/CreateManyToMany/Update/Delete/AddTarget/RemoveTarget requests đều qua executor (6 call sites); publish helper có context; RetrieveRelationship/RetrieveEntity vẫn read-only.

**Không thấy direct mutating request.** Sáu preview dùng typed result.

**Còn thiếu:** nhiều tests dùng blocked context nhưng null service; chưa đếm zero write/publish bằng spy.

**AI cần làm:** test sáu action, polymorphic target, hierarchy/cascade constraints; assert read requests được phép để lập preview nhưng write/publish bằng zero.

# 14 — Tool `manage_app` — PASS có test gap

**Source hiện tại:** appmodule/sitemap Create/Update qua executor; `AddAppComponents` dùng `DataverseMutationExecutor.Execute` tại `ManageAppTool.cs:1209`; publish/add-to-solution dùng helper có context. `ValidateApp` tại `:1467` là request kiểm tra read/validation, không được phân loại mutation chỉ vì dùng `Execute`.

**Không thấy direct app mutation.** Bốn preview dùng typed result.

**Còn thiếu:** mutation spy cho create/update/update_navigation/undo, gồm multi-step create app + sitemap + components + solution + publish.

**AI cần làm:** assert zero partial mutation ở mọi step; giữ list/detail/validate và local backup semantics.

# 15 — Tool `manage_command` — PASS có test gap

**Source hiện tại:** 16 Create/Update/Delete appaction call sites qua executor; publish helper có context. Export/Retrieve ribbon/entity calls là read-only. Chín preview typed.

**Không thấy direct appaction mutation.** Mục 15 đã được migrate ở commit trước.

**Còn thiếu:** đủ 10 action mutating và nested flyout/split-item matrix chưa được chứng minh zero-write bằng spy; một số guard có thể trả preview trước deterministic validation sâu.

**AI cần làm:** zero record write/publish cho toàn action matrix; invalid required field/GUID/action vẫn Error trong blocked mode; direct nested helper không bypass.

# 16 — Tool `execute_webapi` — PASS về safety, PARTIAL về helper và test suite

**Source hiện tại:** mọi method khác GET gọi `_context.AssertMutationAllowed(...)` tại `ExecuteWebApiTool.cs:134`, ngay trước hai transport branches; relative URL write đi qua `_serviceClient.ExecuteWebRequest` tại `:148`. GET được phép.

**Kết luận:** source hiện tại fail-closed theo verb trước transport. AI không có parameter đổi policy. Tuy nhiên assertion bị viết tại tool thay vì wrapper transport dùng chung; HEAD/metadata absolute branch phải tiếp tục tuân cùng policy nếu được hỗ trợ.

**Test debt nghiêm trọng:** nhiều `ExecuteWebApiToolTests` đang fail vì kỳ vọng block/redirect/JSON cũ không khớp implementation. Không được xem checkpoint 16 là test hoàn thành.

**AI cần làm:** route transport qua `DataverseWebApiMutationExecutor`; quyết định GET/HEAD policy rõ; cập nhật test theo contract hiện hành rồi test POST/PUT/PATCH/DELETE zero network cho relative và absolute routes.

# 17 — Tool `upsert_column` — PASS về safety, PARTIAL về Web API helper

**Source hiện tại:** 11 metadata/relationship/option mutation calls qua executor; publish helper có context. Required-level fallback còn gọi Web API PUT trực tiếp tại `UpsertColumnTool.cs:2335`, nhưng assert context ngay dòng 2334.

**Kết luận:** không thấy write vượt policy trong call graph hiện tại; option-only publish regression cũ đã được chặn. Web API PUT vẫn chưa reuse wrapper mục 0.

**Còn thiếu:** 15 create types và toàn update combinations chưa có mutation spy end-to-end; focused create dry-run tests chỉ chứng minh preview result với null service.

**AI cần làm:** chuyển PUT sang Web API gateway; test metadata-only, required-level, option-only add/update/delete, statuscode và publish; mọi combination zero write/publish.

# 18 — Tool `manage_ribbon` — FAIL, ưu tiên cao nhất

**Vi phạm output contract:** hai early preview tại `ManageRibbonTool.cs:144` và `:173` trả `Status = "dry_run"`. Các preview sâu hơn đã dùng `Status = "not_executed"`, nên behavior không nhất quán. AI nhìn thấy structured value này sau invocation ngoài prefix `[DryRun]` được cho phép.

**Vi phạm mutation boundary:**

- `TryPublish` gọi `PublishAllXmlAsyncRequest` trực tiếp tại `ManageRibbonTool.cs:1593`, không context assertion/executor bên trong helper.
- `ImportRibbonSolution` gọi `ImportSolutionRequest` trực tiếp tại `:1610`, không context assertion/executor bên trong helper.
- `RibbonSolutionFetcher` có assertion trước reset solution và trước fetch path, nên lỗi mutation-before-preview nghiêm trọng của vòng 2 đã được giảm thiểu. Tuy nhiên Add/Remove component bên trong vẫn gọi SDK trực tiếp; nên route qua helper chung để từng boundary tự bảo vệ và có spy test.

Action guard hiện trả trước import/publish trong các call path đã đọc, nên chưa có bằng chứng một live dry-run call hiện đang import/publish. Nhưng hai helper nguy hiểm vẫn fail-open nếu caller/guard thay đổi; vì vậy mục 18 chưa đạt Definition of Done.

**Cách sửa bắt buộc:**

1. Đổi đúng hai early structured statuses thành `not_executed`; scan toàn source/model đảm bảo không còn token mode trong payload.
2. Mở rộng `PublishHelper` cho async publish-all và dùng từ `TryPublish`; không swallow exception policy trong catch chung.
3. Thêm `SolutionImportHelper` hoặc dùng executor trực tiếp trong helper import, nhận `_context` và assert ngay trước Execute.
4. Route Add/Remove solution component trong `RibbonSolutionFetcher` qua helper/executor; giữ `ReadRibbonWithoutMutation` tuyệt đối không thay solution.
5. Test blocked mode cho buttons/detail/update/operations/undo/backup; zero Add/Remove/Export-side preparation/Import/Publish và zero local backup nếu policy hiện tại yêu cầu vậy.

**Runtime verification sau khi sửa:** chạy workflow build/install CLI; restart connector; gọi `whoami`; so version/build/process start/assembly SHA với manifest `Published/<version>/`; chỉ khi match mới gọi live case 18. Live result phải có đúng một `[DryRun]`, structured `status = "not_executed"`, `published = false` và không có token mode khác.

# Implementation update — 2026-08-05

Đã triển khai trong working tree sau audit:

- **Mục 0:** thêm `DataverseWebApiMutationExecutor`, `SolutionImportHelper`, async `PublishHelper.PublishAllAsync`, `SolutionComponentCreateHelper.RemoveExistingComponent`; thêm inventory test đúng 18 tool và direct-helper blocked tests.
- **Mục 18:** `manage_ribbon` dùng `PublishAllAsync`/`SolutionImportHelper`; Ribbon add/remove solution component dùng helper; hai preview sớm đổi từ `status="dry_run"` thành `status="not_executed"`.
- **Mục 8:** toàn bộ Create và bốn Update của `manage_view` dùng `DataverseMutationExecutor`; Web API GET vẫn là read-only.
- **Mục 7:** chart add-to-solution dùng `SolutionComponentCreateHelper`, không nuốt `Mutation blocked`.
- **Mục 6:** sáu Create/Update/Delete của environment variable dùng `DataverseMutationExecutor`.
- **Mục 16/17/4:** Web API writes của `execute_webapi`, `upsert_column`, `manage_deleted_records` dùng Web API gateway; `$metadata` chỉ được bypass gateway khi là GET.
- **Mục 16 test debt:** `ExecuteWebApiToolTests` đã xanh 82/82 sau khi sửa GUID metadata routing và malformed JSON fallback.
- **Mục 0 focused tests:** `DryRunGatewayContractTests` + create-records + upsert-column hiện xanh 33/33; nhóm tool regression liên quan xanh 218/218.

Verification còn chờ: release script đã cài binary mới nhưng `whoami` chưa chạy được vì MCP transport đang `Transport closed`; cần restart Codex MCP connector rồi so runtime version/build/process start/assembly SHA với manifest trước live case 18.

Các test MCP ngoài phạm vi gateway vẫn còn failure legacy (create-records reflection, audit history, parse URL, search, whoami); không được đánh dấu toàn bộ test suite xanh cho tới khi triage riêng.

# Thứ tự triển khai sau vòng audit 3

1. Làm phần còn thiếu của **mục 0** trước: Web API, import/publish async, solution-component helpers và mutation spy/inventory.
2. Sửa **18** trước vì vừa leak structured status vừa có import/publish boundary fail-open.
3. Sửa **8**, **7**, **6** theo thứ tự ưu tiên từ cao xuống thấp.
4. Chuẩn hóa helper cho **17**, **16**, **4** dù source hiện tại đã có assertion bảo vệ.
5. Bổ sung spy matrix/test debt cho các mục đang PASS; không sửa lại business behavior nếu chỉ thiếu test.

## Definition of Done cuối cùng

- Đúng 18 mutating tool và tất cả được đăng ký trong safety matrix tự động.
- Runtime `initialize/tools/list/resources/list` không chứa token bị cấm; AI không có input để bật/tắt/bypass policy.
- Mọi preview đi qua `McpToolResults.DryRun`, text có đúng một `[DryRun]`, structured DTO không có field/value tiết lộ mode và dùng `not_executed` khi có status.
- Không còn direct Dataverse mutation ngoài gateway/helper có assertion tại boundary; read-only request được allow-list rõ.
- Blocked mode có zero SDK/HTTP/import/publish/solution-component mutation cho mọi action, được chứng minh bằng spy/fake chứ không chỉ null service.
- CLI build xanh; focused dry-run suite và toàn bộ MCP unit-test suite xanh hoặc mọi failure ngoài phạm vi được triage/document riêng và không liên quan contract.
- Binary MCP live được xác minh bằng `whoami` khớp manifest SHA trước live test.
