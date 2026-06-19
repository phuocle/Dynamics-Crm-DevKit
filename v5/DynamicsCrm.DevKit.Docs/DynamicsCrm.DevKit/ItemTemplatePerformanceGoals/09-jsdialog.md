# Goal 09: Optimize JavaScript Dialog Item Template

## Goal

Reduce the OK-click wait for the JavaScript Dialog item template.

## Current Template

- Template: `16. JavaScript Dialog`
- Wizard: `DynamicsCrm.DevKit/Wizard/ItemTemplates/JsDialog.cs`
- Project items: `JavaScript.js`, `JavaScript.dialog.js`, `JavaScript.d.ts`

## Current Bottleneck

After OK, the wizard:

- uses the selected dialog form from the dialog list
- generates `{Dialog}.dialog.js`
- generates `{Dialog}.dialog.d.ts`
- generates default `{Dialog}.js`
- uses `ShouldAddProjectItem` three times
- preserves existing `{Dialog}.js`
- writes generated files in `RunFinished`

## Scope

Inspect and update only if needed:

- `DynamicsCrm.DevKit/Wizard/ItemTemplates/JsDialog.cs`
- `DynamicsCrm.DevKit.Shared/Logic/JsDialog.cs`
- `DynamicsCrm.DevKit.Shared/Services/CodeGenService.cs`
- `DynamicsCrm.DevKit.Shared/Services/MetadataService.cs`

## Work

1. Use instrumentation from Goal 01 to capture baseline.
2. Parse selected dialog XML once and reuse the parsed result if feasible.
3. Make `ShouldAddProjectItem` fast and synchronous if feasible.
4. Preserve existing `{Dialog}.js` behavior.
5. Avoid rewriting generated `.dialog.js` and `.dialog.d.ts` files when content is unchanged.
6. Keep `DependentUpon` behavior.

## Do Not

- Do not overwrite user code in `{Dialog}.js`.
- Do not change generated JavaScript dialog API shape.
- Do not include TypeScript Dialog work in this goal.

## Verify

1. Build the relevant projects.
2. Generate JavaScript Dialog for at least one dialog form.
3. Generate again when `{Dialog}.js` already exists.
4. Verify files:
   - `{Dialog}.js`
   - `{Dialog}.dialog.js`
   - `{Dialog}.dialog.d.ts`
5. Confirm existing user file is preserved.
6. Confirm elapsed time improves in instrumentation.

## Definition of Done

- Existing user dialog file is not overwritten.
- Generated dialog files remain correct.
- OK-click wait improves or remaining bottleneck is documented.

