# Adversarial Review: get_business_process_flows

> **Tool**: `get_business_process_flows` | **File**: `GetBusinessProcessFlowsTool.cs`
> **Environment**: `DEVKITV4` | **Date**: 2026-04-08
> **Rounds**: 2 | **Total findings**: 2 | **All fixed**: Yes

---

## Round 1

> 2 findings from 12 live tests + static analysis.

### Finding 1 — Empty string status bypasses validation and acts as "all"

| Item | Detail |
|------|--------|
| **Severity** | Critical |
| **Category** | A: Silent Failure |
| **Input** | `status=""` (empty string) |
| **Expected** | Default to "active" behavior (return only activated BPFs) |
| **Actual** | Bypassed validation entirely, no `statecode` filter applied, returned all BPFs (active + draft) |
| **Root Cause** | Line 60: `if (!string.IsNullOrWhiteSpace(status))` skipped validation for empty string. Line 116: `(status ?? "active")` — null-coalescing `??` doesn't trigger for empty string `""`, so `normalizedStatus` became `""`, which matched neither "active" nor "draft", resulting in no statecode filter |
| **AI Impact** | AI passing `status=""` (common when "clearing" a parameter) would silently get all BPFs including drafts, making it believe draft BPFs are active and potentially recommending them for production use |
| **Fix** | Normalize status upfront: `if (string.IsNullOrWhiteSpace(status)) status = "active"; else status = status.Trim().ToLowerInvariant();` — before validation check |
| **Test** | `Status_EmptyString_DoesNotBypassValidation`, `Status_WhitespaceOnly_DefaultsToActive` in `GetBusinessProcessFlowsToolTests.cs` |

### Finding 2 — Redundant normalizedStatus variable causes inconsistency

| Item | Detail |
|------|--------|
| **Severity** | Low |
| **Category** | E: Output Quality |
| **Input** | `status=""` reaching `FormatList` |
| **Expected** | Consistent status label in output header |
| **Actual** | `QueryBpfs` and `FormatList` both had their own `(status ?? "active").Trim().ToLowerInvariant()` normalization — redundant and fragile. `FormatList` produced `" "` (space + empty) as status label |
| **Root Cause** | Three separate normalization points: validation (lines 60-65), `QueryBpfs` (line 116), `FormatList` (line 269). After fix to Finding 1, all downstream code receives pre-normalized status |
| **AI Impact** | Minor — output text had an extra space in the header when status was empty. Would not cause wrong decisions but degrades output quality |
| **Fix** | Removed redundant normalization in `QueryBpfs` (line 116) and `FormatList` (line 269) — both now use the pre-normalized `status` directly |
| **Test** | `Status_Invalid_ReturnsError`, `Status_UpperCase_IsAccepted`, `Status_MixedCase_IsAccepted` in `GetBusinessProcessFlowsToolTests.cs` |

> **Passed tests**: UPPERCASE status accepted, invalid status rejected, invalid GUID rejected, braced GUID accepted, entity_name case-insensitive filtering, exact bpf_name auto-detail, multi-match bpf_name list mode, max_records clamping (0, -5, 999), draft status returns empty, nonexistent entity returns empty, whitespace bpf_name ignored.

---

## Round 2

> 0 new findings — all fixes verified clean.

Regression tests (5 live MCP calls): `status=all`, `entity_name=account`, `bpf_name=AccountBPF` with stages, `bpf_id` detail, `status=draft`. All returned correct results with no regressions.

---

## Summary

| Round | New Findings | Fixed | Tests Added | Categories Hit |
|-------|-------------|-------|-------------|----------------|
| 1 | 2 | 2 | 14 | A, E |
| 2 | 0 | 0 | 0 | - |
| **Total** | **2** | **2** | **14** | |

### Exit Reason

> 0 new findings in Round 2 — tool is clean.
