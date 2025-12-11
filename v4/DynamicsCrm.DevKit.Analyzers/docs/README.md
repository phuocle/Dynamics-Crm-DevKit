```text
  ____                              _           ____                  ____             _  ___ _        _                _                        
 |  _ \ _   _ _ __   __ _ _ __ ___ (_) ___ ___ / ___|_ __ _ __ ___   |  _ \  _____   _| |/ (_) |_     / \   _ __   __ _| |_   _ _______ _ __ ___ 
 | | | | | | | '_ \ / _` | '_ ` _ \| |/ __/ __| |   | '__| '_ ` _ \  | | | |/ _ \ \ / / ' /| | __|   / _ \ | '_ \ / _` | | | | |_  / _ \ '__/ __|
 | |_| | |_| | | | | (_| | | | | | | | (__\__ \ |___| |  | | | | | |_| |_| |  __/\ V /| . \| | |_ _ / ___ \| | | | (_| | | |_| |/ /  __/ |  \__ \
 |____/ \__, |_| |_|\__,_|_| |_| |_|_|\___|___/\____|_|  |_| |_| |_(_)____/ \___| \_/ |_|\_\_|\__(_)_/   \_\_| |_|\__,_|_|\__, /___\___|_|  |___/
        |___/                         https://github.com/phuocle/Dynamics-Crm-DevKit x.xx.xx.xx Build: xxxx.yy.zz HH.mm.ss|___/                                   
```
# DynamicsCrm.DevKit.Analyzers

A Roslyn-based code analyzer package for Microsoft Dynamics 365 / Power Platform development. It provides compile-time diagnostics to help developers follow best practices and avoid common pitfalls when building plugins, custom workflows, and other CRM customizations.

## Installation

Install via NuGet:
```
dotnet add package DynamicsCrm.DevKit.Analyzers
```

Or add to your `.csproj`:
```xml
<PackageReference Include="DynamicsCrm.DevKit.Analyzers" Version="*" PrivateAssets="all" />
```

## Diagnostic Rules

| Rule ID | Severity | Description |
|---------|----------|-------------|
| [DEVKIT1001](#devkit1001) | Error | Update message should have filtering attributes |
| [DEVKIT1002](#devkit1002) | Warning | Don't use `ColumnSet(true)` |
| [DEVKIT1003](#devkit1003) | Error | Plugin image validation |
| [DEVKIT1004](#devkit1004) | Warning | Use of deprecated SDK messages |
| [DEVKIT1005](#devkit1005) | Error | EntityReference maybe null |
| [DEVKIT1006](#devkit1006) | Warning | Don't use batch request types in plug-ins |

---

### DEVKIT1001
**Update message should have filtering attributes**

**Severity:** Error

Ensures that plugin registrations for `Update`, `UpdateMultiple`, or `OnExternalUpdated` messages include specific filtering attributes. This prevents the plugin from executing on every field change, improving performance.

**Bad Code:**
```csharp
[CrmPluginRegistration("Update", "account", StageEnum.PreOperation, ExecutionModeEnum.Synchronous, 
    filteringAttributes: "",  // ❌ Empty filtering attributes
    stepName: "Pre-Update Account")]
```

```csharp
[CrmPluginRegistration("Update", "account", StageEnum.PreOperation, ExecutionModeEnum.Synchronous, 
    filteringAttributes: "*",  // ❌ All attributes
    stepName: "Pre-Update Account")]
```

**Good Code:**
```csharp
[CrmPluginRegistration("Update", "account", StageEnum.PreOperation, ExecutionModeEnum.Synchronous, 
    filteringAttributes: "name,accountnumber",  // ✓ Specific attributes
    stepName: "Pre-Update Account")]
```

[📖 Documentation](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1001)

---

### DEVKIT1002
**Don't use ColumnSet(true)**

**Severity:** Warning

Warns against using `ColumnSet(true)` which retrieves all columns from an entity. This is a performance anti-pattern as it retrieves unnecessary data.

**Bad Code:**
```csharp
// ❌ Retrieves all columns
var entity = service.Retrieve("account", id, new ColumnSet(true));

// ❌ AllColumns = true
var query = new QueryExpression("account")
{
    ColumnSet = new ColumnSet { AllColumns = true }
};

// ❌ FetchXML with all-attributes
var fetch = @"<fetch><entity name='account'><all-attributes/></entity></fetch>";
```

**Good Code:**
```csharp
// ✓ Only retrieve needed columns
var entity = service.Retrieve("account", id, new ColumnSet("name", "accountnumber"));
```

[📖 Documentation](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1002)

---

### DEVKIT1003
**Plugin image validation**

**Severity:** Error

Validates that plugin image configurations are compatible with the message and stage. The Dynamics 365 platform has specific rules about when Pre-Images and Post-Images are available:

| Message | Stage | Pre-Image | Post-Image |
|---------|-------|-----------|------------|
| Create | PreValidation / PreOperation | ❌ | ❌ |
| Create | PostOperation | ❌ | ✓ |
| Update | PreValidation / PreOperation | ✓ | ❌ |
| Update | PostOperation | ✓ | ✓ |
| Delete | PreValidation / PreOperation | ✓ | ❌ |
| Delete | PostOperation | ✓ | ❌ |

**Bad Code:**
```csharp
// ❌ Pre-Create cannot have Pre-Image or Post-Image
[CrmPluginRegistration("Create", "account", StageEnum.PreOperation, ExecutionModeEnum.Synchronous,
    Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "name")]

// ❌ Pre-Update cannot have Post-Image  
[CrmPluginRegistration("Update", "account", StageEnum.PreOperation, ExecutionModeEnum.Synchronous,
    Image1Type = ImageTypeEnum.PostImage, Image1Attributes = "name")]
```

**Good Code:**
```csharp
// ✓ Post-Create can have Post-Image
[CrmPluginRegistration("Create", "account", StageEnum.PostOperation, ExecutionModeEnum.Synchronous,
    Image1Type = ImageTypeEnum.PostImage, Image1Attributes = "name")]

// ✓ Post-Update can have both images
[CrmPluginRegistration("Update", "account", StageEnum.PostOperation, ExecutionModeEnum.Synchronous,
    Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "name",
    Image2Type = ImageTypeEnum.PostImage, Image2Attributes = "name")]
```

[📖 Documentation](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1003)

---

### DEVKIT1004
**Use of deprecated SDK messages**

**Severity:** Warning

Warns when using deprecated request/response classes from `Microsoft.Crm.Sdk.Messages`. These messages may be removed in future SDK versions.

**Deprecated Messages Include:**
- `AddProductToKitRequest/Response`
- `AddSubstituteProductRequest/Response`
- `AssociateEntitiesRequest/Response`
- `CompoundCreateRequest/Response`
- `CompoundUpdateRequest/Response`
- `ConvertKitToProductRequest/Response`
- `ConvertProductToKitRequest/Response`
- `DisassociateEntitiesRequest/Response`
- `ExecuteFetchRequest/Response`
- `SetStateRequest/Response`
- And more...

**Bad Code:**
```csharp
// ❌ Deprecated message
var request = new SetStateRequest
{
    EntityMoniker = new EntityReference("account", accountId),
    State = new OptionSetValue(1),
    Status = new OptionSetValue(2)
};
service.Execute(request);
```

**Good Code:**
```csharp
// ✓ Use Update instead
var account = new Entity("account", accountId)
{
    ["statecode"] = new OptionSetValue(1),
    ["statuscode"] = new OptionSetValue(2)
};
service.Update(account);
```

[📖 Documentation](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1004)

---

### DEVKIT1005
**EntityReference maybe null**

**Severity:** Error

Flags potential null reference exceptions when accessing `Id`, `Name`, or `LogicalName` properties of an `EntityReference` that may be null. Lookup fields in Dynamics 365 can return null if no value is set.

**Bad Code:**
```csharp
// ❌ EntityReference may be null
var ownerId = entity.GetAttributeValue<EntityReference>("ownerid").Id;
var ownerName = entity.GetAttributeValue<EntityReference>("ownerid").Name;

// ❌ In string concatenation
var message = "Owner: " + entity.GetAttributeValue<EntityReference>("ownerid").Name;
```

**Good Code:**
```csharp
// ✓ Null-conditional operator
var ownerId = entity.GetAttributeValue<EntityReference>("ownerid")?.Id;
var ownerName = entity.GetAttributeValue<EntityReference>("ownerid")?.Name;

// ✓ Null check first
var ownerRef = entity.GetAttributeValue<EntityReference>("ownerid");
if (ownerRef != null)
{
    var ownerId = ownerRef.Id;
}
```

[📖 Documentation](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1005)

---

### DEVKIT1006
**Don't use batch request types in plug-ins and workflow activities**

**Severity:** Warning

Warns against using batch request types (`ExecuteMultipleRequest`, `ExecuteTransactionRequest`, `CreateMultipleRequest`, `UpdateMultipleRequest`, `UpsertMultipleRequest`) within plug-ins or workflow activities. These can cause performance issues and timeout errors.

**MS Best Practice:** [Don't use batch request types in plug-ins](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/avoid-batch-requests-plugin)

**Bad Code:**
```csharp
public class MyPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        // ❌ Using ExecuteMultipleRequest in plugin
        var batch = new ExecuteMultipleRequest();
        foreach (var entity in entities)
        {
            batch.Requests.Add(new UpdateRequest { Target = entity });
        }
        service.Execute(batch);
    }
}
```

**Good Code:**
```csharp
public class MyPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        // ✓ Execute each request individually
        foreach (var entity in entities)
        {
            service.Update(entity);
        }
    }
}
```

[📖 Documentation](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DEVKIT1006)

---

## Configuration

You can suppress specific rules in your `.editorconfig`:

```ini
[*.cs]
# Disable specific rules
dotnet_diagnostic.DEVKIT1001.severity = none
dotnet_diagnostic.DEVKIT1002.severity = suggestion
```

Or use `#pragma` directives:
```csharp
#pragma warning disable DEVKIT1002
var entity = service.Retrieve("account", id, new ColumnSet(true));
#pragma warning restore DEVKIT1002
```

## Requirements

- .NET Standard 2.0 compatible projects
- Visual Studio 2019+ or any IDE with Roslyn analyzer support

## License

This project is part of [DynamicsCrm.DevKit](https://github.com/phuocle/Dynamics-Crm-DevKit).