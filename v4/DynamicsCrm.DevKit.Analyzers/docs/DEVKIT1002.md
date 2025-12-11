# DEVKIT1002: Don't Use ColumnSet(true)

## Overview

| Property | Value |
|----------|-------|
| **Rule ID** | DEVKIT1002 |
| **Category** | DynamicsCrm.DevKit |
| **Severity** | Warning |
| **Enabled by default** | Yes |

## Description

This analyzer warns against using `ColumnSet(true)` or `AllColumns = true` which retrieves all columns from an entity. This is a well-known performance anti-pattern that retrieves unnecessary data and increases memory consumption.

## Microsoft Best Practice

📚 **[Retrieve specific columns for a table via query APIs](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/work-with-data/retrieve-specific-columns-entity-via-query-apis)**

> When you submit queries to retrieve data, include specific columns in the ColumnSet instance. Retrieving all columns causes performance issues.

## Why This Matters

Using `ColumnSet(true)` has several negative impacts:

1. **Performance Degradation**: Retrieves ALL columns, including large text fields, file columns, and calculated fields
2. **Increased Memory Usage**: More data transferred means higher memory consumption
3. **Network Overhead**: Larger payloads increase network latency
4. **Database Load**: Forces unnecessary column reads from the database
5. **Potential for Errors**: Some columns may have restricted access or throw errors when accessed

## Detection

The analyzer flags the following patterns:

| Pattern | Description |
|---------|-------------|
| `new ColumnSet(true)` | Constructor with `true` parameter |
| `AllColumns = true` | Property assignment |
| `<all-attributes/>` | FetchXML all-attributes element |

## Code Examples

### ❌ Bad Code

```csharp
// ColumnSet constructor with true
var entity = service.Retrieve("account", accountId, new ColumnSet(true));
```

```csharp
// AllColumns property set to true
var query = new QueryExpression("account")
{
    ColumnSet = new ColumnSet { AllColumns = true }
};
var results = service.RetrieveMultiple(query);
```

```csharp
// FetchXML with all-attributes
var fetchXml = @"
<fetch>
    <entity name='account'>
        <all-attributes/>
    </entity>
</fetch>";
```

### ✅ Good Code

```csharp
// Only retrieve the columns you need
var entity = service.Retrieve("account", accountId, 
    new ColumnSet("name", "accountnumber", "primarycontactid"));
```

```csharp
// Explicit column list in QueryExpression
var query = new QueryExpression("account")
{
    ColumnSet = new ColumnSet("name", "accountnumber", "emailaddress1")
};
var results = service.RetrieveMultiple(query);
```

```csharp
// FetchXML with specific attributes
var fetchXml = @"
<fetch>
    <entity name='account'>
        <attribute name='name'/>
        <attribute name='accountnumber'/>
        <attribute name='emailaddress1'/>
    </entity>
</fetch>";
```

## How to Fix

1. **Identify Required Columns**: Determine which columns your code actually uses
2. **Replace with Specific Columns**: Change `ColumnSet(true)` to `ColumnSet("column1", "column2", ...)`
3. **Review FetchXML**: Replace `<all-attributes/>` with individual `<attribute name='...'/>` elements

### Before
```csharp
var account = service.Retrieve("account", id, new ColumnSet(true));
var name = account.GetAttributeValue<string>("name");
```

### After
```csharp
var account = service.Retrieve("account", id, new ColumnSet("name"));
var name = account.GetAttributeValue<string>("name");
```

## Common Scenarios

### Scenario 1: Clone Entity
If you need to clone an entity, consider using the `CloneId` alternate key or explicitly listing required columns.

### Scenario 2: Dynamic Requirements
If column requirements are dynamic, build the ColumnSet programmatically:
```csharp
var columns = new List<string> { "name" };
if (needsEmail) columns.Add("emailaddress1");
var columnSet = new ColumnSet(columns.ToArray());
```

## Suppression

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

## Related Resources

- [Retrieve specific columns for a table via query APIs](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/work-with-data/retrieve-specific-columns-entity-via-query-apis)
- [Query data using QueryExpression](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/org-service/build-queries-with-queryexpression)
- [Use FetchXML to query data](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/use-fetchxml-construct-query)
