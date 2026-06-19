# VSIX Item Templates Performance Report

Date: 2026-06-19  
Scope: 16 item templates under `ItemTemplates/CSharp` and their VSIX wizard classes under `DynamicsCrm.DevKit/Wizard/ItemTemplates`.  
Constraint: report only. No code changes are proposed here as implementation.

## Split Goal Files

This report is intentionally detailed. For implementation work, use the smaller goal files under:

`DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit/ItemTemplatePerformanceGoals/`

Start with `00-README.md`, then run one goal file at a time. Each goal file is self-contained enough for an AI agent to implement and verify without loading this whole report.

## Executive Summary

The slow experience after the user clicks OK is plausible from the current code path. There is no clear evidence of a literal infinite loop in the 16 item template wizards. The "loop-like" behavior is more likely repeated synchronous blocking and re-entry through Visual Studio template callbacks:

- Most wizards wrap async work in `ThreadHelper.JoinableTaskFactory.Run(...)`, so the VS template engine waits synchronously while network, metadata, T4, file IO, and UI-thread transitions finish.
- Multi-file templates call `ShouldAddProjectItem` once per physical template item. Several implementations call `JoinableTaskFactory.Run(...)` inside that callback, causing repeated blocking.
- Several templates do expensive post-OK generation before VS can finish adding the item. The worst candidates are `DataProvider`, `TsForm`, `TsWebApi`, `JsForm`, `JsWebApi`, `TsDialog`, `JsDialog`, and `LateBound`.
- T4 templates are processed synchronously through Visual Studio text templating service in the OK path. `DataProvider` runs 5 T4 templates in sequence.
- TypeScript templates update or create `OptionSet.ts` in `RunFinished`. This adds another generation phase after the template item is already being finalized.
- Form/dialog templates depend on Dataverse metadata and form XML. On a cold cache or a high-latency Dataverse connection, >20s is realistic.

Primary recommendation: split the experience into "fast item creation" and "background generated files refresh". The generated files can be produced after the main file exists, with status/progress and cancellation. This makes the OK click return quickly and avoids the perception that Visual Studio is stuck.

## Evidence Map

Template inventory from `.vstemplate` files:

| # | Template name | Wizard class | Project items |
|---|---|---|---|
| 1 | C# Late Bound Class | `LateBound` | 2: `Class.cs`, `GeneratedClass.cs` |
| 2 | Javascript Form | `JsForm` | 3: `Javascript.js`, `Javascript.d.ts`, `Javascript.form.js` |
| 3 | Javascript WebApi | `JsWebApi` | 3: `Javascript.js`, `Javascript.d.ts`, `Javascript.webapi.js` |
| 4 | C# Plugin Class | `Plugin` | 1: `Class.cs` |
| 5 | C# Custom Action Class | `CustomAction` | 1: `Class.cs` |
| 6 | C# Custom Api Class | `CustomApi` | 1: `Class.cs` |
| 7 | C# Workflow Class | `Workflow` | 1: `Class.cs` |
| 8 | C# Data Provider Class | `DataProvider` | 5: `Retrieve.cs`, `RetrieveMultiple.cs`, `Create.cs`, `Update.cs`, `Delete.cs` |
| 9 | C# Test Class | `Test` | 1: `Class.cs` |
| 10 | C# Ui Test Class | `UiTest` | 1: `Class.cs` |
| 11 | Resource String | `ResourceString` | 1: `ResourceString.resx` |
| 12 | DevKit files | `BatFile` | 5: `batfile.bat`, `devkit.js`, `devkit.d.ts`, `Plugin-Managed-Identity-Config.json`, `Plugin-Managed-Identity.md` |
| 13 | TypeScript Form | `TsForm` | 2: `TypeScript.form.ts`, `TypeScript.ts` |
| 14 | TypeScript WebApi | `TsWebApi` | 2: `TypeScript.webapi.ts`, `TypeScript.ts` |
| 15 | TypeScript Dialog | `TsDialog` | 2: `TypeScript.ts`, `TypeScript.dialog.ts` |
| 16 | JavaScript Dialog | `JsDialog` | 3: `JavaScript.js`, `JavaScript.dialog.js`, `JavaScript.d.ts` |

Important code paths:

