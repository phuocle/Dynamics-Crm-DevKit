# Build VSIX - DynamicsCrm.DevKit

Build the VSIX project using MSBuild in Debug mode.

## Prerequisites

- Visual Studio 2026 Professional must be installed
- MSBuild path: `C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe`

## Build Command

```powershell
cd "d:\github\Dynamics-Crm-DevKit\v5"
$msbuild = "C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe"
& $msbuild "DynamicsCrm.DevKit\DynamicsCrm.DevKit.csproj" /t:Build /p:Configuration=Debug /v:m
```

## Output Location

- VSIX: `DynamicsCrm.DevKit\bin\Debug\DynamicsCrm.DevKit.vsix`

## Notes

- VSIX projects MUST use MSBuild, NOT `dotnet build`
- No signing keys required for any build configuration
- For full solution build with packaging, use `/build-debug` workflow instead