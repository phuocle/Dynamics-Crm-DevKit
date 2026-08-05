# Review dry-run MCP mutating tools - vòng audit 2

Tài liệu này audit độc lập snapshot `e1e329e3d` của `DynamicsCrm.DevKit.Cli/Mcp/**`. `review-dry-run.md` chỉ được dùng để đối chiếu; kết luận bên dưới được xác nhận lại từ source hiện tại.

Phạm vi có 18 tool mang annotation `ReadOnly = false`. Mục tiêu kép:

1. Dry-run là cấu hình do con người truyền khi khởi động `devkit mcp`; AI không được thấy nó trong `initialize`, `tools/list`, `resources/list`, tool parameter, description, hint hay structured schema và không thể bật, tắt hoặc bypass nó.
2. Khi cấu hình nội bộ đang chặn mutation, không đường code nào được thay đổi Dataverse. Preview phải trả qua helper chung `DryRun(summary, structured)` và text bắt đầu chính xác bằng `[DryRun]`.

## Làm rõ yêu cầu có vẻ mâu thuẫn

Nếu hiểu “AI không được biết dry-run tồn tại” theo nghĩa tuyệt đối cả sau khi gọi tool thì prefix `[DryRun]` cũng làm AI biết. Điều này mâu thuẫn trực tiếp với yêu cầu chuẩn hóa prefix. Tài liệu áp dụng contract khả thi sau:

- Trước invocation: dry-run không discoverable và không controllable bởi AI.
- Trong invocation: cấu hình chỉ đi qua DI/internal execution context, không phải tool argument.
- Sau một mutation bị chặn: response được phép lộ duy nhất prefix `[DryRun]`; structured payload không có `dryRun`, `isDryRun`, `mode = dry_run` hay `status = dry_run`.

Nếu chủ dự án muốn “không biết tuyệt đối”, phải bỏ prefix `[DryRun]` và trả một thông điệp domain-neutral như `Operation was not executed`; không thể đồng thời giữ cả hai yêu cầu.

## Kết luận tổng thể

| Mức | Kết luận hiện tại |
|---|---|
| Critical | `manage_ribbon` vẫn thay đổi solution `devkit_ribbon` trước guard: `RibbonSolutionFetcher.ResetSolutionToEntity()` remove toàn bộ solution components rồi add entity component. Lỗi xảy ra trong các action đọc và trong preview `update`/`operations`. |
| High | Gateway fail-closed đã được triển khai cho helper publish/add-to-solution, `create_records` và `manage_ribbon`; 11 tool còn lại vẫn dựa chủ yếu vào guard ở handler và cần migrate direct SDK writes. |
| Medium | Sau vòng fix mục 0/1/18, 7/18 tool đã bắt buộc execution context; 11 tool còn lại vẫn cần migrate context và mutation gateway khi xử lý các mục ưu tiên tiếp theo. |
| Medium | Test hiện tại chủ yếu kiểm tra text preview với `ServiceClient = null`; chưa chứng minh “zero Dataverse write” cho toàn bộ action và không bắt được lỗi `RibbonSolutionFetcher`. |
| Đã sửa | Không còn chuỗi dry-run trong tool description/server instructions/resource; không còn field `dryRun` hay status `dry_run` trong result DTO; base helper đã dùng `[DryRun]` và typed structured result. |
| Đã sửa | Lỗi `upsert_column` option-only vẫn publish trong dry-run ở review cũ đã được chặn bởi consolidated guard trước metadata/options/Web API/publish writes. |

## Trạng thái sau khi fix mục 0/1

Các helper mutation dùng chung đã được harden: overload không có context đã bị xóa, các caller hiện tại của publish/add-to-solution đã migrate, `ExecuteReadOnly` dùng allow-list request type, và context của `create_records`/`manage_ribbon` cùng các tool đã migrate là bắt buộc. 11 tool còn lại vẫn là backlog để chuyển toàn bộ direct SDK writes sang gateway.

