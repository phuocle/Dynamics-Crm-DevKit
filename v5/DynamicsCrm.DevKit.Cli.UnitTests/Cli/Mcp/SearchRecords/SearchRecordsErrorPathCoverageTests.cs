using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Shared.Services;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;

using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.CrossTool;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.SearchRecords;

/// <summary>
/// search_records end-to-end rare-branch coverage on fakes: entity list
/// resolution failures, non-success search API status, malformed wrappers,
/// inner error payloads, status + statistics flows, full-payload file writes,
/// primary-name resolution, and object-type-code extraction.
/// </summary>
[TestClass]
public sealed class SearchRecordsErrorPathCoverageTests
{
    private const string EntityName = "accountsearchtarget";
    private const string OtherEntityName = "contactsearchtarget";

    private FakeSdkClient _fake = null!;
    private FakeSearchApi _searchApi = null!;

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _searchApi = new FakeSearchApi();
        _fake.OnExecute = request => request switch
        {
            RetrieveAllEntitiesRequest => new RetrieveAllEntitiesResponse
            {
                Results = { ["EntityMetadata"] = new[]
                {
                    TestMetadata.Entity(EntityName),
                    TestMetadata.Entity(OtherEntityName, "Contact Search Target"),
                    TestMetadata.Entity("contacttwo", "Contact Two")
                } }
            },
            _ => new OrganizationResponse()
        };
    }

    [TestCleanup]
    public void Cleanup()
    {
        _fake.Dispose();
        _searchApi.Dispose();
    }

    private sealed class FakeSearchApi : IWebApiExecutor, IDisposable
    {
        public Dictionary<string, string> Bodies { get; } = new(StringComparer.OrdinalIgnoreCase);
        public Dictionary<string, HttpStatusCode> StatusCodes { get; } = new(StringComparer.OrdinalIgnoreCase);
        private readonly List<HttpResponseMessage> _responses = new();

        public HttpResponseMessage ExecuteWebRequest(HttpMethod method, string queryString, string body,
            Dictionary<string, List<string>> customHeaders, string contentType = null, CancellationToken cancellationToken = default)
        {
            var key = queryString.Split('(')[0].Split('?')[0];
            var status = StatusCodes.GetValueOrDefault(key, HttpStatusCode.OK);
            var content = Bodies.GetValueOrDefault(key, "{}");
            var response = new HttpResponseMessage(status) { Content = new StringContent(content) };
            _responses.Add(response);
            return response;
        }

        public Task<HttpResponseMessage> ExecuteWebRequestAsync(HttpMethod method, string queryString, string body,
            Dictionary<string, List<string>> customHeaders, string contentType = null, CancellationToken cancellationToken = default)
            => Task.FromResult(ExecuteWebRequest(method, queryString, body, customHeaders, contentType, cancellationToken));

        public string CurrentAccessToken => "fake-token";

        public void Dispose()
        {
            foreach (var response in _responses) response.Dispose();
        }
    }

    private SearchRecordsTool NewTool() =>
        new(_fake.Client, new McpDryRunOptions(), _searchApi);

    // ── search ──────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task Search_EntitiesAmbiguous_ReturnsEntityMatches()
    {
        var result = await NewTool().search_records(null!, action: "search", search_term: "acct", entities: "contact");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Multiple candidates match 'contact'");
        StringAssert.Contains(result.GetText(), "Re-call with a more specific entities value.");
        var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
        Assert.AreEqual(2, json.GetProperty("details").GetProperty("entityMatches").GetArrayLength());
    }

    [TestMethod]
    public async Task Search_EntitiesNotFound_ReturnsError()
    {
        var result = await NewTool().search_records(null!, action: "search", search_term: "acct", entities: "zzz_no_such_entity");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "'zzz_no_such_entity' was not found by Display Name or Logical/Unique/Schema Name");
        StringAssert.Contains(result.GetText(), "Use get_tables to discover valid entity names.");
    }

    [TestMethod]
    public async Task Search_NonSuccessStatusCode_ReturnsApiError()
    {
        _searchApi.StatusCodes["searchquery"] = HttpStatusCode.InternalServerError;
        _searchApi.Bodies["searchquery"] = "server exploded";

        var result = await NewTool().search_records(null!, action: "search", search_term: "acct");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Search API returned 500");
        StringAssert.Contains(result.GetText(), "server exploded");
    }

    [TestMethod]
    public async Task Search_MalformedWrapper_ReturnsFormatError()
    {
        _searchApi.Bodies["searchquery"] = "{}";

        var result = await NewTool().search_records(null!, action: "search", search_term: "acct");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Unexpected response format from search API.");
    }

    [TestMethod]
    public async Task Search_InnerErrorPayload_ReturnsErrorMessage()
    {
        _searchApi.Bodies["searchquery"] = """{"response":"{\"Error\":{\"Code\":\"ERR1\",\"Message\":\"term rejected\"}}"}""";

        var result = await NewTool().search_records(null!, action: "search", search_term: "acct");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "term rejected");
        var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
        Assert.AreEqual("ERR1", json.GetProperty("details").GetProperty("errorCode").GetString());
    }

    [TestMethod]
    public async Task Search_Success_ResolvesEntitiesWritesFullPayloadAndRecordNames()
    {
        _searchApi.Bodies["searchquery"] = """
            {"response":"{\"Value\":[{\"id\":\"1\",\"entityName\":\"accountsearchtarget\",\"objectTypeCode\":0,\"score\":1.5,\"attributes\":{\"@search.objecttypecode\":1,\"name\":\"Contoso\"},\"highlights\":{}},{\"id\":\"2\",\"entityName\":\"accountsearchtarget\",\"score\":1.0,\"attributes\":{\"@search.objecttypecode\":\"42\",\"name\":\"Fabrikam\"},\"highlights\":{}},{\"id\":\"3\",\"entityName\":\"contactsearchtarget\",\"score\":0.5,\"attributes\":{\"name\":\"No OTC\"},\"highlights\":{}}],\"Count\":3}"}
            """;

        var result = await NewTool().search_records(null!, action: "search",
            search_term: "acct", entities: $"{EntityName},{OtherEntityName},{EntityName}", detail_level: "full");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Found 3 results (3 total)");
        StringAssert.Contains(result.GetText(), "Full payload written");
        var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
        Assert.AreEqual("full", json.GetProperty("detailLevel").GetString());
        Assert.IsFalse(string.IsNullOrWhiteSpace(json.GetProperty("filePath").GetString()));

        var records = json.GetProperty("records");
        // The tool maps @search.objecttypecode int/string/fallback — assert
        // through the JSON value kind the serializer actually emits.
        Assert.AreEqual("1", JsonScalar(records[0].GetProperty("objectTypeCode")));
        Assert.AreEqual("42", JsonScalar(records[1].GetProperty("objectTypeCode")));
        Assert.AreEqual("0", JsonScalar(records[2].GetProperty("objectTypeCode")));
        Assert.AreEqual("Contoso", records[0].GetProperty("name").GetString());
        Assert.AreEqual("Fabrikam", records[1].GetProperty("name").GetString());
        Assert.AreEqual("No OTC", records[2].GetProperty("name").GetString());
        Assert.IsFalse(records[0].TryGetProperty("attributes", out _), "attributes should be stripped");
        Assert.AreEqual("acct", json.GetProperty("searchTerm").GetString());
        Assert.IsFalse(json.TryGetProperty("queryContext", out _));
    }

    private static string JsonScalar(JsonElement element) =>
        element.ValueKind == JsonValueKind.Number ? element.GetRawText() : element.GetString() ?? string.Empty;

    // ── status ──────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task Status_MalformedWrapper_ReturnsFormatError()
    {
        _searchApi.Bodies["searchstatus"] = "{}";

        var result = await NewTool().search_records(null!, action: "status");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Unexpected response format from searchstatus API.");
    }

    [TestMethod]
    public async Task Status_MissingStatusValue_ReturnsParseError()
    {
        _searchApi.Bodies["searchstatus"] = """{"response":"{}"}""";

        var result = await NewTool().search_records(null!, action: "status");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Unable to parse status response.");
    }

    [TestMethod]
    public async Task Status_NonSuccessStatusCode_ReportsFriendlyError()
    {
        _searchApi.StatusCodes["searchstatus"] = HttpStatusCode.ServiceUnavailable;
        _searchApi.Bodies["searchstatus"] = "backend down";

        var result = await NewTool().search_records(null!, action: "status");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "searchstatus returned 503");
    }

    [TestMethod]
    public async Task Status_Success_WithStatistics_WritesFullPayloadAndStripsIndexedFields()
    {
        _searchApi.Bodies["searchstatus"] = """
            {"response":"{\"value\":{\"status\":\"Provisioned\",\"lockboxstatus\":\"NotLocked\",\"cmkstatus\":\"Healthy\",\"entitystatusresults\":[{\"entitylogicalname\":\"accountsearchtarget\",\"objecttypecode\":1,\"primarynamefield\":\"name\",\"entitystatus\":\"IndexedAndActive\",\"searchableindexedfieldinfomap\":{\"name\":{\"indexfieldname\":\"name\"}}}]}}"}
            """;
        _searchApi.Bodies["searchstatistics"] = """{"response":"{\"value\":{\"storagesizeinbytes\":100,\"storagesizeinmb\":12,\"documentcount\":42}}"}""";

        var result = await NewTool().search_records(null!, action: "status", detail_level: "full");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Search Provisioned | 1 indexed entities");
        StringAssert.Contains(result.GetText(), "12 MB, 42 docs");
        StringAssert.Contains(result.GetText(), "Full payload written");
        var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
        Assert.AreEqual("full", json.GetProperty("detailLevel").GetString());
        Assert.IsFalse(string.IsNullOrWhiteSpace(json.GetProperty("filePath").GetString()));
        Assert.AreEqual("12", JsonScalar(json.GetProperty("statistics").GetProperty("storageSizeInMb")));
        var entity = json.GetProperty("status").GetProperty("entityStatusResults")[0];
        Assert.IsFalse(entity.TryGetProperty("indexedFields", out _), "indexedFields should be stripped");
        Assert.AreEqual("accountsearchtarget", entity.GetProperty("entityLogicalName").GetString());
    }

    [TestMethod]
    public async Task Status_StatisticsWrapperWithoutResponse_LeavesStatisticsNull()
    {
        _searchApi.Bodies["searchstatus"] = """
            {"response":"{\"value\":{\"status\":\"NotProvisioned\",\"entitystatusresults\":[]}}"}
            """;
        _searchApi.Bodies["searchstatistics"] = "{}";

        var result = await NewTool().search_records(null!, action: "status");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Search Not Provisioned | 0 indexed entities.");
        var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
        Assert.IsFalse(json.TryGetProperty("statistics", out _));
    }
}
