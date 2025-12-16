<#
.SYNOPSIS
    DynamicsCrm.DevKit Release Build Script

.DESCRIPTION
    Builds the DynamicsCrm.DevKit solution, creates NuGet packages, and publishes the VSIX.
    Updates version and date placeholders in source files before building.

    ANNUAL RELEASE: Uses Dec 31 of current year at 23:59:59
    For current date testing, use Release-DynamicsCrm-DevKit-CurrentDate.ps1

.PARAMETER BuildDate
    Optional. The build date string to use. Format: "yyyy.MM.dd HH.mm.ss".
    If not provided, defaults to "31.12.{CurrentYear} 23:59:59" for annual release.

.EXAMPLE
    .\Release-DynamicsCrm-DevKit.ps1
    .\Release-DynamicsCrm-DevKit.ps1 -BuildDate "2025.12.15 10.00.00"
#>
param (
    [string]$BuildDate
)

$ErrorActionPreference = "Stop"

# --- Configuration ---
# Load configuration from single source of truth
$ConfigFile = Join-Path $PSScriptRoot "DevKit.ReleaseConfig.json"
if (-not (Test-Path $ConfigFile)) {
    throw "Configuration file not found: $ConfigFile"
}

$Config = Get-Content $ConfigFile -Raw | ConvertFrom-Json

# Version - Change this in DevKit.ReleaseConfig.json when releasing a new version
$Version = $Config.version

$SolutionFile = Join-Path $PSScriptRoot $Config.buildConfig.solutionFile
$PublishedRoot = Join-Path $PSScriptRoot $Config.buildConfig.publishedRoot

# Files to update (loaded from config)
$VersionFiles = $Config.files.versionReplacement
$DateFiles = $Config.files.dateReplacement

# --- Helper Functions ---

function Get-MSBuildPath {
    # User requested only VS 2026 Professional
    # Note: VS 2026 might be installed in a folder named "18" or "2026"
    $paths = @(
        "C:\Program Files\Microsoft Visual Studio\2026\Professional\MSBuild\Current\Bin\MSBuild.exe",
        "C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe"
    )

    foreach ($path in $paths) {
        if (Test-Path $path) {
            return $path
        }
    }

    # Try vswhere as a fallback for non-standard install locations, but filter for 2026 or 18
    $vswhere = "${env:ProgramFiles(x86)}\Microsoft Visual Studio\Installer\vswhere.exe"
    if (Test-Path $vswhere) {
        $foundPath = & $vswhere -latest -products * -requires Microsoft.Component.MSBuild -find MSBuild\**\Bin\MSBuild.exe -prerelease
        if ($foundPath -and (Test-Path $foundPath)) {
             if (($foundPath -like "*2026*") -or ($foundPath -like "*\18\*")) {
                return $foundPath
             }
        }
    }

    throw "MSBuild.exe for Visual Studio 2026 Professional not found. Checked paths: $($paths -join ', ')"
}

function Update-FileContent {
    param ($FilePath, $Version, $Date, $Config)

    $fullPath = Join-Path $PSScriptRoot $FilePath
    if (-not (Test-Path $fullPath)) {
        Write-Warning "File not found: $FilePath"
        return $null
    }

    # Use .NET to read/write to avoid PowerShell adding newlines
    $content = [System.IO.File]::ReadAllText($fullPath, [System.Text.Encoding]::UTF8)
    $originalContent = $content

    if ($Version) {
        $versionPattern = [regex]::Escape($Config.placeholders.version)
        $content = $content -replace $versionPattern, $Version
    }
    if ($Date) {
        $datePattern = [regex]::Escape($Config.placeholders.date)
        $content = $content -replace $datePattern, $Date
    }

    if ($content -ne $originalContent) {
        Write-Host "Updating $fullPath..." -ForegroundColor DarkGray
        [System.IO.File]::WriteAllText($fullPath, $content, [System.Text.Encoding]::UTF8)
        return @{ Path = $fullPath; Content = $originalContent }
    }
    return $null
}

function Restore-Files {
    param ($Backups)
    foreach ($backup in $Backups) {
        Write-Host "Restoring $($backup.Path)..." -ForegroundColor DarkGray
        [System.IO.File]::WriteAllText($backup.Path, $backup.Content, [System.Text.Encoding]::UTF8)
    }
}

# --- Main Logic ---

