# RunBuildRelease.ps1
# Reads package.json to determine how to run the release/build and verifies output in the `build` folder

Write-Host "=== Running Build/Release ===" -ForegroundColor Cyan

$scriptDir = $PSScriptRoot

# Change to script directory
Push-Location $scriptDir

try {
    if (-not (Test-Path "package.json")) {
        Write-Host "Error: package.json not found in $scriptDir" -ForegroundColor Red
        exit 1
    }

    try {
        $pkg = Get-Content -Raw -Path "package.json" | ConvertFrom-Json
    } catch {
        Write-Host "Error: failed to parse package.json" -ForegroundColor Red
        exit 1
    }

    # If a release script exists in package.json, run it via npm. Otherwise try a sensible fallback.
    if ($pkg.scripts -and $pkg.scripts.release) {
        Write-Host "Found release script: $($pkg.scripts.release)" -ForegroundColor Yellow
        Write-Host "Running npm run release..." -ForegroundColor Yellow
        npm run release
        $exit = $LASTEXITCODE
        if ($exit -ne 0) {
            Write-Host "npm run release failed (exit code: $exit)" -ForegroundColor Red
        }
    } else {
        Write-Host "No 'release' script defined in package.json; attempting fallback 'node build.js release' if present." -ForegroundColor Yellow
        if (Test-Path "build.js") {
            node build.js release
            $exit = $LASTEXITCODE
            if ($exit -ne 0) {
                Write-Host "Fallback build command failed (exit code: $exit)" -ForegroundColor Red
            }
        } else {
            Write-Host "No fallback build command available (no build.js). Nothing to run." -ForegroundColor Red
        }
    }

    # Verify build output exists
    $buildDir = Join-Path $scriptDir "build"
    if (Test-Path $buildDir) {
        Write-Host "Build output found at: $buildDir" -ForegroundColor Green
        # Open the folder in explorer for convenience
        Start-Process $buildDir
    } else {
        Write-Host "Build output not found at: $buildDir" -ForegroundColor Yellow
    }

} finally {
    Pop-Location
}

Write-Host ""
Write-Host "=== Build/Release done ===" -ForegroundColor Green
