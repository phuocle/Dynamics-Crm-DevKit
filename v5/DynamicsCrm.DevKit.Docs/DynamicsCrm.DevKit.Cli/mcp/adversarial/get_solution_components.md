# Adversarial Review: get_solution_components

> **Tool**: `get_solution_components` | **File**: `GetSolutionComponentsTool.cs`
> **Environment**: `DEVKITV4` | **Date**: 2026-04-08
> **Rounds**: 2 | **Total findings**: 4 | **All fixed**: Yes

---

## Round 1

> 4 findings from 14 live tests + static analysis.

### Finding 1 — Missing ComponentTypeNames for 9 modern component types

| Item | Detail |
|------|--------|
| **Severity** | Medium |
| **Category** | A: Silent Failure |
| **Input** | `solution_name="devkitv4"` |
| **Expected** | Modern component types (181, 10032, 10036, 10037, 10038, 10039, 10088, 10091, 10326) should display meaningful names |
| **Actual** | Displayed as `Type_181`, `Type_10032`, `Type_10036`, etc. — no human-readable name |
| **Root Cause** | `ComponentTypeNames` dictionary (lines 22-105) only covered types up to 432. Modern Dataverse types in the 10000+ range were missing |
| **AI Impact** | AI agent cannot identify what these components are. "Type_10326" is meaningless — the AI cannot make decisions about App Actions, Custom APIs, or Plugin Packages |
| **Fix** | Added 9 entries to `ComponentTypeNames`: 181 (SDK Message Pair), 10032 (Managed Identity), 10036 (Custom API), 10037 (Custom API Request Parameter), 10038 (Custom API Response Property), 10039 (Plugin Package), 10088 (App Element), 10091 (App Setting), 10326 (App Action) |
| **Test** | `GetTypeName_181_ReturnsSdkMessagePair` through `GetTypeName_10326_ReturnsAppAction` (9 tests) in `GetSolutionComponentsToolTests.cs` |

### Finding 2 — Missing ComponentApiNames for same 9 modern types

| Item | Detail |
|------|--------|
| **Severity** | Medium |
| **Category** | A: Silent Failure |
| **Input** | `solution_name="devkitv4"`, `include_active_layers=true` |
| **Expected** | Active layer check should use correct API names for modern component types |
| **Actual** | `GetComponentApiName()` fell back to removing spaces from display names (which don't exist for these types), returning the typeId as a string instead |
| **Root Cause** | `ComponentApiNames` dictionary (lines 631-716) was missing the same 9 modern types |
| **AI Impact** | Active layer checks for modern components would silently fail to match any `msdyn_componentlayer` records, always reporting "No" for active layers even when unmanaged customizations exist |
| **Fix** | Added 9 entries to `ComponentApiNames`: 181 (SdkMessagePair), 10032 (ManagedIdentity), 10036 (CustomApi), 10037 (CustomApiRequestParameter), 10038 (CustomApiResponseProperty), 10039 (PluginPackage), 10088 (AppElement), 10091 (AppSetting), 10326 (AppAction) |
| **Test** | `GetComponentApiName_181_ReturnsSdkMessagePair` through `GetComponentApiName_10326_ReturnsAppAction` (5 tests) in `GetSolutionComponentsToolTests.cs` |

### Finding 3 — Canvas App (type 300) missing name resolution

| Item | Detail |
|------|--------|
| **Severity** | Low |
| **Category** | E: Output Quality |
| **Input** | `solution_name="devkitv4"` |
| **Expected** | Canvas App component should resolve to its display name |
| **Actual** | Canvas App showed as `(unresolved)` — GUID visible but no name |
| **Root Cause** | `BuildNameMap()` had no `BatchResolve` call for type 300 (`canvasapp` entity) |
| **AI Impact** | AI agent sees only a GUID for canvas apps, cannot identify which app it is without making a separate query |
| **Fix** | Added `BatchResolve(byType, nameMap, 300, "canvasapp", "canvasappid", ...)` to resolve canvas app names |
| **Test** | `GetTypeName_CanvasApp_ReturnsCanvasApp` in `GetSolutionComponentsToolTests.cs` |

### Finding 4 — Multiple modern entity-backed types missing name resolution

| Item | Detail |
|------|--------|
| **Severity** | Low |
| **Category** | E: Output Quality |
| **Input** | `solution_name="devkitv4"` |
| **Expected** | Custom APIs, Plugin Packages, App Actions, Environment Variable Values, and Managed Identities should resolve to their names |
| **Actual** | All showed as `(unresolved)` — only GUIDs visible |
| **Root Cause** | `BuildNameMap()` had no `BatchResolve` calls for types 381 (environmentvariablevalue), 10032 (managedidentity), 10036 (customapi), 10037 (customapirequestparameter), 10038 (customapiresponseproperty), 10039 (pluginpackage), 10326 (appaction) |
| **AI Impact** | AI agent cannot identify these components by name, must make separate queries to resolve GUIDs |
| **Fix** | Added 7 `BatchResolve` calls for types 381, 300, 10032, 10036, 10037, 10038, 10039, 10326 |
| **Test** | Live re-test verified all types now resolve correctly (e.g., `v4_CustomApi`, `v4_Dev.DevKit.Package v1.0.0`, `NewCommand!...`) |

> **Passed tests**: empty input returns error, whitespace-only returns error, nonexistent solution returns error, case-insensitive matching (devkitv4 vs DEVKITV4), whitespace trimming, SQL wildcard escaping (% and _), fuzzy match with multiple results, display name matching (DEVKIT-MCP), exact-match priority, active layers basic flow, active_layers_only filter.

---

## Round 2

> 0 new findings — all fixes verified clean.

Regression tests confirmed:
- TestExistingReports: reports still resolve correctly
- TestAddCrmPluginRegistration: plugin assemblies and steps still resolve
- DEVKITMCP: display name matching and entity/workflow resolution still work
- TEMP: now correctly shows "Managed Identity" instead of "Type_10032"
- Active layers: still functional with new code

---

## Summary

| Round | New Findings | Fixed | Tests Added | Categories Hit |
|-------|-------------|-------|-------------|----------------|
| 1 | 4 | 4 | 26 | A, E |
| 2 | 0 | 0 | 0 | - |
| **Total** | **4** | **4** | **26** | |

### Exit Reason

> `0 new findings — tool is clean`
