# 2.Sync.ps1
# Syncs devkit.ts, devkit.d.ts, and build.js from Source of Truth (v5) according to ClientCode.md
#
# Source of Truth files (from ClientCode.md):
#   DynamicsCrm.DevKit.Shared\Resources\devkit.ts --> lib\devkit.ts
#   DynamicsCrm.DevKit.Shared\Resources\devkit.ts --> lib\devkit.d.ts
#   DynamicsCrm.DevKit.Shared\Resources\build.js  --> build.js

Write-Host "=== Syncing DevKit files from Source of Truth ===" -ForegroundColor Cyan

$scriptDir = $PSScriptRoot
$v5Root = (Get-Item $scriptDir).Parent.Parent.Parent.FullName  # Navigate up to v5 folder

# Source files (Source of Truth)
$sourceDevkitTs = Join-Path $v5Root "DynamicsCrm.DevKit.Shared\Resources\devkit.ts"
$sourceBuildJs = Join-Path $v5Root "DynamicsCrm.DevKit.Shared\Resources\build.js"

# Destination files
$destDevkitTs = Join-Path $scriptDir "lib\devkit.ts"
$destDevkitDts = Join-Path $scriptDir "lib\devkit.d.ts"
$destBuildJs = Join-Path $scriptDir "build.js"

Write-Host "v5 Root: $v5Root" -ForegroundColor Gray

# === Sync devkit.ts --> lib\devkit.ts ===
Write-Host ""
Write-Host "1. Syncing devkit.ts --> lib\devkit.ts" -ForegroundColor Yellow

if (-not (Test-Path $sourceDevkitTs)) {
    Write-Host "   Error: Source file not found: $sourceDevkitTs" -ForegroundColor Red
    exit 1
}

# Ensure lib folder exists
$libFolder = Join-Path $scriptDir "lib"
if (-not (Test-Path $libFolder)) {
    New-Item -ItemType Directory -Path $libFolder | Out-Null
    Write-Host "   Created lib folder" -ForegroundColor Gray
}

Copy-Item -Path $sourceDevkitTs -Destination $destDevkitTs -Force
Write-Host "   Synced: devkit.ts --> lib\devkit.ts" -ForegroundColor Green

# === Sync devkit.ts --> lib\devkit.d.ts ===
Write-Host ""
Write-Host "2. Syncing devkit.ts --> lib\devkit.d.ts" -ForegroundColor Yellow

Copy-Item -Path $sourceDevkitTs -Destination $destDevkitDts -Force
Write-Host "   Synced: devkit.ts --> lib\devkit.d.ts" -ForegroundColor Green

# === Sync build.js --> build.js ===
Write-Host ""
Write-Host "3. Syncing build.js --> build.js" -ForegroundColor Yellow

if (-not (Test-Path $sourceBuildJs)) {
    Write-Host "   Error: Source file not found: $sourceBuildJs" -ForegroundColor Red
    exit 1
}

Copy-Item -Path $sourceBuildJs -Destination $destBuildJs -Force
Write-Host "   Synced: build.js --> build.js" -ForegroundColor Green

Write-Host ""
Write-Host "=== Sync completed ===" -ForegroundColor Cyan
Write-Host "Source of Truth: ClientCode.md" -ForegroundColor Gray
