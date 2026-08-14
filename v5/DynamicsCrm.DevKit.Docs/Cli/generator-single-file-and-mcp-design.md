# Generator — Single-File CLI Mode & MCP Integration Analysis

> Status: **Design draft / pre-implementation review**
> Scope: `DynamicsCrm.DevKit.Cli/Tasks/TaskGenerator.cs` and its callers
> Date: 2026-08-14
> Constraint (binding): `TaskGenerator.cs` is treated as **stable and proven** — do NOT clone, do NOT rewrite, only add minimal guard clauses if strictly necessary.

---

## 1. Context recap

### 1.1 What `TaskGenerator` does today

`TaskGenerator` is the orchestrator for **five code generators**, dispatched by `Json.type`:

| `type`     | output extension | generator entry                             |
| ---------- | ---------------- | ------------------------------------------- |
| `csharp`   | `.generated.cs`  | `CSharpLateBound.GetCsCode`                 |
| `jsform`   | `.form.js`       | `JsForm.GetJsFormCodeAsync`                 |
| `tsform`   | `.form.ts`       | `TsForm.GetTsFormCodeAsync` + `TsOptionSet` |
| `jswebapi` | `.webapi.js`     | `JsWebApi.GetJsWebApiCodeAsync`             |
| `tswebapi` | `.webapi.ts`     | `TsWebApi.GetTsWebApiCodeAsync`             |

All heavy code-gen logic lives in `DynamicsCrm.DevKit.Shared/*`. `TaskGenerator` itself only:

- Validates JSON profile (`IsValidAsync`).
- Resolves which schema names to process (`GetSchemaNamesAsync`).
- Loads entity metadata (either targeted via `Metadata.GetEntitiesMetadataAsync(schemaNames)` when ≤500, or full `MetadataService.ReadEntitiesMetadataAsync` for `*`).
- Loops entities, computes new code, compares against existing file, writes via `FileHelper.ForceWriteAllTextAsync`.
- Emits Spectre.Console progress / status lines.

The 1:1 map between `type` and output extension is hard-coded in `GetSchemaNamesAsync`:

```csharp
if (Json.type.ToLower() == nameof(GeneratorType.csharp))      endsWith = ".generated.cs";
else if (Json.type.ToLower() == nameof(GeneratorType.jsform))  endsWith = ".form.js";
else if (Json.type.ToLower() == nameof(GeneratorType.tsform))  endsWith = ".form.ts";
else if (Json.type.ToLower() == nameof(GeneratorType.jswebapi))endsWith = ".webapi.js";
else if (Json.type.ToLower() == nameof(GeneratorType.tswebapi))endsWith = ".webapi.ts";
```

This map is **bidirectional and unambiguous** — given a file extension we can derive `type` with no collision.

### 1.2 Existing single-file precedent — `devkit webresource`

`WebResourceCommand` already implements **exactly the pattern we want to replicate**:

```csharp
// Commands/WebResourceCommand.cs
[CommandOption("--file|-f")]      public string File;
[CommandOption("--webresource|-w")] public string WebResource;

// Bypass profile validation
protected override bool IsProfileRequired(WebResourceCommandArgs s) => string.IsNullOrEmpty(s.File);
protected override bool IsJsonRequired(WebResourceCommandArgs s)   => string.IsNullOrEmpty(s.File);
```

Inside `TaskWebResource`:

```csharp
// TaskWebResource.cs:37
if (!string.IsNullOrEmpty(Arg.File) && !string.IsNullOrEmpty(Arg.WebResource))
    return true; // Bypass profile validation for explicit single file update

// TaskWebResource.cs:663-665 — WebResourceFiles getter
if (!string.IsNullOrEmpty(Arg.File))
{
    var file = Path.GetFullPath(Arg.File);
    ...
    _webResourceFiles.Add(webResourceFile);
    return _webResourceFiles;
}
```

Side effects of single-file mode in webresource:

- No JSON file required.
- No profile required.
- No "add to solution" step (only update of an existing web resource).
- Special-case for `.ts` → auto `npm run debug` then deploy the compiled `.js`.
- `Arg.WebResource` is the unique name; if missing → derived from `Json.rootfolder + SolutionPrefix + relative path`.

This is the **template** we mirror for `generator`.

---

## 2. Proposed feature — `devkit generator --file`

### 2.1 Goal

Allow the user to regenerate code for **exactly one entity** without authoring a `DynamicsCrm.DevKit.Cli.json` profile, e.g.:

