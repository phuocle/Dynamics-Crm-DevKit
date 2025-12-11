# DEVKIT1012: Consider Using ITracingService in Plug-ins

## Description

This analyzer recommends using `ITracingService` in plug-in classes. Tracing is essential for debugging and monitoring plugin execution in Dynamics 365 / Dataverse.

## Microsoft Best Practice

📚 **[Use ITracingService in Plug-ins](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/use-itracingservice-plugins)**

> Use ITracingService in plug-ins to write diagnostic information that helps debug and monitor your plug-ins.

## Why This Matters

Without tracing:

1. **Difficult Debugging**: Production issues are hard to diagnose
2. **No Execution Visibility**: Can't see what your plugin is doing
3. **Slow Incident Resolution**: Takes longer to identify root cause
4. **Missing Audit Trail**: No record of plugin behavior

## Detection

The analyzer reports when:
- A class implements `IPlugin` interface
- The class doesn't contain any reference to `ITracingService`

## Code Examples

### ❌ Code Without Tracing

```csharp
public class AccountPlugin : IPlugin
{
    // ⚠️ No tracing - difficult to debug
    public void Execute(IServiceProvider serviceProvider)
    {
        var context = (IPluginExecutionContext)serviceProvider
            .GetService(typeof(IPluginExecutionContext));
        
        var target = (Entity)context.InputParameters["Target"];
        // Do something with target...
    }
}
```

### ✅ Code With Tracing

```csharp
public class AccountPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        // ✅ Get tracing service for debugging
        var tracingService = (ITracingService)serviceProvider
            .GetService(typeof(ITracingService));
        
        tracingService.Trace("AccountPlugin: Execute started");
        
        var context = (IPluginExecutionContext)serviceProvider
            .GetService(typeof(IPluginExecutionContext));
        
        tracingService.Trace("Message: {0}, Stage: {1}", 
            context.MessageName, context.Stage);
        
        var target = (Entity)context.InputParameters["Target"];
        tracingService.Trace("Target entity: {0}, Id: {1}", 
            target.LogicalName, target.Id);
        
        // Do something with target...
        
        tracingService.Trace("AccountPlugin: Execute completed");
    }
}
```

## How to Fix

1. **Get ITracingService**: Retrieve from the service provider
2. **Add Trace Calls**: Log entry/exit, key variables, and decisions
3. **Include Context**: Log message name, stage, entity details

### Before and After

```diff
  public void Execute(IServiceProvider serviceProvider)
  {
+     var tracingService = (ITracingService)serviceProvider
+         .GetService(typeof(ITracingService));
+     tracingService.Trace("Plugin started");
+     
      var context = (IPluginExecutionContext)serviceProvider
          .GetService(typeof(IPluginExecutionContext));
+         
+     tracingService.Trace("Depth: {0}", context.Depth);
      
      // ... rest of code
+     
+     tracingService.Trace("Plugin completed");
  }
```

## Viewing Trace Logs

To view trace logs in Dynamics 365:
1. Go to **Settings** → **Plug-in Trace Log**
2. Filter by plugin assembly or message
3. Review the `MessageBlock` field for trace output

> **Note**: Tracing must be enabled in the environment (Plug-in Trace Log Setting).

## Suppression

If you intentionally don't want tracing (e.g., a minimal helper plugin):

```csharp
#pragma warning disable DEVKIT1012
public class MinimalPlugin : IPlugin
{
    // No tracing needed
}
#pragma warning restore DEVKIT1012
```

Or in `.editorconfig`:

```ini
[*.cs]
dotnet_diagnostic.DEVKIT1012.severity = none
```

---

## Rule Properties

| Property | Value |
|----------|-------|
| **Rule ID** | DEVKIT1012 |
| **Category** | DynamicsCrm.DevKit |
| **Severity** | Warning |
| **Enabled by default** | Yes |

