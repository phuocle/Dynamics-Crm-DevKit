using Microsoft.VisualStudio.TestTools.UnitTesting;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text.Json;

using DynamicsCrm.DevKit.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.SearchRecords;

/// <summary>
/// Tests for SearchRecordsTool private static methods:
/// FormatSearchResults, FormatAttributes, FormatHighlights, BuildSearchRequestBody, EscapePipe,
/// FormatStatusResults, FormatProvisionStatus.
/// All accessed via reflection on the public SearchRecordsTool type.
/// </summary>
[TestClass]
public class SearchRecordsToolTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.SearchRecordsTool);

    // ──────────────────────────────────────────────
    // FormatSearchResults (private static)
    // ──────────────────────────────────────────────

    private static readonly Type SearchRecordsResultType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.SearchRecordsTool)
        .Assembly.GetType("DynamicsCrm.DevKit.Cli.Mcp.Tools.Models.SearchRecordsResult")!;

    private static readonly MethodInfo BuildSearchResultMethod = ToolType
        .GetMethod("BuildSearchResult", BindingFlags.NonPublic | BindingFlags.Static, null,
            new[] { typeof(string), typeof(string) }, null)!;

    private static readonly MethodInfo BuildSearchTextMethod = ToolType
        .GetMethod("BuildSearchText", BindingFlags.NonPublic | BindingFlags.Static, null,
            new[] { SearchRecordsResultType, typeof(long) }, null)!;

    private static object BuildSearchResult(string jsonResponse, string searchTerm)
    {
        return BuildSearchResultMethod.Invoke(null, new object[] { jsonResponse, searchTerm })!;
    }

    private static string BuildSearchText(object result, long elapsedMs)
    {
        return (string)BuildSearchTextMethod.Invoke(null, new object[] { result, elapsedMs })!;
    }

    private static string FormatSearchResults(string jsonResponse, string searchTerm)
    {
        return BuildSearchText(BuildSearchResult(jsonResponse, searchTerm), 0);
    }

    [TestMethod]
    public void FormatSearchResults_EmptyValueArray_ShowsNoRecords()
    {
        var json = JsonSerializer.Serialize(new { value = Array.Empty<object>(), count = 0 });
        var result = FormatSearchResults(json, "test");

        Assert.IsTrue(result.Contains("Found 0 results (0 total) for \"test\" in 0ms."));
    }

    [TestMethod]
    public void FormatSearchResults_WithRecords_ShowsTable()
    {
        var json = JsonSerializer.Serialize(new
        {
            value = new[]
            {
                new
                {
                    id = "11111111-1111-1111-1111-111111111111",
                    entityName = "account",
                    objectTypeCode = 1,
                    score = 12.5,
                    attributes = new Dictionary<string, object> { ["name"] = "Contoso" },
                    highlights = new Dictionary<string, string[]> { ["name"] = new[] { "{crmhit}Contoso{/crmhit}" } }
                }
            },
            count = 1
        });

        var result = FormatSearchResults(json, "Contoso");

        Assert.IsTrue(result.Contains("Found 1 result (1 total) for \"Contoso\" in 0ms."));
    }

    [TestMethod]
    public void FormatSearchResults_WithError_ShowsErrorMessage()
    {
        var json = JsonSerializer.Serialize(new
        {
            Error = new { Code = "SearchFailed", Message = "Something went wrong" }
        });

        var result = BuildSearchResult(json, "test");

        var errorCode = (string)SearchRecordsResultType.GetProperty("ErrorCode")!.GetValue(result)!;
        var errorMessage = (string)SearchRecordsResultType.GetProperty("ErrorMessage")!.GetValue(result)!;

        Assert.AreEqual("SearchFailed", errorCode);
        Assert.IsTrue(errorMessage.Contains("Something went wrong"));
    }

    [TestMethod]
    public void FormatSearchResults_InvalidJson_FallsBackToRawOutput()
    {
        // BuildSearchResult does not swallow malformed JSON — it bubbles up to
        // the top-level catch in search_records, which routes to ThrowException.
        try
        {
            BuildSearchResult("not valid json", "test");
            Assert.Fail("Expected JsonException was not thrown.");
        }
        catch (TargetInvocationException ex) when (ex.InnerException is System.Text.Json.JsonException)
        {
            // expected — malformed JSON propagates (wrapped by reflection invoke)
        }
    }

    [TestMethod]
    public void FormatSearchResults_MultipleRecords_ShowsCount()
    {
        var json = JsonSerializer.Serialize(new
        {
            value = new[]
            {
                new { id = "aaa", entityName = "account", objectTypeCode = 1, score = 10.0, attributes = new Dictionary<string, object>(), highlights = new Dictionary<string, string[]>() },
                new { id = "bbb", entityName = "contact", objectTypeCode = 2, score = 8.0, attributes = new Dictionary<string, object>(), highlights = new Dictionary<string, string[]>() },
                new { id = "ccc", entityName = "lead", objectTypeCode = 4, score = 5.0, attributes = new Dictionary<string, object>(), highlights = new Dictionary<string, string[]>() },
            },
            count = 42
        });

        var result = FormatSearchResults(json, "xyz");

        Assert.IsTrue(result.Contains("Found 3 results (42 total) for \"xyz\" in 0ms."));
    }

    // ──────────────────────────────────────────────
    // FormatAttributes (private static)
    // ──────────────────────────────────────────────

    // FormatAttributes was removed in the MCP refactor. Attributes are now
    // preserved as a raw Dictionary<string,object> on SearchRecordEntry. These
    // tests verify BuildSearchResult carries the attributes through unchanged.
    private static readonly Type SearchRecordEntryType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.SearchRecordsTool)
        .Assembly.GetType("DynamicsCrm.DevKit.Cli.Mcp.Tools.Models.SearchRecordEntry")!;

    private static Dictionary<string, object> GetFirstRecordAttributes(object searchResult)
    {
        var records = (System.Collections.IList)SearchRecordsResultType.GetProperty("Records")!.GetValue(searchResult)!;
        return (Dictionary<string, object>)SearchRecordEntryType.GetProperty("Attributes")!.GetValue(records[0])!;
    }

    private static object BuildSearchResultWithAttributes(Dictionary<string, object> attributes)
    {
        var json = JsonSerializer.Serialize(new
        {
            value = new[]
            {
                new
                {
                    id = "00000000-0000-0000-0000-000000000000",
                    entityName = "account",
                    objectTypeCode = 1,
                    score = 1.0,
                    attributes = attributes ?? new Dictionary<string, object>(),
                    highlights = new Dictionary<string, string[]>()
                }
            },
            count = 1
        });
        return BuildSearchResult(json, "test");
    }

    [TestMethod]
    public void FormatAttributes_NullAttributes_ReturnsEmpty()
    {
        var result = BuildSearchResultWithAttributes(null!);
        var attrs = GetFirstRecordAttributes(result);
        Assert.AreEqual(0, attrs.Count);
    }

    [TestMethod]
    public void FormatAttributes_EmptyAttributes_ReturnsEmpty()
    {
        var result = BuildSearchResultWithAttributes(new Dictionary<string, object>());
        var attrs = GetFirstRecordAttributes(result);
        Assert.AreEqual(0, attrs.Count);
    }

    [TestMethod]
    public void FormatAttributes_SimpleAttributes_FormatsCorrectly()
    {
        var attrs = new Dictionary<string, object>
        {
            ["name"] = "Contoso",
            ["city"] = "Seattle"
        };

        var result = BuildSearchResultWithAttributes(attrs);
        var preserved = GetFirstRecordAttributes(result);

        Assert.AreEqual("Contoso", preserved["name"].ToString());
        Assert.AreEqual("Seattle", preserved["city"].ToString());
    }

    [TestMethod]
    public void FormatAttributes_FiltersSearchAnnotations()
    {
        // Annotation filtering was removed in the refactor — BuildSearchResult
        // now preserves ALL attributes (including @search.* and @OData.* keys)
        // so the structured payload is a faithful copy of the API response.
        var attrs = new Dictionary<string, object>
        {
            ["name"] = "Contoso",
            ["@search.score"] = 10.5,
            ["accountid@OData.Community.Display.V1.FormattedValue"] = "formatted"
        };

        var result = BuildSearchResultWithAttributes(attrs);
        var preserved = GetFirstRecordAttributes(result);

        Assert.AreEqual("Contoso", preserved["name"].ToString());
        Assert.IsTrue(preserved.ContainsKey("@search.score"));
        Assert.IsTrue(preserved.ContainsKey("accountid@OData.Community.Display.V1.FormattedValue"));
    }

    [TestMethod]
    public void FormatAttributes_NullValue_Excluded()
    {
        // Null values are no longer excluded — BuildSearchResult copies the
        // Attributes dictionary verbatim from the deserialized API response.
        var attrs = new Dictionary<string, object>
        {
            ["name"] = "Contoso",
            ["nullfield"] = null!
        };

        var result = BuildSearchResultWithAttributes(attrs);
        var preserved = GetFirstRecordAttributes(result);

        Assert.AreEqual("Contoso", preserved["name"].ToString());
        Assert.IsTrue(preserved.ContainsKey("nullfield"));
    }

    // ──────────────────────────────────────────────
    // FormatHighlights (private static)
    // ──────────────────────────────────────────────

    // FormatHighlights was removed in the MCP refactor. Highlights are now
    // preserved as a raw Dictionary<string,string[]> on SearchRecordEntry.
    private static Dictionary<string, string[]> GetFirstRecordHighlights(object searchResult)
    {
        var records = (System.Collections.IList)SearchRecordsResultType.GetProperty("Records")!.GetValue(searchResult)!;
        return (Dictionary<string, string[]>)SearchRecordEntryType.GetProperty("Highlights")!.GetValue(records[0])!;
    }

    private static object BuildSearchResultWithHighlights(Dictionary<string, string[]> highlights)
    {
        var json = JsonSerializer.Serialize(new
        {
            value = new[]
            {
                new
                {
                    id = "00000000-0000-0000-0000-000000000000",
                    entityName = "account",
                    objectTypeCode = 1,
                    score = 1.0,
                    attributes = new Dictionary<string, object>(),
                    highlights = highlights ?? new Dictionary<string, string[]>()
                }
            },
            count = 1
        });
        return BuildSearchResult(json, "test");
    }

    [TestMethod]
    public void FormatHighlights_NullHighlights_ReturnsEmpty()
    {
        var result = BuildSearchResultWithHighlights(null!);
        var hl = GetFirstRecordHighlights(result);
        Assert.AreEqual(0, hl.Count);
    }

    [TestMethod]
    public void FormatHighlights_EmptyHighlights_ReturnsEmpty()
    {
        var result = BuildSearchResultWithHighlights(new Dictionary<string, string[]>());
        var hl = GetFirstRecordHighlights(result);
        Assert.AreEqual(0, hl.Count);
    }

    [TestMethod]
    public void FormatHighlights_ReplacesCrmHitTags_WithBold()
    {
        // crmhit tag replacement was removed in the refactor — highlights are
        // preserved verbatim from the API response in the structured payload.
        var highlights = new Dictionary<string, string[]>
        {
            ["name"] = new[] { "{crmhit}Contoso{/crmhit} Ltd" }
        };

        var result = BuildSearchResultWithHighlights(highlights);
        var hl = GetFirstRecordHighlights(result);

        Assert.IsTrue(hl["name"][0].Contains("{crmhit}Contoso{/crmhit} Ltd"));
    }

    [TestMethod]
    public void FormatHighlights_MultipleFields_SemicolonSeparated()
    {
        var highlights = new Dictionary<string, string[]>
        {
            ["name"] = new[] { "test" },
            ["email"] = new[] { "test@test.com" }
        };

        var result = BuildSearchResultWithHighlights(highlights);
        var hl = GetFirstRecordHighlights(result);

        Assert.IsTrue(hl.ContainsKey("name"));
        Assert.IsTrue(hl.ContainsKey("email"));
    }

    [TestMethod]
    public void FormatHighlights_MultipleValues_CommaSeparated()
    {
        var highlights = new Dictionary<string, string[]>
        {
            ["name"] = new[] { "hit1", "hit2" }
        };

        var result = BuildSearchResultWithHighlights(highlights);
        var hl = GetFirstRecordHighlights(result);

        Assert.AreEqual(2, hl["name"].Length);
        Assert.AreEqual("hit1", hl["name"][0]);
        Assert.AreEqual("hit2", hl["name"][1]);
    }

    // ──────────────────────────────────────────────
    // BuildSearchRequestBody (private static)
    // ──────────────────────────────────────────────

    private static readonly MethodInfo BuildSearchRequestBodyMethod = ToolType
        .GetMethod("BuildSearchRequestBody", BindingFlags.NonPublic | BindingFlags.Static, null,
            new[] { typeof(string), typeof(List<string>), typeof(int), typeof(string) }, null)!;

    private static string BuildSearchRequestBody(string searchTerm, List<string>? entities, int top, string? filter)
    {
        return (string)BuildSearchRequestBodyMethod.Invoke(null, new object?[] { searchTerm, entities, top, filter })!;
    }

    [TestMethod]
    public void BuildSearchRequestBody_BasicQuery_SetsSearchAndTop()
    {
        var json = BuildSearchRequestBody("Contoso", null, 50, "");
        var doc = JsonDocument.Parse(json);
        var root = doc.RootElement;

        Assert.AreEqual("Contoso", root.GetProperty("search").GetString());
        Assert.IsTrue(root.GetProperty("count").GetBoolean());
        Assert.AreEqual(50, root.GetProperty("top").GetInt32());
    }

    [TestMethod]
    public void BuildSearchRequestBody_WithEntities_SetsEntitiesJson()
    {
        var json = BuildSearchRequestBody("test", new List<string> { "account", "contact" }, 10, "");
        var doc = JsonDocument.Parse(json);
        var root = doc.RootElement;

        Assert.IsTrue(root.TryGetProperty("entities", out var entitiesProp));
        var entityJson = entitiesProp.GetString()!;
        Assert.IsTrue(entityJson.Contains("account"));
        Assert.IsTrue(entityJson.Contains("contact"));
    }

    [TestMethod]
    public void BuildSearchRequestBody_WithFilter_SetsFilter()
    {
        var json = BuildSearchRequestBody("test", null, 50, "statecode eq 0");
        var doc = JsonDocument.Parse(json);
        var root = doc.RootElement;

        Assert.AreEqual("statecode eq 0", root.GetProperty("filter").GetString());
    }

    [TestMethod]
    public void BuildSearchRequestBody_EmptyEntities_NoEntitiesParameter()
    {
        var json = BuildSearchRequestBody("test", null, 50, "");
        var doc = JsonDocument.Parse(json);
        var root = doc.RootElement;

        Assert.IsFalse(root.TryGetProperty("entities", out _));
    }

    [TestMethod]
    public void BuildSearchRequestBody_EmptyFilter_NoFilterParameter()
    {
        var json = BuildSearchRequestBody("test", null, 50, "");
        var doc = JsonDocument.Parse(json);
        var root = doc.RootElement;

        Assert.IsFalse(root.TryGetProperty("filter", out _));
    }

    // ──────────────────────────────────────────────
    // EscapePipe (private static)
    // ──────────────────────────────────────────────

    // EscapePipe moved from SearchRecordsTool to MarkdownFormatter (private static).
    private static readonly Type MarkdownFormatterType = typeof(DynamicsCrm.DevKit.Cli.Mcp.McpServerHost).Assembly
        .GetType("DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper.MarkdownFormatter")!;

    private static readonly MethodInfo EscapePipeMethod = MarkdownFormatterType
        .GetMethod("EscapePipe", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static string EscapePipe(string value)
    {
        return (string)EscapePipeMethod.Invoke(null, new object[] { value })!;
    }

    [TestMethod]
    public void EscapePipe_PipeReplacedWithEscaped()
    {
        Assert.AreEqual("a\\|b", EscapePipe("a|b"));
    }

    [TestMethod]
    public void EscapePipe_NewlineReplacedWithSpace()
    {
        Assert.AreEqual("a b", EscapePipe("a\nb"));
    }

    [TestMethod]
    public void EscapePipe_CarriageReturnRemoved()
    {
        Assert.AreEqual("ab", EscapePipe("a\rb"));
    }

    [TestMethod]
    public void EscapePipe_NoSpecialChars_Unchanged()
    {
        Assert.AreEqual("hello world", EscapePipe("hello world"));
    }

    // ──────────────────────────────────────────────
    // FormatStatusResults (private static)
    // ──────────────────────────────────────────────

    private static readonly MethodInfo BuildStatusResultMethod = ToolType
        .GetMethod("BuildStatusResult", BindingFlags.NonPublic | BindingFlags.Static, null,
            new[] { typeof(string), typeof(string) }, null)!;

    private static readonly MethodInfo BuildStatusTextMethod = ToolType
        .GetMethod("BuildStatusText", BindingFlags.NonPublic | BindingFlags.Static, null,
            new[] { SearchRecordsResultType }, null)!;

    private static readonly Type SearchStatusEntryType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.SearchRecordsTool)
        .Assembly.GetType("DynamicsCrm.DevKit.Cli.Mcp.Tools.Models.SearchStatusEntry")!;
    private static readonly Type SearchEntityStatusEntryType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.SearchRecordsTool)
        .Assembly.GetType("DynamicsCrm.DevKit.Cli.Mcp.Tools.Models.SearchEntityStatusEntry")!;
    private static readonly Type SearchManyToManyRelationshipEntryType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.SearchRecordsTool)
        .Assembly.GetType("DynamicsCrm.DevKit.Cli.Mcp.Tools.Models.SearchManyToManyRelationshipEntry")!;

    private static object BuildStatusResult(string statusJson, string? statisticsJson)
    {
        return BuildStatusResultMethod.Invoke(null, new object?[] { statusJson, statisticsJson })!;
    }

    private static string FormatStatusResults(string statusJson, string? statisticsJson)
    {
        return (string)BuildStatusTextMethod.Invoke(null, new object[] { BuildStatusResult(statusJson, statisticsJson) })!;
    }

    private static object GetStatus(object searchResult)
        => SearchRecordsResultType.GetProperty("Status")!.GetValue(searchResult)!;

    [TestMethod]
    public void FormatStatusResults_NotProvisioned_ShowsStatus()
    {
        var statusJson = JsonSerializer.Serialize(new
        {
            value = new { status = "notprovisioned", lockboxstatus = "Unknown" }
        });

        var result = FormatStatusResults(statusJson, null);

        Assert.IsTrue(result.Contains("Search Not Provisioned | 0 indexed entities."));
    }

    [TestMethod]
    public void FormatStatusResults_Provisioned_ShowsEntities()
    {
        var statusJson = JsonSerializer.Serialize(new
        {
            value = new
            {
                status = "provisioned",
                lockboxstatus = "Disabled",
                cmkstatus = "Disabled",
                entitystatusresults = new[]
                {
                    new
                    {
                        entitylogicalname = "account",
                        objecttypecode = 1,
                        primarynamefield = "name",
                        lastdatasynctimestamp = "12345!01/01/2026 00:00:00",
                        entitystatus = "EntitySyncComplete",
                        searchableindexedfieldinfomap = new Dictionary<string, object>
                        {
                            ["name"] = new { indexfieldname = "d_0" },
                            ["accountnumber"] = new { indexfieldname = "a0w" }
                        }
                    }
                }
            }
        });

        var statusObj = BuildStatusResult(statusJson, null);
        var text = (string)BuildStatusTextMethod.Invoke(null, new object[] { statusObj })!;
        var status = GetStatus(statusObj);
        var entities = (System.Collections.IList)SearchStatusEntryType.GetProperty("EntityStatusResults")!.GetValue(status)!;
        var entity0 = entities[0];
        var indexedFields = (List<string>)SearchEntityStatusEntryType.GetProperty("IndexedFields")!.GetValue(entity0)!;

        Assert.IsTrue(text.Contains("Search Provisioned | 1 indexed entities."));
        Assert.AreEqual("account", SearchEntityStatusEntryType.GetProperty("EntityLogicalName")!.GetValue(entity0));
        Assert.AreEqual("EntitySyncComplete", SearchEntityStatusEntryType.GetProperty("EntityStatus")!.GetValue(entity0));
        Assert.AreEqual(2, indexedFields.Count);
        CollectionAssert.Contains(indexedFields, "accountnumber");
        CollectionAssert.Contains(indexedFields, "name");
    }

    [TestMethod]
    public void FormatStatusResults_WithStatistics_ShowsStorageAndDocCount()
    {
        var statusJson = JsonSerializer.Serialize(new
        {
            value = new
            {
                status = "provisioned",
                lockboxstatus = "Disabled",
                entitystatusresults = Array.Empty<object>()
            }
        });
        var statsJson = JsonSerializer.Serialize(new
        {
            value = new
            {
                storagesizeinbytes = 1341090,
                storagesizeinmb = 1,
                documentcount = 1309
            }
        });

        var statusObj = BuildStatusResult(statusJson, statsJson);
        var text = (string)BuildStatusTextMethod.Invoke(null, new object[] { statusObj })!;

        Assert.IsTrue(text.Contains("1 MB"));
        Assert.IsTrue(text.Contains("1309 docs"));

        var stats = SearchRecordsResultType.GetProperty("Statistics")!.GetValue(statusObj);
        Assert.IsNotNull(stats);
        var statsType = stats!.GetType();
        Assert.AreEqual(1341090L, statsType.GetProperty("StorageSizeInBytes")!.GetValue(stats));
        Assert.AreEqual(1309L, statsType.GetProperty("DocumentCount")!.GetValue(stats));
    }

    [TestMethod]
    public void FormatStatusResults_InvalidJson_FallsBackToRaw()
    {
        // BuildStatusResult does not swallow malformed JSON — it bubbles up to
        // the top-level catch in search_records, which routes to ThrowException.
        try
        {
            BuildStatusResult("not valid json", null);
            Assert.Fail("Expected JsonException was not thrown.");
        }
        catch (TargetInvocationException ex) when (ex.InnerException is System.Text.Json.JsonException)
        {
            // expected — malformed JSON propagates (wrapped by reflection invoke)
        }
    }

    [TestMethod]
    public void FormatStatusResults_WithManyToMany_ShowsRelationships()
    {
        var statusJson = JsonSerializer.Serialize(new
        {
            value = new
            {
                status = "provisioned",
                lockboxstatus = "Disabled",
                entitystatusresults = new[]
                {
                    new
                    {
                        entitylogicalname = "account",
                        objecttypecode = 1,
                        primarynamefield = "name",
                        entitystatus = "EntitySyncComplete",
                        searchableindexedfieldinfomap = new Dictionary<string, object>
                        {
                            ["name"] = new { indexfieldname = "d_0" }
                        }
                    }
                },
                manytomanyrelationshipsyncstatus = new[]
                {
                    new
                    {
                        relationshipName = "accountleads_association",
                        searchEntity = "account",
                        relatedEntity = "lead",
                        intersectEntity = "accountleads"
                    }
                }
            }
        });

        var statusObj = BuildStatusResult(statusJson, null);
        var status = GetStatus(statusObj);
        var m2m = (System.Collections.IList)SearchStatusEntryType.GetProperty("ManyToManyRelationshipSyncStatus")!.GetValue(status)!;
        Assert.AreEqual(1, m2m.Count);
        var rel0 = m2m[0];
        Assert.AreEqual("accountleads_association", SearchManyToManyRelationshipEntryType.GetProperty("RelationshipName")!.GetValue(rel0));
        Assert.AreEqual("account", SearchManyToManyRelationshipEntryType.GetProperty("SearchEntity")!.GetValue(rel0));
        Assert.AreEqual("lead", SearchManyToManyRelationshipEntryType.GetProperty("RelatedEntity")!.GetValue(rel0));
        Assert.AreEqual("accountleads", SearchManyToManyRelationshipEntryType.GetProperty("IntersectEntity")!.GetValue(rel0));
    }

    // ──────────────────────────────────────────────
    // FormatProvisionStatus (private static)
    // ──────────────────────────────────────────────

    private static readonly MethodInfo FormatProvisionStatusMethod = ToolType
        .GetMethod("FormatProvisionStatus", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static string FormatProvisionStatus(string status)
    {
        return (string)FormatProvisionStatusMethod.Invoke(null, new object[] { status })!;
    }

    [TestMethod]
    public void FormatProvisionStatus_NotProvisioned_FormatsCorrectly()
    {
        Assert.AreEqual("Not Provisioned", FormatProvisionStatus("notprovisioned"));
    }

    [TestMethod]
    public void FormatProvisionStatus_Provisioned_FormatsCorrectly()
    {
        Assert.AreEqual("Provisioned", FormatProvisionStatus("provisioned"));
    }

    [TestMethod]
    public void FormatProvisionStatus_InProgress_FormatsCorrectly()
    {
        Assert.AreEqual("Provisioning In Progress", FormatProvisionStatus("provisioninginprogress"));
    }

    [TestMethod]
    public void FormatProvisionStatus_Unknown_ReturnsAsIs()
    {
        Assert.AreEqual("somethingelse", FormatProvisionStatus("somethingelse"));
    }

    [TestMethod]
    public void FormatProvisionStatus_Empty_ReturnsUnknown()
    {
        Assert.AreEqual("Unknown", FormatProvisionStatus(""));
    }

    [TestMethod]
    public void FormatProvisionStatus_Null_ReturnsUnknown()
    {
        Assert.AreEqual("Unknown", FormatProvisionStatus(null!));
    }

    // HandleSearchException / BuildFullExceptionMessage were removed in the MCP
    // refactor. Exception handling now routes through McpToolResults.ThrowException,
    // which classifies the exception, embeds the message chain (using "→" for
    // inner exceptions), and returns a [Error]-prefixed CallToolResult.
    private static readonly Type McpToolResultsType = typeof(DynamicsCrm.DevKit.Cli.Mcp.McpServerHost).Assembly
        .GetType("DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper.McpToolResults")!;

    private static readonly MethodInfo ThrowExceptionMethod = McpToolResultsType
        .GetMethod("ThrowException", BindingFlags.Static | BindingFlags.NonPublic, null,
            new[] { typeof(Exception) }, null)!;

    private static CallToolResult InvokeThrowException(Exception ex)
    {
        return (CallToolResult)ThrowExceptionMethod.Invoke(null, new object[] { ex })!;
    }

    [TestMethod]
    public void HandleSearchException_ErrorCodeInMessage_ReturnsEnableGuide()
    {
        // Search-specific enable-guide detection was removed; ThrowException now
        // classifies a plain Exception as "Exception" and surfaces the message.
        var ex = new Exception("Request failed with error 0x80048d0b");
        var result = InvokeThrowException(ex);

        Assert.IsTrue(result.GetText().Contains("0x80048d0b"));
        Assert.IsTrue(result.GetText().StartsWith("[Error]"));
    }

    [TestMethod]
    public void HandleSearchException_ErrorCodeInInnerException_ReturnsEnableGuide()
    {
        var inner = new Exception("SearchNotEnabled: feature is not provisioned");
        var outer = new Exception("Request failed", inner);
        var result = InvokeThrowException(outer);

        Assert.IsTrue(result.GetText().Contains("Request failed"));
        Assert.IsTrue(result.GetText().Contains("SearchNotEnabled: feature is not provisioned"));
    }

    [TestMethod]
    public void HandleSearchException_ErrorCodeInDeepInnerException_ReturnsEnableGuide()
    {
        var deepInner = new Exception("Error code 0x80060203");
        var inner = new Exception("Wrapper", deepInner);
        var outer = new Exception("Request failed", inner);
        var result = InvokeThrowException(outer);

        // ThrowException walks one extra inner level via "→".
        Assert.IsTrue(result.GetText().Contains("Request failed"));
        Assert.IsTrue(result.GetText().Contains("Wrapper"));
        Assert.IsTrue(result.GetText().Contains("0x80060203"));
    }

    [TestMethod]
    public void HandleSearchException_GenericError_IncludesInnerExceptionMessage()
    {
        var inner = new Exception("Detailed API error info");
        var outer = new Exception("Operation failed", inner);
        var result = InvokeThrowException(outer);

        // ThrowException includes the outer message and the inner exception's
        // type+message in an "InnerException:" line. The "→" separator only
        // appears when there is a deeper nested inner exception.
        Assert.IsTrue(result.GetText().Contains("Operation failed"));
        Assert.IsTrue(result.GetText().Contains("Detailed API error info"));
        Assert.IsTrue(result.GetText().Contains("InnerException"));
    }

    [TestMethod]
    public void HandleSearchException_NoInnerException_ShowsMessageOnly()
    {
        var ex = new Exception("Simple error");
        var result = InvokeThrowException(ex);

        Assert.IsTrue(result.GetText().Contains("Simple error"));
        Assert.IsFalse(result.GetText().Contains("InnerException"));
    }

    // ──────────────────────────────────────────────
    // BuildFullExceptionMessage (private static)
    // ──────────────────────────────────────────────
    // BuildFullExceptionMessage was removed; ThrowException now builds the
    // exception message chain (including inner exceptions via "→").

    [TestMethod]
    public void BuildFullExceptionMessage_SingleException_ReturnsMessage()
    {
        var ex = new Exception("test error");
        var result = InvokeThrowException(ex);

        Assert.IsTrue(result.GetText().Contains("test error"));
    }

    [TestMethod]
    public void BuildFullExceptionMessage_NestedExceptions_ReturnsAllMessages()
    {
        var inner = new Exception("inner detail");
        var outer = new Exception("outer wrapper", inner);
        var result = InvokeThrowException(outer);

        Assert.IsTrue(result.GetText().Contains("outer wrapper"));
        Assert.IsTrue(result.GetText().Contains("inner detail"));
    }

    // ──────────────────────────────────────────────
    // FormatStatusResults — 0 fields cosmetic fix
    // ──────────────────────────────────────────────

    [TestMethod]
    public void FormatStatusResults_EntityWithZeroFields_ShowsNoTrailingColon()
    {
        var statusJson = JsonSerializer.Serialize(new
        {
            value = new
            {
                status = "provisioned",
                lockboxstatus = "Disabled",
                entitystatusresults = new[]
                {
                    new
                    {
                        entitylogicalname = "account",
                        objecttypecode = 1,
                        primarynamefield = "name",
                        entitystatus = "EntitySyncComplete",
                        searchableindexedfieldinfomap = (Dictionary<string, object>)null!
                    }
                }
            }
        });

        var statusObj = BuildStatusResult(statusJson, null);
        var status = GetStatus(statusObj);
        var entities = (System.Collections.IList)SearchStatusEntryType.GetProperty("EntityStatusResults")!.GetValue(status)!;
        var entity0 = entities[0];
        var indexedFields = (List<string>?)SearchEntityStatusEntryType.GetProperty("IndexedFields")!.GetValue(entity0);

        // Entity with null searchableindexedfieldinfomap yields null IndexedFields
        // (the ?. chain short-circuits), with no trailing colon in the one-line text.
        Assert.IsNull(indexedFields);
        var text = (string)BuildStatusTextMethod.Invoke(null, new object[] { statusObj })!;
        Assert.IsFalse(text.Contains("0 fields:"));
    }
}
