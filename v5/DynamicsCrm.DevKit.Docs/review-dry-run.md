# Review dry-run cho MCP mutating tools

## Mục tiêu và cách hiểu bắt buộc

Tài liệu này review snapshot hiện tại của `DynamicsCrm.DevKit.Cli/Mcp/**` với 18 MCP tool có `ReadOnly = false`.

Yêu cầu bảo mật được hiểu theo hai thời điểm khác nhau:

1. Trước khi gọi tool, AI không được thấy, không được suy ra từ tool schema/resource/server instructions và không được truyền hoặc thay đổi cấu hình dry-run. Đây là cấu hình chỉ do con người đặt khi khởi chạy `devkit mcp`.
2. Sau khi AI gọi một mutating action trên một server đã được con người khởi chạy ở chế độ thử, response được phép bắt đầu bằng `[DryRun]` theo yêu cầu của project để nói rõ thao tác dự kiến chưa được thực thi. AI vẫn không có parameter nào để bật/tắt hoặc bypass chế độ này.

Nếu câu “AI không được biết dry-run tồn tại” được áp dụng tuyệt đối cả với response sau invocation thì prefix `[DryRun]` cũng là một rò rỉ và mâu thuẫn trực tiếp với yêu cầu prefix. Tài liệu này chọn cách hiểu ở trên: **không discoverable, không controllable, nhưng response của một lần chạy bị chặn được phép có `[DryRun]`**.

File cấu hình CLI `McpCommandArgs.DryRun`, log stderr của `McpCommand`, tham số nội bộ `McpServerHost.RunAsync(..., bool dryRun, ...)`, DI object và code branch nội bộ không phải MCP contract nên có thể giữ. Chúng tuyệt đối không được đưa vào method parameter có `[Description]`, tool description, output schema, MCP resource hoặc server instructions.

## Kết luận tổng thể

- Có 18 tool `ReadOnly = false`; cả 18 đã nhận `McpDryRunOptions` qua constructor và đều có ít nhất một guard.
- Có rò rỉ trực tiếp trong `McpServerHost.ServerInstructions`: khi bật chế độ, AI được báo `DRY-RUN MODE ACTIVE`.
- `create_records` công khai `Dry-run via --dry-run flag` trong tool description.
- `execute_webapi` có hai redirect/error message công khai `dry_run preview`.
- Helper chung hiện trả JSON ẩn danh `{ dryRun = true, message }`; JSON này vừa làm AI thấy tên cơ chế vừa không khớp `OutputSchemaType` riêng của tool.
- `manage_app` và `manage_deleted_records` không dùng helper chung ở một số nhánh, tự trả `DRY RUN`, `status = "dry_run"`, `dryRun`, và nhắc `--dry-run`/MCP server mode.
- `ManageRecycleBinResult` là model mồ côi của tool đã bị xóa; đã xóa file để tránh tái sử dụng nhầm.
- Có một lỗi an toàn mức **Critical** trong `upsert_column`: update chỉ có `add_options`, `update_options` hoặc `delete_options` sẽ được helper con chặn write, nhưng method cha vẫn gọi `PublishIfNeeded(entityName)`. Vì vậy dry-run hiện vẫn có thể chạy `PublishXmlRequest` và thay đổi trạng thái Dataverse.
- `manage_deleted_records` dùng guard `_options != null && _options.DryRun`, nghĩa là dependency null sẽ fail-open và cho phép restore/turn thật. Các mutating tool phải fail-closed: options/context bắt buộc non-null.

## Contract kiến trúc phải triển khai trước khi sửa từng tool

### 1. Giữ cấu hình ngoài MCP contract

- Giữ option nội bộ trong `McpServerOptions.cs` hoặc đổi tên thành `McpExecutionOptions`; class này không được dùng làm parameter của method `[McpServerTool]` và không được xuất hiện trong output DTO.
- Xóa phần conditional `DRY-RUN MODE ACTIVE...` khỏi `McpServerHost.ServerInstructions`. Con người vẫn thấy trạng thái qua log stderr của CLI; AI không thấy qua MCP initialize response.
- Xóa mọi chuỗi `dry_run`, `dry-run`, `--dry-run`, `DryRun` khỏi `[Description]`, server instructions, MCP resources, redirect/hint text và JSON property. Ngoại lệ duy nhất trong dữ liệu trả về là prefix `[DryRun]` do project yêu cầu.
- Không thêm parameter `dry_run` vào bất kỳ tool nào. Không hướng dẫn AI gọi lại với một giá trị khác.

