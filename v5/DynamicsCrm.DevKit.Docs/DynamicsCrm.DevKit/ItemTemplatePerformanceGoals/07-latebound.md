# Goal 07: Optimize C# Late Bound Item Template

## Goal

Reduce the OK-click wait for the C# Late Bound item template.

## Current Template

- Template: `01. C# Late Bound Class`
- Wizard: `DynamicsCrm.DevKit/Wizard/ItemTemplates/LateBound.cs`
- Project items: `Class.cs`, `GeneratedClass.cs`

## Current Bottleneck

After OK, the wizard:

- builds custom partial class content
- generates full late-bound class content
- uses `ShouldAddProjectItem` twice
- updates `{Entity}.generated.cs` in `RunFinished`
- may rewrite `{Entity}.cs` from `public partial` to `internal partial`

Large entity metadata can make generated class creation expensive.

## Scope

Inspect and update only if needed:

- `DynamicsCrm.DevKit/Wizard/ItemTemplates/LateBound.cs`
- `DynamicsCrm.DevKit/Wizard/ItemTemplates/ItemTemplateBase.cs`
- `DynamicsCrm.DevKit.Shared/Logic/CSharpLateBound.cs`
- `DynamicsCrm.DevKit.Shared/Helper.cs` only for read-only context unless absolutely necessary

## Work

1. Use instrumentation from Goal 01 to capture baseline.
2. Identify whether time is spent in metadata lookup, generated code creation, file compare/write, or template callbacks.
3. Make `ShouldAddProjectItem` fast and synchronous if feasible.
4. Avoid rewriting `{Entity}.cs` after template completion if the intended modifier can be generated correctly upfront.
5. Consider moving `{Entity}.generated.cs` refresh to background if generation is the bottleneck.
6. Keep generated output equivalent.

## Do Not

- Do not change public generated model shape.
- Do not remove the generated partial class file.
- Do not refactor large shared helpers unless the user explicitly approves.

## Verify

1. Build the relevant projects.
2. Generate Late Bound for:
   - a small entity
   - a large entity with many attributes
3. Verify files:
   - `{Entity}.cs`
   - `{Entity}.generated.cs`
4. Verify existing generated file update behavior still works.
5. Confirm elapsed time improves in instrumentation.

## Definition of Done

- Main file appears faster after OK.
- Generated class remains correct.
- Existing generated file update behavior is preserved.

