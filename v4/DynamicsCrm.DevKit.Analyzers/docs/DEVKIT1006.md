# DEVKIT1006: Don't Use Batch Request Types in Plug-ins

## Description

This analyzer warns against using batch request types (`ExecuteMultipleRequest`, `ExecuteTransactionRequest`, `CreateMultipleRequest`, `UpdateMultipleRequest`, `UpsertMultipleRequest`) within plug-ins or workflow activities. These can cause performance issues, timeout errors, and transaction problems.

## Microsoft Best Practice

📚 **[Don't use batch request types in plug-ins and workflow activities](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/avoid-batch-requests-plugin)**

> Batch requests used within a plug-in or workflow activity can become difficult to manage and may lead to performance issues. A plug-in runs within a database transaction. Calling additional batch requests within that transaction is not recommended.

## Why This Matters

Using batch requests in plugins causes:

1. **Extended Transactions**: Batch operations extend the database transaction, increasing lock time
2. **Timeout Risks**: Long-running batches may exceed the 2-minute plugin timeout
3. **Complexity**: Error handling becomes more difficult with batched operations
4. **Nested Transactions**: Batch requests create nested transaction scenarios

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
        var factory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
        var service = factory.CreateOrganizationService(null);
        
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

### ✅ Good Code

```csharp
public class MyPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        var factory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
        var service = factory.CreateOrganizationService(null);
        
        // ✅ Execute each request individually
        foreach (var entity in entitiesToUpdate)
        {
            service.Update(entity);
        }
    }
}
```

## How to Fix

1. **Replace with Individual Operations**: Use individual Create/Update/Delete calls instead of batch
2. **Use Async Processing**: For large data sets, trigger async processing outside the plugin
3. **Limit Scope**: If processing multiple records, limit the count and queue remaining for async

### Before and After

```diff
- var batch = new ExecuteMultipleRequest();
- foreach (var entity in entities)
- {
-     batch.Requests.Add(new UpdateRequest { Target = entity });
- }
- service.Execute(batch);

+ foreach (var entity in entities)
+ {
+     service.Update(entity);
+ }
```

## Suppression

If you have a legitimate need to suppress this warning:

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

---

## Rule Properties

| Property | Value |
|----------|-------|
| **Rule ID** | DEVKIT1006 |
| **Category** | DynamicsCrm.DevKit |
| **Severity** | Warning |
| **Enabled by default** | Yes |