```bash
devkit generator --file Account.form.js
devkit generator --file Account.webapi.js
devkit generator --file Account.form.ts
devkit generator --file Account.webapi.ts
devkit generator --file Account.generated.cs
devkit generator --file Account.generated.cs --namespace Xrm.Entities
```

`--rootnamespace` is **NOT required** — it is reverse-parsed from the target file (see §2.3 bis).
`--namespace` is only needed for `csharp` when the user wants a custom `shareProject` value; otherwise it is derived from the file.

### 2.2 CLI options (added to `GeneratorCommandArgs`)

| Option         | Required?                                            | Notes                                                                                  |
| -------------- | ---------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `--file  / -f` | yes (this mode)                                      | Absolute or CWD-relative path to a single existing generated file. Update-only.        |
| `--namespace`  | optional, csharp only (`shareProject`)               | Same semantics as `Json.@namespace`. Omit it → derive from file (see §2.3 bis).         |

`--type` is **NOT** required — derived from the file extension (1:1 map, see §2.3).
`--rootnamespace` is **NOT** required — reverse-parsed from the target file (see §2.3 bis).
`--json` and `--profile` become optional in this mode (mirror `webresource`).

### 2.3 Type derivation table

| File extension  | Derived `type` |
| --------------- | -------------- |
| `.form.js`      | `jsform`       |
| `.webapi.js`    | `jswebapi`     |
| `.form.ts`      | `tsform`       |
| `.webapi.ts`    | `tswebapi`     |
| `.generated.cs` | `csharp`       |

Edge: if both `Account.form.js` and `Account.form.ts` exist, user picks the one they want to regenerate. We do **not** support bare schema name (e.g. `--file Account`) because `jsform` vs `tsform` would be ambiguous.

### 2.3 bis Reverse-parsing `rootnamespace` from the target file

Verified against real output files in the repo:

| Output extension  | File path used as evidence                                                | Anchor / regex                                                                       | Result                                  |
| ----------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | --------------------------------------- |
| `.generated.cs`   | `DynamicsCrm.DevKit.Tests/TestAllInOne/Dev.AllInOne.Shared/Entities/Account.generated.cs` | Line 13: `namespace Dev.AllInOne.Shared.Entities.AccountOptionSets` → strip `.{Class}OptionSets` | `Dev.AllInOne.Shared.Entities`           |
| `.generated.cs`   | Same file, line 633                                                      | `namespace Dev.AllInOne.Shared.Entities` (second declaration)                        | `Dev.AllInOne.Shared.Entities` (sanity) |
| `Account.cs` (custom user file) | `DynamicsCrm.DevKit.Tests/TestAllInOne/Dev.AllInOne.Shared/Entities/Account.cs` | Line 4: `namespace Dev.AllInOne.Shared.Entities`                                       | `Dev.AllInOne.Shared.Entities`           |
| `.form.js`        | `DynamicsCrm.DevKit.Tests/TestAllInOne/Dev.AllInOne.WebResource/entities/Account.form.js` | Line 2: `/** @namespace AllInOne */`                                                  | `AllInOne`                              |
| `.webapi.js`      | `DynamicsCrm.DevKit.Tests/TestAllInOne/Dev.AllInOne.WebResource/entities/Account.webapi.js` | Line 2: `/** @namespace AllInOne */`                                                  | `AllInOne`                              |
| `.form.ts`        | `DynamicsCrm.DevKit.Tests/TestAllInOne/Dev.AllInOne.WebResourceTs/entities/Account.form.ts` | **Last** `export namespace` block (line ~1046, aggregate) → `export namespace AllInOne {` | `AllInOne`                              |
| `.webapi.ts`      | `DynamicsCrm.DevKit.Tests/TestAllInOne/Dev.AllInOne.WebResourceTs/entities/Account.webapi.ts` | No namespace declaration; only `interface IAccountApi extends DevKit.IWebApiEntity`     | **N/A — already not required** for `tswebapi` |

> **Why this works:** the real-world convention used in `.Tests/` is one-segment `rootnamespace` (e.g. `AllInOne`, `DevKit`, `Dev.DevKit`). `Helper.GetNameSpace("AllInOne")` returns `AllInOne` unchanged. There is **no information loss** when round-tripping through the file output. Multi-segment namespaces (`X.Y.Z`) would only collide if a user actively chose a custom JS namespace alias, which is uncommon.

