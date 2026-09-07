# Build Analyzer

Build and verify the analyzer component only.

```powershell
dotnet build "DynamicsCrm.DevKit.Analyzers\DynamicsCrm.DevKit.Analyzers.csproj" --configuration Debug --no-incremental
& ".\DynamicsCrm.DevKit.Scripts\Run-Analyzer-Coverage.ps1"
```

The analyzer targets `netstandard2.0`. Report the build and coverage result. Visual Studio analyzer integration still requires manual user verification.
