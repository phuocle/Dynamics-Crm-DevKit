# Adversarial Review: manage_form

> **Tool**: `manage_form` | **File**: `ManageFormTool.cs`
> **Environment**: `DEVKITV4` | **Date**: 2026-04-09
> **Rounds**: 2 | **Total findings**: 2 | **All fixed**: Yes

---

## Round 1

> 2 findings from 14 live tests + static analysis.

### Finding 1 — detail action with form_id ignores entity_name (silent data leak)

| Item | Detail |
|------|--------|
| **Severity** | Critical |
| **Category** | A: Silent Failure |
| **Input** | `action='detail', entity_name='contact', form_id='38c60f9f-e1db-f011-8406-0022480b95a5'` |
| **Expected** | Error: entity mismatch (form belongs to 'account', not 'contact') |
| **Actual** | Full form detail returned silently for the account form despite entity_name='contact' |
| **Root Cause** | `HandleDetail` with `form_id` called `GetFormDetail(id)` directly, which queried by `formid` only and never checked `entity_name` against the form's `objecttypecode`. Entity validation existed in `HandleUpdate`, `HandleRename`, and `HandleUndo` but was missing from `HandleDetail`. |
| **AI Impact** | An AI agent asking for a contact form detail with a wrong form_id (copy-paste error, confusion between entities) would receive full account form XML and treat it as a contact form, potentially applying wrong fields/sections to the wrong entity. |
| **Fix** | Added `GetFormDetailResult(entityName, formId)` method that retrieves the form, validates `entityName` against `objecttypecode`, and returns `ErrorResult` on mismatch. Extracted formatting into static `FormatFormDetail(Entity, Guid)`. Updated both `HandleDetail` call sites (form_id path and form_name single-match path) to use the new method. |
| **Test** | `GetFormDetailResult_MethodExists_WithEntityNameParameter` in `ManageFormToolTests.cs` |

### Finding 2 — GetFormDetail returns error text as success (no IsError flag)

| Item | Detail |
|------|--------|
| **Severity** | Critical |
| **Category** | A: Silent Failure |
| **Input** | `action='detail', entity_name='account', form_id='00000000-0000-0000-0000-000000000000'` |
| **Expected** | Error result with `IsError=true` |
| **Actual** | Text starting with "Error: No form found..." returned as `TextResult` (IsError=false) |
| **Root Cause** | `GetFormDetail` returned a plain string starting with "Error:". `HandleDetail` wrapped it with `TextResult()` on line 218, not `ErrorResult()`. The AI client would not see the `IsError` flag and might attempt to parse the error text as form content. |
| **AI Impact** | The AI agent receives what looks like a successful response (no error flag). It may try to parse "Error: No form found with ID '...'" as FormXML content, leading to downstream failures or confusion. |
| **Fix** | The new `GetFormDetailResult` method returns `ErrorResult(...)` when the form is not found, setting `IsError=true` properly. The old `GetFormDetail` string-returning method was replaced with `FormatFormDetail` which only handles formatting of a successfully-retrieved entity. |
| **Test** | `FormatFormDetail_MethodExists_AsStaticHelper` in `ManageFormToolTests.cs` |

> **Passed tests**: invalid action rejected, empty action rejected, invalid GUID rejected, GUID with braces accepted, empty form_id/form_name rejected for detail, non-existent entity error, form_name with no match error, form_name with multiple matches returns disambiguation list, form_type=99 rejected, form_type=-1 rejected, form_type=1 rejected, case-insensitive action/entity_name, missing params for rename/update/undo, form_name + form_type filter works correctly.

---

## Round 2

> 0 new findings (regression check + targeted analysis).

No new findings -- all fixes verified clean. Regression tests confirmed:
- `detail` with `form_name` single match still works (auto-detail via `GetFormDetailResult`)
- `detail` with `form_name` exact match on `account` returns correct form
- `list` with `form_name` single match auto-details correctly
- `list` with `form_type` filter works correctly
- Non-existent entity (lead not in environment) returns proper error via catch handler

---

## Summary

| Round | New Findings | Fixed | Tests Added | Categories Hit |
|-------|-------------|-------|-------------|----------------|
| 1 | 2 | 2 | 16 | A |
| 2 | 0 | 0 | 0 | - |
| **Total** | **2** | **2** | **16** | |

### Exit Reason

> `0 new findings in Round 2 -- tool is clean`
