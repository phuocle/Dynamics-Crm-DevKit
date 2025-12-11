# DEVKIT1001: Create/Update Message Should Have Filtering Attributes

## Overview

| Property | Value |
|----------|-------|
| **Rule ID** | DEVKIT1001 |
| **Category** | DynamicsCrm.DevKit |
| **Severity** | Error |
| **Enabled by default** | Yes |

## Description

This analyzer ensures that plugin registrations for `Create`, `CreateMultiple`, `Update`, `UpdateMultiple`, `OnExternalCreated`, or `OnExternalUpdated` messages include specific filtering attributes. Without filtering attributes, the plugin executes on **every field change**, which can significantly impact performance.

## Microsoft Best Practice

📚 **[Include filtering attributes with plug-in registration](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/include-filtering-attributes-plugin-registration)**

> Adding synchronous plug-in logic to Create or Update message events without including filtering attributes will cause the plug-in logic to be executed for any change to the entity. This can slow down the performance of the system.

## Why This Matters

When you register a plugin on Create or Update messages without filtering attributes:

1. **Performance Impact**: The plugin fires for every create/update, even if fields the plugin doesn't care about are modified
2. **Unnecessary Execution**: Users experience delays when modifying unrelated fields
3. **Resource Waste**: Server resources are consumed processing changes that don't require plugin logic
4. **Potential Cascading Issues**: Other plugins and workflows may be delayed

## Applicable Messages

| Message | Supports Filtering |
|---------|:-----------------:|
| `Create` | ✅ |
| `CreateMultiple` | ✅ |
| `OnExternalCreated` | ✅ |
| `Update` | ✅ |
| `UpdateMultiple` | ✅ |
| `OnExternalUpdated` | ✅ |

## Detection

The analyzer flags `[CrmPluginRegistration]` attributes where:
- The message is `Create`, `CreateMultiple`, `Update`, `UpdateMultiple`, `OnExternalCreated`, or `OnExternalUpdated`
- The `filteringAttributes` parameter is empty string (`""`), asterisk (`"*"`), or not specified

## Code Examples

### ❌ Bad Code

```csharp
// Create with empty filtering - fires on EVERY create
[CrmPluginRegistration("Create", "account", StageEnum.PreOperation, ExecutionModeEnum.Synchronous, 
    filteringAttributes: "",
    stepName: "Pre-Create Account")]
public class AccountCreate : IPlugin
{
    public void Execute(IServiceProvider serviceProvider) { }
}

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
// Create - only fires when name or accountnumber is provided
[CrmPluginRegistration("Create", "account", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, 
    filteringAttributes: "name,accountnumber",
    stepName: "Post-Create Account")]
public class AccountCreate : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        // This code only runs when 'name' or 'accountnumber' is provided during creation
    }
}

// Update - only fires when name or accountnumber changes
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

### Before and After

```diff
- filteringAttributes: ""
+ filteringAttributes: "name,accountnumber"
```

## Suppression

If you have a legitimate need to suppress this warning:

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
