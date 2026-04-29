# MCP manage_choice Color Support Plan

## Goal

Update the MCP `manage_choice` tool so global option set options support Dataverse option colors during create and update.

Do not expose option integer values to the user or AI. The tool must calculate option integer values internally exactly as it does today.

This plan intentionally excludes unit test work. The user will test manually.

## Files To Change

- `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageChoiceTool.cs`
- `DynamicsCrm.DevKit.Cli/Mcp/Tools/Helper/CompactFormatter.cs`

Only touch additional files if the implementation cannot compile without doing so.

## Existing Behavior To Preserve

- Tool name remains `manage_choice`.
- Existing actions remain: `list`, `detail`, `create`, `update`.
- Existing parameters remain compatible:
  - `options`
  - `add_options`
  - `update_options`
  - `remove_options`
  - `solution_name`
  - `auto_publish`
- Existing output shape and error style should stay close to current behavior.
- `solution_name` is still required for create and for label-only add options when values must be auto-assigned from the publisher prefix.
- `remove_options` still removes by option display label.
- Publish behavior remains unchanged.

## Option Set Resolution

Resolution applies to `detail` and `update` only. `create` continues to use `optionset_name` directly as the new logical name — there is nothing to resolve.

Resolution order:

1. Search global option sets where display name equals the input after trim (case-insensitive exact match).
   - If exactly 1 match, resolve to that option set's logical name.
2. If display-name resolution does not produce exactly 1 match, search global option sets where logical name equals the input after trim (case-insensitive exact match).
   - If exactly 1 match, resolve to that option set.
3. If no step resolves exactly 1 match:
   - 0 matches: return an error asking the user to provide a valid display name or logical name.
   - Multiple matches: return an ambiguity error with a short candidate list and ask the user to provide the exact logical name.

Do not use contains/fuzzy matching for option set resolution.

Implementation note:

- `RetrieveOptionSetRequest { Name = ... }` can still be used after resolving the final logical name.
- Display-name search requires `RetrieveAllOptionSetsRequest` and in-memory exact filtering.
- When `optionset_name` resolves from display name, include the resolved logical name in the output so the user can see what was updated.

## Option Item Resolution

Option item resolution applies to `A` in `update_options` and labels in `remove_options`.

Rules:

- Resolve only by option display label.
- Use exact equality after trim (case-insensitive).
- If exactly 1 match, use that option.
- If 0 matches, return an error.
- If multiple matches (duplicate labels exist), return an ambiguity error and ask the user to disambiguate manually.

Do not use contains/fuzzy matching for option item resolution.
Do not silently pick the first duplicate display label.

## Color Syntax

### Create: `options`

Support:

```text
Label
Label:Color
```

Examples:

```text
Draft:#808080;Confirmed:#00AA55;Cancelled
```

The tool calculates option integer values internally.

### Update Add: `add_options`

Support the same format as create:

```text
Label
Label:Color
```

Example:

```text
Pending:#FFA500;Archived
```

The tool calculates option integer values internally.

### Update Existing: `update_options`

Use `A:B:C`.

Meaning:

- `A` = current option display label. Required. Resolve by exact display label.
- `B` = new display label. Optional. If present, update the label.
- `C` = new color. Optional. If present, update the color.

Examples:

```text
Draft:Open:
Draft::#FF0000
Draft:Open:#00AA55
```

Behavior:

- `Draft:Open:` updates label only.
- `Draft::#FF0000` updates color only.
- `Draft:Open:#00AA55` updates both label and color.
- `Draft::` has no effective option-item change and should be reported as no-op or skipped.

Labels containing `:` are not supported by this syntax.

## Color Validation

Accept:

- Empty color (means "no color change" or "no color")
- `#RRGGBB`

Reject:

- Missing `#`
- 3-digit shorthand such as `#FFF`
- Non-hex characters
- Any other length

Return a clear error that names the invalid color value.

Do not guess or normalize invalid colors.

## Dataverse Metadata Changes

Use the SDK metadata properties already available in this project.

Create option set:

- Create `OptionMetadata`.
- Set `Label`.
- Set `Value` internally.
- Set `Color` when provided.

Add option:

- Use `InsertOptionValueRequest`.
- Set `Label`.
- Set auto-calculated `Value`.
- Set `Color` when provided.

Update option:

- Resolve `A` to the existing option value internally.
- Use `UpdateOptionValueRequest`.
- Set `Value`.
- Set `Label` only when `B` is present.
- Set `Color` only when `C` is present.
- Preserve `MergeLabels` behavior if currently used/needed.

Remove option:

- Keep current behavior except option item resolution must follow the exact-display-label rule above.

## Detail Output

Update `CompactFormatter.FormatOptionSetDetail` so non-boolean option sets show color.

Current columns:

```text
Value    Label    Description
```

New columns:

```text
Value    Label    Color    Description
```

For options without color, leave the color column empty.

Boolean option set output can remain unchanged unless compilation or consistency requires otherwise.

## User-Facing Output

When changes include colors, include the color in the result text.

Examples:

```text
Added: Pending (#FFA500)
Updated: Draft -> Open (#00AA55)
Updated: Draft color -> #FF0000
```

When `optionset_name` resolves from display name, include the resolved logical name somewhere in the output so the user can see what was updated.

## [Description] Attribute Updates

Update the `[Description]` attributes on the following parameters so AI callers use the correct new format:

- `options`: note `Label` or `Label:#RRGGBB` format, semicolon-separated.
- `add_options`: same as `options`.
- `update_options`: update from `OldLabel:NewLabel` to `A:B:C` format with explanation that B and C are optional.
- Main tool description: reflect that color is now supported in create and update.

## Internal Type Changes

The following internal types must change to carry color alongside value and label:

### `ParseOptionsWithAutoValue`

Current return: `List<(int value, string label)>`
New return: `List<(int value, string label, string color)>`

Used in `HandleCreate` and `HandleUpdate` (add_options path). Update all callers.

### `parsedUpdate` in `HandleUpdate`

Current type: `List<(int value, string newLabel)>`
New type: `List<(int value, string newLabel, string newColor)>`

The lookup at the bottom of the update loop currently does:
```csharp
var (value, _) = parsedUpdate.First(t => t.newLabel == newLabel);
```
This is fragile (breaks for color-only updates where `newLabel` is empty). Replace with lookup by `oldLabel` instead.

### `ParseLabelPairs` (update_options parser)

Currently rejects entries where either part is empty:
```csharp
if (string.IsNullOrEmpty(oldLabel) || string.IsNullOrEmpty(newLabel)) return null;
```
Must be updated to accept `A:B:C` format (3 colon-delimited parts) where B and C may both be empty. An entry where B and C are both empty is valid to parse but is a no-op — skip or report as no-op during execution.

### `ParseOptions` (value:label format)

This method is no longer needed once `add_options` no longer accepts `value:label` pairs (plan says "Do not expose option integer values to the user or AI"). Mark unused after the migration and remove if safe.

## No Unit Test Work

Do not add, edit, or run unit tests for this task.

Manual testing will be handled by the user.

## Verification

After editing MCP code:

1. Run `/claude-build-cli`.
2. Kill the MCP process so it auto-restarts:

```powershell
Get-Process | Where-Object { $_.CommandLine -like "*devkit*mcp*" } | Stop-Process -Force
```

Do not run `dotnet build` directly.
