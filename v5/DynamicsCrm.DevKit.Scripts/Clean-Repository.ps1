<#
.SYNOPSIS
    Clean all build artifacts from DynamicsCrm.DevKit repository

.DESCRIPTION
    This script removes all build artifacts, VS cache, node_modules, and temporary files
    to reset the repo to a "fresh checkout" state.

.PARAMETER DryRun
    If specified, only shows what would be deleted without actually deleting.

.PARAMETER IncludePublished
    If specified, also deletes .nupkg and .vsix files in the Published folder.

.EXAMPLE
    .\Clean-Repository.ps1
    # Standard clean - removes all build artifacts

.EXAMPLE
    .\Clean-Repository.ps1 -DryRun
    # Preview mode - shows what would be deleted

.EXAMPLE
    .\Clean-Repository.ps1 -IncludePublished
    # Also clean Published folder packages
#>

param(
    [switch]$DryRun,
    [switch]$IncludePublished
)

$ErrorActionPreference = 'SilentlyContinue'

Write-Host ""
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host "  DynamicsCrm.DevKit - Clean All Build Artifacts" -ForegroundColor Cyan
Write-Host "  Reset the repo to a fresh checkout state" -ForegroundColor Cyan
if ($DryRun) {
    Write-Host "  [DRY RUN MODE - No files will be deleted]" -ForegroundColor Yellow
}
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host ""

$ProjectRoot = (Resolve-Path "$PSScriptRoot\..").Path
$startTime = Get-Date

# Folders to delete (order matters for nested folders)
$foldersToDelete = @(
    'node_modules',      # NPM packages (often largest)
    'bin',               # Build output
    'obj',               # Build intermediate
    'packages',          # NuGet packages (old style)
    '.vs',               # Visual Studio cache
    'Release',           # Release builds
    'Debug',             # Debug builds (if standalone)
    'TestResults',       # Test output
    'CoverageReport',    # Coverage HTML reports
    'dist',              # TypeScript/Webpack output
    '.nuget'             # Local NuGet cache
)

# Files to delete
$filesToDelete = @(
    '*.user',            # VS user settings
    '*.suo',             # VS solution user options
    '*.log',             # Log files
    'coverage.cobertura.xml',  # Coverage XML
    '*.coverage'         # VS coverage files
)

# Track statistics
$totalFoldersDeleted = 0
$totalFilesDeleted = 0
$totalSizeFreed = 0

function Get-FolderSize {
    param([string]$Path)
    try {
        $size = (Get-ChildItem -Path $Path -Recurse -Force -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum).Sum
        return [math]::Round($size / 1MB, 2)
    } catch {
        return 0
    }
}

function Format-Size {
    param([double]$SizeMB)
    if ($SizeMB -ge 1024) {
        return "{0:N2} GB" -f ($SizeMB / 1024)
    } else {
        return "{0:N2} MB" -f $SizeMB
    }
}

# ============================================================
# DELETE FOLDERS
# ============================================================
Write-Host "Scanning for folders to delete..." -ForegroundColor Yellow
Write-Host ""

# Run multiple passes until no folders remain (handles nested deletions)
do {
    $deletedThisPass = 0
    foreach ($folder in $foldersToDelete) {
        $found = Get-ChildItem -Path $ProjectRoot -Directory -Recurse -Filter $folder -ErrorAction SilentlyContinue
        foreach ($item in $found) {
            $sizeMB = Get-FolderSize -Path $item.FullName
            $totalSizeFreed += $sizeMB
            
            if ($DryRun) {
                Write-Host "  [WOULD DELETE] $($item.FullName) ($(Format-Size $sizeMB))" -ForegroundColor DarkGray
            } else {
                Write-Host "  Removing: $($item.FullName) ($(Format-Size $sizeMB))" -ForegroundColor DarkGray
                Remove-Item $item.FullName -Recurse -Force -ErrorAction SilentlyContinue
            }
            $deletedThisPass++
            $totalFoldersDeleted++
        }
    }
} while ($deletedThisPass -gt 0)

# ============================================================
# DELETE EXTRACTED NUPKG FOLDERS
# ============================================================
Write-Host ""
Write-Host "Scanning Published folder for extracted packages..." -ForegroundColor Yellow

