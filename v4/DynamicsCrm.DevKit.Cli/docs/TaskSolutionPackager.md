# Task: Solution Packager

## Overview

The Solution Packager task automates the extraction and packing of Dynamics 365/Dataverse solutions. It can export solutions directly from your Dynamics 365 instance and extract them into source-controlled files, or pack extracted files back into solution files (.zip). This task integrates with the Microsoft SolutionPackager tool and supports both managed and unmanaged solutions, enabling source control integration and automated solution management in CI/CD pipelines.

---

## Task Type

**CLI Type:** `solutionpackagers`

**Used in command line:**
```powershell
DynamicsCrm.DevKit.Cli /conn:"ConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:solutionpackagers /profile:Extract-Both
```

---

## Command Line Parameters

### Required Parameters

| Parameter | Description | Example |
|-----------|-------------|---------|
| `/json` | Path to CLI configuration file | `/json:"DynamicsCrm.DevKit.Cli.json"` |
| `/type` | Task type to execute | `/type:solutionpackagers` |
| `/profile` | Configuration profile name | `/profile:Extract-Both` |

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

### Optional Parameters

| Parameter | Description | Default | Example |
|-----------|-------------|---------|---------|
| `/version` | Version number for CrmSdk.CoreTools | `1.0.0.0` | `/version:9.1.0.82` |
| `/command` | Additional commands | `""` | `/command:"extra"` |

---

## JSON Configuration

### JSON Schema

```json
{
  "solutionpackagers": [
    {
      "profile": "string",
      "solution": "string",
      "rootfolder": "string",
      "solutiontype": "string",
      "folder": "string",
      "type": "string",
      "mapfile": "string"
    }
  ]
}
```

### JSON Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `profile` | string | Yes | - | Profile identifier matching CLI `/profile` parameter |
| `solution` | string | Yes | `"???"` | Solution unique name in Dynamics 365 |
| `rootfolder` | string | No | `""` | Root folder path (usually empty, uses current directory) |
| `solutiontype` | string | Yes | `"???"` | Type of solution: `Managed`, `Unmanaged`, or `Both` |
| `folder` | string | Yes | `"???"` | Folder name where solution will be extracted/packed |
| `type` | string | Yes | `"???"` | Operation type: `Extract` or `Pack` |
| `mapfile` | string | No | `""` | Path to SolutionPackager mapping file |

### Parameter Details

#### `solution`
The unique name of the solution in your Dynamics 365 instance. This must match exactly with the solution name in the environment.

- **Required:** Yes
- **Validation:** Cannot be empty or `"???"`
- **Example:** `"MyCompanySolution"`, `"DEVKITV4"`
- **Error if missing:** `'solution' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.`

#### `solutiontype`
Specifies whether to work with managed, unmanaged, or both solution types.

- **Required:** Yes
- **Valid values:** `"Managed"`, `"Unmanaged"`, `"Both"` (case-insensitive)
- **Validation:** Must be one of the three valid values
- **Example:** `"Both"` - Extracts/packs both managed and unmanaged versions
- **Error if invalid:** `'solutiontype' should be: 'Managed' or 'Unmanaged' or 'Both'. Please check DynamicsCrm.DevKit.Cli.json file.`

#### `folder`
The folder where solution files will be extracted to or packed from. The folder structure will be created relative to the current directory.

- **Required:** Yes
- **Format:** Folder name (no leading/trailing slashes)
- **Example:** `"MySolution"`, `"DEVKITV4"`
- **For Extract:** Creates folder structure like `{folder}/Managed/` and `{folder}/Unmanaged/`
- **For Pack:** Reads from folder structure to create solution zip files
- **Error if missing:** `'folder' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.`

#### `type`
Specifies the operation to perform.

- **Required:** Yes
- **Valid values:** 
  - `"Extract"` - Exports solution from Dynamics 365 and extracts into files
  - `"Pack"` - Packs extracted files back into solution zip file
