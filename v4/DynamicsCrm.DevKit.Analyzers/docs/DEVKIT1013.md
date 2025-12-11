# DEVKIT1013: Avoid Registering Plugins on Retrieve/RetrieveMultiple

## Overview

| Property | Value |
|----------|-------|
| **Rule ID** | DEVKIT1013 |
| **Category** | DynamicsCrm.DevKit |
| **Severity** | Warning |
| **Enabled by default** | Yes |

## Description

This analyzer warns when a plugin is registered on `Retrieve` or `RetrieveMultiple` messages. These messages are called very frequently and plugins on them can significantly impact system performance.

## Microsoft Best Practice

📚 **[Limit the registration of plug-ins for Retrieve and RetrieveMultiple messages](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/limit-registration-plugins-retrieve-retrievemultiple)**

> Adding synchronous plug-in logic to the Retrieve and RetrieveMultiple message events can result in slowness. Consider using alternate design approaches if you require logic to run during these messages.

## Why This Matters

Plugins on Retrieve/RetrieveMultiple messages cause:

1. **Frequent Execution**: These messages are called constantly during normal application use
2. **UI Slowdown**: Every form load, lookup, and view triggers these messages
3. **Cascading Impact**: Slow retrievals affect all parts of the system
4. **Scalability Issues**: Performance degrades as user count increases

## Performance Impact

| Operation | Retrieve/RetrieveMultiple calls |
|-----------|-------------------------------|
| Opening a form | Multiple calls per form |
| Loading a view | One RetrieveMultiple per view |
| Lookup search | RetrieveMultiple for each keystroke |
| Related records grid | RetrieveMultiple for each grid |

## Detection

The analyzer flags `[CrmPluginRegistration]` attributes where:
- The message parameter is `"Retrieve"`
- The message parameter is `"RetrieveMultiple"`

## Code Examples

### ❌ Bad Code

```csharp
// ❌ Plugin on Retrieve - runs EVERY time any record is opened
[CrmPluginRegistration("Retrieve", "account", StageEnum.PostOperation, 
    ExecutionModeEnum.Synchronous, "", "Retrieve Account")]
public class RetrieveAccountPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        // This runs on EVERY account form load!
    }
}

// ❌ Plugin on RetrieveMultiple - runs EVERY time a view or lookup is loaded
[CrmPluginRegistration("RetrieveMultiple", "contact", StageEnum.PostOperation, 
    ExecutionModeEnum.Synchronous, "", "RetrieveMultiple Contact")]
public class RetrieveMultipleContactPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        // This runs on EVERY contact view load!
    }
}
```

### ✅ Good Code - Alternative Approaches

```csharp
// ✅ Use Create/Update plugins to set calculated fields
[CrmPluginRegistration("Update", "account", StageEnum.PreOperation, 
    ExecutionModeEnum.Synchronous, "revenue,numberofemployees", "Calculate Account Rating")]
public class CalculateAccountRatingPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        // Pre-calculate values during Update instead of during Retrieve
        var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
        var target = (Entity)context.InputParameters["Target"];
        
        // Calculate and store the value
        target["new_calculatedrating"] = CalculateRating(target);
    }
}
```

## Alternatives to Retrieve/RetrieveMultiple Plugins

| Need | Alternative |
|------|-------------|
| Calculated fields | Use Create/Update to pre-calculate and store |
| Security filtering | Use row-level security or column-level security |
| Data transformation | Use Views with saved queries |
| External data | Use Virtual Entities |
| UI logic | Use JavaScript on form load |

## How to Fix

1. **Pre-calculate Values**: Store calculated values during Create/Update instead of computing during Retrieve
2. **Use Security Features**: Row-level security, column security profiles, or field-level security
3. **Client-side Logic**: Move logic to JavaScript for UI-specific needs
4. **Virtual Entities**: Use for external data integration

### Before and After

```diff
- [CrmPluginRegistration("Retrieve", "account", ...)]
- public class RetrieveAccountPlugin : IPlugin
+ [CrmPluginRegistration("Update", "account", StageEnum.PreOperation,
+     ExecutionModeEnum.Synchronous, "revenue", "Pre-Calculate Values")]
+ public class PreCalculateAccountPlugin : IPlugin
```

## Suppression

If you have a legitimate need for Retrieve/RetrieveMultiple plugins:

```csharp
#pragma warning disable DEVKIT1013
[CrmPluginRegistration("Retrieve", "account", StageEnum.PostOperation, 
    ExecutionModeEnum.Synchronous, "", "Retrieve Account")]
#pragma warning restore DEVKIT1013
```

Or in `.editorconfig`:

```ini
[*.cs]
dotnet_diagnostic.DEVKIT1013.severity = none
```
