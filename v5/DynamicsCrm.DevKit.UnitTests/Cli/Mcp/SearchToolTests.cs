using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text.Json;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

/// <summary>
/// Tests for SearchTool private static methods:
/// FormatSearchResults, FormatAttributes, FormatHighlights, BuildSearchRequest, EscapeTab.
/// All accessed via reflection on the public SearchTool type.
/// </summary>
[TestClass]
public class SearchToolTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.SearchTool);

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
        Assert.IsTrue(result.Contains("1 results"));
        Assert.IsTrue(result.Contains("Entity\tId\tScore\tAttributes\tHighlights"));
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
        // Should be alphabetically sorted and semicolon-separated
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
    // BuildSearchRequest (private static)
    // ──────────────────────────────────────────────

    private static readonly MethodInfo BuildSearchRequestMethod = ToolType
        .GetMethod("BuildSearchRequest", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static Microsoft.Xrm.Sdk.OrganizationRequest BuildSearchRequest(string searchTerm, string entities, int top, string filter)
    {
        return (Microsoft.Xrm.Sdk.OrganizationRequest)BuildSearchRequestMethod.Invoke(null, new object[] { searchTerm, entities, top, filter })!;
    }

    [TestMethod]
    public void BuildSearchRequest_BasicQuery_SetsSearchAndTop()
    {
        var request = BuildSearchRequest("Contoso", "", 50, "");

        Assert.AreEqual("searchquery", request.RequestName);
        Assert.AreEqual("Contoso", request["search"]);
        Assert.AreEqual(true, request["count"]);
        Assert.AreEqual(50, request["top"]);
    }

    [TestMethod]
    public void BuildSearchRequest_WithEntities_SetsEntitiesJson()
    {
        var request = BuildSearchRequest("test", "account,contact", 10, "");

        Assert.IsTrue(request.Parameters.ContainsKey("entities"));
        var entityJson = (string)request["entities"];
        Assert.IsTrue(entityJson.Contains("account"));
        Assert.IsTrue(entityJson.Contains("contact"));
    }

    [TestMethod]
    public void BuildSearchRequest_WithFilter_SetsFilter()
    {
        var request = BuildSearchRequest("test", "", 50, "statecode eq 0");

        Assert.AreEqual("statecode eq 0", request["filter"]);
    }

    [TestMethod]
    public void BuildSearchRequest_EmptyEntities_NoEntitiesParameter()
    {
        var request = BuildSearchRequest("test", "", 50, "");

        Assert.IsFalse(request.Parameters.ContainsKey("entities"));
    }

    [TestMethod]
    public void BuildSearchRequest_EmptyFilter_NoFilterParameter()
    {
        var request = BuildSearchRequest("test", "", 50, "");

        Assert.IsFalse(request.Parameters.ContainsKey("filter"));
    }

    // ──────────────────────────────────────────────
    // EscapeTab (private static)
    // ──────────────────────────────────────────────

    private static readonly MethodInfo EscapeTabMethod = ToolType
        .GetMethod("EscapeTab", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static string EscapeTab(string value)
    {
        return (string)EscapeTabMethod.Invoke(null, new object[] { value })!;
    }

    [TestMethod]
    public void EscapeTab_TabReplacedWithSpace()
    {
        Assert.AreEqual("a b", EscapeTab("a\tb"));
    }

    [TestMethod]
    public void EscapeTab_NewlineReplacedWithSpace()
    {
        Assert.AreEqual("a b", EscapeTab("a\nb"));
    }

    [TestMethod]
    public void EscapeTab_CarriageReturnRemoved()
    {
        Assert.AreEqual("ab", EscapeTab("a\rb"));
    }

    [TestMethod]
    public void EscapeTab_NoSpecialChars_Unchanged()
    {
        Assert.AreEqual("hello world", EscapeTab("hello world"));
    }
}
