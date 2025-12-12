# DEVKIT1019: Consider Checking context.Depth to Prevent Infinite Loops

## Description

This analyzer recommends checking `IPluginExecutionContext.Depth` in plugin classes to prevent infinite loops when plugins modify entities that trigger themselves recursively.

## Why This Matters

Plugin recursion without depth checks can cause:

1. **Infinite Loops**: A plugin that updates an entity can trigger itself, which updates the entity again, indefinitely
2. **Stack Overflow**: Deep recursion exhausts the call stack and crashes
3. **Platform Timeouts**: Recursive plugins hit the 2-minute timeout limit
4. **Cascading Failures**: Other plugins waiting in the pipeline fail due to timeout

## Detection

The analyzer flags IPlugin class declarations where:
- The class implements `Microsoft.Xrm.Sdk.IPlugin`
- The `Execute` method does not reference the `Depth` property

## Code Examples

### ❌ Bad Code

```csharp
public class AccountPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        // ❌ No depth check - can cause infinite loop
        var context = (IPluginExecutionContext)serviceProvider
            .GetService(typeof(IPluginExecutionContext));
        var factory = (IOrganizationServiceFactory)serviceProvider
            .GetService(typeof(IOrganizationServiceFactory));
        var service = factory.CreateOrganizationService(context.UserId);
        
        var target = (Entity)context.InputParameters["Target"];
        
        // This update triggers the plugin again!
        var update = new Entity("account", target.Id);
        update["modifiedon"] = DateTime.UtcNow;
        service.Update(update);
    }
}
```

### ✅ Good Code

```csharp
public class AccountPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        var context = (IPluginExecutionContext)serviceProvider
            .GetService(typeof(IPluginExecutionContext));
        
        // ✅ Exit early if this is a recursive call
        if (context.Depth > 1) return;
        
        var factory = (IOrganizationServiceFactory)serviceProvider
            .GetService(typeof(IOrganizationServiceFactory));
        var service = factory.CreateOrganizationService(context.UserId);
        
        var target = (Entity)context.InputParameters["Target"];
        
        // Now safe to update
        var update = new Entity("account", target.Id);
        update["modifiedon"] = DateTime.UtcNow;
        service.Update(update);
    }
}
```

## How to Fix

1. **Get the context**: Retrieve `IPluginExecutionContext` from the service provider
2. **Check Depth**: Add an early return condition like `if (context.Depth > 1) return;`
3. **Choose threshold**: Use `> 1` to run only on first call, or higher thresholds for controlled recursion

### Common Patterns

```csharp
// Pattern 1: Exit on any recursion
if (context.Depth > 1) return;

// Pattern 2: Allow limited recursion (e.g., 3 levels)
if (context.Depth > 3) 
    throw new InvalidPluginExecutionException("Maximum recursion depth exceeded");

// Pattern 3: Log depth for debugging
tracingService.Trace($"Plugin executing at depth: {context.Depth}");
if (context.Depth > 2) return;
```

## When to Suppress

You may suppress this warning if:
- Your plugin is guaranteed to never trigger itself (read-only operations)
- You intentionally allow controlled recursion with proper safeguards

```csharp
#pragma warning disable DEVKIT1019
public class ReadOnlyPlugin : IPlugin
{
    // This plugin only reads data, never triggers itself
}
#pragma warning restore DEVKIT1019
```

Or in `.editorconfig`:

```ini
[*.cs]
dotnet_diagnostic.DEVKIT1019.severity = none
```

## Related Rules

- [DEVKIT1007](DEVKIT1007.md) - Stateless plugin (related to plugin execution patterns)
- [DEVKIT1012](DEVKIT1012.md) - Use ITracingService (helpful for debugging depth issues)

---

## Rule Properties

| Property | Value |
|----------|-------|
| **Rule ID** | DEVKIT1019 |
| **Category** | DynamicsCrm.DevKit |
| **Severity** | Warning |
| **Enabled by default** | Yes |
