# Adversarial Review: whoami

> **Tool**: `whoami` | **File**: `WhoAmITool.cs`
> **Environment**: `DEVKITV4` | **Date**: 2026-04-08
> **Rounds**: 2 | **Total findings**: 3 | **All fixed**: Yes

---

## Round 1

> 3 findings from 3 live MCP tests + static analysis across 5 categories.

### Finding 1 — Unit tests reference non-existent `OrgId` property

| Item | Detail |
|------|--------|
| **Severity** | Medium |
| **Category** | E: Output Quality |
| **Input** | N/A (unit test execution) |
| **Expected** | All 18 unit tests pass |
| **Actual** | 4 tests throw `NullReferenceException` — `SetProperty(r, "OrgId", ...)` fails because `WhoAmIResult` has no `OrgId` property |
| **Root Cause** | `WhoAmIToolTests.cs` lines 187, 209, 228, 247 — `SetProperty` calls `WhoAmIResultType.GetProperty("OrgId")!` which returns null, then `.SetValue()` on null throws |
| **AI Impact** | Broken tests cannot catch regressions. If `BuildCompactText` logic breaks, these 4 tests would not detect it |
| **Fix** | Removed `SetProperty(r, "OrgId", ...)` from all 4 tests — `BuildCompactText` never reads this property |
| **Test** | `BuildCompactText_EmptyOptionals_OmitsFields`, `BuildCompactText_NoRoles_OmitsRolesSection`, `BuildCompactText_WithAccessToken_ShowsToken`, `BuildCompactText_AuditDisabled_ShowsNo` in `WhoAmIToolTests.cs` |

### Finding 2 — Unit test adds strings to `List<RoleInfo>`

| Item | Detail |
|------|--------|
| **Severity** | Medium |
| **Category** | E: Output Quality |
| **Input** | N/A (unit test execution) |
| **Expected** | `BuildCompactText_FullResult_AllSectionsPresent` test passes and validates Roles section |
| **Actual** | Test throws `InvalidCastException` — `roles.Add("System Administrator")` adds a string to `List<RoleInfo>` |
| **Root Cause** | `WhoAmIToolTests.cs` line 153-155 — test casts `Roles` to `IList` and adds raw strings instead of `RoleInfo` objects |
| **AI Impact** | The only test that validates the full Roles output format is broken. Changes to role formatting would go undetected |
| **Fix** | Added `CreateRoleInfo(name, roleId)` helper using reflection to create proper `RoleInfo` objects. Updated test to use `CreateRoleInfo("System Administrator", "role-id-1")` and validate role ID in output |
| **Test** | `BuildCompactText_FullResult_AllSectionsPresent` in `WhoAmIToolTests.cs` |

### Finding 3 — `accessToken` null serialized in JSON when not requested

| Item | Detail |
|------|--------|
| **Severity** | Low |
| **Category** | D: Description Mismatch |
| **Input** | `whoami` with `include_token=false` (default) |
| **Expected** | `accessToken` field absent from structured JSON output when not requested |
| **Actual** | Structured JSON includes `"accessToken": null` — inconsistent with `Warnings` property which uses `JsonIgnoreCondition.WhenWritingNull` |
| **Root Cause** | `StructuredResults.cs` — `AccessToken` property missing `[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]` attribute, unlike the adjacent `Warnings` property |
| **AI Impact** | AI agent sees `"accessToken": null` and may interpret it as a failed token retrieval rather than an intentional omission. Wastes tokens in every default call |
| **Fix** | Added `[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]` to `AccessToken` property in `StructuredResults.cs` |
| **Test** | Live MCP re-test confirmed `accessToken` field is now absent when `include_token=false` |

> **Passed tests**: default whoami call (correct user/org/roles), include_token=true (token returned), include_token=false (token omitted), description accuracy, parameter descriptions, error handling patterns, null URI handling, empty roles handling, warnings format.

---

## Round 2

> 0 new findings — all fixes verified clean.

**Regression checks performed:**

1. `include_token=true` still returns token after `JsonIgnoreCondition.WhenWritingNull` fix — PASS
2. `include_token=false` now omits `accessToken` from JSON — PASS (live MCP verified)
3. `GetBaseUrl` null URI path — PASS (new unit test added)
4. `BuildCompactText` with warnings — PASS (new unit test added)
5. `BuildCompactText` with null warnings — PASS (new unit test added)

**New unit tests added for coverage:**

- `GetBaseUrl_NullUri_ReturnsNull`
- `GetBaseUrl_StandardUrl_ReturnsSchemeAndHost`
- `BuildCompactText_WithWarnings_ShowsWarningsSection`
- `BuildCompactText_NullWarnings_OmitsWarningsSection`

---

## Summary

| Round | New Findings | Fixed | Tests Added | Categories Hit |
|-------|-------------|-------|-------------|----------------|
| 1 | 3 | 3 | 3 (fixed existing) | D, E |
| 2 | 0 | 0 | 4 (new coverage) | - |
| **Total** | **3** | **3** | **7** | |

### Exit Reason

> `0 new findings in Round 2 — tool is clean`
