# Review dry-run MCP mutating tools — vòng audit 4 (final verification)

Ngày audit: **2026-08-05**  
Source được audit: commit `383a0d2d390c10defd836acdd8c0408dfb780f02`  
Tài liệu đầu vào đã đọc toàn bộ: `DynamicsCrm.DevKit.Docs/review-dry-run3.md`

> Thứ tự ưu tiên của tài liệu này giữ đúng quy ước đã thống nhất: **0 phải làm trước tiên vì là nền tảng/helper dùng lại**, sau đó **18 là tool khó/rủi ro cao nhất và giảm dần tới 1**. Các heading vẫn được đánh số 1–18 để đối chiếu trực tiếp với review 3.

## Kết luận ngắn

**Chưa được tuyên bố hoàn tất tuyệt đối.** Vòng 3 đã sửa đúng các bypass Dataverse được nêu và source hiện tại không còn thấy primitive ghi trực tiếp nào trong 18 tool đi vòng ngoài các gateway/helper. Cả 18 descriptor mà Codex đang nhìn thấy cũng không có token `dry-run`, `dry_run`, `dryrun`, `dry run`, `simulation` hoặc `simulate`.

Tuy nhiên vòng 4 tìm thấy một lỗi bảo mật mới ở helper Web API: mutation với **absolute URL** có thể gửi Dataverse bearer token tới host do input chỉ định. Ngoài ra bằng chứng tự động “zero Dataverse call” vẫn chưa phủ đủ 18 tool, runtime MCP sống chưa verify được, và full MCP test suite chưa xanh.

| Mức | Kết luận |
|---|---|
| Pre-invocation contract | **PASS theo source và descriptor cache**: AI không thấy mode trong tên tool, input schema, mô tả hoặc structured output schema của 18 tool. |
| Action-level preview | **PASS theo source + focused tests**, nhưng chưa có matrix test cho mọi action của cả 18 tool. |
| Mutation boundary | **PASS theo static audit** cho SDK/Web API/import/publish/solution component sau các sửa đổi vòng 3. |
| Web API absolute URL | **FAIL bảo mật**: token có thể bị gắn vào request tới host khác. Phải sửa ở mục 0 và test tại mục 16. |
| Live runtime proof | **BLOCKED**: `whoami` trả `Transport closed`; chưa so sánh live process với manifest. |
| Full MCP regression | **FAIL**: 1213 pass, 85 fail, tổng 1298. Phần lớn là test reflection/format cũ, không trực tiếp chứng minh mutation xảy ra, nhưng vẫn ngăn kết luận toàn bộ suite xanh. |

## Threat boundary phải hiểu thống nhất

Yêu cầu “AI không biết dry-run tồn tại” chỉ khả thi đối với **MCP protocol contract trước invocation**: tool list, tool description, input schema, server instructions và resources. Một AI có quyền đọc repository đương nhiên có thể đọc source, tài liệu review và `.codex/config.toml`; do đó không thể đồng thời yêu cầu AI sửa code dry-run và tuyệt đối không biết khái niệm này trong filesystem.

AI client được phép nhận duy nhất tín hiệu sau khi gọi một mutation bị chặn: text bắt đầu bằng `[DryRun]`. Structured payload phải giữ shape nghiệp vụ và dùng trạng thái trung tính như `not_executed`; không thêm field báo mode.

`.codex/config.toml` local hiện có startup argument chứa mode. Đây là cấu hình do con người quản lý, đúng với thiết kế hiện tại và không phải MCP schema. Nếu threat model coi AI có quyền đọc toàn workspace là đối tượng phải giấu luôn cấu hình này, yêu cầu đó chưa đạt và cần chuyển secret/config ra ngoài workspace; không nên cố giải quyết bằng đổi tên token.

## Bằng chứng vòng 4

