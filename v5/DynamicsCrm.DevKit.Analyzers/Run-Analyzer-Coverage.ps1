# Run Unit Tests with Code Coverage for DynamicsCrm.DevKit.Analyzers
# This script runs tests for DynamicsCrm.DevKit.UnitTests (analyzer tests)
# and shows coverage percentage for DynamicsCrm.DevKit.Analyzers.dll
# Generates HTML reports using ReportGenerator

param(
    [switch]$OpenReport = $false
)

# Colors for output
$ColorTitle = "Cyan"
$ColorSuccess = "Green"
$ColorWarning = "Yellow"
$ColorError = "Red"
$ColorInfo = "White"

# Function to show header
function Write-Header {
    param([string]$Title)
    Write-Host ""
    Write-Host "============================================" -ForegroundColor $ColorTitle
    Write-Host $Title -ForegroundColor $ColorTitle
    Write-Host "============================================" -ForegroundColor $ColorTitle
    Write-Host ""
}

# Function to check if dotnet-coverage is installed
function Ensure-DotnetCoverage {
    try {
        $toolList = dotnet tool list --global 2>&1
        if ($toolList -match "dotnet-coverage") {
            Write-Host "  dotnet-coverage tool found" -ForegroundColor $ColorSuccess
            return $true
        }

        Write-Host "  dotnet-coverage not found. Installing..." -ForegroundColor $ColorWarning
        dotnet tool install --global dotnet-coverage 2>&1 | Out-Null

        if ($LASTEXITCODE -eq 0) {
            Write-Host "  dotnet-coverage installed successfully" -ForegroundColor $ColorSuccess
            return $true
        }
        else {
            Write-Host "  Failed to install dotnet-coverage" -ForegroundColor $ColorError
            return $false
        }
    }
    catch {
        Write-Host "  Error checking dotnet-coverage: $($_.Exception.Message)" -ForegroundColor $ColorError
        return $false
    }
}

# Function to check if ReportGenerator is installed
function Ensure-ReportGenerator {
    try {
        $toolList = dotnet tool list --global 2>&1
        if ($toolList -match "dotnet-reportgenerator-globaltool") {
            Write-Host "  ReportGenerator tool found" -ForegroundColor $ColorSuccess
            return $true
        }

        Write-Host "  ReportGenerator not found. Installing..." -ForegroundColor $ColorWarning
        dotnet tool install --global dotnet-reportgenerator-globaltool 2>&1 | Out-Null

        if ($LASTEXITCODE -eq 0) {
            Write-Host "  ReportGenerator installed successfully" -ForegroundColor $ColorSuccess
            return $true
        }
        else {
            Write-Host "  Failed to install ReportGenerator" -ForegroundColor $ColorError
            return $false
        }
    }
    catch {
        Write-Host "  Error checking ReportGenerator: $($_.Exception.Message)" -ForegroundColor $ColorError
        return $false
    }
}

