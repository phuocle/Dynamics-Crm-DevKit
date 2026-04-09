# Adversarial Review: get_dataverse_commands

> **Tool**: `get_dataverse_commands` | **File**: `GetDataverseCommandsTool.cs`
> **Environment**: `DEVKITV4` | **Date**: 2026-04-09
> **Rounds**: 2 | **Total findings**: 1 | **All fixed**: Yes

---

## Round 1

> 1 finding from 16 live tests + static analysis.

### Finding 1 — LocationFilterMap missing global_header and dashboard

| Item | Detail |
|------|--------|
| **Severity** | Medium |
| **Category** | D: Description Mismatch + A: Silent Failure |
| **Input** | `location="global_header"` and `location="dashboard"` |
| **Expected** | Filter commands at those locations (values 5 and 6 exist in LocationMap) |
| **Actual** | Error: "Invalid location 'global_header'. Use 'form', 'main_grid', 'sub_grid', 'associated_grid', or 'quick_form'." |
| **Root Cause** | `LocationFilterMap` (line 66-73) only had 5 entries while `LocationMap` (line 26-35) had 7. Missing `global_header=5` and `dashboard=6`. The description and error message also listed only 5 locations |
| **AI Impact** | An AI seeing `GlobalHeader` or `Dashboard` in output would try to filter by those locations but get rejected. AI would have no way to filter commands at those locations |
| **Fix** | Added `["global_header"] = 5` and `["dashboard"] = 6` to `LocationFilterMap`. Updated `[Description]` and error message to list all 7 locations |
| **Test** | `LocationFilterMap_CoversAllLocationMapValues`, `LocationFilterMap_ContainsGlobalHeader`, `LocationFilterMap_ContainsDashboard` in `GetDataverseCommandsToolTests.cs` |

> **Passed tests**: Invalid location rejected, invalid origin rejected, invalid action_type rejected, invalid GUID rejected, max_records=0 rejected, max_records=-1 rejected, GUID with braces accepted, origin="all" bypasses filter, origin="ALL" case-insensitive, entity_name case-normalized (V4_DEVKITV4 = v4_devkitv4), entity_name whitespace trimmed, nonexistent entity returns empty, nonexistent app_name returns empty, detail mode with include_rules/include_children works, max_records=501 silently capped to 500.

---

## Round 2

> 0 new findings — all fixes verified clean.

Regression tested all 5 original location filters (form, main_grid, sub_grid, associated_grid, quick_form) plus the 2 new ones (global_header, dashboard). Error message confirmed to include all 7 locations. No regressions.

---

## Summary

| Round | New Findings | Fixed | Tests Added | Categories Hit |
|-------|-------------|-------|-------------|----------------|
| 1 | 1 | 1 | 19 | A, D |
| 2 | 0 | 0 | 0 | - |
| **Total** | **1** | **1** | **19** | |

### Exit Reason

> `0 new findings — tool is clean`
