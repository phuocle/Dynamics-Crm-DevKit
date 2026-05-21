<#
.SYNOPSIS
    Restore files modified by Release-DynamicsCrm-DevKit.ps1.

.DESCRIPTION
    The package build only performs build-time date replacement. This helper
    restores only the explicit dateReplacement files from DevKit.ReleaseConfig.json.

.EXAMPLE
    .\RestoreReplacedFiles.ps1
#>

$ErrorActionPreference = "Stop"

$ProjectRoot = (Resolve-Path "$PSScriptRoot\..").Path
$ConfigFile = Join-Path $PSScriptRoot "DevKit.ReleaseConfig.json"
if (-not (Test-Path $ConfigFile)) {
    throw "Configuration file not found: $ConfigFile"
}

$Config = Get-Content $ConfigFile -Raw | ConvertFrom-Json

$FilesToRestore = @(
    $Config.files.dateReplacement
) | Where-Object { -not [string]::IsNullOrWhiteSpace($_) } | Select-Object -Unique

$blockedPattern = '(^|[\\/])(DynamicsCrm\.DevKit\.Tests|DynamicsCrm\.DevKit\.UnitTests|Coverage|bin|obj|Published)([\\/]|$)'
$blockedFiles = @($FilesToRestore | Where-Object { $_ -match $blockedPattern })
if ($blockedFiles.Count -gt 0) {
    throw "Restore list contains files outside the build replacement scope:`n$($blockedFiles -join "`n")"
}

Write-Host "Restoring build-time date replacement files from git..." -ForegroundColor Yellow

$restoredCount = 0
$notModifiedCount = 0
$errorCount = 0

foreach ($file in $FilesToRestore) {
    $fullPath = Join-Path $ProjectRoot $file
    if (-not (Test-Path $fullPath)) {
        Write-Warning "File not found: $file (skipping)"
        continue
    }

    $gitStatus = git -C $ProjectRoot status --porcelain -- $file 2>$null

    if ([string]::IsNullOrWhiteSpace($gitStatus)) {
        Write-Host "  [NOT MODIFIED] $file" -ForegroundColor DarkGray
        $notModifiedCount++
        continue
    }

    try {
        git -C $ProjectRoot restore -- $file 2>$null
        if ($LASTEXITCODE -eq 0) {
            Write-Host "  [RESTORED] $file" -ForegroundColor Green
            $restoredCount++
        }
        else {
            Write-Warning "Failed to restore: $file"
            $errorCount++
        }
    }
    catch {
        Write-Warning "Error restoring $file : $_"
        $errorCount++
    }
}

Write-Host "`nSummary:" -ForegroundColor Cyan
Write-Host "  Restored:     $restoredCount" -ForegroundColor Green
Write-Host "  Not Modified: $notModifiedCount" -ForegroundColor DarkGray
if ($errorCount -gt 0) {
    Write-Host "  Errors:       $errorCount" -ForegroundColor Red
}

Write-Host "`nDone!" -ForegroundColor Green
