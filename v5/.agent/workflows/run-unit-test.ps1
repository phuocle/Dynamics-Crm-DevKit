$ProjectRoot = "d:\github\Dynamics-Crm-DevKit\v5"

# Ensure required global tools
$toolList = dotnet tool list --global 2>&1
if ($toolList -notmatch "dotnet-coverage") {
    Write-Host "Installing dotnet-coverage..." -ForegroundColor Yellow
    dotnet tool install --global dotnet-coverage
}
else {
    Write-Host "dotnet-coverage found" -ForegroundColor Green
}

if ($toolList -notmatch "dotnet-reportgenerator-globaltool") {
    Write-Host "Installing ReportGenerator..." -ForegroundColor Yellow
    dotnet tool install --global dotnet-reportgenerator-globaltool
}
else {
    Write-Host "ReportGenerator found" -ForegroundColor Green
}

# Build the test project
cd $ProjectRoot
Write-Host "Building unit tests project..." -ForegroundColor Cyan
dotnet build "DynamicsCrm.DevKit.UnitTests\DynamicsCrm.DevKit.UnitTests.csproj" --configuration Debug
if ($LASTEXITCODE -ne 0) { Write-Host "Build failed" -ForegroundColor Red; exit 1 }

# Run Analyzer tests (net48) with coverage
$coverageDir = "$ProjectRoot\DynamicsCrm.DevKit.UnitTests\TestResults"
if (Test-Path $coverageDir) { Remove-Item -Path $coverageDir -Recurse -Force }
New-Item -Path $coverageDir -ItemType Directory -Force | Out-Null

$coverageFileAnalyzer = "$coverageDir\analyzer.coverage"
Write-Host "Running analyzer tests (net48) with dotnet-coverage..." -ForegroundColor Cyan
dotnet-coverage collect -o "$coverageFileAnalyzer" -f coverage "dotnet test '$ProjectRoot\DynamicsCrm.DevKit.UnitTests\DynamicsCrm.DevKit.UnitTests.csproj' --framework net48 --configuration Debug --no-build --logger 'console;verbosity=normal'"
if ($LASTEXITCODE -ne 0) { Write-Host "Analyzer tests (net48) FAILED!" -ForegroundColor Red; exit 2 } else { Write-Host "Analyzer tests (net48) PASSED!" -ForegroundColor Green }

# Run CLI tests (net10.0) with coverage
$coverageFileCli = "$coverageDir\cli.coverage"
Write-Host "Running CLI tests (net10.0) with dotnet-coverage..." -ForegroundColor Cyan
dotnet-coverage collect -o "$coverageFileCli" -f coverage "dotnet test '$ProjectRoot\DynamicsCrm.DevKit.UnitTests\DynamicsCrm.DevKit.UnitTests.csproj' --framework net10.0 --configuration Debug --no-build --logger 'console;verbosity=normal'"
if ($LASTEXITCODE -ne 0) { Write-Host "CLI tests (net10.0) FAILED!" -ForegroundColor Red; exit 3 } else { Write-Host "CLI tests (net10.0) PASSED!" -ForegroundColor Green }

# Merge coverage into Cobertura format
$mergedCoverage = "$coverageDir\merged.cobertura.xml"
$coverageFiles = @()
if (Test-Path $coverageFileAnalyzer) { $coverageFiles += $coverageFileAnalyzer }
if (Test-Path $coverageFileCli) { $coverageFiles += $coverageFileCli }

if ($coverageFiles.Count -gt 0) {
    $inputFiles = $coverageFiles -join " "
    Write-Host "Merging coverage files: $inputFiles" -ForegroundColor Cyan
    dotnet-coverage merge -f cobertura -o "$mergedCoverage" $coverageFiles
    Write-Host "Merged coverage: $mergedCoverage" -ForegroundColor Green
} else {
    Write-Host "No coverage files found!" -ForegroundColor Red
    exit 4
}

# Generate HTML coverage report
$reportDir = "$ProjectRoot\DynamicsCrm.DevKit.UnitTests\CoverageReport"
if (Test-Path $reportDir) { Remove-Item -Path $reportDir -Recurse -Force }

if (Test-Path $mergedCoverage) {
    reportgenerator "-reports:$mergedCoverage" "-targetdir:$reportDir" "-reporttypes:Html;HtmlSummary;Badges;TextSummary" "-title:DynamicsCrm.DevKit - All Unit Tests Code Coverage" "-assemblyfilters:+DynamicsCrm.DevKit.Analyzers;+DynamicsCrm.DevKit.Cli"
    Write-Host "Coverage report generated: $reportDir\index.html" -ForegroundColor Green
} else {
    Write-Host "No merged coverage file to generate report!" -ForegroundColor Red
    exit 5
}

# Display coverage summary text (if available)
$textSummary = "$reportDir\Summary.txt"
if (Test-Path $textSummary) {
    Write-Host ""; Write-Host "============================================" -ForegroundColor Cyan; Write-Host "         CODE COVERAGE SUMMARY" -ForegroundColor Cyan; Write-Host "============================================" -ForegroundColor Cyan
    Get-Content $textSummary | Write-Host
    Write-Host "============================================" -ForegroundColor Cyan; Write-Host ""
} else {
    Write-Host "TextSummary not found - check report generation" -ForegroundColor Yellow
}

# Attempt to open coverage report in default browser
$indexPath = "$reportDir\index.html"
if (Test-Path $indexPath) {
    Write-Host "Opening coverage report in browser..." -ForegroundColor Cyan
    Start-Process $indexPath
}
