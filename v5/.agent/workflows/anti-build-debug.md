---
description: Build Release DynamicsCrm.DevKit for all projects with current timestamp
---

> [!IMPORTANT]
> **AI AGENT INSTRUCTIONS (CRITICAL):**
> TO AI AGENT: You MUST NOT just print out the steps as text. You MUST USE TOOLS to execute EACH COMMAND one by one on behalf of the user.
> **VERY IMPORTANT:** The build script (.ps1) takes a long time to complete. You MUST USE TOOLS to check the process status and WAIT until the script finishes 100% BEFORE moving on to the Verify steps. If you don't wait, the Verify steps will report errors or missing `nupkg`/`vsix` files (because the build hasn't finished), leading to completely wrong output. Execute sequentially — slow and steady.


1. Record the start time
2. Run the PowerShell script: `DynamicsCrm.DevKit.Scripts\Release-DynamicsCrm-DevKit-CurrentDate.ps1`. The script explicitly discovers and forcefully kills any running `DynamicsCrm.DevKit.Cli` and `devkit` processes (such as the running MCP server) before building to avoid file lock access-denied errors. It builds all projects in Release mode without running unit tests. The version comes from `DevKit.ReleaseConfig.json`, but the date/time is dynamically overridden with the current date/time. If any errors occur, stop and fix them, then restart this workflow from the beginning.
3. Record the end time
4. Verify the build:
   - Run `devkit --version`. Expected version is the value from `DevKit.ReleaseConfig.json` with Build timestamp in `dd.MM.yyyy HH:mm:ss` format (the exact current date/time when built). Confirm the date/month/year matches today.
   - Run `devkit-tool --help`. Expected output shows the `devkit-tool` banner with the same configured version and list of available commands.
5. Verify that all 4 files exist in the `published` folder:
   - `DynamicsCrm.DevKit.Analyzers.[version].nupkg`
   - `DynamicsCrm.DevKit.Cli.[version].nupkg`
   - `DynamicsCrm.DevKit.Tool.[version].nupkg`
   - `DynamicsCrm.DevKit.[version].vsix`   
   If any file is missing, investigate the build output and fix the issue.
6. Report the total runtime and verified version
