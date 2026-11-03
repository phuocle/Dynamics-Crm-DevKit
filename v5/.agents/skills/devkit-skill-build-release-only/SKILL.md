---
name: devkit-skill-build-release-only
description: Fast configured release of DynamicsCrm.DevKit with output verification only — no unit tests and no code coverage. Use when the user explicitly asks for a release without test verification ("release only", "build release without tests", "release thôi đừng chạy test", or after finishing a work unit).
---

# DevKit Skill Build Release Only (Fast Configured Release, No Tests)

The speed-first twin of the full release: build and release the four
Analyzer/CLI/Tool/VSIX artifacts and reinstall the global tools, but run
**no unit test and no code coverage**. Use it only when the user explicitly
asks for a release without test verification.

The release script itself never runs tests, so nothing about the script
changes in this mode — do not fork or wrap it. What this skill skips,
compared with the full release, is the post-release coverage pass
(devkit-skill-code-coverage, ~5 minutes) and every `dotnet test` invocation.
Skipping them is a user-accepted risk: a green release here proves the code
compiled and the artifacts were produced — nothing more.

```powershell
& ".\.agents\skills\devkit-skill-shared\scripts\Release-DynamicsCrm-DevKit.ps1"
```

Wait until completion. The script stops running devkit/MCP processes,
replaces build-date placeholders, and restores them in `finally`. Then
verify the build output only — still no tests:

- `devkit --version` and `devkit-tool --help` succeed with the version from
  `.agents/skills/devkit-skill-shared/scripts/DevKit.ReleaseConfig.json`.
- All four artifacts exist under `Published/<version>/`:
  `DynamicsCrm.DevKit.Analyzers.<version>.nupkg`,
  `DynamicsCrm.DevKit.Cli.<version>.nupkg`,
  `DynamicsCrm.DevKit.Tool.<version>.nupkg`, and
  `DynamicsCrm.DevKit.Vsix.<version>.vsix`.
- `DynamicsCrm.DevKit.Shared/Const.cs` contains `xxxx.yy.zz HH.mm.ss` again
  and `git status` shows no leftover build-date replacements.

Do NOT run in this mode: `dotnet test`, `Run-Coverage.ps1`, and
`Run-Analyzer-Coverage.ps1`. When the user later asks for the verified
release, follow devkit-skill-build-release + devkit-skill-code-coverage in
that order.

If MCP code changed, restarting the MCP client connector and calling
`whoami` still applies (see devkit-skill-build-cli).
