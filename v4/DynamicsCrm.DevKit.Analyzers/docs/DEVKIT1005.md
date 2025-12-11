# DEVKIT1005: EntityReference Maybe Null

## Overview

| Property | Value |
|----------|-------|
| **Rule ID** | DEVKIT1005 |
| **Category** | DynamicsCrm.DevKit |
| **Severity** | Error |
| **Enabled by default** | Yes |

## Description

This analyzer flags potential `NullReferenceException` when accessing `Id`, `Name`, or `LogicalName` properties of an `EntityReference` that may be null. Lookup fields in Dynamics 365 can return null if no value is set.

## Best Practice

**Null safety pattern for lookup fields**

> Always check if an EntityReference is null before accessing its properties. Lookup fields are nullable by nature and attempting to access properties on null references will cause runtime exceptions.

## Why This Matters

Accessing properties on a null EntityReference causes:

1. **Runtime Exceptions**: `NullReferenceException` crashes your plugin
2. **Failed Transactions**: The entire operation may be rolled back
3. **Poor User Experience**: Users see cryptic error messages
4. **Difficult Debugging**: Stack traces don't always clearly indicate the null field

## Common Scenarios

| Scenario | Risk Level |
|----------|------------|
| New records without lookup value | High |
| Optional lookup fields | High |
| System fields that may be empty | Medium |
| Cleared lookup values | High |

## Detection

The analyzer flags direct property access on `GetAttributeValue<EntityReference>()`:

- `.Id` property access
- `.Name` property access
- `.LogicalName` property access

It also detects these patterns in:
- Variable assignments
- String concatenations
- Method arguments

## Code Examples

### ❌ Bad Code

```csharp
// Direct access without null check - will throw if ownerid is null
var ownerId = entity.GetAttributeValue<EntityReference>("ownerid").Id;
```

```csharp
// Name access - especially risky as Name is often unset
var ownerName = entity.GetAttributeValue<EntityReference>("ownerid").Name;
```

```csharp
// In string concatenation
var message = "Owner: " + entity.GetAttributeValue<EntityReference>("ownerid").Name;
```

```csharp
// Multiple unsafe accesses
var parentId = entity.GetAttributeValue<EntityReference>("parentaccountid").Id;
var parentName = entity.GetAttributeValue<EntityReference>("parentaccountid").Name;
var parentType = entity.GetAttributeValue<EntityReference>("parentaccountid").LogicalName;
```

### ✅ Good Code

#### Option 1: Null-Conditional Operator (C# 6+)

```csharp
// Returns Guid? (nullable Guid)
var ownerId = entity.GetAttributeValue<EntityReference>("ownerid")?.Id;

// Check for value before using
if (ownerId.HasValue)
{
    // Use ownerId.Value
}
```

```csharp
// For string properties - returns null if reference is null
var ownerName = entity.GetAttributeValue<EntityReference>("ownerid")?.Name;
var ownerType = entity.GetAttributeValue<EntityReference>("ownerid")?.LogicalName;
```

#### Option 2: Explicit Null Check

```csharp
var ownerRef = entity.GetAttributeValue<EntityReference>("ownerid");
if (ownerRef != null)
{
    var ownerId = ownerRef.Id;
    var ownerName = ownerRef.Name;
    
    // Safe to use ownerId and ownerName
}
```

#### Option 3: Null-Coalescing with Default

```csharp
// Provide default value if null
var ownerId = entity.GetAttributeValue<EntityReference>("ownerid")?.Id ?? Guid.Empty;
var ownerName = entity.GetAttributeValue<EntityReference>("ownerid")?.Name ?? "Unknown";
```

#### Option 4: Pattern Matching (C# 7+)

```csharp
if (entity.GetAttributeValue<EntityReference>("ownerid") is EntityReference ownerRef)
{
    // ownerRef is guaranteed non-null here
    var ownerId = ownerRef.Id;
    var ownerName = ownerRef.Name;
}
```

## How to Fix

### Quick Fix: Add Null-Conditional

```csharp
// Before
var id = entity.GetAttributeValue<EntityReference>("lookupfield").Id;

// After - returns Guid? instead of Guid
var id = entity.GetAttributeValue<EntityReference>("lookupfield")?.Id;
```

### For Required Fields with Validation

```csharp
var ownerRef = entity.GetAttributeValue<EntityReference>("ownerid");
if (ownerRef == null)
{
    throw new InvalidPluginExecutionException("Owner is required");
}
var ownerId = ownerRef.Id;
```

### Helper Method Pattern

```csharp
public static class EntityExtensions
{
    public static Guid? GetLookupId(this Entity entity, string attributeName)
    {
        return entity.GetAttributeValue<EntityReference>(attributeName)?.Id;
    }
    
    public static string GetLookupName(this Entity entity, string attributeName)
    {
        return entity.GetAttributeValue<EntityReference>(attributeName)?.Name;
    }
}

// Usage
var ownerId = entity.GetLookupId("ownerid");
var ownerName = entity.GetLookupName("ownerid");
```

## Suppression

If you're certain the field will never be null:

```csharp
#pragma warning disable DEVKIT1005
var ownerId = entity.GetAttributeValue<EntityReference>("ownerid").Id;
#pragma warning restore DEVKIT1005
```

Or in `.editorconfig`:

```ini
[*.cs]
dotnet_diagnostic.DEVKIT1005.severity = warning
```

## Related Resources

- [Entity class](https://learn.microsoft.com/en-us/dotnet/api/microsoft.xrm.sdk.entity)
- [EntityReference class](https://learn.microsoft.com/en-us/dotnet/api/microsoft.xrm.sdk.entityreference)
- [Null-conditional operators](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/member-access-operators#null-conditional-operators--and-)
