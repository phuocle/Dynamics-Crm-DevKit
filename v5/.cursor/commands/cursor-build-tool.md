# Build Tool - DynamicsCrm.DevKit.Tool

Build **only** the Tool project (faster than `/build-debug`), pack it as a .NET global tool, and install locally for testing.

> [!CAUTION]
> The build process uses the `Release.DynamicsCrm.DevKit.Tool.ps1` script.
> This script is structured with `try...finally` to ensure `Const.cs` is always safely restored in all scenarios (including errors or mid-process cancellation).

## Build Script

```powershell
.\DynamicsCrm.DevKit.Scripts\Release.DynamicsCrm.DevKit.Tool.ps1
```

## Notes

- This workflow builds **only Tool** (not CLI, Analyzer, or VSIX) → much faster
- Tool is a .NET 10 global tool with command name `devkit-tool`
- Version is defined in `DevKit.ReleaseConfig.json`
- No signing keys required for any build configuration
- For full solution build, use `/build-debug` workflow instead
