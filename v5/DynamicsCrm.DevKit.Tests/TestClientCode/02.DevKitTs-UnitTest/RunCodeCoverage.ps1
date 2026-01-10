# 3.RunCodeCoverage.ps1
# Installs dependencies, runs Jest code coverage, and opens the HTML report
# Source of Truth: ClientCode.md

Write-Host "=== Running Code Coverage ===" -ForegroundColor Cyan

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

    # Check if node_modules exists, if not run npm install
    if (-not (Test-Path "node_modules")) {
        Write-Host ""
        Write-Host "Installing npm packages..." -ForegroundColor Yellow
        npm install
        if ($LASTEXITCODE -ne 0) {
            Write-Host "npm install failed!" -ForegroundColor Red
            exit 1
        }
        Write-Host "npm packages installed successfully" -ForegroundColor Green
    } else {
        Write-Host "node_modules exists, skipping npm install" -ForegroundColor Gray
    }

    # Run coverage
    Write-Host ""
    Write-Host "Running npm run devkit-test (coverage)..." -ForegroundColor Yellow
    npm run devkit-test
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Coverage completed successfully" -ForegroundColor Green
    } else {
        Write-Host "Coverage completed with test failures" -ForegroundColor Yellow
    }
    
    # Open the HTML report
    $reportPath = Join-Path $scriptDir "coverage\lcov-report\index.html"
    
    if (Test-Path $reportPath) {
        Write-Host ""
        Write-Host "Opening coverage report: $reportPath" -ForegroundColor Cyan
        Start-Process $reportPath
    } else {
        Write-Host "Coverage report not found at: $reportPath" -ForegroundColor Red
        # Try alternate path
        $altReportPath = Join-Path $scriptDir "coverage\index.html"
        if (Test-Path $altReportPath) {
            Write-Host "Opening index report instead: $altReportPath" -ForegroundColor Yellow
            Start-Process $altReportPath
        }
    }
}
finally {
    Pop-Location
}

Write-Host ""
Write-Host "=== Done ===" -ForegroundColor Green
