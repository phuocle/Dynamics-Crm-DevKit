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

# Kill both assembly name and tool shim name (MCP server runs as "devkit.exe")
$cliProcess = Get-Process -Name "DynamicsCrm.DevKit.Cli" -ErrorAction SilentlyContinue
$devkitProcess = Get-Process -Name "devkit" -ErrorAction SilentlyContinue
if ($cliProcess -or $devkitProcess) {
    Write-Host "Killing running CLI/devkit processes (MCP server)..." -ForegroundColor Yellow
    if ($cliProcess) { $cliProcess | Stop-Process -Force -ErrorAction SilentlyContinue }
    if ($devkitProcess) { $devkitProcess | Stop-Process -Force -ErrorAction SilentlyContinue }
    Start-Sleep -Seconds 1
    Write-Host "CLI/devkit processes killed." -ForegroundColor Green
}

& "$PSScriptRoot\Release-DynamicsCrm-DevKit-CurrentDate.ps1" -Configuration Debug

if ($LASTEXITCODE -ne 0) {
    Write-Error "Deployment failed with exit code $LASTEXITCODE"
    exit $LASTEXITCODE
}
