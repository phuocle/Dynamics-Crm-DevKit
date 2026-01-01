# DEVKIT1002: Don't Use ColumnSet(true)

## 📖 Description

This analyzer warns against using `ColumnSet(true)` or `AllColumns = true` which retrieves all columns from an entity. This is a well-known performance anti-pattern that retrieves unnecessary data and increases memory consumption.

## 🎯 Microsoft Best Practice

📚 **[Retrieve specific columns for a table via query APIs](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/work-with-data/retrieve-specific-columns-entity-via-query-apis)**

> When you submit queries to retrieve data, include specific columns in the ColumnSet instance. Retrieving all columns causes performance issues.

## ⚠️ Why This Matters

Using `ColumnSet(true)` has several negative impacts:

1. **⚡ Performance Degradation**: Retrieves ALL columns, including large text fields, file columns, and calculated fields
2. **💾 Increased Memory Usage**: More data transferred means higher memory consumption
3. **🌐 Network Overhead**: Larger payloads increase network latency
4. **🗄️ Database Load**: Forces unnecessary column reads from the database

## 📋 Detected Patterns

| Pattern | Description |
|---------|-------------|
| `new ColumnSet(true)` | Constructor with `true` parameter |
| `AllColumns = true` | Property assignment |
| `<all-attributes/>` | FetchXML all-attributes element |

## 🔍 Detection

The analyzer flags usages where:
- `new ColumnSet(true)` is called
- `ColumnSet.AllColumns` property is set to `true`

## 💻 Code Examples

### ❌ Bad Code

```csharp
// ColumnSet constructor with true
var entity = service.Retrieve("account", accountId, new ColumnSet(true));

// AllColumns property set to true
var query = new QueryExpression("account")
{
    ColumnSet = new ColumnSet { AllColumns = true }
};
var results = service.RetrieveMultiple(query);
```

### ✅ Good Code

```csharp
// Only retrieve the columns you need
var entity = service.Retrieve("account", accountId, 
    new ColumnSet("name", "accountnumber", "primarycontactid"));

// Explicit column list in QueryExpression
var query = new QueryExpression("account")
{
    ColumnSet = new ColumnSet("name", "accountnumber", "emailaddress1")
};
var results = service.RetrieveMultiple(query);
```

## 🔧 How to Fix

1. **🔍 Identify Required Columns**: Determine which columns your code actually uses
2. **🔄 Replace with Specific Columns**: Change `ColumnSet(true)` to `ColumnSet("column1", "column2", ...)`
3. **📝 Review FetchXML**: Replace `<all-attributes/>` with individual `<attribute name='...'/>` elements

### 🔄 Before and After

```diff
- var account = service.Retrieve("account", id, new ColumnSet(true));
+ var account = service.Retrieve("account", id, new ColumnSet("name", "accountnumber"));
```

## 🔕 Suppression

If you have a legitimate need to suppress this warning:

```csharp
#pragma warning disable DEVKIT1002
var entity = service.Retrieve("account", id, new ColumnSet(true));
#pragma warning restore DEVKIT1002
```

Or in `.editorconfig`:

```ini
[*.cs]
dotnet_diagnostic.DEVKIT1002.severity = suggestion
```

---

## 📊 Rule Properties

| Property | Value |
|----------|-------|
| **Rule ID** | DEVKIT1002 |
| **Category** | DynamicsCrm.DevKit |
| **Severity** | Warning |
| **Enabled by default** | Yes |

