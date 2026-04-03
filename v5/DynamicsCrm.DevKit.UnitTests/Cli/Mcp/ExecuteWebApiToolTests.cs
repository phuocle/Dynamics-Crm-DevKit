using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Reflection;
using System.Text.Json;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

/// <summary>
/// Tests for ExecuteWebApiTool private static methods:
/// ParseHttpMethod, ParseHeaders, GetBlockedReason, TryFormatJson.
/// Input validation is tested via the public execute_webapi method.
/// </summary>
[TestClass]
public class ExecuteWebApiToolTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.ExecuteWebApiTool);

    private readonly DynamicsCrm.DevKit.Cli.Mcp.Tools.ExecuteWebApiTool _tool = new(null!);

    // ──────────────────────────────────────────────
    // Input validation via public method
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ExecuteWebApi_EmptyMethod_ReturnsError()
    {
        var result = _tool.execute_webapi("", "accounts");
        Assert.IsTrue(result.IsError);
        Assert.IsTrue(GetText(result).Contains("method is required"));
    }

    [TestMethod]
    public void ExecuteWebApi_EmptyUrl_ReturnsError()
    {
        var result = _tool.execute_webapi("GET", "");
        Assert.IsTrue(result.IsError);
        Assert.IsTrue(GetText(result).Contains("url is required"));
    }

    [TestMethod]
    public void ExecuteWebApi_InvalidMethod_ReturnsError()
    {
        var result = _tool.execute_webapi("INVALID", "accounts");
        Assert.IsTrue(result.IsError);
        Assert.IsTrue(GetText(result).Contains("Invalid HTTP method"));
    }

    // ──────────────────────────────────────────────
    // ParseHttpMethod (private static)
    // ──────────────────────────────────────────────

    private static readonly MethodInfo ParseHttpMethodMethod = ToolType
        .GetMethod("ParseHttpMethod", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static HttpMethod? ParseHttpMethod(string method)
    {
        return (HttpMethod?)ParseHttpMethodMethod.Invoke(null, new object[] { method });
    }

    [TestMethod]
    public void ParseHttpMethod_GET_ReturnsGet()
    {
        Assert.AreEqual(HttpMethod.Get, ParseHttpMethod("GET"));
    }

    [TestMethod]
    public void ParseHttpMethod_POST_ReturnsPost()
    {
        Assert.AreEqual(HttpMethod.Post, ParseHttpMethod("POST"));
    }

    [TestMethod]
    public void ParseHttpMethod_PUT_ReturnsPut()
    {
        Assert.AreEqual(HttpMethod.Put, ParseHttpMethod("PUT"));
    }

    [TestMethod]
    public void ParseHttpMethod_PATCH_ReturnsPatch()
    {
        Assert.AreEqual(HttpMethod.Patch, ParseHttpMethod("PATCH"));
    }

    [TestMethod]
    public void ParseHttpMethod_DELETE_ReturnsDelete()
    {
        Assert.AreEqual(HttpMethod.Delete, ParseHttpMethod("DELETE"));
    }

    [TestMethod]
    public void ParseHttpMethod_Unknown_ReturnsNull()
    {
        Assert.IsNull(ParseHttpMethod("OPTIONS"));
    }

    // ──────────────────────────────────────────────
    // ParseHeaders (private static)
    // ──────────────────────────────────────────────

    private static readonly MethodInfo ParseHeadersMethod = ToolType
        .GetMethod("ParseHeaders", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static Dictionary<string, List<string>>? ParseHeaders(string headersJson)
    {
        return (Dictionary<string, List<string>>?)ParseHeadersMethod.Invoke(null, new object[] { headersJson });
    }

    [TestMethod]
    public void ParseHeaders_Empty_ReturnsNull()
    {
        Assert.IsNull(ParseHeaders(""));
    }

    [TestMethod]
    public void ParseHeaders_Null_ReturnsNull()
    {
        Assert.IsNull(ParseHeaders(null!));
    }

    [TestMethod]
    public void ParseHeaders_ValidJson_ReturnsDictionary()
    {
        var result = ParseHeaders("{\"MSCRM.MergeLabels\": \"true\", \"If-Match\": \"*\"}");

        Assert.IsNotNull(result);
        Assert.AreEqual(2, result.Count);
        Assert.AreEqual("true", result["MSCRM.MergeLabels"][0]);
        Assert.AreEqual("*", result["If-Match"][0]);
    }

    [TestMethod]
    public void ParseHeaders_InvalidJson_ReturnsNull()
    {
        Assert.IsNull(ParseHeaders("not json"));
    }

    [TestMethod]
    public void ParseHeaders_EmptyObject_ReturnsNull()
    {
        Assert.IsNull(ParseHeaders("{}"));
    }

    // ──────────────────────────────────────────────
    // GetBlockedReason (private static)
    // ──────────────────────────────────────────────

    private static readonly MethodInfo GetBlockedReasonMethod = ToolType
        .GetMethod("GetBlockedReason", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static string? GetBlockedReason(HttpMethod method, string url)
    {
        return (string?)GetBlockedReasonMethod.Invoke(null, new object[] { method, url });
    }

    [TestMethod]
    public void GetBlockedReason_GET_AlwaysReturnsNull()
    {
        Assert.IsNull(GetBlockedReason(HttpMethod.Get, "systemforms(guid)"));
    }

    [TestMethod]
    public void GetBlockedReason_POST_AlwaysReturnsNull()
    {
        Assert.IsNull(GetBlockedReason(HttpMethod.Post, "savedqueries(guid)"));
    }

    [TestMethod]
    public void GetBlockedReason_PATCH_SystemForms_Blocked()
    {
        var result = GetBlockedReason(HttpMethod.Patch, "systemforms(00000000-0000-0000-0000-000000000001)");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("BLOCKED"));
        Assert.IsTrue(result.Contains("upsert_form"));
    }

    [TestMethod]
    public void GetBlockedReason_PUT_SavedQueries_Blocked()
    {
        var result = GetBlockedReason(HttpMethod.Put, "savedqueries(00000000-0000-0000-0000-000000000001)");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("BLOCKED"));
        Assert.IsTrue(result.Contains("upsert_view"));
    }

    [TestMethod]
    public void GetBlockedReason_DELETE_UserQueries_Blocked()
    {
        var result = GetBlockedReason(HttpMethod.Delete, "userqueries(00000000-0000-0000-0000-000000000001)");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("BLOCKED"));
        Assert.IsTrue(result.Contains("upsert_view"));
    }

    [TestMethod]
    public void GetBlockedReason_PATCH_Sitemaps_Blocked()
    {
        var result = GetBlockedReason(HttpMethod.Patch, "sitemaps(00000000-0000-0000-0000-000000000001)");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("BLOCKED"));
        Assert.IsTrue(result.Contains("upsert_sitemap"));
    }

    [TestMethod]
    public void GetBlockedReason_PATCH_RegularEndpoint_ReturnsNull()
    {
        Assert.IsNull(GetBlockedReason(HttpMethod.Patch, "accounts(00000000-0000-0000-0000-000000000001)"));
    }

    [TestMethod]
    public void GetBlockedReason_CaseInsensitive_Blocked()
    {
        var result = GetBlockedReason(HttpMethod.Patch, "SystemForms(00000000-0000-0000-0000-000000000001)");
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("BLOCKED"));
    }

    // ──────────────────────────────────────────────
    // TryFormatJson (private static)
    // ──────────────────────────────────────────────

    private static readonly MethodInfo TryFormatJsonMethod = ToolType
        .GetMethod("TryFormatJson", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static string TryFormatJson(string json)
    {
        return (string)TryFormatJsonMethod.Invoke(null, new object[] { json })!;
    }

    [TestMethod]
    public void TryFormatJson_ValidJson_ReturnsIndented()
    {
        var result = TryFormatJson("{\"name\":\"test\"}");
        Assert.IsTrue(result.Contains("  \"name\": \"test\""));
    }

    [TestMethod]
    public void TryFormatJson_InvalidJson_ReturnsOriginal()
    {
        var result = TryFormatJson("not json at all");
        Assert.AreEqual("not json at all", result);
    }

    [TestMethod]
    public void TryFormatJson_EmptyObject_ReturnsFormatted()
    {
        var result = TryFormatJson("{}");
        Assert.AreEqual("{}", result);
    }

    // ──────────────────────────────────────────────
    // Helper
    // ──────────────────────────────────────────────

    private static string GetText(ModelContextProtocol.Protocol.CallToolResult result)
    {
        if (result.Content == null || result.Content.Count == 0) return "";
        return result.Content[0] is ModelContextProtocol.Protocol.TextContentBlock tb ? tb.Text ?? "" : "";
    }
}
