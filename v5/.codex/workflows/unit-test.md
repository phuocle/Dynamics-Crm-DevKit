# Unit Tests and Analyzer Coverage

Run both test targets:

```powershell
dotnet test "DynamicsCrm.DevKit.UnitTests\DynamicsCrm.DevKit.UnitTests.csproj" -f net48
dotnet test "DynamicsCrm.DevKit.UnitTests\DynamicsCrm.DevKit.UnitTests.csproj" -f net10.0
```

Run the Analyzer tests (separate project):

```powershell
dotnet test "DynamicsCrm.DevKit.Analyzers.UnitTests\DynamicsCrm.DevKit.Analyzers.UnitTests.csproj"
```

Generate the Analyzer coverage report:

```powershell
& ".\DynamicsCrm.DevKit.Scripts\Run-Analyzer-Coverage.ps1"
```

`Run-Analyzer-Coverage.ps1` runs `DynamicsCrm.DevKit.Analyzers.UnitTests` and writes the Analyzer report under `DynamicsCrm.DevKit.Analyzers/CoverageReport/`. It does not collect CLI coverage. Report failures separately by target framework/project and distinguish failures caused by the current change from unrelated baseline failures.
