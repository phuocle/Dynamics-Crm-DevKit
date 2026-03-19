# Task: Generator

## Overview

The Generator task creates type-safe code files for Dynamics 365/Dataverse development, including JavaScript Form helpers (JsForm), JavaScript WebAPI wrappers (JsWebApi), and C# late-bound entity classes (CSharp). These generated files provide IntelliSense support, type safety, and simplified syntax for interacting with Dynamics 365 entities in custom code. The task reads entity metadata from Dynamics 365 and generates strongly-typed code files automatically.

---

## Task Type

**CLI Type:** `generators`

**Used in command line:**
```powershell
# Generate JavaScript Form helpers
DynamicsCrm.DevKit.Cli /conn:"ConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:generators /profile:JS-FORM

# Generate JavaScript WebAPI wrappers
DynamicsCrm.DevKit.Cli /conn:"ConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:generators /profile:JS-WEBAPI

# Generate C# late-bound classes
DynamicsCrm.DevKit.Cli /conn:"ConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:generators /profile:LATEBOUND
```

---

## Command Line Parameters

### Required Parameters

| Parameter | Description | Example |
|-----------|-------------|---------|
| `/json` | Path to CLI configuration file | `/json:"DynamicsCrm.DevKit.Cli.json"` |
| `/type` | Task type to execute | `/type:generators` |
| `/profile` | Configuration profile name | `/profile:JS-FORM` |

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
| `/version` | Version number | `1.0.0.0` | `/version:1.0.0.0` |
| `/command` | Additional commands | `""` | `/command:"extra"` |

---

## JSON Configuration

### JSON Schema

```json
{
  "generators": [
    {
      "profile": "string",
      "type": "string",
      "rootnamespace": "string",
      "namespace": "string",
      "rootfolder": "string",
      "entities": "string"
    }
  ]
}
```

### JSON Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `profile` | string | Yes | - | Profile identifier matching CLI `/profile` parameter |
| `type` | string | Yes | `"???"` | Generator type: `JsForm`, `JsWebApi`, or `CSharp` |
| `rootnamespace` | string | Yes | `"???"` | Root namespace for generated code |
| `namespace` | string | No | `""` | Additional namespace segment |
| `rootfolder` | string | Yes | `"???"` | Folder containing existing generated files or output folder |
| `entities` | string | Yes | `"folder"` | Entity selection: `folder`, `*`, or comma-separated list |

### Parameter Details

#### `type`
Specifies which type of code to generate.

- **Required:** Yes
- **Valid values:** `JsForm`, `JsWebApi`, `CSharp`
- **Case-insensitive:** Yes
- **Examples:**
  - `"JsForm"` - JavaScript form helpers with IntelliSense
  - `"JsWebApi"` - JavaScript WebAPI wrappers
  - `"CSharp"` - C# late-bound entity classes
- **Error if invalid:** `'type' should be: 'JsForm' or 'JsWebApi' or 'CSharp'. Please check DynamicsCrm.DevKit.Cli.json file.`

#### `rootnamespace`
The root namespace for generated code files.

- **Required:** Yes
- **Validation:** Cannot be empty or `"???"`
- **Format:** Standard namespace format (e.g., `Company.Project.Entities`)
- **Examples:**
  - For JsForm/JsWebApi: `"Dev.DevKit"`, `"MyCompany.WebResources"`
  - For CSharp: `"MyCompany.Entities"`, `"Dev.DevKitV4.Shared.Entities"`
- **Usage:**
  - JsForm: Creates namespace object in JavaScript
  - JsWebApi: Creates namespace object in JavaScript
  - CSharp: Used as namespace in generated .cs files

#### `namespace`
Additional namespace segment (optional, usually empty).

- **Required:** No
- **Default:** `""` (empty)
- **Use case:** Additional namespace layer if needed
- **Example:** `"Shared"` would append to rootnamespace

#### `rootfolder`
Folder path for generated files or folder containing existing files to regenerate.

- **Required:** Yes for CSharp (output folder), varies for JS types
- **Validation:** Cannot be `"???"` for CSharp
- **Format:** Relative path from current directory
- **Examples:**
  - CSharp: `"Entities"`, `"Shared\\Entities"`
  - JsForm/JsWebApi: `""` (current directory) or `"WebResources"`
- **Behavior:**
  - For CSharp with `entities: "folder"`: Scans for existing `.generated.cs` files
  - For JsForm with `entities: "folder"`: Scans for existing `.form.js` files
  - For JsWebApi with `entities: "folder"`: Scans for existing `.webapi.js` files

#### `entities`
Specifies which entities to generate code for.

