# Unit Tests and Analyzer Coverage

Run both test targets:

```powershell
dotnet test "DynamicsCrm.DevKit.Cli.UnitTests\DynamicsCrm.DevKit.Cli.UnitTests.csproj" -f net48
dotnet test "DynamicsCrm.DevKit.Cli.UnitTests\DynamicsCrm.DevKit.Cli.UnitTests.csproj" -f net10.0
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

## DynamicsCrm.DevKit.2019.UnitTests (VSIX 2019)

The 2019 VSIX is a legacy non-SDK project; `dotnet test` cannot build it (VSSDK BuildTools targets fail on .NET Core MSBuild). Build with VS MSBuild, then run via `vstest.console`:

```powershell
& "C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe" DynamicsCrm.DevKit.2019.UnitTests\DynamicsCrm.DevKit.2019.UnitTests.csproj -restore -p:Configuration=Debug -v:q -nologo
& "C:\Program Files\Microsoft Visual Studio\18\Professional\Common7\IDE\Extensions\TestPlatform\vstest.console.exe" DynamicsCrm.DevKit.2019.UnitTests\bin\Debug\net472\win\DynamicsCrm.DevKit.2019.UnitTests.dll /collect:"XPlat Code Coverage" /testadapterpath:"$env:USERPROFILE\.nuget\packages\coverlet.collector\6.0.4\build\netstandard2.0"
```

The suite must keep **100% line coverage** of the instrumented code. `DynamicsCrmDevKit2019Package`, `UploadReportCommand`, and `FormLogin` carry `[ExcludeFromCodeCoverage]` because they only run inside a live Visual Studio shell; everything else (`ReportConfigHelper`, `FormReportMapping`, shared models compiled into the assembly) is fully covered — do not let coverage regress.