- **Mục 0: hoàn thành phần nền tảng hiện tại.** Gateway, helper publish/add-to-solution, allow-list read-only và regression tests đã được thêm. Việc migrate gateway cho 12 tool còn lại vẫn thuộc các bước tiếp theo.
- **Mục 1: hoàn thành.** `create_records` đã dùng gateway, context bắt buộc, không xóa file trong dry-run và có focused tests.
- AI tiếp theo **không được làm lại mục 0, 1 hoặc 18**; hãy bắt đầu từ mục `17` xuống `2`, đồng thời reuse các helper của mục 0.

## Review lại `review-dry-run.md`

Tài liệu cũ đúng về nguyên tắc contract, typed result, prefix `[DryRun]`, fail-closed và nhu cầu negative-mutation tests. Tuy nhiên nó không còn đúng hoàn toàn với source hiện tại:

- Các finding cũ về `create_records` description, `execute_webapi` redirect text, `manage_app`/`manage_deleted_records` custom response, field `dryRun`, status `dry_run`, prefix sai và wrapper generic đã được sửa trong commit hiện tại.
- Finding Critical cũ của `upsert_column` đã được sửa bằng guard hợp nhất trong update path.
- Tài liệu cũ bỏ sót finding Critical hiện tại của `manage_ribbon`: quá trình “fetch” RibbonDiffXml tự thay đổi solution components trước guard.
- Tài liệu cũ chưa phân biệt đủ “guard hiện tại có vẻ bao phủ đường gọi” với “đã có enforcement tại mutation boundary”. Chỉ trạng thái thứ hai mới đủ mạnh để bảo đảm lâu dài.

## Contract triển khai bắt buộc dùng chung

Giữ helper hiện tại theo dạng song song với `Success`:

```csharp
CallToolResult DryRun(string summary, object structured);
```

```csharp
internal static CallToolResult DryRun(string summary, object structured) => new()
{
    Content = [new TextContentBlock { Text = $"[DryRun] {summary}" }],
    StructuredContent = JsonSerializer.SerializeToElement(structured)
};
```

Các quy tắc bắt buộc:

- Mỗi preview gọi `DryRun(...)` đúng một lần; không tự tạo `CallToolResult`, không gọi `Success(...)`, không tạo wrapper chỉ để forward.
- `structured` phải đúng DTO trong `OutputSchemaType`; `Status = "not_executed"` nếu DTO có status.
- Chỉ text content có `[DryRun]`. Không thêm dấu hiệu dry-run vào structured JSON.
- Guard phải chạy sau validation/read cần thiết để preview chính xác, nhưng trước mutation đầu tiên.
- Mọi dependency execution context phải non-null. Chuẩn hóa toàn bộ constructor thành `options ?? throw new ArgumentNullException(nameof(options))`, hoặc tốt hơn đưa context bắt buộc vào base class.
- Thêm mutation gateway/assertion fail-closed ngay trước SDK/Web API writes. Action-level preview là lớp UX; gateway là lớp safety. Không dùng annotation `ReadOnly = false` như enforcement.
- Các request read-only đi qua `Execute` phải được allow-list theo type; không thể coi mọi `_serviceClient.Execute(...)` là read hoặc write chỉ từ tên method.

Một thiết kế tối thiểu:

```csharp
internal sealed class McpExecutionContext
{
    internal bool MutationsBlocked { get; }

    internal void AssertMutationAllowed(string operation)
    {
        if (MutationsBlocked)
            throw new InvalidOperationException($"Mutation blocked: {operation}");
    }
}
```

Gateway phải được gọi bên trong helper nguy hiểm (`PublishHelper`, `SolutionComponentCreateHelper`, ribbon import/fetch mutation, app component, Web API write), không chỉ ở handler gọi helper.

## Test contract toàn cục phải bổ sung

1. Serialize runtime `initialize`, `tools/list`, `resources/list` ở cả category basic/standard/advanced. Assert case-insensitive không chứa `dry_run`, `dry-run`, `--dry-run`, `dryrun`, `DRY RUN`; ngoại lệ không áp dụng cho response sau invocation.
2. Reflection/source inventory assert đúng 18 class `ReadOnly = false` và mỗi class được đăng ký trong dry-run safety test matrix.
3. Dùng spy/fake mutation gateway hoặc HTTP/SDK adapter; trong blocked mode, mọi action mutating phải có zero calls tới Create/Update/Delete/Associate/Disassociate, mutating OrganizationRequest, Web API POST/PUT/PATCH/DELETE, publish, import và solution-component writes.
4. Assert mọi preview text bắt đầu đúng một lần bằng `[DryRun]`.
5. Validate `StructuredContent` với `OutputSchemaType`; assert không property hoặc value nào chứa token dry-run.
6. Test constructor/context null fail-fast cho cả 18 tool.
7. Test trực tiếp các helper mutation để caller mới không bypass được guard.

