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
    private readonly List<UpdateRequest> _capturedUpdates = new();
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
        _capturedCreates.AddRange(request.Requests.OfType<CreateRequest>());
        _capturedUpdates.AddRange(request.Requests.OfType<UpdateRequest>());
        if (_onExecuteMultipleThrow != null) throw _onExecuteMultipleThrow;
        if (_onExecuteMultiple != null) return _onExecuteMultiple(request);

        var items = new ExecuteMultipleResponseItemCollection();
        for (var i = 0; i < request.Requests.Count; i++)
        {
            items.Add(new ExecuteMultipleResponseItem
            {
                RequestIndex = i,
                Response = request.Requests[i] is CreateRequest create
                    ? new CreateResponse { Results = { ["id"] = create.Target.Id == Guid.Empty ? Guid.NewGuid() : create.Target.Id } }
                    : new UpdateResponse()
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

    private string MigrationEntity()
    {
        var entity = UniqueEntity();
        var state = new StateAttributeMetadata
        {
            LogicalName = "statecode",
            DisplayName = TestMetadata.Lbl("Status"),
            OptionSet = new OptionSetMetadata(new OptionMetadataCollection
            {
                new StateOptionMetadata { Value = 0, InvariantName = "Active", DefaultStatus = 1, Label = new Label("Enabled", 1033) },
                new StateOptionMetadata { Value = 1, InvariantName = "Inactive", DefaultStatus = 2, Label = new Label("Disabled", 1033) }
            })
        };
        var status = new StatusAttributeMetadata
        {
            LogicalName = "statuscode",
            DisplayName = TestMetadata.Lbl("Status Reason"),
            IsValidForCreate = true,
            OptionSet = new OptionSetMetadata(new OptionMetadataCollection
            {
                new StatusOptionMetadata { Value = 1, State = 0, Label = new Label("Open", 1033) },
                new StatusOptionMetadata { Value = 2, State = 1, Label = new Label("Closed", 1033) },
                new StatusOptionMetadata { Value = 42, State = 1, Label = new Label("Posted", 1033) }
            })
        };
        var metadata = TestMetadata.Entity(entity, null,
            TestMetadata.String("name", "Name"),
            new UniqueIdentifierAttributeMetadata { LogicalName = "activityid", DisplayName = TestMetadata.Lbl("Record ID") },
            new UniqueIdentifierAttributeMetadata { LogicalName = "trackingid", DisplayName = TestMetadata.Lbl("Tracking ID") },
            state, status);
        TestMetadata.Set(metadata, nameof(EntityMetadata.PrimaryIdAttribute), "activityid");
        _entities[entity] = metadata;
        return entity;
    }

    [TestMethod]
    [DataRow(false)]
    [DataRow(true)]
    public async Task Create_MigrationPreservesGuidsAndUpdatesInactiveRecords(bool csv)
    {
        var entity = MigrationEntity();
        var postedId = Guid.NewGuid();
        var inactiveId = Guid.NewGuid();
        var activeId = Guid.NewGuid();
        var trackingId = Guid.NewGuid();
        var csvPath = Path.Combine(Path.GetTempPath(), $"{Guid.NewGuid()}.csv");
        var input = $$"""
            [
                {"activityid":"{{postedId}}","name":"Posted","trackingid":"{{trackingId}}","statuscode":"Posted"},
                {"activityid":"{{inactiveId}}","name":"Inactive","statecode":1},
                {"activityid":"{{activeId}}","name":"Active","statecode":"Active","statuscode":1}
            ]
            """;
        if (csv)
        {
            File.WriteAllText(csvPath, $"""
                Record ID,Name,Tracking ID,Status,Status Reason
                {postedId},Posted,{trackingId},Inactive,Posted
                {inactiveId},Inactive,,1,
                {activeId},Active,,Active,1
                """);
            input = csvPath;
        }
        _roleRows.Entities.Add(new Entity("role") { ["name"] = "System Administrator" });

        try
        {
            var result = await NewTool().create_records(entity, input, 1, true);
            Assert.IsFalse(result.IsError == true, result.GetText());
            Assert.HasCount(3, _capturedCreates);
            Assert.AreEqual(postedId, _capturedCreates[0].Target.Id);
            Assert.AreEqual(postedId, _capturedCreates[0].Target.GetAttributeValue<Guid>("activityid"));
            Assert.AreEqual(trackingId, _capturedCreates[0].Target.GetAttributeValue<Guid>("trackingid"));
            Assert.IsTrue(_capturedCreates.All(request => !request.Target.Contains("statecode")));
            Assert.IsFalse(_capturedCreates[0].Target.Contains("statuscode"));
            Assert.AreEqual(1, _capturedCreates[2].Target.GetAttributeValue<OptionSetValue>("statuscode").Value);
            CollectionAssert.AreEqual(new[] { postedId, inactiveId }, _capturedUpdates.Select(request => request.Target.Id).ToArray());
            Assert.IsTrue(_capturedUpdates.All(request => request.Target.GetAttributeValue<OptionSetValue>("statecode").Value == 1));
            Assert.AreEqual(42, _capturedUpdates[0].Target.GetAttributeValue<OptionSetValue>("statuscode").Value);
            Assert.AreEqual(2, _capturedUpdates[1].Target.GetAttributeValue<OptionSetValue>("statuscode").Value);
            Assert.IsTrue(_capturedUpdates.All(request => (string)request.Parameters["BypassBusinessLogicExecution"] == "CustomSync,CustomAsync"));

            var items = Structured(result).GetProperty("items");
            Assert.AreEqual(postedId, items[0].GetProperty("id").GetGuid());
            Assert.AreEqual("updated", items[0].GetProperty("stateUpdate").GetProperty("status").GetString());
            Assert.IsFalse(items[2].TryGetProperty("stateUpdate", out _));
        }
        finally
        {
            if (csv) File.Delete(csvPath);
        }
    }

    [TestMethod]
    public async Task Create_StateUpdateFailureKeepsCreatedIdAndSkipsFailedCreates()
    {
        var entity = MigrationEntity();
        var createdId = Guid.NewGuid();
        _onExecuteMultiple = request => new ExecuteMultipleResponse
        {
            Results =
            {
                ["Responses"] = request.Requests[0] is CreateRequest
                    ? new ExecuteMultipleResponseItemCollection
                    {
                        new() { RequestIndex = 0, Response = new CreateResponse { Results = { ["id"] = createdId } } },
                        new() { RequestIndex = 1, Fault = new OrganizationServiceFault { Message = "Create rejected" } }
                    }
                    : new ExecuteMultipleResponseItemCollection
                    {
                        new() { RequestIndex = 0, Fault = new OrganizationServiceFault { Message = "Transition rejected" } }
                    }
            }
        };
        var result = await NewTool().create_records(entity, """
            [{"name":"Created","statecode":1,"statuscode":42},
             {"name":"Rejected","statecode":1},
             {"name":"Invalid GUID","activityid":"invalid","statecode":1},
             {"name":"Invalid pair","statecode":0,"statuscode":42}]
            """, 1);

        var detail = Structured(result);
        Assert.AreEqual("partial", detail.GetProperty("status").GetString());
        Assert.AreEqual(1, detail.GetProperty("succeeded").GetInt32());
        Assert.HasCount(2, _capturedCreates);
        Assert.AreEqual(createdId, _capturedUpdates.Single().Target.Id);
        var items = detail.GetProperty("items");
        Assert.AreEqual("created", items[0].GetProperty("status").GetString());
        Assert.AreEqual(createdId, items[0].GetProperty("id").GetGuid());
        Assert.AreEqual("failed", items[0].GetProperty("stateUpdate").GetProperty("status").GetString());
        Assert.AreEqual("Transition rejected", items[0].GetProperty("stateUpdate").GetProperty("error").GetString());
        Assert.IsFalse(items[1].TryGetProperty("stateUpdate", out _));
        StringAssert.Contains(items[2].GetProperty("error").GetString(), "GUID");
        StringAssert.Contains(items[3].GetProperty("error").GetString(), "belongs to statecode");
    }

    [TestMethod]
    [DataRow("inline-json")]
    [DataRow("json-file")]
    [DataRow("csv")]
    public async Task Update_UsesPrimaryKeyAndReportsInvalidRows(string format)
    {
        var entity = MigrationEntity();
        var id = Guid.NewGuid();
        var input = $$"""
            [
                {"activityid":"{{id}}","statecode":"Inactive","statuscode":"Posted"},
                {"name":"Missing primary key"},
                {"activityid":"{{id}}","name":"Duplicate"}
            ]
            """;
        var path = format == "inline-json" ? null :
            Path.Combine(Path.GetTempPath(), $"{Guid.NewGuid()}.{(format == "csv" ? "csv" : "json")}");
        if (path != null)
        {
            File.WriteAllText(path, format == "csv"
                ? $"Record ID,Name,Status,Status Reason\n{id},,1,Posted\n,Missing primary key,,\n{id},Duplicate,,"
                : input);
            input = path;
        }

        try
        {
            using var bundle = new ConnectionBundle("default", _fake.Client, false, null, _fake.Client, _fake.Client, null!, null!, null!);
            await using var registry = new McpConnectionRegistry(new McpConnectionSnapshot(new Dictionary<string, string>()), new(), false, bundle);
            var tool = new CliCreateRecordsTool(_fake.Client, bundle.Options, bundle.Context, registry);
            var result = await tool.InvokeUpdateAsync(entity, input, 1);
            var detail = Structured(result);
            Assert.AreEqual(format, detail.GetProperty("inputFormat").GetString());
            Assert.AreEqual("partial", detail.GetProperty("status").GetString());
            Assert.IsFalse(detail.TryGetProperty("importSequenceNumber", out _));
            var items = detail.GetProperty("items");
            Assert.AreEqual("updated", items[0].GetProperty("status").GetString());
            StringAssert.Contains(items[1].GetProperty("error").GetString(), "activityid");
            StringAssert.Contains(items[2].GetProperty("error").GetString(), "Duplicate primary key");
            Assert.IsEmpty(_capturedCreates);
            var target = _capturedUpdates.Single().Target;
            Assert.AreEqual(id, target.Id);
            Assert.IsFalse(target.Contains("activityid"));
            Assert.AreEqual(1, target.GetAttributeValue<OptionSetValue>("statecode").Value);
            Assert.AreEqual(42, target.GetAttributeValue<OptionSetValue>("statuscode").Value);
        }
        finally
        {
            if (path != null) File.Delete(path);
        }
    }

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
