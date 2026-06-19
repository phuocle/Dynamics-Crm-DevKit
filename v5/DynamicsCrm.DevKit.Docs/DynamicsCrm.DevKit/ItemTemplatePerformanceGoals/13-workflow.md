# Goal 13: Optimize C# Workflow Item Template

## Goal

Reduce the OK-click wait for the C# Workflow item template.

## Current Template

- Template: `07. C# Workflow Class`
- Wizard: `DynamicsCrm.DevKit/Wizard/ItemTemplates/Workflow.cs`
- Project item: `Class.cs`

## Current Bottleneck

After OK, the wizard:

- loads custom/default T4
- builds full `T4Context`
- processes T4
- computes `PluginOrder`

Workflow does not need all plugin-specific context fields.

## Scope

Inspect and update only if needed:

- `DynamicsCrm.DevKit/Wizard/ItemTemplates/Workflow.cs`
- `DynamicsCrm.DevKit/Lib/T4Helper.cs`
- `DynamicsCrm.DevKit/Lib/Forms/FormPlugin.xaml.cs`
- `DynamicsCrm.DevKit/Lib/VsixHelper.cs`

## Work

1. Use instrumentation from Goal 01 to capture baseline.
2. Cache Workflow T4 body where appropriate.
3. Compute `PluginOrder` once.
4. Avoid plugin-specific metadata/context work if not needed.
5. Preserve replacement keys: `$workflow$`, `$Class$`, `$PluginOrder$`.

## Do Not

- Do not change generated Workflow class semantics.
- Do not change CodeActivity inheritance behavior.
- Do not include Plugin/Test/UiTest work in this goal.

## Verify

1. Build the VSIX project.
2. Generate Workflow item.
3. Verify generated class compiles.
4. Confirm elapsed time improves in instrumentation.

## Definition of Done

- Generated Workflow code remains correct.
- OK-click wait improves or the measured bottleneck is documented.

