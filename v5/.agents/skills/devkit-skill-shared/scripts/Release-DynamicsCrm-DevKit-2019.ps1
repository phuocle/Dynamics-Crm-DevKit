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

$ProjectRoot = (Resolve-Path "$PSScriptRoot\..\..\..\..").Path
$Version = "4.44.44.44"
$BuildDate = "31.12.2026 23.59.59"
$PublishedRoot = Join-Path $ProjectRoot "Published"
$PublishDir = Join-Path $PublishedRoot $Version
$SolutionFile = Join-Path $ProjectRoot "DynamicsCrm.DevKit.2019.sln"
$VsixSource = Join-Path $ProjectRoot "DynamicsCrm.DevKit.Vsix.2019\bin\$Configuration\DynamicsCrm.DevKit.2019.vsix"
$VsixDest = Join-Path $PublishDir "DynamicsCrm.DevKit.Vsix.2019.$Version.vsix"

function Get-MSBuild2019Path {
    # 1. Use vswhere to find VS 2019 installation across drives and editions
    $vswhere = "${env:ProgramFiles(x86)}\Microsoft Visual Studio\Installer\vswhere.exe"
    if (Test-Path $vswhere) {
        $foundPath = & $vswhere -version "[16.0,17.0)" -latest -requires Microsoft.Component.MSBuild -find "MSBuild\**\Bin\MSBuild.exe" | Select-Object -First 1
        if ($foundPath -and (Test-Path $foundPath)) {
            return $foundPath
        }
    }

    # 2. Check candidate editions across 32-bit and 64-bit Program Files drives
    $editions = @("Enterprise", "Professional", "Community", "BuildTools")
    $drives = @(${env:ProgramFiles(x86)}, "C:\Program Files (x86)", "D:\Program Files (x86)", "E:\Program Files (x86)") | Where-Object { $_ -and (Test-Path $_) } | Select-Object -Unique

    foreach ($drive in $drives) {
        foreach ($ed in $editions) {
            $candidate = Join-Path $drive "Microsoft Visual Studio\2019\$ed\MSBuild\Current\Bin\MSBuild.exe"
            if (Test-Path $candidate) {
                return $candidate
            }
        }
    }

    throw "MSBuild.exe for Visual Studio 2019 not found (checked vswhere and candidate editions Enterprise/Professional/Community across drives)."
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
