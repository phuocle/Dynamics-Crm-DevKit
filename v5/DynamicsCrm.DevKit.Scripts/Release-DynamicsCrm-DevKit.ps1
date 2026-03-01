<#
.SYNOPSIS
    DynamicsCrm.DevKit Release Build Script

.DESCRIPTION
    Builds the DynamicsCrm.DevKit solution, creates NuGet packages, and publishes the VSIX.
    Updates version and date placeholders in source files before building.

    ANNUAL RELEASE: Uses Dec 31 of current year at 23:59:59
    For current date testing, use Release-DynamicsCrm-DevKit-CurrentDate.ps1

.PARAMETER BuildDate
    Optional. The build date string to use. Format: "yyyy.MM.dd HH.mm.ss".
    If not provided, defaults to "31.12.{CurrentYear} 23:59:59" for annual release.

.EXAMPLE
    .\Release-DynamicsCrm-DevKit.ps1
    .\Release-DynamicsCrm-DevKit.ps1 -BuildDate "2025.12.15 10.00.00"
#>
param (
    [string]$BuildDate,
    [string]$Configuration = "Release"
)

$ErrorActionPreference = "Stop"

$ProjectRoot = (Resolve-Path "$PSScriptRoot\..").Path

# --- Configuration ---
# Load configuration from single source of truth
$ConfigFile = Join-Path $PSScriptRoot "DevKit.ReleaseConfig.json"
if (-not (Test-Path $ConfigFile)) {
    throw "Configuration file not found: $ConfigFile"
}

$Config = Get-Content $ConfigFile -Raw | ConvertFrom-Json

# Version - Change this in DevKit.ReleaseConfig.json when releasing a new version
$Version = $Config.version

$SolutionFile = Join-Path $ProjectRoot $Config.buildConfig.solutionFile
$PublishedRoot = Join-Path $ProjectRoot $Config.buildConfig.publishedRoot

# Files to update (loaded from config)
$VersionFiles = $Config.files.versionReplacement
$DateFiles = $Config.files.dateReplacement

# --- Helper Functions ---

function Get-MSBuildPath {
    # User requested only VS 2026 Professional
    # Note: VS 2026 might be installed in a folder named "18" or "2026"
    $paths = @(
        "C:\Program Files\Microsoft Visual Studio\2026\Professional\MSBuild\Current\Bin\MSBuild.exe",
        "C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe"
    )

    foreach ($path in $paths) {
        if (Test-Path $path) {
            return $path
        }
    }

    # Try vswhere as a fallback for non-standard install locations, but filter for 2026 or 18
    $vswhere = "${env:ProgramFiles(x86)}\Microsoft Visual Studio\Installer\vswhere.exe"
    if (Test-Path $vswhere) {
        $foundPath = & $vswhere -latest -products * -requires Microsoft.Component.MSBuild -find MSBuild\**\Bin\MSBuild.exe -prerelease
        if ($foundPath -and (Test-Path $foundPath)) {
             if (($foundPath -like "*2026*") -or ($foundPath -like "*\18\*")) {
                return $foundPath
             }
        }
    }

    throw "MSBuild.exe for Visual Studio 2026 Professional not found. Checked paths: $($paths -join ', ')"
}

function Update-FileContent {
    param ($FilePath, $Version, $Date, $Config, $ProjectRoot)

    $fullPath = Join-Path $ProjectRoot $FilePath
    if (-not (Test-Path $fullPath)) {
        Write-Warning "File not found: $FilePath"
        return $null
    }

    # Use .NET to read/write to avoid PowerShell adding newlines
    $content = [System.IO.File]::ReadAllText($fullPath, [System.Text.Encoding]::UTF8)
    $originalContent = $content

    if ($Version) {
        $versionPattern = [regex]::Escape($Config.placeholders.version)
        $content = $content -replace $versionPattern, $Version
    }
    if ($Date) {
        $datePattern = [regex]::Escape($Config.placeholders.date)
        $content = $content -replace $datePattern, $Date
    }

    if ($content -ne $originalContent) {
        Write-Host "Updating $fullPath..." -ForegroundColor DarkGray
        [System.IO.File]::WriteAllText($fullPath, $content, [System.Text.Encoding]::UTF8)
        return @{ Path = $fullPath; Content = $originalContent }
    }
    return $null
}

