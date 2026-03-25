---
description: "Run a specific CLI profile for TestClientCode (JS-FORM, JS-WEBAPI, TS-FORM, TS-WEBAPI)"
---

# Run CLI Workflow

This workflow runs one of 4 TestClientCode CLI profiles.

## Available Profiles

| Profile | Description |
|---------|-------------|
| `TestClientCode-JS-FORM` | Generate JS form files |
| `TestClientCode-JS-WEBAPI` | Generate JS WebAPI files |
| `TestClientCode-TS-FORM` | Generate TS form files |
| `TestClientCode-TS-WEBAPI` | Generate TS WebAPI files |

> If no profile is specified, ask: "Which CLI profile would you like to run?" and wait for a response.

## Steps

1. Build CLI in DEBUG mode
2. Read the profile from `DynamicsCrm.DevKit.Cli\Properties\launchSettings.json`
3. `cd` to the profile's `workingDirectory`
4. Run CLI with profile's `commandLineArgs`

## Running with Entity Filter

Example: `/run-cli ts-form Account` means generate only the `Account` entity.

1. From the profile, locate the folder containing `DynamicsCrm.DevKit.Cli.json`
2. Find the matching profile section, edit `entities` to include only `Account`
3. Run the CLI
4. **After running, UNDO the change** to `DynamicsCrm.DevKit.Cli.json` so there are no git changes

## Constraints

- This workflow is for running CLI only
- Do not make any other changes beyond what is described above
