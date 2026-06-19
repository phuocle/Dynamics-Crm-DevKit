# Goal 18: Final Regression for All 16 Item Templates

## Goal

Verify all 16 item templates after performance optimizations are complete.

Run this goal only after the selected optimization goals are implemented.

## Scope

All item template wizards:

- `LateBound`
- `JsForm`
- `JsWebApi`
- `Plugin`
- `CustomAction`
- `CustomApi`
- `Workflow`
- `DataProvider`
- `Test`
- `UiTest`
- `ResourceString`
- `BatFile`
- `TsForm`
- `TsWebApi`
- `TsDialog`
- `JsDialog`

## Work

1. Build the VSIX project.
2. Generate each template once in a clean test solution.
3. Generate key templates a second time to verify existing-file behavior:
   - `LateBound`
   - `TsForm`
   - `TsWebApi`
   - `JsForm`
   - `JsWebApi`
   - `TsDialog`
   - `JsDialog`
4. Review instrumentation output for each template.
5. Confirm no template has slow `ShouldAddProjectItem` callbacks.
6. Confirm generated output still compiles or is syntactically valid.

## Verification Matrix

| Template | Verify |
|---|---|
| LateBound | custom and generated `.cs`; generated update behavior |
| JsForm | `.js`, `.form.js`, `.d.ts`; dependency nesting |
| JsWebApi | `.js`, `.webapi.js`, `.d.ts`; lookup metadata |
| Plugin | class compiles; registration output |
| CustomAction | class compiles; bound/unbound cases if available |
| CustomApi | class compiles; request class naming |
| Workflow | class compiles; CodeActivity inheritance |
| DataProvider | all 5 files created and compile |
| Test | candidate discovery and generated test class |
| UiTest | generated UI test class |
| ResourceString | `.resx` content and selected language |
| BatFile | selected variant includes expected files only |
| TsForm | `.ts`, `.form.ts`, `OptionSet.ts` |
| TsWebApi | `.ts`, `.webapi.ts`, `OptionSet.ts` |
| TsDialog | existing `{Dialog}.ts` preservation |
| JsDialog | existing `{Dialog}.js` preservation |

## Acceptance Targets

- Cold cache: simple templates under 5 seconds from OK to main file.
- Cold cache: metadata-heavy templates under 10 seconds from OK to main file.
- Warm cache: single-file templates under 2 seconds.
- `ShouldAddProjectItem` under 50ms per callback.
- No Dataverse calls from `ShouldAddProjectItem`.
- No generated file is rewritten when content is unchanged.

## Definition of Done

- All 16 templates pass smoke verification.
- Performance logs show the slowest phases are acceptable or documented.
- No unintended generated output changes remain.
- Any remaining slow template has a follow-up issue with measured timing.

