# Task: Web Resources

## Overview

The Web Resources task deploys web resources to Dynamics 365/Dataverse, including HTML, CSS, JavaScript, images, and other web files. It supports 15+ file types, pattern matching for file selection, dependency management with automatic XML generation, entity token replacement, and batch publishing. The task can handle complex folder structures and automatically creates or updates web resources based on file paths and naming conventions.

---

## Task Type

**CLI Type:** `webresources`

**Used in command line:**
```powershell
DynamicsCrm.DevKit.Cli /conn:"ConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:webresources /profile:DEBUG
```

---

## Command Line Parameters

### Required Parameters

| Parameter | Description | Example |
|-----------|-------------|---------|
| `/json` | Path to CLI configuration file | `/json:"DynamicsCrm.DevKit.Cli.json"` |
| `/type` | Task type to execute | `/type:webresources` |
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

### Optional Parameters

| Parameter | Description | Default | Example |
|-----------|-------------|---------|---------|
| `/version` | Version number | `1.0.0.0` | `/version:1.0.0.0` |
| `/command` | Additional commands | `""` | `/command:"extra"` |

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
| `profile` | string | Yes | - | Profile identifier matching CLI `/profile` parameter |
| `solution` | string | Yes | `"???"` | Solution unique name in Dynamics 365 |
| `rootfolder` | string | No | `""` | Root folder for web resources (usually empty for current directory) |
| `includefiles` | array | Yes | `[]` | File patterns to include (supports wildcards) |
| `excludefiles` | array | No | `[]` | File patterns to exclude (supports wildcards) |
| `dependencies` | array | No | `[]` | Web resource dependency definitions |

### Parameter Details

#### `solution`
The unique name of the solution where web resources will be deployed.

- **Required:** Yes
- **Validation:** Cannot be empty or `"???"`
- **Example:** `"MyCompanySolution"`, `"DEVKITV4"`
- **Error if missing:** `'solution' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.`
- **Note:** Solution must exist and provides the publisher prefix for web resources

#### `rootfolder`
Root folder path for web resources. Usually left empty to use current directory.

- **Required:** No
- **Default:** `""` (current directory)
- **Example:** `"WebResources"`, `"src\\web"`, or `""` for current
- **Use case:** Organize web resources in subdirectory

#### `includefiles`
Array of file patterns to include in deployment. Supports glob patterns with wildcards.

- **Required:** Yes (must have at least one pattern)
- **Wildcards:** 
  - `*` - Matches any characters in a single directory level
  - `**` - Matches any characters across multiple directory levels
- **Supported file types:**
  - HTML: `.htm`, `.html`
  - Scripts: `.js`, `.ts`
  - Styles: `.css`, `.less`, `.sass`, `.scss`
  - Images: `.png`, `.jpg`, `.jpeg`, `.gif`, `.ico`, `.svg`
  - Data: `.xml`, `.json`, `.resx`
  - Documents: `.xsl`, `.xslt`
  - Vector: `.svg`
- **Examples:**
  ```json
  "includefiles": [
    "css\\**.css",           // All CSS files recursively
    "js\\**.js",             // All JS files recursively
    "entities\\*.js",        // JS files in entities folder only
    "html\\**.html",         // All HTML files recursively
    "images\\**.png",        // All PNG images recursively
    "lib\\**.js"             // Library JS files
  ]
  ```

#### `excludefiles`
Array of file patterns to exclude from deployment. Applied after `includefiles`.

- **Required:** No
- **Default:** `[]` (empty array)
- **Use case:** Exclude test files, source maps, configuration files
- **Examples:**
  ```json
  "excludefiles": [
    "test\\**.js",           // Exclude test files
    "**\\*.min.js",          // Exclude minified files
    "**\\*.map",             // Exclude source maps
    "node_modules\\**"       // Exclude dependencies
  ]
  ```

#### `dependencies`
Array of dependency definitions for web resources. Creates dependency XML automatically.

- **Required:** No
- **Default:** `[]` (no dependencies)
- **Structure:** Each item has `webresources` array and `dependencies` array
- **Special token:** `[entity]` - Replaced with entity names from folder structure
- **Example:**
  ```json
  "dependencies": [
    {
      "webresources": ["prefix_/entities/[entity].js"],
      "dependencies": [
        "prefix_/entities/[entity].form.js",
        "prefix_/entities/[entity].webapi.js"
      ]
    },
    {
      "webresources": ["prefix_/entities/[entity].form.js"],
      "dependencies": ["prefix_/lib/devkit.js"]
    }
  ]
  ```
