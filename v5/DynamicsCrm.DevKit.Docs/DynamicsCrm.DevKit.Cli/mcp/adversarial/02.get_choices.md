# Adversarial Review: get_choices

> **Tool**: `get_choices` | **File**: `GetChoicesTool.cs`
> **Environment**: `DEVKITV4` | **Date**: 2026-04-08
> **Rounds**: 2 | **Total findings**: 2 | **All fixed**: Yes

---

## Round 1

> 2 findings from 14 live tests + static analysis.

### Finding 1 — Error responses missing IsError flag

| Item | Detail |
|------|--------|
| **Severity** | Critical |
| **Category** | A: Silent Failure |
| **Input** | `optionset_name: "nonexistent_xyz_test"` |
| **Expected** | MCP response has `isError: true` so AI agents detect the failure |
| **Actual** | Tool returned plain `string`, so MCP framework treated it as success (`isError` absent/false). Error was conveyed only through text starting with `"Error:"` |
| **Root Cause** | `get_choices()` returned `string` instead of `CallToolResult`. The MCP framework auto-wraps strings as successful `TextContentBlock` responses. Other tools (e.g., `get_workflows`, `whoami`) already use `CallToolResult` with `IsError = true` for errors |
| **AI Impact** | AI agent receives an error message but the MCP protocol says it's a success. The agent may trust the text content as valid data, miss the error, or fail to retry. This affects ALL error paths: not-found, invalid input, and service failures |
| **Fix** | Changed return type from `string` to `CallToolResult`. Added `SuccessResult()` and `ErrorResult()` helpers matching the pattern in `GetWorkflowsTool`. All error paths now set `IsError = true` |
| **Test** | `GetChoices_ReturnType_IsCallToolResult`, `GetChoices_InvalidName_ReturnsIsErrorTrue`, `GetChoices_EmptyName_NullServiceClient_ThrowsWrappedAsError` in `GetChoicesToolTests.cs` |

### Finding 2 — Empty Picklist shows no Options section

| Item | Detail |
|------|--------|
| **Severity** | Low |
| **Category** | E: Output Quality |
| **Input** | (static analysis) `OptionSetMetadata` with 0 options |
| **Expected** | Output includes `[Options] 0 total` to explicitly indicate no options exist |
| **Actual** | The `else if` condition `osm.Options?.Count > 0` skipped the entire Options section. Output showed metadata header but no `[Options]` block at all |
| **Root Cause** | `CompactFormatter.FormatOptionSetDetail()` line 88: `else if (optionSet is OptionSetMetadata osm && osm.Options?.Count > 0)` combined type check with count check, so zero-option sets fell through both branches |
| **AI Impact** | AI sees metadata for an option set but no options section — ambiguous whether options are missing from the response or genuinely empty. Could cause the AI to re-query or hallucinate options |
| **Fix** | Split the condition: first check `is OptionSetMetadata`, then branch on `Count > 0` vs else `[Options] 0 total` |
| **Test** | `FormatOptionSetDetail_PicklistWithZeroOptions_Shows0Total`, `FormatOptionSetDetail_PicklistWithOptions_ShowsCorrectCount` in `GetChoicesToolTests.cs` |

> **Passed tests**: empty name returns 150 option sets (A1), case normalization UPPERCASE (A3), whitespace trimming (A4), non-existent name error (B1), XSS payload error (B2), display name error (C1), GUID input error (C2), Picklist detail with options (A5/E2), Boolean detail (A6), tab whitespace trimming (A8).

---

## Round 2

> 0 new findings — all fixes verified clean.

5 targeted regression tests passed:
- R1: List mode (`SuccessResult` wrapper) returns clean format
- R2: Picklist detail (`FormatOptionSetDetail` via `SuccessResult`) works correctly
- R3: Boolean detail (unmodified branch) works correctly
- R4: Trim + lowercase normalization still works after return type change
- R5: Not-found error returns `isError: true` (key fix confirmed)

---

## Summary

| Round | New Findings | Fixed | Tests Added | Categories Hit |
|-------|-------------|-------|-------------|----------------|
| 1 | 2 | 2 | 8 | A, E |
| 2 | 0 | 0 | 0 | - |
| **Total** | **2** | **2** | **8** | |

### Exit Reason

> 0 new findings — tool is clean
