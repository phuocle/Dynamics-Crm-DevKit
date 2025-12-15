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
# HARDCODED VERSION - same as Release script
$Version = "4.00.00.00"

$SolutionFile = "$PSScriptRoot\DynamicsCrm.DevKit.AllInOne.slnx"

# Files to update (same as Release script)
$VersionFiles = @(
    "DynamicsCrm.DevKit.Shared\Const.cs",
    "DynamicsCrm.DevKit.Cli\docs\README.md",
    "DynamicsCrm.DevKit.Analyzers\docs\README.md",
    "DynamicsCrm.DevKit\source.extension.cs",
    "ProjectTemplates\CSharp\05.PackageProjectTemplate\ReadMe.md",
    "ProjectTemplates\CSharp\12.ReportProjectTemplate\ReadMe.md"
)

$DateFiles = @(
    "DynamicsCrm.DevKit.Cli\docs\README.md",
    "DynamicsCrm.DevKit.Analyzers\docs\README.md",
    "DynamicsCrm.DevKit.Shared\Const.cs",
    "DynamicsCrm.DevKit\source.extension.vsixmanifest",
    "DynamicsCrm.DevKit\VSPackage.resx",
    "DynamicsCrm.DevKit\source.extension.cs",
    "ProjectTemplates\CSharp\05.PackageProjectTemplate\ReadMe.md",
    "ProjectTemplates\CSharp\12.ReportProjectTemplate\ReadMe.md"
)

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
    param ($FilePath, $Version, $Date)

    $fullPath = Join-Path $PSScriptRoot $FilePath
    if (-not (Test-Path $fullPath)) {
        Write-Warning "File not found: $FilePath"
        return $null
    }

    $content = [System.IO.File]::ReadAllText($fullPath, [System.Text.Encoding]::UTF8)
    $originalContent = $content

    if ($Version) {
        $content = $content -replace 'x\.xx\.xx\.xx', $Version
    }
    if ($Date) {
        $content = $content -replace 'xxxx\.yy\.zz HH\.mm\.ss', $Date
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

        $backup = Update-FileContent -FilePath $file -Version $v -Date $d
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

    Write-Host "`n============================================================" -ForegroundColor Green
    Write-Host "  DEBUG build completed successfully!" -ForegroundColor Green
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
