# Adversarial Review: get_business_rules

> **Tool**: `get_business_rules` | **File**: `GetBusinessRulesTool.cs`
> **Environment**: `DEVKITV4` | **Date**: 2026-04-08
> **Rounds**: 2 | **Total findings**: 1 | **All fixed**: Yes

---

## Round 1

> 1 finding from 20 live tests + static analysis.

### Finding 1 — XAML fallback messages reference non-existent tool `get_record`

| Item | Detail |
|------|--------|
| **Severity** | Low |
| **Category** | D: Description Mismatch |
| **Input** | Any rule_id where XAML has no extractable conditions/actions, or XAML parsing throws |
| **Expected** | Fallback message should reference existing MCP tool `manage_record` |
| **Actual** | Message says `"use get_record with columns 'xaml' to inspect raw"` — `get_record` does not exist |
| **Root Cause** | `ParseXaml` method, lines 355 and 359: hardcoded string references `get_record` instead of `manage_record` |
| **AI Impact** | AI agent follows the instruction and calls `get_record`, which fails. Agent may loop retrying or give up, unable to inspect raw XAML |
| **Fix** | Changed both occurrences of `get_record` to `manage_record(action='read')` |
| **Test** | `ParseXaml_EmptyXaml_ReferencesManageRecord` and `ParseXaml_InvalidXaml_ReferencesManageRecord` in `GetBusinessRulesToolTests.cs` |

> **Passed tests**: invalid status rejected (`xyz`), UPPERCASE status normalized, whitespace-padded status trimmed, draft filter works, detail with valid GUID, detail with braces GUID, zero GUID returns error, invalid GUID rejected, cross-entity mismatch detected, UPPERCASE entity_name normalized, empty entity_name returns error, whitespace-only entity_name returns error, nonexistent entity returns error, max_records=0 defaults to 50, max_records=-5 defaults to 50, max_records=1 limits correctly, max_records=999 capped to 200, FetchXML injection attempt blocked, non-business-rule workflow ID rejected (category check), singular/plural grammar correct.

---

## Round 2

> 0 new findings — all fixes verified clean.

Targeted regression testing (7 live tests):
- Detail mode with `rule_id` + `status` parameter (status correctly ignored in detail mode)
- Complex XAML parsing with 11 actions (msdyn_analysisresult rule)
- LockField action extraction (msdyn_analysiscomponent rule)
- Multiple entity types with business rules (mspcat_catalogsubmissionfiles)
- max_records=200 with active filter combined
- Verified fix didn't introduce regressions in any code path

---

## Summary

| Round | New Findings | Fixed | Tests Added | Categories Hit |
|-------|-------------|-------|-------------|----------------|
| 1 | 1 | 1 | 14 | D |
| 2 | 0 | 0 | 0 | — |
| **Total** | **1** | **1** | **14** | |

### Exit Reason

> `0 new findings in Round 2 — tool is clean`
