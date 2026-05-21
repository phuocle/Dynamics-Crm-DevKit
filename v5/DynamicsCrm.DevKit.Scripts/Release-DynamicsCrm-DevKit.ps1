<#
.SYNOPSIS
    DynamicsCrm.DevKit package build script.

.DESCRIPTION
    Builds the package outputs, creates NuGet packages, publishes the VSIX, and
    installs the local CLI/Tool packages for verification.

    Build-time source replacement is limited to build date placeholders. Version
    values are stable in source and are changed only by Change-Version.ps1.

.PARAMETER BuildDate
    Optional build date string. Format: "dd.MM.yyyy HH:mm:ss".
    If not provided, the release date is derived from DevKit.ReleaseConfig.json.

.PARAMETER Clean
    Optional. Uses Clean;Build for MSBuild projects. By default the script uses
    Build to avoid unnecessary rebuild work.

.EXAMPLE
    .\Release-DynamicsCrm-DevKit.ps1
    .\Release-DynamicsCrm-DevKit.ps1 -BuildDate "21.05.2026 10:00:00"
    .\Release-DynamicsCrm-DevKit.ps1 -Clean
#>
param (
    [string]$BuildDate,
    [string]$Configuration = "Release",
    [switch]$Clean
)

$ErrorActionPreference = "Stop"

$ProjectRoot = (Resolve-Path "$PSScriptRoot\..").Path
$ConfigFile = Join-Path $PSScriptRoot "DevKit.ReleaseConfig.json"
if (-not (Test-Path $ConfigFile)) {
    throw "Configuration file not found: $ConfigFile"
}

$Config = Get-Content $ConfigFile -Raw | ConvertFrom-Json
$Version = $Config.version
$PublishedRoot = Join-Path $ProjectRoot $Config.buildConfig.publishedRoot
$DateFiles = @($Config.files.dateReplacement)

function Get-MSBuildPath {
    $paths = @(
        "C:\Program Files\Microsoft Visual Studio\2026\Professional\MSBuild\Current\Bin\MSBuild.exe",
        "C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe"
    )

    foreach ($path in $paths) {
        if (Test-Path $path) {
            return $path
        }
    }

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

function Get-ConfiguredBuildDate {
    param ($Config)

    $currentYear = (Get-Date).Year
    $annualConfig = $Config.buildConfig.annualRelease
    if (-not $annualConfig) {
        throw "buildConfig.annualRelease is missing from DevKit.ReleaseConfig.json"
    }

    return "{0:D2}.{1:D2}.$currentYear {2:D2}:{3:D2}:{4:D2}" -f `
        $annualConfig.day, $annualConfig.month, $annualConfig.hour, $annualConfig.minute, $annualConfig.second
}

function Assert-ReplacementScope {
    param ($Files)

    $blockedPattern = '(^|[\\/])(DynamicsCrm\.DevKit\.Tests|DynamicsCrm\.DevKit\.UnitTests|Coverage|bin|obj|Published)([\\/]|$)'
    $blockedFiles = @($Files | Where-Object { $_ -match $blockedPattern })
    if ($blockedFiles.Count -gt 0) {
        throw "Build-time replacement list contains files outside the build scope:`n$($blockedFiles -join "`n")"
    }
}

