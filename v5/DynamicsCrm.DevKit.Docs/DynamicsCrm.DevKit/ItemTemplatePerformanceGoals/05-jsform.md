# Goal 05: Optimize JavaScript Form Item Template

## Goal

Reduce the OK-click wait for the JavaScript Form item template.

## Current Template

- Template: `02. Javascript Form`
- Wizard: `DynamicsCrm.DevKit/Wizard/ItemTemplates/JsForm.cs`
- Project items: `Javascript.js`, `Javascript.d.ts`, `Javascript.form.js`

## Current Bottleneck

After OK, the wizard can:

- generate default `{Entity}.js`
- generate `{Entity}.form.js`
- generate `{Entity}.d.ts`
- fetch forms, process data, quick view forms, and related metadata
- write generated files in `RunFinished`

## Scope

Inspect and update only if needed:

- `DynamicsCrm.DevKit/Wizard/ItemTemplates/JsForm.cs`
- `DynamicsCrm.DevKit.Shared/Logic/JsForm.cs`
- `DynamicsCrm.DevKit.Shared/Logic/JsTypeScriptDeclaration.cs`
- `DynamicsCrm.DevKit.Shared/Services/CodeGenService.cs`
- `DynamicsCrm.DevKit.Shared/Services/MetadataService.cs`
- `DynamicsCrm.DevKit.Shared/Extensions.cs`

## Work

1. Use instrumentation from Goal 01 to capture baseline.
2. Share form/metadata data between default `.js`, `.form.js`, and `.d.ts` generation.
3. Avoid duplicate form XML reads.
4. Make `ShouldAddProjectItem` fast and synchronous if feasible.
5. Avoid rewriting `.d.ts` when content is unchanged.
6. Batch generated file writes in `RunFinished`.

## Do Not

- Do not change generated JavaScript API behavior.
- Do not overwrite user code in `{Entity}.js`.
- Do not include JavaScript WebApi work in this goal.

## Verify

1. Build the relevant projects.
2. Generate JavaScript Form for an entity with active forms.
3. Verify files:
   - `{Entity}.js`
   - `{Entity}.form.js`
   - `{Entity}.d.ts`
4. Confirm dependency nesting still works.
5. Confirm elapsed time improves in instrumentation.

## Definition of Done

- OK-click wait improves.
- Generated `.form.js` and `.d.ts` remain correct.
- Existing user file behavior is preserved.

