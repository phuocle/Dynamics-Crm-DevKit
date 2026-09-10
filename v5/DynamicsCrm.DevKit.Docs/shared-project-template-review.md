# Đánh giá & Đề xuất Cập nhật "Source of Truth" cho `01.SharedProjectTemplate` (DynamicsCrm.DevKit v5)

## 1. Tổng quan & Bối cảnh (Context)

Qua quá trình phát triển thực tế và kiểm thử thực chiến trên giải pháp Dataverse phức tạp (**Hitachi HSAP Vietnam - HSAPVN**) cùng công cụ Replay / Debugger cục bộ (`DebugPluginWith`), một số vấn đề kiến trúc và tương thích ngược của mã nguồn do DevKit sinh ra đã lộ diện:

1. **Lỗi `System.InvalidCastException` khi cast sang `IPluginExecutionContext7`**:
   - Khi chạy qua Console Debugger hoặc FakeXrmEasy / Mocking runner, `serviceProvider.GetService(typeof(IPluginExecutionContext))` trả về `Microsoft.Xrm.Sdk.RemoteExecutionContext`.
   - Đối tượng này **không triển khai** `IPluginExecutionContext7` (mặc dù nó có property runtime như `InitiatingUserAgent`), khiến mã plugin kiểu:
     ```csharp
     var context = (IPluginExecutionContext7)serviceProvider.GetService(typeof(IPluginExecutionContext));
     ```
     bị crash ngay lập tức tại runtime:
     ```text
     System.InvalidCastException: Unable to cast object of type 'Microsoft.Xrm.Sdk.RemoteExecutionContext' to type 'Microsoft.Xrm.Sdk.IPluginExecutionContext7'.
     ```
2. **Cảnh báo Compiler `CS0436` do xung đột kiểu giữa các Assembly**:
   - `DevKitJson.cs` trong `01.SharedProjectTemplate` đang để access modifier là `public static class DevKitJson`.
   - Vì Shared Project (`.shproj` / `.projitems`) được import vào nhiều project trong cùng solution (Server, Server 2, Console Debugger, Tool...), việc `public` class trong namespace `Microsoft.Xrm.Sdk` khiến các assembly tham chiếu chéo nhau bị xung đột định nghĩa kiểu (warning `CS0436`).
3. **Lỗi khi deserialize chuỗi `hs_debug_context` chứa log debug nhiều dòng**:
   - Dữ liệu `hs_debug_context` thường chứa payload JSON ở dòng đầu tiên, kèm theo log debug/stacktrace ở các dòng tiếp theo do các plugin Pre-operation tự động nối thêm qua `HsapShared.DebugContext`. Nếu truyền trực tiếp vào `DevKitJson.Deserialize<T>()`, JSON parser sẽ văng lỗi cú pháp.

---

## 2. Chi tiết các hạng mục cần cập nhật trong `01.SharedProjectTemplate`

### Hạng mục 1: Bổ sung `PluginExecutionContext7Wrapper.cs`

#### Vấn đề
- Microsoft SDK liên tục nâng cấp các phiên bản interface context (`IPluginExecutionContext` $\rightarrow$ `v2` $\rightarrow$ `v3` $\rightarrow$ `v4` $\rightarrow$ `v5` [InitiatingUserAgent] $\rightarrow$ `v6` [EnvironmentId, TenantId] $\rightarrow$ `v7` [IsApplicationUser]).
- Developer plugin hiện đại rất cần kiểm tra `InitiatingUserAgent` (ví dụ: phát hiện Dataflow `Microsoft.InsightsPlatform.DataverseUploader`, Azure Data Factory, Power Automate, Browser) hoặc `IsApplicationUser`.
- Tuy nhiên, trong môi trường kiểm thử (Unit Test, Replay log từ Console App), đối tượng context thường chỉ là `RemoteExecutionContext` (chỉ implement `IPluginExecutionContext` v1).

#### Đề xuất cập nhật
Thêm file mới `PluginExecutionContext7Wrapper.cs` vào thư mục `Lib\` của `01.SharedProjectTemplate`:

```csharp
using System;
using Microsoft.Xrm.Sdk;

