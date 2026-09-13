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

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.App;

[TestClass]
public sealed class ManageAppExtraCoverageTests
{
    private FakeSdkClient _fake = null!;
    private readonly List<EntityMetadata> _entities = new();
    private readonly List<Entity> _appModules = new();
    private readonly List<Entity> _siteMaps = new();

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _entities.Clear();
        _appModules.Clear();
        _siteMaps.Clear();

        var accountMeta = TestMetadata.Entity("account", "Account", TestMetadata.String("name", "Name"));
        _entities.Add(accountMeta);

        var appId = Guid.NewGuid();
        var appUniqueId = Guid.NewGuid();

        var appModule = new Entity("appmodule", appId);
        appModule["appmoduleidunique"] = appUniqueId;
        appModule["name"] = "Sales Hub";
        appModule["uniquename"] = "saleshub";
        appModule["description"] = "Sales Hub App";
        _appModules.Add(appModule);

        var siteMapId = Guid.NewGuid();
        var siteMap = new Entity("sitemap", siteMapId);
        siteMap["sitemapnameunique"] = "saleshubSiteMap";
        siteMap["sitemapxml"] = "<SiteMap><Area Id='Area1'><Group Id='Group1'><SubArea Id='Sub1' Entity='account'/></Group></Area></SiteMap>";
        _siteMaps.Add(siteMap);

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
                RetrieveMultipleRequest req => new RetrieveMultipleResponse
                {
                    Results = { ["EntityCollection"] = new EntityCollection(_appModules) }
                },
                CreateRequest => new CreateResponse { Results = { ["id"] = Guid.NewGuid() } },
                UpdateRequest => new UpdateResponse(),
                DeleteRequest => new DeleteResponse(),
                _ => new OrganizationResponse()
            };
        };
        _fake.OnCreate = entity => Guid.NewGuid();
        _fake.OnUpdate = entity => { };
        _fake.OnDelete = (entityName, id) => { };
        _fake.OnRetrieve = (entityName, id, columnSet) =>
        {
            if (entityName == "appmodule")
            {
                return _appModules[0];
            }
            if (entityName == "sitemap")
            {
                return _siteMaps[0];
            }
            return new Entity(entityName, id);
        };
    }

    [TestCleanup]
    public void Cleanup()
    {
        _fake.Dispose();
    }

    private ManageAppTool CreateTool(bool dryRun = false) =>
        new(_fake.Client, new McpDryRunOptions { DryRun = dryRun }, new McpExecutionContext(mutationsBlocked: false));

    [TestMethod]
    public async Task ManageApp_InvalidAction_ReturnsError()
    {
        var tool = CreateTool();
        var res = await tool.manage_app(null!, action: "invalid_action");
        Assert.IsTrue(res.IsError == true);
        StringAssert.Contains(res.GetText(), "Invalid action");
    }

    [TestMethod]
    public async Task ManageApp_ListSuccess()
    {
        var tool = CreateTool();
        var res = await tool.manage_app(null!, action: "list", app_name: "Sales");
        Assert.IsFalse(res.IsError == true, res.GetText());
        StringAssert.Contains(res.GetText(), "Found");
    }

    [TestMethod]
    public async Task ManageApp_DetailValidationAndSuccess()
    {
        var tool = CreateTool();

        var errRes = await tool.manage_app(null!, action: "detail", app: "");
        Assert.IsTrue(errRes.IsError == true);

        var okRes = await tool.manage_app(null!, action: "detail", app: "Sales Hub");
        Assert.IsFalse(okRes.IsError == true, okRes.GetText());
    }

    [TestMethod]
    public async Task ManageApp_CreateValidationErrors()
    {
        var tool = CreateTool();

        Assert.IsTrue((await tool.manage_app(null!, action: "create", solution_name: "", display_name: "App")).IsError == true);
        Assert.IsTrue((await tool.manage_app(null!, action: "create", solution_name: "sol", display_name: "")).IsError == true);
    }

    [TestMethod]
    public async Task ManageApp_UpdateValidationAndDryRun()
    {
        var tool = CreateTool(dryRun: true);

        Assert.IsTrue((await tool.manage_app(null!, action: "update", app: "")).IsError == true);
        Assert.IsTrue((await tool.manage_app(null!, action: "update", app: "Sales Hub", display_name: "", description: "", icon_webresource: "")).IsError == true);

        var dryRes = await tool.manage_app(null!, action: "update", app: "Sales Hub", display_name: "Sales Hub New Name");
        Assert.IsFalse(dryRes.IsError == true, dryRes.GetText());
        StringAssert.Contains(dryRes.GetText(), "[DryRun]");
    }

    [TestMethod]
    public async Task ManageApp_ValidateSuccess()
    {
        var tool = CreateTool();

        Assert.IsTrue((await tool.manage_app(null!, action: "validate", app: "")).IsError == true);

        var valRes = await tool.manage_app(null!, action: "validate", app: "Sales Hub");
        Assert.IsFalse(valRes.IsError == true, valRes.GetText());
    }

    [TestMethod]
    public async Task ManageApp_UpdateNavigationValidationErrors()
    {
        var tool = CreateTool();

        Assert.IsTrue((await tool.manage_app(null!, action: "update_navigation", app: "", operations: "[]")).IsError == true);
        Assert.IsTrue((await tool.manage_app(null!, action: "update_navigation", app: "Sales Hub", operations: "")).IsError == true);
        Assert.IsTrue((await tool.manage_app(null!, action: "update_navigation", app: "Sales Hub", operations: "not-json")).IsError == true);
    }

    [TestMethod]
    public async Task ManageApp_UndoValidationErrors()
    {
        var tool = CreateTool();

        Assert.IsTrue((await tool.manage_app(null!, action: "undo", app: "", operations: "backup.json")).IsError == true);
        Assert.IsTrue((await tool.manage_app(null!, action: "undo", app: "Sales Hub", operations: "")).IsError == true);
        Assert.IsTrue((await tool.manage_app(null!, action: "undo", app: "Sales Hub", operations: "non_existent_file.json")).IsError == true);
    }
}
