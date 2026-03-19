# Task: Upload Reports

## Overview

The Upload Reports task deploys SSRS report (RDL) files to Dynamics 365/Dataverse, updating existing reports within a solution. It supports multi-language reports, comparing file contents to avoid unnecessary deployments, and handles report file organization by language code. The task only updates reports that already exist in the solution—it does not create new reports.

---

## Task Type

**CLI Type:** `uploadreports`

**Used in command line:**
```powershell
DynamicsCrm.DevKit.Cli /conn:"ConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:uploadreports /profile:DEBUG
```

---

## Command Line Parameters

### Required Parameters

| Parameter | Description | Example |
|-----------|-------------|---------|
| `/json` | Path to CLI configuration file | `/json:"DynamicsCrm.DevKit.Cli.json"` |
| `/type` | Task type to execute | `/type:uploadreports` |
| `/profile` | Configuration profile name | `/profile:DEBUG` |

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

---

## JSON Configuration

### JSON Schema

```json
{
  "uploadreports": [
    {
      "profile": "string",
      "solution": "string",
      "language": ["array", "of", "languages"]
    }
  ]
}
```

### JSON Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `profile` | string | Yes | - | Profile identifier matching CLI `/profile` parameter |
| `solution` | string | Yes | `"???"` | Solution unique name in Dynamics 365 |
| `language` | array | Yes | `[]` | Array of language codes (e.g., `["1033", "1036"]`) |

### Parameter Details

#### `solution`
The unique name of the solution containing the reports to update.

- **Required:** Yes
- **Validation:** Cannot be empty or `"???"`
- **Example:** `"MyCompanySolution"`, `"ReportingSolution"`
- **Note:** Reports must already exist in this solution

#### `language`
Array of language codes for multi-language report support.

- **Required:** Yes
- **Validation:** Cannot be empty or contain only `"???"`
- **Format:** Array of LCID strings
- **Common values:**
  - `"1033"` - English (United States)
  - `"1036"` - French (France)
  - `"1031"` - German (Germany)
  - `"1041"` - Japanese
  - `"2052"` - Chinese (China)
- **Example:**
  ```json
  "language": ["1033"]              // English only
  "language": ["1033", "1036"]      // English and French
  "language": ["1033", "1036", "1031"]  // English, French, German
  ```

---

## Folder Structure

Reports must be organized by solution name and language code:

```
{CurrentDirectory}/
└── {solution}/
    ├── 1033/
    │   ├── SalesReport.rdl
    │   └── AccountReport.rdl
    ├── 1036/
    │   ├── SalesReport.rdl
    │   └── AccountReport.rdl
    └── 1031/
        ├── SalesReport.rdl
        └── AccountReport.rdl
```

---

## Configuration Examples

### Example 1: English Reports Only

**Description:** Upload English reports to Dynamics 365.

**JSON Configuration:**
```json
{
  "uploadreports": [
    {
      "profile": "DEBUG",
      "solution": "ReportingSolution",
      "language": ["1033"]
    }
  ]
}
```

**Folder Structure:**
```
ReportingSolution/
└── 1033/
    ├── SalesReport.rdl
    ├── CustomerReport.rdl
    └── InventoryReport.rdl
```

**Command Line:**
```powershell
DynamicsCrm.DevKit.Cli /conn:"ConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:uploadreports /profile:DEBUG
```

### Example 2: Multi-Language Reports

**Description:** Upload reports in multiple languages.

**JSON Configuration:**
```json
{
  "uploadreports": [
    {
      "profile": "MULTILANG",
      "solution": "GlobalReports",
      "language": ["1033", "1036", "1031", "1041"]
    }
  ]
}
```

**Folder Structure:**
```
GlobalReports/
├── 1033/  # English
│   └── SalesReport.rdl
├── 1036/  # French
│   └── SalesReport.rdl
├── 1031/  # German
│   └── SalesReport.rdl
└── 1041/  # Japanese
    └── SalesReport.rdl
```

**Command Line:**
```powershell
DynamicsCrm.DevKit.Cli /sdklogin:yes /url:"https://company.crm.dynamics.com" /json:"DynamicsCrm.DevKit.Cli.json" /type:uploadreports /profile:MULTILANG
```

---

## Usage Workflow

1. **Create reports in solution** - Add report entities to your Dynamics 365 solution
2. **Download existing reports** - Use `downloadreports` task to get current reports (optional)
3. **Modify RDL files** - Edit reports using SQL Server Report Builder or Visual Studio
4. **Organize by language** - Place RDL files in `{solution}/{languagecode}/` folders
5. **Configure JSON** - Set up `uploadreports` section with solution and languages
6. **Execute CLI command** - Run to upload modified reports
7. **Verify in Dynamics 365** - Check reports updated correctly

---

## Validation Rules

The task validates the following before execution:

- ✅ **Profile exists:** The specified profile must exist in the JSON configuration
- ✅ **Solution exists:** Solution must exist in target Dynamics 365 environment
- ✅ **Solution name valid:** Cannot be empty or `"???"`
- ✅ **Languages specified:** Cannot be empty or contain only `"???"`
- ✅ **Folders exist:** Language folders must exist (`{solution}/{languagecode}/`)

**Error Messages:**

| Error | Cause | Solution |
|-------|-------|----------|
| `'profile' not found: 'X'` | Profile doesn't exist in JSON | Add profile or use existing profile name |
| `'solution' 'empty' or '???'` | Solution name not configured | Set valid solution name in JSON |
| `solution 'X' not exist` | Solution not found in environment | Create solution or check name |
| `'languages' 'empty' or '???'` | Languages not configured | Add language codes to array |
| `Folder does not exist: X` | Language folder missing | Create folder for each language code |

---

## Best Practices

- ✅ **Download before upload:** Use `downloadreports` to get current reports first
- ✅ **Version control:** Keep RDL files in source control
- ✅ **Test reports:** Verify reports work before uploading
- ✅ **Match file names:** File names must match report file names in Dynamics 365
- ✅ **Consistent languages:** Ensure all reports have all required languages
- ✅ **Compare changes:** CLI automatically skips unchanged reports

---

## Common Issues & Troubleshooting

### Issue 1: Folder Not Found

**Symptoms:** Error about folder not existing

**Cause:** Language folder not created

**Solution:**
Create folders for each language:
```
mkdir MyReports\1033
mkdir MyReports\1036
```

### Issue 2: Report Not Uploading

**Symptoms:** Report found but not being deployed

**Cause:** Report file content identical to existing (CLI skips unchanged)

**Solution:** This is expected behavior - CLI only uploads changed reports

### Issue 3: Multiple Reports with Same Name

**Symptoms:** Error about finding multiple reports with same file name

**Cause:** Duplicate report names in solution

**Solution:**
1. Ensure report file names are unique within solution
2. Check solution for duplicate reports
3. Rename reports if needed

---

## Related Tasks

- **downloadreports** - Download reports from Dynamics 365
- **solutionpackagers** - Package solutions containing reports

---

## Additional Resources

- [Main CLI Documentation](README.md)
- [All Tasks Overview](cli.md)
- [GitHub Repository](https://github.com/phuocle/Dynamics-Crm-DevKit)

---

## Notes

- **Updates only:** Task only updates existing reports, does not create new ones
- **File name matching:** RDL file name must match report file name in Dynamics 365
- **Language support:** Supports multi-language reports with different RDL files per language
- **Smart deployment:** Compares content and skips unchanged reports
- **LCID codes:** Uses Language Code Identifier (LCID) for language specification
