# Build Tool

Build, pack, and install only `devkit-tool`:

Run from the `v5` project root. The script stops existing `devkit-tool` processes before replacing the global tool.

```powershell
& ".\DynamicsCrm.DevKit.Scripts\Release.DynamicsCrm.DevKit.Tool.ps1"
```

Wait for completion. Read the version from `DynamicsCrm.DevKit.Scripts/DevKit.ReleaseConfig.json`, verify `Published/<version>/DynamicsCrm.DevKit.Tool.<version>.nupkg` exists, run `devkit-tool --help`, and confirm `DynamicsCrm.DevKit.Shared/Const.cs` contains `xxxx.yy.zz HH.mm.ss` again.
