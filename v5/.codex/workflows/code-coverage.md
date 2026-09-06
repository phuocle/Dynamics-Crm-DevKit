# Code Coverage

"Run code coverage" means: run the unit tests (report pass/fail exactly like `unit-test.md`) AND collect code coverage for the tested assemblies. Coverage is measured as three metric types: **line**, **branch**, and **method**.

SDK test projects use the `coverlet.collector` "XPlat Code Coverage" data collector. Projects with a `coverlet.runsettings` define their include filter and output formats (cobertura, json, lcov, opencover); `DynamicsCrm.DevKit.Tool.UnitTests` has no runsettings and uses the collector default (cobertura). Results land under each test project's `TestResults\<guid>\coverage.cobertura.xml`. Which assembly is measured is decided by the `Include` filter in each project's runsettings.

```powershell
dotnet test "DynamicsCrm.DevKit.Cli.UnitTests\DynamicsCrm.DevKit.Cli.UnitTests.csproj" -f net10.0 --settings "DynamicsCrm.DevKit.Cli.UnitTests\coverlet.runsettings"
dotnet test "DynamicsCrm.DevKit.Tool.UnitTests\DynamicsCrm.DevKit.Tool.UnitTests.csproj" --collect:"XPlat Code Coverage"
dotnet test "DynamicsCrm.DevKit.UnitTests\DynamicsCrm.DevKit.UnitTests.csproj" -f net10.0 --settings "DynamicsCrm.DevKit.UnitTests\coverlet.runsettings"
dotnet test "DynamicsCrm.DevKit.Analyzers.UnitTests\DynamicsCrm.DevKit.Analyzers.UnitTests.csproj" --settings "DynamicsCrm.DevKit.Analyzers.UnitTests\coverlet.runsettings"
```

`DynamicsCrm.DevKit.2019.UnitTests` (net472, non-SDK): build with VS MSBuild as in `unit-test.md`, then collect with `vstest.console`:

```powershell
& "C:\Program Files\Microsoft Visual Studio\18\Professional\Common7\IDE\Extensions\TestPlatform\vstest.console.exe" DynamicsCrm.DevKit.2019.UnitTests\bin\Debug\net472\win\DynamicsCrm.DevKit.2019.UnitTests.dll /collect:"XPlat Code Coverage" /testadapterpath:"$env:USERPROFILE\.nuget\packages\coverlet.collector\6.0.4\build\netstandard2.0"
```

The 2019 suite must keep **100% line coverage** of the instrumented code. `DynamicsCrmDevKit2019Package`, `UploadReportCommand`, and `FormLogin` carry `[ExcludeFromCodeCoverage]` because they only run inside a live Visual Studio shell; everything else (`ReportConfigHelper`, `FormReportMapping`, shared models compiled into the assembly) is fully covered — do not let coverage regress.

## Reports

Convert the `.cobertura.xml` files into an HTML report with ReportGenerator — its summary shows the line / branch / method percentages. Requires the global tools `dotnet-coverage` and `dotnet-reportgenerator-globaltool` (install on demand). Write each component's report under that component's `CoverageReport\` folder, matching the Analyzers layout:

```powershell
reportgenerator -reports:"DynamicsCrm.DevKit.Cli.UnitTests\TestResults\**\coverage.cobertura.xml" -targetdir:"DynamicsCrm.DevKit.Cli\CoverageReport" -reporttypes:"Html;HtmlSummary;Badges" -assemblyfilters:"+DynamicsCrm.DevKit.Cli"
```

For Analyzers, prefer the ready-made script — it runs the tests, collects coverage, and generates the HTML report:

```powershell
& ".\DynamicsCrm.DevKit.Scripts\Run-Analyzer-Coverage.ps1"
```

It writes the report to `DynamicsCrm.DevKit.Analyzers\CoverageReport\index.html` and does not collect coverage for any other component.

Report pass/fail per project first, then the coverage numbers (line / branch / method) per tested assembly. If tests fail, report the failures as in `unit-test.md` and still report whatever coverage was collected.
