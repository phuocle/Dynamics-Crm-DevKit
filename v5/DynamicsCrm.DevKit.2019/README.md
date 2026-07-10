# DynamicsCrm.DevKit.2019

DynamicsCrm.DevKit.2019 is a lite Visual Studio 2019 VSIX for Dynamics 365/Dataverse SSRS report deployment.

## Features

- Adds `Upload Dynamics 365 Report` to the context menu for `.rdl` files.
- Uses the Microsoft XrmTooling login control.
- Maps a local `.rdl` file to an existing Dataverse report.
- Stores report mappings in solution-level `DynamicsCrm.DevKit.Config.json`.
- Uploads report content to Dataverse `report.bodytext`.

## Version

- Version: `4.44.44.44`
- Build: `31.12.2026 23.59.59`

## Scope

This VSIX is intentionally limited to Visual Studio 2019 report upload support. It does not include the full project templates, item templates, code generation, web resource deployment, or other commands from the main DynamicsCrm.DevKit VSIX.
