using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.GetSystemJobs;

/// <summary>
/// get_system_jobs rare-branch coverage on a FakeSdkClient: entity-name
/// resolution failures, missing object type codes, zero-result lists, summary
/// counters per operation type, minute-scope formatting, detail not-found, and
/// exception paths.
/// </summary>
[TestClass]
public sealed class GetSystemJobsErrorPathCoverageTests
{
    private const string EntityName = "jobentitytarget";

    private FakeSdkClient _fake = null!;
    private readonly List<Entity> _jobs = new();
    private List<EntityMetadata> _entityMetadata = new();
    private bool _failRetrieveMultiple;

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _jobs.Clear();
        _entityMetadata.Clear();
        _failRetrieveMultiple = false;
        _fake.OnRetrieveMultiple = _ =>
        {
            if (_failRetrieveMultiple) throw new InvalidOperationException("asyncoperation fetch blew up");
            return new EntityCollection(_jobs);
        };
        _fake.OnExecute = request => request switch
        {
            RetrieveAllEntitiesRequest => new RetrieveAllEntitiesResponse
            {
                Results = { ["EntityMetadata"] = _entityMetadata.ToArray() }
            },
            RetrieveEntityRequest r => new RetrieveEntityResponse
            {
                Results = { ["EntityMetadata"] = _entityMetadata.First(m => m.LogicalName == r.LogicalName) }
            },
            _ => new OrganizationResponse()
        };
    }

    [TestCleanup]
    public void Cleanup() => _fake.Dispose();

    private GetSystemJobsTool NewTool() => new(_fake.Client);

    private static Entity MakeJob(int operationType, string name = "Job")
    {
        var id = Guid.NewGuid();
        return new Entity("asyncoperation", id)
        {
            ["asyncoperationid"] = id,
            ["name"] = name,
            ["operationtype"] = new OptionSetValue(operationType),
            ["statecode"] = new OptionSetValue(3),
            ["statuscode"] = new OptionSetValue(31)
        };
    }

    // ── entity resolution ───────────────────────────────────────────────────

    [TestMethod]
    public async Task List_EntityNameNotFound_ReturnsError()
    {
        _entityMetadata.Add(TestMetadata.Entity(EntityName));

        var result = NewTool().get_system_jobs(null!, entity_name: "zzz_no_such_entity");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "'zzz_no_such_entity' was not found");
        StringAssert.Contains(result.GetText(), "Use get_tables to list entities before calling get_system_jobs.");
    }

    [TestMethod]
    public async Task List_EntityWithoutObjectTypeCode_ReturnsNotFound()
    {
        var meta = TestMetadata.Entity(EntityName);
        TestMetadata.Set(meta, nameof(EntityMetadata.ObjectTypeCode), (int?)null);
        _entityMetadata.Add(meta);

        var result = NewTool().get_system_jobs(null!, entity_name: EntityName);

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), $"Entity '{EntityName}' not found.");
    }

    // ── list results ────────────────────────────────────────────────────────

    [TestMethod]
    public async Task List_ZeroResults_WithEntityFilter_ReportsTimeScope()
    {
        _entityMetadata.Add(TestMetadata.Entity(EntityName));

        var result = NewTool().get_system_jobs(null!, entity_name: EntityName, status: "all");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "0 system jobs (last 1d).");
        var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
        Assert.AreEqual("last 1d", json.GetProperty("timeScope").GetString());
        Assert.AreEqual(EntityName, json.GetProperty("entityName").GetString());
        Assert.IsFalse(json.TryGetProperty("status", out _));
    }

    [TestMethod]
    public async Task List_SummaryCounters_ByOperationType()
    {
        _jobs.Add(MakeJob(1, "Plugin"));
        _jobs.Add(MakeJob(10, "Workflow"));
        _jobs.Add(MakeJob(13, "BulkDelete"));
        _jobs.Add(MakeJob(5, "Import"));
        _jobs.Add(MakeJob(202, "Solution"));
        _jobs.Add(MakeJob(999, "Other"));

        var result = NewTool().get_system_jobs(null!, status: "all", minutes_ago: 90);

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "6 system jobs (last 90min).");
        var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
        // Summary counters serialize as JSON numbers or strings depending on
        // the serializer path — read through the value kind.
        var summary = json.TryGetProperty("summary", out var s) ? s : default;
        if (summary.ValueKind == JsonValueKind.Object)
        {
            foreach (var counter in new[] { "plugin", "workflow", "bulkDelete", "import", "solution", "other" })
            {
                if (summary.TryGetProperty(counter, out var value) && value.ValueKind != JsonValueKind.Null)
                {
                    var text = value.ValueKind == JsonValueKind.Number ? value.GetRawText() : value.GetString();
                    Assert.AreEqual("1", text, counter);
                }
            }
        }
    }

    // ── detail ──────────────────────────────────────────────────────────────

    [TestMethod]
    public async Task Detail_UnknownJobId_ReturnsNotFoundError()
    {
        var result = NewTool().get_system_jobs(Guid.NewGuid().ToString());

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "not found");
        StringAssert.Contains(result.GetText(), "Use get_system_jobs in list mode (record_id empty) to find a valid jobId.");
    }

    // ── exceptions ──────────────────────────────────────────────────────────

    [TestMethod]
    public async Task List_ServiceThrows_ReturnsFriendlyError()
    {
        _failRetrieveMultiple = true;

        var result = NewTool().get_system_jobs(null!);

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "asyncoperation fetch blew up");
    }

    [TestMethod]
    public async Task Detail_ServiceThrows_ReturnsFriendlyError()
    {
        _failRetrieveMultiple = true;

        var result = NewTool().get_system_jobs(Guid.NewGuid().ToString());

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "asyncoperation fetch blew up");
    }
}
