using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp;

[TestClass]
public sealed class GetPluginTraceLogsExtraCoverageTests
{
    private FakeSdkClient _fake = null!;
    private readonly List<EntityMetadata> _entities = new();
    private readonly List<Entity> _logs = new();

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _entities.Clear();
        _logs.Clear();

        var accountMeta = TestMetadata.Entity("account", "Account", TestMetadata.String("name", "Name"));
        _entities.Add(accountMeta);

        var log = new Entity("plugintracelog", Guid.NewGuid());
        log["typename"] = "MyPlugin.AccountPlugin";
        log["messagename"] = "Update";
        log["primaryentity"] = "account";
        log["mode"] = new OptionSetValue(0); // Sync
        log.FormattedValues["mode"] = "Synchronous";
        log["messageblock"] = "Entering AccountPlugin execution";
        log["exceptiondetails"] = "NullReferenceException at line 42";
        _logs.Add(log);

        _fake.OnExecute = request =>
        {
            return request switch
            {
                RetrieveAllEntitiesRequest => new RetrieveAllEntitiesResponse
                {
                    Results = { ["EntityMetadata"] = _entities.ToArray() }
                },
                RetrieveEntityRequest req => new RetrieveEntityResponse
                {
                    Results = { ["EntityMetadata"] = accountMeta }
                },
                RetrieveMultipleRequest => new RetrieveMultipleResponse
                {
                    Results = { ["EntityCollection"] = new EntityCollection(_logs) }
                },
                _ => new OrganizationResponse()
            };
        };
    }

    [TestCleanup]
    public void Cleanup()
    {
        _fake.Dispose();
    }

    private GetPluginTraceLogsTool CreateTool() => new(_fake.Client);

    [TestMethod]
    public void GetPluginTraceLogs_ValidationErrors()
    {
        var tool = CreateTool();

        Assert.IsTrue(tool.get_plugin_trace_logs(record_id: "not-a-guid").IsError == true);
        Assert.IsTrue(tool.get_plugin_trace_logs(mode: "invalid_mode").IsError == true);
        Assert.IsTrue(tool.get_plugin_trace_logs(correlation_id: "invalid_guid").IsError == true);
    }

    [TestMethod]
    public void GetPluginTraceLogs_List_Success()
    {
        var tool = CreateTool();

        var res = tool.get_plugin_trace_logs(entity_name: "account", mode: "sync", minutes_ago: 60);
        Assert.IsFalse(res.IsError == true, res.GetText());
        StringAssert.Contains(res.GetText(), "plugin trace log");
    }

    [TestMethod]
    public void GetPluginTraceLogs_Detail_Success()
    {
        var tool = CreateTool();
        var logId = _logs[0].Id.ToString();

        var res = tool.get_plugin_trace_logs(record_id: logId);
        Assert.IsFalse(res.IsError == true, res.GetText());
        StringAssert.Contains(res.GetText(), "Update");
    }
}