# 0 — Shared helpers và mutation gateway — làm trước tiên

> **Chỉ dẫn bắt buộc cho AI triển khai:** số 0 không phải mức ưu tiên thấp. Đây là nền tảng quan trọng nhất và phải làm trước mọi tool. Các helper ở mục này phải được **reuse** bởi cả 18 tool; không copy guard hoặc tạo helper riêng cho từng tool khi chức năng đã có ở đây.

Mục tiêu của số 0 là tạo một enforcement layer duy nhất, fail-closed, để mọi Dataverse mutation đều bị chặn từ mutation boundary. Action-level `if (_options.DryRun)` chỉ dùng để tạo preview thân thiện; nó không thay thế helper/gateway dùng chung.

**Các helper cần tạo hoặc chuẩn hóa để reuse:**

1. `McpExecutionContext`: giữ policy nội bộ do con người cấu hình, bắt buộc non-null, không được xuất hiện trong MCP schema.
2. `AssertMutationAllowed(operation)`: được gọi ngay tại mutation boundary; blocked mode phải throw trước SDK/HTTP write.
3. `McpToolResults.DryRun(summary, structured)`: helper return duy nhất, song song với `Success`, tự thêm đúng một prefix `[DryRun]`.
4. `DataverseMutationExecutor` hoặc adapter tương đương: bao Create/Update/Delete/Associate/Disassociate và mutating `OrganizationRequest`.
5. `DataverseWebApiMutationExecutor`: bao POST/PUT/PATCH/DELETE cho cả relative và absolute URL transports.
6. `PublishHelper`: mọi `PublishXmlRequest`/`PublishAllXmlAsyncRequest` phải đi qua helper có execution context.
7. `SolutionComponentMutationHelper`: bao Add/Remove solution component và AddAppComponents.
8. `SolutionImportHelper`: bao ImportSolution và các import/publish follow-up.
9. `ReadRibbonWithoutMutation`: đường đọc Ribbon tuyệt đối không được add/remove solution component.
10. Test helpers dùng chung: contract leak scanner, mutation spy và inventory 18 tool.

**Quy tắc reuse cho AI:**

- Tìm và mở rộng helper hiện có trong `Mcp/Tools/Helper/` trước khi tạo class mới.
- Không truyền `dry_run` vào tool method, model, DTO, description hoặc hint.
- Không để helper nhận một `bool` tùy ý từ AI/caller; helper nhận execution context do DI cung cấp.
- Không gọi `_serviceClient` trực tiếp cho mutation sau khi gateway được đưa vào; các ngoại lệ phải được ghi rõ và test.
- Helper phải tự fail-closed khi được gọi trực tiếp, kể cả caller quên action guard.
- Hoàn thành và test số 0 trước, sau đó xử lý tool theo thứ tự thực thi: **18 xuống 1**. Thứ tự trình bày bên dưới vẫn là **1 thấp nhất đến 18 cao nhất** để dễ lập kế hoạch.


# 1 — Tool `create_records`

**Hiện trạng:** guard nằm trước `CreateBatchAsync`; write thật là `_serviceClient.CreateAsync` cho từng record. Description cũ làm lộ `--dry-run` đã được xóa. Preview hiện dùng `DryRun(...)` với `BatchCreateResult`, status/domain fields không làm lộ cấu hình.

**Kết luận:** không thấy đường Dataverse write nào vượt guard trong call graph hiện tại. `CreateBatchAsync` đã đi qua gateway và constructor/context đã fail-fast; dry-run cũng không còn xóa file input.

**Đã xử lý:** execution context bắt buộc non-null; `CreateAsync` đi qua `DataverseMutationExecutor`; dry-run giữ lại file input. **Còn lại:** bổ sung spy test với file/CSV thật và giữ validation input source, giới hạn 5.000 record, parse/count trước preview.

