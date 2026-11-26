# DataverseTest — đặc tả triển khai cho DevKit CLI

**Trạng thái ngày 25/11/2026.** Đây là thiết kế để aP duyệt. Yêu cầu đã xác định là thêm template project và item dùng DataverseFakes.Community, cho chạy song song với bộ hiện hành, làm CLI trước. Tên `DataverseTest`, cách đóng gói, lựa chọn version và hợp đồng dưới đây là đề xuất triển khai. Xem [bản review cho aP](dataverse-test-review.html).

**Kết quả sau triển khai.** CLI và VSIX 2026 dùng chung catalog, payload và `DataverseTest.tt` từ Shared. VSIX hiển thị project 14 và item 17. Phần mô tả các giai đoạn dưới đây ghi lại thứ tự triển khai ban đầu.

## 1. Kết quả người dùng phải nhận được

Một solution đang dùng `Shared`, `Server`, `ProxyTypes` có thể thêm **một project test tự chứa** và sinh test cho class server ngay từ CLI. Người dùng có thể giữ cả `SharedTest`, project `Test` và các item `Test` cũ trong cùng solution. Chỉ thêm hai cặp khóa catalog `(Project, DataverseTest)` và `(Item, DataverseTest)`. Không cần dựng một shared test project thứ hai. Đây là tính năng tạo mới, không phải lệnh migrate hoặc đổi mặc định.

Ví dụ nghiệm thu **sau khi implement**, chạy từ thư mục solution mẫu có kết nối CLI hợp lệ và class public ở dưới. Hai lệnh đầu là các lệnh catalog đang có.

```powershell
devkit new-project list
devkit new-item list
devkit new-project --type DataverseTest --name Contoso.DataverseTests --solution .\Contoso.slnx
devkit new-item --type DataverseTest --project Contoso.DataverseTests --test-target Contoso.Server.Account.PreAccountUpdate
dotnet test .\Contoso.DataverseTests\Contoso.DataverseTests.csproj --logger trx
```

- Lệnh tạo project đi qua `NewProjectCommand.IsValidAsync → base.IsValidAsync`. Lệnh tạo item đi qua `NewItemCommand.IsValidAsync → ConnectAsync`. Cả hai kết nối trước khi task chạy. `list` bỏ qua kết nối. Các bài MSTest sinh ra chạy in-memory, có thể chạy sau restore khi máy không kết nối Dataverse. Không thêm `--offline`, `--force` hay khôi phục cú pháp `devkit new --kind ...`.
- Ở terminal không tương tác, project nhận `--type`, `--name`, `--solution`; item nhận `--type`, `--project` (tên project) và target theo §4. Giữ kiểu gom các đối số thiếu, lỗi/exit code hiện có. Trong terminal tương tác dùng picker hiện tại và gợi ý `<Solution>.DataverseTests`. Người dùng có thể đổi tên.
- Giới hạn thay đổi của đợt này là CLI và phần scaffolding nó dùng. Không cập nhật wizard/VSIX 2019 hoặc 2026, `.vstemplate`, các thư mục 07/09, `Test.tt`, MCP, test UI hoặc chuyển các test nội bộ DevKit sang framework mới. Chỉ mở công việc VSIX sau §7.

## 2. Cơ sở để ra quyết định

Đọc source làm việc của v5 tại `ca357c9cb` và Union Management tại `9a7926d`. Quét source và cấu hình project của hai cây, lần theo entry point, resource nhúng, T4, assembly được sinh, cả hai nhánh wizard và test gọi chúng. Bốn đầu vào nằm ở `E:\src\azure\Union-Management\Abiz.UnionManagement.Docs`.

