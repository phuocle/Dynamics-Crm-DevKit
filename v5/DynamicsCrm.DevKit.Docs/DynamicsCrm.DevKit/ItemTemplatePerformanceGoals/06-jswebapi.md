# Goal 06: Optimize JavaScript WebApi Item Template

## Goal

Reduce the OK-click wait for the JavaScript WebApi item template.

## Current Template

- Template: `03. Javascript WebApi`
- Wizard: `DynamicsCrm.DevKit/Wizard/ItemTemplates/JsWebApi.cs`
- Project items: `Javascript.js`, `Javascript.d.ts`, `Javascript.webapi.js`

## Current Bottleneck

After OK, the wizard can:

- generate default `{Entity}.js`
- generate `{Entity}.webapi.js`
- generate `{Entity}.d.ts`
- fetch full entity metadata
- fetch lookup target metadata
- write generated files in `RunFinished`

## Scope

Inspect and update only if needed:

- `DynamicsCrm.DevKit/Wizard/ItemTemplates/JsWebApi.cs`
- `DynamicsCrm.DevKit.Shared/Logic/JsWebApi.cs`
- `DynamicsCrm.DevKit.Shared/Logic/JsTypeScriptDeclaration.cs`
- `DynamicsCrm.DevKit.Shared/Services/CodeGenService.cs`
- `DynamicsCrm.DevKit.Shared/Services/MetadataService.cs`
- `DynamicsCrm.DevKit.Shared/Extensions.cs`

## Work

1. Use instrumentation from Goal 01 to capture baseline.
2. Cache or batch lookup target metadata fetches.
3. Avoid repeated full metadata fetches for the selected entity.
4. Make `ShouldAddProjectItem` fast and synchronous if feasible.
5. Avoid rewriting `.d.ts` when content is unchanged.
6. Batch generated file writes in `RunFinished`.

## Do Not

- Do not change generated JavaScript WebApi behavior.
- Do not overwrite user code in `{Entity}.js`.
- Do not include JavaScript Form work in this goal.

## Verify

1. Build the relevant projects.
2. Generate JavaScript WebApi for an entity with lookup fields.
3. Verify files:
   - `{Entity}.js`
   - `{Entity}.webapi.js`
   - `{Entity}.d.ts`
4. Confirm dependency nesting still works.
5. Confirm elapsed time improves in instrumentation.

## Definition of Done

- OK-click wait improves.
- Lookup metadata remains correct.
- Generated `.webapi.js` and `.d.ts` remain correct.