### 2. Chuẩn hóa result giống `Success`

Đổi contract từ `DryRun(string message)` sang dạng song song với `Success`:

```csharp
CallToolResult DryRun(string summary, object structured);
```

Implementation yêu cầu:

```csharp
internal static CallToolResult DryRun(string summary, object structured) => new()
{
    Content = [new TextContentBlock { Text = $"[DryRun] {summary}" }],
    StructuredContent = JsonSerializer.SerializeToElement(structured)
};
```

`McpToolBase` forward cùng signature. Mọi tool gọi trực tiếp `DryRun(summary, structured)`; xóa các wrapper chỉ forward như `DryRunResult`. Không dùng `Success(...)` để tạo dry-run response.

Quy tắc output:

- Prefix phải chính xác `[DryRun]`, không dùng `[DRY-RUN]`, `DRY RUN`, `[ManageXxx] DRY RUN` hoặc biến thể khác.
- Không tự tạo field `dryRun`/`isDryRun` trong structured output.
- Structured object phải là chính DTO khai báo bởi `OutputSchemaType` của tool. Nếu DTO có `Status`, dùng giá trị domain-neutral như `not_executed`; không dùng `dry_run`.
- Summary mô tả operation dự kiến, không nhắc flag, CLI, server mode hoặc cách tắt cơ chế.
- Nếu muốn cam kết, dùng “No Dataverse changes were made”; không dùng “No changes were made” nếu code có thể đã tạo backup/file cục bộ.

### 3. Fail-closed và chốt trước mutation đầu tiên

- Constructor của mọi tool `ReadOnly = false` phải reject options null, hoặc base class phải yêu cầu execution context non-null. Không dùng `if (_options != null && ...)`.
- Mỗi mutating action phải có đúng một decision point rõ ràng sau khi validate/resolve đủ dữ liệu cho preview và trước mutation đầu tiên.
- “Mutation” gồm `Create`, `CreateAsync`, `Update`, `Delete`, `Associate`, `Disassociate`, non-GET Web API, restore, metadata requests, publish requests, import solution, add solution/app components, set-state và custom `OrganizationRequest` có side effect.
- Helper có mutation không được public/internal-callable nếu caller có thể bỏ qua guard. Ưu tiên truyền execution context vào một mutation gateway, hoặc ít nhất đặt assertion fail-closed ngay trong helper mutating (`PublishIfNeeded`, import/publish/add-component helpers).
- Không coi `ReadOnly = false` annotation là enforcement; đây chỉ là metadata cho client.

### 4. Hai lớp bảo vệ khuyến nghị

Lớp 1 là action guard tạo preview DTO và return `DryRun(...)`. Lớp 2 là mutation gateway/assertion dùng chung ngay trước mọi SDK/Web API write. Lớp 2 không cần tạo MCP result; nó chỉ ném lỗi nội bộ nếu code cố ghi khi execution context đang chặn mutation. Cách này bắt được regression kiểu `upsert_column` gọi `PublishIfNeeded` sau một helper preview.

Không nên chỉ dựa vào regex test hoặc việc developer nhớ đặt `if`; các kiểm tra tĩnh là bổ sung, không thay thế runtime fail-closed.

## Verification chung bắt buộc