- **Validation:** Must be either `Extract` or `Pack` (case-insensitive)
- **For Pack:** Validates that `Solution.xml` exists in the expected location
- **Error if invalid:** `'type' should be: 'Extract' or 'Pack'. Please check DynamicsCrm.DevKit.Cli.json file.`

#### `rootfolder`
Optional root folder path prefix. Usually left empty to use the current directory.

- **Required:** No
- **Default:** `""` (empty, uses current directory)
- **Example:** `"src"`, `"solutions"`, or `""` for current directory

#### `mapfile`
Path to a SolutionPackager mapping file (XML) that controls how files are organized during extract/pack operations.

- **Required:** No
- **Default:** `""` (no mapping file)
- **Format:** Relative path from current directory
- **Example:** `"mapping.xml"`, `"config/solution-mapping.xml"`
- **Validation:** If specified, file must exist or error will occur
- **Use case:** Custom file organization, renaming components, controlling file locations

---

## Configuration Examples

### Example 1: Extract Both Managed and Unmanaged Solutions

**Description:** Export solution from Dynamics 365 and extract both managed and unmanaged versions into source-controlled folders.

**JSON Configuration:**
```json
{
  "solutionpackagers": [
    {
      "profile": "Extract-Both",
      "solution": "MyCompanySolution",
      "rootfolder": "",
      "solutiontype": "Both",
      "folder": "MyCompanySolution",
      "type": "Extract",
      "mapfile": ""
    }
  ]
}
```

**Command Line:**
```powershell
DynamicsCrm.DevKit.Cli /conn:"AuthType=OAuth;Username=user@org.onmicrosoft.com;Password=****;Url=https://org.crm.dynamics.com" /json:"DynamicsCrm.DevKit.Cli.json" /type:solutionpackagers /profile:Extract-Both
```

**Result:**
- Exports solution from Dynamics 365
- Creates folder structure:
  ```
  MyCompanySolution/
  ├── Managed/
  │   ├── Other/
  │   │   └── Solution.xml
  │   ├── Entities/
  │   ├── WebResources/
  │   └── ...
  └── Unmanaged/
      ├── Other/
      │   └── Solution.xml
      ├── Entities/
      ├── WebResources/
      └── ...
  ```

### Example 2: Extract Only Unmanaged Solution

**Description:** Extract only the unmanaged version of a solution for development purposes.

**JSON Configuration:**
```json
{
  "solutionpackagers": [
    {
      "profile": "Extract-Unmanaged",
      "solution": "DevSolution",
      "rootfolder": "",
      "solutiontype": "Unmanaged",
      "folder": "DevSolution",
      "type": "Extract",
      "mapfile": ""
    }
  ]
}
```

**Command Line:**
```powershell
DynamicsCrm.DevKit.Cli /sdklogin:yes /url:"https://dev.crm.dynamics.com" /json:"DynamicsCrm.DevKit.Cli.json" /type:solutionpackagers /profile:Extract-Unmanaged
```

### Example 3: Pack Solution from Source Files

**Description:** Pack extracted solution files back into a solution zip file for deployment.

**JSON Configuration:**
```json
{
  "solutionpackagers": [
    {
      "profile": "Pack-Both",
      "solution": "MyCompanySolution",
      "rootfolder": "",
      "solutiontype": "Both",
      "folder": "MyCompanySolution",
      "type": "Pack",
      "mapfile": ""
    }
  ]
}
```

**Command Line:**
```powershell
DynamicsCrm.DevKit.Cli /conn:"ConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:solutionpackagers /profile:Pack-Both
```

**Result:**
- Creates solution zip files:
  - `MyCompanySolution_managed.zip`
  - `MyCompanySolution.zip` (unmanaged)

### Example 4: Extract with Custom Mapping File

**Description:** Use a custom mapping file to control file organization during extraction.

**JSON Configuration:**
```json
{
  "solutionpackagers": [
    {
      "profile": "Extract-Mapped",
      "solution": "ComplexSolution",
      "rootfolder": "",
      "solutiontype": "Unmanaged",
      "folder": "ComplexSolution",
      "type": "Extract",
      "mapfile": "solution-mapping.xml"
    }
  ]
}
```

