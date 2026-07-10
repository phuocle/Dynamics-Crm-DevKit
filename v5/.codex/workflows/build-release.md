# Full Configured Release

Run only when the user explicitly requests a full configured release:

```powershell
& ".\DynamicsCrm.DevKit.Scripts\Release-DynamicsCrm-DevKit.ps1"
```

Wait until completion. Verify the installed CLI and Tool versions and all four Analyzer/CLI/Tool/VSIX artifacts under `Published/<version>/`. Confirm the working tree contains no temporary date replacements.