**Test bắt buộc:** inline JSON, JSON file và CSV blocked mode đều zero `CreateAsync`; 5.000 preview được, 5.001 vẫn error; structured payload đúng `BatchCreateResult`; `tools/list` không chứa token bị cấm.

# 2 — Tool `manage_record`

**Hiện trạng:** create/update/delete/associate/disassociate có guard trực tiếp trước SDK calls và trả `CrudResult`.

**Kết luận:** đường write hiện tại được bao phủ. Guard create/update chạy sau parse cơ bản; associate/disassociate cần bảo đảm relationship/entity resolution hoàn tất trước preview để không báo kế hoạch sai.

**Xử lý:** gateway ngay trước năm SDK calls; constructor fail-fast; không cho helper/new action gọi SDK trực tiếp ngoài gateway.

**Test bắt buộc:** năm action zero writes; invalid GUID/entity/relationship/field vẫn Error; structured result đúng action/entity/id.

# 3 — Tool `publish_customizations`

**Hiện trạng:** toàn bộ publish all/targeted có guard trước `PublishAllXmlAsyncRequest` hoặc `PublishXmlRequest`; preview dùng `PublishResult`.

**Kết luận:** call graph hiện tại an toàn. Đây là tool chỉ có mutation nên rất phù hợp để làm mẫu gateway/reference implementation.

**Xử lý:** assertion trong shared publish executor; constructor fail-fast; planned target XML phải được build/validate trước preview nhưng không gửi request.

**Test bắt buộc:** all và mọi targeted combination zero Execute; preview target summary đúng; malformed/no-target validation không bị che bởi guard.

# 4 — Tool `manage_deleted_records`

**Hiện trạng:** constructor đã reject null. Restore và turn on/off dùng typed `ManageDeletedRecordsResult`, per-item `not_executed`, base `DryRun`; field `DryRun` và thông điệp nhắc `--dry-run` đã được xóa. Restore còn có guard phòng thủ trong Web API helper.

**Kết luận:** finding fail-open/contract của review cũ đã sửa. Không thấy restore/SetState/Update/Web API POST vượt guard. Các helper `TurnOn`, `TurnOff` và SDK restore vẫn cần gateway độc lập.

**Xử lý:** dùng constructor này làm chuẩn cho 17 tool còn lại. Assertion ngay trước `RestoreRequest`, `SetStateRequest`, fallback Update và Web API POST.

**Test bắt buộc:** null context fail-fast; batch restore zero write cho mọi item; turn on/off zero SetState/Update/POST; list/detail/status vẫn read; partial-failure behavior normal mode không đổi.

# 5 — Tool `manage_role`

**Hiện trạng:** assign/unassign/create/update/delete/copy có preview trước Associate/Disassociate/Create/Update/Delete/AddPrivilegesRole. Typed `ManageRoleResult`.

**Kết luận:** không thấy đường write vượt guard. Copy có nhiều writes sau khi role mới được tạo; cần gateway từng bước để tránh partial mutation khi regression.

**Xử lý:** assertion cho sáu loại write; đặc biệt create role và add privileges trong copy. Guard nên sau resolve user/role/BU và validation để preview đáng tin.

**Test bắt buộc:** sáu action zero writes; copy zero Create và zero AddPrivileges; invalid targets vẫn Error; normal partial failure semantics được giữ.

# 6 — Tool `manage_environment_variable`

**Hiện trạng:** create/update/clear/delete có preview trước definition/value Create/Update/Delete. Update chỉ preview khi thực sự có definition hoặc value changes. Typed result có `not_executed`.

**Kết luận:** không thấy write vượt guard. Helper set/clear current value và add-to-solution không tự enforce; constructor chưa reject null.

**Xử lý:** planned change phải bao gồm definition và current-value operation; gateway trong set-current, clear-current, delete cascade và solution helper.

**Test bắt buộc:** create/update definition/update value/clear/delete zero write; no-op update vẫn Error/no-change theo contract; add-to-solution bị chặn.

# 7 — Tool `manage_chart`

**Hiện trạng:** create/update/rename/set_default/undo có preview trước Create/Update. Add-to-solution chạy sau create và sau guard. Preview dùng `UpsertChartResult`.

