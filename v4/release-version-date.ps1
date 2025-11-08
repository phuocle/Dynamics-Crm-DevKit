<#
.SYNOPSIS
    DynamicsCrm.DevKit Release Build Script

.DESCRIPTION
  This script automates the release process including version updates,
  building, packaging, and cleanup.

.PARAMETER UseCurrentDate
    Optional flag. If true, uses current date/time instead of date.txt
    If false or omitted, reads date from date.txt

.EXAMPLE
    .\release-version-date.ps1
    .\release-version-date.ps1 -UseCurrentDate $false
    .\release-version-date.ps1 -UseCurrentDate $true

.NOTES
    Author: PhuocLe
#>

param(
    [Parameter(Mandatory=$false)]
    [bool]$UseCurrentDate = $false
)

# Set error action preference
$ErrorActionPreference = "Stop"

# Script-level variables
$script:VERSION = ""
$script:DATE = ""
$script:MSBUILD_PATH = ""
$script:VERSION_FILES = @()
$script:DATE_FILES = @()

#region Helper Functions

function Write-Header {
    param([string]$Message)
    Write-Host ""
    Write-Host "************************************************************" -ForegroundColor Cyan
    Write-Host $Message -ForegroundColor Cyan
    Write-Host "************************************************************" -ForegroundColor Cyan
}

function Write-Section {
    param([string]$Message)
    Write-Host ""
    Write-Host $Message -ForegroundColor Yellow
}

function Write-Success {
    param([string]$Message)
    Write-Host $Message -ForegroundColor Green
}

function Write-ErrorMessage {
    param([string]$Message)
    Write-Host $Message -ForegroundColor Red
}

function Write-Info {
    param([string]$Message)
    Write-Host $Message -ForegroundColor White
}

#endregion

#region Core Functions

function Initialize-Variables {
    Write-Section "Initializing variables..."

    # Check version.txt
    if (-not (Test-Path "version.txt")) {
     Write-ErrorMessage "ERROR: version.txt file not found!"
        return $false
    }

    $script:VERSION = Get-Content "version.txt" -Raw
    $script:VERSION = $script:VERSION.Trim()

    # Handle date based on flag
    if ($UseCurrentDate) {
        Write-Info "Using current date/time..."
        $script:DATE = Get-Date -Format "yyyy.MM.dd HH.mm.ss"
    }
    else {
        Write-Info "Using date from date.txt..."
        if (-not (Test-Path "date.txt")) {
            Write-ErrorMessage "ERROR: date.txt file not found!"
            return $false
}
        $script:DATE = Get-Content "date.txt" -Raw
        $script:DATE = $script:DATE.Trim()
    }

  Write-Success "Version: $script:VERSION"
    Write-Success "Date: $script:DATE"

    # Define file arrays for version and date updates
    $script:VERSION_FILES = @(
        "DynamicsCrm.DevKit.Shared\Const.cs",
        "DynamicsCrm.DevKit.Cli\docs\README.md",
        "DynamicsCrm.DevKit\source.extension.cs",
        "ProjectTemplates\CSharp\05.PackageProjectTemplate\ReadMe.md",
        "ProjectTemplates\CSharp\12.ReportProjectTemplate\ReadMe.md"
    )

    $script:DATE_FILES = @(
        "DynamicsCrm.DevKit.Cli\docs\README.md",
        "DynamicsCrm.DevKit.Shared\Const.cs",
        "DynamicsCrm.DevKit\source.extension.vsixmanifest",
        "DynamicsCrm.DevKit\VSPackage.resx",
        "DynamicsCrm.DevKit\source.extension.cs",
        "ProjectTemplates\CSharp\05.PackageProjectTemplate\ReadMe.md",
        "ProjectTemplates\CSharp\12.ReportProjectTemplate\ReadMe.md"
  )

    return $true
}

