# Sync all Source of Truth files to TestClientCode folders
# Run this script to sync the latest devkit files

$ErrorActionPreference = "Continue"

Write-Host ""
Write-Host "============================================="
Write-Host "  SYNCING Source of Truth Files"
Write-Host "============================================="
Write-Host ""

$rootDir = $PSScriptRoot
# Calculate shared directory: TestClientCode -> DynamicsCrm.DevKit.Tests -> v5 -> DynamicsCrm.DevKit.Shared\Resources
$sharedDir = Join-Path (Split-Path (Split-Path $rootDir -Parent) -Parent) "DynamicsCrm.DevKit.Shared\Resources"

Write-Host "Source: $sharedDir" -ForegroundColor DarkGray
Write-Host ""

# =====================================================
# 1. SYNC 5 CORE FILES SOURCE OF TRUTH
# =====================================================

Write-Host "1. Syncing Core Files..." -ForegroundColor Cyan

# devkit.js
$source = Join-Path $sharedDir "js\devkit.js"
$targets = @(
    "01.DevKitJs-UnitTest\lib\devkit.js",
    "03.DevKitJs-AICode\Dev.DevKit.WebResource\lib\devkit.js",
    "05.DevKitJs-Vsix\Dev.DevKit.WebResource\lib\devkit.js"
)
foreach ($target in $targets) {
    $targetPath = Join-Path $rootDir $target
    if (Test-Path $source) {
        Copy-Item -Path $source -Destination $targetPath -Force
        Write-Host "  Copied: devkit.js -> $target" -ForegroundColor Green
    }
}

# devkit.d.ts (for JS projects)
$source = Join-Path $sharedDir "js\devkit.d.ts"
$targets = @(
    "01.DevKitJs-UnitTest\entities\devkit.d.ts",
    "03.DevKitJs-AICode\Dev.DevKit.WebResource\entities\devkit.d.ts",
    "05.DevKitJs-Vsix\Dev.DevKit.WebResource\entities\devkit.d.ts"
)
foreach ($target in $targets) {
    $targetPath = Join-Path $rootDir $target
    if (Test-Path $source) {
        Copy-Item -Path $source -Destination $targetPath -Force
        Write-Host "  Copied: devkit.d.ts -> $target" -ForegroundColor Green
    }
}

# devkit.ts (for TS projects)
$source = Join-Path $sharedDir "ts\devkit.ts"
$targets = @(
    "02.DevKitTs-UnitTest\lib\devkit.ts",
    "04.DevKitTs-AICode\Dev.DevKit.WebResourceTs\lib\devkit.ts",
    "06.DevKitTs-Vsix\Dev.DevKit.WebResourceTs\lib\devkit.ts"
)
foreach ($target in $targets) {
    $targetPath = Join-Path $rootDir $target
    if (Test-Path $source) {
        Copy-Item -Path $source -Destination $targetPath -Force
        Write-Host "  Copied: devkit.ts -> $target" -ForegroundColor Green
    }
}

# devkit.d.ts (for TS projects)
$source = Join-Path $sharedDir "ts\devkit.d.ts"
$targets = @(
    "02.DevKitTs-UnitTest\lib\devkit.d.ts",
    "04.DevKitTs-AICode\Dev.DevKit.WebResourceTs\lib\devkit.d.ts",
    "06.DevKitTs-Vsix\Dev.DevKit.WebResourceTs\lib\devkit.d.ts"
)
foreach ($target in $targets) {
    $targetPath = Join-Path $rootDir $target
    if (Test-Path $source) {
        Copy-Item -Path $source -Destination $targetPath -Force
        Write-Host "  Copied: devkit.d.ts -> $target" -ForegroundColor Green
    }
}

# build.js
$source = Join-Path $sharedDir "ts\build.js"
$targets = @(
    "02.DevKitTs-UnitTest\build.js",
    "04.DevKitTs-AICode\Dev.DevKit.WebResourceTs\build.js",
    "06.DevKitTs-Vsix\Dev.DevKit.WebResourceTs\build.js"
)
foreach ($target in $targets) {
    $targetPath = Join-Path $rootDir $target
    if (Test-Path $source) {
        Copy-Item -Path $source -Destination $targetPath -Force
        Write-Host "  Copied: build.js -> $target" -ForegroundColor Green
    }
}

# tsconfig.json
$source = Join-Path $sharedDir "ts\tsconfig.json"
$targets = @(
    "04.DevKitTs-AICode\Dev.DevKit.WebResourceTs\tsconfig.json",
    "06.DevKitTs-Vsix\Dev.DevKit.WebResourceTs\tsconfig.json"
)
foreach ($target in $targets) {
    $targetPath = Join-Path $rootDir $target
    if (Test-Path $source) {
        Copy-Item -Path $source -Destination $targetPath -Force
        Write-Host "  Copied: tsconfig.json -> $target" -ForegroundColor Green
    }
}

Write-Host ""
Write-Host "============================================="
Write-Host "2. SYNC GENERATED FILES"
Write-Host "============================================="

# JS Generated Files (Account.form.js, Account.webapi.js, Account.d.ts)
# Source: 05.DevKitJs-Vsix
$jsSourceDir = Join-Path $rootDir "05.DevKitJs-Vsix\Dev.DevKit.WebResource\entities"
$jsTargetDirs = @(
    "01.DevKitJs-UnitTest\entities",
    "03.DevKitJs-AICode\Dev.DevKit.WebResource\entities"
)

$jsFiles = @("Account.form.js", "Account.webapi.js", "Account.d.ts")

foreach ($file in $jsFiles) {
    $sourcePath = Join-Path $jsSourceDir $file
    foreach ($targetDir in $jsTargetDirs) {
        $targetPath = Join-Path $rootDir $targetDir
        $targetFile = Join-Path $targetPath $file
        if (Test-Path $sourcePath) {
            Copy-Item -Path $sourcePath -Destination $targetPath -Force
            Write-Host "  Copied: $file -> $targetDir\$file" -ForegroundColor Green
        }
    }
}

# TS Generated Files (Account.form.ts, Account.webapi.ts, OptionSet.ts)
# Source: 06.DevKitTs-Vsix
$tsSourceDir = Join-Path $rootDir "06.DevKitTs-Vsix\Dev.DevKit.WebResourceTs\entities"
$tsTargetDirs = @(
    "02.DevKitTs-UnitTest\entities",
    "04.DevKitTs-AICode\Dev.DevKit.WebResourceTs\entities"
)

$tsFiles = @("Account.form.ts", "Account.webapi.ts", "OptionSet.ts")

foreach ($file in $tsFiles) {
    $sourcePath = Join-Path $tsSourceDir $file
    foreach ($targetDir in $tsTargetDirs) {
        $targetPath = Join-Path $rootDir $targetDir
        $targetFile = Join-Path $targetPath $file
        if (Test-Path $sourcePath) {
            Copy-Item -Path $sourcePath -Destination $targetPath -Force
            Write-Host "  Copied: $file -> $targetDir\$file" -ForegroundColor Green
        }
    }
}

Write-Host ""
Write-Host "============================================="
Write-Host "  SYNC COMPLETE"
Write-Host "============================================="
Write-Host ""
