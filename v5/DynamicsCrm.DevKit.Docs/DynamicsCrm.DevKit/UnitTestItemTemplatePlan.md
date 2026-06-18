# Kế Hoạch Cải Thiện Unit Test Item Template Cho Plugin

## Mục Tiêu

Khi user tạo Unit Test Item từ Visual Studio, file sinh ra phải compile được ngay và user phải sửa ít nhất có thể. Template không được sinh placeholder kiểu `???` làm project fail build.

V1 đi theo hướng an toàn:

- Nếu không đủ thông tin chắc chắn về plugin gốc, sinh `Basic Unit Test`.
- Nếu biết rõ target plugin và registration context chuẩn DevKit, sinh `DevKit Plugin Guard Test`.
- Không cố suy luận logic nghiệp vụ trong plugin body.
- Không cố support sâu mọi custom template như `UserPlugin.tt` ở V1.

Đây là lần đầu replace test template, nên phần logic dùng chung đưa lên `FakeXrmEasyTestBase` càng nhiều càng tốt. File test sinh ra nên mỏng; nếu sau này cần chỉnh behavior thì chỉnh base, không phải regenerate hàng loạt file test.

## Vấn Đề Hiện Tại

`DynamicsCrm.DevKit.Shared\Resources\tt\TestPlugin.tt` cũ sinh skeleton có nhiều placeholder:

- `StageEnum.???`
- `"???"` cho message/entity
- `ExecutionModeEnum.???`
- `_context.ExecutePluginWith<???>(...)`

File kiểu này làm project fail compile ngay sau khi tạo nếu user chưa sửa tay đầy đủ.

Pattern guard test cũ cũng có vấn đề:

- `Assert.ThrowsExactly<InvalidPluginExecutionException>(..., "message")` không kiểm tra `Exception.Message`; string đó chỉ là message khi assert fail.
- Nhiều negative case mutate chung một `pluginContext`, làm test khó đọc và dễ bị side-effect.
- Nếu negative context có `Target`, FakeXrmEasy có thể suy ra lại `PrimaryEntityName` từ target, làm case primary entity không fail như mong muốn.

## Quyết Định Thiết Kế

### 1. Basic Unit Test Là Fallback Mặc Định

Khi wizard/template không có đủ dữ liệu để xác định target plugin, `TestPlugin.tt` phải sinh file compile-ready:

- class `<Class>Test : FakeXrmEasyTestBase`
- method `<Class>Test_00`
- body tối thiểu `Assert.IsTrue(true);`
- method `<Class>Test_01` giữ sample commented block cho remote execution context
- không có `???`
- không có generic type placeholder làm compile fail

Điều này giải quyết lỗi nặng nhất: tạo item xong project không bị fail build.

### 2. Guard Test Chỉ Sinh Khi Có Target Plugin Rõ Ràng

Guard mode chỉ bật khi context có đủ:

- `TestTargetFullClassName`
- `PluginStage`
- `PluginMessage`
- `EntityLogicalName`
- `PluginExecution`

Guard output sinh:

- `using TargetPlugin = Full.Namespace.PluginClass;`
- constants:
  - `PLUGIN_STAGE`
  - `PLUGIN_MESSAGE`
  - `PLUGIN_ENTITY_LOGICAL_NAME`
  - `PLUGIN_EXECUTION_MODE`
- 4 negative guard checks:
  - sai stage
  - sai message
  - sai primary entity
  - sai execution mode
- success path tối thiểu bằng `_context.ExecutePluginWith<TargetPlugin>(CreateExecutablePluginContext(...))`

Với message shape:

- `Create` / `Update`: `Target` là `Entity`
- `Delete`: `Target` là `EntityReference`
- `CreateMultiple` / `UpdateMultiple`: `Targets` là `EntityCollection`
- pre/post image phụ thuộc registration image của plugin

### 3. Helper Dùng Chung Nằm Ở `FakeXrmEasyTestBase`

Base test cần có helper protected để các test generated dùng trực tiếp:

```csharp
protected XrmFakedPluginExecutionContext CreateValidPluginContext(
    StageEnum pluginStage,
    string pluginMessage,
    string entityLogicalName,
    ExecutionModeEnum executionMode)
```

```csharp
protected XrmFakedPluginExecutionContext CreateExecutablePluginContext(
    StageEnum pluginStage,
    string pluginMessage,
    string entityLogicalName,
    ExecutionModeEnum executionMode,
    object target = null,
    Entity preImage = null,
    Entity postImage = null,
    string targetParameterName = "Target",
    string preImageAlias = "PreImage",
    string postImageAlias = "PostImage")
```

```csharp
protected void AssertInvalidPluginContext<TPlugin>(
    Action<XrmFakedPluginExecutionContext> changeContext,
    string expectedMessage,
    StageEnum pluginStage,
    string pluginMessage,
    string entityLogicalName,
    ExecutionModeEnum executionMode)
    where TPlugin : IPlugin, new()
```

