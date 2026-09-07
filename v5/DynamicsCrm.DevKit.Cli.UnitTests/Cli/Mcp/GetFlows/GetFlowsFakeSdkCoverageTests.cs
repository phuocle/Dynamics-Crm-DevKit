using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using ModelContextProtocol.Protocol;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;

using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.GetFlows;

/// <summary>
/// get_flows list/detail/runs on a FakeSdkClient: workflow + flowsession
/// fetches, owner-filter paging, status summaries, and validation branches.
/// </summary>
[TestClass]
public sealed class GetFlowsFakeSdkCoverageTests
{
    private FakeSdkClient _fake = null!;
    private List<Entity> _flows = null!;
    private List<Entity> _runs = null!;
    private int _listCalls;

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _flows = new List<Entity>();
        _runs = new List<Entity>();
        _listCalls = 0;
        _fake.OnRetrieveMultiple = RetrieveMultipleHandler;
    }

    public void Dispose() => _fake.Dispose();

    private Entity MakeFlow(string name, string ownerName = "Jane Doe", bool active = true)
    {
        var flow = new Entity("workflow", Guid.NewGuid())
        {
            ["workflowid"] = Guid.NewGuid(),
            ["name"] = name,
            ["description"] = $"{name} description",
            ["statecode"] = new OptionSetValue(active ? 1 : 0),
            ["statuscode"] = new OptionSetValue(active ? 2 : 1),
            ["ownerid"] = new EntityReference("systemuser", Guid.NewGuid()) { Name = ownerName },
            ["ismanaged"] = false,
            ["createdon"] = DateTime.UtcNow.AddDays(-10),
            ["modifiedon"] = DateTime.UtcNow.AddDays(-1),
            ["modifiedby"] = new EntityReference("systemuser", Guid.NewGuid()) { Name = "Admin" },
            ["uniquename"] = name.Replace(" ", "")
        };
        // workflowid must match the entity id used by detail/looks-ups
        flow["workflowid"] = flow.Id;
        return flow;
    }

    private Entity MakeRun(Entity flow, int statusCode, string? error = null)
    {
        var run = new Entity("flowsession", Guid.NewGuid())
        {
            ["flowsessionid"] = Guid.NewGuid(),
            ["name"] = $"{flow.GetAttributeValue<string>("name")} run",
            ["startedon"] = DateTime.UtcNow.AddMinutes(-30),
            ["completedon"] = DateTime.UtcNow.AddMinutes(-29),
            ["statuscode"] = new OptionSetValue(statusCode),
            ["errorcode"] = error != null ? "500" : null,
            ["errormessage"] = error,
            ["runduration"] = 1000,
            ["triggertype"] = "Automated"
        };
        run["regardingobjectid"] = new EntityReference("workflow", flow.Id);
        return run;
    }

    private EntityCollection RetrieveMultipleHandler(QueryBase query)
    {
        const string Quote = "\"";
        const string Apostrophe = "'";
        var fetch = ((query as FetchExpression)?.Query ?? string.Empty).Replace(Quote, Apostrophe);
        if (fetch.Contains("<entity name='workflow'"))
        {
            if (fetch.Contains("all-attributes") && _flows.Count > 0)
                return new EntityCollection(new[] { _flows[0] });
            _listCalls++;
            return new EntityCollection(_flows.ToList());
        }
        if (fetch.Contains("<entity name='flowsession'"))
            return new EntityCollection(_runs.Where(r =>
                ((EntityReference)r["regardingobjectid"]).Id == _flows[0].Id).ToList());
        return new EntityCollection();
    }

    private static JsonElement Structured(CallToolResult result) =>
        JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;

    [TestMethod]
    public void List_ReturnsFlowEntries()
    {
        _flows.Add(MakeFlow("Nightly Sync"));
        _flows.Add(MakeFlow("Daily Digest", ownerName: "Bob"));

        var result = new GetFlowsTool(_fake.Client).get_flows();

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "2 active flows found.");
        var json = Structured(result);
        Assert.AreEqual(2, json.GetProperty("totalCount").GetInt32());
        Assert.AreEqual("list", json.GetProperty("action").GetString());
        Assert.AreEqual(2, json.GetProperty("flows").GetArrayLength());
    }

    [TestMethod]
    public void List_Empty_ReportsZero()
    {
        var result = new GetFlowsTool(_fake.Client).get_flows();
        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "0 cloud flows found.");
    }

    [TestMethod]
    public void List_OwnerFilter_PagesThroughResults()
    {
        _flows.Add(MakeFlow("Flow A", ownerName: "Jane Doe"));
        _flows.Add(MakeFlow("Flow B", ownerName: "Bob Smith"));

        var result = new GetFlowsTool(_fake.Client).get_flows(owner_filter: "jane");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "1 active flow found.");
        var json = Structured(result);
        Assert.AreEqual(1, json.GetProperty("flows").GetArrayLength());
        StringAssert.Contains(json.GetProperty("flows")[0].GetProperty("name").GetString()!, "Flow A");
    }

    [TestMethod]
    public void List_StatusVariants_AppearInSummary()
    {
        _flows.Add(MakeFlow("Draft Flow", active: false));

        var draft = new GetFlowsTool(_fake.Client).get_flows(status: "draft");
        StringAssert.Contains(draft.GetText(), "1 draft flow found.");

        var all = new GetFlowsTool(_fake.Client).get_flows(status: "all");
        StringAssert.Contains(all.GetText(), "1 flow found.");
    }

    [TestMethod]
    public void Detail_ReturnsEntryAndRecentRuns()
    {
        var flow = MakeFlow("Nightly Sync");
        _flows.Add(flow);
        _runs.Add(MakeRun(flow, 4));
        _runs.Add(MakeRun(flow, 8, error: "Throttled"));

        var result = new GetFlowsTool(_fake.Client).get_flows(flow_id: flow.Id.ToString());

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Nightly Sync: detail + 2 recent runs.");
        var json = Structured(result);
        Assert.AreEqual("detail", json.GetProperty("action").GetString());
        Assert.AreEqual(2, json.GetProperty("runs").GetArrayLength());
    }

    [TestMethod]
    public void Detail_NotFound_ReturnsError()
    {
        var result = new GetFlowsTool(_fake.Client).get_flows(flow_id: Guid.NewGuid().ToString());
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "not found (or not a cloud flow)");
    }

    [TestMethod]
    public void Runs_SummarizesStatusCounts()
    {
        var flow = MakeFlow("Nightly Sync");
        _flows.Add(flow);
        _runs.Add(MakeRun(flow, 4));
        _runs.Add(MakeRun(flow, 4));
        _runs.Add(MakeRun(flow, 8, error: "Boom"));

        var result = new GetFlowsTool(_fake.Client).get_flows(
            flow_id: flow.Id.ToString(), action: "runs", minutes_ago: 120, max_records: 100);

        Assert.IsFalse(result.IsError == true, result.GetText());
        var json = Structured(result);
        Assert.AreEqual("runs", json.GetProperty("action").GetString());
        Assert.AreEqual(2, json.GetProperty("runSummary").GetProperty("succeeded").GetInt32());
        Assert.AreEqual(1, json.GetProperty("runSummary").GetProperty("failed").GetInt32());
    }

    [TestMethod]
    public void Runs_FlowNotFound_ReturnsError()
    {
        var result = new GetFlowsTool(_fake.Client).get_flows(flow_id: Guid.NewGuid().ToString(), action: "runs");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "not found");
    }

    [TestMethod]
    public void Validation_BadActionRunsStatusGuidAndFilter()
    {
        var tool = new GetFlowsTool(_fake.Client);

        var badAction = tool.get_flows(action: "delete");
        Assert.IsTrue(badAction.IsError == true);
        StringAssert.Contains(badAction.GetText(), "Invalid action");

        var noId = tool.get_flows(action: "runs");
        Assert.IsTrue(noId.IsError == true);
        StringAssert.Contains(noId.GetText(), "requires flow_id");

        var badStatus = tool.get_flows(status: "paused");
        Assert.IsTrue(badStatus.IsError == true);
        StringAssert.Contains(badStatus.GetText(), "Invalid status");

        var badGuid = tool.get_flows(flow_id: "not-a-guid");
        Assert.IsTrue(badGuid.IsError == true);
        StringAssert.Contains(badGuid.GetText(), "not a valid GUID");

        var badRunFilter = tool.get_flows(flow_id: Guid.NewGuid().ToString(), action: "runs", status_filter: "weird");
        Assert.IsTrue(badRunFilter.IsError == true);
        StringAssert.Contains(badRunFilter.GetText(), "Invalid status_filter");
    }
}