function Restore-Files {
    param ($Backups)
    foreach ($backup in $Backups) {
        Write-Host "Restoring $($backup.Path)..." -ForegroundColor DarkGray
        [System.IO.File]::WriteAllText($backup.Path, $backup.Content, [System.Text.Encoding]::UTF8)
    }
}

# --- Main Logic ---

try {
    # 1. Determine Build Date
    # If no BuildDate provided, use Dec 31 of current year (annual release)
    if ([string]::IsNullOrWhiteSpace($BuildDate)) {
        $currentYear = (Get-Date).Year
        $annualConfig = $Config.buildConfig.annualRelease
        $BuildDate = "{0:D2}.{1:D2}.$currentYear {2:D2}:{3:D2}:{4:D2}" -f `
            $annualConfig.day, $annualConfig.month, $annualConfig.hour, $annualConfig.minute, $annualConfig.second
    }

    Write-Host "Version:       $Version" -ForegroundColor Cyan
    Write-Host "Date:          $BuildDate" -ForegroundColor Cyan
    Write-Host "Configuration: $Configuration" -ForegroundColor Cyan

    # 2. Update Placeholders
    Write-Host "`nUpdating placeholders..." -ForegroundColor Yellow
    $backups = @()

    # Get unique list of files
    $allFiles = $VersionFiles + $DateFiles | Select-Object -Unique

    foreach ($file in $allFiles) {
        $v = if ($VersionFiles -contains $file) { $Version } else { $null }
        $d = if ($DateFiles -contains $file) { $BuildDate } else { $null }

        $backup = Update-FileContent -FilePath $file -Version $v -Date $d -Config $Config -ProjectRoot $ProjectRoot
        if ($backup) { $backups += $backup }
    }

    # 3. Restore NuGet Packages
    Write-Host "`nRestoring NuGet packages..." -ForegroundColor Yellow
    $msbuild = Get-MSBuildPath
    Write-Host "Using MSBuild: $msbuild" -ForegroundColor DarkGray

    $restoreArgs = @(
        "$SolutionFile",
        "/t:Restore",
        "/nologo",
        "/v:q" # Quiet verbosity for restore
    )

    & $msbuild $restoreArgs
    if ($LASTEXITCODE -ne 0) { throw "NuGet restore failed with exit code $LASTEXITCODE" }
    Write-Host "Restore Success." -ForegroundColor Green

    # 4. Build Solution
    Get-Process -Name "DynamicsCrm.DevKit.Cli" -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
    $LASTEXITCODE = 0
    Write-Host "`nBuilding Solution ($Configuration)..." -ForegroundColor Yellow

    # Determine Output Directory
    $publishDirName = $Version
    $publishDir = Join-Path $PublishedRoot $publishDirName
    
    # Clean published folder
    if (Test-Path $publishDir) { Remove-Item $publishDir -Recurse -Force }
    New-Item -Path $publishDir -ItemType Directory -Force | Out-Null

    $buildArgs = @(
        "$SolutionFile",
        "/t:Clean;Build",
        "/p:Configuration=$Configuration",
        "/p:Version=$Version",
        "/p:AssemblyVersion=$Version",
        "/p:FileVersion=$Version",
        "/nologo",
        "/v:m" # Minimal verbosity
    )

    & $msbuild $buildArgs
    if ($LASTEXITCODE -ne 0) { throw "Build failed with exit code $LASTEXITCODE" }
    Write-Host "Build Success." -ForegroundColor Green

    # 4b. Ensure VSIX is built (Workaround for SLNX not building VSIX container)
    $vsixCheckPath = Join-Path $ProjectRoot "DynamicsCrm.DevKit\bin\$Configuration\DynamicsCrm.DevKit.vsix"
    if (-not (Test-Path $vsixCheckPath)) {
        Write-Host "VSIX not found after solution build. Building VSIX project explicitly..." -ForegroundColor Yellow
        $vsixProject = Join-Path $ProjectRoot "DynamicsCrm.DevKit\DynamicsCrm.DevKit.csproj"
        $vsixBuildArgs = @(
            "$vsixProject",
            "/t:Build",
            "/p:Configuration=$Configuration",
            "/p:Version=$Version",
            "/p:AssemblyVersion=$Version",
            "/p:FileVersion=$Version",
            "/nologo",
            "/v:m"
        )
        & $msbuild $vsixBuildArgs
        if ($LASTEXITCODE -ne 0) { throw "VSIX Project Build failed with exit code $LASTEXITCODE" }
        Write-Host "VSIX Project Build Success." -ForegroundColor Green
    }

    # 5. Create NuGet Packages
    Write-Host "`nCreating NuGet Packages..." -ForegroundColor Yellow

    # --- CLI: Use dotnet pack (upgraded to .NET tool) ---
    Write-Host "`nPacking CLI with dotnet pack (.NET tool)..." -ForegroundColor Cyan
    $cliProject = Join-Path $ProjectRoot "DynamicsCrm.DevKit.Cli\DynamicsCrm.DevKit.Cli.csproj"
    
    $dotnetPackArgs = @(
        "pack",
        $cliProject,
        "-c", $Configuration,
        "-o", $publishDir,
        "/p:Version=$Version",
        "/p:AssemblyVersion=$Version",
        "/p:FileVersion=$Version",
        "/p:NoWarn=NU5100%3BNU1702%3BCVSTBLD002"
    )
    
    & dotnet $dotnetPackArgs
    if ($LASTEXITCODE -ne 0) { throw "dotnet pack failed for CLI" }
    Write-Host "CLI package created successfully!" -ForegroundColor Green

    # --- Analyzers & Tool: Use nuget pack (legacy .nuspec) ---
    $nugetExe = Join-Path $ProjectRoot "DynamicsCrm.DevKit.Analyzers\Nuget\nuget.exe"
    if (-not (Test-Path $nugetExe)) {
        Write-Host "NuGet.exe not found. Downloading..." -ForegroundColor Yellow
        $nugetDir = Split-Path $nugetExe -Parent
        if (-not (Test-Path $nugetDir)) { New-Item -Path $nugetDir -ItemType Directory -Force | Out-Null }
        Invoke-WebRequest -Uri "https://dist.nuget.org/win-x86-commandline/latest/nuget.exe" -OutFile $nugetExe
        Write-Host "NuGet.exe downloaded successfully!" -ForegroundColor Green
    }

    $nugetPackages = @(
        @{ Dir = "DynamicsCrm.DevKit.Analyzers\Nuget"; Nuspec = "DynamicsCrm.DevKit.Analyzers.nuspec" },
        @{ Dir = "DynamicsCrm.DevKit.Tool\Nuget"; Nuspec = "DynamicsCrm.DevKit.Tool.nuspec" }
    )

    foreach ($pkg in $nugetPackages) {
        $dir = Join-Path $ProjectRoot $pkg.Dir
        $nuspec = $pkg.Nuspec

        Write-Host "Packing $nuspec in $dir..." -ForegroundColor DarkGray

        Push-Location $dir
        try {
            # Remove old nupkg files to avoid confusion
            Get-ChildItem -Filter "*.nupkg" | Remove-Item -Force -ErrorAction SilentlyContinue

            $packArgs = @(
                "pack",
                $nuspec,
                "-Version", $Version,
                "-OutputDirectory", $publishDir,
                "-NoPackageAnalysis",
                "-Properties", "Configuration=$Configuration"
            )

            & $nugetExe $packArgs
            if ($LASTEXITCODE -ne 0) { throw "NuGet pack failed for $nuspec" }
        }
        finally {
            Pop-Location
        }
    }

    # 6. Copy VSIX
    Write-Host "`nCopying VSIX..." -ForegroundColor Yellow
    $vsixSource = Join-Path $ProjectRoot "DynamicsCrm.DevKit\bin\$Configuration\DynamicsCrm.DevKit.vsix"
    if (Test-Path $vsixSource) {
        $vsixDestName = "DynamicsCrm.DevKit.$Version.vsix"
        $vsixDest = Join-Path $publishDir $vsixDestName
        Copy-Item $vsixSource $vsixDest -Force
        Write-Host "Copied VSIX to $vsixDest" -ForegroundColor Green
    } else {
        # Warning only for Debug, Error for Release
        if ($Configuration -eq "Debug") {
            Write-Warning "VSIX file not found at $vsixSource (expected only if VSIX project is built)"
        } else {
             throw "VSIX file not found at $vsixSource"
        }
    }
    
    # 7. Install CLI (Always)
    Write-Host "`nInstalling CLI Locally..." -ForegroundColor Yellow
    $ToolName = "DynamicsCrm.DevKit.Cli"
        
        # Determine nupkg path (it is in publishDir)
        $NupkgPath = $publishDir
        
        # Uninstall existing
        $existingTool = dotnet tool list -g | Select-String -Pattern $ToolName
        if ($existingTool) {
            Write-Host "Uninstalling existing tool..." -ForegroundColor DarkGray
             dotnet tool uninstall -g $ToolName
        }

        # Force clean the tool store to prevent corruption
        $toolStorePath = Join-Path $env:USERPROFILE ".dotnet\tools\.store\dynamicscrm.devkit.cli"
        if (Test-Path $toolStorePath) {
            Write-Host "Force cleaning tool store at $toolStorePath..." -ForegroundColor DarkGray
            Remove-Item $toolStorePath -Recurse -Force -ErrorAction SilentlyContinue
            Start-Sleep -Seconds 1
        }
        
        # Force clean the shim to prevent 'command conflicts'
        $shimPath = Join-Path $env:USERPROFILE ".dotnet\tools\devkit.exe"
        if (Test-Path $shimPath) {
             Write-Host "Force cleaning shim at $shimPath..." -ForegroundColor DarkGray
             Remove-Item $shimPath -Force -ErrorAction SilentlyContinue
        }

        # Clear NuGet cache for this version to ensure we get the latest build
        $nugetCachedPackage = Join-Path $env:USERPROFILE ".nuget\packages\dynamicscrm.devkit.cli\$Version"
        if (Test-Path $nugetCachedPackage) {
             Write-Host "Removing cached package at $nugetCachedPackage..." -ForegroundColor DarkGray
             Remove-Item $nugetCachedPackage -Recurse -Force -ErrorAction SilentlyContinue
        }

        # Install new
        Write-Host "Installing new version..." -ForegroundColor DarkGray
        $installArgs = @(
            "tool", "install",
            "-g", $ToolName,
            "--add-source", $NupkgPath,
            "--version", $Version
        )
        & dotnet $installArgs
        if ($LASTEXITCODE -ne 0) { 
            # Try update if install fails
            Write-Host "Install failed (exit code $LASTEXITCODE), trying update..." -ForegroundColor Yellow
            $updateArgs = @(
                "tool", "update",
                "-g", $ToolName,
                "--add-source", $NupkgPath,
                "--version", $Version
            )
            & dotnet $updateArgs
            if ($LASTEXITCODE -ne 0) { 
               Write-Warning "Failed to install/update CLI tool. Exit code: $LASTEXITCODE" 
            } else {
               Write-Host "CLI updated successfully!" -ForegroundColor Green
               Write-Host "Run 'devkit --version' to verify." -ForegroundColor Cyan
            }
        } else {
            Write-Host "CLI installed successfully!" -ForegroundColor Green
            Write-Host "Run 'devkit --version' to verify." -ForegroundColor Cyan
        }

    Write-Host "`nRelease completed successfully!" -ForegroundColor Green

    # Verify installation
    Write-Host "Verifying installation:" -ForegroundColor DarkGray
    dotnet tool list -g
}
catch {
    Write-Error $_.Exception.Message
    exit 1
}
finally {
    # 6. Revert Placeholders
    if ($backups.Count -gt 0) {
        Write-Host "`nReverting placeholders..." -ForegroundColor Yellow
        Restore-Files -Backups $backups
    }
}
