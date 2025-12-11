# DEVKIT1016: Avoid Retrieving Unpublished Metadata

## Description

This analyzer detects usage of `RetrieveAsIfPublished = true` on metadata requests. Retrieving unpublished metadata adds overhead to processing and can return metadata that users might not expect.

## Microsoft Best Practice

📚 **[Retrieve published metadata](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/work-with-metadata/retrieve-published-metadata)**

> Retrieving unpublished metadata not only adds overhead to processing the request itself, performing more slowly, it could also return metadata that the requestor doesn't expect.

## Why This Matters

When you retrieve unpublished metadata:

1. **Slower Performance**: The query has more overhead
2. **User Confusion**: Returns customizations that haven't been published yet
3. **Unexpected Results**: Developers may see changes that aren't visible to users

## Affected Request Types

| Request Type | Namespace |
|--------------|-----------|
| `RetrieveAllEntitiesRequest` | Microsoft.Xrm.Sdk.Messages |
| `RetrieveAllOptionSetsRequest` | Microsoft.Xrm.Sdk.Messages |
| `RetrieveAttributeRequest` | Microsoft.Xrm.Sdk.Messages |
| `RetrieveEntityRequest` | Microsoft.Xrm.Sdk.Messages |
| `RetrieveOptionSetRequest` | Microsoft.Xrm.Sdk.Messages |
| `RetrieveRelationshipRequest` | Microsoft.Xrm.Sdk.Messages |
| `RetrieveEntityKeyRequest` | Microsoft.Xrm.Sdk.Messages |

## Code Examples

### ❌ Bad Code

```csharp
// Object initializer with RetrieveAsIfPublished = true
var request = new RetrieveEntityRequest
{
    MetadataId = entityId,
    RetrieveAsIfPublished = true  // ⚠️ Performance issue
};
service.Execute(request);

// Assignment after creation
var request2 = new RetrieveAllEntitiesRequest();
request2.RetrieveAsIfPublished = true;  // ⚠️ Performance issue
```

### ✅ Good Code

```csharp
// Default behavior (RetrieveAsIfPublished = false)
var request = new RetrieveEntityRequest
{
    MetadataId = entityId
    // RetrieveAsIfPublished defaults to false - good!
};
service.Execute(request);

// Explicit false (for clarity)
var request2 = new RetrieveAllEntitiesRequest
{
    RetrieveAsIfPublished = false
};
```

## When to Use `RetrieveAsIfPublished = true`

The only valid use case is when building a **metadata editor** that needs to show unpublished changes:

```csharp
// ✅ Valid use case: Metadata editor showing draft changes
public class MetadataEditorService
{
    public EntityMetadata GetEntityWithDraftChanges(Guid entityId)
    {
        // This is intentional - we need unpublished changes
        #pragma warning disable DEVKIT1016
        var request = new RetrieveEntityRequest
        {
            MetadataId = entityId,
            RetrieveAsIfPublished = true
        };
        #pragma warning restore DEVKIT1016
        
        return ((RetrieveEntityResponse)service.Execute(request)).EntityMetadata;
    }
}
```

## Suppression

If you're building a metadata editor and need unpublished data:

```csharp
#pragma warning disable DEVKIT1016
var request = new RetrieveEntityRequest { RetrieveAsIfPublished = true };
#pragma warning restore DEVKIT1016
```

Or in `.editorconfig`:

```ini
[*.cs]
dotnet_diagnostic.DEVKIT1016.severity = none
```

---

## Rule Properties

| Property | Value |
|----------|-------|
| **Rule ID** | DEVKIT1016 |
| **Category** | DynamicsCrm.DevKit |
| **Severity** | Warning |
| **Enabled by default** | Yes |

