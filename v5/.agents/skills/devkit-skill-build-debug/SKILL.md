---
name: devkit-skill-build-debug
description: Full timestamped build of DynamicsCrm.DevKit — releases all four artifacts stamped with the current date instead of the annual release date. Use only when the user explicitly asks for the timestamped/current-date build, "build debug theo giờ", or a release to test right now with today's build time.
---

# DevKit Skill Build Debug (Full Timestamped Build)

Run only when the user explicitly requests the full timestamped build:

```powershell
& ".\.agents\skills\devkit-skill-shared\scripts\Release-DynamicsCrm-DevKit-CurrentDate.ps1"
```

This is long-running and may stop installed DevKit/MCP processes. Wait until
completion, then verify `devkit --version`, `devkit-tool --help`, and all four
Analyzer/CLI/Tool/VSIX artifacts under `Published/<version>/`.
