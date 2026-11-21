using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;
using FakeXrmEasy.Abstractions;
using FakeXrmEasy.Middleware;
using FakeXrmEasy.Middleware.Crud;
using FakeXrmEasy.Middleware.Messages;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text.Json;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageApp;

/// <summary>
/// FakeXrmEasy-driven coverage for <see cref="ManageAppTool"/> data paths.
/// The tool depends on <see cref="IOrganizationService"/>, so the in-memory
/// context drives list/detail/validate/create/update/update_navigation/undo
/// with no live org. Dataverse-only messages (ValidateApp, AddAppComponents,
/// RetrieveEntity/RetrieveAllEntities, PublishXml) are answered by local
/// fake executors, mirroring <see cref="Shared.MetadataServiceFakeXrmEasyTests"/>.
/// </summary>
[TestClass]
public sealed class ManageAppFakeXrmEasyTests
{
    private static readonly BindingFlags PrivateInstance = BindingFlags.NonPublic | BindingFlags.Instance;

    private IXrmFakedContext _context = null!;
    private FakeRetrieveEntityExecutor _entityExecutor = null!;
    private FakeValidateAppExecutor _validateExecutor = null!;
    private FakeAddAppComponentsExecutor _componentExecutor = null!;
    private FakeAppComponentTypeExecutor _componentTypeExecutor = null!;
    private string _workspace = null!;

    private const string StarterXml = @"<SiteMap>
  <Area Id=""area_default"" ResourceId=""SitemapDesigner.NewArea"" ShowGroups=""true"">
    <Titles>
      <Title LCID=""1033"" Title=""Workspace"" />
    </Titles>
    <Group Id=""group_default"" ResourceId=""SitemapDesigner.NewGroup"" IsProfile=""false"" ToolTipResourseId=""SitemapDesigner.Unknown"">
      <Titles>
        <Title LCID=""1033"" Title=""Default"" />
      </Titles>
      <SubArea Id=""sa_account"" Entity=""account"">
        <Titles>
          <Title LCID=""1033"" Title=""Accounts"" />
        </Titles>
      </SubArea>
    </Group>
  </Area>
</SiteMap>";

    [TestInitialize]
    public void Setup()
    {
        _entityExecutor = new FakeRetrieveEntityExecutor();
        _validateExecutor = new FakeValidateAppExecutor();
        _componentExecutor = new FakeAddAppComponentsExecutor();
        _componentTypeExecutor = new FakeAppComponentTypeExecutor();
        _context = MiddlewareBuilder.New()
            .AddCrud()
            .AddFakeMessageExecutors()
            .AddFakeMessageExecutor(_entityExecutor)
            .AddFakeMessageExecutor(new FakeRetrieveAllEntitiesExecutor(_entityExecutor))
            .AddFakeMessageExecutor(_validateExecutor)
            .AddFakeMessageExecutor(_componentExecutor)
            .AddFakeMessageExecutor(_componentTypeExecutor)
            .AddFakeMessageExecutor(new FakeThrowingPublishXmlExecutor())
            .UseCrud()
            .UseMessages()
            .SetLicense(FakeXrmEasy.Abstractions.Enums.FakeXrmEasyLicense.RPL_1_5)
            .Build();

        _context.GetOrganizationService().Create(new Entity("organization", Guid.NewGuid())
        {
            ["languagecode"] = 1033
        });
        // Register metadata both in the fake executor (used when the custom
        // executor wins dispatch) and in the context metadata store (used when
        // the built-in RetrieveEntityRequestExecutor wins).
        var account = EntityMeta("account", "Account");
        var contact = EntityMeta("contact", "Contact");
        _entityExecutor.Metadata.Add(account);
        _entityExecutor.Metadata.Add(contact);
        _context.InitializeMetadata(account);
        _context.InitializeMetadata(contact);

        _workspace = Path.Combine(Path.GetTempPath(), "manageapp_tests_" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_workspace);
    }

    [TestCleanup]
    public void Cleanup()
    {
        try
        {
            if (Directory.Exists(_workspace)) Directory.Delete(_workspace, recursive: true);
        }
        catch { /* best effort temp cleanup */ }
    }

    // ──────────────────────────────────────────────
    // list / detail / validate (read paths)
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task List_FiltersSeededApps_AndReportsSiteMap()
    {
        SeedApp("Sales Hub", "devkit_hub1", withSiteMap: true);
        SeedApp("Service Hub", "devkit_service", withSiteMap: false);
        var tool = NewTool();

        var all = await tool.manage_app(null!, action: "list");
        Assert.IsFalse(all.IsError == true);
        Assert.AreEqual(2, all.StructuredContent!.Value.GetProperty("totalCount").GetInt32());
        Assert.AreEqual(2, all.StructuredContent.Value.GetProperty("apps").GetArrayLength());

        var sales = await tool.manage_app(null!, action: "list", app_name: "Sales");
        var apps = sales.StructuredContent!.Value.GetProperty("apps");
        Assert.AreEqual(1, apps.GetArrayLength());
        Assert.AreEqual("Sales Hub", apps[0].GetProperty("name").GetString());
        Assert.AreEqual("devkit_hub1", apps[0].GetProperty("uniqueName").GetString());
        Assert.IsTrue(apps[0].GetProperty("hasSiteMap").GetBoolean());

        var service = await tool.manage_app(null!, action: "list", app_name: "service");
        Assert.IsFalse(service.StructuredContent!.Value.GetProperty("apps")[0].GetProperty("hasSiteMap").GetBoolean());
    }

    [TestMethod]
    public async Task Detail_ResolvesByGuidAndName_AndReportsNavigation()
    {
        var (appId, appUniqueId, siteMapId) = SeedApp("Sales Hub", "devkit_hub1", withSiteMap: true);
        var tool = NewTool();

        var byId = await tool.manage_app(null!, action: "detail", app: appId.ToString());
        AssertDetail(byId, appId, appUniqueId, siteMapId);

        var byName = await tool.manage_app(null!, action: "detail", app: "Sales Hub");
        AssertDetail(byName, appId, appUniqueId, siteMapId);
    }

    private static void AssertDetail(CallToolResult result, Guid appId, Guid appUniqueId, Guid siteMapId)
    {
        Assert.IsFalse(result.IsError == true);
        var structured = result.StructuredContent!.Value;
        Assert.AreEqual("detail", structured.GetProperty("action").GetString());
        Assert.AreEqual(appId.ToString(), structured.GetProperty("appModuleId").GetString());
        Assert.AreEqual(appUniqueId.ToString(), structured.GetProperty("appModuleIdUnique").GetString());
        Assert.AreEqual(siteMapId.ToString(), structured.GetProperty("siteMapId").GetString());
        StringAssert.Contains(structured.GetProperty("navigationTree").GetString(), "Area: Workspace");
        StringAssert.Contains(structured.GetProperty("navigationTree").GetString(), "Entity: account");
        Assert.AreEqual("Workspace", structured.GetProperty("navigationAreas")[0].GetProperty("title").GetString());
    }

    [TestMethod]
    public async Task Detail_HandlesMissingAppAndAmbiguousNames()
    {
        var tool = NewTool();

        var missing = await tool.manage_app(null!, action: "detail", app: "Ghost App");
        Assert.IsTrue(missing.IsError == true);
        StringAssert.Contains(missing.GetText(), "No model-driven app found");

        var empty = await tool.manage_app(null!, action: "detail");
        Assert.IsTrue(empty.IsError == true);
        StringAssert.Contains(empty.GetText(), "app is required");

        SeedApp("Sales Hub", "devkit_hub1", withSiteMap: false);
        SeedApp("Sales Hub Lite", "devkit_hub2", withSiteMap: false);
        var ambiguous = await tool.manage_app(null!, action: "detail", app: "Hub");
        Assert.IsTrue(ambiguous.IsError == true);
        StringAssert.Contains(ambiguous.GetText(), "Multiple candidates match");
        var matches = ambiguous.StructuredContent!.Value.GetProperty("details").GetProperty("appMatches");
        Assert.AreEqual(2, matches.GetArrayLength());
    }

