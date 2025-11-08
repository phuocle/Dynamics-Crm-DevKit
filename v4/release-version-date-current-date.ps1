<#
.SYNOPSIS
    DynamicsCrm.DevKit Release Build Script - Current Date Version

.DESCRIPTION
    This is a wrapper script that calls release-version-date.ps1 with UseCurrentDate=$true.
    This ensures the build uses the current date/time instead of reading from date.txt.

.EXAMPLE
    .\release-version-date-current-date.ps1

.NOTES
    Author: PhuocLe
#>

# Call the main script with UseCurrentDate=$true
& "$PSScriptRoot\release-version-date.ps1" -UseCurrentDate $true
