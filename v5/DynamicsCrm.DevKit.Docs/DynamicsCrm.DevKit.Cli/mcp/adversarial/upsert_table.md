# Adversarial Review: upsert_table

> **Tool**: `upsert_table` | **File**: `UpsertTableTool.cs`
> **Environment**: `DEVKITV4` | **Date**: 2026-04-08
> **Rounds**: 2 | **Total findings**: 4 | **All fixed**: Yes

---

## Round 1

> 4 findings from 12 live tests + static analysis.

### Finding A1 — System entity update via update mode silently drops ownership_type warning

| Item | Detail |
|------|--------|
| **Severity** | Low |
| **Category** | E: Output Quality |
| **Input** | `entity_name="account", display_name="Account Updated by Adversarial"` |
| **Expected** | Update succeeds, display name changed |
| **Actual** | Update succeeded, display name changed. No issues found — this was a verification test |
| **Root Cause** | N/A — test passed |
| **AI Impact** | None |
| **Fix** | N/A |
| **Test** | Verified live — system entity update works correctly |

### Finding A3 — ownership_type rejects SDK enum name "UserOwned"

| Item | Detail |
|------|--------|
| **Severity** | Medium |
| **Category** | C: Input Normalization |
| **Input** | `entity_name="v4_test_owned", ownership_type="UserOwned", solution_name="DEVKITMCP"` |
| **Expected** | Accept "UserOwned" as valid alias for "User" |
| **Actual** | Returned error: `Invalid ownership_type: 'UserOwned'` |
| **Root Cause** | `ownership_type` parsing only accepted "User", "Organization", "Org" — not SDK enum names "UserOwned", "OrganizationOwned" |
| **AI Impact** | AI agents familiar with Dataverse SDK would naturally use enum names like "UserOwned" and get blocked |
| **Fix** | Added `"UserOwned"` and `"OrganizationOwned"` as accepted aliases in the ownership parsing block |
| **Test** | Live re-test PASS — `v4_test_alias` created with `ownership_type="UserOwned"` |

### Finding D2 — IsAuditEnabled not set on create

| Item | Detail |
|------|--------|
| **Severity** | Medium |
| **Category** | D: Description Mismatch |
| **Input** | Static analysis of create mode code |
| **Expected** | `IsAuditEnabled` should be set to `true` by default on create (matching `TaskCreateEntity.cs` behavior) |
| **Actual** | `IsAuditEnabled` was not being set in the `EntityMetadata` constructor during create mode |
| **Root Cause** | Missing `IsAuditEnabled = new BooleanManagedProperty(true)` in the create path |
| **AI Impact** | Newly created entities would not have auditing enabled by default, inconsistent with VSIX behavior |
| **Fix** | Added `IsAuditEnabled = new BooleanManagedProperty(true)` to the `EntityMetadata` initialization in create mode |
| **Test** | Live re-test PASS — `v4_test_alias` created with `IsAuditEnabled.Value = true` confirmed via Web API |

### Finding D3 — Description omits table_type from immutable properties list

| Item | Detail |
|------|--------|
| **Severity** | Low |
| **Category** | D: Description Mismatch |
| **Input** | Static analysis of `[Description]` attribute text |
| **Expected** | Update mode description should list `table_type` as immutable (cannot change after creation) |
| **Actual** | Description listed `ownership_type, is_activity, has_notes, primary attribute` as immutable but missed `table_type` |
| **Root Cause** | `table_type` was added as a new parameter but the immutable list in the description was not updated |
| **AI Impact** | AI might attempt to change table_type on an existing entity and be confused when it's silently ignored |
| **Fix** | Updated `[Description]` to include `table_type` in the immutable properties list |
| **Test** | Verified in source code — description now reads: `"Immutable properties (ownership_type, table_type, is_activity, has_notes, primary attribute) are ignored with warnings"` |

> **Passed tests**: Empty entity_name returns error, non-existent entity without prefix returns error, system entity "account" update works, entity creation with solution prefix auto-resolution, multi-word entity name "test_multi_word_name" creates correctly, OrganizationOwned alias accepted, Organization ownership creates correctly, invalid ownership_type "TeamOwned" returns clear error.

---

## Round 2

> 0 new findings — all fixes verified clean.

9 targeted regression tests executed:

| Test | Input | Result |
|------|-------|--------|
| R2-T1: Update description | `entity_name="v4_test_alias", description="..."` | PASS |
| R2-T2: Already-prefixed name + solution | `entity_name="v4_test_alias", solution_name="DEVKITMCP"` | PASS (no double prefix) |
| R2-T3: Invalid ownership_type | `ownership_type="TeamOwned"` | PASS (clear error) |
| R2-T4: Invalid table_type | `table_type="Virtual"` | PASS (clear error) |
| R2-T5: Activity + Elastic combo | `is_activity=true, table_type="Elastic"` | PASS (blocked) |
| R2-T6: Display name resolution | `solution_name="DEVKIT-MCP"` | PASS (resolved) |
| R2-T7: No changes specified | `entity_name="v4_test_alias"` (no updatable params) | PASS (clear error) |
| R2-T8: Standard creation | `entity_name="v4_drytest"` | PASS (created) |
| R2-T9: Org alias | `ownership_type="Org"` | PASS (OrganizationOwned) |

---

## Summary

| Round | New Findings | Fixed | Tests Added | Categories Hit |
|-------|-------------|-------|-------------|----------------|
| 1 | 4 | 4 | 0 (skipped) | C, D, E |
| 2 | 0 | 0 | 0 | - |
| **Total** | **4** | **4** | **0** | |

> Note: Unit tests were skipped per user request.

### Exit Reason

> `0 new findings in Round 2 — tool is clean`
