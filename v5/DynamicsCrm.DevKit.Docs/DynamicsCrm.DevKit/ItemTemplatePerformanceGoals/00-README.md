# Item Template Performance Goals

Use these files as small, standalone AI tasks. Each goal is intentionally scoped so an AI agent does not need to load the full performance report.

Recommended workflow for every goal:

1. Read `AGENTS.md`.
2. Read only the selected goal file.
3. Inspect the listed source files.
4. Implement only that goal.
5. Run the listed verification steps.
6. Report changed files, measured result, and any remaining risk.

Do not combine goals unless the user explicitly asks. The order below is recommended for implementation work because it starts with common measurement, then easy/low-risk templates, then reusable C# T4 patterns, then multi-file generated-file patterns, and leaves the hardest metadata-heavy templates for last.

The reason for this order is practical: each stage should create a proven pattern that the next stage can copy.

## Recommended Implementation Order

### Stage 0: Common Measurement and Safe First Wins

Goal: make performance visible, then validate the workflow on low-risk templates.

| Order | File | Goal |
|---|---|---|
| 1 | `01-instrumentation.md` | Add timing instrumentation before behavior changes |
| 2 | `17-batfile.md` | Easy: validate instrumentation and `ShouldAddProjectItem` behavior on DevKit files/BatFile |
| 3 | `16-resourcestring.md` | Easy: validate simple Dataverse lookup/cache and remove unused OK-path work if safe |

### Stage 1: Common C# T4 Pattern

Goal: build one repeatable pattern for T4 body caching, one-time context creation, one-time `PluginOrder`, and avoiding unused context work.

| Order | File | Goal |
|---|---|---|
| 4 | `13-workflow.md` | Easiest C# T4 template; establish the common T4 optimization pattern |
| 5 | `15-uitest.md` | Copy the Workflow pattern for another simple C# T4 template |
| 6 | `10-plugin.md` | Add the harder Plugin-specific pieces: `PluginComment`, entity/message/stage/execution |
| 7 | `11-customaction.md` | Copy the Plugin pattern for Custom Action |
| 8 | `12-customapi.md` | Copy the Plugin/Custom Action pattern for Custom API |
| 9 | `14-test.md` | Copy the T4 pattern, then handle test candidate discovery cache |
| 10 | `02-dataprovider.md` | Harder C# T4 case: apply the common pattern to 5 sequential T4 outputs |

### Stage 2: Multi-file Generated-file Pattern

Goal: make `ShouldAddProjectItem`, generated-file writes, existing-file preservation, and `DependentUpon` predictable before touching the heaviest form generators.

| Order | File | Goal |
|---|---|---|
| 11 | `07-latebound.md` | Establish generated companion file pattern with `{Entity}.generated.cs` |
| 12 | `08-tsdialog.md` | Apply multi-file/existing-file preservation pattern to TypeScript Dialog |
| 13 | `09-jsdialog.md` | Copy TypeScript Dialog pattern for JavaScript Dialog and `.d.ts` |

### Stage 3: Metadata-heavy JS/TS Generators

Goal: apply all prior patterns to the hardest generators: metadata caching, form/process/quick-view metadata, lookup target batching, generated helper files, and `OptionSet.ts`.

| Order | File | Goal |
|---|---|---|
| 14 | `06-jswebapi.md` | Start with WebApi lookup metadata and `.d.ts`; simpler than form generation |
| 15 | `05-jsform.md` | Copy JS WebApi generated-file pattern, then handle form/process/quick-view metadata |
| 16 | `04-tswebapi.md` | Copy WebApi pattern and add shared `OptionSet.ts` behavior |
| 17 | `03-tsform.md` | Hardest template: combine form/process/quick-view metadata with `OptionSet.ts` |

### Stage 4: Final Verification

Goal: verify all 16 templates together after the selected optimizations are complete.

| Order | File | Goal |
|---|---|---|
| 18 | `18-final-regression.md` | Verify all 16 templates after optimization |

## Difficulty Summary

| Difficulty | Goals |
|---|---|
| Easy | `17-batfile.md`, `16-resourcestring.md`, `13-workflow.md`, `15-uitest.md` |
| Medium | `10-plugin.md`, `11-customaction.md`, `12-customapi.md`, `14-test.md`, `07-latebound.md`, `08-tsdialog.md`, `09-jsdialog.md` |
| Hard | `02-dataprovider.md`, `06-jswebapi.md`, `05-jsform.md`, `04-tswebapi.md` |
| Hardest | `03-tsform.md` |

## Common Patterns to Reuse

- Instrumentation pattern from `01-instrumentation.md` should be reused by every goal.
- T4 caching/context pattern should be proven in `13-workflow.md`, then copied into Plugin, CustomAction, CustomApi, Test, UiTest, and DataProvider.
- Fast `ShouldAddProjectItem` and generated-file write pattern should be proven in `07-latebound.md`, then copied into Dialog, Form, and WebApi templates.
- Existing user-file preservation should be proven in `08-tsdialog.md`, then copied into `09-jsdialog.md` and respected by Form/WebApi templates.
- `OptionSet.ts` behavior should be solved in `04-tswebapi.md` before `03-tsform.md`.

Shared rules for all goals:

- Preserve public template names, generated file names, generated output shape, and replacement keys unless the goal explicitly changes them.
- Do not refactor `Shared/Helper.cs` or `Shared/XrmHelper.cs` for these goals.
- Do not change `.vstemplate` item lists unless the selected goal explicitly requires it.
- Keep `ShouldAddProjectItem` fast and deterministic.
- Prefer measurable improvements over broad rewrites.
- If generated output changes, explain why and include before/after verification.

Primary target:

- User-visible time from clicking OK to main file appearing should become short and predictable.
- Generated helper files may refresh after the main file appears if the UI clearly reports progress.
