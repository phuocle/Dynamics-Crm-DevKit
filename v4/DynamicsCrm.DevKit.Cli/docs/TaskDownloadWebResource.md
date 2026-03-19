# Task: Download Web Resources

## Overview

The Download Web Resources task retrieves web resource files from Dynamics 365/Dataverse to your local file system. It downloads all web resources contained in a specified solution, preserving the folder structure based on web resource names. This enables version control, offline editing, backup, and migration of web resources between environments.

---

## Task Type

**CLI Type:** `downloadwebresources`

**Used in command line:**
```powershell
DynamicsCrm.DevKit.Cli /conn:"ConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:downloadwebresources /profile:DEBUG
```

---

## Command Line Parameters

### Required Parameters

| Parameter | Description | Example |
|-----------|-------------|---------|
| `/json` | Path to CLI configuration file | `/json:"DynamicsCrm.DevKit.Cli.json"` |
| `/type` | Task type to execute | `/type:downloadwebresources` |
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
DynamicsCrm.DevKit.Cli /conn:"ConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:downloadwebresources /profile:DEBUG
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
DynamicsCrm.DevKit.Cli /conn:"$(ProdConnection)" /json:"DynamicsCrm.DevKit.Cli.json" /type:downloadwebresources /profile:PROD-BACKUP
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
DynamicsCrm.DevKit.Cli /sdklogin:yes /url:"https://company.crm.dynamics.com" /json:"DynamicsCrm.DevKit.Cli.json" /type:downloadwebresources /profile:SOURCE-CONTROL
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
DynamicsCrm.DevKit.Cli /conn:"ConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:downloadwebresources /profile:DEBUG
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

$connectionString = "AuthType=OAuth;Username=admin@company.com;******;Url=https://company.crm.dynamics.com"
$cliPath = ".\packages\DynamicsCrm.DevKit.Cli\tools\DynamicsCrm.DevKit.Cli.exe"
$jsonFile = "DynamicsCrm.DevKit.Cli.json"
$solution = "MyWebApp"

# Clean folder
if (Test-Path $solution) {
    Remove-Item -Recurse -Force $solution
}

# Download web resources
Write-Host "Downloading web resources..." -ForegroundColor Green
& $cliPath /conn:"$connectionString" /json:"$jsonFile" /type:downloadwebresources /profile:DEBUG

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

$devConnection = "AuthType=OAuth;Username=dev@company.com;******;Url=https://dev.crm.dynamics.com"
$uatConnection = "AuthType=OAuth;Username=uat@company.com;******;Url=https://uat.crm.dynamics.com"
$cliPath = ".\packages\DynamicsCrm.DevKit.Cli\tools\DynamicsCrm.DevKit.Cli.exe"

# Download from DEV
Write-Host "Downloading from DEV..." -ForegroundColor Yellow
& $cliPath /conn:"$devConnection" /json:"DynamicsCrm.DevKit.Cli.json" /type:downloadwebresources /profile:DEV

# Upload to UAT
Write-Host "Uploading to UAT..." -ForegroundColor Yellow
& $cliPath /conn:"$uatConnection" /json:"DynamicsCrm.DevKit.Cli.json" /type:webresources /profile:UAT

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