| Đầu vào | Điều giữ lại sau đối chiếu | Điều phải sửa khi áp dụng vào CLI |
|---|---|---|
| `UnitTest-Framework-Proposal-Test2.html` | Tách engine khỏi test nghiệp vụ. Để suite cũ và mới chạy song song. | `ab_debug_context`, quy ước depth, tên bảng và quy tắc đoàn phí là của Union. MIT là giấy phép của package engine; các dependency có giấy phép riêng. |
| `AI-Implementation-Plan-Server-Test2.md` | Cây `Server.Test2/Framework`, import Shared, reference Server + ProxyTypes, builder và giả lập dữ liệu là ví dụ chạy được. | Không copy namespace, dữ liệu nghiệp vụ, helper theo schema hay kế hoạch chuyển từng test Union. Dùng test thực ở checkout thay cho số lượng dự tính trong kế hoạch. |
| `DevKit-v5-TestTemplate-Review.html` | Phân biệt plugin, workflow, action, API và provider. Nhận diện quan hệ giữa manifest, payload, T4 và host. | Đề xuất cũ đổi đồng thời CLI/VSIX và thay trực tiếp 07/09. Ở đây tạo hai ID và resource độc lập. |
| `DevKit-v5-TestTemplate-AI-Plan.md` | Harness cho CLI cần kiểm tra resource đóng gói, render, build và chạy output. Có thể dùng kiểu adapter cho trace, seed và image. | Không xóa executor cũ, không thay assertion legacy thành assertion mới. Số 142 và coverage 97,4% trong tài liệu không phải kết quả của template CLI. |

**Đã chạy trên bản sao source Union.** Trên Windows, restore/build rồi chạy `dotnet test` riêng từng csproj net462. TRX của `Abiz.UnionManagement.Server.Test` ghi 158/158 pass; `Abiz.UnionManagement.Server.Test2` ghi 159/159 pass, cả hai 0 fail, 0 skip. Build có warning analyzer. Không đo coverage ở lần này. `Abiz.UnionManagement.slnx` có cả hai csproj. `UnionFee/UnionFeeCreatePipelineTest.cs` gọi tuần tự ba `RunPlugin`, tự seed giữa các bước. Kết quả đó không xác nhận step tự chạy khi gọi CRUD.

