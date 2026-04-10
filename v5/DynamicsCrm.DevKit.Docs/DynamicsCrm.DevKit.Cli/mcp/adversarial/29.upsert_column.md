# Adversarial Review: upsert_column

> **Tool**: `upsert_column` | **File**: `UpsertColumnTool.cs`
> **Environment**: `DEVKITV4` | **Date**: 2026-04-09
> **Rounds**: 2 | **Total findings**: 5 | **All fixed**: Yes

---

## Round 1

> 5 findings from 12 live tests + static analysis.

### Finding 1 — Invalid `behavior` silently defaults to `UserLocal`

| Item | Detail |
|------|--------|
| **Severity** | Critical |
| **Category** | A: Silent Failure |
| **Input** | `entity_name: "account", attribute_name: "new_test_adv_dt", attribute_type: "datetime", behavior: "InvalidBehavior"` |
| **Expected** | Error: invalid behavior value |
| **Actual** | Column created successfully with `UserLocal` behavior — no error |
| **Root Cause** | `ResolveDateTimeBehavior()` used `_ => DateTimeBehavior.UserLocal` catch-all, silently swallowing any unrecognized input |
| **AI Impact** | AI agent passes a typo like `"DateOnl"` or `"UTC"` — column is created with wrong behavior, no indication of error. Downstream queries/views show wrong timezone handling |
| **Fix** | Changed `ResolveDateTimeBehavior` to return `null` + error message on unrecognized input; added `"userlocal"` as explicit valid match; callers now check and propagate the error |
| **Test** | `ResolveDateTimeBehavior_Invalid_ReturnsError`, `UpsertColumn_InvalidDateTimeBehavior_ReturnsError` in `UpsertColumnToolTests.cs` |

### Finding 2 — Invalid `format` on string silently defaults to `Text`

| Item | Detail |
|------|--------|
| **Severity** | Critical |
| **Category** | A: Silent Failure |
| **Input** | `entity_name: "account", attribute_name: "new_test_adversarial3", attribute_type: "string", format: "InvalidFormat"` |
| **Expected** | Error: invalid format value |
| **Actual** | Column created with `Text` format — no error |
| **Root Cause** | `ResolveStringFormat()` used `_ => StringFormatName.Text` catch-all |
| **AI Impact** | AI agent passes `"email"` (correct) vs `"mail"` (typo) — the typo silently creates a plain text field instead of email-validated field |
| **Fix** | Changed `ResolveStringFormat` to use `out string error` pattern; added `"text"` as explicit match; callers check and propagate error |
| **Test** | `ResolveStringFormat_Invalid_ReturnsError`, `UpsertColumn_InvalidStringFormat_ReturnsError` in `UpsertColumnToolTests.cs` |

### Finding 3 — Invalid `format` on integer silently defaults to `None`

| Item | Detail |
|------|--------|
| **Severity** | Critical |
| **Category** | A: Silent Failure |
| **Input** | `entity_name: "account", attribute_name: "new_test_adv_int", attribute_type: "integer", format: "InvalidIntFormat"` |
| **Expected** | Error: invalid format value |
| **Actual** | Column created with `None` format — no error |
| **Root Cause** | `ResolveIntegerFormat()` used `_ => IntegerFormat.None` catch-all |
| **AI Impact** | AI agent passes `"TimeZone"` (correct) vs `"Timezone"` (typo with wrong case) — actually this one is case-insensitive so it would work, but `"TZ"` or `"timezone_offset"` would silently create wrong format |
| **Fix** | Changed `ResolveIntegerFormat` to use `out string error` pattern; added `"none"` as explicit match; returns null + error on unrecognized input |
| **Test** | `ResolveIntegerFormat_Invalid_ReturnsError`, `UpsertColumn_InvalidIntegerFormat_ReturnsError` in `UpsertColumnToolTests.cs` |

### Finding 4 — Invalid `format` on memo silently defaults to `Text`