1. Serialize kết quả MCP `tools/list`, `resources/list` và initialize/server instructions ở cả hai cách khởi chạy. Assert case-insensitive rằng contract không chứa `dry_run`, `dry-run`, `--dry-run`, `dryrun` hoặc `DRY RUN`.
2. Assert mọi mutating tool method không có parameter tên/description liên quan dry-run.
3. Với execution context ở chế độ thử, gọi từng mutating action bằng input hợp lệ và dùng spy/gateway để assert số Dataverse mutation bằng 0. Read/metadata lookup phục vụ validation được phép.
4. Assert `Content` của mọi preview bắt đầu đúng `[DryRun]` và chỉ có một prefix.
5. Assert `StructuredContent` validate được với `OutputSchemaType`, không có property `dryRun` và không có status `dry_run`.
6. Với execution context bình thường, focused tests phải chứng minh mutation vẫn được gọi đúng một lần/đúng chuỗi mong đợi.
7. Thêm source-contract test liệt kê đủ mọi class có `ReadOnly = false`, để tool mới không thể được thêm mà thiếu test dry-run.
8. Sau code change trong `DynamicsCrm.DevKit.Cli/Mcp/**`, làm đúng workflow repository: rebuild/reinstall CLI bằng `Release.DynamicsCrm.DevKit.Cli.ps1`, restart connector, gọi `whoami`, rồi đối chiếu version/timestamp/process start/assembly SHA với manifest `Published/<version>/`.

# create_records

**File:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/CreateRecordsTool.cs`

**Phạm vi mutation:** action duy nhất bulk-create tối đa 5.000 record; write thực tế nằm trong `TryCreateAsync` qua `_serviceClient.CreateAsync` chạy song song.

**Hiện trạng:** guard ở khoảng dòng 105 nằm trước parse entity và trước `Parallel.ForEachAsync`, nên không có Dataverse write khi option nội bộ bật. Phần resolve entity, đọc metadata, đọc JSON/CSV và lookup-by-name trước guard là read-only. Về enforcement hiện tại tool này đạt, nhưng vẫn nên đưa `CreateAsync` qua mutation gateway vì call nằm trong callback song song và dễ bị tái sử dụng sai sau này.

**Vi phạm contract AI:** tool description có câu `Dry-run via --dry-run flag.`. Đây là vi phạm trực tiếp vì AI nhìn thấy flag trong `tools/list` và có thể cố điều khiển nó dù flag không phải tool parameter. Response hiện đi qua helper chung và nhận JSON `{ dryRun: true, message }`, cũng vi phạm output contract.

**Sửa bắt buộc:** xóa câu về flag khỏi description; tạo `BatchCreateResult` preview với `Entity`, `Total`, `Parallelism`, `UsedDefaultParallelism`, `Succeeded = 0`, `Failed = 0`, `Items = null` và một status/domain field nếu thật sự cần; gọi trực tiếp `DryRun("Would create ...", structured)`. Không parse từng record thành `Entity` trong preview nếu không cần, nhưng vẫn phải validate JSON array/count/file tồn tại.

**Test riêng:** tools/list không chứa token bị cấm; dry-run với inline JSON và file CSV đều không gọi `CreateAsync`; test 5.000 item vẫn preview, 5.001 vẫn validation error; normal mode vẫn tạo song song.

# execute_webapi

**File:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/ExecuteWebApiTool.cs`

**Phạm vi mutation:** mọi POST/PUT/PATCH/DELETE tới endpoint được phép qua `ExecuteWebRequest`; GET `$metadata` dùng `HttpClient.SendAsync`, GET khác dùng SDK Web API.

**Hiện trạng:** guard ở khoảng dòng 109 chặn mọi method khác GET trước khi request được gửi. Đây là vị trí đúng. Tuy nhiên custom Dataverse function gọi bằng GET được tin là side-effect-free theo semantics HTTP; code không thể bảo vệ khỏi một custom implementation sai chuẩn. Ghi rõ trust boundary này trong code comment/test, không đưa vào tool description.

**Vi phạm contract AI:** hai redirect reason cho Restore chứa `dry_run preview`; chúng có thể xuất hiện trong error response. Response preview cũng dùng helper chung có `dryRun` JSON.

**Sửa bắt buộc:** xóa cụm `and dry_run preview` khỏi cả `BlockedGetEndpoints` và `BlockedPostEndpoints`; preview dùng `WebApiResult` đúng schema, ví dụ method/url và status mô tả `not_executed`, rồi gọi `DryRun(...)`. Mutation gateway phải bao quanh cả `ExecuteWebRequest` và `HttpClient.SendAsync` nếu sau này code cho phép non-GET `$metadata` hoặc absolute URL.

