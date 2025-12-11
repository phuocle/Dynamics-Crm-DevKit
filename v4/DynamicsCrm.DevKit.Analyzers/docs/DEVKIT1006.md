# DEVKIT1006: Don't Use Batch Request Types in Plug-ins

## Overview

| Property | Value |
|----------|-------|
| **Rule ID** | DEVKIT1006 |
| **Category** | DynamicsCrm.DevKit |
| **Severity** | Warning |
| **Enabled by default** | Yes |

## Description

This analyzer warns against using batch request types (`ExecuteMultipleRequest`, `ExecuteTransactionRequest`, `CreateMultipleRequest`, `UpdateMultipleRequest`, `UpsertMultipleRequest`) within plug-ins or workflow activities. These can cause performance issues, timeout errors, and transaction problems.

## Microsoft Best Practice

📚 **[Don't use batch request types in plug-ins and workflow activities](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/avoid-batch-requests-plugin)**

> Batch requests used within a plug-in or workflow activity can become difficult to manage and may lead to performance issues. A plug-in runs within a database transaction. Calling additional batch requests within that transaction is not recommended because the batch becomes part of the transaction.

## Why This Matters

Using batch requests in plugins causes:

1. **Extended Transactions**: Batch operations extend the database transaction, increasing lock time
2. **Timeout Risks**: Long-running batches may exceed the 2-minute plugin timeout
3. **Complexity**: Error handling becomes more difficult with batched operations
4. **Nested Transactions**: Batch requests create nested transaction scenarios
5. **Platform Throttling**: May trigger platform-level throttling protections

## Batch Request Types

| Type | Description |
|------|-------------|
| `ExecuteMultipleRequest` | Executes multiple messages in a single request |
| `ExecuteTransactionRequest` | Executes multiple messages in a transaction |
| `CreateMultipleRequest` | Creates multiple records |
| `UpdateMultipleRequest` | Updates multiple records |
| `UpsertMultipleRequest` | Upserts multiple records |

## Detection

The analyzer flags instantiation of batch request types within:
- Classes implementing `Microsoft.Xrm.Sdk.IPlugin`
- Classes inheriting from `System.Activities.CodeActivity`
- Classes inheriting from `System.Activities.NativeActivity`

## Code Examples

### ❌ Bad Code

```csharp
public class MyPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
        var factory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
        var service = factory.CreateOrganizationService(context.UserId);
        
        // ❌ Using ExecuteMultipleRequest in plugin
        var batch = new ExecuteMultipleRequest
        {
            Requests = new OrganizationRequestCollection(),
            Settings = new ExecuteMultipleSettings
            {
                ContinueOnError = false,
                ReturnResponses = true
            }
        };
        
        foreach (var entity in entitiesToUpdate)
        {
            batch.Requests.Add(new UpdateRequest { Target = entity });
        }
        
        service.Execute(batch);  // This extends the transaction!
    }
}
```

```csharp
public class MyWorkflow : CodeActivity
{
    protected override void Execute(CodeActivityContext context)
    {
        // ❌ Using CreateMultipleRequest in workflow
        var request = new CreateMultipleRequest
        {
            Targets = new EntityCollection(entitiesToCreate)
        };
        service.Execute(request);
    }
}
```

### ✅ Good Code

```csharp
public class MyPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
        var factory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
        var service = factory.CreateOrganizationService(context.UserId);
        
        // ✅ Execute each request individually
        foreach (var entity in entitiesToUpdate)
        {
            service.Update(entity);
        }
    }
}
```

```csharp
public class MyPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        // ✅ For large operations, consider triggering async processing
        // Create a custom entity record that triggers a Flow/Azure Function
        var processingRequest = new Entity("custom_bulkprocessingrequest")
        {
            ["custom_data"] = SerializeData(entitiesToProcess),
            ["custom_status"] = "Pending"
        };
        service.Create(processingRequest);
        
        // Flow or Azure Function handles the bulk operation outside the transaction
    }
}
```

## How to Fix

### Option 1: Individual Operations

Replace batch operations with individual calls:

```csharp
// Before (batch)
var batch = new ExecuteMultipleRequest();
foreach (var entity in entities)
{
    batch.Requests.Add(new UpdateRequest { Target = entity });
}
service.Execute(batch);

// After (individual)
foreach (var entity in entities)
{
    service.Update(entity);
}
```

### Option 2: Async Processing

For large data sets, trigger async processing outside the plugin:

1. **Power Automate**: Create a Flow that processes records
2. **Azure Functions**: Trigger a function for bulk operations
3. **Custom Action**: Call an async custom action
4. **Background Job**: Queue work for a background service

### Option 3: Limit Scope

If you must process multiple records, limit the count:

```csharp
// Process only what's necessary in the plugin
var limitedEntities = entitiesToUpdate.Take(10);
foreach (var entity in limitedEntities)
{
    service.Update(entity);
}

// Queue remaining for async processing
if (entitiesToUpdate.Count > 10)
{
    QueueForAsyncProcessing(entitiesToUpdate.Skip(10));
}
```

## When Batch Requests ARE Appropriate

Batch requests are designed for:
- **External integrations**: Console apps, Azure Functions, web services
- **Data migration tools**: One-time or scheduled imports
- **Background jobs**: Processing outside of the platform transaction

## Suppression

```csharp
#pragma warning disable DEVKIT1006
var batch = new ExecuteMultipleRequest();
#pragma warning restore DEVKIT1006
```

Or in `.editorconfig`:

```ini
[*.cs]
dotnet_diagnostic.DEVKIT1006.severity = suggestion
```

## Related Resources

- [Don't use batch request types in plug-ins](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/avoid-batch-requests-plugin)
- [ExecuteMultiple](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/org-service/execute-multiple-requests)
- [Scalable Customization Design](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/scalable-customization-design/overview)
