---
name: devkit-skill-unit-test
description: Run the unit tests of the five DynamicsCrm.DevKit UnitTests projects (Cli, Tool, Vsix, Analyzers, Vsix.2019) and report pass/fail only — no coverage. Use when the user asks to run tests, "chạy test", check regressions, or verify a change passes the suite.
---

# DevKit Skill Unit Test

"Unit test" means: run the tests and report pass/fail only — no code coverage
collection. When coverage is requested, use devkit-skill-code-coverage instead.

Five UnitTests projects, one per component. Each project is single-target:
`net48` test assemblies cannot reference the net10.0 CLI, and the
template/Shared sources the VSIX tests exercise are link-compiled into the
test project.

| Project | Component tested | Target framework |
|---|---|---|
| `DynamicsCrm.DevKit.Cli.UnitTests` | CLI | net10.0 |
| `DynamicsCrm.DevKit.Tool.UnitTests` | Tool | net10.0 |
| `DynamicsCrm.DevKit.Vsix.UnitTests` | VSIX | net48 |
| `DynamicsCrm.DevKit.Analyzers.UnitTests` | Analyzers | net48 |
| `DynamicsCrm.DevKit.Vsix.2019.UnitTests` | VSIX 2019 | net472 |

SDK projects — run with `dotnet test`:

```powershell
dotnet test "DynamicsCrm.DevKit.Cli.UnitTests\DynamicsCrm.DevKit.Cli.UnitTests.csproj"
dotnet test "DynamicsCrm.DevKit.Tool.UnitTests\DynamicsCrm.DevKit.Tool.UnitTests.csproj"
dotnet test "DynamicsCrm.DevKit.Vsix.UnitTests\DynamicsCrm.DevKit.Vsix.UnitTests.csproj"
dotnet test "DynamicsCrm.DevKit.Analyzers.UnitTests\DynamicsCrm.DevKit.Analyzers.UnitTests.csproj"
```

`DynamicsCrm.DevKit.Vsix.2019.UnitTests` is a legacy non-SDK project;
`dotnet test` cannot build it (VSSDK BuildTools targets fail on .NET Core
MSBuild). Build with VS MSBuild, then run via `vstest.console` (pick the
MSBuild edition installed on this machine — `18\Enterprise` here):

```powershell
& "C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe" DynamicsCrm.DevKit.Vsix.2019.UnitTests\DynamicsCrm.DevKit.Vsix.2019.UnitTests.csproj -restore -p:Configuration=Debug -v:q -nologo
& "C:\Program Files\Microsoft Visual Studio\18\Professional\Common7\IDE\Extensions\TestPlatform\vstest.console.exe" DynamicsCrm.DevKit.Vsix.2019.UnitTests\bin\Debug\net472\win\DynamicsCrm.DevKit.2019.UnitTests.dll
```

Report pass/fail per project and distinguish failures caused by the current
change from unrelated baseline failures. Do not collect or report code
coverage in this skill.