- `DynamicsCrm.DevKit/Wizard/ItemTemplates/*.cs`: wizard `RunStarted`, `ShouldAddProjectItem`, `RunFinished`.
- `DynamicsCrm.DevKit/Wizard/ItemTemplates/ItemTemplateBase.cs`: target path resolution, file existence check, generated item tracking, file write, project item add.
- `DynamicsCrm.DevKit/Lib/Forms/FormItem.xaml.cs`: entity and dialog list loading.
- `DynamicsCrm.DevKit/Lib/Forms/FormPlugin.xaml.cs`: plugin/action/api/data-provider/resource/test input loading.
- `DynamicsCrm.DevKit/Lib/T4Helper.cs`: custom template lookup and T4 processing.
- `DynamicsCrm.DevKit/Lib/VsixHelper.cs`: project/container lookup, custom template config IO, project item add, `DependentUpon`.
- `DynamicsCrm.DevKit.Shared/Logic/TsForm.cs`, `JsForm.cs`, `TsWebApi.cs`, `JsWebApi.cs`, `TsOptionSet.cs`, `TsDialog.cs`, `JsDialog.cs`: generated content.
- `DynamicsCrm.DevKit.Shared/Services/MetadataService.cs`: Dataverse metadata and form queries.

## Shared Bottlenecks

### 1. Synchronous bridge around async work

All 16 wizards use `ThreadHelper.JoinableTaskFactory.Run(...)` in `RunStarted` or related callbacks. This is risky in Visual Studio templates because the template engine is already synchronous. Any awaited metadata query, T4 processing, file IO, or UI-thread switch blocks the template engine until complete.

Recommendation:

- Keep `RunStarted` minimal: collect user choice and store primitive replacement values.
- Move expensive generated-file refresh to `RunFinished` background tasks where possible.
- Avoid nested `JoinableTaskFactory.Run(...)` inside properties used by T4 context.

### 2. `ShouldAddProjectItem` does async work repeatedly

`LateBound`, `JsForm`, `JsWebApi`, `TsForm`, `TsWebApi`, `TsDialog`, and `JsDialog` call `ShouldAddProjectItemAsync` through `JoinableTaskFactory.Run(...)`. This resolves selected project container and checks file existence. The base class caches `TargetFolderPath`, but the first call still switches to the UI thread and later calls still enter a blocking bridge.

Recommendation:

- Resolve target folder once in `RunStarted` and keep `ShouldAddProjectItem` purely synchronous.
- Use precomputed target file names and existence flags.
- Log every `ShouldAddProjectItem` call with template file path and elapsed ms to confirm callback count.

### 3. T4 processing is on the critical OK path

`Plugin`, `CustomAction`, `CustomApi`, `Workflow`, `DataProvider`, `Test`, and `UiTest` call `T4Helper.ProcessTemplateAsync` before VS completes item creation. `DataProvider` calls it 5 times sequentially.

Recommendation:

- Cache default T4 template bodies in memory by `ItemType/subType`.
- Build T4 context once and avoid expensive property getters during template processing.
- For `DataProvider`, process the 5 templates with a single prepared context and investigate parallel processing if the Visual Studio T4 service allows it safely. If not, at least remove repeated template body loading.

### 4. T4 context properties perform hidden work

`T4Helper.BuildContextAsync(FormPlugin form)` reads `form.PluginComment`, `form.PluginOrder`, and `GetSharedProjectAsync`. In `FormPlugin`, `PluginComment` calls Dataverse metadata, and `PluginOrder` scans selected project items through `JoinableTaskFactory.Run`.

Recommendation:

- Compute plugin comment and plugin order once before T4, with explicit timing.
- Avoid calling `form.PluginOrder` multiple times. Several wizards read it once during context build and again while adding `$PluginOrder$`.

### 5. Metadata cache is broad but not consistently warm

Entity lists are loaded with `EntityFilters.Entity`, but generated code often needs `EntityFilters.All`, forms, BPF, quick view forms, lookup target metadata, or process form data. Cold cache can trigger multiple Dataverse calls after OK.

Recommendation:

- Decide per template what metadata level is required.
- For entity-based generated files, prefetch full metadata for the selected entity before the user clicks OK only if the dialog is already waiting on connection.
- Add a per-session cache for form XML, process forms, quick view metadata, and lookup target metadata.

### 6. Generated-file work happens inside `RunFinished`