function Update-VersionPlaceholders {
    Write-Section "Updating version and date placeholders..."
 # Update version placeholders
    foreach ($file in $script:VERSION_FILES) {
        Write-Info "Updating version in $file"
        try {
            (Get-Content $file -Raw) -replace 'x\.xx\.xx\.xx', $script:VERSION | Set-Content -Path $file -Encoding UTF8 -NoNewline
        }
        catch {
            Write-ErrorMessage "ERROR: Failed to update version in $file"
            Write-ErrorMessage $_.Exception.Message
            return $false
        }
    }
    # Update date placeholders
    foreach ($file in $script:DATE_FILES) {
        Write-Info "Updating date in $file"
        try {
            (Get-Content $file -Raw) -replace 'xxxx\.yy\.zz HH\.mm\.ss', $script:DATE | Set-Content -Path $file -Encoding UTF8 -NoNewline
        }
        catch {
            Write-ErrorMessage "ERROR: Failed to update date in $file"
            Write-ErrorMessage $_.Exception.Message
            return $false
        }
    }
    Write-Success "Version and date placeholders updated successfully."
    return $true
}

function Find-MSBuild {
    Write-Info "Locating MSBuild..."
    $msbuildPaths = @(
        "C:\Program Files\Microsoft Visual Studio\2022\Enterprise\MSBuild\Current\Bin\MSBuild.exe",
        "C:\Program Files\Microsoft Visual Studio\2022\Professional\MSBuild\Current\Bin\MSBuild.exe",
        "C:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Current\Bin\MSBuild.exe"
    )
    foreach ($path in $msbuildPaths) {
        if (Test-Path $path) {
            $script:MSBUILD_PATH = $path
            Write-Success "Found MSBuild: $path"
            return $true
        }
    }
    Write-ErrorMessage "ERROR: MSBuild.exe not found!"
    Write-ErrorMessage "Please ensure Visual Studio 2022 is installed."
    return $false
}

function Build-Solution {
    Write-Header "Building solution: RELEASE MODE"
    Write-Info "Version: $script:VERSION - Release: $script:DATE"
    if (-not (Find-MSBuild)) {
        return $false
    }
    # Prepare published directory
    $publishedDir = "Published\$script:VERSION"
    if (Test-Path $publishedDir) {
        Write-Info "Cleaning existing published directory..."
    Remove-Item "$publishedDir\*.*" -Force -ErrorAction SilentlyContinue
    }
    else {
        Write-Info "Creating published directory..."
        New-Item -ItemType Directory -Path $publishedDir -Force | Out-Null
    }
    # Build solution
    Write-Info "Building solution..."
    try {
        $buildArgs = @(
            "/nologo",
            "/noautorsp",
            "/verbosity:minimal",
            "-p:Configuration=Release",
            "-target:Clean;Build",
            "DynamicsCrm.DevKit.AllInOne.sln"
        )
        $process = Start-Process -FilePath $script:MSBUILD_PATH -ArgumentList $buildArgs -NoNewWindow -Wait -PassThru
        if ($process.ExitCode -ne 0) {
            Write-ErrorMessage "ERROR: Solution build failed with exit code $($process.ExitCode)!"
            return $false
        }
        Write-Success "Solution built successfully."
        return $true
    }
    catch {
        Write-ErrorMessage "ERROR: Solution build failed!"
        Write-ErrorMessage $_.Exception.Message
        return $false
    }
}

function New-NuGetPackages {
    Write-Header "Creating NuGet packages..."
    $originalDir = Get-Location
    $success = $true
    try {
    # Create Analyzers NuGet package
      Write-Info "Creating Analyzers NuGet package..."
        Set-Location "DynamicsCrm.DevKit.Analyzers\Nuget"
        & .\pack.bat
        if ($LASTEXITCODE -ne 0) {
            Write-ErrorMessage "ERROR: Failed to create Analyzers NuGet package!"
            $success = $false
        }
        if ($success) {
            # Create CLI NuGet package
            Write-Info "Creating CLI NuGet package..."
            Set-Location $originalDir
            Set-Location "DynamicsCrm.DevKit.Cli\Nuget"
            & .\pack.bat
            if ($LASTEXITCODE -ne 0) {
                Write-ErrorMessage "ERROR: Failed to create CLI NuGet package!"
                $success = $false
            }
        }
        if ($success) {
        # Create Tool NuGet package
            Write-Info "Creating Tool NuGet package..."
            Set-Location $originalDir
            Set-Location "DynamicsCrm.DevKit.Tool\Nuget"
            & .\pack.bat
            if ($LASTEXITCODE -ne 0) {
                Write-ErrorMessage "ERROR: Failed to create Tool NuGet package!"
                $success = $false
            }
        }
        if ($success) {
            Write-Success "All NuGet packages created successfully."
        }
     }
    finally {
        Set-Location $originalDir
    }
    return $success
}

