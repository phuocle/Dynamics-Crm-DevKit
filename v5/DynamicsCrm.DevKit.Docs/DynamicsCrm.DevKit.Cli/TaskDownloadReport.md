# Task: Download Reports

## Overview

The Download Reports task retrieves SSRS report (RDL) files from Dynamics 365/Dataverse to your local file system, organizing them by language code. It downloads all reports contained in a specified solution, creating a folder structure that matches the format expected by the upload reports task. This enables report version control, offline editing, and backup of report definitions.

---

## Task Type

**CLI Type:** `downloadreports`

**Used in command line:**
```powershell
DynamicsCrm.DevKit.Cli /conn:"ConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:downloadreports /profile:DEBUG
```

---

## Command Line Parameters

### Required Parameters

| Parameter | Description | Example |
|-----------|-------------|---------|
| `/json` | Path to CLI configuration file | `/json:"DynamicsCrm.DevKit.Cli.json"` |
| `/type` | Task type to execute | `/type:downloadreports` |
| `/profile` | Configuration profile name | `/profile:DEBUG` |

### Authentication Parameters

#### Option 1: Connection String
```powershell
/conn:"AuthType=OAuth;Username=user@org.onmicrosoft.com;******;Url=https://org.crm.dynamics.com"
```

#### Option 2: SDK Login (OAuth Browser)
```powershell
/sdklogin:yes /url:"https://org.crm.dynamics.com"
```

---

## JSON Configuration

### JSON Schema

```json
{
  "downloadreports": [
    {
      "profile": "string",
      "solution": "string"
    }
  ]
}
```

### JSON Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `profile` | string | Yes | - | Profile identifier matching CLI `/profile` parameter |
| `solution` | string | Yes | `"???"` | Solution unique name in Dynamics 365 |

### Parameter Details

#### `solution`
The unique name of the solution containing reports to download.

- **Required:** Yes
- **Validation:** Cannot be empty or `"???"`
- **Example:** `"MyCompanySolution"`, `"ReportingSolution"`
- **Note:** Downloads all reports in this solution

---

## Output Folder Structure

Downloaded reports are organized by solution name and language code:

```
{CurrentDirectory}/
└── {solution}/
    ├── 1033/
    │   ├── SalesReport.rdl
    │   └── AccountReport.rdl
    ├── 1036/
    │   ├── SalesReport.rdl
    │   └── AccountReport.rdl
    └── 1041/
        ├── SalesReport.rdl
        └── AccountReport.rdl
```

---

## Configuration Examples

### Example 1: Download All Reports from Solution

**Description:** Download all reports from a solution to local folder.

**JSON Configuration:**
```json
{
  "downloadreports": [
    {
      "profile": "DEBUG",
      "solution": "ReportingSolution"
    }
  ]
}
```

**Command Line:**
```powershell
DynamicsCrm.DevKit.Cli /conn:"ConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:downloadreports /profile:DEBUG
```

**Result:**
- Creates `ReportingSolution/` folder
- Creates language subfolders (e.g., `1033/`, `1036/`)
- Downloads all `.rdl` files organized by language

### Example 2: Backup Reports

**Description:** Download reports for backup purposes.

**JSON Configuration:**
```json
{
  "downloadreports": [
    {
      "profile": "BACKUP",
      "solution": "ProductionReports"
    }
  ]
}
```

**Command Line:**
```powershell
DynamicsCrm.DevKit.Cli /sdklogin:yes /url:"https://prod.crm.dynamics.com" /json:"DynamicsCrm.DevKit.Cli.json" /type:downloadreports /profile:BACKUP
```

---

## Usage Workflow

1. **Configure JSON** - Set up `downloadreports` section with solution name
2. **Ensure clean folder** - Target folder must be empty or non-existent
3. **Execute CLI command** - Run to download reports
4. **Edit reports (optional)** - Modify RDL files using Report Builder or Visual Studio
5. **Version control (optional)** - Commit downloaded reports to source control
6. **Upload changes** - Use `uploadreports` task to deploy modified reports

---

## Validation Rules

The task validates the following before execution:

- ✅ **Profile exists:** The specified profile must exist in the JSON configuration
- ✅ **Solution exists:** Solution must exist in target Dynamics 365 environment
- ✅ **Solution name valid:** Cannot be empty or `"???"`
- ✅ **Folder empty:** Target folder must not contain existing files

**Error Messages:**

| Error | Cause | Solution |
|-------|-------|----------|
| `'profile' not found: 'X'` | Profile doesn't exist in JSON | Add profile or use existing profile name |
| `'solution' 'empty' or '???'` | Solution name not configured | Set valid solution name in JSON |
| `solution 'X' not exist` | Solution not found in environment | Create solution or check name |
| `Folder 'X' have an exsiting file(s)` | Target folder not empty | Delete files or use different folder |

---

## Best Practices

- ✅ **Clean folder:** Ensure target folder is empty before download
- ✅ **Backup regularly:** Download reports periodically for backup
- ✅ **Version control:** Commit downloaded reports to Git
- ✅ **Document changes:** Track modifications to reports
- ✅ **Download before upload:** Always download current version before making changes

---

## Common Issues & Troubleshooting

### Issue 1: Folder Not Empty

**Symptoms:** Error about existing files in folder

**Cause:** Target folder contains files from previous download

**Solution:**
```powershell
# Delete existing folder and download fresh
Remove-Item -Recurse -Force ReportingSolution
DynamicsCrm.DevKit.Cli /conn:"ConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:downloadreports /profile:DEBUG
```

### Issue 2: Duplicate File Names

**Symptoms:** Downloaded file has number appended (e.g., `Report(1).rdl`)

**Cause:** Multiple reports with same file name in solution

**Solution:** This is expected behavior - duplicate names get numbered suffix

### Issue 3: No Reports Found

**Symptoms:** No reports downloaded, folder empty

**Cause:** Solution contains no reports

**Solution:** Verify solution contains reports in Dynamics 365

---

## Related Tasks

- **uploadreports** - Upload modified reports back to Dynamics 365
- **solutionpackagers** - Package solutions containing reports

---

## Additional Resources

- [Main CLI Documentation](README.md)
- [All Tasks Overview](cli.md)
- [GitHub Repository](https://github.com/phuocle/Dynamics-Crm-DevKit)

---

## Notes

- **Language-based organization:** Reports organized by LCID language codes
- **Duplicate handling:** Duplicate file names get numbered suffix
- **Clean folder required:** Target folder must be empty to avoid conflicts
- **All reports downloaded:** Downloads all reports from solution, cannot filter
- **Folder auto-created:** Language subfolders created automatically
