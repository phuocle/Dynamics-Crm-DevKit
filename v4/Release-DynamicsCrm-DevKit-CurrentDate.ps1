<#
.SYNOPSIS
    Wrapper script to run Release-DynamicsCrm-DevKit.ps1 with current date.
#>

$currentDate = Get-Date -Format "yyyy.MM.dd HH.mm.ss"
& "$PSScriptRoot\Release-DynamicsCrm-DevKit.ps1" -BuildDate $currentDate