- **Validation:** Cannot contain `"???_/"` in web resource or dependency names

---

## Configuration Examples

### Example 1: Basic Web Resource Deployment

**Description:** Deploy web resources from standard folder structure to Dynamics 365.

**JSON Configuration:**
```json
{
  "webresources": [
    {
      "profile": "DEBUG",
      "solution": "MyCompanySolution",
      "rootfolder": "",
      "includefiles": [
        "css\\**.css",
        "js\\**.js",
        "html\\**.html",
        "images\\**.png"
      ],
      "excludefiles": [
        "test\\**.js"
      ],
      "dependencies": []
    }
  ]
}
```

**Folder Structure:**
```
ProjectRoot/
├── css/
│   ├── main.css
│   └── theme.css
├── js/
│   ├── app.js
│   └── utils.js
├── html/
│   └── page.html
└── images/
    └── logo.png
```

**Command Line:**
```powershell
DynamicsCrm.DevKit.Cli /conn:"AuthType=OAuth;Username=user@company.com;******;Url=https://company.crm.dynamics.com" /json:"DynamicsCrm.DevKit.Cli.json" /type:webresources /profile:DEBUG
```

### Example 2: Entity-Based Web Resources with Dependencies

**Description:** Deploy entity-specific JavaScript files with automatic dependency management using `[entity]` token.

**JSON Configuration:**
```json
{
  "webresources": [
    {
      "profile": "DEBUG",
      "solution": "DEVKITV4",
      "rootfolder": "",
      "includefiles": [
        "entities\\*.js",
        "lib\\**.js"
      ],
      "excludefiles": [],
      "dependencies": [
        {
          "webresources": ["v4_/entities/[entity].js"],
          "dependencies": [
            "v4_/entities/[entity].form.js",
            "v4_/entities/[entity].webapi.js"
          ]
        },
        {
          "webresources": ["v4_/entities/[entity].form.js"],
          "dependencies": ["v4_/lib/devkit.js"]
        }
      ]
    }
  ]
}
```

**Folder Structure:**
```
ProjectRoot/
├── entities/
│   ├── account.js
│   ├── account.form.js
│   ├── account.webapi.js
│   ├── contact.js
│   ├── contact.form.js
│   └── contact.webapi.js
└── lib/
    └── devkit.js
```

**Result:**
- `account.js` depends on `account.form.js` and `account.webapi.js`
- `account.form.js` depends on `devkit.js`
- `contact.js` depends on `contact.form.js` and `contact.webapi.js`
- `contact.form.js` depends on `devkit.js`

**Command Line:**
```powershell
DynamicsCrm.DevKit.Cli /sdklogin:yes /url:"https://dev.crm.dynamics.com" /json:"DynamicsCrm.DevKit.Cli.json" /type:webresources /profile:DEBUG
```

### Example 3: Complete Web Application

**Description:** Deploy a full web application with all resource types.

**JSON Configuration:**
```json
{
  "webresources": [
    {
      "profile": "RELEASE",
      "solution": "MyWebApp",
      "rootfolder": "",
      "includefiles": [
        "css\\**.css",
        "entities\\*.js",
        "html\\**.html",
        "images\\**.png",
        "images\\**.svg",
        "js\\**.js",
        "lib\\**.js",
        "resources\\*.resx"
      ],
      "excludefiles": [
        "test\\**.js",
        "**\\*.min.js",
        "**\\*.map"
      ],
      "dependencies": [
        {
          "webresources": ["prefix_/html/app.html"],
          "dependencies": [
            "prefix_/css/app.css",
            "prefix_/js/app.js"
          ]
        }
      ]
    }
  ]
}
```

**Command Line:**
```powershell
DynamicsCrm.DevKit.Cli /conn:"$(ProductionConnection)" /json:"DynamicsCrm.DevKit.Cli.json" /type:webresources /profile:RELEASE
```

### Example 4: TypeScript and Modern Web Development

**Description:** Deploy TypeScript compiled output with CSS preprocessors.

