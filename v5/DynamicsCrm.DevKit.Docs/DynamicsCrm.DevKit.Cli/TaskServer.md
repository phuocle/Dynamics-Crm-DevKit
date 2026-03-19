# Task: Server (Plugins, Workflows, Custom Actions, Custom APIs, Data Providers)

## Overview

The Server task deploys server-side assemblies to Dynamics 365/Dataverse, including Plugins, Workflows, Custom Actions, Custom APIs, and Data Providers. It automatically registers assemblies, plugin types, and plugin steps based on `CrmPluginRegistration` attributes in your code. The task supports advanced features like 4 images, managed identity, batch processing, and fast deployment options.

---

## Task Type

**CLI Command:** `server`

**Used in command line:**
```powershell
# Deploy all server components
devkit server --profile [profile_name] [options] --type servers

# Deploy only plugins
devkit server --profile [profile_name] [options] --type plugins
```

---

## Command Line Parameters

### Required Parameters

| Parameter | Description | Example |
|-----------|-------------|---------|
| `--json` | Path to CLI configuration file | `--json "DynamicsCrm.DevKit.Cli.json"` |
| `--profile` | Configuration profile name | `--profile:DEBUG` |

### Optional Parameters

| Parameter | Description |
|-----------|-------------|
| `--type` | Filter component type: `servers`, `plugins`, `workflows`, `dataproviders`. (Default: specific logic or all) |
| `--onlyupdateassembly` | Only update assembly binary without registering steps (Fast Deploy). |

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
  "servers": [
    {
      "profile": "string",
      "solution": "string",
      "folder": "string",
      "includefiles": ["pattern1", "pattern2"],
      "excludefiles": ["pattern3"]
    }
  ],
  "plugins": [ /* same structure */ ],
  "workflows": [ /* same structure */ ],
  "dataproviders": [ /* same structure */ ]
}
```

### JSON Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `profile` | string | **Yes** | Profile identifier. |
| `solution` | string | **Yes** | Solution unique name in Dynamics 365. |
| `folder` | string | **Yes** | Folder containing assemblies (relative to CLI execution). |
| `includefiles` | array | **Yes** | File patterns to include (e.g., `MyPlugin.dll`). |
| `excludefiles` | array | No | File patterns to exclude (e.g., `*.Test.dll`). |

---

## Configuration Examples

### Example 1: Basic Plugin Deployment
```json
{
  "servers": [
    {
      "profile": "DEBUG",
      "solution": "MySolution",
      "folder": "bin\\Debug",
      "includefiles": ["MyPlugin.dll"],
      "excludefiles": ["*.Test.dll"]
    }
  ]
}
```
**Command:**
```powershell
devkit server --profile DEBUG --type servers --auth Interactive --url "https://org.crm.dynamics.com"
```

### Example 2: Fast Deployment (Assembly Only)
**Command:**
```powershell
devkit server --profile DEBUG --type servers --onlyupdateassembly --auth Interactive --url "..."
```

---

## CrmPluginRegistration Attribute
This task relies on attributes in your code to register steps.

```csharp
[CrmPluginRegistration(
    Id = "GUID-HERE",
    Message = "Update",
    EntityLogicalName = "account",
    Stage = StageEnum.PostOperation,
    ExecutionMode = ExecutionModeEnum.Synchronous,
    Name = "Account Update Step"
)]
public class AccountPlugin : IPlugin { ... }
```

### Key Properties
- **Id**: GUID for idempotent registration (Critical for CI/CD).
- **Message**: SDK message (e.g., Create, Update).
- **Stage**: PreValidation (10), PreOperation (20), PostOperation (40).
- **ExecutionMode**: Synchronous/Asynchronous.
- **Images**: Support for up to 4 images (`Image1Name`, `Image1Type`, etc.).

---

## Validation Rules
- ✅ **Profile exists:** Profile must serve the requested type.
- ✅ **Solution exists:** Solution must exist in the target environment.
- ✅ **Files found:** At least one file matching `includefiles` must exist.
