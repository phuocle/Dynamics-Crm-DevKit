---
name: Generate TypeScript Form DynamicsCrm.DevKit
description: Generates TypeScript form typings for Dynamics CRM entities using the DevKit CLI.
---

# Generate TypeScript Form

## Description
This skill generates strongly-typed TypeScript definitions for Dynamics 365 entity forms. This allows for intellisense and compile-time checking when writing client-side form scripts.

## When to Use
- When the user asks to "generate ts form" or "update form typings".
- After adding or removing fields on a CRM form and needing to update the local TypeScript definitions to match.
- When starting a new TypeScript file for a form.

## Prerequisites
- The entity metadata must exist in the target CRM environment.
- A valid `DynamicsCrm.DevKit.Cli.json` configuration file must exist.
- `launchSettings.json` must be configured.

## Steps

### 1. Identify the Profile
Read `DynamicsCrm.DevKit.Cli\Properties\launchSettings.json` to identify the generator profile.
Common profile names:
- `generators.TsForm`: Generates TypeScript form typings.
- `04-TestClientCode-TS-FORM`: A test profile for this purpose.

### 2. Prepare the Command
Construct the CLI command.

**Key Arguments:**
- `/type:"generators"`: Specifies the generator tool.
- `/profile:"[PROFILE_NAME]"`: The specific profile to use (e.g., `TS-FORM` inside the json config).

### 3. Execution

```powershell
# Example: Generating TS Form using the 'TS-FORM' profile
$cliPath = "D:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Cli\bin\Debug\net48\DynamicsCrm.DevKit.Cli.exe"
$workingDir = "D:\github\Dynamics-Crm-DevKit\v5\DynamicsCrm.DevKit.Tests\TestClientCode\06.DevKitTs-Vsix\Dev.DevKit.WebResourceTs\entities" # UPDATE THIS

cd $workingDir
& $cliPath /type:"generators" /profile:"TS-FORM"
```

## Troubleshooting
- **Entity Not Found**: Ensure the entities listed in `DynamicsCrm.DevKit.Cli.json` (under the `generators` -> `my-profile` -> `entities` section) actually exist in the CRM.
- **Login Failed**: Check your connection credentials.
