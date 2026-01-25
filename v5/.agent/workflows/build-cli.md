---
description: Build DynamicsCrm.DevKit.Cli project in Debug mode
---

// turbo-all

Build the CLI project, pack it as a .NET tool, and install locally for testing.

## Step 1: Kill Running CLI Process

```powershell
Stop-Process -Name "DynamicsCrm.DevKit.Cli" -Force -ErrorAction SilentlyContinue
```

## Step 2: Build CLI Project

```powershell
Set-Location "d:\github\Dynamics-Crm-DevKit\v5"
dotnet build "DynamicsCrm.DevKit.Cli\DynamicsCrm.DevKit.Cli.csproj" --configuration Debug
```

## Step 3: Pack CLI as .NET Tool

```powershell
$Version = "4.12.34.56"
$publishDir = "d:\github\Dynamics-Crm-DevKit\v5\published\$Version"
New-Item -Path $publishDir -ItemType Directory -Force | Out-Null

# Explicitly set AssemblyVersion and FileVersion to ensure 'devkit --version' reports correctly
dotnet pack "DynamicsCrm.DevKit.Cli\DynamicsCrm.DevKit.Cli.csproj" -c Debug -o $publishDir -p:Version=$Version -p:AssemblyVersion=$Version -p:FileVersion=$Version -p:SignAssembly=false
```

## Step 4: Uninstall Existing CLI Tool

```powershell
$ToolName = "DynamicsCrm.DevKit.Cli"
dotnet tool uninstall -g $ToolName
if ($LASTEXITCODE -ne 0) { Write-Host "Tool not installed or failed to uninstall" }

# Clean tool store and cache
$Version = "4.12.34.56"
Remove-Item -Path "$env:USERPROFILE\.dotnet\tools\.store\dynamicscrm.devkit.cli" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "$env:USERPROFILE\.dotnet\tools\devkit.exe" -Force -ErrorAction SilentlyContinue
Remove-Item -Path "$env:USERPROFILE\.nuget\packages\dynamicscrm.devkit.cli\$Version" -Recurse -Force -ErrorAction SilentlyContinue
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
# Use full path to avoid PATH update issues
& "$env:USERPROFILE\.dotnet\tools\devkit.exe" --version
```

Expected output: `4.12.34.56 Build xxx.yy.zz...`

## Notes

- Debug mode does NOT require PFX signing key
- For full solution build, use `/build-debug` workflow instead
