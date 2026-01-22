---
description: Build DynamicsCrm.DevKit.Cli project in Debug mode
---

// turbo-all

Build the CLI project, pack it as a .NET tool, and install locally for testing.

## Step 1: Kill Running CLI Process

```powershell
taskkill /F /IM "DynamicsCrm.DevKit.Cli.exe" 2>$null
```

## Step 2: Build CLI Project

```powershell
cd "d:\github\Dynamics-Crm-DevKit\v5"
dotnet build "DynamicsCrm.DevKit.Cli\DynamicsCrm.DevKit.Cli.csproj" --configuration Debug
```

## Step 3: Pack CLI as .NET Tool

```powershell
$Version = "4.12.34.56"
$publishDir = "d:\github\Dynamics-Crm-DevKit\v5\published\$Version"
New-Item -Path $publishDir -ItemType Directory -Force | Out-Null

dotnet pack "DynamicsCrm.DevKit.Cli\DynamicsCrm.DevKit.Cli.csproj" -c Debug -o $publishDir --property:Version=$Version --property:NoWarn=NU5100%3BNU1702%3BCVSTBLD002 --property:SignAssembly=false
```

## Step 4: Uninstall Existing CLI Tool

```powershell
$ToolName = "DynamicsCrm.DevKit.Cli"

# Uninstall if exists
$existingTool = dotnet tool list -g | Select-String -Pattern $ToolName
if ($existingTool) {
    dotnet tool uninstall -g $ToolName
}

# Clean tool store
$toolStorePath = Join-Path $env:USERPROFILE ".dotnet\tools\.store\dynamicscrm.devkit.cli"
if (Test-Path $toolStorePath) {
    Remove-Item $toolStorePath -Recurse -Force -ErrorAction SilentlyContinue
    Start-Sleep -Seconds 1
}

# Clean shim
$shimPath = Join-Path $env:USERPROFILE ".dotnet\tools\devkit.exe"
if (Test-Path $shimPath) {
    Remove-Item $shimPath -Force -ErrorAction SilentlyContinue
}

# Clear NuGet cache
$Version = "4.12.34.56"
$nugetCachedPackage = Join-Path $env:USERPROFILE ".nuget\packages\dynamicscrm.devkit.cli\$Version"
if (Test-Path $nugetCachedPackage) {
    Remove-Item $nugetCachedPackage -Recurse -Force -ErrorAction SilentlyContinue
}
```

## Step 5: Install New CLI Tool

```powershell
$Version = "4.12.34.56"
$publishDir = "d:\github\Dynamics-Crm-DevKit\v5\published\$Version"
$ToolName = "DynamicsCrm.DevKit.Cli"

dotnet tool install -g $ToolName --add-source $publishDir --version $Version
```

## Step 6: Verify Installation

```powershell
devkit --version
```

Expected output: `4.12.34.56 Build dd.MM.yyyy HH:mm:ss`

## Notes

- Debug mode does NOT require PFX signing key
- If install fails, try `dotnet tool update -g DynamicsCrm.DevKit.Cli --add-source $publishDir --version $Version`
- For full solution build, use `/build-debug` workflow instead
