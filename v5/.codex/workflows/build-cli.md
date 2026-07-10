# Build CLI

Build, pack, and install only the `devkit` CLI tool:

Run from the `v5` project root. This script stops existing `devkit` processes, including the current DevKit MCP server, to avoid locked assemblies.

```powershell
& ".\DynamicsCrm.DevKit.Scripts\Release.DynamicsCrm.DevKit.Cli.ps1"
```

Wait for the script to finish. Read the version from `DynamicsCrm.DevKit.Scripts/DevKit.ReleaseConfig.json`, then verify:

- `devkit --version` succeeds with that version.
- `Published/<version>/DynamicsCrm.DevKit.Cli.<version>.nupkg` exists.
- `Published/<version>/DynamicsCrm.DevKit.Cli.<version>.build-manifest.json` exists.
- `git status` contains no unintended build-date replacements; `DynamicsCrm.DevKit.Shared/Const.cs` contains `xxxx.yy.zz HH.mm.ss` again.

If MCP code changed, restart the Codex MCP connector, call `whoami`, and compare its runtime version, build timestamp, process start time, assembly path, and SHA with the build manifest.
