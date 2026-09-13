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
public sealed class GetCustomApisExtraCoverageTests
{
    private FakeSdkClient _fake = null!;
    private readonly List<EntityMetadata> _entities = new();
    private readonly List<Entity> _apis = new();

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _entities.Clear();
        _apis.Clear();

        var accountMeta = TestMetadata.Entity("account", "Account", TestMetadata.String("name", "Name"));
        _entities.Add(accountMeta);

        var api = new Entity("customapi", Guid.NewGuid());
        api["uniquename"] = "devkit_CalculateTotal";
        api["name"] = "Calculate Total";
        api["displayname"] = "Calculate Total API";
        api["bindingtype"] = new OptionSetValue(0);
        api["statuscode"] = new OptionSetValue(1);
        _apis.Add(api);

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
                    Results = { ["EntityCollection"] = new EntityCollection(_apis) }
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

    private GetCustomApisTool CreateTool() => new(_fake.Client);

    [TestMethod]
    public void GetCustomApis_ValidationErrors()
    {
        var tool = CreateTool();

        Assert.IsTrue(tool.get_custom_apis(status: "invalid_status").IsError == true);
    }

    [TestMethod]
    public void GetCustomApis_List_Success()
    {
        var tool = CreateTool();

        var res = tool.get_custom_apis(status: "active", entity_name: "account");
        Assert.IsFalse(res.IsError == true, res.GetText());
        StringAssert.Contains(res.GetText(), "custom APIs");
    }

    [TestMethod]
    public void GetCustomApis_Detail_Success()
    {
        var tool = CreateTool();

        var res = tool.get_custom_apis(api_name: "devkit_CalculateTotal");
        Assert.IsFalse(res.IsError == true, res.GetText());
        StringAssert.Contains(res.GetText(), "CalculateTotal");
    }
}
