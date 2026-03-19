# Task: ModelBuilder

## Overview

Generates Early-Bound C# classes for Dataverse entities using the specialized `Microsoft.PowerPlatform.Dataverse.ModelBuilderLib`. This command replaces the legacy `ProxyType` generation and offers better performance and modern C# features.

---

## Task Type

**CLI Command:** `modelbuilder`

**Used in command line:**
```powershell
devkit modelbuilder --profile [profile_name] --json "DynamicsCrm.DevKit.Cli.json" [connection_args]
```

---

## Command Line Parameters

### Required Parameters

| Parameter | Description | Example |
|-----------|-------------|---------|
| `--json` | Path to CLI configuration file | `--json "DynamicsCrm.DevKit.Cli.json"` |
| `--profile` | Configuration profile name | `--profile:DEFAULT` |

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

#### Option 7: Connection String (Legacy)
```powershell
--conn "AuthType=OAuth;Username=...;Password=...;Url=..."
```

---

## JSON Configuration

### JSON Schema

```json
{
  "modelbuilders": [
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
| `profile` | string | **Yes** | - | Unique profile name to identify this configuration |
| `namespace` | string | **Yes** | - | The C# namespace for the generated classes |
| `output` | string | **Yes** | - | Path to the output folder or specific file |
| `entities` | string | No | `*` | Comma-separated list of logical names to generate. Use `*` for all. |

### Parameter Details

#### `profile`
A unique identifier for this configuration entry. Used in the `--profile` command line argument.

#### `namespace`
Defines the namespace wrapping the generated code.
- Example: `MyProject.EarlyBound`

#### `output`
Specifies where the generated file should be saved.
- **File Path**: The full path to the generated `.cs` file.
- Example: `OUTPUT\\CrmModel.cs`

#### `entities`
Filter which entities to generate classes for.
- **Specific Entities**: `account,contact,systemuser`
- **All Entities**: `*` (Not recommended for large organizations due to compilation size)

---

## Configuration Examples

### Example 1: Generate Specific Entities

**Description:** Generates classes for Account and Contact only.

**JSON Configuration:**
```json
{
  "modelbuilders": [
    {
      "profile": "CORE",
      "namespace": "MyProject.Core.Entities",
      "output": "Core\\Entities.cs",
      "entities": "account,contact"
    }
  ]
}
```

**Command Line:**
```powershell
devkit modelbuilder --profile CORE --json "DynamicsCrm.DevKit.Cli.json" --auth Interactive --url "https://dev.crm.dynamics.com"
```

---

## Usage Workflow

1. **Step 1:** Define the `modelbuilders` array in `DynamicsCrm.DevKit.Cli.json`.
2. **Step 2:** Specify the entities you need.
3. **Step 3:** Run the command to generate the code.
4. **Step 4:** Include the generated `.cs` file in your project.

---

## Validation Rules

- ✅ **Profile exists:** The specified `--profile` must exist in `modelbuilders`.
- ✅ **Output writable:** The output path must be writable.

---
