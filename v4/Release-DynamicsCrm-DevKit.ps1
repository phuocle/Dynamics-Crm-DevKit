<#
.SYNOPSIS
    DynamicsCrm.DevKit Release Build Script (v2)

.DESCRIPTION
    Builds the DynamicsCrm.DevKit solution, creates NuGet packages, and publishes the VSIX.
    Updates version and date placeholders in source files before building.

.PARAMETER BuildDate
    Optional. The build date string to use. Format: "yyyy.MM.dd HH.mm.ss".
    If not provided, defaults to "CurrentYear.12.12 23.59.59".

.EXAMPLE
    .\Release-DynamicsCrm-DevKit.ps1
    .\Release-DynamicsCrm-DevKit.ps1 -BuildDate "2023.11.22 10.00.00"
#>
param (
    [string]$BuildDate
)

$ErrorActionPreference = "Stop"

# --- Configuration ---
$VersionFile = "$PSScriptRoot\version.txt"
$SolutionFile = "$PSScriptRoot\DynamicsCrm.DevKit.AllInOne.sln"
$PublishedRoot = "$PSScriptRoot\Published"

# Files to update
$VersionFiles = @(
    "DynamicsCrm.DevKit.Shared\Const.cs",
    "DynamicsCrm.DevKit.Cli\docs\README.md",
    "DynamicsCrm.DevKit\source.extension.cs",
    "ProjectTemplates\CSharp\05.PackageProjectTemplate\ReadMe.md",
    "ProjectTemplates\CSharp\12.ReportProjectTemplate\ReadMe.md"
)

$DateFiles = @(
    "DynamicsCrm.DevKit.Cli\docs\README.md",
    "DynamicsCrm.DevKit.Shared\Const.cs",
    "DynamicsCrm.DevKit\source.extension.vsixmanifest",
    "DynamicsCrm.DevKit\VSPackage.resx",
    "DynamicsCrm.DevKit\source.extension.cs",
    "ProjectTemplates\CSharp\05.PackageProjectTemplate\ReadMe.md",
    "ProjectTemplates\CSharp\12.ReportProjectTemplate\ReadMe.md"
)

# --- Helper Functions ---

function Get-MSBuildPath {
    # Try vswhere if available
    $vswhere = "${env:ProgramFiles(x86)}\Microsoft Visual Studio\Installer\vswhere.exe"
    if (Test-Path $vswhere) {
        $path = & $vswhere -latest -products * -requires Microsoft.Component.MSBuild -find MSBuild\**\Bin\MSBuild.exe
        if ($path -and (Test-Path $path)) {
            return $path
        }
    }

    # Fallback to common paths
    $paths = @(
        "C:\Program Files\Microsoft Visual Studio\2022\Enterprise\MSBuild\Current\Bin\MSBuild.exe",
        "C:\Program Files\Microsoft Visual Studio\2022\Professional\MSBuild\Current\Bin\MSBuild.exe",
        "C:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Current\Bin\MSBuild.exe"
    )
    foreach ($p in $paths) {
        if (Test-Path $p) { return $p }
    }
    throw "MSBuild.exe not found. Please install Visual Studio 2022 with MSBuild."
}

function Update-FileContent {
    param ($FilePath, $Version, $Date)

    $fullPath = Join-Path $PSScriptRoot $FilePath
    if (-not (Test-Path $fullPath)) {
        Write-Warning "File not found: $FilePath"
        return $null
    }

    # Use .NET to read/write to avoid PowerShell adding newlines
    $content = [System.IO.File]::ReadAllText($fullPath, [System.Text.Encoding]::UTF8)
    $originalContent = $content

    if ($Version) {
        $content = $content -replace 'x\.xx\.xx\.xx', $Version
    }
    if ($Date) {
        $content = $content -replace 'xxxx\.yy\.zz HH\.mm\.ss', $Date
    }

    if ($content -ne $originalContent) {
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
    # 1. Determine Version and Date
    if (-not (Test-Path $VersionFile)) { throw "version.txt not found." }
    $Version = (Get-Content $VersionFile -Raw).Trim()

    if ([string]::IsNullOrWhiteSpace($BuildDate)) {
        $year = (Get-Date).Year
        $BuildDate = "$year.12.12 23.59.59"
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

        $backup = Update-FileContent -FilePath $file -Version $v -Date $d
        if ($backup) { $backups += $backup }
    }

    # 3. Build Solution
    Write-Host "`nBuilding Solution..." -ForegroundColor Yellow
    $msbuild = Get-MSBuildPath
    Write-Host "Using MSBuild: $msbuild" -ForegroundColor DarkGray

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
