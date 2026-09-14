using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp;

[TestClass]
public sealed class SearchRecordsExtraCoverageTests
{
    private FakeSdkClient _fake = null!;
    private readonly List<EntityMetadata> _entities = new();

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _entities.Clear();

        var accountMeta = TestMetadata.Entity("account", "Account", TestMetadata.String("name", "Name"));
        _entities.Add(accountMeta);

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
                _ => new OrganizationResponse()
            };
        };
    }

    [TestCleanup]
    public void Cleanup()
    {
        _fake.Dispose();
    }

    private SearchRecordsTool CreateTool() =>
        new(_fake.Client, new McpDryRunOptions(), webApi: null!);

    [TestMethod]
    public async Task SearchRecords_ValidationErrors()
    {
        var tool = CreateTool();

        Assert.IsTrue((await tool.search_records(null!, action: "")).IsError == true);
        Assert.IsTrue((await tool.search_records(null!, action: "invalid_action")).IsError == true);
        Assert.IsTrue((await tool.search_records(null!, action: "search", detail_level: "invalid_level")).IsError == true);
        Assert.IsTrue((await tool.search_records(null!, action: "search", search_term: "")).IsError == true);
    }
}
