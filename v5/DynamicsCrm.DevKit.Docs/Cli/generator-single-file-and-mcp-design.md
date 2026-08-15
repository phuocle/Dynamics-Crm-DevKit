# Generator single-file CLI mode and MCP integration design

> Status: **Reviewed design — CLI implementation ready; MCP implementation deferred**
> Scope: `DynamicsCrm.DevKit.Cli` only
> Reviewed against repository code: 2026-08-14
> Binding constraint: `TaskGenerator.cs` is stable and proven. Do not clone, rewrite, or modify it for the CLI feature described here.

---

## 1. Executive decision

Implement `devkit generator --file <existing-generated-file>` as a thin adapter in `GeneratorCommand`.

The adapter must:

1. validate and canonicalize the supplied path;
2. derive the generator type and entity schema name from the complete file suffix;
3. recover only the generator settings that are actually represented in the existing file;
4. create an in-memory `JsonGenerator` whose `rootfolder` and `entities` make the existing `TaskGenerator` select exactly one entity; and
5. call the unchanged `TaskGenerator`.

Do not add `Arg.File` branches to `TaskGenerator`. Its existing `entities` branch already supports a one-entity run and uses the targeted metadata path.

MCP exposure is a separate phase. `TaskGenerator` writes directly to disk and does not return a change plan, so it cannot currently provide a safe native MCP preview/result contract without a new execution seam. Do not include an MCP tool in the CLI `--file` change.

---

## 2. Verified current behavior

`TaskGenerator` dispatches five generators by `Json.type`:

| `Json.type` | Generated suffix | Generator entry point |
| --- | --- | --- |
| `csharp` | `.generated.cs` | `CSharpLateBound.GetCsCode` |
| `jsform` | `.form.js` | `JsForm.GetJsFormCodeAsync` |
| `tsform` | `.form.ts` | `TsForm.GetTsFormCodeAsync` and `TsOptionSet` |
| `jswebapi` | `.webapi.js` | `JsWebApi.GetJsWebApiCodeAsync` |
| `tswebapi` | `.webapi.ts` | `TsWebApi.GetTsWebApiCodeAsync` |

When `Json.entities` contains a non-empty, non-`folder`, non-`all` value, `GetSchemaNamesAsync` returns that value directly. A single value therefore causes `RunAsync` to use the targeted metadata path rather than the all-entity path.

`TaskGenerator.CurrentFolder` is currently constructed as `CurrentDirectory + "\\" + Json.rootfolder`. Consequently, `Json.rootfolder` must be relative to the process current directory. Supplying an absolute directory as `rootfolder` is invalid for this implementation.

The existing `webresource --file` command is useful only as precedent for making `--json` and `--profile` optional. Generator mode has different derivation and companion-file behavior and must not copy `TaskWebResource` logic literally.

---

## 3. User-facing CLI contract

### 3.1 Supported commands

```bash
devkit generator --file Account.form.js
devkit generator --file Account.webapi.js
devkit generator --file Account.form.ts
devkit generator --file Account.webapi.ts
devkit generator --file Account.generated.cs
```

Normal authentication options remain unchanged (`--conn`, or `--auth` plus its required options).

### 3.2 New option

Add only this option to `GeneratorCommandArgs`:

| Option | Meaning |
| --- | --- |
| `--file`, `-f` | Absolute or current-directory-relative path to one existing generated file. |

Do not add `--type`, `--rootnamespace`, or `--namespace` in this change. All values needed to reproduce an existing supported output can be derived as described below. Explicit overrides can be designed later if a real non-round-trippable case is found.

### 3.3 Mode selection and precedence

- When `--file` is empty, preserve profile mode exactly: `--json` and `--profile` are required and the selected generator profile is used unchanged.
- When `--file` is present, single-file mode is authoritative for generation. A supplied `--json` or `--profile` must not override `type`, `rootfolder`, `rootnamespace`, `entities`, or C# `namespace` derived from the file.
- A supplied JSON path may still participate in the existing project `.env` discovery performed by `DevKitCommandArgs`; this is authentication setup, not generator-profile merging.

This rule avoids a dangerous state where the user names one file but a profile redirects generation to another folder or entity set.

### 3.4 Update-only meaning

The path supplied to `--file` must already exist and must be a regular file. Single-file mode does not accept a desired new path.

