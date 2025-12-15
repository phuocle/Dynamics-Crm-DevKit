# Task: [TASK_NAME]

## Overview

[Brief description of what this task does and when to use it]

---

## Task Type

**CLI Type:** `[tasktype]`

**Used in command line:**
```powershell
DynamicsCrm.DevKit.Cli /conn:"ConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:[tasktype] /profile:[profile]
```

---

## Command Line Parameters

### Required Parameters

| Parameter | Description | Example |
|-----------|-------------|---------|
| `/json` | Path to CLI configuration file | `/json:"DynamicsCrm.DevKit.Cli.json"` |
| `/type` | Task type to execute | `/type:[tasktype]` |
| `/profile` | Configuration profile name | `/profile:DEBUG` |

### Authentication Parameters

#### Option 1: Connection String
```powershell
/conn:"AuthType=OAuth;Username=user@org.onmicrosoft.com;Password=****;Url=https://org.crm.dynamics.com"
```

#### Option 2: SDK Login (OAuth Browser)
```powershell
/sdklogin:yes /url:"https://org.crm.dynamics.com"
```

### Optional Parameters

| Parameter | Description | Default | Example |
|-----------|-------------|---------|---------|
| `/version` | Version number for tools | `1.0.0.0` | `/version:1.0.0.0` |
| `/command` | Additional commands | `""` | `/command:"extra"` |

---

## JSON Configuration

### JSON Schema

```json
{
  "[tasktype]": [
    {
      "profile": "string",
      "[parameter1]": "value1",
      "[parameter2]": "value2",
      "[parameter3]": ["array", "values"]
    }
  ]
}
```

### JSON Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `profile` | string | Yes | - | Profile identifier matching CLI `/profile` parameter |
| `[parameter1]` | string | Yes/No | `"???"` | [Description] |
| `[parameter2]` | string | Yes/No | `""` | [Description] |
| `[parameter3]` | array | Yes/No | `[]` | [Description] |

### Parameter Details

#### `parameter1`
[Detailed description of this parameter, including:]
- Valid values or format
- Special characters or patterns supported
- Examples of common usage
- Validation rules

#### `parameter2`
[Detailed description]

---

## Configuration Examples

### Example 1: [Scenario Name]

**Description:** [What this example demonstrates]

**JSON Configuration:**
```json
{
  "[tasktype]": [
    {
      "profile": "DEBUG",
      "[parameter1]": "value1",
      "[parameter2]": "value2"
    }
  ]
}
```

**Command Line:**
```powershell
DynamicsCrm.DevKit.Cli /conn:"ConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:[tasktype] /profile:DEBUG
```

### Example 2: [Another Scenario]

**Description:** [What this example demonstrates]

**JSON Configuration:**
```json
{
  "[tasktype]": [
    {
      "profile": "RELEASE",
      "[parameter1]": "different_value",
      "[parameter2]": "another_value"
    }
  ]
}
```

**Command Line:**
```powershell
DynamicsCrm.DevKit.Cli /sdklogin:yes /url:"https://org.crm.dynamics.com" /json:"DynamicsCrm.DevKit.Cli.json" /type:[tasktype] /profile:RELEASE
```

---

## Usage Workflow

1. **Step 1:** [First action to take]
2. **Step 2:** [Second action]
3. **Step 3:** [Third action]
4. **Step 4:** Execute the CLI command
5. **Step 5:** [Post-execution steps if any]

---

## Validation Rules

The task validates the following before execution:

- ✅ **Profile exists:** The specified profile must exist in the JSON configuration
- ✅ **[Validation 1]:** [Description]
- ✅ **[Validation 2]:** [Description]
- ✅ **[Validation 3]:** [Description]

**Error Messages:**

| Error | Cause | Solution |
|-------|-------|----------|
| `'profile' not found: 'X'` | Profile doesn't exist in JSON | Add profile to JSON or use existing profile name |
| `'[parameter]' 'empty' or '???'` | Parameter not configured | Set valid value in JSON configuration |
| `[Other error]` | [Cause] | [Solution] |

---

## Best Practices

- ✅ [Best practice 1]
- ✅ [Best practice 2]
- ✅ [Best practice 3]
- ✅ Use meaningful profile names (e.g., DEBUG, RELEASE, UAT, PROD)
- ✅ Test with a non-production environment first
- ✅ Keep configuration files in version control

---

## Common Issues & Troubleshooting

### Issue 1: [Common Problem]

**Symptoms:** [What user sees]

**Cause:** [Why it happens]

**Solution:**
```
[How to fix it]
```

### Issue 2: [Another Problem]

**Symptoms:** [What user sees]

**Cause:** [Why it happens]

**Solution:**
```
[How to fix it]
```

---

## Integration Examples

### CI/CD Pipeline (Azure DevOps)

```yaml
steps:
- task: PowerShell@2
  displayName: '[Task Description]'
  inputs:
    targetType: 'inline'
    script: |
      DynamicsCrm.DevKit.Cli /conn:"$(ConnectionString)" /json:"DynamicsCrm.DevKit.Cli.json" /type:[tasktype] /profile:$(Environment)
```

### CI/CD Pipeline (GitHub Actions)

```yaml
- name: [Task Description]
  run: |
    DynamicsCrm.DevKit.Cli /conn:"${{ secrets.CONNECTION_STRING }}" /json:"DynamicsCrm.DevKit.Cli.json" /type:[tasktype] /profile:${{ env.PROFILE }}
  shell: pwsh
```

### PowerShell Script

```powershell
# Set variables
$connectionString = "AuthType=OAuth;Username=user@org.onmicrosoft.com;Password=****;Url=https://org.crm.dynamics.com"
$jsonFile = "DynamicsCrm.DevKit.Cli.json"
$taskType = "[tasktype]"
$profile = "DEBUG"

# Execute CLI
& DynamicsCrm.DevKit.Cli /conn:"$connectionString" /json:"$jsonFile" /type:$taskType /profile:$profile
```

---

## Related Tasks

- **[Related Task 1]** - [Brief description of relation]
- **[Related Task 2]** - [Brief description of relation]

---

## Additional Resources

- [Main CLI Documentation](README.md)
- [All Tasks Overview](cli.md)
- [GitHub Repository](https://github.com/phuocle/Dynamics-Crm-DevKit)

---

## Notes

- [Important note 1]
- [Important note 2]
- [Important note 3]
