# Run Unit Tests with Code Coverage for all five DevKit components
# (Cli, Tool, Vsix, Analyzers, 2019) and generate a per-component HTML
# report under <component project>\CoverageReport\.
#
# net10.0 suites collect through the coverlet.collector ("XPlat Code
# Coverage"); .NET Framework suites (net48/net472) are wrapped in
# `dotnet-coverage collect` because coverlet.collector silently produces
# no coverage there (it exits green but writes nothing).
#
# Usage:
#   & ".\DynamicsCrm.DevKit.Scripts\Run-Coverage.ps1"                       # all five
#   & ".\DynamicsCrm.DevKit.Scripts\Run-Coverage.ps1" -Components Cli,Tool  # subset
#   & ".\DynamicsCrm.DevKit.Scripts\Run-Coverage.ps1" -OpenReport           # open reports

param(
    [string[]]$Components = @("Cli", "Tool", "Vsix", "Analyzers", "2019"),
    [switch]$OpenReport = $false,
    [string]$VSMSBuild = "C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe"
)

$ColorTitle = "Cyan"
$ColorSuccess = "Green"
$ColorWarning = "Yellow"
$ColorError = "Red"
$ColorInfo = "White"

function Write-Header {
    param([string]$Title)
    Write-Host ""
    Write-Host "============================================" -ForegroundColor $ColorTitle
    Write-Host $Title -ForegroundColor $ColorTitle
    Write-Host "============================================" -ForegroundColor $ColorTitle
    Write-Host ""
}

function Ensure-DotnetTool {
    param([string]$Name, [string]$PackageId)
    $toolList = dotnet tool list --global 2>&1
    if ($toolList -match $Name) {
        Write-Host "  $Name found" -ForegroundColor $ColorSuccess
        return $true
    }
    Write-Host "  $Name not found. Installing..." -ForegroundColor $ColorWarning
    dotnet tool install --global $PackageId 2>&1 | Out-Null
    if ($LASTEXITCODE -eq 0) {
        Write-Host "  $Name installed" -ForegroundColor $ColorSuccess
        return $true
    }
    Write-Host "  Failed to install $Name" -ForegroundColor $ColorError
    return $false
}

# Component definitions. Mode:
#   coverlet-runsettings  -> dotnet test with the project's coverlet.runsettings (net10.0)
#   coverlet-collect      -> dotnet test --collect:"XPlat Code Coverage" (net10.0)
#   dotnet-coverage       -> dotnet-coverage collect around dotnet test (net48)
#   dotnet-coverage-vstest-> dotnet-coverage collect around vstest.console (net472, non-SDK)
$allComponents = @(
    @{
        Key = "Cli"; Project = "DynamicsCrm.DevKit.Cli.UnitTests"; ReportDir = "DynamicsCrm.DevKit.Cli"
        Mode = "coverlet-runsettings"; Filter = "+DynamicsCrm.DevKit.Cli"
    },
    @{
        Key = "Tool"; Project = "DynamicsCrm.DevKit.Tool.UnitTests"; ReportDir = "DynamicsCrm.DevKit.Tool"
        Mode = "coverlet-collect"; Filter = "+DynamicsCrm.DevKit.Tool"
    },
    @{
        Key = "Vsix"; Project = "DynamicsCrm.DevKit.Vsix.UnitTests"; ReportDir = "DynamicsCrm.DevKit.Vsix.UnitTests"
        Mode = "dotnet-coverage"; Filter = "+DynamicsCrm.DevKit.Vsix.UnitTests"
    },
    @{
        Key = "Analyzers"; Project = "DynamicsCrm.DevKit.Analyzers.UnitTests"; ReportDir = "DynamicsCrm.DevKit.Analyzers"
        Mode = "dotnet-coverage"; Filter = "+DynamicsCrm.DevKit.Analyzers"
    },
    @{
        Key = "2019"; Project = "DynamicsCrm.DevKit.Vsix.2019.UnitTests"; ReportDir = "DynamicsCrm.DevKit.Vsix.2019.UnitTests"
        Mode = "dotnet-coverage-vstest"; Filter = "+DynamicsCrm.DevKit.2019*"
    }
)

$root = $PSScriptRoot | Split-Path
Set-Location $root

# Read version from release config (same source as Release-DynamicsCrm-DevKit.ps1)
$ConfigFile = Join-Path $PSScriptRoot "DevKit.ReleaseConfig.json"
if (-not (Test-Path $ConfigFile)) {
    Write-Host "Configuration file not found: $ConfigFile" -ForegroundColor $ColorError
    exit 1
}
$Config = Get-Content $ConfigFile -Raw | ConvertFrom-Json
$Version = $Config.version

Write-Header "DevKit Unit Tests with Code Coverage"
Write-Host "Workspace: $root" -ForegroundColor $ColorInfo
Write-Host "Version:    $Version" -ForegroundColor $ColorInfo
Write-Host "Components: $($Components -join ', ')" -ForegroundColor $ColorInfo
Write-Host ""

