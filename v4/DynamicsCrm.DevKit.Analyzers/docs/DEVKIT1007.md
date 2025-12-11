# DEVKIT1007: IPlugin Implementations Should Be Stateless

## Overview

| Property | Value |
|----------|-------|
| **Rule ID** | DEVKIT1007 |
| **Category** | DynamicsCrm.DevKit |
| **Severity** | Error |
| **Enabled by default** | Yes |

## Description

This analyzer detects assignments to instance fields or properties during plug-in or workflow activity execution. IPlugin and CodeActivity classes are cached and reused across multiple threads - storing state in instance members causes thread-safety issues and data inconsistencies.

## Microsoft Best Practice

📚 **[Develop IPlugin implementations as stateless](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/develop-iplugin-implementations-stateless)**

> The platform caches plug-in class instances. The way they cache and reuse the instance means that developers cannot use class member variables in plug-ins except in specific, well-known patterns.

## Why This Matters

Storing state in plugin instance members causes:

1. **Thread-Safety Issues**: Multiple threads share the same instance simultaneously
2. **Data Corruption**: One execution can overwrite another's data mid-execution
3. **Race Conditions**: Unpredictable behavior based on execution timing
4. **Difficult Debugging**: Issues are intermittent and hard to reproduce
5. **Security Risks**: Data from one user's execution leaking to another's

## How Plugin Caching Works

```
Plugin Instance (cached in memory)
├── Constructor called ONCE
├── Execute() called multiple times by different threads
│   ├── Thread 1: User A triggers Update
│   ├── Thread 2: User B triggers Update (SAME instance!)
│   └── Thread 3: User C triggers Update (SAME instance!)
└── Instance members are SHARED across all executions!
```

## Detection

The analyzer flags assignments to instance fields or properties in:
- `IPlugin` implementations during any method execution
- `CodeActivity`, `NativeActivity`, or `Activity` implementations
- Helper methods called from execution context

### Safe Patterns (Not Flagged)
- Constructor assignments
- `readonly` field assignments in constructor
- `static` field/property assignments
- `const` declarations
- Local variable assignments

## Code Examples

### ❌ Bad Code

```csharp
public class BadPlugin : IPlugin
{
    // ❌ Mutable instance fields - shared across all executions!
    private IOrganizationService _service;
    private IPluginExecutionContext _context;
    private Entity _target;
    private Guid _userId;
    
    public void Execute(IServiceProvider serviceProvider)
    {
        // ❌ Assigning to instance fields during execution
        _context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
        
        var factory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
        _service = factory.CreateOrganizationService(_context.UserId);
        
        _target = (Entity)_context.InputParameters["Target"];
        _userId = _context.UserId;
        
        ProcessEntity();  // Uses instance fields
    }
    
    private void ProcessEntity()
    {
        // ❌ At this point, another thread may have overwritten _target!
        _service.Update(_target);
    }
}
```

```csharp
public class BadPlugin : IPlugin
{
    // ❌ Instance property - same problem as field
    public IOrganizationService Service { get; set; }
    
    public void Execute(IServiceProvider serviceProvider)
    {
        // ❌ Assigning to property during execution
        Service = GetService(serviceProvider);
    }
}
```

### ✅ Good Code

```csharp
public class GoodPlugin : IPlugin
{
    // ✅ Readonly field - assigned in constructor only
    private readonly string _unsecureConfig;
    private readonly string _secureConfig;
    
    // ✅ Static readonly - safe for constants
    private static readonly string ConnectionString = "...";
    
    public GoodPlugin(string unsecure, string secure)
    {
        // ✅ Constructor assignment is safe
        _unsecureConfig = unsecure;
        _secureConfig = secure;
    }
    
    public void Execute(IServiceProvider serviceProvider)
    {
        // ✅ Local variables - each execution has its own
        var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
        
        var factory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
        var service = factory.CreateOrganizationService(context.UserId);
        
        var target = (Entity)context.InputParameters["Target"];
        
        // ✅ Pass dependencies to helper methods
        ProcessEntity(service, target);
    }
    
    private void ProcessEntity(IOrganizationService service, Entity target)
    {
        // ✅ Uses parameters, not instance fields
        service.Update(target);
    }
}
```

### ✅ Good Code: Using a Context Object

```csharp
public class GoodPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        // ✅ Create a local execution context object
        var executionContext = new PluginExecutionContext(serviceProvider);
        ProcessBusinessLogic(executionContext);
    }
    
    private void ProcessBusinessLogic(PluginExecutionContext ctx)
    {
        ctx.Service.Update(ctx.Target);
    }
}

// ✅ Local class to hold execution-specific data
public class PluginExecutionContext
{
    public IOrganizationService Service { get; }
    public Entity Target { get; }
    
    public PluginExecutionContext(IServiceProvider serviceProvider)
    {
        var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
        var factory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
        
        Service = factory.CreateOrganizationService(context.UserId);
        Target = (Entity)context.InputParameters["Target"];
    }
}
```

## How to Fix

### Step 1: Identify Instance Members

Look for:
- `private Type _fieldName;`
- `public Type PropertyName { get; set; }`

### Step 2: Convert to Local Variables

```csharp
// Before (instance field)
private IOrganizationService _service;

public void Execute(IServiceProvider serviceProvider)
{
    _service = GetService();
    DoWork();
}

private void DoWork()
{
    _service.Update(entity);
}

// After (local variable)
public void Execute(IServiceProvider serviceProvider)
{
    var service = GetService();
    DoWork(service);
}

private void DoWork(IOrganizationService service)
{
    service.Update(entity);
}
```

### Step 3: Use Constructor for Configuration Only

```csharp
public class MyPlugin : IPlugin
{
    // ✅ Only configuration - set once in constructor, never changed
    private readonly string _secureConfig;
    private readonly bool _isDebugMode;
    
    public MyPlugin(string unsecure, string secure)
    {
        _secureConfig = secure;
        _isDebugMode = unsecure?.Contains("debug") == true;
    }
}
```

## Workflow Activities

The same rules apply to `CodeActivity` and other workflow activity types:

```csharp
public class MyWorkflow : CodeActivity
{
    // ❌ Bad - instance field
    private IOrganizationService _service;
    
    // ✅ Good - InArgument/OutArgument (workflow-specific)
    [Input("Input Value")]
    public InArgument<string> InputValue { get; set; }
    
    protected override void Execute(CodeActivityContext context)
    {
        // ✅ Good - local variable
        var service = context.GetExtension<IOrganizationServiceFactory>()
            .CreateOrganizationService(/* userId */);
            
        var inputValue = InputValue.Get(context);
    }
}
```

## Suppression

If you understand the threading implications:

```csharp
#pragma warning disable DEVKIT1007
private IOrganizationService _service;
#pragma warning restore DEVKIT1007
```

Or in `.editorconfig`:

```ini
[*.cs]
dotnet_diagnostic.DEVKIT1007.severity = warning
```

## Related Resources

- [Develop IPlugin implementations as stateless](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/develop-iplugin-implementations-stateless)
- [Write a plug-in](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/write-plug-in)
- [Plug-in design](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/plug-ins)
- [Thread safety in .NET](https://learn.microsoft.com/en-us/dotnet/standard/threading/managed-threading-best-practices)