Several templates add generated files and call `TrySetDependentUpon` in `RunFinished`. This is not an infinite loop by itself, but it creates a second blocking phase after VS has created the item.

Recommendation:

- Batch file writes and `DependentUpon` operations.
- Do not add or rewrite files if generated content is null, unchanged, or the parent file was not created.
- Move non-critical generated refresh to a background command with progress.

### 7. No stopwatch instrumentation

The current code has no fine-grained timings for dialog load, OK handling, T4, metadata queries, file writes, project item callbacks, and `RunFinished`. Without telemetry, developers can only infer why OK takes >20s.

Recommendation:

- Add internal debug timing with a single correlation id per template run.
- Minimum events: dialog shown, OK clicked, metadata fetch start/end, T4 start/end, replacement set, `ShouldAddProjectItem` count, file write start/end, `RunFinished` done.
- Output to VS ActivityLog or DevKit debug log behind a flag.

## Per-template Analysis

### 1. C# Late Bound Class

Files: `{Entity}.cs`, `{Entity}.generated.cs`  
Wizard: `LateBound`

After OK:

- Reads selected entity from cached `XrmHelper.EntitiesMetadata`.
- Builds default partial class.
- Calls `CSharpLateBound.GetCsCode(...)` for generated class.
- Sets replacements.
- `ShouldAddProjectItem` runs twice.
- `RunFinished` writes or updates `{Entity}.generated.cs`, compares generated content from line 6, sets `DependentUpon`, and may rewrite `{Entity}.cs` declaration from `public partial` to `internal partial`.

Performance risk: high.

Reason:

- Late-bound generation can be CPU-heavy and may require rich metadata.
- It does file comparison and possible rewrite after VS template generation.
- It has multiple synchronous bridges: `RunStarted`, `ShouldAddProjectItem`, and `RunFinished`.

Recommendation:

- Generate only the lightweight `{Entity}.cs` on OK.
- Refresh `{Entity}.generated.cs` after item creation in a background task with status.
- Precompute `ShouldAddProjectItem` decisions synchronously.
- Avoid rewriting `{Entity}.cs` in `RunFinished`; generate the intended modifier directly if possible.

### 2. Javascript Form

Files: `{Entity}.js`, `{Entity}.form.js`, `{Entity}.d.ts`  
Wizard: `JsForm`

After OK:

- Calls `CodeGenService.GetDefaultJsFormFileAsync`.
- Calls `JsForm.GetJsFormCodeAsync`.
- Checks whether `{Entity}.webapi.js` exists.
- Sets replacements.
- `ShouldAddProjectItem` runs 3 times.
- `RunFinished` writes `{Entity}.form.js` and `{Entity}.d.ts`, then sets `DependentUpon`.

Performance risk: high.

Reason:

- Default file and generated form code both inspect form metadata.
- `JsForm.GetJsFormCodeAsync` can fetch full entity metadata, form XML, BPF data, quick view forms, and quick view entity metadata.
- Generated files are written after VS template creation.

Recommendation:

- Reuse one metadata/form snapshot for both default `.js` and generated `.form.js/.d.ts`.
- Do not generate full `.d.ts` synchronously if a background refresh can update it.
- Cache quick view form metadata and BPF data per entity.

### 3. Javascript WebApi

Files: `{Entity}.js`, `{Entity}.webapi.js`, `{Entity}.d.ts`  
Wizard: `JsWebApi`

After OK:

- Builds a default `.js` file.
- Calls `JsWebApi.GetJsWebApiCodeAsync`.
- Checks whether `{Entity}.form.js` exists.
- Sets replacements.
- `ShouldAddProjectItem` runs 3 times.
- `RunFinished` writes `{Entity}.webapi.js` and `{Entity}.d.ts`, then sets `DependentUpon`.

Performance risk: medium to high.

Reason:

- WebApi generation can fetch full metadata if attributes are missing.
- Lookup fields can trigger additional target entity metadata fetches.
- Type declaration generation may also query form/process metadata.

Recommendation:

- Batch lookup target metadata fetches instead of awaiting per target.
- Avoid regenerating `.d.ts` in the OK path when only the selected entity changed.
- Keep `ShouldAddProjectItem` synchronous.

### 4. C# Plugin Class

Files: `{Class}.cs`  
Wizard: `Plugin`

After OK:

- Reads selected custom template/default T4.
- Builds `T4Context`.
- Processes T4.
- Adds `$plugin$`, `$Class$`, and `$PluginOrder$`.

Performance risk: medium.

Reason:

- `T4Context` calls `PluginComment` and `PluginOrder`.
- `PluginComment` can query Dataverse by entity/message.
- `PluginOrder` scans project items and is read more than once.

Recommendation:

- Compute `PluginOrder` once.
- Compute `PluginComment` only when the selected T4 template references it, or cache it per entity/message.
- Cache T4 template body.

### 5. C# Custom Action Class

Files: `{Class}.cs`  
Wizard: `CustomAction`

After OK:

- Reads custom/default T4.
- Builds `T4Context`.
- Processes T4.
- Adds `$customaction$`, `$Class$`, and `$PluginOrder$`.

Performance risk: medium.

Reason:

- Similar to Plugin.
- Dialog entity/message selection can query custom actions before OK; OK path still performs T4 and context work.

Recommendation:

- Same as Plugin: cache template body, compute `PluginOrder` once, cache message/comment lookups.
- Consider not reading plugin comment for Custom Action if the default/custom T4 does not use it.

### 6. C# Custom Api Class

Files: `{Class}.cs`  
Wizard: `CustomApi`

After OK:

- Reads custom/default T4.
- Builds `T4Context`.
- Processes T4.
- Adds `$customapi$`, `$Class$`, and `$PluginOrder$`.

Performance risk: medium.

Reason:

- Same T4/context costs as Plugin.
- Dialog selection calls custom API metadata before OK, but OK still waits on T4.

Recommendation:

- Same as Plugin.
- Avoid any unused context properties for Custom API, especially stage/execution/plugin comment fields that are not applicable.

### 7. C# Workflow Class

Files: `{Class}.cs`  
Wizard: `Workflow`

After OK:

- Reads custom/default T4.
- Builds `T4Context`.
- Processes T4.
- Adds `$workflow$`, `$Class$`, and `$PluginOrder$`.

Performance risk: low to medium.

Reason:

- No entity/message selection is required in the dialog.
- Still uses T4 and `PluginOrder`.

Recommendation:

- Cache template body and compute `PluginOrder` once.
- Use a smaller workflow-specific T4 context instead of the full plugin context.

### 8. C# Data Provider Class

Files: `Create.cs`, `Update.cs`, `Delete.cs`, `Retrieve.cs`, `RetrieveMultiple.cs`  
Wizard: `DataProvider`

After OK:

- Loads default DataProvider T4 body for `Create`.
- Processes T4.
- Repeats for `Update`, `Delete`, `Retrieve`, and `RetrieveMultiple`.
- Adds 5 replacement values.
- Adds `$Class$` and `$PluginOrder$`.

Performance risk: very high.

Reason:

- 5 T4 processing passes are run sequentially after OK.
- 5 physical template files are created by VS.
- Dialog also has to query external data sources.
- `PluginOrder` is still computed even though Data Provider hides class input in the dialog.

Recommendation:

- Highest priority target.
- Cache all 5 T4 bodies.
- Build context once and avoid repeated work inside context properties.
- Investigate generating the 5 files with a single T4 template or a single host/session.
- If possible, create skeleton files immediately and refresh method bodies in background.

### 9. C# Test Class

Files: `{Class}Test.cs`  
Wizard: `Test`

After OK:

- Resolves selected project container.
- Uses `FormPlugin(ItemType.Test, ..., container?.Project)`.
- Dialog loads plugin test candidates by scanning referenced project `.cs` files.
- After OK, reads custom/default T4, builds context, processes T4, adds replacements.

Performance risk: medium to high.

Reason:

- The candidate discovery scans source files with regex across referenced projects and existing test classes.
- That scan happens while the dialog is open, but it can still make the whole item creation flow feel slow.
- OK path still has T4/context cost.

Recommendation:

- Cache test candidates per test project and invalidate on project file/source changes.
- Show candidates incrementally or lazy-load after the dialog appears.
- Keep OK path to T4 only, with cached candidate data.

### 10. C# Ui Test Class

Files: `{Class}Test.cs`  
Wizard: `UiTest`

After OK:

- Reads custom/default T4.
- Builds context.
- Processes T4.
- Adds `$uitest$`, `$Class$`, and `$PluginOrder$`.

Performance risk: low to medium.

Reason:

- No metadata-heavy selection in OK path.
- T4 and `PluginOrder` remain blocking.

Recommendation:

- Cache template body.
- Use a UI-test-specific context and avoid plugin metadata/comment fields.

### 11. Resource String

Files: `ResourceString.resx`  
Wizard: `ResourceString`

After OK:

- Adds language code, class, and plugin order replacements.
- No T4 processing.

Performance risk: low.

Reason:

- Dialog queries provisioned languages from Dataverse before OK.
- OK path is mostly replacement values, but still computes `PluginOrder`.

Recommendation:

- Do not compute `PluginOrder` for `.resx` if it is unused.
- Cache provisioned languages per connection/session.

### 12. DevKit files

Files vary by selected option:

- `devkit.js` + `devkit.d.ts`
- one `.bat` file
- `Plugin-Managed-Identity.ps1` + config/readme files

Wizard: `BatFile`

After OK:

- Reads embedded resource(s).
- Builds CLI connection args for `.bat` variants.
- Uses `ShouldAddProjectItem` to include only selected files.

Performance risk: low.

Reason:

- Mostly embedded resource reads and string replacement.
- 5 physical project items exist in the template, so `ShouldAddProjectItem` still runs for all 5.

Recommendation:

- Keep this template as-is unless instrumentation shows embedded resource reads are slow.
- Consider splitting into separate templates only if users are confused by hidden skipped files.

### 13. TypeScript Form

Files: `{Entity}.ts`, `{Entity}.form.ts`, plus generated/updated `OptionSet.ts`  
Wizard: `TsForm`

After OK:

- Calls `CodeGenService.GetDefaultTsFormFileAsync`.
- Calls `TsForm.GetTsFormCodeAsync`.
- Sets replacements.
- `ShouldAddProjectItem` runs twice.
- `RunFinished` writes `{Entity}.form.ts`, sets `DependentUpon`, generates/updates `OptionSet.ts`, and adds it to the project.

Performance risk: very high.

Reason:

- `GetDefaultTsFormFileAsync` and `TsForm.GetTsFormCodeAsync` both inspect forms.
- `TsForm.GetTsFormCodeAsync` can fetch full entity metadata, active forms, BPF data, quick view form XML, and quick view entity metadata.
- `OptionSet.ts` parsing/building runs in `RunFinished`, after the main generation already completed.
- The same selected entity metadata/form data can be touched more than once.

Recommendation:

- Highest priority target with DataProvider.
- Generate the user `{Entity}.ts` skeleton fast.
- Move `{Entity}.form.ts` and `OptionSet.ts` refresh to a background generator.
- Share one form/metadata snapshot between default skeleton generation and generated form generation.
- Do not regenerate `OptionSet.ts` if the selected entity has no option-set fields or if content hash is unchanged.

### 14. TypeScript WebApi

Files: `{Entity}.ts`, `{Entity}.webapi.ts`, plus generated/updated `OptionSet.ts`  
Wizard: `TsWebApi`

After OK:

- Calls `TsWebApi.GetTsWebApiCodeAsync`.
- Sets replacements.
- `ShouldAddProjectItem` runs twice.
- `RunFinished` writes `{Entity}.webapi.ts`, sets `DependentUpon`, generates/updates `OptionSet.ts`, and adds it to the project.

Performance risk: high.

Reason:

- Full entity metadata may be fetched.
- Lookup targets may be fetched one by one.
- `OptionSet.ts` update adds a second post-generation phase.

Recommendation:

- Batch lookup target metadata.
- Move `OptionSet.ts` update out of the blocking VS template path.
- Skip `OptionSet.ts` refresh when no option-set fields are present or existing content already contains identical block.

### 15. TypeScript Dialog

Files: `{Dialog}.ts`, `{Dialog}.dialog.ts`  
Wizard: `TsDialog`

After OK:

- Uses selected dialog form from dialog list.
- Calls `TsDialog.GetTsDialogCodeAsync`.
- Calls `CodeGenService.GetDefaultTsDialogFileAsync`.
- Sets replacements.
- `ShouldAddProjectItem` runs twice and preserves existing `{Dialog}.ts`.
- `RunFinished` writes `{Dialog}.dialog.ts`, optionally writes `{Dialog}.ts`, and sets `DependentUpon`.

Performance risk: medium to high.

Reason:

