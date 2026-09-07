# Code Coverage

"Run code coverage" means: run the unit tests (report pass/fail exactly like `unit-test.md`) AND collect code coverage for the tested assemblies. Coverage is measured as three metric types: **line**, **branch**, and **method**.

## One-command path (preferred)

`Run-Coverage.ps1` builds, runs, collects, and generates the HTML reports for all five components (or a subset):

```powershell
& ".\DynamicsCrm.DevKit.Scripts\Run-Coverage.ps1"                        # all five
& ".\DynamicsCrm.DevKit.Scripts\Run-Coverage.ps1" -Components Cli,Tool   # subset
& ".\DynamicsCrm.DevKit.Scripts\Run-Coverage.ps1" -OpenReport            # + open reports
```

It prints pass/fail, then line/branch/method per measured assembly (parsed from each report's `Summary.xml`), and exits non-zero on any failure.

## Manual per-project commands

net10.0 suites collect through the coverlet.collector. **Coverlet's "XPlat Code Coverage" silently produces no coverage on .NET Framework suites (net48/net472)** — it exits green but writes nothing — so those wrap `dotnet test` / `vstest.console` in `dotnet-coverage collect` instead:

```powershell
# Cli (net10.0) — coverlet.runsettings includes [DynamicsCrm.DevKit.Cli]*
dotnet test "DynamicsCrm.DevKit.Cli.UnitTests\DynamicsCrm.DevKit.Cli.UnitTests.csproj" --no-build --settings "DynamicsCrm.DevKit.Cli.UnitTests\coverlet.runsettings"

# Tool (net10.0) — no runsettings; collector default measures everything, filter at report time
dotnet test "DynamicsCrm.DevKit.Tool.UnitTests\DynamicsCrm.DevKit.Tool.UnitTests.csproj" --no-build --collect:"XPlat Code Coverage"

# Vsix (net48) — wrapped; coverlet.runsettings includes [DynamicsCrm.DevKit.Vsix.UnitTests]*
dotnet-coverage collect -f cobertura -o "DynamicsCrm.DevKit.Vsix.UnitTests\TestResults\coverage.cobertura.xml" dotnet test "DynamicsCrm.DevKit.Vsix.UnitTests\DynamicsCrm.DevKit.Vsix.UnitTests.csproj" --no-build -v:q --nologo

# Analyzers (net48) — wrapped
dotnet-coverage collect -f cobertura -o "DynamicsCrm.DevKit.Analyzers.UnitTests\TestResults\coverage.cobertura.xml" dotnet test "DynamicsCrm.DevKit.Analyzers.UnitTests\DynamicsCrm.DevKit.Analyzers.UnitTests.csproj" --no-build -v:q --nologo

# 2019 (net472, non-SDK) — build with VS MSBuild (see unit-test.md), then wrapped vstest.console
dotnet-coverage collect -f cobertura -o "DynamicsCrm.DevKit.Vsix.2019.UnitTests\TestResults\coverage.cobertura.xml" "C:\Program Files\Microsoft Visual Studio\18\Professional\Common7\IDE\Extensions\TestPlatform\vstest.console.exe" "DynamicsCrm.DevKit.Vsix.2019.UnitTests\bin\Debug\net472\win\DynamicsCrm.DevKit.2019.UnitTests.dll"
```

The wrapper output path (`-o`) and the collector's `TestResults\<guid>\coverage.cobertura.xml` both live under the test project's `TestResults\`. Which assembly is measured: the Cli and Vsix runsettings `Include` filters decide; Tool and the `dotnet-coverage` wrapper runs capture everything and are trimmed at report time by `-assemblyfilters`.

The 2019 suite must keep **100% line coverage** of the product assembly `DynamicsCrm.DevKit.2019` (`ReportConfigHelper`, `FormReportMapping`, `PackageGuids`, and the compiled-in `DynamicsCrm.DevKit.Shared.Models.*`). `DynamicsCrmDevKit2019Package`, `UploadReportCommand`, and `FormLogin` carry `[ExcludeFromCodeCoverage]`; the test-harness assembly `DynamicsCrm.DevKit.2019.UnitTests` itself (test classes, `FakeDte`, `FakeCrmServiceClient`) is not part of that bar.

## Reports

Turn each `coverage.cobertura.xml` into an HTML report with ReportGenerator — requires the global tools `dotnet-coverage` and `dotnet-reportgenerator-globaltool` (install on demand). Write each component's report under that component's `CoverageReport\` folder (git-ignored via `**/CoverageReport/`), and use `XmlSummary` so the line/branch/method numbers can be read back from `Summary.xml`:

```powershell
reportgenerator -reports:"DynamicsCrm.DevKit.Cli.UnitTests\TestResults\**\coverage.cobertura.xml" -targetdir:"DynamicsCrm.DevKit.Cli\CoverageReport" -reporttypes:"Html;HtmlSummary;Badges;XmlSummary" -assemblyfilters:"+DynamicsCrm.DevKit.Cli"
```

Report targets: Cli → `DynamicsCrm.DevKit.Cli\CoverageReport`, Tool → `DynamicsCrm.DevKit.Tool\CoverageReport`, Vsix → `DynamicsCrm.DevKit.Vsix.UnitTests\CoverageReport`, Analyzers → `DynamicsCrm.DevKit.Analyzers\CoverageReport`, 2019 → `DynamicsCrm.DevKit.Vsix.2019.UnitTests\CoverageReport` (its summary contains both the product assembly `DynamicsCrm.DevKit.2019` and the test harness).

Report pass/fail per project first, then the coverage numbers (line / branch / method) per tested assembly. If tests fail, report the failures as in `unit-test.md` and still report whatever coverage was collected.
