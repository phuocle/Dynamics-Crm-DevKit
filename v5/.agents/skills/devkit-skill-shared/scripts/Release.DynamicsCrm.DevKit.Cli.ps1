param (
    [string]$Version,
    [string]$BuildDate,
    [ValidateSet("Debug", "Release")]
    [string]$Configuration = "Debug",
    [switch]$SkipInstall
)

$ErrorActionPreference = "Stop"

$ProjectRoot = (Get-Item $PSScriptRoot).Parent.Parent.Parent.Parent.FullName
$ConfigFile = Join-Path $PSScriptRoot "DevKit.ReleaseConfig.json"
$Config = Get-Content $ConfigFile -Raw | ConvertFrom-Json

if ([string]::IsNullOrWhiteSpace($Version)) {
    $Version = $Config.version
}

if ([string]::IsNullOrWhiteSpace($BuildDate)) {
    $BuildDate = Get-Date -Format "dd.MM.yyyy HH:mm:ss"
}

$DateFiles = @(
    "DynamicsCrm.DevKit.Shared\Const.cs"
    "ProjectTemplates\CSharp\14.DataverseTestProjectTemplate\README.md"
)
$DatePlaceholder = $Config.placeholders.date
$PublishDir = Join-Path $ProjectRoot "Published\$Version"
$ToolName = "DynamicsCrm.DevKit.Cli"
$PackagePath = Join-Path $PublishDir "DynamicsCrm.DevKit.Cli.$Version.nupkg"
$ManifestPath = Join-Path $PublishDir "DynamicsCrm.DevKit.Cli.$Version.build-manifest.json"

function Invoke-CommandChecked {
    param (
        [string]$FilePath,
        [string[]]$Arguments,
        [string]$ErrorMessage
    )

    & $FilePath @Arguments
    if ($LASTEXITCODE -ne 0) {
        throw "$ErrorMessage Exit code: $LASTEXITCODE"
    }
}

function Get-DevKitProcesses {
    Get-CimInstance Win32_Process |
        Where-Object {
            $_.Name -in @("devkit.exe", "DynamicsCrm.DevKit.Cli.exe", "dotnet.exe") -and
            $_.CommandLine -match "(?i)(devkit(\.exe)?\s+mcp|DynamicsCrm\.DevKit\.Cli|\.dotnet\\tools\\devkit\.exe)"
        }
}

function Stop-DevKitProcesses {
    param ([string]$Reason)

    $processes = @(Get-DevKitProcesses)
    if ($processes.Count -eq 0) {
        Write-Host "No devkit/MCP processes found ($Reason)." -ForegroundColor DarkGray
        return
    }

    Write-Host "Stopping $($processes.Count) devkit/MCP process(es) ($Reason)..." -ForegroundColor Yellow
    foreach ($process in $processes) {
        Write-Host "  PID $($process.ProcessId): $($process.CommandLine)" -ForegroundColor DarkGray
        Stop-Process -Id $process.ProcessId -Force -ErrorAction SilentlyContinue
    }

    for ($i = 0; $i -lt 20; $i++) {
        Start-Sleep -Milliseconds 500
        if (@(Get-DevKitProcesses).Count -eq 0) {
            Write-Host "All devkit/MCP processes stopped." -ForegroundColor Green
            return
        }
    }

    $remaining = @(Get-DevKitProcesses)
    $remainingText = ($remaining | ForEach-Object { "PID $($_.ProcessId): $($_.CommandLine)" }) -join "`n"
    throw "Failed to stop all devkit/MCP processes.`n$remainingText"
}

function Remove-PathWithRetry {
    param ([string]$Path)

    if (-not (Test-Path $Path)) {
        return
    }

    for ($i = 1; $i -le 5; $i++) {
        try {
            Remove-Item -LiteralPath $Path -Recurse -Force -ErrorAction Stop
            return
        }
        catch {
            if ($i -eq 5) { throw }
            Start-Sleep -Seconds 1
        }
    }
}

function Get-FileSha256 {
    param ([string]$Path)

    if ([string]::IsNullOrWhiteSpace($Path) -or -not (Test-Path $Path)) {
        return $null
    }

    return (Get-FileHash -LiteralPath $Path -Algorithm SHA256).Hash
}

function Get-GitText {
    param ([string[]]$Arguments)

    try {
        $output = & git @Arguments 2>$null
        if ($LASTEXITCODE -eq 0) {
            return ($output -join "`n").Trim()
        }
    }
    catch {
    }

    return $null
}

function Get-InstalledCliAssembly {
    $storeRoot = Join-Path $env:USERPROFILE ".dotnet\tools\.store\dynamicscrm.devkit.cli\$Version"
    if (-not (Test-Path $storeRoot)) {
        return $null
    }

    return Get-ChildItem $storeRoot -Recurse -Filter "DynamicsCrm.DevKit.Cli.dll" |
        Where-Object { $_.FullName -match "\\tools\\net10\.0\\any\\" } |
        Select-Object -First 1
}

Write-Host "Version:       $Version" -ForegroundColor Cyan
Write-Host "Build Date:    $BuildDate" -ForegroundColor Cyan
Write-Host "Configuration: $Configuration" -ForegroundColor Cyan

$utf8NoBom = New-Object System.Text.UTF8Encoding $False
$dateFileBackups = @{}

