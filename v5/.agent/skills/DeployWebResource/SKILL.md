---
name: Deploy WebResource DynamicsCrm.DevKit
description: Deploys web resources (JS/HTML/CSS/images) to Dynamics 365 using the DevKit CLI.
---

# Deploy WebResource

## Description
This skill enables the deployment of web resources from the local project to a Dynamics 365 environment using the `DynamicsCrm.DevKit.Cli.exe`. It handles both JavaScript (`.js`) and TypeScript (`.ts` -> `.js`) web resource projects.

## When to Use
- When the user asks to "deploy web resources" or "upload js files".
- When you have modified a web resource file (js, html, css, png, svg, resx) and need to sync it to the server.
- After running a build on a TypeScript web resource project.

## Prerequisites
- The solution must be built (if using TypeScript).
- A valid `DynamicsCrm.DevKit.Cli.json` configuration file must exist in the project or parent directories.
- `launchSettings.json` must be configured with the appropriate profile.

## Steps

### 1. Identify the Profile
Read `DynamicsCrm.DevKit.Cli\Properties\launchSettings.json` (or the project's specific `launchSettings.json` if available) to find the correct profile for web resource deployment. 
Common profile names:
- `15.TestWebResource-JS` (for pure JavaScript projects)
- `16.TestWebResource-TS` (for TypeScript projects)
- `WebResource` (generic)

### 2. Prepare the Command
Construct the CLI command using the information from the profile.

**Key Arguments:**
- `/type:"webresources"`: Specifies the operation type.
- `/profile:"[PROFILE_NAME]"`: The specific profile config to use.

### 3. Execution
Run the command using the `run_command` tool.

```powershell
# Example: Deploying using the 'WebResource' profile
$cliPath = "D:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Cli\bin\Debug\net48\DynamicsCrm.DevKit.Cli.exe"
$workingDir = "D:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Tests\TestWebResource\TestJavaScript\Dev.DevKit.WebResource" # UPDATE THIS

cd $workingDir
& $cliPath /type:"webresources" /profile:"WebResource"
```

## Troubleshooting
- **Connection Failed**: Check the connection string in `DynamicsCrm.DevKit.Cli.json` or the command arguments. Ensure `AuthType`, `Url`, `ClientId`, and `ClientSecret` are correct.
- **Profile Not Found**: Verify the `/profile` argument matches exactly a key in the `profiles` section of `DynamicsCrm.DevKit.Cli.json`.
- **File Not Found**: Ensure you are in the correct directory where the `devkit.config.json` or `DynamicsCrm.DevKit.Cli.json` is reachable.
