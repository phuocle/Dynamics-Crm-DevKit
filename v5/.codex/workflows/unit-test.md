# Unit Tests and Analyzer Coverage

Run both test targets:

```powershell
dotnet test "DynamicsCrm.DevKit.UnitTests\DynamicsCrm.DevKit.UnitTests.csproj" -f net48
dotnet test "DynamicsCrm.DevKit.UnitTests\DynamicsCrm.DevKit.UnitTests.csproj" -f net10.0
```

Generate the Analyzer coverage report:

```powershell
& ".\DynamicsCrm.DevKit.Scripts\Run-Analyzer-Coverage.ps1"
```

`Run-Analyzer-Coverage.ps1` writes the Analyzer report under `DynamicsCrm.DevKit.UnitTests/CoverageReport/`. It does not collect CLI coverage. Report failures separately by target framework and distinguish failures caused by the current change from unrelated baseline failures.
