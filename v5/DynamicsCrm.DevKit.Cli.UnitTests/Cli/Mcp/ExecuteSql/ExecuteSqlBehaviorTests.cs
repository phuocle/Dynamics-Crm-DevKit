using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;
using DynamicsCrm.DevKit.Shared.Services;
using DynamicsCrm.DevKit.Shared;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Reflection;
using System.ServiceModel;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ExecuteSql;

[TestClass]
[DoNotParallelize]
public sealed class ExecuteSqlBehaviorTests
{
    private const string SelectNames = "SELECT name FROM account ORDER BY accountid";
    private FakeSdkClient _sdk = null!;
    private FakeWebApi _webApi = null!;
    private List<RetrieveEntityRequest> _metadataRequests = null!;
    private Func<RetrieveEntityRequest, EntityMetadata?> _metadataResponse = null!;
    private int _originalExecuteAsyncCount;

    [TestInitialize]
    public void Setup()
    {
        _originalExecuteAsyncCount = XrmHelper.COUNT_ExecuteAsync;
        _sdk = new FakeSdkClient();
        _webApi = new FakeWebApi();
        _metadataRequests = new List<RetrieveEntityRequest>();
        _metadataResponse = request => request.LogicalName == "account"
            ? Metadata("account", "accounts")
            : throw new InvalidOperationException($"Unconfigured metadata for '{request.LogicalName}'.");
        _sdk.OnExecute = request =>
        {
            if (request is not RetrieveEntityRequest retrieve)
                throw new InvalidOperationException($"Unexpected request '{request.RequestName}'.");
            _metadataRequests.Add(retrieve);
            return new RetrieveEntityResponse { Results = { ["EntityMetadata"] = _metadataResponse(retrieve) } };
        };
    }

    [TestCleanup]
    public void Cleanup()
    {
        _webApi.Dispose();
        _sdk.Dispose();
        XrmHelper.COUNT_ExecuteAsync = _originalExecuteAsyncCount;
    }

    private ExecuteSqlTool Tool() => new(_webApi, new MetadataService(_sdk.Client));

