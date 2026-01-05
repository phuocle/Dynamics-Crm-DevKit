# 1.Clean.ps1
# Script to clean up unused files and folders to reduce disk size
# Source of Truth: ClientCode.md

Write-Host "=== Cleaning up project ===" -ForegroundColor Cyan

$foldersToDelete = @(
    ".vs",
    ".vscode",
    "node_modules",
    "coverage",
    "bin",
    "obj"
)

$filesToDelete = @(
    "package-lock.json"
)

$scriptDir = $PSScriptRoot

foreach ($folder in $foldersToDelete) {
    $folderPath = Join-Path $scriptDir $folder
    if (Test-Path $folderPath) {
        Write-Host "Deleting folder: $folder" -ForegroundColor Yellow
        Remove-Item -Path $folderPath -Recurse -Force
        Write-Host "  Deleted: $folder" -ForegroundColor Green
    } else {
        Write-Host "  Folder not found: $folder" -ForegroundColor Gray
    }
}

foreach ($file in $filesToDelete) {
    $filePath = Join-Path $scriptDir $file
    if (Test-Path $filePath) {
        Write-Host "Deleting file: $file" -ForegroundColor Yellow
        Remove-Item -Path $filePath -Force
        Write-Host "  Deleted: $file" -ForegroundColor Green
    } else {
        Write-Host "  File not found: $file" -ForegroundColor Gray
    }
}

Write-Host ""
Write-Host "=== Cleanup completed ===" -ForegroundColor Cyan
