using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text.Json;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

/// <summary>
/// Tests for SearchRecordsTool private static methods:
/// FormatSearchResults, FormatAttributes, FormatHighlights, BuildSearchRequestBody, EscapePipe,
/// FormatStatusResults, FormatProvisionStatus.
/// All accessed via reflection on the public SearchRecordsTool type.
/// </summary>
[TestClass]
public class SearchToolTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.SearchRecordsTool);

    // ──────────────────────────────────────────────
    // FormatSearchResults (private static)
    // ──────────────────────────────────────────────

    private static readonly MethodInfo FormatSearchResultsMethod = ToolType
        .GetMethod("FormatSearchResults", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static string FormatSearchResults(string jsonResponse, string searchTerm)
    {
        return (string)FormatSearchResultsMethod.Invoke(null, new object[] { jsonResponse, searchTerm })!;
    }

    [TestMethod]
    public void FormatSearchResults_EmptyValueArray_ShowsNoRecords()
    {
        var json = JsonSerializer.Serialize(new { value = Array.Empty<object>(), count = 0 });
        var result = FormatSearchResults(json, "test");

        Assert.IsTrue(result.Contains("[Search: \"test\"]"));
        Assert.IsTrue(result.Contains("0 results"));
        Assert.IsTrue(result.Contains("No matching records found"));
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

        Assert.IsTrue(result.Contains("[Search: \"Contoso\"]"));
        Assert.IsTrue(result.Contains("1 result"));
        Assert.IsTrue(result.Contains("| Entity | Id | Score | Attributes | Highlights |"));
        Assert.IsTrue(result.Contains("account"));
        Assert.IsTrue(result.Contains("11111111-1111-1111-1111-111111111111"));
    }

    [TestMethod]
    public void FormatSearchResults_WithError_ShowsErrorMessage()
    {
        var json = JsonSerializer.Serialize(new
        {
            error = new { code = "SearchFailed", message = "Something went wrong" }
        });

        var result = FormatSearchResults(json, "test");

        Assert.IsTrue(result.Contains("Error: SearchFailed"));
        Assert.IsTrue(result.Contains("Something went wrong"));
    }

    [TestMethod]
    public void FormatSearchResults_InvalidJson_FallsBackToRawOutput()
    {
        var result = FormatSearchResults("not valid json", "test");

        Assert.IsTrue(result.Contains("[Search: \"test\"]"));
        Assert.IsTrue(result.Contains("not valid json"));
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

        Assert.IsTrue(result.Contains("3 results (total: 42)"));
    }

    // ──────────────────────────────────────────────
    // FormatAttributes (private static)
    // ──────────────────────────────────────────────

    private static readonly MethodInfo FormatAttributesMethod = ToolType
        .GetMethod("FormatAttributes", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static string FormatAttributes(Dictionary<string, object> attributes)
    {
        return (string)FormatAttributesMethod.Invoke(null, new object[] { attributes })!;
    }

    [TestMethod]
    public void FormatAttributes_NullAttributes_ReturnsEmpty()
    {
        Assert.AreEqual("", FormatAttributes(null!));
    }

    [TestMethod]
    public void FormatAttributes_EmptyAttributes_ReturnsEmpty()
    {
        Assert.AreEqual("", FormatAttributes(new Dictionary<string, object>()));
    }

    [TestMethod]
    public void FormatAttributes_SimpleAttributes_FormatsCorrectly()
    {
        var attrs = new Dictionary<string, object>
        {
            ["name"] = "Contoso",
            ["city"] = "Seattle"
        };

        var result = FormatAttributes(attrs);

        Assert.IsTrue(result.Contains("city=Seattle"));
        Assert.IsTrue(result.Contains("name=Contoso"));
        Assert.IsTrue(result.Contains("; "));
    }

    [TestMethod]
    public void FormatAttributes_FiltersSearchAnnotations()
    {
        var attrs = new Dictionary<string, object>
        {
            ["name"] = "Contoso",
            ["@search.score"] = 10.5,
            ["accountid@OData.Community.Display.V1.FormattedValue"] = "formatted"
        };

        var result = FormatAttributes(attrs);

        Assert.IsTrue(result.Contains("name=Contoso"));
        Assert.IsFalse(result.Contains("@search."));
        Assert.IsFalse(result.Contains("@OData"));
    }

    [TestMethod]
    public void FormatAttributes_NullValue_Excluded()
    {
        var attrs = new Dictionary<string, object>
        {
            ["name"] = "Contoso",
            ["nullfield"] = null!
        };

        var result = FormatAttributes(attrs);

        Assert.IsTrue(result.Contains("name=Contoso"));
        Assert.IsFalse(result.Contains("nullfield"));
    }

    // ──────────────────────────────────────────────
    // FormatHighlights (private static)
    // ──────────────────────────────────────────────

    private static readonly MethodInfo FormatHighlightsMethod = ToolType
        .GetMethod("FormatHighlights", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static string FormatHighlights(Dictionary<string, string[]> highlights)
    {
        return (string)FormatHighlightsMethod.Invoke(null, new object[] { highlights })!;
    }

    [TestMethod]
    public void FormatHighlights_NullHighlights_ReturnsEmpty()
    {
        Assert.AreEqual("", FormatHighlights(null!));
    }

    [TestMethod]
    public void FormatHighlights_EmptyHighlights_ReturnsEmpty()
    {
        Assert.AreEqual("", FormatHighlights(new Dictionary<string, string[]>()));
    }

    [TestMethod]
    public void FormatHighlights_ReplacesCrmHitTags_WithBold()
    {
        var highlights = new Dictionary<string, string[]>
        {
            ["name"] = new[] { "{crmhit}Contoso{/crmhit} Ltd" }
        };

        var result = FormatHighlights(highlights);

        Assert.IsTrue(result.Contains("**Contoso**"));
        Assert.IsFalse(result.Contains("{crmhit}"));
        Assert.IsFalse(result.Contains("{/crmhit}"));
    }

    [TestMethod]
    public void FormatHighlights_MultipleFields_SemicolonSeparated()
    {
        var highlights = new Dictionary<string, string[]>
        {
            ["name"] = new[] { "test" },
            ["email"] = new[] { "test@test.com" }
        };

        var result = FormatHighlights(highlights);

        Assert.IsTrue(result.Contains("name:"));
        Assert.IsTrue(result.Contains("email:"));
        Assert.IsTrue(result.Contains("; "));
    }

    [TestMethod]
    public void FormatHighlights_MultipleValues_CommaSeparated()
    {
        var highlights = new Dictionary<string, string[]>
        {
            ["name"] = new[] { "hit1", "hit2" }
        };

        var result = FormatHighlights(highlights);

        Assert.IsTrue(result.Contains("name: hit1, hit2"));
    }

    // ──────────────────────────────────────────────
    // BuildSearchRequestBody (private static)
    // ──────────────────────────────────────────────

    private static readonly MethodInfo BuildSearchRequestBodyMethod = ToolType
        .GetMethod("BuildSearchRequestBody", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static string BuildSearchRequestBody(string searchTerm, string entities, int top, string filter)
    {
        return (string)BuildSearchRequestBodyMethod.Invoke(null, new object[] { searchTerm, entities, top, filter })!;
    }

    [TestMethod]
    public void BuildSearchRequestBody_BasicQuery_SetsSearchAndTop()
    {
        var json = BuildSearchRequestBody("Contoso", "", 50, "");
        var doc = JsonDocument.Parse(json);
        var root = doc.RootElement;

        Assert.AreEqual("Contoso", root.GetProperty("search").GetString());
        Assert.IsTrue(root.GetProperty("count").GetBoolean());
        Assert.AreEqual(50, root.GetProperty("top").GetInt32());
    }

    [TestMethod]
    public void BuildSearchRequestBody_WithEntities_SetsEntitiesJson()
    {
        var json = BuildSearchRequestBody("test", "account,contact", 10, "");
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
        var json = BuildSearchRequestBody("test", "", 50, "statecode eq 0");
        var doc = JsonDocument.Parse(json);
        var root = doc.RootElement;

        Assert.AreEqual("statecode eq 0", root.GetProperty("filter").GetString());
    }

    [TestMethod]
    public void BuildSearchRequestBody_EmptyEntities_NoEntitiesParameter()
    {
        var json = BuildSearchRequestBody("test", "", 50, "");
        var doc = JsonDocument.Parse(json);
        var root = doc.RootElement;

        Assert.IsFalse(root.TryGetProperty("entities", out _));
    }

    [TestMethod]
    public void BuildSearchRequestBody_EmptyFilter_NoFilterParameter()
    {
        var json = BuildSearchRequestBody("test", "", 50, "");
        var doc = JsonDocument.Parse(json);
        var root = doc.RootElement;

        Assert.IsFalse(root.TryGetProperty("filter", out _));
    }

    // ──────────────────────────────────────────────
    // EscapePipe (private static)
    // ──────────────────────────────────────────────

    private static readonly MethodInfo EscapePipeMethod = ToolType
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

    private static readonly MethodInfo FormatStatusResultsMethod = ToolType
        .GetMethod("FormatStatusResults", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static string FormatStatusResults(string statusJson, string statisticsJson)
    {
        return (string)FormatStatusResultsMethod.Invoke(null, new object[] { statusJson, statisticsJson! })!;
    }

    [TestMethod]
    public void FormatStatusResults_NotProvisioned_ShowsStatus()
    {
        var statusJson = JsonSerializer.Serialize(new
        {
            value = new { status = "notprovisioned", lockboxstatus = "Unknown" }
        });

        var result = FormatStatusResults(statusJson, null);

        Assert.IsTrue(result.Contains("[Dataverse Relevance Search Status]"));
        Assert.IsTrue(result.Contains("Not Provisioned"));
        Assert.IsTrue(result.Contains("Search is not provisioned"));
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

        var result = FormatStatusResults(statusJson, null);

        Assert.IsTrue(result.Contains("Provisioned"));
        Assert.IsTrue(result.Contains("Indexed Entities (1)"));
        Assert.IsTrue(result.Contains("account"));
        Assert.IsTrue(result.Contains("EntitySyncComplete"));
        Assert.IsTrue(result.Contains("2 fields"));
        Assert.IsTrue(result.Contains("accountnumber"));
        Assert.IsTrue(result.Contains("name"));
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

        var result = FormatStatusResults(statusJson, statsJson);

        Assert.IsTrue(result.Contains("1 MB"));
        Assert.IsTrue(result.Contains("1,341,090 bytes"));
        Assert.IsTrue(result.Contains("1,309"));
    }

    [TestMethod]
    public void FormatStatusResults_InvalidJson_FallsBackToRaw()
    {
        var result = FormatStatusResults("not valid json", null);

        Assert.IsTrue(result.Contains("[Search Status]"));
        Assert.IsTrue(result.Contains("not valid json"));
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

        var result = FormatStatusResults(statusJson, null);

        Assert.IsTrue(result.Contains("Many-to-Many Relationships (1)"));
        Assert.IsTrue(result.Contains("accountleads_association"));
        Assert.IsTrue(result.Contains("account"));
        Assert.IsTrue(result.Contains("lead"));
        Assert.IsTrue(result.Contains("accountleads"));
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

    // ──────────────────────────────────────────────
    // HandleSearchException (private static)
    // ──────────────────────────────────────────────

    private static readonly MethodInfo HandleSearchExceptionMethod = ToolType
        .GetMethod("HandleSearchException", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static string HandleSearchException(Exception ex)
    {
        return (string)HandleSearchExceptionMethod.Invoke(null, new object[] { ex })!;
    }

    [TestMethod]
    public void HandleSearchException_ErrorCodeInMessage_ReturnsEnableGuide()
    {
        var ex = new Exception("Request failed with error 0x80048d0b");
        var result = HandleSearchException(ex);

        Assert.IsTrue(result.Contains("Dataverse Search is not enabled"));
        Assert.IsTrue(result.Contains("HOW TO ENABLE"));
    }

    [TestMethod]
    public void HandleSearchException_ErrorCodeInInnerException_ReturnsEnableGuide()
    {
        var inner = new Exception("SearchNotEnabled: feature is not provisioned");
        var outer = new Exception("Request failed", inner);
        var result = HandleSearchException(outer);

        Assert.IsTrue(result.Contains("Dataverse Search is not enabled"));
        Assert.IsTrue(result.Contains("HOW TO ENABLE"));
    }

    [TestMethod]
    public void HandleSearchException_ErrorCodeInDeepInnerException_ReturnsEnableGuide()
    {
        var deepInner = new Exception("Error code 0x80060203");
        var inner = new Exception("Wrapper", deepInner);
        var outer = new Exception("Request failed", inner);
        var result = HandleSearchException(outer);

        Assert.IsTrue(result.Contains("Dataverse Search is not enabled"));
        Assert.IsTrue(result.Contains("HOW TO ENABLE"));
    }

    [TestMethod]
    public void HandleSearchException_GenericError_IncludesInnerExceptionMessage()
    {
        var inner = new Exception("Detailed API error info");
        var outer = new Exception("Operation failed", inner);
        var result = HandleSearchException(outer);

        Assert.IsTrue(result.Contains("Operation failed"));
        Assert.IsTrue(result.Contains("Detailed API error info"));
        Assert.IsTrue(result.Contains("→"));
    }

    [TestMethod]
    public void HandleSearchException_NoInnerException_ShowsMessageOnly()
    {
        var ex = new Exception("Simple error");
        var result = HandleSearchException(ex);

        Assert.AreEqual("Error: Search failed: Simple error", result);
    }

    // ──────────────────────────────────────────────
    // BuildFullExceptionMessage (private static)
    // ──────────────────────────────────────────────

    private static readonly MethodInfo BuildFullExceptionMessageMethod = ToolType
        .GetMethod("BuildFullExceptionMessage", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static string BuildFullExceptionMessage(Exception ex)
    {
        return (string)BuildFullExceptionMessageMethod.Invoke(null, new object[] { ex })!;
    }

    [TestMethod]
    public void BuildFullExceptionMessage_SingleException_ReturnsMessage()
    {
        var ex = new Exception("test error");
        var result = BuildFullExceptionMessage(ex);

        Assert.IsTrue(result.Contains("test error"));
    }

    [TestMethod]
    public void BuildFullExceptionMessage_NestedExceptions_ReturnsAllMessages()
    {
        var inner = new Exception("inner detail");
        var outer = new Exception("outer wrapper", inner);
        var result = BuildFullExceptionMessage(outer);

        Assert.IsTrue(result.Contains("outer wrapper"));
        Assert.IsTrue(result.Contains("inner detail"));
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

        var result = FormatStatusResults(statusJson, null);

        Assert.IsTrue(result.Contains("0 fields"));
        Assert.IsFalse(result.Contains("0 fields:"));
    }
}
