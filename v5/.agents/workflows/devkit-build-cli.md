---
description: Build DynamicsCrm.DevKit.Cli project in Debug mode
---

Build **only** the CLI project (faster than `/devkit-build-debug`), pack it as a .NET tool, and install locally for testing.

> [!CAUTION]
> The build process uses the `Release.DynamicsCrm.DevKit.Cli.ps1` script.
> This script is structured with `try...finally` to ensure `Const.cs` is always safely restored in all scenarios (including errors or mid-process cancellation).

## Build Script

```powershell
.\DynamicsCrm.DevKit.Scripts\Release.DynamicsCrm.DevKit.Cli.ps1
```

## Notes

- This workflow builds **only CLI** (not Analyzer, Tool, or VSIX) → much faster
- Version is defined in `DevKit.ReleaseConfig.json`
- No signing keys required for any build configuration
- For full solution build, use `/devkit-build-debug` workflow instead