try {
    Stop-DevKitProcesses "before CLI build"

    foreach ($file in $DateFiles) {
        $path = Join-Path $ProjectRoot $file
        $content = [System.IO.File]::ReadAllText($path, $utf8NoBom)
        if (-not $content.Contains($DatePlaceholder)) {
            throw "Build date placeholder not found in $file."
        }

        $dateFileBackups[$path] = [System.IO.File]::ReadAllBytes($path)
        [System.IO.File]::WriteAllText($path, $content.Replace($DatePlaceholder, $BuildDate), $utf8NoBom)
        Write-Host "Updated $file with build date $BuildDate." -ForegroundColor Green
    }

    New-Item -Path $PublishDir -ItemType Directory -Force | Out-Null

    $buildArgs = @(
        "build",
        (Join-Path $ProjectRoot "DynamicsCrm.DevKit.Cli\DynamicsCrm.DevKit.Cli.csproj"),
        "-c", $Configuration,
        "-p:Version=$Version",
        "-p:AssemblyVersion=$Version",
        "-p:FileVersion=$Version"
    )
    Invoke-CommandChecked -FilePath "dotnet" -Arguments $buildArgs -ErrorMessage "dotnet build failed."

    $packArgs = @(
        "pack",
        (Join-Path $ProjectRoot "DynamicsCrm.DevKit.Cli\DynamicsCrm.DevKit.Cli.csproj"),
        "-c", $Configuration,
        "-o", $PublishDir,
        "-p:Version=$Version",
        "-p:AssemblyVersion=$Version",
        "-p:FileVersion=$Version",
        "--no-build"
    )
    Invoke-CommandChecked -FilePath "dotnet" -Arguments $packArgs -ErrorMessage "dotnet pack failed."

    if (-not (Test-Path $PackagePath)) {
        throw "Package was not created: $PackagePath"
    }

    if (-not $SkipInstall) {
        Stop-DevKitProcesses "before CLI install"

        dotnet tool uninstall -g $ToolName 2>$null | Out-Null

        Remove-PathWithRetry (Join-Path $env:USERPROFILE ".dotnet\tools\.store\dynamicscrm.devkit.cli")
        Remove-PathWithRetry (Join-Path $env:USERPROFILE ".dotnet\tools\devkit.exe")
        Remove-PathWithRetry (Join-Path $env:USERPROFILE ".nuget\packages\dynamicscrm.devkit.cli\$Version")

        $installArgs = @(
            "tool", "install",
            "-g", $ToolName,
            "--add-source", $PublishDir,
            "--version", $Version,
            "--no-http-cache"
        )
        Invoke-CommandChecked -FilePath "dotnet" -Arguments $installArgs -ErrorMessage "dotnet tool install failed."
    }

    $devkitVersionOutput = (& devkit --version 2>&1 | Out-String).Trim()
    if ($LASTEXITCODE -ne 0) {
        throw "devkit --version failed. Output: $devkitVersionOutput"
    }

    $installedAssembly = Get-InstalledCliAssembly
    $installedAssemblyPath = if ($installedAssembly) { $installedAssembly.FullName } else { $null }

    Stop-DevKitProcesses "after CLI install"

    $gitStatus = Get-GitText @("status", "--porcelain")
    $manifest = [ordered]@{
        version = $Version
        buildDate = $BuildDate
        configuration = $Configuration
        builtAt = (Get-Date).ToString("o")
        sourceRoot = $ProjectRoot
        gitCommit = Get-GitText @("rev-parse", "HEAD")
        gitDirty = -not [string]::IsNullOrWhiteSpace($gitStatus)
        packagePath = $PackagePath
        packageSha256 = Get-FileSha256 $PackagePath
        installedAssemblyPath = $installedAssemblyPath
        installedAssemblySha256 = Get-FileSha256 $installedAssemblyPath
        devkitVersionOutput = $devkitVersionOutput
        mcpRuntimeVerification = "Optional. Live MCP runtime verification is separate from this CLI release and requires an explicit request."
    }

    $manifest | ConvertTo-Json -Depth 4 | Set-Content -LiteralPath $ManifestPath -Encoding UTF8

    Write-Host ""
    Write-Host "CLI package:   $PackagePath" -ForegroundColor Cyan
    Write-Host "Manifest:      $ManifestPath" -ForegroundColor Cyan
    Write-Host "devkit:        $devkitVersionOutput" -ForegroundColor Cyan
    if ($installedAssemblyPath) {
        Write-Host "Assembly:      $installedAssemblyPath" -ForegroundColor Cyan
        Write-Host "Assembly SHA:  $($manifest.installedAssemblySha256)" -ForegroundColor Cyan
    }
    Write-Host ""
}
finally {
    foreach ($entry in $dateFileBackups.GetEnumerator()) {
        [System.IO.File]::WriteAllBytes($entry.Key, $entry.Value)
        Write-Host "Restored $($entry.Key) to source values." -ForegroundColor Yellow
    }
}

foreach ($file in $DateFiles) {
    $content = Get-Content -LiteralPath (Join-Path $ProjectRoot $file) -Raw
    if (-not ($content.Contains($Version) -and $content.Contains($DatePlaceholder))) {
        throw "Source version or build date placeholder was not restored in $file."
    }
    Write-Host "[x] $file restored successfully." -ForegroundColor Green
}
