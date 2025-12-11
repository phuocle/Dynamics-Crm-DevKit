# DEVKIT1008: Don't Use Parallel Execution in Plug-ins

## Overview

| Property | Value |
|----------|-------|
| **Rule ID** | DEVKIT1008 |
| **Category** | DynamicsCrm.DevKit |
| **Severity** | Error |
| **Enabled by default** | Yes |

## Description

This analyzer detects usage of parallel execution patterns within `IPlugin` or `CodeActivity` classes. Multi-threading and parallel execution are not supported in the Dataverse sandbox and can cause unpredictable behavior, crashes, and data corruption.

## Microsoft Best Practice

📚 **[Do not use parallel execution within plug-ins and workflow activities](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/do-not-use-parallel-execution-in-plug-ins)**

> The Dataverse platform does not support multi-threading within plug-ins. Using parallel execution patterns can cause thread-safety issues, unpredictable behavior, and errors that are difficult to diagnose.

## Why This Matters

When you use parallel execution in plugins:

1. **Sandbox Restrictions**: The sandbox environment doesn't support multi-threading properly
2. **Thread-Safety Issues**: Shared resources may be accessed concurrently, causing race conditions
3. **Unpredictable Behavior**: Threads may be terminated unexpectedly by the platform
4. **Transaction Problems**: Database transactions cannot span multiple threads properly

## Detected Patterns

| Pattern | Example |
|---------|---------|
| `Task.Run()` | `Task.Run(() => DoWork());` |
| `Task.Factory.StartNew()` | `Task.Factory.StartNew(() => DoWork());` |
| `Parallel.For()` | `Parallel.For(0, 10, i => Process(i));` |
| `Parallel.ForEach()` | `Parallel.ForEach(items, Process);` |
| `Parallel.Invoke()` | `Parallel.Invoke(Action1, Action2);` |
| `new Thread()` | `new Thread(() => DoWork()).Start();` |
| `ThreadPool.QueueUserWorkItem()` | `ThreadPool.QueueUserWorkItem(DoWork);` |

## Detection

The analyzer flags the following patterns within `IPlugin` or `CodeActivity` classes:
- `Task.Run()` and `Task.Factory.StartNew()` method calls
- `Parallel.For()`, `Parallel.ForEach()`, `Parallel.Invoke()` method calls
- `new Thread()` object creation
- `ThreadPool.QueueUserWorkItem()` method calls

## Code Examples

### ❌ Bad Code

```csharp
public class MyPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        var factory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
        var service = factory.CreateOrganizationService(null);
        
        var entities = GetEntitiesToProcess();
        
        // ❌ Parallel.ForEach is not supported
        Parallel.ForEach(entities, entity => {
            service.Update(entity);
        });
        
        // ❌ Task.Run spawns a new thread
        Task.Run(() => ProcessData());
        
        // ❌ Creating threads directly
        var thread = new Thread(() => DoBackgroundWork());
        thread.Start();
    }
}
```

### ✅ Good Code

```csharp
public class MyPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        var factory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
        var service = factory.CreateOrganizationService(null);
        
        var entities = GetEntitiesToProcess();
        
        // ✓ Process entities sequentially
        foreach (var entity in entities)
        {
            service.Update(entity);
        }
        
        // ✓ Direct method call
        ProcessData();
    }
}
```

## How to Fix

1. **Replace Parallel.ForEach with foreach**: Convert parallel loops to sequential loops
2. **Remove Task.Run calls**: Execute the code synchronously instead
3. **Remove Thread instantiation**: Use direct method calls

### Before and After

```diff
- Parallel.ForEach(items, item => {
-     ProcessItem(item);
- });

+ foreach (var item in items)
+ {
+     ProcessItem(item);
+ }
```

## Suppression

If you have a legitimate need to suppress this warning:

```csharp
#pragma warning disable DEVKIT1008
Task.Run(() => DoWork());
#pragma warning restore DEVKIT1008
```

Or in `.editorconfig`:

```ini
[*.cs]
dotnet_diagnostic.DEVKIT1008.severity = none
```
