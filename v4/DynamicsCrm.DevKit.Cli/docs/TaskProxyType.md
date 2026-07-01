# Task: Proxy Types (Early-Bound Classes)

## Overview

The Proxy Types task generates early-bound entity classes for Dynamics 365/Dataverse using the Microsoft CrmSvcUtil tool. These generated classes provide compile-time type safety, IntelliSense support, and strongly-typed access to entities, attributes, and option sets. The task wraps CrmSvcUtil with custom extensions to filter entities and provides seamless integration with your development workflow.

---

## Task Type

**CLI Type:** `proxytypes`

**Used in command line:**
```powershell
DynamicsCrm.DevKit.Cli /conn:"ConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:proxytypes /profile:ALL
```

---

## Command Line Parameters

### Required Parameters

| Parameter | Description | Example |
|-----------|-------------|---------|
| `/json` | Path to CLI configuration file | `/json:"DynamicsCrm.DevKit.Cli.json"` |
| `/type` | Task type to execute | `/type:proxytypes` |
| `/profile` | Configuration profile name | `/profile:ALL` |

### Authentication Parameters

Use **one** of the following authentication options:

#### Option 1: OAuth (Username/Password)
```powershell
/conn:"AuthType=OAuth;Url=https://org.crm.dynamics.com;Username=user@domain.com;Password=****"
```

#### Option 2: ClientSecret (Service Principal)
```powershell
/conn:"AuthType=ClientSecret;Url=https://org.crm.dynamics.com;ClientId=<AppId>;ClientSecret=<Secret>"
```

#### Option 3: AD (Active Directory - On-Premises)
```powershell
/conn:"AuthType=AD;Url=https://yourorg.crm.contoso.com;Domain=yourdomain;Username=user;Password=****"
```

#### Option 4: SDK Login (OAuth Browser)
```powershell
/sdklogin:yes /url:"https://org.crm.dynamics.com"
```

### Optional Parameters

| Parameter | Description | Default | Example |
|-----------|-------------|---------|---------|
| `/version` | Version for CrmSdk.CoreTools | `1.0.0.0` | `/version:9.1.0.82` |
| `/command` | Additional commands | `""` | `/command:"extra"` |

---

## JSON Configuration

### JSON Schema

```json
{
  "proxytypes": [
    {
      "profile": "string",
      "namespace": "string",
      "output": "string",
      "entities": "string"
    }
  ]
}
```

### JSON Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `profile` | string | Yes | - | Profile identifier matching CLI `/profile` parameter |
| `namespace` | string | Yes | `"???"` | Namespace for generated classes |
| `output` | string | Yes | `"???"` | Output file name for generated code |
| `entities` | string | Yes | `"*"` | Entity selection: `*`, `all`, or comma-separated list |

### Parameter Details

#### `namespace`
The namespace for generated early-bound classes.

- **Required:** Yes
- **Validation:** Cannot be empty or `"???"`
- **Format:** Standard C# namespace format
- **Example:** `"MyCompany.ProxyTypes"`, `"Dev.DevKitV4.ProxyTypes"`
- **Usage:** Used in generated C# code namespace declaration

#### `output`
Output file name for the generated code.

- **Required:** Yes
- **Validation:** Cannot be empty or `"???"`
- **Format:** File name with `.cs` extension
- **Example:** `"GeneratedCode.cs"`, `"ProxyTypes.cs"`, `"EarlyBound.cs"`
- **Location:** File created in current directory

#### `entities`
Specifies which entities to include in generated code.

- **Required:** Yes
- **Default:** `"*"` (all entities)
- **Valid values:**
  - `"*"` or `"all"` - Generate for all entities
  - Comma-separated list - Generate for specific entities
- **Examples:**
  ```json
  "entities": "*"                                  // All entities
  "entities": "all"                                // All entities
  "entities": "account,contact,lead,opportunity"   // Specific entities
  ```
- **Performance:** Specific list is faster for large organizations