# Function to parse coverage percentage from coverage file
function Get-CoveragePercentage {
    param(
        [string]$CoverageFilePath,
        [string]$TargetDllName = "DynamicsCrm.DevKit.Analyzers.dll",
        [string]$AssemblyFilter = "+DynamicsCrm.DevKit.Analyzers",
        [string]$ClassFilters = ""
    )

    try {
        # Convert binary coverage to XML using dotnet-coverage
        $xmlPath = $CoverageFilePath -replace "\.coverage$", ".coveragexml"
        Write-Host "  Converting coverage to XML: $xmlPath" -ForegroundColor $ColorInfo

        # Run dotnet-coverage merge command to convert to XML
        $output = dotnet-coverage merge -f xml -o $xmlPath $CoverageFilePath 2>&1

        if ($LASTEXITCODE -ne 0) {
            Write-Host "  dotnet-coverage failed: $output" -ForegroundColor $ColorError
            return @{ Success = $false; Message = "dotnet-coverage failed with exit code $LASTEXITCODE" }
        }

        if (-not (Test-Path $xmlPath)) {
            return @{ Success = $false; Message = "XML file not generated: $xmlPath" }
        }

        Write-Host "  Parsing coverage XML..." -ForegroundColor $ColorInfo

        # Parse XML for coverage statistics (dotnet-coverage XML)
        [xml]$coverageXml = Get-Content $xmlPath

        # Attempt to generate and parse Cobertura XML (this is what ReportGenerator uses)
        $coberturaPath = $CoverageFilePath -replace "\.coverage$", ".cobertura.xml"
        Write-Host "  Generating Cobertura XML: $coberturaPath" -ForegroundColor $ColorInfo
        dotnet-coverage merge -f cobertura -o $coberturaPath $CoverageFilePath 2>&1 | Out-Null

        if (Test-Path $coberturaPath) {
            try {
                Write-Host "  Parsing Cobertura XML for assembly-relevant classes..." -ForegroundColor $ColorInfo
                [xml]$coberturaXml = Get-Content $coberturaPath

                # The target name without extension (used to match class/package names)
                $targetName = $TargetDllName -replace '\.dll$',''

                $coveredLines = 0
                $totalLines = 0

                # Cobertura layout: coverage/packages/package/classes/class
                $classNodes = @()
                if ($coberturaXml.coverage.packages) {
                    $classNodes = $coberturaXml.coverage.packages.package | ForEach-Object {
                        if ($_.classes -and $_.classes.class) { $_.classes.class } else { @() }
                    } | Select-Object -ExpandProperty * -ErrorAction SilentlyContinue
                }

                foreach ($classNode in $classNodes) {
                    # class node may have attributes 'name' and 'filename'
                    $className = ($classNode.name -as [string])
                    $fileName = ($classNode.filename -as [string])

                    # Include class if the name or filename contains the target assembly/name
                    if (($className -and $className -like "*$targetName*") -or ($fileName -and $fileName -like "*$targetName*")) {
                        if ($classNode.lines -and $classNode.lines.line) {
                            foreach ($line in $classNode.lines.line) {
                                $hits = 0
                                try { $hits = [int]$line.hits } catch { $hits = 0 }
                                $totalLines += 1
                                if ($hits -gt 0) { $coveredLines += 1 }
                            }
                        }
                    }
                }

                if ($totalLines -gt 0) {
                    $lineCoveragePercent = [math]::Round((($coveredLines / $totalLines) * 100), 2)
                    return @{
                        Success = $true
                        BlocksCovered = $coveredLines
                        BlocksNotCovered = $totalLines - $coveredLines
                        TotalBlocks = $totalLines
                        BlockCoveragePercent = $lineCoveragePercent
                        LinesCovered = $coveredLines
                        LinesPartiallyCovered = 0
                        LinesNotCovered = $totalLines - $coveredLines
                        TotalLines = $totalLines
                        LineCoveragePercent = $lineCoveragePercent
                        XmlPath = $xmlPath
                        CoberturaPath = $coberturaPath
                    }
                }
                else {
                    Write-Host "  No class lines matched the target assembly in Cobertura XML; falling back to dotnet-coverage XML parsing" -ForegroundColor $ColorWarning
                }
            }
            catch {
                Write-Host "  Error parsing Cobertura XML: $($_.Exception.Message) -- falling back" -ForegroundColor $ColorWarning
            }
        }

        # If Cobertura parsing didn't find matching classes, use ReportGenerator XmlSummary with same filters
        if (Test-Path $coberturaPath) {
            try {
                $tempReportDir = Join-Path (Split-Path $CoverageFilePath -Parent) "ReportGenerator_Summary"
                if (Test-Path $tempReportDir) { Remove-Item -Path $tempReportDir -Recurse -Force }
                New-Item -Path $tempReportDir -ItemType Directory | Out-Null

                $rgArgs = @(
                    "-reports:$coberturaPath",
                    "-targetdir:$tempReportDir",
                    "-reporttypes:XmlSummary",
                    "-assemblyfilters:$AssemblyFilter"
                )

                if ($ClassFilters) {
                    $rgArgs += "-classfilters:$ClassFilters"
                }

                Write-Host "  Running ReportGenerator for XmlSummary to $tempReportDir" -ForegroundColor $ColorInfo
                & reportgenerator $rgArgs 2>&1 | Out-Null

                $summaryPath = Join-Path $tempReportDir "Summary.xml"
                if (Test-Path $summaryPath) {
                    [xml]$summaryXml = Get-Content $summaryPath
                    $assemblyName = $TargetDllName -replace '\.dll$',''
                    # Use XPath to find the assembly node in the Summary XML regardless of root element
                    $xpath = "//Assembly[@name='$assemblyName']"
                    $assemblyNode = $summaryXml.SelectSingleNode($xpath)
                    if (-not $assemblyNode) {
                        # Try a broader match by searching all Assembly nodes and matching by substring
                        $allAssemblies = $summaryXml.SelectNodes("//Assembly")
                        $assemblyNode = $null
                        foreach ($n in $allAssemblies) {
                            if ((($n.name -as [string]) -like "*$assemblyName*") -or (($n.GetAttribute('name') -as [string]) -like "*$assemblyName*")) {
                                $assemblyNode = $n
                                break
                            }
                        }
                    }

                    if ($assemblyNode) {
                        $coverageAttr = $assemblyNode.coverage
                        $percent = 0
                        try { $percent = [double]$coverageAttr } catch { $percent = 0 }
                        $percent = [math]::Round($percent, 2)

                        return @{
                            Success = $true
                            BlocksCovered = [int]$assemblyNode.coveredlines
                            BlocksNotCovered = ([int]$assemblyNode.coverablelines - [int]$assemblyNode.coveredlines)
                            TotalBlocks = [int]$assemblyNode.coverablelines
                            BlockCoveragePercent = $percent
                            LinesCovered = [int]$assemblyNode.coveredlines
                            LinesPartiallyCovered = 0
                            LinesNotCovered = [int]$assemblyNode.coverablelines - [int]$assemblyNode.coveredlines
                            TotalLines = [int]$assemblyNode.coverablelines
                            LineCoveragePercent = $percent
                            XmlPath = $xmlPath
                            CoberturaPath = $coberturaPath
                            SummaryPath = $summaryPath
                        }
                    }
                }
            }
            catch {
                Write-Host "  Error generating/parsing XmlSummary: $($_.Exception.Message) -- falling back" -ForegroundColor $ColorWarning
            }
        }

        # Fallback: try to find target module in dotnet-coverage XML
        $serverModule = $coverageXml.results.modules.module | Where-Object {
            $_.name -like "*$TargetDllName*" -or $_.name -eq $TargetDllName
        }

        if ($serverModule) {
            Write-Host "  Found $TargetDllName in coverage data" -ForegroundColor $ColorSuccess

            # Get coverage data from attributes
            $blocksCovered = [int]$serverModule.blocks_covered
            $blocksNotCovered = [int]$serverModule.blocks_not_covered
            $totalBlocks = $blocksCovered + $blocksNotCovered

            $linesCovered = [int]$serverModule.lines_covered
            $linesPartiallyCovered = [int]$serverModule.lines_partially_covered
            $linesNotCovered = [int]$serverModule.lines_not_covered
            $totalLines = $linesCovered + $linesPartiallyCovered + $linesNotCovered

            if ($totalBlocks -gt 0 -and $totalLines -gt 0) {
                $blockCoverage = [double]$serverModule.block_coverage
                $lineCoverage = [double]$serverModule.line_coverage

                return @{
                    Success = $true
                    BlocksCovered = $blocksCovered
                    BlocksNotCovered = $blocksNotCovered
                    TotalBlocks = $totalBlocks
                    BlockCoveragePercent = $blockCoverage
                    LinesCovered = $linesCovered
                    LinesPartiallyCovered = $linesPartiallyCovered
                    LinesNotCovered = $linesNotCovered
                    TotalLines = $totalLines
                    LineCoveragePercent = $lineCoverage
                    XmlPath = $xmlPath
                }
            }
            else {
                return @{ Success = $false; Message = "No coverage data found for $TargetDllName (total blocks/lines = 0)" }
            }
        }
        else {
            # List available modules for debugging
            $availableModules = @()
            try { $availableModules = $coverageXml.results.modules.module | ForEach-Object { $_.name } } catch {}
            $moduleList = $availableModules -join ", "
            return @{ Success = $false; Message = "$TargetDllName not found in coverage. Available modules: $moduleList" }
        }
    }
    catch {
        return @{ Success = $false; Message = $_.Exception.Message }
    }
}

