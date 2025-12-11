# DEVKIT1015: Avoid Blocking Async Patterns in Plug-ins

## Description

This analyzer detects usage of blocking async patterns like `GetAwaiter().GetResult()`, `.Result`, and `.Wait()` in plugins. While these patterns are sometimes necessary in plugins (since async `Execute` is not supported), they can cause deadlocks if not used carefully.

## Why This Matters

Blocking async operations can cause issues:

1. **Deadlocks**: Can occur if the async operation captures a synchronization context
2. **Performance**: Thread is blocked waiting instead of being available for other work
3. **Exception Handling**: Exceptions may be wrapped differently than expected

## Patterns Detected

| Pattern | Example | Risk |
|---------|---------|------|
| `GetAwaiter().GetResult()` | `task.GetAwaiter().GetResult()` | Medium |
| `.Result` | `task.Result` | Medium |
| `.Wait()` | `task.Wait()` | Medium |

## Code Examples

### ⚠️ Patterns That Trigger Info

```csharp
public class MyPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        // ⚠️ Info: Can cause deadlocks
        var result = httpClient.GetAsync(url).GetAwaiter().GetResult();
        
        // ⚠️ Info: Can cause deadlocks  
        var data = task.Result;
        
        // ⚠️ Info: Can cause deadlocks
        task.Wait();
    }
}
```

### ✅ Better Patterns (if async is necessary)

```csharp
public class BetterPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        // ✅ Use ConfigureAwait(false) to avoid deadlocks
        var result = httpClient.GetAsync(url)
            .ConfigureAwait(false)
            .GetAwaiter()
            .GetResult();
            
        // ✅ Or better: use synchronous APIs when available
        var request = WebRequest.Create(url);
        var response = request.GetResponse();
    }
}
```

### ✅ Best Practice: Avoid Async If Possible

```csharp
public class BestPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        // ✅ Use synchronous APIs
        using (var client = new WebClient())
        {
            var data = client.DownloadString(url);
        }
        
        // ✅ Or use HttpWebRequest synchronously
        var request = (HttpWebRequest)WebRequest.Create(url);
        request.Timeout = 15000;
        request.KeepAlive = false;
        using (var response = request.GetResponse())
        using (var reader = new StreamReader(response.GetResponseStream()))
        {
            var content = reader.ReadToEnd();
        }
    }
}
```

## When This Pattern Is Acceptable

In plugins, async patterns with `ConfigureAwait(false)` may be acceptable when:

1. **No synchronous API available**: Some modern APIs only offer async methods
2. **Using `ConfigureAwait(false)`**: Prevents deadlocks by not capturing sync context
3. **Timeout is set**: Always set a timeout for external calls

## Suppression

If you must use async patterns and understand the risks:

```csharp
#pragma warning disable DEVKIT1015
var result = task.GetAwaiter().GetResult();
#pragma warning restore DEVKIT1015
```

Or in `.editorconfig`:

```ini
[*.cs]
dotnet_diagnostic.DEVKIT1015.severity = none
```

## Related Rules

- [DEVKIT1009](DEVKIT1009.md) - Set KeepAlive to false for external HTTP calls
- [DEVKIT1010](DEVKIT1010.md) - Set Timeout for external HTTP calls

---

## Rule Properties

| Property | Value |
|----------|-------|
| **Rule ID** | DEVKIT1015 |
| **Category** | DynamicsCrm.DevKit |
| **Severity** | Warning |
| **Enabled by default** | Yes |

