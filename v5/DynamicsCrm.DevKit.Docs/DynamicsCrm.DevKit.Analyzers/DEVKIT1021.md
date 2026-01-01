# DEVKIT1021: Use ITracingService in Catch Blocks

## 📖 Description

This analyzer detects catch blocks in plugins or workflow activities that don't use ITracingService to log exception details. Proper exception logging is essential for debugging and monitoring plugin execution.

## 🎯 Microsoft Best Practice

📚 **[Use ITracingService in plug-ins](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/use-itracingservice-plugins)**

> Use the ITracingService.Trace method to write messages to the Plug-in Trace Log. This is especially important when catching exceptions, as it allows you to capture exception details for troubleshooting.

## ⚠️ Why This Matters

Not using ITracingService in catch blocks causes:

1. **🔍 Lost Exception Details**: Exception information is not captured for analysis
2. **🐛 Difficult Debugging**: No visibility into what errors occurred during execution
3. **📊 Poor Monitoring**: Cannot track error patterns and frequencies
4. **⏱️ Slower Resolution**: Troubleshooting takes longer without proper logs

## 🔍 Detection

The analyzer flags `catch` blocks within plugins or workflows where:
- The catch block contains code (not empty)
- The catch block does not reference `ITracingService` anywhere in its body
- The containing class implements `IPlugin` or inherits from workflow base classes

## 💻 Code Examples

### ❌ Bad Code

```csharp
// ❌ Exception caught but not logged - no visibility into errors
public class MyPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        try
        {
            // Some risky operation
            PerformOperation();
        }
        catch (Exception ex)
        {
            // Exception is swallowed - no trace of what happened!
            throw new InvalidPluginExecutionException("Operation failed");
        }
    }
}

// ❌ Catch with logic but no tracing
public class AnotherPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        try
        {
            ProcessData();
        }
        catch (InvalidOperationException ex)
        {
            // Exception details are lost
            // Handle error without logging
        }
    }
}
```

### ✅ Good Code

```csharp
// ✅ Exception logged with ITracingService
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

// ✅ Detailed exception logging
public class AnotherPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        var tracingService = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
        
        try
        {
            ProcessData();
        }
        catch (InvalidOperationException ex)
        {
            // ✅ Log exception details before handling
            tracingService.Trace($"InvalidOperationException: {ex.Message}");
            tracingService.Trace($"Exception occurred at: {ex.StackTrace}");
            // Handle error appropriately
        }
    }
}
```

## 🔧 How to Fix

1. **Get ITracingService**: Retrieve the tracing service from the service provider
2. **Add Trace Calls**: Use `tracingService.Trace()` in the catch block to log exception details
3. **Log Useful Information**: Include exception message, stack trace, and relevant context

### 🔄 Before and After

```diff
  public void Execute(IServiceProvider serviceProvider)
  {
+     var tracingService = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
+     
      try
      {
          PerformOperation();
      }
      catch (Exception ex)
      {
+         tracingService.Trace($"Exception in MyPlugin: {ex.Message}");
+         tracingService.Trace($"Stack trace: {ex.StackTrace}");
          throw new InvalidPluginExecutionException("Operation failed", ex);
      }
  }
```

## 💡 Best Practices for Exception Logging

1. **Log Before Re-throwing**: Always trace before throwing an exception
2. **Include Context**: Add relevant business context to help debugging
3. **Log Stack Traces**: Include stack traces for unexpected exceptions
4. **Use Structured Messages**: Make log messages searchable and parsable

```csharp
catch (Exception ex)
{
    tracingService.Trace($"Entity: {entityName}, Id: {entityId}");
    tracingService.Trace($"Exception Type: {ex.GetType().Name}");
    tracingService.Trace($"Message: {ex.Message}");
    tracingService.Trace($"Stack: {ex.StackTrace}");
    throw new InvalidPluginExecutionException($"Failed to process {entityName}", ex);
}
```

## 🔕 Suppression

If you have a legitimate need to suppress this warning (e.g., catch block that only re-throws):

```csharp
#pragma warning disable DEVKIT1021
catch (Exception ex)
{
    throw; // Just re-throwing, no need to trace
}
#pragma warning restore DEVKIT1021
```

Or in `.editorconfig`:

```ini
[*.cs]
dotnet_diagnostic.DEVKIT1021.severity = suggestion
```

---

## 📊 Rule Properties

| Property | Value |
|----------|-------|
| **Rule ID** | DEVKIT1021 |
| **Category** | DynamicsCrm.DevKit |
| **Severity** | Warning |
| **Enabled by default** | Yes |
