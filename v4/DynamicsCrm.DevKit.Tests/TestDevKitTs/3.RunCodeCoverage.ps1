# RunCodeCoverage.ps1
# Runs Jest code coverage and opens the HTML report

Write-Host "=== Running Code Coverage ===" -ForegroundColor Cyan

$scriptDir = $PSScriptRoot

# Change to script directory
Push-Location $scriptDir

try {
    # Decide how to run coverage: prefer npm script, fallback to npx jest
    $hasCoverageScript = $false
    $pkgPath = Join-Path $scriptDir "package.json"
    if (Test-Path $pkgPath) {
        try {
            $pkg = Get-Content -Raw -Path $pkgPath | ConvertFrom-Json
            if ($pkg.scripts -and $pkg.scripts.coverage) { $hasCoverageScript = $true }
        } catch {
            Write-Host "Warning: could not parse package.json; will attempt fallback coverage command." -ForegroundColor Yellow
        }
    }

    if ($hasCoverageScript) {
        Write-Host "Running npm run coverage..." -ForegroundColor Yellow
        npm run coverage
    } else {
        Write-Host "No 'coverage' script found in package.json; running fallback: npx jest --coverage" -ForegroundColor Yellow
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
