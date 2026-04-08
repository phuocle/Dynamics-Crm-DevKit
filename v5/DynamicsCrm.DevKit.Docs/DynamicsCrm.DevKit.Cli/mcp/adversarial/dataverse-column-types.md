# Adversarial Test: List All Dataverse Column Types

**Document Type:** MCP Adversarial Analysis
**Date:** 2026-04-08
**Status:** Completed

---

## User Prompt

> "List all column datatypes supported in Dataverse. Bullet each one with format. For example: DateTime has DateOnly and DateAndTime formats, plus behaviors like UserLocal, TimeZoneIndependent, and DateOnly — so the combinations multiply."

---

## MCP Tools Used

| Tool | Purpose | Result |
|------|---------|--------|
| `get_tables` (entity: `account`) | Get all attribute types from a well-populated system entity | 164 attributes, covers most types |
| `get_tables` (entity: `v4_test_mcp`) | Get custom entity with intentionally diverse column types | 48 attributes, covers File, Image, Customer, Polymorphic Lookup, MultiSelect |
| `execute_webapi` (DateTimeAttributeMetadata) | Query DateTime Format + DateTimeBehavior | 200 OK but tool did not render response body |
| `execute_webapi` (StringAttributeMetadata) | Query String FormatName | 200 OK but tool did not render response body |
| `execute_webapi` (IntegerAttributeMetadata) | Query Integer Format | 200 OK but tool did not render response body |
| `execute_webapi` (MemoAttributeMetadata) | Query Memo Format | 200 OK but tool did not render response body |

**External sources used:** Microsoft Learn docs (entity-attribute-metadata, behavior-format-date-time-attribute)

---

## MCP Capability Assessment

### What MCP CAN Provide

| Data Point | Source Tool |
|------------|-------------|
| All AttributeType names (String, Memo, Integer, Decimal, Double, Money, Boolean, DateTime, Picklist, MultiSelect, State, Status, Lookup, Customer, Owner, File, Image, BigInt, Uniqueidentifier, Virtual) | `get_tables` |
| DateTime behavior (UserLocal, TimeZoneIndependent) | `get_tables` — shown in Constraints column |
| Picklist/Choice option values | `get_tables` — shown inline |
| Lookup targets (single, polymorphic) | `get_tables` — shown as `Lookup -> entity1, entity2` |
| Money precision | `get_tables` — shown as `P=N` |
| String max length | `get_tables` — shown as `MaxLen=N` |
| Numeric min/max ranges | `get_tables` — shown as `[min..max]` |

### What MCP CANNOT Provide (Gaps)

| Missing Data Point | Why | Workaround |
|--------------------|-----|------------|
| String Format (Email, Phone, URL, TextArea, TickerSymbol, RichText) | `get_tables` does not expose `FormatName` for string attributes | `execute_webapi` with `StringAttributeMetadata` cast — but response body not rendered by tool |
| Memo Format (Text vs RichText) | `get_tables` does not expose `Format` for memo attributes | Same as above |
| Integer Format (None, Duration, Language, TimeZone) | `get_tables` does not expose `Format` for integer attributes | Same as above |
| DateTime Format (DateAndTime vs DateOnly) | `get_tables` shows behavior but not format | `execute_webapi` with `DateTimeAttributeMetadata` cast |
| DateTime behavior `DateOnly` | `get_tables` only shows `UserLocal` and `TimeZoneIndependent` — does not show `DateOnly` behavior explicitly | Requires WebAPI metadata query |
| Money PrecisionSource (0=Attribute, 1=Org, 2=Currency) | `get_tables` shows precision value but not source | Requires WebAPI metadata query |
| System-only types (EntityName, CalendarRules, PartyList, ManagedProperty) | These are internal types not typically shown | Microsoft docs only |

### Root Cause of `execute_webapi` Gap

The `execute_webapi` tool returns `statusCode: 200` and `isSuccess: true` but **does not include the response body** in the output when querying metadata endpoints. This means:

- The tool successfully calls the API
- The data exists and is returned by Dataverse
- But the AI cannot see the actual data to analyze it

**Recommendation:** Investigate whether `execute_webapi` truncates or omits response body for large metadata responses. The `max_response_lines` parameter was set to 500 but had no effect.

---

## Complete Column Type Reference

### A. STRING (Single Line of Text) — 7 formats

| # | Type | Format | Description |
|---|------|--------|-------------|
| 1 | String | Text | Standard text box (MaxLen 1-4000, default 100) |
| 2 | String | Email | Validates email, creates mailto link |
| 3 | String | Phone | Link to Skype/Teams call |
| 4 | String | URL | Displays as hyperlink |
| 5 | String | TextArea | Multi-line display, single-line attribute |
| 6 | String | TickerSymbol | Link to stock quote |
| 7 | String | RichText | Rich text editor (MaxLen up to 4000) |

### B. MEMO (Multiple Lines of Text) — 2 formats

| # | Type | Format | Description |
|---|------|--------|-------------|
| 8 | Memo | Text | Standard multiline text box (MaxLen 1-1,048,576, default 2000) |
| 9 | Memo | RichText | Multiline rich text editor |

### C. INTEGER (Whole Number) — 4 formats