namespace Microsoft.Xrm.Sdk
{
    /// <summary>
    /// Wrapper class that implements IPluginExecutionContext7 by wrapping IPluginExecutionContext.
    /// Provides backward compatibility and graceful property access via reflection when running
    /// under RemoteExecutionContext, unit tests, or older Dataverse sandbox runtimes.
    /// </summary>
    internal class PluginExecutionContext7Wrapper : IPluginExecutionContext7
    {
        private readonly IPluginExecutionContext _context;
        private readonly IPluginExecutionContext2 _context2;
        private readonly IPluginExecutionContext3 _context3;
        private readonly IPluginExecutionContext4 _context4;
        private readonly IPluginExecutionContext5 _context5;
        private readonly IPluginExecutionContext6 _context6;

        public PluginExecutionContext7Wrapper(IPluginExecutionContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
            _context2 = context as IPluginExecutionContext2;
            _context3 = context as IPluginExecutionContext3;
            _context4 = context as IPluginExecutionContext4;
            _context5 = context as IPluginExecutionContext5;
            _context6 = context as IPluginExecutionContext6;
        }

        // IPluginExecutionContext properties
        public int Mode => _context.Mode;
        public int IsolationMode => _context.IsolationMode;
        public int Depth => _context.Depth;
        public string MessageName => _context.MessageName;
        public string PrimaryEntityName => _context.PrimaryEntityName;
        public Guid? RequestId => _context.RequestId;
        public string SecondaryEntityName => _context.SecondaryEntityName;
        public ParameterCollection InputParameters => _context.InputParameters;
        public ParameterCollection OutputParameters => _context.OutputParameters;
        public ParameterCollection SharedVariables => _context.SharedVariables;
        public Guid UserId => _context.UserId;
        public Guid InitiatingUserId => _context.InitiatingUserId;
        public Guid BusinessUnitId => _context.BusinessUnitId;
        public Guid OrganizationId => _context.OrganizationId;
        public string OrganizationName => _context.OrganizationName;
        public Guid PrimaryEntityId => _context.PrimaryEntityId;
        public EntityImageCollection PreEntityImages => _context.PreEntityImages;
        public EntityImageCollection PostEntityImages => _context.PostEntityImages;
        public EntityReference OwningExtension => _context.OwningExtension;
        public Guid CorrelationId => _context.CorrelationId;
        public bool IsExecutingOffline => _context.IsExecutingOffline;
        public bool IsOfflinePlayback => _context.IsOfflinePlayback;
        public bool IsInTransaction => _context.IsInTransaction;
        public Guid OperationId => _context.OperationId;
        public DateTime OperationCreatedOn => _context.OperationCreatedOn;
        public IPluginExecutionContext ParentContext => _context.ParentContext;
        public int Stage => _context.Stage;

        // IPluginExecutionContext2 properties
        public Guid UserAzureActiveDirectoryObjectId => GetPropertyValue<Guid>("UserAzureActiveDirectoryObjectId", _context2?.UserAzureActiveDirectoryObjectId ?? Guid.Empty);
        public Guid InitiatingUserAzureActiveDirectoryObjectId => GetPropertyValue<Guid>("InitiatingUserAzureActiveDirectoryObjectId", _context2?.InitiatingUserAzureActiveDirectoryObjectId ?? Guid.Empty);
        public Guid InitiatingUserApplicationId => GetPropertyValue<Guid>("InitiatingUserApplicationId", _context2?.InitiatingUserApplicationId ?? Guid.Empty);
        public Guid PortalsContactId => GetPropertyValue<Guid>("PortalsContactId", _context2?.PortalsContactId ?? Guid.Empty);
        public bool IsPortalsClientCall => GetPropertyValue<bool>("IsPortalsClientCall", _context2?.IsPortalsClientCall ?? false);

        // IPluginExecutionContext3 properties
        public Guid AuthenticatedUserId => GetPropertyValue<Guid>("AuthenticatedUserId", _context3?.AuthenticatedUserId ?? Guid.Empty);