- Inventory bằng `[McpServerTool(ReadOnly = false)]`: đúng **18 tool**.
- Scan `Mcp/Resources` và `Mcp/Tools/Models`: không thấy mode token hoặc field mode mới.
- Scan 18 descriptor đang được Codex cache: đủ **18/18**, không có forbidden token.
- Static audit các primitive `Create/CreateAsync/Update/Delete/Associate/Disassociate/Execute/ExecuteWebRequest/SendAsync`: mọi mutation Dataverse đã đi qua `DataverseMutationExecutor`, `DataverseWebApiMutationExecutor`, `SolutionComponentCreateHelper`, `SolutionImportHelper` hoặc `PublishHelper`. Những `_serviceClient.Execute(...)` còn trực tiếp trong 18 tool là request đọc/validate/export metadata.
- `dotnet build DynamicsCrm.DevKit.Cli/DynamicsCrm.DevKit.Cli.csproj --no-incremental`: **PASS**, 0 warning, 0 error.
- Focused dry-run/MCP tests before this implementation pass: **323/323 PASS**; after the added security/policy tests, the targeted review set is **104/104 PASS**.
- Full MCP tests after the compatibility fixes: **1302 PASS / 0 FAIL / 1302 total**.
- Installed CLI after this implementation: `4.44.44.44 Build: 05.08.2026 17:59:49`.
- Installed assembly SHA khớp manifest: `58C8EF0E4D68ACA983F9A03C0A52C11565CDB3AD681B5015EDFE6E4002F98E49`.
- Manifest commit đã khớp HEAD `383a0d2d...`; `gitDirty=true` là đúng vì các thay đổi chưa được user yêu cầu commit.
- Live `mcp__devkit_codex__whoami` sau install vẫn **không chạy được**, lỗi `Transport closed`; Codex connector cần được restart ở phía app trước khi có live processStartTime proof.

## Implementation update sau khi áp dụng review vòng 4

Các thay đổi đã thực hiện trong source:

- `DataverseWebApiMutationExecutor` không còn tạo `HttpClient` cho absolute URL và không còn tự gắn bearer token. Absolute URL bị reject trước service call; blocked execution context vẫn được kiểm tra trước validation.
- `execute_webapi` reject absolute/network-path URL ở public tool boundary, áp dụng cho cả GET và mutation.
- `manage_deleted_records` đã bỏ policy exception riêng dựa trên `_options.DryRun`; helper dùng `_context.AssertMutationAllowed(...)`.
- `McpExecutionPolicy` là startup source duy nhất để tạo `McpDryRunOptions` và `McpExecutionContext` trong `McpServerHost`.
- Thêm regression tests cho cross-host URL, blocked-context ordering, startup policy projection và giữ compatibility overload cho test input resolver của `create_records`.
- Build sau thay đổi: **PASS**, 0 warning/error. Targeted review suite: **104/104 PASS** (bộ rộng trước đó là 327/327).
- CLI đã build/install bằng `Release.DynamicsCrm.DevKit.Cli.ps1`; package/manifest tồn tại, SHA installed assembly khớp manifest và `Const.cs` đã được restore về placeholder.

Các mục chưa thể đánh dấu complete trong môi trường hiện tại:

- Full MCP suite đã xanh 1302/1302 sau khi khôi phục các compatibility helpers/format contracts.
- Chưa có live `whoami` vì MCP connector trả `Transport closed`; cần restart connector rồi đối chiếu process runtime.
- Chưa có spy end-to-end cho mọi action của 18 tool; helper/gateway tests hiện chứng minh boundary, không thay thế hoàn toàn matrix Dataverse thật.

# 0 — Shared helpers, security boundary và test infrastructure — PHẢI LÀM TRƯỚC

## Trạng thái

**FAIL một blocker bảo mật; PARTIAL về test proof.** Các helper vòng 3 là hướng kiến trúc đúng và phải tiếp tục reuse, không tạo thêm gateway riêng trong từng tool.

## Helper bắt buộc reuse