> **Caveat for `.form.ts`:** the file contains multiple `export namespace` blocks — the schema namespace (`Account`) for each form, plus the aggregate (`AllInOne`) at the bottom. **Always take the last one** — that is `rootnamespace`.

> **`@namespace` for `csharp`:** the `shareProject` argument is **not** stored in the file, only the final `RootNamespace` is. If the user wants a custom shareProject value, they must pass `--namespace` explicitly. Otherwise we can leave `Json.@namespace = null` (current behaviour) and accept the default.

Implementation sketch (placed in `Commands/GeneratorCommand.cs`, **not** in `Shared/Helper.cs` to keep `Shared` untouched):

```csharp
private static string ReverseParseRootNamespace(string filePath)
{
    var ext = Path.GetExtension(filePath).ToLowerInvariant();
    var firstLines = string.Join("\n",
        File.ReadAllLines(filePath).Take(20));   // cheap, bounded read

    if (ext == ".generated.cs")
    {
        // Line ~13: "namespace X.Y.Z.AccountOptionSets"
        var m = System.Text.RegularExpressions.Regex.Match(
            firstLines, @"namespace\s+([\w\.]+)\.\w+OptionSets");
        return m.Success ? m.Groups[1].Value : null;
    }
    if (ext == ".form.js" || ext == ".webapi.js")
    {
        // Line 2: "/** @namespace X */"
        var m = System.Text.RegularExpressions.Regex.Match(
            firstLines, @"/\*\*\s*@namespace\s+([\w\.]+)\s*\*/");
        return m.Success ? m.Groups[1].Value : null;
    }
    if (ext == ".form.ts")
    {
        // Last "export namespace X {" in the whole file
        var all = File.ReadAllText(filePath);
        var matches = System.Text.RegularExpressions.Regex.Matches(
            all, @"export\s+namespace\s+([\w]+)");
        return matches.Count > 0 ? matches[matches.Count - 1].Groups[1].Value : null;
    }
    // .ts (.webapi.ts): no namespace; .cs (.cs custom file): handled separately if user pointed at it
    return null;
}
```

If reverse-parse fails, fall back to existing error in `IsValidAsync` and exit cleanly.

### 2.4 Touch points (minimal)

#### a) `Models/GeneratorCommandArgs.cs` — add two props

```csharp
[CommandOption("--file|-f")]
[Description("Single existing generated file to regenerate (e.g. Account.form.js). Update-only.")]
public string File { get; set; }

[CommandOption("--namespace")]
[Description("C# shareProject namespace (csharp only; optional).")]
public string Namespace { get; set; }
```

`--rootnamespace` is no longer a CLI option — it is reverse-parsed from `--file` (see §2.3 bis).

#### b) `Commands/GeneratorCommand.cs` — bypass branch

Mirror `WebResourceCommand`:

```csharp
protected override bool IsProfileRequired(GeneratorCommandArgs s) => string.IsNullOrEmpty(s.File);
protected override bool IsJsonRequired(GeneratorCommandArgs s)   => string.IsNullOrEmpty(s.File);

// In RunTaskAsync, before reading json:
var hasOverride = !string.IsNullOrEmpty(settings.File);
JsonGenerator profile = null;

if (System.IO.File.Exists(settings.JsonFile))
{
    var json = JsonHelper.Deserialize<Json>(await FileHelper.ReadAllTextAsync(settings.JsonFile));
    profile = json?.generators?.FirstOrDefault(x => x.profile == settings.Profile);
}

if (hasOverride)
{
    profile ??= new JsonGenerator();

    // 1. Fast-fail: file must exist (update-only mode)
    var absoluteFile = Path.GetFullPath(settings.File);
    if (!File.Exists(absoluteFile))
    {
        SpectreLog.ActionError($"--file is update-only: '{absoluteFile}' does not exist.");
        return;
    }

    // 2. Derive type from extension
    profile.type        = DeriveTypeFromFile(absoluteFile);

    // 3. Derive rootnamespace from the file's own header
    profile.rootfolder  = Path.GetDirectoryName(absoluteFile) ?? ".";
    profile.rootnamespace = ReverseParseRootNamespace(absoluteFile)
                        ?? throw new DevKitValidationException(
                              $"Cannot reverse-parse rootnamespace from '{absoluteFile}'. " +
                              "Please open a DynamicsCrm.DevKit.Cli.json profile for this entity, " +
                              "or pass --rootnamespace explicitly via the json profile.");

    // 4. shareProject is optional
    if (settings.Namespace != null) profile.@namespace = settings.Namespace;

    // 5. Single entity only
    profile.entities = Path.GetFileNameWithoutExtension(absoluteFile);
}
else if (profile == null)
{
    SpectreLog.ActionError($"Profile '{settings.Profile}' not found in 'generators' section");
    return;
}

var args = new CommandLineArgs { /* … */, File = settings.File };
var generator = new TaskGenerator(args, profile);
await generator.RunAsync();
```

