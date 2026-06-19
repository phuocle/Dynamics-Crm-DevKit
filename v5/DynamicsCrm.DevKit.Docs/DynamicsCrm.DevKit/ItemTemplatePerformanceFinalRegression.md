# Item Template Performance Final Regression

Date: 2026-06-19

## Summary

All selected item template performance goals have been implemented and the VSIX project builds successfully.

Build command:

```powershell
$msbuild = "C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe"
& $msbuild "DynamicsCrm.DevKit\DynamicsCrm.DevKit.csproj" /t:Build /p:Configuration=Debug /p:DeployExtension=false /v:m
```

Build output:

```text
DynamicsCrm.DevKit -> DynamicsCrm.DevKit\bin\Debug\DynamicsCrm.DevKit.dll
DynamicsCrm.DevKit -> DynamicsCrm.DevKit\bin\Debug\DynamicsCrm.DevKit.vsix
```

## Static Regression Result

| Check | Result |
|---|---|
| VSIX Debug build | Passed |
| `ShouldAddProjectItem` Dataverse calls | None found |
| Generated-file writes | Guarded by generated item checks or `WriteTargetFileIfChangedAsync` |
| Existing user files | Preserve behavior retained for LateBound, Dialog, Form, and WebApi templates |
| `OptionSet.ts` refresh | Still runs for TypeScript Form/WebApi, but now uses a full entity metadata object prepared once in the wizard |
| Instrumentation | Present on run, generated-file, T4, discovery, and metadata-heavy phases |

## Completed Template Coverage

| Template | Current Status |
|---|---|
| LateBound | Optimized generated-file update path and existing-file normalization |
| JsForm | Avoids redundant generated-file rewrites and adds phase telemetry |
| JsWebApi | Avoids redundant generated-file rewrites and avoids duplicate full metadata fetch for `.d.ts` |
| Plugin | Uses default-template fast path and minimal plugin context |
| CustomAction | Copies Plugin T4 optimization pattern |
| CustomApi | Copies Plugin T4 optimization pattern |
| Workflow | Uses default-template fast path and minimal class context |
| DataProvider | Uses minimal context and per-subtype telemetry for 5 T4 outputs |
| Test | Uses default-template fast path, test context, and cached referenced-class discovery |
| UiTest | Uses default-template fast path and minimal class context |
| ResourceString | Caches provisioned languages and avoids repeated plugin order work |
| BatFile | Uses embedded resource cache and telemetry |
| TsForm | Avoids redundant `.form.ts` rewrite, reuses full entity metadata, skips default `.ts` generation when user file exists |
| TsWebApi | Avoids redundant `.webapi.ts` rewrite and reuses full entity metadata for `OptionSet.ts` |
| TsDialog | Avoids redundant `.dialog.ts` rewrite and preserves existing `.ts` |
| JsDialog | Avoids redundant `.dialog.js` / `.dialog.d.ts` rewrites and preserves existing `.js` |

## Manual Smoke Test Matrix

Run these from the VSIX build at:

```text
DynamicsCrm.DevKit\bin\Debug\DynamicsCrm.DevKit.vsix
```

| Template | Manual Verification |
|---|---|
| LateBound | Generate new entity; regenerate existing entity; verify `{Entity}.cs` and `{Entity}.generated.cs` |
| JsForm | Generate entity with forms; verify `{Entity}.js`, `{Entity}.form.js`, `{Entity}.d.ts`, nesting |
| JsWebApi | Generate entity with lookups; verify lookup collection names and nesting |
| Plugin | Verify class, registration attribute, plugin comment, image flags |
| CustomAction | Verify bound and unbound action cases if available |
| CustomApi | Verify bound and unbound API cases if available |
| Workflow | Verify generated `CodeActivity` compiles |
| DataProvider | Verify `Create`, `Update`, `Delete`, `Retrieve`, `RetrieveMultiple` files |
| Test | Verify candidate discovery and generated guard test context |
| UiTest | Verify generated UI test class name and order |
| ResourceString | Verify selected language `.resx` output |
| BatFile | Verify selected DevKit file variant only |
| TsForm | Generate entity with forms, quick view/BPF if available, and option sets; verify user `.ts` preservation |
| TsWebApi | Generate entity with lookup and option-set fields; verify `OptionSet.ts` |
| TsDialog | Generate new and existing `{Dialog}.ts`; verify user file preservation |
| JsDialog | Generate new and existing `{Dialog}.js`; verify user file preservation |

## Remaining Risk

Manual Visual Studio generation is still required to validate Dataverse-backed behavior and timing. The static pass confirms build correctness and removes obvious expensive `ShouldAddProjectItem` work, but only a live VSIX run can confirm cold/warm timings and generated output against a real Dataverse environment.

The most likely remaining slow phases are:

- `TsForm.GenerateFormTypeScript`
- `TsForm.RefreshOptionSet`
- `TsWebApi.RefreshOptionSet`
- `JsForm.GenerateFormJavaScript`

Use the item-template debug output prefix below to measure the remaining hotspots:

```text
[DynamicsCrm.DevKit][ItemTemplate]
```
