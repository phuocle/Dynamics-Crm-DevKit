```text
  ____                              _           ____                  ____             _  ___ _        _                _
 |  _ \ _   _ _ __   __ _ _ __ ___ (_) ___ ___ / ___|_ __ _ __ ___   |  _ \  _____   _| |/ (_) |_     / \   _ __   __ _| |_   _ _______ _ __ ___
 | | | | | | | '_ \ / _` | '_ ` _ \| |/ __/ __| |   | '__| '_ ` _ \  | | | |/ _ \ \ / / ' /| | __|   / _ \ | '_ \ / _` | | | | |_  / _ \ '__/ __|
 | |_| | |_| | | | | (_| | | | | | | | (__\__ \ |___| |  | | | | | |_| |_| |  __/\ V /| . \| | |_ _ / ___ \| | | | (_| | | |_| |/ /  __/ |  \__ \
 |____/ \__, |_| |_|\__,_|_| |_| |_|_|\___|___/\____|_|  |_| |_| |_(_)____/ \___| \_/ |_|\_\_|\__(_)_/   \_\_| |_|\__,_|_|\__, /___\___|_|  |___/
        |___/                         https://github.com/phuocle/Dynamics-Crm-DevKit 4.99.99.99 Build: xxxx.yy.zz HH.mm.ss|___/
```
# DynamicsCrm.DevKit.Analyzers

A Roslyn-based code analyzer package for Microsoft Dynamics 365 / Power Platform development. It provides compile-time diagnostics to help developers follow best practices and avoid common pitfalls when building plugins, custom workflows, and other CRM customizations.

## 📦 Installation

Install via NuGet:
```
dotnet add package DynamicsCrm.DevKit.Analyzers
```

Or add to your `.csproj`:
```xml
<PackageReference Include="DynamicsCrm.DevKit.Analyzers" Version="*" PrivateAssets="all" />
```

## 📋 Diagnostic Rules

| Rule ID | Severity | Description |
|---------|----------|-------------|
| [DEVKIT1001](#devkit1001) | Error | Create/Update message should have filtering attributes |
| [DEVKIT1002](#devkit1002) | Warning | Don't use `ColumnSet(true)` |
| [DEVKIT1003](#devkit1003) | Error | Plugin image validation |
| [DEVKIT1004](#devkit1004) | Info | Use of deprecated SDK messages |
| [DEVKIT1005](#devkit1005) | Warning | EntityReference maybe null |
| [DEVKIT1006](#devkit1006) | Warning | Don't use batch request types in plug-ins |
| [DEVKIT1007](#devkit1007) | Error | IPlugin implementations should be stateless |
| [DEVKIT1008](#devkit1008) | Error | Don't use parallel execution in plug-ins |
| [DEVKIT1009](#devkit1009) | Warning | Set KeepAlive to false for external HTTP calls |
| [DEVKIT1010](#devkit1010) | Warning | Set Timeout for external HTTP calls |
| [DEVKIT1011](#devkit1011) | Warning | Use InvalidPluginExecutionException for errors |
| [DEVKIT1012](#devkit1012) | Info | Consider using ITracingService in plug-ins |
| [DEVKIT1013](#devkit1013) | Info | Avoid registering plugins on Retrieve/RetrieveMultiple |
| [DEVKIT1014](#devkit1014) | Error | Avoid AppDomain event registration in plug-ins |
| [DEVKIT1015](#devkit1015) | Info | Avoid blocking async patterns in plug-ins |
| [DEVKIT1016](#devkit1016) | Info | Avoid retrieving unpublished metadata |
| [DEVKIT1017](#devkit1017) | Info | Avoid Console output in plug-ins |
| [DEVKIT1018](#devkit1018) | Error | Avoid File/IO operations in plug-ins |
| [DEVKIT1019](#devkit1019) | Warning | Consider checking context.Depth to prevent infinite loops |
| [DEVKIT1020](#devkit1020) | Error | DataProvider must have DataSource |
| [DEVKIT1021](#devkit1021) | Warning | Use ITracingService in catch blocks |

---

### ❌ DEVKIT1001
**Create/Update message should have filtering attributes**

**Severity:** Error

**MS Best Practice:** 📚 [Include filtering attributes with plug-in registration](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/include-filtering-attributes-plugin-registration)

This analyzer ensures that plugin registrations for `Create`, `CreateMultiple`, `Update`, `UpdateMultiple`, `OnExternalCreated`, or `OnExternalUpdated` messages include specific filtering attributes. This prevents the plugin from executing on **every field change**, which can significantly impact performance.

**Bad Code:**
```csharp
// ❌ Empty filtering attributes
[CrmPluginRegistration("Create", "account", StageEnum.PreOperation, ExecutionModeEnum.Synchronous,
    filteringAttributes: "",
    stepName: "Pre-Create Account")]

// ❌ All attributes
[CrmPluginRegistration("Update", "account", StageEnum.PreOperation, ExecutionModeEnum.Synchronous,
    filteringAttributes: "*",
    stepName: "Pre-Update Account")]
```

**Good Code:**
```csharp
// ✅ Specific attributes
[CrmPluginRegistration("Create", "account", StageEnum.PostOperation, ExecutionModeEnum.Synchronous,
    filteringAttributes: "name,accountnumber",
    stepName: "Post-Create Account")]
// ✅ Specific attributes
[CrmPluginRegistration("Update", "account", StageEnum.PreOperation, ExecutionModeEnum.Synchronous,
    filteringAttributes: "name,accountnumber",
    stepName: "Pre-Update Account")]
```

[📖 Documentation](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1001)

---

### ⚠️ DEVKIT1002
**Don't use ColumnSet(true)**

**Severity:** Warning

**MS Best Practice:** [Retrieve specific columns for a table via query APIs](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/work-with-data/retrieve-specific-columns-entity-via-query-apis)

Warns against using `ColumnSet(true)` which retrieves all columns from an entity. This is a performance anti-pattern as it retrieves unnecessary data.

**Bad Code:**
```csharp
// ❌ Retrieves all columns
var entity = service.Retrieve("account", id, new ColumnSet(true));

// ❌ AllColumns = true
var query = new QueryExpression("account")
{
    ColumnSet = new ColumnSet { AllColumns = true }
};

// ❌ FetchXML with all-attributes
var fetch = @"<fetch><entity name='account'><all-attributes/></entity></fetch>";
```

**Good Code:**
```csharp
// ✅ Only retrieve needed columns
var entity = service.Retrieve("account", id, new ColumnSet("name", "accountnumber"));
```

[📖 Documentation](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1002)

---

### ❌ DEVKIT1003
**Plugin image validation**

**Severity:** Error

**MS Best Practice:** [Understand the execution context](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/understand-the-data-context) (Plugin Images)

Validates that plugin image configurations are compatible with the message and stage. The Dynamics 365 platform has specific rules about when Pre-Images and Post-Images are available:

| Message | Stage | Pre-Image | Post-Image |
|---------|-------|:---------:|:----------:|
| **Create** | Pre-Validation | ❌ | ❌ |
| **Create** | Pre-Operation | ❌ | ❌ |
| **Create** | Post-Operation | ❌ | ✅ |
| **Update** | Pre-Validation | ✅ | ❌ |
| **Update** | Pre-Operation | ✅ | ❌ |
| **Update** | Post-Operation | ✅ | ✅ |
| **Delete** | Pre-Validation | ✅ | ❌ |
| **Delete** | Pre-Operation | ✅ | ❌ |
| **Delete** | Post-Operation | ✅ | ❌ |

**Bad Code:**
```csharp
// ❌ Pre-Create cannot have Pre-Image or Post-Image
[CrmPluginRegistration("Create", "account", StageEnum.PreOperation, ExecutionModeEnum.Synchronous,
    Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "name")]

// ❌ Pre-Update cannot have Post-Image
[CrmPluginRegistration("Update", "account", StageEnum.PreOperation, ExecutionModeEnum.Synchronous,
    Image1Type = ImageTypeEnum.PostImage, Image1Attributes = "name")]
```

**Good Code:**
```csharp
// ✅ Post-Create can have Post-Image
[CrmPluginRegistration("Create", "account", StageEnum.PostOperation, ExecutionModeEnum.Synchronous,
    Image1Type = ImageTypeEnum.PostImage, Image1Attributes = "name")]

// ✅ Post-Update can have both images
[CrmPluginRegistration("Update", "account", StageEnum.PostOperation, ExecutionModeEnum.Synchronous,
    Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "name",
    Image2Type = ImageTypeEnum.PostImage, Image2Attributes = "name")]
```

[📖 Documentation](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1003)

---

### ℹ️ DEVKIT1004
**Use of deprecated SDK messages**

**Severity:** Warning

**MS Best Practice:** [Deprecated SDK messages](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/org-service/deprecations)

Warns when using deprecated request/response classes from `Microsoft.Crm.Sdk.Messages`. These messages may be removed in future SDK versions.

**Deprecated Messages Include:**
- `AddProductToKitRequest/Response`
- `AddSubstituteProductRequest/Response`
- `AssociateEntitiesRequest/Response`
- `CompoundCreateRequest/Response`
- `CompoundUpdateRequest/Response`
- `ConvertKitToProductRequest/Response`
- `ConvertProductToKitRequest/Response`
- `DisassociateEntitiesRequest/Response`
- `ExecuteFetchRequest/Response`
- `SetStateRequest/Response`
- And more...

**Bad Code:**
```csharp
// ❌ Deprecated message
var request = new SetStateRequest
{
    EntityMoniker = new EntityReference("account", accountId),
    State = new OptionSetValue(1),
    Status = new OptionSetValue(2)
};
service.Execute(request);
```

**Good Code:**
```csharp
// ✅ Use Update instead
var account = new Entity("account", accountId)
{
    ["statecode"] = new OptionSetValue(1),
    ["statuscode"] = new OptionSetValue(2)
};
service.Update(account);
```

[📖 Documentation](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1004)

---

### ⚠️ DEVKIT1005
**EntityReference maybe null**

**Severity:** Error

**MS Best Practice:** Null safety pattern for lookup fields

Flags potential null reference exceptions when accessing `Id`, `Name`, or `LogicalName` properties of an `EntityReference` that may be null. Lookup fields in Dynamics 365 can return null if no value is set.

**Bad Code:**
```csharp
// ❌ EntityReference may be null
var ownerId = entity.GetAttributeValue<EntityReference>("ownerid").Id;
var ownerName = entity.GetAttributeValue<EntityReference>("ownerid").Name;

// ❌ In string concatenation
var message = "Owner: " + entity.GetAttributeValue<EntityReference>("ownerid").Name;
```

**Good Code:**
```csharp
// ✅ Null-conditional operator
var ownerId = entity.GetAttributeValue<EntityReference>("ownerid")?.Id;
var ownerName = entity.GetAttributeValue<EntityReference>("ownerid")?.Name;

// ✅ Null check first
var ownerRef = entity.GetAttributeValue<EntityReference>("ownerid");
if (ownerRef != null)
{
    var ownerId = ownerRef.Id;
}
```

[📖 Documentation](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1005)

---

### ⚠️ DEVKIT1006
**Don't use batch request types in plug-ins and workflow activities**

**Severity:** Warning

**MS Best Practice:** [Don't use batch request types in plug-ins](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/avoid-batch-requests-plugin)

Warns against using batch request types (`ExecuteMultipleRequest`, `ExecuteTransactionRequest`, `CreateMultipleRequest`, `UpdateMultipleRequest`, `UpsertMultipleRequest`) within plug-ins or workflow activities. These can cause performance issues and timeout errors.

**Bad Code:**
```csharp
public class MyPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        // ❌ Using ExecuteMultipleRequest in plugin
        var batch = new ExecuteMultipleRequest();
        foreach (var entity in entities)
        {
            batch.Requests.Add(new UpdateRequest { Target = entity });
        }
        service.Execute(batch);
    }
}
```

**Good Code:**
```csharp
public class MyPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        // ✅ Execute each request individually
        foreach (var entity in entities)
        {
            service.Update(entity);
        }
    }
}
```

[📖 Documentation](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1006)

---

### ❌ DEVKIT1007
**IPlugin implementations should be stateless**

**Severity:** Error

Detects assignments to instance fields or properties during plug-in execution. IPlugin classes are cached and reused across multiple threads - storing state in instance members can cause thread-safety issues and data inconsistencies.

**MS Best Practice:** [Develop IPlugin implementations as stateless](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/develop-iplugin-implementations-stateless)

**Bad Code:**
```csharp
public class MyPlugin : IPlugin
{
    // ❌ Mutable instance field
    private IOrganizationService _service;
    private IPluginExecutionContext _context;

