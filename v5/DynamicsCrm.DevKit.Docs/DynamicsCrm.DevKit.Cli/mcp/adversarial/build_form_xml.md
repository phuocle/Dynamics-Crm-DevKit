# Adversarial Review: build_form_xml

> **Tool**: `build_form_xml` | **File**: `BuildFormXmlTool.cs` + `ControlClassId.cs`
> **Environment**: `DEVKITV4` | **Date**: 2026-04-09
> **Rounds**: 2 | **Total findings**: 1 | **All fixed**: Yes

---

## Round 1

> 1 finding from 14 live tests + static analysis.

### Finding 1 — Operations parameter description missing 2 of 10 valid actions

| Item | Detail |
|------|--------|
| **Severity** | Low |
| **Category** | D: Description Mismatch |
| **Input** | Static analysis of `[Description]` attribute on `operations` parameter |
| **Expected** | `Actions:` line should list all 10 supported actions |
| **Actual** | `Actions:` line listed only 8 actions — missing `remove_library` and `remove_event` |
| **Root Cause** | The `Actions:` summary line in the `operations` parameter `[Description]` attribute was truncated at `remove_fields`, omitting the last two actions. The tool description (method-level) correctly listed all 10, and the example lines for `remove_library` and `remove_event` were present — only the summary `Actions:` line was incomplete. |
| **AI Impact** | An AI agent reading the parameter description's `Actions:` line would not know `remove_library` and `remove_event` exist as valid operations. While the examples below hint at them, many AI agents parse the `Actions:` line as the authoritative list. The agent would either not attempt these operations or use workarounds (removing libraries manually from FormXML). |
| **Fix** | Added `'remove_library', 'remove_event'` to the `Actions:` summary line in the `operations` parameter description. |
| **Test** | `OperationsDescription_ListsAllSupportedActions`, `ToolDescription_ListsAllTenOperations` in `BuildFormXMLToolTests.cs` |

> **Passed tests**: empty entity_name, whitespace entity_name, invalid GUID, GUID with braces, empty operations, invalid JSON operations, empty array operations, non-existent entity, non-existent field (with suggestions), add_fields with valid field, add_library + add_event combo, remove_library (nonexistent — graceful), remove_event (nonexistent handler — graceful), UPPERCASE entity_name normalization.

---

## Round 2

> 0 new findings — all fixes verified clean.

5 targeted regression tests confirmed:
- Unknown action error message correctly lists all 10 valid actions (regression check for the fix)
- Multiple operations in a single call (add_library + add_event with onsave) — works correctly
- Invalid event_name (`onclick`) returns clear error listing valid event names
- Mixed-case action name (`ADD_FIELDS`) handled correctly via `ToLowerInvariant()`
- JSON object instead of array returns clear deserialization error
- Non-existent field returns error with suggestion to use `get_tables`

Additional observations from Round 2:
- Control ID deduplication works correctly (duplicate `v4_string` gets ID `v4_string1`)
- Library auto-registration from `add_event` works (adds to `formLibraries` and creates dependency)
- Field-level event targeting (`field:name`) works correctly
- Tab/section lookup is case-insensitive
- Spacer cell generation for `remove_fields` preserves layout

---

## Summary

| Round | New Findings | Fixed | Tests Added | Categories Hit |
|-------|-------------|-------|-------------|----------------|
| 1 | 1 | 1 | 9 | D |
| 2 | 0 | 0 | 0 | - |
| **Total** | **1** | **1** | **9** | |

### Exit Reason

> `0 new findings — tool is clean`
