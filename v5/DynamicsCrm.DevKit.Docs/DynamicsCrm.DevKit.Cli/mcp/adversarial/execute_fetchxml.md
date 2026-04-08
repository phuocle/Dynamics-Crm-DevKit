# Adversarial Review: execute_fetchxml

> **Tool**: `execute_fetchxml` | **File**: `ExecuteFetchXmlTool.cs`
> **Environment**: `DEVKITV4` | **Date**: 2026-04-08
> **Rounds**: 2 | **Total findings**: 1 | **All fixed**: Yes

---

## Round 1

> 1 finding from 12 live tests + static analysis.

### Finding 1 — Paging cookie double-encoding breaks get_all for large datasets

| Item | Detail |
|------|--------|
| **Severity** | Critical |
| **Category** | A: Silent Failure |
| **Input** | `get_all=true` with dataset > 5000 records (triggers paging to page 2+) |
| **Expected** | Page 2+ queries use correctly encoded paging cookie; all records returned |
| **Actual** | `SecurityElement.Escape(pagingCookie)` double-encodes the cookie because `XDocument.SetAttributeValue` already handles XML attribute encoding internally. Page 2+ sends corrupted `paging-cookie` attribute |
| **Root Cause** | `FetchXmlPagingHelper.ApplyPaging` line 28: `SecurityElement.Escape(pagingCookie)` followed by `fetch.SetAttributeValue("paging-cookie", ...)` — XDocument encodes the already-escaped value again, producing `&amp;lt;cookie...` instead of `&lt;cookie...` |
| **AI Impact** | AI agent using `get_all=true` to retrieve complete datasets (e.g., reporting, counting) would get only the first 5000 records, then either an error or corrupted data on page 2+. The AI would trust incomplete data for downstream decisions |
| **Fix** | Removed `SecurityElement.Escape` call and `using System.Security` import — pass raw cookie to `SetAttributeValue` which handles XML encoding internally |
| **Test** | `ApplyPaging_WithPagingCookie_PreservesCookieExactly` + `ApplyPaging_WithPagingCookie_NotDoubleEncoded` in `FetchXmlPagingHelperTests.cs` |

> **Passed tests**: empty fetchxml returns error, whitespace-only fetchxml returns error, max_records=0 returns error, max_records=-5 returns error, max_records=9999 capped to 5000, invalid XML returns error, non-existent entity returns error, UPPERCASE XML tags rejected by Dataverse, whitespace-padded FetchXML parsed correctly, user-supplied page/count/paging-cookie overwritten correctly, link-entity aliases formatted correctly, null attribute columns handled correctly.

---

## Round 2

> 0 new findings (regression check + targeted analysis).

No new findings — all fixes verified clean.

| # | Test | Verdict |
|---|------|---------|
| R1 | Regression: basic paging (max_records=3) | PASS |
| R2 | Regression: get_all=true returns all 11 records | PASS |
| R3 | Untested: returntotalrecordcount attribute preserved | PASS |
| R4 | Untested: outer join link-entity with aliases | PASS |
| R5 | Untested: singular "record" grammar for 1 result | PASS |

---

## Summary

| Round | New Findings | Fixed | Tests Added | Categories Hit |
|-------|-------------|-------|-------------|----------------|
| 1 | 1 | 1 | 7 | A |
| 2 | 0 | 0 | 0 | — |
| **Total** | **1** | **1** | **7** | |

### Exit Reason

> `0 new findings — tool is clean`
