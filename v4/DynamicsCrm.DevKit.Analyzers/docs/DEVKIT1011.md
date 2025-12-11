# DEVKIT1011: Use InvalidPluginExecutionException for Errors

## Overview

| Property | Value |
|----------|-------|
| **Rule ID** | DEVKIT1011 |
| **Category** | DynamicsCrm.DevKit |
| **Severity** | Warning |
| **Enabled by default** | Yes |

## Description

This analyzer warns when throwing exceptions other than `InvalidPluginExecutionException` in plugins or workflow activities. Only `InvalidPluginExecutionException` is properly handled by the platform and displays meaningful error messages to users.

## Microsoft Best Practice

📚 **[Use InvalidPluginExecutionException in plug-ins and workflow activities](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/use-invalidpluginexecutionexception-plugin-workflow-activities)**

> Use InvalidPluginExecutionException when raising errors within the context of a plug-in or workflow activity. The platform catches this exception type and displays the message to the user.

## Why This Matters

Using other exception types causes:

1. **Generic Error Messages**: Users see unhelpful "An error occurred" messages
2. **Lost Error Details**: Specific error information is not shown to users
3. **Poor Debugging**: Stack traces may not be logged properly
4. **Inconsistent Behavior**: Different exception types are handled differently

## Detection

The analyzer flags `throw` statements within plugins or workflows where:
- The exception type is not `InvalidPluginExecutionException`
- The exception does not derive from `InvalidPluginExecutionException`
- Re-throw statements (`throw;`) are allowed

## Code Examples

### ❌ Bad Code

```csharp
public class MyPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        // ❌ Generic Exception - user sees "An error occurred"
        throw new Exception("Something went wrong");
        
        // ❌ ArgumentException - not properly displayed
        throw new ArgumentException("Invalid argument");
        
        // ❌ Custom exception - not handled by platform
        throw new MyCustomException("Custom error");
    }
}
```

### ✅ Good Code

```csharp
public class MyPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        // ✅ InvalidPluginExecutionException - message shown to user
        throw new InvalidPluginExecutionException("Please provide a valid account name.");
        
        // ✅ With operation status for specific error handling
        throw new InvalidPluginExecutionException(
            OperationStatus.Failed, 
            "The record could not be processed.");
        
        // ✅ Re-throw is allowed (preserves original exception)
        try
        {
            // some code
        }
        catch
        {
            throw; // Re-throw is OK
        }
    }
}
```

## How to Fix

1. **Replace Exception Type**: Change all `throw new Exception()` to `throw new InvalidPluginExecutionException()`
2. **Preserve Original Exception**: Use the inner exception overload when catching and re-throwing
3. **Use User-Friendly Messages**: Write messages that users can understand and act on

### Before and After

```diff
- throw new Exception("Something went wrong");
+ throw new InvalidPluginExecutionException("Something went wrong");
```

```diff
  catch (Exception ex)
  {
-     throw new Exception("Failed to process", ex);
+     throw new InvalidPluginExecutionException($"Failed to process: {ex.Message}");
  }
```

## Suppression

If you have a legitimate need to suppress this warning:

```csharp
#pragma warning disable DEVKIT1011
throw new ArgumentException("This is intentional");
#pragma warning restore DEVKIT1011
```

Or in `.editorconfig`:

```ini
[*.cs]
dotnet_diagnostic.DEVKIT1011.severity = suggestion
```
