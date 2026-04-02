# DevKit CLI MCP — Unit Test Results

> **Purpose**: Unit tests for all MCP components in `DynamicsCrm.DevKit.Cli\Mcp\`.
> **Test location**: `DynamicsCrm.DevKit.UnitTests\Cli\Mcp\`
> **Framework**: MSTest (net10.0 only)
> **Rule**: NEVER touch original code. Read-only analysis → write tests only.
> **Strategy**: Reflection for `internal static` classes; null ServiceClient for validation-only paths.

---

## Results Summary

| Phase | Files | Tests | Status |
|-------|-------|-------|--------|
| Phase 1: Pure Static Helpers | 8 | 124 | ✅ All Pass |
| Phase 2: Tool Validation & Static Methods | 5 | 90 | ✅ All Pass |
| Phase 3: Complex Tools & Edge Cases | 3 | 49 | ✅ All Pass |
| Phase 4: Deep Static Methods & Metadata | 6 | 93 | ✅ All Pass |
| **Total** | **22** | **356** | **✅ All Pass** |

```
Test Run Successful.
Total tests: 356
     Passed: 356
 Total time: ~4.2 Seconds
```

---

## Phase 1: Pure Static Helpers (No mocking needed)

| # | Test File | Tests | Key Methods Tested |
|---|-----------|-------|--------------------|
| 1 | `FetchXmlPagingHelperTests.cs` | 13 | `ApplyPaging()` — paging attrs, top stripping, cookies, edge cases |
| 2 | `DataverseValueFormatterTests.cs` | 27 | `FormatValue()` — all Dataverse types: string, int, EntityRef, OptionSet, Money, DateTime, bool, AliasedValue, Guid, byte[], FormattedValues |
| 3 | `CompactFormatterTests.cs` | 17 | `FormatMessages()`, `FormatFetchXmlResults()` — TSV output, dedup, escaping |
| 4 | `MarkdownFormatterTests.cs` | 15 | `FormatMessages()`, `FormatFetchXmlResults()` — markdown tables, pipe escaping |
| 5 | `WebApiResponseFormatterTests.cs` | 17 | `FormatResponse()` — JSON, tables, truncation, headers, escaping |
| 6 | `MessageDiscoveryHelperTests.cs` | 12 | `NormalizeScope()` — null/empty/global/entity normalization |
| 7 | `StructuredResultsTests.cs` | 10 | `WhoAmIResult`, `CrudResult`, `PublishResult`, `WebApiResult` — serialization |
| 8 | `InstructionResourcesTests.cs` | 13 | `FormXmlInstructions()`, `ViewInstructions()` — embedded content verification |

---

## Phase 2: Tool Validation & Static Methods

| # | Test File | Tests | Key Methods Tested |
|---|-----------|-------|--------------------|
| 9 | `ParseRecordUrlToolTests.cs` | 21 | All URL formats: main.aspx, Web API, maker portal (flow/run/solution), legacy URLs, raw GUID, edge cases |
| 10 | `WhoAmIToolTests.cs` | 18 | `GetLanguageName()` (13 LCIDs) + `BuildCompactText()` (5 scenarios) via reflection |
| 11 | `PublishToolTests.cs` | 8 | `BuildParameterXml()` — entities, optionsets, sitemaps XML generation |
| 12 | `CrudToolValidationTests.cs` | 27 | Delete (5), Create (4), Update (4), `CountFields()` (5), GetRecord (3), FetchXml (2), Search (3) |
| 13 | `EntityParserHelperTests.cs` | 16 | `ParseFieldKey()` (6), `ParseFieldName()` (3), `FallbackConvert()` (5), `ClearCache()` (1) |

---

## Phase 3: Complex Tools & Edge Cases

| # | Test File | Tests | Key Methods Tested |
|---|-----------|-------|--------------------|
| 14 | `ExecuteWebApiToolTests.cs` | 26 | Input validation (3), `ParseHttpMethod()` (6), `ParseHeaders()` (5), `GetBlockedReason()` (8), `TryFormatJson()` (3) |
| 15 | `GetPluginTraceLogsToolTests.cs` | 20 | Input validation (1), `BuildListFetchXml()` (9), `FormatNoResults()` (2), `FormatDetailRecord()` (3), `EscapeTab()` (3), `EscapeXml()` (5) |
| 16 | `MetadataToolValidationTests.cs` | 3 | `GetEntityMetadataTool` input validation (empty/whitespace/null) |

---

## Phase 4: Deep Static Methods & Metadata Formatters

| # | Test File | Tests | Key Methods Tested |
|---|-----------|-------|--------------------|
| 17 | `SearchToolTests.cs` | 25 | `FormatSearchResults()` (5), `FormatAttributes()` (5 w/ annotation filtering), `FormatHighlights()` (5 w/ crmhit), `BuildSearchRequest()` (5), `EscapeTab()` (4) |
| 18 | `FetchXmlAndRecordToolTests.cs` | 23 | `ConvertEntities()` (9 — all Dataverse types), `BuildColumnSet()` (7 — parsing/filtering), `FormatRecord()` (7 — header, sort, types) |
| 19 | `SchemaResourcesTests.cs` | 11 | `ReadEmbeddedResourceAsync()` (6 — all 5 XSDs + non-existent), public schema methods (4 — FormXml, LayoutXml, FetchXml, SiteMap) |
| 20 | `CompactFormatterMetadataTests.cs` | 14 | `FormatEntitySummaryTable()` (5), `FormatOptionSetList()` (2), `FormatOptionSetDetail()` (4 — with options, boolean, empty, ordering) |
| 21 | `GetViewsToolTests.cs` | 16 | Input validation (3), `MapQueryType()` (7 known + unknown), `PrettyPrintXml()` (3), `EscapeTab()` (3) |
| 22 | `MarkdownFormatterMetadataTests.cs` | 10 | `FormatEntitySummaryTable()` (4), `FormatOptionSetList()` (2), `FormatOptionSetDetail()` (3) — markdown table format verification |

---

## Not Tested — Reason

| Class | Reason |
|-------|--------|
| `McpServerHost` | DI/hosting wiring — no business logic to test |
| `GetSolutionComponentsTool` | ~530 lines, complex multi-query Dataverse with metadata resolution |
| `GetEntitiesMetadataTool` | All logic delegated to `MetadataService` async + formatters (already tested) |
| `GetGlobalOptionSetsTool` | All logic delegated to `ServiceClient.Execute()` + formatters (already tested) |
| `GetMessagesTool` | All logic delegated to `MessageDiscoveryHelper` (already tested) |
| `GetFormsTool` | No static methods, all logic delegated to ServiceClient + formatters |
| `CompactFormatter.FormatEntityDetail` | Requires fully-constructed `EntityMetadata` with Attributes/Relationships arrays (internal setters nested deeply) |
| `MarkdownFormatter.FormatEntityDetail` | Same as above |

---

## Technical Design

### Reflection Pattern (for `internal static` classes)

```csharp
private static readonly Type HelperType = typeof(McpServerHost).Assembly
    .GetType("DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper.ClassName")!;

