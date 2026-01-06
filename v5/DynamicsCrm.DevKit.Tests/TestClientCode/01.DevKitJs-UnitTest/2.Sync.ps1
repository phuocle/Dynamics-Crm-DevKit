# 2.Sync.ps1
# Syncs devkit.js and devkit.d.ts from Source of Truth (v5) according to ClientCode.md
#
# Source of Truth files (from ClientCode.md):
#   DynamicsCrm.DevKit.Shared\Resources\js\devkit.js --> lib\devkit.js (converted to devkit.mjs)
#   DynamicsCrm.DevKit.Shared\Resources\js\devkit.d.ts --> entities\devkit.d.ts

Write-Host "=== Syncing DevKit files from Source of Truth ===" -ForegroundColor Cyan

$scriptDir = $PSScriptRoot
$v5Root = (Get-Item $scriptDir).Parent.Parent.Parent.FullName  # Navigate up to v5 folder

# Source files (Source of Truth) - now in js/ subfolder
$sourceDevkitJs = Join-Path $v5Root "DynamicsCrm.DevKit.Shared\Resources\js\devkit.js"
$sourceDevkitDts = Join-Path $v5Root "DynamicsCrm.DevKit.Shared\Resources\js\devkit.d.ts"

# Destination files
$destDevkitMjs = Join-Path $scriptDir "lib\devkit.mjs"
$destDevkitDts = Join-Path $scriptDir "entities\devkit.d.ts"

Write-Host "v5 Root: $v5Root" -ForegroundColor Gray

# === Sync devkit.js --> devkit.mjs ===
Write-Host ""
Write-Host "1. Syncing devkit.js --> devkit.mjs" -ForegroundColor Yellow

if (-not (Test-Path $sourceDevkitJs)) {
    Write-Host "   Error: Source file not found: $sourceDevkitJs" -ForegroundColor Red
    exit 1
}

# Ensure lib folder exists
$libFolder = Join-Path $scriptDir "lib"
if (-not (Test-Path $libFolder)) {
    New-Item -ItemType Directory -Path $libFolder | Out-Null
    Write-Host "   Created lib folder" -ForegroundColor Gray
}

# Read source content and add ES module export
$content = Get-Content -Path $sourceDevkitJs -Raw
$exportLine = "`nexport { devKit, OptionSet };"
$newContent = $content + $exportLine

Set-Content -Path $destDevkitMjs -Value $newContent -NoNewline
Write-Host "   Synced: devkit.js --> lib\devkit.mjs" -ForegroundColor Green

# === Sync devkit.d.ts ===
Write-Host ""
Write-Host "2. Syncing devkit.d.ts" -ForegroundColor Yellow

if (-not (Test-Path $sourceDevkitDts)) {
    Write-Host "   Error: Source file not found: $sourceDevkitDts" -ForegroundColor Red
    exit 1
}

# Ensure entities folder exists
$entitiesFolder = Join-Path $scriptDir "entities"
if (-not (Test-Path $entitiesFolder)) {
    New-Item -ItemType Directory -Path $entitiesFolder | Out-Null
    Write-Host "   Created entities folder" -ForegroundColor Gray
}

Copy-Item -Path $sourceDevkitDts -Destination $destDevkitDts -Force
Write-Host "   Synced: devkit.d.ts --> entities\devkit.d.ts" -ForegroundColor Green

Write-Host ""
Write-Host "=== Sync completed ===" -ForegroundColor Cyan
Write-Host "Source of Truth: ClientCode.md" -ForegroundColor Gray