- `McpToolResults.DryRun(...)`: tạo text `[DryRun]` và structured content giữ DTO nghiệp vụ.
- `McpExecutionContext.AssertMutationAllowed(...)`: fail-closed policy ở sát mutation boundary.
- `DataverseMutationExecutor`: gateway cho SDK `Create`, `CreateAsync`, `Update`, `Delete`, `Associate`, `Disassociate`, `Execute`.
- `DataverseWebApiMutationExecutor`: gateway cho Web API `POST`, `PUT`, `PATCH`, `DELETE`.
- `SolutionComponentCreateHelper`: add/remove solution component.
- `SolutionImportHelper`: import solution zip.
- `PublishHelper`: publish entity/optionset/app/webresource/publish-all.

## Blocker mới tìm thấy

`DataverseWebApiMutationExecutor.Execute` nhận absolute URI, tạo `HttpRequestMessage`, rồi gắn `serviceClient.CurrentAccessToken` trước khi gửi bằng `HttpClient`. Không có kiểm tra scheme/host/port phải trùng `serviceClient.ConnectedOrgUriActual`. Vì `execute_webapi.url` là input của AI, normal mode có thể gửi bearer token tới một host tùy ý.

### Cách sửa bắt buộc

1. Tốt nhất chỉ chấp nhận relative Dataverse Web API path, đúng với public description hiện tại.
2. Nếu phải hỗ trợ absolute URL, canonicalize URI và chỉ cho phép `https`, host cùng Dataverse organization, port hợp lệ và path thuộc `/api/data/v*/`; reject userinfo, fragment và cross-host redirect.
3. Không tự follow redirect mang Authorization sang host khác. Nên dùng handler không auto-redirect hoặc tự validate từng redirect.
4. Thêm unit test với absolute URL khác host và xác nhận transport **không được gọi**, token **không được gắn**.
5. Thêm same-host happy-path test, relative-path happy-path test và blocked-context test.

## Test infrastructure còn thiếu

`DryRunGatewayContractTests` hiện kiểm tra inventory và một số helper fail-closed, nhưng chưa chứng minh đầy đủ 18 tool × mọi mutating action đều tạo **zero transport calls**. Test bằng `ServiceClient = null` chỉ chứng minh một số code path dừng sớm; nó không mạnh bằng spy/fake transport ghi nhận số lần gọi.

Cần bổ sung:

- Một spy/fake mutation adapter dùng chung, đếm SDK writes, Web API sends, import, publish và solution component mutations.
- Data-driven matrix cho 18 tool và mọi action ghi dữ liệu: kết quả có `[DryRun]`, structured content không chứa mode token, mutation-call count bằng 0.
- Architecture test scan source/IL để cấm primitive write trực tiếp trong class `[ReadOnly=false]`, trừ allowlist gateway/helper.
- Protocol serialization test cho initialize + tools/list + resources/list; scan key/value/description/schema, không chỉ reflection attribute.
- Invariant test bảo đảm `McpDryRunOptions.DryRun` và `McpExecutionContext.MutationsBlocked` luôn sinh từ cùng startup policy. Về lâu dài nên chỉ có một source of truth.

## Điều kiện đóng mục 0

- Fix absolute URL/token issue.
- Toàn bộ test mới phía trên xanh.
- Không thêm helper mutation mới nếu gateway hiện hữu đã bao phủ.
- Runtime `whoami` khớp manifest của source sạch và processStartTime mới sau restart.

# 1 — Tool `create_records` — PASS source, còn test gap

## Đã đúng

- `CreateAsync` đi qua `DataverseMutationExecutor.CreateAsync`.
- Preview trả qua base `DryRun(...)`.
- `deleteInput` không xóa file input trong preview.
- Descriptor/schema không lộ mode.

## Còn phải làm

- Thêm spy test xác nhận 0 `CreateAsync` calls cho inline JSON, JSON file và CSV.
- Xác nhận preview không xóa/move file và structured item status dùng `not_executed`.
- Sửa test regression `ResolveRecordsInput_InlineJsonAndJsonFile_ReturnContent` đang lỗi reflection parameter-count.

# 2 — Tool `manage_record` — PASS source, còn test matrix

## Đã đúng

- Create/update/delete/associate/disassociate đều qua `DataverseMutationExecutor`.
- Mỗi action mutation có action-level preview dùng `DryRun(...)`.
- Read không bị chặn.

