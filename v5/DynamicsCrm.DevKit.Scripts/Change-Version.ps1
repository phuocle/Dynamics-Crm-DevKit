<#
.SYNOPSIS
    Change the stable DynamicsCrm.DevKit source version.

.DESCRIPTION
    This is a manual migration script. Build scripts do not call it.

    It replaces the current version from DevKit.ReleaseConfig.json with the new
    version in tracked text files, then updates DevKit.ReleaseConfig.json.

.PARAMETER NewVersion
    Required. Four-part version, for example 4.44.44.44.

.PARAMETER OldVersion
    Optional. Defaults to DevKit.ReleaseConfig.json -> version.

.PARAMETER DryRun
    Lists files that would be updated without writing changes.

.PARAMETER Force
    Allows running when the git working tree is dirty.

.EXAMPLE
    .\Change-Version.ps1 -NewVersion 4.44.44.44 -DryRun
    .\Change-Version.ps1 -NewVersion 4.44.44.44
#>
param (
    [Parameter(Mandatory = $true)]
    [string]$NewVersion,
    [string]$OldVersion,
    [switch]$DryRun,
    [switch]$Force
)

$ErrorActionPreference = "Stop"

$ProjectRoot = (Resolve-Path "$PSScriptRoot\..").Path
$ConfigFile = Join-Path $PSScriptRoot "DevKit.ReleaseConfig.json"
if (-not (Test-Path $ConfigFile)) {
    throw "Configuration file not found: $ConfigFile"
}

function Assert-VersionFormat {
    param ($Version, $Name)

    if ($Version -notmatch '^\d+\.\d+\.\d+\.\d+$') {
        throw "$Name must be a four-part numeric version, for example 4.44.44.44. Actual: $Version"
    }
}

function Get-TextEncoding {
    param ($Path)

    $bytes = [System.IO.File]::ReadAllBytes($Path)
    if ($bytes.Length -ge 3 -and $bytes[0] -eq 0xEF -and $bytes[1] -eq 0xBB -and $bytes[2] -eq 0xBF) {
        return New-Object System.Text.UTF8Encoding $true
    }
    if ($bytes.Length -ge 2 -and $bytes[0] -eq 0xFF -and $bytes[1] -eq 0xFE) {
        return [System.Text.Encoding]::Unicode
    }
    if ($bytes.Length -ge 2 -and $bytes[0] -eq 0xFE -and $bytes[1] -eq 0xFF) {
        return [System.Text.Encoding]::BigEndianUnicode
    }
    return New-Object System.Text.UTF8Encoding $false
}

function Write-TextPreservingEncoding {
    param ($Path, $Content, $Encoding)

    [System.IO.File]::WriteAllText($Path, $Content, $Encoding)
}

$Config = Get-Content $ConfigFile -Raw | ConvertFrom-Json
if ([string]::IsNullOrWhiteSpace($OldVersion)) {
    $OldVersion = $Config.version
}

Assert-VersionFormat -Version $OldVersion -Name "OldVersion"
Assert-VersionFormat -Version $NewVersion -Name "NewVersion"

if ($OldVersion -eq $NewVersion) {
    Write-Host "OldVersion and NewVersion are the same: $NewVersion" -ForegroundColor Yellow
    exit 0
}

if (-not $DryRun -and -not $Force) {
    $gitStatus = & git -C $ProjectRoot status --porcelain
    if (-not [string]::IsNullOrWhiteSpace(($gitStatus -join "`n"))) {
        throw "Working tree is dirty. Commit/stash current changes first, or rerun with -Force."
    }
}

$files = & git -C $ProjectRoot grep -Il --fixed-strings -- $OldVersion -- . `
    ':(exclude)**/bin/**' `
    ':(exclude)**/obj/**' `
    ':(exclude)Published/**' `
    ':(exclude)Coverage/**' `
    ':(exclude)v5/DynamicsCrm.DevKit.Scripts/DevKit.ReleaseConfig.json' `
    ':(exclude)DynamicsCrm.DevKit.Scripts/DevKit.ReleaseConfig.json' 2>$null

if ($LASTEXITCODE -eq 1) {
    $files = @()
}
elseif ($LASTEXITCODE -ne 0) {
    throw "git grep failed while searching for '$OldVersion'."
}

$files = @($files | Where-Object { -not [string]::IsNullOrWhiteSpace($_) } | Select-Object -Unique)
$configRelativePath = $ConfigFile.Substring($ProjectRoot.Length).TrimStart([char[]]@('\', '/'))
$filesToReport = @($files + $configRelativePath) | Select-Object -Unique

if ($DryRun) {
    Write-Host "Would change version from $OldVersion to $NewVersion in $($filesToReport.Count) file(s):" -ForegroundColor Cyan
    $filesToReport | ForEach-Object { Write-Host "  $_" -ForegroundColor DarkGray }
    exit 0
}

$oldPattern = [regex]::Escape($OldVersion)
foreach ($file in $files) {
    $fullPath = Join-Path $ProjectRoot $file
    if (-not (Test-Path $fullPath)) {
        Write-Warning "File not found: $file"
        continue
    }

    $encoding = Get-TextEncoding -Path $fullPath
    $content = [System.IO.File]::ReadAllText($fullPath, $encoding)
    $newContent = $content -replace $oldPattern, $NewVersion
    if ($newContent -ne $content) {
        Write-TextPreservingEncoding -Path $fullPath -Content $newContent -Encoding $encoding
        Write-Host "Updated $file" -ForegroundColor DarkGray
    }
}

$Config.version = $NewVersion
$configJson = $Config | ConvertTo-Json -Depth 20
$configEncoding = Get-TextEncoding -Path $ConfigFile
Write-TextPreservingEncoding -Path $ConfigFile -Content ($configJson + [Environment]::NewLine) -Encoding $configEncoding
Write-Host "Updated $configRelativePath" -ForegroundColor DarkGray

Write-Host "Version changed from $OldVersion to $NewVersion." -ForegroundColor Green
