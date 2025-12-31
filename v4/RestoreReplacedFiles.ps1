<#
.SYNOPSIS
    Restore files modified by Release-DynamicsCrm-DevKit.ps1

.DESCRIPTION
    This script restores all files that were modified by the release build script
    using git restore. Use this when the release script fails mid-way and leaves
    files in a modified state with replaced placeholders.

    File list is loaded from DevKit.ReleaseConfig.json (single source of truth).

.EXAMPLE
    .\RestoreReplacedFiles.ps1
#>

$ErrorActionPreference = "Stop"

# Load configuration from single source of truth
$ConfigFile = Join-Path $PSScriptRoot "DevKit.ReleaseConfig.json"
if (-not (Test-Path $ConfigFile)) {
    throw "Configuration file not found: $ConfigFile"
}

$Config = Get-Content $ConfigFile -Raw | ConvertFrom-Json

# Files that get modified by the release script (from config)
$FilesToRestore = $Config.files.allModified

Write-Host "Restoring modified files from git..." -ForegroundColor Yellow

$restoredCount = 0
$notModifiedCount = 0
$errorCount = 0

foreach ($file in $FilesToRestore) {
    $fullPath = Join-Path $PSScriptRoot $file

    # Check if file exists
    if (-not (Test-Path $fullPath)) {
        Write-Warning "File not found: $file (skipping)"
        continue
    }

    # Check if file is modified
    $gitStatus = git status --porcelain $file 2>$null

    if ([string]::IsNullOrWhiteSpace($gitStatus)) {
        Write-Host "  [NOT MODIFIED] $file" -ForegroundColor DarkGray
        $notModifiedCount++
    }
    else {
        try {
            git restore $file 2>$null
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
}

Write-Host "`nSummary:" -ForegroundColor Cyan
Write-Host "  Restored:     $restoredCount" -ForegroundColor Green
Write-Host "  Not Modified: $notModifiedCount" -ForegroundColor DarkGray
if ($errorCount -gt 0) {
    Write-Host "  Errors:       $errorCount" -ForegroundColor Red
}

Write-Host "`nDone!" -ForegroundColor Green
