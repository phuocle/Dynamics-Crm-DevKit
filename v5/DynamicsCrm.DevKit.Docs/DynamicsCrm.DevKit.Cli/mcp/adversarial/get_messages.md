# Adversarial Review: get_messages

> **Tool**: `get_messages` | **File**: `GetMessagesTool.cs`
> **Environment**: `DEVKITV4` | **Date**: 2026-04-08
> **Rounds**: 2 | **Total findings**: 3 | **All fixed**: Yes

---

## Round 1

> 3 findings from 14 live tests + static analysis.

### Finding 1 — Detail mode misclassifies Custom Actions as standard SDK messages

| Item | Detail |
|------|--------|
| **Severity** | Critical |
| **Category** | A: Silent Failure |
| **Input** | `entity_name="account"`, `message_name="v4_AccountCustomAction"` |
| **Expected** | `isCustomAction: true` (matches list mode which shows it under `customActions`) |
| **Actual** | `isCustomAction: false` — shown as `[SDK Message]` |
| **Root Cause** | `GetMessageDetailAsync` used `FindCustomAction()` which queries `workflow` table with `category=3` to identify Custom Actions. Messages registered via `sdkmessage.categoryname="CustomOperation"` (used by list mode's `MetadataService.GetCustomActionsAsync`) but without a workflow record were misclassified. Additionally, lines 150-151 computed `isCustomAction` from `isreadonly`/`isprivate` but the variable was dead code (never used). Those flags are `false` for ALL messages including Create/Update, so the detection logic was also wrong. |
| **AI Impact** | An AI agent querying detail on a Custom Action would be told it's a standard SDK message. It would then give wrong advice for plugin registration (Custom Actions support custom input/output parameters and different registration patterns than standard messages). |
| **Fix** | Added `categoryname` attribute to `FindSdkMessage` FetchXML query. Used `categoryname == "CustomOperation"` to detect Custom Actions reliably. Removed dead `isreadonly`/`isprivate` detection. Passed `isCustomOperation` flag to `FormatSdkMessageDetail` which now sets `IsCustomAction` correctly and uses `[Custom Action]` or `[SDK Message]` label. |
| **Test** | `FormatSdkMessageDetail_IsCustomOperation_SetsIsCustomActionTrue`, `FormatSdkMessageDetail_NotCustomOperation_SetsIsCustomActionFalse` in `GetMessagesToolTests.cs` |

### Finding 2 — Entity-bound list mode doesn't filter Custom APIs from custom actions

| Item | Detail |
|------|--------|
| **Severity** | Medium |
| **Category** | A: Silent Failure |
| **Input** | `entity_name="account"` (list mode) |
| **Expected** | Custom APIs should be filtered out of the `customActions` list (consistent with `none` scope behavior) |
| **Actual** | Only the `none` scope filtered Custom APIs. Entity-bound scopes included all custom operations regardless of whether they were Custom APIs |
| **Root Cause** | `GetCustomActionNamesAsync` at line 594 had `if (isNone)` guard around the Custom API filtering logic. Same issue in `MessageDiscoveryHelper.GetMessageMarkdownAsync` at line 27. Entity-bound scopes skipped the filter entirely. |
| **AI Impact** | An AI agent listing messages for an entity would see messages that are actually Custom APIs (which should be queried via `get_custom_apis`) mixed into the custom actions list. This could lead to incorrect plugin registration attempts on Custom API messages using the Custom Action workflow pattern. |
| **Fix** | Removed the `if (isNone)` guard in both `GetCustomActionNamesAsync` (GetMessagesTool.cs) and `GetMessageMarkdownAsync` (MessageDiscoveryHelper.cs). Custom API filtering now applies to all scopes. |
| **Test** | Verified via live MCP re-test — account list mode returns consistent results |

### Finding 3 — `entity_name` description doesn't say "Ignored in detail mode"

| Item | Detail |
|------|--------|
| **Severity** | Low |
| **Category** | D: Description Mismatch |
| **Input** | Static analysis of `[Description]` attribute on `entity_name` parameter |
| **Expected** | Description should mention "Ignored in detail mode" (like `include_custom_actions` does) |
| **Actual** | Description said "Entity logical name (lowercase). Use 'none' or empty for global messages. Use get_tables to discover names." with no mention of detail mode behavior |
| **Root Cause** | The `entity_name` parameter in `GetMessageDetailAsync` is accepted but never used — `entityName` variable is not referenced in the method body. The `include_custom_actions` parameter correctly documents "Ignored in detail mode" but `entity_name` was missing this note. |
| **AI Impact** | An AI agent passing `entity_name="account"` with `message_name="Create"` might expect entity-scoped results but receives all supported entities. Minor confusion but no wrong data. |
| **Fix** | Added "Ignored in detail mode." to the `entity_name` parameter `[Description]` attribute. |
| **Test** | `EntityNameParameter_Description_ContainsIgnoredInDetailMode` in `GetMessagesToolTests.cs` |

> **Passed tests**: account list mode, none list mode, Account (uppercase) list mode, fake entity error, Create detail, NonExistentMessage error, whitespace entity_name, global→none, include_custom_actions=false, whitespace message_name trimming, Create (lowercase) case-insensitive match.

---

## Round 2

> 0 new findings — all fixes verified clean.

**Regression tests (5)**:
1. Account list mode — 24 results (23 SDK + 1 Custom Action). No regression.
2. WhoAmI detail — `isCustomAction: false`. Standard SDK message correctly classified.
3. Contact list mode — 21 results (18 SDK + 3 Custom Actions). No regression.
4. Update detail — `isCustomAction: false`. Standard SDK message correctly classified.
5. Whitespace-only message_name — falls through to list mode. Correct behavior.

---

## Summary

| Round | New Findings | Fixed | Tests Added | Categories Hit |
|-------|-------------|-------|-------------|----------------|
| 1 | 3 | 3 | 18 | A, D |
| 2 | 0 | 0 | 0 | - |
| **Total** | **3** | **3** | **18** | |

### Exit Reason

> 0 new findings in Round 2 — tool is clean.

### Files Modified

| File | Changes |
|------|---------|
| `DynamicsCrm.DevKit.Cli\Mcp\Tools\GetMessagesTool.cs` | Added `categoryname` to FetchXML, replaced dead `isCustomAction` detection with `categoryname` check, updated `FormatSdkMessageDetail` signature, fixed entity-bound Custom API filtering, updated `entity_name` description |
| `DynamicsCrm.DevKit.Cli\Mcp\Tools\Helper\MessageDiscoveryHelper.cs` | Fixed entity-bound Custom API filtering (removed `isNone` guard) |
| `DynamicsCrm.DevKit.UnitTests\Cli\Mcp\GetMessagesToolTests.cs` | New file: 18 unit tests covering findings + static helper methods |
