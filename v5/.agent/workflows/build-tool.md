---
description: Build DynamicsCrm.DevKit.Tool project in Debug mode
---

// turbo-all

Build the Tool project using MSBuild in Debug mode.

## Prerequisites

- Visual Studio 2026 Professional must be installed
- MSBuild path: `C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe`

## Build Command

```powershell
cd "d:\github\Dynamics-Crm-DevKit\v5"
$msbuild = "C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe"
& $msbuild "DynamicsCrm.DevKit.Tool\DynamicsCrm.DevKit.Tool.csproj" /t:Build /p:Configuration=Debug /v:m
```

## Output Location

- DLL: `DynamicsCrm.DevKit.Tool\bin\Debug\DynamicsCrm.DevKit.Tool.dll`

## Pack NuGet (Optional)

To create the NuGet package manually:

```powershell
cd "d:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Tool\Nuget"
$nugetExe = "d:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Analyzers\Nuget\nuget.exe"
& $nugetExe pack "DynamicsCrm.DevKit.Tool.nuspec" -Version "4.12.34.56" -OutputDirectory "..\..\published\4.12.34.56"
```

## Notes

- Debug mode does NOT require any signing keys
- Tool package uses legacy `.nuspec` for NuGet packaging
- For full solution build with packaging, use `/build-debug` workflow instead
