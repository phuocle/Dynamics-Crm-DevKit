# Adversarial Review: manage_view

> **Tool**: `manage_view` | **File**: `ManageViewTool.cs`
> **Environment**: `DEVKITV4` | **Date**: 2026-04-09
> **Rounds**: 2 | **Total findings**: 3 | **All fixed**: Yes

---

## Round 1

> 3 findings from 13 live tests + static analysis.

### Finding 1 — detail with non-existent view_id returns success instead of error

| Item | Detail |
|------|--------|
| **Severity** | Critical |
| **Category** | A: Silent Failure |
| **Input** | `action="detail", entity_name="account", view_id="11111111-1111-1111-1111-111111111111"` |
| **Expected** | `IsError=true` with error message |
| **Actual** | `IsError=false` (default) — error text returned via `TextResult`, not `ErrorResult` |
| **Root Cause** | `GetViewDetail()` returns error as a plain string `"Error: No view found..."`. `HandleDetail` at line 179 wrapped it in `TextResult()` which does not set `IsError=true`. |
| **AI Impact** | AI agent receives what looks like a successful response containing the text "Error:". It may attempt to parse this as view detail, leading to downstream failures or incorrect assumptions about the view existing. |
| **Fix** | In `HandleDetail`, check if `GetViewDetail()` result starts with `"Error:"` and return via `ErrorResult()` instead of `TextResult()`. Applied to both the `view_id` path and the `view_name` single-match path. |
| **Test** | `Detail_NonExistentViewId_ReturnsIsErrorTrue`, `HandleDetail_ChecksGetViewDetailForErrorPrefix` in `GetViewsToolTests.cs` |

### Finding 2 — include_fetchxml silently ignored when view_name is provided

| Item | Detail |
|------|--------|
| **Severity** | Medium |
| **Category** | A: Silent Failure |
| **Input** | `action="list", entity_name="account", view_name="Active Accounts", include_fetchxml=true` |
| **Expected** | FetchXML and LayoutXML shown for each matching view |
| **Actual** | Only basic columns shown (viewid, name, type, default, active, managed) — no FetchXML/LayoutXML |
| **Root Cause** | `FindViewsByNameContains()` only retrieved `savedqueryid, name, querytype, isdefault, statecode, ismanaged` columns. It did not accept an `includeFetchXml` parameter, so `fetchxml` and `layoutxml` columns were never retrieved. `FormatViewList` → `AppendViewXml` checked `IsNullOrEmpty(fetchXml)` which was always true (column not retrieved), so it silently skipped the XML output. |
| **AI Impact** | AI agent requests view list with XML to inspect the view structure, but receives no XML. It may conclude the views have no FetchXML/LayoutXML, leading to incorrect modifications or unnecessary detail calls. |
| **Fix** | Added `bool includeFetchXml = false` parameter to `FindViewsByNameContains()`. When true, adds `fetchxml` and `layoutxml` to the `ColumnSet`. Updated the call site in `HandleList` to pass the flag. |
| **Test** | `FindViewsByNameContains_HasIncludeFetchXmlParameter` in `GetViewsToolTests.cs` |

### Finding 3 — include_personal silently ignored when view_name is provided

| Item | Detail |
|------|--------|
| **Severity** | Medium |
| **Category** | A: Silent Failure |
| **Input** | `action="list", entity_name="account", view_name="Active Accounts", include_personal=true` |
| **Expected** | Both system views (savedquery) and personal views (userquery) matching the name filter are returned |
| **Actual** | Only system views returned. Output header says "system views" acknowledging the flag, but personal views are never searched. |
| **Root Cause** | `HandleList` with `view_name` only called `FindViewsByNameContains()` which queries `savedquery`. The `includePersonal` flag was only checked in the no-name-filter path (line 155). No equivalent `userquery` search existed for the name-filter path. |
| **AI Impact** | AI agent asks for personal views by name but gets only system views. It may incorrectly conclude that no personal views exist with that name, missing user-created views that could be relevant. |
| **Fix** | Added `FindPersonalViewsByNameContains()` method that queries `userquery` with the same name filter. Updated `HandleList` to call it when `includePersonal=true` and merge results into the output. Auto-detail only triggers when exactly 1 system view matches and 0 personal views match. |
| **Test** | `FindPersonalViewsByNameContains_MethodExists` in `GetViewsToolTests.cs` |

> **Passed tests**: empty action returns error, empty entity_name returns error, invalid action returns clear error, UPPERCASE action normalized correctly, whitespace-padded action/entity normalized, invalid GUID returns error, GUID with braces `{guid}` accepted, non-existent entity returns Dataverse error, query_type=999 returns 0 views (correct), view_name single match auto-details, view_name no match returns 0 views, detail by view_id works, include_personal=true shows all query types, QuickFind detail shows FindColumns.

---

## Round 2

> 0 new findings — all fixes verified clean.

Regression tests performed:
- Basic list (query_type=0) — still returns 10 public views correctly
- Single name match auto-detail ("MCP Test View") — still auto-details
- Detail by view_id — still shows full output with FetchXML/LayoutXML/LayoutJSON
- include_fetchxml=true with view_name single match — now auto-details with full XML (Finding 2 fix verified)
- Different entity (contact, query_type=4) — works correctly
- All 3 fixed findings re-tested via live MCP — all pass

---

## Summary

| Round | New Findings | Fixed | Tests Added | Categories Hit |
|-------|-------------|-------|-------------|----------------|
| 1 | 3 | 3 | 4 | A |
| 2 | 0 | 0 | 0 | - |
| **Total** | **3** | **3** | **4** | |

### Exit Reason

> `0 new findings — tool is clean`