**Command Line:**
```powershell
DynamicsCrm.DevKit.Cli /conn:"ConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:solutionpackagers /profile:Extract-Mapped
```

---

## Usage Workflow

### Extract Workflow

1. **Ensure solution exists in Dynamics 365** - Verify the solution name matches exactly
2. **Configure JSON** - Set up `solutionpackagers` section with `type: "Extract"`
3. **Run CLI command** - Execute with appropriate connection and profile
4. **Solution is exported** - CLI automatically exports solution from Dynamics 365
5. **Solution is extracted** - SolutionPackager extracts the zip into files
6. **Commit to source control** - Add extracted files to Git/source control

### Pack Workflow

1. **Ensure extracted files exist** - Verify `{folder}/{solutiontype}/Other/Solution.xml` exists
2. **Make changes to solution files** - Edit XML files, add components, etc.
3. **Configure JSON** - Set up `solutionpackagers` section with `type: "Pack"`
4. **Run CLI command** - Execute to pack files into solution zip
5. **Solution zip created** - Find packed solution in current directory
6. **Import to Dynamics 365** - Use the zip file to import solution

---

## Validation Rules

The task validates the following before execution:

- ✅ **Profile exists:** The specified profile must exist in the JSON configuration
- ✅ **Solution name valid:** Cannot be empty or `"???"`
- ✅ **Solution type valid:** Must be `Managed`, `Unmanaged`, or `Both`
- ✅ **Folder specified:** Cannot be empty or `"???"`
- ✅ **Type valid:** Must be `Extract` or `Pack`
- ✅ **Map file exists:** If specified, the mapping file must exist
- ✅ **Solution exists (Extract only):** For Extract operations, solution must exist in Dynamics 365
- ✅ **Solution.xml exists (Pack only):** For Pack operations, `{folder}/{solutiontype}/Other/Solution.xml` must exist
- ✅ **SolutionPackager.exe exists:** Required tool must be available in packages folder

**Error Messages:**

| Error | Cause | Solution |
|-------|-------|----------|
| `'profile' not found: 'X'` | Profile doesn't exist in JSON | Add profile to JSON or use existing profile name |
| `'solution' 'empty' or '???'` | Solution name not configured | Set valid solution name in JSON |
| `'solutiontype' should be: 'Managed' or 'Unmanaged' or 'Both'` | Invalid solution type value | Use one of the three valid values |
| `'folder' 'empty' or '???'` | Folder not specified | Provide a valid folder name |
| `'type' should be: 'Extract' or 'Pack'` | Invalid operation type | Use either `Extract` or `Pack` |
| `solution 'X' not exist` | Solution not found in Dynamics 365 | Check solution name or create solution |
| `Invalid folder for Pack solution` | Solution.xml not found | Ensure extracted solution structure exists |
| `mapfile 'X' not exist` | Mapping file not found | Check path or remove mapfile parameter |
| `Not found SolutionPackager.exe file` | CoreTools package not installed | Install Microsoft.CrmSdk.CoreTools NuGet package |

---

## Best Practices

- ✅ **Use "Both" for production:** Extract both managed and unmanaged to track all changes
- ✅ **Separate profiles for Extract/Pack:** Create distinct profiles for clarity
- ✅ **Consistent folder names:** Use solution name as folder name for easy identification
- ✅ **Version control:** Commit extracted files to Git for full history tracking
- ✅ **Meaningful profile names:** Use names like `Extract-Both`, `Pack-Unmanaged`, etc.
- ✅ **Automated in CI/CD:** Integrate extract/pack in build pipelines
- ✅ **Test pack locally:** Always test packing before deployment
- ✅ **Clean working directory:** Ensure no conflicts before extraction
- ✅ **Backup before pack:** Keep backup of working extracted files

---

## Common Issues & Troubleshooting