“Single-file” means **one entity and one selected generator type**, not “exactly one filesystem write.” Existing `TaskGenerator` behavior may also update or create companion files in the same directory:

| Selected target | Possible companion effects from current code |
| --- | --- |
| `.form.js` | `<Schema>.js` and `<Schema>.d.ts` |
| `.webapi.js` | `<Schema>.js` and `<Schema>.d.ts` |
| `.form.ts` | `<Schema>.ts` and `OptionSet.ts` |
| `.webapi.ts` | no current companion output |
| `.generated.cs` | `<Schema>.cs`; the existing custom file may also be migrated from `public partial` to `internal partial` |

The CLI help text and documentation must not claim that no other file can be created.

---

## 4. Deterministic derivation rules

Create small, testable helpers in the CLI component, preferably next to `GeneratorCommand`. Do not place them in `DynamicsCrm.DevKit.Shared` for this change.

### 4.1 Canonical target path

1. Reject null, empty, or whitespace input.
2. Resolve it against `settings.CurrentDirectory` and call `Path.GetFullPath`.
3. Require `File.Exists(absoluteFile)`.
4. Use the canonical absolute path for validation and logging.

Validation failures must throw `DevKitValidationException`, so `DevKitCommand` returns `ExitCodes.ValidationError`. Do not merely log and return from `RunTaskAsync`, because that path returns a success exit code.

### 4.2 Type and schema name

Match the full filename suffix, case-insensitively, using this table:

| Full suffix | `JsonGenerator.type` |
| --- | --- |
| `.generated.cs` | `csharp` |
| `.webapi.js` | `jswebapi` |
| `.form.js` | `jsform` |
| `.webapi.ts` | `tswebapi` |
| `.form.ts` | `tsform` |

The schema name is the filename with the **complete matched suffix** removed.

| File | Schema name |
| --- | --- |
| `Account.form.js` | `Account` |
| `new_Project.webapi.ts` | `new_Project` |
| `Account.generated.cs` | `Account` |

Do not use `Path.GetFileNameWithoutExtension`: for `Account.form.js` it returns `Account.form`, which is wrong. Reject an empty schema name and every suffix outside the table. Bare schema names and custom `.cs`, `.js`, or `.ts` files are not supported.

### 4.3 Output directory and `rootfolder`

Let `targetDirectory = Path.GetDirectoryName(absoluteFile)` and set:

```text
profile.rootfolder = Path.GetRelativePath(settings.CurrentDirectory, targetDirectory)
```

Use `.` when the result is empty. Relative paths containing `..` are valid and are required to support a target outside the current directory.

Before invoking the task, combine `settings.CurrentDirectory` and `profile.rootfolder`, canonicalize the result, and assert that it equals `targetDirectory` using the platform-appropriate path comparison. This is a defensive invariant against writing to the wrong directory.

Do not assign `targetDirectory` directly to `rootfolder`; the current string-based `TaskGenerator.CurrentFolder` would produce an invalid path such as `D:\work\D:\other`.

### 4.4 `entities`

Set `profile.entities` to the schema name derived in section 4.2. Do not set it to `folder`, `*`, or the filename.

This is the only selection mechanism needed by `TaskGenerator`; `CommandLineArgs.File` is not required.

### 4.5 Namespace recovery

Namespace parsing is type-specific. Read the existing file before connecting to Dataverse so malformed input fails quickly.

#### JavaScript form and Web API

For `.form.js` and `.webapi.js`, capture the identifier from the generated header marker `/** @namespace <value> */` and set `profile.rootnamespace` to that value.

This is sufficient even when an original profile used a multi-part value: the JS generators call `Helper.GetNameSpace`, and the generated file stores the resulting runtime namespace. Feeding that emitted namespace back through the same transformation reproduces the runtime output.

Reject the file if the marker is absent, duplicated with conflicting values, or contains a value outside the identifier shape emitted by the generator.

#### C# late-bound

For `.generated.cs`, recover both values from generated declarations:

- `profile.rootnamespace`: the namespace containing the generated `internal partial class` whose base type ends in `EntityBase`;
- `profile.@namespace`: the optional qualifier before `EntityBase` in the base type.

`internal partial class Account : EntityBase` means `profile.@namespace = null`, while `internal partial class Account : Shared.Model.EntityBase` means `profile.@namespace = "Shared.Model"`.

