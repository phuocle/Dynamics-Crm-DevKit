# RunCodeCoverage.ps1
# Runs Jest code coverage and opens the HTML report

Write-Host "=== Running Code Coverage ===" -ForegroundColor Cyan

$scriptDir = $PSScriptRoot

# Change to script directory
Push-Location $scriptDir

try {
    # Run coverage
    Write-Host "Running npm coverage..." -ForegroundColor Yellow
    npm run coverage
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Coverage completed successfully" -ForegroundColor Green
    } else {
        Write-Host "Coverage completed with test failures" -ForegroundColor Yellow
    }
    
    # Open the HTML report
    $reportPath = Join-Path $scriptDir "coverage\devkit.mjs.html"
    
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
