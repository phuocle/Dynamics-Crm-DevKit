# DEVKIT1014: Avoid AppDomain Event Registration in Plug-ins

## Description

This analyzer detects subscription to `AppDomain` events within plugin or workflow activity classes. Plugin instances are cached and reused, so subscribing to AppDomain events can cause memory leaks and unexpected behavior.

## Why This Matters

When you subscribe to AppDomain events in plugins:

1. **Memory Leaks**: Event handlers are never removed, causing memory to accumulate
2. **Multiple Subscriptions**: Each plugin execution might add another subscription
3. **Unexpected Behavior**: Event handlers from one execution might interfere with another
4. **Platform Instability**: Can affect the entire AppDomain, not just your plugin

## Problematic Events

| Event | Risk |
|-------|------|
| `UnhandledException` | High - affects global exception handling |
| `FirstChanceException` | High - catches all exceptions before handlers |
| `AssemblyResolve` | High - affects assembly loading |
| `TypeResolve` | Medium - affects type resolution |
| `ResourceResolve` | Medium - affects resource loading |
| `AssemblyLoad` | Medium - monitors assembly loading |
| `DomainUnload` | High - runs on domain shutdown |
| `ProcessExit` | High - runs on process exit |

## Code Examples

### ❌ Bad Code

```csharp
public class BadPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        // ❌ Memory leak - event handler never removed
        AppDomain.CurrentDomain.UnhandledException += (s, e) =>
        {
            // Handle exception
        };
        
        // ❌ Multiple subscriptions per execution
        AppDomain.CurrentDomain.AssemblyResolve += OnAssemblyResolve;
    }
    
    private Assembly OnAssemblyResolve(object sender, ResolveEventArgs e)
    {
        // Resolve assembly
        return null;
    }
}
```

### ✅ Good Code

```csharp
public class GoodPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        var tracingService = (ITracingService)serviceProvider
            .GetService(typeof(ITracingService));
        
        try
        {
            // Do work
        }
        catch (Exception ex)
        {
            // ✅ Handle exceptions locally instead of using AppDomain events
            tracingService.Trace("Error: {0}", ex.Message);
            throw new InvalidPluginExecutionException(
                "An error occurred", ex);
        }
    }
}
```

## How to Fix

1. **Remove AppDomain event subscriptions** from plugin code
2. **Use try-catch blocks** for exception handling
3. **Use ITracingService** for logging
4. **Throw InvalidPluginExecutionException** for errors

## Suppression

In rare cases where you need this (not recommended):

```csharp
#pragma warning disable DEVKIT1014
AppDomain.CurrentDomain.UnhandledException += handler;
#pragma warning restore DEVKIT1014
```

Or in `.editorconfig`:

```ini
[*.cs]
dotnet_diagnostic.DEVKIT1014.severity = none
```

> **Warning**: Suppressing this rule is strongly discouraged as it can cause platform instability.

---

## Rule Properties

| Property | Value |
|----------|-------|
| **Rule ID** | DEVKIT1014 |
| **Category** | DynamicsCrm.DevKit |
| **Severity** | Error |
| **Enabled by default** | Yes |

