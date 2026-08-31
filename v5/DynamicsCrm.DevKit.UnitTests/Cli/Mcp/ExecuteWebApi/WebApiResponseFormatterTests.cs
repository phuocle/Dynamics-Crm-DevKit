using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Net;
using System.Reflection;

using DynamicsCrm.DevKit.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ExecuteWebApi;

/// <summary>
/// Tests for WebApiResponseFormatter — formats HTTP response bodies as markdown tables or code blocks.
/// The class is internal, so we access it via reflection.
/// </summary>
[TestClass]
public class WebApiResponseFormatterTests
{
    private static readonly Type FormatterType = typeof(DynamicsCrm.DevKit.Cli.Mcp.McpServerHost).Assembly
        .GetType("DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper.WebApiResponseFormatter")!;

    private static readonly MethodInfo FormatResponseMethod = FormatterType
        .GetMethod("FormatResponse", BindingFlags.Public | BindingFlags.Static)!;

    private static string FormatResponse(HttpStatusCode statusCode, string reasonPhrase,
        Dictionary<string, string>? headers, string? body, int maxLines = 200)
    {
        return (string)FormatResponseMethod.Invoke(null, new object?[] { statusCode, reasonPhrase, headers, body, maxLines })!;
    }

    // ──────────────────────────────────────────────
    // Status line
    // ──────────────────────────────────────────────

    [TestMethod]
    public void FormatResponse_IncludesStatusLine()
    {
        var result = FormatResponse(HttpStatusCode.OK, "OK", null, "{}");

        Assert.IsTrue(result.Contains("**HTTP 200 OK**"));
    }

    [TestMethod]
    public void FormatResponse_NotFound_ShowsStatusCode()
    {
        var result = FormatResponse(HttpStatusCode.NotFound, "Not Found", null, "{}");

        Assert.IsTrue(result.Contains("**HTTP 404 Not Found**"));
    }

    // ──────────────────────────────────────────────
    // Empty body
    // ──────────────────────────────────────────────

    [TestMethod]
    public void FormatResponse_EmptyBody_ShowsEmptyMessage()
    {
        var result = FormatResponse(HttpStatusCode.NoContent, "No Content", null, null);

        Assert.IsTrue(result.Contains("_(empty response body)_"));
    }

    [TestMethod]
    public void FormatResponse_WhitespaceBody_ShowsEmptyMessage()
    {
        var result = FormatResponse(HttpStatusCode.OK, "OK", null, "   ");

        Assert.IsTrue(result.Contains("_(empty response body)_"));
    }

    // ──────────────────────────────────────────────
    // Notable headers
    // ──────────────────────────────────────────────

    [TestMethod]
    public void FormatResponse_WithODataEntityId_ShowsHeaderTable()
    {
        var headers = new Dictionary<string, string>
        {
            ["OData-EntityId"] = "https://org.crm.dynamics.com/api/data/v9.2/accounts(00000000-0000-0000-0000-000000000001)"
        };

        var result = FormatResponse(HttpStatusCode.NoContent, "No Content", headers, null);

        Assert.IsTrue(result.Contains("| Header | Value |"));
        Assert.IsTrue(result.Contains("OData-EntityId"));
    }

    [TestMethod]
    public void FormatResponse_NoNotableHeaders_SkipsHeaderSection()
    {
        var headers = new Dictionary<string, string>
        {
            ["Content-Type"] = "application/json",
            ["X-Custom"] = "value"
        };

        var result = FormatResponse(HttpStatusCode.OK, "OK", headers, "{}");

        Assert.IsFalse(result.Contains("| Header | Value |"));
    }

    [TestMethod]
    public void FormatResponse_NullHeaders_NoError()
    {
        var result = FormatResponse(HttpStatusCode.OK, "OK", null, "{}");

        Assert.IsFalse(result.Contains("| Header | Value |"));
    }

    // ──────────────────────────────────────────────
    // Flat JSON object → Property/Value table
    // ──────────────────────────────────────────────

    [TestMethod]
    public void FormatResponse_FlatJsonObject_FormatsAsPropertyTable()
    {
        var body = "{\"name\": \"Contoso\", \"revenue\": 1000000, \"active\": true}";

        var result = FormatResponse(HttpStatusCode.OK, "OK", null, body);

        Assert.IsTrue(result.Contains("| Property | Value |"));
        Assert.IsTrue(result.Contains("Contoso"));
        Assert.IsTrue(result.Contains("1000000"));
    }

    // ──────────────────────────────────────────────
    // JSON with value array → Record table
    // ──────────────────────────────────────────────