    [TestMethod]
    public async Task Validate_ReflectsFakeValidateAppIssues()
    {
        var (appId, _, _) = SeedApp("Sales Hub", "devkit_hub1", withSiteMap: false);
        var tool = NewTool();

        var clean = await tool.manage_app(null!, action: "validate", app: "devkit_hub1");
        Assert.IsFalse(clean.IsError == true);
        var structured = clean.StructuredContent!.Value;
        Assert.AreEqual("validate", structured.GetProperty("action").GetString());
        Assert.AreEqual("validated", structured.GetProperty("status").GetString());
        Assert.IsTrue(structured.GetProperty("validated").GetBoolean());

        _validateExecutor.Issues.Add(new ValidationIssueStub { Message = "Careful app", ErrorType = "Warning" });
        var warned = await tool.manage_app(null!, action: "validate", app: appId.ToString());
        Assert.AreEqual("validated", warned.StructuredContent!.Value.GetProperty("status").GetString());
        Assert.AreEqual(1, warned.StructuredContent.Value.GetProperty("validationWarnings").GetArrayLength());

        _validateExecutor.Issues.Add(new ValidationIssueStub { Message = "Broken app", ErrorType = "Error" });
        var failed = await tool.manage_app(null!, action: "validate", app: "Sales Hub");
        Assert.AreEqual("validation_failed", failed.StructuredContent!.Value.GetProperty("status").GetString());
        Assert.AreEqual("Broken app", failed.StructuredContent.Value.GetProperty("validationErrors")[0].GetString());
    }

    // ──────────────────────────────────────────────
    // create (mutation paths + guards)
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Create_GuardsMissingInputsAndDuplicateUniqueName()
    {
        SeedSolution();
        var tool = NewTool();

        var noSolution = await tool.manage_app(null!, action: "create", display_name: "Sales Hub");
        Assert.IsTrue(noSolution.IsError == true);
        StringAssert.Contains(noSolution.GetText(), "solution_name is required");

        var noDisplay = await tool.manage_app(null!, action: "create", solution_name: "DevKit Solution");
        Assert.IsTrue(noDisplay.IsError == true);
        StringAssert.Contains(noDisplay.GetText(), "display_name is required");

        var unknownSolution = await tool.manage_app(null!, action: "create",
            solution_name: "Nope Solution", display_name: "Sales Hub");
        Assert.IsTrue(unknownSolution.IsError == true);

        SeedApp("Existing", "devkit_SalesHub", withSiteMap: false);
        var duplicate = await tool.manage_app(null!, action: "create",
            solution_name: "DevKit Solution", display_name: "Sales Hub", unique_name: "devkit_SalesHub");
        Assert.IsTrue(duplicate.IsError == true);
        StringAssert.Contains(duplicate.GetText(), "already exists");
    }

    [TestMethod]
    public async Task Create_DryRunPreviewsWithoutMutating()
    {
        SeedSolution();
        var tool = NewTool(dryRun: true);

        var result = await tool.manage_app(null!, action: "create",
            solution_name: "DevKit Solution", display_name: "Sales Hub", description: "dry run app");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(result.GetText(), "[DryRun]");
        var structured = result.StructuredContent!.Value;
        Assert.AreEqual("create", structured.GetProperty("action").GetString());
        Assert.AreEqual("not_executed", structured.GetProperty("status").GetString());
        Assert.AreEqual("devkit_SalesHub", structured.GetProperty("uniqueName").GetString());
        Assert.IsFalse(structured.GetProperty("published").GetBoolean());
        Assert.AreEqual(0, CountRows("appmodule", "uniquename", "devkit_SalesHub"));
    }

    [TestMethod]
    public async Task Create_BlockedMutationFailsClosed()
    {
        SeedSolution();
        var tool = NewTool(dryRun: false, mutationsBlocked: true);

        var result = await tool.manage_app(null!, action: "create",
            solution_name: "DevKit Solution", display_name: "Sales Hub");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Mutation blocked");
        Assert.AreEqual(0, CountRows("appmodule", "uniquename", "devkit_SalesHub"));
    }

    [TestMethod]
    public async Task Create_PublishesAppWithStarterSiteMap()
    {
        SeedSolution();
        var tool = NewTool();

        var result = await tool.manage_app(null!, action: "create",
            solution_name: "DevKit Solution", display_name: "Sales Hub", description: "created app");
        Assert.IsFalse(result.IsError == true);
        var structured = result.StructuredContent!.Value;
        Assert.AreEqual("create", structured.GetProperty("action").GetString());
        Assert.AreEqual("created", structured.GetProperty("status").GetString());
        Assert.AreEqual("Sales Hub", structured.GetProperty("appName").GetString());
        Assert.AreEqual("devkit_SalesHub", structured.GetProperty("uniqueName").GetString());
        Assert.AreEqual("devkitsol", structured.GetProperty("solutionUniqueName").GetString());
        Assert.IsFalse(string.IsNullOrEmpty(structured.GetProperty("siteMapId").GetString()));
        Assert.IsTrue(structured.GetProperty("validated").GetBoolean());
        Assert.IsTrue(structured.GetProperty("published").GetBoolean());

        var components = structured.GetProperty("addedAppComponents");
        CollectionAssert.Contains(components.EnumerateArray().Select(c => c.GetString()).ToList(), "sitemap");
        CollectionAssert.Contains(components.EnumerateArray().Select(c => c.GetString()).ToList(), "account");

        Assert.AreEqual(1, CountRows("appmodule", "uniquename", "devkit_SalesHub"));
        var siteMaps = _context.GetOrganizationService().RetrieveMultiple(new QueryExpression("sitemap")
        {
            ColumnSet = new ColumnSet("sitemapxml"),
            Criteria = { Conditions = { new ConditionExpression("sitemapnameunique", ConditionOperator.Equal, "devkit_SalesHubSiteMap") } }
        });
        Assert.AreEqual(1, siteMaps.Entities.Count);
        StringAssert.Contains(siteMaps.Entities[0].GetAttributeValue<string>("sitemapxml"), "sa_account");
    }

    // ──────────────────────────────────────────────
    // update (mutation paths + guards)
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Update_RequiresAppAndAtLeastOneField()
    {
        SeedApp("Sales Hub", "devkit_hub1", withSiteMap: true);
        var tool = NewTool();

        var noApp = await tool.manage_app(null!, action: "update", display_name: "New Name");
        Assert.IsTrue(noApp.IsError == true);
        StringAssert.Contains(noApp.GetText(), "app is required");

        var noFields = await tool.manage_app(null!, action: "update", app: "Sales Hub");
        Assert.IsTrue(noFields.IsError == true);
        StringAssert.Contains(noFields.GetText(), "requires at least one");
    }

