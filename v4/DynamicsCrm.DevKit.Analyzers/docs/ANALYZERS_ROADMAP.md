# Suggested Code Analyzers for DynamicsCrm.DevKit.Analyzers

Based on research of [Microsoft's Dataverse Best Practices](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/), here are recommended new analyzers to add to the project.

## Current Analyzers (Already Implemented)

| ID | Description | MS Best Practice |
|---|---|---|
| DEVKIT1001 | Update message should have filtering attributes | ✅ [Include filtering attributes](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/include-filtering-attributes-plugin-registration) |
| DEVKIT1002 | Don't use ColumnSet(true) | ✅ [Retrieve specific columns](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/work-with-data/retrieve-specific-columns-entity-via-query-apis) |
| DEVKIT1003 | Plugin image validation | ✅ Custom best practice |
| DEVKIT1004 | Deprecated SDK messages | ✅ API deprecation |
| DEVKIT1005 | EntityReference maybe null | ✅ Null safety |

---

## Suggested New Analyzers

### High Priority (Directly from MS Best Practices)

---

#### DEVKIT1006: Don't use batch request types in plug-ins and workflow activities

**Severity:** Warning  
**Category:** Usage, Reliability, Performance  
**Impact:** Medium  
**MS Docs:** [Avoid batch requests in plug-ins](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/avoid-batch-requests-plugin)

**Detection:**
Detect usage of these request types within classes implementing `IPlugin` or `CodeActivity`:
- `ExecuteMultipleRequest`
- `ExecuteTransactionRequest`
- `CreateMultipleRequest`
- `UpdateMultipleRequest`
- `UpsertMultipleRequest`

**Bad Code:**
```csharp
public class MyPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        // ❌ Using batch request in plugin
        var batch = new ExecuteMultipleRequest();
        service.Execute(batch);
    }
}
```

---

#### DEVKIT1007: Develop IPlugin implementations as stateless

**Severity:** Error  
**Category:** Design, Performance  
**Impact:** High  
**MS Docs:** [Develop IPlugin as stateless](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/develop-iplugin-implementations-stateless)

**Detection:**
Detect non-readonly, non-static, non-const instance fields/properties in IPlugin classes that are assigned during `Execute()` method.

**Bad Code:**
```csharp
public class MyPlugin : IPlugin
{
    // ❌ Mutable instance field
    private IOrganizationService service;
    
    public void Execute(IServiceProvider serviceProvider)
    {
        // ❌ Assigning to instance field during execution
        this.service = factory.CreateOrganizationService(context.UserId);
    }
}
```

**Good Code:**
```csharp
public class MyPlugin : IPlugin
{
    // ✓ Readonly constructor-assigned field for configuration
    private readonly string _config;
    
    public MyPlugin(string config) { _config = config; }
    
    public void Execute(IServiceProvider serviceProvider)
    {
        // ✓ Local variable
        var service = factory.CreateOrganizationService(context.UserId);
    }
}
```

---

#### DEVKIT1008: Don't use parallel execution in plug-ins

**Severity:** Error  
**Category:** Design, Performance, Security, Supportability  
**Impact:** High  
**MS Docs:** [Don't use parallel execution](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/do-not-use-parallel-execution-in-plug-ins)

**Detection:**
Within IPlugin/CodeActivity classes, detect usage of:
- `Task.Run()`, `Task.Factory.StartNew()`
- `Parallel.For()`, `Parallel.ForEach()`
- `Thread` class instantiation
- `async`/`await` patterns
- `ThreadPool.QueueUserWorkItem()`

**Bad Code:**
```csharp
public class MyPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        // ❌ Parallel execution in plugin
        Parallel.ForEach(entities, entity => {
            service.Update(entity);
        });
        
        // ❌ Task-based async pattern
        Task.Run(() => DoSomething());
    }
}
```

---

#### DEVKIT1009: Set KeepAlive to false for external HTTP calls

**Severity:** Warning  
**Category:** Performance  
**Impact:** High  
**MS Docs:** [Set KeepAlive to false](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/set-keepalive-false-interacting-external-hosts-plugin)

**Detection:**
In IPlugin classes, detect:
- `WebRequest.Create()` without setting `KeepAlive = false`
- `HttpClient` without setting `DefaultRequestHeaders.ConnectionClose = true`
- `WebClient` usage (deprecated, should use HttpClient with KeepAlive=false)

**Bad Code:**
```csharp
public class MyPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        // ❌ KeepAlive defaults to true
        WebRequest request = WebRequest.Create("https://api.example.com");
        HttpWebResponse response = (HttpWebResponse)request.GetResponse();
        
        // ❌ HttpClient without ConnectionClose
        using (var client = new HttpClient())
        {
            var result = client.GetAsync(url).Result;
        }
    }
}
```

**Good Code:**
```csharp
using (HttpClient client = new HttpClient())
{
    client.DefaultRequestHeaders.ConnectionClose = true; // ✓ KeepAlive = false
    HttpResponseMessage response = client.GetAsync(url).GetAwaiter().GetResult();
}
```

---

#### DEVKIT1010: Set Timeout for external calls in plug-ins

**Severity:** Warning  
**Category:** Performance  
**Impact:** High  
**MS Docs:** [Set Timeout for external calls](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/set-timeout-for-external-calls-from-plug-ins)

**Detection:**
In IPlugin classes, detect `HttpClient` usage without explicitly setting `Timeout` property.

**Bad Code:**
```csharp
public class MyPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        // ❌ Using default 100 second timeout
        using (var client = new HttpClient())
        {
            var result = client.GetAsync(url).Result;
        }
    }
}
```

**Good Code:**
```csharp
using (HttpClient client = new HttpClient())
{
    client.Timeout = TimeSpan.FromSeconds(15); // ✓ Explicit timeout
    var result = client.GetAsync(url).GetAwaiter().GetResult();
}
```

---

#### DEVKIT1011: Use InvalidPluginExecutionException for errors

**Severity:** Warning  
**Category:** Supportability, Usability  
**Impact:** Medium  
**MS Docs:** [Use InvalidPluginExecutionException](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/use-invalidpluginexecutionexception-plugin-workflow-activities)

**Detection:**
In IPlugin classes, detect `throw` statements with exception types other than `InvalidPluginExecutionException`.

**Bad Code:**
```csharp
public class MyPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        // ❌ Throwing generic exception
        throw new Exception("Something went wrong");
        
        // ❌ Throwing ArgumentException
        throw new ArgumentException("Invalid argument");
    }
}
```

**Good Code:**
```csharp
public class MyPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        try
        {
            // Plugin logic
        }
        catch (Exception ex)
        {
            // ✓ Wrap and re-throw as InvalidPluginExecutionException
            throw new InvalidPluginExecutionException("Friendly error message", ex);
        }
    }
}
```

---

### Medium Priority

---

#### DEVKIT1012: Recommend using ITracingService in plug-ins

**Severity:** Info  
**Category:** Maintainability, Supportability  
**Impact:** Medium  
**MS Docs:** [Use ITracingService](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/use-itracingservice-plugins)

**Detection:**
IPlugin classes that don't retrieve or use `ITracingService`.

**Rationale:** This is a soft recommendation as tracing is optional, but very helpful for debugging.

---

#### DEVKIT1013: Avoid registering plugins on Retrieve/RetrieveMultiple

**Severity:** Info  
**Category:** Performance  
**Impact:** Medium  
**MS Docs:** [Limit Retrieve/RetrieveMultiple plugins](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/limit-registration-plugins-retrieve-retrievemultiple)

**Detection:**
Detect `[CrmPluginRegistration]` attributes with message "Retrieve" or "RetrieveMultiple".

**Note:** This should be informational only, as there are valid use cases.

---

### Lower Priority (Enhancement Ideas)

---

#### DEVKIT1014: Avoid AppDomain event registration in plugins

**Severity:** Error  
**Category:** Supportability  
**Impact:** Medium

**Detection:**
Detect event handler subscriptions to `AppDomain` events in IPlugin classes.

**Bad Code:**
```csharp
public class MyPlugin : IPlugin
{
    public MyPlugin()
    {
        // ❌ Registering to AppDomain events
        AppDomain.CurrentDomain.UnhandledException += OnUnhandledException;
    }
}
```

---

#### DEVKIT1015: Don't use GetAwaiter().GetResult() incorrectly

**Severity:** Info  
**Category:** Design  
**Impact:** Low

**Detection:**
This is context-dependent. In plugins where async is NOT supported, using `.GetAwaiter().GetResult()` is actually the recommended pattern. This analyzer would check for proper usage patterns.

---

## Implementation Approach

For each new analyzer:

1. **Create analyzer class** in `CrmAnalyzers/` folder following the pattern of existing analyzers
2. **Add diagnostic descriptor** in `DiagnosticDescriptors.cs` with appropriate:
   - ID (DEVKIT10XX)
   - Title
   - Message format
   - Severity
   - Description
3. **Register analyzer** in the appropriate analyzer base class
4. **Add unit tests** (optional, recommended)
5. **Update documentation** in `docs/README.md`
6. **Update changelog** in `AnalyzerReleases.Unshipped.md`

---

## Verification Plan

Since this is a research/suggestion document, verification is not applicable. The actual implementation would require:

1. Building the solution to verify compilation
2. Writing unit tests using Microsoft's Roslyn testing infrastructure
3. Testing against sample plugin code

---

## Summary

| ID | Analyzer Name | Priority | Complexity |
|---|---|---|---|
| DEVKIT1006 | Batch requests in plugins | High | Medium |
| DEVKIT1007 | Stateless IPlugin | High | High |
| DEVKIT1008 | Parallel execution in plugins | High | Medium |
| DEVKIT1009 | KeepAlive = false | High | Medium |
| DEVKIT1010 | HTTP Timeout | High | Low |
| DEVKIT1011 | InvalidPluginExecutionException | High | Medium |
| DEVKIT1012 | ITracingService recommendation | Medium | Low |
| DEVKIT1013 | Retrieve/RetrieveMultiple warning | Medium | Low |
| DEVKIT1014 | AppDomain events | Lower | Low |
| DEVKIT1015 | Async pattern validation | Lower | Medium |

> [!TIP]
> **Recommended Starting Point:** Begin with DEVKIT1006 (batch requests) and DEVKIT1011 (InvalidPluginExecutionException) as they have clear detection patterns and high value.
