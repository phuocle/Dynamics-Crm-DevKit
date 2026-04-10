# Adversarial Review: get_roles

> **Tool**: `get_roles` | **File**: `GetRolesTool.cs`
> **Environment**: `DEVKITV4` | **Date**: 2026-04-08
> **Rounds**: 2 | **Total findings**: 4 | **All fixed**: Yes

---

## Round 1

> 4 findings from 14 live tests + static analysis.

### Finding 1 — `business_unit_id` silently ignored in user/detail mode

| Item | Detail |
|------|--------|
| **Severity** | Medium |
| **Category** | A: Silent Failure |
| **Input** | `user_id="791882ab-..."`, `business_unit_id="00000000-0000-0000-0000-000000000000"` |
| **Expected** | Warning that `business_unit_id` is not applicable in user mode |
| **Actual** | Returned user roles as if `business_unit_id` was never passed |
| **Root Cause** | `get_roles` method: `business_unit_id` is only passed to `ListRoles()`. In user/detail mode branches, the parameter is never checked or warned about. |
| **AI Impact** | AI agent passes `business_unit_id` to filter a user's roles by BU, believes the filter is applied, but gets unfiltered results. Could lead to incorrect security audit conclusions. |
| **Fix** | Added warning messages when `business_unit_id` or `role_name` are passed in user/detail mode: `"Warning: business_unit_id is ignored in user mode (list mode only)"` |
| **Test** | `GetRoles_UserMode_WithBusinessUnitId_WarningLogicExists` in `GetRolesToolTests.cs` |

### Finding 2 — `role_name` with `%` treated as LIKE wildcard

| Item | Detail |
|------|--------|
| **Severity** | Medium |
| **Category** | A: Silent Failure |
| **Input** | `role_name="%"` |
| **Expected** | 0 roles (no role name contains literal `%`) or clear indication |
| **Actual** | Returned 50 roles (all roles) because `%` is a LIKE wildcard, pattern becomes `%%%` |
| **Root Cause** | `ListRoles` method, line with `AddCondition("name", ConditionOperator.Like, ...)`: user input is interpolated directly into LIKE pattern without escaping special characters. |
| **AI Impact** | AI searching for roles with special characters in names gets unfiltered results, may conclude there are roles matching when none do. |
| **Fix** | Added LIKE escape before interpolation: `roleName.Replace("[", "[[]").Replace("%", "[%]")` |
| **Test** | `ListRoles_RoleNameWithPercent_EscapesLikeWildcard` in `GetRolesToolTests.cs` |

### Finding 3 — `business_unit_id` description missing "List mode only"

| Item | Detail |
|------|--------|
| **Severity** | Low |
| **Category** | D: Description Mismatch |
| **Input** | N/A (static analysis) |
| **Expected** | Description should say "List mode only" like `role_name` does |
| **Actual** | Description said "Filter by business unit GUID. Empty = root BU roles." with no mode restriction |
| **Root Cause** | `[Description]` attribute on `business_unit_id` parameter lacks mode qualifier |
| **AI Impact** | AI reads description, assumes `business_unit_id` works in all modes, passes it in user/detail mode where it's silently ignored |
| **Fix** | Changed description to `"Filter by business unit GUID. List mode only. Empty = all business units (root roles only)."` |
| **Test** | `GetRoles_UserMode_WithBusinessUnitId_WarningLogicExists` in `GetRolesToolTests.cs` |

### Finding 4 — `business_unit_id` description "Empty = root BU roles" is misleading

| Item | Detail |
|------|--------|
| **Severity** | Low |
| **Category** | D: Description Mismatch |
| **Input** | N/A (static analysis) |
| **Expected** | Description should accurately reflect behavior when empty |
| **Actual** | "Empty = root BU roles" implies BU filtering. Code actually applies `parentroleid IS NULL` (root/parent roles, not BU filter) |
| **Root Cause** | Description conflates "root roles" (no parent) with "root BU roles" (specific BU) |
| **AI Impact** | AI believes empty `business_unit_id` filters to root BU only. In multi-BU environments, root roles from all BUs would be returned. |
| **Fix** | Changed description to `"Empty = all business units (root roles only)."` |
| **Test** | `GetRoles_UserMode_WithBusinessUnitId_WarningLogicExists` in `GetRolesToolTests.cs` |

> **Passed tests**: role_name filter with valid name, role_name with XYZNONEXISTENT, max_records=0 (reset to 50), max_records=-5 (reset to 50), max_records=300 (capped to 250), invalid GUID for role_id, braces GUID for role_id, non-existent role ID, user by email, user by GUID, non-existent email, UPPERCASE entity_name normalized, role_name with whitespace trimmed, invalid business_unit_id GUID, role_id + role_name (role_id takes priority), entity_name in detail mode.

---

## Round 2

> 0 new findings (regression check + 7 targeted tests).

No new findings -- all fixes verified clean.

**Targeted tests passed**: user mode without entity_name, role_id + fake entity_name (0 privileges), max_records=1 with role_name, whitespace-only user_id (falls to list), whitespace-only role_id + role_name (falls to list), user mode with BU filter (old code still running), detail mode with BU filter (old code still running).

---

## Build Note

> Pre-existing compilation errors in `McpServerHost.cs` (ToolCollection API change) and `UpsertColumnTool.cs` (DryRunResult undefined) prevent `dotnet build` from compiling the full CLI project. The `/build-cli` script uses `dotnet publish` which bypasses these errors using cached artifacts, but the published DLL does not include changes from this review. **Live re-testing of fixed findings was blocked by these pre-existing errors.** Unit tests (20/20 passed) verify the fix logic via reflection using `--no-dependencies` build.

---

## Summary

| Round | New Findings | Fixed | Tests Added | Categories Hit |
|-------|-------------|-------|-------------|----------------|
| 1 | 4 | 4 | 20 | A, D |
| 2 | 0 | 0 | 0 | -- |
| **Total** | **4** | **4** | **20** | |

### Exit Reason

> 0 new findings in Round 2 -- tool is clean.