The earlier draft stated that the C# `shareProject` value was not stored in generated output. That was incorrect: `CSharpLateBound.GetCsCode` emits it directly in the base type.

Do not derive the root namespace only by stripping `.<Schema>OptionSets` from the first namespace. The class declaration is the authoritative anchor and avoids assumptions about sanitized class names. Do not require the emitted class identifier to equal the filename schema text because the generator may sanitize identifiers. Reject a C# file unless exactly one qualifying generated class and its containing namespace can be identified.

#### TypeScript form and Web API

For `.form.ts` and `.webapi.ts`, set `profile.rootnamespace = null`. Current `TaskGenerator.IsValidAsync` explicitly skips root-namespace validation for `tsform` and `tswebapi`, and the current TypeScript generator entry points do not accept a root namespace.

Do not parse the “last `export namespace`” from `.form.ts`. The generated file contains entity/form namespaces, not the profile `rootnamespace`, and `TsForm.GetTsFormCodeAsync` does not consume that setting.

### 4.6 In-memory profile

Single-file mode must construct a new `JsonGenerator`; it must not mutate or merge a profile loaded from JSON.

```text
type          = derived type
rootfolder    = relative target directory
entities      = derived schema name
rootnamespace = parsed value for JS/C#, otherwise null
namespace     = parsed C# EntityBase qualifier, otherwise null
```

Other fields remain at their defaults.

---

## 5. Implementation touch points

### 5.1 `Models/GeneratorCommandArgs.cs`

- Add `File` with `[CommandOption("--file|-f")]`.
- Describe it as an existing generated file and mention one-entity regeneration.
- Remove unused imports already present in this empty model only if touched by normal compiler cleanup; do not make unrelated changes.

### 5.2 `Commands/GeneratorCommand.cs`

- Override `IsProfileRequired` and `IsJsonRequired`; both return `false` only when `File` is non-empty.
- Override or extend validation so file existence, supported suffix, path invariant, and namespace parsing fail with `DevKitValidationException` before connection.
- Add `--file` to `BuildArgRows` so the invocation is visible in CLI diagnostics.
- Keep the current profile-mode behavior unchanged.
- Add a separate single-file branch that constructs the in-memory profile described above.
- Create the existing `CommandLineArgs` compatibility object and invoke the unchanged `TaskGenerator`.
- Do not pass `File` into `CommandLineArgs`; routing is entirely expressed by the in-memory profile.

Avoid reading `settings.JsonFile` unless it is non-null and exists. `File.Exists(null)` is safe, but an unconditional `ReadAllTextAsync(settings.JsonFile)` is not.

### 5.3 `Tasks/TaskGenerator.cs`

No change. Do not add early returns to `IsValidAsync` or `GetSchemaNamesAsync`. The adapter provides a valid profile and the existing `entities` branch already selects one schema.

### 5.4 Expected scope

The implementation should be localized to the command and argument model. If it requires changes to Shared generator logic or substantial changes to `TaskGenerator`, stop and re-evaluate the design.

---

## 6. Error contract

Use concise validation messages with the offending canonical path when available.

| Condition | Required outcome |
| --- | --- |
| `--file` does not exist | Validation error; do not connect or generate. |
| Unsupported suffix | Validation error listing all five supported suffixes. |
| Empty schema after suffix removal | Validation error. |
| JS namespace marker missing or ambiguous | Validation error explaining that the file is not recognized as DevKit-generated JS. |
| C# generated class/namespace/base type missing or ambiguous | Validation error explaining that the file is not recognized as DevKit-generated C#. |
| Derived output directory differs from target directory | Validation error; do not generate. |
| Entity not found in Dataverse | Preserve the current `TaskGenerator` error text and behavior. |

Do not change existing public error text in `TaskGenerator`.

---

## 7. Tests and acceptance criteria

Add focused `net10.0` tests under `DynamicsCrm.DevKit.UnitTests/Cli/` for the new parsing and profile-building helpers. Keep tests independent of a live Dataverse connection where possible.

### 7.1 Required unit cases

