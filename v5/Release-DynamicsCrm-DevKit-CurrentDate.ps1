<#
.SYNOPSIS
    Wrapper script to run Release-DynamicsCrm-DevKit.ps1 with CURRENT date/time.
    
.DESCRIPTION
    Use this script for TESTING releases during development.
    For official ANNUAL releases, use Release-DynamicsCrm-DevKit.ps1 (uses Dec 31).

.EXAMPLE
    .\Release-DynamicsCrm-DevKit-CurrentDate.ps1
#>

$currentDate = Get-Date -Format "dd.MM.yyyy HH:mm:ss"
Write-Host "Using current date/time: $currentDate" -ForegroundColor Cyan
& "$PSScriptRoot\Release-DynamicsCrm-DevKit.ps1" -BuildDate $currentDate
