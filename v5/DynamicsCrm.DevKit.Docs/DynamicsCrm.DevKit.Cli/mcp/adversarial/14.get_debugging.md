# Adversarial Review: get_debugging

> **Tool**: `get_debugging` | **File**: `GetDebuggingTool.cs`
> **Environment**: `DEVKITV4` | **Date**: 2026-04-08
> **Rounds**: 1 | **Total findings**: 0 | **All fixed**: N/A

---

## Round 1

> 0 findings from 22 live tests + static analysis.

### Live Tests Executed

| # | Category | Test | Input | Expected | Actual | Verdict |
|---|----------|------|-------|----------|--------|---------|
| 1 | B | Invalid status | `status='xyz'` | Error message | Error: 'xyz' is not a valid status | PASS |
| 2 | B | Invalid operation_type | `operation_type='xyz'` | Error message | Error: 'xyz' is not a valid operation_type | PASS |
| 3 | B | Invalid mode | `mode='xyz'` | Error message | Error: Invalid mode 'xyz' | PASS |
| 4 | B | Empty action | `action=''` | Error message | Error: action is required | PASS |
| 5 | B | Missing record_id for trace_detail | `action='trace_detail'` | Error message | Error: record_id is required | PASS |
| 6 | B | Invalid GUID for job_detail | `record_id='not-a-guid'` | Error message | Error: not a valid GUID | PASS |
| 7 | B | Non-existent job | `record_id='00000000-...-000001'` | Error message | Error: System job not found | PASS |
| 8 | C | Uppercase action | `action='TRACES'` | Works (normalized) | 0 traces (correct, normalized to 'traces') | PASS |
| 9 | C | Uppercase mode | `mode='SYNC'` | Works (normalized) | 0 traces (correctly filtered) | PASS |
| 10 | C | Uppercase status | `status='IN_PROGRESS'` | Works (normalized) | 0 jobs (correct) | PASS |
| 11 | A | Negative minutes_ago | `minutes_ago=-5` | Defaults to 1440 | 3 failed jobs (defaulted correctly) | PASS |
| 12 | A | Excessive max_records | `max_records=99999` | Capped to 500 | 3 jobs returned (capped) | PASS |
| 13 | E | Status all output quality | `status='all', minutes_ago=60` | Well-formatted | Correct singular/plural, summary | PASS |
| 14 | B | Invalid correlation_id (jobs) | `correlation_id='not-a-guid'` | Error message | Error: not a valid GUID | PASS |
| 15 | B | Invalid correlation_id (traces) | `correlation_id='not-a-guid'` | Error message | Error: not a valid GUID | PASS |
| 16 | C | Entity name with capital | `entity_name='Account'` | Works (lowercased) | Correct results for account | PASS |
| 17 | B | Non-existent entity | `entity_name='nonexistent_xyz'` | Error message | Error: Entity not found | PASS |
| 18 | E | Real job_detail | `record_id=7dc63998-...` | Full detail with error | Complete detail with stack trace | PASS |
| 19 | C | Action with whitespace | `action=' jobs '` | Works (trimmed) | 0 jobs (correct, trimmed) | PASS |
| 20 | C | GUID with braces | `record_id='{guid}'` | Works | Full job detail returned | PASS |
| 21 | B | Non-existent trace | `record_id='00000000-...'` | Error message | Dataverse fault: Does Not Exist | PASS |
| 22 | C | Lowercase message_name | `message_name='create'` | Works (Dataverse case-insensitive) | 4 traces returned | PASS |

### Static Analysis (Category D)

| # | Check | Result |
|---|-------|--------|
| 1 | `minutes_ago` defaults match description | 60 for traces, 1440 for jobs - PASS |
| 2 | `minutes_ago` max values match description | 1440 for traces, 43200 for jobs - PASS |
| 3 | `max_records` max values match description | 200 for traces, 500 for jobs - PASS |
| 4 | `status` default matches description | 'failed' - PASS |
| 5 | `mode` valid values match description | 'sync'/'async' (also accepts 'synchronous'/'asynchronous') - PASS |
| 6 | `trace_detail` returns complete messageblock + exceptiondetails (no truncation) | No TruncateMessage applied to detail - PASS |
| 7 | `BuildStatusFilter` unreachable default case | Dead code (`_ =>` defaults to failed) but harmless since validation catches invalid values first - PASS |
| 8 | Nested `<filter type='or'>` inside parent `<filter type='and'>` for compound filters | Valid FetchXML structure - PASS |
| 9 | `OperationTypeMap` covers all operation types used in `BuildOperationTypeFilter` | Unmapped types show as `System({value})` - PASS |
| 10 | `StatusCodeMap` covers all status codes used in `BuildStatusFilter` | Unmapped statuses show as integer value - PASS |

> **Passed tests**: All 22 live tests and 10 static analysis checks passed.

---

## Summary

| Round | New Findings | Fixed | Tests Added | Categories Hit |
|-------|-------------|-------|-------------|----------------|
| 1 | 0 | 0 | 0 | A, B, C, D, E |
| **Total** | **0** | **0** | **0** | |

### Exit Reason

> `0 new findings — tool is clean`

### Notes

The `get_debugging` tool demonstrates excellent defensive coding:

- **Input validation**: All parameters validated before use (status, operation_type, mode, correlation_id, record_id)
- **Input normalization**: Action, status, mode all trimmed and lowercased; entity_name lowercased
- **Error messages**: Clear, actionable error messages with valid values listed
- **Edge cases**: Negative numbers default correctly, excessive values capped, null-safe with `??` operators
- **GUID handling**: Accepts with/without braces via `Guid.TryParse`
- **FetchXML construction**: Proper XML escaping via `EscapeXml()`, safe string building
- **Output quality**: Correct singular/plural ("job"/"jobs"), meaningful summary counts, proper time formatting
