# DEVKIT1001: Update Message Should Have Filtering Attributes

## Overview

| Property | Value |
|----------|-------|
| **Rule ID** | DEVKIT1001 |
| **Category** | DynamicsCrm.DevKit |
| **Severity** | Error |
| **Enabled by default** | Yes |

## Description

This analyzer ensures that plugin registrations for `Update`, `UpdateMultiple`, or `OnExternalUpdated` messages include specific filtering attributes. Without filtering attributes, the plugin executes on **every field change**, which can significantly impact performance.

## Microsoft Best Practice

📚 **[Include filtering attributes with plug-in registration](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/include-filtering-attributes-plugin-registration)**

> Adding synchronous plug-in logic to the Update message event without including filtering attributes will cause the plug-in logic to be executed for any update to the entity. This can slow down the performance of the system.

## Why This Matters

When you register a plugin on the `Update` message without filtering attributes:

1. **Performance Impact**: The plugin fires for every update, even if fields the plugin doesn't care about are modified
2. **Unnecessary Execution**: Users experience delays when updating unrelated fields
3. **Resource Waste**: Server resources are consumed processing updates that don't require plugin logic
4. **Potential Cascading Issues**: Other plugins and workflows may be delayed

## Detection

The analyzer flags `[CrmPluginRegistration]` attributes where:
- The message is `Update`, `UpdateMultiple`, or `OnExternalUpdated`
- The `filteringAttributes` parameter is:
  - Empty string (`""`)
  - Asterisk (`"*"`) - which means all attributes
  - Not specified at all

## Code Examples

### ❌ Bad Code

```csharp
// Empty filtering attributes - fires on EVERY field update
[CrmPluginRegistration("Update", "account", StageEnum.PreOperation, ExecutionModeEnum.Synchronous, 
    filteringAttributes: "",
    stepName: "Pre-Update Account")]
public class AccountUpdate : IPlugin
{
    public void Execute(IServiceProvider serviceProvider) { }
}
```

```csharp
// Using asterisk - equivalent to no filter
[CrmPluginRegistration("Update", "account", StageEnum.PreOperation, ExecutionModeEnum.Synchronous, 
    filteringAttributes: "*",
    stepName: "Pre-Update Account")]
public class AccountUpdate : IPlugin
{
    public void Execute(IServiceProvider serviceProvider) { }
}
```

### ✅ Good Code

```csharp
// Specific filtering attributes - only fires when name or accountnumber changes
[CrmPluginRegistration("Update", "account", StageEnum.PreOperation, ExecutionModeEnum.Synchronous, 
    filteringAttributes: "name,accountnumber",
    stepName: "Pre-Update Account")]
public class AccountUpdate : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        // This code only runs when 'name' or 'accountnumber' is modified
    }
}
```

## How to Fix

1. **Identify Required Fields**: Determine which fields your plugin actually needs to respond to
2. **Add Filtering Attributes**: Specify only those field names in the `filteringAttributes` parameter
3. **Use Comma Separation**: Multiple fields should be separated by commas without spaces

```csharp
filteringAttributes: "field1,field2,field3"
```

## Suppression

If you have a legitimate need to respond to all field updates, you can suppress this warning:

```csharp
#pragma warning disable DEVKIT1001
[CrmPluginRegistration("Update", "account", StageEnum.PreOperation, ExecutionModeEnum.Synchronous, 
    filteringAttributes: "",
    stepName: "Pre-Update Account")]
#pragma warning restore DEVKIT1001
```

Or in `.editorconfig`:

```ini
[*.cs]
dotnet_diagnostic.DEVKIT1001.severity = none
```

## Related Resources

- [Include filtering attributes with plug-in registration](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/include-filtering-attributes-plugin-registration)
- [Register a plug-in](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/register-plug-in)
- [Event execution pipeline](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/event-framework)