Lý do để `protected`: helper là API cho class test kế thừa từ base. Không nên dùng `internal` vì generated test ở project khác assembly sẽ không truy cập được nếu không thêm `InternalsVisibleTo`.

### 4. Registration Contract Type Trong `PluginCore.cs`

Vì `FakeXrmEasyTestBase` thuộc shared test project và generated tests cần dùng `StageEnum`, `ExecutionModeEnum`, attribute contract..., các type contract tối thiểu trong `PluginCore.cs` phải là `public`:

- `ExecutionModeEnum`
- `ImageTypeEnum`
- `IsolationModeEnum`
- `SourceTypeEnum`
- `PluginStepOperationEnum`
- `StageEnum`
- `PluginType`
- `CrmPluginRegistrationAttribute`
- `DynamicsCrmDevKitPluginManagedIdentityAssemblyAttribute`
- `DynamicsCrmDevKitPluginAssemblyAttribute`

`ImageType` là enum thừa, không còn được dùng trong `PluginCore.cs`; xóa enum này thay vì public hóa nó. `ImageTypeEnum` vẫn giữ lại vì registration attribute đang dùng.

## Cách Nhận Diện `ABCD.cs` Có Sinh Từ `Plugin.tt` Không

Không thể nhận diện tuyệt đối một file hiện hữu có sinh từ `Plugin.tt` hay không nếu trước đó không ghi metadata. User có thể sửa code sau khi generate. Custom `UserPlugin.tt` cũng có thể sinh code giống hoặc khác `Plugin.tt`.

Cách đúng cho file mới là `Plugin.tt` sinh marker nhẹ:

```csharp
// DynamicsCrm.DevKit.Template: Plugin.tt
// DynamicsCrm.DevKit.TemplateVersion: 1
```

Nếu user dùng custom template, marker có thể là `UserPlugin.tt` hoặc không có marker. Khi đó Test Item wizard không nên mặc định sinh rich guard test.

Fallback cho file cũ chưa có marker là heuristic. Chỉ infer guard mode khi match đủ:

- class implement `Microsoft.Xrm.Sdk.IPlugin`
- có `[CrmPluginRegistration(..., PluginType = PluginType.Plugin, ...)]`
- parse được `Message`, `EntityLogicalName`, `Stage`, `ExecutionMode`
- source có 4 guard chuẩn:
  - `context.Stage`
  - `context.MessageName`
  - `context.PrimaryEntityName`
  - `context.Mode`
- exception text match format DevKit:
  - `Stage does not equals ...`
  - `MessageName does not equals ...`
  - `PrimaryEntityName does not equals ...`
  - `Execution does not equals ...`
- có method signature chuẩn:

```csharp
ExecutePlugin(
    IPluginExecutionContext context,
    IOrganizationServiceFactory serviceFactory,
    IOrganizationService serviceAdmin,
    IOrganizationService service,
    ITracingService tracing)
```

Nếu thiếu marker hoặc heuristic không match đủ, fallback về Basic Unit Test.

## Output Guard Test Mong Muốn

Với plugin:

`Dev.DevKit.Server.Plugins.Task.PostTaskCreateAsynchronous`

registration:

- Message: `Create`
- Entity: `task`
- Stage: `PostOperation`
- Mode: `Asynchronous`
- PostImage: `PostImage`

test guard nên có shape:

