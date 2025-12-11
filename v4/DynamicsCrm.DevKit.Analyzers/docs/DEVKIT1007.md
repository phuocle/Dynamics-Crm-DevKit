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

## Safe Patterns

| Pattern | Status |
|---------|--------|
| Constructor assignments | ✅ Safe |
| `readonly` field assignments in constructor | ✅ Safe |
| `static` field/property assignments | ✅ Safe |
| `const` declarations | ✅ Safe |
| Local variable assignments | ✅ Safe |
| Instance field assignment in Execute | ❌ Unsafe |

## Detection

The analyzer flags assignments to instance fields or properties in:
- `IPlugin` implementations during any method execution
- `CodeActivity`, `NativeActivity`, or `Activity` implementations
- Helper methods called from execution context

## Code Examples

### ❌ Bad Code

```csharp
public class BadPlugin : IPlugin
{
    // ❌ Mutable instance fields - shared across all executions!
    private IOrganizationService _service;
    private IPluginExecutionContext _context;
    private Entity _target;
    
    public void Execute(IServiceProvider serviceProvider)
    {
        // ❌ Assigning to instance fields during execution
        _context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
        
        var factory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
        _service = factory.CreateOrganizationService(_context.UserId);
        
        _target = (Entity)_context.InputParameters["Target"];
        
        ProcessEntity();  // Uses instance fields - DANGEROUS!
    }
}
```

### ✅ Good Code

```csharp
public class GoodPlugin : IPlugin
{
    // ✅ Readonly field - assigned in constructor only
    private readonly string _secureConfig;
    
    public GoodPlugin(string unsecure, string secure)
    {
        // ✅ Constructor assignment is safe
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

## How to Fix

1. **Convert to Local Variables**: Replace instance fields with local variables in Execute method
2. **Pass as Parameters**: Pass dependencies to helper methods instead of using instance state
3. **Use Constructor for Configuration Only**: Only store immutable configuration in instance fields

### Before and After

```diff
- private IOrganizationService _service;
  
  public void Execute(IServiceProvider serviceProvider)
  {
-     _service = GetService();
-     DoWork();
+     var service = GetService();
+     DoWork(service);
  }
  
- private void DoWork()
+ private void DoWork(IOrganizationService service)
  {
-     _service.Update(entity);
+     service.Update(entity);
  }
```

## Suppression

If you have a legitimate need to suppress this warning:

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