- Dialog form list is fetched before OK.
- Generated dialog code depends on form XML parsing.
- File preservation logic adds callback state through `IsDialogTsExisting`.

Recommendation:

- Parse selected dialog XML once and pass parsed result through both generated and default file generation.
- Keep `ShouldAddProjectItem` synchronous with precomputed existence flags.
- Background-refresh `.dialog.ts` if generation is slow.

### 16. JavaScript Dialog

Files: `{Dialog}.js`, `{Dialog}.dialog.js`, `{Dialog}.dialog.d.ts`  
Wizard: `JsDialog`

After OK:

- Uses selected dialog form from dialog list.
- Calls `JsDialog.GetJsDialogCodeAsync`.
- Calls `CodeGenService.GetDefaultJsDialogFileAsync`.
- Sets replacements.
- `ShouldAddProjectItem` runs 3 times and preserves existing `{Dialog}.js`.
- `RunFinished` writes `.dialog.js`, `.dialog.d.ts`, optionally `.js`, and sets `DependentUpon`.

Performance risk: medium to high.

Reason:

- Similar to TypeScript Dialog, with one extra generated `.d.ts` file.
- Multiple project item callbacks and post-generation file writes.

Recommendation:

- Same as TypeScript Dialog.
- Generate `.dialog.js` and `.dialog.d.ts` from one parsed dialog model.
- Skip `.d.ts` rewrite when content is unchanged.

## Priority Optimization Plan

### P0: Add Timing Instrumentation

Before changing behavior, add stopwatch logs around:

- `RunStarted` total.
- Time between OK click and replacement values ready.
- Each Dataverse metadata call.
- Each `T4Helper.ProcessTemplateAsync`.
- Each `ShouldAddProjectItem`.
- `RunFinished` total.
- File writes and `TrySetDependentUpon`.

Expected result: hard data for the >20s complaint and exact template-specific hot spots.

### P1: Fix the Worst OK-path Work

Target first:

1. `DataProvider`: 5 sequential T4 runs.
2. `TsForm`: form metadata + BPF/quick view + `OptionSet.ts`.
3. `TsWebApi`: full metadata + lookup targets + `OptionSet.ts`.
4. `LateBound`: generated class generation + post-file rewrite.
5. `JsForm`/`JsWebApi`: form/webapi generation and `.d.ts`.

Expected result: largest visible improvement.

### P2: Make Template Callbacks Cheap

Change design target:

- `RunStarted`: only dialog result + precomputed simple values.
- `ShouldAddProjectItem`: no async, no UI switch, no service calls.
- `RunFinished`: only attach generated files and schedule background refresh.

Expected result: Visual Studio template engine stops feeling stuck.

### P3: Cache Per Session

Cache candidates:

- Default embedded T4 bodies.
- Custom templates from `DynamicsCrm.DevKit.config.json`.
- Entity full metadata per connection.
- Entity forms/process forms per entity.
- Dialog form list per connection.
- Provisioned languages per connection.
- Data source list per connection.
- Plugin test candidates per test project.

Expected result: second and later item creation should be much faster.

## Answer to "Is It Looping?"

Static review does not show an intentional infinite loop in these 16 item template wizards.

The observed behavior can feel like a loop because:

- VS calls `ShouldAddProjectItem` once per item in the `.vstemplate`.
- Some templates have 2, 3, or 5 project items.
- Each callback can enter `JoinableTaskFactory.Run`.
- `RunFinished` can write or add more files after item generation.
- Generated code can trigger more metadata calls through helper methods.

So the likely root cause is repeated synchronous blocking, not an actual infinite loop. Instrumentation should confirm this by logging callback count and elapsed time per callback.

## Recommended Acceptance Criteria

For each item template:

- Cold cache: OK-to-file-created should be under 5 seconds for simple templates and under 10 seconds for metadata-heavy templates.
- Warm cache: OK-to-file-created should be under 2 seconds for all single-file templates.
- Generated files may continue refreshing in background, but user must see the main file quickly.
- No `ShouldAddProjectItem` callback should take more than 50ms.
- No template should call Dataverse from `ShouldAddProjectItem`.
- T4 template body loading should happen once per item type per session.

## Suggested Next Report/Implementation Order

If this becomes implementation work, handle in this order:

1. Add instrumentation only.
2. Optimize `DataProvider`.
3. Optimize `TsForm` and `TsWebApi`, especially `OptionSet.ts`.
4. Optimize `JsForm` and `JsWebApi`.
5. Optimize T4 context for Plugin/CustomAction/CustomApi/Workflow/Test/UiTest.
6. Clean up low-risk templates: `ResourceString`, `BatFile`.

## My Recommendation

Yes, this should be done. The current item-template flow is functionally useful, but the >20s wait after OK is a serious UX problem because users interpret it as Visual Studio being frozen or the wizard entering a loop. It also hurts team confidence because item templates are usually expected to feel instant or near-instant.

Do not rewrite all 16 templates at once. The correct approach is staged optimization with timing data after each stage.

### Recommended Order

1. Instrument first, no behavior change.

   Add stopwatch/debug timings around all 16 templates before changing optimization logic. This is the safest first step because it proves which template is slow in real projects and prevents guessing.

   Measure:

   - Dialog load time.
   - Time from OK click to `RunStarted` finish.
   - Each Dataverse metadata call.
   - Each T4 processing call.
   - `ShouldAddProjectItem` count and elapsed time.
   - `RunFinished` elapsed time.
   - File writes and `DependentUpon` calls.

2. Fix `DataProvider`.

   This is the cleanest high-impact target. It runs 5 T4 templates sequentially and creates 5 files. If this improves, the team will immediately see the value of the optimization work.

   Target:

   - Cache all DataProvider T4 bodies.
   - Build context once.
   - Avoid repeated `PluginOrder`/context property reads.
   - Consider one T4 session or one generator for all 5 files.

3. Fix `TsForm`.

   This is likely the worst real-world user-facing case for CRM projects because form generation touches entity metadata, active forms, BPF data, quick view forms, and `OptionSet.ts`.

   Target:

   - Fast-create `{Entity}.ts`.
   - Move `{Entity}.form.ts` and `OptionSet.ts` refresh out of the blocking OK path if possible.
   - Reuse one entity/form metadata snapshot.
   - Skip `OptionSet.ts` generation when no option-set fields changed.

4. Fix `TsWebApi`.

   This shares the `OptionSet.ts` issue and can fetch lookup target metadata. It should be handled right after `TsForm` so both TypeScript templates follow the same design.

   Target:

   - Batch lookup target metadata.
   - Move `OptionSet.ts` refresh to a shared background/generated-file path.
   - Keep `ShouldAddProjectItem` synchronous.

5. Fix `JsForm` and `JsWebApi`.

   These have similar generated-file and `.d.ts` costs, but no `OptionSet.ts`. They should reuse the same pattern proven by TypeScript templates.

   Target:

   - Share metadata/form snapshot.
   - Avoid regenerating `.d.ts` synchronously when possible.
   - Keep generated file writes batched.

6. Fix `LateBound`.

   LateBound can be expensive because generated class output is large. It is important, but it is less structurally risky than the TypeScript form stack.

   Target:

   - Fast-create custom partial class.
   - Background-refresh generated class.
   - Avoid rewriting the custom file after template completion if the modifier can be generated correctly upfront.

7. Optimize common C# T4 templates.

   Apply common fixes to `Plugin`, `CustomAction`, `CustomApi`, `Workflow`, `Test`, and `UiTest`.

   Target:

   - Cache T4 bodies.
   - Compute `PluginOrder` once.
   - Avoid full plugin context for templates that do not need plugin metadata.
   - Avoid `PluginComment` calls unless the selected template actually uses the value.

8. Clean up low-risk templates last.

   `ResourceString` and `BatFile` are not the main problem. Only optimize them after the shared infrastructure exists.

   Target:

   - Cache provisioned languages for `ResourceString`.
   - Remove unused `PluginOrder` if not needed.
   - Keep `BatFile` simple unless timing proves otherwise.

### Go/No-go Guidance

Proceed if the goal is to improve daily developer experience for the team. This is worth doing because templates are used interactively, and long blocking waits make the extension feel unreliable.

Pause if the team cannot allocate time for instrumentation first. Without timings, it is easy to spend effort on the wrong template or introduce regressions in generated output.

The first milestone should not be "all templates optimized". The first milestone should be:

- Timing log exists.
- Slowest template is proven.
- One high-impact template improves by at least 50%.
- Generated output is byte-for-byte equivalent where behavior should not change.