1. Each of the five suffixes maps to the expected type and schema.
2. Suffix matching is case-insensitive.
3. `Account.form.js` produces `Account`, not `Account.form`.
4. Unsupported and empty-schema filenames fail validation.
5. A CWD-relative path and an absolute path resolve to the same canonical target.
6. A target outside CWD produces a relative `rootfolder` containing `..`, and recombines to the original directory.
7. JS namespace parsing succeeds for current `.form.js` and `.webapi.js` fixture shapes.
8. JS namespace parsing rejects a missing or conflicting marker.
9. C# parsing recovers the class namespace.
10. C# parsing recovers both an unqualified `EntityBase` and a qualified `<shareProject>.EntityBase`.
11. TypeScript profiles leave `rootnamespace` null.
12. `--file` makes JSON/profile optional; profile mode still requires both.
13. If `--file`, `--json`, and `--profile` are all supplied, derived single-file routing values win.

Use small inline fixture strings for parser tests. A regression test may additionally read the checked-in `TestAllInOne` outputs, but tests should not depend only on large generated fixtures.

### 7.2 Smoke cases requiring Dataverse

Run only when valid test credentials/environment are available:

- regenerate one file of each supported type;
- confirm no second entity is generated;
- confirm the named target directory is used when the target is outside CWD;
- confirm JS `.d.ts`, TS `OptionSet.ts`, and C# custom-file side effects match profile-mode behavior;
- confirm a nonexistent entity uses the current error output.

### 7.3 Verification commands

```powershell
dotnet build DynamicsCrm.DevKit.Cli/DynamicsCrm.DevKit.Cli.csproj
dotnet test DynamicsCrm.DevKit.UnitTests/DynamicsCrm.DevKit.UnitTests.csproj --framework net10.0 --filter <focused-filter>
```

Do not run a full solution or packaging build for this change.

### 7.4 Definition of done for the CLI phase

- Profile mode behavior is unchanged.
- All five generated suffixes work in update-only single-entity mode.
- The selected target directory is deterministic for relative, absolute, and outside-CWD paths.
- No `TaskGenerator.cs` or Shared file is changed.
- Validation failures return the validation exit code.
- Companion-file behavior is documented and tested.
- Focused build and tests pass.

---

## 8. MCP integration: deferred phase design

### 8.1 Why the CLI adapter must not be exposed directly as an MCP tool

Calling `TaskGenerator.RunAsync` from an MCP tool currently has four unresolved contract problems:

1. It writes files directly and cannot preview a complete change set.
2. It reports through `SpectreLog` rather than returning structured per-file results.
3. One entity operation can affect companion files, so a result cannot honestly describe only the requested path.
4. `XrmHelper.EntitiesMetadata` and other generator state are static; repeated or concurrent long-lived MCP calls require an explicit cache-isolation policy.

The MCP host currently derives tool availability from `[McpServerTool(ReadOnly = ...)]` and supports `readonly`/`all` categories. The previous draft's reference to a three-tier `ToolCategoryMap` is not accurate for the current `McpServerHost` implementation.

`McpExecutionContext.MutationsBlocked` is documented as a Dataverse mutation boundary. It is not, by itself, a filesystem transaction or rollback mechanism.

### 8.2 Required prerequisite seam

Before adding a native tool, approve and design a generator execution seam that can produce a `GeneratorChangePlan` without modifying destination files. The plan must include every primary and companion file:

```text
GeneratorChangePlan
  generatorType
  schemaName
  targetDirectory
  files[]
    path
    action: create | update | unchanged
    oldLength
    newLength
    contentHash
    content (internal only; omitted from normal MCP result)
  warnings[]
```

Applying a plan must be separate from computing it and occur only after all paths are canonicalized and validated. This likely requires a deliberate refactor around generator output/write boundaries; it is not part of the single-file CLI implementation and must not be simulated by redirecting global console output.

Do not use a temporary-directory wrapper around `TaskGenerator` as the production design. Companion-file existence affects generation, copying an arbitrary target directory is expensive and risky, and global/static state would remain unresolved.

### 8.3 Proposed future tool contract

After the prerequisite seam exists, add one generic tool rather than five duplicate tools:

```text
tool name: generate_entity_code
classification: mutating (`ReadOnly = false`)

inputs:
  targetFile       required; existing supported generated file
  applyChanges     optional; default false

structured result:
  applied          boolean
  generatorType
  schemaName
  targetDirectory
  files[]          path, action, oldLength, newLength, contentHash
  warnings[]
```

Rules:

