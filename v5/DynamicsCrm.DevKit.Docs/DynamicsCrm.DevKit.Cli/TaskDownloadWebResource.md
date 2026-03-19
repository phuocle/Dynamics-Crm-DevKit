# Task: Download Web Resources

## Overview

The Download Web Resources task retrieves web resource files from Dynamics 365/Dataverse to your local file system. It downloads all web resources contained in a specified solution, preserving the folder structure based on web resource names. This enables version control, offline editing, backup, and migration of web resources between environments.

---

## Task Type

**CLI Command:** `downloadwebresource`

**Used in command line:**
```powershell
devkit downloadwebresource --profile DEBUG --json "DynamicsCrm.DevKit.Cli.json" [connection_args]
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
  "downloadwebresources": [
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
The unique name of the solution containing web resources to download.

- **Required:** Yes
- **Validation:** Cannot be empty or `"???"`
- **Example:** `"MyCompanySolution"`, `"WebResourcesSolution"`
- **Note:** Downloads all web resources in this solution

---

## Output Folder Structure

Web resources are downloaded preserving the folder structure from their names:

**Web Resource Name:** `prefix_/css/main.css`  
**Downloaded To:** `{solution}/css/main.css`

**Example:**
```
{CurrentDirectory}/
└── {solution}/
    ├── css/
    │   ├── main.css
    │   └── theme.css
    ├── js/
    │   ├── app.js
    │   └── utils.js
    ├── html/
    │   └── page.html
    ├── images/
    │   └── logo.png
    └── entities/
        ├── account.js
        └── account.form.js
```

---

## Configuration Examples

### Example 1: Download All Web Resources

**Description:** Download all web resources from a solution for backup or version control.

**JSON Configuration:**
```json
{
  "downloadwebresources": [
    {
      "profile": "DEBUG",
      "solution": "WebResourcesSolution"
    }
  ]
}
```

**Command Line:**
```powershell
devkit downloadwebresource --profile DEBUG --json "DynamicsCrm.DevKit.Cli.json" [connection_args]
```

**Result:**
- Creates `WebResourcesSolution/` folder
- Downloads all web resources with folder structure
- Binary files (images, etc.) properly decoded from Base64

### Example 2: Backup Production Web Resources

**Description:** Download web resources from production for backup.

**JSON Configuration:**
```json
{
  "downloadwebresources": [
    {
      "profile": "PROD-BACKUP",
      "solution": "ProductionWebApp"
    }
  ]
}
```

**Command Line:**
```powershell
devkit downloadwebresource --profile PROD-BACKUP --json "DynamicsCrm.DevKit.Cli.json" --auth ClientSecret --url "$(Url)" --clientid "$(ClientId)" --clientsecret "$(ClientSecret)"
```

### Example 3: Download for Version Control

**Description:** Download web resources to commit to source control.

**JSON Configuration:**
```json
{
  "downloadwebresources": [
    {
      "profile": "SOURCE-CONTROL",
      "solution": "MyWebApp"
    }
  ]
}
```

**Command Line:**
```powershell
devkit downloadwebresource --profile SOURCE-CONTROL --json "DynamicsCrm.DevKit.Cli.json" --auth Interactive --url "https://company.crm.dynamics.com"
```

---

## Usage Workflow

1. **Configure JSON** - Set up `downloadwebresources` section with solution name
2. **Ensure clean folder** - Target folder must be empty or non-existent
3. **Execute CLI command** - Run to download web resources
4. **Edit files (optional)** - Modify downloaded files as needed
5. **Version control (optional)** - Commit to Git or other VCS
6. **Upload changes** - Use `webresources` task to deploy modified files

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
- ✅ **Backup regularly:** Download web resources periodically for backup
- ✅ **Version control:** Commit downloaded files to Git
- ✅ **Environment sync:** Download from one environment, upload to another
- ✅ **Download before upload:** Always get current version before making changes
- ✅ **Test restored files:** Verify downloaded files are correct

---

## Common Issues & Troubleshooting

### Issue 1: Folder Not Empty

**Symptoms:** Error about existing files in folder

**Cause:** Target folder contains files from previous download

**Solution:**
```powershell
# Delete existing folder and download fresh
Remove-Item -Recurse -Force WebResourcesSolution
devkit downloadwebresource --profile DEBUG --json "DynamicsCrm.DevKit.Cli.json" [connection_args]
```

### Issue 2: Binary Files Corrupted

**Symptoms:** Downloaded images or binary files don't work

**Cause:** Encoding issue (should not happen with this CLI)

**Solution:** Re-download - CLI properly handles Base64 decoding

### Issue 3: No Web Resources Found

**Symptoms:** No files downloaded, folder empty

**Cause:** Solution contains no web resources

**Solution:** Verify solution contains web resources in Dynamics 365

### Issue 4: Missing Folders

**Symptoms:** Some expected files/folders missing

**Cause:** Web resources not in specified solution

**Solution:**
1. Check which solution contains the web resources
2. Verify web resources are solution components
3. Use correct solution name

---

## Integration Examples

### PowerShell - Download and Commit to Git

```powershell
# Download web resources and commit to source control

# Use devkit environment variables or pass auth args directly
# devkit is a .NET global tool, no path needed
$jsonFile = "DynamicsCrm.DevKit.Cli.json"
$solution = "MyWebApp"

# Clean folder
if (Test-Path $solution) {
    Remove-Item -Recurse -Force $solution
}

# Download web resources
Write-Host "Downloading web resources..." -ForegroundColor Green
devkit downloadwebresource --profile DEBUG --json $jsonFile --auth Interactive --url "https://company.crm.dynamics.com"

if ($LASTEXITCODE -eq 0) {
    Write-Host "Download successful!" -ForegroundColor Green
    
    # Commit to Git
    git add $solution
    git commit -m "Update web resources from Dynamics 365"
    git push
    
    Write-Host "Committed to source control!" -ForegroundColor Green
}
```

### Environment Migration Script

```powershell
# Download from DEV, upload to UAT

$devUrl = "https://dev.crm.dynamics.com"
$uatUrl = "https://uat.crm.dynamics.com"
# devkit is a .NET global tool, no path needed

# Download from DEV
Write-Host "Downloading from DEV..." -ForegroundColor Yellow
devkit downloadwebresource --profile DEV --json "DynamicsCrm.DevKit.Cli.json" --auth Interactive --url $devUrl

# Upload to UAT
Write-Host "Uploading to UAT..." -ForegroundColor Yellow
devkit webresource --profile UAT --json "DynamicsCrm.DevKit.Cli.json" --auth Interactive --url $uatUrl

Write-Host "Migration complete!" -ForegroundColor Green
```

---

## Related Tasks

- **webresources** - Upload web resources to Dynamics 365
- **solutionpackagers** - Package solutions containing web resources

---

## Additional Resources

- [Main CLI Documentation](README.md)
- [All Tasks Overview](cli.md)
- [Web Resources Documentation](https://docs.microsoft.com/en-us/power-apps/developer/model-driven-apps/web-resources)
- [GitHub Repository](https://github.com/phuocle/Dynamics-Crm-DevKit)

---

## Notes

- **Clean folder required:** Target folder must be empty to avoid conflicts
- **Folder structure preserved:** Downloaded files maintain folder hierarchy from web resource names
- **Binary file support:** Images and binary files properly decoded from Base64
- **All types supported:** Downloads all web resource types (HTML, CSS, JS, images, etc.)
- **Publisher prefix removed:** Web resource names like `prefix_/css/main.css` become `css/main.css`
- **Folder auto-created:** Subfolders created automatically based on web resource names
