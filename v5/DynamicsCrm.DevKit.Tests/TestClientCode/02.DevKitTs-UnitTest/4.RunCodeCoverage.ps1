# RunCodeCoverage.ps1
# Runs Jest code coverage and opens the HTML report

Write-Host "=== Running Code Coverage ===" -ForegroundColor Cyan

$scriptDir = $PSScriptRoot

# Change to script directory
Push-Location $scriptDir

try {
    # Run the project's coverage script (per package.json) and fallback to npx jest
    Write-Host "Running npm run devkit-test (coverage)..." -ForegroundColor Yellow
    npm run devkit-test
    if ($LASTEXITCODE -ne 0) {
        Write-Host "npm run devkit-test failed; running fallback: npx jest --coverage" -ForegroundColor Yellow
        npx jest --coverage --coverageReporters=html --coverageDirectory coverage
    }

    if ($LASTEXITCODE -eq 0) {
        Write-Host "Coverage completed successfully" -ForegroundColor Green
    } else {
        Write-Host "Coverage completed with test failures or errors (exit code: $LASTEXITCODE)" -ForegroundColor Yellow
    }

    # Find an HTML report to open inside the coverage directory
    $coverageDir = Join-Path $scriptDir "coverage"
    if (Test-Path $coverageDir) {
        $htmlReport = Get-ChildItem -Path $coverageDir -Recurse -Filter "*.html" -ErrorAction SilentlyContinue | Select-Object -First 1
        if ($htmlReport) {
            Write-Host "";
            Write-Host "Opening coverage report: $($htmlReport.FullName)" -ForegroundColor Cyan
            Start-Process $htmlReport.FullName
        } else {
            Write-Host "No HTML report found in coverage directory: $coverageDir" -ForegroundColor Red
        }
    } else {
        Write-Host "Coverage directory not found at: $coverageDir" -ForegroundColor Red
    }
}
finally {
    Pop-Location
}

Write-Host ""
Write-Host "=== Done ===" -ForegroundColor Green
