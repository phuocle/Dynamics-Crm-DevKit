# DEVKIT1004: Use of Deprecated SDK Messages

## Overview

| Property | Value |
|----------|-------|
| **Rule ID** | DEVKIT1004 |
| **Category** | DynamicsCrm.DevKit |
| **Severity** | Warning |
| **Enabled by default** | Yes |

## Description

This analyzer warns when using deprecated request/response classes from `Microsoft.Crm.Sdk.Messages`. These messages may be removed in future SDK versions and should be replaced with their modern equivalents.

## Microsoft Best Practice

📚 **[Deprecated SDK messages](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/org-service/deprecations)**

> The following messages are deprecated and should not be used. Most of these messages are for functionality that is no longer supported.

## Why This Matters

Using deprecated messages can cause:

1. **Future Compatibility Issues**: Messages may be removed in future SDK versions
2. **Unsupported Functionality**: Some deprecated messages represent discontinued features
3. **Technical Debt**: Code using deprecated APIs requires refactoring later
4. **Support Limitations**: Microsoft may not provide support for deprecated APIs

## Deprecated Messages List

The following request/response classes are flagged as deprecated:

| Deprecated Message | Replacement |
|-------------------|-------------|
| `SetStateRequest/Response` | Use `Update` request with statecode/statuscode |
| `ExecuteFetchRequest/Response` | Use `RetrieveMultiple` with FetchExpression |
| `AddProductToKitRequest/Response` | Product kits are deprecated |
| `AddSubstituteProductRequest/Response` | Use relationships instead |
| `AssociateEntitiesRequest/Response` | Use `Associate` request |
| `CompoundCreateRequest/Response` | Use individual Create requests |
| `CompoundUpdateRequest/Response` | Use individual Update requests |
| `ConvertKitToProductRequest/Response` | Product kits are deprecated |
| `ConvertProductToKitRequest/Response` | Product kits are deprecated |
| `DisassociateEntitiesRequest/Response` | Use `Disassociate` request |
| `RetrieveByResourcesServiceRequest/Response` | Feature deprecated |
| `RetrieveByResourcesServiceResponse` | Feature deprecated |
| `SetReportRelatedRequest/Response` | Use Update on report entity |

## Detection

The analyzer flags:
- `new` expressions creating deprecated request/response types
- Cast expressions `(DeprecatedType)obj`
- `as` expressions `obj as DeprecatedType`

## Code Examples

### ❌ Bad Code: SetStateRequest

```csharp
// Deprecated: SetStateRequest
var request = new SetStateRequest
{
    EntityMoniker = new EntityReference("account", accountId),
    State = new OptionSetValue(1),  // Active/Inactive
    Status = new OptionSetValue(2)   // Status reason
};
service.Execute(request);
```

### ✅ Good Code: Using Update

```csharp
// Modern: Use Update with statecode/statuscode
var account = new Entity("account", accountId)
{
    ["statecode"] = new OptionSetValue(1),
    ["statuscode"] = new OptionSetValue(2)
};
service.Update(account);
```

---

### ❌ Bad Code: ExecuteFetchRequest

```csharp
// Deprecated: ExecuteFetchRequest
var fetchXml = @"<fetch><entity name='account'>...</entity></fetch>";
var request = new ExecuteFetchRequest { FetchXml = fetchXml };
var response = (ExecuteFetchResponse)service.Execute(request);
var result = response.FetchXmlResult; // Returns XML string
```

### ✅ Good Code: Using RetrieveMultiple

```csharp
// Modern: RetrieveMultiple with FetchExpression
var fetchXml = @"<fetch><entity name='account'>...</entity></fetch>";
var result = service.RetrieveMultiple(new FetchExpression(fetchXml));
// Returns EntityCollection - easier to work with
```

---

### ❌ Bad Code: AssociateEntities

```csharp
// Deprecated: AssociateEntitiesRequest
var request = new AssociateEntitiesRequest
{
    Moniker1 = new EntityReference("account", accountId),
    Moniker2 = new EntityReference("contact", contactId),
    RelationshipName = "account_primary_contact"
};
service.Execute(request);
```

### ✅ Good Code: Using Associate

```csharp
// Modern: Associate request
service.Associate(
    "account",
    accountId,
    new Relationship("account_primary_contact"),
    new EntityReferenceCollection { new EntityReference("contact", contactId) }
);
```

## How to Fix

### SetStateRequest → Update

```csharp
// Before
var setStateRequest = new SetStateRequest
{
    EntityMoniker = entityRef,
    State = new OptionSetValue(0),
    Status = new OptionSetValue(1)
};
service.Execute(setStateRequest);

// After
var entity = new Entity(entityRef.LogicalName, entityRef.Id);
entity["statecode"] = new OptionSetValue(0);
entity["statuscode"] = new OptionSetValue(1);
service.Update(entity);
```

### ExecuteFetchRequest → RetrieveMultiple

```csharp
// Before
var response = (ExecuteFetchResponse)service.Execute(
    new ExecuteFetchRequest { FetchXml = fetchXml });

// After
var result = service.RetrieveMultiple(new FetchExpression(fetchXml));
```

## Suppression

If you must use a deprecated message temporarily:

```csharp
#pragma warning disable DEVKIT1004
var request = new SetStateRequest { ... };
#pragma warning restore DEVKIT1004
```

Or in `.editorconfig`:

```ini
[*.cs]
dotnet_diagnostic.DEVKIT1004.severity = suggestion
```

## Related Resources

- [Deprecated SDK messages](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/org-service/deprecations)
- [IOrganizationService methods](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/org-service/use-iorganizationservice)
- [Product bundles and kits](https://learn.microsoft.com/en-us/dynamics365/sales/product-bundles-kits)