**Kết luận:** call graph hiện tại an toàn với Dataverse. `AddToSolutionIfRequested` và các Update khi set default chưa có gateway; constructor chưa fail-fast.

**Xử lý:** assertion trong create/update, vòng lặp clear default, target set default, add solution component và mọi publish helper. Không tạo backup Dataverse-side trước guard.

**Test bắt buộc:** từng action mutating zero writes; riêng set_default phải zero update cả chart cũ lẫn chart đích; add-to-solution không chạy; preview schema đúng.

# 8 — Tool `manage_view`

**Hiện trạng:** create/update/rename/set_default/undo có preview trước Create/Update. Các metadata retrieval và Web API readback là read-only. Preview dùng `UpsertViewResult`.

**Kết luận:** không thấy Dataverse write vượt guard. Set-default hiện update view đích; mọi helper update/publish cần gateway. Local backup side effect cần policy riêng.

**Xử lý:** assertion tại Create/Update và publish; allow-list rõ Web API GET/readback. Di chuyển guard sau deterministic FetchXML/LayoutXML validation.

**Test bắt buộc:** năm action zero Create/Update/Publish; set_default không cập nhật bất kỳ record nào; read actions/readback vẫn chạy.

# 9 — Tool `manage_form`

**Hiện trạng:** operations/update/rename/undo guard trước `_serviceClient.Update` và `PublishXmlRequest`; preview dùng `UpsertFormResult`.

**Kết luận:** không thấy write vượt guard. Backup file có thể được tạo trước preview ở một số path nhưng không thay đổi Dataverse. Publish blocks lặp lại và không có gateway.

**Xử lý:** assertion trong shared form update/publish helper; thống nhất bốn handler qua mutation executor. Quyết định riêng xem blocked mode có được tạo local backup hay không và test theo policy đó.

**Test bắt buộc:** bốn action zero Update/Publish; XML/operation validation vẫn chạy; preview typed; publish helper direct-call bị chặn.

# 10 — Tool `manage_webresource`

**Đã hoàn thành trong vòng hiện tại:** Context/gateway bắt buộc cho Create/Update/Delete; publish webresource dùng helper publish riêng, giữ nguyên preview typed và không mutation trong blocked mode.

**Hiện trạng:** create/update/delete có preview trước record Create/Update/Delete, solution-component handling và publish. Typed `ManageWebResourceResult`.

**Kết luận:** không thấy write vượt guard. `PublishIfRequested` và `SolutionComponentCreateHelper` vẫn là mutation helpers không biết execution context.

**Xử lý:** gateway trong record writes, add-to-solution và publish. Validate content/file/type/name/solution trước preview.

**Test bắt buộc:** create/update/delete zero writes; create with solution zero AddSolutionComponent; publish=true zero PublishXml; invalid file/base64/type vẫn Error.

# 11 — Tool `manage_choice`

**Đã hoàn thành trong vòng hiện tại:** Mọi Update/Insert/Delete option và CreateOptionSet request dùng `DataverseMutationExecutor`; publish đã dùng `PublishHelper`; read option-set request vẫn read-only.

**Hiện trạng:** create và update có consolidated preview trước `CreateOptionSetRequest`, `UpdateOptionSetRequest`, insert/update/delete/color option requests và add-to-solution. Output dùng `ManageChoiceResult`.

**Kết luận:** lỗi contract cũ đã sửa; không thấy write vượt guard. Rủi ro là các request helper không tự assert và update preview hiện có thể chạy trước một số validation sâu.

**Xử lý:** tạo planned changes sau parse/collision validation; chỉ sau đó `DryRun`. Gateway cho mọi metadata request, publish và solution component.

**Test bắt buộc:** create; rename/description; add/update/remove/color; các tổ hợp update đều zero Execute. Collision, JSON lỗi, color/value lỗi phải trả Error thay vì preview.

# 12 — Tool `upsert_table`

**Đã hoàn thành trong vòng hiện tại:** Context bắt buộc; CreateEntity/UpdateEntity và publish đều qua gateway/helper; retrieve metadata không bị chặn.

**Hiện trạng:** create/update có guard trước `CreateEntityRequest`, `UpdateEntityRequest` và publish. Preview dùng `UpsertTableResult`.