function Assert-ReplacedFilesClean {
    param ($Files, $ProjectRoot)

    $dirtyFiles = @()
    foreach ($file in $Files) {
        $status = & git -C $ProjectRoot status --porcelain -- $file 2>$null
        if (-not [string]::IsNullOrWhiteSpace(($status -join "`n"))) {
            $dirtyFiles += $file
        }
    }

    if ($dirtyFiles.Count -gt 0) {
        throw "Build-time replacement files must be clean before build because the script restores them with git restore after build. Dirty files:`n$($dirtyFiles -join "`n")"
    }
}

function Write-AllTextWithRetry {
    param ($FilePath, $Content, $Encoding)

    for ($attempt = 1; $attempt -le 5; $attempt++) {
        try {
            [System.IO.File]::WriteAllText($FilePath, $Content, $Encoding)
            return
        }
        catch {
            if ($attempt -eq 5) { throw }
            Start-Sleep -Milliseconds (250 * $attempt)
        }
    }
}

function Update-DatePlaceholder {
    param ($FilePath, $Date, $Config, $ProjectRoot)

    $fullPath = Join-Path $ProjectRoot $FilePath
    if (-not (Test-Path $fullPath)) {
        Write-Warning "File not found: $FilePath"
        return $false
    }

    $content = [System.IO.File]::ReadAllText($fullPath, [System.Text.Encoding]::UTF8)
    $originalContent = $content
    $datePattern = [regex]::Escape($Config.placeholders.date)
    $content = $content -replace $datePattern, $Date

    if ($content -ne $originalContent) {
        Write-Host "Updating $FilePath..." -ForegroundColor DarkGray
        $utf8NoBom = New-Object System.Text.UTF8Encoding $false
        Write-AllTextWithRetry -FilePath $fullPath -Content $content -Encoding $utf8NoBom
        return $true
    }

    return $false
}

function Restore-ReplacedFilesFromGit {
    param ($Files, $ProjectRoot)

    $filesToRestore = @($Files | Where-Object { -not [string]::IsNullOrWhiteSpace($_) } | Select-Object -Unique)
    if ($filesToRestore.Count -eq 0) {
        return
    }

    Write-Host "Restoring $($filesToRestore.Count) build-time replacement file(s)..." -ForegroundColor DarkGray
    & git -C $ProjectRoot restore -- $filesToRestore
    if ($LASTEXITCODE -ne 0) {
        throw "git restore failed for build-time replacement files"
    }
}

function Stop-DevKitProcesses {
    Write-Host "Killing running CLI/devkit processes (MCP server)..." -ForegroundColor Yellow
    $killed = 0

    foreach ($name in @("DynamicsCrm.DevKit.Cli", "devkit")) {
        $procs = Get-Process -Name $name -ErrorAction SilentlyContinue
        if ($procs) {
            $procs | Stop-Process -Force -ErrorAction SilentlyContinue
            $killed += $procs.Count
        }
    }

    Get-Process -Name "dotnet" -ErrorAction SilentlyContinue | ForEach-Object {
        try {
            $cmdline = (Get-CimInstance Win32_Process -Filter "ProcessId=$($_.Id)" -ErrorAction SilentlyContinue).CommandLine
            if ($cmdline -match "devkit|DynamicsCrm\.DevKit\.Cli") {
                Stop-Process -Id $_.Id -Force -ErrorAction SilentlyContinue
                $killed++
            }
        } catch {}
    }

    if ($killed -gt 0) {
        Write-Host "$killed CLI/devkit process(es) killed." -ForegroundColor Green
        Start-Sleep -Seconds 1
    } else {
        Write-Host "No CLI/devkit processes found." -ForegroundColor DarkGray
    }
}

$filesToRestore = @()

try {
    Stop-DevKitProcesses

    if ([string]::IsNullOrWhiteSpace($BuildDate)) {
        $BuildDate = Get-ConfiguredBuildDate -Config $Config
    }

    Write-Host "Version:       $Version" -ForegroundColor Cyan
    Write-Host "Date:          $BuildDate" -ForegroundColor Cyan
    Write-Host "Configuration: $Configuration" -ForegroundColor Cyan
    Write-Host "Clean:         $Clean" -ForegroundColor Cyan

    Write-Host "`nUpdating date placeholders..." -ForegroundColor Yellow
    $dateFilesToReplace = @($DateFiles | Where-Object { -not [string]::IsNullOrWhiteSpace($_) } | Select-Object -Unique)
    Assert-ReplacementScope -Files $dateFilesToReplace
    Assert-ReplacedFilesClean -Files $dateFilesToReplace -ProjectRoot $ProjectRoot
    $filesToRestore = $dateFilesToReplace

    foreach ($file in $dateFilesToReplace) {
        Update-DatePlaceholder -FilePath $file -Date $BuildDate -Config $Config -ProjectRoot $ProjectRoot | Out-Null
    }

    $msbuild = Get-MSBuildPath
    Write-Host "Using MSBuild: $msbuild" -ForegroundColor DarkGray

    $analyzerProject = Join-Path $ProjectRoot "DynamicsCrm.DevKit.Analyzers\DynamicsCrm.DevKit.Analyzers.csproj"
    $vsixProject = Join-Path $ProjectRoot "DynamicsCrm.DevKit\DynamicsCrm.DevKit.csproj"
    $cliProject = Join-Path $ProjectRoot "DynamicsCrm.DevKit.Cli\DynamicsCrm.DevKit.Cli.csproj"
    $toolProject = Join-Path $ProjectRoot "DynamicsCrm.DevKit.Tool\DynamicsCrm.DevKit.Tool.csproj"

    Write-Host "`nRestoring package projects..." -ForegroundColor Yellow
    $projectRestoreArgs = @("/t:Restore", "/nologo", "/v:q")

    & $msbuild $analyzerProject $projectRestoreArgs
    if ($LASTEXITCODE -ne 0) { throw "Analyzer restore failed with exit code $LASTEXITCODE" }

    & $msbuild $vsixProject $projectRestoreArgs
    if ($LASTEXITCODE -ne 0) { throw "VSIX restore failed with exit code $LASTEXITCODE" }

    & dotnet restore $cliProject --verbosity quiet
    if ($LASTEXITCODE -ne 0) { throw "CLI restore failed with exit code $LASTEXITCODE" }

    & dotnet restore $toolProject --verbosity quiet
    if ($LASTEXITCODE -ne 0) { throw "Tool restore failed with exit code $LASTEXITCODE" }
    Write-Host "Restore Success." -ForegroundColor Green

    Get-Process -Name "DynamicsCrm.DevKit.Cli" -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
    Get-Process -Name "devkit" -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
    $LASTEXITCODE = 0
    Write-Host "`nBuilding package projects ($Configuration)..." -ForegroundColor Yellow

    $publishDirName = $Version
    $publishDir = Join-Path $PublishedRoot $publishDirName
    if (Test-Path $publishDir) { Remove-Item $publishDir -Recurse -Force }
    New-Item -Path $publishDir -ItemType Directory -Force | Out-Null

    $buildTarget = if ($Clean) { "Clean;Build" } else { "Build" }

    $analyzerBuildArgs = @(
        "$analyzerProject",
        "/t:$buildTarget",
        "/p:Configuration=$Configuration",
        "/p:Version=$Version",
        "/p:AssemblyVersion=$Version",
        "/p:FileVersion=$Version",
        "/nologo",
        "/v:m"
    )

    & $msbuild $analyzerBuildArgs
    if ($LASTEXITCODE -ne 0) { throw "Analyzer build failed with exit code $LASTEXITCODE" }
    Write-Host "Analyzer build Success." -ForegroundColor Green

    $vsixBuildArgs = @(
        "$vsixProject",
        "/t:$buildTarget",
        "/p:Configuration=$Configuration",
        "/p:Version=$Version",
        "/p:AssemblyVersion=$Version",
        "/p:FileVersion=$Version",
        "/p:DeployExtension=false",
        "/nologo",
        "/v:m"
    )

    & $msbuild $vsixBuildArgs
    if ($LASTEXITCODE -ne 0) { throw "VSIX Project Build failed with exit code $LASTEXITCODE" }
    Write-Host "VSIX Project Build Success." -ForegroundColor Green

    Write-Host "`nCreating NuGet Packages..." -ForegroundColor Yellow

    Write-Host "`nPacking CLI with dotnet pack (.NET tool)..." -ForegroundColor Cyan
    $dotnetPackArgs = @(
        "pack",
        $cliProject,
        "-c", $Configuration,
        "-o", $publishDir,
        "--no-restore",
        "/p:Version=$Version",
        "/p:AssemblyVersion=$Version",
        "/p:FileVersion=$Version",
        "/p:NoWarn=NU5100%3BNU1702%3BCVSTBLD002"
    )

    & dotnet $dotnetPackArgs
    $cliPackagePath = Join-Path $publishDir "DynamicsCrm.DevKit.Cli.$Version.nupkg"
    if ($LASTEXITCODE -ne 0 -or -not (Test-Path $cliPackagePath)) { throw "dotnet pack failed for CLI" }
    Write-Host "CLI package created successfully!" -ForegroundColor Green

    Write-Host "`nPacking Tool with dotnet pack (.NET global tool)..." -ForegroundColor Cyan
    $dotnetPackToolArgs = @(
        "pack",
        $toolProject,
        "-c", $Configuration,
        "-o", $publishDir,
        "--no-restore",
        "/p:Version=$Version",
        "/p:AssemblyVersion=$Version",
        "/p:FileVersion=$Version",
        "/p:NoWarn=NU5100%3BSYSLIB0041"
    )

    & dotnet $dotnetPackToolArgs
    $toolPackagePath = Join-Path $publishDir "DynamicsCrm.DevKit.Tool.$Version.nupkg"
    if ($LASTEXITCODE -ne 0 -or -not (Test-Path $toolPackagePath)) { throw "dotnet pack failed for Tool" }
    Write-Host "Tool package created successfully!" -ForegroundColor Green

    $nugetExe = Join-Path $ProjectRoot "DynamicsCrm.DevKit.Analyzers\Nuget\nuget.exe"
    if (-not (Test-Path $nugetExe)) {
        Write-Host "NuGet.exe not found. Downloading..." -ForegroundColor Yellow
        $nugetDir = Split-Path $nugetExe -Parent
        if (-not (Test-Path $nugetDir)) { New-Item -Path $nugetDir -ItemType Directory -Force | Out-Null }
        Invoke-WebRequest -Uri "https://dist.nuget.org/win-x86-commandline/latest/nuget.exe" -OutFile $nugetExe
        Write-Host "NuGet.exe downloaded successfully!" -ForegroundColor Green
    }

    $nugetPackages = @(
        @{ Dir = "DynamicsCrm.DevKit.Analyzers\Nuget"; Nuspec = "DynamicsCrm.DevKit.Analyzers.nuspec" }
    )

    foreach ($pkg in $nugetPackages) {
        $dir = Join-Path $ProjectRoot $pkg.Dir
        $nuspec = $pkg.Nuspec

        Write-Host "Packing $nuspec in $dir..." -ForegroundColor DarkGray

        Push-Location $dir
        try {
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

    Write-Host "`nCopying VSIX..." -ForegroundColor Yellow
    $vsixSource = Join-Path $ProjectRoot "DynamicsCrm.DevKit\bin\$Configuration\DynamicsCrm.DevKit.vsix"
    if (Test-Path $vsixSource) {
        $vsixDestName = "DynamicsCrm.DevKit.$Version.vsix"
        $vsixDest = Join-Path $publishDir $vsixDestName
        Copy-Item $vsixSource $vsixDest -Force
        Write-Host "Copied VSIX to $vsixDest" -ForegroundColor Green
    } else {
        if ($Configuration -eq "Debug") {
            Write-Warning "VSIX file not found at $vsixSource (expected only if VSIX project is built)"
        } else {
            throw "VSIX file not found at $vsixSource"
        }
    }

    Write-Host "`nInstalling CLI Locally..." -ForegroundColor Yellow
    $cliToolName = "DynamicsCrm.DevKit.Cli"
    $nupkgPath = $publishDir

    $existingTool = dotnet tool list -g | Select-String -Pattern $cliToolName
    if ($existingTool) {
        Write-Host "Uninstalling existing CLI tool..." -ForegroundColor DarkGray
        dotnet tool uninstall -g $cliToolName
    }

    $toolStorePath = Join-Path $env:USERPROFILE ".dotnet\tools\.store\dynamicscrm.devkit.cli"
    if (Test-Path $toolStorePath) {
        Write-Host "Force cleaning tool store at $toolStorePath..." -ForegroundColor DarkGray
        Remove-Item $toolStorePath -Recurse -Force -ErrorAction SilentlyContinue
    }

    $shimPath = Join-Path $env:USERPROFILE ".dotnet\tools\devkit.exe"
    if (Test-Path $shimPath) {
        Write-Host "Force cleaning shim at $shimPath..." -ForegroundColor DarkGray
        Remove-Item $shimPath -Force -ErrorAction SilentlyContinue
    }

    $nugetCachedPackage = Join-Path $env:USERPROFILE ".nuget\packages\dynamicscrm.devkit.cli\$Version"
    if (Test-Path $nugetCachedPackage) {
        Write-Host "Removing cached package at $nugetCachedPackage..." -ForegroundColor DarkGray
        Remove-Item $nugetCachedPackage -Recurse -Force -ErrorAction SilentlyContinue
    }

    Write-Host "Installing new CLI version..." -ForegroundColor DarkGray
    $installArgs = @(
        "tool", "install",
        "-g", $cliToolName,
        "--add-source", $nupkgPath,
        "--version", $Version
    )
    & dotnet $installArgs
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Install failed (exit code $LASTEXITCODE), trying update..." -ForegroundColor Yellow
        $updateArgs = @(
            "tool", "update",
            "-g", $cliToolName,
            "--add-source", $nupkgPath,
            "--version", $Version
        )
        & dotnet $updateArgs
        if ($LASTEXITCODE -ne 0) {
            Write-Warning "Failed to install/update CLI tool. Exit code: $LASTEXITCODE"
        } else {
            Write-Host "CLI updated successfully!" -ForegroundColor Green
        }
    } else {
        Write-Host "CLI installed successfully!" -ForegroundColor Green
    }

    Write-Host "`nInstalling Tool Locally..." -ForegroundColor Yellow
    $toolToolName = "DynamicsCrm.DevKit.Tool"

    $existingDevkitTool = dotnet tool list -g | Select-String -Pattern $toolToolName
    if ($existingDevkitTool) {
        Write-Host "Uninstalling existing Tool..." -ForegroundColor DarkGray
        dotnet tool uninstall -g $toolToolName
    }

    $toolToolStorePath = Join-Path $env:USERPROFILE ".dotnet\tools\.store\dynamicscrm.devkit.tool"
    if (Test-Path $toolToolStorePath) {
        Write-Host "Force cleaning tool store at $toolToolStorePath..." -ForegroundColor DarkGray
        Remove-Item $toolToolStorePath -Recurse -Force -ErrorAction SilentlyContinue
    }

    $toolShimPath = Join-Path $env:USERPROFILE ".dotnet\tools\devkit-tool.exe"
    if (Test-Path $toolShimPath) {
        Write-Host "Force cleaning shim at $toolShimPath..." -ForegroundColor DarkGray
        Remove-Item $toolShimPath -Force -ErrorAction SilentlyContinue
    }

    $toolCachedPackage = Join-Path $env:USERPROFILE ".nuget\packages\dynamicscrm.devkit.tool\$Version"
    if (Test-Path $toolCachedPackage) {
        Write-Host "Removing cached package at $toolCachedPackage..." -ForegroundColor DarkGray
        Remove-Item $toolCachedPackage -Recurse -Force -ErrorAction SilentlyContinue
    }

    Write-Host "Installing new Tool version..." -ForegroundColor DarkGray
    $toolInstallArgs = @(
        "tool", "install",
        "-g", $toolToolName,
        "--add-source", $nupkgPath,
        "--version", $Version
    )
    & dotnet $toolInstallArgs
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Install failed (exit code $LASTEXITCODE), trying update..." -ForegroundColor Yellow
        $toolUpdateArgs = @(
            "tool", "update",
            "-g", $toolToolName,
            "--add-source", $nupkgPath,
            "--version", $Version
        )
        & dotnet $toolUpdateArgs
        if ($LASTEXITCODE -ne 0) {
            Write-Warning "Failed to install/update Tool. Exit code: $LASTEXITCODE"
        } else {
            Write-Host "Tool updated successfully!" -ForegroundColor Green
        }
    } else {
        Write-Host "Tool installed successfully!" -ForegroundColor Green
    }

    Write-Host "`nRelease completed successfully!" -ForegroundColor Green

    Write-Host "`nVerifying installation:" -ForegroundColor DarkGray
    Write-Host "--- devkit (CLI) ---" -ForegroundColor Cyan
    devkit --version
    Write-Host "--- devkit-tool (Tool) ---" -ForegroundColor Cyan
    devkit-tool --help
    Write-Host "`n--- Global Tools List ---" -ForegroundColor Cyan
    dotnet tool list -g
}
catch {
    Write-Error $_.Exception.Message
    exit 1
}
finally {
    if ($filesToRestore.Count -gt 0) {
        Write-Host "`nRestoring build-time replacement files from git..." -ForegroundColor Yellow
        Restore-ReplacedFilesFromGit -Files $filesToRestore -ProjectRoot $ProjectRoot
    }
}