    public void Execute(IServiceProvider serviceProvider)
    {
        // ❌ Assigning to instance field during execution
        _context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
        _service = factory.CreateOrganizationService(_context.UserId);
    }
}
```

**Good Code:**
```csharp
public class MyPlugin : IPlugin
{
    // ✅ Readonly field assigned in constructor (for configuration)
    private readonly string _secureConfig;

    public MyPlugin(string unsecure, string secure)
    {
        _secureConfig = secure;
    }

    public void Execute(IServiceProvider serviceProvider)
    {
        // ✅ Local variables instead of instance fields
        var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
        var service = factory.CreateOrganizationService(context.UserId);
    }
}
```

[📖 Documentation](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1007)

---

### ❌ DEVKIT1008
**Don't use parallel execution in plug-ins and workflow activities**

**Severity:** Error

**MS Best Practice:** [Do not use parallel execution within plug-ins and workflow activities](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/do-not-use-parallel-execution-in-plug-ins)

Detects usage of parallel execution patterns within `IPlugin` or `CodeActivity` classes. Multi-threading and parallel execution are not supported in the Dataverse sandbox and can cause unpredictable behavior.

**Detected Patterns:**
- `Task.Run()`, `Task.Factory.StartNew()`
- `Parallel.For()`, `Parallel.ForEach()`, `Parallel.Invoke()`
- `new Thread()`
- `ThreadPool.QueueUserWorkItem()`

**Bad Code:**
```csharp
public class MyPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        var entities = GetEntities();

        // ❌ Using Parallel.ForEach
        Parallel.ForEach(entities, entity => {
            service.Update(entity);
        });

        // ❌ Using Task.Run
        Task.Run(() => DoSomething());

        // ❌ Using Thread
        var thread = new Thread(() => DoWork());
        thread.Start();
    }
}
```

**Good Code:**
```csharp
public class MyPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        var entities = GetEntities();

        // ✅ Sequential processing
        foreach (var entity in entities)
        {
            service.Update(entity);
        }

        // ✅ Direct method call
        DoSomething();
    }
}
```

[📖 Documentation](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1008)

---

### ⚠️ DEVKIT1009
**Set KeepAlive to false for external HTTP calls**

**Severity:** Warning

**MS Best Practice:** [Set KeepAlive to false when interacting with external hosts](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/set-keepalive-false-interacting-external-hosts-plugin)

Warns when using `HttpClient` or `WebRequest` in plugins without setting KeepAlive to false. The sandbox environment has connection pool limitations that can cause issues when KeepAlive is enabled.

**Bad Code:**
```csharp
// ❌ HttpClient with default KeepAlive (true)
using (var client = new HttpClient())
{
    var response = client.GetAsync(url).GetAwaiter().GetResult();
}
```

**Good Code:**
```csharp
// ✅ HttpClient with ConnectionClose = true
using (var client = new HttpClient())
{
    client.DefaultRequestHeaders.ConnectionClose = true;
    var response = client.GetAsync(url).GetAwaiter().GetResult();
}
```

[📖 Documentation](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1009)

---

### ⚠️ DEVKIT1010
**Set Timeout for external HTTP calls**

**Severity:** Warning

**MS Best Practice:** [Set Timeout when making external calls from a plug-in](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/set-timeout-for-external-calls-from-plug-ins)

Warns when using `HttpClient` in plugins without setting an explicit Timeout. The default HttpClient timeout is 100 seconds, which may exceed the plugin timeout limit.

**Bad Code:**
```csharp
// ❌ HttpClient with default timeout (100 seconds)
using (var client = new HttpClient())
{
    var response = client.GetAsync(url).GetAwaiter().GetResult();
}
```

**Good Code:**
```csharp
// ✅ HttpClient with explicit timeout
using (var client = new HttpClient())
{
    client.Timeout = TimeSpan.FromSeconds(15);
    var response = client.GetAsync(url).GetAwaiter().GetResult();
}
```

[📖 Documentation](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1010)

---

### ⚠️ DEVKIT1013
**Avoid registering plugins on Retrieve/RetrieveMultiple**

**Severity:** Warning

**MS Best Practice:** [Limit the registration of plug-ins for Retrieve and RetrieveMultiple messages](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/limit-registration-plugins-retrieve-retrievemultiple)

Warns when a plugin is registered on `Retrieve` or `RetrieveMultiple` messages. These messages are called very frequently and can significantly impact system performance.

**Bad Code:**
```csharp
// ❌ Plugin on RetrieveMultiple - runs EVERY time a view is loaded
[CrmPluginRegistration("RetrieveMultiple", "account", StageEnum.PostOperation,
    ExecutionModeEnum.Synchronous, "", "RetrieveMultiple Account")]