---

## Configuration Examples

### Example 1: Generate All Entities

**Description:** Generate early-bound classes for all entities in the system.

**JSON Configuration:**
```json
{
  "proxytypes": [
    {
      "profile": "ALL",
      "namespace": "MyCompany.ProxyTypes",
      "output": "GeneratedCode.cs",
      "entities": "*"
    }
  ]
}
```

**Command Line:**
```powershell
DynamicsCrm.DevKit.Cli /conn:"AuthType=OAuth;Username=user@company.com;******;Url=https://company.crm.dynamics.com" /json:"DynamicsCrm.DevKit.Cli.json" /type:proxytypes /profile:ALL
```

**Result:** Creates `GeneratedCode.cs` with all entity classes, option sets, and attributes.

### Example 2: Generate Specific Entities

**Description:** Generate early-bound classes for commonly used entities only.

**JSON Configuration:**
```json
{
  "proxytypes": [
    {
      "profile": "CORE-ENTITIES",
      "namespace": "Dev.DevKitV4.ProxyTypes",
      "output": "GeneratedCode.cs",
      "entities": "account,contact,systemuser,team"
    }
  ]
}
```

**Command Line:**
```powershell
DynamicsCrm.DevKit.Cli /sdklogin:yes /url:"https://dev.crm.dynamics.com" /json:"DynamicsCrm.DevKit.Cli.json" /type:proxytypes /profile:CORE-ENTITIES
```

### Example 3: Multiple Profiles for Different Entity Sets

**Description:** Create different profiles for different parts of the application.

**JSON Configuration:**
```json
{
  "proxytypes": [
    {
      "profile": "SALES",
      "namespace": "MyCompany.Sales.ProxyTypes",
      "output": "SalesEntities.cs",
      "entities": "account,contact,lead,opportunity,quote,salesorder"
    },
    {
      "profile": "SERVICE",
      "namespace": "MyCompany.Service.ProxyTypes",
      "output": "ServiceEntities.cs",
      "entities": "incident,case,knowledgearticle"
    }
  ]
}
```

---

## Usage Workflow

1. **Configure JSON** - Set up `proxytypes` section with namespace and entities
2. **Run CLI command** - Execute to generate early-bound classes
3. **Add to project** - Include generated `.cs` file in your C# project
4. **Add references** - Ensure project references Microsoft.Xrm.Sdk
5. **Use in code** - Access strongly-typed entities, attributes, and option sets
6. **Regenerate as needed** - Re-run when entity metadata changes

---

## Validation Rules

The task validates the following before execution:

- ✅ **Profile exists:** The specified profile must exist in the JSON configuration
- ✅ **Namespace valid:** Cannot be empty or `"???"`
- ✅ **Output file valid:** Cannot be empty or `"???"`
- ✅ **CrmSvcUtil.exe exists:** Required tool must be available

**Error Messages:**

| Error | Cause | Solution |
|-------|-------|----------|
| `'profile' not found: 'X'` | Profile doesn't exist in JSON | Add profile or use existing profile name |
| `'namespace' 'empty' or '???'` | Namespace not configured | Set valid namespace in JSON |
| `'output' 'empty' or '???'` | Output file not specified | Provide valid output file name |
| `Not found CrmSvcUtil.exe file` | CoreTools package not installed | Install Microsoft.CrmSdk.CoreTools NuGet package |

---

## Best Practices

- ✅ **Specific entities for production:** Generate only needed entities to reduce file size
- ✅ **Separate files for modules:** Use multiple profiles for different functional areas
- ✅ **Version control:** Include generated file in source control
- ✅ **Regenerate after schema changes:** Re-run when entities/attributes change
- ✅ **Use partial classes:** Extend generated classes with custom partial classes
- ✅ **Meaningful namespaces:** Use descriptive namespace names
- ✅ **Document dependencies:** Track which entities are needed for each project
- ✅ **Test after generation:** Compile project after generating to catch issues

