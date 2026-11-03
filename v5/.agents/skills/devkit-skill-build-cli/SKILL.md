---
name: devkit-skill-build-cli
description: Build, pack and install the devkit CLI (DynamicsCrm.DevKit.Cli, net10.0) and verify the installation against the release config. Use whenever the user asks to build the CLI, rebuild devkit, reinstall the devkit global tool, or refresh the installed CLI after code changes — including before real MCP testing.
---

# DevKit Skill Build CLI

Build, pack, and install only the `devkit` CLI tool. The script stops
existing `devkit` processes, including the current DevKit MCP server, to
avoid locked assemblies.

```powershell
& ".\.agents\skills\devkit-skill-shared\scripts\Release.DynamicsCrm.DevKit.Cli.ps1"
```

Wait for the script to finish. Read the version from
`.agents/skills/devkit-skill-shared/scripts/DevKit.ReleaseConfig.json`, then verify:

- `devkit --version` succeeds with that version.
- `Published/<version>/DynamicsCrm.DevKit.Cli.<version>.nupkg` exists.
- `Published/<version>/DynamicsCrm.DevKit.Cli.<version>.build-manifest.json` exists.
- `git status` contains no unintended build-date replacements;
  `DynamicsCrm.DevKit.Shared/Const.cs` contains `xxxx.yy.zz HH.mm.ss` again.

If MCP code changed, restart the active MCP client connector, call `whoami`,
and compare its runtime version, build timestamp, process start time,
assembly path, and SHA with the build manifest.
