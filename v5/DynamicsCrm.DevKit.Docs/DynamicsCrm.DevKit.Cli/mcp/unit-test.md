# DevKit CLI MCP — Unit Test Plan

> **Purpose**: Plan for writing unit tests for all MCP components in `DynamicsCrm.DevKit.Cli\Mcp\`.
> **Test location**: `DynamicsCrm.DevKit.UnitTests\Cli\Mcp\`
> **Framework**: MSTest (net10.0 only) + FakeXrmEasy.v9
> **Rule**: NEVER touch original code. Read-only analysis → write tests only.

---

## Architecture Overview

### Source Files (27 files)

| Category | Path | Files |
|---------|------|-------|
| **Host** | `Mcp/McpServerHost.cs` | 1 (skip — DI wiring, not testable) |
| **Tools** | `Mcp/Tools/*.cs` | 16 tool classes |
| **Helpers** | `Mcp/Tools/Helper/*.cs` | 7 helper classes |
| **Models** | `Mcp/Tools/Models/*.cs` | 1 file (4 model classes) |
| **Resources** | `Mcp/Resources/*.cs` | 2 resource classes |

### Dependencies

- All **Tool classes** depend on `ServiceClient` or `MetadataService` (live Dataverse connection)
- All **Helper classes** are mostly pure functions or require `Entity`/metadata objects (testable without mocking)
- **Models** are simple POCOs (testable via serialization)
- **Resources** read embedded resources from assembly

---

## Testability Analysis

### ✅ Easy to Test (Pure functions / no Dataverse dependency)

| # | Class | File | Key Methods | Notes |
|---|-------|------|-------------|-------|
| 1 | `FetchXmlPagingHelper` | Helper/FetchXmlPagingHelper.cs | `ApplyPaging()` | Pure static, XML manipulation |
| 2 | `DataverseValueFormatter` | Helper/DataverseValueFormatter.cs | `FormatValue()` | Static, uses `Entity` objects |
| 3 | `CompactFormatter` | Helper/CompactFormatter.cs | `FormatMessages()`, `FormatFetchXmlResults()`, `FormatEntitySummaryTable()`, `FormatOptionSetList()`, `FormatOptionSetDetail()`, `FormatEntityDetail()` | Static, takes metadata objects |
| 4 | `MarkdownFormatter` | Helper/MarkdownFormatter.cs | Same methods as CompactFormatter | Static, markdown variant |
| 5 | `WebApiResponseFormatter` | Helper/WebApiResponseFormatter.cs | `FormatResponse()` | Static, HTTP response formatting |
| 6 | `MessageDiscoveryHelper` | Helper/MessageDiscoveryHelper.cs | `NormalizeScope()` | Static, only `NormalizeScope` is testable (other methods need `MetadataService`) |
| 7 | `StructuredResults` (Models) | Models/StructuredResults.cs | JSON serialization | POCO classes |
| 8 | `ParseRecordUrlTool` (static methods) | Tools/ParseRecordUrlTool.cs | URL parsing (non-Dataverse methods) | Many static parsers are testable |
| 9 | `InstructionResources` | Resources/InstructionResources.cs | `FormXmlInstructions()`, `ViewInstructions()` | Static string returns |

### ⚠️ Medium (Need FakeXrmEasy mocking)

| # | Class | File | Reason |
|---|-------|------|--------|
| 10 | `ParseRecordUrlTool` (Dataverse methods) | Tools/ParseRecordUrlTool.cs | `ResolveEntityTypeCode`, `ResolveEntitySetName` need `ServiceClient.Execute()` |
| 11 | `DeleteRecordTool` | Tools/DeleteRecordTool.cs | Input validation testable, Dataverse ops need mock |
| 12 | `UpdateRecordTool` | Tools/UpdateRecordTool.cs | Input validation + `CountFields()` testable |
| 13 | `CreateRecordTool` | Tools/CreateRecordTool.cs | Input validation testable |
| 14 | `GetRecordTool` | Tools/GetRecordTool.cs | `BuildColumnSet()` is private static, `FormatRecord()` is private static |
| 15 | `ExecuteFetchXmlTool` | Tools/ExecuteFetchXmlTool.cs | `ConvertEntities()` is private static |
| 16 | `WhoAmITool` | Tools/WhoAmITool.cs | `BuildCompactText()`, `GetLanguageName()` are private static |
| 17 | `PublishCustomizationsTool` | Tools/PublishCustomizationsTool.cs | `BuildParameterXml()` is private static |
| 18 | `SearchTool` | Tools/SearchTool.cs | `FormatSearchResults()`, `FormatAttributes()`, `FormatHighlights()` are private |

### ❌ Hard / Skip (Complex Dataverse dependencies)

| # | Class | File | Reason |
|---|-------|------|--------|
| 19 | `GetEntitiesMetadataTool` | Tools/GetEntitiesMetadataTool.cs | Needs `MetadataService` async — skip or mock |
| 20 | `GetEntityMetadataTool` | Tools/GetEntityMetadataTool.cs | Needs `MetadataService` async — skip or mock |
| 21 | `GetGlobalOptionSetsTool` | Tools/GetGlobalOptionSetsTool.cs | `ServiceClient.Execute()` — needs mock |
| 22 | `GetMessagesTool` | Tools/GetMessagesTool.cs | `MetadataService` async — skip |
| 23 | `GetPluginTraceLogsTool` | Tools/GetPluginTraceLogsTool.cs | Many helper methods are private |
| 24 | `GetSolutionComponentsTool` | Tools/GetSolutionComponentsTool.cs | Very complex, many Dataverse queries |
| 25 | `ExecuteWebApiTool` | Tools/ExecuteWebApiTool.cs | `ServiceClient.ExecuteWebRequest()` |
| 26 | `EntityParserHelper` | Helper/EntityParserHelper.cs | Needs `ServiceClient` for metadata cache |
| 27 | `SchemaResources` | Resources/SchemaResources.cs | Reads embedded resources from assembly |
| 28 | `McpServerHost` | McpServerHost.cs | DI wiring — skip |

---

## Test Plan — Ordered Easy → Hard

### Phase 1: Pure Static Helpers (No mocking needed)

#### Test File 1: `FetchXmlPagingHelperTests.cs`

| Test | Description |
|------|-------------|
| `ApplyPaging_SetsPageAndCount` | Basic paging attributes set |
| `ApplyPaging_StripsTopAttribute` | `top` is removed from FetchXML |
| `ApplyPaging_WithPagingCookie_SetsEscapedCookie` | `paging-cookie` attribute set with XML escape |
| `ApplyPaging_WithNullCookie_RemovesPagingCookie` | `paging-cookie` removed when null |
| `ApplyPaging_WithEmptyCookie_RemovesPagingCookie` | `paging-cookie` removed when empty |
| `ApplyPaging_InvalidXml_ThrowsException` | Invalid XML throws |
| `ApplyPaging_PreservesExistingAttributes` | Other attributes not removed |

#### Test File 2: `DataverseValueFormatterTests.cs`

| Test | Description |
|------|-------------|
| `FormatValue_String_ReturnsString` | Plain string attribute |
| `FormatValue_Int_ReturnsToString` | Integer attribute |
| `FormatValue_Null_ReturnsEmpty` | Null attribute returns "" |
| `FormatValue_MissingAttribute_ReturnsEmpty` | Non-existent attribute returns "" |
| `FormatValue_EntityReference_WithName_ReturnsFormatted` | EntityRef with Name |
| `FormatValue_EntityReference_WithoutName_ReturnsIdOnly` | EntityRef without Name |
| `FormatValue_OptionSetValue_ReturnsValue` | OptionSetValue.Value.ToString() |
| `FormatValue_Money_ReturnsFormatted` | Money with N2 format |
| `FormatValue_DateTime_ReturnsFormatted` | DateTime yyyy-MM-dd HH:mm:ss |
| `FormatValue_Boolean_True_ReturnsYes` | true → "Yes" |
| `FormatValue_Boolean_False_ReturnsNo` | false → "No" |
| `FormatValue_AliasedValue_ReturnsFormatted` | AliasedValue unwrapping |
| `FormatValue_AliasedValue_Null_ReturnsEmpty` | AliasedValue null → "" |
| `FormatValue_Guid_ReturnsString` | Guid.ToString() |
| `FormatValue_ByteArray_ReturnsBytesCount` | byte[] → "[N bytes]" |
| `FormatValue_FormattedValue_TakesPrecedence` | FormattedValues used first |

#### Test File 3: `CompactFormatterTests.cs`

| Test | Description |
|------|-------------|
| `FormatMessages_AllEmpty_ReturnsHeaderOnly` | Empty lists |
| `FormatMessages_WithSdkMessages_ListsThem` | SDK messages section |
| `FormatMessages_WithCustomActions_ListsThem` | Custom Actions section |
| `FormatMessages_WithCustomApis_ListsThem` | Custom APIs section |
| `FormatMessages_DeduplicatesAndSorts` | Duplicate removal, case-insensitive |
| `FormatFetchXmlResults_EmptyRecords_ReturnsZero` | 0 records message |
| `FormatFetchXmlResults_SingleEntity_OmitsEntityColumn` | _entity omitted when all same |
| `FormatFetchXmlResults_MultipleEntities_KeepsEntityColumn` | _entity shown when mixed |
| `FormatFetchXmlResults_TabSeparatedOutput` | Tab delimited |
| `FormatFetchXmlResults_EscapesTabInValues` | Tab in value escaped |
| `FormatOptionSetList_FormatsAsTable` | TSV output with header |
| `FormatOptionSetDetail_RegularOptionSet_FormatsOptions` | Options table |
| `FormatOptionSetDetail_BooleanOptionSet_FormatsTrueFalse` | Boolean option set |
| `FormatEntitySummaryTable_FormatsEntities` | Entity list TSV |

#### Test File 4: `MarkdownFormatterTests.cs`

| Test | Description |
|------|-------------|
| `FormatMessages_AllEmpty_ReturnsHeaderOnly` | Empty lists |
| `FormatMessages_WithSdkMessages_MarkdownList` | SDK section with `- ` bullets |
| `FormatMessages_IncludesSummaryTable` | Category count table |
| `FormatFetchXmlResults_EmptyRecords_ReturnsMessage` | 0 records |
| `FormatFetchXmlResults_FormatsAsMarkdownTable` | `|` delimited table |
| `FormatFetchXmlResults_EscapesPipeInValues` | `|` → `\|` |
| `FormatOptionSetList_FormatsAsMarkdownTable` | Markdown table with header |
| `FormatOptionSetDetail_FormatsAsMarkdown` | With `##` headers |
| `FormatEntitySummaryTable_FormatsAsMarkdownTable` | Entities as MD table |

#### Test File 5: `WebApiResponseFormatterTests.cs`

| Test | Description |
|------|-------------|
| `FormatResponse_EmptyBody_ShowsEmptyMessage` | "_(empty response body)_" |
| `FormatResponse_FlatJsonObject_FormatsAsTable` | Property/Value table |
| `FormatResponse_ValueArray_FormatsAsRecordTable` | Records table from `value:[]` |
| `FormatResponse_NonJsonBody_FormatsAsPlainText` | Plain text fallback |
| `FormatResponse_JsonCodeBlock_FormatsAsPrettyJson` | `json` code block |
| `FormatResponse_TruncatesLargeResponse` | maxLines truncation |
| `FormatResponse_IncludesNotableHeaders` | OData-EntityId, Location headers |
| `FormatResponse_NoNotableHeaders_SkipsSection` | No headers section |
| `FormatResponse_ValueArrayTruncation_ShowsPartialCount` | Truncation message |

#### Test File 6: `MessageDiscoveryHelperTests.cs`

| Test | Description |
|------|-------------|
| `NormalizeScope_Null_ReturnsNone` | null → "none" |
| `NormalizeScope_Empty_ReturnsNone` | "" → "none" |
| `NormalizeScope_Whitespace_ReturnsNone` | " " → "none" |
| `NormalizeScope_Global_ReturnsNone` | "global" → "none" |
| `NormalizeScope_EntityName_ReturnsLowercase` | "Account" → "account" |
| `NormalizeScope_Trimmed` | " account " → "account" |

#### Test File 7: `StructuredResultsTests.cs`

| Test | Description |
|------|-------------|
| `WhoAmIResult_SerializesToJson` | JSON property names correct |
| `WhoAmIResult_DeserializesFromJson` | Round-trip test |
| `CrudResult_FieldsUpdated_OmittedWhenNull` | JsonIgnore condition |
| `PublishResult_SpecificMode_IncludesEntities` | Entities list present |
| `PublishResult_AllMode_EntitiesNull` | Entities omitted |
| `WebApiResult_IsSuccess_SerializesCorrectly` | Boolean and int fields |

### Phase 2: Tool Input Validation & Static Methods

#### Test File 8: `ParseRecordUrlToolTests.cs`

| Test | Description |
|------|-------------|
| `ParseRecordUrl_EmptyInput_ReturnsError` | Error message |
| `ParseRecordUrl_RawGuid_ReturnsUnknownEntity` | "(unknown)" entity |
| `ParseRecordUrl_GuidWithBraces_ExtractsCorrectly` | `{guid}` format |
| `ParseRecordUrl_MainAspxWithEtn_ReturnsEntity` | `etn=account&id=guid` |
| `ParseRecordUrl_MainAspxEntityList_ReturnsViewId` | `pagetype=entitylist&viewid=guid` |
| `ParseRecordUrl_WebApiUrl_ReturnsEntitySetName` | `api/data/v9.2/accounts(guid)` — returns raw set name (can't resolve without mock) |
| `ParseRecordUrl_MakerFlowUrl_ReturnsWorkflow` | `make.powerautomate.com/environments/{env}/flows/{flow}` |
| `ParseRecordUrl_MakerFlowRunUrl_ReturnsFlowSession` | Flow run URL |
| `ParseRecordUrl_MakerSolutionUrl_ReturnsSolution` | `make.powerapps.com/environments/{env}/solutions/{sol}` |
| `ParseRecordUrl_WorkflowEditor_ReturnsWorkflow` | `sfa/workflow/edit.aspx?id=guid` |
| `ParseRecordUrl_ReportViewer_ReturnsReport` | `crmreports/viewer/viewer.aspx?id=guid` |
| `ParseRecordUrl_SolutionEditor_ReturnsSolution` | `tools/solution/edit.aspx?id=guid` |
| `ParseRecordUrl_RunDialogUrl_ReturnsEntity` | `rundialog.aspx?DialogId=&EntityName=&ObjectId=` |
| `ParseRecordUrl_UrlEncodedGuid_DecodesCorrectly` | `%7B` decoding |
| `ParseRecordUrl_NoGuidFound_ReturnsNoGuidMessage` | Invalid input |
| `ParseRecordUrl_MainAspxIdOnly_ReturnsUnknown` | No etn or etc |

#### Test File 9: `DeleteRecordToolTests.cs`

| Test | Description |
|------|-------------|
| `DeleteRecord_EmptyEntityName_ReturnsError` | Error validation |
| `DeleteRecord_EmptyRecordId_ReturnsError` | Error validation |
| `DeleteRecord_InvalidGuid_ReturnsError` | GUID parse error |
| `DeleteRecord_NullEntityName_ReturnsError` | Null check |

#### Test File 10: `UpdateRecordToolTests.cs`

| Test | Description |
|------|-------------|
| `UpdateRecord_EmptyEntityName_ReturnsError` | Error validation |
| `UpdateRecord_EmptyRecordId_ReturnsError` | Error validation |
| `UpdateRecord_EmptyFieldsJson_ReturnsError` | Error validation |
| `UpdateRecord_InvalidGuid_ReturnsError` | GUID parse error |

#### Test File 11: `CreateRecordToolTests.cs`

| Test | Description |
|------|-------------|
| `CreateRecord_EmptyEntityName_ReturnsError` | Error validation |
| `CreateRecord_EmptyFieldsJson_ReturnsError` | Error validation |

#### Test File 12: `GetRecordToolTests.cs`

| Test | Description |
|------|-------------|
| `GetRecord_EmptyEntityName_ReturnsError` | Error validation |
| `GetRecord_EmptyRecordId_ReturnsError` | Error validation |
| `GetRecord_InvalidGuid_ReturnsError` | GUID parse error |

#### Test File 13: `ExecuteFetchXmlToolTests.cs`

| Test | Description |
|------|-------------|
| `ExecuteFetchXml_EmptyFetchXml_ReturnsError` | Error validation |

#### Test File 14: `SearchToolTests.cs`

| Test | Description |
|------|-------------|
| `Search_EmptySearchTerm_ReturnsError` | Error validation |
| `Search_SearchTermTooLong_ReturnsError` | >100 chars |

#### Test File 15: `WhoAmIToolTests.cs`

| Test | Description |
|------|-------------|
| `GetLanguageName_English_Returns1033` | Known LCID |
| `GetLanguageName_Unknown_ReturnsLcidText` | Unknown LCID fallback |
| `GetLanguageName_Vietnamese_Returns1066` | LCID 1066 |
| `BuildCompactText_FullResult_AllSectionsPresent` | Text has [User], [Environment], [Roles] |
| `BuildCompactText_EmptyOptionals_OmitsFields` | Empty fields not shown |

> **Note**: `BuildCompactText` and `GetLanguageName` are `private static` — will test via reflection or by calling `whoami()` with FakeXrmEasy mock.

#### Test File 16: `PublishCustomizationsToolTests.cs`

| Test | Description |
|------|-------------|
| `BuildParameterXml_SingleEntity_CorrectXml` | Single entity XML |
| `BuildParameterXml_MultipleEntities_AllIncluded` | Multiple entities |
| `BuildParameterXml_WithGlobalOptionSets_Included` | optionsets element |
| `BuildParameterXml_WithSiteMap_Included` | sitemaps element |
| `BuildParameterXml_NoExtras_EmptyElements` | Empty optionsets/sitemaps |

> **Note**: `BuildParameterXml` is `private static` — will test via reflection.

#### Test File 17: `InstructionResourcesTests.cs`

| Test | Description |
|------|-------------|
| `FormXmlInstructions_ReturnsNonEmpty` | Not null/empty |
| `FormXmlInstructions_ContainsBackupSection` | Critical backup info |
| `FormXmlInstructions_ContainsControlClassIds` | ClassIds present |
| `ViewInstructions_ReturnsNonEmpty` | Not null/empty |
| `ViewInstructions_ContainsLayoutXml` | LayoutXML section |
| `ViewInstructions_ContainsBackupSection` | Critical backup info |

### Phase 3: Skipped / Notes

#### Skipped Tests — Reason

| Class | Reason |
|-------|--------|
| `McpServerHost` | DI/hosting wiring — no business logic to test |
| `EntityParserHelper` | All methods use `ServiceClient` for metadata cache — not testable without complex mocking of Dataverse metadata + `ConcurrentDictionary` static state |
| `SchemaResources` | Reads embedded resources from `Assembly.GetExecutingAssembly()` — would return null in test assembly context |
| `GetSolutionComponentsTool` | ~530 lines, complex multi-query Dataverse interactions with metadata resolution — very hard to mock |
| `GetPluginTraceLogsTool` | FetchXML builder + formatter depend on Dataverse query response format |
| `ExecuteWebApiTool` | `ServiceClient.ExecuteWebRequest()` is hard to mock |
| `GetEntitiesMetadataTool` | Needs `MetadataService` async — not worth mocking |
| `GetEntityMetadataTool` | Needs `MetadataService` async — not worth mocking |
| `GetGlobalOptionSetsTool` | Needs `ServiceClient.Execute()` |
| `GetMessagesTool` | Needs `MetadataService` async |

---

## Implementation Details

### Namespace

```csharp
namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;
```

### Pattern

```csharp
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

[TestClass]
public class XxxTests
{
    [TestMethod]
    public void Method_Scenario_ExpectedResult()
    {
        // Arrange
        // Act
        // Assert
    }
}
```

### Accessing Private Static Methods

For private static methods like `BuildParameterXml`, `BuildCompactText`, `GetLanguageName`, `CountFields`:

```csharp
using System.Reflection;

var method = typeof(TargetClass).GetMethod("MethodName", 
    BindingFlags.NonPublic | BindingFlags.Static);
var result = method.Invoke(null, new object[] { arg1, arg2 });
```

### Creating Test Metadata Objects

```csharp
// EntityMetadata
var meta = new EntityMetadata { LogicalName = "account" };
typeof(EntityMetadata).GetProperty("Attributes")
    .SetValue(meta, new AttributeMetadata[] { ... });

// Entity with attributes
var entity = new Entity("account", Guid.NewGuid());
entity["name"] = "Test Account";
entity.FormattedValues["statuscode"] = "Active";
```

---

## Execution Order

| Step | Test File | Est. Tests |
|------|-----------|-----------|
| 1 | `FetchXmlPagingHelperTests.cs` | 7 |
| 2 | `DataverseValueFormatterTests.cs` | 16 |
| 3 | `CompactFormatterTests.cs` | 14 |
| 4 | `MarkdownFormatterTests.cs` | 9 |
| 5 | `WebApiResponseFormatterTests.cs` | 9 |
| 6 | `MessageDiscoveryHelperTests.cs` | 6 |
| 7 | `StructuredResultsTests.cs` | 6 |
| 8 | `ParseRecordUrlToolTests.cs` | 16 |
| 9 | `DeleteRecordToolTests.cs` | 4 |
| 10 | `UpdateRecordToolTests.cs` | 4 |
| 11 | `CreateRecordToolTests.cs` | 2 |
| 12 | `GetRecordToolTests.cs` | 3 |
| 13 | `ExecuteFetchXmlToolTests.cs` | 1 |
| 14 | `SearchToolTests.cs` | 2 |
| 15 | `WhoAmIToolTests.cs` | 5 |
| 16 | `PublishCustomizationsToolTests.cs` | 5 |
| 17 | `InstructionResourcesTests.cs` | 6 |
| **Total** | **17 files** | **~113 tests** |

---

## Key Decision: Accessing Private Methods

Some tool classes have useful helper logic in **private static** methods (e.g., `BuildParameterXml`, `CountFields`, `BuildCompactText`). Options:

1. **Reflection** (chosen approach): Test private methods via `MethodInfo.Invoke()` — works without touching source code
2. **Test via public API**: Call the public tool method with FakeXrmEasy mock — more integration-like
3. **Skip**: If method is too tightly coupled to Dataverse

We'll use **option 1** for pure logic methods and **option 2** for validation tests on tool entry points (pass/fail on bad inputs).

---

## FakeXrmEasy Usage

For tool entry point tests that need a `ServiceClient`, we'll use FakeXrmEasy to create a fake `IOrganizationService`. However, since tools take `ServiceClient` (not `IOrganizationService`), input validation tests should work by passing `null` for `ServiceClient` and only testing error paths that don't reach Dataverse calls.

---

## File Summary

```
DynamicsCrm.DevKit.UnitTests/
└── Cli/
    └── Mcp/
        ├── FetchXmlPagingHelperTests.cs
        ├── DataverseValueFormatterTests.cs
        ├── CompactFormatterTests.cs
        ├── MarkdownFormatterTests.cs
        ├── WebApiResponseFormatterTests.cs
        ├── MessageDiscoveryHelperTests.cs
        ├── StructuredResultsTests.cs
        ├── ParseRecordUrlToolTests.cs
        ├── DeleteRecordToolTests.cs
        ├── UpdateRecordToolTests.cs
        ├── CreateRecordToolTests.cs
        ├── GetRecordToolTests.cs
        ├── ExecuteFetchXmlToolTests.cs
        ├── SearchToolTests.cs
        ├── WhoAmIToolTests.cs
        ├── PublishCustomizationsToolTests.cs
        └── InstructionResourcesTests.cs
```