**Test riêng:** POST/PUT/PATCH/DELETE hợp lệ đều không gửi HTTP trong dry-run; GET vẫn gửi và trả dữ liệu; blocked endpoint vẫn trả error trước preview; mọi redirect/error không chứa token bị cấm.

# manage_app

**File:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageAppTool.cs`

**Phạm vi mutation:** create `appmodule` + `sitemap`, update app, update/undo sitemap XML, `AddAppComponentsRequest`, add solution component và `PublishXmlRequest`. Mutating actions là `create`, `update`, `update_navigation`, `undo`; `list`, `detail`, `validate` là read-only action trong cùng tool.

**Hiện trạng:** bốn guard tương ứng nằm trước các write chính. Các helper mutation như `AddAppComponents` và `PublishAppModule` chỉ được gọi sau các guard trong flow hiện tại. Không thấy đường Dataverse write bypass ở snapshot này.

**Vi phạm contract AI:** cả bốn preview tự gọi `StructuredResult/Success`, tạo text `DRY RUN` và `Status = "dry_run"`. Đây là implementation riêng, không theo base `DryRun`, làm prefix và structured semantics không đồng nhất.

**Sửa bắt buộc:** thay bốn block bằng `DryRun(summary, ManageAppResult)`; dùng `Status = "not_executed"`; text không nhắc server flag; xóa mọi local variable/header `DRY RUN`. Đặt assertion ở `AddAppComponents`, `PublishAppModule` và helper add-to-solution để không thể bị caller mới bypass. Không publish trong preview.

**Test riêng:** từng action create/update/update_navigation/undo trả `[DryRun]`, đúng `ManageAppResult`, zero calls cho Create/Update/AddAppComponents/Publish/AddSolutionComponent. Test list/detail/validate không đổi behavior.

# manage_chart

**File:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageChartTool.cs`

**Phạm vi mutation:** create/update/rename/set-default/undo trên `savedqueryvisualization`, reset chart default khác, add component vào solution và publish.

**Hiện trạng:** năm mutating action đều có guard trước write đầu tiên. `set_default` có thể update nhiều chart nhưng guard nằm trước vòng reset. Không thấy bypass Dataverse ở snapshot hiện tại. Backup file có thể được tạo trước guard ở một số flow; nếu contract chỉ cấm Dataverse thì chấp nhận, nếu muốn zero side effects tuyệt đối phải dời guard trước backup.

**Vi phạm contract AI:** dùng wrapper `DryRunResult` chỉ forward sang base; helper chung làm lộ `dryRun` JSON và prefix sai chuẩn mới.

**Sửa bắt buộc:** xóa wrapper, tạo `UpsertChartResult` preview đúng action/status/target/backup metadata và gọi trực tiếp `DryRun`. Bảo vệ helper add-to-solution/publish bằng mutation assertion.

**Test riêng:** create/update/rename/set_default/undo đều zero SDK writes và zero publish; riêng set_default assert không update bất kỳ chart nào; structured preview validate với `UpsertChartResult`.

# manage_choice

**File:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageChoiceTool.cs`

**Phạm vi mutation:** create/update global option set; insert/update/delete option value; update color; publish sau metadata change.

**Hiện trạng:** create và update đều resolve/validate/project option trước guard rồi mới write, phù hợp để preview chính xác. Guard update bao phủ toàn bộ chuỗi request. Không thấy bypass ở snapshot hiện tại.

**Vi phạm contract AI:** gọi base helper cũ nên structured output chứa `dryRun`; các test hiện còn assert `[DRY-RUN]` và phải cập nhật.

**Sửa bắt buộc:** tạo `ManageChoiceResult` preview mô tả option sẽ add/update/remove/color, `Status = "not_executed"`, rồi gọi `DryRun`. Không dùng wrapper. Mutation assertion phải áp dụng cho mọi metadata request và publish.

**Test riêng:** create và mọi tổ hợp update (display/description/add/update/remove/color) không gọi Execute/Publish; collision/format invalid vẫn là Error, không phải DryRun; đổi assertion prefix cũ sang `[DryRun]`.

# manage_command

**File:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageCommandTool.cs`