**Package đã đối chiếu.** Bản NuGet 1.3.2 khai báo MIT, có asset `net462`, `net48`, `net10.0`. Asset net462 dùng FakeItEasy và họ Microsoft.CrmSdk (CoreAssemblies/Workflow từ 9.0.2.60). `ExecuteCodeActivity` cần .NET Framework. XML docs của DLL net462 mô tả `Initialize(IEnumerable<Entity>)` chỉ gọi một lần trên mỗi context; executor rollup dùng giá trị nạp sẵn. CLI net10 chỉ sinh mã. Chỉ project test sinh ra tham chiếu engine. [NuGet 1.3.2](https://www.nuget.org/packages/DataverseFakes.Community/1.3.2)

Hai chi tiết dễ bỏ sót khi chuyển bản kế hoạch cũ sang code:

- Comment cuối `TestItemTemplateHandler.cs` ghi “no BOM”, trong khi writer dùng UTF-8 có BOM và `TestItemTemplateHandlerTests` assert ba byte `EF BB BF`. Giữ baseline theo bytes và test thực. Đề xuất item mới cũng dùng UTF-8 BOM, ghi rõ trong golden riêng; phần thụt dòng của T4 cũ thuộc legacy.
- `ProjectTemplates/CSharp/01.SharedProjectTemplate/DevKitJson.cs` khai báo lớp trong `Microsoft.Xrm.Sdk`. Namespace production Shared cần cho wrapper/extension. Không thêm `using $SharedNameSpace chỉ để resolve `DevKitJson` như AI plan cũ gợi ý.

## 3. Project mới và quan hệ giữa các assembly

```text
Contoso.DataverseTests/
  Contoso.DataverseTests.csproj      → ProjectReference: Server + ProxyTypes
                                           → Import: Shared.projitems
  Framework/
    PluginTestBase.cs                      → API cho test, giữ engine private
    PluginRunBuilder.cs                    → dựng input, target, image và thực thi
    PluginRegistrationInfo.cs              → đọc metadata trong assembly Server
    PluginExecutionDescriptor.cs           → mô tả context bằng kiểu SDK
  README.md                                → ví dụ AAA và cách chạy
  PreAccountUpdateTest.cs                  ← new-item sinh sau
```

1. Project test dạng SDK, `net462`, `x64`, `IsTestProject=true`, binding redirects như project test chạy được. Output release theo tên project hoặc `bin/Release` để hai project test không ghi chung một thư mục. Giữ source version DevKit `4.44.44.44`. Thêm property riêng `<DevKitTestFramework>DataverseFakes.Community</DevKitTestFramework>` làm dấu nhận dạng cho item mới. Đề xuất ghi version engine `1.3.2` trong riêng payload mới, kiểm tra version restore trong assets. Các token MSTest và SDK đã có vẫn dùng qua `TokenEngine`; kiểm tra runner thật ở §7. Không cần thêm vào danh mục preload toàn cục hay VSIX Replacement. Chỉ thêm package phụ khi mã sinh dùng nó.
2. Trong solution đã chỉ định, lấy đúng Server để test. Ưu tiên Server theo tên `<Solution>.Server`; nếu tên khác, tìm duy nhất project server phù hợp với cấu trúc DevKit (project plugin net462 import Shared, có assembly server). Khi có nhiều ứng viên ngang nhau, cho picker chọn, còn CLI không tương tác nhận **tùy chọn mới đề xuất** `--server-project <đường-dẫn.csproj>`, tương đối với solution hoặc tuyệt đối. Tham số tường minh thắng quy ước. Kiểm tra thuộc solution, đúng loại và khác project đích. Nếu thiếu hoặc mơ hồ, liệt kê đường dẫn ứng viên và cách chọn; không dùng `FirstOrDefault` trên toàn cây để đoán.
3. Từ project Server đã chọn, theo `Import` tới **production Shared.projitems**, ghép đúng `.shproj` tương ứng; phân giải ProxyTypes theo convention trong solution và kiểm tra marker `ProxyTypesAssembly` của template 08. Lấy namespace thật của Shared/ProxyTypes (projitems, csproj và source marker khi cần) thay vì suy từ tên test. `WorkspaceScanner.FindSharedProjectFile` có fallback shproj đường dẫn ngắn nhất, có thể trúng Shared.Test. Chỉ công nhận đường dẫn/kiểu đã xác minh. Tạo hai `ProjectReference` trực tiếp và một `Import` bằng path tương đối từ csproj đích, kể cả khi source nằm trong thư mục lồng hoặc có dấu cách. Escape XML. Không import `Shared.Test.projitems`.
4. Dùng `SolutionMutator.AddProjectToSolutionAsync` sau khi render thành công, truyền production Shared shproj làm shared consumer cho `.sln`; với `.slnx` thêm đúng một project. Tính một đường dẫn đích duy nhất cho preflight, render và đăng ký (mặc định cạnh solution, `--out` tường minh là thư mục cha). Engine hiện kiểm tra thư mục theo output còn một số handler cũ ghi theo `workspace.SolutionDirectory`; đừng lặp lại sự khác nhau này. Validate tài nguyên, reference và tên trước khi tạo file. Từ chối project đã tồn tại, kể cả khi người dùng gõ tên project legacy. Khi lỗi giữa chừng, báo file đã tạo; nếu dùng thư mục staging riêng chỉ dọn phần do chính lần chạy tạo.
5. `PluginTestBase` nằm trong `<RootNamespace>.Framework` của **test project**. `typeof(<ProxyNamespace>.ProxyTypesAssembly).Assembly` trỏ đúng assembly early-bound. `EntityBase` là `internal` từ Shared nhập vào test, các overload dùng nó cũng phải `internal` hoặc ít mở hơn. Server và Test cùng biên dịch Shared vào hai assembly; đọc attribute trên `typeof(TPlugin)` qua metadata (kiểm tên/shape, enum theo giá trị), không cast sang bản attribute của test assembly. Không xử lý xung đột type bằng thêm tham chiếu legacy.

## 4. Item mới và hành vi tại terminal

- Chỉ nhận csproj có marker mới cùng dependency/framework tương thích. Đưa tên project hiện tại vào lỗi khi trỏ nhầm project `Test`, `Shared.Test` hoặc project server. Với project tự viết có engine nhưng thiếu marker, trả hướng dẫn về project sinh bởi template. Đừng tự sửa csproj để cài engine khi thêm item.
- Dùng `PluginTestDiscovery.GetTestCandidatesAsync` cho picker và `GetAllTestCandidatesAsync` khi người dùng có `--test-target`. Source scan theo các thư mục `ProjectReference`, lọc abstract, nhận cả `IPlugin` và `CodeActivity`; registration không bắt buộc để lọt danh sách. Kiểm tra khả năng truy cập/khởi tạo trước khi sinh code có typed alias. Không dùng tên class ngắn để chọn giữa hai namespace. Dùng full name để chọn và hiển thị; hỗ trợ hai plugin cùng tên ở hai thư mục test khác nhau, tránh việc lọc tên ngắn của legacy làm mất ứng viên còn lại.
- Nếu danh sách có ứng viên, mặc định lấy tên class từ target. Thiếu target trong chế độ không tương tác báo lỗi; target sai báo lỗi kể cả scan rỗng. Cho phép `--name` trên scan rỗng để tạo khung AAA có `Assert.Inconclusive(...)` và hướng dẫn bổ sung reference/target. Test khung chưa thực thi không được tính vào tiêu chí pass. Rerun item hợp lệ cùng đường dẫn có kết quả `Skipped`, byte file người dùng không đổi. Khi hai target khác nhau cùng ra một file, báo trùng, hướng dẫn dùng `--name` hoặc thư mục khác.
- Chỉ bỏ một hậu tố `Test` như luồng hiện tại. Dùng cùng `ClassWithOrder` cho tên file **và tên class** (`--order 2` → `PreAccountUpdate2Test.cs` và `PreAccountUpdate2Test`). Namespace item lấy theo project/thư mục hoặc `--namespace`; import facade từ **RootNamespace csproj** kể cả khi namespace item bị override. `--out` của item phải nằm trong project đích. Kiểm tra tên class C# hợp lệ và xử lý folder không hợp lệ trước khi ghi.
- Một T4 riêng cho `DataverseTest`. Mặc định dùng built-in mới. `--t4` chỉ file, hoặc `--template` tra `CustomTemplates` với `Type = "DataverseTest"`; không dùng custom template `Type = "Test"`. Cùng chỉ hai nguồn custom thì lỗi. Resolver hiện có thể fallback về default khi không tìm thấy title; với ID mới, kiểm tra title và báo lỗi trước. Bổ sung context cho namespace facade, target thực, loại component và khả năng sinh guard. Handler legacy xóa `TestTarget` cho non-guard; ở template mới giữ target và tách điều kiện guard. Dùng `MonoTextTransformer` thật và kiểm tra bytes output UTF-8 của chính template mới.

### Hành vi cho năm loại server

| Target tìm thấy | Hành vi của item mới | Fixture bắt buộc để nhận tính năng |
|---|---|---|
| Plugin theo `Plugin.tt` | Khi nhận ra đúng bốn guard và một registration khớp, sinh `_00` kiểm tra từng exception/message. Các plugin tự viết có thể dùng descriptor tường minh. | Plugin chạy `Execute(IServiceProvider)` qua `GetExecutionContext7()`; kiểm thử sai stage/message/entity/mode và một thay đổi Target hoặc service quan sát được. |
| Workflow | Nhận `CodeActivity` kể cả có lớp cơ sở; dùng adapter workflow trên net462 và dictionary input/output. | Activity có InArgument/OutArgument, chạy qua `ExecuteCodeActivity`, đọc được kết quả. |
| CustomAction | Đọc metadata action bound/unbound; map input/output của message. Chỉ khẳng định guard mà code của target thực sự có. | Action dùng tham số nghiệp vụ, assert output hoặc tác động service; có case không ràng buộc entity. |
| CustomApi | Xử lý constructor registration riêng của API; chuẩn bị output key nếu template đích chỉ gán khi key có sẵn. | Một API đọc input, ghi output. Item không vô tình chạy bốn guard dành cho plugin chuẩn. |
| DataProvider | Nhận năm class thao tác Create, Retrieve, Update, Delete, RetrieveMultiple; adapter cấp `IEntityDataSourceRetrieverService` và SDK parameter đúng với thao tác. | Compile cả năm; chạy từng thao tác với fixture tối thiểu. Ví dụ Retrieve đọc Target kiểu EntityReference và trả BusinessEntity; RetrieveMultiple nhận Query và trả BusinessEntityCollection. |

Không thể suy ra logic nghiệp vụ hoặc giá trị kỳ vọng từ tên class. Nếu chưa có case xác định cho target cụ thể, sinh skeleton theo loại, kèm AAA và `Assert.Inconclusive`. Fixture nghiệm thu phải bổ sung dữ liệu công khai và assertion có tác dụng, chạy engine thật. Nếu metadata mơ hồ (vd. nhiều registration) yêu cầu chọn registration rõ ràng ở helper, hoặc dùng descriptor tường minh; không tự chọn step đầu rồi khẳng định đã bao phủ các step.

## 5. Hợp đồng runtime của code được sinh

| API đề xuất trong project test | Điều phải chứng minh |
|---|---|
| `Seed`, `Service`, `Query<T>`, `GetRecord<T>` | Một context cho mỗi test. Seed hai lần giữ cả hai batch; xác định quy tắc trùng (logical name, Id) là thay dữ liệu fixture. Seed không kích hoạt plugin pipeline. Bảo toàn ID và SDK values; dùng primary ID thật/metadata khi cần (vd. task dùng activityid). Không gán cứng logicalName + “id”. Test sửa Money/lookup/image sau seed không làm đổi snapshot. |
| `RunPlugin<T>()`, `WithTarget`, `WithTargetReference`, `WithPreImage`, `WithPostImage`, `Execute()` | Target sống cho pre-operation, images là snapshot riêng. Xử lý Entity/EntityReference và bulk `Targets` qua InputParameters; phản hồi OutputParameters và SharedVariables sau execute. Kiểm alias và loại Pre/Post/Both của Image1…4 khi có registration. Hai registration cần lỗi chọn không hợp lệ rõ ràng và test đúng từng step. |
| `AssertStandardPluginGuards<T>` | Lấy message, stage, entity, mode từ registration đúng. Đổi từng trường độc lập, giữ các trường còn lại hợp lệ, assert đúng loại lỗi và thông báo như `Plugin.tt`. Stage và mode là enum của DevKit. Không thêm guard Depth=6 cho tất cả plugin; `WithDepth` dành cho plugin có quy ước riêng. |
| Replay JSON/chuỗi nén | Đọc format thật của `Shared/Extension.DebugContext` và `Microsoft.Xrm.Sdk.DevKitJson` trong template 01. Dùng `DeserializeContext7` cho snapshot DevKit; thử thêm `RemoteExecutionContext` JSON cũ nếu hỗ trợ. Dùng lại Deflate/Base64 có sẵn. Kiểm parent khi có, IDs, stage/mode/depth, input/output/shared vars, ảnh và giá trị SDK có kiểu. Seed riêng dữ liệu DB cần cho replay; snapshot rút gọn có thể thiếu parent. Fixture sai JSON/Base64 cần lỗi dễ dò. |
| `ExecuteWorkflow<T>`, `SetDataSource`, `MockRequest<TRequest>` | Dùng API thực từ asset net462 của 1.3.2 (ExecuteCodeActivity, EntityDataSourceRetriever, AddExecutionMock). Giữ chữ ký dùng SDK/.NET cho người viết test. Mock có hiệu lực trong đúng context. Rollup mặc định đọc giá trị đã seed; test quy tắc tổng hợp phải khai báo fixture/mock tính ra giá trị mong đợi. |
| Pipeline khi bật mô phỏng | Mặc định chạy plugin đơn lẻ. Để kiểm tra tự chạy, đăng ký step với stage/mode/rank/filter, bật `UsePipelineSimulation`, gọi service Create/Update rồi assert step và dữ liệu bị tác động; không gọi plugin thủ công trong case này. Gọi tuần tự theo kiểu Union là một test độc lập. Không diễn giải mô phỏng async thành kiểm chứng scheduler Dataverse thật. |

Ví dụ đọc output đã sinh cho test trước cập nhật. `AssertStandardPluginGuards` là API đề xuất; class bên phải alias phải tồn tại trong project Server được tham chiếu.

```csharp
using Contoso.DataverseTests.Framework;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using TargetPlugin = Contoso.Server.Account.PreAccountUpdate;

namespace Contoso.DataverseTests
{
    [TestClass]
    public class PreAccountUpdateTest : PluginTestBase
    {
        [TestMethod]
        public void PreAccountUpdateTest_00()
        {
            AssertStandardPluginGuards<TargetPlugin>();
        }
    }
}
```

## 6. Thứ tự sửa source khi được giao code

1. **Khóa baseline.** Đọc `AGENTS.md`, `DynamicsCrm.DevKit.Cli/Program.cs`, `Commands/{NewProjectCommand,NewItemCommand,DevKitCommand}.cs`, `Tasks/TaskNew*.cs` và test trong `DynamicsCrm.DevKit.Cli.UnitTests/{Templates,Cli/Commands,Cli/Interactive}`. Lưu output legacy tiêu biểu từ binary baseline trong thư mục tạm với token, clock và input cố định. `ScaffoldingEngineTests` đang khóa 30 descriptor (13 project, 17 item). Đừng sửa test nội dung legacy để làm suite xanh.
2. **Đăng ký hai mục trong catalog dùng chung.** `TemplateCatalog.Find/OfKind/All` được cả list, picker và hai hàm Scaffold dùng. Thêm descriptor project và item, dùng cùng `TemplateCatalog.DataverseTestId`, và đăng ký các handler trong `Shared/Templates/Handlers/TemplateHandlers.cs`. CLI và VSIX 2026 import cùng `.projitems` với các payload DataverseTest. Đặt enum mới ở cuối để giữ numeric value cũ. Cập nhật mô tả ngắn trong `TaskNewShared.CatalogDescription`. Chạy catalog ở chế độ plain và rich để kiểm tra 32 descriptor cùng ID, kind và order của các mục hiện có.
3. **Dùng chung source template.** `ProjectTemplates/CSharp/14.DataverseTestProjectTemplate/` chứa `ProjectTemplate.csproj.template`, README và bốn file C# ở thư mục gốc. Manifest chép bốn file C# vào `Framework/` của project sinh ra. `DynamicsCrm.DevKit.Shared/Resources/tt/DataverseTest.tt` nằm cạnh `Test.tt`. Hai handler nằm trong `Shared/Templates/Handlers`, còn prompt Spectre nằm trong các task CLI. `DynamicsCrm.DevKit.Shared.projitems` nhúng đúng sáu file payload và T4 vào assembly CLI ở đợt này. Khi làm VSIX, dùng cùng source payload cho `.vstemplate` và đối chiếu các API handler với runtime .NET Framework 4.8.
4. **Nối project handler rồi item handler.** Dựa trên `WorkspaceScanner`, `ScaffoldingEngine`, `SolutionMutator`, `TokenEngine` cho §3; giữ tùy chọn server và token mở rộng ở nhánh mới. Nối `NewProjectCommandArgs`/input và `TaskNewProject`. Với item, cập nhật gate ở đầu **và** nhánh prompt/dispatch của `TaskNewItem`, tránh prompt entity chung. Dùng `PluginTestDiscovery`, `T4TemplateResolver`, `T4ContextFactory`, `Models/T4Context.cs`, transformer hiện có. Dùng thuộc tính bổ sung cho kind/target đã xác nhận, bảo toàn kết quả discovery của item Test legacy. Loại component lấy từ kế thừa và overload/named property `PluginType` của attribute DevKit. Không lấy hai string đầu của mọi constructor làm message và entity. Giữ entry point công khai cũ.
5. **Viết runtime và test theo lát cắt.** Bắt đầu với Shared + ProxyTypes + Server + một plugin thật + project test + item, chạy được trước khi mở rộng workflow/action/API/provider/trace. Đối chiếu `01.SharedProjectTemplate/{EntityBase,PluginCore,Extension,DevKitJson}.cs`, `08.ProxyTypesProjectTemplate/ProxyTypesAssembly.cs`, các T4 trong `Shared/Resources/tt/` và `Server.Test2/Framework`. Mỗi API quảng bá cần một test chạy; không copy helper không dùng, fixture Union, key `ab_*` hoặc assertion `Assert.IsTrue(true)` vào template.

## 7. Kiểm chứng CLI và điều kiện mở VSIX

| Cổng | Bằng chứng phải lưu từ lần triển khai |
|---|---|
| Catalog, command và lỗi | List/picker nhận đúng hai ID, flow tương tác và không tương tác đi cùng handler. Test thiếu/sai solution, server mơ hồ, thiếu Shared/ProxyTypes, sai project item, target lạ và custom T4 lỗi. Lỗi không ghi đè hoặc thêm entry solution. |
| Project thật trong hai loại solution | Sinh trên `.sln` và `.slnx`, có cả legacy và mới, dùng tên tùy biến/thư mục lồng. Parse XML, kiểm reference thực, đúng một import sản xuất; project cũ vẫn build. Thử gọi lại, hai đích khác nhau, xung đột tên và đường dẫn. Kiểm resource sau build, token còn dư và dependency tree transitive. |
| Item và runtime thật | Render bằng Mono T4; compile file + facade trong net462. Kiểm UTF-8, namespace, alias, order, custom body, picker/rerun. Chạy bốn guard + positive case và toàn bộ ma trận §4–5. Case nghiệp vụ phải thất bại nếu cố ý làm sai kết quả ở **fixture tạm**, rồi pass lại sau khi hoàn nguyên fixture. |
| Hồi quy | Các test handler SharedTest/Test project/Test item cũ vẫn chạy nguyên assertion. So sánh payload/hash của file cũ với baseline cùng input; giữ recipe/encoding T4 cũ. Đối với catalog chỉ có hai entry được thêm. Chạy toàn bộ Cli.UnitTests sau test tập trung. |
| Kiểm tra từ CLI đã build | Gọi binary vừa build từ solution tạm, chạy hai lệnh tạo qua public command với kết nối hợp lệ, mở file sinh, build + test project mới **và** legacy. Kiểm TRX có test nghiệp vụ được khám phá, executed > 0, không fail, và không dùng skipped/inconclusive thay cho case bắt buộc. Nếu chưa chạy được public path có auth, ghi rõ gate còn mở. |

Lệnh từ root v5 cho AI khi triển khai. Các tên filter mới giả định lớp test có chữ `DataverseTest`. Đường dẫn của output consumer được nêu ở §1. Trên Windows dùng SDK .NET 10 và tooling/reference assemblies chạy được net462 x64.

```powershell
dotnet build .\DynamicsCrm.DevKit.Cli\DynamicsCrm.DevKit.Cli.csproj
dotnet test .\DynamicsCrm.DevKit.Cli.UnitTests\DynamicsCrm.DevKit.Cli.UnitTests.csproj --filter "FullyQualifiedName~DataverseTest|FullyQualifiedName~TestProjectTemplateHandlerTests|FullyQualifiedName~TestItemTemplateHandlerTests|FullyQualifiedName~ScaffoldingEngine|FullyQualifiedName~TaskNew|FullyQualifiedName~PluginTestDiscovery|FullyQualifiedName~NewItemArgsGateTests"
dotnet test .\DynamicsCrm.DevKit.Cli.UnitTests\DynamicsCrm.DevKit.Cli.UnitTests.csproj --logger trx
```

Cho public smoke, dùng `dotnet <đường-dẫn-tới-DynamicsCrm.DevKit.Cli.dll-vừa-build> ...` thay cho `devkit` nếu global tool còn là bản cũ. Xác minh legacy và mới trong cùng solution, lưu lệnh, TFM, bản package restore, số executed/passed/failed/skipped từ TRX và lỗi còn mở. Xem diff, xác nhận source version/build-date placeholder và các file legacy. Không cần full release để duyệt CLI. Khi tất cả cổng xanh và aP review output đạt, công việc tiếp theo mới là wizard, manifest/payload mapping và kiểm parity VSIX bằng Visual Studio MSBuild.

### Nguồn để kiểm lại

- [Entry point CLI](../../DynamicsCrm.DevKit.Cli/Program.cs) · [Catalog](../../DynamicsCrm.DevKit.Shared/Templates/TemplateCatalog.cs) · [Engine](../../DynamicsCrm.DevKit.Shared/Templates/ScaffoldingEngine.cs) · [Discovery](../../DynamicsCrm.DevKit.Shared/Templates/PluginTestDiscovery.cs)
- [csproj template 09](../../ProjectTemplates/CSharp/09.TestProjectTemplate/ProjectTemplate.csproj.template) · [T4 cũ](../../DynamicsCrm.DevKit.Shared/Resources/tt/Test.tt) · [Guard thực tế](../../DynamicsCrm.DevKit.Shared/Resources/tt/Plugin.tt) · [Golden build test cũ](../../DynamicsCrm.DevKit.Cli.UnitTests/Templates/TestProjectTemplateHandlerTests.cs)
- Union Management tại `E:\src\azure\Union-Management`, xem `Abiz.UnionManagement.slnx`, hai csproj test, `Abiz.UnionManagement.Server.Test2/Framework/`, `UnionFee/UnionFeeCreatePipelineTest.cs`. Package local tại `%USERPROFILE%/.nuget/packages/dataversefakes.community/1.3.2/lib/net462/DataverseFakes.xml`. [Metadata do tác giả phát hành](https://www.nuget.org/packages/DataverseFakes.Community/1.3.2)
