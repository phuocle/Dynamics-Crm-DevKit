# Task: Generator

## Overview

The Generator task creates type-safe code files for Dynamics 365/Dataverse development, including JavaScript Form helpers (JsForm), JavaScript WebAPI wrappers (JsWebApi), and C# late-bound entity classes (CSharp). These generated files provide IntelliSense support, type safety, and simplified syntax for interacting with Dynamics 365 entities in custom code. The task reads entity metadata from Dynamics 365 and generates strongly-typed code files automatically.

---

## Task Type

**CLI Command:** `generator`

**Used in command line:**
```powershell
devkit generator --profile [profile_name] --json "DynamicsCrm.DevKit.Cli.json" [connection_args]
```

---

## Command Line Parameters

### Required Parameters

| Parameter | Description |
|-----------|-------------|
| `--json` | Path to CLI configuration file |
| `--profile` | Configuration profile name |

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
  "generators": [
    {
      "profile": "string",
      "type": "JsForm|JsWebApi|CSharp",
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
| `profile` | string | **Yes** | - | Profile identifier matching CLI `--profile` parameter |
| `type` | string | **Yes** | - | Generator type: `JsForm`, `JsWebApi`, or `CSharp` |
| `rootnamespace` | string | **Yes** | - | Root namespace for generated code |
| `namespace` | string | No | `""` | Additional namespace segment |
| `rootfolder` | string | **Yes** | - | Folder containing existing generated files or output folder |
| `entities` | string | **Yes** | - | Entity selection: `folder`, `*`, or comma-separated list |

### Parameter Details

#### `type`
Specifies which type of code to generate.
- **Valid values:** `JsForm`, `JsWebApi`, `CSharp`

#### `entities`
Specifies which entities to generate code for.
- **`folder`**: Scans the `rootfolder` for existing generated files and regenerates only those.
- **`*`**: Generates for ALL entities (can be slow).
- **List**: Comma-separated list of entity logical names (e.g., `account,contact`).

---

## Configuration Examples

### Example 1: Generate JavaScript Form Helpers

**JSON Configuration:**
```json
{
  "generators": [
    {
      "profile": "JS-FORM",
      "type": "JsForm",
      "rootnamespace": "MyCompany.WebResources",
      "rootfolder": "WebResources",
      "entities": "folder"
    }
  ]
}
```

**Command Line:**
```powershell
devkit generator --profile JS-FORM --json "DynamicsCrm.DevKit.Cli.json" --auth Interactive --url "https://org.crm.dynamics.com"
```

### Example 2: Generate C# Late-Bound Classes

**JSON Configuration:**
```json
{
  "generators": [
    {
      "profile": "LATEBOUND",
      "type": "CSharp",
      "rootnamespace": "MyCompany.Shared.Entities",
      "rootfolder": "Shared\\Entities",
      "entities": "account,contact,systemuser"
    }
  ]
}
```

**Command Line:**
```powershell
devkit generator --profile LATEBOUND --json "DynamicsCrm.DevKit.Cli.json" --auth Interactive --url "https://org.crm.dynamics.com"
```

---

## Usage Workflow

1. **Step 1:** Define the `generators` profile in JSON.
2. **Step 2:** (Optional) Create empty `.form.js` or `.webapi.js` files if using `folder` mode.
3. **Step 3:** Run the command.
4. **Step 4:** Incorporate generated files into your project.

---

## Validation Rules

- ✅ **Profile exists:** The specified `--profile` must exist.
- ✅ **Type valid:** Must be `JsForm`, `JsWebApi`, or `CSharp`.
- ✅ **Rootnamespace valid:** Cannot be empty.
