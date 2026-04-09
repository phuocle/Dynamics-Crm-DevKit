# Adversarial Review: upsert_relationship

> **Tool**: `upsert_relationship` | **File**: `UpsertRelationshipTool.cs`
> **Environment**: `DEVKITV4` | **Date**: 2026-04-09
> **Rounds**: 2 | **Total findings**: 4 | **All fixed**: Yes

---

## Round 1

> 4 findings from 14 live tests + static analysis.

### Finding 1 — Invalid cascade_preset silently defaults to Referential

| Item | Detail |
|------|--------|
| **Severity** | Critical |
| **Category** | A: Silent Failure |
| **Input** | `action="create_1n", cascade_preset="INVALID_PRESET", referenced_entity="account", referencing_entity="contact"` |
| **Expected** | Error message: invalid preset value |
| **Actual** | Silently used Referential cascade (the `default:` case fell through to empty-string behavior) |
| **Root Cause** | `BuildCascadeConfiguration` — the `default:` case in the switch statement was grouped with `case ""` (Referential), so any unrecognized preset silently got Referential defaults |
| **AI Impact** | AI agent sends `cascade_preset="Parental"` with a typo (`"parenta"`), relationship is created with wrong cascade behavior (NoCascade instead of Cascade). Child records are NOT cascade-deleted when parent is deleted — data integrity violation |
| **Fix** | Separated `case "referential":` and `case "":` explicitly, made `default:` throw `ArgumentException` with valid values |
| **Test** | `BuildCascadeConfiguration_InvalidPreset_ThrowsArgumentException` in `UpsertRelationshipToolTests.cs` |

### Finding 2 — Invalid cascade type override silently ignored

| Item | Detail |
|------|--------|
| **Severity** | Critical |
| **Category** | A: Silent Failure |
| **Input** | `action="create_1n", cascade_delete="BOGUS_VALUE", referenced_entity="account", referencing_entity="contact"` |
| **Expected** | Error message: invalid cascade type value |
| **Actual** | `ParseCascadeType` returned `null` for unrecognized values, which meant the override was silently skipped and the preset default was used |
| **Root Cause** | `ParseCascadeType` — the `_ => null` case treated any unrecognized value as "no override requested" (same as empty string) |
| **AI Impact** | AI agent tries to set `cascade_delete="Restrict"` but sends `"restrict"` which works, or sends `"RestrictDelete"` (a plausible wrong value) — the override is silently ignored, and the relationship gets RemoveLink instead of Restrict. Deleting a parent silently removes lookup references instead of blocking the delete |
| **Fix** | Changed `_ => null` to `_ => throw new ArgumentException(...)` with list of valid values. Empty/whitespace still returns `null` (no override) |
| **Test** | `ParseCascadeType_InvalidNonEmpty_ThrowsArgumentException` in `UpsertRelationshipToolTests.cs` |

### Finding 3 — Invalid menu_behavior silently defaults to UseCollectionName

| Item | Detail |
|------|--------|
| **Severity** | Medium |
| **Category** | A: Silent Failure |
| **Input** | `action="create_1n", menu_behavior="BOGUS", referenced_entity="account", referencing_entity="contact"` |
| **Expected** | Error message: invalid menu_behavior value |
| **Actual** | `ParseMenuBehavior` returned `UseCollectionName` for unrecognized values (the `_ => UseCollectionName` case matched any unknown input the same as empty string) |
| **Root Cause** | `ParseMenuBehavior` — missing explicit `"usecollectionname"` case, and `_` defaulted to `UseCollectionName` instead of throwing |
| **AI Impact** | AI agent sends `menu_behavior="DoNotDisplay"` with a typo — the associated menu item appears in the navigation anyway, confusing users who expected it hidden |
| **Fix** | Added explicit `"usecollectionname"` case, changed `_` to throw `ArgumentException` with valid values |
| **Test** | `ParseMenuBehavior_InvalidNonEmpty_ThrowsArgumentException`, `ParseMenuBehavior_UseCollectionName_Explicit_Works` in `UpsertRelationshipToolTests.cs` |

### Finding 4 — Invalid menu_group silently defaults to Details

| Item | Detail |
|------|--------|
| **Severity** | Medium |
| **Category** | A: Silent Failure |
| **Input** | `action="create_1n", menu_group="BOGUS_GROUP", referenced_entity="account", referencing_entity="contact"` |
| **Expected** | Error message: invalid menu_group value |
| **Actual** | `ParseMenuGroup` returned `Details` for unrecognized values (the `_ => Details` case matched any unknown input the same as empty string) |
| **Root Cause** | `ParseMenuGroup` — missing explicit `"details"` case, and `_` defaulted to `Details` instead of throwing |
| **AI Impact** | AI agent sends `menu_group="Sales"` with a typo — the related entity appears under "Details" instead of "Sales" in the navigation, placed in wrong section |
| **Fix** | Added explicit `"details"` case, changed `_` to throw `ArgumentException` with valid values |
| **Test** | `ParseMenuGroup_InvalidNonEmpty_ThrowsArgumentException`, `ParseMenuGroup_Details_Explicit_Works` in `UpsertRelationshipToolTests.cs` |

> **Passed tests**: action case sensitivity (CREATE_1N works), empty action returns error, invalid action returns error, missing required params (6 validation tests: create_1n missing referenced/referencing, create_nn missing entity1/entity2, update/delete missing relationship_name, add/remove_target missing entity_name/attribute_name/referenced_entity), Parental preset creates all-Cascade config, Referential preset creates correct defaults, ReferentialRestrictDelete preset uses Restrict for Delete, individual cascade overrides apply on top of preset, UseLabel/DoNotDisplay menu behaviors parse correctly, Sales/Service/Marketing menu groups parse correctly, empty cascade type returns null (no override).

---

## Round 2

> 0 new findings — all fixes verified clean.

11 targeted regression tests executed:

| # | Test | Result |
|---|------|--------|
| 1 | Action case insensitivity (`CREATE_1N`) | PASS |
| 2 | Update non-existent relationship | PASS — clear error |
| 3 | Delete non-existent relationship | PASS — clear error |
| 4 | Whitespace-padded entity names (`  ACCOUNT  `) | PASS — trimmed and lowered |
| 5 | Non-existent entity (`totally_fake_entity_xyz`) | PASS — Dataverse error propagated |
| 6 | N:N relationship creation | PASS |
| 7 | Empty entity1 for create_nn | PASS — validation error |
| 8 | add_target with non-existent entity (lead) | PASS — Dataverse error propagated |
| 9 | Totally bogus action (`TOTALLY_BOGUS_ACTION`) | PASS — clear error with valid list |
| 10 | Cascade preset + individual override combo | PASS — Referential + Delete=Restrict correctly overrides |
| 11 | remove_target with non-existent lookup | PASS — helpful error with tip |

---

## Summary

| Round | New Findings | Fixed | Tests Added | Categories Hit |
|-------|-------------|-------|-------------|----------------|
| 1 | 4 | 4 | 8 | A |
| 2 | 0 | 0 | 0 | — |
| **Total** | **4** | **4** | **8** | |

### Exit Reason

> `0 new findings in Round 2 — tool is clean`