`DeriveTypeFromFile`:

```csharp
private static string DeriveTypeFromFile(string file)
{
    var name = Path.GetFileName(file).ToLowerInvariant();
    if (name.EndsWith(".form.js"))      return "jsform";
    if (name.EndsWith(".webapi.js"))    return "jswebapi";
    if (name.EndsWith(".form.ts"))      return "tsform";
    if (name.EndsWith(".webapi.ts"))    return "tswebapi";
    if (name.EndsWith(".generated.cs")) return "csharp";
    throw new ArgumentException(
        $"Cannot derive generator type from '{file}'. " +
        "Expected one of: .form.js, .webapi.js, .form.ts, .webapi.ts, .generated.cs");
}
```

`ReverseParseRootNamespace` — see §2.3 bis for the full regex set.

#### c) `Tasks/TaskGenerator.cs` — two guard clauses only

Add at the top of `IsValidAsync`:

```csharp
if (!string.IsNullOrEmpty(Arg.File)) return true;
```

Add at the top of `GetSchemaNamesAsync`:

```csharp
if (!string.IsNullOrEmpty(Arg.File))
{
    var file = Path.GetFullPath(Arg.File);
    var schema = Helper.GetSchemaNameFromFile(file, DeriveEndsWith(Json.type));
    return new List<string> { schema };
}
```

Existing routing (`schemaNames.Count > 500` vs targeted load) handles single-entity case optimally — no extra optimization needed.

#### c) `Tasks/TaskGenerator.cs` — **two guard clauses only** (still respecting "no touch" constraint as much as possible)

Add at the top of `IsValidAsync`:

```csharp
if (!string.IsNullOrEmpty(Arg.File)) return true;
```

Add at the top of `GetSchemaNamesAsync`:

```csharp
if (!string.IsNullOrEmpty(Arg.File))
{
    var file = Path.GetFullPath(Arg.File);
    var endsWith = Path.GetExtension(file);                       // e.g. ".js"
    if (endsWith == ".js" && !file.EndsWith(".form.js", …)) endsWith = ".webapi.js";
    // … or use the existing GetSchemaNameFromFile helper
    var schema = Helper.GetSchemaNameFromFile(file, Json.type.ToLower() switch { … });
    return new List<string> { schema };
}
```

The single-entity `entities` override already routes through the cheap path in `RunAsync`:

```csharp
if (schemaNames.Count > 500)
    await ReadEntitiesMetadataAsync(ServiceClient, EntityFilters.Attributes);
else
    XrmHelper.EntitiesMetadata = await Metadata.GetEntitiesMetadataAsync(schemaNames);
```

So with one schema, **`ReadEntitiesMetadataAsync` (the expensive FormXml fetch) is skipped automatically**. No additional optimization required.

### 2.5 Edge cases & how they are handled

| Case                                                                        | Handling                                                                                                                             |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **File does not exist (update-only mode)**                                  | Fast-fail at command level (`Commands/GeneratorCommand.cs`) with `ActionError("--file is update-only: '<path>' does not exist.")` and return. **No file is created.** Profile mode still works for create-new. |
| File outside `CurrentDirectory`                                             | `Path.GetFullPath` normalises; user can pass absolute path.                                                                          |
| Schema in file name not in Dataverse                                        | Existing branch logs `ActionError("not found in the current instance !!!")`. User learns immediately.                                |
| `ReverseParseRootNamespace` returns null                                    | Throw `DevKitValidationException` with a clear hint pointing at the JSON profile as the long-term fallback.                          |
| `tsform/tswebapi` and `--rootnamespace` is reverse-parsed as null           | Already not required (current code skips `rootnamespace` validation for these two types).                                            |
| Multi-segment rootnamespace (`X.Y.Z`) in source                            | `Helper.GetNameSpace` would reduce it to `Y` (or `Z`) before writing to JS file. Reverse-parse therefore recovers the **short** form. To regenerate correctly, user must keep the same convention (1 segment) OR provide a profile with the multi-segment rootnamespace. |
| `--namespace` (csharp shareProject) omitted                                 | `Json.@namespace = null` — current default behaviour; `internal partial class Xxx : EntityBase` (no prefix).                          |
| `CurrentFolder = "{CurrentDirectory}\{rootfolder}"` with derived rootfolder | `rootfolder = Path.GetDirectoryName(absoluteFile)` so `CurrentFolder` resolves to the file's folder. Helper diff (`Helper.IsTheSame`) still works on the same file. |
| Old code present, only metadata changed                                     | `oldCode.Length > 0 && newCode.Length > 0 && !IsTheSame(oldDTS, newDTS)` branch updates the `.d.ts` companion.                       |
| `OptionSet.ts` (tsform only)                                                | Regenerated after the entity loop — unchanged behaviour.                                                                             |
| Connection setup                                                            | `--conn / --auth / --url` flow unchanged. `--file` does not affect auth.                                                             |
| Combine `--file` with `--json`/`--profile`                                  | Profile settings win where set; `--file` only fills in the missing values (entity list, type, rootnamespace).                       |