    [TestMethod]
    public void Update_RenamesAppAndWritesBackupSnapshot()
    {
        var (appId, _, _) = SeedApp("Sales Hub", "devkit_hub1", withSiteMap: true);
        var tool = NewTool();
        SetWorkspace(tool, _workspace);

        var result = Invoke(tool, "HandleUpdate", "Sales Hub", "New Name", null, null);
        Assert.IsFalse(result.IsError == true);
        var structured = result.StructuredContent!.Value;
        Assert.AreEqual("update", structured.GetProperty("action").GetString());
        Assert.AreEqual("updated", structured.GetProperty("status").GetString());
        Assert.AreEqual("New Name", structured.GetProperty("appName").GetString());
        Assert.IsTrue(structured.GetProperty("published").GetBoolean());

        var backupPath = structured.GetProperty("backupPath").GetString();
        Assert.IsFalse(string.IsNullOrEmpty(backupPath));
        StringAssert.Contains(backupPath!, ".devkit");
        Assert.IsTrue(File.Exists(backupPath));
        StringAssert.Contains(File.ReadAllText(backupPath!), "manage_app.snapshot");

        var refreshed = _context.GetOrganizationService().Retrieve("appmodule", appId, new ColumnSet("name"));
        Assert.AreEqual("New Name", refreshed.GetAttributeValue<string>("name"));
    }

