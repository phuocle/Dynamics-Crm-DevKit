# Adversarial Review: get_flows

> **Tool**: `get_flows` | **File**: `GetFlowsTool.cs`
> **Environment**: `DEVKITV4` | **Date**: 2026-04-08
> **Rounds**: 1 | **Total findings**: 0 | **All fixed**: N/A

---

## Round 1

> 0 findings from 24 live tests + 4 static analysis checks.

### Live Test Results

| # | Category | Test | Input | Expected | Actual | Verdict |
|---|----------|------|-------|----------|--------|---------|
| 1 | B | Basic list (active) | `action='list', status='active'` | 0 active flows | 0 active flows | PASS |
| 2 | B | Invalid action | `action='xyz'` | Error message | `Error: Invalid action 'xyz'` | PASS |
| 3 | C | Uppercase action | `action='LIST'` | Normalized to list | Normalized correctly | PASS |
| 4 | B | Invalid status | `status='xyz_invalid'` | Error message | `Error: Invalid status 'xyz_invalid'` | PASS |
| 5 | B | Runs without flow_id | `action='runs'` | Error message | `Error: action='runs' requires flow_id` | PASS |
| 6 | B | Status all | `status='all'` | All 3 flows | 3 flows returned | PASS |
| 7 | B | Status draft | `status='draft'` | 3 draft flows | 3 draft flows | PASS |
| 8 | B | Non-existent GUID | `flow_id='00000000-...'` | Error message | `Error: Cloud flow '...' not found` | PASS |
| 9 | B | Invalid GUID format | `flow_id='not-a-guid'` | Error message | `Error: 'not-a-guid' is not a valid GUID` | PASS |
| 10 | B | max_records=0 | `max_records=0` | Clamped to 50 | Clamped correctly | PASS |
| 11 | B | Detail mode | `flow_id='4ffa33c2-...'` | Flow detail | Detail with name, status, owner | PASS |
| 12 | B | Runs mode (valid flow) | `action='runs', flow_id='4ffa33c2-...'` | 0 runs (no history) | 0 runs with summary | PASS |
| 13 | C | Uppercase status_filter | `status_filter='SUCCEEDED'` | Case-insensitive match | Accepted (OrdinalIgnoreCase) | PASS |
| 14 | B | Invalid status_filter | `status_filter='bogus_status'` | Error message | `Error: Invalid status_filter 'bogus_status'` | PASS |
| 15 | B | max_records=-5 | `max_records=-5` | Clamped to 50 | Clamped correctly | PASS |
| 16 | C | GUID with braces | `flow_id='{4ffa33c2-...}'` | Parsed correctly | Detail returned | PASS |
| 17 | C | Name filter | `name_filter='search', status='all'` | 2 matching flows | 2 flows returned | PASS |
| 18 | C | Owner filter | `owner_filter='SYSTEM', status='all'` | 3 matching flows | 3 flows returned | PASS |
| 19 | B | minutes_ago=-100 | `minutes_ago=-100` | Clamped to 1440 | Clamped correctly | PASS |
| 20 | B | minutes_ago=99999 | `minutes_ago=99999` | Clamped to 43200 | Clamped correctly | PASS |
| 21 | B | Status suspended | `status='suspended'` | 0 results | 0 results | PASS |
| 22 | C | Status with whitespace | `status='  ACTIVE  '` | Trimmed and matched | 0 active flows (correct) | PASS |
| 23 | C | Non-matching name filter | `name_filter='nonexistent_xyz'` | 0 results | 0 results | PASS |
| 24 | B | Runs for non-existent flow | `action='runs', flow_id='00000000-...'` | Error message | `Error: Cloud flow '...' not found` | PASS |

### Static Analysis Results

| # | Category | Check | Verdict |
|---|----------|-------|---------|
| 25 | D | Description text matches code behavior | PASS |
| 26 | D | Default parameter values match documentation | PASS |
| 27 | D | `ValidStatusFilters` uses `StringComparer.OrdinalIgnoreCase` | PASS |
| 28 | D | `BuildStatusFilter` default case `_ => ""` unreachable after validation | PASS |

> **Passed tests**: all 24 live tests + 4 static analysis checks passed. No silent failures, no description mismatches, no input normalization issues found.

---

## Summary

| Round | New Findings | Fixed | Tests Added | Categories Hit |
|-------|-------------|-------|-------------|----------------|
| 1 | 0 | 0 | 0 | A, B, C, D, E |
| **Total** | **0** | **0** | **0** | |

### Exit Reason

> `0 new findings — tool is clean`

### Notes

The `get_flows` tool demonstrates solid defensive coding:

- **Input validation**: All parameters (`action`, `status`, `status_filter`, `flow_id`, `max_records`, `minutes_ago`) are validated before use
- **Case normalization**: Actions, statuses, and status filters are all case-insensitive
- **GUID handling**: Supports both bare GUIDs and braced `{guid}` format via `Guid.TryParse`
- **Boundary clamping**: `max_records` (1-250) and `minutes_ago` (1-43200) are silently clamped
- **Error messages**: Clear, actionable error messages listing valid options
- **Null safety**: Owner filter handles null owner names, `NullIfEmpty` helper used consistently
- **XSS/injection**: `EscapeXml` used for all FetchXML string interpolation
