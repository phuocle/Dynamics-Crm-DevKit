# Build all TypeScript projects in release mode
# Run this script to build all entity files for production

$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "============================================="
Write-Host "  BUILDING All TypeScript Projects (RELEASE)"
Write-Host "============================================="
Write-Host ""

$rootDir = $PSScriptRoot

# TypeScript project directories
$tsProjects = @(
    "02.DevKitTs-UnitTest",
    "04.DevKitTs-AICode\Dev.DevKit.WebResourceTs",
    "06.DevKitTs-Vsix\Dev.DevKit.WebResourceTs"
)

$successCount = 0
$failCount = 0

foreach ($project in $tsProjects) {
    $projectPath = Join-Path $rootDir $project
    
    if (Test-Path $projectPath) {
        Write-Host "Building: $project" -ForegroundColor Cyan
        
        Push-Location $projectPath
        try {
            npm run release
            if ($LASTEXITCODE -eq 0) {
                Write-Host "  ✓ Build successful" -ForegroundColor Green
                $successCount++
            } else {
                Write-Host "  ✗ Build failed" -ForegroundColor Red
                $failCount++
            }
        } catch {
            Write-Host "  ✗ Build failed: $_" -ForegroundColor Red
            $failCount++
        }
        Pop-Location
        
        Write-Host ""
    } else {
        Write-Host "  ⚠ Project not found: $project" -ForegroundColor Yellow
    }
}

Write-Host "============================================="
Write-Host "  BUILD COMPLETE"
Write-Host "  Success: $successCount | Failed: $failCount"
Write-Host "============================================="
Write-Host ""

if ($failCount -gt 0) {
    exit 1
}
