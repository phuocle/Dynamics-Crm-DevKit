# Clean all generated files in TestClientCode folders
# Run this script to restore folders to fresh checkout state

$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "=============================================" -ForegroundColor Cyan
Write-Host "  CLEANING TestClientCode Folders" -ForegroundColor Cyan
Write-Host "=============================================" -ForegroundColor Cyan
Write-Host ""

$rootDir = $PSScriptRoot

# Folders to clean
$foldersToClean = @(
    "01.DevKitJs-UnitTest",
    "02.DevKitTs-UnitTest",
    "03.DevKitJs-AICode",
    "04.DevKitTs-AICode",
    "05.DevKitJs-Vsix",
    "06.DevKitTs-Vsix"
)

# Common folders/files to delete
$itemsToDelete = @(
    "node_modules",
    "coverage",
    "build",
    ".vs",
    "bin",
    "obj",
    "Release",
    "Debug",
    "packages",
    "package-lock.json"
)

$totalDeleted = 0

foreach ($folder in $foldersToClean) {
    $folderPath = Join-Path $rootDir $folder
    
    if (-not (Test-Path $folderPath)) {
        Write-Host "  SKIP: $folder (not found)" -ForegroundColor Yellow
        continue
    }
    
    Write-Host "Cleaning: $folder" -ForegroundColor White
    
    foreach ($item in $itemsToDelete) {
        # Find all matching items recursively
        $matches = Get-ChildItem -Path $folderPath -Recurse -Force -ErrorAction SilentlyContinue | 
            Where-Object { $_.Name -eq $item }
        
        foreach ($match in $matches) {
            try {
                if ($match.PSIsContainer) {
                    # Use cmd /c rmdir for better long path support
                    cmd /c "rmdir /s /q ""$($match.FullName)"""
                    if (Test-Path $match.FullName) {
                         Write-Host "  Retrying delete with Remove-Item: $($match.FullName)" -ForegroundColor Yellow
                         Remove-Item -Path $match.FullName -Recurse -Force -ErrorAction Stop
                    }
                    Write-Host "  Deleted folder: $($match.FullName.Replace($rootDir, '.'))" -ForegroundColor Green
                } else {
                    Remove-Item -Path $match.FullName -Force -ErrorAction Stop
                    Write-Host "  Deleted file: $($match.FullName.Replace($rootDir, '.'))" -ForegroundColor Green
                }
                $totalDeleted++
            } catch {
                Write-Host "  Failed to delete: $($match.FullName)" -ForegroundColor Red
            }
        }
    }
}

Write-Host ""
Write-Host "=============================================" -ForegroundColor Cyan
Write-Host "  CLEAN COMPLETE: $totalDeleted items deleted" -ForegroundColor Cyan
Write-Host "=============================================" -ForegroundColor Cyan
Write-Host ""