        // IPluginExecutionContext4 properties
        public EntityImageCollection[] PreEntityImagesCollection => GetPropertyValue<EntityImageCollection[]>("PreEntityImagesCollection", _context4?.PreEntityImagesCollection ?? new EntityImageCollection[0]);
        public EntityImageCollection[] PostEntityImagesCollection => GetPropertyValue<EntityImageCollection[]>("PostEntityImagesCollection", _context4?.PostEntityImagesCollection ?? new EntityImageCollection[0]);

        // IPluginExecutionContext5 properties
        public string InitiatingUserAgent => GetPropertyValue<string>("InitiatingUserAgent", _context5?.InitiatingUserAgent);

        // IPluginExecutionContext6 properties
        public string EnvironmentId => GetPropertyValue<string>("EnvironmentId", _context6?.EnvironmentId ?? string.Empty);
        public Guid TenantId => GetPropertyValue<Guid>("TenantId", _context6?.TenantId ?? Guid.Empty);

        // IPluginExecutionContext7 properties
        public bool IsApplicationUser => GetPropertyValue<bool>("IsApplicationUser", false);

        private T GetPropertyValue<T>(string propertyName, T defaultValue)
        {
            var property = _context.GetType().GetProperty(propertyName);
            if (property != null)
            {
                var value = property.GetValue(_context);
                if (value is T typedValue)
                    return typedValue;
            }
            return defaultValue;
        }
    }
}
```

---

### Hạng mục 2: Bổ sung Extension Methods trong `Extension.cs`

#### Đề xuất cập nhật
Trong `01.SharedProjectTemplate\Extension.cs`, bổ sung 2 extension methods tiện ích:

```csharp
        /// <summary>
        /// Retrieves or wraps the execution context as IPluginExecutionContext7 safely,
        /// avoiding InvalidCastException when running under RemoteExecutionContext or test mocks.
        /// </summary>
        public static IPluginExecutionContext7 GetExecutionContext7(this IServiceProvider serviceProvider)
        {
            if (serviceProvider == null) throw new InvalidPluginExecutionException("Service provider cannot be null");
            var baseContext = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext))
                ?? throw new InvalidPluginExecutionException("Execution context cannot be null");
            return baseContext as IPluginExecutionContext7 ?? new PluginExecutionContext7Wrapper(baseContext);
        }

        /// <summary>
        /// Casts or wraps an existing IPluginExecutionContext to IPluginExecutionContext7.
        /// </summary>
        public static IPluginExecutionContext7 ToContext7(this IPluginExecutionContext context)
        {
            if (context == null) return null;
            return context as IPluginExecutionContext7 ?? new PluginExecutionContext7Wrapper(context);
        }