private static readonly MethodInfo Method = HelperType
    .GetMethod("MethodName", BindingFlags.Public | BindingFlags.Static)!;
```

### Reflection Pattern (for `private static` methods on public classes)

```csharp
private static readonly MethodInfo Method = typeof(ToolClass)
    .GetMethod("MethodName", BindingFlags.NonPublic | BindingFlags.Static)!;
```

### Null ServiceClient Pattern (for input validation)

```csharp
private readonly DeleteRecordTool _tool = new(null!);

[TestMethod]
public void DeleteRecord_EmptyEntityName_ReturnsError()
{
    var result = _tool.delete_record("", "guid");
    Assert.IsTrue(result.IsError);
}
```

### EntityMetadata Construction (for metadata tests)

```csharp
private static EntityMetadata CreateEntityMetadata(string logicalName)
{
    var meta = new EntityMetadata();
    typeof(EntityMetadata).GetProperty("LogicalName")!.SetValue(meta, logicalName);
    typeof(EntityMetadata).GetProperty("IsCustomEntity")!.SetValue(meta, (bool?)false);
    return meta;
}
```

---

## File Tree

```
DynamicsCrm.DevKit.UnitTests/
└── Cli/
    └── Mcp/
        ├── FetchXmlPagingHelperTests.cs          (13 tests)
        ├── DataverseValueFormatterTests.cs        (27 tests)
        ├── CompactFormatterTests.cs               (17 tests)
        ├── CompactFormatterMetadataTests.cs        (14 tests)
        ├── MarkdownFormatterTests.cs              (15 tests)
        ├── MarkdownFormatterMetadataTests.cs       (10 tests)
        ├── WebApiResponseFormatterTests.cs        (17 tests)
        ├── MessageDiscoveryHelperTests.cs         (12 tests)
        ├── StructuredResultsTests.cs              (10 tests)
        ├── InstructionResourcesTests.cs           (13 tests)
        ├── ParseRecordUrlToolTests.cs             (21 tests)
        ├── WhoAmIToolTests.cs                     (18 tests)
        ├── PublishToolTests.cs       ( 8 tests)
        ├── CrudToolValidationTests.cs             (27 tests)
        ├── EntityParserHelperTests.cs             (16 tests)
        ├── ExecuteWebApiToolTests.cs              (26 tests)
        ├── GetPluginTraceLogsToolTests.cs         (20 tests)
        ├── MetadataToolValidationTests.cs          ( 3 tests)
        ├── SearchToolTests.cs                     (25 tests)
        ├── FetchXmlAndRecordToolTests.cs          (23 tests)
        ├── SchemaResourcesTests.cs                (11 tests)
        └── GetViewsToolTests.cs                   (16 tests)
```
