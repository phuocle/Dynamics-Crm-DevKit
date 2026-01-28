# Task: Web Resources

## Overview

The Web Resources task deploys web resources to Dynamics 365/Dataverse, including HTML, CSS, JavaScript, images, and other web files. It supports 15+ file types, pattern matching for file selection, dependency management with automatic XML generation, entity token replacement, and batch publishing. The task can handle complex folder structures and automatically creates or updates web resources based on file paths and naming conventions.

---

## Task Type

**CLI Command:** `webresource`

**Used in command line:**
```powershell
devkit webresource --profile [profile_name] --json "DynamicsCrm.DevKit.Cli.json" [connection_args]
```

---

## Command Line Parameters

### Required Parameters

| Parameter | Description |
|-----------|-------------|
| `--json` | Path to CLI configuration file |
| `--profile` | Configuration profile name |

### Authentication Parameters

Use **one** of the following methods:

#### Option 1: Client Secret
```powershell
--auth ClientSecret --url "..." --clientid "..." --clientsecret "..."
```

#### Option 2: Interactive
```powershell
--auth Interactive --url "https://org.crm.dynamics.com"
```

---

## JSON Configuration

### JSON Schema

```json
{
  "webresources": [
    {
      "profile": "string",
      "solution": "string",
      "rootfolder": "string",
      "includefiles": ["array", "of", "patterns"],
      "excludefiles": ["array", "of", "patterns"],
      "dependencies": [
        {
          "webresources": ["web", "resource", "names"],
          "dependencies": ["dependency", "names"]
        }
      ]
    }
  ]
}
```

### JSON Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `profile` | string | **Yes** | - | Profile identifier. |
| `solution` | string | **Yes** | - | Solution unique name where web resources are added. |
| `rootfolder` | string | No | `""` | Root folder for web resources (relative to current). |
| `includefiles` | array | **Yes** | - | File patterns to include (glob supported). |
| `excludefiles` | array | No | `[]` | File patterns to exclude (glob supported). |
| `dependencies` | array | No | `[]` | Dependency definitions. |

### Parameter Details

#### `includefiles`
Glob patterns to find files.
- `**` : Recursive search.
- `*` : Single directory.
- Supports: `.js`, `.html`, `.css`, `.png`, `.svg`, `.resx`, etc.

#### `dependencies`
Defines dependencies between web resources.
- Support `[entity]` placeholder to match entity-specific files.

---

## Configuration Examples

### Example 1: Standard Deployment
```json
{
  "webresources": [
    {
      "profile": "DEBUG",
      "solution": "MySolution",
      "rootfolder": "WebResources",
      "includefiles": ["js/**.js", "css/**.css"],
      "excludefiles": ["**/*.test.js"]
    }
  ]
}
```
**Command:**
```powershell
devkit webresource --profile DEBUG --json "DynamicsCrm.DevKit.Cli.json" --auth Interactive --url "..."
```

### Example 2: Entity Dependencies with Token
```json
{
  "dependencies": [
    {
      "webresources": ["prefix_/entities/[entity].js"],
      "dependencies": [
        "prefix_/entities/[entity].form.js",
        "prefix_/entities/[entity].webapi.js"
      ]
    }
  ]
}
```
*Automatically wires up dependencies for `account.js` to `account.form.js`, etc.*

---

## Validation Rules
- ✅ **Profile exists:** Profile must exist in `webresources` array.
- ✅ **Solution exists:** Solution must exist in CLI-connected environment.
- ✅ **Files found:** At least one file matching `includefiles` must exist.

---

## Best Practices
- ✅ **Folder Structure:** Mirror the `publisher_prefix/` structure if possible, or use flat folders and let specific names handle it.
- ✅ **Dependencies:** Always define dependencies for correct load order.
- ✅ **Exclude Source:** Don't deploy `.ts`, `.scss`, or `.map` files.
