# DEVKIT1005: EntityReference Maybe Null

## 📖 Description

This analyzer flags potential `NullReferenceException` when accessing `Id`, `Name`, or `LogicalName` properties of an `EntityReference` that may be null. Lookup fields in Dynamics 365 can return null if no value is set.

## 🎯 Microsoft Best Practice

📚 **[Entity class documentation](https://learn.microsoft.com/en-us/dotnet/api/microsoft.xrm.sdk.entity)**

> Always check if an EntityReference is null before accessing its properties. Lookup fields are nullable by nature and attempting to access properties on null references will cause runtime exceptions.

## ⚠️ Why This Matters

Accessing properties on a null EntityReference causes:

1. **💥 Runtime Exceptions**: `NullReferenceException` crashes your plugin
2. **🔄 Failed Transactions**: The entire operation may be rolled back
3. **😞 Poor User Experience**: Users see cryptic error messages
4. **🔍 Difficult Debugging**: Stack traces don't always clearly indicate the null field

## 📋 Common Scenarios

| Scenario | Risk Level |
|----------|------------|
| New records without lookup value | High |
| Optional lookup fields | High |
| System fields that may be empty | Medium |
| Cleared lookup values | High |

## 🔍 Detection

The analyzer flags direct property access on `GetAttributeValue<EntityReference>()`:
- `.Id` property access
- `.Name` property access
- `.LogicalName` property access

## 💻 Code Examples

### ❌ Bad Code

```csharp
// Direct access without null check - will throw if ownerid is null
var ownerId = entity.GetAttributeValue<EntityReference>("ownerid").Id;

// Name access - especially risky as Name is often unset
var ownerName = entity.GetAttributeValue<EntityReference>("ownerid").Name;

// Multiple unsafe accesses
var parentId = entity.GetAttributeValue<EntityReference>("parentaccountid").Id;
var parentName = entity.GetAttributeValue<EntityReference>("parentaccountid").Name;
```

### ✅ Good Code

```csharp
// Option 1: Null-conditional operator (C# 6+)
var ownerId = entity.GetAttributeValue<EntityReference>("ownerid")?.Id;
var ownerName = entity.GetAttributeValue<EntityReference>("ownerid")?.Name;

// Option 2: Explicit null check
var ownerRef = entity.GetAttributeValue<EntityReference>("ownerid");
if (ownerRef != null)
{
    var ownerId = ownerRef.Id;
    var ownerName = ownerRef.Name;
}

// Option 3: Null-coalescing with default
var ownerId = entity.GetAttributeValue<EntityReference>("ownerid")?.Id ?? Guid.Empty;
var ownerName = entity.GetAttributeValue<EntityReference>("ownerid")?.Name ?? "Unknown";
```

## 🔧 How to Fix

1. **➕ Add Null-Conditional Operator**: Change `.Id` to `?.Id` which returns `Guid?`
2. **✅ Use Explicit Null Check**: Store reference in variable and check before accessing
3. **🔄 Provide Default Value**: Use null-coalescing operator for fallback values

### 🔄 Before and After

```diff
- var id = entity.GetAttributeValue<EntityReference>("lookupfield").Id;
+ var id = entity.GetAttributeValue<EntityReference>("lookupfield")?.Id;
```

## 🔕 Suppression

If you have a legitimate need to suppress this warning:

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

---

## 📊 Rule Properties

| Property | Value |
|----------|-------|
| **Rule ID** | DEVKIT1005 |
| **Category** | DynamicsCrm.DevKit |
| **Severity** | Error |
| **Enabled by default** | Yes |