    [TestMethod]
    public void Update_BlocksNonImageIconWebResource()
    {
        SeedApp("Sales Hub", "devkit_hub1", withSiteMap: true);
        _context.GetOrganizationService().Create(new Entity("webresource", Guid.NewGuid())
        {
            ["name"] = "new_script.js",
            ["displayname"] = "Helper Script",
            ["webresourcetype"] = new OptionSetValue(2)
        });
        var tool = NewTool();

        var result = Invoke(tool, "HandleUpdate", "Sales Hub", null, null, "new_script.js");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "not an image web resource");
    }

    // ──────────────────────────────────────────────
    // update_navigation (mutation paths + guards)
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task UpdateNavigation_GuardsRejectBadInputs()
    {
        var (_, _, siteMapId) = SeedApp("Sales Hub", "devkit_hub1", withSiteMap: true);
        SeedApp("No SiteMap App", "devkit_nositemap", withSiteMap: false);
        var tool = NewTool();

        var noApp = await tool.manage_app(null!, action: "update_navigation", operations: "[]");
        Assert.IsTrue(noApp.IsError == true);
        StringAssert.Contains(noApp.GetText(), "app is required");

        var noOps = await tool.manage_app(null!, action: "update_navigation", app: "Sales Hub");
        Assert.IsTrue(noOps.IsError == true);
        StringAssert.Contains(noOps.GetText(), "operations is required");

        var rawXml = await tool.manage_app(null!, action: "update_navigation", app: "Sales Hub", operations: "<SiteMap />");
        Assert.IsTrue(rawXml.IsError == true);
        StringAssert.Contains(rawXml.GetText(), "only accepts operation JSON arrays");

        var emptyArray = await tool.manage_app(null!, action: "update_navigation", app: "Sales Hub", operations: "[]");
        Assert.IsTrue(emptyArray.IsError == true);
        StringAssert.Contains(emptyArray.GetText(), "non-empty JSON array");

        var noSiteMap = await tool.manage_app(null!, action: "update_navigation", app: "No SiteMap App",
            operations: "[{\"action\":\"add_area\",\"title\":\"X\"}]");
        Assert.IsTrue(noSiteMap.IsError == true);
        StringAssert.Contains(noSiteMap.GetText(), "has no sitemap component");

        var unknownEntity = await tool.manage_app(null!, action: "update_navigation", app: "Sales Hub",
            operations: "[{\"action\":\"add_item\",\"area\":\"area_default\",\"group\":\"group_default\",\"entity\":\"ghost_entity\"}]");
        Assert.IsTrue(unknownEntity.IsError == true);
        var details = unknownEntity.StructuredContent!.Value.GetProperty("details");
        Assert.AreEqual("blocked_entity_resolution", details.GetProperty("status").GetString());
        StringAssert.Contains(details.GetProperty("validationErrors")[0].GetString(), "ghost_entity");

        var emptySitemap = SeedApp("Empty Sitemap App", "devkit_emptyxml", withSiteMap: true);
        _context.GetOrganizationService().Update(new Entity("sitemap", emptySitemap.SiteMapId) { ["sitemapxml"] = "" });
        var empty = await tool.manage_app(null!, action: "update_navigation", app: "Empty Sitemap App",
            operations: "[{\"action\":\"add_area\",\"title\":\"X\"}]");
        Assert.IsTrue(empty.IsError == true);
        StringAssert.Contains(empty.GetText(), "has no sitemapxml content");
    }

    [TestMethod]
    public void UpdateNavigation_NoChangesWhenItemAlreadySatisfied()
    {
        SeedApp("Sales Hub", "devkit_hub1", withSiteMap: true);
        var tool = NewTool();
        SetWorkspace(tool, _workspace);

        var result = Invoke(tool, "HandleUpdateNavigation", "Sales Hub",
            "[{\"action\":\"add_item\",\"area\":\"area_default\",\"group\":\"group_default\",\"entity\":\"account\"}]");
        Assert.IsFalse(result.IsError == true);
        var structured = result.StructuredContent!.Value;
        Assert.AreEqual("update_navigation", structured.GetProperty("action").GetString());
        Assert.AreEqual("no_changes", structured.GetProperty("status").GetString());
        Assert.IsFalse(structured.GetProperty("navigationChanged").GetBoolean());
        Assert.AreEqual(1, structured.GetProperty("noOpOperations").GetInt32());
        Assert.IsFalse(structured.GetProperty("published").GetBoolean());
        Assert.IsTrue(File.Exists(structured.GetProperty("backupPath").GetString()));
    }

    [TestMethod]
    public void UpdateNavigation_AddsEntityItemAndPublishes()
    {
        var (_, _, siteMapId) = SeedApp("Sales Hub", "devkit_hub1", withSiteMap: true);
        var tool = NewTool();
        SetWorkspace(tool, _workspace);

        var result = Invoke(tool, "HandleUpdateNavigation", "Sales Hub",
            "[{\"action\":\"add_item\",\"area\":\"area_default\",\"group\":\"group_default\",\"entity\":\"Contact\"}]");
        Assert.IsFalse(result.IsError == true);
        var structured = result.StructuredContent!.Value;
        Assert.AreEqual("updated", structured.GetProperty("status").GetString());
        Assert.AreEqual(1, structured.GetProperty("operationsCount").GetInt32());
        Assert.AreEqual(1, structured.GetProperty("changedOperations").GetInt32());
        Assert.IsTrue(structured.GetProperty("navigationChanged").GetBoolean());
        Assert.IsTrue(structured.GetProperty("published").GetBoolean());
        Assert.AreEqual("contact", structured.GetProperty("addedAppComponents")[0].GetString());
        Assert.IsTrue(File.Exists(structured.GetProperty("backupPath").GetString()));

        var siteMap = _context.GetOrganizationService().Retrieve("sitemap", siteMapId, new ColumnSet("sitemapxml"));
        var xml = siteMap.GetAttributeValue<string>("sitemapxml");
        StringAssert.Contains(xml, "Entity=\"contact\"");
        StringAssert.Contains(xml, "Title=\"Contact\"");
    }

    [TestMethod]
    public void UpdateNavigation_AddsAllPageTypesAndSkipsExistingComponentsOnRetry()
    {
        var (appId, appUniqueId, siteMapId) = SeedApp("Sales Hub", "devkit_hub1", withSiteMap: true);
        var (dashboardId, webResourceId) = SeedNavigationPages();
        SeedIconWebResource("ab_/icons/page.svg", 11);
        var tool = NewTool();
        SetWorkspace(tool, _workspace);
        var operations = $$"""
            [
              {"action":"add_item","area":"area_default","group":"group_default","id":"sa_link","label":"Link","url":"/workplace/home_dashboards.aspx?a=1&b=2"},
              {"action":"add_item","area":"area_default","group":"group_default","id":"sa_dashboard","label":"Dashboard","dashboard_id":"{{dashboardId}}"},
              {"action":"add_item","area":"area_default","group":"group_default","id":"sa_web","label":"Page","webresource":"ab_/html/page.html","icon":"$webresource:ab_/icons/page.svg"},
              {"action":"add_item","area":"area_default","group":"group_default","id":"sa_web2","label":"Second page","webresource":"$webresource:ab_/html/page.html"}
            ]
            """;

        var first = Invoke(tool, "HandleUpdateNavigation", appId.ToString(), operations);
        Assert.IsFalse(first.IsError == true, first.GetText());
        var result = first.StructuredContent!.Value;
        Assert.IsTrue(result.GetProperty("published").GetBoolean());
        Assert.AreEqual(4, result.GetProperty("changedOperations").GetInt32());
        Assert.AreEqual(2, result.GetProperty("addedAppComponents").GetArrayLength());
        var request = _componentExecutor.Requests.Single();
        Assert.AreEqual(appId, request.AppId);
        CollectionAssert.AreEquivalent(
            new[] { new EntityReference("systemform", dashboardId), new EntityReference("webresource", webResourceId) },
            request.Components.ToArray());

        var items = XDocument.Parse(ReadSiteMap(siteMapId)).Descendants("SubArea").ToDictionary(item => (string)item.Attribute("Id")!);
        Assert.AreEqual("/workplace/home_dashboards.aspx?a=1&b=2", (string?)items["sa_link"].Attribute("Url"));
        Assert.AreEqual(dashboardId.ToString("D"), (string?)items["sa_dashboard"].Attribute("DefaultDashboard"));
        Assert.AreEqual("/workplace/home_dashboards.aspx", (string?)items["sa_dashboard"].Attribute("Url"));
        Assert.AreEqual("$webresource:ab_/html/page.html", (string?)items["sa_web"].Attribute("Url"));
        Assert.AreEqual("$webresource:ab_/icons/page.svg", (string?)items["sa_web"].Attribute("Icon"));
        Assert.AreEqual("$webresource:ab_/html/page.html", (string?)items["sa_web2"].Attribute("Url"));
        Assert.AreEqual("Link", (string?)items["sa_link"].Descendants("Title").Single().Attribute("Title"));
        Assert.IsNull(items["sa_link"].Attribute("Entity"));

        SeedPageComponent(appUniqueId, 60, dashboardId);
        SeedPageComponent(appUniqueId, 61, webResourceId);
        var retry = Invoke(tool, "HandleUpdateNavigation", appId.ToString(), operations);
        Assert.AreEqual("no_changes", retry.StructuredContent!.Value.GetProperty("status").GetString());
        Assert.HasCount(1, _componentExecutor.Requests);
    }

    [TestMethod]
    [DataRow("ab_/icons/dashboard.svg")]
    [DataRow("$WEBRESOURCE: ab_/icons/dashboard.svg")]
    public async Task UpdateNavigation_AddDashboardWithSvgIconNormalizesAndReportsIt(string icon)
    {
        var (appId, appUniqueId, siteMapId) = SeedApp("Sales Hub", "devkit_hub1", withSiteMap: true);
        var (dashboardId, _) = SeedNavigationPages();
        SeedIconWebResource("ab_/icons/dashboard.svg", 11);
        var tool = NewTool();
        SetWorkspace(tool, _workspace);
        var operations = $$"""
            [{"action":"add_item","area":"area_default","group":"group_default","id":"sa_dashboard","dashboard_id":"{{dashboardId}}","icon":"{{icon}}"}]
            """;

        var added = Invoke(tool, "HandleUpdateNavigation", appId.ToString(), operations);
        Assert.IsFalse(added.IsError == true, added.GetText());
        var dashboard = XDocument.Parse(ReadSiteMap(siteMapId)).Descendants("SubArea")
            .Single(item => (string?)item.Attribute("Id") == "sa_dashboard");
        Assert.AreEqual("$webresource:ab_/icons/dashboard.svg", (string?)dashboard.Attribute("Icon"));
        Assert.AreEqual(dashboardId.ToString("D"), (string?)dashboard.Attribute("DefaultDashboard"));
        Assert.AreEqual("/workplace/home_dashboards.aspx", (string?)dashboard.Attribute("Url"));
        Assert.AreEqual("systemform", _componentExecutor.Requests.Single().Components.Single().LogicalName);

        var detail = await tool.manage_app(null!, action: "detail", app: appId.ToString());
        var navigationItem = detail.StructuredContent!.Value.GetProperty("navigationAreas")[0]
            .GetProperty("groups")[0].GetProperty("items").EnumerateArray()
            .Single(item => item.GetProperty("id").GetString() == "sa_dashboard");
        Assert.AreEqual("$webresource:ab_/icons/dashboard.svg", navigationItem.GetProperty("icon").GetString());

        SeedPageComponent(appUniqueId, 60, dashboardId);
        var retry = Invoke(tool, "HandleUpdateNavigation", appId.ToString(), operations);
        Assert.AreEqual("no_changes", retry.StructuredContent!.Value.GetProperty("status").GetString());
        Assert.HasCount(1, _componentExecutor.Requests);

        var beforeConflict = ReadSiteMap(siteMapId);
        var conflictingAdd = Invoke(tool, "HandleUpdateNavigation", appId.ToString(),
            operations.Replace(icon, "ab_/icons/other.svg", StringComparison.Ordinal));
        Assert.IsTrue(conflictingAdd.IsError == true, conflictingAdd.GetText());
        StringAssert.Contains(conflictingAdd.GetText(), "Use update_item to set its icon");
        Assert.AreEqual(beforeConflict, ReadSiteMap(siteMapId));
    }

    [TestMethod]
    [DataRow(true, true)]
    [DataRow(true, false)]
    [DataRow(false, true)]
    public void UpdateNavigation_RepairsDashboardXmlWhenIdIsUnchanged(bool bracedGuid, bool legacyUrl)
    {
        var (appId, appUniqueId, siteMapId) = SeedApp("Sales Hub", "devkit_hub1", withSiteMap: true);
        var (dashboardId, _) = SeedNavigationPages();
        SeedPageComponent(appUniqueId, 60, dashboardId);
        var oldDefault = dashboardId.ToString(bracedGuid ? "B" : "D");
        var oldUrl = legacyUrl
            ? $"/dashboards/dashboard.aspx?dashboardId={dashboardId:D}"
            : "/workplace/home_dashboards.aspx";
        _context.GetOrganizationService().Update(new Entity("sitemap", siteMapId)
        {
            ["sitemapxml"] = StarterXml.Replace("</Group>", $"""
                <SubArea Id="sa_dashboard" DefaultDashboard="{oldDefault}" Url="{oldUrl}" Icon="$webresource:ab_/icons/dashboard.svg">
                  <Titles><Title LCID="1033" Title="Dashboard" /></Titles>
                </SubArea>
                </Group>
                """)
        });
        var tool = NewTool();
        SetWorkspace(tool, _workspace);
        var operations = $$"""
            [{"action":"update_item","area":"area_default","group":"group_default","item":"sa_dashboard","dashboard_id":"{{dashboardId:B}}"}]
            """;

        var result = Invoke(tool, "HandleUpdateNavigation", appId.ToString(), operations);
        Assert.IsFalse(result.IsError == true, result.GetText());
        var data = result.StructuredContent!.Value;
        Assert.AreEqual("updated", data.GetProperty("status").GetString());
        Assert.IsTrue(data.GetProperty("published").GetBoolean());
        var dashboard = XDocument.Parse(ReadSiteMap(siteMapId)).Descendants("SubArea")
            .Single(item => (string?)item.Attribute("Id") == "sa_dashboard");
        Assert.AreEqual(dashboardId.ToString("D"), (string?)dashboard.Attribute("DefaultDashboard"));
        Assert.AreEqual("/workplace/home_dashboards.aspx", (string?)dashboard.Attribute("Url"));
        Assert.AreEqual("$webresource:ab_/icons/dashboard.svg", (string?)dashboard.Attribute("Icon"));
        Assert.AreEqual("Dashboard", (string?)dashboard.Descendants("Title").Single().Attribute("Title"));

        var retry = Invoke(tool, "HandleUpdateNavigation", appId.ToString(), operations);
        Assert.AreEqual("no_changes", retry.StructuredContent!.Value.GetProperty("status").GetString());
        Assert.IsEmpty(_componentExecutor.Requests);
    }

    [TestMethod]
    public void UpdateNavigation_DashboardIconOnlyUpdateKeepsTargetAndIsIdempotent()
    {
        var (appId, _, siteMapId) = SeedApp("Sales Hub", "devkit_hub1", withSiteMap: true);
        var dashboardId = Guid.NewGuid();
        var orgService = _context.GetOrganizationService();
        orgService.Update(new Entity("sitemap", siteMapId)
        {
            ["sitemapxml"] = StarterXml.Replace("</Group>", $"""
                <SubArea Id="sa_dashboard" DefaultDashboard="{dashboardId:D}" Url="/workplace/home_dashboards.aspx"
                  Icon="$webresource:ab_/icons/old.svg"><Titles><Title LCID="1033" Title="Dashboard" /></Titles></SubArea>
                </Group>
                """)
        });
        SeedIconWebResource("ab_/icons/dashboard.svg", 11);
        var tool = NewTool();
        SetWorkspace(tool, _workspace);
        const string operations = """
            [{"action":"update_item","area":"area_default","group":"group_default","item":"sa_dashboard","icon":"$webresource:ab_/icons/dashboard.svg"}]
            """;

        var updated = Invoke(tool, "HandleUpdateNavigation", appId.ToString(), operations);
        Assert.IsFalse(updated.IsError == true, updated.GetText());
        Assert.AreEqual("updated", updated.StructuredContent!.Value.GetProperty("status").GetString());
        var dashboard = XDocument.Parse(ReadSiteMap(siteMapId)).Descendants("SubArea")
            .Single(item => (string?)item.Attribute("Id") == "sa_dashboard");
        Assert.AreEqual("$webresource:ab_/icons/dashboard.svg", (string?)dashboard.Attribute("Icon"));
        Assert.AreEqual(dashboardId.ToString("D"), (string?)dashboard.Attribute("DefaultDashboard"));
        Assert.AreEqual("/workplace/home_dashboards.aspx", (string?)dashboard.Attribute("Url"));
        Assert.AreEqual("Dashboard", (string?)dashboard.Descendants("Title").Single().Attribute("Title"));

        var retry = Invoke(tool, "HandleUpdateNavigation", appId.ToString(), operations);
        Assert.AreEqual("no_changes", retry.StructuredContent!.Value.GetProperty("status").GetString());
        Assert.IsEmpty(_componentExecutor.Requests);
    }

    [TestMethod]
    [DataRow("add_item", false, 0, "was not found")]
    [DataRow("add_item", false, 5, "must be an SVG")]
    [DataRow("update_item", false, 0, "was not found")]
    [DataRow("update_item", false, 5, "must be an SVG")]
    [DataRow("add_item", true, 0, "was not found")]
    [DataRow("add_item", true, 11, null)]
    public void UpdateNavigation_DashboardIconValidationPrecedesMutations(
        string action, bool dryRun, int type, string? expectedError)
    {
        var (appId, _, siteMapId) = SeedApp("Sales Hub", "devkit_hub1", withSiteMap: true);
        var (dashboardId, _) = SeedNavigationPages();
        if (action == "update_item")
            _context.GetOrganizationService().Update(new Entity("sitemap", siteMapId)
            {
                ["sitemapxml"] = StarterXml.Replace("</Group>", $"""<SubArea Id="sa_dashboard" DefaultDashboard="{dashboardId:B}" /></Group>""")
            });
        var originalXml = ReadSiteMap(siteMapId);
        if (type != 0)
            SeedIconWebResource("ab_/icons/test.svg", type);
        var tool = NewTool(dryRun);
        SetWorkspace(tool, _workspace);
        var operations = $$"""
            [{"action":"{{action}}","area":"area_default","group":"group_default","id":"sa_dashboard","item":"sa_dashboard",
              "dashboard_id":"{{dashboardId}}","icon":"ab_/icons/test.svg"}]
            """;

        var result = Invoke(tool, "HandleUpdateNavigation", appId.ToString(), operations);
        if (expectedError == null)
            Assert.AreEqual("not_executed", result.StructuredContent!.Value.GetProperty("status").GetString());
        else
        {
            Assert.IsTrue(result.IsError == true, result.GetText());
            StringAssert.Contains(result.GetText(), expectedError);
        }
        Assert.AreEqual(originalXml, ReadSiteMap(siteMapId));
        Assert.IsEmpty(_componentExecutor.Requests);
        Assert.IsEmpty(Directory.GetFiles(_workspace, "*", SearchOption.AllDirectories));
    }

    [TestMethod]
    [DataRow(11, null)]
    [DataRow(0, "was not found")]
    [DataRow(5, "must be an SVG")]
    public void UpdateNavigation_WebResourceIconOnlyUpdateValidatesResource(int iconType, string? expectedError)
    {
        var (appId, _, siteMapId) = SeedApp("Sales Hub", "devkit_hub1", withSiteMap: true);
        const string pageUrl = "$WEBRESOURCE:ab_/html/Dashboard.html";
        var originalXml = StarterXml.Replace("</Group>", $"""
            <SubArea Id="sa_executive_bi" Url="{pageUrl}">
              <Titles><Title LCID="1033" Title="Executive BI Dashboard" /></Titles>
            </SubArea>
            </Group>
            """);
        _context.GetOrganizationService().Update(new Entity("sitemap", siteMapId) { ["sitemapxml"] = originalXml });
        if (iconType != 0)
            SeedIconWebResource("ab_/images/other/dashboard.svg", iconType);
        var tool = NewTool();
        SetWorkspace(tool, _workspace);
        const string operations = """
            [{"action":"update_item","area":"area_default","group":"group_default","item":"sa_executive_bi","icon":"ab_/images/other/dashboard.svg"}]
            """;

        var result = Invoke(tool, "HandleUpdateNavigation", appId.ToString(), operations);
        if (expectedError == null)
        {
            Assert.IsFalse(result.IsError == true, result.GetText());
            Assert.AreEqual("updated", result.StructuredContent!.Value.GetProperty("status").GetString());
            var page = XDocument.Parse(ReadSiteMap(siteMapId)).Descendants("SubArea")
                .Single(item => (string?)item.Attribute("Id") == "sa_executive_bi");
            Assert.AreEqual(pageUrl, (string?)page.Attribute("Url"));
            Assert.AreEqual("$webresource:ab_/images/other/dashboard.svg", (string?)page.Attribute("Icon"));
            Assert.IsNull(page.Attribute("DefaultDashboard"));

            var retry = Invoke(tool, "HandleUpdateNavigation", appId.ToString(), operations);
            Assert.AreEqual("no_changes", retry.StructuredContent!.Value.GetProperty("status").GetString());
        }
        else
        {
            Assert.IsTrue(result.IsError == true, result.GetText());
            StringAssert.Contains(result.GetText(), $"WebResource icon 'ab_/images/other/dashboard.svg' {expectedError}");
            Assert.AreEqual(originalXml, ReadSiteMap(siteMapId));
            Assert.IsEmpty(Directory.GetFiles(_workspace, "*", SearchOption.AllDirectories));
        }
        Assert.IsEmpty(_componentExecutor.Requests);
    }

    [TestMethod]
    [DataRow("\"url\":\"/page\",\"icon\":\"ab_/icons/test.svg\"", "on Dashboard and WebResource items only")]
    [DataRow("\"dashboard_id\":\"e768c201-a0c8-4194-b027-5324a51e628b\",\"icon\":\"$webresource:\"", "requires a web resource name")]
    [DataRow("\"dashboard_id\":\"e768c201-a0c8-4194-b027-5324a51e628b\",\"icon\":false", "'icon' to be a non-empty string")]
    public void UpdateNavigation_RejectsInvalidDashboardIconArguments(string targetJson, string expectedError)
    {
        var (appId, _, siteMapId) = SeedApp("Sales Hub", "devkit_hub1", withSiteMap: true);
        var tool = NewTool();
        SetWorkspace(tool, _workspace);
        var result = Invoke(tool, "HandleUpdateNavigation", appId.ToString(), $$"""
            [{"action":"add_item","area":"area_default","group":"group_default","id":"sa_invalid",{{targetJson}} }]
            """);
        Assert.IsTrue(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), expectedError);
        Assert.AreEqual(StarterXml, ReadSiteMap(siteMapId));
    }

    private void SeedIconWebResource(string name, int type) =>
        _context.GetOrganizationService().Create(new Entity("webresource")
        {
            ["name"] = name, ["webresourcetype"] = new OptionSetValue(type)
        });

    [TestMethod]
    public void UpdateNavigation_UpdatesMovesAndRemovesNonEntityItems()
    {
        var (appId, appUniqueId, siteMapId) = SeedApp("Sales Hub", "devkit_hub1", withSiteMap: true);
        var (dashboardId, _) = SeedNavigationPages();
        SeedPageComponent(appUniqueId, 60, dashboardId);
        var tool = NewTool();
        SetWorkspace(tool, _workspace);
        var operations = $$"""
            [
              {"action":"add_group","area":"area_default","id":"group_extra","label":"Extra"},
              {"action":"add_item","area":"area_default","group":"group_default","id":"sa_retarget","url":"/first","label":"First"},
              {"action":"update_item","area":"area_default","group":"group_default","item":"sa_retarget","default_dashboard":"{{dashboardId:B}}","label":"Retargeted"},
              {"action":"move_item","from_area":"area_default","from_group":"group_default","item":"sa_retarget","to_area":"area_default","to_group":"group_extra"},
              {"action":"add_item","area":"area_default","group":"group_extra","id":"sa_removed","webresource":"ab_/html/missing.html"},
              {"action":"remove_item","area":"area_default","group":"group_extra","item":"sa_removed"}
            ]
            """;

        var result = Invoke(tool, "HandleUpdateNavigation", appId.ToString(), operations);
        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.IsEmpty(_componentExecutor.Requests);
        var group = XDocument.Parse(ReadSiteMap(siteMapId)).Descendants("Group").Single(e => (string?)e.Attribute("Id") == "group_extra");
        var item = group.Elements("SubArea").Single();
        Assert.AreEqual("sa_retarget", (string?)item.Attribute("Id"));
        Assert.AreEqual(dashboardId.ToString("D"), (string?)item.Attribute("DefaultDashboard"));
        Assert.AreEqual("/workplace/home_dashboards.aspx", (string?)item.Attribute("Url"));
        Assert.AreEqual("Retargeted", (string?)item.Descendants("Title").Single().Attribute("Title"));
    }

    [TestMethod]
    [DataRow("\"dashboard_id\":\"not-a-guid\"", "dashboard GUID")]
    [DataRow("\"dashboard_id\":\"00000000-0000-0000-0000-000000000000\"", "dashboard GUID")]
    [DataRow("\"webresource\":\"$webresource:\"", "web resource name")]
    [DataRow("\"entity\":\"account\",\"url\":\"/two-targets\"", "only one target")]
    [DataRow("\"url\":false", "non-empty string")]
    public void UpdateNavigation_RejectsInvalidTargets(string targetJson, string expectedError)
    {
        var (appId, _, siteMapId) = SeedApp("Sales Hub", "devkit_hub1", withSiteMap: true);
        var tool = NewTool();
        SetWorkspace(tool, _workspace);
        var result = Invoke(tool, "HandleUpdateNavigation", appId.ToString(), $$"""
            [{"action":"add_item","area":"area_default","group":"group_default","id":"sa_invalid",{{targetJson}} }]
            """);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), expectedError);
        Assert.AreEqual(StarterXml, ReadSiteMap(siteMapId));
        Assert.IsEmpty(_componentExecutor.Requests);
    }

    [TestMethod]
    public void UpdateNavigation_WebResourceUsesSiteMapDependencyWhenAppTypeIsUnavailable()
    {
        var (appId, _, siteMapId) = SeedApp("Sales Hub", "devkit_hub1", withSiteMap: true);
        SeedNavigationPages();
        _componentTypeExecutor.SupportsWebResources = false;
        var tool = NewTool();
        SetWorkspace(tool, _workspace);

        var result = Invoke(tool, "HandleUpdateNavigation", appId.ToString(), """
            [{"action":"add_item","area":"area_default","group":"group_default","id":"sa_help","webresource":"ab_/html/page.html"}]
            """);

        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.IsTrue(result.StructuredContent!.Value.GetProperty("published").GetBoolean());
        StringAssert.Contains(ReadSiteMap(siteMapId), """Url="$webresource:ab_/html/page.html" """.TrimEnd());
        Assert.IsEmpty(_componentExecutor.Requests);
    }

    [TestMethod]
    public void UpdateNavigation_RepairsMissingComponentForExistingPageWithoutChangingXml()
    {
        var (appId, _, siteMapId) = SeedApp("Sales Hub", "devkit_hub1", withSiteMap: true);
        var (_, webResourceId) = SeedNavigationPages();
        var originalXml = StarterXml.Replace("</Group>", """<SubArea Id="sa_web" Url="$webresource:ab_/html/page.html" /></Group>""");
        _context.GetOrganizationService().Update(new Entity("sitemap", siteMapId) { ["sitemapxml"] = originalXml });
        var tool = NewTool();
        SetWorkspace(tool, _workspace);
        var result = Invoke(tool, "HandleUpdateNavigation", appId.ToString(), """
            [{"action":"add_item","area":"area_default","group":"group_default","id":"sa_web","webresource":"ab_/html/page.html"}]
            """);

        Assert.IsFalse(result.IsError == true, result.GetText());
        var data = result.StructuredContent!.Value;
        Assert.IsTrue(data.GetProperty("published").GetBoolean());
        Assert.IsFalse(data.GetProperty("navigationChanged").GetBoolean());
        Assert.AreEqual(webResourceId, _componentExecutor.Requests.Single().Components.Single().Id);
        Assert.AreEqual(originalXml, ReadSiteMap(siteMapId));
    }

    [TestMethod]
    [DataRow("url", "/workplace/home_dashboards.aspx")]
    [DataRow("dashboard_id", "e768c201-a0c8-4194-b027-5324a51e628b")]
    [DataRow("webresource", "ab_/html/page.html")]
    public void UpdateNavigation_MissingReferencesAndDryRunHaveNoSideEffects(string field, string value)
    {
        var (appId, _, siteMapId) = SeedApp("Sales Hub", "devkit_hub1", withSiteMap: true);
        var dryRun = field == "url";
        if (field == "dashboard_id")
            _context.GetOrganizationService().Create(new Entity("systemform", Guid.Parse(value))
            {
                ["formid"] = Guid.Parse(value), ["type"] = new OptionSetValue(2)
            });
        var tool = NewTool(dryRun);
        SetWorkspace(tool, _workspace);
        var operations = $$"""
            [{"action":"add_item","area":"area_default","group":"group_default","id":"sa_new","label":"Page","{{field}}":"{{value}}"}]
            """;
        var result = Invoke(tool, "HandleUpdateNavigation", appId.ToString(), operations);
        Assert.AreEqual(!dryRun, result.IsError == true, result.GetText());
        if (dryRun)
            Assert.AreEqual("not_executed", result.StructuredContent!.Value.GetProperty("status").GetString());
        else
            StringAssert.Contains(result.GetText(), "was not found");
        Assert.AreEqual(StarterXml, ReadSiteMap(siteMapId));
        Assert.IsEmpty(_componentExecutor.Requests);
        Assert.IsEmpty(Directory.GetFiles(_workspace, "*", SearchOption.AllDirectories));
    }

    private (Guid DashboardId, Guid WebResourceId) SeedNavigationPages()
    {
        var orgService = _context.GetOrganizationService();
        var dashboardId = Guid.NewGuid();
        return (orgService.Create(new Entity("systemform", dashboardId)
                { ["formid"] = dashboardId, ["type"] = new OptionSetValue(0) }),
            orgService.Create(new Entity("webresource") { ["name"] = "ab_/html/page.html" }));
    }

    private string ReadSiteMap(Guid id) => _context.GetOrganizationService()
        .Retrieve("sitemap", id, new ColumnSet("sitemapxml")).GetAttributeValue<string>("sitemapxml");

    private void SeedPageComponent(Guid appUniqueId, int type, Guid id) =>
        _context.GetOrganizationService().Create(new Entity("appmodulecomponent")
        {
            ["appmoduleidunique"] = appUniqueId, ["componenttype"] = new OptionSetValue(type), ["objectid"] = id
        });

    // ──────────────────────────────────────────────
    // undo (mutation paths + guards)
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task Undo_GuardsRejectBadInputs()
    {
        var (appId, _, _) = SeedApp("Sales Hub", "devkit_hub1", withSiteMap: true);
        SeedApp("Other App", "devkit_other", withSiteMap: true);
        var tool = NewTool();

        var noApp = await tool.manage_app(null!, action: "undo", operations: "backup.json");
        Assert.IsTrue(noApp.IsError == true);
        StringAssert.Contains(noApp.GetText(), "app is required");

        var noOps = await tool.manage_app(null!, action: "undo", app: "Sales Hub");
        Assert.IsTrue(noOps.IsError == true);
        StringAssert.Contains(noOps.GetText(), "operations is required");

        var arrayInput = await tool.manage_app(null!, action: "undo", app: "Sales Hub",
            operations: "[{\"action\":\"add_area\"}]");
        Assert.IsTrue(arrayInput.IsError == true);
        StringAssert.Contains(arrayInput.GetText(), "backup file path, not a navigation operations JSON array");

        var missingFile = await tool.manage_app(null!, action: "undo", app: "Sales Hub",
            operations: Path.Combine(_workspace, "missing.app.json"));
        Assert.IsTrue(missingFile.IsError == true);
        StringAssert.Contains(missingFile.GetText(), "was not found");

        var wrongKindPath = Path.Combine(_workspace, "wrong.app.json");
        File.WriteAllText(wrongKindPath, "{\"kind\":\"other.snapshot\"}");
        var wrongKind = await tool.manage_app(null!, action: "undo", app: "Sales Hub", operations: wrongKindPath);
        Assert.IsTrue(wrongKind.IsError == true);
        StringAssert.Contains(wrongKind.GetText(), "not a manage_app snapshot");

        var mismatchPath = Path.Combine(_workspace, "mismatch.app.json");
        File.WriteAllText(mismatchPath, JsonSerializer.Serialize(new
        {
            kind = "manage_app.snapshot",
            appModuleId = Guid.NewGuid().ToString(),
            sitemapxml = StarterXml
        }));
        var mismatch = await tool.manage_app(null!, action: "undo", app: "Sales Hub", operations: mismatchPath);
        Assert.IsTrue(mismatch.IsError == true);
        StringAssert.Contains(mismatch.GetText(), "does not match current app");

        var noSitemapXmlPath = Path.Combine(_workspace, "emptyxml.app.json");
        File.WriteAllText(noSitemapXmlPath, JsonSerializer.Serialize(new
        {
            kind = "manage_app.snapshot",
            appModuleId = appId.ToString()
        }));
        var noSitemapXml = await tool.manage_app(null!, action: "undo", app: "Sales Hub", operations: noSitemapXmlPath);
        Assert.IsTrue(noSitemapXml.IsError == true);
        StringAssert.Contains(noSitemapXml.GetText(), "does not contain sitemapxml");
    }

    [TestMethod]
    public void Undo_RestoresSitemapFromBackupSnapshot()
    {
        var (_, _, siteMapId) = SeedApp("Sales Hub", "devkit_hub1", withSiteMap: true);
        var tool = NewTool();
        SetWorkspace(tool, _workspace);

        var changed = Invoke(tool, "HandleUpdateNavigation", "Sales Hub",
            "[{\"action\":\"add_item\",\"area\":\"area_default\",\"group\":\"group_default\",\"entity\":\"Contact\"}]");
        var backupPath = changed.StructuredContent!.Value.GetProperty("backupPath").GetString();
        Assert.IsTrue(File.Exists(backupPath));
        StringAssert.Contains(
            _context.GetOrganizationService().Retrieve("sitemap", siteMapId, new ColumnSet("sitemapxml"))
                .GetAttributeValue<string>("sitemapxml"), "Entity=\"contact\"");

        var restored = Invoke(tool, "HandleUndo", "Sales Hub", backupPath);
        Assert.IsFalse(restored.IsError == true);
        var structured = restored.StructuredContent!.Value;
        Assert.AreEqual("undo", structured.GetProperty("action").GetString());
        Assert.AreEqual("restored", structured.GetProperty("status").GetString());
        Assert.AreEqual(backupPath, structured.GetProperty("restoredFromBackup").GetString());
        Assert.IsTrue(structured.GetProperty("published").GetBoolean());
        Assert.IsTrue(File.Exists(structured.GetProperty("backupPath").GetString()));

        var xml = _context.GetOrganizationService().Retrieve("sitemap", siteMapId, new ColumnSet("sitemapxml"))
            .GetAttributeValue<string>("sitemapxml");
        Assert.IsFalse(xml.Contains("Entity=\"contact\""), "undo must remove the item added after the backup");
        StringAssert.Contains(xml, "Entity=\"account\"");
    }

    // ──────────────────────────────────────────────
    // dispatch guard
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task ManageApp_RejectsUnknownAction()
    {
        var tool = NewTool();
        var result = await tool.manage_app(null!, action: "bogus");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Invalid action 'bogus'");
    }

    // ──────────────────────────────────────────────
    // helpers
    // ──────────────────────────────────────────────

    private ManageAppTool NewTool(bool dryRun = false, bool mutationsBlocked = false) =>
        new(_context.GetOrganizationService(), new McpDryRunOptions { DryRun = dryRun },
            new McpExecutionContext(mutationsBlocked));

    private static void SetWorkspace(ManageAppTool tool, string folder) =>
        typeof(ManageAppTool).GetField("_workspaceFolder", PrivateInstance)!.SetValue(tool, folder);

    private static CallToolResult Invoke(ManageAppTool tool, string handler, params object?[] args) =>
        (CallToolResult)typeof(ManageAppTool).GetMethod(handler, PrivateInstance)!.Invoke(tool, args)!;

    private (Guid AppId, Guid AppUniqueId, Guid SiteMapId) SeedApp(string name, string uniqueName, bool withSiteMap)
    {
        var appId = Guid.NewGuid();
        var appUniqueId = Guid.NewGuid();
        var siteMapId = Guid.NewGuid();
        var service = _context.GetOrganizationService();

        service.Create(new Entity("appmodule", appId)
        {
            ["appmoduleidunique"] = appUniqueId,
            ["name"] = name,
            ["uniquename"] = uniqueName,
            ["description"] = $"{name} description"
        });

        if (withSiteMap)
        {
            service.Create(new Entity("sitemap", siteMapId)
            {
                ["sitemapname"] = $"{name} SiteMap",
                ["sitemapnameunique"] = $"{uniqueName}SiteMap",
                ["sitemapxml"] = StarterXml
            });
            service.Create(new Entity("appmodulecomponent", Guid.NewGuid())
            {
                ["appmoduleidunique"] = appUniqueId,
                ["componenttype"] = new OptionSetValue(62),
                ["objectid"] = siteMapId
            });
        }
        return (appId, appUniqueId, siteMapId);
    }

    private void SeedSolution()
    {
        var publisherId = Guid.NewGuid();
        var service = _context.GetOrganizationService();
        service.Create(new Entity("publisher", publisherId)
        {
            ["customizationprefix"] = "devkit",
            ["customizationoptionvalueprefix"] = 100
        });
        service.Create(new Entity("solution", Guid.NewGuid())
        {
            ["uniquename"] = "devkitsol",
            ["friendlyname"] = "DevKit Solution",
            ["publisherid"] = new EntityReference("publisher", publisherId)
        });
    }

    private int CountRows(string entityName, string attributeName, string value)
    {
        var query = new QueryExpression(entityName)
        {
            ColumnSet = new ColumnSet(attributeName),
            Criteria = { Conditions = { new ConditionExpression(attributeName, ConditionOperator.Equal, value) } }
        };
        return _context.GetOrganizationService().RetrieveMultiple(query).Entities.Count;
    }

    private static EntityMetadata EntityMeta(string logicalName, string displayName)
    {
        var metadata = new EntityMetadata
        {
            LogicalName = logicalName,
            SchemaName = logicalName,
            DisplayName = new Label(displayName, 1033)
        };
        // NormalizeNavigationEntityReferences reads UserLocalizedLabel (not
        // LocalizedLabels), so seed it explicitly — the Label ctor alone does not.
        metadata.DisplayName.UserLocalizedLabel = new LocalizedLabel(displayName, 1033);
        typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.MetadataId))!.SetValue(metadata, Guid.NewGuid());
        return metadata;
    }

    // ──────────────────────────────────────────────
    // fake message executors
    // ──────────────────────────────────────────────

    private sealed class ValidationResponseStub
    {
        public List<ValidationIssueStub> ValidationIssueList { get; set; } = [];
    }

    private sealed class ValidationIssueStub
    {
        public string Message { get; set; } = "";
        public string ErrorType { get; set; } = "";
    }

    /// <summary>Answers the raw ValidateApp OrganizationRequest with configurable issues.</summary>
    private sealed class FakeValidateAppExecutor : FakeXrmEasy.Abstractions.FakeMessageExecutors.IFakeMessageExecutor
    {
        public List<ValidationIssueStub> Issues { get; } = [];

        public bool CanExecute(OrganizationRequest request) =>
            request is OrganizationRequest { RequestName: "ValidateApp" };

        public OrganizationResponse Execute(OrganizationRequest request, IXrmFakedContext context)
        {
            var response = new OrganizationResponse();
            response.Results["AppValidationResponse"] = new ValidationResponseStub { ValidationIssueList = Issues.ToList() };
            return response;
        }

        public Type GetResponsibleRequestType() => typeof(OrganizationRequest);
    }

    private sealed class FakeAppComponentTypeExecutor : FakeXrmEasy.Abstractions.FakeMessageExecutors.IFakeMessageExecutor
    {
        public bool SupportsWebResources { get; set; } = true;

        public bool CanExecute(OrganizationRequest request) => request is RetrieveAttributeRequest;

        public OrganizationResponse Execute(OrganizationRequest request, IXrmFakedContext context)
        {
            var options = new OptionSetMetadata();
            options.Options.Add(new OptionMetadata(new Label("Forms", 1033), 60));
            if (SupportsWebResources)
                options.Options.Add(new OptionMetadata(new Label("Web Resources", 1033), 61));
            var response = new RetrieveAttributeResponse();
            response.Results["AttributeMetadata"] = new PicklistAttributeMetadata { OptionSet = options };
            return response;
        }

        public Type GetResponsibleRequestType() => typeof(RetrieveAttributeRequest);
    }

    /// <summary>Answers AddAppComponentsRequest (appmodulecomponent add) with an empty response.</summary>
    private sealed class FakeAddAppComponentsExecutor : FakeXrmEasy.Abstractions.FakeMessageExecutors.IFakeMessageExecutor
    {
        public List<AddAppComponentsRequest> Requests { get; } = [];

        public bool CanExecute(OrganizationRequest request) => request is AddAppComponentsRequest;

        public OrganizationResponse Execute(OrganizationRequest request, IXrmFakedContext context)
        {
            Requests.Add((AddAppComponentsRequest)request);
            return new OrganizationResponse();
        }

        public Type GetResponsibleRequestType() => typeof(AddAppComponentsRequest);
    }

    /// <summary>
    /// Makes PublishXml fail deterministically. PublishHelper swallows the failure,
    /// which also skips MetadataOperationWaitHelper sleeps so tests stay fast.
    /// </summary>
    private sealed class FakeThrowingPublishXmlExecutor : FakeXrmEasy.Abstractions.FakeMessageExecutors.IFakeMessageExecutor
    {
        public bool CanExecute(OrganizationRequest request) => request is PublishXmlRequest;

        public OrganizationResponse Execute(OrganizationRequest request, IXrmFakedContext context) =>
            throw new NotImplementedException("PublishXml is not simulated in unit tests.");

        public Type GetResponsibleRequestType() => typeof(PublishXmlRequest);
    }

    /// <summary>RetrieveEntityRequest answered from a local metadata list.</summary>
    private sealed class FakeRetrieveEntityExecutor : FakeXrmEasy.Abstractions.FakeMessageExecutors.IFakeMessageExecutor
    {
        public List<EntityMetadata> Metadata { get; } = [];

        public bool CanExecute(OrganizationRequest request) => request is RetrieveEntityRequest;

        public OrganizationResponse Execute(OrganizationRequest request, IXrmFakedContext context)
        {
            var retrieveEntity = (RetrieveEntityRequest)request;
            var metadata = Metadata.FirstOrDefault(m => m.LogicalName == retrieveEntity.LogicalName)
                ?? throw new InvalidOperationException($"Metadata not found: {retrieveEntity.LogicalName}");
            var response = new RetrieveEntityResponse();
            response.Results["EntityMetadata"] = metadata;
            return response;
        }

        public Type GetResponsibleRequestType() => typeof(RetrieveEntityRequest);
    }

    /// <summary>RetrieveAllEntitiesRequest answered from a local metadata list.</summary>
    private sealed class FakeRetrieveAllEntitiesExecutor : FakeXrmEasy.Abstractions.FakeMessageExecutors.IFakeMessageExecutor
    {
        private readonly FakeRetrieveEntityExecutor _inner;

        public FakeRetrieveAllEntitiesExecutor(FakeRetrieveEntityExecutor inner) => _inner = inner;

        public bool CanExecute(OrganizationRequest request) => request is RetrieveAllEntitiesRequest;

        public OrganizationResponse Execute(OrganizationRequest request, IXrmFakedContext context)
        {
            var response = new RetrieveAllEntitiesResponse();
            response.Results["EntityMetadata"] = _inner.Metadata.ToArray();
            return response;
        }

        public Type GetResponsibleRequestType() => typeof(RetrieveAllEntitiesRequest);
    }
}