**JSON Configuration:**
```json
{
  "webresources": [
    {
      "profile": "MODERN",
      "solution": "ModernApp",
      "rootfolder": "dist",
      "includefiles": [
        "css\\**.css",
        "js\\**.js",
        "html\\**.html"
      ],
      "excludefiles": [
        "**\\*.ts",
        "**\\*.scss",
        "**\\*.map"
      ],
      "dependencies": []
    }
  ]
}
```

**Command Line:**
```powershell
DynamicsCrm.DevKit.Cli /conn:"ConnectionString" /json:"DynamicsCrm.DevKit.Cli.json" /type:webresources /profile:MODERN
```

---

## Usage Workflow

1. **Organize files** - Structure web resources in logical folders (css/, js/, html/, etc.)
2. **Configure JSON** - Set up `webresources` section with file patterns
3. **Add dependencies (optional)** - Configure dependency relationships
4. **Build/Compile** - If using TypeScript/SASS, compile to output folder
5. **Execute CLI command** - Run deployment
6. **Verify deployment** - Check web resources in solution
7. **Publish** - CLI automatically publishes web resources
8. **Test** - Verify web resources work correctly in Dynamics 365

---

## Validation Rules

The task validates the following before execution:

- ✅ **Profile exists:** The specified profile must exist in the JSON configuration
- ✅ **Solution exists:** Solution must exist in target Dynamics 365 environment
- ✅ **Solution name valid:** Cannot be empty or `"???"`
- ✅ **Dependency syntax valid:** Cannot contain `"???_/"` in dependency definitions
- ✅ **Web resource dependencies supported:** Environment must support web resource dependencies

**Error Messages:**

| Error | Cause | Solution |
|-------|-------|----------|
| `'profile' not found: 'X'` | Profile doesn't exist in JSON | Add profile or use existing profile name |
| `'solution' 'empty' or '???'` | Solution name not configured | Set valid solution name in JSON |
| `solution 'X' not exist` | Solution not found in environment | Create solution or check name |
| `Found ???_/ in webresource dependencies` | Invalid placeholder in dependencies | Replace `???` with actual publisher prefix |

---

## Best Practices

- ✅ **Use consistent folder structure:** Organize by type (css/, js/, html/, images/)
- ✅ **Leverage wildcards:** Use `**` for recursive patterns
- ✅ **Entity token pattern:** Use `[entity]` for scalable entity-based resources
- ✅ **Exclude source files:** Don't deploy .ts, .scss, .map files
- ✅ **Set dependencies:** Configure dependencies for proper loading order
- ✅ **Publisher prefix:** Web resources named as `prefix_/path/file.ext`
- ✅ **Test in DEV:** Always test web resource deployment in non-production
- ✅ **Version control:** Keep web resources in source control
- ✅ **Batch publishing:** CLI automatically batches publish operations
- ✅ **Use SDK login for dev:** Easier authentication during development

---

## Common Issues & Troubleshooting

### Issue 1: Web Resources Not Found After Deployment

**Symptoms:** Web resources deployed but not visible in Dynamics 365

**Cause:** Web resources created but not published

**Solution:**
The CLI automatically publishes web resources. If still not visible:
1. Check solution components - verify web resources added to solution
2. Refresh browser cache - Clear cache and reload
3. Check security roles - Ensure user has read permissions on web resources
4. Verify file paths - Web resource names must match expected pattern

### Issue 2: Dependency Errors in Browser Console

**Symptoms:** JavaScript errors about missing dependencies

**Cause:** Dependencies not configured or published in wrong order

**Solution:**
```json
{
  "dependencies": [
    {
      "webresources": ["prefix_/entities/account.js"],
      "dependencies": [
        "prefix_/lib/jquery.js",          // Load jQuery first
        "prefix_/lib/devkit.js",          // Then devkit
        "prefix_/entities/account.form.js" // Then form helpers
      ]
    }
  ]
}
```

### Issue 3: Entity Token Not Replaced

**Symptoms:** Web resource created with name containing `[entity]` literally

**Cause:** Folder structure doesn't match entity pattern

**Solution:**
Ensure folder structure matches pattern:
```
entities/
├── account.js          → Creates prefix_/entities/account.js
├── account.form.js     → Creates prefix_/entities/account.form.js
├── contact.js          → Creates prefix_/entities/contact.js
└── contact.form.js     → Creates prefix_/entities/contact.form.js
```

