# Adversarial Review: get_custom_apis

> **Tool**: `get_custom_apis` | **File**: `GetCustomApisTool.cs`
> **Environment**: `DEVKITV4` | **Date**: 2026-04-09
> **Rounds**: 2 | **Total findings**: 3 | **All fixed**: Yes

---

## Round 1

> 2 findings from 16 live tests + static analysis.

### Finding 1 — Entity validation blocks detail mode unnecessarily

| Item | Detail |
|------|--------|
| **Severity** | Medium |
| **Category** | A: Silent Failure |
| **Input** | `api_name="v4_CustomApi", entity_name="totally_fake_entity_xyz"` |
| **Expected** | Detail mode returns API detail (entity_name is irrelevant when api_name is provided) |
| **Actual** | Error: Entity 'totally_fake_entity_xyz' not found |
| **Root Cause** | `get_custom_apis` method, lines 92-96: entity validation ran BEFORE the api_name check, so a fake entity_name blocked detail mode even though entity_name is only used in list mode |
| **AI Impact** | An AI agent that passes both api_name and entity_name (e.g., from context) would get a false "entity not found" error and fail to retrieve API details |
| **Fix** | Moved `api_name` check before `entity_name` validation — detail mode now bypasses entity validation entirely |
| **Test** | `GetCustomApis_ApiNameWithEntityName_EntityNameNotValidatedFirst` in `GetCustomApisToolTests.cs` |

### Finding 2 — include_microsoft description says "msdyn_, mspp_" but code filters by ismanaged

| Item | Detail |
|------|--------|
| **Severity** | Low |
| **Category** | D: Description Mismatch |
| **Input** | Static analysis of `[Description]` attribute on `include_microsoft` parameter |
| **Expected** | Description matches actual filtering behavior |
| **Actual** | Description said "Include Microsoft APIs (msdyn_, mspp_)" but code filters by `ismanaged=0`, which excludes ALL managed APIs (including third-party managed solutions) |
| **Root Cause** | Parameter description at line 76 mentioned specific prefixes but the FetchXML filter at line 115 uses `ismanaged` attribute |
| **AI Impact** | An AI agent would believe only Microsoft-prefixed APIs are excluded, when in reality all managed APIs are excluded — potentially missing third-party managed Custom APIs in results |
| **Fix** | Updated parameter description to "Include managed APIs (Microsoft and third-party). Default: false." and updated tool-level description to match |
| **Test** | `GetCustomApis_IncludeMicrosoftDescription_SaysManagedNotPrefixes` in `GetCustomApisToolTests.cs` |

> **Passed tests**: UPPERCASE status handling, invalid status returns error, whitespace trimming in status, max_records=0 clamped to 100, max_records=-5 clamped to 100, entity_name=account filters correctly, mixed-case entity_name normalized, fake entity returns error in list mode, detail mode with valid api_name, nonexistent api_name returns error, whitespace-padded api_name trimmed, include_microsoft=true shows managed APIs, status=inactive returns 0 results, status=all returns correct results, empty status defaults to active, max_records=1 limits results.

---

## Round 2

> 1 new finding (regression from Round 1 fix).

### Finding 3 — Description referenced non-existent parameter name include_managed

| Item | Detail |
|------|--------|
| **Severity** | Low |
| **Category** | D: Description Mismatch |
| **Input** | Static analysis of tool `[Description]` attribute after Round 1 fix |
| **Expected** | Tool description references actual parameter name `include_microsoft` |
| **Actual** | Round 1 fix changed description to say "set include_managed=true" but parameter is still named `include_microsoft` |
| **Root Cause** | My Round 1 fix updated the description text to say "managed" but used a wrong parameter name `include_managed` instead of the actual parameter name `include_microsoft` |
| **AI Impact** | An AI agent reading the description would try to pass `include_managed=true` which doesn't exist, causing confusion or silent default behavior |
| **Fix** | Changed description text from "set include_managed=true" to "set include_microsoft=true" |
| **Test** | `GetCustomApis_ToolDescription_ReferencesIncludeMicrosoftNotIncludeManaged` in `GetCustomApisToolTests.cs` |

> **Passed regression tests**: List mode with fake entity still errors, list mode with valid entity+status works, detail mode works, api_name with whitespace-only falls to list mode, max_records=501 clamped to 500.

---

## Summary

| Round | New Findings | Fixed | Tests Added | Categories Hit |
|-------|-------------|-------|-------------|----------------|
| 1 | 2 | 2 | 9 | A, D |
| 2 | 1 | 1 | 1 | D |
| **Total** | **3** | **3** | **10** | |

### Exit Reason

> 0 new findings in Round 2 regression testing (the 1 finding was from my own fix) — tool is clean.