**Phạm vi mutation:** create/update/hide/show appaction; add/update flyout và split button; add/remove item/group; delete/migrate record; publish entity. `list` và `detail` chỉ đọc.

**Hiện trạng:** chín mutating handler có guard. Các guard đang nằm rất sớm, đôi khi trước resolve target, nên preview có thể ít chi tiết nhưng an toàn. Tất cả SDK Create/Update/Delete và PublishEntity quan sát được đều nằm sau guard của handler tương ứng.

**Vi phạm contract AI:** response dùng helper chung cũ. Một số unit test đang assert chữ `DRY-RUN` và cần đổi. Không thấy schema/description leak trực tiếp.

**Sửa bắt buộc:** mỗi handler tạo `ManageCommandResult` phù hợp rồi gọi `DryRun`; xóa wrapper nếu có; đưa PublishEntity và các helper create group/item qua mutation assertion. Cân nhắc dời guard sau validation/read target nhưng tuyệt đối trước write để preview đủ target mà không giảm an toàn.

**Test riêng:** bao phủ đủ create/update/hide/show/add_flyout/update_flyout/add_flyout_item/remove_flyout_item/add_split_button/update_split_button; assert zero Create/Update/Delete/Publish cho từng action.

# manage_deleted_records

**File:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageDeletedRecordsTool.cs`

**Phạm vi mutation:** `restore` gửi late-bound `OrganizationRequest("Restore")`; `turn` chạy `SetStateRequest`, Update hoặc POST `recyclebinconfigs`. `list`, `detail`, `status` chỉ đọc.

**Hiện trạng:** restore và turn có guard trước mutation. Tuy nhiên guard viết `_options != null && _options.DryRun`; khi options null, code tiếp tục mutation thật. Đây là fail-open mức **High**. Constructor phải reject null và guard phải dùng context bắt buộc. Các helper `TurnOn`/`TurnOff` hiện không tự assert nên caller mới có thể bypass.

**Vi phạm contract AI:** preview restore trả `DryRun = true`, per-item `Status = "dry_run"`, message nhắc `MCP server started with --dry-run`, text `[DRY-RUN]` và `dry-run mode`; success thật còn trả `DryRun = false`. Model `ManageDeletedRecordsResult` công khai property JSON `dryRun`, và XML comment của `RestoreResultEntry.Status` nhắc dry-run.

**Sửa bắt buộc:** xóa property `DryRun` khỏi result model và mọi assignment true/false; dùng per-item status `not_executed`; xóa mọi nhắc flag/server mode; cả restore/turn phải gọi `DryRun(summary, ManageDeletedRecordsResult)`. Constructor/context fail-closed. Thêm mutation assertion trong `TurnOn`, `TurnOff` và wrapper gửi Restore/Web API POST.

**Dọn liên quan:** đã xóa `Models/ManageRecycleBinResult.cs` vì không còn reference. Đã xóa tài liệu testcall cũ `22.manage_deleted_records.md` và `23.manage_recycle_bin.md` vì chúng mô tả parameter điều khiển preview từ phía AI, trái contract mới.

**Test riêng:** null options không bao giờ cho phép restore/turn; restore batch dry-run không gửi request cho bất kỳ item nào; turn on/off không SetState/Update/POST; output schema không có `dryRun`; normal mode vẫn giữ per-item partial failure behavior.

# manage_environment_variable

**File:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageEnvironmentVariableTool.cs`

**Phạm vi mutation:** create/update/delete definition; create/update/delete current value. `list` và `detail` chỉ đọc.

**Hiện trạng:** create/update/clear/delete có guard trước write. Update chỉ vào preview khi thật sự có definition/value change; no-op đi theo validation/no-change flow. Các helper `UpsertCurrentValue` và `DeleteCurrentValue` chỉ được gọi sau guard nhưng chưa tự fail-closed.

**Vi phạm contract AI:** helper chung cũ trả generic `dryRun` JSON; chưa có description leak.

**Sửa bắt buộc:** dùng `ManageEnvironmentVariableResult` preview cho bốn action và gọi `DryRun`; đặt mutation assertion trong hai helper current-value và các publish/add-solution helper nếu có.