**Kết luận:** không thấy write vượt guard. Request execution và publish chưa có boundary assertion; constructor chưa reject null.

**Xử lý:** validate/resolve existing metadata, build planned changes, rồi preview; gateway trong create/update/publish.

**Test bắt buộc:** create/update zero Execute; no-op update không publish; primary name/settings validation vẫn Error; typed schema đúng.

# 13 — Tool `upsert_relationship`

**Đã hoàn thành trong vòng hiện tại:** Context bắt buộc; CreateOneToMany/CreateManyToMany/Update/Delete và polymorphic relationship writes dùng executor; publish dùng helper.

**Hiện trạng:** create 1:N, create N:N, update, delete, add/remove polymorphic target có preview trước corresponding metadata request và publish. Typed `UpsertRelationshipResult`.

**Kết luận:** không thấy write vượt guard. Read requests `RetrieveRelationshipRequest`/`RetrieveEntityRequest` được phép; write request type cần gateway allow/deny rõ.

**Xử lý:** assertion trước CreateOneToMany/CreateManyToMany/UpdateRelationship/DeleteRelationship/polymorphic target writes và publish. Constructor fail-fast.

**Test bắt buộc:** sáu action zero writes/publish; invalid relationship/target/hierarchical constraints vẫn Error; read requests có thể chạy để tạo preview chính xác.

# 14 — Tool `manage_app`

**Đã hoàn thành trong vòng hiện tại:** App module/site-map Create/Update, AddAppComponents và app-module publish đều qua gateway/helper; read/unpublished inspection không mutation.

**Hiện trạng:** các action mutation `create`, `update`, `update_navigation`, `undo` có typed preview trước Create/Update, `AddAppComponents` và publish. Các response tự tạo `DRY RUN`/`status=dry_run` ở review cũ đã được thay bằng `DryRun(...)` và `not_executed`.

**Kết luận:** không thấy write vượt guard trong handler hiện tại. Helper `AddAppComponents` và publish vẫn không có enforcement nội tại nên caller mới có thể bypass.

**Xử lý:** context non-null; assertion trong `AddAppComponents`, update sitemap/appmodule, add-to-solution và `PublishAppModule`. Đặt guard sau validation/navigation XML planning nhưng trước write đầu tiên.

**Test bắt buộc:** bốn action mutating zero Create/Update/AddAppComponents/Publish; action list/detail/validate không đổi; backup local nếu được phép phải được ghi rõ là side effect ngoài Dataverse.

# 15 — Tool `manage_command`

**Đã hoàn thành trong vòng hiện tại:** Context bắt buộc; toàn bộ Create/Update/Delete `appaction` và nested flyout/split writes dùng `DataverseMutationExecutor`; `PublishEntity` dùng `PublishHelper`. Focused tests mục 15 nằm trong nhóm 102/102 pass.

**Hiện trạng:** create/update/hide/show/add_flyout/update_flyout/add_split_button/update_split_button/add_flyout_item/remove_flyout_item đều có guard trước record write và publish. Preview dùng `ManageCommandResult`. `IsClassicRibbonButton` chỉ export solution và không tự add/remove component.

**Kết luận:** không thấy đường write vượt guard hiện tại. Nhiều guard đặt quá sớm, trước required-field/GUID/action validation, nên blocked mode có thể trả preview cho request mà normal mode chắc chắn lỗi. `PublishEntity` và các nested item creators chưa có gateway.

**Xử lý:** di chuyển guard sau deterministic validation/read planning; assertion trong `PublishEntity`, tất cả Create/Update/Delete appaction, group/item creators. Giữ `ExportSolutionRequest` trong allow-list read request.

**Test bắt buộc:** matrix đủ 10 action mutating; zero record write và publish; invalid input vẫn Error trong blocked mode; helper nested không bypass.

# 16 — Tool `execute_webapi`

**Đã hoàn thành trong vòng hiện tại:** Context bắt buộc; header/body validation chạy trước preview; non-GET normal request có `AssertMutationAllowed` ngay trước transport, blocked mode không gửi network. Bộ test legacy có assertion không còn phù hợp với GUID redirect/JSON behavior và cần chỉnh riêng.

