---
name: Build VSIX DynamicsCrm.DevKit
description: Builds the Visual Studio Extension (VSIX) for DynamicsCrm.DevKit.
---

# Build VSIX

## Description
This skill builds the Visual Studio Extension installer (`.vsix`) file. This is the primary distribution method for the DevKit tools inside Visual Studio.

## When to Use
- When the user asks to "build vsix" or "package the extension".
- After making changes to the `DynamicsCrm.DevKit.Wizard` or `DynamicsCrm.DevKit.Package` projects.
- Before running integration tests that require the latest VSIX.

## Prerequisites
- Visual Studio SDK must be installed (implied by the environment).
- All dependencies must be buildable.

## Steps

### 1. Determine Build Mode
- **Debug Mode** (Default for AI): Used for development and testing. Does not require a PFX password.
- **Release Mode**: Used for final distribution. Requires a PFX password (human intervention needed).

### 2. Execution (Debug Mode)
**Crucial**: As an AI agent, you should **ALWAYS** use the Debug build script unless explicitly told otherwise, to avoid password prompts.

```powershell
$scriptPath = "d:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Scripts\Release-DynamicsCrm-DevKit-Debug.ps1"
& $scriptPath
```

### 3. Verification
After the build completes, verify that the VSIX file was created in the `releases` or `bin` folder (usually under `d:\github\Dynamics-Crm-DevKit\v5\Releases`).

## Troubleshooting
- **Build Fails**: Check the build output for MSBuild errors. Common issues include missing dependencies or syntax errors in C# files.
- **Signing Error**: If you accidentally ran the Release script, it will fail asking for a password. Switch to the Debug script.