- `applyChanges=false` returns a preview and performs no filesystem writes.
- `applyChanges=true` applies exactly the computed plan after rechecking path invariants.
- Server dry-run policy must force preview behavior even if `applyChanges=true`; the result must clearly state that changes were not applied.
- Require a configured workspace root and reject every canonical destination outside it.
- Do not return generated source content by default; large entities can exceed practical MCP result sizes.
- Return all companion files in `files[]`.
- Preserve existing MCP structured-result conventions through `McpToolBase`.
- Only the tool class receives `[McpServerToolType]`; helpers belong in an appropriate subnamespace.
- Add focused MCP tests for preview, apply, workspace escape, companion enumeration, dry-run behavior, and repeated calls with different entities.

### 8.4 MCP go/no-go criteria

Do not implement the MCP tool until all of these are true:

- a side-effect-free change plan can be computed;
- plan application is explicit and path-bounded;
- static metadata/cache behavior is safe for sequential and concurrent server calls;
- Spectre output cannot corrupt stdio transport;
- structured results enumerate every affected file; and
- dry-run semantics for filesystem writes are approved and tested.

---

## 9. Implementation order

1. Implement and test the CLI derivation/profile builder.
2. Add the command option, validation overrides, diagnostics row, and single-file branch.
3. Run the focused CLI build and unit tests.
4. Smoke-test against Dataverse when credentials are available.
5. Stop. Do not add MCP code in the same change.
6. In a later design/PR, introduce the side-effect-free change-plan seam.
7. Only then implement `generate_entity_code` and perform the repository-required MCP rebuild/reinstall/runtime verification.

---

## 10. Files for the implementing AI to inspect

- `DynamicsCrm.DevKit.Cli/Commands/GeneratorCommand.cs`
- `DynamicsCrm.DevKit.Cli/Models/GeneratorCommandArgs.cs`
- `DynamicsCrm.DevKit.Cli/Commands/DevKitCommand.cs`
- `DynamicsCrm.DevKit.Cli/Commands/WebResourceCommand.cs`
- `DynamicsCrm.DevKit.Cli/Models/DevKitCommandArgs.cs`
- `DynamicsCrm.DevKit.Cli/Models/CommandLineArgs.cs`
- `DynamicsCrm.DevKit.Cli/Tasks/TaskGenerator.cs` (read-only for the CLI phase)
- `DynamicsCrm.DevKit.Shared/Models/JsonGenerator.cs` (read-only)
- `DynamicsCrm.DevKit.Shared/Helper.cs` (`GetNameSpace`, read-only)
- `DynamicsCrm.DevKit.Shared/Logic/CSharpLateBound.cs` (read-only)
- `DynamicsCrm.DevKit.Shared/Logic/JsForm.cs` (read-only)
- `DynamicsCrm.DevKit.Shared/Logic/JsWebApi.cs` (read-only)
- `DynamicsCrm.DevKit.Shared/Logic/TsForm.cs` (read-only)
- `DynamicsCrm.DevKit.Shared/Logic/TsWebApi.cs` (read-only)
- `DynamicsCrm.DevKit.Cli/Mcp/McpServerHost.cs` (future MCP phase)
- `DynamicsCrm.DevKit.Cli/Mcp/McpExecutionContext.cs` (future MCP phase)
- `DynamicsCrm.DevKit.Cli/Mcp/Tools/McpToolBase.cs` (future MCP phase)
- `DynamicsCrm.DevKit.UnitTests/Cli/` (focused tests)

Checked-in output examples for parser validation:

- `DynamicsCrm.DevKit.Tests/TestAllInOne/Dev.AllInOne.Shared/Entities/Account.generated.cs`
- `DynamicsCrm.DevKit.Tests/TestAllInOne/Dev.AllInOne.WebResource/entities/Account.form.js`
- `DynamicsCrm.DevKit.Tests/TestAllInOne/Dev.AllInOne.WebResource/entities/Account.webapi.js`
- `DynamicsCrm.DevKit.Tests/TestAllInOne/Dev.AllInOne.WebResourceTs/entities/Account.form.ts`
- `DynamicsCrm.DevKit.Tests/TestAllInOne/Dev.AllInOne.WebResourceTs/entities/Account.webapi.ts`

---

## 11. Explicit non-goals

- No multiple-file `--files` option.
- No create-new behavior in single-file mode.
- No new generator type.
- No changes to Shared code generation.
- No changes to `TaskGenerator` for the CLI phase.
- No CLI dry-run flag in this phase.
- No native MCP tool in the same implementation change.
- No generated configuration or adapter for unsupported AI clients.