| Item | Detail |
|------|--------|
| **Severity** | Critical |
| **Category** | A: Silent Failure |
| **Input** | `entity_name: "account", attribute_name: "new_test_memo_inv", attribute_type: "memo", format: "InvalidMemoFormat"` |
| **Expected** | Error: invalid format value |
| **Actual** | Column created with `Text` format — no error |
| **Root Cause** | `ResolveMemoFormat()` used `_ => MemoFormatName.Text` catch-all |
| **AI Impact** | AI agent passes `"rich_text"` or `"RichText "` (trailing space handled by trim, but `"rich text"` with space would silently create plain text instead of rich text) |
| **Fix** | Changed `ResolveMemoFormat` to use `out string error` pattern; added `"text"` as explicit match; returns null + error on unrecognized input |
| **Test** | `ResolveMemoFormat_Invalid_ReturnsError`, `UpsertColumn_InvalidMemoFormat_ReturnsError` in `UpsertColumnToolTests.cs` |

### Finding 5 — `precision` description says "0-10" but money caps at 4

| Item | Detail |
|------|--------|
| **Severity** | Low |
| **Category** | D: Description Mismatch |
| **Input** | N/A (static analysis) |
| **Expected** | Description should mention money-specific precision cap |
| **Actual** | Description says "0-10, default 2" for all numeric types including money |
| **Root Cause** | Parameter `[Description]` text did not differentiate money's max precision (4) from decimal/float's max (10) |
| **AI Impact** | AI agent passes `precision: 8` for a money column expecting 8 decimal places — silently gets capped to 4, no error. Minor since AI can verify from the response, but misleading |
| **Fix** | Updated description to: `"For decimal/money/float: decimal places (0-10, default 2; money max is 4)"` |
| **Test** | `UpsertColumn_DescriptionMentionsMoneyPrecisionCap` in `UpsertColumnToolTests.cs` |

> **Passed tests**: empty entity_name returns error, empty attribute_name returns error, no-prefix attribute name returns error, invalid attribute_type returns error, invalid required_level returns error, UPPERCASE entity_name normalized correctly, picklist without options returns error, lookup without target returns error, invalid JSON for picklist returns error, non-existent entity returns error, update mode with no changes returns error.

---

## Round 2

> 0 new findings — all fixes verified clean. 10 regression tests passed.

No new findings — all fixes verified clean.

| # | Test Case | Result |
|---|-----------|--------|
| 1 | Empty `entity_name` | PASS: clear error |
| 2 | Empty `attribute_name` | PASS: clear error |
| 3 | Empty `display_name` on create | PASS: clear error |
| 4 | Invalid `required_level` | PASS: clear error |
| 5 | Invalid `attribute_type` | PASS: clear error |
| 6 | Lookup without `lookup_target` | PASS: clear error with tip |
| 7 | Picklist with invalid JSON | PASS: clear parse error with tip |
| 8 | Money with precision=10 (capped to 4) | PASS: created with precision 4 |
| 9 | Update existing column + invalid `required_level` | PASS: validation catches before write |
| 10 | Update existing string with invalid `format` | PASS: `[Error] Invalid format: 'BadFormat'` |

---

## Summary

| Round | New Findings | Fixed | Tests Added | Categories Hit |
|-------|-------------|-------|-------------|----------------|
| 1 | 5 | 5 | 41 | A, D |
| 2 | 0 | 0 | 0 | - |
| **Total** | **5** | **5** | **41** | |

### Exit Reason

> `0 new findings in Round 2 — tool is clean`

### Systemic Pattern

All 4 critical findings shared the same root cause: format/behavior resolver methods used `_ => default` catch-all patterns in their switch expressions. This is a common C# pattern for resilience, but it's dangerous for AI agent consumers who may pass typos or hallucinated values. The fix adds explicit validation with clear error messages listing all valid values, following the `out string error` pattern for consistency across all resolvers.