**Hiện trạng:** mọi HTTP method khác GET được chặn trước `HttpClient.SendAsync` hoặc `_serviceClient.ExecuteWebRequest`. Các redirect/error text cũ có `dry_run preview` đã được xóa. Preview dùng `WebApiResult` qua base `DryRun`.

**Kết luận:** đường write hiện tại được guard. GET vẫn được phép chạy trong blocked mode; đây là đúng nếu route thực sự read-only. Rủi ro còn lại là policy dựa vào HTTP verb và không có assertion ngay tại hai transport branches.

**Xử lý:** đặt gateway trước cả absolute-URL `SendAsync` và Dataverse `ExecuteWebRequest`; allow GET/HEAD only trong blocked mode và giữ blocklist endpoint. Không đưa tên mode hay cách khởi động server vào redirect/hint.

**Test bắt buộc:** POST/PUT/PATCH/DELETE zero network; GET vẫn chạy; absolute URL và relative URL cùng policy; redirect/error/schema không lộ token; body validation vẫn chạy trước preview khi có thể.

# 17 — Tool `upsert_column`

**Đã hoàn thành trong vòng hiện tại:** Context bắt buộc; CreateAttribute, relationship/customer/polymorphic, UpdateAttribute, option/status, RequiredLevel Web API PUT và publish đều qua gateway số 0. Focused tests mục 17 nằm trong nhóm 102/102 pass.

**Hiện trạng:** 15 create type paths guard trước CreateAttribute/CreateRelationship requests và publish. Update path đã gom `changes` + option requests, trả preview trước `UpdateAttributeRequest`, Web API PUT, option/status requests và `PublishIfNeeded`. Lỗi option-only publish từ review cũ đã được sửa.

**Kết luận:** không thấy đường write vượt guard trong call graph hiện tại. Tuy vậy `ExecuteCreateAttribute`, `ManagePicklistOptions`, `ManageStatusCodeOptions` và `PublishIfNeeded` chưa có gateway; đây là file lớn, nguy cơ regression cao nhất sau ribbon.

**Xử lý:** context non-null; assertion trong mọi create/update relationship/attribute request, Web API PUT, option/status request và publish. Giữ một planned-changes decision duy nhất cho update. Không đưa nhánh dry-run trở lại các option helper dưới dạng string.

**Test bắt buộc:** đủ mọi create type; metadata-only update; option-only add/update/delete; statuscode option; required-level Web API fallback; mọi combination zero writes và zero publish. Test riêng regression option-only.

# 18 — Tool `manage_ribbon`

**Trạng thái sau khi fix:** Đã hoàn thành mục 18. `RibbonSolutionFetcher.FetchExistingRibbonDiffXml` giờ yêu cầu `McpExecutionContext` và fail-closed trước `ResetSolutionToEntity`; toàn bộ đường `RemoveSolutionComponentRequest`/`AddSolutionComponentRequest` không thể chạy trong blocked mode. `manage_ribbon(update)` và `manage_ribbon(undo)` trả preview trước mọi export/import/publish. `detail` trong blocked mode dùng `ReadRibbonWithoutMutation` với `RetrieveEntityRibbonRequest`; `buttons` không export solution trong blocked mode. `BackupCurrentRibbon` không được tạo file hay gọi fetch mutation trong blocked mode.

**Vi phạm contract AI:** không còn schema/description leak, và preview đã dùng `ManageRibbonResult`. Vi phạm ở đây là enforcement, không phải visibility.

**Thiết kế đã áp dụng:** tách rõ hai khái niệm:

1. `ReadRibbonWithoutMutation`: dùng request/read API không add/remove solution components. Ưu tiên `RetrieveEntityRibbonRequest` hoặc một read-only metadata route; nếu output khác RibbonDiffXml thì chuyển đổi rõ và test fidelity.
2. `PrepareExportSolutionForEntity`: là mutation, chỉ được gọi sau gateway ở normal mode.

Trong blocked mode, `update`/`operations` trả limited preview typed result vì exact RibbonDiffXml chỉ có thể lấy bằng export sau khi chuẩn bị solution (một mutation). `BackupCurrentRibbon` không chạy. Các đường import/publish chỉ còn được gọi sau preview ở normal mode; assertion nằm trong fetcher và gateway.

