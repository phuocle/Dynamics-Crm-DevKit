# DEVKIT1010: Set Timeout for External HTTP Calls

## 📖 Description

This analyzer warns when using `HttpClient` in plugins without setting an explicit Timeout. The default HttpClient timeout is 100 seconds, which may exceed the plugin timeout limit (2 minutes for synchronous plugins).

## 🎯 Microsoft Best Practice

📚 **[Set Timeout when making external calls from a plug-in](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/set-timeout-for-external-calls-from-plug-ins)**

> When making external HTTP calls from plug-ins, set an explicit timeout value to prevent the call from blocking indefinitely. External service delays can cause plugin timeouts.

## ⚠️ Why This Matters

Not setting a timeout for external HTTP calls causes:

1. **Plugin Timeout Errors**: External service delays can cause the plugin to exceed its 2-minute timeout
2. **Poor User Experience**: Users wait indefinitely for unresponsive external services
3. **Resource Blocking**: Long-running requests block sandbox threads
4. **Failed Transactions**: If the plugin times out, the entire transaction fails

## Detected Patterns

| Pattern | Issue |
|---------|-------|
| `new HttpClient()` | Default timeout is 100 seconds |
| HttpClient without `.Timeout` set | May exceed plugin timeout |

## 🔍 Detection

The analyzer flags instantiation of HttpClient within:
- Classes implementing `Microsoft.Xrm.Sdk.IPlugin`
- Classes inheriting from `System.Activities.CodeActivity`

## 💻 Code Examples

### ❌ Bad Code

```csharp
public class MyPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        // ❌ HttpClient with default timeout (100 seconds)
        using (var client = new HttpClient())
        {
            // This could take up to 100 seconds, exceeding plugin timeout
            var response = client.GetAsync("https://api.example.com").GetAwaiter().GetResult();
        }
    }
}
```

### ✅ Good Code

```csharp
public class MyPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        // ✅ HttpClient with explicit timeout (15 seconds)
        using (var client = new HttpClient())
        {
            client.Timeout = TimeSpan.FromSeconds(15);
            var response = client.GetAsync("https://api.example.com").GetAwaiter().GetResult();
        }
    }
}
```

## 🔧 How to Fix

1. **Set Explicit Timeout**: Always set `HttpClient.Timeout` to a reasonable value
2. **Use Short Timeouts**: 15-30 seconds is recommended for plugin scenarios
3. **Handle Timeout Exceptions**: Wrap HTTP calls in try-catch to handle `TaskCanceledException`

### Before and After

```diff
  using (var client = new HttpClient())
  {
+     client.Timeout = TimeSpan.FromSeconds(15);
      var response = client.GetAsync(url).GetAwaiter().GetResult();
  }
```

## Recommended Timeout Values

| Scenario | Recommended Timeout |
|----------|-------------------|
| Simple API calls | 15 seconds |
| Complex queries | 30 seconds |
| File uploads (small) | 60 seconds |
| Maximum safe value | 90 seconds |

> **Note:** Synchronous plugins have a 2-minute timeout. Leave buffer time for other plugin logic.

## 🔕 Suppression

If you have a legitimate need to suppress this warning:

```csharp
#pragma warning disable DEVKIT1010
using (var client = new HttpClient())
{
    // Custom timeout handling
}
#pragma warning restore DEVKIT1010
```

Or in `.editorconfig`:

```ini
[*.cs]
dotnet_diagnostic.DEVKIT1010.severity = suggestion
```

---

---

## 📊 Rule Properties

| Property | Value |
|----------|-------|
| **Rule ID** | DEVKIT1010 |
| **Category** | DynamicsCrm.DevKit |
| **Severity** | Warning |
| **Enabled by default** | Yes |

