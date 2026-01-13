# DynamicsCrm.DevKit Strong Name Key Import Script
# This script will prompt for password interactively

# Check if running as Administrator
$isAdmin = ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)

if (-not $isAdmin) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Yellow
    Write-Host " Administrator Privileges Required" -ForegroundColor Yellow
    Write-Host "========================================" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "This script needs Administrator privileges to import the strong-name key." -ForegroundColor Yellow
    Write-Host "Restarting PowerShell with Administrator privileges..." -ForegroundColor Cyan
    Write-Host ""
    Start-Sleep -Seconds 2

    # Re-launch the script with Administrator privileges
    $scriptPath = $MyInvocation.MyCommand.Path
    Start-Process powershell.exe -ArgumentList "-NoProfile -ExecutionPolicy Bypass -File `"$scriptPath`"" -Verb RunAs
    exit
}

Clear-Host

Write-Host ""
Write-Host "╔════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║  DynamicsCrm.DevKit Key Import Script  ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""
Write-Host "[✓] Running with Administrator privileges" -ForegroundColor Green
Write-Host ""

$ProjectRoot = (Resolve-Path "$PSScriptRoot\..").Path

# Step 1: Check if sn.exe is available
Write-Host "──────────────────────────────────────────" -ForegroundColor Gray
Write-Host "[1/4] Checking for sn.exe..." -ForegroundColor Cyan

$snExe = Get-Command sn.exe -ErrorAction SilentlyContinue

if ($null -eq $snExe) {
    Write-Host "      └─ sn.exe not found, initializing VS environment..." -ForegroundColor Yellow

    # Find VsDevCmd.bat
    $vsDevCmd = $null

    # Method 1: Try vswhere (Best for VS2017+)
    $vswherePath = "C:\Program Files (x86)\Microsoft Visual Studio\Installer\vswhere.exe"
    if (Test-Path $vswherePath) {
        $installPath = & $vswherePath -latest -products * -requires Microsoft.Component.MSBuild -property installationPath
        if ($installPath -and (Test-Path $installPath)) {
            $testPath = Join-Path $installPath "Common7\Tools\VsDevCmd.bat"
            if (Test-Path $testPath) {
                $vsDevCmd = $testPath
            }
        }
    }

    # Method 2: Check standard paths if not found
    if (-not $vsDevCmd) {
        $editions = @("Enterprise", "Professional", "Community", "Preview")
        $basePaths = @(
            "C:\Program Files\Microsoft Visual Studio\2026",
            "C:\Program Files (x86)\Microsoft Visual Studio\2026",
            "C:\Program Files\Microsoft Visual Studio\18",
            "C:\Program Files (x86)\Microsoft Visual Studio\18",
            "C:\Program Files\Microsoft Visual Studio\2022",
            "C:\Program Files (x86)\Microsoft Visual Studio\2022"
        )

        foreach ($basePath in $basePaths) {
            foreach ($edition in $editions) {
                $testPath = Join-Path $basePath "$edition\Common7\Tools\VsDevCmd.bat"
                if (Test-Path $testPath) {
                    $vsDevCmd = $testPath
                    break
                }
            }
            if ($vsDevCmd) { break }
        }
    }

    if (-not $vsDevCmd) {
        Write-Host ""
        Write-Host "[✗] ERROR: Could not find VsDevCmd.bat" -ForegroundColor Red
        Write-Host "    Please ensure Visual Studio 2022 or 2026 is installed." -ForegroundColor Red
        Write-Host ""
        Read-Host "Press Enter to exit"
        exit 1
    }

    Write-Host "      └─ Found Visual Studio: $edition edition" -ForegroundColor Gray
    Write-Host "      └─ Initializing environment..." -ForegroundColor Gray

    # Import VS Developer environment
    & "${env:COMSPEC}" /s /c "`"$vsDevCmd`" -no_logo && set" | ForEach-Object {
        $name, $value = $_ -split '=', 2
        if ($name -and $value) {
            Set-Content env:\"$name" $value
        }
    }

    # Re-check for sn.exe
    $snExe = Get-Command sn.exe -ErrorAction SilentlyContinue
    if ($null -eq $snExe) {
        Write-Host ""
        Write-Host "[✗] ERROR: sn.exe not found even after environment initialization" -ForegroundColor Red
        Write-Host "    Please ensure .NET Framework SDK is installed." -ForegroundColor Red
        Write-Host ""
        Read-Host "Press Enter to exit"
        exit 1
    }

    Write-Host "      └─ Environment initialized successfully" -ForegroundColor Green
}

