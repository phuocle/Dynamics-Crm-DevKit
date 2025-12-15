<#
.SYNOPSIS
    Clean all build artifacts from DynamicsCrm.DevKit repository

.DESCRIPTION
    This script removes all build artifacts, VS cache, and temporary files
    to reset the repo to a "fresh checkout" state.

.EXAMPLE
    .\Clean-Repository.ps1
#>

Write-Host "============================================================" -ForegroundColor Cyan
Write-Host "  DynamicsCrm.DevKit - Clean All Build Artifacts" -ForegroundColor Cyan
Write-Host "  This will reset the repo to a fresh checkout state" -ForegroundColor Cyan
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host ""

$foldersToDelete = @('bin', 'obj', 'packages', 'Release', '.vs', 'TestResults', 'node_modules', 'CoverageReport')

# Run multiple passes until no folders remain (handles nested deletions)
$totalDeleted = 0
do {
    $deletedThisPass = 0
    foreach ($folder in $foldersToDelete) {
        $found = Get-ChildItem -Path $PSScriptRoot -Directory -Recurse -Filter $folder -ErrorAction SilentlyContinue
        foreach ($item in $found) {
            Write-Host "  Removing: $($item.FullName)" -ForegroundColor DarkGray
            Remove-Item $item.FullName -Recurse -Force -ErrorAction SilentlyContinue
            $deletedThisPass++
        }
    }
    $totalDeleted += $deletedThisPass
} while ($deletedThisPass -gt 0)

Write-Host "Deleted $totalDeleted folders total." -ForegroundColor Yellow

Write-Host ""
Write-Host "Deleting extracted nupkg folders in Published..." -ForegroundColor Yellow
Get-ChildItem -Path "$PSScriptRoot\Published" -Directory -Recurse -Filter "*_extracted*" -ErrorAction SilentlyContinue | ForEach-Object {
    Write-Host "  Removing: $($_.FullName)" -ForegroundColor DarkGray
    Remove-Item $_.FullName -Recurse -Force -ErrorAction SilentlyContinue
}

Write-Host ""
Write-Host "Deleting *.user files..." -ForegroundColor Yellow
Get-ChildItem -Path $PSScriptRoot -Recurse -Filter "*.user" -ErrorAction SilentlyContinue | ForEach-Object {
    Write-Host "  Removing: $($_.FullName)" -ForegroundColor DarkGray
    Remove-Item $_.FullName -Force -ErrorAction SilentlyContinue
}

Write-Host ""
Write-Host "Deleting *.suo files..." -ForegroundColor Yellow
Get-ChildItem -Path $PSScriptRoot -Recurse -Filter "*.suo" -Force -ErrorAction SilentlyContinue | ForEach-Object {
    Write-Host "  Removing: $($_.FullName)" -ForegroundColor DarkGray
    Remove-Item $_.FullName -Force -ErrorAction SilentlyContinue
}

Write-Host ""
Write-Host "============================================================" -ForegroundColor Green
Write-Host "  Clean completed!" -ForegroundColor Green
Write-Host "  The repo is now in a fresh checkout state." -ForegroundColor Green
Write-Host "  Run: git status" -ForegroundColor Green
Write-Host "  to verify no untracked changes remain." -ForegroundColor Green
Write-Host "============================================================" -ForegroundColor Green