## Còn phải làm

- Spy matrix cho 5 action mutation và một read control case.
- Kiểm tra mọi structured DTO preview không thêm field mode và giữ GUID/status trung tính.

# 3 — Tool `publish_customizations` — PASS source, còn test matrix

## Đã đúng

- Publish all và publish chọn lọc đều có boundary assertion qua executor/helper.
- Preview dùng `DryRun(...)`.
- Không còn publish trực tiếp thiếu policy trong path đã audit.

## Còn phải làm

- Spy test cho publish-all async và `PublishXmlRequest` chọn lọc.
- Xác nhận preview không tạo async operation và `asyncOperationId` không giả lập ID thật.

# 4 — Tool `manage_deleted_records` — PASS safety, còn chuẩn hóa policy

## Đã đúng

- Restore/state/update đi qua SDK gateway; Web API configuration write đi qua Web API gateway.
- Các action mutation chính có preview.

## Điểm còn sót

Tool vẫn có private `EnsureMutationAllowed()` kiểm tra trực tiếp `_options.DryRun` và ném exception riêng. Đây không phải bypass vì các transport mutation đã có gateway, nhưng là policy thứ hai dễ drift và không reuse `McpExecutionContext`.

## Cách xử lý

- Loại helper policy cục bộ hoặc đổi nó thành delegate tới `_context.AssertMutationAllowed(...)`.
- Giữ action-level `DryRun(...)` cho UX; giữ gateway assertion cho safety.
- Thêm spy test cho restore, activate/deactivate và recycle-bin configuration Web API write.

# 5 — Tool `manage_role` — PASS source, còn test matrix

## Đã đúng

- Create/update/delete/associate/disassociate và add privilege đều qua SDK gateway.
- Preview không gọi mutation theo source audit.

## Còn phải làm

- Spy matrix cho create, update, delete, add/remove user/team và privilege mutation.
- Test riêng partial/failure paths để chắc exception không bị đổi thành success preview.

# 6 — Tool `manage_environment_variable` — PASS sau vòng 3, cần regression proof

## Đã đúng

- Create/update/delete definition và create/update/delete value đều qua SDK gateway.
- Boundary bypass được nêu trong review 3 đã được sửa.
- Descriptor/schema không lộ mode.

## Còn phải làm

- Spy tests cho toàn bộ definition/value action, đặc biệt nhánh upsert tự chọn create hay update.
- Kiểm tra không có mutation sau read-resolve khi input mơ hồ hoặc value đã tồn tại.

# 7 — Tool `manage_chart` — PASS sau vòng 3, cần solution-component proof

## Đã đúng

- Chart create/update/default changes đi qua gateway.
- Add/remove solution component dùng shared helper có boundary assertion.
- Bypass solution mutation của review 3 đã được xử lý.

## Còn phải làm

- Spy test cả Dataverse record mutation lẫn add/remove solution component.
- Test warning/catch path không được nuốt `Mutation blocked` thành warning thành công.

# 8 — Tool `manage_view` — PASS sau vòng 3, cần Web API test

## Đã đúng

- Create/update mutations đi qua SDK gateway.
- Web API validation call còn trực tiếp là GET read-only.
- Solution component removal đã đi qua shared helper.

## Còn phải làm

- Spy matrix cho create/update/deactivate/activate/delete hoặc action tương ứng của tool.
- Test nhánh view/system-view/user-view và solution removal.
- Test GET validation vẫn được phép trong preview nhưng không kéo theo write.

# 9 — Tool `manage_form` — PASS source, còn test matrix

## Đã đúng

- Form update và publish request đều đi qua gateway.
- File temp cleanup là local cleanup, không phải Dataverse mutation.
- Preview chuẩn hóa qua `DryRun(...)`.

## Còn phải làm

- Spy test từng operation cập nhật form và tùy chọn publish.
- Kiểm tra preview không tạo/ghi đè artifact lâu dài ngoài temp contract hiện hữu.

# 10 — Tool `manage_webresource` — PASS source, còn test matrix

## Đã đúng