Write-Host "[✓] Found sn.exe" -ForegroundColor Green
Write-Host "    Location: $($snExe.Source)" -ForegroundColor Gray
Write-Host ""

# Step 2: Check if PFX file exists
Write-Host "──────────────────────────────────────────" -ForegroundColor Gray
Write-Host "[2/4] Locating PFX file..." -ForegroundColor Cyan

$pfxPath = Join-Path $ProjectRoot "DynamicsCrm.DevKit.pfx"
if (-not (Test-Path $pfxPath)) {
    Write-Host ""
    Write-Host "[✗] ERROR: DynamicsCrm.DevKit.pfx not found" -ForegroundColor Red
    Write-Host "    Expected location: $pfxPath" -ForegroundColor Red
    Write-Host ""
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "[✓] Found PFX file" -ForegroundColor Green
Write-Host "    Location: $pfxPath" -ForegroundColor Gray
Write-Host ""

# Step 3: Remove existing key container if it exists
Write-Host "──────────────────────────────────────────" -ForegroundColor Gray
Write-Host "[3/4] Cleaning up existing key container..." -ForegroundColor Cyan
Write-Host "      └─ Running: sn -d VS_KEY_500FCB5490AB840C" -ForegroundColor Gray

$deleteOutput = & sn.exe -d VS_KEY_500FCB5490AB840C 2>&1
if ($LASTEXITCODE -eq 0) {
    Write-Host "[✓] Existing key container removed" -ForegroundColor Green
} else {
    Write-Host "[✓] No existing key container (this is normal)" -ForegroundColor Green
}
Write-Host ""

# Step 4: Import the PFX file
Write-Host "──────────────────────────────────────────" -ForegroundColor Gray
Write-Host "[4/4] Importing PFX file..." -ForegroundColor Cyan
Write-Host ""
Write-Host "Executing: sn -i `"DynamicsCrm.DevKit.pfx`" VS_KEY_500FCB5490AB840C" -ForegroundColor Gray
Write-Host ""

# Run import command directly to allow interactive password input
& sn.exe -i "$pfxPath" VS_KEY_500FCB5490AB840C
$importResult = $LASTEXITCODE

Write-Host ""
Write-Host "──────────────────────────────────────────" -ForegroundColor Gray

if ($importResult -eq 0) {
    Write-Host ""
    Write-Host "╔═════════════════════════════════════════════════╗" -ForegroundColor Green
    Write-Host "║ SUCCESS!                                        ║" -ForegroundColor Green
    Write-Host "╠═════════════════════════════════════════════════╣" -ForegroundColor Green
    Write-Host "║  Key imported successfully                      ║" -ForegroundColor Green
    Write-Host "║                                                 ║" -ForegroundColor Green
    Write-Host "║  Container: VS_KEY_500FCB5490AB840C             ║" -ForegroundColor Green
    Write-Host "║                                                 ║" -ForegroundColor Green
    Write-Host "║  Your DynamicsCrm.DevKit projects               ║" -ForegroundColor Green
    Write-Host "║  can now be built with strong-name signing.     ║" -ForegroundColor Green
    Write-Host "╚═════════════════════════════════════════════════╝" -ForegroundColor Green
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "╔════════════════════════════════════════╗" -ForegroundColor Red
    Write-Host "║         IMPORT FAILED                  ║" -ForegroundColor Red
    Write-Host "╠════════════════════════════════════════╣" -ForegroundColor Red
    Write-Host "║  Possible reasons:                     ║" -ForegroundColor Red
    Write-Host "║  • Incorrect password                  ║" -ForegroundColor Red
    Write-Host "║  • PFX file is corrupted               ║" -ForegroundColor Red
    Write-Host "║  • Key already exists                  ║" -ForegroundColor Red
    Write-Host "║  Troubleshooting:                      ║" -ForegroundColor Red
    Write-Host "║  1. Manually delete the key:           ║" -ForegroundColor Red
    Write-Host "║     sn -d VS_KEY_500FCB5490AB840C      ║" -ForegroundColor Red
    Write-Host "║  2. Run this script again              ║" -ForegroundColor Red
    Write-Host "╚════════════════════════════════════════╝" -ForegroundColor Red
    Write-Host ""
}

Write-Host ""
Read-Host "Press Enter to exit"
