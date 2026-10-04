# Plan: Add Autonumber support to MCP tool `manage_column`

> Status: **IMPLEMENTED + VERIFIED 2026-10-04** (see §8 at the bottom for the live-org results).
> Component: **CLI / MCP** (`DynamicsCrm.DevKit.Cli/Mcp/**`, .NET 10). No Shared/VSIX changes.
> Earlier read-only review: [`manage-column-auto-number-review.html`](manage-column-auto-number-review.html) (same conclusion).

---

## 1. Conclusion of the investigation

`manage_column` **does NOT support Autonumber** on CREATE or UPDATE.

Evidence (searched for `AutoNumber` across `DynamicsCrm.DevKit.Cli/**`; the only hits are in the C# code generator `Shared/Logic/CSharpLateBound.cs` and its tests, none in `Mcp/`):

| Location | Observation |
|---|---|
| `ManageColumnTool.manage_column(...)` signature (≈ lines 79–111) | No `auto_number_format` / seed parameter. |
| `CreateStringAttribute` (≈ lines 494–556) | Builds `StringAttributeMetadata` with `MaxLength`, `FormatName`, labels, flags, formula — never sets `AutoNumberFormat`. |
| `UpdateExistingAttribute` → `ApplyTypeSpecificUpdates` (≈ lines 2083–2368) | String branch only updates `MaxLength` / `FormatName`. |
| `GetTablesTool.PopulateAttributeDetails` (≈ line 590) + `Models/TableAttributeEntry.cs` | `get_tables` does not expose `AutoNumberFormat`, so an AI cannot read/clone an existing autonumber column either. |
| `Resources/InstructionResources.cs` `docs://schema_tools_guide` (≈ lines 641–713) | No mention of autonumber. |
| No call to `SetAutoNumberSeedRequest` anywhere in the CLI. | Seed cannot be set. |

The only current workaround is raw `execute_webapi` (POST/PUT `EntityDefinitions(...)/Attributes` or `SetAutoNumberSeed`), which is not ergonomic and bypasses the tool's validation, solution handling and publish.

---

## 2. Microsoft documentation summary (source of truth)

Source: [Create autonumber columns (Dataverse)](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/create-auto-number-attributes), [SetAutoNumberSeedRequest](https://learn.microsoft.com/en-us/dotnet/api/microsoft.crm.sdk.messages.setautonumberseedrequest), [SetAutoNumberSeed action](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/reference/setautonumberseed), [Autonumber columns (maker)](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/autonumber-fields).

1. An autonumber column is a normal **`StringAttributeMetadata`** with the property **`AttributeMetadata.AutoNumberFormat`** set. Only **String** (single line of text) — not Memo or any other type.
2. `FormatName` / `Format` **must be `Text`** (the default). Email, Phone, TextArea, Url, RichText, TickerSymbol… are not allowed.
3. An **existing Text string column can be converted** to autonumber, and an existing autonumber format **can be changed**, via `RetrieveAttributeRequest` → set `AutoNumberFormat` → `UpdateAttributeRequest`.
4. Placeholders:
   | Placeholder | Rule |
   |---|---|
   | `{SEQNUM:n}` | `n` ≥ 1 is a *minimum* length (zero-padded); the number keeps growing beyond `n`. |
   | `{RANDSTRING:n}` | `n` must be **1–6**; 7+ gives "Invalid Argument" at record save time. Optional, may appear multiple times. |
   | `{DATETIMEUTC:fmt}` | `fmt` = any .NET date/time format string (e.g. `yyyyMMddhhmmss`). |
   Literal text around placeholders is allowed, e.g. `WID-{SEQNUM:5}-{RANDSTRING:6}-{DATETIMEUTC:yyyyMMddhhmmss}`.
5. **Dataverse does NOT validate the placeholders when the column is created/updated** — the error only appears when the first record is saved. ⇒ The tool must validate client-side.
6. `MaxLength` must leave room for growth of the sequential segment; do not set it to the exact pattern length (default 100 is fine).
7. Seed: default sequence starts at 1000. Use the **`SetAutoNumberSeed`** message (`SetAutoNumberSeedRequest` in `Microsoft.Crm.Sdk.Messages`) with `EntityName`, `AttributeName`, `Value` (Web API type `Edm.Int64` → use `long`; confirm the SDK property type at compile time — the .NET reference page did not show it). The seed is **environment-only**: it is NOT carried in solutions and is NOT a metadata change (no publish needed).
8. In model-driven forms, controls bound to autonumber columns should be set read-only (informational — out of scope for this tool; mention in description/hint).

---

## 3. Target design

### ✅ 3.1 New `manage_column` parameters (append at the END of the method signature — do not reorder existing params)

| Param | Type | Applies to | Meaning |
|---|---|---|---|
| `auto_number_format` | `string = ""` | string, CREATE + UPDATE | Sets `AutoNumberFormat`. Omit/empty = keep current (UPDATE) / plain text column (CREATE). |
| `clear_auto_number` | `bool? = null` | string, UPDATE only | `true` = remove autonumber (set `AutoNumberFormat = ""`), turning it back into a plain text column. Mutually exclusive with `auto_number_format`. |
| `auto_number_seed` | `long? = null` | string autonumber column, CREATE + UPDATE | After the metadata create/update succeeds, execute `SetAutoNumberSeedRequest`. Must be ≥ 1. |

Rationale: an empty string already means "omit" in this tool, so removal needs a separate explicit flag. `format` must NOT be reused — it means UI format (Text/Email/…).

Optional (nice-to-have, implement only if time permits): read-only `GetAutoNumberSeed` / `GetNextAutoNumberValue` is better placed in `get_tables` output than in this mutating tool — see §3.5.

### ✅ 3.2 Validation (run BEFORE touching Dataverse so it also works in DryRun; add to the "Early validation" block near line 124)

Create a pure static helper, e.g. `Mcp/Tools/Helper/AutoNumberFormatValidator.cs` (namespace `DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper`, **no** `[McpServerToolType]`):

```csharp
internal static class AutoNumberFormatValidator
{
    // Returns null when valid, otherwise an error message.
    public static string Validate(string pattern, out int estimatedMinLength, out List<string> warnings);
}
```

Rules:
- Trim; max reasonable length (e.g. ≤ 4000, same as string MaxLength cap).
- Tokenize `{...}` segments with a regex like `\{(?<name>[A-Z]+):(?<arg>[^{}]+)\}`; any other `{` or `}` (unbalanced / unknown placeholder name) → error.
- Placeholder names: Microsoft docs only show upper-case (`SEQNUM`, `RANDSTRING`, `DATETIMEUTC`) and do NOT say whether they are case-sensitive (unverified). Decision: accept only upper-case (strict, matches docs) and return an error that shows the correct casing.
- `SEQNUM:n` → `n` integer ≥ 1.
- `RANDSTRING:n` → integer 1–6 (error text should cite the Microsoft limit).
- `DATETIMEUTC:fmt` → `fmt` non-empty; verify with `DateTime.UtcNow.ToString(fmt, CultureInfo.InvariantCulture)` inside try/catch (FormatException → error).
- No `SEQNUM` placeholder → **warning** (not error): values may not be unique.
- `estimatedMinLength` = literal chars + Σ SEQNUM n + Σ RANDSTRING n + Σ formatted DATETIMEUTC length.

Cross-parameter rules (in `manage_column`):
- `auto_number_format` / `auto_number_seed` with `attribute_type` ≠ `string` on CREATE → error (`"auto_number_format is only supported for attribute_type 'string'."`).
- CREATE with `auto_number_format` and `format` given and ≠ `Text` → error (Microsoft: autonumber requires Text format).
- CREATE: `clear_auto_number` → error (UPDATE-only).
- `auto_number_format` + `clear_auto_number=true` together → error.
- `auto_number_seed` < 1 → error.
- CREATE: `auto_number_seed` without `auto_number_format` → error.
- MaxLength: if effective max_length < `estimatedMinLength` → **error**; if < `estimatedMinLength + 5` → warning ("leave room for the sequence to grow").

Rules that need existing metadata (UPDATE, inside `UpdateExistingAttribute`):
- Target is not `StringAttributeMetadata` → error naming the actual type (use `GetAttributeTypeName`).
- Effective `FormatName` (new `format` if passed, else current) ≠ `Text` → error.
- `auto_number_seed` on a column whose effective `AutoNumberFormat` (after this call) is empty → error.
- `clear_auto_number=true` on a column without `AutoNumberFormat` → no-op (do not add a change; may add a warning).
- MaxLength check uses new `max_length` if passed, else current `MaxLength`.

### ✅ 3.3 CREATE path changes

1. Pass `auto_number_format` and `auto_number_seed` to `CreateStringAttribute` (new optional params at the end).
2. In `CreateStringAttribute`: if format given, set `attr.AutoNumberFormat = pattern` (keep `FormatName = Text`).
   - Guard: autonumber + `formulaSpec != null` → error (design decision, not from Microsoft docs: a formula-computed value and an autonumber value conflict, so reject the combination). Validate this early in `manage_column`.
3. After the create succeeds (and NOT in DryRun), if seed given → execute
   `new SetAutoNumberSeedRequest { EntityName = entityName, AttributeName = actualLogicalName, Value = seed }`
   through `DataverseMutationExecutor.Execute(_context, _orgService, request)` (so `MutationsBlocked` / readonly mode keeps working). Wrap with `MetadataRetryHelper.RetryOnLockContention` like the create. If the seed call fails after a successful create: do **not** fail the whole call — return success with a `Warnings` entry (`"Column created but SetAutoNumberSeed failed: …"`). Use the **actual** logical name (`ResolveCreatedAttributeLogicalName`) — do it after publish so the attribute is visible.
4. Output: add to `extra` dictionary `autoNumberFormat` and (if set) `autoNumberSeed`. Add validator warnings to `ManageColumnResult.Warnings` (existing field — currently set via `AppendFormulaCloneWarning`; reuse its pattern or extend `BuildResult` with an optional `warnings` param).
5. DryRun: `DryRunCreatePreview` already serializes `attr`; make sure the preview shows `AutoNumberFormat` and that a planned seed is mentioned (e.g. in the summary text `"…; would SetAutoNumberSeed=10000"`). Never call `SetAutoNumberSeedRequest` in DryRun.

### ✅ 3.4 UPDATE path changes

1. Thread `auto_number_format`, `clear_auto_number`, `auto_number_seed` into `UpdateExistingAttribute` (append params, defaults keep current behaviour) and into the string branch of `ApplyTypeSpecificUpdates`.
2. String branch:
   - new pattern ≠ current `stringMeta.AutoNumberFormat` → set it, `changes.Add($"AutoNumberFormat: \"{old}\" -> \"{new}\"")`, `structuredChanges["autoNumberFormat"] = new UpdateAttributeChange { OldValue = old ?? "", NewValue = new }`.
   - `clear_auto_number == true` and current non-empty → set `AutoNumberFormat = ""` (verify on a real org that an empty string clears it; if Dataverse ignores empty string, try `null` is NOT sent by SDK — then fall back to Web API PUT with `"AutoNumberFormat": ""` via `DataverseWebApiMutationExecutor`, mirroring the existing RequiredLevel workaround). Record the change with NewValue `""`.
3. Seed is NOT a metadata change:
   - Track separately (e.g. `bool seedRequested`). Add to DryRun planned parts (`"set autonumber seed 10000"`) and to `structuredChanges["autoNumberSeed"]` with `OldValue = ""` (or the current seed if you implement the optional `GetAutoNumberSeedRequest` lookup) and `NewValue = seed`.
   - Execute it **after** `UpdateAttributeRequest` + publish (the format must exist first) using `DataverseMutationExecutor`.
   - Update the guard `if (changes.Count == 0 && optionResults.Count == 0)` so a **seed-only** update is valid (no `UpdateAttributeRequest`, no publish needed). Today a seed-only call would wrongly return "No changes specified".
   - The existing DryRun condition `changes.Count > 0 || hasOptionRequests` must also include `seedRequested`.
4. Extend the hint of the "No changes specified" error to list `auto_number_format, clear_auto_number, auto_number_seed (string)` — this is the only intended error-text change.

### ✅ 3.5 `get_tables` read support (needed so autonumber columns can be inspected and cloned)

- `Models/TableAttributeEntry.cs`: add
  ```csharp
  [JsonPropertyName("autoNumberFormat")]
  [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
  public string AutoNumberFormat { get; set; }
  ```
- `GetTablesTool.PopulateAttributeDetails`, `case StringAttributeMetadata str:` → `entry.AutoNumberFormat = string.IsNullOrEmpty(str.AutoNumberFormat) ? null : str.AutoNumberFormat;`
- Check `Helper/CompactFormatter.cs` and `Helper/MarkdownFormatter.cs` for per-attribute rendering of string details and append the pattern where `format`/`maxLength` are rendered (additive only).
- Make sure the attribute retrieval in get_tables actually returns `AutoNumberFormat` (it is on `AttributeMetadata`; if a `ColumnSet`/property list is used for metadata queries, add `AutoNumberFormat`).
- Optional: not the seed (requires an extra `GetNextAutoNumberValue` request per column — too expensive for listing).

### ✅ 3.6 Tool description + docs

- `manage_column` `[Description]`:
  - Add a short "Autonumber (string only)" bullet: pattern placeholders `{SEQNUM:n}`, `{RANDSTRING:1-6}`, `{DATETIMEUTC:fmt}`; format must be Text; seed via `auto_number_seed` (environment-only, not in solutions); remove via `clear_auto_number=true`; set the form control read-only.
  - Add to WHEN TO USE: "Create/convert a string column to Autonumber or change its pattern/seed".
  - Keep all other text unchanged.
- Parameter `[Description]`s for the 3 new params (mention CREATE/UPDATE behaviour, omit = keep).
- `InstructionResources.cs` `docs://schema_tools_guide` → `## manage_column`: add `auto_number_format`, `auto_number_seed` to the string row of the type matrix and a new `### Autonumber (string)` subsection with the placeholder table, Text-only rule, MaxLength advice, seed caveat, examples.
- Optional: add `DynamicsCrm.DevKit.Docs/testcall/NN.manage_column.md` following `testcall/format-template.md` with autonumber scenarios — **not done (optional item); deliberately left to the testcall review flow.**

No changes needed in `McpServerHost.cs` (no new tool type; `DisabledToolSet` / `ToolResourceMap` / `CategoryLevel` unaffected; tool stays `ReadOnly = false`).

---

## 4. Files to change (checklist)

- [x] ✅ **`DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageColumnTool.cs`** — params, early validation, create/update/seed logic, description.
- [x] ✅ **`DynamicsCrm.DevKit.Cli/Mcp/Tools/Helper/AutoNumberFormatValidator.cs`** — new pure validator.
- [x] ✅ **`DynamicsCrm.DevKit.Cli/Mcp/Tools/Models/TableAttributeEntry.cs`** — `autoNumberFormat`.
- [x] ✅ **`DynamicsCrm.DevKit.Cli/Mcp/Tools/GetTablesTool.cs`** (+ formatters if applicable) — `CompactFormatter.cs` + `MarkdownFormatter.cs` constraint column updated.
- [x] ✅ **`DynamicsCrm.DevKit.Cli/Mcp/Resources/InstructionResources.cs`** — schema guide.
- [x] ✅ **Tests under `DynamicsCrm.DevKit.Cli.UnitTests/Cli/Mcp/ManageColumn/` and `.../Mcp/GetTables/`** — 3 new files, 49 tests (see §5).

Do NOT touch: `ManageColumnResult` JSON keys (reuse `extra`, `changes`, `warnings`), existing error texts (except the documented hint), version `4.44.44.44`.

---

## 5. Tests (MSTest, net10.0, MethodLevel parallel — mark shared-state classes `[DoNotParallelize]`)

Follow existing patterns: `ManageColumnCreateDryRunTests.cs` (DryRun, `new ManageColumnTool(null!, new McpDryRunOptions { DryRun = true }, new McpExecutionContext(true), null!)`), `ManageColumnFakeXrmEasyFullCoverageTests.cs` (`Create_String_RunsEndToEnd`), `FakeMetadataExecutors.cs`, `MetadataOrgService.cs`. Add a fake executor for `SetAutoNumberSeedRequest` if FakeXrmEasy lacks one.

✅ **Validator unit tests — done, `AutoNumberFormatValidatorTests.cs` (20 tests):**
- Valid: `KA-{SEQNUM:4}`, `{SEQNUM:10}`, `CAS-{SEQNUM:6}-{RANDSTRING:6}-{DATETIMEUTC:yyyyMMddhhmmss}`, `QUO-{SEQNUM:3}#{RANDSTRING:3}#{RANDSTRING:5}` (all from Microsoft docs).
- Invalid: `{RANDSTRING:7}`, `{RANDSTRING:0}`, `{SEQNUM:0}`, `{SEQNUM:x}`, `{FOO:3}`, `{SEQNUM:3`, `ABC}`, `{DATETIMEUTC:}`, lower-case `{seqnum:3}`.
- Warning: `INV-{RANDSTRING:6}` (no SEQNUM).
- Estimated length: `KA-{SEQNUM:4}` → 7.

✅ **manage_column tests — done, `ManageColumnAutoNumberTests.cs` (26 tests):**
- CREATE DryRun string + `auto_number_format` → preview contains `AutoNumberFormat`, no Dataverse call.
- CREATE end-to-end → created `StringAttributeMetadata.AutoNumberFormat` equals pattern; `extra.autoNumberFormat` present; `FormatName == Text`.
- CREATE + seed → `SetAutoNumberSeedRequest` executed once with the actual logical name and value; not executed in DryRun.
- CREATE seed failure → result success + warning.
- CREATE errors: non-string type; `format=Email`; invalid pattern; `max_length` too small; seed without format; `clear_auto_number` on create; formula + autonumber.
- UPDATE convert plain text → autonumber: `changes.autoNumberFormat` old "" new pattern; `UpdateAttributeRequest` sent.
- UPDATE change pattern; UPDATE same pattern → no change.
- UPDATE `clear_auto_number=true`.
- UPDATE seed-only → succeeds, no `UpdateAttributeRequest`, `SetAutoNumberSeedRequest` sent (regression for the "No changes specified" guard).
- UPDATE on memo/integer, on Email-format string, seed on non-autonumber column → errors.
- Readonly/blocked mutations (`McpExecutionContext` with mutations blocked) → seed call is blocked like other mutations.

✅ **get_tables tests — done, `GetTablesAutoNumberTests.cs` (3 tests):** string attribute with `AutoNumberFormat` → `autoNumberFormat` in JSON; without (and empty-string) → key absent.

✅ **All §5 scenarios above are covered by the three files above; the only plan deviation is noted in §8.**

---

## 6. Verification (per AGENTS.md — CLI/MCP change)

1. ✅ **`dotnet build DynamicsCrm.DevKit.Cli/DynamicsCrm.DevKit.Cli.csproj`** — 0 errors, 0 warnings.
2. ✅ **Focused tests** — run with
   `dotnet test DynamicsCrm.DevKit.Cli.UnitTests --filter "FullyQualifiedName~ManageColumn|FullyQualifiedName~GetTables|FullyQualifiedName~AutoNumber"`; then the full suite: **4677/4677 pass**.
3. ✅ **Because `DynamicsCrm.DevKit.Cli/Mcp/**` changed: rebuild + reinstall with `DynamicsCrm.DevKit.Scripts/Release.DynamicsCrm.DevKit.Cli.ps1`**, verify `whoami` runtime version, build timestamp, process start time and assembly SHA against the manifest under `Published/<version>/`. (Verified twice: first through a stdio probe of the new binary while this session's client still cached the old tool schema; after the user restarted ZCode, re-verified end-to-end through the real MCP client — `whoami` SHA match plus convert/seed/clear/validation-error calls all passing with the new parameters.)
4. ✅ **`git status` confirms the build-date placeholder (`xxxx.yy.zz HH.mm.ss`) restored** and source version still `4.44.44.44` (all 21 `dateReplacement` files checked).
5. ✅ **Manual smoke test on DEVKITV4 dev org:**
   - ✅ UPDATE-converted `account.all_ticketnumber` with `auto_number_format="TKT-{SEQNUM:5}-{RANDSTRING:3}"`, `auto_number_seed=10000` (the column was first created as plain text, so the convert path was exercised);
   - ✅ `get_tables` shows `autoNumberFormat`;
   - ✅ created a record → value `TKT-10000-L3T`;
   - ✅ `clear_auto_number=true`; verified via `get_tables` and by a new record with an empty value;
   - ✅ §3.4 step 2 confirmed — result recorded in §8.

Do not stage/commit unless the user asks (see `DynamicsCrm.DevKit.AI/workflows/commit.md`).

---

## ✅ 7. Open questions — answered by implementation (defaults kept)

1. ✅ Parameter names `auto_number_format` / `auto_number_seed` / `clear_auto_number` — **used as planned.**
2. ✅ Missing `SEQNUM` → **warning** (as defaulted).
3. ✅ `manage_table` primary-name autonumber — **out of scope**, convert afterwards with `manage_column` UPDATE.

---

## 8. Implementation record (2026-10-04)

Files changed exactly per the §4 checklist, plus these implementation notes:

- `ManageColumnTool.cs`: 3 new public params appended after `can_store_full_image` (signature now 35 params). Early mode-independent validation sits after the behavior check; CREATE cross-parameter checks after the CREATE marker; UPDATE metadata-dependent checks inside `UpdateExistingAttribute` before `ApplyTypeSpecificUpdates`. Private helper `ExecuteAutoNumberSeed` runs `SetAutoNumberSeedRequest` through `DataverseMutationExecutor` wrapped in `MetadataRetryHelper.RetryOnLockContention`, **after an explicit `_context.AssertMutationAllowed`** — the pre-assert matters because the refusal text "Mutation **blocked**: …" contains the substring "lock", which `RetryOnLockContention`'s contention check would otherwise classify as retryable and turn a blocked seed into a warning. `BuildResult` gained an optional `warnings` parameter (summary gains "N warning(s).", same convention as `AppendFormulaCloneWarning`). `DryRunCreatePreview` gained optional `autoNumberFormat`/`autoNumberSeed`/`autoNumberWarnings` (summary shows `AutoNumberFormat: …` / `Would SetAutoNumberSeed=N` / warning count; never executes), and the UPDATE DryRun preview carries the same warnings.
- Validator: `estimatedMinLength` = literal chars (pattern minus placeholders) + Σ SEQNUM n + Σ RANDSTRING n + Σ formatted DATETIMEUTC length. .NET only throws `FormatException` for a format string that is a *single* unknown standard specifier (e.g. `Q`); mixed strings treat unknown letters as literals, so the client-side `ToString` check catches exactly the hard-invalid cases.
- get_tables: `autoNumberFormat` emitted for String attributes only when non-empty (`WhenWritingNull`); kept in standard tier (same tier as `maxLength`/`format`). Compact/Markdown constraint column renders `MaxLen=… AutoNumber=<pattern>`.
- `FakeMetadataExecutors` records `SetAutoNumberSeedRequest` calls (`Seeds`, plus a `FailSeed` switch); `MetadataOrgService` routes that request to the metadata executor.
- Existing reflection-based tests updated for the extended private signatures (`CreateStringAttribute` 11→14 args, `UpdateExistingAttribute` 24→29, `ApplyTypeSpecificUpdates` 14→18, `DryRunCreatePreview` 7→10).

Verification per §6 (final numbers after the round-2 re-check below):

1. `dotnet build` CLI: 0 errors, 0 warnings.
2. Full `DynamicsCrm.DevKit.Cli.UnitTests` run: **4677/4677 pass** (baseline 4628 before this feature; +49 new tests across the three new files: `AutoNumberFormatValidatorTests.cs` 20, `ManageColumnAutoNumberTests.cs` 26, `GetTablesAutoNumberTests.cs` 3).
3. Rebuilt + reinstalled via `Release.DynamicsCrm.DevKit.Cli.ps1`: build `04.10.2026 09:46:43`, manifest SHA `58483451…C8FDA6` == `whoami.devkit.assemblySha256`, fresh process start time confirmed. Date placeholders restored (`Const.cs` verified; all 21 `dateReplacement` files checked).
4. Live smoke test on DEVKITV4 (account table, column `all_ticketnumber`, solution `all_in_one`):
   - plain string → UPDATE with `auto_number_format='TKT-{SEQNUM:5}-{RANDSTRING:3}'` + `auto_number_seed=10000` → changes report `autoNumberFormat ""→pattern` and `autoNumberSeed ""→10000`, published.
   - `get_tables` shows `"autoNumberFormat": "TKT-{SEQNUM:5}-{RANDSTRING:3}"` (absent before the conversion).
   - created a record → `all_ticketnumber = TKT-10000-L3T` (seed honored, not the 1000 default).
   - **§3.4 step 2 confirmation: `AutoNumberFormat = ""` via the SDK `UpdateAttributeRequest` REALLY clears the autonumber.** After `clear_auto_number=true` (published), `get_tables` no longer reports `autoNumberFormat`, and a new record saved with `all_ticketnumber` empty. The Web API PUT fallback described in §3.4 step 2 was therefore NOT needed and NOT implemented.
   - Leftover test artifacts on the dev org (not cleaned): column `account.all_ticketnumber` (now plain Text) and two account records "Autonumber smoke record 1/2".

Round-2 re-check (full plan vs code diff, 2026-10-04): the only §5 gap found was the missing `UPDATE on integer` error test — added (`Update_OnInteger_ReturnsErrorNamingActualType`). Also improved beyond the plan text: CREATE and UPDATE DryRun previews now carry the validator warnings (previously warnings only appeared on the executing call). Both changes went through one more build + full-suite run + release cycle, which is why the §6.3 numbers above reflect build `09:46:43` rather than the first `09:27:50` build.
