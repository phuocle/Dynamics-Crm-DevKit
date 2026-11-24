---
name: devkit-skill-build-release-cli
description: Fast timestamped Release build, pack, and install of only the devkit CLI (DynamicsCrm.DevKit.Cli, net10.0), stamped with the current date/time instead of the annual release date, with output verification only — no unit tests and no code coverage. Use whenever the user asks to build, rebuild, reinstall, or release only the devkit CLI ("release cli", "release cli only", "build cli", "build release cli without tests", "release cli thôi đừng chạy test", "build cli theo giờ", or refreshing the installed CLI before real MCP testing).
---

# DevKit Skill Build Release CLI (Fast Timestamped CLI Release, No Tests)

The CLI-only, speed-first twin of `devkit-skill-build-release-only`: build,
pack, and install **only** the `DynamicsCrm.DevKit.Cli` (`devkit`) project in
**Release** configuration stamped with the **current date/time**
(`Release.DynamicsCrm.DevKit.Cli.ps1 -Configuration Release`) instead of
building all four Analyzer/CLI/Tool/VSIX projects, and run **no unit test and
no code coverage**.

The CLI release script itself never runs tests and already accepts
`-Configuration Release` while defaulting to the current date/time, so nothing
about the script changes in this mode — do not fork or wrap it. What this skill
changes, compared with the full release, is building only the CLI project
(skipping Analyzers, Tool, and VSIX), stamping the current date/time instead of
the annual release date (`31.12.yyyy 23.59.59`), and skipping the post-release
coverage pass (`devkit-skill-code-coverage`, ~5 minutes) and every `dotnet test`
invocation. Skipping them is a user-accepted risk: a green release here proves
the CLI code compiled and the CLI artifact was produced — nothing more.

```powershell
& ".\.agents\skills\devkit-skill-shared\scripts\Release.DynamicsCrm.DevKit.Cli.ps1" -Configuration Release
```

Wait until completion. The script stops running devkit/MCP processes (including
the current DevKit MCP server to avoid locked assemblies), replaces the
build-date placeholder in `DynamicsCrm.DevKit.Shared/Const.cs` with the
current date/time, builds and packs the CLI in `Release` configuration,
reinstalls the `devkit` global tool, writes the build manifest, and restores
`Const.cs` in `finally`. Then verify the build output only — still no tests:

- `devkit --version` succeeds with the version from
  `.agents/skills/devkit-skill-shared/scripts/DevKit.ReleaseConfig.json` and
  the current build timestamp.
- `Published/<version>/DynamicsCrm.DevKit.Cli.<version>.nupkg` exists.
- `Published/<version>/DynamicsCrm.DevKit.Cli.<version>.build-manifest.json`
  exists and records `"configuration": "Release"`.
- `DynamicsCrm.DevKit.Shared/Const.cs` contains `xxxx.yy.zz HH.mm.ss` again
  and `git status` shows no leftover build-date replacements.

Do NOT run in this mode: `dotnet test`, `Run-Coverage.ps1`, and
`Run-Analyzer-Coverage.ps1`. When the user later asks for the verified
official release, follow `devkit-skill-build-release` +
`devkit-skill-code-coverage` in that order.

If MCP code changed, restart the active MCP client connector, call `whoami`,
and compare its runtime version, build timestamp, process start time, assembly
path, and SHA with the build manifest.

`Release.DynamicsCrm.DevKit.Cli.ps1 -Configuration Release` is a multi-step
build/pack/install script. Do not end the turn after starting it or after an
intermediate build message. Keep the process/session alive, wait until it
exits, and continue through every post-release verification above. Report the
final exit code and concise results to the user; if any step fails, report the
failure instead of implying success.