### 2.6 Net impact estimate

| File                             | Lines added (≈) | Lines removed |
| -------------------------------- | --------------- | ------------- |
| `Models/GeneratorCommandArgs.cs` | 8               | 0             |
| `Commands/GeneratorCommand.cs`   | 55              | 0             |
| `Tasks/TaskGenerator.cs`         | 10 (guards)     | 0             |
| **Total**                        | **~73**         | **0**         |

No test fixture churn: existing `Json` + `generators[]` flows stay bit-exact.

---

## 3. MCP integration analysis (separate concern)

> Note: this section is **independent** of section 2. Per user instruction it was analysed earlier but kept here as a reference for later, isolated work.

### 3.1 Difficulties exposing `TaskGenerator` as an MCP tool

| #   | Problem                                                                                                                                                                                                     |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **Filesystem side effects** — MCP server runs as its own process; `CWD` is not the user's workspace. Path must be injected by tool arg.                                                                     |
| 2   | **Multiple companion files** — `jsform` writes both `.form.js` and `.d.ts`; `tsform` also writes `OptionSet.ts`. Result must enumerate them.                                                                |
| 3   | **Diff vs old file** — Spectre progress / diff logs do not map to MCP structured result; need `{action, path, oldLength, newLength, changed}`.                                                              |
| 4   | **Solution metadata unused** — `ITask.SolutionId/SolutionPrefix` are set but never read inside `TaskGenerator`.                                                                                             |
| 5   | **"Read all metadata" cost** — when `Json.entities == "*"` or `>500`, `ReadEntitiesMetadataAsync` fetches FormXml for every entity in the instance. AI clients usually want 1–N entities, so this is heavy. |
| 6   | **JSON profile required today** — AI client has no project file readily. Either inject a generated `JsonGenerator` or wrap and bypass.                                                                      |
| 7   | **`McpExecutionContext.MutationsBlocked` only blocks Dataverse mutations** (see `ManageColumnTool.cs:2347`, `ManageRibbonTool.cs:1594`). It does NOT cover file IO — needs separate `previewOnly` flag.     |

### 3.2 Recommendation — wrap, do NOT clone

Create **`GenerateEntityCodeTool.cs`** (or 5 narrow tools) under `Mcp/Tools/`. Inside the tool:

```csharp
var args = new CommandLineArgs { CurrentDirectory = request.ProjectRoot, ServiceClient = _serviceClient };
var profile = BuildProfileFromRequest(request);     // builds JsonGenerator in-memory, no file IO
var task = new TaskGenerator(args, profile);
await task.RunAsync();
return BuildStructuredResult(...);                  // McpToolBase.Success(...)
```

The real work stays in `TaskGenerator`. The tool is a thin adapter that:

- Maps MCP request fields → `JsonGenerator` (so AI client never authors a JSON profile).
- Decides `previewOnly` from `_context.MutationsBlocked` or an explicit arg.
- Translates the per-entity `CliAction` log stream into a structured `files[]` array.
- Forbids `--rootfolder`/filesystem side effects when `previewOnly=true`.

To avoid touching `SpectreLog` (which writes to stderr and may pollute MCP stdio transport), wrap the call in `AnsiConsole.Console.Profile.Capabilities.Interactive = false;` or temporarily redirect `SpectreLog` to a sink. Decide during implementation.

### 3.3 Risks specific to MCP (independent of section 2)

