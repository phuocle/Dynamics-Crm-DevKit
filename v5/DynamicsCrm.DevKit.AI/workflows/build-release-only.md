# Fast Configured Release (No Tests)

The speed-first twin of `build-release.md`: build and release the four
Analyzer/CLI/Tool/VSIX artifacts and reinstall the global tools, but run
**no unit test and no code coverage**. Use it only when the user explicitly
asks for a release without test verification (for example "release only",
"build release without tests", "build release thôi đừng chạy test").

The release script itself never runs tests, so nothing about the script
changes in this mode — do not fork or wrap it. What this workflow skips,
compared with the full release verification in `AGENTS.md`, is the
post-release coverage pass (`code-coverage.md`, `Run-Coverage.ps1`, ~5
minutes) and every `dotnet test` invocation. Skipping them is a
user-accepted risk: a green release here proves the code compiled and the
artifacts were produced — nothing more.

```powershell
& ".\DynamicsCrm.DevKit.Scripts\Release-DynamicsCrm-DevKit.ps1"
```

Wait until completion. The script stops running devkit/MCP processes,
replaces build-date placeholders, and restores them in `finally`. Then
verify the build output only — still no tests:

- `devkit --version` and `devkit-tool --help` succeed with the version from
  `DynamicsCrm.DevKit.Scripts/DevKit.ReleaseConfig.json`.
- All four artifacts exist under `Published/<version>/`:
  `DynamicsCrm.DevKit.Analyzers.<version>.nupkg`,
  `DynamicsCrm.DevKit.Cli.<version>.nupkg`,
  `DynamicsCrm.DevKit.Tool.<version>.nupkg`, and
  `DynamicsCrm.DevKit.Vsix.<version>.vsix`.
- `DynamicsCrm.DevKit.Shared/Const.cs` contains `xxxx.yy.zz HH.mm.ss` again
  and `git status` shows no leftover build-date replacements.

Do NOT run in this mode: `dotnet test`,
`DynamicsCrm.DevKit.Scripts/Run-Coverage.ps1`, and
`DynamicsCrm.DevKit.Scripts/Run-Analyzer-Coverage.ps1`. When the user later
asks for the verified release, follow `build-release.md` + `code-coverage.md`
in that order.

If MCP code changed, restarting the MCP client connector and calling
`whoami` still applies (see `build-cli.md`).
