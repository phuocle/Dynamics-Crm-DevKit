---
name: devkit-skill-build-tool
description: Build, pack and install the devkit-tool global tool (DynamicsCrm.DevKit.Tool, net10.0) and verify the installation. Use whenever the user asks to build the tool, reinstall devkit-tool, or refresh the installed devkit-tool after code changes.
---

# DevKit Skill Build Tool

Build, pack, and install only `devkit-tool`. The script stops existing
`devkit-tool` processes before replacing the global tool.

```powershell
& ".\.agents\skills\devkit-skill-shared\scripts\Release.DynamicsCrm.DevKit.Tool.ps1"
```

Wait for completion. Read the version from
`.agents/skills/devkit-skill-shared/scripts/DevKit.ReleaseConfig.json`,
verify `Published/<version>/DynamicsCrm.DevKit.Tool.<version>.nupkg` exists,
run `devkit-tool --help`, and confirm `DynamicsCrm.DevKit.Shared/Const.cs`
contains `xxxx.yy.zz HH.mm.ss` again.
