using DynamicsCrm.DevKit.Cli.Mcp;
using ModelContextProtocol.Protocol;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using CliUpsertRecordsTool = DynamicsCrm.DevKit.Cli.Mcp.Tools.UpsertRecordsTool;
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

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.UpsertRecords;

/// <summary>
/// Full upsert_records pipeline on a FakeSdkClient: entity resolution,
/// CreateRequest vs UpsertRequest (by primary key GUID or alternate key_fields),
/// two-step statecode/statuscode updates, parallel ExecuteMultiple chunking,
/// importSequenceNumber auto-fill, CSV conversion end-to-end, partial failure
/// reporting, and the bypass role gate success branch.
/// Each test uses a unique entity logical name because EntityParserHelper
/// caches metadata statically.
/// </summary>
[TestClass]
public sealed class UpsertRecordsFakeSdkMainPathTests
{
    private FakeSdkClient _fake = null!;
    private Dictionary<string, EntityMetadata> _entities = null!;
    private EntityCollection _aggregateRows = null!;
    private EntityCollection _lookupRows = null!;
    private EntityCollection _roleRows = null!;
    private readonly List<CreateRequest> _capturedCreates = new();
    private readonly List<UpsertRequest> _capturedUpserts = new();
    private readonly List<UpdateRequest> _capturedUpdates = new();
    private Func<ExecuteMultipleRequest, ExecuteMultipleResponse>? _onExecuteMultiple;
    private Func<UpsertRequest, (bool recordCreated, Guid id)>? _onUpsertOutcome;
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
        _capturedUpserts.AddRange(request.Requests.OfType<UpsertRequest>());
        _capturedUpdates.AddRange(request.Requests.OfType<UpdateRequest>());
        if (_onExecuteMultipleThrow != null) throw _onExecuteMultipleThrow;
        if (_onExecuteMultiple != null) return _onExecuteMultiple(request);

