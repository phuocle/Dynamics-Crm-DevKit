$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "============================================="
Write-Host "  FAST UNIT TEST (TestClientCode)"
Write-Host "============================================="
Write-Host ""

$rootDir = $PSScriptRoot

function Invoke-NpmStep($ProjectPath, $Command, $FailureMessage) {
    Push-Location $ProjectPath
    try {
        Write-Host "Running: npm run $Command" -ForegroundColor Cyan
        npm run $Command
        if ($LASTEXITCODE -ne 0) {
            throw $FailureMessage
        }
    } finally {
        Pop-Location
    }
}

function Invoke-NpmDirect($ProjectPath, $Command, $FailureMessage) {
    Push-Location $ProjectPath
    try {
        Write-Host "Running: npm $Command" -ForegroundColor Cyan
        npm $Command
        if ($LASTEXITCODE -ne 0) {
            throw $FailureMessage
        }
    } finally {
        Pop-Location
    }
}

$jsUnitTest = Join-Path $rootDir "01.DevKitJs-UnitTest"
$tsUnitTest = Join-Path $rootDir "02.DevKitTs-UnitTest"

Invoke-NpmDirect $jsUnitTest "test" "JS npm test failed"
Invoke-NpmStep $jsUnitTest "coverage" "JS npm run coverage failed"

Invoke-NpmStep $tsUnitTest "check" "TS npm run check failed"
Invoke-NpmStep $tsUnitTest "release:test" "TS npm run release:test failed"
Invoke-NpmStep $tsUnitTest "devkit-test" "TS npm run devkit-test failed"

Write-Host ""
Write-Host "============================================="
Write-Host "  FAST UNIT TEST COMPLETE"
Write-Host "============================================="
Write-Host ""
