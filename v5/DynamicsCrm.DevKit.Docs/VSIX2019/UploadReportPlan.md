# VSIX 2019 Upload Report Plan

## Summary

Create a separate VSIX project named `DynamicsCrm.DevKit.2019.vsix`, targeting Visual Studio 2019 `16.x`, with one feature only:

1. Right-click an `.rdl` file.
2. Show the `Upload Report` command.
3. Prompt for Dataverse login.
4. Show report mapping.
5. Upload the local `.rdl` content to Dataverse `report.bodytext`.

This project must not port the main VSIX feature set. It must not add project templates, item templates, report creation, web resource deployment, or other DevKit commands.

## Key Changes

- Create a new VSIX project in the existing solution:
  - Target `.NET Framework 4.8`.
  - Set `MinimumVisualStudioVersion=16.0`.
  - Set VSIX manifest install targets to `[16.0,17.0)` for Community, Professional, and Enterprise.
  - Use Visual Studio SDK / VSSDK BuildTools `16.x`.
  - Avoid `Community.VisualStudio.Toolkit.17` and other VS2022-only dependencies.
- Add one command:
  - Menu text: `Upload Report`.
  - Visible only for selected or active `.rdl` files.
  - Place it in the Solution Explorer item node context menu.
  - Add editor context menu support only if it stays simple.
- Reuse existing shared logic where possible:
  - Import `DynamicsCrm.DevKit.Shared.projitems`.
  - Use `DeploymentService.GetReportsBySolutionAsync(solution)`.
  - Use `DeploymentService.DeployReportAsync(reportId, fullFileName)`.
  - Reuse or minimally port the current login UI (`FormConnection`, `UserControlConnection`, `CacheHelper`) if it builds on VS2019.
  - If the login UI depends on VS2022-only APIs, replace only those APIs with VS2019-compatible equivalents.

## Mapping Behavior

- Store VSIX report mappings in solution-level `DynamicsCrm.DevKit.Config.json`.
- Extend `ConfigJson` with a new collection, for example `Reports`.
- Each report mapping stores at minimum:
  - Local file path.
  - Solution unique name.
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
4. If a mapping exists for the local `.rdl`, preselect it.
5. If no mapping exists, fallback to matching by local `.rdl` filename against Dataverse `report.filename`.
6. If `DynamicsCrm.DevKit.Cli.json` has `uploadreports` language/solution values, use them as defaults.
7. User confirms the mapping.
8. VSIX saves the mapping to `DynamicsCrm.DevKit.Config.json`.
9. VSIX uploads the report.

## Failure Handling

- If login is cancelled, do not upload and show a short message.
- If the selected file is not `.rdl`, hide the command; if invoked anyway, show an unsupported file message.
- If no matching report is found, show the mapping dialog and require manual selection.
- If a saved mapping points to a deleted report or a report no longer in the selected solution, ignore the stale mapping and require a new selection.
- If upload succeeds, show a status/message containing the org URL, local file, report filename, and language.
- If Dataverse upload fails, show the exception message and do not swallow the error.

## Test Plan

- Build the new VSIX project with Visual Studio 2019 / MSBuild 16.x.
- Confirm the VSIX manifest accepts `[16.0,17.0)` only.
- Install or debug the VSIX in Visual Studio Community 2019 `16.11.53`.
- Verify context menu behavior:
  - Right-click `.rdl` shows `Upload Report`.
  - Right-click other file types does not show `Upload Report`.
- Verify mapping behavior:
  - First upload creates or updates the `Reports` section in `DynamicsCrm.DevKit.Config.json`.
  - Second upload of the same file preselects the saved mapping.
  - Stale mappings are detected and replaced.
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
- A Visual Studio 2019 extension template may be used to create the initial skeleton if that is faster than writing the project file manually.