    [TestMethod]
    public void FormatResponse_ValueArrayResponse_FormatsAsRecordTable()
    {
        var body = "{\"value\": [{\"name\": \"Contoso\", \"accountid\": \"id1\"}, {\"name\": \"Fabrikam\", \"accountid\": \"id2\"}]}";

        var result = FormatResponse(HttpStatusCode.OK, "OK", null, body);

        Assert.IsTrue(result.Contains("Returned **2** records"));
        Assert.IsTrue(result.Contains("Contoso"));
        Assert.IsTrue(result.Contains("Fabrikam"));
    }

    [TestMethod]
    public void FormatResponse_ValueArrayWithODataContext_IncludesContext()
    {
        var body = "{\"@odata.context\": \"https://org.crm.dynamics.com/api/data/v9.2/$metadata#accounts\", \"value\": [{\"name\": \"Test\"}]}";

        var result = FormatResponse(HttpStatusCode.OK, "OK", null, body);

        Assert.IsTrue(result.Contains("Context:"));
        Assert.IsTrue(result.Contains("$metadata#accounts"));
    }

    [TestMethod]
    public void FormatResponse_ValueArrayWithCount_ShowsCount()
    {
        var body = "{\"@odata.count\": 42, \"value\": [{\"name\": \"Test\"}]}";

        var result = FormatResponse(HttpStatusCode.OK, "OK", null, body);

        Assert.IsTrue(result.Contains("Total count: **42**"));
    }

    [TestMethod]
    public void FormatResponse_RecordTable_FiltersODataAnnotations()
    {
        var body = "{\"value\": [{\"@odata.type\": \"#account\", \"name\": \"Test\", \"@odata.etag\": \"W/123\"}]}";

        var result = FormatResponse(HttpStatusCode.OK, "OK", null, body);

        // @odata.type and @odata.etag should be filtered out from columns
        Assert.IsFalse(result.Contains("@odata.type"));
        Assert.IsFalse(result.Contains("@odata.etag"));
        Assert.IsTrue(result.Contains("name"));
    }

    // ──────────────────────────────────────────────
    // Non-JSON / plain text fallback
    // ──────────────────────────────────────────────

    [TestMethod]
    public void FormatResponse_NonJsonBody_FormatsAsPlainText()
    {
        var body = "<html><body>Error Page</body></html>";

        var result = FormatResponse(HttpStatusCode.InternalServerError, "Internal Server Error", null, body);

        Assert.IsTrue(result.Contains("Error Page"));
        Assert.IsFalse(result.Contains("```json")); // Not formatted as JSON
    }

    // ──────────────────────────────────────────────
    // Nested JSON → code block
    // ──────────────────────────────────────────────

    [TestMethod]
    public void FormatResponse_NestedJsonObject_FormatsAsCodeBlock()
    {
        var body = "{\"outer\": {\"inner\": \"value\"}}";

        var result = FormatResponse(HttpStatusCode.OK, "OK", null, body);

        Assert.IsTrue(result.Contains("```json"));
    }

    // ──────────────────────────────────────────────
    // Truncation
    // ──────────────────────────────────────────────

    [TestMethod]
    public void FormatResponse_LargeResponse_TruncatesAtMaxLines()
    {
        // Create a large flat JSON body
        var body = "{\"value\": [" + string.Join(",", System.Linq.Enumerable.Range(0, 50).Select(i => $"{{\"name\": \"Record{i}\", \"id\": \"{i}\"}}")) + "]}";

        var result = FormatResponse(HttpStatusCode.OK, "OK", null, body, maxLines: 10);

        Assert.IsTrue(result.Contains("truncated"));
    }

    // ──────────────────────────────────────────────
    // Pipe escaping
    // ──────────────────────────────────────────────

    [TestMethod]
    public void FormatResponse_PipeInValue_IsEscaped()
    {
        var body = "{\"name\": \"Value|With|Pipes\"}";

        var result = FormatResponse(HttpStatusCode.OK, "OK", null, body);

        Assert.IsTrue(result.Contains("Value\\|With\\|Pipes"));
    }

    // ──────────────────────────────────────────────
    // Empty value array
    // ──────────────────────────────────────────────

    [TestMethod]
    public void FormatResponse_EmptyValueArray_FallsToFlatOrCodeBlock()
    {
        var body = "{\"value\": []}";

        // Empty array means TryFormatAsValueTable returns false, falls through
        var result = FormatResponse(HttpStatusCode.OK, "OK", null, body);

        // Should still produce output without error
        Assert.IsTrue(result.Contains("**HTTP 200 OK**"));
    }
}
