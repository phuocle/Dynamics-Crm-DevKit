---
description: "Build DynamicsCrm.DevKit.Analyzers project in Debug mode"
---

Build the Analyzers project using `dotnet build` in Debug mode.

## Build Command

```powershell
cd "d:\github\Dynamics-Crm-DevKit\v5"
dotnet build "DynamicsCrm.DevKit.Analyzers\DynamicsCrm.DevKit.Analyzers.csproj" --configuration Debug --no-incremental
```

## Output Location

- DLL: `DynamicsCrm.DevKit.Analyzers\bin\Debug\netstandard2.0\DynamicsCrm.DevKit.Analyzers.dll`

## Run Unit Tests

```powershell
powershell -File "d:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Scripts\Run-Analyzer-Coverage.ps1"
```

## Pack NuGet (Optional)

To create the NuGet package manually:

```powershell
cd "d:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Analyzers\Nuget"
$nugetExe = ".\nuget.exe"
& $nugetExe pack "DynamicsCrm.DevKit.Analyzers.nuspec" -Version "x.xx.xx.xx" -OutputDirectory "..\..\published\x.xx.xx.xx"
```

## Notes

- Analyzers target `netstandard2.0` for Roslyn compatibility
- No signing keys required for any build configuration
- **IMPORTANT**: Close and reopen VS after copying DLL - VS caches analyzers aggressively
- For full solution build with packaging, use `/build-debug` workflow instead
