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

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.GetWorkflows;

/// <summary>
/// get_workflows rare-branch coverage on a FakeSdkClient: entity/trigger-field
/// resolution failures, missing object type codes, zero-result lists, summary
/// counting with formatted values, name-filter auto-detail, and exception
/// paths.
/// </summary>
[TestClass]
public sealed class GetWorkflowsErrorPathCoverageTests
{
    private const string EntityName = "wfentitytarget";

    private FakeSdkClient _fake = null!;
    private readonly List<Entity> _workflows = new();
    private List<EntityMetadata> _entityMetadata = new();
    private bool _failRetrieveMultiple;

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _workflows.Clear();
        _entityMetadata.Clear();
        _failRetrieveMultiple = false;
        _fake.OnRetrieveMultiple = _ =>
        {
            if (_failRetrieveMultiple) throw new InvalidOperationException("fetch blew up");
            return new EntityCollection(_workflows);
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

    private GetWorkflowsTool NewTool() => new(_fake.Client);

    private static Entity MakeWorkflow(string name, int mode, int statecode, bool onDemand = false,
        bool subprocess = false, string triggerFields = null)
    {
        var id = Guid.NewGuid();
        var entity = new Entity("workflow", id)
        {
            ["workflowid"] = id,
            ["name"] = name,
            ["primaryentity"] = EntityName,
            ["mode"] = new OptionSetValue(mode),
            ["statecode"] = new OptionSetValue(statecode),
            ["ondemand"] = onDemand,
            ["subprocess"] = subprocess
        };
        if (triggerFields != null) entity["triggeronupdateattributelist"] = triggerFields;
        return entity;
    }

    // ── entity resolution ───────────────────────────────────────────────────

    [TestMethod]
    public async Task List_EntityNameAmbiguous_ReturnsEntityMatches()
    {
        _entityMetadata.Add(TestMetadata.Entity("wftarget", "Wftarget One"));
        _entityMetadata.Add(TestMetadata.Entity("wftarget2", "Wftarget Two"));

        var result = NewTool().get_workflows(null!, entity_name: "wftarge");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Multiple candidates match 'wftarge'");
        StringAssert.Contains(result.GetText(), "Re-call with a more specific entity_name value.");
        var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
        Assert.AreEqual(2, json.GetProperty("details").GetProperty("entityMatches").GetArrayLength());
    }

    [TestMethod]
    public async Task List_EntityNameNotFound_ReturnsError()
    {
        _entityMetadata.Add(TestMetadata.Entity(EntityName));

        var result = NewTool().get_workflows(null!, entity_name: "zzz_no_such_entity");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "'zzz_no_such_entity' was not found");
        StringAssert.Contains(result.GetText(), "Use get_tables to discover valid entity names.");
    }

    [TestMethod]
    public async Task List_EntityWithoutObjectTypeCode_ReturnsNotFound()
    {
        var meta = TestMetadata.Entity(EntityName);
        TestMetadata.Set(meta, nameof(EntityMetadata.ObjectTypeCode), (int?)null);
        _entityMetadata.Add(meta);

        var result = NewTool().get_workflows(null!, entity_name: EntityName);

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), $"Entity '{EntityName}' not found.");
    }

    // ── trigger field resolution ────────────────────────────────────────────

    [TestMethod]
    public async Task List_TriggerFieldNotFound_ReturnsGetTablesHint()
    {
        _entityMetadata.Add(TestMetadata.Entity(EntityName, null, TestMetadata.String("name", "Name")));

        var result = NewTool().get_workflows(null!, entity_name: EntityName, trigger_field: "ghostfield");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "trigger_field 'ghostfield'");
        StringAssert.Contains(result.GetText(), "was not found");
        StringAssert.Contains(result.GetText(), "Use get_tables with entity_name set to list valid attribute names.");
    }

    [TestMethod]
    public async Task List_TriggerFieldAmbiguous_ReturnsMoreSpecificHint()
    {
        _entityMetadata.Add(TestMetadata.Entity(EntityName, null,
            TestMetadata.String("amount1", "Amount"),
            TestMetadata.Money("amount2", "Amount")));

        var result = NewTool().get_workflows(null!, entity_name: EntityName, trigger_field: "Amount");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "trigger_field 'Amount'");
        StringAssert.Contains(result.GetText(), "Re-call with a more specific trigger_field value.");
    }

    // ── list results ────────────────────────────────────────────────────────

    [TestMethod]
    public async Task List_ZeroResults_DraftStatus_IncludesEntityPart()
    {
        _entityMetadata.Add(TestMetadata.Entity(EntityName));

        var result = NewTool().get_workflows(null!, entity_name: EntityName, status: "draft");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), $"0 classic workflows on {EntityName}");
        var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
        Assert.AreEqual("draft", json.GetProperty("statusFilter").GetString());
    }

    [TestMethod]
    public async Task List_FormattedValues_CountsRealtimeDraftOnDemandAndSubprocess()
    {
        var realtimeDraft = MakeWorkflow("RT Draft", mode: 1, statecode: 0);
        realtimeDraft.FormattedValues["statecode"] = "Draft";
        var backgroundActive = MakeWorkflow("BG Active", mode: 0, statecode: 1, onDemand: true, subprocess: true);
        backgroundActive.FormattedValues["statecode"] = "Activated";
        _workflows.Add(realtimeDraft);
        _workflows.Add(backgroundActive);

        var result = NewTool().get_workflows(null!, status: "all");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "2 all classic workflows");
        var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
        var counts = json.GetProperty("counts");
        Assert.AreEqual(1, counts.GetProperty("realtimeCount").GetInt32());
        Assert.AreEqual(1, counts.GetProperty("backgroundCount").GetInt32());
        Assert.AreEqual(1, counts.GetProperty("draftCount").GetInt32());
        Assert.AreEqual(1, counts.GetProperty("activeCount").GetInt32());
        Assert.AreEqual(1, counts.GetProperty("onDemandCount").GetInt32());
        Assert.AreEqual(1, counts.GetProperty("subprocessCount").GetInt32());
    }

    [TestMethod]
    public async Task List_SingleMatchWithNameFilter_AutoDetailsWorkflow()
    {
        var workflow = MakeWorkflow("Special Flow", mode: 0, statecode: 1);
        workflow.FormattedValues["statecode"] = "Activated";
        _workflows.Add(workflow);

        var result = NewTool().get_workflows(null!, name_filter: "Special");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Special Flow");
        StringAssert.Contains(result.GetText(), " — Activated");
        StringAssert.Contains(result.GetText(), $" on {EntityName}");
        StringAssert.Contains(result.GetText(), "XAML: no xaml");
        var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
        Assert.AreEqual("detail", json.GetProperty("mode").GetString());
    }

    // ── exceptions ──────────────────────────────────────────────────────────

    [TestMethod]
    public async Task List_ServiceThrows_ReturnsFriendlyError()
    {
        _failRetrieveMultiple = true;

        var result = NewTool().get_workflows(null!);

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "fetch blew up");
    }

    [TestMethod]
    public async Task Detail_ServiceThrows_ReturnsFriendlyError()
    {
        _failRetrieveMultiple = true;

        var result = NewTool().get_workflows(Guid.NewGuid().ToString());

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "fetch blew up");
    }
}