if (-not (Ensure-DotnetTool "dotnet-coverage" "dotnet-coverage")) { exit 1 }
if (-not (Ensure-DotnetTool "reportgenerator" "dotnet-reportgenerator-globaltool")) { exit 1 }

$selected = $allComponents | Where-Object { $Components -contains $_.Key }
$unknown = $Components | Where-Object { $allComponents.Key -notcontains $_ }
if ($unknown) {
    Write-Host "Unknown components: $($unknown -join ', '). Valid: $($allComponents.Key -join ', ')" -ForegroundColor $ColorError
    exit 1
}

# VS MSBuild is only needed for the legacy non-SDK 2019 suite.
$vstest = $null
if ($selected.Key -contains "2019") {
    $vsRoot = Split-Path (Split-Path (Split-Path (Split-Path $VSMSBuild)))
    $vstest = Join-Path $vsRoot "Common7\IDE\Extensions\TestPlatform\vstest.console.exe"
    if (-not (Test-Path $vstest)) {
        Write-Host "vstest.console.exe not found at $vstest (check -VSMSBuild)" -ForegroundColor $ColorError
        exit 1
    }
}

$results = @()

foreach ($c in $selected) {
    $projDir = Join-Path $root $c.Project
    $csproj = Join-Path $projDir "$($c.Project).csproj"
    $testResults = Join-Path $projDir "TestResults"

    Write-Header "$($c.Key): $($c.Project)"

    # Build
    if ($c.Mode -eq "dotnet-coverage-vstest") {
        Write-Host "Building with VS MSBuild..." -ForegroundColor $ColorWarning
        & $VSMSBuild $csproj -restore -p:Configuration=Debug -v:q -nologo | Out-Null
    }
    else {
        Write-Host "Building..." -ForegroundColor $ColorWarning
        dotnet build $csproj -v:q -nologo | Out-Null
    }
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Build failed for $($c.Project)!" -ForegroundColor $ColorError
        $results += @{ Key = $c.Key; Project = $c.Project; TestPassed = $false; Report = $null }
        continue
    }

    # Fresh coverage output
    if (Test-Path $testResults) { Remove-Item $testResults -Recurse -Force }
    $outCobertura = Join-Path $testResults "coverage.cobertura.xml"

    # Run tests + collect
    $testsPassed = $false
    switch ($c.Mode) {
        "coverlet-runsettings" {
            dotnet test $csproj --no-build --settings (Join-Path $projDir "coverlet.runsettings") -v:q --nologo
            $testsPassed = ($LASTEXITCODE -eq 0)
        }
        "coverlet-collect" {
            dotnet test $csproj --no-build --collect:"XPlat Code Coverage" -v:q --nologo
            $testsPassed = ($LASTEXITCODE -eq 0)
        }
        "dotnet-coverage" {
            dotnet-coverage collect -f cobertura -o $outCobertura dotnet test $csproj --no-build -v:q --nologo
            $testsPassed = ($LASTEXITCODE -eq 0)
        }
        "dotnet-coverage-vstest" {
            $dll = Join-Path $projDir "bin\Debug\net472\win\$($c.Project).dll"
            dotnet-coverage collect -f cobertura -o $outCobertura $vstest $dll
            $testsPassed = ($LASTEXITCODE -eq 0)
        }
    }

    if (-not $testsPassed) {
        Write-Host "Tests failed for $($c.Project)!" -ForegroundColor $ColorError
        $results += @{ Key = $c.Key; Project = $c.Project; TestPassed = $false; Report = $null }
        continue
    }
    Write-Host "Tests passed!" -ForegroundColor $ColorSuccess

    # Report
    $reportDir = Join-Path $root (Join-Path $c.ReportDir "CoverageReport")
    reportgenerator -reports:"$testResults\**\coverage.cobertura.xml" `
        -targetdir:$reportDir `
        -reporttypes:"Html;HtmlSummary;Badges;XmlSummary" `
        -assemblyfilters:$c.Filter `
        -title:"$($c.Project) Code Coverage" | Out-Null
    if ($LASTEXITCODE -ne 0 -or -not (Test-Path (Join-Path $reportDir "index.html"))) {
        Write-Host "ReportGenerator failed for $($c.Project)!" -ForegroundColor $ColorError
        $results += @{ Key = $c.Key; Project = $c.Project; TestPassed = $true; Report = $null }
        continue
    }

    # Strip ReportGenerator footer timestamps to prevent git noise
    Get-ChildItem $reportDir -Include "*.html", "*.htm" -Recurse | ForEach-Object {
        $content = Get-Content $_.FullName -Raw
        $new = $content -replace '<div class="footer">Generated by: ReportGenerator.*?</div>', '<div class="footer">Generated by: ReportGenerator</div>'
        if ($content -ne $new) { $new | Set-Content $_.FullName -NoNewline -Encoding UTF8 }
    }

    $results += @{ Key = $c.Key; Project = $c.Project; TestPassed = $true; Report = (Join-Path $reportDir "index.html") }
}

