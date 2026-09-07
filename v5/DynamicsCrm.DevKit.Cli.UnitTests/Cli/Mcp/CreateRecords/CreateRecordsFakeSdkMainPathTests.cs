using DynamicsCrm.DevKit.Cli.Mcp;
using ModelContextProtocol.Protocol;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using CliCreateRecordsTool = DynamicsCrm.DevKit.Cli.Mcp.Tools.CreateRecordsTool;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.CrossTool;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.CreateRecords;

/// <summary>
/// Full create_records pipeline on a FakeSdkClient: entity resolution,
/// parallel ExecuteMultiple chunking (cloned workers), the import sequence
/// number auto-fill paths, CSV conversion end-to-end, partial failure
/// reporting, and the bypass role gate success branch.
/// Each test uses a unique entity logical name because EntityParserHelper
/// caches metadata statically.
/// </summary>
[TestClass]
public sealed class CreateRecordsFakeSdkMainPathTests
{
    private FakeSdkClient _fake = null!;
    private Dictionary<string, EntityMetadata> _entities = null!;
    private EntityCollection _aggregateRows = null!;
    private EntityCollection _lookupRows = null!;
    private EntityCollection _roleRows = null!;
    private readonly List<CreateRequest> _capturedCreates = new();
    private Func<ExecuteMultipleRequest, ExecuteMultipleResponse>? _onExecuteMultiple;
    private Exception? _onExecuteMultipleThrow;

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _entities = new Dictionary<string, EntityMetadata>(StringComparer.OrdinalIgnoreCase);
        _aggregateRows = new EntityCollection();
        _lookupRows = new EntityCollection();
        _roleRows = new EntityCollection();
        _fake.OnExecute = ExecuteHandler;
        _fake.OnRetrieveMultiple = RetrieveMultipleHandler;
    }

    public void Dispose() => _fake.Dispose();

    private string UniqueEntity(string prefix = "acct")
    {
        var logical = $"{prefix}_{Guid.NewGuid():N}".Substring(0, prefix.Length + 9);
        _entities[logical] = TestMetadata.Entity(logical, prefix,
            TestMetadata.String("name", "Name"),
            TestMetadata.Integer("importsequencenumber"));
        return logical;
    }

    private OrganizationResponse ExecuteHandler(OrganizationRequest request) => request switch
    {
        RetrieveAllEntitiesRequest => new RetrieveAllEntitiesResponse
        {
            Results = { ["EntityMetadata"] = _entities.Values.ToArray() }
        },
        RetrieveEntityRequest r => new RetrieveEntityResponse
        {
            Results = { ["EntityMetadata"] = _entities[r.LogicalName] }
        },
        WhoAmIRequest => new WhoAmIResponse
        {
            Results =
            {
                ["UserId"] = Guid.NewGuid(),
                ["BusinessUnitId"] = Guid.NewGuid(),
                ["OrganizationId"] = Guid.NewGuid()
            }
        },
        ExecuteMultipleRequest em => ExecuteMultipleHandler(em),
        _ => throw new InvalidOperationException($"Unexpected request '{request.RequestName}'")
    };

    private ExecuteMultipleResponse ExecuteMultipleHandler(ExecuteMultipleRequest request)
    {
        _capturedCreates.AddRange(request.Requests.Cast<CreateRequest>());
        if (_onExecuteMultipleThrow != null) throw _onExecuteMultipleThrow;
        if (_onExecuteMultiple != null) return _onExecuteMultiple(request);

        var items = new ExecuteMultipleResponseItemCollection();
        for (var i = 0; i < request.Requests.Count; i++)
        {
            items.Add(new ExecuteMultipleResponseItem
            {
                RequestIndex = i,
                Response = new OrganizationResponse { Results = { ["id"] = Guid.NewGuid() } }
            });
        }
        return new ExecuteMultipleResponse { Results = { ["Responses"] = items } };
    }

    private EntityCollection RetrieveMultipleHandler(QueryBase query)
    {
        var fetch = (query as FetchExpression)?.Query ?? "";
        if (fetch.Contains("systemuserroles")) return _roleRows;
        if (fetch.Contains("aggregate")) return _aggregateRows;
        if (fetch.Contains("statecode")) return _lookupRows;
        return new EntityCollection();
    }

    private CliCreateRecordsTool NewTool(bool dryRun = false) =>
        new(_fake.Client, new McpDryRunOptions { DryRun = dryRun }, DryRunTestHelpers.NormalContext());

    private EntityMetadataCollection ToCollection()
    {
        var collection = new EntityMetadataCollection();
        foreach (var meta in _entities.Values) collection.Add(meta);
        return collection;
    }

    private static JsonElement Structured(CallToolResult result) =>
        JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;

    private static List<string> Warnings(JsonElement json) =>
        json.GetProperty("warnings").EnumerateArray().Select(w => w.GetString()!).ToList();

    // ──────────────────────────────────────────────
    // main success path
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Create_Success_DefaultParallelism_StampsBatchIsn()
    {
        var entity = UniqueEntity();
        _aggregateRows.Entities.Add(new Entity(entity)
        {
            ["max_isn"] = new AliasedValue(entity, "importsequencenumber", 999989)
        });

        var result = await NewTool().create_records(entity, """[{"name":"A"},{"name":"B"}]""", 0, false);

        Assert.IsFalse(result.IsError == true, result.GetText());
        var json = Structured(result);
        Assert.AreEqual("created", json.GetProperty("status").GetString());
        Assert.AreEqual(2, json.GetProperty("succeeded").GetInt32());
        Assert.AreEqual(999990, json.GetProperty("importSequenceNumber").GetInt32());
        Assert.IsTrue(json.GetProperty("usedDefaultParallelism").GetBoolean());
        Assert.AreEqual("inline-json", json.GetProperty("inputFormat").GetString());
        var warnings = Warnings(json);
        Assert.IsTrue(warnings.Any(w => w.Contains("Batched into 1 chunk(s)")), string.Join("|", warnings));
        Assert.IsTrue(warnings.Any(w => w.Contains("Default parallelism")), string.Join("|", warnings));
        StringAssert.Contains(result.GetText(), "Created 2/2");

        Assert.HasCount(2, _capturedCreates, "Both records go out as CreateRequest items.");
        Assert.IsTrue(_capturedCreates.All(c => (int)c.Target["importsequencenumber"] == 999990),
            "Every create in the batch shares the auto-filled ISN.");
        Assert.IsTrue(_capturedCreates.All(c => (string)c.Target["name"] is "A" or "B"));
    }

    [TestMethod]
    public async Task Create_UserProvidedIsnWins_AutoFillFillsRest()
    {
        var entity = UniqueEntity();
        _aggregateRows.Entities.Add(new Entity(entity)
        {
            ["max_isn"] = new AliasedValue(entity, "importsequencenumber", 2000000)
        });

        var result = await NewTool().create_records(
            entity, """[{"name":"A","importsequencenumber":777},{"name":"B"}]""", 1, false);

        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.AreEqual(2000001, Structured(result).GetProperty("importSequenceNumber").GetInt32(),
            "Computed batch ISN = max(baseline, maxInTable+1).");
        var userRecord = _capturedCreates.Single(c => (string)c.Target["name"] == "A");
        var autoRecord = _capturedCreates.Single(c => (string)c.Target["name"] == "B");
        Assert.AreEqual(777, (int)userRecord.Target["importsequencenumber"]);
        Assert.AreEqual(2000001, (int)autoRecord.Target["importsequencenumber"]);
    }

    [TestMethod]
    public async Task Create_EmptyAggregateTable_UsesBaseline()
    {
        var entity = UniqueEntity();
        // _aggregateRows stays empty → IsnBaseline path.

        var result = await NewTool().create_records(entity, """[{"name":"A"}]""", 1, false);

        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.AreEqual(999990, Structured(result).GetProperty("importSequenceNumber").GetInt32());
    }

    [TestMethod]
    public async Task Create_EntityWithoutIsnAttribute_SkipsAutoFillSilently()
    {
        var logical = $"{Guid.NewGuid():N}".Substring(0, 13);
        _entities[logical] = TestMetadata.Entity(logical, "plain", TestMetadata.String("name", "Name"));

        var result = await NewTool().create_records(logical, """[{"name":"A"}]""", 1, false);

        Assert.IsFalse(result.IsError == true, result.GetText());
        var json = Structured(result);
        Assert.IsFalse(json.TryGetProperty("importSequenceNumber", out _), "No ISN field → no value reported.");
        Assert.IsFalse(_capturedCreates.Any() && _capturedCreates[0].Target.Contains("importsequencenumber"));
    }

    [TestMethod]
    public async Task Create_ExplicitMaxParallelism_ClampedTo52_NoDefaultWarning()
    {
        var entity = UniqueEntity();

        var result = await NewTool().create_records(entity, """[{"name":"A"}]""", 100, false);

        Assert.IsFalse(result.IsError == true, result.GetText());
        var json = Structured(result);
        Assert.AreEqual(52, json.GetProperty("parallelism").GetInt32());
        Assert.IsFalse(json.GetProperty("usedDefaultParallelism").GetBoolean());
        Assert.IsFalse(Warnings(json).Any(w => w.Contains("Default parallelism")));
    }

    // ──────────────────────────────────────────────
    // dry-run / failure paths
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Create_DryRun_PreviewsPendingItems()
    {
        var entity = UniqueEntity();

        var result = await NewTool(dryRun: true).create_records(
            entity, """[{"name":"A"},{"name":"B"},{"name":"C"}]""", 1, false);

        Assert.IsFalse(result.IsError == true, result.GetText());
        var json = Structured(result);
        Assert.AreEqual("not_executed", json.GetProperty("status").GetString());
        Assert.HasCount(3, json.GetProperty("items").EnumerateArray());
        Assert.AreEqual(0, json.GetProperty("succeeded").GetInt32());
        Assert.AreEqual(999990, json.GetProperty("importSequenceNumber").GetInt32(),
            "Dry-run still reports the same batch ISN the live run would use.");
        StringAssert.Contains(result.GetText(), "Would CREATE 3");
        Assert.IsEmpty(_capturedCreates, "Dry run must not send creates.");
    }

    [TestMethod]
    public async Task Create_PartialFailure_ReportsPerItemFault()
    {
        var entity = UniqueEntity();
        _onExecuteMultiple = request =>
        {
            var items = new ExecuteMultipleResponseItemCollection();
            for (var i = 0; i < request.Requests.Count; i++)
            {
                items.Add(i == 1
                    ? new ExecuteMultipleResponseItem
                    {
                        RequestIndex = i,
                        Fault = new OrganizationServiceFault { Message = "duplicate name" }
                    }
                    : new ExecuteMultipleResponseItem
                    {
                        RequestIndex = i,
                        Response = new OrganizationResponse { Results = { ["id"] = Guid.NewGuid() } }
                    });
            }
            return new ExecuteMultipleResponse { Results = { ["Responses"] = items } };
        };

        var result = await NewTool().create_records(entity, """[{"name":"A"},{"name":"B"}]""", 1, false);

        var json = Structured(result);
        Assert.AreEqual("partial", json.GetProperty("status").GetString());
        Assert.AreEqual(1, json.GetProperty("succeeded").GetInt32());
        Assert.AreEqual(1, json.GetProperty("failed").GetInt32());
        var failedItem = json.GetProperty("items").EnumerateArray()
            .First(it => it.GetProperty("status").GetString() == "failed");
        StringAssert.Contains(failedItem.GetProperty("error").GetString(), "duplicate name");
        StringAssert.Contains(result.GetText(), "Created 1/2");
    }

    [TestMethod]
    public async Task Create_ChunkLevelException_MarksAllItemsFailed()
    {
        var entity = UniqueEntity();
        _onExecuteMultipleThrow = new TimeoutException("connection reset");

        var result = await NewTool().create_records(entity, """[{"name":"A"},{"name":"B"}]""", 1, false);

        var json = Structured(result);
        Assert.AreEqual("failed", json.GetProperty("status").GetString());
        Assert.AreEqual(0, json.GetProperty("succeeded").GetInt32());
        Assert.IsTrue(json.GetProperty("items").EnumerateArray()
            .All(it => it.GetProperty("error").GetString()!.Contains("connection reset")));
        StringAssert.Contains(result.GetText(), "Failed to create any of 2");
    }

    [TestMethod]
    public async Task Create_MissingItemResponse_ReportsNoResponseError()
    {
        var entity = UniqueEntity();
        _onExecuteMultiple = _ => new ExecuteMultipleResponse
        {
            Results = { ["Responses"] = new ExecuteMultipleResponseItemCollection() }
        };

        var result = await NewTool().create_records(entity, """[{"name":"A"}]""", 1, false);

        var json = Structured(result);
        Assert.AreEqual("failed", json.GetProperty("status").GetString());
        StringAssert.Contains(
            json.GetProperty("items").EnumerateArray().First().GetProperty("error").GetString()!,
            "No response returned");
    }

    [TestMethod]
    public async Task Create_ParseFailure_SurfacesPerItemAndOthersStillCreate()
    {
        var entity = UniqueEntity();
        // Field "nosuchfield" is not in metadata → ParseFieldsToEntity throws → pre-parse failure.

        var result = await NewTool().create_records(
            entity, """[{"name":"A"},{"nosuchfield":"x"}]""", 1, false);

        var json = Structured(result);
        Assert.AreEqual("partial", json.GetProperty("status").GetString());
        var failed = json.GetProperty("items").EnumerateArray()
            .First(it => it.GetProperty("status").GetString() == "failed");
        Assert.AreEqual(1, failed.GetProperty("index").GetInt32());
        Assert.IsEmpty(_capturedCreates.Where(c => c.Target.Contains("nosuchfield")));
        Assert.HasCount(1, _capturedCreates, "Only the parseable record reaches the chunk.");
    }

    // ──────────────────────────────────────────────
    // bypass role gate success branch
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Create_BypassTrue_SystemAdministrator_SendsBypassParameter()
    {
        var entity = UniqueEntity();
        _roleRows.Entities.Add(new Entity("role") { ["name"] = "System Administrator" });

        var result = await NewTool().create_records(entity, """[{"name":"A"}]""", 1, true);

        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.IsTrue(Structured(result).GetProperty("bypassCustomLogic").GetBoolean());
        StringAssert.Contains(result.GetText(), "bypass=on");
        Assert.IsTrue(_capturedCreates.All(c =>
            (string)c.Parameters["BypassBusinessLogicExecution"] == "CustomSync,CustomAsync"),
            "Every chunked create carries the bypass parameter.");
    }

    // ──────────────────────────────────────────────
    // CSV end-to-end
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Create_FromCsv_TypedColumns_LookupByName_AndWarnings()
    {
        var entity = UniqueEntity();
        _entities[entity] = TestMetadata.Entity(entity, "acct",
            TestMetadata.String("name", "Name"),
            TestMetadata.Integer("numberofemployees", "Age"),
            TestMetadata.Money("revenue", "Revenue"),
            TestMetadata.Boolean("donotemail", "No Email"),
            TestMetadata.Picklist("new_choice", "Choice", (1, "Active"), (2, "Inactive")),
            TestMetadata.Lookup("primarycontactid", "Manager", "contact"));
        _entities["contact"] = WithPrimaryName(
            TestMetadata.Entity("contact", "contact", TestMetadata.String("fullname", "Full Name")),
            "fullname");

        var contactId = Guid.NewGuid();
        _lookupRows.Entities.Add(new Entity("contact", contactId));

        var csvPath = Path.Combine(Path.GetTempPath(), $"devkit-csv-{Guid.NewGuid():N}.csv");
        File.WriteAllLines(csvPath,
        [
            "Name,Age,Revenue,No Email,Choice,Manager",
            "Contoso,42,1000.50,yes,Active,Mary",
            "BadCo,NaN,unknown,maybe,Inactive,Mary",
            ",,,,,",
            "Solo,7,1,no,Wrong,Mary"
        ]);
        try
        {
            var result = await NewTool().create_records(entity, csvPath, 1, false);

            var json = Structured(result);
            Assert.AreEqual("csv", json.GetProperty("inputFormat").GetString());
            Assert.AreEqual("created", json.GetProperty("status").GetString(), result.GetText());
            Assert.AreEqual(3, json.GetProperty("succeeded").GetInt32(), result.GetText());

            var warnings = Warnings(json);
            Assert.IsTrue(warnings.Any(w => w.Contains("'numberofemployees' value 'NaN' is not a valid integer")), string.Join("|", warnings));
            Assert.IsTrue(warnings.Any(w => w.Contains("'revenue' value 'unknown' is not a valid number")), string.Join("|", warnings));
            Assert.IsTrue(warnings.Any(w => w.Contains("'donotemail' value 'maybe' is not a valid boolean")), string.Join("|", warnings));
            Assert.IsTrue(warnings.Any(w => w.Contains("picklist 'new_choice' label 'Wrong' not found")), string.Join("|", warnings));
            Assert.IsTrue(warnings.Any(w => w.Contains("all fields skipped")), string.Join("|", warnings));

            Assert.HasCount(3, _capturedCreates, "Contoso, BadCo and Solo survive; the all-skipped row does not.");
            var contoso = _capturedCreates.Single(c => (string)c.Target["name"] == "Contoso");
            Assert.AreEqual(42, (int)contoso.Target["numberofemployees"]);
            Assert.AreEqual(1000.50m, ((Money)contoso.Target["revenue"]).Value);
            Assert.AreEqual(true, (bool)contoso.Target["donotemail"]);
            Assert.AreEqual(1, ((OptionSetValue)contoso.Target["new_choice"]).Value);
            Assert.AreEqual(contactId.ToString(), (string)((EntityReference)contoso.Target["primarycontactid"]).Id.ToString());
        }
        finally { File.Delete(csvPath); }
    }

    [TestMethod]
    public async Task Create_FromCsv_DuplicateHeaderMapping_RejectsWholeFile()
    {
        var entity = UniqueEntity();
        var csvPath = Path.Combine(Path.GetTempPath(), $"devkit-csv-{Guid.NewGuid():N}.csv");
        File.WriteAllLines(csvPath, ["Name,Name", "Contoso,Dup"]);
        try
        {
            var result = await NewTool().create_records(entity, csvPath, 1, false);

            Assert.IsTrue(result.IsError == true, result.GetText());
            StringAssert.Contains(result.GetText(), "Duplicate field mapping");
        }
        finally { File.Delete(csvPath); }
    }

    [TestMethod]
    public async Task Create_FromCsv_NoHeadersMatch_ReturnsEmptyAndWarning()
    {
        var entity = UniqueEntity();
        var csvPath = Path.Combine(Path.GetTempPath(), $"devkit-csv-{Guid.NewGuid():N}.csv");
        File.WriteAllLines(csvPath, ["Bogus1,Bogus2", "a,b"]);
        try
        {
            var result = await NewTool().create_records(entity, csvPath, 1, false);

            Assert.IsTrue(result.IsError == true, result.GetText(), "Empty CSV array → 'records_json array is empty'.");
            var text = result.GetText();
            StringAssert.Contains(text, "array is empty");
        }
        finally { File.Delete(csvPath); }
    }

    [TestMethod]
    public async Task Create_MissingCsvAndJsonFiles_ReportFileNotFound()
    {
        var entity = UniqueEntity();
        var missing = Path.Combine(Path.GetTempPath(), "missing-" + Guid.NewGuid().ToString("N") + ".csv");
        var result = await NewTool().create_records(entity, missing, 1, false);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "File not found");

        var missingJson = Path.Combine(Path.GetTempPath(), "missing-" + Guid.NewGuid().ToString("N") + ".json");
        var result2 = await NewTool().create_records(entity, missingJson, 1, false);
        Assert.IsTrue(result2.IsError == true);
        StringAssert.Contains(result2.GetText(), "File not found");
    }

    [TestMethod]
    public async Task Create_InputShapeErrors_NonArrayEmptyAndTooBig()
    {
        var entity = UniqueEntity();
        var tool = NewTool();

        var notArray = await tool.create_records(entity, """{"name":"A"}""", 1, false);
        Assert.IsTrue(notArray.IsError == true);
        StringAssert.Contains(notArray.GetText(), "must be a JSON array");

        var empty = await tool.create_records(entity, "[]", 1, false);
        Assert.IsTrue(empty.IsError == true);
        StringAssert.Contains(empty.GetText(), "array is empty");

        var tooBig = "[" + string.Join(",", Enumerable.Repeat("""{"name":"A"}""", 5001)) + "]";
        var big = await tool.create_records(entity, tooBig, 1, false);
        Assert.IsTrue(big.IsError == true);
        StringAssert.Contains(big.GetText(), "Max is 5000");
    }

    // ──────────────────────────────────────────────
    // helpers
    // ──────────────────────────────────────────────

    private static EntityMetadata WithPrimaryName(EntityMetadata meta, string primaryName)
    {
        typeof(EntityMetadata).GetProperty("PrimaryNameAttribute")!.SetValue(meta, primaryName);
        return meta;
    }
}
