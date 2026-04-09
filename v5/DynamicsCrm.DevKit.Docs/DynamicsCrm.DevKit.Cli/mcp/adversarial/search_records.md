# Adversarial Review: search_records

> **Tool**: `search_records` | **File**: `SearchRecordsTool.cs`
> **Environment**: `DEVKITV4` | **Date**: 2026-04-09
> **Rounds**: 2 | **Total findings**: 3 | **All fixed**: Yes

---

## Round 1

> 3 findings from 14 live tests + static analysis.

### Finding 1 — HandleSearchException only checks ex.Message, misses InnerException chain

| Item | Detail |
|------|--------|
| **Severity** | Medium |
| **Category** | B: Error Handling |
| **Input** | Static analysis of `HandleSearchException` method (lines 165-184) |
| **Expected** | Error code detection should check the full exception chain (InnerException, InnerException.InnerException, etc.) |
| **Actual** | Only `ex.Message` was checked via `Contains()`. Dataverse SDK often wraps real errors in nested exceptions |
| **Root Cause** | `HandleSearchException` called `ex.Message.Contains()` for 5 error patterns but never traversed `InnerException` |
| **AI Impact** | If search-not-enabled error code (e.g., `0x80048d0b`) is in an InnerException, the AI gets a generic "Search failed" message instead of the actionable "HOW TO ENABLE" guide. The AI might retry endlessly instead of telling the user to enable search |
| **Fix** | Added `BuildFullExceptionMessage()` helper that walks the full exception chain. `HandleSearchException` now checks the concatenated message from all levels |
| **Test** | `HandleSearchException_ErrorCodeInInnerException_ReturnsEnableGuide`, `HandleSearchException_ErrorCodeInDeepInnerException_ReturnsEnableGuide` in `SearchToolTests.cs` |

### Finding 2 — Generic error fallback loses InnerException details

| Item | Detail |
|------|--------|
| **Severity** | Medium |
| **Category** | B: Error Handling |
| **Input** | `action='search'`, `filter='INVALID_ODATA_FILTER!!!'`, `search_term='test'` |
| **Expected** | Error message includes both outer and inner exception messages for diagnostic context |
| **Actual** | Only `ex.Message` was returned: `"Error: Search failed: Operation returned an invalid status code 'BadRequest'"` — no inner details |
| **Root Cause** | Line 183: `return $"Error: Search failed: {ex.Message}";` — did not include `InnerException.Message` |
| **AI Impact** | AI cannot diagnose API failures. For invalid OData filters, it gets "BadRequest" with no explanation of what's wrong. Other DevKit tools (ManageFormTool, ManageSiteMapTool, ManageViewTool) consistently include InnerException via the `→` pattern |
| **Fix** | Changed fallback to include InnerException: `$"{ex.Message} → {ex.InnerException.Message}"` — consistent with ManageFormTool pattern |
| **Test** | `HandleSearchException_GenericError_IncludesInnerExceptionMessage`, `HandleSearchException_NoInnerException_ShowsMessageOnly` in `SearchToolTests.cs` |

### Finding 3 — Status output shows "0 fields: " with trailing colon when no fields

| Item | Detail |
|------|--------|
| **Severity** | Low |
| **Category** | E: Output Quality |
| **Input** | `action='status'` (with entity that has null/empty `SearchableIndexedFieldInfoMap`) |
| **Expected** | Output: `0 fields` (no trailing colon) |
| **Actual** | Output: `0 fields: ` (trailing colon + space with no field names) |
| **Root Cause** | Line 374 always used `$"{fieldCount} fields: {EscapePipe(fieldNames)}"` regardless of whether fieldNames was empty |
| **AI Impact** | Minor cosmetic issue. AI could misparse the trailing colon as indicating missing data |
| **Fix** | Conditional formatting: `fieldCount > 0 ? $"{fieldCount} fields: {fieldNames}" : "0 fields"` |
| **Test** | `FormatStatusResults_EntityWithZeroFields_ShowsNoTrailingColon` in `SearchToolTests.cs` |

> **Passed tests**: Basic search "Contoso", status action, UPPERCASE action normalization, invalid action error, empty search_term error, top=0 error, top=-5 error, top=999 silent cap, non-existent entity 0 results, multiple entities, UPPERCASE entities normalization, entities with empty entries, 101-char search_term length error, invalid OData filter error.

---

## Round 2

> 0 new findings — all fixes verified clean.

5 targeted regression tests performed:
1. Search with entity filter + OData filter — PASS
2. Search with no-match term — PASS (returned fuzzy results with negative scores, API behavior)
3. Wildcard search `test*` — PASS
4. Exact phrase search `"Contoso Pharmaceuticals"` — PASS
5. Single-character search `a` — PASS (0 results)

---

## Summary

| Round | New Findings | Fixed | Tests Added | Categories Hit |
|-------|-------------|-------|-------------|----------------|
| 1 | 3 | 3 | 8 | B, E |
| 2 | 0 | 0 | 0 | — |
| **Total** | **3** | **3** | **8** | |

### Exit Reason

> `0 new findings — tool is clean`
