# DEVKIT1004: Use of Deprecated SDK Messages

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

## Deprecated Messages

| Deprecated Message | Replacement |
|-------------------|-------------|
| `SetStateRequest/Response` | Use `Update` request with statecode/statuscode |
| `ExecuteFetchRequest/Response` | Use `RetrieveMultiple` with FetchExpression |
| `AssociateEntitiesRequest/Response` | Use `Associate` request |
| `DisassociateEntitiesRequest/Response` | Use `Disassociate` request |
| `CompoundCreateRequest/Response` | Use individual Create requests |
| `CompoundUpdateRequest/Response` | Use individual Update requests |

## Detection

The analyzer flags usages where:
- `new` expressions creating deprecated request/response types
- Cast expressions `(DeprecatedType)obj`
- `as` expressions `obj as DeprecatedType`

## Code Examples

### ❌ Bad Code

```csharp
// Deprecated: SetStateRequest
var request = new SetStateRequest
{
    EntityMoniker = new EntityReference("account", accountId),
    State = new OptionSetValue(1),
    Status = new OptionSetValue(2)
};
service.Execute(request);

// Deprecated: ExecuteFetchRequest
var fetchXml = @"<fetch><entity name='account'>...</entity></fetch>";
var request = new ExecuteFetchRequest { FetchXml = fetchXml };
var response = (ExecuteFetchResponse)service.Execute(request);
```

### ✅ Good Code

```csharp
// Modern: Use Update with statecode/statuscode
var account = new Entity("account", accountId)
{
    ["statecode"] = new OptionSetValue(1),
    ["statuscode"] = new OptionSetValue(2)
};
service.Update(account);

// Modern: RetrieveMultiple with FetchExpression
var fetchXml = @"<fetch><entity name='account'>...</entity></fetch>";
var result = service.RetrieveMultiple(new FetchExpression(fetchXml));
```

## How to Fix

1. **Identify Deprecated Usage**: Find all usages of deprecated request types
2. **Use Modern Equivalent**: Replace with the modern API as shown in the table above
3. **Test Thoroughly**: Ensure the replacement works correctly in all scenarios

### Before and After

```diff
- var request = new SetStateRequest
- {
-     EntityMoniker = entityRef,
-     State = new OptionSetValue(0),
-     Status = new OptionSetValue(1)
- };
- service.Execute(request);

+ var entity = new Entity(entityRef.LogicalName, entityRef.Id);
+ entity["statecode"] = new OptionSetValue(0);
+ entity["statuscode"] = new OptionSetValue(1);
+ service.Update(entity);
```

## Suppression

If you have a legitimate need to suppress this warning:

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

---

## Rule Properties

| Property | Value |
|----------|-------|
| **Rule ID** | DEVKIT1004 |
| **Category** | DynamicsCrm.DevKit |
| **Severity** | Warning |
| **Enabled by default** | Yes |

