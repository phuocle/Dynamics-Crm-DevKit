# DEVKIT1017: Avoid Console Output in Plug-ins

## 📖 Description

This analyzer detects usage of `Console.Write`, `Console.WriteLine`, and other Console methods in plugin and workflow activity code. Console output has no effect in the Dataverse sandbox environment because the console stream is redirected to null.

## ⚠️ Why This Matters

Console output in plugins and workflows:

1. **🚫 Has No Effect**: Console is not available in the Dataverse sandbox - output is discarded
2. **⚡ Wastes Resources**: String formatting and method calls execute but produce nothing
3. **😞 Creates False Confidence**: Developers may think their debug output is being logged
4. **💡 Better Alternatives Exist**: ITracingService provides actual logging

## 🔍 Detection

The analyzer flags usage of these Console methods within IPlugin or CodeActivity classes:
- `Console.Write()`
- `Console.WriteLine()`
- `Console.Error`
- `Console.Out`
- `Console.SetOut()`
- `Console.SetError()`
- `Console.Beep()`
- `Console.Clear()`
- `Console.ResetColor()`
- `Console.SetCursorPosition()`

## 💻 Code Examples

### ❌ Bad Code

```csharp
public class MyPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        var context = (IPluginExecutionContext)serviceProvider
            .GetService(typeof(IPluginExecutionContext));
        
        // ❌ Console output has no effect in sandbox
        Console.WriteLine("Plugin started");
        Console.WriteLine($"Message: {context.MessageName}");
        
        // ... plugin logic
        
        Console.WriteLine("Plugin completed");
    }
}
```

### ✅ Good Code

```csharp
public class MyPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        // ✅ Get tracing service for actual logging
        var tracingService = (ITracingService)serviceProvider
            .GetService(typeof(ITracingService));
        
        var context = (IPluginExecutionContext)serviceProvider
            .GetService(typeof(IPluginExecutionContext));
        
        tracingService.Trace("Plugin started");
        tracingService.Trace($"Message: {context.MessageName}");
        
        // ... plugin logic
        
        tracingService.Trace("Plugin completed");
    }
}
```

## 🔧 How to Fix

1. **Remove Console calls**: Delete all Console.Write/WriteLine statements
2. **Add ITracingService**: Get the tracing service from the service provider
3. **Replace with Trace**: Use `tracingService.Trace()` instead of Console

### Before and After

```diff
  public void Execute(IServiceProvider serviceProvider)
  {
+     var tracingService = (ITracingService)serviceProvider
+         .GetService(typeof(ITracingService));
+     
      var context = (IPluginExecutionContext)serviceProvider
          .GetService(typeof(IPluginExecutionContext));
      
-     Console.WriteLine($"Processing: {context.MessageName}");
+     tracingService.Trace($"Processing: {context.MessageName}");
  }
```

## Viewing Trace Logs

Unlike Console output, ITracingService trace logs are captured by the platform:

1. Go to **Settings** → **Plug-in Trace Log**
2. Filter by plugin assembly or message
3. Review the `MessageBlock` field for trace output

> **Note**: Tracing must be enabled in the environment (Plug-in Trace Log Setting).

## 🔕 Suppression

If you have a specific reason to use Console (e.g., code shared with non-plugin projects):

```csharp
#pragma warning disable DEVKIT1017
Console.WriteLine("Debug output");
#pragma warning restore DEVKIT1017
```

Or in `.editorconfig`:

```ini
[*.cs]
dotnet_diagnostic.DEVKIT1017.severity = none
```

## Related Rules

- [DEVKIT1012](DEVKIT1012.md) - Consider using ITracingService in plug-ins

---

---

## 📊 Rule Properties

| Property | Value |
|----------|-------|
| **Rule ID** | DEVKIT1017 |
| **Category** | DynamicsCrm.DevKit |
| **Severity** | Warning |
| **Enabled by default** | Yes |

