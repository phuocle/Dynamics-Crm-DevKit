# Goal 08: Optimize TypeScript Dialog Item Template

## Goal

Reduce the OK-click wait for the TypeScript Dialog item template.

## Current Template

- Template: `15. TypeScript Dialog`
- Wizard: `DynamicsCrm.DevKit/Wizard/ItemTemplates/TsDialog.cs`
- Project items: `TypeScript.ts`, `TypeScript.dialog.ts`

## Current Bottleneck

After OK, the wizard:

- uses the selected dialog form from the dialog list
- generates `{Dialog}.dialog.ts`
- generates default `{Dialog}.ts`
- uses `ShouldAddProjectItem` twice
- preserves existing `{Dialog}.ts`
- writes generated files in `RunFinished`

## Scope

Inspect and update only if needed:

- `DynamicsCrm.DevKit/Wizard/ItemTemplates/TsDialog.cs`
- `DynamicsCrm.DevKit.Shared/Logic/TsDialog.cs`
- `DynamicsCrm.DevKit.Shared/Services/CodeGenService.cs`
- `DynamicsCrm.DevKit.Shared/Services/MetadataService.cs`

## Work

1. Use instrumentation from Goal 01 to capture baseline.
2. Parse selected dialog XML once and reuse the parsed result if feasible.
3. Make `ShouldAddProjectItem` fast and synchronous if feasible.
4. Preserve existing `{Dialog}.ts` behavior.
5. Avoid rewriting `{Dialog}.dialog.ts` when content is unchanged.
6. Keep `DependentUpon` behavior.

## Do Not

- Do not overwrite user code in `{Dialog}.ts`.
- Do not change generated TypeScript dialog API shape.
- Do not include JavaScript Dialog work in this goal.

## Verify

1. Build the relevant projects.
2. Generate TypeScript Dialog for at least one dialog form.
3. Generate again when `{Dialog}.ts` already exists.
4. Verify files:
   - `{Dialog}.ts`
   - `{Dialog}.dialog.ts`
5. Confirm existing user file is preserved.
6. Confirm elapsed time improves in instrumentation.

## Definition of Done

- Existing user dialog file is not overwritten.
- Generated dialog file remains correct.
- OK-click wait improves or remaining bottleneck is documented.

