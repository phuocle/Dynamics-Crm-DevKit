# Unit Test - Run All Tests with Code Coverage

Run **all** unit tests in `DynamicsCrm.DevKit.UnitTests` (both net48 Analyzer tests and net10.0 CLI tests) and generate a unified code coverage report.

## Step 1: Ensure Required Global Tools

```powershell
$ProjectRoot = "d:\github\Dynamics-Crm-DevKit\v5"

# Check and install dotnet-coverage
$toolList = dotnet tool list --global 2>&1
if ($toolList -notmatch "dotnet-coverage") {
    Write-Host "Installing dotnet-coverage..." -ForegroundColor Yellow
    dotnet tool install --global dotnet-coverage
}
else {
    Write-Host "dotnet-coverage found" -ForegroundColor Green
}

# Check and install ReportGenerator
if ($toolList -notmatch "dotnet-reportgenerator-globaltool") {
    Write-Host "Installing ReportGenerator..." -ForegroundColor Yellow
    dotnet tool install --global dotnet-reportgenerator-globaltool
}
else {
    Write-Host "ReportGenerator found" -ForegroundColor Green
}
```

## Step 2: Build the Test Project

```powershell
cd $ProjectRoot
dotnet build "DynamicsCrm.DevKit.UnitTests\DynamicsCrm.DevKit.UnitTests.csproj" --configuration Debug
```

If build fails, stop and fix the errors before continuing.

## Step 3: Run All Tests with Coverage (net48 - Analyzer Tests)

```powershell
$coverageDir = "$ProjectRoot\DynamicsCrm.DevKit.UnitTests\TestResults"
if (Test-Path $coverageDir) { Remove-Item -Path $coverageDir -Recurse -Force }
New-Item -Path $coverageDir -ItemType Directory -Force | Out-Null

$coverageFileAnalyzer = "$coverageDir\analyzer.coverage"

dotnet-coverage collect `
    -o "$coverageFileAnalyzer" `
    -f coverage `
    "dotnet test `"$ProjectRoot\DynamicsCrm.DevKit.UnitTests\DynamicsCrm.DevKit.UnitTests.csproj`" --framework net48 --configuration Debug --no-build --logger `"console;verbosity=normal`""

if ($LASTEXITCODE -ne 0) {
    Write-Host "Analyzer tests (net48) FAILED!" -ForegroundColor Red
}
else {
    Write-Host "Analyzer tests (net48) PASSED!" -ForegroundColor Green
}
```

## Step 4: Run All Tests with Coverage (net10.0 - CLI Tests)

```powershell
$coverageFileCli = "$coverageDir\cli.coverage"

dotnet-coverage collect `
    -o "$coverageFileCli" `
    -f coverage `
    "dotnet test `"$ProjectRoot\DynamicsCrm.DevKit.UnitTests\DynamicsCrm.DevKit.UnitTests.csproj`" --framework net10.0 --configuration Debug --no-build --logger `"console;verbosity=normal`""

if ($LASTEXITCODE -ne 0) {
    Write-Host "CLI tests (net10.0) FAILED!" -ForegroundColor Red
}
else {
    Write-Host "CLI tests (net10.0) PASSED!" -ForegroundColor Green
}
```

## Step 5: Merge Coverage and Convert to Cobertura

```powershell
$mergedCoverage = "$coverageDir\merged.cobertura.xml"

# Collect all .coverage files that exist
$coverageFiles = @()
if (Test-Path $coverageFileAnalyzer) { $coverageFiles += $coverageFileAnalyzer }
if (Test-Path $coverageFileCli) { $coverageFiles += $coverageFileCli }

if ($coverageFiles.Count -gt 0) {
    $inputFiles = $coverageFiles -join " "
    Invoke-Expression "dotnet-coverage merge -f cobertura -o `"$mergedCoverage`" $inputFiles"
    Write-Host "Merged coverage: $mergedCoverage" -ForegroundColor Green
}
else {
    Write-Host "No coverage files found!" -ForegroundColor Red
}
```

## Step 6: Generate HTML Coverage Report

```powershell
$reportDir = "$ProjectRoot\DynamicsCrm.DevKit.UnitTests\CoverageReport"

if (Test-Path $reportDir) { Remove-Item -Path $reportDir -Recurse -Force }

if (Test-Path $mergedCoverage) {
    reportgenerator `
        "-reports:$mergedCoverage" `
        "-targetdir:$reportDir" `
        "-reporttypes:Html;HtmlSummary;Badges;TextSummary" `
        "-title:DynamicsCrm.DevKit - All Unit Tests Code Coverage" `
        "-assemblyfilters:+DynamicsCrm.DevKit.Analyzers;+DynamicsCrm.DevKit.Cli"

    Write-Host "Coverage report generated: $reportDir\index.html" -ForegroundColor Green
}
else {
    Write-Host "No merged coverage file to generate report!" -ForegroundColor Red
}
```

## Step 7: Display Coverage Summary

```powershell
$textSummary = "$reportDir\Summary.txt"
if (Test-Path $textSummary) {
    Write-Host ""
    Write-Host "============================================" -ForegroundColor Cyan
    Write-Host "         CODE COVERAGE SUMMARY" -ForegroundColor Cyan
    Write-Host "============================================" -ForegroundColor Cyan
    Get-Content $textSummary | Write-Host
    Write-Host "============================================" -ForegroundColor Cyan
    Write-Host ""
}
else {
    Write-Host "TextSummary not found - check report generation" -ForegroundColor Yellow
}

# Open report in browser
$indexPath = "$reportDir\index.html"
if (Test-Path $indexPath) {
    Write-Host "Opening coverage report in browser..." -ForegroundColor Cyan
    Start-Process $indexPath
}
```

## Notes

- Analyzer tests run on **net48** (xUnit + Roslyn Test Framework)
- CLI tests run on **net10.0** (MSTest + FakeXrmEasy)
- Coverage is collected separately per framework then merged for a unified report
- Report includes coverage for both `DynamicsCrm.DevKit.Analyzers` and `DynamicsCrm.DevKit.Cli` assemblies
- Coverage report output: `DynamicsCrm.DevKit.UnitTests\CoverageReport\index.html`
- Uses `dotnet-coverage` (Microsoft) for collection and `ReportGenerator` for HTML reports