# Function to run tests for a project
function Run-TestProject {
    param(
        [string]$ProjectName,
        [string]$ProjectPath,
        [string]$RunSettingsPath,
        [bool]$HasDotnetCoverage,
        [string]$TargetDllName,
        [string]$AssemblyFilter = "+DynamicsCrm.DevKit.Analyzers"
    )

    Write-Header "Running Tests: $ProjectName"

    # Build the project
    Write-Host "Building $ProjectName..." -ForegroundColor $ColorWarning
    dotnet build $ProjectPath --configuration Debug

    if ($LASTEXITCODE -ne 0) {
        Write-Host "Build failed for $ProjectName!" -ForegroundColor $ColorError
        return @{ Success = $false; Message = "Build failed" }
    }

    Write-Host "Build successful!" -ForegroundColor $ColorSuccess
    Write-Host ""

    # Define coverage file path
    $coverageFile = Join-Path (Split-Path $ProjectPath -Parent) "$ProjectName.coverage"
    if (-not [System.IO.Path]::IsPathRooted($coverageFile)) {
        $coverageFile = Join-Path $PWD $coverageFile
    }

    # Run tests with coverage
    Write-Host "Running tests with code coverage..." -ForegroundColor $ColorWarning

    if ($HasDotnetCoverage) {
        # Use dotnet-coverage to run tests and collect coverage
        $testCommand = "dotnet test `"$ProjectPath`" --settings `"$RunSettingsPath`" --no-build --logger `"console;verbosity=minimal`""

        Write-Host "  Command: dotnet-coverage collect -o $coverageFile -f coverage $testCommand" -ForegroundColor $ColorInfo

        # Run dotnet-coverage
        dotnet-coverage collect -o "$coverageFile" -f coverage "$testCommand" 2>&1 | Out-Host

        if ($LASTEXITCODE -ne 0) {
             Write-Host "Tests failed for $ProjectName!" -ForegroundColor $ColorError
             return @{ Success = $false; Message = "Tests failed" }
        }
    }
    else {
        return @{ Success = $false; Message = "dotnet-coverage tool not available" }
    }

    if (Test-Path $coverageFile) {
        Write-Host ""
        Write-Host "Coverage file generated: $coverageFile" -ForegroundColor $ColorSuccess

        # Get coverage statistics
        $coverageStats = Get-CoveragePercentage -CoverageFilePath $coverageFile -TargetDllName $TargetDllName -AssemblyFilter $AssemblyFilter

        return @{
            Success = $true
            CoverageFile = $coverageFile
            CoverageStats = $coverageStats
        }
    }
    else {
        Write-Host "Warning: Coverage file not found!" -ForegroundColor $ColorWarning
        return @{
            Success = $true
            CoverageFile = $null
            CoverageStats = @{ Success = $false; Message = "Coverage file not generated" }
        }
    }
}