```csharp
using Dev.DevKit.Shared;
using Dev.DevKit.Shared.Test;
using FakeXrmEasy.Plugins;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using TargetPlugin = Dev.DevKit.Server.Plugins.Task.PostTaskCreateAsynchronous;

namespace Dev.DevKit.Test.Plugins.Task
{
    [TestClass]
    public class PostTaskCreateAsynchronousErrorTest : FakeXrmEasyTestBase
    {
        private const StageEnum PLUGIN_STAGE = StageEnum.PostOperation;
        private const string PLUGIN_MESSAGE = "Create";
        private const string PLUGIN_ENTITY_LOGICAL_NAME = "task";
        private const ExecutionModeEnum PLUGIN_EXECUTION_MODE = ExecutionModeEnum.Asynchronous;

        [TestMethod]
        public void PostTaskCreateAsynchronousErrorTest_00()
        {
            AssertInvalidPluginContext<TargetPlugin>(
                pluginContext => pluginContext.Stage = -1,
                $"Stage does not equals {PLUGIN_STAGE}",
                PLUGIN_STAGE,
                PLUGIN_MESSAGE,
                PLUGIN_ENTITY_LOGICAL_NAME,
                PLUGIN_EXECUTION_MODE);

            AssertInvalidPluginContext<TargetPlugin>(
                pluginContext => pluginContext.MessageName = string.Empty,
                $"MessageName does not equals {PLUGIN_MESSAGE}",
                PLUGIN_STAGE,
                PLUGIN_MESSAGE,
                PLUGIN_ENTITY_LOGICAL_NAME,
                PLUGIN_EXECUTION_MODE);

            AssertInvalidPluginContext<TargetPlugin>(
                pluginContext => pluginContext.PrimaryEntityName = string.Empty,
                $"PrimaryEntityName does not equals {PLUGIN_ENTITY_LOGICAL_NAME}",
                PLUGIN_STAGE,
                PLUGIN_MESSAGE,
                PLUGIN_ENTITY_LOGICAL_NAME,
                PLUGIN_EXECUTION_MODE);

            AssertInvalidPluginContext<TargetPlugin>(
                pluginContext => pluginContext.Mode = -1,
                $"Execution does not equals {PLUGIN_EXECUTION_MODE}",
                PLUGIN_STAGE,
                PLUGIN_MESSAGE,
                PLUGIN_ENTITY_LOGICAL_NAME,
                PLUGIN_EXECUTION_MODE);

            _context.ExecutePluginWith<TargetPlugin>(CreateExecutablePluginContext(
                PLUGIN_STAGE,
                PLUGIN_MESSAGE,
                PLUGIN_ENTITY_LOGICAL_NAME,
                PLUGIN_EXECUTION_MODE,
                target: new Entity(PLUGIN_ENTITY_LOGICAL_NAME),
                postImage: new Entity(PLUGIN_ENTITY_LOGICAL_NAME)));
        }
    }
}
```

## Trạng Thái Implementation Hiện Tại

Đã làm:

- `TestPlugin.tt` có 2 nhánh:
  - Basic compile-ready khi thiếu target plugin.
  - Guard test khi có `TestTargetFullClassName` và đủ registration context.
- `TestPlugin.tt` không còn sinh `???`.
- `Plugin.tt` đã có marker `DynamicsCrm.DevKit.Template`.
- `Plugin.tt` và `Plugin.pac.tt` không còn dùng `???` trong fallback input comment.
- `T4Context` có thêm:
  - `TestTargetFullClassName`
  - `HasTestTarget`
  - `HasPluginTestGuardContext`
- `FakeXrmEasyTestBase` trong shared test project và project template đã có helper protected.
- `PluginCore.cs` trong shared project template và fixtures đã public hóa registration contract types tối thiểu.
- enum thừa `ImageType` đã xóa; `ImageTypeEnum` giữ lại.
- sample `PostTaskCreateAsynchronousErrorTest.cs` đã theo guard pattern mới.
- T4 unit tests có coverage cho:
  - Basic output không có placeholder.
  - Guard output fill đúng alias/constants/helper.
  - `Plugin.tt` có marker.

Chưa làm trong V1 hiện tại:

- Wizard chưa scan solution để liệt kê plugin chưa có unit test.
- Wizard chưa parse marker/heuristic từ source plugin để tự fill `TestTargetFullClassName`.
- Wizard chưa có UI chọn `Basic Unit Test` / `DevKit Plugin Guard Test`.

Vì vậy ở trạng thái hiện tại:

- Template không còn tạo file lỗi compile.
- Guard mode đã sẵn sàng ở T4 layer khi wizard truyền đủ context.
- Để user add item và auto-fill hết, bước tiếp theo là nâng wizard `Test` item để chọn target plugin và set `TestTargetFullClassName`.

## Plan Tiếp Theo Cho Wizard Auto Fill

1. Khi mở Test Item wizard, scan project/solution để tìm plugin classes.
2. Với mỗi plugin class:
   - đọc marker `DynamicsCrm.DevKit.Template`
   - parse `[CrmPluginRegistration]`
   - parse namespace/class full name
   - xác định đã có test tương ứng hay chưa
3. Hiển thị list plugin chưa có test.
4. Khi user chọn plugin:
   - auto-fill test class name
   - auto-fill target plugin full name
   - auto-fill stage/message/entity/execution từ registration
5. Nếu marker là `Plugin.tt` và heuristic pass, chọn `DevKit Plugin Guard Test`.
6. Nếu marker khác hoặc heuristic fail, chọn `Basic Unit Test`.

## Ghi Chú Về Delete Và Regenerate File Test

Nếu `PostTaskCreateAsynchronousErrorTest.cs` đã được commit, sau đó user xóa file thì git sẽ thấy trạng thái `deleted`.

Nếu user dùng item template tạo lại đúng cùng path và nội dung byte-for-byte giống bản đã commit, trạng thái git sẽ quay về unchanged cho file đó.

Nếu nội dung khác dù chỉ khác namespace, class name, target plugin alias, line ending, hoặc whitespace, git sẽ thấy file là modified. Nếu tạo sai tên file/path, git sẽ thấy một file deleted và một file new.
