using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Shared.Services;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;
using ModelContextProtocol.Protocol;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.CrossTool;

/// <summary>
/// Shared FakeSdkClient router coverage for the workflow/sdkmessage driven
/// read tools: get_messages, get_business_rules, get_business_process_flows,
/// and get_workflows. The router serves rows keyed by fetch entity name and
/// ignores server-side conditions (rows are pre-filtered by the fixtures).
/// </summary>
[TestClass]
public sealed class GetToolsRouterCoverageTests
{
    private FakeSdkClient _fake = null!;
    private List<Entity> _workflowRows = null!;
    private List<Entity> _sdkMessageRows = null!;
    private List<Entity> _processStageRows = null!;
    private readonly List<EntityMetadata> _entities = new();

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _workflowRows = new List<Entity>();
        _sdkMessageRows = new List<Entity>();
        _processStageRows = new List<Entity>();
        _entities.Clear();
        _entities.Add(TestMetadata.Entity("account", "Account", TestMetadata.String("name", "Name")));
        _entities.Add(TestMetadata.Entity("lead", "Lead", TestMetadata.String("subject", "Topic")));
        _fake.OnRetrieveMultiple = RetrieveMultipleHandler;
        _fake.OnExecute = request => request switch
        {
            Microsoft.Xrm.Sdk.Messages.RetrieveAllEntitiesRequest => new Microsoft.Xrm.Sdk.Messages.RetrieveAllEntitiesResponse
            {
                Results = { ["EntityMetadata"] = _entities.ToArray() }
            },
            Microsoft.Xrm.Sdk.Messages.RetrieveEntityRequest r => new Microsoft.Xrm.Sdk.Messages.RetrieveEntityResponse
            {
                Results = { ["EntityMetadata"] = _entities.FirstOrDefault(e => e.LogicalName == r.LogicalName)
                    ?? new EntityMetadata { LogicalName = r.LogicalName } }
            },
            _ => throw new InvalidOperationException($"Unexpected request '{request.RequestName}'")
        };
    }

    public void Dispose() => _fake.Dispose();

    private EntityCollection RetrieveMultipleHandler(QueryBase query)
    {
        var fetch = ((query as FetchExpression)?.Query ?? string.Empty).Replace(Quote, Apostrophe);
        if (fetch.Contains("<entity name='workflow'"))
        {
            var rows = _workflowRows;
            var marker = "attribute='workflowid' operator='eq' value='";
            var idx = fetch.IndexOf(marker, StringComparison.Ordinal);
            if (idx >= 0 && Guid.TryParse(fetch.Substring(idx + marker.Length, 36), out var wanted))
                rows = rows.Where(r => r.Id == wanted).ToList();
            return new EntityCollection(rows);
        }
        if (fetch.Contains("<entity name='sdkmessage'"))
        {
            var rows = _sdkMessageRows;
            var nameMarker = "attribute='name' operator='eq' value='";
            var nameIdx = fetch.IndexOf(nameMarker, StringComparison.Ordinal);
            if (nameIdx >= 0)
            {
                var end = fetch.IndexOf('\'', nameIdx + nameMarker.Length);
                var wanted = fetch.Substring(nameIdx + nameMarker.Length, end - nameIdx - nameMarker.Length);
                rows = rows.Where(r => string.Equals((string?)r["name"], wanted, StringComparison.OrdinalIgnoreCase)).ToList();
            }
            return new EntityCollection(rows);
        }
        if (fetch.Contains("<entity name='processstage'"))
            return new EntityCollection(_processStageRows.ToList());
        return new EntityCollection();
    }

    private const string Quote = "\"";
    private const string Apostrophe = "'";

    private static Entity WorkflowRow(string name, int category, bool active = true, string? primaryEntity = null)
    {
        var id = Guid.NewGuid();
        var row = new Entity("workflow", id)
        {
            ["name"] = name,
            ["description"] = $"{name} description",
            ["category"] = new OptionSetValue(category),
            ["statecode"] = new OptionSetValue(active ? 1 : 0),
            ["statuscode"] = new OptionSetValue(active ? 2 : 1),
            ["mode"] = new OptionSetValue(0),
            ["scope"] = new OptionSetValue(1),
            ["primaryentity"] = primaryEntity ?? "account",
            ["uniquename"] = name.Replace(" ", ""),
            ["clientdata"] = "{}",
            ["ismanaged"] = false,
            ["ondemand"] = true,
            ["istransacted"] = true,
            ["subprocess"] = false,
            ["triggeroncreate"] = false,
            ["triggerondelete"] = false,
            ["asyncautodelete"] = false,
            ["rank"] = 1,
            ["createdon"] = DateTime.UtcNow.AddDays(-3),
            ["modifiedon"] = DateTime.UtcNow.AddHours(-5),
            ["ownerid"] = new EntityReference("systemuser", Guid.NewGuid()) { Name = "Jane" },
            ["createdby"] = new EntityReference("systemuser", Guid.NewGuid()) { Name = "Admin" },
            ["modifiedby"] = new EntityReference("systemuser", Guid.NewGuid()) { Name = "Admin" },
            ["workflowidunique"] = Guid.NewGuid(),
            ["iscustomizable"] = new BooleanManagedProperty(true)
        };
        row["processid"] = id;
        return row;
    }

    // ── get_business_rules ───────────────────────────────────────────────

    [TestMethod]
    public void BusinessRules_List_ReturnsRows()
    {
        _workflowRows.Add(WorkflowRow("BR Name Rule", 2));
        _workflowRows.Add(WorkflowRow("BR Phone Rule", 2, active: false));

        var all = new GetBusinessRulesTool(_fake.Client).get_business_rules(entity_name: "account");
        Assert.IsFalse(all.IsError == true, all.GetText());

        var active = new GetBusinessRulesTool(_fake.Client).get_business_rules(entity_name: "account", status: "active");
        Assert.IsFalse(active.IsError == true, active.GetText());

        var badStatus = new GetBusinessRulesTool(_fake.Client).get_business_rules(status: "bogus");
        Assert.IsTrue(badStatus.IsError == true);
        StringAssert.Contains(badStatus.GetText(), "Invalid status");

        var badGuid = new GetBusinessRulesTool(_fake.Client).get_business_rules(entity_name: "account", rule_id: "nope");
        Assert.IsTrue(badGuid.IsError == true);
    }

    // ── get_business_process_flows ───────────────────────────────────────

    [TestMethod]
    public void BusinessProcessFlows_List_AndDetail()
    {
        var bpf = WorkflowRow("Lead to Opportunity", 4, primaryEntity: "lead");
        _workflowRows.Add(bpf);
        _processStageRows.Add(new Entity("processstage", Guid.NewGuid()) { ["stagename"] = "Qualify" });

        var tool = new GetBusinessProcessFlowsTool(_fake.Client);

        var list = tool.get_business_process_flows();
        Assert.IsFalse(list.IsError == true, list.GetText());

        var withStages = tool.get_business_process_flows(include_stages: true);
        Assert.IsFalse(withStages.IsError == true, withStages.GetText());

        var byName = tool.get_business_process_flows(bpf_name: "Lead to Opportunity");
        Assert.IsFalse(byName.IsError == true, byName.GetText());

        var byEntity = tool.get_business_process_flows(entity_name: "lead");
        Assert.IsFalse(byEntity.IsError == true, byEntity.GetText());

        var detail = tool.get_business_process_flows(bpf_id: bpf.Id.ToString());
        Assert.IsFalse(detail.IsError == true, detail.GetText());

        var missing = tool.get_business_process_flows(bpf_id: Guid.NewGuid().ToString());
        Assert.IsTrue(missing.IsError == true);
    }

    // ── get_workflows ────────────────────────────────────────────────────

    [TestMethod]
    public void Workflows_List_AndDetail()
    {
        var wf = WorkflowRow("Notify Owner", 0, primaryEntity: "account");
        _workflowRows.Add(wf);
        _workflowRows.Add(WorkflowRow("Realtime Check", 0));

        var tool = new GetWorkflowsTool(_fake.Client);

        var list = tool.get_workflows(entity_name: "account");
        Assert.IsFalse(list.IsError == true, list.GetText());

        var byMode = tool.get_workflows(mode: "background");
        Assert.IsFalse(byMode.IsError == true, byMode.GetText());

        var all = tool.get_workflows(status: "all");
        Assert.IsFalse(all.IsError == true, all.GetText());

        var byName = tool.get_workflows(name_filter: "Notify Owner");
        Assert.IsFalse(byName.IsError == true, byName.GetText());

        var detail = tool.get_workflows(workflow_id: wf.Id.ToString());
        Assert.IsFalse(detail.IsError == true, detail.GetText());

        var missing = tool.get_workflows(workflow_id: Guid.NewGuid().ToString());
        Assert.IsTrue(missing.IsError == true);
    }

    // ── get_messages ─────────────────────────────────────────────────────

    [TestMethod]
    public async Task Messages_List_AndDetail()
    {
        _sdkMessageRows.Add(new Entity("sdkmessage", Guid.NewGuid())
        {
            ["name"] = "Create",
            ["categoryname"] = "Primary",
            ["availability"] = 0,
            ["scope"] = new OptionSetValue(1),
            ["statecode"] = new OptionSetValue(0),
            ["ismanaged"] = false,
            ["isactive"] = true,
            ["primaryobjecttypecode"] = "account",
            ["uniquename"] = "",
            ["modifiedon"] = DateTime.UtcNow.AddDays(-1),
            ["ownerid"] = new EntityReference("systemuser", Guid.NewGuid()) { Name = "Admin" },
            ["iscustomizable"] = new BooleanManagedProperty(true)
        });

        var tool = new GetMessagesTool(new MetadataService(_fake.Client), _fake.Client);

        var list = await tool.get_messages(entity_name: "account");
        Assert.IsFalse(list.IsError == true, list.GetText());

        var global = await tool.get_messages(entity_name: "none");
        Assert.IsFalse(global.IsError == true, global.GetText());

        var sdkOnly = await tool.get_messages(entity_name: "account", include_custom_actions: false);
        Assert.IsFalse(sdkOnly.IsError == true, sdkOnly.GetText());

        var detail = await tool.get_messages(entity_name: "account", message_name: "Create");
        Assert.IsFalse(detail.IsError == true, detail.GetText());

        var missing = await tool.get_messages(entity_name: "account", message_name: "NoSuchMessage");
        Assert.IsTrue(missing.IsError == true);
    }
}