**Test/verification:** build CLI pass 0 warning/0 error; focused MCP tests pass 29/29. Sau khi restart Codex App, `whoami` xác nhận runtime version `4.44.44.44`, build `05.08.2026 10:20:02` và assembly SHA khớp build manifest. Description của `manage_ribbon` không chứa token dry-run. Live call `manage_ribbon(action="update", entity_name="account", operations=[...], backup=false)` trả `[DryRun] Would UPDATE ribbon for entity 'account'.` với structured `status="dry_run"`, `published=false`; không có import/publish/solution mutation signal. Bổ sung spy OrganizationRequest ở vòng test integration tiếp theo khi có fake `ServiceClient` dùng chung.

# Thứ tự thực thi đề xuất

Thứ tự số trong tài liệu biểu diễn mức ưu tiên: `1` thấp nhất, `18` cao nhất. Thứ tự làm việc thực tế:

1. Làm **số 0** trước để có helper/gateway dùng chung và test infrastructure.
2. Làm tool từ **18 xuống 1**, ưu tiên dừng mutation thực tế trước rồi mới harden các tool hiện đã có guard.
3. Sau mỗi tool, thêm nó vào negative-mutation matrix và chạy direct-helper tests.
4. Chỉ tinh chỉnh độ chi tiết của preview sau khi zero-mutation safety đã được chứng minh.

| Thứ tự làm | Hạng mục | Lý do |
|---|---|---|
| Trước tiên | 0 — shared helpers/gateway | Nền tảng reuse và fail-closed cho toàn bộ tool. |
| 1 | 18 — `manage_ribbon` | **Đã hoàn thành.** Không còn solution reset/export mutation trong blocked mode. |
| 2 | 17 — `upsert_column` | Bề mặt metadata/Web API/options/publish lớn, file phức tạp. |
| 3 | 16 — `execute_webapi` | Raw transport có blast radius rộng. |
| 4 | 15 — `manage_command` | Nhiều action, nested creators và publish paths. |
| 5 | 14 — `manage_app` | App/sitemap/component/publish mutations liên kết nhau. |
| Sau đó | 13 xuống 1 | Harden bằng helper số 0 và bổ sung focused tests. |

# Checkpoint 15-17

Muc 15, 16 va 17 da duoc migrate mutation gateway/context va focused tests tuong ung da chay. AI tiep theo bat dau tu muc 14 xuong 2; khong lam lai muc 0, 1, 15, 16, 17 hoac 18.

# Checkpoint 10-14

Muc 10, 11, 12, 13 va 14 da duoc migrate mutation gateway/context va focused tests tuong ung da chay. AI tiep theo bat dau tu muc 9 xuong 2; khong lam lai muc 0, 1, 10, 11, 12, 13, 14, 15, 16, 17 hoac 18.

# Checkpoint 2-9

Muc 2 den 9 da duoc migrate mutation gateway/context va focused tests nhom nay pass 74/74. AI tiep theo bat dau tu muc 1 (muc 0 va 1 da hoan thanh truoc do); khong lam lai cac muc 2 den 18 da co checkpoint.

# Definition of done

- Mục số 0 được reuse; không có 18 bản sao guard/gateway khác nhau.
- Runtime MCP contract trước invocation không chứa bất kỳ token dry-run nào.
- Không tool parameter nào cho phép AI truyền hoặc thay đổi cấu hình này.
- Ngoại lệ duy nhất AI thấy là prefix `[DryRun]` sau một mutation bị chặn, nếu chủ dự án giữ cách hiểu contract đã nêu.
- Tất cả preview dùng `DryRun(summary, typedResult)`, prefix đúng một lần, structured status `not_executed`.
- Blocked mode có zero Dataverse mutation, kể cả solution-component mutation dùng để “fetch” ribbon.
- Mọi mutation helper fail-closed khi bị gọi trực tiếp hoặc từ caller mới.
- 7/18 constructor/context fail-fast sau vòng fix mục 0/1/18; 11 tool còn lại là backlog migrate gateway, không được rollback các helper đã hoàn thành.
- Test inventory fail khi có tool `ReadOnly = false` mới nhưng chưa được thêm vào safety matrix.
