# Install all NPM packages in TestClientCode folders
# Run this script to prepare development environment

$ErrorActionPreference = "Continue"

Write-Host ""
Write-Host "============================================="
Write-Host "  INSTALLING NPM Packages"
Write-Host "============================================="
Write-Host ""

$rootDir = $PSScriptRoot

# Package.json locations (relative to root)
$packageLocations = @(
    "01.DevKitJs-UnitTest",
    "02.DevKitTs-UnitTest",
    "03.DevKitJs-AICode\Dev.DevKit.WebResource",
    "04.DevKitTs-AICode\Dev.DevKit.WebResourceTs",
    "05.DevKitJs-Vsix\Dev.DevKit.WebResource",
    "06.DevKitTs-Vsix\Dev.DevKit.WebResourceTs"
)

$successCount = 0
$failCount = 0

foreach ($location in $packageLocations) {
    $fullPath = Join-Path $rootDir $location
    $packageJson = Join-Path $fullPath "package.json"
    
    if (-not (Test-Path $packageJson)) {
        Write-Host "  SKIP: $location (no package.json)" -ForegroundColor Yellow
        continue
    }
    
    Write-Host ""
    Write-Host "Installing: $location" -ForegroundColor White
    
    Push-Location $fullPath
    
    # Run npm install and capture exit code
    npm install 2>&1 | Out-Null
    $exitCode = $LASTEXITCODE
    
    if ($exitCode -eq 0) {
        Write-Host "  SUCCESS" -ForegroundColor Green
        $successCount++
    }
    else {
        Write-Host "  FAILED (exit code: $exitCode)" -ForegroundColor Red
        $failCount++
    }
    
    Pop-Location
}

Write-Host ""
Write-Host "============================================="
Write-Host "  INSTALL COMPLETE"
Write-Host "  Success: $successCount | Failed: $failCount"
Write-Host "============================================="
Write-Host ""

if ($failCount -gt 0) {
    exit 1
}
