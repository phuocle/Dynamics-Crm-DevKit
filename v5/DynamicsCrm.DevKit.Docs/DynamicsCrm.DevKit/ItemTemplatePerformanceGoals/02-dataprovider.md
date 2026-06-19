# Goal 02: Optimize C# Data Provider Item Template

## Goal

Reduce the OK-click wait for the C# Data Provider item template.

## Current Template

- Template: `08. C# Data Provider Class`
- Wizard: `DynamicsCrm.DevKit/Wizard/ItemTemplates/DataProvider.cs`
- Project items: `Retrieve.cs`, `RetrieveMultiple.cs`, `Create.cs`, `Update.cs`, `Delete.cs`

## Current Bottleneck

After OK, the wizard:

- loads 5 default T4 template bodies
- processes 5 T4 templates sequentially
- builds a shared T4 context
- computes `PluginOrder`
- creates 5 physical files

This is the highest-impact C# template to optimize.

## Scope

Inspect and update only if needed:

- `DynamicsCrm.DevKit/Wizard/ItemTemplates/DataProvider.cs`
- `DynamicsCrm.DevKit/Lib/T4Helper.cs`
- `DynamicsCrm.DevKit/Lib/VsixHelper.cs`
- `DynamicsCrm.DevKit/Lib/Forms/FormPlugin.xaml.cs`
- DataProvider `.vstemplate` only if absolutely necessary

## Work

1. Use instrumentation from Goal 01 to capture baseline.
2. Cache DataProvider T4 bodies for `Create`, `Update`, `Delete`, `Retrieve`, and `RetrieveMultiple`.
3. Build `T4Context` once.
4. Avoid repeated `PluginOrder` or context property reads.
5. Investigate whether the 5 outputs can be generated through one prepared T4 session or one generator pass.
6. Keep generated file names and replacement keys unchanged.

## Do Not

- Do not change DataProvider generated class semantics.
- Do not remove any of the 5 generated files.
- Do not change public template name.
- Do not refactor unrelated T4 templates.

## Verify

1. Build the VSIX project.
2. Generate a DataProvider item before and after the change using the same selected data source.
3. Compare all 5 generated files:
   - `Create.cs`
   - `Update.cs`
   - `Delete.cs`
   - `Retrieve.cs`
   - `RetrieveMultiple.cs`
4. Confirm output is equivalent except intended formatting changes, if any.
5. Confirm instrumentation shows lower OK-click elapsed time.

## Definition of Done

- OK-click elapsed time improves by at least 50% on warm cache or the measured bottleneck is clearly documented.
- All 5 files are still generated.
- Generated code remains compatible with existing DataProvider usage.

