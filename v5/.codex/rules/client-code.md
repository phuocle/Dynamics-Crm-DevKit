# TestClientCode Rules

Apply this rule only when the user explicitly points Codex to this file.

## Sources of truth

Before changing JS/TS client runtime behavior or definitions, read all five files:

| Type | Source file |
|---|---|
| JS runtime | `DynamicsCrm.DevKit.Shared/Resources/js/devkit.js` |
| JS definitions | `DynamicsCrm.DevKit.Shared/Resources/js/devkit.d.ts` |
| TS runtime | `DynamicsCrm.DevKit.Shared/Resources/ts/devkit.ts` |
| TS definitions | `DynamicsCrm.DevKit.Shared/Resources/ts/devkit.d.ts` |
| TS build | `DynamicsCrm.DevKit.Shared/Resources/ts/build.js` |

Do not edit these core files without assessing the impact across all six TestClientCode projects. Never modify `launchSettings.json` as part of client-code work.

## Generated files

Generated form, Web API, entity definition, and option-set files under `DynamicsCrm.DevKit.Tests/TestClientCode/**/entities/` are not sources of truth. Do not fix generated copies directly.

CLI generator profiles:

| Profile | Output |
|---|---|
| `TestClientCode-JS-FORM` | JavaScript form files |
| `TestClientCode-JS-WEBAPI` | JavaScript Web API files |
| `TestClientCode-TS-FORM` | TypeScript form files |
| `TestClientCode-TS-WEBAPI` | TypeScript Web API files |

## Project groups

| Group | Projects |
|---|---|
| JS | `01.DevKitJs-UnitTest`, `03.DevKitJs-AICode`, `05.DevKitJs-Vsix` |
| TS | `02.DevKitTs-UnitTest`, `04.DevKitTs-AICode`, `06.DevKitTs-Vsix` |
| Unit tests | folders `01` and `02` |
| AI code samples | folders `03` and `04` |
| VSIX samples | folders `05` and `06` |

Respect the scope named by the user. If no narrower JS/TS or UnitTest/AICode/VSIX scope is given, evaluate all six projects.

## Required workflow

1. Reproduce and identify the source-of-truth defect.
2. Fix the source, not a synchronized copy.
3. Execute `.codex/workflows/client-code-03-generate.md` when generated entities can change.
4. Execute `.codex/workflows/client-code-04-sync.md` to distribute source and generated files.
5. Execute `.codex/workflows/client-code-05-test.md` for complete checks, builds, and tests.

Use `.codex/workflows/client-code-01-clean.md` and `client-code-02-install.md` only when cleanup or dependency installation is actually needed.

## Sync map

- JS `devkit.js` flows from `Shared/Resources/js/` to projects `01`, `03`, and `05`.
- JS `devkit.d.ts` flows from `Shared/Resources/js/` to projects `01`, `03`, and `05`.
- TS `devkit.ts`, `devkit.d.ts`, and `build.js` flow from `Shared/Resources/ts/` to projects `02`, `04`, and `06`.
- Generated JS entity files flow from project `05` to projects `01` and `03`.
- Generated TS entity files flow from project `06` to projects `02` and `04`.
