# Goal 17: Optimize DevKit Files / BatFile Item Template

## Goal

Keep the DevKit files item template fast and remove unnecessary work only if timing proves a bottleneck.

## Current Template

- Template: `12. DevKit files`
- Wizard: `DynamicsCrm.DevKit/Wizard/ItemTemplates/BatFile.cs`
- Project items:
  - `batfile.bat`
  - `devkit.js`
  - `devkit.d.ts`
  - `Plugin-Managed-Identity-Config.json`
  - `Plugin-Managed-Identity.md`

## Current Bottleneck

This template is likely low risk. After OK, it mostly:

- reads embedded resources
- builds CLI connection args for `.bat` files
- uses `ShouldAddProjectItem` to include only the selected files

## Scope

Inspect and update only if needed:

- `DynamicsCrm.DevKit/Wizard/ItemTemplates/BatFile.cs`
- `DynamicsCrm.DevKit/Lib/VsixHelper.cs`
- DevKit files `.vstemplate`
- embedded resources referenced by the wizard

## Work

1. Use instrumentation from Goal 01 to capture baseline.
2. Confirm embedded resource reads are not slow.
3. Confirm `ShouldAddProjectItem` is deterministic and fast.
4. Avoid changing behavior unless timing proves a real issue.
5. If needed, cache embedded resource bodies.

## Do Not

- Do not split this template into multiple templates unless the user explicitly approves.
- Do not change generated script contents unless required.
- Do not change CLI connection arg behavior.

## Verify

1. Build the VSIX project.
2. Generate each selectable variant:
   - `devkit.js`
   - each `.bat` option
   - `Plugin-Managed-Identity.ps1` package
3. Verify only the expected files are added for each variant.
4. Confirm generated content remains correct.

## Definition of Done

- Template remains fast.
- Selected variants still include the correct files only.
- Any optimization is justified by measured timing.

