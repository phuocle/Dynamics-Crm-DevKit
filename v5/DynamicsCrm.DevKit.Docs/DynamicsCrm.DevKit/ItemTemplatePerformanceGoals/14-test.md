# Goal 14: Optimize C# Test Item Template

## Goal

Reduce the wait and UI delay for the C# Test item template.

## Current Template

- Template: `09. C# Test Class`
- Wizard: `DynamicsCrm.DevKit/Wizard/ItemTemplates/Test.cs`
- Project item: `Class.cs`

## Current Bottleneck

The dialog loads plugin test candidates by scanning referenced project `.cs` files. After OK, the wizard:

- loads custom/default T4
- builds `T4Context`
- processes T4
- computes `PluginOrder`

The source scan may happen before OK, but users still experience it as part of adding the item.

## Scope

Inspect and update only if needed:

- `DynamicsCrm.DevKit/Wizard/ItemTemplates/Test.cs`
- `DynamicsCrm.DevKit/Lib/PluginTestDiscovery.cs`
- `DynamicsCrm.DevKit/Lib/Forms/FormPlugin.xaml.cs`
- `DynamicsCrm.DevKit/Lib/T4Helper.cs`

## Work

1. Use instrumentation from Goal 01 to capture baseline.
2. Add timing around plugin test candidate discovery.
3. Cache candidates per test project if feasible.
4. Avoid scanning `bin`, `obj`, `.vs`, and package folders; preserve current ignore behavior.
5. Cache Test T4 body where appropriate.
6. Compute `PluginOrder` once.

## Do Not

- Do not change test class naming convention.
- Do not remove candidate discovery.
- Do not include UiTest work in this goal.

## Verify

1. Build the VSIX project.
2. Generate Test item in a test project with project references.
3. Confirm candidate list is correct.
4. Confirm generated test class compiles.
5. Confirm dialog load or OK-click elapsed time improves.

## Definition of Done

- Candidate discovery remains correct.
- Generated Test code remains correct.
- The measured slow phase improves or is documented.

