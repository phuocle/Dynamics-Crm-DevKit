# Goal 10: Optimize C# Plugin Item Template

## Goal

Reduce the OK-click wait for the C# Plugin item template.

## Current Template

- Template: `04. C# Plugin Class`
- Wizard: `DynamicsCrm.DevKit/Wizard/ItemTemplates/Plugin.cs`
- Project item: `Class.cs`

## Current Bottleneck

After OK, the wizard:

- loads custom/default T4
- builds `T4Context`
- processes T4
- computes `PluginOrder`
- may query plugin comment metadata

## Scope

Inspect and update only if needed:

- `DynamicsCrm.DevKit/Wizard/ItemTemplates/Plugin.cs`
- `DynamicsCrm.DevKit/Lib/T4Helper.cs`
- `DynamicsCrm.DevKit/Lib/Forms/FormPlugin.xaml.cs`
- `DynamicsCrm.DevKit/Lib/VsixHelper.cs`

## Work

1. Use instrumentation from Goal 01 to capture baseline.
2. Cache default/custom T4 body where appropriate.
3. Compute `PluginOrder` once.
4. Avoid `PluginComment` lookup unless the selected template needs it, if feasible.
5. Preserve replacement keys: `$plugin$`, `$Class$`, `$PluginOrder$`.

## Do Not

- Do not change default Plugin generated code semantics.
- Do not change plugin registration output.
- Do not include CustomAction or CustomApi work in this goal.

## Verify

1. Build the VSIX project.
2. Generate Plugin item for a real entity/message/stage/execution combination.
3. Verify generated class and registration attribute.
4. Confirm elapsed time improves in instrumentation.

## Definition of Done

- Generated Plugin code remains correct.
- OK-click wait improves or the measured bottleneck is documented.

