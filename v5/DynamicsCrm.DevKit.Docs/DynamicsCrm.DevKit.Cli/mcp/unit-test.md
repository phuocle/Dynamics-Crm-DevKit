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
| **Total** | **16** | **263** | **✅ All Pass** |

```
Test Run Successful.
Total tests: 263
     Passed: 263
 Total time: ~3.2 Seconds
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
| 11 | `PublishCustomizationsToolTests.cs` | 8 | `BuildParameterXml()` — entities, optionsets, sitemaps XML generation |
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

## Not Tested — Reason

| Class | Reason |
|-------|--------|
| `McpServerHost` | DI/hosting wiring — no business logic to test |
| `SchemaResources` | Reads embedded XSD resources — returns null in test assembly context |
| `GetSolutionComponentsTool` | ~530 lines, complex multi-query Dataverse with metadata resolution |
| `GetEntitiesMetadataTool` | All logic delegated to `MetadataService` async + `CompactFormatter` (already tested) |
| `GetGlobalOptionSetsTool` | All logic delegated to `ServiceClient.Execute()` + `CompactFormatter` (already tested) |
| `GetMessagesTool` | All logic delegated to `MessageDiscoveryHelper` (already tested) |
| `SearchTool` (format methods) | `FormatSearchResults()` depends on Dataverse response objects not constructible without mock |
| `ExecuteFetchXmlTool` (ConvertEntities) | Private method tightly coupled to `EntityCollection` from Dataverse |

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
// Tools are public — pass null ServiceClient, test only error paths
private readonly DeleteRecordTool _tool = new(null!);

[TestMethod]
public void DeleteRecord_EmptyEntityName_ReturnsError()
{
    var result = _tool.delete_record("", "guid");
    Assert.IsTrue(result.IsError);
}
```

---

## File Tree

```
DynamicsCrm.DevKit.UnitTests/
└── Cli/
    └── Mcp/
        ├── FetchXmlPagingHelperTests.cs       (13 tests)
        ├── DataverseValueFormatterTests.cs     (27 tests)
        ├── CompactFormatterTests.cs            (17 tests)
        ├── MarkdownFormatterTests.cs           (15 tests)
        ├── WebApiResponseFormatterTests.cs     (17 tests)
        ├── MessageDiscoveryHelperTests.cs      (12 tests)
        ├── StructuredResultsTests.cs           (10 tests)
        ├── InstructionResourcesTests.cs        (13 tests)
        ├── ParseRecordUrlToolTests.cs          (21 tests)
        ├── WhoAmIToolTests.cs                  (18 tests)
        ├── PublishCustomizationsToolTests.cs   ( 8 tests)
        ├── CrudToolValidationTests.cs          (27 tests)
        ├── EntityParserHelperTests.cs          (16 tests)
        ├── ExecuteWebApiToolTests.cs           (26 tests)
        ├── GetPluginTraceLogsToolTests.cs      (20 tests)
        └── MetadataToolValidationTests.cs      ( 3 tests)
```
