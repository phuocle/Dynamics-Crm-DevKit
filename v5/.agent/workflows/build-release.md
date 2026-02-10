---
description: Build Release DynamicsCrm.DevKit for all projects
---

// turbo-all

1. Record the start time
2. Run the PowerShell script: `DynamicsCrm.DevKit.Scripts\Release-DynamicsCrm-DevKit.ps1`. If any errors occur, stop and fix them, then restart this workflow from the beginning.
3. Record the end time
4. Verify the build by running `devkit --version`. Expected version format is `4.12.34.56` with Build timestamp `31.03.2026 23:59:59`.
5. Verify that all 4 files exist in the `published` folder:
   - `DynamicsCrm.DevKit.Analyzers.[version].nupkg`
   - `DynamicsCrm.DevKit.Cli.[version].nupkg`
   - `DynamicsCrm.DevKit.Tools.[version].nupkg`
   - `DynamicsCrm.DevKit.[version].vsix`   
   If any file is missing, investigate the build output and fix the issue.
6. Report the total runtime and verified version