**Test riêng:** create có/không current value, update từng phần và kết hợp, clear, delete đều zero writes; no-op update vẫn trả validation/no-change như hiện tại; structured preview đúng schema.

# manage_form

**File:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageFormTool.cs`

**Phạm vi mutation:** update FormXML bằng operations/raw XML, rename, undo; Update `systemform` và PublishXml. `list`/`detail` chỉ đọc.

**Hiện trạng:** bốn flow mutation có guard trước Update/Publish. Validation XML và backup có thể chạy trước guard; không làm thay đổi Dataverse. Không thấy bypass trong snapshot.

**Vi phạm contract AI:** wrapper `DryRunResult` và helper chung tạo output generic không đúng `UpsertFormResult`.

**Sửa bắt buộc:** xóa wrapper; tạo `UpsertFormResult` preview có form/entity/action/backup/validation phù hợp; gọi `DryRun`. Publish helper phải có assertion.

**Test riêng:** operations update, raw formxml update, rename và undo đều zero Update/Publish; invalid XML vẫn Error trước preview; DTO validate theo output schema.

# manage_record

**File:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageRecordTool.cs`

**Phạm vi mutation:** create/update/delete/associate/disassociate một record; `read` chỉ đọc.

**Hiện trạng:** cả năm mutating handler có guard ngay trước SDK write. Entity/field parsing và target resolution trước guard chỉ đọc. Không thấy bypass.

**Vi phạm contract AI:** helper chung tạo `{ dryRun, message }`, không phải `CrudResult`.

**Sửa bắt buộc:** mỗi action tạo `CrudResult` preview đúng entity/id/relationship và status `not_executed`, gọi `DryRun`. Đưa năm SDK calls qua mutation gateway.

**Test riêng:** đủ năm mutating action zero writes; `read` vẫn truy vấn trong cả hai mode; invalid GUID/JSON vẫn Error; output validate theo `CrudResult`.

# manage_ribbon

**File:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageRibbonTool.cs`

**Phạm vi mutation:** update ribbon XML trực tiếp hoặc theo operations, undo từ backup; import temporary solution và các publish/import side effect. `list`, `buttons`, `detail` chỉ đọc.

**Hiện trạng:** ba flow update/update operations/undo có guard trước import solution. Busy checks và ribbon readback trước guard chỉ đọc. Không thấy bypass hiện tại.

**Vi phạm contract AI:** wrapper `DryRunResult`/helper generic; không có schema leak trực tiếp.

**Sửa bắt buộc:** dùng `ManageRibbonResult` preview, direct `DryRun`; mutation assertion bắt buộc trong `ImportRibbonSolution` vì đây là helper nguy hiểm nhất và một call bypass sẽ import thật.

**Test riêng:** cả raw update, operations update và undo không tạo/import solution request; list/buttons/detail vẫn đọc; preview DTO đúng schema.

# manage_role

**File:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageRoleTool.cs`

**Phạm vi mutation:** assign/unassign role-user association, create/update/delete/copy role và copy privileges. `list`, `detail`, `user` chỉ đọc.

**Hiện trạng:** sáu mutating action có guard trước SDK write. Copy guard nằm trước tạo role và add privileges nên bao phủ toàn chuỗi. Không thấy bypass.

**Vi phạm contract AI:** wrapper/helper chung generic, không theo `ManageRoleResult`.

**Sửa bắt buộc:** xóa wrapper; tạo `ManageRoleResult` preview cho assign/unassign/create/update/delete/copy; mutation assertion cho Associate/Disassociate/Create/Update/Delete và request add privileges.

**Test riêng:** đủ sáu action zero writes; đặc biệt copy không tạo role và không add privilege; output schema đúng.

# manage_view