- **Required:** Yes
- **Valid values:**
  - `"folder"` - Scan folder for existing generated files and regenerate
  - `"*"` - Generate for ALL entities in the system (can be slow)
  - Comma-separated list - Generate for specific entities (e.g., `"account,contact,lead"`)
- **Examples:**
  ```json
  "entities": "folder"                           // Regenerate existing
  "entities": "*"                                // All entities
  "entities": "account,contact,lead,opportunity" // Specific entities
  ```
- **Performance:** 
  - `"folder"` - Fast, only processes existing files
  - `"*"` - Slow for orgs with many entities (500+)
  - Specific list - Fast, only processes listed entities

---

## Configuration Examples

### Example 1: Generate JavaScript Form Helpers

**Description:** Generate type-safe JavaScript helpers for form scripting with IntelliSense support.

**JSON Configuration:**
```json
{
  "generators": [
    {
      "profile": "JS-FORM",
      "type": "JsForm",
      "rootnamespace": "MyCompany.WebResources",
      "namespace": "",
      "rootfolder": "",
      "entities": "folder"
    }
  ]
}
```

**Workflow:**
1. Create empty `.form.js` files in `entities/` folder (e.g., `account.form.js`, `contact.form.js`)
2. Run generator to populate files with form helpers
3. Use generated code in your form scripts

**Generated File Example (`account.form.js`):**
```javascript
var MyCompany = MyCompany || {};
MyCompany.WebResources = MyCompany.WebResources || {};
MyCompany.WebResources.account = (function() {
    return {
        Form: {
            name: { /* field helper */ },
            address1_city: { /* field helper */ },
            // ... more fields
        }
    };
})();
```

**Command Line:**
```powershell
DynamicsCrm.DevKit.Cli /conn:"ConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:generators /profile:JS-FORM
```

### Example 2: Generate JavaScript WebAPI Wrappers

**Description:** Generate WebAPI wrappers for type-safe CRUD operations.

**JSON Configuration:**
```json
{
  "generators": [
    {
      "profile": "JS-WEBAPI",
      "type": "JsWebApi",
      "rootnamespace": "MyCompany.WebResources",
      "namespace": "",
      "rootfolder": "",
      "entities": "account,contact,lead,opportunity"
    }
  ]
}
```

**Generated File Example (`account.webapi.js`):**
```javascript
MyCompany.WebResources.accountWebApi = {
    Create: function(entity, successCallback, errorCallback) { },
    Retrieve: function(id, successCallback, errorCallback) { },
    Update: function(entity, successCallback, errorCallback) { },
    Delete: function(id, successCallback, errorCallback) { },
    // ... more methods
};
```

**Command Line:**
```powershell
DynamicsCrm.DevKit.Cli /sdklogin:yes /url:"https://company.crm.dynamics.com" /json:"DynamicsCrm.DevKit.Cli.json" /type:generators /profile:JS-WEBAPI
```

### Example 3: Generate C# Late-Bound Classes

**Description:** Generate C# classes for late-bound entity operations with strong typing.

**JSON Configuration:**
```json
{
  "generators": [
    {
      "profile": "LATEBOUND",
      "type": "CSharp",
      "rootnamespace": "MyCompany.Shared.Entities",
      "namespace": "",
      "rootfolder": "Shared\\Entities",
      "entities": "account,contact,systemuser,team"
    }
  ]
}
```

**Generated File Example (`Account.generated.cs`):**
```csharp
namespace MyCompany.Shared.Entities
{
    public partial class Account
    {
        public static class Fields
        {
            public const string Name = "name";
            public const string AccountNumber = "accountnumber";
            // ... more fields
        }
        
        public const string EntityLogicalName = "account";
        
        public string Name
        {
            get { return GetAttributeValue<string>("name"); }
            set { SetAttributeValue("name", value); }
        }
        // ... more properties
    }
}
```

**Command Line:**
```powershell
DynamicsCrm.DevKit.Cli /conn:"ConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:generators /profile:LATEBOUND
```

### Example 4: Regenerate All Existing Files

**Description:** Regenerate all existing generated files after metadata changes.

**JSON Configuration:**
```json
{
  "generators": [
    {
      "profile": "REGENERATE-ALL",
      "type": "CSharp",
      "rootnamespace": "Dev.Shared.Entities",
      "namespace": "",
      "rootfolder": "",
      "entities": "folder"
    }
  ]
}
```

**Use case:** After adding new fields to entities in Dynamics 365, regenerate to include new fields in code.

**Command Line:**
```powershell
DynamicsCrm.DevKit.Cli /conn:"ConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:generators /profile:REGENERATE-ALL
```

---

## Usage Workflow

### JsForm Workflow

1. **Create folder structure:**
   ```
   entities/
   ├── account.form.js
   ├── contact.form.js
   └── lead.form.js
   ```

2. **Run generator:** Execute CLI command with `type: "JsForm"`

