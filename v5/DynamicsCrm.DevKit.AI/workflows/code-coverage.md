# Code Coverage

"Run code coverage" means: run the unit tests (report pass/fail exactly like `unit-test.md`) AND collect code coverage for the tested code. Coverage is measured as three metric types: **line**, **branch**, and **method** (jest reports statements/branches/functions/lines for the JavaScript suites).

The order is fixed: **Step 1** — JavaScript client-code suites, **Step 2** — the five C# components, **Step 3** — one final combined report. Do not start C# before Step 1 completes.

## Step 1 — JavaScript (client code) suites

One command (preferred). It runs the DevKitJs suite first, then the DevKitTs suite, and stops at the first failing step:

```powershell
& ".\DynamicsCrm.DevKit.Tests\TestClientCode\06.Unit-Test-Fast.ps1"
```

| Folder | Steps | Coverage |
|---|---|---|
| `01.DevKitJs-UnitTest` | `npm test` (jest), then `npm run coverage` (jest --coverage) | measures `lib/devkit.js`; `coverageThreshold` enforces 100% statements/branches/functions/lines; HTML report at `coverage\index.html` |
| `02.DevKitTs-UnitTest` | `npm run check` (`tsc --noEmit`), `npm run release:test`, then `npm run devkit-test` (ts-jest --coverage) | measures `lib/devkit.ts` + `entities\*.ts` (`.d.ts` excluded); same 100% thresholds; HTML report at `coverage\lcov-report\index.html` |

The DevKitJs npm scripts wrap jest between `test/sync-devkit.js` (appends a temporary ESM export to `lib/devkit.js`) and `test/restore-devkit.js` (removes it), so the source file is restored after each run.

Prerequisites:

- Node.js 18+ and npm on PATH.
- `node_modules` in both UnitTest folders; install with `02.Install-All.ps1` (from `TestClientCode\`) if missing — the per-folder `RunCodeCoverage.ps1` also auto-installs.
- If the synced devkit sources may be stale, run `04.Sync-All.ps1` first; it copies `DynamicsCrm.DevKit.Shared\Resources\js\devkit.js` and `devkit.d.ts` into the test folders.

JS-only variant (skip the TS suite): in `01.DevKitJs-UnitTest`, run `npm test`, then `npm run coverage`.

## Step 2 — C# components

### One-command path (preferred)

`Run-Coverage.ps1` builds, runs, collects, and generates the HTML reports for all five components (or a subset):

```powershell
& ".\DynamicsCrm.DevKit.Scripts\Run-Coverage.ps1"                        # all five
& ".\DynamicsCrm.DevKit.Scripts\Run-Coverage.ps1" -Components Cli,Tool   # subset
& ".\DynamicsCrm.DevKit.Scripts\Run-Coverage.ps1" -OpenReport            # + open reports
```

It prints pass/fail, then line/branch/method per measured assembly (parsed from each report's `Summary.xml`), and exits non-zero on any failure.

### Manual per-project commands

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

### Reports

Turn each `coverage.cobertura.xml` into an HTML report with ReportGenerator — requires the global tools `dotnet-coverage` and `dotnet-reportgenerator-globaltool` (install on demand). Reports are generated locally under each component's `CoverageReport\` folder (git-ignored via `**/CoverageReport/`), and use `XmlSummary` so the line/branch/method numbers can be read back from `Summary.xml`:

```powershell
reportgenerator -reports:"DynamicsCrm.DevKit.Cli.UnitTests\TestResults\**\coverage.cobertura.xml" -targetdir:"DynamicsCrm.DevKit.Cli\CoverageReport" -reporttypes:"Html;HtmlSummary;Badges;XmlSummary" -assemblyfilters:"+DynamicsCrm.DevKit.Cli"
```

Local report targets: Cli → `DynamicsCrm.DevKit.Cli\CoverageReport`, Tool → `DynamicsCrm.DevKit.Tool\CoverageReport`, Vsix → `DynamicsCrm.DevKit.Vsix.UnitTests\CoverageReport`, Analyzers → `DynamicsCrm.DevKit.Analyzers\CoverageReport`, 2019 → `DynamicsCrm.DevKit.Vsix.2019.UnitTests\CoverageReport` (its summary contains both the product assembly `DynamicsCrm.DevKit.2019` and the test harness).

After collecting all results, the script generates a single `Published/<version>/CoverageReport.md` summarizing pass/fail and line/branch/method coverage per assembly (version read from `DevKit.ReleaseConfig.json`). This markdown file is tracked by git (negated in `.gitignore`) and viewable directly on GitHub. Local `CoverageReport\` folders are deleted after the markdown is generated.

## Step 3 — Final combined report

Report pass/fail per suite first — `01.DevKitJs-UnitTest`, `02.DevKitTs-UnitTest`, then Cli, Tool, Vsix, Analyzers, 2019 — then the coverage numbers:

- JavaScript/TypeScript: jest's text table per measured file (% Stmts / % Branch / % Funcs / % Lines) plus the HTML report path; both suites set `coverageThreshold` at 100%, so a passing run is 100% on all four metrics.
- C#: line/branch/method per measured assembly, as printed by `Run-Coverage.ps1` from each `Summary.xml` and summarized in `Published/<version>/CoverageReport.md`.

If tests fail, report the failures as in `unit-test.md` and still report whatever coverage was collected.