**File:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageViewTool.cs`

**Phạm vi mutation:** create/update/rename/set-default/undo system view qua Create/Update; `list`/`detail` chỉ đọc. Personal view inclusion là read path.

**Hiện trạng:** năm mutating handler có guard trước write. XML normalization/validation và backup có thể chạy trước guard nhưng không đổi Dataverse. Không thấy bypass.

**Vi phạm contract AI:** gọi helper generic, structured preview không phải `UpsertViewResult`.

**Sửa bắt buộc:** tạo `UpsertViewResult` preview theo action và gọi `DryRun`; mutation gateway cho Create/Update. Xác nhận set-default không có helper update phụ ngoài guard khi refactor.

**Test riêng:** năm action zero writes, đặc biệt set_default; invalid FetchXML/LayoutXML vẫn Error; structured preview đúng schema.

# manage_webresource

**File:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageWebResourceTool.cs`

**Phạm vi mutation:** create/update/delete webresource, add solution component và publish. `list`/`detail` chỉ đọc.

**Hiện trạng:** ba mutating handler có guard trước primary write; add-to-solution/publish chỉ chạy sau đó. Không thấy bypass.

**Vi phạm contract AI:** wrapper/helper generic, không dùng `ManageWebResourceResult` cho preview.

**Sửa bắt buộc:** xóa wrapper; tạo đúng result DTO cho create/update/delete và gọi `DryRun`; assertions trong publish/add-solution helpers.

**Test riêng:** create/update/delete không Create/Update/Delete/AddSolutionComponent/Publish; file validation vẫn hoạt động; DTO đúng schema.

# publish_customizations

**File:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/PublishCustomizationsTool.cs`

**Phạm vi mutation:** `PublishAllXmlAsyncRequest` hoặc `PublishXmlRequest` theo target cụ thể. Đây là tool idempotent nhưng vẫn làm thay đổi published state, vì vậy `ReadOnly = false` là đúng.

**Hiện trạng:** một guard chung sau resolve target và trước cả hai loại publish. Không thấy bypass.

**Vi phạm contract AI:** wrapper/helper generic, structured preview không phải `PublishResult`.

**Sửa bắt buộc:** tạo `PublishResult` preview với mode/targets/status `not_executed`, gọi trực tiếp `DryRun`; toàn bộ publish đi qua mutation gateway.

**Test riêng:** no-target (publish all) và mọi tổ hợp specific target đều zero Execute; parameter XML vẫn được validate/build nếu cần; output đúng schema.

# upsert_column

**File:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/UpsertColumnTool.cs`

**Phạm vi mutation:** create nhiều loại attribute/lookup/customer/polymorphic relationship; update metadata; Web API PUT RequiredLevel; insert/update/delete picklist và status options; PublishXml.

**Hiện trạng:** các create path gọi `ExecuteCreateAttribute`, helper này tự trả `Guid.Empty` khi dry-run, rồi method cha return preview trước publish. Lookup/customer/polymorphic create có guard trước request. Generic update có guard trước `UpdateAttributeRequest`. Tuy nhiên option-only update có lỗi Critical:

1. `changes.Count == 0`, nên guard generic update không chạy.
2. `ManagePicklistOptions`/`ManageStatusCodeOptions` thấy dry-run, chỉ thêm chuỗi `[DRY-RUN] ...` rồi return.
3. Method cha thấy `optionResults.Count > 0`, bỏ qua “No changes”.
4. Method cha gọi `PublishIfNeeded(entityName)` không có guard.
5. `PublishIfNeeded` gửi `PublishXmlRequest` thật trong dry-run.

Đây là Dataverse mutation thực tế và phải sửa trước các cleanup về format.

**Vi phạm contract AI:** wrapper/helper generic; hai helper option tự nhúng `[DRY-RUN]`; response option-only có thể còn bị format thành `[AttributeUpdated]`, `Status = "updated"`, `Published = true/false`, hoàn toàn sai semantics.

**Sửa bắt buộc:** dựng một `plannedChanges` thống nhất gồm metadata changes + option/status changes. Sau mọi validation/metadata read, nếu có plan và execution context chặn mutation thì return **một lần** bằng `DryRun(summary, UpsertColumnResult)` trước `UpdateAttributeRequest`, Web API PUT, option requests và publish. Xóa branch dry-run trả string trong `ManagePicklistOptions`/`ManageStatusCodeOptions`; các helper này chỉ chạy ở normal mode hoặc nhận gateway fail-closed. `PublishIfNeeded` bắt buộc assert mutation allowed. Có thể giữ guard trong `ExecuteCreateAttribute` như lớp hai, nhưng action create vẫn phải return đúng DTO qua base helper.