- Create/update/delete qua SDK gateway; publish qua `PublishHelper`/gateway.
- Descriptor/schema không lộ mode.

## Còn phải làm

- Spy tests cho create/update/delete và publish true/false.
- Test cả inline content và file input; preview không thay đổi file nguồn.

# 11 — Tool `manage_choice` — PASS source, còn test matrix

## Đã đúng

- Create/update/delete option set và insert/update/delete option values qua SDK gateway.
- Các `RetrieveAllOptionSetsRequest`/`RetrieveOptionSetRequest` trực tiếp là read-only.

## Còn phải làm

- Spy matrix cho global/local choices và từng option operation.
- Test publish path và structured lists `added/renamed/deleted` trong preview.

# 12 — Tool `upsert_table` — PASS source, còn test matrix

## Đã đúng

- Create/update metadata đi qua `DataverseMutationExecutor.Execute`.
- Direct `RetrieveEntityRequest` chỉ là đọc để resolve/verify.
- Preview dùng base helper.

## Còn phải làm

- Spy tests cho create và update, gồm `is_search_enabled`.
- Xác nhận không add solution component hoặc publish ngoài gateway trong các nhánh lỗi/partial.

# 13 — Tool `upsert_relationship` — PASS source, còn test matrix

## Đã đúng

- Create/update/delete relationship và add/remove polymorphic target đều qua SDK gateway.
- Direct `RetrieveRelationshipRequest`/`RetrieveEntityRequest` là reads.

## Còn phải làm

- Spy matrix cho `create_1n`, `create_nn`, `update`, `delete`, `add_target`, `remove_target`.
- `remove_target` là action destructive nhất: test 0 mutation trong preview và output cảnh báo/status đúng.

# 14 — Tool `manage_app` — PASS source, còn helper-path proof

## Đã đúng

- App/sitemap create/update và `AddAppComponentsRequest` đi qua SDK gateway.
- Retrieve unpublished/entity và validate app là read/validation requests.
- Publish đi qua shared helper.

## Còn phải làm

- Spy matrix cho app create/update, sitemap changes, add component và publish.
- Phân loại request mới bằng allowlist read-only; không cho bất kỳ `Execute(request)` mới nào mặc định được xem là read.

# 15 — Tool `manage_command` — PASS source, test surface lớn

## Đã đúng

- Mọi record create/update/delete tìm thấy đều qua SDK gateway.
- Ribbon export/retrieve trực tiếp là read/export; import solution đi qua `SolutionImportHelper`.
- Publish/solution component helpers có boundary assertion.

## Còn phải làm

- Đây là tool nhiều action/nhánh; cần data-driven spy matrix thay vì vài test đại diện.
- Bao phủ classic ribbon, modern commanding, dropdown/split/group/item và delete/no-op paths.
- Xác nhận import không chạy khi preview kể cả khi XML/zip đã được dựng thành công.

# 16 — Tool `execute_webapi` — FAIL security, dry-run boundary PASS

## Đã đúng

- POST/PUT/PATCH/DELETE đi qua `DataverseWebApiMutationExecutor`.
- GET trực tiếp còn lại là read-only.
- Preview dùng `DryRun(...)`, structured `StatusText = "Not executed"`, không có field mode.
- Focused `ExecuteWebApiToolTests` nằm trong bộ 323 test đang xanh.

## Lỗi phải sửa

Absolute URL không bị `GetBlockedReason` từ chối. Gateway nhận absolute URI và gắn bearer token trước khi gửi. Mô tả tool nói URL phải relative nhưng description không phải security boundary; AI vẫn có thể truyền chuỗi absolute.

## Test bắt buộc

- Reject `http://...`.
- Reject `https://evil.example/...` và xác nhận zero send/zero Authorization leak.
- Reject look-alike host, userinfo URL, alternate port và redirect cross-host.
- Allow relative Dataverse URL.
- Nếu hỗ trợ absolute, chỉ allow exact organization origin + Dataverse API path.
- Blocked context phải thắng trước validation/transport và zero send.

