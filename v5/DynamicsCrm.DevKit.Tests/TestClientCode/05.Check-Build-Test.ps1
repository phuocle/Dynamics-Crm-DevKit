$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "============================================="
Write-Host "  CHECK - BUILD - TEST (TestClientCode)"
Write-Host "============================================="
Write-Host ""

$rootDir = $PSScriptRoot

$projects = @(
    "01.DevKitJs-UnitTest",
    "02.DevKitTs-UnitTest",
    "03.DevKitJs-AICode",
    "04.DevKitTs-AICode",
    "05.DevKitJs-Vsix",
    "06.DevKitTs-Vsix"
)

$successCount = 0
$failCount = 0

foreach ($project in $projects) {
    $projectPath = Join-Path $rootDir $project
    
    if (Test-Path $projectPath) {
        Write-Host "--------------------------------------------------------------------------------"
        Write-Host "Processing: $project"
        Write-Host "--------------------------------------------------------------------------------"
        Push-Location $projectPath

        try {
            if ($project -eq "01.DevKitJs-UnitTest") {
                # JS UnitTest
                Write-Host "Running: npm test" -ForegroundColor Cyan
                npm test
                if ($LASTEXITCODE -ne 0) { throw "npm test failed" }
                
                Write-Host "Running: npm run coverage" -ForegroundColor Cyan
                npm run coverage
                if ($LASTEXITCODE -ne 0) { throw "npm run coverage failed" }
            }
            elseif ($project -eq "02.DevKitTs-UnitTest") {
                # TS UnitTest
                Write-Host "Running: npm run check" -ForegroundColor Cyan
                npm run check
                if ($LASTEXITCODE -ne 0) { throw "npm run check failed" }

                Write-Host "Running: npm run release:test" -ForegroundColor Cyan
                npm run release:test
                if ($LASTEXITCODE -ne 0) { throw "npm run release:test failed" }

                Write-Host "Running: npm run devkit-test" -ForegroundColor Cyan
                npm run devkit-test
                if ($LASTEXITCODE -ne 0) { throw "npm run devkit-test failed" }
            }
            elseif ($project -eq "03.DevKitJs-AICode") {
                # JS AICode - Nothing to do
                Write-Host "No check/build/test scripts available." -ForegroundColor DarkGray
            }
            elseif ($project -eq "04.DevKitTs-AICode") {
                # TS AICode
                Set-Location "Dev.DevKit.WebResourceTs"
                
                Write-Host "Running: npm run check" -ForegroundColor Cyan
                npm run check
                if ($LASTEXITCODE -ne 0) { throw "npm run check failed" }

                Write-Host "Running: npm run release" -ForegroundColor Cyan
                npm run release
                if ($LASTEXITCODE -ne 0) { throw "npm run release failed" }
            }
            elseif ($project -eq "05.DevKitJs-Vsix") {
                # JS Vsix - Nothing to do
                Write-Host "No check/build/test scripts available." -ForegroundColor DarkGray
            }
            elseif ($project -eq "06.DevKitTs-Vsix") {
                # TS Vsix
                Set-Location "Dev.DevKit.WebResourceTs"

                Write-Host "Running: npm run check" -ForegroundColor Cyan
                npm run check
                if ($LASTEXITCODE -ne 0) { throw "npm run check failed" }

                Write-Host "Running: npm run release" -ForegroundColor Cyan
                npm run release
                if ($LASTEXITCODE -ne 0) { throw "npm run release failed" }
            }

            $successCount++
            Write-Host "  SUCCESS" -ForegroundColor Green

        } catch {
            Write-Host "  FAILED: $_" -ForegroundColor Red
            $failCount++
        }
        
        Pop-Location
        Write-Host ""
    } else {
        Write-Host "  Project not found: $project" -ForegroundColor Yellow
    }
}

Write-Host "============================================="
Write-Host "  SUMMARY"
Write-Host "  Success: $successCount | Failed: $failCount"
Write-Host "============================================="
Write-Host ""

if ($failCount -gt 0) {
    exit 1
}
exit 0
