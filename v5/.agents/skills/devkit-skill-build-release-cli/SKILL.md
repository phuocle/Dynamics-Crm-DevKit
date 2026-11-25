---
name: devkit-skill-build-release-cli
description: Build, pack, install, and verify only the devkit CLI (DynamicsCrm.DevKit.Cli, net10.0) in Release with the current build timestamp. Use for CLI-only build, release, or reinstall requests, including after MCP code changes. The default workflow ends with CLI artifact verification.
---

# Build and install the DevKit CLI Release

From the repository root, run the existing release script to build, pack, and
install `DynamicsCrm.DevKit.Cli` with the current date and time:

```powershell
& ".\.agents\skills\devkit-skill-shared\scripts\Release.DynamicsCrm.DevKit.Cli.ps1" -Configuration Release
```

Wait for the script to exit. It stops running devkit/MCP processes to release
assembly locks, reinstalls the `devkit` global tool, writes the build manifest,
and restores `Const.cs` in `finally`. After a successful exit, verify the CLI
output:

- `devkit --version` succeeds with the version from
  `.agents/skills/devkit-skill-shared/scripts/DevKit.ReleaseConfig.json` and
  the current build timestamp.
- `Published/<version>/DynamicsCrm.DevKit.Cli.<version>.nupkg` exists and
  its SHA-256 matches `packageSha256` in the manifest.
- `Published/<version>/DynamicsCrm.DevKit.Cli.<version>.build-manifest.json`
  records `"configuration": "Release"` and the installed assembly at
  `installedAssemblyPath` matches `installedAssemblySha256`.
- `DynamicsCrm.DevKit.Shared/Const.cs` contains `xxxx.yy.zz HH.mm.ss` again
  and `git status` shows no leftover build-date replacements.

Following [AGENTS.md](../../../AGENTS.md), finish after CLI artifact
verification, including when MCP code changed. Skip any runtime proof prompt
printed by the script. Restart the MCP connector, call `whoami`, or run live MCP
tests only if the user explicitly requests live MCP verification as separate
work.

Unit tests and coverage are separate workflows. Report the script's final exit
code, the artifact checks, and any failures.