```

#### Lợi ích
Plugin code chỉ cần viết ngắn gọn:
```csharp
public void Execute(IServiceProvider serviceProvider)
{
    var context = serviceProvider.GetExecutionContext7();
    if (context.InitiatingUserAgent?.StartsWith("Microsoft.InsightsPlatform.DataverseUploader") ?? false)
    {
        // xử lý dataflow
    }
}
```
Không bao giờ bị lỗi `InvalidCastException` hoặc `NullReferenceException`.

---

### Hạng mục 3: Đổi Access Modifier `DevKitJson.cs` thành `internal`

#### Vấn đề
- Trong `01.SharedProjectTemplate\DevKitJson.cs`:
  ```csharp
  namespace Microsoft.Xrm.Sdk
  {
      [DebuggerNonUserCode()]
      public static class DevKitJson // <-- Đang là public
  ```
- Khi Solution có nhiều project cùng import Shared Project (ví dụ: `Hs.Hsap.Server`, `Hs.Hsap.Server.2`, `Hs.Hsap.Console`, `Hs.Hsap.UiTest`):
  Nếu Project A tham chiếu Project B, cả hai cùng export `public static class Microsoft.Xrm.Sdk.DevKitJson`, trình biên dịch C# sẽ phát cảnh báo `CS0436`.
- Tất cả các file utility khác trong Shared template (`Extension.cs`, `EntityBase.cs`, `Date.cs`) đều được đặt là `internal`.

#### Đề xuất cập nhật
Sửa dòng 12 trong `DevKitJson.cs`:
```csharp
namespace Microsoft.Xrm.Sdk
{
    [DebuggerNonUserCode()]
    internal static class DevKitJson
```

---

### Hạng mục 4: Hỗ trợ Deserialize Payload JSON có kèm Multi-line Debug Trace

#### Vấn đề
- Thuộc tính `hs_debug_context` (hoặc các trường context lưu trạng thái/flow) thường được plugin tiền xử lý (Pre-operation) ghi chú thêm dấu vết:
  ```text
  {"ownerid":"5fedd06f-00da-ef11-a730-00224819e4b5","statecode":0,"statuscode":288720001}
  Hs.Hsap.Server.DocumentDetail.Pre.SetOwner [20260909.071421.412]
  ```
- Dòng đầu tiên là JSON hợp lệ, nhưng các dòng sau là plain text log. Gọi `DevKitJson.Deserialize<T>(raw)` sẽ ném `System.FormatException: Unexpected token`.

#### Đề xuất cập nhật
Trong `DevKitJson.cs`, bổ sung phương thức hỗ trợ:
```csharp
        /// <summary>
        /// Attempts to deserialize the first JSON block from text that may have trailing log/trace lines.
        /// Useful when reading fields like debug context where stack traces or timestamps were appended.
        /// </summary>
        public static bool TryDeserializeFirstJsonLine<T>(string text, out T value)
        {
            value = default(T);
            if (string.IsNullOrWhiteSpace(text)) return false;

            var lines = text.Split(new[] { "\r\n", "\r", "\n" }, StringSplitOptions.RemoveEmptyEntries);
            foreach (var rawLine in lines)
            {
                var line = rawLine.Trim();
                if (line.StartsWith("{") && line.EndsWith("}"))
                {
                    return TryDeserialize(line, out value);
                }
            }
            return false;
        }
```

---

### Hạng mục 5: Cập nhật Cấu hình Template Project

1. **`CSharpSharedProjectTemplate.vstemplate`**:
   Bổ sung item vào `<TemplateContent>`:
   ```xml
   <ProjectItem ReplaceParameters="true" TargetFileName="Lib\PluginExecutionContext7Wrapper.cs">PluginExecutionContext7Wrapper.cs</ProjectItem>
   ```

2. **`01.SharedProjectTemplate.csproj`**:
   Bổ sung item vào `<ItemGroup>`:
   ```xml
   <None Include="PluginExecutionContext7Wrapper.cs" />
   ```

3. **`Shared.projitems`**:
   Hiện tại `Shared.projitems` đã có wildcard:
   ```xml
   <Compile Include="$(MSBuildThisFileDirectory)Lib\**\*.cs" />
   ```
   Do đó bất kỳ file nào nằm trong thư mục `Lib\` đều sẽ được tự động biên dịch vào project đích.

---

## 3. Kiến nghị liên quan tới ItemTemplates / Server Project Template

Khi DevKit sinh mã mẫu cho Plugin (`04.ServerProjectTemplate` hoặc `04.PluginItemTemplate`):
Thay vì sinh:
```csharp
var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
```
hoặc ép kiểu cứng sang `IPluginExecutionContext7`, hãy sinh đoạn code chuẩn:
```csharp
var context = serviceProvider.GetExecutionContext7();
```
Điều này đảm bảo mọi plugin mới tạo ra đều có sẵn khả năng truy cập `context.InitiatingUserAgent`, `context.IsApplicationUser` mà không tiềm ẩn lỗi ép kiểu khi test.

---

## 4. Tóm tắt Checklist Thực hiện (Khi Release DevKit)

- [ ] Tạo file `PluginExecutionContext7Wrapper.cs` trong `v5/ProjectTemplates/CSharp/01.SharedProjectTemplate/`.
- [ ] Bổ sung `GetExecutionContext7` và `ToContext7` vào `Extension.cs`.
- [ ] Đổi `DevKitJson` thành `internal static class DevKitJson`.
- [ ] Bổ sung `TryDeserializeFirstJsonLine<T>` vào `DevKitJson.cs`.
- [ ] Khai báo `PluginExecutionContext7Wrapper.cs` trong `CSharpSharedProjectTemplate.vstemplate` và `01.SharedProjectTemplate.csproj`.
- [ ] Cập nhật mẫu code sinh plugin trong `04.PluginItemTemplate` và `04.ServerProjectTemplate`.
