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

$cliProcess = Get-Process -Name "DynamicsCrm.DevKit.Cli" -ErrorAction SilentlyContinue
if ($cliProcess) {
    Write-Host "Killing running CLI process (MCP server)..." -ForegroundColor Yellow
    $cliProcess | Stop-Process -Force -ErrorAction SilentlyContinue
    Start-Sleep -Milliseconds 500
    Write-Host "CLI process killed." -ForegroundColor Green
}

& "$PSScriptRoot\Release-DynamicsCrm-DevKit-CurrentDate.ps1" -Configuration Debug

if ($LASTEXITCODE -ne 0) {
    Write-Error "Deployment failed with exit code $LASTEXITCODE"
    exit $LASTEXITCODE
}