    private static EntityMetadata Metadata(string logicalName, string? entitySetName)
    {
        var metadata = new EntityMetadata();
        typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.LogicalName))!.SetValue(metadata, logicalName);
        typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.EntitySetName))!.SetValue(metadata, entitySetName);
        return metadata;
    }

    private static JsonElement Structured(CallToolResult result)
    {
        Assert.IsNotNull(result.StructuredContent, result.GetText());
        return result.StructuredContent.Value.Clone();
    }

    private static string Body(params string[] names) =>
        JsonSerializer.Serialize(new { value = names.Select(name => new { name }).ToArray() });

    private static string Page(IEnumerable<string> names, string? nextLink = null)
    {
        var page = new Dictionary<string, object> { ["value"] = names.Select(name => new { name }).ToArray() };
        if (nextLink != null) page["@odata.nextLink"] = nextLink;
        return JsonSerializer.Serialize(page);
    }

    private static FaultException<OrganizationServiceFault> SdkFault(int code, string message) =>
        new(new OrganizationServiceFault { ErrorCode = code, Message = message }, new FaultReason(message));

    private void AssertNoRequests()
    {
        Assert.IsEmpty(_metadataRequests, "Invalid SQL must stop before metadata discovery.");
        Assert.IsEmpty(_webApi.Requests, "Invalid SQL must stop before SQL HTTP.");
    }

    private static JsonElement AssertSuccess(CallToolResult result, int rowCount, int cap, bool getAll, bool truncated)
    {
        Assert.IsFalse(result.IsError == true, result.GetText());
        var json = Structured(result);
        Assert.AreEqual(rowCount, json.GetProperty("row_count").GetInt32());
        Assert.AreEqual(rowCount, json.GetProperty("rows").GetArrayLength());
        Assert.AreEqual(cap, json.GetProperty("max_records").GetInt32());
        Assert.AreEqual(getAll, json.GetProperty("get_all").GetBoolean());
        Assert.AreEqual(truncated, json.GetProperty("result_truncated").GetBoolean());
        var summary = $"[Success] {rowCount} row(s) returned{(truncated ? " (partial results)" : "")}";
        Assert.AreEqual(summary, json.GetProperty("summary").GetString());
        Assert.AreEqual(summary, result.GetText());
        return json;
    }

    // T01-T07 verify wrapper validation with fakes, not live Dataverse dialect support.
    [TestMethod]
    [DataRow("having")]
    [DataRow("fetch")]
    [DataRow("offset")]
    [DataRow("exists (")]
    [DataRow("select *")]
    [DataRow("(select test)")]
    public async Task KeywordLiteral_ReachesHttpUnchanged(string literal)
    {
        var sql = $"SELECT name FROM account WHERE name = '{literal}'";
        _webApi.Responses.Add(Body("one"));

        var result = await Tool().execute_sql(sql);

        var json = AssertSuccess(result, 1, 5000, false, false);
        Assert.HasCount(1, _metadataRequests);
        Assert.HasCount(1, _webApi.Requests);
        Assert.AreEqual(sql, json.GetProperty("executed_sql").GetString());
        Assert.AreEqual("accounts?sql=" + Uri.EscapeDataString(sql), _webApi.Requests[0].Url);
    }

    [TestMethod]
    [DataRow("SELECT name FROM account;", "SELECT name FROM account")]
    [DataRow(" SELECT name FROM account WHERE name = 'a;b';  ", "SELECT name FROM account WHERE name = 'a;b'")]
    [DataRow("SELECT name FROM account WHERE name = 'having' AND accountnumber = 'fetch' OR name = 'offset'", "SELECT name FROM account WHERE name = 'having' AND accountnumber = 'fetch' OR name = 'offset'")]
    public async Task SupportedLiteralsAndTerminator_PreserveNormalizedSql(string sql, string expectedSql)
    {
        _webApi.Responses.Add(Body());

        var result = await Tool().execute_sql(sql);

        var json = AssertSuccess(result, 0, 5000, false, false);
        Assert.AreEqual(expectedSql, json.GetProperty("executed_sql").GetString());
        Assert.AreEqual("accounts?sql=" + Uri.EscapeDataString(expectedSql), _webApi.Requests.Single().Url);
    }

    [TestMethod]
    [DataRow("SELECT name FROM account GROUP BY name HAVING COUNT(*) > 1", "HAVING clause is not supported.")]
    [DataRow("SELECT name FROM account WHERE name = 'having' GROUP BY name HAVING COUNT(*) > 1", "HAVING clause is not supported.")]
    [DataRow("SELECT name FROM account WHERE EXISTS (SELECT accountid FROM account)", "Subqueries in WHERE clause are not supported.")]
    [DataRow("SELECT name FROM account WHERE NOT EXISTS (SELECT accountid FROM account)", "Subqueries in WHERE clause are not supported.")]
    [DataRow("SELECT name FROM account WHERE accountid IN (SELECT parentcustomerid FROM contact)", "Subqueries in WHERE clause are not supported.")]
    [DataRow("SELECT * FROM account", "SELECT * is not supported.")]
    [DataRow("SELECT DISTINCT * FROM account", "SELECT * is not supported.")]
    [DataRow("SELECT name FROM account ORDER BY accountid OFFSET 1 ROWS", "OFFSET/FETCH is not supported.")]
    [DataRow("SELECT name FROM account ORDER BY accountid FETCH NEXT 1 ROWS ONLY", "OFFSET/FETCH is not supported.")]
    [DataRow("UPDATE account SET name = 'x'", "Only SELECT statements are supported.")]
    [DataRow("SELECT name FROM account; SELECT fullname FROM contact", "Multiple statements are not supported.")]
    public async Task UnsupportedSyntax_ReturnsExistingGuardErrorBeforeMetadata(string sql, string error)
    {
        var result = await Tool().execute_sql(sql);

        Assert.IsTrue(result.IsError == true, sql);
        Assert.AreEqual(error, Structured(result).GetProperty("error").GetString());
        AssertNoRequests();
    }

    [TestMethod]
    [DataRow("SELECT name FROM account")]
    [DataRow("SELECT DISTINCT name FROM account")]
    [DataRow("SELECT COUNT(*) AS total FROM account")]
    [DataRow("SELECT a.name AS account_name FROM account AS a")]
    [DataRow("SELECT a.name, c.fullname FROM account a INNER JOIN contact c ON a.primarycontactid = c.contactid")]
    [DataRow("SELECT a.name, c.fullname FROM account a LEFT JOIN contact c ON a.primarycontactid = c.contactid")]
    public async Task SupportedSelectForms_PassLocalGuards(string sql)
    {
        _webApi.Responses.Add(Body());

        var result = await Tool().execute_sql(sql);

        var json = AssertSuccess(result, 0, 5000, false, false);
        Assert.AreEqual(sql, json.GetProperty("executed_sql").GetString());
        Assert.HasCount(1, _metadataRequests);
        Assert.HasCount(1, _webApi.Requests);
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

    [TestMethod]
    [DataRow("1 + 1")]
    [DataRow("(1) + 1")]
    [DataRow("(1))")]
    [DataRow("(1) )")]
    public async Task InvalidTopMustNotBePartlyRemovedAndExecuted(string top)
    {
        var metadataRequests = 0;
        _sdk.OnExecute = _ =>
        {
            metadataRequests++;
            return new RetrieveEntityResponse { Results = { ["EntityMetadata"] = Metadata("account", "accounts") } };
        };
        _webApi.Responses.Add(Body());

        var result = await Tool().execute_sql($"SELECT TOP {top} name FROM account");

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "TOP must be a positive integer supported by execute_sql.");
        Assert.AreEqual(0, metadataRequests);
        Assert.IsEmpty(_webApi.Requests);
    }

    [TestMethod]
    public async Task ColumnNameBeginningWithTopMustNotBeRewritten()
    {
        const string sql = "SELECT top1 name FROM account";
        _webApi.Responses.Add(Body());

        var result = await Tool().execute_sql(sql, max_records: 10);

        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.AreEqual(sql, Structured(result).GetProperty("executed_sql").GetString());
        Assert.AreEqual(10, Structured(result).GetProperty("max_records").GetInt32());
        Assert.AreEqual("accounts?sql=" + Uri.EscapeDataString(sql), _webApi.Requests.Single().Url);
    }

    [TestMethod]
    public async Task DifferentMetadataFaultCodeMustNotMatchNotFoundMessageSubstring()
    {
        const string message = "QueryBuilderNoEntity appeared in diagnostics, but metadata permission was denied";
        _sdk.OnExecute = _ => throw new FaultException<OrganizationServiceFault>(new OrganizationServiceFault
        {
            ErrorCode = unchecked((int)0x80040220),
            Message = message
        }, new FaultReason(message));

        var result = await Tool().execute_sql("SELECT name FROM account");

        Assert.IsTrue(result.IsError == true);
        Assert.IsFalse(result.GetText().Contains("Table 'account' was not found", StringComparison.Ordinal));
        Assert.AreEqual(message, Structured(result).GetProperty("details").GetProperty("message").GetString());
        Assert.AreEqual("0x80040220", Structured(result).GetProperty("details").GetProperty("errorCode").GetString());
        Assert.IsEmpty(_webApi.Requests);
    }

    // T20-T24: TOP is a wrapper cap and must not widen the caller's validated limit.
    [TestMethod]
    [DataRow("SELECT TOP 1 name FROM account", 10, 1, "SELECT name FROM account")]
    [DataRow("SELECT TOP (1) name FROM account", 10, 1, "SELECT name FROM account")]
    [DataRow("SELECT DISTINCT TOP 1 name FROM account", 10, 1, "SELECT DISTINCT name FROM account")]
    [DataRow("SELECT DISTINCT TOP (1) name FROM account", 10, 1, "SELECT DISTINCT name FROM account")]
    [DataRow("SELECT TOP 100 name FROM account", 2, 2, "SELECT name FROM account")]
    [DataRow("SELECT TOP 2147483647 name FROM account", 50000, 50000, "SELECT name FROM account")]
    public async Task ValidTop_IsRemovedAndUsesMinimumCap(string sql, int callerCap, int effectiveCap, string expectedSql)
    {
        _webApi.Responses.Add(Body("one"));

        var result = await Tool().execute_sql(sql, max_records: callerCap);

        var json = AssertSuccess(result, 1, effectiveCap, false, false);
        Assert.AreEqual(expectedSql, json.GetProperty("executed_sql").GetString());
        Assert.AreEqual("accounts?sql=" + Uri.EscapeDataString(expectedSql), _webApi.Requests.Single().Url);
        CollectionAssert.Contains(_webApi.Requests.Single().Prefer, $"odata.maxpagesize={Math.Min(effectiveCap, 5000)}");
    }

    [TestMethod]
    public async Task TopAboveOnePage_DoesNotEnableAutomaticPaging()
    {
        _webApi.Responses.Add(Page(Enumerable.Range(1, 5000).Select(i => $"a{i}"), "accounts?$skiptoken=next"));

        var result = await Tool().execute_sql("SELECT TOP 8000 name FROM account", max_records: 10000);

        AssertSuccess(result, 5000, 8000, false, true);
        Assert.HasCount(1, _webApi.Requests);
    }

    [TestMethod]
    [DataRow("0")]
    [DataRow("-1")]
    [DataRow("2147483648")]
    [DataRow("999999999999999999")]
    [DataRow("(2")]
    [DataRow("2)")]
    [DataRow("((1))")]
    [DataRow("@limit")]
    [DataRow("(1 + 1)")]
    [DataRow("1.5")]
    [DataRow("1 PERCENT")]
    [DataRow("(1) PERCENT")]
    [DataRow("1 WITH TIES")]
    [DataRow("(1) WITH TIES")]
    public async Task InvalidTop_ReturnsPolicyErrorBeforeAnyRequest(string top)
    {
        var result = await Tool().execute_sql($"SELECT TOP {top} name FROM account");

        Assert.IsTrue(result.IsError == true, top);
        Assert.AreEqual("TOP must be a positive integer supported by execute_sql.", Structured(result).GetProperty("error").GetString());
        StringAssert.Contains(result.GetText(), "TOP n or TOP (n)");
        StringAssert.Contains(result.GetText(), "max_records");
        AssertNoRequests();
    }

    [TestMethod]
    [DataRow(0)]
    [DataRow(100000)]
    public async Task TopCannotRepairInvalidCallerCap(int cap)
    {
        var result = await Tool().execute_sql("SELECT TOP 1 name FROM account", max_records: cap);

        Assert.IsTrue(result.IsError == true);
        Assert.AreEqual("max_records must be between 1 and 50000.", Structured(result).GetProperty("error").GetString());
        AssertNoRequests();
    }

    // T08-T12: a cap alone is not evidence that rows were omitted.
    [TestMethod]
    [DataRow(1, 2, false, false, false)]
    [DataRow(1, 100, false, true, true)]
    [DataRow(2, 2, false, false, false)]
    [DataRow(2, 2, true, false, false)]
    [DataRow(2, 2, false, true, true)]
    [DataRow(2, 2, true, true, true)]
    [DataRow(3, 2, false, false, true)]
    [DataRow(3, 2, true, false, true)]
    public async Task SinglePage_TruncationDependsOnOmittedRowsOrContinuation(int serverRows, int cap, bool getAll,
        bool hasNext, bool expectedTruncated)
    {
        _webApi.Responses.Add(Page(Enumerable.Range(1, serverRows).Select(i => $"a{i}"), hasNext ? "accounts?$skiptoken=next" : null));

        var result = await Tool().execute_sql(SelectNames, max_records: cap, get_all: getAll);

        var json = AssertSuccess(result, Math.Min(serverRows, cap), cap, getAll, expectedTruncated);
        Assert.HasCount(1, _webApi.Requests);
        Assert.AreEqual(_webApi.Requests[0].Url, json.GetProperty("request_url").GetString());
        CollectionAssert.AreEqual(Enumerable.Range(1, Math.Min(serverRows, cap)).Select(i => $"a{i}").ToArray(),
            json.GetProperty("rows").EnumerateArray().Select(row => row.GetProperty("name").GetString()).ToArray());
    }

    // T13-T15: the same page-size preference applies even when the final page overshoots.
    [TestMethod]
    [DataRow(2345, 7345, false)]
    [DataRow(5000, 8000, true)]
    [DataRow(3000, 8000, false)]
    public async Task Paging_KeepsPageSizeStableAndClipsOnlyOutput(int secondPageRows, int expectedRows, bool truncated)
    {
        const string continuation = "accounts?$skiptoken=%2525%26x";
        _webApi.Responses.Add(Page(Enumerable.Range(1, 5000).Select(i => $"a{i}"), "https://fake/api/data/v9.2/" + continuation));
        _webApi.Responses.Add(Page(Enumerable.Range(1, secondPageRows).Select(i => $"b{i}")));

        var result = await Tool().execute_sql(SelectNames, max_records: 8000, get_all: true);

        var json = AssertSuccess(result, expectedRows, 8000, true, truncated);
        Assert.HasCount(2, _webApi.Requests);
        Assert.AreEqual(continuation, _webApi.Requests[1].Url);
        Assert.AreEqual(continuation, json.GetProperty("request_url").GetString());
        foreach (var request in _webApi.Requests)
            CollectionAssert.AreEqual(new[] { "odata.maxpagesize=5000", "odata.include-annotations=\"*\"" }, request.Prefer);
        Assert.AreEqual("a5000", json.GetProperty("rows")[4999].GetProperty("name").GetString());
        Assert.AreEqual("b1", json.GetProperty("rows")[5000].GetProperty("name").GetString());
        Assert.AreEqual($"b{expectedRows - 5000}", json.GetProperty("rows")[expectedRows - 1].GetProperty("name").GetString());
    }

    // T16: encoded continuation queries must survive byte-for-byte, even after a short page.
    [TestMethod]
    [DataRow("https://fake/api/data/v9.2/accounts?$skiptoken=%2525%26x%2By&pagingcookie=%3Ccookie%20p%3D%22a%26b%22%2F%3E")]
    [DataRow("accounts?$skiptoken=%2525%26x%2By&pagingcookie=%3Ccookie%20p%3D%22a%26b%22%2F%3E")]
    public async Task ShortPageWithContinuation_FollowsEncodedLinkUnchanged(string nextLink)
    {
        const string expected = "accounts?$skiptoken=%2525%26x%2By&pagingcookie=%3Ccookie%20p%3D%22a%26b%22%2F%3E";
        _webApi.Responses.Add(Page(new[] { "one" }, nextLink));
        _webApi.Responses.Add(Body("two"));

        var result = await Tool().execute_sql(SelectNames, max_records: 10, get_all: true);

        var json = AssertSuccess(result, 2, 10, true, false);
        Assert.HasCount(2, _webApi.Requests);
        Assert.AreEqual(expected, _webApi.Requests[1].Url);
        Assert.AreEqual(expected, json.GetProperty("request_url").GetString());
        Assert.IsTrue(_webApi.Requests.All(r => r.Prefer.Contains("odata.maxpagesize=10")));
    }

    // T17-T19, T28: use the exact metadata EntitySetName and encode SQL once.
    [TestMethod]
    [DataRow("contact", "contacts", "SELECT fullname FROM contact WHERE fullname = 'having from account'")]
    [DataRow("new_person", "new_people_collection", "SELECT new_name FROM new_person")]
    public async Task MetadataEntitySet_DeterminesPathWithoutPluralizing(string table, string entitySet, string sql)
    {
        _metadataResponse = request => Metadata(request.LogicalName, entitySet);
        _webApi.Responses.Add(Body());

        var result = await Tool().execute_sql(sql);

        var json = AssertSuccess(result, 0, 5000, false, false);
        Assert.AreEqual(table, _metadataRequests.Single().LogicalName);
        Assert.AreEqual(entitySet + "?sql=" + Uri.EscapeDataString(sql), _webApi.Requests.Single().Url);
        Assert.AreEqual(_webApi.Requests.Single().Url, json.GetProperty("request_url").GetString());
    }

    [TestMethod]
    public async Task UnicodeAndReservedCharacters_RoundTripThroughSingleEncoding()
    {
        const string sql = "SELECT name FROM account WHERE name = 'Việt Nam 100% & A+B O''Brien'";
        _webApi.Responses.Add(Body());

        var result = await Tool().execute_sql(sql);

        var json = AssertSuccess(result, 0, 5000, false, false);
        var url = _webApi.Requests.Single().Url;
        Assert.AreEqual("accounts?sql=" + Uri.EscapeDataString(sql), url);
        Assert.AreEqual(sql, Uri.UnescapeDataString(url.Substring("accounts?sql=".Length)));
        Assert.AreEqual(sql, json.GetProperty("executed_sql").GetString());
    }

    // T25: hints must be callable using the current get_tables signature.
    [TestMethod]
    public async Task WildcardError_HintsCurrentMetadataArguments()
    {
        var result = await Tool().execute_sql("SELECT * FROM account");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "get_tables(entity_name=");
        StringAssert.Contains(result.GetText(), "detail_level='standard'");
        Assert.IsFalse(result.GetText().Contains("get_tables(name=", StringComparison.Ordinal));
        Assert.IsFalse(result.GetText().Contains("include_columns", StringComparison.Ordinal));
        AssertNoRequests();
    }

    // T27: preserve public inputs/flags and the exact eight success keys.
    [TestMethod]
    public async Task RegistrationDefaultsAndSuccessContract_ArePreserved()
    {
        var method = typeof(ExecuteSqlTool).GetMethod(nameof(ExecuteSqlTool.execute_sql))!;
        var tool = method.GetCustomAttribute<McpServerToolAttribute>()!;
        Assert.AreEqual("execute_sql", tool.Name);
        Assert.IsTrue(tool.ReadOnly);
        Assert.IsTrue(tool.Idempotent);
        Assert.IsFalse(tool.Destructive);
        Assert.IsTrue(tool.UseStructuredContent);
        Assert.AreEqual(typeof(SqlQueryResult), tool.OutputSchemaType);
        var parameters = method.GetParameters();
        CollectionAssert.AreEqual(new[] { "sql", "max_records", "get_all" }, parameters.Select(p => p.Name).ToArray());
        CollectionAssert.AreEqual(new object[] { "", 5000, false }, parameters.Select(p => p.DefaultValue).ToArray());
        _webApi.Responses.Add(Body("one"));

        var result = await Tool().execute_sql(SelectNames);

        var json = AssertSuccess(result, 1, 5000, false, false);
        CollectionAssert.AreEquivalent(new[] { "row_count", "max_records", "get_all", "result_truncated", "executed_sql", "request_url", "rows", "summary" },
            json.EnumerateObject().Select(property => property.Name).ToArray());
        Assert.AreEqual(SelectNames, json.GetProperty("executed_sql").GetString());
        Assert.AreEqual(HttpMethod.Get, _webApi.Requests.Single().Method);
        Assert.IsNull(_webApi.Requests.Single().Body);
    }

    // T28-T30: malformed metadata differs from confirmed missing table and other faults.
    [TestMethod]
    [DataRow(true, null)]
    [DataRow(false, null)]
    [DataRow(false, "")]
    public async Task IncompleteMetadata_ReturnsMissingEntitySetWithoutHttp(bool nullMetadata, string? entitySet)
    {
        _metadataResponse = _ => nullMetadata ? null : Metadata("account", entitySet);

        var result = await Tool().execute_sql(SelectNames);

        Assert.IsTrue(result.IsError == true);
        Assert.AreEqual("Metadata response is missing EntitySetName.", Structured(result).GetProperty("error").GetString());
        Assert.IsFalse(result.GetText().Contains("was not found", StringComparison.Ordinal));
        Assert.HasCount(1, _metadataRequests);
        Assert.IsEmpty(_webApi.Requests);
    }

    [TestMethod]
    public async Task ConfirmedMissingEntity_UsesTableNotFoundAndCurrentMetadataHint()
    {
        _metadataResponse = _ => throw SdkFault(unchecked((int)0x80041102), "QueryBuilderNoEntity");

        var result = await Tool().execute_sql("SELECT name FROM missing_entity");

        Assert.IsTrue(result.IsError == true);
        Assert.AreEqual("Table 'missing_entity' was not found.", Structured(result).GetProperty("error").GetString());
        StringAssert.Contains(result.GetText(), "get_tables(entity_name=");
        StringAssert.Contains(result.GetText(), "detail_level='standard'");
        Assert.HasCount(1, _metadataRequests);
        Assert.IsEmpty(_webApi.Requests);
    }

    [TestMethod]
    [DataRow(unchecked((int)0x80040220), "Metadata permission denied")]
    [DataRow(unchecked((int)0x80072321), "Metadata request temporarily throttled")]
    [DataRow(unchecked((int)0x81234567), "Unknown metadata server fault")]
    public async Task OtherMetadataFaults_KeepTypedErrorDetailsWithoutNotFound(int errorCode, string message)
    {
        _metadataResponse = _ => throw SdkFault(errorCode, message);

        var result = await Tool().execute_sql(SelectNames);

        Assert.IsTrue(result.IsError == true);
        var json = Structured(result);
        Assert.IsFalse(result.GetText().Contains("Table 'account' was not found", StringComparison.Ordinal));
        Assert.AreEqual(message, json.GetProperty("details").GetProperty("message").GetString());
        Assert.AreEqual($"0x{errorCode:X8}", json.GetProperty("details").GetProperty("errorCode").GetString());
        Assert.AreEqual("DataverseFault", json.GetProperty("details").GetProperty("kind").GetString());
        StringAssert.Contains(result.GetText(), message);
        Assert.HasCount(1, _metadataRequests);
        Assert.IsEmpty(_webApi.Requests);
    }

    // T31: transport failures on a later page cannot return accumulated rows as success.
    [TestMethod]
    [DataRow(1)]
    [DataRow(2)]
    public async Task HttpSdkFaultOnAnyPage_PreservesErrorEnvelopeAndOriginalFault(int failedPage)
    {
        const string message = "SQL HTTP request rejected by Dataverse";
        if (failedPage == 2)
            _webApi.Responses.Add(Page(new[] { "one" }, "accounts?$skiptoken=next"));
        _webApi.Failures[failedPage] = SdkFault(unchecked((int)0x81234567), message);

        var result = await Tool().execute_sql(SelectNames, max_records: 10, get_all: true);

        Assert.IsTrue(result.IsError == true);
        var json = Structured(result);
        Assert.AreEqual(message, json.GetProperty("details").GetProperty("message").GetString());
        Assert.AreEqual("0x81234567", json.GetProperty("details").GetProperty("errorCode").GetString());
        Assert.IsFalse(json.TryGetProperty("rows", out _));
        StringAssert.Contains(result.GetText(), "[Error]");
        StringAssert.Contains(result.GetText(), "[Detail]");
        Assert.HasCount(failedPage, _webApi.Requests);
    }

    [TestMethod]
    [DataRow(1)]
    [DataRow(2)]
    public async Task HttpNetworkExceptionOnAnyPage_PreservesStructuredOriginalMessage(int failedPage)
    {
        const string message = "SQL connection interrupted during response";
        if (failedPage == 2)
            _webApi.Responses.Add(Page(new[] { "one" }, "accounts?$skiptoken=next"));
        _webApi.Failures[failedPage] = new HttpRequestException(message);

        var result = await Tool().execute_sql(SelectNames, max_records: 10, get_all: true);

        Assert.IsTrue(result.IsError == true);
        var json = Structured(result);
        Assert.AreEqual(message, json.GetProperty("details").GetProperty("message").GetString());
        Assert.AreEqual(typeof(HttpRequestException).FullName, json.GetProperty("details").GetProperty("exceptionType").GetString());
        Assert.IsFalse(json.TryGetProperty("rows", out _));
        Assert.HasCount(failedPage, _webApi.Requests);
    }

    // T35: all JSON values remain serializable after source JsonDocuments are disposed.
    [TestMethod]
    public async Task RowTypesAliasesAndAnnotations_SurviveSerializationAfterReturn()
    {
        const string body = """
            {"value":[{"nullable":null,"enabled":true,"disabled":false,"count":42,"amount":12.50,"big":9007199254740993,"createdon":"2026-09-15T01:02:03Z","accountid":"01234567-89ab-cdef-0123-456789abcdef","contact.fullname":"Ada","statecode@OData.Community.Display.V1.FormattedValue":"Active","@odata.etag":"W/\"123\""}]}
            """;
        _webApi.Responses.Add(body);

        var result = await Tool().execute_sql(SelectNames);

        var json = AssertSuccess(result, 1, 5000, false, false);
        using var serialized = JsonDocument.Parse(JsonSerializer.Serialize(json));
        var row = serialized.RootElement.GetProperty("rows")[0];
        using var source = JsonDocument.Parse(body);
        Assert.IsTrue(JsonElement.DeepEquals(source.RootElement.GetProperty("value")[0], row));
        Assert.AreEqual(JsonValueKind.Null, row.GetProperty("nullable").ValueKind);
        Assert.AreEqual(JsonValueKind.True, row.GetProperty("enabled").ValueKind);
        Assert.AreEqual(JsonValueKind.False, row.GetProperty("disabled").ValueKind);
        Assert.AreEqual(42, row.GetProperty("count").GetInt32());
        Assert.AreEqual(12.50m, row.GetProperty("amount").GetDecimal());
        Assert.AreEqual(9007199254740993L, row.GetProperty("big").GetInt64());
        Assert.AreEqual(JsonValueKind.String, row.GetProperty("createdon").ValueKind);
        Assert.AreEqual(JsonValueKind.String, row.GetProperty("accountid").ValueKind);
        Assert.AreEqual("Ada", row.GetProperty("contact.fullname").GetString());
        Assert.AreEqual("Active", row.GetProperty("statecode@OData.Community.Display.V1.FormattedValue").GetString());
        Assert.AreEqual("W/\"123\"", row.GetProperty("@odata.etag").GetString());
    }

    private sealed class FakeWebApi : IWebApiExecutor, IDisposable
    {
        public List<string> Responses { get; } = new();
        public Dictionary<int, Exception> Failures { get; } = new();
        public List<Request> Requests { get; } = new();
        private readonly List<HttpResponseMessage> _createdResponses = new();
        public string CurrentAccessToken => "fake-token";

        public Task<HttpResponseMessage> ExecuteWebRequestAsync(HttpMethod method, string queryString, string body,
            Dictionary<string, List<string>> customHeaders, string contentType = null, CancellationToken cancellationToken = default)
        {
            Requests.Add(new Request(queryString, new List<string>(customHeaders["Prefer"]), method, body));
            if (Failures.TryGetValue(Requests.Count, out var exception))
                return Task.FromException<HttpResponseMessage>(exception);
            if (Responses.Count == 0)
                throw new InvalidOperationException($"Unexpected SQL HTTP request '{queryString}'. Configure every response explicitly.");
            var content = Responses[0];
            Responses.RemoveAt(0);
            var response = new HttpResponseMessage(HttpStatusCode.OK) { Content = new StringContent(content) };
            _createdResponses.Add(response);
            return Task.FromResult(response);
        }

        public HttpResponseMessage ExecuteWebRequest(HttpMethod method, string queryString, string body,
            Dictionary<string, List<string>> customHeaders, string contentType = null, CancellationToken cancellationToken = default)
            => throw new NotSupportedException();

        public void Dispose()
        {
            foreach (var response in _createdResponses) response.Dispose();
        }

        public sealed record Request(string Url, List<string> Prefer, HttpMethod Method, string? Body);
    }
}
