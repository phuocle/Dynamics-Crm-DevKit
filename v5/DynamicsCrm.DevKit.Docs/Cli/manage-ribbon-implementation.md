# Dialog xác nhận đầu vào cho `manage_ribbon`

Mục tiêu là cho người dùng **sửa và chốt một lần** toàn bộ giá trị AI hoặc người dùng đã cung cấp trước khi build ribbon. Dialog điền sẵn các field. **Confirm** chuyển bộ giá trị cuối cho AI lập lệnh triển khai. **Cancel** bỏ bản nháp. Mỗi lần xác nhận hợp lệ cho phép tối đa một lần backup/import và một yêu cầu PublishAll cho cả lô.

**Ngôn ngữ UI là tiếng Anh**, kể cả placeholder, validation, nút, thông báo lỗi, trạng thái chờ và văn bản trợ năng. Hiển thị nguyên văn dữ liệu nghiệp vụ của người dùng, ví dụ một nhãn ribbon tiếng Việt. Mở [bản HTML ngoại tuyến](manage-ribbon-review.html) để thử với `Label = Post`, `Description` trống và ba tham số đã chọn riêng cho mỗi hàm. Sau Confirm, JSON hiển thị là dữ liệu bàn giao mà AI sẽ nhận. Các tool/field được đánh dấu **mới** trong hướng dẫn này là phần cần triển khai.

## 1. Tách lần mở dialog khỏi lần triển khai

| Khi nào | Thành phần thực hiện | Kết quả |
|---|---|---|
| AI đã thu thập được thông tin | AI gọi tool mới `prepare_ribbon_inputs` một lần, truyền đích và draft. | Server trả dữ liệu cho dialog. Host MCP Apps đọc HTML resource và hiển thị ngay trong cuộc trò chuyện. |
| Người dùng chỉnh Label, Description, icon, hàm, tham số hoặc các mục menu | View cập nhật state cục bộ. | Sửa nhiều lần trong cùng dialog. Không lưu Dataverse, tạo RibbonDiffXml/ZIP, backup, import hay publish. |
| **Confirm** | View kiểm tra form, đóng băng snapshot và chuyển nó về chat bằng `app.sendMessage`. | Host chuyển lượt lại cho AI. View không gọi tool triển khai. |
| AI nhận snapshot đã duyệt | **AI** lập arguments và gọi **`manage_ribbon(action="update", …)` đúng một lần**. | Server kiểm chứng snapshot, build, backup, import và khởi chạy publish một lần. |
| **Cancel**, bỏ dở hoặc đóng dialog trước Confirm | View bỏ draft. | Không có snapshot được duyệt hay lệnh ghi. |

