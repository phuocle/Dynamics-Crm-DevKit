# Build Debug - DynamicsCrm.DevKit

1. Record the start time
2. Run the PowerShell script: `DynamicsCrm.DevKit.Scripts\Debug-DynamicsCrm-DevKit.ps1`. If any errors occur, stop and fix them, then restart this workflow from the beginning.
3. Record the end time
4. Verify the build:
   - Run `devkit --version`. Expected version format is `4.12.34.56` with Build timestamp in `dd.MM.yyyy HH:mm:ss` format (current date/time when built). Confirm the date/month/year matches today.
   - Run `devkit-tool --help`. Expected output shows the `devkit-tool` banner with version `4.12.34.56` and list of available commands.
5. Verify that all 4 files exist in the `published` folder:
   - `DynamicsCrm.DevKit.Analyzers.[version].nupkg`
   - `DynamicsCrm.DevKit.Cli.[version].nupkg`
   - `DynamicsCrm.DevKit.Tool.[version].nupkg`
   - `DynamicsCrm.DevKit.[version].vsix`   
   If any file is missing, investigate the build output and fix the issue.
6. Report the total runtime and verified version
