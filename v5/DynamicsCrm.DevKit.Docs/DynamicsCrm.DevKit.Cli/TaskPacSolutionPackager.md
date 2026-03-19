# Task: PacSolutionPackager

## Overview

Packs and unpacks Dataverse solutions using the **Microsoft Power Platform CLI (`pac`)**. This task is a modern alternative to the legacy `SolutionPackager` task, leveraging the official `pac solution` commands for improved reliability and standard compliance.

> **Prerequisite**: Requires [Microsoft Power Platform CLI](https://learn.microsoft.com/en-us/power-platform/developer/cli/introduction) to be installed (`dotnet tool install --global Microsoft.PowerApps.CLI.Tool`).

---

## Task Type

**CLI Command:** `solution`

**Used in command line:**
```powershell
devkit solution --profile [profile_name] --json "DynamicsCrm.DevKit.Cli.json" [connection_args]
```

---

## Command Line Parameters

### Required Parameters

| Parameter | Description |
|-----------|-------------|
| `--json` | Path to CLI configuration file |
| `--profile` | Configuration profile name |

### Authentication Parameters

*Authentication is primarily used for the `Extract` (Unpack) action to check if the solution exists or to download it if executing a hybrid fetch-and-unpack operation.*

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

#### Option 6: FromPac (PAC CLI Profile) — *ideal for this task*
```powershell
# Reuses the authentication profile from the 'pac' tool itself
--auth FromPac --pacprofile "MyDevProfile"
```

---

## JSON Configuration

### JSON Schema

The configuration shares the `solutionpackagers` array with the legacy task.

```json
{
  "solutionpackagers": [
    {
      "profile": "string",
      "solution": "string",
      "solutiontype": "Managed|Unmanaged|Both",
      "folder": "string",
      "type": "Extract|Pack",
      "mapfile": "string",
      "rootfolder": "string"
    }
  ]
}
```

### JSON Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `profile` | string | **Required**. Profile identifier. |
| `solution` | string | **Required**. Unique name of the solution. |
| `solutiontype` | string | **Required**. `Managed`, `Unmanaged`, or `Both`. |
| `folder` | string | **Required**. Base folder for mapping internal paths (usually `SolutionPackager`). |
| `type` | string | **Required**. Action to perform: `Extract` (Unpack) or `Pack`. |
| `mapfile` | string | Optional. Path to XML mapping file for folder structure customization. |
| `rootfolder` | string | Optional. Base path for project files (rarely used in PAC). |

---

## Configuration Examples

### Example 1: Extract (Unpack) Solution

**Description:** Downloads (if needed) and unpacks a solution into source control friendly format.

**JSON Configuration:**
```json
{
  "solutionpackagers": [
    {
      "profile": "EXTRACT-DEV",
      "solution": "MyCustomSolution",
      "solutiontype": "Unmanaged",
      "folder": "SolutionPackager",
      "type": "Extract",
      "mapfile": "mapping.xml"
    }
  ]
}
```

**Command Line:**
```powershell
devkit solution --profile EXTRACT-DEV --json "DynamicsCrm.DevKit.Cli.json" --auth Interactive --url "https://dev.crm.dynamics.com"
```
*Note: In `Extract` mode, the task will first try to export the solution from the environment if it doesn't verify a local zip file, then run `pac solution unpack`.*

### Example 2: Pack Solution

**Description:** Packs source files back into a zip file for deployment.

**JSON Configuration:**
```json
{
  "solutionpackagers": [
    {
      "profile": "PACK-PROD",
      "solution": "MyCustomSolution",
      "solutiontype": "Managed",
      "folder": "SolutionPackager",
      "type": "Pack"
    }
  ]
}
```

**Command Line:**
```powershell
# No connection needed for pure packing if no validations requiring server are run
devkit solution --profile PACK-PROD --json "DynamicsCrm.DevKit.Cli.json"
```

---

## Usage Workflow

1. **Install PAC CLI:** Ensure `pac` is in your system PATH.
2. **Configure:** Add entry to `DynamicsCrm.DevKit.Cli.json`.
3. **Extract:** Run with `type: Extract` to convert Solution.zip to source files.
4. **Commit:** Check source files into Git.
5. **Pack:** Run with `type: Pack` in CI/CD to generate Solution.zip from source.

---

## Validation Rules

- ✅ **PAC Installed:** `pac` command must be executable.
- ✅ **Valid Action:** `type` must be `Extract` or `Pack`.
- ✅ **Valid Solution Type:** `solutiontype` must be `Managed`, `Unmanaged`, or `Both`.
