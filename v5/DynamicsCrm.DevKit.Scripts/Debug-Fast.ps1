<#
.SYNOPSIS
    Fast Debug Build (Debug-Fast.ps1)
    
.DESCRIPTION
    Builds ONLY the VSIX core without 28 project/item templates.
    Use this for rapid iteration during development.
    
    Templates are copied from the last full build, so you need to run 
    Debug-DynamicsCrm-DevKit.ps1 at least once first.

.EXAMPLE
    .\Debug-Fast.ps1
#>

$ErrorActionPreference = "Stop"

Write-Host "============================================================" -ForegroundColor Cyan
Write-Host "  Fast Build (VSIX Core Only - No Templates)" -ForegroundColor Cyan
Write-Host "============================================================" -ForegroundColor Cyan

$ProjectRoot = (Resolve-Path "$PSScriptRoot\..").Path
$FastSolution = Join-Path $ProjectRoot "DynamicsCrm.DevKit.Fast.slnx"

if (-not (Test-Path $FastSolution)) {
    throw "Fast solution not found: $FastSolution"
}

# Get MSBuild path
$msbuildPaths = @(
    "C:\Program Files\Microsoft Visual Studio\2026\Professional\MSBuild\Current\Bin\MSBuild.exe",
    "C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe"
)
$msbuild = $null
foreach ($path in $msbuildPaths) {
    if (Test-Path $path) {
        $msbuild = $path
        break
    }
}
if (-not $msbuild) { throw "MSBuild not found" }

Write-Host "Using MSBuild: $msbuild" -ForegroundColor DarkGray
Write-Host "Building: $FastSolution" -ForegroundColor DarkGray

$startTime = Get-Date

# Build only the fast solution (skip experimental instance deployment to avoid lock errors)
$buildArgs = @(
    "$FastSolution",
    "/t:Build",
    "/p:Configuration=Debug",
    "/p:DeployExtension=false",
    "/nologo",
    "/v:m"
)

& $msbuild $buildArgs
if ($LASTEXITCODE -ne 0) { 
    Write-Error "Build failed with exit code $LASTEXITCODE"
    exit $LASTEXITCODE 
}

$endTime = Get-Date
$duration = $endTime - $startTime

Write-Host "`n============================================================" -ForegroundColor Green
Write-Host "  Build completed in $($duration.TotalSeconds.ToString("F1")) seconds!" -ForegroundColor Green
Write-Host "============================================================" -ForegroundColor Green
Write-Host ""
Write-Host "VSIX: $ProjectRoot\DynamicsCrm.DevKit\bin\Debug\DynamicsCrm.DevKit.vsix" -ForegroundColor Cyan
Write-Host ""
Write-Host "NOTE: Templates are from last full build. Run Debug-DynamicsCrm-DevKit.ps1" -ForegroundColor Yellow
Write-Host "      if you need to update templates." -ForegroundColor Yellow