# Function to generate HTML report using ReportGenerator
function Generate-HtmlReport {
    param(
        [array]$CoverageFiles,
        [string]$OutputFolder,
        [string]$AssemblyFilter = "+DynamicsCrm.DevKit.Analyzers"
    )

    Write-Header "Generating HTML Report"

    # Clean up report folder
    if (Test-Path $OutputFolder) {
        Write-Host "Cleaning up existing report folder..." -ForegroundColor $ColorWarning
        Remove-Item -Path $OutputFolder -Recurse -Force
    }

    Write-Host "Creating report folder: $OutputFolder" -ForegroundColor $ColorInfo
    New-Item -Path $OutputFolder -ItemType Directory -Force | Out-Null

    # Clean up any .md files if they exist (per requirements)
    $mdFiles = Get-ChildItem -Path $OutputFolder -Filter "*.md" -ErrorAction SilentlyContinue
    if ($mdFiles) {
        Write-Host "Removing .md files from report folder..." -ForegroundColor $ColorInfo
        $mdFiles | Remove-Item -Force
    }

    # Convert all coverage files to Cobertura XML format
    Write-Host "Converting coverage files to Cobertura format..." -ForegroundColor $ColorInfo
    $coberturaFiles = @()

    foreach ($coverageFile in $CoverageFiles) {
        if (Test-Path $coverageFile) {
            $coberturaPath = $coverageFile -replace "\.coverage$", ".cobertura.xml"
            Write-Host "  Converting: $coverageFile" -ForegroundColor $ColorInfo

            dotnet-coverage merge -f cobertura -o $coberturaPath $coverageFile 2>&1 | Out-Null

            if (Test-Path $coberturaPath) {
                $coberturaFiles += $coberturaPath
                Write-Host "  Created: $coberturaPath" -ForegroundColor $ColorSuccess
            }
        }
    }

    if ($coberturaFiles.Count -eq 0) {
        Write-Host "No coverage files to generate report!" -ForegroundColor $ColorError
        return $false
    }

    # Generate report using ReportGenerator
    Write-Host ""
    Write-Host "Generating HTML report with ReportGenerator..." -ForegroundColor $ColorWarning

    $reportFiles = $coberturaFiles -join ";"
    $reportGenArgs = @(
        "-reports:$reportFiles",
        "-targetdir:$OutputFolder",
        "-reporttypes:Html;HtmlSummary;Badges",
        "-title:DynamicsCrm.DevKit.Analyzers Code Coverage Report",
        "-assemblyfilters:$AssemblyFilter"
    )

    Write-Host "  Running: reportgenerator $($reportGenArgs -join ' ')" -ForegroundColor $ColorInfo

    & reportgenerator $reportGenArgs

    if ($LASTEXITCODE -ne 0) {
        Write-Host "ReportGenerator failed with exit code $LASTEXITCODE" -ForegroundColor $ColorError
        return $false
    }

    # Remove timestamp from footer to prevent git noise
    Write-Host "Removing timestamps from reports to prevent git noise..." -ForegroundColor $ColorInfo
    $generatedHtmlFiles = Get-ChildItem -Path $OutputFolder -Include "*.html", "*.htm" -Recurse
    foreach ($file in $generatedHtmlFiles) {
        $content = Get-Content -Path $file.FullName -Raw
        # Replace the footer with a static string to avoid timestamp changes
        $newContent = $content -replace '<div class="footer">Generated by: ReportGenerator.*?</div>', '<div class="footer">Generated by: ReportGenerator</div>'

        if ($content -ne $newContent) {
            $newContent | Set-Content -Path $file.FullName -NoNewline -Encoding UTF8
        }
    }

    $indexPath = Join-Path $OutputFolder "index.html"
    if (Test-Path $indexPath) {
        Write-Host ""
        Write-Host "Report generated successfully!" -ForegroundColor $ColorSuccess
        Write-Host "Report location: $indexPath" -ForegroundColor $ColorSuccess
        return $true
    }
    else {
        Write-Host "index.html not found in report folder!" -ForegroundColor $ColorError
        return $false
    }
}

