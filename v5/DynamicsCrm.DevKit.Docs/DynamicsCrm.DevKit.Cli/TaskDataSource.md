# Task: Data Source (Virtual Entity)

## Overview

The Data Source task creates virtual entity data sources in Dynamics 365/Dataverse. Virtual entities allow you to integrate external data sources without physically storing the data in Dynamics 365. This task creates the data source entity record that serves as the connection point for virtual entity data providers, enabling seamless integration with external systems like SQL Server, OData services, or custom APIs.

---

## Task Type

**CLI Command:** `datasource`

**Used in command line:**
```powershell
devkit datasource --profile DEBUG --json "DynamicsCrm.DevKit.Cli.json" [connection_args]
```

---

## Command Line Parameters

### Required Parameters

| Parameter | Description | Example |
|-----------|-------------|---------|
| `--json` | Path to CLI configuration file | `--json "DynamicsCrm.DevKit.Cli.json"` |
| `--profile` | Configuration profile name | `--profile DEBUG` |

### Authentication Parameters

Use **one** of the following authentication options:

#### Option 1: Interactive (Browser Sign-in) — *recommended for development*
```powershell
--auth Interactive --url "https://org.crm.dynamics.com"
```

#### Option 2: DeviceCode (Headless/Remote)
```powershell
--auth DeviceCode --url "https://org.crm.dynamics.com"
```

#### Option 3: ClientSecret (Service Principal) — *recommended for CI/CD*
```powershell
--auth ClientSecret --url "https://org.crm.dynamics.com" --clientid "<AppId>" --clientsecret "<Secret>"
```

#### Option 4: OAuth (Username/Password)
```powershell
--auth OAuth --url "https://org.crm.dynamics.com" --username "user@domain.com" --password "****"
```

#### Option 5: AD (Active Directory - On-Premises)
```powershell
--auth AD --url "https://yourorg.crm.contoso.com" --username "domain\\user" --password "****"
```

#### Option 6: FromPac (PAC CLI Profile) — *zero login for developers*
```powershell
--auth FromPac --pacprofile "MyProfile"
```

---

## JSON Configuration

### JSON Schema

```json
{
  "datasources": [
    {
      "profile": "string",
      "solution": "string",
      "displayname": "string",
      "pluralname": "string",
      "name": "string"
    }
  ]
}
```

### JSON Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `profile` | string | Yes | - | Profile identifier matching CLI `/profile` parameter |
| `solution` | string | Yes | `"???"` | Solution unique name in Dynamics 365 |
| `displayname` | string | Yes | `"???"` | Display name for the data source |
| `pluralname` | string | Yes | `"???"` | Plural display name for the data source |
| `name` | string | Yes | `"???"` | Logical name for the data source (no spaces) |

### Parameter Details

#### `solution`
The unique name of the solution where the data source will be created.

- **Required:** Yes
- **Validation:** Cannot be empty or `"???"`
- **Example:** `"MyCompanySolution"`, `"DEVKITV4"`
- **Note:** Solution must exist in the environment

#### `displayname`
Display name for the data source entity.

- **Required:** Yes
- **Validation:** 
  - Cannot be empty or `"???"`
  - Must match regex: `^[a-zA-Z][_a-zA-Z0-9\\s,]*$`
  - Can contain alpha-numeric, underscore, space, and comma
- **Example:** `"SQL DataSource"`, `"External API Data"`, `"OData Service"`

#### `pluralname`
Plural form of the display name.

- **Required:** Yes
- **Validation:**
  - Cannot be empty or `"???"`
  - Must match regex: `^[a-zA-Z][_a-zA-Z0-9\\s,]*$`
  - Can contain alpha-numeric, underscore, space, and comma
- **Example:** `"SQL DataSources"`, `"External API Data Items"`, `"OData Services"`

#### `name`
Logical name for the data source (schema name).

- **Required:** Yes
- **Validation:**
  - Cannot be empty or `"???"`
  - Must match regex: `^[a-zA-Z][_a-zA-Z0-9\\s,]*$`
  - **Cannot contain spaces**
  - Alpha-numeric and underscore only
- **Example:** `"Sql_DataSource"`, `"External_API_Data"`, `"OData_Service"`
- **Automatic prefixing:** If name doesn't start with publisher prefix, it's automatically added