### Issue 1: SolutionPackager.exe Not Found

**Symptoms:** Error message: `Not found SolutionPackager.exe file`

**Cause:** Microsoft.CrmSdk.CoreTools NuGet package is not installed

**Solution:**
```powershell
# Install the package
Install-Package Microsoft.CrmSdk.CoreTools -Version 9.1.0.82

# Or using .NET CLI
dotnet add package Microsoft.CrmSdk.CoreTools --version 9.1.0.82
```

### Issue 2: Solution Not Found During Extract

**Symptoms:** Error message: `solution 'X' not exist`

**Cause:** Solution name doesn't match or solution doesn't exist in the environment

**Solution:**
1. Verify solution exists in Dynamics 365 Settings > Solutions
2. Check the exact spelling of solution unique name (case-sensitive)
3. Ensure you're connected to the correct environment
4. Use SDK Login to verify connection visually

### Issue 3: Pack Fails - Solution.xml Not Found

**Symptoms:** Error message: `Invalid folder for Pack solution`

**Cause:** The required folder structure doesn't exist or Solution.xml is missing

**Solution:**
1. Ensure you've extracted the solution first using Extract operation
2. Verify the folder path: `{folder}/{solutiontype}/Other/Solution.xml` exists
3. Check `solutiontype` matches the extracted folder (Managed/Unmanaged)
4. Don't manually delete or move the Solution.xml file

### Issue 4: Mapping File Not Found

**Symptoms:** Error message: `mapfile 'X' not exist`

**Cause:** The specified mapping file path is incorrect or file doesn't exist

**Solution:**
1. Verify the path is relative to current directory
2. Check file name spelling and extension
3. If not needed, set `mapfile: ""` (empty string)

### Issue 5: Permission Errors During Extract/Pack

**Symptoms:** Access denied errors, file in use errors

**Cause:** Antivirus, file locks, or permission issues

**Solution:**
1. Close Visual Studio and other tools accessing the folder
2. Run command prompt as Administrator
3. Temporarily disable antivirus scanning on the folder
4. Ensure you have write permissions to the directory

---

## Integration Examples

### CI/CD Pipeline (Azure DevOps) - Extract on Commit

```yaml
trigger:
  branches:
    include:
    - main

steps:
- task: NuGetCommand@2
  displayName: 'Restore NuGet Packages'
  inputs:
    command: 'restore'

- task: PowerShell@2
  displayName: 'Extract Solution from DEV'
  inputs:
    targetType: 'inline'
    script: |
      $cliPath = "$(Build.SourcesDirectory)\packages\DynamicsCrm.DevKit.Cli\tools\DynamicsCrm.DevKit.Cli.exe"
      & $cliPath /conn:"$(DevConnectionString)" /json:"DynamicsCrm.DevKit.Cli.json" /type:solutionpackagers /profile:Extract-Both

- task: PowerShell@2
  displayName: 'Commit Extracted Files'
  inputs:
    targetType: 'inline'
    script: |
      git config user.email "build@company.com"
      git config user.name "Build Agent"
      git add .
      git commit -m "Auto-extract solution [skip ci]"
      git push origin main
```

### CI/CD Pipeline (GitHub Actions) - Pack and Release

```yaml
name: Pack and Deploy Solution

on:
  workflow_dispatch:
  push:
    branches: [ release ]

jobs:
  pack-deploy:
    runs-on: windows-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup NuGet
      uses: nuget/setup-nuget@v1
      
    - name: Restore Packages
      run: nuget restore
      
    - name: Pack Solution
      run: |
        $cliPath = "packages\DynamicsCrm.DevKit.Cli\tools\DynamicsCrm.DevKit.Cli.exe"
        & $cliPath /conn:"${{ secrets.PROD_CONNECTION }}" /json:"DynamicsCrm.DevKit.Cli.json" /type:solutionpackagers /profile:Pack-Both
      shell: pwsh
      
    - name: Upload Artifacts
      uses: actions/upload-artifact@v3
      with:
        name: solution-packages
        path: |
          *.zip
```

