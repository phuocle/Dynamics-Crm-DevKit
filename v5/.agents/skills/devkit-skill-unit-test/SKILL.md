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
MSBuild). Dynamically locate Visual Studio MSBuild and `vstest.console.exe`
(supporting any edition Enterprise, Professional, Community and installed drive):

```powershell
# Dynamically locate MSBuild and vstest.console
$vswhere = Join-Path (${env:ProgramFiles(x86)}) "Microsoft Visual Studio\Installer\vswhere.exe"
$msbuild = if (Test-Path $vswhere) {
    & $vswhere -latest -products * -requires Microsoft.Component.MSBuild -find "MSBuild\**\Bin\MSBuild.exe" -prerelease | Select-Object -First 1
}
if (-not $msbuild -or -not (Test-Path $msbuild)) {
    $editions = @("Enterprise", "Professional", "Community", "BuildTools")
    $versions = @("18", "2026")
    $drives = @($env:ProgramFiles, "C:\Program Files", "D:\Program Files", "E:\Program Files") | Where-Object { $_ -and (Test-Path $_) } | Select-Object -Unique
    foreach ($drive in $drives) {
        foreach ($ver in $versions) {
            foreach ($ed in $editions) {
                $candidate = Join-Path $drive "Microsoft Visual Studio\$ver\$ed\MSBuild\Current\Bin\MSBuild.exe"
                if (Test-Path $candidate) { $msbuild = $candidate; break }
            }
            if ($msbuild) { break }
        }
        if ($msbuild) { break }
    }
}
$vsRoot = Split-Path (Split-Path (Split-Path (Split-Path $msbuild)))
$vstest = Join-Path $vsRoot "Common7\IDE\Extensions\TestPlatform\vstest.console.exe"

& $msbuild DynamicsCrm.DevKit.Vsix.2019.UnitTests\DynamicsCrm.DevKit.Vsix.2019.UnitTests.csproj -restore -p:Configuration=Debug -v:q -nologo
& $vstest DynamicsCrm.DevKit.Vsix.2019.UnitTests\bin\Debug\net472\win\DynamicsCrm.DevKit.Vsix.2019.UnitTests.dll
```

Report pass/fail per project and distinguish failures caused by the current
change from unrelated baseline failures. Do not collect or report code
coverage in this skill.
