# Goal 04: Optimize TypeScript WebApi Item Template

## Goal

Reduce the OK-click wait for the TypeScript WebApi item template.

## Current Template

- Template: `14. TypeScript WebApi`
- Wizard: `DynamicsCrm.DevKit/Wizard/ItemTemplates/TsWebApi.cs`
- Project items: `TypeScript.ts`, `TypeScript.webapi.ts`
- Extra generated file: `OptionSet.ts`

## Current Bottleneck

After OK, the wizard can:

- generate `{Entity}.webapi.ts`
- fetch full entity metadata
- fetch lookup target metadata
- update or create `OptionSet.ts`

## Scope

Inspect and update only if needed:

- `DynamicsCrm.DevKit/Wizard/ItemTemplates/TsWebApi.cs`
- `DynamicsCrm.DevKit.Shared/Logic/TsWebApi.cs`
- `DynamicsCrm.DevKit.Shared/Logic/TsOptionSet.cs`
- `DynamicsCrm.DevKit.Shared/Services/MetadataService.cs`
- `DynamicsCrm.DevKit.Shared/Extensions.cs`

## Work

1. Use instrumentation from Goal 01 to capture baseline.
2. Batch or cache lookup target metadata fetches.
3. Avoid repeated full metadata fetches for the selected entity.
4. Make `ShouldAddProjectItem` fast and synchronous if feasible.
5. Skip `OptionSet.ts` refresh when not needed.
6. Reuse any shared `OptionSet.ts` improvement from Goal 03.

## Do Not

- Do not change public WebApi TypeScript API shape.
- Do not remove lookup metadata support.
- Do not overwrite user code in `{Entity}.ts`.
- Do not include JS WebApi work in this goal.

## Verify

1. Build the relevant projects.
2. Generate TypeScript WebApi for:
   - an entity with lookup fields
   - an entity with option-set fields
3. Verify files:
   - `{Entity}.ts`
   - `{Entity}.webapi.ts`
   - `OptionSet.ts`
4. Confirm metadata target collection names are still correct.
5. Confirm elapsed time improves in instrumentation.

## Definition of Done

- OK-click wait improves.
- Lookup metadata remains correct.
- `OptionSet.ts` is correct and not rewritten unnecessarily.

