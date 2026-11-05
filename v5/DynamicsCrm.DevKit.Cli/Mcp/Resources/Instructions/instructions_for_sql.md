
# Dataverse SQL Query Rules

Use the [Microsoft Dataverse Web API SQL subset](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/query/sql) as the SQL reference.

## CRITICAL: Inspect Table Schema Before Composing SQL
- Never guess column names or publisher prefixes on custom tables (e.g. `new_`, `hs_`, `crm_`).
- ALWAYS call `get_tables(entity_name='account', detail_level='standard')` FIRST if you do not know the exact column logical names; replace `account` with the real logical name. Use `get_tables()` to list tables.
- `SELECT *` is STRICTLY UNSUPPORTED. You must explicitly specify every column you need.
- Read `primaryIdAttribute` from the table metadata result. Do not assume it is `{entity_logical_name}id` (for example, the primary key of `email` is `activityid`).

## Column Type Specifics
1. **Choice / OptionSet / StateCode / StatusCode**:
   - Compare with integer values, NOT strings (e.g. `WHERE a.statecode = 0`, NOT `WHERE a.statecode = 'Active'`).
   - Results provide integer values and formatted display labels via `@OData.Community.Display.V1.FormattedValue` annotations.
2. **Lookup Columns & JOINs**:
   - N (child) table uses lookup attribute (`parentcustomerid`).
   - 1 (parent) table uses primary key (`accountid`).
   - Example: `INNER JOIN account AS a ON c.parentcustomerid = a.accountid`
3. **Dates**:
   - Inspect the date column with `get_tables(entity_name='account', filter='createdon', detail_level='full')`, replacing the table and column names. Read the returned `behavior` field (`DateTimeBehavior` in SDK metadata); standard mode omits this field.
   - Respect [date/time behavior](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/behavior-format-date-time-attribute): `UserLocal` values use UTC, `DateOnly` represents a date, and `TimeZoneIndependent` preserves its date/time without timezone conversion. Do not convert every returned date value.
   - The documented [DATEADD/GETUTCDATE exception](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/query/sql#using-dateadd-and-getutcdate-functions) applies in `WHERE` and `ON` to literals or supported functions, never to column arguments. It does not allow function projections, function grouping, or function ordering. Use illustrated date parts such as `day`; do not infer broader SQL Server function support.

## Paging and Limits
- `execute_sql` queries the Dataverse Web API SQL subset. Each call accepts one read-only `SELECT` statement with explicit columns.
- When `execute_webapi` receives a `?sql=` query option, it returns guidance to call `execute_sql`; it does not execute SQL on behalf of the caller.
- `max_records` is the output cap (1–50000, default 5000). `get_all=false` returns only the first page; `get_all=true` follows continuation until the cap or the end. Page size is fixed at `min(effective cap, 5000)` throughout a call.
- The tool accepts `TOP n`, `TOP (n)`, and `DISTINCT TOP n` as a compatibility convenience and removes TOP before sending SQL. A positive Int32 integer sets the effective cap to `min(max_records, n)`; output `max_records` reports that cap. Zero, negative values, overflow, expressions, malformed parentheses, `PERCENT`, and `WITH TIES` are rejected. This does not establish native TOP support; follow [Page results](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/query/sql#page-results) and use tool parameters instead of native TOP/OFFSET.
- `result_truncated=true` means rows were omitted or a continuation was left unread for `executed_sql` after TOP normalization. Reaching the cap alone does not prove truncation. Partial output has the summary suffix ` (partial results)`; `request_url` is the last request made, not a resume token.
- Use `ORDER BY` with a suitable distinguishing key for [stable paging](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/query/page-results#ordering-and-paging). Do not add a key to `SELECT` or `ORDER BY` automatically because that can change `DISTINCT` or grouping semantics.
- The [aggregate input limit](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/query/sql#aggregate-query-record-limits) is a separate 50000-record limit. Error `0x8004E023` is not fixed by lowering `max_records`; restrict the rows evaluated with appropriate `WHERE` filters.
- For `INNER JOIN` or `LEFT JOIN`, `ON` needs an equality between a column from each table. Combine extra filters with that equality using `AND`, and apply those filters to the joined table. See [additional ON filters](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/query/sql#additional-on-filters), including nested `OR` within the added filter.

## Conversion Cheat Sheet (Standard SQL -> Dataverse SQL)

| What you want to do (Standard SQL) | Dataverse SQL or client operation | Why / Rule |
|-----------------------------------|--------------------------|------------|
| `SELECT * FROM account` | `SELECT a.name, a.telephone1 FROM account AS a` | `SELECT *` not supported. Name all columns explicitly. |
| `SELECT TOP 10 name FROM account` | Pass `max_records: 10` (or use the validated TOP conversion above). | The tool controls the output cap and paging. |
| `SELECT a.accountid, a.name FROM account AS a WHERE a.accountid IN (SELECT c.parentcustomerid FROM contact AS c WHERE c.statecode = 0)` | `SELECT DISTINCT a.accountid, a.name FROM account AS a INNER JOIN contact AS c ON a.accountid = c.parentcustomerid WHERE c.statecode = 0` | This membership rewrite preserves the identifying key, relationship, and filter. Do not assume every `EXISTS` or `NOT EXISTS` query can become an `INNER JOIN`. |
| `WHERE a.modifiedon > a.createdon` | Filter client-side or use `execute_fetchxml` | Column-to-column comparison unsupported. |
| `SELECT parentcustomerid, COUNT(*) AS contact_count FROM contact GROUP BY parentcustomerid HAVING COUNT(*) > 5` | Remove `HAVING`, retrieve the grouped results, then keep `contact_count > 5` client-side only after checking `result_truncated=false`. | `HAVING` is unsupported. `WHERE` filters input before aggregation; it is not equivalent to filtering groups by `COUNT(*) > 5`. |
| `SELECT YEAR(createdon), COUNT(*) FROM account GROUP BY YEAR(createdon)` | Retrieve `createdon`, then derive the year and count rows per year client-side after checking `result_truncated=false`. | Date-part functions in `SELECT` / `GROUP BY` are unsupported; deriving a year alone does not combine counts for that year. |
| `WHERE createdon >= GETDATE() - 7` | `WHERE createdon >= DATEADD(day, -7, GETUTCDATE())` | Use the documented DATEADD/GETUTCDATE exception in WHERE; do not generalize it to all functions or dateparts. |
| `SELECT 'Total', COUNT(*)` | `SELECT COUNT(*) AS total_count` | Literal values in `SELECT` list unsupported. |
| `WHERE 1=1` | Omit dummy condition | Literal-to-literal comparisons unsupported. |
