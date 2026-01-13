<#
.SYNOPSIS
    Debug Build & Deploy (Debug-DynamicsCrm-DevKit.ps1)
    
.DESCRIPTION
    This script is a wrapper for:
    Release-DynamicsCrm-DevKit-CurrentDate.ps1 -Configuration Debug -InstallCli

    It builds the solution in Debug mode, packs the CLI, and installs/updates it locally.
    
.EXAMPLE
    .\Debug-DynamicsCrm-DevKit.ps1
#>

$ErrorActionPreference = "Stop"

Write-Host "============================================================" -ForegroundColor Cyan
Write-Host "  Debug Build & Deploy (Debug-DynamicsCrm-DevKit)" -ForegroundColor Cyan
Write-Host "============================================================" -ForegroundColor Cyan

& "$PSScriptRoot\Release-DynamicsCrm-DevKit-CurrentDate.ps1" -Configuration Debug

if ($LASTEXITCODE -ne 0) {
    Write-Error "Deployment failed with exit code $LASTEXITCODE"
    exit $LASTEXITCODE
}
