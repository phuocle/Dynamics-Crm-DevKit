# Full Timestamped Build

Run only when the user explicitly requests the full timestamped build:

```powershell
& ".\DynamicsCrm.DevKit.Scripts\Release-DynamicsCrm-DevKit-CurrentDate.ps1"
```

This is long-running and may stop installed DevKit/MCP processes. Wait until completion, then verify `devkit --version`, `devkit-tool --help`, and all four Analyzer/CLI/Tool/VSIX artifacts under `Published/<version>/`.