Đây là **hai lần gọi tool bởi AI** trên đường thành công. Việc mở một MCP App cần lần gọi nhẹ đầu tiên. `resources/read` và handshake giữa host/iframe thuộc giao thức hiển thị. Host cần hỗ trợ MCP Apps và gửi message từ View về chat. Nếu host thiếu UI, thiếu handoff hoặc từ chối gửi, hiển thị trạng thái thích hợp và dừng trước mutation. Việc host nhận message và việc Dataverse đã nhận lệnh là hai trạng thái riêng. [MCP Apps overview](https://apps.extensions.modelcontextprotocol.io/api/documents/overview.html) · [API gửi message](https://apps.extensions.modelcontextprotocol.io/api/classes/app.App.html#sendmessage)

## 2. Đọc đúng code và hợp đồng hiện hành

Đọc `AGENTS.md` ở `v5`. MCP server nằm trong CLI .NET 10, dùng C# SDK `ModelContextProtocol` 2.4.0, stdio, `WithToolsFromAssembly()` và `WithResourcesFromAssembly()`. `manage_ribbon` xử lý `list`, `buttons`, `detail`, `update` và `undo`. Tạo button là một `add_button` bên trong `update`. `operations` ở mức tool là **chuỗi chứa mảng JSON**. `ribbonxml` là đường khác cho XML inline/file, và `operations` có ưu tiên khi cùng được cung cấp. [MCP host](../../DynamicsCrm.DevKit.Cli/Mcp/McpServerHost.cs) · [Entry point](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageRibbonTool.cs) · [Hợp đồng operation](../../DynamicsCrm.DevKit.Cli/Mcp/Resources/Instructions/instructions_for_manage_ribbon.md)

Hiện tại khi tạo, code dùng **cùng một bộ `CrmParameter`** cho Click và Enable tại từng surface. Khi update, `RibbonJavaScript.UpdateHandlers` thay tên hàm, thư viện và dependencies. `functionSignatures` trong kết quả phản ánh XML đầu ra. Hai mảng tham số chỉnh được trên dialog sẽ cần hỗ trợ từ parser lẫn generator. [Button operations](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/Ribbon/RibbonButtonOperations.cs) · [Split và flyout](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/Ribbon/RibbonFlyoutOperations.cs) · [UpdateHandlers](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/Ribbon/RibbonJavaScript.cs) · [Function signatures](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/Ribbon/RibbonCore.cs)

## 3. Đăng ký tool chuẩn bị và resource

1. Thêm method `prepare_ribbon_inputs` (mới) vào entry class `ManageRibbonTool`, `[McpServerTool(ReadOnly = true)]`. Cho phép nhận dữ liệu còn thiếu để user điền vào dialog. Mang theo `env`, entity, loại operation, thứ tự batch, selector của object cần sửa và các giá trị thu từ cuộc trò chuyện. Phân giải đích theo `McpToolInvocation`. Với update, lấy các giá trị hiện hữu từ cơ chế chỉ đọc để điền cột tương ứng của draft. Giữ trạng thái “chưa biết” riêng với chuỗi trống/mảng rỗng, yêu cầu làm rõ selector nếu mơ hồ.
2. Gắn `[McpMeta("ui", JsonValue = """{"resourceUri":"ui://devkit/ribbon-inputs.html","visibility":["model"]}""")]` trên **prepare**. Đăng ký `[McpServerResourceType]` cho HTML resource và trả `contents[0]` với đúng URI, `mimeType="text/html;profile=mcp-app"`, `text` là HTML đã bundle. Thêm embedded resource trong csproj, thêm tên resource vào `ToolResourceMap[nameof(Tools.ManageRibbonTool)]`. Hai method cùng class để `DisabledToolSet` áp dụng đồng nhất. Tool ghi không gắn resource, nhờ đó lần gọi thứ hai sẽ không mở lại dialog. [Đặc tả resource, MIME và visibility](https://github.com/modelcontextprotocol/ext-apps/blob/main/specification/2026-01-26/apps.mdx) · [Project CLI](../../DynamicsCrm.DevKit.Cli/DynamicsCrm.DevKit.Cli.csproj)
3. Trả `content` ngắn, `structuredContent` có `status="awaiting_input"`, đích đã resolve, draft, khả năng sửa theo operation, giá trị có sẵn của hai handler, catalog OOB và mã draft. Lưu danh tính thực thi, org ID, entity, revision và thời hạn phía server, với lifecycle theo phiên MCP. Worker được tạo lại từng lần gọi nên không lưu trạng thái vào field của worker. Kiểm tra capability `extensions["io.modelcontextprotocol/ui"]` và MIME trước khi cấp dữ liệu riêng cho View.
4. **Prepare chỉ đọc.** `RibbonSolutionFetcher.FetchExistingRibbonDiffXml` có thể reset các solution component để export. `buttons` và `detail` chế độ thường cũng có nhánh đi qua đó. Tránh gọi chúng tự động khi hydrate form. Dùng `ReadRibbonWithoutMutation`/`RetrieveEntityRibbonRequest` với surface phù hợp và các truy vấn metadata/web resource chỉ đọc. Đọc JS để lấy gợi ý nếu có cơ chế phù hợp; giữ trường tên hàm cho phép nhập để xử lý hàm chưa nhận diện được. Không chạy JavaScript của web resource trong dialog. [Fetcher](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/Ribbon/RibbonSolutionFetcher.cs) · [Đường đọc ribbon](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/Ribbon/RibbonReadActions.cs)

## 4. Dựng một form cho toàn bộ dữ liệu đã capture

Dùng HTML review làm mẫu bố cục. Trong bản tích hợp, bỏ selector `Offline example` và fixture. Bundle SDK `@modelcontextprotocol/ext-apps` vào HTML, dùng CSP resource với danh sách domain trống khi đã bundle toàn bộ tài nguyên. Gắn `ontoolresult` và `ontoolcancelled` trước `await app.connect()`. Chỉ khởi tạo form từ kết quả đầy đủ của prepare. Thông báo input từng phần, resize hoặc reconnect không được ghi đè các giá trị user đang sửa hay tự xác nhận. Render nội dung người dùng dưới dạng text. [View quickstart](https://apps.extensions.modelcontextprotocol.io/api/documents/quickstart.html)

| Nhãn UI tiếng Anh | Nguồn / hành vi |
|---|---|
| `Label` | Textbox điền trước, ví dụ `Post`. `update_button` theo ID dùng `label` làm nhãn mới. Nếu selector là nhãn cũ, giữ selector và dùng `new_label` khi đổi tên. |
| `Description` | Textarea, ánh xạ `tooltip_description`. Khi thêm nút cho phép rỗng và bỏ key khỏi operation. Khi update, phân biệt giữ nguyên và xóa. Với field hiện chưa hỗ trợ clear, báo lỗi bằng tiếng Anh nếu người dùng xóa một giá trị đã có. |
| `Icon`, `Tooltip title`, `Sequence` | Điền resource name, tooltip và sequence. Cho mở các field phụ trong cùng form. Với add grid button, hiện thêm `Minimum selected rows`/`Maximum selected rows`. |
| `JS Function Enable` | Một tên hàm và library (`enable_function`, `enable_library`), một dropdown đa chọn `OOB parameters` **riêng**, ánh xạ sang `enable_parameters` (mới). |
| `JS Function Click` | Một tên hàm và library (`function`, `library`), một dropdown đa chọn `OOB parameters` **riêng**, ánh xạ sang `click_parameters` (mới). |
| `Dependency libraries` | Danh sách JS web resource nạp trước theo thứ tự. Quản lý riêng với các đối số truyền cho hàm. |
| `Confirm` / `Cancel` | Validate toàn bộ batch ngay trong dialog. Một lần Confirm áp dụng cho mọi operation/item theo chính thứ tự đã duyệt. |

- Dùng enum **`CrmParameterValue`** trong XSD làm nguồn tên hợp lệ. Dropdown phải hỗ trợ chọn, bỏ chọn, bỏ chọn tất cả và đổi thứ tự. In ngay danh sách theo thứ tự đối số. Khi đổi Enable, Click giữ lựa chọn riêng. Trên form mới, preselect cho **mỗi hàm** `PrimaryControl`, `PrimaryEntityTypeName`, `PrimaryItemIds`. Trên grid mới, lấy bộ mặc định hiện có gồm `SelectedControl`, `SelectedEntityTypeName`, `FirstSelectedItemId`, `SelectedControlSelectedItemIds`. Khi sửa, điền đúng danh sách hiện có của từng handler, kể cả `[]`. Một giá trị hợp lệ theo XSD có thể chỉ có ý nghĩa trên một số surface; dùng hướng dẫn theo ngữ cảnh. [Enum của repo](../../DynamicsCrm.DevKit.Shared/Resources/xsd/RibbonTypes.xsd) · [Microsoft Learn về ribbon parameters](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/pass-data-page-parameter-ribbon-actions)
- Đối với `add/update_split_button`, render cả handler của nút chính và từng item. Đối với `add/update_flyout_static`, anchor có field hiển thị, còn các handler nằm trên từng item. Giữ `item_label` làm selector khi đổi nhãn item. Bốn thao tác hide/show hiển thị đúng `button_id` hoặc đích flyout/item. Với XML/path, resolve nội dung một lần, cho người dùng duyệt XML và ghim các byte đã duyệt. Mở lại file sau xác nhận có thể lấy nhầm phiên bản.
- Với batch, giữ tất cả operation trong một form; một lỗi cần focus đúng field và giữ toàn bộ nội dung đã nhập. Mở nhóm đang thu gọn khi báo lỗi. Trường bắt buộc, văn bản trợ năng, kết quả validation và fallback đều dùng tiếng Anh.

## 5. Bổ sung hai mảng OOB vào đường build XML

1. Thêm `click_parameters` và `enable_parameters` dạng `string[]` vào tài liệu/schema/parser các operation có handler. Áp dụng cho button, main action của split button và từng item của split/static flyout. Nếu thêm ở UI mà quên parser/generator, CLI hiện tại có thể bỏ qua field lạ và vẫn dựng bộ tham số mặc định.
2. Khi **create**, field vắng → dùng default theo surface như code hiện tại. Khi **update**, field vắng → bảo toàn XML của handler đó. Với cả hai, `[]` → zero arguments, mảng tường minh → ghi theo đúng thứ tự, kể cả khi hai handler khác nhau. Từ chối phần tử không hợp lệ, sai case, trùng hoặc có kiểu khác chuỗi. Không tạo thêm `CrmParameter` từ `dependency_libraries`.
3. Tái sử dụng logic cho button, split và menu item. Đưa `click_parameters` vào `CommandDefinition/Actions/JavaScriptFunction` thật, `enable_parameters` vào `EnableRule/CustomRule` thật. Nhận diện và giữ nguyên `isNaN` dependency preload, selection rule và các phần tử không liên quan. Đối với handler cũ có tham số hỗn hợp (ví dụ `StringParameter` bên cạnh `CrmParameter`), hiển thị kiểu/thứ tự và chặn sửa danh sách bằng picker OOB nếu chưa bảo toàn được toàn bộ chữ ký. Không nuốt một tham số không biểu diễn được.
4. Cho phép **update chỉ thay thứ tự/tham số** được tính là thay đổi hợp lệ kể cả ở từng item. Handler mục tiêu bị thiếu phải có lỗi rõ. Kiểm tra `functionSignatures` trả đúng `parameters` theo thứ tự và `parameterCount` cho cả hai role. [Logic đang đồng bộ handler](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/Ribbon/RibbonJavaScript.cs) · [Test hiện tại](../../DynamicsCrm.DevKit.Cli.UnitTests/Cli/Mcp/ManageRibbon/ManageRibbonToolTests.cs)

## 6. Chuyển đúng snapshot sau Confirm cho AI

Snapshot là dữ liệu có kiểu. Trong ví dụ, người dùng đã bỏ bớt đối số của Enable và đổi thứ tự Click. Khi bỏ trống Description trên create, `tooltip_description` được lược đi.

```json
{
  "action": "update",
  "env": "sales-sandbox",
  "entity_name": "account",
  "operations": [{
    "action": "add_button",
    "surface": "form",
    "label": "Post",
    "modern_image": "demo_/icons/post.svg",
    "sequence": 85,
    "enable_library": "demo_/rules.js",
    "enable_function": "Sales.canPost",
    "enable_parameters": ["PrimaryControl", "UserLcid"],
    "library": "demo_/post.js",
    "function": "Sales.post",
    "click_parameters": ["PrimaryEntityTypeName", "PrimaryControl", "PrimaryItemIds"]
  }]
}
```

Để chỉ cần hai lần gọi tool và vẫn phát hiện AI gửi sai giá trị, có thể triển khai **biên nhận** như sau. Đây là thiết kế nội bộ của DevKit, MCP Apps chỉ cung cấp kênh vận chuyển.

1. Lúc prepare, sinh một khóa ngẫu nhiên dùng riêng cho draft/revision. Trả khóa chỉ trong `CallToolResult._meta` cho View trên host tin cậy tách metadata khỏi model. Server giữ khóa gắn với phiên, org, người thực thi và TTL. Giữ nó ngoài log, chat và structured content. Host không đáp ứng điều kiện này thì chỉ có thể hiển thị draft.
2. Sau Confirm, serialize snapshot một lần thành UTF-8, mã hóa base64url và ký các byte đó bằng HMAC-SHA-256/Web Crypto với khóa riêng của draft. Biên nhận gồm `draftId`, `snapshot` (các byte đã mã hóa), `mac`. Khóa ngẫu nhiên riêng từng draft giúp ràng buộc biên nhận vào draft. Tên trường `input_confirmation` bên dưới là bổ sung cho hợp đồng hiện tại. AI chỉ chuyển biên nhận, không có khóa để thay nội dung đã chốt.
3. Trong handler bấm Confirm, gửi dữ liệu cùng biên nhận cho AI. Các helper sau là pseudocode của View. Kiểm tra `isError` và lỗi bridge. `updateModelContext` đơn lẻ chỉ cập nhật context cho lượt sau. Một `sendMessage` chứa toàn bộ payload nhỏ sẽ chuyển giao trong cùng một message. Với payload lớn, truyền qua context theo giới hạn host rồi gửi message có `draftId` tương ứng. Nếu host chỉ đưa tin vào ô soạn, báo `Ready to send in chat` cho đến khi người dùng gửi. [API sendMessage](https://apps.extensions.modelcontextprotocol.io/api/classes/app.App.html#sendmessage) · [Mẫu handoff của MCP Apps](https://apps.extensions.modelcontextprotocol.io/api/documents/patterns.html)

```js
// Only in the Confirm click handler, after validating every visible and collapsed field.
const approved = collectFinalValues();
const input_confirmation = await signSnapshot(draft, approved);
const handoff = { approved, input_confirmation };
const result = await app.sendMessage({
  role: "user",
  content: [{ type: "text", text:
    "I confirm these ribbon settings. Call manage_ribbon once using this exact snapshot.\n" +
    JSON.stringify(handoff) }]
});
if (result.isError) showHandoffError();
```

4. **Phía AI**, sao chép `action`, `entity_name`, `env`, `input_confirmation` và đặt `operations = JSON.stringify(approved.operations)` đúng một lần ở tool level. Với raw XML, truyền `ribbonxml` đã đóng băng. Không điền lại các field bị lược, sắp xếp mảng hay suy diễn tham số khi tạo lần gọi. Lần `manage_ribbon` này nhận biên nhận nên đi thẳng tới bước kiểm chứng và thực thi. **Cancel** xóa state/khóa phía View, bỏ draft phía server khi hết TTL, không gửi handoff. Đóng hoặc reload không tự ký lại.

## 7. Kiểm chứng và thực thi một lần

1. Chặn **mọi** `manage_ribbon(action="update")` thiếu biên nhận hợp lệ trong MCP, kể cả raw XML và caller chỉ text. Hướng dẫn AI mở `prepare_ribbon_inputs`. Giữ `list/buttons/detail/undo` và hợp đồng dry-run hiện tại. Với dry-run, trả `not_executed` theo guard hiện hành và không cấp quyền apply. Ghi rõ thay đổi tương thích cho client từng gọi ghi trực tiếp.
2. Xác minh HMAC trên byte snapshot gốc, TTL, revision, phiên, org/identity, entity và workspace. Parse arguments AI gửi và đối chiếu với snapshot đã xác thực. Bỏ qua thứ tự key trong object, so nghiêm ngặt thứ tự mảng, kiểu, giá trị, absent so với `[]`. Từ chối input thừa/mâu thuẫn hoặc resolver trả về đích khác. Nếu file/XML hoặc resource liên quan thay đổi, dùng nội dung đã ghim hoặc yêu cầu review lại. Recheck quyền System Administrator, busy gate và dry-run trước ghi. [Routing theo environment](../../DynamicsCrm.DevKit.Cli/Mcp/McpToolInvocation.cs)
3. Chuyển trạng thái biên nhận sang `applying` bằng thao tác nguyên tử trước khi bắt đầu đường build có side effect. Khóa theo org cho các thao tác dùng chung solution `devkit_ribbon`. So lại target/baseline khi update và chạy validation trên toàn bộ batch trước import. Một double-click, message gửi trùng hay tool retry phải trả trạng thái/kết quả của cùng lần gọi. Trong trường hợp mất kết nối hoặc server restart sau khi gửi import, đối chiếu backup/job trước khi cho phép triển khai lại. Không suy ra “chưa chạy” từ một timeout.
4. Tái sử dụng backup `.devkit/manage_ribbon/{entity}/`, build ZIP, `SolutionImportHelper.Import` và `PublishHelper.PublishAllAsync`. Trả nguyên các trường `backupPath`, `asyncOperationId`, `status`, `needsWait` và hướng dẫn chờ. `publish_in_progress` nghĩa là job đã được khởi chạy. AI theo `get_system_jobs` với lịch 30/60/120 giây, chỉ đọc lại khi job thành công, dừng sau lần thứ ba nếu chưa xác minh được. [Mutation pipeline](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/Ribbon/RibbonMutateActions.cs)

## 8. Kiểm thử và bàn giao

| Ca kiểm thử | Bằng chứng nghiệm thu |
|---|---|
| Mở dialog | Mock host thấy metadata trên prepare, đọc đúng URI/MIME từ CLI đóng gói. Label là `Post`, Description trống, hai picker độc lập có ba giá trị form mặc định. Toàn bộ UI/aria/errors bằng tiếng Anh. |
| Chỉnh và hủy | Sửa text/icon/library/function, thêm/bỏ/đổi thứ tự ở Enable, bỏ hết Click. Cancel/close trước Confirm ⇒ 0 handoff, 0 build/backup/import/publish, 0 reset solution. Kiểm tra cả trường hợp solution đã tồn tại. |
| Handoff và build | Chỉ Confirm tạo một message với snapshot sau chỉnh sửa. Fake AI dùng snapshot để gọi tool. Assert XML và `functionSignatures` đúng từng role/thứ tự, kể cả `[]`. Một batch ⇒ một import và một PublishAll. |
| Phạm vi operation | Button, split main, từng item, static flyout, hide/show, multi-operation, inline XML và file thay sau review. Test defaults form/grid khi create, bỏ field khi update, đổi chỉ tham số, kiểu không hợp lệ, không thay nhầm dependency preload. |
| Độ tin cậy | Thiếu/sai biên nhận, AI sửa payload, sai org/phiên, dry-run, expired draft, request song song, replay sau timeout. Mất bridge hoặc host không chuyển message ⇒ báo trạng thái trung thực, không tự triển khai. Test read/undo và text result cũ. |
| UI thực tế | Harness MCP Apps với service giả: screenshot màn nhỏ/rộng, điều khiển bàn phím, kiểm tra JSON sau Confirm, không có call khi Cancel. Bàn giao live MCP cho AI phụ trách khi được yêu cầu. |

Tại `v5`, sau khi **triển khai code**, cập nhật `docs://instructions_for_manage_ribbon` và mô tả tool để AI luôn mở form trước rồi dùng nguyên snapshot. Đọc đầy đủ skill CLI release và shared skill trước bước release. Kiểm tra resource nhúng trong artifact, phiên bản CLI đã cài và build-date placeholder sau khi chạy. [Skill CLI release](../../.agents/skills/devkit-skill-build-release-cli/SKILL.md) · [Kịch bản test MCP](../TestAllMcpCall/36.manage_ribbon.md)

```powershell
dotnet build DynamicsCrm.DevKit.Cli/DynamicsCrm.DevKit.Cli.csproj
dotnet test DynamicsCrm.DevKit.Cli.UnitTests/DynamicsCrm.DevKit.Cli.UnitTests.csproj --framework net10.0 --filter "FullyQualifiedName~Ribbon|FullyQualifiedName~McpServerHost"
& ./.agents/skills/devkit-skill-shared/scripts/Release.DynamicsCrm.DevKit.Cli.ps1 -Configuration Release
```