---

## Common Issues & Troubleshooting

### Issue 1: CrmSvcUtil.exe Not Found

**Symptoms:** Error message: `Not found CrmSvcUtil.exe file`

**Cause:** Microsoft.CrmSdk.CoreTools NuGet package not installed

**Solution:**
```powershell
# Install the package
Install-Package Microsoft.CrmSdk.CoreTools -Version 9.1.0.82

# Or specify version in CLI
DynamicsCrm.DevKit.Cli /version:9.1.0.82 /json:"..." /type:proxytypes /profile:ALL
```

### Issue 2: Large File Size

**Symptoms:** Generated file is very large (10MB+), slow compilation

**Cause:** Generating all entities including system entities

**Solution:**
Generate only needed entities:
```json
{
  "entities": "account,contact,lead,opportunity"
}
```

### Issue 3: Compilation Errors After Generation

**Symptoms:** C# compilation errors in generated file

**Cause:** Missing SDK references or namespace conflicts

**Solution:**
1. Add NuGet package: `Microsoft.CrmSdk.CoreAssemblies`
2. Check for namespace conflicts
3. Ensure targeting correct .NET Framework version

### Issue 4: Outdated Entity Metadata

**Symptoms:** New fields not appearing in generated classes

**Cause:** Need to regenerate after metadata changes

**Solution:**
Re-run the generator:
```powershell
DynamicsCrm.DevKit.Cli /conn:"ConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:proxytypes /profile:ALL
```

---

## Generated Code Example

**Input Configuration:**
```json
{
  "namespace": "MyCompany.ProxyTypes",
  "output": "GeneratedCode.cs",
  "entities": "account"
}
```

**Generated Code (abbreviated):**
```csharp
namespace MyCompany.ProxyTypes
{
    [EntityLogicalName("account")]
    [DataContract]
    public partial class Account : Entity, INotifyPropertyChanging, INotifyPropertyChanged
    {
        public static class Fields
        {
            public const string AccountId = "accountid";
            public const string Name = "name";
            public const string AccountNumber = "accountnumber";
            public const string Revenue = "revenue";
            // ... more fields
        }
        
        public const string EntityLogicalName = "account";
        public const string EntitySchemaName = "Account";
        public const string PrimaryIdAttribute = "accountid";
        public const string PrimaryNameAttribute = "name";
        
        public Account() : base(EntityLogicalName) { }
        
        [AttributeLogicalName("accountid")]
        public Guid? AccountId
        {
            get { return GetAttributeValue<Guid?>("accountid"); }
            set
            {
                OnPropertyChanging("AccountId");
                SetAttributeValue("accountid", value);
                if (value.HasValue)
                {
                    base.Id = value.Value;
                }
                OnPropertyChanged("AccountId");
            }
        }
        
        [AttributeLogicalName("name")]
        public string Name
        {
            get { return GetAttributeValue<string>("name"); }
            set
            {
                OnPropertyChanging("Name");
                SetAttributeValue("name", value);
                OnPropertyChanged("Name");
            }
        }
        
        // ... more properties
    }
    
    // Option sets
    public enum Account_AccountCategoryCode
    {
        PreferredCustomer = 1,
        Standard = 2,
    }
}
```

**Usage in Plugin:**
```csharp
using MyCompany.ProxyTypes;
using Microsoft.Xrm.Sdk;

public class AccountPlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
        var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
        var service = serviceFactory.CreateOrganizationService(context.UserId);
        
        // Strongly-typed entity access
        var account = new Account
        {
            Name = "Contoso Ltd",
            AccountNumber = "ACC-001",
            Revenue = new Money(1000000)
        };
        
        account.Id = service.Create(account);
        
        // Strongly-typed field access
        var retrievedAccount = service.Retrieve(
            Account.EntityLogicalName,
            account.Id,
            new ColumnSet(Account.Fields.Name, Account.Fields.AccountNumber)
        ).ToEntity<Account>();
        
        // Strongly-typed option set
        account.AccountCategoryCode = Account_AccountCategoryCode.PreferredCustomer;
        service.Update(account);
    }
}
```

