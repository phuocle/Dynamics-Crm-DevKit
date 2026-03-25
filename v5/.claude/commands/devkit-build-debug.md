---
description: "Build Release DynamicsCrm.DevKit for all projects with current timestamp"
---

> **CRITICAL:** You MUST use tools to execute EACH command. Do NOT just print the steps as text.
> The build script (.ps1) takes a long time. You MUST wait for it to complete 100% BEFORE moving to Verify steps. If you don't wait, Verify steps will fail due to missing `nupkg`/`vsix` files.

1. Record the start time
2. Run the PowerShell script: `DynamicsCrm.DevKit.Scripts\Release-DynamicsCrm-DevKit-CurrentDate.ps1`. The script discovers and kills any running `DynamicsCrm.DevKit.Cli` and `devkit` processes (such as the running MCP server) before building to avoid file lock errors. It builds all projects in Release mode without running unit tests. The version comes from `DevKit.ReleaseConfig.json`, but the date/time is dynamically overridden with the current date/time. If any errors occur, stop and fix them, then restart this workflow from the beginning.
3. Record the end time
4. Verify the build:
   - Run `devkit --version`. Expected version format is `4.12.34.56` (from `DevKit.ReleaseConfig.json`) with Build timestamp in `dd.MM.yyyy HH:mm:ss` format. Confirm the date matches today.
   - Run `devkit-tool --help`. Expected output shows the `devkit-tool` banner with version `4.12.34.56` and list of available commands.
5. Verify that all 4 files exist in the `published` folder:
   - `DynamicsCrm.DevKit.Analyzers.[version].nupkg`
   - `DynamicsCrm.DevKit.Cli.[version].nupkg`
   - `DynamicsCrm.DevKit.Tool.[version].nupkg`
   - `DynamicsCrm.DevKit.[version].vsix`
   If any file is missing, investigate the build output and fix the issue.
6. Report the total runtime and verified version
