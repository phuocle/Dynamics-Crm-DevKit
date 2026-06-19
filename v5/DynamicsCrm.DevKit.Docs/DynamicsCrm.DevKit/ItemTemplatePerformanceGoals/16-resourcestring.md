# Goal 16: Optimize Resource String Item Template

## Goal

Reduce unnecessary work in the Resource String item template.

## Current Template

- Template: `11. Resource String`
- Wizard: `DynamicsCrm.DevKit/Wizard/ItemTemplates/ResourceString.cs`
- Project item: `ResourceString.resx`

## Current Bottleneck

The dialog queries provisioned languages from Dataverse. After OK, the wizard:

- adds `$LanguageCode$`
- adds `$Class$`
- computes `$PluginOrder$`

`PluginOrder` may be unnecessary for `.resx` output.

## Scope

Inspect and update only if needed:

- `DynamicsCrm.DevKit/Wizard/ItemTemplates/ResourceString.cs`
- `DynamicsCrm.DevKit/Lib/Forms/FormPlugin.xaml.cs`
- `DynamicsCrm.DevKit.Shared/Services/MetadataService.cs`
- Resource String `.vstemplate`

## Work

1. Use instrumentation from Goal 01 to capture baseline.
2. Cache provisioned languages per connection/session if feasible.
3. Confirm whether `$PluginOrder$` is used by the template.
4. Remove or avoid unused work only if verified safe.
5. Preserve generated `.resx` content.

## Do Not

- Do not change language selection behavior.
- Do not change `.resx` schema/output.
- Do not include BatFile work in this goal.

## Verify

1. Build the VSIX project.
2. Generate Resource String item for a selected language.
3. Verify generated `.resx`.
4. Confirm language list still loads correctly.
5. Confirm elapsed time improves if a bottleneck was found.

## Definition of Done

- Generated Resource String file remains correct.
- Unused OK-path work is removed or documented.
- Language lookup is cached or measured as acceptable.

