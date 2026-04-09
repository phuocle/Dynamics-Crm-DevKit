# Adversarial Review: parse_record_url

> **Tool**: `parse_record_url` | **File**: `ParseRecordUrlTool.cs`
> **Environment**: `DEVKITV4` | **Date**: 2026-04-08
> **Rounds**: 2 | **Total findings**: 2 | **All fixed**: Yes

---

## Round 1

> 2 findings from 17 live tests + static analysis.

### Finding 1 — Maker solution unique name silently placed in RecordId

| Item | Detail |
|------|--------|
| **Severity** | Medium |
| **Category** | A: Silent Failure |
| **Input** | `https://make.powerapps.com/environments/11111111-.../solutions/MyCustomSolution` |
| **Expected** | Output should indicate that `mycustomsolution` is NOT a GUID |
| **Actual** | `RecordId: mycustomsolution` with `Source: make.powerapps.com (solution)` — no indication it's a unique name |
| **Root Cause** | `TryParseMakerPortal`: `MakerSolutionRegex` captures `([^\s/]+)` which accepts any string, then `ToLowerInvariant()` is applied and placed directly in RecordId without GUID validation |
| **AI Impact** | AI agent sees `RecordId: mycustomsolution` and tries to use it as a GUID in `manage_record` or similar calls, causing downstream failures |
| **Fix** | Added `Guid.TryParse` check on the captured solution ID. If not a GUID, Source includes "unique name - not a record GUID" |
| **Test** | `ParseRecordUrl_MakerSolutionUniqueName_IndicatesNotGuid` + `ParseRecordUrl_MakerSolutionGuid_NoUniqueNameNote` in `ParseRecordUrlToolTests.cs` |

### Finding 2 — rundialog URL loses EntityName when ObjectId is absent

| Item | Detail |
|------|--------|
| **Severity** | Medium |
| **Category** | A: Silent Failure |
| **Input** | `https://org.crm.dynamics.com/cs/dialog/rundialog.aspx?DialogId={AAAA1111-...}&EntityName=account` |
| **Expected** | Output should preserve the entity context from `EntityName=account` |
| **Actual** | Falls through to `TryParseRawGuid`, returns `EntityName: (unknown)` with `Source: raw GUID` — loses the entity context entirely |
| **Root Cause** | `TryParseLegacyUrls` rundialog handler only returns a result when BOTH `ObjectId` AND `EntityName` are present. When `ObjectId` is missing, the entire rundialog block is skipped, falling to raw GUID extraction |
| **AI Impact** | AI agent gets `EntityName: (unknown)` even though the URL clearly states `EntityName=account`. Agent then asks the user for entity context that was already available |
| **Fix** | Added fallback: when `ObjectId` is null but `DialogId` is present, return `EntityName: workflow` with `Source: rundialog.aspx (DialogId, targets {entityName})` |
| **Test** | `ParseRecordUrl_RunDialogNoObjectId_ReturnsDialogInfo` + `ParseRecordUrl_RunDialogNoObjectIdNoEntityName_ReturnsDialogIdOnly` + `ParseRecordUrl_RunDialogWithObjectId_StillReturnsObjectId` in `ParseRecordUrlToolTests.cs` |

> **Passed tests**: empty input, null input, whitespace input, random text, raw GUID, GUID with braces, uppercase GUID, main.aspx with etn+id, main.aspx with URL-encoded braces, main.aspx entitylist+viewid, main.aspx id only, main.aspx etn missing (no id), main.aspx with fragment, Web API URL, Web API with query params, maker flow URL, maker flow run URL, maker solution URL (GUID), admin portal URL, workflow/edit.aspx, report viewer, solution/edit.aspx, rundialog with ObjectId, uppercase etn normalization, invalid GUID in id param, etc=1 resolution (live).

---

## Round 2

> 0 new findings — all fixes verified clean.

7 targeted regression and edge-case tests executed:

| Test | Scenario | Result |
|------|----------|--------|
| R2-1 | Solution URL with braces around GUID | PASS — `Guid.TryParse` handles braces natively |
| R2-2 | Solution unique name with special chars (`My_Custom-Solution.2024`) | PASS — correctly identified as unique name |
| R2-3 | rundialog with NO DialogId and NO ObjectId | PASS — falls through to "No GUID found" |
| R2-4 | workflow/edit.aspx with NO id parameter | PASS — graceful "No GUID found" |
| R2-5 | solution/edit.aspx standard URL | PASS — `EntityName: solution` with correct GUID |
| R2-6 | Double-encoded GUID (`%257B`) | PASS — two-layer decoding handles it |
| R2-7 | Hash fragment containing a second GUID | PASS — `ExtractQueryString` truncates at `#` |

---

## Summary

| Round | New Findings | Fixed | Tests Added | Categories Hit |
|-------|-------------|-------|-------------|----------------|
| 1 | 2 | 2 | 5 | A |
| 2 | 0 | 0 | 0 | - |
| **Total** | **2** | **2** | **5** | |

### Exit Reason

> 0 new findings — tool is clean