| # | Type | Format | Description |
|---|------|--------|-------------|
| 10 | Integer | None | Standard number input (-2,147,483,648 to 2,147,483,647) |
| 11 | Integer | Duration | Dropdown with time intervals (stored as minutes) |
| 12 | Integer | Language | Dropdown with enabled languages (stored as LCID) |
| 13 | Integer | TimeZone | Dropdown with time zones (-1500 to 1500) |

### D. NUMERIC TYPES

| # | Type | Description |
|---|------|-------------|
| 14 | BigInt | Large integer (system use, e.g., versionnumber) |
| 15 | Decimal | Decimal number (precision 0-10, default 2) |
| 16 | Double (Float) | Floating point number (precision 0-5, default 2) |

### E. MONEY (Currency) — 3 precision sources

| # | Type | PrecisionSource | Description |
|---|------|-----------------|-------------|
| 17 | Money | 0 (Attribute) | Precision set on the column itself (P=0-4) |
| 18 | Money | 1 (Organization) | Uses `Organization.PricingDecimalPrecision` |
| 19 | Money | 2 (Currency) | Uses `TransactionCurrency.CurrencyPrecision` |

### F. BOOLEAN (Yes/No)

| # | Type | Description |
|---|------|-------------|
| 20 | Boolean | True/False with custom labels (e.g., Yes/No, Allow/Do Not Allow) |

### G. DATETIME — 5 valid combinations (3 behaviors x 2 formats, minus 1 invalid)

| # | Behavior | Format | Description |
|---|----------|--------|-------------|
| 21 | UserLocal | DateAndTime | Stores UTC, displays in user's timezone, full date+time |
| 22 | UserLocal | DateOnly | Stores UTC, displays in user's timezone, date only |
| 23 | DateOnly | DateOnly | Stores actual date, no time, no timezone conversion |
| 24 | TimeZoneIndependent | DateAndTime | Stores as-is, no timezone conversion, full date+time |
| 25 | TimeZoneIndependent | DateOnly | Stores as-is, no timezone conversion, date only |

> **Note:** DateOnly behavior + DateAndTime format is **invalid** — DateOnly behavior forces DateOnly format.

### H. CHOICE (Picklist/OptionSet) — 5 types

| # | Type | Description |
|---|------|-------------|
| 26 | Picklist (local) | Single choice, options defined on the column |
| 27 | Picklist (global) | Single choice, references a shared global option set |
| 28 | MultiSelectPicklist | Multiple choices allowed |
| 29 | State | Record status (Active/Inactive) — system managed |
| 30 | Status | Status reason — system managed |

### I. REFERENCE (Lookup) — 4 types

| # | Type | Description |
|---|------|-------------|
| 31 | Lookup | Reference to 1 specific entity |
| 32 | Customer | Polymorphic lookup to `account` OR `contact` |
| 33 | Owner | Polymorphic lookup to `systemuser` OR `team` — system managed |
| 34 | Polymorphic Lookup | Custom lookup to multiple entities |

### J. FILE & IMAGE

| # | Type | Description |
|---|------|-------------|
| 35 | File | Binary file storage (MaxKB default 32768 = 32MB) |
| 36 | Image | Image for record display |

### K. IDENTIFIER

| # | Type | Description |
|---|------|-------------|
| 37 | Uniqueidentifier | GUID, used for primary keys and internal references |

### L. SYSTEM-ONLY TYPES (cannot create custom)

| # | Type | Description |
|---|------|-------------|
| 38 | EntityName | Contains entity logical name (internal use) |
| 39 | CalendarRules | Collection of CalendarRules records (internal) |
| 40 | PartyList | Collection of ActivityParty records (activity entities) |
| 41 | ManagedProperty | Solution managed properties (internal) |
| 42 | Virtual | Virtual columns, no actual data stored (internal) |

---

## Summary

| Category | Count |
|----------|-------|
| String (Single Line) | 7 |
| Memo (Multi Line) | 2 |
| Integer (Whole Number) | 4 |
| BigInt | 1 |
| Decimal | 1 |
| Double/Float | 1 |
| Money (Currency) | 3 |
| Boolean | 1 |
| DateTime | 5 |
| Choice/Picklist | 5 |
| Reference/Lookup | 4 |
| File | 1 |
| Image | 1 |
| Uniqueidentifier | 1 |
| System-only types | 5 |
| **Total** | **42** |

---

## Recommendations for MCP Tool Improvement

1. **`get_tables` should expose Format/FormatName** — String format (Email, Phone, URL, etc.), Integer format (Duration, Language, TimeZone), Memo format (Text, RichText), and DateTime format (DateAndTime, DateOnly) are critical metadata that `get_tables` currently omits
2. **`execute_webapi` should render response body** — metadata queries return 200 OK but the response content is not shown to the AI, making it impossible to extract detailed attribute metadata
3. **Consider a dedicated `get_column_types` tool** — a single tool that returns all possible Dataverse column types with their formats, behaviors, and constraints would directly answer this class of questions without needing to combine multiple tools + external docs

---

## Sources

- [Column definitions - Microsoft Learn](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/entity-attribute-metadata)
- [Behavior and format of DateTime column - Microsoft Learn](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/behavior-format-date-time-attribute)
- MCP `get_tables` output for `account` and `v4_test_mcp` entities
- MCP `upsert_column` tool description (lists supported types and formats)
