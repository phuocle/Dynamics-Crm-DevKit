# Install.ps1
# Script to install all dependencies from a clean folder

Write-Host "=== Installing project dependencies ===" -ForegroundColor Cyan

$scriptDir = $PSScriptRoot

# Change to script directory
Push-Location $scriptDir

try {
    # Check if package.json exists
    if (-not (Test-Path "package.json")) {
        Write-Host "Error: package.json not found!" -ForegroundColor Red
        exit 1
    }

    # Check if npm is available
    $npmVersion = npm --version 2>$null
    if (-not $npmVersion) {
        Write-Host "Error: npm is not installed or not in PATH!" -ForegroundColor Red
        exit 1
    }
    Write-Host "Using npm version: $npmVersion" -ForegroundColor Gray

    # Install npm dependencies
    Write-Host ""
    Write-Host "Installing npm packages..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -eq 0) {
        Write-Host "npm packages installed successfully" -ForegroundColor Green
    } else {
        Write-Host "npm install failed!" -ForegroundColor Red
        exit 1
    }

    # Only install packages here. Tests and coverage are handled by separate scripts.
    Write-Host ""
    Write-Host "Packages installed; skipping test execution in this script." -ForegroundColor Yellow

    Write-Host ""
    Write-Host "=== Installation completed successfully ===" -ForegroundColor Cyan
}
finally {
    # Return to original directory
    Pop-Location
}