**Test riêng:** ngoài mọi create type hiện có, bắt buộc thêm matrix update: metadata-only, picklist add-only/update-only/delete-only, status add-only/update-only/delete-only, metadata+options. Với mọi case, assert zero UpdateAttribute, zero Web API PUT, zero option request và **zero PublishXml**. Đây là regression test quan trọng nhất của review.

# upsert_relationship

**File:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/UpsertRelationshipTool.cs`

**Phạm vi mutation:** create 1:N/N:N, update/delete relationship, add/remove target của polymorphic lookup và publish entity metadata.

**Hiện trạng:** sáu action đều có guard trước Create/Update/Delete relationship request. Publish chạy sau primary mutation. Không thấy bypass hiện tại.

**Vi phạm contract AI:** wrapper/helper generic không theo `UpsertRelationshipResult`.

**Sửa bắt buộc:** xóa wrapper; tạo DTO preview cho sáu action và gọi `DryRun`; assertion trong publish và mọi metadata write helper.

**Test riêng:** đủ sáu action zero write/publish; remove_target vẫn giữ warning mất dữ liệu trong summary nhưng không nhắc flag; DTO đúng schema.

# upsert_table

**File:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/UpsertTableTool.cs`

**Phạm vi mutation:** create entity + primary attribute, update entity metadata và PublishXml.

**Hiện trạng:** create/update đều có guard trước metadata request; publish nằm sau request. Không thấy bypass.

**Vi phạm contract AI:** wrapper/helper generic không theo `UpsertTableResult`.

**Sửa bắt buộc:** xóa wrapper; tạo `UpsertTableResult` preview cho create/update, status `not_executed`, rồi gọi `DryRun`; assertion trong publish.

**Test riêng:** create và update với từng nhóm field đều zero CreateEntity/UpdateEntity/Publish; read để detect create-vs-update được phép; DTO đúng schema.

## Thứ tự triển khai khuyến nghị cho AI tiếp theo

1. Viết contract tests cho tools/list/resources/server instructions để khóa yêu cầu “AI không discover được cấu hình”.
2. Refactor `IMcpToolResultBuilder`, `McpToolBase`, `McpToolResults` sang `DryRun(summary, structured)` và prefix `[DryRun]`.
3. Xóa leak toàn cục trong `McpServerHost`, description của `create_records`, redirect text của `execute_webapi`, hai result model và docs testcall cũ.
4. Sửa `upsert_column` option-only publish bypass và thêm regression matrix trước.
5. Sửa fail-open null options của `manage_deleted_records` và thêm assertion trong TurnOn/TurnOff/Restore.
6. Chuyển lần lượt 16 tool còn lại sang typed DryRun DTO, xóa wrapper và bổ sung focused tests theo từng H1 ở trên.
7. Thêm mutation gateway/runtime assertion; chạy source inventory để chắc chắn mọi SDK/Web API mutation đều đi qua gateway hoặc có allowlist được review.
8. Chạy focused `net10.0` tests, build CLI, rồi thực hiện đầy đủ rebuild/reinstall/restart/whoami/manifest verification theo AGENTS.md vì thay đổi nằm trong `Cli/Mcp/**`.

## Definition of Done

- Không có dry-run parameter trong bất kỳ MCP tool schema nào.
- AI không thấy dry-run trong initialize instructions, tool/resource descriptions, redirect/hint, hoặc structured JSON property.
- Ngoại lệ duy nhất là response text của một mutating invocation bị chặn bắt đầu `[DryRun]`.
- Mọi dry-run structured payload khớp `OutputSchemaType` của tool.
- Mọi action có khả năng đổi Dataverse thực hiện zero mutation khi execution context chặn write, bao gồm publish/import/add-component/restore/set-state và Web API.
- `upsert_column` option-only không còn publish trong dry-run.
- Null/missing execution context fail-closed, không bao giờ fail-open.
- 18 tool trong tài liệu đều có focused negative-mutation test và source inventory test sẽ fail khi xuất hiện tool `ReadOnly = false` mới chưa được review.
