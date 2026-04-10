# Adversarial Review: build_sitemap_xml

> **Tool**: `build_sitemap_xml` | **File**: `BuildSiteMapXmlTool.cs`
> **Environment**: `DEVKITV4` | **Date**: 2026-04-10
> **Rounds**: 1 | **Total findings**: 4 | **All fixed**: Yes

---

## Round 1

> 4 findings from live tests + static analysis.

### Finding 1 — Silent Ignorance of Invalid Positions

| Item | Detail |
|------|--------|
| **Severity** | Critical |
| **Category** | A: Silent Failure |
| **Input** | `[{"action":"add_area","label":"Reports","position":" first "}]` (with whitespace) or `position="after:nonexistent"` |
| **Expected** | Should throw an error indicating the target position is invalid or not found. |
| **Actual** | `InsertElement` silently defaulted to `parent.Add()` which appends to the end of the list. |
| **Root Cause** | `InsertElement` lacked whitespace trimming, `StringComparison.OrdinalIgnoreCase` checks failed, and missing `after:<id>` paths fell through to `parent.Add(newElement)` instead of throwing. |
| **AI Impact** | AI could specify a typoed position and believe the item was inserted correctly, leading to hallucinated app structures. |
| **Fix** | Updated `InsertElement` to throw `InvalidOperationException` if position is invalid or `afterId` is not found. |
| **Test** | `InsertElement_InvalidPosition_Throws` and `InsertElement_AfterNonExistentId_Throws` in `BuildSiteMapXmlToolTests.cs` |

### Finding 2 — Malformed Inline SubAreas in AddArea/AddGroup

| Item | Detail |
|------|--------|
| **Severity** | Critical |
| **Category** | A: Silent Failure |
| **Input** | `[{"action":"add_area","label":"R","groups":[{"label":"G","subareas":[{"label":"No Entity Error"}]}]}]` |
| **Expected** | Should reject the subarea because it lacks `entity` or `url`. (Dataverse SiteMap requires one or `default_dashboard`). |
| **Actual** | `BuildSubAreaElement` silently created `<SubArea Id="sa_no_entity_error"/>` without complaining, resulting in corrupt XML. |
| **Root Cause** | Explicit `add_subarea` checked for entity/url, but the inline group parser simply passed elements to `BuildSubAreaElement` unchecked. |
| **AI Impact** | An AI constructing large composite JSONs for `add_area` with missing entity fields would corrupt the SiteMap XML silently. |
| **Fix** | Added strict validation directly into `BuildSubAreaElement` to enforce `entity`, `url`, or `default_dashboard` presence. |
| **Test** | `BuildSubAreaElement_MissingIdentity_Throws` in `BuildSiteMapXmlToolTests.cs` |

### Finding 3 — Corrupt Boolean Injection

| Item | Detail |
|------|--------|
| **Severity** | Medium |
| **Category** | C: Input Normalization |
| **Input** | `[{"action":"update_area","area":"Sales","show_groups":"True"}]` |
| **Expected** | Should normalize to lowercase `true` or reject. |
| **Actual** | Blindly copied the raw string into the XML attribute `ShowGroups="True"`. |
| **Root Cause** | Property updates copied raw AI string values directly to XAttributes. |
| **AI Impact** | AI often capitalizes booleans. Dataverse expects lowercase strings for bools, leading to schema validation failures later. |
| **Fix** | Created `NormalizeBoolProp` to parse AI booleans (`"True"`, `"yes"`, `"1"`) and strictly output `"true"` or `"false"`. |
| **Test** | `NormalizeBoolProp_Variations_ReturnNormalized` in `BuildSiteMapXmlToolTests.cs` |

### Finding 4 — Missing Parameter Trimming

| Item | Detail |
|------|--------|
| **Severity** | Medium |
| **Category** | C: Input Normalization |
| **Input** | `[{"action":"update_subarea","area":"Sales ","group":"Customers","subarea":"sa_account"}]` |
| **Expected** | Should trim the strings so element lookup succeeds. |
| **Actual** | `GetStringProp` didn't trim. The lookup for `"Sales "` failed to match Area `"Sales"`. |
| **Root Cause** | `GetStringProp` returned raw strings. And empty strings `""` were not normalized to `null`. |
| **AI Impact** | Small copy-paste or hallucinated space paddings would cause lookup failures, confusing the AI. |
| **Fix** | Hardened `GetStringProp` to always `.Trim()` and map whitespace-only strings to `null`. |
| **Test** | `GetStringProp_TrimsWhitespace` in `BuildSiteMapXmlToolTests.cs` |

> **Passed tests**: `GetStringProp_EmptyString_ReturnsNull`, `NormalizeBoolProp_Invalid_Throws`, `BuildSubAreaElement_ValidEntity_ReturnsElement`, `InsertElement_First_InsertsCorrectly`.

---

## Summary

| Round | New Findings | Fixed | Tests Added | Categories Hit |
|-------|-------------|-------|-------------|----------------|
| 1 | 4 | 4 | 9 | A, C |
| **Total** | **4** | **4** | **9** | |

### Exit Reason

> 0 new findings after Round 1 fixes — tool is clean.