function Copy-VsixToPublished {
    Write-Section "Copying VSIX to published folder..."
    $vsixSource = "DynamicsCrm.DevKit\bin\Release\DynamicsCrm.DevKit.vsix"
    $vsixDest = "Published\$script:VERSION\DynamicsCrm.DevKit.$script:VERSION.vsix"
    if (-not (Test-Path $vsixSource)) {
      Write-ErrorMessage "ERROR: VSIX file not found at $vsixSource"
        return $false
    }
    try {
        Copy-Item -Path $vsixSource -Destination $vsixDest -Force
        Write-Success "VSIX copied successfully to $vsixDest"
        return $true
    }
    catch {
        Write-ErrorMessage "ERROR: Failed to copy VSIX file!"
        Write-ErrorMessage $_.Exception.Message
        return $false
    }
}

function Restore-Placeholders {
  Write-Section "Reverting version and date placeholders..."
    $hasErrors = $false
    # Revert version placeholders
    foreach ($file in $script:VERSION_FILES) {
        Write-Info "Reverting version in $file"
        try {
            (Get-Content $file -Raw) -replace [regex]::Escape($script:VERSION), 'x.xx.xx.xx' | Set-Content -Path $file -Encoding UTF8 -NoNewline
        }
        catch {
            Write-Host "WARNING: Failed to revert version in $file" -ForegroundColor Yellow
            Write-Host $_.Exception.Message -ForegroundColor Yellow
            $hasErrors = $true
        }
    }
    # Revert date placeholders
    foreach ($file in $script:DATE_FILES) {
        Write-Info "Reverting date in $file"
        try {
            (Get-Content $file -Raw) -replace [regex]::Escape($script:DATE), 'xxxx.yy.zz HH.mm.ss' | Set-Content -Path $file -Encoding UTF8 -NoNewline
        }
        catch {
            Write-Host "WARNING: Failed to revert date in $file" -ForegroundColor Yellow
            Write-Host $_.Exception.Message -ForegroundColor Yellow
            $hasErrors = $true
        }
    }
    if (-not $hasErrors) {
        Write-Success "Placeholders reverted successfully."
    }
    return $true
}

#endregion

#region Main Execution

function Main {
 Write-Header "DynamicsCrm DevKit Release Build Script"
    Write-Info "Use current date: $UseCurrentDate"
    try {
        # Initialize variables and validate required files
        if (-not (Initialize-Variables)) {
          throw "Failed to initialize variables"
        }
        # Update version and date placeholders in source files
        if (-not (Update-VersionPlaceholders)) {
            throw "Failed to update version placeholders"
        }
        # Build the solution
        if (-not (Build-Solution)) {
            throw "Failed to build solution"
        }
        # Create NuGet packages
        if (-not (New-NuGetPackages)) {
            throw "Failed to create NuGet packages"
        }
        # Copy VSIX to published folder
        if (-not (Copy-VsixToPublished)) {
            throw "Failed to copy VSIX"
        }
        # Revert version and date placeholders
        Restore-Placeholders | Out-Null
        # Success message
        Write-Header "Release build completed successfully!"
        Write-Success "Version: $script:VERSION"
        Write-Success "Date: $script:DATE"
        Write-Success "Published to: Published\$script:VERSION\"
        exit 0
    }
    catch {
        Write-Header "ERROR: Build process failed!"
        Write-ErrorMessage $_.Exception.Message
        Write-Info "Attempting to revert placeholders..."
        Restore-Placeholders | Out-Null
     exit 1
    }
}

# Execute main function
Main

#endregion