3. **Use in form scripts:**
   ```javascript
   // In your form script
   MyCompany.WebResources.account.Form.name.getValue();
   MyCompany.WebResources.account.Form.name.setValue("New Name");
   ```

### JsWebApi Workflow

1. **Configure entities:** List entities in JSON or create empty `.webapi.js` files

2. **Run generator:** Execute CLI command with `type: "JsWebApi"`

3. **Use in web resources:**
   ```javascript
   // CRUD operations with IntelliSense
   MyCompany.WebResources.accountWebApi.Create(entity, 
       function(result) { console.log("Created:", result); },
       function(error) { console.error("Error:", error); }
   );
   ```

### CSharp Workflow

1. **Configure entities:** Specify entity list or use `"folder"`

2. **Run generator:** Execute CLI command with `type: "CSharp"`

3. **Use in plugins/workflows:**
   ```csharp
   using MyCompany.Shared.Entities;
   
   var account = new Entity(Account.EntityLogicalName);
   account[Account.Fields.Name] = "New Account";
   account[Account.Fields.AccountNumber] = "ACC-001";
   service.Create(account);
   ```

---

## Validation Rules

The task validates the following before execution:

- ✅ **Profile exists:** The specified profile must exist in the JSON configuration
- ✅ **Type valid:** Must be `JsForm`, `JsWebApi`, or `CSharp`
- ✅ **Rootnamespace valid:** Cannot be empty or `"???"`
- ✅ **Rootfolder valid:** Cannot be `"???"` for CSharp type
- ✅ **Entity metadata accessible:** Can retrieve metadata from Dynamics 365

**Error Messages:**

| Error | Cause | Solution |
|-------|-------|----------|
| `'profile' not found: 'X'` | Profile doesn't exist in JSON | Add profile or use existing profile name |
| `'type' should be: 'JsForm' or 'JsWebApi' or 'CSharp'` | Invalid type value | Use one of the three valid values |
| `'rootnamespace' 'empty' or '???'` | Namespace not configured | Set valid namespace in JSON |
| `'rootfolder' 'empty' or '???'` | Folder not specified for CSharp | Provide valid folder path |

---

## Best Practices

- ✅ **Use "folder" for incremental:** Generate only for existing files during development
- ✅ **Specific entities for new:** List specific entities when adding new entities
- ✅ **Avoid "*" in large orgs:** Can be very slow with 500+ entities
- ✅ **Consistent naming:** Use consistent namespace patterns across projects
- ✅ **Partial classes for CSharp:** Generated files are partial, create companion files for custom logic
- ✅ **Regenerate after metadata changes:** Re-run generator when entity schema changes
- ✅ **Version control generated files:** Include in source control for team consistency
- ✅ **TypeScript definitions:** Use JsForm for TypeScript `.d.ts` generation support
- ✅ **Separate profiles:** Create different profiles for different entity sets

---

## Common Issues & Troubleshooting

### Issue 1: No Files Generated

**Symptoms:** Generator runs but creates no files

**Cause:** Using `"folder"` but no existing files to regenerate

**Solution:**
1. For first-time generation, use specific entity list:
   ```json
   "entities": "account,contact,lead"
   ```
2. Or create empty files first, then use `"folder"`

### Issue 2: Too Slow with Many Entities

**Symptoms:** Generator takes very long time

**Cause:** Using `"*"` with large number of entities (500+)

**Solution:**
```json
// Instead of "*", use specific entities
"entities": "account,contact,lead,opportunity,quote,salesorder"

// Or use "folder" for incremental updates
"entities": "folder"
```

### Issue 3: Missing New Fields After Metadata Changes

**Symptoms:** New fields added in Dynamics 365 not appearing in generated code

**Cause:** Need to regenerate files

**Solution:**
Re-run generator to pick up metadata changes:
```powershell
DynamicsCrm.DevKit.Cli /conn:"ConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:generators /profile:JS-FORM
```

### Issue 4: Namespace Conflicts in JavaScript

**Symptoms:** JavaScript errors about redefined namespaces

**Cause:** Different files using conflicting namespaces

**Solution:**
Use consistent rootnamespace across all generator profiles:
```json
{
  "generators": [
    {
      "profile": "JS-FORM",
      "type": "JsForm",
      "rootnamespace": "MyCompany.WebResources",  // Same namespace
      ...
    },
    {
      "profile": "JS-WEBAPI",
      "type": "JsWebApi",
      "rootnamespace": "MyCompany.WebResources",  // Same namespace
      ...
    }
  ]
}
```

### Issue 5: Generated C# Files Don't Compile

**Symptoms:** Compilation errors in generated files

**Cause:** Missing using statements or project references

