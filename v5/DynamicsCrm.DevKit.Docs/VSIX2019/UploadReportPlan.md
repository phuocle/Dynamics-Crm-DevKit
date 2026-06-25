# VSIX 2019 Report Upload Note

## Summary

`DynamicsCrm.DevKit.2019` is a separate lightweight VSIX for report upload only. It exists because Dynamics 365 Report Authoring and SSRS report design workflows still depend on Visual Studio 2019-era tooling.

Download the VSIX from [DynamicsCrm.DevKit GitHub Releases](https://github.com/phuocle/Dynamics-Crm-DevKit/releases). It is not published to Visual Studio Marketplace.

The VSIX supports one feature:

1. Right-click an `.rdl` file.
2. Show the `Upload Dynamics 365 Report` command.
3. Prompt for Dataverse login.
4. Show report mapping.
5. Upload the local `.rdl` content to Dataverse `report.bodytext`.

This project must not port the main VSIX feature set. It must not add project templates, item templates, report creation, web resource deployment, or other DevKit commands.

## Key Changes

- Create a new VSIX project in the existing solution:
  - Target `.NET Framework 4.7.2`.
  - Set `MinimumVisualStudioVersion=16.0`.
  - Set VSIX manifest install targets to Visual Studio 2019 `[16.0,17.0)` only.
  - Use Visual Studio SDK / VSSDK BuildTools `16.x`.
  - Avoid `Community.VisualStudio.Toolkit.17` and other VS2022-only dependencies.
- Add one command:
  - Menu text: `Upload Dynamics 365 Report`.
  - Visible only for selected or active `.rdl` files.
  - Place it in the Solution Explorer item node context menu.
  - Add editor context menu support only if it stays simple.
- Keep dependencies small:
  - Link only the shared models needed by the lite VSIX.
  - Use Microsoft XrmTooling OOB login control.
  - Deploy by updating Dataverse `report.bodytext`.

## Mapping Behavior

- Store VSIX report mappings in solution-level `DynamicsCrm.DevKit.Config.json`.
- Extend `ConfigJson` with `Reports`.
- Each report mapping stores at minimum:
  - Local file path.
  - Dataverse report id.
  - Dataverse report filename.
  - Language.
- Do not change the existing `WebResources` mapping format.
- `DynamicsCrm.DevKit.Cli.json` is only a hint source:
  - Read `uploadreports.solution` and `uploadreports.languages` to prefill the mapping dialog when no VSIX report mapping exists.
  - Do not use `DynamicsCrm.DevKit.Cli.json` as the primary VSIX mapping store.

Mapping flow:

1. User invokes `Upload Report` on an `.rdl` file.
2. VSIX logs in to Dataverse or reuses cached connection.
3. VSIX reads `DynamicsCrm.DevKit.Config.json`.
4. If a mapping exists for the local `.rdl`, preselect it for first confirmation in the current Visual Studio session.
5. If no mapping exists, fallback to matching by local `.rdl` filename against Dataverse `report.filename`.
6. User confirms the mapping.
7. VSIX saves the mapping to `DynamicsCrm.DevKit.Config.json`.
8. VSIX caches the mapping in memory for the current Visual Studio session.
9. VSIX uploads the report.

On a second upload of the same `.rdl` in the same Visual Studio session, the cached service and cached mapping are reused and the mapping dialog is not shown.

## Failure Handling

- If login is cancelled, do not upload and show a short message.
- If the selected file is not `.rdl`, hide the command; if invoked anyway, show an unsupported file message.
- If no matching report is found, show the mapping dialog and require manual selection.
- If a saved mapping points to a deleted report or a report no longer in the selected solution, ignore the stale mapping and require a new selection.
- If upload succeeds, show Visual Studio status bar text such as `Deployed report !!!`.
- If Dataverse upload fails, show the exception message and do not swallow the error.

## Test Plan

- Build the new VSIX project with Visual Studio 2019 / MSBuild 16.x.
- Confirm the VSIX manifest accepts Visual Studio 2019 targets only.
- Install or debug the VSIX in Visual Studio Community 2019 `16.11.53`.
- Verify context menu behavior:
  - Right-click `.rdl` shows `Upload Report`.
  - Right-click other file types does not show `Upload Report`.
- Verify mapping behavior:
  - First upload creates or updates the `Reports` section in `DynamicsCrm.DevKit.Config.json`.
  - Second upload of the same file in the same VS session uses cached mapping and does not show the mapping dialog.
- Verify upload behavior:
  - Local `.rdl` content is written to Dataverse `report.bodytext`.
  - Cancel mapping does not upload.
  - Failed upload shows an actionable error.
- Verify the current main VSIX still builds and remains unaffected.

## Assumptions

- The new project lives in the same solution.
- The project name is `DynamicsCrm.DevKit.2019.vsix`.
- The only supported feature is uploading existing `.rdl` files to existing Dataverse reports.
- Report mappings are stored in `DynamicsCrm.DevKit.Config.json`.
- `DynamicsCrm.DevKit.Cli.json` remains the CLI profile file and is not the VSIX report mapping store.
- The release artifact is copied by `DynamicsCrm.DevKit.Scripts\Release-DynamicsCrm-DevKit-2019.ps1`.
- A Visual Studio 2019 extension template may be used to create the initial skeleton if that is faster than writing the project file manually.
