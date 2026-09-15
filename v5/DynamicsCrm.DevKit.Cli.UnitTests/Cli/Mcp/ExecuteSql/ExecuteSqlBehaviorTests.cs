using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;
using DynamicsCrm.DevKit.Shared.Services;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.ServiceModel;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ExecuteSql;

[TestClass]
[DoNotParallelize]
public sealed class ExecuteSqlBehaviorTests
{
    private FakeSdkClient _sdk = null!;
    private FakeWebApi _webApi = null!;

    [TestInitialize]
    public void Setup()
    {
        _sdk = new FakeSdkClient();
        _webApi = new FakeWebApi();
        _sdk.OnExecute = request => request switch
        {
            RetrieveEntityRequest r => new RetrieveEntityResponse
            {
                Results = { ["EntityMetadata"] = Metadata(r.LogicalName, "accounts") }
            },
            _ => throw new InvalidOperationException($"Unexpected request '{request.RequestName}'")
        };
    }

    [TestCleanup]
    public void Cleanup() => _sdk.Dispose();

    private ExecuteSqlTool Tool() => new(_webApi, new MetadataService(_sdk.Client));

    private static EntityMetadata Metadata(string logicalName, string entitySetName)
    {
        var metadata = new EntityMetadata();
        typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.LogicalName))!.SetValue(metadata, logicalName);
        typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.EntitySetName))!.SetValue(metadata, entitySetName);
        return metadata;
    }

    private static JsonElement Structured(CallToolResult result) =>
        JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;

    private static string Body(params string[] names) =>
        JsonSerializer.Serialize(new { value = names.Select(name => new { name }).ToArray() });

    private static string Page(IEnumerable<string> names, string? nextLink = null)
    {
        var page = new Dictionary<string, object> { ["value"] = names.Select(name => new { name }).ToArray() };
        if (nextLink != null) page["@odata.nextLink"] = nextLink;
        return JsonSerializer.Serialize(page);
    }

    [TestMethod]
    public async Task LiteralsDoNotTriggerSqlGuards_AndRemainEncoded()
    {
        var sql = "SELECT name FROM account WHERE name = 'Bob''s having account; fetch'";
        _webApi.Responses.Add(Body("Bob's having account; fetch"));

        var result = await Tool().execute_sql(sql);

        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.AreEqual(1, _webApi.Requests.Count);
        StringAssert.Contains(_webApi.Requests[0].Url, Uri.EscapeDataString(sql));
    }

    [TestMethod]
    public async Task RealSqlGuardsRemainActive()
    {
        foreach (var sql in new[]
        {
            "SELECT name FROM account GROUP BY name HAVING COUNT(*) > 1",
            "SELECT name FROM account WHERE EXISTS (SELECT accountid FROM account)",
            "SELECT * FROM account",
            "SELECT name FROM account OFFSET 1 ROWS FETCH NEXT 1 ROWS ONLY",
            "UPDATE account SET name = 'x'"
        })
        {
            var result = await Tool().execute_sql(sql);
            Assert.IsTrue(result.IsError == true, sql);
        }
        Assert.IsEmpty(_webApi.Requests);
    }

    [TestMethod]
    public async Task TopIsValidatedAndConvertedWithoutExpandingCallerCap()
    {
        _webApi.Responses.Add(Body("one"));
        var result = await Tool().execute_sql("SELECT DISTINCT TOP (1) name FROM account", max_records: 10);
        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.AreEqual(1, Structured(result).GetProperty("max_records").GetInt32());
        Assert.IsFalse(Structured(result).GetProperty("executed_sql").GetString()!.Contains("TOP", StringComparison.OrdinalIgnoreCase));

        foreach (var sql in new[] { "SELECT TOP 0 name FROM account", "SELECT TOP -1 name FROM account", "SELECT TOP (2 name FROM account", "SELECT TOP 1 PERCENT name FROM account" })
        {
            var invalid = await Tool().execute_sql(sql);
            Assert.IsTrue(invalid.IsError == true, sql);
        }
        Assert.HasCount(1, _webApi.Requests);
    }

    [TestMethod]
    public async Task PagingUsesStablePageSizeAndReportsPartialResults()
    {
        _webApi.Responses.Add(Page(Enumerable.Range(1, 5000).Select(i => $"a{i}"), "https://fake/api/data/v9.2/accounts?$skiptoken=%2525%26x"));
        _webApi.Responses.Add(Page(Enumerable.Range(1, 2345).Select(i => $"b{i}")));

        var result = await Tool().execute_sql("SELECT name FROM account", max_records: 8000, get_all: true);

        Assert.IsFalse(result.IsError == true, result.GetText());
        var json = Structured(result);
        Assert.AreEqual(7345, json.GetProperty("row_count").GetInt32());
        Assert.IsFalse(json.GetProperty("result_truncated").GetBoolean());
        Assert.AreEqual(2, _webApi.Requests.Count);
        Assert.IsTrue(_webApi.Requests.All(r => r.Prefer.Any(header => header.Contains("odata.maxpagesize=5000"))));
        StringAssert.Contains(result.GetText(), json.GetProperty("summary").GetString());
    }

    [TestMethod]
    public async Task OnePageContinuationIsPartialEvenBelowCap_AndDoesNotFetchWhenDisabled()
    {
        _webApi.Responses.Add(Page(new[] { "one" }, "accounts?$skiptoken=x"));
        var result = await Tool().execute_sql("SELECT name FROM account", max_records: 100, get_all: false);

        Assert.IsTrue(Structured(result).GetProperty("result_truncated").GetBoolean());
        Assert.AreEqual(1, _webApi.Requests.Count);
        StringAssert.Contains(Structured(result).GetProperty("summary").GetString(), "partial results");
    }

    [TestMethod]
    public async Task MetadataUsesEntitySetNameAndDoesNotPluralize()
    {
        _sdk.OnExecute = request => request switch
        {
            RetrieveEntityRequest r => new RetrieveEntityResponse { Results = { ["EntityMetadata"] = Metadata(r.LogicalName, "contacts") } },
            _ => throw new InvalidOperationException()
        };
        _webApi.Responses.Add(Body("Ada"));

        var result = await Tool().execute_sql("SELECT fullname FROM contact WHERE fullname = 'having'");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.StartsWith(Structured(result).GetProperty("request_url").GetString(), "contacts?sql=");
    }

    [TestMethod]
    public async Task MissingEntityFaultIsNotConfusedWithMissingEntitySet()
    {
        _sdk.OnExecute = _ => throw new FaultException<OrganizationServiceFault>(new OrganizationServiceFault
        {
            ErrorCode = unchecked((int)0x80041102),
            Message = "QueryBuilderNoEntity"
        });

        var result = await Tool().execute_sql("SELECT name FROM missing_entity");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Table 'missing_entity' was not found");
        Assert.IsEmpty(_webApi.Requests);
    }

    private sealed class FakeWebApi : IWebApiExecutor
    {
        public List<string> Responses { get; } = new();
        public List<Request> Requests { get; } = new();
        public string CurrentAccessToken => "fake-token";

        public Task<HttpResponseMessage> ExecuteWebRequestAsync(HttpMethod method, string queryString, string body,
            Dictionary<string, List<string>> customHeaders, string contentType = null, CancellationToken cancellationToken = default)
        {
            Requests.Add(new Request(queryString, customHeaders["Prefer"]));
            var content = Responses.Count == 0 ? "{\"value\":[]}" : Responses[0];
            if (Responses.Count != 0) Responses.RemoveAt(0);
            return Task.FromResult(new HttpResponseMessage(HttpStatusCode.OK) { Content = new StringContent(content) });
        }

        public HttpResponseMessage ExecuteWebRequest(HttpMethod method, string queryString, string body,
            Dictionary<string, List<string>> customHeaders, string contentType = null, CancellationToken cancellationToken = default)
            => throw new NotSupportedException();

        public sealed record Request(string Url, List<string> Prefer);
    }
}
