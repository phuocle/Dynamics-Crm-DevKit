---
description: "Build full DynamicsCrm.DevKit package with current timestamp"
---

> [!IMPORTANT]
> **AI AGENT INSTRUCTIONS (CRITICAL):**
> TO AI AGENT: You MUST NOT just print out the steps as text. You MUST USE TOOLS to execute the workflow on behalf of the user.
> **VERY IMPORTANT:** Run the PowerShell script as the single build command, wait until it finishes 100%, then verify. Do not start verification while the script is still running.

## Runtime rule

This workflow is intentionally one full build plus package/install/verify:

- The script restores once, builds only the package projects that need a separate build (`DynamicsCrm.DevKit.Analyzers` and the VSIX project), then packages CLI and Tool.
- Build-time source replacement is date-only. The version is stable in source and comes from `DevKit.ReleaseConfig.json` for package/MSBuild properties.
- CLI and Tool packages must be created with `dotnet pack --no-restore` inside `Release-DynamicsCrm-DevKit.ps1`. This lets each .NET global tool build exactly once during pack, instead of being built first by a full solution build and rebuilt by pack.
- Do not use `dotnet pack --no-build` for these global tool packages unless the required publish/run artifacts already exist; it can skip files needed by the tool package.
- Do not run `/claude-build-cli`, `/claude-build-tool`, extra `dotnet build`, or extra `dotnet pack` after this workflow unless you are fixing a failed build.
- `nuget.exe pack` for Analyzers is allowed because it packages the analyzer output from the targeted analyzer build.
- If a `nupkg` or `vsix` is missing, inspect the script output and fix the root cause. Do not compensate by running component build commands manually.

## Steps

1. Record the start time.
2. Run:
   ```powershell
   .\DynamicsCrm.DevKit.Scripts\Release-DynamicsCrm-DevKit-CurrentDate.ps1
   ```
   The script explicitly discovers and forcefully kills any running `DynamicsCrm.DevKit.Cli` and `devkit` processes, including a running MCP server, before building to avoid file-lock errors. It builds the release package outputs in Release mode without running unit tests. The version comes from `DevKit.ReleaseConfig.json`; only the date/time placeholder is overridden with the current date/time.
3. Wait for the script to finish. If it fails, stop, fix the issue, and restart this workflow from step 1.
4. Record the end time.
5. Verify the build:
   - Use the script's built-in verification output for `devkit --version` and `devkit-tool --help`. If that output was not captured or is unclear, run each command once.
   - `devkit --version` should show the version from `DevKit.ReleaseConfig.json` and a Build timestamp in `dd.MM.yyyy HH:mm:ss` format for today's date.
   - `devkit-tool --help` should show the `devkit-tool` banner with the same configured version and the command list.
6. Verify that all 4 files exist in `Published\<version>`:
   - `DynamicsCrm.DevKit.Analyzers.[version].nupkg`
   - `DynamicsCrm.DevKit.Cli.[version].nupkg`
   - `DynamicsCrm.DevKit.Tool.[version].nupkg`
   - `DynamicsCrm.DevKit.[version].vsix`
7. Report the total runtime, verified version, and whether the optimized targeted-build plus `dotnet pack --no-restore` path was used.