try {
    # 1. Determine Build Date
    # If no BuildDate provided, use Dec 31 of current year (annual release)
    if ([string]::IsNullOrWhiteSpace($BuildDate)) {
        $currentYear = (Get-Date).Year
        $annualConfig = $Config.buildConfig.annualRelease
        $BuildDate = "{0:D2}.{1:D2}.$currentYear {2:D2}:{3:D2}:{4:D2}" -f `
            $annualConfig.day, $annualConfig.month, $annualConfig.hour, $annualConfig.minute, $annualConfig.second
    }

    Write-Host "Version: $Version" -ForegroundColor Cyan
    Write-Host "Date:    $BuildDate" -ForegroundColor Cyan

    # 2. Update Placeholders
    Write-Host "`nUpdating placeholders..." -ForegroundColor Yellow
    $backups = @()

    # Get unique list of files
    $allFiles = $VersionFiles + $DateFiles | Select-Object -Unique

    foreach ($file in $allFiles) {
        $v = if ($VersionFiles -contains $file) { $Version } else { $null }
        $d = if ($DateFiles -contains $file) { $BuildDate } else { $null }

        $backup = Update-FileContent -FilePath $file -Version $v -Date $d -Config $Config
        if ($backup) { $backups += $backup }
    }

    # 3. Restore NuGet Packages
    Write-Host "`nRestoring NuGet packages..." -ForegroundColor Yellow
    $msbuild = Get-MSBuildPath
    Write-Host "Using MSBuild: $msbuild" -ForegroundColor DarkGray

    $restoreArgs = @(
        "$SolutionFile",
        "/t:Restore",
        "/nologo",
        "/v:q" # Quiet verbosity for restore
    )

    & $msbuild $restoreArgs
    if ($LASTEXITCODE -ne 0) { throw "NuGet restore failed with exit code $LASTEXITCODE" }
    Write-Host "Restore Success." -ForegroundColor Green

    # 4. Build Solution
    Write-Host "`nBuilding Solution..." -ForegroundColor Yellow

    # Clean published folder
    $publishDir = Join-Path $PublishedRoot $Version
    if (Test-Path $publishDir) { Remove-Item $publishDir -Recurse -Force }
    New-Item -Path $publishDir -ItemType Directory -Force | Out-Null

    $buildArgs = @(
        "$SolutionFile",
        "/t:Clean;Build",
        "/p:Configuration=Release",
        "/nologo",
        "/v:m" # Minimal verbosity
    )


    & $msbuild $buildArgs
    if ($LASTEXITCODE -ne 0) { throw "Build failed with exit code $LASTEXITCODE" }
    Write-Host "Build Success." -ForegroundColor Green

    # 4. Create NuGet Packages
    Write-Host "`nCreating NuGet Packages..." -ForegroundColor Yellow

    $nugetExe = Join-Path $PSScriptRoot "DynamicsCrm.DevKit.Analyzers\Nuget\nuget.exe"
    if (-not (Test-Path $nugetExe)) {
        throw "nuget.exe not found at $nugetExe"
    }

    $nugetPackages = @(
        @{ Dir = "DynamicsCrm.DevKit.Analyzers\Nuget"; Nuspec = "DynamicsCrm.DevKit.Analyzers.nuspec" },
        @{ Dir = "DynamicsCrm.DevKit.Cli\Nuget"; Nuspec = "DynamicsCrm.DevKit.Cli.nuspec" },
        @{ Dir = "DynamicsCrm.DevKit.Tool\Nuget"; Nuspec = "DynamicsCrm.DevKit.Tool.nuspec" }
    )

    foreach ($pkg in $nugetPackages) {
        $dir = Join-Path $PSScriptRoot $pkg.Dir
        $nuspec = $pkg.Nuspec

        Write-Host "Packing $nuspec in $dir..." -ForegroundColor DarkGray

        Push-Location $dir
        try {
            # Remove old nupkg files to avoid confusion
            Get-ChildItem -Filter "*.nupkg" | Remove-Item -Force -ErrorAction SilentlyContinue

            $packArgs = @(
                "pack",
                $nuspec,
                "-Tool",
                "-Version", $Version,
                "-OutputDirectory", $publishDir,
                "-NoPackageAnalysis"
            )

            & $nugetExe $packArgs
            if ($LASTEXITCODE -ne 0) { throw "NuGet pack failed for $nuspec" }
        }
        finally {
            Pop-Location
        }
    }

    # 5. Copy VSIX
    Write-Host "`nCopying VSIX..." -ForegroundColor Yellow
    $vsixSource = Join-Path $PSScriptRoot "DynamicsCrm.DevKit\bin\Release\DynamicsCrm.DevKit.vsix"
    if (Test-Path $vsixSource) {
        $vsixDest = Join-Path $publishDir "DynamicsCrm.DevKit.$Version.vsix"
        Copy-Item $vsixSource $vsixDest -Force
        Write-Host "Copied VSIX to $vsixDest" -ForegroundColor Green
    } else {
        throw "VSIX file not found at $vsixSource"
    }

    Write-Host "`nRelease completed successfully!" -ForegroundColor Green

}
catch {
    Write-Error $_.Exception.Message
    exit 1
}
finally {
    # 6. Revert Placeholders
    if ($backups.Count -gt 0) {
        Write-Host "`nReverting placeholders..." -ForegroundColor Yellow
        Restore-Files -Backups $backups
    }
}
