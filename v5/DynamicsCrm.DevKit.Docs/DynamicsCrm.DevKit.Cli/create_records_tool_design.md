# `create_records` MCP Tool — Design & Research Notes

## Problem

`manage_record` handles 1 record per tool call. Migrating 100–5000 records requires sequential calls — too slow for data migration scenarios.

## Solution

New tool `create_records` using `Parallel.ForEachAsync` + `ServiceClient.CreateAsync` — the official Microsoft-recommended pattern for maximum throughput (2026 docs).

## Why Parallel Single Requests Instead of ExecuteMultiple

Microsoft docs explicitly recommend single requests with high parallelism over `ExecuteMultipleRequest` batching for most scenarios:

> *"Most scenarios are fastest sending single requests with a high degree of parallelism. If you feel batch size might improve performance, start with a small batch size of 10 and increase concurrency until you start getting service protection API limit errors."*

| Aspect | ExecuteMultiple (batch) | Parallel CreateAsync |
|---|---|---|
| Execution time per request | High (1 batch = 1 long request) | Low (individual, fast) |
| Risk of hitting execution time limit (1,200s/300s) | High | Low |
| Retry handling | Manual | Built-in (ServiceClient since v9.0.2.16) |
| Failure isolation | Batch-level (complex per-item handling) | Per-request (natural) |
| Code complexity | 2-level parallelism (threads × batch) | Single level |
| MS recommendation (2026) | Discouraged for most scenarios | Recommended |

## Key Dataverse Limits (Service Protection)

| Measure | Limit | Window |
|---|---|---|
| Requests | 6,000 | 300s (per user, per web server) |
| Execution time | 1,200s (20 min) | 300s (per user, per web server) |
| Concurrent requests | 52+ (default) | Immediate |

## Key Design Decisions

### 1. `RecommendedDegreesOfParallelism` as Default

Not a fixed number. Read from `x-ms-dop-hint` response header — varies by environment (licenses, allocated resources). Typically 4–8 for cloud. Use sentinel value 0 to detect "not provided" and apply server hint.

### 2. Disable Affinity Cookie During Parallel Execution

`ServiceClient.EnableAffinityCookie = false` distributes requests across all web servers in the environment. Each server has its own service protection limits → higher aggregate throughput. Must restore original value in `finally` block.

### 3. Sequential Entity Parsing Before Parallel Execution

`EntityParserHelper.ParseFieldsToEntity` uses a `ConcurrentDictionary` metadata cache. Pre-warm with first item to avoid all threads racing to load metadata simultaneously. Parse all entities sequentially (metadata is cached after first call, parsing is CPU-bound not I/O-bound).

### 4. Async Method Signature

```csharp
public async Task<CallToolResult> create_records(...)
```

Precedent exists: `GetMessagesTool.get_messages` already returns `Task<CallToolResult>`. Required because `Parallel.ForEachAsync` and `CreateAsync` are async.

## Sources

- [Send Parallel Requests](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/send-parallel-requests) — `x-ms-dop-hint`, `EnableAffinityCookie`, `Parallel.ForEachAsync` example
- [Execute Multiple Requests](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/org-service/execute-multiple-requests) — max batch 1000, batch size caveats
- [Service Protection API Limits](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/api-limits) — 6000 req/300s, 1200s exec/300s, 52 concurrent
