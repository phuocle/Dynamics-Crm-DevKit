# CopyDevKitJs.ps1
# Copies devkit.js from framework source, renames to .mjs, and adds ES module export

Write-Host "=== Copying DevKit.js ===" -ForegroundColor Cyan

$scriptDir = $PSScriptRoot
$sourceFile = "D:\github\Dynamics-Crm-DevKit\v4\DynamicsCrm.DevKit.Shared\Resources\devkit.js"
$destFile = Join-Path $scriptDir "lib\devkit.mjs"

# Check if source file exists
if (-not (Test-Path $sourceFile)) {
    Write-Host "Error: Source file not found: $sourceFile" -ForegroundColor Red
    exit 1
}

# Ensure lib folder exists
$libFolder = Join-Path $scriptDir "lib"
if (-not (Test-Path $libFolder)) {
    New-Item -ItemType Directory -Path $libFolder | Out-Null
    Write-Host "Created lib folder" -ForegroundColor Yellow
}

# Read source content
Write-Host "Reading from: $sourceFile" -ForegroundColor Gray
$content = Get-Content -Path $sourceFile -Raw

# Add ES module export at the end
$exportLine = "`nexport { devKit, OptionSet };"
$newContent = $content + $exportLine

# Write to destination
Write-Host "Writing to: $destFile" -ForegroundColor Gray
Set-Content -Path $destFile -Value $newContent -NoNewline

Write-Host ""
Write-Host "=== DevKit.js copied and converted to ES module ===" -ForegroundColor Green
Write-Host "Source: $sourceFile" -ForegroundColor Gray
Write-Host "Destination: $destFile" -ForegroundColor Gray
