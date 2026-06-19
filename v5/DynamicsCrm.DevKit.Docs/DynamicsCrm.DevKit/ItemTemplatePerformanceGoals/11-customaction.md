# Goal 11: Optimize C# Custom Action Item Template

## Goal

Reduce the OK-click wait for the C# Custom Action item template.

## Current Template

- Template: `05. C# Custom Action Class`
- Wizard: `DynamicsCrm.DevKit/Wizard/ItemTemplates/CustomAction.cs`
- Project item: `Class.cs`

## Current Bottleneck

After OK, the wizard:

- loads custom/default T4
- builds `T4Context`
- processes T4
- computes `PluginOrder`
- may perform context work that is not needed by this template

## Scope

Inspect and update only if needed:

- `DynamicsCrm.DevKit/Wizard/ItemTemplates/CustomAction.cs`
- `DynamicsCrm.DevKit/Lib/T4Helper.cs`
- `DynamicsCrm.DevKit/Lib/Forms/FormPlugin.xaml.cs`
- `DynamicsCrm.DevKit/Lib/VsixHelper.cs`

## Work

1. Use instrumentation from Goal 01 to capture baseline.
2. Cache T4 body where appropriate.
3. Compute `PluginOrder` once.
4. Avoid unused context properties if feasible.
5. Preserve replacement keys: `$customaction$`, `$Class$`, `$PluginOrder$`.

## Do Not

- Do not change Custom Action generated code semantics.
- Do not change template selection behavior.
- Do not include Plugin or CustomApi work in this goal.

## Verify

1. Build the VSIX project.
2. Generate Custom Action item for bound and unbound action cases if available.
3. Verify generated class and registration output.
4. Confirm elapsed time improves in instrumentation.

## Definition of Done

- Generated Custom Action code remains correct.
- OK-click wait improves or the measured bottleneck is documented.

