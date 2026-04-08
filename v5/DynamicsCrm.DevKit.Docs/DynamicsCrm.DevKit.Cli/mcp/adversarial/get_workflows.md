# Adversarial Review: get_workflows

> **Tool**: `get_workflows` | **File**: `GetWorkflowsTool.cs`
> **Environment**: `DEVKITV4` | **Date**: 2026-04-08
> **Rounds**: 2 | **Total findings**: 1 | **All fixed**: Yes

---

## Round 1

> 1 finding from 15 live tests + static analysis.

### Finding 1 — Text output missing Entity column in list mode

| Item | Detail |
|------|--------|
| **Severity** | Low |
| **Category** | E: Output Quality |
| **Input** | `active_only=false, max_records=3` (no entity_name filter) |
| **Expected** | Text table should include an `Entity` column showing which entity each workflow belongs to |
| **Actual** | Text table header was `#, Name, Mode, Triggers, ...` — no Entity column. Workflows from account, contact, adx_invitation were listed without entity identification in the text view |
| **Root Cause** | `FormatResults` method (lines 338-346): header row and data rows omitted `PrimaryEntity` from the tab-separated columns. The structured JSON output had `primaryEntity` per entry, but the text representation did not |
| **AI Impact** | An AI agent reading the text output when querying across all entities cannot determine which entity each workflow targets, leading to potential misattribution of workflows to wrong entities |
| **Fix** | Added `Entity` column to header (`#\tName\tEntity\tMode\t...`) and `{w.PrimaryEntity}` to data rows |
| **Test** | `BuildFetchXml_*` and `MapScope_*` tests in `GetWorkflowsToolTests.cs` cover the helper methods; the fix was in the output formatting layer |

> **Passed tests**: Invalid mode returns error, UPPERCASE mode normalized, GUID with braces parsed, invalid GUID rejected, nonexistent entity rejected, mixed-case entity_name normalized, whitespace-padded entity_name trimmed, name_filter auto-detail with 1 match, name_filter 0 matches returns empty, trigger_field case normalization, trigger_field nonexistent returns 0, detail mode by ID, combined entity+mode+trigger_field filters, active_only=false includes draft workflows, max_records boundary values (0, -5, 999) silently clamped.

---

## Round 2

> 0 new findings — all fixes verified clean.

Regression tests confirmed:
- Entity column appears correctly in list mode output
- Detail mode by ID unaffected (separate code path)
- Auto-detail via name_filter unaffected
- Combined filters (entity+mode+trigger_field) work correctly
- Realtime workflows with stage info display correctly

---

## Summary

| Round | New Findings | Fixed | Tests Added | Categories Hit |
|-------|-------------|-------|-------------|----------------|
| 1 | 1 | 1 | 21 | E |
| 2 | 0 | 0 | 0 | - |
| **Total** | **1** | **1** | **21** | |

### Exit Reason

> `0 new findings — tool is clean`
