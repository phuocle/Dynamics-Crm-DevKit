# Legacy CLI Backup

This folder contains a backup of the legacy CLI (v4) before converting to .NET 10 Tool.

## Build Information
- **Date**: 2026-01-10
- **Framework**: .NET Framework 4.8
- **Configuration**: Debug

## Purpose
- Reference for testing backward compatibility
- Capture output format for comparison
- Debug legacy CliLog behavior

## Usage
```powershell
# Run from this folder:
.\DynamicsCrm.DevKit.Cli.exe /conn:"..." /type:generators /json:"..." /profile:"..."
```

## Note
This backup includes all DLLs required to run the CLI standalone.