        var items = new ExecuteMultipleResponseItemCollection();
        for (var i = 0; i < request.Requests.Count; i++)
        {
            OrganizationResponse itemResponse;
            if (request.Requests[i] is CreateRequest create)
            {
                itemResponse = new CreateResponse
                {
                    Results = { ["id"] = create.Target.Id == Guid.Empty ? Guid.NewGuid() : create.Target.Id }
                };
            }
            else if (request.Requests[i] is UpsertRequest upsert)
            {
                var (recordCreated, resolvedId) = _onUpsertOutcome != null
                    ? _onUpsertOutcome(upsert)
                    : (true, upsert.Target.Id == Guid.Empty ? Guid.NewGuid() : upsert.Target.Id);
                itemResponse = new UpsertResponse
                {
                    Results =
                    {
                        ["RecordCreated"] = recordCreated,
                        ["Target"] = new EntityReference(upsert.Target.LogicalName, resolvedId)
                    }
                };
            }
            else
            {
                itemResponse = new UpdateResponse();
            }

            items.Add(new ExecuteMultipleResponseItem
            {
                RequestIndex = i,
                Response = itemResponse
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

    private CliUpsertRecordsTool NewTool(bool dryRun = false) =>
        new(_fake.Client, new McpDryRunOptions { DryRun = dryRun }, DryRunTestHelpers.NormalContext());

    private static JsonElement Structured(CallToolResult result) =>
        JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;

    private static List<string> Warnings(JsonElement json) =>
        json.GetProperty("warnings").EnumerateArray().Select(w => w.GetString()!).ToList();

    [TestMethod]
    [DataRow(false)]
    [DataRow(true)]
    public async Task Upsert_ODataBindFieldKey_FailsOnlyTheInvalidRowWithLookupSyntaxHint(bool dryRun)
    {
        var entity = UniqueEntity();
        _entities[entity] = TestMetadata.Entity(entity, entity,
            TestMetadata.String("name"), TestMetadata.Integer("importsequencenumber"),
            TestMetadata.Lookup("primarycontactid", "Primary Contact", "contact"));
        var contactId = Guid.NewGuid();
        var entityResolutionCount = 0;
        _fake.OnExecute = request =>
        {
            if (request is RetrieveAllEntitiesRequest)
                entityResolutionCount++;
            return ExecuteHandler(request);
        };
        var records = $$"""
            [{"name":"Invalid","primarycontactid@ODATA.BIND":"/contacts({{contactId}})"},
             {"name":"Valid","primarycontactid":"{{contactId}}"}]
            """;

        var result = await NewTool(dryRun).upsert_records(entity_name: entity, records_json: records, max_parallelism: 1);

        Assert.AreEqual(!dryRun, result.IsError == true, result.GetText());
        var payload = Structured(result);
        Assert.AreEqual(1, payload.GetProperty("failed").GetInt32());
        var items = payload.GetProperty("items");
        Assert.AreEqual("failed", items[0].GetProperty("status").GetString());
        var error = items[0].GetProperty("error").GetString()!;
        StringAssert.StartsWith(error, "Invalid field key 'primarycontactid@ODATA.BIND':");
        StringAssert.Contains(error, "'\"primarycontactid\": \"<guid>\"'");
        StringAssert.Contains(error, "'\"primarycontactid@<target_entity>\": \"<guid>\"'");
        Assert.AreEqual(1, entityResolutionCount, "Only the primary table should be resolved.");
        Assert.AreEqual(dryRun ? "pending" : "created", items[1].GetProperty("status").GetString());
        Assert.AreEqual(dryRun ? 0 : 1, _capturedCreates.Count);
        if (!dryRun)
        {
            var created = _capturedCreates[0].Target;
            Assert.AreEqual("Valid", created.GetAttributeValue<string>("name"));
            var lookup = created.GetAttributeValue<EntityReference>("primarycontactid");
            Assert.AreEqual("contact", lookup.LogicalName);
            Assert.AreEqual(contactId, lookup.Id);
        }
    }

    [TestMethod]
    public async Task Upsert_DryRunLargeBatch_PreservesODataBindHintInSummary()
    {
        var entity = UniqueEntity();
        const string records = """
            [
              {"unknown_field":"Invalid"},
              {"name":"Valid 1"},
              {"name":"Valid 2"},
              {"name":"Valid 3"},
              {"name":"Valid 4"},
              {"name":"Valid 5"},
              {"primarycontactid@odata.bind":"/contacts(d7d36758-c7e8-f111-84e9-7ced8dfe9a07)"}
            ]
            """;

        var result = await NewTool(dryRun: true).upsert_records(entity_name: entity, records_json: records, max_parallelism: 1);

        Assert.IsFalse(result.IsError == true, result.GetText());
        var payload = Structured(result);
        Assert.AreEqual("not_executed", payload.GetProperty("status").GetString());
        Assert.AreEqual(7, payload.GetProperty("total").GetInt32());
        Assert.AreEqual(2, payload.GetProperty("failed").GetInt32());
        Assert.IsFalse(payload.TryGetProperty("items", out _));
        var summary = payload.GetProperty("summary").GetString()!;
        StringAssert.Contains(summary, "Record 7: Invalid field key 'primarycontactid@odata.bind':");
        StringAssert.Contains(summary, "'\"primarycontactid\": \"<guid>\"'");
        StringAssert.Contains(summary, "'\"primarycontactid@<target_entity>\": \"<guid>\"'");
        Assert.AreEqual(summary, result.GetText().Split('\n')[0]);
        Assert.IsEmpty(_capturedCreates);
        Assert.IsEmpty(_capturedUpserts);
        Assert.IsEmpty(_capturedUpdates);
    }

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
            TestMetadata.String("accountnumber", "Account Number"),
            TestMetadata.String("emailaddress1", "Email"),
            new UniqueIdentifierAttributeMetadata { LogicalName = "activityid", DisplayName = TestMetadata.Lbl("Record ID") },
            new UniqueIdentifierAttributeMetadata { LogicalName = "trackingid", DisplayName = TestMetadata.Lbl("Tracking ID") },
            state, status);
        TestMetadata.Set(metadata, nameof(EntityMetadata.PrimaryIdAttribute), "activityid");
        _entities[entity] = metadata;
        return entity;
    }

    // ──────────────────────────────────────────────
    // upsert by GUID, alternate key, and statecode/statuscode
    // ──────────────────────────────────────────────

    [TestMethod]
    [DataRow(false)]
    [DataRow(true)]
    public async Task Upsert_MigrationByGuidPreservesIdsAndUpdatesInactiveRecords(bool csv)
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
            var result = await NewTool().upsert_records(entity, input, 1, true);
            Assert.IsFalse(result.IsError == true, result.GetText());
            Assert.IsEmpty(_capturedCreates);
            Assert.HasCount(3, _capturedUpserts);
            Assert.AreEqual(postedId, _capturedUpserts[0].Target.Id);
            Assert.IsFalse(_capturedUpserts[0].Target.Contains("activityid"));
            Assert.AreEqual(trackingId, _capturedUpserts[0].Target.GetAttributeValue<Guid>("trackingid"));
            Assert.IsTrue(_capturedUpserts.All(request => !request.Target.Contains("statecode")));
            Assert.IsFalse(_capturedUpserts[0].Target.Contains("statuscode"));
            Assert.AreEqual(1, _capturedUpserts[2].Target.GetAttributeValue<OptionSetValue>("statuscode").Value);
            CollectionAssert.AreEqual(new[] { postedId, inactiveId }, _capturedUpdates.Select(request => request.Target.Id).ToArray());
            Assert.IsTrue(_capturedUpdates.All(request => request.Target.GetAttributeValue<OptionSetValue>("statecode").Value == 1));
            Assert.AreEqual(42, _capturedUpdates[0].Target.GetAttributeValue<OptionSetValue>("statuscode").Value);
            Assert.AreEqual(2, _capturedUpdates[1].Target.GetAttributeValue<OptionSetValue>("statuscode").Value);
            Assert.IsTrue(_capturedUpdates.All(request => (string)request.Parameters["BypassBusinessLogicExecution"] == "CustomSync,CustomAsync"));

            var detail = Structured(result);
            Assert.AreEqual(3, detail.GetProperty("created").GetInt32());
            Assert.AreEqual(0, detail.GetProperty("updated").GetInt32());
            Assert.AreEqual(2, detail.GetProperty("stateUpdated").GetInt32());
            Assert.IsFalse(detail.TryGetProperty("importSequenceNumber", out _));
            var items = detail.GetProperty("items");
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
    public async Task Upsert_StateUpdateFailureKeepsIdAndSkipsFailedRows()
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
        var result = await NewTool().upsert_records(entity, """
            [{"name":"Created","statecode":1,"statuscode":42},
             {"name":"Rejected","statecode":1},
             {"name":"Invalid GUID","activityid":"invalid","statecode":1},
             {"name":"Invalid pair","statecode":0,"statuscode":42}]
            """, 1);

        var detail = Structured(result);
        Assert.AreEqual("partial", detail.GetProperty("status").GetString());
        Assert.AreEqual(1, detail.GetProperty("succeeded").GetInt32());
        Assert.AreEqual(1, detail.GetProperty("created").GetInt32());
        Assert.AreEqual(0, detail.GetProperty("updated").GetInt32());
        Assert.AreEqual(0, detail.GetProperty("stateUpdated").GetInt32());
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
    public async Task Upsert_ByGuid_DistinguishesCreatedAndUpdatedFromUpsertResponse()
    {
        var entity = MigrationEntity();
        var idCreated = Guid.NewGuid();
        var idUpdated = Guid.NewGuid();
        _onUpsertOutcome = upsert =>
            upsert.Target.Id == idCreated ? (true, idCreated) : (false, idUpdated);

        var result = await NewTool().upsert_records(entity, $$"""
            [
                {"activityid":"{{idCreated}}","name":"Brand New"},
                {"activityid":"{{idUpdated}}","name":"Existing Updated"}
            ]
            """, 1);

        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.IsEmpty(_capturedCreates);
        Assert.HasCount(2, _capturedUpserts);

        var detail = Structured(result);
        Assert.AreEqual("upserted", detail.GetProperty("status").GetString());
        Assert.AreEqual(2, detail.GetProperty("succeeded").GetInt32());
        Assert.AreEqual(1, detail.GetProperty("created").GetInt32());
        Assert.AreEqual(1, detail.GetProperty("updated").GetInt32());
        Assert.AreEqual(0, detail.GetProperty("failed").GetInt32());
        Assert.AreEqual(0, detail.GetProperty("stateUpdated").GetInt32());
        Assert.IsFalse(detail.TryGetProperty("importSequenceNumber", out _));
        StringAssert.Contains(result.GetText(), "Upserted 2/2");
        StringAssert.Contains(result.GetText(), "(1 created, 1 updated)");

        var items = detail.GetProperty("items");
        Assert.AreEqual("created", items[0].GetProperty("status").GetString());
        Assert.AreEqual(idCreated, items[0].GetProperty("id").GetGuid());
        Assert.AreEqual("updated", items[1].GetProperty("status").GetString());
        Assert.AreEqual(idUpdated, items[1].GetProperty("id").GetGuid());
    }

    [TestMethod]
    public async Task Upsert_MixedCreateAndGuidUpsert_RoutesEachRecordAndStampsIsnOnlyOnCreate()
    {
        var entity = UniqueEntity();
        var existingId = Guid.NewGuid();
        _entities[entity] = TestMetadata.Entity(entity, "acct",
            TestMetadata.String("name", "Name"),
            TestMetadata.Integer("importsequencenumber"),
            new UniqueIdentifierAttributeMetadata { LogicalName = $"{entity}id", DisplayName = TestMetadata.Lbl("ID") });
        TestMetadata.Set(_entities[entity], nameof(EntityMetadata.PrimaryIdAttribute), $"{entity}id");

        _onUpsertOutcome = upsert => (false, upsert.Target.Id);

        var result = await NewTool().upsert_records(entity, $$"""
            [
                {"name":"Pure Create"},
                {"{{entity}}id":"{{existingId}}","name":"Guid Upsert"}
            ]
            """, 1);

        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.HasCount(1, _capturedCreates);
        Assert.HasCount(1, _capturedUpserts);
        Assert.AreEqual(999990, _capturedCreates[0].Target["importsequencenumber"]);
        Assert.IsFalse(_capturedUpserts[0].Target.Contains("importsequencenumber"));
        Assert.AreEqual(existingId, _capturedUpserts[0].Target.Id);

        var detail = Structured(result);
        Assert.AreEqual("upserted", detail.GetProperty("status").GetString());
        Assert.AreEqual(1, detail.GetProperty("created").GetInt32());
        Assert.AreEqual(1, detail.GetProperty("updated").GetInt32());
        Assert.AreEqual(999990, detail.GetProperty("importSequenceNumber").GetInt32());
    }

    [TestMethod]
    [DataRow("accountnumber")]
    [DataRow("Account Number")]
    [DataRow("[\"accountnumber\",\"emailaddress1\"]")]
    public async Task Upsert_ByAlternateKey_UsesKeyAttributeCollectionAndAppliesState(string keyFields)
    {
        var entity = MigrationEntity();
        var returnedId = Guid.NewGuid();
        _onUpsertOutcome = _ => (false, returnedId);

        var result = await NewTool().upsert_records(entity, """
            [
                {"accountnumber":"ACC-001","emailaddress1":"a@contoso.com","name":"Contoso","statecode":"Inactive","statuscode":"Posted"}
            ]
            """, 1, false, keyFields);

        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.IsEmpty(_capturedCreates);
        var upsert = _capturedUpserts.Single();
        Assert.AreEqual(Guid.Empty, upsert.Target.Id);
        Assert.AreEqual("ACC-001", upsert.Target.KeyAttributes["accountnumber"]);
        if (keyFields.Contains("emailaddress1"))
            Assert.AreEqual("a@contoso.com", upsert.Target.KeyAttributes["emailaddress1"]);
        Assert.IsFalse(upsert.Target.Contains("statecode"));
        Assert.IsFalse(upsert.Target.Contains("statuscode"));

        var stateUpdate = _capturedUpdates.Single();
        Assert.AreEqual(returnedId, stateUpdate.Target.Id);
        Assert.AreEqual(1, stateUpdate.Target.GetAttributeValue<OptionSetValue>("statecode").Value);
        Assert.AreEqual(42, stateUpdate.Target.GetAttributeValue<OptionSetValue>("statuscode").Value);

        var detail = Structured(result);
        Assert.AreEqual("updated", detail.GetProperty("status").GetString());
        Assert.AreEqual(0, detail.GetProperty("created").GetInt32());
        Assert.AreEqual(1, detail.GetProperty("updated").GetInt32());
        Assert.AreEqual(1, detail.GetProperty("stateUpdated").GetInt32());
        Assert.IsFalse(detail.TryGetProperty("importSequenceNumber", out _));
        Assert.AreEqual(returnedId, detail.GetProperty("items")[0].GetProperty("id").GetGuid());
        Assert.AreEqual("updated", detail.GetProperty("items")[0].GetProperty("stateUpdate").GetProperty("status").GetString());
    }

    [TestMethod]
    public async Task Upsert_ByAlternateKey_MissingKeyValueOnRow_ReportsPerItemError()
    {
        var entity = MigrationEntity();
        var result = await NewTool().upsert_records(entity, """
            [
                {"accountnumber":"ACC-001","name":"Valid"},
                {"name":"Missing Key"},
                {"accountnumber":"   ","name":"Blank Key"}
            ]
            """, 1, false, "accountnumber");

        var detail = Structured(result);
        Assert.AreEqual("partial", detail.GetProperty("status").GetString());
        Assert.AreEqual(1, detail.GetProperty("succeeded").GetInt32());
        Assert.AreEqual(2, detail.GetProperty("failed").GetInt32());
        Assert.HasCount(1, _capturedUpserts);
        var items = detail.GetProperty("items");
        StringAssert.Contains(items[1].GetProperty("error").GetString(), "Alternate key field 'accountnumber' is required");
        StringAssert.Contains(items[2].GetProperty("error").GetString(), "Alternate key field 'accountnumber' is required");
    }

    [TestMethod]
    public async Task Upsert_ByAlternateKey_UnknownKeyField_ReturnsError()
    {
        var entity = MigrationEntity();
        var result = await NewTool().upsert_records(entity, """[{"name":"A"}]""", 1, false, "nonexistent_key");

        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Use inspect_metadata(resource='tables', name=");
    }

    [TestMethod]
    [DataRow("inline-json")]
    [DataRow("json-file")]
    [DataRow("csv")]
    public async Task Upsert_ByPrimaryKeyViaInvokeAsync_ReportsInvalidRows(string format)
    {
        var entity = MigrationEntity();
        var id = Guid.NewGuid();
        var input = $$"""
            [
                {"activityid":"{{id}}","statecode":"Inactive","statuscode":"Posted"},
                {"activityid":"not-a-guid","name":"Bad ID"},
                {"activityid":"{{id}}","name":"Duplicate"}
            ]
            """;
        var path = format == "inline-json" ? null :
            Path.Combine(Path.GetTempPath(), $"{Guid.NewGuid()}.{(format == "csv" ? "csv" : "json")}");
        if (path != null)
        {
            File.WriteAllText(path, format == "csv"
                ? $"Record ID,Name,Status,Status Reason\n{id},,1,Posted\nnot-a-guid,Bad ID,,\n{id},Duplicate,,"
                : input);
            input = path;
        }
        _onUpsertOutcome = upsert => (false, upsert.Target.Id);

        try
        {
            using var bundle = new ConnectionBundle("default", _fake.Client, false, null, _fake.Client, _fake.Client, null!, null!, null!);
            await using var registry = new McpConnectionRegistry(new McpConnectionSnapshot(new Dictionary<string, string>()), new(), false, bundle);
            var tool = new CliUpsertRecordsTool(_fake.Client, bundle.Options, bundle.Context, registry);
            var result = await tool.InvokeAsync(entity, input, 1);
            var detail = Structured(result);
            Assert.AreEqual(format, detail.GetProperty("inputFormat").GetString());
            Assert.AreEqual("partial", detail.GetProperty("status").GetString());
            Assert.AreEqual(0, detail.GetProperty("created").GetInt32());
            Assert.AreEqual(1, detail.GetProperty("updated").GetInt32());
            Assert.AreEqual(1, detail.GetProperty("stateUpdated").GetInt32());
            Assert.IsFalse(detail.TryGetProperty("importSequenceNumber", out _));
            var items = detail.GetProperty("items");
            Assert.AreEqual("updated", items[0].GetProperty("status").GetString());
            StringAssert.Contains(items[1].GetProperty("error").GetString(), "GUID");
            StringAssert.Contains(items[2].GetProperty("error").GetString(), "Duplicate primary key");
            Assert.IsEmpty(_capturedCreates);
            var upsertTarget = _capturedUpserts.Single().Target;
            Assert.AreEqual(id, upsertTarget.Id);
            Assert.IsFalse(upsertTarget.Contains("activityid"));
            var updateTarget = _capturedUpdates.Single().Target;
            Assert.AreEqual(id, updateTarget.Id);
            Assert.AreEqual(1, updateTarget.GetAttributeValue<OptionSetValue>("statecode").Value);
            Assert.AreEqual(42, updateTarget.GetAttributeValue<OptionSetValue>("statuscode").Value);
        }
        finally
        {
            if (path != null) File.Delete(path);
        }
    }

    // ──────────────────────────────────────────────
    // main success path (pure create)
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Upsert_PureCreate_DefaultParallelism_StampsBatchIsn()
    {
        var entity = UniqueEntity();
        _aggregateRows.Entities.Add(new Entity(entity)
        {
            ["max_isn"] = new AliasedValue(entity, "importsequencenumber", 999989)
        });

        var result = await NewTool().upsert_records(entity, """[{"name":"A"},{"name":"B"}]""", 0, false);

        Assert.IsFalse(result.IsError == true, result.GetText());
        var json = Structured(result);
        Assert.AreEqual("created", json.GetProperty("status").GetString());
        Assert.AreEqual(2, json.GetProperty("succeeded").GetInt32());
        Assert.AreEqual(2, json.GetProperty("created").GetInt32());
        Assert.AreEqual(0, json.GetProperty("updated").GetInt32());
        Assert.AreEqual(0, json.GetProperty("stateUpdated").GetInt32());
        Assert.AreEqual(999990, json.GetProperty("importSequenceNumber").GetInt32());
        Assert.IsTrue(json.GetProperty("usedDefaultParallelism").GetBoolean());
        Assert.AreEqual("inline-json", json.GetProperty("inputFormat").GetString());
        var warnings = Warnings(json);
        Assert.IsTrue(warnings.Any(w => w.Contains("Batched into 1 chunk(s)")), string.Join("|", warnings));
        Assert.IsTrue(warnings.Any(w => w.Contains("Default parallelism")), string.Join("|", warnings));
        StringAssert.Contains(result.GetText(), "Created 2/2");

        Assert.HasCount(2, _capturedCreates, "Both records go out as CreateRequest items.");
        Assert.IsEmpty(_capturedUpserts);
        Assert.IsTrue(_capturedCreates.All(c => (int)c.Target["importsequencenumber"] == 999990),
            "Every create in the batch shares the auto-filled ISN.");
        Assert.IsTrue(_capturedCreates.All(c => (string)c.Target["name"] is "A" or "B"));
    }

    [TestMethod]
    public async Task Upsert_UserProvidedIsnWins_AutoFillFillsRest()
    {
        var entity = UniqueEntity();
        _aggregateRows.Entities.Add(new Entity(entity)
        {
            ["max_isn"] = new AliasedValue(entity, "importsequencenumber", 2000000)
        });

        var result = await NewTool().upsert_records(
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
    public async Task Upsert_EmptyAggregateTable_UsesBaseline()
    {
        var entity = UniqueEntity();

        var result = await NewTool().upsert_records(entity, """[{"name":"A"}]""", 1, false);

        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.AreEqual(999990, Structured(result).GetProperty("importSequenceNumber").GetInt32());
    }

    [TestMethod]
    public async Task Upsert_EntityWithoutIsnAttribute_SkipsAutoFillSilently()
    {
        var logical = $"{Guid.NewGuid():N}".Substring(0, 13);
        _entities[logical] = TestMetadata.Entity(logical, "plain", TestMetadata.String("name", "Name"));

        var result = await NewTool().upsert_records(logical, """[{"name":"A"}]""", 1, false);

        Assert.IsFalse(result.IsError == true, result.GetText());
        var json = Structured(result);
        Assert.IsFalse(json.TryGetProperty("importSequenceNumber", out _), "No ISN field → no value reported.");
        Assert.IsFalse(_capturedCreates.Any() && _capturedCreates[0].Target.Contains("importsequencenumber"));
    }

    [TestMethod]
    public async Task Upsert_ExplicitMaxParallelism_ClampedTo52_NoDefaultWarning()
    {
        var entity = UniqueEntity();

        var result = await NewTool().upsert_records(entity, """[{"name":"A"}]""", 100, false);

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
    public async Task Upsert_DryRun_PreviewsPendingItems()
    {
        var entity = UniqueEntity();

        var result = await NewTool(dryRun: true).upsert_records(
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
    public async Task Upsert_DryRun_ByGuidAndAlternateKey_UsesUpsertVerbAndOmitsIsn()
    {
        var entity = MigrationEntity();
        var id = Guid.NewGuid();

        var byGuid = await NewTool(dryRun: true).upsert_records(
            entity, $$"""[{"activityid":"{{id}}","name":"A","statecode":"Inactive"}]""", 1, false);
        Assert.IsFalse(byGuid.IsError == true, byGuid.GetText());
        StringAssert.Contains(byGuid.GetText(), "Would UPSERT 1");
        var byGuidJson = Structured(byGuid);
        Assert.IsFalse(byGuidJson.TryGetProperty("importSequenceNumber", out _));
        Assert.AreEqual("pending", byGuidJson.GetProperty("items")[0].GetProperty("stateUpdate").GetProperty("status").GetString());

        var byKey = await NewTool(dryRun: true).upsert_records(
            entity, """[{"accountnumber":"A1","name":"A"}]""", 1, false, "accountnumber");
        Assert.IsFalse(byKey.IsError == true, byKey.GetText());
        StringAssert.Contains(byKey.GetText(), "Would UPSERT 1");
        Assert.IsFalse(Structured(byKey).TryGetProperty("importSequenceNumber", out _));
    }

    [TestMethod]
    public async Task Upsert_PartialFailure_ReportsPerItemFault()
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

        var result = await NewTool().upsert_records(entity, """[{"name":"A"},{"name":"B"}]""", 1, false);

        var json = Structured(result);
        Assert.AreEqual("partial", json.GetProperty("status").GetString());
        Assert.AreEqual(1, json.GetProperty("succeeded").GetInt32());
        Assert.AreEqual(1, json.GetProperty("created").GetInt32());
        Assert.AreEqual(0, json.GetProperty("updated").GetInt32());
        Assert.AreEqual(1, json.GetProperty("failed").GetInt32());
        var failedItem = json.GetProperty("items").EnumerateArray()
            .First(it => it.GetProperty("status").GetString() == "failed");
        StringAssert.Contains(failedItem.GetProperty("error").GetString(), "duplicate name");
        StringAssert.Contains(result.GetText(), "Created 1/2");
    }

    [TestMethod]
    public async Task Upsert_ChunkLevelException_MarksAllItemsFailed()
    {
        var entity = UniqueEntity();
        _onExecuteMultipleThrow = new TimeoutException("connection reset");

        var result = await NewTool().upsert_records(entity, """[{"name":"A"},{"name":"B"}]""", 1, false);

        var json = Structured(result);
        Assert.AreEqual("failed", json.GetProperty("status").GetString());
        Assert.AreEqual(0, json.GetProperty("succeeded").GetInt32());
        Assert.IsTrue(json.GetProperty("items").EnumerateArray()
            .All(it => it.GetProperty("error").GetString()!.Contains("connection reset")));
        StringAssert.Contains(result.GetText(), "Failed to create any of 2");
    }

    [TestMethod]
    public async Task Upsert_MissingItemResponse_ReportsNoResponseError()
    {
        var entity = UniqueEntity();
        _onExecuteMultiple = _ => new ExecuteMultipleResponse
        {
            Results = { ["Responses"] = new ExecuteMultipleResponseItemCollection() }
        };

        var result = await NewTool().upsert_records(entity, """[{"name":"A"}]""", 1, false);

        var json = Structured(result);
        Assert.AreEqual("failed", json.GetProperty("status").GetString());
        StringAssert.Contains(
            json.GetProperty("items").EnumerateArray().First().GetProperty("error").GetString()!,
            "No response returned");
    }

    [TestMethod]
    public async Task Upsert_ParseFailure_SurfacesPerItemAndOthersStillExecute()
    {
        var entity = UniqueEntity();

        var result = await NewTool().upsert_records(
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
    public async Task Upsert_BypassTrue_SystemAdministrator_SendsBypassParameter()
    {
        var entity = UniqueEntity();
        _roleRows.Entities.Add(new Entity("role") { ["name"] = "System Administrator" });

        var result = await NewTool().upsert_records(entity, """[{"name":"A"}]""", 1, true);

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
    public async Task Upsert_FromCsv_TypedColumns_LookupByName_AndWarnings()
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
            var result = await NewTool().upsert_records(entity, csvPath, 1, false);

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
            Assert.AreEqual(contactId.ToString(), ((EntityReference)contoso.Target["primarycontactid"]).Id.ToString());
        }
        finally { File.Delete(csvPath); }
    }

    [TestMethod]
    public async Task Upsert_FromCsv_DuplicateHeaderMapping_RejectsWholeFile()
    {
        var entity = UniqueEntity();
        var csvPath = Path.Combine(Path.GetTempPath(), $"devkit-csv-{Guid.NewGuid():N}.csv");
        File.WriteAllLines(csvPath, ["Name,Name", "Contoso,Dup"]);
        try
        {
            var result = await NewTool().upsert_records(entity, csvPath, 1, false);

            Assert.IsTrue(result.IsError == true, result.GetText());
            StringAssert.Contains(result.GetText(), "Duplicate field mapping");
        }
        finally { File.Delete(csvPath); }
    }

    [TestMethod]
    public async Task Upsert_FromCsv_NoHeadersMatch_ReturnsEmptyAndWarning()
    {
        var entity = UniqueEntity();
        var csvPath = Path.Combine(Path.GetTempPath(), $"devkit-csv-{Guid.NewGuid():N}.csv");
        File.WriteAllLines(csvPath, ["Bogus1,Bogus2", "a,b"]);
        try
        {
            var result = await NewTool().upsert_records(entity, csvPath, 1, false);

            Assert.IsTrue(result.IsError == true, result.GetText(), "Empty CSV array → 'records_json array is empty'.");
            var text = result.GetText();
            StringAssert.Contains(text, "array is empty");
        }
        finally { File.Delete(csvPath); }
    }

    [TestMethod]
    public async Task Upsert_MissingCsvAndJsonFiles_ReportFileNotFound()
    {
        var entity = UniqueEntity();
        var missing = Path.Combine(Path.GetTempPath(), "missing-" + Guid.NewGuid().ToString("N") + ".csv");
        var result = await NewTool().upsert_records(entity, missing, 1, false);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "File not found");

        var missingJson = Path.Combine(Path.GetTempPath(), "missing-" + Guid.NewGuid().ToString("N") + ".json");
        var result2 = await NewTool().upsert_records(entity, missingJson, 1, false);
        Assert.IsTrue(result2.IsError == true);
        StringAssert.Contains(result2.GetText(), "File not found");
    }

    [TestMethod]
    public async Task Upsert_InputShapeErrors_NonArrayEmptyAndTooBig()
    {
        var entity = UniqueEntity();
        var tool = NewTool();

        var notArray = await tool.upsert_records(entity, """{"name":"A"}""", 1, false);
        Assert.IsTrue(notArray.IsError == true);
        StringAssert.Contains(notArray.GetText(), "must be a JSON array");

        var empty = await tool.upsert_records(entity, "[]", 1, false);
        Assert.IsTrue(empty.IsError == true);
        StringAssert.Contains(empty.GetText(), "array is empty");

        var tooBig = "[" + string.Join(",", Enumerable.Repeat("""{"name":"A"}""", 5001)) + "]";
        var big = await tool.upsert_records(entity, tooBig, 1, false);
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