### PowerShell Script - Full Extract-Modify-Pack Cycle

```powershell
# Configuration
$connectionString = "AuthType=OAuth;Username=admin@company.onmicrosoft.com;Password=****;Url=https://company.crm.dynamics.com"
$jsonFile = "DynamicsCrm.DevKit.Cli.json"
$cliPath = ".\packages\DynamicsCrm.DevKit.Cli\tools\DynamicsCrm.DevKit.Cli.exe"

# Step 1: Extract solution from DEV environment
Write-Host "Extracting solution from DEV..." -ForegroundColor Green
& $cliPath /conn:"$connectionString" /json:"$jsonFile" /type:solutionpackagers /profile:Extract-Both

# Step 2: Make automated changes (example: update version)
Write-Host "Updating solution version..." -ForegroundColor Green
$solutionXml = "MySolution\Unmanaged\Other\Solution.xml"
[xml]$xml = Get-Content $solutionXml
$xml.ImportExportXml.SolutionManifest.Version = "1.0.0.1"
$xml.Save($solutionXml)

# Step 3: Pack modified solution
Write-Host "Packing solution..." -ForegroundColor Green
& $cliPath /json:"$jsonFile" /type:solutionpackagers /profile:Pack-Both

# Step 4: Deploy to TEST (using separate import script)
Write-Host "Solution packed successfully!" -ForegroundColor Green
Write-Host "Solution file: MySolution.zip" -ForegroundColor Yellow
```

### Batch Script - Daily Backup Extract

```batch
@echo off
echo ========================================
echo Daily Solution Backup Extract
echo ========================================

set CLI_PATH=packages\DynamicsCrm.DevKit.Cli\tools\DynamicsCrm.DevKit.Cli.exe
set JSON_FILE=DynamicsCrm.DevKit.Cli.json
set PROFILE=Extract-Both

REM Create backup folder with date
set BACKUP_DATE=%DATE:~-4%%DATE:~-10,2%%DATE:~-7,2%
set BACKUP_FOLDER=backups\solution_%BACKUP_DATE%

REM Run extraction
%CLI_PATH% /conn:"%PROD_CONNECTION%" /json:"%JSON_FILE%" /type:solutionpackagers /profile:%PROFILE%

REM Copy extracted files to backup
xcopy MySolution %BACKUP_FOLDER%\MySolution\ /E /I /Y

echo Backup completed: %BACKUP_FOLDER%
pause
```

---

## Related Tasks

- **generators** - Generate code (JS/TypeScript/C#) from solution metadata
- **webresources** - Deploy web resources that are part of the solution
- **servers** - Deploy plugins and workflows included in the solution
- **proxytypes** - Generate early-bound classes from solution entities

---

## Additional Resources

- [Main CLI Documentation](README.md)
- [All Tasks Overview](cli.md)
- [Microsoft SolutionPackager Documentation](https://docs.microsoft.com/en-us/power-platform/alm/solution-packager-tool)
- [Solution Concepts](https://docs.microsoft.com/en-us/power-platform/alm/solution-concepts-alm)
- [GitHub Repository](https://github.com/phuocle/Dynamics-Crm-DevKit)

---

## Notes

- **SolutionPackager.exe** is part of Microsoft.CrmSdk.CoreTools NuGet package and must be installed
- **Extract operation** automatically exports the solution from Dynamics 365 before extracting
- **Version parameter** `/version` should match your installed CoreTools version (e.g., `9.1.0.82`)
- **Both option** creates two separate folders: `Managed/` and `Unmanaged/`
- **Mapping files** provide advanced control over file organization and can prevent merge conflicts
- **Solution.xml** contains solution metadata including version, publisher, and components
- **Packed solutions** are created in the current directory, not in the folder parameter path
- **Character encoding:** SolutionPackager uses UTF-8 for XML files
- **Large solutions:** Extract/Pack operations may take several minutes for complex solutions
