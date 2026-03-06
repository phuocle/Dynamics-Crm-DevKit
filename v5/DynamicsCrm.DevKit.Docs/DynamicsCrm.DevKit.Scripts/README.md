# DynamicsCrm.DevKit.Scripts

PowerShell scripts for building, releasing, and maintaining the DynamicsCrm.DevKit project.

---

## Scripts

| Script | Purpose |
|---|---|
| **Release-DynamicsCrm-DevKit.ps1** | Main release script: updates version/date placeholders across all projects, builds solution via MSBuild, creates NuGet packages, publishes VSIX. Uses Dec 31 of current year for annual releases. Parameters: `-BuildDate`, `-Configuration` |
| **Release-DynamicsCrm-DevKit-CurrentDate.ps1** | Wrapper that runs the main release script with the current date/time. For testing releases during development |
| **Debug-DynamicsCrm-DevKit.ps1** | Debug build wrapper: runs the current-date release script with `-Configuration Debug`. Builds in Debug, packs CLI, installs/updates locally |
| **Clean-Repository.ps1** | Cleans build artifacts (`bin`, `obj`, `node_modules`, VS cache, temp files) to reset the repo. Supports `-DryRun` and `-IncludePublished` to also remove `.nupkg`/`.vsix` in `Published/` |
| **RestoreReplacedFiles.ps1** | Restores files changed by the release script using `git restore`. Reads file list from `DevKit.ReleaseConfig.json`. Use when a release fails and leaves placeholders replaced |
| **Sync-AI-Config.ps1** | Syncs AI agent configuration from `.agent/` (source of truth) to `.cursor/` and `.github/`. Converts `.md` to `.mdc` with frontmatter. Supports `-DryRun` and `-Verbose` |
| **Migrate-DevKit-V4-to-V5.ps1** | Migrates `.bat` files from v4 CLI syntax to v5. Converts `/arg:value` to `--arg value`, updates `/type:"servers"` to `server`, etc. Parameters: `-Path`, `-Recurse`, `-WhatIf` |
| **CheckLinksDevKitTypes.ps1** | Scans `devkit.d.ts` (JS and TS versions) for URLs, checks each URL for HTTP status, prints results to console, writes non-200 links to `DeadLinks.txt` |

---

## Configuration

| File | Purpose |
|---|---|
| **DevKit.ReleaseConfig.json** | Central config for all release scripts. Contains: version number, placeholder strings, file lists for version/date replacement, build settings (solution file, output folder), annual release date |

---

## Common Usage

### Debug Build (AI agents / development)
```powershell
.\DynamicsCrm.DevKit.Scripts\Debug-DynamicsCrm-DevKit.ps1
```

### Release Build (human operators only)
```powershell
.\DynamicsCrm.DevKit.Scripts\Release-DynamicsCrm-DevKit.ps1
```

### Clean All Build Artifacts
```powershell
.\DynamicsCrm.DevKit.Scripts\Clean-Repository.ps1
```

### Sync AI Config After Rule Changes
```powershell
.\DynamicsCrm.DevKit.Scripts\Sync-AI-Config.ps1
```

### Restore Files After Failed Release
```powershell
.\DynamicsCrm.DevKit.Scripts\RestoreReplacedFiles.ps1
```