public class RetrieveMultipleAccountPlugin : IPlugin { }
```

**Good Code:**
```csharp
// ✅ Use Create/Update to pre-calculate values instead
[CrmPluginRegistration("Update", "account", StageEnum.PreOperation,
    ExecutionModeEnum.Synchronous, "revenue", "Calculate Account Rating")]
public class CalculateAccountRatingPlugin : IPlugin { }
```

[📖 Documentation](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1013)

---

### ⚠️ DEVKIT1011
**Use InvalidPluginExecutionException for errors**

**Severity:** Warning

**MS Best Practice:** [Use InvalidPluginExecutionException in plug-ins and workflow activities](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/use-invalidpluginexecutionexception-plugin-workflow-activities)

Warns when throwing exceptions other than `InvalidPluginExecutionException` in plugins. Only this exception type is properly handled by the platform and shows messages to users.

**Bad Code:**
```csharp
// ❌ Generic Exception - user sees "An error occurred"
throw new Exception("Something went wrong");
```

**Good Code:**
```csharp
// ✅ InvalidPluginExecutionException - message shown to user
throw new InvalidPluginExecutionException("Please provide a valid account name.");
```

[📖 Documentation](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1011)

---

### ℹ️ DEVKIT1012
**Consider using ITracingService in plug-ins**

**Severity:** Warning

**MS Best Practice:** [Use ITracingService in Plug-ins](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/use-itracingservice-plugins)

Recommends using `ITracingService` in plug-in classes for debugging and monitoring.

**Bad Code:**
```csharp
// ⚠️ No tracing - difficult to debug
public class AccountPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider) { }
}
```

**Good Code:**
```csharp
// ✅ Uses tracing for debugging
public class AccountPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        var tracingService = (ITracingService)serviceProvider
            .GetService(typeof(ITracingService));
        tracingService.Trace("Plugin started");
    }
}
```

[📖 Documentation](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1012)

---

### ⚠️ DEVKIT1016
**Avoid retrieving unpublished metadata**

**Severity:** Warning

**MS Best Practice:** [Retrieve published metadata](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/work-with-metadata/retrieve-published-metadata)

Detects `RetrieveAsIfPublished = true` on metadata requests. Retrieving unpublished metadata causes slower performance.

**Bad Code:**
```csharp
// ⚠️ RetrieveAsIfPublished = true causes performance issues
var request = new RetrieveEntityRequest
{
    MetadataId = entityId,
    RetrieveAsIfPublished = true
};
```

**Good Code:**
```csharp
// ✅ Default behavior retrieves published metadata only
var request = new RetrieveEntityRequest
{
    MetadataId = entityId
};
```

[📖 Documentation](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1016)

---

### ❌ DEVKIT1014
**Avoid AppDomain event registration in plug-ins**

**Severity:** Error

Detects subscription to `AppDomain` events in plugins. Plugin instances are cached and reused, so subscribing to AppDomain events can cause memory leaks.

**Bad Code:**
```csharp
// ❌ Memory leak - event handler never removed
AppDomain.CurrentDomain.UnhandledException += (s, e) => { };
```

**Good Code:**
```csharp
// ✅ Use try-catch for exception handling
try { /* work */ }
catch (Exception ex) { throw new InvalidPluginExecutionException("Error", ex); }
```

[📖 Documentation](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1014)

---

### ⚠️ DEVKIT1015
**Avoid blocking async patterns in plug-ins**

**Severity:** Warning

Detects usage of `GetAwaiter().GetResult()`, `.Result`, and `.Wait()` on Tasks in plugins. These can cause deadlocks.

**Patterns Detected:**
```csharp
// ⚠️ Can cause deadlocks
task.GetAwaiter().GetResult();
task.Result;
task.Wait();
```

**Better Alternative:**
```csharp
// ✅ Use ConfigureAwait(false) or synchronous APIs
var result = task.ConfigureAwait(false).GetAwaiter().GetResult();
```

[📖 Documentation](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1015)

---

### ℹ️ DEVKIT1017
**Avoid Console output in plug-ins and workflow activities**

**Severity:** Info

Console output methods like `Console.Write()` and `Console.WriteLine()` have no effect in the Dataverse sandbox environment. The console stream is redirected to null.

**Patterns Detected:**
```csharp
// ⚠️ Has no effect in sandbox
Console.WriteLine("Debug message");
Console.Write($"Processing: {entity.Id}");
Console.Error.WriteLine("Error occurred");
```

**Better Alternative:**
```csharp
// ✅ Use ITracingService for logging
var tracingService = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
tracingService.Trace("Debug message");
tracingService.Trace($"Processing: {entity.Id}");
```

[📖 Documentation](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1017)

---

### ❌ DEVKIT1018
**Avoid File/IO operations in plug-ins and workflow activities**

**Severity:** Error

System.IO file operations are blocked in the Dataverse sandbox environment and will throw `SecurityException` at runtime.

**Bad Code:**
```csharp
public class MyPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        // ❌ File.ReadAllText - blocked in sandbox
        var content = File.ReadAllText("config.txt");

        // ❌ File.WriteAllText - blocked in sandbox
        File.WriteAllText("log.txt", "Plugin executed");

        // ❌ new FileStream - blocked in sandbox
        using (var stream = new FileStream("data.bin", FileMode.Open))
        {
        }

        // ❌ new StreamReader - blocked in sandbox
        using (var reader = new StreamReader("input.txt"))
        {
        }
    }
}
```

**Good Code:**
```csharp
public class MyPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        // ✅ Use Dataverse storage instead of files
        var tracingService = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
        tracingService.Trace("Use tracing instead of file logging");

        // ✅ Store data using Note attachments
        var note = new Entity("annotation")
        {
            ["subject"] = "Plugin Output",
            ["notetext"] = "Data to store"
        };
        service.Create(note);
    }
}
```

[📖 Documentation](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1018)

---

### ⚠️ DEVKIT1019
**Consider checking context.Depth to prevent infinite loops**

**Severity:** Warning

This analyzer recommends checking `IPluginExecutionContext.Depth` in plugin classes to prevent infinite loops when plugins modify entities that trigger themselves recursively.

**Bad Code:**
```csharp
public class AccountPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        // ❌ No depth check - can cause infinite loop
        var context = (IPluginExecutionContext)serviceProvider
            .GetService(typeof(IPluginExecutionContext));
        var target = (Entity)context.InputParameters["Target"];

        // This update triggers the plugin again!
        var update = new Entity("account", target.Id);
        update["modifiedon"] = DateTime.UtcNow;
        service.Update(update);
    }
}
```

**Good Code:**
```csharp
public class AccountPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        var context = (IPluginExecutionContext)serviceProvider
            .GetService(typeof(IPluginExecutionContext));

        // ✅ Exit early if this is a recursive call
        if (context.Depth > 1) return;

        var target = (Entity)context.InputParameters["Target"];

        // Now safe to update
        var update = new Entity("account", target.Id);
        update["modifiedon"] = DateTime.UtcNow;
        service.Update(update);
    }
}
```

[📖 Documentation](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1019)

---

### ❌ DEVKIT1020
**DataProvider must have DataSource**

**Severity:** Error

**MS Best Practice:** [Virtual Table Data Providers](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/virtual-entities/custom-virtual-entity-data-providers)

This analyzer detects when a `CrmPluginRegistration` attribute uses `PluginType.DataProvider` but the `DataSource` parameter is empty or missing. DataProvider plugins require a valid DataSource to function correctly at runtime.

**Bad Code:**
```csharp
public class MyPlugin : IPlugin
{
    // ❌ DataSource is empty - will fail at runtime
    [CrmPluginRegistration("Dev.DevKit.Server.DataProviders.Cds.Retrieve", "Retrieve",
        PluginType.DataProvider, DataSource = "")]
    public void Execute(IServiceProvider serviceProvider) { }
}
```

**Good Code:**
```csharp
public class MyPlugin : IPlugin
{
    // ✅ DataSource is specified with valid data source name
    [CrmPluginRegistration("Dev.DevKit.Server.DataProviders.Cds.Retrieve", "Retrieve",
        PluginType.DataProvider, DataSource = "v4_sql_datasource")]
    public void Execute(IServiceProvider serviceProvider) { }
}
```

[📖 Documentation](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1020)

---

### ⚠️ DEVKIT1021
**Use ITracingService in Catch Blocks**

**Severity:** Warning

**MS Best Practice:** 📚 [Use ITracingService in plug-ins](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/use-itracingservice-plugins)

This analyzer detects catch blocks in plugins or workflow activities that don't use ITracingService to log exception details. Proper exception logging is essential for debugging and monitoring plugin execution.

**Bad Code:**
```csharp
public class MyPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        try
        {
            PerformOperation();
        }
        catch (Exception ex)
        {
            // ❌ Exception is swallowed - no trace of what happened!
            throw new InvalidPluginExecutionException("Operation failed");
        }
    }
}
```

**Good Code:**
```csharp
public class MyPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        var tracingService = (ITracingService)serviceProvider.GetService(typeof(ITracingService));

        try
        {
            tracingService.Trace("Starting operation");
            PerformOperation();
        }
        catch (Exception ex)
        {
            // ✅ Exception details are logged for debugging
            tracingService.Trace($"Error occurred: {ex.Message}");
            tracingService.Trace($"Stack trace: {ex.StackTrace}");
            throw new InvalidPluginExecutionException($"Operation failed: {ex.Message}", ex);
        }
    }
}
```

[📖 Documentation](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1021)

---

## ⚙️ Configuration

You can suppress specific rules in your `.editorconfig`:

```ini
[*.cs]
# Disable specific rules
dotnet_diagnostic.DEVKIT1001.severity = none
dotnet_diagnostic.DEVKIT1002.severity = suggestion
```

Or use `#pragma` directives:
```csharp
#pragma warning disable DEVKIT1002
var entity = service.Retrieve("account", id, new ColumnSet(true));
#pragma warning restore DEVKIT1002
```

## 📋 Requirements

- .NET Standard 2.0 compatible projects
- Visual Studio 2019+ or any IDE with Roslyn analyzer support

## 📄 License

This project is part of [DynamicsCrm.DevKit](https://github.com/phuocle/Dynamics-Crm-DevKit).