# 17 — Tool `upsert_column` — PASS source, còn dual-guard và matrix lớn

## Đã đúng

- Create/update attribute, lookup relationships và option mutations đi qua SDK/Web API gateway.
- Direct metadata `Execute` calls là retrieve requests.
- Web API mutation đã được đưa vào shared gateway ở vòng 3.

## Điểm cần làm rõ

Internal helper `ExecuteCreateAttribute` vẫn có `if (_options.DryRun) return Guid.Empty`, và resolve helper cũng đọc `_options.DryRun`. Đây là UX/control-flow guard chứ không phải safety boundary; gateway vẫn bảo vệ. Tuy nhiên dual policy làm test khó và có thể drift so với `_context`.

## Còn phải làm

- Ưu tiên một startup policy/source of truth; action-level preview nên kết thúc trước helper mutation.
- Spy matrix theo từng attribute type, create/update, option changes, formula clone và Web API branch.
- Test mismatch options/context theo hướng fail-closed; không được có trường hợp options cho chạy nhưng context cho chạy nhầm do construction thủ công.

# 18 — Tool `manage_ribbon` — PASS source sau vòng 3, rủi ro cao nhất cần live proof

## Đã đúng

- Export solution và retrieve ribbon trực tiếp là reads.
- Import solution đã chuyển sang `SolutionImportHelper` có boundary assertion.
- Add/remove solution component đi qua shared helper.
- Publish đi qua `PublishHelper`.
- Blocker cao nhất của review 3 đã được sửa ở source.

## Vì sao chưa thể đóng tuyệt đối

Ribbon tạo solution tạm, export, sửa XML, import và publish theo chuỗi dài. Static audit cho thấy mutation đã có gateway, nhưng chưa có end-to-end spy chứng minh import/publish/add/remove đều bằng 0 trong preview ở mọi nhánh. Live MCP cũng chưa verify được vì connector đóng transport.

## Test bắt buộc

- Matrix cho các action ribbon đang hỗ trợ, gồm cả path cần solution temp.
- Spy assertions: export/read có thể chạy; import, publish, add/remove component phải bằng 0.
- Test exception/catch/finally để policy exception không bị nuốt và temp cleanup vẫn an toàn.
- Sau build/install, restart connector rồi gọi `whoami`; version/build/SHA phải khớp manifest và processStartTime phải mới.

# Danh sách việc cần làm theo thứ tự thực thi

1. **Mục 0 + 16:** khóa absolute URL/cross-host token exfiltration và thêm transport security tests.
2. **Mục 0:** thêm spy mutation infrastructure và protocol serialization scan.
3. **Mục 18 → 1:** thêm data-driven zero-call matrix, ưu tiên tool có chuỗi import/publish/Web API phức tạp.
4. Sửa 85 MCP regression tests hoặc xác nhận/sửa production regressions tương ứng; chạy lại full MCP suite đến khi xanh.
5. Chạy workflow build/install CLI từ source sạch để manifest có `gitDirty=false` và commit đúng HEAD.
6. Restart Codex MCP connector; gọi `whoami`; đối chiếu live version, build, SHA và process start time.
7. Chỉ khi tất cả điều kiện trên đạt mới đổi kết luận vòng 4 thành **COMPLETE**.

# Definition of Done cuối cùng cho AI thực thi tiếp

- [ ] Không có mode token trong protocol trước invocation của toàn bộ 18 mutating tools.
- [ ] Mọi preview text bắt đầu `[DryRun]`; structured payload không tiết lộ mode.
- [ ] Mọi Dataverse mutation đi qua shared fail-closed boundary.
- [ ] Web API tuyệt đối không gửi token ra ngoài organization origin.
- [ ] Spy matrix chứng minh zero mutation calls cho mọi mutating action của 18 tool.
- [ ] Architecture/protocol leak tests chạy tự động trong CI.
- [ ] Focused tests và full MCP tests đều xanh.
- [ ] Build manifest được tạo từ clean HEAD.
- [ ] Live `whoami` khớp version/build/SHA và có processStartTime sau lần restart gần nhất.
