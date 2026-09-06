# Unit Tests

"Unit test" means: run the tests and report pass/fail only — no code coverage collection. When code coverage is requested, follow `code-coverage.md` instead.

Five UnitTests projects, one per component:

| Project | Component tested | Target frameworks |
|---|---|---|
| `DynamicsCrm.DevKit.Cli.UnitTests` | CLI | net48, net10.0 |
| `DynamicsCrm.DevKit.Tool.UnitTests` | Tool | net10.0 |
| `DynamicsCrm.DevKit.UnitTests` | VSIX | net48, net10.0 |
| `DynamicsCrm.DevKit.Analyzers.UnitTests` | Analyzers | net48 |
| `DynamicsCrm.DevKit.2019.UnitTests` | VSIX 2019 | net472 |

SDK projects — run with `dotnet test`:

```powershell
dotnet test "DynamicsCrm.DevKit.Cli.UnitTests\DynamicsCrm.DevKit.Cli.UnitTests.csproj" -f net48
dotnet test "DynamicsCrm.DevKit.Cli.UnitTests\DynamicsCrm.DevKit.Cli.UnitTests.csproj" -f net10.0
dotnet test "DynamicsCrm.DevKit.Tool.UnitTests\DynamicsCrm.DevKit.Tool.UnitTests.csproj"
dotnet test "DynamicsCrm.DevKit.UnitTests\DynamicsCrm.DevKit.UnitTests.csproj" -f net48
dotnet test "DynamicsCrm.DevKit.UnitTests\DynamicsCrm.DevKit.UnitTests.csproj" -f net10.0
dotnet test "DynamicsCrm.DevKit.Analyzers.UnitTests\DynamicsCrm.DevKit.Analyzers.UnitTests.csproj"
```

`DynamicsCrm.DevKit.2019.UnitTests` is a legacy non-SDK project; `dotnet test` cannot build it (VSSDK BuildTools targets fail on .NET Core MSBuild). Build with VS MSBuild, then run via `vstest.console`:

```powershell
& "C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe" DynamicsCrm.DevKit.2019.UnitTests\DynamicsCrm.DevKit.2019.UnitTests.csproj -restore -p:Configuration=Debug -v:q -nologo
& "C:\Program Files\Microsoft Visual Studio\18\Professional\Common7\IDE\Extensions\TestPlatform\vstest.console.exe" DynamicsCrm.DevKit.2019.UnitTests\bin\Debug\net472\win\DynamicsCrm.DevKit.2019.UnitTests.dll
```

Report pass/fail per project (and per target framework for multi-TFM projects) and distinguish failures caused by the current change from unrelated baseline failures. Do not collect or report code coverage in this workflow.
