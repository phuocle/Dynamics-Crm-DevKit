# DynamicsCrm.DevKit.2019.UnitTests

Unit test project for the `DynamicsCrm.DevKit.2019` VSIX. Target framework: `net472`. Current status: **100% line coverage** of all instrumented code (42 tests).

## Running

`dotnet test` cannot be used — the referenced VSIX is a legacy non-SDK project whose VSSDK BuildTools targets fail under .NET Core MSBuild. Build with VS MSBuild and run with `vstest.console` (exact commands in `.codex/workflows/unit-test.md`).

## Coverage model

Excluded from coverage via `[ExcludeFromCodeCoverage]` (only run inside a live Visual Studio shell — DTE, OleMenuCommandService, modal dialogs, `ThreadHelper`):

- `DynamicsCrmDevKit2019Package`
- `UploadReportCommand`
- `FormLogin` (also excludes its XAML-generated `InitializeComponent`)

Everything else is fully covered:

| Code | Tests |
|---|---|
| `ReportConfigHelper` | JSON parser branches: ReadConfig/GetReport/SaveReport add+update+replace/insert paths, CRLF vs LF, scalar/string/array `Reports` values, BOM encodings (UTF-8 BOM, UTF-16 LE/BE, plain UTF-8), defensive throw branches via reflection |
| `FormReportMapping` | STA-threaded WPF tests: selection branches (cached ReportId / ReportFileName fallback / first / none), OK/Cancel/SelectionChanged, icon loading, row mapping defaults |
| Shared models compiled into the assembly | `ConfigJson`, `DeployReport`, `CustomTemplate`, `DeployWebResource` |
| `PackageGuids.CommandSet` | static field initializer |

## Key infrastructure (TestInfrastructure/)

- `StaRunner` — runs WPF code on a dedicated STA thread.
- `FakeCrmServiceClient` — hand-rolled `IOrganizationService` fake (`CrmServiceClient` is sealed, so `FormReportMapping` was changed to accept `IOrganizationService`, which `CrmServiceClient` implements — behavior unchanged).
- `InterfaceProxy` + `FakeDte` — Reflection.Emit-based DTE2 fake; EnvDTE indexed properties cannot be implemented in plain C#.