# Main execution
Clear-Host
Write-Header "DynamicsCrm.DevKit.Analyzers Unit Tests with Code Coverage"

# Change to script directory
Set-Location $PSScriptRoot

Write-Host "Workspace: $PSScriptRoot" -ForegroundColor $ColorInfo
Write-Host "Target Assembly: DynamicsCrm.DevKit.Analyzers.dll" -ForegroundColor $ColorInfo
Write-Host ""

# Define paths
$testProjectPath = "..\DynamicsCrm.DevKit.UnitTests\DynamicsCrm.DevKit.UnitTests.csproj"
$runSettingsPath = "..\DynamicsCrm.DevKit.UnitTests\coverlet.runsettings"

# Check if test project exists
if (-not (Test-Path $testProjectPath)) {
    Write-Host "Error: Test project not found at $testProjectPath!" -ForegroundColor $ColorError
    Read-Host "Press Enter to exit"
    exit 1
}

# Check if runsettings exists
if (-not (Test-Path $runSettingsPath)) {
    Write-Host "Error: coverlet.runsettings not found at $runSettingsPath!" -ForegroundColor $ColorError
    Read-Host "Press Enter to exit"
    exit 1
}

# Ensure dotnet-coverage is installed
Write-Host "Checking for dotnet-coverage tool..." -ForegroundColor $ColorWarning
$hasDotnetCoverage = Ensure-DotnetCoverage
Write-Host ""

if (-not $hasDotnetCoverage) {
    Write-Host "Error: dotnet-coverage tool is required but not available." -ForegroundColor $ColorError
    Read-Host "Press Enter to exit"
    exit 1
}

# Ensure ReportGenerator is installed
Write-Host "Checking for ReportGenerator tool..." -ForegroundColor $ColorWarning
$hasReportGenerator = Ensure-ReportGenerator
Write-Host ""

if (-not $hasReportGenerator) {
    Write-Host "Error: ReportGenerator tool is required but not available." -ForegroundColor $ColorError
    Read-Host "Press Enter to exit"
    exit 1
}

# Define test projects
$testProjects = @(
    @{
        Name = "DynamicsCrm.DevKit.UnitTests"
        ProjectPath = $testProjectPath
        RunSettingsPath = $runSettingsPath
        ReportFolder = "CoverageReport"
        TargetDll = "DynamicsCrm.DevKit.Analyzers.dll"
        AssemblyFilter = "+DynamicsCrm.DevKit.Analyzers"
    }
)

# Run tests for each project
$results = @()
$allSuccess = $true
$generatedReports = @()