# Summary (line / branch / method per measured assembly, from XmlSummary)
Write-Header "Coverage Summary"
$allPassed = $true
foreach ($r in $results) {
    Write-Host $r.Key -ForegroundColor $ColorTitle
    if (-not $r.TestPassed) {
        Write-Host "  Tests FAILED" -ForegroundColor $ColorError
        $allPassed = $false
        continue
    }
    if (-not $r.Report) {
        Write-Host "  Tests passed, coverage/report unavailable" -ForegroundColor $ColorWarning
        $allPassed = $false
        continue
    }
    $summaryXml = Join-Path (Split-Path $r.Report) "Summary.xml"
    [xml]$x = Get-Content $summaryXml
    foreach ($a in $x.SelectNodes("//Assembly")) {
        Write-Host ("  {0}: line {1}% | branch {2}% | method {3}% (full {4}%)" -f `
            $a.name, $a.coverage, $a.branchcoverage, $a.methodcoverage, $a.fullmethodcoverage) -ForegroundColor $ColorInfo
    }
    Write-Host "  Report: $($r.Report)" -ForegroundColor $ColorSuccess
}

# Generate Published/<version>/CoverageReport.md from Summary.xml data
$publishedDir = Join-Path $root (Join-Path "Published" $Version)
$coverageMd = Join-Path $publishedDir "CoverageReport.md"
$mdLines = @()
$mdLines += "# Code Coverage Report"
$mdLines += ""
$mdLines += "> **Version:** ``$Version`` | **Generated:** $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
$mdLines += ""

# --- Summary table ---
$mdLines += "## Summary"
$mdLines += ""
$mdLines += "| # | Component | Test Project | Status | Line | Branch | Method |"
$mdLines += "|---|---|---|---|---|---|---|"

$index = 0
foreach ($r in $results) {
    $index++
    if (-not $r.TestPassed) {
        $mdLines += "| $index | $($r.Key) | $($r.Project) | ❌ Fail | N/A | N/A | N/A |"
        continue
    }
    if (-not $r.Report) {
        $mdLines += "| $index | $($r.Key) | $($r.Project) | ⚠️ No report | N/A | N/A | N/A |"
        continue
    }
    $summaryXml = Join-Path (Split-Path $r.Report) "Summary.xml"
    if (Test-Path $summaryXml) {
        [xml]$x = Get-Content $summaryXml
        $assemblies = $x.SelectNodes("//Assembly")
        $first = $true
        foreach ($a in $assemblies) {
            $num = if ($first) { "$index" } else { "" }
            $comp = if ($first) { $r.Key } else { "" }
            $proj = if ($first) { $r.Project } else { "" }
            $status = if ($first) { "✅ Pass" } else { "" }
            $mdLines += "| $num | $comp | $proj | $status | $($a.coverage)% | $($a.branchcoverage)% | $($a.methodcoverage)% |"
            $first = $false
        }
    }
}

# --- Details table ---
$mdLines += ""
$mdLines += "## Details"
$mdLines += ""
$mdLines += "| Assembly | Lines | Branches | Methods | Classes |"
$mdLines += "|---|---|---|---|---|"

foreach ($r in $results) {
    if (-not $r.Report) { continue }
    $summaryXml = Join-Path (Split-Path $r.Report) "Summary.xml"
    if (-not (Test-Path $summaryXml)) { continue }
    [xml]$x = Get-Content $summaryXml
    foreach ($a in $x.SelectNodes("//Assembly")) {
        $lineText = "$($a.coveredlines)/$($a.coverablelines)"
        $branchText = "$($a.coveredbranches)/$($a.totalbranches)"
        $methodText = "$($a.coveredmethods)/$($a.totalmethods)"
        $mdLines += "| $($a.name) | $lineText | $branchText | $methodText | $($a.classes) |"
    }
}

$mdLines += ""
$mdLines += "---"
$mdLines += "*Generated by ``Run-Coverage.ps1``*"

New-Item -Path $publishedDir -ItemType Directory -Force | Out-Null
$mdLines -join "`n" | Set-Content $coverageMd -Encoding UTF8 -NoNewline
Write-Header "Coverage Report (Markdown)"
Write-Host "Generated: $coverageMd" -ForegroundColor $ColorSuccess

# Delete local CoverageReport directories (single source of truth is the .md in Published/)
foreach ($r in $results) {
    if ($r.Report) {
        $localReportDir = Split-Path $r.Report
        if (Test-Path $localReportDir) {
            Remove-Item $localReportDir -Recurse -Force
            Write-Host "  Deleted local: $localReportDir" -ForegroundColor $ColorWarning
        }
    }
}

if ($OpenReport) {
    if (Test-Path $coverageMd) { Start-Process $coverageMd }
}

if (-not $allPassed) { exit 1 }
Write-Host ""
Write-Host "Done!" -ForegroundColor $ColorSuccess