- `XrmHelper.EntitiesMetadata` is a **static cache** in `Shared`. Two consecutive MCP calls with different filter sets may observe stale state. Wrapper must either reset or document.
- `FileHelper.ForceWriteAllTextAsync` clobbers without confirmation. **`previewOnly=true` must be the default** for any new MCP tool that writes files.
- Tool-result size: a generated `Account.form.js` can be tens of KB. Return only summary + `oldLength/newLength/changed`; do not echo full file content in the tool result.

### 3.4 Decision matrix — section 2 vs section 3

| Criterion                    | Section 2 (CLI `--file`) | Section 3 (MCP tool)            |
| ---------------------------- | ------------------------ | ------------------------------- |
| Effort                       | Low (~45 lines)          | High (tool class, schema, host) |
| Touch `TaskGenerator.cs`     | 2 guards (~8 lines)      | 0                               |
| Touch `TaskWebResource.cs`   | 0                        | 0                               |
| Useful from AI client        | Yes (shell)              | Yes (native MCP)                |
| Risk of clobbering user code | Low (visible log)        | High → requires `previewOnly`   |
| Reuses `Json.profile`        | Optional fallback        | Bypassed                        |

---

## 4. Proposed order of work

1. **Ship section 2 first** — small, low-risk, unblocks the most common user complaint ("I just want to update one file").
2. **Validate with a smoke script** that compiles and runs `devkit generator --file Account.form.js …` against a sandbox env.
3. **Then revisit section 3** once a wrapper-friendly seam (preview/dry-run, structured result shape) is defined.

---

## 5. Open questions for review

### Resolved in this revision

| # | Question                                                              | Decision                                                                                              |
| - | --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 1 | Accept absolute paths for `--file`?                                   | **Yes** — `Path.GetFullPath` normalises either form.                                                  |
| 2 | Merge profile + `--file` or override?                                 | **Merge** — profile wins where set; `--file` only fills in missing values.                            |
| 3 | Read `rootnamespace` from the file vs require an explicit CLI option?  | **Read from file** — see §2.3 bis. No CLI option for `rootnamespace`.                                |
| 4 | Support `--namespace` (csharp shareProject)?                          | **Yes, optional** — only meaningful for `csharp`.                                                     |
| 5 | Update-only vs create-new in single-file mode?                         | **Update-only** — fast-fail if file missing. Create-new stays in profile mode.                        |

### Still open (for the next iteration)

1. Do we want a CLI-level `--dry-run` flag in this PR (compute + diff but don't write), or defer to MCP wrapper?
2. For the future MCP wrapper (§3): single generic tool with `type` enum, or 5 narrow tools? (Generic = less surface, but less discoverable for AI client.)
3. Should we also expose `devkit generator --files "Account.form.js,Contact.form.js"` (plural) in the same PR, or keep PR 1 strictly single-file?
4. When `ReverseParseRootNamespace` fails (rare — file edited by hand, regex mismatch), do we (a) throw a hard error asking for a profile, or (b) prompt user to pass `--rootnamespace` via a new flag? — see §2.5 row "ReverseParseRootNamespace returns null".

---

## 6. References (file paths)

- `DynamicsCrm.DevKit.Cli/Tasks/TaskGenerator.cs` — orchestrator (do not touch core logic).
- `DynamicsCrm.DevKit.Cli/Tasks/ITask.cs` — task contract.
- `DynamicsCrm.DevKit.Cli/Commands/GeneratorCommand.cs` — CLI binding.
- `DynamicsCrm.DevKit.Cli/Models/GeneratorCommandArgs.cs` — CLI args (to extend).
- `DynamicsCrm.DevKit.Cli/Commands/WebResourceCommand.cs` — template for single-file bypass.
- `DynamicsCrm.DevKit.Cli/Tasks/TaskWebResource.cs` — reference for `--file --webresource` implementation.
- `DynamicsCrm.DevKit.Cli/Models/WebResourceCommandArgs.cs` — reference for `--file/-f --webresource/-w` options.
- `DynamicsCrm.DevKit.Shared/Models/JsonGenerator.cs` — profile DTO.
- `DynamicsCrm.DevKit.Cli/Mcp/McpServerHost.cs` — MCP server bootstrap.
- `DynamicsCrm.DevKit.Cli/Mcp/Tools/McpToolBase.cs` — tool result helper.
- `DynamicsCrm.DevKit.Cli/Mcp/McpExecutionContext.cs` — mutation policy.
- `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageColumnTool.cs:2347`, `ManageRibbonTool.cs:1594` — existing `MutationsBlocked` usage.