### Issue 4: Files Not Being Deployed

**Symptoms:** Some files not deployed despite being in include patterns

**Cause:** Files excluded by `excludefiles` or unsupported file type

**Solution:**
1. Check `excludefiles` patterns - Ensure not accidentally excluding
2. Verify file extension - Only supported extensions are deployed
3. Check file location - Ensure files in correct folder
4. Review patterns - Test wildcards match expected files

### Issue 5: Large Files Fail to Deploy

**Symptoms:** Deployment fails for large image or resource files

**Cause:** File size exceeds Dynamics 365 limits (typically 5MB)

**Solution:**
1. Compress images - Use image optimization tools
2. Split resources - Break large files into smaller chunks
3. Use external hosting - Host large files externally, reference via URL
4. Check file size limits - Verify against Dynamics 365 limits

---

## Integration Examples

### CI/CD Pipeline (Azure DevOps)

```yaml
trigger:
  branches:
    include:
    - main
  paths:
    include:
    - WebResources/**

pool:
  vmImage: 'windows-latest'

steps:
- task: Npm@1
  displayName: 'Install Dependencies'
  inputs:
    command: 'install'
    workingDir: 'WebResources'

- task: Npm@1
  displayName: 'Build Web Resources'
  inputs:
    command: 'custom'
    customCommand: 'run build'
    workingDir: 'WebResources'

- task: PowerShell@2
  displayName: 'Deploy Web Resources'
  inputs:
    targetType: 'inline'
    script: |
      $cliPath = "$(Build.SourcesDirectory)\packages\DynamicsCrm.DevKit.Cli\tools\DynamicsCrm.DevKit.Cli.exe"
      & $cliPath /conn:"$(ConnectionString)" /json:"DynamicsCrm.DevKit.Cli.json" /type:webresources /profile:$(Environment)
```

### CI/CD Pipeline (GitHub Actions)

```yaml
name: Deploy Web Resources

on:
  push:
    branches: [ main ]
    paths:
      - 'WebResources/**'
  workflow_dispatch:

jobs:
  deploy:
    runs-on: windows-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '16'
        
    - name: Install Dependencies
      run: npm install
      working-directory: ./WebResources
      
    - name: Build
      run: npm run build
      working-directory: ./WebResources
      
    - name: Setup NuGet
      uses: nuget/setup-nuget@v1
      
    - name: Restore CLI
      run: nuget restore
      
    - name: Deploy Web Resources
      run: |
        $cliPath = "packages\DynamicsCrm.DevKit.Cli\tools\DynamicsCrm.DevKit.Cli.exe"
        & $cliPath /conn:"${{ secrets.CONNECTION_STRING }}" /json:"DynamicsCrm.DevKit.Cli.json" /type:webresources /profile:RELEASE
      shell: pwsh
```

### PowerShell Script - Watch and Deploy

```powershell
# Watch for file changes and auto-deploy web resources
# Useful for development with live updates

$connectionString = "AuthType=OAuth;Username=dev@company.com;******;Url=https://dev.crm.dynamics.com"
$cliPath = ".\packages\DynamicsCrm.DevKit.Cli\tools\DynamicsCrm.DevKit.Cli.exe"
$jsonFile = "DynamicsCrm.DevKit.Cli.json"
$watchPath = ".\WebResources"

Write-Host "Watching for changes in: $watchPath" -ForegroundColor Green
Write-Host "Press Ctrl+C to stop" -ForegroundColor Yellow
Write-Host ""

$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path = $watchPath
$watcher.IncludeSubdirectories = $true
$watcher.EnableRaisingEvents = $true

$action = {
    $path = $Event.SourceEventArgs.FullPath
    $changeType = $Event.SourceEventArgs.ChangeType
    
    Write-Host "[$changeType] $path" -ForegroundColor Cyan
    Write-Host "Deploying..." -ForegroundColor Yellow
    
    & $cliPath /conn:"$connectionString" /json:"$jsonFile" /type:webresources /profile:DEBUG
    
    Write-Host "Deployed!" -ForegroundColor Green
    Write-Host ""
}

Register-ObjectEvent $watcher "Changed" -Action $action
Register-ObjectEvent $watcher "Created" -Action $action

while ($true) {
    Start-Sleep -Seconds 1
}
```

### Gulp Task - Build and Deploy