**Solution:**
1. Ensure project references Microsoft.Xrm.Sdk
2. Add using statements in companion partial class file:
   ```csharp
   using Microsoft.Xrm.Sdk;
   using System;
   ```

---

## Integration Examples

### CI/CD Pipeline (Azure DevOps) - Regenerate on Schedule

```yaml
schedules:
- cron: "0 2 * * *"  # Daily at 2 AM
  displayName: Daily metadata sync
  branches:
    include:
    - main

trigger: none

steps:
- task: PowerShell@2
  displayName: 'Regenerate Form Helpers'
  inputs:
    targetType: 'inline'
    script: |
      $cliPath = "$(Build.SourcesDirectory)\packages\DynamicsCrm.DevKit.Cli\tools\DynamicsCrm.DevKit.Cli.exe"
      & $cliPath /conn:"$(ConnectionString)" /json:"DynamicsCrm.DevKit.Cli.json" /type:generators /profile:JS-FORM

- task: PowerShell@2
  displayName: 'Regenerate WebAPI Wrappers'
  inputs:
    targetType: 'inline'
    script: |
      $cliPath = "$(Build.SourcesDirectory)\packages\DynamicsCrm.DevKit.Cli\tools\DynamicsCrm.DevKit.Cli.exe"
      & $cliPath /conn:"$(ConnectionString)" /json:"DynamicsCrm.DevKit.Cli.json" /type:generators /profile:JS-WEBAPI

- task: PowerShell@2
  displayName: 'Commit Changes'
  inputs:
    targetType: 'inline'
    script: |
      git config user.email "build@company.com"
      git config user.name "Build Agent"
      git add -A
      git diff --quiet && git diff --staged --quiet || git commit -m "Auto-regenerate metadata files [skip ci]"
      git push origin main
```

### PowerShell Script - Generate All Types

```powershell
# Generate all three types of code files

$connectionString = "AuthType=OAuth;Username=admin@company.com;******;Url=https://company.crm.dynamics.com"
$cliPath = ".\packages\DynamicsCrm.DevKit.Cli\tools\DynamicsCrm.DevKit.Cli.exe"
$jsonFile = "DynamicsCrm.DevKit.Cli.json"

Write-Host "Generating code files..." -ForegroundColor Green
Write-Host ""

Write-Host "1. Generating JavaScript Form Helpers..." -ForegroundColor Yellow
& $cliPath /conn:"$connectionString" /json:"$jsonFile" /type:generators /profile:JS-FORM

Write-Host ""
Write-Host "2. Generating JavaScript WebAPI Wrappers..." -ForegroundColor Yellow
& $cliPath /conn:"$connectionString" /json:"$jsonFile" /type:generators /profile:JS-WEBAPI

Write-Host ""
Write-Host "3. Generating C# Late-Bound Classes..." -ForegroundColor Yellow
& $cliPath /conn:"$connectionString" /json:"$jsonFile" /type:generators /profile:LATEBOUND

Write-Host ""
Write-Host "All generators completed!" -ForegroundColor Green
```

---

## Generated File Patterns

### JsForm Files
- **Pattern:** `{entity}.form.js`
- **Example:** `account.form.js`, `contact.form.js`
- **Content:** Form field helpers with IntelliSense

### JsWebApi Files
- **Pattern:** `{entity}.webapi.js`
- **Example:** `account.webapi.js`, `contact.webapi.js`
- **Content:** WebAPI CRUD methods

### CSharp Files
- **Pattern:** `{Entity}.generated.cs`
- **Example:** `Account.generated.cs`, `Contact.generated.cs`
- **Content:** Partial class with Fields constants and properties

---

## Related Tasks

- **webresources** - Deploy generated JavaScript files
- **servers** - Use generated C# classes in plugins
- **proxytypes** - Generate early-bound classes (alternative to late-bound)

---

## Additional Resources

- [Main CLI Documentation](README.md)
- [All Tasks Overview](cli.md)
- [Client API Reference](https://docs.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference)
- [Web API Reference](https://docs.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview)
- [GitHub Repository](https://github.com/phuocle/Dynamics-Crm-DevKit)

---

## Notes

- **Metadata Refresh:** Generator reads live metadata from Dynamics 365
- **Partial Classes:** C# generated files are partial, allowing custom extensions
- **IntelliSense Support:** Generated JavaScript provides IntelliSense in modern editors
- **File Naming:** Generated files follow specific naming conventions (.form.js, .webapi.js, .generated.cs)
- **Incremental Generation:** "folder" mode only regenerates existing files
- **Performance:** Specific entity list is fastest, "*" is slowest
- **TypeScript:** JsForm files can be used to generate TypeScript definitions
- **Namespace Objects:** JavaScript files create namespace objects to avoid global scope pollution
