# Adversarial Review: get_tables

> **Tool**: `get_tables` | **File**: `GetTablesTool.cs` + `CompactFormatter.cs`
> **Environment**: `DEVKITV4` | **Date**: 2026-04-09
> **Rounds**: 2 | **Total findings**: 3 | **All fixed**: Yes

---

## Round 1

> 3 findings from 12 live tests + static analysis.

### Finding 1 — Whitespace-only filter silently returns 0 attributes in detail mode

| Item | Detail |
|------|--------|
| **Severity** | Medium |
| **Category** | A: Silent Failure |
| **Input** | `entity_name="account", filter="   "` |
| **Expected** | Should show all 164 attributes (treat whitespace as no filter) |
| **Actual** | Returns `[Attributes] 0 (filtered:    *)` — zero attributes shown |
| **Root Cause** | `GetTablesTool.get_tables` passes raw `filter` to `GetEntityDetail`, which uses `string.IsNullOrEmpty(prefixFilter)` in `CompactFormatter.FormatEntityDetail`. Whitespace-only string is not null or empty, so it becomes a prefix filter matching nothing. List mode correctly uses `IsNullOrWhiteSpace`. |
| **AI Impact** | AI agent accidentally passing whitespace filter would conclude the entity has no attributes, leading to incorrect FetchXML construction or wrong metadata conclusions. |
| **Fix** | Normalize filter in `get_tables` method: `var trimmedFilter = string.IsNullOrWhiteSpace(filter) ? "" : filter.Trim();` applied before both detail and list mode calls. |
| **Test** | `GetTables_WhitespaceFilter_TreatedAsNoFilter`, `FormatEntityDetail_EmptyPrefixFilter_ShowsAllAttributes` in `GetTablesToolTests.cs` |

### Finding 2 — Picklist options silently truncated at 10 without indicator

| Item | Detail |
|------|--------|
| **Severity** | Critical |
| **Category** | A: Silent Failure |
| **Input** | `entity_name="account"` (check `industrycode` field — has 33 options) |
| **Expected** | Should indicate that options are truncated when more than 10 exist |
| **Actual** | Shows only first 10 options with no truncation indicator: `Picklist (1=Accounting; 2=Agriculture...; 10=Distributors...)` |
| **Root Cause** | `CompactFormatter.FormatAttributeType` uses `.Take(10)` on all picklist/status/state/multiselect option sets without any indicator that more options exist. |
| **AI Impact** | AI agent would think `industrycode` has only 10 values and build FetchXML with wrong filter conditions, missing 23 valid industry codes. This is the most dangerous finding — the AI gets **wrong data** it trusts completely. |
| **Fix** | New helper method `FormatOptionsWithLimit` that appends `+N more` when options exceed 10. Applied to Picklist, Status, State, and MultiSelect types. |
| **Test** | `FormatOptionsWithLimit_MoreThan10_ShowsTruncationIndicator`, `FormatOptionsWithLimit_Exactly10_NoTruncationIndicator`, `FormatOptionsWithLimit_LessThan10_NoTruncationIndicator` in `GetTablesToolTests.cs` |

### Finding 3 — Relationship count label says "total" even when filtered by prefix

| Item | Detail |
|------|--------|
| **Severity** | Low |
| **Category** | E: Output Quality |
| **Input** | `entity_name="account", filter="v4_"` |
| **Expected** | `[1:N Relationships] 4 (filtered: v4_*)` — matching the attributes section pattern |
| **Actual** | `[1:N Relationships] 4 total` — misleading, suggests 4 is the total count |
| **Root Cause** | `AppendOneToManyRelationships`, `AppendManyToOneRelationships`, and `AppendManyToManyRelationships` in `CompactFormatter.cs` always append `" total"` regardless of prefix filter, unlike `AppendAttributes` which correctly shows `(filtered: prefix*)`. |
| **AI Impact** | AI agent might incorrectly believe the entity has only 4 total 1:N relationships when there are actually 51, leading to incomplete relationship analysis. |
| **Fix** | Changed all three relationship methods to use the same pattern as attributes: `(hasPrefix ? $" (filtered: {prefix}*)" : " total")`. |
| **Test** | `FormatEntityDetail_WithPrefix_RelationshipsShowFilteredLabel`, `FormatEntityDetail_NoPrefix_RelationshipsShowTotalLabel` in `GetTablesToolTests.cs` |

> **Passed tests**: lowercase entity_name, UPPERCASE entity_name, MixedCase entity_name, whitespace-padded entity_name, non-existent entity, display name "Case" (returns error — expected), list mode keyword filter, list mode empty filter, list mode custom_only, include_intersect, prefix filter case-insensitive (TELEPHONE).

---

## Round 2

> 0 new findings — all fixes verified clean.

Static analysis of the 3 fixes found no regressions. 3 live regression tests confirmed:
- Unfiltered detail mode still returns all 164 attributes with "total" label
- List mode with whitespace-padded filter still works (trimmed correctly)
- Default no-parameter call returns all 814 entities

---

## Summary

| Round | New Findings | Fixed | Tests Added | Categories Hit |
|-------|-------------|-------|-------------|----------------|
| 1 | 3 | 3 | 8 | A, E |
| 2 | 0 | 0 | 0 | - |
| **Total** | **3** | **3** | **8** | |

### Exit Reason

> `0 new findings — tool is clean`
