# Goal 03: Optimize TypeScript Form Item Template

## Goal

Reduce the OK-click wait for the TypeScript Form item template.

## Current Template

- Template: `13. TypeScript Form`
- Wizard: `DynamicsCrm.DevKit/Wizard/ItemTemplates/TsForm.cs`
- Project items: `TypeScript.ts`, `TypeScript.form.ts`
- Extra generated file: `OptionSet.ts`

## Current Bottleneck

After OK, the wizard can:

- generate default `{Entity}.ts`
- generate `{Entity}.form.ts`
- fetch full entity metadata
- fetch active forms
- fetch BPF/process data
- parse quick view forms
- fetch quick view entity metadata
- update or create `OptionSet.ts`

This is likely one of the slowest real-world templates.

## Scope

Inspect and update only if needed:

- `DynamicsCrm.DevKit/Wizard/ItemTemplates/TsForm.cs`
- `DynamicsCrm.DevKit.Shared/Logic/TsForm.cs`
- `DynamicsCrm.DevKit.Shared/Logic/TsOptionSet.cs`
- `DynamicsCrm.DevKit.Shared/Services/CodeGenService.cs`
- `DynamicsCrm.DevKit.Shared/Services/MetadataService.cs`
- `DynamicsCrm.DevKit.Shared/Extensions.cs`

## Work

1. Use instrumentation from Goal 01 to capture baseline.
2. Identify duplicate form/metadata reads between default `{Entity}.ts` generation and `{Entity}.form.ts` generation.
3. Share one entity/form metadata snapshot where possible.
4. Make `ShouldAddProjectItem` fast and synchronous if feasible.
5. Skip `OptionSet.ts` refresh when the entity has no option-set fields or generated content is unchanged.
6. Consider moving `OptionSet.ts` refresh out of the blocking OK path.
7. Preserve behavior for existing `{Entity}.ts` files.

## Do Not

- Do not change the public TypeScript API shape.
- Do not remove `OptionSet.ts` support.
- Do not overwrite user code in `{Entity}.ts`.
- Do not broaden this into JS Form work.

## Verify

1. Build the relevant projects.
2. Generate TypeScript Form for:
   - an entity with multiple forms
   - an entity with quick view forms, if available
   - an entity with option-set fields
3. Verify files:
   - `{Entity}.ts`
   - `{Entity}.form.ts`
   - `OptionSet.ts`
4. Confirm user file preservation still works.
5. Confirm warm-cache OK-click elapsed time improves.

## Definition of Done

- Main file appears faster after OK.
- Generated form code remains compatible.
- `OptionSet.ts` is correct and not rewritten unnecessarily.
- Instrumentation explains remaining slow phases.

