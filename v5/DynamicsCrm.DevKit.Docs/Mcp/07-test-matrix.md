# 07 - Resolver Test Matrix

Use this matrix for every resolver and every migrated tool.

## Core Resolver Cases

| Case | Setup | Expected |
|---|---|---|
| Display single | One Display Name contains input | Resolve display match |
| Display exact winner | Multiple Display Name contains input, exactly one exact Display Name | Resolve exact display match |
| Display ambiguous | Multiple Display Name contains input, no exact Display Name winner | `IsError = true`, candidates |
| Display no match, logical single | No Display Name match, one logical/unique/schema contains input | Resolve logical match |
| Display no match, logical ambiguous | No Display Name match, multiple logical/unique/schema contains input | `IsError = true`, candidates |
| No match | No display or logical matches | `IsError = true`, not found |
| Case-insensitive | Different casing in input | Same as matching case |
| Null display label | Candidate has null display label | Logical phase still works |

## Create / Upsert Cases

| Case | Input | Existing metadata | Expected |
|---|---|---|---|
| Create from label | `Invoice Date` | No display/logical match | Derive from solution prefix + sanitized display text |
| Create with explicit prefix | `ab_Invoice Date` | No display/logical match | Use prefix `ab_`, sanitize body |
| Update by display | `Invoice Date` | Existing field Display Name `Invoice Date` | Update existing field |
| Update by logical fallback | `abc_invoicedate` | No display match, one logical match | Update existing field |
| Ambiguous before create | `Invoice` | Multiple display matches | Stop, no create |
| Conflicting inputs | `attribute_name` resolves one field, `display_name` resolves another | Existing metadata | Return clear conflict or use documented precedence |

## Tool Safety Cases

For mutating tools:

- Ambiguity returns before backup.
- Ambiguity returns before create/update/delete.
- Ambiguity returns before publish.
- Dry-run uses same resolver behavior as live mode.

For list/search tools:

- Multiple rows are allowed when the user asked for list/search.
- Detail/update/delete by fuzzy name must not silently pick from multiple rows.

## Suggested Unit Test Names

Use names like:

```text
ResolveEntity_DisplayContainsSingle_ReturnsEntity
ResolveEntity_DisplayContainsMultipleExactDisplayWinner_ReturnsExactDisplay
ResolveEntity_DisplayContainsMultipleNoExact_ReturnsAmbiguousError
ResolveEntity_NoDisplayLogicalSingle_ReturnsLogical
ResolveEntity_NoDisplayLogicalMultiple_ReturnsAmbiguousError
UpsertColumn_AmbiguousField_DoesNotCreate
ManageChoice_ExactLogicalButDisplayAmbiguous_ReturnsDisplayAmbiguity
ExecuteFetchXml_DoesNotResolveDisplayNames
```

## Manual MCP Smoke Tests

Use a Dataverse environment with deliberately confusing names:

Entities:

- Display `Invoice`
- Display `Invoice Line`
- Logical `abc_invoice`
- Logical `abc_invoiceline`
- Logical `invoice_archive`

Fields:

- Display `Invoice Date`
- Display `Invoice Date Override`
- Logical `abc_invoicedate`
- Logical `abc_invoicedateoverride`

Solutions:

- Friendly `Core`
- Friendly `Core Extensions`
- Unique `abc_core`
- Unique `abc_core_ext`

Choices:

- Display `Status`
- Display `Invoice Status`
- Name `abc_status`
- Name `abc_invoicestatus`

Smoke expectations:

- Input `Invoice Date` with exact Display Name resolves the exact display field even if another display contains it.
- Input `Invoice` when multiple display names contain it and no exact display winner returns ambiguity.
- Input `abc_invoice` resolves only if display phase has zero matches or exact display rule does not intercept.
- Raw FetchXML with `<entity name="Invoice">` is not rewritten.