$extractedFolders = Get-ChildItem -Path "$ProjectRoot\Published" -Directory -Recurse -Filter "*_extracted*" -ErrorAction SilentlyContinue
foreach ($item in $extractedFolders) {
    $sizeMB = Get-FolderSize -Path $item.FullName
    $totalSizeFreed += $sizeMB
    
    if ($DryRun) {
        Write-Host "  [WOULD DELETE] $($item.FullName)" -ForegroundColor DarkGray
    } else {
        Write-Host "  Removing: $($item.FullName)" -ForegroundColor DarkGray
        Remove-Item $item.FullName -Recurse -Force -ErrorAction SilentlyContinue
    }
    $totalFoldersDeleted++
}

# ============================================================
# DELETE FILES
# ============================================================
Write-Host ""
Write-Host "Scanning for files to delete..." -ForegroundColor Yellow

foreach ($pattern in $filesToDelete) {
    # Use -Force for hidden files like .suo
    $found = Get-ChildItem -Path $ProjectRoot -Recurse -Filter $pattern -Force -ErrorAction SilentlyContinue
    foreach ($item in $found) {
        $sizeMB = [math]::Round($item.Length / 1MB, 4)
        $totalSizeFreed += $sizeMB
        
        if ($DryRun) {
            Write-Host "  [WOULD DELETE] $($item.FullName)" -ForegroundColor DarkGray
        } else {
            Write-Host "  Removing: $($item.FullName)" -ForegroundColor DarkGray
            Remove-Item $item.FullName -Force -ErrorAction SilentlyContinue
        }
        $totalFilesDeleted++
    }
}

# ============================================================
# OPTIONAL: DELETE PUBLISHED PACKAGES
# ============================================================
if ($IncludePublished) {
    Write-Host ""
    Write-Host "Cleaning Published folder (nupkg and vsix files)..." -ForegroundColor Yellow
    
    $packages = Get-ChildItem -Path "$ProjectRoot\Published" -File -Include "*.nupkg", "*.vsix" -Recurse -ErrorAction SilentlyContinue
    foreach ($item in $packages) {
        # Exclude specific version folder 4.12.34.56
        if ($item.FullName -like "*\Published\4.12.34.56\*") {
            if ($DryRun) {
                Write-Host "  [SKIPPING] $($item.FullName) (Protected Version)" -ForegroundColor Gray
            }
            continue
        }

        $sizeMB = [math]::Round($item.Length / 1MB, 2)
        $totalSizeFreed += $sizeMB
        
        if ($DryRun) {
            Write-Host "  [WOULD DELETE] $($item.FullName) ($(Format-Size $sizeMB))" -ForegroundColor DarkGray
        } else {
            Write-Host "  Removing: $($item.FullName) ($(Format-Size $sizeMB))" -ForegroundColor DarkGray
            Remove-Item $item.FullName -Force -ErrorAction SilentlyContinue
        }
        $totalFilesDeleted++
    }
}

# ============================================================
# SUMMARY
# ============================================================
$endTime = Get-Date
$duration = ($endTime - $startTime).TotalSeconds

Write-Host ""
Write-Host "============================================================" -ForegroundColor Green
if ($DryRun) {
    Write-Host "  DRY RUN COMPLETE - No files were deleted" -ForegroundColor Yellow
} else {
    Write-Host "  Clean completed!" -ForegroundColor Green
}
Write-Host "============================================================" -ForegroundColor Green
Write-Host ""
Write-Host "  Summary:" -ForegroundColor White
Write-Host "    Folders deleted:    $totalFoldersDeleted" -ForegroundColor Cyan
Write-Host "    Files deleted:      $totalFilesDeleted" -ForegroundColor Cyan
Write-Host "    Space freed:        $(Format-Size $totalSizeFreed)" -ForegroundColor Cyan
Write-Host "    Time elapsed:       $([math]::Round($duration, 2)) seconds" -ForegroundColor Cyan
Write-Host ""
Write-Host "  The repo is now in a fresh checkout state." -ForegroundColor Green
Write-Host "  Run: git status" -ForegroundColor Gray
Write-Host "  to verify no untracked changes remain." -ForegroundColor Gray
Write-Host "============================================================" -ForegroundColor Green
Write-Host ""