---

## Configuration Examples

### Example 1: SQL Server Data Source

**Description:** Create a data source for SQL Server integration.

**JSON Configuration:**
```json
{
  "datasources": [
    {
      "profile": "SQL-DATASOURCE",
      "solution": "MyCompanySolution",
      "displayname": "SQL Server DataSource",
      "pluralname": "SQL Server DataSources",
      "name": "SQLServer_DataSource"
    }
  ]
}
```

**Command Line:**
```powershell
devkit datasource --profile SQL-DATASOURCE --json "DynamicsCrm.DevKit.Cli.json" --auth Interactive --url "https://company.crm.dynamics.com"
```

**Result:** Creates data source entity with logical name `prefix_SQLServer_DataSource`

### Example 2: OData Service Data Source

**Description:** Create a data source for external OData service.

**JSON Configuration:**
```json
{
  "datasources": [
    {
      "profile": "ODATA-SOURCE",
      "solution": "IntegrationSolution",
      "displayname": "External OData Service",
      "pluralname": "External OData Services",
      "name": "External_OData"
    }
  ]
}
```

**Command Line:**
```powershell
devkit datasource --profile ODATA-SOURCE --json "DynamicsCrm.DevKit.Cli.json" --auth Interactive --url "https://dev.crm.dynamics.com"
```

### Example 3: Custom API Data Source

**Description:** Create a data source for custom API integration.

**JSON Configuration:**
```json
{
  "datasources": [
    {
      "profile": "DEBUG",
      "solution": "DEVKITV4",
      "displayname": "Custom API DataSource",
      "pluralname": "Custom API DataSources",
      "name": "CustomAPI_DataSource"
    }
  ]
}
```

**Command Line:**
```powershell
devkit datasource --profile DEBUG --json "DynamicsCrm.DevKit.Cli.json" --auth Interactive --url "https://org.crm.dynamics.com"
```

---

## Usage Workflow

1. **Define integration requirements** - Identify external data source type
2. **Configure JSON** - Set up `datasources` section with appropriate names
3. **Execute CLI command** - Run to create data source entity
4. **Configure data provider plugins** - Deploy data provider plugins using `servers` task
5. **Create virtual entities** - Define virtual entities using the created data source
6. **Test integration** - Verify data flows correctly from external source

---

## Validation Rules

The task validates the following before execution:

- ✅ **Profile exists:** The specified profile must exist in the JSON configuration
- ✅ **Solution exists:** Solution must exist in target Dynamics 365 environment
- ✅ **Solution name valid:** Cannot be empty or `"???"`
- ✅ **Display name valid:** Matches regex pattern, cannot be empty or `"???"`
- ✅ **Plural name valid:** Matches regex pattern, cannot be empty or `"???"`
- ✅ **Name valid:** Matches regex pattern, no spaces, cannot be empty or `"???"`
- ✅ **Data source unique:** Data source with same name doesn't already exist

**Error Messages:**

| Error | Cause | Solution |
|-------|-------|----------|
| `'profile' not found: 'X'` | Profile doesn't exist in JSON | Add profile or use existing profile name |
| `'solution' 'empty' or '???'` | Solution name not configured | Set valid solution name in JSON |
| `solution 'X' not exist` | Solution not found in environment | Create solution or check name |
| `'displayname' 'empty' or '???'` | Display name not configured | Set valid display name in JSON |
| `'pluralname' 'empty' or '???'` | Plural name not configured | Set valid plural name in JSON |
| `'name' 'empty' or '???'` | Name not configured | Set valid name in JSON |
| `'displayname' can only contain alpha-numeric and underscore characters` | Invalid characters in display name | Use only allowed characters |
| `'name' can cannot contain space character` | Name contains spaces | Remove spaces from name |
| `name 'X' exist` | Data source already exists | Use different name or delete existing |

---

## Best Practices

- ✅ **Descriptive names:** Use clear, descriptive names for data sources
- ✅ **Consistent naming:** Follow naming conventions (e.g., `{System}_{Type}`)
- ✅ **No spaces in name:** Logical name should use underscores instead of spaces
- ✅ **Plural forms:** Make plural name semantically correct
- ✅ **Test in DEV:** Create and test data source in development environment first
- ✅ **Document purpose:** Keep track of what each data source is used for
- ✅ **Solution management:** Always create in a solution for easier ALM