```javascript
// gulpfile.js
const gulp = require('gulp');
const { exec } = require('child_process');
const sass = require('gulp-sass')(require('sass'));
const typescript = require('gulp-typescript');

// Compile SASS
gulp.task('sass', function() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});

// Compile TypeScript
gulp.task('typescript', function() {
    return gulp.src('src/ts/**/*.ts')
        .pipe(typescript({
            target: 'ES5',
            module: 'none'
        }))
        .pipe(gulp.dest('dist/js'));
});

// Copy HTML
gulp.task('html', function() {
    return gulp.src('src/html/**/*.html')
        .pipe(gulp.dest('dist/html'));
});

// Deploy to Dynamics 365
gulp.task('deploy', function(done) {
    const cliPath = 'packages\\DynamicsCrm.DevKit.Cli\\tools\\DynamicsCrm.DevKit.Cli.exe';
    const conn = process.env.CONNECTION_STRING;
    
    exec(`"${cliPath}" /conn:"${conn}" /json:"DynamicsCrm.DevKit.Cli.json" /type:webresources /profile:DEBUG`, 
        (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error.message}`);
                return done(error);
            }
            console.log(stdout);
            done();
        });
});

// Build and deploy
gulp.task('default', gulp.series(['sass', 'typescript', 'html', 'deploy']));

// Watch for changes
gulp.task('watch', function() {
    gulp.watch('src/scss/**/*.scss', gulp.series(['sass', 'deploy']));
    gulp.watch('src/ts/**/*.ts', gulp.series(['typescript', 'deploy']));
    gulp.watch('src/html/**/*.html', gulp.series(['html', 'deploy']));
});
```

---

## Web Resource Naming Convention

Web resources are automatically named based on file path and publisher prefix:

**Pattern:** `{prefix}_/{folder}/{subfolder}/{filename}.{ext}`

**Examples:**
| File Path | Publisher Prefix | Web Resource Name |
|-----------|------------------|-------------------|
| `css/main.css` | `contoso` | `contoso_/css/main.css` |
| `js/app.js` | `contoso` | `contoso_/js/app.js` |
| `entities/account.form.js` | `v4` | `v4_/entities/account.form.js` |
| `html/pages/home.html` | `myapp` | `myapp_/html/pages/home.html` |
| `images/logo.png` | `contoso` | `contoso_/images/logo.png` |

---

## Supported File Types

| Type | Extensions | Web Resource Type |
|------|-----------|-------------------|
| **Web Page** | .htm, .html | HTML |
| **Style Sheet** | .css | CSS |
| **Script** | .js | JavaScript |
| **Data** | .xml | XML |
| **Image (PNG)** | .png | PNG |
| **Image (JPG)** | .jpg, .jpeg | JPG |
| **Image (GIF)** | .gif | GIF |
| **Image (ICO)** | .ico | ICO |
| **Vector** | .svg | SVG |
| **XSLT** | .xsl, .xslt | XSL |
| **Resource** | .resx | RESX |

---

## Related Tasks

- **downloadwebresources** - Download web resources from Dynamics 365
- **generators** - Generate TypeScript definitions for web resources
- **solutionpackagers** - Extract/Pack solutions containing web resources

---

## Additional Resources

- [Main CLI Documentation](README.md)
- [All Tasks Overview](cli.md)
- [Web Resources Documentation](https://docs.microsoft.com/en-us/power-apps/developer/model-driven-apps/web-resources)
- [Web Resource Dependencies](https://docs.microsoft.com/en-us/power-apps/developer/model-driven-apps/web-resource-dependencies)
- [GitHub Repository](https://github.com/phuocle/Dynamics-Crm-DevKit)

---

## Notes

- **Automatic Publishing:** CLI automatically publishes web resources after deployment
- **Batch Operations:** Multiple web resources published in batches for performance
- **Entity Token:** `[entity]` in dependency definitions replaced with actual entity names from folder structure
- **Dependency XML:** Dependencies automatically converted to proper XML format
- **File Encoding:** Files deployed with proper encoding (Base64 for binary, UTF-8 for text)
- **Folder Mapping:** Folder structure in filesystem maps to web resource names
- **Publisher Prefix:** Obtained from solution publisher settings
- **Update vs Create:** CLI automatically detects existing web resources and updates them
- **Solution Integration:** Web resources automatically added to specified solution
