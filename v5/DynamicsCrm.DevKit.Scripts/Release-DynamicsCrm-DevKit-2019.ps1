<#
.SYNOPSIS
    Builds and publishes the DynamicsCrm.DevKit.2019 lite VSIX.

.DESCRIPTION
    This script is intentionally hardcoded for the Visual Studio 2019 report
    upload VSIX. Version and build date are kept fixed for this release line.
#>
param (
    [string]$Configuration = "Release",
    [switch]$Clean
)

$ErrorActionPreference = "Stop"

$ProjectRoot = (Resolve-Path "$PSScriptRoot\..").Path
$Version = "4.44.44.44"
$BuildDate = "31.12.2026 23.59.59"
$PublishedRoot = Join-Path $ProjectRoot "Published"
$PublishDir = Join-Path $PublishedRoot $Version
$SolutionFile = Join-Path $ProjectRoot "DynamicsCrm.DevKit.2019.sln"
$VsixSource = Join-Path $ProjectRoot "DynamicsCrm.DevKit.2019\bin\$Configuration\DynamicsCrm.DevKit.2019.vsix"
$VsixDest = Join-Path $PublishDir "DynamicsCrm.DevKit.2019.$Version.vsix"

function Get-MSBuild2019Path {
    $paths = @(
        "C:\Program Files (x86)\Microsoft Visual Studio\2019\Professional\MSBuild\Current\Bin\MSBuild.exe",
        "C:\Program Files (x86)\Microsoft Visual Studio\2019\Enterprise\MSBuild\Current\Bin\MSBuild.exe",
        "C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\MSBuild\Current\Bin\MSBuild.exe"
    )

    foreach ($path in $paths) {
        if (Test-Path $path) {
            return $path
        }
    }

    $vswhere = "${env:ProgramFiles(x86)}\Microsoft Visual Studio\Installer\vswhere.exe"
    if (Test-Path $vswhere) {
        $foundPath = & $vswhere -version "[16.0,17.0)" -latest -requires Microsoft.Component.MSBuild -find "MSBuild\**\Bin\MSBuild.exe" | Select-Object -First 1
        if ($foundPath -and (Test-Path $foundPath)) {
            return $foundPath
        }
    }

    throw "MSBuild.exe for Visual Studio 2019 not found."
}

Write-Host "DynamicsCrm.DevKit.2019 Release" -ForegroundColor Cyan
Write-Host "Version:       $Version" -ForegroundColor Cyan
Write-Host "Build Date:    $BuildDate" -ForegroundColor Cyan
Write-Host "Configuration: $Configuration" -ForegroundColor Cyan
Write-Host "Clean:         $Clean" -ForegroundColor Cyan

if (-not (Test-Path $SolutionFile)) {
    throw "Solution file not found: $SolutionFile"
}

$msbuild = Get-MSBuild2019Path
Write-Host "Using MSBuild: $msbuild" -ForegroundColor DarkGray

$target = if ($Clean) { "Rebuild" } else { "Build" }
$buildArgs = @(
    $SolutionFile,
    "/t:$target",
    "/p:Configuration=$Configuration",
    "/p:DeployExtension=false",
    "/nologo",
    "/v:m"
)

Write-Host "`nBuilding VSIX 2019..." -ForegroundColor Yellow
New-Item -Path $PublishDir -ItemType Directory -Force | Out-Null
if (Test-Path $VsixDest) {
    Remove-Item -LiteralPath $VsixDest -Force
}
& $msbuild $buildArgs
if ($LASTEXITCODE -ne 0) {
    throw "DynamicsCrm.DevKit.2019 build failed with exit code $LASTEXITCODE"
}

if (-not (Test-Path $VsixSource)) {
    throw "VSIX file not found: $VsixSource"
}

Copy-Item -LiteralPath $VsixSource -Destination $VsixDest -Force

Write-Host "`nCopied VSIX to $VsixDest" -ForegroundColor Green
Write-Host "Release completed successfully." -ForegroundColor Green
