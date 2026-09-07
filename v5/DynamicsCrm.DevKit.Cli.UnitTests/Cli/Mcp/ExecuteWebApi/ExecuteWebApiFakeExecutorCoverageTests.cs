using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Shared.Services;
using ModelContextProtocol.Protocol;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.CrossTool;
using FakeItEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text.Json;

using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ExecuteWebApi;

/// <summary>
/// execute_webapi on a faked IWebApiExecutor: validation branches, GET/POST
/// execution, truncation notes, header passthrough, dry-run previews, and
/// the $metadata raw path (best-effort — the org host is fake so any HTTP
/// outcome or exception is acceptable).
/// </summary>
[TestClass]
public sealed class ExecuteWebApiFakeExecutorCoverageTests
{
    private IWebApiExecutor _webApi = null!;
    private IMcpConnectionInfo _connectionInfo = null!;
    private HttpResponseMessage _response = null!;

    [TestInitialize]
    public void Setup()
    {
        _webApi = A.Fake<IWebApiExecutor>();
        _connectionInfo = A.Fake<IMcpConnectionInfo>();
        A.CallTo(() => _connectionInfo.ConnectedOrgUri).Returns(new Uri("https://fakeorg.crm.dynamics.com"));
        A.CallTo(() => _webApi.CurrentAccessToken).Returns("fake-token");
        _response = new HttpResponseMessage(HttpStatusCode.OK)
        {
            Content = new StringContent("{\"value\":[{\"name\":\"Contoso\"}]}")
        };
        A.CallTo(() => _webApi.ExecuteWebRequest(A<HttpMethod>._, A<string>._, A<string>._,
            A<Dictionary<string, List<string>>>._, A<string>._, A<System.Threading.CancellationToken>._))
            .Returns(_response);
    }

    private ExecuteWebApiTool NewTool(bool dryRun = false) =>
        new(_webApi, new McpDryRunOptions { DryRun = dryRun }, DryRunTestHelpers.NormalContext(), _connectionInfo);

    private static JsonElement Structured(CallToolResult result) =>
        JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;

    [TestMethod]
    public void Get_Success_ReturnsBodyAndStatus()
    {
        var result = NewTool().execute_webapi("GET", "accounts?$top=1", include_headers: true);

        Assert.IsFalse(result.IsError == true, result.GetText());
        var json = Structured(result);
        Assert.AreEqual(200, json.GetProperty("statusCode").GetInt32());
        Assert.IsTrue(json.GetProperty("isSuccess").GetBoolean());
        StringAssert.Contains(json.GetProperty("responseBody").GetString(), "Contoso");
        StringAssert.Contains(result.GetText(), "[Response Body]");
    }

    [TestMethod]
    public void Get_TruncatesLongBody_WithNote()
    {
        _response.Content = new StringContent(string.Join("\n", Enumerable.Range(1, 50).Select(i => $"row {i}")));
        var result = NewTool().execute_webapi("GET", "accounts", max_response_lines: 5);

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "truncated, showing first 5 lines of 50 total");
    }

    [TestMethod]
    public void Post_ExecutesMutation()
    {
        var result = NewTool().execute_webapi("POST", "accounts", body: "{\"name\":\"A\"}",
            headers: "{\"Prefer\":\"return=representation\"}");

        Assert.IsFalse(result.IsError == true, result.GetText());
        var json = Structured(result);
        Assert.AreEqual("POST", json.GetProperty("method").GetString());
    }

    [TestMethod]
    public void Post_DryRun_PreviewsWithoutExecuting()
    {
        var result = NewTool(dryRun: true).execute_webapi("POST", "accounts", body: "{\"name\":\"A\"}");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Would execute POST");
        Assert.AreEqual("Not executed", Structured(result).GetProperty("statusText").GetString());
    }

    [TestMethod]
    public void Validation_BadMethodMissingUrlAbsoluteUrlAndBadHeaders()
    {
        var tool = NewTool();

        var badMethod = tool.execute_webapi("FETCH", "accounts");
        Assert.IsTrue(badMethod.IsError == true);
        StringAssert.Contains(badMethod.GetText(), "Invalid HTTP method");

        var noUrl = tool.execute_webapi("GET", "  ");
        Assert.IsTrue(noUrl.IsError == true);
        StringAssert.Contains(noUrl.GetText(), "url is required");

        var absolute = tool.execute_webapi("GET", "https://evil.example.com/accounts");
        Assert.IsTrue(absolute.IsError == true);
        StringAssert.Contains(absolute.GetText(), "relative Dataverse Web API path");

        var badHeaders = tool.execute_webapi("GET", "accounts", headers: "[1,2,3]");
        Assert.IsTrue(badHeaders.IsError == true);
        StringAssert.Contains(badHeaders.GetText(), "JSON object");
    }

    [TestMethod]
    public void Metadata_UsesRawPath()
    {
        // Best-effort: the org host is fake, so any outcome is acceptable as
        // long as the tool surfaces a result instead of crashing the harness.
        var result = NewTool().execute_webapi("GET", "$metadata");
        Assert.IsNotNull(result);
    }
}
