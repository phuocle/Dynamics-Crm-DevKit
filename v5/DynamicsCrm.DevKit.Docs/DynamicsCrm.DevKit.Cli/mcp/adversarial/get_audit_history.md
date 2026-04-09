# Adversarial Review: get_audit_history

> **Tool**: `get_audit_history` | **File**: `GetAuditHistoryTool.cs`
> **Environment**: `DEVKITV4` | **Date**: 2026-04-08
> **Rounds**: 2 | **Total findings**: 3 | **All fixed**: Yes

---

## Round 1

> 3 findings from 14 live tests + static analysis.

### Finding 1 — from_date after to_date silently returns 0 results

| Item | Detail |
|------|--------|
| **Severity** | Medium |
| **Category** | A: Silent Failure |
| **Input** | `from_date="2026-04-08", to_date="2026-04-01"` |
| **Expected** | Error: from_date is after to_date |
| **Actual** | Returned 0 results with `timeScope: "2026-04-08 to 2026-04-01"` — no error |
| **Root Cause** | No validation comparing `fromUtc` vs `toUtc` after parsing both dates (line 84-98) |
| **AI Impact** | AI would believe there are genuinely 0 audit entries in that range, when in reality the date range is inverted. AI would report "no changes found" to the user instead of correcting the query |
| **Fix** | Added validation: `if (fromUtc > toUtc) return ErrorResult(...)` after both dates are parsed |
| **Test** | `GetAuditHistories_FromDateAfterToDate_ReturnsError` in `GetAuditHistoriesToolTests.cs` |

### Finding 2 — attribute_name silently ignored in browse mode

| Item | Detail |
|------|--------|
| **Severity** | Medium |
| **Category** | A: Silent Failure |
| **Input** | `entity_name="account", attribute_name="name", minutes_ago=43200` (no record_id) |
| **Expected** | Error explaining attribute_name requires record_id |
| **Actual** | Returned all audit entries for account — attribute_name was silently ignored |
| **Root Cause** | `attribute_name` is only used inside `FormatAuditEntries` (detail mode). In browse mode via `ExecuteBrowseMode`, the parameter is never referenced. No validation rejects it early |
| **AI Impact** | AI would think it filtered audit history to only "name" field changes, but actually received unfiltered results. Downstream analysis would be wrong |
| **Fix** | Added early validation: `if (record_id empty && attribute_name not empty) return ErrorResult(...)` |
| **Test** | `GetAuditHistories_AttributeNameInBrowseMode_ReturnsError` in `GetAuditHistoriesToolTests.cs` |

### Finding 3 — FormatTimeWindow truncates fractional hours/days

| Item | Detail |
|------|--------|
| **Severity** | Low |
| **Category** | E: Output Quality |
| **Input** | `minutes_ago=90` |
| **Expected** | `timeScope: "last 1h 30min"` |
| **Actual** | `timeScope: "last 1h"` (integer division `90/60=1`) |
| **Root Cause** | `FormatTimeWindow` used integer division without handling remainder: `minutesAgo / 60` for hours and `minutesAgo / 1440` for days |
| **AI Impact** | Minor: AI would report a slightly inaccurate time window to the user. Not dangerous but misleading for precise time queries |
| **Fix** | Added remainder calculation: `{hours}h {remainder}min` for fractional hours, `{days}d {remainingHours}h` for fractional days |
| **Test** | `FormatTimeWindow_90_Returns1h30min` and `FormatTimeWindow_1500_Returns1d1h` in `GetAuditHistoriesToolTests.cs` |

> **Passed tests**: invalid operation rejected, negative minutes_ago clamped, negative max_records clamped, max_records over 500 clamped, uppercase ACCOUNT normalized, non-existent entity rejected, GUID with braces accepted, detail mode with operation filter, attribute_name case-insensitive in detail mode, operation with whitespace trimmed, all-zero GUID rejected, user_filter in detail mode, valid from_date/to_date range.

---

## Round 2

> 0 new findings — all fixes verified clean.

Regression tests confirmed:
- Valid `from_date`/`to_date` range works correctly
- `from_date` without `to_date` defaults to now
- `attribute_name` + `record_id` (detail mode) still filters correctly
- `user_filter` in detail mode still works
- `operation` filter in detail mode returns correct filtered results

---

## Summary

| Round | New Findings | Fixed | Tests Added | Categories Hit |
|-------|-------------|-------|-------------|----------------|
| 1 | 3 | 3 | 4 | A, E |
| 2 | 0 | 0 | 0 | - |
| **Total** | **3** | **3** | **4** | |

### Exit Reason

> `0 new findings — tool is clean`
