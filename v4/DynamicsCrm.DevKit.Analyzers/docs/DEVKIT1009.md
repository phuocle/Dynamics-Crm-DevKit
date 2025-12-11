# DEVKIT1009: Set KeepAlive to False for External HTTP Calls

## Description

This analyzer warns when using `HttpClient` or `WebRequest` in plugins without setting KeepAlive to false. The sandbox environment has connection pool limitations that can cause issues when KeepAlive is enabled.

## Microsoft Best Practice

📚 **[Set KeepAlive to false when interacting with external hosts in a plug-in](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/set-keepalive-false-interacting-external-hosts-plugin)**

> When you interact with an external host from a plug-in, the KeepAlive property on the underlying connection must be set to false. Failure to set this property can cause intermittent connection failures.

## Why This Matters

Using KeepAlive (default behavior) in plugins causes:

1. **Connection Pool Issues**: The sandbox environment has limited connection pooling capabilities
2. **Intermittent Failures**: Connections may be dropped unexpectedly, causing sporadic errors
3. **Resource Leaks**: Kept-alive connections may not be properly cleaned up
4. **Timeout Errors**: Stale connections in the pool can cause unexpected timeouts

## Detected Patterns

| Pattern | Issue |
|---------|-------|
| `new HttpClient()` | KeepAlive is true by default |
| `new WebRequest()` | KeepAlive is true by default |
| `WebRequest.Create()` | Returns request with KeepAlive = true |

## Detection

The analyzer flags instantiation of HTTP client types within:
- Classes implementing `Microsoft.Xrm.Sdk.IPlugin`
- Classes inheriting from `System.Activities.CodeActivity`

## Code Examples

### ❌ Bad Code

```csharp
public class MyPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        // ❌ HttpClient with default KeepAlive (true)
        using (var client = new HttpClient())
        {
            var response = client.GetAsync("https://api.example.com").GetAwaiter().GetResult();
        }
        
        // ❌ WebRequest with default KeepAlive (true)
        var request = WebRequest.Create("https://api.example.com");
        var response = request.GetResponse();
    }
}
```

### ✅ Good Code

```csharp
public class MyPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        // ✅ HttpClient with ConnectionClose = true (KeepAlive = false)
        using (var client = new HttpClient())
        {
            client.DefaultRequestHeaders.ConnectionClose = true;
            var response = client.GetAsync("https://api.example.com").GetAwaiter().GetResult();
        }
        
        // ✅ WebRequest with KeepAlive = false
        var request = (HttpWebRequest)WebRequest.Create("https://api.example.com");
        request.KeepAlive = false;
        var response = request.GetResponse();
    }
}
```

## How to Fix

1. **For HttpClient**: Set `DefaultRequestHeaders.ConnectionClose = true` after creating the client
2. **For WebRequest/HttpWebRequest**: Set `KeepAlive = false` on the request object
3. **Always use using statements**: Ensure proper disposal of HTTP clients

### Before and After

```diff
  using (var client = new HttpClient())
  {
+     client.DefaultRequestHeaders.ConnectionClose = true;
      var response = client.GetAsync(url).GetAwaiter().GetResult();
  }
```

```diff
  var request = (HttpWebRequest)WebRequest.Create(url);
+ request.KeepAlive = false;
  var response = request.GetResponse();
```

## Suppression

If you have a legitimate need to suppress this warning:

```csharp
#pragma warning disable DEVKIT1009
using (var client = new HttpClient())
{
    // Custom handling
}
#pragma warning restore DEVKIT1009
```

Or in `.editorconfig`:

```ini
[*.cs]
dotnet_diagnostic.DEVKIT1009.severity = suggestion
```

---

## Rule Properties

| Property | Value |
|----------|-------|
| **Rule ID** | DEVKIT1009 |
| **Category** | DynamicsCrm.DevKit |
| **Severity** | Warning |
| **Enabled by default** | Yes |