---

## Integration Examples

### CI/CD Pipeline (Azure DevOps)

```yaml
trigger:
  branches:
    include:
    - main

steps:
- task: NuGetCommand@2
  displayName: 'Restore NuGet Packages'
  inputs:
    command: 'restore'

- task: PowerShell@2
  displayName: 'Generate Early-Bound Classes'
  inputs:
    targetType: 'inline'
    script: |
      $cliPath = "$(Build.SourcesDirectory)\packages\DynamicsCrm.DevKit.Cli\tools\DynamicsCrm.DevKit.Cli.exe"
      & $cliPath /conn:"$(ConnectionString)" /json:"DynamicsCrm.DevKit.Cli.json" /type:proxytypes /profile:ALL

- task: VSBuild@1
  displayName: 'Build Solution'
  inputs:
    solution: '**/*.sln'
    configuration: 'Release'
```

### PowerShell Script

```powershell
# Generate early-bound classes script

$connectionString = "AuthType=OAuth;Username=admin@company.com;******;Url=https://company.crm.dynamics.com"
$cliPath = ".\packages\DynamicsCrm.DevKit.Cli\tools\DynamicsCrm.DevKit.Cli.exe"
$jsonFile = "DynamicsCrm.DevKit.Cli.json"

Write-Host "Generating early-bound classes..." -ForegroundColor Green

& $cliPath /conn:"$connectionString" /json:"$jsonFile" /type:proxytypes /profile:ALL

if ($LASTEXITCODE -eq 0) {
    Write-Host "Generation successful!" -ForegroundColor Green
    Write-Host "Compiling project to verify..." -ForegroundColor Yellow
    
    msbuild /p:Configuration=Release /v:minimal
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Compilation successful!" -ForegroundColor Green
    } else {
        Write-Host "Compilation failed! Check generated code." -ForegroundColor Red
    }
} else {
    Write-Host "Generation failed!" -ForegroundColor Red
}
```

---

## CrmSvcUtil Features

The CLI uses CrmSvcUtil with the following features enabled:

- ✅ **EmitFieldsClasses:** Generates Fields nested class for string constants
- ✅ **GenerateGlobalOptionSets:** Includes global option set enums
- ✅ **SuppressGeneratedCodeAttribute:** Cleaner generated code
- ✅ **Custom Code Writer Filter:** Filters entities when using specific entity list

---

## Related Tasks

- **generators** - Generate late-bound classes (alternative approach)
- **servers** - Use generated classes in plugins
- **solutionpackagers** - Package solutions containing entities

---

## Additional Resources

- [Main CLI Documentation](README.md)
- [All Tasks Overview](cli.md)
- [CrmSvcUtil Documentation](https://docs.microsoft.com/en-us/power-apps/developer/data-platform/org-service/generate-early-bound-classes)
- [Early-Bound Programming](https://docs.microsoft.com/en-us/power-apps/developer/data-platform/org-service/early-bound-programming)
- [GitHub Repository](https://github.com/phuocle/Dynamics-Crm-DevKit)

---

## Notes

- **CrmSvcUtil.exe** from Microsoft.CrmSdk.CoreTools NuGet package required
- **File Size:** Generating all entities can create very large files (10-50MB)
- **Compilation Time:** Large generated files increase compilation time
- **IntelliSense:** Provides full IntelliSense support in Visual Studio
- **Type Safety:** Compile-time validation of entity, attribute, and option set names
- **Custom Extensions:** Uses DynamicsCrm.DevKit.CrmSvcUtilExtensions for entity filtering
- **Global Option Sets:** Automatically includes global option set enums
- **Fields Class:** Nested Fields class provides constants for attribute names
- **Partial Classes:** Generated classes are partial, allowing custom extensions
