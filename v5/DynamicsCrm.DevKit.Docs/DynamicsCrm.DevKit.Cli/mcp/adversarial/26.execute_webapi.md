# Adversarial Review: execute_webapi

> **Tool**: `execute_webapi` | **File**: `ExecuteWebApiTool.cs`
> **Environment**: `DEVKITV4` | **Date**: 2026-04-09
> **Rounds**: 2 | **Total findings**: 3 | **All fixed**: Yes

---

## Round 1

> 3 findings from 20 live tests + static analysis.

### Finding 1 — $metadata URL uses SOAP endpoint instead of API endpoint

| Item | Detail |
|------|--------|
| **Severity** | Critical |
| **Category** | A: Silent Failure |
| **Input** | `method="GET", url="$metadata"` |
| **Expected** | HTTP 200 with EDMX metadata XML |
| **Actual** | HTTP 400 Bad Request with empty response body |
| **Root Cause** | `ConnectedOrgUriActual` returns the SOAP URI (`https://org.crm.dynamics.com/XRMServices/2011/Organization.svc/web?SDKClientVersion=...`). The code appended `/api/data/v9.2/$metadata` to this full URI, producing a malformed URL. |
| **AI Impact** | AI agent asking for `$metadata` to discover entity schemas gets a silent 400 with no body. The AI cannot determine entity structures and may proceed with wrong assumptions or give up entirely. |
| **Fix** | Extract `scheme://host` from `ConnectedOrgUriActual` (via `orgUri.Scheme` and `orgUri.Host`) instead of using the full SOAP URI string. |
| **Test** | Live re-test: `$metadata` now returns 200 OK with 6.4MB EDMX XML |

### Finding 2 — Blocked endpoints reference non-existent tool names

| Item | Detail |
|------|--------|
| **Severity** | Medium |
| **Category** | D: Description Mismatch |
| **Input** | `method="PATCH", url="savedqueries(guid)"` or `method="DELETE", url="environmentvariablevalues(guid)"` |
| **Expected** | Error message referencing actual tool names: `manage_view`, `manage_environment_variable` |
| **Actual** | Error message referenced `upsert_view` and `upsert_variable` — tools that do not exist |
| **Root Cause** | `BlockedEndpoints` array used old/incorrect tool names: `"upsert_view"` (should be `"manage_view"`) and `"upsert_variable"` (should be `"manage_environment_variable"`) |
| **AI Impact** | AI agent would try to call `upsert_view` or `upsert_variable`, get a "tool not found" error, and enter a retry loop or give up. The redirect is useless with wrong tool names. |
| **Fix** | Updated `BlockedEndpoints` array: `"upsert_view"` -> `"manage_view"`, `"upsert_variable"` -> `"manage_environment_variable"`. Also updated the reason text to match. |
| **Test** | `GetBlockedReason_PATCH_SavedQueries_RedirectsToManageView`, `GetBlockedReason_DELETE_UserQueries_RedirectsToManageView`, `GetBlockedReason_PATCH_EnvVarDefinitions_RedirectsToManageEnvironmentVariable`, `GetBlockedReason_DELETE_EnvVarValues_RedirectsToManageEnvironmentVariable` in `ExecuteWebApiToolTests.cs` |

### Finding 3 — Description attribute references non-existent tool names

| Item | Detail |
|------|--------|
| **Severity** | Low |
| **Category** | D: Description Mismatch |
| **Input** | N/A (static analysis of `[Description]` attribute text) |
| **Expected** | Description references actual tool names |
| **Actual** | Description text said `"use upsert_view"` and `"use upsert_variable"` |
| **Root Cause** | `[Description]` attribute text on lines 40 and 42 used old tool names matching the `BlockedEndpoints` array |
| **AI Impact** | AI agent reading the tool description to understand blocked operations would be told to use tools that don't exist, causing confusion before even attempting the call. |
| **Fix** | Updated description: `"upsert_view"` -> `"manage_view"`, `"upsert_variable"` -> `"manage_environment_variable"` |
| **Test** | Same as Finding 2 (the redirect messages come from `BlockedEndpoints`, which the description mirrors) |

### Additional fix — Pre-existing ParseHeaders test wrapper broken

The existing `ParseHeaders` unit test wrapper used `Invoke(null, new object[] { headersJson })` but `ParseHeaders` has an `out string error` parameter (2 parameters total). Fixed the wrapper to pass an `out` parameter via reflection args array. This was a pre-existing bug (5 tests were always failing), not caused by Round 1 changes.

> **Passed tests**: lowercase method normalization (`get` -> `GET`), negative max_response_lines reset to 200, whitespace URL trimming, body ignored for GET, nonexistent entity returns clear error, blocked PATCH/DELETE on systemforms/sitemaps, blocked POST on PublishXml/PublishAllXml, case-insensitive blocking, invalid headers JSON returns error, empty headers object returns null, single record GET, HEAD method returns clear error, max_response_lines=0 reset to 200.

---

## Round 2

> 0 new findings — all fixes verified clean.

Regression tests performed:
- `$metadata#accounts` (with fragment) — 200 OK, no regression
- `$metadata` with custom Accept header override — 200 OK, custom headers not applied to `$metadata` path (by design, uses hardcoded `application/xml`)
- Normal `accounts` query — 200 OK, non-`$metadata` path unaffected
- URL containing `$metadata` in query params — correctly NOT routed to special path (uses `StartsWith`)
- `include_headers=true` — still works correctly after changes

---

## Summary

| Round | New Findings | Fixed | Tests Added | Categories Hit |
|-------|-------------|-------|-------------|----------------|
| 1 | 3 | 3 | 5 | A, D |
| 2 | 0 | 0 | 0 | - |
| **Total** | **3** | **3** | **5** | |

### Exit Reason

> `0 new findings — tool is clean`
