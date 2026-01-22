---
description: Build DynamicsCrm.DevKit.Analyzers project in Debug mode
---

// turbo-all

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
cd "d:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Analyzers"
.\Run-Analyzer-Coverage.ps1
```

## Copy to VS Test Project (for Integration Testing)

```powershell
Copy-Item -Path "DynamicsCrm.DevKit.Analyzers\bin\Debug\netstandard2.0\DynamicsCrm.DevKit.Analyzers.dll" `
  -Destination "DynamicsCrm.DevKit.Analyzers.Test.Vs\packages\DynamicsCrm.DevKit.Analyzers.4.0.0\analyzers\dotnet\cs\" -Force
```

## Pack NuGet (Optional)

To create the NuGet package manually:

```powershell
cd "d:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Analyzers\Nuget"
$nugetExe = ".\nuget.exe"
& $nugetExe pack "DynamicsCrm.DevKit.Analyzers.nuspec" -Version "4.12.34.56" -OutputDirectory "..\..\published\4.12.34.56"
```

## Notes

- Analyzers target `netstandard2.0` for Roslyn compatibility
- Debug mode does NOT require PFX signing key
- **IMPORTANT**: Close and reopen VS after copying DLL - VS caches analyzers aggressively
- For full solution build with packaging, use `/build-debug` workflow instead
