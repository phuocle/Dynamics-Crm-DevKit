<#
.SYNOPSIS
    DynamicsCrm.DevKit DEBUG Build Script (for AI Agent sessions)

.DESCRIPTION
    This script is designed for AI agent sessions where human interaction is not available.
    It builds in DEBUG mode which does NOT require PFX signing key password.

    For official RELEASE builds, use Release-DynamicsCrm-DevKit.ps1 (requires PFX password).

.PARAMETER BuildDate
    Optional. The build date string to use. Format: "dd.MM.yyyy HH:mm:ss".
    If not provided, uses current date/time.

.EXAMPLE
    .\Release-DynamicsCrm-DevKit-Debug.ps1
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

# Version - loaded from config
$Version = $Config.version

$SolutionFile = Join-Path $PSScriptRoot $Config.buildConfig.solutionFile

# Files to update (loaded from config)
$VersionFiles = $Config.files.versionReplacement
$DateFiles = $Config.files.dateReplacement

# --- Helper Functions ---

function Get-MSBuildPath {
    $paths = @(
        "C:\Program Files\Microsoft Visual Studio\2026\Professional\MSBuild\Current\Bin\MSBuild.exe",
        "C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe"
    )

    foreach ($path in $paths) {
        if (Test-Path $path) {
            return $path
        }
    }

    $vswhere = "${env:ProgramFiles(x86)}\Microsoft Visual Studio\Installer\vswhere.exe"
    if (Test-Path $vswhere) {
        $foundPath = & $vswhere -latest -products * -requires Microsoft.Component.MSBuild -find MSBuild\**\Bin\MSBuild.exe -prerelease
        if ($foundPath -and (Test-Path $foundPath)) {
             if (($foundPath -like "*2026*") -or ($foundPath -like "*\18\*")) {
                return $foundPath
             }
        }
    }

    throw "MSBuild.exe for Visual Studio 2026 Professional not found."
}

function Update-FileContent {
    param ($FilePath, $Version, $Date, $Config)

    $fullPath = Join-Path $PSScriptRoot $FilePath
    if (-not (Test-Path $fullPath)) {
        Write-Warning "File not found: $FilePath"
        return $null
    }

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

Write-Host "============================================================" -ForegroundColor Cyan
Write-Host "  DynamicsCrm.DevKit DEBUG Build (for AI Agent sessions)" -ForegroundColor Cyan
Write-Host "  NO PFX signing required - DEBUG mode only" -ForegroundColor Cyan
Write-Host "============================================================" -ForegroundColor Cyan

try {
    # 1. Determine Build Date
    if ([string]::IsNullOrWhiteSpace($BuildDate)) {
        $BuildDate = Get-Date -Format "dd.MM.yyyy HH:mm:ss"
    }

    Write-Host "Version: $Version" -ForegroundColor Cyan
    Write-Host "Date:    $BuildDate" -ForegroundColor Cyan
    Write-Host "Mode:    DEBUG (no PFX required)" -ForegroundColor Yellow

    # 2. Update Placeholders
    Write-Host "`nUpdating placeholders..." -ForegroundColor Yellow
    $backups = @()

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
        "/v:q"
    )

    & $msbuild $restoreArgs
    if ($LASTEXITCODE -ne 0) { throw "NuGet restore failed with exit code $LASTEXITCODE" }
    Write-Host "Restore Success." -ForegroundColor Green

    # 4. Build Solution in DEBUG mode
    Write-Host "`nBuilding Solution in DEBUG mode..." -ForegroundColor Yellow

    $buildArgs = @(
        "$SolutionFile",
        "/t:Build",
        "/p:Configuration=Debug",  # <-- DEBUG mode, no PFX signing
        "/nologo",
        "/v:m"
    )

    & $msbuild $buildArgs
    if ($LASTEXITCODE -ne 0) { throw "Build failed with exit code $LASTEXITCODE" }
    Write-Host "Build Success (DEBUG mode)." -ForegroundColor Green

    # 5. Create NuGet Packages
    Write-Host "`nCreating NuGet Packages..." -ForegroundColor Yellow

    $nugetExe = Join-Path $PSScriptRoot "DynamicsCrm.DevKit.Analyzers\Nuget\nuget.exe"
    if (-not (Test-Path $nugetExe)) {
        Write-Host "NuGet.exe not found. Downloading..." -ForegroundColor Yellow
        $nugetDir = Split-Path $nugetExe -Parent
        if (-not (Test-Path $nugetDir)) { New-Item -Path $nugetDir -ItemType Directory -Force | Out-Null }
        Invoke-WebRequest -Uri "https://dist.nuget.org/win-x86-commandline/latest/nuget.exe" -OutFile $nugetExe
        Write-Host "NuGet.exe downloaded successfully!" -ForegroundColor Green
    }

    # Create Published folder for DEBUG output
    $PublishedRoot = Join-Path $PSScriptRoot $Config.buildConfig.publishedRoot
    $publishDir = Join-Path $PublishedRoot "$Version-Debug"
    if (Test-Path $publishDir) { Remove-Item $publishDir -Recurse -Force }
    New-Item -Path $publishDir -ItemType Directory -Force | Out-Null

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

    # 6. Copy VSIX (DEBUG mode)
    Write-Host "`nCopying VSIX (DEBUG)..." -ForegroundColor Yellow
    $vsixSource = Join-Path $PSScriptRoot "DynamicsCrm.DevKit\bin\Debug\DynamicsCrm.DevKit.vsix"
    if (Test-Path $vsixSource) {
        $vsixDest = Join-Path $publishDir "DynamicsCrm.DevKit.$Version-Debug.vsix"
        Copy-Item $vsixSource $vsixDest -Force
        Write-Host "Copied VSIX to $vsixDest" -ForegroundColor Green
    } else {
        Write-Warning "VSIX file not found at $vsixSource (expected in DEBUG mode)"
    }

    Write-Host "`n============================================================" -ForegroundColor Green
    Write-Host "  DEBUG build completed successfully!" -ForegroundColor Green
    Write-Host "  Output folder: $publishDir" -ForegroundColor Cyan
    Write-Host "  Note: This is NOT for production release." -ForegroundColor Yellow
    Write-Host "  For production, use Release-DynamicsCrm-DevKit.ps1" -ForegroundColor Yellow
    Write-Host "============================================================" -ForegroundColor Green

}
catch {
    Write-Error $_.Exception.Message
    exit 1
}
finally {
    # 5. Revert Placeholders
    if ($backups.Count -gt 0) {
        Write-Host "`nReverting placeholders..." -ForegroundColor Yellow
        Restore-Files -Backups $backups
    }
}