foreach ($project in $testProjects) {
    $result = Run-TestProject -ProjectName $project.Name -ProjectPath $project.ProjectPath -RunSettingsPath $project.RunSettingsPath -HasDotnetCoverage $hasDotnetCoverage -TargetDllName $project.TargetDll -AssemblyFilter $project.AssemblyFilter
    $results += @{
        ProjectName = $project.Name
        Result = $result
    }

    if (-not $result.Success) {
        $allSuccess = $false
    }

    if ($result.CoverageFile) {
        # Generate individual report for this project
        $reportGenerated = Generate-HtmlReport -CoverageFiles @($result.CoverageFile) -OutputFolder $project.ReportFolder -AssemblyFilter $project.AssemblyFilter

        if ($reportGenerated) {
            $generatedReports += @{
                ProjectName = $project.Name
                ReportPath = Join-Path $PSScriptRoot (Join-Path $project.ReportFolder "index.html")
            }
        }
    }
}

# Display summary
Write-Header "Coverage Summary"

foreach ($resultItem in $results) {
    $projectName = $resultItem.ProjectName
    $result = $resultItem.Result

    Write-Host "$projectName" -ForegroundColor $ColorTitle
    Write-Host ("-" * 60) -ForegroundColor $ColorInfo

    if ($result.Success -and $result.CoverageStats.Success) {
        $stats = $result.CoverageStats

        Write-Host "  Block Coverage:" -ForegroundColor $ColorInfo
        Write-Host "    Covered:     $($stats.BlocksCovered) / $($stats.TotalBlocks) blocks" -ForegroundColor $ColorSuccess
        Write-Host "    Not Covered: $($stats.BlocksNotCovered) blocks" -ForegroundColor $ColorWarning
        Write-Host "    Percentage:  $($stats.BlockCoveragePercent)%" -ForegroundColor $(if ($stats.BlockCoveragePercent -ge 70) { $ColorSuccess } elseif ($stats.BlockCoveragePercent -ge 50) { $ColorWarning } else { $ColorError })
        Write-Host ""
        Write-Host "  Line Coverage:" -ForegroundColor $ColorInfo
        Write-Host "    Covered:           $($stats.LinesCovered) lines" -ForegroundColor $ColorSuccess
        Write-Host "    Partially Covered: $($stats.LinesPartiallyCovered) lines" -ForegroundColor $ColorWarning
        Write-Host "    Not Covered:       $($stats.LinesNotCovered) lines" -ForegroundColor $ColorError
        Write-Host "    Total:             $($stats.TotalLines) lines" -ForegroundColor $ColorInfo
        Write-Host "    Percentage:        $($stats.LineCoveragePercent)%" -ForegroundColor $(if ($stats.LineCoveragePercent -ge 70) { $ColorSuccess } elseif ($stats.LineCoveragePercent -ge 50) { $ColorWarning } else { $ColorError })
    }
    elseif ($result.Success) {
        Write-Host "  Status: Tests passed, but coverage analysis failed" -ForegroundColor $ColorWarning
        if ($result.CoverageStats.Message) {
            Write-Host "  Reason: $($result.CoverageStats.Message)" -ForegroundColor $ColorWarning
        }
    }
    else {
        Write-Host "  Status: Failed" -ForegroundColor $ColorError
        Write-Host "  Reason: $($result.Message)" -ForegroundColor $ColorError
    }

    Write-Host ""
}

# Final summary
Write-Header "Execution Summary"

if ($allSuccess) {
    Write-Host "All tests completed successfully!" -ForegroundColor $ColorSuccess
}
else {
    Write-Host "Some tests failed!" -ForegroundColor $ColorError
}

Write-Host ""
Write-Host "Generated Reports:" -ForegroundColor $ColorWarning

if ($generatedReports.Count -gt 0) {
    foreach ($report in $generatedReports) {
        Write-Host "  $($report.ProjectName):" -ForegroundColor $ColorInfo
        Write-Host "    $($report.ReportPath)" -ForegroundColor $ColorSuccess
    }

    if ($OpenReport -and $generatedReports.Count -gt 0) {
        Write-Host ""
        Write-Host "Opening reports in browser..." -ForegroundColor $ColorInfo
        foreach ($report in $generatedReports) {
            Start-Process $report.ReportPath
        }
    }
}
else {
    Write-Host "  No reports generated." -ForegroundColor $ColorError
}

Write-Host "Done!" -ForegroundColor $ColorSuccess
Write-Host ""
# Read-Host "Press Enter to exit"