---

## Common Issues & Troubleshooting

### Issue 1: Data Source Already Exists

**Symptoms:** Error message: `name 'X' exist`

**Cause:** Data source with same name already created

**Solution:**
1. Check existing data sources in environment
2. Use different name
3. Or delete existing data source if no longer needed

### Issue 2: Invalid Characters in Name

**Symptoms:** Validation error about invalid characters

**Cause:** Using special characters or spaces in `name` field

**Solution:**
```json
{
  "name": "My_DataSource"     // Good - underscores OK
  // NOT: "name": "My DataSource"    // Bad - spaces not allowed
  // NOT: "name": "My-DataSource"    // Bad - hyphens not allowed
}
```

### Issue 3: Solution Not Found

**Symptoms:** Error message: `solution 'X' not exist`

**Cause:** Solution name doesn't match or doesn't exist

**Solution:**
1. Verify solution exists in Settings > Solutions
2. Check exact spelling of solution unique name
3. Create solution if it doesn't exist

---

## Integration with Data Providers

After creating the data source, deploy data provider plugins:

**Step 1:** Create data source using this task

**Step 2:** Deploy data provider plugins using `servers` task:
```csharp
[CrmPluginRegistration(
    Message = "Retrieve",
    Stage = StageEnum.PostOperation,
    ExecutionMode = ExecutionModeEnum.Synchronous,
    PluginType = PluginType.DataProvider,
    DataSource = "prefix_CustomAPI_DataSource",  // Matches created data source
    Name = "Data Provider Retrieve"
)]
public class DataProviderRetrieve : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        // Implementation
    }
}
```

**Step 3:** Create virtual entities using the data source

---

## Integration Examples

### CI/CD Pipeline (Azure DevOps)

```yaml
steps:
- task: PowerShell@2
  displayName: 'Create Data Source'
  inputs:
    targetType: 'inline'
    script: |
      devkit datasource --profile $(Environment) --json "DynamicsCrm.DevKit.Cli.json" --auth ClientSecret --url "$(Url)" --clientid "$(ClientId)" --clientsecret "$(ClientSecret)"
```

### PowerShell Script

```powershell
# Create data source and deploy data providers

$jsonFile = "DynamicsCrm.DevKit.Cli.json"

Write-Host "Creating data source..." -ForegroundColor Green
devkit datasource --profile DEBUG --json $jsonFile --auth ClientSecret --url "https://company.crm.dynamics.com" --clientid "<AppId>" --clientsecret "<Secret>"

if ($LASTEXITCODE -eq 0) {
    Write-Host "Data source created successfully!" -ForegroundColor Green
    Write-Host "Deploying data provider plugins..." -ForegroundColor Yellow
    
    devkit server --profile DEBUG --json $jsonFile --auth ClientSecret --url "https://company.crm.dynamics.com" --clientid "<AppId>" --clientsecret "<Secret>"
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Data providers deployed!" -ForegroundColor Green
    }
}
```

---

## Related Tasks

- **servers** / **dataproviders** - Deploy data provider plugins that use this data source
- **solutionpackagers** - Package solutions containing data sources

---

## Additional Resources

- [Main CLI Documentation](README.md)
- [All Tasks Overview](cli.md)
- [Virtual Entities Overview](https://docs.microsoft.com/en-us/power-apps/developer/data-platform/virtual-entities/get-started-ve)
- [Data Provider Documentation](https://docs.microsoft.com/en-us/power-apps/developer/data-platform/virtual-entities/custom-ve-data-providers)
- [GitHub Repository](https://github.com/phuocle/Dynamics-Crm-DevKit)

---

## Notes

- **One-time creation:** Data source only needs to be created once
- **Automatic prefixing:** Publisher prefix automatically added if not present in name
- **Solution dependency:** Data source added to specified solution
- **External name mapping:** Virtual entities use this data source to map to external entities
- **Data provider plugins:** Separate from data source, deployed using `servers` or `dataproviders` task
- **Cannot recreate:** If data source exists, task will fail - must use different name or delete existing
