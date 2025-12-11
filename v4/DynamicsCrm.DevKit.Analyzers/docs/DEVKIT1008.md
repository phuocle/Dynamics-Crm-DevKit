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
5. **Debugging Difficulty**: Issues caused by threading are extremely hard to reproduce and diagnose

## Detected Patterns

The analyzer flags the following patterns within `IPlugin` or `CodeActivity` classes:

| Pattern | Example |
|---------|---------|
| `Task.Run()` | `Task.Run(() => DoWork());` |
| `Task.Factory.StartNew()` | `Task.Factory.StartNew(() => DoWork());` |
| `Parallel.For()` | `Parallel.For(0, 10, i => Process(i));` |
| `Parallel.ForEach()` | `Parallel.ForEach(items, Process);` |
| `Parallel.Invoke()` | `Parallel.Invoke(Action1, Action2);` |
| `new Thread()` | `new Thread(() => DoWork()).Start();` |
| `ThreadPool.QueueUserWorkItem()` | `ThreadPool.QueueUserWorkItem(DoWork);` |

## Code Examples

### ❌ Bad Code: Using Parallel.ForEach

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
    }
}
```

### ❌ Bad Code: Using Task.Run

```csharp
public class MyPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        // ❌ Task.Run spawns a new thread
        Task.Run(() => {
            ProcessData();
        });
        
        // ❌ Task.Factory.StartNew also spawns threads
        Task.Factory.StartNew(() => {
            AnotherProcess();
        });
    }
}
```

### ❌ Bad Code: Using Thread

```csharp
public class MyPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        // ❌ Creating threads directly
        var thread = new Thread(() => {
            DoBackgroundWork();
        });
        thread.Start();
        
        // ❌ ThreadPool is also not allowed
        ThreadPool.QueueUserWorkItem(state => {
            ProcessState(state);
        });
    }
}
```

### ✅ Good Code: Sequential Processing

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
    }
}
```

### ✅ Good Code: Using ExecuteMultiple for Batch Operations

If you need to process many records, use built-in batch operations instead of parallel execution:

```csharp
public class MyPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        // Note: ExecuteMultiple should generally be avoided in plugins too (see DEVKIT1006)
        // But if you have a legitimate use case, it's better than parallel execution
        
        // ✓ Process synchronously
        foreach (var record in records)
        {
            ProcessRecord(record);
        }
    }
}
```

## How to Fix

1. **Replace Parallel.ForEach with foreach**: Convert parallel loops to sequential loops
2. **Remove Task.Run calls**: Execute the code synchronously instead
3. **Remove Thread instantiation**: Use direct method calls
4. **Consider async patterns for external calls**: For HTTP calls, use async/await patterns (but be aware it's still synchronous in plugins)

### Before and After

```diff
public void Execute(IServiceProvider serviceProvider)
{
    var items = GetItems();
    
-   // Parallel execution
-   Parallel.ForEach(items, item => {
-       ProcessItem(item);
-   });
    
+   // Sequential execution
+   foreach (var item in items)
+   {
+       ProcessItem(item);
+   }
}
```

## Suppression

If you have a specific reason to use parallel execution (e.g., in a custom application that imports the plugin assembly), you can suppress this warning:

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

## Related Resources

- [Do not use parallel execution within plug-ins and workflow activities](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/do-not-use-parallel-execution-in-plug-ins)
- [Develop IPlugin implementations as stateless](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/develop-iplugin-implementations-stateless)
- [Plug-in and Custom Workflow Activity best practices](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/)
