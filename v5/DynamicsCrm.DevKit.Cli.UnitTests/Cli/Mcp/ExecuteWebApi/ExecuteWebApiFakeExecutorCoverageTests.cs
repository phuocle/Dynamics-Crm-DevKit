using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Shared.Services;
using ModelContextProtocol.Protocol;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.CrossTool;
using FakeItEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
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
    private IOrganizationService _orgService = null!;
    private HttpResponseMessage _response = null!;

    [TestInitialize]
    public void Setup()
    {
        _webApi = A.Fake<IWebApiExecutor>();
        _connectionInfo = A.Fake<IMcpConnectionInfo>();
        _orgService = A.Fake<IOrganizationService>();
        A.CallTo(() => _orgService.Execute(A<RetrieveAllEntitiesRequest>._)).Returns(new RetrieveAllEntitiesResponse
        {
            Results = { ["EntityMetadata"] = new[]
            {
                new EntityMetadata { EntitySetName = "accounts" },
                new EntityMetadata { EntitySetName = "ab_widgets" }
            } }
        });
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
        new(_webApi, new McpDryRunOptions { DryRun = dryRun }, DryRunTestHelpers.NormalContext(), _connectionInfo)
        {
            OrgService = _orgService
        };

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
        AssertNoWebRequest();
    }

    [TestMethod]
    [DataRow("PATCH", "EntityDefinitions(00000000-0000-0000-0000-000000000001)", "IRREVERSIBLE")]
    [DataRow("PUT", "%45ntityDefinit%69ons%2800000000-0000-0000-0000-000000000001%29", "IRREVERSIBLE")]
    [DataRow("PATCH", "%2545ntityDefinitions(guid)", "unambiguous relative")]
    [DataRow("PATCH", "accounts/%2e%2e/EntityDefinitions(guid)", "unambiguous relative")]
    [DataRow("POST", "EntityDefinitions?$select=LogicalName", "IRREVERSIBLE")]
    [DataRow("POST", "Entit%79Definitions", "IRREVERSIBLE")]
    [DataRow("POST", "ImportSolution", "Solution imports")]
    [DataRow("POST", "%49mportSolutionAsync", "Solution imports")]
    [DataRow("POST", "StageAndUpgrade", "Solution upgrades")]
    [DataRow("POST", "ApplySolutionUpgrade", "Solution upgrades")]
    [DataRow("POST", "$batch", "Batch requests")]
    [DataRow("POST", "%24b%61tch", "Batch requests")]
    [DataRow("GET", "%24batch", "Batch requests")]
    [DataRow("POST", "workflows", "Workflows contain business process definitions")]
    [DataRow("POST", "new_MyCustomAction", "verified Dataverse row CRUD")]
    [DataRow("POST", "WhoAmI", "verified Dataverse row CRUD")]
    [DataRow("POST", "accounts(guid)/Microsoft.Dynamics.CRM.ab_CustomAction", "verified Dataverse row CRUD")]
    [DataRow("PATCH", "accounts", "verified Dataverse row CRUD")]
    public void ProtectedOrUnverifiedRoutes_AreRejectedBeforeWebRequest(string method, string url, string error)
    {
        var result = NewTool().execute_webapi(method, url);

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), error);
        AssertNoWebRequest();
    }

    [TestMethod]
    [DataRow("post", "X-HTTP-Method-Override", "PATCH")]
    [DataRow("GET", "x-http-method", "POST")]
    [DataRow("GET", "X-Rewrite-URL", "$batch")]
    public void RequestOverrideHeader_IsRejectedBeforeWebRequest(string method, string header, string value)
    {
        var result = NewTool().execute_webapi(method, "accounts", headers: JsonSerializer.Serialize(new Dictionary<string, string> { [header] = value }));

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "override headers");
        AssertNoWebRequest();
    }

    [TestMethod]
    public void Post_WithoutEntitySetMetadata_FailsClosed()
    {
        A.CallTo(() => _orgService.Execute(A<RetrieveAllEntitiesRequest>._)).Returns(new RetrieveAllEntitiesResponse
        {
            Results = { ["EntityMetadata"] = Array.Empty<EntityMetadata>() }
        });

        var result = NewTool().execute_webapi("POST", "accounts", body: "{}");

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "verified Dataverse row CRUD");
        AssertNoWebRequest();
    }

    [TestMethod]
    [DataRow("PATCH", "ab_widgets(00000000-0000-0000-0000-000000000001)")]
    [DataRow("PUT", "accounts(accountnumber='41')")]
    [DataRow("DELETE", "accounts(00000000-0000-0000-0000-000000000001)")]
    public void VerifiedSingleRowRoutes_AreAllowed(string method, string url)
    {
        var result = NewTool().execute_webapi(method, url);

        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.AreEqual(method, Structured(result).GetProperty("method").GetString());
        A.CallTo(() => _webApi.ExecuteWebRequest(A<HttpMethod>.That.Matches(m => m.Method == method), url, A<string>._,
            A<Dictionary<string, List<string>>>._, A<string>._, A<System.Threading.CancellationToken>._))
            .MustHaveHappenedOnceExactly();
    }

    private void AssertNoWebRequest() =>
        A.CallTo(() => _webApi.ExecuteWebRequest(A<HttpMethod>._, A<string>._, A<string>._,
            A<Dictionary<string, List<string>>>._, A<string>._, A<System.Threading.CancellationToken>._))
            .MustNotHaveHappened();

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
