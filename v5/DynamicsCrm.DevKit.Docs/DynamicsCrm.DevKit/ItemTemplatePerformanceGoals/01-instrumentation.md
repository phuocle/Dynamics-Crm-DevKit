# Goal 01: Add Item Template Performance Instrumentation

## Goal

Add low-noise timing instrumentation for the VSIX item-template flow before changing optimization logic.

This goal should not intentionally change generated output or template behavior.

## Why

Users report waiting more than 20 seconds after clicking OK. Without timings, optimization work is guesswork. The first step is to prove where time is spent per template.

## Scope

Inspect and update only if needed:

- `DynamicsCrm.DevKit/Wizard/ItemTemplates/*.cs`
- `DynamicsCrm.DevKit/Wizard/ItemTemplates/ItemTemplateBase.cs`
- `DynamicsCrm.DevKit/Lib/T4Helper.cs`
- `DynamicsCrm.DevKit/Lib/Forms/FormItem.xaml.cs`
- `DynamicsCrm.DevKit/Lib/Forms/FormPlugin.xaml.cs`
- `DynamicsCrm.DevKit/Lib/VsixHelper.cs`

Optional only if required:

- `DynamicsCrm.DevKit.Shared/Services/MetadataService.cs`

## Work

1. Create a small internal timing helper for item-template performance logs.
2. Include a correlation id per wizard run.
3. Log start/end/elapsed for:
   - dialog shown
   - OK clicked to `RunStarted` complete
   - `ShouldAddProjectItem`
   - `RunFinished`
   - T4 template body load
   - T4 processing
   - file write/add project item
   - `DependentUpon`
4. Keep logs disabled or quiet by default unless the existing project already has a debug logging convention.
5. Avoid message boxes or visible UI noise.

## Do Not

- Do not optimize any template in this goal.
- Do not change generated file contents.
- Do not add Dataverse calls.
- Do not change `.vstemplate` files.

## Verify

1. Build the VSIX project.
2. Run at least these templates manually with instrumentation enabled:
   - `DataProvider`
   - `TsForm`
   - `TsWebApi`
   - `Plugin`
3. Confirm logs include:
   - template name
   - correlation id
   - elapsed milliseconds
   - callback name
4. Confirm generated output is unchanged for the tested templates.

## Definition of Done

- Timing data identifies the slowest phase for each tested template.
- No user-visible behavior changes.
- No generated output changes.
- Instrumentation can be kept enabled for future goal work.

